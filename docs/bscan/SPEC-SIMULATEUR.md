# Simulateur d’échographie B — spécification

Statut : spécification, rien n’est construit. Fondée sur `CONSENSUS.md` (méthode enseignée) et `GRILLE.md` (sources). Les points marqués **[à valider]** attendent l’avis de l’expert (`VALIDATION.md`).

## 1. But et promesse

L’apprenant tient la sonde. Il la pose sur un œil 3D, la tourne, la bascule, et voit en même temps l’image B que ce plan de coupe produirait. Il règle le gain, demande au patient de bouger l’œil, puis répond.

Ce que les ressources existantes ne font pas : les vidéos montrent un expert qui tient la sonde (V1, V2, V5) ou une animation passive (V13). Aucune ne laisse l’apprenant se tromper de plan et comprendre pourquoi l’image change.

Ce que le simulateur n’est pas : un appareil réaliste, ni un outil de diagnostic. Chaque image porte la mention « Simulation pédagogique » (règle de la plateforme : aucune image fabriquée présentée comme authentique).

## 2. Objectifs d’apprentissage (niveau R1)

Niveaux de la plateforme : 1 externe, 2 externe motivé, 3 R1.

| # | À la fin, l’apprenant sait… | Niveau | Mesuré par |
|---|---|---|---|
| O1 | Dire quand demander une échographie B, et quand s’abstenir (globe ouvert) | 1 | QCM E1, E2 |
| O2 | Poser la sonde du côté opposé à la zone à voir, patient regardant vers cette zone | 1 | Mission 1, trace de la sonde |
| O3 | Orienter le marqueur (nasal ou supérieur en transverse ; vers la cornée en longitudinale) et dire ce qui est en haut de l’écran | 2 | Mission 2, QCM E3, E4 |
| O4 | Trouver le nerf optique, puis balayer du limbe au fornix | 1 | Mission 1 |
| O5 | Enchaîner T12, T6, T3, T9 et LMAC, et étiqueter chaque coupe | 2 | Mission 3, carte de couverture |
| O6 | Monter le gain pour dépister, le baisser pour classer une membrane | 1 | Mission 4, QCM E5 |
| O7 | Faire une étude cinétique et lire les mouvements résiduels | 2 | Mission 5, QCM E6 |
| O8 | Distinguer DPV, décollement de rétine et décollement choroïdien par trois questions : attache, gain bas, mobilité | 2 | Cas C1 à C4, QCM E7 |
| O9 | Reconnaître le signe décisif de 9 autres tableaux (liste § 7) et décider du délai de référence | 3 | Cas C5 à C13 |
| O10 | Reconnaître 4 artéfacts : air, réverbération d’implant, gain inadapté, huile de silicone | 3 | Cas P1 à P4 |

Hors objectifs : mesurer une tumeur, biométrie, immersion, UBM, orbite, Doppler.

## 3. Écrans

Règles `STYLE-PEDAGO.md` : un écran se lit en moins d’une minute, texte plafonné, aucune animation au rythme imposé, chaque interaction produit une réponse ou révèle un signe.

| Écran | Contenu | Texte visible |
|---|---|---|
| S0. Entrée (dans `#inv-bscan`) | Carte « Tiens la sonde » : une phrase, un bouton. Remplace l’outil `bscan-probe` actuel, qui reste le repli sans WebGL. | ≤ 30 mots |
| S1. Prise en main | Œil 3D à gauche, image B à droite (empilés sur téléphone). Mission 1 : « Trouve le nerf optique. » Une seule consigne à la fois. | ≤ 40 mots |
| S2. Le marqueur | Mission 2 : même position, l’apprenant retourne le marqueur ; l’image se renverse. Question : « Qu’est-ce qui est en haut ? » | ≤ 40 mots |
| S3. Le balayage | Mission 3 : faire T12, T6, T3, T9, LMAC. Une carte du fond d’œil se colore là où le faisceau est passé. Étiquette à choisir pour chaque coupe gelée. | ≤ 50 mots |
| S4. Le gain | Mission 4 : vitré apparemment vide ; l’apprenant monte le gain, des points apparaissent. Puis une membrane : baisser le gain, persiste-t-elle ? | ≤ 50 mots |
| S5. La cinétique | Mission 5 : boutons « Regarde en haut », « Regarde en bas », « Regarde droit devant ». L’apprenant compare deux membranes. | ≤ 40 mots |
| S6. Cas | Observe → Réponds → Révèle. Un patient en une phrase, œil inconnu. L’apprenant explore, gèle une coupe, répond (4 options + « Je ne sais pas » + confiance). La révélation place la sonde sur la coupe décisive et allume le signe. | énoncé ≤ 25 mots, révélation ≤ 30 mots |
| S7. Bilan | Couverture obtenue, gestes faits ou oubliés (nerf optique d’abord, gain, cinétique), cas réussis, signe à revoir. Lien vers la fiche. | ≤ 60 mots |

