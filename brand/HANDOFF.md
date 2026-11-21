# Design hand-off: v2 « Fluorescéine » (applied)

Everything below is already in the repo, unless it is marked **TODO (owner)**.

## Applied by design/motion
- `src/styles.css`: v2 tokens (same names, plus new `--chrome*`, `--on-fluo`, `--edge`, `--ease-marker`), a cobalt chrome (top bar, rail, drawer, tab bar), calm study surfaces, fluo primary buttons, the hero, stickers and the motion section.
- `src/motion.js` (new; it loads after `investigations` and before `views` in both builds) exposes `Motion.loop(cx, cy, rx, ry, seed, opts)` for the marker path, `Motion.scan()` and `Motion.reduced()`.
  - It watches the DOM, so modules need no calls. It acts on:
    - `.inv-media.revealed .inv-hots`: marker loop around the decisive hotspot
    - `.hero-img[data-loop]`
    - `.feedback.ok`: sticker
    - `.opt.wrong`: scribble
    - `.daily-end` and `.run-end`: count-up and burst
    - route changes: cobalt wipe
- `src/investigations.js` gets one hook: hotspots with `decisive: true` now get the class `dec`, which the marker targets. `src/investigations.css` restyles hotspot labels and badges as fluo stickers.
- `src/views.js`: `eyeSvg()` now returns the hero art (drawn ocellus, tilted card of IMG3-035 CC BY-SA with credit, «&nbsp;dendrite !&nbsp;» sticker). `src/core.js`: `Shell.logo()` uses the new mark. `src/i18n.js` gets new keys `hero.photoAlt`, `hero.sticker` and `hero.annot`, and the fonts credit now names Bricolage Grotesque.
- Fonts: Lexend is removed and Bricolage Grotesque is added (`fonts/bricolage-grotesque-*.woff2` plus OFL). `tools/build_web.py` was updated (font list, `SRC_ORDER`, static top-bar logo, theme colour `#1F2CFF`), and so was `tools/build.py` (src order, font link).
- Brand files: `mark.svg`, `icon.svg`, `mark-loop.svg`, `wordmark.svg`, `logo.svg`, `logo-dark.svg`, `og.png` (used by build_web as the OG image), and the PNG icon set.

## TODO (iOS)
- `capacitor.config.json`: set the splash `backgroundColor` to `#1F2CFF` (it is still `#0A2547`). The status bar is light content on the cobalt chrome.
- Regenerate the AppIcon from `brand/icon-1024.png`.

## Notes for other modules
- To annotate a new kind of media: put hotspots in an `.inv-hots` container inside an element with class `revealed`, and give the decisive one the class `dec`. The loop draws itself.
- Never apply CSS filters, recolouring or rotation to EyeRounds `<img>` (CC BY-NC-ND). Use overlays only.
