#!/usr/bin/env python3
"""Generate imgsrc3/sources.json (cycle 2, open-licence images).

PMC entries: licence checked on 2026-11-21 with the PubMed/PMC copyright API
(get_copyright_status) unless `licence_check` says 'build'; captions translated
from the figure legend returned by PMC full text. The direct figure file is
resolved at build time (Europe PMC JATS XML -> graphic href), because this
container cannot reach PMC/Europe PMC.

Commons entries: file names confirmed to exist by web search on 2026-11-21, but
the file pages could not be read from this container (Wikimedia blocked). The
licence, author and source description are therefore read from the Commons API
at build time and the file is SKIPPED unless the licence is CC0 / public domain /
CC BY / CC BY-SA. Captions are limited to what the file name states.
"""
import json, urllib.parse, sys

CCBY4 = "https://creativecommons.org/licenses/by/4.0/"
CCBY3 = "https://creativecommons.org/licenses/by/3.0/"
CCBY2 = "https://creativecommons.org/licenses/by/2.0/"

def pmc(pmcid, fig, title, caption, author, module, exam, topics, area,
        license="CC BY 4.0", license_url=CCBY4, check="verified-2026-11-21", doi=None, article=None):
    return {
        "source": "pmc",
        "url": None,  # resolved at build: Europe PMC XML graphic href -> europepmc.org/articles/<PMCID>/bin/<href>
        "resolve": {"pmcid": pmcid, "fig": fig},
        "page_url": f"https://pmc.ncbi.nlm.nih.gov/articles/{pmcid}/",
        "doi": doi,
        "article": article,
        "title": title, "caption": caption,
        "license": license, "license_url": license_url, "licence_check": check,
        "author": author, "module": module, "exam": exam, "topics": topics,
        "area": area, "caption_basis": "figure legend (PMC full text)",
    }

def commons(name, title, caption, module, exam, topics, area):
    q = urllib.parse.quote(name.replace(" ", "_"))
    return {
        "source": "commons",
        "url": f"https://commons.wikimedia.org/wiki/Special:FilePath/{q}",
        "resolve": {"commons_file": name},
        "page_url": f"https://commons.wikimedia.org/wiki/File:{q}",
        "title": title, "caption": caption,
        "license": "verify-at-build", "license_url": None, "licence_check": "build",
        "author": "verify-at-build", "module": module, "exam": exam, "topics": topics,
        "area": area, "caption_basis": "file name only (source description added at build)",
    }

T = lambda fr, en: {"fr": fr, "en": en}
S = []

# ---------------- Priority 1: imaging gaps (INV-IMAGES.md §4) ----------------
# Gonioscopy
CEHJ_GONIO = dict(author="Winnie Nolan, Adeola Onakoya — Community Eye Health Journal 2021;34(112)",
                  article="Gonioscopy skills and techniques")
S.append(pmc("PMC8862628", "Figure 1",
    T("Gonioscopie : angle ouvert normal (photos et schémas)", "Gonioscopy: normal open angle (photos and drawings)"),
    T("Deux photographies (A, B) et deux dessins (C, D) des structures vues en gonioscopie d’un angle ouvert. B : dispersion pigmentaire, angle densément pigmenté (surtout le trabéculum pigmenté). Le dessin en coupe et le dessin de face montrent le « coin cornéen » (rencontre des reflets des faces interne et externe de la cornée), qui situe la ligne de Schwalbe, utile dans les angles peu pigmentés.",
      "Two photographs (A, B) and two drawings (C, D) of the structures seen on gonioscopy of an open angle. B: pigment dispersion, densely pigmented angle (especially the pigmented trabecular meshwork). The cross-section and face-on drawings show the corneal wedge (where the reflections from the inner and outer corneal surfaces meet), marking Schwalbe’s line, helpful in hypopigmented angles."),
    CEHJ_GONIO["author"], "I", "gonio", ["ex-gonioscopie", "g-pigmentaire"], "gonio", article=CEHJ_GONIO["article"]))
S.append(pmc("PMC8862628", "Figure 3",
    T("Pose d’un verre de gonioscopie indirect avec gel de couplage", "Inserting an indirect gonioscopy lens with coupling gel"),
    T("Insertion d’un verre de gonioscopie indirect avec gel de couplage.", "Insertion of an indirect gonioscopy lens using coupling gel."),
    CEHJ_GONIO["author"], "I", "gonio", ["ex-gonioscopie"], "gonio", article=CEHJ_GONIO["article"]))
S.append(pmc("PMC8862628", "Figure 4",
    T("Classification de Shaffer de l’angle", "Shaffer grading of the angle"),
    T("Système de classification de Shaffer (figure de l’article ; grade 0 : aucune structure visible … grade 4 : bande ciliaire visible).",
      "Shaffer grading system (figure from the article; grade 0: no structure visible … grade 4: ciliary body band visible)."),
    CEHJ_GONIO["author"], "I", "gonio", ["ex-gonioscopie", "g-fermeture"], "gonio", article=CEHJ_GONIO["article"]))
