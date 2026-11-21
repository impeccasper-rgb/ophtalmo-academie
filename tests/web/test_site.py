#!/usr/bin/env python3
"""Ocelle - independent functional test of the static web build (site/), Playwright + Chromium.

  python3 tests/web/test_site.py                 # build site/ (tools/build_web.py), then run everything
  python3 tests/web/test_site.py --no-build      # test the existing site/
  python3 tests/web/test_site.py --quick         # route matrix on 1 combo only (390 light FR) + flows
  python3 tests/web/test_site.py --site DIR --out DIR --axe path/to/axe.min.js

What it covers (see docs/TEST-REPORT.md for the plan and the last results):
  * Route matrix: every main route x {fr, en} x {390x844, 1280x900} x {light, dark}:
      no console/page errors, view rendered (no render-error / not-found), no horizontal overflow,
      no raw i18n key visible, images load (no local 4xx, no broken <img>), French UI strings left in EN mode (info).
  * Flows: investigations practice ("Je ne sais pas" + an answer), #cas-vedette, #image-du-jour (+ streak),
      #cas-images (if the route exists), every Reviser game started + one interaction, QCM series with confidence,
      a full clinical case, progression after reload (localStorage), language switch persistence,
      keyboard basics (Tab to answers, Enter), reduced motion (OS setting and in-app toggle), offline (service worker).
  * Optional axe-core audit (--axe) on 5 key pages.
All non-local requests are blocked (DNS rules + request routing). Exit code 1 when a check fails.
Results: <out>/results.json, <out>/shots/*.png (failures + reference shots).
"""
import argparse, functools, http.server, json, os, re, shutil, socketserver, subprocess, sys, tempfile, threading, time, traceback
from playwright.sync_api import sync_playwright

ROOT = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
ap = argparse.ArgumentParser()
ap.add_argument('--no-build', action='store_true')
ap.add_argument('--site', default=os.path.join(ROOT, 'site'))
ap.add_argument('--out', default=os.path.join(tempfile.gettempdir(), 'ocelle-web-test'))
ap.add_argument('--quick', action='store_true')
ap.add_argument('--axe', default='')
ap.add_argument('--only', default='', help='comma list of sections: routes,flows,offline,axe')
ap.add_argument('--snapshot', action='store_true', help='copy site/ to a temp dir first (stable while others rebuild)')
args = ap.parse_args()
OUT = os.path.abspath(args.out); SHOTS = os.path.join(OUT, 'shots')
os.makedirs(SHOTS, exist_ok=True)
ONLY = set(x for x in args.only.split(',') if x)
def want(sec): return not ONLY or sec in ONLY

if not args.no_build:
    r = subprocess.run([sys.executable, os.path.join(ROOT, 'tools', 'build_web.py')], cwd=ROOT, capture_output=True, text=True)
    print((r.stdout or '').strip()[-400:], (r.stderr or '').strip()[-400:])
    if r.returncode: sys.exit('build failed')
SITE = os.path.abspath(args.site)
if args.snapshot:
    snap = tempfile.mkdtemp(prefix='ocelle-site-'); shutil.copytree(SITE, os.path.join(snap, 'site')); SITE = os.path.join(snap, 'site')

# ---------- local static server (own thread, free port) ----------
class Quiet(http.server.SimpleHTTPRequestHandler):
    def log_message(self, *a): pass
socketserver.TCPServer.allow_reuse_address = True
httpd = http.server.ThreadingHTTPServer(('127.0.0.1', 0), functools.partial(Quiet, directory=SITE))
PORT = httpd.server_address[1]
threading.Thread(target=httpd.serve_forever, daemon=True).start()
ORIGIN = 'http://127.0.0.1:%d' % PORT
BASE = ORIGIN + '/'

RESULTS = []  # {sec, id, ok, combo, route, detail}
def rec(sec, cid, ok, detail='', combo='', route='', severity=''):
    RESULTS.append({'sec': sec, 'id': cid, 'ok': bool(ok), 'combo': combo, 'route': route, 'detail': detail, 'severity': severity})
    if not ok: print('  FAIL [%s] %s %s %s :: %s' % (sec, combo, route, cid, str(detail)[:300]), flush=True)

def log(*a): print(*a, flush=True)

# ---------- page helpers ----------
SCROLL_JS = """async () => {
  const H = () => document.documentElement.scrollHeight; let y = 0, n = 0;
  while (y < H() && n < 40) { window.scrollTo(0, y); await new Promise(r => setTimeout(r, 60)); y += Math.max(400, innerHeight * 0.9); n++; }
  const imgs = [...document.querySelectorAll('img')].filter(i => i.getAttribute('src'));
  const t0 = Date.now();
  while (Date.now() - t0 < 2500 && imgs.some(i => !i.complete && i.loading !== 'lazy')) await new Promise(r => setTimeout(r, 80));
  window.scrollTo(0, 0);
  return true; }"""

