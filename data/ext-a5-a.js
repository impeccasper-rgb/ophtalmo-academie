var G = (typeof window !== 'undefined') ? window : globalThis;
G.OPH = G.OPH || {};

// Module A, section A5 (partie A) : cristallin, B-scan, rétine — entrées 1 à 9
G.OPH.A = G.OPH.A || {};
G.OPH.A.recog = (G.OPH.A.recog || []).concat([
  {
    id: "cataracte-nucleaire", order: 1, group: "cristallin",
    card: { nk: 2,
      lead: "Le noyau jaunit et durcit avec l’âge ; le cristallin épaissi rétrécit l’angle.",
      keys: [
        "Noyau jaune puis brun à la fente.",
        "Myopisation : le presbyte relit sans lunettes (**seconde vue**).",
        "Reflet rouge terni ; contraste et couleurs diminués.",
        "On opère pour la gêne fonctionnelle, pas pour le grade."
      ],
      ask: { q: "Pourquoi lit-il mieux sans lunettes à 75 ans ?", a: "La sclérose nucléaire augmente l’indice de réfraction du noyau : l’œil devient plus myope et le presbyte retrouve sa vision de près, la « seconde vue ». C’est un signe de cataracte nucléaire, pas une amélioration de l’œil." }
    },
    title: "Sclérose nucléaire et cataracte nucléaire", en: "Nuclear sclerosis / nuclear cataract",
    urgency: "routine",
    what: "Avec l’âge, le centre du cristallin (le noyau) se tasse, jaunit et durcit : c’est la **sclérose nucléaire** (nuclear sclerosis). Quand le noyau devient assez jaune-brun et opaque pour baisser la vision, on parle de cataracte nucléaire, puis de cataracte brunescente (brunescent cataract) quand il est brun foncé.",
    look: [
      "Fente fine et oblique à travers le cristallin, pupille dilatée : le noyau central paraît laiteux, jaune puis brun, plus opaque que le cortex qui l’entoure.",
      "Densité et couleur : jaune pâle (légère), ambre, puis brun foncé (brunescente) ; on la note qualitativement (trace à 4+) ou avec une échelle standardisée, le LOCS III (comparaison à des photos de référence).",
      "Reflet rouge (red reflex) encore présent mais terni au centre ; fond d’œil plus flou et jaunâtre.",
      "Réfraction : myopisation progressive (myopic shift) ; le presbyte relit parfois sans lunettes, c’est la **seconde vue** (second sight).",
      "Vision de loin brouillée, contraste diminué, couleurs ternies (les bleus paraissent plus sombres) ; souvent bilatérale et asymétrique."
    ],
    why: "En cornée, un noyau dur demande plus d’énergie d’ultrasons pendant la phacoémulsification (phaco) : plus d’énergie veut dire plus de perte de cellules endothéliales, ce qui peut décompenser une cornée de Fuchs (voir la fiche « Dystrophie endothéliale de Fuchs et œdème cornéen »). En glaucome, le cristallin qui épaissit avec l’âge pousse l’iris vers l’avant et rétrécit l’angle : l’extraction du cristallin est un vrai traitement de la fermeture de l’angle (EAGLE).",
    action: [
      "Documenter la couleur et la densité du noyau, l’AV avec meilleure correction et la gêne fonctionnelle ; on opère pour la gêne, pas pour le grade seul.",
      "Guttae ou cornée épaisse : microscopie spéculaire et pachymétrie avant la chirurgie ; discuter avec la cornée une phaco protectrice de l’endothélium, voire une greffe endothéliale (DMEK) combinée ou en deux temps.",
      "Angle étroit ou fermeture primaire avec cataracte : gonioscopie et biométrie ; l’extraction du cristallin est souvent préférée à l’iridotomie (EAGLE : fermeture primaire de l’angle, PAC, avec PIO ≥ 30 mmHg, ou glaucome par fermeture de l’angle, PACG, à partir de 50 ans).",
      "Myopisation rapide inexpliquée : penser aussi à une hyperglycémie et à une subluxation antérieure du cristallin (zonules faibles dans la pseudo-exfoliation, PXF), puis refaire la réfraction."
    ],
    pitfalls: [
      "Attribuer toute la baisse de vision à la cataracte : vérifier papille, macula (OCT) et champ visuel avant de promettre un gain.",
      "Un noyau brunescent déprime le champ visuel de façon diffuse (déviation totale abaissée, déviation corrigée normale) : ne pas le prendre pour une progression du glaucome.",
      "Juger la densité en lumière diffuse seulement : le noyau s’évalue avec une fente fine et oblique."
    ],
    pearl: { q: "Pourquoi ton patient de 75 ans dit-il qu’il lit mieux sans lunettes depuis quelques mois ?", a: "La sclérose nucléaire augmente l’indice de réfraction du noyau : l’œil devient plus myope et le presbyte retrouve sa vision de près, la « seconde vue ». C’est un signe de cataracte nucléaire, pas une amélioration de l’œil." }
  },
  {
    id: "cataracte-corticale-scp", order: 2, group: "cristallin",
    card: { nk: 2,
      lead: "Corticale : rayons blancs en périphérie. Sous-capsulaire postérieure (SCP) : plaque centrale, très gênante, typique des stéroïdes.",
      keys: [
        "Voir en **rétroillumination**.",
        "Corticale : rayons de la périphérie vers le centre.",
        "SCP : plaque granuleuse au centre de la face postérieure.",
        "SCP : chercher stéroïdes, diabète, uvéite ; mesurer la PIO."
      ],
      ask: { q: "Pourquoi une SCP gêne-t-elle en plein soleil ?", a: "La plaque est centrale et postérieure. En lumière vive et pendant l’accommodation (myosis de la vision de près), la pupille se contracte et toute la lumière doit traverser la plaque." }
    },
    title: "Cataractes corticale, sous-capsulaire postérieure, suturale et mixte", en: "Cortical, posterior subcapsular, sutural and mixed cataract",
    urgency: "routine",
    what: "La cataracte corticale (cortical cataract) forme des rayons blancs, comme les rayons d’une roue, dans la couche externe du cristallin (le cortex). La **cataracte sous-capsulaire postérieure** (posterior subcapsular cataract, SCP) est une plaque granuleuse au centre, juste devant la capsule arrière : petite, elle gêne pourtant beaucoup.",
    look: [
      "**Rétroillumination** (retroillumination) : pupille dilatée, on éclaire le fond pour obtenir le reflet rouge ; les opacités se découpent en ombre ou en relief sur fond orangé.",
      "Corticale : rayons ou coins (cortical spokes) qui partent de la périphérie vers le centre ; souvent cachés derrière l’iris si la pupille n’est pas dilatée.",
      "SCP : plaque granuleuse et scintillante au centre de la face postérieure ; à la fente, focaliser derrière le noyau pour la voir.",
      "Suturale (souvent congénitale) : opacité en Y le long des sutures embryonnaires du cristallin, parfois avec de petits points ; habituellement stable et peu gênante.",
      "Mixte : plusieurs types ensemble (ex. polaire antérieure, SCP et corticale) ; décrire chaque composante séparément."
    ],
    why: "La SCP est la cataracte des corticostéroïdes : greffés de cornée et patients avec uvéite sous gouttes de stéroïdes au long cours, soit les mêmes patients qui font une hypertension cortisonique (voir la fiche « Glaucomes cortisonique et uvéitique »). Elle explique aussi l’éblouissement chez un patient jeune, et une SCP centrale peut fausser l’acuité, la réfraction et le champ visuel d’un glaucomateux.",
    action: [
      "Chercher la cause d’une SCP : stéroïdes (gouttes, oraux, inhalés), diabète, radiothérapie, uvéite, traumatisme, rétinite pigmentaire ; mesurer la PIO si stéroïdes.",
      "Mesurer l’AV en condition d’éblouissement (glare test) ou en lumière vive quand la plainte est disproportionnée par rapport à l’AV au tableau.",
      "Référer en chirurgie de cataracte quand la gêne fonctionnelle le justifie ; chez un greffé, coordonner avec la cornée (protection du greffon, stéroïdes autour de la chirurgie)."
    ],
    pitfalls: [
      "Patient jeune à 6/7,5 au tableau mais incapable de conduire de nuit : une petite SCP centrale suffit ; la chercher en rétroillumination.",
      "Examiner sans dilater : on manque les rayons corticaux périphériques et on sous-estime une SCP.",
      "Une cataracte suturale congénitale stable n’est pas, à elle seule, une indication chirurgicale."
    ],
    pearl: { q: "Pourquoi une SCP gêne-t-elle surtout de près et en plein soleil ?", a: "La plaque est centrale et postérieure. En lumière vive et pendant l’accommodation (myosis de la vision de près), la pupille se contracte et toute la lumière doit traverser la plaque." }
  },
  {
    id: "cataracte-mature", order: 3, group: "cristallin",
    card: {
      lead: "Cristallin opaque d’un bord à l’autre, sans reflet rouge. On ne voit plus le fond, et le cristallin peut causer un glaucome phacomorphique ou phacolytique.",
      keys: [
        "Pupille blanche ou ambrée, aucun reflet rouge.",
        "Vision CD, MM ou PL : tester la projection et le DPAR.",
        "**B-scan** avant la chirurgie ; biométrie souvent ultrasonique.",
        "Angle fermé = phacomorphique ; ouvert + particules blanches = phacolytique."
      ],
      ask: { q: "Pourquoi le bleu trypan dans une cataracte blanche, et où le retrouves-tu en cornée ?", a: "Sans reflet rouge, la capsule antérieure est presque invisible : le colorant la teint en bleu pour guider le capsulorhexis. En cornée, il sert aussi à colorer le greffon de DMEK pour voir son orientation dans la chambre antérieure." }
    },
    title: "Cataracte mature, blanche et morgagnienne", en: "Mature, white and Morgagnian cataract",
    urgency: "rapide",
    what: "Une cataracte mature (mature cataract) est opaque d’un bord à l’autre : blanche (cortex) ou brun foncé (noyau brunescent), sans reflet rouge. Quand le cortex se liquéfie et que le noyau tombe vers le bas dans le sac capsulaire, c’est une **cataracte morgagnienne** (Morgagnian cataract), un stade hypermature.",
    look: [
      "Pupille blanche ou ambrée visible à l’œil nu (leucocorie chez l’adulte) ; aucun reflet rouge en rétroillumination.",
      "Blanche : cortex blanc nacré, parfois avec des rayons visibles ; cristallin souvent gonflé (intumescent) et chambre antérieure moins profonde que l’autre œil.",
      "Brunescente mature : noyau brun-ambre très dense qui remplit toute la pupille.",
      "Morgagnienne : noyau brun posé dans le bas du sac, cortex liquéfié laiteux ou résorbé au-dessus.",
      "Vision souvent réduite à compter les doigts (CD), mouvements de la main (MM) ou perception lumineuse (PL) : tester la projection lumineuse dans les 4 quadrants et chercher un déficit pupillaire afférent relatif (DPAR) pour juger la rétine et le nerf."
    ],
    why: "Sans vue du fond, on ignore si la rétine est décollée ou s’il y a une tumeur : B-scan obligatoire avant la chirurgie. En glaucome, une cataracte intumescente peut fermer l’angle (**glaucome phacomorphique**) et une cataracte hypermature peut laisser fuir des protéines qui bouchent le trabéculum (**glaucome phacolytique**) : voir la fiche sur les glaucomes liés au cristallin. En cornée, une chirurgie longue et difficile menace l’endothélium.",
    action: [
      "B-scan avant la chirurgie : rétine, choroïde, masse ; la biométrie optique échoue souvent, prévoir une biométrie ultrasonique.",
      "Mesurer la PIO, faire la gonioscopie et comparer la chambre antérieure à l’autre œil : angle fermé et chambre plate = phacomorphique ; angle ouvert et particules blanches en chambre antérieure = phacolytique.",
      "Référer en chirurgie de cataracte en quelques semaines, plus vite si PIO élevée ou inflammation ; au bloc, le **bleu trypan** (trypan blue) colore la capsule antérieure pour réussir le capsulorhexis.",
      "Glaucome phacomorphique ou phacolytique : baisser la PIO, contrôler l’inflammation, puis extraire le cristallin rapidement (urgence relative)."
    ],
    pitfalls: [
      "Opérer sans B-scan et découvrir après la chirurgie un décollement de rétine ancien ou une tumeur choroïdienne.",
      "Cataracte blanche gonflée : la capsule sous tension peut se déchirer vers la périphérie dès l’ouverture (signe du drapeau argentin) ; d’où colorant et décompression.",
      "Prendre un glaucome phacolytique (angle ouvert, chambre profonde) pour une uvéite et le traiter seulement aux stéroïdes."
    ],
    pearl: { q: "Pourquoi le bleu trypan dans une cataracte blanche, et où le retrouves-tu en cornée ?", a: "Sans reflet rouge, la capsule antérieure est presque invisible : le colorant la teint en bleu pour guider le capsulorhexis. En cornée, il sert aussi à colorer le greffon de DMEK pour voir son orientation dans la chambre antérieure." }
  },
  {
    id: "opacification-capsulaire", order: 4, group: "cristallin",
    card: {
      lead: "La capsule se voile derrière l’implant. Le YAG la traite, mais peut monter la PIO.",
      keys: [
        "Voile des mois ou années après chirurgie.",
        "Rétroillumination : voile ou perles d’Elschnig.",
        "Exclure un œdème maculaire (OCT) avant la capsulotomie YAG.",
        "Glaucomateux : apraclonidine ou brimonidine, énergie minimale, PIO recontrôlée."
      ],
      ask: { q: "YAG et glaucome avancé : avant et après ?", a: "J’instille un alpha-agoniste avant ou juste après le laser, j’utilise l’énergie minimale et je remesure la PIO dans les heures qui suivent. Si un pic survient, j’ajuste le traitement et je revois le patient rapidement." }
    },
    title: "Opacification capsulaire postérieure", en: "Posterior capsule opacification (PCO)",
    urgency: "routine",
    what: "Après une chirurgie de cataracte, l’implant repose dans le sac capsulaire ; des cellules du cristallin restées sur place repoussent et voilent la capsule postérieure derrière l’implant : c’est l’**opacification capsulaire postérieure** (posterior capsule opacification), parfois appelée « cataracte secondaire ». Elle se traite au laser en quelques minutes.",
    look: [
      "Mois ou années après la chirurgie : vision qui se voile lentement et éblouissement, comme une cataracte qui « revient ».",
      "Lampe à fente et rétroillumination : voile blanc-gris, plaques de fibrose ou petites bulles (perles d’Elschnig, Elschnig pearls) derrière l’optique de l’implant.",
      "Reflet rouge irrégulier, fond d’œil flou alors que l’implant lui-même est clair et bien centré.",
      "Noter si la capsule est déjà ouverte et si l’implant est stable : cela change la conduite."
    ],
    why: "Beaucoup de patients de glaucome et de cornée sont pseudophakes (porteurs d’un implant). La capsulotomie au laser Nd:YAG (laser qui ouvre la capsule par de minuscules microexplosions) peut faire monter la PIO dans les heures qui suivent, ce qui est dangereux pour un nerf optique déjà très atteint ; un voile capsulaire peut aussi faire croire à une progression au champ visuel ou dégrader la qualité de l’OCT.",
    action: [
      "Confirmer que la capsule explique la baisse (AV, rétroillumination, OCT maculaire pour exclure un œdème maculaire) avant de proposer une **capsulotomie YAG** (YAG capsulotomy).",
      "Patient glaucomateux : hypotenseur alpha-agoniste (apraclonidine ou brimonidine) avant ou juste après le laser, énergie minimale, puis PIO recontrôlée dans les heures suivantes selon le protocole local.",
      "Informer des risques rares mais sérieux : œdème maculaire cystoïde (cystoid macular edema), décollement de rétine (surtout myope fort), marques sur l’implant ; revenir d’urgence si éclairs, mouches volantes ou voile.",
      "Si un échange ou une refixation de l’implant est envisagé, en discuter avant le laser : une capsule intacte facilite la chirurgie."
    ],
    pitfalls: [
      "Faire un YAG à un glaucomateux avancé sans prophylaxie ni contrôle de PIO : un pic peut emporter le peu de champ qui reste.",
      "Attribuer la baisse à la capsule alors qu’il s’agit d’un œdème maculaire, d’une DMLA ou d’une progression du glaucome.",
      "Mettre d’emblée une nouvelle baisse après un YAG bien fait sur le compte d’une « récidive » : l’ouverture se referme rarement chez l’adulte ; chercher d’abord une autre cause (macula, rétine, glaucome)."
    ],
    pearl: { q: "Que fais-tu avant et après un YAG chez un patient avec glaucome avancé ?", a: "J’instille un alpha-agoniste avant ou juste après le laser, j’utilise l’énergie minimale et je remesure la PIO dans les heures qui suivent. Si un pic survient, j’ajuste le traitement et je revois le patient rapidement." }
  },
  {
    id: "bscan", order: 5, group: "echo",
    card: {
      lead: "Échographie qui montre l’intérieur de l’œil quand le fond est invisible. Jamais sur globe ouvert.",
      keys: [
        "Sonde sur la paupière fermée ; marqueur = haut de l’image.",
        "Gain haut pour voir, bas pour comparer.",
        "Fine, mobile = vitré ; attachée au nerf = rétine.",
        "Dôme lisse, épais, peu mobile = choroïde."
      ],
      ask: { q: "Au B-scan : vitré, rétine ou choroïde décollés ?", a: "Le vitré décollé est fin, peu réfléchissant et très mobile. La rétine décollée est plus épaisse, très réfléchissante, attachée au nerf optique et à l’ora serrata, souvent en V. La choroïde décollée forme des dômes lisses et épais, peu mobiles, qui ne s’attachent pas au nerf optique." }
    },
    title: "Échographie B (B-scan) : technique et lecture", en: "B-scan ocular ultrasonography",
    urgency: "routine",
    what: "Le **B-scan** est une échographie en deux dimensions qui montre l’intérieur de l’œil quand on ne voit pas le fond : cataracte blanche, hémorragie du vitré, cornée opaque. La sonde est posée sur la paupière fermée (avec gel) et l’écran montre une coupe en éventail du globe.",
    look: [
      "Orientation : la sonde est à gauche de l’écran, la paroi postérieure à droite ; le marqueur de la sonde (trait ou point) correspond au haut de l’image.",
      "Nomenclature horaire : la coupe porte le nom du méridien examiné, à l’opposé de la sonde (pour voir 12 h, sonde à 6 h et regard vers le haut) ; glisser du limbe vers le cul-de-sac balaie du pôle postérieur vers la périphérie.",
      "Coupe transverse (transverse scan) : marqueur parallèle au limbe, montre plusieurs heures d’une même bande ; coupe longitudinale (longitudinal scan) : marqueur perpendiculaire au limbe, montre un méridien du pôle postérieur à la périphérie.",
      "Gain : élevé (près du maximum de l’appareil) pour voir les échos faibles (hémorragie, décollement postérieur du vitré) ; le baisser pour comparer la réflectivité des membranes et mesurer.",
      "Examen dynamique : faire bouger l’œil ; membrane fine et très mobile = vitré ; membrane épaisse attachée au nerf optique = rétine ; dôme lisse, épais et peu mobile = choroïde."
    ],
    why: "En glaucome et en cornée, le B-scan revient souvent : cataracte mature avant chirurgie, hémorragie du vitré chez un diabétique avec PIO élevée, hypotonie après trabéculectomie (décollement choroïdien), cornée opaque avant greffe (le segment postérieur est-il viable ?). Il aide aussi à reconnaître la **nanophtalmie** (nanophthalmos : œil très court à sclère épaisse), qui prédispose à la fermeture de l’angle et aux effusions uvéales pendant la chirurgie.",
    action: [
      "Demander un B-scan dès que le fond d’œil n’est pas visible : avant une chirurgie de cataracte ou une greffe, et après un traumatisme seulement si le globe n’est pas ouvert.",
      "Décrire : méridien et type de coupe, forme, épaisseur, attache au nerf optique, mobilité et contenu (anéchogène = liquide clair ; échogène = sang, caillot, tissu).",
      "Œil très court avec forte hypermétropie et paroi épaisse : penser nanophtalmie, faire une gonioscopie et prévenir le chirurgien du risque d’effusion uvéale et de fermeture de l’angle.",
      "Toute image de décollement de rétine ou de masse : référer en rétine le jour même ou rapidement selon la macula et le contexte."
    ],
    pitfalls: [
      "Gain trop bas : un décollement postérieur du vitré ou une hémorragie légère disparaît ; gain trop haut : du bruit imite une membrane.",
      "Confondre un vitré décollé épais (ou chargé de sang) avec une rétine décollée : chercher l’attache au nerf optique et la mobilité.",
      "Appuyer sur un globe possiblement ouvert : au moindre doute, pas d’échographie de contact."
    ],
    pearl: { q: "Comment distingues-tu au B-scan un décollement postérieur du vitré, un décollement de rétine et un décollement choroïdien ?", a: "Le vitré décollé est fin, peu réfléchissant et très mobile. La rétine décollée est plus épaisse, très réfléchissante, attachée au nerf optique et à l’ora serrata, souvent en V. La choroïde décollée forme des dômes lisses et épais, peu mobiles, qui ne s’attachent pas au nerf optique." }
  },
  {
    id: "decollement-retine", order: 6, group: "retine",
    card: { nk: 2,
      lead: "Une déchirure laisse passer le liquide sous la rétine. Macula attachée : rétine le jour même.",
      keys: [
        "Éclairs, mouches, puis rideau.",
        "**Signe de Shafer** : poussière de tabac dans le vitré antérieur.",
        "Rétine grise, soulevée, mobile ; déchirure en fer à cheval.",
        "Macula décollée : AV effondrée ; référer aussi le jour même."
      ],
      ask: { q: "Qu’est-ce que le signe de Shafer et pourquoi le cherches-tu ?", a: "Ce sont des grains de pigment dans le vitré antérieur, vus à la fente derrière le cristallin. Ils viennent de l’épithélium pigmentaire libéré par une déchirure : chez un patient avec éclairs et mouches, ce signe impose de chercher une déchirure ou un décollement." }
    },
    title: "Décollement de rétine rhegmatogène et tractionnel", en: "Rhegmatogenous and tractional retinal detachment",
    urgency: "urgent",
    what: "Dans le décollement de rétine **rhegmatogène** (rhegmatogenous retinal detachment), une déchirure laisse passer le liquide du vitré sous la rétine, qui se soulève comme du papier peint qui décolle. Dans le décollement tractionnel (tractional retinal detachment), des membranes fibrovasculaires, par exemple d’une rétinopathie diabétique proliférante, tirent la rétine sans déchirure.",
    look: [
      "Symptômes : éclairs (photopsies), nouvelles mouches volantes, puis voile ou rideau qui avance ; le voile est du côté opposé au décollement (décollement supérieur = voile en bas).",
      "**Signe de Shafer** (Shafer sign) : fins grains de pigment, comme de la poussière de tabac, dans le vitré antérieur derrière le cristallin ; fortement associé à une déchirure.",
      "Fond d’œil dilaté : rétine grisâtre, soulevée, ondulée, qui bouge avec l’œil ; déchirure en fer à cheval souvent en périphérie supérieure.",
      "Macula attachée (macula-on) : AV centrale conservée ; macula décollée (macula-off) : AV centrale effondrée, souvent très basse.",
      "Tractionnel : membranes blanc-jaune le long des arcades vasculaires, rétine soulevée en tente, concave et peu mobile, chez un diabétique mal contrôlé."
    ],
    why: "Le R1 dilate des patients à risque : myopes forts, pseudophakes, patients récemment traités au YAG et patients sous pilocarpine (les myotiques ont été associés à des déchirures et décollements). En glaucome, la rétinopathie diabétique proliférante qui cause le décollement tractionnel est la même qui donne le glaucome néovasculaire ; après une chirurgie de décollement (gaz, huile de silicone, indentation sclérale), la PIO peut aussi monter.",
    action: [
      "Macula attachée, surtout si le décollement est supérieur ou bulleux : appel en rétine le jour même ; c’est la vraie urgence, la vision centrale est encore à sauver.",
      "Macula décollée : référer aussi le jour même ; la réparation se fait habituellement dans les jours suivants et le pronostic dépend de la durée du décollement.",
      "Éclairs ou mouches récents sans décollement visible : examen dilaté de toute la périphérie avec indentation ; un signe de Shafer ou une hémorragie du vitré impose de trouver la déchirure ou de référer.",
      "Décollement tractionnel diabétique : référer en rétine et examiner l’iris et l’angle à la recherche de néovaisseaux."
    ],
    pitfalls: [
      "Croire que la macula décollée est la situation la plus urgente : c’est la macula encore attachée qu’il faut protéger en priorité.",
      "Examiner sans dilatation ni indentation : les déchirures sont périphériques.",
      "Commencer la pilocarpine chez un myope fort sans fond d’œil dilaté ni explication des symptômes d’alarme."
    ],
    pearl: { q: "Qu’est-ce que le signe de Shafer et pourquoi le cherches-tu ?", a: "Ce sont des grains de pigment dans le vitré antérieur, vus à la fente derrière le cristallin. Ils viennent de l’épithélium pigmentaire libéré par une déchirure : chez un patient avec éclairs et mouches, ce signe impose de chercher une déchirure ou un décollement." }
  },
  {
    id: "decollement-choroidien", order: 7, group: "retine",
    card: { nk: 2,
      lead: "Liquide ou sang sous la choroïde, après chirurgie du glaucome. Séreux ou hémorragique : tout change.",
      keys: [
        "Dômes lisses, bruns, immobiles.",
        "Séreux : PIO basse, peu de douleur.",
        "Hémorragique : douleur brutale, PIO haute : urgence.",
        "B-scan : dômes non attachés au nerf ; noir = séreux, gris = sang."
      ],
      ask: { q: "Post-trabéculectomie, PIO 3 mmHg, dômes bruns : séreux ?", a: "PIO basse, peu de douleur et contenu anéchogène au B-scan évoquent un décollement séreux par hypotonie. Une hémorragie suprachoroïdienne donne plutôt une douleur brutale, une PIO élevée et un contenu échogène." }
    },
    title: "Décollement choroïdien séreux et hémorragique", en: "Serous and hemorrhagic choroidal detachment",
    urgency: "urgent",
    what: "Un **décollement choroïdien** (choroidal detachment) est un soulèvement de la choroïde par du liquide (forme séreuse, ou effusion) ou du sang (forme hémorragique) accumulé entre la choroïde et la sclère. Il forme de gros dômes bruns et lisses en périphérie ; quand deux dômes se touchent au centre, on dit qu’ils « s’embrassent » (kissing choroidals).",
    look: [
      "Fond d’œil : dômes lisses, bruns ou gris-orangés, fermes, qui ne bougent pas avec l’œil ; souvent plusieurs lobes ; l’ora serrata se voit sans indentation.",
      "Contexte séreux : PIO basse (hypotonie) après trabéculectomie, tube ou fuite de plaie ; inflammation ; sclérite postérieure ; effusion ciliochoroïdienne médicamenteuse.",
      "Contexte hémorragique (**hémorragie suprachoroïdienne**, suprachoroidal hemorrhage) : douleur brutale et sévère, PIO souvent élevée, chambre antérieure plate, baisse de vision, pendant ou peu après une chirurgie.",
      "B-scan : membranes épaisses en dôme, convexes, peu mobiles, qui ne s’attachent pas au nerf optique ; contenu anéchogène (noir) si séreux, échogène (gris, caillot) si hémorragique.",
      "Chambre antérieure peu profonde par bascule vers l’avant du diaphragme iris-cristallin : penser au décollement choroïdien devant toute chambre plate postopératoire."
    ],
    why: "C’est une complication typique du patient opéré de glaucome (voir la fiche « Patient opéré : trabéculectomie, tubes, MIGS ») : surfiltration ou fuite, hypotonie, puis effusion choroïdienne. Distinguer séreux (PIO basse, peu de douleur) et hémorragique (douleur, PIO haute) change toute la conduite. Facteurs de risque d’hémorragie : anticoagulants, hypertension artérielle, myopie forte, glaucome, chirurgie vitréorétinienne antérieure.",
    action: [
      "Effusion séreuse avec hypotonie : chercher et corriger la cause (test de Seidel, bulle trop filtrante, inflammation) ; cycloplégique et stéroïde topique ; aviser le glaucomologue le jour même.",
      "Douleur aiguë, PIO élevée et chambre plate après chirurgie : soupçonner une hémorragie suprachoroïdienne, baisser la PIO, soulager la douleur, aviser le chirurgien d’urgence.",
      "Dômes qui s’embrassent, contact cristallin ou implant avec la cornée, hémorragie massive : discuter un drainage ; pour le sang, le B-scan aide à choisir le moment (caillot liquéfié, souvent après 1 à 2 semaines).",
      "Effusion sans chirurgie : penser sclérite postérieure (douleur, **signe du T** au B-scan), effusion médicamenteuse (topiramate) ou nanophtalmie."
    ],
    pitfalls: [
      "Confondre décollement choroïdien et décollement de rétine : la choroïde décollée est brune, lisse, ferme et ne s’attache pas au nerf optique.",
      "Chambre plate postopératoire avec PIO élevée : penser hémorragie suprachoroïdienne ou mal-direction de l’aqueuse, pas seulement surfiltration.",
      "Donner de la pilocarpine dans une chambre plate par effusion : elle accentue la bascule vers l’avant."
    ],
    pearl: { q: "Après une trabéculectomie, PIO à 3 mmHg et dômes bruns en périphérie : séreux ou hémorragique ?", a: "PIO basse, peu de douleur et contenu anéchogène au B-scan évoquent un décollement séreux par hypotonie. Une hémorragie suprachoroïdienne donne plutôt une douleur brutale, une PIO élevée et un contenu échogène." }
  },
  {
    id: "dmla", order: 8, group: "retine",
    card: { nk: 2,
      lead: "Après 50 ans : drusen et atrophie (sèche) ou néovaisseaux qui fuient (humide), avec chute rapide.",
      keys: [
        "Drusen : points jaunes autour de la fovéa.",
        "Humide : sang ou liquide sous la rétine.",
        "Métamorphopsie récente : rétine en quelques jours (anti-VEGF).",
        "Anti-VEGF répétés : surveiller la PIO du glaucomateux."
      ],
      ask: { q: "Cadre de porte ondulé depuis 4 jours : que fais-tu ?", a: "Je teste chaque œil à la grille d’Amsler, je dilate et je fais un OCT maculaire. Une métamorphopsie récente évoque une DMLA néovasculaire : référence en rétine en quelques jours pour anti-VEGF, car le délai compte pour la vision finale." }
    },
    title: "Dégénérescence maculaire liée à l’âge (DMLA) sèche et néovasculaire", en: "Age-related macular degeneration (AMD), dry and neovascular",
    urgency: "rapide",
    what: "La **DMLA** (dégénérescence maculaire liée à l’âge, age-related macular degeneration) est une usure de la macula après 50 ans. Dans la forme sèche (dry AMD), des dépôts jaunes (drusen) s’accumulent sous l’épithélium pigmentaire puis la rétine s’atrophie lentement (atrophie géographique au stade avancé) ; dans la forme néovasculaire ou « humide » (neovascular AMD), des vaisseaux anormaux poussent sous la macula, saignent et fuient, et la vision centrale peut chuter en quelques jours.",
    look: [
      "**Drusen** : points ou taches jaunes autour de la fovéa ; petits et rares (forme précoce) ou gros, nombreux, parfois confluents (forme intermédiaire).",
      "**Atrophie géographique** (geographic atrophy) : zone pâle aux bords nets où l’on voit les gros vaisseaux choroïdiens ; décollement drusénoïde de l’épithélium pigmentaire (drusenoid PED) : grosse élévation jaune formée de drusen confluents.",
      "Forme néovasculaire : hémorragie sous-rétinienne rouge foncé, liquide sous-rétinien, exsudats, soulèvement grisâtre de la macula ; métamorphopsies récentes (lignes droites tordues).",
      "**Grille d’Amsler** (Amsler grid), un œil à la fois : lignes ondulées ou zone manquante au centre.",
      "OCT maculaire : drusen = bosses sous l’épithélium pigmentaire ; atrophie = rétine externe amincie et signal qui pénètre plus loin dans la choroïde ; néovaisseaux = liquide intrarétinien ou sous-rétinien."
    ],
    why: "Le patient âgé de la clinique de glaucome a souvent une DMLA : elle fausse l’acuité, le champ visuel central et l’analyse des cellules ganglionnaires maculaires (GCIPL) à l’OCT. Les injections intravitréennes répétées d’**anti-VEGF** (médicaments qui bloquent le VEGF, vascular endothelial growth factor, le signal qui fait pousser et fuir les néovaisseaux) font monter la PIO de façon transitoire après chaque injection, parfois de façon soutenue : à surveiller chez le glaucomateux. En cornée, la povidone iodée appliquée à chaque injection irrite un épithélium déjà fragile.",
    action: [
      "Métamorphopsie ou baisse centrale récente, hémorragie ou liquide sous-rétinien : référer en rétine en quelques jours pour injections d’anti-VEGF.",
      "Forme sèche : OCT maculaire de base, grille d’Amsler à la maison, arrêt du tabac ; des suppléments selon la formule de l’étude AREDS2 (Age-Related Eye Disease Study 2 : vitamines C et E, zinc, cuivre, lutéine, zéaxanthine) sont proposés au stade intermédiaire ou si un œil est au stade avancé, pas aux formes précoces.",
      "Glaucomateux sous anti-VEGF : noter les dates d’injection, mesurer la PIO et en parler au rétinologue si elle monte de façon soutenue.",
      "Avant une chirurgie de cataracte : OCT maculaire pour donner des attentes réalistes et repérer une forme active à traiter d’abord."
    ],
    pitfalls: [
      "Attribuer une baisse de vision récente à la cataracte ou au glaucome sans regarder la macula : une hémorragie sous-rétinienne se traite rapidement.",
      "Lire un GCIPL maculaire aminci chez un patient avec DMLA comme une progression du glaucome.",
      "Prescrire des suppléments à tout patient avec quelques petits drusen : ils visent les stades plus avancés."
    ],
    pearl: { q: "Ton patient glaucomateux voit le cadre de sa porte ondulé depuis 4 jours. Que fais-tu ?", a: "Je teste chaque œil à la grille d’Amsler, je dilate et je fais un OCT maculaire. Une métamorphopsie récente évoque une DMLA néovasculaire : référence en rétine en quelques jours pour anti-VEGF, car le délai compte pour la vision finale." }
  },
  {
    id: "retinopathie-diabetique", order: 9, group: "retine",
    card: { nk: 2,
      lead: "Les capillaires fuient et se bouchent ; l’ischémie libère du VEGF : néovaisseaux.",
      keys: [
        "Microanévrismes, hémorragies, exsudats, nodules cotonneux.",
        "Sévère : règle **4-2-1**.",
        "Proliférante : rétine en quelques jours.",
        "PIO élevée : iris avant dilatation et gonioscopie (néovaisseaux de l’angle)."
      ],
      ask: { q: "NVD et PIO 26 mmHg : pourquoi la gonioscopie ?", a: "Les néovaisseaux de l’angle peuvent apparaître avant ceux de l’iris visibles à la fente. Les voir tôt permet de traiter l’ischémie (PRP, anti-VEGF) avant que la membrane fibrovasculaire ne ferme l’angle de façon permanente." }
    },
    title: "Rétinopathie diabétique et œdème maculaire diabétique", en: "Diabetic retinopathy and diabetic macular edema",
    urgency: "rapide",
    what: "Le diabète abîme les petits vaisseaux de la rétine : ils fuient (exsudats, œdème) et se bouchent (ischémie). La rétine ischémique libère du VEGF qui fait pousser des néovaisseaux : on passe alors de la forme non proliférante (non-proliferative diabetic retinopathy, NPDR) à la forme proliférante (proliferative diabetic retinopathy, PDR).",
    look: [
      "Non proliférante : **microanévrismes** (petits points rouges), hémorragies en points et en taches (dot-blot), exsudats durs jaunes, nodules cotonneux blancs.",
      "Sévérité : **veines en chapelet** (venous beading) et **IRMA** (anomalies microvasculaires intrarétiniennes) ; **règle 4-2-1** de la forme sévère : hémorragies nombreuses dans les 4 quadrants, chapelet dans 2 quadrants ou IRMA nettes dans 1 (un critère suffit).",
      "Proliférante : néovaisseaux sur la papille (**NVD**, neovascularization of the disc) ou ailleurs sur la rétine (**NVE**, neovascularization elsewhere), fins lacis à la surface de la rétine ; puis hémorragie du vitré et décollement tractionnel.",
      "**Œdème maculaire diabétique** (diabetic macular edema) à l’OCT : rétine épaissie avec kystes sombres intrarétiniens, parfois liquide sous-rétinien et points hyperréflectifs (exsudats).",
      "Angiographie à la fluorescéine : les néovaisseaux fuient (taches blanches floues) et la périphérie non perfusée paraît sombre, sans capillaires."
    ],
    why: "L’ischémie qui fait pousser des néovaisseaux sur la papille en fait aussi pousser sur l’iris et dans l’angle : c’est le glaucome néovasculaire (voir la fiche « Glaucome néovasculaire »). D’où l’examen de l’iris avant dilatation et la gonioscopie chez tout diabétique avec rétinopathie avancée ou PIO élevée. En cornée et en cataracte : l’épithélium du diabétique guérit lentement, et la chirurgie de cataracte peut aggraver un œdème maculaire diabétique.",
    action: [
      "PDR (NVD, NVE, hémorragie du vitré) : référer en rétine en quelques jours pour photocoagulation panrétinienne (PRP, panretinal photocoagulation : laser sur la rétine périphérique ischémique pour réduire le VEGF) et/ou anti-VEGF.",
      "Rétinopathie sévère, PIO élevée ou hémorragie du vitré : examiner l’iris à fort grossissement avant de dilater et faire une gonioscopie pour chercher des néovaisseaux de l’angle (NVA).",
      "Œdème maculaire qui touche le centre : référer en rétine (anti-VEGF) ; avant une chirurgie de cataracte, traiter ou stabiliser l’œdème d’abord et prévoir un suivi OCT rapproché.",
      "Rappeler avec le médecin de famille l’importance du contrôle de la glycémie, de la tension artérielle et des lipides."
    ],
    pitfalls: [
      "Dilater avant de regarder l’iris : les fins néovaisseaux du rebord pupillaire deviennent plus difficiles à voir.",
      "Confondre IRMA (dans l’épaisseur de la rétine, fuient peu) et néovaisseaux (à la surface, fuient beaucoup à l’angiographie).",
      "Attribuer au glaucome les déficits périphériques du champ visuel d’un diabétique traité par PRP : le laser laisse lui-même des déficits."
    ],
    pearl: { q: "Pourquoi fais-tu une gonioscopie chez un diabétique avec des NVD et une PIO à 26 mmHg ?", a: "Les néovaisseaux de l’angle peuvent apparaître avant ceux de l’iris visibles à la fente. Les voir tôt permet de traiter l’ischémie (PRP, anti-VEGF) avant que la membrane fibrovasculaire ne ferme l’angle de façon permanente." }
  }
]);

