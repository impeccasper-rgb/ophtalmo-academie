var G = (typeof window !== 'undefined') ? window : globalThis;
G.OPH = G.OPH || {};
G.OPH.fiches = (G.OPH.fiches || []).concat([

  // Dystrophies cornéennes
  {
    id: "c-dystrophies",
    module: "B",
    order: 9,
    title: "Dystrophies cornéennes",
    en: "Corneal dystrophies",
    tags: ["highyield", "piege"],
    oneLiner: "Opacités bilatérales et symétriques, sans vaisseaux ni inflammation, souvent familiales : penser dystrophie, situer la couche, puis protéger la surface.",
    definition: "Maladie héréditaire où une substance anormale s’accumule dans une couche précise de la cornée, aux deux yeux, lentement, sans inflammation ni vaisseaux. Une dégénérescence, elle, est acquise, souvent asymétrique ou périphérique.",
    anatomy: {
      text: "La cornée compte cinq couches classiques : épithélium (≈ 50 µm, se renouvelle), couche de Bowman (8–12 µm, ne se régénère pas), stroma (≈ 90 % de l’épaisseur, collagène très ordonné), Descemet et endothélium (pompe qui ne se divise pas). Tout dépôt qui brise cet ordre diffuse la lumière. La classification IC3D (International Committee for Classification of Corneal Dystrophies) range les dystrophies par couche et par gène ; elle regroupe Reis-Bücklers, granulaires et grillagée sous le gène TGFBI. Moyen mnémotechnique des colorations : « Marilyn Monroe Always Gets Her Men in LA City » (Maculaire – Mucopolysaccharides – Alcian ; Granulaire – Hyaline – Masson ; Lattice – Amyloïde – Congo).",
      figure: { type: "cornea", highlight: ["epithelium", "bowman", "stroma", "endothelium"] }
    },
    causal: {
      title: "Du gène à l’opacité, puis à la récidive",
      steps: [
        { label: "Mutation héréditaire", detail: "Souvent dominante (50 % de risque par enfant) : TGFBI pour Reis-Bücklers, granulaires et grillagée ; CHST6, récessif, pour la maculaire.", kind: "cause" },
        { label: "Substance anormale qui s’accumule", detail: "Hyaline (granulaire), amyloïde (grillagée), mucopolysaccharides (maculaire), sur des années.", kind: "mecanisme" },
        { label: "Opacités bilatérales sans vaisseaux", detail: "Forme, profondeur et clarté du stroma entre elles orientent vers le type.", kind: "lesion" },
        { label: "Ancrage épithélial fragilisé", detail: "Les dépôts sous l’épithélium défont son ancrage : érosions récidivantes douloureuses.", kind: "mecanisme" },
        { label: "Éblouissement, baisse de vision", detail: "Opacités dans l’axe visuel ou surface devenue irrégulière.", kind: "signe" },
        { label: "Récidive après chirurgie", detail: "Les dépôts reviennent souvent dans le greffon ou après une PTK (photokératectomie thérapeutique au laser).", kind: "complication" }
      ],
      levers: [
        { at: 3, label: "Soins de surface", detail: "Lubrifiants, onguent NaCl 5 % au coucher, lentille de pansement en crise : comme pour l’érosion récidivante." },
        { at: 4, label: "PTK", detail: "Le laser excimer vaporise les opacités superficielles (Bowman, stroma antérieur) et lisse la surface ; répétable." },
        { at: 4, label: "DALK ou PK", detail: "Opacités profondes : greffe lamellaire antérieure profonde (DALK) si l’endothélium est sain, greffe transfixiante de pleine épaisseur (PK) sinon." },
        { at: 0, label: "Conseil génétique", detail: "Test du gène, examen de la famille et, en cas de mutation TGFBI, pas de LASIK (laser réfractif sous un volet cornéen)." }
      ]
    },
    risk: [
      "Histoire familiale d’opacités ou de greffes de cornée",
      "Mutation TGFBI connue (autosomique dominante)",
      "Parents consanguins : dystrophie maculaire (récessive)",
      "Trauma cornéen ou LASIK : poussées des dystrophies TGFBI"
    ],
    presentation: [
      "Souvent découverte fortuite chez l’optométriste, vision conservée",
      "Douleur vive au réveil par érosions récidivantes (Reis-Bücklers, grillagée), parfois dès l’enfance",
      "Éblouissement, baisse lente de vision ; vision basse tôt dans la maculaire",
      "Atteinte des deux yeux, symétrique ; œil blanc entre les crises"
    ],
    exam: {
      signs: [
        { sign: "Dystrophie granulaire de type 1 : opacités blanches nettes en « miettes de pain » (breadcrumb) dans le stroma antérieur central, stroma clair entre elles", why: "Bords nets et intervalle clair : pas une maculaire ; périphérie épargnée." },
        { sign: "Granulaire de type 2, ou dystrophie d’Avellino : flocons ou étoiles, avec quelques lignes", why: "Le LASIK fait proliférer les dépôts à l’interface du volet." },
        { sign: "Dystrophie grillagée (lattice) de type 1 : lignes fines, ramifiées, réfringentes (qui brillent) dans le stroma central", why: "Amyloïde ; mieux vues en rétroillumination (reflet du fond d’œil) ; érosions fréquentes." },
        { sign: "Dystrophie maculaire : voile stromal diffus jusqu’au limbe, taches grises floues, cornée mince", why: "Récessive ; touche toute la largeur et l’épaisseur, endothélium compris." },
        { sign: "Dystrophie de Reis-Bücklers : opacités grises réticulées au niveau de la Bowman", why: "Érosions dès l’enfance ; récidive rapide après PTK ou greffe." },
        { sign: "Dystrophie polymorphe postérieure (DPP, posterior polymorphous corneal dystrophy) : vésicules, bandes à bords parallèles ou plaques sur la Descemet", why: "Souvent sans symptôme ; peut gagner l’angle : synéchies, glaucome." }
      ],
      tests: [
        { test: "Lampe à fente : fente fine, puis rétroillumination", when: "Toute opacité bilatérale", read: "Fente fine = profondeur ; rétroillumination = lignes, vésicules." },
        { test: "Pachymétrie, microscopie spéculaire, gonioscopie", when: "Maculaire, DPP, avant une greffe", read: "Cornée mince : maculaire ; vésicules sombres en spéculaire : DPP ; synéchies : risque de glaucome." },
        { test: "Test génétique (TGFBI et autres gènes)", when: "Doute diagnostique, famille, demande de chirurgie réfractive", read: "Confirme le type et la transmission ; mutation TGFBI = pas de LASIK." }
      ]
    },
    ddx: [
      { dx: "Rappels : dystrophie de la membrane basale épithéliale (EBMD) et Fuchs", clue: "EBMD : cartes, points, empreintes dans l’épithélium (fiche Érosion récidivante). Fuchs : guttae et œdème après 50 ans (fiche Fuchs)." },
      { dx: "Dégénérescences et dépôts", clue: "Acquis, asymétriques ou périphériques, avec un contexte : âge, uvéite, médicament." },
      { dx: "Cicatrice d’infection, de trauma ou de kératite interstitielle", clue: "Unilatérale, histoire d’œil rouge, vaisseaux." },
      { dx: "Kératopathie cristalline infectieuse", clue: "Cristaux ramifiés dans un greffon sous stéroïde." },
      { dx: "Stries de Haab (glaucome congénital)", clue: "Bris courbes de la Descemet, grande cornée, PIO ↑ ; bandes de DPP à bords parallèles." },
      { dx: "Dystrophie de Schnyder", clue: "Cristaux de cholestérol et arc précoce : bilan lipidique." }
    ],
    redFlags: [
      "Opacité unilatérale, rouge ou douloureuse : infection, pas dystrophie",
      "Opacités stromales avant LASIK ou PKR : exclure une dystrophie TGFBI",
      "Nourrisson aux cornées troubles : exclure un glaucome congénital"
    ],
    cat: {
      algo: [
        { q: "Bilatéral, symétrique, sans vaisseaux, familial ?", yes: "Dystrophie : situer la couche à la fente fine.", no: "Dégénérescence, dépôt ou cicatrice.", cont: "yes" },
        { q: "Épithélium seulement (cartes, points, empreintes) ?", yes: "EBMD : voir Érosion récidivante.", no: "Couche suivante.", cont: "no" },
        { q: "Bowman ou stroma antérieur ?", yes: "Soigner les érosions ; PTK si vision ↓ ; pas de LASIK.", no: "Regarder le stroma profond.", cont: "no" },
        { q: "Voile jusqu’au limbe, cornée mince ?", yes: "Maculaire : DALK si endothélium sain, sinon PK.", no: "Regarder l’endothélium.", cont: "no" },
        { q: "Guttae ou lésions de la Descemet ?", yes: "Guttae : Fuchs ; vésicules ou bandes : DPP (PIO, gonioscopie).", no: "Revoir : dépôt acquis ?" }
      ],
      phases: [
        { phase: "observation", items: ["Vision fonctionnelle : suivi annuel, photos, examen de la famille"] },
        { phase: "medical", items: ["Érosions : lubrifiants, onguent NaCl 5 % au coucher, lentille de pansement", "DPP avec PIO ↑ : traiter le glaucome"] },
        { phase: "laser", items: ["PTK : opacités superficielles ; répétable ; virage hypermétropique possible"] },
        { phase: "chirurgie", items: ["DALK si endothélium sain ; PK si toute l’épaisseur ou l’endothélium est atteint ; DMEK ou DSAEK si œdème endothélial"] },
        { phase: "suivi", items: ["Récidive dans le greffon : rapide (Reis-Bücklers), fréquente (granulaire, grillagée), plus rare (maculaire)"] }
      ],
      local: "Au Québec, l’optométriste découvre souvent ces opacités ; diriger si vision ↓, érosions ou projet de chirurgie réfractive. Test génétique : accès et couverture à vérifier localement (génétique médicale)."
    },
    treatments: [
      { name: "Soins de surface", dose: "Onguent NaCl 5 % au coucher ; lentille pansement en crise.", pitfall: "Ne retire pas les opacités.", how: "Lubrifiants, onguent NaCl 5 % au coucher, lentille souple de pansement en crise.", why: "Érosions récidivantes.", pros: "Simple, peu risqué.", cons: "Ne retire pas les opacités.", cx: "Infection sous lentille." },
      { name: "PTK (photokératectomie thérapeutique)", dose: "Laser excimer pour la Bowman ou le stroma antérieur.", refer: "Vision ↓ ou érosions rebelles : cornée.", pitfall: "Les dépôts reviennent.", how: "Laser excimer qui vaporise et lisse la surface.", why: "Opacités de Bowman ou du stroma antérieur ; érosions rebelles.", pros: "Sans greffe, répétable.", cons: "Inutile en profondeur ; les dépôts reviennent.", cx: "Virage hypermétropique, haze, infection." },
      { name: "DALK (deep anterior lamellar keratoplasty)", dose: "Greffe lamellaire si l’endothélium est sain.", pitfall: "Technique exigeante.", how: "Greffe lamellaire antérieure profonde : remplace épithélium et stroma, garde la Descemet et l’endothélium du patient.", why: "Dystrophie stromale, endothélium sain.", pros: "Pas de rejet endothélial, globe plus solide.", cons: "Technique exigeante.", cx: "Perforation de la Descemet (conversion en PK), récidive." },
      { name: "Kératoplastie transfixiante (PK)", dose: "Greffe de pleine épaisseur si l’endothélium est malade.", pitfall: "Récupération lente, astigmatisme.", how: "Remplacement d’un disque de cornée de pleine épaisseur, cousu.", why: "Atteinte de toute l’épaisseur ou endothélium malade.", pros: "Remplace toutes les couches.", cons: "Récupération lente, astigmatisme.", cx: "Rejet, glaucome, récidive dans le greffon." }
    ],
    treatment: {
      first: ["**Soins de surface** : onguent NaCl 5 % au coucher ; lentille pansement en crise.", "**PTK (photokératectomie thérapeutique)** : laser excimer pour la Bowman ou le stroma antérieur.", "**DALK (deep anterior lamellar keratoplasty)** : greffe lamellaire si l’endothélium est sain.", "**Kératoplastie transfixiante (PK)** : greffe de pleine épaisseur si l’endothélium est malade."],
      refer: ["Vision ↓ ou érosions rebelles : cornée."],
      pitfall: ["Ne retire pas les opacités.", "Les dépôts reviennent.", "Technique exigeante.", "Récupération lente, astigmatisme."]
    },
    pearls: [
      { q: "Comment distingues-tu granulaire, grillagée et maculaire ?", a: "Granulaire : miettes nettes, stroma clair entre elles. Grillagée : lignes ramifiées, érosions. Maculaire : voile jusqu’au limbe, cornée mince, **récessive** (les deux autres sont dominantes)." },
      { q: "Quelques opacités en flocons chez un candidat au LASIK : que fais-tu ?", a: "Penser dystrophie d’Avellino : test TGFBI avant toute chirurgie réfractive. Le LASIK fait proliférer les dépôts à l’interface et peut ruiner la vision." },
      { q: "Dystrophie polymorphe postérieure ou syndrome ICE ?", a: "DPP : bilatérale, héréditaire, souvent muette. ICE (syndrome irido-cornéo-endothélial) : unilatéral, acquis, iris déformé. Les deux peuvent donner synéchies et glaucome : gonioscopie et PIO." }
    ],
    mnemonic: { title: "Colorations des dystrophies stromales", text: "Maculaire : mucopolysaccharides, bleu alcian. Granulaire : hyaline, Masson. Grillagée : amyloïde, rouge Congo." },
    compare: {
      title: "Cornée normale vs dystrophie granulaire",
      normal: { figure: { type: "photo", id: "OPH-001" }, caption: "Cornée normale à la lampe à fente : transparente, sans dépôt." },
      patho: { figure: { type: "photo", id: "OPH-344" }, caption: "Dystrophie granulaire : opacités en miettes de pain (source EyeRounds).", reveal: [
        "Opacités blanc-gris nettes, en grains ou en petits anneaux, devant la pupille",
        "Certaines lésions alignées en traînées dans la moitié inférieure",
        "Cornée claire entre les opacités",
        "Lésions regroupées dans la cornée centrale ; aucun vaisseau"
      ] }
    },
    sources: [
      "IC3D Classification of Corneal Dystrophies, 2e éd. (Weiss JS et al., Cornea 2015)",
      "IC3D Classification of Corneal Dystrophies, 3e éd. (Weiss JS et al., Cornea 2024;43:466-527)",
      "AAO Basic and Clinical Science Course, Section 8 : External Disease and Cornea",
      "AAO PPP Corneal Edema and Opacification (2023 ; Mian SI et al., Ophthalmology 2024)"
    ]
  },

  // Opacités, dépôts et dégénérescences
  {
    id: "c-depots",
    module: "B",
    order: 10,
    title: "Opacités, dépôts et dégénérescences de la cornée",
    en: "Corneal deposits, opacities and degenerations",
    tags: ["frequent", "highyield", "piege"],
    oneLiner: "Devant une opacité : quelle couche, quelle couleur, quel contexte ? Ces trois questions mènent au dépôt, au bilan et au traitement.",
    definition: "La dégénérescence est un changement acquis (âge, maladie), souvent asymétrique, parfois vascularisé. Le dépôt est une substance venue d’ailleurs (lipides, calcium, fer, cuivre, sang, médicament), avec une couche et une couleur typiques.",
    anatomy: {
      text: "Chaque couche retient ses dépôts : épithélium (médicaments en tourbillon, lignes de fer), Bowman (calcium), stroma (lipides, sang, cicatrices), Descemet périphérique (cuivre). La cornée normale n’a aucun vaisseau : les lipides de la kératopathie lipidique fuient de vaisseaux anormaux venus du limbe (l’arc cornéen, lui, se forme sans vaisseaux). Pour situer la couche : fente fine et rétroillumination (éclairage par le reflet de l’iris ou du fond d’œil). Couche + couleur + contexte : blanc crayeux dans la Bowman = calcium (bande) ; gris-blanc en anneau périphérique = lipides (arc) ; jaune au bout de vaisseaux = kératopathie lipidique ; brun doré en tourbillon épithélial = médicament ou Fabry, en anneau de Descemet = cuivre (Wilson), autour d’un corps étranger = rouille ; brun-rouge à vert diffus = sang ; cristaux dans un greffon = infection. Anneau brun périphérique avec atteinte du foie ou du système nerveux : maladie de Wilson.",
      figure: { type: "cornea", highlight: ["epithelium", "bowman", "stroma", "descemet"] }
    },
    causal: {
      title: "Du contexte au dépôt visible",
      steps: [
        { label: "Contexte local ou systémique", detail: "Âge, inflammation, médicament, trauma, maladie métabolique.", kind: "cause" },
        { label: "Excès ou barrière brisée", detail: "Taux sanguin trop haut, ou barrière (endothélium, épithélium, vaisseaux) qui fuit.", kind: "mecanisme" },
        { label: "Dépôt coloré dans une couche", detail: "Blanc crayeux (calcium), gris-blanc ou jaune (lipides), brun doré (fer, cuivre, médicament), brun-rouge à vert (sang).", kind: "lesion" },
        { label: "Souvent aucun symptôme", detail: "Dans l’axe visuel : éblouissement, flou ; surface soulevée : irritation.", kind: "signe" },
        { label: "Indice d’une maladie à traiter", detail: "Hypercalcémie, dyslipidémie, maladie de Wilson, infection, toxicité médicamenteuse.", kind: "complication" }
      ],
      levers: [
        { at: 0, label: "Traiter la cause", detail: "Contrôler l’uvéite, corriger le calcium ou les lipides, revoir le médicament, traiter la maladie de Wilson." },
        { at: 1, label: "Fermer les vaisseaux, baisser la PIO", detail: "Laser ou diathermie des vaisseaux nourriciers (lipides) ; PIO contrôlée et lavage de l’hyphéma (sang)." },
        { at: 2, label: "Retirer le dépôt", detail: "Chélation à l’EDTA (calcium), fraise (rouille), PTK (haze, calcium résiduel), greffe si opacité profonde." }
      ]
    },
    risk: [
      "Âge avancé : arc, dégénérescences bénignes",
      "Uvéite chronique (surtout arthrite juvénile idiopathique, AJI, chez l’enfant), œil phtisique (atrophié)",
      "Néovascularisation cornéenne : HSV (herpès simplex), zona, trauma, lentilles",
      "Médicaments et produits : amiodarone, hydroxychloroquine, ciprofloxacine topique ; huile de silicone intraoculaire",
      "Hyperparathyroïdie, insuffisance rénale, dyslipidémie familiale, maladies de Wilson et de Fabry",
      "Hyphéma avec PIO élevée, corps étranger métallique, PKR (photokératectomie réfractive), greffe sous stéroïde"
    ],
    presentation: [
      "Découverte fortuite le plus souvent, vision normale",
      "Irritation : calcium qui soulève l’épithélium, anneau de rouille",
      "Flou, éblouissement si l’opacité est centrale",
      "Indice systémique : tremblements, foie malade (Wilson), brûlures des extrémités (Fabry), arthrite (AJI)"
    ],
    exam: {
      signs: [
        { sign: "Arc cornéen (arcus) : anneau gris-blanc du stroma périphérique, séparé du limbe par une bande claire (intervalle lucide)", why: "Lipides ; banal après 50 ans ; avant : bilan lipidique ; unilatéral : carotide du côté sans arc." },
        { sign: "Kératopathie en bande (band keratopathy) : plaque blanche crayeuse entre les paupières, dans la Bowman, débutant à 3 h et 9 h, percée de trous", why: "Calcium (trous = passage des nerfs) ; uvéite, phtise, silicone, œdème cornéen chronique, hypercalcémie, insuffisance rénale." },
        { sign: "Cornée verticillée (cornea verticillata) : lignes brun doré en tourbillon dans l’épithélium, sous la pupille", why: "Amiodarone, hydroxychloroquine, maladie de Fabry ; vision rarement touchée." },
        { sign: "Anneau brun-vert ou doré dans la Descemet périphérique, d’abord en haut et en bas", why: "Anneau de Kayser-Fleischer (cuivre) : maladie de Wilson ; parfois vu seulement en gonioscopie." },
        { sign: "Dépôt jaune à bords plumeux au bout de vaisseaux stromaux", why: "Kératopathie lipidique (lipid keratopathy) : fuite de vaisseaux anormaux." },
        { sign: "Cristaux blancs ramifiés dans un greffon, peu de rougeur", why: "Kératopathie cristalline infectieuse : streptocoques viridans sous biofilm ; à cultiver." }
      ],
      tests: [
        { test: "Lampe à fente : fente fine, rétroillumination, gonioscopie", when: "Toute opacité", read: "Couche ; lignes et vaisseaux fantômes ; Kayser-Fleischer débutant." },
        { test: "Bilan sanguin ciblé, avec le médecin traitant", when: "Arc avant 50 ans ; bande sans cause oculaire ; Kayser-Fleischer", read: "Lipides ; calcium, phosphore, PTH (parathormone), créatinine ; céruloplasmine et cuivre urinaire de 24 h." },
        { test: "Liste des médicaments", when: "Tourbillon épithélial, plaque dans un ulcère", read: "Amiodarone, hydroxychloroquine, ciprofloxacine ; sinon penser Fabry (alpha-galactosidase A)." },
        { test: "Culture (grattage profond ou biopsie) ; sérologies de la syphilis", when: "Cristaux sur greffe ; vaisseaux fantômes", read: "Viridans le plus souvent. Test tréponémique positif : syphilis ancienne ou active (test non tréponémique pour l’activité) ; tuberculose selon le contexte ; surdité ou vertiges : syndrome de Cogan (vascularite de l’œil et de l’oreille interne)." }
      ]
    },
    ddx: [
      { dx: "Imprégnation hématique (corneal blood staining)", clue: "Stroma brun-rouge à vert après un hyphéma (sang dans la chambre antérieure) prolongé, PIO élevée ; s’éclaircit de la périphérie au centre." },
      { dx: "Dépôts de ciprofloxacine", clue: "Plaque blanche crayeuse dans le lit d’un ulcère traité aux heures." },
      { dx: "Anneau de rouille (rust ring)", clue: "Halo brun autour d’un corps étranger ferreux, formé en quelques heures." },
      { dx: "Haze après PKR (photokératectomie réfractive, PRK)", clue: "Voile sous-épithélial réticulé dans la zone traitée, semaines ou mois après le laser." },
      { dx: "Cicatrice de kératite interstitielle", clue: "Opacité stromale profonde, vaisseaux fantômes (vides) ; bilatérale : syphilis congénitale ; unilatérale : surtout HSV." }
    ],
    redFlags: [
      "Cristaux ou plaque sur une greffe sous stéroïde : infection jusqu’à preuve du contraire",
      "Hyphéma avec PIO élevée : imprégnation ; drépanocytose : nerf optique fragile",
      "Bande chez un enfant : uvéite de l’AJI, souvent œil blanc"
    ],
    cat: {
      algo: [
        { q: "Rougeur, douleur, infiltrat ou cristaux sur greffe ?", yes: "Infection : cultures, antibiotiques.", no: "Regarder couche et couleur.", cont: "no" },
        { q: "Blanc crayeux en bande ?", yes: "Calcium : cause oculaire, sinon bilan phosphocalcique ; EDTA.", no: "Question suivante.", cont: "no" },
        { q: "Anneau gris-blanc périphérique ?", yes: "Arc : bilan lipidique avant 50 ans.", no: "Question suivante.", cont: "no" },
        { q: "Brun doré ?", yes: "Tourbillon : médicament, Fabry ; Descemet : Wilson ; rouille : retirer.", no: "Question suivante.", cont: "no" },
        { q: "Dépôt stromal avec vaisseaux ou sang ?", yes: "Lipides : fermer les vaisseaux ; sang : PIO, lavage.", no: "Dystrophie, haze ou cicatrice ?" }
      ],
      phases: [
        { phase: "observation", items: ["Arc, cornée verticillée : rassurer, documenter"] },
        { phase: "medical", items: [
          "Lubrifiants ; lentille de pansement si la bande irrite",
          "Stéroïde topique : haze, kératite interstitielle active",
          "Infection cristalline : antibiotique intensif selon la culture, stéroïde baissé prudemment"
        ] },
        { phase: "laser", items: ["PTK ± mitomycine C ; laser ou diathermie des vaisseaux nourriciers"] },
        { phase: "chirurgie", items: [
          "Bande : grattage puis EDTA disodique",
          "Hyphéma : lavage si PIO élevée persistante ou début d’imprégnation",
          "Opacité profonde centrale : DALK ou PK"
        ] },
        { phase: "suivi", items: ["Bande : récidive si la cause persiste ; Wilson : l’anneau pâlit sous traitement"] }
      ],
      local: "Au Québec, l’optométriste dirige souvent ces opacités ; bilan systémique avec le médecin de famille. EDTA disodique : préparation hospitalière, disponibilité à vérifier."
    },
    treatments: [
      { name: "Chélation à l’EDTA", dose: "EDTA disodique sur éponge, après grattage épithélial.", refer: "Bande gênante : ophtalmologie.", pitfall: "Récidive si la cause persiste.", qc: "Préparation hospitalière.", how: "Après grattage épithélial, une éponge d’EDTA disodique (chélateur) dissout le calcium.", why: "Kératopathie en bande gênante.", pros: "Efficace, en salle de procédure.", cons: "Récidive si la cause persiste.", cx: "Retard de cicatrisation, infection." },
      { name: "Retrait de l’anneau de rouille", dose: "Aiguille, puis fraise rotative, sous anesthésie topique.", pitfall: "Résidu profond : revoir plutôt que creuser.", how: "Sous anesthésie topique : aiguille, puis fraise rotative à basse vitesse.", why: "Le fer oxydé irrite et retarde la guérison.", pros: "Soulagement rapide.", cons: "Rouille profonde ou centrale : retirer l’essentiel ; le résidu remonte souvent et s’enlève au suivi rapproché.", cx: "Perforation (rare), cicatrice." },
      { name: "Fermeture des vaisseaux", dose: "Laser argon, diathermie fine ou anti-VEGF (hors indication).", pitfall: "Effet lent et variable.", how: "Laser argon ou diathermie à l’aiguille fine du vaisseau nourricier ; anti-VEGF (bloque la croissance des vaisseaux) en gouttes ou sous-conjonctival, hors indication.", why: "Kératopathie lipidique qui progresse.", pros: "Peut faire régresser les lipides.", cons: "Lent, variable.", cx: "Hémorragie stromale, amincissement." },
      { name: "PTK ± mitomycine C", dose: "Laser excimer ± mitomycine C contre le voile.", pitfall: "Superficiel seulement.", how: "Laser excimer qui lisse la surface ; la mitomycine C freine la repousse du voile.", why: "Haze persistant, calcium résiduel.", pros: "Évite une greffe.", cons: "Superficiel seulement.", cx: "Retard de cicatrisation, récidive." }
    ],
    treatment: {
      first: ["**Chélation à l’EDTA** : EDTA disodique sur éponge, après grattage épithélial.", "**Retrait de l’anneau de rouille** : aiguille, puis fraise rotative, sous anesthésie topique.", "**Fermeture des vaisseaux** : laser argon, diathermie fine ou anti-VEGF (hors indication).", "**PTK ± mitomycine C** : laser excimer ± mitomycine C contre le voile."],
      refer: ["Bande gênante : ophtalmologie."],
      pitfall: ["Récidive si la cause persiste.", "Résidu profond : revoir plutôt que creuser.", "Effet lent et variable.", "Superficiel seulement."],
      qc: ["Préparation hospitalière."]
    },
    pearls: [
      { q: "Arc cornéen chez un homme de 38 ans : que fais-tu ?", a: "Penser hypercholestérolémie familiale : bilan lipidique, lettre au médecin de famille. Arc unilatéral : sténose carotidienne du côté **sans** arc." },
      { q: "Kayser-Fleischer ou Fleischer : quelle différence ?", a: "**Kayser-Fleischer** : cuivre dans la Descemet périphérique, maladie de Wilson. **Fleischer** : fer épithélial autour du cône. Autres lignes de fer : Hudson-Stähli (tiers inférieur, âge), Stocker (ptérygion), Ferry (bulle de filtration)." },
      { q: "Plaque blanche dans un ulcère sous ciprofloxacine : aggravation ?", a: "Souvent un précipité du médicament, qui retarde la fermeture. Infiltrat et réaction stables : changer d’antibiotique ; au moindre doute, recultiver." }
    ],
    mnemonic: { title: "Couche + couleur + contexte", text: "Blanc crayeux = calcium ; anneau gris = lipides ; brun doré = fer, cuivre ou médicament." },
    compare: {
      title: "Cornée normale vs kératopathie en bande",
      normal: { figure: { type: "photo", id: "OPH-001" }, caption: "Cornée normale : transparente, iris net." },
      patho: { figure: { type: "photo", id: "OPH-326" }, caption: "Kératopathie en bande ; hyperparathyroïdie selon la légende source.", reveal: [
        "Bande blanc-gris horizontale dans la moitié inférieure de la cornée, devant la pupille",
        "Cornée supérieure claire, dans la zone couverte par la paupière",
        "Texture granuleuse de la bande, avec de petites zones plus claires",
        "Aucun infiltrat ni ulcère visible : dépôt chronique, pas une infection"
      ] }
    },
    sources: [
      "AAO Basic and Clinical Science Course, Section 8 : External Disease and Cornea",
      "AAO PPP Corneal Edema and Opacification (2023 ; Mian SI et al., Ophthalmology 2024)",
      "Najjar DM et al., EDTA chelation for calcific band keratopathy: results and long-term follow-up (Am J Ophthalmol 2004;137:1056-64)",
      "EyeRounds Online Atlas of Ophthalmology (University of Iowa)"
    ]
  }
]);