Navigation : pastilles de progression, Précédent / Suivant, comme les fiches. Les missions S1 à S5 se font une fois ; S6 est rejouable.

## 4. Commandes

### 4.1 Ce que l’apprenant contrôle

| Commande | Souris / tactile | Clavier | Effet |
|---|---|---|---|
| Position de la sonde | Glisser la sonde sur le globe | Flèches gauche / droite : tourner autour du limbe par pas de 15° ; haut / bas : limbe ↔ fornix | Déplace le point de contact |
| Rotation de la sonde sur son axe | Glisser l’anneau du marqueur, ou molette / pincement à deux doigts | `R` et `Maj+R` par pas de 15° | Passe de transverse à longitudinale, change le côté du marqueur |
| Bascule fine | Glisser avec `Alt`, ou second curseur sur téléphone | `W` / `S` | Incline le faisceau sans déplacer le contact |
| Regard du patient | Pavé à 9 positions | `1` à `9` | Tourne le globe sous la sonde |
| Gain | Curseur | `+` / `-` | Voir § 6.3 |
| Cinétique | « Regarde en haut / en bas / à gauche / à droite », puis « Stop » | `K` | Voir § 6.4 |
| Geler / étiqueter | Bouton | `Espace` | Fige l’image, propose l’étiquette |
| Vue de l’œil | Glisser le fond pour tourner la caméra ; bouton « face / profil / dessus » | `V` | Ne change pas la coupe |
| Positions guidées | Boutons T12, T6, T3, T9, LMAC (missions seulement, absents des cas) | — | Anime la sonde vers la position, sur demande |
| Aides | Afficher le plan de coupe dans l’œil ; afficher le vecteur A (niveau 3) | `P`, `A` | |

Pendant un cas, les aides « plan visible » et « positions guidées » sont désactivées au niveau 3, disponibles aux niveaux 1 et 2 (avec trace dans le bilan).

### 4.2 Retour permanent

Sous l’image, une ligne mise à jour en direct (aussi lue par les lecteurs d’écran, `aria-live="polite"`, limitée à un message par seconde) :

> « Coupe transverse. Sonde à 6 h, au limbe. Marqueur nasal. Tu regardes 12 h, pôle postérieur. Étiquette : T12 P. »

Au niveau 3, la dernière phrase et l’étiquette sont masquées jusqu’au gel de l’image.

### 4.3 Mode paupière **[à valider]**

Interrupteur « paupière fermée (gel) / œil ouvert sous anesthésie ». Paupière fermée : atténuation supplémentaire (il faut plus de gain) et le pavé du regard devient « demandé » et non « vu » (léger écart aléatoire du regard, que l’apprenant doit corriger en retrouvant le nerf optique). Valeur par défaut à fixer par l’expert.

## 5. Modèle géométrique

Un seul modèle analytique sert à la fois au rendu 3D et à la coupe : pas de maillage importé, pas de volume pré-calculé.

### 5.1 Repères

- Repère de l’orbite `O` : x vers la droite du patient, y vers le haut, z vers l’avant. L’œil (`eye: 'OD' | 'OS'`) fixe où sont nasal et temporal. Les heures d’horloge sont celles de l’examinateur face au patient.
- Repère du globe `G` : tourne avec le regard (rotation ≤ 35°). Toute l’anatomie et toute la pathologie sont définies dans `G`.
- La sonde est définie dans `O` (elle est tenue par l’examinateur), puis ramenée dans `G`.

### 5.2 Anatomie (valeurs de départ, à ajuster à l’œil)

