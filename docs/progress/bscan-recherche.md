# Recherche — simulateur d’échographie B (rôle : recherche et spécification)

Mis à jour : 2026-11-22.

## Fait
- Corpus : 21 vidéos visionnées dans le navigateur intégré (aucun téléchargement), transcriptions lues, 6 à 12 captures par vidéo (analyse seulement, rien dans le dépôt) ; 14 sources écrites lues. Voir `docs/bscan/CORPUS.md`.
- Grille d’extraction remplie avec source et minutage : `docs/bscan/GRILLE.md`.
- Consensus, 11 désaccords, 3 écarts dans le contenu actuel : `docs/bscan/CONSENSUS.md`.
- Spécification du simulateur (œil 3D, sonde, image B procédurale, gain, cinétique, 13 cas + 4 artéfacts, objectifs, évaluation, écrans, faisabilité) : `docs/bscan/SPEC-SIMULATEUR.md`.
- Questions pour l’échographiste expert (14 bloquantes) : `docs/bscan/VALIDATION.md`.

## Prototype (2026-11-22)
- Route `#inv-bscan-sim` livrée : œil 3D (three.js 0.159.0 local), sonde glissable, image B procédurale, gain en dB, cinétique, œil normal puis 5 cas. Détail et écarts : `docs/bscan/SPEC-SIMULATEUR.md`, section 13.
- Test de fumée ajouté à `tests/run.py` (`sim_smoke`, sur `site/`).
- Clés d’interface `bs3.*` définies dans `src/bscan-sim.js` (`BscanSim.keys`), non recopiées dans `src/i18n.js`.

## Reste
- Revue du rendu par l’expert sur le prototype (questions 9.1 à 9.6 de `VALIDATION.md`).
- Les 8 autres tableaux, la carte de couverture, l’étiquetage, le bilan, l’œil gauche.
- Test sur un vrai iPhone (import dynamique depuis `capacitor://`) : non fait.
- Lot L0 : réponses de l’expert aux questions bloquantes, avant tout code.
- Lire Byrne et Green, et Harrie et Kendall (non accessibles en ligne).
- Visionner les cours de Yale Fisher (ASRS Image Bank), repérés mais non vus.
- Rôle « ressources visuelles » : vérifier le point d’intérêt « Sonde (côté temporal, 9 h) » du média `m-bscan-2` (L9 de l’œil droit : la sonde est en nasal selon le consensus et selon la fiche elle-même).

## Blocages et points d’attention
- three.js par CDN est incompatible avec la CSP actuelle, le hors-ligne et l’app iOS : la spécification recommande une copie embarquée (`vendor/three/`), à décider par le propriétaire et le rôle « web ».
- Sources non consignées dans `market/SOURCES.md` (fichier d’un autre rôle) : tout est dans `docs/bscan/CORPUS.md`.
- Limites du corpus (transcriptions automatiques, captures basse résolution, 3 conférences lues par mots-clés) : détaillées en tête de `CORPUS.md`.
