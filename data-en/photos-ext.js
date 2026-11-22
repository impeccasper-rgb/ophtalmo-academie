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
    "OPH-389": { caption: "Early ICE syndrome: beaten-silver endothelium", look: "Look at the endothelium in the specular reflection: is it smooth?",
      reveal: ["Finely granular, shiny endothelium, like beaten metal, at the edge of the light reflex", "The abnormal endothelial cells of ICE syndrome", "Reminiscent of Fuchs guttae, but ICE affects one eye only", "Confirm with specular microscopy"] },
    "OPH-387": { caption: "Essential iris atrophy: horizontally oval corectopia", look: "Look at the shape of the pupil and the iris stroma.",
      reveal: ["Oval pupil stretched horizontally (corectopia)", "Iris atrophy", "The endothelial membrane covering the angle contracts and pulls on the iris", "To do: gonioscopy (high synechiae) and IOP"] },
    "OPH-318": { caption: "Sturge-Weber syndrome: facial port-wine stain", look: "Look at the skin of the forehead and cheeks: color, texture, borders.",
      reveal: ["Flat pinkish red discoloration of the forehead and cheeks", "More marked on one side of the forehead, with a sharp border near the midline", "Involvement of the V1 territory (forehead, upper lid): risk of glaucoma on the same side", "Measure IOP and examine the discs regularly"] },
    "OPH-390": { caption: "Sturge-Weber: diffuse choroidal hemangioma (OD) and fellow eye", look: "Compare the fundus color in the two photos.",
      reveal: ["Left photo (OD): uniform dark red fundus, choroidal pattern hidden", "Right photo (fellow eye): orange fundus, choroidal vessels visible", "The “tomato ketchup” fundus of diffuse choroidal hemangioma", "Risk of suprachoroidal effusion or hemorrhage during filtering surgery"] }
  });
})(G.OPH_EN.photos);
