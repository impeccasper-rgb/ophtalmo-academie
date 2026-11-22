# Revue pédagogique — Investigations et cas en images

Propriétaire : pédagogie clinique. Fichiers : `data/investigations.js` (`G.OPH.inv`, `G.OPH.invPractice`, `G.OPH.invMediaRequests`, + médias propres `G.OPH.invMedia` aux nouveaux ids) et `data/cases-images.js` (`G.OPH.imageCases`, `G.OPH.imageCasesMedia`).
Public : externes motivés et R1. Logique : **Observe → Réponds → Révèle**. Dernière mise à jour : 2026-11-21 (cycle 2).

## Principes appliqués
- Phrases courtes, haut rendement; termes anglais entre parenthèses à la 1re occurrence (FR Québec). Version anglaise rédigée pour sonner naturelle, pas traduite mot à mot.
- Contenu standard (niveau AAO BCSC / PPP), aligné sur `docs/FACTS.md` (Shaffer, Hodapp, ISNT, fiabilité du champ, ISGEO).
- Questions bâties sur ce que l’image **et** sa légende EyeRounds montrent réellement. Les prémisses cliniques (« douleur intense… ») sont des mises en situation; le contexte propre au patient n’est repris que s’il vient de la page source.
- **Droits** : plus aucune image sans licence CC dans le contenu (vérifié par script contre les catalogues). Images CC affichées entières; hotspots = calque séparé.
- Chaque option a son « pourquoi »; la bonne réponse commence par « Juste : » / « Correct: ». Position de la bonne réponse répartie (A/B/C/D) dans les deux fichiers.

## Contenu
| Examen | Outil | how | normal | keys | pitfalls | Items (niv. 1/2/3) |
|---|---|---|---|---|---|---|
| bscan — Échographie B | bscan-probe | 5 | 5 | 6 | 4 | 7 (3/2/2) |
| ascan — Échographie A, biométrie | ascan-sim | 6 | 4 | 6 | 4 | 7 (2/3/2) |
| oct — OCT macula, papille, AS-OCT | oct-layers | 6 | 5 | 6 | 4 | 9 (3/3/3) |
| gonio — Gonioscopie | gonio-grader | 6 | 4 | 6 | 4 | 7 (1/3/3) |
| fondoeil — Fond d’œil | fundus-explorer | 5 | 5 | 6 | 4 | 8 (3/4/1) |
| cv — Champ visuel Humphrey | vf-reader | 6 | 4 | 6 | 4 | 8 (3/5/0) |
| **Total Investigations** | | | | | | **46** |
| **Cas en images** (`imageCases`) | — | | | | | **35** : cornée 12, glaucome 10, général 13 (niv. 10/14/11) |

## Cycle 2 — ce qui a changé
**Images sans licence CC retirées** (OPH-189, 190, 191, 203, 205, 209, 292, 293) :
| Item | Avant | Après |
|---|---|---|
| p-bscan-2 | OPH-209 | `m-bscan-2` = schéma svg déjà fait par le rôle visuels (contenu inchangé) |
| p-bscan-3 | OPH-205 (position de sonde T12) | `gen bscan:vh:long:85` — nouvelle question : hémorragie du vitré à gain élevé, rétine à plat (niv. 1) |
| p-oct-6 | OPH-191 (RNFL « couleur, pas chiffre ») | **OPH-308** (CC) — mégalopapille + glaucome sévère : grand disque ≠ normal, la RNFL tranche (niv. 3) |
| p-gonio-1 | OPH-292 (technique) | `gen gonio:nv` — néovaisseaux de l’angle (niv. 2) |
| p-fondoeil-3 | OPH-203 | **OPH-307** (CC) — C/D ≈ 0,9 (légende source) |
| p-fondoeil-4 | OPH-189 | **OPH-136** (CC) — encoche inférotemporale (légende source) |
| p-cv-3 | OPH-190 | `gen vf:arcuate` — même question (méridien horizontal, papille inférieure) |
| p-cv-4 | OPH-293 (quel œil?) | `gen vf:fp` — fiabilité : faux positifs 27 % = non interprétable (niv. 1) |
| **nouveaux** | — | p-oct-9 `gen oct:srf` (liquide sous-rétinien, CRSC); p-cv-8 `gen vf:altitudinal` (défaut altitudinal, NOIA) |
Les nouveaux médias sont définis dans `data/investigations.js` sous de **nouveaux ids** (`m-*-g`, `m-*-b`) fusionnés dans `G.OPH.invMedia` sans écraser `data/inv-media.js`. Les anciennes entrées restreintes de `inv-media.js` (`m-bscan-3`, `m-oct-6`, `m-gonio-1`, `m-fondoeil-3`, `m-fondoeil-4`, `m-cv-3`, `m-cv-4`) ne sont plus référencées : le rôle visuels peut les supprimer.

**Doutes du cycle 1 résolus**
1. p-bscan-7 : la source EyeRounds dit « sclera almost 2.4 mm thick », longueur axiale 17,14/17,04 mm. Texte corrigé (sclère postérieure normale ≈ 1 mm, donnée anatomique standard); l’ancien « paroi normale 1–1,5 mm » est retiré.
2. p-ascan-4 : le schéma svg du rôle visuels étiquette les tracés **A** (haut) et **B** (bas) → texte remis en A/B.
3. OPH-136/135 : la source ne donne pas la latéralité; l’image montre l’excavation qui atteint le rebord en bas à gauche et les vaisseaux qui émergent à droite → avec la légende « inferotemporal », c’est un OD. La question évite d’affirmer l’œil et guide par l’image (vaisseaux côté nasal = à droite).

## Cycle 8 — cornée : arbres v2, Traitement pour l’externe, QCM sans fuite (2026-11-21)
- **Arbres** (14 fiches, FR + EN) réécrits au modèle v2 (`yesGo`/`noGo`, `cont` retiré). Contrôle par script : graphe acyclique, tous les nœuds atteignables, chaque fin de branche porte une action, aucune feuille de remplissage (« question suivante », « continuer »), question ≤ 8 mots, branche ≤ 12 mots.
  - c-herpes : la prophylaxie HEDS est atteinte depuis les chemins HSV épithélial et stromal; le zona y mène aussi (ZEDS « à discuter »).
  - c-keratocone : la réhabilitation visuelle est atteinte après le CXL de l’enfant.
  - c-bacterienne : la perforation est vue en 2e nœud, avant les cultures.
- **Traitement** (`treatment` au niveau de la fiche, §9) :
  - `first` sépare « Externe / 1re ligne » (générique, posologie) et « Ophtalmologiste ».
  - `refer` donne le délai (immédiatement / le jour même / dans les 24–48 h / cette semaine / suivi régulier) et le motif.
  - `pitfall` nomme le médicament ou le geste (ex. « Prednisolone sur une dendrite », « Kétorolac ou autre AINS topique sur une cornée amincie », « Pansement occlusif chez un porteur de lentilles »).
  - Les `refer` par traitement, écrits du point de vue du spécialiste, sont retirés; « suivi de la PIO » de c-surface devient un piège (stéroïde sans suivi).
- **Voir** : « En deux phrases » ≤ 45 mots, découpé par des `\n` en lignes de ≤ 125 caractères, soit environ 3 lignes sur téléphone. *Web : afficher les `\n` (`white-space: pre-line` sur la callout).*
- **Mini-QCM** : 7 items demandaient le diagnostic de la fiche lue (B-008, B-015, B-019, B-023, B-025, B-103, B-104). Ils demandent maintenant la conduite, l’étape suivante ou la prévention (FR + overlay EN), sans changer l’index de la réponse; la bonne option n’est plus la plus longue.
- **Mots visibles** (même script) : FR 5143 → 4942, EN 4998 → 4766; 0 écran hors plafond. Avant le cycle 7 : FR 6605, EN 6360.

## Cycle 7 — fiches cornée (module B) allégées, arbres et traitement (2026-11-21)
Cadre : `docs/STYLE-PEDAGO.md` (budgets par écran au niveau « Fondamentaux »). Fichiers : `data/fiches-cornee.js`, `fiches-cornee-2.js`, `ext-cornee-a.js`, `ext-cornee-b.js`, `data/hy-cornee.js`, overlays `data-en/fiches-cornee.js` et `data-en/hy.js` (clés cornée seulement). Tableaux FR/EN gardés identiques en nombre et en ordre (vérifié par script).

**Mots visibles par défaut** (en-tête + Voir + Comprendre + Décider hors arbre + arbre + questions du patron; mêmes règles avant et après; Décider avant = drapeaux + traitements « nom, comment, pourquoi »; après = 3 drapeaux + cartes Traitement) :

