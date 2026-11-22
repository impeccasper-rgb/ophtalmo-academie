var G = (typeof window !== 'undefined') ? window : globalThis;
G.OPH = G.OPH || {};

// Extension cornée B : fiches c-surface et c-peripherie, QCM B-211 à B-218, cas cas-b5, photos, glossaire.

G.OPH.fiches = (G.OPH.fiches || []).concat([

  // Conjonctivites et inflammations de la surface oculaire
  {
  id: "c-surface",
  module: "B",
  order: 9,
  title: "Conjonctivites et inflammations de la surface oculaire",
  en: "Conjunctivitis and ocular surface inflammation",
  tags: ["frequent", "highyield", "piege"],
  oneLiner: "Œil rouge : lire d’abord la conjonctive (relief, sécrétions, ganglion, limbe), puis toujours vérifier la cornée à la fluorescéine.",
  definition: "Conjonctivite virale, bactérienne, allergique ou mécanique. Souvent bénigne, sauf si la cornée est touchée.",
  anatomy: {
    text: "La conjonctive palpébrale (sur le tarse) et bulbaire (sur la sclère) contient du tissu lymphoïde, des mastocytes (cellules de l’allergie) et des cellules caliciformes (mucus). Au limbe vivent les cellules souches de l’épithélium cornéen : une inflammation limbique peut donc abîmer la cornée, comme dans la kératoconjonctivite vernale (vernal keratoconjunctivitis), la kératoconjonctivite limbique supérieure ou KLS (superior limbic keratoconjunctivitis) et la rosacée. Formes qui atteignent la cornée : vernale, atopique, rosacée, gonocoque.",
    figure: {
      type: "eye",
      highlight: ["conjonctive", "limbe", "cornee"]
    }
  },
  causal: {
    title: "De l’agression de la conjonctive à la cornée",
    steps: [
      { label: "Agression de la conjonctive", detail: "Virus (adénovirus), Chlamydia, allergène, lentille ou suture qui frotte, bord palpébral malade (rosacée, blépharite).", kind: "cause" },
      { label: "Réponse immunitaire locale", detail: "Lymphocytes regroupés en follicules (virus, Chlamydia, gouttes toxiques) ; mastocytes qui libèrent l’histamine, éosinophiles et papilles (allergie, frottement).", kind: "mecanisme" },
      { label: "Signes conjonctivaux", detail: "Rougeur, larmes ou mucus, démangeaison (allergie) ou sable (virus), ganglion préauriculaire (virus, Chlamydia).", kind: "signe" },
      { label: "Atteinte du limbe et de la cornée", detail: "Infiltrats sous-épithéliaux (adénovirus), ulcère en bouclier (protéines toxiques des éosinophiles), infiltrats marginaux et vaisseaux (rosacée).", kind: "lesion" },
      { label: "Cicatrices et perte de vision", detail: "Opacités, pannus, symblépharon (adhérence paupière-globe), déficit limbique ; ou complications des stéroïdes (glaucome, cataracte).", kind: "complication" }
    ],
    levers: [
      { at: 0, label: "Hygiène et retrait de la cause", detail: "Mains et matériel désinfectés (adénovirus), pause des lentilles, retrait de la suture, soins des paupières." },
      { at: 1, label: "Antihistaminique, stabilisateur, cyclosporine", detail: "Bloquent l’histamine, empêchent les mastocytes de se vider, freinent les lymphocytes T." },
      { at: 3, label: "Stéroïde court surveillé", detail: "Éteint l’inflammation cornéenne (bouclier, infiltrats gênants, membranes) ; PIO à contrôler à chaque visite." }
    ]
  },
  risk: [
    "Contact avec un œil rouge (garderie, école, milieu de soins) : adénovirus",
    "Atopie : vernale (jeune garçon), atopique (adulte)",
    "Lentilles, prothèse, suture exposée : gigantopapillaire",
    "Nouveau partenaire sexuel : Chlamydia, gonocoque",
    "Rosacée, dysfonction meibomienne ; maladie thyroïdienne (KLS)"
  ],
  presentation: [
    "Adénovirus : œil rouge larmoyant, sable, 2e œil en quelques jours, follicules, ganglion ; pseudomembranes, puis infiltrats sous-épithéliaux 1–2 semaines plus tard",
    "Chlamydia (conjonctivite à inclusions de l’adulte) : folliculaire, plus de 3–4 semaines malgré les gouttes, pannus supérieur",
    "Vernale : garçon atopique, démangeaison au printemps, mucus filant, pavés du tarse supérieur, points de Horner-Trantas",
    "Atopique : adulte avec eczéma des paupières, toute l’année, symblépharon ; gigantopapillaire : lentilles, prothèse, suture",
    "KLS : rougeur et coloration de la conjonctive supérieure, filaments ; pinguéculite : nodule jaunâtre enflammé au limbe",
    "Rosacée : bord palpébral télangiectasique, chalazions, infiltrats marginaux, vaisseaux et phlyctènes sur la cornée inférieure"
  ],
  exam: {
    signs: [
      { sign: "Follicules : dômes pâles, vaisseaux autour de la base", why: "Amas de lymphocytes : virus, Chlamydia, toxicité de gouttes." },
      { sign: "Papilles : vaisseau central ; papilles géantes si plus de 1 mm (pavés)", why: "Peu spécifiques ; géantes : vernale, atopique ou gigantopapillaire." },
      { sign: "Type de sécrétions", why: "Aqueuses : virus ; filantes : allergie ; mucopurulentes : bactérie, Chlamydia ; purulentes abondantes en quelques heures : gonocoque." },
      { sign: "Ganglion préauriculaire (devant l’oreille)", why: "Adénovirus, herpès, Chlamydia, gonocoque ; absent dans l’allergie." },
      { sign: "Limbe : points de Horner-Trantas, rougeur supérieure, pannus", why: "Horner-Trantas : vernale ; rougeur supérieure : KLS ; pannus supérieur : Chlamydia, inférieur : rosacée." },
      { sign: "Cornée à la fluorescéine", why: "Infiltrat, bouclier ou défaut épithélial : ce n’est plus une simple conjonctivite." }
    ],
    tests: [
      { test: "Éversion de la paupière supérieure", when: "Allergie, lentilles, corps étranger, coloration supérieure", read: "Pavés, papilles, corps étranger caché." },
      { test: "TAAN (test d’amplification des acides nucléiques, NAAT) sur écouvillon conjonctival : Chlamydia, gonocoque", when: "Folliculaire de plus de 3–4 semaines, nouveau-né, purulence abondante", read: "Positif : traitement oral, partenaires, dépistage des autres ITSS (infections transmissibles sexuellement et par le sang), déclaration." },
      { test: "Gram et culture ; TSH (bilan thyroïdien) si KLS", when: "Purulence hyperaiguë ; KLS", read: "Diplocoques Gram négatif : gonocoque ; dysthyroïdie fréquente dans la KLS." }
    ]
  },
  ddx: [
    { dx: "Kératite (bactérienne, herpétique, amibienne)", clue: "Douleur, photophobie, infiltrat avec défaut épithélial ; lentilles = kératite jusqu’à preuve du contraire." },
    { dx: "Conjonctivite herpétique (HSV)", clue: "Souvent unilatérale, vésicules palpébrales ; chercher une dendrite avant tout stéroïde." },
    { dx: "Uvéite antérieure ou sclérite", clue: "Rougeur périlimbique ou profonde, douleur, sans sécrétions." },
    { dx: "Néoplasie de surface ou carcinome sébacé", clue: "Conjonctivite unilatérale chronique rebelle chez l’adulte âgé : biopsie." }
  ],
  redFlags: [
    "Douleur, photophobie, baisse de vision ou infiltrat : kératite, uvéite, sclérite",
    "Pus abondant en quelques heures : gonocoque, ceftriaxone systémique le jour même",
    "Nouveau-né, ou ulcère en bouclier : traitement le jour même"
  ],
  cat: {
    algo: [
      { q: "Douleur, photophobie, baisse de vision ou cornée atteinte ?", yes: "Fluorescéine ; ophtalmologie le jour même.", no: "", noGo: 1 },
      { q: "Nouveau-né, ou pus abondant en quelques heures ?", yes: "Gram, culture, TAAN ; ceftriaxone si gonocoque ; ophtalmo le jour même.", no: "", noGo: 2 },
      { q: "Follicules, ganglion préauriculaire, contagion ?", yes: "Adénovirus : soutien, hygiène, pas d’antibiotique.", no: "", yesGo: 3, noGo: 4 },
      { q: "Persiste plus de 3–4 semaines ?", yes: "TAAN pour Chlamydia ; traiter les partenaires.", no: "Guérison spontanée en 1–3 semaines." },
      { q: "Démangeaison et papilles ?", yes: "Antihistaminique-stabilisateur ; papilles géantes : vernale, atopique, lentilles.", no: "Rosacée, KLS, conjonctivite bactérienne ?" }
    ],
    phases: [
      {
        phase: "observation",
        items: ["Adénovirus : compresses froides, larmes, mains lavées ; contagieux environ 2 semaines"]
      },
      {
        phase: "medical",
        items: [
          "Allergie : olopatadine ou kétotifène",
          "Vernale ou atopique : cyclosporine ou tacrolimus topiques ; stéroïde court en poussée",
          "Rosacée : soins des paupières, doxycycline orale à faible dose (effet anti-inflammatoire) ; enfant de moins de 8 ans ou grossesse : érythromycine ou azithromycine orales",
          "Chlamydia : doxycycline 100 mg BID × 7 j ou azithromycine 1 g en dose unique ; traiter les partenaires",
          "KLS : lubrification, lentille pansement, nitrate d’argent en solution diluée (jamais le bâtonnet)"
        ]
      },
      {
        phase: "chirurgie",
        items: ["Bouclier rebelle : grattage de la plaque ± membrane amniotique ; KLS rebelle : résection conjonctivale"]
      },
      {
        phase: "suivi",
        items: ["Tout stéroïde : PIO à chaque visite, sevrage lent"]
      }
    ],
    local: "Chlamydia et gonocoque sont des maladies à déclaration obligatoire (MADO) au Québec ; les guides québécois sur les ITSS de l’INESSS (Institut national d’excellence en santé et en services sociaux) encadrent traitement et partenaires."
  },
  treatments: [
    { name: "Compresses froides et larmes artificielles", dose: "Compresses froides, larmes réfrigérées 4–6×/j.", pitfall: "Ne raccourcit pas l’infection virale.", how: "Le froid resserre les vaisseaux ; les larmes réfrigérées rincent virus et allergènes.", why: "Adénovirus, allergie légère.", pros: "Sans risque.", cons: "Ne raccourcit pas l’infection virale.", cx: "Aucune." },
    { name: "Antihistaminique-stabilisateur des mastocytes (olopatadine, kétotifène)", dose: "Olopatadine 0,1 % ou kétotifène 0,025 %, 1 goutte 2×/j.", pitfall: "Insuffisant seul si vernale sévère.", how: "Bloque le récepteur H1 (démangeaison) et freine la libération des médiateurs (prévention).", why: "Allergie, vernale, atopique, gigantopapillaire.", pros: "Bien toléré au long cours.", cons: "Insuffisant seul si vernale sévère.", cx: "Brûlure." },
    { name: "Cyclosporine ou tacrolimus topiques", dose: "Cyclosporine ou tacrolimus topiques, sur ordonnance spécialisée.", pitfall: "Effet en semaines.", qc: "Formulations : disponibilité canadienne à vérifier.", how: "Bloquent la calcineurine, donc l’activation des lymphocytes T.", why: "Vernale, atopique, rosacée, KLS.", pros: "Épargne les stéroïdes.", cons: "Effet en semaines ; formulations et disponibilité canadienne à vérifier.", cx: "Brûlure ; prudence si herpès." },
    { name: "Stéroïde topique court (fluorométholone, prednisolone)", dose: "Fluorométholone 0,1 % 4×/j, cure courte.", pitfall: "Exclure un herpès épithélial avant.", how: "Éteint l’inflammation lymphocytaire et éosinophilique.", why: "Bouclier, pseudomembranes, infiltrats gênants.", pros: "Effet rapide.", cons: "Rebond à l’arrêt (adénovirus) ; contre-indiqué si herpès épithélial.", cx: "Hausse de PIO, cataracte, surinfection." },
    { name: "Hygiène palpébrale, doxycycline ou azithromycine", dose: "Hygiène palpébrale 1–2×/j ; doxycycline faible dose.", pitfall: "Doxycycline : pas avant 8 ans ni en grossesse.", qc: "Chlamydia, gonocoque : MADO au Québec.", how: "Compresses chaudes et nettoyage du bord libre (bactéries, Demodex) ; doxycycline faible dose anti-collagénase.", why: "Rosacée, blépharokératoconjonctivite.", pros: "Traite la cause.", cons: "Doxycycline : pas avant 8 ans ni pendant la grossesse.", cx: "Photosensibilité, œsophagite." }
  ],
  treatment: {
    first: [
      "**Externe / 1re ligne** : virale : compresses froides, larmes, hygiène ; allergique : olopatadine 0,1 % 2×/j.",
      "**Ophtalmologiste** : stéroïde court, cyclosporine ou tacrolimus pour vernale et atopique."
    ],
    refer: [
      "Le jour même si douleur, photophobie, baisse de vision, nouveau-né ou pus abondant — cornée menacée.",
      "Cette semaine si vernale, atopique ou plus de 3–4 semaines."
    ],
    pitfall: ["Fluorométholone ou prednisolone sans suivi : PIO élevée, herpès aggravé.", "Antibiotique pour une conjonctivite virale : inutile."],
    qc: ["Chlamydia et gonocoque : MADO au Québec."]
  },
  pearls: [
    { q: "Antibiotique ou stéroïde dans une conjonctivite adénovirale ?", a: "Antibiotique : non. Stéroïde : seulement si pseudomembranes ou infiltrats sous-épithéliaux qui baissent la vision ; il peut prolonger l’excrétion virale et causer un **rebond à l’arrêt** : sevrage lent, PIO." },
    { q: "Vernale connue avec douleur et photophobie nouvelles : que cherches-tu ?", a: "Un **ulcère en bouclier** : défaut ovale de la cornée supérieure, parfois couvert d’une plaque de mucus et de fibrine. Le jour même : stéroïde, cyclosporine ou tacrolimus, grattage de la plaque au besoin." },
    { q: "Comment distinguer follicule et papille à la lampe ?", a: "Le follicule est un dôme pâle dont les vaisseaux **entourent la base** ; la papille porte un **vaisseau au centre**. Follicules : virus, Chlamydia, toxicité ; papilles : allergie, lentilles, blépharite, bactérie." }
  ],
  mnemonic: { title: "Ordre de lecture d’un œil rouge", text: "Paupières, conjonctive éversée, sécrétions, ganglion, limbe, puis cornée à la fluorescéine." },
  compare: {
    title: "Normal vs coloration supérieure (KLS, vernale)",
    normal: {
      figure: { type: "fluo", pattern: "normal" },
      caption: "Épithélium intact : aucune prise de fluorescéine."
    },
    patho: {
      figure: { type: "fluo", pattern: "spk-superior" },
      caption: "Kératite ponctuée de la cornée supérieure, sous la paupière.",
      reveal: [
        "Points verts groupés dans le tiers supérieur, zone couverte par la paupière",
        "Penser KLS (vérifier la thyroïde), vernale (pavés, risque de bouclier) ou lentille serrée",
        "Éverser la paupière supérieure : papilles géantes, corps étranger"
      ]
    }
  },
  sources: [
    "AAO PPP Conjunctivitis (2023 ; Cheung AY et al., Ophthalmology 2024)",
    "AAO PPP Blepharitis (2023 ; Lin A et al., Ophthalmology 2024)",
    "AAO BCSC Section 8 : External Disease and Cornea",
    "Guides canadiens sur les infections transmissibles sexuellement et par le sang (Agence de la santé publique du Canada)"
  ]
},

  // Kératites ulcératives périphériques, Terrien et sclérites
  {
  id: "c-peripherie",
  module: "B",
  order: 10,
  title: "Kératites ulcératives périphériques, Terrien et sclérites",
  en: "Peripheral ulcerative keratitis, Terrien degeneration and scleritis",
  tags: ["urgent", "highyield", "piege"],
  oneLiner: "Cornée périphérique qui s’amincit : intervalle clair et blépharite = kératite marginale ; croissant collé au limbe avec défaut épithélial = PUK, bilan systémique urgent.",
  definition: "Maladies de la cornée près du limbe. Inflammatoires (PUK, Mooren) ou dégénératives (Terrien).",
  anatomy: {
    text: "La cornée périphérique est nourrie par les arcades vasculaires du limbe : complément et complexes immuns (anticorps liés à leur cible) s’y déposent, et les cellules inflammatoires y libèrent des collagénases qui dissolvent le stroma. La sclère partage le même collagène et les mêmes vaisseaux : PUK et sclérite vont souvent ensemble. Une sclérite est souvent associée ; la dellen est une cause mécanique.",
    figure: {
      type: "eye",
      highlight: ["limbe", "cornee", "sclere", "conjonctive"]
    }
  },
  causal: {
    title: "De la maladie systémique à la perforation",
    steps: [
      { label: "Maladie auto-immune ou vasculite", detail: "Polyarthrite rhumatoïde (la plus fréquente), granulomatose avec polyangéite (GPA), lupus, polychondrite ; parfois aucune cause (Mooren).", kind: "cause" },
      { label: "Complexes immuns au limbe", detail: "Déposés dans les vaisseaux limbiques, ils activent le complément et attirent les neutrophiles.", kind: "mecanisme" },
      { label: "Collagénases qui dissolvent le stroma", detail: "Neutrophiles et kératocytes libèrent des métalloprotéinases (MMP) : le stroma fond sous un défaut épithélial.", kind: "mecanisme" },
      { label: "Croissant d’ulcère collé au limbe", detail: "Sans intervalle clair, il s’étend autour du limbe et vers le centre.", kind: "lesion" },
      { label: "Descémétocèle et perforation", detail: "Sans traitement systémique, la fonte atteint Descemet puis perce ; la vasculite peut toucher reins et poumons.", kind: "complication" }
    ],
    levers: [
      { at: 0, label: "Immunosuppression systémique", detail: "Corticostéroïdes oraux ou IV, puis immunosuppresseur choisi avec la rhumatologie : traite la source." },
      { at: 2, label: "Freiner les collagénases", detail: "Doxycycline orale, lubrification sans agent de conservation ; éviter les AINS topiques (anti-inflammatoires non stéroïdiens), qui favorisent la fonte." },
      { at: 4, label: "Colle, greffe tectonique", detail: "Colle cyanoacrylate + lentille pansement si petite perforation ; greffe lamellaire ou transfixiante tectonique sinon." }
    ]
  },
  risk: [
    "Polyarthrite rhumatoïde ancienne ou mal contrôlée",
    "Vasculites à ANCA (GPA), lupus, polychondrite",
    "Blépharite et rosacée : kératite marginale",
    "Lésion surélevée au limbe (chémosis, ptérygion, bulle) : dellen",
    "Chirurgie oculaire récente ; AINS topiques prolongés",
    "Terrien : cause inconnue, plus fréquente chez l’homme, souvent bilatérale"
  ],
  presentation: [
    "Kératite marginale : irritation modérée, infiltrats blancs vers 2, 4, 8 ou 10 h avec intervalle clair, blépharite",
    "PUK : douleur, rougeur, photophobie ; croissant d’amincissement et défaut épithélial collés au limbe",
    "Terrien : indolore, œil blanc, vision qui baisse lentement par astigmatisme",
    "Sclérite : douleur profonde qui réveille la nuit, globe sensible, rougeur violacée",
    "Épisclérite : rougeur en secteur, inconfort léger, vision normale"
  ],
  exam: {
    signs: [
      { sign: "Intervalle clair entre l’infiltrat et le limbe", why: "Présent dans la kératite marginale ; absent dans la PUK, collée au limbe." },
      { sign: "Défaut épithélial et amincissement en croissant", why: "Fonte active de la PUK ; estimer l’épaisseur perdue à chaque visite." },
      { sign: "Gouttière avec ligne de lipides, épithélium intact", why: "Terrien : non inflammatoire, souvent supérieur, astigmatisme contre la règle." },
      { sign: "Cuvette sèche à côté d’une lésion surélevée", why: "Dellen : se regonfle avec lubrification ou retrait de la lésion." },
      { sign: "Blanchiment au test à la phényléphrine", why: "La phényléphrine 2,5 % blanchit les vaisseaux superficiels (épisclérite), pas le plexus profond (sclérite)." },
      { sign: "Plages bleutées ou blanches avasculaires de la sclère", why: "Sclérite nécrosante ou scléromalacie perforante." }
    ],
    tests: [
      { test: "Bilan systémique : formule sanguine (FSC), créatinine, analyse d’urine, VS et CRP (inflammation), facteur rhumatoïde et anti-CCP (polyarthrite), ANCA (vasculites), ANA (lupus), syphilis, radiographie pulmonaire", when: "PUK, sclérite, Mooren présumé ; tuberculose et hépatites avant immunosuppression", read: "Maladie en cause, atteinte rénale ou pulmonaire." },
      { test: "Grattage et cultures", when: "Infiltrat, patient immunosupprimé", read: "Exclure l’infection avant d’intensifier les stéroïdes." },
      { test: "OCT du segment antérieur (AS-OCT), pachymétrie, topographie", when: "Suivi de l’amincissement", read: "Épaisseur résiduelle ; astigmatisme." },
      { test: "Échographie B", when: "Douleur sclérale, œil peu rouge, baisse de vision", read: "Liquide sous la capsule de Tenon, le long du nerf optique (signe du T) : sclérite postérieure." }
    ]
  },
  ddx: [
    { dx: "Kératite infectieuse périphérique", clue: "Infiltrat dense, sécrétions ; cultures positives." },
    { dx: "Ulcère de Mooren", clue: "Très douloureux, bord surplombant ; bilan systémique négatif." },
    { dx: "Dégénérescence marginale pellucide", clue: "Amincissement inférieur sans vaisseaux ni lipides." },
    { dx: "Arc sénile", clue: "Anneau lipidique avec intervalle clair, sans amincissement." },
    { dx: "Épisclérite", clue: "Vaisseaux superficiels qui blanchissent à la phényléphrine ; peu de douleur." }
  ],
  redFlags: [
    "Défaut et amincissement collés au limbe : PUK, rhumatologie le jour même",
    "Douleur nocturne, rougeur violacée qui ne blanchit pas, plage blanche : sclérite",
    "Descémétocèle ou Seidel positif : coquille, aucune pression, aviser le patron"
  ],
  cat: {
    algo: [
      { q: "Croissant limbique avec défaut et amincissement ?", yes: "PUK : bilan, rhumatologie et ophtalmo le jour même.", no: "", yesGo: 1, noGo: 2 },
      { q: "Descémétocèle ou perforation ?", yes: "Coquille ; colle si ≤ 2–3 mm, sinon greffe tectonique.", no: "Corticostéroïdes systémiques ; bilan négatif et ulcère surplombant : Mooren." },
      { q: "Intervalle clair, blépharite, peu d’amincissement ?", yes: "Kératite marginale : paupières + stéroïde doux court.", no: "", noGo: 3 },
      { q: "Œil blanc indolore, gouttière bordée de lipides ?", yes: "Terrien : topographie, correction optique, suivi.", no: "", noGo: 4 },
      { q: "Rougeur profonde qui ne blanchit pas ?", yes: "Sclérite : AINS oraux ; nécrosante : immunosuppression.", no: "Épisclérite : larmes froides ± AINS oral court." }
    ],
    phases: [
      {
        phase: "medical",
        items: [
          "Kératite marginale : soins des paupières, stéroïde doux quelques jours",
          "PUK, sclérite nécrosante : corticostéroïdes systémiques, puis immunosuppresseur (rhumatologie)",
          "Lubrifiants sans agent de conservation, doxycycline orale ; pas d’AINS topiques",
          "Sclérite non nécrosante : AINS oraux d’abord"
        ]
      },
      {
        phase: "chirurgie",
        items: [
          "Colle cyanoacrylate + lentille pansement ; greffe tectonique si grand trou",
          "Terrien : lentille rigide ou sclérale ; greffe lamellaire si amincissement extrême"
        ]
      },
      {
        phase: "suivi",
        items: ["PUK : revoir aux 1–3 jours au début, puis espacer ; PIO et cataracte sous stéroïdes"]
      },
      {
        phase: "escalade",
        items: ["Progression sous prednisone : cyclophosphamide ou rituximab, selon la rhumatologie"]
      }
    ],
    local: "Au Québec, PUK et sclérite nécrosante justifient un contact le jour même avec la rhumatologie ou la médecine interne du centre ; accès aux biologiques à vérifier localement."
  },
  treatments: [
    { name: "Soins des paupières + stéroïde topique court", dose: "Hygiène palpébrale + stéroïde doux 1–2 semaines.", pitfall: "Exclure d’abord l’infection.", how: "Nettoyer le bord libre réduit l’antigène ; le stéroïde éteint la réaction.", why: "Kératite marginale.", pros: "Résolution en quelques jours.", cons: "Récidives ; exclure d’abord l’infection.", cx: "Hausse de PIO, surinfection." },
    { name: "Corticostéroïdes systémiques et immunosuppresseurs", dose: "Prednisone orale, puis immunosuppresseur choisi par la rhumatologie.", qc: "Accès aux biologiques à vérifier.", how: "Freinent la vasculite à la source : prednisone rapide, puis méthotrexate, mycophénolate, cyclophosphamide ou rituximab.", why: "PUK, sclérite nécrosante, Mooren, sclérite résistante aux AINS.", pros: "Sauve l’œil, parfois la vie.", cons: "Choix et suivi par la rhumatologie.", cx: "Infections, diabète, ostéoporose, cytopénies." },
    { name: "Doxycycline orale et lubrification", dose: "Doxycycline 100 mg 2×/j + lubrifiants sans agent de conservation.", pitfall: "Appoint seulement.", how: "Doxycycline : inhibe les métalloprotéinases ; lubrifiants sans agent de conservation : protègent l’épithélium.", why: "PUK, fonte cornéenne, rosacée.", pros: "Oral, peu coûteux.", cons: "Appoint ; pas avant 8 ans ni en grossesse.", cx: "Photosensibilité, œsophagite." },
    { name: "AINS oraux", dose: "AINS oral (ibuprofène, naproxène) à dose anti-inflammatoire.", pitfall: "Pas d’AINS topiques sur une cornée amincie.", how: "Bloquent la cyclo-oxygénase (prostaglandines).", why: "Sclérite diffuse ou nodulaire, épisclérite tenace.", pros: "Souvent suffisants.", cons: "Insuffisants si nécrosante ; AINS topiques à éviter sur une cornée amincie.", cx: "Ulcère gastrique, atteinte rénale." },
    { name: "Colle cyanoacrylate, lentille pansement, greffe tectonique", dose: "Colle si trou ≤ 2–3 mm, sinon greffe tectonique.", pitfall: "Nouvelle fonte si la maladie est active.", how: "La colle bouche le trou et freine les neutrophiles ; la greffe remplace le tissu fondu.", why: "Descémétocèle, perforation ≤ 2–3 mm (colle) ou plus grande (greffe).", pros: "Referme vite le globe.", cons: "Nouvelle fonte si maladie active.", cx: "Colle décollée, rejet." }
  ],
  treatment: {
    first: [
      "**Externe / 1re ligne** : kératite marginale : hygiène palpébrale ; sclérite : ibuprofène ou naproxène oral.",
      "**Ophtalmologiste** : stéroïde doux, corticostéroïdes systémiques avec la rhumatologie, colle si perforation."
    ],
    refer: [
      "Le jour même si croissant qui s’amincit, sclérite douloureuse ou plage blanche — PUK ou nécrose.",
      "Immédiatement si descémétocèle ou Seidel positif — globe ouvert."
    ],
    pitfall: ["Kétorolac ou autre AINS topique sur une cornée amincie : fonte."],
    qc: ["PUK et sclérite nécrosante : rhumatologie du centre le jour même."]
  },
  pearls: [
    { q: "Kératite marginale ou PUK : quel signe regardes-tu en premier ?", a: "L’**intervalle clair** : bande transparente entre l’infiltrat et le limbe dans la kératite marginale. La PUK, collée au limbe, creuse le stroma et commande un **bilan systémique urgent**." },
    { q: "Pourquoi une PUK dans la polyarthrite rhumatoïde inquiète-t-elle l’interniste autant que toi ?", a: "Elle signale souvent une **vasculite systémique** active : dans une série classique (Foster, 1984), la mortalité était élevée sous traitement conventionnel, beaucoup plus faible sous immunosuppresseur cytotoxique." },
    { q: "Comment le test à la phényléphrine distingue-t-il épisclérite et sclérite ?", a: "La **phényléphrine 2,5 %** contracte en 10–15 minutes les vaisseaux superficiels : l’épisclérite blanchit, la sclérite (plexus profond) persiste." }
  ],
  mnemonic: { title: "Terrien, le « T » tranquille", text: "Terrien : tranquille (œil blanc), en haut, en tranchée bordée de lipides, astigmatisme contre la règle." },
  compare: {
    title: "Normal vs Terrien (cornée de profil)",
    normal: {
      figure: { type: "photo", id: "OPH-001" },
      caption: "Cornée normale de profil : courbe régulière, épaisseur uniforme."
    },
    patho: {
      figure: { type: "photo", id: "OPH-382" },
      caption: "Dégénérescence de Terrien de profil.",
      reveal: [
        "Au bord supérieur, la courbe cornéenne devient irrégulière et opaque : zone amincie",
        "Dépôt blanc-jaunâtre au front de la lésion : ligne de lipides",
        "Œil blanc, sans rougeur : maladie non inflammatoire",
        "Selon la source : épithélium intact et pannus sur la zone amincie"
      ]
    }
  },
  sources: [
    "AAO BCSC Section 8 : External Disease and Cornea",
    "Watson PG, Hayreh SS. Scleritis and episcleritis (Br J Ophthalmol 1976;60:163-91)",
    "Foster CS, Forstot SL, Wilson LA. Mortality rate in rheumatoid arthritis patients developing necrotizing scleritis or peripheral ulcerative keratitis (Ophthalmology 1984;91:1253-63)"
  ]
}
]);

