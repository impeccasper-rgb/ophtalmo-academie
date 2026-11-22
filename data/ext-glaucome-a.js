var G = (typeof window !== 'undefined') ? window : globalThis;
G.OPH = G.OPH || {};

G.OPH.fiches = (G.OPH.fiches || []).concat([
{
  id: "g-papille",
  module: "C",
  order: 11,
  title: "La papille qui trompe : excavation glaucomateuse et ses imitateurs",
  en: "Glaucomatous cupping and its mimics",
  tags: ["highyield", "piege"],
  oneLiner: "Un C/D élevé n’est pas un diagnostic : mesurer le disque, lire l’anneau, chercher la pâleur qui impose une IRM.",
  definition: "Le glaucome creuse l’anneau aux pôles, qui reste rose. Grand disque, compression ou ischémie l’imitent.",
  anatomy: {
    text: "La papille (optic disc) mesure ≈ 1,5–2 mm, mais sa taille varie beaucoup alors que l’anneau d’axones occupe une surface assez semblable : grand disque = grand creux physiologique, petit disque = presque aucun creux. Le bord neurorétinien (neuroretinal rim) est normalement plus épais en inférieur, puis supérieur, nasal et temporal (règle ISNT, imparfaite). Les fibres maculaires entrent du côté temporal : une atteinte héréditaire, toxique ou compressive les pâlit en premier.",
    figure: {
      type: "eye",
      highlight: ["papille", "lame-criblee", "nerf-optique", "retine"]
    }
  },
  causal: {
    title: "Du nerf à la papille",
    steps: [
      { label: "Axones agressés", detail: "PIO et lame criblée fragile (glaucome), ou compression, ischémie, gène, toxique, anomalie congénitale.", kind: "cause" },
      { label: "Glaucome : perte aux pôles", detail: "Les axones disparaissent surtout en haut et en bas, sans gliose marquée : le creux grandit, l’anneau restant reste rose.", kind: "mecanisme" },
      { label: "Autre cause : la pâleur", detail: "Compression, ischémie ou hérédité laissent une gliose : l’anneau pâlit avant de se creuser.", kind: "mecanisme" },
      { label: "Signes à la papille", detail: "Encoche, vaisseau circumlinéaire dénudé, baïonnette, hémorragie de Drance, atrophie péripapillaire (APP) zone bêta, défauts de la RNFL.", kind: "lesion" },
      { label: "Défaut de champ concordant", detail: "Glaucome : respecte le méridien horizontal. Chiasma : méridien vertical. Nerf optique : scotome central ou caecocentral.", kind: "signe" },
      { label: "Cause grave manquée", detail: "Tumeur, artérite ou glaucome évolutif, si on se fie au seul C/D.", kind: "complication" }
    ],
    levers: [
      { at: 3, label: "Taille du disque d’abord", detail: "Un C/D de 0,7 peut être normal dans un grand disque et suspect dans un petit." },
      { at: 2, label: "IRM si drapeau rouge", detail: "Pâleur > excavation, AV ou couleurs ↓, défaut vertical : imagerie avant tout traitement du glaucome." },
      { at: 5, label: "OCT + champ en série", detail: "Une référence objective puis le changement documenté tranchent mieux qu’une mesure isolée." }
    ]
  },
  risk: [
    "Grand disque (plus fréquent chez les personnes d’ascendance africaine) ou petit disque (hypermétrope)",
    "Myopie forte : papille inclinée, APP, OCT faussement rouge",
    "Perte visuelle aiguë passée (ischémie, artérite)",
    "Famille avec vision basse dès l’enfance ; diabète maternel",
    "Éthambutol, carence en vitamine B12"
  ],
  presentation: [
    "Dirigé pour « C/D élevé », souvent sans symptôme",
    "Glaucome : anneau rose aminci aux pôles, AV et couleurs conservées longtemps",
    "Imitateur compressif ou héréditaire : AV ou couleurs ↓, déficit pupillaire afférent relatif (DPAR), pâleur",
    "Imitateur congénital : aspect stable, défaut de champ qui ne progresse pas",
    "Progression rapide ou asymétrie sans PIO qui l’explique"
  ],
  exam: {
    signs: [
      { sign: "Taille du disque (en premier)", why: "Hauteur du faisceau ajustée au disque × facteur de la lentille (approximatif, selon le fabricant : ≈ 1,1 à 78 D, ≈ 1,3 à 90 D) : petit < ≈ 1,5 mm, grand > ≈ 2 mm. Le C/D attendu suit la taille." },
      { sign: "Anneau : épaisseur (ISNT) et couleur", why: "Encoche ou amincissement aux pôles = glaucome ; anneau pâle = cause non glaucomateuse probable." },
      { sign: "Excavation ou pâleur ?", why: "Relief (cassure des petits vaisseaux) contre couleur ; une pâleur qui déborde le creux est un drapeau rouge." },
      { sign: "Vaisseaux, hémorragie, APP", why: "Baïonnette et vaisseau dénudé suivent l’excavation ; hémorragie de Drance = facteur de risque de progression (AAO 2026) ; vaisseaux optociliaires = gêne chronique au retour veineux." },
      { sign: "AV, couleurs, DPAR", why: "Épargnés longtemps par le glaucome ; leur atteinte précoce oriente vers le nerf." }
    ],
    tests: [
      { test: "OCT RNFL et couche des cellules ganglionnaires maculaires (GCL)", when: "Tout suspect, au départ et au suivi (AAO 2026)", read: "Perte inféro- ou supérotemporale concordante = glaucome ; perte maculaire nasale qui respecte le méridien vertical = chiasma." },
      { test: "Champs 24-2 et 10-2", when: "Au départ (guide canadien), puis en série", read: "Méridien horizontal = glaucome ; vertical = chiasma ou voies optiques → IRM." },
      { test: "IRM cérébrale et orbitaire avec gadolinium", when: "Drapeau rouge", read: "Adénome hypophysaire, méningiome, anévrisme." },
      { test: "VS, CRP, plaquettes", when: "≥ 50 ans avec symptômes d’artérite ou perte visuelle aiguë passée", read: "Artérite à cellules géantes : stéroïdes sans attendre la biopsie." }
    ]
  },
  ddx: [
    { dx: "Grand creux physiologique, mégalopapille", clue: "Grand disque, anneau rose régulier (ISNT), OCT et champ normaux, stable. Peut aussi devenir glaucomateux." },
    { dx: "Papille inclinée du myope", clue: "Disque ovale oblique, croissant d’APP, défauts supérotemporaux qui franchissent le méridien vertical." },
    { dx: "Hypoplasie du nerf optique", clue: "Petit disque à double anneau ; forme segmentaire supérieure (mère diabétique) : défaut inférieur stable. Bilatérale : IRM et bilan hypophysaire." },
    { dx: "Atrophie optique compressive ou dominante", clue: "Pâleur > excavation. Compressive : défaut vertical, atrophie en bande. Atrophie optique dominante : pâleur temporale bilatérale, jeune, famille." },
    { dx: "Séquelle de NOIA", clue: "Non artéritique : pâleur sectorielle, rarement d’excavation. Artéritique : excavation pâle qui imite un glaucome." },
    { dx: "Drusen papillaires", clue: "Papille bosselée sans creux, pseudo-œdème, défauts lents ; calcium à l’échographie B et en autofluorescence." }
  ],
  redFlags: [
    "Âge < 50 ans, AV ou couleurs ↓, DPAR inexpliqué",
    "Pâleur > excavation ou défaut respectant le méridien vertical",
    "≥ 50 ans avec symptômes d’artérite : VS, CRP le jour même"
  ],
  cat: {
    algo: [
      { q: "Creux proportionné à la taille du disque ?", yes: "Grand disque, anneau normal : imitateur probable.", no: "Creux trop grand : suspect de glaucome.", yesGo: 1, noGo: 1 },
      { q: "Drapeau rouge présent ?", yes: "IRM ± VS, CRP (le jour même si artérite).", no: "Bilan de glaucome : PIO, pachymétrie, gonioscopie.", noGo: 2 },
      { q: "OCT et champ concordent ?", yes: "Glaucome : PIO cible.", no: "Refaire ; chercher un artefact ou une autre cause.", yesGo: 3, noGo: 3 },
      { q: "Changement documenté au suivi ?", yes: "Traiter ou intensifier.", no: "Stable : suivi espacé ; pas de gouttes si imitateur." }
    ],
    phases: [
      {
        phase: "observation",
        items: ["Photos et OCT de référence : la comparaison dans le temps tranche souvent"]
      },
      {
        phase: "medical",
        items: ["Gouttes seulement si glaucome confirmé : cible ≈ 20–30 % sous la PIO de base"]
      },
      {
        phase: "suivi",
        items: ["OCT et champ ensemble (AAO 2026) ; noter chaque hémorragie papillaire"]
      },
      {
        phase: "escalade",
        items: ["Drapeau rouge : IRM priorisée, neuro-ophtalmologie ; artérite suspectée : stéroïdes le jour même"]
      }
    ],
    local: "Au Québec, beaucoup de références « C/D élevé » viennent de l’optométrie ; l’optométriste peut traiter un glaucome suspect ou débutant, mais doit diriger vers l’ophtalmologiste pour le suivi (Règlement O-7, r. 11.1). Sur la requête d’IRM, nommer le drapeau rouge."
  },
  treatments: [
    { name: "OCT et champs en série", how: "OCT RNFL et GCL ; périmétrie 24-2 et 10-2.", why: "Tout disque suspect : référence, puis changement.", pros: "Objectifs ; la forme du défaut localise la lésion.", cons: "Bases normatives mal adaptées aux disques atypiques.", cx: "Erreur si on traite l’imprimé sans regarder la papille.", dose: "OCT RNFL et GCL ; champs 24-2 et 10-2, en série.", refer: "Tout disque suspect : examen de référence, puis comparer.", pitfall: "Ne pas traiter l’imprimé : un disque atypique sort de la base normative." },
    { name: "IRM et bilan d’artérite", how: "IRM avec gadolinium ; VS, CRP, plaquettes, biopsie de l’artère temporale.", why: "Drapeau rouge, ou excavation pâle après une perte visuelle aiguë.", pros: "Trouve des causes traitables ; protège l’autre œil.", cons: "Délais ; faible rendement sans drapeau rouge.", cx: "Gadolinium et fonction rénale ; stéroïdes à haute dose.", dose: "IRM avec gadolinium ; VS, CRP, plaquettes ± biopsie de l’artère temporale.", refer: "Drapeau rouge : IRM rapide ; artérite suspectée : le jour même.", pitfall: "Pas de gouttes avant d’avoir exclu une compression.", qc: "Québec : nommer le drapeau rouge sur la requête d’IRM pour la prioriser." },
    { name: "Traitement hypotenseur", how: "Gouttes, SLT ou chirurgie selon le stade.", why: "Glaucome confirmé, même dans une mégalopapille ou une papille inclinée.", pros: "Ralentit la perte.", cons: "Inutile dans un imitateur.", cx: "Effets indésirables à vie (voir GPAO, GPN).", dose: "Latanoprost 0,005 % au coucher, SLT ou chirurgie selon le stade.", refer: "Glaucome confirmé, même dans une mégalopapille ou une papille inclinée.", pitfall: "Inutile dans un imitateur stable : effets indésirables à vie." }
  ],
  pearls: [
    { q: "Un C/D de 0,7 est-il anormal ?", a: "Ça dépend du disque : dans un grand disque, 0,7 avec un anneau rose régulier peut être normal ; dans un petit disque, 0,5 peut déjà être glaucomateux." },
    { q: "Comment distingues-tu excavation et pâleur ?", a: "L’excavation se lit au relief, la pâleur à la couleur : une pâleur plus étendue que le creux oriente vers une compression ou une ischémie." },
    { q: "Quelle excavation doit faire penser à l’artérite ?", a: "Une excavation pâle après une perte visuelle aiguë à 50 ans ou plus : la NOIA artéritique laisse souvent une excavation, la non artéritique rarement." }
  ],
  mnemonic: { title: "Les 5 R de la papille", text: "**R**ing (taille) → **R**im (ISNT, couleur) → **R**NFL → **R**égion d’APP → **R**ouge (hémorragies)." },
  compare: {
    title: "Grande papille : physiologique ou glaucomateuse ?",
    normal: {
      figure: { type: "photo", id: "OPH-228" },
      caption: "Selon la source : anomalie congénitale (grand disque, à gauche), papille adelphe normale à droite."
    },
    patho: {
      figure: { type: "photo", id: "OPH-309" },
      caption: "Mégalopapille avec glaucome sévère (selon la source).",
      reveal: [
        "Disque très grand, presque entièrement pâle et creusé",
        "Bord neurorétinien réduit à un mince liseré près de l’émergence des vaisseaux",
        "Vaisseaux coudés au bord du creux (baïonnette)",
        "La taille du disque ne protège pas : c’est l’anneau qui compte"
      ]
    }
  },
  sources: [
    "AAO PPP Primary Open-Angle Glaucoma (Gedde SJ et al., Ophthalmology, en ligne 9 févr. 2026)",
    "COS 2009 : Canadian Ophthalmological Society glaucoma guidelines (Can J Ophthalmol 2009;44 Suppl 1:S7-S93)",
    "Guide optométrique canadien GPAO (MacIver S, MacDonald M, Prokopich CL, Can J Optom 2017;79 Suppl 1)",
    "Greenfield DS et al. The cupped disc: who needs neuroimaging? (Ophthalmology 1998)",
    "Trobe JD et al. Nonglaucomatous excavation of the optic disc (Arch Ophthalmol 1980)"
  ],
  treatment: {
    first: [
      "**Toi** : AV, couleurs, DPAR ; noter la taille du disque et la couleur de l’anneau.",
      "**Ophtalmologiste** : OCT et champs en série ; IRM si drapeau rouge ; traiter un glaucome confirmé."
    ],
    refer: "Référer en ophtalmologie : en quelques semaines — C/D élevé ; le jour même si ≥ 50 ans avec céphalée ou claudication de la mâchoire.",
    pitfall: ["**Gouttes hypotensives** sur une papille pâle : compression manquée (IRM d’abord)."],
    qc: "Québec : nommer le drapeau rouge sur la requête d’IRM pour la prioriser."
  }
},
{
  id: "g-cristallin",
  module: "C",
  order: 12,
  title: "Glaucomes liés au cristallin, à l’implant et au trauma",
  en: "Lens-, IOL- and trauma-related glaucomas",
  tags: ["urgent", "highyield"],
  oneLiner: "PIO élevée avec cataracte avancée, implant ou trauma : trouver le mécanisme (angle fermé ou ouvert), baisser la PIO, traiter la cause.",
  definition: "Cristallin, implant ou trauma font monter la PIO. Baisser la PIO, puis traiter la cause.",
  anatomy: {
    text: "Le cristallin est suspendu derrière l’iris par la zonule (zonules), fibres attachées au corps ciliaire ; il s’épaissit toute la vie et pousse l’iris vers l’avant. Sa capsule retient des protéines qui, libérées, bouchent le trabéculum ou déclenchent une inflammation. Le corps ciliaire est fragile au trauma : sa déchirure entre fibres longitudinales et circulaires donne la récession de l’angle.",
    figure: {
      type: "eye",
      highlight: ["cristallin", "zonules", "iris", "angle", "corps-ciliaire", "trabeculum"]
    }
  },
  causal: {
    title: "Cristallin, implant, trauma : la PIO monte",
    steps: [
      { label: "Cristallin, implant ou trauma", detail: "Cataracte gonflée ou hypermûre, zonule faible (PXF, Marfan, trauma), implant mal placé, sang ou gaz.", kind: "cause" },
      { label: "Angle poussé, fermé", detail: "Cristallin gonflé ou déplacé, ou gaz qui se dilate : l’iris est poussé en avant ou la pupille bloquée.", kind: "mecanisme" },
      { label: "Angle ouvert, bouché", detail: "Protéines et macrophages, fragments de cristallin, globules rouges, pigment d’un implant qui frotte obstruent le trabéculum.", kind: "mecanisme" },
      { label: "Angle cicatriciel", detail: "Après un trauma contusif, le trabéculum blessé cicatrise : glaucome des années plus tard.", kind: "lesion" },
      { label: "PIO élevée", detail: "Souvent unilatéral ; brutal (fermeture, hyphéma) ou insidieux (récession, aphaquie).", kind: "signe" },
      { label: "Nerf, cornée abîmés", detail: "Neuropathie optique, imbibition hématique, perte endothéliale ; nerf plus fragile en drépanocytose.", kind: "complication" }
    ],
    levers: [
      { at: 1, label: "Lever le blocage", detail: "LPI si bloc pupillaire, cycloplégique pour reculer un cristallin déplacé en avant, retrait partiel du gaz." },
      { at: 0, label: "Enlever la cause", detail: "Extraction du cristallin, lavage des fragments ou du sang, repositionnement ou échange de l’implant." },
      { at: 2, label: "Hypotenseurs, stéroïde", detail: "Suppresseurs de l’aqueuse, stéroïde topique ; drépanocytose : éviter IAC (surtout oraux) et hyperosmotiques." },
      { at: 3, label: "Suivi à vie", detail: "Gonioscopie après tout trauma contusif ; PIO à vie si récession ou aphaquie de l’enfance." }
    ]
  },
  risk: [
    "Cataracte mature ou hypermûre négligée",
    "Zonule fragile : PXF, Marfan, homocystinurie, trauma",
    "Implant monobloc dans le sulcus, implant de chambre antérieure ou décentré",
    "Trauma contusif ; drépanocytose ou trait drépanocytaire ; anticoagulants",
    "Chirurgie de cataracte congénitale dans l’enfance",
    "Gaz intraoculaire après vitrectomie, puis avion, altitude ou protoxyde d’azote"
  ],
  presentation: [
    "Glaucome phacomorphique : cataracte blanche gonflée, chambre plate de cet œil seulement",
    "Glaucome phacolytique : cataracte hypermûre, chambre profonde, particules blanches flottantes, pas de KP",
    "Syndrome UGH : vision brouillée par épisodes, microhyphémas, pics de PIO chez un pseudophaque",
    "Hyphéma : niveau de sang au bas de la chambre",
    "Récession de l’angle ou glaucome aphaque : œil blanc, PIO qui monte des années plus tard",
    "Gaz : douleur, PIO élevée après vitrectomie, parfois après avion, altitude ou protoxyde d’azote"
  ],
  exam: {
    signs: [
      { sign: "Chambre comparée à l’autre œil", why: "Plate d’un seul côté = cause cristallinienne ; étroite aux deux yeux = fermeture primaire." },
      { sign: "Gonioscopie", why: "Fermé = poussée ou bloc ; ouvert = obstruction ; bande ciliaire élargie et procès iriens déchirés = récession (comparer à l’autre œil)." },
      { sign: "Particules, cellules, KP", why: "Phacolytique : particules sans KP ; KP granulomateux après rupture capsulaire = uvéite phaco-antigénique." },
      { sign: "Phacodonésis, vitré en chambre", why: "Zonule rompue : cristallin ou implant qui tremble." },
      { sign: "Transillumination de l’iris", why: "Défauts qui épousent la forme de l’implant = frottement (UGH)." },
      { sign: "Grade de l’hyphéma", why: "Microhyphéma (globules en suspension), I < 1/3, II 1/3–1/2, III > 1/2, IV total." }
    ],
    tests: [
      { test: "UBM (échographie haute fréquence) ou AS-OCT", when: "UGH, subluxation, fermeture secondaire", read: "Implant contre l’iris ou le corps ciliaire, cristallin déplacé, effusion." },
      { test: "Échographie B", when: "Fond d’œil invisible (cataracte blanche, hyphéma)", read: "Décollement de rétine, tumeur, cristallin luxé en arrière, corps étranger." },
      { test: "Électrophorèse de l’hémoglobine", when: "Hyphéma, ascendance à risque ou statut inconnu", read: "Trait ou maladie drépanocytaire : seuil d’intervention plus bas." },
      { test: "Gonioscopie différée", when: "Quelques semaines après un hyphéma", read: "Récession, cyclodialyse, synéchies : base du suivi." }
    ]
  },
  ddx: [
    { dx: "Crise de fermeture primaire", clue: "Œil adelphe aussi étroit, cristallin non intumescent ; la LPI règle le bloc." },
    { dx: "Uvéite phaco-antigénique", clue: "Après rupture capsulaire (trauma, chirurgie) : uvéite granulomateuse avec KP." },
    { dx: "Glaucome néovasculaire", clue: "Néovaisseaux de l’iris et de l’angle, rétinopathie ischémique." },
    { dx: "Glaucome à cellules fantômes", clue: "Après hémorragie du vitré : cellules kaki dans la chambre, angle ouvert." },
    { dx: "Mal-direction de l’aqueuse", clue: "Après chirurgie : chambre plate au centre et en périphérie malgré une LPI perméable." }
  ],
  redFlags: [
    "Cristallin ou implant luxé en chambre antérieure : contact endothélial, bloc → chirurgie rapide",
    "Hyphéma et drépanocytose : PIO ≥ 24 mmHg plus de 24 h → lavage chirurgical",
    "Douleur après vitrectomie avec gaz : PIO immédiate"
  ],
  cat: {
    algo: [
      { q: "Angle fermé (chambre plate, gonioscopie) ?", yes: "LPI si bloc, cycloplégique si cristallin en avant, puis chirurgie.", no: "Angle ouvert : chercher ce qui bouche.", noGo: 1 },
      { q: "Trauma récent avec sang ?", yes: "Protocole de l’hyphéma ; dépister la drépanocytose.", no: "", noGo: 2 },
      { q: "Cataracte hypermûre, particules, chambre profonde ?", yes: "Phacolytique : baisser la PIO, stéroïde, extraction rapide.", no: "", noGo: 3 },
      { q: "Pseudophaque, microhyphémas, transillumination ?", yes: "UGH : UBM, repositionner ou échanger l’implant.", no: "", noGo: 4 },
      { q: "Gaz dans l’œil ?", yes: "Hypotenseurs, positionnement, ± retrait partiel du gaz.", no: "Gonioscopie : récession d’un trauma ancien ?" }
    ],
    phases: [
      {
        phase: "medical",
        items: [
          "Bêtabloquant, alpha-agoniste ; IAC sauf drépanocytose ; acétazolamide 500 mg PO ou mannitol IV si réfractaire (à éviter en drépanocytose)",
          "Prednisolone 1 % et cycloplégique ; pas de pilocarpine si cause cristallinienne"
        ]
      },
      {
        phase: "laser",
        items: ["LPI si bloc pupillaire"]
      },
      {
        phase: "chirurgie",
        items: [
          "Extraction du cristallin dès que possible ; équipe de rétine si luxé en arrière",
          "Lavage : fragments, hyphéma persistant ; UGH : implant replacé ou échangé"
        ]
      },
      {
        phase: "suivi",
        items: [
          "Hyphéma : examen presque quotidien les premiers jours ; récession et aphaquie : PIO à vie",
          "Hyphéma : guetter le resaignement (surtout du 2e au 5e jour), l’imbibition hématique débutante ou un hyphéma total."
        ]
      },
      {
        phase: "escalade",
        items: ["PIO non contrôlée ou imbibition : lavage ; glaucome réfractaire : tube (Ahmed, Baerveldt)"]
      }
    ],
    local: "À Montréal, demander l’électrophorèse de l’hémoglobine devant tout hyphéma chez les patients d’origine haïtienne, africaine, antillaise, méditerranéenne, moyen-orientale ou indienne, avant de choisir les hypotenseurs."
  },
  treatments: [
    { name: "Extraction du cristallin", how: "Phacoémulsification ou extraction extracapsulaire.", why: "Phacomorphique, phacolytique, cristallin subluxé ou luxé.", pros: "Traite la cause.", cons: "Capsule fragile, zonule faible, cornée œdémateuse.", cx: "Rupture capsulaire, noyau dans le vitré, perte endothéliale.", dose: "Phacoémulsification ou extraction extracapsulaire.", refer: "Phacomorphique ou phacolytique : chirurgie rapide, après baisse de la PIO.", pitfall: "Capsule fragile, zonules faibles : chirurgien expérimenté." },
    { name: "Hypotenseurs et anti-inflammatoires", how: "Suppresseurs de l’aqueuse ; prednisolone 1 %, cycloplégique.", why: "Toujours en premier.", pros: "Rapides, en clinique.", cons: "Temporisent sans traiter la cause.", cx: "IAC, hyperosmotiques : falciformation ; acétazolamide : sulfamides, potassium, rein.", dose: "Timolol 0,5 %, brimonidine 0,2 % ; prednisolone acétate 1 % QID, cycloplégique.", refer: "Toujours en premier ; diriger le jour même.", pitfall: "Drépanocytose : éviter IAC et hyperosmotiques (falciformation)." },
    { name: "Repositionnement ou échange d’implant", how: "Implant remis dans le sac, optique capturée, fixation, ou modèle conçu pour le sulcus.", why: "UGH, implant migré.", pros: "Seul traitement définitif du frottement.", cons: "Chirurgie complexe.", cx: "Hémorragie, décollement de rétine, œdème maculaire.", dose: "Implant replacé dans le sac, capturé, fixé ou échangé.", refer: "UGH ou implant migré : chirurgien du segment antérieur.", pitfall: "Chirurgie complexe : risque d’hémorragie et de décollement de rétine." },
    { name: "Protocole de l’hyphéma", how: "Tête du lit à 30–45°, coque, activité réduite, atropine, prednisolone 1 % ; pas d’AINS ni d’aspirine.", why: "Tout hyphéma traumatique.", pros: "Confort, moins d’inflammation.", cons: "Preuves limitées pour chaque mesure.", cx: "Resaignement, PIO, imbibition.", dose: "Tête du lit à 30–45°, coque, atropine 1 %, prednisolone acétate 1 %.", refer: "Tout hyphéma traumatique : suivi rapproché les premiers jours.", pitfall: "Pas d’AINS ni d’aspirine ; drépanocytose : PIO ≥ 24 mmHg plus de 24 h = lavage.", qc: "Montréal : électrophorèse de l’hémoglobine si origine haïtienne, africaine, antillaise, méditerranéenne, moyen-orientale ou indienne." },
    { name: "Tube de drainage", how: "Ahmed ou Baerveldt.", why: "Récession ou glaucome aphaque réfractaire.", pros: "Contrôle durable.", cons: "Dans la récession, SLT peu efficace et miotiques parfois paradoxaux.", cx: "Hypotonie, érosion du tube, décompensation cornéenne.", dose: "Ahmed ou Baerveldt, au bloc.", refer: "Récession de l’angle ou glaucome aphaque réfractaire.", pitfall: "Récession : SLT peu efficace, miotiques parfois paradoxaux." }
  ],
  pearls: [
    { q: "Comment distingues-tu glaucome phacomorphique et fermeture primaire ?", a: "Phacomorphique : chambre plate d’un seul côté, cataracte gonflée, œil adelphe plus profond. La LPI ne règle pas la cause : on retire le cristallin une fois la PIO abaissée." },
    { q: "Pourquoi éviter l’acétazolamide en cas d’hyphéma et de drépanocytose ?", a: "Il acidifie l’aqueuse et favorise la falciformation : les globules rigides bouchent le trabéculum. On évite aussi les hyperosmotiques et on opère plus tôt." },
    { q: "Que dis-tu à un patient qui a du gaz dans l’œil ?", a: "Pas d’avion, d’altitude ni de protoxyde d’azote tant que le gaz n’est pas résorbé (plusieurs semaines ; plus long pour le C3F8 que pour le SF6) : la bulle grossirait et la PIO monterait brutalement." }
  ],
  mnemonic: { title: "Gros, fuit, morceaux, déplacé", text: "**Gros** : phacomorphique ; **fuit** : phacolytique ; **morceaux** : particules ; **déplacé** : luxation." },
  compare: {
    title: "Angle normal vs récession de l’angle",
    normal: {
      figure: { type: "gonio", grade: 4 },
      caption: "Angle ouvert : bande ciliaire de largeur habituelle, procès iriens intacts."
    },
    patho: {
      figure: { type: "gonio", grade: 4, recession: true },
      caption: "Récession après un trauma contusif.",
      reveal: ["Bande ciliaire anormalement large", "Procès iriens déchirés", "Racine de l’iris reculée", "Comparer à l’autre œil : l’asymétrie trahit la récession"]
    }
  },
  sources: [
    "AAO PPP Primary Angle Closure Disease (Gedde SJ, Chopra V, Vinod K et al., Ophthalmology, en ligne 9 févr. 2026)",
    "COS 2009 : Canadian Ophthalmological Society glaucoma guidelines (Can J Ophthalmol 2009;44 Suppl 1:S7-S93)",
    "AAO Basic and Clinical Science Course, section 10 : Glaucoma",
    "EyeRounds (University of Iowa) : cas Uveitis-glaucoma-hyphema syndrome et Aphakic glaucoma"
  ],
  treatment: {
    first: [
      "**Toi** : hyphéma : tête du lit à 30–45°, coque, pas d’AINS ni d’aspirine.",
      "**Ophtalmologiste** : baisser la PIO, prednisolone acétate 1 %, cycloplégique ; retirer ou replacer la cause."
    ],
    refer: "Référer en ophtalmologie : le jour même — trauma avec sang, cataracte blanche et œil douloureux, ou cristallin luxé ; immédiatement si douleur après une vitrectomie avec gaz.",
    pitfall: ["**Acétazolamide** en drépanocytose : falciformation dans l’hyphéma.", "**Pilocarpine** : jamais si la cause est cristallinienne."],
    qc: "Montréal : électrophorèse de l’hémoglobine si origine haïtienne, africaine, antillaise, méditerranéenne, moyen-orientale ou indienne."
  }
}
]);

