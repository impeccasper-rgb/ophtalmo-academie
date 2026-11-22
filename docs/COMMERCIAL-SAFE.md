# Build « commercial-safe » — ce qui disparaîtrait sans les images NC

Généré par `python3 tools/build_web.py --commercial-safe-report` le 2026-11-22. **Rien n’est retiré du site en ligne** : ce rapport sert seulement à chiffrer un éventuel passage payant (politique : site gratuit avec le plus d’images possible, EyeRounds CC BY-NC-ND compris ; retrait des images NC seulement si le site devient payant).

## Classes de licence

| Classe | Définition | Images au catalogue publié | Images réellement utilisées |
|---|---|---|---|
| `nc` | EyeRounds CC BY-NC-ND 3.0, ou toute licence NC | 345 | 282 |
| `open` | CC0, domaine public, CC BY, CC BY-SA (imgsrc3) | 45 | 35 |
| `own` | Schéma SVG original (figures des fiches, mécanismes dessinés, arbres, médias SVG des investigations et des cas) | — | 13 médias SVG + les schémas, mécanismes et arbres des 27 fiches |

Où est la classe : champ `lc` de chaque entrée de `OPH.catalog` (calculé par `licence_class()` dans `tools/build_web.py` : `imgsrc`/`imgsrc2` = EyeRounds → `nc` ; `imgsrc3` → `open` si la licence est CC0/PD/CC BY/CC BY-SA sans NC, sinon `nc`). Les médias `kind: 'svg'` et les figures dessinées sont `own`.

## Retirer les images NC à peu de frais

`python3 tools/build_web.py --commercial-safe` construit dans `site-commercial-safe/` (ignoré par git, **jamais déployé**) en ajoutant toutes les images `nc` à la liste exclue du filtre de droits existant (`rights-filter.js`) : les photos disparaissent des carrousels, et les QCM, cas et items qui en dépendent sont retirés automatiquement.

## Ce qui perdrait au moins une image (190 éléments, dont 163 sans remplaçant)

« Sans remplaçant » = il ne resterait ni image `open` ni schéma `own` : l’élément disparaît (QCM, cas, item) ou l’écran n’a plus d’image.

### Fiches — 27 touché(s), 0 sans remplaçant

| Élément | Titre | Images `nc` perdues | Reste `open` | Schéma `own` | Remplaçant ? |
|---|---|---|---|---|---|
| `c-secheresse` | Sécheresse oculaire et dysfonction meibomienne | OPH-029, OPH-022, OPH-020, OPH-023, OPH-024, OPH-025, OPH-018, OPH-019, OPH-016 | 0 | oui | oui |
| `c-bacterienne` | Kératite bactérienne | OPH-070, OPH-072, OPH-071, OPH-333, OPH-334 | 0 | oui | oui |
| `c-atypiques` | Kératites amibienne et fongique | OPH-067, OPH-065, OPH-066, OPH-069 | 0 | oui | oui |
| `c-herpes` | Kératite herpétique (HSV) et zona ophtalmique | OPH-059, OPH-058, OPH-060, OPH-057, OPH-061, OPH-064, OPH-343, OPH-369, OPH-001, OPH-063 | 0 | oui | oui |
| `c-keratocone` | Kératocône | OPH-034, OPH-035, OPH-039, OPH-041, OPH-043, OPH-044, OPH-045, OPH-371 | 0 | oui | oui |
| `c-fuchs` | Dystrophie endothéliale de Fuchs et œdème cornéen | OPH-049, OPH-051, OPH-050, OPH-052, OPH-053, OPH-322, OPH-354 | 0 | oui | oui |
| `c-erosion` | Érosion récidivante, abrasion et dystrophie de la membrane basale | OPH-030, OPH-031, OPH-055, OPH-054, OPH-032, OPH-033 | 0 | oui | oui |
| `c-pterygion` | Ptérygion et lésions de la surface (pinguécula, OSSN) | OPH-073, OPH-074, OPH-353, OPH-356 | 0 | oui | oui |
| `c-greffe` | Greffe de cornée : rejet et complications (PK, DSAEK, DMEK) | OPH-104, OPH-105, OPH-107, OPH-108, OPH-096, OPH-097, OPH-338, OPH-335, OPH-348, OPH-370 | 0 | oui | oui |
| `c-brulure` | Brûlure chimique | OPH-086, OPH-087, OPH-112, OPH-113 | 0 | oui | oui |
| `g-gpao` | Glaucome primaire à angle ouvert | OPH-133, OPH-134, OPH-131, OPH-132, OPH-136, OPH-135 | 0 | oui | oui |
| `g-hto` | Hypertension oculaire et suspect de glaucome | OPH-139 | 0 | oui | oui |
| `g-gpn` | Glaucome à pression normale | OPH-137, OPH-138, OPH-294, OPH-296, OPH-298 | 0 | oui | oui |
| `g-fermeture` | Fermeture primaire de l’angle (PACS, PAC, PACG) | OPH-142, OPH-140, OPH-147, OPH-146 | 0 | oui | oui |
| `g-crise` | Crise aiguë de fermeture de l’angle | OPH-140, OPH-141, OPH-143, OPH-145, OPH-144 | 0 | oui | oui |
| `g-pxf` | Glaucome pseudo-exfoliatif | OPH-153, OPH-155, OPH-154, OPH-156, OPH-151, OPH-152, OPH-321, OPH-324 | 0 | oui | oui |
| `g-pigmentaire` | Dispersion pigmentaire et glaucome pigmentaire | OPH-157, OPH-158, OPH-161, OPH-160, OPH-159 | 0 | oui | oui |
| `g-neovasculaire` | Glaucome néovasculaire | OPH-162, OPH-163, OPH-164, OPH-165, OPH-166, OPH-319, OPH-320 | 0 | oui | oui |
| `g-secondaires` | Glaucomes cortisonique et uvéitique | OPH-150, OPH-148, OPH-149, OPH-177, OPH-349, OPH-351 | 0 | oui | oui |
| `g-postop` | Patient opéré : trabéculectomie, tubes, MIGS | OPH-181, OPH-182, OPH-315, OPH-340 | 0 | oui | oui |
| `c-dystrophies` | Dystrophies cornéennes | OPH-368, OPH-373, OPH-374, OPH-379, OPH-358, OPH-342, OPH-001, OPH-344 | 0 | oui | oui |
| `c-depots` | Opacités, dépôts et dégénérescences de la cornée | OPH-327, OPH-362, OPH-352, OPH-370, OPH-365, OPH-372, OPH-001, OPH-326 | 0 | oui | oui |
| `c-surface` | Conjonctivites et inflammations de la surface oculaire | OPH-341, OPH-383, OPH-361, OPH-359, OPH-330, OPH-356 | 0 | oui | oui |
| `c-peripherie` | Kératites ulcératives périphériques, Terrien et sclérites | OPH-377, OPH-382, OPH-380, OPH-360, OPH-337, OPH-001 | 0 | oui | oui |
| `g-papille` | La papille qui trompe : excavation glaucomateuse et ses imitateurs | OPH-228, OPH-309, OPH-225, OPH-230, OPH-232 | 0 | oui | oui |
| `g-cristallin` | Glaucomes liés au cristallin, à l’implant et au trauma | OPH-238, OPH-321, OPH-301, OPH-303, OPH-346, OPH-314 | 0 | oui | oui |
| `g-dev` | Glaucomes de l’enfant, anomalies du développement et syndrome ICE | OPH-325, OPH-317, OPH-389, OPH-387, OPH-318, OPH-390 | 0 | oui | oui |

