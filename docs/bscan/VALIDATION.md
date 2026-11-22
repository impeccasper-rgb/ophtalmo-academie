# Échographie B — questions pour l’échographiste expert

But : faire confirmer par un échographiste (idéalement formé à l’échographie standardisée) ce que le simulateur enseignera. Les questions **bloquantes** (marquées **[B]**) doivent être tranchées avant de coder le lot L1 de `SPEC-SIMULATEUR.md`. Chaque question renvoie au désaccord de `CONSENSUS.md` et dit ce qui change dans le simulateur selon la réponse.

Format de réponse souhaité : « d’accord », « pas d’accord, parce que… », ou « dépend de… ». Une ligne suffit.

## 1. Conventions d’orientation

| # | Question | Réf. | Ce qui en dépend |
|---|---|---|---|
| 1.1 **[B]** | En transverse, marqueur nasal pour 12 h et 6 h, marqueur supérieur pour les coupes nasale et temporale : est-ce la convention que tu utilises et enseignes ? | A2 | Haut de l’écran de toutes les transverses |
| 1.2 **[B]** | En longitudinale, marqueur vers la cornée, nerf optique en bas de l’écran : d’accord ? | A2 | Toutes les longitudinales, LMAC |
| 1.3 **[B]** | Écran : sonde à gauche, profondeur vers la droite, côté du marqueur en haut. Est-ce bien l’affichage des appareils utilisés au Québec ? | SPEC § 5.3 | Tout le rendu |
| 1.4 | T12 de l’œil droit, marqueur nasal : 3 h en haut, 12 h au centre, 9 h en bas. Exact ? Et pour l’œil gauche, 9 h en haut ? | A2, test 1 | Tests automatiques de géométrie |
| 1.5 | Axiale horizontale, marqueur nasal : la papille est au-dessus de la macula. Centres-tu la papille ou la macula ? | B11 | Cadrage par défaut |
| 1.6 | Les étiquettes T12, L9, HAX, LMAC et les suffixes P, PE, EP, E, EA, O, CB sont-ils ceux en usage ici ? Lesquels exiger d’un R1 ? | Grille § 2 | Mission d’étiquetage |
| 1.7 | Pour une L9 de l’œil droit, la sonde est bien en nasal (3 h), marqueur vers 9 h ? (Le schéma actuel d’Ocelle `m-bscan-2` indique « sonde côté temporal ».) | C1 | Correction du média existant |

## 2. Séquence d’examen

| # | Question | Réf. | Ce qui en dépend |
|---|---|---|---|
| 2.1 **[B]** | Quelle séquence de dépistage enseigner à un R1 de garde : 4 transverses + LMAC ? 4 transverses + 4 longitudinales ? 6 positions ? Avec ou sans axiale ? | B1 | Mission 3, carte de couverture, bilan |
| 2.2 | Existe-t-il un protocole « en 8 positions » que tu reconnais sous ce nom ? Aucune de nos 35 sources ne le nomme ainsi. | B1 | Vocabulaire |
| 2.3 | L’axiale : en premier (repérage) ou en dernier (artéfact du cristallin) ? | B2 | Ordre des missions |
| 2.4 | « Toujours commencer par le nerf optique » : règle absolue pour toi ? | A3 | Critère du bilan |
| 2.5 | Couverture : avec 4 transverses bien balayées du limbe au fornix, quelle part du fond estimes-tu réellement vue ? Le seuil de 80 % est-il raisonnable ? | SPEC § 8.1 | Seuil de réussite |

## 3. Patient, couplage, sécurité

| # | Question | Réf. | Ce qui en dépend |
|---|---|---|---|
| 3.1 **[B]** | Œil ouvert sous anesthésie topique ou paupière fermée : que fait-on dans ta clinique, et que doit faire un R1 seul de garde ? | B3 | Mode par défaut, § 4.3 |
| 3.2 | Paupière fermée : de combien faut-il monter le gain, à peu près ? | B3 | Atténuation simulée |
| 3.3 | Agent de couplage sur l’œil ouvert : méthylcellulose seulement ? | A9 | Texte de la fiche |
| 3.4 **[B]** | Globe ouvert suspecté : confirmes-tu « l’externe et le R1 ne font pas l’échographie » ? Qui la fait, et quand ? | B6 | Objectif O1, cas C10 |
| 3.5 | Corps étranger intraoculaire : dans quel contexte réel un apprenant verrait-il cette échographie ? Le scénario du cas C10 (plaie déjà fermée, examen avec l’ophtalmologiste) est-il crédible ? | SPEC § 7 | Garder, réécrire ou retirer C10 |
| 3.6 | Position : couché ou incliné par défaut ; assis pour gaz, huile de silicone ou liquide mobile. D’accord ? | Grille § 8 | Texte, cas P4 |

