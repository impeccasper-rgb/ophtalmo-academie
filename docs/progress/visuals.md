# Avancement — ressources visuelles bilingues (2026-11-21)

## Fait
- `docs/RIGHTS.md` : registre des droits vérifié en ligne le 2026-11-21 (pages atlas/cas = CC BY-NC-ND 3.0 ; tutoriels/livre/bow-tie = aucune CC, TOS EyeRounds seulement). Comptage : 391 images utilisées, 347 CC, 44 sans CC. Conclusions par usage, format d’attribution, page Crédits, brouillon de courriel de permission (**non envoyé**), sources libres alternatives.
- `docs/INV-IMAGES.md` : relevé des images du catalogue par examen, correspondance ids ↔ médias, alertes pour la pédagogie, manques.
- `data/inv-media.js` : **44 entrées, clés identiques aux 44 `G.OPH.invMediaRequests`** (bscan 7, ascan 7, oct 8, gonio 7, fondoeil 8, cv 7) ; 31 photos + 13 schémas SVG originaux (viewBox 400×300, « schéma · schematic ») ; alt/labels FR/EN ; ≥ 1 hotspot `decisive` par entrée ; champs en plus du contrat : `license`, `source`, `restricted:true` (7 photos sans CC), `schematic:true`. Validation node : 44 ; tous les `invPractice.media` résolus.
- Seul écart à la demande : m-bscan-2 = schéma (ombre du nerf non visible de façon sûre sur OPH-209).

## Reste
- Lead : m-oct-6 (OPH-191, démo marketing) est sans licence CC → permission ou remplacement par OPH-132 (INV-IMAGES §2).
- Web : exclure du build public les images `cc:false`/`restricted` tant que la permission n’est pas obtenue ; générer la page Crédits ; afficher les images entières (pas de recadrage, zoom CSS seulement).
- Traductions `data-en/*.js` : non commencées ce cycle.
- Trouver des remplaçants CC BY pour : angle normal/fermé en gonioscopie, B-scan DR/hémorragie du vitré, A-scan réel, CV 10-2, rapport non fiable.

## Blocages / décisions pour le responsable
- Envoi du courriel de permission (brouillon dans RIGHTS.md §5) : décision et envoi par le responsable.
- Tout palier payant futur est incompatible avec les images EyeRounds sans autorisation écrite.

## Outils
- Générateur : `/tmp/claude-0/-home-claude/48201f62-0d4f-5281-b310-ecd57583383e/scratchpad/gen_inv_media.py` (scratchpad, peut disparaître ; `data/inv-media.js` est la référence). Contrôle visuel des hotspots : `.../scratchpad/overlay.py <ids> <nom>` (nécessite rsvg-convert).
- Recomptage des licences :
  `python3 -c "import json,collections;a=json.load(open('imgsrc/catalog.json'))+json.load(open('imgsrc2/catalog2.json'));print(collections.Counter('cc' if (x.get('cc') or 'CC BY' in x.get('credit','')) else 'noncc' for x in a))"`

---
# Cycle 2 — images libres supplémentaires (imgsrc3), 2026-11-21

## Fait
- `imgsrc3/sources.json` : **60 images** (IMG3-001…060), titres et légendes FR/EN, `module`, `exam`, `topics` (clés `G.OPH.hy` vérifiées par node : 0 inconnue), licence, auteur, `page_url`, `doi`/`article` pour PMC.
  - Par zone : B-scan 13 · fond d’œil 11 · glaucome 11 · cornée 9 · gonioscopie 5 · général 5 · OCT 4 · champ visuel 2.
  - Par source : 30 PMC (27 licences vérifiées ici : 26 CC BY 4.0, 1 CC BY 3.0 ; 3 BMC Ophthalmology à confirmer au build : 2 CC BY 4.0 et 1 CC BY 2.0 attendues) · 30 Commons (licence lue au build, liste blanche CC0/PD/CC BY/CC BY-SA).
- `imgsrc3/build_media3.py` + `.github/workflows/media.yml` (workflow_dispatch + push sur `imgsrc3/sources.json`) : curl avec UA OcelleBot, licence revérifiée à la source, rejet des figures à mention NC/ND/©, ImageMagick 1200 px q82 sans EXIF ni recadrage, `catalog3.json` + `build-log.json`, commit sur main par github-actions[bot] (rien si aucun changement). En cas d’échec réseau, l’image du build précédent est conservée ; en cas de licence refusée, elle est supprimée. Testé ici avec un réseau simulé (licence NC refusée, figure BY-NC refusée, GIF → JPEG, 2400 px → 1200 px, EXIF retiré).
- `docs/RIGHTS.md` §7 : règles d’attribution CC BY / BY-SA / CC0, contrôle des licences, constat sur les photos BY-NC-SA du Community Eye Health Journal 2024–2025.

## Pour le lead
1. Pousser puis lancer **Actions → « Fetch open-licence images (imgsrc3) »** (ou il part tout seul au push de `sources.json`). Lire le résumé du job / `imgsrc3/build-log.json` : nombre publié, raisons des rejets.
2. Le commit du bot (GITHUB_TOKEN) ne relance pas `pages.yml` : lancer Pages à la main ensuite.
3. Le rôle web doit copier `imgsrc3/web/` dans `site/img/` (ou équivalent) et afficher la ligne de crédit de `catalog3.json` sous chaque image (format RIGHTS.md §7).

## Reste / risques
- **30 entrées Commons** : légendes limitées au nom du fichier → relire `source_description` dans `catalog3.json` après le build et corriger les légendes si besoin (ex. présence réelle de fluorescéine sur IMG3 « Dendritic corneal ulcer », guttae sur « Fuchs dystrophy 1 », type de rétinopathie sur « EDA03 », contenu de « Humphrey visual field.JPG »).
- **Figures PMC** : le libellé (`resolve.fig`, ex. « Image 1 », « Fig. 2 ») doit correspondre au `<label>` du XML Europe PMC ; sinon l’entrée est sautée avec la liste des libellés trouvés dans le log → corriger `fig` et relancer.
- Les 13 figures du Community Eye Health Journal 2021 (n° 112) n’avaient pas de mention de crédit dans le texte PMC ; si le XML en contient une en NC, le build les rejettera (comportement voulu).
- **Manques non comblés** (aucune source libre vérifiable trouvée ce cycle) : photo de gonioscopie d’**angle fermé** (Shaffer 0) ; **vrai tracé A-scan** ; champ **10-2** ; rapport Humphrey **non fiable** ; OCT DMLA/OMD/MER ; PXF du cristallin à la lampe à fente (seule la papille d’un GPX est couverte) ; B-scan d’hémorragie du vitré *isolée* (couverte seulement dans un contexte traumatique + pièges hyalite astéroïde / hémorragie prérétinienne).
- Pas encore de branchement dans `data/inv-media.js` (à faire quand le catalogue réel est disponible : coordonnées de hotspots impossibles sans voir les images).

## Sources consultées (2026-11-21)
API PubMed/PMC (licences + texte intégral) ; recherche web restreinte à commons.wikimedia.org (noms de fichiers). Pages Commons, PMC (reCAPTCHA) et Europe PMC illisibles depuis ce conteneur.
