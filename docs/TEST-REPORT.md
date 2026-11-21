# Ocelle: independent test report (web, accessibility, clinical sample, iOS evidence)

_Tester: independent QA and clinical accuracy role (not involved in building the product). Date: 2026-11-21, cycle 3._
_Tested build: local `python3 tools/build_web.py` from `/home/claude/ophtalmo-academie` (HEAD `e704ccf` plus uncommitted work in progress), served on 127.0.0.1. Every non-local request was blocked. The live GitHub Pages site can't be reached from the test container, so it was not tested._

> **Final verdict (pass 2, 2026-11-21 evening): ready, with minor fixes.**
> - **French:** no blocker and no major defect left. The product can launch in French.
> - **English:** finish translating the interactive figures and the module B/C comparison tables (R1) before an English campaign.
> - **iOS:** re-run CI on HEAD before TestFlight.
>
> Details and the status of each pass 1 defect are in **§8 Passage 2**. Sections 1–7 below are the pass 1 report, kept as history.

## 1. Pass 1 verdict: **ready with fixes**

- **The French web app works well.** I ran 328 route checks: 41 main routes × FR/EN × 390×844/1280×900 × light/dark. All 328 passed: no console or page errors, no horizontal overflow, no raw i18n keys, no 404s or broken images. All flows passed in 4 viewport/theme/language combinations: practice with "Je ne sais pas" and with an answer, #cas-vedette, #image-du-jour and its streak, #cas-images, the 6 games, a QCM series with confidence, a full case, progression after a reload, language persistence, deep links, the in-app motion toggle and the OS reduced-motion setting. Offline mode works through the service worker, including fonts. To show the suite can catch real faults, I injected 5 defects into a copy of the site; it detected all 5.
- **No blocker.** Before a public launch in **English**, fix four things:
  - **D1:** about a third of the EN experience is still French (all of Module A, comparison tables, image captions).
  - **D2:** in the image-based items, the correct answer is usually the longest option (74 % of Investigations items, 86 % of image cases).
  - **D3:** two accessibility errors that are quick to fix.
  - **D4:** the depth selector uses an ARIA attribute that isn't allowed on its role.
- **Clinical sample (25 items):** I found no dangerous or wrong teaching point. There are 4 small corrections: one misplaced hotspot, two wording issues and one attribution.
- **iOS (CI evidence):** the app renders on iPhone 17 Pro Max and iPad Pro 13″ (iOS 26.5), 9/9 self-test steps on each. Safe areas and fonts look right, and dark mode works. The evidence comes from an **older build** (commit `1b0a347`, before cycle 3) and has three capture gaps. Run it again on the current tree before submission.

## 2. Test plan and how to run it

`tests/web/test_site.py` (Python Playwright, Chromium):

```
python3 tests/web/test_site.py                       # build site/ then run everything except axe
python3 tests/web/test_site.py --no-build --snapshot --axe <path>/axe.min.js --out /tmp/ocelle-test
python3 tests/web/test_site.py --quick               # route matrix on 1 combo + flows on 2 combos (~3 min)
python3 tests/web/test_site.py --only routes,flows,offline,axe
```
- The script starts its own server on a free port. `--snapshot` copies site/ first, so other roles can rebuild while the test runs.
- Non-local requests are blocked at the DNS level (`--host-resolver-rules`) and by request routing.
- Output goes to `<out>/results.json`, `<out>/axe.json` and `<out>/shots/*.png` (failures plus reference shots at 390-light-fr and 1280-dark-en). The exit code is 1 if any check fails.
- Run time: about 9.5 min for routes and flows, 10 s for offline, 20 s for axe. On this container, running all sections in one process for more than 10 minutes once crashed Chromium (zygote error). Each section run alone passes. Use `--only` for long runs.