PAGE_JS = r"""(keys) => {
  const out = {};
  const view = document.getElementById('view');
  out.viewText = view ? view.innerText.trim().length : 0;
  out.renderError = !!(view && view.querySelector('.callout.red') && /error|erreur|n’a pas pu|could not/i.test(view.querySelector('.callout.red').innerText));
  out.notFound = !!(view && window.t && view.innerText.indexOf(t('view.notfound')) >= 0);
  const de = document.documentElement;
  out.overflow = de.scrollWidth - de.clientWidth;
  out.culprits = [];
  if (out.overflow > 1) {
    const W = de.clientWidth;
    const scrollable = el => { for (let p = el.parentElement; p && p !== document.body; p = p.parentElement) { const s = getComputedStyle(p); if (/(auto|scroll|hidden|clip)/.test(s.overflowX)) return true; } return false; };
    [...document.querySelectorAll('body *')].forEach(el => {
      const r = el.getBoundingClientRect(); if (r.width === 0 || r.right <= W + 1 || scrollable(el)) return;
      const cs = getComputedStyle(el); if (cs.position === 'fixed' || cs.visibility === 'hidden') return;
      out.culprits.push((el.tagName.toLowerCase() + (el.id ? '#' + el.id : '') + (el.className && typeof el.className === 'string' ? '.' + el.className.trim().split(/\s+/).slice(0, 3).join('.') : '')) + ' right=' + Math.round(r.right) + ' w=' + Math.round(r.width));
    });
    out.culprits = out.culprits.slice(0, 6);
  }
  // raw i18n keys visible (body text + aria-labels + titles + placeholders)
  const txt = document.body.innerText;
  const attrs = [...document.querySelectorAll('[aria-label],[title],[placeholder],img[alt]')].map(e => [e.getAttribute('aria-label'), e.getAttribute('title'), e.getAttribute('placeholder'), e.tagName === 'IMG' ? e.getAttribute('alt') : ''].filter(Boolean).join(' | ')).join('\n');
  const hay = txt + '\n' + attrs;
  const found = new Set();
  const tokens = hay.split(/[\s"'«»()\[\]{}:;,!?…]+/);
  const keyset = new Set(keys);
  const PFX = /^(inv|nav|qh|quiz|rev|prog|learn|daily|feat|streak|case|cas|srs|game|deck|hero|brand|web|i18n|rep|meta|view|common|qs|qr|modseg|mod|train|car|depth|pr|ph|media|hub|home|plan|tri|match|cloze|img|urg|mv|lb|gloss|sync|drawer|menu|search|atlas|src|about|footer|fiche|fi|sec|cap|dates|ic|as|oct|vf|fo|bs|go|gonio|tool|credits|sources|express|mb|mc|ma|a5|exp|ext)\.[a-z][A-Za-z0-9_]*(\.[A-Za-z0-9_]+)*$/;
  tokens.forEach(tk => { const w = tk.replace(/[.]+$/, ''); if (!w || w.length < 4) return;
    if (/\.(org|com|ca|net|html?|gov|edu|fr|io|uk|js|css|jpg|png|svg)(\/|$)/i.test(w) || /^www\./.test(w) || /:\/\//.test(w)) return;
    if (keyset.has(w) || PFX.test(w)) found.add(w); });
  out.rawKeys = [...found].slice(0, 12);
  // broken images
  out.broken = [...document.querySelectorAll('img')].filter(i => i.getAttribute('src') && i.complete && i.naturalWidth === 0).map(i => i.getAttribute('src')).slice(0, 10);
  // French leftovers in EN UI chrome (buttons, links, headings, labels, aria)
  out.frUi = [];
  if (document.documentElement.lang === 'en') {
    const FR = /[éèêàçùœ]|\b(le|la|les|des|du|une|un|et|pour|avec|sans|dans|sur|tes|ton|ta|ses|vos|votre|je|tu|nous|suivant|précédent|retour|voir|réviser|accueil|cas|fiche|fiches|images?\s+du|apprendre|examens?)\b/i;
    const seen = new Set();
    document.querySelectorAll('button, a, h1, h2, h3, h4, label, .eyebrow, th, summary, [aria-label], .tag, .chip').forEach(el => {
      if (el.closest('[lang="fr"]') || el.closest('.langsw') || el.closest('.fr-badge,[data-untranslated]')) return;
      if (el.offsetParent === null && !el.getAttribute('aria-label')) return;
      const s = ((el.matches('button,a,h1,h2,h3,h4,label,.eyebrow,th,summary,.tag,.chip') ? el.innerText : '') + ' ' + (el.getAttribute('aria-label') || '')).trim().replace(/\s+/g, ' ');
      if (!s || s.length > 90 || seen.has(s)) return;
      if (FR.test(s)) { seen.add(s); out.frUi.push(s); }
    });
    out.frUi = out.frUi.slice(0, 25);
  }
  out.lang = document.documentElement.lang;
  out.title = document.title;
  return out; }"""


def new_ctx(browser, vw, vh, scheme='light', lang='fr', reduced='no-preference', sw='block'):
    ctx = browser.new_context(viewport={'width': vw, 'height': vh}, color_scheme=scheme, reduced_motion=reduced,
                              locale='fr-CA' if lang == 'fr' else 'en-CA', service_workers=sw, device_scale_factor=1,
                              is_mobile=vw < 500, has_touch=vw < 500)
    ctx.add_init_script("try { if (!localStorage.getItem('oph-lang')) localStorage.setItem('oph-lang', '%s'); } catch (e) {}" % lang)
    blocked = []
    def router(route):
        u = route.request.url
        if u.startswith(ORIGIN) or u.startswith('data:') or u.startswith('blob:'): return route.continue_()
        blocked.append(u); return route.abort()
    if sw == 'block': ctx.route('**/*', router)
    ctx._blocked = blocked
    return ctx


def attach(page):
    st = {'errors': [], 'http': [], 'failed': []}
    def on_console(m):
        if m.type != 'error': return
        loc = (m.location or {}).get('url', '') or ''
        if 'Failed to load resource' in m.text and loc and not loc.startswith(ORIGIN): return  # blocked external (fonts)
        st['errors'].append('console: ' + m.text[:300] + (' @' + loc[-80:] if loc else ''))
    page.on('console', on_console)
    page.on('pageerror', lambda e: st['errors'].append('pageerror: ' + str(e)[:300]))
    page.on('response', lambda r: st['http'].append('%d %s' % (r.status, r.url.replace(ORIGIN, ''))) if r.url.startswith(ORIGIN) and r.status >= 400 else None)
    page.on('requestfailed', lambda r: st['failed'].append(r.url.replace(ORIGIN, '') + ' ' + str(r.failure)) if r.url.startswith(ORIGIN) else None)
    page._st = st
    return st


def reset_st(st):
    st['errors'].clear(); st['http'].clear(); st['failed'].clear()


