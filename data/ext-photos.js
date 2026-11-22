var G = (typeof window !== 'undefined') ? window : globalThis;
G.OPH = G.OPH || {};

// Extension : photos du 2e catalogue (OPH-192…391, EyeRounds / University of Iowa) qui enrichissent
// des fiches et examens EXISTANTS. Images affichées intactes; trouvailles en texte à côté (reveal).
// Fusion sans écraser (les autres fichiers peuvent ajouter aux mêmes clés).
G.OPH.photos = G.OPH.photos || {};
(function (add) { Object.keys(add).forEach(function (k) { G.OPH.photos[k] = (G.OPH.photos[k] || []).concat(add[k]); }); })({

  "a-tonometrie": [
    { id: "OPH-200", caption: "Tonométrie d’aplanation de Goldmann : cône posé sur la cornée à la lampe à fente",
      look: "Observe la position de la tête, la lumière utilisée et l’endroit où le cône touche l’œil.",
      reveal: [
        "Front et menton bien appuyés, yeux grands ouverts : une pression sur les paupières ou un patient crispé surestime la PIO.",
        "Cône biprisme (étiqueté « Goldmann Applanation Tip ») au contact du centre de la cornée, éclairé en lumière bleue (fluorescéine et anesthésique instillés avant).",
        "Le cône aplanit un disque de 3,06 mm; on tourne la molette jusqu’à ce que les bords internes des deux demi-cercles se touchent (cadran × 10 = mmHg).",
        "Cornée mince ou œdémateuse : sous-estimation; cornée épaisse : surestimation, d’où la pachymétrie (OPH-201)."
      ] }
  ],

  "a-pachymetrie": [
    { id: "OPH-201", caption: "Pachymétrie ultrasonore : sonde tenue à la main posée au centre de la cornée",
      look: "Regarde comment la sonde est orientée par rapport à la surface de la cornée.",
      reveal: [
        "Sonde fine tenue comme un crayon, appliquée perpendiculairement au centre de la cornée anesthésiée, paupière supérieure soulevée.",
        "L’appareil mesure l’épaisseur cornéenne centrale (central corneal thickness) en µm; une sonde inclinée ou décentrée donne une valeur faussement élevée.",
        "OHTS : une cornée de 555 µm ou moins comporte environ 3 fois plus de risque de conversion en glaucome qu’une cornée de plus de 588 µm.",
        "Ne pas « corriger » mécaniquement la PIO par une formule : l’épaisseur sert surtout à nuancer le risque et la lecture du Goldmann."
      ] }
  ],

  "a-gonioscopie": [
    { id: "OPH-292", caption: "Gonioscopie : verre de contact tenu sur l’œil, patient installé à la lampe à fente",
      look: "Observe comment l’examinateur tient le verre et comment le patient est positionné.",
      reveal: [
        "Verre de gonioscopie (flèche blanche) appuyé sur la cornée, tenu entre le pouce et l’index de l’examinateur; front du patient contre la bande d’appui.",
        "Le miroir renvoie l’image de l’angle situé du côté opposé : on regarde l’angle à 180° de la position du miroir.",
        "Pièce sombre, fente courte et étroite qui n’éclaire pas la pupille : la lumière fait contracter la pupille et ouvre faussement l’angle.",
        "Avec un verre à 4 miroirs, l’indentation ouvre une simple apposition, mais pas une synéchie antérieure périphérique."
      ] },
    { id: "OPH-312", caption: "Gonioscopie : procès iriens, fins filaments entre l’iris et la paroi de l’angle",
      look: "Repère la jonction entre la périphérie de l’iris et les bandes claires de l’angle, en haut de l’image.",
      reveal: [
        "En haut, dans le miroir : angle ouvert, avec plusieurs bandes visibles au-dessus de la racine de l’iris.",
        "En haut au centre, fins filaments bruns en dentelle qui partent de la périphérie de l’iris et montent sur la première bande claire de l’angle : procès iriens (iris processes).",
        "Variante normale, plus fréquente chez les iris foncés : fins et ajourés, ils laissent voir les structures derrière eux et ne bloquent pas l’angle.",
        "À distinguer des synéchies antérieures périphériques (larges, opaques, persistent à l’indentation) et des néovaisseaux (rouges, ramifiés, franchissent l’éperon)."
      ] }
  ],

  "a-champs-visuels": [
    { id: "OPH-293", caption: "Humphrey : tache aveugle normale, puis déficit arciforme et ressaut nasal glaucomateux",
      look: "Dans chaque panneau, repère la tache aveugle, puis les plages sombres anormales et leur rapport au méridien horizontal.",
      reveal: [
        "Panneau A : seule plage sombre = tache aveugle normale, à environ 15° du côté temporal, juste sous le méridien horizontal.",
        "Panneau B : déficit arciforme supérieur qui s’arrête net sur le méridien horizontal, en plus de la tache aveugle.",
        "Panneau C : déficit arciforme inférieur et ressaut nasal (nasal step), une marche d’escalier sur le méridien horizontal du côté nasal.",
        "Règle : le glaucome respecte le méridien horizontal; une atteinte du chiasma ou en arrière respecte le méridien vertical (comparer avec OPH-283)."
      ] },
    { id: "OPH-283", caption: "Goldmann : hémianopsie homonyme gauche, défaut qui respecte le méridien vertical",
      look: "Compare les deux champs : quelle moitié manque et où s’arrêtent les isoptères ?",
      reveal: [
        "Deux champs cinétiques de Goldmann, un par œil : les isoptères (lignes bleue, rouge et rose) n’occupent que la moitié droite de chaque champ.",
        "La perte de la moitié gauche, dans les deux yeux, s’arrête net sur le méridien vertical : hémianopsie homonyme gauche (left homonymous hemianopsia).",
        "Accident vasculaire cérébral occipital; une lésion rétrochiasmatique droite donne un défaut homonyme gauche.",
        "Un défaut qui respecte le méridien vertical n’est pas glaucomateux : imagerie cérébrale et évaluation neurologique."
      ] }
  ],

  "a-papille": [
    { id: "OPH-202", caption: "Papille normale : rapport C/D 0,3, anneau rose épais",
      look: "Évalue l’épaisseur et la couleur de l’anneau neurorétinien autour de l’excavation.",
      reveal: [
        "Petite excavation centrale claire; anneau neurorétinien (neuroretinal rim) rose orangé, épais et régulier tout autour.",
        "Rapport C/D de 0,3 documenté.",
        "Vaisseaux qui émergent au centre et sortent sans se couder au bord du disque; pas d’hémorragie ni d’encoche visibles.",
        "Le C/D dépend de la taille du disque : juger l’anneau (épaisseur, couleur, règle ISNT) plutôt que le chiffre seul."
      ] },
    { id: "OPH-203", caption: "Papille glaucomateuse : rapport C/D 0,9, anneau presque disparu",
      look: "Cherche ce qui reste de l’anneau neurorétinien et observe le trajet des vaisseaux au bord du disque.",
      reveal: [
        "Excavation blanche qui occupe presque tout le disque : C/D de 0,9 documenté.",
        "Anneau neurorétinien réduit à un mince liseré, y compris aux pôles supérieur et inférieur.",
        "Vaisseaux qui se coudent au bord du disque en plongeant dans l’excavation (aspect en baïonnette).",
        "Halo jaune-blanc autour du disque, surtout à gauche et en bas sur l’image : atrophie péripapillaire."
      ] },
    { id: "OPH-204", caption: "Hémorragie papillaire en flammèche au bord inférieur du disque (flèche)",
      look: "Suis la flèche et décris la forme, la position et la couleur de la lésion.",
      reveal: [
        "Petite hémorragie rouge foncé allongée, en flammèche, à cheval sur le bord du disque vers 5 h sur l’image (flèche) : hémorragie papillaire (disc hemorrhage, de Drance).",
        "Elle siège dans la couche des fibres nerveuses, d’où sa forme striée qui suit le trajet des fibres.",
        "Marqueur de glaucome actif ou qui progresse, plus fréquent dans le glaucome à pression normale; elle se résorbe en quelques semaines à quelques mois, d’où l’importance de la noter et de la photographier.",
        "Ensuite : chercher l’encoche et le défaut de champ correspondants et revoir la cible de PIO."
      ] }
  ],

  "c-bacterienne": [
    { id: "OPH-333", caption: "Ulcère central avec infiltrats satellites dans une kératite bactérienne à Gram négatif",
      look: "Décris la lésion centrale, puis repère les petites taches blanches autour d’elle.",
      reveal: [
        "Grand ulcère central blanc et dense qui occupe la majeure partie de la cornée, cornée opalescente tout autour.",
        "Multiples petits infiltrats blancs arrondis, séparés de la lésion principale (en haut à droite, à gauche et en bas) : infiltrats satellites.",
        "Forte injection conjonctivale, surtout à droite de l’image.",
        "Kératite bactérienne à bacilles Gram négatif, cultures négatives. Les satellites évoquent d’abord un champignon, mais ne le prouvent pas."
      ] },
    { id: "OPH-334", caption: "Même dossier, autre éclairage : ulcère central entouré d’infiltrats satellites arrondis",
      look: "Avec cet éclairage, compte les foyers arrondis autour de l’ulcère et note s’ils touchent la lésion centrale.",
      reveal: [
        "Contour de l’ulcère central bien découpé, avec des anneaux concentriques à l’intérieur.",
        "Infiltrats ronds plus petits autour de l’ulcère, bien séparés de lui (le côté droit est en partie masqué par le reflet lumineux).",
        "Des satellites ont aussi été décrits avec l’Acanthamoeba, les mycobactéries atypiques et des bactéries comme le Pseudomonas.",
        "Conduite inchangée : grattage pour coloration de Gram et cultures (bactéries et champignons), puis antibiotiques fortifiés ajustés aux résultats."
      ] }
  ],

  "c-greffe": [
    { id: "OPH-338", caption: "Cornée donneuse dans son milieu de conservation, prête pour une kératoplastie transfixiante",
      look: "Identifie la cornée donneuse, le contenant et le liquide qui l’entoure.",
      reveal: [
        "Bouton cornéoscléral (cornée entourée d’une collerette de sclère) au centre d’une chambre de visualisation transparente remplie d’un milieu de conservation rouge orangé.",
        "Cette chambre permet à la banque d’yeux d’examiner l’endothélium (microscopie spéculaire) sans ouvrir le contenant.",
        "Le chirurgien découpe le greffon dans ce bouton; la collerette restante peut être mise en culture, pratique qui varie selon les chirurgiens (voir OPH-335)."
      ] },
    { id: "OPH-348", caption: "Points de Kaye : fins points blancs épithéliaux en avant des sutures d’une greffe",
      look: "Regarde le bord de la greffe près des sutures, à fort grossissement.",
      reveal: [
        "Greffe transfixiante avec sutures séparées (fils noirs) qui croisent la jonction greffon-receveur, en haut et à droite de l’image.",
        "Multitude de fins points blancs brillants dans l’épithélium, en arc juste en dedans de la ligne de sutures : points de Kaye (Kaye dots).",
        "Cellules épithéliales en dégénérescence, sans effet sur la vision et sans portée clinique.",
        "Ne pas les confondre avec un rejet : ici, ni ligne de rejet, ni œdème, ni précipités sur l’endothélium du greffon."
      ] },
    { id: "OPH-335", caption: "Candida dans l’interface d’une DSAEK, trois mois après la greffe (lampe à fente)",
      look: "Repère l’opacité blanche sur le trajet de la fente et sa position dans la cornée.",
      reveal: [
        "Petite opacité blanche duveteuse à gauche, sur le trajet de la fente, en périphérie moyenne de la cornée; elle siège dans l’interface greffon-receveur.",
        "DSAEK pour une dystrophie de Fuchs; la culture de la collerette du donneur a poussé Candida albicans, et l’infection est apparue trois mois plus tard malgré un antifongique préventif.",
        "L’interface est une poche fermée, mal atteinte par les gouttes : échec du traitement médical, récidive après une nouvelle DSAEK et du voriconazole intracamérulaire, guérison par greffe transfixiante.",
        "Leçon : une culture positive de la collerette impose un suivi rapproché; une infiltration blanche de l’interface exige un avis de cornée rapide."
      ] },
    { id: "OPH-370", caption: "Kératopathie cristalline infectieuse dans une greffe transfixiante (lampe à fente)",
      look: "Décris la forme de l’opacité blanche et la réaction de l’œil autour.",
      reveal: [
        "Greffe transfixiante avec une couronne de sutures séparées encore en place.",
        "Opacité blanche duveteuse aux fins branchements, comme des cristaux, dans le stroma paracentral en bas à gauche du greffon.",
        "Injection conjonctivale légère : infection indolente, typiquement peu inflammatoire, chez une greffe sous corticostéroïdes chroniques.",
        "Souvent un streptocoque alpha-hémolytique (viridans), parfois Candida, à partir d’un trajet de suture; le grattage peut être négatif, d’où parfois une biopsie."
      ] }
  ],

  "c-herpes": [
    { id: "OPH-343", caption: "Dendrites fantômes : cicatrices ramifiées après une kératite herpétique épithéliale (lampe à fente)",
      look: "Décris la forme des deux opacités et demande-toi si elles sont actives.",
      reveal: [
        "Deux opacités grisâtres ramifiées, en étoile, dans la cornée devant l’iris éclairé (une en haut, l’autre plus bas, au centre de l’image).",
        "Contours flous, sans bulbes terminaux nets; infiltration et cicatrice sous-épithéliales résiduelles à l’endroit d’anciens ulcères dendritiques (ghost dendrites).",
        "Une cicatrice ne prend pas la fluorescéine, alors qu’une dendrite active se colore : toujours vérifier avec le colorant avant de conclure.",
        "Pas d’antiviral curatif pour une cicatrice; on discute la prophylaxie (acyclovir 400 mg BID) si les récidives sont fréquentes."
      ] },
    { id: "OPH-369", caption: "Zona ophtalmique : vésicules et croûtes sur le front, la paupière et le nez",
      look: "Repère l’étendue de l’éruption sur le visage, puis l’état de l’œil.",
      reveal: [
        "Vésicules et croûtes jaunâtres sur fond rouge : front près du sourcil, paupière supérieure gonflée, racine et côté du nez.",
        "Territoire du nerf ophtalmique (V1); une atteinte du côté ou du bout du nez (signe de Hutchinson, nerf nasociliaire) annonce plus souvent une atteinte de l’œil.",
        "Œil rouge avec sécrétions et croûtes au bord des paupières : examen complet à la lampe à fente (kératite, uvéite, PIO).",
        "Valacyclovir 1 g TID × 7 jours, idéalement dans les 72 h. ZEDS (valacyclovir 1 g par jour pendant 1 an) : critère principal à 12 mois non significatif, mais 27 % moins de maladie oculaire nouvelle ou aggravée à 18 mois; décision individualisée (rein, observance)."
      ] }
  ],

  "c-keratocone": [
    { id: "OPH-371", caption: "Anneaux intracornéens : deux segments arqués implantés dans le stroma en périphérie moyenne",
      look: "Décris les deux structures transparentes en arc et leur position dans la cornée.",
      reveal: [
        "Deux segments transparents en forme d’arc, placés en vis-à-vis en périphérie moyenne de la cornée, qui dessinent presque un anneau complet.",
        "Petit orifice de positionnement visible à l’extrémité supérieure de chaque segment; espaces libres entre les segments, en haut et en bas.",
        "Ils aplatissent et régularisent la cornée centrale pour réduire l’astigmatisme irrégulier et améliorer la vision ou la tolérance aux lentilles.",
        "Ils n’arrêtent pas à eux seuls la progression : si le kératocône évolue, la réticulation du collagène (CXL) reste le traitement qui stabilise."
      ] }
  ],

  "c-pterygion": [
    { id: "OPH-353", caption: "Carcinome épidermoïde de la surface oculaire : masse gélatineuse limbique qui envahit la cornée",
      look: "Décris l’aspect, les limites et les vaisseaux de la lésion qui part du limbe.",
      reveal: [
        "Masse grisâtre gélatineuse, un peu surélevée, qui part de la conjonctive à droite de l’image et avance sur la cornée jusqu’au bord de la pupille, avec un front irrégulier.",
        "Vaisseaux conjonctivaux dilatés et tortueux qui convergent vers la lésion (vaisseaux nourriciers).",
        "Contrairement au ptérygion (triangle charnu à tête plate qui avance régulièrement), la néoplasie de surface (OSSN) est gélatineuse, papillomateuse ou blanchâtre, à cheval sur le limbe.",
        "Conduite : référer en cornée ou oncologie oculaire; biopsie-exérèse sans toucher la lésion (no-touch) avec cryothérapie, ou traitement topique selon le cas."
      ] },
    { id: "OPH-356", caption: "Pinguécula : dépôt jaunâtre surélevé de la conjonctive bulbaire près du limbe",
      look: "Repère la lésion jaunâtre et vérifie si elle franchit le limbe.",
      reveal: [
        "Petit amas jaunâtre, légèrement bosselé, sur la conjonctive bulbaire à gauche de la cornée, dans la fente palpébrale.",
        "La lésion s’arrête au limbe : la cornée reste claire, différence clé avec le ptérygion qui envahit la cornée.",
        "Dégénérescence bénigne du tissu conjonctival liée aux UV et au vent; lubrifiants si irritation, court traitement anti-inflammatoire si pingueculite (pinguécula enflammée)."
      ] }
  ],

  "c-fuchs": [
    { id: "OPH-322", caption: "Œdème cornéen en nid d’abeilles sous inhibiteur de la Rho kinase (planche de 4 vues)",
      look: "Compare les quatre vues : où se trouve le liquide, quel dessin forme-t-il et que montre la fluorescéine ?",
      reveal: [
        "A, OCT du segment antérieur : petites cavités noires alignées juste sous l’épithélium (liquide sous-épithélial).",
        "B et C, lampe à fente : œdème diffus en mailles, comme un nid d’abeilles (honeycomb), bien visible en B.",
        "D, fluorescéine : ponctuations dans une bande horizontale de la fente palpébrale, là où des bulles sous-épithéliales se sont rompues.",
        "Œil greffé (DSAEK) avec glaucome avancé et tube d’Ahmed; œdème apparu environ 10 mois après le début du netarsudil, qui a été cessé. Ce type d’œdème survient surtout sur une cornée déjà fragile. Disponibilité canadienne du netarsudil à vérifier."
      ] },
    { id: "OPH-354", caption: "Implant de dexaméthasone (Ozurdex) migré en chambre antérieure chez un œil aphaque",
      look: "Repère le corps étranger dans la chambre antérieure et sa position par rapport à l’iris.",
      reveal: [
        "Bâtonnet blanc, mince et un peu courbé, posé dans la partie inférieure de la chambre antérieure, devant l’iris : implant intravitréen de dexaméthasone.",
        "Œil aphaque (ancien traumatisme perforant) et vitrectomisé; œdème cornéen marqué un mois après l’injection; implant visible seulement après quelques minutes la tête penchée vers le bas.",
        "Au contact de l’endothélium inférieur, l’implant aggrave l’œdème : il a été retiré d’urgence pour limiter la décompensation endothéliale.",
        "Œdème cornéen inférieur après une injection intravitréenne chez un œil aphaque ou sans capsule postérieure intacte : chercher l’implant, au besoin en gonioscopie."
      ] }
  ],

  "g-gpn": [
    { id: "OPH-294", caption: "Glaucome à pression normale : grande excavation et anneau aminci aux pôles (rétinophotographie)",
      look: "Évalue l’anneau neurorétinien aux pôles supérieur et inférieur du disque.",
      reveal: [
        "Excavation pâle et large qui occupe la majeure partie du disque; on devine les pores de la lame criblée au fond.",
        "Anneau neurorétinien aminci en haut et en bas, mieux conservé du côté où émergent les vaisseaux (à droite).",
        "C/D de 0,7 et 0,8 aux deux yeux, avec encoches supérieures et inférieures.",
        "PIO de 12 à 20 mmHg sur une courbe diurne, angles ouverts et maladie de Raynaud (vasospasme), facteur de risque classique du GPN."
      ] },
    { id: "OPH-296", caption: "Même dossier : champ Humphrey avec défauts denses près de la fixation",
      look: "Repère la tache aveugle pour savoir de quel œil il s’agit, puis situe les plages noires par rapport aux méridiens.",
      reveal: [
        "Petit bloc noir à gauche du centre, juste sous le méridien horizontal : tache aveugle, donc champ d’un œil gauche.",
        "Plage noire dense juste sous le méridien horizontal, de près du point de fixation jusqu’au bord nasal (à droite) : déficit arciforme inférieur.",
        "Marches noires au bord nasal, au-dessus et au-dessous du méridien horizontal : ressauts nasaux supérieur et inférieur (œil gauche).",
        "Les défauts proches de la fixation sont fréquents dans le GPN et menacent la lecture : un champ 10-2 complète le 24-2."
      ] },
    { id: "OPH-298", caption: "Même dossier : OCT des fibres nerveuses, amincissement aux deux yeux, surtout à gauche",
      look: "Compare la courbe noire à la bande verte et lis l’épaisseur moyenne de chaque œil.",
      reveal: [
        "Courbe TSNIT : la courbe noire de l’œil droit (A) longe la limite inférieure du vert; celle de l’œil gauche (B) tombe dans le jaune et le rouge, surtout en inférieur.",
        "Épaisseur moyenne : 74,43 µm à droite (case jaune, limite) et 62,05 µm à gauche (case rouge, anormale).",
        "Secteurs horaires : plusieurs secteurs jaunes à droite; plusieurs secteurs rouges, en haut et en bas, à gauche.",
        "Concorde avec les papilles et le champ; dans le GPN, l’OCT et le champ servent de référence pour suivre la progression puisque la PIO est normale."
      ] }
  ],

  "g-neovasculaire": [
    { id: "OPH-319", caption: "Néovascularisation irienne discrète trois mois après une occlusion de l’artère centrale",
      look: "Examine la surface de l’iris dans le cercle, près du bord de la pupille.",
      reveal: [
        "Dans le cercle : fins vaisseaux rouges en dentelle à la surface de l’iris, à partir de la marge pupillaire.",
        "Vaisseaux sinueux et irréguliers qui ne suivent pas les plis radiaires normaux du stroma irien.",
        "Néovascularisation irienne (NVI) et glaucome néovasculaire environ trois mois après une occlusion de l’artère centrale de la rétine, traités par bévacizumab intravitréen.",
        "Examiner la marge pupillaire avant de dilater et faire une gonioscopie : les néovaisseaux de l’angle peuvent accompagner ou précéder ceux de la pupille."
      ] },
    { id: "OPH-320", caption: "Néovaisseaux iriens à fort grossissement : flèches sur leur front périphérique",
      look: "Suis les flèches et décris les vaisseaux situés entre elles et la pupille.",
      reveal: [
        "Fins vaisseaux rouges ramifiés à la surface de l’iris, entre la marge pupillaire (à droite) et la ligne des flèches.",
        "Les flèches marquent jusqu’où les néovaisseaux avancent vers la périphérie de l’iris.",
        "Nés à la marge pupillaire, ils progressent vers l’angle; sur le trabéculum, la membrane fibrovasculaire finit par fermer l’angle par synéchies.",
        "Traiter la cause (ischémie rétinienne) : anti-VEGF et photocoagulation panrétinienne, en plus du contrôle de la PIO."
      ] }
  ],

  "g-pxf": [
    { id: "OPH-321", caption: "Pseudo-exfoliation : cristallin luxé vers le bas, bord supérieur visible dans la pupille",
      look: "Dans la pupille dilatée, repère le bord du cristallin et ce qui se trouve au-dessus.",
      reveal: [
        "Bord supérieur du cristallin, en arc, qui traverse la pupille dilatée : le cristallin est descendu.",
        "Au-dessus de ce bord, la pupille est plus noire, sans cristallin; quelques fins filaments y sont visibles.",
        "Glaucome pseudo-exfoliatif connu, œil gauche; luxation spontanée vers le bas avec déhiscence et désinsertion zonulaires supérieures, zonules couvertes de matériel fibrillaire blanc.",
        "La PXF affaiblit les zonules : toute chirurgie de cataracte se planifie comme à risque (dilatation pauvre, phacodonésis, anneau de tension capsulaire)."
      ] },
    { id: "OPH-324", caption: "Pseudo-exfoliation en rétro-illumination : dépôts sur la capsule antérieure du cristallin",
      look: "Dans le reflet rouge, repère les contours circulaires et les petits dépôts sur la capsule.",
      reveal: [
        "Contour rond et festonné au centre de la pupille : bord d’un disque central de matériel exfoliatif sur la capsule antérieure.",
        "Second contour, plus périphérique, visible surtout à droite, avec de fines stries radiaires.",
        "Petits points et flocons blancs épars sur la capsule (dépôt de matériel exfoliatif).",
        "Aspect classique : disque central, zone intermédiaire claire frottée par l’iris et bande périphérique granuleuse; chercher aussi la ligne de Sampaolesi en gonioscopie."
      ] }
  ],

  "g-secondaires": [
    { id: "OPH-349", caption: "Précipités rétrocornéens fins dans une uvéite antérieure liée à l’arthrite juvénile idiopathique",
      look: "Dans la fente lumineuse, repère les petits points blancs à la face arrière de la cornée et leur répartition.",
      reveal: [
        "Nombreux petits points blancs ronds sur l’endothélium, surtout dans la moitié inférieure de la fente : précipités rétrocornéens (keratic precipitates).",
        "Petits et nets, non graisseux : aspect non granulomateux, habituel dans l’uvéite de l’arthrite juvénile idiopathique (AJI).",
        "Réactivation d’une uvéite antérieure associée à l’AJI.",
        "L’uvéite de l’AJI est souvent indolore, œil blanc : dépistage régulier à la lampe à fente; surveiller la PIO (inflammation et corticostéroïdes), la cataracte et la kératopathie en bande."
      ] },
    { id: "OPH-351", caption: "Précipités rétrocornéens en graisse de mouton : gros dépôts arrondis dans la cornée inférieure",
      look: "Compare la taille et l’aspect de ces précipités avec des précipités fins.",
      reveal: [
        "Nombreux dépôts ronds et jaunâtres, de taille moyenne à grosse, groupés dans la moitié inférieure de la cornée, devant la pupille et l’iris éclairé.",
        "Taille variable, les plus gros en bas; précipités en graisse de mouton : répartition inférieure typique (triangle d’Arlt), liée aux courants de convection de l’humeur aqueuse.",
        "Précipités en graisse de mouton (mutton-fat) = uvéite granulomateuse : sarcoïdose, tuberculose, syphilis, herpès (HSV/VZV), Vogt-Koyanagi-Harada, entre autres.",
        "Glaucome uvéitique : traiter l’inflammation et la PIO; un bilan étiologique s’impose avant une corticothérapie prolongée."
      ] }
  ],

  "g-postop": [
    { id: "OPH-315", caption: "Hyphéma en voie de rétraction deux semaines après une tentative d’iStent",
      look: "Décris la couleur, la forme et la position du sang dans l’œil.",
      reveal: [
        "Caillot rouge foncé au centre de la chambre antérieure, devant la pupille, bordé à gauche et en bas d’une zone brun orangé.",
        "Chirurgie interrompue à cause d’un hyphéma et d’une mauvaise visibilité; un hyphéma franc est rare avec l’iStent, alors qu’un micro-hyphéma vu en gonioscopie est plus fréquent.",
        "Surveiller la PIO (le sang bouche le trabéculum) et l’imprégnation hématique de la cornée; tête surélevée, éviter les AINS et l’aspirine si l’indication le permet."
      ] },
    { id: "OPH-340", caption: "Réaction fibrineuse dense en chambre antérieure au lendemain d’un tube de drainage",
      look: "Décris ce qui se trouve devant la pupille et l’état de la conjonctive.",
      reveal: [
        "Toile de filaments blanchâtres tendue devant la pupille : fibrine dans la chambre antérieure.",
        "Forte injection conjonctivale; petits fils de suture visibles en périphérie de la cornée.",
        "Premier jour après une chirurgie de tube pour glaucome non contrôlé, avec inflammation intraoculaire importante.",
        "Fibrine n’égale pas endophtalmite : elle répond aux corticostéroïdes topiques intensifs; douleur croissante, hypopyon, vitrite ou baisse brutale de vision imposent d’éliminer une endophtalmite."
      ] }
  ],

  "bonus-C": [
    { id: "OPH-325", caption: "Glaucome congénital primaire : stries de Haab dans la cornée (lampe à fente)",
      look: "Suis les flèches et décris les lignes qu’elles montrent dans la cornée.",
      reveal: [
        "Lignes fines, parallèles et un peu courbes dans la cornée, en haut à droite de la fente (flèches).",
        "Stries de Haab, ruptures de la membrane de Descemet causées par l’étirement de la cornée sous une PIO élevée chez le jeune enfant.",
        "Signes d’appel : larmoiement, photophobie, blépharospasme, cornée grande et trouble (buphtalmie).",
        "Référer d’urgence en glaucome pédiatrique : le traitement est surtout chirurgical (goniotomie, trabéculotomie)."
      ] }
  ]
});