| Area | What is checked | Result |
|---|---|---|
| Route matrix (8 combos × 41 routes) | Routes: home, apprendre, module A/B/C overviews, 3 topics per module plus the B0/C0 foundations, investigations hub, 6 exam pages, #cas-vedette, #image-du-jour, #cas-images, réviser plus 6 games, QCM hub, cases hub, one case, progression, sources, atlas, search. Checks: render (no error callout or not-found), console/page errors, horizontal overflow (with the elements causing it), raw keys (every key in the I18N dicts plus a prefix regex), `<img>` broken or local 4xx, failed requests | **328/328 pass** |
| French UI strings in EN mode | Buttons, links, headings, labels, aria-labels with French words (information only) | many, see D1 |
| Practice engine | #inv-oct: Ready → "Je ne sais pas" → feedback → saved as `conf:'idk'`. Then Next → confidence "unsure" → answer → correct option highlighted, an explanation for each option, hotspot rings inside the image box. Reload → 2 entries kept | pass ×4 |
| Every practice series | Each of the 6 exams run to the end screen (7/7/9/7/8/8 items). No "Image à venir", no broken image | pass |
| #cas-vedette | `html.focus-view` set and then removed, image loads, correct answer marked "ok", 4 hotspot rings | pass ×4 |
| #image-du-jour | Item completed, end card shown, `streak.n ≥ 1` after reload | pass ×4 |
| #cas-images | Route exists (35 cases), answer → feedback | pass ×4 |
| Réviser games | cartes, cartes-vocab (flip + rate), mots-troues, jeu-images, triage (answer + feedback), associe (all 5 pairs matched) | pass ×4 |
| QCM | Adaptive series of 10, confidence "unsure" saved, Enter → next question, key "1" answers, ends on the score card | pass ×4 |
| Clinical case | `cas-b1` played to the debrief, result kept after reload | pass ×4 |
| Progression | Answered count is the same after a reload | pass ×4 |
| Language | Switch on #progression → reload → `lang` and `oph-lang` persist. `?lang=` overrides the stored choice and is remembered | pass ×4 |
| Deep links | `#cas/b1`, `#case-b1`, `#fiche/c-keratocone`, `#learn`, `#review`, `#mcq`, unknown route → not-found | pass ×4 |
| Keyboard | Tab reaches a QCM answer (6–7 presses), focus ring visible, Enter answers, focus moves to "Next". Practice: Enter on Ready → focus on option 1 → Enter answers | pass ×4. **No skip link** (D5) |
| Reduced motion | OS `prefers-reduced-motion: reduce` → no running animations, `scroll-behavior: auto`. In-app toggle: 4 animated rings with motion on, none with motion off | pass |
| Offline | Service worker registered and in control. Offline reload renders, and so do fiches, inv-oct, reviser and quiz. Practice can be answered offline. Self-hosted fonts load offline. Images of pages not yet visited are missing (D13) | pass |
| axe-core 4.10.3 | Pages: accueil, c-bacterienne, inv-oct (answer phase), quiz-run (after an answer), cartes (flipped), cas-vedette. Run at 390-light-fr and 1280-dark-en | see §4 |
| Exploratory (scripts, not in the suite) | 320 px, landscape 844×390, A++ text size, tap targets, drawer, lightbox, search, reset, French content measured in EN | D6–D12 |

## 3. Defects by severity

Line numbers refer to the working tree on 2026-11-21 and may shift while other roles edit.

### Major

| # | Defect | Repro | Where / fix |
|---|---|---|---|
| D1 | **EN mode is still largely French outside the QCM/fiche bank.** Share of French function words in `#view`, EN mode: a-anatomie 91 %, a-imagerie 81 %, a-examen 78 %, a-physiologie 74 %, a-retine 74 %, cas-a2 95 %, cas-b5 86 %, module-b 53 %, module-c 47 %, sources 34 %, express-b 15 % (11 of 68 routes over 15 %). Also in French on EN pages: every EyeRounds **image caption** (figure captions and "Enlarge: …" aria-labels), schematic titles ("Coupe schématique de l'œil", "Couches de la cornée"), the anatomy explorer labels, atlas filter names, search ("Accueil", "Glossaire", "Rien trouvé"), and the reference lists | `?lang=en#a-examen`, `#module-b` (comparison table), `#c-secheresse` (photo captions), `#a-anatomie` (structure labels), `#cas-a2` | `src/views.js` A1–A5 pages, `COMPARE`, `A5_GROUPS`, atlas/search/sources views. `src/figures-a.js`, `src/figures-b.js`, `src/sims.js` labels. `data/catalog.js` titles and captions (no EN overlay). `data-en/capsules-cases.js` lacks `cas-a2` and `cas-b5`. Fix: EN overlays for the catalog and A sections, `t()` in figures/sims. Mark leftover FR blocks with `lang="fr"` so screen readers switch voice |
| D2 | **Answer-length cue in image items.** The correct option is the single longest one in **34/46 `invPractice` (74 %)** and **30/35 `imageCases` (86 %)**. Chance would be about 25 %; the QCM bank sits at 22 %. Learners can score well by picking the longest option, which undermines the "Observe → Answer → Reveal" method and the confidence data | `node` count over `data/investigations.js` and `data/cases-images.js` (script in §5) | `data/investigations.js`, `data/cases-images.js`. Shorten correct options so they name only the answer (move the "because…" part to `why`/`reveal`), or give distractors similar length and detail, as done in the QCM bank |
| D3 | **Accessibility, serious (axe `nested-interactive`): focusable controls inside `role="img"`.** Screen readers flatten a `role="img"` element, so the "Agrandir/Enlarge" zoom button inside `.inv-media-in` and the focusable layers of the OCT tool can't be reached | Any practice item with a photo (#cas-vedette, #image-du-jour, #cas-images, exam pages). #inv-oct tool | `src/investigations.js:578` (`.inv-media-in role="img"`, zoom at :571). `:378` (OCT `svg role="img"` with focusable `[data-layer]`). Fix: put `role="img"` + `aria-label` on the `<img>`/`<svg>` only, and keep the zoom button outside it. Use `role="group"` for the interactive SVG |
| D4 | **Accessibility, critical (axe `aria-allowed-attr`).** Depth selector buttons have `role="radio"` plus `aria-pressed` (not allowed on radio, so assistive tech announces conflicting states). Appears on every fiche, the Module A pages, Learn and Progression | `#c-bacterienne`, run axe | `src/learn.js:33` (`depthSeg`, used from `src/views.js:156/347` and `src/learn.js:407/428`) and `:36` (`Actions.depth` sets both). Drop `aria-pressed` and keep `aria-checked`. The parent should be `role="radiogroup"` |