// QCM B-211 à B-218
G.OPH.quiz = (G.OPH.quiz || []).concat([
  { id: "B-211", module: "B", topic: "c-surface", type: "image", level: 1, trap: false,
    stem: "Démangeaisons intenses qui reviennent chaque printemps, mucus filant, terrain atopique, aucune lentille. Voici la paupière supérieure éversée. Quel diagnostic, et quelle complication cornéenne faut-il chercher à chaque visite ?",
    figure: { type: "photo", id: "OPH-355" },
    options: [
      "Conjonctivite adénovirale ; chercher des infiltrats sous-épithéliaux",
      "Conjonctivite gigantopapillaire ; chercher une kératite amibienne",
      "Kératoconjonctivite vernale ; chercher un ulcère en bouclier",
      "Conjonctivite à Chlamydia ; chercher un pannus et des cicatrices"
    ],
    answer: 2,
    explain: "**Ce que c’est** : la vernale est une allergie chronique sévère du jeune atopique (surtout le garçon) qui forme des papilles géantes en pavés sur le tarse supérieur. **Pourquoi c’est important** : les protéines toxiques des éosinophiles et le frottement des pavés créent l’ulcère en bouclier de la cornée supérieure, qui menace la vision. **Quoi faire** : éverser la paupière et colorer la cornée à chaque visite ; bouclier = traitement le jour même.",
    why: [
      "Les follicules viraux sont de petits dômes pâles du cul-de-sac inférieur, pas de gros pavés du tarse supérieur ; et l’adénovirus ne revient pas chaque printemps.",
      "Les papilles des lentilles peuvent ressembler, mais il n’y a pas de lentille ; le contexte saisonnier et atopique oriente vers la vernale.",
      "Exact : pavés (papilles géantes) chez un atopique saisonnier ; l’ulcère en bouclier, sous la paupière, est l’urgence de la vernale.",
      "Chlamydia donne des follicules chroniques, pas des pavés prurigineux qui reviennent chaque printemps."
    ] },

  { id: "B-212", module: "B", topic: "c-surface", type: "cat", level: 1, trap: false,
    stem: "Infirmière de 34 ans : œil droit rouge et larmoyant depuis 3 jours, l’œil gauche commence. Sensation de sable, pas de douleur vraie, AV 6/6 (20/20). Follicules au cul-de-sac inférieur, ganglion préauriculaire sensible, cornée claire. Quelle conduite est la plus appropriée ?",
    figure: null,
    options: [
      "Compresses froides, larmes, hygiène des mains, retrait du travail au besoin",
      "Moxifloxacine 0,5 % QID pendant 7 jours pour prévenir une surinfection bactérienne",
      "Tobramycine-dexaméthasone QID pour raccourcir l’infection et réduire la rougeur",
      "Valacyclovir oral 1 g TID pendant 7 jours, à commencer dès aujourd’hui"
    ],
    answer: 0,
    explain: "**Ce que c’est** : une kératoconjonctivite adénovirale, très contagieuse (mains, instruments, tonomètres) pendant environ 2 semaines. **Pourquoi c’est important** : 1–2 semaines plus tard, des infiltrats sous-épithéliaux peuvent baisser la vision ; un stéroïde mal indiqué crée dépendance et rebond. **Quoi faire** : soutien, hygiène, désinfection du matériel ; revoir si douleur, photophobie ou vision qui baisse.",
    why: [
      "Exact : adénovirus probable ; traitement de soutien et prévention de la transmission.",
      "L’antibiotique n’agit pas sur le virus et ajoute toxicité et coûts sans bénéfice.",
      "Sans pseudomembranes ni infiltrats gênants, le stéroïde n’est pas justifié : il peut prolonger l’excrétion virale, masquer un herpès et monter la PIO.",
      "Le valacyclovir vise l’herpès ou le zona ; ici, atteinte bilatérale avec follicules et contexte de soins : adénovirus."
    ] },

  { id: "B-213", module: "B", topic: "c-surface", type: "image", level: 1, trap: false,
    stem: "Lentilles souples portées depuis des années : démangeaisons, mucus le matin, lentilles qui bougent et deviennent inconfortables. Voici la paupière supérieure retournée. Quelle est la meilleure conduite ?",
    figure: { type: "photo", id: "OPH-367" },
    options: [
      "Grattage cornéen, cultures et gouttes fortifiées aux heures jour et nuit",
      "Stéroïde topique fort au long cours en gardant les mêmes lentilles",
      "Biopsie de la conjonctive tarsale pour exclure un lymphome conjonctival",
      "Pause des lentilles, puis jetables journalières et stabilisateur"
    ],
    answer: 3,
    explain: "**Ce que c’est** : la conjonctivite gigantopapillaire est une réaction allergique et mécanique du tarse supérieur aux lentilles, à une prothèse oculaire ou à une suture exposée. **Pourquoi c’est important** : elle cause l’intolérance aux lentilles et ressemble à la vernale, mais sa cause se retire. **Quoi faire** : pause des lentilles, lentilles journalières ou entretien au peroxyde, stabilisateur des mastocytes ; stéroïde doux bref seulement si sévère, avec PIO.",
    why: [
      "Rien n’évoque une kératite infectieuse (ni douleur vraie ni infiltrat) ; on traite la réaction tarsale.",
      "Un stéroïde prolongé expose à la hausse de PIO et à la cataracte, sans retirer la cause (dépôts sur la lentille).",
      "Des papilles géantes sous lentilles ne demandent pas de biopsie ; on biopsie une lésion unilatérale atypique ou rebelle.",
      "Exact : retirer le déclencheur (dépôts protéiques, frottement), renouveler plus souvent la lentille, ajouter un antihistaminique-stabilisateur."
    ] },

  { id: "B-214", module: "B", topic: "c-surface", type: "cat", level: 2, trap: true,
    stem: "Étudiante de 22 ans : œil rouge depuis 6 semaines malgré deux antibiotiques topiques. Follicules marqués, même sur la conjonctive supérieure, ganglion préauriculaire, léger pannus supérieur. Nouveau partenaire il y a 2 mois. Quelle est la meilleure prochaine étape ?",
    figure: null,
    options: [
      "Changer pour une fluoroquinolone de 4e génération et revoir dans 2 semaines",
      "TAAN pour Chlamydia, traitement oral, partenaires, dépistage des ITSS",
      "Stéroïde topique pour une adénovirose prolongée, puis sevrage lent",
      "Antihistaminique-stabilisateur pour une conjonctivite allergique chronique"
    ],
    answer: 1,
    explain: "**Ce que c’est** : Chlamydia trachomatis (sérotypes génitaux D à K) cause une conjonctivite folliculaire chronique chez l’adulte jeune, souvent avec une infection génitale peu symptomatique. **Pourquoi c’est important** : les gouttes seules échouent ; partenaires et autres ITSS doivent être pris en charge. **Quoi faire** : TAAN de la conjonctive, doxycycline 100 mg BID × 7 j ou azithromycine 1 g en dose unique, dépistage et déclaration selon le guide québécois.",
    why: [
      "Le piège : une 3e goutte antibiotique ne traite ni l’infection génitale associée ni le partenaire.",
      "Exact : conjonctivite à inclusions de l’adulte probable ; traitement oral, partenaires, MADO.",
      "L’adénovirus guérit en 2–3 semaines ; 6 semaines avec pannus orientent vers Chlamydia, et un stéroïde masquerait le diagnostic.",
      "L’allergie donne des papilles et des démangeaisons, pas des follicules avec ganglion."
    ] },

  { id: "B-215", module: "B", topic: "c-peripherie", type: "image", level: 2, trap: false,
    stem: "Baisse de vision lente, sans douleur ni rougeur. Photo prise pendant que la personne regarde vers le bas ; la zone ne prend pas la fluorescéine. Quel diagnostic et quelle conduite ?",
    figure: { type: "photo", id: "OPH-381" },
    options: [
      "PUK : bilan systémique urgent et corticostéroïdes oraux le jour même",
      "Terrien : topographie, correction optique, protection",
      "Ulcère de Mooren : résection conjonctivale et immunosuppression",
      "Dégénérescence pellucide : CXL en urgence avant la perforation"
    ],
    answer: 1,
    explain: "**Ce que c’est** : la dégénérescence marginale de Terrien est un amincissement périphérique lent, non inflammatoire, souvent supérieur, avec vaisseaux fins et ligne de lipides au bord central. **Pourquoi c’est important** : on ne l’immunosupprime pas comme une PUK ; le risque est l’astigmatisme contre la règle et, rarement, la perforation après un choc. **Quoi faire** : topographie, lunettes ou lentille rigide ou sclérale, protection ; greffe lamellaire si amincissement extrême.",
    why: [
      "La PUK est douloureuse et rouge, avec défaut épithélial ; ici, œil calme et épithélium intact.",
      "Exact : amincissement supérieur avec ligne de lipides et fins vaisseaux, épithélium intact, œil blanc.",
      "Le Mooren est très douloureux, avec défaut épithélial et bord surplombant : rien de cela ici.",
      "La pellucide est inférieure, sans lipides ni vaisseaux ; et la CXL n’est jamais une urgence de quelques heures."
    ] },

  { id: "B-216", module: "B", topic: "c-peripherie", type: "diagnostic", level: 2, trap: false,
    stem: "Homme de 58 ans avec blépharite chronique : irritation et légère photophobie depuis 4 jours. Deux infiltrats blancs ovales à 4 h et 8 h, séparés du limbe par une bande de cornée claire, petit défaut épithélial superficiel, aucun amincissement, chambre calme. Quelle conduite est la plus appropriée ?",
    figure: null,
    options: [
      "Corticostéroïdes oraux et consultation urgente en rhumatologie",
      "Gouttes fortifiées aux heures après grattage et cultures",
      "Colle cyanoacrylate et lentille pansement le jour même",
      "Soins des paupières et stéroïde topique doux en cure courte"
    ],
    answer: 3,
    explain: "**Ce que c’est** : la kératite marginale est une réaction immunitaire aux antigènes des staphylocoques du bord palpébral ; les complexes immuns se déposent là où la paupière touche la cornée. **Pourquoi c’est important** : l’intervalle clair la distingue de la PUK, collée au limbe, qui exige un bilan systémique. **Quoi faire** : compresses chaudes, nettoyage du bord libre, stéroïde doux quelques jours après avoir exclu une infection ; doxycycline si rosacée ou récidives.",
    why: [
      "Réservé à la PUK, collée au limbe avec fonte stromale ; ici, intervalle clair et aucun amincissement.",
      "Petits infiltrats périphériques, chambre calme : critères 1-2-3 absents ; on revoit vite, mais l’infection n’est pas le premier diagnostic.",
      "La colle sert à la descémétocèle ou à la perforation ; il n’y a aucun amincissement.",
      "Exact : kératite marginale ; traiter le bord libre et éteindre la réaction, revoir en quelques jours."
    ] },

  { id: "B-217", module: "B", topic: "c-peripherie", type: "image", level: 2, trap: false,
    stem: "Douleur oculaire profonde depuis une semaine, qui réveille la nuit et irradie au front. Voici l’œil. Quelle conduite est la plus appropriée ?",
    figure: { type: "photo", id: "OPH-375" },
    options: [
      "Sclérite : bilan systémique et AINS oraux, rhumatologie si échec",
      "Épisclérite : larmes réfrigérées, revoir au besoin dans un mois",
      "Pinguéculite : stéroïde topique doux une semaine et larmes",
      "Conjonctivite bactérienne : antibiotique topique QID pendant 7 jours"
    ],
    answer: 0,
    explain: "**Ce que c’est** : la sclérite est une inflammation de la sclère, souvent liée à une maladie systémique (polyarthrite, vasculite) ; formes diffuse, nodulaire, nécrosante et postérieure. **Pourquoi c’est important** : douleur nocturne, teinte violacée et absence de blanchiment à la phényléphrine la distinguent de l’épisclérite ; la forme nécrosante peut perforer. **Quoi faire** : bilan systémique, AINS oraux si non nécrosante, sinon corticostéroïdes systémiques et immunosuppresseur.",
    why: [
      "Exact : sclérite nodulaire (nodule scléral, vaisseaux profonds) ; forme non nécrosante, donc AINS oraux d’abord, avec bilan systémique.",
      "L’épisclérite blanchit à la phényléphrine et fait peu mal ; une douleur nocturne qui irradie oriente vers la sclérite.",
      "La pinguéculite est un nodule jaunâtre de la conjonctive, peu douloureux ; ici le nodule est scléral, profond et très douloureux.",
      "Pas de sécrétions ; un antibiotique retarderait le diagnostic et le bilan."
    ] },

  { id: "B-218", module: "B", topic: "c-peripherie", type: "cat", level: 3, trap: true,
    stem: "Femme de 70 ans atteinte de polyarthrite rhumatoïde : PUK avec défaut épithélial et amincissement du tiers de l’épaisseur à 3 h, sans perforation. Rhumatologie avisée, prednisone orale commencée. Laquelle de ces mesures faut-il éviter ?",
    figure: null,
    options: [
      "Doxycycline orale pour freiner les collagénases",
      "Lubrifiants fréquents sans agent de conservation",
      "Kétorolac topique QID pour soulager la douleur",
      "Coquille protectrice, sans pression sur l’œil"
    ],
    answer: 2,
    explain: "**Ce que c’est** : la PUK fait fondre le stroma par des collagénases libérées autour de vaisseaux limbiques enflammés. **Pourquoi c’est important** : les AINS topiques peuvent favoriser la fonte cornéenne ; c’est un piège quand on veut soulager la douleur ou une sclérite associée. **Quoi faire** : traitement systémique avec la rhumatologie, lubrification, doxycycline, protection ; colle et lentille pansement si descémétocèle ou petite perforation.",
    why: [
      "Utile : inhibe les métalloprotéinases qui dissolvent le stroma.",
      "Utile : protège l’épithélium et dilue les médiateurs, sans la toxicité des agents de conservation.",
      "Exact, à éviter : les AINS topiques ont été associés à des fontes cornéennes, surtout sur une surface malade et amincie.",
      "Utile : protège un globe aminci des frottements et des chocs."
    ] }
]);

