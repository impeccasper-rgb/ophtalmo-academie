var G = (typeof window !== 'undefined') ? window : globalThis;
G.OPH = G.OPH || {};

// Liens vers des images cliniques authentiques (photos, impressions d’appareils, vidéos).
// Chaque URL a été vérifiée (résultat de recherche verbatim ou page consultée avec contenu pertinent).
G.OPH.images = {

  // ───────────────────────── Cornée (module B) ─────────────────────────

  "c-secheresse": [
    { title: "Lissamine green staining in keratoconjunctivitis sicca", site: "EyeRounds (University of Iowa)",
      url: "https://eyerounds.org/atlas/pages/LG-staining/index.htm",
      look: "Repérer la coloration diffuse au vert de lissamine (cellules dévitalisées) dans une kératoconjonctivite sèche sévère, photographiée dans trois directions du regard.",
      license: "© University of Iowa — usage éducatif" },
    { title: "Demodex Infestation", site: "EyeWiki (AAO)",
      url: "https://eyewiki.org/Demodex_Infestation",
      look: "Repérer les manchons cylindriques (collerettes) qui engainent la base des cils : signe quasi pathognomonique d’une blépharite à Demodex." },
    { title: "Meibomian Gland Dysfunction (MGD)", site: "EyeWiki (AAO)",
      url: "https://eyewiki.org/Meibomian_Gland_Dysfunction_(MGD)",
      look: "Comparer les grades de meibographie infrarouge (0 à 3) : raccourcissement puis disparition progressive (drop-out) des glandes de Meibomius." }
  ],

  "c-bacterienne": [
    { title: "Bacterial Keratitis", site: "EyeRounds (University of Iowa)",
      url: "https://www.eyerounds.org/atlas/pages/Bacterial-Keratitis.html",
      look: "Repérer la kératite ulcérative infiltrante : infiltrat stromal blanchâtre sous un défaut épithélial, à traiter comme bactérienne jusqu’à preuve du contraire.",
      license: "© University of Iowa — usage éducatif" },
    { title: "Bacterial Keratitis", site: "EyeWiki (AAO)",
      url: "https://eyewiki.aao.org/Bacterial_Keratitis",
      look: "Repérer l’infiltrat stromal associé à un hypopion, niveau blanc déclive dans la chambre antérieure qui signe une kératite sévère." },
    { title: "Hypopyon", site: "EyeRounds (University of Iowa)",
      url: "https://www.eyerounds.org/atlas/pages/Hypopyon.html",
      look: "Comparer des hypopions d’ulcère cornéen et d’endophtalmie endogène, puis la taie (leucome) cicatricielle laissée par un ulcère guéri.",
      license: "© University of Iowa — usage éducatif" }
  ],

  "c-atypiques": [
    { title: "Acanthamoeba keratitis", site: "EyeRounds (University of Iowa)",
      url: "https://eyerounds.org/atlas/pages/acanthamoeba/index.htm",
      look: "Repérer l’infiltrat annulaire paracentral et la périnévrite radiaire (nerfs cornéens épaissis), très évocateurs d’Acanthamoeba chez un porteur de lentilles.",
      license: "© University of Iowa — usage éducatif" },
    { title: "Fungal keratitis", site: "EyeRounds (University of Iowa)",
      url: "https://eyerounds.org/atlas/pages/Fungal-keratitis/index.htm",
      look: "Repérer l’infiltrat surélevé et sec à bords plumeux (feathery), les lésions satellites et l’hypopion d’une kératite à Fusarium ou Aspergillus.",
      license: "© University of Iowa — usage éducatif" },
    { title: "Corneal Satellite Infiltrates", site: "EyeRounds (University of Iowa)",
      url: "https://eyerounds.org/atlas/pages/Corneal-Satellite-Infiltrates/index.htm",
      look: "Piège : infiltrats satellites autour d’un ulcère à bacille Gram négatif, rappelant que les satellites évoquent le champignon sans en être pathognomoniques.",
      license: "© University of Iowa — usage éducatif" }
  ],

  "c-herpes": [
    { title: "HSV epithelial keratitis, dendrite", site: "EyeRounds (University of Iowa)",
      url: "https://eyerounds.org/atlas/pages/HSV-dendrite/index.htm",
      look: "Repérer l’ulcère dendritique ramifié, avec un bulbe terminal au bout de chaque branche et des berges épithéliales œdématiées.",
      license: "© University of Iowa — usage éducatif" },
    { title: "Dendritic keratitis - stained", site: "EyeRounds (University of Iowa)",
      url: "https://eyerounds.org/atlas/pages/dendritic-keratitis-stained.html",
      look: "Observer le motif linéaire ramifié de la dendrite active, rendu évident par la coloration du fond de l’ulcère : image classique d’examen.",
      license: "© University of Iowa — CC BY-NC-ND 3.0" },
    { title: "Pseudodendrites (herpes zoster)", site: "EyeRounds (University of Iowa)",
      url: "https://www.eyerounds.org/atlas/pages/pseudodendrites.htm",
      look: "Comparer avec le zona ophtalmique (V1) : pseudodendrites surélevées, sans bulbes terminaux et peu colorées par la fluorescéine.",
      license: "© University of Iowa — usage éducatif" }
  ],

  "c-keratocone": [
    { title: "Keratoconus", site: "EyeRounds (University of Iowa)",
      url: "https://eyerounds.org/atlas/pages/keratoconus/index.htm",
      look: "Repérer le signe de Munson (paupière inférieure déformée en regard vers le bas), les stries de Vogt et le rapport Pentacam 4 cartes d’un kératocône avancé.",
      license: "© University of Iowa — usage éducatif" },
    { title: "Fleischer ring in keratoconus", site: "EyeRounds (University of Iowa)",
      url: "https://eyerounds.org/atlas/pages/fleischer-ring-keratoconus-classic.html",
      look: "Repérer l’anneau ferrique brunâtre (anneau de Fleischer) à la base du cône, mieux vu au bleu cobalt, avec stries de Vogt et cicatrice apicale post-hydrops.",
      license: "© University of Iowa — usage éducatif" },
    { title: "Corneal Hydrops", site: "EyeRounds (University of Iowa)",
      url: "https://eyerounds.org/atlas/pages/Corneal-Hydrops/index.htm",
      look: "Repérer l’œdème stromal inférieur aigu avec bulles épithéliales et, à l’OCT de segment antérieur, la rupture avec décollement de la membrane de Descemet.",
      license: "© University of Iowa — usage éducatif" }
  ],

  "c-fuchs": [
    { title: "Guttae in Fuchs’ endothelial corneal dystrophy", site: "EyeRounds (University of Iowa)",
      url: "https://eyerounds.org/atlas/pages/guttae/index.htm",
      look: "Repérer les guttae endothéliales centrales qui donnent l’aspect de « métal martelé » (beaten metal) à la lampe à fente.",
      license: "© University of Iowa — usage éducatif" },
    { title: "Fuchs’ Endothelial Corneal Dystrophy", site: "EyeRounds (University of Iowa)",
      url: "https://www.eyerounds.org/cases/343-Fuchs-Endothelial-Corneal-Dystrophy.htm",
      look: "Comparer guttae en rétroillumination, œdème cornéen, microscopie spéculaire (densité effondrée) et tomographie Scheimpflug (épaississement, dépression postérieure).",
      license: "© University of Iowa — usage éducatif" },
    { title: "Descemet Membrane Endothelial Keratoplasty (DMEK)", site: "EyeRounds (University of Iowa)",
      url: "https://eyerounds.org/atlas/pages/DMEK/index.htm",
      look: "Suivre une DMEK faite pour Fuchs : bulle de gaz en chambre antérieure à 1 semaine, puis cornée redevenue claire à 1 mois.",
      license: "© University of Iowa — usage éducatif" }
  ],

  "c-erosion": [
    { title: "Epithelial basement membrane dystrophy (map-dot-fingerprint)", site: "EyeRounds (University of Iowa)",
      url: "https://eyerounds.org/atlas/pages/map-dot-dystrophy.htm",
      look: "Repérer les lignes en carte géographique, les points gris intraépithéliaux (pseudokystes) et les lignes en empreinte digitale de la dystrophie de la membrane basale.",
      license: "© University of Iowa — usage éducatif" },
    { title: "Corneal erosion", site: "EyeRounds (University of Iowa)",
      url: "https://eyerounds.org/atlas/pages/corneal-erosion-OS.html",
      look: "Repérer la large désépithélialisation centrale fluorescéine positive chez un diabétique sans traumatisme : l’adhésion épithéliale fragile favorise les érosions.",
      license: "© University of Iowa — usage éducatif" },
    { title: "Corneal Abrasion", site: "EyeRounds (University of Iowa)",
      url: "https://eyerounds.org/atlas/pages/corneal-abrasion/index.htm",
      look: "Repérer le défaut épithélial à bords nets qui prend la fluorescéine, nettement plus visible sous lumière bleu cobalt.",
      license: "© University of Iowa — usage éducatif" }
  ],

  "c-pterygion": [
    { title: "Pterygium", site: "EyeRounds (University of Iowa)",
      url: "https://eyerounds.org/atlas/pages/Pterygium/index.htm",
      look: "Repérer le repli fibrovasculaire en aile dont la tête envahit la cornée superficielle (astigmatisme, puis menace de l’axe visuel s’il progresse).",
      license: "© University of Iowa — usage éducatif" },
    { title: "Pinguecula", site: "EyeRounds (University of Iowa)",
      url: "https://eyerounds.org/atlas/pages/pinguecula.html",
      look: "Repérer la lésion jaunâtre surélevée de la conjonctive bulbaire nasale, sans envahissement cornéen (dégénérescence élastotique), à distinguer du ptérygion.",
      license: "© University of Iowa — usage éducatif" },
    { title: "Ocular surface squamous neoplasia", site: "EyeRounds (University of Iowa)",
      url: "https://eyerounds.org/atlas/pages/OSSN/",
      look: "Repérer la néoplasie in situ marquée au rose bengale ; toute lésion limbique gélatineuse ou leucoplasique doit faire évoquer une OSSN et une biopsie.",
      license: "© University of Iowa — usage éducatif" }
  ],

  "c-greffe": [
    { title: "Khodadoust line", site: "EyeRounds (University of Iowa)",
      url: "https://eyerounds.org/atlas/pages/Khodadoust2/index.htm",
      look: "Repérer la ligne de Khodadoust (leucocytes sur l’endothélium) qui avance : cornée œdémateuse là où elle est passée, claire devant elle, signe de rejet endothélial.",
      license: "© University of Iowa — usage éducatif" },
    { title: "Penetrating keratoplasty (PK)", site: "EyeRounds (University of Iowa)",
      url: "https://eyerounds.org/atlas/pages/PK/index.htm",
      look: "Comparer les sutures d’une kératoplastie transfixiante (points séparés, surjet, combinées) et un greffon resté clair 30 ans après la chirurgie.",
      license: "© University of Iowa — usage éducatif" },
    { title: "Descemet Membrane Endothelial Keratoplasty (DMEK)", site: "EyeRounds (University of Iowa)",
      url: "https://eyerounds.org/atlas/pages/DMEK/index.htm",
      look: "Repérer la bulle de gaz qui plaque le greffon puis, à l’OCT, un greffon bien apposé avec un discret soulèvement de bord périphérique.",
      license: "© University of Iowa — usage éducatif" }
  ],

  "c-brulure": [
    { title: "Chemical (Alkali and Acid) Injury of the Conjunctiva and Cornea", site: "EyeWiki (AAO)",
      url: "https://eyewiki.org/Chemical_(Alkali_and_Acid)_Injury_of_the_Conjunctiva_and_Cornea",
      look: "Repérer l’ischémie limbique (limbe blanc, vaisseaux non perfusés) d’une brûlure alcaline sévère et le tableau des classifications Roper-Hall et Dua." },
    { title: "Chemical Eye Injury: A Case Report and Tutorial", site: "EyeRounds (University of Iowa)",
      url: "https://www.eyerounds.org/cases/307-chemical-eye-injury.htm",
      look: "Repérer le secteur d’ischémie limbique de 9 h à 3 h : son étendue en heures conditionne le grade et le pronostic de la brûlure.",
      license: "© University of Iowa — usage éducatif" },
    { title: "Alkali Chemical Burn", site: "EyeRounds (University of Iowa)",
      url: "https://eyerounds.org/atlas/pages/Alkali-chemical-burn/index.htm",
      look: "Voir les séquelles 6 mois après une brûlure alcaline grave : opacification cornéenne, pannus (insuffisance limbique) et symblépharon.",
      license: "© University of Iowa — usage éducatif" }
  ],

  // ───────────────────────── Glaucome (module C) ─────────────────────────

  "g-gpao": [
    { title: "Optic Disc Notch and RNFL Defect in POAG", site: "EyeRounds (University of Iowa)",
      url: "https://www.eyerounds.org/atlas/pages/inf-notch-NFL-defect-HVF.htm",
      look: "Repérer l’encoche inférieure de l’anneau, la perte du reflet des fibres en éventail temporal, puis le scotome arciforme supérieur correspondant au champ visuel.",
      license: "© University of Iowa — usage éducatif" },
    { title: "Glaucomatous Optic Nerve", site: "Digital Reference of Ophthalmology (Columbia University)",
      url: "https://www.vagelos.columbia.edu/departments-centers/ophthalmology/education/digital-reference-ophthalmology/glaucoma/optic-nerve-and-others/glaucomatous-optic-nerve",
      look: "Repérer l’excavation verticale asymétrique entre les deux yeux, l’encoche supérieure de l’anneau, la nasalisation des vaisseaux et la lame criblée visible." },
    { title: "Bayoneting of vessels and bean-pot cupping in advanced glaucoma", site: "EyeRounds (University of Iowa)",
      url: "https://webeye.ophth.uiowa.edu/eyeforum/atlas/pages/bean-pot-cupping.htm",
      look: "Repérer l’excavation « en pot de haricots » où les vaisseaux disparaissent en baïonnette sous le rebord, avec OCT montrant une perte diffuse RNFL et ganglionnaire.",
      license: "© University of Iowa — usage éducatif" }
  ],

  "g-hto": [
    { title: "Normal fundus - adult", site: "EyeRounds (University of Iowa)",
      url: "https://webeye.ophth.uiowa.edu/eyeforum/atlas/pages/normal-fundus.htm",
      look: "Papille de référence normale (rose, bords nets, C/D ≈ 0,35, reflet strié des fibres) : c’est ce que l’on documente au départ chez un patient avec HTO.",
      license: "© University of Iowa — usage éducatif" },
    { title: "Prostaglandin-associated Hypertrichosis", site: "Digital Reference of Ophthalmology (Columbia University)",
      url: "https://www.vagelos.columbia.edu/departments-centers/ophthalmology/education/digital-reference-ophthalmology/glaucoma/optic-nerve-and-others/prostaglandin-associated-hypertrichosis",
      look: "Repérer l’allongement et l’épaississement des cils avec hyperpigmentation : effets attendus des analogues des prostaglandines, à expliquer avant de traiter une HTO." }
  ],

  "g-gpn": [
    { title: "Optic disc hemorrhage in normal tension glaucoma", site: "EyeRounds (University of Iowa)",
      url: "https://eyerounds.org/atlas/pages/Optic-Disc-Hemorrhage-in-NTG.htm",
      look: "Repérer l’hémorragie en flammèche au rebord du disque et l’atrophie péripapillaire : signe de progression et de contrôle pressionnel insuffisant.",
      license: "© University of Iowa — usage éducatif" },
    { title: "Normal Low Tension Glaucoma", site: "EyeRounds (University of Iowa)",
      url: "https://eyerounds.org/cases/86-Normal-Low-Tension-Glaucoma.htm",
      look: "Corréler photos papillaires, champs visuels Humphrey et OCT dans un glaucome à pression normale, puis comparer le champ refait un an plus tard.",
      license: "© University of Iowa — usage éducatif" },
    { title: "Splinter Optic Disc Hemorrhage", site: "Digital Reference of Ophthalmology (Columbia University)",
      url: "https://www.vagelos.columbia.edu/departments-centers/ophthalmology/education/digital-reference-ophthalmology/glaucoma/optic-nerve-and-others/splinter-optic-disc-hemorrhage",
      look: "Repérer les hémorragies en flammèche sur un disque glaucomateux avec encoche de l’anneau, vaisseau circumlinéaire dénudé et amincissement diffus des fibres." }
  ],

  "g-fermeture": [
    { title: "Plateau Iris", site: "EyeRounds (University of Iowa)",
      url: "https://eyerounds.org/cases/143-plateau-iris.htm",
      look: "Repérer en gonioscopie la « double bosse » de l’iris plateau et, à l’OCT de segment antérieur, l’angle étroit avant puis après iridotomie au laser.",
      license: "© University of Iowa — usage éducatif" },
    { title: "Narrow Angles - Slit lamp only", site: "Gonioscopy.org (University of Iowa)",
      url: "https://www.gonioscopy.org/cases/pupillary-block/narrow-angles-slit-lamp-only.htm",
      look: "Vidéo à la lampe à fente : Van Herick extrêmement étroit avec zones d’apposition iridocornéenne en périphérie." },
    { title: "Primary vs. Secondary Angle Closure Glaucoma", site: "EyeWiki (AAO)",
      url: "https://eyewiki.org/Primary_vs._Secondary_Angle_Closure_Glaucoma",
      look: "Repérer les synéchies antérieures périphériques (PAS) qui ferment l’angle : fermeture chronique, mécanisme mixte et syndrome ICE en diagnostic différentiel." }
  ],

  "g-crise": [
    { title: "Acute Angle Closure Glaucoma", site: "EyeRounds (University of Iowa)",
      url: "https://webeye.ophth.uiowa.edu/eyeforum/atlas/pages/acute-angle-closure.html",
      look: "Repérer l’œil rouge unilatéral avec cornée trouble (œdème épithélial) : toujours mesurer la PIO devant un œil rouge douloureux avec baisse de vision.",
      license: "© University of Iowa — usage éducatif" },
    { title: "Acute Angle-Closure Glaucoma", site: "The Eyes Have It (Kellogg Eye Center, University of Michigan)",
      url: "https://kellogg.umich.edu/theeyeshaveit/redeye/angleclosure_glaucoma.html",
      look: "Repérer la cornée embuée, l’injection et la pupille qui ne se contracte pas à la lumière directe, signes cardinaux de la crise aiguë." },
    { title: "Sequelae from Acute Angle Closure Attack", site: "Gonioscopy.org (University of Iowa)",
      url: "https://www.gonioscopy.org/cases/pupillary-block/sequelae-from-acute-angle-closure-attack-slit-lamp-only.htm",
      look: "Vidéo des séquelles d’une crise bilatérale (PIO 58 et 63 mmHg) traitée par iridotomies : chercher atrophie irienne, glaukomflecken et pupille déformée." }
  ],

  "g-pxf": [
    { title: "Pseudoexfoliation glaucoma", site: "EyeRounds (University of Iowa)",
      url: "https://www.eyerounds.org/cases/case8.htm",
      look: "Repérer la ligne de Sampaolesi pigmentée en gonioscopie, le matériel blanc floconneux sur les zonules et la lésion en cible de la capsule antérieure en rétroillumination.",
      license: "© University of Iowa — usage éducatif" },
    { title: "Pseudoexfoliative Glaucoma", site: "EyeWiki (AAO)",
      url: "https://eyewiki.org/Pseudoexfoliative_Glaucoma",
      look: "Repérer le disque central sur la capsule antérieure entouré d’une zone claire (frottement irien), les flocons au rebord pupillaire et le trabéculum pigmenté irrégulier." },
    { title: "Pseudoexfoliation syndrome", site: "EyeRounds (University of Iowa)",
      url: "https://eyerounds.org/atlas/pages/pseudoexfoliation-syndrome/pseudoexfoliation-syn.htm",
      look: "Repérer l’implant dans le sac décentré vers le bas et le matériel exfoliatif sur les zonules : la faiblesse zonulaire est le piège chirurgical du PXF.",
      license: "© University of Iowa — usage éducatif" }
  ],

  "g-pigmentaire": [
    { title: "Pigment dispersion syndrome / glaucoma", site: "EyeRounds (University of Iowa)",
      url: "https://eyerounds.org/atlas/pages/pigment-dispersion-syndrome-glaucoma.html",
      look: "Repérer les défauts de transillumination irienne radiaires en périphérie moyenne, le fuseau de Krukenberg et la strie de Scheie sur la capsule.",
      license: "© University of Iowa — usage éducatif" },
    { title: "Pigmentary Glaucoma", site: "EyeRounds (University of Iowa)",
      url: "https://www.eyerounds.org/cases/184-pigmentary-glaucoma.htm",
      look: "Repérer le fuseau de Krukenberg vertical sur l’endothélium et, en gonioscopie, l’iris concave (backbowing) avec un trabéculum très pigmenté.",
      license: "© University of Iowa — usage éducatif" },
    { title: "Pigmentary Glaucoma and Pigment Dispersion Syndrome", site: "EyeWiki (AAO)",
      url: "https://eyewiki.org/Pigmentary_Glaucoma_and_Pigment_Dispersion_Syndrome",
      look: "Comparer fuseau de Krukenberg, transillumination irienne et trabéculum densément pigmenté de façon homogène (contrairement au PXF, plus irrégulier)." }
  ],

  "g-neovasculaire": [
    { title: "Rubeosis iridis (neovascularization of the iris) in diabetes", site: "EyeRounds (University of Iowa)",
      url: "https://eyerounds.org/atlas/pages/NVI/index.htm",
      look: "Repérer les fins vaisseaux irréguliers sur l’iris et en touffes au rebord pupillaire, la néovascularisation de l’angle sur 360° et un petit hyphéma.",
      license: "© University of Iowa — usage éducatif" },
    { title: "Rubeosis iridis", site: "EyeRounds (University of Iowa)",
      url: "https://eyerounds.org/atlas/pages/Rubeosis-iridis.html",
      look: "Repérer la rubéose étendue de la surface irienne sur un œil ischémique ayant évolué vers un glaucome néovasculaire.",
      license: "© University of Iowa — usage éducatif" },
    { title: "Neovascularization of the Angle in Diabetes", site: "Gonioscopy.org (University of Iowa)",
      url: "https://www.gonioscopy.org/cases/neovascular/neovascularization-of-the-angle-in-diabetes.htm",
      look: "Vidéo de gonioscopie chez un jeune diabétique de type 1 : chercher les vaisseaux fins qui franchissent l’éperon scléral pour gagner le trabéculum." }
  ],

  "g-secondaires": [
    { title: "Mutton Fat Keratic Precipitates (KP)", site: "EyeRounds (University of Iowa)",
      url: "https://eyerounds.org/atlas/pages/KP-Mutton-Fat-keratic-PPT/index.htm",
      look: "Repérer les gros précipités jaunâtres « en graisse de mouton » dans le triangle d’Arlt (endothélium inférieur), typiques d’une inflammation granulomateuse.",
      license: "© University of Iowa — usage éducatif" },
    { title: "Posner-Schlossman Syndrome (Glaucomatocyclitic Crisis)", site: "EyeRounds (University of Iowa)",
      url: "https://eyerounds.org/cases/242-Posner-schlossman-syndrome.htm",
      look: "Repérer le petit précipité discret et l’injection légère contrastant avec des poussées de PIO très élevées et récidivantes sur des décennies.",
      license: "© University of Iowa — usage éducatif" },
    { title: "Iris Bombe", site: "EyeRounds (University of Iowa)",
      url: "https://eyerounds.org/atlas/pages/iris-bombe.htm",
      look: "Repérer l’iris bombé vers l’avant derrière des synéchies postérieures (séclusion pupillaire) : fermeture secondaire de l’angle dans une uvéite chronique.",
      license: "© University of Iowa — usage éducatif" }
  ],

  "g-postop": [
    { title: "Bleb Associated Infections", site: "EyeWiki (AAO)",
      url: "https://eyewiki.org/Bleb_Associated_Infections",
      look: "Repérer la bulle mince avasculaire, le Seidel positif (fluorescéine lavée par l’humeur aqueuse qui fuit) et la blébite d’aspect « blanc sur rouge »." },
    { title: "Trabeculectomy", site: "EyeWiki (AAO)",
      url: "https://eyewiki.org/Trabeculectomy",
      look: "Repérer les complications photographiées : fuite de bulle, bulle hyperfiltrante, décollements choroïdiens et plis choriorétiniens de maculopathie d’hypotonie." },
    { title: "Corneal Decomp Due to Tube Shunt", site: "Gonioscopy.org (University of Iowa)",
      url: "https://www.gonioscopy.org/cases/post-surgical-appearance/corneal-decomp-due-to-tube-shunt.htm",
      look: "Vidéo de deux tubes de drainage (Molteno, Baerveldt) : l’un bien placé derrière le trabéculum, l’autre traversant la cornée périphérique avec décompensation sectorielle." }
  ],

  // ───────────────────────── Module A — examen et imagerie ─────────────────────────

  "a-lampe": [
    { title: "Fundamentals of Slit Lamp Biomicroscopy", site: "EyeRounds (University of Iowa)",
      url: "https://eyerounds.org/atlas-video/slitlamp.html",
      look: "Vidéo de formation de 23 minutes pour nouveaux résidents : réglages et techniques d’éclairage du biomicroscope, à voir avant la première clinique.",
      license: "© University of Iowa — usage éducatif" },
    { title: "Slit Lamp Examination", site: "EyeWiki (AAO)",
      url: "https://eyewiki.org/Slit_Lamp_Examination",
      look: "Repérer l’anatomie de la lampe à fente puis des exemples réels : épisclérite diffuse, précipités kératiques, hypopion et kératite herpétique." },
    { title: "Mutton Fat KP (diffuse, slit beam, scleral scatter)", site: "EyeRounds (University of Iowa)",
      url: "https://eyerounds.org/atlas/pages/KP-Mutton-Fat-keratic-PPT/index.htm",
      look: "Comparer le même œil en éclairage diffus, en fente fine et en dispersion sclérale : chaque technique révèle différemment les précipités.",
      license: "© University of Iowa — usage éducatif" }
  ],

  "a-fluoresceine": [
    { title: "Punctate epithelial erosions (PEE)", site: "EyeRounds (University of Iowa)",
      url: "https://eyerounds.org/atlas/pages/Punctate-epithelial-erosions/index.htm",
      look: "Repérer les érosions ponctuées inférieures qui prennent la fluorescéine : un patron inférieur oriente vers l’exposition, la blépharite ou le trichiasis.",
      license: "© University of Iowa — usage éducatif" },
    { title: "Stained marginal corneal abrasion", site: "EyeRounds (University of Iowa)",
      url: "https://eyerounds.org/atlas/pages/cornea-stained-marginal-corneal-abrasion.html",
      look: "Comparer la même abrasion marginale supérieure avec et sans fluorescéine : le défaut épithélial ne devient évident qu’une fois coloré.",
      license: "© University of Iowa — usage éducatif" },
    { title: "Seidel Test", site: "EyeWiki (AAO)",
      url: "https://eyewiki.org/Seidel_Test",
      look: "Repérer le Seidel positif : la fluorescéine concentrée est diluée en un ruisselet vert clair par l’humeur aqueuse qui fuit du défaut cornéen." }
  ],

  "a-gonioscopie": [
    { title: "Color Atlas of Gonioscopy: The Normal Angle", site: "American Academy of Ophthalmology",
      url: "https://www.aao.org/disease-review/the-normal-angle",
      look: "Repérer de l’arrière vers l’avant : racine de l’iris, bande ciliaire, éperon scléral blanc, trabéculum (pigmenté en arrière) et ligne de Schwalbe." },
    { title: "Normal Pigmented Angle", site: "Gonioscopy.org (University of Iowa)",
      url: "https://www.gonioscopy.org/cases/normal-angle/normal-pigmented-angle.htm",
      look: "Vidéo d’un angle normal bien pigmenté (Spaeth D40f) : toutes les structures sont visibles jusqu’à la bande ciliaire, iris plat." },
    { title: "The Normal Angle", site: "Gonioscopy.org (University of Iowa)",
      url: "https://www.gonioscopy.org/normal-angle.htm",
      look: "Variantes normales à ne pas prendre pour une pathologie : procès iriens, grand cercle artériel de l’iris visible, reflux sanguin dans le canal de Schlemm." }
  ],

  "a-papille": [
    { title: "Normal fundus - adult", site: "EyeRounds (University of Iowa)",
      url: "https://webeye.ophth.uiowa.edu/eyeforum/atlas/pages/normal-fundus.htm",
      look: "Papille normale : rose, bords nets, C/D ≈ 0,35, vaisseaux de calibre normal et reflet strié des fibres nerveuses péripapillaires.",
      license: "© University of Iowa — usage éducatif" },
    { title: "Glaucomatous Optic Nerve", site: "Digital Reference of Ophthalmology (Columbia University)",
      url: "https://www.vagelos.columbia.edu/departments-centers/ophthalmology/education/digital-reference-ophthalmology/glaucoma/optic-nerve-and-others/glaucomatous-optic-nerve",
      look: "Repérer l’agrandissement vertical de l’excavation, l’encoche de l’anneau neurorétinien, le vaisseau circumlinéaire dénudé et la lame criblée visible." },
    { title: "Optic Disc Notch and RNFL Defect in POAG", site: "EyeRounds (University of Iowa)",
      url: "https://www.eyerounds.org/atlas/pages/inf-notch-NFL-defect-HVF.htm",
      look: "Appliquer la règle ISNT : l’anneau inférieur devrait être le plus épais, or une encoche inférieure le rompt ici, avec perte du reflet des fibres.",
      license: "© University of Iowa — usage éducatif" }
  ],

  "a-oct": [
    { title: "Spectral Domain Optical Coherence Tomography in Glaucoma", site: "EyeWiki (AAO)",
      url: "https://eyewiki.org/Spectral_Domain_Optical_Coherence_Tomography_in_Glaucoma",
      look: "Lire la carte RNFL (courbe TSNIT, code couleur normatif), l’analyse ganglionnaire maculaire, la progression (GPA) et les artefacts de segmentation." },
    { title: "Macular OCT Imaging in Glaucoma", site: "EyeWiki (AAO)",
      url: "https://eyewiki.org/Macular_OCT_Imaging_in_Glaucoma",
      look: "Lire l’analyse d’asymétrie maculaire (Spectralis) d’un GPAO : chercher un amincissement hémisphérique qui respecte le raphé horizontal." },
    { title: "Bayoneting of vessels and bean-pot cupping in advanced glaucoma", site: "EyeRounds (University of Iowa)",
      url: "https://webeye.ophth.uiowa.edu/eyeforum/atlas/pages/bean-pot-cupping.htm",
      look: "Repérer à l’OCT l’excavation marquée avec perte diffuse de la RNFL et de la couche ganglionnaire maculaire : attention à l’effet plancher au stade avancé.",
      license: "© University of Iowa — usage éducatif" }
  ],

  "a-topographie": [
    { title: "Corneal Imaging: An Introduction", site: "EyeRounds (University of Iowa)",
      url: "https://www.eyerounds.org/tutorials/Corneal-Imaging/Index.htm",
      look: "Comparer les mires de Placido, les cartes axiales (« pince de crabe » de la dégénérescence pellucide vs cambrure inférieure du kératocône) et le Pentacam.",
      license: "© University of Iowa — usage éducatif" },
    { title: "Refractive Surgery Pearls in Topography", site: "EyeWiki (AAO)",
      url: "https://eyewiki.org/Refractive_Surgery_Pearls_in_Topography",
      look: "Repérer les patrons de Rabinowitz, les cartes d’élévation antérieure et postérieure et la carte pachymétrique servant à dépister un kératocône fruste." },
    { title: "Keratoconus", site: "EyeRounds (University of Iowa)",
      url: "https://eyerounds.org/atlas/pages/keratoconus/index.htm",
      look: "Lire le rapport Pentacam 4 cartes d’un kératocône avancé : cambrure antérieure centrale, cornée centrale surélevée et amincissement central.",
      license: "© University of Iowa — usage éducatif" }
  ],

  "a-champs-visuels": [
    { title: "Visual fields interpretation in glaucoma: a focus on static automated perimetry", site: "Community Eye Health Journal",
      url: "https://cehjournal.org/articles/618",
      look: "Suivre l’ordre de lecture d’un Humphrey : données du patient, indices de fiabilité, échelle de gris, déviation totale, déviation individuelle (pattern) puis indices globaux.",
      license: "CC BY-NC 4.0" },
    { title: "Optic Disc Notch and RNFL Defect in POAG", site: "EyeRounds (University of Iowa)",
      url: "https://www.eyerounds.org/atlas/pages/inf-notch-NFL-defect-HVF.htm",
      look: "Repérer le scotome arciforme supérieur qui correspond à l’encoche papillaire inférieure (corrélation structure-fonction).",
      license: "© University of Iowa — usage éducatif" },
    { title: "Normal Low Tension Glaucoma", site: "EyeRounds (University of Iowa)",
      url: "https://eyerounds.org/cases/86-Normal-Low-Tension-Glaucoma.htm",
      look: "Comparer deux champs Humphrey faits à un an d’intervalle pour juger de la progression d’un glaucome à pression normale.",
      license: "© University of Iowa — usage éducatif" }
  ],

  "a-speculaire": [
    { title: "Specular Microscopy", site: "StatPearls",
      url: "https://www.statpearls.com/ArticleLibrary/viewarticle/145088",
      look: "Repérer sur la spéculaire d’une Fuchs la densité cellulaire basse, le coefficient de variation élevé, l’hexagonalité réduite et les zones noires (guttae)." },
    { title: "Deep learning for detection of Fuchs endothelial dystrophy (Fig. 1)", site: "Eye and Vision (BMC)",
      url: "https://eandv.biomedcentral.com/articles/10.1186/s40662-024-00378-1/figures/1",
      look: "Comparer une mosaïque endothéliale normale à des guttae non confluentes puis confluentes (taches noires) et à des dépôts pigmentaires d’uvéite." },
    { title: "Fuchs’ Endothelial Corneal Dystrophy", site: "EyeRounds (University of Iowa)",
      url: "https://www.eyerounds.org/cases/343-Fuchs-Endothelial-Corneal-Dystrophy.htm",
      look: "Repérer sur la spéculaire bilatérale des guttae confluentes, une densité endothéliale très basse et une grande variation de taille et de forme des cellules.",
      license: "© University of Iowa — usage éducatif" }
  ]
};
