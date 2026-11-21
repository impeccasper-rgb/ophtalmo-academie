#!/usr/bin/env python3
"""Commit everything in this repo (the single working tree) and push to GitHub. One push at a time (lock)."""
import fcntl, subprocess, sys
D = '/home/claude/ophtalmo-academie'
lock = open('/tmp/claude-0/-home-claude/48201f62-0d4f-5281-b310-ecd57583383e/scratchpad/sync.lock', 'w'); fcntl.flock(lock, fcntl.LOCK_EX)
run = lambda *a: subprocess.run(a, cwd=D, capture_output=True, text=True)
g = ['git', '-c', 'user.name=Claude', '-c', 'user.email=noreply@anthropic.com']
run('git', 'add', '-A')
msg = (sys.argv[1] if len(sys.argv) > 1 else 'Mise à jour') + '\n\nCo-Authored-By: Claude Opus 5.5 <noreply@anthropic.com>\nClaude-Session: https://claude.ai/code/session_018GVFi3F6V1uxxUXMe3i7GE'
c = run(*g, 'commit', '-qm', msg); print(c.stdout or c.stderr or 'committed')
p = run(*g, 'pull', '--rebase', '--depth=50', 'origin', 'main'); print(p.stderr[-300:])
p = run(*g, '-c', 'push.negotiate=true', 'push', 'origin', 'main'); print(p.stdout[-200:], p.stderr[-300:])
