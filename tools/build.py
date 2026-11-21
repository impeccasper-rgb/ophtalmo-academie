#!/usr/bin/env python3
"""Assemble the single-page app into dist/index.html (+ dist/img/ supporting files)."""
import glob, json, os, re, shutil, sys

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
SRC, DATA, DIST = (os.path.join(ROOT, d) for d in ('src', 'data', 'dist'))
os.makedirs(DIST, exist_ok=True)

# catalog → data/catalog.js
cat = json.load(open(os.path.join(ROOT, 'imgsrc', 'catalog.json'), encoding='utf-8'))
slim = [dict({k: e.get(k) for k in ('id', 'title', 'caption', 'page_url', 'module', 'kind', 'tw', 'th')}, src='imgsrc') for e in cat if e['id'] not in ('OPH-185', 'OPH-186')]
cat2 = json.load(open(os.path.join(ROOT, 'imgsrc2', 'catalog2.json'), encoding='utf-8'))
for e in cat2:
    tw = 440; th = round(e['fh'] * tw / e['fw'])
    d = {'id': e['id'], 'title': e['title'], 'caption': e['caption'], 'page_url': e['page_url'], 'module': e['module'], 'kind': 'clinical', 'tw': tw, 'th': th, 'dossier': e.get('dossier', ''), 'src': 'imgsrc2'}
    if not e.get('cc'): d['cc'] = False
    slim.append(d)
with open(os.path.join(DATA, 'catalog.js'), 'w', encoding='utf-8') as f:
    f.write("var G = (typeof window !== 'undefined') ? window : globalThis;\nG.OPH = G.OPH || {};\nG.OPH.catalog = " + json.dumps([{k: v for k, v in e.items() if k != 'src'} for e in slim], ensure_ascii=False) + ";\n")

data_order = ['catalog', 'module-a', 'capsules', 'fiches-cornee', 'fiches-cornee-2', 'fiches-glaucome', 'quiz-a', 'quiz-b', 'quiz-c', 'quiz-c2', 'quiz-photos', 'cases', 'photos', 'images',
              'ext-a5-a', 'ext-a5-b', 'ext-cornee-a', 'ext-cornee-b', 'ext-glaucome-a', 'ext-glaucome-b', 'ext-photos', 'ext-links', 'hy-module-a', 'hy-cornee', 'hy-glaucome', 'investigations', 'inv-media']
src_order = ['core', 'i18n', 'figures-a', 'figures-b', 'sims', 'quiz', 'learn', 'investigations', 'views']

def js(path):
    s = open(path, encoding='utf-8').read()
    return re.sub(r'</(script)', r'<\\/\1', s, flags=re.I)

parts = []
parts.append('<title>Ocelle · ophtalmologie pour externes et R1</title>')
parts.append('<meta name="claude:viewport-fit-sides" content="cover">')
parts.append('<meta name="description" content="Apprends à voir le signe qui compte : cornée, glaucome et examens, en images, cas et jeux. Gratuit, sans pub.">')
parts.append('<link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>')
parts.append('<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Lexend:wght@400..800&family=Atkinson+Hyperlegible+Next:wght@400;500;600;700&family=Atkinson+Hyperlegible+Mono:wght@400;600&display=swap">')
parts.append('<style>\n' + '\n'.join(open(os.path.join(SRC, c), encoding='utf-8').read() for c in ('styles.css', 'investigations.css') if os.path.exists(os.path.join(SRC, c))) + '\n</style>')
parts.append('''<div class="shell">
<aside class="rail" id="rail" aria-label="Navigation"></aside>
<div style="min-width:0">
<header class="topbar"><button type="button" class="btn sm" data-act="menu" aria-label="Ouvrir le menu" aria-controls="drawer">Menu</button><a class="brand" href="#accueil"><svg class="logo" viewBox="0 0 1024 1024" aria-hidden="true"><rect width="1024" height="1024" rx="236" fill="#0A2547"/><circle cx="512" cy="512" r="282" fill="#2F4EE6"/><circle cx="512" cy="512" r="116" fill="#050E1D"/><path d="M336 236A330 330 0 0 0 336 788" fill="none" stroke="#EAF3FF" stroke-opacity=".85" stroke-width="40" stroke-linecap="round"/><circle cx="660" cy="364" r="66" fill="#B6F04E"/></svg><span><b>Ocelle</b><span>Ophtalmo · externat et R1</span></span></a></header>
<main class="main" id="view" tabindex="-1"><div class="page"><p class="muted">Chargement de la classe…</p></div></main>
</div></div>
<nav class="tabbar" id="tabbar" aria-label="Navigation rapide"></nav>
<div class="drawer" id="drawer" hidden><div class="scrim" data-act="close-drawer"></div><div class="panel" role="dialog" aria-label="Menu"></div></div>
<div class="lightbox" id="lightbox" hidden role="dialog" aria-label="Image agrandie"></div>''')
missing = []
for name in data_order:
    p = os.path.join(DATA, name + '.js')
    if os.path.exists(p):
        parts.append('<script>\n' + js(p) + '\n</script>')
    else:
        missing.append(name)
for name in sorted(glob.glob(os.path.join(ROOT, 'data-en', '*.js'))):
    parts.append('<script>\n' + js(name) + '\n</script>')
for name in src_order:
    p = os.path.join(SRC, name + '.js')
    if os.path.exists(p):
        parts.append('<script>\n' + js(p) + '\n</script>')
html = '\n'.join(parts)
open(os.path.join(DIST, 'index.html'), 'w', encoding='utf-8').write(html)
# local preview with the same skeleton the Artifact host adds at publish time
skeleton = ('<!doctype html><html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover">'
            '<style>:root{color-scheme:light;padding-top:env(safe-area-inset-top,0px);padding-bottom:env(safe-area-inset-bottom,0px)}'
            'body{margin:0;font:14px system-ui,sans-serif}img{max-width:100%}[hidden]{display:none!important}</style></head><body>')
open(os.path.join(DIST, 'preview.html'), 'w', encoding='utf-8').write(skeleton + html + '</body></html>')

# images
img_dir = os.path.join(DIST, 'img')
os.makedirs(img_dir, exist_ok=True)
shutil.rmtree(os.path.join(img_dir, 't'), ignore_errors=True)  # single image size since the 2nd catalogue (file-count limit)
n = 0
for e in slim:
    src, dst = os.path.join(ROOT, e['src'], 'web', e['id'] + '.jpg'), os.path.join(img_dir, e['id'] + '.jpg')
    if not os.path.exists(dst) or os.path.getmtime(dst) < os.path.getmtime(src):
        shutil.copy2(src, dst)
    n += 1
size = os.path.getsize(os.path.join(DIST, 'index.html'))
imgbytes = sum(os.path.getsize(os.path.join(dp, f)) for dp, _, fs in os.walk(img_dir) for f in fs)
print('index.html %.1f KB · images %d files %.1f MB · missing data: %s' % (size / 1024, n, imgbytes / 1e6, ', '.join(missing) or 'none'))