| Structure | Forme analytique |
|---|---|
| Globe | Sphère, rayon 12 mm (longueur axiale 24 mm) ; paroi = coque de 1 mm |
| Cornée | Calotte, rayon 7,8 mm |
| Cristallin | Ellipsoïde 9 × 4 mm, 4 mm derrière la cornée ; variante implant (lame mince très réfléchissante) |
| Nerf optique | Cylindre de 3 mm (gaine 4 à 5 mm), inséré à environ 15° en nasal du pôle postérieur, dirigé en arrière et en nasal |
| Macula | Point au pôle postérieur, côté temporal de la papille |
| Muscles droits | 4 rubans, insertion à 5,5–7,7 mm du limbe |
| Ora serrata | Cercle à environ 7 mm du limbe |
| Ampoules vortiqueuses | 4 points en arrière de l’équateur, dans les quadrants obliques (limite des dômes choroïdiens) |
| Graisse orbitaire | Demi-espace derrière le globe, hors nerf et muscles |

Ces dimensions sont des ordres de grandeur anatomiques usuels, **à faire relire** : elles ne viennent pas du corpus.

### 5.3 Sonde et plan de coupe

- Sonde B sectorielle : secteur d’environ 55° (V2 : un balayage couvre ≈ 60°), profondeur affichée 45 mm.
- État : `contact` (heure d’horloge θ, excentricité φ depuis l’apex cornéen : 0° axiale, ≈ 30° limbe, ≈ 60° fornix), `twist` ψ (rotation autour de l’axe de la sonde), `tilt` (bascule), `markerSign`.
- Par défaut, l’axe du faisceau passe par le centre du globe (W5). La bascule l’en écarte de ± 20°.
- Plan de coupe = (point de contact, axe du faisceau, vecteur latéral vers le marqueur). Écran : sonde à gauche, profondeur vers la droite, côté du marqueur en haut (convention des appareils ophtalmiques, vue dans les captures de V3, V6, V7, V9, V10 et V20).
- Classification automatique de la coupe pour le retour et l’étiquetage : axiale si φ < 10° ; transverse si le plan est à moins de 20° de la tangente au limbe ; longitudinale s’il contient l’axe du globe à 20° près ; sinon oblique. Suffixe de profondeur (P, PE, E, EA) selon la latitude du point où l’axe du faisceau touche la paroi (W6).

### 5.4 Pathologies comme champs paramétriques

Chaque maladie est une fonction dans `G`, évaluée au point 3D de chaque pixel. Paramètres par cas : siège (heures, latitude), taille, ancienneté.

| Maladie | Représentation |
|---|---|
| DR | Surface r = R − h(lat, lon, t). h = 0 à la papille et à l’ora. Épaisseur 0,4 mm, plis. Variantes : partiel, total en entonnoir ouvert |
| DPV | Surface mince (0,1 mm), ondulée, détachée de la papille (variante : restée attachée, excentrique ; variante : tapissée de sang, plus épaisse) |
| DC | 2 à 4 dômes entre l’ora et les ampoules vortiqueuses, jamais jusqu’à la papille ; contenu séreux (vide) ou hémorragique (points) ; variante « dômes qui se touchent » |
| HV | Champ de particules fines dans le vitré, densité plus forte en bas ; variante sous-hyaloïdienne |
| Hyalose astéroïde | Particules brillantes dans le gel, zone vide de 1 à 2 mm avant la paroi |
| Endophtalmie | Particules + membranes fines + paroi épaissie (choroïde) |
| Mélanome | Dôme ou champignon (deux ellipsoïdes joints par un col), intérieur à faible rétrodiffusion décroissante, excavation de la paroi à la base, DR séreux optionnel |
| CEIO | Petite sphère ou éclat à impédance maximale, ombre, réverbérations |
| Sclérite postérieure | Paroi épaissie + lame liquide sous-ténonienne rejoignant la gaine du nerf (signe du T) |
| Œdème papillaire | Papille bombée, gaine élargie ; la gaine s’amincit quand le regard passe en abduction de 30° |
| Drusen papillaires | Petit foyer à impédance maximale sur la papille, ombre |
| Staphylome | Rayon de la paroi augmenté localement près de la papille |
| Déchirure | Petit lambeau relevé en périphérie, relié à une DPV adhérente |
| Artéfacts | Implant (réverbérations), air (contact partiel), huile de silicone (vitesse du son réduite → globe allongé à l’écran) |

