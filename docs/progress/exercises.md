# Avancement — exercices interactifs (Investigations)

## Fait (2026-11-21)
- `src/investigations.js` (~1 190 lignes) et `src/investigations.css`.
  - `Views.investigations` (hub, 6 cartes avec progression) et `Views['inv-<id>']` pour bscan, ascan, oct, gonio, fondoeil, cv (+ tout id supplémentaire présent dans `G.OPH.inv`).
  - Page : why → how/normal/keys/pitfalls → outil interactif → pratique → navigation précédent/suivant.
  - `Inv.practice(host, items, opts)` : Observe → Réponds (options mélangées, « Je ne sais pas », confiance sûr/hésitant) → Révèle (anneaux animés sur les hotspots, explication par option, signe décisif). Enregistre `Store.p.inv[itemId] = {ok:1|0, conf:'sure'|'unsure'|'idk', t}` puis `Store.touch()`. Clavier : 1–9 pour répondre, 0 ou ? pour « Je ne sais pas », focus géré. Fin de série : score, « refaire les ratés et hésitations ».
  - 6 outils SVG originaux étiquetés « schéma » : ascan-sim, bscan-probe, oct-layers, gonio-grader, vf-reader, fundus-explorer.
  - Générateurs de schémas réutilisables comme médias : `{kind:'gen', gen:'oct:srf'}` (voir API ci-dessous).
- Fonctionne avec le vrai contenu (`data/investigations.js` 44 items, `data/inv-media.js` 47 médias). Une fixture de secours interne (marquée FALLBACK FIXTURE) n’est utilisée que si `G.OPH.inv` est absent.
- Tests Playwright (css/js injectés dans dist/preview.html) : 390, 1280, 1280 sombre, FR + EN, réduction des animations, mode fixture : aucune erreur JS, aucun débordement horizontal, toutes les séries de pratique vont jusqu’au bout, glisser des calipers vérifié.

## API pour les auteurs de contenu
- Médias : `photo` (id du catalogue) ou `svg`, ou `kind:'gen'` + `gen` : `oct:none|irf|srf|ped`, `bscan:<normal|rd|vh|pvd|cd>:<axial|long|trans>[:gain 0–100]`, `gonio:0..4|pas|nv|rec`, `vf:normal|fp|fl|nasal|arcuate|paracentral|altitudinal|bitemporal|homonymous`, `fundus:cup+dischem+cws+drusen`, `ascan:normal|short|long`. Sans `hotspots`, les hotspots par défaut du générateur sont utilisés.
- Hotspots : un seul libellé ≤ 48 caractères = étiquette sur l’image ; sinon anneaux numérotés + légende sous l’image (décisif en gras). Les libellés longs sont donc acceptés.
- Média manquant : repli sur `G.OPH.invMediaRequests[mediaId].photo` (sans hotspots) ; sinon « Image à venir ».
- `m.source` est affiché (lien « page source ») seulement après la réponse ; le crédit reste visible pendant la question.
- Chaînes d’interface : `S('clé', fr, en)` ; toutes les clés (préfixe `inv.`) et leurs textes FR/EN sont listés à l’exécution dans `Inv.keys` (≈ 108) pour copie dans `src/i18n.js`. Une clé présente dans `I18N.dict[lang]` a priorité.

## Reste (autres rôles)
- web : ajouter `investigations` aux src/css de `tools/build.py` et `tools/build_web.py` ; lien de navigation vers `#investigations` (core.js).
- web : `Store.merge` (core.js) ne fusionne pas la clé `inv` : la progression Investigations reste locale et n’est pas fusionnée depuis la copie distante. Ajouter `'inv'` à la liste des clés fusionnées.
- ressources visuelles : 2 items pointent vers des médias absents (`m-gonio-7`, `m-fondoeil-8`) ; repli photo actif mais sans hotspots.
- web/droits : 8 médias `restricted:true` sont affichés tels quels par le moteur ; le filtrage du build public est à faire côté build.

