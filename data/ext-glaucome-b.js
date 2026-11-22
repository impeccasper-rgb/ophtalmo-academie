var G = (typeof window !== 'undefined') ? window : globalThis;
G.OPH = G.OPH || {};

/* ===== Fiche g-dev ===== */
G.OPH.fiches = (G.OPH.fiches || []).concat([
{
  id: "g-dev",
  module: "C",
  order: 10,
  title: "Glaucomes de l’enfant, anomalies du développement et syndrome ICE",
  en: "Childhood glaucoma, anterior segment dysgenesis and iridocorneal endothelial syndrome",
  tags: ["urgent", "highyield", "piege"],
  oneLiner: "Nourrisson qui larmoie, fuit la lumière et serre les paupières, cornée large ou trouble : glaucome congénital jusqu’à preuve du contraire.",
  definition: "Angle mal formé dès la naissance, ou membrane ICE chez l’adulte. Avant 3 ans, la PIO étire tout l’œil.",
  anatomy: {
    text: "L’angle se forme pendant la vie fœtale à partir de la crête neurale, qui donne le trabéculum (filtre spongieux), la ligne de Schwalbe (bord de la Descemet) et le stroma irien. Un arrêt de ce développement laisse un trabéculum immature ou des brides d’iris tendues jusqu’à Schwalbe.",
    figure: {
      type: "eye",
      highlight: ["angle", "trabeculum", "schlemm", "iris", "cornee"]
    }
  },
  causal: {
    title: "De l’angle anormal à l’œil abîmé",
    steps: [
      { label: "Angle mal formé ou recouvert", detail: "Trabéculodysgénésie (glaucome congénital primaire), brides d’Axenfeld-Rieger, membrane de l’ICE ou pression veineuse épisclérale haute (Sturge-Weber).", kind: "cause" },
      { label: "PIO élevée", detail: "L’humeur aqueuse sort mal : la pression monte.", kind: "mecanisme" },
      { label: "Globe élastique étiré", detail: "Avant 3 ans environ : œil agrandi (buphtalmie), cornée large, myopie par allongement de l’œil.", kind: "lesion" },
      { label: "Descemet rompue, cornée œdémateuse", detail: "L’eau entre par les ruptures (stries de Haab) : cornée trouble, larmoiement, photophobie.", kind: "signe" },
      { label: "Amblyopie, neuropathie optique", detail: "Cornée trouble et myopie empêchent le cerveau d’apprendre à voir ; la papille s’excave.", kind: "complication" }
    ],
    levers: [
      { at: 0, label: "Chirurgie de l’angle", detail: "Goniotomie ou trabéculotomie : ouvre le filtre immature ; traitement de base du glaucome congénital primaire." },
      { at: 1, label: "Gouttes en pont", detail: "Baissent la PIO et éclaircissent la cornée en attendant la chirurgie ; rarement suffisantes seules." },
      { at: 4, label: "Lunettes et occlusion", detail: "Corriger la réfraction et traiter l’amblyopie (cacher le bon œil) : aussi important que la PIO pour la vision finale." }
    ]
  },
  risk: [
    "Antécédents familiaux, consanguinité (forme primaire souvent récessive ; gène CYP1B1)",
    "Parent atteint d’Axenfeld-Rieger ou d’aniridie (transmission dominante)",
    "Angiome plan facial dans le territoire de V1 (nerf ophtalmique), surtout à la paupière supérieure",
    "Chirurgie de cataracte congénitale",
    "Syndrome ICE : femme d’âge moyen, un seul œil, sans histoire familiale"
  ],
  presentation: [
    "Triade du nourrisson : épiphora (larmoiement), photophobie, blépharospasme (paupières serrées)",
    "Œil « grand et beau », cornée large ou bleutée ; souvent bilatéral",
    "Glaucome juvénile à angle ouvert (plus tard dans l’enfance) : silencieux, sans agrandissement de l’œil",
    "Sturge-Weber : glaucome du côté de l’angiome, précoce (angle anormal) ou tardif (pression veineuse épisclérale)",
    "Syndrome ICE : vision floue le matin (œdème cornéen), pupille déformée, PIO élevée d’un seul côté",
    "Cornée qui s’opacifie brusquement : rupture de la Descemet"
  ],
  exam: {
    signs: [
      { sign: "Diamètre cornéen augmenté", why: "≈ 10 mm à la naissance ; plus de 12 mm avant 1 an est très suspect. Comparer les deux yeux." },
      { sign: "Stries de Haab", why: "Ruptures de la Descemet horizontales ou concentriques au limbe ; celles des forceps sont verticales ou obliques." },
      { sign: "Embryotoxon postérieur avec brides iriennes", why: "Seul (Schwalbe saillante et avancée) : fréquent et bénin. Avec brides, corectopie, polycorie, anomalies dentaires ou ombilicales : Axenfeld-Rieger." },
      { sign: "Endothélium en argent martelé, synéchies hautes", why: "Syndrome ICE, d’un seul côté : synéchies souvent au-delà de Schwalbe, corectopie, trous et nodules de l’iris." },
      { sign: "Procès iriens ou synéchies ?", why: "Procès iriens : fins, en dentelle, angle visible (variante normale). Synéchies : larges, en tente, masquent le trabéculum." },
      { sign: "Vaisseaux épiscléraux dilatés, fond « sauce tomate »", why: "Sturge-Weber : pression veineuse épisclérale élevée et hémangiome choroïdien (risque d’effusion en chirurgie)." }
    ],
    tests: [
      { test: "Examen sous anesthésie (EUA)", when: "Tout nourrisson suspect, sans tarder", read: "PIO (modifiée par les anesthésiques), diamètre cornéen, gonioscopie, réfraction, papille ; chirurgie souvent dans la même séance." },
      { test: "Rétinoscopie (réfraction objective)", when: "Au diagnostic et au suivi", read: "Myopie qui augmente : l’œil s’allonge, PIO mal contrôlée." },
      { test: "Gonioscopie", when: "Toute anomalie du segment antérieur", read: "Congénital : iris inséré haut. ICE : synéchies au-delà de Schwalbe. Aniridie : moignon d’iris." },
      { test: "Microscopie spéculaire", when: "Adulte : œdème unilatéral ou corectopie", read: "Cellules ICE grandes, sombres, à point central clair." }
    ]
  },
  ddx: [
    { dx: "Obstruction congénitale du canal lacrymonasal", clue: "Larmoiement sans photophobie ; cornée claire, de taille normale." },
    { dx: "Mégalocornée", clue: "Cornée large mais claire, sans stries ; PIO et papille normales." },
    { dx: "Stries obstétricales (forceps)", clue: "Verticales ou obliques, unilatérales ; diamètre cornéen normal." },
    { dx: "Autres cornées troubles du nouveau-né", clue: "anomalie de Peters (opacité centrale, adhérences iridocornéennes), dystrophie endothéliale congénitale, mucopolysaccharidoses." },
    { dx: "Dystrophie polymorphe postérieure (vs ICE)", clue: "Bilatérale, familiale ; vésicules et bandes « en rails » à la Descemet." },
    { dx: "Axenfeld-Rieger (vs ICE)", clue: "Bilatéral, congénital, familial ; embryotoxon, signes dentaires ou ombilicaux." }
  ],
  redFlags: [
    "Nourrisson avec larmoiement et photophobie, ou cornée large ou trouble : référence urgente",
    "Aniridie sans histoire familiale : dépister une tumeur de Wilms (rein)",
    "Angiome plan de V1 : PIO et papilles dès la naissance, puis régulièrement"
  ],
  cat: {
    vignette: "Nourrisson de 4 mois qui larmoie, fuit la lumière et plisse les yeux. Ses parents trouvent ses yeux « grands et beaux ». Cornées larges et un peu troubles.",
    algo: [
      { q: "Nourrisson ou jeune enfant ?", yes: "", no: "", yesGo: 1, noGo: 4 },
      { q: "Triade, cornée large ou trouble ?", yes: "Référer dans les 24 h : examen sous anesthésie ; gouttes en pont.", no: "Larmoiement, cornée claire : obstruction lacrymonasale probable.", yesGo: 2 },
      { q: "Cornée assez claire pour voir l’angle ?", yes: "Goniotomie ou trabéculotomie.", no: "Trabéculotomie par voie externe.", yesGo: 3, noGo: 3 },
      { q: "Échec de la chirurgie de l’angle ?", yes: "Reprise, tube, trabéculectomie avec MMC ou cyclophotocoagulation.", no: "Suivi : PIO, diamètre, réfraction, amblyopie." },
      { q: "Adulte : œdème, corectopie, synéchies d’un côté ?", yes: "ICE : spéculaire, gouttes, tube si échec ; DSAEK ou DMEK si œdème.", no: "Penser Axenfeld-Rieger, dystrophie polymorphe postérieure ou glaucome juvénile." }
    ],
    phases: [
      {
        phase: "medical",
        items: ["En pont : timolol 0,25 %, dorzolamide, analogue des prostaglandines", "**Brimonidine contre-indiquée avant 2 ans** (somnolence, hypotonie, apnée)"]
      },
      {
        phase: "chirurgie",
        items: [
          "Congénital primaire : goniotomie ou trabéculotomie en première intention",
          "Échecs, Axenfeld-Rieger, aniridie : tube ou trabéculectomie avec MMC ; cyclophotocoagulation si réfractaire",
          "Sturge-Weber : échographie B avant, baisse progressive de la PIO en salle",
          "ICE : laser trabéculaire inefficace, tube souvent nécessaire ; greffe endothéliale pour l’œdème"
        ]
      },
      {
        phase: "suivi",
        items: ["Lunettes et occlusion pour l’amblyopie", "Suivi **à vie** ; chez le nourrisson, l’excavation peut régresser si la PIO est contrôlée"]
      }
    ],
    local: "Au Québec : centres pédiatriques tertiaires (ex. CHU Sainte-Justine, Hôpital de Montréal pour enfants, CHU de Québec) ; si tu le soupçonnes, appelle le patron de garde."
  },
  treatments: [
    { name: "Goniotomie", how: "Sous lentille de gonioscopie, une lame incise le trabéculum immature sur environ un tiers de l’angle.", why: "Congénital primaire, cornée claire.", pros: "Aucune cicatrice conjonctivale ; répétable.", cons: "Il faut voir l’angle.", cx: "Hyphéma, lésion de l’iris ou du cristallin.", dose: "Sous lentille de gonioscopie : incision du trabéculum sur ≈ 1/3 de l’angle.", refer: "Congénital primaire à cornée claire : centre pédiatrique tertiaire, rapidement.", pitfall: "Il faut voir l’angle : impossible si la cornée est trouble.", qc: "Québec : CHU Sainte-Justine, Hôpital de Montréal pour enfants, CHU de Québec ; appeler le patron de garde." },
    { name: "Trabéculotomie", how: "Par voie externe, une sonde, ou un fil sur 360°, passé dans le canal de Schlemm déchire sa paroi interne et le trabéculum.", why: "Congénital primaire, même avec une cornée trouble.", pros: "Possible malgré l’œdème ; 360° en une séance.", cons: "Canal parfois introuvable.", cx: "Hyphéma transitoire, fausse route.", dose: "Sonde ou fil sur 360° passé dans le canal de Schlemm.", refer: "Congénital primaire, même avec une cornée trouble.", pitfall: "Canal parfois introuvable : fausse route possible." },
    { name: "Gouttes en pont", how: "Réduisent la production d’humeur aqueuse ou augmentent son écoulement.", why: "Avant la chirurgie ou en appoint.", pros: "Éclaircissent la cornée pour l’EUA.", cons: "Rarement suffisantes seules.", cx: "Timolol : apnée, bradycardie, bronchospasme ; brimonidine : dépression du système nerveux central.", dose: "Timolol 0,25 % BID, dorzolamide 2 % TID, en pont avant la chirurgie.", refer: "Avant la chirurgie ou en appoint.", pitfall: "Brimonidine contre-indiquée avant 2 ans (dépression du SNC) ; timolol : apnée." },
    { name: "Tube de drainage ou trabéculectomie", how: "Dérivent l’aqueuse sous la conjonctive (tube et plaque, ou volet scléral).", why: "Échec de la chirurgie de l’angle, glaucomes secondaires, ICE.", pros: "Baisse forte de la PIO.", cons: "Cicatrisation vigoureuse de l’enfant.", cx: "Hypotonie, infection, tube bouché (ICE), effusion (Sturge-Weber).", dose: "Tube et plaque, ou trabéculectomie avec MMC.", refer: "Échec de la chirurgie de l’angle, glaucomes secondaires, ICE.", pitfall: "Cicatrisation vigoureuse de l’enfant : échec plus fréquent." }
  ],
  pearls: [
    { q: "Comment distinguer les stries de Haab des stries obstétricales ?", a: "Haab : horizontales ou concentriques au limbe, dans un œil agrandi. Forceps : verticales ou obliques, unilatérales, diamètre cornéen normal." },
    { q: "Pourquoi pas de brimonidine chez le nourrisson ?", a: "Elle traverse la barrière hémato-encéphalique : somnolence, hypotonie, apnée, bradycardie. Contre-indiquée avant 2 ans ; prudence chez le petit enfant de faible poids." },
    { q: "Œdème cornéen et pupille déformée d’un seul côté chez une femme de 45 ans ?", a: "Syndrome ICE d’abord : unilatéral, acquis, non familial. Dystrophie polymorphe postérieure et Axenfeld-Rieger : bilatéraux, congénitaux, familiaux. La microscopie spéculaire tranche." }
  ],
  mnemonic: { title: "ICE : 3 variantes", text: "**I**ris nevus (Cogan-Reese : nodules) ; **C**handler (œdème cornéen) ; **E**ssential iris atrophy (trous, corectopie)." },
  compare: {
    title: "Angle normal vs synéchies antérieures périphériques",
    normal: {
      figure: { type: "gonio", grade: 4, pigment: "light" },
      caption: "Angle ouvert : bande ciliaire, éperon, trabéculum et Schwalbe visibles."
    },
    patho: {
      figure: { type: "gonio", grade: 4, pigment: "light", pas: true },
      caption: "Synéchies antérieures périphériques : l’iris adhère et masque le trabéculum.",
      reveal: [
        "Adhérences larges, en tente, qui cachent le trabéculum",
        "Dans l’ICE, elles montent souvent au-delà de la ligne de Schwalbe",
        "Elles ne s’ouvrent pas à l’indentation",
        "Les procès iriens, eux, sont fins et laissent voir l’angle"
      ]
    }
  },
  sources: [
    "World Glaucoma Association. Childhood Glaucoma, Consensus Series 9 (Weinreb RN, Grajewski A, Papadopoulos M, Grigg J, Freedman S, éd. Kugler 2013)",
    "American Academy of Ophthalmology. Basic and Clinical Science Course, Section 10 : Glaucoma",
    "Shields MB. Progressive essential iris atrophy, Chandler’s syndrome, and the iris nevus (Cogan-Reese) syndrome: a spectrum of disease (Surv Ophthalmol 1979)"
  ],
  treatment: {
    first: [
      "**Toi** : nourrisson qui larmoie et fuit la lumière : comparer la taille et la clarté des cornées.",
      "**Ophtalmologiste** : examen sous anesthésie, chirurgie de l’angle ; gouttes en pont (timolol 0,25 %)."
    ],
    refer: "Référer en ophtalmologie : dans les 24 h — nourrisson avec triade ou cornée large ou trouble.",
    pitfall: ["**Brimonidine** : contre-indiquée avant 2 ans (dépression du SNC).", "**Larmoiement** mis sur le compte du canal lacrymal sans regarder la cornée."],
    qc: "Québec : CHU Sainte-Justine, Hôpital de Montréal pour enfants, CHU de Québec ; appeler le patron de garde."
  }
}
]);

