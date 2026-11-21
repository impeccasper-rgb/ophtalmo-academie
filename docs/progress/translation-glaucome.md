# Translation FR→EN: glaucoma fiches, capsules, cases

Owned files: `data-en/fiches-glaucome.js`, `data-en/capsules-cases.js`, this file.
Conventions: same as docs/progress/translation.md (VA notation kept, decimal comma → point, Québec names kept, CUSM → MUHC, CCNI → NACI, "patron" → "attending", doses and units unchanged).

## Done (2026-11-21)
- **data-en/fiches-glaucome.js: 13 / 13 module C fiches** (G.OPH_EN.fiches): g-gpao, g-crise, g-fermeture, g-hto, g-papille, g-pxf, g-pigmentaire, g-neovasculaire, g-gpn, g-secondaires, g-cristallin, g-dev, g-postop.
- **data-en/capsules-cases.js**: capsules 2 / 2 (b-bases, c-bases); cases 10 / 10 (cas-a1, cas-b1–b4, cas-c1–c5).
- One `Object.assign(...)` block per item; the files load after every block.
- What is translated: every text field. What stays from FR: id, module, order, tags, `en`, figure objects, `kind`, `phase`, `at`, `pick`, `value`, disc parameters. Arrays are replaced wholesale, so each array item carries its non-text keys (kind, at, phase, value) copied from FR.
- Validated with node against FR: same array lengths, no keys missing from FR, `**bold**` count the same in every string, no French left (only "iris bombé", which is the English term).

## How it was built
A helper script (scratchpad, not in the repo) printed each item's text fields as numbered lines, read back the numbered EN lines, put them in a copy of the FR object and appended the block. To redo one item: replace its block in the file.

## Terms to check (unsure)
- Mnemonics adapted to English: g-hto "APÉCP" → "APTCP" (Age, Pressure, Thin cornea, C/D, PSD); g-crise "Baisser, Myosis, Percer" → "Lower, Constrict, Laser"; g-neovasculaire "DOC / IBBD" → "DCC / IBLD" (Diabetes, CRVO, Carotid / Inject, Burn, Lower, Drain); g-cristallin "gros, fuit, morceaux, déplacé" → "swollen, leaking, in pieces, displaced". The rest already work in English (4 P + G, 5 Rs, 5 Ps, TIPS, I Can't See Til Schwalbe, ICE).
- g-gpn "PACI": spelled in English as missed **P**ressure, **A**ngle closing intermittently, **C**ompression, **I**schemia. hy.js g-gpn kept PACI unchanged; the hy.js owner could use this same spelling.
- "Guide optométrique canadien GPAO (MacIver 2017)" → "Canadian optometric POAG guideline"; the official English title may differ.
- "Règlement sur les médicaments qu'un optométriste peut administrer ou prescrire" → "Regulation respecting the medications an optometrist may administer or prescribe" (official English title not checked).
- Neovascular glaucoma timing: the fiche says "90-day glaucoma", case cas-c3 says "100-day glaucoma". Both kept as in the source; the FR content should pick one.
- "red disease" (OCT false positive) and "pattern deviation" kept as English terms.
- "cellules ICE à point central clair" → "ICE cells: large, dark, with a light central spot".
- g-cristallin "imbibition hématique" → "corneal blood staining"; "fausse route" → "false passage".
- "à conjonctive ouverte" (XEN/PreserFlo) → "open conjunctiva"; "par l'extérieur / l'intérieur" → "ab externo / ab interno".

## Remaining
Nothing for this scope. A proofread by an English-speaking ophthalmologist of the mnemonics above would be useful.
