var G = (typeof window !== 'undefined') ? window : globalThis;
G.OPH = G.OPH || {};

// Module D (rétine) : photos des fiches. La 1re photo de chaque clé est celle de « Voir » (data/voir-hotspots.js).
// license = licence de l’image telle qu’au catalogue (imgsrc3/catalog3.json pour IMG3-*, EyeRounds CC BY-NC-ND 3.0 pour OPH-*).
// Préférence du projet : à qualité égale, une image réutilisable commercialement (CC0, domaine public, CC BY, CC BY-SA).
// Images intactes (redimensionnées seulement) ; les trouvailles sont décrites en texte, les annotations sont des calques.
G.OPH.photos = G.OPH.photos || {};
(function (add) { Object.keys(add).forEach(function (k) { G.OPH.photos[k] = (G.OPH.photos[k] || []).concat(add[k]); }); })({

  "r-decollement": [
    { id: "IMG3-034", license: "CC BY-SA 4.0", caption: "Décollement de rétine sur déchirure en fer à cheval (photo grand champ)",
      look: "Cherche la perte de substance de la rétine, dans la moitié inférieure.",
      reveal: [
        "Déchirure en fer à cheval en bas, au centre de l’image : la rétine présente une perte de substance en forme de fer à cheval.",
        "Le vitré liquide passe par cette déchirure et soulève la rétine : décollement rhegmatogène (du grec rhegma, « déchirure »).",
        "Couleurs non naturelles : photo grand champ à balayage laser."
      ] },
    { id: "OPH-287", license: "CC BY-NC-ND 3.0", caption: "Décollement de rétine rhegmatogène, macula décollée",
      look: "Compare la rétine de part et d’autre des flèches.",
      reveal: [
        "Flèches : limite du décollement ; du côté de la macula, la rétine est soulevée, plus terne.",
        "La macula est dans la zone décollée : vision centrale atteinte, récupération moins bonne.",
        "Autour de la papille, la rétine est encore à plat."
      ] },
    { id: "IMG3-005", license: "CC BY 4.0", caption: "Échographie B : rétine décollée, attachée à la papille et à l’ora serrata",
      look: "Repère la membrane dans le globe et ses points d’attache.",
      reveal: [
        "Membrane échogène dans la cavité vitréenne : rétine décollée.",
        "Attachée en arrière à la papille (*) et en avant à l’ora serrata (flèches) : c’est ce qui la distingue d’un décollement du vitré.",
        "Utile quand une hémorragie du vitré ou une cataracte cache le fond d’œil."
      ] }
  ],

  "r-oacr": [
    { id: "IMG3-029", license: "CC BY-SA 4.0", caption: "Occlusion de l’artère centrale de la rétine : tache rouge cerise",
      look: "Regarde la couleur de la rétine autour de la macula, puis son centre.",
      reveal: [
        "Tache rouge cerise à la fovéa : la choroïde, intacte, se voit à travers une fovéa sans rétine interne.",
        "Rétine pâle et œdémateuse autour : couches internes privées d’oxygène.",
        "C’est un AVC de l’œil. Urgence : immédiatement (le jour même), comme un AVC ; VS, CRP et plaquettes dès 50 ans."
      ] },
    { id: "OPH-249", license: "CC BY-NC-ND 3.0", caption: "Occlusion de l’artère centrale : rétine blanchie, zone restée rouge près de la papille",
      look: "Compare la couleur de la rétine entre la papille et la macula, et ailleurs.",
      reveal: [
        "Rétine blanc-jaune presque partout : ischémie des couches internes.",
        "Zone rouge entre la papille et la macula : rétine encore perfusée, qui évoque une artère ciliorétinienne épargnée.",
        "Si cette zone couvre la fovéa, une partie de la vision centrale peut être préservée."
      ] },
    { id: "OPH-274", license: "CC BY-NC-ND 3.0", caption: "Artérite à cellules géantes : papille pâle et gonflée (neuropathie optique ischémique)",
      look: "Observe la couleur et les bords de la papille.",
      reveal: [
        "Papille blanc crayeux et gonflée, bords flous : neuropathie optique ischémique antérieure artéritique.",
        "Même maladie que l’OACR artéritique : VS, CRP, plaquettes et corticostéroïdes sans attendre la biopsie.",
        "L’autre œil est menacé dans les jours qui suivent sans traitement."
      ] }
  ],

  "r-ovr": [
    { id: "IMG3-030", license: "CC BY 4.0", caption: "Occlusion de la veine centrale : fond d’œil (a) et angiographie (b)",
      look: "Sur l’image a, regarde où se trouvent les hémorragies.",
      reveal: [
        "Hémorragies intrarétiniennes dans les quatre quadrants, autour d’une papille congestive : occlusion de la veine centrale.",
        "Image b (angiographie à la fluorescéine) : les hémorragies masquent la fluorescence de la choroïde (taches sombres).",
        "Suivre l’iris et l’angle chaque mois au début : risque de glaucome néovasculaire si la forme est ischémique."
      ] },
    { id: "OPH-254", license: "CC BY-NC-ND 3.0", caption: "Occlusion d’une branche veineuse : hémorragies dans un secteur",
      look: "Repère la limite supérieure des hémorragies.",
      reveal: [
        "Hémorragies limitées au secteur temporal inférieur, entre la papille et la périphérie.",
        "La limite supérieure suit le raphé horizontal : la moitié supérieure est épargnée.",
        "La macula est menacée par l’œdème : OCT, puis anti-VEGF si la vision baisse."
      ] }
  ],

  "r-diabete": [
    { id: "IMG3-031", license: "Domaine public (National Eye Institute)", caption: "Rétinopathie diabétique proliférante : néovaisseaux et tissu fibreux",
      look: "Observe la papille et ce qui pousse dessus.",
      reveal: [
        "Néovaisseaux fins en éventail sur et autour de la papille : rétinopathie diabétique proliférante.",
        "Plages blanches à la surface de la rétine : tissu cicatriciel qui accompagne les néovaisseaux ; il peut tirer la rétine.",
        "Risque d’hémorragie du vitré et de décollement tractionnel : ophtalmologiste en quelques jours (laser panrétinien ou anti-VEGF)."
      ] },
    { id: "IMG3-033", license: "Domaine public (National Eye Institute)", caption: "Œdème maculaire diabétique : exsudats durs autour de la macula",
      look: "Repère les dépôts jaunes et leur position par rapport au centre.",
      reveal: [
        "Exsudats durs jaunes en amas autour de la macula : lipides qui ont fui des capillaires.",
        "Œdème maculaire diabétique : OCT, puis anti-VEGF s’il touche le centre.",
        "Mention « PRETREATMENT » : photo prise avant traitement."
      ] },
    { id: "IMG3-032", license: "Domaine public (National Eye Institute)", caption: "Rétinopathie diabétique non proliférante (« de fond »)",
      look: "Cherche de petits points rouges entre les vaisseaux.",
      reveal: [
        "Petits points rouges épars : microanévrismes et petites hémorragies.",
        "Pas de néovaisseaux visibles : forme non proliférante, suivi selon la sévérité.",
        "Contrôle de la glycémie et de la TA : ralentit la progression."
      ] },
    { id: "IMG3-061", license: "Domaine public (National Eye Institute)", caption: "Après laser panrétinien : cicatrices rondes en périphérie",
      look: "Compare la périphérie et le centre de la rétine.",
      reveal: [
        "Taches rondes pâles, en rangées, sur toute la périphérie : cicatrices de laser panrétinien (en dispersion).",
        "La macula et la zone autour de la papille sont épargnées : on garde la vision centrale.",
        "Prix à payer : champ périphérique et vision nocturne réduits."
      ] }
  ],

  "r-dmla": [
    { id: "OPH-265", license: "CC BY-NC-ND 3.0", caption: "DMLA intermédiaire à haut risque : drusens maculaires",
      look: "Observe les dépôts jaunes au centre de l’image.",
      reveal: [
        "Drusens jaunes nombreux, de tailles variées, groupés dans la macula : DMLA intermédiaire.",
        "Conduite : AREDS2, arrêt du tabac, Amsler à domicile un œil à la fois.",
        "Lignes ondulées nouvelles : ophtalmologie en quelques jours (forme humide)."
      ] },
    { id: "OPH-264", license: "CC BY-NC-ND 3.0", caption: "DMLA précoce : petits drusens près de la fovéa",
      look: "Cherche de petits points jaunes autour du centre de la macula.",
      reveal: [
        "Petits drusens épars autour de la fovéa : DMLA précoce.",
        "Pas d’AREDS2 à ce stade (aucun bénéfice prouvé) ; arrêt du tabac et suivi."
      ] }
  ],

  "r-hta": [
    { id: "OPH-257", license: "CC BY-NC-ND 3.0", caption: "Hypertension maligne chez un homme de 52 ans",
      look: "Regarde la papille, puis les taches blanches et rouges autour.",
      reveal: [
        "Papille gonflée aux bords flous : forme sévère (maligne), urgence hypertensive.",
        "Nodules cotonneux blancs nombreux autour de la papille et le long des arcades : micro-infarctus.",
        "Hémorragies en flammèches près de la papille.",
        "Conduite : urgence, baisse contrôlée de la TA, recherche d’autres atteintes d’organes."
      ] },
    { id: "OPH-256", license: "CC BY-NC-ND 3.0", caption: "Rétinopathie hypertensive : papille gonflée, nodules cotonneux, exsudats",
      look: "Compare la zone entre la papille et la fovéa avec le reste.",
      reveal: [
        "Exsudats durs entre la papille et la fovéa : début d’étoile maculaire.",
        "Nodules cotonneux et hémorragies près de la papille, qui est gonflée.",
        "Homme de 37 ans : chercher une HTA secondaire."
      ] }
  ],

  "r-dpv": [
    { id: "OPH-275", license: "CC BY-NC-ND 3.0", caption: "Décollement postérieur du vitré : anneau de Weiss devant la papille",
      look: "Repère l’anneau qui flotte en avant de la rétine, près de la papille.",
      reveal: [
        "Anneau ovale à droite de la papille : anneau de Weiss, tissu arraché autour de la papille quand le vitré s’est détaché.",
        "Image un peu floue : l’anneau flotte dans le vitré, en avant du plan de la rétine.",
        "Le DPV est confirmé ; reste à examiner la périphérie dilatée pour une déchirure."
      ] },
    { id: "OPH-273", license: "CC BY-NC-ND 3.0", caption: "Dégénérescence palissadique de la rétine périphérique",
      look: "Cherche une bande de rétine différente en périphérie.",
      reveal: [
        "Bande de rétine amincie en périphérie : palissades (lattice degeneration).",
        "Le vitré y adhère fort : site fréquent de déchirures quand il se décolle.",
        "Sans symptôme, pas de laser systématique ; consignes de retour."
      ] }
  ],

  "r-endophtalmie": [
    { id: "OPH-198", license: "CC BY-NC-ND 3.0", caption: "Endophtalmie : œil rouge et hypopyon",
      look: "Regarde le bas de la chambre antérieure, derrière la cornée.",
      reveal: [
        "Niveau blanc-jaune en bas de la chambre antérieure : hypopyon (pus).",
        "Conjonctive très rouge : inflammation intense.",
        "Après une chirurgie ou une injection : endophtalmie, ophtalmologiste le jour même."
      ] }
  ],

  "bonus-D": [
    { id: "IMG3-062", license: "Domaine public (National Eye Institute)", caption: "Rétinite à cytomégalovirus",
      look: "Observe la plage blanche et ce qui la borde.",
      reveal: [
        "Plage blanche de rétine nécrosée, bordée d’hémorragies, près de la papille et de la macula : rétinite à CMV.",
        "Terrain : immunodépression profonde (VIH avec CD4 bas, greffe).",
        "Antiviral systémique avec l’infectiologie ; la macula est menacée."
      ] }
  ]
});