G.OPH.quiz = (G.OPH.quiz || []).concat([
{
  id: "C-201", module: "C", topic: "g-papille", type: "image", level: 2, trap: true,
  stem: "On te dirige un patient pour « C/D 0,8 à un œil, asymétrique ». AV 6/6 aux deux yeux, PIO 15 mmHg, angle ouvert, pas de DPAR. Voici ses deux papilles. Quelle est la meilleure conduite ?",
  figure: { type: "photo", id: "OPH-228" },
  options: [
    "Débuter un analogue des prostaglandines vu l’asymétrie du C/D",
    "Mesurer les disques, puis faire OCT et champ de référence",
    "IRM cérébrale urgente pour exclure une compression du chiasma",
    "Rassurer et congédier sans suivi, puisque la PIO est normale"
  ],
  answer: 1,
  explain: "Le C/D dépend de la taille du disque : un grand disque a un grand creux physiologique. Ici, l’asymétrie suit une différence de taille ; on juge l’anneau, puis on documente avec OCT, champ et photos.",
  why: [
    "Traiter un C/D sans juger la taille du disque ni la fonction expose à un traitement à vie inutile.",
    "Oui : un disque est beaucoup plus grand ; son grand creux entouré d’un anneau régulier peut être physiologique (mégalopapille). La référence objective tranchera.",
    "Aucun drapeau rouge (AV normale, pas de DPAR, pas de pâleur de l’anneau) : l’IRM n’est pas le premier geste.",
    "Une PIO normale n’exclut pas un glaucome, et une mégalopapille peut aussi devenir glaucomateuse : il faut une référence."
  ]
},
{
  id: "C-202", module: "C", topic: "g-papille", type: "image", level: 2, trap: false,
  stem: "Un patient voit mal des deux yeux depuis l’enfance, de façon lentement progressive ; un parent a le même problème. AV 6/18 aux deux yeux, difficulté pour l’axe bleu-jaune, PIO 14 mmHg. Voici une de ses papilles ; l’autre est semblable. Quel diagnostic est le plus probable ?",
  figure: { type: "photo", id: "OPH-225" },
  options: [
    "Glaucome à pression normale bilatéral",
    "Séquelle de neuropathie optique ischémique",
    "Glaucome juvénile à angle ouvert",
    "Atrophie optique dominante (gène OPA1)"
  ],
  answer: 3,
  explain: "L’atrophie optique dominante atteint d’abord le faisceau papillomaculaire, qui entre du côté temporal : pâleur temporale bilatérale, AV modérément basse, déficit bleu-jaune, histoire familiale. Une excavation temporale peut faire croire à un GPN, mais la pâleur et l’AV basse trahissent la cause.",
  why: [
    "Le GPN épargne l’AV et les couleurs jusqu’à un stade avancé ; ici la pâleur temporale dépasse le creux.",
    "L’ischémie est aiguë et souvent unilatérale ; elle n’explique pas une baisse familiale depuis l’enfance.",
    "Le glaucome juvénile s’accompagne d’une PIO élevée et d’un anneau rose aminci aux pôles.",
    "Oui : début dans l’enfance, transmission dominante, déficit bleu-jaune et pâleur temporale."
  ]
},
{
  id: "C-203", module: "C", topic: "g-papille", type: "cat", level: 1, trap: false,
  stem: "Une femme de 44 ans est dirigée pour « suspect de glaucome » : C/D 0,7 à l’œil droit, PIO 16 mmHg, AV 6/12, désaturation du rouge et DPAR droit. L’anneau restant est pâle. Le champ 24-2 montre un défaut temporal qui s’arrête net au méridien vertical. Quelle est la prochaine étape ?",
  figure: null,
  options: [
    "IRM cérébrale et orbitaire avec gadolinium, en priorité",
    "Analogue des prostaglandines et contrôle dans 3 mois",
    "Courbe de PIO sur la journée pour démasquer des pics",
    "Répéter le champ 24-2 dans 6 mois pour confirmer"
  ],
  answer: 0,
  explain: "Un défaut qui respecte le méridien vertical localise la lésion au chiasma ou en arrière. Avec une AV basse, un DPAR, un âge < 50 ans et un anneau pâle, c’est une compression jusqu’à preuve du contraire : IRM avec gadolinium.",
  why: [
    "Oui : plusieurs drapeaux rouges réunis (âge, AV, DPAR, pâleur > excavation, défaut vertical).",
    "Traiter comme un glaucome retarderait le diagnostic d’une lésion compressive, souvent traitable.",
    "Utile pour un GPN typique, pas devant des signes neurologiques.",
    "Attendre 6 mois laisse progresser une compression ; le défaut vertical exige l’imagerie maintenant."
  ]
},
{
  id: "C-204", module: "C", topic: "g-papille", type: "image", level: 3, trap: false,
  stem: "Un jeune patient, suivi depuis la petite enfance pour baisse de vision et nystagmus, a ce fond d’œil aux deux yeux. La PIO est normale et aucun bilan n’a encore été fait. Que faut-il demander ?",
  figure: { type: "photo", id: "OPH-229" },
  options: [
    "Analogue des prostaglandines aux deux yeux, OCT dans 1 an",
    "Ponction lombaire avec pression d’ouverture",
    "IRM cérébrale et bilan endocrinien hypophysaire",
    "Électrorétinogramme seul, les papilles étant normales"
  ],
  answer: 2,
  explain: "L’hypoplasie du nerf optique donne un petit disque entouré d’un anneau clair (double anneau). Bilatérale, elle impose une IRM et un bilan hormonal : la dysplasie septo-optique peut s’accompagner d’un déficit hypophysaire dangereux (hypoglycémie, insuffisance surrénalienne).",
  why: [
    "Ce n’est pas un glaucome : petits disques sans excavation acquise.",
    "La ponction lombaire sert à l’œdème papillaire ; ici les disques sont petits, pas gonflés.",
    "Oui : chercher une dysplasie septo-optique (septum pellucidum absent, hypophyse) devant une hypoplasie bilatérale.",
    "Les disques ne sont pas normaux : ils sont petits, avec un double contour."
  ]
},
{
  id: "C-205", module: "C", topic: "g-cristallin", type: "image", level: 1, trap: false,
  stem: "Un patient pseudophaque consulte pour des épisodes répétés de vision brouillée à un œil. On note quelques globules rouges en chambre antérieure et une PIO à 35 mmHg. Voici la transillumination infrarouge de son iris. Quel est le diagnostic le plus probable ?",
  figure: { type: "photo", id: "OPH-301" },
  options: [
    "Syndrome uvéite-glaucome-hyphéma (UGH)",
    "Syndrome de dispersion pigmentaire primaire",
    "Glaucome néovasculaire diabétique",
    "Uvéite antérieure herpétique avec atrophie irienne"
  ],
  answer: 0,
  explain: "Le syndrome UGH survient quand un implant, souvent monobloc dans le sulcus ou décentré, frotte l’iris ou le corps ciliaire. L’UBM confirme le contact ; le traitement définitif est le repositionnement ou l’échange de l’implant.",
  why: [
    "Oui : défauts de transillumination qui épousent l’implant, microhyphémas, inflammation et pics de PIO.",
    "La dispersion primaire touche le jeune myope, avec défauts radiaires périphériques, sans hyphéma ni implant en cause.",
    "Le néovasculaire saigne aussi, mais on verrait des néovaisseaux de l’iris et de l’angle.",
    "L’herpès donne une atrophie en plages ou sectorielle avec KP, sans lien avec l’implant."
  ]
},
{
  id: "C-206", module: "C", topic: "g-cristallin", type: "cat", level: 2, trap: true,
  stem: "Un homme de 19 ans reçoit une rondelle de hockey dans l’œil gauche. Hyphéma de grade II, PIO 34 mmHg. L’électrophorèse confirme un trait drépanocytaire. Quel médicament dois-tu éviter ?",
  figure: null,
  options: [
    "Timolol 0,5 % en gouttes",
    "Acétate de prednisolone 1 %",
    "Atropine 1 % en gouttes",
    "Acétazolamide oral 500 mg"
  ],
  answer: 3,
  explain: "En drépanocytose (même le trait), les globules falciformés traversent mal le trabéculum et le nerf tolère mal la PIO. On évite les IAC (surtout oraux) et les hyperosmotiques, et le seuil de lavage chirurgical est plus bas (PIO ≥ 24 mmHg plus de 24 h).",
  why: [
    "Bêtabloquant topique : premier choix sûr pour baisser la PIO dans ce contexte.",
    "Le stéroïde topique réduit l’inflammation : protocole habituel de l’hyphéma.",
    "La cycloplégie soulage, immobilise l’iris et limite les synéchies : protocole habituel.",
    "Oui : il acidifie l’aqueuse et favorise la falciformation ; les globules rigides bouchent le trabéculum."
  ]
},
{
  id: "C-207", module: "C", topic: "g-cristallin", type: "diagnostic", level: 1, trap: false,
  stem: "Une femme de 82 ans, qui ne voit presque plus de l’œil droit depuis des années, consulte pour cet œil rouge et douloureux. PIO 46 mmHg, cataracte blanche hypermûre, chambre antérieure profonde, angle ouvert, nombreuses particules blanches flottantes et cellules, sans KP. Quel est le diagnostic ?",
  figure: null,
  options: [
    "Glaucome phacomorphique par cristallin intumescent",
    "Uvéite phaco-antigénique après rupture capsulaire",
    "Glaucome phacolytique par fuite de protéines",
    "Crise aiguë de fermeture primaire de l’angle"
  ],
  answer: 2,
  explain: "Le glaucome phacolytique est un glaucome à angle ouvert : les protéines d’une cataracte mature ou hypermûre fuient par une capsule intacte et les macrophages qui les mangent bouchent le trabéculum. On contrôle la PIO et l’inflammation, puis on retire le cristallin rapidement.",
  why: [
    "Le phacomorphique ferme l’angle avec une chambre plate, ce qui n’est pas le cas ici.",
    "Elle suit une rupture de la capsule et donne une uvéite granulomateuse avec KP.",
    "Oui : capsule intacte qui fuit, macrophages qui bouchent un angle ouvert ; traitement : PIO puis extraction.",
    "La fermeture primaire donne une chambre étroite et un angle fermé, aux deux yeux."
  ]
},
{
  id: "C-208", module: "C", topic: "g-cristallin", type: "image", level: 2, trap: false,
  stem: "Une semaine après une vitrectomie avec injection de gaz, un patient reçoit une anesthésie générale au protoxyde d’azote pour une autre chirurgie. Il se réveille avec une douleur oculaire intense ; PIO 55 mmHg. Voici l’œil à la lampe à fente. Quel mécanisme explique le mieux la situation ?",
  figure: { type: "photo", id: "OPH-314" },
  options: [
    "Hémorragie suprachoroïdienne retardée",
    "Expansion de la bulle de gaz intraoculaire",
    "Endophtalmite aiguë postopératoire",
    "Mal-direction de l’aqueuse (bloc ciliaire)"
  ],
  answer: 1,
  explain: "Un gaz intraoculaire (SF6, C3F8) se dilate en altitude ou sous protoxyde d’azote et peut fermer l’angle ou occlure l’artère centrale de la rétine. Le patient porte un bracelet, évite l’avion et prévient l’anesthésiste ; traitement : hypotenseurs, positionnement, ± retrait partiel du gaz.",
  why: [
    "Possible après chirurgie, mais le déclencheur évident est le protoxyde d’azote dans un œil rempli de gaz.",
    "Oui : le protoxyde d’azote entre dans la bulle plus vite que l’azote n’en sort ; la bulle grossit, pousse l’iris en avant et ferme l’angle.",
    "Elle donne douleur et inflammation, mais pas cette chronologie liée à l’anesthésie ; elle reste à exclure.",
    "La mal-direction suit surtout une chirurgie filtrante ou de cataracte ; le gaz explique mieux ce tableau."
  ]
}
]);

