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

## Reste / pour les autres rôles
- **Exercices interactifs** : appliquer les corrections 1–5 de PEDAGOGY-REVIEW.md (« Corrections outils »); brancher `G.OPH.imageCases` (même schéma que `invPractice`, + `topic`, `featured`) avec `G.OPH.imageCasesMedia` (kind/photo/hotspots/alt; crédit via `Photo.credit`). Le moteur accepte un objet média direct (`mediaById(obj)`).
- **Web/build** : ajouter `data/cases-images.js` aux données chargées (FR, contenu bilingue natif); route proposée `#cas-images` ou intégration au hub Investigations.
- **Ressources visuelles** : supprimer les entrées restreintes devenues inutiles (`m-bscan-3`, `m-oct-6`, `m-gonio-1`, `m-fondoeil-3`, `m-fondoeil-4`, `m-cv-3`, `m-cv-4`); vérifier visuellement les hotspots des cas fins (voir revue §Points à vérifier).
- Lacune : aucune image de cellulite orbitaire au catalogue.

## Blocages
- Aucun. Sources web listées dans PEDAGOGY-REVIEW.md (market/SOURCES.md hors périmètre).
