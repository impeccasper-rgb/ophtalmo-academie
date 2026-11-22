# Ocelle : critique sévère (cycle 7)

Date : 21 novembre 2026. Arbre testé : `main` @ 607aa41, construit avec `python3 tools/build_web.py`, servi en local, Chromium (Playwright), 390 × 844, FR, niveau par défaut « Fondamentaux », stockage vierge, requêtes externes bloquées.
Référence : `docs/STYLE-PEDAGO.md` (barème obligatoire) et `brand/BRAND.md`. Un écran qui dépasse un plafond est un défaut, pas une remarque.
Mesures : 127 écrans (27 fiches × 4 étapes, 6 pages Investigations, 5 pages du module A, accueil, Apprendre, Réviser, hub Investigations, Module B, Cas, capsules B0 et C0). Les mots sont comptés dans le DOM rendu (texte visible, navigation et repliés exclus). Les figures comptées sont les `img`, `svg` ≥ 120 × 80 et `canvas` visibles. Les minuteries sont instrumentées (`setTimeout`/`setInterval`) et les mutations du contenu sont observées pendant 4 s sans aucune action.

## Note globale : 4 / 10

Le cycle 7 a corrigé la **structure** des fiches, mais pas la **manière d'enseigner**. Ocelle se vend avec « Apprends à voir le signe qui compte », et pourtant on y apprend surtout en lisant.

- **Ce qui est réglé** (les plaintes du propriétaire) :
  - Les 4 étapes ne sont plus empilées.
  - Les algorithmes des fiches sont des arbres (27/27).
  - Aucune animation ne rythme le contenu à la place de l'apprenant (0 minuterie de contenu sur 127 écrans).
  - Aucun tableau n'est visible par défaut sur les 108 écrans de fiche.
  - Comprendre tient ses 120 mots sur 27/27 écrans.
- **Ce qui ne l'est pas** :
  1. **L'image disparaît après l'étape 1.** 81 des 108 écrans de fiche n'ont **aucune** figure : Comprendre 0/27, Décider 0/27, S'entraîner 0/27. Les schémas normal/pathologique et d'anatomie existent pourtant pour les 27 fiches. Ils dorment dans « Pour aller plus loin ».
  2. **La moitié de l'application n'a pas été touchée par le barème.**
     - Module A : 518 à 5 595 mots par page, 6 à 48 écrans de défilement.
     - Capsules B0/C0 : environ 1 100 mots et 10 écrans chacune.
     - Investigations : environ 500 mots de texte avant la première figure, qui n'arrive qu'au 3e écran.
     - Module B : 1 319 mots et 13,5 écrans.
  3. **L'écran de fiche est mangé par l'en-tête.** Sur les 108 écrans, le contenu commence entre 469 et 639 px (médiane 546 px, soit 65 % de la hauteur). Sur Voir, on aperçoit à peine le haut de la photo. La légende et le bouton « Révéler » sont hors écran.
  4. **Décider se lit en deux minutes, pas en une.**
     - Il occupe 3,3 à 4,3 écrans et compte 208 à 328 mots, arbre compris.
     - L'arbre est une échelle verticale de 923 à 1 581 px.
     - Plusieurs arbres contiennent des **erreurs de logique clinique** créées par la structure « en tamis ».
  5. **La signature de marque manque sur le chemin principal.** Sur les photos des fiches, « Révéler » affiche une liste de texte, sans boucle au feutre ni autocollant. La légende donne déjà le diagnostic avant même la révélation. Le feutre n'existe que dans Investigations et dans les cas.
  6. **Le niveau 2 recrée exactement ce dont le propriétaire se plaignait.** Ce niveau s'appelle « Pratique clinique », sous-titré « Clinical clerkship », c'est-à-dire le niveau même de l'externe. Décider y monte à 595–699 mots, 6,7–8 écrans et 3 tableaux en enfilade. Le niveau 3 est identique au niveau 2.
  7. **Le bloc Traitement n'est pas écrit pour un externe.**
     - « Quand référer » est rédigé du point de vue du spécialiste et rattaché à chaque traitement.
     - Il est parfois incohérent : pour la conjonctivite, on lit « Au-delà de quelques jours : suivi de la PIO ».
     - Les pièges sont détachés du médicament qu'ils concernent.

Un externe motivé finira une fiche. Il ne reviendra pas pour le module A, et il ne lira pas les 500 mots qui précèdent l'outil OCT. Ce sont pourtant les meilleures parties : outils et cas en images.

## 1. Mesures : synthèse

Les budgets « ≈ 200 (1 min) » appliquent la règle générale du barème : chaque écran doit se lire en moins d'une minute.

| Écran | n | Mots médiane (min–max) | Plafond | Hors plafond | Figures visibles médiane | Écrans à 0 figure | 1re figure (px, médiane) | Hauteur (écrans) médiane (max) | Mots au 1er écran (méd.) | Tableaux visibles | Arbre | Animations auto-rythmées |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Voir | 27 | 66 (57–76) | 60 | 24 | 1 | 0 | 546 | 1.8 (2.0) | 32 | 0 | 0/27 | 0 |
| Comprendre | 27 | 81 (65–91) | 120 | 0 | 0 | 27 | — | 1.6 (1.6) | 73 | 0 | 0/27 | 0 |
| Décider (hors arbre) | 27 | 154 (124–196) | 180 | 4 | 0 | 27 | — | 3.8 (4.3) | 56 | 0 | 27/27 | 0 |
| S’entraîner | 27 | 74 (67–85) | ≈200 (1 min) | 0 | 0 | 27 | — | 1.7 (1.9) | 56 | 0 | 0/27 | 0 |
| Investigations | 6 | 496 (469–556) | ≈200 (1 min) | 6 | 2 | 0 | 2211 | 4.5 (4.9) | 139 | 0 | 0/6 | 0 |
| Module A | 5 | 1939 (518–5595) | ≈200 (1 min) | 5 | 14 | 0 | 1994 | 21.0 (48.3) | 82 | 0 | 0/5 | 1 |
| Capsules B0/C0 | 2 | 1075 (1021–1130) | ≈200 (1 min) | 2 | 6.5 | 0 | 1131 | 10.2 (10.6) | 115 | 0 | 0/2 | 0 |
| Hubs + accueil | 5 | 458 (103–1319) | ≈200 (1 min) | 4 | 0 | 4 | 754 | 4.2 (13.5) | 106 | 1 | 0/5 | 0 |
| Accueil | 1 | 231 (231–231) | ≈200 (1 min) | 1 | 4 | 0 | — | 3.9 (3.9) | 71 | 0 | 0/1 | 0 |

Points saillants :
- **Voir** : 24/27 écrans dépassent 60 mots rendus (57–76).
  - Ce dépassement vient de la légende (≈ 12 mots) et de la ligne de crédit (≈ 10 mots) ajoutées aux deux phrases (27–43 mots).
  - L'image commence à 469–639 px (médiane 546). Une fois retirée la barre d'onglets (64 px), il reste 140 à 310 px visibles de la photo au premier écran.
  - « En deux phrases » tient sur 5 à 7 lignes sur téléphone : **27/27 dépassent la règle des 3 lignes**.
- **Comprendre** : 65–91 mots ✓. En revanche, **27/27 n'ont pas de figure de mécanisme** ✗.
  - Puces « essentiel » de plus de 15 mots : `c-secheresse` (18), `c-erosion` (16), `c-pterygion` (16), `c-dystrophies` (16).
- **Décider** : hors arbre, 124–196 mots.
  - Hors plafond : `g-fermeture` 186, `g-crise` 193, `g-secondaires` 196, `g-cristallin` 182.
  - Avec l'arbre : 208–328 mots (médiane 238). Arbre : 923–1 581 px. Bloc Traitement : 546–1 020 px. Aucune figure.
  - Questions ≤ 8 mots ✓, actions ≤ 12 mots ✓ (maximum 12 sur `g-crise`), drapeaux ≤ 3 ✓.
- **S'entraîner** : 67–85 mots, 3 questions du patron + mini-QCM ✓. Aucune image : même le QCM à schéma est replié derrière « Commencer ».
- **Investigations** : 469–556 mots, 4,3–4,9 écrans, première figure à 2 153–2 379 px (3e écran) sur les 6 pages.
- **Module A** :

  | Page | Mots | Écrans |
  |---|---|---|
  | `a-anatomie` | 518 | 6,1 |
  | `a-physiologie` | 1 747 | 16,2 |
  | `a-imagerie` | 1 939 | 21 |
  | `a-examen` | 3 227 | 31,3 |
  | `a-retine` | 5 595 | 48,3 (environ 28 min de lecture sur une seule page) |

