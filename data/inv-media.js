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
  "photo": "OPH-210",
  "alt": {
   "fr": "Photo de face : cataracte mature blanche de l’œil droit (à gauche de l’image); œil gauche à droite pour comparaison.",
   "en": "Frontal photo: white mature cataract in the right eye (left of image); left eye on the right for comparison."
  },
  "hotspots": [
   {
    "x": 20.5,
    "y": 55,
    "r": 3,
    "label": {
     "fr": "OD : pupille blanche (cataracte mature), aucun reflet du fond → la lumière ne passe pas, les ultrasons oui",
     "en": "OD: white pupil (mature cataract), no fundus reflex → light is blocked, ultrasound is not"
    },
    "decisive": true
   },
   {
    "x": 77,
    "y": 54,
    "r": 3,
    "label": {
     "fr": "OG : pupille sombre, pour comparaison",
     "en": "OS: dark pupil, for comparison"
    }
   }
  ],
  "credit": {
   "fr": "EyeRounds.org, University of Iowa (CC BY-NC-ND 3.0). Image non modifiée.",
   "en": "EyeRounds.org, University of Iowa (CC BY-NC-ND 3.0). Image unmodified."
  },
  "license": "CC BY-NC-ND 3.0",
  "source": "https://webeye.ophth.uiowa.edu/eyeforum/atlas/pages/Mature-Cataract.html"
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
   "fr": "Schéma original · Ocelle, non tiré d’un patient réel.",
   "en": "Original schematic · Ocelle, not from a real patient."
  },
  "license": "original",
  "schematic": true
 },
 "m-bscan-3": {
  "kind": "photo",
  "photo": "OPH-205",
  "alt": {
   "fr": "Échographie B normale, coupe transverse T12 : sonde posée sur la paupière inférieure (patient regarde en haut) et image.",
   "en": "Normal B-scan, T12 transverse view: probe on the lower lid (patient looks up) and echogram."
  },
  "hotspots": [
   {
    "x": 14,
    "y": 44,
    "r": 3.1,
    "label": {
     "fr": "Sonde posée en bas, sur la paupière inférieure : le patient regarde vers 12 h",
     "en": "Probe placed inferiorly on the lower lid: the patient looks toward 12 o’clock"
    },
    "decisive": true
   },
   {
    "x": 27,
    "y": 57,
    "r": 3.1,
    "label": {
     "fr": "Flèche L–F : plan de coupe limbe ↔ fornix",
     "en": "L–F arrow: limbus ↔ fornix scan plane"
    }
   },
   {
    "x": 96,
    "y": 96,
    "r": 3,
    "label": {
     "fr": "Étiquette T12P = transverse, 12 h, postérieur",
     "en": "T12P label = transverse, 12 o’clock, posterior"
    }
   },
   {
    "x": 67,
    "y": 50,
    "r": 3,
    "label": {
     "fr": "Paroi postérieure lisse (normale)",
     "en": "Smooth posterior wall (normal)"
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
    "x": 19,
    "y": 74,
    "r": 6.0,
    "label": {
     "fr": "Dôme lisse, convexe et épais de la paroi (B-scan gauche)",
     "en": "Smooth, convex, thick dome of the wall (left B-scan)"
    },
    "decisive": true
   },
   {
    "x": 69,
    "y": 79,
    "r": 6.0,
    "label": {
     "fr": "Contour convexe lisse sur le B-scan droit",
     "en": "Smooth convex contour on the right B-scan"
    },
    "decisive": true
   },
   {
    "x": 19,
    "y": 30,
    "r": 7.0,
    "label": {
     "fr": "Fond d’œil : soulèvement brun-orangé lisse",
     "en": "Fundus: smooth brown-orange elevation"
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
   "fr": "Mosaïque de 10 échographies B : décollements choroïdiens hémorragiques apposés (« kissing »).",
   "en": "Mosaic of 10 B-scans: hemorrhagic appositional (“kissing”) choroidal detachments."
  },
  "hotspots": [
   {
    "x": 23,
    "y": 48,
    "r": 6.0,
    "label": {
     "fr": "Les dômes choroïdiens se rejoignent au centre de la cavité : configuration « kissing »",
     "en": "Choroidal domes meet in the middle of the cavity: “kissing” configuration"
    },
    "decisive": true
   },
   {
    "x": 22,
    "y": 27,
    "r": 4.0,
    "label": {
     "fr": "Calibre 12,04 mm sur l’épaisseur du soulèvement",
     "en": "12.04 mm caliper across the elevation"
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
  "svg": "<svg viewBox=\"0 0 400 300\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" font-family=\"system-ui,-apple-system,Segoe UI,sans-serif\"><rect width=\"400\" height=\"300\" rx=\"10\" fill=\"#f7f6f2\"/><text x=\"200\" y=\"27\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"600\" fill=\"#2b2a26\">Membrane en V · V-shaped membrane</text><path d=\"M28 150 L372 36 A360 360 0 0 1 372 264 Z\" fill=\"#5d5d5d\"/><circle cx=\"170\" cy=\"150\" r=\"105\" fill=\"#141414\"/><path d=\"M240 72 A105 105 0 0 1 240 228\" fill=\"none\" stroke=\"#d8d8d8\" stroke-width=\"3\"/><path d=\"M274 142 L274 158 L372 175 L372 125 Z\" fill=\"#1b1b1b\"/><path d=\"M273 150 Q200 118 116 62 M273 150 Q200 182 116 238\" fill=\"none\" stroke=\"#fafafa\" stroke-width=\"4.5\"/><rect x=\"292\" y=\"40\" width=\"96\" height=\"62\" rx=\"4\" fill=\"#f7f6f2\" stroke=\"#8a8578\"/><path d=\"M298 92 L340 92 L343 46 L346 92 L384 92\" fill=\"none\" stroke=\"#1f6f8b\" stroke-width=\"2\"/><text x=\"343\" y=\"56\" font-size=\"8\" fill=\"#c0392b\" text-anchor=\"start\" dx=\"5\">100 %</text><text x=\"300\" y=\"52\" font-size=\"8\" fill=\"#2b2a26\">A-scan</text><text x=\"200\" y=\"285\" text-anchor=\"middle\" font-size=\"10\" fill=\"#2b2a26\">membrane épaisse, très brillante, peu mobile · thick, very bright, little mobility</text><text x=\"394\" y=\"10\" text-anchor=\"end\" font-size=\"7.5\" fill=\"#8a8578\">schéma · schematic</text></svg>",
  "alt": {
   "fr": "Schéma d’échographie B : membrane épaisse en V insérée à la papille, avec encart A-scan montrant un pic de 100 %.",
   "en": "B-scan schematic: thick V-shaped membrane inserting at the disc, with an A-scan inset showing a 100% spike."
  },
  "hotspots": [
   {
    "x": 68,
    "y": 50,
    "r": 4,
    "label": {
     "fr": "Pointe du V insérée sur la papille (ombre du nerf) : rétine décollée",
     "en": "Apex of the V inserting on the disc (nerve shadow): detached retina"
    },
    "decisive": true
   },
   {
    "x": 42,
    "y": 33,
    "r": 6,
    "label": {
     "fr": "Membrane épaisse, très réflective, vers l’ora",
     "en": "Thick, highly reflective membrane toward the ora"
    }
   },
   {
    "x": 81,
    "y": 50,
    "r": 5,
    "label": {
     "fr": "Ombre du nerf optique",
     "en": "Optic nerve shadow"
    }
   },
   {
    "x": 86,
    "y": 18,
    "r": 5,
    "label": {
     "fr": "A-scan : pic de 100 % sur la membrane",
     "en": "A-scan: 100% spike on the membrane"
    }
   }
  ],
  "credit": {
   "fr": "Schéma original · Ocelle, non tiré d’un patient réel.",
   "en": "Original schematic · Ocelle, not from a real patient."
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
   "fr": "Schéma original · Ocelle, non tiré d’un patient réel.",
   "en": "Original schematic · Ocelle, not from a real patient."
  },
  "license": "original",
  "schematic": true
 },
 "m-ascan-2": {
  "kind": "photo",
  "photo": "OPH-210",
  "alt": {
   "fr": "Cataracte mature blanche de l’œil droit (à gauche de l’image).",
   "en": "White mature cataract in the right eye (left of image)."
  },
  "hotspots": [
   {
    "x": 20.5,
    "y": 55,
    "r": 3,
    "label": {
     "fr": "Pupille blanche : lumière bloquée → biométrie optique impossible; passer à l’échographie A (immersion)",
     "en": "White pupil: light blocked → optical biometry impossible; switch to ultrasound A-scan (immersion)"
    },
    "decisive": true
   }
  ],
  "credit": {
   "fr": "EyeRounds.org, University of Iowa (CC BY-NC-ND 3.0). Image non modifiée.",
   "en": "EyeRounds.org, University of Iowa (CC BY-NC-ND 3.0). Image unmodified."
  },
  "license": "CC BY-NC-ND 3.0",
  "source": "https://webeye.ophth.uiowa.edu/eyeforum/atlas/pages/Mature-Cataract.html"
 },
 "m-ascan-3": {
  "kind": "svg",
  "svg": "<svg viewBox=\"0 0 400 300\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" font-family=\"system-ui,-apple-system,Segoe UI,sans-serif\"><rect width=\"400\" height=\"300\" rx=\"10\" fill=\"#f7f6f2\"/><text x=\"200\" y=\"27\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"600\" fill=\"#2b2a26\">Contact : compression cornéenne · Corneal compression</text><g transform=\"translate(0,-10)\"><text x=\"330\" y=\"70\" font-size=\"10\" fill=\"#2b2a26\">Immersion</text><path d=\"M20 120 L22 120 L28 50 L34 120 L118 120 L122 60 L126 120 L172 120 L175 80 L178 120 L298 120 L300 50 L302 120 L385 120\" fill=\"none\" stroke=\"#1f6f8b\" stroke-width=\"2\"/><path d=\"M28 132 L118 132\" stroke=\"#2b2a26\"/><text x=\"73\" y=\"145\" font-size=\"9\" text-anchor=\"middle\" fill=\"#2b2a26\">CA · ACD</text></g><g transform=\"translate(0,95)\"><text x=\"330\" y=\"70\" font-size=\"10\" fill=\"#c0392b\">Contact</text><path d=\"M20 120 L22 120 L28 50 L34 120 L104 120 L108 60 L112 120 L158 120 L161 80 L164 120 L284 120 L286 50 L288 120 L385 120\" fill=\"none\" stroke=\"#c0392b\" stroke-width=\"2\"/><path d=\"M28 132 L104 132\" stroke=\"#c0392b\"/><text x=\"66\" y=\"145\" font-size=\"9\" text-anchor=\"middle\" fill=\"#c0392b\">CA plus courte · shorter ACD</text><path d=\"M286 140 L300 140\" stroke=\"#c0392b\" stroke-width=\"2\"/><text x=\"330\" y=\"150\" font-size=\"9\" text-anchor=\"middle\" fill=\"#c0392b\">LA sous-estimée</text></g><text x=\"394\" y=\"10\" text-anchor=\"end\" font-size=\"7.5\" fill=\"#8a8578\">schéma · schematic</text><g transform=\"translate(150,138)\"><rect x=\"0\" y=\"-6\" width=\"34\" height=\"12\" rx=\"3\" fill=\"#8a8578\"/><path d=\"M34 -16 Q38 0 34 16\" stroke=\"#c0392b\" fill=\"none\" stroke-width=\"2.5\"/><path d=\"M44 -16 Q56 0 44 16\" stroke=\"#8a8578\" fill=\"none\" stroke-dasharray=\"2 2\"/><text x=\"62\" y=\"0\" font-size=\"8.5\" fill=\"#c0392b\">sonde qui enfonce la cornée</text><text x=\"62\" y=\"11\" font-size=\"8.5\" fill=\"#c0392b\">probe indenting the cornea</text></g></svg>",
  "alt": {
   "fr": "Schéma : deux tracés A-scan du même œil; en contact, la chambre antérieure est plus courte qu’en immersion (cornée comprimée).",
   "en": "Schematic: two A-scan traces of the same eye; with contact the anterior chamber is shorter than with immersion (corneal compression)."
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
   "fr": "Schéma original · Ocelle, non tiré d’un patient réel.",
   "en": "Original schematic · Ocelle, not from a real patient."
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
   "fr": "Schéma original · Ocelle, non tiré d’un patient réel.",
   "en": "Original schematic · Ocelle, not from a real patient."
  },
  "license": "original",
  "schematic": true
 },
 "m-ascan-5": {
  "kind": "svg",
  "svg": "<svg viewBox=\"0 0 400 300\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" font-family=\"system-ui,-apple-system,Segoe UI,sans-serif\"><rect width=\"400\" height=\"300\" rx=\"10\" fill=\"#f7f6f2\"/><text x=\"200\" y=\"27\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"600\" fill=\"#2b2a26\">Biométrie des deux yeux · Biometry, both eyes</text><rect x=\"40\" y=\"50\" width=\"140\" height=\"120\" rx=\"8\" fill=\"#ffffff\" stroke=\"#c9c4b8\"/><rect x=\"220\" y=\"50\" width=\"140\" height=\"120\" rx=\"8\" fill=\"#ffffff\" stroke=\"#c9c4b8\"/><text x=\"110\" y=\"78\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"700\" fill=\"#2b2a26\">OD</text><text x=\"290\" y=\"78\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"700\" fill=\"#2b2a26\">OG · OS</text><text x=\"110\" y=\"112\" text-anchor=\"middle\" font-size=\"11\" fill=\"#5c5850\">Longueur axiale</text><text x=\"290\" y=\"112\" text-anchor=\"middle\" font-size=\"11\" fill=\"#5c5850\">Axial length</text><text x=\"110\" y=\"145\" text-anchor=\"middle\" font-size=\"20\" font-weight=\"700\" fill=\"#1f6f8b\">23,42 mm</text><text x=\"290\" y=\"145\" text-anchor=\"middle\" font-size=\"20\" font-weight=\"700\" fill=\"#1f6f8b\">24,31 mm</text><text x=\"200\" y=\"205\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"700\" fill=\"#c0392b\">Δ = 0,89 mm</text><text x=\"200\" y=\"228\" text-anchor=\"middle\" font-size=\"10\" fill=\"#2b2a26\">réfraction semblable aux deux yeux · similar refraction in both eyes</text><text x=\"394\" y=\"10\" text-anchor=\"end\" font-size=\"7.5\" fill=\"#8a8578\">schéma · schematic</text></svg>",
  "alt": {
   "fr": "Schéma : longueurs axiales des deux yeux (23,42 et 24,31 mm), écart de 0,89 mm.",
   "en": "Schematic: axial lengths of both eyes (23.42 and 24.31 mm), difference 0.89 mm."
  },
  "hotspots": [
   {
    "x": 68,
    "y": 67,
    "r": 5,
    "label": {
     "fr": "Écart interoculaire 0,89 mm sans anisométropie → erreur de mesure probable",
     "en": "Inter-eye difference 0.89 mm without anisometropia → probable measurement error"
    },
    "decisive": true
   },
   {
    "x": 45,
    "y": 46,
    "r": 4,
    "label": {
     "fr": "OD 23,42 mm",
     "en": "OD 23.42 mm"
    }
   },
   {
    "x": 91,
    "y": 46,
    "r": 4,
    "label": {
     "fr": "OG 24,31 mm",
     "en": "OS 24.31 mm"
    }
   }
  ],
  "credit": {
   "fr": "Schéma original · Ocelle, non tiré d’un patient réel.",
   "en": "Original schematic · Ocelle, not from a real patient."
  },
  "license": "original",
  "schematic": true
 },
 "m-ascan-6": {
  "kind": "svg",
  "svg": "<svg viewBox=\"0 0 400 300\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" font-family=\"system-ui,-apple-system,Segoe UI,sans-serif\"><rect width=\"400\" height=\"300\" rx=\"10\" fill=\"#f7f6f2\"/><text x=\"200\" y=\"27\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"600\" fill=\"#2b2a26\">Huile de silicone · Silicone oil</text><circle cx=\"130\" cy=\"160\" r=\"92\" fill=\"#f3d36b\" stroke=\"#2b2a26\" stroke-width=\"2\"/><path d=\"M44 125 Q22 160 44 195\" fill=\"#dfe9ee\" stroke=\"#2b2a26\" stroke-width=\"2\"/><ellipse cx=\"66\" cy=\"160\" rx=\"14\" ry=\"34\" fill=\"#e8e3d6\" stroke=\"#2b2a26\"/><path d=\"M196 96 A92 92 0 0 1 196 224\" fill=\"none\" stroke=\"#c0392b\" stroke-width=\"3\"/><text x=\"140\" y=\"164\" text-anchor=\"middle\" font-size=\"10\" fill=\"#5a4500\">huile · oil</text><path d=\"M30 160 L222 160\" stroke=\"#1f6f8b\" stroke-dasharray=\"4 3\"/><rect x=\"240\" y=\"70\" width=\"150\" height=\"150\" rx=\"8\" fill=\"#ffffff\" stroke=\"#c9c4b8\"/><g font-size=\"10\" fill=\"#2b2a26\"><text x=\"250\" y=\"92\">Réglée · set : 1550 m/s</text><text x=\"250\" y=\"110\" fill=\"#8a6d1f\">Huile · oil : ≈ 980 m/s</text><text x=\"250\" y=\"138\" font-weight=\"700\">distance = vitesse × temps</text><text x=\"250\" y=\"152\" fill=\"#5c5850\">distance = speed × time</text><text x=\"250\" y=\"178\">son lent → temps long</text><text x=\"250\" y=\"192\">→ LA surestimée</text><text x=\"250\" y=\"208\" fill=\"#5c5850\">AL overestimated</text></g><text x=\"394\" y=\"10\" text-anchor=\"end\" font-size=\"7.5\" fill=\"#8a8578\">schéma · schematic</text></svg>",
  "alt": {
   "fr": "Schéma : œil dont la cavité vitréenne est remplie d’huile de silicone; encart sur la vitesse du son et la formule distance = vitesse × temps.",
   "en": "Schematic: eye with a silicone-oil-filled vitreous cavity; inset on sound velocity and distance = speed × time."
  },
  "hotspots": [
   {
    "x": 37,
    "y": 53,
    "r": 9,
    "label": {
     "fr": "Cavité vitréenne remplie d’huile : le son y va à ≈ 980 m/s au lieu de ≈ 1532 m/s",
     "en": "Oil-filled vitreous cavity: sound travels at ≈ 980 m/s instead of ≈ 1532 m/s"
    },
    "decisive": true
   },
   {
    "x": 79,
    "y": 47,
    "r": 9,
    "label": {
     "fr": "Si l’appareil calcule à 1550 m/s, l’écho tardif est converti en œil trop long",
     "en": "If the device assumes 1550 m/s, the late echo is converted into an eye that is too long"
    }
   },
   {
    "x": 51,
    "y": 53,
    "r": 4,
    "label": {
     "fr": "Rétine",
     "en": "Retina"
    }
   }
  ],
  "credit": {
   "fr": "Schéma original · Ocelle, non tiré d’un patient réel.",
   "en": "Original schematic · Ocelle, not from a real patient."
  },
  "license": "original",
  "schematic": true
 },
 "m-ascan-7": {
  "kind": "svg",
  "svg": "<svg viewBox=\"0 0 400 300\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" font-family=\"system-ui,-apple-system,Segoe UI,sans-serif\"><rect width=\"400\" height=\"300\" rx=\"10\" fill=\"#f7f6f2\"/><text x=\"200\" y=\"27\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"600\" fill=\"#2b2a26\">A-scan standardisé · Standardised A-scan</text><line x1=\"20\" y1=\"240\" x2=\"385\" y2=\"240\" stroke=\"#8a8578\"/><text x=\"20\" y=\"256\" font-size=\"9\" fill=\"#5c5850\">temps → profondeur · time → depth</text><path d=\"M20 240 L22 240 L30 50 L36 240 L60 240 L62 40 L66 240 L72 240 L74 150 L78 240 L84 240 L86 160 L90 240 L96 240 L98 168 L102 240 L108 240 L110 178 L114 240 L120 240 L122 186 L126 240 L132 240 L134 194 L138 240 L144 240 L146 200 L150 240 L156 240 L158 206 L162 240 L176 240 L178 46 L182 240 L192 240 L194 150 L198 240 L208 240 L210 175 L214 240 L224 240 L226 195 L230 240 L385 240\" fill=\"none\" stroke=\"#1f6f8b\" stroke-width=\"2\" stroke-linejoin=\"round\"/><path d=\"M62 120 L162 200\" stroke=\"#c0392b\" stroke-dasharray=\"4 3\"/><g font-size=\"9\" fill=\"#2b2a26\" text-anchor=\"middle\"><text x=\"66\" y=\"56\" text-anchor=\"start\">surface</text><text x=\"112\" y=\"130\">échos internes</text><text x=\"182\" y=\"56\" text-anchor=\"start\">sclère</text><text x=\"220\" y=\"140\">orbite</text></g><text x=\"394\" y=\"10\" text-anchor=\"end\" font-size=\"7.5\" fill=\"#8a8578\">schéma · schematic</text><g transform=\"translate(286,48)\"><rect x=\"-4\" y=\"-8\" width=\"104\" height=\"96\" rx=\"4\" fill=\"#f7f6f2\" stroke=\"#8a8578\"/><path d=\"M0 40 L96 4 L96 76 Z\" fill=\"#3a3a3a\"/><circle cx=\"58\" cy=\"40\" r=\"30\" fill=\"#111\"/><path d=\"M84 22 Q64 40 84 58 Z\" fill=\"#8a8a8a\"/><text x=\"2\" y=\"84\" font-size=\"8\" fill=\"#2b2a26\">B-scan : dôme</text></g></svg>",
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
   "fr": "Schéma original · Ocelle, non tiré d’un patient réel.",
   "en": "Original schematic · Ocelle, not from a real patient."
  },
  "license": "original",
  "schematic": true
 },
 "m-oct-1": {
  "kind": "svg",
  "svg": "<svg viewBox=\"0 0 400 300\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" font-family=\"system-ui,-apple-system,Segoe UI,sans-serif\"><rect width=\"400\" height=\"300\" rx=\"10\" fill=\"#f7f6f2\"/><text x=\"200\" y=\"27\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"600\" fill=\"#2b2a26\">Coupe OCT maculaire normale · Normal macular OCT</text><rect x=\"30\" y=\"30\" width=\"340\" height=\"210\" fill=\"#1a1a1a\"/><rect x=\"30\" y=\"80\" width=\"340\" height=\"12\" fill=\"#e6e6e6\"/><rect x=\"30\" y=\"92\" width=\"340\" height=\"10\" fill=\"#9a9a9a\"/><rect x=\"30\" y=\"102\" width=\"340\" height=\"10\" fill=\"#c6c6c6\"/><rect x=\"30\" y=\"112\" width=\"340\" height=\"12\" fill=\"#5a5a5a\"/><rect x=\"30\" y=\"124\" width=\"340\" height=\"8\" fill=\"#bdbdbd\"/><rect x=\"30\" y=\"132\" width=\"340\" height=\"30\" fill=\"#3e3e3e\"/><rect x=\"30\" y=\"162\" width=\"340\" height=\"2\" fill=\"#9c9c9c\"/><rect x=\"30\" y=\"166\" width=\"340\" height=\"5\" fill=\"#f2f2f2\"/><rect x=\"30\" y=\"173\" width=\"340\" height=\"3\" fill=\"#b0b0b0\"/><rect x=\"30\" y=\"177\" width=\"340\" height=\"9\" fill=\"#ffffff\"/><rect x=\"30\" y=\"186\" width=\"340\" height=\"54\" fill=\"#6e6e6e\"/><clipPath id=\"moct1-frame\"><rect x=\"30\" y=\"30\" width=\"340\" height=\"210\"/></clipPath><ellipse cx=\"200\" cy=\"78\" rx=\"58\" ry=\"54\" fill=\"#1a1a1a\" clip-path=\"url(#moct1-frame)\"/><text x=\"200\" y=\"262\" text-anchor=\"middle\" font-size=\"10\" fill=\"#2b2a26\">vitré en haut, choroïde en bas · vitreous on top, choroid below</text><text x=\"394\" y=\"10\" text-anchor=\"end\" font-size=\"7.5\" fill=\"#8a8578\">schéma · schematic</text></svg>",
  "alt": {
   "fr": "Schéma d’une coupe OCT maculaire normale avec dépression fovéolaire et bandes rétiniennes.",
   "en": "Schematic of a normal macular OCT B-scan with the foveal pit and retinal bands."
  },
  "hotspots": [
   {
    "x": 18,
    "y": 60.5,
    "r": 4,
    "label": {
     "fr": "Complexe EPR–membrane de Bruch : bande brillante la plus profonde, posée sur la choroïde",
     "en": "RPE–Bruch membrane complex: deepest bright band, resting on the choroid"
    },
    "decisive": true
   },
   {
    "x": 34,
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
    "x": 30,
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
    "x": 24,
    "y": 70,
    "r": 4,
    "label": {
     "fr": "Choroïde",
     "en": "Choroid"
    }
   }
  ],
  "credit": {
   "fr": "Schéma original · Ocelle, non tiré d’un patient réel.",
   "en": "Original schematic · Ocelle, not from a real patient."
  },
  "license": "original",
  "schematic": true
 },
 "m-oct-2": {
  "kind": "photo",
  "photo": "OPH-011",
  "alt": {
   "fr": "Cliché infrarouge (ligne verte = coupe) et OCT vertical : traction vitréomaculaire avec kystes intrarétiniens.",
   "en": "Infrared image (green line = scan) and vertical OCT: vitreomacular traction with intraretinal cysts."
  },
  "hotspots": [
   {
    "x": 69.5,
    "y": 45,
    "r": 3,
    "label": {
     "fr": "Hyaloïde postérieure attachée au toit de la fovéa, qu’elle soulève : traction vitréomaculaire",
     "en": "Posterior hyaloid attached to the foveal roof, lifting it: vitreomacular traction"
    },
    "decisive": true
   },
   {
    "x": 61,
    "y": 24,
    "r": 3,
    "label": {
     "fr": "Arc de hyaloïde décollée dans le vitré",
     "en": "Arc of detached hyaloid in the vitreous"
    }
   },
   {
    "x": 72,
    "y": 17,
    "r": 3,
    "label": {
     "fr": "Second arc de hyaloïde qui converge vers la fovéa",
     "en": "Second hyaloid arc converging on the fovea"
    }
   },
   {
    "x": 70,
    "y": 59,
    "r": 3,
    "label": {
     "fr": "Kystes intrarétiniens hyporéflectifs sous la fovéa soulevée",
     "en": "Hyporeflective intraretinal cysts under the lifted fovea"
    }
   },
   {
    "x": 89,
    "y": 78,
    "r": 3,
    "label": {
     "fr": "EPR continu",
     "en": "Continuous RPE"
    }
   },
   {
    "x": 19.6,
    "y": 50,
    "r": 3,
    "label": {
     "fr": "Ligne verte : position de la coupe",
     "en": "Green line: scan position"
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
    "x": 48,
    "y": 25,
    "r": 3.5,
    "label": {
     "fr": "Points hyperréflectifs (exsudats) avec ombre portée",
     "en": "Hyperreflective dots (exudates) with shadowing"
    }
   },
   {
    "x": 65,
    "y": 25,
    "r": 3.5,
    "label": {
     "fr": "Autres points hyperréflectifs avec ombre",
     "en": "More hyperreflective dots with shadowing"
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
  "photo": "OPH-191",
  "alt": {
   "fr": "Rapport Cirrus : carte de déviation RNFL, quadrants et heures, photo de la papille et déviation corrigée du champ visuel.",
   "en": "Cirrus report: RNFL deviation map, quadrants and clock hours, optic disc photo and visual field pattern deviation."
  },
  "hotspots": [
   {
    "x": 78.5,
    "y": 9,
    "r": 3.5,
    "label": {
     "fr": "Quadrant supérieur 58 µm en ROUGE (< 1 %)",
     "en": "Superior quadrant 58 µm in RED (< 1%)"
    },
    "decisive": true
   },
   {
    "x": 78.5,
    "y": 19.5,
    "r": 3.5,
    "label": {
     "fr": "Quadrant inférieur 53 µm en ROUGE",
     "en": "Inferior quadrant 53 µm in RED"
    },
    "decisive": true
   },
   {
    "x": 71.5,
    "y": 14.3,
    "r": 3.5,
    "label": {
     "fr": "Piège : temporal 50 µm (plus petit chiffre) mais VERT — la norme temporale est plus basse",
     "en": "Trap: temporal 50 µm (smallest number) but GREEN — the temporal norm is lower"
    }
   },
   {
    "x": 24,
    "y": 39,
    "r": 6.0,
    "label": {
     "fr": "Carte de déviation : zones rouges arciformes inférieures",
     "en": "Deviation map: inferior arcuate red areas"
    }
   },
   {
    "x": 15,
    "y": 12,
    "r": 5.0,
    "label": {
     "fr": "Zones rouges supérieures",
     "en": "Superior red areas"
    }
   },
   {
    "x": 73,
    "y": 75,
    "r": 7.0,
    "label": {
     "fr": "Champ visuel (déviation corrigée) : défaut supérieur",
     "en": "Visual field (pattern deviation): superior defect"
    }
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
    "x": 17,
    "y": 82,
    "r": 3,
    "label": {
     "fr": "Angle fermé : l’iris touche la cornée périphérique",
     "en": "Closed angle: iris touches the peripheral cornea"
    },
    "decisive": true
   },
   {
    "x": 84,
    "y": 80,
    "r": 3,
    "label": {
     "fr": "Angle fermé de l’autre côté",
     "en": "Closed angle on the other side"
    },
    "decisive": true
   },
   {
    "x": 29,
    "y": 64,
    "r": 3,
    "label": {
     "fr": "Iris bombé vers l’avant, accolé à la face postérieure de la cornée",
     "en": "Iris bowed forward, apposed to the posterior cornea"
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
 "m-gonio-1": {
  "kind": "photo",
  "photo": "OPH-292",
  "alt": {
   "fr": "Technique de gonioscopie : verre de gonioscopie tenu sur l’œil, à la lampe à fente (flèche).",
   "en": "Gonioscopy technique: gonioscopy lens held on the eye at the slit lamp (arrow)."
  },
  "hotspots": [
   {
    "x": 49,
    "y": 50,
    "r": 5.0,
    "label": {
     "fr": "Verre de gonioscopie appliqué sur la cornée (miroir : contourne la réflexion totale interne)",
     "en": "Gonioscopy lens on the cornea (mirror: bypasses total internal reflection)"
    },
    "decisive": true
   },
   {
    "x": 70,
    "y": 40,
    "r": 7.0,
    "label": {
     "fr": "Lampe à fente",
     "en": "Slit lamp"
    }
   },
   {
    "x": 40,
    "y": 62,
    "r": 7.0,
    "label": {
     "fr": "Main de l’examinateur qui stabilise le verre",
     "en": "Examiner’s hand stabilising the lens"
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
 "m-gonio-2": {
  "kind": "svg",
  "labelsAnswer": true,
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
    }
   },
   {
    "x": 85,
    "y": 41,
    "r": 3,
    "label": {
     "fr": "Éperon scléral : bande blanche, repère clé",
     "en": "Scleral spur: white band, key landmark"
    },
    "decisive": true
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
   "fr": "Schéma original · Ocelle, non tiré d’un patient réel.",
   "en": "Original schematic · Ocelle, not from a real patient."
  },
  "license": "original",
  "schematic": true
 },
 "m-gonio-3": {
  "kind": "svg",
  "svg": "<svg viewBox=\"0 0 400 300\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" font-family=\"system-ui,-apple-system,Segoe UI,sans-serif\"><rect width=\"400\" height=\"300\" rx=\"10\" fill=\"#f7f6f2\"/><text x=\"200\" y=\"27\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"600\" fill=\"#2b2a26\">Gonioscopie dynamique (indentation) · Indentation gonioscopy</text><g><rect x=\"20\" y=\"50\" width=\"170\" height=\"180\" rx=\"6\" fill=\"#2a2420\"/><rect x=\"20\" y=\"50\" width=\"170\" height=\"40\" fill=\"#cfd8dc\"/><rect x=\"20\" y=\"90\" width=\"170\" height=\"5\" fill=\"#fffbe6\"/><path d=\"M20 95 Q105 86 190 95 L190 230 L20 230 Z\" fill=\"#8a5a3b\"/></g><g><rect x=\"210\" y=\"50\" width=\"170\" height=\"180\" rx=\"6\" fill=\"#2a2420\"/><rect x=\"210\" y=\"50\" width=\"170\" height=\"40\" fill=\"#cfd8dc\"/><rect x=\"210\" y=\"90\" width=\"170\" height=\"5\" fill=\"#fffbe6\"/><rect x=\"210\" y=\"95\" width=\"170\" height=\"13\" fill=\"#b9a68f\"/><rect x=\"210\" y=\"108\" width=\"170\" height=\"12\" fill=\"#6d4c35\"/><rect x=\"210\" y=\"120\" width=\"170\" height=\"8\" fill=\"#f4f1ea\"/><rect x=\"210\" y=\"128\" width=\"170\" height=\"12\" fill=\"#4a3b33\"/><path d=\"M210 140 Q295 146 380 140 L380 230 L210 230 Z\" fill=\"#8a5a3b\"/></g><text x=\"105\" y=\"44\" text-anchor=\"middle\" font-size=\"10\" fill=\"#2b2a26\">1 · sans indentation</text><text x=\"295\" y=\"44\" text-anchor=\"middle\" font-size=\"10\" fill=\"#2b2a26\">2 · avec indentation</text><text x=\"105\" y=\"250\" text-anchor=\"middle\" font-size=\"9\" fill=\"#2b2a26\">iris convexe : Schwalbe seul visible</text><text x=\"105\" y=\"262\" text-anchor=\"middle\" font-size=\"9\" fill=\"#5c5850\">convex iris: only Schwalbe visible</text><text x=\"295\" y=\"250\" text-anchor=\"middle\" font-size=\"9\" fill=\"#2b2a26\">l’iris recule : éperon visible, pas de synéchie</text><text x=\"295\" y=\"262\" text-anchor=\"middle\" font-size=\"9\" fill=\"#5c5850\">iris falls back: spur visible, no synechia</text><text x=\"200\" y=\"282\" text-anchor=\"middle\" font-size=\"9\" fill=\"#5c5850\">fermeture apposée (non synéchiale) · appositional (non-synechial) closure</text><text x=\"394\" y=\"10\" text-anchor=\"end\" font-size=\"7.5\" fill=\"#8a8578\">schéma · schematic</text></svg>",
  "alt": {
   "fr": "Schéma en deux temps : sans indentation l’iris convexe ne laisse voir que la ligne de Schwalbe; avec indentation l’iris recule et l’éperon scléral apparaît.",
   "en": "Two-step schematic: without indentation the convex iris shows only Schwalbe’s line; with indentation the iris falls back and the scleral spur appears."
  },
  "hotspots": [
   {
    "x": 74,
    "y": 41,
    "r": 4,
    "label": {
     "fr": "Éperon scléral dévoilé par l’indentation : angle apposé, sans synéchie",
     "en": "Scleral spur revealed by indentation: appositional angle, no synechia"
    },
    "decisive": true
   },
   {
    "x": 26,
    "y": 31,
    "r": 4,
    "label": {
     "fr": "Panneau 1 : seule la ligne de Schwalbe est visible",
     "en": "Panel 1: only Schwalbe’s line is visible"
    }
   },
   {
    "x": 26,
    "y": 55,
    "r": 8,
    "label": {
     "fr": "Iris convexe qui masque l’angle",
     "en": "Convex iris hiding the angle"
    }
   },
   {
    "x": 74,
    "y": 37.5,
    "r": 3,
    "label": {
     "fr": "Trabéculum pigmenté",
     "en": "Pigmented meshwork"
    }
   }
  ],
  "credit": {
   "fr": "Schéma original · Ocelle, non tiré d’un patient réel.",
   "en": "Original schematic · Ocelle, not from a real patient."
  },
  "license": "original",
  "schematic": true
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
    "x": 38.5,
    "y": 59,
    "r": 4,
    "label": {
     "fr": "Pointe de la flèche noire : synéchie antérieure périphérique haute",
     "en": "Black arrow tip: high peripheral anterior synechia"
    },
    "decisive": true
   },
   {
    "x": 37,
    "y": 34,
    "r": 4,
    "label": {
     "fr": "Flèche blanche (haut) : début des procès ciliaires visibles",
     "en": "White arrow (top): start of visible ciliary processes"
    }
   },
   {
    "x": 56,
    "y": 68,
    "r": 4,
    "label": {
     "fr": "Flèche blanche (bas) : fin des procès ciliaires visibles",
     "en": "White arrow (bottom): end of visible ciliary processes"
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
  "photo": "OPH-156",
  "alt": {
   "fr": "Gonioscopie dans un glaucome pseudoexfoliatif : ligne de Sampaolesi (pointe de flèche).",
   "en": "Gonioscopy in pseudoexfoliation glaucoma: Sampaolesi line (arrowhead)."
  },
  "hotspots": [
   {
    "x": 58.5,
    "y": 35,
    "r": 5,
    "label": {
     "fr": "Pointe de flèche : ligne de Sampaolesi, pigment ondulé en avant de Schwalbe",
     "en": "Arrowhead: Sampaolesi line, wavy pigment anterior to Schwalbe’s line"
    },
    "decisive": true
   },
   {
    "x": 45,
    "y": 42,
    "r": 6,
    "label": {
     "fr": "Bande trabéculaire très pigmentée, juste en dessous",
     "en": "Heavily pigmented trabecular band just below"
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
 "m-gonio-6": {
  "kind": "photo",
  "photo": "OPH-172",
  "alt": {
   "fr": "Gonioscopie après contusion (balle de racquetball) : récession de l’angle et fente de cyclodialyse.",
   "en": "Gonioscopy after blunt trauma (racquetball): angle recession and cyclodialysis cleft."
  },
  "hotspots": [
   {
    "x": 56,
    "y": 62,
    "r": 5,
    "label": {
     "fr": "Large bande brune de face du corps ciliaire : récession de l’angle",
     "en": "Broad brown band of ciliary body face: angle recession"
    },
    "decisive": true
   },
   {
    "x": 52,
    "y": 81,
    "r": 5,
    "label": {
     "fr": "Large bande blanche à la jonction corps ciliaire / éperon : fente de cyclodialyse",
     "en": "Broad white band at the ciliary body / spur junction: cyclodialysis cleft"
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
 "m-gonio-7": {
  "kind": "photo",
  "photo": "OPH-174",
  "alt": {
   "fr": "Deux vues gonioscopiques de l’angle nasal de l’œil gauche, hypotonie après chirurgie de cataracte (fente de cyclodialyse).",
   "en": "Two gonioscopic views of the nasal angle of the left eye, hypotony after cataract surgery (cyclodialysis cleft)."
  },
  "hotspots": [
   {
    "x": 82,
    "y": 69,
    "r": 3,
    "label": {
     "fr": "Flèches blanches : large fente de cyclodialyse nasale (communication chambre antérieure ↔ espace suprachoroïdien)",
     "en": "White arrows: large nasal cyclodialysis cleft (anterior chamber ↔ suprachoroidal space)"
    },
    "decisive": true
   },
   {
    "x": 83,
    "y": 58.5,
    "r": 3,
    "label": {
     "fr": "Flèche blanche (haut)",
     "en": "White arrow (top)"
    }
   },
   {
    "x": 81,
    "y": 80,
    "r": 3,
    "label": {
     "fr": "Flèche blanche (bas)",
     "en": "White arrow (bottom)"
    }
   },
   {
    "x": 25,
    "y": 55,
    "r": 3.6,
    "label": {
     "fr": "Vue de gauche : même angle, plus faible grossissement",
     "en": "Left view: same angle, lower magnification"
    }
   }
  ],
  "credit": {
   "fr": "EyeRounds.org, University of Iowa (CC BY-NC-ND 3.0). Image non modifiée.",
   "en": "EyeRounds.org, University of Iowa (CC BY-NC-ND 3.0). Image unmodified."
  },
  "license": "CC BY-NC-ND 3.0",
  "source": "https://webeye.ophth.uiowa.edu/eyeforum/atlas/pages/angle-recession-cyclodialysis-cleft.htm"
 },
 "m-fondoeil-1": {
  "kind": "svg",
  "svg": "<svg viewBox=\"0 0 400 300\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" font-family=\"system-ui,-apple-system,Segoe UI,sans-serif\"><rect width=\"400\" height=\"300\" rx=\"10\" fill=\"#f7f6f2\"/><text x=\"200\" y=\"27\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"600\" fill=\"#2b2a26\">Image inversée (indirect) · Inverted image</text><circle cx=\"105\" cy=\"145\" r=\"78\" fill=\"#e9a07a\"/><circle cx=\"295\" cy=\"145\" r=\"78\" fill=\"#e9a07a\"/><circle cx=\"135\" cy=\"145\" r=\"10\" fill=\"#fff1d6\"/><circle cx=\"265\" cy=\"145\" r=\"10\" fill=\"#fff1d6\"/><path transform=\"translate(70,190) rotate(0)\" d=\"M-9 -6 Q0 14 9 -6 L5 -7 Q0 6 -5 -7 Z\" fill=\"#c0392b\"/><path transform=\"translate(330,100) rotate(180)\" d=\"M-9 -6 Q0 14 9 -6 L5 -7 Q0 6 -5 -7 Z\" fill=\"#c0392b\"/><path d=\"M188 145 L212 145\" stroke=\"#2b2a26\" stroke-width=\"2\"/><path d=\"M206 139 L214 145 L206 151\" fill=\"none\" stroke=\"#2b2a26\" stroke-width=\"2\"/><text x=\"200\" y=\"135\" text-anchor=\"middle\" font-size=\"10\" fill=\"#2b2a26\">180°</text><path d=\"M76 196 Q200 260 326 106\" fill=\"none\" stroke=\"#c0392b\" stroke-dasharray=\"3 3\"/><text x=\"105\" y=\"244\" text-anchor=\"middle\" font-size=\"10\" fill=\"#2b2a26\">Fond d’œil réel</text><text x=\"105\" y=\"257\" text-anchor=\"middle\" font-size=\"9\" fill=\"#5c5850\">real fundus</text><text x=\"295\" y=\"244\" text-anchor=\"middle\" font-size=\"10\" fill=\"#2b2a26\">Image vue (inversée)</text><text x=\"295\" y=\"257\" text-anchor=\"middle\" font-size=\"9\" fill=\"#5c5850\">image seen (inverted)</text><text x=\"200\" y=\"282\" text-anchor=\"middle\" font-size=\"9\" fill=\"#5c5850\">haut ↔ bas et gauche ↔ droite inversés · up/down and left/right reversed</text><text x=\"394\" y=\"10\" text-anchor=\"end\" font-size=\"7.5\" fill=\"#8a8578\">schéma · schematic</text></svg>",
  "alt": {
   "fr": "Schéma : à gauche le fond d’œil réel avec une déchirure en fer à cheval en bas à gauche; à droite l’image vue à l’ophtalmoscope indirect, tournée de 180° (déchirure en haut à droite).",
   "en": "Schematic: left, the real fundus with a horseshoe tear at lower left; right, the image seen with the indirect ophthalmoscope, rotated 180° (tear at upper right)."
  },
  "hotspots": [
   {
    "x": 17.5,
    "y": 63,
    "r": 5,
    "label": {
     "fr": "Position réelle de la déchirure : en bas à gauche",
     "en": "True position of the tear: lower left"
    },
    "decisive": true
   },
   {
    "x": 82.5,
    "y": 33,
    "r": 5,
    "label": {
     "fr": "Dans la lentille, la déchirure paraît en haut à droite",
     "en": "In the lens, the tear appears at upper right"
    }
   },
   {
    "x": 50,
    "y": 48,
    "r": 5,
    "label": {
     "fr": "Rotation de 180°",
     "en": "180° rotation"
    }
   }
  ],
  "credit": {
   "fr": "Schéma original · Ocelle, non tiré d’un patient réel.",
   "en": "Original schematic · Ocelle, not from a real patient."
  },
  "license": "original",
  "schematic": true
 },
 "m-fondoeil-2": {
  "kind": "photo",
  "photo": "OPH-003",
  "alt": {
   "fr": "Fond d’œil normal d’un enfant (œil droit) avec reflets brillants de la limitante interne.",
   "en": "Normal fundus of a child (right eye) with bright internal limiting membrane reflexes."
  },
  "hotspots": [
   {
    "x": 42,
    "y": 38,
    "r": 6.0,
    "label": {
     "fr": "Reflets brillants de la limitante interne autour de la macula : normaux chez l’enfant",
     "en": "Bright internal limiting membrane reflexes around the macula: normal in children"
    },
    "decisive": true
   },
   {
    "x": 53,
    "y": 86,
    "r": 5.0,
    "label": {
     "fr": "Reflets le long de l’arcade temporale inférieure",
     "en": "Reflexes along the inferior temporal arcade"
    }
   },
   {
    "x": 48.5,
    "y": 51.5,
    "r": 3,
    "label": {
     "fr": "Fovéa avec reflet fovéolaire",
     "en": "Fovea with foveal reflex"
    }
   },
   {
    "x": 77.5,
    "y": 50,
    "r": 5.0,
    "label": {
     "fr": "Papille rose, bords nets",
     "en": "Pink disc, sharp margins"
    }
   }
  ],
  "credit": {
   "fr": "EyeRounds.org, University of Iowa (CC BY-NC-ND 3.0). Image non modifiée.",
   "en": "EyeRounds.org, University of Iowa (CC BY-NC-ND 3.0). Image unmodified."
  },
  "license": "CC BY-NC-ND 3.0",
  "source": "https://webeye.ophth.uiowa.edu/eyeforum/atlas/pages/normal-fundus-child/index.htm"
 },
 "m-fondoeil-3": {
  "kind": "photo",
  "photo": "OPH-203",
  "alt": {
   "fr": "Rétinophotographie : papille glaucomateuse, rapport cup/disc ≈ 0,9.",
   "en": "Fundus photo: glaucomatous optic disc, cup-to-disc ratio ≈ 0.9."
  },
  "hotspots": [
   {
    "x": 51,
    "y": 51,
    "r": 6.0,
    "label": {
     "fr": "Excavation blanche qui remplit presque tout le disque (C/D ≈ 0,9)",
     "en": "White cup filling almost the whole disc (C/D ≈ 0.9)"
    },
    "decisive": true
   },
   {
    "x": 52,
    "y": 41.5,
    "r": 3,
    "label": {
     "fr": "Fin liseré d’anneau restant",
     "en": "Thin remaining rim"
    }
   },
   {
    "x": 44.5,
    "y": 58,
    "r": 4.0,
    "label": {
     "fr": "Atrophie péripapillaire pâle",
     "en": "Pale peripapillary atrophy"
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
 "m-fondoeil-4": {
  "kind": "photo",
  "photo": "OPH-189",
  "alt": {
   "fr": "Rétinophotographie : encoche inférieure de l’anneau neurorétinien (flèche).",
   "en": "Fundus photo: inferior notch of the neuroretinal rim (arrow)."
  },
  "hotspots": [
   {
    "x": 59.5,
    "y": 64.5,
    "r": 5,
    "label": {
     "fr": "Pointe de la flèche : encoche inférieure de l’anneau neurorétinien",
     "en": "Arrow tip: inferior notch of the neuroretinal rim"
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
 "m-fondoeil-5": {
  "kind": "photo",
  "photo": "OPH-219",
  "alt": {
   "fr": "Rétinophotographies des deux yeux : œdème papillaire marqué.",
   "en": "Fundus photos of both eyes: prominent papilledema."
  },
  "hotspots": [
   {
    "x": 24.5,
    "y": 43,
    "r": 4.1,
    "label": {
     "fr": "Papille très gonflée, bords effacés",
     "en": "Markedly swollen disc, blurred margins"
    },
    "decisive": true
   },
   {
    "x": 74.5,
    "y": 43,
    "r": 4.1,
    "label": {
     "fr": "Même aspect à l’autre œil : bilatéral",
     "en": "Same appearance in the other eye: bilateral"
    },
    "decisive": true
   },
   {
    "x": 17,
    "y": 30,
    "r": 3,
    "label": {
     "fr": "Hémorragies péripapillaires en flammèche",
     "en": "Flame-shaped peripapillary hemorrhages"
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
  "photo": "OPH-250",
  "alt": {
   "fr": "Occlusion de l’artère centrale de la rétine (œil droit) : pôle postérieur blanchâtre et tache rouge cerise.",
   "en": "Central retinal artery occlusion (right eye): whitened posterior pole and cherry-red spot."
  },
  "hotspots": [
   {
    "x": 51.5,
    "y": 54,
    "r": 3.5,
    "label": {
     "fr": "Tache rouge cerise : la fovéa (sans couches internes) garde la couleur de la choroïde au milieu de la rétine pâle",
     "en": "Cherry-red spot: the fovea (no inner layers) keeps the choroidal colour amid the pale retina"
    },
    "decisive": true
   },
   {
    "x": 67,
    "y": 27.5,
    "r": 4.0,
    "label": {
     "fr": "Plages blanches duveteuses le long de l’arcade supérieure (ischémie, nodules cotonneux)",
     "en": "Fluffy white patches along the superior arcade (ischemia, cotton-wool spots)"
    }
   },
   {
    "x": 62,
    "y": 47,
    "r": 5.0,
    "label": {
     "fr": "Rétine pâle, œdémateuse, du pôle postérieur",
     "en": "Pale, edematous posterior-pole retina"
    }
   },
   {
    "x": 81.5,
    "y": 50,
    "r": 4.0,
    "label": {
     "fr": "Papille",
     "en": "Optic disc"
    }
   }
  ],
  "credit": {
   "fr": "EyeRounds.org, University of Iowa (CC BY-NC-ND 3.0). Image non modifiée.",
   "en": "EyeRounds.org, University of Iowa (CC BY-NC-ND 3.0). Image unmodified."
  },
  "license": "CC BY-NC-ND 3.0",
  "source": "https://webeye.ophth.uiowa.edu/eyeforum/atlas/pages/CRAO/index.htm"
 },
 "m-fondoeil-7": {
  "kind": "photo",
  "photo": "OPH-252",
  "alt": {
   "fr": "Occlusion de la veine centrale de la rétine : hémorragies dans les quatre quadrants, veines tortueuses, nodules cotonneux, papille gonflée.",
   "en": "Central retinal vein occlusion: hemorrhages in all four quadrants, tortuous veins, cotton-wool spots, swollen disc."
  },
  "hotspots": [
   {
    "x": 31,
    "y": 39,
    "r": 7.0,
    "label": {
     "fr": "Papille gonflée entourée d’hémorragies en flammèche",
     "en": "Swollen disc surrounded by flame hemorrhages"
    },
    "decisive": true
   },
   {
    "x": 44,
    "y": 12,
    "r": 5.0,
    "label": {
     "fr": "Veine dilatée et tortueuse",
     "en": "Dilated, tortuous vein"
    }
   },
   {
    "x": 75,
    "y": 45,
    "r": 7.0,
    "label": {
     "fr": "Hémorragies jusqu’en périphérie temporale",
     "en": "Hemorrhages out to the temporal periphery"
    }
   },
   {
    "x": 28,
    "y": 24,
    "r": 4.0,
    "label": {
     "fr": "Nodules cotonneux (blancs) près de la papille",
     "en": "Cotton-wool spots (white) near the disc"
    }
   },
   {
    "x": 82,
    "y": 34,
    "r": 3,
    "label": {
     "fr": "Nodule cotonneux",
     "en": "Cotton-wool spot"
    }
   }
  ],
  "credit": {
   "fr": "EyeRounds.org, University of Iowa (CC BY-NC-ND 3.0). Image non modifiée.",
   "en": "EyeRounds.org, University of Iowa (CC BY-NC-ND 3.0). Image unmodified."
  },
  "license": "CC BY-NC-ND 3.0",
  "source": "https://webeye.ophth.uiowa.edu/eyeforum/atlas/pages/CRVO/index.htm"
 },
 "m-fondoeil-8": {
  "kind": "photo",
  "photo": "OPH-287",
  "alt": {
   "fr": "Montage grand champ de l’œil gauche : décollement de rétine rhegmatogène avec macula décollée; flèches blanches sur la limite du décollement.",
   "en": "Wide-field montage of the left eye: rhegmatogenous retinal detachment, macula off; white arrows on the detachment border."
  },
  "hotspots": [
   {
    "x": 54.5,
    "y": 53,
    "r": 4.0,
    "label": {
     "fr": "Fovéa incluse dans la zone décollée (rétine soulevée, plis) : macula décollée",
     "en": "Fovea within the detached area (elevated, folded retina): macula off"
    },
    "decisive": true
   },
   {
    "x": 64,
    "y": 15,
    "r": 3,
    "label": {
     "fr": "Flèche : limite du décollement",
     "en": "Arrow: detachment border"
    }
   },
   {
    "x": 51,
    "y": 33,
    "r": 3,
    "label": {
     "fr": "Flèche : limite du décollement",
     "en": "Arrow: detachment border"
    }
   },
   {
    "x": 47.5,
    "y": 69,
    "r": 3,
    "label": {
     "fr": "Flèche : limite du décollement",
     "en": "Arrow: detachment border"
    }
   },
   {
    "x": 41,
    "y": 49,
    "r": 4.0,
    "label": {
     "fr": "Papille (rétine à plat de ce côté)",
     "en": "Optic disc (retina flat on this side)"
    }
   }
  ],
  "credit": {
   "fr": "EyeRounds.org, University of Iowa (CC BY-NC-ND 3.0). Image non modifiée.",
   "en": "EyeRounds.org, University of Iowa (CC BY-NC-ND 3.0). Image unmodified."
  },
  "license": "CC BY-NC-ND 3.0",
  "source": "https://webeye.ophth.uiowa.edu/eyeforum/atlas/pages/rhegmatogenous-ret-detach-macula-off.htm"
 },
 "m-cv-1": {
  "kind": "photo",
  "photo": "OPH-302",
  "alt": {
   "fr": "Rapport Humphrey 24-2 : OS à gauche, OD à droite (selon les en-têtes imprimés). Item centré sur OD.",
   "en": "Humphrey 24-2 report: OS on the left, OD on the right (per printed headers). Item focuses on OD."
  },
  "hotspots": [
   {
    "x": 57,
    "y": 12,
    "r": 3.9,
    "label": {
     "fr": "OD fiabilité : pertes de fixation 0/15, faux + 4 %, faux − 2 % → fiable",
     "en": "OD reliability: fixation losses 0/15, false + 4%, false − 2% → reliable"
    },
    "decisive": true
   },
   {
    "x": 88,
    "y": 66,
    "r": 4.7,
    "label": {
     "fr": "OD : GHT dans les limites normales, MD −0,18 dB, PSD 1,72 dB",
     "en": "OD: GHT within normal limits, MD −0.18 dB, PSD 1.72 dB"
    },
    "decisive": true
   },
   {
    "x": 90,
    "y": 36,
    "r": 3.2,
    "label": {
     "fr": "OD : seule la tache aveugle sur l’échelle de gris",
     "en": "OD: only the blind spot on the grey scale"
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
  "photo": "OPH-302",
  "alt": {
   "fr": "Même rapport Humphrey 24-2 : moitié OS (gauche), glaucome sévère.",
   "en": "Same Humphrey 24-2 report: OS half (left), severe glaucoma."
  },
  "hotspots": [
   {
    "x": 44,
    "y": 69,
    "r": 3.9,
    "label": {
     "fr": "OS : MD −16,93 dB (p < 0,5 %), PSD 11,32 dB",
     "en": "OS: MD −16.93 dB (p < 0.5%), PSD 11.32 dB"
    },
    "decisive": true
   },
   {
    "x": 8,
    "y": 11,
    "r": 3.2,
    "label": {
     "fr": "Fiabilité OS : pertes de fixation 1/17, faux + 2 %, faux − 0 %",
     "en": "OS reliability: fixation losses 1/17, false + 2%, false − 0%"
    }
   },
   {
    "x": 24,
    "y": 82,
    "r": 4.7,
    "label": {
     "fr": "Déviation corrigée OS : défauts arciformes denses",
     "en": "OS pattern deviation: dense arcuate defects"
    }
   },
   {
    "x": 37,
    "y": 34,
    "r": 6.3,
    "label": {
     "fr": "Échelle de gris OS",
     "en": "OS grey scale"
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
 "m-cv-3": {
  "kind": "photo",
  "photo": "OPH-190",
  "alt": {
   "fr": "Champ visuel Humphrey de l’œil droit (échelle de gris et déviation corrigée) : déficit supérieur.",
   "en": "Humphrey visual field of the right eye (grey scale and pattern deviation): superior defect."
  },
  "hotspots": [
   {
    "x": 12,
    "y": 49,
    "r": 4.1,
    "label": {
     "fr": "Limite nette du défaut supérieur sur le méridien horizontal, côté nasal (marche nasale)",
     "en": "Sharp border of the superior defect along the horizontal meridian, nasal side (nasal step)"
    },
    "decisive": true
   },
   {
    "x": 73,
    "y": 37,
    "r": 5.7,
    "label": {
     "fr": "Déviation corrigée : grappe dense de points anormaux en supérieur",
     "en": "Pattern deviation: dense superior cluster of abnormal points"
    }
   },
   {
    "x": 42,
    "y": 57,
    "r": 3.2,
    "label": {
     "fr": "Tache aveugle",
     "en": "Blind spot"
    }
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
 "m-cv-4": {
  "kind": "photo",
  "photo": "OPH-293",
  "alt": {
   "fr": "Échelles de gris Humphrey annotées : A tache aveugle normale, B déficit arciforme, C déficit arciforme et marche nasale.",
   "en": "Annotated Humphrey grey scales: A normal blind spot, B arcuate defect, C arcuate defect and nasal step."
  },
  "hotspots": [
   {
    "x": 88,
    "y": 31,
    "r": 4,
    "label": {
     "fr": "Panneau B : tache aveugle à droite du centre (œil droit)",
     "en": "Panel B: blind spot right of centre (right eye)"
    },
    "decisive": true
   },
   {
    "x": 11,
    "y": 27,
    "r": 4,
    "label": {
     "fr": "Panneau A : tache aveugle à gauche (œil gauche)",
     "en": "Panel A: blind spot on the left (left eye)"
    }
   },
   {
    "x": 10,
    "y": 74,
    "r": 4,
    "label": {
     "fr": "Panneau C : tache aveugle à gauche (œil gauche)",
     "en": "Panel C: blind spot on the left (left eye)"
    }
   },
   {
    "x": 66,
    "y": 18,
    "r": 6,
    "label": {
     "fr": "Panneau B : déficit arciforme",
     "en": "Panel B: arcuate defect"
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
 "m-cv-5": {
  "kind": "photo",
  "photo": "OPH-283",
  "alt": {
   "fr": "Champs visuels de Goldmann des deux yeux : hémianopsie homonyme gauche (AVC occipital).",
   "en": "Goldmann visual fields of both eyes: left homonymous hemianopia (occipital stroke)."
  },
  "hotspots": [
   {
    "x": 26.5,
    "y": 45,
    "r": 3,
    "label": {
     "fr": "Isoptères coupés net au méridien vertical (œil gauche)",
     "en": "Isopters cut sharply at the vertical meridian (left eye)"
    },
    "decisive": true
   },
   {
    "x": 76,
    "y": 45,
    "r": 3,
    "label": {
     "fr": "Même coupure verticale à l’œil droit : hémianopsie homonyme gauche",
     "en": "Same vertical cut in the right eye: left homonymous hemianopia"
    },
    "decisive": true
   },
   {
    "x": 12,
    "y": 40,
    "r": 3,
    "label": {
     "fr": "Hémichamp gauche absent",
     "en": "Left hemifield missing"
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
 "m-cv-6": {
  "kind": "svg",
  "labelsAnswer": true,
  "svg": "<svg viewBox=\"0 0 400 300\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" font-family=\"system-ui,-apple-system,Segoe UI,sans-serif\"><rect width=\"400\" height=\"300\" rx=\"10\" fill=\"#f7f6f2\"/><text x=\"200\" y=\"27\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"600\" fill=\"#2b2a26\">Hémianopsie bitemporale · Bitemporal hemianopia</text><circle cx=\"85\" cy=\"125\" r=\"55\" fill=\"#ffffff\" stroke=\"#2b2a26\"/><path d=\"M85 70 A55 55 0 0 0 85 180 Z\" fill=\"#1d1d1f\"/><circle cx=\"205\" cy=\"125\" r=\"55\" fill=\"#ffffff\" stroke=\"#2b2a26\"/><path d=\"M205 70 A55 55 0 0 1 205 180 Z\" fill=\"#1d1d1f\"/><path d=\"M85 62 L85 188 M205 62 L205 188\" stroke=\"#c0392b\" stroke-dasharray=\"3 3\"/><text x=\"85\" y=\"200\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"700\" fill=\"#2b2a26\">OG · OS</text><text x=\"205\" y=\"200\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"700\" fill=\"#2b2a26\">OD</text><text x=\"145\" y=\"218\" text-anchor=\"middle\" font-size=\"9\" fill=\"#5c5850\">vu par le patient · patient’s view</text><g stroke=\"#1f6f8b\" stroke-width=\"3\" fill=\"none\"><path d=\"M305 70 L335 125 L305 200\"/><path d=\"M365 70 L335 125 L365 200\"/></g><circle cx=\"305\" cy=\"62\" r=\"10\" fill=\"#dfe9ee\" stroke=\"#2b2a26\"/><circle cx=\"365\" cy=\"62\" r=\"10\" fill=\"#dfe9ee\" stroke=\"#2b2a26\"/><circle cx=\"335\" cy=\"125\" r=\"11\" fill=\"none\" stroke=\"#c0392b\" stroke-width=\"3\"/><text x=\"352\" y=\"129\" font-size=\"9\" fill=\"#c0392b\">chiasma</text><text x=\"335\" y=\"220\" text-anchor=\"middle\" font-size=\"9\" fill=\"#5c5850\">voies optiques · visual pathway</text><text x=\"200\" y=\"262\" text-anchor=\"middle\" font-size=\"10\" fill=\"#2b2a26\">fibres nasales croisées au chiasma → perte des champs temporaux</text><text x=\"200\" y=\"276\" text-anchor=\"middle\" font-size=\"9\" fill=\"#5c5850\">crossing nasal fibres at the chiasm → loss of temporal fields</text><text x=\"394\" y=\"10\" text-anchor=\"end\" font-size=\"7.5\" fill=\"#8a8578\">schéma · schematic</text></svg>",
  "alt": {
   "fr": "Schéma : champs visuels des deux yeux avec perte des deux hémichamps temporaux limitée au méridien vertical, et voies optiques avec le chiasma marqué.",
   "en": "Schematic: visual fields of both eyes with loss of both temporal hemifields respecting the vertical meridian, and the visual pathway with the chiasm marked."
  },
  "hotspots": [
   {
    "x": 84,
    "y": 42,
    "r": 4,
    "label": {
     "fr": "Chiasma optique : lésion (ex. adénome hypophysaire) qui touche les fibres nasales croisées",
     "en": "Optic chiasm: lesion (e.g. pituitary adenoma) affecting crossing nasal fibres"
    },
    "decisive": true
   },
   {
    "x": 13,
    "y": 42,
    "r": 4,
    "label": {
     "fr": "OG : hémichamp temporal perdu",
     "en": "OS: temporal hemifield lost"
    }
   },
   {
    "x": 58,
    "y": 42,
    "r": 5,
    "label": {
     "fr": "OD : hémichamp temporal perdu",
     "en": "OD: temporal hemifield lost"
    }
   },
   {
    "x": 21,
    "y": 42,
    "r": 3,
    "label": {
     "fr": "Limite sur le méridien vertical",
     "en": "Border on the vertical meridian"
    }
   }
  ],
  "credit": {
   "fr": "Schéma original · Ocelle, non tiré d’un patient réel.",
   "en": "Original schematic · Ocelle, not from a real patient."
  },
  "license": "original",
  "schematic": true
 },
 "m-cv-7": {
  "kind": "svg",
  "svg": "<svg viewBox=\"0 0 400 300\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" font-family=\"system-ui,-apple-system,Segoe UI,sans-serif\"><rect width=\"400\" height=\"300\" rx=\"10\" fill=\"#f7f6f2\"/><text x=\"200\" y=\"27\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"600\" fill=\"#2b2a26\">Cartes de probabilité · Probability plots</text><line x1=\"100\" y1=\"48\" x2=\"100\" y2=\"150\" stroke=\"#8a8578\"/><line x1=\"40\" y1=\"96\" x2=\"160\" y2=\"96\" stroke=\"#8a8578\"/><line x1=\"300\" y1=\"48\" x2=\"300\" y2=\"150\" stroke=\"#8a8578\"/><line x1=\"240\" y1=\"96\" x2=\"360\" y2=\"96\" stroke=\"#8a8578\"/><rect x=\"76.5\" y=\"48\" width=\"8\" height=\"8\" fill=\"#1d1d1f\"/><rect x=\"89.5\" y=\"48\" width=\"8\" height=\"8\" fill=\"#555\"/><rect x=\"102.5\" y=\"48\" width=\"8\" height=\"8\" fill=\"#888\"/><rect x=\"115.5\" y=\"48\" width=\"8\" height=\"8\" fill=\"#1d1d1f\"/><rect x=\"63.5\" y=\"61\" width=\"8\" height=\"8\" fill=\"#555\"/><rect x=\"76.5\" y=\"61\" width=\"8\" height=\"8\" fill=\"#888\"/><rect x=\"89.5\" y=\"61\" width=\"8\" height=\"8\" fill=\"#1d1d1f\"/><rect x=\"102.5\" y=\"61\" width=\"8\" height=\"8\" fill=\"#555\"/><rect x=\"115.5\" y=\"61\" width=\"8\" height=\"8\" fill=\"#888\"/><rect x=\"128.5\" y=\"61\" width=\"8\" height=\"8\" fill=\"#1d1d1f\"/><rect x=\"50.5\" y=\"74\" width=\"8\" height=\"8\" fill=\"#888\"/><rect x=\"63.5\" y=\"74\" width=\"8\" height=\"8\" fill=\"#1d1d1f\"/><rect x=\"76.5\" y=\"74\" width=\"8\" height=\"8\" fill=\"#555\"/><rect x=\"89.5\" y=\"74\" width=\"8\" height=\"8\" fill=\"#888\"/><rect x=\"102.5\" y=\"74\" width=\"8\" height=\"8\" fill=\"#1d1d1f\"/><rect x=\"115.5\" y=\"74\" width=\"8\" height=\"8\" fill=\"#555\"/><rect x=\"128.5\" y=\"74\" width=\"8\" height=\"8\" fill=\"#888\"/><rect x=\"141.5\" y=\"74\" width=\"8\" height=\"8\" fill=\"#1d1d1f\"/><rect x=\"44.0\" y=\"87\" width=\"8\" height=\"8\" fill=\"#1d1d1f\"/><rect x=\"57.0\" y=\"87\" width=\"8\" height=\"8\" fill=\"#555\"/><rect x=\"70.0\" y=\"87\" width=\"8\" height=\"8\" fill=\"#888\"/><rect x=\"83.0\" y=\"87\" width=\"8\" height=\"8\" fill=\"#1d1d1f\"/><rect x=\"96.0\" y=\"87\" width=\"8\" height=\"8\" fill=\"#555\"/><rect x=\"109.0\" y=\"87\" width=\"8\" height=\"8\" fill=\"#888\"/><rect x=\"122.0\" y=\"87\" width=\"8\" height=\"8\" fill=\"#1d1d1f\"/><rect x=\"135.0\" y=\"87\" width=\"8\" height=\"8\" fill=\"#555\"/><rect x=\"148.0\" y=\"87\" width=\"8\" height=\"8\" fill=\"#888\"/><rect x=\"44.0\" y=\"100\" width=\"8\" height=\"8\" fill=\"#555\"/><rect x=\"57.0\" y=\"100\" width=\"8\" height=\"8\" fill=\"#888\"/><rect x=\"70.0\" y=\"100\" width=\"8\" height=\"8\" fill=\"#1d1d1f\"/><rect x=\"83.0\" y=\"100\" width=\"8\" height=\"8\" fill=\"#555\"/><rect x=\"96.0\" y=\"100\" width=\"8\" height=\"8\" fill=\"#888\"/><rect x=\"109.0\" y=\"100\" width=\"8\" height=\"8\" fill=\"#1d1d1f\"/><rect x=\"122.0\" y=\"100\" width=\"8\" height=\"8\" fill=\"#555\"/><rect x=\"135.0\" y=\"100\" width=\"8\" height=\"8\" fill=\"#888\"/><rect x=\"148.0\" y=\"100\" width=\"8\" height=\"8\" fill=\"#1d1d1f\"/><rect x=\"50.5\" y=\"113\" width=\"8\" height=\"8\" fill=\"#888\"/><rect x=\"63.5\" y=\"113\" width=\"8\" height=\"8\" fill=\"#1d1d1f\"/><rect x=\"76.5\" y=\"113\" width=\"8\" height=\"8\" fill=\"#555\"/><rect x=\"89.5\" y=\"113\" width=\"8\" height=\"8\" fill=\"#888\"/><rect x=\"102.5\" y=\"113\" width=\"8\" height=\"8\" fill=\"#1d1d1f\"/><rect x=\"115.5\" y=\"113\" width=\"8\" height=\"8\" fill=\"#555\"/><rect x=\"128.5\" y=\"113\" width=\"8\" height=\"8\" fill=\"#888\"/><rect x=\"141.5\" y=\"113\" width=\"8\" height=\"8\" fill=\"#1d1d1f\"/><rect x=\"63.5\" y=\"126\" width=\"8\" height=\"8\" fill=\"#1d1d1f\"/><rect x=\"76.5\" y=\"126\" width=\"8\" height=\"8\" fill=\"#555\"/><rect x=\"89.5\" y=\"126\" width=\"8\" height=\"8\" fill=\"#888\"/><rect x=\"102.5\" y=\"126\" width=\"8\" height=\"8\" fill=\"#1d1d1f\"/><rect x=\"115.5\" y=\"126\" width=\"8\" height=\"8\" fill=\"#555\"/><rect x=\"128.5\" y=\"126\" width=\"8\" height=\"8\" fill=\"#888\"/><rect x=\"76.5\" y=\"139\" width=\"8\" height=\"8\" fill=\"#555\"/><rect x=\"89.5\" y=\"139\" width=\"8\" height=\"8\" fill=\"#888\"/><rect x=\"102.5\" y=\"139\" width=\"8\" height=\"8\" fill=\"#1d1d1f\"/><rect x=\"115.5\" y=\"139\" width=\"8\" height=\"8\" fill=\"#555\"/><circle cx=\"280.5\" cy=\"52\" r=\"1.2\" fill=\"#2b2a26\"/><circle cx=\"293.5\" cy=\"52\" r=\"1.2\" fill=\"#2b2a26\"/><circle cx=\"306.5\" cy=\"52\" r=\"1.2\" fill=\"#2b2a26\"/><circle cx=\"319.5\" cy=\"52\" r=\"1.2\" fill=\"#2b2a26\"/><circle cx=\"267.5\" cy=\"65\" r=\"1.2\" fill=\"#2b2a26\"/><circle cx=\"280.5\" cy=\"65\" r=\"1.2\" fill=\"#2b2a26\"/><circle cx=\"293.5\" cy=\"65\" r=\"1.2\" fill=\"#2b2a26\"/><circle cx=\"306.5\" cy=\"65\" r=\"1.2\" fill=\"#2b2a26\"/><circle cx=\"319.5\" cy=\"65\" r=\"1.2\" fill=\"#2b2a26\"/><circle cx=\"332.5\" cy=\"65\" r=\"1.2\" fill=\"#2b2a26\"/><circle cx=\"254.5\" cy=\"78\" r=\"1.2\" fill=\"#2b2a26\"/><circle cx=\"267.5\" cy=\"78\" r=\"1.2\" fill=\"#2b2a26\"/><circle cx=\"280.5\" cy=\"78\" r=\"1.2\" fill=\"#2b2a26\"/><circle cx=\"293.5\" cy=\"78\" r=\"1.2\" fill=\"#2b2a26\"/><circle cx=\"306.5\" cy=\"78\" r=\"1.2\" fill=\"#2b2a26\"/><circle cx=\"319.5\" cy=\"78\" r=\"1.2\" fill=\"#2b2a26\"/><circle cx=\"332.5\" cy=\"78\" r=\"1.2\" fill=\"#2b2a26\"/><circle cx=\"345.5\" cy=\"78\" r=\"1.2\" fill=\"#2b2a26\"/><circle cx=\"248.0\" cy=\"91\" r=\"1.2\" fill=\"#2b2a26\"/><circle cx=\"261.0\" cy=\"91\" r=\"1.2\" fill=\"#2b2a26\"/><circle cx=\"274.0\" cy=\"91\" r=\"1.2\" fill=\"#2b2a26\"/><circle cx=\"287.0\" cy=\"91\" r=\"1.2\" fill=\"#2b2a26\"/><circle cx=\"300.0\" cy=\"91\" r=\"1.2\" fill=\"#2b2a26\"/><circle cx=\"313.0\" cy=\"91\" r=\"1.2\" fill=\"#2b2a26\"/><circle cx=\"326.0\" cy=\"91\" r=\"1.2\" fill=\"#2b2a26\"/><circle cx=\"339.0\" cy=\"91\" r=\"1.2\" fill=\"#2b2a26\"/><circle cx=\"352.0\" cy=\"91\" r=\"1.2\" fill=\"#2b2a26\"/><circle cx=\"248.0\" cy=\"104\" r=\"1.2\" fill=\"#2b2a26\"/><circle cx=\"261.0\" cy=\"104\" r=\"1.2\" fill=\"#2b2a26\"/><circle cx=\"274.0\" cy=\"104\" r=\"1.2\" fill=\"#2b2a26\"/><circle cx=\"287.0\" cy=\"104\" r=\"1.2\" fill=\"#2b2a26\"/><circle cx=\"300.0\" cy=\"104\" r=\"1.2\" fill=\"#2b2a26\"/><circle cx=\"313.0\" cy=\"104\" r=\"1.2\" fill=\"#2b2a26\"/><circle cx=\"326.0\" cy=\"104\" r=\"1.2\" fill=\"#2b2a26\"/><circle cx=\"339.0\" cy=\"104\" r=\"1.2\" fill=\"#2b2a26\"/><circle cx=\"352.0\" cy=\"104\" r=\"1.2\" fill=\"#2b2a26\"/><circle cx=\"254.5\" cy=\"117\" r=\"1.2\" fill=\"#2b2a26\"/><circle cx=\"267.5\" cy=\"117\" r=\"1.2\" fill=\"#2b2a26\"/><circle cx=\"280.5\" cy=\"117\" r=\"1.2\" fill=\"#2b2a26\"/><circle cx=\"293.5\" cy=\"117\" r=\"1.2\" fill=\"#2b2a26\"/><circle cx=\"306.5\" cy=\"117\" r=\"1.2\" fill=\"#2b2a26\"/><circle cx=\"319.5\" cy=\"117\" r=\"1.2\" fill=\"#2b2a26\"/><circle cx=\"332.5\" cy=\"117\" r=\"1.2\" fill=\"#2b2a26\"/><circle cx=\"345.5\" cy=\"117\" r=\"1.2\" fill=\"#2b2a26\"/><circle cx=\"267.5\" cy=\"130\" r=\"1.2\" fill=\"#2b2a26\"/><circle cx=\"280.5\" cy=\"130\" r=\"1.2\" fill=\"#2b2a26\"/><circle cx=\"293.5\" cy=\"130\" r=\"1.2\" fill=\"#2b2a26\"/><circle cx=\"306.5\" cy=\"130\" r=\"1.2\" fill=\"#2b2a26\"/><circle cx=\"319.5\" cy=\"130\" r=\"1.2\" fill=\"#2b2a26\"/><circle cx=\"332.5\" cy=\"130\" r=\"1.2\" fill=\"#2b2a26\"/><circle cx=\"280.5\" cy=\"143\" r=\"1.2\" fill=\"#2b2a26\"/><circle cx=\"293.5\" cy=\"143\" r=\"1.2\" fill=\"#2b2a26\"/><circle cx=\"306.5\" cy=\"143\" r=\"1.2\" fill=\"#2b2a26\"/><circle cx=\"319.5\" cy=\"143\" r=\"1.2\" fill=\"#2b2a26\"/><text x=\"100\" y=\"170\" text-anchor=\"middle\" font-size=\"10\" font-weight=\"700\" fill=\"#2b2a26\">Déviation totale</text><text x=\"100\" y=\"182\" text-anchor=\"middle\" font-size=\"9\" fill=\"#5c5850\">total deviation</text><text x=\"300\" y=\"170\" text-anchor=\"middle\" font-size=\"10\" font-weight=\"700\" fill=\"#2b2a26\">Déviation corrigée</text><text x=\"300\" y=\"182\" text-anchor=\"middle\" font-size=\"9\" fill=\"#5c5850\">pattern deviation</text><rect x=\"110\" y=\"200\" width=\"180\" height=\"44\" rx=\"6\" fill=\"#ffffff\" stroke=\"#c9c4b8\"/><text x=\"200\" y=\"217\" text-anchor=\"middle\" font-size=\"10\" fill=\"#2b2a26\">MD −5,0 dB (p &lt; 1 %)</text><text x=\"200\" y=\"233\" text-anchor=\"middle\" font-size=\"10\" fill=\"#2b2a26\">PSD 1,6 dB (non significatif · NS)</text><text x=\"200\" y=\"270\" text-anchor=\"middle\" font-size=\"10\" fill=\"#2b2a26\">baisse diffuse (ex. cataracte) · diffuse depression (e.g. cataract)</text><text x=\"394\" y=\"10\" text-anchor=\"end\" font-size=\"7.5\" fill=\"#8a8578\">schéma · schematic</text></svg>",
  "alt": {
   "fr": "Schéma (valeurs fictives) : déviation totale avec des points abaissés partout, déviation corrigée presque vide; MD −5 dB, PSD non significatif.",
   "en": "Schematic (fictitious values): total deviation depressed everywhere, pattern deviation almost empty; MD −5 dB, PSD not significant."
  },
  "hotspots": [
   {
    "x": 75,
    "y": 33,
    "r": 9,
    "label": {
     "fr": "Déviation corrigée « propre » : pas de défaut localisé une fois la baisse générale retirée",
     "en": "Clean pattern deviation: no localised defect once the general depression is removed"
    },
    "decisive": true
   },
   {
    "x": 25,
    "y": 33,
    "r": 9,
    "label": {
     "fr": "Déviation totale : points abaissés partout",
     "en": "Total deviation: points depressed everywhere"
    }
   },
   {
    "x": 50,
    "y": 74,
    "r": 6,
    "label": {
     "fr": "MD abaissée mais PSD normal → atteinte diffuse",
     "en": "Low MD but normal PSD → diffuse loss"
    }
   }
  ],
  "credit": {
   "fr": "Schéma original · Ocelle, non tiré d’un patient réel.",
   "en": "Original schematic · Ocelle, not from a real patient."
  },
  "license": "original",
  "schematic": true
 }
});
