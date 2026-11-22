var G = (typeof window !== 'undefined') ? window : globalThis;
G.OPH = G.OPH || {};

/* ===== Section A5 (entrées 10 à 17) : rétine, nerf optique, neuro ===== */
G.OPH.A = G.OPH.A || {};
G.OPH.A.recog = (G.OPH.A.recog || []).concat([
  {
    id: "occlusions-retiniennes", order: 10, group: "retine",
    card: { nk: 2,
      lead: "Occlusion artérielle : AVC de l’œil. Occlusion veineuse : hémorragies, œdème maculaire, parfois ischémie.",
      keys: [
        "OACR : **tache rouge cerise** : urgence AVC.",
        "OACR ≥ 50 ans : VS, CRP (artérite).",
        "OVCR : hémorragies 4 quadrants, veines dilatées.",
        "OVCR ischémique : gonioscopie ≈ mensuelle (glaucome des 90 jours)."
      ],
      ask: { q: "Pourquoi la fovéa reste-t-elle rouge dans une OACR ?", a: "La fovéa n’a ni couches internes ni vaisseaux rétiniens : elle reste transparente et laisse voir la choroïde rouge, alors que la rétine interne autour, ischémique, blanchit." }
    },
    title: "Occlusions artérielles et veineuses de la rétine",
    en: "Retinal artery and vein occlusions (CRAO, BRAO, CRVO, BRVO)",
    urgency: "urgent",
    what: "Une occlusion artérielle bloque l’arrivée du sang à la rétine (**OACR** pour l’artère centrale, **OBAR** pour une branche) : la rétine interne meurt en quelques heures, c’est un AVC de l’œil. Une occlusion veineuse bloque la sortie du sang (**OVCR** pour la veine centrale, **OBVR** pour une branche) : le sang reflue et donne hémorragies, œdème maculaire et parfois ischémie de la rétine.",
    look: [
      "OACR (central retinal artery occlusion, CRAO) : rétine du pôle postérieur pâle et opaque, **tache rouge cerise** (cherry-red spot) au centre de la macula, artérioles grêles.",
      "OBAR (branch retinal artery occlusion, BRAO) : blanchiment limité à un secteur ; chercher un embole jaune brillant à une bifurcation artériolaire (**plaque de Hollenhorst**, cholestérol venu de la carotide).",
      "OVCR (central retinal vein occlusion, CRVO) : hémorragies dans les 4 quadrants, veines dilatées et tortueuses, papille gonflée ; aspect « sang et tonnerre » (blood and thunder) si sévère.",
      "OVCR de forme ischémique : AV très basse, DPAR franc, nombreux **nodules cotonneux**, vaste non-perfusion capillaire à l’angiographie ; la forme non ischémique est plus légère, mais peut s’aggraver.",
      "OBVR (branch retinal vein occlusion, BRVO) : hémorragies en éventail limitées au territoire d’une veine, au niveau d’un croisement artérioveineux (l’artériole rigide comprime la veine).",
      "Avant de dilater, après toute OVCR : examen de l’iris et gonioscopie à la recherche de néovaisseaux de l’iris (NVI) et de l’angle (NVA)."
    ],
    why: "Le glaucome et la PIO élevée sont des facteurs de risque d’OVCR, et l’OVCR ischémique peut causer un glaucome néovasculaire, typiquement dans les 3 premiers mois (le **glaucome des 90 jours**) : en clinique de glaucome, c’est toi qui fais la gonioscopie de surveillance. Et le patient âgé qui « voit noir d’un œil » dans ta salle d’attente fait peut-être un AVC rétinien : il doit partir immédiatement à l’urgence.",
    action: [
      "OACR ou OBAR aiguë : diriger IMMÉDIATEMENT vers l’urgence d’un centre de l’AVC pour un bilan d’AVC (imagerie cérébrale, carotides, rythme cardiaque) ; le temps compte, une thrombolyse peut y être discutée dans les premières heures (pratique encore à l’étude).",
      "OACR à 50 ans ou plus : éliminer l’**artérite à cellules géantes** (giant cell arteritis ; céphalée, claudication de la mâchoire) : vitesse de sédimentation (VS), protéine C réactive (CRP) et plaquettes en urgence, stéroïdes sans attendre si suspicion forte.",
      "OVCR ou OBVR : référer rapidement en rétine pour l’œdème maculaire (injections intravitréennes d’anti-VEGF ; un implant de dexaméthasone peut faire monter la PIO) ; tension artérielle (TA), glycémie et lipides au médecin de famille.",
      "OVCR ischémique : iris non dilaté et gonioscopie environ chaque mois pendant les premiers mois ; photocoagulation panrétinienne (PRP) dès l’apparition de NVI ou de NVA plutôt qu’en prévention (étude CVOS, Central Vein Occlusion Study)."
    ],
    pitfalls: [
      "Augmenter les gouttes d’un glaucomateux dont la vision baisse sans avoir dilaté : l’occlusion passe inaperçue.",
      "Lire l’OCT RNFL de l’œil atteint : l’œdème papillaire de l’OVCR l’épaissit faussement (green disease), puis l’atrophie l’amincit ; aucune conclusion glaucomateuse possible pendant des mois.",
      "Ignorer une plaque de Hollenhorst trouvée par hasard : même sans symptôme, c’est un signal d’alarme vasculaire à transmettre au médecin de famille (bilan carotidien)."
    ],
    pearl: { q: "Pourquoi la fovéa reste-t-elle rouge dans une OACR ?", a: "La fovéa n’a ni couches internes ni vaisseaux rétiniens : elle reste transparente et laisse voir la choroïde rouge, alors que la rétine interne autour, ischémique, blanchit. Si une **artère ciliorétinienne** (issue de la circulation ciliaire, celle de la choroïde) existe, une langue de rétine entre la papille et la macula reste rose et la vision centrale peut être épargnée." }
  },
  {
    id: "retinopathie-hypertensive", order: 11, group: "retine",
    card: { nk: 2,
      lead: "L’HTA rétrécit les artérioles ; une poussée fait fuir sang et lipides. Papille gonflée : urgence.",
      keys: [
        "Artérioles fines, croisements artérioveineux pathologiques.",
        "Hémorragies en flammèches, nodules cotonneux, exsudats durs.",
        "Signes nouveaux : prendre la TA sur place.",
        "Œdème papillaire + TA très élevée : urgence immédiate, baisse graduelle."
      ],
      ask: { q: "Nodules cotonneux à 45 ans : premier geste ?", a: "Je prends la TA et je regarde la papille : TA très élevée avec papille gonflée = hypertension maligne, envoi immédiat à l’urgence. Si la TA est normale, je cherche un diabète, un VIH ou une maladie systémique." }
    },
    title: "Rétinopathie hypertensive et hypertension maligne",
    en: "Hypertensive retinopathy / malignant hypertension",
    urgency: "rapide",
    what: "L’hypertension artérielle chronique épaissit et rétrécit les artérioles de la rétine ; une poussée sévère abîme leur paroi et fait fuir sang, plasma et lipides. Quand la papille gonfle en plus, on parle d’**hypertension maligne** (malignant hypertension), une urgence médicale qui menace aussi le cerveau, le cœur et les reins.",
    look: [
      "Rétrécissement artériolaire diffus ou focal : artérioles nettement plus fines que les veines (rapport normal artère/veine d’environ 2/3).",
      "**Croisement artérioveineux pathologique** (AV nicking) : la veine semble pincée ou interrompue de part et d’autre de l’artériole qui la croise.",
      "Hémorragies en flammèches (flame hemorrhages, dans la couche des fibres nerveuses) et nodules cotonneux (cotton-wool spots) : petites taches blanches duveteuses, des infarctus de cette couche.",
      "Exsudats durs jaunes brillants (lipides), parfois disposés en étoile autour de la fovéa.",
      "Papille gonflée aux bords flous en plus de ces signes = hypertension maligne."
    ],
    why: "Le patient de clinique de glaucome est souvent âgé et hypertendu : tu verras ces signes à presque chaque fond d’œil dilaté. L’hypertension est le principal facteur de risque d’OBVR, et le PPP glaucome de l’AAO (2026) ajoute la TA basse comme facteur de risque de glaucome : il faut connaître la TA de ton patient dans les deux sens.",
    action: [
      "Signes chroniques seuls (rétrécissement, croisements) : prendre la TA, la noter au dossier et aviser le médecin de famille.",
      "Hémorragies, nodules cotonneux ou exsudats nouveaux : mesurer la TA sur place ; si elle est très élevée ou avec symptômes (céphalée, douleur thoracique, confusion, essoufflement), envoi immédiat à l’urgence.",
      "Œdème papillaire + TA très élevée = hypertension maligne : urgence médicale immédiate ; la TA est abaissée graduellement à l’urgence, car une chute brutale peut causer une ischémie du nerf optique ou du cerveau.",
      "Nodules cotonneux sans hypertension : chercher une autre cause (diabète, VIH, maladie du tissu conjonctif, emboles)."
    ],
    pitfalls: [
      "Conclure à une hypertension intracrânienne devant deux papilles gonflées sans avoir pris la TA : toujours mesurer la TA devant un œdème papillaire.",
      "Confondre nodule cotonneux et exsudat dur : le premier est blanc duveteux à bords flous (ischémie), le second jaune brillant à bords nets (lipides)."
    ],
    pearl: { q: "Devant des nodules cotonneux et des hémorragies en flammèches chez un homme de 45 ans, que fais-tu avant de parler de l’œil ?", a: "Je prends la TA et je regarde la papille : TA très élevée avec papille gonflée = hypertension maligne, envoi immédiat à l’urgence. Si la TA est normale, je cherche un diabète, un VIH ou une maladie systémique." }
  },
  {
    id: "macula-chirurgicale", order: 12, group: "retine",
    card: { nk: 2,
      lead: "Macula plissée, percée ou soulevée (CRSC) : vision centrale déformée ; l’OCT tranche.",
      keys: [
        "**Métamorphopsies** : grille d’Amsler, un œil à la fois.",
        "Trou maculaire récent : rétine en quelques semaines.",
        "CRSC : chercher TOUS les stéroïdes.",
        "Membrane épirétinienne : fausse l’OCT des cellules ganglionnaires (green disease)."
      ],
      ask: { q: "Sous prednisolone, lignes ondulées d’un œil : ton hypothèse ?", a: "Une CRSC favorisée par le corticostéroïde : je la confirme à l’OCT maculaire (liquide sous la rétine), je planifie une réduction prudente du stéroïde sous couverture antivirale et je réfère en rétine si le liquide persiste. Je vérifie aussi la PIO (réponse cortisonique)." }
    },
    title: "Membrane épirétinienne, trous maculaires et CRSC",
    en: "Epiretinal membrane, macular holes, central serous chorioretinopathy",
    urgency: "rapide",
    what: "La macula (centre de la vision fine) peut être plissée par une **membrane épirétinienne** (epiretinal membrane : pellicule fibreuse à sa surface), percée par un **trou maculaire** (macular hole), ou soulevée par du liquide dans la **CRSC** (choriorétinopathie séreuse centrale, central serous chorioretinopathy). Les trois donnent une vision centrale floue et déformée, et l’OCT maculaire les distingue en quelques secondes.",
    look: [
      "**Métamorphopsies** (lignes droites vues ondulées) : les dépister avec la **grille d’Amsler**, un œil à la fois, à distance de lecture.",
      "Membrane épirétinienne : reflet brillant « cellophane » et plis autour de la macula ; à l’OCT, ligne hyperréflective à la surface qui plisse la rétine et efface le creux fovéolaire.",
      "Trou maculaire de pleine épaisseur (full-thickness macular hole) : petite lésion ronde rouge au centre ; à l’OCT, défaut de toutes les couches jusqu’à l’épithélium pigmentaire.",
      "Trou lamellaire (lamellar hole) : fovéa creusée de façon irrégulière, avec clivage des couches, mais couche externe intacte ; souvent stable. Trou traumatique : après un choc contondant, avec d’autres lésions.",
      "CRSC : bulle ronde de liquide clair sous la macula (soulèvement séreux de la rétine neurosensorielle à l’OCT) ; à l’angiographie, fuite en « tache d’encre » ou en « cheminée » (smokestack)."
    ],
    why: "En cornée, tu prescris des corticostéroïdes chaque jour (rejet de greffe, kératite herpétique stromale, après chirurgie) : la CRSC est favorisée par les stéroïdes de TOUTES les voies, y compris gouttes, crèmes, inhalateurs et vaporisateurs nasaux. En glaucome, une membrane épirétinienne épaissit la macula et fausse l’OCT des cellules ganglionnaires (green disease), et une baisse de vision centrale chez un glaucomateux n’est pas forcément du glaucome.",
    action: [
      "Nouvelles métamorphopsies ou baisse de vision centrale : OCT maculaire le jour même si possible, puis référence en rétine selon la trouvaille.",
      "Trou maculaire de pleine épaisseur récent : rétine en quelques semaines (vitrectomie, gaz, positionnement) ; les résultats sont meilleurs quand le trou est récent.",
      "Membrane épirétinienne : chirurgie (vitrectomie avec pelage) seulement si la gêne est importante ; sinon Amsler et suivi ; en tenir compte dans la planification de la cataracte.",
      "CRSC : inventaire de TOUS les corticostéroïdes, réduction discutée avec les prescripteurs si sécuritaire ; résorption spontanée fréquente en quelques mois ; rétine si persistance ou récidive."
    ],
    pitfalls: [
      "Cesser brusquement le stéroïde d’une greffe à cause d’une CRSC : risque de rejet ; réduire de façon planifiée avec l’équipe de cornée.",
      "Conclure « baisse de vision = progression du glaucome » sans OCT maculaire : une membrane ou un trou explique souvent la baisse et le champ central déprimé.",
      "Confondre trou lamellaire (surveillance) et trou de pleine épaisseur (chirurgie) : c’est l’OCT qui tranche."
    ],
    pearl: { q: "Un homme de 40 ans sous acétate de prednisolone pour une kératite stromale herpétique voit les lignes ondulées d’un œil. Que suspectes-tu ?", a: "Une CRSC favorisée par le corticostéroïde : je la confirme à l’OCT maculaire (liquide sous la rétine), je planifie une réduction prudente du stéroïde sous couverture antivirale et je réfère en rétine si le liquide persiste. Je vérifie aussi la PIO (réponse cortisonique)." }
  },
  {
    id: "peripherie-vitre", order: 13, group: "retine",
    card: { nk: 2,
      lead: "Le vitré se décolle avec l’âge et peut déchirer une rétine fragile.",
      keys: [
        "**Anneau de Weiss** devant la papille : preuve d’un DPV.",
        "Nouveaux flashs ou mouches : périphérie dilatée.",
        "Flashs + rideau ou baisse de vision : rétine le jour même.",
        "Avant la pilocarpine chez un myope : examiner la périphérie."
      ],
      ask: { q: "Jeune myope : pourquoi la périphérie avant la pilocarpine ?", a: "La pilocarpine contracte le muscle ciliaire, qui tire sur la base du vitré et la rétine périphérique : une palissade ou une déchirure préexistante peut évoluer en décollement de rétine. Je dilate, j’examine la périphérie et j’enseigne les symptômes d’alarme (flashs, corps flottants, rideau)." }
    },
    title: "Périphérie et vitré : palissade, rétinoschisis, anneau de Weiss, hyalose astéroïde",
    en: "Lattice degeneration, retinoschisis, Weiss ring (PVD), asteroid hyalosis",
    urgency: "rapide",
    what: "Avec l’âge, le vitré (gel qui remplit l’œil) se liquéfie et se décolle de la rétine : c’est le **DPV** (décollement postérieur du vitré, posterior vitreous detachment), qui peut déchirer une rétine périphérique fragile et causer un décollement de rétine. Certaines trouvailles périphériques sont des zones à risque (**dégénérescence palissadique**), d’autres sont bénignes mais trompeuses (**rétinoschisis**, **hyalose astéroïde**).",
    look: [
      "**Anneau de Weiss** (Weiss ring) : anneau grisâtre flottant devant la papille, trace du vitré qui s’est détaché du nerf optique : preuve d’un DPV.",
      "Dégénérescence palissadique (lattice degeneration) : bandes de rétine amincie en périphérie, parallèles à l’ora serrata, avec lignes blanches entrecroisées (vaisseaux sclérosés), pigment et parfois petits trous.",
      "Rétinoschisis (clivage de la rétine en deux feuillets) : dôme lisse, transparent et immobile, souvent inférotemporal et bilatéral.",
      "Décollement de rétine, en comparaison : soulèvement ondulé et mobile, pigment dans le vitré (« poussière de tabac »), déchirure à chercher.",
      "Hyalose astéroïde (asteroid hyalosis) : myriade de petites particules blanc-jaune brillantes suspendues dans le vitré, qui bougent avec l’œil ; vision habituellement normale."
    ],
    why: "La pilocarpine (dispersion pigmentaire, fermeture de l’angle) contracte le muscle ciliaire et tire sur la base du vitré : chez un myope avec palissade, elle augmente le risque de décollement de rétine, d’où l’examen dilaté de la périphérie avant de la prescrire (fiche « Dispersion pigmentaire et glaucome pigmentaire »). La hyalose astéroïde peut dégrader les photos de papille et l’OCT, donc ton suivi du glaucome.",
    action: [
      "Nouveaux flashs ou corps flottants (ou anneau de Weiss nouveau) : examen dilaté de toute la périphérie sans délai, idéalement avec indentation sclérale.",
      "Flashs avec rideau, ombre ou baisse de vision : décollement de rétine jusqu’à preuve du contraire, rétine en urgence le jour même.",
      "Palissade asymptomatique : en général surveillance et enseignement des symptômes d’alarme ; examen dilaté de la périphérie avant la pilocarpine chez tout myope.",
      "Hyalose astéroïde qui gêne l’imagerie : refaire l’OCT (souvent possible), s’appuyer davantage sur le champ visuel ; B-scan si le fond d’œil est invisible."
    ],
    pitfalls: [
      "Prendre un rétinoschisis pour un décollement de rétine, ou l’inverse : le schisis donne un scotome absolu et ne bouge pas ; au moindre doute, référer en rétine.",
      "Confondre hyalose astéroïde et hémorragie ou inflammation du vitré (**vitrite**) : les astéroïdes sont brillants, nets, sans douleur ni baisse de vision.",
      "Rassurer un patient avec DPV sans avoir examiné la périphérie dilatée : la déchirure associée est le vrai danger."
    ],
    pearl: { q: "Pourquoi examines-tu la périphérie avant de prescrire de la pilocarpine à un jeune myope avec dispersion pigmentaire ?", a: "La pilocarpine contracte le muscle ciliaire, qui tire sur la base du vitré et la rétine périphérique : une palissade ou une déchirure préexistante peut évoluer en décollement de rétine. Je dilate, j’examine la périphérie et j’enseigne les symptômes d’alarme (flashs, corps flottants, rideau)." }
  },
  {
    id: "inflammation-infection", order: 14, group: "retine",
    card: { nk: 2,
      lead: "L’uvéite enflamme l’uvée. L’**endophtalmie** détruit la vision en heures : traitement le jour même.",
      keys: [
        "Uvéite antérieure : cellules et flare en CA, synéchies postérieures.",
        "Cycloplégique + stéroïde, infection exclue ; PIO.",
        "Endophtalmie : douleur, hypopion : ponction le jour même.",
        "Vancomycine 1 mg/0,1 mL + ceftazidime 2,25 mg/0,1 mL intravitréennes."
      ],
      ask: { q: "Pourquoi donne-t-on un cycloplégique dans une uvéite antérieure ?", a: "Il relâche le muscle ciliaire (moins de douleur) et dilate la pupille, ce qui éloigne l’iris du cristallin et empêche les synéchies postérieures. Sans lui, des synéchies sur 360° peuvent créer un iris bombé et une fermeture secondaire de l’angle." }
    },
    title: "Uvéites et infections du segment postérieur",
    en: "Uveitis, CMV retinitis, toxoplasmosis, acute retinal necrosis, endophthalmitis",
    urgency: "urgent",
    what: "L’uvéite est une inflammation de l’uvée (iris, corps ciliaire, choroïde), auto-immune ou infectieuse. Certaines infections de la rétine ou de tout l’intérieur de l’œil (**endophtalmie**) détruisent la vision en quelques heures ou jours et se traitent le jour même.",
    look: [
      "Uvéite antérieure : œil rouge douloureux, photophobie, cellules et tyndall (flare) en chambre antérieure ; **synéchies postérieures** (iris collé au cristallin) qui rendent la pupille irrégulière à la dilatation.",
      "**Rétinite à CMV** (cytomegalovirus retinitis), chez l’immunosupprimé : plages blanches granuleuses de nécrose avec hémorragies le long des vaisseaux, peu d’inflammation du vitré.",
      "Toxoplasmose oculaire : foyer blanc actif au bord d’une vieille cicatrice pigmentée, sous une vitrite dense : le « phare dans le brouillard » (headlight in the fog).",
      "**Nécrose rétinienne aiguë** (acute retinal necrosis, due au virus varicelle-zona, VZV, ou à l’herpès simplex, HSV) : plages blanches confluentes en périphérie qui avancent vite, vascularite occlusive, vitrite marquée.",
      "Endophtalmie : douleur, baisse de vision, hypopion, vitrite, perte du reflet rouge ; **panophtalmie** si l’infection gagne la sclère et l’orbite (paupières gonflées, chémosis, proptose)."
    ],
    why: "En glaucome, des synéchies postérieures sur 360° (séclusion pupillaire) bloquent le passage de l’aqueuse : l’iris bombé ferme l’angle de façon secondaire, et les stéroïdes de l’uvéite peuvent eux-mêmes faire monter la PIO (fiche « Glaucomes cortisonique et uvéitique »). Le patient avec une bulle de trabéculectomie garde à vie un risque d’endophtalmie liée à la bulle (fiche « Patient opéré »), et une plaie ou un ulcère de cornée peut ensemencer l’intérieur de l’œil.",
    action: [
      "Uvéite antérieure : cycloplégique (soulage, prévient les synéchies) + stéroïde topique après avoir éliminé une cause infectieuse ; PIO à chaque visite ; iris bombé → iridotomie laser ou iridectomie chirurgicale.",
      "Endophtalmie (après chirurgie, liée à la bulle, après trauma) : ponction-injection le jour même, avec **vancomycine 1 mg/0,1 mL et ceftazidime 2,25 mg/0,1 mL** intravitréennes ; vitrectomie discutée, surtout si la vision est réduite à la perception lumineuse (étude EVS, après chirurgie de cataracte).",
      "Nécrose rétinienne aiguë : antiviraux en urgence (acyclovir IV ou valacyclovir oral à forte dose, ± antiviral intravitréen) avec la rétine ; surveiller décollement de rétine et autre œil.",
      "Rétinite à CMV ou toxoplasmose près de la macula ou du nerf : rétine/uvéite rapidement (antiviral ou antiparasitaire selon l’agent) ; CMV inattendu → chercher une immunosuppression (VIH)."
    ],
    pitfalls: [
      "Donner un stéroïde seul pour une « uvéite » qui est une infection (herpès, toxoplasmose, endophtalmie lente) : penser infection avant d’immunosupprimer.",
      "Prendre une endophtalmie liée à la bulle pour une conjonctivite : bulle blanc laiteux + cellules en chambre antérieure = urgence, même des années après la chirurgie.",
      "Oublier la PIO : souvent basse pendant l’inflammation (corps ciliaire « sidéré »), elle peut remonter brusquement quand l’inflammation se calme ou sous stéroïdes ; certaines uvéites (herpétiques notamment) la font au contraire monter d’emblée."
    ],
    pearl: { q: "Pourquoi donne-t-on un cycloplégique dans une uvéite antérieure ?", a: "Il relâche le muscle ciliaire (moins de douleur) et dilate la pupille, ce qui éloigne l’iris du cristallin et empêche les synéchies postérieures. Sans lui, des synéchies sur 360° peuvent créer un iris bombé et une fermeture secondaire de l’angle." }
  },
  {
    id: "papille-oedeme", order: 15, group: "nerf",
    card: {
      lead: "Papille gonflée : jamais un glaucome. Vrai œdème ou drusen ? Puis imagerie ou stéroïdes le jour même.",
      keys: [
        "Vrai œdème : vaisseaux voilés au bord.",
        "Bilatéral : TA, puis imagerie le jour même.",
        "NOIA ≥ 50 ans : VS, CRP (artérite).",
        "Drusen papillaires : confirmer (autofluorescence, OCT, B-scan) avant de rassurer."
      ],
      ask: { q: "Vrai œdème ou pseudo-œdème : comment trancher ?", a: "Le vrai œdème voile les vaisseaux au bord de la papille et s’accompagne souvent d’hyperémie, d’hémorragies en flammèches et de nodules cotonneux. Le pseudo-œdème des drusen garde des vaisseaux nets, un contour bosselé avec des corps réfringents et pas d’hémorragie ; l’autofluorescence, l’OCT ou le B-scan le confirment." }
    },
    title: "Papille gonflée : œdème papillaire, NOIA, drusen, neurorétinite",
    en: "Swollen optic disc: papilledema, NAION, optic disc drusen, neuroretinitis",
    urgency: "urgent",
    what: "Une papille gonflée (bords flous et surélevés) peut venir d’une pression intracrânienne élevée (**œdème papillaire** au sens strict, papilledema), d’un infarctus du nerf (**NOIA**, neuropathie optique ischémique antérieure), d’une inflammation (**neurorétinite**) ou d’un faux gonflement (pseudo-œdème) comme les **drusen papillaires**. Il faut d’abord distinguer vrai œdème et pseudo-œdème, puis repérer ceux qui exigent imagerie ou stéroïdes le jour même.",
    look: [
      "Vrai œdème : vaisseaux voilés au bord de la papille par les fibres gonflées, hyperémie, hémorragies en flammèches péripapillaires, nodules cotonneux, veines engorgées, plis rétiniens.",
      "Œdème papillaire (hypertension intracrânienne) : bilatéral, AV conservée au début, tache aveugle agrandie, obscurcissements visuels transitoires, céphalées, acouphène pulsatile, diplopie horizontale (paralysie du VI, nerf abducens).",
      "NOIA non artéritique (non-arteritic anterior ischemic optic neuropathy, NAION) : perte brutale indolore d’un œil, œdème souvent sectoriel, défaut altitudinal, DPAR ; autre papille petite et pleine (« disc at risk »).",
      "NOIA artéritique (artérite à cellules géantes) : œdème pâle « blanc crayeux », perte de vision sévère, 50 ans ou plus, signes systémiques ; urgence pour les deux yeux.",
      "Drusen papillaires (optic disc drusen) : papille bosselée avec corps jaunâtres réfringents, vaisseaux nets ; confirmer par autofluorescence, OCT ou B-scan (hyperéchogènes, persistent à gain bas).",
      "Neurorétinite : papille gonflée puis **étoile maculaire** d’exsudats, souvent après quelques jours ; cause fréquente : Bartonella henselae (maladie des griffes du chat)."
    ],
    why: "En clinique de glaucome, tu examines des dizaines de papilles par jour : une papille gonflée n’est jamais glaucomateuse et peut annoncer une tumeur cérébrale, une thrombose veineuse cérébrale ou une artérite qui rendra l’autre œil aveugle. À l’inverse, les drusen papillaires donnent des défauts du champ et un RNFL aminci qui imitent un glaucome, et tout œdème rend l’OCT RNFL faussement épais.",
    action: [
      "Œdème papillaire bilatéral : prendre la TA, puis neuro-imagerie le jour même (IRM avec veinographie, sinon tomodensitométrie, TDM, avec veinographie) AVANT la ponction lombaire (pression d’ouverture, analyse du liquide).",
      "NOIA à 50 ans ou plus : éliminer d’abord l’artérite (VS, CRP, plaquettes, symptômes) ; si suspicion, stéroïdes à haute dose le jour même, sans attendre la biopsie de l’artère temporale.",
      "NOIA non artéritique : facteurs vasculaires (TA, diabète, apnée du sommeil), surveillance de l’autre œil ; aucun traitement n’a prouvé qu’il rendait la vision.",
      "Pseudo-œdème probable : confirmer les drusen avant de rassurer ; au moindre doute, traiter comme un vrai œdème. Neurorétinite : sérologie Bartonella et neuro-ophtalmologie."
    ],
    pitfalls: [
      "Ponction lombaire avant l’imagerie : risque d’engagement cérébral s’il y a une masse.",
      "Se rassurer d’une AV à 6/6 (20/20) : dans l’hypertension intracrânienne, l’AV reste bonne jusqu’à un stade avancé.",
      "Étiqueter « glaucome à pression normale » des défauts du champ causés par des drusen papillaires : chercher les drusen à l’autofluorescence ou au B-scan."
    ],
    pearl: { q: "Comment distingues-tu au fond d’œil un vrai œdème papillaire d’un pseudo-œdème ?", a: "Le vrai œdème voile les vaisseaux au bord de la papille et s’accompagne souvent d’hyperémie, d’hémorragies en flammèches et de nodules cotonneux. Le pseudo-œdème des drusen garde des vaisseaux nets, un contour bosselé avec des corps réfringents et pas d’hémorragie ; l’autofluorescence, l’OCT ou le B-scan le confirment." }
  },
  {
    id: "pupilles-neuro", order: 16, group: "neuro",
    card: { nk: 2,
      lead: "Anisocorie souvent normale, parfois Horner. Hémianopsie homonyme : lésion cérébrale.",
      keys: [
        "Pire au noir : Horner ; à la lumière : grande pupille.",
        "Grande pupille + ptose : III, imagerie le jour même.",
        "Horner douloureux : dissection, imagerie le jour même.",
        "Défaut limité par le méridien **vertical** : imagerie cérébrale urgente."
      ],
      ask: { q: "Horner : que montre l’apraclonidine ?", a: "La pupille privée de son innervation sympathique devient hypersensible (hypersensibilité de dénervation) : l’apraclonidine, agoniste alpha faible presque sans effet sur une pupille normale, la dilate. L’anisocorie s’inverse, la petite pupille devenant la plus grande, et la ptose diminue." }
    },
    title: "Pupilles et voies visuelles : anisocorie, Horner, hémianopsie homonyme",
    en: "Anisocoria, Horner syndrome, homonymous hemianopia",
    urgency: "rapide",
    what: "Des pupilles de tailles différentes (anisocorie) sont souvent normales, mais peuvent révéler un **syndrome de Horner** (Horner syndrome : atteinte de la voie sympathique qui dilate la pupille et relève la paupière). Une **hémianopsie homonyme** (perte de la même moitié du champ dans les deux yeux) signe une atteinte du cerveau derrière le chiasma, pas un glaucome.",
    look: [
      "**Anisocorie physiologique** : différence de 1 mm ou moins, à peu près la même au noir et à la lumière, sans ptose, réflexes normaux.",
      "Horner : petite pupille (myosis) et légère ptose du même côté, parfois perte de sudation ; anisocorie plus marquée AU NOIR, avec retard de dilatation de la petite pupille.",
      "**Test à l’apraclonidine** (une goutte dans chaque œil) : dans un Horner, après 30 à 60 min, la petite pupille se dilate et la paupière remonte : l’anisocorie s’inverse.",
      "Hémianopsie homonyme : défaut du même côté dans les deux yeux, limité par le **méridien vertical** (le glaucome respecte le méridien horizontal) ; plus les défauts se ressemblent, plus la lésion est postérieure.",
      "Lien avec le module A (Examen des pupilles) : un DPAR signe une atteinte du nerf optique ou d’une grande surface de rétine ; ni le Horner ni l’hémianopsie occipitale n’en donnent."
    ],
    why: "L’apraclonidine est un alpha-agoniste antiglaucomateux (prévention du pic de PIO après un laser YAG ou une iridotomie, crise aiguë) : tu peux aussi t’en servir pour confirmer un Horner. Et devant un champ visuel « qui empire » chez un glaucomateux, tu dois reconnaître un défaut qui respecte le méridien vertical : ce n’est pas une progression, c’est un AVC ou une masse à investiguer.",
    action: [
      "Anisocorie : comparer au noir et à la lumière ; plus grande au noir → la petite pupille est anormale (Horner) ; plus grande à la lumière → la grande pupille est anormale (paralysie du III, pupille tonique, gouttes dilatantes).",
      "Grande pupille avec ptose ou diplopie : paralysie du III (nerf oculomoteur) par anévrisme jusqu’à preuve du contraire → angio-TDM ou angio-IRM en urgence, le jour même.",
      "Horner aigu et douloureux (cou, visage, tête) : dissection carotidienne jusqu’à preuve du contraire → urgence le jour même pour angio-TDM ou angio-IRM tête et cou (risque d’AVC).",
      "Horner nouveau non douloureux : imagerie de toute la voie sympathique (cerveau, cou, apex pulmonaire) rapidement ; chez l’enfant, penser neuroblastome.",
      "Hémianopsie homonyme nouvelle : imagerie cérébrale urgente ; vérifier la norme SAAQ (champ binoculaire d’au moins 30° de chaque côté du méridien vertical) : une hémianopsie complète ne la respecte pas."
    ],
    pitfalls: [
      "Test à l’apraclonidine faussement négatif dans un Horner très récent (l’hypersensibilité met quelques jours à apparaître) : ne jamais retarder l’imagerie d’un Horner douloureux pour faire le test.",
      "Mettre sur le compte du glaucome un défaut du champ qui respecte le méridien vertical, parce que le patient est « connu glaucomateux »."
    ],
    pearl: { q: "Comment le test à l’apraclonidine confirme-t-il un syndrome de Horner ?", a: "La pupille privée de son innervation sympathique devient hypersensible (hypersensibilité de dénervation) : l’apraclonidine, agoniste alpha faible presque sans effet sur une pupille normale, la dilate. L’anisocorie s’inverse, la petite pupille devenant la plus grande, et la ptose diminue." }
  },
  {
    id: "tumeurs-toxicite-trauma", order: 17, group: "retine",
    card: { nk: 2,
      lead: "Nævus choroïdien : fréquent, bénin, mais repère le mélanome.",
      keys: [
        "Nævus : gris ardoise, plat (< 2 mm), drusen en surface.",
        "Mélanome : > 2 mm, liquide, **pigment orange**.",
        "Hydroxychloroquine ≤ 5 mg/kg/j ; dépistage annuel après 5 ans.",
        "Après un coup : périphérie dilatée et gonioscopie (récession de l’angle)."
      ],
      ask: { q: "Nævus ou mélanome : quels signes ?", a: "Épaisseur > 2 mm, liquide sous-rétinien, symptômes, pigment orange, bord à 3 mm ou moins de la papille, creux acoustique à l’échographie, absence de halo et de drusen. Plus ces signes s’additionnent, plus le risque de croissance est grand : je réfère en oncologie oculaire." }
    },
    title: "Nævus ou mélanome, toxicité de l’hydroxychloroquine, commotio retinae",
    en: "Choroidal nevus vs melanoma, hydroxychloroquine toxicity, commotio retinae",
    urgency: "rapide",
    what: "Un **nævus choroïdien** (choroidal nevus : « grain de beauté » plat sous la rétine) est fréquent et bénin, mais il faut repérer les signes d’un **mélanome choroïdien**, la tumeur maligne primitive intraoculaire la plus fréquente chez l’adulte. Deux autres trouvailles maculaires à connaître : la toxicité rétinienne des antipaludéens (hydroxychloroquine, chloroquine) et la **commotio retinae** (blanchiment de la rétine après un coup).",
    look: [
      "Nævus : lésion gris ardoise, plate (moins de 2 mm d’épaisseur), souvent avec drusen en surface ou halo pâle autour, sans liquide ni pigment orange.",
      "Mélanome, règle « To Find Small Ocular Melanoma Using Helpful Hints Daily » (Shields) : Thickness > 2 mm, Fluid sous-rétinien, Symptoms, **pigment orange**, Margin ≤ 3 mm de la papille, Ultrasound Hollowness, absence de Halo, absence de Drusen.",
      "Mise à jour de Shields fondée sur l’imagerie (2019, « To Find Small Ocular Melanoma Doing IMaging ») : épaisseur > 2 mm, liquide sous-rétinien, symptômes, pigment orange, creux acoustique et diamètre > 5 mm.",
      "Toxicité de l’hydroxychloroquine ou de la chloroquine : invisible au début ; l’OCT montre d’abord un amincissement parafovéal des couches externes ; tard, maculopathie « en œil de bœuf » (bull’s eye).",
      "Commotio retinae : blanchiment grisâtre de la rétine externe après un traumatisme contondant (œdème de Berlin au pôle postérieur), parfois avec hémorragies ; disparaît en jours ou semaines."
    ],
    why: "Ces trouvailles surgissent au fond d’œil dilaté de routine en clinique de glaucome ou au bilan préopératoire de cataracte. Les défauts paracentraux du 10-2 et l’amincissement maculaire de la toxicité à l’hydroxychloroquine peuvent être pris pour du glaucome (et l’inverse), et le coup qui cause une commotio retinae peut aussi causer un hyphéma et une récession de l’angle, donc un glaucome des années plus tard.",
    action: [
      "Lésion pigmentée choroïdienne : photo couleur, OCT (liquide ?) et échographie (épaisseur, creux acoustique) ; au moins un facteur de risque ou une croissance documentée → avis en oncologie oculaire, rapidement si plusieurs facteurs.",
      "Nævus sans facteur de risque : photo de référence, premier contrôle rapproché puis annuel si stable ; enseigner les symptômes (baisse de vision, flashs, tache).",
      "Hydroxychloroquine (recommandations révisées de l’AAO, 2016) : dose visée ≤ 5 mg/kg/jour de poids réel ; examen de base la 1re année, puis dépistage annuel après 5 ans (plus tôt si dose élevée, insuffisance rénale, tamoxifène ou maladie maculaire) ; champ 10-2 et OCT maculaire.",
      "Après un traumatisme contondant : examen dilaté de la périphérie (déchirures), gonioscopie quand l’œil est calme (récession de l’angle), puis PIO surveillée à vie."
    ],
    pitfalls: [
      "Rassurer devant un nævus « connu depuis toujours » sans photo de référence : sans comparaison, impossible de prouver qu’il n’a pas grandi.",
      "Attendre l’œil de bœuf pour parler de toxicité : à ce stade la perte est irréversible et peut progresser malgré l’arrêt du médicament.",
      "Après un coup, ne regarder que l’hyphéma : commotio retinae, trou maculaire, rupture choroïdienne et récession de l’angle se cherchent aussi.",
      "Dépister seulement au 10-2 chez un patient d’origine asiatique : l’atteinte y est souvent plus périphérique, d’où l’ajout d’un 24-2."
    ],
    pearl: { q: "Quels signes d’une lésion pigmentée de la choroïde te font penser mélanome plutôt que nævus ?", a: "Épaisseur > 2 mm, liquide sous-rétinien, symptômes, pigment orange, bord à 3 mm ou moins de la papille, creux acoustique à l’échographie, absence de halo et de drusen. Plus ces signes s’additionnent, plus le risque de croissance est grand : je réfère en oncologie oculaire." }
  }
]);