// Photos des entrées A5 (clés a5-<id>)
G.OPH.photos = G.OPH.photos || {};
(function (add) { Object.keys(add).forEach(function (k) { G.OPH.photos[k] = (G.OPH.photos[k] || []).concat(add[k]); }); })({
  "a5-cataracte-nucleaire": [
    { id: "OPH-234", caption: "Sclérose nucléaire vue en coupe optique à la lampe à fente", look: "Suis le faisceau de la cornée jusqu’au centre du cristallin et compare noyau et cortex.", reveal: ["Fente oblique : fine ligne courbe de la cornée à gauche, puis la tranche du cristallin", "Noyau central laiteux, jaune pâle, plus opaque que le cortex qui l’entoure", "Pupille dilatée : la coupe montre l’opacité en profondeur, au centre du cristallin"] },
    { id: "OPH-233", caption: "Sclérose nucléaire : aspect laiteux de l’aire pupillaire", look: "Regarde la teinte globale de la pupille dilatée.", reveal: ["Aire pupillaire gris-laiteux diffuse, plus dense au centre", "Pas de rayons ni de plaque : l’opacité est homogène et centrale"] },
    { id: "OPH-235", caption: "Cataracte nucléaire brunescente à la lampe à fente", look: "Observe la couleur du cristallin d’un bord à l’autre de l’image.", reveal: ["Teinte jaune-brun qui devient ambre puis brun-rouge foncé vers la droite de l’image", "Fines stries blanchâtres en rayons superposées : opacités corticales associées", "Un noyau de cette couleur annonce une phaco à forte énergie"] },
    { id: "OPH-236", caption: "Cataracte nucléaire brunescente à la lampe à fente", look: "Compare la couleur du noyau et le peu de reflet rouge qui passe.", reveal: ["Noyau jaune-brun qui occupe presque toute la pupille", "Reflet rouge seulement en bordure droite de la pupille : la lumière traverse mal le noyau"] }
  ],
  "a5-cataracte-corticale-scp": [
    { id: "OPH-241", caption: "Cataracte sous-capsulaire postérieure en éclairage direct", look: "Cherche une plaque au centre, en arrière du cristallin.", reveal: ["Plaque granuleuse jaune doré au centre et à droite de l’aire pupillaire", "Aspect scintillant typique de la face postérieure", "Le reste du cristallin est relativement clair"] },
    { id: "OPH-244", caption: "Plaque sous-capsulaire postérieure en rétroillumination", look: "Regarde ce qui se découpe sur le reflet rouge-orangé.", reveal: ["Reflet rouge-orangé du fond qui remplit la pupille dilatée", "Plaque granuleuse irrégulière au centre et en haut du reflet", "La rétroillumination montre l’étendue réelle de la plaque"] },
    { id: "OPH-246", caption: "Cataracte mixte : polaire antérieure, sous-capsulaire postérieure et corticale", look: "Repère plusieurs types d’opacités dans le même cristallin.", reveal: ["Opacité blanche dense au centre de la pupille (composante polaire antérieure)", "Fins rayons blanchâtres en périphérie : composante corticale", "Composante sous-capsulaire postérieure centrale"] },
    { id: "OPH-247", caption: "Cataracte suturale congénitale", look: "Observe la forme de l’opacité centrale.", reveal: ["Opacité blanche en Y au centre du cristallin, le long des sutures", "Nombreux petits points blanchâtres autour", "Cristallin par ailleurs assez transparent"] }
  ],
  "a5-cataracte-mature": [
    { id: "OPH-210", caption: "Cataracte mature visible à l’œil nu", look: "Compare les deux pupilles sans lampe à fente.", reveal: ["Pupille blanc-gris bien visible d’un côté (œil droit)", "L’autre pupille est plus sombre : asymétrie évidente", "Aucun reflet rouge possible à travers une telle opacité"] },
    { id: "OPH-237", caption: "Cataracte brunescente mature", look: "Regarde la couleur et l’étendue de l’opacité.", reveal: ["Noyau ambre-brun très dense qui remplit toute la pupille", "Aucun reflet rouge ni détail du fond"] },
    { id: "OPH-243", caption: "Cataracte corticale mature blanche", look: "Décris la couleur et le motif de l’opacité.", reveal: ["Cristallin blanc nacré dans toute la pupille", "Rayons blanchâtres qui convergent vers le centre : origine corticale"] },
    { id: "OPH-240", caption: "Cataracte morgagnienne : cortex résorbé, noyau descendu", look: "Repère la position du noyau dans la pupille.", reveal: ["Noyau jaune-brun posé dans la partie inférieure du sac", "Zone sombre au-dessus : cortex résorbé", "Stade hypermature : risque de glaucome phacolytique"] }
  ],
  "a5-opacification-capsulaire": [
    { id: "OPH-248", caption: "Opacification de la capsule postérieure derrière un implant", look: "Regarde l’aire pupillaire dilatée, en arrière de l’implant.", reveal: ["Plaques blanc-gris irrégulières dans l’aire pupillaire, surtout en haut et en bas", "Zones claires intercalées : opacification encore partielle", "Membrane qui se forme derrière un implant de chambre postérieure"] }
  ],
  "a5-bscan": [
    { id: "OPH-205", caption: "B-scan : position de la sonde pour une coupe transverse de 12 h", look: "Compare la position de la sonde et la région examinée.", reveal: ["Sonde posée dans le bas de l’œil, et « T12P » affiché en bas à droite : coupe transverse de 12 h, on examine à l’opposé de la sonde", "Flèche L–F : axe le long duquel on glisse la sonde, entre limbe (L) et cul-de-sac (F, fornix)", "Écran : sonde à gauche, paroi postérieure courbe à droite, vitré noir", "Gain affiché à 90 dB : réglage élevé pour voir les échos faibles"] },
    { id: "OPH-207", caption: "B-scan : coupe transverse du méridien de 3 h", look: "Observe l’orientation de la flèche par rapport à la sonde.", reveal: ["Flèche horizontale F–L : même axe de glissement, entre cul-de-sac et limbe", "« T3P » affiché en bas à droite : coupe transverse de 3 h, sonde posée du côté opposé au méridien examiné", "Paroi postérieure courbe à droite de l’écran, vitré sombre"] },
    { id: "OPH-209", caption: "B-scan : coupe longitudinale maculaire", look: "Regarde l’orientation de la sonde et les repères affichés à l’écran.", reveal: ["Sonde tenue sur la paupière fermée, en coupe longitudinale", "Écran : OD et L9 affichés, soit le méridien de 9 h, du côté temporal (celui de la macula) dans un œil droit", "Paroi postérieure lisse, vitré noir"] },
    { id: "OPH-197", caption: "B-scan d’une nanophtalmie", look: "Observe la taille de la cavité et l’épaisseur de la paroi.", reveal: ["Cavité vitréenne petite et paroi postérieure épaisse, très réfléchissante", "Compas jaune sur la paroi postérieure : 2,38 mm affichés en haut à gauche", "Œil court à sclère épaisse : risque de fermeture de l’angle et d’effusion uvéale"] }
  ],
  "a5-decollement-retine": [
    { id: "OPH-287", caption: "Décollement de rétine rhegmatogène, macula décollée (montage)", look: "Cherche la limite entre rétine à plat et rétine soulevée.", reveal: ["Flèches blanches : limite du décollement, qui passe tout près de la papille", "Du côté décollé, à droite des flèches, la rétine est plus terne et la macula est incluse", "Montage grand champ : le décollement couvre une grande partie de la rétine"] },
    { id: "OPH-192", caption: "Pôle postérieur d’un décollement de rétine macula décollée", look: "Regarde la macula et la texture de la rétine autour.", reveal: ["Papille à droite, macula au centre de l’image", "Aspect subtil : rétine un peu terne et grisâtre autour de la macula", "Leçon : une photo centrée peut sous-estimer un décollement ; examiner la périphérie dilatée"] },
    { id: "OPH-263", caption: "Décollement tractionnel dans une rétinopathie diabétique proliférante", look: "Repère les membranes et leur trajet.", reveal: ["Membranes fibrovasculaires blanc-jaune en anneau le long des arcades, autour du pôle postérieur", "Rétine tirée et plissée sous ces membranes", "Hémorragies rouge foncé dispersées"] }
  ],
  "a5-decollement-choroidien": [
    { id: "OPH-291", caption: "Décollement choroïdien au fond d’œil", look: "Décris la couleur, la surface et la position de l’élévation.", reveal: ["Grande élévation lisse, brun foncé, sur la moitié droite de l’image", "Papille à gauche, rétine à plat de ce côté", "Surface lisse et ferme, sans plis ni déchirure visible"] },
    { id: "OPH-196", caption: "Effusion choroïdienne d’une sclérite postérieure (montage)", look: "Regarde la périphérie tout autour du pôle postérieur.", reveal: ["Plusieurs dômes gris-jaunâtres en périphérie, tout autour du pôle postérieur", "Papille et macula au centre, encore à plat", "Contexte : sclérite postérieure"] },
    { id: "OPH-290", caption: "B-scan : décollements choroïdiens séreux qui s’embrassent", look: "Observe la forme des membranes et la couleur de leur contenu.", reveal: ["Quatre coupes : membranes épaisses en dôme, convexes vers le centre de l’œil", "Contenu noir (anéchogène) sous les dômes : liquide séreux", "En haut à gauche, les dômes se touchent au centre : aspect « kissing »"] },
    { id: "OPH-195", caption: "B-scan : décollements choroïdiens hémorragiques appositionnels", look: "Compare le contenu des dômes à celui de l’image séreuse.", reveal: ["Masses échogènes grises en dôme qui remplissent presque toute la cavité", "Petit espace vitréen noir résiduel au centre", "Caillot non liquéfié, sans décollement de rétine"] }
  ],
  "a5-dmla": [
    { id: "OPH-264", caption: "DMLA précoce", look: "Cherche de petits dépôts autour de la fovéa.", reveal: ["Quelques petits points jaunes pâles autour de la macula, discrets", "Papille et vaisseaux d’aspect normal", "Forme précoce : pas d’indication de suppléments"] },
    { id: "OPH-265", caption: "DMLA intermédiaire à haut risque", look: "Décris la taille et le nombre des dépôts maculaires.", reveal: ["Nombreux gros drusen jaunes, ronds, groupés à la macula", "Certains se touchent : drusen confluents", "Papille à droite de l’image"] },
    { id: "OPH-212", caption: "DMLA néovasculaire : hémorragie sous-rétinienne maculaire", look: "Regarde la macula, à droite de la papille.", reveal: ["Hémorragie rouge foncé bien délimitée à la macula", "Papille à gauche de l’image", "Signe de forme néovasculaire : référence rapide pour anti-VEGF"] },
    { id: "OPH-213", caption: "OCT maculaire : drusen et atrophie", look: "Suis la ligne de l’épithélium pigmentaire et regarde sous elle.", reveal: ["Dépression fovéolaire au centre de la coupe", "Petites bosses de la ligne de l’épithélium pigmentaire : drusen", "Sous une zone centrale, signal plus clair et plus profond dans la choroïde : atrophie"] },
    { id: "OPH-266", caption: "OCT : décollement drusénoïde de l’épithélium pigmentaire", look: "Compare les deux coupes et la forme de l’épithélium pigmentaire.", reveal: ["Deux coupes (A et B) avec la ligne de balayage verte sur l’image infrarouge", "Élévations en dôme de l’épithélium pigmentaire au centre", "Petits points clairs groupés au centre de l’image infrarouge"] }
  ],
  "a5-retinopathie-diabetique": [
    { id: "OPH-215", caption: "Rétinopathie diabétique non proliférante avec exsudats", look: "Cherche les dépôts jaunes et leur distance du centre.", reveal: ["Exsudats durs jaunes regroupés en haut et à gauche de la fovéa", "Image centrée sur la macula : des exsudats près du centre font craindre un œdème maculaire"] },
    { id: "OPH-258", caption: "Rétinopathie non proliférante sévère avec IRMA", look: "Regarde entre les arcades vasculaires, à fort grossissement.", reveal: ["Nombreuses petites hémorragies en points et en taches au pôle postérieur", "Fins vaisseaux irréguliers et tortueux dans la rétine (IRMA)", "Forme non proliférante sévère"] },
    { id: "OPH-259", caption: "Rétinopathie diabétique proliférante : néovaisseaux papillaires", look: "Regarde la surface de la papille.", reveal: ["Papille à gauche de l’image, couverte d’un lacis de fins vaisseaux anormaux (NVD)", "Hémorragies en taches dispersées au pôle postérieur", "Signe proliférant : chercher aussi des néovaisseaux de l’iris et de l’angle"] },
    { id: "OPH-260", caption: "Angiographie grand champ d’une rétinopathie proliférante", look: "Compare le centre et la périphérie de l’angiographie.", reveal: ["Grande zone blanche floue près de la papille : fuite des néovaisseaux", "Régions plus sombres, pauvres en vaisseaux, en périphérie : non-perfusion", "Vaisseaux blancs sur fond gris : angiographie à la fluorescéine"] },
    { id: "OPH-261", caption: "OCT d’un œdème maculaire diabétique", look: "Mesure du regard l’épaisseur de la rétine de part et d’autre de la fovéa.", reveal: ["Coupe verticale indiquée par la ligne verte sur l’image infrarouge", "Rétine épaissie d’un côté de la fovéa, avec petits espaces kystiques sombres", "Dépression fovéolaire déformée"] }
  ]
});