// Cas évolutif cas-b5
G.OPH.cases = (G.OPH.cases || []).concat([
  {
    id: "cas-b5",
    module: "B",
    title: "Polyarthrite rhumatoïde et œil rouge douloureux",
    tags: ["urgent", "highyield"],
    intro: "Femme de 66 ans, polyarthrite rhumatoïde depuis 20 ans, méthotrexate pris de façon irrégulière depuis l’hiver. Œil droit rouge et douloureux depuis 5 jours : douleur profonde qui la réveille la nuit, larmoiement, photophobie. Elle prend de l’ibuprofène et des larmes artificielles. AV OD 6/12 (20/40), OS 6/6 (20/20) ; PIO normale aux deux yeux.",
    steps: [
      { kind: "exams", prompt: "Quels examens fais-tu maintenant ? (choisis-en 3)", pick: 3,
        options: [
          { label: "Test à la phényléphrine 2,5 % sur la rougeur", result: "Après 15 minutes, la rougeur superficielle pâlit un peu, mais la teinte violacée profonde de 7 h à 9 h persiste.", value: 1, note: "Confirme une sclérite associée ; utile, mais la cornée et le bilan systémique priment." },
          { label: "Gonioscopie avec indentation au verre à 4 miroirs", result: "Angle ouvert ; la pression du verre est douloureuse sur la cornée amincie.", value: -1, note: "Sans utilité ici, et toute pression est à éviter sur une cornée qui fond." },
          { label: "Lampe à fente avec fluorescéine, estimation de l’amincissement", result: "Croissant de 4 mm le long du limbe inférotemporal (7 h à 9 h) : défaut épithélial, stroma aminci d’environ 30 %, aucun intervalle clair avec le limbe ; Seidel négatif ; rares cellules en chambre antérieure.", value: 2, note: "L’examen clé : collé au limbe + défaut épithélial + amincissement = PUK." },
          { label: "Champ visuel Humphrey 24-2", result: "Peu fiable (douleur, photophobie) ; aucune décision n’en découle.", value: 0, note: "Retarde la prise en charge sans rien apporter." },
          { label: "Bilan : FSC, créatinine, urine, VS, CRP, facteur rhumatoïde, anti-CCP, ANCA, radiographie pulmonaire", result: "VS et CRP élevées, facteur rhumatoïde et anti-CCP très positifs, ANCA négatifs, créatinine et urine normales ; radiographie en attente.", value: 2, note: "Indispensable dès le premier jour : la PUK peut annoncer une vasculite systémique." },
          { label: "Grattage du bord de l’ulcère, Gram et cultures", result: "Gram sans bactérie ; cultures négatives à 48 h.", value: 1, note: "Utile chez une patiente immunosupprimée : exclut l’infection avant d’intensifier l’immunosuppression." },
          { label: "AS-OCT de la zone amincie", result: "Environ 70 % d’épaisseur résiduelle au point le plus mince ; sert de référence.", value: 1, note: "Documente l’épaisseur pour suivre la progression." }
        ] },
      { kind: "choice", prompt: "Quel diagnostic retiens-tu ?",
        options: [
          { label: "Kératite marginale staphylococcique", correct: false, note: "Elle laisse un intervalle clair et amincit peu ; ici, croissant collé au limbe avec fonte et sclérite." },
          { label: "Dégénérescence marginale de Terrien", correct: false, note: "Terrien est indolore, œil blanc, épithélium intact : l’inverse de ce tableau." },
          { label: "PUK associée à une sclérite", correct: true, note: "Exact : croissant collé au limbe, défaut épithélial, amincissement, sclérite adjacente, polyarthrite mal contrôlée." },
          { label: "Ulcère de Mooren idiopathique", correct: false, note: "Diagnostic d’exclusion : on ne le retient pas chez une patiente atteinte de polyarthrite." },
          { label: "Kératite bactérienne périphérique", correct: false, note: "Toujours à exclure (cultures), mais la sclérite et le contexte orientent vers une PUK auto-immune." }
        ] },
      { kind: "choice", prompt: "Quelle prise en charge immédiate choisis-tu ?",
        options: [
          { label: "Stéroïde topique fort aux heures seul, revoir dans une semaine", correct: false, note: "Ne traite pas la vasculite et peut aggraver la fonte s’il est utilisé seul ; le suivi doit être rapproché." },
          { label: "Rhumatologie le jour même, prednisone orale, doxycycline, lubrifiants", correct: true, note: "Exact : la PUK se traite par voie systémique (dose décidée avec la rhumatologie) ; doxycycline et lubrifiants sans agent de conservation protègent le stroma ; cesser l’ibuprofène si la prednisone commence." },
          { label: "Kétorolac topique pour la sclérite et la douleur, revoir dans 2 semaines", correct: false, note: "AINS topique : risque de fonte cornéenne ; délai beaucoup trop long." },
          { label: "Larmes artificielles et compresses chaudes, revoir dans 4 semaines", correct: false, note: "Traitement de blépharite : la fonte progresserait." }
        ] },
      { kind: "info", text: "Jour 5 : la douleur a diminué sous prednisone, mais l’amincissement progresse : il reste environ 20 % d’épaisseur sur 2 mm, avec une petite descémétocèle qui bombe ; Seidel négatif. La rhumatologue apprend que la patiente a cessé le méthotrexate depuis 3 mois, soupçonne une vasculite rhumatoïde et planifie un agent plus puissant. La photo montre un cas semblable chez un autre patient (selon la source : fonte périphérique avec inflammation sur polyarthrite rhumatoïde).", figure: { type: "photo", id: "OPH-377" } },
      { kind: "choice", prompt: "Que fais-tu pour la cornée aujourd’hui ?",
        options: [
          { label: "Pansement compressif 48 h pour aider l’épithélium à fermer", correct: false, note: "Toute pression sur une descémétocèle peut la perforer." },
          { label: "Greffe transfixiante de grand diamètre dès aujourd’hui", correct: false, note: "Sur un œil enflammé, le greffon fond ou est rejeté ; la greffe tectonique est réservée aux perforations trop grandes pour la colle." },
          { label: "Doubler le stéroïde topique pour éteindre la fonte", correct: false, note: "Le stéroïde topique freine la réparation du stroma ; la fonte se contrôle par voie systémique." },
          { label: "Colle cyanoacrylate, lentille pansement et coquille", correct: true, note: "Exact : renforce la zone, freine l’afflux de neutrophiles et protège ; on poursuit l’immunosuppression systémique." }
        ] },
      { kind: "choice", prompt: "Comment organises-tu le suivi ?",
        options: [
          { label: "Revoir aux 1–2 jours avec la rhumatologie, puis espacer", correct: true, note: "Exact : surveiller colle, Seidel, épaisseur, infection et PIO pendant que le traitement systémique prend effet." },
          { label: "Revoir dans 3 mois si la douleur ne revient pas d’ici là", correct: false, note: "Sous stéroïdes, la fonte peut progresser sans douleur ; ce serait trop tard." },
          { label: "Cesser la prednisone dès que l’œil redevient blanc", correct: false, note: "Un arrêt brusque expose à la rechute de la vasculite et à l’insuffisance surrénalienne ; le sevrage est piloté par la rhumatologie." },
          { label: "Retirer la colle à la prochaine visite pour examiner la cornée", correct: false, note: "La colle reste jusqu’à ce qu’elle tombe d’elle-même ou que le stroma soit consolidé ; la retirer tôt risque la perforation." }
        ] }
    ],
    debrief: [
      "Croissant collé au limbe + défaut épithélial + amincissement = PUK ; l’intervalle clair et l’absence de fonte orientent plutôt vers une kératite marginale.",
      "La PUK est une maladie systémique : bilan (FSC, créatinine, urine, VS, CRP, facteur rhumatoïde, anti-CCP, ANCA, radiographie) et rhumatologie le jour même ; le traitement est systémique.",
      "Pas d’AINS topiques ni de stéroïde topique seul sur une cornée qui fond ; doxycycline, lubrifiants sans agent de conservation, protection.",
      "Descémétocèle ou petite perforation : colle cyanoacrylate + lentille pansement ; greffe tectonique si le trou est trop grand.",
      "Sclérite associée (douleur nocturne, teinte violacée, pas de blanchiment à la phényléphrine) : pronostic plus sombre, immunosuppression d’autant plus indiquée."
    ]
  }
]);

