#!/usr/bin/env python3
"""Functional smoke test of the built app: every route, main interactions, console errors, mobile overflow.
Usage: python3 tests/run.py [--shots]"""
import json, os, subprocess, sys, time
from playwright.sync_api import sync_playwright

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
DIST = os.path.join(ROOT, 'dist')
SHOTS = os.path.join(ROOT, 'tests', 'shots')
os.makedirs(SHOTS, exist_ok=True)
take_shots = '--shots' in sys.argv
import socket
_sk = socket.socket(); _sk.bind(('127.0.0.1', 0)); PORT = _sk.getsockname()[1]; _sk.close()   # free port: several agents run this file at the same time
srv = subprocess.Popen([sys.executable, '-m', 'http.server', str(PORT), '--directory', DIST], stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)
time.sleep(0.8)
BASE = 'http://127.0.0.1:%d/preview.html' % PORT
problems = []

def log(msg): print(msg, flush=True)

def sim_smoke(p):
    """B-scan simulator (#inv-bscan-sim), tested on the web build (site/): three.js is a local file there, not in the single-file dist/.
    Checks: the route loads, both canvases render, dragging the probe (mouse, touch) changes the image without scrolling the page,
    the gain slider works, the kinetic button moves the membrane, rendering pauses off-screen, the 5 cases run end-to-end
    (FR light on desktop, EN dark on the phone), touch targets are at least 44 px, reduced motion is respected."""
    site = os.path.join(ROOT, 'site')
    if not os.path.exists(os.path.join(site, 'js', 'bscan-sim.js')):
        problems.append('[sim] site/ is not built with the simulator (run python3 tools/build_web.py)'); return
    # other agents rebuild site/ and run this file in parallel: test a private snapshot (without img/) on a free port
    import shutil, socket, tempfile
    snapdir = tempfile.mkdtemp(prefix='ocelle-sim-')
    for attempt in range(4):
        shutil.rmtree(snapdir, ignore_errors=True)
        try: shutil.copytree(site, snapdir, ignore=shutil.ignore_patterns('img'))
        except Exception: pass
        if all(os.path.exists(os.path.join(snapdir, f)) for f in ('index.html', 'app.css', 'js/bscan-sim.js', 'js/web.js', 'vendor/three-0.159.0/three.module.min.js')): break
        time.sleep(2)
    sk = socket.socket(); sk.bind(('127.0.0.1', 0)); port = sk.getsockname()[1]; sk.close()
    srv2 = subprocess.Popen([sys.executable, '-m', 'http.server', str(port), '--bind', '127.0.0.1', '--directory', snapdir], stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)
    time.sleep(0.8)
    snap = "() => window.__bs3.snapshot()"
    gain = "v => { const g = document.querySelector('[data-gain]'); g.value = v; g.dispatchEvent(new Event('input', { bubbles: true })); }"
    try:
        b = p.chromium.launch(executable_path='/usr/bin/google-chrome', args=['--no-sandbox', '--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--ignore-gpu-blocklist', '--disable-background-networking', '--disable-component-update', '--no-first-run', '--disable-sync', '--disable-default-apps', '--disable-features=Translate,OptimizationHints,MediaRouter,AutofillServerCommunication'])
        for vw, vh, label, lang, scheme, rm in [(1280, 900, 'desktop fr light', 'fr', 'light', False), (390, 844, 'mobile en dark', 'en', 'dark', False), (390, 844, 'reduced-motion', 'fr', 'light', True)]:
            tag = '[sim %s] ' % label
            phone = vw < 500
            ctx = b.new_context(viewport={'width': vw, 'height': vh}, has_touch=phone, color_scheme=scheme, reduced_motion='reduce' if rm else 'no-preference')
            ctx.route('**/*', lambda route: route.continue_() if route.request.url.startswith('http://127.0.0.1') or route.request.url.startswith('data:') or route.request.url.startswith('blob:') else route.abort())
            page = ctx.new_page(); page.set_default_timeout(5000); errs = []
            page.on('pageerror', lambda e: errs.append('pageerror: ' + str(e)))
            page.on('console', lambda m: errs.append('console.' + m.type + ': ' + m.text) if m.type == 'error' and 'Failed to load resource' not in m.text else None)
            try:
                page.goto('http://127.0.0.1:%d/index.html?lang=%s#inv-bscan-sim' % (port, lang), wait_until='domcontentloaded', timeout=30000)
                try: page.wait_for_function('() => window.__bs3 && window.__bs3.ready', timeout=45000)
                except Exception:
                    problems.append(tag + 'simulator did not start: ' + ' | '.join(errs[:3]) + ' | ' + page.inner_text('[data-bs3]')[:160].replace('\n', ' ')); continue
                box = page.eval_on_selector('[data-c3]', "c => { const r = c.getBoundingClientRect(); return [r.left, r.top, r.width, r.height, c.width, c.height]; }")
                if box[2] < 150 or box[3] < 120 or box[4] < 150: problems.append(tag + '3D canvas too small: %s' % box)
                if phone:
                    lay = page.evaluate("() => { const e = document.querySelector('[data-eye]').getBoundingClientRect(), i = document.querySelector('[data-img]').getBoundingClientRect(), h = s => Math.round(document.querySelector(s).getBoundingClientRect().height); return { eyeTop: e.top, imgBottom: i.bottom, vh: innerHeight, kin: h('[data-kin]'), gain: h('[data-gain]'), mode: h('[data-mode]'), preset: h('[data-preset]') }; }")
                    if lay['eyeTop'] < 0 or lay['imgBottom'] > lay['vh']: problems.append(tag + 'eye and B image are not both on screen: %s' % lay)
                    small = [k for k in ('kin', 'gain', 'mode', 'preset') if lay[k] < 44]
                    if small: problems.append(tag + 'touch targets under 44 px: %s %s' % (small, lay))
                s0 = page.evaluate(snap)
                if s0['mean'] < 4: problems.append(tag + 'B image is black (mean %.1f)' % s0['mean'])
                # drag the probe from 6 o'clock toward 10 o'clock (touch on the phone, mouse on desktop)
                x0, y0, x1, y1 = box[0] + box[2] * .5, box[1] + box[3] * .62, box[0] + box[2] * .42, box[1] + box[3] * .3
                if phone:
                    cdp = ctx.new_cdp_session(page)
                    cdp.send('Input.dispatchTouchEvent', {'type': 'touchStart', 'touchPoints': [{'x': x0, 'y': y0}]})
                    for i in range(1, 7): cdp.send('Input.dispatchTouchEvent', {'type': 'touchMove', 'touchPoints': [{'x': x0 + (x1 - x0) * i / 6, 'y': y0 + (y1 - y0) * i / 6}]})
                    cdp.send('Input.dispatchTouchEvent', {'type': 'touchEnd', 'touchPoints': []})
                    if page.evaluate("() => window.scrollY") != 0: problems.append(tag + 'dragging on the eye scrolled the page')
                else:
                    page.mouse.move(x0, y0); page.mouse.down(); page.mouse.move(x1, y1, steps=6); page.mouse.up()
                page.wait_for_timeout(150)
                s1 = page.evaluate(snap)
                if s1['sig'] == s0['sig']: problems.append(tag + 'dragging the probe did not change the image')
                page.evaluate(gain, 100); hi = page.evaluate(snap)
                page.evaluate(gain, 50); lo = page.evaluate(snap)
                if not (hi['mean'] > s1['mean'] + 2 and lo['mean'] < s1['mean'] - 2): problems.append(tag + 'gain slider has no effect: %.1f / %.1f / %.1f' % (lo['mean'], s1['mean'], hi['mean']))
                # a standard position is announced by the snap label and its button
                page.click('[data-preset="T3"]'); page.evaluate(snap)
                if 'T3' not in page.inner_text('[data-snap]') or page.get_attribute('[data-preset="T3"]', 'aria-pressed') != 'true': problems.append(tag + 'standard position not labelled: ' + page.inner_text('[data-snap]'))
                # case 1 (PVD): the kinetic button displaces the membrane, then it comes back to rest
                page.click('[data-a="next"]'); page.click('[data-preset="T12"]'); page.evaluate(gain, 90)
                rest = page.evaluate(snap)
                page.click('[data-kin="1"]'); page.wait_for_timeout(500)
                mov = page.evaluate(snap)
                if mov['sig'] == rest['sig']: problems.append(tag + 'kinetic button did not move the membrane')
                if rm and page.evaluate("() => window.__bs3.kin().on"): problems.append(tag + 'animation runs despite prefers-reduced-motion')
                if not rm:
                    page.wait_for_timeout(3400)
                    if page.evaluate(snap)['sig'] != rest['sig']: problems.append(tag + 'membrane did not come back to rest')
                # rendering pauses when the stage is scrolled off-screen (the case page is tall enough on the phone)
                if phone:
                    page.evaluate("() => window.scrollTo(0, document.documentElement.scrollHeight)"); page.wait_for_timeout(300)
                    off = page.evaluate("() => document.querySelector('.bs3-grid').getBoundingClientRect().bottom < 0")
                    if off:
                        try: page.wait_for_function('() => window.__bs3.paused()', timeout=4000)   # IntersectionObserver is asynchronous
                        except Exception: problems.append(tag + 'rendering not paused off-screen')
                    if not off: log('  ' + tag + 'stage still on screen at the bottom of the page: pause not checked')
                    page.evaluate("() => window.scrollTo(0, 0)")
                    try: page.wait_for_function('() => !window.__bs3.paused()', timeout=4000)
                    except Exception: problems.append(tag + 'rendering still paused back on screen')
                # the 5 cases, end to end: answer, decisive sign, next ... result, then the series can start again
                ids = page.evaluate("() => window.BscanSim.cases.map(c => c.id)")
                for k, cid in enumerate(ids):
                    if k: page.click('[data-a="next"]')
                    if len(page.inner_text('.bs3-stem').strip()) < 20: problems.append(tag + 'case %d: no stem' % (k + 1))
                    page.click('[data-ans="%s"]' % (cid if k % 2 == 0 else 'idk')); page.wait_for_timeout(120)
                    if not page.query_selector('.bs3-rev') or page.evaluate("() => document.querySelector('[data-ring]').hidden"): problems.append(tag + 'case %d (%s): no decisive-sign reveal' % (k + 1, cid))
                    if not page.query_selector('[data-a="next"]'): problems.append(tag + 'case %d: dead end, no next button' % (k + 1))
                page.click('[data-a="next"]')
                if '3 / 5' not in (page.inner_text('.bs3-score') if page.query_selector('.bs3-score') else ''): problems.append(tag + 'no result after the 5 cases')
                page.click('[data-a="next"]')
                if not page.query_selector('[data-ans]'): problems.append(tag + 'the series cannot be started again')
                if lang == 'en' and any(w in page.inner_text('[data-bs3]') for w in ('Regarde', 'Coupe', 'Cas ')): problems.append(tag + 'French text left in the English simulator')
                over = page.evaluate("() => document.documentElement.scrollWidth - document.documentElement.clientWidth")
                if over > 2: problems.append(tag + 'horizontal overflow %dpx' % over)
                if take_shots and not rm: page.screenshot(path=os.path.join(SHOTS, 'sim-%s.png' % label.replace(' ', '-')))
                for e in errs: problems.append(tag + e)
            except Exception as e:
                problems.append(tag + '%s: %s' % (type(e).__name__, str(e)[:200].replace('\n', ' ')))
            finally:
                ctx.close()
        b.close()
        log('  simulator smoke test done (desktop FR light, phone EN dark with touch, reduced motion)')
    finally:
        srv2.terminate()
        shutil.rmtree(snapdir, ignore_errors=True)