### Minor

| # | Defect | Repro | Where / fix |
|---|---|---|---|
| D5 | No "skip to content" link. The first Tab goes to "Menu" on mobile or the brand link on desktop, and the rail comes before the content | Load `/`, press Tab | `tools/build_web.py:281` (body template). Add `<a class="skip" href="#view">` and `tabindex="-1"` on `#view` |
| D6 | 14 schematic SVG media have no accessible name (axe `svg-img-alt`, serious). The wrapper only says "Image d'examen (légende masquée)" | `#inv-oct`, item 1 (`m-oct-1`) | `data/inv-media.js`: m-bscan-2, m-bscan-6, m-ascan-1/3/4/5/6/7, m-oct-1, m-gonio-2, m-gonio-3, m-fondoeil-1, m-cv-6, m-cv-7. Add a `<title>` (neutral, so the answer isn't revealed before the reveal) or `aria-hidden="true"` on the inner svg |
| D7 | No `<h1>` on `#quiz-run` or the game pages (`#cartes`, etc.), and headings skip levels in fiches (h2 → h4 in "Voir/Comprendre"). axe moderate | axe on those pages | `src/views.js:477` (quiz-run), `src/learn.js:343` (`gameView`), `src/views.js:355/364` (fiche `mv` sections). Add a visually hidden h1 and use h3 |
| D8 | Lightbox: Escape closes it but focus does not go back to the button that opened it. Drawer: the Menu button has no `aria-expanded`, and the dialog panel has no `aria-modal` | `#c-bacterienne` → photo zoom → Escape → focus is lost. Open Menu | `src/core.js:294` (`close`): save `document.activeElement` on open and restore it. Template at `tools/build_web.py:284` and Shell drawer: add `aria-expanded`, `aria-modal="true"` |
| D9 | `#atlas` overflows horizontally: 2 px at 320 px wide, 9 px at 390 px with text size A++ (crumbs/phead pushed off-screen) | 320×640 or Progression → A++ → `#atlas` | `src/views.js:503` filter row (5-option `.seg` + input `min-width`). Let `.seg` wrap or scroll (`overflow-x:auto`) |
| D10 | Tap targets under 24 px (WCAG 2.5.8): anatomy explorer pins are 18×18, and the "Fovéa" target is 3×5 px, "Macula" 1×20. OCT layer bands are 4–10 px tall at 390 px (a chip list exists as an alternative) | `#a-anatomie` and `#inv-oct` at 390 px | `src/figures-a.js` / `src/sims.js` (anatomy hit areas), `src/investigations.js` OCT tool. Enlarge invisible hit areas (transparent stroke ≥ 24 px) |
| D11 | Topic deep links show a "Module B/C verrouillé" lock box to first-time visitors (also seen in the iOS screenshots), so a shared or campaign link opens on a lock message | Fresh profile → `#c-keratocone` | `src/views.js:17` (lockbox). Turn off the lock on the public web build (or for deep links), or make it opt-in |
| D12 | iOS (simulator evidence): after "Ready to answer", option 1 gets programmatic focus and shows a strong focus ring, so it looks pre-selected (`09-practice-answer.jpg`). May be an artefact of synthetic clicks in the simulator; check on a real device | iPhone evidence 09 | `src/investigations.js:642` (`draw('.opt')`). After a pointer activation, focus the options container rather than option 1 |
| D13 | Offline: only images already viewed are cached. An unvisited fiche offline showed 5/8 images broken (web only; the iOS bundle is local) | Visit `/`, go offline, open `#g-gpao` | `site/sw.js` (generated by `tools/build_web.py`). Show a "photo available online" placeholder, or precache practice and featured images (about 25 MB in total, so choose a subset) |
| D14 | Two cases have no EN translation: `cas-a2`, `cas-b5` (FR badge shown) | `?lang=en#cas-a2` | `data-en/capsules-cases.js` |

### Cosmetic / content (details in §5)
- D15: `ic-c06` hotspot is off the Vogt striae, and the stem says "vertical" while the striae in this photo are oblique.
- D16: `C-012` attributes the ≥ 180° PACS threshold to ISGEO.
- D17: `p-oct-8` FR wording "montre bien le contact iridocornéen, sans contact".
- D18: `p-ascan-5` rings hide the measured numbers.

## 4. Accessibility audit (axe-core 4.10.3, wcag2a/aa + best practice)

Six pages were audited at 390-light-fr and 1280-dark-en.

| Rule | Impact | Pages | Note |
|---|---|---|---|
| aria-allowed-attr | **critical** | c-bacterienne (and every page with the depth selector) | D4 |
| nested-interactive | **serious** | inv-oct (OCT tool), cas-vedette (and every photo practice item) | D3 |
| svg-img-alt | **serious** | inv-oct (14 schematic media) | D6 |
| page-has-heading-one | moderate | quiz-run, cartes | D7 |
| heading-order | moderate | c-bacterienne | D7 |

- **No colour-contrast violation**, in light or dark mode.
- `html lang` follows the selected language.
- Focus rings are visible (`:focus-visible`, 3 px).
- The keyboard shortcuts work (1–9, 0/?, Enter).
- Reduced motion is respected both from the OS setting and from the in-app toggle.
- Not tested: a real screen reader (VoiceOver/NVDA), and zoom to 400 %.

## 5. Clinical spot-check (25 items, random sample, seed 20261121)

- **Sample:** 8 `invPractice`, 7 `imageCases`, 5 `hy` essentials and 5 EN translations of `quiz` items.
- **Photo items:** for each one, I read the image and drew its hotspots (x, y and r in % of the width, the same geometry as `.inv-hot`) on a copy.
- **Schematic items:** rendered in the real engine.
- **References:** AAO BCSC knowledge, the AAO POAG PPP 2026 (Gedde et al., *Ophthalmology*, epub 9 Feb 2026: RNFL plus macular GCL at baseline and follow-up; [Review of Optometry summary](https://www.reviewofoptometry.com/article/aaos-updated-ppp-for-poag-emphasizes-individualized-monitoring)) and the AAO Primary Angle Closure PPP (≥ 180° ITC; [PPP PDF](https://bpb-us-e2.wpmucdn.com/faculty.sites.uci.edu/dist/1/880/files/2020/06/Primary-Angle-Closure-PPP.pdf)). 3 web searches in total.

| Item | Checked | Result |
|---|---|---|
| p-fondoeil-4 (OPH-136) | ISNT, inferotemporal notch → superior defect. Hotspots: notch (27,70), lamina (45,45), vessels (63,45) | OK. All 3 hotspots are on their findings |
| p-ascan-5 (svg) | Interocular axial length difference > 0.3 mm without anisometropia → remeasure; 0.89 mm ≈ 2–3 D | OK. Rings cover the numbers they point to (D18): reduce r or offset the rings |
| p-oct-4 (OPH-262) | Diabetic macular oedema: intraretinal cysts, hard exudates with shadowing | OK. The decisive hotspot sits on the cysts |
| p-oct-9 (gen oct:srf) | CSC: subretinal fluid above a flat RPE | OK |
| p-cv-1 (OPH-302) | OD values match the printout (FL 0/15, FP 4 %, FN 2 %, GHT WNL, VFI 99 %, MD −0.18, PSD 1.72), blind spot temporal | OK, hotspots on target. Note: the EyeRounds source caption describes left/right the other way round from the printed headers (OS left, OD right). The item correctly follows the headers; the alt text already says so |
| p-bscan-6 (svg) | Retinal detachment: V shape inserted at disc and ora, 100 % spike; choroidal detachment spares the disc; PVD < 100 % and mobile | OK |
| p-oct-8 (OPH-147) | AS-OCT angle closure after DMEK, air-bubble pupillary block | OK, hotspots on the angles. **FR `why[3]`** "montre bien le contact iridocornéen, sans contact" contradicts itself → "…sans toucher l'œil" (the EN is correct) |
| p-bscan-5 (OPH-194) | Kissing haemorrhagic choroidal detachments; wait for clot liquefaction before drainage | OK. The decisive ring sits on the residual vitreous next to the point of contact (acceptable) |
| ic-c01 (OPH-057) | HSV dendrite, terminal bulbs, no topical steroid alone | OK, hotspot on the dendrite |
| ic-c12 (OPH-075) | Adenoviral subepithelial infiltrates; Thygeson without conjunctivitis | OK |
| ic-c11 (OPH-030) | Abrasion, no patch for contact-lens wearers, no home anaesthetic, Seidel description | OK |
| ic-x02 (OPH-346) | Hyphaema: rule out an open globe, IOP, sickle-cell screening, avoid acetazolamide | OK, hotspot on the blood level |
| ic-x12 (OPH-281) | Cocaine test: both pupils dilate → physiological anisocoria | OK, hotspots on the post-cocaine pupils (patient's right eye on the left of the image) |
| **ic-c06 (OPH-040)** | Keratoconus, Vogt striae | Diagnosis correct. **Hotspot (45, 40, r 12) only partly overlaps the striae**, which are best seen in the beam at about **(56, 56)**. The striae in this photo are **oblique**, while the stem and alt say "verticales". Fix: move to x 56, y 56, r 10. Stem: "fines stries parallèles dans le stroma profond" |
| ic-x08 (OPH-254) | Left-eye montage (disc on the left), inferotemporal BRVO | OK, hotspots on target |
| hy c-dystrophies | Macular = AR (CHST6); granular/lattice = AD (TGFBI); no LASIK with TGFBI | OK |
| hy c-bases | Goldmann equation; episcleral venous pressure as the floor for trabecular outflow; structure-function | OK |
| hy c-depots | Unilateral arcus → carotid stenosis on the side **without** arcus; band keratopathy/JIA; KF ring vs Fleischer ring; crystalline keratopathy | OK |
| hy ex-oct | "AAO 2026: RNFL + GCIPL at baseline and follow-up"; floor effect about 50–60 µm; red/green disease | OK (checked against the 2026 PPP) |
| hy a5-inflammation-infection | Cycloplegics, same-day tap-and-inject, bleb-related endophthalmitis, iris bombé → LPI | OK |
| quiz C-063 (EN) | Rebound IOP after uveitis (ciliary body recovers before the meshwork); steroid response typically at 2–6 weeks | Faithful translation, accurate |
| quiz A-020 (EN) | Pinhole → refractive cause | Faithful, accurate |
| quiz C-102 (EN, OPH-133) | Left eye, inferior notch → superior arcuate defect | Faithful, accurate. The notch is visible (cup reaching the inferior rim) |
| quiz A-021 (EN) | Reverse RAPD when one pupil is fixed | Faithful, accurate |
| **quiz C-012 (EN)** | PACS / PAC / PACG | Classification and answer correct, translation faithful. The explanation attributes **"PACS = ITC ≥ 180°" to ISGEO**. ISGEO (Foster 2002) used ≥ 270° (3 quadrants); ≥ 180° is the AAO PPP consensus. Fix: "selon le PPP de l'AAO (≥ 180°; l'ISGEO initiale exigeait ≥ 270°)" |

**Systematic finding (D2):** the answer-length cue was found while checking this sample, then measured across all items:

```
node -e "global.window=global;global.OPH={};['data/investigations.js','data/cases-images.js'].forEach(f=>require('./'+f));
for (const a of [OPH.invPractice, OPH.imageCases]) { let n=0; a.forEach(p=>{const L=p.options.map(o=>o.fr.length), m=Math.max(...L); if (L[p.answer]===m && L.filter(x=>x===m).length===1) n++;}); console.log(n+'/'+a.length); }"
```

Integrity checks over all 81 image items found 0 problems:
- `answer` within range;
- `why` has one entry per option;
- FR and EN present in q, options, why, reveal and hotspot labels;
- hotspots within 0–100;
- answer index spread 21/21/20/19.

Images under restricted rights are absent from `site/img`. They are still referenced in data, where the runtime rights filter removes them; no broken image was seen.

## 6. iOS evidence review (`/home/claude/ophtalmo/ios-evidence/`)

- **Runs:** iPhone 17 Pro Max and iPad Pro 13″ (M5), iOS 26.5, Xcode 26.6. Run 44933504936, commit `1b0a347`, 2026-11-21 18:26Z. `BUILD SUCCEEDED`, self-test **9/9 on both devices**, `js_errors: []`. The only warning is that Google Fonts needed the network; this is fixed since, as fonts are now self-hosted in `fonts/`.
- **What renders correctly:**
  - **Safe areas:** on iPhone, the top bar sits below the Dynamic Island and status bar, the bottom tab bar sits above the home indicator, and nothing is clipped. On iPad the layout fills the width without clipping.
  - **Fonts:** Lexend headings and Atkinson body text render.
  - **Both themes and both languages:** dark (`zz-final-dark`) and light both correct; FR home and EN home both correct.
  - **Investigations:** all 6 tools render, as do the practice steps Observe → Answer → Reveal (red/green feedback, decisive sign).
  - **Flashcards:** front and back render.
  - **Video:** `run.mp4` (44 s) shows smooth navigation with no blank frames.
- **Gaps in the evidence (capture timing, not app defects, but they leave holes):**
  1. iPhone `05-fiche-mid.jpg` and `06-investigations.jpg` are **blank** (chrome only). The video shows both pages rendering correctly at 4 s and 6 s.
  2. iPhone `07-inv-oct.jpg` and `07-inv-oct2026-11-21.jpg` show the **A-scan page**: the screenshot was taken one page too early. iPad `07-inv-oct` confirms that the OCT page renders.
  3. Duplicates with a date suffix (`…2026-11-21.jpg`), which the iOS role says it has fixed since.
- **App issues seen in the evidence:**
  - D11: the "Module B locked" box sits at the top of the first fiche.
  - D12: a focus ring on option 1 makes it look pre-selected.
  - On this older build, some flashcards in the EN UI were still in French; most have been translated since. In my 15-card EN sample, 1 card still mixed in French: "Échographie B (B-scan) : technique et lecture…".
- **Recommendation:** re-run `ios.yml` on the current tree. Cycle 3 added self-hosted fonts, #cas-images and the full QCM translation. Add #cas-vedette and #cas-images to the self-test, plus a landscape iPhone screenshot. I checked landscape on the web (844×390) and saw no overflow.

## 7. Limits of this test
- Chromium only: the Playwright WebKit build is not installed in the container, so there is no Safari engine run. The iOS WKWebView is covered only by the CI evidence.
- Live site not reachable.
- No physical device and no screen reader.
- The clinical review is a random sample (25 of more than 400 items) by one reviewer. It does not replace the physician review planned before App Store submission (guideline 1.4.1).

---

## 8. Passage 2 (second independent pass, 2026-11-21, after cycles 4/5)

- **Builds tested:**
  - Snapshot of `site/` built at HEAD `c988352` for the full suite.
  - Snapshot at HEAD `b590ae2` ("Anglais : anatomie interactive") for the quick route check and the EN re-measure of the worst routes.
- **How the suite was run:** each section on its own with `--only`, to avoid the long-run Chromium crash.
- **Changes to the suite:** axe now also covers #a-anatomie, the 5 other investigation tools, #cas-images (with an answer revealed) and #atlas.

### 8.1 Suite results

| Section | Result |
|---|---|
| Route matrix (41 routes × FR/EN × 390/1280 × light/dark) | **328/328 pass**: no console errors, overflow, raw keys, 404s or broken images. A quick run at HEAD `b590ae2` gives 41/41 |
| Flows (4 combos + reduced motion) | **60/60 pass**: practice ("Je ne sais pas" + answer), all 6 practice series, #cas-vedette, #image-du-jour, **#cas-images (70 cases)**, 6 games, QCM with confidence, full case, persistence, language, deep links, keyboard, **skip link** ("Aller au contenu" / "Skip to content"), motion toggle, OS reduced motion |
| Offline (service worker) | 10/11. Reload offline OK, fiches/exams/quiz/reviser OK, practice answerable offline, fonts offline. Only remaining point: images of pages not yet visited (R7) |
| axe-core 4.10.3 (14 pages × 2 combos) | **13/14 pages with no serious or critical issue**: accueil, c-bacterienne, quiz-run, cartes, cas-vedette, **cas-images**, **inv-oct, inv-bscan, inv-ascan, inv-gonio, inv-fondoeil, inv-cv**, atlas. Remaining: **#a-anatomie** `nested-interactive` (serious, R2). Moderate `heading-order` on #a-anatomie and #atlas |

### 8.2 Status of the pass 1 defects

| # | Pass 1 defect | Status | Evidence in pass 2 |
|---|---|---|---|
| D1 | EN largely French | **Partly fixed** | Routes with ≥ 15 % French function words in EN mode: **11/68 → 5/75**. Module A pages: a-examen 78 → 14 %, a-retine 74 → 8 %, a-imagerie 81 → 14 %, a-physiologie 74 → 16 %, **a-anatomie 91 → 46 %**. cas-a2 95 → < 5 %, cas-b5 86 → < 5 %, flashcards 0/15 French. Still French: see R1 |
| D2 | Correct answer is the longest option | **Fixed** | Correct option is the single longest in invPractice 10/46 (**22 %**), cases-images 8/35 (**23 %**), cases-open 7/35 (**20 %**). EN 17–20 %. Chance ≈ 25 % |
| D3 | Focusable controls inside `role="img"` (practice media, OCT tool) | **Fixed** | No `nested-interactive` on cas-vedette, cas-images or any inv-* page. Same pattern **remains on #a-anatomie** (R2) |
| D4 | `aria-pressed` on `role="radio"` (depth selector) | **Fixed** | No `aria-allowed-attr` anywhere |
| D5 | No skip link | **Fixed** | The first Tab goes to "Aller au contenu" / "Skip to content" (`#view`) |
| D6 | 14 schematic SVGs without an accessible name | **Fixed (at render)** | No `svg-img-alt`. The raw svg strings in `data/inv-media.js` are unchanged; the engine handles it |
| D7 | No h1 on quiz-run/games; fiche heading order | **Fixed** | No `page-has-heading-one`, no `heading-order` on c-bacterienne. New moderate `heading-order` on #a-anatomie (h4 "Sélectionne une structure") and #atlas (h3), two pages audited for the first time |
| D8 | Lightbox focus; drawer ARIA | **Fixed** | Lightbox has `aria-modal="true"` and focus returns to the trigger after Escape. Menu has `aria-expanded="true"`, panel has `role="dialog" aria-modal="true"` |
| D9 | #atlas overflow at 320 px / A++ | **Partly fixed** | The content no longer exceeds the viewport, but the document is still **2 px (FR) / 7 px (EN) wider at 320 px, and 9/15 px at 390 px with A++**. No element box crosses the viewport (likely a pseudo-element or transform), and the fixed tab bar widens with it (R4) |
| D10 | Tap targets < 24 px | **Not fixed** | Anatomy pins 18×18 px, "Fovéa" 3×5 px, "Macula" 1×20 px. OCT bands 4–10 px tall at 390 px (chip list as fallback) (R3) |
| D11 | "Module locked" box on deep links | **Fixed** | Fresh profile → `#c-keratocone`: no `.lockbox` (FR and EN) |
| D12 | Option 1 looks pre-selected after Ready (iOS) | **Fixed on the web** | After a tap on Ready, focus goes to the options container `.opts` (`:focus-visible` false), not to option 1. The iOS evidence predates the fix |
| D13 | Offline: images of unvisited pages | **Open (by design)** | 5/8 images missing offline on an unvisited fiche (web only; iOS bundles the images) (R7) |
| D14 | cas-a2, cas-b5 not in EN | **Fixed** | Both translated |
| D15 | ic-c06 hotspot / "verticales" | **Fixed** | Hotspot (56, 56, r 10), on the striae. Stem says "fines stries parallèles" |
| D16 | C-012: ISGEO and 180° | **Fixed** | "≥ 180° selon le PPP de l'AAO — l'ISGEO initiale exigeait ≥ 270°" |
| D17 | p-oct-8: "sans contact" | **Fixed** | "…sans toucher l'œil" |
| D18 | p-ascan-5: rings hide the numbers | **Fixed** | Rendered: rings sit beside the values (r 4–5) |

### 8.3 Remaining defects (pass 2)

| # | Severity | Defect | Repro | Where / fix |
|---|---|---|---|---|
| R1 | **Moderate (EN only)** | French still visible in EN mode, measured at HEAD `b590ae2`. **a-anatomie 46 %**: the anatomy diagram labels ("Conjonctive", "Limbe", "Trabéculum", "Procès ciliaires", "Fovéa"), instructions ("Aller à une structure", "Touche une structure…", "Glisser pour déplacer…") and the tunics legend. The structure descriptions are now in English. **module-b 43 %, module-c 33 %**: comparison tables (column names and "Clue:/Action:" cells). **a-physiologie/a-examen/a-imagerie 14–16 %**: instructions in the interactive figures and simulators ("Allume une lampe sur un œil…", "Papille dans les limites…"), plus French schematic aria-labels ("Couches de la cornée", "Papille schématique", "Technique de Van Herick, schéma"). About 26 photo zoom labels ("Enlarge: …") still in French (fiche photo lists in a-retine, g-dev, g-pxf, c-bases…). sources 32 % (reference titles; acceptable as is) | `?lang=en#a-anatomie`, `#module-b`, `#a-examen`, `#g-dev` | `src/figures-a.js`, `src/figures-b.js`, `src/sims.js` (labels, `aria-label` and instructions through `t()`/`I18N.pick`). `COMPARE` tables in `src/views.js` (or a `data-en` overlay). Photo `caption`/`look` fields in `data/photos.js` / `data/ext-photos.js` → EN overlay |
| R2 | Moderate (accessibility, axe "serious") | #a-anatomie: 4 SVGs marked as images (`role="img"`) contain focusable structures, so screen readers can't reach them: `.eye-svg` "Coupe schématique de l'œil", "Couches de la cornée", "Coupe de l'angle iridocornéen", "Vue gonioscopique schématique". Also `heading-order` (h4 directly under an h2) on a-anatomie and atlas | axe on `#a-anatomie` | `src/figures-a.js:73` (and the other explorer SVGs). Use `role="group"` + `aria-label` when the SVG contains controls, as already done for the investigations. Use h3 in the info panel |
| R3 | Minor | Tap targets < 24 px (anatomy pins, Fovéa/Macula, thin OCT bands) | #a-anatomie, #inv-oct at 390 px | Transparent hit areas ≥ 24 px (`stroke-width` or an invisible `<circle r=12>`) |
| R4 | Minor | #atlas: page 2–7 px wider than a 320 px screen, 9–15 px at 390 px with A++ text | 320×640 → `#atlas` | Probably a pseudo-element or transform in the atlas grid/filters: test `overflow-x: clip` on `.page` or find the rule (DevTools → Layout) |
| R5 | Minor (content) | Schematic `m-oct-1` ("Coupe OCT maculaire normale"): the black ellipse of the foveal pit (`cy=78 ry=54`) goes above the frame (top at y = 24 vs frame at y = 30) and **covers the title**. Rings 1 and 2 overlap, so label "1" is hidden. Seen in Chromium and in the iOS evidence (`07-inv-oct`) | `#inv-oct`, practice item 1 | `data/inv-media.js` `m-oct-1`: reduce `ry` (or `cy`), or add a `clipPath` on the frame `rect(30,30,340,210)`. Spread hotspots 1 and 2 apart |
| R6 | Cosmetic | Old app name in the credits shown under 14 schematics: "Schéma original (ophtalmo app)" (28 FR/EN strings). Also in the 70 `credit` fields of `cases-open.js`, which are not displayed | `#inv-oct` item 1 | `data/inv-media.js` (and `data/cases-open.js`): "Ocelle" |
| R7 | Minor (web) | Offline: only images already viewed are cached | Visit `/`, go offline, open `#g-gpao` | `sw.js`: placeholder "photo disponible en ligne", or precache the practice/featured images |
| R8 | Process | iOS evidence is **older than cycles 4/5** (see §8.6) | — | Re-run `ios.yml` on HEAD |

### 8.4 EN coverage per route (share of French function words in `#view`, EN mode, 75 routes)

- **≥ 15 % French:**
  - a-anatomie 48 % (46 % at HEAD)
  - module-b 43 %
  - module-c 33 %
  - sources 32 %
  - a-physiologie 16 %
- **8–14 %:**
  - a-examen 14 %, a-imagerie 14 %
  - cas-b3 12 %
  - g-fermeture 11 %, g-dev 11 %
  - c-erosion 9 %, g-pxf 9 %
  - a-retine 8 %, g-secondaires 8 %
- **5–7 %:** about 25 fiches, plus inv-bscan, inv-oct, inv-fondoeil and associe. That level is mostly background noise ("et al." citations, eponyms) plus a few captions.
- **< 5 %:** 36 routes, including home, Learn, the investigations hub, cas-images, cas-vedette, quiz, the 12 cases, progression, atlas and the games.
- **Flashcards:** in a 15-card EN sample, 0 cards are mostly French (1/15 in pass 1).

### 8.5 Spot-check of 10 open-licence cases (`data/cases-open.js`, random sample, seed 20261122)

- **Method:** I read each image (`imgsrc3/web/IMG3-*.jpg`) and drew its hotspots on a copy (x, y and r in % of the width). I then played each case in the app at 390 px in FR and EN, before and after answering.
- **Credits:** before the answer, they show author + licence (linked: CC0, CC BY 4.0, CC BY-SA 3.0 "partage dans les mêmes conditions" / "share-alike"). After the answer, the "page source" link is added (Commons or PMC). The #sources credits table lists the IMG3 images, with 36 "BY-SA" mentions, inside a collapsed `<details>`.
- **Integrity of the 35 cases:** answer within range, one `why` per option, FR and EN everywhere, hotspots within 0–100, all images present, answer index spread 8/9/9/9.

| Case | Image / licence | Finding visible? | Hotspots | Clinical accuracy |
|---|---|---|---|---|
| oc-01 | IMG3-024, Häggström, CC0 | Yes: pigmented crescent at the temporal edge of the disc (left eye) | Decisive one on the lower part of the crescent (slightly low, acceptable). Disc and macula correct | Normal variant: correct |
| oc-02 | IMG3-028, Trobe, CC BY 3.0 | Yes: swollen disc, blurred margins, peripapillary haemorrhages | Disc and a haemorrhage: correct | "Papilloedème" reserved for raised intracranial pressure, urgent imaging: correct |
| oc-03 | IMG3-029, Bisht, CC BY-SA 4.0 | Yes: cherry-red spot, pale retina | On the cherry-red spot: correct | CRAO = stroke pathway, rule out GCA after 50: correct |
| oc-06 | IMG3-033, NEI, public domain | Yes: groups of exudates around the fovea ("PRETREATMENT") | Both on the exudates: correct | DME, anti-VEGF first line: correct |
| oc-13 | IMG3-041, Varas, CC BY 3.0 | Yes: pterygium reaching the pupil | Head and wing: correct | Excision with conjunctival autograft: correct |
| oc-16 | IMG3-053, Heilman, CC BY-SA 3.0 | Yes: right eye red, mid-dilated pupil (left of the image) | Pupil and red eye: correct | Lower IOP then LPI in both eyes: correct |
| oc-21 | IMG3-060, Ahuja, CC BY-SA 2.5 | Yes: blood filling the lower half of the anterior chamber | Correct | Hyphaema: IOP, shield, avoid NSAIDs/anticoagulants, sickle-cell screen: correct |
| oc-25 | IMG3-009, Chawang et al., CC BY 4.0 | Yes: choroidal domes at the arrows (A, B), CT (C) | On the arrow tips: correct | Traumatic choroidal detachment: correct |
| oc-26 | IMG3-010, Kim et al. (BMC Ophthalmol 2023), CC BY 4.0 | Yes: domes on B-scan (B), fold on OCT (C), resolution (E) | 4 hotspots on the right panels | Choroidal detachment from hypotony after SLT: correct |
| oc-33 | IMG3-057, Haight et al., CC BY 4.0 | Yes: rim-enhancing collection lateral to the right globe (left of the image) | On the arrowheads: correct | Orbital abscess, IV antibiotics + surgical opinion: correct |

**Result: 10/10 compliant.** Every claimed finding is visible, the hotspots land on it and the credits are displayed.

One remark, not a defect: under CC BY / BY-SA, changes must be indicated. The `credit` field of `cases-open.js` says "Redimensionnée; annotations : ophtalmo app", but the interface shows the catalogue credit (author · licence · source), which does not have that mention. The rings are an overlay and resizing is minor, so the risk is low. Adding "image redimensionnée, annotations superposées" next to the licence would cover it completely.

### 8.6 Latest iOS evidence (`/home/claude/ophtalmo-academie/ios-evidence/`)

- **Run:** 44942695151, commit `d0b6700` (2026-11-21 19:46Z). That is **10 commits behind HEAD**: before the end of cycle 3, and before the cycle 4/5 fixes (accessibility, locks, EN, dark mode).
- **Devices:** iPhone 17 Pro Max and **iPad Air 11″ (M4)**, iOS 26.5.
- **Results:** **9/9 on both devices**, `js_errors: []`. The offline step now reports **0 remote resources** (fonts are self-hosted).
- **Fixed since the first evidence set:**
  - No more blank screenshots.
  - `07-inv-oct` does show the OCT page.
  - No more date-suffixed duplicates.
  - Safe areas are correct (Dynamic Island, home indicator).
  - Light and dark mode render.
  - iPad layout is full width, with no clipping.
- **Still visible because the build is old:**
  - The "Module B locked" box (`04-fiche-top`, fixed since: D11).
  - The ring on option 1 after Ready (`09-practice-answer`, fixed on the web: D12).
- **Real content defect seen:** the title of the `m-oct-1` schematic is covered (R5).
- **Missing:** `03-home-en` was not captured on iPad.
- **Recommendation:** re-run `ios.yml` on HEAD, and add #cas-images (an oc-* case), #cas-vedette and a landscape screenshot to the self-test.

### 8.7 Final verdict

**Ready, with minor fixes.**
- **Web:** functionally clean on 328 route checks, 60 flows and offline. Accessibility: no critical issue left and one serious one (#a-anatomie, R2). Clinical sample: 25 items in pass 1 plus 10 open-licence cases in pass 2, with no error left.
- **Before an English campaign:** R1, which is the interactive figures, the anatomy explorer and the B/C comparison tables.
- **Before TestFlight:** a fresh iOS run on HEAD (R8) and the physician review (guideline 1.4.1).
- **Quick fixes still worth doing:** R2 (role="group" on the anatomy SVGs), R5 (`m-oct-1` ellipse), R6 (app name).
