# Recorder (reference copy)
These are the scripts that produced the videos in `videos/`. They expect the following, all kept outside the repo:
- The site built (`python3 tools/build_web.py`) and served: `cd site && python3 -m http.server 8766 --bind 127.0.0.1`.
- Next to `lib.js`: the brand woff2 files from @fontsource (lexend, atkinson-hyperlegible-next, atkinson-hyperlegible-mono), served to the page in place of Google Fonts.
- In `../ttf/`: static TTF builds of Lexend and Atkinson (@fontsource WOFF converted with fontTools), used by libass for the captions.

Steps:
1. `node cards.js` renders the backgrounds and end cards.
2. `./batch.sh cas:fr:9x16 …` records each scene, language and format.
3. `python3 finalize.py` writes the MP4s, posters, loop and GIF. Its output folder `V` is set at the top of the script.

Set `NODE_PATH=$(npm root -g)` so the scripts find Playwright.
