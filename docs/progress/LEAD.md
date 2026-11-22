# Journal du chef de projet (Ocelle)

## Cycle 1 (11 h 36 – 12 h 20) — fait
- Marché : market/ANALYSE.md + SOURCES.md (49 sources). Lacune = lire les examens; aucune app FR; OcuLearning concurrent (pub depuis oct. 2026, FR annoncé).
- Identité : Ocelle, « Apprends à voir le signe qui compte », brand/ (logo, icônes, palette fluorescéine).
- Web : i18n FR/EN (~330 clés), build_web.py → site/, PWA, Pages déployé : https://impeccasper-rgb.github.io/ophtalmo-academie/
- iOS : Capacitor 8 (SPM), ios.yml (build simulateur + autotest + captures + vidéo), TestFlight désactivé.
- Investigations : 6 examens, 44 items (data/investigations.js), 44 médias annotés (data/inv-media.js).
- Droits : 347 images CC BY-NC-ND OK; 44 sans CC retirées du site, de l’app et du dépôt (historique git à purger : décision utilisateur). Brouillon de courriel EyeRounds dans docs/RIGHTS.md (NON envoyé).
- Traduction : hy 64/64, quiz 67/190.

## Cycle 2 (prévu 12 h 52)
- Web : masquer le compte à rebours de stage sur le web (dates optionnelles), texte FR des signalements, Investigations dans la navigation + accueil, page/route « cas vedette » (#cas-vedette → p-fondoeil-6), « Image du jour » + série avec gel (Duolingo), html.native.
- Exercices : finir/intégrer (agent cycle 1 en cours).
- Traduction ×3 : quiz restant (123) + glossaire ; fiches cornée ; fiches glaucome + capsules + cas.
- Images libres : agent qui choisit des images Wikimedia/PMC CC-BY pour les lacunes (gonio normal/fermé, B-scan DR/HV/CE, A-scan, CV 10-2) → manifeste media/sources.json; téléchargement par workflow GitHub Actions (le conteneur n’a pas accès à Wikimedia).
- Pédagogie : enrichir cornée/glaucome/général (nouveaux cas d’images), revue des doutes.
- Acquisition : campagne FR faible coût + EN, scripts de reels, lien vers le cas vedette.

## Cycle 3
- Vidéos d’aperçu (Playwright, interface réelle, 9:16 et 1:1), tests indépendants (web + artefacts iOS), corrections, rapport de réveil.

## Cycle 2 (12 h 52 – 13 h 27) — fait
- Web : Investigations dans la nav (5e onglet), Image du jour + série avec gel, #cas-vedette (OACR, OPH-250), crédits + avertissement éducatif, imgsrc3 pris en charge.
- Traduction : quiz 132/190 ; fiches cornée 14/14 ; fiches glaucome 13/13 ; capsules 2/2 ; cas 10/10.
- Pédagogie : 46 items Investigations (sans image restreinte), 35 cas sur images (data/cases-images.js), corrections outils (docs/PEDAGOGY-REVIEW.md).
- Images libres : 60 images (PMC + Commons) → workflow media.yml lancé.
- Acquisition : launch/ (PLAN, CONTENU, LANDING, RISQUES). Photos EyeRounds hors réseaux sociaux.
- iOS : agent en cours (exécuteur robuste, poussé 18:04Z).

## Cycle 3 (prévu 14 h 00)
- Exercices : corrections outils 1–5 (+6–8), route #cas-images + section hub pour G.OPH.imageCases, Shaffer 3 = 20–35°.
- Web : cases-images dans data_order, sous-titre EN dupliqué, crédits imgsrc3, supprimer m-* restreints inutilisés.
- Traduction : 58 QCM + glossaire 353 termes.
- Visuels : hotspots imgsrc3 → nouveaux items (après le workflow).
- Design/motion : vidéos d’aperçu à partir de l’interface réelle (Playwright, 9:16 + 16:9, sous-titres FR/EN).
- Tests indépendants (Extra) : site + artefacts iOS + revue clinique échantillonnée.

## Cycle 4 (prévu ~15 h 30) — corrections issues du rapport de tests
1. Pédagogie : biais « bonne réponse = la plus longue » (74 % Investigations, 86 % cas images) → équilibrer les options ; ic-c06 hotspot (x56,y56, stries obliques), C-012 (ISGEO 270° vs AAO 180°), p-oct-8 libellé, p-ascan-5 anneaux.
2. Traduction : légendes du catalogue en anglais (data-en/catalog.js), cas-a2 et cas-b5, textes A1–A5 (avec le web : déplacer en données), tableaux COMPARE.
3. Web : déverrouiller les modules pour le public (pas de boîte « verrouillé »), lien d'évitement, sélecteur de profondeur (role=radio sans aria-pressed), focus lightbox, aria-expanded/aria-modal, débordement atlas 320 px, h1 manquants.
4. Exercices : bouton Agrandir hors du role=img, couches OCT accessibles, cibles tactiles ≥ 24 px, noms accessibles des SVG.
5. iOS : relancer sur l'arbre actuel, captures vides.

## Cycle 9 — fait (ac13f46)
- Voir « touche le signe » (points chauds + repli 3 options), Comprendre côte à côte + chaîne causale, en-tête unifié, micro-fiches 3 points, hubs (#cas images, #reviser tuiles, accueil 2,26 écrans).
- tests/run.py 0 problème ; test_site --quick 85 contrôles, 2 échecs connus (images hors ligne non mises en cache : g-gpao, reviser).
- Reste : 23/42 micro-fiches > 1,5 écran (max 2,07 a-physiologie/transparence).
- Critique sévère passe 3 lancée.

## Critique passe 3 = 7/10 (55d49d2) → cycle 10 lancé
- Web : récompense Voir méritée (rayons, aire ≤ 8 %, centre ≠ succès), vrais distracteurs du repli, héros d'accueil, boucle placée autour du signe, #reviser en grille.
- Mécanismes (nouvel agent) : figure de mécanisme dessinée pour les 27 fiches, écrans sans figure, micro-fiches ≤ 1,5 écran, corrections cliniques (c-brulure, g-gpao, g-crise Québec, c-herpes), vignettes d'arbre 27/27.
- Puis critique passe 4 ; cible ≥ 8/10.

## Cycles 10–11 — faits (9b2451c, 9e0d9ef, 7a9b5cc)
- Critique passe 4 = 8/10. Comprendre à un seul pas-à-pas, Voir mérité + « Trouvé avec l'indice », biais des choix corrigé, « selon la source » retiré, restes cliniques sourcés, vignettes ≤ 25 mots.
- Rapport de réveil : docs/RAPPORT-REVEIL.md.
