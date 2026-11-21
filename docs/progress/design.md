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
- videos/: nothing produced in this pass.
