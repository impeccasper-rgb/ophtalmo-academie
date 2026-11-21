#!/usr/bin/env python3
"""Mirror the project into the GitHub clone (minus generated/heavy files), commit and push."""
import fcntl, fnmatch, os, shutil, subprocess, sys
_lock = open("/tmp/claude-0/-home-claude/48201f62-0d4f-5281-b310-ecd57583383e/scratchpad/sync.lock", "w"); fcntl.flock(_lock, fcntl.LOCK_EX)  # one sync at a time
SRC, DST = '/home/claude/ophtalmo', '/home/claude/ophtalmo-academie'
R = ['OPH-%03d.jpg' % i for i in list(range(12, 16)) + list(range(114, 131)) + list(range(187, 192)) + list(range(200, 210)) + [211, 212, 213, 215, 216, 227, 292, 293]]
EX = R + ['imgsrc3', '.git', 'node_modules', 'dist', 'site', 'imgsrc/raw', 'imgsrc2/raw', 'imgsrc/sheets', 'imgsrc2/sheets', 'imgsrc/thumb',
      'imgsrc2/complement.pdf', 'ios/App/App/public', 'ios/build', '*.log', '__pycache__']
def skip(rel):
    return any(rel == e or rel.startswith(e + '/') or fnmatch.fnmatch(os.path.basename(rel), e) for e in EX)
# pull remote-only changes first (e.g. images committed by the media workflow), then bring imgsrc3 back into the project
subprocess.run(['git', '-c', 'user.name=Claude', '-c', 'user.email=noreply@anthropic.com', 'pull', '--rebase', '--depth=50', 'origin', 'main'], cwd=DST, capture_output=True)
if os.path.isdir(os.path.join(DST, 'imgsrc3')):
    shutil.copytree(os.path.join(DST, 'imgsrc3'), os.path.join(SRC, 'imgsrc3'), dirs_exist_ok=True)
keep = set()
for dp, dns, fns in os.walk(SRC):
    rd = os.path.relpath(dp, SRC); rd = '' if rd == '.' else rd
    dns[:] = [d for d in dns if not skip(os.path.join(rd, d))]
    for f in fns:
        rel = os.path.join(rd, f)
        if skip(rel): continue
        keep.add(rel); s, d = os.path.join(SRC, rel), os.path.join(DST, rel)
        if not os.path.exists(d) or os.path.getmtime(d) < os.path.getmtime(s) or os.path.getsize(d) != os.path.getsize(s):
            os.makedirs(os.path.dirname(d), exist_ok=True); shutil.copy2(s, d)
for dp, dns, fns in os.walk(DST):
    rd = os.path.relpath(dp, DST); rd = '' if rd == '.' else rd
    if rd.split('/')[0] == '.git': continue
    for f in fns:
        rel = os.path.join(rd, f)
        if rel not in keep and not rel.startswith('.git/') and not rel.startswith('imgsrc3/'): os.remove(os.path.join(DST, rel))
msg = (sys.argv[1] if len(sys.argv) > 1 else 'Mise à jour') + '\n\nCo-Authored-By: Claude Opus 5.5 <noreply@anthropic.com>\nClaude-Session: https://claude.ai/code/session_018GVFi3F6V1uxxUXMe3i7GE'
run = lambda *a: subprocess.run(a, cwd=DST, capture_output=True, text=True)
run('git', 'add', '-A')
c = run('git', '-c', 'user.name=Claude', '-c', 'user.email=noreply@anthropic.com', 'commit', '-qm', msg)
print(c.stdout or c.stderr or 'committed')
p = run('git', '-c', 'push.negotiate=true', 'push', 'origin', 'main'); print(p.stdout[-300:], p.stderr[-400:])