## 4. Gain

| # | Question | Réf. | Ce qui en dépend |
|---|---|---|---|
| 4.1 **[B]** | Sur ton appareil, quelles valeurs correspondent à « gain élevé de dépistage », « gain moyen » et « gain bas pour classer une membrane » ? | B4 | Graduation du curseur |
| 4.2 **[B]** | Niveaux relatifs proposés (sclère = 0 dB) : rétine 0 ; choroïde −2 ; astéroïdes −3 à −8 ; hyaloïde tapissée de sang −10 à −15 ; hyaloïde simple −20 à −28 ; sang frais −28 à −36. Ordre correct ? Écarts plausibles ? | SPEC § 6.3 | Tout le comportement du gain |
| 4.3 | « La rétine persiste à gain bas, la hyaloïde disparaît » : dans quelle proportion de cas ce test te trompe-t-il ? | B5 | Nuance dans la révélation des cas C2 et C4 |
| 4.4 | Le gain agit-il sur l’image seulement, ou enseignes-tu aussi la compensation en profondeur ? | Grille § 4 | TGC hors périmètre ou non |

## 5. Cinétique

| # | Question | Réf. | Ce qui en dépend |
|---|---|---|---|
| 5.1 **[B]** | Quel geste demandes-tu au patient : regarder d’un côté puis revenir, ou une saccade aller-retour ? Dans quel plan par rapport à la coupe ? | A6 | Boutons de la mission 5 |
| 5.2 **[B]** | Durées proposées après l’arrêt du regard : hyaloïde 2 à 3 s ; rétine récente moins de 1 s ; entonnoir ancien presque nul ; choroïde nul ; sang 2 à 3 s. Réaliste ? | SPEC § 6.4 | Paramètres des oscillateurs |
| 5.3 | Un décollement de rétine récent et bulleux peut être très mobile. Faut-il un cas « rétine mobile » pour éviter d’enseigner « mobile = vitré » ? | B5 | Cas supplémentaire |
| 5.4 | Hyalose astéroïde : comment bougent les corps astéroïdes après une saccade, par rapport à du sang ? | SPEC § 6.4 | Animation du cas C7 |
| 5.5 | Vascularisation spontanée d’une masse au mode B : utile à montrer à un R1, ou hors niveau ? | A7 | Option du cas C9 |

## 6. Membranes

| # | Question | Réf. | Ce qui en dépend |
|---|---|---|---|
| 6.1 **[B]** | Les « trois questions » (attachée à la papille ? persiste à gain bas ? raide ou flottante ?) : bon résumé pour un R1 ? Dans quel ordre ? | B5 | Structure des cas C1 à C4 |
| 6.2 | Hyaloïde encore attachée à la papille : attache « excentrique » ou « en tige unique », contre « deux feuillets séparés » pour la rétine. Signe fiable, enseignable ? | B5 | Révélation du cas C4 |
| 6.3 | Anneau de Weiss vu à l’échographie (double anneau) : assez fréquent pour être montré ? | Grille § 7 | Détail du cas C1 |
| 6.4 | Décollement choroïdien : « s’arrête aux veines vortiqueuses, jamais à la papille », dômes immobiles, double pic au A-scan. D’accord ? Peut-il dépasser l’ora en avant ? | A8 | Géométrie des dômes |
| 6.5 | Décollement de rétine total : forme en V ou en entonnoir, ouverte ou fermée. Quelles formes un R1 doit-il reconnaître ? | Grille § 7 | Variantes du cas C2 |
| 6.6 | Macula à plat ou soulevée : est-ce une question qu’on pose à l’échographie de garde, et sur quelle coupe ? | A4 | Usage de LMAC dans le cas C2 |

## 7. Autres tableaux

