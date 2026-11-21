#!/usr/bin/env python3
"""Build the standalone bilingual static site into site/ (GitHub Pages, Capacitor webDir).

  python3 tools/build_web.py            # → site/index.html, app.css, js/*.js, img/, sw.js, 404.html, manifest, icons
Env (optional): SITE_URL=https://user.github.io/repo/  (absolute Open Graph URLs)
                SITE_BASE=/repo/                        (404.html redirect base; guessed on *.github.io otherwise)
"""
import ast, glob, hashlib, json, os, re, shutil, struct, zlib

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
SRC, DATA, DATA_EN, BRAND = (os.path.join(ROOT, d) for d in ('src', 'data', 'data-en', 'brand'))
OUT = os.path.join(ROOT, 'site')
SITE_URL = os.environ.get('SITE_URL', '').rstrip('/') + ('/' if os.environ.get('SITE_URL') else '')
SITE_BASE = os.environ.get('SITE_BASE', '')

RESTRICTED_IDS = ['OPH-%03d' % i for i in list(range(12, 16)) + list(range(114, 131)) + list(range(187, 192)) + list(range(200, 210)) + [211, 212, 213, 215, 216, 227, 292, 293]]
RIGHTS_FILTER_JS = r"""(function () {
  var G = window, O = G.OPH || {}, R = {}; __IDS__.forEach(function (id) { R[id] = 1; });
  var KEYS = /^(id|photo|img|image|normal|patho|figure|src|pic)$/;
  function bad(o) {
    if (typeof o === 'string') return !!R[o];
    if (!o || typeof o !== 'object' || Array.isArray(o)) return false;
    for (var k in o) { var v = o[k];
      if (typeof v === 'string' && R[v] && KEYS.test(k)) return true;
      if (v && typeof v === 'object' && !Array.isArray(v) && /^(img|image|figure|photo|media)$/.test(k) && bad(v)) return true; }
    return false;
  }
  function walk(x, d) {
    if (d > 9 || !x || typeof x !== 'object') return;
    if (Array.isArray(x)) { for (var i = x.length - 1; i >= 0; i--) { if (bad(x[i])) x.splice(i, 1); else walk(x[i], d + 1); } return; }
    for (var k in x) if (k !== 'catalog') walk(x[k], d + 1);
  }
  [O, G.OPH_EN].forEach(function (root) { if (root) walk(root, 0); });
  if (O.invMedia) { Object.keys(O.invMedia).forEach(function (k) { var m = O.invMedia[k]; if (m && (R[m.photo] || m.restricted)) delete O.invMedia[k]; }); }
  if (O.invPractice && O.invMedia) { O.invPractice = O.invPractice.filter(function (p) { return !p.media || O.invMedia[p.media]; });
    var ok = {}; O.invPractice.forEach(function (p) { ok[p.id] = 1; });
    (O.inv || []).forEach(function (e) { if (e.practice) e.practice = e.practice.filter(function (id) { return ok[id]; }); }); }
})();
"""
SRC_ORDER = ['core', 'i18n', 'figures-a', 'figures-b', 'sims', 'quiz', 'learn', 'investigations', 'views', 'web']
CSS_ORDER = ['styles', 'investigations', 'web']
THEME_LIGHT, THEME_DARK, COBALT, BRAND_BG = '#ffffff', '#0f1a2c', '#2340d0', '#0A2547'
TITLE = {'fr': 'Ocelle · ophtalmologie pour externes et R1', 'en': 'Ocelle · ophthalmology for clerks and R1s'}
DESC = {'fr': 'Apprends à voir le signe qui compte : cornée, glaucome et examens, en images, cas et jeux. Gratuit, sans pub.',
        'en': 'Learn to see the sign that matters: cornea, glaucoma and eye investigations through images, cases and games. Free, no ads.'}


def read(p):
    return open(p, encoding='utf-8').read()


def data_order():
    """Reuse the data list of tools/build.py so both builds stay in sync."""
    tree = ast.parse(read(os.path.join(ROOT, 'tools', 'build.py')))
    for node in ast.walk(tree):
        if isinstance(node, ast.Assign) and any(getattr(t, 'id', None) == 'data_order' for t in node.targets):
            return ast.literal_eval(node.value)
    raise SystemExit('data_order not found in tools/build.py')


