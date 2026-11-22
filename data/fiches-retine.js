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
    vignette: "Myope de 58 ans, opéré de cataracte : éclairs, nuée de corps flottants, ombre inférieure ce matin.",
    algo: [
      { q: "Rideau, ombre ou baisse de vision ?", yes: { t: "Ophtalmologiste de garde le jour même.", urgent: true }, yesGo: 3, no: "", noGo: 1 },
      { q: "Éclairs ou corps flottants nouveaux ?", yes: "", yesGo: 2, no: "Pas de signe de déchirure : poursuivre l’examen." },
      { q: "Nuée de corps flottants, sang ou pigment ?", yes: { t: "Déchirure probable : examen dilaté le jour même.", urgent: true }, yesGo: 3, no: "DPV probable : examen dilaté dans les 24 h." },
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
    refer: "Référer en ophtalmologie : immédiatement (le jour même) si rideau, baisse de vision ou nuée de corps flottants ; sinon dans les 24 h — une déchirure se traite au laser avant le décollement.",
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
  definition: "Un embole ou une artérite bouche l’artère de la rétine interne. C’est un AVC de l’œil : urgence immédiate.",
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
    "Perte de vision brutale et indolore = AVC. Urgence : immédiatement (le jour même), comme un AVC",
    "50 ans ou plus : VS, CRP, plaquettes ; corticostéroïdes dès que l’ACG est suspectée",
    "Amaurose fugace résolue : même urgence qu’un AIT"
  ],
  cat: {
    vignette: "Homme de 71 ans, fumeur : au réveil, l’œil droit voit la main bouger. DPAR droit, aucune douleur.",
    algo: [
      { q: "Perte de vision brutale et indolore ?", yes: "", yesGo: 1, no: "Douleur, œil rouge : autre urgence (crise, kératite)." },
      { q: "Rétine blanche, tache rouge cerise ou DPAR ?", yes: { t: "OACR probable : urgence immédiatement, comme un AVC.", urgent: true }, yesGo: 2, no: "Ophtalmologiste de garde le jour même : chercher la cause." },
      { q: "50 ans ou plus ?", yes: "", yesGo: 3, no: "Jeune : source d’embole, coagulopathie, vasculite." },
      { q: "Céphalée, mâchoire, PPR ou VS/CRP élevées ?", yes: { t: "ACG : méthylprednisolone IV, puis prednisone ; biopsie en 2 semaines.", urgent: true }, no: "Bilan d’AVC : IRM, carotides, rythme, échographie cardiaque." }
    ],
    phases: [
      { phase: "medical", items: ["Urgence d’un centre de l’AVC : IRM de diffusion, carotides, ECG et monitorage, échographie cardiaque", "50 ans ou plus : VS, CRP, plaquettes ; ACG avec perte visuelle : méthylprednisolone IV 250–1000 mg/j jusqu’à 3 jours, puis prednisone 40–60 mg/j (EULAR 2018)", "Thrombolyse IV : discutée par l’équipe AVC si moins de 4,5 h ; bénéfice visuel non prouvé (THEIA 2025, TenCRAOS 2026)"] },
      { phase: "laser", items: ["Néovaisseaux de l’iris ou de la rétine dans les semaines suivantes : laser panrétinien, anti-VEGF"] },
      { phase: "suivi", items: ["Ophtalmologie dans les semaines suivantes : chercher la rubéose irienne (glaucome néovasculaire)", "Prévention secondaire : antiplaquettaire ou anticoagulant, statine, TA, arrêt du tabac"] }
    ],
    local: "Au Québec, diriger le patient vers l’urgence d’un hôpital qui traite les AVC (neurologie et IRM accessibles), en appelant d’abord. Ne pas se contenter d’un rendez-vous en clinique d’ophtalmologie."
  },
  treatments: [
    { name: "Bilan et prise en charge d’AVC", how: "Imagerie cérébrale et vasculaire, recherche d’arythmie et de source cardiaque.", why: "Toute OACR non artéritique : c’est un AVC.", pros: "Prévient l’AVC cérébral qui suit souvent.", cons: "Ne rend pas la vision.", cx: "Aucune propre au bilan.", refer: "Urgence : immédiatement (le jour même), comme un AVC.", pitfall: "Envoyer le patient en clinique d’ophtalmologie la semaine suivante." },
    { name: "Corticostéroïdes si artérite à cellules géantes", how: "Calment l’inflammation de la paroi des artères.", why: "ACG suspectée : 50 ans ou plus, symptômes, VS ou CRP élevées.", pros: "Protègent l’autre œil et le cerveau.", cons: "Effets indésirables nombreux.", cx: "Hyperglycémie, infection, ostéoporose, troubles de l’humeur.", dose: "Perte visuelle : méthylprednisolone IV 250–1000 mg/j jusqu’à 3 jours, puis prednisone 40–60 mg/j ; sans perte visuelle : prednisone 40–60 mg/j d’emblée (EULAR 2018). L’IV ne doit pas retarder la prednisone orale.", refer: "Sans attendre la biopsie (à faire dans les 2 semaines).", pitfall: "Attendre le résultat de la biopsie avant de traiter." },
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
    "EULAR 2018, vascularites des gros vaisseaux (Hellmich B et al., Ann Rheum Dis 2020;79:19-30)",
    "EyeWiki : Central Retinal Artery Occlusion"
  ],
  treatment: {
    first: [
      "**Toi, maintenant** : acuité, DPAR, heure de début ; dès 50 ans, VS, CRP, plaquettes. Appeler l’urgence d’un centre de l’AVC.",
      "**Équipe AVC et ophtalmologiste** : IRM, carotides, rythme ; ACG avec perte visuelle : méthylprednisolone IV en premier, puis prednisone."
    ],
    refer: "Urgence : immédiatement (le jour même), comme un AVC — à l’urgence d’un centre de l’AVC, pas en clinique externe ; le risque d’AVC cérébral est maximal dans les jours qui suivent.",
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
  definition: "Veine rétinienne bouchée : sang et œdème maculaire. Traiter l’œdème, guetter les néovaisseaux.",
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
    vignette: "Femme de 66 ans, HTA mal contrôlée : œil droit flou au réveil, flammèches temporales supérieures.",
    algo: [
      { q: "Hémorragies dans les 4 quadrants ?", yes: "Occlusion de la veine centrale.", yesGo: 1, no: "Occlusion de branche : un secteur.", noGo: 2 },
      { q: "DPAR, nombreux nodules cotonneux ?", yes: "Forme ischémique : PIO, iris et angle chaque mois.", yesGo: 2, no: "Non ischémique : peut s’aggraver, suivi rapproché.", noGo: 2 },
      { q: "Macula épaissie à l’OCT, vision basse ?", yes: "Anti-VEGF intravitréen, mensuel au début.", yesGo: 3, no: "Observation ; traiter les facteurs de risque.", noGo: 3 },
      { q: "Néovaisseaux : iris, angle, rétine ?", yes: "Laser panrétinien et anti-VEGF ; le jour même si PIO haute.", no: "Suivi ; TA, glycémie, lipides par le médecin traitant." }
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
},
{
  id: "r-diabete",
  module: "D",
  order: 5,
  title: "Rétinopathie diabétique",
  en: "Diabetic retinopathy",
  tags: ["frequent", "highyield"],
  oneLiner: "Souvent muette jusqu’au stade grave : dépister au diagnostic (type 2) ou dès 5 ans d’évolution (type 1), puis référer selon la sévérité.",
  definition: "Le diabète abîme les capillaires de la rétine : fuite, ischémie, néovaisseaux. Longtemps muette, elle se dépiste.",
  anatomy: {
    text: "La rétine interne est nourrie par des capillaires étanches (barrière hématorétinienne) ; la macula, au centre, assure la vision fine. Quand les capillaires se ferment, la rétine ischémique libère du VEGF (facteur de croissance de l’endothélium vasculaire), qui fait fuir les vaisseaux et pousser des néovaisseaux fragiles."
  },
  causal: {
    title: "Du capillaire abîmé au néovaisseau qui saigne",
    steps: [
      { label: "Capillaires abîmés", detail: "Perte des péricytes, membrane basale épaissie : microanévrismes, premières hémorragies.", kind: "cause" },
      { label: "Fuite : exsudats, œdème maculaire", detail: "La barrière cède : lipides (exsudats durs) et liquide s’accumulent ; au centre, la vision baisse.", kind: "lesion" },
      { label: "Fermeture capillaire, ischémie", detail: "Nodules cotonneux, hémorragies en taches, veines en chapelet, IRMA : forme non proliférante sévère.", kind: "mecanisme" },
      { label: "VEGF : néovaisseaux", detail: "Sur la papille ou la rétine (forme proliférante), sur l’iris (glaucome néovasculaire).", kind: "lesion" },
      { label: "Hémorragie, traction", detail: "Les néovaisseaux saignent dans le vitré et tirent la rétine : décollement tractionnel.", kind: "complication" }
    ],
    levers: [
      { at: 0, label: "Glycémie et TA", detail: "HbA1c ≤ 7 % en général et TA contrôlée : ralentissent l’apparition et la progression." },
      { at: 1, label: "Anti-VEGF intravitréen", detail: "Première intention pour l’œdème maculaire qui touche le centre." },
      { at: 3, label: "Laser panrétinien ou anti-VEGF", detail: "Font régresser les néovaisseaux de la forme proliférante." },
      { at: 4, label: "Vitrectomie", detail: "Hémorragie du vitré qui ne se résorbe pas, décollement tractionnel." }
    ]
  },
  risk: [
    "Durée du diabète (le facteur le plus fort)",
    "HbA1c élevée, hypertension, dyslipidémie",
    "Grossesse, surtout dans le diabète de type 1",
    "Néphropathie diabétique",
    "Baisse très rapide de l’HbA1c : aggravation transitoire possible"
  ],
  presentation: [
    "Aucun symptôme jusqu’à un stade avancé",
    "Vision floue ou fluctuante : œdème maculaire",
    "Pluie de corps flottants, voile brutal : hémorragie du vitré",
    "Rideau : décollement tractionnel"
  ],
  exam: {
    signs: [
      { sign: "Microanévrismes, hémorragies en points et en taches", why: "Premiers signes : forme non proliférante." },
      { sign: "Exsudats durs près de la fovéa, rétine épaissie", why: "Œdème maculaire : baisse de vision, à traiter." },
      { sign: "Hémorragies dans 4 quadrants, veines en chapelet, IRMA", why: "Forme non proliférante sévère (règle 4-2-1) : risque élevé de néovaisseaux." },
      { sign: "Néovaisseaux sur la papille ou ailleurs", why: "Forme proliférante : référence rapide." },
      { sign: "Rubéose irienne", why: "Glaucome néovasculaire qui menace." }
    ],
    tests: [
      { test: "Photographies rétiniennes ou fond d’œil dilaté", when: "Type 2 : au diagnostic ; type 1 : dès 5 ans d’évolution (à partir de 15 ans)", read: "Gradation de la sévérité : fixe le prochain intervalle." },
      { test: "OCT maculaire", when: "Baisse de vision ou exsudats près du centre", read: "Œdème qui touche le centre ou non : guide les anti-VEGF." },
      { test: "Angiographie à la fluorescéine", when: "Par l’ophtalmologiste, au besoin", read: "Zones non perfusées, néovaisseaux discrets." },
      { test: "HbA1c, TA, bilan lipidique, fonction rénale", when: "Au suivi du diabète", read: "Facteurs modifiables de progression." }
    ]
  },
  ddx: [
    { dx: "Rétinopathie hypertensive", clue: "Artérioles fines, croisements pincés, nodules cotonneux ; peu de microanévrismes." },
    { dx: "Occlusion veineuse rétinienne", clue: "Un œil, un territoire veineux, veines tortueuses." },
    { dx: "Rétinopathie radique", clue: "Antécédent de radiothérapie de la tête ou de l’œil." },
    { dx: "Syndrome d’ischémie oculaire", clue: "Sténose carotidienne, hémorragies en moyenne périphérie, un seul œil." }
  ],
  redFlags: [
    "Pluie de corps flottants ou voile brutal : hémorragie du vitré, ophtalmologie en urgence",
    "Néovaisseaux, rubéose ou PIO haute : ophtalmologiste en quelques jours",
    "Grossesse (diabète préexistant) : examen des yeux au 1er trimestre"
  ],
  cat: {
    vignette: "Homme de 52 ans, diabète de type 2 depuis 12 ans, jamais examiné en ophtalmologie. Aucun symptôme.",
    algo: [
      { q: "Voile, pluie de corps flottants, rideau ?", yes: { t: "Hémorragie du vitré ou décollement : ophtalmologie en urgence.", urgent: true }, no: "", noGo: 1 },
      { q: "Déjà examiné : photos ou fond d’œil dilaté ?", yes: "", yesGo: 2, no: "Examen maintenant, puis lire le résultat.", noGo: 2 },
      { q: "Aucune rétinopathie à l’examen ?", yes: "Type 1 : chaque année ; type 2 : aux 1–2 ans.", no: "", noGo: 3 },
      { q: "Néovaisseaux ou forme non proliférante sévère ?", yes: { t: "Ophtalmologiste en quelques jours : laser panrétinien ou anti-VEGF.", urgent: true }, no: "", noGo: 4 },
      { q: "Œdème maculaire qui touche le centre ?", yes: "Ophtalmologiste en quelques semaines : anti-VEGF.", no: "Forme légère ou modérée : examen aux 6–12 mois." }
    ],
    phases: [
      { phase: "observation", items: ["Pas de rétinopathie : type 1 chaque année ; type 2 aux 1–2 ans (Diabetes Canada)", "Forme légère à modérée : examen aux 6–12 mois ; sévère : aux 3–4 mois"] },
      { phase: "medical", items: ["HbA1c ≤ 7 % en général, TA, lipides ; fénofibrate possible en ajout à une statine (type 2, rétinopathie établie)", "Œdème maculaire qui touche le centre : anti-VEGF intravitréen"] },
      { phase: "laser", items: ["Forme proliférante : laser panrétinien (ou anti-VEGF)", "Œdème qui ne touche pas le centre : laser focal possible"] },
      { phase: "chirurgie", items: ["Vitrectomie : hémorragie du vitré persistante, décollement tractionnel"] }
    ],
    local: "Au Québec, l’optométriste fait souvent le dépistage et dirige vers l’ophtalmologiste dès qu’une rétinopathie menace la vision. Le médecin de famille vérifie que l’examen est fait et que le résultat lui revient."
  },
  treatments: [
    { name: "Contrôle de la glycémie et de la TA", how: "Ralentit l’atteinte des capillaires.", why: "Tout diabétique.", pros: "Prévient l’apparition et la progression.", cons: "Effet lent ; une baisse très rapide de l’HbA1c peut aggraver transitoirement la rétinopathie.", cx: "Hypoglycémies.", pitfall: "Intensifier sans faire examiner les yeux d’une rétinopathie avancée." },
    { name: "Anti-VEGF intravitréen", how: "Bloque le VEGF : moins de fuite, régression des néovaisseaux.", why: "Œdème maculaire qui touche le centre ; forme proliférante (autre option que le laser).", pros: "Meilleure vision que le laser pour l’œdème central.", cons: "Injections répétées.", cx: "Endophtalmie (rare), PIO transitoire.", dose: "Bévacizumab 1,25 mg (hors indication), ranibizumab 0,5 mg ou aflibercept 2 mg, mensuel au début." },
    { name: "Laser panrétinien", how: "Brûlures en périphérie : moins de rétine ischémique, donc moins de VEGF.", why: "Forme proliférante, surtout à haut risque.", pros: "Effet durable, peu de visites.", cons: "Perte de champ périphérique, vision nocturne réduite.", cx: "Œdème maculaire, douleur." },
    { name: "Fénofibrate", how: "Mécanisme mal connu, indépendant des lipides.", why: "Diabète de type 2 avec rétinopathie établie, en ajout à une statine.", pros: "Ralentit la progression (Diabetes Canada, grade A).", cons: "Ne remplace ni l’examen ni le traitement oculaire.", cx: "Hausse de la créatinine, myalgies." },
    { name: "Vitrectomie", how: "Retire le sang du vitré et les membranes qui tirent.", why: "Hémorragie persistante, décollement tractionnel.", pros: "Rend la vision si la macula est saine.", cons: "Chirurgie en salle d’opération.", cx: "Cataracte, décollement de rétine, nouvelle hémorragie." }
  ],
  pearls: [
    { q: "Pourquoi dépister un patient qui voit bien ?", a: "Même la forme proliférante peut ne donner aucun symptôme. Traitée à temps, le laser et les anti-VEGF réduisent beaucoup le risque de perte de vision grave ; découverte au stade d’hémorragie, le pronostic est moins bon." },
    { q: "Qu’est-ce que la règle 4-2-1 ?", a: "Forme non proliférante sévère : hémorragies dans les 4 quadrants, ou veines en chapelet dans 2, ou IRMA dans 1. Un seul critère suffit : risque élevé de forme proliférante, référer rapidement." },
    { q: "Grossesse chez une diabétique de type 1 : que prévoir pour les yeux ?", a: "Un examen avant la conception idéalement, puis au 1er trimestre, au besoin pendant la grossesse et dans l’année qui suit l’accouchement (Diabetes Canada) : la rétinopathie peut progresser." }
  ],
  mnemonic: { title: "Forme sévère : « 4-2-1 »", text: "Hémorragies dans **4** quadrants, veines en chapelet dans **2**, IRMA dans **1** : un seul critère suffit." },
  sources: [
    "Diabetes Canada 2018 Clinical Practice Guidelines, chapitre 30 « Retinopathy » (Altomare F, Kherani A, Lovshin J, Can J Diabetes 2018;42 Suppl 1:S210-S216) et chapitre 36 « Diabetes and Pregnancy »",
    "AAO PPP Diabetic Retinopathy (Flaxel CJ et al., Ophthalmology 2020) ; AAO Summary Benchmarks 2023",
    "ETDRS : règle 4-2-1 de la forme non proliférante sévère"
  ],
  treatment: {
    first: [
      "**Toi** : vérifier la date du dernier examen des yeux et l’organiser ; viser HbA1c, TA, lipides ; s’assurer que le résultat te revient.",
      "**Ophtalmologiste** : gradation, OCT ; anti-VEGF si œdème central ; laser panrétinien ou anti-VEGF si forme proliférante."
    ],
    refer: "Référer en ophtalmologie : en urgence si voile ou corps flottants brutaux ; en quelques jours si néovaisseaux ou forme sévère ; en quelques semaines si œdème maculaire — traitée à temps, la rétinopathie rend rarement aveugle.",
    pitfall: [
      "**Attendre des symptômes** pour faire examiner les yeux : la forme proliférante peut être muette.",
      "**Baisse rapide de l’HbA1c** (insuline intensifiée, sémaglutide) sur une rétinopathie avancée : aggravation transitoire possible, surveiller les yeux."
    ],
    qc: ["Dépistage souvent fait par l’optométriste ; le résultat doit revenir au médecin traitant.", "Grossesse : examen avant la conception ou au 1er trimestre."]
  }
},
{
  id: "r-dmla",
  module: "D",
  order: 7,
  title: "DMLA sèche et néovasculaire",
  en: "Age-related macular degeneration (dry and neovascular)",
  tags: ["frequent", "highyield"],
  oneLiner: "Après 50 ans, drusens puis atrophie (sèche) ou néovaisseaux (humide) : toute déformation nouvelle des lignes impose une référence en quelques jours.",
  definition: "La macula vieillit : drusens, puis atrophie (sèche) ou néovaisseaux qui fuient (humide). L’humide se traite, mais vite.",
  anatomy: {
    text: "Sous les photorécepteurs, l’épithélium pigmentaire les nourrit et recycle leurs déchets ; il repose sur la membrane de Bruch, au-dessus de la choroïde. La macula, riche en cônes, donne la vision fine, la lecture et la reconnaissance des visages."
  },
  causal: {
    title: "Des drusens à la cicatrice",
    steps: [
      { label: "Drusens sous l’épithélium", detail: "Déchets lipidiques accumulés sous l’épithélium pigmentaire ; gros drusens = forme intermédiaire.", kind: "cause" },
      { label: "Forme sèche : atrophie", detail: "L’épithélium et les cônes disparaissent par plages (atrophie géographique) : perte lente, sur des années.", kind: "lesion" },
      { label: "Forme humide : néovaisseaux", detail: "Des vaisseaux venus de la choroïde franchissent la membrane de Bruch.", kind: "mecanisme" },
      { label: "Liquide, sang : métamorphopsies", detail: "Ils fuient et saignent sous la macula : lignes ondulées, tache centrale, en jours ou semaines.", kind: "signe" },
      { label: "Cicatrice disciforme", detail: "Sans traitement, une cicatrice fibreuse détruit la vision centrale.", kind: "complication" }
    ],
    levers: [
      { at: 0, label: "AREDS2 et arrêt du tabac", detail: "Forme intermédiaire (ou avancée à un œil) : suppléments AREDS2 ; cesser de fumer réduit le risque." },
      { at: 3, label: "Anti-VEGF intravitréen", detail: "Assèchent les néovaisseaux ; injections répétées, souvent pendant des années." },
      { at: 3, label: "Amsler et référence rapide", detail: "Repérer tôt la forme humide : plus le traitement commence tôt, plus la vision est préservée." }
    ]
  },
  risk: [
    "Âge > 50 ans, surtout > 75",
    "Tabac (le grand facteur modifiable)",
    "Antécédents familiaux, ascendance européenne",
    "Gros drusens, anomalies pigmentaires, DMLA avancée à l’autre œil"
  ],
  presentation: [
    "Lignes droites ondulées (métamorphopsies), tache centrale",
    "Difficulté à lire, à reconnaître les visages ; périphérie conservée",
    "Sèche : baisse lente sur des années ; humide : en jours ou semaines",
    "Souvent : drusens découverts chez un patient sans symptôme"
  ],
  exam: {
    signs: [
      { sign: "Drusens jaunâtres dans la macula", why: "Gros drusens ou anomalies pigmentaires = forme intermédiaire : AREDS2." },
      { sign: "Plages d’atrophie aux bords nets", why: "Atrophie géographique : forme sèche avancée." },
      { sign: "Hémorragie ou liquide sous la macula, soulèvement gris-vert", why: "Néovaisseaux : forme humide, à traiter rapidement." },
      { sign: "Grille d’Amsler déformée ou trouée", why: "Signe fonctionnel de la forme humide, utilisable à domicile." }
    ],
    tests: [
      { test: "Grille d’Amsler, un œil à la fois", when: "Au bureau, et régulièrement à domicile si forme intermédiaire", read: "Lignes ondulées ou manquantes nouvelles : référence en quelques jours." },
      { test: "OCT maculaire", when: "Par l’optométriste ou l’ophtalmologiste", read: "Liquide dans ou sous la rétine = forme humide active." },
      { test: "Angiographie (fluorescéine, angio-OCT)", when: "Par l’ophtalmologiste, devant une forme humide", read: "Confirme et localise les néovaisseaux." }
    ]
  },
  ddx: [
    { dx: "Choriorétinopathie séreuse centrale", clue: "Plus jeune (30–50 ans), corticostéroïdes, stress ; soulèvement séreux sans drusens." },
    { dx: "Membrane épirétinienne", clue: "Reflet de cellophane, plis à l’OCT ; métamorphopsies lentes." },
    { dx: "Trou maculaire", clue: "Tache centrale nette, trou rond à l’OCT." },
    { dx: "Œdème maculaire diabétique", clue: "Diabète, exsudats, microanévrismes." },
    { dx: "Toxicité de l’hydroxychloroquine", clue: "Atteinte en anneau autour de la fovéa, traitement de longue date." }
  ],
  redFlags: [
    "Métamorphopsies ou tache centrale nouvelles : ophtalmologie en quelques jours",
    "Hémorragie sous la macula au fond d’œil : référence urgente",
    "Œil rouge, douloureux, vision qui baisse après une injection : endophtalmie, le jour même"
  ],
  cat: {
    vignette: "Femme de 78 ans, ex-fumeuse, drusens connus : les cadres de porte ondulent depuis 5 jours.",
    algo: [
      { q: "Métamorphopsies ou tache centrale nouvelles ?", yes: "Forme humide possible : ophtalmologie en quelques jours.", yesGo: 1, no: "", noGo: 2 },
      { q: "Liquide ou sang à l’OCT ?", yes: "Anti-VEGF intravitréen, mensuel au début.", no: "Autre cause : membrane, trou maculaire, séreuse centrale." },
      { q: "Gros drusens ou DMLA avancée à un œil ?", yes: "AREDS2, arrêt du tabac, Amsler à domicile.", yesGo: 3, no: "Petits drusens : pas d’AREDS2 ; examen de suivi." },
      { q: "Atrophie géographique qui gêne la vision ?", yes: "Réadaptation en déficience visuelle ; avis de l’ophtalmologiste sur les nouveaux traitements.", no: "Suivi ; consulter vite si lignes ondulées." }
    ],
    phases: [
      { phase: "observation", items: ["Forme précoce : examen de suivi, Amsler, arrêt du tabac", "Forme intermédiaire : AREDS2, Amsler à domicile un œil à la fois"] },
      { phase: "medical", items: ["Forme humide : anti-VEGF intravitréen (bévacizumab, ranibizumab, aflibercept), mensuel puis espacé selon l’OCT"] },
      { phase: "suivi", items: ["Réadaptation en déficience visuelle si la vision baisse aux deux yeux", "Anti-VEGF : ne pas manquer les rendez-vous"] }
    ],
    local: "Au Québec, les anti-VEGF se donnent en clinique d’ophtalmologie, souvent pendant des années. Si la vision baisse, diriger vers les services de réadaptation en déficience visuelle du réseau public (CISSS ou CIUSSS)."
  },
  treatments: [
    { name: "Suppléments AREDS2", how: "Antioxydants et zinc : ralentissent l’évolution vers la forme avancée.", why: "Forme intermédiaire, ou forme avancée à un œil.", pros: "Progression réduite d’environ 25 % (AREDS).", cons: "Aucun effet sur la forme précoce ; n’empêchent pas l’apparition.", cx: "Troubles digestifs (zinc).", dose: "Vitamine C 500 mg, vitamine E 400 UI, lutéine 10 mg, zéaxanthine 2 mg, zinc 80 mg, cuivre 2 mg par jour.", pitfall: "Ancienne formule au bêtacarotène chez un fumeur ou ex-fumeur : risque de cancer du poumon." },
    { name: "Anti-VEGF intravitréen", how: "Bloque le VEGF : les néovaisseaux fuient moins et régressent.", why: "Forme humide active.", pros: "Stabilise la vision chez la plupart, l’améliore parfois.", cons: "Injections répétées, souvent pendant des années.", cx: "Endophtalmie (rare), PIO transitoire, déchirure de l’épithélium pigmentaire.", dose: "Bévacizumab 1,25 mg (hors indication), ranibizumab 0,5 mg ou aflibercept 2 mg ; mensuel au début.", refer: "Dès que la forme humide est suspectée, en quelques jours." },
    { name: "Arrêt du tabac", how: "Réduit le stress oxydatif de la macula.", why: "Tout patient fumeur.", pros: "Le seul grand facteur de risque modifiable.", cons: "Difficile ; aide souvent nécessaire.", cx: "Aucune." },
    { name: "Réadaptation en déficience visuelle", how: "Loupes, éclairage, aides électroniques, apprentissage de la vision excentrique.", why: "Vision basse aux deux yeux.", pros: "Garde l’autonomie : lecture, cuisine, sécurité.", cons: "Ne rend pas la vision.", cx: "Aucune." }
  ],
  pearls: [
    { q: "Pourquoi l’AREDS2 n’a-t-il plus de bêtacarotène ?", a: "Le bêtacarotène augmente le risque de cancer du poumon chez les fumeurs ; l’AREDS2 l’a remplacé par la lutéine et la zéaxanthine." },
    { q: "Des suppléments pour tous les patients avec quelques petits drusens ?", a: "Non. L’AREDS n’a montré aucun bénéfice dans la forme précoce ; les suppléments visent la forme intermédiaire ou la forme avancée à un œil." },
    { q: "Comment utiliser la grille d’Amsler ?", a: "Lunettes de lecture, un œil caché, fixer le point central : des lignes ondulées, floues ou manquantes, nouvelles, imposent de consulter en quelques jours." }
  ],
  sources: [
    "AAO PPP Age-Related Macular Degeneration (Flaxel CJ et al., Ophthalmology 2020) ; AAO Summary Benchmarks 2023",
    "National Eye Institute : About AREDS and AREDS2 (composition et indications, consulté en novembre 2026)",
    "AREDS2 Research Group, JAMA 2013 (lutéine et zéaxanthine à la place du bêtacarotène)"
  ],
  treatment: {
    first: [
      "**Toi** : acuité, Amsler un œil à la fois ; arrêt du tabac ; AREDS2 seulement si forme intermédiaire ou avancée à un œil.",
      "**Ophtalmologiste** : OCT, angiographie ; anti-VEGF si forme humide."
    ],
    refer: "Référer en ophtalmologie : en quelques jours (moins d’une semaine) si métamorphopsies ou tache centrale nouvelles ; le jour même si œil rouge et douloureux après une injection ; sinon suivi régulier.",
    pitfall: [
      "**Bêtacarotène** (ancienne formule AREDS) chez un fumeur ou ex-fumeur : cancer du poumon.",
      "**Mettre sur le compte de la cataracte** une baisse récente avec lignes ondulées : forme humide manquée."
    ],
    qc: ["Anti-VEGF en clinique d’ophtalmologie, souvent pendant des années.", "Vision basse : réadaptation en déficience visuelle du réseau public."]
  }
},
{
  id: "r-hta",
  module: "D",
  order: 6,
  title: "Rétinopathie hypertensive",
  en: "Hypertensive retinopathy",
  tags: ["urgent", "highyield"],
  oneLiner: "Artérioles fines et croisements pincés en chronique ; hémorragies, nodules cotonneux et papille gonflée avec TA très haute : urgence hypertensive.",
  definition: "Une pression trop haute abîme les artérioles de la rétine. Une papille gonflée avec hémorragies signe une urgence hypertensive.",
  anatomy: {
    text: "Les artérioles de la rétine se règlent seules (autorégulation) : elles se contractent quand la TA monte. On les voit directement au fond d’œil, qui devient une fenêtre sur la microcirculation du cerveau et du rein."
  },
  causal: {
    title: "De l’artériole qui se serre à la papille qui gonfle",
    steps: [
      { label: "Vasoconstriction, sclérose", detail: "TA haute chronique : artérioles rétrécies, paroi épaissie (« fils de cuivre »), croisements artère-veine pincés.", kind: "cause" },
      { label: "Barrière qui cède", detail: "Poussée sévère : la paroi lâche ; hémorragies en flammèches, exsudats durs.", kind: "mecanisme" },
      { label: "Micro-infarctus", detail: "Artérioles fermées : nodules cotonneux (fibres nerveuses ischémiques).", kind: "lesion" },
      { label: "Papille gonflée, étoile maculaire", detail: "Œdème papillaire et exsudats en étoile : forme maligne, atteinte d’organe.", kind: "signe" },
      { label: "Atteinte des autres organes", detail: "Même processus au cerveau (encéphalopathie, AVC), au rein et au cœur.", kind: "complication" }
    ],
    levers: [
      { at: 3, label: "Baisse contrôlée de la TA", detail: "À l’hôpital, souvent IV : environ 10–15 % de la pression artérielle moyenne la 1re heure, pas plus de 25 % le 1er jour." },
      { at: 0, label: "Traitement de fond", detail: "Cible systolique < 130 mmHg si tolérée (Hypertension Canada 2025)." },
      { at: 4, label: "Chercher les autres atteintes", detail: "Créatinine, analyse d’urine, ECG, troponine, imagerie cérébrale selon les symptômes." }
    ]
  },
  risk: [
    "HTA mal contrôlée ou non traitée, médicaments non pris",
    "HTA secondaire : rein, hyperaldostéronisme, phéochromocytome, coarctation",
    "Prééclampsie",
    "Cocaïne, amphétamines"
  ],
  presentation: [
    "Souvent aucun symptôme (forme chronique)",
    "Urgence : vision floue, céphalée, nausées, confusion",
    "Douleur thoracique, dyspnée, oligurie selon les organes atteints",
    "Découverte au fond d’œil d’un patient très hypertendu"
  ],
  exam: {
    signs: [
      { sign: "Artérioles fines, croisements pincés, fils de cuivre", why: "HTA chronique (forme légère de Wong-Mitchell)." },
      { sign: "Hémorragies en flammèches, nodules cotonneux, exsudats", why: "Forme modérée ; avec une TA très haute, chercher une urgence." },
      { sign: "Papille gonflée, étoile maculaire", why: "Forme sévère (maligne) : urgence hypertensive." },
      { sign: "TA aux deux bras, signes neurologiques", why: "Encéphalopathie, AVC, dissection : changent la cible de baisse." }
    ],
    tests: [
      { test: "TA répétée, aux deux bras", when: "Immédiatement", read: "Au-dessus de 180/110 avec atteinte d’organe = urgence hypertensive." },
      { test: "Créatinine, électrolytes, analyse d’urine, FSC avec frottis", when: "À l’urgence", read: "Atteinte rénale, microangiopathie thrombotique." },
      { test: "ECG, troponine, imagerie cérébrale", when: "Selon les symptômes", read: "Atteinte du cœur ou du cerveau." },
      { test: "Fond d’œil dilaté ou photo", when: "Par l’ophtalmologiste, au besoin", read: "Gradation ; suivi de la régression." }
    ]
  },
  ddx: [
    { dx: "Œdème papillaire de stase (hypertension intracrânienne)", clue: "Aux deux yeux, TA normale ou peu élevée ; céphalées, imagerie cérébrale." },
    { dx: "Rétinopathie diabétique", clue: "Microanévrismes nombreux, diabète connu." },
    { dx: "Occlusion veineuse rétinienne", clue: "Un œil, un territoire veineux." },
    { dx: "Neurorétinite", clue: "Un œil, étoile maculaire, souvent infectieuse (Bartonella)." }
  ],
  redFlags: [
    "Papille gonflée ou hémorragies avec TA très haute : urgence hypertensive, à l’urgence maintenant",
    "Céphalée, confusion, douleur thoracique, oligurie : atteinte d’autres organes",
    "Grossesse, TA haute et vision floue : prééclampsie, urgence obstétricale"
  ],
  cat: {
    vignette: "Homme de 45 ans : céphalée, vision floue, TA 230/140. Papilles gonflées, nodules cotonneux.",
    algo: [
      { q: "TA à 180/110 ou plus ?", yes: "", yesGo: 1, no: "HTA chronique : traiter en externe, fond d’œil au suivi." },
      { q: "Papille gonflée, hémorragies, nodules cotonneux ?", yes: { t: "Urgence hypertensive : hospitaliser, baisse contrôlée IV.", urgent: true }, yesGo: 2, no: "", noGo: 3 },
      { q: "AVC, dissection ou prééclampsie ?", yes: { t: "Cible propre à chaque situation : équipe spécialisée.", urgent: true }, no: "Environ 10–15 % de la TAM la 1re heure, ≤ 25 % le 1er jour." },
      { q: "Autre atteinte d’organe : cerveau, cœur, rein ?", yes: { t: "Urgence hypertensive : hospitaliser, baisse contrôlée.", urgent: true }, no: "Sans atteinte : pas de baisse rapide ; ajuster le traitement oral." }
    ],
    phases: [
      { phase: "medical", items: ["Urgence hypertensive : hospitalisation, antihypertenseur IV titrable ; environ 10–15 % de la TA moyenne la 1re heure, pas plus de 25 % le 1er jour", "Puis relais oral ; à long terme, cible systolique < 130 mmHg si tolérée"] },
      { phase: "suivi", items: ["Fond d’œil de contrôle : hémorragies et nodules régressent avec la TA ; les changements artériolaires restent", "Chercher une HTA secondaire chez le jeune ou si résistante"] }
    ],
    local: "Au Québec, l’urgence hypertensive se traite à l’urgence ou aux soins intensifs (médecine interne) ; l’ophtalmologiste confirme et documente le fond d’œil. Le suivi de l’HTA revient au médecin de famille."
  },
  treatments: [
    { name: "Baisse contrôlée de la TA (urgence hypertensive)", how: "Antihypertenseur IV titrable, en milieu surveillé.", why: "TA très haute avec atteinte d’organe, dont la rétinopathie sévère.", pros: "Arrête les lésions des organes.", cons: "Trop rapide, elle peut causer une ischémie (cerveau, rein, nerf optique).", cx: "Hypotension, AVC ischémique.", refer: "Urgence, le jour même.", pitfall: "Normaliser la TA en quelques minutes." },
    { name: "Traitement de fond de l’HTA", how: "Médicaments oraux et mode de vie, suivi régulier.", why: "Toute rétinopathie hypertensive.", pros: "Les lésions aiguës régressent ; prévient AVC et occlusions vasculaires de la rétine.", cons: "Les changements artériolaires restent.", cx: "Selon les médicaments.", dose: "Cible systolique < 130 mmHg si tolérée (Hypertension Canada 2025)." },
    { name: "Bilan d’HTA secondaire", how: "Rein, aldostérone et rénine, métanéphrines, coarctation selon le contexte.", why: "Patient jeune, HTA résistante ou maligne.", pros: "Cause parfois curable.", cons: "Tests nombreux.", cx: "Aucune propre au bilan." }
  ],
  pearls: [
    { q: "Qu’est-ce qui sépare la forme chronique de l’urgence ?", a: "Artérioles fines et croisements pincés = HTA ancienne. Hémorragies, nodules cotonneux et surtout papille gonflée avec TA très haute = urgence hypertensive." },
    { q: "Pourquoi ne pas normaliser la TA d’un coup ?", a: "Les organes se sont habitués à une pression haute (autorégulation déplacée) : une chute brutale les prive de sang. On baisse d’environ 10–15 % la 1re heure, pas plus de 25 % le 1er jour." },
    { q: "Papilles gonflées, TA 240/130 : IRM avant tout ?", a: "Non : c’est d’abord une urgence hypertensive, il faut traiter la TA ; l’imagerie suit les signes neurologiques. Le tableau peut imiter une hypertension intracrânienne." }
  ],
  mnemonic: { title: "Wong-Mitchell : « Fin, Fuite, Gonflé »", text: "**Fin** (légère : artérioles fines, croisements pincés), **Fuite** (modérée : hémorragies, nodules, exsudats), **Gonflé** (sévère : papille gonflée = urgence)." },
  sources: [
    "Wong TY, Mitchell P. Hypertensive retinopathy, N Engl J Med 2004 (classification légère, modérée, sévère)",
    "EyeWiki : Hypertensive Retinopathy (Keith-Wagener-Barker, Wong-Mitchell, prise en charge)",
    "AHA Scientific Statement : Management of Elevated Blood Pressure in the Acute Care Setting (Bress AP et al., Hypertension 2024)",
    "Hypertension Canada Primary Care Guideline (CMAJ 2025;197:E549)"
  ],
  treatment: {
    first: [
      "**Toi** : TA répétée, fond d’œil ; créatinine, analyse d’urine, ECG ; à l’urgence si papille gonflée ou hémorragies avec TA très haute.",
      "**Urgence, médecine interne** : baisse IV contrôlée ; **ophtalmologiste** : confirmer et suivre le fond d’œil."
    ],
    refer: "Référer : immédiatement à l’urgence si papille gonflée, hémorragies ou nodules avec TA ≥ 180/110 — c’est une atteinte d’organe ; HTA chronique sans signe aigu : médecin de famille.",
    pitfall: [
      "**Nifédipine à action rapide** (sublinguale) ou toute baisse brutale : ischémie cérébrale ou du nerf optique.",
      "**Papille gonflée attribuée à une hypertension intracrânienne** sans avoir mesuré la TA."
    ],
    qc: ["Urgence hypertensive : urgence ou soins intensifs ; l’ophtalmologiste documente le fond d’œil.", "Suivi de l’HTA par le médecin de famille."]
  }
}
,
{
  id: "r-dpv",
  module: "D",
  order: 1,
  title: "Décollement postérieur du vitré et déchirure rétinienne",
  en: "Posterior vitreous detachment and retinal tear",
  tags: ["frequent", "highyield"],
  oneLiner: "Corps flottants et éclairs après 50 ans : souvent un DPV bénin, mais environ 1 sur 7 cache une déchirure.",
  definition: "Le vitré, devenu liquide avec l’âge, se détache de la rétine. C’est souvent bénin, mais en tirant, il peut la déchirer.",
  anatomy: {
    text: "Le vitré est un gel de collagène et d’eau, collé à la rétine surtout à sa base (en périphérie), à la papille, à la macula et le long des vaisseaux. Avec l’âge, il se liquéfie et se contracte, puis se détache de la rétine postérieure, souvent entre 50 et 70 ans, plus tôt chez le myope."
  },
  causal: {
    title: "Du gel qui se liquéfie à la déchirure",
    steps: [
      { label: "Synérèse du vitré", detail: "Le gel se liquéfie par poches avec l’âge ; plus tôt si myopie, chirurgie de la cataracte ou traumatisme.", kind: "cause" },
      { label: "Décollement postérieur", detail: "Le vitré se détache de la papille et de la macula : anneau de Weiss et corps flottants.", kind: "mecanisme" },
      { label: "Traction sur la rétine", detail: "Là où il reste collé (base, palissades, vaisseaux), il tire : éclairs, parfois saignement.", kind: "mecanisme" },
      { label: "Déchirure en fer à cheval", detail: "Un lambeau de rétine est arraché ; un vaisseau rompu donne une hémorragie du vitré.", kind: "lesion" },
      { label: "Décollement de rétine", detail: "Sans laser, le liquide passe sous la rétine : rideau, puis macula.", kind: "complication" }
    ],
    levers: [
      { at: 1, label: "Examen dilaté et consignes", detail: "Dans les 24 h : chercher une déchirure ; expliquer quand revenir." },
      { at: 3, label: "Laser ou cryothérapie", detail: "Soude la rétine autour d’une déchirure symptomatique : prévient le décollement." },
      { at: 4, label: "Chirurgie", detail: "Si le décollement est déjà là : voir la fiche Décollement de rétine." }
    ]
  },
  risk: [
    "Âge 50–70 ans",
    "Myopie (DPV plus précoce)",
    "Chirurgie de la cataracte, capsulotomie au laser YAG",
    "Traumatisme, inflammation intraoculaire",
    "Dégénérescence palissadique (lattice)"
  ],
  presentation: [
    "Corps flottants nouveaux : anneau, toile d’araignée, mouches",
    "Éclairs brefs, en périphérie, surtout dans la pénombre",
    "Vision normale le plus souvent",
    "Pluie de points noirs ou voile : sang dans le vitré"
  ],
  exam: {
    signs: [
      { sign: "Anneau de Weiss devant la papille", why: "Confirme le décollement postérieur du vitré." },
      { sign: "Pigment dans le vitré antérieur (signe de Shafer)", why: "Évoque fortement une déchirure." },
      { sign: "Hémorragie du vitré", why: "Déchirure fréquente : examen dilaté complet ou échographie B." },
      { sign: "Déchirure en fer à cheval en périphérie", why: "Vue avec dépression sclérale ; symptomatique = laser rapidement." }
    ],
    tests: [
      { test: "Acuité, champ par confrontation", when: "À tout patient avec corps flottants ou éclairs", read: "Baisse de vision ou déficit de champ : déchirure ou décollement plus probables." },
      { test: "Fond d’œil dilaté avec dépression sclérale", when: "Dans les 24 h ; le jour même si nuée de corps flottants, sang ou rideau", read: "Déchirure, palissades, décollement." },
      { test: "Échographie B", when: "Si le fond d’œil est caché", read: "Vitré détaché ; rétine à plat ou décollée." },
      { test: "Réexamen", when: "Dans les semaines suivantes, selon l’ophtalmologiste", read: "Une déchirure peut apparaître plus tard (≈ 3 % en 6 semaines)." }
    ]
  },
  ddx: [
    { dx: "Déchirure ou décollement de rétine", clue: "Pigment, sang, rideau, baisse de vision." },
    { dx: "Hémorragie du vitré d’autre cause", clue: "Diabète proliférant, occlusion veineuse : antécédents, autre œil." },
    { dx: "Aura migraineuse", clue: "Zigzags des deux yeux, qui disparaissent en 20–30 min." },
    { dx: "Hyalite astéroïde", clue: "Petits points blancs brillants dans le vitré, sans symptôme aigu." },
    { dx: "Uvéite postérieure (vitrite)", clue: "Cellules dans le vitré, baisse de vision, souvent les deux yeux." }
  ],
  redFlags: [
    "Rideau ou baisse de vision : décollement probable, ophtalmologiste de garde le jour même",
    "Nuée de corps flottants, sang ou pigment dans le vitré : déchirure probable, le jour même",
    "Symptômes nouveaux après un DPV jugé bénin : réexaminer sans attendre"
  ],
  cat: {
    vignette: "Femme de 62 ans : anneau gris flottant devant l’œil droit, éclairs le soir. Vision 6/6.",
    algo: [
      { q: "Rideau ou baisse de vision ?", yes: { t: "Décollement probable : ophtalmologiste de garde le jour même.", urgent: true }, no: "", noGo: 1 },
      { q: "Nuée de corps flottants, sang ou pigment ?", yes: { t: "Déchirure probable : examen dilaté le jour même.", urgent: true }, yesGo: 2, no: "Examen dilaté dans les 24 h.", noGo: 2 },
      { q: "Déchirure à l’examen dilaté ?", yes: "Symptomatique : laser ou cryothérapie rapidement.", no: "DPV simple : consignes de retour, réexamen prévu." }
    ],
    phases: [
      { phase: "observation", items: ["DPV sans déchirure : expliquer les signes d’alarme ; réexamen dans les semaines suivantes selon l’ophtalmologiste"] },
      { phase: "laser", items: ["Déchirure symptomatique en fer à cheval : laser (ou cryothérapie) rapidement", "Déchirure asymptomatique : traitement discuté selon le type et le contexte"] },
      { phase: "suivi", items: ["Revenir le jour même si nuée de corps flottants, éclairs persistants, rideau ou baisse de vision", "Autre œil : DPV probable dans les mois ou les années suivantes"] }
    ],
    local: "Au Québec, beaucoup de patients consultent d’abord l’optométriste, qui fait l’examen dilaté et dirige vers l’ophtalmologiste si une déchirure est trouvée."
  },
  treatments: [
    { name: "Consignes et réexamen", how: "Expliquer les signes d’alarme ; réexaminer la périphérie dans les semaines suivantes.", why: "DPV sans déchirure.", pros: "Repère une déchirure tardive.", cons: "Les corps flottants persistent souvent des mois.", cx: "Aucune." },
    { name: "Laser de la déchirure", how: "Deux ou trois rangées de brûlures autour de la déchirure : la cicatrice soude la rétine.", why: "Déchirure symptomatique en fer à cheval.", pros: "En clinique ; prévient le décollement.", cons: "Ne prévient pas les déchirures ailleurs.", cx: "Membrane épirétinienne, nouvelle déchirure.", refer: "Rapidement après le diagnostic." },
    { name: "Cryothérapie", how: "Le froid appliqué à travers la sclère crée la même cicatrice.", why: "Déchirure très périphérique ou milieux troubles (sang dans le vitré).", pros: "Possible quand le laser passe mal.", cons: "Plus inconfortable.", cx: "Inflammation, prolifération vitréorétinienne." }
  ],
  pearls: [
    { q: "Comment distinguer les éclairs du DPV d’une aura migraineuse ?", a: "Le DPV donne des éclairs brefs, d’un œil, en périphérie et dans la pénombre. L’aura dessine des zigzags qui s’étendent pendant 20–30 min, des deux yeux, même les yeux fermés." },
    { q: "Les corps flottants vont-ils disparaître ?", a: "Ils s’atténuent souvent en quelques mois. Ce qui compte : signaler tout changement brutal (nuée, éclairs qui persistent, rideau)." },
    { q: "Pourquoi revoir un DPV sans déchirure ?", a: "Une déchirure peut apparaître dans les semaines suivantes (environ 3 % en 6 semaines, Hollands 2009), surtout si de nouveaux corps flottants apparaissent." }
  ],
  sources: [
    "AAO PPP Posterior Vitreous Detachment, Retinal Breaks, and Lattice Degeneration (Flaxel CJ et al., Ophthalmology 2020) ; AAO Summary Benchmarks 2023",
    "Hollands H et al., Acute-onset floaters and flashes, JAMA 2009;302:2243-9",
    "EyeWiki : Posterior Vitreous Detachment"
  ],
  treatment: {
    first: [
      "**Toi** : acuité, champ au doigt ; chercher nuée de corps flottants, sang, rideau ; expliquer les signes d’alarme.",
      "**Ophtalmologiste ou optométriste** : examen dilaté avec dépression sclérale ; laser si déchirure."
    ],
    refer: "Référer : immédiatement (le jour même) si nuée de corps flottants, sang, rideau ou baisse de vision ; sinon examen dilaté dans les 24 h — une déchirure traitée tôt ne devient pas un décollement.",
    pitfall: [
      "**Rassurer sans dilater** : la déchirure est en périphérie.",
      "**Ignorer un changement de symptômes** après un premier examen normal : la déchirure peut venir plus tard."
    ],
    qc: ["Optométriste ou ophtalmologiste pour l’examen dilaté initial.", "Consignes de retour remises par écrit."]
  }
},
{
  id: "r-endophtalmie",
  module: "D",
  order: 10,
  title: "Endophtalmie après chirurgie ou injection",
  en: "Endophthalmitis after surgery or intravitreal injection",
  tags: ["urgent", "highyield"],
  oneLiner: "Œil opéré ou injecté qui devient douloureux, rouge et voit moins, avec hypopyon : endophtalmie jusqu’à preuve du contraire, le jour même.",
  definition: "Infection de l’intérieur de l’œil, quelques jours après une chirurgie ou une injection. Ophtalmologiste le jour même.",
  anatomy: {
    text: "Le vitré, gel sans vaisseaux ni défenses, est un milieu de culture idéal. Les bactéries viennent surtout de la flore des paupières et de la conjonctive du patient ; elles entrent par une incision (cataracte) ou par l’aiguille (injection intravitréenne)."
  },
  causal: {
    title: "De la plaie au vitré infecté",
    steps: [
      { label: "Bactéries de la surface", detail: "Surtout des staphylocoques à coagulase négative venus des paupières ; ils entrent par la plaie ou l’aiguille.", kind: "cause" },
      { label: "Prolifération dans le vitré", detail: "Sans défenses locales, elles se multiplient en heures ou en jours.", kind: "mecanisme" },
      { label: "Inflammation intense", detail: "Douleur, rougeur, baisse de vision ; cellules, hypopyon, vitré trouble.", kind: "signe" },
      { label: "Rétine détruite", detail: "Toxines et inflammation abîment la rétine : perte de vision définitive possible.", kind: "complication" }
    ],
    levers: [
      { at: 0, label: "Prévention", detail: "Povidone iodée 5 % avant toute injection ; antibiotique intracamérulaire à la fin de la cataracte." },
      { at: 1, label: "Antibiotiques intravitréens", detail: "Vancomycine et ceftazidime injectées dans le vitré après ponction, le jour même." },
      { at: 3, label: "Vitrectomie si perception lumineuse", detail: "Dans l’EVS, la vitrectomie immédiate n’aidait que les yeux réduits à la perception lumineuse." }
    ]
  },
  risk: [
    "Chirurgie de la cataracte, surtout avec rupture capsulaire ou plaie qui fuit",
    "Injection intravitréenne",
    "Bulle de filtration (glaucome) : endophtalmie tardive",
    "Blépharite, diabète, immunosuppression",
    "Traumatisme perforant, corps étranger intraoculaire"
  ],
  presentation: [
    "Douleur et baisse de vision qui s’aggravent, quelques jours après le geste",
    "Œil rouge, paupières gonflées",
    "Hypopyon : niveau blanc dans la chambre antérieure",
    "Reflet rouge diminué (vitré trouble)"
  ],
  exam: {
    signs: [
      { sign: "Acuité : perception lumineuse seulement ?", why: "Guide le traitement : perception lumineuse = vitrectomie (EVS)." },
      { sign: "Hypopyon, cellules et fibrine en chambre antérieure", why: "Inflammation intense ; l’hypopyon manque parfois." },
      { sign: "Vitré trouble, reflet rouge diminué", why: "Atteinte du vitré : échographie B si le fond est caché." },
      { sign: "Douleur qui s’aggrave après le geste", why: "Après une cataracte ou une injection, l’œil doit aller mieux chaque jour." }
    ],
    tests: [
      { test: "Acuité, PIO, lampe à fente", when: "Immédiatement", read: "Hypopyon, vitré trouble ; perception lumineuse ou mieux." },
      { test: "Échographie B", when: "Si le fond d’œil est caché", read: "Échos dans le vitré ; rétine à plat ou non." },
      { test: "Ponction du vitré pour culture", when: "Par l’ophtalmologiste, au moment des injections", read: "Identifie le germe ; ne retarde jamais les antibiotiques." }
    ]
  },
  ddx: [
    { dx: "Syndrome toxique du segment antérieur (TASS)", clue: "12–48 h après la cataracte : cornée trouble d’un limbe à l’autre, peu de douleur, vitré clair." },
    { dx: "Inflammation post-opératoire habituelle", clue: "S’améliore jour après jour sous gouttes, sans hypopyon." },
    { dx: "Inflammation stérile après injection", clue: "Peu de douleur, vision moins touchée ; seul l’ophtalmologiste peut trancher." },
    { dx: "Endophtalmie endogène", clue: "Sans chirurgie : bactériémie ou fongémie (cathéter, drogues IV, endocardite)." }
  ],
  redFlags: [
    "Œil opéré ou injecté douloureux, rouge, qui voit moins : ophtalmologiste le jour même",
    "Hypopyon après un geste oculaire : endophtalmie jusqu’à preuve du contraire",
    "Jamais traiter comme une conjonctivite ni reporter l’examen"
  ],
  cat: {
    vignette: "Homme de 76 ans, injection d’anti-VEGF il y a 3 jours : œil rouge, douloureux, hypopyon.",
    algo: [
      { q: "Chirurgie ou injection récente de l’œil ?", yes: "", yesGo: 1, no: "Sans geste : uvéite, kératite ou endophtalmie endogène." },
      { q: "Douleur, rougeur, vision qui s’aggravent ?", yes: { t: "Endophtalmie probable : ophtalmologiste le jour même.", urgent: true }, yesGo: 2, no: "Inflammation habituelle : revoir selon le chirurgien." },
      { q: "Perception lumineuse seulement ?", yes: { t: "Vitrectomie urgente et antibiotiques intravitréens.", urgent: true }, no: { t: "Ponction et antibiotiques intravitréens, le jour même.", urgent: true } }
    ],
    phases: [
      { phase: "medical", items: ["Ponction du vitré pour culture, puis vancomycine 1 mg/0,1 mL et ceftazidime 2,25 mg/0,1 mL intravitréennes, le jour même", "Antibiotiques intraveineux : sans bénéfice prouvé dans l’EVS (après cataracte)"] },
      { phase: "chirurgie", items: ["Vitrectomie immédiate si la vision est réduite à la perception lumineuse (EVS)"] },
      { phase: "suivi", items: ["Revoir le lendemain et les jours suivants ; nouvelle injection selon l’évolution et la culture"] }
    ],
    local: "Au Québec, joindre directement le chirurgien ou l’ophtalmologiste de garde : le patient doit être vu le jour même, fin de semaine comprise."
  },
  treatments: [
    { name: "Antibiotiques intravitréens", how: "Injectés directement dans le vitré, après une ponction pour culture.", why: "Toute endophtalmie bactérienne suspectée.", pros: "Concentration élevée là où sont les bactéries.", cons: "Parfois à répéter.", cx: "Toxicité rétinienne (rare), décollement de rétine.", dose: "Vancomycine 1 mg/0,1 mL et ceftazidime 2,25 mg/0,1 mL.", refer: "Le jour même.", pitfall: "Attendre la culture avant d’injecter." },
    { name: "Vitrectomie", how: "Retire le vitré infecté, les bactéries et les toxines.", why: "Vision réduite à la perception lumineuse (EVS) ; aggravation malgré les injections.", pros: "Meilleure vision finale dans ce groupe (20/40 : 33 % contre 11 %).", cons: "Chirurgie urgente, en salle d’opération.", cx: "Décollement de rétine, cataracte." },
    { name: "Prévention", how: "Povidone iodée 5 % sur la surface avant une injection ; antibiotique intracamérulaire à la fin de la cataracte.", why: "Toute chirurgie ou injection intraoculaire.", pros: "Réduit le risque d’infection.", cons: "Allergie vraie à l’iode : autre antiseptique.", cx: "Irritation de la surface." }
  ],
  pearls: [
    { q: "Pourquoi pas seulement des antibiotiques par la bouche ou la veine ?", a: "Ils pénètrent mal dans le vitré ; dans l’EVS, les antibiotiques IV n’ont rien ajouté. Ce sont les antibiotiques intravitréens, le jour même, qui comptent." },
    { q: "Cornée trouble et peu de douleur le lendemain d’une cataracte : endophtalmie ?", a: "Pas forcément : le syndrome toxique du segment antérieur (TASS) apparaît en 12–48 h, cornée trouble d’un limbe à l’autre, peu de douleur, vitré clair. L’endophtalmie vient plutôt après quelques jours, avec douleur croissante. Dans le doute : le jour même." },
    { q: "Que dis-tu à un patient qui reçoit des injections ?", a: "Revenir le jour même si l’œil devient rouge, douloureux ou voit moins dans les jours qui suivent l’injection." }
  ],
  sources: [
    "Endophthalmitis Vitrectomy Study Group, Arch Ophthalmol 1995;113:1479-96",
    "NLM Clinical Alert : Endophthalmitis Vitrectomy Study (vitrectomie si perception lumineuse ; antibiotiques IV sans bénéfice)",
    "AAO Summary Benchmarks 2023 (signaler vite douleur ou rougeur après une injection)"
  ],
  treatment: {
    first: [
      "**Toi** : acuité, recherche d’hypopyon ; pas de gouttes antibiotiques « en attendant ». Appeler le chirurgien ou l’ophtalmologiste de garde maintenant.",
      "**Ophtalmologiste** : ponction et antibiotiques intravitréens le jour même ; vitrectomie si perception lumineuse."
    ],
    refer: "Référer : immédiatement, le jour même, à l’ophtalmologiste de garde ou au chirurgien — la rétine peut être perdue en quelques heures.",
    pitfall: [
      "**Gouttes antibiotiques** pour une « conjonctivite » sur un œil opéré ou injecté : endophtalmie manquée.",
      "**Antibiotiques oraux ou IV seuls** : ils n’atteignent pas assez le vitré."
    ],
    qc: ["Joindre directement le chirurgien ou l’ophtalmologiste de garde, fin de semaine comprise.", "Consignes écrites de retour pour tout patient injecté."]
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