/* ===== Photos des entrées A5 (10 à 17) ===== */
G.OPH.photos = G.OPH.photos || {};
(function (add) { Object.keys(add).forEach(function (k) { G.OPH.photos[k] = (G.OPH.photos[k] || []).concat(add[k]); }); })({
  "a5-occlusions-retiniennes": [
    { id: "OPH-250", caption: "Occlusion de l’artère centrale de la rétine : tache rouge cerise", look: "Compare la couleur de la rétine du pôle postérieur à celle du centre de la macula.", reveal: ["Rétine pâle et un peu opaque au pôle postérieur, avec des plages blanchâtres autour de la papille et le long des arcades", "Centre de la macula rouge foncé : tache rouge cerise", "Pas d’hémorragies dispersées, contrairement à une occlusion veineuse"] },
    { id: "OPH-251", caption: "Occlusion artérielle de branche : flèche sur la papille", look: "Regarde l’agrandissement de droite, à l’endroit pointé par la flèche.", reveal: ["Flèche blanche : petit point sur une artériole, au bord de la papille ; embole probable", "Un embole jaune et réfringent à cet endroit évoquerait une plaque de Hollenhorst (cholestérol)", "Deux clichés côte à côte, chacun avec un agrandissement de la papille"] },
    { id: "OPH-252", caption: "Occlusion de la veine centrale : aspect « sang et tonnerre »", look: "Observe les quatre quadrants, les veines et la papille.", reveal: ["Hémorragies en flammèches et en taches dans tous les quadrants", "Veines dilatées et très tortueuses", "Nodules cotonneux blancs regroupés autour de la papille, dont les bords sont masqués"] },
    { id: "OPH-254", caption: "Occlusion veineuse de branche : hémorragies limitées à un secteur", look: "Délimite la zone hémorragique : toute la rétine ou un seul territoire veineux ?", reveal: ["Hémorragies en flammèches et en taches regroupées en éventail du côté temporal, jusqu’à la région maculaire", "Le reste de la rétine est épargné : territoire d’une seule veine", "Montage de plusieurs clichés"] },
    { id: "OPH-255", caption: "Après une occlusion de branche : néovaisseaux prérétiniens, cliché grand champ", look: "Suis la flèche en haut à droite de l’image.", reveal: ["Néovaisseaux rétiniens supérotemporaux (neovascularization elsewhere), pointés par la flèche", "Lésion discrète sur la photo : l’angiographie montre mieux les néovaisseaux (fuite)", "Cliché grand champ aux couleurs artificielles, cils visibles en bas"] }
  ],
  "a5-retinopathie-hypertensive": [
    { id: "OPH-256", caption: "Rétinopathie hypertensive avec œdème papillaire", look: "Repère les deux sortes de lésions blanches, puis regarde la papille.", reveal: ["Exsudats durs jaunes brillants entre la papille et la fovéa", "Nodule cotonneux blanc duveteux sur l’arcade inférieure", "Bords de la papille flous ; il y a aussi des hémorragies en flammèches et en taches", "Il y a aussi des croisements artérioveineux pathologiques"] },
    { id: "OPH-257", caption: "Hypertension maligne : nodules cotonneux multiples et papille gonflée", look: "Compte les taches blanches et regarde les bords de la papille.", reveal: ["Nombreux nodules cotonneux autour de la papille et le long des arcades", "Hémorragies en flammèches péripapillaires", "Papille gonflée aux bords flous : urgence médicale"] }
  ],
  "a5-macula-chirurgicale": [
    { id: "OPH-267", caption: "Membrane épirétinienne très légère : souvent peu visible au fond d’œil", look: "Cherche un reflet brillant ou des plis autour de la macula.", reveal: ["Membrane « trace » (très légère)", "Peu ou pas de plis visibles sur la photo : c’est l’OCT qui la confirme"] },
    { id: "OPH-268", caption: "OCT maculaire : membrane épirétinienne et macula épaissie", look: "Regarde la surface interne de la rétine sur la coupe, puis la carte d’épaisseur.", reveal: ["Ligne hyperréflective à la surface de la rétine, qui la plisse", "Creux fovéolaire effacé, macula bombée", "Carte rouge-blanc au centre : épaisseur centrale affichée d’environ 530 µm"] },
    { id: "OPH-269", caption: "OCT : trou lamellaire avec schisis fovéolaire", look: "Suis le contour de la fovéa et les couches de la rétine sur chaque coupe.", reveal: ["Contour fovéolaire creusé et irrégulier", "Clivage horizontal entre les couches (schisis) de part et d’autre de la fovéa", "Couche externe restée à plat sur l’épithélium pigmentaire : pas un trou de pleine épaisseur"] },
    { id: "OPH-270", caption: "Trou maculaire après un traumatisme contondant majeur", look: "Regarde le centre de la macula, puis la moitié inférieure de l’image.", reveal: ["Lésion ronde rouge foncé, bien délimitée, au centre de la macula : trou maculaire", "Stries blanchâtres incurvées sous la macula : séquelles traumatiques (commotio retinae et rupture choroïdienne)"] },
    { id: "OPH-272", caption: "Angiographie tardive d’une CRSC : fuite près de la fovéa", look: "Repère les taches blanches (hyperfluorescentes) près du centre de la macula.", reveal: ["Points hyperfluorescents irréguliers juste à côté de la fovéa : fuite du colorant", "Plusieurs points de fuite, dont un fovéal, avec fuite classique « en cheminée »", "Temps affiché 02:33 : phase tardive"] }
  ],
  "a5-peripherie-vitre": [
    { id: "OPH-273", caption: "Dégénérescence palissadique de la rétine périphérique", look: "Observe la bande allongée dans le haut de la zone éclairée.", reveal: ["Lignes blanches entrecroisées (vaisseaux sclérosés)", "Petits amas de pigment noir le long de la lésion", "Lésion en bande allongée, typique de la périphérie"] },
    { id: "OPH-275", caption: "Anneau de Weiss : décollement postérieur du vitré", look: "Cherche une structure ronde qui flotte à côté de la papille.", reveal: ["Anneau translucide grisâtre à côté de la papille", "Image floue : l’anneau est dans le vitré, en avant du plan de la rétine", "Vitré détaché du pourtour du nerf optique"] },
    { id: "OPH-276", caption: "Hyalose astéroïde : particules brillantes dans le vitré", look: "Compare les deux panneaux : qu’est-ce qui voile le fond d’œil à gauche ?", reveal: ["Panneau de gauche : myriade de petits points blanc-jaune réfringents qui voilent la rétine", "Panneau de droite : papille et vaisseaux nets, à titre de comparaison"] }
  ],
  "a5-inflammation-infection": [
    { id: "OPH-277", caption: "Synéchies postérieures : pupille irrégulière après une uvéite", look: "Regarde la forme et le bord de la pupille.", reveal: ["Pupille festonnée en plusieurs lobes : l’iris reste collé au cristallin par endroits", "Petits dépôts pigmentés au bord de la pupille", "Uvéite d’un syndrome TINU (néphrite tubulo-interstitielle et uvéite)"] },
    { id: "OPH-278", caption: "Dossier de rétinite à CMV : nodules cotonneux", look: "Repère les taches blanches : grandes plages de nécrose ou petits nodules ?", reveal: ["Quelques petites taches blanches duveteuses près des arcades : nodules cotonneux", "Pas de grande plage de nécrose blanche hémorragique sur ce cliché", "Papille et macula d’aspect préservé"] },
    { id: "OPH-279", caption: "Toxoplasmose oculaire : vieille cicatrice choriorétinienne pigmentée", look: "Cherche une lésion bien délimitée sous l’arcade temporale inférieure.", reveal: ["Petite cicatrice ronde, bien délimitée, au bord pigmenté, juste au-delà de l’arcade temporale inférieure", "Zone pâle plus floue juste en dessous", "Papille et macula visibles, sans lésion"] },
    { id: "OPH-199", caption: "Nécrose rétinienne aiguë : plages de nécrose en périphérie", look: "Compare la périphérie au pôle postérieur sur ce cliché grand champ.", reveal: ["Large plage pâle et confluente en périphérie, sur le bord gauche de l’image", "Autre foyer pâle plus petit en périphérie, en haut à gauche", "Papille et pôle postérieur encore épargnés ; cliché grand champ aux couleurs artificielles"] },
    { id: "OPH-376", caption: "Panophtalmie : infection de tout le globe et des tissus voisins", look: "Observe les paupières, la conjonctive et la cornée.", reveal: ["Paupières rouges et gonflées, sécrétions purulentes jaune-vert", "Conjonctive très injectée et œdémateuse (chémosis)", "Cornée opaque grisâtre : aucun détail de l’iris"] }
  ],
  "a5-papille-oedeme": [
    { id: "OPH-219", caption: "Œdème papillaire bilatéral marqué", look: "Vérifie si les vaisseaux restent visibles au bord des papilles.", reveal: ["Deux papilles très gonflées, bords complètement effacés", "Nombreuses hémorragies en flammèches autour des papilles", "Vaisseaux voilés par l’œdème au bord papillaire, dans les deux yeux"] },
    { id: "OPH-220", caption: "Œdème papillaire résolu (même patient)", look: "Compare avec le cliché précédent : bords, vaisseaux, hémorragies.", reveal: ["Bords papillaires redevenus nets", "Hémorragies disparues ; vaisseaux bien visibles sur les papilles"] },
    { id: "OPH-221", caption: "NOIA non artéritique : papille gonflée", look: "Examine les bords de la papille et la netteté des vaisseaux qui la croisent.", reveal: ["Bord de la papille flou, d’aspect gonflé (NOIA non artéritique)", "Cliché un peu voilé dans l’ensemble : juger l’œdème sur les bords de la papille, pas sur la netteté globale", "Pas d’hémorragie étendue ni d’exsudat maculaire"] },
    { id: "OPH-223", caption: "Drusen papillaires : papilles bosselées avec corps réfringents", look: "Suis les flèches et vérifie si les vaisseaux restent nets.", reveal: ["Petits corps jaunâtres brillants au bord des papilles (flèches)", "Contour bosselé, aux deux yeux", "Vaisseaux nets sur la papille, sans hémorragie : pseudo-œdème"] },
    { id: "OPH-224", caption: "Neurorétinite au jour 1 : papille gonflée", look: "Regarde la papille, puis la macula.", reveal: ["Papille gonflée aux bords flous", "Pas d’étoile maculaire nette sur ce cliché du jour 1 : elle apparaît souvent plus tard"] }
  ],
  "a5-pupilles-neuro": [
    { id: "OPH-281", caption: "Anisocorie physiologique : à la lumière, au noir, puis après cocaïne", look: "Compare la différence de taille des pupilles dans chaque rangée.", reveal: ["Légère différence de taille, à peu près la même à la lumière et au noir", "Après cocaïne, les deux pupilles se dilatent : pas de syndrome de Horner"] },
    { id: "OPH-282", caption: "Avant un test à l’apraclonidine : pupilles à la lumière et au noir", look: "Compare l’écart entre les pupilles dans la colonne de gauche (lumière) et de droite (noir).", reveal: ["Clichés pris AVANT la goutte, pour documenter l’anisocorie de base", "Six conditions : lumière ou noir (5 et 15 s), de loin et de près", "Réglette graduée sur le premier cliché pour mesurer les pupilles"] },
    { id: "OPH-283", caption: "Champ de Goldmann : hémianopsie homonyme gauche (AVC occipital)", look: "Repère la ligne qui limite les isoptères dans chaque graphique.", reveal: ["Moitié gauche du champ absente dans les deux yeux", "Isoptères qui s’arrêtent net sur le méridien vertical", "Tache aveugle (point bleu) visible dans la moitié droite conservée d’un des graphiques"] }
  ],
  "a5-tumeurs-toxicite-trauma": [
    { id: "OPH-285", caption: "Nævus choroïdien temporal à la fovéa", look: "Repère la lésion grise et cherche des signes inquiétants à sa surface.", reveal: ["Plage gris-vert d’aspect plat, à bords flous, du côté temporal de la macula (à l’opposé de la papille)", "Pas de pigment orange ni de liquide visible", "Loin de la papille"] },
    { id: "OPH-286", caption: "Mélanome choroïdien avec pigment orange", look: "Observe la surface de la grande lésion pigmentée.", reveal: ["Grande lésion gris-vert de plusieurs diamètres papillaires", "Amas de pigment orange à sa surface", "Papille en bas à droite, à distance de la lésion"] },
    { id: "OPH-284", caption: "Toxicité rétinienne de la chloroquine", look: "Regarde l’aspect de l’épithélium pigmentaire autour de la fovéa.", reveal: ["Grande plage d’atrophie et de remaniements pigmentaires au pôle postérieur", "Fovéa plus sombre au centre de la zone atteinte", "Atteinte étendue : stade tardif, irréversible"] },
    { id: "OPH-280", caption: "Commotio retinae après un plomb de carabine à air (BB gun)", look: "Repère les zones de rétine plus blanches que la normale.", reveal: ["Plages blanchâtres-grisâtres mal délimitées de la rétine", "Quelques petites hémorragies en périphérie, à gauche", "Montage de plusieurs clichés"] }
  ]
});

