#!/usr/bin/env python3
"""Screenshot selected routes. Usage: python3 tests/shot.py route[@width][:dark][#scrollY] ..."""
import os, subprocess, sys, time
from playwright.sync_api import sync_playwright
ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
DIST, OUT = os.path.join(ROOT, 'dist'), os.path.join(ROOT, 'tests', 'shots')
os.makedirs(OUT, exist_ok=True)
PORT = 8766
srv = subprocess.Popen([sys.executable, '-m', 'http.server', str(PORT), '--directory', DIST], stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)
time.sleep(0.7)
try:
    with sync_playwright() as p:
        b = p.chromium.launch(executable_path='/usr/bin/google-chrome', args=['--no-sandbox', '--disable-background-networking', '--no-first-run', '--disable-component-update'])
        for spec in sys.argv[1:]:
            dark = ':dark' in spec
            spec2 = spec.replace(':dark', '')
            scroll = 0
            if '#' in spec2: spec2, scroll = spec2.split('#'); scroll = int(scroll)
            route, w = (spec2.split('@') + ['1280'])[:2]
            ctx = b.new_context(viewport={'width': int(w), 'height': 900 if int(w) > 600 else 844}, color_scheme='dark' if dark else 'light', device_scale_factor=1)
            ctx.route('**/*', lambda r: r.continue_() if r.request.url.startswith('http://127.0.0.1') or r.request.url.startswith('data:') else r.abort())
            pg = ctx.new_page()
            pg.goto('http://127.0.0.1:%d/preview.html#%s' % (PORT, route), wait_until='domcontentloaded')
            pg.wait_for_timeout(700)
            if scroll: pg.evaluate('y => window.scrollTo(0, y)', scroll); pg.wait_for_timeout(300)
            name = '%s-%s%s%s.png' % (route, w, '-dark' if dark else '', ('-' + str(scroll)) if scroll else '')
            pg.screenshot(path=os.path.join(OUT, name))
            print(os.path.join(OUT, name))
            ctx.close()
        b.close()
finally:
    srv.terminate()