S.append(pmc("PMC10276512", "Fig. 1",
    T("Glaucome avancé : papille, gonioscopie (angle ouvert, trabéculum hyperpigmenté), CV 30-2, OCT", "Advanced glaucoma: disc, gonioscopy (open angle, hyperpigmented meshwork), 30-2 field, OCT"),
    T("A : photo du fond d’œil d’une papille glaucomateuse. B : gonioscopie montrant un angle ouvert et un trabéculum hyperpigmenté. C : périmétrie automatisée Humphrey 30-2 avec constriction sévère du champ (MD −30,81 dB). D, E : OCT de la tête du nerf optique avec perte diffuse de la couche des fibres nerveuses (glaucome secondaire à une uvéite).",
      "A: fundus photograph of the glaucomatous optic disc. B: gonioscopy showing an open angle and a hyperpigmented trabecular meshwork. C: Humphrey 30-2 automated perimetry with severe field constriction (MD −30.81 dB). D, E: optic nerve head OCT with diffuse retinal nerve fibre layer loss (glaucoma secondary to uveitis)."),
    "Authors of BMC Ophthalmol 2023;23:270 case report (author list filled at build)", "I", "gonio", ["ex-gonioscopie", "ex-champs-visuels", "ex-oct", "g-secondaires"], "gonio",
    check="build (BMC Ophthalmology: CC BY 4.0 expected; PMC API returned no licence field)", doi="10.1186/s12886-023-03033-w",
    article="Choroidal detachment and hypotony following selective laser trabeculoplasty: a case report"))

# B-scan
CPC = "Clin Pract Cases Emerg Med"
S.append(pmc("PMC8610488", "Image 1",
    T("Échographie B : décollement de rétine attaché à la papille et à l’ora serrata", "B-scan: retinal detachment tethered at the disc and ora serrata"),
    T("Œil droit, coupe transversale : séparation de la rétine attachée au niveau de la papille (*) et de l’ora serrata (flèches). Échographie au lit du malade après traumatisme crânien.",
      "Right eye, transverse view: retinal separation with attachment at the level of the optic disc (*) and the ora serrata (arrows). Point-of-care ultrasound after blunt head trauma."),
    f"Shirke — {CPC} 2021;5(4)", "I", "bscan", ["a5-bscan", "a5-decollement-retine"], "bscan",
    doi="10.5811/cpcem.2021.7.52725", article="Traumatic Anterior Dislocation of Ocular Cataract Lens"))
S.append(pmc("PMC8610488", "Image 2",
    T("Échographie : cristallin cataracté luxé dans la chambre antérieure", "Ultrasound: cataractous lens dislocated into the anterior chamber"),
    T("Œil droit, coupe sagittale : cristallin échogène évoquant une cataracte (étoile) et subluxation du cristallin dans la chambre antérieure (point blanc), signant une luxation antérieure.",
      "Right eye, sagittal view: echogenic lens indicating cataract (star) and subluxation of the lens into the anterior chamber (white dot), indicating anterior lens dislocation."),
    f"Shirke — {CPC} 2021;5(4)", "I", "bscan", ["a5-bscan", "a5-tumeurs-toxicite-trauma", "g-cristallin"], "bscan",
    doi="10.5811/cpcem.2021.7.52725", article="Traumatic Anterior Dislocation of Ocular Cataract Lens"))
S.append(pmc("PMC13518040", "Image 6",
    T("Échographie : hémorragie du vitré déposée en membrane déclive (traumatisme)", "Ultrasound: vitreous haemorrhage settled as a dependent membrane (trauma)"),
    T("Cas 4 (garçon de 12 ans, coup de batte) : suspicion d’hémorragie du vitré et de rupture du globe. A : technique du « bain d’eau modifié » (flèche rouge) ; B : méthode conventionnelle avec beaucoup de gel (flèche jaune) ; C : scanner évoquant une atteinte du globe gauche. Selon le tableau de l’article : globe diminué de taille, hémorragie du vitré déposée en membrane dans la partie déclive.",
      "Case 4 (12-year-old boy hit by a bat): suspected vitreous haemorrhage and globe rupture. A: modified water bath technique (red arrow); B: conventional method with copious gel (yellow arrow); C: CT suggestive of left globe injury. Per the article’s table: decreased globe size with vitreous haemorrhage settled as a membrane at the bottom."),
    f"Chawang et al. — {CPC} 2026", "I", "bscan", ["a5-bscan", "a5-peripherie-vitre", "a5-tumeurs-toxicite-trauma"], "bscan",
    doi="10.5811/cpcem.48653", article="Novel Technique in Performing Ocular Ultrasound in Trauma: A Case Series"))
S.append(pmc("PMC13518040", "Image 5",
    T("Échographie : rupture du globe avec corps étrangers intraoculaires (ombre acoustique)", "Ultrasound: globe rupture with intraocular foreign bodies (acoustic shadowing)"),
    T("Cas 3 (blessure par feu d’artifice) : A, œil droit normal ; B, rupture du globe gauche avec corps étrangers intraoculaires visibles comme des structures échogènes avec ombre acoustique postérieure (astérisques) ; C, scanner évoquant une rupture du globe gauche.",
      "Case 3 (fireworks injury): A, normal right eye; B, left globe rupture with intraocular foreign bodies seen as echogenic structures with posterior acoustic shadowing (asterisks); C, CT suggestive of left globe rupture."),
    f"Chawang et al. — {CPC} 2026", "I", "bscan", ["a5-bscan", "a5-tumeurs-toxicite-trauma"], "bscan",
    doi="10.5811/cpcem.48653", article="Novel Technique in Performing Ocular Ultrasound in Trauma: A Case Series"))
S.append(pmc("PMC13518040", "Image 7",
    T("Échographie : décollement choroïdien après traumatisme", "Ultrasound: choroidal detachment after trauma"),
    T("Cas 5 : décollement choroïdien de l’œil droit. A : échographie conventionnelle (flèche rouge) ; B : technique du bain d’eau modifié (flèche jaune) ; C : scanner de l’atteinte du globe.",
      "Case 5: right eye choroidal detachment. A: conventional ocular ultrasound (red arrow); B: modified water bath technique (yellow arrow); C: CT image of the globe injury."),
    f"Chawang et al. — {CPC} 2026", "I", "bscan", ["a5-bscan", "a5-decollement-choroidien"], "bscan",
    doi="10.5811/cpcem.48653", article="Novel Technique in Performing Ocular Ultrasound in Trauma: A Case Series"))