/* ===== QCM A-211 à A-218 (topic a-retine) ===== */
G.OPH.quiz = (G.OPH.quiz || []).concat([
  {
    id: "A-211", module: "A", topic: "a-retine", type: "image", level: 2, trap: false,
    stem: "Une femme de 76 ans suivie pour un glaucome primaire à angle ouvert (GPAO) a perdu brutalement et sans douleur la vision d’un œil il y a 2 heures. Depuis 3 semaines, elle a mal à la mâchoire quand elle mâche. Voici son fond d’œil. Quelle est la conduite la plus appropriée ?",
    figure: { type: "photo", id: "OPH-249" },
    options: [
      "Massage oculaire et paracentèse, puis rendez-vous en rétine dans une semaine",
      "VS, CRP et stéroïdes sans délai, et envoi immédiat à l’urgence (bilan d’AVC)",
      "Angiographie à la fluorescéine en externe avant de décider du traitement",
      "Injection intravitréenne d’anti-VEGF pour prévenir un glaucome néovasculaire"
    ],
    answer: 1,
    explain: "Rétine pâle et opaque d’une OACR, avec une zone plus foncée, de couleur plus normale, entre la papille et la macula (probablement le territoire d’une artère ciliorétinienne épargnée). Toute OACR aiguë part immédiatement à l’urgence pour un bilan d’AVC ; à 50 ans ou plus, l’artérite à cellules géantes doit être éliminée immédiatement (VS, CRP), et la claudication de la mâchoire justifie les stéroïdes sans attendre la biopsie.",
    why: [
      "Le massage et la paracentèse n’ont pas d’efficacité prouvée, et une semaine de délai expose à un AVC et, si c’est une artérite, à la perte de l’autre œil.",
      "Exact : l’OACR est un AVC rétinien (bilan immédiat) et la claudication de la mâchoire après 50 ans impose de traiter l’artérite sans attendre.",
      "Le diagnostic est clinique (blanchiment rétinien) ; l’angiographie en externe retarde le bilan urgent sans changer la conduite.",
      "Les anti-VEGF ne traitent pas l’occlusion artérielle ; une néovascularisation peut survenir plus tard, mais ce n’est pas la priorité aujourd’hui."
    ]
  },
  {
    id: "A-212", module: "A", topic: "a-retine", type: "cat", level: 2, trap: false,
    stem: "Un homme de 70 ans, glaucomateux, a fait il y a 3 semaines une OVCR ischémique (AV : compte les doigts, DPAR franc, nombreux nodules cotonneux). Il reçoit des anti-VEGF pour l’œdème maculaire. Quel examen est le plus important à chaque visite des premiers mois ?",
    figure: null,
    options: [
      "Champ visuel 24-2 pour suivre la progression glaucomateuse",
      "OCT RNFL péripapillaire pour mesurer la perte de fibres",
      "Angiographie à la fluorescéine répétée chaque mois",
      "Gonioscopie et examen de l’iris avant dilatation"
    ],
    answer: 3,
    explain: "Après une OVCR ischémique, le glaucome néovasculaire survient typiquement dans les 3 premiers mois (« glaucome des 90 jours »). Les néovaisseaux de l’angle peuvent apparaître avant ceux du bord pupillaire : on examine l’iris AVANT de dilater et on fait une gonioscopie à chaque visite. Les anti-VEGF peuvent masquer temporairement la néovascularisation, qui réapparaît quand leur effet s’estompe.",
    why: [
      "Le champ est déprimé par l’atteinte rétinienne de l’OVCR et ne détecte pas la néovascularisation de l’angle.",
      "L’OCT RNFL est faussé par l’œdème papillaire puis par l’atrophie ; il ne montre pas les néovaisseaux du segment antérieur.",
      "L’angiographie évalue la non-perfusion, mais ne remplace pas l’examen direct de l’iris et de l’angle, et n’est pas utile chaque mois.",
      "Exact : la gonioscopie non dilatée repère les NVA, parfois avant les NVI, et permet de traiter (PRP, anti-VEGF) avant que l’angle se ferme."
    ]
  },
  {
    id: "A-213", module: "A", topic: "a-retine", type: "image", level: 3, trap: false,
    stem: "Un adulte a une petite pupille et une légère ptose du même côté depuis plusieurs mois, sans douleur. Ces photos documentent ses pupilles à la lumière et au noir avant un test pharmacologique. On instille de l’apraclonidine dans les deux yeux. Si elle a un syndrome de Horner, qu’observera-t-on après 30 à 60 minutes ?",
    figure: { type: "photo", id: "OPH-282" },
    options: [
      "La petite pupille se dilate et l’anisocorie s’inverse",
      "Les deux pupilles se dilatent également et l’anisocorie ne change pas",
      "La petite pupille se contracte davantage, ce qui accentue l’anisocorie",
      "Aucun changement, car l’apraclonidine n’a aucun effet sur l’iris"
    ],
    answer: 0,
    explain: "Dans un syndrome de Horner, l’iris privé d’innervation sympathique devient hypersensible (hypersensibilité de dénervation). L’apraclonidine, agoniste alpha faible presque sans effet sur une pupille normale, dilate alors la petite pupille et relève la paupière : l’anisocorie s’inverse. Le test peut être faussement négatif dans un Horner très récent, et un Horner aigu douloureux impose une imagerie urgente sans attendre le test.",
    why: [
      "Exact : la pupille dénervée réagit à l’effet alpha faible de l’apraclonidine ; elle se dilate et la paupière remonte (muscle de Müller).",
      "Une dilatation égale des deux pupilles correspond plutôt à la cocaïne dans une anisocorie physiologique, pas à l’apraclonidine dans un Horner.",
      "Une constriction accrue n’est pas la réponse attendue d’une pupille dénervée hypersensible à un agoniste alpha.",
      "L’apraclonidine a peu d’effet sur une pupille normale, mais elle dilate la pupille hypersensible d’un Horner : c’est le principe même du test."
    ]
  },
  {
    id: "A-214", module: "A", topic: "a-retine", type: "image", level: 1, trap: false,
    stem: "Une femme de 27 ans a des céphalées depuis un mois et des épisodes où sa vue « s’éteint » quelques secondes quand elle se penche. AV 6/6 (20/20) aux deux yeux, TA normale. Voici le fond d’œil des deux yeux. Quelle est la prochaine étape ?",
    figure: { type: "photo", id: "OPH-219" },
    options: [
      "Ponction lombaire aujourd’hui pour mesurer la pression d’ouverture",
      "Prednisone à haute dose pour une névrite optique bilatérale",
      "Neuro-imagerie le jour même, puis ponction lombaire",
      "Champ visuel et OCT de contrôle dans 3 mois, puisque l’AV est normale"
    ],
    answer: 2,
    explain: "Les deux papilles sont très gonflées, aux bords effacés, avec des hémorragies en flammèches : c’est un œdème papillaire bilatéral, donc une hypertension intracrânienne jusqu’à preuve du contraire. On fait une neuro-imagerie le jour même (IRM ou TDM avec veinographie) pour éliminer une masse ou une thrombose veineuse cérébrale, puis une ponction lombaire avec pression d’ouverture. L’AV préservée ne rassure pas.",
    why: [
      "La ponction lombaire vient APRÈS l’imagerie : s’il y a une masse, elle peut causer un engagement cérébral.",
      "La névrite optique donne une baisse de vision douloureuse, souvent d’un seul œil, avec papille souvent normale ; ici l’AV est préservée et l’œdème bilatéral.",
      "Exact : un œdème papillaire bilatéral impose une neuro-imagerie urgente (masse, thrombose veineuse) avant la ponction lombaire.",
      "Une AV normale est typique au début : attendre 3 mois expose à une perte de vision et laisse passer une cause grave."
    ]
  },
  {
    id: "A-215", module: "A", topic: "a-retine", type: "image", level: 1, trap: false,
    stem: "Au fond d’œil dilaté d’un suivi de glaucome, tu découvres cette lésion pigmentée de la choroïde, qui n’est pas décrite dans les notes antérieures. Le patient n’a pas de symptôme. Quelle est la conduite la plus appropriée ?",
    figure: { type: "photo", id: "OPH-286" },
    options: [
      "Photo de référence et contrôle dans un an, comme pour un nævus",
      "Laser de la lésion en clinique pour prévenir sa croissance",
      "Rassurer : le pigment de surface signe une lésion ancienne et stable",
      "Référence rapide en oncologie oculaire (échographie, OCT, photos)"
    ],
    answer: 3,
    explain: "La photo montre une grande lésion gris-vert recouverte d’amas de pigment orange (lipofuscine). Selon la règle « To Find Small Ocular Melanoma Using Helpful Hints Daily », les facteurs de risque sont : épaisseur > 2 mm, liquide sous-rétinien, symptômes, pigment orange, bord à 3 mm ou moins de la papille, creux acoustique à l’échographie, absence de halo et absence de drusen. Une telle lésion se réfère rapidement en oncologie oculaire.",
    why: [
      "Un simple contrôle annuel convient à un petit nævus plat sans facteur de risque, pas à une grande lésion couverte de pigment orange.",
      "On ne traite pas une lésion pigmentée au laser en clinique : le diagnostic et le traitement relèvent de l’oncologie oculaire.",
      "C’est l’inverse : les drusen témoignent d’une lésion ancienne, alors que le pigment orange (lipofuscine) est un facteur de risque de mélanome.",
      "Exact : grande taille et pigment orange sont des signes inquiétants ; l’échographie (épaisseur, creux acoustique) et l’OCT (liquide) précisent le risque."
    ]
  },
  {
    id: "A-216", module: "A", topic: "a-retine", type: "image", level: 2, trap: false,
    stem: "Un patient suivi pour une uvéite antérieure récidivante a la pupille ci-dessous. Si ces adhérences s’étendaient à toute la circonférence de la pupille, quelle complication glaucomateuse craindrais-tu le plus ?",
    figure: { type: "photo", id: "OPH-277" },
    options: [
      "Iris bombé et fermeture de l’angle par blocage pupillaire",
      "Glaucome pigmentaire par frottement de l’iris contre les zonules",
      "Glaucome par récession de l’angle, comme après un traumatisme",
      "Glaucome pseudo-exfoliatif par dépôt de matériel fibrillaire"
    ],
    answer: 0,
    explain: "La pupille est irrégulière et festonnée : l’iris reste collé au cristallin par des synéchies postérieures. Si elles font tout le tour (séclusion pupillaire), l’aqueuse produite derrière l’iris ne passe plus : l’iris bombe vers l’avant et ferme l’angle (iris bombé), ce qui se traite par iridotomie laser ou iridectomie. Le cycloplégique en phase aiguë prévient ces synéchies, et on surveille aussi la réponse cortisonique.",
    why: [
      "Exact : la séclusion pupillaire bloque l’aqueuse derrière l’iris, qui bombe et ferme l’angle ; il faut créer un passage (iridotomie ou iridectomie).",
      "La dispersion pigmentaire touche le jeune myope à iris concave ; elle n’a pas de lien avec les synéchies inflammatoires.",
      "La récession de l’angle est une séquelle de traumatisme contondant, pas d’uvéite.",
      "La pseudo-exfoliation est une maladie liée à l’âge, avec dépôts sur le cristallin, sans lien avec les synéchies postérieures."
    ]
  },
  {
    id: "A-217", module: "A", topic: "a-retine", type: "cat", level: 3, trap: true,
    stem: "Un homme de 42 ans opéré d’une greffe endothéliale (DMEK) il y a 4 mois utilise de l’acétate de prednisolone 1 % et un corticostéroïde inhalé pour son asthme. Depuis 10 jours, il voit les lignes droites ondulées d’un œil. L’OCT maculaire montre une bulle de liquide sous la rétine neurosensorielle, sans membrane ni trou. Quelle est la meilleure conduite ?",
    figure: null,
    options: [
      "Cesser immédiatement tous les stéroïdes, y compris ceux de la greffe",
      "Réduire prudemment les stéroïdes avec les prescripteurs et suivre l’OCT",
      "Doubler la prednisolone, car il s’agit d’un œdème maculaire inflammatoire",
      "Laser immédiat sur le point de fuite, sans angiographie préalable"
    ],
    answer: 1,
    explain: "Liquide sous la rétine neurosensorielle maculaire chez un patient sous corticostéroïdes = choriorétinopathie séreuse centrale (CRSC) jusqu’à preuve du contraire. On fait l’inventaire de toutes les sources de stéroïdes (gouttes, inhalateurs, crèmes, vaporisateurs nasaux, injections), on réduit avec les prescripteurs ce qui peut l’être sans risque de rejet et on réfère en rétine si le liquide persiste. Piège : cesser brusquement le stéroïde d’une greffe.",
    why: [
      "Arrêter brusquement la prednisolone expose la greffe au rejet : la réduction se planifie avec l’équipe de cornée.",
      "Exact : la CRSC est favorisée par les stéroïdes de toutes les voies ; on réduit ce qui peut l’être sans danger, et la plupart des cas se résorbent spontanément.",
      "Le liquide est SOUS la rétine (CRSC), pas dans la rétine (œdème maculaire cystoïde) ; augmenter le stéroïde aggraverait la situation.",
      "Un traitement laser d’une CRSC se discute en rétine après angiographie, surtout si le liquide persiste ; il ne se fait pas d’emblée."
    ]
  },
  {
    id: "A-218", module: "A", topic: "a-retine", type: "image", level: 1, trap: true,
    stem: "Un homme de 69 ans suivi pour un GPAO débutant dit se cogner du côté gauche depuis 2 mois. Voici son nouveau champ visuel de Goldmann (un graphique par œil). Quelle est l’interprétation la plus juste ?",
    figure: { type: "photo", id: "OPH-283" },
    options: [
      "Progression rapide du glaucome : il faut abaisser la PIO cible",
      "Artéfact de lentille ou de paupière : il suffit de refaire le test",
      "Atteinte rétrochiasmatique droite : imagerie cérébrale à demander",
      "Compression du chiasma par une tumeur hypophysaire : IRM de la selle"
    ],
    answer: 2,
    explain: "Les deux graphiques montrent l’absence de la moitié gauche du champ, avec des isoptères qui s’arrêtent net sur le méridien vertical : c’est une hémianopsie homonyme gauche, due à une lésion des voies visuelles droites derrière le chiasma (ici, un AVC occipital). Il faut une imagerie cérébrale, aviser le médecin traitant et vérifier la norme de conduite de la SAAQ.",
    why: [
      "Le glaucome respecte le méridien HORIZONTAL ; une perte de la même moitié dans les deux yeux, limitée par le méridien vertical, n’est pas glaucomateuse.",
      "Un artéfact de lentille donne un anneau périphérique et une ptose un défaut supérieur, pas une hémianopsie nette dans les deux yeux.",
      "Exact : moitié gauche perdue dans les deux yeux, limitée par le méridien vertical = hémianopsie homonyme gauche, donc lésion rétrochiasmatique droite.",
      "Une atteinte du chiasma donne typiquement une hémianopsie bitemporale (moitiés externes des deux champs), pas la perte de la même moitié."
    ]
  }
]);

