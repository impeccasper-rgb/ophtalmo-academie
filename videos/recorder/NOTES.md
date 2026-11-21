# Recorder (reference copy)
These are the scripts that produced the videos in `videos/`. They expect the following, all kept outside the repo:
- The site built (`python3 tools/build_web.py`) and served: `cd site && python3 -m http.server 8766 --bind 127.0.0.1`.
- Nothing else for fonts: the site self-hosts its fonts. External requests stay blocked.
- In `../ttf/`: `bricolage-800.ttf`, a static instance of Bricolage Grotesque (opsz 96, wght 800, made with fontTools) used by libass for the captions.

Steps:
1. `node cards2.js` renders the v2 backgrounds and records the animated end cards (needs `loop.js`).
2. `./batch.sh cas:fr:9x16 …` records each scene, language and format.
3. `python3 finalize.py` writes the MP4s, posters, loop and GIF. Its output folder `V` is set at the top of the script.

Set `NODE_PATH=$(npm root -g)` so the scripts find Playwright.