G.OPH.photos = G.OPH.photos || {};
(function (add) { Object.keys(add).forEach(function (k) { G.OPH.photos[k] = (G.OPH.photos[k] || []).concat(add[k]); }); })({
  "g-papille": [
    { id: "OPH-228", caption: "Mégalopapille : grand disque congénital, papille adelphe normale (selon la source)", look: "Compare la taille des deux disques avant de juger le creux.", reveal: ["Disque de gauche nettement plus grand que celui de droite", "Grande zone centrale pâle dans ce grand disque, traversée par les vaisseaux", "Zone claire péripapillaire autour du grand disque", "Papille de droite de taille et d’aspect habituels"] },
    { id: "OPH-309", caption: "Mégalopapille avec glaucome sévère (selon la source)", look: "Cherche ce qui reste du bord neurorétinien dans ce grand disque.", reveal: ["Disque très grand, presque entièrement pâle et creusé", "Anneau réduit à un liseré près de l’émergence des vaisseaux", "Vaisseaux coudés au bord du creux (baïonnette)"] },
    { id: "OPH-225", caption: "Atrophie optique dominante : pâleur temporale (selon la source)", look: "Compare la couleur du côté maculaire du disque à celle du côté opposé.", reveal: ["Pâleur marquée du côté temporal, vers la macula (à gauche de l’image)", "Côté nasal du disque plus rosé", "Pâleur plus étendue que l’excavation"] },
    { id: "OPH-227", caption: "Atrophie optique en bande d’origine compressive (selon la source)", look: "Regarde la couleur des deux disques et où se situe la pâleur.", reveal: ["Deux disques pâles, avec gros plans en médaillon", "Selon la source : atrophie diffuse sévère OD, atrophie en bande OS", "Pâleur plus marquée que le creux : aspect non glaucomateux"] },
    { id: "OPH-230", caption: "Hypoplasie segmentaire supérieure du nerf optique (selon la source)", look: "Observe le contour du disque et l’endroit d’où sortent les vaisseaux.", reveal: ["Croissant clair qui borde une partie du disque (double contour)", "Émergence des vaisseaux décentrée vers le haut du disque", "Disque petit, sans grand creux central"] },
    { id: "OPH-232", caption: "Vaisseaux optociliaires sur la papille (selon la source)", look: "Suis les vaisseaux posés sur le disque : où commencent-ils et où finissent-ils ?", reveal: ["Plusieurs vaisseaux tortueux, en boucles, à la surface du disque", "Ils naissent et disparaissent au bord du disque", "Disque pâle"] }
  ],
  "g-cristallin": [
    { id: "OPH-238", caption: "Cataracte mature blanche (selon la source)", look: "Cherche s’il reste un reflet rouge à travers la pupille.", reveal: ["Cristallin blanc opaque qui remplit la pupille dilatée", "Opacités corticales en rayons", "Aucun reflet rouge du fond d’œil"] },
    { id: "OPH-321", caption: "Luxation spontanée du cristallin en pseudo-exfoliation (selon la source)", look: "Repère la ligne courbe qui traverse la pupille dilatée.", reveal: ["Bord du cristallin visible en travers de la pupille", "Partie supérieure de la pupille plus noire, sans cristallin", "Cristallin déplacé vers le bas : zonule rompue"] },
    { id: "OPH-301", caption: "Syndrome UGH : transillumination infrarouge de l’iris (selon la source)", look: "Cherche les zones où la lumière traverse l’iris.", reveal: ["Nombreux défauts de transillumination (zones blanches) dans l’iris", "Selon la source : défauts radiaires et défauts en arc qui épousent les anses de l’implant", "Signe d’un iris frotté par l’implant"] },
    { id: "OPH-303", caption: "UBM : optique d’implant contre la face postérieure de l’iris", look: "Repère la double ligne très brillante et ce qui la touche.", reveal: ["Optique de l’implant : double ligne horizontale très échogène", "Iris appuyé sur l’implant, sans espace", "Selon la source : autre patient atteint de syndrome UGH"] },
    { id: "OPH-346", caption: "Hyphéma traumatique (selon la source)", look: "Regarde le bas de la chambre antérieure.", reveal: ["Niveau de sang rouge au bas de la chambre antérieure", "Hauteur bien inférieure au tiers de la chambre : grade I", "Hémorragie sous-conjonctivale en bas"] },
    { id: "OPH-314", caption: "Fermeture de l’angle après expansion d’un gaz intraoculaire (selon la source)", look: "Évalue la rougeur de l’œil et le contenu de la chambre antérieure.", reveal: ["Œil très injecté", "Niveau de sang au bas de la chambre antérieure", "Chambre antérieure peu profonde dans le faisceau de la fente", "Selon la source : fermeture de l’angle après l’expansion d’un gaz intraoculaire"] }
  ]
});

