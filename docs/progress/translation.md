# Translation FR→EN (role: medical translator)

Owned files: `data-en/hy.js`, `data-en/quiz.js`, this file.
Format: overlays per docs/PLATFORM.md i18n (`G.OPH_EN.hy[key]`, `G.OPH_EN.quiz[id]`, same field names, arrays replaced wholesale).

## Done (2026-11-21, cycles 1–3) — all owned files complete
- **data-en/hy.js: 64 / 64 keys** (hy-cornee 15, hy-glaucome 14, hy-module-a 35).
  - Validated: every FR key has an EN entry; array lengths match for essentials/cloze/triage/cues; each cloze has exactly one `[[answer|synonyms]]` blank; triage `u` values identical to FR (urgent/rapide/routine); `**bold**` count per essential identical to FR.
- **data-en/quiz.js: 190 / 190 items** (cycle 1: 67, cycle 2: +65, cycle 3: +58).
  - quiz-a 36, quiz-b 36, quiz-c 20, quiz-c2 18, quiz-photos 20, ext-a5-a 9, ext-a5-b 8, ext-cornee-a 8, ext-cornee-b 8, ext-glaucome-a 8, ext-glaucome-b 4, ext-photos 15 (ext-links.js has no quiz items).
  - Overlay carries only stem, options, explain, why. answer, type, level, topic, trap, figure stay from FR.
  - Validated: options/why lengths match FR, `**bold**` count in explain matches FR, no stray ids.
- **data-en/glossary.js: 353 / 353 terms** (capsules.js 182 + ext-a5-a/b, ext-cornee-a/b, ext-glaucome-a/b), format `{ "<frTerm>": { term, def } }`.
  - Validated: no missing/extra keys; no two FR terms map to the same EN term (case-insensitive); no EN term equals another FR key (which src/i18n.js would overwrite). Simulated the i18n.js merge: 353 → 353 entries.
  - Near-synonym pairs kept distinct on purpose: "intervalle lucide" → "lucid interval" / "intervalle clair" → "clear interval"; "imprégnation hématique" → "corneal blood staining" / "imbibition hématique" → "hematic imbibition of the cornea"; "UGH" / "syndrome UGH" → "UGH" / "UGH syndrome"; "indentation" → "indentation gonioscopy"; abbreviations and their spelled-out forms are separate entries (KP / keratic precipitates, PAS / peripheral anterior synechiae, SLT / selective laser trabeculoplasty, DPP → PPCD / posterior polymorphous corneal dystrophy, DPV → PVD / posterior vitreous detachment).
- All files are picked up automatically by tools/build_web.py (glob of data-en/*.js). Working tree: /home/claude/ophtalmo-academie only.

## Remaining
- Nothing in scope. Optional: proofreading by an English-speaking ophthalmologist on the terms below.

## How to check
`node -e "global.window=undefined;var G=globalThis;G.OPH={};G.OPH_EN={};['hy','quiz','glossary'].forEach(f=>require('/home/claude/ophtalmo-academie/data-en/'+f+'.js'));console.log(Object.keys(G.OPH_EN.hy).length,Object.keys(G.OPH_EN.quiz).length,Object.keys(G.OPH_EN.glossary).length)"` → 64 190 353

## Conventions used
- "ton patron" → "your attending"; "externe" → "medical student"; second person kept ("you").
- FR stems gloss English terms in parentheses for learners (e.g. "pachymétrie (pachymetry : …)"): in EN, the redundant English term is dropped and the plain-language definition kept.
- Visual acuity kept in the source notation (6/x, with 20/x only where FR gives it). Decimal comma → point (0,3 → 0.3); all numbers, doses and units otherwise unchanged.
- Québec references kept by name: SAAQ, CNESST, RAMQ, CHUM, HMR, CHU de Québec; CUSM given as MUHC (its official English name); CCNI given as NACI.
- North American spelling and usage: anesthesia, edema, hemorrhage, ED, licence (Canadian, in SAAQ item).
- Acronyms switched to their EN forms: PIO→IOP, AV→VA, DPAR→RAPD, NOIA→AION, OACR→CRAO, OVCR→CRVO, OBVR→BRVO, GPAO→POAG, GPN→NTG, HTO→OHT, KPS→SPK, SCP→PSC, CRSC→CSCR, DMLA→AMD, DPV→PVD, TAAN→NAAT, IAC→CAI, ECC→CCT, EC→CT, VS→ESR.
- Mnemonic "DOC" (diabète, occlusion, carotide) rendered "DCC" (diabetes, CRVO, carotid) in hy g-neovasculaire.

## Terms to double-check (unsure)
- hy g-gpn: "PACI" mnemonic kept as is (FR acronym: PIO manquée, Angle intermittent, Compression, Ischémie); the English words do not spell it.
- hy c-greffe / B-028: "RSVP" kept; EN expansion "Redness, Sensitivity to light, Vision loss, Pain" (standard).
- "excavation" rendered "cupping"/"cup"; "anneau neurorétinien" "neuroretinal rim".
- "déviation corrigée" rendered "pattern deviation" (Humphrey term).
- "gâchette facile" rendered "trigger-happy" (false-positive patient).
- "palissade" rendered "lattice" (lattice degeneration); "indentation" in retina items rendered "scleral depression", in gonioscopy items kept "indentation".
- "bloc pupillaire inversé" → "reverse pupillary block"; "phase éteinte" → "burnt-out phase".
- "signe du drapeau argentin" → "Argentinian flag sign".
- "mal-direction" → "aqueous misdirection" (cloze synonyms include "malignant glaucoma").
- Glossary acronyms switched to EN forms as keys' display terms: GPAO→POAG, GPN→NTG, HTO→OHT, APP→PPA, IAC→CAI, OVCR→CRVO, OACR→CRAO, OBAR→BRAO, OBVR→BRVO, DMLA→AMD, CRSC→CSCR, DPAR→RAPD, NOIA→AION, PKR→PRK, KLS→SLK, TAAN→NAAT, ITSS→STBBI, AINS→NSAIDs, PIO→IOP.
- B-214: MADO kept as "reportable disease (MADO)"; "guide québécois" → "the Québec guide".
- "cellules/mm²" rendered "cells/mm²"; "pression de gonflement" → "swelling pressure".
- B-025: "Îles-de-la-Madeleine", B-009 "Montérégie", C-007 "Laval", C-012 "Nunavik" kept as place names.
- C-007: "Règlement O-7, r. 11.1" rendered "Regulation O-7, r. 11.1" (Québec optometry prescribing regulation); content paraphrased faithfully, not checked against the regulation text.
- C-012: "ISGEO classification" kept; PACS/PAC/PACG acronyms already English.
- quiz-photos items cite "the source" (photo caption source); kept as "according to the source". C-108 quotes an English source caption verbatim.
- "rubéose irienne" → "rubeosis iridis"; "kissing choroidals" kept; "croissant gris" → "gray crescent" (US spelling of the established term).
- "bulle enkystée" → "encapsulated bleb"; "lyse de suture au laser" → "laser suture lysis"; "suture amovible" → "releasable suture".