/* ===== Photos ===== */
G.OPH.photos = G.OPH.photos || {};
(function (add) { Object.keys(add).forEach(function (k) { G.OPH.photos[k] = (G.OPH.photos[k] || []).concat(add[k]); }); })({
  "g-dev": [
    { id: "OPH-325", caption: "Glaucome congénital primaire : lignes dans la cornée, à la fente", look: "Suis les flèches dans le faisceau lumineux : que montrent-elles dans la cornée ?", reveal: ["Fines lignes blanchâtres dans la cornée, pointées par quatre flèches, dans le faisceau de la fente", "Aspect compatible avec des stries de Haab (ruptures de la Descemet), selon le diagnostic source", "Stries de Haab : horizontales ou concentriques au limbe ; stries des forceps : verticales ou obliques", "Elles persistent après la baisse de PIO et causent de l’astigmatisme"] },
    { id: "OPH-317", caption: "Embryotoxon postérieur : ligne de Schwalbe saillante et déplacée en avant", look: "Regarde la cornée périphérique, juste en dedans du limbe.", reveal: ["Ligne blanc grisâtre, courbe, parallèle au limbe, dans la cornée périphérique (côté droit de l’image)", "C’est la ligne de Schwalbe épaissie et avancée : visible sans gonioscopie", "Fréquente seule (environ 10 à 15 % de la population) et sans conséquence ; avec des brides iriennes qui s’y attachent : spectre d’Axenfeld-Rieger → gonioscopie"] },
    { id: "OPH-389", caption: "Syndrome ICE précoce : endothélium d’aspect argent martelé", look: "Observe l’endothélium dans le reflet spéculaire : est-il lisse ?", reveal: ["Endothélium finement granuleux et brillant, comme du métal martelé, au bord du reflet lumineux", "Cellules endothéliales anormales du syndrome ICE", "Rappelle les guttae de Fuchs, mais l’ICE touche un seul œil", "Confirmer en microscopie spéculaire"] },
    { id: "OPH-387", caption: "Atrophie essentielle de l’iris : corectopie ovale horizontale", look: "Regarde la forme de la pupille et l’aspect du stroma irien.", reveal: ["Pupille ovale, étirée à l’horizontale (corectopie)", "Atrophie de l’iris, selon la légende source", "La membrane endothéliale qui recouvre l’angle se contracte et tire l’iris", "À faire : gonioscopie (synéchies hautes) et PIO"] },
    { id: "OPH-318", caption: "Syndrome de Sturge-Weber : angiome plan (tache de vin) du visage", look: "Observe la peau du front et des joues : couleur, relief, limites.", reveal: ["Coloration rouge rosé, plane, du front et des joues", "Plus marquée d’un côté du front, avec une limite nette près de la ligne médiane", "Atteinte du territoire de V1 (front, paupière supérieure) : risque de glaucome du même côté", "Mesurer la PIO et examiner les papilles régulièrement"] },
    { id: "OPH-390", caption: "Sturge-Weber : hémangiome choroïdien diffus (OD) et œil adelphe", look: "Compare la couleur du fond d’œil sur les deux photos.", reveal: ["Photo de gauche (OD selon la légende) : fond rouge foncé et uniforme, dessin choroïdien masqué", "Photo de droite (œil adelphe) : fond orangé, vaisseaux choroïdiens visibles", "Aspect de fond « sauce tomate » (tomato ketchup) de l’hémangiome choroïdien diffus", "Risque d’effusion ou d’hémorragie suprachoroïdienne en chirurgie filtrante"] }
  ]
});

