var G = (typeof window !== 'undefined') ? window : globalThis;
G.OPH = G.OPH || {};

// Module B — Cornée : 10 fiches de pathologie + bonus « à reconnaître »
G.OPH.fiches = (G.OPH.fiches || []).concat([

  // 1. Sécheresse oculaire et dysfonction meibomienne
  {
  id: "c-secheresse",
  module: "B",
  order: 1,
  title: "Sécheresse oculaire et dysfonction meibomienne",
  en: "Dry eye disease and meibomian gland dysfunction",
  tags: ["frequent", "highyield"],
  oneLiner: "Brûlure, sable, vision qui fluctue au clignement : chercher un film instable, des glandes de Meibomius bouchées ou une goutte toxique.",
  definition: "Film lacrymal instable qui irrite la surface. Le plus souvent, l’huile des glandes de Meibomius est en cause.",
  anatomy: {
    text: "Le film lacrymal (tear film) comprend une couche d’huile des glandes de Meibomius, qui freine l’évaporation, posée sur une phase muco-aqueuse : l’eau de la glande lacrymale mêlée au mucus des cellules caliciformes, qui rend l’épithélium mouillable. Le clignement étale le film et vide les glandes de leur huile.",
    figure: {
      type: "cornea",
      highlight: ["film", "epithelium"]
    }
  },
  causal: {
    title: "Le cercle vicieux de la sécheresse",
    steps: [
      { label: "Moteurs de la maladie", detail: "Glandes de Meibomius bouchées (meibomian gland dysfunction, MGD), moins de larmes (âge, syndrome de Sjögren : maladie auto-immune des glandes), clignement rare aux écrans, gouttes toxiques.", kind: "cause" },
      { label: "Évaporation, larmes trop salées", detail: "Sans bonne couche d’huile, l’eau s’évapore : le film se rompt entre deux clignements et les sels se concentrent.", kind: "mecanisme" },
      { label: "Inflammation de la surface", detail: "Ces larmes salées agressent l’épithélium, qui s’enflamme ; les cellules à mucus meurent, la surface se mouille moins bien : cercle vicieux.", kind: "lesion" },
      { label: "Kératite ponctuée, symptômes", detail: "Les cellules abîmées prennent la fluorescéine en petits points verts (kératite ponctuée superficielle, superficial punctate keratitis) : brûlure, sable, vision qui fluctue.", kind: "signe" },
      { label: "Nerfs cornéens déréglés", detail: "À la longue, la douleur peut devenir hors de proportion avec l’examen (composante neuropathique).", kind: "complication" }
    ],
    levers: [
      { at: 0, label: "Traiter la cause", detail: "Soins des paupières, arrêt des gouttes avec agent de conservation, pauses écran, traitement du Demodex (acarien des cils)." },
      { at: 1, label: "Larmes artificielles, bouchons", detail: "Ajoutent de l’eau et diluent les sels ; les bouchons méatiques (petits bouchons dans l’orifice de drainage des larmes) gardent les larmes sur l’œil." },
      { at: 2, label: "Anti-inflammatoires", detail: "Cyclosporine ou lifitégrast (gouttes qui freinent les lymphocytes) ou stéroïde doux en cure courte : coupent l’inflammation qui entretient le cercle." }
    ]
  },
  risk: [
    "Âge, sexe féminin, ménopause",
    "Écrans (on cligne moins), air sec, lentilles cornéennes",
    "Gouttes avec chlorure de benzalkonium (BAK, agent de conservation détergent), surtout pour le glaucome",
    "Antihistaminiques, antidépresseurs, isotrétinoïne (contre l’acné)",
    "Sjögren, rosacée, chirurgie réfractive au laser (LASIK)"
  ],
  presentation: [
    "Brûlure, sable, pires le soir et aux écrans",
    "Vision qui fluctue et s’éclaircit en clignant",
    "Larmoiement paradoxal : l’irritation déclenche des larmes réflexes"
  ],
  exam: {
    signs: [
      { sign: "Temps de rupture du film (tear break-up time, TBUT) < 10 s", why: "Délai entre clignement et première tache sèche ; mesuré sans fluorescéine (NIBUT), c’est un critère de TFOS DEWS III (consensus international 2025)." },
      { sign: "Huile épaisse ou absente à l’expression des glandes", why: "Confirme la MGD, cause la plus fréquente." },
      { sign: "Siège de la kératite ponctuée", why: "Inférieure : MGD, exposition, gouttes toxiques ; entre les paupières : manque d’eau." },
      { sign: "Pellicules cylindriques à la base des cils", why: "Signent une blépharite à Demodex, qui a son propre traitement." }
    ],
    tests: [
      { test: "Questionnaire OSDI-6 (6 questions sur les symptômes)", when: "Tout patient qui se plaint", read: "Score ≥ 4 = symptomatique ; requis avant de chercher un signe." },
      { test: "Fluorescéine (cornée) et vert de lissamine (conjonctive), colorants des cellules abîmées", when: "Tout patient symptomatique", read: "> 5 points cornéens ou > 9 points conjonctivaux = signe DEWS III ; le siège des points oriente vers la cause." },
      { test: "Osmolarité des larmes (appareil qui mesure leur concentration en sels)", when: "Si l’appareil est disponible", read: "≥ 308 mOsm/L dans un œil ou écart > 8 mOsm/L entre les yeux = signe DEWS III." },
      { test: "Schirmer sans anesthésie (papier filtre au bord de la paupière, 5 min)", when: "Suspicion de manque de larmes", read: "< 5 mm = déficit sévère : chercher un Sjögren (anticorps anti-SSA/SSB) avec le médecin de famille." }
    ]
  },
  ddx: [
    { dx: "Conjonctivite allergique", clue: "Démangeaisons au premier plan, terrain atopique." },
    { dx: "Kératite neurotrophique (cornée insensible qui cicatrise mal)", clue: "Peu de douleur pour beaucoup de coloration." },
    { dx: "Douleur neuropathique oculaire", clue: "Douleur forte, surface presque normale ; persiste après une goutte d’anesthésique." }
  ],
  redFlags: [
    "Bouche sèche, douleurs articulaires : Sjögren (risque de lymphome)",
    "Ulcère, amincissement ou infiltrat blanc : ce n’est plus une simple sécheresse",
    "Blépharite rebelle d’un seul côté : exclure un carcinome sébacé (cancer de la paupière)"
  ],
  cat: {
    vignette: "Femme de 58 ans : yeux qui brûlent le soir, pire à l’écran. Paupières épaissies, larmes instables, points de fluorescéine en bas.",
    algo: [
      { q: "Symptômes (OSDI-6 ≥ 4) et un signe objectif ?", yes: "", no: "Penser allergie, douleur neuropathique, autre cause.", yesGo: 1 },
      { q: "Glandes de Meibomius bouchées ou Demodex ?", yes: "Soins des paupières ; IPL si échec.", no: "Manque d’eau : larmes, bouchons, bilan de Sjögren.", yesGo: 2, noGo: 2 },
      { q: "Encore symptomatique après 1–2 mois ?", yes: "Ajouter cyclosporine ou lifitégrast ; référer si sévère.", no: "Poursuivre et espacer le suivi." }
    ],
    phases: [
      {
        phase: "medical",
        items: [
          "Larmes sans agent de conservation 4–6 fois par jour, gel au coucher ; pauses écran",
          "Glandes bouchées : compresses chaudes 5–10 min puis massage des paupières, 1–2 fois par jour",
          "Inflammation : cyclosporine ou lifitégrast ; stéroïde doux quelques semaines ; doxycycline orale à faible dose (anti-inflammatoire) si rosacée",
          "Demodex : nettoyant à l’huile de théier ; lotilaner (antiparasitaire en gouttes) approuvé aux É.-U."
        ]
      },
      {
        phase: "laser",
        items: ["IPL (intense pulsed light : flashs lumineux sur la peau des paupières) si glandes rebelles"]
      },
      {
        phase: "chirurgie",
        items: ["Bouchons méatiques posés au cabinet si manque d’eau, une fois l’inflammation calmée"]
      },
      {
        phase: "suivi",
        items: ["Revoir à 1–3 mois ; monter d’un palier si besoin"]
      },
      {
        phase: "escalade",
        items: ["Sévère : sérum autologue (gouttes faites avec le sang du patient), lentille sclérale (grande lentille rigide avec réservoir de liquide)"]
      }
    ],
    local: "Au Québec, l’optométriste traite la plupart des sécheresses et dirige en ophtalmologie si atteinte sévère, Sjögren ou échec ; IPL surtout au privé ; remboursement de la cyclosporine et du lifitégrast variable selon le régime."
  },
  treatments: [
    { name: "Larmes artificielles sans agent de conservation", dose: "1 goutte 4–6 fois par jour, plus au besoin.", pitfall: "Flacon avec BAK + usage fréquent = toxicité.", how: "Gouttes lubrifiantes en unidoses ou flacon spécial : ajoutent du liquide et diluent les sels ; les émulsions renforcent la couche d’huile.", why: "Toute sécheresse ; premier palier.", pros: "Sûres, sans ordonnance, soulagement immédiat.", cons: "Effet bref ; le BAK devient toxique si usage fréquent.", cx: "Vision brouillée avec gels et onguents." },
    { name: "Soins des paupières, IPL", dose: "Compresses chaudes 5–10 min + massage, 1–2 fois par jour.", pitfall: "Arrêter les soins = rechute.", qc: "IPL surtout offerte au privé.", how: "Compresses chaudes et massage à la maison ; en clinique, IPL ou thermopulsation (appareil qui chauffe et presse les paupières) : la chaleur fond l’huile figée, la pression vide les glandes.", why: "Dysfonction meibomienne, cause la plus fréquente.", pros: "Traite la cause ; effet de l’IPL sur des mois.", cons: "Demande de la constance ; IPL coûteuse.", cx: "Brûlure cutanée ; yeux protégés pendant l’IPL." },
    { name: "Cyclosporine ou lifitégrast", dose: "Cyclosporine 0,05–0,09 % ou lifitégrast 5 %, 1 goutte 2 fois par jour.", pitfall: "Effet après plusieurs semaines : ne pas arrêter trop tôt.", qc: "Remboursement variable selon le régime d’assurance.", how: "Gouttes anti-inflammatoires sur ordonnance, 2 fois par jour : la cyclosporine bloque l’activation des lymphocytes T, le lifitégrast bloque leur arrimage (LFA-1/ICAM-1).", why: "Inflammation qui persiste malgré les larmes.", pros: "Pas de hausse de pression ni de cataracte au long cours, contrairement aux stéroïdes.", cons: "Effet après plusieurs semaines ; coût.", cx: "Brûlure à l’instillation ; goût métallique (lifitégrast)." }
  ],
  treatment: {
    first: [
      "**1re ligne** : larmes sans agent de conservation 4–6×/j, compresses chaudes 1–2×/j.",
      "**Ophtalmologiste** : cyclosporine ou lifitégrast, bouchons, IPL."
    ],
    refer: [
      "Cette semaine si ulcère, amincissement ou bouche sèche (Sjögren) — la cornée est menacée.",
      "Suivi régulier sinon — maladie chronique traitée par paliers."
    ],
    pitfall: ["Larmes avec BAK plus de 4×/j : toxiques pour la surface."],
    qc: ["L’optométriste traite la plupart des cas ; IPL surtout au privé."]
  },
  pearls: [
    { q: "Quels sont les critères diagnostiques de TFOS DEWS III ?", a: "OSDI-6 ≥ 4 plus un signe : NIBUT < 10 s, osmolarité ≥ 308 mOsm/L (ou écart > 8 entre les yeux), > 5 points cornéens à la fluorescéine ou > 9 points conjonctivaux au vert de lissamine (colorant des cellules abîmées). **Sans symptômes, pas de sécheresse.**" },
    { q: "Pourquoi le glaucomateux sous trois gouttes a-t-il les yeux secs ?", a: "Le BAK, un détergent, tue les cellules à mucus et entretient l’inflammation. On passe aux gouttes sans agent de conservation, aux combinaisons fixes ou à la SLT (laser qui abaisse la pression)." },
    { q: "Recommandes-tu les oméga-3 ?", a: "Pas de routine : l’essai DREAM (NEJM 2018) n’a montré **aucune différence** avec le placebo (huile d’olive)." }
  ],
  mnemonic: { title: "Cercle vicieux", text: "Instabilité → hyperosmolarité → inflammation → instabilité : briser le cercle à plusieurs endroits." },
  compare: {
    title: "Normal vs sécheresse (fluorescéine)",
    normal: {
      figure: { type: "fluo", pattern: "normal" },
      caption: "Film continu, aucune prise de fluorescéine."
    },
    patho: {
      figure: { type: "fluo", pattern: "spk-inferior" },
      caption: "Kératite ponctuée inférieure (MGD, exposition, gouttes toxiques).",
      reveal: [
        "Points verts fins dans le tiers inférieur",
        "Pas d’ulcère ni d’infiltrat",
        "Plus de 5 points cornéens = signe DEWS III",
        "Points entre les paupières = manque d’eau ; en haut = lentilles"
      ]
    }
  },
  sources: [
    "TFOS DEWS III (Wolffsohn JS et al., Am J Ophthalmol 2025)",
    "AAO PPP Dry Eye Syndrome (2023)",
    "DREAM (Asbell PA et al., N Engl J Med 2018)",
    "TFOS International Workshop on Meibomian Gland Dysfunction (Nichols KK et al., Invest Ophthalmol Vis Sci 2011)"
  ]
},

  // 2. Kératite bactérienne
  {
  id: "c-bacterienne",
  module: "B",
  order: 2,
  title: "Kératite bactérienne",
  en: "Bacterial keratitis",
  tags: ["urgent", "frequent", "highyield"],
  oneLiner: "Œil rouge douloureux, infiltrat blanc sous un défaut épithélial, surtout chez un porteur de lentilles : gratter, cultiver, traiter aux heures.",
  definition: "Abcès du stroma par une bactérie entrée par une brèche épithéliale. Urgence : risque de perforation.",
  anatomy: {
    text: "Un épithélium intact et les larmes (lysozyme, anticorps) bloquent presque toutes les bactéries ; exception classique : Neisseria gonorrhoeae le traverse. Le stroma, sans vaisseaux, reçoit les globules blancs par les larmes et le limbe (jonction cornée-sclère) ; leurs enzymes peuvent fondre le collagène.",
    figure: {
      type: "cornea",
      highlight: ["epithelium", "stroma"]
    }
  },
  causal: {
    title: "De la brèche à la perforation",
    steps: [
      { label: "Brèche dans l’épithélium", detail: "Lentille portée la nuit ou dans l’eau, égratignure, sécheresse sévère ou cornée insensible : la barrière s’ouvre aux bactéries.", kind: "cause" },
      { label: "Bactéries qui envahissent le stroma", detail: "Pseudomonas aeruginosa (porteurs de lentilles), staphylocoques ou streptocoques s’accrochent à la brèche ; lentille et boîtier contaminés servent de réservoir.", kind: "mecanisme" },
      { label: "Afflux de globules blancs", detail: "Les neutrophiles arrivent en masse : c’est l’infiltrat blanc. Leurs enzymes (collagénases) et les toxines bactériennes digèrent le collagène.", kind: "mecanisme" },
      { label: "Ulcère et inflammation de l’œil", detail: "Le stroma digéré se creuse (ulcère) ; l’inflammation gagne la chambre antérieure : cellules, parfois hypopyon (dépôt de globules blancs au fond de la chambre, habituellement stérile).", kind: "lesion" },
      { label: "Perforation ou cicatrice", detail: "Si la fonte continue, il ne reste que Descemet (descémétocèle), puis la cornée perce : risque d’endophtalmie (infection intraoculaire) ; sinon, cicatrice opaque.", kind: "complication" }
    ],
    levers: [
      { at: 0, label: "Prévention", detail: "Jamais dormir, se baigner ou se doucher avec ses lentilles ; remplacer le boîtier souvent." },
      { at: 1, label: "Antibiotiques intensifs", detail: "Gouttes aux heures, jour et nuit, après les cultures : tuent les bactéries avant que le stroma ne fonde." },
      { at: 4, label: "Colle, greffe", detail: "Colle chirurgicale ou greffe tectonique (pièce de cornée de donneur qui bouche le trou) ; plus tard, greffe optique si cicatrice centrale." }
    ]
  },
  risk: [
    "Lentilles cornéennes (premier facteur) : portées la nuit, dans l’eau, boîtier mal entretenu",
    "Traumatisme ou corps étranger cornéen",
    "Surface malade : sécheresse sévère, paupières qui ferment mal, cornée insensible",
    "Greffe ou chirurgie cornéenne, sutures lâches",
    "Stéroïdes topiques, diabète, immunosuppression"
  ],
  presentation: [
    "Douleur, rougeur, photophobie et baisse de vision en quelques heures à 1–2 jours",
    "Infiltrat blanc-jaune dans le stroma, sous un défaut épithélial qui prend la fluorescéine",
    "Cellules en chambre antérieure, parfois hypopyon"
  ],
  exam: {
    signs: [
      { sign: "Défaut épithélial au-dessus d’un infiltrat stromal", why: "Signe l’ulcère infectieux (un infiltrat stérile a peu ou pas de défaut)." },
      { sign: "Nécrose rapide, sécrétions visqueuses, aspect « fondu »", why: "Évoque Pseudomonas, surtout chez un porteur de lentilles." },
      { sign: "Amincissement ou test de Seidel positif", why: "Seidel : la fluorescéine concentrée (orange foncé), diluée par l’humeur aqueuse qui fuit, forme un ruisseau vert brillant = perforation." }
    ],
    tests: [
      { test: "Grattage de l’ulcère (spatule sous anesthésie topique) : frottis de Gram et cultures (gélose sang, chocolat ; Sabouraud : champignons)", when: "Règle 1-2-3 (chambre antérieure ≥ 1+, infiltrat ≥ 2 mm, à ≤ 3 mm du centre : un critère suffit), ulcère atypique ou qui ne répond pas", read: "Le Gram oriente en quelques heures (bâtonnets Gram négatif : penser Pseudomonas) ; culture et antibiogramme ajustent en 24–72 h. Prélever avant l’antibiotique, sans le retarder." },
      { test: "Culture de la lentille, du boîtier et de la solution", when: "Porteur de lentilles, en complément du grattage", read: "Souvent contaminée : interpréter avec le grattage." }
    ]
  },
  ddx: [
    { dx: "Infiltrats stériles des lentilles", clue: "Petits, périphériques, peu de douleur ; guérissent à l’arrêt des lentilles." },
    { dx: "Kératite fongique", clue: "Trauma végétal, bords plumeux, lésions satellites, évolution plus lente." },
    { dx: "Kératite à Acanthamoeba (amibe d’eau douce)", clue: "Lentilles + eau, douleur hors de proportion, cultures bactériennes négatives." }
  ],
  redFlags: [
    "Critère 1-2-3 ou hypopyon : cultures et gouttes fortifiées le jour même",
    "Amincissement, descémétocèle ou Seidel positif : coquille, aucune pression, aviser le patron",
    "Aggravation après 48 h : bactérie résistante, champignon ou amibe"
  ],
  cat: {
    vignette: "Homme de 24 ans qui dort avec ses lentilles. Œil rouge et douloureux depuis hier ; infiltrat blanc de 3 mm sous un défaut épithélial.",
    algo: [
      { q: "Défaut épithélial avec infiltrat stromal ?", yes: "Infectieux : retirer la lentille, la garder pour culture.", no: "Petit infiltrat sans défaut : stérile probable, revoir 24–48 h.", yesGo: 1 },
      { q: "Perforation ou descémétocèle ?", yes: "Coquille rigide, aucune pression ; ophtalmologie immédiatement.", no: "", noGo: 2 },
      { q: "Critère 1-2-3, ulcère atypique ou chronique ?", yes: "Cultures, gouttes fortifiées aux heures ; ophtalmo le jour même.", no: "Moxifloxacine 0,5 % aux heures ; revoir à 24 h.", yesGo: 3, noGo: 3 },
      { q: "Pire après 48 h, lentilles + eau ou végétal ?", yes: "Penser champignon ou amibe : prélèvements spécifiques.", no: "Poursuivre jusqu’à fermeture de l’épithélium." }
    ],
    phases: [
      {
        phase: "medical",
        items: [
          "Arrêter les lentilles ; apporter lentille et boîtier pour culture",
          "Petit ulcère périphérique : moxifloxacine 0,5 % (fluoroquinolone) aux 5–15 min la 1re heure, puis aux heures jour et nuit",
          "Ulcère menaçant, après grattage : fortifiés (pharmacie d’hôpital), vancomycine 25 mg/mL ou céfazoline 50 mg/mL + tobramycine 14 mg/mL, en alternance aux heures 24–48 h",
          "Cycloplégique (goutte qui relâche le muscle ciliaire : moins de douleur), antidouleur oral ; ni pansement fermé ni stéroïde au départ"
        ]
      },
      {
        phase: "chirurgie",
        items: ["Perforation : colle de cyanoacrylate si ≤ 2–3 mm, sinon greffe tectonique"]
      },
      {
        phase: "suivi",
        items: [
          "Revoir chaque jour au début : douleur, taille de l’infiltrat et du défaut, chambre antérieure",
          "Diminuer graduellement selon la réponse et la culture"
        ]
      },
      {
        phase: "escalade",
        items: [
          "Pas d’amélioration à 48–72 h : reculturer, biopsie ; penser champignon, amibe, Nocardia (bactérie atypique), mycobactérie",
          "Stéroïde : décision du spécialiste, après culture et réponse aux antibiotiques ; jamais si champignon ou Nocardia"
        ]
      }
    ],
    local: "Les gouttes fortifiées viennent des pharmacies d’hôpital : un ulcère menaçant est dirigé le jour même vers l’urgence ophtalmologique d’un centre (CHUM, HMR, CUSM, Hôpital général juif, CHU de Québec)."
  },
  treatments: [
    { name: "Moxifloxacine 0,5 % (fluoroquinolone de 4e génération)", dose: "Moxifloxacine 0,5 %, 1 goutte aux heures jour et nuit au début.", pitfall: "Jamais de pansement occlusif.", how: "Gouttes du commerce : bloquent l’ADN gyrase et la topo-isomérase IV, enzymes qui permettent à la bactérie de copier son ADN.", why: "Petit ulcère périphérique sans critère de gravité.", pros: "En pharmacie, large spectre, bonne pénétration.", cons: "Résistances croissantes (SARM : staphylocoque doré résistant à la méthicilline) ; moins sûre seule pour les gros ulcères.", cx: "Toxicité épithéliale si usage prolongé." },
    { name: "Gouttes fortifiées", dose: "Vancomycine (ou céfazoline) + tobramycine, alternées aux heures.", pitfall: "Gouttes la nuit aussi ; flacons au réfrigérateur.", qc: "Préparées par les pharmacies d’hôpital : diriger vers un centre.", how: "Antibiotiques injectables dilués en gouttes très concentrées par la pharmacie d’hôpital : vancomycine ou céfazoline (Gram +), tobramycine (Gram −, dont Pseudomonas).", why: "Ulcère menaçant (règle 1-2-3) ou échec de la moxifloxacine.", pros: "Concentrations très élevées ; la vancomycine couvre le SARM.", cons: "Préparation hospitalière, à réfrigérer ; gouttes la nuit.", cx: "Toxicité épithéliale, brûlure." },
    { name: "Colle de cyanoacrylate, greffe tectonique", dose: "Colle cyanoacrylate + lentille pansement si trou ≤ 2–3 mm.", pitfall: "Aucune pression sur un œil perforé.", how: "Goutte de colle chirurgicale déposée sur le trou après grattage de l’épithélium, puis lentille pansement ; si le trou est grand, on coud une pièce de cornée de donneur.", why: "Descémétocèle ou perforation.", pros: "Referme vite le globe ; la colle freine aussi les bactéries.", cons: "Colle réservée aux petits trous ; greffe sur œil infecté (« à chaud ») : rejet et récidive fréquents.", cx: "Colle qui se décolle ; rejet, glaucome." }
  ],
  treatment: {
    first: [
      "**1re ligne** : retirer la lentille, moxifloxacine 0,5 % aux heures si petit ulcère périphérique.",
      "**Ophtalmologiste** : grattage, cultures, gouttes fortifiées aux heures."
    ],
    refer: ["Le jour même pour tout ulcère — il peut perforer en quelques jours.", "Immédiatement si perforation ou descémétocèle — globe ouvert."],
    pitfall: ["Pansement occlusif chez un porteur de lentilles : favorise Pseudomonas.", "Stéroïde topique avant les cultures : aggrave l’infection."],
    qc: ["Gouttes fortifiées préparées par les pharmacies d’hôpital : diriger vers un centre."]
  },
  pearls: [
    { q: "Quand faut-il gratter et cultiver avant de traiter ?", a: "AAO PPP 2023 : infiltrat central, grand ou profond, chronique, multiple, atypique, après chirurgie cornéenne ou sans réponse. En pratique : **règle 1-2-3**." },
    { q: "Mets-tu un stéroïde dans un ulcère bactérien ?", a: "Pas au départ. SCUT (Steroids for Corneal Ulcers Trial, 2012 ; stéroïde ajouté après 48 h d’antibiotique) : pas de bénéfice global, bénéfice possible si ulcère central sévère traité tôt, à éviter si Nocardia. **SCUT II (2026)** : moxifloxacine + difluprednate ± crosslinking (CXL : riboflavine + UV qui rigidifient la cornée), aucun bénéfice sur la vision ni la cicatrice." },
    { q: "Pourquoi pas de pansement fermé chez un porteur de lentilles ?", a: "L’œil fermé, chaud et humide favorise Pseudomonas et empêche les gouttes aux heures. Chez le porteur de lentilles, on couvre **toujours Pseudomonas**." }
  ],
  mnemonic: { title: "Règle 1-2-3", text: "Chambre antérieure ≥ 1+, infiltrat ≥ 2 mm, à ≤ 3 mm du centre : un critère suffit pour cultiver et fortifier." },
  compare: {
    title: "Normal vs ulcère bactérien (fluorescéine)",
    normal: {
      figure: { type: "fluo", pattern: "normal" },
      caption: "Épithélium intact : aucune prise de fluorescéine."
    },
    patho: {
      figure: { type: "fluo", pattern: "ulcer" },
      caption: "Ulcère : défaut épithélial vert au-dessus d’un infiltrat blanc.",
      reveal: [
        "Zone verte = épithélium absent",
        "Infiltrat blanc sous la zone verte, dans le stroma",
        "Mesurer le grand axe et la distance au centre (règle 1-2-3)",
        "Chercher hypopyon et amincissement"
      ]
    }
  },
  sources: ["AAO PPP Bacterial Keratitis (2023)", "SCUT (Srinivasan M et al., Arch Ophthalmol 2012)", "SCUT II (Prajna NV et al., JAMA Ophthalmol 2026)"]
},

  // 3. Kératites amibienne et fongique
  {
  id: "c-atypiques",
  module: "B",
  order: 3,
  title: "Kératites amibienne et fongique",
  en: "Acanthamoeba and fungal keratitis",
  tags: ["urgent", "highyield", "piege"],
  oneLiner: "Ulcère qui ne guérit pas sous antibiotiques : penser amibe (lentilles + eau, douleur énorme) ou champignon (branche, bords plumeux). Jamais de stéroïde.",
  definition: "Kératite à amibe (Acanthamoeba) ou à champignon. Lente, résistante, souvent prise pour un herpès.",
  anatomy: {
    text: "Ces organismes ne traversent pas un épithélium sain : ils profitent d’une microlésion (lentille, branche, terre). Les nerfs cornéens partent du limbe vers le centre dans le stroma ; l’amibe les suit, d’où une douleur extrême. Les filaments des champignons peuvent traverser Descemet.",
    figure: {
      type: "cornea",
      highlight: ["epithelium", "stroma", "descemet"]
    }
  },
  causal: {
    title: "De la microlésion à l’ulcère rebelle",
    steps: [
      { label: "Contamination d’une microlésion", detail: "Amibe : lentille rincée à l’eau du robinet ou portée à la douche, à la piscine ou au lac. Champignon : égratignure par une branche ou de la terre, ou cornée fragilisée sous stéroïdes (Candida, une levure).", kind: "cause" },
      { label: "Organisme lent et résistant", detail: "L’amibe se transforme en kyste à double paroi que peu de médicaments traversent ; les filaments du champignon (hyphes) poussent lentement dans le stroma.", kind: "mecanisme" },
      { label: "Invasion des nerfs ou en profondeur", detail: "L’amibe longe les nerfs cornéens (périnévrite radiaire, radial keratoneuritis), d’où une douleur hors de proportion ; les hyphes descendent vers Descemet et la chambre antérieure.", kind: "lesion" },
      { label: "Infiltrat d’allure atypique", detail: "Amibe : pseudodendrites (lignes épithéliales en relief) puis infiltrat en anneau (ring infiltrate). Champignon : infiltrat sec gris-blanc à bords plumeux (feathery margins), lésions satellites, hypopyon.", kind: "signe" },
      { label: "Retard diagnostique, perforation", detail: "Pris pour un herpès ou une bactérie, souvent traité aux stéroïdes, l’organisme progresse : fonte, perforation, greffe souvent nécessaire.", kind: "complication" }
    ],
    levers: [
      { at: 0, label: "Prévention", detail: "Aucune eau sur les lentilles ni dans le boîtier ; lunettes de protection pour les travaux agricoles." },
      { at: 1, label: "Traitement spécifique précoce", detail: "Biguanide (antiseptique actif sur les kystes) ± diamidine (propamidine) contre l’amibe ; natamycine 5 % (antifongique) contre les champignons filamenteux." },
      { at: 4, label: "Y penser tôt, greffer si besoin", detail: "Sans réponse à 48–72 h d’antibiotique : arrêter les stéroïdes et prélever (cultures spéciales, PCR) ; greffe si perforation." }
    ]
  },
  risk: [
    "Lentilles + eau (robinet, douche, piscine, spa, lac), boîtier mal entretenu, orthokératologie (lentilles rigides de nuit) : amibe",
    "Trauma végétal (branche, bois) ou terre, travail agricole : champignon filamenteux",
    "Stéroïdes topiques prolongés, surface malade, greffe : Candida",
    "Diabète, immunosuppression"
  ],
  presentation: [
    "Amibe : douleur intense hors de proportion, photophobie, évolution sur des semaines",
    "Champignon : début moins brutal, sur des jours à des semaines",
    "Infiltrat qui ne répond pas, ou empire, sous antibiotiques ou antiviral"
  ],
  exam: {
    signs: [
      { sign: "Périnévrite radiaire (infiltrats fins le long des nerfs, du limbe vers le centre)", why: "Très évocatrice d’Acanthamoeba au stade précoce." },
      { sign: "Pseudodendrites sans bulbes terminaux", why: "Lignes épithéliales en relief, peu colorées ; la vraie dendrite herpétique a des renflements au bout des branches." },
      { sign: "Infiltrat en anneau", why: "Amibe plus tardive (aussi champignon ou abus d’anesthésique) : signe de retard diagnostique." },
      { sign: "Bords plumeux, lésions satellites, plaque endothéliale (dépôt derrière la cornée)", why: "Profil du champignon filamenteux (Fusarium, Aspergillus), qui peut traverser Descemet." }
    ],
    tests: [
      { test: "Grattage profond : frottis (Gram, Giemsa, calcofluor blanc) et cultures (Sabouraud ; gélose non nutritive recouverte d’E. coli pour l’amibe)", when: "Dès que le tableau est atypique, avant le traitement", read: "Le calcofluor fait briller kystes et hyphes ; cultures lentes, à garder plusieurs semaines." },
      { test: "PCR (amplification de l’ADN de l’organisme)", when: "Sur grattage ou lentille, si disponible", read: "Rapide et sensible ; un négatif n’exclut pas." },
      { test: "Microscopie confocale (microscope qui montre la cornée cellule par cellule)", when: "Centres spécialisés ; examen non invasif", read: "Kystes amibiens ronds à double paroi ou hyphes ramifiés ; dépend de l’opérateur." }
    ]
  },
  ddx: [
    { dx: "Kératite herpétique (HSV)", clue: "Vraie dendrite à bulbes terminaux, sensibilité diminuée ; répond à l’antiviral." },
    { dx: "Kératite bactérienne", clue: "Début en quelques heures, pus, réponse aux antibiotiques en 48 h." },
    { dx: "Kératopathie par abus d’anesthésique", clue: "Gouttes anesthésiantes répétées, anneau stromal, cultures négatives." }
  ],
  redFlags: [
    "Porteur de lentilles avec douleur extrême et peu de signes : amibe jusqu’à preuve du contraire",
    "Ulcère sans réponse après 48–72 h d’antibiotiques : reprendre le diagnostic et prélever",
    "Plaque endothéliale, hypopyon, atteinte du limbe ou de la sclère : risque d’endophtalmie et de perforation"
  ],
  cat: {
    vignette: "Femme de 31 ans qui rince ses lentilles à l’eau du robinet. Douleur intense depuis 3 semaines malgré la moxifloxacine ; infiltrat en anneau.",
    algo: [
      { q: "Contexte atypique ou ulcère qui ne répond pas ?", yes: "Arrêter les stéroïdes ; grattage, cultures spécifiques, PCR.", no: "Traiter comme bactérienne, revoir à 24–48 h.", yesGo: 1 },
      { q: "Kystes ou tableau d’amibe (lentilles + eau) ?", yes: "Biguanide ± diamidine aux heures, sur des mois.", no: "", yesGo: 3, noGo: 2 },
      { q: "Hyphes, bords plumeux ou satellites ?", yes: "Natamycine 5 % si filamenteux ; amphotéricine B ou voriconazole si levure.", no: "Bactérie résistante, Nocardia, mycobactérie, herpès ?", yesGo: 3 },
      { q: "Progression profonde ou perforation ?", yes: "Greffe thérapeutique ; voriconazole intrastromal à discuter.", no: "Poursuivre, suivi rapproché." }
    ],
    phases: [
      {
        phase: "medical",
        items: [
          "Arrêter lentilles et stéroïdes ; cycloplégique et antidouleur oral",
          "Amibe : biguanide ± propamidine aux heures jour et nuit, puis diminution sur des mois",
          "Champignon filamenteux : natamycine 5 % aux heures ; grattage épithélial répété pour aider la pénétration ; voriconazole oral sans bénéfice ajouté (MUTT II)"
        ]
      },
      {
        phase: "chirurgie",
        items: ["Greffe thérapeutique (kératoplastie transfixiante : remplacement de toute l’épaisseur) si perforation ou progression"]
      },
      {
        phase: "suivi",
        items: ["Revoir aux 1–3 jours au début ; traiter de quelques semaines (champignon) à plusieurs mois (amibe), sinon récidive"]
      },
      {
        phase: "escalade",
        items: [
          "Échec : biopsie cornéenne si cultures négatives ; voriconazole intrastromal ou intracamérulaire (champignon), greffe ; diriger vers un centre de cornée",
          "Amibe : stéroïde seulement par le spécialiste, après des semaines d’anti-amibien (sclérite, inflammation sévère)"
        ]
      }
    ],
    local: "Au Canada, PHMB, chlorhexidine et propamidine sont des préparations magistrales de pharmacie d’hôpital ; Akantior (polihexanide 0,08 %, approuvé en Europe en 2024) et natamycine : souvent obtenues par la pharmacie d’hôpital. Confocale et PCR : seulement dans certains centres universitaires."
  },
  treatments: [
    { name: "Biguanide ± diamidine (amibe)", dose: "PHMB ou chlorhexidine 0,02 % aux heures ± propamidine, sur des mois.", pitfall: "Souvent prise pour un herpès au début.", qc: "Préparations magistrales de pharmacie d’hôpital.", how: "Gouttes antiseptiques préparées par la pharmacie (PHMB ou chlorhexidine 0,02 %), aux heures jour et nuit au début, souvent avec propamidine : le biguanide perce la membrane de l’amibe et traverse la paroi des kystes.", why: "Toute kératite à Acanthamoeba, dès la suspicion forte.", pros: "Seule classe active sur les kystes ; polihexanide 0,08 % validé en monothérapie en Europe.", cons: "Plusieurs mois de traitement ; préparations magistrales.", cx: "Toxicité épithéliale, retard de cicatrisation." },
    { name: "Natamycine 5 % (champignon filamenteux)", dose: "Natamycine 5 %, 1 goutte aux heures.", pitfall: "Pénètre mal : atteinte profonde = autre option.", qc: "Souvent obtenue par la pharmacie d’hôpital.", how: "Suspension antifongique en gouttes, aux heures : se fixe à l’ergostérol (constituant de la membrane du champignon) et bloque sa croissance.", why: "Fusarium ou Aspergillus : premier choix.", pros: "MUTT I : meilleure vision et moins de perforations qu’avec le voriconazole, surtout pour Fusarium.", cons: "Pénètre mal en profondeur.", cx: "Irritation, dépôts blancs." },
    { name: "Voriconazole", dose: "Voriconazole 1 % aux heures ; intrastromal si profond.", pitfall: "Inférieur à la natamycine pour Fusarium (MUTT I).", how: "Antifongique (azolé) en gouttes à 1 %, en injection dans le stroma ou la chambre antérieure, ou en comprimés : empêche le champignon de fabriquer l’ergostérol.", why: "Levures (Candida), infection profonde ou échec de la natamycine.", pros: "Bonne pénétration, large spectre.", cons: "Inférieur à la natamycine pour Fusarium (MUTT I) ; oral sans bénéfice ajouté (MUTT II).", cx: "Oral : troubles visuels passagers, atteinte du foie." }
  ],
  treatment: {
    first: [
      "**1re ligne** : retirer la lentille, aucun stéroïde, adresser le jour même.",
      "**Ophtalmologiste** : prélèvements spécifiques ; biguanide (amibe) ou natamycine 5 % (champignon)."
    ],
    refer: ["Le jour même — traitement spécifique, souvent en centre de cornée."],
    pitfall: ["Prednisolone ou autre stéroïde : fait flamber le champignon.", "Anesthésique topique pour la douleur de l’amibe : jamais."],
    qc: ["Biguanides en préparation magistrale d’hôpital."]
  },
  pearls: [
    { q: "Pourquoi l’amibe est-elle souvent prise pour un herpès ?", a: "Elle donne des pseudodendrites et résiste aux antibiotiques. Indices : porteur de lentilles exposé à l’eau, **douleur hors de proportion**, périnévrite radiaire, pas de bulbes terminaux, échec de l’antiviral." },
    { q: "Pourquoi jamais de stéroïde dans une kératite fongique ?", a: "Le stéroïde freine les neutrophiles qui contiennent le champignon : les hyphes s’étendent jusqu’à la chambre antérieure. Un ulcère qui empire sous stéroïde : penser **champignon, amibe ou herpès**." },
    { q: "Que disent les essais MUTT ?", a: "MUTT I : **natamycine 5 % supérieure au voriconazole 1 %** pour les kératites filamenteuses, surtout à Fusarium. MUTT II : le voriconazole oral ajouté n’apporte **aucun bénéfice**." }
  ],
  mnemonic: { title: "Indices de l’atypique", text: "Amibe = lentille + eau + douleur énorme. Champignon = branche + bords plumeux + satellites." },
  compare: {
    title: "Normal vs pseudodendrite amibienne (fluorescéine)",
    normal: {
      figure: { type: "fluo", pattern: "normal" },
      caption: "Épithélium intact, aucune prise de fluorescéine."
    },
    patho: {
      figure: { type: "fluo", pattern: "pseudodendrite" },
      caption: "Pseudodendrite d’Acanthamoeba : lignes irrégulières sans bulbes terminaux.",
      reveal: [
        "Lignes épithéliales grossières, en relief",
        "Pas de bulbes terminaux (≠ dendrite herpétique)",
        "Prise de fluorescéine faible et irrégulière",
        "Chercher la périnévrite radiaire et un anneau stromal"
      ]
    }
  },
  sources: [
    "MUTT I (Prajna NV et al., JAMA Ophthalmol 2013)",
    "MUTT II (Prajna NV et al., JAMA Ophthalmol 2016)",
    "Akantior (polihexanide 0,08 %) : approbation de la Commission européenne (2024)",
    "AAO PPP Bacterial Keratitis (2023) — indications des cultures"
  ]
},

  // 4. Kératite herpétique (HSV) et zona ophtalmique
  {
  id: "c-herpes",
  module: "B",
  order: 4,
  title: "Kératite herpétique (HSV) et zona ophtalmique",
  en: "Herpes simplex keratitis and herpes zoster ophthalmicus",
  tags: ["frequent", "highyield", "piege"],
  oneLiner: "Dendrite à bulbes terminaux et cornée moins sensible : herpès ; éruption du front avec signe de Hutchinson : zona. Jamais de stéroïde sans antiviral.",
  definition: "Le HSV dort dans le ganglion trigéminal et se réveille dans la cornée. Le zona est le réveil du VZV en V1.",
  anatomy: {
    text: "La cornée est innervée par le nerf ophtalmique (V1, branche nasociliaire) : le virus descend le long de ces nerfs depuis le ganglion. Ces nerfs assurent aussi la sensibilité et la cicatrisation ; détruits, ils laissent une cornée insensible qui guérit mal. Le nasociliaire innerve aussi le bout du nez. Zona : éruption du front, atteinte possible de tout l’œil.",
    figure: {
      type: "eye",
      highlight: ["cornee", "nerfs-ciliaires-longs"]
    }
  },
  causal: {
    title: "Du ganglion à la cornée",
    steps: [
      { label: "Virus endormi dans le ganglion", detail: "Après une primo-infection souvent inaperçue, HSV-1 se cache dans le ganglion trigéminal ; le VZV fait de même après la varicelle.", kind: "cause" },
      { label: "Réveil du virus", detail: "Immunosuppression, chirurgie oculaire ou simplement l’âge (zona) réveillent le virus, qui descend le long des nerfs jusqu’à l’œil.", kind: "mecanisme" },
      { label: "Destruction de l’épithélium", detail: "Le virus tue les cellules épithéliales : dendrite, ou ulcère géographique (dendrite élargie, souvent après un stéroïde).", kind: "lesion" },
      { label: "Réaction immunitaire profonde", detail: "Le système immunitaire attaque les antigènes viraux restés dans le stroma (opacité, vaisseaux), l’endothélium (œdème en disque) ou le trabéculum (pression élevée).", kind: "mecanisme" },
      { label: "Nerfs détruits, cicatrices", detail: "Chaque poussée tue des nerfs et laisse des cicatrices : cornée insensible qui guérit mal (kératite neurotrophique), baisse de vision.", kind: "complication" }
    ],
    levers: [
      { at: 1, label: "Prophylaxie, vaccin", detail: "Antiviral oral au long cours (HEDS, Herpetic Eye Disease Study : environ 45 % moins de récidives) ; contre le zona, vaccin Shingrix dès 50 ans." },
      { at: 2, label: "Antiviral, débridement", detail: "Antiviral oral ou en gouttes et débridement (grattage doux de la dendrite) arrêtent la multiplication du virus." },
      { at: 3, label: "Stéroïde sous antiviral", detail: "Calme la réaction immunitaire ; jamais seul, jamais sur une dendrite active." },
      { at: 4, label: "Protéger la surface", detail: "Lubrifiants, lentille pansement, membrane amniotique (tissu placentaire qui aide l’épithélium), cénégermine (facteur de croissance des nerfs)." }
    ]
  },
  risk: [
    "Antécédent d’herpès oculaire : les récidives sont la règle",
    "Immunosuppression, atopie, chirurgie oculaire (laser, greffe)",
    "Zona : âge ≥ 50 ans, immunosuppression, absence de vaccin"
  ],
  presentation: [
    "Œil rouge, larmoyant, photophobe, unilatéral, souvent récidivant",
    "Épithéliale : dendrite qui prend la fluorescéine ; stromale : opacité, œdème, vaisseaux, épithélium intact",
    "Endothéliite : œdème en disque avec précipités kératiques (dépôts inflammatoires sur l’endothélium)",
    "Zona : douleur puis vésicules du front et de la paupière, d’un seul côté ; atteinte oculaire variable"
  ],
  exam: {
    signs: [
      { sign: "Dendrite avec bulbes terminaux (terminal bulbs)", why: "Chaque branche de l’ulcère finit par un renflement : signature de l’HSV (la pseudodendrite du zona ou de l’amibe n’en a pas)." },
      { sign: "Sensibilité cornéenne diminuée (coton tiré en pointe, avant toute goutte anesthésique)", why: "Oriente vers HSV ou VZV et annonce le risque neurotrophique." },
      { sign: "Signe de Hutchinson (vésicules sur le bout ou l’aile du nez)", why: "Atteinte du nerf nasociliaire, qui innerve aussi l’œil : risque élevé d’atteinte oculaire." },
      { sign: "Uvéite avec PIO élevée, atrophie sectorielle de l’iris", why: "Une uvéite fait d’habitude baisser la pression ; si elle monte, penser trabéculite herpétique (HSV, VZV ou CMV : cytomégalovirus)." }
    ],
    tests: [
      { test: "PCR (ADN viral) sur grattage ou humeur aqueuse", when: "Tableau atypique, doute avec l’amibe, uvéite hypertensive", read: "Confirme HSV, VZV ou CMV ; souvent négative dans la forme stromale immune." },
      { test: "Créatinine", when: "Avant un antiviral oral prolongé ou chez l’âgé", read: "Ajuster la dose de l’antiviral au rein." }
    ]
  },
  ddx: [
    { dx: "Pseudodendrite du zona", clue: "En relief, sans bulbes, peu colorée ; éruption dans le territoire V1." },
    { dx: "Kératite à Acanthamoeba (amibe d’eau douce)", clue: "Lentilles + eau, douleur intense, échec de l’antiviral." },
    { dx: "Abrasion en cours de guérison", clue: "Traumatisme récent ; ligne de cicatrisation sans bulbes." }
  ],
  redFlags: [
    "Stéroïde prescrit sans antiviral ou sur une dendrite : ulcère géographique",
    "Ulcère stromal qui fond : surinfection, perforation",
    "Zona avec Hutchinson, baisse de vision, PIO élevée ou paralysie oculomotrice : examen urgent"
  ],
  cat: {
    vignette: "Homme de 45 ans, œil gauche rouge et larmoyant. Lésion ramifiée à bulbes terminaux à la fluorescéine, cornée moins sensible, pas d’éruption.",
    algo: [
      { q: "Éruption vésiculaire V1 d’un seul côté ?", yes: "Zona : valacyclovir 1 g 3×/j × 7 j, dès que possible (< 72 h).", no: "", yesGo: 1, noGo: 1 },
      { q: "Dendrite à bulbes terminaux ou ulcère géographique ?", yes: "HSV épithélial : antiviral ± débridement ; arrêter tout stéroïde.", no: "", yesGo: 3, noGo: 2 },
      { q: "Opacité stromale, œdème en disque ou précipités ?", yes: "Forme immune : stéroïde lent sous antiviral oral.", no: "Surveiller ; revoir si rougeur ou baisse de vision.", yesGo: 3 },
      { q: "Récidives, forme stromale ou greffe ?", yes: "Prophylaxie orale prolongée (HEDS) ; zona : discuter valacyclovir 1 an.", no: "Traiter chaque épisode." }
    ],
    phases: [
      {
        phase: "medical",
        items: [
          "Épithéliale : acyclovir 400 mg PO 5×/j ou valacyclovir 500 mg PO TID × 7–10 j, ou trifluridine 1 % 9×/j, au plus 14–21 j ; débridement au coton-tige",
          "Stromale immune ou endothéliite : acétate de prednisolone 1 % diminué très lentement, toujours avec antiviral oral",
          "Zona : valacyclovir 1 g TID × 7 j (ou famciclovir 500 mg TID, ou acyclovir 800 mg 5×/j), ajusté au rein"
        ]
      },
      {
        phase: "chirurgie",
        items: [
          "Défaut persistant : lentille pansement, membrane amniotique, tarsorraphie (paupières partiellement cousues)",
          "Cicatrice centrale : greffe quand l’œil est calme depuis des mois, sous prophylaxie"
        ]
      },
      {
        phase: "suivi",
        items: [
          "Revoir en 1 semaine ; sous stéroïde, PIO à chaque visite",
          "Prophylaxie : acyclovir 400 mg BID ou valacyclovir 500 mg DIE si récidives, forme stromale ou greffe"
        ]
      },
      {
        phase: "escalade",
        items: ["Cornée insensible avec défaut persistant : cénégermine (Oxervate)", "Uvéite hypertensive rebelle : PCR d’humeur aqueuse (chercher un CMV)"]
      }
    ],
    local: "Shingrix est recommandé dès 50 ans par le CCNI (Comité consultatif national de l’immunisation). Oxervate est approuvé par Santé Canada pour la kératite neurotrophique modérée ou sévère de l’adulte : 1 goutte 6×/j aux 2 h pendant 8 semaines."
  },
  treatments: [
    { name: "Antiviraux oraux (acyclovir, valacyclovir)", dose: "Acyclovir 400 mg 5×/j ou valacyclovir 500 mg 3×/j ; prévention : acyclovir 400 mg 2×/j.", pitfall: "Ajuster la dose à la fonction rénale.", how: "Comprimés activés par une enzyme du virus (thymidine kinase), qui bloquent ensuite la copie de l’ADN viral, seulement dans les cellules infectées.", why: "Kératite épithéliale, couverture des stéroïdes, prévention des récidives, zona.", pros: "Aucune toxicité pour la surface ; prophylaxie efficace (HEDS).", cons: "Dose à ajuster au rein ; sans effet sur la réaction immunitaire.", cx: "Nausées ; confusion ou atteinte rénale si surdosage chez l’âgé." },
    { name: "Trifluridine 1 % et débridement", dose: "Trifluridine 1 %, 9 fois par jour ± débridement.", pitfall: "Toxique pour l’épithélium : au plus 14–21 jours.", how: "Goutte antivirale 9 fois par jour, avec grattage doux de la dendrite au coton-tige pour retirer les cellules infectées.", why: "Kératite épithéliale, alternative aux comprimés.", pros: "Agit directement sur la cornée ; le débridement réduit vite la charge virale.", cons: "Toxique pour l’épithélium : au plus 14–21 jours.", cx: "Kératite ponctuée toxique, rétrécissement des points lacrymaux." },
    { name: "Stéroïde topique sous antiviral", dose: "Prednisolone 1 % sous antiviral oral, sevrage sur des semaines à des mois.", pitfall: "Jamais sur une dendrite active ; rebond si arrêt rapide.", how: "Gouttes de prednisolone 1 % diminuées sur des semaines à des mois, toujours avec antiviral oral : calment l’attaque immunitaire contre les antigènes viraux.", why: "Kératite stromale immune, endothéliite, uvéite ; jamais sur une dendrite active.", pros: "HEDS : guérison plus rapide de la kératite stromale.", cons: "Ne tue pas le virus ; rebond si arrêt rapide.", cx: "Ulcère géographique sans antiviral, hausse de pression, cataracte." }
  ],
  treatment: {
    first: [
      "**1re ligne** : dendrite : acyclovir 400 mg 5×/j ou valacyclovir 500 mg 3×/j ; zona : valacyclovir 1 g 3×/j × 7 j, idéalement dans les 72 h suivant l’éruption.",
      "**Ophtalmologiste** : stéroïde sous antiviral pour la forme stromale ; prophylaxie (acyclovir 400 mg 2×/j)."
    ],
    refer: [
      "Dans les 24 h pour toute kératite herpétique — confirmer la forme et suivre la PIO.",
      "Le jour même si zona avec œil rouge, baisse de vision ou signe de Hutchinson."
    ],
    pitfall: ["Prednisolone sur une dendrite : ulcère géographique.", "Zona vu après 72 h : traiter quand même si vésicules récentes ou œil atteint.", "Trifluridine plus de 14–21 jours : toxique pour l’épithélium."],
    qc: ["Shingrix recommandé dès 50 ans (CCNI) ; couverture selon le programme provincial."]
  },
  pearls: [
    { q: "Pourquoi tester la sensibilité cornéenne avant l’anesthésique ?", a: "Diminuée, elle oriente vers HSV ou VZV et annonce une kératite neurotrophique ; après l’anesthésique, le test ne vaut plus rien." },
    { q: "Un stéroïde dans l’herpès : oui ou non ?", a: "**Non** sur une dendrite active : le virus prolifère. **Oui** pour la forme stromale immune ou l’endothéliite, toujours sous antiviral oral, avec diminution lente (HEDS)." },
    { q: "Que retenir de ZEDS ?", a: "Valacyclovir 1 g DIE pendant 1 an après un zona ophtalmique : critère principal à 12 mois non significatif, mais à 18 mois **27 % moins** de maladie oculaire nouvelle ou aggravée. Les auteurs recommandent l’ajout ; individualiser." }
  ],
  mnemonic: { title: "HSV : de la surface vers la profondeur", text: "Épithéliale = virus (antiviral seul) ; stromale ou endothéliite = inflammation (stéroïde sous antiviral)." },
  compare: {
    title: "Normal vs dendrite herpétique (fluorescéine)",
    normal: {
      figure: { type: "fluo", pattern: "normal" },
      caption: "Épithélium intact, aucune prise de fluorescéine."
    },
    patho: {
      figure: { type: "fluo", pattern: "dendrite" },
      caption: "Dendrite HSV : ulcère ramifié à bulbes terminaux.",
      reveal: [
        "Ulcère linéaire ramifié",
        "Bulbes terminaux au bout des branches",
        "Fond vert (cellules absentes), bords gonflés de cellules infectées",
        "Pseudodendrite du zona ou de l’amibe : pas de bulbes"
      ]
    }
  },
  sources: [
    "Herpetic Eye Disease Study (HEDS Group, N Engl J Med 1998 ; Wilhelmus KR et al., Ophthalmology 1994)",
    "Herpes Simplex Virus Keratitis: A Treatment Guideline (White ML, Chodosh J, AAO 2014)",
    "ZEDS (Cohen EJ et al., JAMA Ophthalmol 2025)",
    "CCNI : recommandations sur les vaccins contre le zona (2018)"
  ]
},

  // 5. Kératocône
  {
  id: "c-keratocone",
  module: "B",
  order: 5,
  title: "Kératocône",
  en: "Keratoconus",
  tags: ["frequent", "highyield"],
  oneLiner: "Jeune qui se frotte les yeux, astigmatisme irrégulier qui augmente : tomographie, puis crosslinking si progression, et dès le diagnostic chez l’enfant.",
  definition: "La cornée s’amincit et bombe en cône. Débute à l’adolescence et progresse surtout jusqu’à 30 ans.",
  anatomy: {
    text: "La solidité de la cornée vient des lamelles de collagène du stroma, reliées par des ponts chimiques (liaisons croisées). Sa face avant fournit environ les deux tiers de la puissance de l’œil (≈ 43 D) : une petite déformation brouille beaucoup la vision. Épaisseur centrale normale ≈ 540–550 µm. Signes du kératocône : Munson (paupière en V au regard en bas), Rizzuti (reflet conique nasal), Fleischer (anneau de fer), Vogt (stries qui disparaissent à la pression), reflet en ciseaux et goutte d’huile.",
    figure: {
      type: "cornea",
      highlight: ["bowman", "stroma"]
    }
  },
  causal: {
    title: "Du stroma mou au cône",
    steps: [
      { label: "Terrain et frottement", detail: "Prédisposition génétique, atopie (allergies qui font se frotter) ; le frottement répété des yeux est le facteur que l’on peut changer.", kind: "cause" },
      { label: "Stroma affaibli", detail: "Moins de liaisons entre les lamelles de collagène et plus d’enzymes qui les dégradent : le stroma devient mou.", kind: "mecanisme" },
      { label: "Amincissement et bombement", detail: "La pression de l’œil pousse la zone faible vers l’avant : elle s’amincit et se bombe en cône, souvent sous le centre.", kind: "lesion" },
      { label: "Astigmatisme irrégulier", detail: "La surface optique devient irrégulière : vision floue, déformée, mal corrigée par les lunettes.", kind: "signe" },
      { label: "Cicatrices et hydrops", detail: "Bowman se fissure (cicatrices au sommet) ; si Descemet se déchire, l’humeur aqueuse envahit le stroma : hydrops aigu (acute hydrops), cornée blanche.", kind: "complication" }
    ],
    levers: [
      { at: 0, label: "Arrêter le frottement", detail: "Traiter l’allergie, sans jamais retarder le crosslinking." },
      { at: 1, label: "Crosslinking (CXL)", detail: "Réticulation du collagène (corneal cross-linking) : riboflavine + UVA soudent les fibres ; le stroma se rigidifie, la progression s’arrête." },
      { at: 3, label: "Réhabilitation visuelle", detail: "Lunettes, lentilles rigides ou sclérales, anneaux intracornéens (arcs de plastique dans le stroma) : surface optique régulière." },
      { at: 4, label: "Greffe", detail: "DALK (greffe des couches avant, qui garde l’endothélium) ou PK (greffe de toute l’épaisseur) si cicatrice centrale ou intolérance aux lentilles." }
    ]
  },
  risk: [
    "Frottement des yeux, atopie (allergies, eczéma, asthme)",
    "Antécédents familiaux de kératocône",
    "Syndrome de Down, amaurose congénitale de Leber, Ehlers-Danlos"
  ],
  presentation: [
    "Vision floue et déformée, images fantômes, halos la nuit",
    "Lunettes changées souvent ; astigmatisme qui augmente, oblique ou irrégulier",
    "Mieux avec un trou sténopéique ou une lentille rigide qu’avec les lunettes",
    "Hydrops : baisse brutale de vision, douleur, cornée blanche ; Seidel négatif (pas une perforation)"
  ],
  exam: {
    signs: [
      { sign: "Reflet en ciseaux (scissoring) à la rétinoscopie, goutte d’huile au reflet rouge", why: "Signes précoces, avant tout signe à la lampe à fente." },
      { sign: "Stries de Vogt (Vogt striae)", why: "Fines lignes verticales du stroma profond qui disparaissent quand on appuie sur l’œil." },
      { sign: "Anneau de Fleischer (Fleischer ring)", why: "Fer déposé dans l’épithélium basal, autour de la base du cône ; mieux vu au bleu cobalt." },
      { sign: "Signes de Munson et de Rizzuti", why: "Stade avancé : paupière inférieure en V au regard en bas ; reflet lumineux conique sur le limbe nasal quand on éclaire du côté temporal." }
    ],
    tests: [
      { test: "Tomographie cornéenne (caméra Scheimpflug qui reconstruit les deux faces et l’épaisseur)", when: "Suspicion, suivi ; avant toute chirurgie réfractive", read: "Élévation antérieure et postérieure, point le plus mince déplacé et aminci, indice BAD-D (score combiné) ; l’élévation postérieure révèle les formes débutantes." },
      { test: "Topographie (carte de courbure de la face avant)", when: "Dépistage et suivi", read: "Cambrure inférieure, nœud papillon asymétrique à axes déviés ; Kmax (courbure maximale) qui augmente : un des signes de progression." }
    ]
  },
  ddx: [
    { dx: "Dégénérescence marginale pellucide", clue: "Amincissement en bande inférieure à 1–2 mm du limbe ; topographie en pince de crabe (crab claw), astigmatisme inverse ; âge plus tardif." },
    { dx: "Ectasie après chirurgie réfractive", clue: "Antécédent de LASIK ou PRK ; même traitement (CXL)." },
    { dx: "Déformation par lentille rigide", clue: "Topographie qui se normalise après quelques semaines sans lentille ; épaisseur normale." }
  ],
  redFlags: [
    "Baisse brutale de vision avec cornée blanche : hydrops aigu",
    "Enfant ou adolescent : progression rapide, CXL dès le diagnostic",
    "Tomographie anormale chez un candidat au LASIK : chirurgie contre-indiquée (risque d’ectasie)"
  ],
  cat: {
    vignette: "Garçon allergique de 15 ans qui se frotte les yeux. Son astigmatisme change à chaque visite. Topographie : bombement inférieur.",
    algo: [
      { q: "Astigmatisme irrégulier ou signe de kératocône ?", yes: "Tomographie de référence.", no: "Suivi habituel ; tomographie avant chirurgie réfractive.", yesGo: 1 },
      { q: "Enfant ou adolescent ?", yes: "CXL dès le diagnostic (2e consensus mondial, ESCRS 2025).", no: "", yesGo: 3, noGo: 2 },
      { q: "Progression documentée sur la tomographie ?", yes: "CXL, sans attendre l’arrêt du frottement.", no: "Surveiller par tomographie, pas de CXL préventive.", yesGo: 3, noGo: 4 },
      { q: "Stroma ≥ 400 µm sans épithélium ?", yes: "CXL standard epi-off.", no: "Protocole adapté en centre spécialisé.", yesGo: 4, noGo: 4 },
      { q: "Vision suffisante en lunettes ?", yes: "Lunettes.", no: "Lentilles rigides ou sclérales ; greffe si cicatrice." }
    ],
    phases: [
      {
        phase: "medical",
        items: [
          "Cesser de se frotter les yeux ; traiter l’allergie (gouttes antihistaminiques, compresses froides)",
          "Lunettes si suffisantes ; sinon lentilles rigides perméables aux gaz (rigid gas permeable, RGP) ou sclérales (grandes lentilles appuyées sur la sclère)"
        ]
      },
      {
        phase: "chirurgie",
        items: [
          "CXL : protocole de Dresde (3 mW/cm² × 30 min) ou accéléré (9 mW/cm² × 10 min), riboflavine 0,1 % epi-off",
          "Anneaux intracornéens (intracorneal ring segments, ICRS) si intolérance aux lentilles, cornée claire et assez épaisse au tunnel ; n’arrêtent pas la progression",
          "Greffe : DALK préférée à la PK si l’endothélium est sain"
        ]
      },
      {
        phase: "suivi",
        items: ["Tomographie après CXL pour confirmer la stabilisation ; CXL répétable", "Proposer un dépistage aux frères, sœurs et enfants"]
      },
      {
        phase: "escalade",
        items: [
          "Hydrops aigu : cycloplégique, NaCl 5 % (pommade salée qui retire l’eau de la cornée), stéroïde, parfois bulle de gaz en chambre antérieure ; résorption en quelques mois, greffe plus tard si cicatrice"
        ]
      }
    ],
    local: "Au Québec, la CXL est offerte dans des centres spécialisés (couverture publique variable selon le centre) ; l’optométriste dépiste souvent le kératocône et adapte les lentilles. Epioxa (epi-on) : approuvé par la FDA en 2025."
  },
  treatments: [
    { name: "Crosslinking du collagène (CXL)", dose: "Riboflavine 0,1 % + UVA, après retrait de l’épithélium.", pitfall: "Freine la maladie, ne rend pas la vision perdue.", qc: "Couverture publique variable selon le centre.", how: "On retire l’épithélium (epi-off), on imbibe le stroma de riboflavine (vitamine B2) 0,1 %, puis on l’éclaire aux UVA : la riboflavine excitée libère des radicaux d’oxygène qui soudent les fibres de collagène.", why: "Kératocône qui progresse ; enfant dès le diagnostic.", pros: "Arrête la progression dans la plupart des cas ; répétable.", cons: "Ne rend pas la vision perdue ; douleur quelques jours ; stroma ≥ 400 µm requis pour protéger l’endothélium des UV.", cx: "Infection, voile stromal (haze) souvent passager, réactivation herpétique, rarement cicatrice." },
    { name: "Lentilles rigides et sclérales", dose: "Lentilles rigides perméables ou sclérales, adaptées par l’optométriste.", pitfall: "N’arrête pas la progression : suivre la tomographie.", how: "Les larmes, ou le liquide du réservoir de la sclérale, comblent les irrégularités : la face lisse de la lentille devient la nouvelle surface optique.", why: "Vision insuffisante en lunettes.", pros: "Bien meilleure vision qu’en lunettes ; sans chirurgie.", cons: "Adaptation longue, coût ; n’arrête pas la progression.", cx: "Abrasion, infection, cicatrice au sommet du cône." },
    { name: "Greffe de cornée (DALK ou PK)", dose: "DALK de préférence ; PK si la Descemet est atteinte.", pitfall: "Récupération sur un an ou plus.", how: "DALK : stroma malade retiré jusqu’à Descemet et remplacé, endothélium du patient conservé ; PK : toute l’épaisseur remplacée, cousue.", why: "Cicatrice centrale, intolérance aux lentilles.", pros: "Très bon pronostic ; DALK : pas de rejet endothélial, globe plus solide.", cons: "Récupération sur un an ou plus, astigmatisme ; DALK difficile (conversion en PK si Descemet perce).", cx: "PK : rejet, glaucome, ouverture de la plaie au moindre choc, toute la vie." }
  ],
  treatment: {
    first: [
      "**1re ligne** : faire cesser le frottement, traiter l’allergie, demander une tomographie.",
      "**Ophtalmologiste** : crosslinking (riboflavine + UVA) ; lentilles rigides, greffe si cicatrice."
    ],
    refer: ["Dans les 24 h si baisse brutale avec cornée blanche — hydrops aigu ; exclure infection et perforation.", "Cette semaine pour un jeune qui progresse — le CXL freine la maladie."],
    pitfall: ["LASIK sur une tomographie anormale : risque d’ectasie."],
    qc: ["CXL : couverture publique variable selon le centre."]
  },
  pearls: [
    { q: "Quand fait-on une CXL ?", a: "Quand il y a progression : au moins 2 de bombement antérieur, bombement postérieur, amincissement (consensus mondial, Gomes et al., 2015) ; le 2e consensus mondial (ESCRS 2025) reconnaît l’élévation postérieure et le point le plus mince. **Chez l’enfant : dès le diagnostic.**" },
    { q: "Pourquoi la DALK plutôt que la PK dans le kératocône ?", a: "La maladie touche le stroma, pas l’endothélium : la DALK garde l’endothélium du patient, donc **pas de rejet endothélial**, moins de perte cellulaire et un globe plus résistant." },
    { q: "Dresde, accéléré, epi-on : quelle différence ?", a: "Dresde (3 mW/cm² × 30 min) et accéléré (9 mW/cm² × 10 min) donnent la même énergie totale. L’epi-on garde l’épithélium (moins de douleur et d’infection) mais laisse moins passer riboflavine et oxygène ; Epioxa (FDA 2025)." }
  ],
  mnemonic: { title: "Signes du kératocône", text: "Munson, Rizzuti, Fleischer, Vogt : les quatre signes classiques à reconnaître." },
  compare: {
    title: "Normal vs kératocône (topographie axiale)",
    normal: {
      figure: { type: "topo", pattern: "normal" },
      caption: "Courbure régulière et symétrique."
    },
    patho: {
      figure: { type: "topo", pattern: "kc-inferior" },
      caption: "Kératocône : cambrure inférieure asymétrique.",
      reveal: [
        "Zone chaude (cambrée) sous le centre",
        "Nœud papillon asymétrique à axes déviés",
        "Kmax élevé : comparer aux cartes précédentes pour juger la progression"
      ]
    }
  },
  sources: [
    "2e consensus mondial sur le kératocône et les ectasies (Hafezi F, ESCRS 2025)",
    "Global Consensus on Keratoconus and Ectatic Diseases (Gomes JAP et al., Cornea 2015)",
    "AAO PPP Corneal Ectasia (2023)",
    "Wollensak G, Spoerl E, Seiler T (Am J Ophthalmol 2003) : protocole de Dresde",
    "FDA : approbation d’Epioxa, CXL epi-on (20 oct. 2025)"
  ]
}
]);

