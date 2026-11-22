// Couche high-yield, module A : physiologie (phy-), examen (ex-) et section A5 (a5-).
// Tiré uniquement des entrées relues du module A (module-a.js, ext-a5-a.js, ext-a5-b.js) et de docs/FACTS.md.
var G = (typeof window !== 'undefined') ? window : globalThis;
G.OPH = G.OPH || {};
G.OPH.hy = G.OPH.hy || {};
Object.assign(G.OPH.hy, {

  /* ===================== PHYSIOLOGIE ===================== */

  "phy-aqueuse": {
    essentials: [
      "L’aqueuse est sécrétée activement par l’**épithélium non pigmenté** des procès ciliaires, ≈ 2,5 µL/min le jour.",
      "**PIO = (F − U) / C + Pv** : production, débit uvéoscléral, facilité d’écoulement, pression veineuse épisclérale.",
      "La **voie trabéculaire** évacue la majorité du débit ; sa résistance augmente dans le glaucome à angle ouvert.",
      "Les **prostaglandines** augmentent la voie uvéosclérale (5–30 % du débit), qui agit jour et nuit.",
      "Par la voie trabéculaire, la PIO ne descend pas sous Pv : la **chirurgie filtrante** la contourne."
    ],
    cloze: [
      "La résistance à l’écoulement siège surtout dans le trabéculum [[juxtacanaliculaire]].",
      "Le [[timolol|bêtabloquant|bêtabloquants]] baisse peu la PIO la nuit, car la production d’aqueuse est déjà basse pendant le sommeil.",
      "Les inhibiteurs de l’[[anhydrase carbonique]] baissent la PIO en réduisant la production d’aqueuse.",
      "La pression veineuse épisclérale (Pv) vaut environ [[8–10 mmHg|8-10 mmHg|8 à 10 mmHg]].",
      "La [[pilocarpine]] augmente l’écoulement trabéculaire mais diminue la voie uvéosclérale.",
      "Dans la dispersion pigmentaire, les courants de convection déposent le pigment en fuseau de [[Krukenberg]]."
    ],
    triage: [
      { s: "Halos colorés, œil rouge douloureux, cornée embuée, PIO à 56 mmHg, angle fermé.", u: "urgent", why: "Crise aiguë de fermeture : l’aqueuse ne sort plus, il faut baisser la PIO immédiatement." },
      { s: "Glaucome avancé : cible de PIO très basse non atteinte malgré gouttes et SLT.", u: "rapide", why: "Par la voie trabéculaire, la PIO ne descend pas sous Pv : chirurgie filtrante à discuter." }
    ],
    cues: [
      "Procès ciliaires et anhydrase carbonique",
      "Voie uvéosclérale : 5–30 % du débit",
      "Trabéculum puis canal de Schlemm"
    ]
  },

  "phy-pio": {
    essentials: [
      "PIO normale **10–21 mmHg** (moyenne ≈ 15–16) : 21 est une limite statistique, pas un seuil de danger.",
      "La PIO est le seul **facteur de risque modifiable** dont la baisse freine le glaucome.",
      "Variation sur 24 h : **2–6 mmHg**, plus en glaucome ; le pic est souvent nocturne ou matinal.",
      "**Hystérésis cornéenne basse** = risque accru de progression (facteur clé de l’AAO 2026).",
      "**Tension artérielle basse** = perfusion du nerf optique diminuée : facteur de risque (AAO 2026)."
    ],
    cloze: [
      "PIO > 21 mmHg sans atteinte du nerf optique ni du champ visuel : [[hypertension oculaire]].",
      "Le tonomètre de Goldmann est calibré pour une cornée d’environ [[520 µm|520]].",
      "Pression de perfusion oculaire ≈ pression [[artérielle]] − PIO.",
      "Sous corticoïdes, les [[répondeurs]] font une hausse de PIO, surtout avec les gouttes.",
      "La position [[couchée|allongée]] fait monter la PIO, car la pression veineuse épisclérale augmente.",
      "Prédicteurs d’OHTS : âge, PIO, épaisseur cornéenne, C/D vertical et [[PSD]]."
    ],
    triage: [
      { s: "PIO à 23 mmHg, cornée de 600 µm, papille et champ visuel normaux.", u: "routine", why: "Au plus une hypertension oculaire, probablement surestimée : estimer le risque global (OHTS)." },
      { s: "PIO à 2 mmHg après un traumatisme contondant.", u: "urgent", why: "Hypotonie post-traumatique : rupture du globe occulte ou cyclodialyse à exclure." }
    ],
    cues: [
      "Seul facteur de risque modifiable prouvé",
      "Limite statistique de 21 mmHg",
      "Hausse chez les répondeurs aux corticoïdes"
    ]
  },

  "phy-film-lacrymal": {
    essentials: [
      "Composantes : **lipides** meibomiens en surface, phase muco-aqueuse, glycocalyx qui rend la cornée mouillable.",
      "**TBUT** normal > 10 s ; un NIBUT < 10 s est un signe de sécheresse.",
      "**Cercle vicieux** : instabilité → évaporation → hyperosmolarité → inflammation → film encore plus instable.",
      "DEWS III : la sécheresse est **symptomatique** ; dépistage OSDI-6 ≥ 4, puis au moins un signe.",
      "Le **BAK** des gouttes aggrave la surface du glaucomateux et fausse AV, topographie et champ."
    ],
    cloze: [
      "Osmolarité ≥ [[308 mOsm/L|308]] dans un œil : signe de sécheresse selon DEWS III.",
      "Schirmer I sans anesthésie < [[5 mm|5]] en 5 min : déficit aqueux sévère.",
      "La mucine MUC5AC est produite par les cellules [[caliciformes]].",
      "Le clignement diminue fortement devant un [[écran]], d’où les symptômes en fin de journée.",
      "Un écart d’osmolarité > [[8 mOsm/L|8]] entre les deux yeux est un signe de sécheresse.",
      "Glaucomateux à surface abîmée : gouttes sans agent de conservation, combinaisons fixes ou [[SLT]]."
    ],
    triage: [
      { s: "Glaucomateux sous 3 gouttes : brûlure, vision qui fluctue, KPS inférieure.", u: "routine", why: "Maladie de surface aggravée par le BAK : gouttes sans agent de conservation, combinaisons fixes, SLT." },
      { s: "Brûlure en fin de journée devant l’écran, TBUT à 5 s, AV normale.", u: "routine", why: "Film instable : le clignement réduit devant l’écran augmente l’évaporation." },
      { s: "Baisse brutale de vision, œil rouge douloureux et photophobie.", u: "urgent", why: "Pas une sécheresse : kératite, uvéite ou crise de fermeture à exclure le jour même." }
    ],
    cues: [
      "Glandes de Meibomius et cellules caliciformes",
      "Osmolarité ≥ 308 mOsm/L",
      "Clignement 15–20 fois par minute"
    ]
  },

  "phy-transparence": {
    essentials: [
      "Transparence : **fibrilles de collagène** régulières, espacées de moins d’une longueur d’onde ; la diffusion s’annule.",
      "**Déturgescence** : l’endothélium repompe l’eau (Na⁺/K⁺-ATPase) et garde le stroma à ≈ 78 % d’eau.",
      "**Œdème stromal** : cornée épaissie et grisâtre, plis de Descemet, baisse de vision modérée.",
      "**Œdème épithélial** : microkystes, bulles, halos colorés et baisse de vision marquée.",
      "En crise de fermeture, PIO > **pression de gonflement** du stroma (≈ 50–60 mmHg) : épithélium embué."
    ],
    cloze: [
      "Fuchs : vision pire au [[réveil|lever|matin]], qui s’améliore en cours de journée.",
      "Les gouttes ou onguents salins [[hypertoniques]] attirent l’eau hors de l’épithélium.",
      "La cornée décompense en général sous [[400–500|400-500|400 à 500]] cellules/mm².",
      "La greffe [[endothéliale]] (DMEK, DSAEK) remplace la couche de cellules qui repompe l’eau du stroma.",
      "Une vésicule épithéliale qui crève cause la douleur de la kératopathie [[bulleuse]].",
      "Chez un patient à endothélium fragile, [[baisser la PIO]] aide la cornée à se déshydrater."
    ],
    triage: [
      { s: "Greffé de cornée : rougeur, photophobie, vision embrouillée et douleur depuis hier.", u: "urgent", why: "RSVP : rejet possible (l’endothélium du greffon défaille), consultation le jour même." },
      { s: "Guttae, vision floue au réveil qui s’améliore dans la journée.", u: "routine", why: "Fuchs : microscopie spéculaire et pachymétrie ; salin hypertonique, greffe endothéliale si gêne." }
    ],
    cues: [
      "Fibrilles de ≈ 30 nm régulièrement espacées",
      "Stroma à ≈ 78 % d’eau",
      "Pression de gonflement ≈ 50–60 mmHg"
    ]
  },

  "phy-refraction": {
    essentials: [
      "**Cornée** ≈ 43 D (≈ 2/3 de la puissance totale) ; cristallin ≈ 20 D, variable par l’accommodation.",
      "**Hypermétrope** = œil court, chambre peu profonde : risque de fermeture de l’angle avec l’âge.",
      "**Myope fort** : papille inclinée et atrophie péripapillaire, d’où un OCT faussement rouge.",
      "Le **trou sténopéique** ne laisse passer que les rayons centraux : il réduit le flou réfractif.",
      "**Astigmatisme irrégulier** (kératocône, cicatrice) : mal corrigé par lunettes, d’où la lentille rigide."
    ],
    cloze: [
      "Le presbyte avec une cataracte nucléaire relit parfois sans lunettes : la [[seconde vue]].",
      "La presbytie débute vers [[40–45 ans|40-45 ans|40 à 45 ans]].",
      "La myopie se corrige par un verre [[concave|négatif]].",
      "Astigmatisme [[direct|with-the-rule]] : méridien vertical plus cambré, fréquent chez le jeune.",
      "La longueur axiale moyenne de l’adulte est d’environ [[23–24 mm|23-24 mm|23 à 24 mm]].",
      "La dispersion pigmentaire touche surtout le jeune [[myope]]."
    ],
    triage: [
      { s: "AV à 6/18 qui monte à 6/7,5 au trou sténopéique.", u: "routine", why: "Baisse surtout optique : réfraction, ou lentille rigide si la cornée est irrégulière." },
      { s: "Hypermétrope de +4 D, 65 ans : Van Herick 1, PIO normale, aucun symptôme.", u: "routine", why: "Œil court à risque de fermeture : gonioscopie avant de dilater, puis LPI ou extraction du cristallin à discuter." },
      { s: "Baisse brutale et indolore d’un œil, AV à 6/60 non améliorée au trou sténopéique.", u: "urgent", why: "Cause non optique : rétine ou nerf optique (occlusion, décollement) à éliminer le jour même." }
    ],
    cues: [
      "≈ 43 D cornéens sur ≈ 60 D",
      "Verre concave pour l’œil trop long",
      "Addition de près vers 40–45 ans"
    ]
  },

  "phy-pupille": {
    essentials: [
      "Chaque noyau prétectal innerve les **deux noyaux d’Edinger-Westphal** : réflexes direct et consensuel égaux.",
      "**DPAR** : un nerf optique transmet moins de lumière ; il faut une atteinte asymétrique.",
      "Un DPAR ne donne **jamais d’anisocorie** : une anisocorie signe une atteinte efférente ou de l’iris.",
      "Les fibres pupillaires sont en **surface du III** : un anévrisme qui le comprime dilate la pupille.",
      "Voie **sympathique à 3 neurones** (relais C8–T2, ganglion cervical supérieur) : son atteinte donne un Horner."
    ],
    cloze: [
      "La voie parasympathique fait relais dans le ganglion [[ciliaire]].",
      "Le 2e neurone sympathique passe sur l’[[apex du poumon|apex pulmonaire]].",
      "Certaines cellules ganglionnaires captent la lumière grâce à la [[mélanopsine]].",
      "Les fibres pupillaires quittent la voie visuelle avant le corps genouillé latéral et gagnent les noyaux [[prétectaux]].",
      "Anisocorie plus marquée à la [[lumière]] : la grande pupille est anormale.",
      "Un DPAR oriente vers le nerf optique ou une rétine très atteinte, jamais vers une [[cataracte]] ou une erreur de réfraction."
    ],
    triage: [
      { s: "DPAR gauche et cataracte gauche dense, chirurgie de cataracte prévue.", u: "rapide", why: "La cataracte ne donne pas de DPAR : chercher une neuropathie optique ou une rétine atteinte avant d’opérer." },
      { s: "Anisocorie de 0,5 mm, identique au noir et à la lumière, sans ptose.", u: "routine", why: "Anisocorie physiologique (≤ 1 mm, ≈ 20 % des gens)." },
      { s: "Petite pupille et ptose légère apparues hier avec une douleur au cou.", u: "urgent", why: "Horner douloureux récent : dissection carotidienne à exclure par imagerie urgente." }
    ],
    cues: [
      "Double croisement vers Edinger-Westphal",
      "Relais dans le ganglion ciliaire",
      "Noyaux prétectaux et mélanopsine"
    ]
  },

  /* ===================== EXAMEN ===================== */

  "ex-av": {
    essentials: [
      "L’**acuité visuelle** est le signe vital de l’œil : toujours la mesurer en premier.",
      "Amélioration au **trou sténopéique** = cause optique ; sinon, chercher macula, nerf optique ou opacité dense.",
      "Équivalences : 6/6 = 20/20 = **logMAR 0,0** ; 6/12 = 20/40 = 0,3 ; 6/60 = 1,0.",
      "Le glaucome **épargne l’AV** jusqu’à un stade avancé : une baisse inexpliquée fait chercher une autre cause.",
      "**SAAQ** classe 5 : AV binoculaire ≥ 6/15 (20/50) ; véhicules lourds : 6/9."
    ],
    cloze: [
      "Si l’AV est inférieure à 6/6, on refait la mesure avec le [[trou sténopéique|sténopéique|pinhole]].",
      "6/12 correspond à 20/40, soit logMAR [[0,3|0.3]].",
      "Aucune ligne lue : CD, MM, puis PL avec [[projection|projection lumineuse]] dans les 4 quadrants.",
      "Pour la classe 5 de la SAAQ, l’AV binoculaire doit être d’au moins [[6/15|20/50]].",
      "Baisse d’AV depuis l’enfance, non améliorée au trou sténopéique, sans opacité ni lésion visible : [[amblyopie]].",
      "Mesurer avec les lunettes de [[lecture|près]] plutôt que de loin donne une fausse baisse d’AV."
    ],
    triage: [
      { s: "Baisse brutale de vision, œil rouge douloureux, halos colorés autour des lumières.", u: "urgent", why: "Crise de fermeture de l’angle, kératite ou uvéite : évaluation immédiate." },
      { s: "AV à 6/9 au tableau, mesurée sans les lunettes de loin habituelles.", u: "routine", why: "Fausse baisse probable : remesurer avec la correction de loin habituelle." },
      { s: "Glaucomateux connu : l’AV baisse sans explication, PIO stable.", u: "rapide", why: "Le glaucome épargne l’AV : chercher une autre cause (macula, cataracte) ou une atteinte de la fixation (10-2)." }
    ],
    cues: [
      "CD, MM, PL, NPL",
      "Tableau à 6 m, un œil caché",
      "Notation 6/9 −2"
    ]
  },

  "ex-pupilles": {
    essentials: [
      "La **lampe oscillante** se fait avant toute dilatation, patient fixant au loin, pièce peu éclairée.",
      "**DPAR** : les deux pupilles se dilatent quand la lumière passe sur l’œil atteint.",
      "Une cataracte ne donne **pas de DPAR** significatif : en trouver un oblige à chercher nerf ou rétine.",
      "Anisocorie plus marquée **au noir** → petite pupille anormale (Horner) ; à la lumière → grande anormale.",
      "Grande pupille par **paralysie du III** = anévrisme jusqu’à preuve du contraire, même sans douleur."
    ],
    cloze: [
      "Un glaucome bilatéral [[symétrique]] ne donne pas de DPAR, car le test compare les deux yeux.",
      "L’anisocorie physiologique est d’au plus [[1 mm]] et reste à peu près identique au noir et à la lumière.",
      "Mi-mydriase ovale peu réactive, œil rouge et PIO élevée : crise aiguë de [[fermeture de l’angle|fermeture]].",
      "Si une pupille est fixe, on cherche un DPAR [[inverse]] en observant seulement la pupille mobile.",
      "Éclairer un œil plus longtemps ou sous un autre angle crée un faux [[DPAR|RAPD]].",
      "Le DPAR se gradue de 1+ à 3+ ou se mesure avec des filtres de [[densité neutre]]."
    ],
    triage: [
      { s: "Perte de vision brutale d’un œil depuis ce matin, avec DPAR franc.", u: "urgent", why: "Le DPAR signe une atteinte du nerf optique ou d’une grande surface de rétine : occlusion, NOIA ou décollement à exclure." },
      { s: "Grande pupille peu réactive à la lumière, ptose et diplopie, sans douleur.", u: "urgent", why: "Paralysie du III : anévrisme jusqu’à preuve du contraire, imagerie vasculaire le jour même." },
      { s: "Œil rouge douloureux, pupille mi-dilatée ovale peu réactive, PIO à 52 mmHg.", u: "urgent", why: "Crise aiguë de fermeture de l’angle (sphincter ischémique) : baisser la PIO immédiatement." }
    ],
    cues: [
      "Allers-retours de 2–3 s par œil",
      "Filtres de densité neutre",
      "Lumière alternée, même intensité, même angle"
    ]
  },

  "ex-lampe": {
    essentials: [
      "Examen **de l’avant vers l’arrière** : paupières, conjonctive, cornée, chambre antérieure, iris, cristallin, vitré antérieur.",
      "La **coupe optique** (fente mince à ≈ 45°) situe la profondeur d’une lésion cornéenne.",
      "Les **guttae** se voient en réflexion spéculaire et en rétro-illumination, pas en éclairage diffus.",
      "**Van Herick ≤ 2** (≤ 1/4 d’épaisseur cornéenne) impose une gonioscopie.",
      "La **rubéose** (néovaisseaux du bord pupillaire) signe une ischémie rétinienne : gonioscopie et fond d’œil le jour même."
    ],
    cloze: [
      "Les cellules de chambre antérieure se cherchent en pièce [[sombre]], faisceau court à intensité maximale.",
      "Le fuseau de Krukenberg, dépôt vertical sur l’endothélium, évoque une [[dispersion pigmentaire]].",
      "Des dépôts blanchâtres en cible sur le cristallin évoquent une [[pseudo-exfoliation|PXF|pseudoexfoliation]].",
      "Van Herick : fente mince à ≈ 60°, au limbe [[temporal]].",
      "Un Van Herick normal n’exclut pas un angle étroit, par exemple dans l’iris [[plateau]].",
      "Un hypopyon évoque une kératite sévère ou une [[endophtalmie]]."
    ],
    triage: [
      { s: "Diabétique : fins néovaisseaux au bord pupillaire, vus avant la dilatation.", u: "urgent", why: "Rubéose = ischémie rétinienne : gonioscopie et fond d’œil le jour même." },
      { s: "Hypopyon, douleur et baisse de vision quelques jours après une chirurgie de cataracte.", u: "urgent", why: "Endophtalmie possible : ponction-injection intravitréenne le jour même." },
      { s: "Van Herick 2 à un examen de routine, PIO normale, aucun symptôme.", u: "routine", why: "Angle possiblement étroit : gonioscopie avant toute dilatation." }
    ],
    cues: [
      "Coupe optique, parallélépipède, dispersion sclérale",
      "Examen systématique de l’avant vers l’arrière",
      "Van Herick au limbe temporal"
    ]
  },

  "ex-fluoresceine": {
    essentials: [
      "Lire la fluorescéine au **bleu cobalt** dans les 1–3 minutes, avant la diffusion stromale.",
      "**Dendrite** à bulbes terminaux = herpès simplex ; pseudodendrite sans bulbes = zona, Acanthamoeba.",
      "**Seidel positif** (ruisseau qui dilue le colorant) = fuite de plaie ou de bulle.",
      "**Stries verticales** → corps étranger sous la paupière supérieure : toujours l’éverser.",
      "KPS **inférieure** : sécheresse, blépharite, lagophtalmie ou toxicité des gouttes."
    ],
    cloze: [
      "Une KPS de localisation [[supérieure]] évoque surtout le port de lentilles cornéennes.",
      "Le vert de [[lissamine]] colore les cellules dévitalisées de la conjonctive et du bord libre.",
      "Une zone sombre sur fond vert, ou coloration [[négative|négatif]], signale un relief qui soulève le film.",
      "Un ulcère [[géographique]] est un herpès élargi, souvent sous corticoïdes.",
      "La fluorescéine tache les lentilles [[souples]] : les retirer avant le test.",
      "Selon DEWS III, plus de [[5 points|5]] cornéens à la fluorescéine est un signe de sécheresse."
    ],
    triage: [
      { s: "Après trabéculectomie : PIO à 4 mmHg, chambre peu profonde, ruisseau au test de Seidel.", u: "urgent", why: "Fuite de bulle : aviser le glaucomologue le jour même pour éviter hypotonie, chambre plate et infection." },
      { s: "Zones sombres en lignes de carte géographique sur fond vert, sans douleur ni rougeur.", u: "routine", why: "Coloration négative : relief sous le film, comme une dystrophie de la membrane basale." },
      { s: "Porteuse de lentilles : œil rouge douloureux, infiltrat de 3 mm près du centre, réaction de chambre.", u: "urgent", why: "Kératite infectieuse (règle 1-2-3) : cultures et gouttes fortifiées le jour même." }
    ],
    cues: [
      "Ruisseau au bleu cobalt sur une plaie",
      "Bulbes terminaux au bleu cobalt",
      "Zone sombre sur fond vert"
    ]
  },

  "ex-tonometrie": {
    essentials: [
      "Goldmann : lire quand les **bords internes** des mires se touchent ; cadran × 10 = mmHg.",
      "**Mires trop épaisses** → surestimation ; trop minces → sous-estimation.",
      "Cornée mince, œdème ou **post-LASIK** → PIO sous-estimée ; cornée épaisse → surestimée.",
      "**PIO élevée d’un seul côté** : chercher une cause secondaire (PXF, dispersion pigmentaire, uvéite, récession, néovaisseaux, corticoïdes).",
      "Noter l’**heure et l’appareil** : les valeurs de tonomètres différents ne sont pas interchangeables."
    ],
    cloze: [
      "Le prisme de Goldmann aplanit un disque de [[3,06 mm|3.06 mm|3,06]].",
      "Astigmatisme > 3 D : placer l’axe du cylindre négatif à [[43°|43]] sur la marque rouge.",
      "Le tonomètre à rebond [[iCare]] s’utilise sans anesthésie, utile chez l’enfant.",
      "Pression sur les paupières, apnée ou cravate serrée font [[surestimer|surestimation]] la PIO.",
      "Une PIO très basse après un traumatisme fait craindre une rupture du globe occulte ou une [[cyclodialyse]].",
      "Atteinte glaucomateuse avec PIO toujours ≤ 21 mmHg : glaucome à [[pression normale]]."
    ],
    triage: [
      { s: "PIO lue à 25 mmHg avec des mires épaisses ; papille et champ visuel normaux.", u: "routine", why: "Trop de fluorescéine surestime la PIO : remesurer avec des mires fines avant de conclure." },
      { s: "PIO à 31 mmHg à un seul œil, dépôts blanchâtres en cible sur le cristallin.", u: "rapide", why: "PIO asymétrique : cause secondaire, ici une pseudo-exfoliation (glaucome agressif) à évaluer." },
      { s: "PIO à 13 mmHg après LASIK, mais excavation papillaire qui s’agrandit.", u: "rapide", why: "Cornée amincie = PIO sous-estimée : OCT, champ visuel et PIO d’avant la chirurgie." }
    ],
    cues: [
      "Deux demi-cercles verts qui se touchent",
      "Cadran × 10 = mmHg",
      "Prisme tourné à 43°"
    ]
  },

  "ex-gonioscopie": {
    essentials: [
      "Gonioscopie en **pièce sombre**, petit faisceau hors de la pupille : la lumière ouvre faussement l’angle.",
      "Ordre postérieur → antérieur : « **I Can’t See Til Schwalbe** » (iris, bande ciliaire, éperon, trabéculum, Schwalbe).",
      "L’**indentation** sépare apposition (l’angle s’ouvre) et synéchies (PAS, qui restent collées).",
      "Contact iridotrabéculaire **≥ 180°** avec PIO normale, sans PAS ni neuropathie = PACS.",
      "**Néovaisseaux de l’angle** (franchissent l’éperon) = glaucome néovasculaire débutant : chercher l’ischémie rétinienne en urgence."
    ],
    cloze: [
      "La ligne de [[Sampaolesi]], pigment en avant de Schwalbe, évoque une pseudo-exfoliation.",
      "Bande ciliaire élargie et procès iriens déchirés évoquent une [[récession de l’angle|récession]].",
      "Shaffer 1 : seule la ligne de [[Schwalbe]] est visible (≤ 10°).",
      "On commence par le quadrant [[inférieur|inférieure]], le plus large et le plus pigmenté.",
      "Le miroir placé à 12 h montre l’angle de [[6 h|6 heures]].",
      "Iris bombé : demander au patient de regarder [[vers le miroir]] pour voir par-dessus la colline."
    ],
    triage: [
      { s: "Diabétique, PIO à 26 mmHg : vaisseaux qui franchissent l’éperon et se ramifient sur le trabéculum.", u: "urgent", why: "Néovaisseaux de l’angle : chercher et traiter l’ischémie rétinienne en urgence." },
      { s: "Contact iridotrabéculaire sur 270°, PIO normale, sans PAS ni atteinte du nerf.", u: "routine", why: "PACS : la LPI prophylactique réduit le risque, mais il est faible ; décision partagée." },
      { s: "Bande ciliaire élargie et asymétrique, des années après un coup de poing ; PIO normale.", u: "routine", why: "Récession de l’angle : surveiller la PIO à vie (glaucome possible des années plus tard)." }
    ],
    cues: [
      "Indentation : l’angle s’ouvre ou reste collé",
      "Ligne de Schwalbe au coin cornéen",
      "Grade de Shaffer par quadrant"
    ]
  },

  "ex-pachymetrie": {
    essentials: [
      "Épaisseur cornéenne centrale normale : **≈ 540–550 µm** ; périphérie ≈ 650–700 µm.",
      "OHTS : ECC **≤ 555 µm** ≈ 3 fois plus de conversion en glaucome que > 588 µm.",
      "**Aucune formule** de correction de la PIO n’est validée : intégrer l’ECC au risque global.",
      "ECC qui augmente ou plus épaisse que l’autre œil → **œdème** (Fuchs, décompensation, rejet).",
      "Kératocône : **point le plus mince** déplacé qui s’amincit = progression qui pousse au CXL."
    ],
    cloze: [
      "Une sonde ultrasonique non [[perpendiculaire]] ou décentrée surestime l’épaisseur cornéenne.",
      "Une cornée mince fait [[sous-estimer|sous-estimation]] la PIO au Goldmann.",
      "Après LASIK, l’ECC basse reflète l’[[ablation]] : les seuils de risque d’OHTS ne s’appliquent pas.",
      "La cornée est légèrement plus épaisse au [[réveil|lever|matin]], après une nuit paupières fermées.",
      "Pour suivre un kératocône, on compare les mesures faites sur le même [[appareil]]."
    ],
    triage: [
      { s: "PIO à 26 mmHg, ECC à 610 µm, papille et champ visuel normaux.", u: "routine", why: "Hypertension oculaire en partie apparente : intégrer l’ECC au risque global, sans formule." },
      { s: "Kératocône : point le plus mince passé de 470 à 445 µm en un an.", u: "rapide", why: "Amincissement progressif = progression : CXL à discuter sans tarder." },
      { s: "Suspect de glaucome opéré en LASIK, ECC à 480 µm.", u: "routine", why: "ECC basse due à l’ablation : PIO sous-estimée, seuils d’OHTS non applicables." }
    ],
    cues: [
      "Sonde ultrasonique perpendiculaire au centre",
      "≤ 555 µm : risque × 3 (OHTS)",
      "Moyenne de plusieurs mesures au contact"
    ]
  },

  "ex-papille": {
    essentials: [
      "Décrire d’abord la **taille du disque** : un C/D de 0,7 peut être normal sur un grand disque.",
      "**C/D vertical > 0,6** ou asymétrie ≥ 0,2 = papille suspecte, selon la taille du disque.",
      "L’**hémorragie de Drance** (flammèche au bord du disque) signe une maladie active, à risque de progression.",
      "**Pâleur > excavation** ou papille œdémateuse → penser à une cause non glaucomateuse et investiguer.",
      "Délimiter l’excavation par le **contour** (cassure des vaisseaux), pas par la pâleur."
    ],
    cloze: [
      "L’anneau neurorétinien suit souvent la règle [[ISNT]], qui classe ses secteurs du plus épais au plus mince.",
      "L’atrophie péripapillaire de zone [[bêta|zone bêta|beta]] est associée au glaucome ; la zone alpha est banale.",
      "Avec une lentille de 90 D, on multiplie la hauteur du disque par ≈ [[1,3|1.3]].",
      "Le disque normal mesure ≈ [[1,5–2 mm|1,5-2 mm|1,5 à 2 mm]] de hauteur.",
      "Les défauts de la RNFL se voient mieux en lumière [[anérythre|verte]].",
      "Un changement [[documenté]] sur photos ou OCT vaut plus qu’une mesure isolée."
    ],
    triage: [
      { s: "Glaucomateux suivi : petite hémorragie en flammèche au bord inférotemporal du disque.", u: "rapide", why: "Hémorragie de Drance : maladie active, revoir la progression et la cible de PIO." },
      { s: "Anneau neurorétinien pâle avec excavation discrète, baisse de vision progressive.", u: "rapide", why: "Pâleur > excavation : cause non glaucomateuse (compression) à investiguer, souvent par imagerie." },
      { s: "C/D vertical de 0,7 sur un grand disque, anneau régulier, OCT et champ normaux.", u: "routine", why: "Le C/D suit la taille du disque : probablement physiologique, à suivre." }
    ],
    cues: [
      "Facteur 1,3 avec la lentille 90 D",
      "Encoche inférotemporale de l’anneau",
      "Vaisseaux en baïonnette, APP zone bêta"
    ]
  },

  "ex-oct": {
    essentials: [
      "L’AAO 2026 recommande **RNFL péripapillaire et GCIPL maculaire**, au départ et au suivi.",
      "Vérifier la **qualité du scan** (signal, centrage, segmentation) avant de lire les couleurs.",
      "Amincissement le plus fréquent : **inférotemporal**, qui correspond à un défaut du champ supérieur.",
      "**Effet plancher** : la RNFL ne descend plus sous ≈ 50–60 µm ; suivre alors champ et GCIPL.",
      "**Red disease** = faux positif (myopie forte, papille inclinée) ; green disease = faux négatif (œdème, membrane)."
    ],
    cloze: [
      "La courbe TSNIT normale a une forme en [[double bosse]].",
      "Un arc d’amincissement du GCIPL s’arrête au raphé [[horizontal]].",
      "La RNFL moyenne normale de l’adulte est d’environ [[90–100 µm|90-100 µm|90 à 100 µm]].",
      "Une membrane épirétinienne épaissit faussement la mesure : c’est une [[green disease|faux négatif]].",
      "Pour l’iris plateau, l’[[UBM]] est supérieure à l’OCT du segment antérieur.",
      "À l’AS-OCT, un contact [[iridotrabéculaire]] peut prédire une fermeture même si la gonioscopie paraît ouverte."
    ],
    triage: [
      { s: "Myope de −9 D : OCT RNFL tout rouge, champ visuel normal.", u: "routine", why: "Red disease probable : vérifier la segmentation, corréler au champ (10-2), suivre dans le temps." },
      { s: "Baisse de vision d’un œil, hémorragies dans les 4 quadrants, RNFL épaissie.", u: "rapide", why: "OVCR : rétine rapidement ; l’OCT RNFL de cet œil est ininterprétable pendant des mois." },
      { s: "Glaucome avancé : RNFL stable à 55 µm depuis 2 ans, mais le champ visuel progresse.", u: "rapide", why: "Effet plancher : la RNFL ne baisse plus ; se fier au champ et au GCIPL." }
    ],
    cues: [
      "Courbe TSNIT en double bosse",
      "Effet plancher vers 50–60 µm",
      "Red disease chez le myope fort"
    ]
  },

  "ex-topographie": {
    essentials: [
      "**Placido** : courbure de la face antérieure seulement ; chaud = cambré, froid = plat.",
      "La **tomographie** ajoute élévations antérieure et postérieure et carte pachymétrique (Scheimpflug ou OCT).",
      "Kératocône : **cambrure inférieure**, nœud papillon asymétrique à axes déviés, élévation postérieure ↑.",
      "La **progression** documentée est le critère principal de CXL ; chez l’enfant, CXL dès le diagnostic.",
      "**Forme fruste** (élévation postérieure ou BAD-D anormaux) : LASIK contre-indiqué."
    ],
    cloze: [
      "Dégénérescence marginale pellucide : aspect en [[pince de crabe|crab claw]] avec astigmatisme inverse.",
      "Astigmatisme direct (with-the-rule) : nœud papillon [[vertical]] symétrique.",
      "Rabinowitz : un K central > [[47,2 D|47,2|47.2 D]] fait suspecter un kératocône.",
      "Des lentilles portées récemment peuvent créer un [[pseudo-kératocône|pseudokératocône|warpage]].",
      "Un film lacrymal sec crée un faux cône : refaire la carte après [[lubrification|larmes artificielles]].",
      "Progression selon Gomes 2015 : au moins [[2 critères|deux critères|2]] parmi bombement antérieur, postérieur et amincissement."
    ],
    triage: [
      { s: "Adolescent de 14 ans : kératocône tout juste diagnostiqué, sans progression documentée.", u: "rapide", why: "Consensus 2025 : CXL dès le diagnostic chez l’enfant, sans attendre la progression." },
      { s: "Candidat au LASIK : topographie antérieure presque normale, élévation postérieure anormale.", u: "routine", why: "Forme fruste : LASIK contre-indiqué (risque d’ectasie)." },
      { s: "Porteur de lentilles rigides : carte irrégulière qui évoque un cône.", u: "routine", why: "Déformation par les lentilles possible : les cesser assez longtemps, puis refaire la carte." }
    ],
    cues: [
      "Nœud papillon asymétrique à axes déviés",
      "Aspect en pince de crabe",
      "Chaud = cambré, froid = plat"
    ]
  },

  "ex-champs-visuels": {
    essentials: [
      "Lire la **fiabilité** d’abord : faux positifs > 15 % = test non fiable.",
      "Le glaucome respecte le **méridien horizontal** ; le chiasma et les voies rétrochiasmatiques, le vertical.",
      "**TD abaissée, PD normale** = dépression diffuse (cataracte, petite pupille), pas un défaut glaucomateux.",
      "Stades : débutant **MD > −6 dB**, modéré −6 à −12, avancé < −12 dB.",
      "Progresseur rapide ≥ −2 dB/an : environ **3 champs par an** pendant 2 ans (Chauhan)."
    ],
    cloze: [
      "Le 24-2 compte 54 points espacés de [[6°|6 degrés]].",
      "Un défaut arciforme supérieur correspond au pôle [[inférieur|inférotemporal|inférieure]] de la papille.",
      "Ne pas mélanger SITA Standard et SITA Fast dans une analyse de [[progression]].",
      "Un premier champ anormal doit être confirmé, à cause de l’effet d’[[apprentissage]].",
      "SAAQ classe 5 : champ binoculaire d’au moins [[100°|100 degrés]] sur le méridien horizontal.",
      "Défaut bitemporal = atteinte du [[chiasma]] → neuro-imagerie."
    ],
    triage: [
      { s: "Champ visuel avec 25 % de faux positifs et un MD excellent.", u: "routine", why: "Test non fiable (« gâchette facile ») : le refaire avant de conclure." },
      { s: "Champs fiables : MD qui baisse de −2,5 dB par an.", u: "rapide", why: "Progresseur rapide (≥ −2 dB/an) : revoir la cible et le traitement sans tarder." },
      { s: "Glaucomateux connu : nouveau défaut homonyme droit qui respecte le méridien vertical.", u: "urgent", why: "Pas une progression du glaucome : AVC ou masse, imagerie cérébrale urgente." }
    ],
    cues: [
      "MD, PSD, VFI et GHT",
      "Ressaut nasal au 24-2",
      "Faux positifs > 15 %"
    ]
  },

  "ex-speculaire": {
    essentials: [
      "Densité endothéliale : **≈ 3000–3500 cellules/mm²** chez le jeune adulte, ≈ 2500 vers 60–70 ans.",
      "La cornée décompense en général sous **400–500 cellules/mm²**.",
      "**Guttae** = zones noires dans la mosaïque : dystrophie de Fuchs.",
      "**CV ↑ et hexagones ↓** = endothélium stressé, parfois avant la chute de densité.",
      "Crise de fermeture, tube trop près de la cornée et **implants intracamérulaires répétés** font chuter la densité."
    ],
    cloze: [
      "Le polymégathisme se mesure par le [[coefficient de variation|CV]] de la taille des cellules.",
      "Le pléomorphisme s’exprime en pourcentage d’[[hexagones]].",
      "La perte endothéliale liée à l’âge est d’environ [[0,6 %|0,6|0.6 %]] par an.",
      "Une cornée [[œdémateuse|oedémateuse]] rend l’image impossible, ce qui ne veut pas dire normale.",
      "Guttae et cornée épaisse : discuter une chirurgie [[combinée]] cataracte + DMEK plutôt que la cataracte seule.",
      "Un tube peut léser l’endothélium en [[périphérie]] : ne pas mesurer seulement le centre."
    ],
    triage: [
      { s: "Guttae confluentes, cornée épaisse, vision pire le matin ; cataracte à opérer.", u: "routine", why: "Spéculaire et pachymétrie : discuter cataracte + DMEK plutôt que cataracte seule." },
      { s: "Quelques semaines après une crise aiguë de fermeture traitée, cornée redevenue claire.", u: "routine", why: "Microscopie spéculaire utile : la crise fait perdre des cellules endothéliales." }
    ],
    cues: [
      "Densité endothéliale en cellules/mm²",
      "Polymégathisme et pléomorphisme",
      "Coefficient de variation et % d’hexagones"
    ]
  },

  /* ===================== SECTION A5 : RECONNAÎTRE ===================== */

  "a5-cataracte-nucleaire": {
    essentials: [
      "Avec l’âge, le noyau se tasse, jaunit et durcit : c’est la **sclérose nucléaire**.",
      "Myopisation progressive : le presbyte relit sans lunettes, c’est la **seconde vue**.",
      "On opère pour la **gêne fonctionnelle**, pas pour le grade seul.",
      "Noyau dur = plus d’ultrasons = plus de **perte endothéliale** : prudence chez le patient avec Fuchs.",
      "L’**extraction du cristallin** est un vrai traitement de la fermeture de l’angle (EAGLE)."
    ],
    cloze: [
      "La densité du noyau se juge avec une fente fine et [[oblique]], pas en lumière diffuse.",
      "L’échelle standardisée [[LOCS III|LOCS]] compare le cristallin à des photos de référence.",
      "Un noyau brunescent abaisse la déviation totale mais laisse la déviation [[corrigée|PD]] normale.",
      "Myopisation rapide inexpliquée : penser hyperglycémie ou [[subluxation]] antérieure du cristallin.",
      "Guttae avant une phaco : demander une microscopie [[spéculaire]] et une pachymétrie.",
      "EAGLE : extraction du cristallin préférée si PAC avec PIO ≥ [[30 mmHg|30]] ou PACG, dès 50 ans."
    ],
    triage: [
      { s: "Homme de 75 ans : lit sans lunettes depuis des mois, noyau ambre, peu gêné.", u: "routine", why: "Cataracte nucléaire : on opère selon la gêne fonctionnelle, pas selon le grade." },
      { s: "Cataracte nucléaire connue : baisse de vision brutale d’un œil en 2 jours.", u: "urgent", why: "Une cataracte baisse la vision lentement : chercher une cause rétinienne ou du nerf optique le jour même." },
      { s: "Glaucomateux avec noyau brunescent : déviation totale abaissée partout, déviation corrigée normale.", u: "routine", why: "Dépression diffuse due à la cataracte, pas une progression du glaucome." }
    ],
    cues: [
      "Noyau jaune-brun en fente oblique",
      "Myopisation progressive, bleus ternis",
      "Noyau dur : plus d’ultrasons à la phaco"
    ]
  },

  "a5-cataracte-corticale-scp": {
    essentials: [
      "Corticale : **rayons blancs** partant de la périphérie, cachés derrière l’iris sans dilatation.",
      "**SCP** : plaque granuleuse centrale devant la capsule postérieure ; petite, mais très gênante.",
      "La SCP est la cataracte des **corticostéroïdes** : greffés et uvéitiques sous gouttes au long cours.",
      "La **rétroillumination** sur pupille dilatée découpe les opacités sur le reflet rouge.",
      "Cataracte **suturale** congénitale stable : pas une indication chirurgicale à elle seule."
    ],
    cloze: [
      "La SCP gêne de près et en plein soleil, car le [[myosis]] force la lumière à traverser la plaque.",
      "Plainte disproportionnée par rapport à l’AV au tableau : mesurer l’AV avec un test d’[[éblouissement|glare test|glare]].",
      "Devant une SCP sous stéroïdes, mesurer aussi la [[PIO|pression intraoculaire]].",
      "La cataracte suturale forme une opacité en [[Y]] le long des sutures embryonnaires.",
      "Pour voir une SCP à la fente, il faut focaliser [[derrière le noyau]]."
    ],
    triage: [
      { s: "Patient de 35 ans à 6/7,5 au tableau, incapable de conduire de nuit à cause de l’éblouissement.", u: "routine", why: "Petite SCP centrale à chercher en rétroillumination ; chirurgie selon la gêne." },
      { s: "Greffé de cornée sous prednisolone au long cours : SCP gênante, PIO normale.", u: "routine", why: "SCP cortisonique : chirurgie selon la gêne, coordonnée avec l’équipe de cornée." },
      { s: "Opacité en Y découverte par hasard, AV à 6/6, aucune gêne.", u: "routine", why: "Cataracte suturale congénitale stable : pas d’indication chirurgicale." }
    ],
    cues: [
      "Rayons blancs comme ceux d’une roue",
      "Plaque granuleuse scintillante au centre",
      "Opacité en Y congénitale"
    ]
  },

  "a5-cataracte-mature": {
    essentials: [
      "Cataracte **mature** : opaque d’un bord à l’autre, sans reflet rouge.",
      "**Morgagnienne** : cortex liquéfié, noyau tombé dans le bas du sac (stade hypermature).",
      "Fond invisible : **B-scan obligatoire** avant la chirurgie (rétine décollée, tumeur).",
      "Cristallin intumescent qui ferme l’angle = **glaucome phacomorphique** ; protéines qui bouchent le trabéculum = phacolytique.",
      "Au bloc, le **bleu trypan** colore la capsule antérieure pour réussir le capsulorhexis."
    ],
    cloze: [
      "Vision à PL : tester la [[projection lumineuse|projection]] dans les 4 quadrants et chercher un DPAR.",
      "Angle ouvert, chambre profonde et particules blanches en chambre antérieure : glaucome [[phacolytique]].",
      "Cataracte blanche gonflée, chambre moins profonde que l’autre œil et angle fermé : glaucome [[phacomorphique]].",
      "La biométrie optique échoue souvent : prévoir une biométrie [[ultrasonique|échographique]].",
      "Capsule sous tension qui se déchire dès l’ouverture : signe du [[drapeau argentin]]."
    ],
    triage: [
      { s: "Cataracte blanche, aucun reflet rouge, PL bien projetée, PIO normale, angle ouvert.", u: "rapide", why: "Chirurgie en quelques semaines ; B-scan et biométrie ultrasonique avant." },
      { s: "Cataracte blanche gonflée, chambre plate comparée à l’autre œil, angle fermé, PIO à 46 mmHg.", u: "urgent", why: "Glaucome phacomorphique : baisser la PIO le jour même, puis extraire rapidement le cristallin." }
    ],
    cues: [
      "Leucocorie chez l’adulte",
      "Noyau brun tombé au bas du sac",
      "Aucun reflet rouge en rétroillumination"
    ]
  },

  "a5-opacification-capsulaire": {
    essentials: [
      "Des cellules du cristallin restées sur place voilent la **capsule postérieure** derrière l’implant.",
      "Rétroillumination : voile gris, fibrose ou **perles d’Elschnig** derrière un implant clair et centré.",
      "Avant la **capsulotomie YAG**, exclure un œdème maculaire à l’OCT.",
      "Glaucomateux : **alpha-agoniste** avant ou après le YAG, énergie minimale, PIO recontrôlée dans les heures.",
      "Après un YAG, revenir d’urgence si **éclairs, mouches ou voile** (décollement de rétine)."
    ],
    cloze: [
      "Un pic de PIO après un YAG peut emporter le peu de champ d’un glaucome [[avancé]].",
      "Prophylaxie du pic de PIO : [[apraclonidine|brimonidine|alpha-agoniste]] avant ou juste après le laser.",
      "Risques rares du YAG : œdème maculaire [[cystoïde]], décollement de rétine, marques sur l’implant.",
      "Échange d’implant envisagé : en discuter avant le laser, car une capsule [[intacte]] facilite la chirurgie.",
      "Avant un YAG, un [[OCT|OCT maculaire]] permet d’exclure un œdème de la macula comme cause de la baisse."
    ],
    triage: [
      { s: "Pseudophake depuis 3 ans : voile progressif, perles d’Elschnig, OCT maculaire normal.", u: "routine", why: "Opacification capsulaire : capsulotomie YAG." },
      { s: "Deux jours après un YAG, myope fort : éclairs, mouches volantes et voile.", u: "urgent", why: "Décollement de rétine possible : examen dilaté le jour même." },
      { s: "Glaucome avancé : capsulotomie YAG faite ce matin sans prophylaxie.", u: "urgent", why: "Pic de PIO possible : remesurer la PIO dans les heures qui suivent." }
    ],
    cues: [
      "Perles d’Elschnig derrière l’implant",
      "Voile qui revient des années après",
      "Implant clair, voile gris derrière"
    ]
  },

  "a5-bscan": {
    essentials: [
      "Le **B-scan** montre l’intérieur de l’œil quand le fond est invisible (cataracte blanche, hémorragie, cornée opaque).",
      "La coupe porte le nom du méridien examiné, **à l’opposé de la sonde**.",
      "**Gain élevé** pour voir les échos faibles ; le baisser pour comparer la réflectivité.",
      "Rétine décollée : membrane épaisse **attachée au nerf optique** ; vitré décollé : fin et très mobile.",
      "Globe possiblement ouvert : **pas d’échographie de contact**."
    ],
    cloze: [
      "La sonde est à gauche de l’écran ; son [[marqueur]] correspond au haut de l’image.",
      "Pour voir le méridien de 12 h, on place la sonde à [[6 h|6 heures]], regard vers le haut.",
      "Œil très court, forte hypermétropie et sclère épaisse : [[nanophtalmie]].",
      "Au B-scan, un contenu fait de liquide clair est [[anéchogène|anéchoïque]].",
      "Un gain trop [[bas|faible|basse]] fait disparaître un décollement postérieur du vitré ou une hémorragie légère.",
      "Coupe [[longitudinale]] : marqueur perpendiculaire au limbe, un méridien du pôle postérieur à la périphérie."
    ],
    triage: [
      { s: "Cataracte blanche ; au B-scan, membrane épaisse en V attachée au nerf optique.", u: "urgent", why: "Décollement de rétine : référer en rétine le jour même." },
      { s: "Hypotonie après trabéculectomie ; au B-scan, dômes épais non attachés au nerf, contenu anéchogène.", u: "urgent", why: "Décollement choroïdien séreux : chercher la cause et aviser le glaucomologue le jour même." },
      { s: "Forte hypermétropie, œil très court à sclère épaisse au B-scan, cataracte à opérer.", u: "routine", why: "Nanophtalmie : gonioscopie et prévenir le chirurgien (effusion uvéale, fermeture de l’angle)." }
    ],
    cues: [
      "Sonde sur la paupière fermée, avec gel",
      "Coupe en éventail du globe",
      "Gain près du maximum"
    ]
  },

  "a5-decollement-retine": {
    essentials: [
      "**Rhegmatogène** : une déchirure laisse passer le liquide du vitré sous la rétine.",
      "Éclairs, nouvelles mouches puis **rideau** qui avance, du côté opposé au décollement.",
      "**Signe de Shafer** (poussière de tabac dans le vitré antérieur) : fortement associé à une déchirure.",
      "**Macula attachée** = vraie urgence : appel en rétine le jour même pour sauver la vision centrale.",
      "**Tractionnel** : membranes fibrovasculaires du diabétique qui tirent la rétine, sans déchirure."
    ],
    cloze: [
      "Un décollement supérieur donne un voile dans le champ [[inférieur|en bas|inférieure]].",
      "La déchirure typique est en [[fer à cheval]], souvent en périphérie supérieure.",
      "Les déchirures étant périphériques, on examine dilaté avec [[indentation|indentation sclérale]].",
      "Les myotiques comme la [[pilocarpine]] ont été associés à des déchirures et décollements.",
      "Macula décollée : le pronostic dépend de la [[durée]] du décollement.",
      "Décollement tractionnel : chercher des [[néovaisseaux]] sur l’iris et dans l’angle."
    ],
    triage: [
      { s: "Myope fort : éclairs puis rideau depuis hier, AV à 6/6, décollement supérieur bulleux.", u: "urgent", why: "Macula attachée : appel en rétine le jour même, la vision centrale est à sauver." },
      { s: "Décollement avec macula décollée depuis 3 jours, AV à compte les doigts.", u: "urgent", why: "Référer aussi le jour même ; la réparation se fait dans les jours suivants." },
      { s: "Éclairs et nouvelles mouches depuis 2 jours, pigment dans le vitré antérieur.", u: "urgent", why: "Signe de Shafer : trouver la déchirure (examen dilaté avec indentation) ou référer sans délai." }
    ],
    cues: [
      "Poussière de tabac dans le vitré antérieur",
      "Rideau qui avance après des éclairs",
      "Déchirure en fer à cheval"
    ]
  },

  "a5-decollement-choroidien": {
    essentials: [
      "Décollement choroïdien : **dômes bruns lisses** et fermes en périphérie, immobiles avec l’œil.",
      "**Séreux** : PIO basse, peu de douleur, souvent après chirurgie filtrante (surfiltration, fuite).",
      "**Hémorragique** : douleur brutale sévère, PIO élevée, chambre plate, pendant ou après une chirurgie.",
      "Au B-scan, les dômes **ne s’attachent pas au nerf optique**, contrairement à la rétine décollée.",
      "Pas de **pilocarpine** dans une chambre plate par effusion : elle accentue la bascule vers l’avant."
    ],
    cloze: [
      "Dômes qui se touchent au centre ou contact avec la cornée : discuter un [[drainage]].",
      "Effusion sans chirurgie, douleur et signe du [[T]] au B-scan : sclérite postérieure.",
      "Effusion ciliochoroïdienne médicamenteuse : penser au [[topiramate]].",
      "Effusion séreuse avec hypotonie : chercher une fuite avec le test de [[Seidel]].",
      "Chambre plate avec PIO élevée : hémorragie suprachoroïdienne ou [[mal-direction|maldirection]] de l’aqueuse.",
      "Avant de drainer le sang, on attend souvent que le caillot soit [[liquéfié]] (1 à 2 semaines)."
    ],
    triage: [
      { s: "Après trabéculectomie : PIO à 3 mmHg, dômes bruns en périphérie, peu de douleur.", u: "urgent", why: "Effusion séreuse par hypotonie : Seidel, cycloplégique, stéroïde et glaucomologue le jour même." },
      { s: "Douleur brutale et sévère après une chirurgie, PIO à 45 mmHg, chambre plate.", u: "urgent", why: "Hémorragie suprachoroïdienne : baisser la PIO, soulager et aviser le chirurgien d’urgence." }
    ],
    cues: [
      "Dômes bruns qui s’embrassent",
      "Ora serrata visible sans indentation",
      "Hypotonie postopératoire et dômes bruns"
    ]
  },

  "a5-dmla": {
    essentials: [
      "DMLA sèche : **drusen** jaunes sous l’épithélium pigmentaire, puis atrophie géographique au stade avancé.",
      "Forme **néovasculaire** : hémorragie ou liquide sous-rétinien, métamorphopsies ; la vision peut chuter en jours.",
      "**Grille d’Amsler**, un œil à la fois : lignes ondulées ou zone manquante au centre.",
      "Les **anti-VEGF** font monter la PIO après chaque injection : à surveiller chez le glaucomateux.",
      "La DMLA fausse l’AV, le champ central et le **GCIPL maculaire** : ne pas conclure à une progression."
    ],
    cloze: [
      "Les suppléments [[AREDS2]] visent le stade intermédiaire ou un œil déjà au stade avancé.",
      "L’atrophie [[géographique]] laisse voir les gros vaisseaux choroïdiens dans une zone pâle aux bords nets.",
      "Métamorphopsie récente : référence en rétine en quelques [[jours]] pour anti-VEGF.",
      "En cornée, la povidone [[iodée]] de chaque injection irrite un épithélium fragile.",
      "Forme sèche : OCT de base, Amsler à la maison et arrêt du [[tabac]]."
    ],
    triage: [
      { s: "Glaucomateux : cadre de porte ondulé depuis 4 jours, hémorragie sous-rétinienne.", u: "rapide", why: "DMLA néovasculaire : rétine en quelques jours pour anti-VEGF." },
      { s: "Quelques petits drusen, AV à 6/6, aucun symptôme.", u: "routine", why: "Forme précoce : pas de suppléments ; Amsler, arrêt du tabac et suivi." },
      { s: "Glaucomateux sous anti-VEGF : PIO qui reste élevée entre les injections.", u: "rapide", why: "Hausse soutenue : noter les dates d’injection et en parler au rétinologue." }
    ],
    cues: [
      "Drusen confluents, atrophie aux bords nets",
      "Hémorragie sous-rétinienne après 50 ans"
    ]
  },

  "a5-retinopathie-diabetique": {
    essentials: [
      "Non proliférante : **microanévrismes**, hémorragies en points et taches, exsudats durs, nodules cotonneux.",
      "Règle **4-2-1** (forme sévère) : hémorragies 4 quadrants, chapelet 2, IRMA 1 ; un critère suffit.",
      "Proliférante : **NVD ou NVE**, puis hémorragie du vitré et décollement tractionnel.",
      "Examiner l’**iris avant de dilater** et faire une gonioscopie si rétinopathie avancée ou PIO élevée.",
      "Après **PRP**, le laser laisse lui-même des déficits périphériques du champ, pas forcément dus au glaucome."
    ],
    cloze: [
      "Les néovaisseaux de l’[[angle]] peuvent apparaître avant ceux de l’iris visibles à la fente.",
      "Les IRMA sont dans l’épaisseur de la rétine ; les néovaisseaux, à la [[surface]], fuient beaucoup.",
      "Avant une cataracte, traiter ou stabiliser d’abord l’[[œdème maculaire|oedème maculaire]] diabétique.",
      "La rétine ischémique libère du [[VEGF]], qui fait pousser les néovaisseaux.",
      "Les veines en [[chapelet]] sont un signe de sévérité de la forme non proliférante.",
      "À l’angiographie, la périphérie non [[perfusée]] paraît sombre, sans capillaires."
    ],
    triage: [
      { s: "Diabétique : NVD et petite hémorragie du vitré, angle sans néovaisseaux.", u: "rapide", why: "Rétinopathie proliférante : rétine en quelques jours pour PRP et/ou anti-VEGF." },
      { s: "Œdème maculaire diabétique qui touche le centre ; cataracte à opérer.", u: "rapide", why: "Rétine pour anti-VEGF ; stabiliser l’œdème avant la cataracte." },
      { s: "Diabétique, PIO à 30 mmHg : néovaisseaux de l’angle à la gonioscopie.", u: "urgent", why: "Glaucome néovasculaire débutant : traiter l’ischémie (PRP, anti-VEGF) en urgence." }
    ],
    cues: [
      "Veines en chapelet et IRMA",
      "Lacis fins sur la papille",
      "Microanévrismes et hémorragies en points"
    ]
  },

  "a5-occlusions-retiniennes": {
    essentials: [
      "**OACR** : rétine pâle opaque, tache rouge cerise, artérioles grêles ; c’est un AVC de l’œil.",
      "OACR aiguë : diriger **immédiatement** vers l’urgence d’un centre de l’AVC.",
      "OACR à 50 ans ou plus : éliminer l’**artérite à cellules géantes** (VS, CRP, plaquettes).",
      "**OVCR** : hémorragies dans les 4 quadrants, veines dilatées et tortueuses, papille gonflée.",
      "OVCR ischémique : gonioscopie environ chaque mois, risque de **glaucome des 90 jours**."
    ],
    cloze: [
      "Un embole jaune brillant à une bifurcation artériolaire est une plaque de [[Hollenhorst]].",
      "Une artère [[ciliorétinienne]] peut épargner la vision centrale dans une OACR.",
      "OVCR ischémique : PRP dès l’apparition de NVI ou de NVA, plutôt qu’en [[prévention|prophylaxie]] (CVOS).",
      "L’OBVR siège à un croisement [[artérioveineux|artério-veineux]], où l’artériole rigide comprime la veine.",
      "Le glaucome et une PIO [[élevée]] sont des facteurs de risque d’OVCR.",
      "Après une OVCR, l’OCT RNFL faussement épaissi par l’œdème est une [[green disease|faux négatif]]."
    ],
    triage: [
      { s: "Homme de 72 ans : vision noire soudaine d’un œil depuis 1 h, tache rouge cerise.", u: "urgent", why: "OACR. Urgence : immédiatement (le jour même), comme un AVC ; éliminer l’artérite à cellules géantes." },
      { s: "Hémorragies dans les 4 quadrants, AV à 6/24, iris et angle sans néovaisseaux.", u: "rapide", why: "OVCR : ophtalmologie dans la semaine pour l’œdème maculaire ; gonioscopie de surveillance." },
      { s: "Plaque de Hollenhorst trouvée par hasard, aucun symptôme.", u: "rapide", why: "Signal d’alarme vasculaire : aviser le médecin de famille pour un bilan carotidien." }
    ],
    cues: [
      "Tache rouge cerise maculaire",
      "Sang et tonnerre dans 4 quadrants",
      "Embole jaune brillant à une bifurcation"
    ]
  },

  "a5-retinopathie-hypertensive": {
    essentials: [
      "HTA chronique : **artérioles rétrécies** et croisements artérioveineux pathologiques (AV nicking).",
      "Poussée sévère : **hémorragies en flammèches**, nodules cotonneux et exsudats durs, parfois en étoile.",
      "Papille gonflée + TA très élevée = **hypertension maligne** : urgence médicale immédiate.",
      "La TA est abaissée **graduellement** : une chute brutale peut causer une ischémie du nerf ou du cerveau.",
      "Toujours **prendre la TA** devant un œdème papillaire bilatéral."
    ],
    cloze: [
      "Le rapport normal du calibre artère/veine est d’environ [[2/3|deux tiers]].",
      "Le nodule cotonneux est un [[infarctus]] de la couche des fibres nerveuses.",
      "L’hypertension est le principal facteur de risque d’[[OBVR|occlusion de branche veineuse]].",
      "Exsudat dur : jaune brillant à bords nets ; nodule cotonneux : blanc [[duveteux]] à bords flous.",
      "L’AAO 2026 ajoute la TA [[basse|bas]] comme facteur de risque de glaucome."
    ],
    triage: [
      { s: "Artérioles fines et croisements pathologiques, TA à 150/90, aucun symptôme.", u: "routine", why: "Signes chroniques : noter la TA au dossier et aviser le médecin de famille." },
      { s: "Céphalée, TA à 230/130, papilles gonflées, hémorragies en flammèches.", u: "urgent", why: "Hypertension maligne : envoi immédiat à l’urgence (TA abaissée graduellement)." },
      { s: "Homme de 45 ans : nodules cotonneux et flammèches, mais TA normale.", u: "rapide", why: "Chercher une autre cause : diabète, VIH, maladie systémique." }
    ],
    cues: [
      "Veine pincée au croisement, artérioles rétrécies",
      "Rapport artère/veine nettement diminué",
      "Artérioles fines, flammèches, nodules cotonneux"
    ]
  },

  "a5-macula-chirurgicale": {
    essentials: [
      "**Membrane épirétinienne** : reflet cellophane et plis ; à l’OCT, ligne hyperréflective qui efface le creux fovéolaire.",
      "**Trou maculaire** de pleine épaisseur : défaut de toutes les couches à l’OCT ; chirurgie, mieux si récent.",
      "**CRSC** : bulle de liquide clair sous la macula, favorisée par les stéroïdes de toutes les voies.",
      "Nouvelles **métamorphopsies** : grille d’Amsler, puis OCT maculaire le jour même si possible.",
      "Ne jamais **cesser brusquement** le stéroïde d’une greffe pour une CRSC : risque de rejet."
    ],
    cloze: [
      "À l’angiographie, la CRSC fuit en tache d’encre ou en [[cheminée|smokestack]].",
      "Le trou [[lamellaire]] garde la couche externe intacte et reste souvent stable.",
      "Une membrane épirétinienne épaissit la macula et fausse l’OCT des [[cellules ganglionnaires|GCIPL]].",
      "Trou de pleine épaisseur récent : vitrectomie, [[gaz]] et positionnement.",
      "CRSC : faire l’inventaire de [[tous les corticostéroïdes|tous les stéroïdes|corticostéroïdes]], gouttes, crèmes, inhalateurs et vaporisateurs nasaux inclus."
    ],
    triage: [
      { s: "Homme de 40 ans sous prednisolone topique : lignes ondulées d’un œil, liquide sous la macula à l’OCT.", u: "rapide", why: "CRSC : réduire prudemment le stéroïde avec l’équipe de cornée ; rétine si le liquide persiste." },
      { s: "Trou maculaire de pleine épaisseur apparu il y a 3 semaines.", u: "rapide", why: "Rétine en quelques semaines : meilleurs résultats si le trou est récent." },
      { s: "Membrane épirétinienne peu gênante, AV à 6/9.", u: "routine", why: "Amsler et suivi ; chirurgie seulement si la gêne devient importante." }
    ],
    cues: [
      "Reflet cellophane et plis autour de la fovéa",
      "Fuite en cheminée à l’angiographie",
      "Défaut fovéolaire de pleine épaisseur à l’OCT"
    ]
  },

  "a5-peripherie-vitre": {
    essentials: [
      "**Anneau de Weiss** devant la papille = preuve d’un décollement postérieur du vitré.",
      "Nouveaux éclairs ou corps flottants : **examen dilaté** de toute la périphérie sans délai, avec indentation.",
      "**Palissade** : bandes de rétine amincie parallèles à l’ora, lignes blanches entrecroisées, pigment.",
      "**Rétinoschisis** : dôme lisse, transparent, immobile, souvent inférotemporal et bilatéral.",
      "Avant la **pilocarpine** chez un myope : examen dilaté de la périphérie (traction sur la base du vitré)."
    ],
    cloze: [
      "Hyalose [[astéroïde]] : particules blanc-jaune brillantes dans le vitré, vision habituellement normale.",
      "Le rétinoschisis donne un scotome [[absolu]] et ne bouge pas.",
      "Le vrai danger d’un DPV est la [[déchirure]] rétinienne associée.",
      "Hyalose astéroïde qui gêne l’imagerie : s’appuyer davantage sur le [[champ visuel]].",
      "Astéroïdes brillants et nets, sans douleur ni baisse de vision : rien à voir avec l’inflammation du vitré, ou [[vitrite]]."
    ],
    triage: [
      { s: "Éclairs avec un rideau qui avance et une baisse de vision.", u: "urgent", why: "Décollement de rétine jusqu’à preuve du contraire : rétine le jour même." },
      { s: "Nouveaux corps flottants depuis 2 jours, anneau de Weiss, sans rideau.", u: "urgent", why: "DPV récent : examen dilaté de toute la périphérie sans délai, à la recherche d’une déchirure." },
      { s: "Palissade asymptomatique découverte chez un myope au fond d’œil de routine.", u: "routine", why: "Surveillance et enseignement des symptômes d’alarme." }
    ],
    cues: [
      "Cercle grisâtre flottant devant la papille",
      "Lignes blanches entrecroisées parallèles à l’ora",
      "Particules brillantes en suspension, vision normale"
    ]
  },

  "a5-inflammation-infection": {
    essentials: [
      "Uvéite antérieure : œil rouge douloureux, photophobie, **cellules et tyndall** en chambre antérieure.",
      "Le **cycloplégique** soulage et prévient les synéchies postérieures ; stéroïde après avoir éliminé une infection.",
      "**Endophtalmie** : douleur, baisse de vision, hypopyon, vitrite ; ponction-injection le jour même.",
      "Bulle blanc laiteux + cellules en chambre = **endophtalmie liée à la bulle**, même des années après.",
      "Synéchies sur 360° → **iris bombé** et fermeture secondaire de l’angle : iridotomie ou iridectomie."
    ],
    cloze: [
      "Endophtalmie, en intravitréen : [[vancomycine]] 1 mg/0,1 mL et ceftazidime 2,25 mg/0,1 mL.",
      "Toxoplasmose : foyer actif au bord d’une cicatrice, le « phare dans le [[brouillard]] ».",
      "Une rétinite à [[CMV|cytomégalovirus]] inattendue fait chercher une immunosuppression (VIH).",
      "La nécrose rétinienne aiguë est due au [[VZV|virus varicelle-zona|varicelle-zona]] ou à l’HSV.",
      "Pendant l’inflammation, la PIO est souvent [[basse|bas]] ; elle peut remonter sous stéroïdes.",
      "Penser [[infection]] avant de donner un stéroïde seul pour une « uvéite »."
    ],
    triage: [
      { s: "Trabéculectomie il y a 5 ans : bulle blanc laiteux, cellules en chambre, œil rouge.", u: "urgent", why: "Endophtalmie liée à la bulle : ponction-injection intravitréenne le jour même." },
      { s: "Plages blanches confluentes en périphérie qui avancent vite, vitrite marquée.", u: "urgent", why: "Nécrose rétinienne aiguë : antiviraux en urgence avec la rétine." },
      { s: "Immunosupprimé : plages blanches granuleuses hémorragiques près de la macula, peu de vitrite.", u: "rapide", why: "Rétinite à CMV : rétine ou uvéite rapidement pour un antiviral." }
    ],
    cues: [
      "Phare dans le brouillard",
      "Bulle blanc laiteux et hypopyon",
      "Plages blanches granuleuses le long des vaisseaux"
    ]
  },

  "a5-papille-oedeme": {
    essentials: [
      "Vrai œdème : **vaisseaux voilés** au bord de la papille, hyperémie, flammèches, nodules cotonneux.",
      "Œdème papillaire bilatéral : TA, puis **neuro-imagerie le jour même**, avant la ponction lombaire.",
      "NOIA ≥ 50 ans : si **artérite** suspectée, stéroïdes le jour même, sans attendre la biopsie.",
      "**Drusen papillaires** : papille bosselée, vaisseaux nets ; ils imitent un glaucome au champ et à l’OCT.",
      "Une papille gonflée n’est **jamais glaucomateuse**."
    ],
    cloze: [
      "Dans l’hypertension intracrânienne, l’AV reste [[bonne|conservée|normale]] jusqu’à un stade avancé.",
      "Neurorétinite : papille gonflée puis étoile maculaire ; cause fréquente : [[Bartonella|Bartonella henselae|maladie des griffes du chat]].",
      "La NOIA non artéritique donne typiquement un défaut [[altitudinal]] du champ.",
      "Les drusen papillaires sont [[hyperéchogènes]] au B-scan et persistent à gain bas.",
      "Œdème papillaire : diplopie horizontale par paralysie du [[VI|nerf abducens|6e nerf]].",
      "La NOIA artéritique donne un œdème pâle « blanc [[crayeux]] »."
    ],
    triage: [
      { s: "Femme de 28 ans : céphalées, obscurcissements visuels transitoires, deux papilles gonflées, AV à 6/6.", u: "urgent", why: "Œdème papillaire : TA puis neuro-imagerie le jour même, avant la ponction lombaire." },
      { s: "Homme de 74 ans : perte de vision brutale, papille blanc crayeux, claudication de la mâchoire.", u: "urgent", why: "NOIA artéritique : VS, CRP, plaquettes et stéroïdes le jour même, pour protéger l’autre œil." },
      { s: "Papille bosselée à vaisseaux nets, drusen confirmés à l’autofluorescence, sans symptôme.", u: "routine", why: "Pseudo-œdème confirmé ; attention, les drusen imitent un glaucome au champ et à l’OCT." }
    ],
    cues: [
      "Vaisseaux voilés au bord du disque",
      "Tache aveugle agrandie, obscurcissements transitoires",
      "Disque bosselé à corps réfringents"
    ]
  },

  "a5-pupilles-neuro": {
    essentials: [
      "**Horner** : myosis et légère ptose du même côté ; anisocorie plus marquée au noir.",
      "**Apraclonidine** : dans un Horner, la petite pupille se dilate et l’anisocorie s’inverse.",
      "Horner aigu douloureux = **dissection carotidienne** jusqu’à preuve du contraire : angio-imagerie le jour même.",
      "**Hémianopsie homonyme** : défaut limité par le méridien vertical, lésion derrière le chiasma.",
      "Grande pupille avec ptose ou diplopie : **paralysie du III** par anévrisme jusqu’à preuve du contraire."
    ],
    cloze: [
      "Le test à l’apraclonidine peut être faussement [[négatif|négative]] dans un Horner très récent.",
      "Plus les défauts homonymes se ressemblent, plus la lésion est [[postérieure]].",
      "Horner nouveau chez l’enfant : penser [[neuroblastome]].",
      "L’apraclonidine dilate la pupille du Horner par hypersensibilité de [[dénervation]].",
      "Une hémianopsie complète ne respecte pas la norme [[SAAQ]] de 30° de chaque côté du méridien vertical.",
      "Ni le Horner ni l’hémianopsie occipitale ne donnent de [[DPAR|RAPD]]."
    ],
    triage: [
      { s: "Douleur au cou et au visage depuis hier ; myosis et légère ptose à droite.", u: "urgent", why: "Horner douloureux : dissection carotidienne, angio-TDM ou angio-IRM tête et cou le jour même." },
      { s: "Enfant de 2 ans : petite pupille et légère ptose récentes, sans douleur.", u: "rapide", why: "Horner non douloureux : imagerie de toute la voie sympathique rapidement (neuroblastome chez l’enfant)." },
      { s: "Nouveau défaut homonyme gauche au champ visuel, AV normale.", u: "urgent", why: "Hémianopsie homonyme nouvelle : imagerie cérébrale urgente." }
    ],
    cues: [
      "Petite pupille dilatée par l’apraclonidine",
      "Myosis et légère ptose du même côté",
      "Même moitié du champ perdue aux deux yeux"
    ]
  },

  "a5-tumeurs-toxicite-trauma": {
    essentials: [
      "**Nævus** : gris ardoise, plat (< 2 mm), drusen ou halo, sans liquide ni pigment orange.",
      "**Mélanome** : épaisseur > 2 mm, liquide sous-rétinien, symptômes, pigment orange, creux acoustique.",
      "Toujours une **photo de référence** : sans comparaison, impossible de prouver qu’un nævus n’a pas grandi.",
      "**Hydroxychloroquine** : ≤ 5 mg/kg/jour de poids réel ; 10-2 et OCT annuels après 5 ans, plus tôt si risque élevé.",
      "Après un coup : chercher une **récession de l’angle** à la gonioscopie, puis surveiller la PIO à vie."
    ],
    cloze: [
      "La toxicité de l’hydroxychloroquine se voit d’abord à l’OCT : amincissement [[parafovéal]] des couches externes.",
      "Au stade tardif, la toxicité donne une maculopathie en [[œil de bœuf|oeil de boeuf|bull’s eye]].",
      "Chez le patient d’origine asiatique, on ajoute un [[24-2]] au 10-2 (atteinte plus périphérique).",
      "La commotio retinae au pôle postérieur porte le nom d’œdème de [[Berlin]].",
      "Facteur de risque de mélanome : bord à 3 mm ou moins de la [[papille]].",
      "À l’échographie, un creux [[acoustique]] oriente vers un mélanome plutôt qu’un nævus."
    ],
    triage: [
      { s: "Lésion pigmentée choroïdienne de 3 mm d’épaisseur, avec liquide sous-rétinien et pigment orange.", u: "rapide", why: "Plusieurs facteurs de risque de mélanome : oncologie oculaire rapidement." },
      { s: "Nævus plat de 1 mm avec drusen, sans liquide ni pigment orange.", u: "routine", why: "Photo de référence, contrôle rapproché, puis annuel si stable." },
      { s: "Patiente sous hydroxychloroquine depuis 6 ans, sans symptôme.", u: "routine", why: "Dépistage annuel après 5 ans : champ 10-2 et OCT maculaire." }
    ],
    cues: [
      "Pigment orange et liquide sous-rétinien",
      "Maculopathie en œil de bœuf",
      "Blanchiment rétinien après un coup"
    ]
  }

});