| Fiche | FR avant → après | EN avant → après | Voir FR (≤ 60) | Comprendre FR (≤ 120) | Décider FR hors arbre (≤ 180) | Arbre : q max / branche max (mots) |
|---|---|---|---|---|---|---|
| c-secheresse | 416 → 349 | 377 → 327 | 65 → 50 | 118 → 102 | 131 → 103 | 11/11 → 7/7 |
| c-bacterienne | 461 → 354 | 456 → 350 | 60 → 46 | 128 → 96 | 137 → 96 | 7/15 → 6/9 |
| c-atypiques | 458 → 360 | 425 → 340 | 68 → 50 | 114 → 96 | 149 → 103 | 13/11 → 8/8 |
| c-herpes | 478 → 359 | 471 → 357 | 78 → 53 | 120 → 107 | 128 → 97 | 12/23 → 7/10 |
| c-keratocone | 429 → 358 | 409 → 340 | 52 → 46 | 119 → 99 | 131 → 104 | 6/12 → 6/7 |
| c-fuchs | 482 → 365 | 467 → 366 | 90 → 59 | 113 → 105 | 157 → 106 | 14/20 → 6/8 |
| c-erosion | 547 → 381 | 530 → 377 | 83 → 58 | 144 → 108 | 201 → 116 | 11/14 → 6/8 |
| c-pterygion | 474 → 348 | 461 → 340 | 88 → 55 | 126 → 99 | 157 → 96 | 8/8 → 7/7 |
| c-greffe | 476 → 363 | 447 → 350 | 73 → 52 | 118 → 94 | 158 → 105 | 8/13 → 8/9 |
| c-brulure | 518 → 402 | 510 → 385 | 80 → 57 | 127 → 111 | 180 → 128 | 9/19 → 6/8 |
| c-dystrophies | 444 → 371 | 433 → 366 | 77 → 55 | 136 → 108 | 110 → 90 | 6/11 → 6/9 |
| c-depots | 484 → 358 | 469 → 357 | 72 → 51 | 160 → 101 | 132 → 97 | 8/10 → 7/7 |
| c-surface | 442 → 375 | 433 → 360 | 76 → 55 | 133 → 112 | 123 → 115 | 8/13 → 8/8 |
| c-peripherie | 496 → 400 | 472 → 383 | 82 → 53 | 119 → 99 | 138 → 115 | 8/12 → 6/8 |
| **Total (14)** | **6605 → 5143** (-22 %) | **6360 → 4998** (-21 %) | | | | |

Les 14 fiches respectent maintenant les plafonds (Voir ≤ 60, Comprendre ≤ 120, Décider ≤ 180, ≤ 5 points essentiels, arbre : question ≤ 8 mots et branche ≤ 12 mots), en FR et en EN. Au rendu (Playwright, 390 px), l’arbre affiche bien la branche qui continue et les 4 cartes Traitement.

**Ce qui a changé, par fiche**
- **En deux phrases** (`definition`) : ≤ 2 phrases, environ 30–35 mots. Les détails propres qui en sortent sont ajoutés à `anatomy.text`, sous « Pour aller plus loin » (zona, pinguécula et OSSN, causes de PUK, formes cornéennes des conjonctivites, séquelle de brûlure).
- **Arbre** (`cat.algo`) : réécrit en chaîne de décisions, avec `cont: "yes"|"no"` (la branche qui mène à la question suivante; absent sur le dernier nœud, comme le prévoit `src/tree.js`).
- **Traitement** : chaque traitement garde ses champs détaillés (`how`, `why`, `pros`, `cons`, `cx`) et reçoit `dose` (1re ligne, posologie usuelle), `refer` (quand référer), `pitfall` (piège) et `qc` (note québécoise, seulement si utile). Un bloc `treatment: { first, refer, pitfall, qc }` est généré à partir de ces champs pour les 4 cartes de `txBlock`.
- **Drapeaux rouges** : ≤ 3. Les items en double sont fusionnés; « Wilson » (c-depots) passe dans `anatomy.text`.
- **Points essentiels** : 4–5 points. Un point par fiche est retiré dans 9 fiches seulement quand il répétait un drapeau rouge, le moyen mnémotechnique ou l’arbre (ex. RSVP, carcinome sébacé, OSSN, gonocoque, PUK).
- **Moyens mnémotechniques** : raccourcis. Les listes longues (signes du kératocône, phrase « Marilyn Monroe… », couches et couleurs des dépôts) passent dans `anatomy.text`.
- Rien de supprimé hors redondance; aucun contenu clinique nouveau sauf les posologies usuelles des cartes (doses standard, à relire ci-dessous).

**À relire (posologies ajoutées dans les cartes)** : larmes sans agent de conservation 4–6×/j; cyclosporine 0,05–0,09 % ou lifitégrast 5 % 2×/j; moxifloxacine 0,5 % aux heures; vancomycine (ou céfazoline) + tobramycine fortifiées alternées aux heures; PHMB ou chlorhexidine 0,02 % aux heures; natamycine 5 % aux heures; voriconazole 1 % aux heures; acyclovir 400 mg 5×/j ou valacyclovir 500 mg 3×/j (épithéliale), prophylaxie acyclovir 400 mg 2×/j (HEDS); trifluridine 1 % 9×/j; NaCl 5 % goutte 4×/j ou onguent au coucher; érythromycine onguent 4×/j; doxycycline 50 mg 2×/j × 2 mois (érosions) ou 100 mg 2×/j (brûlure, fonte); vitamine C 1–2 g/j; olopatadine 0,1 % ou kétotifène 0,025 % 2×/j; fluorométholone 0,1 % 4×/j.

**Pour le rôle web** : quand `f.treatment` est présent, `txBlock` n’affiche plus la liste détaillée `f.treatments` (comment, pourquoi, avantages, limites, complications) à aucun niveau. Proposer de l’ajouter dans « Pour aller plus loin » de l’écran Décider.

Contrôle des mots : script `wc.js` (écrans visibles par défaut, FR et EN fusionnés), reproduit dans `docs/progress/pedagogy.md`.

## Cycle 4 — indice de longueur des réponses et corrections (2026-11-21)
**Constat (docs/TEST-REPORT.md, D2)** : la bonne réponse était l’option la plus longue dans 74 % des items Investigations, 86 % des cas en images et 69 % des cas sur images libres (`cases-open.js`).
**Méthode** : bonnes réponses resserrées sur le seul diagnostic ou geste (le « parce que » est déjà dans `why`/`reveal`; `why` complété quand un détail retiré n’y figurait pas : ic-c03, ic-c08, ic-c06, oc-19), distracteurs allongés avec un détail clinique aussi précis (ex. « Décollement choroïdien (dômes lisses qui épargnent la papille) »). Ensuite, rééquilibrage pour éviter l’indice inverse : la bonne réponse redevient la plus longue dans ≈ 20 % des items, et la plus courte dans ≈ 20 %. Sens, bonne réponse et explications inchangés. `cases-open.js` : positions de la bonne réponse réparties (avant : 15/16/4/0; après : 8/9/9/9).

| Fichier | Plus longue FR avant → après | EN avant → après | Plus courte FR / EN après |
|---|---|---|---|
| data/investigations.js (46) | 74 % → **22 %** | 74 % → **20 %** | 20 % / 24 % |
| data/cases-images.js (35) | 86 % → **23 %** | 89 % → **20 %** | 20 % / 20 % |
| data/cases-open.js (35) | 69 % → **20 %** | 69 % → **17 %** | 23 % / 23 % |

Contrôle (à la racine du dépôt) :
```
node -e "global.window=undefined;global.OPH={};for(const[f,k]of[['data/investigations.js','invPractice'],['data/cases-images.js','imageCases'],['data/cases-open.js','openCases']]){require('./'+f);const a=OPH[k];for(const lg of['fr','en']){let n=0,s=0;a.forEach(p=>{const L=p.options.map(o=>o[lg].length),M=Math.max(...L),m=Math.min(...L);if(L[p.answer]===M&&L.filter(x=>x===M).length===1)n++;if(L[p.answer]===m&&L.filter(x=>x===m).length===1)s++});console.log(f,lg,'longest',Math.round(100*n/a.length)+' %','shortest',Math.round(100*s/a.length)+' %')}}"
```
Cible : plus longue ≤ 30 % et plus courte ≤ 30 % dans chaque fichier, en FR et en EN.

**Corrections cliniques (revue de test §5)**
- ic-c06 (OPH-040) : hotspot déplacé sur les stries visibles (x 56, y 56, r 10, vérifié sur grille zoomée); énoncé, alt et libellé ne disent plus « verticales » (stries obliques sur cette photo; « classiquement verticales » reste dans l’explication).
- p-oct-8 : `why[3]` FR « …sans contact » → « …sans toucher l’œil ».
- p-ascan-5 (`data/inv-media.js`, m-ascan-5) : anneaux déplacés à côté des chiffres (OD x 45, OS x 91, Δ x 68; vérifié au rendu). Les deux lignes du schéma « écart > 0,3 mm inexpliqué → remesurer » donnaient la réponse avant la question : retirées (l’explication les reprend).
- Quiz C-012 (FR `data/quiz-c.js` + EN `data-en/quiz.js`) : le seuil ≥ 180° est attribué au PPP de l’AAO; l’ISGEO initiale (Foster 2002) exigeait ≥ 270°.
- À signaler (fichier hors périmètre) : `docs/FACTS.md` ligne 154 attribue aussi « PACS ≥ 180° » à l’ISGEO; même correction à faire.