/* ===== Cas évolutif cas-a2 ===== */
G.OPH.cases = (G.OPH.cases || []).concat([
  {
    id: "cas-a2",
    module: "A",
    title: "Vision qui baisse chez une patiente suivie pour glaucome",
    tags: ["urgent", "piege"],
    intro: "Une femme de 71 ans est suivie à la clinique de glaucome pour un GPAO (glaucome primaire à angle ouvert) modéré aux deux yeux, traité par latanoprost au coucher. Elle est aussi hypertendue et diabétique de type 2. Elle devance son rendez-vous : depuis 8 jours, la vision de son œil droit est « embrouillée », sans douleur ni rougeur, et elle est convaincue que « son glaucome empire ». AV (acuité visuelle) corrigée : 6/60 (20/200) OD, contre 6/9 (20/30) il y a 4 mois, et 6/7,5 (20/25) OS. PIO : 25 mmHg OD et 17 mmHg OS.",
    steps: [
      {
        kind: "exams",
        prompt: "Quels examens fais-tu maintenant ? (choisis-en 3)",
        pick: 3,
        options: [
          { label: "Champ visuel Humphrey 24-2 aujourd’hui, pour comparer avec le dernier", result: "MD passé de −7 à −16 dB OD, dépression diffuse avec atteinte centrale ; fiabilité moyenne (pertes de fixation).", value: 0, note: "Le champ est très déprimé, mais il ne dit pas POURQUOI : une atteinte de la macula déprime le champ autant qu’une progression glaucomateuse. Il retarde l’examen qui donne la réponse, le fond d’œil dilaté." },
          { label: "Pupilles (lampe oscillante), avant toute dilatation", result: "DPAR (déficit pupillaire afférent relatif) 2+ OD.", value: 2, note: "Son glaucome est symétrique : un DPAR franc et nouveau signe une atteinte sévère et récente de la rétine ou du nerf de l’œil droit. Dans une occlusion veineuse, un DPAR franc oriente vers la forme ischémique. À faire avant de dilater." },
          { label: "Prise de la TA en clinique", result: "172/96 mmHg, sans symptôme.", value: 1, note: "Hypertension, diabète, âge, glaucome et PIO élevée sont des facteurs de risque d’occlusion veineuse. Une TA élevée sans symptôme se transmet rapidement au médecin de famille." },
          { label: "OCT RNFL péripapillaire pour juger de la progression", result: "RNFL OD plus épais qu’il y a 4 mois dans tous les secteurs : « amélioration » apparente.", value: 0, note: "Faux négatif (green disease) : l’œdème de la papille épaissit artificiellement le RNFL. Cet examen ne peut pas juger du glaucome de cet œil pour le moment." },
          { label: "Fond d’œil dilaté (lentille de 90 D)", result: "OD : hémorragies en flammèches et en taches dans les 4 quadrants, veines dilatées et tortueuses, nombreux nodules cotonneux, papille gonflée aux bords flous. OS : C/D 0,7, sans hémorragie.", value: 2, note: "C’est l’examen qui donne le diagnostic : OVCR (occlusion de la veine centrale de la rétine) avec signes d’ischémie. Aucune progression glaucomateuse ne donne d’hémorragies dans les 4 quadrants." },
          { label: "Ajouter du timolol et revoir dans 3 mois avec un champ visuel", result: "La patiente repart rassurée qu’on « traite son glaucome ».", value: -1, note: "Traiter une « progression » sans avoir dilaté fait manquer une OVCR, son œdème maculaire et la surveillance du glaucome néovasculaire, qui survient justement dans les 3 premiers mois." },
          { label: "Examen de l’iris non dilaté et gonioscopie", result: "Pas de néovaisseaux au bord pupillaire ; angle ouvert jusqu’à la bande ciliaire sur 360°, sans néovaisseaux.", value: 1, note: "Utile comme examen de référence : s’il s’agit d’une occlusion veineuse, il servira de comparaison pour dépister les néovaisseaux des prochains mois. Il se fait avant la dilatation." },
          { label: "OCT maculaire", result: "OD : macula très épaissie avec grands espaces kystiques dans la rétine et un peu de liquide sous-rétinien. OS : normal.", value: 2, note: "L’OCT montre l’œdème maculaire cystoïde (cystoid macular edema) qui explique la baisse d’AV ; il guidera les injections et leur suivi." }
        ]
      },
      {
        kind: "choice",
        prompt: "Quel est le diagnostic le plus probable pour l’œil droit ?",
        options: [
          { label: "Progression rapide du GPAO, aggravée par la PIO à 25 mmHg", correct: false, note: "Le glaucome ne donne ni hémorragies dans les 4 quadrants ni œdème maculaire, et l’AV centrale reste en général bonne jusqu’à un stade terminal." },
          { label: "OVCR probablement ischémique, avec œdème maculaire", correct: true, note: "Hémorragies dans les 4 quadrants, veines tortueuses, nodules cotonneux, papille gonflée, DPAR franc et AV à 6/60 : occlusion de la veine centrale, probablement ischémique, avec œdème maculaire. Le glaucome et la PIO élevée sont des facteurs de risque d’OVCR." },
          { label: "NOIA non artéritique avec hémorragies papillaires", correct: false, note: "La NOIA donne un œdème papillaire, parfois avec une hémorragie péripapillaire, mais pas des hémorragies dans toute la rétine jusqu’en périphérie." },
          { label: "Rétinopathie diabétique proliférante de l’œil droit", correct: false, note: "La rétinopathie diabétique est bilatérale et plutôt symétrique ; une atteinte hémorragique massive d’un seul œil avec veines tortueuses évoque une occlusion veineuse." }
        ]
      },
      {
        kind: "info",
        text: "Voici une photo comparable d’OVCR ischémique (autre patient) : hémorragies diffuses et plusieurs nodules cotonneux blancs. Ce qui oriente vers la forme ischémique : AV très basse, DPAR franc, nombreux nodules cotonneux, hémorragies étendues et, à l’angiographie, une vaste zone de non-perfusion capillaire. C’est cette forme qui expose au glaucome néovasculaire.",
        figure: { type: "photo", id: "OPH-253" }
      },
      {
        kind: "choice",
        prompt: "Quelle conduite proposes-tu aujourd’hui ?",
        options: [
          { label: "Photocoagulation panrétinienne préventive aujourd’hui, sans attendre", correct: false, note: "Dans l’OVCR ischémique, on fait habituellement la PRP dès l’apparition de néovaisseaux, sous surveillance étroite, plutôt qu’en prévention systématique (étude CVOS)." },
          { label: "Anticoagulation orale immédiate pour dissoudre le caillot de la veine", correct: false, note: "L’anticoagulation n’a pas démontré de bénéfice dans l’OVCR et augmente le risque d’hémorragie." },
          { label: "Doubler les gouttes et revoir dans 3 mois avec un nouveau champ", correct: false, note: "Un délai de 3 mois tombe exactement dans la période à risque de glaucome néovasculaire, et un œdème maculaire non traité laisse des séquelles." },
          { label: "Rétine rapidement (anti-VEGF), baisse de PIO, gonioscopie mensuelle", correct: true, note: "L’œdème maculaire se traite par injections intravitréennes d’anti-VEGF (un implant de dexaméthasone risquerait de faire monter la PIO chez une glaucomateuse). On abaisse la PIO de l’œil droit, on transmet TA et diabète au médecin de famille, et on examine l’iris non dilaté et l’angle environ chaque mois pendant les premiers mois." }
        ]
      },
      {
        kind: "info",
        text: "Rebondissement : hospitalisée pour une pneumonie, la patiente a manqué deux rendez-vous. Elle revient 11 semaines après le début des symptômes avec un œil droit rouge et douloureux, des nausées et une vision réduite à compter les doigts. PIO : 46 mmHg OD. Cornée légèrement œdémateuse ; à l’examen non dilaté, fins vaisseaux sinueux au bord pupillaire et sur l’iris (NVI) ; à la gonioscopie, néovaisseaux qui franchissent l’éperon scléral (NVA) avec synéchies antérieures périphériques sur environ 180°. C’est le « glaucome des 90 jours ».",
        figure: { type: "slit", pattern: "nvi" }
      },
      {
        kind: "choice",
        prompt: "Quelle est la meilleure prise en charge de ce glaucome néovasculaire ?",
        options: [
          { label: "Anti-VEGF intravitréen, PRP rapide et baisse médicale de la PIO", correct: true, note: "Exact : l’anti-VEGF fait régresser les néovaisseaux en quelques jours, la PRP traite durablement la cause (rétine ischémique), et on baisse la PIO (bêtabloquant, alpha-agoniste, IAC, acétazolamide) avec stéroïde topique et cycloplégique. Si la PIO reste élevée : chirurgie (tube) ou cyclophotocoagulation." },
          { label: "Pilocarpine 2 % 4 fois par jour pour ouvrir l’angle, revoir dans une semaine", correct: false, note: "La pilocarpine augmente l’inflammation et n’ouvre pas un angle fermé par une membrane fibrovasculaire : elle est contre-indiquée ici." },
          { label: "Iridotomie laser périphérique en urgence, comme pour une crise aiguë", correct: false, note: "Il n’y a pas de blocage pupillaire : l’angle est fermé par une membrane néovasculaire qui tire l’iris vers l’avant. L’iridotomie n’aide pas et risque de saigner." },
          { label: "Trabéculoplastie sélective (SLT) urgente pour améliorer l’écoulement", correct: false, note: "La SLT agit sur un trabéculum visible et fonctionnel ; elle est inefficace quand l’angle est couvert de néovaisseaux et de synéchies." }
        ]
      },
      {
        kind: "choice",
        prompt: "Quel lien expliques-tu à la patiente entre son glaucome et ce qui est arrivé à son œil droit ?",
        options: [
          { label: "Le latanoprost a causé l’occlusion : il faut le cesser aux deux yeux", correct: false, note: "Les analogues des prostaglandines ne causent pas d’occlusion veineuse ; les cesser ferait monter la PIO, elle-même facteur de risque." },
          { label: "Aucun lien : c’est une coïncidence, sans conséquence pour l’autre œil", correct: false, note: "Le glaucome et la PIO élevée sont des facteurs de risque reconnus d’OVCR ; l’œil gauche reste à risque." },
          { label: "Glaucome et PIO élevée favorisent l’OVCR : on protège l’œil gauche", correct: true, note: "Exact : la veine centrale traverse la lame criblée, où une PIO élevée et le remodelage glaucomateux peuvent la comprimer. On garde la PIO de l’œil gauche à la cible et on optimise TA, diabète et lipides avec le médecin de famille." },
          { label: "Le lien est héréditaire : bilan de thrombophilie pour toute sa famille", correct: false, note: "Le bilan de thrombophilie se réserve au patient jeune, à l’atteinte bilatérale ou sans facteur de risque ; il n’est pas indiqué ici, ni pour la famille." }
        ]
      }
    ],
    debrief: [
      "Chez un glaucomateux, une baisse de vision n’est pas du glaucome tant qu’on n’a pas fait AV, pupilles (DPAR), PIO, iris et angle non dilatés, fond d’œil dilaté et OCT maculaire.",
      "Le glaucome et la PIO élevée sont des facteurs de risque d’OVCR, avec l’âge, l’HTA et le diabète ; la forme ischémique (AV très basse, DPAR, nodules cotonneux) expose au glaucome néovasculaire.",
      "« Glaucome des 90 jours » : iris non dilaté et gonioscopie environ chaque mois pendant les premiers mois ; les NVA peuvent précéder les NVI, et les anti-VEGF peuvent les masquer temporairement.",
      "Glaucome néovasculaire : anti-VEGF + PRP + baisse médicale de la PIO (sans pilocarpine), stéroïde et cycloplégique ; chirurgie (tube) si la PIO reste élevée.",
      "Pendant l’œdème papillaire d’une OVCR, l’OCT RNFL est faussement épais : il ne sert pas à juger le glaucome de cet œil."
    ]
  }
]);