Les fiches gardent leurs schémas, leur mécanisme dessiné et leur arbre ; l’écran **Voir** retombe sur le schéma comparatif, mais l’exercice « touche le signe » (photos + zones `voirHotspots`) disparaît. Pour le garder : une photo `open` ou un schéma avec zones par fiche.

### Pages du module A et séries de photos — 32 touché(s), 32 sans remplaçant

| Élément | Titre | Images `nc` perdues | Reste `open` | Schéma `own` | Remplaçant ? |
|---|---|---|---|---|---|
| `b-bases` | b-bases | OPH-103, OPH-101, OPH-093, OPH-095, OPH-099, OPH-092, OPH-007 | 0 | non | **non** |
| `c-bases` | c-bases | OPH-134, OPH-146, OPH-183, OPH-184 | 0 | non | **non** |
| `bonus-B` | bonus-B | OPH-082, OPH-080, OPH-081, OPH-083, OPH-075, OPH-077, OPH-109, OPH-089 | 0 | non | **non** |
| `bonus-C` | bonus-C | OPH-167, OPH-170, OPH-171, OPH-172, OPH-178, OPH-179, OPH-176, OPH-175, OPH-177, OPH-325 | 0 | non | **non** |
| `a-anatomie` | a-anatomie | OPH-001, OPH-003 | 0 | non | **non** |
| `a-lampe` | a-lampe | OPH-001, OPH-063, OPH-033, OPH-076, OPH-075, OPH-058, OPH-056, OPH-157 | 0 | non | **non** |
| `a-fluoresceine` | a-fluoresceine | OPH-031, OPH-028, OPH-020, OPH-022, OPH-004, OPH-085, OPH-083, OPH-026 | 0 | non | **non** |
| `a-tonometrie` | a-tonometrie | OPH-004 | 0 | non | **non** |
| `a-gonioscopie` | a-gonioscopie | OPH-181, OPH-156, OPH-172, OPH-180, OPH-179, OPH-174, OPH-176, OPH-175, OPH-312 | 0 | non | **non** |
| `a-papille` | a-papille | OPH-136, OPH-139, OPH-008, OPH-009 | 0 | non | **non** |
| `a-oct` | a-oct | OPH-134, OPH-132, OPH-131, OPH-011 | 0 | non | **non** |
| `a-topographie` | a-topographie | OPH-038, OPH-037, OPH-036 | 0 | non | **non** |
| `a-champs-visuels` | a-champs-visuels | OPH-009, OPH-008, OPH-283 | 0 | non | **non** |
| `a-speculaire` | a-speculaire | OPH-052 | 0 | non | **non** |
| `a-pachymetrie` | a-pachymetrie | OPH-045, OPH-043, OPH-044 | 0 | non | **non** |
| `a5-cataracte-nucleaire` | a5-cataracte-nucleaire | OPH-234, OPH-233, OPH-235, OPH-236 | 0 | non | **non** |
| `a5-cataracte-corticale-scp` | a5-cataracte-corticale-scp | OPH-241, OPH-244, OPH-246, OPH-247 | 0 | non | **non** |
| `a5-cataracte-mature` | a5-cataracte-mature | OPH-210, OPH-237, OPH-243, OPH-240 | 0 | non | **non** |
| `a5-opacification-capsulaire` | a5-opacification-capsulaire | OPH-248 | 0 | non | **non** |
| `a5-bscan` | a5-bscan | OPH-197 | 0 | non | **non** |
| `a5-decollement-retine` | a5-decollement-retine | OPH-287, OPH-192, OPH-263 | 0 | non | **non** |
| `a5-decollement-choroidien` | a5-decollement-choroidien | OPH-291, OPH-196, OPH-290, OPH-195 | 0 | non | **non** |
| `a5-dmla` | a5-dmla | OPH-264, OPH-265, OPH-266 | 0 | non | **non** |
| `a5-retinopathie-diabetique` | a5-retinopathie-diabetique | OPH-258, OPH-259, OPH-260, OPH-261 | 0 | non | **non** |
| `a5-occlusions-retiniennes` | a5-occlusions-retiniennes | OPH-250, OPH-251, OPH-252, OPH-254, OPH-255 | 0 | non | **non** |
| `a5-retinopathie-hypertensive` | a5-retinopathie-hypertensive | OPH-256, OPH-257 | 0 | non | **non** |
| `a5-macula-chirurgicale` | a5-macula-chirurgicale | OPH-267, OPH-268, OPH-269, OPH-270, OPH-272 | 0 | non | **non** |
| `a5-peripherie-vitre` | a5-peripherie-vitre | OPH-273, OPH-275, OPH-276 | 0 | non | **non** |
| `a5-inflammation-infection` | a5-inflammation-infection | OPH-277, OPH-278, OPH-279, OPH-199, OPH-376 | 0 | non | **non** |
| `a5-papille-oedeme` | a5-papille-oedeme | OPH-219, OPH-220, OPH-221, OPH-223, OPH-224 | 0 | non | **non** |
| `a5-pupilles-neuro` | a5-pupilles-neuro | OPH-281, OPH-282, OPH-283 | 0 | non | **non** |
| `a5-tumeurs-toxicite-trauma` | a5-tumeurs-toxicite-trauma | OPH-285, OPH-286, OPH-284, OPH-280 | 0 | non | **non** |