// QCM A-201 à A-209 (topic a-retine)
G.OPH.quiz = (G.OPH.quiz || []).concat([
  {
    id: "A-201", module: "A", topic: "a-retine", type: "image", level: 1, trap: false,
    stem: "Un patient greffé de cornée utilise de l’acétate de prednisolone depuis plusieurs années. Il se plaint d’éblouissement par les phares la nuit et de difficulté à lire. Voici l’image obtenue en rétroillumination, pupille dilatée. Quelle est la trouvaille la plus probable ?",
    figure: { type: "photo", id: "OPH-244" },
    options: [
      "Cataracte corticale en rayons périphériques",
      "Cataracte nucléaire brunescente",
      "Cataracte sous-capsulaire postérieure",
      "Rejet endothélial avec précipités"
    ],
    answer: 2,
    explain: "Une plaque granuleuse centrale sur le reflet rouge, chez un patient sous stéroïdes au long cours, est typique d’une cataracte sous-capsulaire postérieure. Elle cause éblouissement et gêne de près ; il faut aussi mesurer la PIO (réponse cortisonique).",
    why: [
      "Les rayons corticaux partent de la périphérie vers le centre comme les rayons d’une roue ; ici, c’est une plaque granuleuse centrale.",
      "Le noyau brunescent donne une teinte jaune-brun diffuse et une myopisation, pas une plaque granuleuse sur le reflet rouge.",
      "Exact : plaque centrale postérieure, stéroïdes au long cours, éblouissement et gêne de près.",
      "Le rejet se voit sur la cornée (précipités, œdème), pas comme une plaque sur le reflet rouge du cristallin."
    ]
  },
  { id: "A-202", module: "A", topic: "a-retine", type: "physiopathologie", level: 2, trap: false,
    stem: "Une patiente de 74 ans avec une dystrophie de Fuchs (guttae confluentes, vision floue le matin) dit lire sans lunettes depuis un an. La réfraction montre une myopisation et le noyau est brun foncé. Quel énoncé est juste ?",
    figure: null,
    options: [
      "Le noyau plus réfringent explique la myopie ; sa dureté augmentera l’énergie phaco et le risque endothélial",
      "La myopisation signe un kératocône tardif causé par l’œdème de Fuchs ; il faut une topographie avant tout",
      "La sclérose nucléaire n’a pas d’effet réfractif ; il faut chercher une cause rétinienne à cette myopisation",
      "Mieux vaut attendre que la cataracte soit mature pour combiner phaco et greffe en une seule chirurgie"
    ],
    answer: 0,
    explain: "La sclérose nucléaire augmente l’indice de réfraction du noyau : myopisation et « seconde vue ». Un noyau dur demande plus d’énergie d’ultrasons, ce qui accroît la perte endothéliale sur une cornée de Fuchs déjà fragile : évaluer l’endothélium et planifier tôt avec la cornée.",
    why: [
      "Exact : myopisation d’origine nucléaire et risque endothélial accru par un noyau dur.",
      "L’œdème de Fuchs ne crée pas de kératocône ; la myopisation s’explique par le noyau.",
      "Faux : la myopisation est justement l’effet réfractif classique de la sclérose nucléaire.",
      "Attendre durcit encore le noyau, augmente l’énergie nécessaire et menace davantage l’endothélium."
    ] },
  {
    id: "A-203", module: "A", topic: "a-retine", type: "image", level: 1, trap: false,
    stem: "Un patient suivi pour un glaucome à angle ouvert stable signale depuis 5 jours une baisse de vision centrale et des lignes déformées d’un œil. Au fond d’œil dilaté, vous voyez ceci. Quelle est la conduite la plus appropriée ?",
    figure: { type: "photo", id: "OPH-212" },
    options: [
      "Suppléments de type AREDS2 et contrôle dans 6 mois",
      "Champ visuel 24-2 pour documenter une progression",
      "Ajout d’un deuxième hypotenseur oculaire topique",
      "Référence en rétine en quelques jours pour anti-VEGF"
    ],
    answer: 3,
    explain: "Une hémorragie sous-rétinienne maculaire avec métamorphopsies récentes évoque une DMLA néovasculaire. Les injections d’anti-VEGF doivent commencer rapidement pour limiter la perte de vision centrale.",
    why: [
      "Les suppléments ne traitent pas une forme néovasculaire active ; attendre 6 mois ferait perdre la vision centrale.",
      "Le problème est maculaire, pas glaucomateux ; le champ serait d’ailleurs faussé par la lésion centrale.",
      "La PIO n’explique ni une hémorragie maculaire ni des métamorphopsies.",
      "Exact : DMLA néovasculaire probable, référence rapide pour anti-VEGF."
    ]
  },
  { id: "A-204", module: "A", topic: "a-retine", type: "image", level: 3, trap: false,
    stem: "Un patient très hypermétrope (environ +12 D) est envoyé en glaucome pour un angle étroit. La biométrie ultrasonique montre un œil très court et le B-scan montre ceci. Quel risque faut-il signaler au chirurgien avant toute chirurgie intraoculaire ?",
    figure: { type: "photo", id: "OPH-197" },
    options: [
      "Décollement postérieur du vitré massif pendant la phaco",
      "Effusion uvéale et fermeture de l’angle (nanophtalmie)",
      "Décompensation endothéliale par cornée trop grande",
      "Rupture capsulaire par zonules anormalement tendues"
    ],
    answer: 1,
    explain: "Œil très court à paroi épaisse : nanophtalmie. La sclère épaisse gêne le drainage de la choroïde : risque d’effusion uvéale, spontanée ou pendant la chirurgie, et de fermeture de l’angle.",
    deep: "Un œil très court à paroi sclérale épaisse évoque une nanophtalmie. La sclère épaisse gêne le drainage veineux et liquidien de la choroïde : risque d’effusion uvéale, spontanée ou pendant la chirurgie, et de fermeture de l’angle par un cristallin relativement gros dans un petit segment antérieur.",
    why: [
      "Le décollement du vitré n’est pas le risque propre à un œil court à sclère épaisse.",
      "Exact : nanophtalmie, avec risque d’effusion uvéale et de fermeture de l’angle.",
      "La nanophtalmie s’accompagne plutôt d’une petite cornée ; une grande cornée n’est pas en cause.",
      "Le risque caractéristique n’est pas zonulaire ; c’est l’effusion uvéale et la fermeture de l’angle."
    ] },
  {
    id: "A-205", module: "A", topic: "a-retine", type: "image", level: 2, trap: false,
    stem: "Quatre jours après une trabéculectomie, la PIO est à 3 mmHg, la chambre antérieure est peu profonde et le patient a peu de douleur. Le fond d’œil est mal vu ; le B-scan montre ceci. Quel est le diagnostic le plus probable ?",
    figure: { type: "photo", id: "OPH-290" },
    options: [
      "Décollements choroïdiens séreux par hypotonie",
      "Décollement de rétine rhegmatogène total en V",
      "Décollement postérieur du vitré avec hémorragie",
      "Hémorragie suprachoroïdienne avec gros caillot"
    ],
    answer: 0,
    explain: "Des dômes épais, convexes, à contenu anéchogène, qui se touchent presque au centre, sont des décollements choroïdiens séreux. Avec une PIO basse et peu de douleur après une chirurgie filtrante, l’hypotonie (surfiltration ou fuite) en est la cause.",
    why: [
      "Exact : dômes lisses à contenu noir, dans un contexte d’hypotonie postopératoire.",
      "La rétine décollée forme une membrane attachée au nerf optique, pas des dômes épais à contenu liquide.",
      "Le vitré décollé est fin, très mobile et peu réfléchissant ; il ne forme pas de dômes convexes.",
      "L’hémorragie donne un contenu échogène, une douleur brutale et une PIO plutôt élevée."
    ]
  },
  { id: "A-206", module: "A", topic: "a-retine", type: "diagnostic", level: 3, trap: true,
    stem: "Une patiente de 80 ans a une cataracte blanche et gonflée à l’œil droit. Depuis hier : œil droit rouge et douloureux, PIO 50 mmHg, cornée œdémateuse. La chambre antérieure est très étroite à droite, mais profonde à gauche ; à la gonioscopie, l’angle est fermé à droite et grand ouvert à gauche. Quel est le diagnostic le plus probable ?",
    figure: null,
    options: [
      "Glaucome phacolytique par fuite de protéines",
      "Crise aiguë de fermeture primaire de l’angle",
      "Glaucome phacomorphique par cristallin gonflé",
      "Glaucome néovasculaire à angle fermé"
    ],
    answer: 2,
    explain: "Une cataracte gonflée pousse l’iris vers l’avant et ferme l’angle : glaucome phacomorphique. L’indice : la chambre est bien plus étroite que celle de l’autre œil. Dans la fermeture primaire, les deux yeux sont étroits.",
    why: [
      "Dans le phacolytique, l’angle est ouvert et la chambre profonde, avec des particules blanches ; ici l’angle est fermé.",
      "Une fermeture primaire survient sur deux yeux courts : l’œil adelphe aurait aussi une chambre étroite.",
      "Exact : cataracte gonflée, angle fermé d’un seul côté, œil adelphe profond.",
      "Il faudrait des néovaisseaux sur l’iris et dans l’angle, avec une cause d’ischémie rétinienne."
    ] },
  { id: "A-207", module: "A", topic: "a-retine", type: "image", level: 2, trap: false,
    stem: "Un patient diabétique est adressé pour une PIO à 26 mmHg. Le fond d’œil montre ceci. Quelle combinaison décrit le mieux la trouvaille et la conduite ?",
    figure: { type: "photo", id: "OPH-259" },
    options: [
      "Excavation glaucomateuse avancée ; ajouter une goutte et refaire un champ visuel",
      "Œdème papillaire ; imagerie cérébrale urgente puis ponction lombaire",
      "Drusen papillaires ; rassurer le patient et faire une autofluorescence",
      "Néovaisseaux papillaires ; rétine rapidement et gonioscopie"
    ],
    answer: 3,
    explain: "Un lacis de fins vaisseaux à la surface de la papille est une néovascularisation papillaire : rétinopathie diabétique proliférante. Référer vite en rétine et chercher des néovaisseaux de l’angle, car la PIO monte.",
    deep: "Le lacis de fins vaisseaux à la surface de la papille, avec des hémorragies rétiniennes, correspond à des néovaisseaux papillaires (NVD) : rétinopathie diabétique proliférante. Il faut une PRP et/ou des anti-VEGF rapidement, et une gonioscopie pour chercher des NVA, car la PIO élevée peut signaler un glaucome néovasculaire débutant.",
    why: [
      "La papille est couverte de vaisseaux anormaux, pas excavée ; la cause de la PIO doit être cherchée avant d’ajouter des gouttes.",
      "L’œdème papillaire brouille les bords avec des hémorragies en flammèches, sans lacis néovasculaire à la surface.",
      "Les drusen papillaires sont des corps jaunâtres réfringents, sans néovaisseaux ni hémorragies rétiniennes dispersées.",
      "Exact : NVD (rétinopathie proliférante), traitement rapide de l’ischémie et recherche de NVA."
    ] },
  {
    id: "A-208", module: "A", topic: "a-retine", type: "cat", level: 1, trap: true,
    stem: "Un myope fort de 58 ans voit des éclairs et une pluie de mouches volantes depuis 2 jours, puis un voile qui monte du bas de son champ. AV 6/6. Au fond d’œil : décollement de rétine supérieur, bulleux, macula encore attachée, déchirure en fer à cheval à 12 h. Quelle conduite ?",
    figure: null,
    options: [
      "Rendez-vous en rétine dans 1 à 2 semaines puisque l’AV est normale",
      "Appel en rétine le jour même pour une réparation rapide",
      "Laser de barrage au cabinet et contrôle dans un mois",
      "Positionnement tête basse à domicile et contrôle dans une semaine"
    ],
    answer: 1,
    explain: "Un décollement rhegmatogène macula attachée, surtout supérieur et bulleux, peut atteindre la macula en quelques heures ou jours. C’est la situation la plus urgente : on appelle la rétine le jour même pour réparer avant que la vision centrale ne soit perdue.",
    why: [
      "Piège : l’AV normale signifie que la macula est encore attachée, raison de plus pour agir vite.",
      "Exact : macula attachée = urgence le jour même.",
      "Le laser de barrage convient à une déchirure sans décollement ou à un décollement très limité, pas à un décollement bulleux.",
      "Aucun positionnement à domicile ne remplace la réparation ; attendre une semaine expose la macula."
    ]
  },
  {
    id: "A-209", module: "A", topic: "a-retine", type: "image", level: 1, trap: false,
    stem: "Trois ans après une chirurgie de cataracte, un patient avec glaucome avancé (champ résiduel central) note une vision qui se voile lentement. L’implant est bien centré. Voici l’image à la lampe à fente. Quel plan est le plus approprié ?",
    figure: { type: "photo", id: "OPH-248" },
    options: [
      "Échange d’implant au bloc opératoire dès que possible",
      "Iridotomie au laser pour approfondir la chambre",
      "Capsulotomie YAG avec prophylaxie et contrôle de PIO",
      "Trabéculectomie d’abord, laser capsulaire ensuite"
    ],
    answer: 2,
    explain: "Les plaques blanc-gris derrière l’implant sont une opacification capsulaire postérieure. La capsulotomie au laser Nd:YAG la traite mais peut faire monter la PIO : chez un glaucomateux avancé, on donne un alpha-agoniste en prophylaxie et on remesure la PIO après.",
    why: [
      "L’implant est clair et centré ; c’est la capsule derrière lui qui est opaque.",
      "Le problème n’est pas l’angle ; une iridotomie ne dégage pas l’axe visuel.",
      "Exact : YAG, prophylaxie hypotensive et contrôle de la PIO.",
      "Rien n’indique une PIO non contrôlée ; la chirurgie filtrante ne traite pas une opacification capsulaire."
    ]
  }
]);