/* ===== Glossaire (termes nouveaux) ===== */
G.OPH.glossary = G.OPH.glossary || {};
Object.assign(G.OPH.glossary, {
  "tache rouge cerise": "Centre de la macula qui reste rouge dans une occlusion de l’artère centrale : la fovéa, sans rétine interne, laisse voir la choroïde alors que la rétine autour blanchit.",
  "OACR": "Occlusion de l’artère centrale de la rétine (CRAO) : arrêt brutal du sang vers la rétine, perte de vision indolore ; équivalent d’AVC, envoi immédiat à l’urgence.",
  "OBAR": "Occlusion d’une branche artérielle rétinienne (BRAO), souvent par un embole ; perte d’un secteur du champ visuel ; bilan d’AVC immédiat à l’urgence.",
  "OBVR": "Occlusion d’une branche de la veine centrale de la rétine (BRVO), à un croisement artérioveineux ; hémorragies en éventail limitées à un secteur.",
  "plaque de Hollenhorst": "Embole de cholestérol jaune brillant coincé dans une artériole rétinienne, venu le plus souvent d’une plaque carotidienne ; signal d’alarme vasculaire.",
  "artérite à cellules géantes": "Vascularite des grosses artères après 50 ans (artérite temporale) : céphalée, claudication de la mâchoire ; peut rendre aveugle les deux yeux ; stéroïdes urgents.",
  "artère ciliorétinienne": "Artère inconstante, issue de la circulation choroïdienne, qui irrigue la rétine entre la papille et la macula ; elle peut épargner la vision centrale dans une OACR.",
  "glaucome des 90 jours": "Surnom du glaucome néovasculaire qui survient typiquement dans les trois premiers mois après une OVCR ischémique (aussi appelé « glaucome des 100 jours »).",
  "nodules cotonneux": "Petites taches blanches duveteuses de la rétine (cotton-wool spots) : infarctus de la couche des fibres nerveuses (HTA, diabète, occlusions, VIH).",
  "croisement artérioveineux pathologique": "Signe d’hypertension chronique (AV nicking) : la veine paraît pincée ou interrompue là où l’artériole épaissie la croise.",
  "hypertension maligne": "Hypertension très sévère avec atteinte d’organes ; au fond d’œil, papille gonflée, hémorragies et nodules cotonneux. Urgence médicale.",
  "membrane épirétinienne": "Fine pellicule fibreuse à la surface de la macula qui la plisse : vision floue et déformée ; vue à l’OCT, opérée si elle gêne.",
  "trou maculaire": "Ouverture dans la fovéa : de pleine épaisseur (toutes les couches, chirurgie) ou lamellaire (partielle, souvent surveillée). Diagnostic à l’OCT.",
  "CRSC": "Choriorétinopathie séreuse centrale : liquide clair sous la macula, favorisé par le stress et les corticostéroïdes de toutes les voies ; se résorbe souvent seul.",
  "métamorphopsies": "Déformation des images : les lignes droites paraissent ondulées. Signe d’une maladie de la macula (membrane, trou, liquide).",
  "DPV": "Décollement postérieur du vitré : le gel vitréen se sépare de la rétine avec l’âge ; flashs et corps flottants ; peut déchirer la rétine.",
  "anneau de Weiss": "Anneau flottant devant la papille : vitré détaché du pourtour du nerf optique, preuve d’un décollement postérieur du vitré.",
  "dégénérescence palissadique": "Zones de rétine périphérique amincie (lattice), avec lignes blanches et pigment ; prédisposent aux trous et au décollement de rétine, surtout chez le myope.",
  "rétinoschisis": "Clivage de la rétine en deux feuillets, en dôme lisse et immobile, souvent bénin ; à distinguer d’un décollement de rétine.",
  "hyalose astéroïde": "Petites particules brillantes de calcium et de lipides suspendues dans le vitré ; bénignes, vision normale, mais gênent parfois l’imagerie du fond d’œil.",
  "vitrite": "Inflammation du vitré : cellules qui voilent le fond d’œil, comme dans une uvéite postérieure ou une infection.",
  "synéchies postérieures": "Adhérences entre l’iris et le cristallin après une uvéite ; pupille irrégulière ; sur 360°, elles causent un iris bombé.",
  "rétinite à CMV": "Infection de la rétine par le cytomégalovirus chez l’immunosupprimé : nécrose blanche granuleuse avec hémorragies ; antiviraux.",
  "nécrose rétinienne aiguë": "Rétinite virale (VZV, HSV) avec nécrose périphérique confluente et rapide, vascularite et vitrite ; antiviraux en urgence ; risque élevé de décollement de rétine.",
  "endophtalmie": "Infection à l’intérieur de l’œil (après chirurgie, bulle, trauma ou par le sang) : douleur, hypopion, vitrite ; ponction et antibiotiques intravitréens urgents.",
  "panophtalmie": "Infection de tout le globe qui gagne la sclère et l’orbite : paupières gonflées, chémosis, proptose ; pronostic visuel très sombre.",
  "œdème papillaire": "Au sens strict (papilledema), gonflement des papilles dû à une pression intracrânienne élevée ; neuro-imagerie urgente avant la ponction lombaire.",
  "neurorétinite": "Inflammation du nerf optique avec étoile d’exsudats à la macula, souvent due à Bartonella henselae (maladie des griffes du chat).",
  "étoile maculaire": "Exsudats lipidiques disposés en rayons autour de la fovéa (neurorétinite, hypertension sévère).",
  "anisocorie physiologique": "Pupilles de tailles différentes d’au plus 1 mm, avec un écart semblable au noir et à la lumière ; normale.",
  "syndrome de Horner": "Atteinte de la voie sympathique de l’œil : petite pupille, légère ptose, parfois perte de sudation ; s’il est récent et douloureux, éliminer une dissection carotidienne.",
  "test à l’apraclonidine": "Une goutte d’apraclonidine dans chaque œil : dans un Horner, la petite pupille se dilate et l’anisocorie s’inverse (hypersensibilité de dénervation).",
  "hémianopsie homonyme": "Perte de la même moitié du champ visuel dans les deux yeux, limitée par le méridien vertical : lésion derrière le chiasma (AVC, tumeur).",
  "nævus choroïdien": "Lésion pigmentée plate et bénigne de la choroïde ; à photographier et à surveiller pour des signes de mélanome.",
  "mélanome choroïdien": "Tumeur maligne de la choroïde, la plus fréquente des tumeurs malignes primitives intraoculaires de l’adulte ; référence en oncologie oculaire.",
  "pigment orange": "Lipofuscine à la surface d’une lésion pigmentée de la choroïde ; facteur de risque de mélanome.",
  "commotio retinae": "Blanchiment de la rétine externe après un traumatisme contondant (œdème de Berlin au pôle postérieur), habituellement transitoire."
});