## Démo (marketing)
- **Vedette (`featured:true`) : `ic-c03`** (OPH-070) — ulcère à Pseudomonas chez un porteur de lentilles. Image spectaculaire et nette, un seul signe décisif (infiltrat stromal dense et suppuré), message utile à tout externe (pas de pansement, pas de corticoïde, cultures + fortifiés). Plus parlant que p-fondoeil-6 pour un public large.
- Autres très bons : `p-fondoeil-6` (OACR, tache rouge cerise), `ic-x07` (OACR avec artère ciliorétinienne : moment « aha »), `p-oct-2` (traction vitréomaculaire), `ic-g06` (néovaisseaux iriens, cercle de la source).
- p-oct-6 n’est plus un item démo (image d’origine retirée).

## Lacunes signalées
- **Cellulite orbitaire** : aucune image (CC ou non) au catalogue → pas de cas. À combler par une source CC BY (PMC OA) ou un schéma.
- **Œdème papillaire** : déjà couvert par p-fondoeil-5 (OPH-219); pas de deuxième photo distincte.
- Précipités « en graisse de mouton » (OPH-350/351) écartés : sur OPH-350, les dépôts paraissent petits; enseigner « gros et graisseux » sur cette image serait trompeur.

## Corrections outils (src/investigations.js — à appliquer par le rôle « exercices interactifs »)
Relu : EYES/ascanSpikes/SPIKE_NAMES (A-scan), BS_INFO/BS_ORI (B-scan), OCT_LAYERS/OCT_FLUID, SHAFFER/GONIO_BANDS/GONIO_VAR, VF_CASES/VF_EXPL/VF_IDX/GHT_TXT, FUNDUS_REG/FUNDUS_OV, textes de la fixture. **L’essentiel est exact** (ordre des pics, ordre des couches OCT, correspondance Shaffer ↔ structure, seuils FL > 20 % / FP > 15 % / FN > 33 %, GHT, orientation des champs OD/OS, œil droit du fond d’œil). Corrections, par priorité :

| # | Ligne | Texte actuel | Correction proposée | Pourquoi |
|---|---|---|---|---|
| 1 | 766 (`BS_ORI.trans`) | « …Montre l’étendue circonférentielle; la papille n’est pas dans la coupe. » / « …the disc is not in the section. » | « Transverse : sonde parallèle au limbe. Montre l’étendue latérale (circonférentielle) d’une lésion; l’ombre du nerf optique n’apparaît que dans les coupes postérieures (sonde près du limbe) et sert alors de repère. » / « Transverse: probe parallel to the limbus. Shows the lateral (circumferential) extent of a lesion; the optic nerve shadow appears only on posterior sections (probe near the limbus) and is then used as a landmark. » | Inexact : le tutoriel EyeRounds d’échographie utilise l’ombre du nerf pour s’orienter dans les coupes transverses postérieures. |
| 2 | 675 (`as.cap`) | « A-scan de contact, œil phake — vitesse moyenne ~1 550 m/s » | « A-scan, œil phaque — vitesse moyenne ≈ 1 550 m/s » | Orthographe (« phaque »). De plus, le tracé montre une cornée à double pic bien séparée de la sonde, aspect typique de l’**immersion** (en contact, le pic cornéen se confond avec l’écho de la sonde) : retirer « de contact » ou écrire « en immersion ». Ajuster alors la réponse ligne 734 (« collé à l’écho de la sonde » → « double : faces antérieure et postérieure »). |
| 3 | 999 (`VF_EXPL.altitudinal`) | « nerf optique (ex. NOIAA) » / « (e.g. NAION) » | « nerf optique (ex. NOIA, surtout non artéritique) » / « optic nerve (e.g., AION, mostly non-arteritic) » | « NOIAA » est ambigu en français (aiguë? artéritique?); les données existantes utilisent « NOIA-NA ». |
| 4 | 905 (`SHAFFER[3]`) | « Shaffer 3 : 25–35° » | « Shaffer 3 : 20–35° » (ou garder 25–35° et corriger FACTS.md) | Incohérence interne : `docs/FACTS.md` et `data/investigations.js` disent 20–35°. Les deux plages existent dans la littérature; choisir une seule valeur dans l’app. |
| 5 | 475 (`FUNDUS_REG.cup`) | « une asymétrie > 0,2 entre les yeux est suspecte » | « une asymétrie ≥ 0,2 entre les yeux est suspecte » | Alignement sur `docs/FACTS.md` (≥ 0,2). |
| 6 | 487 (`FUNDUS_OV.drusen`) | « Petits (≤ 63 µm) fréquents avec l’âge; grands (> 125 µm) = DMLA intermédiaire. » | Ajouter : « moyens (63–125 µm) = DMLA précoce » / « medium (63–125 µm) = early AMD ». | Complète la classification de Beckman (sinon trou entre 63 et 125 µm). Optionnel. |
| 7 | 193 (`ascanSpikes`) | pic scléral à `e.al + .9` mm | Facultatif : `e.al + .5` à `.7` | Schéma : en réalité les pics rétine et sclère sont très proches (la paroi rétine-choroïde fait < 1 mm). Sans conséquence pédagogique si la légende dit « schéma ». |
| 8 | 301–312 (`OCT_LAYERS`) | pas de membrane limitante interne étiquetée | Facultatif : ajouter « Membrane limitante interne (MLI) — surface interne de la rétine; plan de clivage des membranes épirétiniennes ». | Repère utile (membrane épirétinienne, trou maculaire). L’ordre actuel des couches est correct. |

Vérifié **sans correction** : EYES (normal 23,5 / ACD 3,2 / cristallin 4,0; court 21,0 / 2,6 / 4,6; long 26,5 / 3,6 / 3,8 — plausibles, étiquetés illustratifs); ordre des pics cornée → capsule antérieure → capsule postérieure → rétine → sclère → graisse orbitaire; BS_INFO (DR : insertion papillaire, pic ~100 %, gain bas; DPV : fin, ondulant; DC : dômes, pas d’insertion papillaire, « kissing »; HV : échos ponctués mobiles); BS_ORI.long (nerf en bas de l’écran) et .axial; OCT_FLUID (irf/srf/ped); SHAFFER 4/2/1/0 et pronostic de fermeture; GONIO_VAR (PAS, NVA qui croisent l’éperon, récession); VF_IDX (FL = stimuli dans la tache aveugle > 20 %; FP > 15 % en SITA; FN > 33 % avec réserve; MD, PSD, GHT = zones miroirs); VF_EXPL (ressaut nasal, Bjerrum, paracentral < 10° → 10-2, bitemporale, homonyme gauche = lésion droite); VF_CASES (indices cohérents avec les stades; tache aveugle exclue côté temporal); FUNDUS_REG (disque 1,5–2 mm, ISNT, fovéa ≈ 2,5 DP temporale, A/V ≈ 2/3); FUNDUS_OV cup/dischem/cws.