## 6. Synthèse de l’image B

### 6.1 Principe

Pour chaque pixel du secteur (profondeur r, angle α) : point 3D → champs d’anatomie et de pathologie → amplitude en décibels → gain et compression → niveau de gris. Tout se calcule dans un nuanceur de fragment (WebGL) sur un quadrilatère ; aucune texture médicale n’est embarquée.

Amplitude d’un pixel = somme de trois termes :

1. **Interfaces** : là où l’impédance change (paroi, membrane, capsule, surface de masse). Intensité ∝ contraste d’impédance × |cos de l’angle d’incidence|^k. C’est ce qui fait qu’une membrane abordée de biais pâlit, comme en vrai (V6 1:13:35, V11 20:08).
2. **Rétrodiffusion de volume** : coefficient par tissu (vitré ≈ 0, graisse orbitaire élevée, mélanome bas, hémangiome élevé), multiplié par une texture de tavelure.
3. **Atténuation cumulée** le long du rayon depuis la sonde : marche de 24 à 32 pas par rayon. Donne l’ombre derrière un corps étranger ou une calcification, l’ombre du nerf optique, le creux à la base d’une masse.

### 6.2 Comment imiter la texture d’écho (faisabilité)

| Effet réel | Recette procédurale | Coût |
|---|---|---|
| Tavelure (*speckle*) | Bruit de valeur à 2 octaves en coordonnées polaires (r, α), étiré latéralement ; amplitude tirée d’une loi de Rayleigh (√(−2 ln u)) et **multipliée** au signal | faible |
| Résolution latérale qui se dégrade en profondeur | Largeur du noyau de flou latéral ∝ r | faible |
| Grain qui « nage » quand la sonde bouge | Le bruit est indexé dans le repère de la sonde, pas dans celui du globe | nul |
| Scintillement d’image vivante | Décalage de la graine à 8–10 Hz, seulement pendant une interaction ; arrêté si `prefers-reduced-motion` | faible |
| Écho initial (« bang ») | Bande très brillante sur les 2 à 3 premiers mm, qui masque le segment antérieur en contact (V2 3:43) | nul |
| Lignes de balayage | Légère modulation en α (≈ 256 lignes) | nul |
| Réverbération (implant, corps étranger métallique, membrane de sonde en perte de contact) | Copies de l’interface à des distances multiples, amplitude ÷ 2 à chaque copie | faible |
| Ombre acoustique | Atténuation cumulée forte après un réflecteur total | inclus |
| Bruit électronique à gain élevé | Bruit blanc additif sous le plancher, révélé seulement quand le gain monte | nul |
| Compensation en profondeur (TGC) | Rampe fixe, non réglable (hors objectifs) | nul |

Qualité visée : « crédible pour un clinicien au premier coup d’œil », pas photoréaliste. Les captures de V7, V10 et V20 servent de référence visuelle interne (non reproduites).

Risque principal : un rendu trop propre fait « dessin ». Parade : interfaces légèrement irrégulières (bruit basse fréquence sur les rayons des surfaces), bords de secteur fondus, dynamique limitée à 50–60 dB.

### 6.3 Le gain, physiquement juste

Tout est calculé en décibels par rapport à la sclère (0 dB).

`gris = clamp((A_dB + gain − plancher) / dynamique, 0, 1)`

| Écho | Niveau de départ **[à valider]** |
|---|---|
| Sclère, rétine décollée, corps étranger, drusen | 0 dB (corps étranger : sature) |
| Choroïde décollée | −2 dB |
| Astéroïdes | −3 à −8 dB |
| Graisse orbitaire | −6 à −12 dB |
| DPV tapissée de sang | −10 à −15 dB |
| DPV simple | −20 à −28 dB |
| Hémorragie organisée | −15 à −22 dB |
| Hémorragie fraîche, cellules inflammatoires | −28 à −36 dB |

Conséquence voulue, sans règle écrite à la main : quand l’apprenant baisse le gain, les points d’hémorragie partent d’abord, puis la DPV, et la rétine reste (V9 2:37, V7 26:05, W1, W7). Curseur gradué « bas / moyen / élevé », valeur en dB affichée avec la mention « indicatif » (désaccord B4).