G.OPH.photos = G.OPH.photos || {};
(function (add) { Object.keys(add).forEach(function (k) { G.OPH.photos[k] = (G.OPH.photos[k] || []).concat(add[k]); }); })({
  "c-dystrophies": [
    { id: "OPH-368", caption: "Dystrophie granulaire de type 1 à la fente lumineuse", look: "Décris les opacités et la cornée entre elles, le long et autour du faisceau.", reveal: [
      "Opacités blanches arrondies ou en petits anneaux, bien délimitées",
      "Cornée claire entre les opacités",
      "Aucun vaisseau dans la cornée",
      "La fente fine sert à situer la profondeur : stroma antérieur dans cette dystrophie"
    ] },
    { id: "OPH-373", caption: "Dystrophie grillagée : lignes ramifiées dans la cornée centrale", look: "Observe la forme des opacités : points, lignes ou voile ?", reveal: [
      "Lignes fines, blanches et ramifiées qui s’entrecroisent devant la pupille et l’iris",
      "Aspect de filaments qui brillent, surtout au centre",
      "Aucun vaisseau dans la cornée",
      "Ces lignes sont de l’amyloïde (rouge Congo)"
    ] },
    { id: "OPH-374", caption: "Dystrophie maculaire en éclairage à fente large", look: "Regarde la cornée entre les taches : est-elle claire comme dans la granulaire ?", reveal: [
      "Taches gris-blanc mal délimitées au centre",
      "Voile diffus entre les taches : la cornée n’est pas claire entre elles",
      "Aucun vaisseau",
      "Contraste avec la granulaire (stroma clair entre les grains) ; dans la maculaire, le voile atteint le limbe"
    ] },
    { id: "OPH-379", caption: "Dystrophie de Reis-Bücklers ; érosions récidivantes chroniques selon la source", look: "Décris le motif de l’opacité et son étendue.", reveal: [
      "Voile gris irrégulier, à motif réticulé, sur toute la cornée centrale",
      "Dans cette dystrophie, l’opacité siège dans la couche de Bowman, juste sous l’épithélium",
      "Légende source : syndrome d’érosions récidivantes chroniques",
      "PTK possible, mais récidive fréquente"
    ] },
    { id: "OPH-358", caption: "Dystrophie polymorphe postérieure en rétroillumination", look: "Sur le reflet rouge du fond d’œil, cherche une petite lésion qui se découpe.", reveal: [
      "Petite lésion translucide près du centre du reflet rouge",
      "Le reste de la cornée paraît clair",
      "Selon la source, lésion typique de DPP, à la face postérieure de la cornée",
      "La rétroillumination révèle des lésions presque invisibles en éclairage direct"
    ] },
    { id: "OPH-342", caption: "Dystrophie polymorphe postérieure en microscopie spéculaire", look: "Repère la mosaïque de cellules endothéliales, puis ce qui l’interrompt.", reveal: [
      "Mosaïque grise de cellules endothéliales en arrière-plan",
      "Zones plus sombres, arrondies ou en bande, qui interrompent la mosaïque",
      "Selon la source : aspect classique des lésions de DPP",
      "En spéculaire, tout ce qui n’est pas une cellule saine paraît sombre, comme les guttae"
    ] }
  ],
  "c-depots": [
    { id: "OPH-327", caption: "Arc cornéen : anneau de lipides en périphérie de la cornée", look: "Fais le tour de la cornée périphérique.", reveal: [
      "Anneau gris-blanc dans la cornée périphérique, sur toute la circonférence",
      "Cornée centrale claire, iris bien visible",
      "Classiquement, une mince bande claire (intervalle lucide) le sépare du limbe",
      "Après 50 ans, souvent banal ; avant, bilan lipidique"
    ] },
    { id: "OPH-362", caption: "Cornée verticillée : lignes en tourbillon dans l’épithélium", look: "Sur le fond noir de la pupille, suis les fines lignes jusqu’à leur point de départ.", reveal: [
      "Fines lignes brun doré, ramifiées, en tourbillon",
      "Elles convergent vers un point un peu sous le centre de la pupille",
      "Vues contre la pupille dilatée, comme en rétroillumination",
      "Causes à chercher : amiodarone, hydroxychloroquine, maladie de Fabry"
    ] },
    { id: "OPH-352", caption: "Kératopathie lipidique après zona ophtalmique chronique", look: "Décris la couleur et la position du dépôt, puis demande-toi d’où il vient.", reveal: [
      "Dépôt jaune crème dense près du bord de la pupille, en haut à droite sur la photo",
      "Voile blanchâtre autour du dépôt",
      "Vaisseaux nourriciers peu visibles ici : les chercher en fente fine",
      "Contexte source : zona ophtalmique chronique, qui vascularise la cornée"
    ] },
    { id: "OPH-370", caption: "Kératopathie cristalline infectieuse dans une greffe transfixiante", look: "Repère le type de chirurgie, puis décris l’opacité blanche.", reveal: [
      "Points de suture radiaires tout autour du greffon : greffe transfixiante",
      "Opacité blanche ramifiée, d’aspect plumeux, en bas à gauche dans le greffon (sur la photo)",
      "Rougeur légère seulement, selon la légende source",
      "Streptocoques viridans le plus souvent : culture et antibiotiques prolongés"
    ] },
    { id: "OPH-365", caption: "Imprégnation hématique après un hyphéma important et prolongé", look: "Compare la couleur de la cornée avec celle d’une cornée normale.", reveal: [
      "Cornée centrale teintée brun-jaune (ambre), sur les deux vues",
      "Sur la vue de droite, zone blanchâtre en haut du disque teinté",
      "Œil rouge sur la vue de gauche",
      "L’éclaircissement se fait lentement, de la périphérie vers le centre"
    ] },
    { id: "OPH-372", caption: "Maladie de Wilson : cataracte en tournesol selon la source", look: "Au-delà de la cornée, regarde le cristallin derrière la pupille dilatée.", reveal: [
      "Disque central gris-vert dans le cristallin",
      "Opacités en pétales qui rayonnent du centre : aspect de tournesol",
      "Ce dépôt de cuivre sous la capsule antérieure accompagne habituellement l’anneau de Kayser-Fleischer",
      "L’anneau se cherche en périphérie de la cornée, parfois seulement en gonioscopie"
    ] }
  ]
});

