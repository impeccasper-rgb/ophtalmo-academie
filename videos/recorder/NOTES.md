# Recorder (the scripts that produce `videos/`)
Playwright (pre-installed, never run `playwright install`) drives the built site and captures it with the Chrome DevTools screencast; ffmpeg composes and encodes.

Prerequisites, all outside git (see `.gitignore`):
- The site built and served: `python3 tools/build_web.py`, then `cd site && python3 -m http.server 8766 --bind 127.0.0.1`.
- `videos/ttf/bricolage-800.ttf`: static instance of Bricolage Grotesque (opsz 96, wght 800, family name « Bricolage Grotesque ExtraBold ») for libass captions. Made from `fonts/bricolage-grotesque-latin-wght-normal.woff2` with fontTools `instancer` (needs the `brotli` Python module).
- `NODE_PATH=$(npm root -g)` so the scripts find Playwright (`batch.sh` sets it).

Steps:
1. `node cards2.js`: cobalt band backgrounds (`bg2-*.png`) and the animated end cards (needs `loop.js`).
2. `./batch.sh` (all 16 takes) or `./batch.sh social:fr:9x16 …`: records each scene (`scenes.js`: `cas`, `ascan`, `daily`, `social`), language and format into `rec/`.
3. `python3 finalize.py [take …]`: MP4s (H.264 `-preset veryfast -crf 22`, captions burned in with libass), posters, the 6-s reveal loop MP4 + GIF, into `videos/`.

Formats (`FORMATS` in `lib.js`): 9:16 = phone layout 432×640 CSS at 2.5× (1080×1600) under a 320 px band; 16:9 = desktop 1280×720 CSS at 1.2× framed on cobalt.

Rights guard: during every take `lib.js` lists every raster image (`<img>`, CSS `background-image`) visible in the viewport, about 8 times a second, into `rec/<take>/meta.json` (`rasters`). `finalize.py` refuses to write any `ocelle-social-*` file if that list is not empty (social files = our own SVG schematics only).
