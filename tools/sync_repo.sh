#!/usr/bin/env bash
# Copy the project into the GitHub clone (excluding generated/heavy files) and commit.
set -e
SRC=/home/claude/ophtalmo; DST=/home/claude/ophtalmo-academie
rsync -a --delete \
  --exclude .git --exclude node_modules --exclude dist --exclude site \
  --exclude 'imgsrc/raw' --exclude 'imgsrc2/raw' --exclude 'imgsrc/sheets' --exclude 'imgsrc2/sheets' \
  --exclude 'imgsrc/thumb' --exclude 'imgsrc2/complement.pdf' --exclude 'ios/App/App/public' \
  --exclude 'ios/build' --exclude '*.log' "$SRC/" "$DST/"
cd "$DST"
git add -A
git -c user.name="Claude" -c user.email="noreply@anthropic.com" commit -qm "$1

Co-Authored-By: Claude Opus 5.5 <noreply@anthropic.com>
Claude-Session: https://claude.ai/code/session_018GVFi3F6V1uxxUXMe3i7GE" || echo "nothing to commit"
git -c push.negotiate=true push origin main 2>&1 | tail -2
