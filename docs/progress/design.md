# Progress — design/motion (2026-11-21)

## Done
- Name chosen: **Ocelle** (shortlist: Ocelle / Mydria / Placido; quick App Store and trademark checks, sources in brand/BRAND.md §1). Tagline FR « Apprends à voir le signe qui compte. » / EN "Learn to see the sign that matters."
- brand/BRAND.md: name, voice, palette with contrast values (light and dark), typography (Lexend + Atkinson Hyperlegible Next/Mono), logo rules, iconography, motion principles, app icon concept.
- brand/: logo.svg, logo-dark.svg, mark.svg, icon.svg; PNGs icon-1024 (opaque RGB), icon-512, icon-192, apple-touch-icon-180, favicon-32 (rendered with Playwright).
- src/styles.css: tokens re-valued with the same names, plus new tokens `--on-cobalt`, `--sign`, `--sign-halo`, `--shadow-lift`, `--ease-*`, `--dur-*`. Display font is now Lexend. Brand layer added: ocellus icon for the active rail entry, tab pill with the sign dot, ringed section numbers, translucent chrome, hover lift, hero restyled with a fluorescein call to action. Reveal rings use `--sign` with a dark halo.
- Motion utilities: `.reveal-hotspot` (+ `.minor`, `.reveal-label`), `.reveal-pulse`, `.ok-pop`, `.no-shake`, `.progress-pop`, `.page-enter`, automatic feedback on the existing state classes, page rise-in, progress bar growth, hero beam/sign sequence. All gated by `prefers-reduced-motion: no-preference`; `.no-motion` cancels them (checked: animation-name = none in both cases).
- QA: build + screenshots at 1280/390, light/dark, #accueil and #c-bacterienne. No horizontal scroll and no JS errors (with i18n injected). Fixed: brand name drawn in grey, and section headers wrapping on phones (badge now a pill so it also fits "QCM").
- brand/preview-*.png (4): the app with the HANDOFF changes simulated.

## Remaining (other roles, see brand/HANDOFF.md)
- web: (i18n.js missing from build.py during QA; fixed by the end of the pass) name and copy keys; Shell.logo(); eyeSvg(); Lexend font link; icons, manifest, theme-color.
- iOS: AppIcon from icon-1024.png; splash #0A2547.
- exercices: use `.reveal-hotspot` / `.reveal-pulse` in the Observe → Réponds → Révèle engine.
- Legal: proper CIPO/USPTO search for "Ocelle" (classes 9 and 41) plus the domain, before launch.

## Blockers / notes
- Web searches are logged in brand/BRAND.md, not in market/SOURCES.md, because that file belongs to the market role. Market may copy them.
- videos/: done in cycle 3 (see below).

## Cycle 3: preview videos (2026-11-21)
- Done: 16 MP4s recorded from the real interface (site/ served locally, Playwright with CDP screencast at 2×, brand fonts served locally, external requests blocked), with FR/EN captions burned in through libass and end cards carrying the logo, tagline and link.
  - Scenes: featured case (CRAO), A-scan simulator, image of the day + streak, and a social variant on the OCT schematic p-oct-9.
  - Formats: 9:16 1080×1920 and 16:9 1920×1080.
  - Plus a 6-second reveal loop (MP4 + GIF, FR/EN) and half-resolution poster PNGs.
  - Every file is between 0.4 and 1.8 MB (folder about 24 MB). Durations run 19–25 s.
- Rights: `ocelle-cas-vedette-*` and `ocelle-image-du-jour-*` show EyeRounds photos, so site and App Store only. `ocelle-examens-ascan-*`, `ocelle-social-*` and the loop are original schematics, OK on social networks. The table is in videos/README.md.
- Demo data: a 6-day streak is pre-loaded, and the image of the day is pinned to OPH-059 for the recording (stated in the README).
- Remaining: App Store 6.9"/6.5" preview sizes (use the iOS simulator videos or re-run the recorder at those sizes). No audio track.

## Cycle 7: identity v2 « Fluorescéine » (user's choice: art direction C)
- Done: brand/BRAND.md v2 (art direction, palette with AA contrast light and dark, type system, iconography, motion), new mark (ocellus as a marker loop + fluo dot), wordmark in Bricolage Grotesque 800 outlined, icon 1024 + PNG set, og.png.
- Fonts: Bricolage Grotesque (display, variable opsz/wght/wdth) + Atkinson Hyperlegible Next (body) + Atkinson Mono (data), self-hosted from @fontsource. Lexend removed. build_web/build.py updated.
- styles.css: v2 tokens; cobalt chrome; calm study surfaces; fluo primary CTA with ink edge; cobalt hero with a tilted open-licence photo card (IMG3-035, CC BY-SA, credited, "annotation superposée").
- src/motion.js (new): marker loops on decisive hotspots (seeded hand-drawn paths, stroke-dashoffset), stickers, "Bien vu !" on correct answers, scribble + shake on wrong ones, cobalt wipe on route change, count-up + burst on rewards, hero sequence. Everything is static under reduced motion / .no-motion.
- Hook: `dec` class on decisive hotspots (investigations.js, one line). Investigations hotspot CSS restyled.
- Checks: test_site.py --quick: 84 checks, 1 failing = offline-images-not-cached (known D13, by design). axe: 28 checks, 0 failing. Screenshots at 390/1280, light/dark: home, fiche, inv-oct reveal, cas-vedette, cartes, progression. No horizontal scroll, no JS errors.
- TODO (iOS): splash colour #1F2CFF in capacitor.config.json; regenerate AppIcon.
- Videos v2 (done): 16 MP4s re-recorded with the new identity (cas-vedette, A-scan, image of the day, social), FR/EN, 9:16 + 16:9, 19–24 s, each ≤ 1.9 MB. Captions in Bricolage ExtraBold with the second line in fluo; animated end cards (marker draws the ocellus + circles "signe", CTA sticker pops); 6-s loop MP4 + GIF.
  - The social variant now uses image case oc-10, the CC BY-SA fluorescein dendrite. It may go on social networks with attribution and a CC BY-SA 4.0 notice; the old OCT schematic files were removed. Rights table in videos/README.md.
- Brand previews: brand/preview-home-desktop-dark.png, preview-home-phone-light.png, preview-reveal-phone-light.png, preview-practice-desktop-dark.png.