G.OPH.quiz = (G.OPH.quiz || []).concat([
  {
    id: "B-201", module: "B", topic: "c-dystrophies", type: "image", level: 1, trap: false,
    stem: "Vu pour un renouvellement de lunettes : vision 6/6 aux deux yeux, jamais de douleur. Un parent a une cornée semblable. Voici sa cornée. Quel est le diagnostic le plus probable ?",
    figure: { type: "photo", id: "OPH-345" },
    options: ["Dystrophie grillagée de type 1", "Dystrophie maculaire", "Dystrophie granulaire de type 1", "Kératopathie cristalline infectieuse"],
    answer: 2,
    explain: "Opacités blanches nettes en « miettes de pain » dans la cornée centrale, stroma clair entre elles, transmission dominante et vision conservée : dystrophie granulaire de type 1 (gène TGFBI). Ses dépôts sont hyalins (trichrome de Masson).",
    why: [
      "Grillagée : lignes fines ramifiées et érosions douloureuses, pas des grains arrondis.",
      "Maculaire : voile diffus jusqu’au limbe entre des taches floues, vision basse tôt, récessive.",
      "Exact : grains nets, intervalles clairs, histoire familiale dominante.",
      "Infection cristalline : cristaux ramifiés dans un greffon sous stéroïde, unilatérale, non familiale."
    ]
  },
  {
    id: "B-202", module: "B", topic: "c-dystrophies", type: "image", level: 2, trap: false,
    stem: "Baisse lente de la vision aux deux yeux chez un adulte ; un parent a eu une greffe de cornée. Voici un des yeux. Quelle complication est la plus typique de cette dystrophie ?",
    figure: { type: "photo", id: "OPH-373" },
    options: ["Érosions épithéliales récidivantes", "Glaucome par synéchies de l’angle", "Perforation cornéenne spontanée", "Néovascularisation stromale profonde"],
    answer: 0,
    explain: "Lignes ramifiées et réfringentes d’amyloïde : dystrophie grillagée de type 1 (TGFBI). Les dépôts sous l’épithélium défont son ancrage : les érosions récidivantes douloureuses y sont fréquentes, souvent tôt dans la vie.",
    why: [
      "Exact : l’amyloïde superficielle fragilise l’ancrage de l’épithélium.",
      "Synéchies et glaucome : dystrophie polymorphe postérieure ou syndrome ICE, pas grillagée.",
      "Les dystrophies stromales n’amincissent pas la cornée au point de la perforer spontanément.",
      "Une dystrophie ne s’accompagne pas de vaisseaux ; des vaisseaux orientent vers une cicatrice."
    ]
  },
  {
    id: "B-203", module: "B", topic: "c-dystrophies", type: "image", level: 3, trap: false,
    stem: "Vision 6/24 aux deux yeux et photophobie depuis l’adolescence. Les parents, cousins germains, ont des cornées normales. Pachymétrie centrale : 470 µm. Voici sa cornée. Quelle combinaison décrit le mieux cette dystrophie ?",
    figure: { type: "photo", id: "OPH-374" },
    options: ["TGFBI, dépôts hyalins, rouge au trichrome de Masson", "TGFBI, amyloïde, biréfringence au rouge Congo", "Gène TCF4, guttae, transmission dominante", "CHST6, mucopolysaccharides, bleu alcian positif"],
    answer: 3,
    explain: "Taches mal limitées sur un voile stromal diffus (qui atteint le limbe dans cette dystrophie), cornée mince, vision basse tôt, parents consanguins non atteints : dystrophie maculaire, autosomique récessive (gène CHST6). Les mucopolysaccharides (glycosaminoglycanes) prennent le bleu alcian : « Marilyn Monroe Always ».",
    why: [
      "Granulaire : stroma clair entre les grains, dominante, épaisseur cornéenne normale.",
      "Grillagée : lignes ramifiées et érosions, transmission dominante.",
      "Fuchs : guttae et cornée épaissie par l’œdème après 50 ans, pas une cornée mince chez un jeune adulte.",
      "Exact : récessive, voile jusqu’au limbe, cornée mince, bleu alcian."
    ]
  },
  {
    id: "B-204", module: "B", topic: "c-dystrophies", type: "cat", level: 2, trap: true,
    stem: "Homme de 29 ans, candidat au LASIK : myopie stable de −4,00 D, topographie normale. À la lampe, quelques petites opacités blanches en flocons et deux courtes lignes dans le stroma antérieur, aux deux yeux. Son père « a des taches sur les cornées ». Quelle est la meilleure conduite ?",
    figure: null,
    options: ["LASIK permis, car la topographie est normale", "Pas de chirurgie réfractive ; test génétique TGFBI", "PKR avec mitomycine C plutôt que LASIK", "PTK préventive, puis LASIK dans trois mois"],
    answer: 1,
    explain: "Opacités en flocons et lignes, bilatérales et familiales : dystrophie d’Avellino (granulaire de type 2, TGFBI) à exclure. Le traumatisme du LASIK fait proliférer les dépôts à l’interface du volet et peut coûter beaucoup de vision : on confirme par test génétique et on déconseille la chirurgie réfractive cornéenne.",
    why: [
      "Piège : la topographie ne voit pas une dystrophie stromale ; le LASIK aggrave les dépôts TGFBI.",
      "Exact : confirmer la mutation et éviter le laser réfractif cornéen.",
      "Les dépôts peuvent aussi revenir après une ablation de surface ; la chirurgie réfractive reste déconseillée.",
      "La PTK retire des dépôts sans changer le gène ; le volet du LASIK reste à proscrire."
    ]
  },
  {
    id: "B-205", module: "B", topic: "c-depots", type: "image", level: 1, trap: false,
    stem: "Irritation et vision trouble des deux yeux depuis des mois. Jamais d’uvéite ni de chirurgie oculaire. Voici un de ses yeux. Quel bilan sanguin est le plus pertinent ?",
    figure: { type: "photo", id: "OPH-299" },
    options: ["Bilan lipidique et glycémie à jeun", "Calcium, phosphore, PTH et créatinine", "Céruloplasmine et cuivre urinaire", "Sérologie syphilis et anticorps antinucléaires"],
    answer: 1,
    explain: "Plaque blanche crayeuse entre les paupières, percée de trous : kératopathie en bande (calcium dans la couche de Bowman). Sans cause oculaire (uvéite, phtise, huile de silicone), on cherche une hypercalcémie ou une hyperphosphatémie : calcium, phosphore, PTH et fonction rénale. La source de cette photo mentionne une hyperparathyroïdie.",
    why: [
      "Lipides : arc gris-blanc périphérique ou dépôt jaune près de vaisseaux, pas une bande crayeuse.",
      "Exact : hyperparathyroïdie ou insuffisance rénale favorisent le dépôt de calcium.",
      "Cuivre : anneau brun-vert de la Descemet périphérique (Wilson), pas une bande blanche.",
      "Utile pour une kératite interstitielle ou un enfant avec uvéite ; ici, adulte sans uvéite."
    ]
  },
  {
    id: "B-206", module: "B", topic: "c-depots", type: "image", level: 1, trap: false,
    stem: "Vu pour une cataracte débutante. Vision 6/9, aucun symptôme cornéen. Voici sa cornée, éclairée contre la pupille dilatée. Quel médicament cherches-tu d’abord dans sa liste ?",
    figure: { type: "photo", id: "OPH-363" },
    options: ["Tamsulosine", "Topiramate", "Éthambutol", "Amiodarone"],
    answer: 3,
    explain: "Fines lignes brun doré en tourbillon dans l’épithélium : cornée verticillée. L’amiodarone en est la cause classique (aussi hydroxychloroquine, maladie de Fabry). Elle gêne rarement la vision et n’oblige pas à cesser le médicament ; une baisse de vision ou une papille gonflée feraient plutôt penser à une neuropathie optique.",
    why: [
      "Tamsulosine : syndrome de l’iris flasque peropératoire (floppy iris), cornée normale.",
      "Topiramate : effusion ciliochoroïdienne et fermeture de l’angle bilatérale.",
      "Éthambutol : neuropathie optique toxique, cornée normale.",
      "Exact : dépôts épithéliaux en tourbillon, très fréquents sous amiodarone."
    ]
  },
  {
    id: "B-207", module: "B", topic: "c-depots", type: "image", level: 2, trap: false,
    stem: "Traité depuis 6 jours pour un ulcère bactérien avec des gouttes de ciprofloxacine aux heures. L’infiltrat ne grossit pas et la douleur diminue, mais une plaque blanche crayeuse est apparue dans le lit de l’ulcère. Voici l’œil, avec fluorescéine. Quelle est l’explication la plus probable ?",
    figure: { type: "photo", id: "OPH-364" },
    options: ["Précipité du médicament dans l’ulcère", "Surinfection fongique filamenteuse", "Kératopathie en bande aiguë", "Kératopathie cristalline infectieuse"],
    answer: 0,
    explain: "La ciprofloxacine topique fréquente peut précipiter en plaque blanche crayeuse superficielle dans le défaut épithélial ; elle retarde la fermeture sans signer une aggravation. Si l’infiltrat et la réaction ne progressent pas, on change d’antibiotique ; au moindre doute, on recultive.",
    why: [
      "Exact : dépôt médicamenteux, avec infiltrat stable et douleur en baisse.",
      "Champignon : infiltrat gris à bords plumeux, lésions satellites, progression malgré l’antibiotique.",
      "La bande calcique se forme habituellement en mois, dans la Bowman entre les paupières, pas dans le lit d’un ulcère sous ciprofloxacine.",
      "Infection cristalline : cristaux ramifiés dans le stroma, souvent sous un épithélium intact, sur greffe."
    ]
  },
  {
    id: "B-208", module: "B", topic: "c-depots", type: "diagnostic", level: 2, trap: true,
    stem: "Étudiante de 19 ans dirigée pour « anneau de Fleischer bilatéral ». Elle a des tremblements récents et des enzymes hépatiques élevées. Topographie normale. À la lampe : anneau brun-vert à la périphérie de la cornée, plus marqué en haut et en bas. Où est le dépôt et de quoi est-il fait ?",
    figure: null,
    options: ["Fer dans l’épithélium basal, autour d’un cône", "Calcium dans la couche de Bowman, entre les paupières", "Cuivre dans la membrane de Descemet périphérique", "Lipides dans le stroma périphérique, avec intervalle clair"],
    answer: 2,
    explain: "Anneau brun-vert périphérique, tremblements et atteinte hépatique chez une jeune : anneau de Kayser-Fleischer, cuivre dans la Descemet périphérique (maladie de Wilson). L’anneau de Fleischer du kératocône est du fer épithélial autour du cône, avec une topographie anormale. On demande céruloplasmine et cuivre urinaire avec l’interniste ou l’hépatologue.",
    why: [
      "Piège : c’est l’anneau de Fleischer du kératocône ; topographie normale et contexte l’écartent.",
      "Calcium : bande blanche crayeuse horizontale, pas un anneau brun-vert.",
      "Exact : anneau de Kayser-Fleischer, maladie de Wilson.",
      "Lipides : arc cornéen gris-blanc, sans atteinte hépatique ni neurologique."
    ]
  }
]);