S.append(pmc("PMC10276512", "Fig. 2",
    T("Décollement choroïdien après trabéculoplastie : fond d’œil, B-scan, OCT, puis résolution", "Choroidal detachment after SLT: fundus, B-scan, OCT, then resolution"),
    T("A–C : décollement choroïdien 21 jours après trabéculoplastie sélective (PIO 4 mmHg) — A, photo grand champ ; B, échographie B ; C, OCT montrant un pli choriorétinien (maculopathie d’hypotonie). D–F : amélioration à 2 mois — D, photo grand champ et F, OCT avec rétine à plat ; E, échographie B avec résolution complète des effusions choroïdiennes.",
      "A–C: choroidal detachment 21 days after selective laser trabeculoplasty (IOP 4 mmHg) — A, wide-field fundus photograph; B, B-scan ultrasonography; C, OCT showing a chorioretinal fold due to hypotony maculopathy. D–F: improvement 2 months after SLT — D, wide-field photograph and F, OCT showing a flat retina; E, B-scan showing complete resolution of the choroidal effusions."),
    "Authors of BMC Ophthalmol 2023;23:270 case report (author list filled at build)", "I", "bscan", ["a5-bscan", "a5-decollement-choroidien", "g-postop"], "bscan",
    check="build (BMC Ophthalmology: CC BY 4.0 expected; PMC API returned no licence field)", doi="10.1186/s12886-023-03033-w",
    article="Choroidal detachment and hypotony following selective laser trabeculoplasty: a case report"))
S.append(pmc("PMC9197736", "Image 1",
    T("Échographie : bande hyperéchogène d’hémorragie prérétinienne (piège : simule un DR)", "Ultrasound: hyperechoic band of preretinal haemorrhage (pitfall: mimics RD)"),
    T("Échographie mode B de l’œil droit : bande hyperéchogène (flèche) dans le segment postérieur avec échos dispersés en arrière. Diagnostic final : rétinopathie de Valsalva (hémorragie prérétinienne), rétine à plat ; la bande croisait la papille.",
      "B-mode ultrasound of the right eye: hyperechoic band (arrow) in the posterior segment with underlying scattered echoes. Final diagnosis: Valsalva retinopathy (preretinal haemorrhage) with an attached retina; the band crossed the optic nerve."),
    f"Johnson — {CPC} 2022;6(2)", "I", "bscan", ["a5-bscan", "a5-decollement-retine", "a5-peripherie-vitre"], "bscan",
    doi="10.5811/cpcem.2022.1.55173", article="Valsalva Retinopathy Masking as a Retinal Detachment on Point-of-care Ocular Ultrasound: A Case Report"))
S.append(pmc("PMC9197736", "Image 2",
    T("Échographie : la même bande prérétinienne traverse tout le globe", "Ultrasound: the same preretinal band spans the whole globe"),
    T("Échographie mode B de l’œil droit : bande hyperéchogène (flèche) dans le segment postérieur, s’étendant sur tout le globe (rétinopathie de Valsalva).",
      "B-mode ultrasound of the right eye: hyperechoic band (arrow) in the posterior segment spanning the entire globe (Valsalva retinopathy)."),
    f"Johnson — {CPC} 2022;6(2)", "I", "bscan", ["a5-bscan", "a5-peripherie-vitre"], "bscan",
    doi="10.5811/cpcem.2022.1.55173", article="Valsalva Retinopathy Masking as a Retinal Detachment on Point-of-care Ocular Ultrasound: A Case Report"))
S.append(pmc("PMC6682246", "Image 2",
    T("Échographie : hyalite astéroïde (piège : simule une hémorragie du vitré)", "Ultrasound: asteroid hyalosis (pitfall: mimics vitreous haemorrhage)"),
    T("Échographie mode B : plusieurs particules échogènes distinctes, flottant librement (^), compatibles avec une hyalite astéroïde.",
      "B-mode sonogram demonstrating several discrete, free-floating echogenic particles (^) consistent with asteroid hyalosis."),
    f"Arthurs et al. — {CPC} 2019;3(3)", "I", "bscan", ["a5-bscan", "a5-peripherie-vitre"], "bscan",
    check="verified-2026-11-21", doi="10.5811/cpcem.2019.6.42935", article="Asteroid Hyalosis Seen on Ocular Point-of-Care Ultrasound"))
S.append(pmc("PMC12594224", "Image 1",
    T("Échographie B : liquide sous-rétinien et masse choroïdienne (mélanome)", "B-scan: subretinal fluid and choroidal mass (melanoma)"),
    T("Échographie B de l’œil gauche : liquide sous-rétinien séreux et masse choroïdienne (flèche). Diagnostic confirmé : mélanome choroïdien amélanotique.",
      "B-scan ultrasound of the left eye demonstrating serous subretinal fluid and a choroidal mass (arrow). Confirmed diagnosis: amelanotic choroidal melanoma."),
    f"Matin et al. — {CPC} 2025", "I", "bscan", ["a5-bscan", "a5-tumeurs-toxicite-trauma"], "bscan",
    doi="10.5811/cpcem.25339", article="Primary Choroidal Melanoma in a 30-year-old Woman with Monocular Flashers"))
