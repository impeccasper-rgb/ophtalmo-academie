# QA mobile avant la démo (Dr Saheb, 23 novembre 2026)

Passe de stabilisation indépendante, faite le 22 novembre 2026 sur le site construit (`site/`). Aucune refonte, aucune nouvelle fonction : on corrige ce qui casse ou gêne sur téléphone.

## Méthode
- **Appareils** : iPhone 13 émulé (`devices['iPhone 13']`, 390 × 664, DPR 3) et petit Android (360 × 740, DPR 3), Chromium de Playwright, toucher activé. Pas de WebKit dans le conteneur : le rendu iOS réel reste à voir sur le téléphone.
- **Combinaisons** : FR/EN × clair/sombre × iPhone/Android. Parcours complet (327 routes) sur 4 combinaisons ; échantillon (≈ 140 routes) sur les 4 autres, refait après les corrections.
- **Routes** : accueil, apprendre, module A et ses 40 micro-fiches, capsules B0/C0, les 35 fiches (B, C, D Rétine) sur les 4 écrans, Investigations et les 6 examens, simulateur `#inv-bscan-sim`, 12 cas, 105 cas en images, cas vedette, image du jour, QCM, Réviser et ses 6 jeux, progression, `#confidentialite`, sources et crédits, atlas, recherche, express B/C/D.
- **Contrôles par route** : erreurs console, requêtes en échec, débordement horizontal, texte rogné ou superposé, contenu caché sous la barre d’onglets (avec encoche émulée : 47 px en haut, 34 px en bas), cibles tactiles < 44 px, images cassées, clés i18n brutes, restes de français en anglais.
- **Parcours interactifs** : jeu Voir sur toutes les fiches et micro-fiches (vrai toucher sur la zone, récompense, autocollant qui ne couvre aucun texte), balayage entre les 4 écrans de chaque fiche, mécanisme pas à pas (35 fiches), arbre décisionnel pas à pas (35 fiches), retour/avancer et liens profonds, persistance après rechargement, barre d’onglets et menu, simulateur B au toucher (sonde, gain, positions, 5 cas), boutons morts (325 boutons touchés sur 46 routes) et liens internes (146), hors-ligne après une visite, installation PWA.
- Scripts de la passe : jetables (bloc-notes de session) ; les vérifications utiles sont devenues des tests de régression (voir plus bas).

