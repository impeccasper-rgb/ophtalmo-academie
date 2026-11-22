var G = (typeof window !== 'undefined') ? window : globalThis;
G.OPH = G.OPH || {};

// QCM d’interprétation de photos authentiques (EyeRounds / University of Iowa, CC BY-NC-ND 3.0).
// Images choisies sans texte ni filigrane qui révèle la réponse; la légende source n’est pas affichée.
G.OPH.quiz = (G.OPH.quiz || []).concat([

  { id: "B-101", module: "B", topic: "c-secheresse", type: "image", level: 1, trap: false,
    stem: "Sensation de sable et vision fluctuante en fin de journée. Après instillation de fluorescéine, on demande au patient de garder les yeux ouverts sans cligner (lumière bleu cobalt). Que représentent les lignes sombres apparues sur la cornée ?",
    figure: { type: "photo", id: "OPH-022" },
    options: [
      "Des érosions épithéliales ponctuées qui ne prennent pas le colorant",
      "Une rupture du film lacrymal, signe d’un film instable",
      "Des plis de la membrane de Descemet dus à un œdème",
      "Des dendrites herpétiques vues en coloration négative"
    ],
    answer: 1,
    explain: "Les zones sombres qui apparaissent entre deux clignements sont les endroits où le film lacrymal s’est rompu. Moins de 10 secondes avant la première tache sombre : film instable, fréquent dans la sécheresse.",
    deep: "Les zones sombres qui apparaissent dans le film fluorescéiné entre deux clignements sont les endroits où le film lacrymal s’est rompu. Le délai entre le dernier clignement et la première tache sombre est le temps de rupture du film lacrymal (tear breakup time) : moins de 10 secondes signe un film instable, fréquent dans la sécheresse oculaire.",
    why: [
      "Faux : les érosions ponctuées prennent la fluorescéine et apparaissent en points verts brillants, pas en lignes sombres.",
      "Exact : lignes sombres = zones sans film; un temps de rupture court (moins de 10 s) traduit un film instable.",
      "Faux : les plis de Descemet se voient en fente fine dans un stroma œdémateux, pas comme des lignes qui apparaissent entre deux clignements.",
      "Faux : une dendrite herpétique est un ulcère épithélial qui retient la fluorescéine (vert brillant), avec des bulbes terminaux."
    ] },

  { id: "B-102", module: "B", topic: "c-bacterienne", type: "image", level: 1, trap: false,
    stem: "Douleur intense, photophobie et baisse de vision depuis 36 heures. Voici l’aspect de l’œil en éclairage diffus. Que montre la photo ?",
    figure: { type: "photo", id: "OPH-070" },
    options: [
      "Un infiltrat stromal suppuré central, avec œil très rouge",
      "Un ulcère dendritique ramifié, sans infiltrat du stroma",
      "Un œdème cornéen diffus par PIO élevée, sans infiltrat",
      "Une cicatrice cornéenne ancienne, dans un œil calme"
    ],
    answer: 0,
    explain: "Opacité dense, jaunâtre, au centre de la cornée, dans un œil très rouge : infiltrat suppuré d’une kératite bactérienne. Central et bien plus grand que 2 mm : cultures puis antibiotiques fortifiés, le jour même.",
    why: [
      "Exact : opacité dense et suppurée du stroma central, rougeur marquée.",
      "Une dendrite est une fine lésion épithéliale ramifiée ; ici l’opacité est dense et occupe le stroma.",
      "L’œdème donne une cornée terne, dépolie, sans plage dense jaunâtre.",
      "Une cicatrice est blanche, à bords nets, dans un œil blanc et indolore."
    ] },

  { id: "B-103", module: "B", topic: "c-atypiques", type: "image", level: 2, trap: false,
    stem: "Porteur de lentilles cornéennes souples ; douleur intense qui persiste malgré une semaine de gouttes antibiotiques. Lampe à fente, éclairage diffus. Quel diagnostic cet aspect doit-il faire évoquer en premier ?",
    figure: { type: "photo", id: "OPH-067" },
    options: [
      "Kératite herpétique épithéliale (dendrite)",
      "Infiltrat stérile périphérique lié aux lentilles",
      "Kératite à Acanthamoeba (infiltrat annulaire)",
      "Kératite ponctuée par sécheresse oculaire"
    ],
    answer: 2,
    explain: "Un anneau stromal chez un porteur de lentilles, avec une douleur intense et un échec des antibiotiques : Acanthamoeba jusqu’à preuve du contraire. On confirme par grattage (culture, PCR) ou microscopie confocale.",
    deep: "L’anneau stromal paracentral qui entoure une zone plus claire est l’infiltrat annulaire (ring infiltrate) typique de la kératite à Acanthamoeba, une infection par une amibe libre présente dans l’eau, surtout chez les porteurs de lentilles. Le diagnostic se confirme par grattage (culture, PCR) ou par microscopie confocale, comme chez ce patient.",
    why: [
      "Une dendrite est une lésion épithéliale fine et ramifiée, pas un anneau dans le stroma.",
      "Un infiltrat stérile est petit, périphérique et peu douloureux ; ici l’anneau est central et la douleur intense.",
      "Exact : anneau stromal, lentilles, douleur intense, échec des antibiotiques.",
      "Une kératite ponctuée donne de fins points épithéliaux, sans anneau stromal ni douleur de cette intensité."
    ] },

  { id: "B-104", module: "B", topic: "c-herpes", type: "image", level: 1, trap: false,
    stem: "Patient sous corticostéroïdes topiques au long cours après une greffe de cornée, œil rouge et larmoyant. Voici la cornée après fluorescéine, en lumière bleu cobalt. Quelle est la conduite la plus appropriée ?",
    figure: { type: "photo", id: "OPH-059" },
    options: [
      "Augmenter le corticostéroïde pour protéger la greffe",
      "Arrêter brusquement tous les corticostéroïdes, sans autre traitement",
      "Antibiotique topique et pansement 24 h",
      "Antiviral oral et sevrage prudent du stéroïde"
    ],
    answer: 3,
    explain: "Lésion ramifiée à bulbes terminaux qui retient la fluorescéine : dendrite à HSV, favorisée par les stéroïdes. Antiviral oral, et sevrage prudent du stéroïde : l’arrêt brusque exposerait la greffe au rejet.",
    deep: "Lésion ramifiée dont le fond retient la fluorescéine, avec des renflements au bout des branches (bulbes terminaux) : c’est un ulcère dendritique du virus herpès simplex (HSV), aux branches larges; sous corticostéroïdes, ces dendrites peuvent confluer en ulcère géographique. Traitement : antiviral, par exemple valacyclovir 500 mg PO TID ou acyclovir 400 mg PO 5 fois par jour pendant 7–10 jours, et réévaluation prudente des corticostéroïdes (après une greffe, ne pas les arrêter brusquement : risque de rejet).",
    why: [
      "Faux : monter le stéroïde fait progresser la dendrite vers un ulcère géographique.",
      "Faux : après une greffe, un arrêt brusque expose au rejet; on traite le virus et on ajuste le stéroïde prudemment.",
      "Faux : une dendrite à bulbes terminaux est virale; le pansement n’a pas sa place.",
      "Exact : dendrite HSV favorisée par les stéroïdes : valacyclovir 500 mg 3×/j ou acyclovir 400 mg 5×/j, puis réduction prudente du stéroïde."
    ] },

  { id: "B-105", module: "B", topic: "c-keratocone", type: "image", level: 1, trap: false,
    stem: "Patient connu pour un kératocône avancé, photographié pendant qu’il regarde vers le bas. Quel signe est illustré ?",
    figure: { type: "photo", id: "OPH-035" },
    options: [
      "Signe de Munson",
      "Signe de Rizzuti",
      "Anneau de Fleischer",
      "Stries de Vogt"
    ],
    answer: 0,
    explain: "Au regard vers le bas, le cône repousse la paupière inférieure, dont le bord se soulève en V : signe de Munson. C’est un signe tardif ; le diagnostic précoce repose sur la tomographie.",
    deep: "Au regard vers le bas, le cône repousse la paupière inférieure, dont le bord se soulève en V : c’est le signe de Munson (Munson sign). C’est un signe tardif de kératocône avancé, à reconnaître, mais inutile pour un diagnostic précoce, qui repose sur la tomographie.",
    why: [
      "Exact : bord de la paupière inférieure bombé par le cône au regard vers le bas.",
      "Faux : le signe de Rizzuti est un reflet conique sur l’iris nasal quand on éclaire la cornée par le côté temporal.",
      "Faux : l’anneau de Fleischer est un dépôt de fer brun à la base du cône, dans la cornée.",
      "Faux : les stries de Vogt sont de fines lignes du stroma profond, vues à la lampe à fente."
    ] },

  { id: "B-106", module: "B", topic: "c-keratocone", type: "diagnostic", level: 2, trap: false,
    stem: "Patient suivi pour un kératocône avancé. À la lampe à fente, en fente fine, tu vois de fines lignes verticales dans le stroma postérieur, au sommet du cône. Elles disparaissent quand tu appuies doucement sur le globe à travers la paupière. Que sont ces lignes ?",
    options: [
      "Des ruptures de la Descemet, comme les stries de Haab",
      "Des nerfs cornéens épaissis, visibles dans le stroma",
      "Des stries de Vogt, lignes de tension du stroma",
      "Des plis de la Descemet dus à un œdème du stroma"
    ],
    answer: 2,
    explain: "Fines lignes verticales du stroma postérieur qui s’effacent à la pression douce : stries de Vogt, signe classique du kératocône. Une rupture de la Descemet ne s’efface pas et s’accompagne d’un œdème (hydrops).",
    why: [
      "Une rupture de la Descemet ne disparaît pas à la pression ; dans le kératocône, elle cause un hydrops avec œdème brutal.",
      "Les nerfs cornéens sont des filaments ramifiés qui partent du limbe ; ils ne s’effacent pas à la pression.",
      "Exact : lignes de tension qui s’effacent quand la pression détend le cône.",
      "Des plis d’œdème accompagnent une cornée épaissie et trouble, pas un cône aminci et clair."
    ] },

  { id: "B-107", module: "B", topic: "c-keratocone", type: "image", level: 3, trap: false,
    stem: "Tomographie Scheimpflug (Pentacam, affichage quatre cartes : courbure axiale, élévation antérieure, pachymétrie, élévation postérieure). Quelle lecture est la plus juste ?",
    figure: { type: "photo", id: "OPH-120" },
    options: [
      "Astigmatisme direct régulier : nœud papillon vertical symétrique et pachymétrie normale",
      "Cambrure inférieure, point le plus mince décentré vers le bas et bombement des deux élévations : kératocône",
      "Pince de crabe et amincissement en bande près du limbe inférieur : dégénérescence marginale pellucide",
      "Aplatissement central après chirurgie réfractive, sans anomalie de l’élévation postérieure"
    ],
    answer: 1,
    explain: "Trois indices concordent : cambrure paracentrale inférieure, point le plus mince décentré vers le bas, îlot chaud aux deux cartes d’élévation. C’est un kératocône ; l’élévation postérieure est un marqueur reconnu.",
    deep: "La courbure axiale montre une cambrure paracentrale inférieure jusqu’à 56 D; la pachymétrie, un point le plus mince décentré en inférieur et temporal, avec une cornée plus mince en bas qu’en haut; les élévations antérieure et postérieure, un îlot chaud inférieur. Cette combinaison oriente vers un kératocône (ectasie progressive de la cornée); l’élévation postérieure et l’amincissement au point le plus mince sont des marqueurs reconnus par le consensus mondial.",
    why: [
      "Faux : la carte n’est pas symétrique; le haut est plat (environ 38 D) et le bas très cambré.",
      "Exact : cambrure inférieure, point mince décentré et bombements concordants sur les quatre cartes.",
      "Faux : la pince de crabe donne deux zones chaudes latérales recourbées vers le bas, avec une bande la plus mince à 1–2 mm du limbe inférieur; ici, la zone mince est paracentrale et la périphérie inférieure reste épaisse (bleu-violet).",
      "Faux : une ablation myopique aplatit le centre (zone froide centrale), sans îlot chaud inférieur ni bombement postérieur."
    ] },

  { id: "B-108", module: "B", topic: "c-fuchs", type: "image", level: 2, trap: false,
    stem: "Vision brouillée le matin qui s’améliore en cours de journée. Lampe à fente, fente large. Que sont les fines ponctuations visibles, et où se situent-elles ?",
    figure: { type: "photo", id: "OPH-049" },
    options: [
      "Des érosions épithéliales ponctuées, en surface de la cornée",
      "Des infiltrats sous-épithéliaux, dans le stroma antérieur",
      "Des dépôts de pseudoexfoliation, sur la capsule du cristallin",
      "Des guttae, sur la face postérieure de la cornée (endothélium)"
    ],
    answer: 3,
    explain: "Les guttae sont des excroissances de la membrane de Descemet, produites par un endothélium malade : fines ponctuations à la face postérieure de la cornée, en « métal martelé » quand elles confluent.",
    deep: "Les guttae sont des excroissances de la membrane de Descemet produites par un endothélium malade; elles se voient comme de fines ponctuations à la face postérieure de la cornée, avec un aspect de métal martelé quand elles confluent. Guttae centrales et vision brouillée le matin (œdème qui s’accumule la nuit, paupières fermées) évoquent une dystrophie endothéliale de Fuchs.",
    why: [
      "Faux : les érosions sont en surface et se révèlent surtout à la fluorescéine.",
      "Faux : les infiltrats sous-épithéliaux sont plus gros, blanc-gris, situés juste sous l’épithélium.",
      "Faux : la pseudoexfoliation (dépôt de matériel fibrillaire) se voit sur le cristallin, derrière la pupille, pas dans la cornée.",
      "Exact : guttae endothéliales, signe de la dystrophie de Fuchs."
    ] },

  { id: "B-109", module: "B", topic: "c-greffe", type: "image", level: 2, trap: false,
    stem: "Patient porteur d’une kératoplastie transfixiante (greffe de toute l’épaisseur de la cornée) ancienne, vision embrouillée et photophobie depuis 2 jours. Photo en dispersion sclérale. Que représente la ligne qui traverse le greffon ?",
    figure: { type: "photo", id: "OPH-104" },
    options: [
      "Une ligne de Khodadoust : front d’un rejet endothélial",
      "Une dendrite herpétique récidivante sur le greffon",
      "Un pli de la Descemet causé par une suture trop serrée",
      "Une ligne de fer épithéliale, banale sur une greffe"
    ],
    answer: 0,
    explain: "Une ligne de précipités qui traverse le greffon, avec de l’œdème du côté déjà franchi, est une ligne de Khodadoust : le front du rejet endothélial. Corticostéroïde topique intensif dès aujourd’hui.",
    deep: "La ligne de précipités qui traverse le greffon, avec un œdème du côté déjà franchi, est une ligne de Khodadoust (Khodadoust line) : le front de lymphocytes qui détruisent l’endothélium du donneur. C’est une urgence : corticostéroïde topique intensif, fréquent, parfois complété par un stéroïde systémique ou péri-oculaire. Le rappel RSVP (rougeur, sensibilité à la lumière, vision diminuée, douleur) justifie une consultation le jour même.",
    why: [
      "Exact : précipités alignés sur l’endothélium, œdème du côté déjà franchi.",
      "Une dendrite est épithéliale, ramifiée, et prend la fluorescéine ; cette ligne est faite de précipités sur la face postérieure.",
      "Un pli de Descemet est une strie fine sans précipités, et n’explique pas photophobie et flou récents.",
      "Une ligne de fer est brune, dans l’épithélium, stable et sans symptôme."
    ] },

  { id: "C-101", module: "C", topic: "g-gpao", type: "image", level: 1, trap: false,
    stem: "Femme de 71 ans, sans suivi ophtalmologique, rétinophotographies des deux yeux prises lors d’un dépistage. Quelle est la conduite la plus juste ?",
    figure: { type: "photo", id: "OPH-131" },
    options: [
      "IRM cérébrale urgente : ces papilles évoquent une compression",
      "Refaire les photos dans un an pour comparer",
      "Diriger rapidement en ophtalmologie : PIO, gonioscopie, champ visuel",
      "Rassurer : grandes papilles physiologiques, sans suivi nécessaire"
    ],
    answer: 2,
    explain: "Papilles presque entièrement excavées, rebord disparu, vaisseaux en baïonnette : glaucome avancé aux deux yeux, non traité. La vision centrale peut tomber vite : bilan et traitement rapides.",
    deep: "Les deux papilles sont presque entièrement excavées, le rebord a presque disparu et les vaisseaux plongent dans l’excavation puis réapparaissent au fond (vaisseaux en baïonnette, bayoneting) : c’est un glaucome avancé aux deux yeux, sans traitement. La vision centrale peut tomber vite à ce stade : il faut diriger rapidement pour mesurer la PIO, voir l’angle (gonioscopie), faire le champ visuel et commencer à baisser la PIO. Une pâleur plus étendue que l’excavation, elle, ferait chercher une compression.",
    why: [
      "Faux : la compression donne surtout une pâleur avec peu d’excavation ; ici, l’excavation est profonde et l’anneau restant n’est pas pâle.",
      "Faux : à ce stade, attendre un an peut coûter la vision centrale.",
      "Exact : glaucome avancé bilatéral non traité : bilan et traitement sans attendre.",
      "Faux : une grande papille physiologique garde un anneau normal ; ici, l’anneau a presque disparu."
    ] },

  { id: "C-102", module: "C", topic: "g-gpao", type: "image", level: 2, trap: false,
    stem: "Rétinophotographie de l’œil gauche d’un patient suivi pour un glaucome à angle ouvert. Quelle anomalie de la papille vois-tu ?",
    figure: { type: "photo", id: "OPH-133" },
    options: [
      "Un œdème papillaire aux bords flous",
      "Une encoche inférieure du rebord neurorétinien",
      "Une pâleur diffuse sans excavation",
      "Des néovaisseaux en lacis à la surface de la papille"
    ],
    answer: 1,
    explain: "Le rebord neurorétinien manque au pôle inférieur : c’est une encoche. Une bande sombre en part vers la tempe : les fibres nerveuses y manquent. Ce couple annonce un défaut arciforme dans le champ supérieur.",
    why: [
      "Un œdème papillaire surélève la papille et efface ses bords ; ici ils sont nets et la papille est creusée.",
      "Exact : amincissement localisé du rebord en bas, avec un défaut des fibres dans le même axe.",
      "Le rebord restant est rose ; c’est l’excavation qui domine, pas la pâleur.",
      "Des néovaisseaux forment un lacis fin et irrégulier en surface ; on ne voit ici que les vaisseaux normaux."
    ] },

  { id: "C-103", module: "C", topic: "g-gpn", type: "image", level: 3, trap: false,
    stem: "Patient suivi pour un glaucome à pression normale, PIO jugée dans la cible depuis un an. Voici sa papille à la visite de suivi. Quelle est la conduite la plus appropriée ?",
    figure: { type: "photo", id: "OPH-138" },
    options: [
      "Rassurer : c’est un artéfact photographique sans valeur clinique",
      "Arrêter le traitement puisque la PIO est normale",
      "Adresser en urgence pour une neuropathie optique ischémique",
      "Y voir un signe de contrôle insuffisant : revoir la cible et rapprocher champs et OCT"
    ],
    answer: 3,
    explain: "Hémorragie en flammèche au bord de la papille : facteur de risque de progression, fréquent dans le glaucome à pression normale. Elle fait douter du contrôle : on revoit la cible et on rapproche champs et OCT.",
    deep: "On voit une hémorragie papillaire (disc hemorrhage) en flammèche au bord inférotemporal (en bas à gauche). Plus fréquente dans le glaucome à pression normale, elle est un facteur de risque de progression; elle signale souvent un contrôle insuffisant de la PIO. On la documente, on rapproche champs visuels et OCT, et on envisage d’abaisser la cible.",
    why: [
      "Faux : l’hémorragie est réelle et significative; elle se résorbe en quelques semaines à quelques mois, d’où l’importance de la noter.",
      "Faux : dans le glaucome à pression normale, baisser la PIO ralentit la progression (CNTGS), même si elle est dite normale.",
      "Faux : la neuropathie ischémique donne un œdème papillaire aigu, pas une grande excavation chronique avec une hémorragie isolée.",
      "Exact : l’hémorragie papillaire signale un risque de progression; on ajuste la cible et la surveillance."
    ] },

  { id: "C-104", module: "C", topic: "g-crise", type: "image", level: 1, trap: false,
    stem: "Patient hypermétrope réveillé par une douleur intense de l’œil droit, avec céphalée, nausées et baisse de vision. Compare les deux yeux sur la photo. Quel diagnostic est le plus probable ?",
    figure: { type: "photo", id: "OPH-140" },
    options: [
      "Crise aiguë de fermeture de l’angle",
      "Uvéite antérieure aiguë",
      "Kératite bactérienne",
      "Conjonctivite adénovirale"
    ],
    answer: 0,
    explain: "Un œil rouge et une cornée trouble sur toute sa surface, chez un hypermétrope avec céphalée et nausées : crise aiguë de fermeture de l’angle. On mesure la PIO sans attendre.",
    why: [
      "Exact : œil rouge, cornée diffusément trouble, douleur avec nausées chez un hypermétrope.",
      "Dans l’uvéite, la cornée reste claire et la pupille est petite ; les nausées sont inhabituelles.",
      "Une kératite bactérienne donne une tache blanche localisée (infiltrat), pas une cornée trouble en entier.",
      "La conjonctivite virale gratte et larmoie, sans baisse de vision ni cornée trouble ; elle touche souvent les deux yeux."
    ] },

  { id: "C-105", module: "C", topic: "g-pxf", type: "image", level: 1, trap: false,
    stem: "Pupille dilatée, lampe à fente, avant une chirurgie de cataracte. Cet aspect de la capsule antérieure est découvert. Quel risque le chirurgien doit-il prévoir ?",
    figure: { type: "photo", id: "OPH-153" },
    options: [
      "Un décollement de rétine pendant la chirurgie",
      "Une crise de fermeture de l’angle à la dilatation",
      "Des zonules fragiles et une pupille qui dilate mal",
      "Une infection plus fréquente de la plaie"
    ],
    answer: 2,
    explain: "Disque central, zone claire, puis bande périphérique : la cible de la pseudo-exfoliation. Le même matériel affaiblit les zonules et rigidifie l’iris : pupille qui dilate mal, risque de rupture zonulaire.",
    deep: "Disque central à bord festonné, zone claire, puis matériel en périphérie : c’est la cible typique du syndrome pseudoexfoliatif, un dépôt fibrillaire lié à l’âge (gène LOXL1). Le même matériel affaiblit les zonules et rigidifie l’iris : pupille qui dilate mal, risque de rupture zonulaire, d’issue de vitré et, plus tard, de luxation de l’implant dans son sac. Prévoir dilatateur de pupille, anneau de tension capsulaire et chirurgien aguerri ; chercher aussi un glaucome secondaire.",
    why: [
      "Faux : le risque peropératoire principal touche les zonules et la capsule, pas la rétine.",
      "Faux : la pseudoexfoliation donne surtout un glaucome à angle ouvert ; la dilatation pour la chirurgie n’est pas le danger visé ici.",
      "Exact : zonules fragiles et mauvaise dilatation, à prévoir avant d’opérer.",
      "Faux : le dépôt capsulaire n’augmente pas le risque d’infection de la plaie."
    ] },

  { id: "C-106", module: "C", topic: "g-neovasculaire", type: "image", level: 2, trap: false,
    stem: "Homme de 57 ans, diabète de type 2 mal équilibré, PIO à 32 mmHg à l’œil gauche. Voici son iris à la lampe à fente. Quel mécanisme fait apparaître ces fins vaisseaux ?",
    figure: { type: "photo", id: "OPH-162" },
    options: [
      "Une inflammation chronique qui dilate les vaisseaux normaux de l’iris",
      "La PIO élevée, qui congestionne les veines de l’iris",
      "Un effet des gouttes de prostaglandine sur l’iris",
      "Une rétine ischémique qui libère du VEGF"
    ],
    answer: 3,
    explain: "La rétine qui manque d’oxygène libère du VEGF. Il gagne l’avant de l’œil et fait pousser des vaisseaux sur l’iris, puis dans l’angle. C’est pourquoi on traite la rétine (laser, anti-VEGF), pas seulement la PIO.",
    why: [
      "Une uvéite dilate des vaisseaux radiaires existants ; ici les vaisseaux sont nouveaux, fins et irréguliers, chez un diabétique.",
      "C’est l’inverse : les néovaisseaux et leur membrane bouchent l’angle et font monter la PIO.",
      "Les prostaglandines foncent l’iris et allongent les cils ; elles ne créent pas de vaisseaux.",
      "Exact : ischémie rétinienne, VEGF, puis néovaisseaux de l’iris et de l’angle."
    ] },

  { id: "C-107", module: "C", topic: "g-postop", type: "image", level: 3, trap: false,
    stem: "Une semaine après la pose d’un tube de drainage d’Ahmed, la chambre antérieure est plate et la PIO à 7 mmHg. Que montre la photo prise à travers la pupille ?",
    figure: { type: "photo", id: "OPH-182" },
    options: [
      "Une hémorragie suprachoroïdienne massive",
      "Des décollements choroïdiens qui se touchent au centre",
      "Un iris bombé par bloc pupillaire",
      "Une mal-direction de l’humeur aqueuse (glaucome malin)"
    ],
    answer: 1,
    explain: "Deux dômes bruns qui se rejoignent derrière la pupille : décollements choroïdiens séreux « kissing », dus à l’hypotonie. L’hémorragie suprachoroïdienne donne une douleur brutale et une PIO souvent élevée.",
    deep: "Deux dômes brunâtres se rejoignent derrière la pupille, de part et d’autre d’une ligne verticale de contact : ce sont des décollements choroïdiens séreux dits « kissing » (kissing choroidals), dus à une surfiltration du tube (hypotonie, chambre plate). L’hémorragie suprachoroïdienne est le principal diagnostic à éliminer : douleur brutale et PIO souvent élevée. Ici, le tube a été ligaturé par crainte d’une telle hémorragie, et les décollements avaient disparu dès le lendemain.",
    why: [
      "Faux : l’hémorragie suprachoroïdienne (saignement entre choroïde et sclère) donne typiquement une douleur brutale et une PIO élevée, avec des dômes rouge sombre; ici, la PIO est basse (7 mmHg).",
      "Exact : hypotonie et chambre plate après un tube, avec décollements choroïdiens qui se rejoignent au centre.",
      "Faux : dans l’iris bombé, l’iris pousse vers l’avant et la PIO monte; il n’y a pas de dômes derrière la pupille.",
      "Faux : dans la mal-direction (aqueuse détournée vers le vitré), la chambre est plate avec une PIO normale ou élevée, sans décollement choroïdien."
    ] },

  { id: "C-108", module: "C", topic: "g-hto", type: "image", level: 3, trap: true,
    stem: "Homme de 34 ans adressé pour un « amincissement important du rebord temporal ». L’OCT RNFL est normal dans tous les quadrants. Quelle explication est la plus probable ?",
    figure: { type: "photo", id: "OPH-139" },
    options: [
      "Croissant gris : pigment au bord temporal qui simule un rebord aminci",
      "Glaucome débutant avec un OCT faussement rassurant",
      "Atrophie péripapillaire de la zone bêta",
      "Papille inclinée de myope fort"
    ],
    answer: 0,
    explain: "La bande gris ardoise au bord temporal est un croissant gris : du pigment dans le tissu de la papille. Le vrai bord du disque est en dehors du croissant ; le rebord est sain, comme le confirme l’OCT normal.",
    deep: "La bande gris ardoise au bord temporal du disque est un croissant gris (gray crescent) : du pigment dans le tissu papillaire périphérique. Si l’on trace le vrai bord du disque en dehors du croissant, le rebord temporal est sain, ce que confirme l’OCT normal (l’aspect d’amincissement temporal est trompeur, pas un diagnostic). Plus fréquent chez les patients d’ascendance africaine, il n’augmente pas le risque de glaucome : le reconnaître évite un faux diagnostic de suspect et des traitements inutiles.",
    why: [
      "Exact : piège classique; le pigment fait croire à un rebord mince alors que le tissu neural est présent.",
      "Faux : un OCT faussement normal (green disease) existe, mais ici le pigment explique tout l’aspect et l’OCT est normal dans tous les quadrants.",
      "Faux : l’atrophie péripapillaire est en dehors du bord du disque et laisse voir la sclère blanche ou de gros vaisseaux choroïdiens.",
      "Faux : la papille inclinée du myope est ovale et oblique, avec un croissant blanc de sclère, pas une bande grise dans le disque."
    ] },

  { id: "C-109", module: "C", topic: "g-pigmentaire", type: "image", level: 2, trap: false,
    stem: "Rétroillumination (transillumination) de l’iris à la lampe à fente, chez un homme myope de 35 ans. Que montre l’image, et quel signe cherches-tu ensuite sur la cornée ?",
    figure: { type: "photo", id: "OPH-157" },
    options: [
      "Atrophie de l’iris en secteur ; une cicatrice de kératite herpétique",
      "Trous de l’iris et pupille déplacée ; un endothélium martelé",
      "Défauts de transillumination radiaires ; un fuseau de Krukenberg",
      "Perte de la collerette pupillaire ; des flocons blancs sur l’endothélium"
    ],
    answer: 2,
    explain: "Fentes rouges radiaires, en couronne, en moyenne périphérie de l’iris : défauts de transillumination de la dispersion pigmentaire. Le pigment libéré se dépose en ligne verticale sur l’endothélium : le fuseau de Krukenberg.",
    why: [
      "L’atrophie herpétique touche un secteur de l’iris, pas une couronne régulière de fentes radiaires.",
      "Le syndrome ICE déforme la pupille et troue l’iris ; ici la pupille est ronde et centrée.",
      "Exact : fentes radiaires de moyenne périphérie, puis pigment sur l’endothélium.",
      "Dans la pseudo-exfoliation, les défauts sont au bord de la pupille et le matériel blanc se voit sur le cristallin."
    ] },

  { id: "A-101", module: "A", topic: "a-examen", type: "image", level: 2, trap: false,
    stem: "Rapport de champ visuel Humphrey 24-2 (SITA Standard) annoté, chez un sujet de 23 ans. Quelle conclusion est correcte ?",
    figure: { type: "photo", id: "OPH-013" },
    options: [
      "Test non fiable, car les faux négatifs sont à 0 %",
      "Déficit débutant, car le PSD est à 1,21 dB",
      "Dépression généralisée, car la fovéa est à 36 dB",
      "Test fiable et champ normal"
    ],
    answer: 3,
    explain: "Lire d’abord la fiabilité : pertes de fixation, faux positifs et faux négatifs sont bas. Ensuite les indices : GHT normal, MD près de 0, PSD bas. Test fiable et champ normal.",
    deep: "La fiabilité est bonne (pertes de fixation 1/13, faux positifs 1 %, faux négatifs 0 %); le GHT (glaucoma hemifield test) est dans les limites normales, le VFI à 100 %, le MD à +0,28 dB et le PSD à 1,21 dB, sans grappe de points significatifs sur les cartes de probabilité. Toujours lire la fiabilité avant les indices : des faux positifs au-delà de 15 % rendent un test non fiable.",
    why: [
      "Faux : peu de faux négatifs est un bon signe; un test devient douteux surtout avec plus de 15 % de faux positifs ou de nombreuses pertes de fixation.",
      "Faux : un PSD de 1,21 dB est normal; un déficit localisé l’élève nettement.",
      "Faux : 36 dB à la fovéa est une sensibilité normale, et le MD est positif.",
      "Exact : bons indices de fiabilité, GHT normal, MD et PSD normaux."
    ] },

  { id: "A-102", module: "A", topic: "a-examen", type: "image", level: 1, trap: false,
    stem: "Champ visuel Humphrey : échelle de gris (à gauche) et carte de déviation individuelle (à droite). Quel déficit est présent ?",
    figure: { type: "photo", id: "OPH-190" },
    options: [
      "Quadranopsie supérieure qui respecte le méridien vertical",
      "Déficit arciforme supérieur avec ressaut nasal",
      "Scotome central",
      "Dépression généralisée comme dans une cataracte"
    ],
    answer: 1,
    explain: "Le déficit dessine un arc dans l’hémichamp supérieur et s’arrête net sur le méridien horizontal du côté nasal : déficit arciforme avec ressaut nasal, signature d’une atteinte des fibres nerveuses (glaucome).",
    deep: "La zone noire occupe surtout l’hémichamp supérieur, en arc, et s’arrête net sur le méridien horizontal du côté nasal (la tache aveugle, à droite, indique le côté temporal) : c’est un déficit arciforme supérieur avec ressaut nasal, typique d’une atteinte des fibres nerveuses comme dans le glaucome. La carte de déviation individuelle (pattern deviation) confirme un déficit localisé.",
    why: [
      "Faux : ici, les carrés noirs débordent des deux côtés du méridien vertical; un déficit qui s’arrête net sur ce méridien orienterait vers le chiasma ou les voies visuelles postérieures.",
      "Exact : respect du méridien horizontal et ressaut nasal = atteinte des fibres nerveuses (glaucome).",
      "Faux : le déficit occupe l’hémichamp supérieur en arc, pas seulement le point de fixation.",
      "Faux : une cataracte abaisse la déviation totale mais laisse une déviation individuelle presque normale; ici, elle est très anormale en haut."
    ] }
]);
