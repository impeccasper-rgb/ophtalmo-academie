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