S.append(pmc("PMC8373173", "Image",
    T("Échographie : masse pédiculée hyperéchogène (mélanome uvéal)", "Ultrasound: pedunculated hyperechoic mass (uveal melanoma)"),
    T("Échographie au lit du malade : masse hyperéchogène pédiculée (flèche blanche) dans la cavité postérieure de l’œil droit ; mélanome uvéal confirmé à l’histologie.",
      "Point-of-care ultrasound demonstrating a hyperechoic, pedunculated mass (white arrow) in the posterior segment of the right eye; uveal melanoma confirmed on histopathology."),
    f"Spungen et al. — {CPC} 2021;5(3)", "I", "bscan", ["a5-bscan", "a5-tumeurs-toxicite-trauma"], "bscan",
    doi="10.5811/cpcem.2021.4.52115", article="Uveal Melanoma Identified as Ocular Mass on Point-of-care Ultrasound"))
S.append(pmc("PMC8373180", "Image",
    T("Échographie : implant intraoculaire luxé dans la cavité vitréenne", "Ultrasound: intraocular lens dislocated into the vitreous cavity"),
    T("Échographie montrant la luxation de l’implant intraoculaire (flèche) en arrière ; l’implant apparaît comme une structure curviligne hyperéchogène.",
      "Ultrasound image showing intraocular lens dislocation (arrow) posteriorly; the prosthetic lens appears as a hyperechoic curvilinear structure."),
    f"Pizarro et al. — {CPC} 2021;5(3)", "I", "bscan", ["a5-bscan", "a5-opacification-capsulaire"], "bscan",
    doi="10.5811/cpcem.2021.3.52208", article="Case Report: Diagnosis of Late Spontaneous Intraocular Lens Dislocation on Point-of-care Ultrasound"))
S.append(pmc("PMC10855287", "Image 1",
    T("Échographie : endophtalmie et abcès orbitaire", "Ultrasound: endophthalmitis and orbital abscess"),
    T("A : collection hypoéchogène (astérisque) dans la partie latérale de l’orbite = abcès orbitaire. B : débris purulents échogènes, irréguliers et cloisonnés dans le vitré (étoile) = signe clé de l’endophtalmie. C, D : zone hypoéchogène en arrière de la rétine et de la choroïde (pointes de flèche) = liquide dans l’espace sous-ténonien ; fine membrane croisant le nerf optique (flèches) = décollement postérieur du vitré.",
      "A: hypoechoic fluid collection (asterisk) in the lateral orbit = orbital abscess. B: echogenic, irregular, loculated purulent debris in the vitreous (star) = key finding of endophthalmitis. C, D: hypoechoic region behind the retina and choroid (arrowheads) = fluid in sub-Tenon’s space; thin membrane crossing the optic nerve (arrows) = posterior vitreous detachment."),
    f"Haight et al. — {CPC} 2023;7(4)", "I", "bscan", ["a5-bscan", "a5-inflammation-infection"], "bscan",
    doi="10.5811/cpcem.1427", article="Diagnosis of Endophthalmitis and Orbital Abscess by Ultrasound: A Case Report"))

# OCT
S.append(pmc("PMC3931271", "Figure 1",
    T("OCT : traction vitréomaculaire → trou maculaire transfixiant → fermeture", "OCT: vitreomacular traction → full-thickness macular hole → closure"),
    T("SD-OCT avant et après vitrectomie. a : traction vitréomaculaire avec trou lamellaire externe et contour fovéolaire anormal (AV 0,04). b : J7 après vitrectomie avec pelage de la limitante interne : trou maculaire transfixiant avec espaces cystoïdes sur les deux berges (AV 0,08). c : 1 mois, trou fermé avec soulèvement de la couche des photorécepteurs et de la limitante externe dans la fovéa, microkystes intrarétiniens (AV 0,2). d : 5 mois, contour fovéolaire normal sans liquide (AV 0,5).",
      "SD-OCT before and after vitrectomy. a: vitreomacular traction with an outer lamellar macular hole and abnormal foveal contour (VA 0.04). b: day 7 after vitrectomy with ILM peeling: full-thickness macular hole with intraretinal cystoid spaces on both edges (VA 0.08). c: 1 month, closed hole with elevation of the photoreceptor layer and external limiting membrane in the fovea and intraretinal microcystoid spaces (VA 0.2). d: 5 months, normal foveal contour without subretinal fluid (VA 0.5)."),
    "Authors of BMC Ophthalmol 2014;14:17 (author list filled at build)", "I", "oct", ["ex-oct", "a5-macula-chirurgicale"], "oct",
    license="CC BY 2.0", license_url=CCBY2, check="build (BMC 2014: CC BY 2.0 expected; not queried)", doi="10.1186/1471-2415-14-17",
    article="Macular hole formation and spontaneous closure after vitrectomy for vitreomacular traction documented in spectral-domain optical coherence tomography"))
S.append(commons("HealthyMacula OCT.jpg",
    T("OCT d’une macula saine", "OCT of a healthy macula"),
    T("Coupe OCT d’une macula saine (d’après le nom du fichier ; description source ajoutée au build).", "OCT cross-section of a healthy macula (per file name; source description added at build)."),
    "I", "oct", ["ex-oct"], "oct"))
S.append(commons("Spectral Domain OCT - Macula Cross-Sections.png",
    T("OCT spectral : coupes maculaires", "Spectral-domain OCT: macular cross-sections"),
    T("Coupes maculaires en OCT spectral (d’après le nom du fichier).", "Spectral-domain OCT macular cross-sections (per file name)."),
    "I", "oct", ["ex-oct"], "oct"))
