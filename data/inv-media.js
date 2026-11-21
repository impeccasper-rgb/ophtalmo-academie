var G = (typeof window !== 'undefined') ? window : globalThis;
G.OPH = G.OPH || {};
// Ressources visuelles des Investigations (contrat docs/PLATFORM.md). Généré par le rôle « ressources visuelles ».
// photo : id du catalogue EyeRounds (droits : docs/RIGHTS.md). restricted:true = image SANS licence CC
// (conditions EyeRounds) : ne pas publier avant permission écrite; prévoir un repli (schéma ou autre photo).
// hotspots en % de la largeur/hauteur de l’image affichée ENTIÈRE (aucun recadrage : licence ND).
// Fusion sans écraser : la pédagogie peut ajouter des entrées.
G.OPH.invMedia = Object.assign(G.OPH.invMedia || {}, {
 "m-bscan-1": {
  "kind": "photo",
  "photo": "OPH-243",
  "alt": {
   "fr": "Cataracte blanche (mature) : la pupille est blanche, le fond d’œil n’est pas visible.",
   "en": "White (mature) cataract: the pupil is white, the fundus cannot be seen."
  },
  "hotspots": [
   {
    "x": 50,
    "y": 52,
    "r": 14.0,
    "label": {
     "fr": "Pupille blanche : cataracte mature, aucun reflet du fond d’œil → la lumière ne passe pas, les ultrasons oui",
     "en": "White pupil: mature cataract, no fundus reflex → light is blocked, ultrasound is not"
    },
    "decisive": true
   }
  ],
  "credit": {
   "fr": "EyeRounds.org, University of Iowa (CC BY-NC-ND 3.0). Image non modifiée.",
   "en": "EyeRounds.org, University of Iowa (CC BY-NC-ND 3.0). Image unmodified."
  },
  "license": "CC BY-NC-ND 3.0",
  "source": "https://webeye.ophth.uiowa.edu/eyeforum/atlas/pages/mature-cortical-cataract.htm"
 },
 "m-bscan-2": {
  "kind": "svg",
  "svg": "<svg viewBox=\"0 0 400 300\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" font-family=\"system-ui,-apple-system,Segoe UI,sans-serif\"><rect width=\"400\" height=\"300\" rx=\"10\" fill=\"#f7f6f2\"/><text x=\"200\" y=\"27\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"600\" fill=\"#2b2a26\">Coupe L9 (macula) · L9 macular view</text><path d=\"M30 150 L372 34 A360 360 0 0 1 372 266 Z\" fill=\"#5d5d5d\"/><circle cx=\"180\" cy=\"150\" r=\"100\" fill=\"#141414\"/><path d=\"M244 73 A100 100 0 0 1 244 227\" fill=\"none\" stroke=\"#efefef\" stroke-width=\"5\"/><path d=\"M266.6 200 L254.3 216.9 L321 277 L344.5 245 Z\" fill=\"#1b1b1b\"/><rect x=\"22\" y=\"138\" width=\"10\" height=\"24\" rx=\"2\" fill=\"#2b2a26\"/><g font-size=\"10\" fill=\"#ffffff\"><text x=\"150\" y=\"155\" text-anchor=\"middle\">vitré</text></g><text x=\"200\" y=\"278\" text-anchor=\"middle\" font-size=\"10\" fill=\"#2b2a26\">macula au centre de l’écran, nerf optique en bas</text><text x=\"200\" y=\"291\" text-anchor=\"middle\" font-size=\"10\" fill=\"#5c5850\">macula centred, optic nerve below</text><text x=\"394\" y=\"10\" text-anchor=\"end\" font-size=\"7.5\" fill=\"#8a8578\">schéma · schematic</text></svg>",
  "alt": {
   "fr": "Schéma d’une échographie B en coupe longitudinale de la macula (L9, œil droit) : paroi postérieure et ombre du nerf optique.",
   "en": "Schematic of a longitudinal macular B-scan (L9, right eye): posterior wall and optic nerve shadow."
  },
  "hotspots": [
   {
    "x": 81,
    "y": 81,
    "r": 7,
    "label": {
     "fr": "Bande sombre derrière la paroi, sous la macula : ombre du nerf optique (repère d’orientation)",
     "en": "Dark band behind the wall, below the macula: optic nerve shadow (orientation landmark)"
    },
    "decisive": true
   },
   {
    "x": 70,
    "y": 50,
    "r": 6,
    "label": {
     "fr": "Macula : centre de la paroi postérieure",
     "en": "Macula: centre of the posterior wall"
    }
   },
   {
    "x": 45,
    "y": 50,
    "r": 8,
    "label": {
     "fr": "Vitré anéchogène",
     "en": "Echo-free vitreous"
    }
   },
   {
    "x": 7,
    "y": 50,
    "r": 5,
    "label": {
     "fr": "Sonde (côté temporal, 9 h)",
     "en": "Probe (temporal side, 9 o’clock)"
    }
   }
  ],
  "credit": {
   "fr": "Schéma original (ophtalmo app), non tiré d’un patient réel.",
   "en": "Original schematic (ophtalmo app), not from a real patient."
  },
  "license": "original",
  "schematic": true
 },
 "m-bscan-3": {
  "kind": "photo",
  "photo": "OPH-205",
  "alt": {
   "fr": "Échographie B normale, coupe transverse supérieure (T12) : position de la sonde à gauche, image à droite.",
   "en": "Normal B-scan, superior transverse view (T12): probe position on the left, echogram on the right."
  },
  "hotspots": [
   {
    "x": 27,
    "y": 57,
    "r": 5.2,
    "label": {
     "fr": "Sonde posée sur la paupière, marqueur orienté : la flèche L/F indique le plan de coupe (limbe ↔ fornix)",
     "en": "Probe on the closed lid; the L/F arrow shows the scan plane (limbus ↔ fornix)"
    }
   },
   {
    "x": 57,
    "y": 50,
    "r": 4.7,
    "label": {
     "fr": "Vitré normal : vide d’échos (noir)",
     "en": "Normal vitreous: echo-free (black)"
    }
   },
   {
    "x": 67,
    "y": 50,
    "r": 4.1,
    "label": {
     "fr": "Paroi postérieure lisse et régulière (rétine-choroïde-sclère)",
     "en": "Smooth, regular posterior wall (retina-choroid-sclera)"
    },
    "decisive": true
   },
   {
    "x": 96,
    "y": 96,
    "r": 3,
    "label": {
     "fr": "Étiquette de la coupe : T12P = transverse, 12 h, postérieur",
     "en": "View label: T12P = transverse, 12 o’clock, posterior"
    }
   }
  ],
  "credit": {
   "fr": "EyeRounds.org, University of Iowa. © University of Iowa, tous droits réservés; usage éducatif selon les conditions EyeRounds (permission écrite demandée).",
   "en": "EyeRounds.org, University of Iowa. © University of Iowa, all rights reserved; educational use under EyeRounds terms (written permission requested)."
  },
  "license": "EyeRounds TOS (no CC licence)",
  "source": "https://eyerounds.org/tutorials/ultrasound/index.htm",
  "restricted": true
 },
 "m-bscan-4": {
  "kind": "photo",
  "photo": "OPH-289",
  "alt": {
   "fr": "Décollement choroïdien hémorragique non apposé : rétinophotos (haut) et échographies B (bas).",
   "en": "Hemorrhagic, non-appositional choroidal detachment: fundus photos (top) and B-scans (bottom)."
  },
  "hotspots": [
   {
    "x": 20,
    "y": 72,
    "r": 8.9,
    "label": {
     "fr": "Soulèvement en dôme, épais et lisse, de la paroi (décollement choroïdien)",
     "en": "Thick, smooth dome-shaped elevation of the wall (choroidal detachment)"
    },
    "decisive": true
   },
   {
    "x": 19,
    "y": 89,
    "r": 8.0,
    "label": {
     "fr": "Second dôme sur la paroi opposée; les dômes ne se touchent pas (non apposés)",
     "en": "Second dome on the opposite wall; the domes do not touch (non-appositional)"
    }
   },
   {
    "x": 20,
    "y": 30,
    "r": 9.9,
    "label": {
     "fr": "Au fond d’œil : masse sombre, lisse, en relief",
     "en": "Fundus: dark, smooth, elevated mass"
    }
   }
  ],
  "credit": {
   "fr": "EyeRounds.org, University of Iowa (CC BY-NC-ND 3.0). Image non modifiée.",
   "en": "EyeRounds.org, University of Iowa (CC BY-NC-ND 3.0). Image unmodified."
  },
  "license": "CC BY-NC-ND 3.0",
  "source": "https://webeye.ophth.uiowa.edu/eyeforum/atlas/pages/choroidal-detachments/index.htm"
 },
 "m-bscan-5": {
  "kind": "photo",
  "photo": "OPH-194",
  "alt": {
   "fr": "Série d’échographies B : décollement choroïdien hémorragique apposé (« kissing »).",
   "en": "Series of B-scans: hemorrhagic appositional (“kissing”) choroidal detachment."
  },
  "hotspots": [
   {
    "x": 28,
    "y": 30,
    "r": 6.0,
    "label": {
     "fr": "Dômes choroïdiens épais occupant la cavité vitréenne",
     "en": "Thick choroidal domes filling the vitreous cavity"
    },
    "decisive": true
   },
   {
    "x": 22,
    "y": 27,
    "r": 4.0,
    "label": {
     "fr": "Mesure de l’épaisseur du soulèvement (12,04 mm)",
     "en": "Caliper on the elevation (12.04 mm)"
    }
   },
   {
    "x": 75,
    "y": 69,
    "r": 6.0,
    "label": {
     "fr": "Contenu échogène dans les dômes : sang",
     "en": "Echogenic content within the domes: blood"
    }
   }
  ],
  "credit": {
   "fr": "EyeRounds.org, University of Iowa (CC BY-NC-ND 3.0). Image non modifiée.",
   "en": "EyeRounds.org, University of Iowa (CC BY-NC-ND 3.0). Image unmodified."
  },
  "license": "CC BY-NC-ND 3.0",
  "source": "https://webeye.ophth.uiowa.edu/eyeforum/atlas/pages/choroidal-detachments/index.htm"
 },
 "m-bscan-6": {
  "kind": "svg",
  "svg": "<svg viewBox=\"0 0 400 300\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" font-family=\"system-ui,-apple-system,Segoe UI,sans-serif\"><rect width=\"400\" height=\"300\" rx=\"10\" fill=\"#f7f6f2\"/><text x=\"200\" y=\"27\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"600\" fill=\"#2b2a26\">Membrane en B-scan : laquelle ? · Which membrane?</text><g transform=\"translate(10,40)\"><path d=\"M10 10 L60 110 L110 10\" fill=\"none\" stroke=\"#c9c4b8\"/><path d=\"M14 60 A60 60 0 0 0 106 60\" fill=\"none\" stroke=\"#2b2a26\" stroke-width=\"0\"/><ellipse cx=\"60\" cy=\"95\" rx=\"50\" ry=\"70\" fill=\"#1d1d1f\"/><path d=\"M14 120 Q60 185 106 120\" fill=\"none\" stroke=\"#e8e3d6\" stroke-width=\"3\"/><rect x=\"54\" y=\"160\" width=\"12\" height=\"40\" fill=\"#555\"/></g><g transform=\"translate(140,40)\"><path d=\"M10 10 L60 110 L110 10\" fill=\"none\" stroke=\"#c9c4b8\"/><path d=\"M14 60 A60 60 0 0 0 106 60\" fill=\"none\" stroke=\"#2b2a26\" stroke-width=\"0\"/><ellipse cx=\"60\" cy=\"95\" rx=\"50\" ry=\"70\" fill=\"#1d1d1f\"/><path d=\"M14 120 Q60 185 106 120\" fill=\"none\" stroke=\"#e8e3d6\" stroke-width=\"3\"/><rect x=\"54\" y=\"160\" width=\"12\" height=\"40\" fill=\"#555\"/></g><g transform=\"translate(270,40)\"><path d=\"M10 10 L60 110 L110 10\" fill=\"none\" stroke=\"#c9c4b8\"/><path d=\"M14 60 A60 60 0 0 0 106 60\" fill=\"none\" stroke=\"#2b2a26\" stroke-width=\"0\"/><ellipse cx=\"60\" cy=\"95\" rx=\"50\" ry=\"70\" fill=\"#1d1d1f\"/><path d=\"M14 120 Q60 185 106 120\" fill=\"none\" stroke=\"#e8e3d6\" stroke-width=\"3\"/><rect x=\"54\" y=\"160\" width=\"12\" height=\"40\" fill=\"#555\"/></g><path d=\"M28 150 Q70 120 112 150\" fill=\"none\" stroke=\"#9fd3ff\" stroke-width=\"1.5\" stroke-dasharray=\"1 0\"/><path d=\"M152 150 Q185 165 200 196 M248 150 Q215 165 200 196\" fill=\"none\" stroke=\"#ffd166\" stroke-width=\"3.5\"/><path d=\"M286 140 Q300 170 316 186 Q300 175 288 150 Z\" fill=\"#ff8c69\"/><path d=\"M374 140 Q360 170 344 186 Q360 175 372 150 Z\" fill=\"#ff8c69\"/><path d=\"M286 140 Q312 160 318 186\" fill=\"none\" stroke=\"#ff8c69\" stroke-width=\"5\"/><path d=\"M374 140 Q348 160 342 186\" fill=\"none\" stroke=\"#ff8c69\" stroke-width=\"5\"/><text x=\"70\" y=\"262\" text-anchor=\"middle\" font-size=\"11\" fill=\"#2b2a26\">DPV · PVD</text><text x=\"70\" y=\"275\" text-anchor=\"middle\" font-size=\"8.5\" fill=\"#5c5850\">fine, très mobile</text><text x=\"70\" y=\"286\" text-anchor=\"middle\" font-size=\"8.5\" fill=\"#5c5850\">thin, very mobile</text><text x=\"200\" y=\"262\" text-anchor=\"middle\" font-size=\"11\" fill=\"#2b2a26\">DR · RD</text><text x=\"200\" y=\"275\" text-anchor=\"middle\" font-size=\"8.5\" fill=\"#5c5850\">épaisse, ancrée à la papille</text><text x=\"200\" y=\"286\" text-anchor=\"middle\" font-size=\"8.5\" fill=\"#5c5850\">thick, inserts on disc</text><text x=\"330\" y=\"262\" text-anchor=\"middle\" font-size=\"11\" fill=\"#2b2a26\">Choroïde · Choroidal</text><text x=\"330\" y=\"275\" text-anchor=\"middle\" font-size=\"8.5\" fill=\"#5c5850\">dômes lisses, épargne papille</text><text x=\"330\" y=\"286\" text-anchor=\"middle\" font-size=\"8.5\" fill=\"#5c5850\">smooth domes, spare disc</text><text x=\"394\" y=\"10\" text-anchor=\"end\" font-size=\"7.5\" fill=\"#8a8578\">schéma · schematic</text></svg>",
  "alt": {
   "fr": "Schéma comparant en échographie B un décollement postérieur du vitré, un décollement de rétine et un décollement choroïdien.",
   "en": "Schematic comparing posterior vitreous detachment, retinal detachment and choroidal detachment on B-scan."
  },
  "hotspots": [
   {
    "x": 17,
    "y": 46,
    "r": 8,
    "label": {
     "fr": "DPV : membrane fine, peu réflective, très mobile; peut flotter au-delà de la papille",
     "en": "PVD: thin, low-reflective, highly mobile membrane; may float past the disc"
    }
   },
   {
    "x": 50,
    "y": 60,
    "r": 9,
    "label": {
     "fr": "DR : membrane épaisse, très réflective, ancrée à la papille (aspect en V/entonnoir si total)",
     "en": "RD: thick, highly reflective membrane anchored at the disc (V/funnel shape if total)"
    },
    "decisive": true
   },
   {
    "x": 80,
    "y": 55,
    "r": 9,
    "label": {
     "fr": "Décollement choroïdien : dômes épais et lisses, sans insertion à la papille",
     "en": "Choroidal detachment: thick smooth domes, no insertion at the disc"
    }
   },
   {
    "x": 50,
    "y": 72,
    "r": 5,
    "label": {
     "fr": "Nerf optique (ombre)",
     "en": "Optic nerve (shadow)"
    }
   }
  ],
  "credit": {
   "fr": "Schéma original (ophtalmo app), non tiré d’un patient réel.",
   "en": "Original schematic (ophtalmo app), not from a real patient."
  },
  "license": "original",
  "schematic": true
 },
 "m-bscan-7": {
  "kind": "photo",
  "photo": "OPH-197",
  "alt": {
   "fr": "Échographie B d’un œil nanophtalme : petit globe et paroi postérieure épaissie (mesure 2,38 mm).",
   "en": "B-scan of a nanophthalmic eye: small globe and thickened posterior wall (caliper 2.38 mm)."
  },
  "hotspots": [
   {
    "x": 25,
    "y": 46,
    "r": 12.0,
    "label": {
     "fr": "Cavité vitréenne de petite taille (globe court)",
     "en": "Small vitreous cavity (short globe)"
    }
   },
   {
    "x": 40,
    "y": 46,
    "r": 7.0,
    "label": {
     "fr": "Calibre : paroi rétine-choroïde-sclère épaissie à 2,38 mm",
     "en": "Caliper: retina-choroid-sclera wall thickened to 2.38 mm"
    },
    "decisive": true
   },
   {
    "x": 10,
    "y": 7,
    "r": 6.0,
    "label": {
     "fr": "Valeur de la mesure affichée par l’appareil",
     "en": "Measurement shown by the device"
    }
   }
  ],
  "credit": {
   "fr": "EyeRounds.org, University of Iowa (CC BY-NC-ND 3.0). Image non modifiée.",
   "en": "EyeRounds.org, University of Iowa (CC BY-NC-ND 3.0). Image unmodified."
  },
  "license": "CC BY-NC-ND 3.0",
  "source": "https://webeye.ophth.uiowa.edu/eyeforum/atlas/pages/nanophthalmos-b-scan/index.htm"
 },
 "m-bscan-8": {
  "kind": "photo",
  "photo": "OPH-209",
  "alt": {
   "fr": "Échographie B normale, coupe longitudinale vers la macula (L9, œil droit).",
   "en": "Normal B-scan, longitudinal macular view (L9, right eye)."
  },
  "hotspots": [
   {
    "x": 27,
    "y": 44,
    "r": 5.5,
    "label": {
     "fr": "Sonde en position longitudinale, côté temporal",
     "en": "Probe in longitudinal position, temporal side"
    }
   },
   {
    "x": 55,
    "y": 44,
    "r": 5.0,
    "label": {
     "fr": "Vitré anéchogène",
     "en": "Echo-free vitreous"
    }
   },
   {
    "x": 65,
    "y": 45,
    "r": 4.4,
    "label": {
     "fr": "Pôle postérieur : paroi concave régulière, aucun soulèvement",
     "en": "Posterior pole: regular concave wall, no elevation"
    },
    "decisive": true
   },
   {
    "x": 92,
    "y": 97,
    "r": 3,
    "label": {
     "fr": "Étiquette L9 : coupe longitudinale à 9 h",
     "en": "L9 label: longitudinal view at 9 o’clock"
    }
   }
  ],
  "credit": {
   "fr": "EyeRounds.org, University of Iowa. © University of Iowa, tous droits réservés; usage éducatif selon les conditions EyeRounds (permission écrite demandée).",
   "en": "EyeRounds.org, University of Iowa. © University of Iowa, all rights reserved; educational use under EyeRounds terms (written permission requested)."
  },
  "license": "EyeRounds TOS (no CC licence)",
  "source": "https://eyerounds.org/tutorials/ultrasound/index.htm",
  "restricted": true
 },
 "m-ascan-1": {
  "kind": "svg",
  "svg": "<svg viewBox=\"0 0 400 300\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" font-family=\"system-ui,-apple-system,Segoe UI,sans-serif\"><rect width=\"400\" height=\"300\" rx=\"10\" fill=\"#f7f6f2\"/><text x=\"200\" y=\"27\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"600\" fill=\"#2b2a26\">A-scan phaque · Phakic A-scan</text><line x1=\"20\" y1=\"240\" x2=\"385\" y2=\"240\" stroke=\"#8a8578\"/><text x=\"20\" y=\"256\" font-size=\"9\" fill=\"#5c5850\">temps → profondeur · time → depth</text><path d=\"M20 240 L22 240 L28 40 L34 240 L31 240 L36 70 L41 240 L114 240 L118 52 L122 240 L168 240 L172 78 L176 240 L298 240 L300 42 L302 240 L306 240 L309 60 L312 240 L319 240 L322 150 L325 240 L331 240 L334 170 L337 240 L343 240 L346 185 L349 240 L355 240 L358 200 L361 240 L367 240 L370 212 L373 240 L385 240\" fill=\"none\" stroke=\"#1f6f8b\" stroke-width=\"2\" stroke-linejoin=\"round\"/><text x=\"30\" y=\"34\" font-size=\"12\" font-weight=\"700\" fill=\"#c0392b\" text-anchor=\"middle\">1</text><text x=\"118\" y=\"46\" font-size=\"12\" font-weight=\"700\" fill=\"#c0392b\" text-anchor=\"middle\">2</text><text x=\"172\" y=\"72\" font-size=\"12\" font-weight=\"700\" fill=\"#c0392b\" text-anchor=\"middle\">3</text><text x=\"296\" y=\"36\" font-size=\"12\" font-weight=\"700\" fill=\"#c0392b\" text-anchor=\"middle\">4</text><text x=\"316\" y=\"56\" font-size=\"12\" font-weight=\"700\" fill=\"#c0392b\" text-anchor=\"middle\">5</text><text x=\"346\" y=\"145\" font-size=\"12\" font-weight=\"700\" fill=\"#c0392b\" text-anchor=\"middle\">6</text><text x=\"394\" y=\"10\" text-anchor=\"end\" font-size=\"7.5\" fill=\"#8a8578\">schéma · schematic</text></svg>",
  "alt": {
   "fr": "Schéma d’un A-scan biométrique d’œil phaque avec six pics numérotés.",
   "en": "Schematic of a phakic biometry A-scan with six numbered spikes."
  },
  "hotspots": [
   {
    "x": 8,
    "y": 14,
    "r": 5,
    "label": {
     "fr": "1 : pic initial (sonde + cornée)",
     "en": "1: initial spike (probe + cornea)"
    }
   },
   {
    "x": 29.5,
    "y": 18,
    "r": 5,
    "label": {
     "fr": "2 : face antérieure du cristallin",
     "en": "2: anterior lens surface"
    }
   },
   {
    "x": 43,
    "y": 26,
    "r": 5,
    "label": {
     "fr": "3 : face postérieure du cristallin",
     "en": "3: posterior lens surface"
    }
   },
   {
    "x": 75,
    "y": 14,
    "r": 4,
    "label": {
     "fr": "4 : rétine, premier pic haut et vertical après la ligne plate du vitré",
     "en": "4: retina, first tall vertical spike after the flat vitreous line"
    },
    "decisive": true
   },
   {
    "x": 78,
    "y": 20,
    "r": 3,
    "label": {
     "fr": "5 : sclère",
     "en": "5: sclera"
    }
   },
   {
    "x": 87,
    "y": 55,
    "r": 6,
    "label": {
     "fr": "6 : graisse orbitaire (échos décroissants)",
     "en": "6: orbital fat (decreasing echoes)"
    }
   }
  ],
  "credit": {
   "fr": "Schéma original (ophtalmo app), non tiré d’un patient réel.",
   "en": "Original schematic (ophtalmo app), not from a real patient."
  },
  "license": "original",
  "schematic": true
 },
 "m-ascan-2": {
  "kind": "photo",
  "photo": "OPH-243",
  "alt": {
   "fr": "Cataracte blanche (mature) : opacité dense qui bloque la lumière.",
   "en": "White (mature) cataract: dense opacity that blocks light."
  },
  "hotspots": [
   {
    "x": 50,
    "y": 52,
    "r": 14.0,
    "label": {
     "fr": "Cataracte blanche dense : la biométrie optique (lumière) échoue → échographie A (immersion de préférence)",
     "en": "Dense white cataract: optical (light-based) biometry fails → ultrasound A-scan (immersion preferred)"
    },
    "decisive": true
   }
  ],
  "credit": {
   "fr": "EyeRounds.org, University of Iowa (CC BY-NC-ND 3.0). Image non modifiée.",
   "en": "EyeRounds.org, University of Iowa (CC BY-NC-ND 3.0). Image unmodified."
  },
  "license": "CC BY-NC-ND 3.0",
  "source": "https://webeye.ophth.uiowa.edu/eyeforum/atlas/pages/mature-cortical-cataract.htm"
 },
 "m-ascan-3": {
  "kind": "svg",
  "svg": "<svg viewBox=\"0 0 400 300\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" font-family=\"system-ui,-apple-system,Segoe UI,sans-serif\"><rect width=\"400\" height=\"300\" rx=\"10\" fill=\"#f7f6f2\"/><text x=\"200\" y=\"27\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"600\" fill=\"#2b2a26\">Contact : compression cornéenne · Corneal compression</text><g transform=\"translate(0,-10)\"><text x=\"330\" y=\"70\" font-size=\"10\" fill=\"#2b2a26\">Correct</text><path d=\"M20 120 L22 120 L28 50 L34 120 L118 120 L122 60 L126 120 L172 120 L175 80 L178 120 L298 120 L300 50 L302 120 L385 120\" fill=\"none\" stroke=\"#1f6f8b\" stroke-width=\"2\"/><path d=\"M28 132 L118 132\" stroke=\"#2b2a26\"/><text x=\"73\" y=\"145\" font-size=\"9\" text-anchor=\"middle\" fill=\"#2b2a26\">CA · ACD</text></g><g transform=\"translate(0,95)\"><text x=\"330\" y=\"70\" font-size=\"10\" fill=\"#c0392b\">Compression</text><path d=\"M20 120 L22 120 L28 50 L34 120 L104 120 L108 60 L112 120 L158 120 L161 80 L164 120 L284 120 L286 50 L288 120 L385 120\" fill=\"none\" stroke=\"#c0392b\" stroke-width=\"2\"/><path d=\"M28 132 L104 132\" stroke=\"#c0392b\"/><text x=\"66\" y=\"145\" font-size=\"9\" text-anchor=\"middle\" fill=\"#c0392b\">CA plus courte · shorter ACD</text><path d=\"M286 140 L300 140\" stroke=\"#c0392b\" stroke-width=\"2\"/><text x=\"330\" y=\"150\" font-size=\"9\" text-anchor=\"middle\" fill=\"#c0392b\">LA sous-estimée</text></g><text x=\"394\" y=\"10\" text-anchor=\"end\" font-size=\"7.5\" fill=\"#8a8578\">schéma · schematic</text></svg>",
  "alt": {
   "fr": "Schéma : en A-scan par contact, appuyer sur la cornée raccourcit la chambre antérieure et la longueur axiale.",
   "en": "Schematic: in contact A-scan, pressing on the cornea shortens the anterior chamber depth and the axial length."
  },
  "hotspots": [
   {
    "x": 18,
    "y": 41,
    "r": 6,
    "label": {
     "fr": "Mesure correcte : profondeur de chambre antérieure de référence",
     "en": "Correct measurement: reference anterior chamber depth"
    }
   },
   {
    "x": 16.5,
    "y": 76,
    "r": 6,
    "label": {
     "fr": "Compression : chambre antérieure plus courte",
     "en": "Compression: shorter anterior chamber"
    },
    "decisive": true
   },
   {
    "x": 72,
    "y": 62,
    "r": 7,
    "label": {
     "fr": "Longueur axiale faussement courte → erreur de calcul de l’implant",
     "en": "Falsely short axial length → IOL power error"
    }
   }
  ],
  "credit": {
   "fr": "Schéma original (ophtalmo app), non tiré d’un patient réel.",
   "en": "Original schematic (ophtalmo app), not from a real patient."
  },
  "license": "original",
  "schematic": true
 },
 "m-ascan-4": {
  "kind": "svg",
  "svg": "<svg viewBox=\"0 0 400 300\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" font-family=\"system-ui,-apple-system,Segoe UI,sans-serif\"><rect width=\"400\" height=\"300\" rx=\"10\" fill=\"#f7f6f2\"/><text x=\"200\" y=\"27\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"600\" fill=\"#2b2a26\">Deux mesures du même œil · Two scans, same eye</text><text x=\"372\" y=\"60\" font-size=\"16\" font-weight=\"700\" fill=\"#2b2a26\">A</text><text x=\"372\" y=\"190\" font-size=\"16\" font-weight=\"700\" fill=\"#2b2a26\">B</text><path d=\"M20 130 L22 130 L28 40 L34 130 L36 130 L38 75 L41 130 L114 130 L118 55 L122 130 L168 130 L172 75 L176 130 L298 130 L300 45 L302 130 L307 130 L309 60 L312 130 L320 130 L322 95 L325 130 L334 130 L336 105 L339 130 L348 130 L350 112 L353 130 L385 130\" fill=\"none\" stroke=\"#1f6f8b\" stroke-width=\"2\" stroke-linejoin=\"round\"/><path d=\"M20 262 L22 262 L28 172 L34 262 L36 262 L38 207 L41 262 L114 262 L118 187 L122 262 L168 262 L172 207 L176 262 L296 262 L300 238 L303 240 L306 222 L309 226 L312 262 L326 262 L328 240 L331 262 L342 262 L344 246 L347 262 L385 262\" fill=\"none\" stroke=\"#1f6f8b\" stroke-width=\"2\" stroke-linejoin=\"round\"/><text x=\"200\" y=\"150\" text-anchor=\"middle\" font-size=\"10\" fill=\"#2b2a26\">A : LA 23,48 mm</text><text x=\"200\" y=\"282\" text-anchor=\"middle\" font-size=\"10\" fill=\"#2b2a26\">B : LA 23,60 mm</text><text x=\"394\" y=\"10\" text-anchor=\"end\" font-size=\"7.5\" fill=\"#8a8578\">schéma · schematic</text></svg>",
  "alt": {
   "fr": "Schéma de deux tracés A-scan du même œil : A avec pic rétinien haut et vertical, B avec pic rétinien bas et en escalier.",
   "en": "Schematic of two A-scan traces of the same eye: A with a tall vertical retinal spike, B with a low, stepped retinal spike."
  },
  "hotspots": [
   {
    "x": 75,
    "y": 15,
    "r": 4,
    "label": {
     "fr": "A : pic rétinien haut, vertical, puis pic scléral distinct → mesure à retenir",
     "en": "A: tall vertical retinal spike, then a distinct scleral spike → accept this one"
    },
    "decisive": true
   },
   {
    "x": 76.5,
    "y": 77,
    "r": 5,
    "label": {
     "fr": "B : pic rétinien bas, en escalier → faisceau oblique, mesure à rejeter même si plus longue",
     "en": "B: low, stepped retinal spike → oblique beam, reject even though longer"
    }
   }
  ],
  "credit": {
   "fr": "Schéma original (ophtalmo app), non tiré d’un patient réel.",
   "en": "Original schematic (ophtalmo app), not from a real patient."
  },
  "license": "original",
  "schematic": true
 },
 "m-ascan-5": {
  "kind": "svg",
  "svg": "<svg viewBox=\"0 0 400 300\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" font-family=\"system-ui,-apple-system,Segoe UI,sans-serif\"><rect width=\"400\" height=\"300\" rx=\"10\" fill=\"#f7f6f2\"/><text x=\"200\" y=\"27\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"600\" fill=\"#2b2a26\">Biométrie des deux yeux · Biometry, both eyes</text><rect x=\"40\" y=\"50\" width=\"140\" height=\"120\" rx=\"8\" fill=\"#ffffff\" stroke=\"#c9c4b8\"/><rect x=\"220\" y=\"50\" width=\"140\" height=\"120\" rx=\"8\" fill=\"#ffffff\" stroke=\"#c9c4b8\"/><text x=\"110\" y=\"78\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"700\" fill=\"#2b2a26\">OD</text><text x=\"290\" y=\"78\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"700\" fill=\"#2b2a26\">OG · OS</text><text x=\"110\" y=\"112\" text-anchor=\"middle\" font-size=\"11\" fill=\"#5c5850\">Longueur axiale</text><text x=\"290\" y=\"112\" text-anchor=\"middle\" font-size=\"11\" fill=\"#5c5850\">Axial length</text><text x=\"110\" y=\"145\" text-anchor=\"middle\" font-size=\"20\" font-weight=\"700\" fill=\"#1f6f8b\">23,42 mm</text><text x=\"290\" y=\"145\" text-anchor=\"middle\" font-size=\"20\" font-weight=\"700\" fill=\"#1f6f8b\">24,31 mm</text><text x=\"200\" y=\"205\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"700\" fill=\"#c0392b\">Δ = 0,89 mm</text><text x=\"200\" y=\"228\" text-anchor=\"middle\" font-size=\"10\" fill=\"#2b2a26\">réfraction semblable aux deux yeux · similar refraction in both eyes</text><text x=\"200\" y=\"250\" text-anchor=\"middle\" font-size=\"10\" fill=\"#5c5850\">écart &gt; 0,3 mm inexpliqué → remesurer</text><text x=\"200\" y=\"264\" text-anchor=\"middle\" font-size=\"10\" fill=\"#5c5850\">unexplained difference &gt; 0.3 mm → remeasure</text><text x=\"394\" y=\"10\" text-anchor=\"end\" font-size=\"7.5\" fill=\"#8a8578\">schéma · schematic</text></svg>",
  "alt": {
   "fr": "Schéma : longueurs axiales des deux yeux (23,42 et 24,31 mm), écart de 0,89 mm.",
   "en": "Schematic: axial lengths of both eyes (23.42 and 24.31 mm), difference 0.89 mm."
  },
  "hotspots": [
   {
    "x": 50,
    "y": 68,
    "r": 9,
    "label": {
     "fr": "Écart interoculaire 0,89 mm sans anisométropie → erreur de mesure probable",
     "en": "Inter-eye difference 0.89 mm without anisometropia → probable measurement error"
    },
    "decisive": true
   },
   {
    "x": 27.5,
    "y": 48,
    "r": 8,
    "label": {
     "fr": "OD 23,42 mm",
     "en": "OD 23.42 mm"
    }
   },
   {
    "x": 72.5,
    "y": 48,
    "r": 8,
    "label": {
     "fr": "OG 24,31 mm",
     "en": "OS 24.31 mm"
    }
   }
  ],
  "credit": {
   "fr": "Schéma original (ophtalmo app), non tiré d’un patient réel.",
   "en": "Original schematic (ophtalmo app), not from a real patient."
  },
  "license": "original",
  "schematic": true
 },
 "m-ascan-6": {
  "kind": "svg",
  "svg": "<svg viewBox=\"0 0 400 300\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" font-family=\"system-ui,-apple-system,Segoe UI,sans-serif\"><rect width=\"400\" height=\"300\" rx=\"10\" fill=\"#f7f6f2\"/><text x=\"200\" y=\"27\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"600\" fill=\"#2b2a26\">Huile de silicone · Silicone oil</text><rect x=\"176\" y=\"60\" width=\"124\" height=\"180\" fill=\"#fff3d6\"/><text x=\"238\" y=\"76\" text-anchor=\"middle\" font-size=\"9\" fill=\"#8a6d1f\">huile ≈ 980 m/s</text><text x=\"238\" y=\"88\" text-anchor=\"middle\" font-size=\"9\" fill=\"#8a6d1f\">(vitré ≈ 1532 m/s)</text><line x1=\"20\" y1=\"240\" x2=\"385\" y2=\"240\" stroke=\"#8a8578\"/><text x=\"20\" y=\"256\" font-size=\"9\" fill=\"#5c5850\">temps → profondeur · time → depth</text><path d=\"M20 240 L22 240 L28 40 L34 240 L36 240 L38 70 L41 240 L114 240 L118 52 L122 240 L168 240 L172 78 L176 240 L298 240 L300 42 L302 240 L307 240 L309 60 L312 240 L385 240\" fill=\"none\" stroke=\"#1f6f8b\" stroke-width=\"2\" stroke-linejoin=\"round\"/><path d=\"M330 240 L332 70 L334 240\" fill=\"none\" stroke=\"#c0392b\" stroke-width=\"2\" stroke-dasharray=\"4 3\"/><text x=\"300\" y=\"36\" text-anchor=\"middle\" font-size=\"9\" fill=\"#1f6f8b\">rétine réelle</text><text x=\"345\" y=\"64\" text-anchor=\"middle\" font-size=\"9\" fill=\"#c0392b\">à 1550 m/s</text><text x=\"200\" y=\"272\" text-anchor=\"middle\" font-size=\"10\" fill=\"#2b2a26\">son plus lent → écho plus tardif → œil affiché trop long</text><text x=\"200\" y=\"286\" text-anchor=\"middle\" font-size=\"10\" fill=\"#5c5850\">slower sound → later echo → eye shown too long</text><text x=\"394\" y=\"10\" text-anchor=\"end\" font-size=\"7.5\" fill=\"#8a8578\">schéma · schematic</text></svg>",
  "alt": {
   "fr": "Schéma : A-scan d’un œil rempli d’huile de silicone; sans correction de vitesse, la rétine est placée trop loin.",
   "en": "Schematic: A-scan of a silicone-oil-filled eye; without velocity correction the retina is placed too far."
  },
  "hotspots": [
   {
    "x": 83,
    "y": 52,
    "r": 5,
    "label": {
     "fr": "Rétine affichée trop loin si l’appareil calcule à 1550 m/s : longueur axiale surestimée",
     "en": "Retina shown too far when the device assumes 1550 m/s: axial length overestimated"
    },
    "decisive": true
   },
   {
    "x": 59.5,
    "y": 50,
    "r": 9,
    "label": {
     "fr": "Cavité remplie d’huile : le son y est beaucoup plus lent",
     "en": "Oil-filled cavity: sound travels much more slowly"
    }
   },
   {
    "x": 75,
    "y": 14,
    "r": 4,
    "label": {
     "fr": "Position réelle de la rétine",
     "en": "True retinal position"
    }
   }
  ],
  "credit": {
   "fr": "Schéma original (ophtalmo app), non tiré d’un patient réel.",
   "en": "Original schematic (ophtalmo app), not from a real patient."
  },
  "license": "original",
  "schematic": true
 },
 "m-ascan-7": {
  "kind": "svg",
  "svg": "<svg viewBox=\"0 0 400 300\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" font-family=\"system-ui,-apple-system,Segoe UI,sans-serif\"><rect width=\"400\" height=\"300\" rx=\"10\" fill=\"#f7f6f2\"/><text x=\"200\" y=\"27\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"600\" fill=\"#2b2a26\">A-scan standardisé · Standardised A-scan</text><line x1=\"20\" y1=\"240\" x2=\"385\" y2=\"240\" stroke=\"#8a8578\"/><text x=\"20\" y=\"256\" font-size=\"9\" fill=\"#5c5850\">temps → profondeur · time → depth</text><path d=\"M20 240 L22 240 L30 50 L36 240 L60 240 L62 40 L66 240 L72 240 L74 150 L78 240 L84 240 L86 160 L90 240 L96 240 L98 168 L102 240 L108 240 L110 178 L114 240 L120 240 L122 186 L126 240 L132 240 L134 194 L138 240 L144 240 L146 200 L150 240 L156 240 L158 206 L162 240 L176 240 L178 46 L182 240 L192 240 L194 150 L198 240 L208 240 L210 175 L214 240 L224 240 L226 195 L230 240 L385 240\" fill=\"none\" stroke=\"#1f6f8b\" stroke-width=\"2\" stroke-linejoin=\"round\"/><path d=\"M62 120 L162 200\" stroke=\"#c0392b\" stroke-dasharray=\"4 3\"/><g font-size=\"9\" fill=\"#2b2a26\" text-anchor=\"middle\"><text x=\"62\" y=\"34\">surface</text><text x=\"112\" y=\"130\">échos internes</text><text x=\"178\" y=\"40\">sclère</text><text x=\"220\" y=\"140\">orbite</text></g><text x=\"394\" y=\"10\" text-anchor=\"end\" font-size=\"7.5\" fill=\"#8a8578\">schéma · schematic</text></svg>",
  "alt": {
   "fr": "Schéma d’un A-scan standardisé à travers une masse choroïdienne en dôme : réflectivité interne faible à moyenne, régulière, décroissante.",
   "en": "Schematic of a standardised A-scan through a dome-shaped choroidal mass: low-to-medium, regular, decreasing internal reflectivity."
  },
  "hotspots": [
   {
    "x": 28,
    "y": 63,
    "r": 9,
    "label": {
     "fr": "Échos internes faibles à moyens, réguliers, qui décroissent en profondeur (angle kappa) : profil du mélanome",
     "en": "Low-to-medium, regular internal echoes decreasing with depth (kappa angle): melanoma pattern"
    },
    "decisive": true
   },
   {
    "x": 15.5,
    "y": 14,
    "r": 5,
    "label": {
     "fr": "Pic haut de la surface de la tumeur",
     "en": "Tall spike at the tumour surface"
    }
   },
   {
    "x": 44.5,
    "y": 16,
    "r": 5,
    "label": {
     "fr": "Pic scléral",
     "en": "Scleral spike"
    }
   }
  ],
  "credit": {
   "fr": "Schéma original (ophtalmo app), non tiré d’un patient réel.",
   "en": "Original schematic (ophtalmo app), not from a real patient."
  },
  "license": "original",
  "schematic": true
 },
 "m-ascan-8": {
  "kind": "svg",
  "svg": "<svg viewBox=\"0 0 400 300\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" font-family=\"system-ui,-apple-system,Segoe UI,sans-serif\"><rect width=\"400\" height=\"300\" rx=\"10\" fill=\"#f7f6f2\"/><text x=\"200\" y=\"27\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"600\" fill=\"#2b2a26\">A-scan pseudophaque · Pseudophakic A-scan</text><line x1=\"20\" y1=\"240\" x2=\"385\" y2=\"240\" stroke=\"#8a8578\"/><text x=\"20\" y=\"256\" font-size=\"9\" fill=\"#5c5850\">temps → profondeur · time → depth</text><path d=\"M20 240 L22 240 L28 40 L34 240 L31 240 L36 70 L41 240 L117 240 L120 40 L123 240 L147 240 L150 150 L153 240 L177 240 L180 185 L183 240 L207 240 L210 210 L213 240 L298 240 L300 42 L302 240 L306 240 L309 60 L312 240 L319 240 L322 150 L325 240 L335 240 L338 175 L341 240 L351 240 L354 195 L357 240 L367 240 L370 210 L373 240 L385 240\" fill=\"none\" stroke=\"#1f6f8b\" stroke-width=\"2\" stroke-linejoin=\"round\"/><g font-size=\"9\" fill=\"#2b2a26\" text-anchor=\"middle\"><text x=\"32\" y=\"34\">Cornée</text><text x=\"130\" y=\"66\" text-anchor=\"start\">Implant (LIO) · IOL</text><text x=\"182\" y=\"140\">réverbérations</text><text x=\"300\" y=\"36\">Rétine</text></g><text x=\"200\" y=\"282\" text-anchor=\"middle\" font-size=\"10\" fill=\"#2b2a26\">régler l’appareil sur « pseudophaque » (vitesse) · set device to pseudophakic mode</text><text x=\"394\" y=\"10\" text-anchor=\"end\" font-size=\"7.5\" fill=\"#8a8578\">schéma · schematic</text></svg>",
  "alt": {
   "fr": "Schéma d’un A-scan d’œil pseudophaque : pic très haut de l’implant suivi de réverbérations décroissantes dans le vitré.",
   "en": "Schematic of a pseudophakic A-scan: very tall IOL spike followed by decreasing reverberations in the vitreous."
  },
  "hotspots": [
   {
    "x": 30,
    "y": 15,
    "r": 6,
    "label": {
     "fr": "Pic de l’implant intraoculaire : très haut (forte réflectivité)",
     "en": "Intraocular lens spike: very tall (high reflectivity)"
    },
    "decisive": true
   },
   {
    "x": 45,
    "y": 55,
    "r": 9,
    "label": {
     "fr": "Réverbérations décroissantes derrière l’implant : artéfact, pas une structure",
     "en": "Decreasing reverberations behind the IOL: artifact, not a structure"
    }
   },
   {
    "x": 75,
    "y": 14,
    "r": 5,
    "label": {
     "fr": "Pic rétinien : repère de fin de la longueur axiale",
     "en": "Retinal spike: end point of the axial length"
    }
   }
  ],
  "credit": {
   "fr": "Schéma original (ophtalmo app), non tiré d’un patient réel.",
   "en": "Original schematic (ophtalmo app), not from a real patient."
  },
  "license": "original",
  "schematic": true
 },
 "m-ascan-9": {
  "kind": "svg",
  "svg": "<svg viewBox=\"0 0 400 300\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" font-family=\"system-ui,-apple-system,Segoe UI,sans-serif\"><rect width=\"400\" height=\"300\" rx=\"10\" fill=\"#f7f6f2\"/><text x=\"200\" y=\"27\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"600\" fill=\"#2b2a26\">A-scan phaque normal · Normal phakic A-scan</text><line x1=\"20\" y1=\"240\" x2=\"385\" y2=\"240\" stroke=\"#8a8578\"/><text x=\"20\" y=\"256\" font-size=\"9\" fill=\"#5c5850\">temps → profondeur · time → depth</text><path d=\"M20 240 L22 240 L28 40 L34 240 L31 240 L36 70 L41 240 L114 240 L118 52 L122 240 L168 240 L172 78 L176 240 L298 240 L300 42 L302 240 L306 240 L309 60 L312 240 L319 240 L322 150 L325 240 L331 240 L334 170 L337 240 L343 240 L346 185 L349 240 L355 240 L358 200 L361 240 L367 240 L370 212 L373 240 L385 240\" fill=\"none\" stroke=\"#1f6f8b\" stroke-width=\"2\" stroke-linejoin=\"round\"/><g font-size=\"9\" fill=\"#2b2a26\" text-anchor=\"middle\"><text x=\"32\" y=\"34\">Cornée</text><text x=\"118\" y=\"46\">Cristallin ant.</text><text x=\"172\" y=\"72\">Cristallin post.</text><text x=\"236\" y=\"225\">vitré (plat)</text><text x=\"300\" y=\"36\">Rétine</text><text x=\"322\" y=\"56\" text-anchor=\"start\">Sclère</text><text x=\"350\" y=\"145\">graisse orbitaire</text></g><path d=\"M300 262 L300 270 M28 262 L28 270 M28 266 L300 266\" stroke=\"#c0392b\" stroke-width=\"1.5\"/><text x=\"164\" y=\"282\" text-anchor=\"middle\" font-size=\"10\" fill=\"#c0392b\">longueur axiale · axial length</text><text x=\"394\" y=\"10\" text-anchor=\"end\" font-size=\"7.5\" fill=\"#8a8578\">schéma · schematic</text></svg>",
  "alt": {
   "fr": "Schéma d’un A-scan biométrique normal d’un œil phaque, avec les pics successifs et la longueur axiale.",
   "en": "Schematic of a normal phakic biometry A-scan, with successive spikes and axial length."
  },
  "hotspots": [
   {
    "x": 8,
    "y": 14,
    "r": 6,
    "label": {
     "fr": "Pic initial : sonde + cornée",
     "en": "Initial spike: probe + cornea"
    }
   },
   {
    "x": 29,
    "y": 18,
    "r": 6,
    "label": {
     "fr": "Face antérieure du cristallin",
     "en": "Anterior lens surface"
    }
   },
   {
    "x": 43,
    "y": 26,
    "r": 6,
    "label": {
     "fr": "Face postérieure du cristallin",
     "en": "Posterior lens surface"
    }
   },
   {
    "x": 59,
    "y": 75,
    "r": 8,
    "label": {
     "fr": "Vitré : ligne plate (aucun écho)",
     "en": "Vitreous: flat line (no echoes)"
    }
   },
   {
    "x": 75,
    "y": 14,
    "r": 5,
    "label": {
     "fr": "Pic rétinien : haut et à montée verticale = sonde bien alignée",
     "en": "Retinal spike: tall with a vertical rise = probe well aligned"
    },
    "decisive": true
   },
   {
    "x": 78,
    "y": 20,
    "r": 4,
    "label": {
     "fr": "Pic scléral juste derrière la rétine",
     "en": "Scleral spike just behind the retina"
    }
   },
   {
    "x": 88,
    "y": 58,
    "r": 7,
    "label": {
     "fr": "Échos orbitaires décroissants",
     "en": "Decreasing orbital echoes"
    }
   },
   {
    "x": 41,
    "y": 89,
    "r": 8,
    "label": {
     "fr": "Longueur axiale = cornée → rétine (adulte moyen ≈ 23–24 mm)",
     "en": "Axial length = cornea → retina (average adult ≈ 23–24 mm)"
    }
   }
  ],
  "credit": {
   "fr": "Schéma original (ophtalmo app), non tiré d’un patient réel.",
   "en": "Original schematic (ophtalmo app), not from a real patient."
  },
  "license": "original",
  "schematic": true
 },
 "m-oct-1": {
  "kind": "svg",
  "svg": "<svg viewBox=\"0 0 400 300\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" font-family=\"system-ui,-apple-system,Segoe UI,sans-serif\"><rect width=\"400\" height=\"300\" rx=\"10\" fill=\"#f7f6f2\"/><text x=\"200\" y=\"27\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"600\" fill=\"#2b2a26\">Coupe OCT maculaire normale · Normal macular OCT</text><rect x=\"30\" y=\"30\" width=\"340\" height=\"210\" fill=\"#1a1a1a\"/><rect x=\"30\" y=\"80\" width=\"340\" height=\"12\" fill=\"#e6e6e6\"/><rect x=\"30\" y=\"92\" width=\"340\" height=\"10\" fill=\"#9a9a9a\"/><rect x=\"30\" y=\"102\" width=\"340\" height=\"10\" fill=\"#c6c6c6\"/><rect x=\"30\" y=\"112\" width=\"340\" height=\"12\" fill=\"#5a5a5a\"/><rect x=\"30\" y=\"124\" width=\"340\" height=\"8\" fill=\"#bdbdbd\"/><rect x=\"30\" y=\"132\" width=\"340\" height=\"30\" fill=\"#3e3e3e\"/><rect x=\"30\" y=\"162\" width=\"340\" height=\"2\" fill=\"#9c9c9c\"/><rect x=\"30\" y=\"166\" width=\"340\" height=\"5\" fill=\"#f2f2f2\"/><rect x=\"30\" y=\"173\" width=\"340\" height=\"3\" fill=\"#b0b0b0\"/><rect x=\"30\" y=\"177\" width=\"340\" height=\"9\" fill=\"#ffffff\"/><rect x=\"30\" y=\"186\" width=\"340\" height=\"54\" fill=\"#6e6e6e\"/><ellipse cx=\"200\" cy=\"78\" rx=\"58\" ry=\"54\" fill=\"#1a1a1a\"/><text x=\"200\" y=\"262\" text-anchor=\"middle\" font-size=\"10\" fill=\"#2b2a26\">vitré en haut, choroïde en bas · vitreous on top, choroid below</text><text x=\"394\" y=\"10\" text-anchor=\"end\" font-size=\"7.5\" fill=\"#8a8578\">schéma · schematic</text></svg>",
  "alt": {
   "fr": "Schéma d’une coupe OCT maculaire normale avec dépression fovéolaire et bandes rétiniennes.",
   "en": "Schematic of a normal macular OCT B-scan with the foveal pit and retinal bands."
  },
  "hotspots": [
   {
    "x": 14,
    "y": 60.5,
    "r": 4,
    "label": {
     "fr": "Complexe EPR–membrane de Bruch : bande brillante la plus profonde, posée sur la choroïde",
     "en": "RPE–Bruch membrane complex: deepest bright band, resting on the choroid"
    },
    "decisive": true
   },
   {
    "x": 14,
    "y": 56,
    "r": 3,
    "label": {
     "fr": "Zone ellipsoïde (photorécepteurs) : fine bande brillante juste au-dessus",
     "en": "Ellipsoid zone (photoreceptors): thin bright band just above"
    }
   },
   {
    "x": 14,
    "y": 49,
    "r": 4,
    "label": {
     "fr": "Couche nucléaire externe : bande sombre épaisse",
     "en": "Outer nuclear layer: thick dark band"
    }
   },
   {
    "x": 14,
    "y": 39,
    "r": 3,
    "label": {
     "fr": "Couche nucléaire interne",
     "en": "Inner nuclear layer"
    }
   },
   {
    "x": 14,
    "y": 28.7,
    "r": 3,
    "label": {
     "fr": "Couche des fibres nerveuses : bande brillante la plus interne",
     "en": "Nerve fibre layer: innermost bright band"
    }
   },
   {
    "x": 50,
    "y": 40,
    "r": 5,
    "label": {
     "fr": "Fovéa : couches internes écartées, dépression centrale",
     "en": "Fovea: inner layers displaced, central pit"
    }
   },
   {
    "x": 14,
    "y": 70,
    "r": 4,
    "label": {
     "fr": "Choroïde",
     "en": "Choroid"
    }
   }
  ],
  "credit": {
   "fr": "Schéma original (ophtalmo app), non tiré d’un patient réel.",
   "en": "Original schematic (ophtalmo app), not from a real patient."
  },
  "license": "original",
  "schematic": true
 },
 "m-oct-2": {
  "kind": "photo",
  "photo": "OPH-011",
  "alt": {
   "fr": "OCT maculaire : traction vitréomaculaire avec œdème maculaire; cliché infrarouge et ligne de coupe à gauche.",
   "en": "Macular OCT: vitreomacular traction with macular edema; infrared image and scan line on the left."
  },
  "hotspots": [
   {
    "x": 20,
    "y": 50,
    "r": 3.7,
    "label": {
     "fr": "Ligne verte : position de la coupe OCT",
     "en": "Green line: OCT scan position"
    }
   },
   {
    "x": 59,
    "y": 22,
    "r": 4.2,
    "label": {
     "fr": "Hyaloïde postérieure décollée en périphérie (fine ligne)",
     "en": "Posterior hyaloid detached peripherally (thin line)"
    }
   },
   {
    "x": 69,
    "y": 45,
    "r": 3.7,
    "label": {
     "fr": "Hyaloïde encore attachée à la fovéa : elle tire la rétine vers le haut",
     "en": "Hyaloid still attached at the fovea, pulling the retina upward"
    },
    "decisive": true
   },
   {
    "x": 70,
    "y": 62,
    "r": 3.7,
    "label": {
     "fr": "Espaces kystiques hyporéflectifs intrarétiniens (œdème)",
     "en": "Hyporeflective intraretinal cystic spaces (edema)"
    }
   },
   {
    "x": 90,
    "y": 76,
    "r": 3.1,
    "label": {
     "fr": "Bande hyperréflective externe (EP) continue",
     "en": "Outer hyperreflective band (RPE) continuous"
    }
   }
  ],
  "credit": {
   "fr": "EyeRounds.org, University of Iowa (CC BY-NC-ND 3.0). Image non modifiée.",
   "en": "EyeRounds.org, University of Iowa (CC BY-NC-ND 3.0). Image unmodified."
  },
  "license": "CC BY-NC-ND 3.0",
  "source": "https://webeye.ophth.uiowa.edu/eyeforum/atlas/pages/Vitreoretinal-Traction-VRT-and-CME.html"
 },
 "m-oct-3": {
  "kind": "photo",
  "photo": "OPH-268",
  "alt": {
   "fr": "OCT maculaire d’une membrane épirétinienne : carte d’épaisseur, grille ETDRS et coupe.",
   "en": "Macular OCT of an epiretinal membrane: thickness map, ETDRS grid and B-scan."
  },
  "hotspots": [
   {
    "x": 74,
    "y": 77,
    "r": 3.7,
    "label": {
     "fr": "Ligne hyperréflective plissée à la surface interne de la rétine (membrane)",
     "en": "Wrinkled hyperreflective line on the inner retinal surface (membrane)"
    },
    "decisive": true
   },
   {
    "x": 69,
    "y": 79,
    "r": 3.7,
    "label": {
     "fr": "Dépression fovéolaire effacée",
     "en": "Foveal depression lost"
    }
   },
   {
    "x": 63.5,
    "y": 28,
    "r": 3.1,
    "label": {
     "fr": "Sous-champ central : 531 µm (épaissi)",
     "en": "Central subfield: 531 µm (thickened)"
    }
   },
   {
    "x": 22,
    "y": 50,
    "r": 5.5,
    "label": {
     "fr": "Carte d’épaisseur : épaississement central (blanc/rouge)",
     "en": "Thickness map: central thickening (white/red)"
    }
   }
  ],
  "credit": {
   "fr": "EyeRounds.org, University of Iowa (CC BY-NC-ND 3.0). Image non modifiée.",
   "en": "EyeRounds.org, University of Iowa (CC BY-NC-ND 3.0). Image unmodified."
  },
  "license": "CC BY-NC-ND 3.0",
  "source": "https://webeye.ophth.uiowa.edu/eyeforum/atlas/pages/epiretinal-membrane.htm"
 },
 "m-oct-4": {
  "kind": "photo",
  "photo": "OPH-262",
  "alt": {
   "fr": "OCT maculaire oblique chez un diabétique (œdème maculaire); cliché infrarouge et ligne de coupe à gauche.",
   "en": "Oblique macular OCT in a diabetic patient (macular edema); infrared image and scan line on the left."
  },
  "hotspots": [
   {
    "x": 59,
    "y": 33,
    "r": 3.2,
    "label": {
     "fr": "Espaces sombres (kystes) dans l’épaisseur de la rétine : liquide intrarétinien",
     "en": "Dark (cystic) spaces within the retina: intraretinal fluid"
    },
    "decisive": true
   },
   {
    "x": 64,
    "y": 26,
    "r": 3,
    "label": {
     "fr": "Points hyperréflectifs (exsudats) avec ombre portée en dessous",
     "en": "Hyperreflective dots (exudates) with shadowing below"
    }
   },
   {
    "x": 88,
    "y": 30,
    "r": 3.2,
    "label": {
     "fr": "Segment moins épais pour comparaison",
     "en": "Thinner segment for comparison"
    }
   },
   {
    "x": 20,
    "y": 45,
    "r": 3.2,
    "label": {
     "fr": "Ligne verte oblique : plan de coupe",
     "en": "Oblique green line: scan plane"
    }
   }
  ],
  "credit": {
   "fr": "EyeRounds.org, University of Iowa (CC BY-NC-ND 3.0). Image non modifiée.",
   "en": "EyeRounds.org, University of Iowa (CC BY-NC-ND 3.0). Image unmodified."
  },
  "license": "CC BY-NC-ND 3.0",
  "source": "https://webeye.ophth.uiowa.edu/eyeforum/atlas/pages/diabetic-macular-edema.htm"
 },
 "m-oct-5": {
  "kind": "photo",
  "photo": "OPH-266",
  "alt": {
   "fr": "OCT maculaire : décollement drusénoïde de l’épithélium pigmentaire, deux coupes (A horizontale, B oblique).",
   "en": "Macular OCT: drusenoid pigment epithelial detachment, two scans (A horizontal, B oblique)."
  },
  "hotspots": [
   {
    "x": 72,
    "y": 18,
    "r": 7.0,
    "label": {
     "fr": "Soulèvements en dôme de la ligne de l’EP (contenu modérément réflectif)",
     "en": "Dome-shaped elevations of the RPE line (moderately reflective content)"
    },
    "decisive": true
   },
   {
    "x": 66,
    "y": 71,
    "r": 7.0,
    "label": {
     "fr": "Même aspect sur la coupe oblique",
     "en": "Same appearance on the oblique scan"
    }
   },
   {
    "x": 20,
    "y": 25,
    "r": 7.0,
    "label": {
     "fr": "Drusen visibles sur l’infrarouge, au centre de la ligne de coupe",
     "en": "Drusen visible on infrared, along the scan line"
    }
   }
  ],
  "credit": {
   "fr": "EyeRounds.org, University of Iowa (CC BY-NC-ND 3.0). Image non modifiée.",
   "en": "EyeRounds.org, University of Iowa (CC BY-NC-ND 3.0). Image unmodified."
  },
  "license": "CC BY-NC-ND 3.0",
  "source": "https://webeye.ophth.uiowa.edu/eyeforum/atlas/pages/drusenoid-PED.htm"
 },
 "m-oct-6": {
  "kind": "photo",
  "photo": "OPH-132",
  "alt": {
   "fr": "Rapport OCT Cirrus : papille et RNFL des deux yeux (gauche) et analyse des cellules ganglionnaires (droite), glaucome avancé.",
   "en": "Cirrus OCT report: optic disc and RNFL of both eyes (left) and ganglion cell analysis (right), advanced glaucoma."
  },
  "hotspots": [
   {
    "x": 18,
    "y": 77,
    "r": 3.8,
    "label": {
     "fr": "OD quadrants : S 61, I 52, T 39 µm en rouge; seul N 50 µm reste vert",
     "en": "OD quadrants: S 61, I 52, T 39 µm red; only N 50 µm stays green"
    },
    "decisive": true
   },
   {
    "x": 32,
    "y": 77,
    "r": 3.8,
    "label": {
     "fr": "OS quadrants : S, T, I rouges, N 42 µm jaune",
     "en": "OS quadrants: S, T, I red, N 42 µm yellow"
    }
   },
   {
    "x": 25,
    "y": 5.5,
    "r": 3,
    "label": {
     "fr": "RNFL moyenne : OD 50 µm, OS 47 µm (rouge)",
     "en": "Average RNFL: OD 50 µm, OS 47 µm (red)"
    }
   },
   {
    "x": 69,
    "y": 52,
    "r": 4.6,
    "label": {
     "fr": "Couche ganglionnaire : secteurs rouges aux deux yeux",
     "en": "Ganglion cell layer: red sectors in both eyes"
    }
   }
  ],
  "credit": {
   "fr": "EyeRounds.org, University of Iowa (CC BY-NC-ND 3.0). Image non modifiée.",
   "en": "EyeRounds.org, University of Iowa (CC BY-NC-ND 3.0). Image unmodified."
  },
  "license": "CC BY-NC-ND 3.0",
  "source": "https://webeye.ophth.uiowa.edu/eyeforum/atlas/pages/Bean%20Pot%20Cupping/bean-pot-cupping.htm"
 },
 "m-oct-7": {
  "kind": "photo",
  "photo": "OPH-134",
  "alt": {
   "fr": "OCT papillaire (Cirrus) des deux yeux : cartes d’épaisseur des fibres (RNFL), tableau et carte de déviation; glaucome de l’œil gauche.",
   "en": "Optic disc OCT (Cirrus) of both eyes: RNFL thickness maps, table and deviation maps; glaucoma of the left eye."
  },
  "hotspots": [
   {
    "x": 90,
    "y": 86,
    "r": 6.5,
    "label": {
     "fr": "OS : secteur rouge/jaune inféro-temporal sur la carte de déviation = perte de fibres",
     "en": "OS: red/yellow inferotemporal sector on the deviation map = fiber loss"
    },
    "decisive": true
   },
   {
    "x": 61,
    "y": 24,
    "r": 4.1,
    "label": {
     "fr": "Symétrie RNFL 59 % (rouge) : asymétrie entre les yeux",
     "en": "RNFL symmetry 59% (red): inter-eye asymmetry"
    }
   },
   {
    "x": 66,
    "y": 43,
    "r": 4.1,
    "label": {
     "fr": "C/D vertical OS 0,84 (rouge) vs OD 0,66",
     "en": "Vertical C/D OS 0.84 (red) vs OD 0.66"
    }
   },
   {
    "x": 60,
    "y": 84,
    "r": 4.9,
    "label": {
     "fr": "Anneau neurorétinien : la courbe OS (pointillé) chute en inférieur",
     "en": "Neuroretinal rim: OS curve (dashed) drops inferiorly"
    }
   },
   {
    "x": 66,
    "y": 19,
    "r": 4.1,
    "label": {
     "fr": "RNFL moyen 104 µm OD vs 91 µm OS",
     "en": "Average RNFL 104 µm OD vs 91 µm OS"
    }
   }
  ],
  "credit": {
   "fr": "EyeRounds.org, University of Iowa (CC BY-NC-ND 3.0). Image non modifiée.",
   "en": "EyeRounds.org, University of Iowa (CC BY-NC-ND 3.0). Image unmodified."
  },
  "license": "CC BY-NC-ND 3.0",
  "source": "https://webeye.ophth.uiowa.edu/eyeforum/atlas/pages/inf-notch-NFL-defect-HVF.htm"
 },
 "m-oct-8": {
  "kind": "photo",
  "photo": "OPH-147",
  "alt": {
   "fr": "OCT du segment antérieur : fermeture de l’angle après greffe endothéliale (DMEK).",
   "en": "Anterior segment OCT: angle closure after endothelial keratoplasty (DMEK)."
  },
  "hotspots": [
   {
    "x": 27,
    "y": 68,
    "r": 3,
    "label": {
     "fr": "Iris accolé à la face postérieure de la cornée : angle fermé",
     "en": "Iris apposed to the posterior cornea: closed angle"
    },
    "decisive": true
   },
   {
    "x": 76,
    "y": 66,
    "r": 3,
    "label": {
     "fr": "Même apposition du côté opposé",
     "en": "Same apposition on the opposite side"
    }
   },
   {
    "x": 50,
    "y": 30,
    "r": 3,
    "label": {
     "fr": "Cornée",
     "en": "Cornea"
    }
   }
  ],
  "credit": {
   "fr": "EyeRounds.org, University of Iowa (CC BY-NC-ND 3.0). Image non modifiée.",
   "en": "EyeRounds.org, University of Iowa (CC BY-NC-ND 3.0). Image unmodified."
  },
  "license": "CC BY-NC-ND 3.0",
  "source": "https://webeye.ophth.uiowa.edu/eyeforum/atlas/pages/angle-closure-post-DMEK.htm"
 },
 "m-oct-9": {
  "kind": "photo",
  "photo": "OPH-261",
  "alt": {
   "fr": "OCT maculaire d’un œdème maculaire diabétique; cliché infrarouge à gauche.",
   "en": "Macular OCT in diabetic macular edema; infrared image on the left."
  },
  "hotspots": [
   {
    "x": 76,
    "y": 26,
    "r": 3.6,
    "label": {
     "fr": "Logettes hyporéflectives intrarétiniennes",
     "en": "Hyporeflective intraretinal cysts"
    },
    "decisive": true
   },
   {
    "x": 84,
    "y": 33,
    "r": 4.7,
    "label": {
     "fr": "Rétine épaissie, contour interne bombé",
     "en": "Thickened retina, bulging inner contour"
    }
   },
   {
    "x": 55,
    "y": 33,
    "r": 3.6,
    "label": {
     "fr": "Segment d’épaisseur plus normale pour comparaison",
     "en": "Segment of more normal thickness for comparison"
    }
   },
   {
    "x": 19,
    "y": 50,
    "r": 3.1,
    "label": {
     "fr": "Ligne verte : plan de coupe",
     "en": "Green line: scan plane"
    }
   }
  ],
  "credit": {
   "fr": "EyeRounds.org, University of Iowa (CC BY-NC-ND 3.0). Image non modifiée.",
   "en": "EyeRounds.org, University of Iowa (CC BY-NC-ND 3.0). Image unmodified."
  },
  "license": "CC BY-NC-ND 3.0",
  "source": "https://webeye.ophth.uiowa.edu/eyeforum/atlas/pages/diabetic-macular-edema.htm"
 },
 "m-oct-10": {
  "kind": "photo",
  "photo": "OPH-298",
  "alt": {
   "fr": "OCT des fibres nerveuses (profil TSNIT) des deux yeux dans un glaucome à pression normale.",
   "en": "Nerve fiber layer OCT (TSNIT profile) of both eyes in normal-tension glaucoma."
  },
  "hotspots": [
   {
    "x": 93,
    "y": 67,
    "r": 5.0,
    "label": {
     "fr": "OS : épaisseur moyenne 62,05 µm en rouge (< 1 % de la normale)",
     "en": "OS: average thickness 62.05 µm in red (< 1st percentile)"
    },
    "decisive": true
   },
   {
    "x": 87.5,
    "y": 55.5,
    "r": 7.0,
    "label": {
     "fr": "OS : plusieurs secteurs horaires rouges/jaunes",
     "en": "OS: several red/yellow clock-hour sectors"
    }
   },
   {
    "x": 92,
    "y": 28,
    "r": 5.0,
    "label": {
     "fr": "OD : moyenne 74,43 µm en jaune (limite)",
     "en": "OD: average 74.43 µm in yellow (borderline)"
    }
   },
   {
    "x": 58,
    "y": 58,
    "r": 8.0,
    "label": {
     "fr": "Profil OS sous la bande verte aux pôles supérieur et inférieur",
     "en": "OS profile below the green band at superior and inferior poles"
    }
   },
   {
    "x": 48,
    "y": 88,
    "r": 7.0,
    "label": {
     "fr": "Légende : vert = normal, jaune < 5 %, rouge < 1 %",
     "en": "Legend: green = normal, yellow < 5%, red < 1%"
    }
   }
  ],
  "credit": {
   "fr": "EyeRounds.org, University of Iowa (CC BY-NC-ND 3.0). Image non modifiée.",
   "en": "EyeRounds.org, University of Iowa (CC BY-NC-ND 3.0). Image unmodified."
  },
  "license": "CC BY-NC-ND 3.0",
  "source": "https://eyerounds.org/cases/86-Normal-Low-Tension-Glaucoma.htm"
 },
 "m-gonio-1": {
  "kind": "svg",
  "svg": "<svg viewBox=\"0 0 400 300\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" font-family=\"system-ui,-apple-system,Segoe UI,sans-serif\"><rect width=\"400\" height=\"300\" rx=\"10\" fill=\"#f7f6f2\"/><text x=\"200\" y=\"27\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"600\" fill=\"#2b2a26\">Angle normal en gonioscopie · Normal angle on gonioscopy</text><rect x=\"30\" y=\"40\" width=\"340\" height=\"200\" rx=\"6\" fill=\"#2a2420\"/><rect x=\"30\" y=\"40\" width=\"340\" height=\"40\" fill=\"#cfd8dc\"/><rect x=\"30\" y=\"80\" width=\"340\" height=\"6\" fill=\"#fffbe6\"/><rect x=\"30\" y=\"86\" width=\"340\" height=\"16\" fill=\"#b9a68f\"/><rect x=\"30\" y=\"102\" width=\"340\" height=\"16\" fill=\"#6d4c35\"/><rect x=\"30\" y=\"118\" width=\"340\" height=\"10\" fill=\"#f4f1ea\"/><rect x=\"30\" y=\"128\" width=\"340\" height=\"26\" fill=\"#4a3b33\"/><path d=\"M30 154 Q120 150 200 158 T370 154 L370 240 L30 240 Z\" fill=\"#8a5a3b\"/><g font-size=\"10\" fill=\"#2b2a26\"><text x=\"40\" y=\"62\">cornée · cornea</text></g><g font-size=\"9\" fill=\"#ffffff\"><text x=\"40\" y=\"84\" fill=\"#2b2a26\">Ligne de Schwalbe · Schwalbe’s line</text><text x=\"40\" y=\"98\" fill=\"#2b2a26\">Trabéculum non pigmenté · non-pigmented TM</text><text x=\"40\" y=\"114\">Trabéculum pigmenté · pigmented TM</text><text x=\"40\" y=\"126\" fill=\"#2b2a26\">Éperon scléral · scleral spur</text><text x=\"40\" y=\"145\">Bande ciliaire · ciliary body band</text><text x=\"40\" y=\"200\">Racine de l’iris · iris root</text></g><text x=\"200\" y=\"262\" text-anchor=\"middle\" font-size=\"10\" fill=\"#2b2a26\">De l’avant (haut) vers l’arrière (bas) · anterior (top) → posterior (bottom)</text><text x=\"200\" y=\"276\" text-anchor=\"middle\" font-size=\"9\" fill=\"#5c5850\">Bande ciliaire visible = angle grand ouvert · ciliary band visible = wide-open angle</text><text x=\"394\" y=\"10\" text-anchor=\"end\" font-size=\"7.5\" fill=\"#8a8578\">schéma · schematic</text></svg>",
  "alt": {
   "fr": "Schéma des structures de l’angle iridocornéen telles que vues en gonioscopie, de la ligne de Schwalbe à la racine de l’iris.",
   "en": "Schematic of the iridocorneal angle structures as seen on gonioscopy, from Schwalbe’s line to the iris root."
  },
  "hotspots": [
   {
    "x": 85,
    "y": 27.7,
    "r": 3,
    "label": {
     "fr": "Ligne de Schwalbe : fin liseré blanc, fin de la membrane de Descemet",
     "en": "Schwalbe’s line: thin white line, end of Descemet membrane"
    }
   },
   {
    "x": 85,
    "y": 31.3,
    "r": 3,
    "label": {
     "fr": "Trabéculum non pigmenté",
     "en": "Non-pigmented trabecular meshwork"
    }
   },
   {
    "x": 85,
    "y": 36.7,
    "r": 3.5,
    "label": {
     "fr": "Trabéculum pigmenté : zone de filtration principale",
     "en": "Pigmented trabecular meshwork: main filtering zone"
    },
    "decisive": true
   },
   {
    "x": 85,
    "y": 41,
    "r": 3,
    "label": {
     "fr": "Éperon scléral : bande blanche, repère clé",
     "en": "Scleral spur: white band, key landmark"
    }
   },
   {
    "x": 85,
    "y": 47,
    "r": 3.5,
    "label": {
     "fr": "Bande ciliaire grise-brune",
     "en": "Grey-brown ciliary body band"
    }
   },
   {
    "x": 85,
    "y": 66,
    "r": 6,
    "label": {
     "fr": "Iris",
     "en": "Iris"
    }
   }
  ],
  "credit": {
   "fr": "Schéma original (ophtalmo app), non tiré d’un patient réel.",
   "en": "Original schematic (ophtalmo app), not from a real patient."
  },
  "license": "original",
  "schematic": true
 },
 "m-gonio-2": {
  "kind": "photo",
  "photo": "OPH-156",
  "alt": {
   "fr": "Gonioscopie dans un glaucome pseudoexfoliatif : ligne de Sampaolesi (pointe de flèche).",
   "en": "Gonioscopy in pseudoexfoliation glaucoma: Sampaolesi line (arrowhead)."
  },
  "hotspots": [
   {
    "x": 58,
    "y": 37,
    "r": 6.9,
    "label": {
     "fr": "Ligne de Sampaolesi : pigment ondulé en avant de la ligne de Schwalbe",
     "en": "Sampaolesi line: wavy pigment anterior to Schwalbe’s line"
    },
    "decisive": true
   },
   {
    "x": 35,
    "y": 42,
    "r": 7.8,
    "label": {
     "fr": "Bande pigmentée de l’angle (trabéculum pigmenté)",
     "en": "Pigmented band of the angle (pigmented meshwork)"
    }
   }
  ],
  "credit": {
   "fr": "EyeRounds.org, University of Iowa (CC BY-NC-ND 3.0). Image non modifiée.",
   "en": "EyeRounds.org, University of Iowa (CC BY-NC-ND 3.0). Image unmodified."
  },
  "license": "CC BY-NC-ND 3.0",
  "source": "https://webeye.ophth.uiowa.edu/eyeforum/atlas/pages/pseudoexfoliation-glaucoma.html"
 },
 "m-gonio-3": {
  "kind": "photo",
  "photo": "OPH-172",
  "alt": {
   "fr": "Gonioscopie après contusion (balle de racquetball) : récession de l’angle et fente de cyclodialyse.",
   "en": "Gonioscopy after blunt trauma (racquetball): angle recession and cyclodialysis cleft."
  },
  "hotspots": [
   {
    "x": 58,
    "y": 60,
    "r": 8.0,
    "label": {
     "fr": "Large bande de face du corps ciliaire visible : récession de l’angle",
     "en": "Broad band of visible ciliary body face: angle recession"
    }
   },
   {
    "x": 52,
    "y": 79,
    "r": 7.1,
    "label": {
     "fr": "Large bande blanche à la jonction corps ciliaire / éperon : fente de cyclodialyse",
     "en": "Broad white band at the ciliary body / scleral spur junction: cyclodialysis cleft"
    },
    "decisive": true
   }
  ],
  "credit": {
   "fr": "EyeRounds.org, University of Iowa (CC BY-NC-ND 3.0). Image non modifiée.",
   "en": "EyeRounds.org, University of Iowa (CC BY-NC-ND 3.0). Image unmodified."
  },
  "license": "CC BY-NC-ND 3.0",
  "source": "https://webeye.ophth.uiowa.edu/eyeforum/atlas/pages/angle-recession-cyclodialysis-cleft.htm"
 },
 "m-gonio-4": {
  "kind": "photo",
  "photo": "OPH-180",
  "alt": {
   "fr": "Gonioscopie de l’œil droit dans un syndrome irido-cornéo-endothélial : synéchie antérieure périphérique haute.",
   "en": "Gonioscopy of the right eye in iridocorneal endothelial syndrome: high peripheral anterior synechia."
  },
  "hotspots": [
   {
    "x": 39,
    "y": 58,
    "r": 7.0,
    "label": {
     "fr": "Flèche noire : synéchie antérieure périphérique haute (iris collé à la paroi de l’angle)",
     "en": "Black arrow: high peripheral anterior synechia (iris adherent to the angle wall)"
    },
    "decisive": true
   },
   {
    "x": 45,
    "y": 50,
    "r": 9.0,
    "label": {
     "fr": "Entre les flèches blanches : procès ciliaires visibles",
     "en": "Between the white arrows: visible ciliary processes"
    }
   }
  ],
  "credit": {
   "fr": "EyeRounds.org, University of Iowa (CC BY-NC-ND 3.0). Image non modifiée.",
   "en": "EyeRounds.org, University of Iowa (CC BY-NC-ND 3.0). Image unmodified."
  },
  "license": "CC BY-NC-ND 3.0",
  "source": "https://webeye.ophth.uiowa.edu/eyeforum/atlas/pages/Peripheral-anterior-synechiae.htm"
 },
 "m-gonio-5": {
  "kind": "photo",
  "photo": "OPH-178",
  "alt": {
   "fr": "Gonioscopie : synéchie antérieure périphérique haute atteignant la ligne de Schwalbe (syndrome ICE).",
   "en": "Gonioscopy: high peripheral anterior synechia reaching Schwalbe’s line (ICE syndrome)."
  },
  "hotspots": [
   {
    "x": 50,
    "y": 38,
    "r": 9.0,
    "label": {
     "fr": "Synéchie haute : l’iris remonte jusqu’à la ligne de Schwalbe et masque les repères de l’angle",
     "en": "High synechia: iris extends up to Schwalbe’s line, hiding the angle landmarks"
    },
    "decisive": true
   }
  ],
  "credit": {
   "fr": "EyeRounds.org, University of Iowa (CC BY-NC-ND 3.0). Image non modifiée.",
   "en": "EyeRounds.org, University of Iowa (CC BY-NC-ND 3.0). Image unmodified."
  },
  "license": "CC BY-NC-ND 3.0",
  "source": "https://webeye.ophth.uiowa.edu/eyeforum/atlas/pages/Peripheral-anterior-synechiae.htm"
 },
 "m-gonio-6": {
  "kind": "photo",
  "photo": "OPH-312",
  "alt": {
   "fr": "Gonioscopie : procès iriens (variante normale).",
   "en": "Gonioscopy: iris processes (normal variant)."
  },
  "hotspots": [
   {
    "x": 51,
    "y": 23,
    "r": 6.2,
    "label": {
     "fr": "Fins ponts de tissu irien vers la paroi de l’angle : procès iriens, sans fermer l’angle",
     "en": "Fine strands of iris tissue to the angle wall: iris processes, not closing the angle"
    },
    "decisive": true
   },
   {
    "x": 50,
    "y": 55,
    "r": 8.9,
    "label": {
     "fr": "Pupille (reflet rouge) vue à travers le verre",
     "en": "Pupil (red reflex) seen through the lens"
    }
   }
  ],
  "credit": {
   "fr": "EyeRounds.org, University of Iowa (CC BY-NC-ND 3.0). Image non modifiée.",
   "en": "EyeRounds.org, University of Iowa (CC BY-NC-ND 3.0). Image unmodified."
  },
  "license": "CC BY-NC-ND 3.0",
  "source": "https://webeye.ophth.uiowa.edu/eyeforum/atlas/pages/Iris-processes/index.htm"
 },
 "m-fondoeil-1": {
  "kind": "photo",
  "photo": "OPH-202",
  "alt": {
   "fr": "Rétinophotographie : papille normale, rapport cup/disc ≈ 0,3.",
   "en": "Fundus photo: normal optic disc, cup-to-disc ratio ≈ 0.3."
  },
  "hotspots": [
   {
    "x": 49,
    "y": 47,
    "r": 8.0,
    "label": {
     "fr": "Papille rosée, petite excavation centrale (C/D ≈ 0,3), anneau régulier",
     "en": "Pink disc, small central cup (C/D ≈ 0.3), even rim"
    },
    "decisive": true
   }
  ],
  "credit": {
   "fr": "EyeRounds.org, University of Iowa. © University of Iowa, tous droits réservés; usage éducatif selon les conditions EyeRounds (permission écrite demandée).",
   "en": "EyeRounds.org, University of Iowa. © University of Iowa, all rights reserved; educational use under EyeRounds terms (written permission requested)."
  },
  "license": "EyeRounds TOS (no CC licence)",
  "source": "https://eyerounds.org/books/glaucoma_guide/chapter6.html",
  "restricted": true
 },
 "m-fondoeil-2": {
  "kind": "photo",
  "photo": "OPH-203",
  "alt": {
   "fr": "Rétinophotographie : papille glaucomateuse, rapport cup/disc ≈ 0,9.",
   "en": "Fundus photo: glaucomatous optic disc, cup-to-disc ratio ≈ 0.9."
  },
  "hotspots": [
   {
    "x": 51,
    "y": 50,
    "r": 9.0,
    "label": {
     "fr": "Excavation très large et pâle (C/D ≈ 0,9) : anneau neurorétinien presque absent",
     "en": "Very large pale cup (C/D ≈ 0.9): neuroretinal rim almost gone"
    },
    "decisive": true
   }
  ],
  "credit": {
   "fr": "EyeRounds.org, University of Iowa. © University of Iowa, tous droits réservés; usage éducatif selon les conditions EyeRounds (permission écrite demandée).",
   "en": "EyeRounds.org, University of Iowa. © University of Iowa, all rights reserved; educational use under EyeRounds terms (written permission requested)."
  },
  "license": "EyeRounds TOS (no CC licence)",
  "source": "https://eyerounds.org/books/glaucoma_guide/chapter6.html",
  "restricted": true
 },
 "m-fondoeil-3": {
  "kind": "photo",
  "photo": "OPH-133",
  "alt": {
   "fr": "Rétinophotographie de l’œil gauche : glaucome primaire à angle ouvert avec encoche inférieure et déficit des fibres.",
   "en": "Fundus photo of the left eye: primary open-angle glaucoma with inferior notch and nerve fiber layer defect."
  },
  "hotspots": [
   {
    "x": 20,
    "y": 51,
    "r": 6.0,
    "label": {
     "fr": "Encoche inférieure de l’anneau neurorétinien",
     "en": "Inferior notch of the neuroretinal rim"
    },
    "decisive": true
   },
   {
    "x": 30,
    "y": 63,
    "r": 9.0,
    "label": {
     "fr": "Perte du reflet des fibres partant en temporal de l’encoche",
     "en": "Loss of nerve fiber sheen radiating temporally from the notch"
    }
   },
   {
    "x": 57,
    "y": 52,
    "r": 6.0,
    "label": {
     "fr": "Fovéa",
     "en": "Fovea"
    }
   }
  ],
  "credit": {
   "fr": "EyeRounds.org, University of Iowa (CC BY-NC-ND 3.0). Image non modifiée.",
   "en": "EyeRounds.org, University of Iowa (CC BY-NC-ND 3.0). Image unmodified."
  },
  "license": "CC BY-NC-ND 3.0",
  "source": "https://webeye.ophth.uiowa.edu/eyeforum/atlas/pages/inf-notch-NFL-defect-HVF.htm"
 },
 "m-fondoeil-4": {
  "kind": "photo",
  "photo": "OPH-137",
  "alt": {
   "fr": "Rétinophotographie : hémorragie papillaire dans un glaucome à pression normale.",
   "en": "Fundus photo: optic disc hemorrhage in normal-tension glaucoma."
  },
  "hotspots": [
   {
    "x": 48,
    "y": 55,
    "r": 6.0,
    "label": {
     "fr": "Hémorragie en flammèche au bord inféro-temporal de la papille",
     "en": "Flame-shaped hemorrhage at the inferotemporal disc margin"
    },
    "decisive": true
   },
   {
    "x": 53,
    "y": 47,
    "r": 8.0,
    "label": {
     "fr": "Grande excavation",
     "en": "Large cup"
    }
   }
  ],
  "credit": {
   "fr": "EyeRounds.org, University of Iowa (CC BY-NC-ND 3.0). Image non modifiée.",
   "en": "EyeRounds.org, University of Iowa (CC BY-NC-ND 3.0). Image unmodified."
  },
  "license": "CC BY-NC-ND 3.0",
  "source": "https://webeye.ophth.uiowa.edu/eyeforum/atlas/pages/Optic-Disc-Hemorrhage-in-NTG.htm"
 },
 "m-fondoeil-5": {
  "kind": "photo",
  "photo": "OPH-219",
  "alt": {
   "fr": "Rétinophotographies des deux yeux : œdème papillaire marqué.",
   "en": "Fundus photos of both eyes: prominent papilledema."
  },
  "hotspots": [
   {
    "x": 25,
    "y": 45,
    "r": 6.4,
    "label": {
     "fr": "Papille très surélevée, bords effacés, hémorragies péripapillaires",
     "en": "Markedly elevated disc, blurred margins, peripapillary hemorrhages"
    },
    "decisive": true
   },
   {
    "x": 75,
    "y": 45,
    "r": 6.4,
    "label": {
     "fr": "Même aspect à l’autre œil : atteinte bilatérale",
     "en": "Same appearance in the other eye: bilateral"
    }
   }
  ],
  "credit": {
   "fr": "EyeRounds.org, University of Iowa (CC BY-NC-ND 3.0). Image non modifiée.",
   "en": "EyeRounds.org, University of Iowa (CC BY-NC-ND 3.0). Image unmodified."
  },
  "license": "CC BY-NC-ND 3.0",
  "source": "https://webeye.ophth.uiowa.edu/eyeforum/atlas/pages/Papilledema/index.htm"
 },
 "m-fondoeil-6": {
  "kind": "photo",
  "photo": "OPH-189",
  "alt": {
   "fr": "Rétinophotographie : encoche inférieure de l’anneau neurorétinien (flèche).",
   "en": "Fundus photo: inferior notch of the neuroretinal rim (arrow)."
  },
  "hotspots": [
   {
    "x": 60,
    "y": 64,
    "r": 8.0,
    "label": {
     "fr": "Encoche inférieure de l’anneau (flèche)",
     "en": "Inferior rim notch (arrow)"
    },
    "decisive": true
   }
  ],
  "credit": {
   "fr": "EyeRounds.org, University of Iowa. © University of Iowa, tous droits réservés; usage éducatif selon les conditions EyeRounds (permission écrite demandée).",
   "en": "EyeRounds.org, University of Iowa. © University of Iowa, all rights reserved; educational use under EyeRounds terms (written permission requested)."
  },
  "license": "EyeRounds TOS (no CC licence)",
  "source": "https://webeye.ophth.uiowa.edu/eyeforum/tutorials/POAG/index.htm",
  "restricted": true
 },
 "m-fondoeil-7": {
  "kind": "svg",
  "svg": "<svg viewBox=\"0 0 400 300\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" font-family=\"system-ui,-apple-system,Segoe UI,sans-serif\"><rect width=\"400\" height=\"300\" rx=\"10\" fill=\"#f7f6f2\"/><text x=\"200\" y=\"27\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"600\" fill=\"#2b2a26\">Règle ISNT · ISNT rule (œil droit · right eye)</text><g transform=\"translate(130,150)\"><ellipse rx=\"78\" ry=\"90\" fill=\"#f0a77a\"/><ellipse cx=\"-8\" cy=\"-6\" rx=\"34\" ry=\"40\" fill=\"#fff4dc\"/><path d=\"M0 -90 L0 90 M-78 0 L78 0\" stroke=\"#b5532c\" stroke-width=\"0.8\" stroke-dasharray=\"3 3\"/><text y=\"-70\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"700\" fill=\"#2b2a26\">S</text><text y=\"80\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"700\" fill=\"#2b2a26\">I</text><text x=\"-66\" y=\"4\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"700\" fill=\"#2b2a26\">T</text><text x=\"64\" y=\"4\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"700\" fill=\"#2b2a26\">N</text></g><g font-size=\"10\" fill=\"#2b2a26\"><text x=\"245\" y=\"110\">Épaisseur de l’anneau :</text><text x=\"245\" y=\"124\">Rim thickness:</text><text x=\"245\" y=\"146\" font-weight=\"700\">I ≥ S ≥ N ≥ T</text><text x=\"245\" y=\"170\">Violée (I ou S aminci)</text><text x=\"245\" y=\"184\">→ penser glaucome</text><text x=\"245\" y=\"198\" fill=\"#5c5850\">broken (thin I or S)</text><text x=\"245\" y=\"212\" fill=\"#5c5850\">→ think glaucoma</text></g><text x=\"394\" y=\"10\" text-anchor=\"end\" font-size=\"7.5\" fill=\"#8a8578\">schéma · schematic</text></svg>",
  "alt": {
   "fr": "Schéma d’une papille droite montrant la règle ISNT : l’anneau est normalement le plus épais en inférieur, puis supérieur, nasal, temporal.",
   "en": "Schematic of a right optic disc showing the ISNT rule: the rim is normally thickest inferiorly, then superiorly, nasally, temporally."
  },
  "hotspots": [
   {
    "x": 33,
    "y": 76,
    "r": 6,
    "label": {
     "fr": "Anneau inférieur : normalement le plus épais",
     "en": "Inferior rim: normally the thickest"
    },
    "decisive": true
   },
   {
    "x": 33,
    "y": 28,
    "r": 6,
    "label": {
     "fr": "Anneau supérieur",
     "en": "Superior rim"
    }
   },
   {
    "x": 49,
    "y": 51,
    "r": 6,
    "label": {
     "fr": "Anneau nasal",
     "en": "Nasal rim"
    }
   },
   {
    "x": 16,
    "y": 51,
    "r": 6,
    "label": {
     "fr": "Anneau temporal : normalement le plus mince",
     "en": "Temporal rim: normally the thinnest"
    }
   },
   {
    "x": 30.5,
    "y": 48,
    "r": 6,
    "label": {
     "fr": "Excavation (cup)",
     "en": "Cup"
    }
   }
  ],
  "credit": {
   "fr": "Schéma original (ophtalmo app), non tiré d’un patient réel.",
   "en": "Original schematic (ophtalmo app), not from a real patient."
  },
  "license": "original",
  "schematic": true
 },
 "m-cv-1": {
  "kind": "photo",
  "photo": "OPH-302",
  "alt": {
   "fr": "Champs visuels Humphrey 24-2 : OS (gauche de l’image) glaucome sévère; OD (droite) normal.",
   "en": "Humphrey 24-2 visual fields: OS (left of image) severe glaucoma; OD (right) normal."
  },
  "hotspots": [
   {
    "x": 8,
    "y": 11,
    "r": 4.7,
    "label": {
     "fr": "Fiabilité OS : pertes de fixation 1/17, faux positifs 2 %, faux négatifs 0 % → examen fiable",
     "en": "OS reliability: fixation losses 1/17, false positives 2%, false negatives 0% → reliable test"
    }
   },
   {
    "x": 37,
    "y": 34,
    "r": 8.7,
    "label": {
     "fr": "OS échelle de gris : déficits denses supérieur et inférieur, marche nasale",
     "en": "OS grey scale: dense superior and inferior defects, nasal step"
    }
   },
   {
    "x": 44,
    "y": 70,
    "r": 4.7,
    "label": {
     "fr": "OS : MD −16,93 dB, PSD 11,32 dB (p < 0,5 %)",
     "en": "OS: MD −16.93 dB, PSD 11.32 dB (p < 0.5%)"
    },
    "decisive": true
   },
   {
    "x": 44,
    "y": 62,
    "r": 3.9,
    "label": {
     "fr": "GHT : hors des limites normales",
     "en": "GHT: outside normal limits"
    }
   },
   {
    "x": 24,
    "y": 82,
    "r": 6.3,
    "label": {
     "fr": "Carte de probabilité de la déviation individuelle : carrés noirs = p < 0,5 %",
     "en": "Pattern deviation probability map: black squares = p < 0.5%"
    }
   },
   {
    "x": 90,
    "y": 36,
    "r": 5.5,
    "label": {
     "fr": "OD : seule la tache aveugle (normale)",
     "en": "OD: only the blind spot (normal)"
    }
   },
   {
    "x": 87,
    "y": 70,
    "r": 3.9,
    "label": {
     "fr": "OD : MD −0,18 dB, PSD 1,72 dB, GHT normal",
     "en": "OD: MD −0.18 dB, PSD 1.72 dB, GHT within normal limits"
    }
   }
  ],
  "credit": {
   "fr": "EyeRounds.org, University of Iowa (CC BY-NC-ND 3.0). Image non modifiée.",
   "en": "EyeRounds.org, University of Iowa (CC BY-NC-ND 3.0). Image unmodified."
  },
  "license": "CC BY-NC-ND 3.0",
  "source": "https://eyerounds.org/cases/257-UGH-syndrome.htm"
 },
 "m-cv-2": {
  "kind": "photo",
  "photo": "OPH-296",
  "alt": {
   "fr": "Champ visuel Humphrey (échelle de gris) dans un glaucome à pression normale : défauts denses près de la fixation.",
   "en": "Humphrey visual field (grey scale) in normal-tension glaucoma: dense defects near fixation."
  },
  "hotspots": [
   {
    "x": 55,
    "y": 58,
    "r": 8.0,
    "label": {
     "fr": "Défaut dense inférieur juste sous la fixation (paracentral)",
     "en": "Dense inferior defect just below fixation (paracentral)"
    },
    "decisive": true
   },
   {
    "x": 81,
    "y": 40,
    "r": 7.0,
    "label": {
     "fr": "Défaut nasal supérieur dense, arrêté au méridien horizontal",
     "en": "Dense superonasal defect stopping at the horizontal meridian"
    }
   },
   {
    "x": 81,
    "y": 60,
    "r": 7.0,
    "label": {
     "fr": "Défaut nasal inférieur",
     "en": "Inferonasal defect"
    }
   },
   {
    "x": 24,
    "y": 56,
    "r": 5.0,
    "label": {
     "fr": "Tache aveugle",
     "en": "Blind spot"
    }
   }
  ],
  "credit": {
   "fr": "EyeRounds.org, University of Iowa (CC BY-NC-ND 3.0). Image non modifiée.",
   "en": "EyeRounds.org, University of Iowa (CC BY-NC-ND 3.0). Image unmodified."
  },
  "license": "CC BY-NC-ND 3.0",
  "source": "https://eyerounds.org/cases/86-Normal-Low-Tension-Glaucoma.htm"
 },
 "m-cv-3": {
  "kind": "photo",
  "photo": "OPH-283",
  "alt": {
   "fr": "Champs visuels de Goldmann des deux yeux : hémianopsie homonyme gauche (AVC occipital).",
   "en": "Goldmann visual fields of both eyes: left homonymous hemianopia (occipital stroke)."
  },
  "hotspots": [
   {
    "x": 27,
    "y": 45,
    "r": 3.9,
    "label": {
     "fr": "Isoptères coupés net au méridien vertical",
     "en": "Isopters cut sharply at the vertical meridian"
    },
    "decisive": true
   },
   {
    "x": 76,
    "y": 45,
    "r": 3.9,
    "label": {
     "fr": "Même coupure verticale à l’autre œil : hémianopsie homonyme (rétrochiasmatique)",
     "en": "Same vertical cut in the other eye: homonymous hemianopia (retrochiasmal)"
    }
   },
   {
    "x": 12,
    "y": 40,
    "r": 5.0,
    "label": {
     "fr": "Hémichamp gauche absent",
     "en": "Left hemifield missing"
    }
   },
   {
    "x": 79,
    "y": 35,
    "r": 3,
    "label": {
     "fr": "Tache aveugle (bleu)",
     "en": "Blind spot (blue)"
    }
   }
  ],
  "credit": {
   "fr": "EyeRounds.org, University of Iowa (CC BY-NC-ND 3.0). Image non modifiée.",
   "en": "EyeRounds.org, University of Iowa (CC BY-NC-ND 3.0). Image unmodified."
  },
  "license": "CC BY-NC-ND 3.0",
  "source": "https://webeye.ophth.uiowa.edu/eyeforum/atlas/pages/left-homonymous-hemianopsia-occipital-stroke.html"
 },
 "m-cv-4": {
  "kind": "photo",
  "photo": "OPH-013",
  "alt": {
   "fr": "Rapport Humphrey 24-2 annoté (normal) : chaque zone du rapport est nommée par la source.",
   "en": "Annotated (normal) Humphrey 24-2 printout: each area of the report is labelled by the source."
  },
  "hotspots": [
   {
    "x": 15,
    "y": 14,
    "r": 6.0,
    "label": {
     "fr": "Indices de fiabilité (pertes de fixation, faux +, faux −)",
     "en": "Reliability indices (fixation losses, false +, false −)"
    },
    "decisive": true
   },
   {
    "x": 37,
    "y": 32,
    "r": 8.0,
    "label": {
     "fr": "Carte des seuils numériques (dB)",
     "en": "Numerical sensitivity plot (dB)"
    }
   },
   {
    "x": 71,
    "y": 34,
    "r": 8.0,
    "label": {
     "fr": "Échelle de gris",
     "en": "Grey scale map"
    }
   },
   {
    "x": 22,
    "y": 53,
    "r": 8.0,
    "label": {
     "fr": "Déviation totale (valeurs), carte de probabilité en dessous",
     "en": "Total deviation (values), probability map below"
    }
   },
   {
    "x": 52,
    "y": 53,
    "r": 8.0,
    "label": {
     "fr": "Déviation individuelle / pattern (valeurs), carte de probabilité en dessous",
     "en": "Pattern deviation (values), probability map below"
    }
   },
   {
    "x": 75,
    "y": 57,
    "r": 6.0,
    "label": {
     "fr": "GHT, VFI, MD, PSD",
     "en": "GHT, VFI, MD, PSD"
    }
   }
  ],
  "credit": {
   "fr": "EyeRounds.org, University of Iowa. © University of Iowa, tous droits réservés; usage éducatif selon les conditions EyeRounds (permission écrite demandée).",
   "en": "EyeRounds.org, University of Iowa. © University of Iowa, all rights reserved; educational use under EyeRounds terms (written permission requested)."
  },
  "license": "EyeRounds TOS (no CC licence)",
  "source": "https://webeye.ophth.uiowa.edu/eyeforum/tutorials/VF-testing/index.htm",
  "restricted": true
 },
 "m-cv-5": {
  "kind": "photo",
  "photo": "OPH-293",
  "alt": {
   "fr": "Échelles de gris Humphrey annotées : A tache aveugle normale, B déficit arciforme, C déficit arciforme et marche nasale.",
   "en": "Annotated Humphrey grey scales: A normal blind spot, B arcuate defect, C arcuate defect and nasal step."
  },
  "hotspots": [
   {
    "x": 11,
    "y": 27,
    "r": 5.0,
    "label": {
     "fr": "A : tache aveugle normale",
     "en": "A: normal blind spot"
    }
   },
   {
    "x": 66,
    "y": 18,
    "r": 8.0,
    "label": {
     "fr": "B : déficit arciforme glaucomateux",
     "en": "B: glaucomatous arcuate defect"
    },
    "decisive": true
   },
   {
    "x": 20,
    "y": 79,
    "r": 6.0,
    "label": {
     "fr": "C : déficit arciforme",
     "en": "C: arcuate defect"
    }
   },
   {
    "x": 37,
    "y": 78,
    "r": 6.0,
    "label": {
     "fr": "C : marche nasale (arrêt au méridien horizontal)",
     "en": "C: nasal step (stops at the horizontal meridian)"
    }
   }
  ],
  "credit": {
   "fr": "EyeRounds.org, University of Iowa. © University of Iowa, tous droits réservés; usage éducatif selon les conditions EyeRounds (permission écrite demandée).",
   "en": "EyeRounds.org, University of Iowa. © University of Iowa, all rights reserved; educational use under EyeRounds terms (written permission requested)."
  },
  "license": "EyeRounds TOS (no CC licence)",
  "source": "https://eyerounds.org/books/glaucoma_guide/chapter6.html",
  "restricted": true
 },
 "m-cv-6": {
  "kind": "photo",
  "photo": "OPH-015",
  "alt": {
   "fr": "Planche de dessins (source EyeRounds) des défauts du champ visuel fréquents, identifiés par des lettres.",
   "en": "EyeRounds chart of common visual field defects, identified by letters."
  },
  "hotspots": [
   {
    "x": 25,
    "y": 67,
    "r": 12.0,
    "label": {
     "fr": "Défauts qui respectent le méridien vertical (hémianopsies) : comparer les deux yeux pour localiser la lésion",
     "en": "Defects respecting the vertical meridian (hemianopias): compare both eyes to localise the lesion"
    },
    "decisive": true
   },
   {
    "x": 50,
    "y": 8,
    "r": 6.0,
    "label": {
     "fr": "Ligne du haut : défauts centraux (ex. C, scotome central) et annulaires (A, B)",
     "en": "Top row: central (e.g. C, central scotoma) and ring defects (A, B)"
    }
   }
  ],
  "credit": {
   "fr": "EyeRounds.org, University of Iowa. © University of Iowa, tous droits réservés; usage éducatif selon les conditions EyeRounds (permission écrite demandée).",
   "en": "EyeRounds.org, University of Iowa. © University of Iowa, all rights reserved; educational use under EyeRounds terms (written permission requested)."
  },
  "license": "EyeRounds TOS (no CC licence)",
  "source": "https://webeye.ophth.uiowa.edu/eyeforum/tutorials/VF-testing/index.htm",
  "restricted": true
 },
 "m-cv-7": {
  "kind": "svg",
  "svg": "<svg viewBox=\"0 0 400 300\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" font-family=\"system-ui,-apple-system,Segoe UI,sans-serif\"><rect width=\"400\" height=\"300\" rx=\"10\" fill=\"#f7f6f2\"/><text x=\"200\" y=\"27\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"600\" fill=\"#2b2a26\">Lire un rapport Humphrey · Reading a Humphrey printout</text><rect x=\"20\" y=\"32\" width=\"360\" height=\"232\" rx=\"6\" fill=\"#ffffff\" stroke=\"#c9c4b8\"/><g font-size=\"9\" fill=\"#2b2a26\"><rect x=\"30\" y=\"40\" width=\"110\" height=\"46\" fill=\"#eaf4fb\"/><text x=\"36\" y=\"54\" font-weight=\"700\">1 Fiabilité · Reliability</text><text x=\"36\" y=\"67\">Pertes fixation · FL &lt; 20 %</text><text x=\"36\" y=\"79\">Faux + · FP &lt; 15 %</text><rect x=\"160\" y=\"40\" width=\"80\" height=\"80\" fill=\"#f1efe9\"/><text x=\"166\" y=\"54\" font-weight=\"700\">2 Seuils (dB)</text><rect x=\"260\" y=\"40\" width=\"110\" height=\"80\" fill=\"#f1efe9\"/><text x=\"266\" y=\"54\" font-weight=\"700\">Échelle de gris</text><text x=\"266\" y=\"66\" fill=\"#5c5850\">vue d’ensemble seulement</text><circle cx=\"315\" cy=\"94\" r=\"20\" fill=\"#d9d6cf\"/><circle cx=\"300\" cy=\"96\" r=\"3\" fill=\"#2b2a26\"/><rect x=\"30\" y=\"130\" width=\"110\" height=\"110\" fill=\"#f1efe9\"/><text x=\"36\" y=\"144\" font-weight=\"700\">3 Déviation totale</text><text x=\"36\" y=\"156\" fill=\"#5c5850\">vs âge · vs age-matched</text><rect x=\"160\" y=\"130\" width=\"110\" height=\"110\" fill=\"#fff3d6\"/><text x=\"166\" y=\"144\" font-weight=\"700\">4 Déviation individuelle</text><text x=\"166\" y=\"156\" fill=\"#5c5850\">pattern : défaut localisé</text><rect x=\"285\" y=\"130\" width=\"85\" height=\"110\" fill=\"#eaf4fb\"/><text x=\"291\" y=\"144\" font-weight=\"700\">5 Indices</text><text x=\"291\" y=\"162\">GHT</text><text x=\"291\" y=\"178\">VFI</text><text x=\"291\" y=\"194\">MD (global)</text><text x=\"291\" y=\"210\">PSD (localisé)</text></g><text x=\"200\" y=\"280\" text-anchor=\"middle\" font-size=\"9\" fill=\"#5c5850\">ordre de lecture 1 → 5 · seuils de fiabilité indicatifs (SITA) · indicative reliability cut-offs</text><text x=\"394\" y=\"10\" text-anchor=\"end\" font-size=\"7.5\" fill=\"#8a8578\">schéma · schematic</text></svg>",
  "alt": {
   "fr": "Schéma de la disposition d’un rapport de champ visuel Humphrey et de l’ordre de lecture recommandé.",
   "en": "Schematic of the layout of a Humphrey visual field printout and the recommended reading order."
  },
  "hotspots": [
   {
    "x": 21,
    "y": 21,
    "r": 8,
    "label": {
     "fr": "Commencer par la fiabilité : si non fiable, ne pas surinterpréter",
     "en": "Start with reliability: if unreliable, do not over-interpret"
    },
    "decisive": true
   },
   {
    "x": 50,
    "y": 27,
    "r": 7,
    "label": {
     "fr": "Seuils numériques en dB",
     "en": "Numerical thresholds in dB"
    }
   },
   {
    "x": 79,
    "y": 27,
    "r": 8,
    "label": {
     "fr": "Échelle de gris : jolie mais non quantitative",
     "en": "Grey scale: eye-catching but not quantitative"
    }
   },
   {
    "x": 21,
    "y": 61,
    "r": 8,
    "label": {
     "fr": "Déviation totale : perte diffuse + localisée (ex. cataracte = diffuse)",
     "en": "Total deviation: diffuse + localised loss (e.g. cataract = diffuse)"
    }
   },
   {
    "x": 54,
    "y": 61,
    "r": 8,
    "label": {
     "fr": "Déviation individuelle : défaut localisé (glaucome, neuro)",
     "en": "Pattern deviation: localised defect (glaucoma, neuro)"
    }
   },
   {
    "x": 82,
    "y": 61,
    "r": 7,
    "label": {
     "fr": "GHT/MD/PSD/VFI : résumé chiffré",
     "en": "GHT/MD/PSD/VFI: numeric summary"
    }
   }
  ],
  "credit": {
   "fr": "Schéma original (ophtalmo app), non tiré d’un patient réel.",
   "en": "Original schematic (ophtalmo app), not from a real patient."
  },
  "license": "original",
  "schematic": true
 }
});
