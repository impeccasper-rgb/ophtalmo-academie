#!/usr/bin/env python3
import json, os, subprocess, sys
D = os.path.dirname(os.path.abspath(__file__)); V = '/home/claude/ophtalmo-academie/videos'
os.makedirs(V, exist_ok=True); os.makedirs(os.path.join(D, 'out'), exist_ok=True)
NAMES = {'cas': 'ocelle-cas-vedette', 'ascan': 'ocelle-examens-ascan', 'daily': 'ocelle-image-du-jour', 'social': 'ocelle-social-cas-dendrite'}
POSTER = {'cas': ('reveal', 2.2), 'social': ('reveal', 1.8), 'ascan': ('ok1', 1.6), 'daily': ('voir', 1.3)}
only = sys.argv[1:]
rows = []
def probe(p):
    o = json.loads(subprocess.run(['ffprobe', '-v', 'error', '-show_entries', 'format=duration,size', '-of', 'json', p], capture_output=True, text=True).stdout)['format']
    return float(o['duration']), int(o['size'])
for sc in NAMES:
    for lang in ('fr', 'en'):
        for fmt in ('9x16', '16x9'):
            rec = '%s-%s-%s' % (sc, lang, fmt)
            if only and rec not in only: continue
            mp = os.path.join(D, 'rec', rec, 'meta.json')
            if not os.path.exists(mp): print('missing', rec); continue
            meta = json.load(open(mp)); out = os.path.join(V, '%s-%s-%s.mp4' % (NAMES[sc], lang, fmt))
            if sc == 'social' and meta.get('rasters'):  # rights: ocelle-social-* may show ONLY our own SVG schematics
                raise SystemExit('REFUSED %s: raster images seen during recording: %s' % (rec, meta['rasters']))
            print(rec, 'raster sources:', ', '.join(meta.get('rasters') or []) or 'none (SVG only)')
            subprocess.run(['python3', os.path.join(D, 'compose.py'), rec, out], check=True)
            mk, dt = POSTER[sc]; t = next((c['t'] for c in meta['cues'] if c.get('mark') == mk), 5) + dt
            sz = '540:960' if fmt == '9x16' else '960:540'
            subprocess.run(['ffmpeg', '-v', 'error', '-y', '-ss', '%.2f' % t, '-i', out, '-frames:v', '1', '-vf', 'scale=%s:flags=lanczos' % sz, out[:-4] + '-poster.png'], check=True)
            d, s = probe(out); rows.append((os.path.basename(out), d, s))
            if sc == 'social' and fmt == '9x16':
                tmp = os.path.join(D, 'out', rec + '-noend.mp4')
                subprocess.run(['python3', os.path.join(D, 'compose.py'), rec, tmp, '--noend'], check=True)
                a = next(c['t'] for c in meta['cues'] if c.get('mark') == 'answer') - 0.4
                loop = os.path.join(V, 'ocelle-social-reveal-loop-%s-9x16.mp4' % lang)
                subprocess.run(['ffmpeg', '-v', 'error', '-y', '-ss', '%.2f' % a, '-t', '6', '-i', tmp, '-vf', 'fade=t=in:st=0:d=0.25,fade=t=out:st=5.7:d=0.3', '-c:v', 'libx264', '-preset', 'veryfast', '-crf', '22', '-pix_fmt', 'yuv420p', '-movflags', '+faststart', '-an', loop], check=True)
                gif = loop[:-4] + '.gif'
                subprocess.run(['ffmpeg', '-v', 'error', '-y', '-i', loop, '-vf', 'fps=12,scale=432:-1:flags=lanczos,split[a][b];[a]palettegen=max_colors=96:stats_mode=diff[p];[b][p]paletteuse=dither=bayer:bayer_scale=4', gif], check=True)
                for f in (loop, gif): d, s = probe(f) if f.endswith('mp4') else (6.0, os.path.getsize(f)); rows.append((os.path.basename(f), d, s))
for r in rows: print('%-48s %5.1fs %6.2f MB' % (r[0], r[1], r[2] / 1e6))