S.append(commons("Central serous retinopathy.jpg",
    T("Choriorétinopathie séreuse centrale", "Central serous retinopathy"),
    T("Choriorétinopathie séreuse centrale (d’après le nom du fichier ; modalité d’imagerie à confirmer par la description source).", "Central serous retinopathy (per file name; imaging modality to be confirmed from the source description)."),
    "I", "oct", ["ex-oct", "a5-macula-chirurgicale"], "oct"))

# Visual fields (Humphrey)
S.append(pmc("PMC8862619", "Figure 8",
    T("Glaucome : photo de papille, rapport OCT et champ visuel du même œil", "Glaucoma: disc photo, OCT report and visual field of the same eye"),
    T("Photographie du fond d’œil, rapport d’OCT et champ visuel du nerf optique droit d’un patient glaucomateux.", "Fundus photograph, optical coherence tomography report and visual field of the right optic nerve of a patient with glaucoma."),
    "Rupert R A Bourne, Tasneem Khatib — Community Eye Health Journal 2021;34(112)", "I", "cv", ["ex-champs-visuels", "ex-oct", "g-papille"], "cv",
    article="The optic nerve head in glaucoma"))
S.append(commons("Humphrey visual field.JPG",
    T("Champ visuel Humphrey", "Humphrey visual field"),
    T("Champ visuel Humphrey (d’après le nom du fichier ; type de programme et fiabilité à lire sur l’image source).", "Humphrey visual field (per file name; test pattern and reliability to be read from the source image)."),
    "I", "cv", ["ex-champs-visuels"], "cv"))

# Fundus
S.append(commons("Fundus photograph of normal left eye.jpg",
    T("Fond d’œil normal (œil gauche)", "Normal fundus (left eye)"),
    T("Photographie du fond d’œil normal d’un œil gauche (d’après le nom du fichier).", "Fundus photograph of a normal left eye (per file name)."),
    "I", "fondoeil", ["ex-papille"], "fondoeil"))
S.append(commons("Fundus photograph of normal right eye.jpg",
    T("Fond d’œil normal (œil droit)", "Normal fundus (right eye)"),
    T("Photographie du fond d’œil normal d’un œil droit (d’après le nom du fichier).", "Fundus photograph of a normal right eye (per file name)."),
    "I", "fondoeil", ["ex-papille"], "fondoeil"))
S.append(pmc("PMC8862619", "Figure 2",
    T("Tête du nerf optique normale", "Normal optic nerve head"),
    T("Tête du nerf optique normale (le bord de l’excavation se lit au coude des petits vaisseaux, pas à la différence de couleur).", "Normal optic nerve head (the cup edge is judged by the bend of the small vessels, not by the colour difference)."),
    "Rupert R A Bourne, Tasneem Khatib — Community Eye Health Journal 2021;34(112)", "I", "fondoeil", ["ex-papille", "g-papille"], "fondoeil",
    article="The optic nerve head in glaucoma"))
S.append(pmc("PMC8862619", "Figure 3",
    T("Papille normale d’un jeune patient africain", "Normal optic disc of a young African patient"),
    T("Tête du nerf optique normale d’un jeune patient africain ; aspect « plumeux » des fibres nerveuses au-dessus et au-dessous du disque.", "Normal optic nerve head of a young African patient; ‘feathery’ nerve fibre layer above and below the disc."),
    "Rupert R A Bourne, Tasneem Khatib — Community Eye Health Journal 2021;34(112)", "I", "fondoeil", ["ex-papille", "g-papille"], "fondoeil",
    article="The optic nerve head in glaucoma"))
S.append(commons("Papilledema.jpg",
    T("Œdème papillaire (papilloedème)", "Papilledema"),
    T("Papilloedème (d’après le nom du fichier).", "Papilledema (per file name)."),
    "I", "fondoeil", ["a5-papille-oedeme"], "fondoeil"))
S.append(commons("Cherry red spot in patient with central retinal artery occlusion (CRAO).jpg",
    T("Tache rouge cerise d’une occlusion de l’artère centrale de la rétine", "Cherry-red spot in central retinal artery occlusion"),
    T("Tache rouge cerise chez un patient atteint d’occlusion de l’artère centrale de la rétine (d’après le nom du fichier).", "Cherry-red spot in a patient with central retinal artery occlusion (per file name)."),
    "I", "fondoeil", ["a5-occlusions-retiniennes"], "fondoeil"))
S.append(commons("Fondo de ojo Ostrucción Vena central.png",
    T("Occlusion de la veine centrale de la rétine (fond d’œil)", "Central retinal vein occlusion (fundus)"),
    T("Fond d’œil d’une occlusion de la veine centrale de la rétine (d’après le nom du fichier, en espagnol).", "Fundus of a central retinal vein occlusion (per the Spanish file name)."),
    "I", "fondoeil", ["a5-occlusions-retiniennes"], "fondoeil"))
S.append(commons("Fundus Proliferative retinopathy EDA01.JPG",
    T("Rétinopathie diabétique proliférante (fond d’œil)", "Proliferative diabetic retinopathy (fundus)"),
    T("Fond d’œil : rétinopathie proliférante (d’après le nom du fichier).", "Fundus: proliferative retinopathy (per file name)."),
    "I", "fondoeil", ["a5-retinopathie-diabetique"], "fondoeil"))