G.OPH.glossary = G.OPH.glossary || {};
Object.assign(G.OPH.glossary, {
  "mégalopapille": "Disque optique congénitalement très grand, avec grand creux physiologique et anneau normal ; imite le glaucome mais peut aussi coexister avec un vrai glaucome.",
  "papille inclinée": "Disque qui entre obliquement dans le globe, fréquent chez le myope : aspect ovale, croissant d’atrophie, OCT et champ parfois faussement anormaux.",
  "hypoplasie du nerf optique": "Nerf optique congénitalement petit : petit disque à double anneau ; bilatérale, elle impose une IRM et un bilan hypophysaire (dysplasie septo-optique).",
  "atrophie optique dominante": "Maladie héréditaire autosomique dominante (gène OPA1) : baisse visuelle bilatérale dès l’enfance, déficit bleu-jaune, pâleur temporale des papilles.",
  "atrophie en bande": "Pâleur horizontale, nasale et temporale, de la papille, due à une lésion du chiasma ou de la bandelette optique ; dite aussi en nœud papillon (bow-tie).",
  "drusen papillaires": "Dépôts calcifiés dans la tête du nerf optique : papille bosselée, pseudo-œdème, défauts de champ lents ; visibles à l’échographie B et en autofluorescence.",
  "vaisseaux optociliaires": "Collatérales entre veines rétiniennes et choroïdiennes à la papille, signe d’une gêne chronique au retour veineux (méningiome de la gaine, ancienne occlusion veineuse).",
  "vaisseau circumlinéaire": "Petit vaisseau qui longe le bord de l’excavation ; quand l’anneau s’amincit, il reste « dénudé », séparé du bord : signe glaucomateux.",
  "baïonnette": "Coude brusque d’un vaisseau qui plonge au bord d’une excavation profonde puis court au fond du creux.",
  "DPAR": "Déficit pupillaire afférent relatif : les pupilles se dilatent quand la lumière passe du bon œil à l’œil atteint ; signe d’atteinte du nerf optique.",
  "NOIA": "Neuropathie optique ischémique antérieure : infarctus de la tête du nerf optique ; la forme artéritique (artérite à cellules géantes) est une urgence.",
  "glaucome phacomorphique": "Fermeture secondaire de l’angle par un cristallin gonflé qui pousse l’iris vers l’avant ; on baisse la PIO puis on retire le cristallin.",
  "glaucome phacolytique": "Glaucome à angle ouvert : les protéines d’une cataracte mature ou hypermûre fuient par la capsule intacte et les macrophages bouchent le trabéculum.",
  "syndrome UGH": "Uvéite-glaucome-hyphéma : un implant intraoculaire frotte l’iris ou le corps ciliaire, d’où inflammation, saignements répétés et pics de PIO.",
  "récession de l’angle": "Déchirure du corps ciliaire après un trauma contusif : bande ciliaire élargie à la gonioscopie ; risque de glaucome des années plus tard.",
  "hyphéma": "Sang dans la chambre antérieure, souvent après un trauma ; gradé selon la hauteur du niveau, du microhyphéma au grade IV (total).",
  "imbibition hématique": "Coloration brun-rouge de la cornée par le sang d’un hyphéma, favorisée par une PIO élevée et un endothélium fragile ; s’éclaircit très lentement.",
  "trait drépanocytaire": "Porteur d’un gène de l’hémoglobine S ; dans un hyphéma, les globules se déforment, bouchent le trabéculum et la PIO monte plus facilement.",
  "glaucome aphaque": "Glaucome après chirurgie de cataracte congénitale, souvent à angle ouvert, qui peut apparaître des années plus tard : PIO à surveiller à vie.",
  "cellules fantômes": "Globules rouges dégénérés, rigides et kaki, venus d’une hémorragie du vitré, qui bouchent le trabéculum (glaucome à cellules fantômes, ghost cell).",
  "uvéite phaco-antigénique": "Inflammation granulomateuse contre les protéines du cristallin après rupture de la capsule (trauma, chirurgie).",
  "C3F8": "Perfluoropropane : gaz injecté dans le vitré, qui reste plusieurs semaines et se dilate en altitude ou sous protoxyde d’azote.",
  "SF6": "Hexafluorure de soufre : gaz injecté dans le vitré, résorbé plus vite que le C3F8 ; mêmes interdits (avion, protoxyde d’azote).",
  "cyclodialyse": "Décollement du corps ciliaire de l’éperon scléral après un trauma : l’aqueuse s’échappe sous la choroïde, d’où une PIO basse qui peut remonter brutalement quand la fente se ferme.",
  "transillumination": "Lumière renvoyée par le fond d’œil qui traverse l’iris là où son épithélium pigmenté manque : les défauts apparaissent comme des zones claires."
});
