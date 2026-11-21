# Progrès — pédagogie clinique (Investigations + cas en images)

## Fait
### Cycle 1 (21 nov. 2026)
- `data/investigations.js` : 6 examens complets, 44 items, `invMediaRequests`.
### Cycle 2 (21 nov. 2026)
- **Droits** : 8 items qui utilisaient des images sans licence CC (OPH-189, 190, 191, 203, 205, 209, 292, 293) remplacés par des photos CC (OPH-308, 307, 136) ou des générateurs (`bscan:vh:long:85`, `gonio:nv`, `vf:arcuate`, `vf:fp`); p-bscan-2 garde le svg du rôle visuels. Vérifié par script : 0 image non CC.
- **Nouveaux items** : p-oct-9 (`oct:srf`), p-cv-8 (`vf:altitudinal`) → **46 items** (7/7/9/7/8/8).
- Médias propres sous nouveaux ids, fusionnés dans `G.OPH.invMedia` par `Object.assign` (n’écrase pas `inv-media.js`).
- Doutes corrigés : p-bscan-7 (sclère ≈ 2,4 mm selon la source, normale ≈ 1 mm), p-ascan-4 (tracés A/B comme le svg), p-fondoeil-4 (latéralité non affirmée).
- **`data/cases-images.js`** (nouveau) : `G.OPH.imageCases` = **35 cas** (cornée 12, glaucome 10, général 13; niveaux 10/14/11), `G.OPH.imageCasesMedia` = 35 photos CC distinctes (aucune déjà utilisée dans les Investigations), hotspots placés à la main sur grille. Vedette : `ic-c03` (`featured:true`).
- `docs/PEDAGOGY-REVIEW.md` : section « Corrections outils » (8 points, ligne + texte + correction), tableaux complets, lacunes, doutes.
- Validation : `node -e "…require('data/investigations.js')…"` → `6 46`; `cases-images.js` charge seul → 35 cas.

### Cycle 4 (21 nov. 2026, dépôt ophtalmo-academie)
- Indice « la bonne réponse est la plus longue » corrigé dans `investigations.js` (74 → 22 % FR, 20 % EN), `cases-images.js` (86 → 23 % / 20 %) et `cases-open.js` (69 → 20 % / 17 %); la plus courte reste ≈ 20–24 %. Commande de contrôle dans PEDAGOGY-REVIEW.md (§ Cycle 4).
- `cases-open.js` : positions de la bonne réponse réparties (8/9/9/9).
- Corrections : ic-c06 (hotspot 56/56, plus de « verticales »), p-oct-8 (« sans toucher l’œil »), m-ascan-5 (anneaux à côté des chiffres + texte qui donnait la réponse retiré du schéma), quiz C-012 FR/EN (≥ 180° = PPP AAO; ISGEO initiale ≥ 270°).
- Validation : fichiers chargés dans node; `tools/build_web.py` OK (missing: none); `tests/web/test_site.py --no-build --quick --only flows` : 32 vérifications, 0 échec.
- Note : des commits d’autres rôles (ac7a1d3, aca1488) ont inclus une partie de ces modifications en cours de route; le reste est dans l’arbre de travail, non commité, non poussé.
- À faire par un autre rôle : `docs/FACTS.md` l. 154 (même attribution ISGEO ≥ 180° à corriger).

## Reste / pour les autres rôles
- **Exercices interactifs** : appliquer les corrections 1–5 de PEDAGOGY-REVIEW.md (« Corrections outils »); brancher `G.OPH.imageCases` (même schéma que `invPractice`, + `topic`, `featured`) avec `G.OPH.imageCasesMedia` (kind/photo/hotspots/alt; crédit via `Photo.credit`). Le moteur accepte un objet média direct (`mediaById(obj)`).
- **Web/build** : ajouter `data/cases-images.js` aux données chargées (FR, contenu bilingue natif); route proposée `#cas-images` ou intégration au hub Investigations.
- **Ressources visuelles** : supprimer les entrées restreintes devenues inutiles (`m-bscan-3`, `m-oct-6`, `m-gonio-1`, `m-fondoeil-3`, `m-fondoeil-4`, `m-cv-3`, `m-cv-4`); vérifier visuellement les hotspots des cas fins (voir revue §Points à vérifier).
- Lacune : aucune image de cellulite orbitaire au catalogue.

## Blocages
- Aucun. Sources web listées dans PEDAGOGY-REVIEW.md (market/SOURCES.md hors périmètre).
