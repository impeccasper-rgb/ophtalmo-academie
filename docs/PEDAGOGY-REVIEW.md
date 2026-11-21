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
| p-bscan-3 | 1 | gen bscan:vh:long:85 | Échos ponctués mobiles dans le vitré, rétine à plat : hémorragie du vitré sans décollement | Échos ponctués mobiles dans un vitré par ailleurs vide, paroi postérieure à plat : hémorragie du vitré, rétine en place. |
| p-bscan-4 | 2 | OPH-289 | Un dôme épais et lisse qui ne rejoint pas la papille | Dômes épais, lisses et convexes : c’est la choroïde qui est soulevée (décollement choroïdien hémorragique), pas la rétine. |
| p-bscan-5 | 3 | OPH-194 | Décollements choroïdiens « kissing » (appositionnels) : risque d’adhérence rétine-rétine; on discute un drainage chirurgical | Deux dômes choroïdiens épais qui se touchent au centre : décollement choroïdien hémorragique appositionnel (« kissing »). |
| p-bscan-6 | 2 | schéma | Décollement de rétine | Membrane brillante en V fixée à la papille = rétine décollée. |
| p-bscan-7 | 3 | OPH-197 | L’épaisseur de la paroi postérieure (surtout la sclère), nettement augmentée | Paroi postérieure (sclère) épaissie à 2,38 mm dans un œil court : nanophtalmie. |
| p-ascan-1 | 1 | schéma | Pic 4 : le premier pic haut après la longue ligne plate du vitré | Rétine = premier pic haut et vertical après le silence du vitré; la sclère suit, puis la graisse orbitaire. |
| p-ascan-2 | 1 | OPH-210 | La lumière ne traverse pas la cataracte dense → échographie A, en immersion de préférence | Cataracte blanche = lumière bloquée : la biométrie optique échoue, l’ultrason passe. |
| p-ascan-3 | 2 | schéma | Longueur axiale trop courte → IOL trop puissante → surprise myopique | Chambre antérieure raccourcie = cornée comprimée : la longueur axiale est sous-estimée. |
| p-ascan-4 | 2 | schéma | A : pic rétinien haut, vertical, suivi d’un pic scléral distinct | On juge une mesure à la forme du pic rétinien : haut et vertical = faisceau perpendiculaire sur la fovéa. |
| p-ascan-5 | 2 | schéma | Refaire les mesures : écart > 0,3 mm non expliqué | Écart interoculaire de 0,89 mm sans anisométropie = erreur de mesure probable jusqu’à preuve du contraire. |
| p-ascan-6 | 3 | schéma | Longueur axiale surestimée : corriger la vitesse ou préférer la biométrie optique | Son lent dans l’huile = temps plus long = œil faussement long si la vitesse n’est pas corrigée. |
| p-ascan-7 | 3 | schéma | Mélanome choroïdien | Réflectivité faible à moyenne, régulière, décroissante dans une masse en dôme : profil du mélanome choroïdien. |
| p-oct-1 | 1 | schéma | La bande hyperréflective la plus profonde, posée sur la choroïde | La bande brillante la plus profonde, sur la choroïde, est l’EPR-Bruch; la zone ellipsoïde est juste au-dessus. |
| p-oct-2 | 2 | OPH-011 | Une traction vitréomaculaire avec œdème cystoïde | Deux arcs de hyaloïde convergent sur la fovéa et la tirent vers le haut : traction vitréomaculaire, avec kystes intrarétiniens. |
| p-oct-3 | 2 | OPH-268 | Une membrane épirétinienne : surface plissée, creux fovéolaire effacé | Carte rouge-blanc centrée sur la fovéa (531 µm) et creux fovéolaire effacé sous une surface plissée : membrane épirétinienne. |
| p-oct-4 | 1 | OPH-262 | Du liquide intrarétinien (œdème maculaire) | Espaces sombres dans l’épaisseur rétinienne, avec épaississement et exsudats : liquide intrarétinien d’œdème maculaire diabétique. |
| p-oct-5 | 3 | OPH-266 | Un décollement de l’EPR drusénoïde | C’est la ligne de l’EPR elle-même qui bombe, remplie d’un matériel modérément réflectif : décollement drusénoïde de l’EPR. |
| p-oct-6 | 3 | OPH-308 | Glaucome sévère : RNFL moyenne 51 et 40 µm, rouge aux deux yeux | RNFL moyenne rouge aux deux yeux (51 et 40 µm) malgré de grands disques : ce n’est pas la taille du disque, c’est une perte de fibres. |
| p-oct-7 | 3 | OPH-134 | Atteinte inférotemporale de l’OG malgré une moyenne normale | Défaut focal : bande rouge inférotemporale sur la carte de déviation OG et bord inférieur effondré, alors que la moyenne reste verte. |
| p-oct-8 | 2 | OPH-147 | Angle fermé : l’iris touche la cornée périphérique des deux côtés | Pas de récessus noir en périphérie : l’iris est accolé à la cornée des deux côtés, angle fermé. |
| p-oct-9 | 1 | gen oct:srf | Sous la rétine, au-dessus de l’EPR qui reste plat : liquide sous-rétinien | Dôme noir sous la rétine, avec l’EPR à plat dessous : liquide sous-rétinien. |
| p-gonio-1 | 2 | gen gonio:nv | Néovaisseaux de l’angle : fins vaisseaux qui franchissent l’éperon scléral | Fins vaisseaux qui croisent l’éperon scléral vers le trabéculum : néovaisseaux de l’angle. |
| p-gonio-2 | 1 | schéma | Racine de l’iris → bande ciliaire → éperon scléral → trabéculum → ligne de Schwalbe | « I Can’t See Til Schwalbe » : la ligne de Schwalbe marque la fin de la cornée (Descemet), donc la limite antérieure de l’angle. |
| p-gonio-3 | 2 | schéma | Fermeture appositionnelle (Shaffer 1), sans synéchies | L’angle qui s’ouvre à l’indentation = apposition, pas synéchie : c’est l’indentation qui fait la différence. |
| p-gonio-4 | 2 | OPH-180 | Une synéchie antérieure périphérique haute (PAS) | L’iris est collé haut sur la paroi de l’angle (flèche noire) : synéchie antérieure périphérique; avec une corectopie, penser au syndrome ICE. |
| p-gonio-5 | 3 | OPH-156 | Une ligne de Sampaolesi : pigment en avant de la ligne de Schwalbe | Ligne de pigment ondulée en avant de Schwalbe : ligne de Sampaolesi, pensez pseudoexfoliation. |
| p-gonio-6 | 3 | OPH-172 | Une récession de l’angle (bande ciliaire élargie) avec une fente de cyclodialyse (bande blanche) | Bande ciliaire anormalement large (récession) et bande blanche profonde (cyclodialyse) : l’angle a été déchiré par le traumatisme. |
| p-gonio-7 | 3 | OPH-174 | Une fente de cyclodialyse : sclère blanche entre l’éperon et le corps ciliaire décollé | Bande blanche profonde sous l’éperon + PIO à 1–2 mmHg : fente de cyclodialyse jusqu’à preuve du contraire. |
| p-fondoeil-1 | 1 | schéma | En bas et à gauche : l’image est inversée haut-bas et gauche-droite | L’image de l’indirect (et de la 90 D) est tournée de 180° : haut ↔ bas et droite ↔ gauche. |
| p-fondoeil-2 | 1 | OPH-003 | Normal : reflets de la limitante interne, fréquents chez le jeune | Reflets brillants le long des vaisseaux chez un enfant, avec un reflet fovéolaire net : fond d’œil normal. |
| p-fondoeil-3 | 1 | OPH-307 | ≈ 0,9 | Le bord rose a presque disparu : l’excavation remplit ≈ 90 % du diamètre vertical. |
| p-fondoeil-4 | 2 | OPH-136 | En inférotemporal : encoche | En bas et du côté temporal (en bas à gauche de l’image), l’excavation touche le rebord du disque : encoche inférotemporale. |
| p-fondoeil-5 | 2 | OPH-219 | Œdème papillaire avec hémorragies : mesurer la TA et faire une imagerie cérébrale en urgence | Papille soulevée aux bords effacés, vaisseaux masqués, hémorragies péripapillaires : œdème papillaire — TA et imagerie en urgence. |
| p-fondoeil-6 | 2 | OPH-250 | Tache rouge cerise sur une rétine blanchâtre : occlusion de l’artère centrale de la rétine | Fovéa rouge sombre au centre d’une rétine pâle et œdémateuse : tache rouge cerise = OACR, une urgence (AVC oculaire). |
| p-fondoeil-7 | 2 | OPH-252 | Occlusion de la veine centrale de la rétine | Hémorragies dans les 4 quadrants qui irradient de la papille, veines tortueuses et dilatées : OVCR. |
| p-fondoeil-8 | 3 | OPH-287 | Le bord d’un décollement de rétine rhegmatogène qui englobe la macula (macula-off) | Les flèches suivent la limite d’une rétine soulevée et terne qui englobe la fovéa : décollement de rétine macula-off. |
| p-cv-1 | 1 | OPH-302 | Fiable et normal | Fiabilité excellente, GHT normal, MD ≈ 0 et seule la tache aveugle en temporal : champ normal. |
| p-cv-2 | 2 | OPH-302 | Avancé : MD < −12 dB | MD de −16,93 dB, au-delà de −12 dB, sur un test fiable : glaucome à un stade avancé. |
| p-cv-3 | 2 | gen vf:arcuate | Méridien horizontal; bord inférieur de la papille | Arc de points déprimés dans l’hémichamp supérieur, arrêté par le méridien horizontal : glaucome, fibres inférieures atteintes. |
| p-cv-4 | 1 | gen vf:fp | Non fiable : trop de faux positifs, refaire le test | Faux positifs à 27 % et GHT « sensibilité anormalement élevée » : test non fiable, à refaire. |
| p-cv-5 | 2 | OPH-283 | Hémianopsie homonyme gauche : lésion rétrochiasmatique droite | Hémichamp gauche perdu aux deux yeux, coupé sur le méridien vertical : hémianopsie homonyme gauche, lésion rétrochiasmatique droite (ici occipitale). |
| p-cv-6 | 1 | schéma | Chiasma optique (ex. adénome hypophysaire) | Deux hémichamps temporaux perdus, limités par le méridien vertical : fibres croisées touchées au chiasma. |
| p-cv-7 | 2 | schéma | Opacité des milieux (cataracte) ou petite pupille | La déviation corrigée efface tout : la baisse est diffuse, pas localisée — pensez milieux avant glaucome. |
| p-cv-8 | 2 | gen vf:altitudinal | Défaut altitudinal inférieur : neuropathie optique ischémique antérieure | Tout l’hémichamp inférieur perdu, bordé par le méridien horizontal : défaut altitudinal du nerf optique. |

