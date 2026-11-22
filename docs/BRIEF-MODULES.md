# Brief commun — nouveaux modules cliniques (2026-11-22)

Public : externes et R1 au Québec. Connaissances solides + points clés, pas l'examen de spécialité.

## Lire d'abord (obligatoire)
docs/PLATFORM.md, docs/STYLE-PEDAGO.md (budgets, arbre v2, bloc Traitement), brand/BRAND.md, docs/RIGHTS.md, docs/FACTS.md, les 2 dernières passes de docs/CRITIQUE-SEVERE.md.
Fiche modèle de bout en bout : g-crise (data/fiches-glaucome.js) → 4 écrans dans src/views.js, data/voir-hotspots.js (zone ≤ 8 %, règle du centre, biais de longueur ≤ 40 %, pas de mot du titre dans la bonne réponse), src/figures-mech.js (mécanisme dessiné, pas-à-pas unique), cat.algo v2, cat.vignette ≤ 25 mots, treatment {first, refer, pitfall, qc}, quiz, surcouche EN (data-en/), câblage catalogue/hub.
Le module Rétine (data/fiches-retine.js etc., autre agent) est le premier « nouveau module » : copie son câblage (hub, build order dans tools/build.py, catalogue) dès qu'il est poussé.

## Chaque fiche
Voir (vraie image + point chaud mérité ou choix rédigés) · Comprendre (mécanisme dessiné 4–5 étapes) · Décider (≤ 3 drapeaux rouges, arbre v2 + vignette, Traitement adapté au Québec, délais de référence formulés pour l'externe/omni) · S'entraîner (2–3 questions) · EN complet. Chaque affirmation clinique vérifiée (AAO PPP, EyeWiki, sociétés canadiennes, NANOS, AAPOS, etc.) et sourcée dans docs/FACTS.md ; doutes sous « à valider par un clinicien ».

## Images (politique du propriétaire)
Site gratuit, maximum d'images, EyeRounds CC BY-NC-ND inclus. Si un jour payant, les images NC seront retirées, donc : à qualité égale, préférer CC0 / domaine public / CC BY / CC BY-SA / SVG maison ; chaque image porte sa licence dans les données.
EyeRounds : catalogues imgsrc/catalog.json, imgsrc2/catalog2.json, jamais les RESTRICTED_IDS de tools/build_web.py ; surcouches seulement, pas de recadrage, pas sur les réseaux.
Images libres (Wikimedia Commons, PMC open access CC BY) : licence vérifiée sur la page (WebSearch/WebFetch) puis ajout à imgsrc3/sources.json ; le workflow media.yml télécharge, revérifie et commit (le conteneur n'accède pas à Wikimedia/PMC). Jamais d'image NC de revue, ni Google Images, ni visage identifiable.

## Coordination
Arbre unique /home/claude/ophtalmo-academie, plusieurs agents en parallèle. Fichiers de données et de figures propres à ton module (data/fiches-<module>.js, data-en/fiches-<module>.js, src/figures-<module>.js). Fichiers partagés (src/views.js, src/core.js, tools/build.py, data/voir-hotspots.js, docs/FACTS.md) : modifications courtes et ciblées, `git pull --rebase` souvent.
Publier UNIQUEMENT avec `python3 tools/push.py "<message en français>"`, et seulement quand `python3 tools/build_web.py`, `python3 tests/run.py`, `node tools/validate.js` passent (test_site.py --no-build --quick : 2 échecs hors-ligne connus acceptés). Ne jamais pousser un état cassé : push.py commit tout l'arbre, y compris le travail des autres — vérifie que les tests passent au moment du push.
Jamais de message, de courriel ni de création de compte.
