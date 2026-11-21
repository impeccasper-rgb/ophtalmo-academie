#!/usr/bin/env python3
"""Extract the complement catalogue (OPH-192..391) -> imgsrc2/catalog2.json + web JPEGs + labelled contact sheets."""
import json, os, re, sys, io
import pymupdf
from PIL import Image, ImageDraw, ImageFont

pdf, out = sys.argv[1], sys.argv[2]
doc = pymupdf.open(pdf)
entry_re = re.compile(r'^OPH-(\d{3})\s*\|\s*(.+)$')
entries = []
refs = {}
full_lines = []
for pno in range(len(doc)):
    page = doc[pno]
    d = page.get_text('dict')
    lines = []
    for b in d['blocks']:
        if b.get('type') != 0: continue
        for l in b['lines']:
            t = ''.join(s['text'] for s in l['spans']).strip()
            if t: lines.append((l['bbox'][1], l['bbox'][0], t))
    lines.sort()
    full_lines.append((pno + 1, lines))
    imgs = []
    for info in page.get_image_info(xrefs=True):
        x0, y0, x1, y1 = info['bbox']
        imgs.append({'xref': info['xref'], 'y0': y0, 'y1': y1})
    imgs.sort(key=lambda i: i['y0'])
    heads = [(y, t) for (y, x, t) in lines if entry_re.match(t)]
    for k, (y, t) in enumerate(heads):
        m = entry_re.match(t)
        ny = heads[k + 1][0] if k + 1 < len(heads) else 1e9
        e = {'id': 'OPH-' + m.group(1), 'title': m.group(2).strip(), 'page': pno + 1, 'caption': '', 'dossier': '', 'src': '', 'license': ''}
        # text lines between this head and the next
        seg = [tt for (yy, xx, tt) in lines if y < yy < ny]
        cap, mode = [], None
        for L in seg:
            if L.startswith('Légende source'):
                mode = 'cap'; cap.append(L.split(':', 1)[1].strip()); continue
            if L.startswith('Dossier source'):
                mode = None; e['dossier'] = L.split(':', 1)[1].strip(); continue
            ms = re.match(r'Source (S\d{3})\s*•\s*(.+?)\s*•\s*(.+)$', L)
            if ms:
                mode = None; e['src'] = ms.group(1); e['license'] = ms.group(3).strip(); continue
            if L.startswith('OPHTALMOLOGIE R1'): mode = None; continue
            if mode == 'cap': cap.append(L)
        e['caption'] = ' '.join(cap).strip()
        cand = [i for i in imgs if i['y0'] >= y - 5 and i['y0'] < ny]
        if cand:
            e['xref'] = cand[0]['xref']
        entries.append(e)

# references section: "Sxxx · title" / credit line / url
allt = []
for pno, lines in full_lines:
    allt += [t for (_, _, t) in lines]
for i, t in enumerate(allt):
    m = re.match(r'^(S\d{3})\s*·\s*(.+)$', t)
    if m:
        url = ''
        for j in range(i + 1, min(i + 5, len(allt))):
            if allt[j].startswith('http'):
                url = allt[j]; k = j + 1
                while k < len(allt) and not re.match(r'^S\d{3}\s*·', allt[k]) and re.match(r'^[^\s]+$', allt[k]) and not allt[k].startswith('OPHTALMOLOGIE') and not allt[k].startswith('EyeRounds'):
                    url += allt[k]; k += 1
                break
        refs[m.group(1)] = {'title': m.group(2).strip(), 'url': url}

GLAU = re.compile(r'glaucom|gonioscop|Humphrey|ICE|iStent|implant|Sturge|xfoliation|irienne|Néovascularisation|uvéite-glaucome|Mégalopapille et|Embryotoxon|angle|Procès iriens|Rho-kinase', re.I)
os.makedirs(os.path.join(out, 'web'), exist_ok=True)
for e in entries:
    n = int(e['id'][4:])
    e['module'] = 'A' if n <= 291 else ('C' if GLAU.search(e['title']) else 'B')
    r = refs.get(e['src'], {})
    e['page_url'] = r.get('url', ''); e['src_title'] = r.get('title', e['dossier'])
    e['cc'] = 'CC BY-NC-ND' in e['license']
    if e.get('xref'):
        x = doc.extract_image(e['xref'])
        im = Image.open(io.BytesIO(x['image'])).convert('RGB')
        e['emb_w'], e['emb_h'] = im.width, im.height
        maxw = 1100
        if im.width > maxw: im = im.resize((maxw, round(im.height * maxw / im.width)), Image.LANCZOS)
        dst = os.path.join(out, 'web', e['id'] + '.jpg')
        im.save(dst, 'JPEG', quality=80, optimize=True, progressive=True)
        e['file'] = 'img/' + e['id'] + '.jpg'; e['fw'], e['fh'] = im.width, im.height; e['bytes'] = os.path.getsize(dst)
    e.pop('xref', None)
json.dump(entries, open(os.path.join(out, 'catalog2.json'), 'w'), ensure_ascii=False, indent=1)
print('entries', len(entries), 'with image', sum(1 for e in entries if e.get('file')), 'refs', len(refs), 'no url', [e['id'] for e in entries if not e['page_url']][:20], 'bytes', sum(e.get('bytes', 0) for e in entries))
from collections import Counter
print(Counter(e['module'] for e in entries), Counter(e['license'] for e in entries))
