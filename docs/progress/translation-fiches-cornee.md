# Translation FR→EN: cornea fiches (module B)

Owned file: `data-en/fiches-cornee.js` (overlay `G.OPH_EN.fiches[id]`, one `Object.assign` block per fiche, so the file loads after every append).

## Done (2026-11-21)
- **14 / 14 fiches**: c-bacterienne, c-herpes, c-secheresse, c-surface, c-erosion, c-keratocone, c-fuchs, c-atypiques, c-brulure, c-pterygion, c-peripherie, c-depots, c-dystrophies, c-greffe. Complete.
- Fields translated: title, oneLiner, definition, anatomy.text, causal (title, steps, levers), risk, presentation, exam (signs, tests), ddx, redFlags, cat (algo, phases, local), treatments, pearls, mnemonic, compare (title, captions, reveal).
- Not repeated (kept from FR via deep merge): id, module, order, tags, `en`, sources, every `figure` object (anatomy.figure, compare.normal/patho.figure).
- Arrays are replaced wholesale, so structural keys inside arrays are repeated verbatim: `kind` (causal.steps), `at` (causal.levers), `phase` (cat.phases).
- Validated with a script (scratchpad check.js): every overlay key exists in FR, array lengths identical, every string field of array items present, kind/at/phase identical to FR, `**bold**` count identical per string. Load check passes (14 keys).

## Conventions (in addition to docs/progress/translation.md)
- `title` set to the English name (the FR `en` field is left untouched).
- Learner glosses of the form "terme FR (English term)" collapsed to the English term; plain-language explanations in parentheses kept.
- Dosing: DIE → "once daily"; TID/BID/PO kept; "5×/j" → "5×/day"; "j" → "days".
- Canadian/Québec: CUSM → MUHC; CCNI → NACI; Santé Canada → Health Canada; ITSS → STBBI; MADO kept with gloss "notifiable diseases"; INESSS, CNESST, CHUM, HMR, CHU de Québec, Centre antipoison du Québec kept by name (poison control glossed); FDS → SDS.
- Acronyms switched: TAAN→NAAT, IAC→CAI, KLS→SLK, DPP→PPCD, AJI→JIA, PKR→PRK, FSC→CBC, VS→ESR, VIH→HIV, VPH→HPV, AINS→NSAIDs, PIO→IOP.
- "patron" → "attending".
- Cross-references "(fiche X)" → "(see X fiche)" using the English fiche title.

## Mnemonics adapted
- c-erosion "ÉVERSE" kept as **EVERSE**: Evert, Vision, Exclude, Refuse take-home anesthetic, Skip the patch, Explain (same 6 letters, same bold count).
- c-peripherie Terrien "T" mnemonic rebuilt with T words: Tranquil, Top, Trench, Turned (against the rule), inTact.
- c-dystrophies "Marilyn Monroe…" was already English; letter mapping kept (Macular-Mucopolysaccharide-Alcian, Granular-Hyaline-Masson, Lattice-Amyloid-Congo).
- c-greffe RSVP: Redness, Sensitivity to light, Vision ↓, Pain (same as hy c-greffe).
- c-atypiques: "Lentille + Eau + Douleur" → "Lens + Water + Severe pain"; "Branche + bords Plumeux + Satellites" → "Branch + Feathery borders + Satellites" (not an acronym in either language).

## Terms to double-check (unsure)
- c-fuchs: "phaco seule, protectrice" rendered "phaco alone, with endothelial protection" (FR elliptical).
- c-bacterienne: "pansement fermé" → "pressure patch"; "gouttes fortifiées" → "fortified drops"; "Hôpital général juif" → "Jewish General Hospital".
- c-brulure: "lactate Ringer" → "Ringer lactate"; "soluté" → "IV solution"; "baguette de verre" → "glass rod" (symblepharon prevention).
- c-surface: "pavés" → "cobblestones"; "mucus filant" → "ropy mucus"; "ulcère en bouclier" → "shield ulcer".
- c-depots: "imprégnation hématique" → "corneal blood staining"; "vaisseaux fantômes" → "ghost vessels"; "œil phtisique" → "phthisical eye".
- c-peripherie: "bulle" (in dellen risk list) rendered "bleb" (assumed filtering bleb); "intervalle clair" → "lucid interval".
- c-keratocone: "dépistage" offered to relatives → "screening"; "goutte d'huile" → "oil droplet sign".
- c-greffe: "taches blanches de Krachmer" → "Krachmer spots"; "injection ciliaire" → "ciliary flush".
- c-secheresse: lotilaner "approuvé aux É.-U." → "approved in the US".
