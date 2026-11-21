# iOS app (Ocelle): build and test with no Mac

The iOS app is the same bilingual static site (`site/`, made by `tools/build_web.py`) packaged with **Capacitor 8**
(Swift Package Manager, so no CocoaPods). You don't need a Mac. Builds and tests run on **GitHub Actions macOS runners**
(free on a public repo). You only use a browser: open the run and download its screenshots, video and logs.

## 1. Architecture

```
src/ data/ data-en/ brand/ ──tools/build_web.py──► site/  (website, GitHub Pages)
                                                     │  npx cap sync ios   (copies site/ → ios/App/App/public/)
                                                     ▼
ios/App/App/public/ ◄── node ios/scripts/overlay.mjs [--selftest]   (adds iOS-only JS to the copy, never to site/)
        │
        ▼
ios/App/App.xcodeproj  (target "App", universal iPhone + iPad, iOS 15+)
  AppDelegate / SceneDelegate → AppViewController (CAPBridgeViewController subclass)
  WKWebView serving the bundled files at capacitor://localhost  (no remote server: offline by default)
  Swift packages: Capacitor 8.6.2, @capacitor/splash-screen, @capacitor/haptics  (ios/App/CapApp-SPM/Package.swift, managed by cap sync)
```

| File | Role |
|---|---|
| `capacitor.config.json` | appId (placeholder `ca.academie.ophtalmo`), appName `Ocelle`, `webDir: site`, splash, no `server.url` (offline) |
| `ios/App/App/Info.plist` | dev region **fr**, `CFBundleLocalizations` fr+en, `ITSAppUsesNonExemptEncryption=false`, orientations, launch screen |
| `ios/App/App/{fr,en}.lproj/InfoPlist.strings` | name under the icon. The `.lproj` folders also give WKWebView a French or English `navigator.language`, which the web app uses to pick its language |
| `ios/App/App/PrivacyInfo.xcprivacy` | privacy manifest: no tracking, no data collected, no required-reason API (Capacitor 8.6.2, the two plugins and our code were grepped: none use UserDefaults, file timestamps, disk space or system uptime; Capacitor ships its own manifest) |
| `ios/App/App/AppViewController.swift` | edge-swipe back/forward through the SPA's hash history. Debug builds only: a `selftestLog` handler that sends self-test lines to the unified log |
| `ios/web-overlay/native-ios.js` | in every iOS build: adds `.native .native-ios` to `<html>` and a light haptic tap on answers and card flips |
| `ios/web-overlay/selftest.js` | self-test variant only (see §3) |
| `ios/scripts/make_assets.py` | AppIcon 1024 from `brand/icon-1024.png`; splash = solid `#0A2547` + the brand mark (also runs in CI) |
| `ios/scripts/set_brand.py` | changes the name and bundle ID everywhere in one command |
| `ios/scripts/check_ios.py` | static checks (plists, strings, privacy manifest, bundle id, icon, workflow YAML); runs on Linux and in CI |
| `ios/scripts/run_selftest.py` | simulator runner (macOS only): boot, install, launch, logs, screenshots, video, verdict |
| `ios/ExportOptions.plist` | App Store Connect export (`method app-store-connect`, `destination upload`) |
| `.github/workflows/ios.yml` | CI: build and self-test (automatic), TestFlight (manual, disabled) |

**Do not change** `server.iosScheme` / `hostname` after a release. The WebView origin (`capacitor://localhost`)
decides which `localStorage` the app reads, so changing it would wipe every user's progress.
Also, `localStorage` in WKWebView can be cleared by iOS when the device is very low on storage (rare). If progress
becomes precious, mirror it with `@capacitor/preferences`.

Notes for the web role (already respected by `src/web.js`): skip service-worker registration when `window.Capacitor`
is present, and use relative URLs. Google Fonts are remote: offline, the app falls back to Atkinson or system-ui,
which is fine. To be fully offline with brand fonts, self-host them in `site/` (`overlay.mjs` prints a warning while
they are remote). The web CSS can hide web-only UI with `html.native` (for example "install the app" banners or links
to the website).

## 2. Running the workflow

The workflow runs **automatically on every push to `main`** (and on pull requests) that touches the app: `src/`,
`data*/`, `brand/`, `imgsrc*/`, `tools/build_web.py`, `ios/`, `capacitor.config.json`, `package*.json` or the workflow.
To run it by hand: GitHub → **Actions** → **iOS** → **Run workflow**. The "ipad" box adds the iPad run (on by default).

What the `simulator` job does (about 15–25 min):
1. macOS runner (`macos-latest`, which you can change with the repository variable `IOS_RUNNER`, e.g. `macos-26`), newest stable
   Xcode (`IOS_XCODE` pins a version, e.g. `26.1`), Node 22, Python 3.12.
