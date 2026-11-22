# Teasers Ocelle : critique sévère avant publication

Date : 22 novembre 2026. Fichiers testés : `launch/teaser/` au commit aeb4007, soit 28 MP4, 36 diapos de carrousel et le dossier `profil/`. Les vidéos n'ont pas été modifiées.

## Méthode

Elle ne dépend pas du registre `cuts.json` : tout est mesuré sur les pixels des vidéos rendues.

- **Images** : extraites au ffmpeg toutes les 0,25 s, soit **2 328 images** pour les 28 reels.
- **Texte** : OCR Tesseract (fra / eng) sur chaque image. Pour chaque ligne de texte, j'ai mesuré la durée pendant laquelle elle reste lisible, et je l'ai comparée à la règle du propriétaire : max(2,5 s ; 1,5 s + 0,35 s par mot). Les cas signalés ont été vérifiés à l'œil sur les images.
- **Zones sûres** : position de chaque mot reconnu (confiance ≥ 70) par rapport au haut (120 px), au bas (220 px) et à la droite (120 px).
- **Taille et contraste** : taille de police lue dans `hud.js` et `reels.js`, puis vérifiée par la hauteur des mots reconnus. Contraste calculé selon les WCAG sur des pixels échantillonnés.
- **Planches** : une planche contact par reel, toutes les 0,5 s. Toutes les diapos ont été relues en FR et en EN.
- **Liens et crédits** : recherche de « http », « www », « .org », « .com », « EyeRounds », « Commons » et « © » dans tous les textes reconnus.

**Contrôles** :
- `_src/check_reading.py` : 28 reels, 0 échec.
- `node tools/validate.js` : OK.

## Note : 7 / 10

La production est solide et cohérente : direction A et E fidèle à la marque, aucune photo ni URL, zones sûres respectées et contrastes élevés. La règle de lecture est respectée partout, et la mesure sur les pixels le confirme.

Trois défauts bloquent pourtant la publication :
- **une erreur clinique répétée** : le corticoïde dans la dendrite, dans 1 reel et 1 carrousel, en FR et en EN ;
- **un reel illisible sur téléphone** : le 05, qui montre l'interface ;
- **des accroches noires et identiques** : on voit « Tu vois le signe ? » alors que le signe reste invisible pendant 3,5 s.

## 1. Lisibilité (mesurée)

| Contrôle | Résultat |
|---|---|
| Durée de lecture, d'après le registre (`check_reading.py`) | 28/28 conformes. Marges minimales : **+0,00 s** pour 01-EN « ocelle is coming » ; +0,05 s pour 01-FR « Révèle. » et pour l'accroche du 03 FR/EN ; +0,15 à +0,25 s pour les défis. |
| Durée de lecture, d'après les pixels (OCR toutes les 0,25 s) | **Aucun texte visible moins longtemps que la règle.** Les 30 cas courts signalés par l'OCR sont tous des artefacts vérifiés à l'œil : mot fluo avec halo, faisceau qui passe sur le titre, autocollant incliné. Exemple : « Follow » est lu sur 2 images seulement mais reste affiché 4 s. |
| Texte d'environ 1 s signalé par le propriétaire | Je n'en trouve plus dans les rendus actuels (aeb4007). La revue précédente se fondait sur le registre de la timeline. Celle-ci mesure les pixels de chaque reel, image par image. |
| Taille du texte à lire | Questions et options : 44–46 px, soit ≈ 16 pt sur un téléphone de 390 pt. Invites : 60 px. Titres de réponse : 66–70 px. Étiquettes en mono (QUESTION, À RETENIR, SCORE, PIO) : 26 px, soit ≈ 9 pt, acceptable pour des étiquettes. **Exception : le reel 05**, dont le texte de l'interface fait 13–23 px de haut (≈ 5–8 pt), illisible (MF-2). |
| Contraste | Blanc ou lavande sur marine : 11,7 à 17:1. « Décembre 2026 » : 12,7:1. « avant Ocelle » : 11,9:1. Les options grisées après la révélation sont volontairement atténuées. |
| Zones sûres (haut 120, bas 220, droite 120) | **0 mot hors zone** sur 2 328 images. |
| Bas d'écran sur TikTok | Risque : l'invite « Ton diagnostic ? » et le minuteur sont à y ≈ 1 490–1 620, soit 300–430 px du bas. La légende TikTok sur 2 lignes peut les couvrir. Le texte essentiel (question et options) reste au-dessus. |