### 6.4 La cinétique

Déclenchée par l’apprenant seulement. Le globe tourne de 20° en 0,3 s, puis s’arrête ; chaque structure mobile suit un oscillateur amorti propre.

| Structure | Amplitude | Durée après l’arrêt | Allure |
|---|---|---|---|
| DPV | grande | 2 à 3 s | ondulation lente, fouet |
| DPV tapissée de sang | moyenne | 1,5 à 2 s | ondulation plus lourde |
| Rétine décollée récente | petite | 0,4 à 0,8 s | tremblement raide, ancré à la papille et à l’ora |
| Rétine décollée ancienne, entonnoir | très petite | < 0,3 s | presque fixe |
| Choroïde décollée | nulle | 0 | — |
| Hémorragie du vitré | advection | 2 à 3 s | tourbillon, puis retombe |
| Astéroïdes | moyenne | 1 à 1,5 s | bougent avec le gel **[à valider]** |
| Masse, paroi | nulle | 0 | — |

Les durées sont des valeurs de départ tirées des descriptions qualitatives (V6 21:24–22:31, V8 30:31, V9 3:08, V20 2:50, W7) ; aucune source ne les chiffre. **[à valider]** sur vidéos réelles par l’expert.

`prefers-reduced-motion` : pas d’animation ; un tracé pointillé montre l’amplitude maximale (comportement déjà en place dans l’outil actuel).

Vascularisation spontanée d’une masse (niveau 3, optionnel) : scintillement localisé, œil et sonde immobiles.

### 6.5 Vecteur A (niveau 3, optionnel)

Profil d’amplitude le long de la ligne centrale, tracé sous l’image. Sert à montrer le pic de 100 % de la rétine, le pic bas de la DPV, le double pic de la choroïde. Mention fixe : « Le grade d’une tumeur se fait au A-scan standardisé, par un échographiste » (désaccord B7).

## 7. Jeu de cas

Chaque cas suit Observe → Réponds → Révèle. L’apprenant ne peut répondre qu’après avoir gelé au moins une coupe.

| Cas | Maladie | Énoncé (résumé) | Geste attendu | Signe décisif révélé | Niveau |
|---|---|---|---|---|---|
| C1 | DPV | Corps flottants soudains, fond flou | Gain élevé, cinétique | Membrane fine, flottante, qui disparaît à gain bas | 1 |
| C2 | DR | Voile dans le champ, cataracte blanche | Longitudinale vers la papille, gain bas, cinétique | Membrane brillante fixée à la papille, raide, qui persiste | 1 |
| C3 | DC hémorragique | Douleur après chirurgie du glaucome | 4 transverses | Dômes lisses, immobiles, arrêtés avant la papille | 2 |
| C4 | DPV tapissée de sang, encore attachée à la papille | Diabétique, hémorragie | Trois questions (attache, gain, mobilité) | Attachée, mais pâlit à gain bas et flotte : hyaloïde, pas rétine | 3 |
| C5 | HV avec rétine à plat | Baisse de vision brutale | Gain élevé, balayage complet | Points mobiles, paroi lisse partout | 1 |
| C6 | HV + déchirure | Idem, myope | Longitudinales supéro-temporales, sonde vers le fornix | Petit lambeau en périphérie | 3 |
| C7 | Hyalose astéroïde | Fond difficile, vision conservée | Gain bas | Points qui persistent, zone vide avant la paroi | 2 |
| C8 | Endophtalmie | Jour 4 après cataracte, douleur, hypopion | Balayage, comparer la paroi | Opacités + membranes + paroi épaissie | 3 |
| C9 | Mélanome | Masse pigmentée vue par l’optométriste | Transverse et longitudinale sur la masse | Champignon, intérieur sombre, base excavée | 2 |
| C10 | CEIO métallique | Éclat métallique ancien ; plaie déjà évaluée et fermée par l’ophtalmologiste, qui fait l’examen avec toi **[à valider]** | Gain au minimum | Point qui persiste, ombre derrière | 2 |
| C11 | Sclérite postérieure | Douleur profonde, œil rouge | Coupe passant par le nerf optique | Signe du T | 3 |
| C12 | Œdème papillaire vs drusen (deux yeux à comparer) | Céphalées, papilles floues | Coupe de la papille, gain bas, regard en abduction de 30° | Drusen : point brillant avec ombre. Œdème : gaine large qui s’amincit en abduction | 3 |
| C13 | Staphylome postérieur | Myope fort, cataracte dense | Axiale et LMAC | Paroi repoussée en arrière, tuniques présentes | 2 |
| P1 | Pas assez de gel | — | Remettre du gel | Bandes parallèles, image coupée | 1 |
| P2 | Implant | Pseudophaque | Quitter l’axiale | Échos répétés derrière l’implant, qui disparaissent hors de l’axe | 2 |
| P3 | Gain trop haut | Vitré « plein » | Baisser le gain | Tout disparaît : c’était du bruit | 1 |
| P4 | Huile de silicone | Opéré de la rétine | Reconnaître | Œil faussement long, paroi mal vue | 3 |