S.append(commons("Fundus retinopathy EDA03.JPG",
    T("Rétinopathie (fond d’œil, série EDA)", "Retinopathy (fundus, EDA series)"),
    T("Fond d’œil : rétinopathie (d’après le nom du fichier ; type précis à confirmer par la description source).", "Fundus: retinopathy (per file name; exact type to be confirmed from the source description)."),
    "I", "fondoeil", ["a5-retinopathie-diabetique"], "fondoeil"))
S.append(commons("Fundus Diabetic macular edema EDA04.JPG",
    T("Œdème maculaire diabétique (fond d’œil)", "Diabetic macular oedema (fundus)"),
    T("Fond d’œil : œdème maculaire diabétique (d’après le nom du fichier).", "Fundus: diabetic macular oedema (per file name)."),
    "I", "fondoeil", ["a5-retinopathie-diabetique"], "fondoeil"))
S.append(commons("Rhegmatogene amotio retinae.jpg",
    T("Décollement de rétine rhegmatogène (fond d’œil)", "Rhegmatogenous retinal detachment (fundus)"),
    T("Décollement de rétine rhegmatogène (d’après le nom du fichier, en allemand).", "Rhegmatogenous retinal detachment (per the German file name)."),
    "I", "fondoeil", ["a5-decollement-retine"], "fondoeil"))

# ---------------- Priority 2: cornea (module B) ----------------
S.append(commons("Dendritic corneal ulcer.jpg",
    T("Ulcère cornéen dendritique", "Dendritic corneal ulcer"),
    T("Ulcère cornéen dendritique (d’après le nom du fichier ; présence de fluorescéine à confirmer sur l’image).", "Dendritic corneal ulcer (per file name; fluorescein staining to be confirmed on the image)."),
    "B", None, ["c-herpes", "ex-fluoresceine"], "cornea"))
S.append(commons("Parasite140120-fig1 Acanthamoeba keratitis Figure 1A.png",
    T("Kératite à Acanthamoeba (figure 1A, revue Parasite)", "Acanthamoeba keratitis (figure 1A, journal Parasite)"),
    T("Kératite à Acanthamoeba, figure 1A d’un article de la revue Parasite (d’après le nom du fichier ; aspect — anneau ou non — à confirmer par la légende source).", "Acanthamoeba keratitis, figure 1A from an article in the journal Parasite (per file name; ring infiltrate or not to be confirmed from the source legend)."),
    "B", None, ["c-atypiques"], "cornea"))
S.append(commons("KeratoconusMunsonSignOS.jpg",
    T("Kératocône : signe de Munson (œil gauche)", "Keratoconus: Munson sign (left eye)"),
    T("Signe de Munson dans un kératocône, œil gauche (d’après le nom du fichier).", "Munson sign in keratoconus, left eye (per file name)."),
    "B", None, ["c-keratocone"], "cornea"))
S.append(commons("Corneal-hydrops.jpg",
    T("Hydrops cornéen aigu", "Acute corneal hydrops"),
    T("Hydrops cornéen (d’après le nom du fichier).", "Corneal hydrops (per file name)."),
    "B", None, ["c-keratocone"], "cornea"))
S.append(commons("Corneal topography, stage II keratoconus (Elise A. Slim et al.).jpg",
    T("Topographie cornéenne d’un kératocône stade II", "Corneal topography of stage II keratoconus"),
    T("Topographie cornéenne d’un kératocône de stade II, d’après Elise A. Slim et al. (d’après le nom du fichier).", "Corneal topography of a stage II keratoconus, from Elise A. Slim et al. (per file name)."),
    "B", None, ["c-keratocone", "ex-topographie"], "cornea"))
S.append(commons("Fuchs dystrophy 1.JPG",
    T("Dystrophie de Fuchs", "Fuchs dystrophy"),
    T("Dystrophie endothéliale de Fuchs (d’après le nom du fichier ; présence de gouttes/guttae à confirmer sur l’image).", "Fuchs endothelial dystrophy (per file name; guttae to be confirmed on the image)."),
    "B", None, ["c-fuchs"], "cornea"))
S.append(commons("Pterygium Slitlamp.jpg",
    T("Ptérygion à la lampe à fente", "Pterygium at the slit lamp"),
    T("Ptérygion photographié à la lampe à fente (d’après le nom du fichier).", "Pterygium photographed at the slit lamp (per file name)."),
    "B", None, ["c-pterygion"], "cornea"))
S.append(commons("Pterygium (conjunctiva).jpg",
    T("Ptérygion conjonctival", "Conjunctival pterygium"),
    T("Ptérygion de la conjonctive (d’après le nom du fichier).", "Pterygium of the conjunctiva (per file name)."),
    "B", None, ["c-pterygion"], "cornea"))
S.append(commons("Band-keratopathy left-eye.png",
    T("Kératopathie en bandelette (œil gauche)", "Band keratopathy (left eye)"),
    T("Kératopathie en bandelette, œil gauche (d’après le nom du fichier).", "Band keratopathy, left eye (per file name)."),
    "B", None, ["c-depots"], "cornea"))
S.append(pmc("PMC6634274", "Figure 1",
    T("Sidérose sur corps étranger intraoculaire : hétérochromie et cataracte", "Siderosis from an intraocular foreign body: heterochromia and cataract"),
    T("Photographie à la lampe à fente. A (œil droit) : hétérochromie irienne nette (flèche noire), cicatrice cornéenne et cataracte dense (flèche rouge), évoquant une sidérose sur corps étranger intraoculaire. B (œil gauche) : pas d’anomalie significative. Le B-scan était non concluant ; le scanner a confirmé le corps étranger.",
      "Slit lamp photography. A (right eye): clinically significant heterochromic iris (black arrow), corneal scar and dense cataract (red arrow), suggestive of ocular siderosis from an intraocular foreign body. B (left eye): no significant abnormality. B-scan was inconclusive; CT confirmed the foreign body."),
    "Bloom et al. — Cureus 2019;11(5):e4660", "A", None, ["a5-tumeurs-toxicite-trauma", "c-depots"], "general",
    license="CC BY 3.0", license_url=CCBY3, doi="10.7759/cureus.4660",
    article="Ocular Siderosis Secondary to Retained Intraocular Foreign Body: A Case Report"))

