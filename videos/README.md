# Ocelle — preview videos (identity v2 « Fluorescéine »)

Re-recorded on **2026-11-22** on the current interface (four-screen fiches Voir / Comprendre / Décider / S’entraîner, cas vedette without the “ready” step, privacy link in the footer).

These are recordings of the **real interface**: the built `site/` served locally, driven step by step by Playwright, captured frame by frame through the Chrome DevTools screencast. Fonts are the site's own self-hosted files. External requests were blocked. Scripts: `videos/recorder/` (see NOTES.md there).

The app's own motion system is visible: the marker loop drawn around the decisive sign, sticker labels, the «&nbsp;Bien vu !&nbsp;» sticker, the drawn mechanism advancing step by step, the decision tree, the cobalt route wipe, the streak count-up.

The only things added on top of the recording are:
- the cobalt band with the logo
- captions burned in with ffmpeg/libass, in Bricolage Grotesque ExtraBold, with the second line in fluorescein
- a white ring showing where the "finger" taps
- an animated end card (the marker draws the ocellus and circles "signe", then the call-to-action sticker pops)

Encoding: H.264 (libx264, `-preset veryfast -crf 22`), yuv420p, 30 fps, `+faststart`, no audio.
- 9:16 = 1080×1920: phone layout (432×640 CSS at 2.5×, larger text than before) under a 320 px band.
- 16:9 = 1920×1080: desktop layout (1280×720 CSS at 1.2×) framed on cobalt.

## Where each file may be used (image rights)
EyeRounds photos are **CC BY-NC-ND**. A video showing one may only be used **on our own site and in the App Store preview**, with the image unaltered (it appears exactly as the app shows it, with its credit line). These videos must **not** go on Instagram, TikTok, YouTube Shorts or any other social network.

Every take logs the raster images visible on screen (about 8 checks per second, `rasters` in `recorder/rec/<take>/meta.json`); `finalize.py` refuses to write an `ocelle-social-*` file if any raster image was seen.

| File family | What it shows | Images on screen (checked on every frame) | OK on site / App Store | OK on social networks |
|---|---|---|---|---|
| `ocelle-cas-vedette-*` | `#cas-vedette`: Observe → Réponds → Révèle on the featured CRAO fundus | OPH-250 (EyeRounds, CC BY-NC-ND) | yes | **NO** |
| `ocelle-image-du-jour-*` | Image of the day + streak, then the fiche **Voir** screen « touche le signe » | OPH-057…061, 064 (+ 343, 369 in 16:9 carousel), home covers OPH-001/131/192 in 16:9 (EyeRounds); IMG3-035 hero in 16:9 (CC BY-SA) | yes | **NO** |
| `ocelle-examens-ascan-*` | A-scan simulator | none — our own schematic | yes | yes |
| `ocelle-social-cas-dendrite-*` | HSV dendrite **schematic** reveal, **Comprendre** drawn mechanism stepped, **Décider** decision tree | none — our own SVG schematics only | yes | **yes** |
| `ocelle-social-reveal-loop-*` (.mp4, .gif) | 6-second loop: tap « Révéler les anomalies », the marker circles the schematic dendrite | none — our own SVG schematic | yes | **yes** |

Posters (`*-poster.png`, half resolution) are frames taken from each video and carry the same rights as their video.

Change from the previous set: the social files no longer use the CC BY-SA Wikimedia photo (IMG3-035); they are now 100 % original schematics, so no attribution or share-alike notice is needed.

## Scenes
1. **Cas vedette / Featured case** (`#cas-vedette`). Holds about 3 s on the fundus photo (Observe), scrolls to the four choices, taps the right one (Réponds); the marker loop and numbered rings light up the cherry-red spot with its legend and the sticker pops (Révèle). Then the « Pourquoi pas » line under each wrong choice and the decisive-sign verdict. End card → `?lang=fr#cas-vedette` (or `?lang=en`).
   Captions: « Tu vois le signe ? » → « Observe. Réponds. Révèle. » → « Le signe décisif s’allume : la tache rouge cerise » → « Puis pourquoi chaque autre choix est faux ».