Cas « normal » inclus au hasard (1 fois sur 5) pour éviter que l’apprenant cherche toujours une lésion.

Délai de référence demandé à la révélation (format `treatment.refer` de la plateforme), à faire écrire par le rôle « pédagogie clinique » et relire par l’expert. Un cas sur le globe ouvert n’est **pas** simulé : l’écran d’entrée du cas affiche « plaie perforante possible » et la bonne réponse est de ne pas poser la sonde (O1).

## 8. Évaluation

### 8.1 Mesures dans le simulateur (formatives, jamais punitives)

| Mesure | Calcul | Seuil de réussite proposé |
|---|---|---|
| Nerf optique trouvé d’abord | Première coupe gelée contenant l’ombre du nerf | oui |
| Couverture | Part de la surface rétinienne balayée (grille 24 × 12 sur la sphère) | ≥ 80 % avec la séquence complète |
| Étiquetage | Étiquette choisie = classification automatique | 4 sur 5 |
| Usage du gain | A balayé à gain élevé, puis a baissé le gain sur une membrane | oui / non |
| Cinétique faite avant de répondre | Au moins un mouvement déclenché sur un cas de membrane | oui / non |
| Réponse et confiance | Comme `Inv.practice` | — |

Enregistrement dans `Store.p.inv` (mécanisme existant), clé `bscan3d`. Aucune donnée ne quitte l’appareil.

### 8.2 Items écrits (format `OPH.invPractice`)

| # | Tige | Bonne réponse | Signe ou règle | Sources |
|---|---|---|---|---|
| E1 | Cataracte blanche, fond invisible. Quel examen vérifie la rétine avant la chirurgie ? | Échographie B | Les ultrasons passent là où la lumière ne passe pas | W1, W2 (item existant `p-bscan-1`) |
| E2 | Plaie perforante suspectée. Que fais-tu de la sonde ? | Je ne la pose pas ; coque, TDM, référence | Risque d’expulsion du contenu | W9, W14, W11, W4 |
| E3 | Tu veux voir la rétine de 12 h. Où poses-tu la sonde, où regarde le patient ? | Sonde à 6 h, regard en haut | Côté opposé, regard vers la zone | V1, W5, W6 |
| E4 | Coupe longitudinale. Où est le nerf optique à l’écran ? | En bas | Marqueur vers la cornée | V5, V8, W6 |
| E5 | Membrane dans le vitré. Tu baisses le gain, elle disparaît. Conclusion ? | Plutôt une hyaloïde (DPV) | La rétine persiste à gain bas | V7, V9, W1, W7 |
| E6 | Après l’arrêt du regard, une membrane ondule encore 2 secondes. Conclusion ? | DPV | Mouvements résiduels marqués | V6, V8, W7 |
| E7 | Dômes épais, immobiles, qui s’arrêtent avant la papille. | Décollement choroïdien | Limite : veines vortiqueuses | V6, V7, W7, W8 |
| E8 | Point très brillant, visible même au gain minimal, bande noire derrière. | Corps étranger | Ombre acoustique | V7, W1, W11 |
| E9 | Bande noire derrière la paroi, qui rejoint l’ombre du nerf. | Sclérite postérieure (signe du T) | Liquide sous-ténonien | V7, W1 |
| E10 | Masse en champignon, sombre à l’intérieur. Prochaine étape ? | Référence rapide en oncologie oculaire | Mélanome choroïdien jusqu’à preuve du contraire | V6, W7, W8 |
| E11 | Points brillants dans le vitré, vision 6/9, zone vide avant la paroi. | Hyalose astéroïde | Bénin ; attention au fond d’œil gêné | V3, V6, W1 |
| E12 | Membrane fixée à la papille chez un diabétique avec hémorragie. Est-ce forcément la rétine ? | Non : vérifier gain bas et mobilité | Hyaloïde tapissée de sang | V6, V7, W7 |