try:
    with sync_playwright() as p:
        browser = p.chromium.launch(executable_path='/usr/bin/google-chrome', args=['--no-sandbox', '--disable-background-networking', '--disable-component-update', '--no-first-run', '--disable-sync', '--disable-default-apps', '--disable-features=Translate,OptimizationHints,MediaRouter,AutofillServerCommunication'])
        for vw, vh, label in [(1280, 900, 'desktop'), (390, 844, 'mobile')]:
            ctx = browser.new_context(viewport={'width': vw, 'height': vh})
            ctx.route('**/*', lambda route: route.continue_() if route.request.url.startswith('http://127.0.0.1') or route.request.url.startswith('data:') or route.request.url.startswith('blob:') else route.abort())
            page = ctx.new_page()
            page.set_default_timeout(4000)
            errs = []
            page.on('pageerror', lambda e: errs.append('pageerror: ' + str(e)))
            page.on('console', lambda m: errs.append('console.' + m.type + ': ' + m.text) if m.type == 'error' and 'fonts.g' not in m.text and 'Failed to load resource' not in m.text else None)
            page.goto(BASE, wait_until='domcontentloaded')
            page.wait_for_timeout(500)
            routes = page.evaluate("""() => {
              const r = ['accueil','module-a','a-anatomie','a-physiologie','a-examen','a-imagerie','a-retine','module-b','b-bases'];
              (window.ORDER ? ORDER.B : []).forEach(x => r.push(x));
              r.push('module-c','c-bases'); (window.ORDER ? ORDER.C : []).forEach(x => r.push(x));
              if (window.D && D.ordered('D').length) { r.push('module-d','express-d'); D.ordered('D').forEach(f => ['voir','comprendre','decider','entrainer'].forEach(s => r.push(f.id + '/' + s))); }
              r.push('express-b','express-c','recherche','quiz','cas'); (OPH.cases||[]).forEach(c => r.push(c.id)); r.push('atlas','sources','nimporte');
              return r; }""")
            for r in routes:
                errs.clear()
                page.evaluate("h => { location.hash = h }", r)
                page.wait_for_timeout(250)
                txt = page.inner_text('#view')
                over = page.evaluate("() => document.documentElement.scrollWidth - document.documentElement.clientWidth")
                if 'n’a pas pu' in txt or 'Cette vue' in txt: problems.append(f'[{label}] {r}: render error text')
                if len(txt.strip()) < 40: problems.append(f'[{label}] {r}: almost empty view')
                if over > 2: problems.append(f'[{label}] {r}: horizontal overflow {over}px')
                for e in errs: problems.append(f'[{label}] {r}: {e}')
                if take_shots and label == 'desktop' and r in ('accueil', 'a-anatomie', 'a-physiologie', 'c-bacterienne', 'g-gpao'):
                    page.screenshot(path=os.path.join(SHOTS, f'{label}-{r}.png'), full_page=False)
            if label == 'mobile' and take_shots:
                page.evaluate("h => { location.hash = h }", 'accueil'); page.wait_for_timeout(300)
                page.screenshot(path=os.path.join(SHOTS, 'mobile-accueil.png'))
            # ---- interactions (desktop only) ----
            if label == 'desktop':
                errs.clear()
                def step(name, fn):
                    try:
                        fn()
                    except Exception as e:
                        problems.append(f'[interact] {name}: {type(e).__name__}: {str(e)[:200]}')
                # module A entries are one-screen micro-fiches: #a-<section>/<entry>
                page.evaluate("h => { location.hash = h }", 'a-anatomie/globe'); page.wait_for_timeout(350)
                step('anatomy zoom', lambda: (page.click('[data-sim="anatomy"] [data-z="in"]'), page.click('[data-sim="anatomy"] [data-z="angle"]'), page.click('[data-sim="anatomy"] [data-z="reset"]')))
                step('anatomy layers', lambda: [page.check(f'[data-sim="anatomy"] [data-layer="{k}"]') for k in ('vasc', 'nerv', 'flow', 'tunics')])
                def pick():
                    opts = page.eval_on_selector_all('#anat-pick option', 'els => els.map(e => e.value).filter(Boolean)')
                    if opts:
                        page.select_option('#anat-pick', opts[0]); page.wait_for_timeout(100)
                        if 'Sélectionne' in page.inner_text('[data-sim="anatomy"] [data-info]'): raise Exception('info not updated')
                step('anatomy select', pick)
                page.evaluate("h => { location.hash = h }", 'a-anatomie/cornee'); page.wait_for_timeout(350)
                step('cornea layer click', lambda: page.click('[data-sim="corneaLayers"] [data-layer="endothelium"]'))
                page.evaluate("h => { location.hash = h }", 'a-anatomie/angle'); page.wait_for_timeout(350)
                step('angle click', lambda: page.click('[data-sim="angleExplorer"] [data-angle="eperon"] >> nth=0'))
                page.evaluate("h => { location.hash = h }", 'a-physiologie/aqueuse'); page.wait_for_timeout(350)
                def aq():
                    if not page.query_selector('[data-sim="aqueous"]'): raise Exception('no aqueous sim')
                    v0 = page.inner_text('[data-sim="aqueous"] [data-iop]')
                    page.click('[data-sim="aqueous"] [data-sc="gpao"]'); v1 = page.inner_text('[data-sim="aqueous"] [data-iop]')
                    page.click('[data-sim="aqueous"] [data-drug="pga"]'); v2 = page.inner_text('[data-sim="aqueous"] [data-iop]')
                    page.click('[data-sim="aqueous"] [data-sc="bloc"]'); page.click('[data-sim="aqueous"] [data-drug="lpi"]'); v3 = page.inner_text('[data-sim="aqueous"] [data-iop]')
                    log(f'  aqueous IOP normal={v0} gpao={v1} +PGA={v2} bloc+PGA+LPI={v3}')
                    if v0 == v1 or v1 == v2: raise Exception('IOP did not change')
                step('aqueous sim', aq)
                page.evaluate("h => { location.hash = h }", 'a-physiologie/transparence'); page.wait_for_timeout(350)
                def ed():
                    if not page.query_selector('[data-sim="edema"]'): raise Exception('no edema sim')
                    page.click('[data-sim="edema"] [data-pre="f2"]'); s1 = page.inner_text('[data-sim="edema"] [data-state]')
                    page.click('[data-sim="edema"] [data-pre="aacc"]'); s2 = page.inner_text('[data-sim="edema"] [data-state]')
                    log(f'  edema fuchs-avancé="{s1}" crise="{s2}"')
                step('edema sim', ed)
                page.evaluate("h => { location.hash = h }", 'a-physiologie/film-lacrymal'); page.wait_for_timeout(350)
                step('tbut blink', lambda: page.click('[data-sim="tbut"] [data-blink]'))
                page.evaluate("h => { location.hash = h }", 'a-physiologie/refraction'); page.wait_for_timeout(350)
                step('refraction slider', lambda: page.fill('#rf-al', '26'))
                page.evaluate("h => { location.hash = h }", 'a-examen/pupilles'); page.wait_for_timeout(350)
                def rapd():
                    page.select_option('#rapd-les', 'no'); page.click('[data-sim="rapd"] [data-l="OD"]'); page.wait_for_timeout(100); page.click('[data-sim="rapd"] [data-l="OS"]')
                    m = page.inner_text('[data-sim="rapd"] [data-rmsg]'); log('  rapd: ' + m[:90])
                    if 'RAPD' not in m: raise Exception('no RAPD message')
                step('rapd', rapd)
                page.evaluate("h => { location.hash = h }", 'a-examen/gonioscopie'); page.wait_for_timeout(350)
                step('gonio', lambda: (page.fill('#g-grade', '1'), page.check('[data-sim="gonio"] [data-k="indent"]')))
                page.evaluate("h => { location.hash = h }", 'a-examen/tonometrie'); page.wait_for_timeout(350)
                step('goldmann', lambda: (page.click('[data-sim="goldmann"] [data-v]'), page.click('[data-sim="goldmann"] [data-new]')))
                page.evaluate("h => { location.hash = h }", 'a-examen/av'); page.wait_for_timeout(350)
                step('acuity', lambda: page.fill('#va-in', '20/50'))
                page.evaluate("h => { location.hash = h }", 'a-examen/fluoresceine'); page.wait_for_timeout(350)
                step('fluo patterns', lambda: (page.click('[data-sim="patterns"][data-kind="fluo"] [data-p="dendrite"]'), page.check('[data-sim="patterns"][data-kind="fluo"] [data-rev]')))
                page.evaluate("h => { location.hash = h }", 'a-imagerie/structure'); page.wait_for_timeout(350)
                step('structure', lambda: (page.fill('#st-cd', '0.8'), page.select_option('#st-n', 'inf')))
                page.evaluate("h => { location.hash = h }", 'a-imagerie/champs-visuels'); page.wait_for_timeout(350)
                def vfq():
                    page.click('[data-sim="vf"] [data-quiz]'); page.click('[data-sim="vf"] [data-qa] >> nth=0')
                    if not page.query_selector('[data-sim="vf"] .feedback'): raise Exception('no vf feedback')
                step('vf quiz', vfq)
                page.evaluate("h => { location.hash = h }", 'a-imagerie/topographie'); page.wait_for_timeout(350)
                step('topo', lambda: page.click('[data-sim="patterns"][data-kind="topo"] [data-p="kc-inferior"]'))
                page.evaluate("h => { location.hash = h }", 'a-imagerie/speculaire'); page.wait_for_timeout(350)
                step('specular', lambda: (page.fill('#sp-e', '700'), page.check('[data-sim="specular"] input[data-gut]')))
                # fiche interactions
                first = page.evaluate("() => (OPH.fiches[0]||{}).id")
                if first:
                    # a fiche is 4 screens (#<id>/voir, /comprendre, /decider, /entrainer)
                    go_ = lambda st: (page.evaluate("h => { location.hash = h }", first + '/' + st), page.wait_for_timeout(300))
                    go_('voir')
                    if page.query_selector('[data-cmpreveal]') and page.is_visible('[data-cmpreveal]'): step('compare reveal', lambda: page.click('[data-cmpreveal]'))
                    if page.query_selector('[data-act="voir-idk"]:visible'): step('voir reveal', lambda: (page.click('[data-act="voir-idk"]:visible >> nth=0'), page.wait_for_selector('.voir-ans:not([hidden])', timeout=1500)))
                    if page.query_selector('[data-act="lightbox"]'):
                        step('lightbox', lambda: (page.click('[data-act="lightbox"]:visible >> nth=0'), page.wait_for_selector('#lightbox:not([hidden])', timeout=1500), page.click('[data-act="lb-close"]')))
                    go_('comprendre')
                    if page.query_selector('[data-mech]'):  # one stepper: the drawn mechanism; levers open at its last step
                        step('mechanism steps', lambda: [page.click('#view button[data-mech-next]') for _ in range(page.evaluate("document.querySelectorAll('#view .mech-s').length") - 1)])
                    else:
                        step('causal step', lambda: (page.click('[data-causal="next"]'), page.click('[data-causal="all"]')))
                    step('lever', lambda: page.click('[data-lever="0"]'))
                    go_('decider')
                    if page.locator('.gt:visible').count():
                        step('glossary', lambda: (page.click('.gt:visible >> nth=0'), page.wait_for_selector('#gt-pop', timeout=1000)))
                    if page.query_selector('[data-walk]'): step('walk', lambda: (page.click('[data-walk]'), page.click('[data-node="0"] [data-yn="yes"]')))
                    elif not page.query_selector('[data-tree]'): problems.append('[interact] decider: no decision tree')
                    go_('entrainer')
                    step('pearl', lambda: page.click('[data-pearl="0"]'))
                    if page.query_selector('[data-startmini]'):
                        def mini():
                            page.click('[data-startmini]'); page.click('[data-miniquiz] .opt >> nth=0')
                            if not page.query_selector('[data-miniquiz] .feedback'): raise Exception('no feedback')
                        step('mini quiz', mini)
                    step('mark read via next', lambda: (page.click('[data-markread]'), page.wait_for_timeout(200), None if page.evaluate("f => Prog.ficheDone(f)", first) else (_ for _ in ()).throw(Exception('not marked read'))))
                # quiz run
                page.evaluate("h => { location.hash = h }", 'quiz'); page.wait_for_timeout(300)
                def qrun():
                    page.click('[data-q="adaptive"][data-m="A"]'); page.wait_for_timeout(300)
                    for i in range(3):
                        page.click('#quiz-host .opt >> nth=0'); page.wait_for_selector('#quiz-host .feedback', timeout=1500); page.click('#quiz-host [data-next]'); page.wait_for_timeout(80)
                step('quiz run', qrun)
                # case
                cid = page.evaluate("() => (OPH.cases[0]||{}).id")
                if cid:
                    page.evaluate("h => { location.hash = h }", cid); page.wait_for_timeout(300)
                    def crun():
                        for k in range(14):
                            if page.query_selector('#case-host [data-ex]:not([disabled])') and page.query_selector('#case-host [data-cshow]'):
                                page.click('#case-host [data-ex] >> nth=0'); page.click('#case-host [data-ex] >> nth=1'); page.click('#case-host [data-cshow]')
                            elif page.query_selector('#case-host [data-ch]:not([disabled])'):
                                page.click('#case-host [data-ch] >> nth=0')
                            elif page.query_selector('#case-host [data-cnext]'):
                                page.click('#case-host [data-cnext]')
                            elif page.query_selector('#case-host [data-crestart]'):
                                return
                            page.wait_for_timeout(60)
                        raise Exception('case did not reach debrief')
                    step('case run', crun)
                def allfigs():
                    bad = page.evaluate("""() => { const bad = []; const tryF = (f, where) => { if (!f) return; try { const h = Figures.render(f, {reveal: true}); if (!h || h.length < 50) bad.push(where + ' empty'); } catch (e) { bad.push(where + ': ' + e.message); } };
                      OPH.quiz.forEach(q => tryF(q.figure, q.id));
                      OPH.fiches.forEach(f => { tryF(f.anatomy && f.anatomy.figure, f.id + ' anatomy'); if (f.compare) { tryF(f.compare.normal.figure, f.id + ' cmpN'); tryF(f.compare.patho.figure, f.id + ' cmpP'); } });
                      (OPH.capsules||[]).forEach(c => c.sections.forEach((s, i) => tryF(s.figure, c.id + ' s' + i)));
                      (OPH.cases||[]).forEach(c => c.steps.forEach((s, i) => tryF(s.figure, c.id + ' step' + i)));
                      Object.keys(OPH.photos||{}).forEach(k => (OPH.photos[k]||[]).forEach(p => { if (!D.cat(p.id)) bad.push('photo ' + k + ' ' + p.id); }));
                      return bad; }""")
                    if bad: raise Exception('; '.join(bad[:10]))
                step('all data figures', allfigs)
                def allq():
                    n = page.evaluate("() => OPH.quiz.length")
                    page.evaluate("() => { Quiz.session = { title: 'test', ids: OPH.quiz.map(q => q.id), back: 'quiz' }; location.hash = 'quiz-run'; }")
                    page.wait_for_timeout(300)
                    for i in range(n):
                        page.click('#quiz-host .opt >> nth=0'); page.click('#quiz-host [data-next]')
                    if not page.query_selector('#quiz-host .scorecard'): raise Exception('no scorecard after all questions')
                step('answer every question', allq)
                def allcases():
                    ids = page.evaluate("() => OPH.cases.map(c => c.id)")
                    for cid in ids:
                        page.evaluate("h => { location.hash = h }", cid); page.wait_for_timeout(150)
                        for k in range(20):
                            if page.query_selector('#case-host [data-ex]:not([disabled])') and page.query_selector('#case-host [data-cshow]'):
                                page.click('#case-host [data-ex] >> nth=0'); page.click('#case-host [data-cshow]')
                            elif page.query_selector('#case-host [data-ch]:not([disabled])'):
                                page.click('#case-host [data-ch] >> nth=1')
                            elif page.query_selector('#case-host [data-cnext]'):
                                page.click('#case-host [data-cnext]')
                            elif page.query_selector('#case-host [data-crestart]'):
                                break
                        else:
                            raise Exception(cid + ' did not finish')
                step('play every case', allcases)
                page.evaluate("h => { location.hash = h }", 'recherche'); page.wait_for_timeout(300)
                def srch():
                    page.fill('#srch', 'pression'); page.wait_for_timeout(400)
                    if 'Rien trouvé' in page.inner_text('[data-sres]') and page.evaluate("() => OPH.fiches.length") > 3: raise Exception('search found nothing for pression')
                step('search', srch)
                page.evaluate("h => { location.hash = h }", 'atlas'); page.wait_for_timeout(500)
                step('atlas filter', lambda: (page.fill('#atlas-q', 'Fuchs'), page.wait_for_timeout(350)))
                page.evaluate("h => { location.hash = h }", 'progression'); page.wait_for_timeout(300)
                step('dates', lambda: (page.fill('#d-g', '2026-11-09'), page.click('[data-act="save-dates"]')))
                step('display size', lambda: page.click('[data-act="size"][data-v="l"]'))
                step('display size back', lambda: page.click('[data-act="size"][data-v="m"]'))
                step('unlock', lambda: page.click('a.chart-line >> nth=1'))
                # learning layer v2
                page.evaluate("h => { location.hash = h }", 'accueil'); page.wait_for_timeout(300)
                page.evaluate("h => { location.hash = h }", 'progression'); page.wait_for_timeout(300)
                step('depth 3', lambda: page.click('[data-act="depth"][data-v="3"] >> nth=0'))
                step('depth 1', lambda: page.click('[data-act="depth"][data-v="1"] >> nth=0'))
                fid = page.evaluate("() => (OPH.fiches.find(f => (OPH.photos||{})[f.id]) || {}).id")
                page.evaluate("h => { location.hash = h }", fid + '/decider'); page.wait_for_timeout(400)
                def gating():
                    # level 1: no level-2 blocks; level 2: extra blocks exist but stay collapsed (never auto-opened)
                    if page.query_selector('#mv-dec details.lvl-2'): raise Exception('level-2 block shown at depth 1')
                    page.evaluate("() => { Settings.set('depth', 2); Router.refresh(); }"); page.wait_for_timeout(300)
                    st = page.evaluate("() => [...document.querySelectorAll('#mv-dec details.lvl-2')].map(d => d.open)")
                    if not st or any(st): raise Exception('depth 2 blocks missing or auto-opened: ' + str(st))
                    page.click('#mv-dec details.lvl-2 > summary >> nth=0')
                    if not page.evaluate("() => document.querySelector('#mv-dec details.lvl-2').open"): raise Exception('block did not open')
                    page.evaluate("() => { Settings.set('depth', 1); }")
                step('depth gating', gating)
                page.evaluate("h => { location.hash = h }", fid + '/voir'); page.wait_for_timeout(400)
                if page.query_selector('[data-car-step]'):
                    step('carousel', lambda: page.click('[data-car-step="1"] >> nth=0'))
                page.evaluate("h => { location.hash = h }", fid + '/entrainer'); page.wait_for_timeout(400)
                step('report form', lambda: (page.click('.src-acc summary'), page.click('[data-act="report-open"] >> nth=0'), page.fill('.report textarea >> nth=0', 'test'), page.click('[data-act="report-send"] >> nth=0')))
                page.evaluate("h => { location.hash = h }", 'cartes'); page.wait_for_timeout(400)
                def cards():
                    page.click('[data-flip]'); page.click('[data-g="2"]'); page.click('[data-flip]'); page.click('[data-g="0"]')
                    n = page.evaluate("() => Object.keys(Store.p.srs||{}).length")
                    if n < 2: raise Exception('srs not stored')
                step('flashcards', cards)
                page.evaluate("h => { location.hash = h }", 'jeu-images'); page.wait_for_timeout(400)
                step('image game', lambda: (page.click('[data-game] .opt >> nth=0'), page.click('[data-next]')))
                if page.evaluate("() => Object.keys(OPH.hy||{}).length"):
                    page.evaluate("h => { location.hash = h }", 'mots-troues'); page.wait_for_timeout(400)
                    step('cloze', lambda: (page.click('[data-o] >> nth=0'), page.click('[data-next]')))
                    page.evaluate("h => { location.hash = h }", 'triage'); page.wait_for_timeout(400)
                    step('triage', lambda: (page.click('[data-u="urgent"]'), page.click('[data-next]')))
                    page.evaluate("h => { location.hash = h }", 'associe'); page.wait_for_timeout(400)
                    def match():
                        cues = page.evaluate("() => [...document.querySelectorAll('[data-cue]')].map(b => b.dataset.cue)")
                        for c in cues:
                            page.click('[data-cue="%s"]' % c); page.click('[data-dx="%s"]' % c)
                        if not page.query_selector('[data-round]'): raise Exception('match not completed')
                    step('match', match)
                page.evaluate("h => { location.hash = h }", 'quiz'); page.wait_for_timeout(300)
                step('quiz confidence', lambda: (page.click('[data-q="adaptive"] >> nth=0'), page.wait_for_timeout(300), page.click('[data-conf="unsure"]'), page.click('.opt.idk')))
                for e in errs: problems.append('[interact] ' + e)
                stored = page.evaluate("() => { try { return localStorage.getItem('oph-r1-progress-v1') ? 'yes' : 'no' } catch (e) { return 'blocked' } }")
                log('  localStorage progress saved: ' + stored)
                stats = page.evaluate("() => ({fiches: OPH.fiches.length, quiz: OPH.quiz.length, cases: OPH.cases.length, gloss: Object.keys(OPH.glossary).length, photosKeys: Object.keys(OPH.photos||{}).length, catalog: OPH.catalog.length})")
                log('  data: ' + json.dumps(stats))
            ctx.close()
        browser.close()
        sim_smoke(p)
finally:
    srv.terminate()

log('\n%d problem(s)' % len(problems))
for pr in problems[:120]:
    log(' - ' + pr)
