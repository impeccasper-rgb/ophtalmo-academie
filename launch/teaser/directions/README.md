# Ocelle teasers: 5 art directions to choose from

These are samples for choosing a direction. Nothing here has been posted. All five use the same content: « Tu vois le signe ? » → iris bombé / angle fermé → « Crise de fermeture de l'angle » → end card « Ocelle · Décembre 2026 · Abonne-toi ». No URL is shown.

**Overview:** `contact-sheet-directions.png` (2376 px wide) shows the hook frame of each direction, labelled A to E.

**Files for each direction:**
- 3 PNGs at 1080×1920: `-1-hook`, `-2-milieu`, `-3-fin`
- `-sample-5s.mp4`: H.264 `-preset veryfast`, 30 fps, 5.0 s, **no audio track**

**Safe zones:** text stays clear of the top 120 px, the bottom 220 px and the right 120 px. These were checked on every still. One exception in C: the "slam" overshoots past the margin for about 0.14 s as each block of type lands.

**Sync grid:** 120 BPM, one beat every 0.5 s.
- Hook: 0–2.0 s
- Reveal: 2.0 s
- Diagnosis: about 2.75 s
- End card: 3.5 s

## The directions (one line each: mood · strength · risk)

| | Direction | Files | Description |
|---|---|---|---|
| **A** | Lampe à fente | `a-lampe-a-fente-*` | Mood: cinematic and nocturnal. A cobalt slit beam sweeps across a drawn eye, then snaps to the optical section and the angle lights up fluo. Strength: the most "premium", very ophthalmology-specific, the reveal hits hard. Risk: slow for TikTok (the hook relies on atmosphere, not a shock) and dark on a bright feed. |
| **B** | Carnet d'externe | `b-carnet-externe-*` | Mood: warm and playful (paper, highlighter, tape, felt-pen arrows, stickers). Strength: the most "student" and approachable; it fits the owner's POV/behind-the-scenes posts well. Risk: busy at small sizes. The handwriting is simulated with Bricolage (no handwriting font), so it may feel "fake handmade". |
| **C** | Kinetic type | `c-kinetic-type-*` | Mood: punchy and graphic. Giant condensed type, hard cuts every 0.5 s, solid cobalt/fluo blocks. Strength: the best scroll-stopper, easy to sync to a trending sound, and the most consistent across 8 reels. Risk: little teaching time on screen, and it can tire if every post uses it. |
| **D** | Schéma vivant | `d-schema-vivant-*` | Mood: calm, precise, Apple-like. The line art draws itself stroke by stroke and fluo is the only accent. Strength: credible and timeless, and it shows off the site's drawn schematics. Risk: too quiet in the feed (pale hook, small type), so it depends on the sound. |
| **E** | Quiz show | `e-quiz-show-*` | Mood: game-show energy (sunburst, timer, score, answer buttons, confetti). Strength: an explicit challenge that invites comments ("B !") and matches the site's product (answer, then reveal). Risk: loud and "arcade", it can look cheap, and the 4 options need clinical review for every post. |

Possible hybrid: use C's hook (2 s of type), then A's or D's reveal, with E's end card on challenge posts.

## Sources and rights
- **Figure:** the angle-closure mechanism drawn by the app itself (`Mech.kit.ant`, step « iris bombé, angle fermé » of `g-crise`). It is an original schematic, taken from a snapshot copy in `_src/vendor/` (src/ was not modified).
- **Marker loops:** `Motion.loop` (snapshot of `src/motion.js`).
- **Brand:** mark and wordmark from `brand/`.
- **Other graphics:** the drawn eye (A), paper texture (SVG noise), tape, confetti and sunburst were drawn for these samples.
- **Fonts:** Bricolage Grotesque and Atkinson Hyperlegible (SIL OFL, `fonts/`).
- **No photos**, no EyeRounds images, no URL.

## Regenerating
From `_src/`, run `python3 render.py [A B C D E]`. It serves the repo on 127.0.0.1:8791, uses `harness.html?d=X` (the paused Web Animations timeline is sought frame by frame), and pipes JPEG screenshots to ffmpeg. The script also writes the stills. The contact sheet is built with PIL from the `*-1-hook.png` files.