- **Capsules** : `b-bases` 1 130 mots et 10,6 écrans ; `c-bases` 1 021 mots et 9,8 écrans.
- **Hubs** :
  - `module-b` : 1 319 mots, 13,5 écrans.
  - `apprendre` : 458 mots, 5,4 écrans, 0 figure ≥ 80 px.
  - `cas` : 498 mots, 0 figure.
  - hub `investigations` : 303 mots, 0 image.
- **Animations auto-rythmées** : 0 ✓. La lecture animée à 1 s par étape a disparu, et le mode « Pas à pas » de l'arbre est piloté par l'apprenant.
  - Seule exception mesurée : `a-physiologie` (597 mutations en 4 s sans action). Ce sont des simulations `requestAnimationFrame` (particules d'humeur aqueuse, chrono du TBUT qui démarre avant que l'apprenant ait cligné). Ce n'est pas du texte rythmé, mais voir SHOULD-FIX.
  - Le seul `setInterval` (lampe oscillante, 2,6 s) est déclenché par l'apprenant.

Fichiers : CSV complet (127 lignes, 44 colonnes) dans le dossier de travail du critique, `metrics-final.csv` ; tableau par écran en annexe A.

## 2. MUST-FIX (classés par gravité)

Chaque ligne donne l'écran, la mesure, le plafond, la correction et le responsable.

### MF-1. Module A, capsules et aperçus de module : des murs de texte
- **Écrans** :
  - `#a-retine` : 5 595 mots, 48 écrans, 84 paragraphes de plus de 3 lignes.
  - `#a-examen` : 3 227 mots, 31 écrans, 53 paragraphes longs.
  - `#a-imagerie` : 1 939 mots, 21 écrans.
  - `#a-physiologie` : 1 747 mots, 16 écrans.
  - `#a-anatomie` : 518 mots, 6 écrans.
  - `#b-bases` : 1 130 mots, 10,6 écrans, paragraphes jusqu'à 12 lignes.
  - `#c-bases` : 1 021 mots, 9,8 écrans.
  - `#module-b` : 1 319 mots, 13,5 écrans.
- **Plafond** : un écran = moins d'une minute (≈ 200 mots) ; 4 écrans par notion ; pas de paragraphe de plus de 3 lignes.
- **Constat** : ces pages ignorent entièrement le barème. On y trouve des répétitions : sur `a-examen`, « SAAQ classe 5 » apparaît 3 fois, et l'équivalence 6/12 = 20/40 = logMAR 0,3 est donnée deux fois en 2 écrans. On y trouve aussi « Tout afficher sur cette page ». La première figure de `a-examen` arrive au 7e écran.
- **Correction** :
  1. Découper chaque section (A3.1 Acuité, A3.2 Pupilles, A4.x OCT…) en micro-fiche « Voir / Comprendre / Faire » d'un écran chacune, avec les mêmes plafonds que les fiches.
  2. Mettre la simulation ou la figure en tête de chaque micro-fiche.
  3. Supprimer « Tout afficher » et les doublons entre « L'essentiel » et les listes Normal/Pathologique.
  4. Réduire les capsules B0/C0 à 5 cartes : triage, vocabulaire en image, familles, examens, principes de traitement. Chaque carte doit avoir une figure et compter 120 mots au plus.
  5. Ramener `module-b` à une carte par fiche de 12 mots au plus (le résumé en une ligne passe dans la fiche).
- **Responsables** :
  - Pédagogie : `data/module-a.js`, `data/ext-a5-a.js`, `data/ext-a5-b.js`, `data/hy-module-a.js`, `data/capsules.js`.
  - Web : moteur des sections A et des capsules dans `src/views.js` / `src/learn.js`.

### MF-2. Investigations : texte d'abord, figure au 3e écran
- **Écrans** : `#inv-bscan` (556 mots, 1re figure à 2 379 px), `#inv-ascan` (504 mots, 2 156 px), `#inv-oct` (488 mots, 2 249 px), `#inv-gonio` (511 mots, 2 153 px), `#inv-fondoeil` (484 mots, 2 174 px), `#inv-cv` (469 mots, 2 342 px). Toutes ces pages font 4,3 à 4,9 écrans.
- **Plafond** : figures avant le texte ; 1 minute par écran.
- **Constat** : l'ordre est À quoi ça sert → Comment faire et lire (6 étapes numérotées) → Repères normaux → Signes clés → Pièges, puis l'outil, puis la pratique. On retrouve la monotonie liste/liste/liste dont le propriétaire se plaint.
- **Correction** :
  1. Inverser l'ordre : une image réelle annotée (boucle au feutre) en tête avec une phrase « À quoi ça sert ».
  2. Puis l'outil (Couches OCT, Grader l'angle…).
  3. Puis « Observe, réponds, révèle ».
  4. Mettre « Comment lire », « Repères », « Signes », « Pièges » en 4 onglets ou cartes à balayer de 60 mots au plus chacun, sous la pratique.
- **Responsables** : exercices interactifs (`src/investigations.js`, fonction `render`) ; pédagogie (`data/investigations.js`).

### MF-3. Comprendre n'a pas de figure de mécanisme (27/27)
- **Écrans** : les 27 `#<fiche>/comprendre`.
- **Mesure** : 0 figure. Le barème exige « 1 figure de mécanisme ».
- **Constat** : le « mécanisme » est une pile de boîtes de texte qu'on déroule (« Maillon suivant (2/5) »). Or les 27 fiches ont `compare` (schéma normal/pathologique) et `anatomy.figure`, cachés dans « Pour aller plus loin » de Voir. `g-crise` en offre un exemple parlant : le bloc pupillaire, l'iris bombé et l'angle fermé sont la figure idéale, et le schéma de gonioscopie existe déjà dans `src/figures-*.js`.
- **Correction** :
  1. Afficher `f.compare` (normal à gauche, pathologique à droite) en tête de Comprendre.
  2. Relier chaque maillon de la chaîne à une zone du schéma : toucher le maillon met la zone en surbrillance.
  3. Garder la chaîne en 5 étiquettes courtes sous la figure.
- **Responsables** : web (`src/views.js`, `ficheView`, branche `comprendre`) ; ressources visuelles pour les zones de surbrillance (`src/figures-a.js`, `src/figures-b.js`).

### MF-4. L'en-tête de fiche occupe 55 à 76 % du premier écran (108/108)
- **Écrans** : tous les écrans de fiche. Le contenu commence entre 469 et 639 px, médiane 546. Le pire est `c-erosion` et `g-dev` : 639 px sur Voir, 607 sur les autres étapes.
- **Plafond implicite** : Voir = « 1 image ». L'image doit être au-dessus de la ligne de flottaison, avec sa question.
- **Constat** : l'en-tête empile le fil d'Ariane, le surtitre, un H1 de 2 à 4 lignes à environ 40 px, le sous-titre anglais, les étiquettes, « Niveau de lecture », un sélecteur de niveau à 3 boutons qui casse sur 2 rangées (avec une case vide) et les 4 pastilles. Le tout est répété sur les 4 étapes. Sur Voir, il ne reste que 24 à 48 mots visibles au premier écran ; la légende et « Révéler les trouvailles » sont toujours sous la ligne de flottaison.
- **Correction** :
  - Une barre compacte collante : titre sur une ligne (≤ 22 px, coupé avec ellipse) et pastilles.
  - Fil d'Ariane masqué sous 600 px.
  - Sous-titre anglais masqué en mode FR (ou seulement sur Voir).
  - Sélecteur de niveau retiré de la fiche (il existe déjà dans Apprendre et dans les réglages).
  - Étiquettes réduites à une seule (Urgent ou Fréquent).
  - Cible : contenu à 200 px au plus sur 390 × 844.
- **Responsables** : web/design (`src/views.js`, en-tête de `ficheView` ; `src/styles.css` `.fiche-head`, `.depth-row`, `.fsteps`).