Chaque item a une explication par option (`why`) et une révélation en une phrase (`reveal`), à rédiger par le rôle « pédagogie clinique » en français et en anglais.

## 9. Intégration technique

### 9.1 Fichiers et propriété (voir `PLATFORM.md`)

| Fichier | Rôle propriétaire | Contenu |
|---|---|---|
| `src/bscan-sim.js`, `src/bscan-sim.css` | exercices interactifs | Composant `tools['bscan-sim']`, géométrie, nuanceurs, commandes |
| `data/bscan-cases.js` | pédagogie clinique | `G.OPH.bscanCases = [{ id, patho, eye, params, stem, options, answer, why, reveal, refer, level, sources }]`, champs bilingues `{fr, en}` |
| `data/investigations.js` | pédagogie clinique | `tool: 'bscan-sim'` pour l’entrée `bscan` ; items E1 à E12 |
| `vendor/three/…` | web | Copie épinglée de three.js |
| `tools/build_web.py`, `sw.js` | web | Copier `vendor/`, précacher, ne pas concaténer three.js dans la page |
| `tests/web/` | tests | Tests du § 11 |

Identifiants de code en anglais : `ProbeState`, `scanPlaneFromProbe()`, `classifyScan()`, `sampleField()`, `gainMap()`, `kinetics.step()`, `coverageMap`.

### 9.2 Chargement de three.js : copie embarquée, pas le CDN

Recommandation : **copie embarquée**, chargée à la demande.

Raisons constatées dans le dépôt :

- La CSP du site est `script-src 'self' 'unsafe-inline' https://gc.zgo.at` (`tools/build_web.py`, `CSP_POLICY`). Un script venu de cdnjs serait bloqué, sauf à élargir la CSP.
- Le site fonctionne hors ligne (service worker) et dans l’app iOS (Capacitor, `capacitor://`). Un CDN casserait les deux.
- La politique de confidentialité annonce une seule origine tierce (GoatCounter).

Mise en œuvre : `vendor/three/three.module.min.js` (et `three.core.min.js` pour les versions qui séparent le noyau), version épinglée dans le nom du dossier, chargée par `import()` dynamique à l’ouverture du simulateur seulement. Poids à mesurer au moment du choix (ordre de grandeur attendu : 600 à 700 ko minifié, 150 à 200 ko compressé ; chiffre non vérifié).