## Cas en images (35) — ★ = vedette
| id | thème | niv. | photo | bonne réponse | signe décisif |
|---|---|---|---|---|---|
| ic-c01 | cornee | 1 | OPH-057 | Kératite épithéliale herpétique (dendrite à HSV) | Lésion épithéliale fine et ramifiée : dendrite herpétique. |
| ic-c02 | cornee | 3 | OPH-064 | Pseudodendrites : surélevées, sans bulbes terminaux, se colorent peu à la fluorescéine | Plaques épithéliales ramifiées et surélevées, sans bulbes terminaux, après un zona : pseudodendrites. |
| ic-c03 ★ | cornee | 1 | OPH-070 | Ulcère bactérien probable : retirer les lentilles, grattage pour cultures, antibiotiques fortifiés en urgence | Infiltrat stromal central, dense et suppuré, dans un œil très injecté : ulcère bactérien (Pseudomonas chez le porteur de lentilles). |
| ic-c04 | cornee | 2 | OPH-067 | Infiltrat stromal en anneau : Acanthamoeba | Anneau blanchâtre paracentral dans le stroma : infiltrat en anneau de l’Acanthamoeba. |
| ic-c05 | cornee | 2 | OPH-049 | Des guttae : dystrophie endothéliale de Fuchs | Fines excroissances sur l’endothélium, dans le reflet de la fente : guttae de Fuchs. |
| ic-c06 | cornee | 2 | OPH-040 | Kératocône (stries de Vogt) | Lignes fines, verticales et parallèles dans le stroma profond : stries de Vogt du kératocône. |
| ic-c07 | cornee | 2 | OPH-043 | Hydrops aigu : rupture de la Descemet, œdème stromal | Opacité œdémateuse blanc-bleu au sommet du cône : hydrops aigu. |
| ic-c08 | cornee | 1 | OPH-073 | Ptérygion : opérer s’il menace l’axe visuel, induit de l’astigmatisme ou gêne beaucoup | Tissu fibrovasculaire triangulaire dont la tête franchit le limbe et atteint le bord pupillaire : ptérygion. |
| ic-c09 | cornee | 1 | OPH-086 | Irriguer immédiatement et abondamment jusqu’à un pH neutre, puis examiner | Cornée opaque après une brûlure alcaline : on irrigue d’abord, on évalue ensuite. |
| ic-c10 | cornee | 3 | OPH-104 | Ligne de Khodadoust : rejet endothélial | Ligne de précipités à la limite d’une zone œdémateuse, en diffusion sclérale : ligne de Khodadoust. |
| ic-c11 | cornee | 1 | OPH-030 | Une perte d’épithélium : abrasion cornéenne | Plage verte bien limitée, sans infiltrat blanc dessous : abrasion épithéliale. |
| ic-c12 | cornee | 2 | OPH-075 | Infiltrats sous-épithéliaux immuns de l’adénovirus | Multiples opacités rondes sous-épithéliales dans l’axe visuel : infiltrats de l’adénovirus. |
| ic-g01 | glaucome | 1 | OPH-140 | Fermeture aiguë de l’angle : mesurer la PIO, la faire baisser tout de suite, puis iridotomie au laser des deux yeux | Œil droit rouge à la cornée trouble, œil gauche calme : fermeture aiguë de l’angle. |
| ic-g02 | glaucome | 3 | OPH-143 | Une crise antérieure de fermeture aiguë de l’angle (glaukomflecken) | Taches blanches sous la capsule antérieure et atrophie irienne : cicatrices d’une crise de fermeture de l’angle. |
| ic-g03 | glaucome | 2 | OPH-154 | Matériel pseudoexfoliatif : risque de glaucome et de fragilité zonulaire | Flocons blancs le long du rebord pupillaire : pseudoexfoliation. |
| ic-g04 | glaucome | 2 | OPH-157 | Défauts de transillumination : syndrome de dispersion pigmentaire | Fentes radiaires de transillumination en périphérie de l’iris : dispersion pigmentaire. |
| ic-g05 | glaucome | 3 | OPH-160 | Ligne de Scheie : dispersion pigmentaire | Ligne pigmentée en périphérie du cristallin, pupille dilatée : ligne de Scheie de la dispersion pigmentaire. |
| ic-g06 | glaucome | 2 | OPH-319 | Néovaisseaux iriens (rubéose) : risque de glaucome néovasculaire | Fins vaisseaux en dentelle sur l’iris, près du bord pupillaire : néovascularisation irienne. |
| ic-g07 | glaucome | 1 | OPH-167 | Glaucome congénital (buphtalmie) | Cornées grandes aux deux yeux : buphtalmie, glaucome congénital jusqu’à preuve du contraire. |
| ic-g08 | glaucome | 3 | OPH-170 | Stries de Haab : ruptures de la Descemet, horizontales ou curvilignes | Lignes curvilignes à double contour dans la cornée profonde : stries de Haab. |
| ic-g09 | glaucome | 3 | OPH-148 | Bloc pupillaire (iris bombé) : iridotomie au laser ou chirurgicale | Le faisceau de la fente montre un iris convexe presque collé à la cornée : iris bombé par bloc pupillaire. |
| ic-g10 | glaucome | 2 | OPH-137 | Une hémorragie papillaire : glaucome actif, revoir la PIO cible | Strie rouge au bord inférotemporal d’une papille excavée : hémorragie papillaire, signe de progression. |
| ic-x01 | general | 1 | OPH-005 | Hémorragie sous-conjonctivale : rassurer, mesurer la TA, revoir les anticoagulants | Sang plat, bien limité, sous la conjonctive bulbaire : hémorragie sous-conjonctivale. |
| ic-x02 | general | 1 | OPH-346 | Un hyphéma : éliminer un globe ouvert, mesurer la PIO, dépister la drépanocytose si à risque | Croissant rouge déposé dans le bas de la chambre antérieure : hyphéma. |
| ic-x03 | general | 2 | OPH-198 | Un hypopyon : endophtalmie liée à la bulle — prélèvements et antibiotiques intravitréens le jour même | Niveau blanc-jaune en bas de la chambre antérieure dans un œil injecté et chémotique : hypopyon, endophtalmie. |
| ic-x04 | general | 2 | OPH-375 | Sclérite antérieure nodulaire : chercher une maladie systémique (PR, vascularite) | Vaisseaux sclérais profonds engorgés autour d’un nodule sous le limbe : sclérite nodulaire. |
| ic-x05 | general | 1 | OPH-341 | Follicules : conjonctivite virale (adénovirus) ou à Chlamydia | Grains ronds, pâles, au centre avasculaire, sur la conjonctive palpébrale : follicules. |
| ic-x06 | general | 2 | OPH-369 | Zona ophtalmique (V1) : antiviral oral rapide et examen ophtalmologique | Vésicules et croûtes sur base érythémateuse, d’un seul côté, dans le territoire V1 : zona ophtalmique. |
| ic-x07 | general | 3 | OPH-249 | Une artère ciliorétinienne (circulation ciliaire) la perfuse malgré l’occlusion de l’artère centrale | Langue de rétine normale entre la papille et la macula dans une rétine blanche : territoire d’une artère ciliorétinienne. |
| ic-x08 | general | 2 | OPH-254 | Occlusion de branche veineuse (temporale inférieure) | Hémorragies groupées dans le secteur temporal inférieur, rétine supérieure épargnée : occlusion de branche veineuse. |
| ic-x09 | general | 2 | OPH-259 | Néovaisseaux papillaires : rétinopathie diabétique proliférante | Fines boucles vasculaires sur la papille, avec hémorragies rétiniennes autour : néovaisseaux papillaires. |
| ic-x10 | general | 3 | OPH-274 | NOIA artéritique : VS, CRP et corticoïdes à haute dose le jour même, biopsie de l’artère temporale | Papille gonflée et d’un blanc crayeux : œdème pâle de la NOIA artéritique (artérite à cellules géantes). |
| ic-x11 | general | 3 | OPH-282 | La plus petite (œil gauche du patient) : elle dilate mal dans le noir — syndrome de Horner probable | Dans le noir, la pupille droite se dilate, la gauche reste petite : l’écart augmente dans le noir, la petite pupille est anormale. |
| ic-x12 | general | 3 | OPH-281 | Anisocorie physiologique : les deux pupilles se dilatent à la cocaïne | Après cocaïne, les deux pupilles se dilatent : voie sympathique intacte des deux côtés. |
| ic-x13 | general | 3 | OPH-286 | Suspicion de mélanome choroïdien : référence en oncologie oculaire (échographie A/B, imagerie) | Grande lésion choroïdienne pigmentée avec amas de pigment orange : signe de risque de mélanome. |

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