// Photos (2e catalogue)
G.OPH.photos = G.OPH.photos || {};
(function (add) { Object.keys(add).forEach(function (k) { G.OPH.photos[k] = (G.OPH.photos[k] || []).concat(add[k]); }); })({
  "c-surface": [
    { id: "OPH-341", caption: "Follicules de la conjonctive palpébrale inférieure (conjonctivite folliculaire)", look: "Paupière inférieure tirée vers le bas : regarde la forme des élévations et où passent les vaisseaux.", reveal: ["Petites élévations rondes, pâles et translucides, en dôme, sur la conjonctive palpébrale inférieure", "Les vaisseaux contournent les élévations par leur base au lieu d’en occuper le centre : ce sont des follicules", "Conjonctive bulbaire au-dessus modérément injectée"] },
    { id: "OPH-383", caption: "Points de Horner-Trantas au limbe (kératoconjonctivite vernale limbique)", look: "Suis le limbe tout autour de la cornée, en commençant par le haut.", reveal: ["Petits amas blanc-gélatineux le long du limbe, surtout en haut : points de Horner-Trantas (amas d’éosinophiles)", "Limbe épaissi et irrégulier par endroits", "Injection diffuse de la conjonctive bulbaire"] },
    { id: "OPH-361", caption: "Injection de la conjonctive bulbaire supérieure (kératoconjonctivite limbique supérieure)", look: "Compare la rougeur de la conjonctive au-dessus de la cornée à celle du reste de l’œil.", reveal: ["Rougeur concentrée sur la conjonctive bulbaire supérieure, avec vaisseaux dilatés qui descendent vers le limbe supérieur", "Atteinte maximale juste au-dessus du limbe supérieur, zone couverte par la paupière", "Fluorescéine visible dans le ménisque lacrymal inférieur, en bas à gauche"] },
    { id: "OPH-359", caption: "Kératite de rosacée : pannus inférieur et opacités", look: "Regarde le bord de la paupière inférieure, puis la moitié inférieure de la cornée.", reveal: ["Vaisseaux qui envahissent la cornée par le bas : pannus inférieur", "Opacités blanc-gris dans la cornée inférieure, décrites par la source comme semblables à une dégénérescence de Salzmann", "Bord palpébral inférieur épaissi et irrégulier, avec débris", "Selon la source : atteinte bilatérale"] },
    { id: "OPH-330", caption: "Blépharokératoconjonctivite de l’enfant", look: "Regarde la paupière supérieure, puis le bas de la cornée.", reveal: ["Paupière supérieure rouge et gonflée avec une lésion croûteuse au-dessus des cils", "Vaisseau qui part du limbe inférieur et s’avance vers le centre de la cornée", "Injection de la conjonctive bulbaire, surtout à gauche de l’image", "Selon la source : phlyctènes cornéennes et kératite filamenteuse"] },
    { id: "OPH-356", caption: "Pinguécula jaunâtre de la conjonctive bulbaire", look: "Regarde la conjonctive dans la fente des paupières, de part et d’autre de la cornée.", reveal: ["Dépôt jaunâtre légèrement surélevé de la conjonctive bulbaire, à gauche de la cornée sur l’image", "Il s’arrête au limbe et ne s’avance pas sur la cornée (différence avec le ptérygion)", "Fins vaisseaux autour du dépôt, sans signe d’inflammation décrit par la source : pinguécula, pas pinguéculite"] }
  ],
  "c-peripherie": [
    { id: "OPH-377", caption: "Fonte cornéenne périphérique avec inflammation (PUK sur polyarthrite rhumatoïde)", look: "Suis la fente lumineuse et la cornée vers le limbe situé à gauche de l’image.", reveal: ["Conjonctive et épisclère très injectées à gauche de l’image, contre le limbe", "Cornée périphérique adjacente blanchâtre et irrégulière, collée au limbe, sans intervalle clair", "La fente lumineuse se déforme en regard de la lésion : relief cornéen irrégulier (fonte)", "Fins vaisseaux qui s’avancent dans la cornée près de la lésion"] },
    { id: "OPH-382", caption: "Dégénérescence marginale de Terrien, vue de profil", look: "Regarde le profil de la cornée, surtout son bord supérieur.", reveal: ["Au bord supérieur, la courbe cornéenne devient irrégulière et opaque : zone amincie", "Dépôt blanc-jaunâtre au front de la lésion : ligne de lipides", "Œil blanc et calme", "Selon la source : épithélium intact et pannus sur la zone amincie"] },
    { id: "OPH-380", caption: "Sclérite antérieure : rougeur profonde et étendue", look: "Observe la couleur et la profondeur des vaisseaux dilatés.", reveal: ["Rougeur intense de toute la moitié droite du globe sur l’image", "Réseau de gros vaisseaux profonds entrecroisés, teinte rouge sombre", "Cornée claire, sans infiltrat visible"] },
    { id: "OPH-360", caption: "Scléromalacie perforante : plages bleutées de sclère amincie", look: "La personne regarde vers le bas : examine la sclère supérieure exposée.", reveal: ["Plages gris-bleu foncé dans la sclère supérieure : l’uvée se voit à travers la sclère amincie", "Dôme bleu foncé en haut à gauche de l’image, là où la sclère est la plus mince", "Vaisseaux conjonctivaux visibles, sans rougeur intense diffuse"] },
    { id: "OPH-337", caption: "Dellen à côté d’un chémosis nasal persistant", look: "Regarde la conjonctive soulevée, puis le bord de la cornée juste à côté.", reveal: ["Conjonctive gonflée et soulevée (chémosis) du côté de la caroncule, à gauche de l’image", "Au limbe adjacent, petite zone cornéenne irrégulière et luisante : la dellen", "Reste de la cornée clair"] }
  ]
});

