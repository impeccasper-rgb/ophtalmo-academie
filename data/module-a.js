var G = (typeof window !== 'undefined') ? window : globalThis;
G.OPH = G.OPH || {};

G.OPH.A = {
  anatomy: {
    "cornee": {
      t: "Cornée", en: "Cornea",
      d: "Fenêtre avant de l’œil, transparente et sans vaisseaux, qui fournit ≈ 2/3 de sa puissance optique (≈ 43 dioptries [D] sur ≈ 60 D). Épaisseur centrale ≈ 540–550 µm (périphérie ≈ 650–700 µm), diamètre horizontal ≈ 11,5–12 mm. Innervée par V1, la branche ophtalmique du trijumeau (nerf nasociliaire → nerfs ciliaires longs), c’est le tissu le plus innervé du corps.",
      c: "Une cornée hypoesthésique (sensibilité diminuée au test du coton) oriente vers une kératite herpétique (herpès simplex ou zona ophtalmique) ou une kératite neurotrophique (ulcère qui guérit mal faute d’innervation). À l’inverse, une douleur disproportionnée aux signes chez un porteur de lentilles fait penser à Acanthamoeba (amibe qui infecte la cornée)."
    },
    "limbe": {
      t: "Limbe", en: "Limbus",
      d: "Zone de transition de 1–2 mm entre la cornée, la sclère et la conjonctive. Elle abrite les cellules souches de l’épithélium cornéen (dans les palissades de Vogt) et recouvre l’angle, le trabéculum et le canal de Schlemm.",
      c: "Une brûlure chimique qui blanchit le limbe (ischémie) détruit ces cellules souches : l’épithélium cornéen ne se renouvelle plus, puis la conjonctive et des vaisseaux envahissent la cornée (insuffisance limbique, limbal stem cell deficiency). C’est pourquoi on mesure l’étendue de l’ischémie limbique pour grader la gravité d’une brûlure."
    },
    "sclere": {
      t: "Sclère", en: "Sclera",
      d: "Coque blanche et opaque de collagène désorganisé, en continuité avec la cornée au limbe et avec la dure-mère du nerf optique en arrière. Épaisseur ≈ 1 mm au pôle postérieur, ≈ 0,3 mm juste derrière l’insertion des muscles droits.",
      c: "En arrière, la sclère devient la lame criblée, un tamis que traversent les axones du nerf optique : c’est le point faible où une pression intraoculaire (PIO) élevée les déforme. En avant, le chirurgien y taille le volet de la trabéculectomie (fistule couverte qui laisse sortir l’humeur aqueuse sous la conjonctive) ; la tension des sutures du volet règle le débit."
    },
    "conjonctive": {
      t: "Conjonctive", en: "Conjunctiva",
      d: "Muqueuse transparente qui tapisse l’intérieur des paupières (conjonctive tarsale), les culs-de-sac et la sclère (conjonctive bulbaire) jusqu’au limbe. Son épithélium non kératinisé contient les cellules caliciformes (mucus du film lacrymal) ; son stroma est vascularisé et riche en cellules immunitaires.",
      c: "Une trabéculectomie crée une bulle de filtration (réservoir d’humeur aqueuse sous la conjonctive) qui échoue si la conjonctive cicatrise trop. Des années de gouttes avec agent de conservation (chlorure de benzalkonium, BAK) enflamment la conjonctive → plus de fibrose → bulle moins durable."
    },
    "chambre-anterieure": {
      t: "Chambre antérieure", en: "Anterior chamber",
      d: "Espace entre l’endothélium cornéen et l’iris/cristallin, rempli d’humeur aqueuse (≈ 250 µL). Sa profondeur centrale (≈ 3 mm) diminue chez l’hypermétrope (œil court) et avec l’âge (le cristallin s’épaissit).",
      c: "On y cherche des cellules et du flare (protéines qui diffusent la lumière : inflammation), un hypopyon (niveau de globules blancs : kératite grave, endophtalmite = infection à l’intérieur de l’œil) et une faible profondeur (risque de fermeture de l’angle : l’iris vient boucher le trabéculum). Après une trabéculectomie, une chambre plate évoque une surfiltration (trop d’humeur aqueuse évacuée par la bulle), une fuite de la bulle ou une mal-direction de l’aqueuse (aqueuse détournée vers le vitré)."
    },
    "angle": {
      t: "Angle iridocornéen", en: "Iridocorneal angle",
      d: "Recoin périphérique de la chambre antérieure, entre la cornée et la racine de l’iris, où l’humeur aqueuse quitte l’œil par le trabéculum. On ne peut pas le voir directement (la lumière qui en vient subit une réflexion totale à la surface de la cornée, à l’interface larmes–air) : il faut un verre de gonioscopie, qui supprime cette interface.",
      c: "Un glaucome à angle ouvert (neuropathie optique progressive, souvent liée à la PIO, où l’angle est ouvert mais filtre mal) ne se diagnostique qu’après une gonioscopie, pour exclure un angle fermé ou une cause secondaire : pseudo-exfoliation (dépôts fibrillaires blanchâtres liés à l’âge), récession de l’angle (déchirure du corps ciliaire après un coup) ou néovaisseaux de l’angle (vaisseaux anormaux induits par une ischémie rétinienne)."
    },
    "trabeculum": {
      t: "Trabéculum", en: "Trabecular meshwork",
      d: "Filtre spongieux de lamelles de collagène tapissées de cellules trabéculaires, en trois couches : uvéale, cornéosclérale et juxtacanaliculaire. La couche juxtacanaliculaire, collée à la paroi interne du canal de Schlemm, fournit l’essentiel de la résistance à l’écoulement ; cette voie conventionnelle évacue ≈ 70–95 % de l’humeur aqueuse.",
      c: "C’est la cible de la pilocarpine (qui tire sur l’éperon scléral et ouvre les mailles), de la SLT (trabéculoplastie sélective au laser, qui stimule le trabéculum) et des MIGS trabéculaires (petits implants ou incisions qui court-circuitent la résistance). Il s’encrasse de pigment ou de matériel pseudo-exfoliatif → résistance ↑ → PIO ↑ : glaucomes secondaires à angle ouvert."
    },
    "schlemm": {
      t: "Canal de Schlemm", en: "Schlemm’s canal",
      d: "Canal circulaire tapissé d’endothélium (≈ 36 mm de circonférence), situé derrière le trabéculum pigmenté, juste en avant de l’éperon scléral. Il se vide par ≈ 25–35 canaux collecteurs dans les veines aqueuses puis épisclérales, dont la pression (≈ 8–10 mmHg) fixe un plancher à la PIO.",
      c: "Du sang dans le canal à la gonioscopie vient souvent de la pression du verre sur les veines épisclérales (reflux), mais peut signaler une pression veineuse épisclérale élevée : fistule carotido-caverneuse (communication anormale entre la carotide et le sinus caverneux) ou syndrome de Sturge-Weber (angiome facial congénital). Les MIGS canaliculaires (chirurgies minimalement invasives : stent, dilatation ou ouverture du canal) agissent ici."
    },
    "iris": {
      t: "Iris", en: "Iris",
      d: "Diaphragme coloré formé d’un stroma, de deux muscles (sphincter : parasympathique ; dilatateur : sympathique) et d’un épithélium pigmentaire postérieur. Sa racine, très mince, s’insère sur le corps ciliaire : c’est elle qui vient fermer l’angle.",
      c: "Un iris bombé vers l’avant évoque un bloc pupillaire (l’aqueuse passe mal entre l’iris et le cristallin et pousse l’iris). Des trous de transillumination en rayons en moyenne périphérie évoquent une dispersion pigmentaire (l’iris frotte sur les zonules et perd son pigment) ; des néovaisseaux au bord pupillaire = rubéose (néovascularisation par ischémie rétinienne)."
    },
    "pupille": {
      t: "Pupille", en: "Pupil",
      d: "Ouverture centrale de l’iris (≈ 2–4 mm à la lumière, plus large dans le noir et chez le jeune). Le sphincter, commandé par le parasympathique (nerf III, ganglion ciliaire), la contracte ; le dilatateur, commandé par le sympathique, l’agrandit.",
      c: "Pupille en mi-mydriase (moyennement dilatée, ≈ 4–6 mm), ovale et peu réactive + œil rouge douloureux + cornée œdémateuse = crise aiguë de fermeture de l’angle (la PIO très haute rend le sphincter ischémique). En mi-mydriase, le bloc pupillaire est maximal et l’iris périphérique relâché s’épaissit dans l’angle : c’est pourquoi une dilatation peut déclencher une crise sur un angle étroit."
    },
    "corps-ciliaire": {
      t: "Corps ciliaire", en: "Ciliary body",
      d: "Anneau d’≈ 6 mm entre la racine de l’iris et l’ora serrata : pars plicata en avant (≈ 2 mm, porte les procès ciliaires) et pars plana en arrière (≈ 4 mm, voie d’entrée des injections intravitréennes). Il contient le muscle ciliaire (accommodation, ouverture du trabéculum) et l’épithélium qui sécrète l’humeur aqueuse.",
      c: "Dans le glaucome réfractaire, on détruit une partie du corps ciliaire au laser (cyclophotocoagulation) pour réduire la production d’aqueuse. S’il bascule vers l’avant, il pousse l’iris contre l’angle et le ferme sans bloc pupillaire : effusion choroïdienne au topiramate (réaction idiosyncrasique : liquide sous la choroïde, souvent bilatéral) ou iris plateau (corps ciliaire placé trop en avant qui soulève la racine de l’iris). L’iridotomie ne suffit alors pas."
    },
    "proces-ciliaires": {
      t: "Procès ciliaires", en: "Ciliary processes",
      d: "≈ 70 replis très vascularisés de la pars plicata, recouverts d’un épithélium à deux couches (pigmentée externe, non pigmentée interne). L’épithélium non pigmenté sécrète l’humeur aqueuse (≈ 2–3 µL/min) par transport actif (Na⁺/K⁺-ATPase) avec l’aide de l’anhydrase carbonique.",
      c: "Trois classes de gouttes y freinent la production : bêtabloquants (timolol), inhibiteurs de l’anhydrase carbonique (dorzolamide ; acétazolamide par la bouche) et alpha-2 agonistes (brimonidine). Dans l’iris plateau, l’UBM (échographie à haute fréquence) montre ces procès placés trop en avant : ils soutiennent la racine de l’iris et effacent le sulcus ciliaire."
    },
    "chambre-posterieure": {
      t: "Chambre postérieure", en: "Posterior chamber",
      d: "Petit espace (≈ 60 µL) entre la face postérieure de l’iris et le cristallin, où l’humeur aqueuse est produite avant de passer par la pupille. Le sulcus ciliaire (rainure entre l’iris et le corps ciliaire) peut recevoir une lentille intraoculaire ou un tube de drainage.",
      c: "Dans le bloc pupillaire, l’aqueuse s’accumule ici → la pression dépasse celle de la chambre antérieure → l’iris périphérique bombe vers l’avant et ferme l’angle. L’iridotomie au laser (LPI : petit trou dans l’iris périphérique) ouvre une voie de dérivation et égalise les pressions."
    },
    "zonules": {
      t: "Zonules de Zinn", en: "Zonules",
      d: "Fibres de fibrilline qui relient le corps ciliaire à l’équateur du cristallin et le maintiennent centré. Quand le muscle ciliaire se contracte, elles se relâchent et le cristallin s’arrondit (accommodation).",
      c: "La pseudo-exfoliation (dépôts fibrillaires liés à l’âge) fragilise les zonules : cristallin qui tremble (phacodonésis), chirurgie de cataracte plus à risque et parfois fermeture de l’angle par un cristallin avancé. Dans la dispersion pigmentaire, c’est le frottement de l’iris sur les zonules qui libère le pigment."
    },
    "cristallin": {
      t: "Cristallin", en: "Crystalline lens",
      d: "Lentille biconvexe sans vaisseaux (≈ 20 D), suspendue par les zonules, qui s’épaissit toute la vie (≈ 3,5–4 mm chez le jeune adulte → ≈ 4,5–5 mm chez l’âgé). Sa perte de souplesse cause la presbytie vers 40–45 ans, son opacification la cataracte.",
      c: "En grossissant, le cristallin pousse l’iris vers l’avant et rétrécit l’angle : c’est un moteur majeur de la fermeture primaire de l’angle. L’étude EAGLE a montré que retirer un cristallin clair contrôle mieux la PIO que l’iridotomie (fermeture primaire avec PIO ≥ 30 mmHg ou glaucome par fermeture de l’angle, patients ≥ 50 ans)."
    },
    "vitre": {
      t: "Vitré", en: "Vitreous",
      d: "Gel transparent (≈ 4 mL, ≈ 99 % d’eau, collagène et acide hyaluronique) qui occupe ≈ 80 % du volume du globe. Il adhère fortement à la base du vitré (près de l’ora serrata), à la papille, à la macula et le long des vaisseaux.",
      c: "Dans la mal-direction de l’aqueuse (aqueous misdirection), l’aqueuse est détournée vers le vitré → le vitré gonfle → il pousse cristallin et iris vers l’avant. Résultat : chambre antérieure plate au centre comme en périphérie et PIO élevée malgré une iridotomie perméable, typiquement après une chirurgie filtrante."
    },
    "retine": {
      t: "Rétine", en: "Retina",
      d: "Tissu nerveux qui tapisse le fond de l’œil : photorécepteurs (cônes, bâtonnets) à l’extérieur, cellules bipolaires au milieu, cellules ganglionnaires à l’intérieur. Les axones des cellules ganglionnaires forment la couche des fibres nerveuses rétiniennes (RNFL), qui converge vers la papille. Les 2/3 internes sont nourris par l’artère centrale de la rétine, le 1/3 externe par la choriocapillaire.",
      c: "Le glaucome tue sélectivement les cellules ganglionnaires et leurs axones, sans toucher les photorécepteurs. C’est pourquoi l’OCT (tomographie par cohérence optique) mesure deux structures : la RNFL autour de la papille (les axones) et les cellules ganglionnaires maculaires (GCIPL, ganglion cell–inner plexiform layer : leurs corps cellulaires et dendrites)."
    },
    "macula": {
      t: "Macula", en: "Macula",
      d: "Zone centrale d’≈ 5,5 mm de diamètre entre les arcades vasculaires temporales, responsable de la vision fine et des couleurs. Elle contient la plus forte densité de cellules ganglionnaires de la rétine (plusieurs assises de corps cellulaires).",
      c: "Le GCIPL maculaire à l’OCT et le champ visuel 10-2 (test des 10° centraux) détectent une atteinte glaucomateuse centrale qu’un 24-2 peut manquer. La macula inférieure est la plus vulnérable (zone de vulnérabilité maculaire) : ses fibres rejoignent le pôle inférotemporal de la papille, le plus souvent touché."
    },
    "fovea": {
      t: "Fovéa", en: "Fovea",
      d: "Dépression centrale de la macula (≈ 1,5 mm) dont le centre (zone avasculaire fovéolaire, foveal avascular zone, ≈ 0,5 mm) n’a pas de vaisseaux ; les cônes y sont les plus serrés et les autres couches sont repoussées en périphérie. Elle donne la meilleure acuité visuelle.",
      c: "Le glaucome épargne la vision centrale jusqu’à un stade avancé : une acuité visuelle (AV) de 6/6 (20/20) n’exclut donc pas un glaucome sévère. Une baisse d’AV inexpliquée chez un glaucomateux doit faire chercher une autre cause (cataracte, maculopathie, neuropathie non glaucomateuse)."
    },
    "papille": {
      t: "Papille optique", en: "Optic disc (optic nerve head)",
      d: "Point de sortie des axones ganglionnaires et d’entrée/sortie des vaisseaux centraux, ≈ 1,5–2 mm de diamètre (un peu plus haute que large). Sans photorécepteurs, elle crée la tache aveugle physiologique, ≈ 15° en temporal de la fixation. On y décrit l’anneau neurorétinien (le tissu axonal) et l’excavation (le creux central sans axones).",
      c: "Toujours estimer la taille du disque en premier : un grand disque a physiologiquement une grande excavation (macrocupule), un petit disque peut cacher une perte axonale. Le rapport excavation/disque (C/D) n’a de sens que rapporté à cette taille."
    },
    "nerf-optique": {
      t: "Nerf optique", en: "Optic nerve",
      d: "Faisceau d’≈ 1,2 million d’axones ganglionnaires, long d’≈ 50 mm, de la papille au chiasma. Segments : intraoculaire (≈ 1 mm), intraorbitaire (≈ 25 mm), intracanalaire et intracrânien. Les axones se myélinisent seulement en arrière de la lame criblée, ce qui garde la rétine transparente.",
      c: "Une pâleur de l’anneau plus marquée que l’excavation, une perte de vision des couleurs précoce ou un défaut de champ qui respecte le méridien vertical font penser à une neuropathie non glaucomateuse (compression, ischémie, inflammation) : imagerie à discuter. Un glaucome asymétrique peut donner un déficit pupillaire afférent relatif (DPAR : les deux pupilles se contractent moins quand on éclaire l’œil atteint) du côté le plus atteint."
    },
    "choroide": {
      t: "Choroïde", en: "Choroid",
      d: "Couche vasculaire entre la rétine et la sclère, au débit sanguin très élevé. Sa couche interne, la choriocapillaire, nourrit l’épithélium pigmentaire et les photorécepteurs à travers la membrane de Bruch. L’espace suprachoroïdien, entre choroïde et sclère, reçoit une partie de l’humeur aqueuse (voie uvéosclérale).",
      c: "Après une chirurgie filtrante, une PIO trop basse (hypotonie) peut laisser du liquide s’accumuler sous la choroïde (décollement ou effusion choroïdienne) ; la complication redoutée est l’hémorragie suprachoroïdienne (saignement massif sous la choroïde, pendant ou après la chirurgie). L’atrophie péripapillaire zone bêta correspond à une perte de l’épithélium pigmentaire et de la choriocapillaire autour de la papille."
    },
    "ora-serrata": {
      t: "Ora serrata", en: "Ora serrata",
      d: "Bord dentelé où la rétine se termine et rejoint la pars plana du corps ciliaire, ≈ 6–7 mm en arrière du limbe. La base du vitré y adhère fortement.",
      c: "Les injections intravitréennes passent par la pars plana, ≈ 3,5–4 mm du limbe : en avant de l’ora, donc sans percer la rétine, et en arrière du cristallin. En clinique de glaucome, on y injecte un anti-VEGF (médicament qui bloque le facteur de croissance des vaisseaux) dans le glaucome néovasculaire, où des néovaisseaux recouvrent puis ferment l’angle : les vaisseaux régressent en quelques jours."
    },
    "acr": {
      t: "Artère centrale de la rétine", en: "Central retinal artery",
      d: "Branche de l’artère ophtalmique (elle-même issue de la carotide interne) qui entre dans le nerf optique ≈ 10–12 mm derrière le globe et se divise sur la papille. Elle nourrit les 2/3 internes de la rétine ; c’est une artère terminale, sans suppléance.",
      c: "Une pulsation visible de l’artère sur la papille est anormale : la PIO atteint la pression diastolique de l’artère (ex. crise aiguë de fermeture de l’angle) et la perfusion de la rétine interne est menacée. Son occlusion (OACR) donne une perte de vision brutale et indolore avec une macula « rouge cerise » : c’est un AVC oculaire qui exige un bilan vasculaire urgent (et, après 50 ans, l’exclusion d’une artérite à cellules géantes : vitesse de sédimentation, CRP). Une artère ciliorétinienne (venue de la circulation ciliaire), présente chez certains patients, peut épargner la macula."
    },
    "vcr": {
      t: "Veine centrale de la rétine", en: "Central retinal vein",
      d: "Draine la rétine interne, sort par le nerf optique avec l’artère et rejoint le sinus caverneux, directement ou par la veine ophtalmique supérieure. Elle partage une gaine adventitielle avec l’artère au niveau de la lame criblée.",
      c: "L’occlusion de la veine centrale (OVCR) est favorisée par une PIO élevée ou un glaucome. Une OVCR ischémique crée une ischémie rétinienne → sécrétion de VEGF (facteur de croissance de l’endothélium vasculaire) → néovaisseaux de l’iris et de l’angle → glaucome néovasculaire, classiquement dans les 3 premiers mois (« glaucome des 100 jours ») : gonioscopie et PIO aux visites de suivi."
    },
    "arteres-ciliaires-post": {
      t: "Artères ciliaires postérieures", en: "Posterior ciliary arteries",
      d: "Branches de l’artère ophtalmique. Les courtes (≈ 10–20) percent la sclère autour du nerf optique et nourrissent la choroïde et la tête du nerf optique (cercle de Zinn-Haller). Les 2 longues cheminent à 3 h et 9 h jusqu’au corps ciliaire et forment, avec les ciliaires antérieures, le grand cercle artériel de l’iris.",
      c: "La tête du nerf optique dépend de ces artères : une mauvaise perfusion contribue au glaucome (théorie vasculaire). D’où des facteurs de risque retenus par l’AAO : tension artérielle basse (mise de l’avant en 2026) et pression de perfusion oculaire basse ; on se méfie aussi de l’hypotension nocturne (antihypertenseur pris le soir). Leur occlusion aiguë donne une neuropathie optique ischémique antérieure (papille œdémateuse puis pâle) ; après 50 ans, exclure d’urgence la forme artéritique (artérite à cellules géantes)."
    },
    "arteres-ciliaires-ant": {
      t: "Artères ciliaires antérieures", en: "Anterior ciliary arteries",
      d: "Issues des artères musculaires des muscles droits (2 par muscle sauf le droit latéral, 1), elles percent la sclère près du limbe. Elles nourrissent le segment antérieur et le grand cercle artériel de l’iris, et forment le réseau épiscléral périlimbique.",
      c: "Leur dilatation donne l’injection ciliaire (rougeur violacée maximale autour du limbe, cercle périkératique) : elle signale une atteinte de la cornée ou de l’intérieur de l’œil : kératite, uvéite (inflammation de l’iris, du corps ciliaire ou de la choroïde) ou crise de fermeture de l’angle. La conjonctivite donne plutôt une rougeur maximale en périphérie, dans les culs-de-sac."
    },
    "veines-vortiqueuses": {
      t: "Veines vortiqueuses", en: "Vortex veins",
      d: "En général 4 à 7 veines (au moins 1 par quadrant) qui drainent la choroïde, le corps ciliaire et l’iris. Elles traversent obliquement la sclère en arrière de l’équateur et rejoignent les veines ophtalmiques supérieure et inférieure.",
      c: "Dans la nanophtalmie (œil très petit à sclère épaisse), la sclère comprime les veines vortiqueuses → le sang de la choroïde s’écoule mal → du liquide s’accumule sous la choroïde (effusion uvéale) → le corps ciliaire bascule et ferme l’angle. Ces yeux sont aussi à haut risque de complications chirurgicales."
    },
    "nerfs-ciliaires-longs": {
      t: "Nerfs ciliaires longs", en: "Long ciliary nerves",
      d: "Deux branches du nerf nasociliaire (V1) qui cheminent à 3 h et 9 h entre choroïde et sclère. Ils portent la sensibilité de la cornée, de l’iris et du corps ciliaire, et les fibres sympathiques destinées au muscle dilatateur de l’iris (ces fibres ne font pas relais dans le ganglion ciliaire).",
      c: "Les vésicules du zona sur le bout du nez (signe de Hutchinson) signalent une atteinte du nerf nasociliaire, donc un risque élevé d’atteinte de la cornée et de l’œil. En cyclophotocoagulation transsclérale (laser appliqué à travers la sclère pour détruire une partie du corps ciliaire), on épargne 3 h et 9 h pour ne pas brûler ces nerfs et les artères ciliaires longues."
    },
    "nerfs-ciliaires-courts": {
      t: "Nerfs ciliaires courts", en: "Short ciliary nerves",
      d: "6 à 10 nerfs issus du ganglion ciliaire (dans l’orbite, derrière le globe). Ils portent les fibres parasympathiques post-ganglionnaires (venues du noyau d’Edinger-Westphal par le nerf III, avec relais dans le ganglion) vers le sphincter de l’iris et le muscle ciliaire, ainsi que des fibres sensitives et vasomotrices.",
      c: "Une atteinte du ganglion ou des nerfs ciliaires courts donne la pupille tonique d’Adie : pupille dilatée qui réagit mal à la lumière mais mieux à l’accommodation (dissociation lumière-près), qui se contracte avec de la pilocarpine diluée (≈ 0,1 %) par hypersensibilité de dénervation."
    },
    "lame-criblee": {
      t: "Lame criblée", en: "Lamina cribrosa",
      d: "Plaques de collagène perforées qui prolongent la sclère au fond de la papille et que traversent les axones et les vaisseaux centraux. Ses pores sont plus grands et son tissu de soutien plus mince aux pôles supérieur et inférieur.",
      c: "Sous une PIO trop élevée pour cet œil, la lame se déforme vers l’arrière → les pores se déforment et compriment les axones → le transport axonal se bloque → la cellule ganglionnaire meurt. Les pôles cèdent en premier, d’où les encoches inférieure/supérieure de l’anneau et les défauts arciformes du champ visuel."
    },
    "muscles-droits": {
      t: "Muscles droits", en: "Rectus muscles",
      d: "Quatre muscles (médial, inférieur, latéral, supérieur) qui s’insèrent sur la sclère de plus en plus loin du limbe (spirale de Tillaux ≈ 5,5 ; 6,5 ; 6,9 ; 7,7 mm). Le nerf III innerve les droits médial, inférieur et supérieur, le nerf VI le droit latéral.",
      c: "La plaque des tubes de drainage (dispositifs qui dérivent l’aqueuse vers un réservoir derrière l’équateur, ex. Ahmed, Baerveldt) se fixe entre deux muscles droits, souvent en supérotemporal : une diplopie (vision double) est une complication connue. La sclère, très mince derrière les insertions, se perce facilement."
    }
  },
  cornea: {
    "film": {
      t: "Film lacrymal", en: "Tear film",
      d: "Fine couche (≈ 3 µm) qui recouvre l’épithélium et forme la première surface optique de l’œil. Trois composantes : lipides en surface (glandes de Meibomius, freinent l’évaporation), phase muco-aqueuse (glande lacrymale principale et glandes accessoires de Krause et Wolfring ; mucine MUC5AC des cellules caliciformes) et glycocalyx de l’épithélium (mucines membranaires MUC1/4/16) qui rend la cornée mouillable. Il se rompt normalement en plus de 10 s (TBUT, tear break-up time).",
      c: "Un film instable donne une vision qui fluctue au clignement et fausse la kératométrie, la topographie et la biométrie. On traite donc la surface (larmes artificielles, dysfonction meibomienne) avant de mesurer : avant une chirurgie de cataracte ou pour suivre un kératocône (cornée qui s’amincit et se bombe en cône)."
    },
    "epithelium": {
      t: "Épithélium", en: "Epithelium",
      d: "Épithélium pavimenteux stratifié non kératinisé d’≈ 50 µm (5–7 assises), entièrement renouvelé en ≈ 7 jours à partir des cellules souches du limbe. Ses jonctions serrées en font une barrière contre l’eau et les microbes ; sa membrane basale et ses hémidesmosomes l’ancrent à la couche de Bowman.",
      c: "Il cicatrise vite et sans trace : une abrasion (perte traumatique de l’épithélium) se referme en 24–72 h et se colore à la fluorescéine. Mal ancré (dystrophie de la membrane basale, ancienne égratignure par un ongle), il se décolle au réveil : érosion récidivante (douleur vive à l’ouverture des yeux). S’il gonfle (microkystes, bulles), l’eau traverse la cornée : PIO très élevée (crise de fermeture de l’angle) ou endothélium défaillant."
    },
    "bowman": {
      t: "Couche de Bowman", en: "Bowman layer",
      d: "Couche acellulaire de 8–12 µm faite de fibrilles de collagène tassées, juste sous la membrane basale de l’épithélium. Elle ne se régénère pas : une fois franchie, elle est remplacée par du tissu cicatriciel.",
      c: "Une lésion limitée à l’épithélium guérit sans trace ; une lésion qui franchit Bowman (ulcère infectieux, corps étranger profond, chirurgie de surface) laisse une opacité définitive (taie ou leucome selon sa densité). Centrale, elle baisse l’acuité visuelle (AV) : c’est une raison de traiter vite une kératite bactérienne, avant que l’ulcère ne creuse."
    },
    "stroma": {
      t: "Stroma", en: "Stroma",
      d: "≈ 90 % de l’épaisseur cornéenne (≈ 450–500 µm) : fibrilles de collagène de type I de diamètre uniforme, rangées en lamelles parallèles très régulières, entre lesquelles vivent les kératocytes ; ≈ 78 % d’eau. La transparence repose sur cet espacement régulier, maintenu par les protéoglycanes et par l’endothélium qui pompe l’eau hors du stroma.",
      c: "S’il prend l’eau (œdème stromal), l’espacement devient irrégulier → la lumière diffuse → cornée épaissie et grisâtre. Il cicatrise de façon désorganisée (opacité). C’est la couche infiltrée dans les kératites, amincie dans le kératocône et renforcée par le cross-linking (CXL : riboflavine + UVA qui créent des liens entre les fibres de collagène pour freiner l’ectasie, c’est-à-dire le bombement progressif)."
    },
    "dua": {
      t: "Couche de Dua (pré-Descemet)", en: "Dua layer (pre-Descemet layer)",
      d: "Couche acellulaire très résistante d’≈ 10–15 µm, entre le stroma postérieur et la membrane de Descemet, décrite en 2013. Elle résiste à l’air injecté sous pression, ce qui la distingue du stroma.",
      c: "Dans la DALK (greffe lamellaire antérieure profonde : on remplace le stroma malade, par exemple dans un kératocône, en gardant la Descemet et l’endothélium du patient, donc sans risque de rejet endothélial), le chirurgien injecte une grosse bulle d’air (big bubble) qui décolle le stroma au plan de cette couche."
    },
    "descemet": {
      t: "Membrane de Descemet", en: "Descemet membrane",
      d: "Membrane basale de l’endothélium, élastique, qui s’épaissit toute la vie (≈ 3 µm à la naissance → 10–15 µm chez l’adulte). Détachée, elle s’enroule sur elle-même : c’est le « rouleau » du greffon de DMEK.",
      c: "Plis de Descemet (stries) = stroma œdémateux ou œil hypotone (PIO trop basse, ex. après une chirurgie filtrante). Ruptures : stries de Haab dans le glaucome congénital (cornée étirée par la PIO), hydrops aigu du kératocône (l’eau entre d’un coup dans le stroma). Guttae = excroissances de Descemet sécrétées par un endothélium malade (dystrophie de Fuchs). La DMEK (greffe endothéliale qui remplace seulement Descemet + endothélium) traite la dystrophie de Fuchs et les autres défaillances de l’endothélium."
    },
    "endothelium": {
      t: "Endothélium", en: "Endothelium",
      d: "Monocouche de cellules hexagonales (≈ 5 µm) qui tapisse la face postérieure de la cornée et ne se divise pas chez l’humain. Densité ≈ 3000–3500 cellules/mm² chez le jeune adulte, ≈ 2500 vers 60–70 ans (perte ≈ 0,6 %/an) ; quand une cellule meurt, ses voisines s’étalent pour couvrir le trou. Il garde la cornée déshydratée (déturgescence) grâce à sa barrière et à sa pompe Na⁺/K⁺-ATPase.",
      c: "Sous ≈ 400–500 cellules/mm², la pompe ne suffit plus : œdème stromal puis épithélial (décompensation). Dans la dystrophie de Fuchs (maladie héréditaire de l’endothélium avec guttae et perte cellulaire progressive), la vision est pire au réveil : paupières fermées → pas d’évaporation → la cornée gonfle la nuit. Chirurgies répétées, crise de fermeture de l’angle, tube de drainage trop près de la cornée ou implants intracamérulaires répétés (médicament à libération prolongée dans la chambre antérieure) peuvent aussi l’épuiser : on le mesure par microscopie spéculaire."
    }
  },

  angle: {
    "iris-racine": {
      t: "Racine de l’iris", en: "Iris root",
      d: "Structure la plus postérieure de l’angle : insertion de l’iris sur le corps ciliaire. Elle ne filtre rien, mais sa position et son profil (plat, bombé, concave, plateau) déterminent si l’angle est ouvert.",
      c: "Profil bombé = bloc pupillaire ; concave = dispersion pigmentaire (l’iris creusé frotte sur les zonules et perd son pigment) ; plateau = racine soulevée par les procès ciliaires. Les procès iriens (fines dentelles normales) ne doivent pas être confondus avec les synéchies antérieures périphériques (PAS : adhérences permanentes et larges de l’iris sur l’angle, qui persistent à l’indentation)."
    },
    "bande-ciliaire": {
      t: "Bande ciliaire", en: "Ciliary body band",
      d: "Bande gris-brun entre la racine de l’iris et l’éperon scléral : c’est la face antérieure du muscle ciliaire. La voir signifie un angle grand ouvert (Shaffer 4, ≈ 35–45°) ; l’aqueuse de la voie uvéosclérale passe entre ses fibres.",
      c: "Une bande ciliaire anormalement large, surtout comparée à l’autre œil, avec des procès iriens déchirés = récession de l’angle (déchirure du muscle ciliaire après un coup) : le glaucome peut apparaître des années plus tard, d’où un suivi à vie. Une fente sombre entre bande ciliaire et sclère = cyclodialyse (corps ciliaire décollé de l’éperon → PIO très basse)."
    },
    "eperon": {
      t: "Éperon scléral", en: "Scleral spur",
      d: "Ligne blanche entre la bande ciliaire et le trabéculum pigmenté : saillie de sclère où s’attache le muscle ciliaire longitudinal. Repère clé : si l’éperon est visible, l’angle est ouvert dans ce quadrant (Shaffer ≥ 3, ≈ 20–35° ou plus).",
      c: "La pilocarpine contracte le muscle ciliaire, qui tire sur l’éperon et ouvre les mailles du trabéculum (écoulement ↑). Des vaisseaux qui franchissent l’éperon pour se ramifier sur le trabéculum = néovaisseaux de l’angle (NVA, vaisseaux anormaux induits par une ischémie rétinienne) : urgence. À l’AS-OCT (tomographie du segment antérieur), l’éperon sert de point de référence pour mesurer l’ouverture de l’angle."
    },
    "trab-pig": {
      t: "Trabéculum pigmenté (postérieur)", en: "Pigmented (posterior) trabecular meshwork",
      d: "Bande brunâtre juste en avant de l’éperon, posée sur le canal de Schlemm : c’est la partie qui filtre réellement l’aqueuse. Son pigment augmente avec l’âge et prédomine en inférieur.",
      c: "Pigment dense et homogène sur 360° = dispersion pigmentaire (pigment arraché à l’iris par frottement sur les zonules) ; pigment irrégulier, en plaques = pseudo-exfoliation (dépôts fibrillaires liés à l’âge qui encrassent aussi le trabéculum). C’est la cible de la SLT (trabéculoplastie sélective au laser) : plus il est pigmenté, plus il absorbe l’énergie, donc on réduit l’énergie pour éviter un pic de PIO après le laser."
    },
    "trab-nonpig": {
      t: "Trabéculum non pigmenté (antérieur)", en: "Non-pigmented (anterior) trabecular meshwork",
      d: "Bande blanchâtre et translucide entre le trabéculum pigmenté et la ligne de Schwalbe. Elle filtre peu ; si le trabéculum est la structure la plus postérieure visible (éperon caché), l’angle est étroit (Shaffer 2, ≈ 20°).",
      c: "Chez le jeune, l’angle peu pigmenté rend le trabéculum difficile à situer : on repère d’abord la ligne de Schwalbe par la technique du coin cornéen (corneal wedge), puis on descend. Si l’éperon reste caché sur plusieurs quadrants : angle étroit à risque de fermeture, indentation pour chercher des PAS."
    },
    "schwalbe": {
      t: "Ligne de Schwalbe", en: "Schwalbe line",
      d: "Structure la plus antérieure de l’angle : fine crête blanche qui marque la fin de la membrane de Descemet. On la trouve là où les deux reflets de la fente (faces antérieure et postérieure de la cornée) se rejoignent ; ne voir qu’elle = Shaffer 1 (≤ 10°).",
      c: "Pigment déposé sur ou en avant de Schwalbe = ligne de Sampaolesi, typique de la pseudo-exfoliation. Une Schwalbe épaissie et avancée, visible à la lampe = embryotoxon postérieur (souvent une variante normale ; avec des adhérences iriennes = syndrome d’Axenfeld-Rieger, à risque de glaucome). Des PAS qui montent jusqu’à Schwalbe = fermeture complète et permanente de ce secteur."
    },
    "schlemm": {
      t: "Canal de Schlemm", en: "Schlemm canal",
      d: "Invisible normalement, derrière le trabéculum pigmenté ; il collecte l’aqueuse filtrée et la vide par les canaux collecteurs vers les veines épisclérales. Il apparaît comme une bande rosée ou rouge quand du sang y reflue.",
      c: "Reflux sanguin = le plus souvent la pression du verre sur les veines épisclérales, sinon PIO basse ou pression veineuse épisclérale élevée. C’est la cible des MIGS (chirurgies du glaucome minimalement invasives par voie interne : stent trabéculaire, goniotomie, trabéculotomie) qui court-circuitent la résistance du trabéculum."
    }
  },

  disc: {
    "rim": {
      t: "Anneau neurorétinien", en: "Neuroretinal rim",
      d: "Tissu rose-orangé entre le bord du disque et le bord de l’excavation : ce sont les axones des cellules ganglionnaires qui plongent dans le nerf optique. Normalement, il est le plus épais en inférieur, puis en supérieur, en nasal et en temporal : règle ISNT (Inferior ≥ Superior ≥ Nasal ≥ Temporal), utile mais imparfaite, car bien des yeux normaux ne la respectent pas.",
      c: "Le glaucome amincit l’anneau d’abord aux pôles (inférotemporal puis supérotemporal, là où la lame criblée est la plus fragile) : un amincissement localisé s’appelle une encoche (notch) et brise la règle ISNT ; à un stade avancé, l’anneau disparaît sur tout le pourtour. L’anneau restant garde sa couleur rose : un anneau pâle (pâleur > excavation) oriente vers une neuropathie non glaucomateuse (compression, ischémie)."
    },
    "cup": {
      t: "Excavation", en: "Cup",
      d: "Dépression centrale de la papille, sans axones ; on rapporte sa hauteur à celle du disque : rapport vertical excavation/disque (C/D, cup-to-disc ratio). Sa taille suit celle du disque : à nombre d’axones égal, un grand disque a une grande excavation. On la délimite par la cassure des petits vaisseaux sur son bord (contour), pas par la zone pâle, souvent plus petite.",
      c: "Suspect : C/D vertical > 0,6 ou asymétrie ≥ 0,2 entre les deux yeux, à interpréter selon la taille du disque. Signes glaucomateux : excavation qui s’allonge verticalement (perte aux pôles), qui s’approfondit jusqu’à montrer les pores de la lame criblée, ou qui grandit d’une visite à l’autre ; un changement documenté (photos, OCT) vaut plus qu’une mesure isolée."
    },
    "vessels": {
      t: "Vaisseaux de la papille", en: "Optic disc vessels",
      d: "L’artère et la veine centrales de la rétine émergent sur le versant nasal de l’excavation, longent le bord de l’anneau puis se divisent en arcades supérieure et inférieure. Normalement, elles passent sur l’anneau sans cassure brutale.",
      c: "Signes glaucomateux : vaisseaux nasalisés (repoussés en nasal par l’excavation qui grandit) ; baïonnette (bayoneting : le vaisseau plonge à pic dans une excavation profonde puis repart à angle droit) ; vaisseau circumlinéaire dénudé (il longe un anneau disparu). L’hémorragie papillaire de Drance (petite hémorragie en flammèche qui croise le bord du disque, souvent inférotemporale) signale une perte axonale active et un risque accru de progression (AAO 2026) ; plus fréquente dans le glaucome à pression normale (atteinte glaucomateuse avec PIO toujours ≤ 21 mmHg), elle disparaît en quelques semaines à quelques mois, d’où la recherche à chaque visite."
    },
    "ppa": {
      t: "Atrophie péripapillaire", en: "Peripapillary atrophy",
      d: "Croissant pâle autour du disque, en deux zones. Zone alpha, en périphérie : pigmentation irrégulière, fréquente chez les sujets normaux. Zone bêta, collée au bord du disque : sclère et gros vaisseaux choroïdiens visibles, parce que l’épithélium pigmentaire et la choriocapillaire ont disparu.",
      c: "La zone bêta est plus fréquente et plus large dans le glaucome ; elle se trouve souvent en face de l’anneau aminci et s’associe à la progression. Chez le myope fort, la papille inclinée et le grand croissant péripapillaire (différent de la zone bêta) rendent l’examen et l’OCT trompeurs (faux positifs, « red disease »)."
    },
    "lame-criblee": {
      t: "Lame criblée (à l’ophtalmoscope)", en: "Lamina cribrosa",
      d: "Au fond d’une excavation large et profonde, ses pores apparaissent comme des points gris (signe des pores lamellaires, laminar dot sign). Normalement, elle est peu visible, cachée par l’anneau et le tissu de soutien.",
      c: "Des pores visibles et allongés verticalement indiquent que les axones qui la couvraient ont disparu et que la lame s’est enfoncée vers l’arrière (remodelage glaucomateux). Le signe n’est pas spécifique (grand disque physiologique) : il pousse à confirmer par OCT et champ visuel."
    },
    "rnfl": {
      t: "Couche des fibres nerveuses rétiniennes", en: "Retinal nerve fiber layer (RNFL)",
      d: "Axones ganglionnaires en route vers la papille, visibles comme des stries brillantes en lumière anérythre (filtre vert). Les fibres temporales contournent la macula en arcs et se rejoignent, sans se croiser, sur le raphé horizontal ; les faisceaux les plus épais arrivent aux pôles inférotemporal et supérotemporal (courbe « en double bosse » à l’OCT). Épaisseur péripapillaire moyenne ≈ 90–100 µm chez l’adulte (varie selon l’appareil).",
      c: "Défaut en coin (wedge defect) : bande sombre arciforme qui part du disque, souvent inférotemporale, plus large qu’un vaisseau, qui traduit la perte d’un faisceau d’axones. Comme les fibres ne croisent pas le raphé, le défaut de champ correspondant s’arrête net au méridien horizontal (ressaut nasal, nasal step) et siège dans l’hémichamp opposé : RNFL inférieure atteinte = défaut arciforme supérieur du champ."
    }
  },

  annexes: {
    "glande-lacrymale": {
      t: "Glande lacrymale principale", en: "Main lacrimal gland",
      d: "Glande séreuse logée en supérotemporal de l’orbite, divisée en lobes orbitaire et palpébral par l’aponévrose du releveur ; ses canaux s’ouvrent dans le cul-de-sac supérotemporal. Avec les glandes accessoires de Krause et Wolfring (dans la conjonctive), elle produit la phase aqueuse, de base et réflexe. Commande parasympathique via le nerf facial (VII) et le ganglion ptérygopalatin.",
      c: "Le déficit aqueux, moins fréquent que la dysfonction meibomienne, évoque un syndrome de Sjögren (maladie auto-immune des glandes lacrymales et salivaires : yeux et bouche secs) ou des médicaments anticholinergiques. Schirmer I sans anesthésie < 5 mm en 5 min = déficit aqueux sévère. Un œil sec peut paradoxalement larmoyer : la surface irritée déclenche un larmoiement réflexe."
    },
    "meibomius": {
      t: "Glandes de Meibomius", en: "Meibomian glands",
      d: "Glandes sébacées verticales enchâssées dans les tarses (plus nombreuses en haut qu’en bas), qui s’ouvrent au bord libre en arrière des cils. Leur sécrétion lipidique (meibum) forme la couche superficielle du film lacrymal : elle freine l’évaporation et stabilise le film.",
      c: "La dysfonction meibomienne (MGD : orifices bouchés, sécrétions épaisses, télangiectasies du bord libre, souvent avec rosacée) est la cause la plus fréquente de sécheresse : moins de lipides → évaporation ↑ → film instable et hyperosmolaire → irritation et inflammation. Elle se traite par compresses chaudes, massage et hygiène des paupières, parfois doxycycline orale ; un chalazion est une glande bouchée devenue granulome. Les gouttes antiglaucomateuses chroniques, surtout avec agent de conservation, l’aggravent souvent."
    },
    "caliciformes": {
      t: "Cellules caliciformes", en: "Goblet cells",
      d: "Cellules sécrétrices de l’épithélium conjonctival, plus denses dans les culs-de-sac et en nasal. Elles libèrent la mucine gélifiante MUC5AC qui étale et retient la phase aqueuse ; l’épithélium porte en plus un glycocalyx (mucines membranaires MUC1/4/16) qui rend la surface mouillable.",
      c: "Elles disparaissent après une brûlure chimique, un syndrome de Stevens-Johnson (réaction médicamenteuse grave de la peau et des muqueuses), une pemphigoïde des muqueuses (maladie auto-immune cicatrisante) ou une carence en vitamine A. L’agent de conservation BAK des gouttes est aussi toxique pour elles. Moins de mucine → le film ne tient plus sur la cornée → TBUT court, même si la production aqueuse (Schirmer) est normale."
    },
    "points-lacrymaux": {
      t: "Points lacrymaux", en: "Lacrimal puncta",
      d: "Deux petits orifices (≈ 0,3 mm) au sommet des papilles lacrymales, sur le bord libre médial des paupières supérieure et inférieure. Normalement tournés vers le globe, ils plongent dans le lac lacrymal et aspirent les larmes à chaque clignement.",
      c: "Les bouchons méatiques (punctal plugs : petits bouchons qui ferment les points) gardent les larmes plus longtemps sur l’œil dans le déficit aqueux. Appuyer sur le point lacrymal ou fermer les yeux quelques minutes après une goutte (occlusion ponctuelle) réduit l’absorption systémique et prolonge l’effet local ; l’AAO 2026 la recommande chez la femme enceinte ou qui allaite sous gouttes antiglaucomateuses. Un point éversé (ectropion : paupière tournée vers l’extérieur) cause un larmoiement."
    },
    "canalicules": {
      t: "Canalicules lacrymaux", en: "Lacrimal canaliculi",
      d: "Petits conduits (≈ 2 mm verticaux puis ≈ 8 mm horizontaux) qui partent de chaque point lacrymal et se réunissent le plus souvent en un canalicule commun avant d’entrer dans le sac lacrymal. Le muscle orbiculaire, à chaque clignement, crée une pompe lacrymale qui propulse les larmes.",
      c: "La canaliculite (infection chronique, souvent à Actinomyces : point lacrymal rouge et saillant, concrétions jaunâtres à l’expression) imite une conjonctivite unilatérale chronique qui ne guérit pas sous gouttes ; un bouchon méatique migré dans le canalicule peut en être la cause. Une plaie de la paupière médiale qui coupe un canalicule se répare avec une intubation de silicone."
    },
    "sac-lacrymal": {
      t: "Sac lacrymal", en: "Lacrimal sac",
      d: "Réservoir d’≈ 12–15 mm logé dans la fosse lacrymale, entre les crêtes lacrymales antérieure et postérieure, sous le tendon canthal médial. Il collecte les larmes des canalicules et se vide dans le canal lacrymonasal.",
      c: "Une obstruction en aval laisse le sac se remplir et s’infecter (dacryocystite : tuméfaction douloureuse sous le canthus médial). Une pression sur le sac qui fait refluer du pus par les points signe une dacryocystite chronique, réservoir de bactéries (ex. pneumocoque) : on la traite, souvent par dacryocystorhinostomie (DCR : nouvelle voie entre le sac et le nez), avant toute chirurgie intraoculaire ou greffe de cornée, à cause du risque de kératite et d’endophtalmite."
    },
    "canal-lacrymonasal": {
      t: "Canal lacrymonasal", en: "Nasolacrimal duct",
      d: "Conduit osseux et membraneux (≈ 12–18 mm) qui descend du sac lacrymal au méat inférieur du nez, sous le cornet inférieur, où il se termine par la valve de Hasner. Son obstruction congénitale (valve imperforée) est fréquente chez le nourrisson et se résout souvent seule ; l’obstruction acquise touche surtout la femme âgée.",
      c: "Une goutte qui descend par ce canal est absorbée par la muqueuse nasale et passe dans la circulation sans être d’abord dégradée par le foie, comme une petite injection intraveineuse. C’est pourquoi le timolol topique peut causer bradycardie, bronchospasme ou fatigue : on demande l’histoire d’asthme, de MPOC (maladie pulmonaire obstructive chronique) et de bradycardie avant de le prescrire, et on enseigne l’occlusion ponctuelle."
    }
  },

  physio: [
    {
      id: "aqueuse",
      title: "Humeur aqueuse : production et drainage",
      en: "Aqueous humor dynamics",
      intro: "L’humeur aqueuse (aqueous humor) nourrit le cristallin et la cornée, qui n’ont pas de vaisseaux, et maintient la forme du globe. La pression intraoculaire (PIO) dépend de l’équilibre entre sa production et la résistance à son écoulement : si l’écoulement est freiné, la PIO monte.",
      points: [
        "**Production** : l’épithélium non pigmenté des procès ciliaires sécrète l’aqueuse par transport actif (Na⁺/K⁺-ATPase, anhydrase carbonique) à partir du plasma filtré dans le stroma ciliaire ; ≈ 2,5 µL/min le jour, moins la nuit.",
        "**Trajet** : chambre postérieure → pupille → chambre antérieure → trabéculum (trabecular meshwork) → canal de Schlemm → canaux collecteurs → veines aqueuses et épisclérales. Dans la chambre antérieure, des courants de convection verticaux expliquent le dépôt de pigment en fuseau vertical sur l’endothélium (fuseau de Krukenberg) dans la dispersion pigmentaire (pigment libéré par le frottement de l’iris sur les zonules).",
        "**Voie conventionnelle (trabéculaire)** : passive et dépendante de la pression, elle évacue la majorité du débit. La résistance siège surtout dans le trabéculum juxtacanaliculaire ; dans le glaucome à angle ouvert, cette résistance augmente → l’aqueuse sort moins bien → la PIO monte.",
        "**Voie uvéosclérale (non conventionnelle)** : l’aqueuse traverse la bande ciliaire et le muscle ciliaire vers l’espace suprachoroïdien ; 5–30 % du débit, moins avec l’âge, peu dépendante de la PIO. Les prostaglandines (latanoprost) l’augmentent ; la pilocarpine la diminue en contractant le muscle ciliaire.",
        "**Équation de Goldmann** : PIO = (F − U) / C + Pv. F = production, U = débit uvéoscléral, C = facilité d’écoulement trabéculaire (outflow facility), Pv = pression veineuse épisclérale. Exemple : (2,5 − 0,5) / 0,25 + 9 = 17 mmHg.",
        "**Leviers thérapeutiques** : ↓ F (bêtabloquants, inhibiteurs de l’anhydrase carbonique, alpha-2 agonistes) ; ↑ U (prostaglandines, alpha-2 agonistes en partie) ; ↑ C (pilocarpine, SLT = laser qui stimule le trabéculum, MIGS trabéculaires = petites chirurgies du trabéculum et du canal de Schlemm). Par la voie trabéculaire, la PIO ne descend pas sous Pv ; une chirurgie filtrante (trabéculectomie, tube ou implant sous-conjonctival comme XEN ou PreserFlo : nouvelle voie de sortie vers l’espace sous la conjonctive) contourne Pv, d’où son rôle quand la cible de PIO est très basse."
      ],
      numbers: [
        { label: "Production d’humeur aqueuse", value: "≈ 2–3 µL/min (≈ 2,5 le jour), ↓ la nuit" },
        { label: "Facilité d’écoulement (C)", value: "≈ 0,2–0,3 µL/min/mmHg" },
        { label: "Pression veineuse épisclérale (Pv)", value: "≈ 8–10 mmHg" },
        { label: "Voie uvéosclérale", value: "5–30 % du débit (↓ avec l’âge)" },
        { label: "Volume chambre antérieure / postérieure", value: "≈ 250 µL / ≈ 60 µL" }
      ],
      pearl: "Patron : « Pourquoi le timolol baisse-t-il peu la PIO la nuit, alors que les prostaglandines restent efficaces ? » Le timolol réduit la production d’aqueuse, déjà basse pendant le sommeil (moins de tonus sympathique) ; les prostaglandines augmentent l’écoulement uvéoscléral, qui agit jour et nuit."
    },
    {
      id: "pio",
      title: "Pression intraoculaire (PIO)",
      en: "Intraocular pressure (IOP)",
      intro: "La PIO est la pression du liquide intraoculaire sur la paroi du globe. C’est le seul facteur de risque modifiable dont la baisse a prouvé qu’elle freine le glaucome, mais une PIO « normale » n’exclut pas un glaucome et une PIO élevée n’en est pas un à elle seule.",
      points: [
        "**Valeurs** : normale 10–21 mmHg (moyenne ≈ 15–16). 21 mmHg est une limite statistique (≈ moyenne + 2 écarts-types), pas un seuil de danger : il existe un glaucome à pression normale (atteinte glaucomateuse avec PIO toujours ≤ 21 mmHg) et une hypertension oculaire (PIO > 21 mmHg sans atteinte du nerf ni du champ).",
        "**Variation nycthémérale** (sur 24 h) : 2–6 mmHg chez le sujet normal, davantage en glaucome ; le pic survient souvent la nuit ou tôt le matin, en partie à cause de la position couchée (la pression veineuse épisclérale monte). Une seule mesure en clinique peut manquer le pic.",
        "**Mesure et cornée** : le tonomètre de Goldmann est calibré pour une cornée d’≈ 520 µm. Cornée mince → la cornée se laisse aplanir plus facilement → PIO sous-estimée ; cornée épaisse → surestimée. Œdème cornéen ou cornée amincie par LASIK (chirurgie réfractive au laser qui retire du stroma) → sous-estimée (l’œdème épaissit la cornée mais la ramollit). Ne pas corriger mécaniquement par une formule.",
        "**Hystérésis cornéenne** (capacité de la cornée à amortir une déformation, mesurée par un jet d’air dynamique) : une hystérésis basse s’associe à un risque plus élevé de progression du glaucome ; c’est un facteur clé de la mise à jour AAO 2026, utile en appoint.",
        "**Pression de perfusion oculaire** (ocular perfusion pressure) ≈ pression artérielle − PIO. Une tension artérielle basse diminue la perfusion de la tête du nerf optique : facteur de risque mis de l’avant par l’AAO 2026 ; on se méfie aussi de l’hypotension nocturne (antihypertenseur pris le soir), souvent évoquée dans le glaucome à pression normale.",
        "**Ce qui fait monter la PIO** : position couchée, Valsalva, apnée, paupières serrées, cravate serrée, corticostéroïdes chez les « répondeurs » (réponse cortisonique : hausse de PIO sous corticoïdes, surtout topiques). L’exercice aérobique la baisse transitoirement."
      ],
      numbers: [
        { label: "PIO normale", value: "10–21 mmHg (moyenne ≈ 15–16)" },
        { label: "Variation sur 24 h", value: "2–6 mmHg (plus en glaucome)" },
        { label: "Épaisseur cornéenne centrale", value: "≈ 540–550 µm" },
        { label: "OHTS (Ocular Hypertension Treatment Study) : cornée mince", value: "épaisseur centrale ≤ 555 µm ≈ 3 × plus de conversion en glaucome que > 588 µm" },
        { label: "Plancher de la voie trabéculaire", value: "Pv ≈ 8–10 mmHg" }
      ],
      pearl: "Patron : « PIO de 23 mmHg avec une cornée de 600 µm : c’est un glaucome ? » Non : sans atteinte du nerf optique ni du champ visuel, c’est au plus une hypertension oculaire, et la cornée épaisse fait probablement surestimer la PIO. On évalue le risque global avec les prédicteurs d’OHTS (âge, PIO, épaisseur cornéenne, C/D vertical, PSD) plutôt que de corriger le chiffre."
    },
    {
      id: "film-lacrymal",
      title: "Film lacrymal et surface oculaire",
      en: "Tear film and ocular surface",
      intro: "Le film lacrymal (tear film) lisse la première surface optique de l’œil, nourrit et protège l’épithélium cornéen et se renouvelle à chaque clignement. Quand son équilibre se rompt, un cercle vicieux s’installe : c’est la sécheresse oculaire (dry eye disease).",
      points: [
        "**Composantes** : lipides en surface (glandes de Meibomius : freinent l’évaporation) ; phase muco-aqueuse (glande lacrymale principale et glandes accessoires : eau, électrolytes, protéines antimicrobiennes comme le lysozyme et la lactoferrine, mucine MUC5AC des cellules caliciformes) ; glycocalyx de l’épithélium (MUC1/4/16) qui rend la cornée mouillable.",
        "**Clignement** : ≈ 15–20 fois/min au repos ; il étale le film, exprime le meibum et pompe les larmes vers les voies lacrymales. Il diminue fortement devant un écran ou en lecture → évaporation ↑ → symptômes en fin de journée.",
        "**Stabilité** : le film se rompt normalement en plus de 10 s (TBUT, tear break-up time, mesuré avec fluorescéine) ; la version sans colorant (NIBUT, non-invasive break-up time) < 10 s est un signe de sécheresse. Schirmer I sans anesthésie < 5 mm en 5 min = déficit aqueux sévère.",
        "**Osmolarité** : ≥ 308 mOsm/L dans un œil ou écart > 8 mOsm/L entre les deux yeux = signe de sécheresse (DEWS III). L’hyperosmolarité « déshydrate » et enflamme les cellules de la surface.",
        "**Cercle vicieux** : film instable → évaporation ↑ → hyperosmolarité → inflammation, perte de cellules caliciformes et lésions de l’épithélium → film encore plus instable. Les nerfs cornéens irrités entretiennent la douleur, parfois sans signe visible (douleur neuropathique).",
        "**Définition TFOS DEWS III (2025)** : maladie multifactorielle, **symptomatique**, avec perte d’homéostasie du film et/ou de la surface ; instabilité et hyperosmolarité du film, inflammation et lésions de la surface, anomalies neurosensorielles en sont les moteurs. Dépistage : questionnaire OSDI-6 (Ocular Surface Disease Index, version à 6 questions) ≥ 4, puis au moins un signe (NIBUT, osmolarité ou coloration)."
      ],
      numbers: [
        { label: "TBUT normal", value: "> 10 s" },
        { label: "Osmolarité (seuil DEWS III)", value: "≥ 308 mOsm/L ou écart > 8 mOsm/L" },
        { label: "Schirmer I sans anesthésie", value: "< 5 mm/5 min = déficit aqueux sévère" },
        { label: "Coloration (seuils DEWS III)", value: "> 5 points cornéens (fluorescéine) ou > 9 points conjonctivaux (lissamine)" },
        { label: "Clignement au repos", value: "≈ 15–20 fois/min" }
      ],
      pearl: "Patron : « Ton glaucomateux sous 3 gouttes se plaint de brûlure et de vision qui fluctue : qu’en penses-tu ? » Probable maladie de surface aggravée par l’agent de conservation des gouttes (chlorure de benzalkonium, BAK) : elle nuit à l’observance et fausse l’AV, la topographie et le champ visuel. Options : gouttes sans agent de conservation, combinaisons fixes (moins de gouttes), SLT, traitement de la dysfonction meibomienne."
    },
    {
      id: "transparence",
      title: "Transparence cornéenne",
      en: "Corneal transparency",
      intro: "La cornée est transparente parce que ses fibres de collagène sont rangées avec une régularité parfaite et parce que l’endothélium la garde déshydratée en permanence (déturgescence, corneal deturgescence). Si l’un de ces deux mécanismes faiblit, la cornée gonfle et devient grisâtre.",
      points: [
        "**Architecture** : fibrilles de collagène fines (≈ 30 nm), de diamètre uniforme et espacées régulièrement, à une distance plus petite que la longueur d’onde de la lumière → la lumière diffusée par chaque fibrille s’annule par interférence → la lumière passe. S’ajoutent l’absence de vaisseaux, des nerfs non myélinisés et un épithélium régulier.",
        "**Déturgescence (pompe-fuite)** : le stroma attire l’eau (protéoglycanes, pression de gonflement ≈ 50–60 mmHg). L’endothélium laisse entrer un peu d’aqueuse (barrière volontairement « perméable », qui nourrit la cornée) et repompe activement l’excès vers la chambre antérieure (Na⁺/K⁺-ATPase, transport de bicarbonate) → stroma stable à ≈ 78 % d’eau.",
        "**Œdème stromal** : l’endothélium défaille (dystrophie de Fuchs = maladie héréditaire de l’endothélium avec guttae ; traumatisme chirurgical ; rejet de greffe) → l’eau s’accumule entre les fibrilles → l’espacement devient irrégulier → cornée épaissie et grisâtre, plis de Descemet. La vision baisse modérément.",
        "**Œdème épithélial** : l’eau traverse jusqu’à l’épithélium (microkystes, bulles) → surface irrégulière → baisse de vision marquée, halos colorés autour des lumières ; si une bulle crève, douleur (kératopathie bulleuse). L’épithélium gonfle quand la PIO dépasse la pression de gonflement du stroma : l’eau est poussée vers l’avant.",
        "**Crise aiguë de fermeture de l’angle** : PIO très élevée (souvent > 40 mmHg, parfois 60–80) → quand elle approche ou dépasse la pression de gonflement du stroma (≈ 50–60 mmHg), l’eau est poussée vers l’épithélium → œdème épithélial même si l’endothélium est sain → cornée « embuée » et halos. L’œdème régresse quand la PIO baisse ; à l’inverse, chez un patient avec un endothélium fragile, baisser la PIO aide la cornée à se déshydrater.",
        "**Fuchs le matin** : paupières fermées la nuit → pas d’évaporation → les larmes deviennent moins concentrées et la cornée gonfle → vision pire au réveil qui s’améliore en cours de journée. Les gouttes ou onguents salins hypertoniques attirent l’eau hors de l’épithélium (traitement de soutien) ; la greffe endothéliale (DMEK, DSAEK) remplace l’endothélium malade."
      ],
      numbers: [
        { label: "Eau dans le stroma", value: "≈ 78 %" },
        { label: "Épaisseur centrale normale", value: "≈ 540–550 µm" },
        { label: "Densité endothéliale (jeune adulte)", value: "≈ 3000–3500 cellules/mm²" },
        { label: "Seuil de décompensation", value: "en général < 400–500 cellules/mm²" },
        { label: "Pression de gonflement du stroma", value: "≈ 50–60 mmHg" }
      ],
      pearl: "Patron : « Pourquoi la cornée est-elle embuée en crise aiguë de fermeture alors que l’endothélium est sain ? » Parce que la PIO dépasse la pression de gonflement du stroma : l’eau est poussée vers l’avant et l’épithélium devient œdémateux (halos colorés). La cornée s’éclaircit quand on baisse la PIO ; une microscopie spéculaire ensuite est utile, car la crise fait perdre des cellules endothéliales."
    },
    {
      id: "refraction",
      title: "Réfraction et optique de l’œil",
      en: "Refraction and ocular optics",
      intro: "L’œil est un système optique d’≈ 60 D qui doit focaliser l’image exactement sur la rétine. Une erreur de réfraction (refractive error) survient quand la longueur de l’œil ne correspond pas à sa puissance optique.",
      points: [
        "**Puissances** : cornée ≈ 43 D (≈ 2/3 du total), car le saut d’indice entre l’air (1,000) et la cornée (≈ 1,376) est le plus grand de l’œil ; cristallin ≈ 20 D, variable grâce à l’accommodation. Une dioptrie = 1 / distance focale en mètres.",
        "**Myopie** : œil trop long ou trop puissant → image en avant de la rétine → flou de loin ; correction par verre concave (négatif). Le myope fort a une papille inclinée et une atrophie péripapillaire qui compliquent le diagnostic du glaucome (OCT faussement « rouge »). La dispersion pigmentaire touche surtout le jeune myope.",
        "**Hypermétropie** : œil trop court → image en arrière de la rétine ; le jeune compense en accommodant (hypermétropie latente), d’où la vision souvent bonne avant 40 ans ; correction par verre convexe (positif). **Risque de fermeture de l’angle** : œil court → segment antérieur petit et chambre peu profonde → le cristallin, qui s’épaissit avec l’âge, pousse l’iris vers l’avant et appuie sur lui à la pupille (bloc pupillaire) → l’iris périphérique bombe et ferme l’angle.",
        "**Astigmatisme** : la cornée (ou le cristallin) n’a pas la même courbure dans tous les méridiens → deux foyers. Régulier : méridiens perpendiculaires, corrigé par des lunettes ; direct (with-the-rule : méridien vertical plus cambré, fréquent chez le jeune) ou inverse (against-the-rule : horizontal plus cambré, plus fréquent avec l’âge). Irrégulier (kératocône, cicatrice) : mal corrigé par les lunettes → lentille rigide, qui crée une nouvelle surface lisse.",
        "**Presbytie** : le cristallin perd sa souplesse → l’accommodation diminue → la vision de près devient floue vers 40–45 ans → addition de près (lunettes de lecture, verres progressifs).",
        "**Trou sténopéique (pinhole)** : il ne laisse passer que les rayons centraux, qui n’ont presque pas besoin d’être réfractés → le flou dû à une erreur de réfraction diminue. AV améliorée = cause optique (réfraction, cornée irrégulière) ; non améliorée = chercher macula, nerf optique ou opacité dense. Une cataracte nucléaire rend l’œil plus myope : le presbyte relit parfois sans lunettes (« seconde vue »)."
      ],
      numbers: [
        { label: "Puissance totale de l’œil", value: "≈ 60 D" },
        { label: "Cornée", value: "≈ 43 D (≈ 2/3 du total)" },
        { label: "Cristallin", value: "≈ 20 D" },
        { label: "Longueur axiale moyenne (adulte)", value: "≈ 23–24 mm" },
        { label: "Début de la presbytie", value: "≈ 40–45 ans" }
      ],
      pearl: "Patron : « Une patiente de 65 ans, hypermétrope de +4 D, voyait très bien de loin jeune : pourquoi examiner son angle ? » Son œil court a une chambre antérieure peu profonde, et son cristallin épaissi avec l’âge pousse l’iris vers l’avant : risque de fermeture de l’angle. Van Herick puis gonioscopie avant de la dilater ; si l’angle est étroit, on discute LPI ou extraction du cristallin."
    },
    {
      id: "pupille",
      title: "Réflexe pupillaire et DPAR",
      en: "Pupillary light reflex and RAPD",
      intro: "Le réflexe photomoteur (pupillary light reflex) compare l’information lumineuse transmise par chaque nerf optique. Il distingue une atteinte de la voie afférente (rétine, nerf optique) d’une atteinte de la voie efférente (nerf III, sympathique, iris).",
      points: [
        "**Voie afférente** : rétine (cellules ganglionnaires, dont certaines sensibles à la lumière grâce à la mélanopsine) → nerf optique → chiasma (les fibres nasales croisent) → bandelette optique → les fibres pupillaires quittent la voie visuelle avant le corps genouillé latéral → noyaux prétectaux du mésencéphale.",
        "**Croisement double** : chaque noyau prétectal envoie des fibres aux **deux** noyaux d’Edinger-Westphal. Une lumière dans un seul œil fait donc contracter les deux pupilles de façon égale : réflexe direct (œil éclairé) et consensuel (autre œil).",
        "**Voie efférente parasympathique (constriction)** : noyau d’Edinger-Westphal → nerf III (fibres pupillaires en surface du nerf, d’où une pupille dilatée quand un anévrisme comprime le III) → ganglion ciliaire (relais) → nerfs ciliaires courts → sphincter de l’iris (et muscle ciliaire pour l’accommodation).",
        "**Voie sympathique (dilatation)** : 3 neurones : hypothalamus → moelle (C8–T2) → ganglion cervical supérieur (le 2e neurone passe sur l’apex du poumon) → long de la carotide interne → nerf nasociliaire → nerfs ciliaires longs → dilatateur de l’iris ; d’autres fibres du 3e neurone gagnent le muscle de Müller (paupière). Son atteinte donne le syndrome de Horner : petite pupille, ptose légère, anhidrose selon le niveau ; un Horner douloureux d’apparition récente fait exclure une dissection carotidienne (imagerie urgente).",
        "**DPAR (déficit pupillaire afférent relatif)** : un nerf optique transmet moins de lumière que l’autre (glaucome asymétrique, névrite optique, neuropathie ischémique ou compressive, grand décollement de rétine) → quand la lampe passe du bon œil à l’œil atteint, le signal total baisse → les **deux** pupilles se dilatent. Il faut une atteinte asymétrique : un glaucome symétrique n’en donne pas.",
        "**Pourquoi pas d’anisocorie** : comme les deux noyaux d’Edinger-Westphal reçoivent le même signal des deux yeux, l’ordre de contraction est identique pour les deux pupilles, même si un nerf optique est détruit. Une anisocorie signe donc une atteinte efférente ou de l’iris : plus marquée au noir → la petite pupille est anormale (Horner) ; plus marquée à la lumière → la grande est anormale (III, pupille d’Adie, mydriatique, sphincter abîmé après une crise de fermeture)."
      ],
      numbers: [
        { label: "Taille pupillaire", value: "≈ 2–4 mm à la lumière ; ≈ 4–8 mm au noir" },
        { label: "Anisocorie physiologique", value: "≤ 1 mm, chez ≈ 20 % des gens" },
        { label: "Voie sympathique", value: "3 neurones (relais C8–T2 puis ganglion cervical supérieur)" },
        { label: "Voie parasympathique", value: "relais dans le ganglion ciliaire" }
      ],
      pearl: "Patron : « Ton patient a un DPAR droit : quelle pupille est la plus grande ? » Aucune : les pupilles restent égales, parce que chaque noyau prétectal commande les deux noyaux d’Edinger-Westphal. Une anisocorie associée signe un deuxième problème (efférent ou de l’iris) ; un DPAR oriente vers le nerf optique ou une rétine très atteinte, jamais vers une cataracte ou une erreur de réfraction."
    }
  ],

  exam: [
    {
      id: "av",
      title: "Acuité visuelle",
      en: "Visual acuity",
      why: "C’est le signe vital de l’œil : elle mesure la fonction centrale, oriente l’urgence (kératite centrale, crise de fermeture) et sert de référence légale, notamment pour la conduite (Société de l’assurance automobile du Québec, SAAQ).",
      how: [
        "Chaque œil séparément, l’autre bien caché sans appuyer, avec la correction de loin habituelle, à 6 m (ou distance équivalente par miroir ou écran).",
        "Noter la plus petite ligne lue en notation métrique, ex. 6/6 (20/20) ; « 6/9 −2 » = ligne 6/9 avec 2 lettres manquées.",
        "Si l’AV est < 6/6 : refaire avec le trou sténopéique (pinhole), qui corrige en bonne partie le flou optique.",
        "Si aucune ligne n’est lue : rapprocher le tableau, puis CD (compte les doigts, noter la distance), MM (mouvements de la main), PL (perception lumineuse, avec projection dans les 4 quadrants), NPL (aucune perception lumineuse).",
        "Vision de près avec une carte à ≈ 40 cm et l’addition chez le presbyte."
      ],
      normal: [
        "6/6 (20/20) = logMAR 0,0 (logMAR : logarithme de l’angle minimal de résolution ; plus il est élevé, pire est la vision) ; l’adulte jeune lit souvent mieux (6/4,5).",
        "Équivalences : 6/12 = 20/40 = logMAR 0,3 ; 6/60 = 20/200 = logMAR 1,0.",
        "SAAQ classe 5 : AV binoculaire ≥ 6/15 (20/50) ; véhicules lourds : 6/9."
      ],
      patho: [
        "Améliorée au trou sténopéique → cause optique : erreur de réfraction ou cornée irrégulière (kératocône, cicatrice).",
        "Non améliorée → macula, nerf optique, opacité dense (cataracte, cicatrice centrale) ou amblyopie (œil « paresseux » depuis l’enfance).",
        "Baisse brutale avec œil rouge et douloureux → kératite, uvéite (inflammation intraoculaire) ou crise de fermeture de l’angle (halos colorés) : urgence.",
        "Glaucome : AV conservée jusqu’à un stade avancé (vision centrale épargnée) ; une baisse inexpliquée fait chercher une autre cause ou une atteinte de la fixation (champ 10-2).",
        "Vision qui fluctue au clignement → film lacrymal instable (sécheresse)."
      ],
      pitfalls: [
        "Mesurer sans les lunettes de loin, ou avec les lunettes de lecture : fausse baisse.",
        "Cache qui appuie sur l’œil (flou transitoire) ou qui laisse regarder entre les doigts.",
        "Oublier le trou sténopéique : on attribue une baisse réfractive à une maladie, ou l’inverse.",
        "Mesurer après la dilatation, la tonométrie ou la gonioscopie (gel, anesthésique, fluorescéine) : AV faussement basse. Toujours mesurer l’AV en premier."
      ],
      pearl: "Patron : « L’AV passe de 6/18 à 6/7,5 au trou sténopéique : ta conclusion ? » La baisse est surtout optique : je fais une réfraction (ou j’essaie une lentille rigide si la cornée est irrégulière) avant de chercher une maladie de la macula ou du nerf optique."
    },
    {
      id: "pupilles",
      title: "Examen des pupilles",
      en: "Pupil examination",
      why: "La lampe oscillante détecte en 30 secondes une neuropathie optique asymétrique (ex. glaucome avancé d’un côté), et une pupille mi-dilatée fixe oriente vers une crise de fermeture de l’angle : à faire avant toute dilatation.",
      how: [
        "Pièce peu éclairée, patient qui fixe au loin (fixer de près fait contracter les pupilles).",
        "Comparer taille et forme au noir puis à la lumière : une anisocorie (pupilles inégales) est-elle plus marquée au noir ou à la lumière ?",
        "Réflexe direct (œil éclairé) et consensuel (autre œil), pour chaque œil.",
        "Lampe oscillante (swinging flashlight test) : éclairer un œil 2–3 s, passer vite à l’autre, plusieurs allers-retours, même intensité et même angle.",
        "Si DPAR : le grader ou le mesurer avec des filtres de densité neutre ; si la réaction à la lumière est faible, tester la réaction de près (convergence)."
      ],
      normal: [
        "Pupilles rondes, ≈ 2–4 mm à la lumière ; anisocorie physiologique ≤ 1 mm (≈ 20 % des gens), à peu près identique au noir et à la lumière.",
        "Réflexes direct et consensuel égaux.",
        "À la lampe oscillante, chaque pupille se contracte (ou reste stable) quand la lumière arrive sur son œil."
      ],
      patho: [
        "**DPAR** (déficit pupillaire afférent relatif, RAPD, pupille de Marcus Gunn) : les deux pupilles se dilatent quand la lumière passe sur l’œil atteint → neuropathie optique asymétrique (glaucome, névrite, ischémie, compression) ou rétine très atteinte.",
        "Gradation : de 1+ (contraction initiale faible puis redilatation) à 3+ (dilatation immédiate) ; au maximum (4+), pupille amaurotique (aucune réaction directe).",
        "**DPAR inverse** (reverse RAPD) : une pupille est fixe (trauma, synéchies, mydriatique) ; on observe seulement la pupille mobile : si elle se dilate quand on éclaire l’œil à pupille fixe, le DPAR est du côté fixe.",
        "Anisocorie plus marquée au noir → la petite pupille est anormale (syndrome de Horner : myosis, ptose, ± anhidrose).",
        "Anisocorie plus marquée à la lumière → la grande est anormale : paralysie du III avec atteinte pupillaire (anévrisme jusqu’à preuve du contraire : imagerie vasculaire urgente, même sans douleur), pupille d’Adie, mydriatique, sphincter abîmé.",
        "Mi-mydriase ovale peu réactive + œil rouge douloureux + PIO élevée → crise aiguë de fermeture de l’angle (sphincter ischémique)."
      ],
      pitfalls: [
        "Une cataracte, une erreur de réfraction ou une cicatrice cornéenne ne donnent pas de DPAR significatif : en trouver un oblige à chercher le nerf optique ou la rétine.",
        "Glaucome bilatéral symétrique → pas de DPAR, car le test compare les deux yeux.",
        "Patient qui fixe la lumière ou un objet proche → contraction d’accommodation qui fausse le test.",
        "Éclairer un œil plus longtemps ou sous un autre angle → faux DPAR."
      ],
      pearl: "Patron : « Ton patient a un DPAR gauche et une cataracte gauche dense : la cataracte l’explique-t-elle ? » Non : une cataracte diffuse la lumière mais ne cause pas de DPAR significatif. Avant d’opérer, je cherche une neuropathie optique (glaucome avancé, compression) ou une atteinte rétinienne étendue (OCT, champ visuel, échographie si le fond d’œil est invisible)."
    },
    {
      id: "lampe",
      title: "Biomicroscopie à la lampe à fente",
      en: "Slit-lamp biomicroscopy",
      why: "C’est l’outil central des deux cliniques : on y examine chaque couche de la cornée, la chambre antérieure, l’iris et le cristallin, puis l’angle et la papille avec des verres.",
      how: [
        "Régler les oculaires et l’écart pupillaire ; patient bien appuyé (menton, front), canthus à la marque ; lampe et microscope couplés sur le même point.",
        "Examen systématique de l’avant vers l’arrière (paupières et bord libre → conjonctive → cornée → chambre antérieure (CA) → iris → cristallin → vitré antérieur), faible puis fort grossissement.",
        "Éclairage diffus : vue d’ensemble. Coupe optique (fente très mince à ≈ 45°) : profondeur d’une lésion dans la cornée. Parallélépipède (fente de 1–2 mm) : volume et texture de la cornée.",
        "Rétro-illumination (lumière renvoyée par l’iris ou le fond d’œil) : guttae, microkystes, trous de transillumination de l’iris. Dispersion sclérale (faisceau sur le limbe, la cornée s’illumine de l’intérieur) : œdème et cicatrices subtiles. Réflexion spéculaire (lampe et microscope à angles égaux) : mosaïque endothéliale. Bleu cobalt : fluorescéine.",
        "Cellules en CA : faisceau de 1 × 1 mm, intensité et grossissement maximaux, pièce sombre.",
        "Van Herick : fente mince à ≈ 60°, au limbe temporal ; comparer la profondeur de la CA périphérique à l’épaisseur cornéenne (EC)."
      ],
      normal: [
        "Cornée claire et lisse, sans guttae ; CA profonde et calme (ni cellules ni flare).",
        "Van Herick 4 (CA périphérique ≥ 1 EC) ou 3 (1/4 à 1/2 EC).",
        "Iris sans trous de transillumination ni néovaisseaux ; cristallin clair ou cataracte selon l’âge."
      ],
      patho: [
        "Van Herick ≤ 2 (≤ 1/4 EC) → gonioscopie obligatoire (angle possiblement étroit) ; 0 = iris au contact de la cornée.",
        "Cellules et flare en CA → inflammation (uvéite) ; hypopyon (dépôt de globules blancs) → kératite sévère ou endophtalmite.",
        "Précipités rétrocornéens (KP : amas de cellules inflammatoires sur l’endothélium) → uvéite ; fuseau de Krukenberg (pigment vertical sur l’endothélium) → dispersion pigmentaire.",
        "Dépôts blanchâtres en cible sur le cristallin (souvent visibles seulement après dilatation) → pseudo-exfoliation (PXF : matériel fibrillaire lié à l’âge, glaucome agressif).",
        "Néovaisseaux au bord pupillaire (rubéose) → ischémie rétinienne : gonioscopie et fond d’œil le jour même.",
        "Guttae (aspect de « métal martelé » en réflexion spéculaire) → dystrophie de Fuchs."
      ],
      pitfalls: [
        "Regarder la cornée seulement en éclairage diffus : guttae, microkystes et œdème léger passent inaperçus.",
        "Chercher des cellules avec une lumière faible ou une pièce éclairée : faux négatif.",
        "Van Herick normal ≠ angle ouvert partout (iris plateau, angle supérieur plus étroit) : il ne remplace pas la gonioscopie.",
        "Mettre fluorescéine ou anesthésique avant d’avoir regardé la cornée intacte et mesuré l’AV."
      ],
      pearl: "Patron : « Comment confirmes-tu des guttae à la lampe ? » En réflexion spéculaire (taches noires dans la mosaïque endothéliale) et en rétro-illumination (gouttelettes) ; je quantifie ensuite avec une microscopie spéculaire et une pachymétrie, et je demande si la vision est pire le matin (œdème)."
    },
    {
      id: "fluoresceine",
      title: "Colorations vitales : fluorescéine, lissamine, Seidel",
      en: "Vital dyes and Seidel test",
      why: "Elles révèlent les lésions de l’épithélium (abrasion, kératite, dendrite), la sécheresse et les fuites d’humeur aqueuse (Seidel) : examen de base en cornée et après une chirurgie filtrante.",
      how: [
        "Fluorescéine : bandelette humectée de salin touchée sur la conjonctive inférieure (ou goutte fluorescéine-anesthésique), puis faire cligner.",
        "Observer au bleu cobalt (± filtre jaune) dans les 1–3 minutes, avant que le colorant ne diffuse dans le stroma.",
        "TBUT : secondes entre le dernier clignement et la première tache sèche noire dans le film.",
        "Vert de lissamine (ou rose Bengale) : en lumière blanche, après 1–4 min ; colore les cellules dévitalisées de la conjonctive et du bord libre.",
        "Seidel : fluorescéine concentrée (bandelette appliquée directement) sur la plaie ou la bulle, puis chercher au bleu cobalt un ruisseau qui dilue le colorant."
      ],
      normal: [
        "Aucune prise de colorant (quelques points isolés possibles) ; film uniforme qui se rompt après > 10 s.",
        "Seidel négatif : le colorant reste uniforme sur la plaie."
      ],
      patho: [
        "Kératite ponctuée superficielle (KPS, superficial punctate keratitis : petits points colorés) **inférieure** → sécheresse, blépharite, lagophtalmie (paupières qui ferment mal), toxicité des gouttes ; **interpalpébrale** → sécheresse ou exposition ; **supérieure** → lentilles cornéennes, kératoconjonctivite limbique supérieure.",
        "**Dendrite** (ulcère ramifié avec bulbes terminaux) → herpès simplex ; **pseudodendrite** (sans bulbes, peu colorée) → zona, Acanthamoeba, épithélium en cicatrisation ; **ulcère géographique** → herpès élargi, souvent sous corticoïdes.",
        "Abrasion aux bords nets ; stries verticales → corps étranger sous la paupière supérieure (l’éverser).",
        "**Seidel positif** (ruisseau) → fuite de plaie ou de bulle de filtration : risque d’hypotonie et d’infection.",
        "**Coloration négative** (zone sombre sur fond vert) → relief qui soulève le film : dystrophie de la membrane basale (lignes en carte géographique), nodule, cicatrice saillante.",
        "Lissamine : > 9 points conjonctivaux ou coloration du bord libre ≥ 2 mm de long et ≥ 25 % de large (frottement de la paupière) = signes de sécheresse selon DEWS III ; > 5 points cornéens à la fluorescéine aussi."
      ],
      pitfalls: [
        "Trop de colorant ou lecture tardive : TBUT faussé, lésions fines masquées, diffusion stromale.",
        "Anesthésique, tonométrie ou gonioscopie avant l’examen de la surface : KPS iatrogènes.",
        "La fluorescéine tache les lentilles souples : les retirer avant.",
        "Stries verticales sans éversion de la paupière supérieure : corps étranger manqué."
      ],
      pearl: "Patron : « Après une trabéculectomie, PIO à 4 mmHg et CA peu profonde : premier test ? » Un Seidel sur la bulle : un ruisseau qui dilue la fluorescéine confirme une fuite, à fermer (lentille pansement, suture, révision) pour éviter hypotonie, chambre plate et infection."
    },
    {
      id: "tonometrie",
      title: "Tonométrie",
      en: "Tonometry",
      why: "La PIO est le seul facteur de risque du glaucome dont le traitement a prouvé son efficacité : une mesure fiable et reproductible guide le diagnostic, la PIO cible et le suivi.",
      how: [
        "Goldmann (référence) : anesthésique + fluorescéine, bleu cobalt au maximum, lampe à ≈ 60°, prisme centré sur la cornée, paupières tenues sans appuyer sur le globe.",
        "Au contact, deux demi-cercles verts (mires) apparaissent : tourner le cadran jusqu’à ce que leurs bords internes se touchent ; cadran × 10 = mmHg (le prisme aplanit un disque de 3,06 mm).",
        "Astigmatisme > 3 D : tourner le prisme pour placer l’axe du cylindre négatif à 43° sur la marque rouge.",
        "iCare (rebond) : sans anesthésie, sonde rapprochée de la cornée, série de mesures automatiques ; utile chez l’enfant et le patient peu coopérant. Tono-Pen (petit aplanateur portatif) : cornée irrégulière ou œdémateuse, patient couché. NCT (non-contact tonometer : jet d’air, sans contact) : dépistage.",
        "Noter l’heure et l’appareil ; mesurer avant la gonioscopie et la dilatation."
      ],
      normal: [
        "10–21 mmHg (moyenne ≈ 15–16), symétrique entre les deux yeux.",
        "Variation sur 24 h de 2–6 mmHg, souvent plus haute la nuit et tôt le matin.",
        "Mires fines, régulières, de même taille et bien centrées."
      ],
      patho: [
        "PIO > 21 mmHg sans atteinte du nerf ni du champ = hypertension oculaire ; avec atteinte = glaucome. Atteinte avec PIO toujours ≤ 21 mmHg = glaucome à pression normale.",
        "PIO très élevée + œil rouge douloureux + cornée embuée + pupille mi-dilatée → crise aiguë de fermeture de l’angle.",
        "PIO élevée d’un seul côté → chercher une cause secondaire : pseudo-exfoliation, dispersion pigmentaire, uvéite, récession de l’angle, néovaisseaux, corticoïdes.",
        "PIO très basse (hypotonie) après chirurgie filtrante → surfiltration, fuite (Seidel), décollement choroïdien ; après un trauma → rupture du globe occulte ou cyclodialyse."
      ],
      pitfalls: [
        "Mires trop épaisses (trop de fluorescéine) → surestimation ; trop minces → sous-estimation.",
        "Pression sur les paupières, apnée ou Valsalva, cravate ou col serré → surestimation.",
        "Cornée mince, œdème, post-LASIK → sous-estimation ; cornée épaisse → surestimation (ne pas corriger par une formule).",
        "Comparer des appareils différents d’une visite à l’autre : les valeurs ne sont pas interchangeables."
      ],
      pearl: "Patron : « Ta patiente opérée en LASIK a une PIO de 13 mmHg mais son excavation augmente : rassurée ? » Non : la cornée amincie fait sous-estimer la PIO au Goldmann. Je regarde la PIO d’avant la chirurgie, la tendance, et surtout la structure et la fonction (OCT, champ visuel) ; un tonomètre moins dépendant de la cornée peut aider."
    },
    {
      id: "gonioscopie",
      title: "Gonioscopie",
      en: "Gonioscopy",
      why: "C’est le seul examen qui montre directement l’angle : il distingue angle ouvert, étroit ou fermé, apposition ou synéchies, et repère les causes secondaires (PXF, récession, néovaisseaux) avant tout traitement du glaucome.",
      how: [
        "Pièce sombre et petit faisceau court (≈ 1 mm) qui n’entre pas dans la pupille (AAO 2026) : la lumière fait contracter la pupille, ce qui tend l’iris et ouvre faussement l’angle.",
        "Verre à 4 miroirs (Zeiss, Posner, Sussman : sans gel, permet l’indentation) ou verre de Goldmann à 3 miroirs (gel, image stable).",
        "Examiner les 4 quadrants (commencer par l’inférieur, le plus large et le plus pigmenté) ; le miroir montre l’angle situé en face (miroir à 12 h → angle de 6 h ; image inversée de haut en bas, mais pas de gauche à droite).",
        "Trouver la ligne de Schwalbe au coin cornéen (où les deux reflets de la fente se rejoignent), puis descendre : « I Can’t See Til Schwalbe » = Iris, Ciliary body band, Scleral spur, Trabecular meshwork, Schwalbe (du postérieur vers l’antérieur).",
        "Gonioscopie dynamique (indentation) : appuyer au centre avec le verre à 4 miroirs → l’aqueuse repousse l’iris périphérique → l’angle s’ouvre (simple apposition) ou reste collé (synéchies).",
        "Noter par quadrant : structure la plus postérieure visible, grade de Shaffer, profil de l’iris, pigment, synéchies, vaisseaux."
      ],
      normal: [
        "Shaffer 4 (35–45°, bande ciliaire visible) ou 3 (20–35°, éperon visible) dans les 4 quadrants.",
        "Pigment trabéculaire léger à modéré, plus marqué en inférieur ; procès iriens fins possibles (normaux).",
        "Aucun vaisseau ne franchit l’éperon scléral ; pas de synéchies."
      ],
      patho: [
        "Shaffer 2 (≈ 20°, trabéculum seulement), 1 (≤ 10°, Schwalbe seulement), 0 (fermé). Trabéculum pigmenté invisible sur ≥ 180° = contact iridotrabéculaire.",
        "Classification : PACS (suspect de fermeture : contact ≥ 180°, PIO normale, sans synéchies ni neuropathie) ; PAC (fermeture : contact + synéchies et/ou PIO ↑) ; PACG (glaucome par fermeture : PAC + neuropathie optique).",
        "PAS (synéchies antérieures périphériques : adhérences de l’iris qui persistent à l’indentation) → fermeture chronique, ancienne crise, uvéite.",
        "Ligne de Sampaolesi (pigment en avant de Schwalbe) et pigment en plaques → pseudo-exfoliation ; pigment dense et homogène sur 360° → dispersion pigmentaire.",
        "Néovaisseaux de l’angle (NVA : vaisseaux qui franchissent l’éperon et se ramifient sur le trabéculum) → glaucome néovasculaire débutant : chercher l’ischémie rétinienne en urgence.",
        "Bande ciliaire élargie et procès iriens déchirés, asymétriques → récession de l’angle (ancien traumatisme)."
      ],
      pitfalls: [
        "Pièce éclairée ou faisceau dans la pupille → contraction de la pupille → angle faussement ouvert.",
        "Pression involontaire avec le verre à 4 miroirs → angle ouvert artificiellement (indentation non voulue, plis cornéens).",
        "Iris bombé : demander au patient de regarder vers le miroir pour voir « par-dessus la colline » avant de conclure à un angle fermé.",
        "Confondre procès iriens (fins, on voit l’angle entre eux) et PAS (larges, cachent l’angle) ; ou une Schwalbe pigmentée avec le trabéculum."
      ],
      pearl: "Patron : « Comment distingues-tu apposition et synéchies ? » Par l’indentation : avec un verre à 4 miroirs, j’appuie au centre ; l’aqueuse repousse l’iris et l’angle s’ouvre s’il s’agit d’une apposition, alors que les PAS restent collées. Cela sépare PACS de PAC et oriente vers la LPI (iridotomie au laser) ou l’extraction du cristallin."
    },
    {
      id: "pachymetrie",
      title: "Pachymétrie",
      en: "Pachymetry",
      why: "L’épaisseur cornéenne centrale (ECC, central corneal thickness) influence la lecture de la PIO et le risque qu’une hypertension oculaire devienne un glaucome ; en cornée, elle suit l’œdème (Fuchs) et l’amincissement (kératocône).",
      how: [
        "Ultrasonique (contact) : anesthésique, sonde perpendiculaire au centre de la cornée, moyenne de plusieurs mesures.",
        "Optique (sans contact) : Scheimpflug, OCT du segment antérieur ou microscope spéculaire ; donne une carte complète et le point le plus mince.",
        "Glaucome : mesurer les deux yeux au départ (à refaire après chirurgie réfractive, greffe ou œdème).",
        "Cornée : suivre l’ECC et le point le plus mince dans le temps, sur le même appareil."
      ],
      normal: [
        "ECC ≈ 540–550 µm ; périphérie ≈ 650–700 µm ; point le plus mince proche du centre.",
        "Symétrique entre les deux yeux ; légèrement plus épaisse au réveil (paupières fermées la nuit)."
      ],
      patho: [
        "Cornée mince : dans OHTS (Ocular Hypertension Treatment Study), ECC ≤ 555 µm ≈ 3 fois plus de conversion en glaucome qu’ECC > 588 µm ; la PIO est en plus sous-estimée.",
        "Cornée épaisse : PIO surestimée au Goldmann (une hypertension oculaire « apparente » peut être surtout liée à l’épaisseur).",
        "ECC qui augmente avec le temps, ou nettement plus épaisse que l’autre œil → œdème (Fuchs, endothélium décompensé, rejet de greffe).",
        "Kératocône : point le plus mince déplacé (souvent en inférieur) et qui s’amincit d’une visite à l’autre = marqueur de progression qui pousse au cross-linking (CXL)."
      ],
      pitfalls: [
        "Sonde non perpendiculaire ou décentrée → épaisseur surestimée.",
        "Appliquer une formule de « correction » de la PIO : aucune n’est validée ; on intègre l’ECC au risque global.",
        "Après chirurgie réfractive au laser (LASIK, PRK), l’ECC basse reflète l’ablation : la PIO reste sous-estimée, mais les seuils de risque d’OHTS ne s’appliquent pas.",
        "Comparer des appareils différents (ultrason vs optique)."
      ],
      pearl: "Patron : « Pourquoi une cornée mince augmente-t-elle le risque dans OHTS ? » D’abord parce que la PIO réelle est sous-estimée ; ensuite, une cornée mince pourrait refléter une structure oculaire plus fragile (l’hystérésis basse est aussi un facteur de risque). On l’intègre au calcul du risque plutôt que de corriger le chiffre."
    },
    {
      id: "papille",
      title: "Examen de la papille",
      en: "Optic disc evaluation",
      why: "Le glaucome est une neuropathie optique caractéristique : décrire une papille de façon systématique est la base de la clinique de glaucome et des questions du patron.",
      how: [
        "Lampe à fente + lentille sans contact (78 D ou 90 D), pupille dilatée si possible ; vision stéréoscopique pour juger du relief.",
        "**1. Taille du disque** : hauteur verticale mesurée avec la fente, multipliée par le facteur de la lentille (≈ 1,1 pour 78 D, ≈ 1,3 pour 90 D) ; normal ≈ 1,5–2 mm.",
        "**2. Anneau neurorétinien** : épaisseur dans chaque secteur (règle ISNT), encoches, couleur.",
        "**3. Excavation** : C/D vertical (bord repéré par la cassure des petits vaisseaux), forme, profondeur, asymétrie entre les yeux.",
        "**4. Signes associés** : hémorragie papillaire, atrophie péripapillaire (APP) zone bêta, vaisseaux, défauts de la RNFL en lumière anérythre (verte).",
        "**5. Comparer** aux photos et OCT antérieurs : un changement documenté vaut plus qu’une mesure isolée."
      ],
      normal: [
        "Disque ≈ 1,5–2 mm, légèrement ovale vertical ; anneau rose qui suit souvent la règle ISNT (I ≥ S ≥ N ≥ T).",
        "C/D vertical habituellement ≤ 0,6, proportionnel à la taille du disque, asymétrie < 0,2.",
        "Pas d’hémorragie ; APP zone alpha fréquente et banale."
      ],
      patho: [
        "C/D vertical > 0,6 ou asymétrie ≥ 0,2 → suspect (à interpréter selon la taille du disque).",
        "Encoche inféro- ou supérotemporale, anneau qui viole ISNT, excavation ovale verticale → perte axonale glaucomateuse aux pôles.",
        "Hémorragie de Drance (petite flammèche qui croise le bord du disque) → maladie active, risque de progression (AAO 2026).",
        "APP zone bêta, vaisseaux en baïonnette ou nasalisés, vaisseau circumlinéaire dénudé, pores de la lame criblée visibles → signes associés au glaucome.",
        "**Pâleur > excavation**, pâleur en bande, papille œdémateuse → penser cause non glaucomateuse (compression, ischémie, inflammation) → investigation, souvent imagerie."
      ],
      pitfalls: [
        "Juger le C/D sans la taille du disque : grand disque normal étiqueté glaucome, petit disque glaucomateux manqué.",
        "Délimiter l’excavation par la pâleur plutôt que par le contour : C/D sous-estimé.",
        "Papille myope inclinée avec grande APP : excavation difficile à juger, OCT aussi trompeur.",
        "Ophtalmoscope direct sans stéréoscopie : profondeur mal évaluée."
      ],
      pearl: "Patron : « Quelle est la première chose à décrire sur une papille ? » Sa taille : un C/D de 0,7 peut être normal sur un grand disque et pathologique sur un petit. Puis l’anneau (ISNT, encoche), l’hémorragie, l’APP et la couleur ; un anneau restant pâle me fait penser à une cause non glaucomateuse."
    },
    {
      id: "oct",
      title: "OCT : RNFL, cellules ganglionnaires et segment antérieur",
      en: "Optical coherence tomography (OCT)",
      why: "L’OCT mesure de façon objective la RNFL et les cellules ganglionnaires maculaires : l’AAO 2026 recommande les deux au départ et au suivi, combinés au champ visuel ; l’OCT du segment antérieur (AS-OCT) évalue l’angle et la cornée.",
      how: [
        "Patient qui fixe la cible interne ; dilater si la pupille est petite ou la cataracte dense ; vérifier la qualité (force du signal, centrage, segmentation) avant de lire les couleurs.",
        "RNFL péripapillaire : cercle de mesure autour de la papille → épaisseur moyenne, par quadrant et par secteur horaire, courbe TSNIT, comparées à une base normative (vert, jaune, rouge).",
        "GCIPL maculaire (couches des cellules ganglionnaires et plexiforme interne) : carte d’épaisseur et de déviation ; précieux au stade précoce (atteinte centrale) et avancé.",
        "Progression : analyse guidée sur le même appareil, par rapport à des examens de référence.",
        "AS-OCT : profondeur de la CA, ouverture de l’angle, contact iridotrabéculaire, épaisseur de la cornée et de l’épithélium."
      ],
      normal: [
        "RNFL moyenne ≈ 90–100 µm chez l’adulte (varie selon l’appareil et l’âge) ; courbe TSNIT en « double bosse » (pôles supérieur et inférieur plus épais).",
        "Secteurs dans le vert, symétrie entre les deux yeux et entre les hémisphères supérieur et inférieur.",
        "GCIPL symétrique, sans arc d’amincissement."
      ],
      patho: [
        "Amincissement inférotemporal (le plus fréquent) puis supérotemporal : RNFL inférieure atteinte ↔ défaut de champ supérieur.",
        "GCIPL : arc d’amincissement inférieur qui s’arrête au raphé horizontal (zone de vulnérabilité maculaire) ↔ pôle inférotemporal de la papille.",
        "Effet plancher : la RNFL ne descend plus sous ≈ 50–60 µm (vaisseaux et tissu de soutien) → au stade avancé, suivre le champ visuel et le GCIPL.",
        "« Red disease » (rouge sans maladie, faux positif) : myopie forte, papille petite ou inclinée, erreur de segmentation, signal faible.",
        "« Green disease » (vert malgré la maladie, faux négatif) : atteinte débutante, œdème papillaire, membrane épirétinienne qui épaissit artificiellement la mesure.",
        "AS-OCT : un contact iridotrabéculaire, même si la gonioscopie paraît ouverte, peut prédire une fermeture (AAO 2026) ; l’UBM est supérieure pour l’iris plateau."
      ],
      pitfalls: [
        "Lire les couleurs sans vérifier la qualité du scan et la segmentation.",
        "Base normative souvent pauvre en myopes forts : rouge ≠ glaucome.",
        "Comparer des appareils différents : valeurs non interchangeables.",
        "Ignorer la macula : une atteinte centrale précoce peut épargner la RNFL moyenne."
      ],
      pearl: "Patron : « OCT tout rouge chez un myope de −9 D avec un champ visuel normal : glaucome ? » Probablement de la red disease (papille inclinée, base normative inadaptée, segmentation douteuse). Je vérifie la segmentation, je corrèle avec le champ (incluant un 10-2) et je suis la progression dans le temps plutôt que les couleurs."
    },
    {
      id: "topographie",
      title: "Topographie et tomographie cornéennes",
      en: "Corneal topography and tomography",
      why: "Elles détectent et suivent les ectasies (kératocône : cornée qui s’amincit et bombe en cône ; dégénérescence marginale pellucide) et l’astigmatisme irrégulier ; c’est la base de l’indication du cross-linking et du dépistage avant chirurgie réfractive.",
      how: [
        "Topographie à disques de Placido : anneaux lumineux réfléchis par le film lacrymal → carte de courbure de la face antérieure (axiale ou tangentielle) ; chaud = cambré, froid = plat.",
        "Tomographie (Scheimpflug rotatif ou OCT) : coupes de la cornée → élévations antérieure et postérieure (écart par rapport à une sphère de référence), carte pachymétrique, indice BAD-D (Belin-Ambrósio).",
        "Avant la mesure : film lacrymal de bonne qualité (larmes artificielles, cligner) ; lentilles cornéennes cessées assez longtemps (plus longtemps pour les rigides).",
        "Lire 4 cartes : courbure axiale antérieure, élévation antérieure, élévation postérieure, pachymétrie (valeur et position du point le plus mince).",
        "Comparer dans le temps sur le même appareil : la progression est le critère principal de CXL."
      ],
      normal: [
        "Courbure assez uniforme (≈ 43 D au centre) qui s’aplatit vers la périphérie.",
        "Astigmatisme régulier = nœud papillon symétrique : vertical si direct (with-the-rule), horizontal si inverse (against-the-rule).",
        "Point le plus mince près du centre ; élévations dans les limites normales."
      ],
      patho: [
        "Kératocône : cambrure inférieure, nœud papillon asymétrique à axes déviés (skewed), élévation postérieure ↑, point le plus mince déplacé et aminci.",
        "Repères de dépistage (Rabinowitz) : K central > 47,2 D ou asymétrie inférieur–supérieur (valeur I-S) > 1,4 D → suspicion de kératocône, à confirmer en tomographie.",
        "Kératocône central : cambrure centrale isolée.",
        "Dégénérescence marginale pellucide (PMD : amincissement en bande inférieure à 1–2 mm du limbe) : aspect en « pince de crabe » (crab claw) avec astigmatisme inverse marqué.",
        "Progression (Gomes 2015 : ≥ 2 critères parmi bombement antérieur, bombement postérieur, amincissement ou accélération du changement pachymétrique) → CXL ; chez l’enfant, CXL dès le diagnostic (consensus mondial 2025).",
        "Forme fruste (élévation postérieure ou BAD-D anormaux, topographie antérieure presque normale) → contre-indique le LASIK (risque d’ectasie)."
      ],
      pitfalls: [
        "Film lacrymal sec ou irrégulier → carte faussement irrégulière, voire faux cône : refaire après lubrification.",
        "Lentilles portées récemment (déformation, warpage) → pseudo-kératocône.",
        "Comparer des échelles de couleurs différentes (absolue vs normalisée) ou des appareils différents.",
        "Placido ne voit ni la face postérieure ni l’épaisseur : une topographie antérieure normale n’exclut pas un kératocône débutant."
      ],
      pearl: "Patron : « Quelle différence entre topographie et tomographie ? » La topographie de Placido mesure seulement la courbure de la face antérieure, à travers le film lacrymal. La tomographie (Scheimpflug ou OCT) reconstruit la cornée en 3D (élévations antérieure et postérieure, pachymétrie) et détecte plus tôt le kératocône : élévation postérieure et point le plus mince déplacé."
    },
    {
      id: "champs-visuels",
      title: "Champ visuel automatisé (Humphrey)",
      en: "Standard automated perimetry",
      why: "Il mesure la fonction : il confirme la neuropathie glaucomateuse, en donne le stade et détecte la progression ; il sert aussi à évaluer l’aptitude à conduire (SAAQ).",
      how: [
        "Humphrey SITA Standard (ou Fast/Faster) : 24-2 (54 points, maille de 6°) pour le diagnostic et le suivi ; 10-2 (10° centraux) au départ et si l’atteinte menace la fixation ; 24-2C = 24-2 + quelques points centraux.",
        "Correction de près adaptée à l’âge, pupille d’au moins ≈ 3 mm, explications claires, un œil à la fois, l’autre caché.",
        "Fiabilité d’abord : faux positifs (FP), faux négatifs, pertes de fixation, suivi du regard.",
        "Puis lire : carte des niveaux de gris (aperçu), déviation totale (TD) et déviation corrigée (PD, pattern deviation) avec probabilités, indices MD (déficit moyen, global), PSD (déficit localisé), VFI (% de fonction restante) et GHT (glaucoma hemifield test : compare les hémichamps supérieur et inférieur).",
        "Corréler avec la papille et l’OCT ; pour la progression, même stratégie, ≥ 2 examens de référence et champs groupés (clustered)."
      ],
      normal: [
        "FP ≤ 15 % ; MD proche de 0 dB ; PSD bas ; VFI ≈ 100 % ; GHT « dans les limites normales ».",
        "Tache aveugle physiologique ≈ 15° en temporal de la fixation.",
        "TD et PD sans amas de points significatifs."
      ],
      patho: [
        "Défauts glaucomateux (ressaut nasal, arciforme, paracentral) qui respectent le méridien **horizontal** ; défaut supérieur ↔ papille et RNFL inférieures.",
        "Défaut glaucomateux minimal (critères d’Anderson) : GHT hors des limites normales, ou PSD à p < 5 %, ou ≥ 3 points contigus non périphériques à p < 5 % sur la PD dont un à p < 1 % ; à confirmer sur un 2e examen.",
        "Défaut qui respecte le méridien **vertical** (bitemporal = chiasma ; homonyme = voies rétrochiasmatiques) → neuro-imagerie.",
        "TD abaissée partout mais PD normale → dépression généralisée (cataracte, petite pupille, mauvaise correction), pas un défaut glaucomateux localisé.",
        "Stades Hodapp-Parrish-Anderson : débutant MD > −6 dB ; modéré −6 à −12 dB ; avancé < −12 dB.",
        "Progression : rapide si ≥ −2 dB/an ; Chauhan 2008 (équipe canadienne) : ≈ 3 champs/an pendant 2 ans pour repérer un progresseur rapide.",
        "SAAQ classe 5 : champ binoculaire ≥ 100° à l’horizontale (≥ 30° de chaque côté), continu 10° au-dessus et 20° au-dessous de la fixation ; si anomalie, champ binoculaire (Esterman ou Goldmann III/4e) signé."
      ],
      pitfalls: [
        "FP > 15 % = test non fiable : le patient appuie trop (« gâchette facile ») → champ faussement beau, MD trop bon.",
        "Pertes de fixation > 20 % avec un suivi du regard instable = fiabilité douteuse ; faux négatifs élevés = fatigue ou inattention, mais fréquents aussi dans un champ déjà très atteint.",
        "Effet d’apprentissage : un premier champ anormal doit être confirmé avant de conclure.",
        "Ptose, monture, mauvaise correction ou petite pupille → défauts artefactuels (supérieurs, en anneau).",
        "Mélanger les stratégies (SITA Standard vs Fast) dans une série : analyse de progression ininterprétable."
      ],
      pearl: "Patron : « Défaut arciforme supérieur à l’œil droit : où regardes-tu sur la papille ? » Au pôle inférieur, surtout inférotemporal : encoche, hémorragie, RNFL amincie. Si le défaut respectait le méridien vertical, je penserais plutôt au chiasma ou aux voies rétrochiasmatiques."
    },
    {
      id: "speculaire",
      title: "Microscopie spéculaire",
      en: "Specular microscopy",
      why: "Elle compte et décrit les cellules endothéliales : elle aide à décider et planifier la chirurgie chez le patient avec Fuchs, surveille les greffes, les tubes et implants, et l’œil après une crise de fermeture de l’angle (AAO 2026).",
      how: [
        "Appareil le plus souvent sans contact : la lumière réfléchie par l’interface endothélium–humeur aqueuse dessine la mosaïque des cellules.",
        "Mesurer au centre (± en périphérie ou près d’un tube) et comparer les deux yeux.",
        "Analyse automatique, à vérifier : densité (ECD, cellules/mm²), coefficient de variation de la taille (CV : polymégathisme), pourcentage d’hexagones (pléomorphisme).",
        "Répéter dans le temps sur le même appareil."
      ],
      normal: [
        "Densité ≈ 3000–3500 cellules/mm² chez le jeune adulte, ≈ 2500 vers 60–70 ans (perte ≈ 0,6 %/an).",
        "Cellules régulières de taille semblable, majoritairement hexagonales : CV ≈ 0,30 ou moins et ≈ 60 % d’hexagones ou plus (repères usuels, variables selon l’appareil).",
        "Pas de guttae."
      ],
      patho: [
        "Guttae = zones noires (excroissances de Descemet qui ne renvoient pas la lumière) → dystrophie de Fuchs ; confluentes, elles rendent le comptage difficile.",
        "Densité basse : cornée fragile, risque de décompensation après une chirurgie ; décompensation en général < 400–500 cellules/mm².",
        "CV ↑ (tailles inégales) et hexagones ↓ → endothélium stressé (lentilles, chirurgie, PIO élevée), parfois avant la chute de densité.",
        "Densité ↓ après une crise de fermeture et dans le glaucome par fermeture de l’angle, après des chirurgies répétées, avec un tube trop près de la cornée ou des implants intracamérulaires répétés (mise en garde AAO 2026)."
      ],
      pitfalls: [
        "Comptage automatique sur une image floue ou pleine de guttae : densité faussement haute ou basse → vérifier les cellules comptées.",
        "Cornée œdémateuse : image impossible, ce qui ne veut pas dire normale.",
        "Mesurer seulement le centre : un tube ou une bulle peut léser l’endothélium en périphérie."
      ],
      pearl: "Patron : « Une patiente avec des guttae veut se faire opérer de la cataracte : que demandes-tu ? » Une microscopie spéculaire, une pachymétrie et l’histoire de vision matinale : une densité basse, une cornée épaisse ou un œdème le matin font discuter une chirurgie combinée cataracte + DMEK (greffe endothéliale) plutôt qu’une chirurgie de cataracte seule."
    }
  ]
};