2. `npm ci` → `python3 tools/build_web.py` → `make_assets.py` → `check_ios.py`.
3. `npx cap sync ios` + `overlay.mjs --selftest`.
4. `xcodebuild … -sdk iphonesimulator -configuration Debug CODE_SIGNING_ALLOWED=NO` (unsigned, simulator only).
5. `run_selftest.py --family iphone`: picks the newest iPhone simulator (Pro Max first), launches the app **in French**
   (`-AppleLanguages (fr)`), follows the logs, takes a screenshot at each step and every 15 s, records a video, then
   switches to dark mode for a final screenshot.
6. Same thing on an iPad (Pro 13-inch first).
7. Uploads the artifact `ios-selftest-<run number>`.

The job fails if a step logs `SELFTEST FAIL`, if `SELFTEST PASS done` never appears (240 s timeout), or if the app crashes.
Warnings (`SELFTEST WARN`, JS errors) show as yellow annotations and in the run summary, but they don't fail the job.

### Getting the results (from Windows, in a browser)
Open the run → **Summary**. The table lists each step ✅/❌ with its warnings. At the bottom, under **Artifacts**,
download `ios-selftest-N.zip`:
```
iphone/  screenshots/01-boot.png … 11-card-next.png, t015.png …, zz-final-light.png, zz-final-dark.png
         run.mp4               video of the whole run
         selftest.log          SELFTEST lines with timestamps
         app-console.log       app stdout (Capacitor "⚡️ [log]" lines, native errors)
         app-unified.log       unified log of the app + WebKit (for crashes)
         result.json           verdict
         crash-reports/        if any
ipad/    same
xcodebuild.log
```
The iPhone Pro Max and iPad Pro 13" screenshots (status bar set to 9:41) are the sizes App Store Connect asks for
(6.9" and 13"). You can reuse them as store screenshots.

## 3. The self-test

`selftest.js` is only in the bundle that `overlay.mjs --selftest` produces, so release builds never contain it
(the TestFlight job checks this). It walks through the app like a user and logs lines that start with `SELFTEST`:

| Step | What is checked |
|---|---|
| boot | the app renders (45 s max); `window.I18N` exists; it logs UA, `navigator.language`, Capacitor present |
| home-fr | starts in French (proves the fr localization reaches the WebView; otherwise WARN and FR is forced); home has content |
| lang-en | clicks the EN button (`[data-act="lang"][data-v="en"]`, with fallbacks); after the reload, `I18N.lang === 'en'` and the home text changed |
| fiche | opens the first fiche that has an EN translation (otherwise the first one): `<h1>`, content, no missing bundled image |
| investigations | `#investigations` shows links to `#inv-<id>` |
| practice | opens an `#inv-<id>` that has practice items, picks an answer, and checks that the exercise reacts (reveal); WARN if nothing is saved in `Store.p.inv` |
| flashcards | `#cartes`: flip → "Knew it" → next card |
| offline | lists remote hosts the page requested (WARN) |
| done | `SELFTEST PASS done n/n` only if every step passed |

Log lines leave the app two ways: `console.log`, which Capacitor prints to the app's stdout (captured with
`simctl launch --console-pty`), and in Debug builds `NSLog`, through `AppViewController` into the unified log
(`simctl spawn … log stream`). The runner merges both and removes duplicates.

**Tested on Linux (2026-11-21)** with headless Chrome against the real `site/` build: boot, home-fr, lang-en (through the
UI button), fiche and flashcards pass. `investigations` and `practice` fail while `src/investigations.js` doesn't exist
yet. That is expected, and they will pass once the exercises role delivers the `#investigations` route. The runner's
logic (device choice, deduplication, screenshots, verdict, summary) was checked with a simulated `xcrun`.
Run locally: `node ios/scripts/overlay.mjs <copy of site> --selftest`, open it in a browser, and read the console.

## 4. Name, bundle ID, icon
- Name: **Ocelle** (brand/BRAND.md), the same in FR and EN. To change it: `python3 ios/scripts/set_brand.py --name "…" [--name-en "…"]`.
- Bundle ID: **`ca.academie.ophtalmo` is a placeholder**. Pick the final one *before the first upload* (it can never
  change afterwards), ideally reverse-DNS of a domain you control, e.g. `ca.<your-domain>.ocelle`, then run
  `python3 ios/scripts/set_brand.py --app-id <id>` and create the same ID in the Apple Developer portal.
- Icon: `brand/icon-1024.png` (opaque RGB) is copied into a single-size 1024 AppIcon; Xcode makes the other sizes.
  Splash: solid `#0A2547` with the mark (geometry from `brand/mark.svg`), as `brand/HANDOFF.md` §6 asks. To use
  another logo, drop a transparent `brand/splash-logo.png`. Both are regenerated in CI.
- Version: `MARKETING_VERSION` = 1.0 in the Xcode project. The build number is `github.run_number` in the TestFlight job.

## 5. What remains for TestFlight / the App Store

### 5.1 Apple Developer account (you)
- Join the **Apple Developer Program** as an individual, in your **legal name** (99 USD/year). The seller name shown on the
  App Store will be that legal name. An organisation account needs a D-U-N-S number.
- In App Store Connect: **Users and Access → Integrations → App Store Connect API → Team Keys → +**, role **Admin**
  (needed so that CI can create the cloud-managed distribution certificate and the profiles), and download the `.p8` once.