// Bonus « à reconnaître » — module B
G.OPH.bonus = G.OPH.bonus || {};
G.OPH.bonus.B = [
  { title: "Kératite neurotrophique", en: "Neurotrophic keratopathy", clue: "Défaut épithélial aux bords lisses et roulés, peu douloureux, sur une cornée insensible (herpès, zona, diabète, chirurgie du nerf V) ; stades de Mackie 1 (kératite ponctuée) à 3 (ulcère, fonte).", action: "Tester la sensibilité, cesser les gouttes toxiques, lubrifier sans agent de conservation, lentille pansement ou membrane amniotique, et cénégermine (Oxervate) si stade 2–3 chez l’adulte." },
  { title: "Kératite ulcérative périphérique (PUK) et ulcère de Mooren", en: "Peripheral ulcerative keratitis / Mooren ulcer", clue: "Ulcère en croissant collé au limbe, sans intervalle clair, avec amincissement et souvent sclérite, chez un patient atteint de polyarthrite rhumatoïde ou de vasculite ; le Mooren, très douloureux, est un diagnostic d’exclusion sans maladie systémique.", action: "Bilan systémique urgent avec la rhumatologie ou la médecine interne (la PUK peut révéler une vasculite qui menace la vie), puis immunosuppression systémique." },
  { title: "Kératite marginale", en: "Marginal (staphylococcal) keratitis", clue: "Infiltrats blancs en périphérie, là où la paupière touche la cornée, séparés du limbe par un intervalle clair, avec blépharite et épithélium peu atteint.", action: "Traiter la blépharite et donner un stéroïde topique doux en cure courte, après avoir exclu une infection (pas d’ulcère creusant ni d’hypopyon)." },
  { title: "Kératoconjonctivite adénovirale", en: "Adenoviral keratoconjunctivitis", clue: "Œil rouge larmoyant qui atteint souvent le 2e œil, follicules, ganglion préauriculaire, contexte de contagion, puis infiltrats sous-épithéliaux 1–2 semaines plus tard qui brouillent la vision.", action: "Hygiène des mains, désinfection du matériel et arrêt de travail selon le milieu (très contagieuse environ 2 semaines) ; soins de soutien, stéroïde seulement si infiltrats gênants ou membranes." },
  { title: "Kératopathie en bandelette", en: "Band keratopathy", clue: "Bande blanc-gris de calcium au niveau de Bowman, dans la fente des paupières, partant de 3 h et 9 h avec un intervalle clair au limbe, sur uvéite chronique, hypercalcémie ou insuffisance rénale.", action: "Chercher la cause (calcium, phosphore, fonction rénale, uvéite) et, si la vision ou le confort sont atteints, chélation à l’EDTA après grattage de l’épithélium." },
  { title: "Kératopathie d’exposition", en: "Exposure keratopathy", clue: "Kératite ponctuée ou ulcère du tiers inférieur chez un patient qui ferme mal l’œil (lagophtalmie : paralysie faciale, exophtalmie thyroïdienne, sédation aux soins intensifs, ectropion).", action: "Lubrifiant et onguent fréquents, fermeture de la paupière la nuit (ruban, chambre humide), tarsorraphie ou poids palpébral si sévère, et prise en charge urgente si ulcère." },
  { title: "Dégénérescence marginale pellucide et de Terrien", en: "Pellucid marginal degeneration / Terrien marginal degeneration", clue: "Pellucide : amincissement en bande inférieure à 1–2 mm du limbe avec cornée bombée au-dessus, topographie en pince de crabe et astigmatisme inverse ; Terrien : amincissement périphérique souvent supérieur, lent, indolore, avec vaisseaux et ligne de lipides.", action: "Topographie et tomographie, correction optique (lentille sclérale) et CXL si progression ; pour Terrien, protéger contre les traumatismes, sans immunosuppression (pas d’inflammation)." },
  { title: "Dystrophies stromales (TGFBI et maculaire)", en: "Stromal corneal dystrophies (TGFBI, macular)", clue: "Opacités stromales héréditaires bilatérales : granulaire (miettes de pain, hyalin), grillagée (lignes réfringentes d’amyloïde, érosions récidivantes) et maculaire (taches diffuses jusqu’au limbe, cornée mince, autosomique récessive).", action: "Retenir « Marilyn Monroe Always Gets Her Men in LA City » (Macular – Mucopolysaccharides – Alcian blue ; Granular – Hyaline – Masson ; Lattice – Amyloïde – Congo red) ; PTK au laser si opacités superficielles, greffe si vision atteinte (récidive possible dans le greffon)." }
];
