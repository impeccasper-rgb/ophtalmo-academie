# Module D · Rétine — avancement (rôle pédagogie clinique + ressources visuelles)

## Fait (22 nov. 2026)
- 8 fiches `r-*` (data/fiches-retine.js), ordre pédagogique dans `ORDER.D` (src/core.js) : DPV et déchirure, décollement rhegmatogène, OACR, occlusions veineuses, rétinopathie diabétique, rétinopathie hypertensive, DMLA, endophtalmie. Liste « À reconnaître aussi » (bonus D, 6 entrées).
- Voir : photo + point chaud ou choix rédigés (data/voir-hotspots.js), photos et licences (data/ext-retine.js, champ `license`).
- Comprendre : mécanismes dessinés, 4–5 étapes (src/figures-retine.js : kits globe, fond d’œil, couches externes + Amsler).
- Décider : 3 drapeaux, arbre v2, vignette ≤ 25 mots, bloc Traitement (first, refer, pitfall, qc).
- S’entraîner : 18 QCM D-001…D-018 (data/quiz-d.js, explication courte + `deep`), couche HY (data/hy-retine.js).
- Surcouche EN complète : data-en/fiches-retine.js (fiches, HY, photos, QCM, bonus).
- Câblage module D : core.js (L.modules, ORDER, CAPS, menu), views.js (module-d, express-d, accueil), learn.js (HY.mod, hub, progression, filtres), i18n.js, styles.css (.chart-line.l4), validate.js, validate-hy.js, build.py, build_web.py, tests/run.py.
- Sources et doutes : docs/FACTS.md section G.

## Reste
- Fiches 9 (toxicité de l’hydroxychloroquine, dépistage AAO) et 10 (choriorétinopathie séreuse centrale) : non commencées.
- Images libres pour la DMLA humide, l’occlusion de branche, la rétinopathie hypertensive et l’endophtalmie : aucune candidate CC BY / CC0 vérifiable trouvée (Commons inaccessible depuis le conteneur) ; EyeRounds CC BY-NC-ND utilisé.

## Blocages
- commons.wikimedia.org et en.wikipedia.org/wiki/File:* refusés par WebFetch ; licences Commons lues seulement au build (media.yml).