def go(page, route, wait=350):
    page.evaluate("h => { location.hash = h }", route)
    try:
        page.wait_for_function("() => window.Router && Router.cur === Router.parse()", timeout=4000)
    except Exception:
        pass
    page.wait_for_timeout(wait)


def store(page):
    return page.evaluate("() => { try { return JSON.parse(localStorage.getItem('oph-r1-progress-v1') || 'null'); } catch (e) { return null; } }")


def shot(page, name):
    try:
        page.screenshot(path=os.path.join(SHOTS, re.sub(r'[^\w.-]+', '_', name) + '.png'))
    except Exception:
        pass


def boot(page, lang=None, hash_=''):
    url = BASE + ('?lang=' + lang if lang else '') + ('#' + hash_ if hash_ else '')
    page.goto(url, wait_until='domcontentloaded')
    page.wait_for_function("() => window.Router && document.getElementById('view') && document.getElementById('view').children.length > 0", timeout=10000)
    page.wait_for_timeout(300)


def route_list(page):
    return page.evaluate("""() => {
      const pick3 = a => a.length <= 3 ? a : [a[0], a[Math.floor(a.length / 2)], a[a.length - 1]];
      const r = ['accueil', 'apprendre', 'module-a', 'a-anatomie', 'a-examen', 'a-retine', 'module-b', 'b-bases'];
      pick3(D.ordered('B').map(f => f.id)).forEach(x => r.push(x));
      r.push('module-c', 'c-bases'); pick3(D.ordered('C').map(f => f.id)).forEach(x => r.push(x));
      r.push('investigations'); (OPH.inv || []).forEach(e => r.push('inv-' + e.id));
      r.push('cas-vedette', 'image-du-jour'); if (Views['cas-images']) r.push('cas-images');
      r.push('reviser', 'cartes', 'cartes-vocab', 'mots-troues', 'jeu-images', 'triage', 'associe');
      r.push('quiz', 'cas', (OPH.cases[1] || OPH.cases[0]).id, 'progression', 'sources', 'atlas', 'recherche');
      return r; }""")


I18N_KEYS_JS = "() => { const k = new Set(); try { Object.keys(I18N.dict.fr).forEach(x => k.add(x)); Object.keys(I18N.dict.en).forEach(x => k.add(x)); } catch (e) {} try { (window.Inv && Inv.keys ? (Array.isArray(Inv.keys) ? Inv.keys : Object.keys(Inv.keys)) : []).forEach(x => k.add(typeof x === 'string' ? x : x.key || x[0])); } catch (e) {} return [...k].filter(x => typeof x === 'string' && x.indexOf('.') > 0); }"


# ---------- 1. route matrix ----------
def run_routes(browser):
    combos = [(390, 844, 'light', 'fr')] if args.quick else [(w, h, s, l) for l in ('fr', 'en') for (w, h) in ((390, 844), (1280, 900)) for s in ('light', 'dark')]
    fr_ui = {}
    for vw, vh, scheme, lang in combos:
        combo = '%d-%s-%s' % (vw, scheme, lang)
        log('[routes] %s' % combo)
        ctx = new_ctx(browser, vw, vh, scheme, lang)
        page = ctx.new_page(); st = attach(page)
        boot(page)
        keys = page.evaluate(I18N_KEYS_JS)
        lang_now = page.evaluate("() => document.documentElement.lang")
        rec('routes', 'boot-lang', lang_now == lang, 'html lang=%s' % lang_now, combo)
        for r in route_list(page):
            reset_st(st)
            try:
                go(page, r)
                page.evaluate(SCROLL_JS)
                page.wait_for_timeout(150)
                info = page.evaluate(PAGE_JS, keys)
            except Exception as e:
                rec('routes', 'navigate', False, repr(e)[:300], combo, r); continue
            fails = []
            if info['viewText'] < 40: fails.append(('empty-view', 'view text %d chars' % info['viewText']))
            if info['renderError']: fails.append(('render-error', 'red callout'))
            if info['notFound']: fails.append(('not-found', 'route resolved to not-found'))
            if info['overflow'] > 1: fails.append(('h-overflow', '%dpx; %s' % (info['overflow'], '; '.join(info['culprits']))))
            if info['rawKeys']: fails.append(('raw-i18n-key', ', '.join(info['rawKeys'])))
            if info['broken']: fails.append(('broken-img', ', '.join(info['broken'])))
            if st['http']: fails.append(('http-4xx', ', '.join(sorted(set(st['http'])))[:400]))
            if st['failed']: fails.append(('req-failed', ', '.join(st['failed'])[:400]))
            if st['errors']: fails.append(('console-error', ' | '.join(st['errors'])[:500]))
            for cid, d in fails: rec('routes', cid, False, d, combo, r)
            if not fails: rec('routes', 'page-ok', True, '', combo, r)
            if lang == 'en' and info['frUi']:
                for s in info['frUi']: fr_ui.setdefault(s, set()).add(r)
            if fails or (vw == 390 and scheme == 'light' and lang == 'fr') or (vw == 1280 and scheme == 'dark' and lang == 'en'):
                shot(page, '%s__%s' % (combo, r))
        ctx.close()
    if fr_ui:
        rec('routes', 'fr-ui-in-en', False, json.dumps({k: sorted(v)[:6] for k, v in sorted(fr_ui.items())}, ensure_ascii=False)[:6000], 'en', '*', 'info')


# ---------- 2. flows ----------
def flow(name, combo):
    def deco(fn):
        def wrapped(page, st, *a):
            reset_st(st)
            try:
                fn(page, st, *a)
                if st['errors']: rec('flows', name + ':console', False, ' | '.join(st['errors'])[:500], combo)
            except AssertionError as e:
                rec('flows', name, False, str(e)[:500], combo); shot(page, 'flow-%s-%s' % (combo, name))
            except Exception as e:
                rec('flows', name, False, 'exception: ' + repr(e)[:400], combo); shot(page, 'flow-%s-%s' % (combo, name))
        return wrapped
    return deco


