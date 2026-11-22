#!/usr/bin/env python3
"""iOS launch images for the home-screen web app (apple-touch-startup-image): brand/splash/*.png.

iOS does not build a splash screen from the manifest: without one image per screen size it shows a white screen at launch.
Each image is the cobalt field with the ocellus mark and the wordmark, rendered by Chromium (Playwright) at the exact
pixel size of the device, then reduced to a palette PNG. tools/build_web.py copies them and writes the <link> tags.

  python3 tools/make_splash.py        # needs Playwright + Chromium (dev container); the PNGs are committed, CI only copies them
"""
import io, json, os
from playwright.sync_api import sync_playwright

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
OUT = os.path.join(ROOT, 'brand', 'splash')
# (CSS width, CSS height, device pixel ratio), portrait. Covers iPhone SE 2/3 to iPhone 17 Pro Max.
SIZES = [(375, 667, 2), (414, 736, 3), (375, 812, 3), (414, 896, 2), (414, 896, 3), (390, 844, 3), (428, 926, 3),
         (393, 852, 3), (430, 932, 3), (402, 874, 3), (440, 956, 3), (420, 912, 3)]


def main():
    os.makedirs(OUT, exist_ok=True)
    mark = open(os.path.join(ROOT, 'brand', 'mark-loop.svg'), encoding='utf-8').read()
    word = open(os.path.join(ROOT, 'brand', 'wordmark.svg'), encoding='utf-8').read()
    html = ('<!doctype html><html><head><meta charset="utf-8"><style>html,body{margin:0;height:100%%;background:#1F2CFF}'
            'body{display:flex;flex-direction:column;align-items:center;justify-content:center;gap:5vh;color:#fff}'
            '.m svg{width:34vw;height:auto;display:block}.w svg{width:40vw;height:auto;display:block}</style></head>'
            '<body><div class="m">%s</div><div class="w">%s</div></body></html>') % (mark, word)
    try:
        from PIL import Image
    except ImportError:
        Image = None
    made = []
    with sync_playwright() as p:
        b = p.chromium.launch()
        for w, h, r in SIZES:
            pg = b.new_page(viewport={'width': w, 'height': h}, device_scale_factor=r)
            pg.set_content(html); pg.wait_for_timeout(100)
            png = pg.screenshot(type='png'); pg.close()
            name = 'splash-%dx%d.png' % (w * r, h * r)
            path = os.path.join(OUT, name)
            if Image:
                Image.open(io.BytesIO(png)).convert('RGB').quantize(colors=48, method=Image.Quantize.MEDIANCUT).save(path, optimize=True)
            else:
                open(path, 'wb').write(png)
            made.append({'file': name, 'w': w, 'h': h, 'dpr': r})
        b.close()
    json.dump(made, open(os.path.join(OUT, 'splash.json'), 'w'), indent=1)
    print('%d launch images in brand/splash/ (%.0f KB)' % (len(made), sum(os.path.getsize(os.path.join(OUT, m['file'])) for m in made) / 1024))


if __name__ == '__main__':
    main()