## Items Investigations (46)
| id | niv. | média | bonne réponse | signe décisif |
|---|---|---|---|---|
| p-bscan-1 | 1 | OPH-210 | Échographie B | Pupille blanche (cataracte mature) : la lumière ne passe pas, les ultrasons oui. |
| p-bscan-2 | 1 | schéma | L’ombre du nerf optique | La bande hypoéchogène derrière la paroi, sous la macula, est l’ombre du nerf optique : le repère qui oriente chaque coupe. |
| p-bscan-3 | 1 | gen bscan:vh:long:85 | Hémorragie du vitré, rétine à plat | Échos ponctués mobiles dans un vitré par ailleurs vide, paroi postérieure à plat : hémorragie du vitré, rétine en place. |
| p-bscan-4 | 2 | OPH-289 | Un dôme épais et lisse qui ne rejoint pas la papille | Dômes épais, lisses et convexes : c’est la choroïde qui est soulevée (décollement choroïdien hémorragique), pas la rétine. |
| p-bscan-5 | 3 | OPH-194 | Décollements choroïdiens « kissing » : drainage discuté | Deux dômes choroïdiens épais qui se touchent au centre : décollement choroïdien hémorragique appositionnel (« kissing »). |
| p-bscan-6 | 2 | schéma | Décollement de rétine | Membrane brillante en V fixée à la papille = rétine décollée. |
| p-bscan-7 | 3 | OPH-197 | Une paroi postérieure (sclère) épaissie | Paroi postérieure (sclère) épaissie à 2,38 mm dans un œil court : nanophtalmie. |
| p-ascan-1 | 1 | schéma | Pic 4 | Rétine = premier pic haut et vertical après le silence du vitré; la sclère suit, puis la graisse orbitaire. |
| p-ascan-2 | 1 | OPH-210 | Cataracte trop dense pour la lumière → échographie A | Cataracte blanche = lumière bloquée : la biométrie optique échoue, l’ultrason passe. |
| p-ascan-3 | 2 | schéma | Longueur axiale trop courte → IOL trop puissante → surprise myopique | Chambre antérieure raccourcie = cornée comprimée : la longueur axiale est sous-estimée. |
| p-ascan-4 | 2 | schéma | A : pic rétinien haut, vertical, suivi d’un pic scléral distinct | On juge une mesure à la forme du pic rétinien : haut et vertical = faisceau perpendiculaire sur la fovéa. |
| p-ascan-5 | 2 | schéma | Refaire les mesures | Écart interoculaire de 0,89 mm sans anisométropie = erreur de mesure probable jusqu’à preuve du contraire. |
| p-ascan-6 | 3 | schéma | Longueur axiale surestimée | Son lent dans l’huile = temps plus long = œil faussement long si la vitesse n’est pas corrigée. |
| p-ascan-7 | 3 | schéma | Mélanome choroïdien | Réflectivité faible à moyenne, régulière, décroissante dans une masse en dôme : profil du mélanome choroïdien. |
| p-oct-1 | 1 | schéma | La bande brillante la plus profonde | La bande brillante la plus profonde, sur la choroïde, est l’EPR-Bruch; la zone ellipsoïde est juste au-dessus. |
| p-oct-2 | 2 | OPH-011 | Une traction vitréomaculaire avec œdème cystoïde | Deux arcs de hyaloïde convergent sur la fovéa et la tirent vers le haut : traction vitréomaculaire, avec kystes intrarétiniens. |
| p-oct-3 | 2 | OPH-268 | Une membrane épirétinienne | Carte rouge-blanc centrée sur la fovéa (531 µm) et creux fovéolaire effacé sous une surface plissée : membrane épirétinienne. |
| p-oct-4 | 1 | OPH-262 | Du liquide intrarétinien (œdème maculaire) | Espaces sombres dans l’épaisseur rétinienne, avec épaississement et exsudats : liquide intrarétinien d’œdème maculaire diabétique. |
| p-oct-5 | 3 | OPH-266 | Un décollement de l’EPR drusénoïde | C’est la ligne de l’EPR elle-même qui bombe, remplie d’un matériel modérément réflectif : décollement drusénoïde de l’EPR. |
| p-oct-6 | 3 | OPH-308 | Glaucome sévère aux deux yeux | RNFL moyenne rouge aux deux yeux (51 et 40 µm) malgré de grands disques : ce n’est pas la taille du disque, c’est une perte de fibres. |
| p-oct-7 | 3 | OPH-134 | Atteinte inférotemporale de l’OG malgré une moyenne normale | Défaut focal : bande rouge inférotemporale sur la carte de déviation OG et bord inférieur effondré, alors que la moyenne reste verte. |
| p-oct-8 | 2 | OPH-147 | Angle fermé des deux côtés | Pas de récessus noir en périphérie : l’iris est accolé à la cornée des deux côtés, angle fermé. |
| p-oct-9 | 1 | gen oct:srf | Sous la rétine : liquide sous-rétinien | Dôme noir sous la rétine, avec l’EPR à plat dessous : liquide sous-rétinien. |
| p-gonio-1 | 2 | gen gonio:nv | Néovaisseaux de l’angle | Fins vaisseaux qui croisent l’éperon scléral vers le trabéculum : néovaisseaux de l’angle. |
| p-gonio-2 | 1 | schéma | Racine de l’iris → bande ciliaire → éperon scléral → trabéculum → ligne de Schwalbe | « I Can’t See Til Schwalbe » : la ligne de Schwalbe marque la fin de la cornée (Descemet), donc la limite antérieure de l’angle. |
| p-gonio-3 | 2 | schéma | Fermeture appositionnelle (Shaffer 1), sans synéchies | L’angle qui s’ouvre à l’indentation = apposition, pas synéchie : c’est l’indentation qui fait la différence. |
| p-gonio-4 | 2 | OPH-180 | Une synéchie antérieure périphérique haute (PAS) | L’iris est collé haut sur la paroi de l’angle (flèche noire) : synéchie antérieure périphérique; avec une corectopie, penser au syndrome ICE. |
| p-gonio-5 | 3 | OPH-156 | Une ligne de Sampaolesi | Ligne de pigment ondulée en avant de Schwalbe : ligne de Sampaolesi, pensez pseudoexfoliation. |
| p-gonio-6 | 3 | OPH-172 | Une récession de l’angle avec fente de cyclodialyse | Bande ciliaire anormalement large (récession) et bande blanche profonde (cyclodialyse) : l’angle a été déchiré par le traumatisme. |
| p-gonio-7 | 3 | OPH-174 | Une fente de cyclodialyse | Bande blanche profonde sous l’éperon + PIO à 1–2 mmHg : fente de cyclodialyse jusqu’à preuve du contraire. |
| p-fondoeil-1 | 1 | schéma | En bas et à gauche | L’image de l’indirect (et de la 90 D) est tournée de 180° : haut ↔ bas et droite ↔ gauche. |
| p-fondoeil-2 | 1 | OPH-003 | Normal : reflets de la limitante interne | Reflets brillants le long des vaisseaux chez un enfant, avec un reflet fovéolaire net : fond d’œil normal. |
| p-fondoeil-3 | 1 | OPH-307 | ≈ 0,9 | Le bord rose a presque disparu : l’excavation remplit ≈ 90 % du diamètre vertical. |
| p-fondoeil-4 | 2 | OPH-136 | En inférotemporal : encoche | En bas et du côté temporal (en bas à gauche de l’image), l’excavation touche le rebord du disque : encoche inférotemporale. |
| p-fondoeil-5 | 2 | OPH-219 | Œdème papillaire : TA et imagerie cérébrale urgente | Papille soulevée aux bords effacés, vaisseaux masqués, hémorragies péripapillaires : œdème papillaire — TA et imagerie en urgence. |
| p-fondoeil-6 | 2 | OPH-250 | Tache rouge cerise : occlusion de l’artère centrale | Fovéa rouge sombre au centre d’une rétine pâle et œdémateuse : tache rouge cerise = OACR, une urgence (AVC oculaire). |
| p-fondoeil-7 | 2 | OPH-252 | Occlusion de la veine centrale de la rétine | Hémorragies dans les 4 quadrants qui irradient de la papille, veines tortueuses et dilatées : OVCR. |
| p-fondoeil-8 | 3 | OPH-287 | Un décollement de rétine macula-off | Les flèches suivent la limite d’une rétine soulevée et terne qui englobe la fovéa : décollement de rétine macula-off. |
| p-cv-1 | 1 | OPH-302 | Fiable et normal | Fiabilité excellente, GHT normal, MD ≈ 0 et seule la tache aveugle en temporal : champ normal. |
| p-cv-2 | 2 | OPH-302 | Avancé : MD < −12 dB | MD de −16,93 dB, au-delà de −12 dB, sur un test fiable : glaucome à un stade avancé. |
| p-cv-3 | 2 | gen vf:arcuate | Méridien horizontal; bord inférieur de la papille | Arc de points déprimés dans l’hémichamp supérieur, arrêté par le méridien horizontal : glaucome, fibres inférieures atteintes. |
| p-cv-4 | 1 | gen vf:fp | Non fiable : trop de faux positifs, refaire le test | Faux positifs à 27 % et GHT « sensibilité anormalement élevée » : test non fiable, à refaire. |
| p-cv-5 | 2 | OPH-283 | Hémianopsie homonyme gauche : lésion rétrochiasmatique droite | Hémichamp gauche perdu aux deux yeux, coupé sur le méridien vertical : hémianopsie homonyme gauche, lésion rétrochiasmatique droite (ici occipitale). |
| p-cv-6 | 1 | schéma | Chiasma optique (ex. adénome hypophysaire) | Deux hémichamps temporaux perdus, limités par le méridien vertical : fibres croisées touchées au chiasma. |
| p-cv-7 | 2 | schéma | Opacité des milieux (cataracte) ou petite pupille | La déviation corrigée efface tout : la baisse est diffuse, pas localisée — pensez milieux avant glaucome. |
| p-cv-8 | 2 | gen vf:altitudinal | Défaut altitudinal inférieur : NOIA | Tout l’hémichamp inférieur perdu, bordé par le méridien horizontal : défaut altitudinal du nerf optique. |