## Bogues trouvés et corrigés
| # | Route(s) | Bogue | Correction | Commit |
|---|---|---|---|---|
| 1 | Toutes les fiches (en-tête), arbres décisionnels, mécanismes, étapes des examens | La pastille 1 des étapes (Voir · Comprendre · Décider · S’entraîner) était 5 px plus haute que les autres ; idem pour les points de l’arbre, du mécanisme et des étapes d’investigation. Cause : la règle globale `li + li { margin-top }` appliquée à des listes horizontales. | `margin-top: 0` sur ces 4 listes horizontales (`src/web.css`). | `34383d2` |
| 2 | `#a-examen/gonioscopie` (360 px et 390 px) | Défilement horizontal de 34 px sur Android (4 px sur iPhone) : la colonne de commandes débordait, « Synéchies (PAS) », le menu déroulant et l’interprétation étaient coupés à droite. Cause : un `<select>` prend la largeur de sa plus longue option et la grille `.stack` grandissait avec lui. | `.stack { grid-template-columns: minmax(0, 1fr) }` et `select { max-width: 100% }`. | `34383d2` |
| 3 | Toutes les routes | Cibles tactiles sous 44 px : bouton Menu (32 px), FR/EN (36), puces « Niveau » (32), boutons `.btn.sm` (32) et `.btn.xs` (28), flèches du carrousel (27 × 32), segments (27–36), boutons de confiance (32), fil d’Ariane (19), bouton « i » du crédit de l’accueil (24), termes du champ visuel (19), « Indice » des cartes (22). | Sur écran tactile (`pointer: coarse`) : zone de toucher agrandie par un `::after` invisible, sans changer la taille dessinée ; `:where()` (spécificité 0) garde la position des boutons déjà placés en absolu ; flèches du carrousel à 44 px de large. Les segments (`.seg`, qui rogne ses enfants) passent à 44 × 44 px. Contrôle honnête : zone effective = boîte + extension, rognée par les parents qui cachent leur débordement. | `34383d2`, `60b2c9d` |
| 4 | Toutes (si iOS signale une encoche en haut) | Avec un retrait haut non nul, la barre du haut collante recouvrait les 47 premiers px de la page (le surtitre de l’accueil disparaissait). | `body { padding-top: env(safe-area-inset-top) }` : sans effet quand le retrait vaut 0. | `34383d2` |
| 5 | Chaque changement de page | Une bande fluo de 11 px restait visible au bord droit ~0,2 s après le balayage cobalt (le liseré `::before` à −14 px ne sortait pas de l’écran). | Fin de l’animation à `translateX(calc(101% + 16px))`. | `34383d2` |
| 6 | Figures de gonioscopie (`#a-examen/gonioscopie`, fiches et cas qui l’utilisent) | Les étiquettes « Iris (dernier pli) » et « Bande ciliaire — caché » se superposaient pour Shaffer 0 à 3. | L’étiquette de l’iris se place toujours sous celle de la bande ciliaire (`src/figures-b.js`). | `bd02901` |
| 7 | `#quiz` | Le hub QCM n’avait pas de carte pour le module D (Rétine) : ses 18 QCM ne pouvaient pas être lancés depuis le hub (l’accueil les comptait pourtant). | Carte D ajoutée quand le module a des fiches. | `bd02901` |
| 8 | Fiches, écran S’entraîner (EN) | Le badge du mini-quiz affichait « QCM » en anglais. | « MCQ » en anglais. | `bd02901` |
| 9 | Fiches, écran Décider (EN) | « Case : » avec l’espace française avant les deux-points. | « Case: » en anglais. | `bd02901` |
| 10 | `#a-examen/lampe`, `#a-examen/fluoresceine`, `#a-anatomie/annexes`, écrans Comprendre de cornée (EN) | 3 schémas annoncés en français aux lecteurs d’écran (`aria-label`). | Passent par `fx()` avec leur traduction. | `bd02901` |
| 11 | Écran d’accueil iOS | Pas d’image de lancement : iOS affiche un écran blanc à l’ouverture de l’app installée. | 12 images de lancement (iPhone SE 2/3 à 17 Pro Max), fond cobalt + ocelle + logotype, générées par `tools/make_splash.py` dans `brand/splash/`, `<link rel="apple-touch-startup-image">` écrits par `tools/build_web.py`. | `a3f9a00` |
| 12 | Manifeste | Icônes déclarées `"purpose": "any maskable"` (déconseillé). | Entrées `any` et `maskable` séparées. | `a3f9a00` |
| 13 | Premier chargement (performance) | En français, les 12 surcouches anglaises (`data-en/*.js`, 1,5 Mo brut, 457 Ko compressés, un tiers du JS) étaient téléchargées et analysées pour rien : seul `I18N.applyContent()` les lit, et seulement en anglais. | Petit chargeur en ligne (même règle que `pickLang()` : `?lang=`, puis `oph-lang`, puis langue du navigateur) ; `document.write` bloquant les garde avant `i18n.js` ; au moindre doute il les charge (comportement d’avant). Toujours mises en cache par le service worker pour changer de langue hors ligne. | `a3f9a00` |
| 14 | `docs/DEMO-SAHEB.md` | Conseil « tirer vers le bas pour recharger » : n’existe pas dans une app web installée sur iOS. Et « Défi du jour » n’existe pas dans l’app (c’est le nom des réels). | Remplacé par « fermer l’app et la rouvrir » ; « Image du jour (`#image-du-jour`) ou Séance du jour ». | commit des tests |

## Vérifié sans problème
- 0 erreur console, 0 requête en échec, 0 image cassée, 0 clé i18n brute, 0 page introuvable, rien de caché sous la barre d’onglets (y compris avec encoche émulée) sur les 8 combinaisons.
- Anglais : plus aucun reste de français dans l’interface (hors noms propres, ex. « Commission d’accès à l’information du Québec »).
- Jeu Voir : 45 photos à zone (iPhone FR et Android EN) + 7 photos à choix (Android EN) : le toucher sur la zone donne le verdict et l’autocollant, qui ne recouvre jamais de texte ni de bouton ; résultats gardés après rechargement.
- Balayage gauche/droite entre les écrans : toutes les fiches ; un défilement vertical ne change pas d’écran. Mécanisme (35/35) et arbre (35/35) : on avance, on recommence, la vue d’ensemble tient dans la largeur.
- Retour/avancer, liens profonds (`#fiche/g-crise`, `#cas/b1`, `#r-oacr` → `#r-oacr/voir`), étape de fiche et réponses gardées après rechargement, onglets et menu.
- Simulateur B au toucher (iPhone) : glisser la sonde change l’image sans faire défiler la page, le gain suit le doigt (76 → 100 → 50 dB), positions, coupes, retournement, 5 cas avec révélation, aucune boucle laissée en quittant la route.
- Hors ligne après une visite : accueil, fiches et examens déjà ouverts, QCM, cas, simulateur (three.js en cache), polices, passage FR → EN hors ligne.
- Boutons morts : aucun ; liens internes : tous résolus (les ancres `#tree-…` de l’arbre sont gérées par son script).

