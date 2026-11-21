# Progrès — pédagogie clinique (Investigations)

## Fait (21 nov. 2026)
- `data/investigations.js` validé (node : `6 44`).
  - `G.OPH.inv` : 6 examens (bscan, ascan, oct, gonio, fondoeil, cv), champs why/how/normal/keys/pitfalls bilingues, `tool` selon le contrat, `practice` → ids existants.
  - `G.OPH.invPractice` : 44 items (7/7/8/7/8/7), niveaux 14/20/10, 4 options + 4 « why » chacun, bonne réponse répartie 11/11/11/11.
  - `G.OPH.invMediaRequests` : 44 entrées (31 photos du catalogue vérifiées visuellement, 13 schémas `photo: null`) avec description de l’image et positions approximatives des hotspots (%).
- `docs/PEDAGOGY-REVIEW.md` : tableau des items, 3 items démo, doutes à vérifier, sources.

## Reste / pour les autres rôles
- Ressources visuelles : créer `data/inv-media.js` à partir de `G.OPH.invMediaRequests` (vérifier les positions des hotspots, dessiner les 13 schémas étiquetés « schéma »).
- Droits : OPH-190, 200–209, 292, 293 = « Usage pédagogique EyeRounds » (non CC); les autres CC BY-NC-ND → aucune modification de l’image (ND).
- Exercices interactifs : le moteur peut garder l’ordre des options tel quel (déjà mélangé). Les items p-cv-4 et p-oct-5 parlent de « panneau A/B/C » de l’image — à ne pas confondre avec des lettres d’options si l’UI en affiche.

## Doutes (détail dans docs/PEDAGOGY-REVIEW.md)
- Épaisseur normale de la paroi postérieure en B-scan (≈ 1–1,5 mm) approximative.
- OPH-302 : légende du catalogue inversée par rapport au rapport imprimé (OS à gauche).
- OPH-219 : deux photos de la fig. 1, latéralité non précisée par la source.
- OPH-172 : localisation exacte de la bande ciliaire large vs bande de cyclodialyse à confirmer.
- OPH-214 et OPH-193 exclus (œil atteint incertain).

## Blocages
- Aucun. Sources web non ajoutées à market/SOURCES.md (hors périmètre) : listées dans PEDAGOGY-REVIEW.md.
