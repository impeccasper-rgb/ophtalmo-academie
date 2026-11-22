var G = (typeof window !== 'undefined') ? window : globalThis;
G.OPH = G.OPH || {};
G.OPH.hy = G.OPH.hy || {};
// Couche « high yield » du module D (rétine) : essentiels (Comprendre), mots troués, triage, indices (jeux de révision).
Object.assign(G.OPH.hy, {
  "r-decollement": {
    essentials: [
      "**Éclairs et corps flottants** nouveaux : DPV jusqu’à preuve du contraire ; environ 14 % ont une déchirure.",
      "**Rideau** ou baisse de vision : ophtalmologiste de garde **le jour même**.",
      "Seul le **fond d’œil dilaté** avec dépression sclérale voit la périphérie, où naissent les déchirures.",
      "Déchirure sans décollement : **laser** en clinique ; décollement : chirurgie avant que la **macula** se décolle.",
      "Bulle de gaz dans l’œil : **ni avion, ni altitude, ni protoxyde d’azote**."
    ],
    cloze: [
      "Pigment brun dans le vitré antérieur (signe de [[Shafer]]) : déchirure probable.",
      "Un décollement de la rétine supérieure donne un rideau dans le champ [[inférieur|bas]].",
      "Bulle de gaz intraoculaire : le [[protoxyde d’azote|protoxyde d'azote|N2O]] est contre-indiqué à l’anesthésie.",
      "Hémorragie du vitré qui cache le fond d’œil : [[échographie B|échographie|écho B]] pour voir la rétine.",
      "Macula encore à plat : chirurgie [[urgente|le plus tôt possible]], avant que la vision centrale tombe."
    ],
    triage: [
      { s: "Homme de 60 ans : quelques corps flottants et un éclair depuis hier, vision et champ normaux.", u: "rapide", why: "DPV probable : examen dilaté dans les 24 h et consignes de retour (rideau, nuée, baisse de vision)." },
      { s: "Myope de 45 ans : ombre qui monte depuis le bas du champ droit depuis ce matin, acuité 6/9.", u: "urgent", why: "Décollement supérieur, macula probablement encore à plat : ophtalmologiste de garde le jour même." },
      { s: "DPV sans déchirure diagnostiqué il y a 3 semaines ; corps flottants stables, moins gênants.", u: "routine", why: "Évolution habituelle : suivi prévu ; revenir si les symptômes changent." }
    ],
    cues: ["Éclairs, nuée de corps flottants, rideau inférieur", "Pigment « poussière de tabac » dans le vitré"]
  },
  "r-oacr": {
    essentials: [
      "Perte de vision **brutale, indolore**, d’un œil : **AVC de l’œil** jusqu’à preuve du contraire.",
      "**Urgence d’un centre de l’AVC** le jour même : IRM, carotides, rythme cardiaque, échographie.",
      "Dès **50 ans** : VS, CRP, plaquettes ; **corticostéroïdes** sans attendre la biopsie si ACG suspectée.",
      "Rétine blanche et **tache rouge cerise** : la fovéa reste nourrie par la choroïde.",
      "Massage, paracentèse, thrombolyse : **aucun bénéfice visuel prouvé** ; ne pas retarder le bilan."
    ],
    cloze: [
      "Embole de cholestérol brillant à une bifurcation artérielle : plaque de [[Hollenhorst]].",
      "La fovéa reste rouge car elle est nourrie par la [[choroïde]].",
      "Perte de vision transitoire d’un œil pendant quelques minutes : amaurose [[fugace]], même bilan que l’AIT.",
      "OACR et claudication de la mâchoire à 75 ans : penser à l’artérite à [[cellules géantes]].",
      "Une artère [[ciliorétinienne]] peut épargner une partie de la macula."
    ],
    triage: [
      { s: "Homme de 68 ans : perte de vision indolore de l’œil gauche il y a 1 h, DPAR gauche.", u: "urgent", why: "OACR probable : urgence d’un centre de l’AVC maintenant ; VS, CRP, plaquettes." },
      { s: "Femme de 79 ans : flou soudain de l’œil droit, céphalée temporale, douleur en mâchant depuis 2 semaines.", u: "urgent", why: "ACG probable : VS, CRP, plaquettes et corticostéroïdes le jour même." },
      { s: "Homme de 66 ans : voile noir sur l’œil droit pendant 5 minutes hier, vision normale aujourd’hui.", u: "urgent", why: "Amaurose fugace = AIT : bilan urgent (carotides, rythme) le jour même." }
    ],
    cues: ["Perte brutale indolore, DPAR, tache rouge cerise", "Embole brillant à une bifurcation artérielle"]
  },
  "r-ovr": {
    essentials: [
      "Hémorragies en **flammèches** : un secteur = **branche** ; 4 quadrants = **veine centrale**.",
      "Principale cause de baisse de vision : l’**œdème maculaire**, traité par **anti-VEGF** intravitréen.",
      "Forme **ischémique** : néovaisseaux, **glaucome néovasculaire** ; iris et angle chaque mois au début.",
      "Bilan : **TA**, glycémie, lipides, FSC ; **PIO** (glaucome souvent associé).",
      "Jeune ou deux yeux atteints : **coagulation**, hyperviscosité, vasculite."
    ],
    cloze: [
      "Les hémorragies d’une occlusion de branche s’arrêtent au [[raphé horizontal|raphé]].",
      "Après une occlusion ischémique de la veine centrale, guetter le glaucome [[néovasculaire]].",
      "Le premier traitement de l’œdème maculaire est l’injection d’[[anti-VEGF|anti VEGF]] dans le vitré.",
      "Une occlusion de branche naît le plus souvent à un croisement [[artère-veine|artérioveineux|artério-veineux]].",
      "Le principal facteur de risque systémique des occlusions veineuses est l’[[hypertension|HTA|hypertension artérielle]]."
    ],
    triage: [
      { s: "Femme de 70 ans : flou de l’œil droit depuis 4 jours, hémorragies dans un secteur, acuité 6/18.", u: "rapide", why: "Occlusion de branche avec atteinte maculaire probable : ophtalmologie dans la semaine, TA mesurée." },
      { s: "Homme de 68 ans, occlusion de la veine centrale il y a 2 mois : œil rouge, douloureux, PIO 48 mmHg.", u: "urgent", why: "Glaucome néovasculaire : ophtalmologiste le jour même." },
      { s: "Homme de 57 ans : anciennes hémorragies d’une branche découvertes par hasard, acuité 6/6, macula sèche.", u: "routine", why: "Suivi en ophtalmologie et contrôle des facteurs de risque." }
    ],
    cues: ["Flammèches dans un secteur, raphé respecté", "Hémorragies des 4 quadrants, veines tortueuses"]
  }
});