- Developer portal: register the bundle ID. App Store Connect: **My Apps → +** with that bundle ID, primary language
  French (Canada), and the name "Ocelle" (it must be free on the store).

### 5.2 GitHub secrets / variables (repo → Settings → Secrets and variables → Actions)
| Kind | Name | Value |
|---|---|---|
| secret | `ASC_KEY_ID` | Key ID (10 characters) |
| secret | `ASC_ISSUER_ID` | Issuer ID (UUID shown above the keys) |
| secret | `ASC_KEY_P8_BASE64` | contents of `AuthKey_XXXX.p8` in base64. On Windows PowerShell: `[Convert]::ToBase64String([IO.File]::ReadAllBytes("AuthKey_XXXX.p8"))` |
| secret | `APPLE_TEAM_ID` | Team ID (Membership page) |
| variable | `IOS_RELEASE_ENABLED` | `true` (the job stays off until this is set) |

Then go to **Actions → iOS → Run workflow**, check **testflight**, and run. The `testflight` job runs only after the
`simulator` job passes. It builds the release variant (no self-test), runs `xcodebuild archive` with automatic signing
through the API key (`-allowProvisioningUpdates -authenticationKey…`), and then `xcodebuild -exportArchive` with
`ExportOptions.plist` (`destination: upload`), which **uploads straight to App Store Connect**. No fastlane, no
altool, no certificate to export. The build shows up in TestFlight about 10–30 min later. Internal testers can install
it right away. External testers need a short Beta App Review.

### 5.3 App Store listing
- **Category:** Education (primary), Medical (secondary).
- **Privacy policy URL:** required even with no data collected. Host a short `privacy.html` page on GitHub Pages
  (no account, no tracking, progress stored only on the device, error reports stay local).
- **Privacy nutrition label:** "**Data Not Collected**". That is accurate: no analytics, no account, no network calls
  of our own. Sync only exists inside the Claude artifact (`window.claude`), which isn't there in the app. Only the
  Google Fonts requests remain (no identifiers). Self-hosting the fonts removes them.
- **Tracking:** No. **Encryption:** exempt (`ITSAppUsesNonExemptEncryption=false`, so no question on each build).
- **Age rating:** answer the questionnaire honestly: *Medical or treatment information* = **Frequent** (clinical photos
  of infections, ulcers and surgery). Expect a rating of about 13+ to 16+, depending on Apple's current grid. Confirm it in App Store Connect.
  Everything else is None. No user-generated content is shared and there is no web browsing inside the app (external links open in Safari).
- **Screenshots:** take them from the self-test artifact (iPhone 6.9", iPad 13").

### 5.4 Review risks and mitigations
| Guideline | Risk | Mitigation (done / to do) |
|---|---|---|
| **4.2 Minimum functionality** (web wrapper) | Apple rejects "a website in an app" | Done: all content bundled and works offline; interactive exercises, simulators, spaced-repetition cards; native launch screen; haptics; swipe-back. To do: hide web-only UI under `html.native` (install banners, "open the website" links). Optional but strong: local reminders for due cards (`@capacitor/local-notifications`). In the review notes, explain that the app is an offline interactive course, not a site. |
| **1.4.1 Medical apps** (accuracy / risk) | Medical content may be held to a higher standard | Say clearly in the app (home or About, plus first launch) and in the description: *educational tool for medical students and residents; not for diagnosis or patient care; follow local guidelines and your supervisor*. Cite sources (the "Sources et crédits" page exists). The banner "Pas encore validé par un ophtalmologiste" is honest but can worry reviewers: get a physician review done and state it. |
| **5.1.1(ix)** regulated fields | Apps that provide *healthcare services* must come from a legal entity, not an individual | The app gives no care, no patient data and no advice to patients. Present it as **education** (primary category Education) and say so in the review notes. If a reviewer still objects, publish through an organisation (university, non-profit). |
| **5.2 Intellectual property** | Third-party images (CC BY-NC-ND, EyeRounds) | The app is free with no ads (NC is respected), and credits are visible in the app. Check with the rights role that hotspot annotations drawn *over* ND images are not "derivatives" (overlay, image unchanged). |
| **2.1 Completeness** | Placeholder content / broken links | The self-test catches missing bundled images. Remove any "coming soon" pages before submission. |
| **2.3.8 Metadata** | Name/icon | Unique name; icon has no transparency. |

## 6. Troubleshooting
- **`xcodebuild` cannot resolve packages:** the runner downloads `capacitor-swift-pm` from GitHub, so re-run the job.
  If you see "requires a newer Xcode", set `IOS_RUNNER=macos-26` and/or `IOS_XCODE`.
- **No simulator found:** `run_selftest.py` creates one from the newest iOS runtime. Check the "Tool versions" step.
- **Self-test silent (timeout, no SELFTEST lines):** check `app-console.log` (did the page load? JS error?) and the
  screenshots `t015.png…`.
- **Step fails after a UI change:** the selectors are in `ios/web-overlay/selftest.js` (one function per step).