def run_flows(browser):
    combos = [(390, 844, 'light', 'fr'), (1280, 900, 'dark', 'en')] if args.quick else [(390, 844, 'light', 'fr'), (390, 844, 'dark', 'en'), (1280, 900, 'light', 'en'), (1280, 900, 'dark', 'fr')]
    for vw, vh, scheme, lang in combos:
        combo = '%d-%s-%s' % (vw, scheme, lang)
        log('[flows] %s' % combo)
        ctx = new_ctx(browser, vw, vh, scheme, lang)
        page = ctx.new_page(); st = attach(page)
        boot(page)

        @flow('practice-idk-and-answer', combo)
        def f_practice(page, st):
            go(page, 'inv-oct', 500)
            ph = page.locator('[data-invpractice]')
            assert ph.count() == 1, 'no [data-invpractice] on #inv-oct'
            ph.locator('[data-ip="ready"]').first.click()
            page.wait_for_timeout(150)
            assert ph.locator('.opt.idk').count() == 1, 'no "Je ne sais pas" option'
            ph.locator('.opt.idk').click(); page.wait_for_timeout(250)
            fb = ph.locator('.feedback')
            assert fb.count() == 1 and fb.is_visible(), 'no feedback after IDK'
            p = store(page) or {}
            inv = p.get('inv') or {}
            assert any(v.get('conf') == 'idk' for v in inv.values()), 'IDK not stored in localStorage inv: %s' % inv
            ph.locator('[data-ip="next"]').click(); page.wait_for_timeout(200)
            ph.locator('[data-ip="ready"]').click(); page.wait_for_timeout(150)
            ph.locator('[data-ic="unsure"]').click()
            ph.locator('.opt[data-k]:not(.idk)').first.click(); page.wait_for_timeout(400)
            assert ph.locator('.feedback').count() == 1, 'no feedback after answer'
            assert ph.locator('.opt.correct').count() == 1, 'correct option not highlighted'
            assert ph.locator('.why').count() >= 2, 'per-option explanations missing'
            # hotspots inside the media box
            hs = page.evaluate("""() => { const m = document.querySelector('[data-invpractice] .inv-media-in'); if (!m) return null; const R = m.getBoundingClientRect();
                return [...m.querySelectorAll('.inv-hot, .reveal-hotspot')].map(h => { const r = h.getBoundingClientRect(); const cx = r.left + r.width / 2, cy = r.top + r.height / 2; return cx >= R.left - 2 && cx <= R.right + 2 && cy >= R.top - 2 && cy <= R.bottom + 2; }); }""")
            if hs is not None and hs: assert all(hs), 'a hotspot centre falls outside the image box'
            page.reload(); page.wait_for_timeout(600)
            inv2 = (store(page) or {}).get('inv') or {}
            assert len(inv2) >= 2, 'practice answers not persisted after reload (%d)' % len(inv2)
            assert any(v.get('conf') == 'unsure' for v in inv2.values()), 'unsure confidence not persisted'
            rec('flows', 'practice-idk-and-answer', True, 'inv entries=%d' % len(inv2), combo)
        f_practice(page, st)

        @flow('all-practice-series', combo)
        def f_all_practice(page, st):
            # every exam page: run its whole practice series once (answer option shown first), count items without media
            ids = page.evaluate("() => (OPH.inv || []).map(e => e.id)")
            summary = []
            for i in ids:
                go(page, 'inv-' + i, 300)
                n = 0
                for _ in range(20):
                    ready = page.locator('[data-invpractice] [data-ip="ready"]')
                    if ready.count() == 0: break
                    ready.click(); page.wait_for_timeout(60)
                    if page.locator('[data-invpractice] .inv-media.empty').count(): rec('flows', 'practice-media-missing', False, 'inv-%s item %d shows "Image à venir"' % (i, n + 1), combo)
                    page.locator('[data-invpractice] .opt[data-k]:not(.idk)').first.click(); page.wait_for_timeout(60)
                    broken = page.evaluate("() => [...document.querySelectorAll('[data-invpractice] img')].filter(i => i.complete && i.naturalWidth === 0).map(i => i.src)")
                    if broken: rec('flows', 'practice-img-broken', False, 'inv-%s: %s' % (i, broken), combo)
                    page.locator('[data-invpractice] [data-ip="next"]').click(); page.wait_for_timeout(60); n += 1
                end = page.locator('[data-invpractice] .inv-end').count()
                assert end == 1, 'inv-%s practice did not reach the end screen (n=%d)' % (i, n)
                summary.append('%s:%d' % (i, n))
            rec('flows', 'all-practice-series', True, ' '.join(summary), combo)
        if vw == 1280 or args.quick: f_all_practice(page, st)

        @flow('cas-vedette', combo)
        def f_feat(page, st):
            go(page, 'cas-vedette', 600)
            assert page.evaluate("() => document.documentElement.classList.contains('focus-view')"), 'focus-view class not set'
            img_ok = page.evaluate("() => { const i = document.querySelector('[data-feat] img'); return i ? (i.complete && i.naturalWidth > 0) : null; }")
            assert img_ok is not False, 'featured image broken'
            item = page.evaluate("() => FEATURED.item ? { id: FEATURED.item.id, answer: FEATURED.item.answer } : null")
            assert item, 'no featured item'
            page.locator('[data-feat] [data-ip="ready"]').click(); page.wait_for_timeout(150)
            page.locator('[data-feat] .opt[data-k="%d"]' % item['answer']).click(); page.wait_for_timeout(400)
            assert page.locator('[data-feat] .feedback.ok').count() == 1, 'correct answer not marked ok'
            nh = page.locator('[data-feat] .inv-hot').count()
            assert nh >= 1, 'no hotspot ring drawn after reveal on the featured case'
            go(page, 'accueil', 300)
            assert not page.evaluate("() => document.documentElement.classList.contains('focus-view')"), 'focus-view not removed after leaving'
            rec('flows', 'cas-vedette', True, 'item=%s hotspots=%d' % (item['id'], nh), combo)
        f_feat(page, st)

        @flow('image-du-jour', combo)
        def f_daily(page, st):
            go(page, 'image-du-jour', 500)
            el = page.locator('[data-daily]')
            assert el.count() == 1, 'no daily item'
            if el.locator('[data-ip="ready"]').count():
                el.locator('[data-ip="ready"]').click(); page.wait_for_timeout(120)
                el.locator('.opt[data-k]:not(.idk)').first.click(); page.wait_for_timeout(200)
                el.locator('[data-ip="next"]').click(); page.wait_for_timeout(300)
            else:
                el.locator('[data-flip]').click(); page.wait_for_timeout(150); el.locator('[data-g="2"]').click(); page.wait_for_timeout(300)
            assert page.locator('[data-dailyend]:not([hidden])').count() == 1, 'daily end card not shown'
            page.reload(); page.wait_for_timeout(500)
            s = (store(page) or {}).get('streak') or {}
            assert s.get('n', 0) >= 1, 'streak not saved: %s' % s
            rec('flows', 'image-du-jour', True, 'streak=%s' % s.get('n'), combo)
        f_daily(page, st)

        @flow('cas-images', combo)
        def f_ic(page, st):
            has = page.evaluate("() => !!Views['cas-images']")
            n = page.evaluate("() => (OPH.imageCases || []).length")
            if not has:
                rec('flows', 'cas-images-route', False, 'Views["cas-images"] absent; OPH.imageCases=%d (data/cases-images.js not in build?)' % n, combo, 'cas-images', 'major'); return
            go(page, 'cas-images', 500)
            txt = page.inner_text('#view')
            assert len(txt) > 60, '#cas-images nearly empty'
            b = page.locator('#view [data-ip="ready"]')
            if b.count():
                b.first.click(); page.wait_for_timeout(120); page.locator('#view .opt[data-k]:not(.idk)').first.click(); page.wait_for_timeout(300)
                assert page.locator('#view .feedback').count() >= 1, 'no feedback in #cas-images'
            rec('flows', 'cas-images', True, 'imageCases=%d' % n, combo)
        f_ic(page, st)

        @flow('games', combo)
        def f_games(page, st):
            done = []
            for g in ['cartes', 'cartes-vocab', 'mots-troues', 'jeu-images', 'triage', 'associe']:
                reset_st(st)
                go(page, g, 450)
                box = page.locator('[data-game]')
                assert box.count() == 1, '%s: no [data-game]' % g
                if box.locator('.empty').count(): rec('flows', 'game-empty', False, '%s shows empty state: %s' % (g, box.inner_text()[:120]), combo, g); continue
                if g in ('cartes', 'cartes-vocab'):
                    box.locator('[data-flip]').first.click(); page.wait_for_timeout(150)
                    assert box.locator('[data-g]').count() >= 3, '%s: rating buttons missing after flip' % g
                    box.locator('[data-g="1"]').first.click(); page.wait_for_timeout(200)
                elif g == 'mots-troues':
                    box.locator('[data-o]').first.click(); page.wait_for_timeout(200)
                    assert box.locator('.feedback').count() >= 1 or box.locator('.correct,.wrong').count() >= 1, 'cloze: no feedback'
                elif g == 'jeu-images':
                    box.locator('[data-k]').first.click(); page.wait_for_timeout(200)
                    assert box.locator('.feedback').count() >= 1 or box.locator('.correct').count() >= 1, 'image game: no feedback'
                elif g == 'triage':
                    box.locator('[data-u]').first.click(); page.wait_for_timeout(200)
                    assert box.locator('.feedback').count() == 1, 'triage: no feedback'
                elif g == 'associe':
                    for _ in range(6):
                        cue = box.locator('[data-cue]:not([disabled])')
                        if cue.count() == 0: break
                        k = cue.first.get_attribute('data-cue'); cue.first.click(); box.locator('[data-dx="%s"]' % k).click(); page.wait_for_timeout(80)
                    assert box.locator('.feedback.ok').count() == 1, 'match: not completed'
                broken = page.evaluate("() => [...document.querySelectorAll('[data-game] img')].filter(i => i.complete && i.naturalWidth === 0).map(i => i.getAttribute('src'))")
                if broken: rec('flows', 'game-img-broken', False, '%s: %s' % (g, broken), combo, g)
                if st['errors']: rec('flows', 'game-console', False, '%s: %s' % (g, ' | '.join(st['errors'])[:300]), combo, g)
                done.append(g)
            rec('flows', 'games', True, ','.join(done), combo)
        f_games(page, st)

        @flow('qcm-confidence', combo)
        def f_qcm(page, st):
            go(page, 'quiz', 400)
            page.locator('[data-q="adaptive"][data-m="B"]').click()
            page.wait_for_function("() => Router.cur === 'quiz-run'", timeout=4000); page.wait_for_timeout(300)
            host = page.locator('#quiz-host')
            host.locator('[data-conf="unsure"]').click()
            qid = page.evaluate("() => Quiz.session.ids[0]")
            host.locator('.opt:not(.idk)').first.click(); page.wait_for_timeout(300)
            assert host.locator('.feedback').count() == 1, 'no QCM feedback'
            a = ((store(page) or {}).get('answers') or {}).get(qid)
            assert a and a.get('conf') == 'unsure', 'QCM answer/confidence not stored: %s' % a
            page.keyboard.press('Enter'); page.wait_for_timeout(300)
            assert '2' in host.locator('.qhead').inner_text(), 'Enter did not move to next question'
            page.keyboard.press('1'); page.wait_for_timeout(300)
            assert host.locator('.feedback').count() == 1, 'key "1" did not answer'
            # finish the series to reach the score card
            for _ in range(40):
                if host.locator('.scorecard').count(): break
                if host.locator('[data-next]').count(): host.locator('[data-next]').click()
                else: host.locator('.opt:not(.idk)').first.click()
                page.wait_for_timeout(120)
            assert host.locator('.scorecard').count() == 1, 'series did not end on a score card'
            rec('flows', 'qcm-confidence', True, 'qid=%s' % qid, combo)
        f_qcm(page, st)

        @flow('clinical-case', combo)
        def f_case(page, st):
            cid = page.evaluate("() => OPH.cases[1].id")
            go(page, cid, 500)
            host = page.locator('#case-host')
            for _ in range(40):
                if host.locator('[data-crestart]').count(): break
                ex = host.locator('[data-ex]:not([disabled])')
                if host.locator('[data-cshow]').count() and ex.count():
                    pick = int(page.evaluate("() => { const t = document.querySelector('#case-host [data-cur] .small.muted'); const m = /(\\d+)/.exec(t ? t.innerText : ''); return m ? +m[1] : 1; }") or 1)
                    for k in range(min(pick, ex.count())): host.locator('[data-ex]').nth(k).click(); page.wait_for_timeout(40)
                    host.locator('[data-cshow]').click(); page.wait_for_timeout(80); continue
                ch = host.locator('[data-ch]:not([disabled])')
                if ch.count(): ch.first.click(); page.wait_for_timeout(80); continue
                if host.locator('[data-cnext]').count(): host.locator('[data-cnext]').click(); page.wait_for_timeout(80); continue
                break
            assert host.locator('[data-crestart]').count() == 1, 'case %s did not reach debrief' % cid
            page.reload(); page.wait_for_timeout(500)
            c = ((store(page) or {}).get('cases') or {}).get(cid)
            assert c and c.get('done'), 'case result not persisted'
            rec('flows', 'clinical-case', True, '%s score=%s%%' % (cid, c.get('score')), combo)
        f_case(page, st)

        @flow('progression-persist', combo)
        def f_prog(page, st):
            go(page, 'progression', 400)
            ans = page.evaluate("() => Prog.stat().answered")
            page.reload(); page.wait_for_timeout(500); go(page, 'progression', 300)
            ans2 = page.evaluate("() => Prog.stat().answered")
            assert ans2 >= 2 and ans2 == ans, 'answered count after reload %s vs %s' % (ans2, ans)
            rec('flows', 'progression-persist', True, 'answered=%d' % ans2, combo)
        f_prog(page, st)

        @flow('keyboard', combo)
        def f_kb(page, st):
            # skip link / first focus
            page.evaluate("() => { window.scrollTo(0,0); document.activeElement && document.activeElement.blur(); }")
            go(page, 'quiz', 300)
            page.locator('[data-q="adaptive"][data-m="C"]').focus(); page.keyboard.press('Enter')
            page.wait_for_function("() => Router.cur === 'quiz-run'", timeout=4000); page.wait_for_timeout(300)
            page.evaluate("() => { document.activeElement && document.activeElement.blur(); window.scrollTo(0,0); }")
            hit = False
            for i in range(80):
                page.keyboard.press('Tab')
                if page.evaluate("() => !!(document.activeElement && document.activeElement.matches('#quiz-host .opt'))"): hit = True; break
            assert hit, 'Tab never reached a QCM answer (80 presses)'
            ring = page.evaluate("() => { const s = getComputedStyle(document.activeElement); return (s.outlineStyle !== 'none' && parseFloat(s.outlineWidth) > 0) || (s.boxShadow && s.boxShadow !== 'none'); }")
            page.keyboard.press('Enter'); page.wait_for_timeout(300)
            assert page.locator('#quiz-host .feedback').count() == 1, 'Enter on a focused answer did not answer'
            foc_next = page.evaluate("() => !!(document.activeElement && document.activeElement.matches('[data-next]'))")
            rec('flows', 'keyboard-tab-to-answer', True, 'tabs=%d focus-ring=%s focus-moves-to-next=%s' % (i + 1, ring, foc_next), combo)
            if not ring: rec('flows', 'focus-ring-visible', False, 'focused .opt has no outline/box-shadow', combo)
            # practice engine via keyboard
            go(page, 'inv-gonio', 400)
            page.locator('[data-invpractice] [data-ip="ready"]').focus(); page.keyboard.press('Enter'); page.wait_for_timeout(200)
            on_opt = page.evaluate("() => !!(document.activeElement && document.activeElement.matches('.opt'))")
            page.keyboard.press('Enter'); page.wait_for_timeout(300)
            assert page.locator('[data-invpractice] .feedback').count() == 1, 'practice: Enter on focused option did not answer'
            rec('flows', 'keyboard-practice', True, 'focus on first option after Ready=%s' % on_opt, combo)
            # first Tab from top of page: skip link?
            boot(page)
            page.keyboard.press('Tab')
            first = page.evaluate("() => { const a = document.activeElement; return a ? (a.tagName + ' ' + (a.getAttribute('href') || '') + ' ' + (a.innerText || a.getAttribute('aria-label') || '').trim().slice(0, 40)) : ''; }")
            skip = page.evaluate("() => !!document.querySelector('a[href=\"#view\"], a.skip, .skip-link, a[href=\"#main\"]')")
            rec('flows', 'skip-link', skip, 'first Tab focus: %s' % first, combo, '', 'minor')
        f_kb(page, st)

        @flow('lang-switch', combo)
        def f_lang(page, st):
            other = 'en' if lang == 'fr' else 'fr'
            go(page, 'progression', 400)
            btn = page.locator('#view [data-act="lang"][data-v="%s"]' % other)
            assert btn.count() >= 1, 'no language switch on #progression'
            with page.expect_navigation(timeout=8000):
                btn.first.click()
            page.wait_for_timeout(600)
            l1 = page.evaluate("() => [document.documentElement.lang, localStorage.getItem('oph-lang'), t('nav.review')]")
            assert l1[0] == other and l1[1] == other, 'after switch: %s' % l1
            go(page, 'reviser', 300); page.reload(); page.wait_for_timeout(600)
            l2 = page.evaluate("() => [document.documentElement.lang, Router.cur, document.title]")
            assert l2[0] == other, 'language lost after reload: %s' % l2
            # campaign link ?lang= overrides and persists
            boot(page, lang, 'cas-vedette')
            l3 = page.evaluate("() => [document.documentElement.lang, localStorage.getItem('oph-lang')]")
            assert l3 == [lang, lang], '?lang=%s did not apply/persist: %s' % (lang, l3)
            page.goto(BASE + '#accueil'); page.wait_for_timeout(600)
            assert page.evaluate("() => document.documentElement.lang") == lang, 'lang from ?lang= not remembered'
            rec('flows', 'lang-switch', True, 'switch->%s ok; reload ok; ?lang=%s ok; title=%s' % (other, lang, l2[2]), combo)
        f_lang(page, st)

        @flow('deep-links', combo)
        def f_deep(page, st):
            bad = []
            for h, exp in [('cas/b1', 'cas-b1'), ('case-b1', 'cas-b1'), ('fiche/c-keratocone', 'c-keratocone'), ('learn', 'apprendre'), ('review', 'reviser'), ('mcq', 'quiz')]:
                go(page, h, 250)
                cur = page.evaluate("() => Router.cur")
                if cur != exp: bad.append('%s->%s' % (h, cur))
            go(page, 'nimporte-quoi', 250)
            nf = page.evaluate("() => document.getElementById('view').innerText.indexOf(t('view.notfound')) >= 0")
            if not nf: bad.append('unknown route did not show not-found')
            assert not bad, '; '.join(bad)
            rec('flows', 'deep-links', True, '', combo)
        f_deep(page, st)

        @flow('motion-toggle', combo)
        def f_motion(page, st):
            # positive control: with motion on, the reveal rings animate
            go(page, 'cas-vedette', 400)
            page.locator('[data-feat] [data-ip="ready"]').click(); page.wait_for_timeout(100)
            page.locator('[data-feat] .opt[data-k]:not(.idk)').first.click(); page.wait_for_timeout(100)
            on = page.evaluate("() => [...document.querySelectorAll('.inv-hot i')].map(e => getComputedStyle(e).animationName).filter(a => a && a !== 'none').length")
            go(page, 'progression', 300)
            page.locator('#view [data-act="motion"][data-v="off"]').click(); page.wait_for_timeout(200)
            nm = page.evaluate("() => document.documentElement.classList.contains('no-motion')")
            assert nm, 'html.no-motion not set by in-app toggle'
            go(page, 'cas-vedette', 400)
            page.locator('[data-feat] [data-ip="ready"]').click(); page.wait_for_timeout(100)
            page.locator('[data-feat] .opt[data-k]:not(.idk)').first.click(); page.wait_for_timeout(200)
            anim = page.evaluate("() => [...document.querySelectorAll('.inv-hot i, .inv-hot b, .inv-hot em, .reveal-hotspot, .reveal-pulse, .ok-pop, .no-shake, .page-enter, #view > *')].map(e => getComputedStyle(e).animationName).filter(a => a && a !== 'none')")
            assert not anim, 'animations still running with motion off: %s' % anim[:5]
            go(page, 'progression', 300); page.locator('#view [data-act="motion"][data-v="on"]').click(); page.wait_for_timeout(150)
            rec('flows', 'motion-toggle', True, 'animated rings with motion on=%d, none with motion off' % on, combo)
        f_motion(page, st)

        ctx.close()

    # reduced motion from the OS
    log('[flows] reduced-motion')
    ctx = new_ctx(browser, 390, 844, 'light', 'fr', reduced='reduce'); page = ctx.new_page(); st = attach(page); boot(page)
    try:
        go(page, 'cas-vedette', 400)
        page.locator('[data-feat] [data-ip="ready"]').click(); page.wait_for_timeout(100)
        page.locator('[data-feat] .opt[data-k]:not(.idk)').first.click(); page.wait_for_timeout(200)
        anim = page.evaluate("() => [...document.querySelectorAll('*')].map(e => [e.className && e.className.baseVal === undefined ? e.className : '', getComputedStyle(e).animationName, getComputedStyle(e).transitionDuration]).filter(a => a[1] && a[1] !== 'none').slice(0, 8)")
        rec('flows', 'reduced-motion-os', not anim, 'running animations: %s' % anim, '390-light-fr-reduce')
        sm = page.evaluate("() => getComputedStyle(document.documentElement).scrollBehavior")
        rec('flows', 'reduced-motion-scroll', sm != 'smooth', 'html scroll-behavior=%s' % sm, '390-light-fr-reduce', '', 'minor')
    except Exception as e:
        rec('flows', 'reduced-motion-os', False, repr(e)[:300], '390-light-fr-reduce')
    ctx.close()