// Glossaire (termes nouveaux)
G.OPH.glossary = G.OPH.glossary || {};
Object.assign(G.OPH.glossary, {
  "follicules": "Petits dômes pâles de la conjonctive formés d’amas de lymphocytes, avec des vaisseaux autour de la base ; évoquent virus, Chlamydia ou toxicité de gouttes.",
  "papilles": "Reliefs polygonaux de la conjonctive avec un vaisseau central ; réaction peu spécifique (allergie, lentilles, blépharite, bactérie).",
  "papilles géantes": "Papilles de plus de 1 mm, en pavés sur le tarse supérieur : vernale, atopique ou conjonctivite gigantopapillaire (lentilles, prothèse, suture).",
  "ganglion préauriculaire": "Ganglion lymphatique devant l’oreille ; palpable et sensible dans les conjonctivites à adénovirus, herpès, Chlamydia ou gonocoque.",
  "infiltrats sous-épithéliaux": "Petites opacités rondes sous l’épithélium, 1–2 semaines après une adénovirose ; réaction immunitaire qui peut brouiller la vision pendant des mois.",
  "pseudomembranes": "Couche de fibrine et de cellules collée à la conjonctive tarsale, qui se pèle sans saigner ; adénovirus sévère notamment.",
  "points de Horner-Trantas": "Petits amas blancs gélatineux au limbe, faits d’éosinophiles et de cellules épithéliales ; typiques de la kératoconjonctivite vernale.",
  "ulcère en bouclier": "Défaut épithélial ovale de la cornée supérieure dans la vernale, parfois couvert d’une plaque de mucus et de fibrine ; traitement le jour même.",
  "KLS": "Kératoconjonctivite limbique supérieure : inflammation de la conjonctive bulbaire supérieure et du limbe, souvent associée à une maladie thyroïdienne.",
  "stabilisateur des mastocytes": "Goutte qui empêche les mastocytes de libérer histamine et médiateurs ; effet préventif, souvent combinée à un antihistaminique (olopatadine, kétotifène).",
  "pannus": "Vaisseaux et tissu fibreux qui envahissent la cornée périphérique à partir du limbe (Chlamydia en haut, rosacée en bas, lentilles).",
  "phlyctènes": "Petits nodules inflammatoires blancs au limbe ou sur la cornée, réaction d’hypersensibilité (staphylocoque, rosacée) ; laissent souvent un vaisseau derrière eux.",
  "symblépharon": "Adhérence cicatricielle entre la conjonctive de la paupière et celle du globe ; complication des inflammations chroniques sévères et des brûlures.",
  "TAAN": "Test d’amplification des acides nucléiques (PCR) ; détecte Chlamydia et gonocoque sur un écouvillon conjonctival.",
  "ITSS": "Infections transmissibles sexuellement et par le sang (Chlamydia, gonorrhée, syphilis, VIH, hépatites).",
  "pinguéculite": "Pinguécula enflammée : nodule jaunâtre rouge et irrité au limbe nasal ou temporal ; larmes, ± stéroïde ou AINS topique court.",
  "kératite marginale": "Infiltrats stériles de la cornée périphérique séparés du limbe par un intervalle clair ; réaction aux antigènes staphylococciques du bord palpébral.",
  "intervalle clair": "Bande de cornée transparente entre une lésion périphérique et le limbe ; présente dans la kératite marginale et l’arc sénile, absente dans la PUK.",
  "ulcère de Mooren": "Ulcère périphérique très douloureux, à bord surplombant, sans maladie systémique ; diagnostic d’exclusion après un bilan complet.",
  "Terrien": "Dégénérescence marginale de Terrien : amincissement périphérique lent, indolore, souvent supérieur, avec ligne de lipides et astigmatisme contre la règle.",
  "dellen": "Petite cuvette d’amincissement cornéen par dessèchement, à côté d’une lésion surélevée qui empêche les larmes de s’étaler ; réversible avec lubrification.",
  "test à la phényléphrine": "Une goutte de phényléphrine 2,5 % blanchit les vaisseaux épiscléraux superficiels (épisclérite) mais pas le plexus profond (sclérite).",
  "épisclérite": "Inflammation bénigne du tissu sous la conjonctive : rougeur en secteur peu douloureuse qui blanchit à la phényléphrine ; souvent idiopathique et spontanément résolutive.",
  "sclérite": "Inflammation de la sclère, douloureuse (réveille la nuit), teinte violacée, souvent liée à une maladie systémique ; formes diffuse, nodulaire, nécrosante, postérieure.",
  "scléromalacie perforante": "Sclérite nécrosante sans inflammation, surtout dans la polyarthrite rhumatoïde ancienne : plages bleutées de sclère amincie laissant voir l’uvée.",
  "sclérite postérieure": "Sclérite en arrière de l’équateur : douleur, peu de rougeur, plis choroïdiens, décollement exsudatif ; échographie B avec signe du T.",
  "complexes immuns": "Anticorps liés à leur antigène qui se déposent dans les petits vaisseaux, activent le complément et attirent les neutrophiles (vasculite).",
  "collagénases": "Enzymes (métalloprotéinases) qui découpent le collagène ; libérées par neutrophiles et kératocytes, elles font fondre le stroma.",
  "GPA": "Granulomatose avec polyangéite (anciennement maladie de Wegener) : vasculite à ANCA touchant sinus, poumons et reins ; peut causer PUK et sclérite nécrosante.",
  "ANCA": "Anticorps anticytoplasme des neutrophiles ; marqueurs des vasculites comme la GPA.",
  "AINS": "Anti-inflammatoires non stéroïdiens (ibuprofène, naproxène ; kétorolac en gouttes) : bloquent la cyclo-oxygénase ; en gouttes, à éviter sur une cornée qui s’amincit."
});
