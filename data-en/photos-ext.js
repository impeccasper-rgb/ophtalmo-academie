// English overlay for the photo texts added after data-en/photos.js was generated (fiches c-dystrophies, c-depots, c-surface,
// c-peripherie, g-papille, g-cristallin, g-dev). Same shape: G.OPH_EN.photos[key][photoId] = {caption, look, reveal};
// reveal arrays have the same length and order as the French ones (data/ext-cornee-*.js, data/ext-glaucome-*.js).
var G = (typeof window !== 'undefined') ? window : globalThis;
G.OPH_EN = G.OPH_EN || {};
G.OPH_EN.photos = G.OPH_EN.photos || {};
(function (P) {
  var add = function (key, o) { P[key] = P[key] || {}; Object.keys(o).forEach(function (id) { P[key][id] = Object.assign(P[key][id] || {}, o[id]); }); };
  add("c-dystrophies", {
    "OPH-368": { caption: "Granular dystrophy type 1 in the slit beam", look: "Describe the opacities and the cornea between them, along and around the beam.",
      reveal: ["Round or ring-shaped white opacities with sharp edges", "Clear cornea between the opacities", "No vessels in the cornea", "The thin slit shows the depth: anterior stroma in this dystrophy"] },
    "OPH-373": { caption: "Lattice dystrophy: branching lines in the central cornea", look: "Look at the shape of the opacities: dots, lines or haze?",
      reveal: ["Fine, white, branching lines that criss-cross in front of the pupil and iris", "They look like glistening filaments, mostly centrally", "No vessels in the cornea", "These lines are amyloid (Congo red)"] },
    "OPH-374": { caption: "Macular dystrophy with a broad slit beam", look: "Look at the cornea between the spots: is it clear, as in granular dystrophy?",
      reveal: ["Ill-defined gray-white spots centrally", "Diffuse haze between the spots: the cornea is not clear between them", "No vessels", "Contrast with granular dystrophy (clear stroma between the granules); in macular dystrophy the haze reaches the limbus"] },
    "OPH-379": { caption: "Reis-Bücklers dystrophy; chronic recurrent erosions", look: "Describe the pattern of the opacity and how far it extends.",
      reveal: ["Irregular gray haze in a reticular pattern over the whole central cornea", "In this dystrophy the opacity lies in Bowman layer, just under the epithelium", "Chronic recurrent erosion syndrome", "PTK is possible, but recurrence is common"] },
    "OPH-358": { caption: "Posterior polymorphous dystrophy on retroillumination", look: "Against the red reflex of the fundus, look for a small lesion that stands out.",
      reveal: ["Small translucent lesion near the center of the red reflex", "The rest of the cornea looks clear", "A typical PPCD lesion, on the posterior surface of the cornea", "Retroillumination reveals lesions that are almost invisible in direct illumination"] },
    "OPH-342": { caption: "Posterior polymorphous dystrophy on specular microscopy", look: "Find the mosaic of endothelial cells, then what interrupts it.",
      reveal: ["Gray mosaic of endothelial cells in the background", "Darker round or band-shaped areas that interrupt the mosaic", "The classic appearance of PPCD lesions", "On specular microscopy, anything that is not a healthy cell looks dark, like guttae"] }
  });
  add("c-depots", {
    "OPH-327": { caption: "Corneal arcus: a ring of lipid in the peripheral cornea", look: "Go all the way around the peripheral cornea.",
      reveal: ["Gray-white ring in the peripheral cornea, around the whole circumference", "Clear central cornea, iris easily seen", "Classically, a thin clear band (lucid interval) separates it from the limbus", "After age 50 it is usually harmless; before that, order a lipid profile"] },
    "OPH-362": { caption: "Cornea verticillata: whorled lines in the epithelium", look: "Against the black pupil, follow the fine lines to where they start.",
      reveal: ["Fine, golden-brown, branching lines in a whorl", "They converge on a point slightly below the center of the pupil", "Seen against the dilated pupil, as in retroillumination", "Causes to look for: amiodarone, hydroxychloroquine, Fabry disease"] },
    "OPH-352": { caption: "Lipid keratopathy after chronic herpes zoster ophthalmicus", look: "Describe the color and position of the deposit, then ask yourself where it comes from.",
      reveal: ["Dense creamy yellow deposit near the pupil margin, upper right in the photo", "Whitish haze around the deposit", "Feeder vessels are hard to see here: look for them with a thin slit", "Setting: chronic herpes zoster ophthalmicus, which vascularizes the cornea"] },
    "OPH-370": { caption: "Infectious crystalline keratopathy in a penetrating graft", look: "Identify the type of surgery, then describe the white opacity.",
      reveal: ["Radial sutures all around the graft: penetrating keratoplasty", "Branching, feathery white opacity in the lower left of the graft (in the photo)", "Only mild redness", "Most often viridans streptococci: culture and prolonged antibiotics"] },
    "OPH-365": { caption: "Corneal blood staining after a large, prolonged hyphema", look: "Compare the color of the cornea with that of a normal cornea.",
      reveal: ["Central cornea stained yellow-brown (amber) in both views", "In the right-hand view, a whitish area at the top of the stained disc", "Red eye in the left-hand view", "It clears slowly, from the periphery toward the center"] },
    "OPH-372": { caption: "Wilson disease: sunflower cataract", look: "Beyond the cornea, look at the lens behind the dilated pupil.",
      reveal: ["Gray-green central disc in the lens", "Petal-shaped opacities radiating from the center: a sunflower pattern", "This copper deposit under the anterior capsule usually accompanies a Kayser-Fleischer ring", "Look for the ring in the peripheral cornea, sometimes visible only on gonioscopy"] }
  });
  add("c-surface", {
    "OPH-341": { caption: "Follicles of the lower palpebral conjunctiva (follicular conjunctivitis)", look: "Lower lid pulled down: look at the shape of the elevations and where the vessels run.",
      reveal: ["Small, round, pale, translucent dome-shaped elevations on the lower palpebral conjunctiva", "The vessels run around the base of the elevations rather than through their center: these are follicles", "Bulbar conjunctiva above moderately injected"] },
    "OPH-383": { caption: "Horner-Trantas dots at the limbus (limbal vernal keratoconjunctivitis)", look: "Follow the limbus all the way around the cornea, starting at the top.",
      reveal: ["Small gelatinous white clumps along the limbus, mostly superiorly: Horner-Trantas dots (clusters of eosinophils)", "Limbus thickened and irregular in places", "Diffuse injection of the bulbar conjunctiva"] },
    "OPH-361": { caption: "Injection of the superior bulbar conjunctiva (superior limbic keratoconjunctivitis)", look: "Compare the redness of the conjunctiva above the cornea with the rest of the eye.",
      reveal: ["Redness concentrated on the superior bulbar conjunctiva, with dilated vessels running down to the superior limbus", "Worst just above the superior limbus, the area covered by the lid", "Fluorescein visible in the inferior tear meniscus, lower left"] },
    "OPH-359": { caption: "Rosacea keratitis: inferior pannus and opacities", look: "Look at the lower lid margin, then at the lower half of the cornea.",
      reveal: ["Vessels growing onto the cornea from below: inferior pannus", "Gray-white opacities in the inferior cornea, resembling Salzmann degeneration", "Lower lid margin thickened and irregular, with debris", "Both eyes are affected"] },
    "OPH-330": { caption: "Blepharokeratoconjunctivitis in a child", look: "Look at the upper lid, then at the lower cornea.",
      reveal: ["Red, swollen upper lid with a crusted lesion above the lashes", "A vessel running from the inferior limbus toward the center of the cornea", "Injection of the bulbar conjunctiva, mostly on the left of the image", "Corneal phlyctenules and filamentary keratitis"] },
    "OPH-356": { caption: "Yellowish pinguecula of the bulbar conjunctiva", look: "Look at the conjunctiva in the interpalpebral zone, on either side of the cornea.",
      reveal: ["Slightly raised yellowish deposit in the bulbar conjunctiva, to the left of the cornea in the image", "It stops at the limbus and does not grow onto the cornea (unlike a pterygium)", "Fine vessels around the deposit with no sign of inflammation: pinguecula, not pingueculitis"] }
  });
  add("c-peripherie", {
    "OPH-377": { caption: "Peripheral corneal melt with inflammation (PUK in rheumatoid arthritis)", look: "Follow the slit beam and the cornea toward the limbus on the left of the image.",
      reveal: ["Conjunctiva and episclera heavily injected on the left of the image, against the limbus", "Adjacent peripheral cornea whitish and irregular, touching the limbus with no clear interval", "The slit beam is distorted over the lesion: irregular corneal contour (melt)", "Fine vessels growing into the cornea near the lesion"] },
    "OPH-382": { caption: "Terrien marginal degeneration, in profile", look: "Look at the profile of the cornea, especially its upper edge.",
      reveal: ["At the upper edge, the corneal curve becomes irregular and opaque: the thinned zone", "Yellowish white deposit at the leading edge of the lesion: a lipid line", "White, quiet eye", "Intact epithelium and pannus over the thinned zone"] },
    "OPH-380": { caption: "Anterior scleritis: deep, extensive redness", look: "Note the color and depth of the dilated vessels.",
      reveal: ["Intense redness of the whole right half of the globe in the image", "Network of large, deep, criss-crossing vessels with a dark red hue", "Clear cornea, no visible infiltrate"] },
    "OPH-360": { caption: "Scleromalacia perforans: bluish patches of thinned sclera", look: "The patient is looking down: examine the exposed superior sclera.",
      reveal: ["Dark blue-gray patches in the superior sclera: the uvea shows through the thinned sclera", "Dark blue dome in the upper left of the image, where the sclera is thinnest", "Conjunctival vessels visible, without intense diffuse redness"] },
    "OPH-337": { caption: "Dellen next to persistent nasal chemosis", look: "Look at the elevated conjunctiva, then at the edge of the cornea right beside it.",
      reveal: ["Swollen, elevated conjunctiva (chemosis) on the caruncle side, on the left of the image", "At the adjacent limbus, a small irregular, glistening area of cornea: the dellen", "The rest of the cornea is clear"] }
  });
  add("g-papille", {
    "OPH-228": { caption: "Megalopapilla: large congenital disc, normal fellow disc", look: "Compare the size of the two discs before judging the cup.",
      reveal: ["The disc on the left is clearly larger than the one on the right", "Large pale central area in this big disc, crossed by the vessels", "Pale peripapillary zone around the large disc", "The disc on the right has a normal size and appearance"] },
    "OPH-309": { caption: "Megalopapilla with severe glaucoma", look: "Look for what remains of the neuroretinal rim in this large disc.",
      reveal: ["Very large disc, almost entirely pale and cupped", "Rim reduced to a sliver near where the vessels emerge", "Vessels bending sharply at the edge of the cup (bayoneting)"] },
    "OPH-225": { caption: "Dominant optic atrophy: temporal pallor", look: "Compare the color of the macular side of the disc with the opposite side.",
      reveal: ["Marked pallor on the temporal side, toward the macula (left of the image)", "Nasal side of the disc pinker", "Pallor more extensive than the cupping"] },
    "OPH-227": { caption: "Band atrophy of the optic nerve from compression", look: "Look at the color of both discs and where the pallor lies.",
      reveal: ["Two pale discs, with close-ups in the insets", "Severe diffuse atrophy OD, band atrophy OS", "Pallor more marked than cupping: a nonglaucomatous appearance"] },
    "OPH-230": { caption: "Superior segmental optic nerve hypoplasia", look: "Note the outline of the disc and where the vessels emerge.",
      reveal: ["Pale crescent bordering part of the disc (double contour)", "Vessels emerging off-center, toward the top of the disc", "Small disc with no large central cup"] },
    "OPH-232": { caption: "Optociliary vessels on the disc", look: "Follow the vessels lying on the disc: where do they start and end?",
      reveal: ["Several tortuous, looping vessels on the surface of the disc", "They arise and disappear at the disc margin", "Pale disc"] }
  });
  add("g-cristallin", {
    "OPH-238": { caption: "Mature white cataract", look: "Check whether any red reflex remains through the pupil.",
      reveal: ["Opaque white lens filling the dilated pupil", "Spoke-like cortical opacities", "No red reflex from the fundus"] },
    "OPH-321": { caption: "Spontaneous lens dislocation in pseudoexfoliation", look: "Find the curved line crossing the dilated pupil.",
      reveal: ["Edge of the lens visible across the pupil", "Upper part of the pupil darker, with no lens", "Lens displaced downward: broken zonules"] },
    "OPH-301": { caption: "UGH syndrome: infrared transillumination of the iris", look: "Look for the areas where light passes through the iris.",
      reveal: ["Numerous transillumination defects (white areas) in the iris", "Radial defects and arc-shaped defects that follow the haptics of the IOL", "The sign of an iris chafed by the IOL"] },
    "OPH-303": { caption: "UBM: IOL optic against the posterior surface of the iris", look: "Find the very bright double line and what touches it.",
      reveal: ["IOL optic: a highly echogenic horizontal double line", "Iris resting on the IOL, with no space between them", "A different patient with UGH syndrome"] },
    "OPH-346": { caption: "Traumatic hyphema", look: "Look at the bottom of the anterior chamber.",
      reveal: ["Level of red blood at the bottom of the anterior chamber", "Height well under one third of the chamber: grade I", "Subconjunctival hemorrhage inferiorly"] },
    "OPH-314": { caption: "Angle closure after expansion of an intraocular gas", look: "Assess the redness of the eye and the contents of the anterior chamber.",
      reveal: ["Heavily injected eye", "Level of blood at the bottom of the anterior chamber", "Shallow anterior chamber in the slit beam", "Angle closure after expansion of an intraocular gas"] }
  });
  add("g-dev", {
    "OPH-325": { caption: "Primary congenital glaucoma: lines in the cornea, in the slit beam", look: "Follow the arrows in the slit beam: what do they show in the cornea?",
      reveal: ["Fine whitish lines in the cornea, marked by four arrows, within the slit beam", "Consistent with Haab striae (breaks in Descemet membrane), per the source diagnosis", "Haab striae: horizontal or concentric with the limbus; forceps striae: vertical or oblique", "They persist after IOP is lowered and cause astigmatism"] },
    "OPH-317": { caption: "Posterior embryotoxon: a prominent, anteriorly displaced Schwalbe line", look: "Look at the peripheral cornea, just inside the limbus.",
      reveal: ["Curved gray-white line parallel to the limbus in the peripheral cornea (right side of the image)", "It is a thickened, anteriorly displaced Schwalbe line: visible without gonioscopy", "Common on its own (about 10 to 15% of the population) and harmless; with iris strands attached to it: Axenfeld-Rieger spectrum → gonioscopy"] },
    "OPH-389": { caption: "Early ICE syndrome: hammered-silver endothelium", look: "Look at the endothelium in the specular reflection: is it smooth?",
      reveal: ["Finely granular, shiny endothelium, like hammered metal, at the edge of the light reflex", "The abnormal endothelial cells of ICE syndrome", "Reminiscent of Fuchs guttae, but ICE affects one eye only", "Confirm with specular microscopy"] },
    "OPH-387": { caption: "Essential iris atrophy: horizontally oval corectopia", look: "Look at the shape of the pupil and the iris stroma.",
      reveal: ["Oval pupil stretched horizontally (corectopia)", "Iris atrophy", "The endothelial membrane covering the angle contracts and pulls on the iris", "To do: gonioscopy (high synechiae) and IOP"] },
    "OPH-318": { caption: "Sturge-Weber syndrome: facial port-wine stain", look: "Look at the skin of the forehead and cheeks: color, texture, borders.",
      reveal: ["Flat pinkish red discoloration of the forehead and cheeks", "More marked on one side of the forehead, with a sharp border near the midline", "Involvement of the V1 territory (forehead, upper lid): risk of glaucoma on the same side", "Measure IOP and examine the discs regularly"] },
    "OPH-390": { caption: "Sturge-Weber: diffuse choroidal hemangioma (OD) and fellow eye", look: "Compare the fundus color in the two photos.",
      reveal: ["Left photo (OD): uniform dark red fundus, choroidal pattern hidden", "Right photo (fellow eye): orange fundus, choroidal vessels visible", "The “tomato ketchup” fundus of diffuse choroidal hemangioma", "Risk of suprachoroidal effusion or hemorrhage during filtering surgery"] }
  });
  // Module A5 (recognition entries): keys a5-<id>, texts from data/ext-a5-*.js
  add("a5-cataracte-nucleaire", {
    "OPH-234": { caption: "Nuclear sclerosis in optical section at the slit lamp", look: "Follow the beam from the cornea to the center of the lens and compare nucleus and cortex.",
      reveal: ["Oblique slit: the thin curved line of the cornea on the left, then the section of the lens", "Milky, pale yellow central nucleus, more opaque than the surrounding cortex", "Dilated pupil: the section shows the opacity in depth, at the center of the lens"] },
    "OPH-233": { caption: "Nuclear sclerosis: milky appearance of the pupillary area", look: "Look at the overall tint of the dilated pupil.",
      reveal: ["Diffuse milky gray pupillary area, denser centrally", "No spokes or plaque: the opacity is uniform and central"] },
    "OPH-235": { caption: "Brunescent nuclear cataract at the slit lamp", look: "Note the color of the lens from one edge of the image to the other.",
      reveal: ["Yellow-brown tint turning amber, then dark red-brown toward the right of the image", "Fine whitish spoke-like streaks on top: associated cortical opacities", "A nucleus of this color predicts high-energy phacoemulsification"] },
    "OPH-236": { caption: "Brunescent nuclear cataract at the slit lamp", look: "Compare the color of the nucleus with the little red reflex that gets through.",
      reveal: ["Yellow-brown nucleus filling almost the whole pupil", "Red reflex only at the right edge of the pupil: light passes poorly through the nucleus"] }
  });
  add("a5-cataracte-corticale-scp", {
    "OPH-241": { caption: "Posterior subcapsular cataract in direct illumination", look: "Look for a plaque in the center, at the back of the lens.",
      reveal: ["Golden yellow granular plaque in the center and right of the pupillary area", "The glittering look typical of the posterior surface", "The rest of the lens is relatively clear"] },
    "OPH-244": { caption: "Posterior subcapsular plaque on retroillumination", look: "Look at what stands out against the orange-red reflex.",
      reveal: ["Orange-red fundus reflex filling the dilated pupil", "Irregular granular plaque in the center and upper part of the reflex", "Retroillumination shows the true extent of the plaque"] },
    "OPH-246": { caption: "Mixed cataract: anterior polar, posterior subcapsular and cortical", look: "Find several types of opacity in the same lens.",
      reveal: ["Dense white opacity in the center of the pupil (anterior polar component)", "Fine whitish spokes in the periphery: cortical component", "Central posterior subcapsular component"] },
    "OPH-247": { caption: "Congenital sutural cataract", look: "Note the shape of the central opacity.",
      reveal: ["Y-shaped white opacity in the center of the lens, along the sutures", "Many small whitish dots around it", "The lens is otherwise fairly clear"] }
  });
  add("a5-cataracte-mature", {
    "OPH-210": { caption: "Mature cataract visible to the naked eye", look: "Compare the two pupils without a slit lamp.",
      reveal: ["A gray-white pupil clearly visible on one side (right eye)", "The other pupil is darker: obvious asymmetry", "No red reflex is possible through such an opacity"] },
    "OPH-237": { caption: "Mature brunescent cataract", look: "Look at the color and extent of the opacity.",
      reveal: ["Very dense amber-brown nucleus filling the whole pupil", "No red reflex and no fundus detail"] },
    "OPH-243": { caption: "Mature white cortical cataract", look: "Describe the color and pattern of the opacity.",
      reveal: ["Pearly white lens across the whole pupil", "Whitish spokes converging on the center: cortical origin"] },
    "OPH-240": { caption: "Morgagnian cataract: resorbed cortex, sunken nucleus", look: "Find the position of the nucleus in the pupil.",
      reveal: ["Yellow-brown nucleus resting in the lower part of the bag", "Dark zone above it: resorbed cortex", "Hypermature stage: risk of phacolytic glaucoma"] }
  });
  add("a5-opacification-capsulaire", {
    "OPH-248": { caption: "Posterior capsule opacification behind an IOL", look: "Look at the dilated pupillary area, behind the IOL.",
      reveal: ["Irregular gray-white plaques in the pupillary area, mostly superiorly and inferiorly", "Clear zones in between: the opacification is still partial", "A membrane forming behind a posterior chamber IOL"] }
  });
  add("a5-bscan", {
    "OPH-205": { caption: "B-scan: probe position for a transverse scan of 12 o’clock", look: "Compare the position of the probe with the region being examined.",
      reveal: ["Probe placed inferiorly on the eye, and “T12P” displayed at the lower right: transverse scan of 12 o’clock; the area examined is opposite the probe", "L–F arrow: the axis along which the probe is slid, between limbus (L) and fornix (F)", "Screen: probe on the left, curved posterior wall on the right, black vitreous", "Gain displayed at 90 dB: a high setting to show weak echoes"] },
    "OPH-207": { caption: "B-scan: transverse scan of the 3 o’clock meridian", look: "Note the direction of the arrow relative to the probe.",
      reveal: ["Horizontal F–L arrow: the same sliding axis, between fornix and limbus", "“T3P” displayed at the lower right: transverse scan of 3 o’clock, with the probe placed opposite the meridian examined", "Curved posterior wall on the right of the screen, dark vitreous"] },
    "OPH-209": { caption: "B-scan: longitudinal macular scan", look: "Look at the orientation of the probe and the markers on the screen.",
      reveal: ["Probe held on the closed lid, in a longitudinal scan", "Screen: OD and L9 displayed, that is the 9 o’clock meridian, the temporal (macular) side of a right eye", "Smooth posterior wall, black vitreous"] },
    "OPH-197": { caption: "B-scan of nanophthalmos", look: "Note the size of the cavity and the thickness of the wall.",
      reveal: ["Small vitreous cavity and a thick, highly reflective posterior wall", "Yellow calipers on the posterior wall: 2.38 mm displayed at the upper left", "A short eye with a thick sclera: risk of angle closure and uveal effusion"] }
  });
  add("a5-decollement-retine", {
    "OPH-287": { caption: "Rhegmatogenous retinal detachment, macula off (montage)", look: "Look for the border between flat and elevated retina.",
      reveal: ["White arrows: the edge of the detachment, which runs very close to the disc", "On the detached side, to the right of the arrows, the retina is duller and the macula is included", "Wide-field montage: the detachment covers a large part of the retina"] },
    "OPH-192": { caption: "Posterior pole of a macula-off retinal detachment", look: "Look at the macula and the texture of the retina around it.",
      reveal: ["Disc on the right, macula in the center of the image", "A subtle appearance: slightly dull, grayish retina around the macula", "Lesson: a centered photo can underestimate a detachment; examine the dilated periphery"] },
    "OPH-263": { caption: "Tractional detachment in proliferative diabetic retinopathy", look: "Find the membranes and follow their course.",
      reveal: ["Yellow-white fibrovascular membranes in a ring along the arcades, around the posterior pole", "Retina pulled and wrinkled under these membranes", "Scattered dark red hemorrhages"] }
  });
  add("a5-decollement-choroidien", {
    "OPH-291": { caption: "Choroidal detachment on fundus examination", look: "Describe the color, surface and position of the elevation.",
      reveal: ["Large, smooth, dark brown elevation over the right half of the image", "Disc on the left, with flat retina on that side", "Smooth, solid-looking surface with no folds or visible tear"] },
    "OPH-196": { caption: "Choroidal effusion in posterior scleritis (montage)", look: "Look at the periphery all around the posterior pole.",
      reveal: ["Several yellowish gray domes in the periphery, all around the posterior pole", "Disc and macula in the center, still flat", "Setting: posterior scleritis"] },
    "OPH-290": { caption: "B-scan: kissing serous choroidal detachments", look: "Note the shape of the membranes and the color of their contents.",
      reveal: ["Four scans: thick dome-shaped membranes, convex toward the center of the eye", "Black (anechoic) contents under the domes: serous fluid", "At the upper left the domes touch in the center: “kissing” choroidals"] },
    "OPH-195": { caption: "B-scan: appositional hemorrhagic choroidal detachments", look: "Compare the contents of the domes with those in the serous image.",
      reveal: ["Gray echogenic dome-shaped masses filling almost the whole cavity", "Small residual black vitreous space in the center", "Unliquefied clot, with no retinal detachment"] }
  });
  add("a5-dmla", {
    "OPH-264": { caption: "Early AMD", look: "Look for small deposits around the fovea.",
      reveal: ["A few small, subtle pale yellow dots around the macula", "Disc and vessels look normal", "Early form: no indication for supplements"] },
    "OPH-265": { caption: "High-risk intermediate AMD", look: "Describe the size and number of the macular deposits.",
      reveal: ["Many large, round, yellow drusen clustered at the macula", "Some touch each other: confluent drusen", "Disc on the right of the image"] },
    "OPH-212": { caption: "Neovascular AMD: macular subretinal hemorrhage", look: "Look at the macula, to the right of the disc.",
      reveal: ["Well-defined dark red hemorrhage at the macula", "Disc on the left of the image", "A sign of the neovascular form: prompt referral for anti-VEGF"] },
    "OPH-213": { caption: "Macular OCT: drusen and atrophy", look: "Follow the line of the pigment epithelium and look beneath it.",
      reveal: ["Foveal pit in the center of the scan", "Small bumps in the pigment epithelium line: drusen", "Under a central zone, a brighter, deeper signal in the choroid: atrophy"] },
    "OPH-266": { caption: "OCT: drusenoid pigment epithelial detachment", look: "Compare the two scans and the shape of the pigment epithelium.",
      reveal: ["Two scans (A and B) with the green scan line on the infrared image", "Dome-shaped elevations of the pigment epithelium in the center", "Small bright dots clustered in the center of the infrared image"] }
  });
  add("a5-retinopathie-diabetique", {
    "OPH-215": { caption: "Nonproliferative diabetic retinopathy with exudates", look: "Look for the yellow deposits and their distance from the center.",
      reveal: ["Yellow hard exudates clustered above and to the left of the fovea", "Image centered on the macula: exudates near the center raise concern for macular edema"] },
    "OPH-258": { caption: "Severe nonproliferative retinopathy with IRMA", look: "Look between the vascular arcades, at high magnification.",
      reveal: ["Many small dot and blot hemorrhages at the posterior pole", "Fine, irregular, tortuous vessels within the retina (IRMA)", "Severe nonproliferative form"] },
    "OPH-259": { caption: "Proliferative diabetic retinopathy: new vessels on the disc", look: "Look at the surface of the disc.",
      reveal: ["Disc on the left of the image, covered by a net of fine abnormal vessels (NVD)", "Blot hemorrhages scattered over the posterior pole", "A proliferative sign: also look for new vessels on the iris and in the angle"] },
    "OPH-260": { caption: "Wide-field angiography of proliferative retinopathy", look: "Compare the center and periphery of the angiogram.",
      reveal: ["Large blurry white area near the disc: leakage from new vessels", "Darker regions with few vessels in the periphery: nonperfusion", "White vessels on a gray background: fluorescein angiography"] },
    "OPH-261": { caption: "OCT of diabetic macular edema", look: "Judge by eye the thickness of the retina on either side of the fovea.",
      reveal: ["Vertical scan shown by the green line on the infrared image", "Retina thickened on one side of the fovea, with small dark cystic spaces", "Distorted foveal pit"] }
  });
  add("a5-occlusions-retiniennes", {
    "OPH-250": { caption: "Central retinal artery occlusion: cherry-red spot", look: "Compare the color of the retina at the posterior pole with the center of the macula.",
      reveal: ["Pale, slightly opaque retina at the posterior pole, with whitish patches around the disc and along the arcades", "Dark red center of the macula: the cherry-red spot", "No scattered hemorrhages, unlike a vein occlusion"] },
    "OPH-251": { caption: "Branch retinal artery occlusion: arrow at the disc", look: "Look at the magnified view on the right, where the arrow points.",
      reveal: ["White arrow: a small dot on an arteriole at the disc margin; probably an embolus", "A yellow, refractile embolus at this site would suggest a Hollenhorst plaque (cholesterol)", "Two photos side by side, each with a magnified view of the disc"] },
    "OPH-252": { caption: "Central retinal vein occlusion: “blood and thunder” appearance", look: "Look at all four quadrants, the veins and the disc.",
      reveal: ["Flame-shaped and blot hemorrhages in all quadrants", "Dilated, very tortuous veins", "White cotton-wool spots clustered around the disc, whose margins are obscured"] },
    "OPH-254": { caption: "Branch retinal vein occlusion: hemorrhages limited to one sector", look: "Outline the hemorrhagic area: the whole retina or a single venous territory?",
      reveal: ["Flame-shaped and blot hemorrhages fanning out on the temporal side, as far as the macular region", "The rest of the retina is spared: the territory of a single vein", "Montage of several photos"] },
    "OPH-255": { caption: "After a branch occlusion: preretinal new vessels, wide-field photo", look: "Follow the arrow at the upper right of the image.",
      reveal: ["Superotemporal retinal new vessels (neovascularization elsewhere), marked by the arrow", "A subtle lesion on the photo: angiography shows new vessels better (leakage)", "Wide-field photo in false colors, lashes visible at the bottom"] }
  });
  add("a5-retinopathie-hypertensive", {
    "OPH-256": { caption: "Hypertensive retinopathy with disc edema", look: "Find the two kinds of white lesions, then look at the disc.",
      reveal: ["Bright yellow hard exudates between the disc and the fovea", "Fluffy white cotton-wool spot on the inferior arcade", "Blurred disc margins; there are also flame-shaped and blot hemorrhages", "There is also pathological arteriovenous nicking"] },
    "OPH-257": { caption: "Malignant hypertension: multiple cotton-wool spots and a swollen disc", look: "Count the white spots and look at the disc margins.",
      reveal: ["Many cotton-wool spots around the disc and along the arcades", "Peripapillary flame-shaped hemorrhages", "Swollen disc with blurred margins: a medical emergency"] }
  });
  add("a5-macula-chirurgicale", {
    "OPH-267": { caption: "Very mild epiretinal membrane: often hard to see on fundus examination", look: "Look for a glistening reflex or folds around the macula.",
      reveal: ["A “trace” (very mild) membrane", "Few or no folds visible on the photo: OCT is what confirms it"] },
    "OPH-268": { caption: "Macular OCT: epiretinal membrane and thickened macula", look: "Look at the inner surface of the retina on the scan, then at the thickness map.",
      reveal: ["Hyperreflective line on the retinal surface, wrinkling it", "Foveal pit lost, macula domed", "Red-white map in the center: central thickness displayed at about 530 µm"] },
    "OPH-269": { caption: "OCT: lamellar hole with foveal schisis", look: "Follow the contour of the fovea and the retinal layers on each scan.",
      reveal: ["Excavated, irregular foveal contour", "Horizontal splitting between the layers (schisis) on either side of the fovea", "Outer layer still flat on the pigment epithelium: not a full-thickness hole"] },
    "OPH-270": { caption: "Macular hole after major blunt trauma", look: "Look at the center of the macula, then at the lower half of the image.",
      reveal: ["Round, well-defined dark red lesion in the center of the macula: macular hole", "Curved whitish streaks below the macula: traumatic sequelae (commotio retinae and choroidal rupture)"] },
    "OPH-272": { caption: "Late-phase angiography of CSC: leakage near the fovea", look: "Find the white (hyperfluorescent) spots near the center of the macula.",
      reveal: ["Irregular hyperfluorescent dots right next to the fovea: dye leakage", "Several leakage points, one of them foveal, with the classic “smokestack” leak", "Time displayed 02:33: late phase"] }
  });
  add("a5-peripherie-vitre", {
    "OPH-273": { caption: "Lattice degeneration of the peripheral retina", look: "Note the elongated band at the top of the illuminated area.",
      reveal: ["Criss-crossing white lines (sclerosed vessels)", "Small clumps of black pigment along the lesion", "An elongated, band-shaped lesion, typical of the periphery"] },
    "OPH-275": { caption: "Weiss ring: posterior vitreous detachment", look: "Look for a round structure floating beside the disc.",
      reveal: ["Grayish translucent ring beside the disc", "Blurry image: the ring is in the vitreous, in front of the plane of the retina", "Vitreous detached from around the optic nerve"] },
    "OPH-276": { caption: "Asteroid hyalosis: bright particles in the vitreous", look: "Compare the two panels: what is veiling the fundus on the left?",
      reveal: ["Left panel: a myriad of small, refractile yellow-white dots veiling the retina", "Right panel: sharp disc and vessels, for comparison"] }
  });
  add("a5-inflammation-infection", {
    "OPH-277": { caption: "Posterior synechiae: irregular pupil after uveitis", look: "Look at the shape and edge of the pupil.",
      reveal: ["Scalloped pupil with several lobes: the iris remains stuck to the lens in places", "Small pigmented deposits at the pupil margin", "Uveitis in TINU syndrome (tubulointerstitial nephritis and uveitis)"] },
    "OPH-278": { caption: "From a CMV retinitis case: cotton-wool spots", look: "Find the white spots: large areas of necrosis or small spots?",
      reveal: ["A few small fluffy white spots near the arcades: cotton-wool spots", "No large area of white, hemorrhagic necrosis on this photo", "Disc and macula look preserved"] },
    "OPH-279": { caption: "Ocular toxoplasmosis: old pigmented chorioretinal scar", look: "Look for a well-defined lesion below the inferotemporal arcade.",
      reveal: ["Small, round, well-defined scar with a pigmented edge, just beyond the inferotemporal arcade", "A fainter pale zone just below it", "Disc and macula visible, with no lesion"] },
    "OPH-199": { caption: "Acute retinal necrosis: areas of necrosis in the periphery", look: "Compare the periphery with the posterior pole on this wide-field photo.",
      reveal: ["Broad, pale, confluent area in the periphery, at the left edge of the image", "Another smaller pale focus in the periphery, upper left", "Disc and posterior pole still spared; wide-field photo in false colors"] },
    "OPH-376": { caption: "Panophthalmitis: infection of the whole globe and adjacent tissues", look: "Look at the lids, conjunctiva and cornea.",
      reveal: ["Red, swollen lids, yellow-green purulent discharge", "Heavily injected, edematous conjunctiva (chemosis)", "Opaque grayish cornea: no iris detail"] }
  });
  add("a5-papille-oedeme", {
    "OPH-219": { caption: "Marked bilateral papilledema", look: "Check whether the vessels stay visible at the disc margins.",
      reveal: ["Two very swollen discs with completely blurred margins", "Many flame-shaped hemorrhages around the discs", "Vessels obscured by edema at the disc margin, in both eyes"] },
    "OPH-220": { caption: "Resolved papilledema (same patient)", look: "Compare with the previous photo: margins, vessels, hemorrhages.",
      reveal: ["Disc margins sharp again", "Hemorrhages gone; vessels clearly visible on the discs"] },
    "OPH-221": { caption: "Nonarteritic AION: swollen disc", look: "Examine the disc margins and the sharpness of the vessels crossing it.",
      reveal: ["Blurred, swollen-looking disc margin (nonarteritic AION)", "The photo is slightly hazy overall: judge the edema by the disc margins, not by overall sharpness", "No extensive hemorrhage and no macular exudate"] },
    "OPH-223": { caption: "Optic disc drusen: lumpy discs with refractile bodies", look: "Follow the arrows and check whether the vessels stay sharp.",
      reveal: ["Small shiny yellowish bodies at the disc margins (arrows)", "Lumpy contour, in both eyes", "Sharp vessels on the disc, with no hemorrhage: pseudoedema"] },
    "OPH-224": { caption: "Neuroretinitis on day 1: swollen disc", look: "Look at the disc, then at the macula.",
      reveal: ["Swollen disc with blurred margins", "No definite macular star on this day 1 photo: it often appears later"] }
  });
  add("a5-pupilles-neuro", {
    "OPH-281": { caption: "Physiological anisocoria: in light, in the dark, then after cocaine", look: "Compare the difference in pupil size in each row.",
      reveal: ["Slight difference in size, about the same in light and in the dark", "After cocaine both pupils dilate: no Horner syndrome"] },
    "OPH-282": { caption: "Before an apraclonidine test: pupils in light and in the dark", look: "Compare the difference between the pupils in the left column (light) and the right column (dark).",
      reveal: ["Photos taken BEFORE the drop, to document the baseline anisocoria", "Six conditions: light or dark (5 and 15 s), at distance and at near", "Ruler on the first photo for measuring the pupils"] },
    "OPH-283": { caption: "Goldmann field: left homonymous hemianopia (occipital stroke)", look: "Find the line that limits the isopters in each plot.",
      reveal: ["Left half of the field absent in both eyes", "Isopters stopping sharply at the vertical meridian", "Blind spot (blue dot) visible in the preserved right half of one of the plots"] }
  });
  add("a5-tumeurs-toxicite-trauma", {
    "OPH-285": { caption: "Choroidal nevus temporal to the fovea", look: "Find the gray lesion and look for worrying signs on its surface.",
      reveal: ["Flat-looking gray-green area with indistinct edges, on the temporal side of the macula (away from the disc)", "No orange pigment or visible fluid", "Far from the disc"] },
    "OPH-286": { caption: "Choroidal melanoma with orange pigment", look: "Look at the surface of the large pigmented lesion.",
      reveal: ["Large gray-green lesion several disc diameters across", "Clumps of orange pigment on its surface", "Disc at the lower right, away from the lesion"] },
    "OPH-284": { caption: "Chloroquine retinal toxicity", look: "Look at the pigment epithelium around the fovea.",
      reveal: ["Large area of atrophy and pigmentary change at the posterior pole", "Darker fovea in the center of the affected zone", "Extensive involvement: late, irreversible stage"] },
    "OPH-280": { caption: "Commotio retinae after a BB gun pellet", look: "Find the areas of retina that are whiter than normal.",
      reveal: ["Ill-defined grayish white areas of retina", "A few small hemorrhages in the periphery, on the left", "Montage of several photos"] }
  });
})(G.OPH_EN.photos);