/* ===== QCM C-211 à C-214 ===== */
G.OPH.quiz = (G.OPH.quiz || []).concat([
  {
    id: "C-211", module: "C", topic: "g-dev", type: "image", level: 2, trap: false,
    stem: "Une femme de 42 ans consulte pour une vision floue le matin à un seul œil. La PIO est de 30 mmHg de ce côté et normale de l’autre ; l’œil adelphe est normal et il n’y a aucun antécédent familial. Voici l’iris de l’œil atteint. Quel diagnostic est le plus probable ?",
    figure: { type: "photo", id: "OPH-310" },
    options: ["Syndrome d’Axenfeld-Rieger avec hypoplasie irienne", "Iridodialyse traumatique avec récession de l’angle", "Syndrome ICE, forme atrophie essentielle de l’iris", "Dystrophie polymorphe postérieure avec adhérences"],
    answer: 2,
    explain: "Femme d’âge moyen, atteinte d’un seul œil, sans histoire familiale : pupille ovale déplacée, stroma aminci et trous de l’iris (grande zone sombre en haut à gauche, petits trous à bord pigmenté en bas à droite). C’est l’atrophie essentielle de l’iris, une variante du syndrome ICE ; le flou matinal traduit l’œdème cornéen. Chercher l’endothélium en argent martelé, les synéchies hautes, et confirmer en microscopie spéculaire.",
    why: [
      "Axenfeld-Rieger est congénital, bilatéral et souvent familial, avec embryotoxon postérieur et brides vers Schwalbe.",
      "L’iridodialyse est une désinsertion de la racine de l’iris après un choc ; ici, aucun trauma et les trous siègent dans le stroma.",
      "Exact : unilatéral, acquis, femme d’âge moyen, corectopie et trous de l’iris.",
      "La dystrophie polymorphe postérieure est bilatérale et familiale, avec vésicules et bandes à la Descemet."
    ]
  },
  {
    id: "C-212", module: "C", topic: "g-dev", type: "image", level: 2, trap: true,
    stem: "Examen de routine chez un adulte asymptomatique : AV normale, PIO normale, papilles normales. À la lampe à fente, tu remarques ceci en périphérie de la cornée. Quelle est la conduite la plus appropriée ?",
    figure: { type: "photo", id: "OPH-317" },
    options: ["Gonioscopie : chercher des brides d’iris attachées à cette ligne", "Microscopie spéculaire pour confirmer un syndrome ICE débutant", "Iridotomie périphérique au laser pour prévenir une fermeture", "Bilan lipidique sanguin pour un arc cornéen (arcus) précoce"],
    answer: 0,
    explain: "La ligne blanc grisâtre, fine, nette et courbe, parallèle au limbe en périphérie de la cornée, est un embryotoxon postérieur : la ligne de Schwalbe (bord périphérique de la Descemet) épaissie et déplacée vers l’avant, assez saillante pour être vue sans gonioscopie. Seul, il est fréquent et bénin. Si des brides d’iris s’y attachent (avec corectopie, trous de l’iris, anomalies dentaires ou ombilicales), c’est le spectre d’Axenfeld-Rieger, où le risque de glaucome est élevé : la gonioscopie tranche.",
    why: [
      "Exact : la gonioscopie montre si l’embryotoxon est isolé (rien à faire) ou si des brides d’iris montent jusqu’à lui (Axenfeld-Rieger : PIO et papilles à suivre).",
      "Le syndrome ICE touche l’endothélium d’un seul œil (argent martelé, corectopie, œdème) ; une ligne de Schwalbe saillante n’en est pas un signe.",
      "Rien n’indique un angle étroit : l’embryotoxon siège à la ligne de Schwalbe et ne ferme pas l’angle.",
      "L’arc cornéen est une bande grisâtre floue dans le stroma, séparée du limbe par une zone claire ; ici, c’est une ligne fine et nette au niveau de la Descemet. Piège classique."
    ]
  },
  {
    id: "C-213", module: "C", topic: "g-dev", type: "cat", level: 1, trap: true,
    stem: "Un nourrisson de 5 mois larmoie de l’œil droit depuis 2 mois. Ses parents notent qu’il ferme les yeux à la lumière vive et se frotte les yeux. La cornée droite paraît plus grande et légèrement bleutée par rapport à la gauche. Quelle est la conduite la plus appropriée ?",
    figure: null,
    options: ["Massage du sac lacrymal et revoir à 12 mois si le larmoiement persiste", "Brimonidine en gouttes pour baisser la PIO en attendant la croissance", "Trabéculectomie avec mitomycine C dès la première intervention", "Examen sous anesthésie rapide, puis chirurgie de l’angle si confirmé"],
    answer: 3,
    explain: "Larmoiement + photophobie + cornée large et bleutée = glaucome congénital primaire jusqu’à preuve du contraire. On réfère en urgence pour un examen sous anesthésie (PIO, diamètre cornéen, gonioscopie, papille, réfraction), suivi le plus souvent d’une goniotomie ou d’une trabéculotomie. Les gouttes ne servent que de pont.",
    why: [
      "L’obstruction lacrymonasale donne un larmoiement sans photophobie, avec une cornée claire et de taille normale ; attendre laisse s’installer amblyopie et neuropathie.",
      "Brimonidine contre-indiquée avant 2 ans (somnolence, hypotonie, apnée) ; et les gouttes ne sont qu’un pont.",
      "Chez le nourrisson, la trabéculectomie cicatrise vite et expose à vie aux risques de la bulle ; on la garde pour les échecs de la chirurgie de l’angle.",
      "Exact : confirmer sous anesthésie puis ouvrir l’angle (goniotomie ou trabéculotomie)."
    ]
  },
  {
    id: "C-214", module: "C", topic: "g-dev", type: "image", level: 3, trap: false,
    stem: "Photo peropératoire chez un jeune patient atteint de Sturge-Weber (angiome plan facial dans le territoire de V1), qui a un glaucome du même côté réfractaire aux gouttes. Une chirurgie filtrante est en cours. Quelle complication peropératoire faut-il surtout anticiper ?",
    figure: { type: "photo", id: "OPH-391" },
    options: ["Fermeture aiguë de l’angle par bloc pupillaire", "Effusion ou hémorragie suprachoroïdienne à l’ouverture", "Hyphéma massif par rupture de néovaisseaux de l’angle", "Glaucome malin par rotation antérieure du corps ciliaire"],
    answer: 1,
    explain: "La photo montre, sous la conjonctive ouverte, un réseau dense de vaisseaux épiscléraux dilatés et tortueux : la pression veineuse épisclérale est élevée, et la PIO ne peut pas descendre sous elle par le trabéculum. Avec l’hémangiome choroïdien, la chute brutale de la PIO à l’entrée dans l’œil peut provoquer une effusion choroïdienne ou une hémorragie suprachoroïdienne (expulsive). Précautions : échographie B avant, baisse progressive de la PIO, fermeture étanche.",
    why: [
      "Le glaucome de Sturge-Weber est à angle ouvert (angle anormal ou pression veineuse élevée), pas un bloc pupillaire.",
      "Exact : hémangiome choroïdien et pression veineuse élevée exposent à l’effusion ou à l’hémorragie à la décompression.",
      "Les néovaisseaux de l’angle ne font pas partie du tableau ; le saignement redouté est choroïdien.",
      "Le glaucome malin survient surtout dans les yeux courts à angle fermé ; ce n’est pas le risque propre à Sturge-Weber."
    ]
  }
]);

