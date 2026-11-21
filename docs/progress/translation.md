# Translation FR→EN (role: medical translator)

Owned files: `data-en/hy.js`, `data-en/quiz.js`, this file.
Format: overlays per docs/PLATFORM.md i18n (`G.OPH_EN.hy[key]`, `G.OPH_EN.quiz[id]`, same field names, arrays replaced wholesale).

## Done (2026-11-21)
- **data-en/hy.js: 64 / 64 keys** (hy-cornee 15, hy-glaucome 14, hy-module-a 35). Complete.
  - Validated: every FR key has an EN entry; array lengths match for essentials/cloze/triage/cues; each cloze has exactly one `[[answer|synonyms]]` blank; triage `u` values identical to FR (urgent/rapide/routine); `**bold**` count per essential identical to FR.
- **data-en/quiz.js: 67 / 190 items.**
  - quiz-a.js: 36 / 36 (A-001 … A-036). Complete.
  - quiz-b.js: 31 / 36 (B-001 … B-031). Remaining: B-032 … B-036.
  - quiz-c.js 0/20, quiz-c2.js 0/18, quiz-photos.js 0/20, ext-a5-a 0/9, ext-a5-b 0/8, ext-cornee-a 0/8, ext-cornee-b 0/8, ext-glaucome-a 0/8, ext-glaucome-b 0/4, ext-photos 0/15 (ext-links.js has no quiz items).
  - Overlay carries only stem, options, explain, why. answer, type, level, topic, trap, figure stay from FR (not repeated).
  - Validated: options/why lengths match FR, `**bold**` count in explain matches FR, no stray ids.
  - Each batch is its own `Object.assign(G.OPH_EN.quiz, {...});` so the file stays loadable after every append.

## Remaining
1. Quiz items in load order, from B-032 on: rest of quiz-b, then quiz-c, quiz-c2, quiz-photos, ext-a5-a, ext-a5-b, ext-cornee-a, ext-cornee-b, ext-glaucome-a, ext-glaucome-b, ext-photos (123 items).
2. Optional proofreading pass by an English-speaking ophthalmologist on the terms below.

## How to resume
- Dump FR items in load order (index a..b):
  `node -e "global.window=undefined;var G=globalThis;G.OPH={};['quiz-a','quiz-b','quiz-c','quiz-c2','quiz-photos','ext-a5-a','ext-a5-b','ext-cornee-a','ext-cornee-b','ext-glaucome-a','ext-glaucome-b','ext-photos'].forEach(f=>require('/home/claude/ophtalmo/data/'+f+'.js'));G.OPH.quiz.slice(67,74).forEach(x=>console.log(JSON.stringify(x)))"`
- Append a new `Object.assign(G.OPH_EN.quiz, {...});` block to data-en/quiz.js.
- Check: `node -e "global.window=undefined;var G=globalThis;G.OPH={};G.OPH_EN={};require('/home/claude/ophtalmo/data-en/quiz.js');console.log(Object.keys(G.OPH_EN.quiz).length)"`

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
- "cellules/mm²" rendered "cells/mm²"; "pression de gonflement" → "swelling pressure".
- B-025: "Îles-de-la-Madeleine", B-009 "Montérégie" kept as place names.
