#!/usr/bin/env python3
"""Render the art-direction samples: 3 stills (PNG) + one 5-s MP4 (H.264, no audio) per direction, plus a contact sheet.
Serves the repo root on 127.0.0.1 so the harness can load fonts/ and brand/ (read-only). Nothing in src/ or data/ is touched.
Usage: python3 render.py [A B C D E] [--stills-only] [--frames t1,t2,... --out DIR]"""
import http.server, os, subprocess, sys, threading, functools
from playwright.sync_api import sync_playwright

ROOT = os.path.abspath(os.path.join(os.path.dirname(__file__), '../../../..'))
OUT = os.path.abspath(os.path.join(os.path.dirname(__file__), '..'))
PORT = 8791
FPS, DUR = 30, 5.0
# hook, middle, end-card times per direction (seconds into the 5-s timeline)
STILLS = {'A': (1.55, 2.95, 4.95), 'B': (1.6, 3.05, 4.95), 'C': (1.25, 2.25, 4.95), 'D': (1.7, 3.1, 4.95), 'E': (1.45, 2.6, 4.95)}
SLUG = {'A': 'a-lampe-a-fente', 'B': 'b-carnet-externe', 'C': 'c-kinetic-type', 'D': 'd-schema-vivant', 'E': 'e-quiz-show'}


def serve():
    class Q(http.server.SimpleHTTPRequestHandler):
        def log_message(self, *a):
            pass
    h = functools.partial(Q, directory=ROOT)
    s = http.server.ThreadingHTTPServer(('127.0.0.1', PORT), h)
    threading.Thread(target=s.serve_forever, daemon=True).start()
    return s


def open_dir(b, d):
    pg = b.new_page(viewport={'width': 1080, 'height': 1920}, device_scale_factor=1)
    pg.goto('http://127.0.0.1:%d/launch/teaser/directions/_src/harness.html?d=%s' % (PORT, d))
    pg.wait_for_function('window.READY === true', timeout=20000)
    return pg


def shot(pg, t, path, fmt='png'):
    pg.evaluate('t => K.seek(t)', t)
    pg.evaluate('() => new Promise(r => requestAnimationFrame(() => requestAnimationFrame(r)))')
    if fmt == 'png':
        return pg.locator('#stage').screenshot(path=path, type='png')
    return pg.locator('#stage').screenshot(type='jpeg', quality=92)


def video(pg, path):
    tmp = path[:-4] + '.tmp.mp4'
    ff = subprocess.Popen(['ffmpeg', '-y', '-loglevel', 'error', '-f', 'image2pipe', '-framerate', str(FPS), '-c:v', 'mjpeg', '-i', '-',
                           '-an', '-c:v', 'libx264', '-preset', 'veryfast', '-crf', '20', '-pix_fmt', 'yuv420p', '-r', str(FPS), '-movflags', '+faststart', tmp],
                          stdin=subprocess.PIPE)
    for i in range(int(FPS * DUR)):
        ff.stdin.write(shot(pg, i / FPS, None, 'jpeg'))
    ff.stdin.close()
    if ff.wait() == 0:
        os.replace(tmp, path)
    else:
        raise SystemExit('ffmpeg failed for ' + path)


def main():
    args = sys.argv[1:]
    dirs = [a for a in args if a in SLUG] or list(SLUG)
    srv = serve()
    with sync_playwright() as p:
        b = p.chromium.launch(args=['--no-sandbox', '--force-color-profile=srgb', '--font-render-hinting=none'])
        if '--frames' in args:
            ts = [float(x) for x in args[args.index('--frames') + 1].split(',')]
            od = args[args.index('--out') + 1]
            os.makedirs(od, exist_ok=True)
            for d in dirs:
                pg = open_dir(b, d)
                for t in ts:
                    shot(pg, t, os.path.join(od, '%s-%05.2f.png' % (d, t)))
                pg.close()
            return
        for d in dirs:
            pg = open_dir(b, d)
            base = os.path.join(OUT, SLUG[d])
            for name, t in zip(('1-hook', '2-milieu', '3-fin'), STILLS[d]):
                shot(pg, t, '%s-%s.png' % (base, name))
            if '--stills-only' not in args:
                video(pg, base + '-sample-5s.mp4')
            pg.close()
            print('done', d)
        b.close()
    srv.shutdown()


if __name__ == '__main__':
    main()
