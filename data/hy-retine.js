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
  },
  "r-diabete": {
    essentials: [
      "**Dépister** : type 2 au diagnostic ; type 1 dès 5 ans d’évolution (à partir de 15 ans).",
      "Sans rétinopathie : type 1 **chaque année**, type 2 **aux 1–2 ans** (Diabetes Canada).",
      "**Néovaisseaux** ou forme sévère (règle 4-2-1) : ophtalmologiste **en quelques jours**.",
      "Œdème maculaire qui touche le centre : **anti-VEGF** ; forme proliférante : **laser panrétinien** ou anti-VEGF.",
      "HbA1c, **TA**, lipides ; **grossesse** : examen au 1er trimestre."
    ],
    cloze: [
      "Forme non proliférante sévère : hémorragies dans 4 quadrants, veines en chapelet dans 2, [[IRMA]] dans 1.",
      "La forme proliférante se traite par laser [[panrétinien|pan-rétinien|PRP]] ou anti-VEGF.",
      "Diabète de type 2 sans rétinopathie : nouvel examen des yeux aux [[1–2 ans|1-2 ans|2 ans]].",
      "Diabète de type 1 : premier dépistage [[5 ans|cinq ans]] après le diagnostic, à partir de 15 ans.",
      "En ajout à une statine, le [[fénofibrate]] peut ralentir une rétinopathie établie (type 2)."
    ],
    triage: [
      { s: "Diabétique de type 2 depuis 15 ans : voile brutal et pluie de points noirs dans l’œil droit ce matin.", u: "urgent", why: "Hémorragie du vitré probable : ophtalmologie en urgence, échographie B si le fond est caché." },
      { s: "Photos de dépistage : néovaisseaux sur la papille, vision 6/6, aucun symptôme.", u: "rapide", why: "Forme proliférante : ophtalmologiste en quelques jours (laser panrétinien ou anti-VEGF)." },
      { s: "Diabète de type 2 depuis 3 ans, aucune rétinopathie au dernier examen il y a 1 an.", u: "routine", why: "Prochain dépistage dans 1 an environ (intervalle de 1–2 ans)." }
    ],
    cues: ["Néovaisseaux en éventail sur la papille", "Exsudats durs en couronne autour de la macula"]
  },
  "r-dmla": {
    essentials: [
      "**Métamorphopsies** nouvelles après 50 ans : forme humide jusqu’à preuve du contraire, ophtalmologie **en quelques jours**.",
      "Forme humide : **anti-VEGF** intravitréen, injections répétées.",
      "**AREDS2** : forme intermédiaire ou avancée à un œil ; inutile dans la forme précoce.",
      "**Tabac** : le grand facteur modifiable ; pas de **bêtacarotène** chez le fumeur.",
      "**Amsler** un œil à la fois, à domicile, si gros drusens."
    ],
    cloze: [
      "Les dépôts jaunâtres sous l’épithélium pigmentaire s’appellent des [[drusens|drusen]].",
      "La forme sèche avancée de la DMLA s’appelle l’atrophie [[géographique]].",
      "L’AREDS2 a remplacé le bêtacarotène par la lutéine et la [[zéaxanthine]].",
      "Des lignes droites qui ondulent sont des [[métamorphopsies|métamorphopsie]].",
      "Les néovaisseaux de la forme humide franchissent la membrane de [[Bruch]]."
    ],
    triage: [
      { s: "Femme de 80 ans : depuis 3 jours, lignes ondulées et tache grise au centre de l’œil droit.", u: "rapide", why: "Forme humide probable : ophtalmologie en quelques jours, anti-VEGF." },
      { s: "Homme de 72 ans : quelques petits drusens au fond d’œil, vision 6/6, aucun symptôme.", u: "routine", why: "Forme précoce : pas d’AREDS2 ; suivi, arrêt du tabac, Amsler." },
      { s: "Patient sous anti-VEGF : œil rouge, douloureux, vision qui baisse 3 jours après l’injection.", u: "urgent", why: "Endophtalmie possible : ophtalmologiste le jour même." }
    ],
    cues: ["Lignes ondulées, tache centrale, plus de 50 ans", "Drusens jaunâtres groupés dans la macula"]
  },
  "r-hta": {
    essentials: [
      "Artérioles fines, **croisements pincés** : HTA chronique, à noter, pas une urgence.",
      "**Hémorragies, nodules cotonneux** : forme modérée ; avec une TA très haute, chercher une urgence.",
      "**Papille gonflée** et TA ≥ 180/110 : **urgence hypertensive**, à l’urgence.",
      "Baisse **contrôlée** : environ 10–15 % la 1re heure, pas plus de 25 % le 1er jour.",
      "Jeune ou HTA résistante : chercher une **HTA secondaire**."
    ],
    cloze: [
      "Les micro-infarctus blancs et duveteux de la rétine sont des nodules [[cotonneux]].",
      "Des exsudats durs disposés en rayons autour de la fovéa forment une [[étoile maculaire|étoile]].",
      "Rétinopathie avec papille gonflée et TA très haute : urgence [[hypertensive]].",
      "On évite la [[nifédipine]] sublinguale : la TA chute trop vite.",
      "La classification en trois stades (légère, modérée, sévère) est celle de Wong et [[Mitchell]]."
    ],
    triage: [
      { s: "Homme de 48 ans : céphalée, vision floue, TA 228/134, papilles gonflées.", u: "urgent", why: "Urgence hypertensive : urgence maintenant, baisse contrôlée IV." },
      { s: "Femme de 64 ans, HTA traitée : croisements pincés au fond d’œil, vision normale, TA 142/88.", u: "routine", why: "Rétinopathie chronique légère : ajuster le traitement, suivi habituel." },
      { s: "Femme enceinte de 32 semaines : TA 168/112, céphalée, vision floue.", u: "urgent", why: "Prééclampsie sévère possible : urgence obstétricale maintenant." }
    ],
    cues: ["Papilles gonflées, étoile maculaire, TA 230/140", "Croisements artère-veine pincés, fils de cuivre"]
  }
});