## 2. Rythme et compréhension
- **Défis** : accroche de 0 à 3,5 s, question à 3,5 s, options à 4,0, 4,5 et 5,0 s, minuteur de 8 s de 6 à 14 s, révélation à 14 s, fin à 21,5 s.
  - La question et les options restent 8,65 s à l'écran, pour 8,15 s de lecture requise (19 mots en FR).
  - Lire puis réfléchir tient donc à peine, sauf qu'on peut regarder le dessin pendant l'accroche. C'est juste mais acceptable.
- **Révélation** : l'option en surbrillance, l'autocollant du signe, « Bien vu ! » et le titre du diagnostic arrivent tous en moins de 1,5 s. Lisible, parce que le diagnostic reste 5,5 s.
- **Sans contexte**, le spectateur ne sait jamais ce qu'est Ocelle : la carte de fin dit seulement « ocelle · Décembre 2026 · Abonne-toi » (MF-5).
- **Défis sans regard** : dans 02, 06 et 08, la question écrite suffit à répondre sans regarder le dessin. L'accroche promet un défi visuel ; c'est en fait un défi de lecture (MF-7).
- **Reels de réponse 04b et 07b** : ils rejouent tout le défi, minuteur compris, et la réponse attendue depuis la veille n'arrive qu'à 14 s (MF-6).

## 3. Exactitude clinique (FR et EN)

| Pièce | Verdict |
|---|---|
| 02 Angle fermé | Juste : « Crise de fermeture de l'angle — baisser la PIO, puis iridotomie ». Distracteurs faibles (MF-7). EN : « What does the section show? » ; écrire « cross-section ». |
| 03 Mécanisme | Juste : pupille mi-dilatée → bloc pupillaire → iris bombé, angle fermé → PIO → iridotomie. |
| 04 / 04b Dendrite | Signe et diagnostic justes. **Faux** : « Antiviral ; jamais de corticoïde seul » / « never a steroid alone » (MF-1). |
| 05 Interface | Juste : OACR, tache rouge cerise. Le texte de l'interface reprend « immédiatement (le jour même) », formulation du site encore ambiguë. |
| 06 Décollement | Juste : « Rideau ou ombre : ophtalmo le jour même ». EN : « Central vein occlusion » ; écrire « Central retinal vein occlusion ». |
| 07 / 07b OACR | Juste : « AVC de l'œil : centre d'AVC, maintenant ». **Titre FR incomplet** : « Occlusion de l'artère centrale » (MF-4). |
| 08 Endophtalmie | Juste : « jusqu'à preuve du contraire, ophtalmo le jour même ». Distracteur « Arc sénile » invraisemblable. « Hypopion » alors que le site écrit « hypopyon ». |
| Carrousel 1 Œil rouge | Juste : AV, douleur vraie, pupille ou cornée ; réponse B ; hémorragie sous-conjonctivale bénigne si isolée. |
| Carrousel 2 Fluorescéine | Abrasion et kératite ponctuée justes. **Diapos 3 et 6 : même erreur sur le corticoïde** (MF-1). |
| Carrousel 3 Crise d'angle | Juste. La diapo 6 ne dit pas qu'en urgence on baisse d'abord la PIO. EN diapo 4 : « oedematous » ; écrire « edematous » (le site est harmonisé en anglais nord-américain). |

## 4. Droits
Conforme. Aucune photo : reel 05 compris, la case photo montre le schéma OACR et la ligne de crédit « Schéma · Ocelle ». Aucune URL ni crédit tiers dans les 28 reels, les 36 diapos et le dossier `profil/` (les « © » de l'OCR sont l'anneau du logo).