# ---------------- Priority 2: glaucoma (module C) ----------------
S.append(pmc("PMC8862619", "Figure 5",
    T("Papille normale et papilles glaucomateuses de deux sévérités", "Normal disc and glaucomatous discs of two severities"),
    T("Papille normale (a) et têtes du nerf optique glaucomateuses de deux patients à des stades de sévérité différents.", "Normal optic disc (a) and glaucomatous optic nerve heads of two patients with different severities of glaucoma."),
    "Rupert R A Bourne, Tasneem Khatib — Community Eye Health Journal 2021;34(112)", "C", "fondoeil", ["g-papille", "ex-papille"], "glaucoma",
    article="The optic nerve head in glaucoma"))
S.append(pmc("PMC8862619", "Figure 4",
    T("Neuropathie glaucomateuse : hémorragies en flammèche de la papille", "Glaucomatous optic neuropathy: splinter disc haemorrhages"),
    T("Neuropathie optique glaucomateuse : hémorragies en flammèche (« splinter ») de la papille.", "Glaucomatous optic neuropathy: splinter haemorrhages."),
    "Rupert R A Bourne, Tasneem Khatib — Community Eye Health Journal 2021;34(112)", "C", "fondoeil", ["g-papille", "g-gpn"], "glaucoma",
    article="The optic nerve head in glaucoma"))
S.append(pmc("PMC8862619", "Figure 6",
    T("Papille d’un glaucome pseudo-exfoliatif : lire le bord aux vaisseaux, pas à la pâleur", "Disc in pseudoexfoliation glaucoma: judge the rim by the vessels, not the pallor"),
    T("Tête du nerf optique d’un patient avec glaucome pseudo-exfoliatif. La limite de l’excavation marquée par les vaisseaux diffère de la limite entre la pâleur du fond de l’excavation et la zone plus rose ; se fier à la couleur est trompeur. Le coude des petits vaisseaux indique ici un anneau plus mince que ne le suggère la couleur.",
      "Optic nerve head of a patient with pseudoexfoliation glaucoma. The cup outlined by the blood vessels differs from the margin between the pallor of the cup base and the pinker zone; focusing on colour is misleading. The change in direction of the small vessels indicates a thinner rim than the colour suggests."),
    "Rupert R A Bourne, Tasneem Khatib — Community Eye Health Journal 2021;34(112)", "C", "fondoeil", ["g-papille", "g-pxf"], "glaucoma",
    article="The optic nerve head in glaucoma"))
S.append(pmc("PMC8862619", "Figure 7",
    T("Encoche de l’anneau et défaut de la couche des fibres nerveuses", "Rim notch and retinal nerve fibre layer defect"),
    T("Neuropathie optique glaucomateuse : élargissement focal de l’excavation (encoche) et défaut de la couche des fibres nerveuses.", "Glaucomatous optic neuropathy: focal enlargement of the cup (notch) and nerve fibre layer defect."),
    "Rupert R A Bourne, Tasneem Khatib — Community Eye Health Journal 2021;34(112)", "C", "fondoeil", ["g-papille", "ex-papille"], "glaucoma",
    article="The optic nerve head in glaucoma"))
S.append(pmc("PMC8862624", "Figure 1",
    T("Formes de neuropathie optique glaucomateuse (A–D)", "Forms of glaucomatous optic neuropathy (A–D)"),
    T("A : C/D augmenté. B : amincissement focal de l’anneau supérieur. C : perte diffuse de l’anneau inférieur. D : amincissement inféro-temporal de l’anneau et défaut de la couche des fibres nerveuses.", "A: enlarged cup-to-disc ratio. B: focal superior rim narrowing. C: diffuse loss of the inferior rim. D: inferotemporal rim thinning and retinal nerve fibre layer defect."),
    "Jibran Mohamed-Noriega, G Chandra Sekhar — Community Eye Health Journal 2021;34(112)", "C", "fondoeil", ["g-papille", "g-gpao"], "glaucoma",
    article="Defining and diagnosing glaucoma: a focus on blindness prevention"))
S.append(pmc("PMC8862626", "Figure 1",
    T("Glaucome néovasculaire aigu : rubéose irienne", "Acute neovascular glaucoma: rubeosis iridis"),
    T("Patient diabétique avec douleur sévère, vision floue et œil rouge. Signes du stade aigu du glaucome néovasculaire : injection ciliaire, œdème épithélial cornéen modéré et rubéose irienne. En haut à droite : agrandissement de la rubéose.", "Diabetic patient with severe pain, blurred vision and red eye. Signs of the acute stage of neovascular glaucoma: ciliary injection, mild corneal epithelial oedema and rubeosis iridis. Top right: enlarged view of the rubeosis."),
    "Jibran Mohamed-Noriega, Jason A Penniecook — Community Eye Health Journal 2021;34(112)", "C", None, ["g-neovasculaire"], "glaucoma",
    article="Neovascular glaucoma: prevention and treatment"))