| # | Question | Réf. | Ce qui en dépend |
|---|---|---|---|
| 7.1 | Hémorragie du vitré : points fins mobiles, plus denses en bas, membranes si ancienne. Quel est le piège numéro un pour un débutant ? | A8 | Cas C5, C6 |
| 7.2 | Déchirure rétinienne : est-il réaliste de demander à un R1 de la trouver ? Sur quelle coupe et à quel gain la cherches-tu ? | Grille § 7 | Garder le cas C6 au niveau 3 ou le retirer |
| 7.3 | Hyalose astéroïde : la « zone vide avant la paroi » est-elle constante ? | A8 | Signe décisif du cas C7 |
| 7.4 | Endophtalmie : « opacités et membranes + choroïde épaissie » ; rien ne la distingue d’une hémorragie sans le contexte. D’accord ? | A8 | Révélation du cas C8 |
| 7.5 **[B]** | Mélanome : quels signes retenir pour un R1 parmi forme en champignon, réflectivité interne basse, creux acoustique, excavation choroïdienne ? Le creux acoustique mérite-t-il d’être montré ? | B8 | Cas C9 |
| 7.6 | Peut-on honnêtement montrer la « réflectivité interne basse » en mode B, ou faut-il dire que seul le A-scan standardisé la grade ? | B7 | Mention fixe du vecteur A |
| 7.7 | Corps étranger : ombre et réverbérations selon le matériau (métal, verre, bois). Que montrer ? | Grille § 7 | Variantes du cas C10 |
| 7.8 | Signe du T : sclérite postérieure seulement, ou toute inflammation de la paroi ? Épaisseur de paroi à partir de laquelle tu parles d’épaississement ? | B9 | Cas C11 |
| 7.9 **[B]** | Test des 30° : le garder dans un outil pour R1 alors qu’il se fait au A-scan ? Quel seuil donnes-tu (10, 13,5 ou 20 %) ? Où mesures-tu la gaine ? | B10 | Garder, simplifier ou retirer le cas C12 |
| 7.10 | Drusen de la papille : « point très brillant avec ombre, qui persiste à gain bas ; invisible si non calcifiée ». D’accord ? | A8 | Cas C12 |
| 7.11 | Staphylome postérieur : sur quelle coupe le montres-tu le mieux ? | A8 | Cas C13 |
| 7.12 | Manque-t-il un tableau indispensable pour un R1 (cristallin luxé, rétinoblastome, rétinoschisis, hématome rétrobulbaire) ? En faut-il retirer un ? | SPEC § 7 | Liste des cas |

## 8. Artéfacts et pièges

| # | Question | Réf. | Ce qui en dépend |
|---|---|---|---|
| 8.1 | Les quatre artéfacts retenus (air, réverbération d’implant, gain inadapté, huile de silicone) sont-ils les bons pour un R1 ? | A10 | Cas P1 à P4 |
| 8.2 | Incidence oblique : une membrane pâlit quand le faisceau l’aborde de biais. Faut-il le simuler (c’est prévu) et l’enseigner explicitement ? | SPEC § 6.1 | Terme d’incidence du rendu |
| 8.3 | Quelle est l’erreur la plus fréquente des résidents que tu vois ? (Dans nos sources : sonde collée sur la lésion, nerf optique absent de la coupe, image non étiquetée.) | A10 | Ordre des pièges dans le bilan |

## 9. Réalisme du simulateur

À faire sur captures du prototype, lot L1 puis L3 et L4.

| # | Question |
|---|---|
| 9.1 **[B]** | L’œil normal simulé (T12, L9, axiale) te paraît-il crédible au premier coup d’œil ? Qu’est-ce qui « sonne faux » ? |
| 9.2 | Dimensions du modèle (globe 24 mm, nerf 3 mm, papille à 15° en nasal, ora à 7 mm du limbe, insertions des droits) : acceptables pour l’enseignement ? |
| 9.3 | Texture : grain, brillance de la graisse orbitaire, largeur de l’ombre du nerf optique, écho initial. Que corriger ? |
| 9.4 | Pour chaque cas, le signe décisif est-il bien celui que tu montrerais à un résident ? |
| 9.5 | L’image risque-t-elle d’être prise pour une vraie ? La mention « Simulation pédagogique » incrustée suffit-elle ? |
| 9.6 | Les délais de référence proposés à la révélation de chaque cas sont-ils justes pour le Québec ? |

## 10. Sources

| # | Question |
|---|---|
| 10.1 | Les traités de Byrne et Green et de Harrie et Kendall n’ont pas été lus (pas d’accès libre). Peux-tu confirmer sur pièce les conventions des sections 1 et 2 ? |
| 10.2 | Y a-t-il une référence québécoise ou canadienne (cours de résidence, guide de la SCO) à ajouter au corpus ? |
| 10.3 | Les cours de Yale Fisher (ASRS) sont repérés mais non visionnés. Valent-ils d’être ajoutés ? |
