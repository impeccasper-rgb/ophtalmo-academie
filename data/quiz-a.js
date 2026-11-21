var G = (typeof window !== 'undefined') ? window : globalThis;
G.OPH = G.OPH || {};
// Module A : QCM d’ophtalmologie générale (anatomie, physiologie, examen, imagerie)
G.OPH.quiz = (G.OPH.quiz || []).concat([

  // ---------- a-anatomie ----------
  {
    id: "A-001", module: "A", topic: "a-anatomie", type: "anatomie", level: 1, trap: false,
    stem: "Tu fais une pachymétrie ultrasonore (pachymetry : mesure de l’épaisseur de la cornée avec une petite sonde) chez une étudiante de 24 ans sans antécédent. Ton patron te demande quelle couche forme l’essentiel de l’épaisseur cornéenne et quelle valeur centrale tu t’attends à lire.",
    figure: null,
    options: [
      "Le stroma (≈ 90 % de l’épaisseur) ; centre ≈ 540–550 µm",
      "L’épithélium (≈ 50 % de l’épaisseur) ; centre ≈ 540–550 µm",
      "Le stroma (≈ 90 % de l’épaisseur) ; centre ≈ 650–700 µm",
      "La membrane de Descemet (≈ 30 %) ; centre ≈ 450 µm"
    ],
    answer: 0,
    explain: "Raisonnement : 1) de l’avant vers l’arrière, la cornée compte l’épithélium (≈ 50 µm), la couche de Bowman (8–12 µm), le stroma, la couche de Dua, la Descemet et l’endothélium (une seule assise de cellules) ; 2) toutes ces couches sont minces sauf le stroma (stroma), fait de lamelles de collagène de type I et d’environ 78 % d’eau, qui occupe donc ≈ 90 % de l’épaisseur ; 3) la cornée est plus mince au centre (≈ 540–550 µm) qu’en périphérie (≈ 650–700 µm), et c’est la valeur centrale qu’on mesure, car elle sert à interpréter la PIO.",
    why: [
      "Exact : le stroma fait ≈ 90 % de l’épaisseur, et le centre mesure ≈ 540–550 µm chez l’adulte.",
      "L’épithélium ne mesure que ≈ 50 µm (5–7 assises de cellules), soit environ 10 % de l’épaisseur, pas la moitié.",
      "Bonne couche, mais 650–700 µm est la valeur de la périphérie ; le centre est plus mince.",
      "La Descemet (membrane basale de l’endothélium) ne mesure que 10–15 µm chez l’adulte ; 450 µm serait une cornée nettement mince."
    ]
  },
  {
    id: "A-002", module: "A", topic: "a-anatomie", type: "anatomie", level: 1, trap: false,
    stem: "En gonioscopie (gonioscopy : examen de l’angle iridocornéen avec un verre à miroir posé sur la cornée) d’un angle grand ouvert, tu décris de la racine de l’iris vers la cornée : une bande gris-brun, une ligne blanchâtre, puis une bande pigmentée. Ton patron pointe la bande pigmentée : de quelle structure s’agit-il ?",
    figure: null,
    options: [
      "La bande ciliaire, face antérieure du corps ciliaire",
      "La ligne de Schwalbe, terminaison de la membrane de Descemet",
      "Le trabéculum pigmenté, portion filtrante principale",
      "Le canal de Schlemm, visible lorsqu’il se remplit de sang"
    ],
    answer: 2,
    explain: "Raisonnement : 1) on nomme les structures de l’arrière vers l’avant avec « I Can’t See Til Schwalbe » : racine de l’Iris, bande Ciliaire (gris-brun), éperon Scléral (ligne blanche), Trabéculum, ligne de Schwalbe ; 2) la bande pigmentée qui suit la ligne blanche (l’éperon) est donc le trabéculum pigmenté (pigmented trabecular meshwork) ; 3) c’est la partie filtrante, placée devant le canal de Schlemm, et le pigment s’y dépose justement parce que l’aqueuse y passe.",
    why: [
      "La bande ciliaire est la bande gris-brun la plus postérieure : c’est la face antérieure du corps ciliaire, entre la racine de l’iris et l’éperon.",
      "La ligne de Schwalbe est la structure la plus antérieure, une fine crête blanchâtre : c’est la fin de la membrane de Descemet, au-delà du trabéculum.",
      "Exact : juste en avant de l’éperon scléral, c’est la zone qui filtre l’aqueuse vers le canal de Schlemm.",
      "Le canal de Schlemm n’est normalement pas visible ; il apparaît en ligne rouge seulement si du sang y reflue (verre qui comprime les veines épisclérales ou pression veineuse épisclérale élevée)."
    ]
  },
  {
    id: "A-003", module: "A", topic: "a-anatomie", type: "physiopathologie", level: 2, trap: false,
    stem: "Femme de 64 ans avec un angle étroit par bloc pupillaire relatif (pupillary block : l’aqueuse passe mal entre l’iris et le cristallin). Ton patron fait une iridotomie périphérique au laser (laser peripheral iridotomy, LPI : petit trou dans l’iris périphérique) et te demande pourquoi ce trou suffit à approfondir l’angle.",
    figure: null,
    options: [
      "Il augmente directement la facilité d’écoulement du trabéculum",
      "Il laisse l’aqueuse passer de la chambre postérieure à l’antérieure",
      "Il crée une fistule de drainage vers l’espace sous-conjonctival",
      "Il diminue la production d’aqueuse par les procès ciliaires"
    ],
    answer: 1,
    explain: "Raisonnement : 1) l’humeur aqueuse est produite dans la chambre postérieure (derrière l’iris) par les procès ciliaires ; 2) elle doit franchir la pupille pour atteindre la chambre antérieure puis l’angle ; 3) si ce passage est freiné, la pression monte derrière l’iris, qui bombe vers l’avant et ferme l’angle. Le trou de la LPI offre un passage de rechange : les pressions s’égalisent, l’iris s’aplatit et l’angle s’ouvre.",
    why: [
      "Le trabéculum (filtre de l’angle) n’est pas modifié ; l’effet vient de l’égalisation des pressions de part et d’autre de l’iris.",
      "Exact : l’aqueuse contourne la pupille par le trou, ce qui supprime la poussée qui bombait l’iris.",
      "Ça décrit une trabéculectomie (chirurgie qui crée une fistule drainant l’aqueuse sous la conjonctive) ; la LPI ne communique pas avec cet espace.",
      "La LPI ne touche pas le corps ciliaire : la quantité d’aqueuse produite reste la même."
    ]
  },
  {
    id: "A-004", module: "A", topic: "a-anatomie", type: "anatomie", level: 1, trap: false,
    stem: "Avant une injection intravitréenne (médicament injecté dans le vitré, le gel qui remplit l’arrière de l’œil) chez un patient phaque (qui a encore son cristallin), ton patron pique à environ 4 mm en arrière du limbe. Il te demande pourquoi à cet endroit, et quelle portion du corps ciliaire (ciliary body) produit l’humeur aqueuse.",
    figure: null,
    options: [
      "On traverse la pars plicata ; l’aqueuse vient de la pars plana",
      "On traverse l’ora serrata ; l’aqueuse vient de l’épithélium irien",
      "On traverse la pars plana ; l’aqueuse vient du muscle ciliaire",
      "On traverse la pars plana ; l’aqueuse vient de la pars plicata"
    ],
    answer: 3,
    explain: "Raisonnement : 1) le corps ciliaire a deux portions : en avant, la pars plicata porte les procès ciliaires, dont l’épithélium non pigmenté sécrète l’aqueuse ; en arrière, la pars plana est plate, peu vascularisée et sans rétine ; 2) la rétine commence plus loin, à l’ora serrata (bord antérieur dentelé de la rétine) ; 3) en piquant dans la pars plana, on évite à la fois le cristallin et les procès ciliaires en avant, et la rétine en arrière.",
    why: [
      "Inversé : la pars plicata (procès ciliaires) est vascularisée et produit l’aqueuse ; on ne pique pas à travers elle.",
      "L’ora serrata marque le début de la rétine : y piquer expose à une déchirure ; l’épithélium de l’iris ne sécrète pas l’aqueuse.",
      "Bon site, mais le muscle ciliaire sert à l’accommodation (mise au point de près) et à la voie uvéosclérale (sortie de l’aqueuse entre ses fibres), pas à la sécrétion.",
      "Exact : on entre par la pars plana ; l’aqueuse vient de l’épithélium non pigmenté de la pars plicata."
    ]
  },

  {
    id: "A-005", module: "A", topic: "a-anatomie", type: "anatomie", level: 3, trap: false,
    stem: "Ton patron te montre la papille d’un patient atteint de glaucome. Le bord neurorétinien (neuroretinal rim : anneau rose de fibres nerveuses autour de l’excavation) s’amincit surtout aux pôles supérieur et inférieur. Il te demande pourquoi le glaucome atteint d’abord ces secteurs, en lien avec la lame criblée (lamina cribrosa).",
    figure: null,
    options: [
      "Les axones y sont déjà myélinisés, donc plus rigides et fragiles",
      "Ces secteurs dépendent seulement de l’artère centrale de la rétine",
      "Les pores y sont plus larges et moins soutenus, donc plus déformables",
      "Le faisceau papillomaculaire y passe, d’où une atteinte centrale précoce"
    ],
    answer: 2,
    explain: "Le glaucome est une neuropathie optique qui détruit peu à peu les fibres du nerf optique, souvent sous l’effet de la PIO. Raisonnement : 1) les axones des cellules ganglionnaires quittent l’œil en traversant la lame criblée, un tamis de collagène tendu dans la sclère ; 2) aux pôles supérieur et inférieur, ses pores sont plus larges et le tissu de soutien plus mince ; 3) sous la PIO, ces zones se déforment davantage, pincent les axones et bloquent leur transport interne (flux axoplasmique), ce qui finit par les tuer. Résultat : amincissement polaire du bord et défauts en arc (arciformes) du champ visuel.",
    why: [
      "Les axones ne sont pas myélinisés dans l’œil : la myéline commence derrière la lame criblée, d’où le nerf optique plus large en arrière.",
      "La région de la lame criblée est nourrie par les artères ciliaires postérieures courtes, via le cercle de Zinn-Haller (anneau artériel autour du nerf optique), pas par l’artère centrale de la rétine.",
      "Exact : pores polaires plus larges et soutien plus faible, donc compression des axones sous la PIO.",
      "Le faisceau papillomaculaire (fibres venant de la macula) entre par le côté temporal et reste longtemps épargné : la vision centrale tombe tard dans le glaucome."
    ]
  },
  {
    id: "A-006", module: "A", topic: "a-anatomie", type: "anatomie", level: 2, trap: false,
    stem: "Homme de 72 ans, perte de vision brutale et indolore OD. Au fond d’œil : rétine blanchâtre avec tache rouge cerise (cherry-red spot) au centre, typique d’une occlusion de l’artère centrale de la rétine (OACR : caillot qui bloque l’artère principale de la rétine). Une petite zone entre la papille et la fovéa reste rosée et il lit encore 6/9 (20/30). Quelle est l’explication anatomique ?",
    figure: null,
    options: [
      "Une artère ciliorétinienne, d’origine ciliaire, perfuse cette zone",
      "La veine centrale de la rétine, restée perméable, irrigue cette zone",
      "Les veines vortiqueuses fournissent un apport collatéral à la macula",
      "La choriocapillaire nourrit toute l’épaisseur rétinienne à cet endroit"
    ],
    answer: 0,
    explain: "Raisonnement : 1) la rétine a deux sources de sang : l’artère centrale de la rétine (central retinal artery), branche de l’artère ophtalmique, nourrit la rétine interne ; la choroïde, alimentée par les artères ciliaires postérieures, nourrit la rétine externe (photorécepteurs) ; 2) dans l’OACR, la rétine interne privée de sang devient blanche (œdème ischémique) ; la fovéa, qui n’a pas de rétine interne, laisse voir la choroïde rouge en dessous : c’est la tache rouge cerise ; 3) chez certains patients, une artère ciliorétinienne, issue de la circulation ciliaire et non de l’artère centrale, nourrit la zone entre papille et fovéa : elle reste perfusée et préserve la vision centrale.",
    why: [
      "Exact : ce vaisseau vient de la circulation ciliaire, indépendante de l’artère centrale bloquée.",
      "Une veine draine le sang, elle n’irrigue pas ; une occlusion de la veine centrale (caillot qui bloque la sortie du sang) donnerait plutôt des hémorragies dispersées dans toute la rétine.",
      "Les veines vortiqueuses (environ une par quadrant, derrière l’équateur) drainent la choroïde vers l’orbite ; elles n’apportent pas de sang artériel.",
      "La choriocapillaire (fins capillaires de la choroïde) nourrit seulement la rétine externe ; la rétine interne dépend de l’artère centrale."
    ]
  },
  {
    id: "A-007", module: "A", topic: "a-anatomie", type: "anatomie", level: 2, trap: false,
    stem: "Homme de 70 ans avec un zona ophtalmique (herpes zoster ophthalmicus : réactivation du virus de la varicelle dans la branche V1 du nerf trijumeau) : vésicules sur le front et sur le bout du nez (signe de Hutchinson). Ton patron dit que ce signe annonce une atteinte de l’œil. Quelle explication anatomique donne-t-il ?",
    figure: null,
    options: [
      "Le nerf lacrymal (V1) innerve à la fois le bout du nez et la cornée",
      "Le ganglion ciliaire envoie des fibres au bout du nez et à la cornée",
      "Le nerf maxillaire (V2) innerve à la fois le bout du nez et la cornée",
      "Le nerf nasociliaire (V1) innerve le bout du nez et aussi la cornée"
    ],
    answer: 3,
    explain: "Raisonnement : 1) la branche ophtalmique du trijumeau (V1) se divise en nerfs frontal, lacrymal et nasociliaire ; 2) le nasociliaire donne les nerfs ciliaires longs, qui portent la sensibilité de la cornée (le tissu le plus innervé du corps), et des rameaux qui innervent le dos et le bout du nez ; 3) des vésicules sur le bout du nez prouvent donc que le virus a atteint le nasociliaire, la même voie que celle de la cornée. Le signe de Hutchinson annonce ainsi un risque élevé d’atteinte de l’œil (kératite : inflammation de la cornée ; uvéite : inflammation de l’intérieur de l’œil).",
    why: [
      "Le nerf lacrymal innerve la glande lacrymale et la partie externe de la paupière supérieure, pas le bout du nez ni la cornée.",
      "Le ganglion ciliaire est le relais parasympathique (venu du nerf III, le nerf oculomoteur) vers le sphincter de l’iris et le muscle ciliaire, par les nerfs ciliaires courts ; des fibres sensitives du nasociliaire le traversent sans relais, mais il n’innerve pas la peau du nez.",
      "Le V2 innerve la joue et la lèvre supérieure ; la cornée et le bout du nez relèvent du V1.",
      "Exact : même nerf (nasociliaire) pour le bout du nez et la cornée, d’où le risque oculaire."
    ]
  },
  {
    id: "A-008", module: "A", topic: "a-anatomie", type: "anatomie", level: 2, trap: false,
    stem: "Homme de 35 ans, 3 mois après une brûlure chimique alcaline sévère (base forte projetée dans l’œil) : la cornée est recouverte d’un épithélium terne et vascularisé venu de la conjonctive, avec un défaut épithélial qui ne guérit pas. Ton patron explique que les cellules souches qui renouvellent l’épithélium cornéen ont été détruites. Où se trouvent normalement ces cellules ?",
    figure: null,
    options: [
      "Dans l’endothélium cornéen central, sur la membrane de Descemet",
      "Dans la couche basale de l’épithélium du limbe (palissades de Vogt)",
      "Dans le stroma cornéen antérieur, juste sous la couche de Bowman",
      "Dans les cellules caliciformes de la conjonctive bulbaire"
    ],
    answer: 1,
    explain: "Raisonnement : 1) l’épithélium cornéen se renouvelle environ chaque semaine ; ses nouvelles cellules naissent de cellules souches situées dans la couche basale du limbe (jonction entre cornée et sclère), dans des replis appelés palissades de Vogt ; 2) le limbe sert aussi de barrière qui empêche la conjonctive de recouvrir la cornée ; 3) si une brûlure détruit ces cellules, la cornée ne se répare plus (défauts épithéliaux persistants) et la conjonctive, avec ses vaisseaux, envahit la cornée (conjonctivalisation), ce qui la rend opaque : c’est l’insuffisance en cellules souches limbiques (limbal stem cell deficiency).",
    why: [
      "L’endothélium est la couche postérieure, qui ne se régénère pas ; il ne fournit pas l’épithélium de surface.",
      "Exact : couche basale de l’épithélium limbique, dans les palissades de Vogt.",
      "Le stroma contient des kératocytes (cellules qui entretiennent le collagène), pas les cellules souches de l’épithélium.",
      "Les cellules caliciformes (goblet cells) produisent le mucus du film lacrymal ; elles ne régénèrent pas l’épithélium cornéen."
    ]
  },
  {
    id: "A-009", module: "A", topic: "a-anatomie", type: "anatomie", level: 1, trap: false,
    stem: "Femme enceinte de 30 ans, glaucome traité par timolol (bêtabloquant en gouttes). Ton patron lui montre l’occlusion ponctuelle (punctal occlusion : appuyer sur le coin interne des paupières quelques minutes après la goutte) pour réduire le passage du médicament dans le sang. Quel trajet anatomique cette manœuvre bloque-t-elle ?",
    figure: null,
    options: [
      "Points lacrymaux → canalicules → sac lacrymal → canal lacrymonasal → méat inférieur",
      "Points lacrymaux → canalicules → sac lacrymal → canal lacrymonasal → méat moyen",
      "Points lacrymaux → sac lacrymal → canalicules → canal lacrymonasal → méat inférieur",
      "Points lacrymaux → canalicules → sac lacrymal → canal lacrymonasal → sinus maxillaire"
    ],
    answer: 0,
    explain: "Raisonnement : 1) les larmes, et les gouttes, entrent par les points lacrymaux au bord interne des paupières, puis passent par les canalicules jusqu’au sac lacrymal ; 2) le canal lacrymonasal les conduit ensuite dans le nez, sous le cornet inférieur (méat inférieur) ; 3) la muqueuse nasale, très vascularisée, absorbe le médicament directement dans le sang, sans passer d’abord par le foie, qui l’aurait en partie détruit (premier passage hépatique) : un bêtabloquant peut alors ralentir le cœur ou resserrer les bronches. Appuyer sur les points et fermer les yeux garde la goutte plus longtemps sur l’œil et réduit ce passage ; l’AAO (2026) recommande cette occlusion chez la femme enceinte ou qui allaite.",
    why: [
      "Exact : c’est la voie normale, qui se termine dans le méat inférieur du nez.",
      "Le méat moyen reçoit le drainage de la plupart des sinus, pas celui des larmes.",
      "Ordre inversé : les canalicules relient les points au sac ; ils ne viennent pas après lui.",
      "Les larmes ne passent pas par les sinus ; le canal lacrymonasal s’ouvre directement dans la cavité nasale."
    ]
  },

  // ---------- a-physiologie ----------
  {
    id: "A-010", module: "A", topic: "a-physiologie", type: "physiopathologie", level: 2, trap: false,
    stem: "Homme de 66 ans avec un glaucome primaire à angle ouvert (l’angle est ouvert, mais le filtre trabéculaire draine mal), traité par latanoprost (analogue des prostaglandines) et timolol (bêtabloquant). Ton patron écrit l’équation de Goldmann : PIO = (F − U) / C + Pv, où F = production d’aqueuse, U = sortie uvéosclérale, C = facilité d’écoulement trabéculaire et Pv = pression veineuse épisclérale. Sur quel paramètre agit surtout chaque médicament ?",
    figure: null,
    options: [
      "Latanoprost : augmente C ; timolol : diminue Pv",
      "Latanoprost : diminue F ; timolol : augmente U",
      "Latanoprost : augmente U ; timolol : diminue F",
      "Latanoprost : diminue Pv ; timolol : augmente C"
    ],
    answer: 2,
    explain: "Raisonnement : 1) l’équation dit que la PIO monte si l’œil produit plus d’aqueuse (F) et baisse si l’aqueuse sort mieux, soit par la voie uvéosclérale (U, entre les fibres du muscle ciliaire), soit par le trabéculum (C) ; Pv est la pression des veines où se jette le trabéculum ; 2) les analogues des prostaglandines (latanoprost) remodèlent le tissu du muscle ciliaire et augmentent surtout U ; 3) les bêtabloquants (timolol), comme les inhibiteurs de l’anhydrase carbonique (dorzolamide, acétazolamide), diminuent F en agissant sur l’épithélium ciliaire. À retenir aussi : les alpha-2 agonistes (brimonidine) diminuent F et augmentent U ; la pilocarpine augmente C.",
    why: [
      "Le latanoprost agit surtout sur la voie uvéosclérale, pas sur le trabéculum ; aucun des deux n’abaisse vraiment la Pv.",
      "Inversé : c’est le timolol qui réduit la production (F) et le latanoprost qui augmente la sortie uvéosclérale (U).",
      "Exact : prostaglandine = plus de sortie uvéosclérale ; bêtabloquant = moins de production.",
      "Aucun des deux ne modifie la Pv de façon importante, et le timolol n’agit pas sur le trabéculum."
    ]
  },
  {
    id: "A-011", module: "A", topic: "a-physiologie", type: "physiopathologie", level: 3, trap: false,
    stem: "Homme de 68 ans, glaucome avancé qui progresse malgré trois classes de gouttes, PIO 13 mmHg. Ton patron vise environ 10 mmHg et propose une trabéculectomie (chirurgie filtrante : fistule qui draine l’aqueuse sous la conjonctive) plutôt qu’une goutte de plus. Avec l’équation de Goldmann, PIO = (F − U) / C + Pv, il te demande pourquoi les gouttes atteignent vite un « plancher ».",
    figure: null,
    options: [
      "La production d’aqueuse ne peut pas descendre sous environ 2 µL/min, même sous gouttes",
      "Par le trabéculum, la PIO ne peut pas descendre sous la pression veineuse épisclérale",
      "La voie uvéosclérale s’arrête dès que la PIO descend sous environ 12 mmHg",
      "Le trabéculum devient imperméable aux médicaments après trois classes de gouttes"
    ],
    answer: 1,
    explain: "Raisonnement : 1) dans l’équation, le terme (F − U) / C est la part de la PIO qui sert à pousser l’aqueuse à travers le trabéculum ; 2) après le trabéculum, l’aqueuse passe dans le canal de Schlemm puis dans les veines épisclérales, où la pression (Pv) est d’environ 8–10 mmHg ; 3) la plupart des gouttes ne font que réduire le premier terme : même s’il tendait vers zéro, la PIO resterait au moins égale à Pv. La trabéculectomie envoie l’aqueuse sous la conjonctive, où la pression est presque à zéro : elle contourne la Pv et permet des PIO plus basses.",
    why: [
      "La production baisse bien sous gouttes (et la nuit) ; le plancher vient de la Pv, pas d’une limite de production.",
      "Exact : la voie trabéculaire se jette dans les veines épisclérales, donc la PIO reste au moins égale à la Pv ; la filtration contourne ce plancher.",
      "La voie uvéosclérale dépend peu de la pression : elle ne s’arrête pas sous un seuil de PIO.",
      "Le trabéculum ne devient pas « imperméable » ; une goutte de plus rapporte moins, en partie justement à cause du plancher de la Pv."
    ]
  },
  {
    id: "A-012", module: "A", topic: "a-physiologie", type: "physiopathologie", level: 2, trap: true,
    stem: "Femme de 78 ans sous latanoprost (analogue des prostaglandines, qui augmente la sortie d’aqueuse par la voie uvéosclérale). Un résident veut ajouter de la pilocarpine (agoniste muscarinique qui contracte le muscle ciliaire et la pupille) « pour ouvrir toutes les voies de sortie ». Ton patron demande ce que fait vraiment la pilocarpine sur la voie uvéosclérale, et comment cette voie évolue avec l’âge.",
    figure: null,
    options: [
      "La pilocarpine la diminue ; sa part du débit diminue avec l’âge",
      "La pilocarpine l’augmente ; sa part du débit diminue avec l’âge",
      "La pilocarpine la diminue ; sa part du débit augmente avec l’âge",
      "La pilocarpine l’augmente ; sa part du débit augmente avec l’âge"
    ],
    answer: 0,
    explain: "Raisonnement : 1) l’aqueuse sort par deux voies : la voie trabéculaire (trabéculum → canal de Schlemm → veines épisclérales), qui dépend de la pression, et la voie uvéosclérale (uveoscleral outflow), qui passe entre les fibres du muscle ciliaire vers l’arrière et dépend peu de la pression ; 2) la pilocarpine contracte le muscle ciliaire : ses fibres tirent sur l’éperon scléral et ouvrent les mailles du trabéculum (C augmente), mais elles se resserrent et ferment les espaces uvéoscléraux (U diminue) ; 3) la voie uvéosclérale représente 5–30 % du débit et diminue avec l’âge. En théorie, la pilocarpine s’oppose donc en partie au latanoprost, qui mise justement sur cette voie.",
    why: [
      "Exact : plus de sortie trabéculaire, moins de sortie uvéosclérale ; et cette voie perd de l’importance avec l’âge.",
      "Piège : la pilocarpine ouvre le trabéculum, mais ferme la voie uvéosclérale en contractant le muscle ciliaire.",
      "Bon effet de la pilocarpine, mais la voie uvéosclérale diminue avec l’âge, elle n’augmente pas.",
      "Double erreur : la pilocarpine diminue la voie uvéosclérale, et celle-ci décline avec l’âge."
    ]
  },
  {
    id: "A-013", module: "A", topic: "a-physiologie", type: "physiopathologie", level: 1, trap: false,
    stem: "Homme de 78 ans dont la microscopie spéculaire (photo de l’endothélium qui compte les cellules par mm²) montrait 600 cell/mm² avant sa chirurgie de cataracte. Le lendemain, la cornée est épaissie et trouble, avec des plis de la Descemet. Ton patron te demande quel mécanisme garde normalement la cornée peu hydratée et transparente.",
    figure: null,
    options: [
      "L’épithélium, qui pompe activement l’eau du stroma vers le film lacrymal",
      "Les kératocytes du stroma, qui réabsorbent et éliminent l’eau en excès",
      "La couche de Bowman, imperméable, qui bloque l’entrée de l’aqueuse",
      "L’endothélium, barrière et pompe Na⁺/K⁺-ATPase qui retire l’eau du stroma"
    ],
    answer: 3,
    explain: "Raisonnement : 1) le stroma contient des glycosaminoglycanes qui attirent l’eau : laissé à lui-même, il gonfle, ses fibres de collagène perdent leur espacement régulier et la lumière se disperse ; 2) l’endothélium, une seule assise de cellules hexagonales, laisse entrer un peu d’aqueuse (barrière imparfaite) mais pompe des ions vers la chambre antérieure grâce à la Na⁺/K⁺-ATPase, et l’eau suit : c’est la déturgescence (deturgescence) ; 3) ces cellules ne se divisent pas chez l’adulte (≈ 3000–3500 cell/mm² chez le jeune adulte, perte ≈ 0,6 %/an) ; sous ≈ 400–500 cell/mm², la pompe ne suffit plus et la cornée gonfle (œdème stromal, plis de la Descemet), surtout après le stress d’une chirurgie.",
    why: [
      "L’épithélium sert surtout de barrière contre les larmes ; son rôle de pompe est mineur comparé à celui de l’endothélium.",
      "Les kératocytes fabriquent et entretiennent le collagène ; ils ne retirent pas l’eau du stroma.",
      "La couche de Bowman est une couche de collagène sans cellules, située en avant du stroma ; elle ne touche pas l’aqueuse.",
      "Exact : la pompe endothéliale, avec sa barrière, garde le stroma à environ 78 % d’eau."
    ]
  },
  {
    id: "A-014", module: "A", topic: "a-physiologie", type: "physiopathologie", level: 2, trap: false,
    stem: "Femme de 65 ans en crise aiguë de fermeture de l’angle (l’iris bloque brutalement le filtre de l’angle et la PIO monte en quelques heures) : PIO 58 mmHg, halos colorés autour des lumières, cornée terne avec de fines microbulles en surface. Son endothélium est normal. Ton patron demande pourquoi c’est l’épithélium qui devient œdémateux.",
    figure: null,
    options: [
      "La PIO élevée détruit les cellules souches du limbe, d’où un épithélium fragile",
      "La PIO très élevée pousse l’eau à travers le stroma jusque dans l’épithélium",
      "La PIO élevée bloque la sécrétion lacrymale, ce qui dessèche l’épithélium",
      "La PIO élevée fait surtout gonfler le stroma, qui écrase les cellules épithéliales"
    ],
    answer: 1,
    explain: "Raisonnement : 1) normalement, la pompe endothéliale retire l’eau du stroma au moins aussi vite qu’elle y entre ; 2) quand la PIO monte très haut et vite, elle pousse l’eau de la chambre antérieure à travers la cornée plus vite que la pompe ne la retire ; 3) l’eau traverse le stroma, qui s’épaissit peu, et s’accumule entre les cellules épithéliales, car les jonctions serrées de la surface l’empêchent de passer dans les larmes : c’est l’œdème épithélial (microkystes), qui disperse la lumière et donne les halos. À l’inverse, quand l’endothélium est défaillant à PIO normale, c’est d’abord le stroma qui gonfle.",
    why: [
      "Les cellules souches du limbe ne sont pas détruites par une hausse de PIO ; le problème est un déplacement d’eau.",
      "Exact : la pression pousse l’eau vers l’avant, où la barrière épithéliale la retient.",
      "La sécrétion lacrymale n’est pas en cause ; l’épithélium est gorgé d’eau, pas desséché.",
      "Dans la hausse aiguë de PIO, le stroma s’épaissit peu ; l’eau le traverse et s’accumule plus en avant, dans l’épithélium."
    ]
  },

  {
    id: "A-015", module: "A", topic: "a-physiologie", type: "physiopathologie", level: 1, trap: false,
    stem: "Femme de 58 ans, yeux qui brûlent en fin de journée. Les bords des paupières sont épaissis et l’expression des glandes de Meibomius (petites glandes des paupières qui sécrètent un film huileux) donne une sécrétion épaisse comme du dentifrice. Le temps de rupture du film lacrymal (tear break-up time, TBUT) est de 4 s. Quelle couche du film manque, et que devient l’osmolarité des larmes ?",
    figure: null,
    options: [
      "Phase aqueuse ; production réduite et osmolarité qui diminue",
      "Mucines ; évaporation accrue et osmolarité qui diminue",
      "Couche lipidique ; évaporation accrue et osmolarité qui augmente",
      "Couche lipidique ; évaporation réduite et osmolarité qui diminue"
    ],
    answer: 2,
    explain: "Raisonnement : 1) le film lacrymal a une couche lipidique externe (glandes de Meibomius) qui freine l’évaporation, et une phase muco-aqueuse : eau de la glande lacrymale principale et des glandes accessoires (Krause, Wolfring), mucines des cellules caliciformes et glycocalyx des cellules épithéliales ; 2) quand les glandes de Meibomius sont bouchées (dysfonction meibomienne), la couche lipidique manque : l’eau s’évapore vite et le film se rompt vite (TBUT court ; normal > 10 s) ; 3) moins d’eau pour la même quantité de sels = larmes plus concentrées (hyperosmolarité), ce qui irrite et enflamme la surface de l’œil.",
    why: [
      "Les glandes de Meibomius ne produisent pas l’eau des larmes ; et un manque d’eau ferait monter l’osmolarité, pas baisser.",
      "Les mucines viennent des cellules caliciformes et de l’épithélium ; et une évaporation accrue concentre les larmes.",
      "Exact : moins de lipides, plus d’évaporation, larmes plus concentrées (hyperosmolarité).",
      "Bonne couche, mais sans lipides l’évaporation augmente, ce qui concentre les sels."
    ]
  },
  {
    id: "A-016", module: "A", topic: "a-physiologie", type: "diagnostic", level: 2, trap: false,
    stem: "Femme de 52 ans, brûlure et sensation de sable dans les yeux ; son score au questionnaire de symptômes OSDI-6 (Ocular Surface Disease Index, version courte à 6 questions) est de 6. Osmolarité des larmes : 300 mOsm/L dans chaque œil. Temps de rupture non invasif du film (NIBUT : mesuré sans fluorescéine, en regardant se déformer des anneaux lumineux reflétés sur la cornée) : 7 s. Aucune coloration significative. Selon TFOS DEWS III (2025), que conclus-tu ?",
    figure: null,
    options: [
      "Non confirmée : l’osmolarité doit aussi être ≥ 308 mOsm/L",
      "Non confirmée : il faut au moins deux signes anormaux",
      "Confirmée seulement si le test de Schirmer est sous 5 mm",
      "Confirmée : symptômes présents et un seul signe anormal suffit"
    ],
    answer: 3,
    explain: "Raisonnement : 1) DEWS III définit la sécheresse oculaire comme une maladie symptomatique : il faut d’abord des symptômes, dépistés par un OSDI-6 ≥ 4 (ici 6, donc positif) ; 2) un seul signe suffit ensuite, parmi : NIBUT < 10 s ; osmolarité ≥ 308 mOsm/L dans un œil ou écart de plus de 8 mOsm/L entre les yeux ; ou coloration au-delà des seuils (plus de 5 points de fluorescéine sur la cornée, plus de 9 points de vert de lissamine sur la conjonctive, ou coloration assez étendue du bord de la paupière) ; 3) ici, le NIBUT de 7 s suffit, même si l’osmolarité (300, sans écart entre les yeux) est normale.",
    why: [
      "L’osmolarité n’est qu’un des signes possibles ; un seul signe anormal suffit.",
      "DEWS III demande un seul signe de la liste, pas deux.",
      "Le Schirmer (bandelette de papier qui mesure la production de larmes en 5 minutes) n’est pas un signe diagnostique de DEWS III ; il oriente plutôt vers un déficit aqueux.",
      "Exact : symptômes (OSDI-6 ≥ 4) + un signe (NIBUT < 10 s) = sécheresse oculaire."
    ]
  },
  {
    id: "A-017", module: "A", topic: "a-physiologie", type: "physiopathologie", level: 1, trap: false,
    stem: "Femme inuite de 62 ans, hypermétrope de +4,00 D. Au biomicroscope, la chambre antérieure paraît peu profonde. Ton patron rappelle que les hypermétropes âgés sont plus à risque de fermeture de l’angle (l’iris vient boucher le filtre de l’angle). Quel lien anatomique explique ce risque ?",
    figure: null,
    options: [
      "Œil court au segment antérieur serré, où le cristallin épaissit avec l’âge",
      "Cornée trop cambrée, qui focalise l’image en avant de la rétine et rétrécit l’angle",
      "Trabéculum plus pigmenté chez l’hypermétrope, qui se bouche et finit par fermer l’angle",
      "Production d’aqueuse plus forte chez l’hypermétrope, qui pousse l’iris vers l’avant"
    ],
    answer: 0,
    explain: "Raisonnement : 1) dans l’hypermétropie (hyperopia), les rayons font leur foyer derrière la rétine, le plus souvent parce que l’œil est court (longueur axiale courte) ; 2) un œil court a aussi un segment antérieur serré : petit diamètre cornéen, chambre antérieure peu profonde, angle étroit ; 3) le cristallin grossit toute la vie : dans un œil déjà serré, il pousse l’iris vers l’avant et freine le passage de l’aqueuse par la pupille (bloc pupillaire), ce qui peut fermer l’angle. L’AAO (2026) met de l’avant ces facteurs biométriques ; les populations inuites et d’Asie de l’Est sont parmi les plus touchées.",
    why: [
      "Exact : œil court, segment antérieur serré, cristallin qui grossit avec l’âge.",
      "Une cornée trop cambrée qui focalise en avant de la rétine décrit la myopie, pas l’hypermétropie.",
      "Un trabéculum très pigmenté évoque plutôt la dispersion pigmentaire (pigment de l’iris libéré dans l’aqueuse), typique du jeune myope avec un angle ouvert.",
      "L’hypermétrope ne produit pas plus d’aqueuse ; le problème est un espace trop petit, pas un excès de production."
    ]
  },
  {
    id: "A-018", module: "A", topic: "a-physiologie", type: "physiopathologie", level: 2, trap: true,
    stem: "Homme de 30 ans avec une névrite optique gauche (inflammation du nerf optique, souvent liée à la sclérose en plaques). Au test de la lampe oscillante, les deux pupilles se dilatent quand la lumière passe de l’œil droit à l’œil gauche : c’est un déficit pupillaire afférent relatif (DPAR, relative afferent pupillary defect). Un externe affirme qu’en lumière ambiante, la pupille gauche sera plus grande. Ton patron te demande si c’est vrai.",
    figure: null,
    options: [
      "Oui : la pupille gauche est plus grande, car son œil capte moins de lumière",
      "Non : les pupilles restent égales, car chaque côté commande les deux pupilles",
      "Oui : la pupille gauche est plus grande, mais seulement sous une lumière vive",
      "Non : la pupille gauche est plus petite, par hypersensibilité de dénervation"
    ],
    answer: 1,
    explain: "Raisonnement : 1) la voie afférente (rétine → nerf optique) porte l’information lumineuse jusqu’au mésencéphale ; grâce aux croisements au chiasma et dans le mésencéphale, chaque côté envoie le signal aux deux noyaux d’Edinger-Westphal (noyaux parasympathiques du nerf III) ; 2) la commande efférente (nerf III → ganglion ciliaire → nerfs ciliaires courts → sphincter de l’iris) est donc la même pour les deux pupilles : une lumière dans un œil contracte les deux (réflexes direct et consensuel) ; 3) dans un DPAR gauche, le cerveau reçoit moins de signal quand on éclaire l’œil gauche, et les deux pupilles se dilatent ensemble ; en lumière ambiante, elles restent égales. Une anisocorie (pupilles de tailles différentes) oriente vers un problème efférent (nerf III, syndrome de Horner, goutte dilatante, iris), pas vers un défaut afférent.",
    why: [
      "Piège : la taille d’une pupille ne dépend pas de la lumière captée par son propre œil, mais de la commande commune envoyée aux deux pupilles.",
      "Exact : commande efférente commune, donc pupilles égales malgré le DPAR.",
      "Même sous lumière vive, les deux pupilles reçoivent la même commande et restent égales.",
      "L’hypersensibilité de dénervation touche une atteinte efférente (ex. pupille d’Adie : pupille dilatée par atteinte du ganglion ciliaire) ; le nerf optique, lui, est afférent."
    ]
  },

  // ---------- a-examen ----------
  {
    id: "A-019", module: "A", topic: "a-examen", type: "diagnostic", level: 1, trap: false,
    stem: "Ton patient lit la ligne 6/12 (20/40) à l’échelle de Snellen. Ton patron, qui prépare un tableau pour un projet de recherche, veut cette acuité en logMAR (logarithme de l’angle minimal de résolution). Quelle valeur inscris-tu, et pourquoi préfère-t-on le logMAR en recherche ?",
    figure: null,
    options: [
      "0,5 ; l’échelle de Snellen est déjà régulière, le logMAR ne fait que l’inverser",
      "0,2 ; le logMAR évite surtout d’avoir à tester la vision de près",
      "1,0 ; un logMAR plus élevé indique une meilleure vision, plus facile à suivre",
      "0,3 ; lignes de 0,1 log sur une échelle régulière, ce qui permet les moyennes"
    ],
    answer: 3,
    explain: "Raisonnement : 1) 6/12 veut dire que le patient lit à 6 m ce qu’un œil normal lit à 12 m ; 2) l’angle minimal de résolution (MAR) vaut 12/6 = 2 minutes d’arc, et le log de 2 ≈ 0,3 ; repères : 6/6 = 0,0 ; 6/12 = 0,3 ; 6/60 = 1,0 ; 3) sur une charte logMAR (type ETDRS), chaque ligne compte 5 lettres et vaut 0,1 log, avec un espacement régulier : on peut faire des moyennes et des différences, ce qui est impossible avec des fractions de Snellen. Attention : plus le logMAR est élevé, moins bonne est la vision.",
    why: [
      "0,5 correspond à environ 6/18 ; et c’est justement l’échelle de Snellen qui est irrégulière.",
      "0,2 correspond à environ 6/9 ; l’intérêt du logMAR tient à la régularité de l’échelle, pas à la vision de près.",
      "1,0 correspond à 6/60 (20/200) ; et un logMAR plus élevé veut dire une vision moins bonne.",
      "Exact : 6/12 = 20/40 = logMAR 0,3, sur une échelle régulière qui se prête aux calculs."
    ]
  },
  {
    id: "A-020", module: "A", topic: "a-examen", type: "diagnostic", level: 1, trap: false,
    stem: "Femme de 55 ans qui a oublié ses lunettes : AV OD 6/24 (20/80). Avec le trou sténopéique (pinhole : carton percé de petits trous placé devant l’œil), elle lit 6/9 (20/30). Ton patron te demande ce que tu en conclus.",
    figure: null,
    options: [
      "La baisse vient surtout d’une maladie de la macula ou du nerf optique",
      "Le trou sténopéique améliore autant les défauts optiques que les maladies maculaires",
      "La baisse vient surtout d’une erreur de réfraction, corrigeable par des lunettes",
      "Le trou sténopéique corrige surtout la presbytie, il faut donc tester de près"
    ],
    answer: 2,
    explain: "Raisonnement : 1) un petit trou ne laisse passer que les rayons centraux, presque parallèles à l’axe de l’œil : ils donnent une image nette sur la rétine même si la cornée ou le cristallin focalisent mal ; 2) si l’acuité s’améliore, la cause est donc surtout optique : myopie, hypermétropie, astigmatisme (cornée de courbure inégale), parfois une cataracte débutante ou une cornée irrégulière ; 3) si l’acuité ne s’améliore pas, ou baisse, on cherche une atteinte de la macula, du nerf optique ou une opacité dense. Ici, le gain de 6/24 à 6/9 oriente vers une erreur de réfraction : la réfraction est l’étape suivante.",
    why: [
      "Une maladie de la macula ou du nerf optique n’est pas améliorée par le trou sténopéique ; la vision peut même baisser.",
      "Le trou sténopéique compense les défauts optiques, pas les maladies de la macula.",
      "Exact : une amélioration au trou sténopéique signe une cause surtout réfractive.",
      "L’acuité est mesurée de loin ; la presbytie (perte de la mise au point de près avec l’âge) n’explique pas une baisse de loin."
    ]
  },
  {
    id: "A-021", module: "A", topic: "a-examen", type: "diagnostic", level: 3, trap: false,
    stem: "Homme de 70 ans, traumatisme de l’œil droit : la pupille droite est fixe et dilatée (sphincter de l’iris déchiré). Tu crains aussi une atteinte du nerf optique droit. Ton patron te demande si tu peux quand même chercher un déficit pupillaire afférent relatif (DPAR) au test de la lampe oscillante, et comment.",
    figure: null,
    options: [
      "Oui : en observant seulement la pupille gauche pendant qu’on alterne la lumière",
      "Non : il faut deux pupilles réactives pour faire le test de la lampe oscillante",
      "Non : il faut d’abord dilater les deux pupilles pour les rendre comparables",
      "Oui : en observant la pupille droite, qui garde un peu de réaction à la lumière"
    ],
    answer: 0,
    explain: "Raisonnement : 1) le test de la lampe oscillante (swinging flashlight test) compare le signal transmis par chaque nerf optique : on éclaire 2–3 s un œil, puis l’autre, en observant les pupilles ; 2) la commande des pupilles est commune aux deux yeux (réflexe consensuel) : la pupille gauche réagit donc à la lumière reçue par l’œil droit comme à celle reçue par l’œil gauche ; 3) on regarde seulement la pupille gauche : si elle se contracte bien quand on éclaire l’œil gauche, mais se dilate quand la lumière passe à l’œil droit, le nerf optique droit transmet moins : DPAR droit. C’est le DPAR « inverse » (reverse RAPD).",
    why: [
      "Exact : la pupille gauche reflète le signal venu de chaque œil ; on l’observe pendant qu’on alterne.",
      "Une seule pupille réactive suffit, grâce au réflexe consensuel.",
      "Dilater les pupilles abolirait le réflexe : on cherche le DPAR avant toute dilatation.",
      "La pupille droite est fixe : elle ne peut rien montrer ; c’est la pupille réactive qu’on observe."
    ]
  },
  {
    id: "A-022", module: "A", topic: "a-examen", type: "diagnostic", level: 2, trap: false,
    stem: "Homme myope de 35 ans chez qui ton patron suspecte un syndrome de dispersion pigmentaire (le pigment de l’iris se détache et se dépose dans l’œil). Il te demande de montrer les défauts de transillumination de l’iris (zones amincies de l’iris qui laissent passer la lumière en rayons). Quelle technique d’éclairage choisis-tu à la lampe à fente ?",
    figure: null,
    options: [
      "Dispersion sclérale : faisceau dirigé sur le limbe, la cornée conduisant la lumière",
      "Réflexion spéculaire : faisceau et observation à angles égaux, sur l’endothélium",
      "Faisceau large et diffus, à faible grossissement, dirigé de face sur l’iris",
      "Rétroillumination : faisceau aligné sur l’axe, renvoyé par le fond d’œil"
    ],
    answer: 3,
    explain: "Raisonnement : 1) en rétroillumination (retroillumination), on aligne le faisceau presque sur l’axe de l’œil, à travers la pupille : la lumière est renvoyée par le fond d’œil (reflet rouge) et éclaire l’iris par derrière ; 2) là où l’épithélium pigmentaire de l’iris manque, la lumière passe : on voit des fentes lumineuses en rayons ; 3) chaque technique a son usage : la dispersion sclérale (sclerotic scatter) fait luire un œdème ou une opacité cornéenne subtile ; la réflexion spéculaire (specular reflection) montre la mosaïque endothéliale et les guttae ; le faisceau diffus donne une vue d’ensemble.",
    why: [
      "La dispersion sclérale sert à repérer une opacité ou un œdème cornéen subtil, pas l’iris.",
      "La réflexion spéculaire montre l’endothélium (cellules, guttae), pas la transillumination de l’iris.",
      "Un éclairage de face cache justement ces défauts : il faut éclairer l’iris par derrière.",
      "Exact : la lumière renvoyée par le fond d’œil traverse les zones dépigmentées de l’iris."
    ]
  },
  {
    id: "A-023", module: "A", topic: "a-examen", type: "cat", level: 1, trap: false,
    stem: "Femme de 68 ans, examen de routine. Tu places une fente fine à environ 60° au limbe temporal : l’espace sombre entre la face postérieure de la cornée et l’iris est égal au quart de l’épaisseur cornéenne (EC). Quel grade de Van Herick, et que fais-tu ensuite ?",
    figure: null,
    options: [
      "Grade 4 ; angle ouvert, aucun examen de plus",
      "Grade 2 ; confirmer par une gonioscopie",
      "Grade 1 ; iridotomie au laser d’emblée",
      "Grade 3 ; simple contrôle dans un an"
    ],
    answer: 1,
    explain: "Raisonnement : 1) la technique de Van Herick estime l’angle sans verre de contact : fente fine à environ 60° au limbe temporal, et on compare l’espace sombre (chambre antérieure périphérique) à l’épaisseur de la cornée ; 2) grades : 4 = au moins 1 EC ; 3 = 1/4 à 1/2 EC ; 2 = 1/4 EC ; 1 = moins de 1/4 EC ; 0 = fermé ; 3) un grade de 2 ou moins suggère un angle étroit, à confirmer par la gonioscopie, l’examen de référence. On ne traite jamais sur la seule base du Van Herick.",
    why: [
      "Le grade 4 demande un espace au moins égal à une épaisseur cornéenne ; ici il n’en vaut qu’un quart.",
      "Exact : 1/4 EC = grade 2, et un grade de 2 ou moins mène à la gonioscopie.",
      "Le grade 1 correspond à moins d’un quart ; et on ne fait pas de laser sans gonioscopie.",
      "Le grade 3 correspond à plus d’un quart (1/4 à 1/2 EC) ; ici l’espace est égal au quart, donc grade 2."
    ]
  },

  {
    id: "A-024", module: "A", topic: "a-examen", type: "cat", level: 1, trap: false,
    stem: "Homme de 40 ans qui frappait du métal avec un marteau il y a 2 heures : douleur et larmoiement OD, petite plaie sur la cornée. Tu peins la plaie avec de la fluorescéine concentrée (colorant orange qui devient vert fluo sous lumière bleu cobalt) : un ruisseau vert pâle et brillant s’écoule de la plaie. Que signifie ce signe, et que fais-tu ?",
    figure: null,
    options: [
      "Abrasion simple : pansement compressif et contrôle le lendemain",
      "Seidel négatif : plaie étanche, on peut mesurer la PIO par aplanation",
      "Seidel positif : plaie transfixiante, coque rigide et réparation urgente",
      "Kératite ponctuée : larmes artificielles et retour au travail le jour même"
    ],
    answer: 2,
    explain: "Raisonnement : 1) le test de Seidel (Seidel test) consiste à peindre la plaie de fluorescéine concentrée et à l’observer sous lumière bleu cobalt ; 2) si de l’humeur aqueuse fuit par la plaie, elle dilue le colorant, qui devient vert pâle et brillant et coule comme un ruisseau : le test est positif ; 3) une fuite prouve que la plaie traverse toute l’épaisseur de la cornée (globe ouvert) : on protège l’œil par une coque rigide, on évite toute pression (ni pansement compressif ni tonométrie) et on oriente vers une réparation chirurgicale urgente. Un Seidel négatif n’exclut pas une petite plaie qui s’est refermée d’elle-même.",
    why: [
      "Un pansement compressif est contre-indiqué devant une plaie qui fuit : la pression pourrait faire sortir le contenu de l’œil.",
      "Le ruisseau vert pâle signe au contraire une fuite (test positif) ; et on ne pose pas de tonomètre sur un globe ouvert.",
      "Exact : fuite d’aqueuse = plaie de pleine épaisseur ; avec un marteau sur du métal, on cherche aussi un corps étranger dans l’œil par tomodensitométrie.",
      "La kératite ponctuée (petites érosions de surface) donne des points verts fixes, sans écoulement ; ce n’est pas ce qui est décrit."
    ]
  },
  {
    id: "A-025", module: "A", topic: "a-examen", type: "diagnostic", level: 2, trap: true,
    stem: "Femme de 50 ans opérée d’un LASIK myopique il y a 10 ans (laser qui retire du stroma pour aplatir la cornée). Pachymétrie centrale : 470 µm. Au tonomètre de Goldmann (Goldmann applanation tonometry), la PIO est de 15 mmHg aux deux yeux, mais l’excavation de la papille augmente. Ton patron te demande comment interpréter cette PIO.",
    figure: null,
    options: [
      "Probablement sous-estimée : cornée mince et assouplie, plus facile à aplanir",
      "Probablement surestimée : une cornée mince laisse le prisme s’enfoncer davantage",
      "Fiable : le LASIK ne modifie que l’épithélium, sans effet sur la mesure",
      "Fiable, à condition d’appliquer une formule de correction standard"
    ],
    answer: 0,
    explain: "Raisonnement : 1) le tonomètre de Goldmann mesure la force nécessaire pour aplanir un disque de cornée de 3,06 mm ; il a été calibré pour une cornée d’épaisseur « standard » (≈ 520 µm) ; 2) une cornée mince ou assouplie (après LASIK, qui retire du stroma) résiste moins : on lit une pression plus basse que la vraie (sous-estimation) ; une cornée épaisse donne l’inverse ; 3) la vraie PIO est donc probablement plus haute que 15 mmHg, ce qui concorde avec une papille qui se creuse ; on en tient compte qualitativement, sans formule de correction. Autres erreurs : mires trop épaisses → surestimation, trop minces → sous-estimation ; astigmatisme > 3 D → tourner le prisme ; œdème cornéen → sous-estimation.",
    why: [
      "Exact : cornée mince et assouplie après LASIK = PIO sous-estimée ; la vraie PIO est probablement plus haute.",
      "Piège classique : c’est l’inverse ; une cornée mince résiste moins, donc la lecture est trop basse.",
      "Le LASIK retire du stroma sous un volet, pas seulement l’épithélium : la cornée devient plus mince et plus souple.",
      "Aucune formule de correction n’est fiable ; on interprète la PIO en tenant compte de la cornée, sans calcul mécanique."
    ]
  },
  {
    id: "A-026", module: "A", topic: "a-examen", type: "cat", level: 3, trap: true,
    stem: "Homme de 60 ans, angle étroit au Van Herick. Ta première gonioscopie, faite en lumière ambiante avec une fente large et brillante, te semble montrer un angle ouvert. Ton patron te demande de refaire l’examen avec un verre à 4 miroirs (petit verre qui permet l’indentation : appuyer doucement sur la cornée pour pousser l’aqueuse vers l’angle), puis de distinguer une apposition (iris simplement accolé au trabéculum) d’une synéchie antérieure périphérique (PAS : adhérence cicatricielle de l’iris sur l’angle). Que fais-tu ?",
    figure: null,
    options: [
      "Pièce sombre, petit faisceau hors de la pupille ; à l’indentation, les synéchies s’ouvrent et l’apposition reste",
      "Lumière vive et fente large pour bien voir ; à l’indentation, l’apposition s’ouvre et les synéchies restent",
      "Après dilatation de la pupille pour mieux voir ; à l’indentation, les synéchies s’ouvrent et l’apposition reste",
      "Pièce sombre, petit faisceau hors de la pupille ; à l’indentation, l’apposition s’ouvre et les synéchies restent"
    ],
    answer: 3,
    explain: "Raisonnement : 1) la lumière qui entre dans la pupille provoque un myosis : l’iris se tend et s’éloigne de l’angle, qui paraît faussement ouvert ; on travaille donc en pièce sombre, avec un petit faisceau court placé hors de la pupille (AAO 2026 : gonioscopie dynamique en pièce sombre, petit faisceau) ; 2) l’indentation pousse l’aqueuse vers la périphérie et refoule l’iris vers l’arrière ; 3) un iris seulement apposé se décolle et laisse voir le trabéculum, alors qu’une synéchie, collée, reste en place. La distinction compte : des synéchies (ou une PIO élevée) font passer d’un simple contact iris-trabéculum (PACS) à une fermeture de l’angle établie (PAC).",
    why: [
      "Bonne technique d’éclairage, mais interprétation inversée : ce sont les synéchies, adhérentes, qui restent fermées.",
      "Piège : la lumière vive fait un myosis qui ouvre faussement l’angle ; c’est justement l’erreur du premier examen.",
      "On fait la gonioscopie avant de dilater : la dilatation modifie l’angle et peut même déclencher une crise ; et l’interprétation est inversée.",
      "Exact : pas de myosis provoqué, puis l’indentation sépare l’apposition (qui s’ouvre) des synéchies (qui restent)."
    ]
  },
  {
    id: "A-027", module: "A", topic: "a-examen", type: "diagnostic", level: 1, trap: false,
    stem: "Gonioscopie de l’œil droit d’une femme de 70 ans : dans le quadrant inférieur, tu vois la ligne de Schwalbe et le trabéculum, mais ni l’éperon scléral ni la bande ciliaire. L’ouverture est estimée à environ 20°. Quel grade de Shaffer donnes-tu ?",
    figure: null,
    options: [
      "Grade 4 : angle grand ouvert, fermeture impossible",
      "Grade 3 : angle ouvert, fermeture improbable",
      "Grade 2 : angle étroit, fermeture possible",
      "Grade 1 : angle très étroit, fermeture probable"
    ],
    answer: 2,
    explain: "Raisonnement : 1) on repère la structure la plus postérieure visible (« I Can’t See Til Schwalbe » : racine de l’Iris, bande Ciliaire, éperon Scléral, Trabéculum, ligne de Schwalbe) ; 2) Shaffer : 4 = 35–45°, bande ciliaire visible ; 3 = 20–35°, éperon visible ; 2 = environ 20°, trabéculum visible ; 1 = 10° ou moins, Schwalbe seulement ; 0 = fermé ; 3) ici, la structure la plus postérieure vue est le trabéculum, sans éperon : grade 2, angle étroit où une fermeture est possible.",
    why: [
      "Le grade 4 exige de voir la bande ciliaire, absente ici.",
      "Le grade 3 exige de voir l’éperon scléral, absent ici.",
      "Exact : trabéculum visible sans éperon, environ 20° = grade 2.",
      "Le grade 1 correspond à 10° ou moins, avec seulement la ligne de Schwalbe ; ici le trabéculum est visible."
    ]
  },
  {
    id: "A-028", module: "A", topic: "a-examen", type: "cat", level: 2, trap: false,
    stem: "Homme de 67 ans avec un glaucome avancé aux deux yeux, permis de conduire de classe 5 (automobile). AV binoculaire 6/9 (20/30). Il demande s’il peut continuer à conduire. Selon les normes de la SAAQ (Société de l’assurance automobile du Québec), que doit vérifier ton patron ?",
    figure: null,
    options: [
      "Seulement l’AV : le glaucome suspend d’office le permis si l’AV est sous 6/6",
      "Un champ binoculaire (Esterman) : ≥ 100° à l’horizontale, ≥ 30° de chaque côté",
      "Un champ 24-2 de chaque œil, avec un MD meilleur que −6 dB dans chaque œil",
      "Rien de plus : une AV binoculaire de 6/9 suffit à elle seule en classe 5"
    ],
    answer: 1,
    explain: "Raisonnement : 1) en classe 5, la SAAQ exige une AV binoculaire d’au moins 6/15 (20/50) : il la dépasse ; 2) elle exige aussi un champ visuel binoculaire continu d’au moins 100° sur l’horizontale, dont au moins 30° de chaque côté du méridien vertical, et 10° au-dessus et 20° au-dessous du point de fixation ; 3) un glaucome avancé peut faire échouer le champ malgré une bonne AV : quand une anomalie du champ est connue, la SAAQ demande un champ binoculaire signé, de type Esterman (test fait les deux yeux ouverts, conçu pour la conduite) ou Goldmann III/4e. Le glaucome n’entraîne pas de suspension automatique ; le médecin peut toutefois recommander l’arrêt ou une restriction (ex. de nuit).",
    why: [
      "Le glaucome ne suspend pas le permis d’office, et le seuil d’AV en classe 5 est 6/15 (20/50), pas 6/6.",
      "Exact : avec un glaucome avancé, c’est le champ binoculaire qui tranche, en plus d’une AV d’au moins 6/15.",
      "La SAAQ juge le champ binoculaire (les deux yeux ouverts), pas le MD (déficit moyen du champ) de chaque œil séparément.",
      "L’AV ne suffit pas : un glaucome avancé peut amputer le champ malgré une bonne vision centrale."
    ]
  },

  // ---------- a-imagerie ----------
  {
    id: "A-029", module: "A", topic: "a-imagerie", type: "image", level: 2, trap: false,
    stem: "Ce schéma de champ visuel Humphrey 24-2 (carte de déviation totale, OD) appartient à un homme de 74 ans avec une cataracte dense ; sa carte de déviation corrigée (pattern deviation) est presque normale. PIO 16 mmHg, papille saine. Comment interprètes-tu ce champ ?",
    figure: { type: "vf", pattern: "generalized", eye: "OD", map: "td" },
    options: [
      "Défaut arciforme glaucomateux débutant, qui justifie un traitement",
      "Dépression généralisée par opacité des milieux, sans défaut localisé",
      "Atteinte du chiasma, à confirmer par une IRM cérébrale",
      "Test non fiable par excès de faux positifs, à ne pas interpréter"
    ],
    answer: 1,
    explain: "Raisonnement : 1) la carte de déviation totale (TD, total deviation) compare chaque point à la normale pour l’âge : une opacité des milieux (cataracte, petite pupille) abaisse tous les points, d’où une dépression diffuse ; 2) la carte de déviation corrigée (PD, pattern deviation) retire cette baisse générale pour ne garder que les défauts localisés ; 3) TD abaissée partout + PD normale = dépression généralisée due à la cataracte, sans défaut localisé de glaucome. Si la PD montrait un arc, on penserait à un glaucome caché derrière la cataracte.",
    why: [
      "Un défaut glaucomateux est localisé (arc, ressaut nasal) et persiste sur la PD ; ici la PD est presque normale.",
      "Exact : la cataracte, une opacité des milieux (structures transparentes que la lumière traverse), abaisse tout le champ (TD) ; la PD, qui retire cette baisse globale, reste normale.",
      "Une atteinte du chiasma donne un défaut qui respecte le méridien vertical et persiste sur la PD ; rien de tel ici.",
      "Un patient qui appuie sans stimulus (faux positifs) rend le champ faussement trop bon, pas diffusément abaissé."
    ]
  },
  {
    id: "A-030", module: "A", topic: "a-imagerie", type: "image", level: 2, trap: true,
    stem: "Ce schéma de champ visuel (échelle de gris, OD) appartient à un homme de 52 ans dirigé pour un « glaucome à pression normale » (atteinte glaucomateuse malgré une PIO normale) : PIO 15 mmHg, papilles un peu pâles. Le champ de l’œil gauche montre un défaut semblable, en miroir. Que conclus-tu ?",
    figure: { type: "vf", pattern: "bitemporal", eye: "OD", map: "gray" },
    options: [
      "Glaucome à pression normale : le défaut respecte le méridien horizontal",
      "Glaucome à pression normale avancé : baisser la PIO d’environ 30 %",
      "Artéfact de verre correcteur : refaire le champ avant de conclure",
      "Atteinte du chiasma : le défaut respecte le méridien vertical, faire une IRM"
    ],
    answer: 3,
    explain: "Raisonnement : 1) les fibres de la rétine se rangent de part et d’autre d’un raphé horizontal : le glaucome, qui atteint ces faisceaux à la papille, donne des défauts qui s’arrêtent au méridien horizontal (arcs, ressaut nasal) ; 2) au chiasma, les fibres de la rétine nasale de chaque œil (qui voient le champ temporal) se croisent : une compression à cet endroit (ex. adénome de l’hypophyse, tumeur bénigne de cette glande) enlève le champ temporal des deux yeux, avec une limite nette sur le méridien vertical ; 3) un défaut temporal aux deux yeux qui respecte le méridien vertical, avec une pâleur plus marquée que l’excavation, n’est pas un glaucome : on demande une IRM cérébrale et une évaluation en neuro-ophtalmologie.",
    why: [
      "Piège : c’est le méridien vertical qui est respecté ici ; le glaucome, lui, respecte le méridien horizontal.",
      "Baisser la PIO ne sert à rien si la cause est une compression du chiasma ; il faut d’abord la trouver.",
      "Un artéfact de verre correcteur donne plutôt un anneau de déficit en périphérie, pas un défaut temporal en miroir aux deux yeux.",
      "Exact : défaut temporal aux deux yeux limité par le méridien vertical = chiasma jusqu’à preuve du contraire ; IRM."
    ]
  },
  {
    id: "A-031", module: "A", topic: "a-imagerie", type: "image", level: 1, trap: false,
    stem: "Ce schéma de papille (OD) appartient à une femme de 66 ans suivie pour glaucome. Ton patron te demande de nommer les deux signes qui l’inquiètent, et le défaut de champ visuel que tu attends.",
    figure: { type: "disc", cd: 0.7, notch: "inf", heme: true, ppa: false, pallor: false },
    options: [
      "Encoche inférieure et hémorragie papillaire ; défaut arciforme supérieur",
      "Encoche supérieure et hémorragie papillaire ; défaut arciforme inférieur",
      "Encoche inférieure et atrophie péripapillaire ; défaut arciforme inférieur",
      "Pâleur inférieure et œdème papillaire ; défaut altitudinal supérieur"
    ],
    answer: 0,
    explain: "Raisonnement : 1) une encoche (notch) est un amincissement localisé du bord neurorétinien, ici au pôle inférieur ; une hémorragie papillaire (hémorragie de Drance) est une petite hémorragie en flammèche sur le bord de la papille ; 2) les fibres qui passent au pôle inférieur de la papille viennent de la rétine inférieure, qui voit le champ supérieur (l’image est inversée sur la rétine) : on attend un défaut arciforme supérieur ; 3) l’hémorragie papillaire est un facteur de risque de progression (AAO 2026) : elle justifie un suivi plus serré et une révision de la PIO cible.",
    why: [
      "Exact : encoche et hémorragie inférieures → défaut arciforme supérieur ; l’hémorragie signale un risque de progression.",
      "Mauvais pôle : les signes sont inférieurs, et une atteinte inférieure donne un défaut supérieur.",
      "Pas d’atrophie péripapillaire marquée ici, et une atteinte inférieure donne un défaut supérieur, pas inférieur.",
      "Le bord est aminci, pas pâle, et la papille n’est pas gonflée (œdème) ; l’hémorragie siège au bord d’une encoche."
    ]
  },
  {
    id: "A-032", module: "A", topic: "a-imagerie", type: "image", level: 3, trap: false,
    stem: "Ce schéma d’OCT de la couche des fibres nerveuses péripapillaire (RNFL : courbe TSNIT et secteurs) appartient à l’OD d’un homme de 59 ans suspect de glaucome. Son champ 24-2 est normal. Ton patron demande où se trouve l’atteinte et quel examen ajouter.",
    figure: { type: "oct", pattern: "inf-thin" },
    options: [
      "Amincissement supérieur ; refaire le même 24-2 dans un an, sans autre test",
      "Amincissement inférieur ; ajouter un champ 30-2, plus large en périphérie",
      "Amincissement inférieur ; ajouter un champ 10-2 et l’OCT maculaire",
      "Amincissement temporal ; faisceau papillomaculaire atteint, aucun autre test"
    ],
    answer: 2,
    explain: "Raisonnement : 1) sur la courbe TSNIT (Temporal–Supérieur–Nasal–Inférieur–Temporal), la bosse inférieure est abaissée et le secteur inférieur sort des normes : amincissement inférieur, le site le plus fréquent dans le glaucome (inférotemporal) ; 2) le pôle inférotemporal de la papille reçoit les fibres de la macula inférieure (zone de vulnérabilité maculaire), qui voit le champ central supérieur ; 3) le 24-2 n’a que quelques points espacés de 6° au centre et peut manquer ces petits défauts paracentraux : on ajoute un champ 10-2 (central, points serrés) et l’OCT des cellules ganglionnaires maculaires, comme le recommande l’AAO (2026).",
    why: [
      "Mauvais pôle ; et un 24-2 normal n’exclut pas un petit défaut central que l’OCT laisse prévoir.",
      "Bon pôle, mais le 30-2 ajoute de la périphérie, alors que le défaut probable est central (paracentral).",
      "Exact : atteinte inférotemporale → défaut paracentral supérieur possible, mieux vu au 10-2 et à l’OCT maculaire.",
      "Le schéma montre une atteinte inférieure, pas temporale ; le faisceau papillomaculaire est longtemps épargné dans le glaucome."
    ]
  },
  {
    id: "A-033", module: "A", topic: "a-imagerie", type: "image", level: 3, trap: true,
    stem: "Ce schéma d’OCT RNFL (OD) appartient à une étudiante de 26 ans, myope de −8,00 D, dirigée parce que l’appareil affiche des secteurs en rouge. PIO 15 mmHg, champ visuel normal, papille inclinée (oblique) avec un large croissant d’atrophie. Comment interprètes-tu ce résultat ?",
    figure: { type: "oct", pattern: "red-disease" },
    options: [
      "Glaucome débutant confirmé par l’OCT : commencer des gouttes",
      "Probable « red disease » : rouge sans maladie, à suivre dans le temps",
      "Probable « green disease » : faux négatif qui masque une atteinte",
      "Neuropathie optique compressive : IRM cérébrale en urgence"
    ],
    answer: 1,
    explain: "Raisonnement : 1) l’OCT compare l’épaisseur de la RNFL à une base de données normative, faite surtout d’yeux sans forte myopie ; 2) dans un œil très myope, long, avec une papille inclinée (tilted disc), les faisceaux de fibres sont déplacés et l’appareil segmente mal : il peut colorer en rouge des secteurs normaux pour cet œil ; 3) avec une PIO normale, un champ normal et une papille myope typique, c’est probablement un faux positif (« red disease » : du rouge sans maladie) : on documente une base et on suit dans le temps plutôt que de traiter. La décision repose sur l’ensemble papille + champ + évolution, pas sur une couleur.",
    why: [
      "Une couleur rouge isolée ne suffit pas à diagnostiquer un glaucome ; il faut une concordance avec la papille et le champ.",
      "Exact : myopie forte et papille inclinée faussent la comparaison normative ; on suit dans le temps.",
      "La « green disease » est l’inverse : un OCT faussement normal (vert) malgré une atteinte, par exemple en cas d’œdème ou de membrane épirétinienne (fine membrane à la surface de la rétine).",
      "Rien n’évoque une compression (pas de pâleur, champ normal) ; l’aspect est celui d’une papille myope."
    ]
  },
  {
    id: "A-034", module: "A", topic: "a-imagerie", type: "image", level: 3, trap: false,
    stem: "Ce schéma de topographie cornéenne (carte de courbure axiale : couleurs chaudes = zones cambrées) appartient à l’OD d’un homme de 45 ans dont la vision baisse lentement. La pachymétrie montre une cornée centrale d’épaisseur normale. Quel diagnostic est le plus probable ?",
    figure: { type: "topo", pattern: "pmd" },
    options: [
      "Astigmatisme régulier direct : nœud papillon vertical et symétrique",
      "Kératocône : cambrure inférieure, nœud papillon asymétrique aux axes déviés",
      "Astigmatisme régulier inverse : nœud papillon horizontal et symétrique",
      "Dégénérescence marginale pellucide : cambrure en « pince de crabe »"
    ],
    answer: 3,
    explain: "Raisonnement : 1) sur une carte de courbure axiale, les couleurs chaudes montrent les zones cambrées ; un nœud papillon symétrique vertical = astigmatisme direct, horizontal = astigmatisme inverse (régulier, simple défaut optique) ; 2) une ectasie (cornée amincie qui bombe) donne une cambrure irrégulière : le kératocône (cornée centrale ou paracentrale inférieure qui s’amincit et bombe en cône) fait un nœud papillon asymétrique, plus cambré en bas, aux axes déviés ; 3) la dégénérescence marginale pellucide (amincissement en bande à 1–2 mm du limbe inférieur) fait une « pince de crabe » (crab claw) : cambrure inférieure en périphérie qui remonte en deux bras, avec un astigmatisme inverse au centre. Une cornée centrale d’épaisseur normale va dans ce sens.",
    why: [
      "L’astigmatisme direct donne un nœud papillon vertical symétrique, pas une cambrure inférieure en arc.",
      "Le kératocône amincit et cambre la cornée centrale ou paracentrale inférieure ; ici le centre est d’épaisseur normale et la cambrure est périphérique, en « pince ».",
      "Il y a bien un astigmatisme inverse au centre, mais avec une cambrure inférieure périphérique : ce n’est pas un simple astigmatisme régulier.",
      "Exact : cambrure inférieure périphérique en « pince de crabe » avec astigmatisme inverse = dégénérescence marginale pellucide."
    ]
  },
  {
    id: "A-035", module: "A", topic: "a-imagerie", type: "image", level: 1, trap: false,
    stem: "Ce schéma en coupe de la cornée appartient à une femme de 72 ans dont la vision est floue surtout le matin, puis s’améliore au cours de la journée. Quelle couche est malade, et pourquoi la vision est-elle pire au réveil ?",
    figure: { type: "cornea", edema: "stromal", guttae: true, scar: false },
    options: [
      "Épithélium ; les paupières fermées le dessèchent pendant la nuit",
      "Stroma ; du collagène cicatriciel se dépose pendant le sommeil",
      "Endothélium ; la nuit, les larmes s’évaporent moins et la cornée gonfle",
      "Couche de Bowman ; elle se déchire au réveil à l’ouverture des paupières"
    ],
    answer: 2,
    explain: "Raisonnement : 1) le schéma montre des guttae, petites excroissances de la membrane de Descemet sous l’endothélium, typiques de la dystrophie endothéliale de Fuchs (maladie héréditaire où les cellules endothéliales disparaissent peu à peu), et un stroma épaissi par l’œdème ; 2) l’endothélium malade pompe moins bien l’eau hors du stroma, qui gonfle et perd sa transparence ; 3) la nuit, paupières fermées, les larmes ne s’évaporent plus : moins concentrées, elles retirent moins d’eau à la cornée par osmose, d’où un œdème maximal au réveil ; le jour, l’évaporation concentre les larmes et « sèche » un peu la cornée. On mesure la densité endothéliale par microscopie spéculaire, où les guttae apparaissent comme des zones noires.",
    why: [
      "La nuit, l’épithélium n’est pas desséché ; c’est au contraire un excès d’eau qui trouble la cornée.",
      "Une cicatrice ne varie pas au cours de la journée ; un flou matinal qui s’améliore évoque un œdème.",
      "Exact : endothélium défaillant (guttae) ; moins d’évaporation la nuit, donc plus d’œdème au réveil.",
      "La couche de Bowman ne se déchire pas ; une douleur au réveil évoquerait plutôt une érosion récidivante (épithélium mal attaché qui se décolle à l’ouverture des paupières)."
    ]
  },
  {
    id: "A-036", module: "A", topic: "a-imagerie", type: "image", level: 2, trap: false,
    stem: "Ce schéma de gonioscopie appartient à l’OD d’une femme de 76 ans chez qui la lampe à fente montre des dépôts blanchâtres en « cible » sur la capsule antérieure du cristallin ; PIO 28 mmHg. Quel signe vois-tu dans l’angle ?",
    figure: { type: "gonio", grade: 3, pas: false, pigment: "sampaolesi", nv: false, recession: false },
    options: [
      "Ligne de Sampaolesi : pigment ondulé déposé en avant de la ligne de Schwalbe",
      "Néovaisseaux de l’angle : fins vaisseaux rouges qui franchissent l’éperon scléral",
      "Récession de l’angle : bande ciliaire anormalement large, procès iriens déchirés",
      "Synéchies antérieures périphériques : iris collé en tentes sur le trabéculum"
    ],
    answer: 0,
    explain: "Raisonnement : 1) la pseudo-exfoliation (pseudoexfoliation, PXF) est une maladie liée à l’âge où un matériel fibrillaire blanc se dépose sur le cristallin et dans l’angle ; le frottement de l’iris sur ces dépôts libère aussi du pigment ; 2) ce pigment et ce matériel encrassent le trabéculum, qui devient pigmenté de façon irrégulière, et la PIO monte ; 3) une partie du pigment se dépose en une ligne ondulée en avant de la ligne de Schwalbe : c’est la ligne de Sampaolesi. On peut aussi la voir, moins souvent, dans la dispersion pigmentaire.",
    why: [
      "Exact : pigment ondulé en avant de Schwalbe ; avec les dépôts en cible sur le cristallin, c’est une pseudo-exfoliation.",
      "Les néovaisseaux de l’angle (vaisseaux anormaux qui poussent quand la rétine manque d’oxygène, ex. diabète) franchissent l’éperon ; le schéma n’en montre pas.",
      "La récession de l’angle (déchirure du corps ciliaire après un coup) élargit la bande ciliaire ; ici le signe est un dépôt de pigment en avant de Schwalbe.",
      "Des synéchies cacheraient les structures de l’angle ; ici l’angle est ouvert et ses structures sont visibles."
    ]
  }
]);