## Performance (iPhone 13 émulé, serveur HTTP/2 + gzip comme GitHub Pages)
| Mesure | Avant | Après |
|---|---|---|
| JS au 1er chargement (FR) | 63 fichiers, 1 395 Ko compressés (4,7 Mo brut) | 51 fichiers, 938 Ko (3,1 Mo brut), −33 % |
| Interactif, « 4G lente » (150 ms, 1,6 Mbit/s, CPU × 4, bridage DevTools) | 18,6–19,1 s | 14,4–15,0 s |
| Interactif, 4G (60 ms, 9 Mbit/s, CPU × 4) | 6,5–6,7 s | 5,1–5,3 s |
| Premier affichage (squelette) | 1,1 s / 0,45 s | inchangé |
| three.js (653 Ko) | pas chargé à l’accueil, seulement sur `#inv-bscan-sim` (déjà paresseux) ; mis en cache après le chargement pour le hors-ligne | inchangé |

Saccades (CPU × 4) : révélation Voir (boucle + autocollant), étape du mécanisme, réponse dans l’arbre, défilement rapide : 0 image > 33 ms. Glisser la sonde du simulateur : 0 image > 33 ms (× 1), pire image 33 ms (× 4). Changement de page : une tâche de 100–150 ms à CPU × 4 (rendu de la page) ; le balayage cobalt est une transformation composée, il reste fluide. En anglais, rien ne change (les surcouches sont nécessaires).

## PWA
- Manifeste valide, installable dans Chrome (aucune erreur d’installabilité) : nom et nom court « Ocelle », `display: standalone`, `start_url`/`scope` `./`, couleurs de thème et de fond `#1F2CFF`, icônes 192 et 512 (`any` + `maskable`) + SVG.
- iOS : `apple-touch-icon` 180 × 180 opaque (pas de coins noirs), `apple-mobile-web-app-capable=yes`, titre « Ocelle », barre d’état `default` (la page commence sous la barre d’état, aucun chevauchement), `theme-color` clair/sombre, `viewport-fit=cover` avec retraits `env()` pour l’encoche et la barre d’accueil, 12 images de lancement.
- Service worker : précache du cœur, des surcouches EN, de three.js et des polices ; les images sont mises en cache à la première vue.

## Reste à faire ou à décider
- **Images hors ligne** : seules les images déjà vues sont en cache (26 Mo au total) ; avant la démo, ouvrir une fois chaque écran du parcours (déjà dans `docs/DEMO-SAHEB.md`). Ce sont les 2 échecs connus du test hors ligne.
- **Titre de l’accueil** : le héros dit encore « Cornée et glaucome » alors que le module D Rétine est en ligne (choix de texte du propriétaire, non modifié).
- **Pour l’agent glaucome** : sur `#g-crise`, les points clés disent « acétazolamide 500 mg » et le bloc Québec « Acétazolamide 250 mg PO : disponible partout » ; à formuler pour qu’un spécialiste n’y voie pas deux doses (non modifié : `data/fiches-glaucome.js` n’est pas à moi).
- **Pour l’agent simulateur** : `bscan-sim.js` (20 Ko compressés) est chargé sur toutes les pages alors qu’il ne sert qu’à `#inv-bscan-sim`.
- **Suite performance** (après la démo) : charger les données par module à la demande et minifier le JS ; c’est la seule façon de descendre nettement sous 10 s en 4G lente.
- **Non couvert** : WebKit réel (à vérifier sur l’iPhone), mode paysage.

## Tests de régression ajoutés
`python3 tests/web/test_site.py --only mobile` (section `mobile`, aussi lancée par `--quick`) : surcouches EN absentes en FR et présentes en EN, balises iOS et images de lancement, purposes du manifeste, aucun débordement à 360 px sur les 40 micro-fiches du module A et le parcours de démo, listes d’étapes alignées, zones tactiles ≥ 44 px, carte D du hub QCM, Voir au toucher avec autocollant qui ne couvre aucun texte, balayage vers l’écran suivant. Sur l’ancienne version, 8 de ces 10 contrôles échouent.

## Ajouter Ocelle à l’écran d’accueil de l’iPhone
1. Dans **Safari**, ouvrir https://impeccasper-rgb.github.io/ophtalmo-academie/ et attendre que l’accueil s’affiche.
2. Toucher le bouton **Partager** (carré avec une flèche ; sur iOS 26, il peut être sous **•••**), puis **Sur l’écran d’accueil**.
3. Garder le nom « Ocelle » (et « Ouvrir comme app web » activé s’il est proposé), toucher **Ajouter**, puis ouvrir Ocelle depuis son icône : plein écran, sans barre Safari.