# ---------- 3. offline ----------
def run_offline(browser):
    log('[offline]')
    combo = '390-light-fr-sw'
    ctx = new_ctx(browser, 390, 844, 'light', 'fr', sw='allow'); page = ctx.new_page(); st = attach(page)
    try:
        boot(page)
        ok = page.evaluate("() => navigator.serviceWorker ? navigator.serviceWorker.ready.then(r => !!r.active) : false")
        rec('offline', 'sw-registered', ok, '', combo)
        page.reload(); page.wait_for_timeout(800)
        ctl = page.evaluate("() => !!navigator.serviceWorker.controller")
        rec('offline', 'sw-controls-page', ctl, '', combo)
        for r in ['c-bacterienne', 'inv-oct']:
            go(page, r, 300); page.evaluate(SCROLL_JS)
        ctx.set_offline(True)
        page.reload(); page.wait_for_timeout(1200)
        n = page.evaluate("() => { const v = document.getElementById('view'); return v ? v.innerText.trim().length : 0; }")
        rec('offline', 'reload-offline-renders', n > 100, 'view chars=%d' % n, combo)
        res = {}
        for r in ['c-bacterienne', 'inv-oct', 'g-gpao', 'reviser', 'quiz']:
            reset_st(st); go(page, r, 400); page.evaluate(SCROLL_JS)
            info = page.evaluate("() => ({ n: document.getElementById('view').innerText.trim().length, imgs: [...document.querySelectorAll('#view img')].filter(i => i.getAttribute('src')).length, broken: [...document.querySelectorAll('#view img')].filter(i => i.complete && i.naturalWidth === 0).length })")
            res[r] = info
            rec('offline', 'route-offline', info['n'] > 100, '%s chars=%d imgs=%d broken=%d' % (r, info['n'], info['imgs'], info['broken']), combo, r)
            if info['broken']: rec('offline', 'offline-images-not-cached', False, '%s: %d/%d images broken offline (only visited images are cached)' % (r, info['broken'], info['imgs']), combo, r, 'minor')
        # practice still answerable offline
        go(page, 'inv-oct', 300)
        page.locator('[data-invpractice] [data-ip="ready"]').click(); page.locator('[data-invpractice] .opt.idk').click(); page.wait_for_timeout(200)
        rec('offline', 'practice-offline', page.locator('[data-invpractice] .feedback').count() == 1, '', combo)
        fonts = page.evaluate("() => [...document.fonts].filter(f => f.status === 'loaded').map(f => f.family).slice(0, 5)")
        fam = page.evaluate("() => getComputedStyle(document.querySelector('h1') || document.body).fontFamily")
        rec('offline', 'fonts-offline', bool(fonts), 'loaded webfonts=%s; h1 font-family=%s (Google Fonts are remote: system fallback offline / first visit offline)' % (fonts, fam[:80]), combo, '', 'minor')
        ctx.set_offline(False)
    except Exception as e:
        rec('offline', 'offline-flow', False, 'exception: ' + repr(e)[:400], combo); shot(page, 'offline-fail')
    ctx.close()


