var G = (typeof window !== 'undefined') ? window : globalThis;
G.OPH = G.OPH || {};

// Points chauds « Voir » : un signe décisif par photo, à toucher sur la photo (CRITIQUE-SEVERE passage 2, MUST-FIX 1).
// Clé : id de fiche (G.OPH.fiches) ou id d'entrée A5 (G.OPH.A.recog). photo = 1re photo affichée (photosFor(clé)[0],
// photosFor('a5-' + id)[0] pour A5) après le filtre de droits ; si la photo affichée diffère, ne pas utiliser le point.
// x, y : centre en % de la largeur / hauteur de l'image entière (pas de recadrage : .ph-card img { width:100%; height:auto }).
// r : rayon en % de la LARGEUR de l'image (cercle vrai ; rayon vertical en % de hauteur = r × largeur / hauteur).
// alt (facultatif) : autres zones. hit: true = autre endroit du MÊME signe (compte comme juste) ;
// sans hit = trouvaille secondaire (neutre : ni juste ni faux, la boucle peut la montrer après la révélation).
// skip: true = pas de signe unique localisable sur la photo (reason) : garder le « Voici le signe » neutre.
G.OPH.voirHotspots = {
  "c-secheresse": {"photo": "OPH-029", "x": 38, "y": 55, "r": 26, "label": {"fr": "Érosions ponctuées diffuses", "en": "Diffuse punctate epithelial erosions"}},
  "c-bacterienne": {"photo": "OPH-070", "x": 49, "y": 52, "r": 17, "label": {"fr": "Infiltrat stromal dense", "en": "Dense stromal infiltrate"}},
  "c-atypiques": {"photo": "OPH-067", "x": 48, "y": 42, "r": 18, "label": {"fr": "Infiltrat annulaire", "en": "Ring infiltrate"}},
  "c-herpes": {"photo": "OPH-059", "x": 56, "y": 48, "r": 16, "label": {"fr": "Ulcère dendritique", "en": "Dendritic ulcer"}},
  "c-keratocone": {"photo": "OPH-034", "x": 38, "y": 52, "r": 12, "label": {"fr": "Cornée bombée en cône", "en": "Cone-shaped corneal protrusion"}},
  "c-fuchs": {"photo": "OPH-049", "x": 52, "y": 42, "r": 12, "label": {"fr": "Guttae endothéliales", "en": "Endothelial guttae"}},
  "c-erosion": {"photo": "OPH-030", "x": 52, "y": 48, "r": 11, "label": {"fr": "Défaut épithélial coloré", "en": "Fluorescein-stained epithelial defect"}},
  "c-pterygion": {"photo": "OPH-073", "x": 45, "y": 56, "r": 10, "label": {"fr": "Tête du ptérygion sur la cornée", "en": "Pterygium head on the cornea"}, "alt": [{"x": 64, "y": 55, "r": 11, "label": {"fr": "Repli fibrovasculaire triangulaire", "en": "Triangular fibrovascular fold"}, "hit": true}]},
  "c-greffe": {"photo": "OPH-104", "x": 66, "y": 48, "r": 12, "label": {"fr": "Ligne de Khodadoust", "en": "Khodadoust line"}},
  "c-brulure": {"photo": "OPH-086", "x": 49, "y": 56, "r": 17, "label": {"fr": "Cornée opaque cicatricielle", "en": "Opaque scarred cornea"}, "alt": [{"x": 37, "y": 47, "r": 7, "label": {"fr": "Pannus vasculaire", "en": "Corneal pannus"}}]},
  "g-gpao": {"photo": "OPH-133", "x": 19, "y": 51, "r": 6, "label": {"fr": "Encoche inférieure du rebord", "en": "Inferior rim notch"}, "alt": [{"x": 25, "y": 60, "r": 7, "label": {"fr": "Défaut en coin des fibres", "en": "RNFL wedge defect"}}]},
  "g-hto": {"photo": "OPH-139", "x": 38.5, "y": 48, "r": 6.5, "label": {"fr": "Croissant gris temporal", "en": "Temporal grey crescent"}},
  "g-gpn": {"photo": "OPH-137", "x": 48, "y": 54.5, "r": 6, "label": {"fr": "Hémorragie papillaire (Drance)", "en": "Disc haemorrhage (Drance)"}, "alt": [{"x": 51, "y": 46, "r": 9, "label": {"fr": "Large excavation", "en": "Large cup"}}]},
  "g-fermeture": {"photo": "OPH-142", "x": 64, "y": 38, "r": 10, "label": {"fr": "Chambre périphérique quasi absente", "en": "Near-absent peripheral chamber"}},
  "g-crise": {"photo": "OPH-140", "x": 21, "y": 48, "r": 10, "label": {"fr": "Cornée trouble, œil rouge", "en": "Hazy cornea, red eye"}},
  "g-pxf": {"photo": "OPH-153", "x": 53, "y": 43, "r": 13, "label": {"fr": "Disque central de pseudoexfoliation", "en": "Central pseudoexfoliation disc"}, "alt": [{"x": 48, "y": 13, "r": 8, "label": {"fr": "Bande périphérique du dépôt", "en": "Peripheral deposit band"}}]},
  "g-pigmentaire": {"photo": "OPH-157", "x": 18, "y": 48, "r": 10, "label": {"fr": "Défauts de transillumination radiaires", "en": "Radial transillumination defects"}, "alt": [{"x": 86, "y": 45, "r": 9, "label": {"fr": "Défauts de transillumination radiaires", "en": "Radial transillumination defects"}, "hit": true}, {"x": 45, "y": 86, "r": 9, "label": {"fr": "Défauts de transillumination radiaires", "en": "Radial transillumination defects"}, "hit": true}, {"x": 40, "y": 13, "r": 9, "label": {"fr": "Défauts de transillumination radiaires", "en": "Radial transillumination defects"}, "hit": true}]},
  "g-neovasculaire": {"photo": "OPH-162", "x": 52, "y": 27, "r": 11, "label": {"fr": "Néovaisseaux iriens (rubéose)", "en": "Iris neovessels (rubeosis)"}, "alt": [{"x": 38, "y": 45, "r": 7, "label": {"fr": "Néovaisseaux iriens (rubéose)", "en": "Iris neovessels (rubeosis)"}, "hit": true}]},
  "g-secondaires": {"photo": "OPH-150", "x": 50, "y": 52, "r": 9, "label": {"fr": "Pupille petite, synéchies postérieures", "en": "Small pupil, posterior synechiae"}, "alt": [{"x": 48, "y": 28, "r": 8, "label": {"fr": "Iridotomies périphériques", "en": "Peripheral iridotomies"}}]},
  "g-postop": {"photo": "OPH-181", "x": 47, "y": 51, "r": 7, "label": {"fr": "Orifice de l’iStent", "en": "iStent opening"}},
  "c-dystrophies": {"photo": "OPH-368", "x": 46, "y": 68, "r": 20, "label": {"fr": "Opacités stromales granulaires", "en": "Granular stromal opacities"}},
  "c-depots": {"photo": "OPH-327", "x": 52, "y": 80, "r": 10, "label": {"fr": "Arc cornéen périphérique", "en": "Peripheral corneal arcus"}, "alt": [{"x": 52, "y": 21, "r": 10, "label": {"fr": "Arc cornéen périphérique", "en": "Peripheral corneal arcus"}, "hit": true}, {"x": 33, "y": 52, "r": 7, "label": {"fr": "Arc cornéen périphérique", "en": "Peripheral corneal arcus"}, "hit": true}, {"x": 79, "y": 52, "r": 7, "label": {"fr": "Arc cornéen périphérique", "en": "Peripheral corneal arcus"}, "hit": true}]},
  "c-surface": {"photo": "OPH-341", "x": 55, "y": 52, "r": 12, "label": {"fr": "Follicules conjonctivaux", "en": "Conjunctival follicles"}},
  "c-peripherie": {"photo": "OPH-377", "x": 44, "y": 42, "r": 10, "label": {"fr": "Fonte cornéenne périphérique", "en": "Peripheral corneal melt"}, "alt": [{"x": 22, "y": 45, "r": 11, "label": {"fr": "Injection limbique adjacente", "en": "Adjacent limbal injection"}}]},
  "g-papille": {"photo": "OPH-228", "x": 26, "y": 47, "r": 13, "label": {"fr": "Disque optique très grand", "en": "Very large optic disc"}, "alt": [{"x": 75, "y": 50, "r": 7, "label": {"fr": "Papille adelphe normale", "en": "Normal fellow disc"}}]},
  "g-cristallin": {"photo": "OPH-238", "x": 50, "y": 50, "r": 24, "label": {"fr": "Cristallin blanc opaque", "en": "White opaque lens"}},
  "g-dev": {"photo": "OPH-325", "x": 66, "y": 24, "r": 11, "label": {"fr": "Stries de Haab", "en": "Haab striae"}},

  // Module A5 (G.OPH.A.recog) : 1re photo de photosFor('a5-' + id)
  "cataracte-nucleaire": {"photo": "OPH-234", "x": 54, "y": 45, "r": 10, "label": {"fr": "Noyau jaune laiteux", "en": "Milky yellow nucleus"}},
  "cataracte-corticale-scp": {"photo": "OPH-241", "x": 55, "y": 44, "r": 11, "label": {"fr": "Plaque sous-capsulaire postérieure", "en": "Posterior subcapsular plaque"}},
  "cataracte-mature": {"photo": "OPH-210", "x": 21, "y": 48, "r": 8, "label": {"fr": "Pupille blanc-gris", "en": "Grey-white pupil"}},
  "opacification-capsulaire": {"photo": "OPH-248", "x": 48, "y": 33, "r": 13, "label": {"fr": "Opacification capsulaire postérieure", "en": "Posterior capsule opacification"}, "alt": [{"x": 40, "y": 71, "r": 12, "label": {"fr": "Opacification capsulaire postérieure", "en": "Posterior capsule opacification"}, "hit": true}, {"x": 65, "y": 52, "r": 7, "label": {"fr": "Opacification capsulaire postérieure", "en": "Posterior capsule opacification"}, "hit": true}]},
  "bscan": {"photo": "OPH-197", "x": 42, "y": 47, "r": 9, "label": {"fr": "Paroi postérieure épaissie", "en": "Thickened posterior wall"}, "alt": [{"x": 28, "y": 45, "r": 9, "label": {"fr": "Petite cavité vitréenne", "en": "Small vitreous cavity"}}]},
  "decollement-retine": {"photo": "OPH-287", "x": 56, "y": 50, "r": 12, "label": {"fr": "Rétine décollée, macula incluse", "en": "Detached retina, macula involved"}, "alt": [{"x": 78, "y": 45, "r": 12, "label": {"fr": "Rétine décollée, macula incluse", "en": "Detached retina, macula involved"}, "hit": true}]},
  "decollement-choroidien": {"photo": "OPH-291", "x": 66, "y": 50, "r": 20, "label": {"fr": "Soulèvement choroïdien lisse et sombre", "en": "Smooth dark choroidal elevation"}},
  "dmla": {"photo": "OPH-264", "x": 53, "y": 56, "r": 10, "label": {"fr": "Petits drusens périmaculaires", "en": "Small perimacular drusen"}},
  "retinopathie-diabetique": {"photo": "OPH-258", "x": 44, "y": 63, "r": 8, "label": {"fr": "Hémorragies et IRMA", "en": "Haemorrhages and IRMA"}, "alt": [{"x": 52, "y": 36, "r": 6, "label": {"fr": "Hémorragies et IRMA", "en": "Haemorrhages and IRMA"}, "hit": true}, {"x": 75, "y": 42, "r": 6, "label": {"fr": "Hémorragie en tache", "en": "Blot haemorrhage"}, "hit": true}]},
  "occlusions-retiniennes": {"photo": "OPH-250", "x": 51, "y": 54, "r": 7, "label": {"fr": "Tache rouge cerise", "en": "Cherry-red spot"}, "alt": [{"x": 65, "y": 26, "r": 9, "label": {"fr": "Rétine pâle ischémique", "en": "Pale ischaemic retina"}}]},
  "retinopathie-hypertensive": {"photo": "OPH-256", "x": 60, "y": 46, "r": 8, "label": {"fr": "Exsudats durs maculaires", "en": "Macular hard exudates"}, "alt": [{"x": 63, "y": 74, "r": 6, "label": {"fr": "Nodule cotonneux", "en": "Cotton-wool spot"}}, {"x": 80, "y": 45, "r": 7, "label": {"fr": "Œdème papillaire", "en": "Optic disc swelling"}}]},
  "macula-chirurgicale": {"photo": "OPH-267", "skip": true, "reason": {"fr": "Membrane « trace » invisible sur la photo : c’est l’OCT qui la montre", "en": "Trace membrane not visible on the photo: OCT shows it"}},
  "peripherie-vitre": {"photo": "OPH-273", "x": 52, "y": 27, "r": 13, "label": {"fr": "Dégénérescence palissadique", "en": "Lattice degeneration"}},
  "inflammation-infection": {"photo": "OPH-277", "x": 48, "y": 45, "r": 14, "label": {"fr": "Pupille festonnée (synéchies)", "en": "Scalloped pupil (synechiae)"}},
  "papille-oedeme": {"photo": "OPH-219", "x": 25, "y": 45, "r": 13, "label": {"fr": "Papille gonflée, bords effacés", "en": "Swollen disc, blurred margins"}, "alt": [{"x": 73, "y": 45, "r": 12, "label": {"fr": "Papille gonflée, bords effacés", "en": "Swollen disc, blurred margins"}, "hit": true}]},
  "pupilles-neuro": {"photo": "OPH-281", "skip": true, "reason": {"fr": "Signe comparatif sur trois clichés (taille des pupilles), pas un point unique", "en": "Comparative sign across three panels (pupil sizes), not a single spot"}},
  "tumeurs-toxicite-trauma": {"photo": "OPH-285", "x": 76, "y": 64, "r": 10, "label": {"fr": "Nævus choroïdien plat gris-vert", "en": "Flat grey-green choroidal naevus"}}
};

// Point chaud de la photo réellement affichée : key = id de fiche, id d'entrée A5 ou 'a5-' + id ; photoId = id de la photo montrée.
G.OPH.voirHotspot = function (key, photoId) {
  var H = G.OPH.voirHotspots || {}, h = H[key] || H[String(key || '').replace(/^a5-/, '')];
  return h && !h.skip && (!photoId || h.photo === photoId) ? h : null;
};
// Le toucher (tx, ty en % largeur / hauteur ; ratio = largeur / hauteur de l'image) tombe-t-il dans la zone décisive ?
G.OPH.voirHit = function (h, tx, ty, ratio) {
  if (!h || h.skip) return false;
  var zs = [h].concat((h.alt || []).filter(function (a) { return a.hit; }));
  return zs.some(function (z) { var dx = tx - z.x, dy = (ty - z.y) / (ratio || 1); return dx * dx + dy * dy <= z.r * z.r; });
};