G.OPH.glossary = G.OPH.glossary || {};
Object.assign(G.OPH.glossary, {
  "IC3D": "Classification internationale des dystrophies cornéennes (International Committee for Classification of Corneal Dystrophies) : range les dystrophies selon la couche atteinte et le gène.",
  "TGFBI": "Gène d’une protéine de la cornée (kératoépithéline) ; ses mutations causent Reis-Bücklers, dystrophies granulaires et grillagée ; le LASIK aggrave ces dépôts.",
  "dystrophie granulaire": "Dystrophie stromale dominante (TGFBI) : opacités blanches nettes en « miettes de pain », stroma clair entre elles ; dépôts hyalins (trichrome de Masson).",
  "dystrophie grillagée": "Dystrophie stromale (lattice) : lignes ramifiées d’amyloïde dans le stroma, érosions récidivantes fréquentes ; type 1 lié au gène TGFBI.",
  "dystrophie maculaire": "Dystrophie stromale récessive (CHST6) : voile diffus jusqu’au limbe, taches mal limitées, cornée mince ; mucopolysaccharides (bleu alcian).",
  "dystrophie d’Avellino": "Dystrophie granulaire de type 2 (TGFBI) : opacités en flocons et en lignes ; le LASIK aggrave fortement les dépôts.",
  "dystrophie de Reis-Bücklers": "Dystrophie de la couche de Bowman (TGFBI) : opacités grises réticulées, érosions douloureuses dès l’enfance, récidive rapide après PTK ou greffe.",
  "dystrophie polymorphe postérieure": "Dystrophie endothéliale dominante : vésicules, bandes ou plaques sur la Descemet ; parfois synéchies de l’angle et glaucome.",
  "DPP": "Dystrophie polymorphe postérieure : vésicules ou bandes de la Descemet, héréditaire, parfois associée à un glaucome.",
  "CHED": "Dystrophie endothéliale héréditaire congénitale : cornées troubles et épaissies dès la naissance ; à distinguer du glaucome congénital.",
  "amyloïde": "Protéine mal repliée en fibrilles ; colorée par le rouge Congo, avec biréfringence vert pomme en lumière polarisée.",
  "kératopathie en bande": "Dépôt de calcium dans la couche de Bowman, en bande horizontale entre les paupières ; uvéite chronique, phtise, huile de silicone, hypercalcémie.",
  "EDTA": "Chélateur (acide éthylène-diamine-tétra-acétique) qui capte le calcium ; appliqué sur la cornée grattée pour dissoudre une kératopathie en bande.",
  "arc cornéen": "Anneau gris-blanc de lipides dans le stroma périphérique, séparé du limbe par un intervalle clair ; avant 50 ans, bilan lipidique.",
  "intervalle lucide": "Bande de cornée claire entre un dépôt périphérique (arc, bande calcique) et le limbe.",
  "cornée verticillée": "Lignes brun doré en tourbillon dans l’épithélium ; amiodarone, hydroxychloroquine ou maladie de Fabry ; gêne rarement la vision.",
  "kératopathie lipidique": "Dépôt jaune de lipides dans le stroma, qui fuit de vaisseaux anormaux (après HSV, zona, trauma) ; on traite en fermant les vaisseaux.",
  "imprégnation hématique": "Coloration brun-rouge puis verdâtre du stroma par le sang d’un hyphéma prolongé avec PIO élevée ; s’éclaircit lentement de la périphérie vers le centre.",
  "anneau de Kayser-Fleischer": "Anneau brun-vert ou doré de cuivre dans la Descemet périphérique, d’abord en haut et en bas ; signe de la maladie de Wilson.",
  "anneau de rouille": "Halo brun d’oxyde de fer autour d’un corps étranger ferreux cornéen ; se forme en quelques heures et se retire à la fraise.",
  "kératopathie cristalline infectieuse": "Infection stromale à cristaux blancs ramifiés, peu inflammatoire, surtout à streptocoques viridans dans un greffon sous stéroïde ; culture obligatoire.",
  "kératite interstitielle": "Inflammation du stroma sans ulcère, avec vaisseaux profonds ; syphilis congénitale, HSV, zona, tuberculose ; laisse des vaisseaux fantômes.",
  "vaisseaux fantômes": "Vaisseaux stromaux profonds vides de sang, cicatrices d’une ancienne kératite interstitielle ; mieux vus en rétroillumination.",
  "haze": "Voile sous-épithélial (fibrose) après chirurgie réfractive de surface ou PTK ; réduit par la mitomycine C.",
  "PKR": "Photokératectomie réfractive (PRK) : laser excimer appliqué en surface après retrait de l’épithélium, sans volet.",
  "LASIK": "Chirurgie réfractive (laser-assisted in situ keratomileusis) : laser excimer appliqué dans le stroma sous un volet cornéen découpé puis replacé."
});
