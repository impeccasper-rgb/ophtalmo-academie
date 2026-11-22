var G = (typeof window !== 'undefined') ? window : globalThis;
G.OPH = G.OPH || {};

// Module D · Rétine. Mêmes champs que les fiches cornée et glaucome (docs/SCHEMA.md, STYLE-PEDAGO §8–9).
// Sources et doutes : docs/FACTS.md, section F. Mécanismes dessinés : src/figures-retine.js.
G.OPH.fiches = (G.OPH.fiches || []).concat([
{
  id: "r-decollement",
  module: "D",
  order: 2,
  title: "Décollement de rétine rhegmatogène",
  en: "Rhegmatogenous retinal detachment",
  tags: ["urgent", "highyield"],
  oneLiner: "Éclairs, corps flottants puis rideau : une déchirure laisse passer le liquide sous la rétine ; examen dilaté le jour même.",
  definition: "Une déchirure de la rétine laisse le vitré liquide passer dessous et la soulever. Sans chirurgie, la vision se perd.",
  anatomy: {
    text: "La rétine neurosensorielle tient à l’épithélium pigmentaire par une pompe active, sans attache solide sauf à l’ora serrata et à la papille. Le vitré, gel fermement accroché à sa base en périphérie, se liquéfie avec l’âge puis se détache de la rétine postérieure : c’est le décollement postérieur du vitré (DPV, posterior vitreous detachment)."
  },
  causal: {
    title: "Du vitré qui tire au rideau",
    steps: [
      { label: "Décollement postérieur du vitré", detail: "Avec l’âge ou la myopie, le gel se liquéfie et se détache : éclairs (traction) et corps flottants.", kind: "cause" },
      { label: "Traction : déchirure en fer à cheval", detail: "Là où le vitré adhère fort (périphérie, palissades), il arrache un lambeau de rétine.", kind: "mecanisme" },
      { label: "Liquide sous la rétine", detail: "Le vitré liquide passe par la déchirure et sépare la rétine de l’épithélium pigmentaire.", kind: "mecanisme" },
      { label: "Rideau dans le champ", detail: "La zone décollée ne voit plus : ombre du côté opposé (rétine supérieure décollée = rideau inférieur).", kind: "signe" },
      { label: "Macula décollée", detail: "La vision centrale chute ; plus le décollement maculaire dure, moins elle récupère.", kind: "complication" }
    ],
    levers: [
      { at: 1, label: "Laser ou cryothérapie", detail: "Autour d’une déchirure sans décollement : cicatrice qui soude la rétine, en clinique." },
      { at: 2, label: "Chirurgie de recollement", detail: "Rétinopexie pneumatique (bulle de gaz), cerclage (indentation sclérale) ou vitrectomie : fermer la déchirure et recoller la rétine." },
      { at: 4, label: "Opérer avant la macula", detail: "Macula encore à plat : chirurgie le plus tôt possible, pour garder la vision centrale." }
    ]
  },
  risk: [
    "Âge 50–75 ans (âge du DPV) ; myopie forte",
    "Chirurgie de la cataracte, capsulotomie au laser YAG",
    "Traumatisme oculaire",
    "Dégénérescence palissadique (lattice degeneration) ; décollement de l’autre œil",
    "Antécédents familiaux, syndrome de Stickler"
  ],
  presentation: [
    "Éclairs lumineux (photopsies), surtout dans la pénombre",
    "Pluie de corps flottants : points, « toile d’araignée », suie",
    "Rideau ou ombre qui progresse dans le champ visuel",
    "Baisse de vision si la macula se décolle ; aucune douleur, œil blanc"
  ],
  exam: {
    signs: [
      { sign: "Déficit d’un secteur du champ au doigt", why: "Rideau objectivé au chevet ; un décollement supérieur menace vite la macula." },
      { sign: "Pigment dans le vitré antérieur (signe de Shafer, « poussière de tabac »)", why: "Évoque fortement une déchirure ; son absence la rend moins probable." },
      { sign: "Hémorragie du vitré", why: "Forte probabilité de déchirure ; si le fond d’œil est caché, échographie B." },
      { sign: "Rétine soulevée, grise, plissée et mobile ; déchirure en fer à cheval", why: "Vue à l’ophtalmoscopie indirecte avec dépression sclérale (ophtalmologiste)." },
      { sign: "DPAR si décollement étendu ; PIO souvent un peu plus basse", why: "Mesure l’étendue ; une PIO basse n’écarte rien." }
    ],
    tests: [
      { test: "Acuité visuelle et champ par confrontation", when: "À tout patient avec éclairs ou corps flottants", read: "Baisse de vision subjective : risque de déchirure multiplié (rapport de vraisemblance ≈ 5)." },
      { test: "Fond d’œil dilaté avec dépression sclérale", when: "Le jour même, par l’ophtalmologiste (ou l’optométriste)", read: "Seul examen qui voit la périphérie : déchirure, décollement, atteinte de la macula." },
      { test: "Échographie B", when: "Si une hémorragie du vitré ou une cataracte cache le fond", read: "Membrane mobile attachée à la papille = rétine décollée." },
      { test: "OCT maculaire", when: "Avant la chirurgie", read: "Macula à plat ou décollée : guide l’urgence et le pronostic." }
    ]
  },
  ddx: [
    { dx: "DPV sans déchirure", clue: "Éclairs et corps flottants sans pigment ni sang, périphérie normale ; revoir si les symptômes changent." },
    { dx: "Aura migraineuse", clue: "Zigzags scintillants des deux yeux, qui s’étendent puis disparaissent en 20–30 min." },
    { dx: "Décollement exsudatif (séreux)", clue: "Liquide qui se déplace avec la position, sans déchirure ; inflammation, tumeur, HTA maligne." },
    { dx: "Décollement tractionnel", clue: "Rétine tirée par des membranes fibrovasculaires (diabète) : concave, peu mobile." },
    { dx: "Rétinoschisis", clue: "Clivage de la rétine : bombé, lisse, immobile, souvent aux deux yeux en inférotemporal." }
  ],
  redFlags: [
    "Rideau, ombre ou baisse de vision : ophtalmologiste de garde le jour même",
    "Nuée de corps flottants, pigment ou sang dans le vitré : déchirure probable",
    "Éclairs nouveaux chez le myope ou l’opéré de cataracte : examen dilaté dans les 24 h"
  ],
  cat: {
    vignette: "Homme myope de 58 ans, opéré de cataracte il y a 1 an : éclairs, nuée de corps flottants depuis hier, ombre inférieure ce matin.",
    algo: [
      { q: "Éclairs ou corps flottants nouveaux ?", yes: "", yesGo: 1, no: "Autre cause de baisse de vision : poursuivre l’examen." },
      { q: "Rideau, ombre ou baisse de vision ?", yes: { t: "Ophtalmologiste de garde le jour même.", urgent: true }, yesGo: 3, no: "", noGo: 2 },
      { q: "Nuée de corps flottants ou vision embrouillée ?", yes: { t: "Déchirure probable : examen dilaté le jour même.", urgent: true }, yesGo: 3, no: "DPV probable : examen dilaté dans les 24 h." },
      { q: "Rétine décollée à l’examen dilaté ?", yes: "", yesGo: 4, no: "Déchirure : laser sans tarder ; rien : suivi rapproché." },
      { q: "Macula encore à plat ?", yes: { t: "Chirurgie urgente, le plus tôt possible.", urgent: true }, no: "Chirurgie rapide ; vision centrale souvent incomplète." }
    ],
    phases: [
      { phase: "observation", items: ["DPV sans déchirure : expliquer les signes d’alarme ; revoir selon l’ophtalmologiste"] },
      { phase: "laser", items: ["Déchirure symptomatique en fer à cheval : laser (ou cryothérapie) rapidement"] },
      { phase: "chirurgie", items: ["Rétinopexie pneumatique, cerclage ou vitrectomie selon la déchirure, l’âge et le cristallin", "Bulle de gaz : position prescrite ; ni avion, ni altitude, ni protoxyde d’azote tant qu’elle persiste"] },
      { phase: "suivi", items: ["Examiner l’autre œil ; revenir sans délai si nouveaux éclairs, corps flottants ou rideau"] }
    ],
    local: "Au Québec, l’optométriste peut faire le fond d’œil dilaté initial et diriger vers l’ophtalmologiste de garde. La chirurgie se fait dans un centre doté d’un rétinologue, parfois après transfert."
  },
  treatments: [
    { name: "Laser ou cryothérapie de la déchirure", how: "Brûlures autour de la déchirure : la cicatrice soude la rétine à l’épithélium pigmentaire.", why: "Déchirure symptomatique sans décollement.", pros: "En clinique, en quelques minutes.", cons: "Ne recolle pas une rétine déjà décollée.", cx: "Nouvelle déchirure ailleurs, membrane épirétinienne.", refer: "Rapidement après le diagnostic.", pitfall: "Croire l’œil guéri : revenir si nouveaux symptômes." },
    { name: "Rétinopexie pneumatique", how: "Bulle de gaz injectée dans l’œil, plus laser ou cryothérapie ; la tête est positionnée pour que la bulle ferme la déchirure.", why: "Décollement par une déchirure supérieure, patient capable de se positionner.", pros: "Sans salle d’opération ; meilleure vision à 1 an que la vitrectomie dans l’essai PIVOT.", cons: "Positionnement strict plusieurs jours ; plus de réinterventions.", cx: "Nouvelles déchirures, échec.", pitfall: "Avion, altitude et protoxyde d’azote interdits tant que la bulle est là." },
    { name: "Cerclage (indentation sclérale)", how: "Bande de silicone suturée sur la sclère : elle repousse la paroi contre la déchirure.", why: "Jeune phake, désinsertion à l’ora, décollement inférieur.", pros: "Garde le cristallin.", cons: "Myopisation, inconfort.", cx: "Diplopie, extrusion, infection." },
    { name: "Vitrectomie avec tamponnement", how: "On retire le vitré qui tire, puis on recolle la rétine sous gaz ou huile de silicone.", why: "Décollement complexe, pseudophake, hémorragie du vitré.", pros: "Traite les déchirures multiples ou cachées.", cons: "Positionnement ; cataracte chez le phake.", cx: "Cataracte, PIO élevée, prolifération vitréorétinienne (PVR)." }
  ],
  pearls: [
    { q: "Pourquoi un décollement supérieur presse-t-il davantage ?", a: "Le liquide descend avec la gravité : il gagne vite la macula. Un rideau qui monte du bas du champ (rétine supérieure décollée) est donc plus urgent." },
    { q: "Corps flottants nouveaux, fond d’œil non dilaté normal : tu rassures ?", a: "Non. La déchirure est en périphérie, invisible sans dilatation. Environ 14 % des patients avec éclairs ou corps flottants aigus ont une déchirure (Hollands, JAMA 2009) : examen dilaté dans les 24 h." },
    { q: "Que dis-tu au patient avec un DPV sans déchirure ?", a: "Revenir le jour même en cas de nuée de corps flottants, d’éclairs qui persistent, de rideau ou de baisse de vision : une déchirure peut apparaître dans les semaines suivantes (≈ 3 % en 6 semaines)." }
  ],
  mnemonic: { title: "Signes d’alarme : « Éclair, Pluie, Rideau »", text: "**Éclair** (le vitré tire), **Pluie** de corps flottants (sang, pigment), **Rideau** (décollement) : examen dilaté, le jour même dès qu’il y a un rideau." },
  sources: [
    "AAO PPP Posterior Vitreous Detachment, Retinal Breaks, and Lattice Degeneration (Flaxel CJ et al., Ophthalmology 2020) ; AAO Summary Benchmarks 2023",
    "Hollands H et al., Acute-onset floaters and flashes, JAMA 2009;302:2243-9",
    "PIVOT : rétinopexie pneumatique vs vitrectomie (Hillier RJ et al., Ophthalmology 2019)",
    "EyeWiki : Posterior Vitreous Detachment ; Macula-on Rhegmatogenous Retinal Detachment"
  ],
  treatment: {
    first: [
      "**Toi** : acuité, champ au doigt ; chercher éclairs, nuée de corps flottants, rideau. Pas de réassurance sans examen dilaté.",
      "**Ophtalmologiste** : fond d’œil dilaté ; laser d’une déchirure, chirurgie d’un décollement."
    ],
    refer: "Référer en ophtalmologie : le jour même si rideau, baisse de vision ou nuée de corps flottants ; sinon dans les 24 h — une déchirure se traite au laser avant le décollement.",
    pitfall: [
      "**Fond d’œil non dilaté** jugé normal : la déchirure est en périphérie, invisible sans dilatation.",
      "**Protoxyde d’azote** à l’anesthésie avec une bulle de gaz dans l’œil : la bulle gonfle et la PIO s’envole."
    ],
    qc: ["L’optométriste peut faire l’examen dilaté initial.", "Bulle de gaz : ni avion ni altitude ; prévenir l’anesthésiste."]
  }
},
{
  id: "r-oacr",
  module: "D",
  order: 3,
  title: "Occlusion de l’artère centrale de la rétine",
  en: "Central retinal artery occlusion (CRAO)",
  tags: ["urgent", "highyield", "piege"],
  oneLiner: "Perte de vision brutale, indolore, d’un œil : c’est un AVC de l’œil ; urgence d’un centre de l’AVC et artérite à éliminer.",
  definition: "Un embole ou une artérite bouche l’artère qui nourrit la rétine interne. C’est un AVC de l’œil : bilan d’AVC le jour même.",
  anatomy: {
    text: "L’artère centrale de la rétine, branche de l’artère ophtalmique (issue de la carotide interne), nourrit les couches internes de la rétine ; la choroïde nourrit les photorécepteurs. La fovéa n’a pas de rétine interne : elle dépend de la choroïde. Parfois, une artère ciliorétinienne venue de la circulation choroïdienne irrigue une partie de la macula."
  },
  causal: {
    title: "De l’embole à l’AVC qui menace",
    steps: [
      { label: "Embole ou artérite", detail: "Plaque carotidienne, fibrillation auriculaire, valve ; après 50 ans, artérite à cellules géantes (ACG).", kind: "cause" },
      { label: "Rétine interne sans oxygène", detail: "Les cellules ganglionnaires meurent en quelques heures ; la rétine œdémateuse blanchit.", kind: "mecanisme" },
      { label: "Tache rouge cerise", detail: "La fovéa, sans rétine interne, laisse voir la choroïde rouge au milieu du blanc.", kind: "signe" },
      { label: "Même source, autres cibles", detail: "Infarctus cérébraux silencieux fréquents ; risque d’AVC élevé dans les jours et semaines qui suivent.", kind: "complication" },
      { label: "ACG : l’autre œil menacé", detail: "Sans corticostéroïdes, l’artérite peut atteindre l’autre œil en quelques jours.", kind: "complication" }
    ],
    levers: [
      { at: 0, label: "Bilan d’AVC urgent", detail: "IRM de diffusion, vaisseaux du cou, ECG et monitorage, échographie cardiaque : trouver et traiter la source." },
      { at: 4, label: "Corticostéroïdes si ACG", detail: "Dès la suspicion (VS, CRP et plaquettes prélevées), sans attendre la biopsie : protègent l’autre œil." },
      { at: 3, label: "Prévention secondaire", detail: "Antiplaquettaire ou anticoagulant selon la cause, statine, TA, arrêt du tabac : décidés avec l’équipe AVC." },
      { at: 1, label: "Thrombolyse : à l’étude", detail: "Deux essais récents (alteplase, ténectéplase, moins de 4,5 h) sans bénéfice visuel prouvé : décision du centre de l’AVC." }
    ]
  },
  risk: [
    "Âge > 60 ans, hypertension, diabète, dyslipidémie, tabac",
    "Sténose carotidienne, fibrillation auriculaire, valvulopathie",
    "Après 50 ans : céphalée temporale, claudication de la mâchoire, pseudopolyarthrite rhizomélique (artérite)",
    "Jeune : coagulopathie, vasculite, drogues, dissection"
  ],
  presentation: [
    "Perte de vision brutale, indolore, d’un œil (souvent compte les doigts ou moins)",
    "Parfois précédée d’amaurose fugace (voile transitoire)",
    "Après 50 ans : céphalée, douleur de la mâchoire en mâchant, fièvre, perte de poids",
    "Œil blanc et calme"
  ],
  exam: {
    signs: [
      { sign: "DPAR marqué", why: "Atteinte rétinienne étendue, confirmée au chevet sans instrument." },
      { sign: "Rétine blanche, œdémateuse, tache rouge cerise", why: "Signe classique, mais il peut manquer dans les premières heures." },
      { sign: "Embole brillant à une bifurcation (plaque de Hollenhorst)", why: "Embole de cholestérol : penser à la carotide." },
      { sign: "Artères fines, colonne de sang segmentée (« wagons »)", why: "Le flux est arrêté dans les artérioles." },
      { sign: "Papille pâle et gonflée, artère temporale indurée", why: "Évoque l’artérite à cellules géantes : corticostéroïdes en urgence." }
    ],
    tests: [
      { test: "VS, CRP, formule sanguine (plaquettes)", when: "Immédiatement à partir de 50 ans", read: "Élevées : ACG probable ; corticostéroïdes sans attendre la biopsie." },
      { test: "IRM cérébrale de diffusion, imagerie des carotides", when: "À l’urgence, le jour même", read: "Infarctus silencieux, sténose carotidienne à traiter." },
      { test: "ECG, monitorage cardiaque, échographie cardiaque", when: "Pendant le bilan d’AVC", read: "Fibrillation auriculaire ou autre source cardiaque d’embole." },
      { test: "OCT maculaire, angiographie", when: "Par l’ophtalmologiste", read: "Rétine interne épaissie et hyperréflective ; remplissage artériel retardé." }
    ]
  },
  ddx: [
    { dx: "Neuropathie optique ischémique artéritique", clue: "Papille pâle et gonflée ; ACG ; même urgence corticostéroïdes." },
    { dx: "Occlusion de la veine centrale", clue: "Hémorragies des 4 quadrants, veines dilatées ; baisse moins brutale." },
    { dx: "Décollement de rétine", clue: "Éclairs, corps flottants, rideau ; rétine soulevée." },
    { dx: "Hémorragie du vitré", clue: "Fond d’œil caché ; diabète ou déchirure." },
    { dx: "Amaurose fugace", clue: "Perte transitoire, en minutes : bilan d’AIT, tout aussi urgent." }
  ],
  redFlags: [
    "Perte de vision brutale et indolore = AVC : urgence d’un centre de l’AVC le jour même",
    "50 ans ou plus : VS, CRP, plaquettes ; corticostéroïdes dès que l’ACG est suspectée",
    "Amaurose fugace résolue : même urgence qu’un AIT"
  ],
  cat: {
    vignette: "Homme de 71 ans, hypertendu, fumeur : au réveil, l’œil droit ne voit que la main qui bouge. Œil blanc, DPAR droit, aucune douleur.",
    algo: [
      { q: "Perte de vision brutale et indolore ?", yes: "", yesGo: 1, no: "Douleur, œil rouge : autre urgence (crise, kératite)." },
      { q: "Rétine blanche, tache rouge cerise ou DPAR ?", yes: { t: "OACR probable : urgence d’un centre de l’AVC maintenant.", urgent: true }, yesGo: 2, no: "Ophtalmologiste de garde le jour même : chercher la cause." },
      { q: "50 ans ou plus ?", yes: "", yesGo: 3, no: "Jeune : source d’embole, coagulopathie, vasculite." },
      { q: "Céphalée, mâchoire, PPR ou VS/CRP élevées ?", yes: { t: "ACG : corticostéroïdes maintenant ; biopsie temporale en 2 semaines.", urgent: true }, no: "Bilan d’AVC : IRM, carotides, rythme, échographie cardiaque." }
    ],
    phases: [
      { phase: "medical", items: ["Urgence d’un centre de l’AVC : IRM de diffusion, carotides, ECG et monitorage, échographie cardiaque", "50 ans ou plus : VS, CRP, plaquettes ; si ACG suspectée, corticostéroïdes à haute dose immédiatement", "Thrombolyse IV : discutée par l’équipe AVC si moins de 4,5 h ; bénéfice visuel non prouvé (THEIA 2025, TenCRAOS 2026)"] },
      { phase: "laser", items: ["Néovaisseaux de l’iris ou de la rétine dans les semaines suivantes : laser panrétinien, anti-VEGF"] },
      { phase: "suivi", items: ["Ophtalmologie dans les semaines suivantes : chercher la rubéose irienne (glaucome néovasculaire)", "Prévention secondaire : antiplaquettaire ou anticoagulant, statine, TA, arrêt du tabac"] }
    ],
    local: "Au Québec, diriger le patient vers l’urgence d’un hôpital qui traite les AVC (neurologie et IRM accessibles), en appelant d’abord. Ne pas se contenter d’un rendez-vous en clinique d’ophtalmologie."
  },
  treatments: [
    { name: "Bilan et prise en charge d’AVC", how: "Imagerie cérébrale et vasculaire, recherche d’arythmie et de source cardiaque.", why: "Toute OACR non artéritique : c’est un AVC.", pros: "Prévient l’AVC cérébral qui suit souvent.", cons: "Ne rend pas la vision.", cx: "Aucune propre au bilan.", refer: "Urgence d’un centre de l’AVC, le jour même.", pitfall: "Envoyer le patient en clinique d’ophtalmologie la semaine suivante." },
    { name: "Corticostéroïdes si artérite à cellules géantes", how: "Calment l’inflammation de la paroi des artères.", why: "ACG suspectée : 50 ans ou plus, symptômes, VS ou CRP élevées.", pros: "Protègent l’autre œil et le cerveau.", cons: "Effets indésirables nombreux.", cx: "Hyperglycémie, infection, ostéoporose, troubles de l’humeur.", dose: "Prednisone 40–60 mg/j ; souvent méthylprednisolone IV 250–1000 mg/j pendant 3 jours si perte visuelle, selon l’équipe.", refer: "Sans attendre la biopsie (à faire dans les 2 semaines).", pitfall: "Attendre le résultat de la biopsie avant de traiter." },
    { name: "Thrombolyse intraveineuse", how: "Dissout le caillot (alteplase, ténectéplase).", why: "Discutée par l’équipe AVC si moins de 4,5 h et sans contre-indication.", pros: "Même logique que pour l’AVC cérébral.", cons: "Bénéfice visuel non démontré (THEIA 2025, TenCRAOS 2026).", cx: "Hémorragie intracrânienne." },
    { name: "Mesures dites conservatrices", how: "Massage oculaire, paracentèse, baisse de la PIO, oxygène.", why: "Utilisées historiquement.", pros: "Simples.", cons: "Aucun bénéfice prouvé ; ne doivent jamais retarder le transfert.", cx: "Paracentèse : infection, blessure du cristallin." }
  ],
  pearls: [
    { q: "Pourquoi la fovéa reste-t-elle rouge ?", a: "Elle n’a pas de rétine interne : la choroïde, intacte, la nourrit. On voit donc la choroïde rouge au milieu d’une rétine blanchie." },
    { q: "Une artère ciliorétinienne change quoi ?", a: "Si elle irrigue la macula, une partie de la vision centrale est épargnée et récupère souvent mieux." },
    { q: "Vision revenue après 10 minutes : tu rassures ?", a: "Non. Une amaurose fugace est un AIT de l’œil : même bilan urgent, et VS, CRP à partir de 50 ans." }
  ],
  mnemonic: { title: "OACR : « AVC, VS, cortico »", text: "**AVC** : urgence d’un centre de l’AVC ; **VS** (avec CRP et plaquettes) dès 50 ans ; **cortico**stéroïdes sans attendre si l’artérite est suspectée." },
  sources: [
    "AAO PPP Retinal and Ophthalmic Artery Occlusions (Flaxel CJ et al., Ophthalmology 2020) ; AAO Summary Benchmarks 2023",
    "AHA Scientific Statement : Management of Central Retinal Artery Occlusion (Mac Grory B et al., Stroke 2021)",
    "THEIA (Préterre C et al., Lancet Neurol 2025;24:909-919) ; TenCRAOS (N Engl J Med 2026;394:442-450)",
    "EyeWiki : Central Retinal Artery Occlusion"
  ],
  treatment: {
    first: [
      "**Toi, maintenant** : acuité, DPAR, heure de début ; dès 50 ans, VS, CRP, plaquettes. Appeler l’urgence d’un centre de l’AVC.",
      "**Équipe AVC et ophtalmologiste** : IRM, carotides, rythme ; corticostéroïdes si ACG."
    ],
    refer: "Référer : immédiatement, à l’urgence d’un centre de l’AVC (pas en clinique externe) — c’est un AVC, et le risque d’AVC cérébral est maximal dans les jours qui suivent.",
    pitfall: [
      "**Massage oculaire ou paracentèse** : aucun bénéfice prouvé ; ils ne retardent jamais le transfert.",
      "**Corticostéroïdes reportés** jusqu’à la biopsie quand l’ACG est suspectée : l’autre œil peut être perdu."
    ],
    qc: ["Appeler l’urgence avant le transfert ; ambulance si le début est récent.", "Biopsie temporale dans les 2 semaines suivant le début des corticostéroïdes."]
  }
},
{
  id: "r-ovr",
  module: "D",
  order: 4,
  title: "Occlusions veineuses rétiniennes",
  en: "Retinal vein occlusions (central and branch)",
  tags: ["frequent", "highyield"],
  oneLiner: "Baisse de vision indolore et hémorragies en flammèches, dans un secteur (branche) ou partout (centrale) : traiter l’œdème, guetter les néovaisseaux.",
  definition: "Une veine de la rétine se bouche : le sang reflue, saigne et fait gonfler la macula. On traite l’œdème et on surveille les néovaisseaux.",
  anatomy: {
    text: "La veine centrale de la rétine sort par la papille à côté de l’artère, dans une gaine commune ; en périphérie, artérioles et veinules se croisent sous une adventice commune. Une artère rigide (hypertension, athérosclérose) comprime la veine à ces endroits. Les arcades temporales drainent la macula."
  },
  causal: {
    title: "Du croisement pincé aux néovaisseaux",
    steps: [
      { label: "Compression au croisement", detail: "Artère rigide et gaine commune pincent la veine (branche) ; pour la veine centrale, au niveau de la lame criblée.", kind: "cause" },
      { label: "Thrombus, reflux veineux", detail: "En amont, la veine se dilate et serpente ; la pression monte dans les capillaires.", kind: "mecanisme" },
      { label: "Hémorragies dans le territoire", detail: "Flammèches et taches : un secteur limité par le raphé horizontal (branche) ou les 4 quadrants (centrale).", kind: "signe" },
      { label: "Œdème maculaire", detail: "Le liquide s’accumule dans la macula : principale cause de la baisse de vision.", kind: "lesion" },
      { label: "Ischémie, VEGF, néovaisseaux", detail: "La rétine non perfusée libère du VEGF : néovaisseaux de l’iris (glaucome néovasculaire) ou de la rétine (hémorragie du vitré).", kind: "complication" }
    ],
    levers: [
      { at: 3, label: "Anti-VEGF intravitréen", detail: "Bévacizumab, ranibizumab ou aflibercept : asséchent l’œdème ; injections répétées." },
      { at: 4, label: "Laser panrétinien", detail: "Détruit la rétine ischémique qui fabrique le VEGF : les néovaisseaux régressent." },
      { at: 0, label: "Facteurs de risque", detail: "TA, diabète, lipides, PIO si glaucome : protègent l’autre œil et le reste de l’organisme." }
    ]
  },
  risk: [
    "Âge > 50 ans",
    "Hypertension (le plus fréquent), diabète, dyslipidémie, tabac",
    "Glaucome ou hypertension oculaire, surtout pour la veine centrale",
    "Jeune : coagulopathie, hyperviscosité, contraception œstrogénique, vasculite"
  ],
  presentation: [
    "Baisse de vision indolore d’un œil, souvent constatée au réveil",
    "Branche : flou partiel ou déficit d’un secteur du champ ; parfois découverte fortuite",
    "Veine centrale : baisse plus marquée ; DPAR dans la forme ischémique",
    "Plus tard : œil rouge et douloureux si glaucome néovasculaire"
  ],
  exam: {
    signs: [
      { sign: "Hémorragies en flammèches et en taches", why: "Un secteur limité par le raphé horizontal = branche ; 4 quadrants = veine centrale." },
      { sign: "Veines dilatées, tortueuses", why: "Reflux en amont de l’obstacle." },
      { sign: "Nodules cotonneux nombreux, DPAR", why: "Forme ischémique : risque élevé de néovaisseaux." },
      { sign: "PIO, vaisseaux sur l’iris", why: "Glaucome souvent associé ; rubéose = glaucome néovasculaire qui menace." }
    ],
    tests: [
      { test: "OCT maculaire", when: "Au diagnostic, puis à chaque visite", read: "Épaississement et kystes : guide les injections." },
      { test: "Angiographie à la fluorescéine (ou angio-OCT)", when: "Par l’ophtalmologiste", read: "Territoires non perfusés : risque de néovaisseaux." },
      { test: "TA, glycémie ou HbA1c, bilan lipidique, FSC", when: "Par le médecin traitant, dans la semaine", read: "Facteurs de risque à traiter ; coagulation surtout si jeune ou bilatéral." },
      { test: "Examen de l’iris non dilaté et gonioscopie", when: "Chaque mois pendant 6 mois si veine centrale", read: "Néovaisseaux de l’iris ou de l’angle : laser panrétinien." }
    ]
  },
  ddx: [
    { dx: "Rétinopathie diabétique", clue: "Aux deux yeux, microanévrismes, exsudats ; pas limitée à un territoire veineux." },
    { dx: "Rétinopathie hypertensive", clue: "Aux deux yeux, nodules cotonneux ; papille gonflée si urgence hypertensive." },
    { dx: "Syndrome d’ischémie oculaire", clue: "Sténose carotidienne serrée : veines dilatées mais peu tortueuses, hémorragies périphériques, douleur." },
    { dx: "Rétinopathie d’hyperviscosité", clue: "Aux deux yeux ; myélome, leucémie, polyglobulie : FSC, électrophorèse des protéines." }
  ],
  redFlags: [
    "Œil rouge douloureux, PIO haute, vaisseaux sur l’iris : glaucome néovasculaire, le jour même",
    "Forme ischémique de la veine centrale (DPAR, nombreux nodules) : iris et angle chaque mois",
    "Occlusion chez un jeune ou aux deux yeux : coagulation, hyperviscosité, vasculite"
  ],
  cat: {
    vignette: "Femme de 66 ans, hypertendue mal contrôlée : vision floue de l’œil droit au réveil. Hémorragies en flammèches dans le secteur temporal supérieur.",
    algo: [
      { q: "Hémorragies dans les 4 quadrants ?", yes: "Occlusion de la veine centrale.", yesGo: 1, no: "Occlusion de branche : un secteur.", noGo: 2 },
      { q: "DPAR, nombreux nodules cotonneux ?", yes: "Forme ischémique : PIO, iris et angle chaque mois.", yesGo: 2, no: "Non ischémique : peut s’aggraver, suivi rapproché.", noGo: 2 },
      { q: "Macula épaissie à l’OCT, vision basse ?", yes: "Anti-VEGF intravitréen, mensuel au début.", yesGo: 3, no: "Observation ; traiter les facteurs de risque.", noGo: 3 },
      { q: "Néovaisseaux : iris, angle, rétine ?", yes: { t: "Laser panrétinien et anti-VEGF ; le jour même si PIO haute.", urgent: true }, no: "Suivi ; TA, glycémie, lipides par le médecin traitant." }
    ],
    phases: [
      { phase: "medical", items: ["Œdème maculaire : anti-VEGF intravitréen (bévacizumab, ranibizumab, aflibercept) ; implant de dexaméthasone en 2e intention", "Médecin traitant : TA, glycémie, lipides ; PIO si glaucome"] },
      { phase: "laser", items: ["Laser panrétinien (sectoriel pour une branche) si néovaisseaux", "Laser en grille possible pour l’œdème d’une branche"] },
      { phase: "suivi", items: ["Veine centrale : iris non dilaté et gonioscopie chaque mois pendant 6 mois", "Injections espacées selon l’OCT"] }
    ],
    local: "Au Québec, les injections intravitréennes se font en clinique d’ophtalmologie, souvent en série pendant des mois : l’assiduité aux rendez-vous compte beaucoup. Le médecin de famille prend en charge TA, diabète et lipides."
  },
  treatments: [
    { name: "Anti-VEGF intravitréen", how: "Bloque le VEGF : moins de fuite, l’œdème maculaire diminue.", why: "Œdème maculaire avec baisse de vision ; néovaisseaux (en appoint).", pros: "Gain de vision dans les grands essais.", cons: "Injections répétées pendant des mois.", cx: "Endophtalmie (rare), PIO transitoire, décollement de rétine.", dose: "Bévacizumab 1,25 mg (hors indication), ranibizumab 0,5 mg ou aflibercept 2 mg, mensuel au début.", refer: "Œdème maculaire : en quelques jours à semaines.", pitfall: "Œil rouge douloureux et vision qui baisse quelques jours après une injection : endophtalmie, appeler le jour même." },
    { name: "Implant de dexaméthasone", how: "Corticostéroïde à libération lente déposé dans le vitré.", why: "Œdème qui résiste aux anti-VEGF, ou injections mensuelles impossibles.", pros: "Effet de plusieurs mois.", cons: "Cataracte, hausse de PIO.", cx: "Glaucome cortisonique, cataracte, endophtalmie." },
    { name: "Laser panrétinien", how: "Brûlures en périphérie : la rétine ischémique produit moins de VEGF.", why: "Néovaisseaux de l’iris, de l’angle ou de la rétine.", pros: "Effet durable.", cons: "Perte de champ périphérique et de vision nocturne.", cx: "Œdème maculaire transitoire, douleur." },
    { name: "Traitement des facteurs de risque", how: "TA, diabète, lipides, tabac ; PIO si glaucome.", why: "Toute occlusion veineuse.", pros: "Protège l’autre œil et le cœur.", cons: "Ne débouche pas la veine.", cx: "Selon les médicaments." }
  ],
  pearls: [
    { q: "Pourquoi une occlusion de branche respecte-t-elle le raphé horizontal ?", a: "Les veines temporales supérieure et inférieure drainent chacune leur moitié de rétine sans franchir le raphé. Le sang reste donc dans le secteur de la veine bouchée." },
    { q: "Qu’est-ce que le « glaucome des 90 jours » ?", a: "Après une occlusion ischémique de la veine centrale, des néovaisseaux de l’iris peuvent fermer l’angle, souvent dans les 3 premiers mois : d’où l’examen mensuel de l’iris et de l’angle." },
    { q: "Quel bilan demandes-tu au médecin de famille ?", a: "TA, glycémie ou HbA1c, bilan lipidique, FSC. Chez un jeune ou si les deux yeux sont pris : coagulation, hyperviscosité, vasculite." }
  ],
  sources: [
    "AAO PPP Retinal Vein Occlusions (Flaxel CJ et al., Ophthalmology 2020) ; AAO Summary Benchmarks 2023",
    "SCORE2 : bévacizumab non inférieur à l’aflibercept pour l’œdème de la veine centrale (Scott IU et al., JAMA 2017)",
    "EyeWiki : Retinal Vein Occlusion"
  ],
  treatment: {
    first: [
      "**Toi** : acuité, DPAR, PIO si possible, TA au bureau ; demander glycémie ou HbA1c, lipides, FSC.",
      "**Ophtalmologiste** : OCT, angiographie ; anti-VEGF si œdème maculaire ; laser si néovaisseaux."
    ],
    refer: "Référer en ophtalmologie : dans la semaine ; le jour même si œil rouge et douloureux avec PIO haute (glaucome néovasculaire) — l’œdème maculaire se traite mieux tôt.",
    pitfall: [
      "**Oublier la TA et la glycémie** : l’occlusion signale un risque vasculaire général.",
      "**Arrêter les anti-VEGF** dès que la vision remonte : l’œdème récidive souvent."
    ],
    qc: ["Le médecin de famille fait le bilan vasculaire ; l’ophtalmologiste suit l’œil.", "Injections en clinique, souvent en série : prévoir le transport et un accompagnateur."]
  }
}
]);

