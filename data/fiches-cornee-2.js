var G = (typeof window !== 'undefined') ? window : globalThis;
G.OPH = G.OPH || {};
G.OPH.fiches = (G.OPH.fiches || []).concat([

  // 6. Dystrophie endothéliale de Fuchs et œdème cornéen
  {
  id: "c-fuchs",
  module: "B",
  order: 6,
  title: "Dystrophie endothéliale de Fuchs et œdème cornéen",
  en: "Fuchs endothelial corneal dystrophy and corneal edema",
  tags: ["frequent", "highyield"],
  oneLiner: "Femme de 50 ans et plus, vision floue au réveil qui s’éclaircit en journée : l’endothélium pompe mal, la cornée gonfle.",
  definition: "Maladie héréditaire où l’endothélium, la pompe de la cornée, disparaît. La cornée gonfle, d’abord le matin.",
  anatomy: {
    text: "L’endothélium est une seule couche de cellules hexagonales qui ne se divisent pas : ≈ 3000 cellules/mm² chez le jeune adulte, ≈ 2500 vers 60–70 ans. Ses pompes (Na⁺/K⁺-ATPase) sortent l’eau du stroma : cette déturgescence garde la cornée transparente, à ≈ 540 µm. Il repose sur la membrane de Descemet, qu’il fabrique ; la cornée décompense en général sous 400–500 cellules/mm².",
    figure: {
      type: "cornea",
      highlight: ["descemet", "endothelium"]
    }
  },
  causal: {
    title: "Quand la pompe endothéliale flanche",
    steps: [
      { label: "Prédisposition génétique", detail: "Souvent une expansion de répétitions d’ADN (CTG18.1) dans le gène TCF4 ; transmission dominante à pénétrance incomplète.", kind: "cause" },
      { label: "Guttae, cellules qui meurent", detail: "Les cellules malades déposent du collagène anormal sur la Descemet (les guttae, d’abord au centre), puis meurent.", kind: "lesion" },
      { label: "Pompe insuffisante", detail: "Les cellules restantes s’étirent pour boucher les trous, mais l’eau entre plus vite qu’elle ne sort.", kind: "mecanisme" },
      { label: "Œdème du stroma, puis de l’épithélium", detail: "Cornée épaissie et trouble, plis de la Descemet, puis microkystes (minuscules poches d’eau) et bulles : halos, douleur si une bulle crève.", kind: "signe" },
      { label: "Cicatrice sous l’épithélium", detail: "Après des années, une fibrose (tissu cicatriciel) s’installe : la vision ne revient plus entièrement, même après greffe.", kind: "complication" }
    ],
    levers: [
      { at: 1, label: "DSO (recherche)", detail: "Retirer seulement la Descemet centrale à guttae, sans greffe (Descemet stripping only), ± goutte d’inhibiteur de la Rho kinase (ROCK) : les cellules saines de la périphérie migrent. Expérimental." },
      { at: 2, label: "Greffe endothéliale", detail: "La DMEK (Descemet et endothélium seuls) ou la DSAEK (avec une fine couche de stroma) remplace la pompe défaillante." },
      { at: 3, label: "Baisser la PIO", detail: "Une pression intraoculaire (PIO) élevée pousse l’eau dans la cornée ; on la baisse sans IAC topiques (inhibiteurs de l’anhydrase carbonique, comme le dorzolamide), qui freinent la pompe." },
      { at: 3, label: "NaCl 5 %, séchoir", detail: "Le salin hypertonique et l’air tiède au réveil tirent l’eau hors de l’épithélium : soulagement, sans réparer la pompe." }
    ]
  },
  risk: [
    "Sexe féminin ; âge : guttae dès 40–50 ans, symptômes surtout après 50 ans",
    "Histoire familiale (gène TCF4)",
    "Décompensation favorisée par : chirurgie de cataracte, pression intraoculaire (PIO) élevée, uvéite (inflammation intraoculaire), IAC topique (inhibiteur de l’anhydrase carbonique)"
  ],
  presentation: [
    "Longtemps sans symptôme : guttae vues à un examen de routine",
    "Vision floue au réveil qui s’éclaircit en quelques heures",
    "Éblouissement (glare), halos, contrastes ↓",
    "Avancé : flou constant, douleur si une bulle crève"
  ],
  exam: {
    signs: [
      { sign: "Guttae centrales : « métal martelé » (beaten metal) en réflexion spéculaire (faisceau incliné qui fait briller l’endothélium), points sombres en rétroillumination (éclairage par le reflet du fond d’œil)", why: "Signe clé ; des guttae seulement périphériques (corps de Hassall-Henle) relèvent du vieillissement normal." },
      { sign: "Plis de la Descemet, cornée épaissie", why: "Œdème du stroma : la pompe ne suffit plus." },
      { sign: "Microkystes, bulles épithéliales", why: "Œdème épithélial : vision du matin, halos, douleur." },
      { sign: "Cataracte associée", why: "Sa chirurgie peut décompenser la cornée : planifier ensemble." }
    ],
    tests: [
      { test: "Microscopie spéculaire (photo agrandie de l’endothélium)", when: "Diagnostic, suivi, avant chirurgie", read: "Densité (ECD) ↓, polymégathisme (tailles inégales), pléomorphisme (moins d’hexagones), guttae = zones noires." },
      { test: "Pachymétrie (épaisseur cornéenne)", when: "Départ et suivi", read: "Hausse dans le temps, ou plus épaisse le matin = œdème ; une valeur isolée est peu fiable." },
      { test: "Tomographie Scheimpflug (cartes d’épaisseur et d’élévation)", when: "Avant une cataracte si guttae", read: "Œdème infraclinique (invisible à la lampe) : isopaques (anneaux d’égale épaisseur) irréguliers, point le plus mince décentré, dépression focale de la face postérieure → risque de décompensation." }
    ]
  },
  ddx: [
    { dx: "Kératopathie bulleuse pseudophaque (pseudophakic bullous keratopathy : œdème après cataracte)", clue: "Chirurgie antérieure, un seul œil, pas de guttae à l’œil adelphe (l’autre œil)." },
    { dx: "Endothélite herpétique, uvéite", clue: "Précipités rétrocornéens (KP : amas de cellules inflammatoires sur l’endothélium), œdème localisé, unilatéral, réversible." },
    { dx: "Crise de fermeture de l’angle", clue: "Œil rouge et douloureux, PIO très élevée ; l’œdème régresse quand elle baisse." },
    { dx: "Syndrome irido-cornéo-endothélial (ICE)", clue: "Unilatéral, endothélium en « argent martelé », pupille déformée, glaucome." }
  ],
  redFlags: [
    "Œdème unilatéral ou rapide sans guttae : endothélite, PIO ou cause post-opératoire",
    "Bulle crevée avec infiltrat blanc : kératite infectieuse",
    "Guttae et cataracte prévue : chercher l’œdème infraclinique avant d’opérer"
  ],
  cat: {
    vignette: "Femme de 68 ans : vision floue le matin, meilleure l’après-midi, halos. Guttae centrales aux deux yeux, cornée épaissie.",
    algo: [
      { q: "Guttae centrales aux deux yeux ?", yes: "Fuchs : spéculaire, pachymétrie, Scheimpflug.", no: "Autre œdème : chirurgie, PIO, endothélite, ICE.", yesGo: 1 },
      { q: "Cataracte significative ?", yes: "", no: "", yesGo: 2, noGo: 3 },
      { q: "Œdème, même infraclinique ?", yes: "Phaco + DMEK en une chirurgie.", no: "Phaco seule, en protégeant l’endothélium." },
      { q: "Gêne malgré NaCl 5 % et séchoir ?", yes: "", no: "Traitement médical et suivi.", yesGo: 4 },
      { q: "Cicatrice stromale ou œil complexe ?", yes: "PK si cicatrice ; DSAEK si œil complexe.", no: "DMEK." }
    ],
    phases: [
      {
        phase: "observation",
        items: ["Guttae sans œdème : suivi annuel (spéculaire, pachymétrie)"]
      },
      {
        phase: "medical",
        items: [
          "NaCl 5 % en gouttes 4 fois par jour, onguent au coucher",
          "Séchoir à cheveux à bout de bras, air tiède, quelques minutes au réveil",
          "PIO élevée : la baisser, sans IAC topique",
          "Bulles douloureuses : lentille souple de pansement"
        ]
      },
      {
        phase: "chirurgie",
        items: [
          "DMEK ; DSAEK si œil complexe ; PK si cicatrice",
          "Triple procédure : viser une légère myopie (≈ −0,5 à −1,0 D), car la DMEK induit un virage hypermétropique (hyperopic shift)",
          "Recherche : DSO ± inhibiteur ROCK"
        ]
      },
      {
        phase: "suivi",
        items: [
          "Après DMEK : couché sur le dos quelques jours (la bulle plaque le greffon), stéroïde prolongé, PIO ; greffon décollé : réinjection d’air (rebubbling)"
        ]
      }
    ],
    local: "Au Québec, les guttae sont souvent découvertes par l’optométriste, qui dirige si œdème, symptômes ou cataracte. Netarsudil (inhibiteur ROCK, approuvé aux É.-U.) : usage expérimental dans le Fuchs."
  },
  treatments: [
    { name: "NaCl 5 % et séchoir", dose: "NaCl 5 % goutte 4×/j ou onguent au coucher ; séchoir au réveil.", pitfall: "Effet modeste, surtout sur l’épithélium.", how: "Goutte ou onguent salé (hypertonique) qui attire par osmose l’eau de l’épithélium vers les larmes ; l’air tiède du séchoir accélère l’évaporation au réveil.", why: "Œdème épithélial léger, attente de greffe.", pros: "Simple, peu coûteux.", cons: "Agit peu sur le stroma ; effet modeste.", cx: "Brûlure, vision brouillée (onguent)." },
    { name: "DMEK (Descemet membrane endothelial keratoplasty)", dose: "Greffon Descemet-endothélium plaqué par une bulle d’air.", pitfall: "Couché sur le dos les premiers jours.", how: "Chirurgie : on retire la Descemet malade (descemetorhexis), on injecte un rouleau de Descemet et d’endothélium de donneur (≈ 15 µm), puis on le déroule et le plaque avec une bulle d’air ou de gaz.", why: "Fuchs symptomatique : premier choix.", pros: "Meilleure vision, récupération rapide, rejet le plus rare.", cons: "Technique exigeante.", cx: "Décollement, échec primaire, rejet, PIO ↑ (bulle, stéroïdes), cataracte." },
    { name: "DSAEK (Descemet stripping automated endothelial keratoplasty)", dose: "Greffon endothélial plus épais, plus facile à manipuler.", pitfall: "Vision un peu moins fine, virage hypermétropique.", how: "Même principe, avec une fine couche de stroma postérieur taillée par une lame motorisée : greffon plus épais, plus facile à manipuler.", why: "Œil complexe.", pros: "Plus stable dans l’œil complexe.", cons: "Vision un peu moins fine, virage hypermétropique plus marqué.", cx: "Décollement, rejet plus fréquent qu’après DMEK." },
    { name: "Kératoplastie transfixiante (PK, penetrating keratoplasty)", dose: "Greffe de pleine épaisseur, suturée.", pitfall: "Plaie fragile à vie, astigmatisme.", how: "On remplace un disque de cornée de pleine épaisseur, cousu par des points de suture.", why: "Cicatrice stromale, échecs de greffe endothéliale.", pros: "Remplace toutes les couches.", cons: "Récupération lente, astigmatisme, plaie fragile à vie.", cx: "Rejet (risque le plus élevé), sutures lâches, infection, glaucome." }
  ],
  treatment: {
    first: [
      "**Externe / 1re ligne** : NaCl 5 % goutte 4×/j ou onguent au coucher ; séchoir au réveil.",
      "**Ophtalmologiste** : greffe endothéliale (DMEK), parfois avec la cataracte."
    ],
    refer: ["Cette semaine si œdème qui gêne la vision — greffe à discuter.", "Suivi régulier si guttae sans symptômes, et avant toute cataracte."],
    pitfall: ["Dorzolamide ou brinzolamide en gouttes : freinent la pompe endothéliale."]
  },
  pearls: [
    { q: "Pourquoi la vision est-elle pire le matin ?", a: "Paupières fermées, l’eau ne s’évapore plus : la cornée se gorge d’eau la nuit. Le jour, l’évaporation la déshydrate et la vision s’éclaircit." },
    { q: "Guttae et cataracte : que fais-tu ?", a: "Spéculaire et Scheimpflug avant. Œdème matinal ou infraclinique : triple procédure. Sinon, phaco protectrice (viscoélastique dispersif, gel qui tapisse l’endothélium ; peu d’ultrasons) et avertir du risque de décompensation." },
    { q: "Pourquoi la DMEK plutôt que la DSAEK ?", a: "Elle remplace exactement le tissu malade : meilleure acuité, récupération plus rapide et **moins de rejet** (PK > DSAEK > DMEK). La DSAEK reste utile dans l’œil complexe." }
  ],
  mnemonic: { title: "Quatre stades", text: "Guttae → œdème du stroma → œdème épithélial → cicatrice : plus on avance, moins la greffe rend la vision." },
  compare: {
    title: "Cornée normale vs Fuchs décompensé",
    normal: {
      figure: {
        type: "cornea",
        highlight: ["endothelium"]
      },
      caption: "Endothélium en monocouche régulière, stroma mince et clair."
    },
    patho: {
      figure: {
        type: "cornea",
        highlight: ["descemet", "endothelium"],
        edema: "both",
        guttae: true
      },
      caption: "Guttae, cellules rares et étirées, œdème du stroma et de l’épithélium (schéma).",
      reveal: [
        "Guttae : excroissances de la Descemet vers la chambre antérieure",
        "Cellules endothéliales moins nombreuses et plus grandes (polymégathisme)",
        "Stroma épaissi, plis de la Descemet",
        "Microkystes et bulles dans l’épithélium",
        "Correspondance clinique : vision floue le matin, éblouissement"
      ]
    }
  },
  sources: [
    "AAO PPP Corneal Edema and Opacification (2023)",
    "IC3D Classification of Corneal Dystrophies, 2e éd. (Weiss JS et al., Cornea 2015)",
    "Sun SY, Wacker K, Baratz KH, Patel SV : œdème infraclinique au Scheimpflug (Ophthalmology 2019)",
    "Melles GR et al., Descemet membrane endothelial keratoplasty (Cornea 2006)"
  ]
},

  // 7. Érosion récidivante, abrasion et dystrophie de la membrane basale
  {
  id: "c-erosion",
  module: "B",
  order: 7,
  title: "Érosion récidivante, abrasion et dystrophie de la membrane basale",
  en: "Recurrent corneal erosion, corneal abrasion and epithelial basement membrane dystrophy",
  tags: ["frequent", "highyield", "piege"],
  oneLiner: "Douleur vive au réveil, en ouvrant les yeux, des semaines après une égratignure d’ongle : l’épithélium mal ancré s’arrache.",
  definition: "Abrasion : épithélium égratigné. Érosion récidivante : épithélium mal ancré qui s’arrache au réveil.",
  anatomy: {
    text: "L’épithélium est riveté à sa membrane basale par des hémidesmosomes (rivets moléculaires), eux-mêmes amarrés au stroma à travers la couche de Bowman. Après une abrasion, il recouvre la plaie en 1 à 3 jours, mais ces ancrages mettent des semaines à des mois à se reformer. La cornée, tissu le plus innervé du corps, fait très mal quand elle perd son épithélium.",
    figure: {
      type: "cornea",
      highlight: ["epithelium", "bowman"]
    }
  },
  causal: {
    title: "De l’ancrage fragile à l’arrachement au réveil",
    steps: [
      { label: "Ancrage défaillant", detail: "Abrasion tranchante (ongle, papier, branche) qui arrache la membrane basale, ou EBMD qui la fabrique mal.", kind: "cause" },
      { label: "Ancrages immatures", detail: "Les cellules repoussent posées plutôt qu’accrochées ; des enzymes (métalloprotéinases, MMP) dissolvent les nouveaux ancrages.", kind: "mecanisme" },
      { label: "Collage nocturne à la paupière", detail: "La nuit, l’épithélium adhère à la paupière ; à l’ouverture brusque des yeux, il est arraché.", kind: "mecanisme" },
      { label: "Érosion épithéliale", detail: "Lambeau soulevé ou détaché, souvent dans la moitié inférieure : douleur vive, larmoiement, photophobie.", kind: "lesion" },
      { label: "Cycle qui se répète", detail: "La plaie se referme vite, sans ancrage solide : les crises reviennent, et chacune ouvre la porte à l’infection.", kind: "complication" }
    ],
    levers: [
      { at: 2, label: "Onguent au coucher", detail: "Un onguent (NaCl 5 % ou lubrifiant) empêche le collage nocturne le temps que les ancrages se reforment (3–6 mois)." },
      { at: 1, label: "Doxycycline ± stéroïde", detail: "La doxycycline orale inhibe les MMP qui dissolvent les ancrages ; un stéroïde topique court calme l’inflammation." },
      { at: 0, label: "Polissage, ponctions, PTK", detail: "Enlever la membrane basale anormale (polissage ; PTK : laser qui vaporise la surface) ou créer des microcicatrices d’ancrage (ponctions)." },
      { at: 3, label: "Lentille de pansement", detail: "Lentille souple portée en continu : bouclier entre la paupière et l’épithélium pendant la guérison." }
    ]
  },
  risk: [
    "Égratignure antérieure par ongle (souvent celui d’un bébé), papier, carton, branche",
    "EBMD : dystrophie cornéenne la plus fréquente, surtout après 40 ans",
    "Diabète, sécheresse, dysfonction meibomienne, chirurgie cornéenne antérieure"
  ],
  presentation: [
    "Douleur vive, larmoiement, photophobie au réveil, en ouvrant ou en frottant les yeux",
    "Crise de quelques minutes à quelques jours ; œil presque normal entre les crises",
    "Abrasion : sensation de corps étranger, douleur soulagée en clinique par l’anesthésique",
    "EBMD : souvent sans symptôme ; sinon vision fluctuante (surface irrégulière)"
  ],
  exam: {
    signs: [
      { sign: "Lignes en carte (map), points gris (dots : microkystes de Cogan), lignes en empreinte digitale (fingerprint)", why: "Signent l’EBMD ; mieux vues en rétroillumination (éclairage par le reflet du fond d’œil)." },
      { sign: "Coloration négative à la fluorescéine (negative staining)", why: "Taches sombres là où la surface est surélevée : EBMD, même sans érosion." },
      { sign: "Stries verticales qui prennent la fluorescéine en haut", why: "Corps étranger sous la paupière supérieure : l’éversion (retourner la paupière) est obligatoire." },
      { sign: "Ni infiltrat ni réaction de chambre antérieure", why: "Un infiltrat (amas blanc de cellules dans le stroma) ou un hypopyon (pus dans la chambre antérieure) signe une infection." }
    ],
    tests: [
      { test: "Fluorescéine au bleu cobalt + éversion de la paupière supérieure", when: "Toute douleur aiguë ou récidivante", read: "Défaut net = abrasion ; coloration négative = EBMD ; stries verticales = corps étranger sous la paupière." },
      { test: "Topographie (carte de courbure) répétée", when: "EBMD avant cataracte ou chirurgie réfractive", read: "Astigmatisme irrégulier, courbures (K) instables : traiter la surface, puis remesurer." }
    ]
  },
  ddx: [
    { dx: "Kératite herpétique (HSV)", clue: "Ulcère ramifié (dendrite) à bulbes terminaux, sensibilité cornéenne ↓." },
    { dx: "Kératite infectieuse sur lentilles", clue: "Infiltrat, réaction de chambre antérieure ; douleur hors de proportion : penser à Acanthamoeba (amibe)." },
    { dx: "Corps étranger cornéen", clue: "Particule visible, anneau de rouille ; meulage." },
    { dx: "Kératite d’exposition", clue: "Paupières qui ferment mal la nuit (lagophtalmie), points inférieurs, pas d’arrachement brutal." }
  ],
  redFlags: [
    "Infiltrat, hypopyon ou douleur croissante après 24–48 h : kératite infectieuse",
    "Meulage ou projection rapide : exclure une perforation (TDM, pas d’IRM)",
    "Lentilles ou végétal : risque de Pseudomonas ou de champignon"
  ],
  cat: {
    vignette: "Homme de 40 ans réveillé par une douleur vive à l’œil droit, 3e fois ce mois-ci. Égratigné par un ongle il y a 6 mois.",
    algo: [
      { q: "Infiltrat, hypopyon ou réaction de chambre ?", yes: "Kératite infectieuse : ophtalmologie le jour même.", no: "Abrasion : éverser, retirer tout corps étranger.", noGo: 1 },
      { q: "Projection rapide (meulage, marteau) ?", yes: "TDM pour exclure un corps intraoculaire, pas d’IRM.", no: "", yesGo: 2, noGo: 2 },
      { q: "Porteur de lentilles ?", yes: "Fluoroquinolone, pas de pansement, revoir à 24 h.", no: "Onguent d’érythromycine jusqu’à guérison.", yesGo: 3, noGo: 3 },
      { q: "Crises répétées au réveil, des semaines après ?", yes: "Érosion récidivante : NaCl 5 % au coucher 3–6 mois.", no: "Abrasion simple : guérit en 1–3 jours.", yesGo: 4 },
      { q: "Récidives malgré 2–3 mois de prévention ?", yes: "Référer : doxycycline, polissage, ponctions ou PTK.", no: "Poursuivre, puis sevrer lentement." }
    ],
    phases: [
      {
        phase: "medical",
        items: [
          "Antibiotique topique ; cycloplégique (cyclopentolate, qui relâche le muscle ciliaire) si spasme douloureux",
          "Analgésie orale ; **jamais d’anesthésique topique à la maison**",
          "Lentille de pansement si douleur forte (pas si infection)",
          "Rebelle : doxycycline orale ± stéroïde doux"
        ]
      },
      {
        phase: "chirurgie",
        items: [
          "Débridement ± polissage de la Bowman à la fraise diamantée (diamond burr)",
          "Ponctions stromales antérieures (anterior stromal puncture), hors de l’axe visuel"
        ]
      },
      {
        phase: "suivi",
        items: ["Revoir à 24–48 h si abrasion grande, centrale ou chez un porteur de lentilles"]
      },
      {
        phase: "escalade",
        items: ["PTK (photokératectomie thérapeutique au laser excimer) si atteinte centrale ou échec"]
      }
    ],
    local: "Au Québec, beaucoup d’abrasions sont vues à l’urgence, en première ligne ou par l’optométriste ; diriger si infiltrat, non-guérison ou crises répétées. Blessure au travail : formulaires CNESST."
  },
  treatments: [
    { name: "Abrasion : antibiotique, sans pansement", dose: "Érythromycine onguent 4×/j jusqu’à guérison.", pitfall: "Lentilles : fluoroquinolone, jamais de pansement.", how: "Onguent d’érythromycine ou goutte antibiotique 4 fois par jour jusqu’à guérison ; pas de pansement occlusif, qui n’aide pas à guérir.", why: "Prévenir l’infection pendant la repousse.", pros: "Guérison en 1–3 jours si petite.", cons: "Lentilles : fluoroquinolone, jamais de pansement.", cx: "Infection ; érosion récidivante plus tard." },
    { name: "Onguent NaCl 5 % au coucher", dose: "Onguent NaCl 5 % au coucher, 3–6 mois.", pitfall: "Récidive si arrêt trop tôt.", how: "Onguent hypertonique le soir pendant 3–6 mois : il lubrifie pour que l’épithélium ne colle pas à la paupière et en retire l’eau pour qu’il adhère mieux.", why: "Érosion récidivante ; abrasion à risque (ongle).", pros: "Peu coûteux, souvent suffisant.", cons: "Récidive si arrêt trop tôt.", cx: "Brûlure, vision brouillée au réveil." },
    { name: "Doxycycline orale ± stéroïde", dose: "Doxycycline 50 mg 2×/j × 2 mois ± stéroïde doux.", pitfall: "Pas avant 8 ans ni en grossesse.", how: "Doxycycline 50 mg BID pendant 2 mois, utilisée ici pour bloquer la MMP-9 qui dissout les ancrages, ± stéroïde doux 2–3 semaines.", why: "Érosions rebelles.", pros: "Oral, peu coûteux.", cons: "Effet en quelques semaines.", cx: "Photosensibilité, œsophagite ; pas en grossesse ni avant 8 ans." },
    { name: "Polissage à la fraise diamantée", dose: "Fraise diamantée en clinique, sous anesthésie topique.", pitfall: "EBMD avant cataracte : polir, puis refaire la biométrie.", how: "En clinique, sous anesthésie topique : on retire l’épithélium lâche et on polit la Bowman ; le nouvel épithélium s’ancre sur une surface propre.", why: "Érosions rebelles ; EBMD qui trouble la vision ou fausse la biométrie (mesures pour choisir la lentille de cataracte).", pros: "Simple, possible dans l’axe visuel.", cons: "Douleur 2–3 jours.", cx: "Infection, léger voile cicatriciel (haze)." },
    { name: "Ponctions stromales ou PTK", dose: "Ponctions stromales hors de l’axe ; PTK si atteinte centrale.", pitfall: "Laisse des opacités ; PTK coûteuse.", how: "Ponctions : piqûres superficielles à l’aiguille, dont les microcicatrices ancrent l’épithélium. PTK : laser excimer qui vaporise quelques microns de surface.", why: "Ponctions : hors de l’axe ; PTK : atteinte centrale.", pros: "Ponctions rapides ; PTK régulière.", cons: "Opacités ; PTK coûteuse.", cx: "Haze, infection." }
  ],
  treatment: {
    first: [
      "**Externe / 1re ligne** : érythromycine onguent 4×/j ; lentilles : fluoroquinolone. Érosions : NaCl 5 % au coucher.",
      "**Ophtalmologiste** : polissage, ponctions stromales ou PTK si récidives."
    ],
    refer: ["Le jour même si infiltrat, hypopyon ou projection rapide — infection ou corps intraoculaire.", "Dans les 48 h si pas guéri — chercher une autre cause."],
    pitfall: ["Anesthésique topique à la maison : ulcère, perforation.", "Pansement occlusif chez un porteur de lentilles : Pseudomonas."],
    qc: ["Blessure au travail : formulaires CNESST."]
  },
  pearls: [
    { q: "Pourquoi l’érosion survient-elle au réveil ?", a: "La nuit, l’épithélium mal ancré colle à la paupière et s’arrache à l’ouverture brusque. D’où l’onguent au coucher et l’ouverture douce des yeux, après une goutte de lubrifiant." },
    { q: "Prescris-tu une goutte anesthésique ?", a: "**Jamais pour la maison** : l’abus bloque la guérison et peut causer ulcère et perforation. Analgésique oral, cycloplégique et lentille de pansement suffisent." },
    { q: "EBMD et cataracte : quel est le piège ?", a: "La surface irrégulière fausse la kératométrie : mauvaise puissance de lentille ou mauvaise correction torique (de l’astigmatisme). On polit d’abord, puis on refait la biométrie quand la cornée est stable." }
  ],
  mnemonic: { title: "Abrasion : ÉVERSE", text: "Éverser, noter la vision, exclure infiltrat et Seidel, pas d’anesthésique à la maison, pas de pansement sous lentilles." },
  compare: {
    title: "Fluorescéine : normale vs EBMD",
    normal: {
      figure: { type: "fluo", pattern: "normal" },
      caption: "Film uniforme, aucune zone sombre ni prise de colorant."
    },
    patho: {
      figure: { type: "fluo", pattern: "negative" },
      caption: "EBMD : coloration négative, lignes et points sombres là où la surface est surélevée.",
      reveal: [
        "Lignes sombres sinueuses : replis de membrane basale (carte, empreintes digitales)",
        "Points sombres : microkystes de Cogan",
        "Aucun défaut qui prend le colorant entre les crises",
        "Une abrasion donnerait au contraire une zone verte à bords nets"
      ]
    }
  },
  sources: [
    "Watson SL, Leung V, Interventions for recurrent corneal erosions (Cochrane Database Syst Rev 2018)",
    "Lim CHL, Turner A, Lim BX, Patching for corneal abrasion (Cochrane Database Syst Rev 2016)",
    "Dursun D et al., doxycycline et stéroïde pour érosions rebelles (Am J Ophthalmol 2001)",
    "IC3D Classification of Corneal Dystrophies, 2e éd. (Weiss JS et al., Cornea 2015)"
  ]
},

  // 8. Ptérygion et lésions de la surface (pinguécula, OSSN)
  {
  id: "c-pterygion",
  module: "B",
  order: 8,
  title: "Ptérygion et lésions de la surface (pinguécula, OSSN)",
  en: "Pterygium and ocular surface lesions (pinguecula, OSSN)",
  tags: ["frequent", "highyield", "piege"],
  oneLiner: "Aile rosée qui avance du nasal vers la cornée après des années de soleil ; atypique : penser à une néoplasie.",
  definition: "Repli de conjonctive en aile qui envahit la cornée, en nasal (UV). Exclure une néoplasie de surface.",
  anatomy: {
    text: "La conjonctive, muqueuse vascularisée qui recouvre la sclère, s’arrête au limbe, où vivent les cellules souches de l’épithélium cornéen. Le limbe fait barrière : il empêche la conjonctive et ses vaisseaux d’envahir la cornée, qui doit rester transparente. La cornée concentre la lumière venue du côté temporal sur le limbe nasal, d’où la localisation typique. La pinguécula est une bosse jaunâtre qui reste sur la conjonctive ; l’OSSN est un cancer de l’épithélium qui peut imiter un ptérygion.",
    figure: {
      type: "eye",
      highlight: ["conjonctive", "limbe", "cornee"]
    }
  },
  causal: {
    title: "Du soleil à l’aile fibrovasculaire",
    steps: [
      { label: "UV, vent, poussière", detail: "Travail extérieur, enfance sous un climat ensoleillé ; la lumière se concentre sur le limbe nasal.", kind: "cause" },
      { label: "Limbe lésé, barrière ouverte", detail: "Les UV abîment les cellules souches et activent des enzymes (métalloprotéinases) qui dissolvent la barrière limbique.", kind: "mecanisme" },
      { label: "Prolifération fibrovasculaire", detail: "Fibroblastes (cellules du tissu fibreux) et vaisseaux avancent sur la cornée en détruisant la couche de Bowman.", kind: "lesion" },
      { label: "Astigmatisme, irritation", detail: "La cornée s’aplatit à l’horizontale : astigmatisme direct (with-the-rule : méridien vertical plus cambré), souvent irrégulier ; rougeur, sable.", kind: "signe" },
      { label: "Axe visuel atteint, récidive", detail: "Vision ↓ si la pupille est couverte ; après exérèse simple, il repousse souvent, plus agressif.", kind: "complication" }
    ],
    levers: [
      { at: 0, label: "Protection UV", detail: "Lunettes de soleil enveloppantes et chapeau : moins de moteur à la maladie, moins de récidives." },
      { at: 3, label: "Larmes, stéroïde court", detail: "Lubrifient et calment un ptérygion enflammé, sans le faire régresser." },
      { at: 2, label: "Exérèse + autogreffe", detail: "On enlève le tissu et on couvre la sclère avec un greffon de conjonctive saine qui contient du limbe : la barrière est rétablie." },
      { at: 2, label: "Mitomycine C", detail: "Antimitotique (freine la division des cellules) appliqué pendant la chirurgie : moins de fibroblastes, moins de récidive." }
    ]
  },
  risk: [
    "Soleil cumulatif : travail extérieur, sports nautiques, ski",
    "Enfance près de l’équateur ou sous un climat ensoleillé ; vent, poussière",
    "OSSN : âge avancé, peau claire, immunosuppression (VIH, greffe d’organe), virus du papillome humain (VPH)"
  ],
  presentation: [
    "Masse triangulaire rosée au limbe nasal, parfois temporal ou des deux côtés",
    "Rougeur, sable, surtout en poussée inflammatoire",
    "Vision floue (astigmatisme, puis axe visuel atteint)",
    "Gêne esthétique ; rarement, vision double par restriction du mouvement de l’œil"
  ],
  exam: {
    signs: [
      { sign: "Tête sur la cornée, col au limbe, corps sur la sclère ; ligne de Stocker devant la tête", why: "La ligne de Stocker (dépôt de fer brun dans l’épithélium) signe une lésion lente et ancienne." },
      { sign: "Une sonde ne passe pas sous le col", why: "Vrai ptérygion ; si elle passe : pseudoptérygion (repli cicatriciel collé par sa tête seulement)." },
      { sign: "Aspect gélatineux, leucoplasique (plaque blanche) ou papillomateux (en chou-fleur), vaisseaux nourriciers (qui alimentent la lésion), siège atypique", why: "Évoque une OSSN : imagerie et biopsie avant toute chirurgie de routine." }
    ],
    tests: [
      { test: "Topographie et kératométrie (mesure de la courbure, K)", when: "Avant cataracte ou chirurgie réfractive", read: "Astigmatisme direct irrégulier : biométrie faussée ; enlever le ptérygion, remesurer une fois la cornée stable." },
      { test: "OCT de segment antérieur (AS-OCT : imagerie en coupe)", when: "Lésion suspecte", read: "OSSN : épithélium épaissi, hyperréflectif, transition abrupte ; ptérygion : épithélium mince sur un tissu épais." },
      { test: "Biopsie", when: "Lésion atypique ou pigmentée, immunosuppression", read: "Dysplasie, carcinome ou mélanome : guide le traitement." }
    ]
  },
  ddx: [
    { dx: "Pinguécula", clue: "Jaunâtre, ne franchit pas le limbe ; pingueculite si elle s’enflamme." },
    { dx: "Pseudoptérygion", clue: "Après brûlure, trauma ou PUK (ulcère cornéen périphérique inflammatoire) ; tout méridien ; la sonde passe sous le col." },
    { dx: "OSSN", clue: "Gélatineuse, leucoplasique ou papillomateuse, vaisseaux nourriciers ; patient âgé ou immunosupprimé." },
    { dx: "Mélanome conjonctival, mélanose primaire acquise (PAM : pigmentation plate acquise)", clue: "Pigment nouveau ou qui grossit, nodule : photo et biopsie." }
  ],
  redFlags: [
    "Lésion gélatineuse, leucoplasique, papillomateuse ou à vaisseaux nourriciers : OSSN jusqu’à preuve du contraire",
    "Pigment nouveau ou qui grossit : mélanome possible",
    "Siège atypique, patient jeune immunosupprimé, récidive rapide"
  ],
  cat: {
    vignette: "Couvreur de 52 ans, œil droit irrité. Membrane rose triangulaire nasale qui empiète de 3 mm sur la cornée ; astigmatisme récent.",
    algo: [
      { q: "Lésion qui franchit le limbe sur la cornée ?", yes: "", no: "Confinée à la conjonctive : pinguécula ; protection UV.", yesGo: 1 },
      { q: "Gélatineux, leucoplasie, vaisseaux nourriciers ou pigment ?", yes: "OSSN ou mélanome possible : biopsie, oncologie oculaire.", no: "Ptérygion : mesurer l’envahissement cornéen.", noGo: 2 },
      { q: "Axe menacé, astigmatisme, gêne ou cataracte prévue ?", yes: "Exérèse + autogreffe conjonctivale.", no: "Lubrifiants, protection UV, photos au suivi.", yesGo: 3 },
      { q: "Récidive, ou lésion charnue chez un jeune ?", yes: "Ajouter mitomycine C ou membrane amniotique.", no: "Autogreffe seule." }
    ],
    phases: [
      {
        phase: "observation",
        items: ["Photo et mesure de l’envahissement (mm) à chaque visite"]
      },
      {
        phase: "medical",
        items: [
          "Lunettes enveloppantes, chapeau ; larmes sans agent de conservation",
          "Poussée : stéroïde doux (fluorométholone) quelques jours, pression intraoculaire (PIO) surveillée",
          "OSSN : chimiothérapie en gouttes (interféron alfa-2b, 5-fluorouracile, mitomycine C)"
        ]
      },
      {
        phase: "chirurgie",
        items: [
          "Exérèse + autogreffe conjonctivale (conjunctival autograft), colle de fibrine (fibrin glue) ou sutures ; ± mitomycine C ou membrane amniotique",
          "OSSN : exérèse « sans toucher » (no-touch : sans manipuler la tumeur) avec marges saines + cryothérapie des bords"
        ]
      },
      {
        phase: "suivi",
        items: ["Stéroïde quelques semaines après l’exérèse, PIO ; récidive surtout la première année ; OSSN : suivi prolongé"]
      }
    ],
    local: "Au Québec, le ptérygion est moins fréquent qu’en zone tropicale ; on le voit surtout chez les travailleurs extérieurs et les patients qui ont grandi sous un climat ensoleillé. Interféron et 5-fluorouracile topiques : préparations magistrales de pharmacie d’hôpital."
  },
  treatments: [
    { name: "Traitement conservateur", dose: "Lunettes anti-UV, larmes ; stéroïde doux quelques jours si poussée.", pitfall: "Ne fait pas régresser la lésion.", how: "Protection UV, larmes artificielles et, en poussée, stéroïde doux quelques jours : on protège et on calme la surface.", why: "Petit ptérygion, pinguécula, poussée inflammatoire.", pros: "Sans chirurgie.", cons: "Ne fait pas régresser la lésion.", cx: "Stéroïde : PIO ↑." },
    { name: "Exérèse + autogreffe conjonctivale", dose: "Exérèse + autogreffe conjonctivale, collée ou suturée.", pitfall: "Sclère nue seule : récidive bien plus fréquente.", how: "Chirurgie : on dissèque la tête, on enlève le tissu fibrovasculaire, puis on couvre la sclère nue avec un greffon mince de conjonctive prélevé sous la paupière supérieure, collé ou suturé.", why: "Axe menacé, astigmatisme, irritation, restriction, avant cataracte, esthétique.", pros: "Récidive bien plus faible qu’avec la sclère nue (bare sclera : exérèse sans couverture) ; colle : chirurgie plus courte, moins d’inconfort.", cons: "Plus longue ; site donneur.", cx: "Récidive, granulome, dellen (creux cornéen par mauvais mouillage)." },
    { name: "Mitomycine C ou membrane amniotique", dose: "Mitomycine C peropératoire ou membrane amniotique.", pitfall: "Mitomycine : toxique si dose excessive.", how: "Mitomycine C appliquée quelques minutes sur la sclère avec une éponge ; membrane amniotique (couche interne du placenta) posée sur la zone, anti-inflammatoire.", why: "Récidive, grande lésion, conjonctive à épargner pour une future chirurgie de glaucome.", pros: "Moins de récidive.", cons: "Mitomycine : toxique si dose excessive.", cx: "Fonte de la sclère, retard de cicatrisation." },
    { name: "Traitement de l’OSSN", dose: "Chimiothérapie topique en cures, ou exérèse « sans toucher » + cryothérapie.", qc: "Interféron, 5-FU : préparations magistrales.", how: "Gouttes de chimiothérapie en cures, ou exérèse sans toucher avec marges saines et cryothérapie (congélation) des bords.", why: "OSSN confirmée ou très suspecte.", pros: "Gouttes : traitent toute la surface.", cons: "Suivi prolongé, récidives.", cx: "Toxicité de surface ; insuffisance limbique si exérèse étendue." }
  ],
  treatment: {
    first: [
      "**Externe / 1re ligne** : lunettes anti-UV, larmes ; fluorométholone quelques jours si poussée.",
      "**Ophtalmologiste** : exérèse avec autogreffe conjonctivale ; biopsie si lésion atypique."
    ],
    refer: [
      "Cette semaine si lésion gélatineuse, blanche, pigmentée ou qui grossit vite — cancer possible.",
      "Suivi régulier sinon, plus tôt si l’axe visuel est menacé."
    ],
    pitfall: ["Exérèse à sclère nue sans greffe : récidive fréquente."]
  },
  pearls: [
    { q: "Ptérygion ou pseudoptérygion ?", a: "Le pseudoptérygion suit une agression (brûlure, trauma, ulcère périphérique), siège dans tout méridien et n’adhère que par sa tête : la sonde passe sous le col. Le vrai, lié aux UV, est nasal et adhérent partout." },
    { q: "Ptérygion et cataracte : dans quel ordre ?", a: "Le ptérygion fausse la kératométrie (astigmatisme irrégulier) : mauvaise lentille, surtout torique (qui corrige l’astigmatisme). On l’enlève d’abord, puis on refait la biométrie sur une cornée stable." },
    { q: "Quand suspectes-tu une OSSN ?", a: "Patient âgé ou immunosupprimé, lésion gélatineuse, leucoplasique ou papillomateuse, vaisseaux nourriciers, siège atypique. AS-OCT ou biopsie avant l’exérèse ; toute pièce opératoire va en pathologie." }
  ],
  mnemonic: { title: "Tête, col, corps", text: "Tête sur la cornée, col au limbe, corps sur la sclère. Pinguécula : pas de tête." },
  compare: {
    title: "Topographie : normale vs ptérygion",
    normal: {
      figure: { type: "topo", pattern: "normal" },
      caption: "Courbure régulière, presque sphérique."
    },
    patho: {
      figure: { type: "topo", pattern: "wtr" },
      caption: "Astigmatisme direct induit (schéma) : méridien horizontal aplati.",
      reveal: [
        "Nœud papillon vertical : méridien vertical plus cambré",
        "En réalité, souvent asymétrique, avec aplatissement localisé devant la tête",
        "Kératométrie faussée : biométrie à refaire après l’exérèse",
        "L’astigmatisme diminue souvent après la chirurgie"
      ]
    }
  },
  sources: [
    "Kaufman SC et al., Options and adjuvants in surgery for pterygium : a report by the AAO (Ophthalmology 2013)",
    "Clearfield E et al., Conjunctival autograft for pterygium (Cochrane Database Syst Rev 2016)",
    "Shields CL, Shields JA, Tumors of the conjunctiva and cornea (Surv Ophthalmol 2004)"
  ]
},

  // 9. Greffe de cornée : rejet et complications
  {
  id: "c-greffe",
  module: "B",
  order: 9,
  title: "Greffe de cornée : rejet et complications (PK, DSAEK, DMEK)",
  en: "Corneal transplantation: graft rejection and complications (PK, DSAEK, DMEK)",
  tags: ["urgent", "highyield", "piege"],
  oneLiner: "Greffé de cornée avec œil rouge, photophobie, vision ↓ ou douleur : rejet jusqu’à preuve du contraire, stéroïdes intensifs le jour même.",
  definition: "La greffe remplace la cornée malade, en entier ou une couche. Le rejet traité tôt est souvent réversible.",
  anatomy: {
    text: "La cornée a un privilège immunitaire (immune privilege) : ni vaisseaux sanguins ni lymphatiques, et une chambre antérieure qui atténue l’immunité ; les néovaisseaux (vaisseaux anormaux venus du limbe) le font perdre. Selon la couche malade, on greffe toute l’épaisseur (PK, penetrating keratoplasty), le stroma seulement en gardant l’endothélium du patient (DALK, deep anterior lamellar keratoplasty), ou l’endothélium et la Descemet, avec une fine couche de stroma (DSAEK) ou sans (DMEK). Le rejet reste une grande cause d’échec de greffe.",
    figure: {
      type: "cornea",
      highlight: ["stroma", "descemet", "endothelium"]
    }
  },
  causal: {
    title: "Du greffon étranger à l’échec",
    steps: [
      { label: "Antigènes du donneur", detail: "Antigènes HLA (marqueurs d’identité des cellules) étrangers : plus on greffe de tissu, plus il y a de cibles.", kind: "cause" },
      { label: "Privilège immunitaire perdu", detail: "Néovaisseaux, inflammation, sutures lâches, herpès ou arrêt des stéroïdes laissent entrer les lymphocytes.", kind: "mecanisme" },
      { label: "Attaque d’une couche du greffon", detail: "Épithélium, stroma ou endothélium ; le rejet endothélial est le plus grave.", kind: "lesion" },
      { label: "Symptômes RSVP", detail: "Rougeur, sensibilité à la lumière, vision ↓, douleur (pain) ; parfois aucun symptôme.", kind: "signe" },
      { label: "Mort endothéliale, échec", detail: "Les cellules détruites ne repoussent pas : œdème permanent, il faut regreffer.", kind: "complication" }
    ],
    levers: [
      { at: 0, label: "Greffer moins de tissu", detail: "DALK (pas d’endothélium étranger, donc pas de rejet endothélial) ou DMEK (rejet le plus rare) quand la maladie le permet." },
      { at: 1, label: "Prévention", detail: "Stéroïde topique en sevrage lent puis d’entretien, antiviral oral si herpès, retrait des sutures lâches." },
      { at: 2, label: "Stéroïdes intensifs", detail: "Prednisolone 1 % aux heures dès les premiers signes : stoppe l’attaque avant que l’endothélium soit détruit." },
      { at: 4, label: "Regreffe", detail: "Si l’œdème persiste : nouvelle greffe, au risque de rejet plus élevé." }
    ]
  },
  risk: [
    "Néovaisseaux cornéens profonds, sur plusieurs quadrants",
    "Rejet ou échec antérieur ; greffon large ou excentré",
    "Inflammation : uvéite, herpès (HSV), brûlure chimique ; jeune âge",
    "Lentille de chambre antérieure, tube de glaucome, synéchies (adhérences iris-cornée)",
    "Sutures lâches ; arrêt trop rapide des stéroïdes"
  ],
  presentation: [
    "Surtout la première année, mais possible des années plus tard (PK)",
    "RSVP, ou découverte sans symptôme à un examen de routine",
    "Déclencheurs : arrêt des stéroïdes, suture lâche, infection, chirurgie"
  ],
  exam: {
    signs: [
      { sign: "Ligne de rejet épithéliale, surélevée, qui prend la fluorescéine", why: "Rejet épithélial, le plus bénin." },
      { sign: "Infiltrats sous-épithéliaux (taches blanches de Krachmer) sur le greffon", why: "Rejet stromal ; comme un adénovirus, mais limité au greffon." },
      { sign: "Précipités rétrocornéens (KP : amas de cellules inflammatoires sur l’endothélium), ligne de Khodadoust (Khodadoust line)", why: "Rejet endothélial : la ligne de KP avance et laisse derrière elle un greffon œdémateux." },
      { sign: "Œdème du greffon, cornée du receveur claire", why: "Atteinte limitée au greffon : rejet plutôt qu’uvéite ou PIO (pression intraoculaire) élevée." },
      { sign: "Sutures lâches, cassées ou entourées d’infiltrat", why: "Déclenchent rejet et abcès : à retirer, après culture si infiltrat." }
    ],
    tests: [
      { test: "Fluorescéine et test de Seidel (fluorescéine concentrée diluée par l’aqueuse qui fuit = filet vert brillant)", when: "Toute visite imprévue", read: "Défaut + infiltrat = infection ; Seidel positif = plaie qui fuit." },
      { test: "Pachymétrie (épaisseur cornéenne)", when: "Rejet, suivi du traitement", read: "Épaisseur ↑ = œdème ; sa baisse confirme la réponse." },
      { test: "Topographie (carte de courbure)", when: "Astigmatisme après PK", read: "Couper d’abord la suture du méridien le plus cambré." },
      { test: "OCT de segment antérieur", when: "Cornée trouble après DMEK", read: "Greffon décollé : réinjection d’air." }
    ]
  },
  ddx: [
    { dx: "Kératite infectieuse", clue: "Infiltrat + défaut épithélial, souvent sur une suture : cultiver avant de monter les stéroïdes." },
    { dx: "Herpès dans le greffon", clue: "Dendrite ou endothélite, antécédent d’HSV." },
    { dx: "Échec endothélial tardif", clue: "Œdème lent, sans inflammation ni KP." },
    { dx: "Glaucome cortisonique (PIO ↑ sous stéroïdes)", clue: "Œdème épithélial, PIO élevée, pas de KP." },
    { dx: "Échec primaire (primary graft failure)", clue: "Greffon œdémateux dès le lendemain, jamais clair : endothélium du donneur non fonctionnel." }
  ],
  redFlags: [
    "RSVP chez un greffé : examen le jour même",
    "Infiltrat sur le greffon : cultures avant d’ajuster les stéroïdes",
    "Trauma d’une PK, PIO élevée ou greffon de DMEK décollé"
  ],
  cat: {
    vignette: "Femme de 62 ans, greffe de cornée il y a 14 mois, gouttes de stéroïde cessées. Rougeur, photophobie, vision qui baisse depuis 3 jours.",
    algo: [
      { q: "Greffé avec rougeur, photophobie, vision ↓ ou douleur ?", yes: "Ophtalmologiste le jour même.", no: "Suivi habituel ; gouttes prises tous les jours.", yesGo: 1 },
      { q: "Infiltrat ou défaut, surtout près d’une suture ?", yes: "Infection : cultures, antibiotiques, retrait de la suture.", no: "", noGo: 2 },
      { q: "Ligne, infiltrats, KP ou œdème du greffon ?", yes: "Rejet : prednisolone 1 % aux heures + cycloplégique.", no: "PIO, herpès, suture lâche, sécheresse ?", yesGo: 3 },
      { q: "Rejet endothélial sévère ou haut risque ?", yes: "Ajouter stéroïde périoculaire ou oral.", no: "", yesGo: 4, noGo: 4 },
      { q: "Greffon encore œdémateux après quelques semaines ?", yes: "Échec : regreffe (souvent DMEK ou DSAEK).", no: "Sevrage lent, puis dose d’entretien." }
    ],
    phases: [
      {
        phase: "medical",
        items: [
          "Rejet : acétate de prednisolone 1 % aux heures (ou difluprednate 0,05 %), puis sevrage lent",
          "Cycloplégique (cyclopentolate : met au repos le muscle ciliaire)",
          "Sévère : triamcinolone sous-ténonienne (sous la capsule de Tenon, enveloppe du globe) ou prednisone orale",
          "Antécédent d’herpès : valacyclovir 500 mg PO TID ou acyclovir 400 mg PO 5 fois/j, puis prophylaxie"
        ]
      },
      {
        phase: "chirurgie",
        items: [
          "Retrait des sutures lâches ; retrait sélectif guidé par la topographie",
          "Réinjection d’air (rebubbling) ; réparation d’une plaie rouverte ; regreffe ; kératoprothèse (cornée artificielle) si échecs répétés"
        ]
      },
      {
        phase: "suivi",
        items: ["Stéroïde sevré sur des mois, souvent 1 goutte par jour à long terme ; PIO à chaque visite ; lunettes de protection après PK"]
      },
      {
        phase: "escalade",
        items: ["Haut risque : immunosuppression systémique (cyclosporine, mycophénolate) avec la médecine interne"]
      }
    ],
    local: "Au Québec, les greffons proviennent du don de tissus après le décès, avec le consentement de la personne ou de ses proches ; un greffé doit pouvoir être vu le jour même pour tout RSVP."
  },
  treatments: [
    { name: "Stéroïdes topiques intensifs", dose: "Prednisolone 1 % aux heures, puis sevrage lent.", pitfall: "Exclure une infection avant de monter la dose.", how: "Gouttes d’acétate de prednisolone 1 % aux heures (± onguent la nuit), puis diminution lente : elles bloquent l’attaque des lymphocytes contre le greffon.", why: "Tout rejet, dès les premiers signes.", pros: "Souvent réversible si traité tôt.", cons: "Exclure d’abord une infection.", cx: "PIO ↑, cataracte, herpès réactivé, infection." },
    { name: "Stéroïdes périoculaires ou oraux", dose: "Triamcinolone sous-ténonienne ou prednisone orale courte.", pitfall: "Injection impossible à retirer.", how: "Injection de triamcinolone sous la capsule de Tenon, ou prednisone orale en courte cure, en plus des gouttes.", why: "Rejet endothélial sévère, haut risque, observance difficile.", pros: "Effet plus puissant et soutenu.", cons: "Injection impossible à retirer.", cx: "PIO ↑ prolongée ; glycémie, humeur, estomac." },
    { name: "Retrait de sutures (PK)", dose: "Retrait à la lampe à fente, sous anesthésie topique.", pitfall: "Trop tôt : la plaie peut s’ouvrir.", how: "À la lampe à fente, sous anesthésie topique : on coupe le point avec une aiguille fine et on le retire à la pince.", why: "Suture lâche ou cassée ; astigmatisme (méridien le plus cambré).", pros: "Moins d’astigmatisme et de déclencheurs de rejet.", cons: "Trop tôt : plaie qui s’ouvre.", cx: "Infection, rejet, fuite." },
    { name: "Réinjection d’air (rebubbling)", dose: "Nouvelle bulle d’air ou de SF6, patient couché sur le dos.", pitfall: "Parfois à répéter.", how: "Nouvelle bulle d’air ou de gaz (SF6, qui dure plus longtemps) injectée dans la chambre antérieure pour replaquer le greffon ; patient couché sur le dos.", why: "Greffon de DMEK ou DSAEK décollé au centre.", pros: "Simple, souvent efficace.", cons: "Parfois à répéter.", cx: "PIO ↑ (bulle qui bloque la pupille), perte endothéliale." }
  ],
  treatment: {
    first: [
      "**Externe / 1re ligne** : vérifier que les gouttes de stéroïde sont prises ; ne jamais les arrêter.",
      "**Ophtalmologiste** : prednisolone 1 % aux heures si rejet ; cultures si infiltrat."
    ],
    refer: ["Le jour même pour tout greffé avec RSVP — le rejet traité tôt est réversible.", "Immédiatement après un coup sur une PK — la plaie peut s’ouvrir."],
    pitfall: ["Monter la prednisolone sur un infiltrat non cultivé : infection masquée."],
    qc: ["Greffons issus du don de tissus après le décès."]
  },
  pearls: [
    { q: "Classe les greffes selon le risque de rejet.", a: "PK > DSAEK > DMEK : plus de tissu étranger, plus de risque. La DALK garde l’endothélium du receveur : **pas de rejet endothélial**, mais un rejet épithélial ou stromal reste possible." },
    { q: "Que dis-tu au patient greffé ?", a: "**RSVP** = consulter le jour même. Ne jamais arrêter les stéroïdes seul et porter des lunettes de protection : une PK reste fragile au traumatisme toute la vie." },
    { q: "Ligne de Khodadoust : que fais-tu ?", a: "Rejet endothélial (ligne de KP qui avance, œdème derrière) : prednisolone 1 % aux heures, cycloplégique, ± stéroïde périoculaire ou oral, antiviral si herpès." }
  ],
  mnemonic: { title: "RSVP", text: "Rougeur, Sensibilité à la lumière, Vision ↓, Pain (douleur) : greffé vu le jour même." },
  compare: {
    title: "Segment antérieur : normal vs rejet endothélial",
    normal: {
      figure: { type: "slit", pattern: "normal" },
      caption: "Œil blanc, cornée claire."
    },
    patho: {
      figure: { type: "slit", pattern: "kp" },
      caption: "Rejet endothélial (schéma) : œil injecté et précipités rétrocornéens.",
      reveal: [
        "Rougeur autour du limbe (injection ciliaire)",
        "Précipités rétrocornéens (KP) dans la moitié inférieure",
        "À chercher : ligne de Khodadoust et œdème limités au greffon",
        "La cornée du receveur, en périphérie, reste claire"
      ]
    }
  },
  sources: [
    "AAO PPP Corneal Edema and Opacification (2023)",
    "Anshu A, Price MO, Price FW Jr, Risk of corneal transplant rejection significantly reduced with DMEK (Ophthalmology 2012)",
    "Deng SX et al., DMEK : safety and outcomes, a report by the AAO (Ophthalmology 2018)",
    "Collaborative Corneal Transplantation Studies Research Group (Arch Ophthalmol 1992)"
  ]
},

  // 10. Brûlure chimique
  {
  id: "c-brulure",
  module: "B",
  order: 10,
  title: "Brûlure chimique",
  en: "Chemical eye injury",
  tags: ["urgent", "highyield", "piege"],
  oneLiner: "Produit chimique dans l’œil : irriguer immédiatement, avant l’histoire et l’examen, jusqu’à pH 7,0–7,5 ; les bases sont les pires.",
  definition: "Brûlure par une base ou un acide. Les bases pénètrent et tuent le limbe : irriguer immédiatement.",
  anatomy: {
    text: "Le limbe abrite les cellules souches qui renouvellent l’épithélium cornéen ; il fait barrière contre la conjonctive et il est nourri par les arcades vasculaires limbiques. La conjonctive tapisse aussi l’intérieur des paupières et forme des culs-de-sac (fornix) où des particules se cachent. Une base peut atteindre la chambre antérieure en quelques secondes à minutes. Séquelle d’une brûlure grave : cornée opaque et vascularisée.",
    figure: {
      type: "eye",
      highlight: ["limbe", "conjonctive", "cornee", "chambre-anterieure"]
    }
  },
  causal: {
    title: "De la projection à la cornée vascularisée",
    steps: [
      { label: "Contact avec une base ou un acide", detail: "Bases : soude caustique (lye : débouche-tuyaux), ammoniaque, chaux, plâtre, ciment, coussin gonflable (airbag) ; acides : batterie (sulfurique), fluorhydrique.", kind: "cause" },
      { label: "Pénétration selon le produit", detail: "La base saponifie (dissout) les membranes des cellules et pénètre ; l’acide coagule les protéines de surface, qui font barrière, sauf l’acide fluorhydrique.", kind: "mecanisme" },
      { label: "Ischémie limbique, épithélium détruit", detail: "Vaisseaux du limbe thrombosés (limbe blanc), cellules souches mortes, épithélium tombé.", kind: "lesion" },
      { label: "Inflammation, fonte du stroma", detail: "Les neutrophiles libèrent des collagénases (enzymes qui digèrent le collagène), surtout après la première semaine : ulcère, perforation.", kind: "complication" },
      { label: "Insuffisance en cellules souches limbiques", detail: "La conjonctive et ses vaisseaux recouvrent la cornée (conjonctivalisation) ; défauts persistants, symblépharon (paupière collée au globe).", kind: "complication" }
    ],
    levers: [
      { at: 0, label: "Irrigation immédiate", detail: "Diluer et retirer le produit au plus vite, jusqu’au pH neutre, en enlevant les particules : chaque seconde compte." },
      { at: 2, label: "Membrane amniotique précoce", detail: "Couche interne du placenta posée sur la surface : aide l’épithélium à repousser et calme l’inflammation (grades II–IV)." },
      { at: 3, label: "Stéroïde, doxycycline, ascorbate", detail: "Le stéroïde freine l’inflammation les 10–14 premiers jours ; la doxycycline inhibe les collagénases ; l’ascorbate (vitamine C) aide à refaire le collagène." },
      { at: 4, label: "Greffe de limbe", detail: "Cellules souches prises sur l’autre œil (CLAU, SLET) ou sur un donneur (KLAL) pour refaire un épithélium cornéen stable." }
    ]
  },
  risk: [
    "Travail : construction (ciment, chaux, plâtre), industrie, laboratoire, agriculture",
    "Maison : débouche-tuyaux, nettoyant à four, eau de Javel, produits de piscine",
    "Batterie d’auto, coussin gonflable ; agression par projection",
    "Absence de lunettes de protection"
  ],
  presentation: [
    "Douleur intense, photophobie, larmoiement, paupières serrées (blépharospasme)",
    "Vision ↓ variable : cornée trouble, voire blanche « en porcelaine »",
    "Piège : un œil blanc (limbe ischémique) est souvent plus grave qu’un œil rouge"
  ],
  exam: {
    signs: [
      { sign: "Ischémie limbique (limbal ischemia) : limbe blanc sans vaisseaux perfusés, en heures d’horloge", why: "Principal facteur pronostique de l’insuffisance limbique." },
      { sign: "Défaut épithélial cornéen et conjonctival à la fluorescéine", why: "Piège : un défaut total, sans bord net, passe inaperçu." },
      { sign: "Opacité : détails de l’iris nets, flous ou invisibles", why: "Avec l’ischémie, base de la classification de Roper-Hall." },
      { sign: "Particules après double éversion de la paupière supérieure", why: "Chaux et plâtre continuent de libérer de la base." }
    ],
    tests: [
      { test: "Papier pH dans le cul-de-sac inférieur", when: "À l’arrivée sans retarder l’irrigation, puis 5–10 min après la fin", read: "Cible 7,0–7,5 ; sinon, reprendre l’irrigation et chercher des particules." },
      { test: "Classification de Roper-Hall (ou de Dua)", when: "Après l’irrigation", read: "I : cornée claire, pas d’ischémie ; II : iris visible, ischémie < 1/3 du limbe ; III : iris flou, 1/3 à 1/2 ; IV : cornée opaque, > 1/2. Dua (I–VI) : heures de limbe et % de conjonctive atteints ; préciser l’échelle, car les numéros diffèrent." },
      { test: "Identification du produit", when: "Pendant l’irrigation", read: "Étiquette, fiche de données de sécurité (FDS), Centre antipoison du Québec : base, acide, fluorhydrique." }
    ]
  },
  ddx: [
    { dx: "Brûlure thermique", clue: "Chaleur (fer à friser, métal fondu) ; atteinte souvent superficielle." },
    { dx: "Kératite actinique (UV : soudure, neige)", clue: "Douleur 6–12 h après l’exposition, points aux deux yeux, sans produit chimique." },
    { dx: "Plaie perforante associée", clue: "Seidel positif (fuite d’humeur aqueuse), chambre plate, pupille déformée : protéger le globe." }
  ],
  redFlags: [
    "Limbe blanc ou cornée voilée (Roper-Hall II–IV) : ophtalmologiste immédiatement",
    "pH qui remonte : particules retenues dans les culs-de-sac",
    "Défaut qui ne ferme pas, amincissement, pression intraoculaire (PIO) élevée"
  ],
  cat: {
    vignette: "Homme de 35 ans : débouche-tuyaux dans l’œil gauche il y a 10 minutes. Il arrive à l’urgence, très souffrant, sans avoir rincé.",
    algo: [
      { q: "Exposition chimique ?", yes: "Irriguer tout de suite, avant l’histoire et l’acuité.", no: "Évaluer comme un œil rouge douloureux.", yesGo: 1 },
      { q: "pH 7,0–7,5, 5–10 min après l’irrigation ?", yes: "Examen : acuité, fluorescéine, limbe, PIO, éversion.", no: "Irriguer encore, retirer les particules, puis examiner.", yesGo: 2, noGo: 2 },
      { q: "Limbe blanc ou cornée voilée (Roper-Hall ≥ II) ?", yes: "Ophtalmologie immédiatement : stéroïde, doxycycline, membrane amniotique.", no: "Grade I : antibiotique, lubrifiants ; revoir en 1–2 jours.", yesGo: 3 },
      { q: "Épithélium refermé vers le jour 10–14 ?", yes: "Sevrer le stéroïde selon l’inflammation ; PIO surveillée.", no: "Défaut persistant : réduire le stéroïde ; membrane amniotique, ± tarsorraphie." }
    ],
    phases: [
      {
        phase: "medical",
        items: [
          "**Irriguer d’abord** : ≥ 30 min et plusieurs litres, anesthésique topique, blépharostat (écarteur de paupières) ou lentille d’irrigation",
          "Double éversion, retrait des particules au coton-tige mouillé, balayage des culs-de-sac",
          "Antibiotique sans agent de conservation, cycloplégique, contrôle de la PIO",
          "Grades II–IV : stéroïde ≤ 10–14 j, doxycycline, ascorbate ; citrate topique (préparation magistrale, selon le centre)"
        ]
      },
      {
        phase: "chirurgie",
        items: ["Membrane amniotique précoce ; prévention du symblépharon (baguette de verre, anneau) ; colle ou greffe tectonique (de renfort) si fonte"]
      },
      {
        phase: "suivi",
        items: ["Quotidien au début ; surveiller fonte (semaines 2–3), PIO, symblépharon"]
      },
      {
        phase: "escalade",
        items: ["Insuffisance limbique : greffe de limbe, puis de cornée ; kératoprothèse (cornée artificielle) si échecs"]
      }
    ],
    local: "Au Québec, une brûlure au travail exige les formulaires de la CNESST ; le Centre antipoison du Québec aide à identifier le produit et sa toxicité."
  },
  treatments: [
    { name: "Irrigation abondante", dose: "NaCl 0,9 % ou lactate Ringer ≥ 30 min, jusqu’à pH 7,0–7,5.", pitfall: "Recontrôler le pH 5–10 min après l’arrêt.", qc: "Au travail : CNESST ; Centre antipoison du Québec.", how: "Rinçage au soluté (NaCl 0,9 % ou lactate Ringer) par tubulure, lentille d’irrigation ou sous blépharostat, ≥ 30 min, paupières retournées, jusqu’à pH 7,0–7,5 : dilue et emporte le produit.", why: "Toute brûlure, sur place puis à l’urgence.", pros: "Le geste le plus efficace.", cons: "Inconfortable.", cx: "Chémosis (œdème de la conjonctive)." },
    { name: "Stéroïde topique court", dose: "Prednisolone 1 %, de 4×/j aux heures, ≤ 10–14 jours.", pitfall: "Prolongé, il favorise la fonte.", how: "Acétate de prednisolone 1 % (de 4 fois par jour à toutes les heures) au plus 10–14 jours, puis sevrage rapide : freine les neutrophiles et l’inflammation.", why: "Grades II–IV.", pros: "Moins d’inflammation et de néovaisseaux.", cons: "Prolongé, il favorise la fonte.", cx: "Fonte, perforation, PIO ↑." },
    { name: "Doxycycline et ascorbate oraux", dose: "Doxycycline 100 mg 2×/j + vitamine C 1–2 g/j.", pitfall: "Doxycycline : pas en grossesse ni avant 8 ans.", how: "Doxycycline 100 mg BID : inhibe les collagénases ; vitamine C 1–2 g/j : nécessaire à la fabrication du collagène, effondrée dans l’aqueuse après une base.", why: "Grades II–IV, défaut persistant.", pros: "Oral, peu coûteux.", cons: "Doxycycline : pas en grossesse ni avant 8 ans.", cx: "Photosensibilité ; calculs rénaux (vitamine C)." },
    { name: "Membrane amniotique", dose: "Membrane amniotique tôt, collée, suturée ou sur anneau.", pitfall: "Ne remplace pas les cellules souches.", how: "Couche interne du placenta de donneuse, collée, suturée ou montée sur un anneau : pansement biologique anti-inflammatoire.", why: "Grades II–IV, tôt ; défaut persistant.", pros: "Fermeture plus rapide, moins de douleur.", cons: "Ne remplace pas les cellules souches.", cx: "Infection, déplacement." },
    { name: "Greffe de cellules souches limbiques", dose: "CLAU, SLET ou KLAL selon l’état de l’autre œil.", pitfall: "KLAL : immunosuppression systémique.", how: "Apport de limbe sain : CLAU (autogreffe conjonctivo-limbique de l’autre œil), SLET (petits fragments de limbe sur membrane amniotique) ou KLAL (allogreffe de limbe de donneur).", why: "Insuffisance limbique chronique.", pros: "Surface stable, puis greffe de cornée possible.", cons: "CLAU, SLET : œil adelphe sain requis ; KLAL : immunosuppression.", cx: "Rejet, échec, atteinte de l’œil donneur." }
  ],
  treatment: {
    first: [
      "**Externe / 1re ligne** : irriguer au NaCl 0,9 % ≥ 30 min jusqu’à pH 7,0–7,5, paupières retournées.",
      "**Ophtalmologiste** : stéroïde court, doxycycline + vitamine C, membrane amniotique."
    ],
    refer: ["Immédiatement si limbe blanc, cornée voilée (Roper-Hall ≥ II) ou pH qui remonte — perte de la vision.", "Dans les 24 h pour toute brûlure par une base, même légère."],
    pitfall: ["Attendre l’acuité ou le produit avant d’irriguer : minutes perdues.", "Prednisolone au-delà de 10–14 jours : fonte de la cornée."],
    qc: ["Au travail : CNESST ; Centre antipoison du Québec pour le produit."]
  },
  pearls: [
    { q: "Que fais-tu en premier ?", a: "**J’irrigue**, avant l’histoire, l’acuité et l’examen ; seul le papier pH peut précéder. Au moins 30 min, jusqu’à pH 7,0–7,5 recontrôlé 5–10 min après, avec double éversion." },
    { q: "Pourquoi une base est-elle pire qu’un acide ?", a: "La base saponifie les membranes et pénètre jusqu’à la chambre antérieure ; l’acide coagule les protéines de surface, qui font barrière. Exception : l’acide fluorhydrique pénètre." },
    { q: "Pourquoi limiter le stéroïde à 10–14 jours ?", a: "Il freine l’inflammation au début, puis bloque la réparation du collagène quand les collagénases culminent : risque de fonte et de perforation." }
  ],
  mnemonic: { title: "Diluer avant de décrire", text: "Irriguer, puis pH, puis examiner. L’œil le plus blanc est souvent le plus grave." },
  compare: {
    title: "Cornée normale vs séquelle de brûlure alcaline",
    normal: {
      figure: { type: "cornea" },
      caption: "Épithélium intact, stroma mince et transparent."
    },
    patho: {
      figure: {
        type: "cornea",
        highlight: ["epithelium", "stroma"],
        edema: "stromal",
        scar: true
      },
      caption: "Base qui a pénétré (schéma) : stroma œdémateux, Bowman rompue, cicatrice antérieure.",
      reveal: [
        "Cicatrice blanche dans le stroma antérieur : la Bowman rompue ne se régénère pas",
        "Stroma épaissi et trouble : iris flou ou invisible (grades III–IV)",
        "Plis de la Descemet : l’endothélium a aussi souffert",
        "Hors du schéma : limbe blanc ischémique, défaut épithélial, PIO, particules"
      ]
    }
  },
  sources: [
    "Roper-Hall MJ, Thermal and chemical burns (Trans Ophthalmol Soc UK 1965)",
    "Dua HS, King AJ, Joseph A, A new classification of ocular surface burns (Br J Ophthalmol 2001)",
    "Wagoner MD, Chemical injuries of the eye : current concepts in pathophysiology and therapy (Surv Ophthalmol 1997)",
    "Sangwan VS et al., Simple limbal epithelial transplantation (SLET) (Br J Ophthalmol 2012)"
  ]
}

]);