def catalog():
    """Same slim catalog as tools/build.py (kept in memory: data/ is not written here)."""
    cat = json.load(open(os.path.join(ROOT, 'imgsrc', 'catalog.json'), encoding='utf-8'))
    slim = [dict({k: e.get(k) for k in ('id', 'title', 'caption', 'page_url', 'module', 'kind', 'tw', 'th')}, src='imgsrc') for e in cat if e['id'] not in ('OPH-185', 'OPH-186')]
    p2 = os.path.join(ROOT, 'imgsrc2', 'catalog2.json')
    if os.path.exists(p2):
        for e in json.load(open(p2, encoding='utf-8')):
            tw = 440; th = round(e['fh'] * tw / e['fw'])
            d = {'id': e['id'], 'title': e['title'], 'caption': e['caption'], 'page_url': e['page_url'], 'module': e['module'], 'kind': 'clinical', 'tw': tw, 'th': th, 'dossier': e.get('dossier', ''), 'src': 'imgsrc2'}
            if not e.get('cc'): d['cc'] = False
            slim.append(d)
    return slim


# ---------- placeholder icons (pure Python PNG, no Pillow needed in CI) ----------
def png(size, rounded, path):
    bg = tuple(int(COBALT[i:i + 2], 16) for i in (1, 3, 5))
    s = size / 34.0
    pad = 0 if rounded else 0  # full-bleed icons: the E is scaled down around the centre instead
    k = 1.0 if rounded else 0.72
    rects = [(9, 9, 25, 13), (9, 9, 13, 25), (13, 15, 23, 19), (9, 21, 25, 25)]
    rects = [tuple(17 + (v - 17) * k for v in r) for r in rects]
    rows = []
    r_px, x0, x1 = 8 * s, 1 * s, 33 * s
    for y in range(size):
        row = bytearray([0])
        for x in range(size):
            cx, cy = x + .5, y + .5
            inside = True
            if rounded:
                if cx < x0 or cx > x1 or cy < x0 or cy > x1: inside = False
                else:
                    dx = max(x0 + r_px - cx, 0, cx - (x1 - r_px)); dy = max(x0 + r_px - cy, 0, cy - (x1 - r_px))
                    inside = dx * dx + dy * dy <= r_px * r_px
            if not inside:
                row += bytes((0, 0, 0, 0)); continue
            ux, uy = cx / s, cy / s
            white = any(a <= ux < c and b <= uy < d for a, b, c, d in rects)
            row += bytes((255, 255, 255, 255)) if white else bytes(bg + (255,))
        rows.append(bytes(row))
    raw = zlib.compress(b''.join(rows), 9)
    def chunk(t, d): return struct.pack('>I', len(d)) + t + d + struct.pack('>I', zlib.crc32(t + d) & 0xffffffff)
    open(path, 'wb').write(b'\x89PNG\r\n\x1a\n' + chunk(b'IHDR', struct.pack('>IIBBBBB', size, size, 8, 6, 0, 0, 0)) + chunk(b'IDAT', raw) + chunk(b'IEND', b''))


LOGO_SVG = ('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 34 34"><rect x="1" y="1" width="32" height="32" rx="8" fill="%s"/>'
            '<path d="M9 9h16v4H13v2h10v4H13v2h12v4H9z" fill="#fff"/></svg>' % COBALT)


def icons():
    """Use brand/ assets when present, else generate placeholders. Returns dict of published names."""
    os.makedirs(os.path.join(OUT, 'icons'), exist_ok=True)
    out = {}
    def first(*names):
        for n in names:
            p = os.path.join(BRAND, n)
            if os.path.exists(p): return p
        return None
    svg = first('mark.svg', 'icon.svg', 'favicon.svg')
    out['brand'] = bool(first('icon-512.png'))
    shutil.copy2(svg, os.path.join(OUT, 'icons', 'icon.svg')) if svg else open(os.path.join(OUT, 'icons', 'icon.svg'), 'w').write(LOGO_SVG)
    out['svg'] = 'icons/icon.svg'
    for name, size, rounded, cands in [('icon-192.png', 192, True, ('icon-192.png',)), ('icon-512.png', 512, True, ('icon-512.png', 'icon.png')),
                                       ('maskable-512.png', 512, False, ('maskable-512.png', 'icon-maskable.png', 'icon-512.png')), ('apple-touch-icon.png', 180, False, ('apple-touch-icon-180.png', 'apple-touch-icon.png')), ('favicon-32.png', 32, True, ('favicon-32.png',))]:
        src = first(*cands)
        dst = os.path.join(OUT, 'icons', name)
        if src: shutil.copy2(src, dst)
        else: png(size, rounded, dst)
        out[name] = 'icons/' + name
    og = first('og.png', 'og-image.png', 'og.jpg', 'social.png')
    if og:
        ext = os.path.splitext(og)[1]; shutil.copy2(og, os.path.join(OUT, 'og' + ext)); out['og'] = 'og' + ext
    else:
        out['og'] = out['icon-512.png']
    return out


