#!/usr/bin/env python3
"""Capture the real « Voir » card (Observe → touche le signe → pas ici → loop → nomme → Bien vu !) from the built site.
The photo slot is fed our own CRAO schematic (ui-asset-crao.png); every other raster image is replaced by a transparent pixel,
so the screen shows only our own SVG/schematic + the real UI. Animations are slowed with CDP Animation.setPlaybackRate
so screenshots can sample them; frames are written with their animation-time stamps (ui-frames/<lang>/index.json)."""
import http.server, functools, threading, os, sys, json, time, base64
from playwright.sync_api import sync_playwright
HERE = os.path.dirname(os.path.abspath(__file__)); SITE = os.path.abspath(os.path.join(HERE, '../../../site'))
ASSET = open(os.path.join(HERE, 'ui-asset-crao.png'), 'rb').read()
PIX = base64.b64decode('iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=')
PORT = 8768
ROUTE = os.environ.get('ROUTE', '#occlusions-retiniennes/voir')
def serve():
    class Q(http.server.SimpleHTTPRequestHandler):
        def log_message(self, *a): pass
    s = http.server.ThreadingHTTPServer(('127.0.0.1', PORT), functools.partial(Q, directory=SITE)); threading.Thread(target=s.serve_forever, daemon=True).start(); return s
def main():
    lang = sys.argv[1] if len(sys.argv) > 1 else 'fr'; mode = sys.argv[2] if len(sys.argv) > 2 else 'probe'
    serve()
    with sync_playwright() as p:
        b = p.chromium.launch(args=['--no-sandbox', '--force-color-profile=srgb'])
        ctx = b.new_context(viewport={'width': 432, 'height': 960}, device_scale_factor=2.5, color_scheme='dark', reduced_motion='no-preference')
        def img(route):
            u = route.request.url
            if 'OPH-250' in u: return route.fulfill(status=200, content_type='image/jpeg' if u.endswith('.jpg') else 'image/png', body=ASSET)
            return route.fulfill(status=200, content_type='image/png', body=PIX)
        ctx.route('**/*.{jpg,jpeg,png,webp,gif}', lambda r: img(r) if '/img/' in r.request.url or 'OPH' in r.request.url or 'IMG' in r.request.url else r.continue_())
        ctx.route(lambda u: not u.startswith('http://127.0.0.1'), lambda r: r.abort())
        pg = ctx.new_page()
        pg.goto('http://127.0.0.1:%d/?lang=%s%s' % (PORT, lang, ROUTE)); pg.wait_for_timeout(1500)
        if mode == 'probe':
            pg.screenshot(path=os.path.join(HERE, 'probe-%s.png' % lang), full_page=False)
            info = pg.evaluate('''() => { const c = document.querySelector('[data-voir]'); if (!c) return null; const r = c.getBoundingClientRect(); const m = c.querySelector('.voir-media').getBoundingClientRect();
              return {card: [r.x, r.y, r.width, r.height], media: [m.x, m.y, m.width, m.height], key: c.dataset.key, photo: c.dataset.photo, imgs: [...document.images].map(i => i.src.split('/').pop()).slice(0, 12)} }''')
            print(json.dumps(info))
        else:
            capture(pg, ctx, lang)
        b.close()

RATE = 0.2
def shot(pg):
    return pg.screenshot(type='jpeg', quality=90)
def seg(pg, cdp, name, dur, action, out, idx):
    frames, t0 = [], None
    action()
    t0 = time.time()
    while True:
        el = (time.time() - t0) * RATE
        if el > dur: break
        img = shot(pg); el = (time.time() - t0) * RATE
        fn = '%s-%03d.jpg' % (name, len(frames)); open(os.path.join(out, fn), 'wb').write(img); frames.append({'f': fn, 't': round(el, 4)})
    idx['segs'].append({'name': name, 'frames': frames})
def capture(pg, ctx, lang):
    out = os.path.join(HERE, 'ui-frames', lang); os.makedirs(out, exist_ok=True)
    for f in os.listdir(out): os.remove(os.path.join(out, f))
    pg.evaluate('''() => { const c = document.querySelector('[data-voir]'); const cr = c.querySelector('.credit, .ph-credit, [class*=credit]'); if (cr) cr.textContent = (document.documentElement.lang === 'en' ? 'Diagram · Ocelle' : 'Schéma · Ocelle');
      window.scrollBy(0, c.getBoundingClientRect().top - 70); }''')
    pg.wait_for_timeout(600)
    cdp = ctx.new_cdp_session(pg); cdp.send('Animation.enable'); cdp.send('Animation.setPlaybackRate', {'playbackRate': RATE})
    m = pg.evaluate("() => { const r = document.querySelector('[data-voir] .voir-media').getBoundingClientRect(); return [r.x, r.y, r.width, r.height]; }")
    idx = {'rate': RATE, 'vw': 432, 'vh': 960, 'dpr': 2.5, 'media': m, 'segs': []}
    miss = [m[0] + .24 * m[2], m[1] + .3 * m[3]]; hit = [m[0] + .51 * m[2], m[1] + .54 * m[3]]
    idx['taps'] = {'miss': miss, 'hit': hit}
    seg(pg, cdp, 'idle', 0.01, lambda: None, out, idx)
    seg(pg, cdp, 'miss', 1.0, lambda: pg.mouse.click(*miss), out, idx)
    pg.wait_for_timeout(300)
    seg(pg, cdp, 'hit', 1.6, lambda: pg.mouse.click(*hit), out, idx)
    pg.wait_for_timeout(300)
    ok = pg.evaluate('''() => { const o = document.querySelector('[data-voir] [data-act=voir-opt][data-ok="1"]'); if (!o) return null; const r = o.getBoundingClientRect(); return [r.x + r.width / 2, r.y + r.height / 2]; }''')
    idx['taps']['name'] = ok
    print('choice at', ok)
    if ok: seg(pg, cdp, 'name', 1.6, lambda: pg.mouse.click(*ok), out, idx)
    pg.wait_for_timeout(200)
    print('verdict', pg.evaluate('''() => [...document.querySelectorAll('[data-voir] .feedback, [data-voir] .mo-sticker, .mo-sticker')].map(e => [e.className, Math.round(e.getBoundingClientRect().top), Math.round(e.getBoundingClientRect().height), e.textContent.slice(0, 40)])'''))
    json.dump(idx, open(os.path.join(out, 'index.json'), 'w'), indent=1)
    print({s['name']: len(s['frames']) for s in idx['segs']})
main()