G.OPH.photoPairs = (G.OPH.photoPairs || []).concat([
  { key: "a-papille", normal: "OPH-202", patho: "OPH-203",
    note: "Même source (guide du glaucome EyeRounds) et même examen : rétinophotographie couleur centrée sur la papille, cadrage semblable. C/D documentés : 0,3 (OPH-202) contre 0,9 (OPH-203). Comparer l’épaisseur de l’anneau neurorétinien et l’étendue de l’excavation pâle; patients et tailles de disque différents." }
]);

G.OPH.quiz = (G.OPH.quiz || []).concat([

  { id: "A-301", module: "A", topic: "a-examen", type: "image", level: 1, trap: false,
    stem: "Suivi d’un suspect de glaucome. Sur la rétinophotographie, la flèche montre une trouvaille au bord de la papille. Quelle est sa signification principale ?",
    figure: { type: "photo", id: "OPH-204" },
    options: [
      "Une anomalie vasculaire congénitale, sans portée pour le glaucome",
      "Le signe d’un œdème papillaire qui impose une imagerie cérébrale",
      "Un signe de neuropathie glaucomateuse active ou qui progresse",
      "Une complication attendue des gouttes de prostaglandine"
    ],
    answer: 2,
    explain: "Petite hémorragie en flammèche à cheval sur le bord du disque : hémorragie papillaire (de Drance). Elle signale un glaucome qui progresse et précède souvent une encoche au même endroit.",
    deep: "C’est une hémorragie papillaire (disc hemorrhage, de Drance) : petite hémorragie en flammèche à cheval sur le bord du disque, dans la couche des fibres nerveuses. Elle signale un glaucome actif ou qui progresse, surtout dans le glaucome à pression normale, et précède souvent une encoche et un défaut de champ au même endroit. Elle se résorbe en quelques semaines à quelques mois : la noter, la photographier, revoir le champ et la cible de PIO.",
    why: [
      "Faux : une hémorragie acquise au bord du disque n’est pas une variante congénitale; elle doit être notée et suivie.",
      "Faux : l’œdème papillaire donne un disque surélevé aux bords flous, souvent aux deux yeux; ici le bord est net et l’hémorragie est isolée.",
      "Exact : marqueur de progression; revoir le champ visuel, l’OCT et la cible de PIO.",
      "Faux : les prostaglandines donnent rougeur, pousse des cils et pigmentation, pas d’hémorragie papillaire."
    ] },

  { id: "A-302", module: "A", topic: "a-examen", type: "image", level: 2, trap: true,
    stem: "Gonioscopie de routine chez un patient asymptomatique, PIO normale. En haut du miroir, observe la jonction entre la périphérie de l’iris et la paroi de l’angle. Quelle est l’interprétation la plus juste ?",
    figure: { type: "photo", id: "OPH-312" },
    options: [
      "Procès iriens : variante normale, sans traitement ni suivi particulier",
      "Synéchies antérieures périphériques : iridotomie au laser à prévoir",
      "Néovaisseaux de l’angle : anti-VEGF et photocoagulation à organiser",
      "Récession de l’angle : séquelle de contusion à suivre toute la vie"
    ],
    answer: 0,
    explain: "Filaments fins, en dentelle, qui laissent voir les structures de l’angle derrière eux : procès iriens, variante normale. Les synéchies sont larges, opaques, masquent l’angle et persistent à l’indentation.",
    deep: "Les fins filaments bruns en dentelle qui partent de la périphérie de l’iris et montent sur la paroi de l’angle sans la cacher sont des procès iriens (iris processes), une variante normale fréquente. Ils laissent voir les structures derrière eux, contrairement aux synéchies antérieures périphériques, larges et opaques, qui masquent l’angle et persistent à l’indentation.",
    why: [
      "Exact : fins et ajourés, ils n’empêchent pas de voir les structures de l’angle; aucune conduite particulière.",
      "Faux : une synéchie est une adhérence large et opaque qui cache l’éperon et le trabéculum et ne s’ouvre pas à l’indentation. Erreur classique.",
      "Faux : les néovaisseaux sont rouges, fins et ramifiés, franchissent l’éperon et s’accompagnent souvent de vaisseaux à la marge pupillaire.",
      "Faux : la récession montre une bande ciliaire anormalement large, souvent avec des procès iriens déchirés, après un traumatisme."
    ] },

  { id: "A-303", module: "A", topic: "a-examen", type: "image", level: 1, trap: false,
    stem: "Consultation pour « suspicion de glaucome » après un champ visuel anormal. Voici les champs cinétiques de Goldmann, un par œil. Comment nommes-tu ce déficit, et où se trouve la lésion ?",
    figure: { type: "photo", id: "OPH-283" },
    options: [
      "Hémianopsie bitemporale : chiasma optique",
      "Hémianopsie homonyme gauche : voies visuelles gauches, derrière le chiasma",
      "Déficit altitudinal des deux yeux : les deux nerfs optiques",
      "Hémianopsie homonyme gauche : voies visuelles droites, derrière le chiasma"
    ],
    answer: 3,
    explain: "Les deux yeux perdent la même moitié (gauche) et le défaut s’arrête sur le méridien vertical : hémianopsie homonyme gauche. Chaque côté du cerveau voit le champ opposé : la lésion est à droite, derrière le chiasma.",
    why: [
      "Une atteinte du chiasma fait perdre les deux moitiés temporales (externes), pas la même moitié dans les deux yeux.",
      "Bon nom, mauvais côté : chaque côté du cerveau voit le champ opposé ; une perte à gauche vient des voies droites.",
      "Un déficit altitudinal est limité par le méridien horizontal (moitié du haut ou du bas), pas par le vertical.",
      "Exact : même moitié gauche perdue aux deux yeux, limite verticale nette = lésion rétrochiasmatique droite."
    ] },

  { id: "B-301", module: "B", topic: "c-bacterienne", type: "image", level: 3, trap: true,
    stem: "Ulcère cornéen central qui évolue depuis quelques jours. Un collègue regarde l’œil et affirme : « Avec ces petites lésions autour, c’est un champignon; on commence la natamycine. » Quelle est la meilleure réponse ?",
    figure: { type: "photo", id: "OPH-333" },
    options: [
      "D’accord : les infiltrats satellites sont pathognomoniques d’une kératite fongique",
      "Pas si vite : grattage pour Gram et cultures avant de fixer le traitement",
      "Inutile de gratter : couvrir d’emblée bactéries et champignons sans prélèvement",
      "Attendre une microscopie confocale avant tout traitement ou prélèvement"
    ],
    answer: 1,
    explain: "Les infiltrats satellites évoquent un champignon, mais se voient aussi avec des bactéries, l’Acanthamoeba ou des mycobactéries. Aucun aspect n’est pathognomonique : on gratte (Gram, cultures) avant de fixer le traitement.",
    deep: "Les infiltrats satellites (petits foyers séparés de l’ulcère principal) évoquent classiquement un champignon, mais ont aussi été décrits avec des bactéries (dont le Pseudomonas), l’Acanthamoeba et des mycobactéries atypiques. Dans ce dossier, il s’agissait d’une kératite bactérienne à bacilles Gram négatif, cultures négatives. Un ulcère central de plus de 2 mm impose un grattage pour frottis et cultures (bactéries et champignons) avant de fixer le traitement.",
    why: [
      "Faux : piège classique. Les satellites sont suggestifs, pas pathognomoniques; ici, c’était une kératite bactérienne.",
      "Exact : le grattage (Gram, cultures bactériennes et fongiques) guide le traitement; on débute ensuite les fortifiés et on ajuste.",
      "Faux : sans prélèvement, on ne pourra pas ajuster le traitement si l’ulcère s’aggrave; la règle 1-2-3 impose les cultures.",
      "Faux : la confocale aide pour l’Acanthamoeba ou les champignons, mais n’est pas offerte partout et ne doit retarder ni le grattage ni le traitement."
    ] },

  { id: "B-302", module: "B", topic: "c-herpes", type: "image", level: 2, trap: false,
    stem: "Antécédent de kératite herpétique épithéliale traitée il y a plusieurs mois. L’œil est blanc et indolore; la fluorescéine ne colore aucune lésion. Voici l’aspect de la cornée à la lampe à fente. Quelle est la conduite la plus appropriée ?",
    figure: { type: "photo", id: "OPH-343" },
    options: [
      "Rassurer : cicatrices inactives; prophylaxie si récidives fréquentes",
      "Valacyclovir 500 mg TID pendant 7 à 10 jours pour une récidive épithéliale",
      "Débridement des lésions, puis trifluridine 1 % neuf fois par jour",
      "Prednisolone 1 % aux 2 heures pour une kératite stromale immune active"
    ],
    answer: 0,
    explain: "Opacités grises ramifiées, sans prise de fluorescéine, dans un œil calme : dendrites fantômes, cicatrices d’anciens ulcères. Ce n’est pas une infection active. La prophylaxie orale dépend de la fréquence des récidives.",
    deep: "Ces opacités grisâtres ramifiées, sans prise de fluorescéine dans un œil calme, sont des dendrites fantômes (ghost dendrites) : infiltration et cicatrice sous-épithéliales résiduelles à l’endroit d’anciens ulcères dendritiques. Ce n’est pas une infection active. On documente, on surveille et on discute la prophylaxie orale (acyclovir 400 mg BID, HEDS) si les récidives sont fréquentes.",
    why: [
      "Exact : cicatrice inactive; la prophylaxie dépend du nombre de récidives, pas de la cicatrice elle-même.",
      "Faux : une dendrite active prend la fluorescéine (ulcère ramifié avec bulbes terminaux); ici rien ne se colore.",
      "Faux : débridement et trifluridine visent un ulcère épithélial actif; la trifluridine est en plus toxique pour l’épithélium.",
      "Faux : une kératite stromale immune donne œdème et infiltrat stromal avec inflammation; ici l’œil est calme."
    ] },

  { id: "B-303", module: "B", topic: "c-greffe", type: "image", level: 3, trap: false,
    stem: "Trois mois après une DSAEK pour une dystrophie de Fuchs. La banque d’yeux avait signalé une culture positive à Candida albicans sur la collerette du donneur, et un antifongique préventif a été donné. Voici l’aspect actuel. Que faut-il retenir ?",
    figure: { type: "photo", id: "OPH-331" },
    options: [
      "Des points de Kaye bénins : poursuivre le suivi habituel de la greffe",
      "Un rejet endothélial : corticostéroïdes topiques intensifs seuls",
      "Une infection de l’interface, rebelle aux gouttes : chirurgie possible",
      "Une infection de surface qui guérit en quelques jours d’antifongique topique"
    ],
    answer: 2,
    explain: "Taches blanc crème à l’interface d’une greffe lamellaire, donneur positif à Candida : infection de l’interface. Cette poche fermée est mal atteinte par les gouttes ; une chirurgie est parfois nécessaire.",
    deep: "Les petites taches blanches crémeuses en périphérie de la greffe correspondent, dans ce contexte, à des colonies de Candida dans l’interface entre le greffon DSAEK et la cornée du receveur. Cette poche fermée est mal atteinte par les gouttes : l’infection a résisté au traitement médical, a récidivé après une nouvelle DSAEK et du voriconazole intracamérulaire, et seule une greffe transfixiante l’a éradiquée.",
    why: [
      "Faux : les points de Kaye sont de fins points épithéliaux en avant des sutures d’une greffe transfixiante, sans infiltrat blanc profond.",
      "Faux : le rejet endothélial donne des précipités sur le greffon, une ligne de rejet et un œdème; des stéroïdes seuls aggraveraient une infection fongique.",
      "Exact : l’interface protège le champignon; un échange de greffon ou une greffe transfixiante sont parfois nécessaires.",
      "Faux : l’infection est profonde, dans l’interface, pas en surface; elle ne guérit pas en quelques jours de gouttes."
    ] },

  { id: "B-304", module: "B", topic: "c-keratocone", type: "image", level: 1, trap: false,
    stem: "Patient connu pour un kératocône, déjà opéré. Voici l’aspect de la cornée en éclairage diffus. Quel énoncé sur ce traitement est exact ?",
    figure: { type: "photo", id: "OPH-371" },
    options: [
      "Ce sont des lentilles intraoculaires phaques placées devant l’iris",
      "Ces segments stabilisent à eux seuls la maladie, comme la réticulation",
      "Ce sont les sutures d’une greffe transfixiante pour kératocône avancé",
      "Ces segments régularisent la cornée sans arrêter l’évolution"
    ],
    answer: 3,
    explain: "Deux segments d’anneaux dans le stroma : ils aplatissent et régularisent la cornée centrale pour améliorer la vision. Ils ne stabilisent pas la maladie ; si elle progresse, c’est la réticulation (CXL) qui l’arrête.",
    deep: "On voit deux segments d’anneaux intracornéens (intrastromal corneal ring segments) implantés dans le stroma en périphérie moyenne. Ils aplatissent et régularisent la cornée centrale pour réduire l’astigmatisme irrégulier et améliorer la vision ou la tolérance aux lentilles. Ils ne stabilisent pas la maladie : si le kératocône progresse, on associe la réticulation du collagène (CXL).",
    why: [
      "Faux : un implant phaque est dans l’œil, devant ou derrière l’iris, avec une optique centrale et des haptiques; ici les segments sont dans la cornée.",
      "Faux : seule la réticulation (CXL) freine la progression; les anneaux corrigent la forme.",
      "Faux : les sutures d’une greffe sont de fins fils noirs radiaires autour d’un greffon; ici ce sont deux arcs transparents.",
      "Exact : effet de remodelage; la CXL reste le traitement qui stabilise."
    ] },

  { id: "B-305", module: "B", topic: "c-pterygion", type: "image", level: 1, trap: false,
    stem: "Lésion à la jonction de la cornée et de la conjonctive, qui grossit depuis quelques mois; forte exposition solaire au travail. Voici l’aspect en éclairage diffus. Quel diagnostic faut-il évoquer en premier ?",
    figure: { type: "photo", id: "OPH-353" },
    options: [
      "Ptérygion typique, à surveiller sans biopsie",
      "Néoplasie épidermoïde de la surface oculaire",
      "Pinguécula enflammée (pingueculite)",
      "Nævus conjonctival amélanotique bénin"
    ],
    answer: 1,
    explain: "Masse gélatineuse grisâtre à cheval sur le limbe, front irrégulier sur la cornée, vaisseaux nourriciers tortueux, croissance récente : néoplasie de la surface oculaire. Un ptérygion est triangulaire, charnu et évolue lentement.",
    deep: "Masse gélatineuse grisâtre, surélevée, à cheval sur le limbe, qui envahit la cornée avec un front irrégulier et des vaisseaux nourriciers tortueux : c’est l’aspect d’une néoplasie épidermoïde de la surface oculaire (ocular surface squamous neoplasia, OSSN), ici un carcinome épidermoïde. Le principal facteur de risque est l’exposition aux UV (aussi VIH, VPH, immunosuppression). Conduite : référence en cornée ou oncologie oculaire pour biopsie-exérèse ou traitement topique.",
    why: [
      "Faux : le ptérygion est un triangle charnu à tête plate qui avance régulièrement; une lésion gélatineuse à front irrégulier impose d’éliminer une néoplasie.",
      "Exact : aspect gélatineux, vaisseaux nourriciers et croissance récente; la biopsie confirmera.",
      "Faux : la pinguécula est un petit dépôt jaunâtre qui reste sur la conjonctive sans envahir la cornée.",
      "Faux : un nævus est habituellement stable, souvent pigmenté ou kystique, et n’envahit pas la cornée."
    ] },

  { id: "B-306", module: "B", topic: "c-fuchs", type: "image", level: 3, trap: false,
    stem: "Œil aphaque et vitrectomisé. Un mois après une injection intravitréenne pour un œdème maculaire, la cornée devient œdémateuse. Le patient dit voir « quelque chose de blanc » au réveil. Après quelques minutes la tête penchée vers le bas, voici l’image. Quelle est la conduite ?",
    figure: { type: "photo", id: "OPH-354" },
    options: [
      "Retirer rapidement l’implant de la chambre antérieure",
      "Rassurer et revoir dans un mois, l’œdème va régresser",
      "Prescrire du chlorure de sodium 5 % et observer l’œdème",
      "Planifier d’emblée une DMEK sans toucher à l’implant"
    ],
    answer: 0,
    explain: "Le bâtonnet blanc en chambre antérieure est l’implant de dexaméthasone, passé vers l’avant faute de capsule. Au contact de l’endothélium, il entretient l’œdème, qui peut devenir permanent : retrait rapide.",
    deep: "Le bâtonnet blanc dans la chambre antérieure inférieure est un implant intravitréen de dexaméthasone (Ozurdex) qui a migré vers l’avant, faute de barrière capsulaire chez cet œil aphaque. Au contact de l’endothélium, il entretient un œdème cornéen qui peut devenir permanent : il a été retiré d’urgence. Toujours la notice du fabricant le contre-indique chez l’aphaque et en présence d’un implant de chambre antérieure sans capsule postérieure intacte.",
    why: [
      "Exact : retrait chirurgical rapide pour limiter la décompensation endothéliale.",
      "Faux : attendre laisse l’implant au contact de l’endothélium et aggrave la décompensation.",
      "Faux : le salin hypertonique soulage l’œdème épithélial, mais ne traite pas la cause; l’implant continue de léser l’endothélium.",
      "Faux : greffer sans retirer l’implant exposerait le nouveau greffon à la même atteinte; on retire d’abord la cause, puis on réévalue."
    ] },

  { id: "C-301", module: "C", topic: "g-gpn", type: "image", level: 2, trap: false,
    stem: "Glaucome à pression normale : PIO de 12 à 20 mmHg sur une courbe diurne, angles ouverts, maladie de Raynaud. Voici l’OCT des fibres nerveuses. Selon l’essai CNTGS, quelle stratégie est la mieux appuyée si la maladie progresse ?",
    figure: { type: "photo", id: "OPH-298" },
    options: [
      "Viser une PIO sous 21 mmHg, seuil statistique de normalité",
      "Aucun traitement hypotenseur, puisque la PIO est déjà normale",
      "Abaisser la PIO d’environ 30 % sous la valeur de base",
      "Remplacer les gouttes par un bloqueur calcique oral"
    ],
    answer: 2,
    explain: "Même avec une PIO « normale », la baisser protège le nerf. Dans CNTGS, une baisse de 30 % a réduit la progression d’environ 35 % à 12 %. Un patient stable peut être observé ; s’il progresse, on vise −30 %.",
    deep: "L’OCT montre un amincissement de la couche des fibres nerveuses aux deux yeux (moyenne 74 µm à droite et 62 µm à gauche). Dans le GPN, la PIO compte quand même : dans CNTGS, une baisse de 30 % de la PIO a réduit la progression d’environ 35 % à 12 % (analyse per protocole). Comme bien des patients non traités ne progressent pas, on peut observer un patient stable, mais une progression documentée justifie de traiter.",
    why: [
      "Faux : la PIO est déjà sous 21 mmHg; la cible se fixe en pourcentage de baisse à partir de la valeur de base.",
      "Faux : la PIO contribue même quand elle est « normale »; CNTGS montre le bénéfice d’une baisse chez ceux qui progressent.",
      "Exact : c’est la cible de l’essai CNTGS (Collaborative Normal-Tension Glaucoma Study).",
      "Faux : les facteurs vasculaires sont étudiés, mais aucun médicament oral ne remplace la baisse de PIO, seul traitement prouvé."
    ] },

  { id: "C-302", module: "C", topic: "g-neovasculaire", type: "image", level: 1, trap: false,
    stem: "Trois mois après une occlusion de l’artère centrale de la rétine, la PIO monte. Voici l’iris en éclairage diffus (cercle déjà tracé sur la photo). Quelle est la conduite la plus appropriée ?",
    figure: { type: "photo", id: "OPH-319" },
    options: [
      "Iridotomie périphérique au laser pour rouvrir l’angle",
      "Trabéculoplastie sélective au laser en première intention",
      "Pilocarpine 2 % pour ouvrir l’angle et contrôle dans six mois",
      "Gonioscopie, anti-VEGF et photocoagulation panrétinienne"
    ],
    answer: 3,
    explain: "Fins vaisseaux en dentelle près du bord de la pupille : néovascularisation de l’iris, due à l’ischémie rétinienne. On évalue l’angle par gonioscopie, on bloque le VEGF et on traite l’ischémie par laser.",
    deep: "Les fins vaisseaux en dentelle à la surface de l’iris, près de la marge pupillaire, sont une néovascularisation irienne. Après une occlusion de l’artère centrale de la rétine, la rétine ischémique libère du VEGF; la néovascularisation et le glaucome néovasculaire sont apparus vers 3 mois et ont été traités par bévacizumab intravitréen. Il faut une gonioscopie (néovaisseaux de l’angle), le traitement de l’ischémie (anti-VEGF, photocoagulation panrétinienne) et le contrôle de la PIO.",
    why: [
      "Faux : la fermeture néovasculaire est synéchiale (membrane fibrovasculaire), pas un blocage pupillaire; l’iridotomie ne l’ouvre pas.",
      "Faux : la SLT est inefficace quand le trabéculum est couvert de néovaisseaux et peut aggraver l’inflammation.",
      "Faux : la pilocarpine augmente l’inflammation et la congestion; on l’évite dans le glaucome néovasculaire.",
      "Exact : évaluer l’angle, bloquer le VEGF et traiter l’ischémie à la source."
    ] },

  { id: "C-303", module: "C", topic: "g-pxf", type: "image", level: 2, trap: false,
    stem: "Glaucome pseudo-exfoliatif connu, consultation pour cataracte. Voici la pupille dilatée en éclairage diffus. Quelle trouvaille modifie le plus la planification chirurgicale ?",
    figure: { type: "photo", id: "OPH-321" },
    options: [
      "Une cataracte nucléaire dense qui exigera plus d’énergie au phaco",
      "Un cristallin descendu vers le bas par faiblesse des zonules",
      "Une membrane pupillaire persistante qui gênera le capsulorhexis",
      "Une synéchie postérieure qui empêchera une bonne dilatation"
    ],
    answer: 1,
    explain: "Le bord supérieur du cristallin traverse la pupille : le cristallin a glissé vers le bas, les zonules supérieures ont lâché. C’est la trouvaille qui change le plan : il faut des dispositifs de soutien capsulaire.",
    deep: "Le bord supérieur du cristallin traverse la pupille dilatée : le cristallin a glissé vers le bas. il s’agit d’une luxation spontanée avec déhiscence et désinsertion zonulaires supérieures, les zonules étant couvertes de matériel fibrillaire blanc. La pseudo-exfoliation fragilise les zonules : il faut prévoir une chirurgie à risque (dispositifs de soutien capsulaire, voire extraction et fixation d’une lentille hors du sac).",
    why: [
      "Faux : la densité du noyau compte, mais le déplacement du cristallin est la trouvaille qui change la technique et le matériel.",
      "Exact : zonules rompues en haut; prévoir anneau de tension, crochets capsulaires ou une autre stratégie.",
      "Faux : le bord en arc qui traverse la pupille est l’équateur du cristallin, pas une membrane issue de l’iris.",
      "Faux : la pupille est ronde, sans encoche ni adhérence visible entre l’iris et le cristallin."
    ] },

  { id: "C-304", module: "C", topic: "g-secondaires", type: "image", level: 2, trap: false,
    stem: "Uvéite antérieure avec PIO élevée. Voici l’aspect de la cornée en éclairage diffus. Quelle catégorie de causes ces précipités doivent-ils faire chercher en priorité ?",
    figure: { type: "photo", id: "OPH-350" },
    options: [
      "Les uvéites granulomateuses : sarcoïdose, tuberculose, syphilis, herpès",
      "Les uvéites liées au HLA-B27 : spondylarthrite, maladie inflammatoire de l’intestin",
      "Le syndrome de Posner-Schlossman, sans autre bilan nécessaire",
      "Une réaction toxique aux gouttes antiglaucomateuses avec agent de conservation"
    ],
    answer: 0,
    explain: "Précipités nombreux, gros, arrondis et jaunâtres : « graisse de mouton ». Ils signent une uvéite granulomateuse : chercher sarcoïdose, tuberculose, syphilis ou herpès avant une corticothérapie prolongée.",
    deep: "Ces précipités rétrocornéens nombreux, arrondis, jaunâtres et plus gros que des précipités fins sont, des précipités en graisse de mouton (mutton-fat keratic precipitates). Ils signent une uvéite granulomateuse : chercher sarcoïdose, tuberculose, syphilis, uvéite herpétique (HSV/VZV) ou Vogt-Koyanagi-Harada. Le bilan oriente le traitement, car une corticothérapie sans couverture adéquate peut aggraver une infection.",
    why: [
      "Exact : graisse de mouton = uvéite granulomateuse; bilan ciblé avant une corticothérapie prolongée.",
      "Faux : l’uvéite HLA-B27 est typiquement aiguë, unilatérale et très inflammatoire, avec précipités fins, fibrine ou hypopyon.",
      "Faux : le Posner-Schlossman donne quelques précipités fins, peu nombreux, avec une PIO très élevée; ici ils sont nombreux et plus gros.",
      "Faux : la toxicité des gouttes atteint la surface (kératite ponctuée, conjonctive), pas l’endothélium."
    ] },

  { id: "C-305", module: "C", topic: "g-postop", type: "image", level: 1, trap: false,
    stem: "Deux semaines après une chirurgie MIGS interrompue en cours de route. Voici l’œil en photographie externe. Quel est le principal risque à surveiller dans les jours qui viennent ?",
    figure: { type: "photo", id: "OPH-315" },
    options: [
      "Une endophtalmite, presque certaine devant ce sang",
      "Une hypotonie par fuite de la bulle de filtration",
      "Hausse de PIO et imprégnation hématique de la cornée",
      "Une kératite à Acanthamoeba liée au geste chirurgical"
    ],
    answer: 2,
    explain: "Le caillot rouge foncé en chambre antérieure est un hyphéma. Les globules rouges bouchent le trabéculum : la PIO monte. Une PIO élevée prolongée avec beaucoup de sang peut teinter la cornée.",
    deep: "Le caillot rouge foncé dans la chambre antérieure est un hyphéma, ici en voie de rétraction deux semaines après une tentative d’iStent interrompue à cause du saignement. Les globules rouges bouchent le trabéculum et font monter la PIO; une PIO élevée prolongée avec beaucoup de sang peut teinter la cornée (imprégnation hématique). Surveillance de la PIO, tête surélevée, cycloplégique et corticostéroïde topique; lavage chirurgical si la PIO reste incontrôlée ou si la cornée commence à se teinter.",
    why: [
      "Faux : le sang n’est pas un signe d’infection; l’endophtalmite donne douleur croissante, hypopyon et vitrite.",
      "Faux : l’iStent ne crée pas de bulle de filtration; il dérive l’humeur aqueuse vers le canal de Schlemm.",
      "Exact : sang dans le trabéculum = PIO élevée; la cornée peut se teinter si la PIO reste haute avec un gros hyphéma.",
      "Faux : l’Acanthamoeba est surtout liée aux lentilles cornéennes et à l’eau, pas à une chirurgie intraoculaire."
    ] },

  { id: "C-306", module: "C", topic: "g-postop", type: "image", level: 3, trap: true,
    stem: "Premier jour après la pose d’un tube de drainage pour un glaucome non contrôlé. Voici l’aspect à la lampe à fente en éclairage diffus. Quelle est l’interprétation la plus probable et la conduite ?",
    figure: { type: "photo", id: "OPH-340" },
    options: [
      "Endophtalmite aiguë : ponction et injections intravitréennes immédiates",
      "Réaction fibrineuse : stéroïde topique intensif et suivi rapproché",
      "Hyphéma organisé : lavage chirurgical de la chambre antérieure",
      "Mal-direction de l’aqueuse : cycloplégique et laser du vitré antérieur"
    ],
    answer: 1,
    explain: "Toile de filaments blanchâtres devant la pupille au lendemain d’une chirurgie : réaction fibrineuse. Elle répond aux stéroïdes topiques intensifs. On évoque plutôt l’endophtalmite devant une douleur croissante et un hypopyon.",
    deep: "La toile de filaments blanchâtres tendue devant la pupille, au lendemain d’une chirurgie, est une réaction fibrineuse : l’inflammation postopératoire fait passer de la fibrine dans la chambre antérieure. Elle répond aux corticostéroïdes topiques intensifs (avec cycloplégique au besoin). Le piège : la confondre avec une endophtalmite, qu’on évoque plutôt devant une douleur croissante, un hypopyon, une vitrite ou une baisse brutale de vision, et qui impose ponction et antibiotiques intravitréens.",
    why: [
      "Faux : piège. Au jour 1, une fibrine sans hypopyon ni vitrite oriente vers l’inflammation; l’endophtalmite reste à éliminer si l’évolution se dégrade.",
      "Exact : réaction fibrineuse postopératoire; revoir dans 24 à 48 h pour s’assurer qu’elle régresse.",
      "Faux : un hyphéma est rouge, avec un niveau ou un caillot; la fibrine est blanche et filamenteuse.",
      "Faux : la mal-direction donne une chambre antérieure aplatie au centre comme en périphérie, avec une PIO normale ou élevée; la toile blanche devant la pupille n’en fait pas partie."
    ] }
]);