/* ===== Cas évolutif cas-c5 ===== */
G.OPH.cases = (G.OPH.cases || []).concat([
  {
    id: "cas-c5",
    module: "C",
    title: "Pseudophaque : brouillards à répétition et PIO en dents de scie",
    tags: ["highyield", "piege"],
    intro: "Un homme de 71 ans consulte pour des épisodes répétés de vision brouillée à l’OS (œil gauche), parfois teintée de rouge, qui durent quelques heures, depuis 6 semaines. Il a été opéré de la cataracte à cet œil il y a 4 mois : la capsule postérieure (enveloppe arrière du cristallin) s’est rompue et l’implant (lentille intraoculaire, IOL) acrylique monobloc (fait d’une seule pièce) a été placé dans le sulcus ciliaire (ciliary sulcus), l’espace entre l’iris et le corps ciliaire, devant la capsule. Il n’a jamais eu de glaucome. Aujourd’hui : AV (acuité visuelle) 6/12 (20/40) OS, 6/7,5 (20/25) OD (œil droit) ; PIO 34 mmHg OS et 15 mmHg OD.",
    steps: [
      {
        kind: "exams",
        prompt: "Quels examens fais-tu maintenant ? (choisis-en 3)",
        pick: 3,
        options: [
          { label: "OCT maculaire", result: "Profil fovéal normal, sans œdème maculaire cystoïde.", value: 1, note: "Utile après une chirurgie compliquée, car l’œdème maculaire cystoïde (liquide en petits kystes dans la macula) baisse aussi la vision ; mais il n’explique pas des épisodes de brouillard avec PIO élevée." },
          { label: "Lampe à fente avec rétro-illumination de l’iris", result: "Cellules 1+ et globules rouges en suspension dans la chambre antérieure (microhyphéma) ; défauts de transillumination radiaires et en arc, qui épousent la forme des haptiques ; pigment sur l’implant.", value: 2, note: "La rétro-illumination (lumière renvoyée par le fond d’œil) fait briller les zones où l’épithélium pigmenté de l’iris a été râpé. Des défauts qui dessinent l’implant trahissent un frottement mécanique." },
          { label: "Tomodensitométrie des orbites", result: "Normale.", value: -1, note: "Aucun indice d’atteinte orbitaire : examen inutile qui retarde l’essentiel." },
          { label: "Gonioscopie", result: "Angle ouvert sur 360°, éperon visible partout ; pigment trabéculaire dense et irrégulier ; mince couche de sang dans l’angle inférieur ; aucun vaisseau qui franchit l’éperon, aucune synéchie.", value: 2, note: "Élimine une fermeture de l’angle et des néovaisseaux de l’angle (autre cause de microhyphéma avec PIO élevée) ; sang et pigment orientent vers une source mécanique." },
          { label: "Ponction de chambre antérieure pour PCR virale (CMV, HSV, VZV)", result: "Pas faite pour l’instant.", value: 0, note: "La PCR (recherche d’ADN viral) aide devant une uvéite hypertensive sans cause évidente ; ici, un indice mécanique domine. À garder si cette piste tombe." },
          { label: "Biomicroscopie ultrasonore (UBM)", result: "L’optique de l’implant touche la face postérieure de l’iris ; une haptique repose dans le sulcus, contre le corps ciliaire.", value: 2, note: "L’UBM (échographie à haute fréquence du segment antérieur) voit derrière l’iris, là où la lampe à fente ne voit pas : elle localise le contact entre l’implant et l’uvée et guide la chirurgie." },
          { label: "Fond d’œil dilaté avec examen de la papille", result: "OS : C/D 0,5, bord neurorétinien intact ; OD : C/D 0,4. Rétine à plat.", value: 1, note: "Bon point de départ pour le nerf, à faire après la gonioscopie ; l’OCT RNFL et le champ visuel suivront." }
        ]
      },
      {
        kind: "info",
        text: "Synthèse : pseudophaque avec implant monobloc dans le sulcus, épisodes de brouillard avec PIO élevée, microhyphéma, inflammation légère, angle ouvert sans néovaisseaux et défauts de transillumination qui suivent le contour de l’implant. Photo d’exemple en rétro-illumination infrarouge : défauts radiaires, et défauts en arc qui reprennent la forme des haptiques,.",
        figure: { type: "photo", id: "OPH-301" }
      },
      {
        kind: "choice",
        prompt: "Quel diagnostic retiens-tu ?",
        options: [
          { label: "Glaucome néovasculaire débutant (néovaisseaux de l’iris)", correct: false, note: "Peut donner un microhyphéma et une PIO élevée, mais la gonioscopie ne montre aucun vaisseau qui franchit l’éperon, et rien n’évoque une ischémie rétinienne." },
          { label: "Uvéite antérieure hypertensive à cytomégalovirus", correct: false, note: "Donne une PIO élevée, quelques précipités et parfois une atrophie de l’iris, mais pas de défauts qui dessinent l’implant ni d’hyphéma à répétition. PCR si le tableau reste inexpliqué." },
          { label: "Syndrome de dispersion pigmentaire primaire", correct: false, note: "Jeune myope, atteinte bilatérale, fentes médio-périphériques sans lien avec un implant ; ici : 71 ans, un seul œil, pseudophaque." },
          { label: "Syndrome UGH (uvéite-glaucome-hyphéma) par l’implant", correct: true, note: "L’implant frotte l’iris et le corps ciliaire : inflammation (uvéite), saignements (hyphéma ou microhyphéma) et pigment libéré qui encrasse le trabéculum (PIO élevée). Les brouillards « rouges » sont typiques. Le monobloc acrylique, aux haptiques épaisses à bords carrés, n’est pas conçu pour le sulcus." },
          { label: "Endophtalmite chronique à Cutibacterium acnes", correct: false, note: "Inflammation granulomateuse persistante, plaque blanche dans le sac capsulaire ; pas d’hyphéma à répétition ni de défauts qui dessinent l’implant." }
        ]
      },
      {
        kind: "info",
        text: "L’UBM confirme le contact. Image d’exemple (autre patient atteint d’UGH) : l’optique de l’implant, double ligne blanche horizontale au centre, appuie contre la face postérieure de l’iris.",
        figure: { type: "photo", id: "OPH-303" }
      },
      {
        kind: "choice",
        prompt: "Que fais-tu aujourd’hui ?",
        options: [
          { label: "Pilocarpine 2 % 4 fois par jour pour éloigner l’iris de l’implant", correct: false, note: "La pilocarpine augmente l’inflammation (elle ouvre la barrière hémato-aqueuse), contracte le corps ciliaire et déplace l’iris de façon imprévisible par rapport à l’implant : on l’évite en général dans l’UGH. Selon le point de contact vu à l’UBM, un myotique ou un mydriatique réduit parfois le frottement, mais ce n’est qu’un pis-aller." },
          { label: "SLT aujourd’hui pour relancer l’écoulement par le trabéculum", correct: false, note: "Inutile tant que l’implant frotte : le trabéculum se réencrasse de pigment et de sang ; le laser sur un œil enflammé et très pigmenté risque en plus un pic de PIO." },
          { label: "Prednisolone 1 %, timolol et dorzolamide, revoir en 1 semaine", correct: true, note: "On calme l’inflammation (stéroïde) et on baisse la PIO avec des suppresseurs de la production d’humeur aqueuse. C’est un traitement d’attente : la cause mécanique persiste. Surveiller une réponse cortisonique (PIO qui monte sous stéroïde) et l’œdème maculaire." },
          { label: "Trabéculectomie avec mitomycine C cette semaine, en gardant l’implant", correct: false, note: "Ne corrige pas le frottement : saignements et inflammation continuent et menacent la bulle. La chirurgie filtrante se discute seulement si la PIO reste élevée après correction de l’implant." }
        ]
      },
      {
        kind: "info",
        text: "Rebondissement à 3 semaines : sous gouttes, la PIO est à 22 mmHg, mais deux nouveaux épisodes sont survenus, dont un avec un hyphéma de 1 mm au fond de la chambre et une PIO de 40 mmHg à l’urgence. Entre-temps, son médecin de famille a commencé de l’apixaban (anticoagulant) pour une fibrillation auriculaire. Sous dilatation, le capsulorhexis (ouverture ronde de la capsule antérieure) est intact, centré, d’environ 5 mm."
      },
      {
        kind: "choice",
        prompt: "Quelle conduite définitive proposes-tu ?",
        options: [
          { label: "Demander l’arrêt définitif de l’apixaban pour faire cesser les saignements", correct: false, note: "L’anticoagulant aggrave les saignements mais n’en est pas la cause, et l’arrêter expose à un AVC. Toute pause se décide avec le médecin traitant, autour de la chirurgie seulement." },
          { label: "Implant à trois pièces au sulcus, optique capturée derrière le rhexis", correct: true, note: "On traite la cause : retirer le monobloc du sulcus et le remplacer par un implant à trois pièces (haptiques fines et souples, conçues pour le sulcus), dont l’optique passe derrière le rhexis (capture optique) pour l’éloigner de l’iris ; vitrectomie antérieure au besoin. Selon le support capsulaire : implant de chambre antérieure, fixé à l’iris ou à la sclère. Coordonner l’anticoagulation avec le médecin traitant." },
          { label: "Gouttes maximales à vie, avec acétazolamide oral lors des épisodes", correct: false, note: "Le frottement continue : inflammation chronique, saignements, glaucome qui progresse, œdème maculaire possible. L’acétazolamide au long cours est mal toléré (paresthésies, calculs rénaux, hypokaliémie)." },
          { label: "Iridotomie au laser pour égaliser les pressions et reculer l’iris", correct: false, note: "L’iridotomie traite un bloc pupillaire, absent ici (angle ouvert) ; elle ne change pas la position de l’implant et peut saigner." }
        ]
      }
    ],
    debrief: [
      "Pseudophaque avec brouillards à répétition (parfois rouges), pics de PIO, microhyphéma et défauts de transillumination qui dessinent l’implant : syndrome UGH jusqu’à preuve du contraire.",
      "Cause classique : implant monobloc acrylique (haptiques épaisses à bords carrés) placé dans le sulcus ; aussi implant de chambre antérieure mal dimensionné ou décentré.",
      "Bilan : gonioscopie (éliminer néovaisseaux et fermeture), rétro-illumination de l’iris, UBM pour localiser le contact.",
      "Stéroïde et suppresseurs = pont ; pilocarpine en général évitée (pro-inflammatoire, effet imprévisible sur le contact) ; SLT et chirurgie filtrante ne corrigent pas la cause.",
      "Traitement définitif : repositionner ou échanger l’implant (trois pièces au sulcus avec capture optique, ou fixation alternative) ; chirurgie de glaucome si la PIO reste élevée ; coordonner l’anticoagulation sans l’arrêter d’office."
    ]
  }
]);