# ---------- 4. axe-core ----------
def run_axe(browser):
    if not args.axe or not os.path.exists(args.axe):
        log('[axe] skipped (no --axe path)'); return
    src = open(args.axe, encoding='utf-8').read()
    pages = [('accueil', None), ('c-bacterienne', None), ('inv-oct', 'practice'), ('quiz-run', 'quiz'), ('cartes', 'cards'), ('cas-vedette', 'feat')]
    out = []
    for vw, vh, scheme, lang in [(390, 844, 'light', 'fr'), (1280, 900, 'dark', 'en')]:
        combo = '%d-%s-%s' % (vw, scheme, lang)
        ctx = new_ctx(browser, vw, vh, scheme, lang); page = ctx.new_page(); attach(page); boot(page)
        for r, mode in pages:
            if r == 'quiz-run':
                go(page, 'quiz', 300); page.locator('[data-q="adaptive"][data-m="B"]').click(); page.wait_for_timeout(500)
                page.locator('#quiz-host .opt:not(.idk)').first.click(); page.wait_for_timeout(300)
            else:
                go(page, r, 500)
                if mode == 'practice':
                    page.locator('[data-invpractice] [data-ip="ready"]').click(); page.wait_for_timeout(150)
                if mode == 'cards':
                    page.locator('[data-game] [data-flip]').first.click(); page.wait_for_timeout(200)
            page.add_script_tag(content=src)
            res = page.evaluate("() => axe.run(document, { resultTypes: ['violations'] }).then(r => r.violations.map(v => ({ id: v.id, impact: v.impact, help: v.help, n: v.nodes.length, nodes: v.nodes.slice(0, 4).map(n => ({ t: n.target.join(' '), s: (n.failureSummary || '').slice(0, 200), h: n.html.slice(0, 160) })) })))")
            for v in res:
                out.append(dict(v, page=r, combo=combo))
                if v['impact'] in ('serious', 'critical'):
                    rec('axe', v['id'], False, '%s: %d node(s): %s' % (v['help'], v['n'], '; '.join(n['t'] for n in v['nodes'])), combo, r, v['impact'])
            if not any(v['impact'] in ('serious', 'critical') for v in res): rec('axe', 'no-serious', True, '', combo, r)
        ctx.close()
    json.dump(out, open(os.path.join(OUT, 'axe.json'), 'w'), ensure_ascii=False, indent=1)


