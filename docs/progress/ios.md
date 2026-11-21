# iOS role: progress (2026-11-21, cycle 2)

## Done
- Capacitor **8.6.2** (current stable major; 9.0 is still an RC) with **Swift Package Manager** (no CocoaPods). Plugins: splash-screen 8.0.2, haptics 8.0.2. `package.json` + `package-lock.json` (exact versions; `npm ci` checked).
- `capacitor.config.json`: appName **Ocelle**, appId **`ca.academie.ophtalmo` = placeholder**, `webDir: site`, no `server.url` (offline), splash `#0A2547`.
- `ios/` project: Info.plist (fr dev region, fr+en localizations, export compliance, orientations), fr/en InfoPlist.strings, PrivacyInfo.xcprivacy, AppViewController.swift (swipe back, Debug log channel), shared scheme, icon + splash (make_assets.py).
- iOS web overlay: native-ios.js (`.native` class, haptics); selftest.js (self-test variant only).
- `.github/workflows/ios.yml`: simulator build, self-test on iPhone (+ video pass) and iPad, artifact plus branch `ios-evidence`; TestFlight job written, disabled until the secrets exist.
- docs/IOS.md.

## Cycle 2 (CI feedback)
- Run 44928422573 (commit 37b186b, image macos-26-arm64, Xcode 26.6): **the app compiled (about 1 min) and launched** on an iPhone 17 Pro Max with iOS 26.5 (capacitor=true, native overlay OK). The walk started. Then `run_selftest.py` crashed: `simctl io screenshot` timed out after 60 s while `recordVideo` was running. The iPad run then crashed on `simctl status_bar` (over 120 s; the iPhone simulator and its video recorder were still running).
- Fixes:
  - **Runner:** every simctl call has a timeout and never raises; screenshots run in a worker thread with a retry, and are turned off after 3 failures; the video is recorded in a separate pass 2 (iPhone only) that never changes the verdict; cleanup is in `finally`; timeouts are longer (boot 15 min, walk 10 min); the iPad step first runs `simctl shutdown all`.
  - **Screenshot acks:** the runner writes `public/__acks/<name>.txt` into the installed app after each screenshot, and selftest.js polls it (Capacitor serves bundle files from disk). It falls back to fixed pauses.
  - **selftest.js:** waits ×3; screenshot waits don't count against a step; a new `inv-pages` step (the 6 exams, screenshot of each tool); `practice` fitted to src/investigations.js (`[data-invpractice]`, `[data-ip="ready"]`, `.opt[data-k]`, `.feedback`, `.reveal-hotspot`).
  - **Evidence:** CI artifacts can't be downloaded from this sandbox (blob storage is blocked by the proxy), so the workflow force-pushes JPEG copies, logs and the video to the branch `ios-evidence`, which can be read with plain git (and browsed on github.com).
- Verified on Linux: **9/9 steps pass** in headless Chrome on a fresh build (with and without acks); runner checked with a simulated xcrun (a hung screenshot is retried, the run continues, acks work, video pass works).

- **Run 44933504936 (commit 1b0a347): GREEN.** iPhone 17 Pro Max and iPad Pro 13" on iOS 26.5, 9/9 steps each, video recorded,
  evidence branch pushed. Evidence copied to `ios-evidence/` (git-ignored: line added to the root .gitignore so that sync_repo.py doesn't push it to main).
- Evidence polish after that run: os.Logger instead of NSLog (merged console lines and `name<date>.png` duplicates); waits
  for paint before each screenshot (one blank `05-fiche-mid` on iPhone); a late screenshot from a killed attempt counts.

- Run 44936086879 (commit 34ea901): iPad 9/9; iPhone failed at `lang-en` because of a test-timer bug (a screenshot
  wait was only subtracted once the ack arrived, and a hung periodic screenshot sat in front). Fixed: live accounting, ack wait 200 s,
  periodic screenshots only while the walk is silent. Checked with a screenshot delayed by 100 s in headless Chrome: 9/9.

- Run 44939525283 (be94b92): iPhone 9/9 (both passes); iPad timed out (WebView cold start 6.7 min on a slow runner,
  then the absolute 600 s limit ran out). Changes in the working tree (shipped by the next push.py): boot allowance 15 min,
  inactivity limit 7 min (cap 30 min); periodic screenshots only before the walk; screenshot attempts 75 + 45 s;
  iPad Air 11" by default (`ipad_model` input / `IOS_IPAD_MODEL` variable for the 13"); step timeouts 40 min, job 110 min.
  The concurrency setting no longer cancels a running iOS job on main (pushed by the lead in 811e19f).

- **Run 44940902672 (811e19f): GREEN**, 9/9 on iPhone 17 Pro Max and iPad Pro 13", no warnings, video OK. Evidence in `ios-evidence/` (git-ignored).
- Observations for other roles, from the screenshots: in EN, one flashcard shows "Key points: Tonométrie" (an untranslated title; data);
  `zz-final-dark` stays light in this run although the simulator was switched to dark (it was dark in run 44933504936). Check the theme setting (web).

## Remaining / for others
- **Web:** fonts are remote (Google Fonts); offline the app falls back to system fonts. Self-host them to be fully offline. Hide web-only UI under `html.native`.
- **User:** Apple Developer account (legal name), final bundle ID (`set_brand.py --app-id`), API key and GitHub secrets, privacy policy URL, physician review (1.4.1).
