# iOS role: progress (2026-11-21)

## Done
- Capacitor **8.6.2** (current stable major; 9.0 is still an RC) with **Swift Package Manager** (no CocoaPods). Plugins: splash-screen 8.0.2, haptics 8.0.2. `package.json` + `package-lock.json` (exact versions; `npm ci` checked).
- `capacitor.config.json`: appName **Ocelle** (brand/BRAND.md), appId **`ca.academie.ophtalmo` = placeholder**, `webDir: site`, no `server.url` (offline), splash `#0A2547`.
- `ios/` generated with `npx cap add ios --packagemanager SPM` (on Linux). Then:
  - Info.plist: dev region fr, CFBundleLocalizations fr+en, ITSAppUsesNonExemptEncryption=false, arm64, orientations (iPhone portrait + landscape; iPad all 4), launch screen, education category.
  - `fr.lproj` / `en.lproj` InfoPlist.strings (display name), added as a variant group in the pbxproj; knownRegions fr,en,Base.
  - PrivacyInfo.xcprivacy (no tracking, no data, no required-reason API; grep of Capacitor + plugins: none used).
  - AppViewController.swift (swipe back/forward; Debug-only `selftestLog` → NSLog), SceneDelegate uses it.
  - Shared scheme `App.xcscheme` (xcodebuild -scheme App, archive).
  - AppIcon 1024 from brand/icon-1024.png; splash solid #0A2547 + mark (make_assets.py, re-run in CI); LaunchScreen background #0A2547.
- iOS web overlay (`ios/web-overlay/`, injected into the bundle copy by `ios/scripts/overlay.mjs`, never into site/): native-ios.js (`.native` class, haptics) and selftest.js (self-test variant only).
- `.github/workflows/ios.yml`: simulator build plus self-test on iPhone and iPad (screenshots, video, logs, summary); TestFlight job written but disabled (variable `IOS_RELEASE_ENABLED` + secrets), manual trigger.
- Scripts: check_ios.py (static checks), run_selftest.py (simulator runner), set_brand.py, make_assets.py.
- docs/IOS.md (architecture, CI, artifacts, TestFlight, listing, review risks).

## Verified on Linux
- `npm install` / `npm ci`, `npx cap sync ios` (Package.swift lists both plugins), plistlib parse of every plist, pbxproj parsed with the `pbxproj` library (all IDs resolve, files present), xmllint on storyboards and scheme, workflow YAML parsed (PyYAML), `check_ios.py` OK (normal and `--release`).
- Self-test in headless Chrome on the real `site/` build: boot, home-fr, lang-en (via the UI button), fiche and flashcards **PASS**; investigations and practice **FAIL** because `src/investigations.js` / the `#investigations` route don't exist yet (expected).
- run_selftest.py checked against a simulated `xcrun` (device choice, dedupe of the two logs, screenshots, PASS/FAIL verdict, summary).
- Not checked here (needs macOS): xcodebuild, the simulator, video, haptics. The first push will tell. actionlint could not be run (binary download not allowed).

## Remaining / blockers
- **Exercises role:** the `#investigations` route and the practice engine. Until they exist, the iOS job will be red at the `investigations` and `practice` steps. If their markup differs, adjust the selectors in selftest.js (step `practice`: `[data-inv-opt]`, `[data-opt]`, `.opts button`, `button.opt`).
- **Web role:** fonts are remote (Google Fonts). Offline they fall back to system fonts; self-host them to be fully offline. Hide web-only UI under `html.native`.
- **User:** Apple Developer account (legal name), final bundle ID (`set_brand.py --app-id`), API key, GitHub secrets, privacy policy URL, physician review of the content (guideline 1.4.1).