## Cas en images (35) — ★ = vedette
| id | thème | niv. | photo | bonne réponse | signe décisif |
|---|---|---|---|---|---|
| ic-c01 | cornee | 1 | OPH-057 | Kératite herpétique (HSV) | Lésion épithéliale fine et ramifiée : dendrite herpétique. |
| ic-c02 | cornee | 3 | OPH-064 | Surélevées, sans bulbes terminaux | Plaques épithéliales ramifiées et surélevées, sans bulbes terminaux, après un zona : pseudodendrites. |
| ic-c03 ★ | cornee | 1 | OPH-070 | Ulcère bactérien : cultures, fortifiés en urgence | Infiltrat stromal central, dense et suppuré, dans un œil très injecté : ulcère bactérien (Pseudomonas chez le porteur de lentilles). |
| ic-c04 | cornee | 2 | OPH-067 | Infiltrat stromal en anneau : Acanthamoeba | Anneau blanchâtre paracentral dans le stroma : infiltrat en anneau de l’Acanthamoeba. |
| ic-c05 | cornee | 2 | OPH-049 | Des guttae : dystrophie endothéliale de Fuchs | Fines excroissances sur l’endothélium, dans le reflet de la fente : guttae de Fuchs. |
| ic-c06 | cornee | 2 | OPH-040 | Kératocône (stries de Vogt) | Lignes fines et parallèles dans le stroma profond : stries de Vogt du kératocône. |
| ic-c07 | cornee | 2 | OPH-043 | Hydrops aigu (rupture de la Descemet) | Opacité œdémateuse blanc-bleu au sommet du cône : hydrops aigu. |
| ic-c08 | cornee | 1 | OPH-073 | Ptérygion : chirurgie s’il menace l’axe visuel | Tissu fibrovasculaire triangulaire dont la tête franchit le limbe et atteint le bord pupillaire : ptérygion. |
| ic-c09 | cornee | 1 | OPH-086 | Irriguer abondamment jusqu’à pH neutre | Cornée opaque après une brûlure alcaline : on irrigue d’abord, on évalue ensuite. |
| ic-c10 | cornee | 3 | OPH-104 | Ligne de Khodadoust : rejet endothélial | Ligne de précipités à la limite d’une zone œdémateuse, en diffusion sclérale : ligne de Khodadoust. |
| ic-c11 | cornee | 1 | OPH-030 | Une perte d’épithélium : abrasion cornéenne | Plage verte bien limitée, sans infiltrat blanc dessous : abrasion épithéliale. |
| ic-c12 | cornee | 2 | OPH-075 | Infiltrats sous-épithéliaux de l’adénovirus | Multiples opacités rondes sous-épithéliales dans l’axe visuel : infiltrats de l’adénovirus. |
| ic-g01 | glaucome | 1 | OPH-140 | Fermeture aiguë de l’angle : PIO, laser des deux yeux | Œil droit rouge à la cornée trouble, œil gauche calme : fermeture aiguë de l’angle. |
| ic-g02 | glaucome | 3 | OPH-143 | Une ancienne crise de fermeture de l’angle | Taches blanches sous la capsule antérieure et atrophie irienne : cicatrices d’une crise de fermeture de l’angle. |
| ic-g03 | glaucome | 2 | OPH-154 | Matériel pseudoexfoliatif | Flocons blancs le long du rebord pupillaire : pseudoexfoliation. |
| ic-g04 | glaucome | 2 | OPH-157 | Dispersion pigmentaire | Fentes radiaires de transillumination en périphérie de l’iris : dispersion pigmentaire. |
| ic-g05 | glaucome | 3 | OPH-160 | Ligne de Scheie : dispersion pigmentaire | Ligne pigmentée en périphérie du cristallin, pupille dilatée : ligne de Scheie de la dispersion pigmentaire. |
| ic-g06 | glaucome | 2 | OPH-319 | Néovaisseaux iriens (rubéose) | Fins vaisseaux en dentelle sur l’iris, près du bord pupillaire : néovascularisation irienne. |
| ic-g07 | glaucome | 1 | OPH-167 | Glaucome congénital (buphtalmie) | Cornées grandes aux deux yeux : buphtalmie, glaucome congénital jusqu’à preuve du contraire. |
| ic-g08 | glaucome | 3 | OPH-170 | Stries de Haab | Lignes curvilignes à double contour dans la cornée profonde : stries de Haab. |
| ic-g09 | glaucome | 3 | OPH-148 | Bloc pupillaire : iridotomie | Le faisceau de la fente montre un iris convexe presque collé à la cornée : iris bombé par bloc pupillaire. |
| ic-g10 | glaucome | 2 | OPH-137 | Une hémorragie papillaire | Strie rouge au bord inférotemporal d’une papille excavée : hémorragie papillaire, signe de progression. |
| ic-x01 | general | 1 | OPH-005 | Hémorragie sous-conjonctivale : rassurer, TA | Sang plat, bien limité, sous la conjonctive bulbaire : hémorragie sous-conjonctivale. |
| ic-x02 | general | 1 | OPH-346 | Un hyphéma : éliminer un globe ouvert | Croissant rouge déposé dans le bas de la chambre antérieure : hyphéma. |
| ic-x03 | general | 2 | OPH-198 | Hypopyon : endophtalmie | Niveau blanc-jaune en bas de la chambre antérieure dans un œil injecté et chémotique : hypopyon, endophtalmie. |
| ic-x04 | general | 2 | OPH-375 | Sclérite nodulaire : bilan systémique | Vaisseaux sclérais profonds engorgés autour d’un nodule sous le limbe : sclérite nodulaire. |
| ic-x05 | general | 1 | OPH-341 | Follicules : virus ou Chlamydia | Grains ronds, pâles, au centre avasculaire, sur la conjonctive palpébrale : follicules. |
| ic-x06 | general | 2 | OPH-369 | Zona ophtalmique : antiviral oral | Vésicules et croûtes sur base érythémateuse, d’un seul côté, dans le territoire V1 : zona ophtalmique. |
| ic-x07 | general | 3 | OPH-249 | Une artère ciliorétinienne la perfuse | Langue de rétine normale entre la papille et la macula dans une rétine blanche : territoire d’une artère ciliorétinienne. |
| ic-x08 | general | 2 | OPH-254 | Occlusion de branche veineuse | Hémorragies groupées dans le secteur temporal inférieur, rétine supérieure épargnée : occlusion de branche veineuse. |
| ic-x09 | general | 2 | OPH-259 | Néovaisseaux papillaires | Fines boucles vasculaires sur la papille, avec hémorragies rétiniennes autour : néovaisseaux papillaires. |
| ic-x10 | general | 3 | OPH-274 | NOIA artéritique : corticoïdes le jour même | Papille gonflée et d’un blanc crayeux : œdème pâle de la NOIA artéritique (artérite à cellules géantes). |
| ic-x11 | general | 3 | OPH-282 | La plus petite : Horner probable | Dans le noir, la pupille droite se dilate, la gauche reste petite : l’écart augmente dans le noir, la petite pupille est anormale. |
| ic-x12 | general | 3 | OPH-281 | Anisocorie physiologique | Après cocaïne, les deux pupilles se dilatent : voie sympathique intacte des deux côtés. |
| ic-x13 | general | 3 | OPH-286 | Mélanome suspect : oncologie oculaire | Grande lésion choroïdienne pigmentée avec amas de pigment orange : signe de risque de mélanome. |

## Points encore à vérifier par un clinicien
1. **Hotspots des cas en images** : placés à la main sur une grille de 10 % (zoom 5 % pour les petites structures). Les plus fins : `mi-c01` (dendrite), `mi-g05` (ligne de Scheie), `mi-g08` (stries de Haab, r large), `mi-g10` (hémorragie papillaire, r 4), `mi-x09` (néovaisseaux papillaires), `mi-x11` (pupilles en vignettes). Une vérification visuelle dans l’app est recommandée.
2. **ic-x11 (Horner)** : la page source ne précise pas l’œil atteint; la photo dans le noir montre la pupille gauche du patient plus petite. Formulé « Horner probable ».
3. **ic-x03 (endophtalmie)** : la page indique « post-trabeculectomy »; l’hypopyon est lu sur l’image (niveau horizontal blanc-jaune), il n’est pas décrit dans le texte source.
4. **ic-g05 (Scheie)**, **ic-g08 (Haab)** : signes subtils sur photo; le signe est donné par la légende, la localisation précise est mon interprétation.
5. **ic-x07** : la page CRAO contient deux images avec épargne ciliorétinienne (fovéa épargnée; macula nasale épargnée); OPH-249 correspond à l’une d’elles (zone normale entre papille et macula).
6. Valeurs chiffrées à relire : 1 mm ≈ 2,5–3 D; compression 0,1–0,3 mm; vitesses 1550 / 1532 / ≈ 980 m/s (huile); RNFL moyenne ≈ 90–100 µm; plancher RNFL ≈ 50–60 µm; cornée > 12 mm la 1re année (glaucome congénital); facteurs de risque de mélanome (TFSOM, Shields).
7. OPH-302 : légende du catalogue inversée par rapport au rapport imprimé (OS à gauche) — items p-cv-1/2 fondés sur les en-têtes imprimés.

