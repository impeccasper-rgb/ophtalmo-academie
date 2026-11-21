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