### MF-5. Décider : 3 à 4 écrans, et un arbre en échelle qui ne se voit pas d'un coup d'œil
- **Écrans** : les 27 `#<fiche>/decider`. Hauteur 3,3–4,3 écrans. Mots hors arbre au-dessus de 180 : `g-secondaires` 196, `g-crise` 193, `g-fermeture` 186, `g-cristallin` 182. Total avec arbre : 208–328 mots.
- **Constat** :
  - En vue d'ensemble (par défaut), l'arbre est une colonne de boîtes marine suivies de deux boîtes Oui/Non. Il mesure 923 à 1 581 px : on ne voit jamais sa forme.
  - Des feuilles ne sont que du remplissage : « Question suivante. » deux fois dans `c-herpes`, trois fois dans `c-depots`, deux fois dans `g-postop`. S'y ajoutent « Couche suivante », « Continuer », etc.
  - Le bloc Traitement (546–1 020 px) vient ensuite.
  - « Lisible en moins d'une minute » est impossible.
- **Correction** :
  1. Mettre « Pas à pas » par défaut : une question par carte, le chemin parcouru en fil d'Ariane fluo et une mini-carte de l'arbre (nœuds en points) en haut. Le tout tient sur un écran.
  2. Supprimer toute feuille sans action.
  3. Placer le bloc Traitement dans une 5e pastille « Traiter », ou sur une carte qu'on fait glisser.
  4. Réécrire les 4 fiches hors plafond.
- **Responsables** : exercices interactifs (`src/tree.js`, `src/tree.css`) ; web pour la découpe (`src/views.js`) ; pédagogie pour les 4 fiches (`data/fiches-glaucome.js`).