## Sources consultées (21 nov. 2026)
Pages EyeRounds (légendes, contexte) : tutoriel d’échographie oculaire; atlas *Nanophthalmos B-scan* (sclère ≈ 2,4 mm, LA 17,1 mm); *Angle recession / cyclodialysis*; *Peripheral anterior synechiae* (ICE); *CRAO*; *Papilledema*; *Acute angle closure* (PIO 70+ mmHg, OD); *Lamina cribrosa in POAG* (encoche inférotemporale, latéralité non précisée); *Apraclonidine test for Horner’s* (œil non précisé); *Endophthalmitis* (post-trabéculectomie). EyeWiki *Nanophthalmos* (LA ≤ 18–20 mm; pas de seuil chiffré d’épaisseur). Non consignées dans market/SOURCES.md (hors périmètre).

## Cycle 7 — glaucome (2026-11-21)

Périmètre : les 13 fiches du module C (data/fiches-glaucome.js, data/ext-glaucome-a.js, data/ext-glaucome-b.js) et leur surcouche data-en/fiches-glaucome.js (FR/EN synchronisés : mêmes longueurs et ordre de tableaux, `cont` copié ; 0 écart au contrôle). Modifications faites par script (fiche par fiche, objets re-sérialisés), `node tools/validate.js` → OK.

**Comptage** : `node tools/wordcount-fiches.js C [--en] [--root=<arbre>]` compte les mots visibles au niveau « Fondamentaux » par écran, comme le rendu (ponctuation seule non comptée ; Décider inclut le bloc Traitement). Avant = contenu d’avant ce cycle (arbre extrait de git ; contenu glaucome identique à l’origine), après = arbre de travail.

| Fiche | oneLiner | Voir (≤ 60) | Comprendre (≤ 120) | Décider hors arbre (≤ 180) | Arbre | Total FR | Total EN | Comprendre EN | q max / oui-non max (≤ 8 / ≤ 12) | Drapeaux (≤ 3) | Essentiel max (mots) |
|---|---|---|---|---|---|---|---|---|---|---|---|
| g-gpao | 19 → 19 | 72 → 58 | 123 → 105 | 136 → 121 | 83 → 75 | 447 → 392 | 424 → 378 | 119 → 101 | 10/15 → 6/9 | 3 → 3 | 17 → 13 |
| g-hto | 18 → 18 | 74 → 59 | 128 → 114 | 105 → 95 | 80 → 70 | 418 → 369 | 397 → 356 | 119 → 108 | 13/15 → 8/11 | 3 → 3 | 18 → 14 |
| g-gpn | 15 → 15 | 81 → 58 | 117 → 105 | 160 → 107 | 58 → 56 | 444 → 354 | 424 → 342 | 116 → 101 | 10/9 → 8/9 | 4 → 3 | 16 → 12 |
| g-fermeture | 22 → 22 | 75 → 55 | 124 → 115 | 157 → 146 | 81 → 77 | 482 → 438 | 491 → 439 | 129 → 116 | 11/8 → 8/8 | 3 → 3 | 16 → 13 |
| g-crise | 22 → 22 | 71 → 57 | 128 → 116 | 168 → 150 | 120 → 105 | 529 → 470 | 531 → 467 | 127 → 117 | 11/12 → 8/12 | 3 → 3 | 18 → 13 |
| g-pxf | 21 → 21 | 81 → 52 | 123 → 110 | 150 → 128 | 86 → 80 | 478 → 408 | 444 → 382 | 121 → 110 | 7/15 → 7/10 | 3 → 3 | 17 → 12 |
| g-pigmentaire | 19 → 19 | 69 → 53 | 124 → 114 | 141 → 109 | 84 → 76 | 464 → 398 | 440 → 356 | 123 → 104 | 8/15 → 7/9 | 3 → 3 | 17 → 14 |
| g-neovasculaire | 20 → 20 | 82 → 59 | 126 → 119 | 150 → 123 | 102 → 92 | 494 → 427 | 472 → 404 | 125 → 110 | 8/10 → 6/9 | 3 → 3 | 14 → 13 |
| g-secondaires | 20 → 20 | 78 → 49 | 123 → 116 | 160 → 150 | 95 → 86 | 500 → 445 | 477 → 425 | 118 → 113 | 8/13 → 8/10 | 3 → 3 | 14 → 12 |
| g-postop | 20 → 20 | 78 → 58 | 128 → 115 | 192 → 131 | 109 → 67 | 553 → 417 | 544 → 396 | 129 → 115 | 6/22 → 6/11 | 4 → 3 | 14 → 11 |
| g-dev | 20 → 20 | 24 → 24 | 193 → 119 | 137 → 134 | 92 → 82 | 496 → 409 | 471 → 391 | 178 → 113 | 9/12 → 6/11 | 4 → 3 | 14 → 11 |
| g-papille | 19 → 19 | 26 → 26 | 190 → 120 | 99 → 121 | 66 → 61 | 418 → 365 | 410 → 363 | 184 → 117 | 9/8 → 7/8 | 5 → 3 | 15 → 10 |
| g-cristallin | 21 → 21 | 21 → 21 | 206 → 120 | 124 → 144 | 70 → 70 | 469 → 403 | 474 → 410 | 201 → 117 | 5/11 → 5/10 | 5 → 3 | 16 → 13 |
| **Total** | | | | | | 6192 → 5295 | 5999 → 5109 | | | | |

Ce qui a changé, par fiche :
- **oneLiner** : déjà ≤ 2 phrases et ≤ 26 mots partout, inchangés.
- **« En deux phrases »** (definition, affichée dans Voir) : réécrite en 2 phrases, 32–40 mots (≤ 30 pour g-dev, g-papille, g-cristallin, affichées dans Comprendre). Voir ≤ 60 partout (avant 69–82). Légende normale de g-gpao raccourcie (ISNT détaillée reste dans g-papille).
- **Arbre (cat.algo)** : chaîne propre, q ≤ 8 mots, oui/non ≤ 12 mots, `cont: 'yes'|'no'` sur chaque nœud sauf le dernier (lu par src/tree.js). Détails longs de g-postop (mal-direction, hémorragie, encapsulation, doses intravitréennes) déplacés en items de la phase « suivi » (niveau 2).
- **Drapeaux rouges ≤ 3** : g-gpn (doublon de l’arbre supprimé) ; g-postop (tube exposé → présentation) ; g-papille (fusion pâleur/défaut vertical ; progression asymétrique → présentation) ; g-cristallin (resaignement/imbibition → phase suivi) ; g-dev (rupture de Descemet → présentation). g-crise : 3e drapeau raccourci, contre-indications détaillées dans la carte Acétazolamide.
- **Traitement** : chaque traitement porte maintenant `dose` (nom générique + posologie usuelle ou modalités), `refer` (quand référer / urgence), `pitfall` (un piège), `qc` (seulement si utile). La fiche porte `treatment: {first, refer, pitfall, qc}` lu par `txBlock()` : 1re ligne = toutes les posologies ; Quand référer et Piège = les 1–2 lignes les plus décisives ; Au Québec = notes O-7 (optométristes), Nunavik, centres pédiatriques, électrophorèse à Montréal, priorité de l’IRM, RAMQ des MIGS « à vérifier ». Champs how/why/pros/cons/cx conservés.
- **Doses employées** (adulte, standard ou FACTS.md) : latanoprost 0,005 % HS, bimatoprost 0,01 %, travoprost 0,004 %, timolol 0,5 % BID (0,25 % chez l’enfant), dorzolamide 2 % TID, brimonidine 0,2 % BID–TID, acétazolamide 500 mg PO/IV puis 250 mg PO QID, mannitol 20 % 1–2 g/kg IV, pilocarpine 1–2 %, prednisolone acétate 1 %, atropine 1 %, loteprednol 0,5 %, fluorométholone 0,1 %, bévacizumab 1,25 mg/0,05 mL, ranibizumab 0,5 mg, aflibercept 2 mg, vancomycine 1 mg/0,1 mL + ceftazidime 2,25 mg/0,1 mL, SLT 360° ≈ 100 impacts, PRP ≈ 1200–1600 impacts en 1–3 séances.

- **Comprendre (2e passe)** : essentiels de data/hy-glaucome.js (clés g-* et c-bases) raccourcis à ≤ 14 mots (10–14), gras conservés, même changement dans data-en/hy.js pour ces clés seulement (édition par plage de texte des tableaux `essentials`, fichier relu juste avant l’écriture ; le reste du fichier, dont les clés cornée, inchangé). Pour g-dev, g-papille, g-cristallin (sans photo, définition affichée dans Comprendre) : définition ≤ 30 mots, mnémo raccourci (détails gardés dans les signes et la présentation), titres et libellés de la chaîne causale raccourcis (FR et EN, mêmes longueurs de tableaux). Comprendre ≤ 120 partout (FR 105–120, EN 101–117).

