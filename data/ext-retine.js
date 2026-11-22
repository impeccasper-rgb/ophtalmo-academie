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
        "C’est un AVC de l’œil : urgence d’un centre de l’AVC ; VS, CRP et plaquettes dès 50 ans."
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
  ]
});