G.OPH.bonus = G.OPH.bonus || {};
G.OPH.bonus.D = [
  { title: "Trou maculaire", en: "Macular hole", clue: "Personne âgée, souvent une femme : baisse de la vision centrale et lignes déformées d’un œil ; trou rond à la fovéa, confirmé à l’OCT.", action: "Référer en rétine en quelques semaines : vitrectomie avec bulle de gaz et positionnement." },
  { title: "Membrane épirétinienne", en: "Epiretinal membrane", clue: "Métamorphopsies lentes, reflet de cellophane sur la macula, plis de la rétine à l’OCT.", action: "Observation si la gêne est faible ; vitrectomie avec pelage si la vision baisse." },
  { title: "Hémorragie du vitré", en: "Vitreous haemorrhage", clue: "Pluie de corps flottants ou voile brutal, fond d’œil caché : diabète proliférant, déchirure, occlusion veineuse, traumatisme.", action: "Échographie B le jour même pour éliminer un décollement de rétine ; ophtalmologie en urgence." },
  { title: "Rétinite à cytomégalovirus", en: "Cytomegalovirus retinitis", clue: "Immunodéprimé (VIH avec CD4 bas, greffe) : plages blanches nécrotiques et hémorragiques le long des vaisseaux.", action: "Antiviral systémique (ganciclovir, valganciclovir), parfois intravitréen, avec l’infectiologie." },
  { title: "Mélanome choroïdien", en: "Choroidal melanoma", clue: "Lésion pigmentée bombée plus grosse qu’un nævus, avec liquide sous-rétinien, pigment orange ou symptômes.", action: "Référer en oncologie oculaire : échographie, photos ; traitement conservateur (curiethérapie) ou énucléation." },
  { title: "Taches de Roth", en: "Roth spots", clue: "Hémorragies rétiniennes à centre blanc : endocardite, leucémie, anémie sévère.", action: "Chercher la cause générale : hémocultures, formule sanguine, examen cardiaque." }
];
