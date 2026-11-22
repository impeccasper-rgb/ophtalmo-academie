var G = (typeof window !== 'undefined') ? window : globalThis;
G.OPH = G.OPH || {};

// Photos authentiques EyeRounds / University of Iowa (CC BY-NC-ND 3.0), affichées intactes.
// Les trouvailles (reveal) sont du texte placé à côté de l’image, positions décrites en mots.
// Exclues : OPH-185/186 (mal étiquetées), OPH-188 (même cliché qu’OPH-138), schémas OPH-012/015/119.
G.OPH.photos = {

  "c-secheresse": [
    { id: "OPH-029", caption: "Érosions épithéliales ponctuées diffuses dans une sécheresse sévère (fluorescéine, bleu cobalt)",
      look: "Décris la taille, le nombre et la répartition des points verts sur la cornée.",
      reveal: [
        "Fins points verts sur toute la cornée, centre compris : érosions épithéliales ponctuées (punctate epithelial erosions), cellules manquantes qui retiennent la fluorescéine.",
        "Atteinte diffuse, pas seulement au tiers inférieur : sécheresse importante (kératoconjonctivite sèche).",
        "TFOS DEWS III : plus de 5 points cornéens est un des signes diagnostiques, si le questionnaire OSDI-6 est ≥ 4.",
        "Chez le patient glaucomateux, penser aussi à la toxicité des gouttes avec agent de conservation."
      ] },
    { id: "OPH-022", caption: "Temps de rupture du film lacrymal : lignes sombres dans la fluorescéine (bleu cobalt)",
      look: "Quelques secondes après un clignement, le film coloré reste-t-il uniforme sur la cornée ?",
      reveal: [
        "Lignes et plages sombres sinueuses au centre de la cornée, devant la pupille : zones où le film lacrymal s’est rompu (tear breakup).",
        "Bande vert vif le long de la paupière inférieure : ménisque lacrymal coloré, la réserve de larmes.",
        "Lecture : on chronomètre du dernier clignement à la première tache sombre; moins de 10 secondes = film instable.",
        "Série chronologique d’un même patient (OPH-020 à OPH-022)."
      ] },
    { id: "OPH-023", caption: "Vert de lissamine : coloration conjonctivale diffuse, regard nasal (lampe à fente)",
      look: "Repère où le colorant vert se fixe : conjonctive, cornée, bord des paupières.",
      reveal: [
        "Ponctuations vertes sur toute la conjonctive bulbaire exposée (moitié droite de l’image) : cellules épithéliales dévitalisées ou mal protégées par le mucus.",
        "Liseré vert sur le bord libre de la paupière inférieure (en bas à gauche) : coloration du bord palpébral, autre signe retenu par TFOS DEWS III.",
        "Cornée (à gauche) peu colorée : le vert de lissamine (lissamine green) sert surtout pour la conjonctive; la fluorescéine reste le colorant de la cornée.",
        "Même patient qu’OPH-024 et OPH-025 (sécheresse sévère, trois directions du regard)."
      ] },
    { id: "OPH-018", caption: "Dysfonction meibomienne : sécrétion épaisse exprimée d’un orifice glandulaire (lampe à fente)",
      look: "Observe ce qui sort du bord libre lorsqu’on appuie doucement sur la paupière inférieure.",
      reveal: [
        "Bouchon blanc-jaunâtre épais au centre du bord libre inférieur (sous la cornée) : meibum altéré; normalement, la sécrétion est claire et huileuse.",
        "Bord libre irrégulier et vascularisé autour de l’orifice : inflammation du bord palpébral postérieur.",
        "Le meibum (lipides) ralentit l’évaporation des larmes : son obstruction donne une sécheresse évaporative (dysfonction meibomienne, meibomian gland dysfunction)."
      ] },
    { id: "OPH-019", caption: "Meibographie infrarouge de la paupière supérieure : glandes raccourcies et disparues",
      look: "Repère les bandes claires verticales dans la paupière éversée et juge leur longueur et leur nombre.",
      reveal: [
        "Même paupière supérieure éversée, en infrarouge : image rehaussée à gauche, image originale à droite.",
        "Courtes bandes blanchâtres tortueuses au centre de la paupière : glandes de Meibomius restantes, très raccourcies.",
        "Peu ou pas de glandes visibles aux deux extrémités de la paupière : perte glandulaire (gland dropout).",
        "La perte glandulaire est en général définitive : le traitement vise à préserver les glandes restantes."
      ] },
    { id: "OPH-016", caption: "Blépharite antérieure : squames et croûtes à la base des cils (lampe à fente)",
      look: "Regarde la base des cils sur le bord de cette paupière fermée.",
      reveal: [
        "Croûtes et squames jaunâtres accrochées à la base des cils, sur toute la longueur du bord libre (bas de l’image) : blépharite antérieure.",
        "Petits vaisseaux dilatés sur la peau du bord palpébral (en haut, au centre) : inflammation chronique.",
        "La blépharite entretient l’irritation et l’instabilité du film; chercher aussi des manchons autour des cils (Demodex), non affirmés ici."
      ] }
  ],

  "c-bacterienne": [
    { id: "OPH-070", caption: "Kératite à Pseudomonas : infiltrat central dense et injection intense (éclairage diffus)",
      look: "Évalue la taille, la position et la couleur de l’opacité cornéenne, puis la rougeur de l’œil.",
      reveal: [
        "Opacité blanc-jaunâtre dense qui occupe presque toute la cornée centrale : nécrose stromale suppurée, bien plus de 2 mm et dans l’axe visuel.",
        "Teinte jaune plus marquée dans la moitié inférieure de la lésion : exsudat mucopurulent adhérent, aspect classique du Pseudomonas.",
        "Injection conjonctivale et ciliaire diffuse sur 360° : inflammation intense.",
        "Règle 1-2-3 dépassée : grattage pour cultures puis antibiotiques fortifiés aux heures; Pseudomonas = première cause chez les porteurs de lentilles."
      ] },
    { id: "OPH-072", caption: "Kératite bactérienne ulcérée : défaut épithélial coloré et infiltrat (fluorescéine, lumière blanche)",
      look: "Distingue la zone qui prend la fluorescéine de l’opacité blanche située dessous.",
      reveal: [
        "Grande plage verte au centre de la cornée : défaut épithélial (ulcère) qui retient la fluorescéine.",
        "Opacité blanc-jaunâtre au centre, sous le défaut : infiltrat stromal fait de cellules inflammatoires et de bactéries.",
        "Sécrétions collées aux cils (en haut à droite) et conjonctive rouge : contexte infectieux actif.",
        "Mesurer séparément le défaut épithélial et l’infiltrat (en mm) permet de suivre la réponse au traitement."
      ] },
    { id: "OPH-071", caption: "Kératite à Pseudomonas vue en fente fine (lampe à fente)",
      look: "Suis l’arc lumineux de la fente à travers la cornée et compare le haut et le bas.",
      reveal: [
        "Arc lumineux épais et flou au travers de la cornée (au centre) : stroma infiltré et œdémateux, au lieu d’une coupe fine et nette.",
        "Plage jaune dense dans la partie inférieure : zone la plus infiltrée de l’abcès.",
        "La fente fine sert à estimer la profondeur de l’infiltrat et l’amincissement, deux éléments du pronostic et du risque de perforation."
      ] }
  ],

  "c-atypiques": [
    { id: "OPH-067", caption: "Kératite à Acanthamoeba : infiltrat stromal annulaire paracentral (éclairage diffus)",
      look: "Décris la forme de l’opacité stromale et ce qu’elle entoure.",
      reveal: [
        "Anneau blanc-gris paracentral qui entoure une zone centrale plus claire : infiltrat annulaire (ring infiltrate), stade stromal de la kératite amibienne.",
        "Conjonctive injectée et paupières gonflées : œil inflammatoire, souvent très douloureux.",
        "Diagnostic confirmé par microscopie confocale chez ce patient.",
        "Autres causes d’anneau stromal : HSV (anneau immunitaire), champignon, bactérie; le port de lentilles oriente vers l’amibe."
      ] },
    { id: "OPH-065", caption: "Kératite fongique récidivante sur greffe transfixiante : infiltrat et hypopyon (éclairage diffus)",
      look: "Repère le greffon, l’opacité centrale et ce qui se dépose au bas de la chambre antérieure.",
      reveal: [
        "Points de suture disposés en cercle en périphérie : greffe transfixiante faite pour la cicatrice dense d’une première kératite fongique.",
        "Plage dense colorée au centre-haut du greffon (teinte verte, probablement de la fluorescéine) : infiltrat récidivant.",
        "Croissant blanc au bas de la chambre antérieure, à 6 h : hypopyon (pus dans la chambre antérieure).",
        "Fusarium en culture : penser fongique après un traumatisme végétal, un port de lentilles ou un échec des antibiotiques."
      ] },
    { id: "OPH-066", caption: "Même patient en microscopie confocale : filaments fongiques ramifiés (Fusarium)",
      look: "Cherche des structures linéaires brillantes et regarde comment elles se divisent.",
      reveal: [
        "Lignes blanches fines et segmentées qui se ramifient (au centre et dans la moitié gauche) : hyphes de champignon filamenteux dans le stroma.",
        "Aspect en chapelet de certains filaments : hyphes cloisonnées (septées), compatibles avec le Fusarium confirmé en culture.",
        "Piège : les nerfs stromaux sont aussi brillants, mais plus épais, plus rectilignes et peu nombreux."
      ] },
    { id: "OPH-069", caption: "Acanthamoeba débutante chez un porteur de lentilles : anneaux concentriques discrets (éclairage diffus)",
      look: "Examine attentivement la cornée devant la pupille noire.",
      reveal: [
        "Fins anneaux grisâtres concentriques au centre, devant la pupille : infiltrat annulaire débutant, très discret.",
        "Œil presque blanc sur cette vue : la forme précoce est trompeuse et souvent prise pour une kératite herpétique.",
        "À ce stade, on peut aussi voir une épithéliopathie ponctuée, des pseudodendrites ou des infiltrats le long des nerfs (périnévrite radiaire)."
      ] },
    { id: "OPH-128", caption: "Microscopie confocale : kystes d’Acanthamoeba en points ronds très brillants",
      look: "Repère les petites structures rondes et très brillantes dispersées dans le champ.",
      reveal: [
        "Multiples points ronds hyperréflectifs, isolés ou en petits amas, partout dans l’image : kystes, la forme résistante de l’amibe.",
        "Formes plus irrégulières et moins nettes : trophozoïtes, la forme active.",
        "Examen rapide et non invasif, en complément du grattage (culture, PCR)."
      ] },
    { id: "OPH-129", caption: "Confocale chez un porteur de lentilles : Acanthamoeba et éléments fongiques (panneaux A à C)",
      look: "Lis chaque panneau : couche cornéenne examinée et éléments pointés par les flèches ou encadrés.",
      reveal: [
        "Panneau A (en haut à gauche) : endothélium aux cellules de tailles inégales (polymégathisme), probablement lié au port prolongé de lentilles; aucun kyste.",
        "Panneau B (en bas à gauche) : afflux de globules blancs (point rouge) près de kystes et d’éléments fongiques (encadré rouge).",
        "Panneau C (à droite) : kystes à double paroi (flèche blanche) et trophozoïtes (flèches noires) dans le stroma antérieur; le profil en profondeur (Z-scan) est en bas."
      ] }
  ],

  "c-herpes": [
    { id: "OPH-059", caption: "Kératite épithéliale herpétique (HSV) : ulcère ramifié coloré par la fluorescéine (bleu cobalt)",
      look: "Observe la forme de la zone verte et l’extrémité de ses branches.",
      reveal: [
        "Lésion verte ramifiée au centre de la cornée : ulcère épithélial dendritique, dont le fond retient la fluorescéine.",
        "Renflements au bout des branches : bulbes terminaux (terminal bulbs), typiques du virus herpès simplex (HSV).",
        "Branches larges qui confluent au centre : sous corticostéroïdes topiques au long cours (ici, après une greffe endothéliale DLEK), une dendrite peut s’élargir en ulcère géographique.",
        "Même patient qu’OPH-058 (même visite) et OPH-060 (après guérison)."
      ] },
    { id: "OPH-057", caption: "Dendrite herpétique en lumière blanche : bulbes terminaux, fort grossissement (lampe à fente)",
      look: "Cherche la petite lésion ramifiée devant la pupille noire.",
      reveal: [
        "Lésion ramifiée grisâtre, à peine verdâtre, en bas et à gauche du centre de la pupille : dendrite épithéliale.",
        "Petits renflements brillants au bout des branches : bulbes terminaux.",
        "Bords surélevés par un épithélium gonflé de cellules infectées; traitement : antiviral oral ou topique, avec ou sans débridement."
      ] },
    { id: "OPH-061", caption: "Kératite disciforme : œdème stromal central en disque (éclairage diffus)",
      look: "Compare la transparence de la cornée au centre et en périphérie.",
      reveal: [
        "Zone ronde, grisâtre et trouble au centre de la cornée, devant la pupille : œdème stromal en disque (kératite disciforme, disciform keratitis).",
        "Périphérie cornéenne transparente, iris bien visible tout autour : atteinte localisée.",
        "Mécanisme : endothéliite (réaction immunitaire, HSV ou VZV) plutôt qu’une infection de l’épithélium; chercher des précipités kératiques sous l’œdème.",
        "Traitement usuel : corticostéroïde topique sous couverture antivirale orale."
      ] },
    { id: "OPH-058", caption: "Même patient qu’OPH-059 en dispersion sclérale : ulcère et injection ciliaire intense",
      look: "Avec la lumière posée au limbe, cherche le contour de la lésion au centre de la cornée.",
      reveal: [
        "Bande lumineuse au limbe, à droite : dispersion sclérale (sclerotic scatter), la lumière diffuse dans la cornée et fait ressortir les opacités.",
        "Contour irrégulier grisâtre au centre, devant la pupille : ulcère dendritique herpétique aux branches larges (le même ulcère qu’OPH-059).",
        "Anneau rouge intense autour du limbe : injection ciliaire, signe d’inflammation cornéenne ou intraoculaire.",
        "Arc fin en périphérie inférieure et gauche : probablement le bord de la greffe endothéliale (DLEK)."
      ] },
    { id: "OPH-060", caption: "Même patient après guérison : cicatrice « fantôme » sous l’ancien ulcère (lampe à fente)",
      look: "Compare la zone centrale éclairée par la fente avec l’ulcère actif d’OPH-059.",
      reveal: [
        "Voile grisâtre granuleux au centre, dans la partie éclairée par la fente (moitié droite de la pupille) : infiltration sous-épithéliale et cicatrice résiduelles (ghost dendrite).",
        "Épithélium refermé : ce n’est pas une infection active et il n’y a plus d’ulcère à colorer.",
        "Arc fin à gauche : probablement le bord de la greffe endothéliale (DLEK), comme sur OPH-058."
      ] },
    { id: "OPH-064", caption: "Pseudodendrites du zona (VZV) : lésions ramifiées surélevées sans bulbes terminaux",
      look: "Compare ces lésions à une dendrite herpétique : relief, extrémités et intensité de la coloration.",
      reveal: [
        "Lignes ramifiées verdâtres au centre et en bas de la cornée : pseudodendrites faites de cellules épithéliales gonflées, en relief.",
        "Pas de renflement aux extrémités ni d’ulcération centrale : différence clé avec la dendrite du HSV.",
        "Coloration faible, surtout sur les bords : la lésion est en relief, pas en creux.",
        "Après un zona ophtalmique, surveiller l’hypoesthésie cornéenne (risque neurotrophique) et les plaques muqueuses tardives."
      ] }
  ],

  "c-keratocone": [
    { id: "OPH-034", caption: "Kératocône de profil : cornée bombée en cône (lampe à fente, regard latéral)",
      look: "Regarde la courbure de la cornée vue de côté et compare-la à un dôme régulier.",
      reveal: [
        "Cornée projetée vers l’avant en pointe (à gauche de l’image) : ectasie conique, la cornée s’amincit et bombe au lieu de garder une courbure régulière.",
        "La vue de profil, patient regardant de côté, est la façon la plus simple de voir un cône avancé.",
        "Même série qu’OPH-035, probablement le même patient (signe de Munson au regard vers le bas)."
      ] },
    { id: "OPH-120", caption: "Kératocône au Pentacam : courbure, élévations antérieure et postérieure, pachymétrie (quatre cartes)",
      look: "Pour chaque carte, cherche la zone la plus chaude et compare le haut et le bas.",
      reveal: [
        "Courbure axiale (en haut à gauche) : cambrure paracentrale inférieure jusqu’à 56 D, alors que le haut est à environ 38–39 D.",
        "Pachymétrie (en bas à gauche) : 516 µm au centre, point le plus mince (cercle) décentré en bas et en temporal; 622 µm en haut contre 558 µm en bas.",
        "Élévations antérieure (en haut à droite) et postérieure (en bas à droite) : îlot chaud paracentral inférieur, au-dessus de la sphère de référence.",
        "Les couleurs seules ne suffisent pas : lire échelles et valeurs; ici, la combinaison oriente vers un kératocône."
      ] },
    { id: "OPH-039", caption: "Anneau de Fleischer autour de la base du cône (kératocône avancé, lampe à fente)",
      look: "Repère la cicatrice près du centre, puis cherche l’anneau qui entoure la base du cône.",
      reveal: [
        "Anneau de Fleischer (Fleischer ring) bien visible qui encercle la base du cône : dépôt de fer dans l’épithélium basal, brun-jaune en lumière blanche.",
        "Pour ne pas le confondre avec le bord de l’iris derrière lui, le localiser en fente fine : l’anneau est dans la cornée, en avant de la chambre antérieure.",
        "Traînée blanchâtre au centre, un peu à gauche : cicatrice stromale de l’apex, séquelle d’épisodes d’hydrops.",
        "Le bleu cobalt rend l’anneau plus visible (il paraît sombre); des stries de Vogt au centre du cône sont rapportées.",
        "À ne pas confondre avec l’anneau de Kayser-Fleischer (cuivre dans la Descemet périphérique, maladie de Wilson)."
      ] },
    { id: "OPH-041", caption: "Stries de Vogt : fines lignes parallèles dans le stroma profond du cône (gros plan)",
      look: "Dans la zone éclairée, cherche des lignes fines, parallèles et serrées.",
      reveal: [
        "Faisceau de lignes blanchâtres fines, parallèles et obliques dans la moitié droite de la zone éclairée : stries de Vogt (Vogt striae), plis du stroma profond et de la Descemet sous tension.",
        "Elles s’effacent temporairement quand on appuie doucement sur le globe; leur orientation suit l’axe le plus cambré.",
        "Bande verte horizontale en bas : reflet ou coloration, ce n’est pas le signe recherché."
      ] },
    { id: "OPH-035", caption: "Signe de Munson : paupière inférieure déformée par le cône au regard vers le bas",
      look: "Le patient regarde vers le bas : observe la forme du bord de la paupière inférieure.",
      reveal: [
        "Bord de la paupière inférieure soulevé et bombé (en V) là où passe la cornée, au centre en bas : signe de Munson (Munson sign).",
        "Il traduit un cône avancé qui repousse la paupière : signe tardif, inutile pour un diagnostic précoce.",
        "Même série qu’OPH-034, probablement le même patient (cône vu de profil)."
      ] },
    { id: "OPH-043", caption: "Hydrops aigu : œdème cornéen apical blanc-bleuté (lampe à fente, vue oblique)",
      look: "Repère la zone opaque de la cornée et sa position par rapport à la pupille.",
      reveal: [
        "Grande opacité blanc-bleuté sur l’apex et la moitié inférieure de la cornée : œdème stromal et épithélial massif (hydrops aigu, acute hydrops).",
        "Pupille visible seulement en haut à gauche : l’œdème est centré sur le cône.",
        "Mécanisme : rupture de la Descemet au sommet du cône, l’humeur aqueuse entre dans le stroma; guérison en semaines ou en mois, avec cicatrice.",
        "Même cas qu’OPH-044 et OPH-045 (vue antérieure et tomographie)."
      ] }
  ],

  "c-fuchs": [
    { id: "OPH-049", caption: "Guttae : fines ponctuations à la face postérieure de la cornée (fente large)",
      look: "Dans la cornée éclairée, à quelle profondeur se trouvent les fines ponctuations ?",
      reveal: [
        "Myriade de fins points clairs dans la cornée éclairée (moitié droite de la fente) : guttae, excroissances de collagène produites par un endothélium malade, à la face postérieure de la cornée.",
        "Aspect de métal martelé (beaten metal) quand les guttae deviennent confluentes.",
        "Guttae centrales = dystrophie endothéliale de Fuchs; en périphérie seulement chez le sujet âgé = corps de Hassall-Henle, sans valeur pathologique."
      ] },
    { id: "OPH-051", caption: "Guttae en gros plan : relief irrégulier de la Descemet (lampe à fente)",
      look: "Observe la texture de la surface postérieure de la cornée dans la zone éclairée.",
      reveal: [
        "Surface granuleuse faite de petites bosses et de trous sombres dans la bande éclairée (à gauche) : guttae bien visibles.",
        "Chaque gutta est une zone où les cellules endothéliales manquent ou sont étirées : la densité cellulaire baisse.",
        "Quand la pompe endothéliale ne suffit plus, l’œdème apparaît, d’abord le matin."
      ] },
    { id: "OPH-050", caption: "Fuchs après chirurgie de cataracte : voile cornéen par œdème et cicatrice (lampe à fente)",
      look: "Regarde la cornée juste à côté du reflet lumineux le plus brillant.",
      reveal: [
        "Voile blanchâtre diffus dans la cornée, à droite du reflet : dégénérescence endothéliale, œdème et cicatrice.",
        "Technique : superposer la fente et le reflet du filament de la lampe fait ressortir la surface endothéliale à côté de la tache brillante.",
        "La chirurgie de cataracte peut décompenser un endothélium de Fuchs déjà fragile : mesurer l’épaisseur cornéenne et compter les cellules avant l’opération."
      ] },
    { id: "OPH-126", caption: "Microscopie confocale de l’endothélium : guttae en zones noires (dystrophie de Fuchs)",
      look: "Compare les zones noires arrondies avec la mosaïque de cellules qui les entoure.",
      reveal: [
        "Taches noires arrondies dispersées, surtout en haut à gauche et dans la moitié droite : guttae, où aucune cellule endothéliale n’est visible.",
        "Mosaïque de cellules encore visible entre les taches; chaque gutta remplace des cellules absentes : densité endothéliale réduite.",
        "Comparer avec l’endothélium normal d’OPH-125 (cellules petites, hexagonales et régulières)."
      ] },
    { id: "OPH-052", caption: "Microscopie spéculaire ancienne : perte de cellules endothéliales dans la dystrophie de Fuchs",
      look: "Distingue les cellules polygonales des grandes zones sombres sans cellules.",
      reveal: [
        "Grandes plages noires arrondies au centre et dans la moitié droite : guttae, zones sans cellules visibles.",
        "Petites cellules polygonales surtout dans la moitié gauche : endothélium restant, de taille et de forme inégales (polymégathisme, pléomorphisme).",
        "La microscopie spéculaire chiffre la densité (cell/mm²), le polymégathisme et le pourcentage d’hexagones; la décompensation survient en général sous 400–500 cell/mm²."
      ] },
    { id: "OPH-053", caption: "Kératopathie bulleuse pseudophaque : microkystes et bulles épithéliales (lampe à fente)",
      look: "Regarde la surface de la cornée à gauche de la fente lumineuse.",
      reveal: [
        "Fins microkystes épithéliaux diffus dans la cornée éclairée : œdème épithélial.",
        "Quelques bulles plus grosses, rondes et sombres, à gauche de la fente (au centre de l’image) : bulles épithéliales, douloureuses quand elles crèvent.",
        "Cause : perte endothéliale après chirurgie de cataracte (kératopathie bulleuse pseudophaque, pseudophakic bullous keratopathy); traitement définitif : greffe endothéliale."
      ] }
  ],

  "c-erosion": [
    { id: "OPH-030", caption: "Abrasion cornéenne : défaut épithélial coloré par la fluorescéine (lumière blanche)",
      look: "Délimite la zone verte et regarde si ses bords sont nets.",
      reveal: [
        "Plage vert vif au centre de la cornée : défaut épithélial, le stroma dénudé retient la fluorescéine.",
        "Zone vert pâle qui s’étend vers le bas : colorant diffusé autour du défaut ou épithélium fragilisé.",
        "Chercher une opacité blanche sous le défaut : sa présence ferait plutôt penser à un ulcère infecté."
      ] },
    { id: "OPH-031", caption: "Abrasion cornéenne en lumière bleu cobalt : bords nets du défaut",
      look: "Compare l’intensité du vert sur la cornée et dans les ménisques des paupières.",
      reveal: [
        "Grande plage vert vif à bords nets au centre de la cornée : défaut épithélial; le bleu cobalt rend la coloration plus visible.",
        "Fine ligne verte le long des bords palpébraux supérieur et inférieur : ménisques lacrymaux colorés.",
        "Chercher des stries verticales en haut de la cornée : elles orientent vers un corps étranger sous la paupière supérieure."
      ] },
    { id: "OPH-055", caption: "Dystrophie de la membrane basale épithéliale : lignes en carte en rétroillumination",
      look: "Dans l’aire pupillaire éclairée par l’arrière, cherche des lignes fines et sinueuses.",
      reveal: [
        "Lignes grises fines et sinueuses qui dessinent des contours de carte géographique dans l’aire pupillaire : replis anormaux de la membrane basale.",
        "Fines ponctuations dispersées autour : petits kystes intraépithéliaux (les « points »).",
        "Cette dystrophie (epithelial basement membrane dystrophy) fragilise l’adhésion de l’épithélium : cause fréquente d’érosions récidivantes."
      ] },
    { id: "OPH-054", caption: "Dystrophie de la membrane basale : lignes et points épithéliaux (lampe à fente)",
      look: "Regarde dans la pupille, contre le fond noir, à côté de la fente lumineuse.",
      reveal: [
        "Fines lignes sinueuses et petits points grisâtres dans l’aire pupillaire, à droite de la fente : cartes, points et empreintes digitales (map-dot-fingerprint).",
        "Le fond noir de la pupille sert d’écran : l’éclairage indirect fait mieux ressortir ces opacités qu’un éclairage direct.",
        "Symptôme typique associé : douleur vive au réveil, à l’ouverture des yeux, par érosion récidivante."
      ] },
    { id: "OPH-032", caption: "Corps étranger métallique cornéen central (éclairage diffus)",
      look: "Cherche un petit objet brillant sur la cornée devant la pupille.",
      reveal: [
        "Petit fragment brillant et métallique au centre, sur la cornée devant la pupille : corps étranger.",
        "Après l’extraction, chercher et retirer l’anneau de rouille brun qui se forme autour d’un fragment de fer.",
        "Question systématique : travail au marteau sur du métal ? Si oui, exclure un corps étranger intraoculaire (examen dilaté, imagerie)."
      ] },
    { id: "OPH-033", caption: "Même corps étranger en fente fine : profondeur dans le stroma (lampe à fente)",
      look: "Suis la fente à travers la cornée et repère où se trouve le fragment.",
      reveal: [
        "Point brillant dans l’épaisseur de la coupe cornéenne (bord droit de la cornée, au centre) : fragment logé dans le stroma.",
        "La fente fine montre la profondeur de pénétration : un corps étranger profond fait craindre une perforation (test de Seidel).",
        "Même patient qu’OPH-032."
      ] }
  ],

  "c-pterygion": [
    { id: "OPH-073", caption: "Ptérygion du côté nasal atteignant l’aire pupillaire (éclairage diffus)",
      look: "Suis le tissu conjonctival depuis le coin de l’œil jusque sur la cornée.",
      reveal: [
        "Repli fibrovasculaire triangulaire qui part du canthus interne (à droite) et s’avance sur la cornée : ptérygion.",
        "Tête grisâtre au contact du bord pupillaire, au centre : l’axe visuel est menacé et l’astigmatisme induit souvent important.",
        "Corps parcouru de vaisseaux rouges sur la conjonctive : tissu actif, facteur de récidive après exérèse.",
        "Lié aux ultraviolets; une tête en relief, gélatineuse ou blanche (leucoplasie) ferait évoquer une néoplasie de surface (OSSN)."
      ] },
    { id: "OPH-074", caption: "Ptérygion envahissant le limbe et la cornée périphérique à 3 h (éclairage diffus)",
      look: "Repère où le tissu conjonctival franchit le limbe.",
      reveal: [
        "Tissu grisâtre vascularisé qui franchit le limbe à 3 h sur l’image et s’arrête à quelques millimètres de la pupille.",
        "Vaisseaux conjonctivaux qui convergent vers la tête : ptérygion encore actif.",
        "Différence avec la pinguécula : celle-ci reste sur la conjonctive, sans franchir le limbe."
      ] }
  ],

  "c-greffe": [
    { id: "OPH-104", caption: "Rejet endothélial d’une greffe transfixiante : ligne de Khodadoust (dispersion sclérale)",
      look: "Repère la ligne de petits dépôts qui traverse le greffon et compare la cornée de part et d’autre.",
      reveal: [
        "Ligne festonnée de précipités blanchâtres qui traverse le greffon au centre : ligne de Khodadoust (Khodadoust line), front de cellules immunitaires qui attaquent l’endothélium.",
        "Progression du bas vers le haut : la cornée déjà franchie par la ligne est atteinte.",
        "Urgence : corticostéroïde topique intensif; rappel RSVP (rougeur, sensibilité à la lumière, vision diminuée, douleur) = consultation le jour même."
      ] },
    { id: "OPH-105", caption: "Même patient : stroma œdémateux et plis de la Descemet derrière la ligne de rejet",
      look: "Compare la transparence de la cornée du côté atteint et du côté épargné.",
      reveal: [
        "Cornée trouble et grisâtre à gauche de l’image, avec fines stries : œdème et plis de la Descemet par dysfonction endothéliale aiguë.",
        "Précipités blanchâtres en bordure de la zone atteinte, au centre : front de rejet.",
        "La partie non touchée reste compacte et claire : le rejet est encore réversible s’il est traité tôt."
      ] },
    { id: "OPH-107", caption: "Liquide d’interface après un rejet de greffe endothéliale DSAEK (lampe à fente)",
      look: "Observe la transparence de la cornée et la zone ronde plus foncée au centre.",
      reveal: [
        "Cornée blanchâtre et trouble sur presque toute sa surface : œdème massif après un épisode de rejet.",
        "Disque sombre au centre : la pupille vue à travers la cornée œdémateuse, sillonnée de fines lignes (plis).",
        "DSAEK : greffe endothéliale qui apporte aussi une fine couche de stroma donneur; ici l’endothélium rejeté ne pompe plus."
      ] },
    { id: "OPH-108", caption: "Même patient en fente fine : croissant sombre de liquide entre greffon et cornée",
      look: "Suis la coupe optique de la cornée et cherche une couche sombre à l’intérieur.",
      reveal: [
        "Coupe cornéenne très épaissie (bande lumineuse à gauche) : œdème stromal.",
        "Fine bande sombre en croissant dans la partie postérieure de la coupe : liquide d’interface (interface fluid) entre le greffon DSAEK et la cornée receveuse.",
        "Normal juste après la chirurgie, ce liquide est anormal tardivement : il traduit ici l’échec de la pompe endothéliale après un rejet."
      ] },
    { id: "OPH-096", caption: "Décollement du bord périphérique d’un greffon DMEK (lampe à fente)",
      look: "Repère la fine membrane éclairée par la fente juste derrière la cornée.",
      reveal: [
        "Membrane fine et transparente qui se détache de la face postérieure de la cornée, juste derrière la fente, et forme une petite boucle (moitié gauche de l’image, à mi-hauteur) : bord du greffon DMEK non adhérent (graft edge lift).",
        "Un greffon bien orienté (endothélium vers la chambre antérieure) a tendance à s’enrouler vers le stroma.",
        "Petit décollement périphérique : surveillance; s’il s’étend vers le centre ou si la cornée s’œdématise, on réinjecte une bulle d’air (rebubbling)."
      ] },
    { id: "OPH-097", caption: "Même patient à l’OCT du segment antérieur : bord du greffon décollé",
      look: "Sur la coupe OCT, compare la face postérieure de la cornée au centre et en périphérie.",
      reveal: [
        "Ligne fine séparée de la face postérieure de la cornée et suspendue dans la chambre antérieure (au centre de la coupe) : greffon DMEK décollé.",
        "Petit cliché à gauche avec flèche verte : position et orientation de la coupe sur l’œil.",
        "L’OCT confirme et mesure le décollement mieux que la lampe à fente, surtout si la cornée est trouble."
      ] }
  ],

  "c-brulure": [
    { id: "OPH-086", caption: "Brûlure alcaline, 6 mois après : cornée opaque et vascularisée (éclairage diffus)",
      look: "Regarde la transparence de la cornée et les vaisseaux qui l’envahissent depuis le limbe.",
      reveal: [
        "Cornée blanc-bleuté opaque sur toute sa surface : opacification cicatricielle du stroma.",
        "Vaisseaux qui franchissent le limbe et courent sur la cornée, surtout en haut à gauche : pannus, tissu conjonctival qui recouvre la cornée.",
        "Mécanisme : l’alcali pénètre vite et détruit le limbe (ischémie limbique) et ses cellules souches; la conjonctive envahit alors la cornée.",
        "Prévention en phase aiguë : irrigation immédiate et prolongée jusqu’à un pH de 7,0–7,5, puis traitement anti-inflammatoire et réparateur."
      ] },
    { id: "OPH-087", caption: "Séquelles de brûlure alcaline : opacité, vaisseaux et conjonctive inflammatoire (éclairage diffus)",
      look: "Observe la cornée, la conjonctive inférieure et le cul-de-sac.",
      reveal: [
        "Cornée opaque et grisâtre, surtout au centre et en haut : cicatrice stromale.",
        "Conjonctive bulbaire inférieure très vascularisée et rouge : inflammation chronique de la surface.",
        "Il y a aussi des symblépharons (adhérences entre la paupière et le globe), séquelle des brûlures sévères."
      ] },
    { id: "OPH-112", caption: "Déficit en cellules souches limbiques : épithélium en tourbillon (lampe à fente)",
      look: "Dans la zone de la pupille, cherche un motif de lignes courbes en spirale.",
      reveal: [
        "Lignes grisâtres en spirale près du centre de la cornée, devant la pupille : épithélium en tourbillon (whorl), venu du limbe supérieur.",
        "Sans cellules souches limbiques (limbal stem cell deficiency), l’épithélium se renouvelle mal; la conjonctive et des vaisseaux peuvent recouvrir la cornée.",
        "Cause non précisée ; la brûlure chimique en est une cause classique, avec les lentilles et l’aniridie."
      ] },
    { id: "OPH-113", caption: "Déficit limbique : motif épithélial tourbillonnaire (lampe à fente)",
      look: "Repère le dessin de lignes au centre de la cornée.",
      reveal: [
        "Lignes en tourbillon qui convergent de la périphérie vers le centre de la cornée : épithélium anormal venu du limbe.",
        "Teinte jaune-vert de l’image (probable fluorescéine) : elle souligne les irrégularités de l’épithélium.",
        "Un déficit étendu peut exiger une greffe de limbe; la prévention passe par le traitement précoce des brûlures."
      ] }
  ],

  "g-gpao": [
    { id: "OPH-133", caption: "Glaucome à angle ouvert : encoche inférieure du rebord et perte de fibres (rétinophotographie)",
      look: "Suis le rebord neurorétinien tout autour de l’excavation, puis regarde l’éclat des fibres sous la papille.",
      reveal: [
        "Rebord neurorétinien aminci en bas de la papille, où l’excavation s’étend : encoche (notch) inférieure.",
        "Bande plus sombre, sans reflet strié, qui part de l’encoche vers le bas et la droite (côté maculaire) : défaut en coin de la couche des fibres nerveuses (RNFL).",
        "Correspondance attendue : déficit arciforme supérieur du champ visuel (atteinte inférieure = champ supérieur).",
        "Même patient qu’OPH-134 (OCT, œil gauche atteint)."
      ] },
    { id: "OPH-134", caption: "Même patient : OCT papille et RNFL des deux yeux (rapport Cirrus)",
      look: "Compare les deux yeux : épaisseur moyenne, cartes de déviation et courbe du rebord.",
      reveal: [
        "Carte de déviation de l’œil gauche (en bas à droite) : plage rouge et jaune en bas et en temporal de la papille = RNFL aminci, en regard de l’encoche.",
        "RNFL moyen de l’œil gauche à 91 µm, encore vert : une moyenne normale n’exclut pas un défaut focal.",
        "Courbe du rebord (au centre) : la ligne pointillée de l’œil gauche plonge dans le rouge au secteur inférieur (INF).",
        "C/D vertical 0,84 à gauche contre 0,66 à droite et symétrie RNFL à 59 % : asymétrie suspecte."
      ] },
    { id: "OPH-190", caption: "Champ visuel Humphrey : déficit arciforme supérieur avec ressaut nasal",
      look: "Repère la zone sombre puis regarde si elle s’arrête sur la ligne horizontale ou verticale.",
      reveal: [
        "Plage noire dans la moitié supérieure, à gauche du centre, qui s’arrête net sur la ligne horizontale : déficit arciforme supérieur avec ressaut nasal.",
        "Tache aveugle (petite zone sombre à droite, sous l’horizontale) : elle indique le côté temporal du champ.",
        "Déviation individuelle (pattern deviation, à droite) : carrés noirs (p < 0,5 %) groupés en haut, déficit localisé confirmé.",
        "Respect du méridien horizontal = fibres nerveuses (glaucome); un respect du méridien vertical orienterait vers le chiasma ou plus en arrière."
      ] },
    { id: "OPH-191", caption: "OCT RNFL : amincissement supérieur et inférieur, avec papille et champ correspondants",
      look: "Associe les éléments du montage : carte de déviation, secteurs, photo de papille et champ visuel.",
      reveal: [
        "Carte de déviation (en haut à gauche) : plages rouges en haut et en bas de la papille = RNFL aminci aux deux pôles.",
        "Quadrants (en haut à droite) : supérieur et inférieur en rouge, nasal et temporal en vert.",
        "Photo (en bas à gauche) : rebord aminci aux pôles; champ (en bas à droite) : déficit supérieur avec ressaut nasal.",
        "Structure et fonction concordent : OCT et champ visuel combinés sont plus fiables que chacun seul."
      ] },
    { id: "OPH-131", caption: "Glaucome avancé bilatéral : excavation profonde et vaisseaux en baïonnette (rétinophotographies)",
      look: "Compare les deux papilles : taille de l’excavation, rebord restant et trajet des vaisseaux.",
      reveal: [
        "Excavation presque totale des deux papilles, plus marquée sur l’image de droite : rebord neurorétinien presque disparu.",
        "Vaisseaux qui disparaissent en plongeant dans l’excavation puis réapparaissent au fond (flèches et agrandissements) : vaisseaux en baïonnette (bayoneting).",
        "Anneau pigmenté autour de la papille de l’image de droite : atrophie péripapillaire, fréquente au stade avancé.",
        "Même patiente qu’OPH-132 (OCT très aminci aux deux yeux)."
      ] },
    { id: "OPH-136", caption: "Excavation profonde : pores de la lame criblée visibles au fond (rétinophotographie agrandie)",
      look: "Regarde le fond de l’excavation et le bord inférotemporal du rebord.",
      reveal: [
        "Petits trous sombres ovalaires au fond de l’excavation pâle (au centre) : pores de la lame criblée (lamina cribrosa), exposés quand le tissu neural a disparu.",
        "Encoche du rebord en bas à gauche, du côté inférotemporal : atteinte glaucomateuse focale.",
        "Trait sombre courbe au bord inférotemporal : ne pas le prendre d’emblée pour une hémorragie, qui serait rouge et en flammèche.",
        "Agrandissement d’OPH-135 (même patient, vue d’ensemble)."
      ] }
  ],

  "g-hto": [
    { id: "OPH-116", caption: "Pachymétrie Scheimpflug (Pentacam) : épaisseur centrale, élément clé chez le suspect de glaucome",
      look: "Repère l’épaisseur au centre et au point le plus mince, puis la profondeur de chambre.",
      reveal: [
        "Carte pachymétrique (en bas à droite) : 543 µm au centre, plus épaisse vers la périphérie (bleu-violet) : répartition normale.",
        "Fenêtre de mesures (à droite) : point le plus mince à 538 µm, profondeur de chambre 3,55 mm, angle 45,4°.",
        "OHTS : une cornée de 555 µm ou moins triple environ le risque de conversion par rapport à plus de 588 µm; une cornée mince fait aussi sous-estimer la PIO.",
        "Il n’existe pas de photo typique de l’hypertension oculaire : on la retient devant une PIO élevée avec angle ouvert, papille, OCT et champ normaux."
      ] },
    { id: "OPH-187", caption: "Rapports C/D de 0,2 à 0,9 sur quatre papilles différentes (rétinophotographies)",
      look: "Classe les quatre papilles selon la taille de l’excavation par rapport au disque.",
      reveal: [
        "A = 0,2, B = 0,5, C = 0,7, D = 0,9.",
        "En D, rebord presque absent et excavation pâle et profonde : aspect d’atteinte avancée.",
        "Seuils de suspicion : C/D vertical > 0,6 ou asymétrie ≥ 0,2, à interpréter selon la taille du disque (un grand disque a une grande excavation physiologique)."
      ] },
    { id: "OPH-139", caption: "Croissant gris temporal : faux amincissement du rebord chez un homme de 34 ans",
      look: "Trace avec soin le vrai bord du disque du côté temporal.",
      reveal: [
        "Bande gris ardoise en croissant au bord temporal du disque (à gauche) : pigment dans le tissu papillaire périphérique (croissant gris, gray crescent).",
        "En incluant ce croissant dans le disque, le rebord temporal est sain : il n’est pas aminci.",
        "OCT RNFL normal dans tous les quadrants chez ce patient.",
        "Plus fréquent chez les patients d’ascendance africaine; n’augmente pas le risque de glaucome."
      ] }
  ],

  "g-gpn": [
    { id: "OPH-137", caption: "Glaucome à pression normale : hémorragie papillaire au bord inférotemporal (rétinophotographie)",
      look: "Fais le tour du bord de la papille à la recherche d’une petite lésion rouge.",
      reveal: [
        "Petite hémorragie rouge foncé en flammèche au bord inférieur de la papille, du côté de la macula (en bas à gauche du disque) : hémorragie papillaire (disc hemorrhage, Drance).",
        "Grande excavation pâle et anneau clair autour du disque : atrophie péripapillaire.",
        "Facteur de risque de progression; ici, signe d’un contrôle insuffisant de la PIO malgré des pressions dans la normale."
      ] },
    { id: "OPH-138", caption: "Même patient en gros plan : hémorragie en flammèche qui franchit le bord papillaire",
      look: "Observe la forme de l’hémorragie et sa position par rapport au bord du disque.",
      reveal: [
        "Hémorragie striée en flammèche à cheval sur le bord inférotemporal du disque (en bas à gauche) : siège typique, dans la couche des fibres nerveuses.",
        "Elle se résorbe en quelques semaines à quelques mois : la documenter par photo et la rechercher à chaque visite.",
        "Le même cliché est repris avec une flèche dans OPH-188 (tutoriel GPAO) : ce n’est pas un autre patient."
      ] }
  ],

  "g-fermeture": [
    { id: "OPH-142", caption: "Chambre antérieure périphérique très étroite en fente fine (principe de Van Herick)",
      look: "Compare l’épaisseur de la coupe cornéenne à l’espace sombre qui la sépare de l’iris.",
      reveal: [
        "Coupe cornéenne lumineuse au limbe, à droite : repère pour estimer la profondeur de la chambre périphérique.",
        "Espace sombre presque inexistant entre cette coupe et l’iris : chambre périphérique très étroite, Van Herick bas (moins de 1/4 d’épaisseur cornéenne).",
        "Grade ≤ 2 = gonioscopie obligatoire; le Van Herick ne remplace jamais la gonioscopie.",
        "Photo issue du même cas que la crise aiguë d’OPH-140."
      ] },
    { id: "OPH-121", caption: "OCT du segment antérieur normal (Visante) : chambre profonde et angles ouverts",
      look: "Repère la cornée, l’iris, la profondeur de chambre et l’angle iridocornéen.",
      reveal: [
        "Cornée (arc gris en haut), plus épaisse en périphérie qu’au centre.",
        "Profondeur de chambre (barre jaune verticale au centre) et diamètre pupillaire (barre jaune horizontale) mesurables.",
        "Angle iridocornéen (en haut à droite) ouvert entre la face postérieure de la cornée et l’iris plat.",
        "Complément de la gonioscopie (UBM préférée pour l’iris plateau), mais ne montre ni le trabéculum pigmenté ni les néovaisseaux."
      ] },
    { id: "OPH-147", caption: "OCT du segment antérieur : contact iris-cornée, angles fermés (après DMEK)",
      look: "Suis l’iris de chaque côté jusqu’à la cornée et compare avec OPH-121.",
      reveal: [
        "Iris poussé vers l’avant de chaque côté (traits blancs obliques à gauche et à droite), plaqué jusqu’à la face postérieure de la cornée : contact iridocornéen, angles fermés.",
        "Fermeture secondaire : le gaz (SF6) injecté pour la DMEK, passé derrière l’iris, l’a poussé vers l’avant (bloc pupillaire par le gaz).",
        "Après repositionnement du patient, le gaz est revenu en chambre antérieure par l’iridotomie ou la pupille : chambre profonde et PIO normale.",
        "Même signe OCT que dans une fermeture primaire : contact iridotrabéculaire."
      ] },
    { id: "OPH-146", caption: "Iridotomie périphérique au laser en position temporale (éclairage diffus)",
      look: "Cherche un petit orifice sombre dans la périphérie de l’iris.",
      reveal: [
        "Petit trou noir arrondi dans l’iris périphérique, à 9 h sur l’image : iridotomie périphérique au laser (laser peripheral iridotomy).",
        "Position temporale : moins de reflets et de halos qu’une iridotomie supérieure, selon un essai randomisé.",
        "Après l’iridotomie : confirmer qu’elle est perméable en voyant directement l’orifice et mesurer la PIO 30 min à 2 h après."
      ] }
  ],

  "g-crise": [
    { id: "OPH-140", caption: "Crise aiguë de fermeture de l’angle à l’œil droit : rougeur et cornée trouble",
      look: "Compare les deux yeux : rougeur, transparence de la cornée et taille de la pupille.",
      reveal: [
        "Œil droit (à gauche de l’image) rouge, avec une cornée grisâtre et trouble : œdème cornéen par PIO très élevée (plus de 70 mmHg).",
        "Pupille de l’œil droit mal visible derrière la cornée œdémateuse; œil gauche (à droite de l’image) blanc et clair.",
        "Symptômes rapportés : douleur intense, céphalée, nausées et baisse de vision au réveil, chez un hypermétrope.",
        "L’œil adelphe avait un angle étroit fermé à la gonioscopie : iridotomie au laser aux deux yeux."
      ] },
    { id: "OPH-141", caption: "Même cas à la lampe à fente : œil congestif et chambre peu profonde",
      look: "Suis la fente lumineuse et évalue l’espace entre la cornée et l’iris.",
      reveal: [
        "Coupe cornéenne (arc blanc à gauche de la pupille) presque collée au reflet orangé de la fente sur l’iris : chambre antérieure peu profonde.",
        "Conjonctive rouge, surtout en bas à gauche : œil congestif.",
        "Vérifier la pupille : dans la crise, elle est classiquement en semi-mydriase et peu réactive."
      ] },
    { id: "OPH-143", caption: "Glaukomflecken : petites taches blanches sous la capsule antérieure (lampe à fente)",
      look: "Dans la pupille, regarde la surface antérieure du cristallin.",
      reveal: [
        "Petites opacités blanc-gris irrégulières dans l’aire pupillaire, juste sous la capsule antérieure : glaukomflecken.",
        "Nécrose de l’épithélium du cristallin pendant une crise aiguë de fermeture : marqueur d’une crise ancienne.",
        "Bord pupillaire irrégulier avec pigment dispersé à droite : atrophie irienne possible après la crise."
      ] },
    { id: "OPH-145", caption: "Glaukomflecken en gros plan : opacités blanches centrales du cristallin antérieur",
      look: "Décris la forme, la couleur et la position des taches dans l’aire pupillaire.",
      reveal: [
        "Amas blanc irrégulier au centre de la pupille, entouré de fines taches : glaukomflecken sous-capsulaires antérieurs.",
        "Localisation centrale, dans l’aire pupillaire : zone la plus exposée pendant la crise.",
        "Diagnostic différentiel : la pseudoexfoliation forme une cible sur la capsule (disque central et anneau), pas des taches dispersées."
      ] },
    { id: "OPH-144", caption: "Atrophie irienne après une crise : transillumination sectorielle en rétroillumination",
      look: "Avec la lumière réfléchie par le fond d’œil, cherche une zone de l’iris qui laisse passer la lumière.",
      reveal: [
        "Plage orangée à droite de la pupille, dans l’iris : transillumination par atrophie sectorielle du stroma irien (ischémie pendant la crise).",
        "Pupille rouge (reflet du fond) et reflet de la lampe en forme de cloche au centre : à ne pas prendre pour une lésion.",
        "Ces séquelles (atrophie irienne, glaukomflecken, pupille déformée) rappellent une crise passée, même sans histoire claire."
      ] }
  ],

  "g-pxf": [
    { id: "OPH-153", caption: "Pseudoexfoliation : dépôt en cible sur la capsule antérieure (pupille dilatée)",
      look: "Dans la pupille dilatée, cherche des contours fins et festonnés sur la face antérieure du cristallin.",
      reveal: [
        "Disque central à bord festonné au centre de la pupille : matériel fibrillaire déposé sur la capsule antérieure.",
        "Matériel irrégulier près du bord de la pupille, en haut et à droite : bande périphérique du dépôt.",
        "Zone claire entre les deux : l’iris frotte la capsule en bougeant et efface le dépôt, d’où l’aspect en cible.",
        "Penser aux zonules fragiles et à la dilatation souvent médiocre : risque accru en chirurgie de cataracte."
      ] },
    { id: "OPH-155", caption: "Lésion en œil de bœuf sur la capsule antérieure (glaucome pseudoexfoliatif)",
      look: "Repère les anneaux concentriques sur la face antérieure du cristallin.",
      reveal: [
        "Cercle grisâtre central et anneau périphérique séparés par une zone plus claire : aspect en œil de bœuf (bullseye).",
        "Cristallin terne et grisâtre derrière le dépôt : cataracte associée probable.",
        "Le matériel bouche aussi le trabéculum : glaucome secondaire à angle ouvert, souvent avec PIO élevée et fluctuante."
      ] },
    { id: "OPH-154", caption: "Matériel pseudoexfoliatif sur le bord pupillaire (lampe à fente)",
      look: "Examine le bord de la pupille sur tout son pourtour.",
      reveal: [
        "Petits flocons blanchâtres sur le liseré pupillaire, surtout à gauche : matériel pseudoexfoliatif.",
        "À chercher avant de dilater : c’est souvent le seul signe visible sur une pupille non dilatée.",
        "Autre signe associé : défauts de transillumination péripupillaires « mangés aux mites »."
      ] },
    { id: "OPH-156", caption: "Gonioscopie : ligne de Sampaolesi, pigment ondulé en avant de Schwalbe",
      look: "Repère la ligne pigmentée pointée par la tête de flèche et sa position par rapport au trabéculum.",
      reveal: [
        "Ligne pigmentée ondulée sous la tête de flèche blanche : ligne de Sampaolesi (Sampaolesi line), pigment déposé sur ou en avant de la ligne de Schwalbe.",
        "Trabéculum très pigmenté (bande brune horizontale juste en dessous) : pigment et matériel libérés par l’iris qui frotte sur le cristallin.",
        "Signe classique de pseudoexfoliation, aussi possible dans la dispersion pigmentaire."
      ] },
    { id: "OPH-151", caption: "Pseudoexfoliation : implant intraoculaire décentré visible dans la pupille (lampe à fente)",
      look: "Dans la pupille, repère le bord de l’implant et sa position.",
      reveal: [
        "Bord courbe net qui traverse l’aire pupillaire de haut en bas : bord de l’implant ou du sac capsulaire, décentré.",
        "Matériel blanc opaque en bas à gauche de la pupille : capsule fibrosée ou dépôts (non précisé).",
        "Ces déplacements peuvent survenir des années après la chirurgie : les zonules fragiles ne retiennent plus le sac capsulaire."
      ] },
    { id: "OPH-152", caption: "Autre vue du même cas : implant déplacé visible dans la pupille",
      look: "Situe l’implant par rapport au centre de la pupille.",
      reveal: [
        "Optique de l’implant et sac capsulaire décalés, avec un bord visible dans la pupille : implant subluxé.",
        "Œil calme : la subluxation peut être progressive et peu bruyante (vision fluctuante, diplopie monoculaire).",
        "Même cas qu’OPH-151."
      ] }
  ],

  "g-pigmentaire": [
    { id: "OPH-157", caption: "Dispersion pigmentaire : défauts de transillumination irienne radiaires en couronne",
      look: "En rétroillumination, cherche où l’iris laisse passer la lumière et la forme de ces zones.",
      reveal: [
        "Fentes rouges radiaires disposées en couronne dans la périphérie de l’iris : défauts de transillumination (transillumination defects).",
        "Mécanisme : l’iris concave frotte contre les zonules et perd son épithélium pigmenté.",
        "Différence avec la pseudoexfoliation, où les défauts sont péripupillaires, « mangés aux mites »."
      ] },
    { id: "OPH-158", caption: "Fuseau de Krukenberg : pigment vertical sur l’endothélium cornéen (lampe à fente)",
      look: "Observe la face postérieure de la cornée dans la zone éclairée.",
      reveal: [
        "Fines granulations brunes groupées en bande verticale au centre de la cornée éclairée : pigment sur l’endothélium (fuseau de Krukenberg, Krukenberg spindle).",
        "Forme en fuseau due aux courants de convection de l’humeur aqueuse.",
        "Signe de dispersion pigmentaire, mais non spécifique : chercher aussi les défauts de transillumination et un trabéculum très pigmenté."
      ] },
    { id: "OPH-161", caption: "Ligne de Scheie en rétroillumination : pigment à la périphérie du cristallin",
      look: "Contre le reflet orangé, cherche une ligne sombre près du bord du cristallin.",
      reveal: [
        "Ligne de points noirs le long du bord gauche du cristallin, sur fond orangé : pigment déposé là où s’insèrent les zonules (ligne de Scheie, Scheie stripe).",
        "Visible seulement pupille dilatée, en rétroillumination.",
        "Même patient qu’OPH-160 : homme myope de 29 ans avec PIO élevée aux deux yeux."
      ] },
    { id: "OPH-160", caption: "Ligne de Scheie, pupille dilatée : trait pigmenté à la périphérie du cristallin",
      look: "Repère le trait brun à la périphérie du cristallin dans la pupille dilatée.",
      reveal: [
        "Trait pigmenté brun qui longe la périphérie gauche du cristallin : pigment à l’insertion des zonules.",
        "Profil typique de la dispersion pigmentaire : homme jeune et myope.",
        "Le glaucome n’est pas certain : environ 10 % à 5 ans et 15 % à 15 ans (Siddiqui 2003)."
      ] },
    { id: "OPH-159", caption: "Pigment sur la capsule du cristallin en rétroillumination (dispersion pigmentaire)",
      look: "Cherche des amas irréguliers à la périphérie du cristallin.",
      reveal: [
        "Amas irréguliers le long de la périphérie droite du cristallin, en rétroillumination : pigment sur la capsule (ligne de Scheie).",
        "Même signification que la ligne de Scheie : pigment libéré par le frottement de l’iris."
      ] }
  ],

  "g-neovasculaire": [
    { id: "OPH-162", caption: "Rubéose irienne diabétique de l’œil gauche : néovaisseaux fins sur l’iris",
      look: "Examine la surface de l’iris, du bord pupillaire jusqu’à la périphérie.",
      reveal: [
        "Fins vaisseaux rouges irréguliers à la surface de l’iris, surtout en haut et autour de la pupille : néovaisseaux (rubéose irienne, rubeosis iridis).",
        "Vaisseaux tortueux et ramifiés en surface : différents des vaisseaux normaux, profonds et radiaires, parfois visibles sur un iris clair.",
        "Contexte : rétinopathie diabétique proliférante, PIO 32 mmHg à cet œil, angle ouvert avec néovaisseaux sur 360°.",
        "Même patient qu’OPH-163 et OPH-164 (œil droit)."
      ] },
    { id: "OPH-164", caption: "Même patient, œil droit : vaisseaux irréguliers à la surface de l’iris",
      look: "Cherche les vaisseaux rouges sur l’iris, surtout dans la moitié supérieure.",
      reveal: [
        "Fins vaisseaux rouges ramifiés sur la moitié supérieure de l’iris : néovaisseaux, moins étendus qu’à l’œil gauche.",
        "PIO de 11 mmHg à cet œil : la PIO peut rester normale tant que l’angle n’est pas obstrué.",
        "Toujours faire la gonioscopie : les néovaisseaux de l’angle peuvent précéder ceux de l’iris."
      ] },
    { id: "OPH-163", caption: "Même patient, œil droit : néovaisseaux discrets sur l’iris (lampe à fente)",
      look: "Regarde le pourtour de la pupille et la surface de l’iris au fort grossissement.",
      reveal: [
        "Fins vaisseaux rouges irréguliers sur l’iris et près du bord pupillaire : néovaisseaux discrets, à chercher avant la dilatation.",
        "Traitement de la cause : panphotocoagulation rétinienne, avec ou sans injection intravitréenne d’anti-VEGF, pour faire régresser les néovaisseaux."
      ] },
    { id: "OPH-165", caption: "Rubéose étendue d’un œil ischémique avec glaucome néovasculaire (lampe à fente)",
      look: "Observe la densité et le trajet des vaisseaux sur l’iris.",
      reveal: [
        "Réseau dense de vaisseaux rouges tortueux sur tout l’iris visible : rubéose étendue.",
        "Maladie ischémique sévère de l’œil gauche avec glaucome néovasculaire; cause exacte non précisée.",
        "Stade avancé : la membrane fibrovasculaire ferme l’angle par synéchies et la PIO devient difficile à contrôler."
      ] },
    { id: "OPH-166", caption: "Même œil en gros plan : vaisseaux tortueux sur l’iris et pupille voilée",
      look: "Suis un vaisseau depuis la périphérie jusqu’au bord pupillaire.",
      reveal: [
        "Vaisseaux rouges ramifiés qui courent sur l’iris jusqu’au bord de la pupille (moitié gauche) : néovaisseaux.",
        "Aire pupillaire grisâtre et terne (en haut à droite) : cornée œdémateuse ou cristallin opaque, impossible à préciser ici.",
        "Traiter l’ischémie et la PIO sans tarder; les néovaisseaux fragiles peuvent saigner (hyphéma)."
      ] }
  ],

  "g-secondaires": [
    { id: "OPH-150", caption: "Iris bombé sur uvéite chronique avec synéchies postérieures (éclairage diffus)",
      look: "Regarde la pupille, puis la périphérie supérieure de l’iris.",
      reveal: [
        "Pupille petite et grisâtre au centre : synéchies postérieures (iris collé au cristallin) qui bloquent le passage de l’humeur aqueuse.",
        "Deux petites taches pâles en périphérie supérieure de l’iris : probables iridotomies; plusieurs iridotomies avaient échoué.",
        "Mécanisme : l’aqueuse s’accumule derrière l’iris, qui bombe vers l’avant et ferme l’angle (iris bombé, iris bombe).",
        "Même patient qu’OPH-148 (iridocyclite chronique)."
      ] },
    { id: "OPH-148", caption: "Même patient en fente fine : profil convexe de l’iris bombé (lampe à fente)",
      look: "Suis la ligne orangée de la fente sur l’iris et décris sa forme.",
      reveal: [
        "Reflet orangé de la fente sur l’iris, ondulé : l’iris périphérique bombe vers l’avant alors que la zone pupillaire reste retenue en arrière.",
        "Coupe cornéenne (arc gris à gauche) qui se rapproche de l’iris aux extrémités : chambre périphérique effacée, angle fermé.",
        "Traitement : rétablir le passage par iridotomie ou iridectomie chirurgicale et contrôler l’inflammation."
      ] },
    { id: "OPH-149", caption: "Iris bombé chez un autre patient : iris convexe et chambre périphérique étroite (lampe à fente)",
      look: "Observe la courbure de l’iris dans la fente et la forme de la pupille.",
      reveal: [
        "Fente lumineuse sur la cornée à gauche, très proche de l’iris en périphérie : chambre antérieure périphérique étroite.",
        "Pupille irrégulière au centre : adhérences possibles entre l’iris et le cristallin.",
        "Dans ce cas, l’iris bombé venait obstruer un tube de drainage placé en bas."
      ] },
    { id: "OPH-177", caption: "Précipités pigmentés sur le trabéculum (syndrome de Grant) en gonioscopie",
      look: "Dans le miroir de gonioscopie, examine la bande du trabéculum.",
      reveal: [
        "Petits dépôts brun-rouge dispersés sur la bande du trabéculum antérieur, au centre : précipités trabéculaires.",
        "Ils traduisent une inflammation localisée au trabéculum et peuvent élever la PIO (glaucome uvéitique).",
        "Le glaucome cortisonique, lui, n’a pas de signe photographique propre : on le soupçonne devant une PIO qui monte sous corticostéroïdes."
      ] }
  ],

  "g-postop": [
    { id: "OPH-181", caption: "Gonioscopie : micro-pontage trabéculaire iStent dans le trabéculum",
      look: "Dans l’angle, cherche un petit objet arrondi posé sur la bande du trabéculum.",
      reveal: [
        "Petit dispositif rond et brillant au centre de l’image, au niveau du trabéculum : orifice de l’iStent (trabecular micro-bypass).",
        "Principe : relier directement la chambre antérieure au canal de Schlemm pour améliorer l’écoulement (MIGS, chirurgie de glaucome peu invasive).",
        "Souvent posé avec la chirurgie de cataracte; baisse de PIO modeste, utile pour réduire les gouttes."
      ] },
    { id: "OPH-182", caption: "Décollements choroïdiens « kissing » une semaine après un tube d’Ahmed (lampe à fente)",
      look: "Regarde, à travers la pupille irrégulière, ce qui occupe le centre de l’œil.",
      reveal: [
        "Deux dômes brunâtres qui se touchent au centre, derrière la pupille (ligne verticale de contact) : décollements choroïdiens qui se rejoignent (kissing choroidals); œil aphake.",
        "Pupille irrégulière : pupilloplastie faite pendant la chirurgie.",
        "Contexte : chambre antérieure plate et PIO à 7 mmHg par surfiltration du tube; à distinguer d’une hémorragie suprachoroïdienne (douleur, PIO élevée).",
        "Traitement ici : ligature du tube; PIO revenue et décollements disparus dès le lendemain."
      ] }
  ],

  "b-bases": [
    { id: "OPH-103", caption: "Greffe transfixiante avec suture continue (éclairage diffus)",
      look: "Suis le fil autour du greffon et regarde la transparence de la cornée.",
      reveal: [
        "Fil unique en zigzag qui fait le tour du greffon : suture continue (running suture).",
        "Bord circulaire du greffon visible juste en dedans des points d’entrée du fil.",
        "Indication : cicatrice d’ulcère; ce n’est pas le même patient qu’OPH-101 (quatre patients différents sur la page)."
      ] },
    { id: "OPH-101", caption: "Greffe transfixiante avec points séparés (éclairage diffus)",
      look: "Compte les points de suture et regarde s’ils sont réguliers.",
      reveal: [
        "Points séparés radiaires, régulièrement espacés tout autour du greffon : sutures interrompues (interrupted sutures).",
        "Avantage : on peut retirer un point à la fois pour corriger l’astigmatisme.",
        "Un point lâche ou cassé attire infection et rejet : il doit être retiré rapidement, sous couverture antibiotique."
      ] },
    { id: "OPH-093", caption: "DMEK à 1 semaine : bulle de gaz résiduelle dans la chambre antérieure supérieure",
      look: "Repère la structure ronde transparente en haut de la chambre antérieure.",
      reveal: [
        "Disque transparent à bord net dans la moitié supérieure de la chambre antérieure : bulle de gaz qui plaque le greffon contre la cornée.",
        "Bulle en haut car le gaz monte : le positionnement sur le dos aide le greffon à adhérer les premiers jours.",
        "Cornée claire : greffon adhérent; la bulle se résorbe en 1 à 2 semaines (OPH-095, même patient)."
      ] },
    { id: "OPH-099", caption: "Greffe lamellaire antérieure profonde (DALK) claire, 3 ans après, sutures retirées",
      look: "Cherche la limite du greffon dans la cornée.",
      reveal: [
        "Fine ligne circulaire en périphérie de la cornée : jonction entre le greffon et la cornée receveuse.",
        "Cornée claire : la DALK remplace le stroma mais garde l’endothélium du patient, donc pas de rejet endothélial.",
        "Indication : kératocône."
      ] },
    { id: "OPH-092", caption: "Colle cyanoacrylate sur une perforation par kératite ulcérative périphérique (éclairage diffus)",
      look: "Repère le matériau blanchâtre irrégulier collé sur la cornée.",
      reveal: [
        "Plaque blanchâtre irrégulière et brillante à droite de la pupille, vers 2 h : colle cyanoacrylate qui obture la perforation.",
        "Indication : perforation de 2–3 mm au plus; la colle est aussi antibactérienne.",
        "Contexte : polyarthrite rhumatoïde mal contrôlée, amincissement progressif malgré le traitement; prednisone et doxycycline orales ajoutées.",
        "On la recouvre en général d’une lentille pansement pour le confort."
      ] },
    { id: "OPH-007", caption: "Hémorragie sous-conjonctivale étendue, cornée claire (éclairage diffus)",
      look: "Délimite la rougeur et regarde la cornée et la pupille.",
      reveal: [
        "Nappe rouge homogène sous la conjonctive bulbaire, tout autour de la cornée : sang sous la conjonctive, sans vaisseaux individualisables.",
        "Cornée claire et pupille ronde : pas d’atteinte visible du segment antérieur.",
        "Bénigne et spontanément résolutive; chercher une cause (traumatisme, anticoagulants, hypertension) si elle récidive."
      ] }
  ],

  "c-bases": [
    { id: "OPH-187", caption: "Estimer le rapport C/D : quatre papilles de 0,2 à 0,9 (rétinophotographies)",
      look: "Pour chaque papille, compare la hauteur de l’excavation à la hauteur du disque.",
      reveal: [
        "C/D vertical : 0,2 (A), 0,5 (B), 0,7 (C) et 0,9 (D).",
        "On mesure verticalement, du bord de l’excavation (là où les vaisseaux plongent) au bord du disque.",
        "Toujours tenir compte de la taille du disque et comparer les deux yeux."
      ] },
    { id: "OPH-013", caption: "Rapport Humphrey 24-2 annoté : où lire fiabilité, indices et cartes",
      look: "Trouve sur le rapport les indices de fiabilité, le GHT, le MD et le PSD.",
      reveal: [
        "En haut à gauche : fiabilité (pertes de fixation 1/13, faux positifs 1 %, faux négatifs 0 %) : test fiable.",
        "À droite, au centre : GHT dans les limites normales, VFI 100 %, MD +0,28 dB, PSD 1,21 dB.",
        "Cartes de probabilité en bas, sans grappe de carrés foncés : champ normal chez ce sujet de 23 ans.",
        "Faux positifs au-delà de 15 % = test non fiable; lire d’abord la fiabilité, ensuite les cartes."
      ] },
    { id: "OPH-134", caption: "Lire un rapport OCT papille et RNFL des deux yeux (Cirrus)",
      look: "Repère le tableau central, les cartes de déviation et la courbe du rebord.",
      reveal: [
        "Tableau central : vert = normal, jaune = limite, rouge = anormal par rapport à une base normative.",
        "Cartes de déviation (en bas à gauche et à droite) : les pixels colorés montrent où le RNFL est aminci; ici, en bas et en temporal à l’œil gauche.",
        "La base normative peut se tromper : myopie forte, petit disque ou erreur de segmentation donnent du rouge sans maladie (red disease)."
      ] },
    { id: "OPH-146", caption: "Reconnaître une iridotomie laser périphérique (position temporale, éclairage diffus)",
      look: "Trouve l’orifice dans l’iris et note sa position.",
      reveal: [
        "Petit trou noir dans l’iris périphérique, à 9 h sur l’image : iridotomie.",
        "Rôle : ouvrir un passage direct pour l’humeur aqueuse, ce qui lève le bloc pupillaire et laisse l’iris périphérique reculer.",
        "Confirmer la perméabilité en voyant directement le cristallin à travers l’orifice; la transillumination seule peut tromper."
      ] },
    { id: "OPH-183", caption: "Périorbitopathie aux prostaglandines : sillon palpébral supérieur creusé à l’œil gauche",
      look: "Compare les paupières supérieures et la profondeur du sillon au-dessus de chaque œil.",
      reveal: [
        "Sillon palpébral supérieur plus creux du côté gauche de la patiente (à droite de l’image) : atrophie de la graisse orbitaire (prostaglandin-associated periorbitopathy).",
        "Cause : analogue des prostaglandines utilisé plusieurs années à cet œil, pour un glaucome par récession de l’angle.",
        "Autres effets locaux connus des prostaglandines : rougeur, cils plus longs, assombrissement de l’iris et de la peau des paupières."
      ] },
    { id: "OPH-184", caption: "Même patiente un an après l’arrêt de la prostaglandine : nette amélioration",
      look: "Compare le sillon palpébral gauche avec la photo précédente.",
      reveal: [
        "Sillon supérieur gauche (à droite de l’image) moins creusé : la graisse orbitaire s’est en partie reconstituée.",
        "Effet en partie réversible à l’arrêt : en parler avant de prescrire, surtout si un seul œil est traité (asymétrie visible)."
      ] }
  ],

  "bonus-B": [
    { id: "OPH-082", caption: "Ulcère neurotrophique : défaut ovale à bords grisâtres surélevés (éclairage diffus)",
      look: "Décris la forme de l’ulcère et l’aspect de ses bords.",
      reveal: [
        "Défaut épithélial ovale au centre de la cornée, avec un rebord grisâtre épaissi : bords surélevés typiques de l’ulcère neurotrophique.",
        "Recrutement de globules blancs autour de l’ulcère et léger œdème cornéen : surveiller une surinfection.",
        "Cause : paralysie du V (cornée insensible) et du VII (fermeture incomplète) après l’exérèse d’un méningiome.",
        "Même patient qu’OPH-080 et OPH-081."
      ] },
    { id: "OPH-083", caption: "Kératite ulcérative périphérique : fonte cornéenne près du limbe supérieur (éclairage diffus)",
      look: "Suis le pourtour de la cornée et cherche une zone opaque ou amincie près du limbe.",
      reveal: [
        "Croissant blanchâtre le long du limbe, dans la moitié supérieure : infiltrat et fonte stromale en périphérie de la cornée.",
        "Injection intense des vaisseaux conjonctivaux et épiscléraux voisins (en haut à droite) : inflammation sévère.",
        "Cause ici : granulomatose avec polyangéite (anciennement Wegener), découverte au bilan; la polyarthrite rhumatoïde est la cause la plus fréquente.",
        "Urgence systémique : bilan rhumatologique et immunosuppression, en plus des soins locaux."
      ] },
    { id: "OPH-075", caption: "Kératoconjonctivite adénovirale : infiltrats sous-épithéliaux multiples dans l’axe visuel",
      look: "Regarde les petites opacités rondes dans la cornée devant la pupille.",
      reveal: [
        "Multiples petites opacités rondes blanc-gris, au centre et en périphérie moyenne : infiltrats sous-épithéliaux (subepithelial infiltrates) immuns.",
        "Elles touchent l’axe visuel : baisse de vision et éblouissement possibles pendant des semaines.",
        "Contexte : femme de 29 ans, œil rouge, larmoiement et ganglion prétragien depuis 10 jours.",
        "Très contagieux : hygiène des mains, désinfection des instruments et du tonomètre."
      ] },
    { id: "OPH-077", caption: "Kératite ponctuée de Thygeson : petites opacités épithéliales sur un œil blanc",
      look: "Cherche de petites taches grises sur la cornée et regarde la conjonctive.",
      reveal: [
        "Petites lésions gris-blanc arrondies, légèrement surélevées, dispersées dans l’aire pupillaire : kératite ponctuée de Thygeson.",
        "Conjonctive blanche, sans réaction : différence avec l’adénovirus, qui donne un œil rouge.",
        "Évolue par poussées; répond aux corticostéroïdes topiques, avec un excellent pronostic visuel."
      ] },
    { id: "OPH-109", caption: "Invasion épithéliale sous un volet de LASIK : îlots blanchâtres près de l’axe visuel",
      look: "Repère les petites plages blanches sous la pupille et à droite.",
      reveal: [
        "Îlots blanc nacré, en gouttes et en traînées, sous la pupille et à droite : nids d’épithélium qui ont poussé sous le volet (epithelial ingrowth).",
        "Ils s’approchent de l’axe visuel : indication de soulever le volet et de gratter l’interface.",
        "Contexte : LASIK au microkératome suivi de plusieurs retouches, facteurs de risque."
      ] },
    { id: "OPH-089", caption: "Descémétocèle : cornée amincie jusqu’à la Descemet, en fente fine (lampe à fente)",
      look: "Suis la coupe cornéenne et cherche l’endroit où elle devient très mince ou bombe.",
      reveal: [
        "Zone où la coupe cornéenne s’amincit brutalement au milieu de la fente : seule la Descemet persiste (descémétocèle, descemetocele).",
        "Petit dôme arrondi en relief à côté de la fente : la Descemet amincie bombe sous la pression intraoculaire.",
        "Cause ici : fonte cornéenne stérile sur rosacée oculaire.",
        "Risque imminent de perforation : colle ou greffe tectonique; éviter toute pression sur le globe."
      ] }
  ],

  "bonus-C": [
    { id: "OPH-167", caption: "Glaucome congénital : buphtalmie bilatérale chez un garçon de 11 ans",
      look: "Compare la taille des yeux et des cornées avec le reste du visage.",
      reveal: [
        "Yeux et cornées grands par rapport au visage, des deux côtés : buphtalmie (buphthalmos), globe distendu par une PIO élevée dans la petite enfance.",
        "Cornée et sclère de l’enfant élastiques : elles s’étirent sous la pression, ce qui n’arrive pas chez l’adulte.",
        "Chez le nourrisson : larmoiement, photophobie, blépharospasme, cornée grande et trouble."
      ] },
    { id: "OPH-170", caption: "Stries de Haab : ruptures horizontales de la Descemet (glaucome congénital)",
      look: "Cherche des lignes courbes ou horizontales dans la cornée.",
      reveal: [
        "Doubles lignes blanchâtres courbes, surtout horizontales, au travers de la cornée : stries de Haab (Haab striae), ruptures de la Descemet.",
        "Dues à l’étirement de la cornée par une PIO élevée dans l’enfance; elles persistent à vie.",
        "Les déchirures de la Descemet par traumatisme obstétrical (forceps) sont plutôt verticales ou obliques.",
        "OPH-171 : œil gauche, sur la même page source."
      ] },
    { id: "OPH-172", caption: "Gonioscopie après traumatisme contusif : récession de l’angle et fente de cyclodialyse",
      look: "Identifie les structures de l’angle et cherche une bande anormalement large ou blanche.",
      reveal: [
        "Bande ciliaire brune très large et irrégulière, au centre : récession de l’angle (angle recession), déchirure dans le corps ciliaire.",
        "Bande blanche en bas à droite, entre corps ciliaire et éperon : fente de cyclodialyse (cyclodialysis cleft), corps ciliaire décollé de la sclère.",
        "Impact d’une balle de racquetball; la récession expose à un glaucome tardif, la cyclodialyse à une hypotonie.",
        "Suivre la PIO à long terme après tout traumatisme contusif avec récession."
      ] },
    { id: "OPH-178", caption: "Syndrome ICE : synéchie antérieure périphérique haute jusqu’à la ligne de Schwalbe (gonioscopie)",
      look: "Suis l’iris jusqu’à son point d’attache sur la paroi de l’angle.",
      reveal: [
        "Tissu irien beige qui remonte et s’attache haut, jusqu’à la ligne de Schwalbe : synéchie antérieure périphérique haute (peripheral anterior synechiae).",
        "Une telle hauteur, au-delà du trabéculum, est caractéristique du syndrome ICE : endothélium cornéen anormal qui migre sur l’angle et l’iris.",
        "Autres signes : corectopie (pupille déplacée, voir OPH-179) et atrophie irienne; souvent unilatéral, chez la femme jeune."
      ] },
    { id: "OPH-176", caption: "Sang dans le canal de Schlemm : pression veineuse épisclérale élevée (gonioscopie)",
      look: "Repère la fine ligne rouge sur la paroi de l’angle.",
      reveal: [
        "Ligne rouge fine et continue au niveau du trabéculum, au centre : sang qui reflue dans le canal de Schlemm.",
        "Le sang reflue quand la pression veineuse épisclérale (episcleral venous pressure) dépasse la pression dans le canal; aussi vu si le verre de gonioscopie comprime.",
        "Même patiente : vaisseaux épiscléraux dilatés de longue date à l’œil gauche (OPH-175), HTO, sans fistule carotido-caverneuse à l’imagerie.",
        "Rappel : par les voies trabéculaires, la PIO ne peut pas descendre sous la pression épisclérale."
      ] },
    { id: "OPH-177", caption: "Syndrome de Grant : précipités pigmentés sur le trabéculum antérieur (gonioscopie)",
      look: "Examine la bande du trabéculum dans le miroir.",
      reveal: [
        "Petits dépôts brun-rouge dispersés sur le trabéculum antérieur, au centre : précipités trabéculaires.",
        "Syndrome de Grant : précipités inflammatoires sur le trabéculum, souvent avec une PIO élevée et peu d’inflammation visible en chambre antérieure.",
        "La gonioscopie fait partie du bilan de toute PIO élevée unilatérale ou inexpliquée."
      ] }
  ],

  "a-anatomie": [
    { id: "OPH-121", caption: "Anatomie du segment antérieur en OCT (Visante), structures annotées",
      look: "Associe chaque étiquette rouge à sa structure sur la coupe.",
      reveal: [
        "Cornée (arc gris en haut) : plus mince au centre qu’en périphérie.",
        "Chambre antérieure entre la cornée et l’iris; sa profondeur se mesure au centre (barre jaune verticale).",
        "Angle iridocornéen (en haut à droite) : jonction cornée-iris, où se trouve le trabéculum.",
        "Iris de chaque côté de la pupille (barre jaune horizontale = diamètre pupillaire)."
      ] },
    { id: "OPH-124", caption: "Couches de la cornée en microscopie confocale in vivo (panneaux 1 à 10)",
      look: "Parcours les panneaux du plus superficiel au plus profond.",
      reveal: [
        "Panneaux 1 à 3 : épithélium superficiel, cellules intermédiaires puis basales, de plus en plus petites.",
        "Panneaux 4 et 5 : plexus nerveux sous-basal (lignes blanches) puis couche de Bowman.",
        "Panneaux 6 à 8 : stroma antérieur, moyen et postérieur avec noyaux de kératocytes; flèches = nerfs stromaux.",
        "Panneau 9 : endothélium en mosaïque; panneau 10 : palissades du limbe (flèches noires), siège des cellules souches limbiques."
      ] },
    { id: "OPH-001", caption: "Cornée normale en fente fine : coupe optique mince et transparente",
      look: "Observe l’épaisseur et la transparence de l’arc lumineux formé par la cornée.",
      reveal: [
        "Arc lumineux fin, régulier et transparent (au centre) : coupe optique d’une cornée normale, environ 540–550 µm au centre.",
        "Espace sombre entre cet arc et l’iris : chambre antérieure profonde.",
        "Iris et pupille nets derrière la cornée : aucun voile."
      ] },
    { id: "OPH-003", caption: "Fond d’œil normal d’un enfant (pas une référence adulte)",
      look: "Repère la papille, la macula, la fovéa et les arcades vasculaires.",
      reveal: [
        "Papille rose à bords nets (à droite), petite excavation centrale; vaisseaux qui en sortent vers les arcades supérieure et inférieure.",
        "Macula au centre, avec un reflet fovéolaire brillant en son milieu.",
        "Reflets brillants autour de la macula et le long des vaisseaux : limitante interne très réfléchissante chez l’enfant, normale.",
        "Fond d’œil pédiatrique : ne pas l’utiliser comme témoin apparié d’un fond d’œil adulte."
      ] }
  ],

  "a-lampe": [
    { id: "OPH-001", caption: "Fente fine (coupe optique) sur une cornée normale (lampe à fente)",
      look: "Observe la forme de la coupe et ce qu’elle permet de juger.",
      reveal: [
        "Fente étroite et oblique : elle découpe la cornée en tranche, ce qui permet de juger l’épaisseur et la profondeur d’une lésion.",
        "Arc lumineux continu et homogène : pas d’opacité ni d’amincissement.",
        "Comparer avec la kératite disciforme d’OPH-063 : même technique, coupe épaissie et trouble."
      ] },
    { id: "OPH-033", caption: "Fente fine : localiser la profondeur d’un corps étranger cornéen",
      look: "Repère le point brillant dans l’épaisseur de la coupe.",
      reveal: [
        "Point brillant dans l’épaisseur de l’arc cornéen (bord droit, au centre) : corps étranger dans le stroma, pas en surface.",
        "Seule la coupe optique distingue une lésion superficielle d’une lésion profonde."
      ] },
    { id: "OPH-076", caption: "Fente large : opacités sous-épithéliales d’une kératoconjonctivite adénovirale",
      look: "Dans le bloc de cornée éclairé, regarde à quelle profondeur se trouvent les taches.",
      reveal: [
        "Taches blanches dans le bloc de cornée éclairé (bande bleutée verticale) : infiltrats situés juste sous l’épithélium.",
        "La fente large (parallélépipède) montre un volume de cornée : utile pour situer les opacités en profondeur.",
        "Même pathologie qu’OPH-075."
      ] },
    { id: "OPH-058", caption: "Dispersion sclérale : lumière posée au limbe qui fait ressortir les opacités",
      look: "Regarde où est posée la lumière et ce qui s’illumine dans la cornée.",
      reveal: [
        "Bande lumineuse sur le limbe à droite : la lumière voyage dans la cornée par réflexion interne.",
        "Toute opacité, même discrète, diffuse cette lumière et paraît plus claire : ici, le contour d’un ulcère herpétique au centre.",
        "Technique utile pour l’œdème, les cicatrices et les lignes de rejet de greffe."
      ] },
    { id: "OPH-056", caption: "Rétroillumination sur le reflet rouge : irrégularités épithéliales en relief",
      look: "Contre le reflet rouge, cherche des ombres, des points ou des lignes.",
      reveal: [
        "Fines ponctuations et irrégularités sur tout le reflet rouge : modifications épithéliales (dystrophie de la membrane basale).",
        "Tache blanche au centre-droit : reflet de la lampe, pas une lésion.",
        "La rétroillumination éclaire par l’arrière : les fines opacités apparaissent comme des ombres sur le fond rouge."
      ] },
    { id: "OPH-157", caption: "Transillumination de l’iris : la lumière du fond d’œil traverse l’iris aminci",
      look: "Regarde où l’iris devient rouge alors qu’il devrait rester sombre.",
      reveal: [
        "Pupille rouge (reflet du fond d’œil) et fentes rouges en couronne dans l’iris : zones sans épithélium pigmenté.",
        "Technique : fente courte et coaxiale dans la pupille, en pièce sombre.",
        "Patron radiaire en périphérie moyenne = dispersion pigmentaire; péripupillaire = pseudoexfoliation; sectoriel = après une crise aiguë."
      ] }
  ],

  "a-fluoresceine": [
    { id: "OPH-031", caption: "Fluorescéine en bleu cobalt : défaut épithélial d’abrasion à bords nets",
      look: "Délimite la plage verte et compare-la au reste de la cornée.",
      reveal: [
        "Plage vert vif centrale à bords nets : épithélium absent, la fluorescéine diffuse dans le stroma dénudé.",
        "Ménisques lacrymaux verts le long des paupières : quantité de colorant adéquate.",
        "Le filtre bleu cobalt, avec un filtre jaune si disponible, augmente le contraste du vert."
      ] },
    { id: "OPH-028", caption: "Fluorescéine : érosions ponctuées inférieures par exposition (bleu cobalt)",
      look: "Dans quelle partie de la cornée les points verts se concentrent-ils ?",
      reveal: [
        "Ponctuations vertes confluentes dans la moitié inférieure de la cornée : zone découverte quand la fermeture palpébrale est incomplète.",
        "Moitié supérieure presque épargnée, protégée par la paupière supérieure.",
        "Cause : chirurgies palpébrales multiples (kératopathie d’exposition); autres causes d’atteinte inférieure : blépharite, trichiasis, toxicité des gouttes."
      ] },
    { id: "OPH-020", caption: "Film lacrymal fluorescéiné après le clignement (bleu cobalt)",
      look: "Regarde si le film vert recouvre uniformément la cornée.",
      reveal: [
        "Film vert-bleu qui recouvre la cornée, avec fines ponctuations dispersées : érosions ponctuées.",
        "Ménisque lacrymal inférieur vert vif le long de la paupière : réserve de larmes.",
        "Même patient qu’OPH-022, où des lignes sombres de rupture du film sont visibles."
      ] },
    { id: "OPH-004", caption: "Empreinte épithéliale en anneau après tonométrie d’aplanation (fluorescéine)",
      look: "Cherche une forme ronde de coloration au centre de la cornée.",
      reveal: [
        "Cercle de coloration verte au centre de la cornée : épithélium abîmé par le contact du cône du tonomètre de Goldmann.",
        "Lésion causée par l’examen, pas par la maladie : appliquer doucement, sans frotter, sur une cornée anesthésiée.",
        "Sans gravité en général; un tonomètre mal désinfecté peut toutefois transmettre l’adénovirus."
      ] },
    { id: "OPH-085", caption: "Fluorescéine dans une kératite ulcérative périphérique : défaut épithélial en croissant",
      look: "Repère la zone colorée près du limbe et sa forme.",
      reveal: [
        "Plage vert vif en croissant dans la cornée périphérique supérieure, parallèle au limbe : défaut épithélial au-dessus de la zone de fonte.",
        "Ligne verte en bas : ménisque lacrymal inférieur.",
        "Même patient qu’OPH-083 (kératite ulcérative périphérique sur granulomatose avec polyangéite)."
      ] },
    { id: "OPH-026", caption: "Rose Bengale, autre colorant vital : conjonctive inférieure colorée dans un Sjögren",
      look: "Observe la conjonctive inférieure exposée par le regard vers le haut.",
      reveal: [
        "Ponctuations roses diffuses sur la conjonctive bulbaire inférieure et la cornée inférieure : cellules mal protégées par le mucus.",
        "Le rose Bengale pique à l’instillation; le vert de lissamine donne une information semblable et est mieux toléré.",
        "Syndrome de Sjögren : maladie auto-immune des glandes lacrymales et salivaires, cause de déficit aqueux sévère."
      ] }
  ],

  "a-tonometrie": [
    { id: "OPH-004", caption: "Tonométrie d’aplanation : empreinte en anneau du cône sur l’épithélium (fluorescéine)",
      look: "Relie la forme de la coloration à l’instrument utilisé.",
      reveal: [
        "Anneau vert centré sur la cornée : trace du cône de Goldmann, qui aplanit un disque de 3,06 mm de diamètre.",
        "Pendant la mesure, la fluorescéine rend visibles les deux demi-mires : on lit quand leurs bords internes se touchent (cadran × 10 = mmHg).",
        "Pièges : pression sur les paupières ou apnée surestiment; cornée mince, œdème ou LASIK sous-estiment."
      ] }
  ],

  "a-gonioscopie": [
    { id: "OPH-181", caption: "Gonioscopie d’un angle ouvert avec un iStent dans le trabéculum",
      look: "Nomme les bandes de l’angle de l’iris vers la cornée.",
      reveal: [
        "Ordre à retrouver, de l’iris (à droite) vers la cornée (à gauche) : racine de l’iris, bande ciliaire, éperon scléral, trabéculum, ligne de Schwalbe (I Can’t See Til Schwalbe).",
        "Petit disque brillant au centre, sur le trabéculum : iStent posé dans le canal de Schlemm.",
        "Angle ouvert : plusieurs structures sont visibles en arrière de la ligne de Schwalbe."
      ] },
    { id: "OPH-156", caption: "Gonioscopie : ligne de Sampaolesi en avant de la ligne de Schwalbe",
      look: "Repère la ligne pointée par la tête de flèche et ce qui se trouve juste en dessous.",
      reveal: [
        "Ligne pigmentée ondulée sous la tête de flèche : pigment déposé en avant de la ligne de Schwalbe (ligne de Sampaolesi).",
        "Bande brune juste en dessous : trabéculum pigmenté, la partie fonctionnelle de l’angle.",
        "Penser pseudoexfoliation ou dispersion pigmentaire."
      ] },
    { id: "OPH-172", caption: "Gonioscopie : bande ciliaire élargie (récession) et fente de cyclodialyse",
      look: "Compare la largeur de la bande ciliaire à celle des autres structures.",
      reveal: [
        "Bande ciliaire brune très large au centre : récession de l’angle après contusion.",
        "Bande blanche en bas à droite, entre corps ciliaire et éperon : fente de cyclodialyse, cause possible d’hypotonie.",
        "Toujours comparer avec l’angle de l’autre œil : la récession est souvent sectorielle."
      ] },
    { id: "OPH-180", caption: "Gonioscopie dans un syndrome ICE : synéchie haute et procès ciliaires visibles",
      look: "Suis les flèches : que pointent la flèche noire et les flèches blanches ?",
      reveal: [
        "Flèche noire : synéchie antérieure périphérique haute, l’iris collé sur la paroi de l’angle.",
        "Entre les flèches blanches : procès ciliaires (petites dents régulières) visibles derrière l’iris, inhabituel dans un angle normal.",
        "Même patiente qu’OPH-179 (corectopie de l’œil droit, femme de 30 ans)."
      ] },
    { id: "OPH-174", caption: "Gonioscopie : fente de cyclodialyse nasale après chirurgie de cataracte (deux vues)",
      look: "Dans l’image de droite, regarde ce que pointent les flèches blanches.",
      reveal: [
        "Flèches blanches (image de droite) : bande blanche profonde à la place de la bande ciliaire, corps ciliaire décollé de l’éperon (cyclodialyse).",
        "Contexte : femme de 65 ans en hypotonie (PIO 1–2 mmHg) après chirurgie de cataracte.",
        "L’aqueuse s’écoule directement vers l’espace suprachoroïdien : PIO très basse, plis maculaires possibles."
      ] },
    { id: "OPH-176", caption: "Gonioscopie : sang dans le canal de Schlemm (ligne rouge sur le trabéculum)",
      look: "Repère la fine ligne rouge dans l’angle.",
      reveal: [
        "Ligne rouge continue au niveau du trabéculum : sang qui reflue dans le canal de Schlemm.",
        "Causes : pression veineuse épisclérale élevée, hypotonie, ou pression excessive du verre de gonioscopie.",
        "Chez cette patiente : vaisseaux épiscléraux dilatés et HTO à l’œil gauche (OPH-175)."
      ] }
  ],

  "a-papille": [
    { id: "OPH-187", caption: "Rapport C/D vertical de 0,2 à 0,9 sur quatre papilles (rétinophotographies)",
      look: "Classe les papilles de la plus petite à la plus grande excavation.",
      reveal: [
        "C/D : A 0,2; B 0,5; C 0,7; D 0,9.",
        "L’excavation se repère au coude des vaisseaux qui plongent, pas seulement à la pâleur.",
        "Pâleur plus étendue que l’excavation : penser à une cause non glaucomateuse."
      ] },
    { id: "OPH-189", caption: "Encoche inférieure du rebord neurorétinien, signalée par une flèche (rétinophotographie)",
      look: "Regarde l’épaisseur du rebord à l’endroit pointé par la flèche.",
      reveal: [
        "Rebord neurorétinien presque absent en bas, là où pointe la flèche : encoche inférieure.",
        "Anneau plus sombre autour du disque : atrophie péripapillaire.",
        "Règle ISNT (rebord inférieur ≥ supérieur ≥ nasal ≥ temporal) non respectée : suspect, mais la règle est imparfaite."
      ] },
    { id: "OPH-136", caption: "Lame criblée visible au fond d’une excavation profonde (rétinophotographie agrandie)",
      look: "Décris le fond de l’excavation.",
      reveal: [
        "Petits pores sombres ovalaires dans le fond pâle de l’excavation : lame criblée, traversée par les axones.",
        "Pores visibles = perte importante du tissu neural qui les recouvrait.",
        "Encoche inférotemporale associée (en bas à gauche)."
      ] },
    { id: "OPH-139", caption: "Piège papillaire : croissant gris temporal qui simule un rebord aminci",
      look: "Où se trouve le vrai bord du disque du côté temporal ?",
      reveal: [
        "Bande gris ardoise au bord temporal (à gauche) : pigment dans le tissu papillaire.",
        "Le vrai bord du disque passe en dehors de ce croissant : le rebord temporal est en fait épais et sain.",
        "OCT normal chez ce patient : le croissant gris n’augmente pas le risque de glaucome."
      ] },
    { id: "OPH-008", caption: "Fibres nerveuses myélinisées : plages blanches striées qui masquent les vaisseaux (rétinophotographie)",
      look: "Décris les plages blanches : bords, texture et rapport avec les vaisseaux.",
      reveal: [
        "Plages blanches à bords effilochés en plumes, sous la papille et dans la moitié inférieure de l’image : fibres nerveuses myélinisées.",
        "Vaisseaux en partie cachés : la myéline est dans la couche des fibres, en avant des vaisseaux.",
        "Anomalie congénitale bénigne; ici, elle donne un déficit du champ correspondant (Goldmann d’OPH-009, même patient)."
      ] }
  ],

  "a-oct": [
    { id: "OPH-134", caption: "OCT papille et RNFL des deux yeux : défaut inférieur gauche (Cirrus)",
      look: "Repère où les cartes de déviation se colorent et compare les moyennes.",
      reveal: [
        "Œil gauche : plage rouge-jaune en bas et en temporal de la papille sur la carte de déviation (en bas à droite) : RNFL aminci.",
        "Moyenne RNFL encore verte à gauche (91 µm) : lire les secteurs et les cartes, pas seulement la moyenne.",
        "Œil droit (à gauche du rapport) : RNFL moyen 104 µm, carte de déviation pratiquement sans pixel coloré.",
        "Asymétrie : C/D vertical 0,84 contre 0,66, symétrie RNFL 59 % en rouge."
      ] },
    { id: "OPH-191", caption: "OCT RNFL : amincissement aux deux pôles, avec papille et champ correspondants",
      look: "Lis les quadrants puis les heures, et compare avec la photo et le champ.",
      reveal: [
        "Quadrants : S et I en rouge, N et T en vert : atteinte des deux pôles, typique du glaucome.",
        "Carte de déviation : plages rouges en arc en haut et en bas de la papille.",
        "Concordance structure-fonction avec le champ visuel (en bas à droite) : déficit supérieur avec ressaut nasal."
      ] },
    { id: "OPH-132", caption: "OCT papille et cellules ganglionnaires maculaires très amincies aux deux yeux (glaucome avancé)",
      look: "Lis les moyennes RNFL et GCL+IPL et la couleur des secteurs.",
      reveal: [
        "RNFL moyen à 50 et 47 µm, tout en rouge : proche de l’effet plancher (environ 50–60 µm), où l’OCT RNFL ne suit plus la progression.",
        "Analyse maculaire (à droite) : GCL+IPL moyenne de 54 µm aux deux yeux, secteurs rouges : perte des cellules ganglionnaires maculaires.",
        "Au stade avancé, suivre surtout le champ visuel et l’OCT maculaire.",
        "Même patiente qu’OPH-131 (excavation profonde et vaisseaux en baïonnette)."
      ] },
    { id: "OPH-011", caption: "OCT maculaire : traction vitréomaculaire avec œdème maculaire cystoïde",
      look: "Suis la fine ligne du vitré au-dessus de la rétine et regarde la fovéa.",
      reveal: [
        "Fine ligne de la hyaloïde postérieure attachée à la fovéa, qu’elle tire vers le haut (au centre de la coupe, à droite) : traction vitréomaculaire.",
        "Espaces sombres arrondis dans la rétine sous la traction : kystes d’œdème maculaire.",
        "Image infrarouge à gauche, ligne verte = position de la coupe; un œdème maculaire peut fausser l’OCT ganglionnaire maculaire (green disease)."
      ] },
    { id: "OPH-122", caption: "OCT du segment antérieur (Visante) : greffon DMEK mal adhérent sur quatre coupes",
      look: "Sur chaque coupe, compare la face postérieure de la cornée et la fine ligne qui la suit.",
      reveal: [
        "Fine ligne séparée de la face postérieure de la cornée sur les quatre coupes, surtout dans la moitié gauche de chacune : greffon DMEK décollé.",
        "Repères « Orientation » au-dessus de chaque coupe : la queue de la flèche correspond au côté gauche de l’image.",
        "Le greffon a adhéré après une nouvelle bulle d’air en chambre antérieure."
      ] }
  ],

  "a-topographie": [
    { id: "OPH-038", caption: "Topographie : astigmatisme direct, nœud papillon vertical (carte de courbure)",
      look: "Repère l’orientation de la zone chaude et lis les kératométries simulées.",
      reveal: [
        "Nœud papillon rouge-orangé vertical au centre, deux lobes alignés sur le même axe : méridien vertical plus cambré, astigmatisme direct (with-the-rule).",
        "Kératométrie simulée : 44,75 D à 96° contre 41,62 D à 6°, astigmatisme de 3,13 D.",
        "Couleurs chaudes = cambré, froides = plat; toujours lire l’échelle de couleurs à gauche."
      ] },
    { id: "OPH-037", caption: "Topographie : astigmatisme inverse, nœud papillon horizontal (carte de courbure)",
      look: "Repère l’orientation de la zone chaude et compare avec OPH-038.",
      reveal: [
        "Nœud papillon orangé horizontal au centre : méridien horizontal plus cambré, astigmatisme inverse (against-the-rule).",
        "Kératométrie simulée : 44,50 D à 176° contre 42,75 D à 86°, astigmatisme de 1,75 D.",
        "Moitiés supérieure et inférieure symétriques : astigmatisme régulier, sans signe d’ectasie."
      ] },
    { id: "OPH-114", caption: "Rapport de topographie Zeiss Atlas : quatre fenêtres à lire (astigmatisme direct)",
      look: "Trouve l’image des anneaux de Placido, puis les cartes tangentielle, axiale et d’élévation.",
      reveal: [
        "Image des anneaux (en bas à gauche) : mires régulières, surface sans sécheresse ni irrégularité.",
        "Cartes tangentielle (en haut à gauche) et axiale (en bas à droite) : cambrure verticale, K le plus cambré 46,76 D à 83°, astigmatisme de 2,88 D.",
        "Carte d’élévation (en haut à droite) : écart par rapport à une sphère de référence."
      ] },
    { id: "OPH-117", caption: "Pentacam « 4 cartes » sans signe d’ectasie visible : référence de lecture",
      look: "Pour chaque carte, regarde la symétrie et lis les valeurs au centre.",
      reveal: [
        "Courbure axiale (en haut à gauche) : nœud papillon régulier, autour de 43–45 D.",
        "Pachymétrie (en bas à gauche) : 543 µm au centre, point le plus mince à 538 µm près du centre, épaississement régulier vers la périphérie.",
        "Élévations antérieure et postérieure (à droite) : valeurs centrales faibles (+5 et +6 µm), sans îlot chaud.",
        "Comparer avec le kératocône d’OPH-120 : même appareil, même affichage."
      ] },
    { id: "OPH-118", caption: "Carte axiale : dégénérescence marginale pellucide (A) contre kératocône (B)",
      look: "Compare la forme des zones chaudes dans les deux cartes.",
      reveal: [
        "A : zones chaudes de part et d’autre, recourbées vers le bas, centre plus plat : pince de crabe (crab claw), astigmatisme inverse élevé de la dégénérescence marginale pellucide.",
        "B : îlot chaud inférieur, jusqu’à 56 D : cambrure inférieure du kératocône.",
        "Dans la dégénérescence pellucide, l’amincissement forme une bande inférieure à 1–2 mm du limbe, sous la zone qui bombe."
      ] },
    { id: "OPH-036", caption: "Image Scheimpflug d’un kératocône : coupe de la cornée bombée et amincie",
      look: "Suis l’arc de la cornée et compare son épaisseur au centre et sur les côtés.",
      reveal: [
        "Arc cornéen projeté vers l’avant en cône, au centre de la coupe : ectasie.",
        "Cornée plus mince au sommet que sur les côtés : amincissement central.",
        "La caméra Scheimpflug (Pentacam) reconstruit les faces antérieure et postérieure : elle détecte l’élévation postérieure, un marqueur précoce."
      ] }
  ],

  "a-champs-visuels": [
    { id: "OPH-013", caption: "Humphrey 24-2 normal et fiable, rapport annoté (SITA Standard)",
      look: "Lis d’abord les indices de fiabilité, puis les indices globaux et les cartes.",
      reveal: [
        "Fiabilité (en haut à gauche) : pertes de fixation 1/13, faux positifs 1 %, faux négatifs 0 %.",
        "Indices (à droite) : GHT dans les limites normales, VFI 100 %, MD +0,28 dB, PSD 1,21 dB.",
        "Cartes de probabilité (en bas) sans grappe de carrés foncés : champ normal.",
        "Tache aveugle sur l’échelle de gris (à droite du centre) : côté temporal, ici l’œil droit."
      ] },
    { id: "OPH-190", caption: "Humphrey : déficit arciforme supérieur qui respecte le méridien horizontal",
      look: "Repère la limite nette du déficit et la ligne qu’elle suit.",
      reveal: [
        "Plage noire en haut à gauche qui s’arrête sur la ligne horizontale : ressaut nasal supérieur.",
        "Déviation individuelle (à droite) : carrés noirs groupés en haut, déficit localisé et non dépression diffuse.",
        "Respect du méridien horizontal = fibres nerveuses (glaucome); du méridien vertical = chiasma ou voies postérieures."
      ] },
    { id: "OPH-014", caption: "Champ de Goldmann : isoptères concentriques réguliers annotés « OK »",
      look: "Suis chaque isoptère coloré et repère la tache aveugle.",
      reveal: [
        "Quatre courbes de couleur emboîtées (violet, bleu, rouge, vert) : isoptères obtenus avec des stimuli de taille et d’intensité différentes.",
        "Petite plage rouge pleine à droite du centre : tache aveugle physiologique.",
        "Courbes régulières annotées « OK » : aspect normal; le Goldmann est cinétique (stimulus en mouvement), le Humphrey statique."
      ] },
    { id: "OPH-009", caption: "Goldmann : isoptères centraux déprimés en regard de fibres myélinisées",
      look: "Compare la forme des isoptères internes avec un champ normal (OPH-014).",
      reveal: [
        "Isoptères internes (bleu, gris, rouge) déformés et rétrécis du côté droit du centre : déficit relatif.",
        "Dépression des isoptères I4e, I3e et I2e dans la région des fibres myélinisées (OPH-008, même patient).",
        "Un déficit du champ n’est pas toujours glaucomateux : corréler avec la papille et la rétine."
      ] }
  ],

  "a-speculaire": [
    { id: "OPH-052", caption: "Microscopie spéculaire : guttae et perte cellulaire dans la dystrophie de Fuchs",
      look: "Distingue les cellules polygonales des zones noires.",
      reveal: [
        "Zones noires arrondies au centre et dans la moitié droite : guttae, sans cellules visibles.",
        "Cellules restantes surtout dans la moitié gauche, de tailles inégales : polymégathisme.",
        "Paramètres à lire : densité (cell/mm²), coefficient de variation (polymégathisme), pourcentage d’hexagones (pléomorphisme)."
      ] },
    { id: "OPH-125", caption: "Endothélium normal en microscopie confocale, avec compte cellulaire (2564 cell/mm²)",
      look: "Lis le compte cellulaire et regarde la régularité de la mosaïque.",
      reveal: [
        "Mosaïque de petites cellules régulières, à peu près de même taille : endothélium sain.",
        "Compte de 2564 cell/mm² (à droite), dans l’intervalle normal affiché par l’appareil (1706–3232).",
        "Repères : environ 3000–3500 cell/mm² chez le jeune adulte, 2500 vers 60–70 ans; décompensation en général sous 400–500.",
        "Image confocale et non spéculaire, mais les mêmes paramètres se lisent."
      ] },
    { id: "OPH-126", caption: "Confocale : guttae, zones noires qui interrompent la mosaïque endothéliale (Fuchs)",
      look: "Compare cette mosaïque avec celle d’OPH-125.",
      reveal: [
        "Taches noires dispersées : guttae, vues en noir comme en microscopie spéculaire.",
        "Moins de cellules fonctionnelles par mm² là où les guttae se multiplient; grossissement possiblement différent de celui d’OPH-125, donc ne pas comparer la taille des cellules."
      ] },
    { id: "OPH-127", caption: "Confocale d’une greffe transfixiante décompensée : aucune cellule endothéliale identifiable",
      look: "Cherche une mosaïque cellulaire comme sur OPH-125.",
      reveal: [
        "Image floue et granuleuse, sans contour de cellule : aucune cellule endothéliale identifiable.",
        "Greffe décompensée : la pompe endothéliale ne fonctionne plus, d’où l’œdème; une nouvelle greffe endothéliale est en général nécessaire."
      ] }
  ],

  "a-pachymetrie": [
    { id: "OPH-116", caption: "Carte pachymétrique Pentacam : épaisseur centrale et point le plus mince",
      look: "Lis l’épaisseur au centre, au point le plus mince et en périphérie.",
      reveal: [
        "Carte (en bas à droite) : 543 µm au centre, 591 à 647 µm plus loin : la cornée s’épaissit du centre vers le bord.",
        "Point le plus mince à 538 µm, presque au centre (fenêtre de mesures) : répartition normale.",
        "Cornée mince = Goldmann qui sous-estime, épaisse = surestime; ne pas appliquer mécaniquement de formule de correction."
      ] },
    { id: "OPH-123", caption: "OCT après LASIK : épaisseur totale et lit stromal résiduel sous le volet",
      look: "Associe chaque paire de valeurs à une position sur la cornée.",
      reveal: [
        "Près du centre : épaisseur totale de 525 µm et lit stromal résiduel de 321 µm.",
        "Plus en périphérie (à −2,80 mm et +2,10 mm) : lit résiduel de 399 et 377 µm.",
        "Avant une retouche, un lit résiduel de moins de 300 µm la contre-indique dans certains centres.",
        "Après LASIK, la cornée amincie fait sous-estimer la PIO."
      ] },
    { id: "OPH-045", caption: "Hydrops au Pentacam : carte pachymétrique très épaissie par l’œdème",
      look: "Lis les valeurs de la carte d’épaisseur (en bas à gauche) et compare-les à une cornée normale.",
      reveal: [
        "Carte d’épaisseur (en bas à gauche) : valeurs de 900 à plus de 3000 µm, au lieu d’environ 550 µm : œdème stromal massif.",
        "Cartes de courbure et d’élévation (en haut) désorganisées : mesures peu fiables tant que l’œdème persiste.",
        "Même cas qu’OPH-043 et OPH-044 (hydrops aigu vu à la lampe à fente)."
      ] }
  ]
};