2. **Examens: simulateur A-scan** (`#inv-ascan`). Drag caliper 1 onto the corneal spike and caliper 2 onto the retinal spike, « Vérifier ma mesure »: 23.5 mm, correct (sticker). Switch to « Œil long », move caliper 2 to 26.5 mm: correct, axial myopia. End card → `#inv-ascan`.
3. **Image du jour + Voir** (home card → `#image-du-jour` → `#c-herpes/voir`). Tap the day's card, flip, rate (« Je savais »): the streak reaches **7 days in a row**. Then the fiche Voir screen on the same dendrite: the finger taps the right spot, the marker loop draws around the dendrite (« Bien localisé »), the learner names the sign (« Ulcère dendritique ») and the «&nbsp;Bien vu !&nbsp;» sticker pops. End card → `#image-du-jour`.
   *Demo data:* a 6-day streak is pre-loaded in localStorage, and the image of the day is pinned to the HSV dendrite card (OPH-059) for the recording (normally picked by date).
4. **Social: dendrite in schematics** (`#c-herpes/comprendre` → `#c-herpes/decider`). Normal vs pathological schematic (« Tu vois le signe ? », 2.6 s freeze), tap « Révéler les anomalies »: the marker circles the dendrite and labels its terminal bulbs. The drawn mechanism « Du ganglion à la cornée » is stepped 1/5 → 5/5. Then the decision tree in step-by-step mode with its vignette: V1 rash? **No** → dendrite with terminal bulbs? **Yes** → next card. End card « Comprends, puis décide » → `#c-herpes/comprendre`.

## Files and durations
| File | Duration | Size |
|---|---|---|
| `ocelle-cas-vedette-en-16x9.mp4` | 19.6 s | 0.7 MB |
| `ocelle-cas-vedette-en-9x16.mp4` | 19.5 s | 1.6 MB |
| `ocelle-cas-vedette-fr-16x9.mp4` | 19.6 s | 0.8 MB |
| `ocelle-cas-vedette-fr-9x16.mp4` | 19.8 s | 1.6 MB |
| `ocelle-examens-ascan-en-16x9.mp4` | 21.0 s | 0.7 MB |
| `ocelle-examens-ascan-en-9x16.mp4` | 25.2 s | 1.3 MB |
| `ocelle-examens-ascan-fr-16x9.mp4` | 21.6 s | 0.7 MB |
| `ocelle-examens-ascan-fr-9x16.mp4` | 25.5 s | 1.5 MB |
| `ocelle-image-du-jour-en-16x9.mp4` | 27.7 s | 1.2 MB |
| `ocelle-image-du-jour-en-9x16.mp4` | 28.0 s | 1.7 MB |
| `ocelle-image-du-jour-fr-16x9.mp4` | 28.2 s | 1.2 MB |
| `ocelle-image-du-jour-fr-9x16.mp4` | 27.9 s | 1.8 MB |
| `ocelle-social-cas-dendrite-en-16x9.mp4` | 27.0 s | 0.9 MB |
| `ocelle-social-cas-dendrite-en-9x16.mp4` | 27.6 s | 1.4 MB |
| `ocelle-social-cas-dendrite-fr-16x9.mp4` | 26.7 s | 1.0 MB |
| `ocelle-social-cas-dendrite-fr-9x16.mp4` | 27.0 s | 1.4 MB |
| `ocelle-social-reveal-loop-en-9x16.mp4` | 6.0 s | 0.4 MB |
| `ocelle-social-reveal-loop-fr-9x16.mp4` | 6.0 s | 0.4 MB |
| `ocelle-social-reveal-loop-en-9x16.gif` | 6.0 s | 0.6 MB |
| `ocelle-social-reveal-loop-fr-9x16.gif` | 6.0 s | 0.7 MB |

18 MP4s, each with a matching `*-poster.png`, plus 2 GIFs. Every file is under 2 MB (folder about 27 MB without `recorder/rec/`).

## Notes
- The App Store accepts 1080×1920 previews for some iPhone display classes. For 6.9" / 6.5" slots, use the simulator recordings from the iOS workflow, or re-run with that size (`FORMATS` in `recorder/lib.js`).
- To regenerate: see `recorder/NOTES.md` (`node cards2.js`, `./batch.sh`, `python3 finalize.py`).