### MF-6. Erreurs de logique clinique dans les arbres (structure « en tamis »)
`cont` impose une chaîne où une seule branche continue. Les actions suivantes deviennent ainsi inatteignables, ou atteignables par le mauvais chemin :
- `c-herpes` : la prophylaxie HEDS (Q4) n'est atteignable **que** si « Éruption V1 = Oui » (zona). Les chemins HSV épithélial et stromal finissent en Q1 et Q2. La prophylaxie HSV est donc rattachée au zona.
- `g-dev` : après une chirurgie de l'angle réussie chez un nourrisson (Q4 = Non), l'arbre demande « Adulte : œdème, corectopie… ? » (Q5, syndrome ICE).
- `g-secondaires` : « Dépôt ou implant de stéroïde en cause ? » (Q4) n'est atteint que si Q1 « PIO élevée sous stéroïde » vaut Non.
- `g-neovasculaire` : la cause (rétine ou carotide, avec le Doppler carotidien et le risque d'AVC) n'est demandée qu'en Q5, et seulement si le potentiel visuel est utile. L'œil sans potentiel ne reçoit jamais le bilan systémique.
- `c-keratocone` : l'enfant traité par CXL (Q2 = Oui) n'atteint jamais la réhabilitation visuelle (Q5 : lunettes ou lentilles).
- `g-crise` : pour un externe, la seule action qui compte, « appeler l'ophtalmologiste de garde **maintenant** », n'apparaît qu'en Q4-Non (crise réfractaire).
- **Correction** :
  1. Permettre un vrai branchement (`yes: {go: k}`, `no: {go: j}`) dans `src/tree.js`.
  2. Faire relire les 27 arbres par un clinicien, chemin par chemin : chaque chemin doit finir sur une action, et aucune action essentielle ne doit dépendre d'une branche sans rapport.
  3. Mettre l'appel à l'ophtalmologiste au nœud 1 des fiches urgentes.
- **Responsables** : pédagogie (`data/fiches-cornee.js`, `data/fiches-cornee-2.js`, `data/fiches-glaucome.js`, `cat.algo`) ; exercices interactifs (`src/tree.js`).

### MF-7. Bloc Traitement : mal assemblé et mal calibré pour l'externe
- **Écrans** : les 27 `#<fiche>/decider`.
- **Constat** : « Quand référer » est rattaché à chaque traitement et écrit du point de vue du spécialiste.
  - Point de vue du spécialiste :
    - `g-dev` : « Goniotomie : … centre pédiatrique tertiaire ».
    - `g-postop` : « Tube : échec de trabéculectomie… ».
    - `g-fermeture` : critères LPI et EAGLE.
    - `g-gpao` : « PGA : Référer si PIO hors cible… ».
  - Incohérent :
    - `c-surface` (conjonctivites) : « Quand référer : Au-delà de quelques jours : suivi de la PIO ». C'est le piège des stéroïdes, rangé au mauvais endroit.
  - Trop vague :
    - `c-herpes` : « Toujours sous suivi ophtalmologique ».
    - `c-depots` : « Bande gênante : ophtalmologie ».
  - Urgence sous-estimée :
    - `g-crise` : « ophtalmologiste de garde **le jour même** » pour une crise aiguë. Il faut écrire « immédiatement ».
  - Dans les fiches cornée, les pièges perdent leur sujet :
    - `c-herpes` : « Toxique pour l'épithélium : au plus 14–21 jours ». Quel produit ?
    - `c-dystrophies` : « Ne retire pas les opacités. Les dépôts reviennent. Technique exigeante. »
  - En « 1re ligne » de `g-crise`, on trouve « Iridotomie au laser » et « Phacoémulsification ».
- **Plafond** (barème §5) : 1re ligne (nom générique, posologie), quand référer ou urgence, piège, particularité québécoise.
- **Correction** : écrire au niveau de la fiche une carte « Externe ».
  1. **Ce que tu fais** (urgence ou clinique) : générique et posologie.
  2. **Appelle l'ophtalmo** : immédiat, moins de 24 h ou en semaines, avec le critère.
  3. **Ne fais jamais** : une ligne qui nomme le médicament.
  4. **Au Québec** : seulement si utile.

  Les options du spécialiste (LPI, phaco, DMEK, tube, etc.) passent au niveau 2. Dans `txBlock`, préfixer chaque piège du nom du traitement quand il vient de `treatments[]`.
- **Responsables** : pédagogie (`data/fiches-*.js`, champ `treatment`) ; web (`src/views.js`, `txBlock`).

### MF-8. Voir : pas de « Réponds », pas de feutre, et la réponse est écrite avant la révélation
- **Écrans** : les 27 `#<fiche>/voir`.
- **Constat** :
  - La légende nomme le diagnostic au-dessus du bouton (« Kératite épithéliale herpétique (HSV) : ulcère ramifié… », « Crise aiguë… à l'œil droit : rougeur et cornée trouble »).
  - « Révéler les trouvailles » affiche une pile de 4 blocs ou plus sur fond fluo (environ 70 mots), sans boucle au feutre ni autocollant sur la photo.
  - Le geste signature de l'identité v2 (`BRAND.md` §1.3 et §6.1) est absent du parcours principal ; il ne vit que dans Investigations et les cas.
  - La méthode « Observe. Réponds. Révèle. » n'est pas appliquée à l'étape qui porte le nom « Voir ».
- **Correction** :
  1. Masquer la légende jusqu'à la réponse.
  2. Demander « Touche le signe » sur la photo (zone sensible), puis tracer la boucle au feutre et poser l'autocollant (« dendrite ! »).
  3. Afficher en une ligne le signe décisif et garder le reste dans « plus loin ».
  4. Réutiliser `Motion` (`src/motion.js`) et le format `hotspots` de `data/inv-media.js`.
- **Responsables** : design/motion (`src/motion.js`) ; web (`Photo.carousel` dans `src/core.js`) ; ressources visuelles pour les zones des photos de fiche (`data/photos.js`, `data/ext-photos.js`).

### MF-9. Le niveau 2 (« Pratique clinique », celui de l'externe) recrée le mur texte/tableau
- **Écrans** : `#c-herpes/decider` (595 mots, 6,7 écrans, 3 tableaux) ; `#g-crise/decider` (699 mots, 8,0 écrans, 3 tableaux) ; `#g-gpao/voir` (306 mots, 4,1 écrans) ; `#c-herpes/comprendre` (196 mots, 2,6 écrans).
- **Constat** : `moreBlock` ouvre tous les « Pour aller plus loin » dès `depth >= 2`. Décider redevient texte → tableau Signes → tableau Examens → tableau Diagnostic différentiel → phases. Le niveau 3 donne **exactement** les mêmes chiffres que le niveau 2 : il ne sert à rien. Sur l'accueil, le niveau 1 est sous-titré « Preclinical », alors que le public est externe et R1.
- **Correction** :
  - Ne jamais ouvrir automatiquement les repliés.
  - Le niveau 2 ajoute **une** carte par étape (≤ 80 mots) : les signes deviennent des vignettes photo, le diagnostic différentiel devient des paires « sosies » photo contre photo, sans tableau.
  - Le niveau 3 ajoute quelque chose de mesurable, ou disparaît.
  - Renommer les niveaux selon le public (« Externe », « R1 »).
- **Responsables** : web (`src/views.js`, `moreBlock`, `txBlock` ; `src/learn.js`, `DEPTHS`) ; pédagogie.

### MF-10. Réponses données avant la question
- **Écrans** :
  - `#inv-gonio`, pratique 1/7 : « De postérieur vers antérieur, quel ordre est juste ? ». Le schéma imprime toutes les structures dans l'ordre (« Ligne de Schwalbe · Schwalbe's line », « Trabéculum pigmenté », « Éperon scléral », « Bande ciliaire », « Racine de l'iris ») sous la mention « Légende masquée jusqu'à ta réponse ».
  - `#g-crise/entrainer`, mini-QCM 1/4 : on demande le diagnostic (« Crise aiguë de fermeture de l'angle ») sur la fiche dont c'est le titre en 40 px.
- **Correction** :
  - Le SVG de pratique ne porte aucune étiquette ; les étiquettes passent dans la couche de révélation.
  - Vérifier automatiquement chaque item : aucun mot de la bonne option ne doit apparaître dans le texte rendu du média.
  - Les QCM de fiche testent la conduite (étape suivante, piège, délai), pas le diagnostic de la fiche.
- **Responsables** : exercices interactifs (`data/inv-media.js`, rendu `svgNamed` dans `src/investigations.js`) ; pédagogie (`data/quiz-*.js`, items `topic`).

### MF-11. Murs de cartes identiques, vignettes vides, hubs sans image
- **Écrans** :
  - `#apprendre` : 5,4 écrans et plus de 30 rangées identiques. Les vignettes de B7–B14 et C1–C12 sont des carrés gris vides (environ 20 sur 27 fiches).
  - `#reviser` : 8 cartes identiques avec la même tuile d'icône cobalt, et aucune image, même pour « Jeu d'images · 208 images ».
  - Hub `#investigations` : 6 cartes de texte identiques, 0 image, dans la section consacrée à la lecture d'images.
  - `#cas` : 498 mots, 0 figure.
  - La bannière « Module C » pose le titre fluo sur une impression d'OCT RNFL : collision de texte, illisible.
- **Plafond** (barème §6) : « Pas de murs de cartes identiques ».
- **Correction** :
  - Une photo réelle par fiche dans Apprendre : le catalogue a 390 images.
  - Réviser : un rang « Séance du jour » en héros, puis des jeux en grille 2 × N avec un aperçu visuel propre à chaque jeu.
  - Hub Investigations : une vignette d'examen par carte.
  - Bannière C : une photo de papille, pas une impression.
- **Responsables** : design (`src/views.js`, vues `apprendre`, `reviser`, hub Investigations ; `src/styles.css`) ; ressources visuelles (choix des vignettes).

### MF-12. Petits dépassements de plafond (défauts au sens du barème §7)
- Voir : 24/27 au-dessus de 60 mots rendus. La correction de MF-8 (légende masquée, crédit derrière une icône ⓘ) suffit à les ramener sous 60.
- « En deux phrases » de plus de 3 lignes sur téléphone : 27/27. Les définitions font 27–43 mots, `g-gpao` 43. Viser 25 mots au plus.
- Puces « essentiel » de plus de 15 mots : `c-secheresse` 18, `c-erosion` 16, `c-pterygion` 16, `c-dystrophies` 16.
- Responsable : pédagogie (`data/fiches-*.js` `definition`, `data/hy-cornee.js`).

## 3. SHOULD-FIX

1. **Le sélecteur de niveau casse à 390 px** : 2 rangées, une case vide, sur les 108 écrans de fiche. MF-4 le retire de la fiche ; sinon, mettre les libellés sur 2 lignes. (`src/styles.css` `.depth-seg`)
2. **Fausses promesses de durée** : « ≈ 1 min à ce niveau » sur chaque fiche, et « Chaque fiche se lit en 1 minutes » (faute d'accord) sur `#module-b`. Une fiche fait 431 à 554 mots rendus (médiane 461) sur 4 écrans, soit 2,5 à 3 min de lecture, plus les interactions. Calculer la durée sur le texte rendu. (`readMinAt`, `src/views.js` ; `mod.lead`, `src/i18n.js`)
3. **Fuites d'anglais en FR** : badge « High yield » ; sous-titres des niveaux « Preclinical / Clinical clerkship / Beginning residency » sur l'accueil ; sous-titre anglais sous chaque H1 ; étiquettes bilingues gravées dans les schémas (« cornée · cornea », « Normal macular OCT »).
4. **Fluo galvaudé** : `#…/entrainer` porte 3 boutons fluo (Commencer le mini-quiz, J'ai terminé cette section, fiche suivante). « Maillon suivant » en fluo concurrence « Décider → ». La révélation de Voir empile 4 blocs sur fond fluo. `BRAND.md` réserve le fluo au signe décisif, au CTA principal et aux récompenses.
5. **« J'ai terminé cette section »** : une auto-déclaration sans valeur. Marquer la fiche terminée quand le mini-QCM est fini.
6. **Deux repliés portent le même nom** sur Décider : « Pour aller plus loin : détails des traitements » et « Pour aller plus loin ». Les fusionner.
7. **Soulignés du glossaire** : 16 termes soulignés en pointillé sur `#c-herpes/decider`, 73 sur `#a-examen`. Ne souligner que la première occurrence par écran.
8. **« Je suis prêt à répondre »** (pratique Investigations et cas en images) : une touche de plus sans aucune saisie. La remplacer par « touche le signe sur l'image » avant les options : c'est une vraie réponse.
9. **Schéma OCT de pratique grossier** (disque noir qui traverse 5 bandes, couche nucléaire externe non épaissie à la fovéa). Le redessiner dans le style de l'outil « Couches OCT », qui est bon. (`data/inv-media.js`)
10. **L'arbre « Pas à pas » n'a pas de cas** : on répond Oui/Non sans bonne réponse. Ajouter une vignette d'une ligne (« F 68 ans, PIO 58, pupille mi-dilatée ») et un verdict à la fin du chemin.
11. **Schéma de coupe de l'œil illisible à 390 px** (`#b-bases`, étiquettes d'environ 5 px). Afficher moins d'étiquettes, ou les révéler au toucher.
12. **Simulations `requestAnimationFrame` permanentes** (`#a-physiologie`) : le chrono du TBUT tourne avant le premier clignement, et les particules tournent hors écran. Démarrer au premier geste et mettre en pause hors du champ de vue (`IntersectionObserver`). (`src/sims.js`)
13. **Cartes du patron** : elles se retournent sans engagement. Ajouter « Je savais / Je ne savais pas » relié au rappel espacé.
14. **Comprendre** : « Maillon suivant » ne fait que dévoiler du texte, et les leviers aussi (voir §4). En faire une prédiction : « Quel est le maillon suivant ? » parmi 3 choix, et « Où agit l'acétazolamide ? » en touchant le maillon.
15. **Accueil** : 3,9 écrans, dont 3 cartes de niveau très textuelles en 2e position. Choisir le niveau en un toucher, puis le replier.

## 4. Interactions : inventaire et valeur

Barème §4 : une interaction doit faire produire une réponse ou révéler un signe. Sinon, on la retire.

| Interaction (attribut) | Où | Produit une réponse ? | Révèle un signe ? | Verdict |
|---|---|---|---|---|
| QCM avec niveau de confiance (`data-o`, `data-u`) | S'entraîner, Réviser, cas | **Oui** | après coup | Garder ; c'est le cœur. Mais il est caché derrière « Commencer » et donne parfois la réponse (MF-10) |
| Triage « Urgent ou pas ? » (`data-u`) | Réviser, capsules | **Oui** | — | Garder |
| Pratique Observe → Réponds → Révèle (`data-ip` + options) | Investigations, cas en images | Oui (options) | **Oui**, boucle au feutre | Garder ; retirer la touche « Je suis prêt » sans saisie (S-8) |
| Outils Étiqueter / Défi : grader (`data-ly`, `data-grade`, `data-mode`) | `inv-oct`, `inv-gonio` | **Oui** | Oui | Excellent ; à remonter en tête de page (MF-2) |
| Mode Explorer des outils (`data-layer`, `data-bd`, `data-var`) | Investigations | Non | Oui (couche, structure) | Acceptable |
| Arbre « Pas à pas » (`data-tyn`, `data-tnext`) | Décider | Oui/Non, mais **sans bonne réponse** | Non | Ajouter une vignette (S-10) |
| Arbre Vue d'ensemble / Recommencer (`data-tmode`, `data-trestart`) | Décider | Non | Non | Utilitaire |
| « Révéler les trouvailles » (`data-act`, `data-target`) | Voir, capsules, A | Non | **Non** : affiche du texte, sans marquer la photo ; légende déjà explicite | **À refaire** (MF-8) |
| Révéler les anomalies du schéma (`data-cmpreveal`) | caché dans « plus loin » | Non | texte | Déplacer vers Comprendre (MF-3) |
| « Maillon suivant / Tout afficher » (`data-causal`) | Comprendre | Non | Non : dévoile une boîte de texte | **Sans valeur en l'état** (S-14) |
| Leviers de traitement (`data-lever`) | Comprendre | Non | Non : affiche un encadré de texte | En faire une question (S-14) |
| Cartes du patron (`data-pearl`) | S'entraîner | Rappel mental, sans engagement | — | Ajouter auto-évaluation (S-13) |
| Cartes mémoire (`data-flip`), mots troués | Réviser, A | Oui (mots troués) / rappel | — | Garder |
| Carrousel photo (`data-car-go`, `data-car-step`) | Voir | Non | Non | Navigation ; acceptable |
| Agrandir (lightbox) | partout | Non | Non | Utilitaire |
| Glossaire (`data-gt`) | partout | Non | Non | Utile, mais trop dense (S-7) |
| Sélecteur de niveau (`data-act="depth"`) | 108 écrans de fiche | Non | Non | **Retirer de la fiche** (MF-4) |
| « J'ai terminé cette section » | S'entraîner, capsules | Non | Non | **Retirer** (S-5) |
| Simulations : lampe oscillante, TBUT, aqueux, curseurs (`input:range`, `select`) | A2, A3 | Parfois (« Valider ma lecture » de la tonométrie : oui) | Oui | Garder ; démarrer au geste (S-12) |

## 5. Calibrage du contenu (6 écrans examinés)

| Écran | Calibré externe / R1 ? | Problèmes |
|---|---|---|
| `#c-herpes/decider` | Doses justes et utiles (acyclovir 400 mg 5×/j, valacyclovir 500 mg 3×/j, prophylaxie 400 mg 2×/j, zona 1 g 3×/j × 7 j) | « Quand référer : Toujours sous suivi ophtalmologique » ne dit rien à l'externe. Il faudrait : « dendrite → ophtalmo < 24 h ; jamais de stéroïde ; zona V1 avec œil rouge, baisse de vision ou Hutchinson → ophtalmo le jour même ». Pièges orphelins ; arbre faux (MF-6) ; pas d'encadré Québec. |
| `#g-crise/decider` | Trop **spécialiste** au niveau 1 | La « 1re ligne » inclut LPI YAG et phaco. Les actions de l'externe (appel immédiat, timolol, apraclonidine ou brimonidine, acétazolamide 500 mg en l'absence de contre-indication, décubitus, antiémétique) sont dispersées. « Le jour même » est trop faible. Arbre de 1 581 px, 328 mots. |
| `#g-gpao/decider` | Niveau R1 ophtalmo, pas externe | Le jargon arrive sans explication au nœud 1 (« Bilan de base (4 P + G) »). On demande « Cible atteinte sous PGA ou SLT ? » sans avoir dit de commencer un PGA ou la SLT. Bon encadré Québec (O-7, optométriste qui amorce puis dirige). Il manque le rôle de l'externe (dépister, référer en non urgent) et la couverture RAMQ des gouttes génériques. |
| `#c-bacterienne/decider` | Bon, pratique | « Critère 1-2-3 » apparaît dans l'arbre sans être défini au niveau 1. Moxifloxacine aux heures, grattage avant antibiotique, pas de pansement chez le porteur de lentilles : tout cela est juste et utile à l'externe. |
| `#inv-oct` | Contenu de R1, pas de l'externe pressé | Effet plancher à 50–60 µm, « red/green disease », ETDRS 1/3/6 mm : juste, mais 488 mots avant l'outil. Il manque « quand demander une OCT et que regarder en 10 s sur le rapport », la question pratique de l'externe. |
| `#a-examen` | Contenu **le plus utile à l'externe** (AV, DPAR, fluorescéine, SAAQ) | Noyé dans 31 écrans et 3 227 mots, avec des doublons. C'est la page qui mériterait le plus la forme en cartes et simulations. |

En résumé, les fiches glaucome et les arbres sont écrits pour un R1 d'ophtalmologie, ou au-delà : ripcord, needling, iridoplastie, voriconazole intrastromal, EAGLE au niveau « Fondamentaux ». Ce que l'externe doit faire aux urgences ou en médecine familiale est sous-représenté. Le barème place le niveau 1 « Fondamentaux » pour l'externe : il faut donc déplacer le contenu du spécialiste vers le niveau 2.

## 6. Revue visuelle (19 écrans capturés)

Écrans capturés :
- 3 fiches × 4 étapes : `c-herpes`, `g-gpao`, `c-bacterienne`.
- `inv-oct`, `inv-gonio`, l'accueil, Apprendre, Réviser, le hub Investigations, `module-b`, `cas`, `b-bases`, `a-examen`, `a-retine`.
- La révélation de Voir, l'arbre (vue d'ensemble et pas à pas), le bloc Traitement, Comprendre ouvert, les pratiques Investigations, et 2 écrans en mode sombre.

- **Hiérarchie** : le H1 en Bricolage 40 px est beau sur l'accueil, mais sur une fiche il écrase tout. Le premier élément vu n'est jamais le signe, toujours le titre. Les en-têtes de section (« Algorithme », « Traitements ») ont la même graisse que les nœuds de l'arbre, si bien que rien ne guide l'œil vers la décision.
- **Monotonie** : sur les fiches, ce n'est plus texte/tableau mais **carte bordée / carte bordée / carte bordée**. Décider aligne l'encadré rouge des drapeaux, plus de 10 boîtes d'arbre, puis 4 cartes Traitement à bordure de couleur et 2 repliés. Investigations aligne 5 encadrés de listes. Apprendre et Réviser sont des listes de cartes identiques.
- **Densité** : acceptable sur Voir, Comprendre et S'entraîner, une fois l'en-tête retiré. Excessive sur Décider. Inacceptable sur le module A, les capsules et Investigations.
- **Direction artistique** :
  - L'habillage (barre cobalt, onglet fluo incliné, boutons fluo à ombre dure, Bricolage et Atkinson) est fidèle à v2.
  - Le héros de l'accueil (photo inclinée, boucle au feutre, autocollant « dendrite ! ») est la seule page qui *ressemble* vraiment à « Fluorescéine ».
  - Dans les fiches, la marque se réduit à des boutons ; les surfaces d'étude, elles, sont de génériques cartes blanches à bordure.
  - Le vert menthe des encadrés « High yield » (`--teal-wash`, absent de la palette v2) et le violet de « Pièges » sont des reliquats v1.
  - Aucune boucle au feutre sur les 27 photos de fiche.
- **Plaisir et motivation** : les vrais moments de plaisir sont la pratique Investigations, le mode « Pas à pas » et le QCM. Tous sont repoussés au 3e ou 4e écran, ou derrière un bouton. La fiche commence par 546 px de titre.
- **Un externe resterait-il ?** Pour une fiche, oui, une fois. Pour le module A (31 à 48 écrans), non. Pour Investigations, il ira peut-être directement à la pratique, s'il la trouve.

## 7. Ce qui est vraiment bon (bref)

- Fiches en 4 écrans : pastilles, Précédent/Suivant, balayage (`touchstart` et `touchend`). Plus aucune page empilée.
- 0 animation qui rythme le contenu sur 127 écrans. Les arbres sont pilotés par l'apprenant.
- 27/27 algorithmes en arbre : questions de 8 mots au plus, actions de 12 au plus, badge « Urgent » automatique.
- 0 tableau visible par défaut sur 108 écrans de fiche ; Comprendre tient ses 120 mots sur 27/27.
- Outils Investigations (Couches OCT avec Étiqueter et Trouver le liquide, Grader l'angle) et le format Observe → Réponds → Révèle avec boucle au feutre : la meilleure pédagogie de l'application.
- Doses usuelles présentes, encadrés Québec pertinents (O-7, SAAQ), mode sombre cohérent, accessibilité soignée (arbre en liste ordonnée, `aria-live`).

## Annexe A. Mesures par écran (390 × 844, FR, niveau 1)

« Contenu commence à » est la position verticale du corps de l'étape. « Mots 1er écran » compte les mots visibles avant 844 px, hors navigation.

<details><summary>127 écrans</summary>

| Écran | Mots visibles | Mots hors arbre | Mots arbre | Mots 1er écran | Contenu commence à (px) | Figures | 1re figure (px) | Tableaux visibles (total) | Contrôles | Hauteur (écrans) | Arbre | Verdict |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| `#c-secheresse/voir` | 66 | — | — | 33 | 573 | 1 | 574 | 0 (0) | 11 | 1.74 | — | > 60 mots; en-tête 573 px |
| `#c-secheresse/comprendre` | 86 | — | — | 82 | 541 | 0 | — | 0 (0) | 3 | 1.59 | — | 0 figure de mécanisme; en-tête 541 px |
| `#c-secheresse/decider` | 208 | 138 | 65 | 59 | 541 | 0 | — | 0 (3) | 7 | 3.3 | oui | en-tête 541 px; 3.3 écrans |
| `#c-secheresse/entrainer` | 76 | — | — | 60 | 541 | 0 | — | 0 (0) | 7 | 1.8 | — | en-tête 541 px |
| `#c-bacterienne/voir` | 60 | — | — | 39 | 469 | 1 | 470 | 0 (0) | 10 | 1.67 | — | en-tête 469 px |
| `#c-bacterienne/comprendre` | 71 | — | — | 69 | 437 | 0 | — | 0 (0) | 3 | 1.41 | — | 0 figure de mécanisme; en-tête 437 px |
| `#c-bacterienne/decider` | 225 | 131 | 89 | 56 | 437 | 0 | — | 0 (3) | 9 | 3.56 | oui | en-tête 437 px; 3.56 écrans |
| `#c-bacterienne/entrainer` | 79 | — | — | 61 | 437 | 0 | — | 0 (0) | 7 | 1.62 | — | en-tête 437 px |
| `#c-atypiques/voir` | 63 | — | — | 39 | 507 | 1 | 508 | 0 (0) | 10 | 1.68 | — | > 60 mots; en-tête 507 px |
| `#c-atypiques/comprendre` | 74 | — | — | 68 | 475 | 0 | — | 0 (0) | 3 | 1.51 | — | 0 figure de mécanisme; en-tête 475 px |
| `#c-atypiques/decider` | 226 | 134 | 87 | 66 | 475 | 0 | — | 0 (3) | 6 | 3.65 | oui | en-tête 475 px; 3.65 écrans |
| `#c-atypiques/entrainer` | 75 | — | — | 56 | 475 | 0 | — | 0 (0) | 7 | 1.7 | — | en-tête 475 px |
| `#c-herpes/voir` | 69 | — | — | 24 | 573 | 1 | 574 | 0 (0) | 14 | 1.82 | — | > 60 mots; en-tête 573 px |
| `#c-herpes/comprendre` | 84 | — | — | 71 | 541 | 0 | — | 0 (0) | 3 | 1.63 | — | 0 figure de mécanisme; en-tête 541 px |
| `#c-herpes/decider` | 214 | 129 | 80 | 57 | 541 | 0 | — | 0 (3) | 8 | 3.47 | oui | en-tête 541 px; 3.47 écrans |
| `#c-herpes/entrainer` | 72 | — | — | 56 | 541 | 0 | — | 0 (0) | 7 | 1.78 | — | en-tête 541 px |
| `#c-keratocone/voir` | 67 | — | — | 37 | 469 | 1 | 470 | 0 (0) | 11 | 1.69 | — | > 60 mots; en-tête 469 px |
| `#c-keratocone/comprendre` | 85 | — | — | 74 | 437 | 0 | — | 0 (0) | 3 | 1.53 | — | 0 figure de mécanisme; en-tête 437 px |
| `#c-keratocone/decider` | 238 | 141 | 92 | 54 | 437 | 0 | — | 0 (3) | 9 | 3.8 | oui | en-tête 437 px; 3.8 écrans |
| `#c-keratocone/entrainer` | 73 | — | — | 53 | 437 | 0 | — | 0 (0) | 7 | 1.6 | — | en-tête 437 px |
| `#c-fuchs/voir` | 68 | — | — | 36 | 573 | 1 | 574 | 0 (0) | 12 | 1.74 | — | > 60 mots; en-tête 573 px |
| `#c-fuchs/comprendre` | 80 | — | — | 70 | 541 | 0 | — | 0 (0) | 3 | 1.63 | — | 0 figure de mécanisme; en-tête 541 px |
| `#c-fuchs/decider` | 225 | 146 | 74 | 56 | 541 | 0 | — | 0 (3) | 11 | 3.62 | oui | en-tête 541 px; 3.62 écrans |
| `#c-fuchs/entrainer` | 73 | — | — | 55 | 541 | 0 | — | 0 (0) | 7 | 1.76 | — | en-tête 541 px |
| `#c-erosion/voir` | 64 | — | — | 30 | 639 | 1 | 640 | 0 (0) | 12 | 1.95 | — | > 60 mots; en-tête 639 px |
| `#c-erosion/comprendre` | 81 | — | — | 72 | 607 | 0 | — | 0 (0) | 3 | 1.64 | — | 0 figure de mécanisme; en-tête 607 px |
| `#c-erosion/decider` | 245 | 157 | 83 | 57 | 607 | 0 | — | 0 (3) | 8 | 3.82 | oui | en-tête 607 px; 3.82 écrans |
| `#c-erosion/entrainer` | 70 | — | — | 51 | 607 | 0 | — | 0 (0) | 7 | 1.76 | — | en-tête 607 px |
| `#c-pterygion/voir` | 67 | — | — | 35 | 573 | 1 | 574 | 0 (0) | 11 | 1.81 | — | > 60 mots; en-tête 573 px |
| `#c-pterygion/comprendre` | 77 | — | — | 73 | 541 | 0 | — | 0 (0) | 3 | 1.59 | — | 0 figure de mécanisme; en-tête 541 px |
| `#c-pterygion/decider` | 220 | 131 | 84 | 57 | 541 | 0 | — | 0 (3) | 9 | 3.73 | oui | en-tête 541 px; 3.73 écrans |
| `#c-pterygion/entrainer` | 67 | — | — | 53 | 541 | 0 | — | 0 (0) | 7 | 1.76 | — | en-tête 541 px |
| `#c-greffe/voir` | 66 | — | — | 39 | 573 | 1 | 574 | 0 (0) | 15 | 1.84 | — | > 60 mots; en-tête 573 px |
| `#c-greffe/comprendre` | 76 | — | — | 81 | 541 | 0 | — | 0 (0) | 3 | 1.53 | — | 0 figure de mécanisme; en-tête 541 px |
| `#c-greffe/decider` | 236 | 139 | 92 | 60 | 541 | 0 | — | 0 (3) | 11 | 3.66 | oui | en-tête 541 px; 3.66 écrans |
| `#c-greffe/entrainer` | 72 | — | — | 60 | 541 | 0 | — | 0 (0) | 7 | 1.68 | — | en-tête 541 px |
| `#c-brulure/voir` | 66 | — | — | 42 | 469 | 1 | 470 | 0 (0) | 9 | 1.64 | — | > 60 mots; en-tête 469 px |
| `#c-brulure/comprendre` | 82 | — | — | 78 | 437 | 0 | — | 0 (0) | 3 | 1.38 | — | 0 figure de mécanisme; en-tête 437 px |
| `#c-brulure/decider` | 260 | 166 | 89 | 52 | 437 | 0 | — | 0 (3) | 8 | 3.78 | oui | en-tête 437 px; 3.78 écrans |
| `#c-brulure/entrainer` | 72 | — | — | 61 | 437 | 0 | — | 0 (0) | 7 | 1.58 | — | en-tête 437 px |
| `#c-dystrophies/voir` | 62 | — | — | 26 | 507 | 1 | 508 | 0 (0) | 11 | 1.71 | — | > 60 mots; en-tête 507 px |
| `#c-dystrophies/comprendre` | 83 | — | — | 72 | 475 | 0 | — | 0 (0) | 3 | 1.54 | — | 0 figure de mécanisme; en-tête 475 px |
| `#c-dystrophies/decider` | 228 | 124 | 99 | 51 | 475 | 0 | — | 0 (3) | 16 | 3.8 | oui | en-tête 475 px; 3.8 écrans |
| `#c-dystrophies/entrainer` | 77 | — | — | 53 | 475 | 0 | — | 0 (0) | 7 | 1.74 | — | en-tête 475 px |
| `#c-depots/voir` | 64 | — | — | 33 | 573 | 1 | 574 | 0 (0) | 11 | 1.84 | — | > 60 mots; en-tête 573 px |
| `#c-depots/comprendre` | 74 | — | — | 72 | 541 | 0 | — | 0 (0) | 3 | 1.53 | — | 0 figure de mécanisme; en-tête 541 px |
| `#c-depots/decider` | 228 | 134 | 89 | 59 | 541 | 0 | — | 0 (3) | 11 | 3.88 | oui | en-tête 541 px; 3.88 écrans |
| `#c-depots/entrainer` | 77 | — | — | 56 | 541 | 0 | — | 0 (0) | 7 | 1.75 | — | en-tête 541 px |
| `#c-surface/voir` | 64 | — | — | 31 | 573 | 1 | 574 | 0 (0) | 11 | 1.78 | — | > 60 mots; en-tête 573 px |
| `#c-surface/comprendre` | 83 | — | — | 77 | 541 | 0 | — | 0 (0) | 3 | 1.59 | — | 0 figure de mécanisme; en-tête 541 px |
| `#c-surface/decider` | 236 | 162 | 69 | 57 | 541 | 0 | — | 0 (3) | 12 | 3.87 | oui | en-tête 541 px; 3.87 écrans |
| `#c-surface/entrainer` | 78 | — | — | 57 | 541 | 0 | — | 0 (0) | 7 | 1.82 | — | en-tête 541 px |
| `#c-peripherie/voir` | 65 | — | — | 24 | 573 | 1 | 574 | 0 (0) | 13 | 1.98 | — | > 60 mots; en-tête 573 px |
| `#c-peripherie/comprendre` | 72 | — | — | 69 | 541 | 0 | — | 0 (0) | 3 | 1.53 | — | 0 figure de mécanisme; en-tête 541 px |
| `#c-peripherie/decider` | 268 | 159 | 104 | 60 | 541 | 0 | — | 0 (3) | 12 | 4.19 | oui | en-tête 541 px; 4.19 écrans |
| `#c-peripherie/entrainer` | 85 | — | — | 57 | 541 | 0 | — | 0 (0) | 7 | 1.85 | — | en-tête 541 px |
| `#g-gpao/voir` | 76 | — | — | 32 | 507 | 1 | 508 | 0 (0) | 11 | 1.8 | — | > 60 mots; en-tête 507 px |
| `#g-gpao/comprendre` | 83 | — | — | 77 | 475 | 0 | — | 0 (0) | 3 | 1.52 | — | 0 figure de mécanisme; en-tête 475 px |
| `#g-gpao/decider` | 258 | 160 | 93 | 51 | 475 | 0 | — | 0 (3) | 8 | 3.59 | oui | en-tête 475 px; 3.59 écrans |
| `#g-gpao/entrainer` | 68 | — | — | 55 | 475 | 0 | — | 0 (0) | 7 | 1.66 | — | en-tête 475 px |
| `#g-hto/voir` | 67 | — | — | 21 | 545 | 1 | 546 | 0 (0) | 7 | 1.72 | — | > 60 mots; en-tête 545 px |
| `#g-hto/comprendre` | 88 | — | — | 84 | 513 | 0 | — | 0 (0) | 3 | 1.54 | — | 0 figure de mécanisme; en-tête 513 px |
| `#g-hto/decider` | 222 | 128 | 89 | 51 | 513 | 0 | — | 0 (3) | 12 | 3.56 | oui | en-tête 513 px; 3.56 écrans |
| `#g-hto/entrainer` | 67 | — | — | 52 | 513 | 0 | — | 0 (0) | 7 | 1.65 | — | en-tête 513 px |
| `#g-gpn/voir` | 69 | — | — | 30 | 507 | 1 | 508 | 0 (0) | 12 | 1.78 | — | > 60 mots; en-tête 507 px |
| `#g-gpn/comprendre` | 81 | — | — | 75 | 475 | 0 | — | 0 (0) | 3 | 1.55 | — | 0 figure de mécanisme; en-tête 475 px |
| `#g-gpn/decider` | 216 | 137 | 74 | 55 | 475 | 0 | — | 0 (3) | 6 | 3.52 | oui | en-tête 475 px; 3.52 écrans |
| `#g-gpn/entrainer` | 67 | — | — | 52 | 475 | 0 | — | 0 (0) | 7 | 1.68 | — | en-tête 475 px |
| `#g-fermeture/voir` | 68 | — | — | 21 | 545 | 1 | 546 | 0 (0) | 11 | 1.95 | — | > 60 mots; en-tête 545 px |
| `#g-fermeture/comprendre` | 83 | — | — | 79 | 513 | 0 | — | 0 (0) | 3 | 1.57 | — | 0 figure de mécanisme; en-tête 513 px |
| `#g-fermeture/decider` | 291 | 186 | 100 | 52 | 513 | 0 | — | 0 (3) | 15 | 4.18 | oui | > 180 mots; en-tête 513 px; 4.18 écrans |
| `#g-fermeture/entrainer` | 77 | — | — | 55 | 513 | 0 | — | 0 (0) | 7 | 1.73 | — | en-tête 513 px |
| `#g-crise/voir` | 71 | — | — | 48 | 507 | 1 | 508 | 0 (0) | 11 | 1.59 | — | > 60 mots; en-tête 507 px |
| `#g-crise/comprendre` | 81 | — | — | 76 | 475 | 0 | — | 0 (0) | 3 | 1.55 | — | 0 figure de mécanisme; en-tête 475 px |
| `#g-crise/decider` | 328 | 193 | 130 | 52 | 475 | 0 | — | 0 (3) | 14 | 4.34 | oui | > 180 mots; en-tête 475 px; 4.34 écrans |
| `#g-crise/entrainer` | 74 | — | — | 61 | 475 | 0 | — | 0 (0) | 7 | 1.65 | — | en-tête 475 px |
| `#g-pxf/voir` | 66 | — | — | 28 | 507 | 1 | 508 | 0 (0) | 16 | 1.72 | — | > 60 mots; en-tête 507 px |
| `#g-pxf/comprendre` | 83 | — | — | 74 | 475 | 0 | — | 0 (0) | 3 | 1.52 | — | 0 figure de mécanisme; en-tête 475 px |
| `#g-pxf/decider` | 273 | 165 | 103 | 54 | 475 | 0 | — | 0 (3) | 11 | 4 | oui | en-tête 475 px; 4 écrans |
| `#g-pxf/entrainer` | 71 | — | — | 54 | 475 | 0 | — | 0 (0) | 7 | 1.68 | — | en-tête 475 px |
| `#g-pigmentaire/voir` | 67 | — | — | 21 | 573 | 1 | 574 | 0 (0) | 12 | 1.84 | — | > 60 mots; en-tête 573 px |
| `#g-pigmentaire/comprendre` | 91 | — | — | 73 | 541 | 0 | — | 0 (0) | 3 | 1.57 | — | 0 figure de mécanisme; en-tête 541 px |
| `#g-pigmentaire/decider` | 248 | 144 | 99 | 51 | 541 | 0 | — | 0 (3) | 12 | 3.91 | oui | en-tête 541 px; 3.91 écrans |
| `#g-pigmentaire/entrainer` | 81 | — | — | 53 | 541 | 0 | — | 0 (0) | 7 | 1.7 | — | en-tête 541 px |
| `#g-neovasculaire/voir` | 69 | — | — | 36 | 507 | 1 | 508 | 0 (0) | 14 | 1.75 | — | > 60 mots; en-tête 507 px |
| `#g-neovasculaire/comprendre` | 85 | — | — | 76 | 475 | 0 | — | 0 (0) | 3 | 1.55 | — | 0 figure de mécanisme; en-tête 475 px |
| `#g-neovasculaire/decider` | 280 | 159 | 116 | 59 | 475 | 0 | — | 0 (3) | 12 | 4.13 | oui | en-tête 475 px; 4.13 écrans |
| `#g-neovasculaire/entrainer` | 68 | — | — | 51 | 475 | 0 | — | 0 (0) | 7 | 1.68 | — | en-tête 475 px |
| `#g-secondaires/voir` | 67 | — | — | 40 | 507 | 1 | 508 | 0 (0) | 12 | 1.69 | — | > 60 mots; en-tête 507 px |
| `#g-secondaires/comprendre` | 80 | — | — | 62 | 475 | 0 | — | 0 (0) | 3 | 1.58 | — | 0 figure de mécanisme; en-tête 475 px |
| `#g-secondaires/decider` | 311 | 196 | 110 | 54 | 475 | 0 | — | 0 (3) | 11 | 4.23 | oui | > 180 mots; en-tête 475 px; 4.23 écrans |
| `#g-secondaires/entrainer` | 78 | — | — | 56 | 475 | 0 | — | 0 (0) | 7 | 1.74 | — | en-tête 475 px |
| `#g-postop/voir` | 69 | — | — | 30 | 573 | 1 | 574 | 0 (0) | 14 | 1.87 | — | > 60 mots; en-tête 573 px |
| `#g-postop/comprendre` | 73 | — | — | 60 | 541 | 0 | — | 0 (0) | 3 | 1.57 | — | 0 figure de mécanisme; en-tête 541 px |
| `#g-postop/decider` | 259 | 169 | 85 | 56 | 541 | 0 | — | 0 (3) | 14 | 3.67 | oui | en-tête 541 px; 3.67 écrans |
| `#g-postop/entrainer` | 80 | — | — | 60 | 541 | 0 | — | 0 (0) | 7 | 1.75 | — | en-tête 541 px |
| `#g-papille/voir` | 59 | — | — | 45 | 583 | 1 | 584 | 0 (0) | 13 | 1.71 | — | en-tête 583 px |
| `#g-papille/comprendre` | 65 | — | — | 67 | 551 | 0 | — | 0 (0) | 3 | 1.53 | — | 0 figure de mécanisme; en-tête 551 px |
| `#g-papille/decider` | 238 | 154 | 79 | 55 | 551 | 0 | — | 0 (3) | 11 | 3.61 | oui | en-tête 551 px; 3.61 écrans |
| `#g-papille/entrainer` | 72 | — | — | 54 | 551 | 0 | — | 0 (0) | 7 | 1.81 | — | en-tête 551 px |
| `#g-cristallin/voir` | 57 | — | — | 24 | 545 | 1 | 546 | 0 (0) | 12 | 1.8 | — | en-tête 545 px |
| `#g-cristallin/comprendre` | 72 | — | — | 71 | 513 | 0 | — | 0 (0) | 3 | 1.54 | — | 0 figure de mécanisme; en-tête 513 px |
| `#g-cristallin/decider` | 280 | 182 | 93 | 60 | 513 | 0 | — | 0 (3) | 10 | 4.35 | oui | > 180 mots; en-tête 513 px; 4.35 écrans |
| `#g-cristallin/entrainer` | 81 | — | — | 59 | 513 | 0 | — | 0 (0) | 7 | 1.79 | — | en-tête 513 px |
| `#g-dev/voir` | 62 | — | — | 29 | 639 | 1 | 640 | 0 (0) | 13 | 1.99 | — | > 60 mots; en-tête 639 px |
| `#g-dev/comprendre` | 70 | — | — | 61 | 607 | 0 | — | 0 (0) | 3 | 1.59 | — | 0 figure de mécanisme; en-tête 607 px |
| `#g-dev/decider` | 277 | 166 | 106 | 61 | 607 | 0 | — | 0 (3) | 18 | 4.22 | oui | en-tête 607 px; 4.22 écrans |
| `#g-dev/entrainer` | 84 | — | — | 57 | 607 | 0 | — | 0 (0) | 7 | 1.88 | — | en-tête 607 px |
| `#inv-bscan` | 556 | — | — | 140 | — | 2 | 2379 | 0 (0) | 13 | 4.87 | — | 4.87 écrans; ≈ 3 min de lecture; 1re figure à l’écran 3 |
| `#inv-ascan` | 504 | — | — | 139 | — | 2 | 2156 | 0 (0) | 10 | 4.3 | — | 4.3 écrans; ≈ 3 min de lecture; 1re figure à l’écran 3 |
| `#inv-oct` | 488 | — | — | 139 | — | 2 | 2249 | 0 (0) | 26 | 4.45 | — | 4.45 écrans; ≈ 2 min de lecture; 1re figure à l’écran 3 |
| `#inv-gonio` | 511 | — | — | 133 | — | 2 | 2153 | 0 (0) | 13 | 4.55 | — | 4.55 écrans; ≈ 3 min de lecture; 1re figure à l’écran 3 |
| `#inv-fondoeil` | 484 | — | — | 130 | — | 2 | 2174 | 0 (0) | 29 | 4.67 | — | 4.67 écrans; ≈ 2 min de lecture; 1re figure à l’écran 3 |
| `#inv-cv` | 469 | — | — | 139 | — | 2 | 2342 | 0 (0) | 10 | 4.5 | — | 4.5 écrans; ≈ 2 min de lecture; 1re figure à l’écran 3 |
| `#a-anatomie` | 518 | — | — | 111 | — | 8 | 664 | 0 (0) | 77 | 6.13 | — | 6.13 écrans; ≈ 3 min de lecture |
| `#a-physiologie` | 1747 | — | — | 50 | — | 4 | 2183 | 0 (0) | 61 | 16.2 | — | 16.2 écrans; ≈ 9 min de lecture; 1re figure à l’écran 3 |
| `#a-examen` | 3227 | — | — | 82 | — | 15 | 5188 | 0 (0) | 173 | 31.34 | — | 31.34 écrans; ≈ 16 min de lecture; 1re figure à l’écran 7 |
| `#a-imagerie` | 1939 | — | — | 72 | — | 14 | 1201 | 0 (0) | 113 | 20.99 | — | 20.99 écrans; ≈ 10 min de lecture; 1re figure à l’écran 2 |
| `#a-retine` | 5595 | — | — | 95 | — | 17 | 1994 | 0 (0) | 237 | 48.31 | — | 48.31 écrans; ≈ 28 min de lecture; 1re figure à l’écran 3 |
| `#accueil` | 231 | — | — | 71 | — | 4 | -77 | 0 (0) | 3 | 3.89 | — | 3.89 écrans; ≈ 1 min de lecture |
| `#apprendre` | 458 | — | — | 75 | — | 0 | — | 0 (0) | 3 | 5.39 | — | 5.39 écrans; ≈ 2 min de lecture |
| `#reviser` | 103 | — | — | 63 | — | 0 | — | 0 (0) | 4 | 1.78 | — | OK |
| `#investigations` | 303 | — | — | 119 | — | 0 | — | 0 (0) | 0 | 2.94 | — | 2.94 écrans; ≈ 2 min de lecture |
| `#module-b` | 1319 | — | — | 122 | — | 14 | 754 | 1 (1) | 2 | 13.51 | — | 13.51 écrans; ≈ 7 min de lecture |
| `#b-bases` | 1130 | — | — | 126 | — | 7 | 1131 | 0 (1) | 51 | 10.58 | — | 10.58 écrans; ≈ 6 min de lecture; 1re figure à l’écran 2 |
| `#c-bases` | 1021 | — | — | 105 | — | 6 | 1131 | 0 (1) | 56 | 9.84 | — | 9.84 écrans; ≈ 5 min de lecture; 1re figure à l’écran 2 |
| `#cas` | 498 | — | — | 106 | — | 0 | — | 0 (0) | 0 | 4.23 | — | 4.23 écrans; ≈ 2 min de lecture |

</details>

## Annexe B. Méthode et limites
- Scripts : `measure.py` (mesures), `shots.py` (captures), `interact.py` (niveaux 2–3, interactions), `bullets.py` et `refer.py` (puces et blocs Traitement), `algos.py` (arbres). Ils sont dans le dossier de travail du critique, avec `metrics-final.csv` et les captures (`shots/`).
- Le compte de mots inclut les libellés visibles du corps de l'étape (crédits, titres de repliés, boutons). Il exclut la navigation (fil d'Ariane, pastilles, Précédent/Suivant, sélecteur de niveau), les repliés fermés et le texte réservé aux lecteurs d'écran.
- Les mutations sont observées pendant 4 s, à partir de 1,5 s après le chargement. Une animation lancée plus tard par une action n'est pas couverte : c'est conforme au barème, qui vise ce qui avance *seul*.
- Je n'ai pas modifié les fichiers du produit.