Si le propriétaire préfère tout de même le CDN : `https://cdnjs.cloudflare.com/ajax/libs/three.js/0.172.0/three.module.min.js` (version présente sur cdnjs et vieille de bien plus de deux semaines ; noms de fichiers exacts à vérifier sur https://cdnjs.com/libraries/three.js/0.172.0), avec ajout de `https://cdnjs.cloudflare.com` à `script-src`, attribut d’intégrité, et repli hors ligne obligatoire. Non recommandé.

À vérifier tôt : `import()` dynamique d’un module ES depuis `capacitor://` dans WKWebView.

### 9.3 Partage du travail entre three.js et le nuanceur

- three.js : scène de l’œil (sphères, calotte, cylindre, rubans des muscles), sonde, plan de coupe translucide, lancer de rayon pour le glisser de la sonde, caméra. Matériaux simples, style « Fluorescéine » (surfaces calmes, fluo réservé au marqueur et au signe révélé).
- Image B : un second canevas WebGL avec un nuanceur de fragment dédié (ou un `ShaderMaterial` three.js sur un plan plein écran). Les uniformes portent l’état de la sonde, le regard, le gain, la phase cinétique et les paramètres du cas.
- La même fonction de champ existe en JavaScript (pour la carte de couverture, la classification et les tests) et en GLSL (pour l’image). Un test compare les deux sur des points tirés au hasard.

### 9.4 Performances et replis

- Budget : image B en 384 × 384 sur téléphone, 512 × 512 sur ordinateur, 30 images par seconde pendant une interaction, rendu à la demande sinon (pas de boucle permanente : batterie).
- WebGL 1 suffit (pas de textures 3D). Marche de rayon bornée à 32 pas.
- Sans WebGL, ou si la création du contexte échoue : repli sur l’outil 2D actuel `bscan-probe`, avec un message d’une ligne.
- Perte de contexte WebGL : écouteur `webglcontextlost`, reconstruction.

### 9.5 Accessibilité et bilingue

- Tout se fait au clavier (§ 4.1). Cibles tactiles ≥ 44 px.
- Description textuelle en direct de la coupe (§ 4.2) : c’est aussi l’outil pédagogique principal.
- L’image B n’est jamais la seule porteuse d’information à la révélation : le signe est nommé en texte.
- Contraste : l’image B reste en niveaux de gris ; les annotations de révélation utilisent la couleur fluo de la marque avec un contour sombre.
- Chaînes d’interface dans `src/i18n.js` (clés `bs3.*`), contenu des cas bilingue natif.

## 10. Découpage proposé

| Lot | Contenu | Critère de sortie |
|---|---|---|
| L0. Validation | Réponses de l’expert aux questions bloquantes de `VALIDATION.md` | Conventions et niveaux en dB arrêtés |
| L1. Œil normal | Œil 3D, sonde, plan, image B normale (paroi, nerf, graisse, cristallin, écho initial), retour textuel, gain | Un clinicien reconnaît T12, L9 et l’axiale sans légende |
| L2. Missions S1 à S5 | Carte de couverture, étiquetage, cinétique sur DPV et DR | Objectifs O2 à O7 mesurables |
| L3. Cas C1 à C7, P1 à P3 | Membranes, hémorragie, astéroïde, artéfacts simples | Revue de l’expert sur captures du simulateur |
| L4. Cas C8 à C13, P4 | Masse, corps étranger, signe du T, papille, staphylome | Idem |
| L5. Bilan, items écrits, anglais, iOS | S7, E1 à E12, traduction, test dans l’app | `tests/run.py` et `tools/validate.js` verts |

Aucune date n’est proposée ici : l’ordre compte, pas le calendrier.

## 11. Tests à prévoir

1. Géométrie : sonde à 6 h au limbe, marqueur nasal, œil droit → la classification rend « T12 P », le côté 3 h est en haut de l’image. Idem pour les 8 coupes de base et pour l’œil gauche (nasal et temporal inversés).
2. Longitudinale : l’ombre du nerf optique est dans le tiers bas de l’image pour L12, L3, L6, L9.
3. Axiale horizontale, marqueur nasal : la papille est au-dessus de la macula.
4. Gain : pour le cas C1, le nombre de pixels au-dessus du seuil sur la DPV tombe à zéro avant celui de la paroi quand le gain descend ; pour C2, la membrane reste visible au gain « bas ».
5. Cinétique : énergie de mouvement DPV > DR > DC = 0, une seconde après l’arrêt.
6. Cohérence JavaScript / GLSL de la fonction de champ.
7. Budgets de texte par écran (`STYLE-PEDAGO.md`), absence d’animation non déclenchée.
8. Repli sans WebGL ; hors ligne ; `?lang=en`.

## 12. Risques

| Risque | Parade |
|---|---|
| Convention fausse enseignée avec aplomb | Lot L0 bloquant ; chaque convention porte ses sources dans le code (`sources: ['V1', 'W5']`) |
| Image trop schématique, rejetée par les cliniciens | Référence visuelle interne, revue de l’expert sur captures à L1 |
| Image trop réaliste, prise pour une vraie | Mention « Simulation pédagogique » incrustée dans le canevas, pas seulement en légende |
| Commandes trop difficiles sur téléphone | Positions guidées dans les missions ; deux curseurs en repli du glisser 3D |
| Poids et batterie | Chargement à la demande, rendu à la demande |
| Dérive de périmètre (orbite, Doppler, biométrie) | Hors objectifs, écrit au § 2 |