/* ===== Glossaire ===== */
G.OPH.glossary = G.OPH.glossary || {};
Object.assign(G.OPH.glossary, {
  "stries de Haab": "Ruptures linéaires de la Descemet, horizontales ou concentriques au limbe, causées par l’étirement de la cornée du nourrisson sous une PIO élevée ; elles persistent toute la vie.",
  "embryotoxon postérieur": "Ligne de Schwalbe épaissie et déplacée vers l’avant, visible à la lampe à fente comme une ligne blanche près du limbe ; fréquente seule, elle fait partie du spectre d’Axenfeld-Rieger.",
  "syndrome ICE": "Syndrome iridocornéen endothélial : endothélium anormal, d’un seul œil, qui migre sur l’angle et l’iris ; œdème cornéen, synéchies, corectopie, glaucome. Variantes : Chandler, atrophie essentielle, Cogan-Reese.",
  "Axenfeld-Rieger": "Anomalie congénitale, bilatérale et dominante du segment antérieur : embryotoxon postérieur, brides iriennes, corectopie, anomalies dentaires ou ombilicales ; risque élevé de glaucome.",
  "Sturge-Weber": "Angiomatose encéphalo-trigéminée : angiome plan facial (territoire de V1), angiome des méninges (convulsions) et hémangiome choroïdien ; glaucome fréquent du même côté.",
  "buphtalmie": "Agrandissement de tout le globe (« œil de bœuf ») par une PIO élevée avant 3 ans environ, quand la sclère et la cornée sont encore élastiques.",
  "trabéculotomie": "Chirurgie de l’angle par voie externe : une sonde ou un fil passé dans le canal de Schlemm déchire sa paroi interne et le trabéculum pour rouvrir l’écoulement.",
  "trabéculodysgénésie": "Développement incomplet du trabéculum et de l’angle, à l’origine du glaucome congénital primaire.",
  "corectopie": "Pupille déplacée de sa position centrale, souvent déformée (ovale).",
  "polycorie": "Présence de plusieurs ouvertures dans l’iris qui ressemblent à des pupilles (souvent des trous de l’iris : pseudo-polycorie).",
  "procès iriens": "Fins filaments d’iris, en dentelle, allant de la racine de l’iris vers l’éperon ou le trabéculum ; variante normale qui ne masque pas l’angle.",
  "anomalie de Peters": "Opacité cornéenne centrale congénitale par défaut de la Descemet et de l’endothélium, avec adhérences de l’iris ou du cristallin à la cornée ; glaucome fréquent.",
  "aniridie": "Iris presque absent (moignon visible en gonioscopie), lié au gène PAX6 : atteinte cornéenne, fovéa peu développée, nystagmus, glaucome. Forme sporadique : dépister la tumeur de Wilms.",
  "dystrophie polymorphe postérieure": "Dystrophie endothéliale héréditaire (dominante) et bilatérale : vésicules et bandes à la Descemet ; parfois adhérences de l’iris et glaucome.",
  "argent martelé": "Aspect finement granuleux et brillant de l’endothélium, comme du métal martelé, typique du syndrome ICE.",
  "examen sous anesthésie": "Examen complet d’un enfant sous anesthésie générale : PIO, diamètre cornéen, gonioscopie, réfraction, papille ; souvent suivi de la chirurgie dans la même séance.",
  "amblyopie": "Baisse de vision d’un œil parce que le cerveau n’a pas appris à l’utiliser pendant l’enfance (image floue ou déviée) ; traitée par lunettes et occlusion.",
  "sulcus": "Espace entre la face postérieure de l’iris et le corps ciliaire, devant la capsule ; on y place un implant quand le sac capsulaire ne peut pas le recevoir.",
  "microhyphéma": "Globules rouges en suspension dans la chambre antérieure, sans niveau de sang déposé visible.",
  "angiome plan": "Malformation capillaire de la peau, plane, rouge ou violacée (tache de vin), présente dès la naissance.",
  "capture optique": "Optique d’un implant passée derrière l’ouverture de la capsule (rhexis) alors que les haptiques restent devant : stabilise l’implant et l’éloigne de l’iris.",
  "haptiques": "Bras d’un implant intraoculaire qui le maintiennent centré dans le sac capsulaire ou dans le sulcus.",
  "monobloc": "Implant fait d’une seule pièce d’acrylique, aux haptiques épaisses à bords carrés, conçu pour le sac capsulaire et non pour le sulcus (risque de syndrome UGH)."
});
