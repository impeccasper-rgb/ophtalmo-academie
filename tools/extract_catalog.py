#!/usr/bin/env python3
"""Extract the user's image catalogue (PDF) into a JSON index + resized JPEGs.

Usage: python3 tools/extract_catalog.py <catalogue.pdf> <outdir>
Writes <outdir>/catalog.json, <outdir>/raw/*.jpg (as embedded) and <outdir>/web/OPH-xxx.jpg (resized).
"""
import json, os, re, subprocess, sys
from pypdf import PdfReader
from PIL import Image

pdf, out = sys.argv[1], sys.argv[2]
os.makedirs(os.path.join(out, 'raw'), exist_ok=True)
os.makedirs(os.path.join(out, 'web'), exist_ok=True)

reader = PdfReader(pdf)

# 1) Images per page, in pdfimages order
lst = subprocess.run(['pdfimages', '-list', pdf], capture_output=True, text=True).stdout.splitlines()[2:]
imgs_by_page = {}
for line in lst:
    parts = line.split()
    if len(parts) < 5 or parts[2] != 'image':
        continue
    page, num, w, h = int(parts[0]), int(parts[1]), int(parts[3]), int(parts[4])
    imgs_by_page.setdefault(page, []).append({'num': num, 'w': w, 'h': h})
subprocess.run(['pdfimages', '-j', '-p', pdf, os.path.join(out, 'raw', 'img')], check=True)
raw_files = sorted(os.listdir(os.path.join(out, 'raw')))
# file names: img-PPP-NNN.jpg (NNN = global image number)
by_num = {}
for f in raw_files:
    m = re.match(r'img-(\d+)-(\d+)\.(jpg|png|ppm|pbm|jp2|tif)$', f)
    if m:
        by_num[int(m.group(2))] = f

entry_re = re.compile(r'OPH-(\d{3})\s*\|\s*(.+)')
kind_re = re.compile(r'(Imagerie / photographie clinique|Schéma pédagogique / grille, non photographie clinique)\s*·\s*(\d+)\s*×\s*(\d+)\s*px')

entries = []
for pi, page in enumerate(reader.pages, start=1):
    text = page.extract_text() or ''
    lines = [l.strip() for l in text.splitlines()]
    # links in reading order (top to bottom, left to right)
    links = []
    for a in page.get('/Annots') or []:
        a = a.get_object()
        act = a.get('/A')
        if act and act.get('/URI'):
            r = [float(x) for x in a['/Rect']]
            links.append((-r[3], r[0], str(act['/URI'])))
    links.sort()
    uris = [u for _, _, u in links]
    page_entries = []
    i = 0
    while i < len(lines):
        m = entry_re.match(lines[i])
        if m:
            e = {'id': 'OPH-' + m.group(1), 'title': m.group(2).strip(), 'page': pi, 'caption': '', 'kind': '', 'w': 0, 'h': 0, 'credit': ''}
            j = i + 1
            cap = []
            while j < len(lines) and not entry_re.match(lines[j]):
                L = lines[j]
                if L.startswith('Légende source'):
                    cap.append(L.split(':', 1)[1].strip())
                    k = j + 1
                    while k < len(lines) and lines[k] and not kind_re.search(lines[k]) and not lines[k].startswith('Crédit') and not lines[k].startswith('PAGE CLINIQUE'):
                        cap.append(lines[k]); k += 1
                    j = k; continue
                km = kind_re.search(L)
                if km:
                    e['kind'] = 'schema' if km.group(1).startswith('Schéma') else 'clinical'
                    e['w'], e['h'] = int(km.group(2)), int(km.group(3))
                if L.startswith('Crédit'):
                    cr = [L.split(':', 1)[1].strip()]
                    k = j + 1
                    while k < len(lines) and lines[k] and not lines[k].startswith('PAGE CLINIQUE') and not entry_re.match(lines[k]) and not lines[k].startswith('OPHTALMOLOGIE R1'):
                        cr.append(lines[k]); k += 1
                    e['credit'] = ' '.join(cr)
                    j = k; continue
                j += 1
            e['caption'] = ' '.join(cap).strip()
            page_entries.append(e)
            i = j
        else:
            i += 1
    imgs = imgs_by_page.get(pi, [])
    for k, e in enumerate(page_entries):
        e['page_url'] = uris[2 * k] if 2 * k < len(uris) else ''
        e['image_url'] = uris[2 * k + 1] if 2 * k + 1 < len(uris) else ''
        if k < len(imgs):
            im = imgs[k]
            e['raw'] = by_num.get(im['num'], '')
            e['emb_w'], e['emb_h'] = im['w'], im['h']
            if e['w'] and e['h']:
                e['aspect_ok'] = abs(im['w'] / im['h'] - e['w'] / e['h']) < 0.03
        entries.append(e)

for e in entries:
    n = int(e['id'][4:])
    e['module'] = 'A' if n <= 15 else ('B' if n <= 130 else 'C')
    if e.get('raw'):
        src = os.path.join(out, 'raw', e['raw'])
        im = Image.open(src).convert('RGB')
        maxw = 1400 if (e['kind'] == 'schema' or e['emb_w'] < 1000) else 1280
        if im.width > maxw:
            im = im.resize((maxw, round(im.height * maxw / im.width)), Image.LANCZOS)
        dst = os.path.join(out, 'web', e['id'] + '.jpg')
        im.save(dst, 'JPEG', quality=80, optimize=True, progressive=True)
        e['file'] = 'img/' + e['id'] + '.jpg'
        e['fw'], e['fh'] = im.width, im.height
        e['bytes'] = os.path.getsize(dst)

with open(os.path.join(out, 'catalog.json'), 'w', encoding='utf-8') as f:
    json.dump(entries, f, ensure_ascii=False, indent=1)

bad = [e['id'] for e in entries if not e.get('raw') or e.get('aspect_ok') is False or not e['page_url']]
print('entries', len(entries), 'with image', sum(1 for e in entries if e.get('raw')), 'total web bytes', sum(e.get('bytes', 0) for e in entries))
print('problems', bad)
