#!/usr/bin/env python3
"""compose.py <recname> <out.mp4> [--end 3.5] [--noend] : background band + page frames + ASS captions + end card -> H.264"""
import json, os, subprocess, sys
D = os.path.dirname(os.path.abspath(__file__))
FONTS = os.path.join(os.path.dirname(D), 'ttf')
name, out = sys.argv[1], sys.argv[2]
noend = '--noend' in sys.argv
END = 3.5
rec = os.path.join(D, 'rec', name); meta = json.load(open(os.path.join(rec, 'meta.json')))
fmt, lang, dur = meta['fmt'], meta['lang'], meta['duration']
if fmt == '9x16': W, H, pw, ph, px, py = 1080, 1920, 1080, 1600, 0, 320
else: W, H, pw, ph, px, py = 1920, 1080, 1536, 864, 192, 36
def ts(t): t = max(0, t); h = int(t // 3600); m = int(t % 3600 // 60); s = t % 60; return '%d:%02d:%05.2f' % (h, m, s)
cues = [c for c in meta['cues'] if 'text' in c]
if fmt == '9x16': style = 'Style: Cap,Lexend,68,&H00FFFFFF,&H00FFFFFF,&H00301A0B,&H00000000,-1,0,0,0,100,100,-0.5,0,1,0,0,8,64,64,150,1'
else: style = 'Style: Cap,Lexend,50,&H00FFFFFF,&H00FFFFFF,&H00301A0B,&H00000000,-1,0,0,0,100,100,-0.5,0,1,0,0,2,420,140,52,1'
ass = ['[Script Info]', 'ScriptType: v4.00+', 'PlayResX: %d' % W, 'PlayResY: %d' % H, 'WrapStyle: 0', 'ScaledBorderAndShadow: yes', '',
       '[V4+ Styles]', 'Format: Name, Fontname, Fontsize, PrimaryColour, SecondaryColour, OutlineColour, BackColour, Bold, Italic, Underline, StrikeOut, ScaleX, ScaleY, Spacing, Angle, BorderStyle, Outline, Shadow, Alignment, MarginL, MarginR, MarginV, Encoding', style, '',
       '[Events]', 'Format: Layer, Start, End, Style, Name, MarginL, MarginR, MarginV, Effect, Text']
for i, c in enumerate(cues):
    end = cues[i + 1]['t'] if i + 1 < len(cues) else dur
    ass.append('Dialogue: 0,%s,%s,Cap,,0,0,0,,{\\fad(180,180)}%s' % (ts(c['t'] + 0.05), ts(end), c['text']))
assf = os.path.join(rec, 'caps.ass'); open(assf, 'w', encoding='utf-8').write('\n'.join(ass) + '\n')
bg = os.path.join(D, 'bg-%s.png' % fmt); variant = {'ascan': 'ascan', 'daily': 'daily'}.get(name.split('-')[0], 'cas'); endp = os.path.join(D, 'end-%s-%s-%s.png' % (variant, lang, fmt))
fc = ('[1:v]fps=30,scale=%d:%d:flags=lanczos,setsar=1[pg];[0:v][pg]overlay=%d:%d:shortest=1,ass=%s:fontsdir=%s,settb=AVTB,fps=30,format=yuv420p[m]' % (pw, ph, px, py, assf, FONTS))
args = ['ffmpeg', '-y', '-v', 'error', '-loop', '1', '-framerate', '30', '-t', '%.3f' % dur, '-i', bg, '-f', 'concat', '-safe', '0', '-i', os.path.join(rec, 'list.txt')]
if not noend:
    args += ['-loop', '1', '-framerate', '30', '-t', str(END), '-i', endp]
    fc += ';[2:v]settb=AVTB,fps=30,format=yuv420p[e];[m][e]xfade=transition=fade:duration=0.5:offset=%.3f[v]' % (dur - 0.5)
else:
    fc += ';[m]null[v]'
args += ['-filter_complex', fc, '-map', '[v]', '-c:v', 'libx264', '-preset', 'veryfast', '-crf', '22', '-pix_fmt', 'yuv420p', '-r', '30', '-movflags', '+faststart', out]
subprocess.run(args, check=True)
p = subprocess.run(['ffprobe', '-v', 'error', '-show_entries', 'format=duration,size', '-of', 'json', out], capture_output=True, text=True)
f = json.loads(p.stdout)['format']; print('%s %.1fs %.2f MB' % (os.path.basename(out), float(f['duration']), int(f['size']) / 1e6))