// Glossaire : termes nouveaux
G.OPH.glossary = G.OPH.glossary || {};
Object.assign(G.OPH.glossary, {
  "sclérose nucléaire": "Durcissement et jaunissement du noyau du cristallin avec l’âge ; début de la cataracte nucléaire, souvent avec myopisation.",
  "seconde vue": "Retour de la vision de près sans lunettes chez un presbyte, causé par la myopisation d’une cataracte nucléaire.",
  "LOCS III": "Lens Opacities Classification System III : échelle standardisée qui grade les cataractes nucléaire, corticale et sous-capsulaire postérieure par comparaison à des photos de référence.",
  "cataracte sous-capsulaire postérieure": "Plaque granuleuse au centre de la face postérieure du cristallin ; liée aux stéroïdes, au diabète, à la radiothérapie ; cause éblouissement et gêne de près.",
  "rétroillumination": "Éclairage qui utilise le reflet rouge du fond (pupille dilatée) : les opacités du cristallin ou de la cornée se découpent sur fond orangé.",
  "cataracte morgagnienne": "Cataracte hypermature : cortex liquéfié ou résorbé, noyau qui descend au fond du sac capsulaire.",
  "bleu trypan": "Colorant vital qui teint la capsule antérieure (capsulorhexis sans reflet rouge) ou le greffon de DMEK pour mieux le voir.",
  "opacification capsulaire postérieure": "Voile de la capsule postérieure derrière l’implant, mois ou années après une chirurgie de cataracte ; traitée par capsulotomie YAG.",
  "perles d’Elschnig": "Petites bulles translucides formées par la repousse de cellules du cristallin sur la capsule postérieure.",
  "capsulotomie YAG": "Ouverture au laser Nd:YAG de la capsule postérieure opacifiée ; risques : pic de PIO, œdème maculaire cystoïde, décollement de rétine.",
  "B-scan": "Échographie oculaire en deux dimensions : montre vitré, rétine, choroïde et masses quand le fond d’œil n’est pas visible.",
  "nanophtalmie": "Œil très court à sclère épaisse avec forte hypermétropie ; risque de fermeture de l’angle et d’effusion uvéale, surtout autour d’une chirurgie.",
  "effusion uvéale": "Accumulation de liquide sous la choroïde et le corps ciliaire, spontanée (nanophtalmie) ou chirurgicale ; peut pousser l’iris et le cristallin vers l’avant.",
  "rhegmatogène": "Se dit d’un décollement de rétine causé par une déchirure ou un trou de la rétine.",
  "signe de Shafer": "Grains de pigment (poussière de tabac) dans le vitré antérieur, vus à la fente ; fortement associé à une déchirure de la rétine.",
  "décollement postérieur du vitré": "Séparation du vitré et de la rétine avec l’âge ; cause éclairs et mouches volantes et peut provoquer une déchirure.",
  "décollement choroïdien": "Soulèvement de la choroïde par du liquide (séreux) ou du sang (hémorragique) entre choroïde et sclère ; dômes bruns lisses en périphérie.",
  "hémorragie suprachoroïdienne": "Saignement entre choroïde et sclère, souvent pendant ou après une chirurgie : douleur brutale, PIO élevée, chambre plate.",
  "signe du T": "Au B-scan, liquide sous la capsule de Tenon autour du nerf optique dessinant un T : signe de sclérite postérieure.",
  "DMLA": "Dégénérescence maculaire liée à l’âge : forme sèche (drusen, atrophie) ou néovasculaire (vaisseaux anormaux sous la macula, hémorragie, liquide).",
  "drusen": "Dépôts jaunes sous l’épithélium pigmentaire de la rétine ; leur taille et leur nombre définissent les stades de la DMLA.",
  "atrophie géographique": "Forme avancée de DMLA sèche : zone d’atrophie de l’épithélium pigmentaire aux bords nets, où l’on voit les vaisseaux choroïdiens.",
  "grille d’Amsler": "Quadrillage regardé un œil à la fois pour dépister des lignes déformées ou une zone manquante au centre (maladie maculaire).",
  "microanévrismes": "Petites dilatations des capillaires rétiniens visibles comme des points rouges ; premier signe de rétinopathie diabétique.",
  "veines en chapelet": "Veines rétiniennes au calibre irrégulier, en grains de chapelet ; signe d’ischémie dans la rétinopathie diabétique sévère.",
  "IRMA": "Anomalies microvasculaires intrarétiniennes : petits vaisseaux tortueux dans l’épaisseur de la rétine, signe de rétinopathie non proliférante sévère.",
  "règle 4-2-1": "Rétinopathie non proliférante sévère si un critère : hémorragies nombreuses dans les 4 quadrants, veines en chapelet dans 2 quadrants ou IRMA nettes dans 1.",
  "NVD": "Néovaisseaux sur la papille (neovascularization of the disc) : signe de rétinopathie proliférante ischémique.",
  "NVE": "Néovaisseaux ailleurs sur la rétine (neovascularization elsewhere), souvent le long des arcades vasculaires.",
  "œdème maculaire diabétique": "Épaississement de la macula par fuite capillaire chez le diabétique ; kystes intrarétiniens à l’OCT ; traité surtout par anti-VEGF s’il touche le centre."
});