« Sans remplaçant » ici = plus aucune photo dans le carrousel ; le texte et les éventuels schémas de la page restent.

### Capsules — 2 touché(s), 2 sans remplaçant

| Élément | Titre | Images `nc` perdues | Reste `open` | Schéma `own` | Remplaçant ? |
|---|---|---|---|---|---|
| `b-bases` | Les bases de la clinique de cornée | OPH-001, OPH-072, OPH-101 | 0 | non | **non** |
| `c-bases` | Les bases du glaucome | OPH-146, OPH-181 | 0 | non | **non** |

### QCM avec photo — 63 touché(s), 63 sans remplaçant

| Élément | Titre | Images `nc` perdues | Reste `open` | Schéma `own` | Remplaçant ? |
|---|---|---|---|---|---|
| `C-051` | Femme de 74 ans, d’origine scandinave, vue pour une baisse de vision progressive à l’OS. A | OPH-155 | 0 | non | **non** |
| `C-057` | Homme de 66 ans, myope de −5,00 D, dirigé pour « glaucome à pression normale » : excavatio | OPH-158 | 0 | non | **non** |
| `C-058` | Homme de 59 ans, diabétique de type 2 mal contrôlé, jamais traité pour sa rétinopathie ; A | OPH-162 | 0 | non | **non** |
| `C-062` | Homme de 45 ans, uvéite antérieure chronique récidivante (inflammation de l’iris et du cor | OPH-148 | 0 | non | **non** |
| `B-101` | Sensation de sable et vision fluctuante en fin de journée. Après instillation de fluorescé | OPH-022 | 0 | non | **non** |
| `B-102` | Douleur intense, photophobie et baisse de vision depuis 36 heures. Voici l’aspect de l’œil | OPH-070 | 0 | non | **non** |
| `B-103` | Porteur de lentilles cornéennes souples; douleur intense qui persiste malgré une semaine d | OPH-067 | 0 | non | **non** |
| `B-104` | Patient sous corticostéroïdes topiques au long cours après une greffe de cornée, œil rouge | OPH-059 | 0 | non | **non** |
| `B-105` | Patient connu pour un kératocône avancé, photographié pendant qu’il regarde vers le bas. Q | OPH-035 | 0 | non | **non** |
| `B-108` | Vision brouillée le matin qui s’améliore en cours de journée. Lampe à fente, fente large.  | OPH-049 | 0 | non | **non** |
| `B-109` | Patient porteur d’une kératoplastie transfixiante (greffe de toute l’épaisseur de la corné | OPH-104 | 0 | non | **non** |
| `C-101` | Femme de 71 ans, sans suivi ophtalmologique, rétinophotographies des deux yeux prises lors | OPH-131 | 0 | non | **non** |
| `C-102` | Rétinophotographie de l’œil gauche d’un patient suivi pour un glaucome à angle ouvert. Que | OPH-133 | 0 | non | **non** |
| `C-103` | Patient suivi pour un glaucome à pression normale, PIO jugée dans la cible depuis un an. V | OPH-138 | 0 | non | **non** |
| `C-104` | Patient hypermétrope réveillé par une douleur intense de l’œil droit, avec céphalée, nausé | OPH-140 | 0 | non | **non** |
| `C-105` | Pupille dilatée, lampe à fente, avant une chirurgie de cataracte. Cet aspect de la capsule | OPH-153 | 0 | non | **non** |
| `C-106` | Homme de 57 ans, diabète de type 2 mal équilibré, rétinopathie diabétique proliférante, PI | OPH-162 | 0 | non | **non** |
| `C-107` | Une semaine après la pose d’un tube de drainage d’Ahmed, la chambre antérieure est plate e | OPH-182 | 0 | non | **non** |
| `C-108` | Homme de 34 ans adressé pour un « amincissement important du rebord temporal ». L’OCT RNFL | OPH-139 | 0 | non | **non** |
| `C-109` | Rétroillumination (transillumination) de l’iris à la lampe à fente. Quel mécanisme expliqu | OPH-157 | 0 | non | **non** |
| `A-201` | Un patient greffé de cornée utilise de l’acétate de prednisolone depuis plusieurs années.  | OPH-244 | 0 | non | **non** |
| `A-204` | Un patient très hypermétrope (environ +12 D) est envoyé en glaucome pour un angle étroit.  | OPH-197 | 0 | non | **non** |
| `A-205` | Quatre jours après une trabéculectomie, la PIO est à 3 mmHg, la chambre antérieure est peu | OPH-290 | 0 | non | **non** |
| `A-207` | Un patient diabétique est adressé pour une PIO à 26 mmHg. Le fond d’œil montre ceci. Quell | OPH-259 | 0 | non | **non** |
| `A-209` | Trois ans après une chirurgie de cataracte, un patient avec glaucome avancé (champ résidue | OPH-248 | 0 | non | **non** |
| `A-211` | Une femme de 76 ans suivie pour un glaucome primaire à angle ouvert (GPAO) a perdu brutale | OPH-249 | 0 | non | **non** |
| `A-213` | Un adulte a une petite pupille et une légère ptose du même côté depuis plusieurs mois, san | OPH-282 | 0 | non | **non** |
| `A-214` | Une femme de 27 ans a des céphalées depuis un mois et des épisodes où sa vue « s’éteint »  | OPH-219 | 0 | non | **non** |
| `A-215` | Au fond d’œil dilaté d’un suivi de glaucome, tu découvres cette lésion pigmentée de la cho | OPH-286 | 0 | non | **non** |
| `A-216` | Un patient suivi pour une uvéite antérieure récidivante a la pupille ci-dessous. Si ces ad | OPH-277 | 0 | non | **non** |
| `A-218` | Un homme de 69 ans suivi pour un GPAO débutant dit se cogner du côté gauche depuis 2 mois. | OPH-283 | 0 | non | **non** |
| `B-201` | Vu pour un renouvellement de lunettes : vision 6/6 aux deux yeux, jamais de douleur. Un pa | OPH-345 | 0 | non | **non** |
| `B-202` | Baisse lente de la vision aux deux yeux chez un adulte ; un parent a eu une greffe de corn | OPH-373 | 0 | non | **non** |
| `B-203` | Vision 6/24 aux deux yeux et photophobie depuis l’adolescence. Les parents, cousins germai | OPH-374 | 0 | non | **non** |
| `B-205` | Irritation et vision trouble des deux yeux depuis des mois. Jamais d’uvéite ni de chirurgi | OPH-299 | 0 | non | **non** |
| `B-206` | Vu pour une cataracte débutante. Vision 6/9, aucun symptôme cornéen. Voici sa cornée, écla | OPH-363 | 0 | non | **non** |
| `B-207` | Traité depuis 6 jours pour un ulcère bactérien avec des gouttes de ciprofloxacine aux heur | OPH-364 | 0 | non | **non** |
| `B-211` | Démangeaisons intenses qui reviennent chaque printemps, mucus filant, terrain atopique, au | OPH-355 | 0 | non | **non** |
| `B-213` | Lentilles souples portées depuis des années : démangeaisons, mucus le matin, lentilles qui | OPH-367 | 0 | non | **non** |
| `B-215` | Baisse de vision lente, sans douleur ni rougeur. Photo prise pendant que la personne regar | OPH-381 | 0 | non | **non** |
| `B-217` | Douleur oculaire profonde depuis une semaine, qui réveille la nuit et irradie au front. Vo | OPH-375 | 0 | non | **non** |
| `C-201` | On te dirige un patient pour « C/D 0,8 à un œil, asymétrique ». AV 6/6 aux deux yeux, PIO  | OPH-228 | 0 | non | **non** |
| `C-202` | Un patient voit mal des deux yeux depuis l’enfance, de façon lentement progressive ; un pa | OPH-225 | 0 | non | **non** |
| `C-204` | Un jeune patient, suivi depuis la petite enfance pour baisse de vision et nystagmus, a ce  | OPH-229 | 0 | non | **non** |
| `C-205` | Un patient pseudophaque consulte pour des épisodes répétés de vision brouillée à un œil. O | OPH-301 | 0 | non | **non** |
| `C-208` | Une semaine après une vitrectomie avec injection de gaz, un patient reçoit une anesthésie  | OPH-314 | 0 | non | **non** |
| `C-211` | Une femme de 42 ans consulte pour une vision floue le matin à un seul œil. La PIO est de 3 | OPH-310 | 0 | non | **non** |
| `C-212` | Examen de routine chez un adulte asymptomatique : AV normale, PIO normale, papilles normal | OPH-317 | 0 | non | **non** |
| `C-214` | Photo peropératoire chez un jeune patient atteint de Sturge-Weber (angiome plan facial dan | OPH-391 | 0 | non | **non** |
| `A-302` | Gonioscopie de routine chez un patient asymptomatique, PIO normale. En haut du miroir, obs | OPH-312 | 0 | non | **non** |
| `A-303` | Consultation pour « suspicion de glaucome » après un champ visuel anormal. Voici les champ | OPH-283 | 0 | non | **non** |
| `B-301` | Ulcère cornéen central qui évolue depuis quelques jours. Un collègue regarde l’œil et affi | OPH-333 | 0 | non | **non** |
| `B-302` | Antécédent de kératite herpétique épithéliale traitée il y a plusieurs mois. L’œil est bla | OPH-343 | 0 | non | **non** |
| `B-303` | Trois mois après une DSAEK pour une dystrophie de Fuchs. La banque d’yeux avait signalé un | OPH-331 | 0 | non | **non** |
| `B-304` | Patient connu pour un kératocône, déjà opéré. Voici l’aspect de la cornée en éclairage dif | OPH-371 | 0 | non | **non** |
| `B-305` | Lésion à la jonction de la cornée et de la conjonctive, qui grossit depuis quelques mois;  | OPH-353 | 0 | non | **non** |
| `B-306` | Œil aphaque et vitrectomisé. Un mois après une injection intravitréenne pour un œdème macu | OPH-354 | 0 | non | **non** |
| `C-301` | Glaucome à pression normale : PIO de 12 à 20 mmHg sur une courbe diurne, angles ouverts, m | OPH-298 | 0 | non | **non** |
| `C-302` | Trois mois après une occlusion de l’artère centrale de la rétine, la PIO monte. Voici l’ir | OPH-319 | 0 | non | **non** |
| `C-303` | Glaucome pseudo-exfoliatif connu, consultation pour cataracte. Voici la pupille dilatée en | OPH-321 | 0 | non | **non** |
| `C-304` | Uvéite antérieure avec PIO élevée. Voici l’aspect de la cornée en éclairage diffus. Quelle | OPH-350 | 0 | non | **non** |
| `C-305` | Deux semaines après une chirurgie MIGS interrompue en cours de route. Voici l’œil en photo | OPH-315 | 0 | non | **non** |
| `C-306` | Premier jour après la pose d’un tube de drainage pour un glaucome non contrôlé. Voici l’as | OPH-340 | 0 | non | **non** |

### Cas cliniques — 3 touché(s), 3 sans remplaçant

| Élément | Titre | Images `nc` perdues | Reste `open` | Schéma `own` | Remplaçant ? |
|---|---|---|---|---|---|
| `cas-a2` | Vision qui baisse chez une patiente suivie pour glaucome | OPH-253 | 0 | non | **non** |
| `cas-b5` | Polyarthrite rhumatoïde et œil rouge douloureux | OPH-377 | 0 | non | **non** |
| `cas-c5` | Pseudophaque : brouillards à répétition et PIO en dents de scie | OPH-301, OPH-303 | 0 | non | **non** |

### Cas en images — 35 touché(s), 35 sans remplaçant

| Élément | Titre | Images `nc` perdues | Reste `open` | Schéma `own` | Remplaçant ? |
|---|---|---|---|---|---|
| `ic-c01` | Œil rouge, larmoiement, vision un peu floue. Lésion épithéliale fine et ramifiée au centre | OPH-057 | 0 | non | **non** |
| `ic-c02` | Zona ophtalmique récent, œil gauche. Lésions épithéliales colorées. En quoi diffèrent-elle | OPH-064 | 0 | non | **non** |
| `ic-c03` | Porteur de lentilles de contact. Douleur intense, œil très rouge depuis 24 h. Que faire? | OPH-070 | 0 | non | **non** |
| `ic-c04` | Porteuse de lentilles qui se baigne avec. Douleur très intense, disproportionnée par rappo | OPH-067 | 0 | non | **non** |
| `ic-c05` | Vision floue le matin qui s’améliore en journée. Que montre la fente lumineuse sur l’endot | OPH-049 | 0 | non | **non** |
| `ic-c06` | Jeune patient, myopie et astigmatisme qui augmentent vite. Fines stries parallèles dans le | OPH-040 | 0 | non | **non** |
| `ic-c07` | Kératocône connu. Baisse de vision brutale avec cornée blanche et douloureuse. Que s’est-i | OPH-043 | 0 | non | **non** |
| `ic-c08` | Tissu conjonctival en forme d’aile qui avance sur la cornée. Diagnostic, et quand opérer? | OPH-073 | 0 | non | **non** |
| `ic-c09` | Éclaboussure d’un produit alcalin (soude) il y a 10 minutes. Première chose à faire? | OPH-086 | 0 | non | **non** |
| `ic-c10` | Greffe de cornée. Baisse de vision, œil rouge. Que représente la ligne blanchâtre qui trav | OPH-104 | 0 | non | **non** |
| `ic-c11` | Coup d’ongle dans l’œil, douleur et photophobie. Fluorescéine au bleu cobalt. Que montre l | OPH-030 | 0 | non | **non** |
| `ic-c12` | Deux semaines après une conjonctivite virale, la vision est floue. Que sont ces petites op | OPH-075 | 0 | non | **non** |
| `ic-g01` | Douleur intense à l’œil droit, céphalée, nausées, baisse de vision. Diagnostic et geste ur | OPH-140 | 0 | non | **non** |
| `ic-g02` | Petites taches gris-blanc sous la capsule antérieure du cristallin, iris atrophique par se | OPH-143 | 0 | non | **non** |
| `ic-g03` | Patient âgé, examen à la lampe à fente. Que voyez-vous sur le rebord pupillaire? | OPH-154 | 0 | non | **non** |
| `ic-g04` | Rétro-illumination de l’iris (lumière renvoyée par le fond d’œil). Que montrent les fentes | OPH-157 | 0 | non | **non** |
| `ic-g05` | Pupille dilatée. Fine ligne pigmentée en périphérie du cristallin. Nom et contexte? | OPH-160 | 0 | non | **non** |
| `ic-g06` | Œil droit, après une occlusion de l’artère centrale de la rétine. Que montre la zone encer | OPH-319 | 0 | non | **non** |
| `ic-g07` | Jeune patient aux cornées anormalement grandes des deux côtés. Quelle cause éliminer en pr | OPH-167 | 0 | non | **non** |
| `ic-g08` | Glaucome congénital. Fines lignes à double contour dans la cornée profonde. Comment s’appe | OPH-170 | 0 | non | **non** |
| `ic-g09` | Uvéite chronique avec synéchies postérieures. À la fente, l’iris bombe vers la cornée. Méc | OPH-148 | 0 | non | **non** |
| `ic-g10` | Patient suivi pour glaucome à pression normale (œil droit). Que montre le bord inférotempo | OPH-137 | 0 | non | **non** |
| `ic-x01` | Nappe rouge vif, bien limitée, sous la conjonctive. Aucune douleur, vision normale, pas de | OPH-005 | 0 | non | **non** |
| `ic-x02` | Après un traumatisme contusif. Que voyez-vous en bas de la chambre antérieure, et que faut | OPH-346 | 0 | non | **non** |
| `ic-x03` | Antécédent de trabéculectomie. Œil très rouge et douloureux, vision effondrée. La paupière | OPH-198 | 0 | non | **non** |
| `ic-x04` | Douleur profonde, sourde, qui réveille la nuit. Vaisseaux engorgés et nodule sous le limbe | OPH-375 | 0 | non | **non** |
| `ic-x05` | Œil rouge, larmoiement, sensation de sable. Petites élévations rondes et pâles sur la conj | OPH-341 | 0 | non | **non** |
| `ic-x06` | Éruption vésiculaire et croûteuse d’un seul côté du front et du nez, œil rouge. Diagnostic | OPH-369 | 0 | non | **non** |
| `ic-x07` | Perte de vision brutale et indolore. Rétine blanchâtre, sauf une zone de couleur normale e | OPH-249 | 0 | non | **non** |
| `ic-x08` | Montage du fond d’œil gauche. Hémorragies dans un seul secteur. Diagnostic? | OPH-254 | 0 | non | **non** |
| `ic-x09` | Patient diabétique. Que voit-on sur et autour de la papille? | OPH-259 | 0 | non | **non** |
| `ic-x10` | Plus de 70 ans, céphalée temporale, claudication de la mâchoire, perte de vision brutale.  | OPH-274 | 0 | non | **non** |
| `ic-x11` | Anisocorie. Colonne de gauche : lumière de la pièce; colonne de droite : après quelques se | OPH-282 | 0 | non | **non** |
| `ic-x12` | Anisocorie légère. Photos à la lumière, dans le noir, puis après un collyre de cocaïne. Co | OPH-281 | 0 | non | **non** |
| `ic-x13` | Lésion choroïdienne pigmentée au pôle postérieur, avec des dépôts orange en surface. Condu | OPH-286 | 0 | non | **non** |

### Investigations (items de pratique) — 26 touché(s), 26 sans remplaçant

| Élément | Titre | Images `nc` perdues | Reste `open` | Schéma `own` | Remplaçant ? |
|---|---|---|---|---|---|
| `p-bscan-1` | Patiente âgée, cataracte blanche à l’œil droit. Le fond d’œil est invisible. Quel examen v | OPH-210 | 0 | non | **non** |
| `p-bscan-4` | Fond d’œil (en haut) et échographie B (en bas) du même œil. Quel signe échographique orien | OPH-289 | 0 | non | **non** |
| `p-bscan-5` | Série d’échographies B d’un œil. Les dômes choroïdiens se rejoignent au centre du vitré. C | OPH-194 | 0 | non | **non** |
| `p-bscan-7` | Échographie B d’un œil nanophtalme (très court). Le compas jaune mesure 2,38 mm. Qu’est-ce | OPH-197 | 0 | non | **non** |
| `p-ascan-2` | Cataracte blanche à l’œil droit. La biométrie optique ne donne aucune mesure. Pourquoi, et | OPH-210 | 0 | non | **non** |
| `p-oct-2` | Image infrarouge (à gauche) et coupe OCT verticale (à droite). Que montre la coupe? | OPH-011 | 0 | non | **non** |
| `p-oct-3` | Carte d’épaisseur ETDRS (sous-champ central 531 µm) et coupe OCT horizontale. Quelle anoma | OPH-268 | 0 | non | **non** |
| `p-oct-4` | Patient diabétique. Coupe OCT maculaire oblique. Que sont les petits espaces sombres dans  | OPH-262 | 0 | non | **non** |
| `p-oct-5` | Coupe OCT horizontale passant par la fovéa (panneau A). Que représente le soulèvement en d | OPH-266 | 0 | non | **non** |
| `p-oct-6` | OCT papille et RNFL (Cirrus), deux yeux. Surfaces du disque 4,18 et 3,69 mm² (très grandes | OPH-308 | 0 | non | **non** |
| `p-oct-7` | Rapport OCT papille et RNFL des deux yeux. RNFL moyenne OG : 91 µm (vert). Conclusion? | OPH-134 | 0 | non | **non** |
| `p-oct-8` | OCT du segment antérieur (AS-OCT) après une greffe endothéliale (DMEK). Que montrent les a | OPH-147 | 0 | non | **non** |
| `p-gonio-4` | Gonioscopie OD d’une jeune femme qui consulte pour une pupille déformée (corectopie). Que  | OPH-180 | 0 | non | **non** |
| `p-gonio-5` | Gonioscopie. Que désigne la pointe de flèche (ligne pigmentée ondulée)? | OPH-156 | 0 | non | **non** |
| `p-gonio-6` | Traumatisme contusif (balle de racquetball). Que montre la gonioscopie? | OPH-172 | 0 | non | **non** |
| `p-gonio-7` | Hypotonie (PIO 1–2 mmHg) après une chirurgie de cataracte. Gonioscopie de l’angle nasal :  | OPH-174 | 0 | non | **non** |
| `p-fondoeil-2` | Examen de routine chez un enfant. Reflets brillants le long des arcades et autour de la ma | OPH-003 | 0 | non | **non** |
| `p-fondoeil-3` | Œil gauche d’un jeune patient avec glaucome aphaque. Estimez le C/D vertical. | OPH-307 | 0 | non | **non** |
| `p-fondoeil-4` | Papille en vue rapprochée, glaucome primaire à angle ouvert. Les gros vaisseaux émergent d | OPH-136 | 0 | non | **non** |
| `p-fondoeil-5` | Homme de 61 ans qui consulte pour de nouvelles mouches volantes. Fond d’œil ci-contre. Que | OPH-219 | 0 | non | **non** |
| `p-fondoeil-6` | Baisse de vision brutale et indolore de l’œil droit. Quel signe est décisif? | OPH-250 | 0 | non | **non** |
| `p-fondoeil-7` | Fond d’œil. Quel diagnostic? | OPH-252 | 0 | non | **non** |
| `p-fondoeil-8` | Montage grand champ, œil gauche. Que délimitent les flèches blanches? | OPH-287 | 0 | non | **non** |
| `p-cv-1` | Champ visuel 24-2 de l’OD (moitié droite du rapport). Le test est-il fiable et normal? | OPH-302 | 0 | non | **non** |
| `p-cv-2` | OG du même rapport : MD −16,93 dB (p < 0,5 %), PSD 11,32 dB, VFI 61 %. Quel stade selon Ho | OPH-302 | 0 | non | **non** |
| `p-cv-5` | Champs visuels de Goldmann des deux yeux. Quel défaut, et où est la lésion? | OPH-283 | 0 | non | **non** |

### Écrans fixes — 2 touché(s), 2 sans remplaçant

| Élément | Titre | Images `nc` perdues | Reste `open` | Schéma `own` | Remplaçant ? |
|---|---|---|---|---|---|
| `accueil (couvertures des modules)` | Accueil — couvertures des modules A/B/C | OPH-192, OPH-001, OPH-131 | 0 | non | **non** |
| `cas-vedette` | Cas vedette (lien de campagne) | OPH-250 | 0 | non | **non** |

## Sans remplaçant, en bref

`capsule:b-bases`, `capsule:c-bases`, `case:cas-a2`, `case:cas-b5`, `case:cas-c5`, `image-case:ic-c01`, `image-case:ic-c02`, `image-case:ic-c03`, `image-case:ic-c04`, `image-case:ic-c05`, `image-case:ic-c06`, `image-case:ic-c07`, `image-case:ic-c08`, `image-case:ic-c09`, `image-case:ic-c10`, `image-case:ic-c11`, `image-case:ic-c12`, `image-case:ic-g01`, `image-case:ic-g02`, `image-case:ic-g03`, `image-case:ic-g04`, `image-case:ic-g05`, `image-case:ic-g06`, `image-case:ic-g07`, `image-case:ic-g08`, `image-case:ic-g09`, `image-case:ic-g10`, `image-case:ic-x01`, `image-case:ic-x02`, `image-case:ic-x03`, `image-case:ic-x04`, `image-case:ic-x05`, `image-case:ic-x06`, `image-case:ic-x07`, `image-case:ic-x08`, `image-case:ic-x09`, `image-case:ic-x10`, `image-case:ic-x11`, `image-case:ic-x12`, `image-case:ic-x13`, `inv-practice:p-ascan-2`, `inv-practice:p-bscan-1`, `inv-practice:p-bscan-4`, `inv-practice:p-bscan-5`, `inv-practice:p-bscan-7`, `inv-practice:p-cv-1`, `inv-practice:p-cv-2`, `inv-practice:p-cv-5`, `inv-practice:p-fondoeil-2`, `inv-practice:p-fondoeil-3`, `inv-practice:p-fondoeil-4`, `inv-practice:p-fondoeil-5`, `inv-practice:p-fondoeil-6`, `inv-practice:p-fondoeil-7`, `inv-practice:p-fondoeil-8`, `inv-practice:p-gonio-4`, `inv-practice:p-gonio-5`, `inv-practice:p-gonio-6`, `inv-practice:p-gonio-7`, `inv-practice:p-oct-2`, `inv-practice:p-oct-3`, `inv-practice:p-oct-4`, `inv-practice:p-oct-5`, `inv-practice:p-oct-6`, `inv-practice:p-oct-7`, `inv-practice:p-oct-8`, `photo-set:a-anatomie`, `photo-set:a-champs-visuels`, `photo-set:a-fluoresceine`, `photo-set:a-gonioscopie`, `photo-set:a-lampe`, `photo-set:a-oct`, `photo-set:a-pachymetrie`, `photo-set:a-papille`, `photo-set:a-speculaire`, `photo-set:a-tonometrie`, `photo-set:a-topographie`, `photo-set:a5-bscan`, `photo-set:a5-cataracte-corticale-scp`, `photo-set:a5-cataracte-mature`, `photo-set:a5-cataracte-nucleaire`, `photo-set:a5-decollement-choroidien`, `photo-set:a5-decollement-retine`, `photo-set:a5-dmla`, `photo-set:a5-inflammation-infection`, `photo-set:a5-macula-chirurgicale`, `photo-set:a5-occlusions-retiniennes`, `photo-set:a5-opacification-capsulaire`, `photo-set:a5-papille-oedeme`, `photo-set:a5-peripherie-vitre`, `photo-set:a5-pupilles-neuro`, `photo-set:a5-retinopathie-diabetique`, `photo-set:a5-retinopathie-hypertensive`, `photo-set:a5-tumeurs-toxicite-trauma`, `photo-set:b-bases`, `photo-set:bonus-B`, `photo-set:bonus-C`, `photo-set:c-bases`, `quiz:A-201`, `quiz:A-204`, `quiz:A-205`, `quiz:A-207`, `quiz:A-209`, `quiz:A-211`, `quiz:A-213`, `quiz:A-214`, `quiz:A-215`, `quiz:A-216`, `quiz:A-218`, `quiz:A-302`, `quiz:A-303`, `quiz:B-101`, `quiz:B-102`, `quiz:B-103`, `quiz:B-104`, `quiz:B-105`, `quiz:B-108`, `quiz:B-109`, `quiz:B-201`, `quiz:B-202`, `quiz:B-203`, `quiz:B-205`, `quiz:B-206`, `quiz:B-207`, `quiz:B-211`, `quiz:B-213`, `quiz:B-215`, `quiz:B-217`, `quiz:B-301`, `quiz:B-302`, `quiz:B-303`, `quiz:B-304`, `quiz:B-305`, `quiz:B-306`, `quiz:C-051`, `quiz:C-057`, `quiz:C-058`, `quiz:C-062`, `quiz:C-101`, `quiz:C-102`, `quiz:C-103`, `quiz:C-104`, `quiz:C-105`, `quiz:C-106`, `quiz:C-107`, `quiz:C-108`, `quiz:C-109`, `quiz:C-201`, `quiz:C-202`, `quiz:C-204`, `quiz:C-205`, `quiz:C-208`, `quiz:C-211`, `quiz:C-212`, `quiz:C-214`, `quiz:C-301`, `quiz:C-302`, `quiz:C-303`, `quiz:C-304`, `quiz:C-305`, `quiz:C-306`, `screen:accueil (couvertures des modules)`, `screen:cas-vedette`
