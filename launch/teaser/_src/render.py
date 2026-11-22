#!/usr/bin/env python3
"""Ocelle teasers renderer. Serves the repo root on 127.0.0.1 (read-only: fonts/, brand/), opens harness.html,
seeks the paused Web Animations timeline frame by frame and pipes JPEG screenshots to ffmpeg (H.264, veryfast, no audio).
  python3 render.py videos [filter...]        all reels (or those whose name contains a filter)
  python3 render.py frames R LANG t1,t2 OUT   preview stills of one reel
  python3 render.py stills                    carousels + profile kit (PNG)"""
import http.server, os, subprocess, sys, threading, functools, json
from playwright.sync_api import sync_playwright

HERE = os.path.dirname(os.path.abspath(__file__))
ROOT = os.path.abspath(os.path.join(HERE, '../../..'))
TEASER = os.path.dirname(HERE)
PORT = int(os.environ.get('PORT', '8792'))
FPS = 30

REELS = [  # (file stem, harness r)
    ('01-ocelle-arrive', 'brand'),
    ('02-defi-angle-ferme', 'quiz:angle:same'),
    ('03-mecanisme-crise-angle', 'mech'),
    ('04-defi-dendrite-reponse-demain', 'quiz:dendrite:demain'),
    ('04b-defi-dendrite-reponse', 'quiz:dendrite:recap'),
    ('05-touche-le-signe', 'ui'),
    ('06-defi-decollement-retine', 'quiz:rd:same'),
    ('07-defi-oacr-reponse-demain', 'quiz:crao:demain'),
    ('07b-defi-oacr-reponse', 'quiz:crao:recap'),
    ('08-defi-hypopion', 'quiz:hypopyon:same'),
    ('09-compte-a-rebours-j30', 'countdown:30'),
    ('09-compte-a-rebours-j14', 'countdown:14'),
    ('09-compte-a-rebours-j7', 'countdown:7'),
    ('09-compte-a-rebours-j1', 'countdown:1'),
]
POSTER = {'brand': 8.5, 'quiz:angle:same': 11.5, 'mech': 4.0, 'quiz:dendrite:demain': 7.5, 'quiz:dendrite:recap': 11.0, 'ui': 8.0, 'quiz:rd:same': 11.5,
          'quiz:crao:demain': 7.5, 'quiz:crao:recap': 11.0, 'quiz:hypopyon:same': 11.5, 'countdown:30': 6.5, 'countdown:14': 6.5, 'countdown:7': 6.5, 'countdown:1': 6.5}


def serve():
    class Q(http.server.SimpleHTTPRequestHandler):
        def log_message(self, *a):
            pass
    s = http.server.ThreadingHTTPServer(('127.0.0.1', PORT), functools.partial(Q, directory=ROOT))
    threading.Thread(target=s.serve_forever, daemon=True).start()
    return s


def open_page(b, r, lang, w=1080, h=1920):
    pg = b.new_page(viewport={'width': w, 'height': h}, device_scale_factor=1)
    pg.goto('http://127.0.0.1:%d/launch/teaser/_src/harness.html?r=%s&lang=%s' % (PORT, r, lang))
    pg.wait_for_function('window.READY === true', timeout=60000)
    return pg


def grab(pg, t, path=None, jpeg=False):
    pg.evaluate('async t => { await K.seekA(t); }', t)
    pg.evaluate('() => new Promise(r => requestAnimationFrame(() => requestAnimationFrame(r)))')
    if jpeg:
        return pg.locator('#stage').screenshot(type='jpeg', quality=90)
    return pg.locator('#stage').screenshot(path=path, type='png')


def video(pg, path):
    out = pg.evaluate('window.OUT')
    tmp = path[:-4] + '.tmp.mp4'
    ff = subprocess.Popen(['ffmpeg', '-y', '-loglevel', 'error', '-f', 'image2pipe', '-framerate', str(FPS), '-c:v', 'mjpeg', '-i', '-', '-an',
                           '-c:v', 'libx264', '-preset', 'veryfast', '-crf', '21', '-pix_fmt', 'yuv420p', '-r', str(FPS), '-movflags', '+faststart', tmp], stdin=subprocess.PIPE)
    for i in range(int(round(FPS * out['T']))):
        ff.stdin.write(grab(pg, i / FPS, jpeg=True))
    ff.stdin.close()
    if ff.wait() != 0:
        raise SystemExit('ffmpeg failed: ' + path)
    os.replace(tmp, path)
    return out


def main():
    a = sys.argv[1:]
    srv = serve()
    with sync_playwright() as p:
        b = p.chromium.launch(args=['--no-sandbox', '--force-color-profile=srgb', '--font-render-hinting=none'])
        if a[0] == 'frames':
            r, lang, ts, od = a[1], a[2], [float(x) for x in a[3].split(',')], a[4]
            os.makedirs(od, exist_ok=True)
            pg = open_page(b, r, lang)
            for t in ts:
                grab(pg, t, os.path.join(od, '%s-%s-%05.2f.png' % (r.replace(':', '_'), lang, t)))
        elif a[0] == 'videos':
            flt = a[1:]
            meta_path = os.path.join(HERE, 'cuts-%s.json' % os.environ.get('JOB', '0'))
            meta = json.load(open(meta_path)) if os.path.exists(meta_path) else {}
            for stem, r in REELS:
                if flt and not any(f in stem or f == r for f in flt):
                    continue
                for lang in ('fr', 'en'):
                    if '--' + ('en' if lang == 'fr' else 'fr') + '-only' in a:
                        continue
                    name = 'ocelle-teaser-%s-%s' % (stem, lang)
                    pg = open_page(b, r, lang)
                    out = video(pg, os.path.join(TEASER, 'videos', name + '.mp4'))
                    grab(pg, POSTER[r], os.path.join(TEASER, 'videos', name + '-poster.png'))
                    pg.close()
                    meta[name] = {'T': out['T'], 'cuts': out['cuts'], 'texts': out['texts']}
                    json.dump(meta, open(meta_path, 'w'), indent=1, sort_keys=True)
                    print('done', name, out['T'], flush=True)
        elif a[0] == 'stills':
            import importlib.util
            jobs = json.loads(open(os.path.join(HERE, os.environ.get('STILLS', 'stills.json'))).read())
            for j in jobs:
                pg = open_page(b, j['r'], j['lang'], j['w'], j['h'])
                grab(pg, 0, os.path.join(TEASER, j['out']))
                pg.close()
                print('still', j['out'], flush=True)
        b.close()
    srv.shutdown()


if __name__ == '__main__':
    main()