## 5. Marque, mouvement et accroche
- **Cohérence** : excellente. Fond marine, faisceau cobalt, fluo réservé au signe, Bricolage pour les titres, mono pour les étiquettes, même carte de fin et autocollants de l'interface.
- **Accroche** : faible.
  - Dans 02, 04, 04b, 06, 07, 07b et 08, l'image reste quasi noire jusqu'au « snap » de 3,5 s, et la même accroche, « Tu vois le signe ? », revient 4 fois.
  - Dans les comptes à rebours, « J-7 » reste en faible contraste jusqu'à 2,0 s.
  - Seuls le 03 (« Une crise d'angle, en 5 temps ») et le 05 accrochent dès la première seconde.
- **Synchronisation du son** : le README dit de caler la « drop » sur le snap de 2,0 s. Or le snap tombe à 2,0 s (05, 09), 2,5 s (01), 3,5 s (défis) et 4,0 s (03). Le tableau du README donne aussi 18 s pour 06, 07, 07b et 08, alors que les fichiers durent 25,5 s ou 22,5 s.

## MUST-FIX (classés)

1. **Corticoïde dans la dendrite.**
   - Où :
     - `ocelle-teaser-04b-defi-dendrite-reponse-fr.mp4` et `-en.mp4`, de 15,45 à 21,0 s : « Antiviral ; jamais de corticoïde seul » / « never a steroid alone ».
     - `carrousel-2` FR et EN, diapo 3 (« jamais de corticoïde seul ») et diapo 6 (« Pas de corticoïde seul »).
     - La légende 04b du README.
   - Problème : sur une kératite épithéliale active, le corticoïde est **contre-indiqué**, même avec un antiviral (site : « Prednisolone sur une dendrite : ulcère géographique »).
   - Correction : « Antiviral ; aucun corticoïde sur une dendrite ».
2. **Reel 05 illisible.**
   - Où : `05-touche-le-signe` FR et EN, de 2,0 à 18,0 s.
   - Problème 1 : le texte de l'interface fait 13–23 px de haut (≈ 5–8 pt). Le spectateur ne peut lire ni « Maintenant, nomme le signe », ni les 3 choix, ni le verdict. Correction : agrandir la capture 1,6 à 2 fois, cadrée sur la photo et les choix.
   - Problème 2 : de 12,0 à 18,0 s, un cercle pointillé secondaire tombe sur une rétine vide. C'est la zone `alt` de la vraie photo OPH-250, appliquée au schéma. Correction : la retirer de la capture.
3. **Accroches.**
   - Où : 02, 04, 06 et 08 de 0 à 3,5 s ; 04b et 07b de 0 à 3,5 s ; 09 de 0 à 2,0 s.
   - Correction :
     - éclairer le sujet dès la 1re image et garder le faisceau comme accent ;
     - varier l'accroche à chaque défi, par exemple « Angle ouvert ou fermé ? » ou « Ce niveau blanc ? » ;
     - « J-x » plein contraste dès 0 s.
4. **Titre de l'OACR.**
   - Où : `07b-defi-oacr-reponse-fr`, de 15,0 à 21,0 s.
   - Correction : « Occlusion de l'artère centrale **de la rétine** ».
5. **Dire ce qu'est Ocelle.**
   - Où : carte de fin de tous les reels (dernières 4,5 s).
   - Correction : ajouter « L'ophtalmo en images · externes et R1 » / « Eye images for clerks & R1s ».
6. **Reels de réponse trop lents.**
   - Où : `04b` et `07b`, révélation à 14 s.
   - Correction : rappel de la question en 2 s, puis révélation vers 5 s.
7. **Défis qui se résolvent sans regarder.**
   - Où : 02, 06 et 08, de 3,5 à 14 s.
   - Correction :
     - énoncé qui ne donne pas la réponse ;
     - distracteurs visuels plausibles : retirer « Hypopion » du 02 et « Arc sénile » du 08 ;
     - dans le 02, étiqueter cornée, iris et cristallin, et agrandir l'angle, qui ne fait qu'environ 25 pt sur téléphone.

## SHOULD-FIX
- **« Bien vu ! » / « Nice catch! » et SCORE 00 → 01** félicitent le spectateur quelle que soit sa réponse. Préférer « Réponse : B », ou garder seulement l'autocollant du signe.
- **Vocabulaire** :
  - EN : « cross-section » (02), « Central retinal vein occlusion » (06), « edematous » (carrousel 3, diapo 4).
  - FR : « hypopyon » (08, aligné sur le site).
  - Carrousel 3, diapo 6 : ajouter « en urgence, d'abord baisser la PIO ».
- **Marges nulles** : 01-EN « ocelle is coming » (+0,00 s), 01-FR « Révèle. » et l'accroche du 03 (+0,05 s). Ajouter 0,25 s de réserve pour qu'un nouveau rendu ne fasse pas échouer la règle.
- **Bas d'écran sur TikTok** : vérifier, avec l'aperçu de l'application, que l'invite et le minuteur (300–430 px du bas) ne sont pas cachés par la légende.
- **README** : corriger les heures de snap et la consigne de synchronisation du son, ainsi que les durées de 06, 07, 07b et 08.
- **Date** : avec un lancement provisoire au 23 décembre, J-30 tombe le **23 novembre (demain)**. Confirmer la date avant de publier les comptes à rebours.
- **Détails** :
  - 09 J-7 : mot orphelin « œil. » sur sa propre ligne.
  - Couverture de story 4 : « 12 » peut se lire comme le 12 décembre.
  - 05 : le texte de l'interface hérite de la parenthèse « (le jour même) » du site.

## Ce qui est bon
- Règle de lecture tenue, confirmée sur les pixels. Zones sûres sans faute. Contrastes ≥ 11,7:1. Textes à lire de 44 px ou plus, sauf le reel 05.
- Identité « Fluorescéine » parfaitement tenue sur les 28 reels, les 36 diapos et le dossier `profil/`. Aucune photo, aucune URL.
- 03 et le carrousel 3 : le mécanisme dessiné est clair et juste. C'est le meilleur contenu à publier en premier.

Fichiers de travail (hors dépôt), dans le dossier `reels/` du critique :
- `frames/` : images extraites ;
- `ocr/` : texte reconnu ;
- `analysis.json` : durées par ligne ;
- `sheets/` : planches contact.

---

# Passe 2 : série « X ou Y ? » (10–17) et re-contrôle des défis (22 novembre 2026)

Fichiers testés : commit bd30052, soit 16 MP4 de la série et les défis re-rendus 02, 04, 04b, 05, 06, 07, 07b et 08, en FR et en EN. Même méthode qu'en passe 1 :
- **2 556 images** extraites toutes les 0,25 s et lues par OCR (fra / eng) ;
- règle de lecture du propriétaire, zones sûres, contraste ;
- planches contact et recadrages pleine résolution au moment de la révélation ;
- **taille des pupilles mesurée image par image** dans le 17.

**Contrôles** : `_src/check_reading.py` 44/44 OK ; `node tools/validate.js` OK.

## Note de la série « X ou Y ? » : 7 / 10

Le format est bon :
- les deux dessins sont visibles dès la 1re image et l'accroche « X ou Y ? » est claire ;
- une seule révélation, avec la boucle au feutre ;
- la phrase « pourquoi » fait 4–6 mots ;
- les faits sont justes et sourcés dans le README.

Il manque un point par défaut ci-dessous :
- **7 réponses sur 8 sont A**, ce qui rend le défi prévisible ;
- **trois dessins ne montrent pas le signe qu'ils enseignent** : 14, 17 et 15 ;
- **dans le 13, la phrase « pourquoi » contredit à première vue la réponse affichée** ;
- **l'arbre du 16 oublie la kératite**.

## Mesures

| Contrôle | Résultat |
|---|---|
| Durée de lecture (registre) | 44/44 conformes. Marge minimale : +0,10 s (17-FR). |
| Durée de lecture (pixels) | Aucun texte sous la règle. Les cas signalés par l'OCR sont tous des artefacts : mot fluo, faisceau sur l'accroche, autocollant incliné. |
| Superposition à la révélation | **Pendant ≤ 0,25–0,5 s, le titre de réponse (ou l'arbre) apparaît par-dessus la carte question qui s'efface.** Vu sur 10–17 à 9,5 s (FR) et sur 02, 04b et 08 à 10,0 s ; 06 et 07b utilisent le même gabarit. Cela tombe juste sur le « drop » de la révélation. |
| Zones sûres | 0 mot hors zone sur 2 556 images. |
| Taille | Questions et options : 44 px (≈ 16 pt). Nœuds de l'arbre du 16 : ≈ 36–40 px, lisibles. Étiquettes de panneaux (« Patient 1 », « Lumière ») : ≈ 28 px de haut. |
| Contraste | Même palette qu'en passe 1 (≥ 11,7:1). |
| Rythme | Question et options : 5,9 s, pour 3,25–5,35 s de lecture requise, soit 0,5 à 2,6 s pour réfléchir. Le 16-EN est serré : il faut lire l'arbre, deux autocollants et deux yeux en 4,1 s. |
| Droits | Que du SVG original. Aucune URL, aucune photo. |

## Exactitude clinique et « aha » pour un externe ou un R1

| Reel | Signe et « pourquoi » | Juste ? | Le « aha » porte-t-il ? |
|---|---|---|---|
| 10 Épisclérite / sclérite | La phényléphrine blanchit les vaisseaux superficiels ; le plexus profond reste rouge. « Sclérite : douleur profonde, bilan systémique » | Oui (EyeWiki ; 10 % pour l'épisclère) | **Moyen.** Le distracteur « La fluorescéine » est gratuit et donne la réponse ; pour un R1, « la douleur qui réveille la nuit » trancherait mieux. L'animation du blanchiment est réussie. |
| 11 Dendrite VHS / pseudodendrite VZV | Bulbes terminaux contre ligne sans bulbes. « VHS : vrai ulcère, prend la fluorescéine » | Oui (Moran CORE) | **Bon**, mais les bulbes font ≈ 10 px sur téléphone. La pseudodendrite est aussi brillante que la dendrite ; elle devrait prendre faiblement la fluorescéine. |
| 12 DPV / DPV avec déchirure | « Poussière de tabac » (signe de Shafer) dans le vitré antérieur. « Signe de Shafer : rétine en urgence » | Oui, anatomie correcte | **R1 surtout** : l'externe ne fait pas l'examen du vitré antérieur. « DPV » n'est pas développé dans l'accroche. |
| 13 Anisocorie | Écart plus grand à la lumière : la grande pupille est anormale (III, Adie, collyre). Le dessin est juste (écart à la lumière, presque égal à l'obscurité). | Oui (Moran, MSD) | **Brouillé.** La phrase « pourquoi », « À l'obscurité, c'est la petite : Horner », décrit le cas **opposé**, juste à côté de « Réponse A : la grande ». « III » seul est obscur en FR. Il manque l'alerte : grande pupille avec ptose ou diplopie = imagerie urgente (anévrisme). |
| 14 OACR / OVCR | Tache rouge cerise contre « sang et tonnerre ». « OACR : centre d'AVC, tout de suite » | Message juste | **Faible.** Le fond d'œil OACR est en traits sur fond marine, **sans rétine pâle** : la tache rouge cerise n'a de sens que par contraste avec une rétine blanche ischémique. Ici, on dirait une fovéa normale. Le style diffère aussi du fond pêche des reels 05 et 07. |
| 15 Abrasion avec / sans lentilles | Porteur de lentilles : fluoroquinolone antipseudomonas, jamais de pansement | Oui (AAFP 2004) | **Bon pour l'externe**, mais les **deux dessins sont identiques** : ce n'est pas un défi visuel. L'autocollant « jamais de pansement », posé sur le seul porteur, laisse croire qu'on peut panser le non-porteur, alors que le pansement n'est plus recommandé pour aucune abrasion. |
| 16 Uvéite / crise d'angle | Petite pupille avec précipités, contre pupille mi-dilatée et cornée trouble, puis arbre « Vision ↓, photophobie ? → Pupille ? » | Les deux branches sont justes (AAFP 2010) | **Bon**, mais l'arbre envoie toute baisse de vision avec photophobie vers uvéite ou crise. **Il oublie la kératite** (cornée qui prend la fluorescéine, ulcère du porteur de lentilles), qui est fréquente et menace la vision. EN : « Closure » est vague ; écrire « Angle closure ». |
| 17 DPAR | Lampe qui balance. Mesure : lumière sur l'OD → la pupille de l'OS se contracte (≈ 2 500 px²) ; lumière sur l'OS → la pupille de l'OD se dilate (≈ 4 800 px²). DPAR gauche juste. « DPAR : la pupille éclairée se dilate » | Oui (CEH, EyeWiki) | **Bon s'il est visible.** Mais la pupille éclairée est **délavée par le halo** (gris pâle sur beige) : le signe décisif ne se voit que par l'œil adelphe. Sous la lampe, une vraie pupille reste noire. |

## Re-contrôle des défis (eyebrow « Défi du jour · Ocelle »)

| MUST-FIX de la passe 1 | Statut |
|---|---|
| Dendrite et corticoïde | **Corrigé.** 04b : « Kératite herpétique : antiviral, pas de corticoïde ». Carrousel 2, diapo 3 : « Antiviral ; aucun corticoïde sur une dendrite ». Diapo 6 : « Antiviral, et aucun corticoïde ». EN : « no steroids ». |
| Accroches | **Corrigé.** Le dessin est visible dès la 1re image, et chaque défi a sa propre accroche (« Ouvert ou fermé ? », « Ce niveau blanc ? », « Soudain, plus rien »…). Le 02 étiquette maintenant cornée, iris et cristallin. |
| Reel 05 | **Corrigé.** Zoom de la caméra, grandes étiquettes « pas ici » et « Tache rouge cerise », cercle secondaire retiré. Reste : l'en-tête capturé affiche encore « Ophtalmo · externat et R1 », alors que le reste du site a retiré cette mention de public. |
| 07b titre, carte de fin, révélation à 9,5 s | **Corrigé** (« …de la rétine », « L'ophtalmo en images »). |

## MUST-FIX (série « X ou Y ? »)

1. **Position de la bonne réponse : A dans 7 cas sur 8** (10–16 ; seul le 17 répond B). Alterner A et B, par exemple 4 et 4.
2. **13-anisocorie FR/EN, 9,95–14,5 s** : la phrase « pourquoi » décrit le cas opposé à la réponse affichée. Écrire plutôt « Écart à la lumière : la grande ne se contracte pas » / "Bigger in light: the large pupil can't constrict". Garder Horner pour le sous-titre, ou pour un autre reel.
3. **14-oacr-ovcr FR/EN, 0–14,5 s, panneau Patient 1** : dessiner la rétine pâle et ischémique autour de la tache rouge cerise, avec des artères grêles. Idéalement, reprendre le fond pêche du site, comme dans les reels 05 et 07.
4. **16-uveite-crise FR/EN, 9,9–14,5 s (EN 10,4–14,5)** : ajouter dans l'arbre « pupille normale → fluorescéine → kératite », sinon l'arbre exclut une urgence fréquente. EN : « Angle closure ».
5. **17-dpar FR/EN, 0–14,5 s** : garder la pupille éclairée noire (le halo autour, pas dessus), pour que l'on voie la pupille gauche s'agrandir sous la lumière.
6. **15-abrasion-lentille FR/EN, 0–14,5 s** : les deux panneaux sont identiques. Dessiner la lentille (bord, ou lentille posée à côté) sur le panneau 1. Préciser « aucune abrasion ne se panse ; lentilles : fluoroquinolone ».
7. **Superposition à la révélation** (≈ 0,25 s) : 10–17 à 9,5 s ; 02, 04b et 08 à 10,0 s ; 06 et 07b, même gabarit. Faire disparaître la carte question avant que le titre de réponse n'entre.

## SHOULD-FIX
- **10** : remplacer le distracteur « La fluorescéine » par « La douleur qui réveille la nuit », ce qui force à réfléchir.
- **11** : grossir les bulbes, et faire briller plus faiblement la pseudodendrite.
- **12** : développer « DPV » dans l'accroche, ou écrire « Corps flottants : banal ou déchirure ? ».
- **13** : « nerf III » au lieu de « III ». Mentionner l'urgence III + ptose.
- **05** : retirer « externat et R1 » de l'en-tête capturé.
- **16-EN** : 4,1 s pour l'arbre, deux autocollants et deux yeux ; ajouter 0,5 s ou alléger.