Reste :
- `txBlock()` remplace toute la liste des traitements par la grille de cartes : how/why/pros/cons/cx et les lignes refer/pitfall non retenues ne s’affichent plus à aucun niveau. Proposé au rôle web : liste en accordéon dans « Pour aller plus loin » (niveau 2), avec les champs par traitement.
- tools/validate.js avertit « long fiche » pour g-postop, g-papille, g-cristallin, g-dev : il compte tout le texte de la fiche, y compris les cartes ajoutées et le niveau 2–3, pas ce qui est visible par défaut.

Doutes cliniques à vérifier :
- g-hto : fréquence d’observation « ≈ 6–24 mois selon le risque » (d’après AAO PPP, non vérifiée dans FACTS.md).
- g-fermeture : iridoplastie notée « laser thermique (argon) » ; g-neovasculaire : cyclophotocoagulation « au laser diode » ; g-pigmentaire : SLT réduite « parfois sur 180° ».
- g-dev : timolol 0,25 % BID chez l’enfant (pratique courante, pas dans FACTS.md).
- g-cristallin : « suivi rapproché les premiers jours » pour l’hyphéma, formulé sans fréquence.
- Aucune affirmation de couverture RAMQ (FACTS.md D) ; aucun médicament d’exception cité.

## Cycle 8 — glaucome (2026-11-21)

Suite de docs/CRITIQUE-SEVERE.md (MF-6, MF-7, MF-10, MF-12) et de STYLE-PEDAGO §8–9. FR et EN synchronisés (0 écart : longueurs, `yesGo`/`noGo`, `urgent`, `treatment`).

**Arbres v2** (`{q, yes, no, yesGo?, noGo?}`, `cont` retiré, `yes`/`no` vide seulement si la branche continue, `{t, urgent:true}` pour l’action urgente) :
- g-crise : « Appeler l’ophtalmologiste de garde maintenant » sur la 1re réponse Oui (urgent), plus seulement en crise réfractaire ; réfractaire = « ophtalmologiste au chevet » (urgent).
- g-dev : racine « Nourrisson ou jeune enfant ? » ; Non → question adulte (ICE, Axenfeld-Rieger, dystrophie polymorphe postérieure, glaucome juvénile). Le chemin du nourrisson finit sur le suivi, plus sur une question d’adulte.
- g-secondaires : « Dépôt ou implant de stéroïde ? » placé sous la réponse cortisonique (Oui) ; uvéite → iris bombé (urgent) → PIO non contrôlée.
- g-neovasculaire : la cause (rétine ou Doppler carotidien) est demandée à tous, juste après la découverte des néovaisseaux, avant la PIO et le potentiel visuel.
- g-postop : plus de feuille « Question suivante » (PIO basse → chambre ; sinon PIO haute + chambre étroite ou profonde) ; infection = ophtalmologiste immédiatement (urgent).
- g-pxf (sans glaucome → question cataracte), g-gpn (IRM normale → décision de traiter), g-papille (grand disque → drapeaux rouges quand même), g-pigmentaire (nœud « Pilocarpine envisagée ? » retiré ; piège gardé dans la carte), g-cristallin (chaîne des causes sans feuille vide).
- tools/validate.js : contrôle v2 (renvoi vers un nœud plus loin, aucune feuille vide sans renvoi, tous les nœuds atteignables ; « Question suivante » = avertissement, présent dans 2 fiches cornée). src/tree.js doit encore lire `yesGo`/`noGo` (rôle exercices).

**Bloc Traitement pour l’externe** (`treatment` de la fiche) : `first` = « **Toi** » (ce que fait l’externe ou le médecin de 1re ligne) puis « **Ophtalmologiste** » (LPI, phaco, tube, anti-VEGF… sortis de la 1re ligne) ; `refer` = « Référer en ophtalmologie : immédiatement / le jour même / dans les 24 h / cette semaine / en quelques semaines / suivi régulier — critère » (g-crise, g-postop : immédiatement ; g-neovasculaire, g-cristallin : le jour même ; g-dev : dans les 24 h) ; `pitfall` commence par le médicament ou le geste en gras. Les champs par traitement (`dose`, `refer`, `pitfall`, `qc`) restent pour le niveau 2.

Mots visibles par défaut (outil tools/wordcount-fiches.js ; « Décider » = drapeaux + bloc Traitement, hors arbre). Les chiffres de la critique (186–196) comptent aussi les libellés rendus ; les deux mesures baissent dans la même proportion.

| Fiche | Décider hors arbre (cycle 7 → 8) | EN | Arbre | Définition (mots) | Nœuds / feuilles qui continuent sur les deux branches |
|---|---|---|---|---|---|
| g-gpao | 121 → 97 | 98 | 75 → 74 | 41 | 4 / 0 |
| g-hto | 95 → 89 | 86 | 70 → 70 | 34 | 4 / 0 |
| g-gpn | 107 → 98 | 92 | 56 → 59 | 37 | 4 / 1 |
| g-fermeture | 146 → 92 | 91 | 77 → 77 | 34 | 5 / 0 |
| g-crise | 150 → 110 | 111 | 105 → 95 | 36 | 5 / 0 |
| g-pxf | 128 → 112 | 98 | 80 → 75 | 34 | 5 / 3 |
| g-pigmentaire | 109 → 92 | 81 | 76 → 63 | 36 | 4 / 1 |
| g-neovasculaire | 123 → 89 | 86 | 92 → 89 | 37 | 5 / 1 |
| g-secondaires | 150 → 94 | 93 | 86 → 86 | 35 | 5 / 2 |
| g-postop | 131 → 91 | 86 | 67 → 72 | 40 | 5 / 1 |
| g-dev | 134 → 113 | 100 | 82 → 79 | 30 | 5 / 2 |
| g-papille | 121 → 97 | 92 | 61 → 66 | 26 | 4 / 2 |
| g-cristallin | 144 → 99 | 105 | 70 → 66 | 29 | 5 / 0 |

Définitions : 26–41 mots (plafond 45 du cycle 8).

**Mini-QCM (MF-10)** : 6 items qui demandaient le diagnostic de la fiche ouverte deviennent des questions de conduite (même figure, même position de réponse, bonne réponse jamais la plus longue seule) : C-016 (g-crise : « que fais-tu en premier ? » → hypotenseurs + appel immédiat), C-012 (g-fermeture : conduite pour une PAC → LPI), C-051 et C-105 (g-pxf : bilan + zonules ; risque chirurgical), C-101 (g-gpao : diriger rapidement), C-057 (g-pigmentaire : que faire avant d’accepter un GPN). Fichiers : data/quiz-c.js, data/quiz-c2.js, data/quiz-photos.js, data-en/quiz.js (seulement ces 6 items). C-211 (variante d’ICE) et C-205/C-207 (sous-types de glaucome cristallinien) gardés : ils départagent des entités de la fiche sans en répéter le titre.

Corrections du chef de projet : g-pxf, toute baisse de vision brusque après une cataracte = « le jour même » (endophtalmite, décollement de rétine, implant luxé avec PIO haute) ; g-crise, antiémétique nommé : dimenhydrinate (Gravol) 50 mg IV ou PO, ou ondansétron 4 mg IV. Doute restant : g-dev « dans les 24 h » pour le nourrisson, à valider par un clinicien.

## Cycle 8 — module A et capsules (2026-11-21)

Réponse à MF-1 (critique sévère) : chaque entrée du module A (A.physio, A.exam, A.recog) a maintenant une **micro-carte** d’un écran au niveau Fondamentaux, et chaque section de capsule tient sur un écran. Rien n’a été inventé : chaque phrase de carte condense une phrase déjà relue de la même entrée ; seuils et doses recopiés tels quels (ex. vancomycine 1 mg/0,1 mL + ceftazidime 2,25 mg/0,1 mL ; hydroxychloroquine ≤ 5 mg/kg/jour ; OHTS ≤ 555 µm vs > 588 µm ; K > 47,2 D, I-S > 1,4 D).

**Champ `card`** (FR dans data/module-a.js, data/ext-a5-a.js, data/ext-a5-b.js ; EN dans data-en/module-a.js, même nombre de `keys`, même ordre) :
- `card.lead` : 1–2 phrases, quoi + pourquoi (11–28 mots) ;
- `card.keys` : 3–4 signes ou étapes, ≤ 12 mots chacun (un seul **gras** pour le signe décisif quand il y en a un) ;
- `card.ask.q` : la question du patron (copie de `pearl`, raccourcie pour macula-chirurgicale et peripherie-vitre) ; `card.ask.a` : les premières phrases entières de la réponse (≤ 48 mots), à révéler au toucher.
- Repliés (« Pour aller plus loin », niveaux 2–3) : les champs existants, inchangés — physio : `intro`, `numbers`, `points`, `pearl` ; examen : `why`, `how`, `normal`, `patho`, `pitfalls`, `pearl` ; A5 : `what`, `look`, `why`, `action`, `pitfalls`, `pearl.a`. Pas de champ `more` : le détail, c’est l’entrée elle-même.
- Hors de mes fichiers et à garder hors de la carte : l’encadré High yield (`OPH.hy`, data/hy-module-a.js, 57–75 mots par entrée), le sous-titre `en` (jusqu’à 9 mots). Les doublons signalés sur `a-examen` (SAAQ classe 5 ×3, 6/12 = 20/40 = logMAR 0,3 ×2) viennent de `exam.av.normal` + HY + l’outil d’acuité : la carte n’en garde qu’une mention (SAAQ dans `lead`).