def main():
    t0 = time.time()
    with sync_playwright() as p:
        browser = p.chromium.launch(args=['--host-resolver-rules=MAP * ~NOTFOUND, EXCLUDE 127.0.0.1, EXCLUDE localhost', '--no-proxy-server'])
        try:
            if want('routes'): run_routes(browser)
            if want('flows'): run_flows(browser)
            if want('offline'): run_offline(browser)
            if want('axe'): run_axe(browser)
        except Exception:
            traceback.print_exc(); rec('runner', 'crash', False, traceback.format_exc()[-800:])
        browser.close()
    httpd.shutdown()
    fails = [r for r in RESULTS if not r['ok'] and r['severity'] != 'info']
    json.dump({'site': SITE, 'took_s': round(time.time() - t0), 'n': len(RESULTS), 'fails': len(fails), 'results': RESULTS}, open(os.path.join(OUT, 'results.json'), 'w'), ensure_ascii=False, indent=1)
    by = {}
    for r in fails: by.setdefault((r['sec'], r['id']), []).append(r)
    log('\n==== %d checks, %d failing (%ds) -> %s' % (len(RESULTS), len(fails), time.time() - t0, os.path.join(OUT, 'results.json')))
    for (sec, cid), rs in sorted(by.items()):
        log('  %-8s %-28s x%-3d e.g. %s %s :: %s' % (sec, cid, len(rs), rs[0]['combo'], rs[0]['route'], rs[0]['detail'][:160]))
    sys.exit(1 if fails else 0)


if __name__ == '__main__':
    main()