G.OPH.photoPairs = [
  { key: "c-herpes", normal: "OPH-001", patho: "OPH-063",
    note: "Même technique : fente fine (coupe optique) photographiée de biais, sur le fond sombre de la pupille. Comparer seulement l’arc cornéen : mince et transparent sur OPH-001, épaissi et opalescent au centre sur OPH-063 (œdème stromal de la kératite disciforme). Patients et grossissements différents." },
  { key: "c-keratocone", normal: "OPH-117", patho: "OPH-120",
    note: "Même appareil (Pentacam) et même affichage « 4 cartes » : courbure axiale, élévations antérieure et postérieure, pachymétrie. OPH-117 ne montre aucun signe d’ectasie visible (référence de lecture, pas un témoin apparié); OPH-120 montre cambrure inférieure, point le plus mince décentré et bombements." },
  { key: "c-fuchs", normal: "OPH-125", patho: "OPH-126",
    note: "Même examen, tiré du même tutoriel : microscopie confocale centrée sur l’endothélium. Mosaïque régulière et continue (OPH-125) contre mosaïque interrompue par des guttae noires (OPH-126). Grossissements possiblement différents : comparer la continuité de la mosaïque, pas la taille des cellules." },
  { key: "c-greffe", normal: "OPH-125", patho: "OPH-127",
    note: "Même examen confocal au niveau de l’endothélium : mosaïque cellulaire normale (OPH-125) contre greffe transfixiante décompensée, sans cellule identifiable (OPH-127)." },
  { key: "g-fermeture", normal: "OPH-121", patho: "OPH-147",
    note: "Même examen : OCT du segment antérieur, coupe horizontale qui passe par les deux angles. Angles ouverts et iris plat (OPH-121) contre iris poussé contre la cornée (OPH-147). La fermeture d’OPH-147 est secondaire (gaz après DMEK), mais le contact iridocornéen à l’OCT est le même signe que dans une fermeture primaire. Appareils et contrastes un peu différents." },
  { key: "a-oct", normal: "OPH-134", patho: "OPH-132",
    note: "Même appareil et même rapport (Cirrus, ONH and RNFL OU Analysis, cube 200x200). Prendre comme référence l’œil droit d’OPH-134 (RNFL moyen 104 µm, carte de déviation pratiquement sans pixel coloré) : l’œil gauche du même rapport est anormal en inférieur. OPH-132 montre une atteinte avancée aux deux yeux (RNFL moyen 50 et 47 µm)." }
];