Mots visibles par défaut, par entrée. « Avant » = champs affichés au niveau 1 par le moteur actuel (titre, intro/why/what, chiffres, normal/patho ou look, perle), entre parenthèses l’encadré HY qui s’y ajoutait. « Carte » = titre + `lead` + `keys` + `ask.q` (plafond 90). Comptage : mots contenant une lettre ou un chiffre, `**` retirés.

| Page | Entrée | Avant (+HY) | Carte FR | Carte EN |
|---|---|---|---|---|
| a-physiologie | aqueuse | 126 (+75) | 76 | 70 |
| a-physiologie | pio | 160 (+72) | 76 | 74 |
| a-physiologie | film-lacrymal | 148 (+65) | 77 | 79 |
| a-physiologie | transparence | 133 (+64) | 80 | 75 |
| a-physiologie | refraction | 130 (+66) | 88 | 87 |
| a-physiologie | pupille | 135 (+72) | 83 | 81 |
| a-examen | av | 208 (+63) | 71 | 67 |
| a-examen | pupilles | 289 (+73) | 75 | 78 |
| a-examen | lampe | 215 (+67) | 62 | 61 |
| a-examen | fluoresceine | 240 (+57) | 63 | 62 |
| a-examen | tonometrie | 201 (+59) | 69 | 62 |
| a-examen | gonioscopie | 236 (+64) | 59 | 63 |
| a-examen | pachymetrie | 195 (+63) | 68 | 60 |
| a-examen | papille | 204 (+71) | 68 | 59 |
| a-imagerie | oct | 254 (+68) | 79 | 77 |
| a-imagerie | topographie | 239 (+59) | 65 | 67 |
| a-imagerie | champs-visuels | 248 (+62) | 70 | 66 |
| a-imagerie | speculaire | 218 (+57) | 72 | 62 |
| a-retine | cataracte-nucleaire | 178 (+62) | 78 | 80 |
| a-retine | cataracte-corticale-scp | 178 (+62) | 77 | 78 |
| a-retine | cataracte-mature | 174 (+58) | 76 | 75 |
| a-retine | opacification-capsulaire | 135 (+63) | 78 | 75 |
| a-retine | bscan | 222 (+63) | 82 | 85 |
| a-retine | decollement-retine | 179 (+65) | 78 | 72 |
| a-retine | decollement-choroidien | 189 (+67) | 81 | 81 |
| a-retine | dmla | 212 (+71) | 80 | 78 |
| a-retine | retinopathie-diabetique | 203 (+68) | 77 | 77 |
| a-retine | occlusions-retiniennes | 238 (+62) | 73 | 70 |
| a-retine | retinopathie-hypertensive | 167 (+59) | 76 | 74 |
| a-retine | macula-chirurgicale | 220 (+73) | 79 | 77 |
| a-retine | peripherie-vitre | 197 (+65) | 79 | 76 |
| a-retine | inflammation-infection | 185 (+65) | 71 | 65 |
| a-retine | papille-oedeme | 232 (+61) | 81 | 77 |
| a-retine | pupilles-neuro | 217 (+65) | 79 | 73 |
| a-retine | tumeurs-toxicite-trauma | 231 (+75) | 83 | 76 |

Totaux par page (FR, hors HY) : a-physiologie 832 → 480 (max 160 → 88 par entrée) ; a-examen 1 788 → 535 (max 289 → 75) ; a-imagerie 959 → 286 (max 254 → 79) ; a-retine 3 357 → 1 328 (max 238 → 83). Avec l’encadré HY, l’« avant » était de 1 246, 2 305, 1 205 et 4 461 mots ; la critique en a mesuré 1 747, 3 227, 1 939 et 5 595 dans le DOM (titres, outils et légendes de photos compris). Le contenu complet reste dans les données (≈ 15 000 mots FR pour les 35 entrées), seulement replié.

**Capsules** (data/capsules.js, data-en/capsules-cases.js, partie capsules seulement ; glossaire non touché) : une section = un écran (b-bases 7, c-bases 8, donc ≤ 8). Texte visible (titre + `text`) ramené de 72–108 à 51–74 mots FR (46–67 EN) ; les phrases sorties du texte deviennent la **première puce** de la section (ou la 2e pour la lissamine), donc au niveau 2 déjà replié (`data-dz="2"`). Puces : b-bases 52 → 58, c-bases 48 → 54, mêmes longueurs FR/EN. `intro` : 60 → 35 (b-bases) et 52 → 36 (c-bases) ; supprimés comme redondants : « Chaque notion est d’abord dite en mots simples, puis précisée » et « Chaque forme secondaire y est définie avant d’être traitée » (phrases sur la capsule elle-même, sans contenu). Retirés aussi parce que redondants : la phrase sur la confocale (déjà dans la puce « Microscopie confocale »), « (20/20) » après 6/6 et « Le patient ne sent rien » (puce « Pourquoi silencieux »). Total visible intro + sections : b-bases 705 → 464, c-bases 839 → 554 ; `toolbox` (accordéons fermés) et `vocab` (niveau 2) inchangés.

Contrôles : node tools/validate.js OK (aucune erreur dans A ni dans les capsules) ; fusion EN simulée avec la logique de I18N._merge : les 35 cartes et les 15 sections passent en anglais, aucun tableau de longueur différente.

## Cycle 9 — cohérence des délais, « En deux phrases », Comprendre (27 fiches, 2026-11-21)

Suite du passage 2 de docs/CRITIQUE-SEVERE.md (N3, MF-12, reste de MF-3). Cornée et glaucome, FR et EN.

**Délais de référence** : `node tools/check-delays.js [--en] [--all]` extrait le délai écrit dans les drapeaux rouges, les feuilles de l’arbre (`{urgent:true}` = immédiat) et `treatment.refer`, et signale : un drapeau ou une feuille plus urgent que `refer` ; un drapeau ou une feuille qui fait attendre avant d’appeler (« après 1 h ») ; un délai que `refer` ne nomme pas (`refer` peut nommer plusieurs niveaux, chacun avec son critère). Les intervalles de contrôle (« revoir à 24–48 h ») et les critères cliniques (« plus de 24 h », « aggravation après 48 h ») ne comptent pas comme délais. Avant : 5 écarts (FR) ; après : 0 (FR et EN).
- g-crise : drapeau 1 « Crise = appel immédiat ; si PIO inchangée à 1 h : mannitol, sur avis » (avant : « PIO inchangée après 1 h… appeler l’ophtalmologiste de garde »).
- g-postop : drapeau « Bulle blanche… : infection, appel immédiat » (avant : « le jour même », alors que `refer` dit immédiatement).
- g-cristallin : `refer` ajoute « immédiatement si douleur après une vitrectomie avec gaz » (le drapeau disait « PIO immédiate »).
- g-neovasculaire : feuille « baisse de PIO le jour même » (avant : « en urgence », `refer` = le jour même).
- g-dev : feuille « Référer dans les 24 h : examen sous anesthésie » (avant : action marquée urgente, `refer` = dans les 24 h).
- Les 14 fiches cornée étaient déjà cohérentes.

**« En deux phrases » ≤ 3 lignes** : mesuré dans le vrai élément `.def-text` du site construit (Chromium, 390 × 844 : boîte de 315 px, ≈ 40 caractères par ligne). Les 27 définitions faisaient 4–7 lignes (25–41 mots) ; elles font maintenant 2–3 lignes en FR et en EN (11–22 mots, ≤ 110 caractères), toujours en 2 phrases. Les détails retirés restent dans l’essentiel, la chaîne causale ou l’anatomie. Voir passe ainsi sous 60 mots sur les 14 fiches signalées (définitions raccourcies de 11 à 22 mots).

**Comprendre** : essentiels > 15 mots ramenés à ≤ 15 (data/hy-cornee.js : b-bases 0 et 4, c-secheresse 0, c-erosion 1, c-pterygion 0, c-dystrophies 2 ; data-en/hy.js : mêmes clés + c-herpes 3 et c-dystrophies 1 en anglais), seulement les tableaux `essentials` de ces clés, fichier relu juste avant l’écriture. c-pterygion (−13 mots : essentiels 0 et 3, légende du schéma pathologique) et c-dystrophies (−14 : essentiel 2, légende normale, titre de la chaîne) : 127 → ≈ 114 et ≈ 113 selon la mesure de la critique. 0 essentiel > 15 mots (FR et EN).
