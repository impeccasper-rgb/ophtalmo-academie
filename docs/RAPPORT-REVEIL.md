# Ocelle — rapport de réveil (2026-11-21, fin du cycle 11)

## 1. Le meilleur cas à essayer
https://impeccasper-rgb.github.io/ophtalmo-academie/?lang=fr#cas-vedette (EN : `?lang=en#cas-vedette`)
Baisse de vision brutale et indolore : un vrai fond d'œil, une question sur 4 signes, puis le signe décisif annoté (tache rouge cerise de l'OACR). Puis, pour voir la nouvelle pédagogie : `#g-crise/voir` → `/comprendre` → `/decider` → `/entrainer`.

## 2. Site déployé
- https://impeccasper-rgb.github.io/ophtalmo-academie/ : FR/EN, PWA hors ligne (images déjà vues), polices locales, filtre de droits.
- 27 fiches (cornée 14, glaucome 13) en 4 écrans séparés :
  - **Voir** : touche le signe, avec une récompense qui se mérite.
  - **Comprendre** : un mécanisme dessiné qu'on fait avancer au toucher.
  - **Décider** : un arbre décisionnel avec sa vignette, et un bloc Traitement adapté au Québec.
  - **S'entraîner**.
- Module A : 42 micro-fiches. Investigations : 6 examens, 46 items. 105 cas sur images, 190 QCM, 402 termes de glossaire.
- Contrôles : `tests/run.py` 0 problème ; `test_site.py --quick` 85 contrôles, 2 échecs connus et assumés (hors ligne, les images non encore vues ne sont pas en cache — choix de taille, 25 Mo) ; `validate.js` OK (zones ≤ 8 %, biais de longueur des choix ≤ 40 %).
- Critique sévère indépendant : 4 → 6 → 7 → **8/10** (docs/CRITIQUE-SEVERE.md).

## 3. iOS réellement testée
Capacitor 8, compilée et auto-testée sur simulateur iPhone par GitHub Actions (macOS) à chaque poussée. Toutes les compilations récentes sont vertes, et la preuve (captures, vidéo, journal d'autotest) est sur la branche `ios-evidence`. TestFlight : désactivé, faute de compte Apple Developer.

## 4. Vidéos
18 MP4 dans `videos/`, retournés le 2026-11-22 sur l'interface actuelle (Playwright), en 9:16 et 16:9, FR et EN, avec une affiche pour chacun : cas vedette, A-scan, image du jour + Voir « touche le signe », et une variante réseaux sociaux (schéma de dendrite, mécanisme dessiné pas à pas, arbre décisionnel). Les fichiers `ocelle-social-*` n'utilisent que des schémas SVG originaux, vérifié image par image pendant l'enregistrement (voir `videos/README.md`, tableau des droits).

## 5. Analyse concurrentielle
`market/ANALYSE.md` et `market/SOURCES.md` (sources datées du 2026-11-21).
- Aucune ressource interactive à base d'images en français.
- Le concurrent le plus proche est OcuLearning : en anglais, avec des pubs depuis octobre 2026 et une version française annoncée.
- Le vrai problème du secteur est la rétention : seulement 14,4 % des participants reviennent.
- Positionnement : lire le signe sur l'image, en 30 secondes, chaque jour.

## 6. Plan de lancement
`launch/PLAN.md` : 6 semaines, 0 à 500 $ CAD, avec un seul lien (le cas vedette).
- Canaux, par ordre de priorité :
  1. Résidents enseignants (mode séance).
  2. Associations étudiantes.
  3. Groupes d'intérêt en ophtalmologie.
  4. Instagram et TikTok.
  5. Communautés EDN.
  6. Puis le Canada anglophone et Reddit.
- Les contenus et les brouillons de messages sont dans `launch/CONTENU.md`, la page d'accueil de campagne dans `launch/LANDING.md`, les risques dans `launch/RISQUES.md`.
- Rien n'a été envoyé.

## 7. Ce qui exige ton intervention
1. **Compte Apple Developer** (99 $ US/an). Il faut ton nom légal, l'identifiant de l'app, une clé API App Store Connect et des secrets GitHub. Ensuite, j'active TestFlight.
2. **Courriel à EyeRounds**. Le brouillon est dans `docs/RIGHTS.md` (non envoyé). Il demande deux choses : l'autorisation d'utiliser les images sur les réseaux sociaux et une confirmation de l'usage non commercial.
3. **Relecture par un clinicien**. Il faut relire les posologies et les doutes listés dans `docs/FACTS.md` (« à valider par un clinicien »), notamment :
   - le délai de 24 h pour le glaucome congénital ;
   - le zona vu après 72 h ;
   - les centres ouverts 24/7 pour la crise d'angle.
4. **Marque « Ocelle »**. Il faut vérifier la disponibilité (OPIC, USPTO) et choisir un nom de domaine.
5. **Loi 25 — courriel du responsable**. La page `#confidentialite` (FR/EN, liée au pied de page, au menu « Plus » et à Progression → Affichage) est en ligne. Il reste à fournir le **courriel du responsable de la protection des renseignements personnels** : remplacer « [courriel à confirmer] » dans `PRIVACY_OFFICER` (en haut de `src/privacy.js`), puis changer `PRIVACY_DATE`. Mesure d’audience : GoatCounter est prêt mais **désactivé** ; pour l’activer, crée toi-même le compte GoatCounter puis renseigne `GOATCOUNTER_CODE` (voir `docs/PLATFORM.md`, « Mesure d’audience »).
6. **Historique git**. Les 44 images sans licence CC ont été retirées, mais elles restent dans l'historique. La purge exige une poussée forcée : c'est ta décision.
7. **Comptes sociaux** à créer, et approbation de chaque message avant tout envoi.

## Limites connues
16 micro-fiches sur 42 dépassent encore 1,5 écran. La cause est le carrousel photo, et il faudra en revoir la mise en page.