S.append(pmc("PMC8862627", "Figure 1",
    T("Glaucome néovasculaire : chambre antérieure effondrée, angle fermé", "Neovascular glaucoma: collapsed anterior chamber, closed angle"),
    T("Le glaucome néovasculaire aboutit souvent à un œil aveugle douloureux. Cet œil a une chambre antérieure effondrée avec fermeture de l’angle due à un glaucome néovasculaire secondaire à une rétinopathie diabétique proliférante.", "Neovascular glaucoma often results in a painful blind eye. This eye has a collapsed anterior chamber with angle closure resulting from neovascular glaucoma secondary to proliferative diabetic retinopathy."),
    "Jason A Penniecook, Doris Saraí Garza Cruz, Maria Soledad Pighin Caminos — Community Eye Health Journal 2021;34(112)", "C", None, ["g-neovasculaire", "g-fermeture"], "glaucoma",
    article="Managing the painful blind eye"))
S.append(commons("Cornea showing Krukenberg's Spindle.jpg",
    T("Fuseau de Krukenberg sur la cornée", "Krukenberg spindle on the cornea"),
    T("Cornée montrant un fuseau de Krukenberg (d’après le nom du fichier).", "Cornea showing a Krukenberg spindle (per file name)."),
    "C", None, ["g-pigmentaire"], "glaucoma"))
S.append(commons("Acute angle closure glaucoma.JPG",
    T("Fermeture de l’angle aiguë (photo du segment antérieur)", "Acute angle-closure glaucoma (anterior segment photo)"),
    T("Glaucome aigu par fermeture de l’angle (d’après le nom du fichier).", "Acute angle-closure glaucoma (per file name)."),
    "C", None, ["g-crise", "g-fermeture"], "glaucoma"))
S.append(commons("Acute Angle Closure-glaucoma.jpg",
    T("Crise de fermeture de l’angle (2ᵉ exemple)", "Acute angle closure (second example)"),
    T("Glaucome aigu par fermeture de l’angle (d’après le nom du fichier).", "Acute angle-closure glaucoma (per file name)."),
    "C", None, ["g-crise", "g-fermeture"], "glaucoma"))
S.append(commons("Glaukompapille2.jpg",
    T("Papille glaucomateuse", "Glaucomatous optic disc"),
    T("Papille glaucomateuse (d’après le nom du fichier, en allemand).", "Glaucomatous optic disc (per the German file name)."),
    "C", "fondoeil", ["g-papille"], "glaucoma"))
S.append(commons("Anterior chamber angle - 3D motion parallax.gif",
    T("Angle iridocornéen (animation de parallaxe, 1ʳᵉ image)", "Anterior chamber angle (motion-parallax animation, first frame)"),
    T("Angle de la chambre antérieure, animation de parallaxe 3D (d’après le nom du fichier) ; seule la première image est conservée.", "Anterior chamber angle, 3D motion-parallax animation (per file name); only the first frame is kept."),
    "I", "gonio", ["ex-gonioscopie"], "gonio"))

# ---------------- Priority 2: general ----------------
S.append(pmc("PMC10855287", "Image 2",
    T("Scanner : abcès orbitaire latéral à contour rehaussé", "CT: rim-enhancing lateral orbital abscess"),
    T("Collection liquidienne à paroi rehaussée (pointes de flèche) en dehors du globe droit, compatible avec un abcès orbitaire (cellulite pré- et rétroseptale).", "Rim-enhancing fluid collection (arrowheads) lateral to the right globe consistent with orbital abscess (pre- and postseptal cellulitis)."),
    f"Haight et al. — {CPC} 2023;7(4)", "A", None, ["a5-inflammation-infection"], "general",
    doi="10.5811/cpcem.1427", article="Diagnosis of Endophthalmitis and Orbital Abscess by Ultrasound: A Case Report"))
S.append(commons("Orbital cellulitis.jpg",
    T("Cellulite orbitaire", "Orbital cellulitis"),
    T("Cellulite orbitaire (d’après le nom du fichier).", "Orbital cellulitis (per file name)."),
    "A", None, ["a5-inflammation-infection"], "general"))
S.append(commons("Anizokoria.JPG",
    T("Anisocorie", "Anisocoria"),
    T("Anisocorie (d’après le nom du fichier) ; la cause n’est pas indiquée par le nom.", "Anisocoria (per file name); the cause is not given by the name."),
    "A", None, ["a5-pupilles-neuro", "ex-pupilles"], "general"))
S.append(commons("Hyphema - occupying half of anterior chamber of eye.jpg",
    T("Hyphéma occupant la moitié de la chambre antérieure", "Hyphema filling half of the anterior chamber"),
    T("Hyphéma occupant la moitié de la chambre antérieure (d’après le nom du fichier).", "Hyphema occupying half of the anterior chamber (per file name)."),
    "A", None, ["a5-tumeurs-toxicite-trauma"], "general"))

for i, s in enumerate(S, 1):
    s["id"] = f"IMG3-{i:03d}"
order = ["id", "source", "url", "resolve", "page_url", "doi", "article", "title", "caption", "license", "license_url",
         "licence_check", "author", "module", "exam", "topics", "area", "caption_basis"]
out = [{k: s.get(k) for k in order if k in s} for s in S]
doc = {
    "version": 3, "generated": "2026-11-21",
    "policy": "Only CC0 / public domain / CC BY / CC BY-SA. Build rejects anything else (incl. NC, ND, or figure-level © / NC notes). Images are resized only (max 1200 px, no crop).",
    "images": out,
}
json.dump(doc, open(sys.argv[1], "w"), ensure_ascii=False, indent=1)
import collections
print(len(out), collections.Counter(s["area"] for s in out), collections.Counter(s["source"] for s in out))