## Points à vérifier (exactitude)
- Valeurs illustratives, non tirées de patients : A-scan (œil court 21,0 mm / ACD 2,6 / cristallin 4,6 ; long 26,5 / 3,6 / 3,8), indices MD/PSD/fiabilité des 9 champs visuels.
- Champ visuel : GHT affiché « — (voir note) » pour les hémianopsies (pas de valeur inventée). Seuils de fiabilité utilisés : pertes de fixation > 20 %, faux positifs > 15 % (SITA), faux négatifs > 33 %.
- Shaffer : correspondance simplifiée structure ↔ grade (4 bande ciliaire, 3 éperon, 2 trabéculum, 1 Schwalbe, 0 fermé) ; plages en degrés 35–45 / 25–35 / ~20 / ≤10 / 0.
- B-scan : conventions d’affichage (sonde à gauche ; en longitudinale le nerf optique en bas de l’écran) ; amplitude des mouvements et réflectivités relatives schématiques.
- OCT : la zone myoïde et la zone d’interdigitation sont dessinées mais non étiquetables ; l’EPR et Bruch forment un seul complexe sauf dans le DEP.
- À relire par la pédagogie : textes cliniques courts des outils (constantes BS_INFO, OCT_LAYERS, OCT_FLUID, GONIO_VAR, VF_EXPL, VF_IDX, FUNDUS_REG, FUNDUS_OV).

## Cycle 3 (2026-11-21)
- Corrections PEDAGOGY-REVIEW « Corrections outils » 1–8 appliquées : coupe transverse = coupe postérieure avec ombre du nerf (+ BS_ORI.trans réécrit, encadré « repère »); « A-scan en immersion, œil phaque » + pic cornéen « double : faces antérieure et postérieure » (clé `inv.as.cap2`); « NOIA, surtout non artéritique »; Shaffer 3 = 20–35°; asymétrie C/D ≥ 0,2; drusen moyens 63–125 µm = DMLA précoce; pic scléral à L + 0,6 mm; MLI ajoutée aux couches OCT (11 couches étiquetables).
- `#cas-images` : hub (progression, filtres thème cornée/glaucome/général et niveau 1–3, « Série de 10 » qui met d’abord les ratés/hésitations, liste des 35 cas avec statut nouveau/réussi/à consolider/à revoir) via `Inv.practice`; résultats dans `Store.p.inv[ic-…]`. Carte « Cas en images » ajoutée au hub `#investigations`.
- `#cas-images/<id>` : un cas en plein écran (classe `focus-view`, comme #cas-vedette), puis « Cas suivant » / « Tous les cas ». Vues enregistrées comme `Views['cas-images/<id>']` (pas de changement du routeur).
- Médias : recherche dans `invMedia` puis `imageCasesMedia`. Photos du catalogue sous licence ouverte (IMG3-*, champ `license`) : la ligne de crédit vient toujours de `Photo.credit` (auteur + licence pendant la question; id + lien source après).
- Lightbox en mode question : légende neutre au lieu du titre du catalogue (évite de révéler la réponse).
- Test Playwright sur site/ (build_web) : 390 FR, 1280 EN, 1280 FR sombre : aucune erreur, pas de débordement, série de 10 complète, lien profond OK, focus-view retiré en quittant.

## Ouvert (cycle 3)
- web : `Shell.invRoutes()` (core.js) ne contient pas `cas-images` ni `cas-images/<id>` : l’onglet Investigations n’est pas surligné sur ces pages.
- Aucune image IMG3 n’est encore utilisée dans invMedia / imageCasesMedia : crédit vérifié par injection de test seulement.
- Les clés `inv.ic.*` (≈ 30) ne sont pas dans src/i18n.js : textes par défaut FR/EN fournis par `S()`, liste dans `Inv.keys`.