def js(s):
    return re.sub(r'</(script)', r'<\\/\1', s, flags=re.I)


def main():
    if os.path.isdir(OUT):
        for n in os.listdir(OUT):  # keep img/ to avoid recopying 27 MB each build
            p = os.path.join(OUT, n)
            if n != 'img': shutil.rmtree(p) if os.path.isdir(p) else os.remove(p)
    os.makedirs(OUT, exist_ok=True)
    slim = catalog()
    # Rights (docs/RIGHTS.md): images without a CC licence stay out of the public site/app until EyeRounds grants written permission
    restricted = {e['id'] for e in slim if e.get('cc') is False} | set(RESTRICTED_IDS)
    slim = [e for e in slim if e['id'] not in restricted]

    # ---- JS: data FR → data-en overlays → src (PLATFORM.md order); one file each (keeps 'use strict' per file and isolates load errors) ----
    jsdir = os.path.join(OUT, 'js'); os.makedirs(jsdir, exist_ok=True)
    files, missing = [], []
    def emit(name, text):
        h = hashlib.sha1(text.encode()).hexdigest()[:10]
        open(os.path.join(jsdir, name), 'w', encoding='utf-8').write(text)
        files.append('js/%s?v=%s' % (name, h))
    emit('catalog.js', "var G = (typeof window !== 'undefined') ? window : globalThis;\nG.OPH = G.OPH || {};\nG.OPH.catalog = " +
         json.dumps([{k: v for k, v in e.items() if k != 'src'} for e in slim], ensure_ascii=False) + ";\n")
    for name in data_order():
        if name == 'catalog': continue
        p = os.path.join(DATA, name + '.js')
        if os.path.exists(p): emit('d-' + name + '.js', read(p))
        else: missing.append('data/' + name)
    en_files = sorted(glob.glob(os.path.join(DATA_EN, '*.js')))
    for p in en_files: emit('en-' + os.path.basename(p), read(p))
    emit('rights-filter.js', RIGHTS_FILTER_JS.replace('__IDS__', json.dumps(sorted(restricted))))
    for name in SRC_ORDER:
        p = os.path.join(SRC, name + '.js')
        if os.path.exists(p): emit(name + '.js', read(p))
        else: missing.append('src/' + name)
    css = '\n'.join('/* src/%s.css */\n' % n + read(os.path.join(SRC, n + '.css')) for n in CSS_ORDER if os.path.exists(os.path.join(SRC, n + '.css')))
    hcss = hashlib.sha1(css.encode()).hexdigest()[:10]
    hjs = hashlib.sha1(''.join(files).encode()).hexdigest()[:10]
    open(os.path.join(OUT, 'app.css'), 'w', encoding='utf-8').write(css)

    ic = icons()
    abs_ = lambda p: (SITE_URL + p) if SITE_URL else p
    fonts = '<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Lexend:wght@400..800&family=Atkinson+Hyperlegible+Next:wght@400;500;600;700&family=Atkinson+Hyperlegible+Mono:wght@400;600&display=swap">'
    esc = lambda s: s.replace('&', '&amp;').replace('"', '&quot;').replace('<', '&lt;')
    head = f'''<!doctype html>
<html lang="fr">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover">
<title>{esc(TITLE['fr'])}</title>
<meta name="description" content="{esc(DESC['fr'])}" data-en="{esc(DESC['en'])}">
<meta name="theme-color" content="{THEME_LIGHT}" media="(prefers-color-scheme: light)">
<meta name="theme-color" content="{THEME_DARK}" media="(prefers-color-scheme: dark)">
<meta name="color-scheme" content="light dark">
<meta name="apple-mobile-web-app-capable" content="yes">
<meta name="mobile-web-app-capable" content="yes">
<meta name="apple-mobile-web-app-title" content="Ocelle">
<meta name="apple-mobile-web-app-status-bar-style" content="default">
<meta name="format-detection" content="telephone=no">
<meta property="og:type" content="website">
<meta property="og:locale" content="fr_CA">
<meta property="og:locale:alternate" content="en_CA">
<meta property="og:site_name" content="Ocelle">
<meta property="og:title" content="{esc(TITLE['fr'])}">
<meta property="og:description" content="{esc(DESC['fr'])}">
<meta property="og:image" content="{abs_(ic['og'])}">
{('<meta property="og:url" content="' + SITE_URL + '">') if SITE_URL else ''}
<meta name="twitter:card" content="summary">
<link rel="manifest" href="manifest.webmanifest">
<link rel="icon" href="{ic['svg']}" type="image/svg+xml">
<link rel="icon" href="{ic['favicon-32.png']}" sizes="32x32" type="image/png">
<link rel="apple-touch-icon" href="{ic['apple-touch-icon.png']}">
<link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
{fonts}
<link rel="stylesheet" href="app.css?v={hcss}">
<style>:root{{color-scheme:light dark}}body{{margin:0}}img{{max-width:100%}}[hidden]{{display:none!important}}</style>
</head>
<body>
'''
    body = '''<div class="shell">
<aside class="rail" id="rail" aria-label="Navigation"></aside>
<div style="min-width:0">
<header class="topbar"><button type="button" class="btn sm" data-act="menu" aria-label="Ouvrir le menu" aria-controls="drawer">Menu</button><a class="brand" href="#accueil"><svg class="logo" viewBox="0 0 1024 1024" aria-hidden="true"><rect width="1024" height="1024" rx="236" fill="#0A2547"/><circle cx="512" cy="512" r="282" fill="#2F4EE6"/><circle cx="512" cy="512" r="116" fill="#050E1D"/><path d="M336 236A330 330 0 0 0 336 788" fill="none" stroke="#EAF3FF" stroke-opacity=".85" stroke-width="40" stroke-linecap="round"/><circle cx="660" cy="364" r="66" fill="#B6F04E"/></svg><span><b>Ocelle</b><span>Ophtalmo · externat et R1</span></span></a></header>
<main class="main" id="view" tabindex="-1"><div class="page"><p class="muted">Chargement… / Loading…</p></div></main>
</div></div>
<nav class="tabbar" id="tabbar" aria-label="Navigation rapide"></nav>
<div class="drawer" id="drawer" hidden><div class="scrim" data-act="close-drawer"></div><div class="panel" role="dialog" aria-label="Menu"></div></div>
<div class="lightbox" id="lightbox" hidden role="dialog" aria-label="Image agrandie"></div>
<noscript><p>Cette classe interactive a besoin de JavaScript. / This interactive course needs JavaScript.</p></noscript>
'''
    html = head + body + ''.join('<script src="%s"></script>\n' % f for f in files) + '</body>\n</html>\n'
    open(os.path.join(OUT, 'index.html'), 'w', encoding='utf-8').write(html)

    # ---- manifest ----
    man = {'name': 'Ocelle', 'short_name': 'Ocelle', 'description': DESC['fr'], 'lang': 'fr-CA',
           'start_url': './', 'scope': './', 'display': 'standalone', 'background_color': BRAND_BG, 'theme_color': BRAND_BG, 'categories': ['education', 'medical'],
           'icons': ([{'src': ic['icon-192.png'], 'sizes': '192x192', 'type': 'image/png', 'purpose': 'any maskable'}, {'src': ic['icon-512.png'], 'sizes': '512x512', 'type': 'image/png', 'purpose': 'any maskable'}] if ic.get('brand') else
                     [{'src': ic['icon-192.png'], 'sizes': '192x192', 'type': 'image/png'}, {'src': ic['icon-512.png'], 'sizes': '512x512', 'type': 'image/png'},
                      {'src': ic['maskable-512.png'], 'sizes': '512x512', 'type': 'image/png', 'purpose': 'maskable'}]) + [{'src': ic['svg'], 'sizes': 'any', 'type': 'image/svg+xml'}]}
    json.dump(man, open(os.path.join(OUT, 'manifest.webmanifest'), 'w', encoding='utf-8'), ensure_ascii=False, indent=1)

    # ---- images ----
    img = os.path.join(OUT, 'img'); os.makedirs(img, exist_ok=True)
    want, nimg, absent = set(), 0, []
    for e in slim:
        fn = e['id'] + '.jpg'; want.add(fn)
        src = next((p for p in (os.path.join(ROOT, 'dist', 'img', fn), os.path.join(ROOT, e['src'], 'web', fn)) if os.path.exists(p)), None)
        if not src: absent.append(e['id']); continue
        dst = os.path.join(img, fn)
        if not os.path.exists(dst) or os.path.getmtime(dst) < os.path.getmtime(src) or os.path.getsize(dst) != os.path.getsize(src): shutil.copy2(src, dst)
        nimg += 1
    for extra in glob.glob(os.path.join(ROOT, 'dist', 'img', '*')):  # any other supporting image the artifact build ships (e.g. inv media)
        b = os.path.basename(extra)
        if b not in want and os.path.splitext(b)[0] not in restricted and os.path.isfile(extra): shutil.copy2(extra, os.path.join(img, b)); want.add(b)
    for n in os.listdir(img):
        if n not in want: os.remove(os.path.join(img, n))

    # ---- service worker ----
    version = hashlib.sha1((hjs + hcss).encode()).hexdigest()[:10]
    sw = '''/* offline cache: network-first for pages, cache-first for images, fonts and versioned assets */
const V = '%s', CORE = 'oph-core-' + V, IMG = 'oph-img-v1', FONT = 'oph-font-v1';
const PRE = ['./', 'index.html', 'app.css?v=%s', 'manifest.webmanifest', '%s', '%s'].concat(%s);
self.addEventListener('install', e => { e.waitUntil(caches.open(CORE).then(c => c.addAll(PRE)).then(() => self.skipWaiting())); });
self.addEventListener('activate', e => { e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k.startsWith('oph-core-') && k !== CORE).map(k => caches.delete(k)))).then(() => self.clients.claim())); });
const cacheFirst = (req, name) => caches.open(name).then(c => c.match(req).then(hit => hit || fetch(req).then(r => { if (r && (r.ok || r.type === 'opaque')) c.put(req, r.clone()); return r; })));
self.addEventListener('fetch', e => {
  const req = e.request; if (req.method !== 'GET') return;
  const u = new URL(req.url);
  if (u.origin === location.origin) {
    if (req.mode === 'navigate' || u.pathname.endsWith('/') || u.pathname.endsWith('index.html')) {
      e.respondWith(fetch(req).then(r => { const cp = r.clone(); caches.open(CORE).then(c => c.put('index.html', cp)); return r; }).catch(() => caches.match('index.html', { ignoreSearch: true })));
    } else if (u.pathname.includes('/img/') || u.pathname.includes('/icons/')) e.respondWith(cacheFirst(req, IMG));
    else e.respondWith(caches.match(req).then(hit => hit || fetch(req).then(r => { if (r.ok) { const cp = r.clone(); caches.open(CORE).then(c => c.put(req, cp)); } return r; })));
  } else if (u.hostname === 'fonts.googleapis.com' || u.hostname === 'fonts.gstatic.com') e.respondWith(cacheFirst(req, FONT));
});
''' % (version, hcss, ic['svg'], ic['icon-192.png'], json.dumps(files))
    open(os.path.join(OUT, 'sw.js'), 'w', encoding='utf-8').write(sw)

    # ---- 404: send unknown paths back to the SPA (/repo/cas-b1 → /repo/#cas-b1) ----
    base = json.dumps(SITE_BASE)
    open(os.path.join(OUT, '404.html'), 'w', encoding='utf-8').write('''<!doctype html><html lang="fr"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>Redirection…</title><meta name="robots" content="noindex"><script>
(function () {
  var base = %s, p = location.pathname;
  if (!base) { var seg = p.split('/').filter(Boolean); base = /\\.github\\.io$/.test(location.hostname) && seg.length > 1 ? '/' + seg[0] + '/' : (/\\.github\\.io$/.test(location.hostname) && seg.length === 1 && !/^(cas|fiche|case)/.test(seg[0]) ? '/' + seg[0] + '/' : '/'); }
  var rest = p.indexOf(base) === 0 ? p.slice(base.length) : p.replace(/^\\//, '');
  rest = rest.replace(/\\/+$/, '').replace(/^index\\.html$/, '');
  location.replace(base + location.search + (rest ? '#' + rest : location.hash));
})();
</script></head><body><p><a href="./">Retour à l’accueil / Back to home</a></p></body></html>
''' % base)
    open(os.path.join(OUT, '.nojekyll'), 'w').write('')
    open(os.path.join(OUT, 'robots.txt'), 'w').write('User-agent: *\nAllow: /\n')

    size = sum(os.path.getsize(os.path.join(jsdir, f)) for f in os.listdir(jsdir))
    imgbytes = sum(os.path.getsize(os.path.join(img, f)) for f in os.listdir(img))
    print('site/ js %d files %.0f KB · app.css %.0f KB · images %d (%.1f MB) · data-en %d file(s) · missing: %s%s' % (
        len(files), size / 1024, os.path.getsize(os.path.join(OUT, 'app.css')) / 1024, nimg, imgbytes / 1e6, len(en_files), ', '.join(missing) or 'none',
        (' · images absent: ' + ', '.join(absent[:8])) if absent else ''))


if __name__ == '__main__':
    main()
