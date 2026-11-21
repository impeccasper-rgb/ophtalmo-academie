# Registre des droits — images (propriétaire : rôle « ressources visuelles »)

Dernière vérification : **2026-11-21** (WebFetch des pages citées ci-dessous). Ce document n’est pas un avis juridique ; il résume les conditions publiées et les risques, pour décision par le responsable du projet.

## 1. Inventaire (catalogues `imgsrc/catalog.json` + `imgsrc2/catalog2.json`)

391 images au catalogue, **391 référencées** dans `data/*.js` (le chiffre de 389 cité ailleurs est périmé). Toutes viennent d’EyeRounds.org / University of Iowa.

| Statut | Nombre | Type de page source | Champ catalogue |
|---|---|---|---|
| **CC BY-NC-ND 3.0** (atlas) | 334 | `…/eyeforum/atlas/pages/…` | `credit` contient « CC BY-NC-ND 3.0 » / `cc:true` |
| **CC BY-NC-ND 3.0** (cas cliniques) | 13 | `eyerounds.org/cases/…` (86, 257, 263) | `cc:true` |
| **Sans licence CC** (tutoriels) | 36 | `…/tutorials/…` (VF-testing, corneal-imaging, POAG, ultrasound, AMD, DR) | credit « Usage pédagogique » / `cc:false` |
| **Sans licence CC** (livre glaucome) | 7 | `eyerounds.org/books/glaucoma_guide/chapter6.html` | `cc:false` |
| **Sans licence CC** (page atlas sans mention) | 1 | `atlas/pages/bow-tie-atrophy.htm` (OPH-227) | `cc:false` |
| **Total CC** | **347** | | |
| **Total sans CC** | **44** | | |

Liste des 44 sans CC : OPH-012…015, OPH-114…130, OPH-187…191, OPH-200…209, OPH-211…213, OPH-215, OPH-216, OPH-227, OPH-292, OPH-293.
Commande de recomptage : voir `docs/progress/visuals.md`.

## 2. Ce que disent les sources (vérifié le 2026-11-21)

| Source | Constat |
|---|---|
| Page atlas, ex. https://webeye.ophth.uiowa.edu/eyeforum/atlas/pages/Normal-Cornea/index.htm | « Ophthalmic Atlas Images by EyeRounds.org, The University of Iowa are licensed under a Creative Commons Attribution-NonCommercial-NoDerivs 3.0 Unported License » + « Copyright © 2019 The University of Iowa. All Rights Reserved ». |
| Pages de cas https://eyerounds.org/cases/263-Aphakic-Glaucoma.htm et https://eyerounds.org/cases/86-Normal-Low-Tension-Glaucoma.htm | Même mention CC BY-NC-ND 3.0 Unported dans le pied de page. |
| Tutoriels https://webeye.ophth.uiowa.edu/eyeforum/tutorials/VF-testing/index.htm, https://eyerounds.org/tutorials/ultrasound/index.htm ; livre https://eyerounds.org/books/glaucoma_guide/chapter6.html ; https://webeye.ophth.uiowa.edu/eyeforum/atlas/pages/bow-tie-atrophy.htm | **Aucune** mention Creative Commons ; seulement « Copyright © 2019 The University of Iowa. All Rights Reserved ». |
| Conditions générales https://eyerounds.org/TOS.htm (identique : https://webeye.ophth.uiowa.edu/eyeforum/TOS.htm) | Copie de portions « for personal or educational use » sans permission ; images utilisables en conférences/cours/enseignement si l’identification reste intacte, crédit à EyeRounds.org et aucune rémunération ; modification permise **seulement en taille et luminosité** ; **interdit d’utiliser les images pour créer son propre site web ou galerie photo** ; « NO ONE MAY USE THESE PHOTOGRAPHS OR PARTS OF THIS WEBSITE FOR FINANCIAL GAIN WITHOUT WRITTEN AUTHORIZATION » ; licence limitée révocable ; autres demandes « to the webmaster ». Ne mentionne pas les CC. |
| Contact https://eyerounds.org/Contact.html | EyeRounds Editor : thomas-oetting@uiowa.edu ; formulaire « Contact the Webmaster » (Qualtrics) ; adresse postale Dept of Ophthalmology and Visual Sciences, 200 Hawkins Dr., Iowa City, IA 52242-1091. Pas de procédure de permission publiée. |
| Code juridique CC BY-NC-ND 3.0 https://creativecommons.org/licenses/by-nc-nd/3.0/legalcode | §3 : droit de faire « such modifications as are technically necessary to exercise the rights in other media and formats », sinon aucune adaptation. §4(a) : interdiction d’imposer des « effective technological measures » sur l’œuvre. §4(b) : interdiction d’usage « primarily intended for or directed toward commercial advantage or private monetary compensation ». §4(c) : crédit (auteur, titre, URI si fournie), pas d’endossement implicite. |
| FAQ CC https://creativecommons.org/faq/ | Changement de format/résolution sans choix expressif ≠ adaptation ; inclure une œuvre intacte dans une collection est permis par toutes les licences ; signaler les modifications « if you have … cropped a photo » ; « charging for access may not be permitted with NC-licensed material » ; crédit « in any reasonable manner », un lien vers une page de crédits est acceptable. |

## 3. Conclusions par usage

**Images CC BY-NC-ND 3.0 (347)** — la licence CC est la permission spécifique attachée à ces images ; elle prévaut, à mon avis, sur la clause générale « pas de site web » des TOS (qui ne vise pas les CC). Prudence : les TOS restent publiées, d’où la demande de confirmation écrite (§5).

| Usage | Verdict | Conditions |
|---|---|---|
| Site web gratuit, sans pub, sans compte payant | **Permis** | Crédit par image + page crédits + lien vers la licence ; image intacte. |
| App iOS gratuite sans pub | **Permis, avec un risque à couvrir** | NC respecté. Risque §4(a) : la distribution App Store applique une protection (FairPlay) au paquet ; la FAQ CC n’en parle pas. Atténuation : les mêmes images restent librement accessibles sans DRM (site web + page source) et le texte de la licence est lié ; demander confirmation explicite à EyeRounds (courriel §5). |
| Annotations en surcouche séparée (hotspots SVG/CSS, pixels non modifiés) | **Permis** | Image + calque = collection/affichage, pas une adaptation ; ne jamais « cuire » les annotations dans un nouveau fichier JPG. Indiquer « annotations : ophtalmo app ». |
| Redimensionnement / compression / conversion de format | **Permis** | Modification technique (§3, FAQ) ; les TOS l’autorisent aussi (taille, luminosité). |
| **Recadrage** | **À éviter** | Probablement une adaptation au sens ND (la FAQ le traite comme une modification à signaler) ; les TOS ne permettent que taille/luminosité. Afficher l’image entière ; pour « zoomer », utiliser un zoom d’affichage (CSS transform) sans créer de fichier recadré. Ne pas masquer le filigrane « EyeRounds.org ». |
| Niveau payant futur (abonnement, achat intégré, pub) | **Non permis sans autorisation écrite** | Contraire à NC et à la clause « financial gain » des TOS. Avant tout palier payant : soit permission écrite, soit retirer les images EyeRounds du contenu payant (et de l’app si l’app elle-même devient payante), soit les remplacer par des sources CC BY / CC0 ou des schémas originaux. Même un contenu gratuit dans une app payante ou financée par pub serait à risque. |

**Images sans licence CC (44)** — seules les TOS s’appliquent, et elles **interdisent** expressément l’usage des images « to create your own web page, website, or photo gallery ». Verdict : **publication web/iOS non conforme sans permission écrite**. Usage toléré : enseignement en présentiel (cours/présentation) avec crédit. Mesures :
1. Marquer ces images `restricted` (fait dans `data/inv-media.js` : champ `restricted:true` + `license`).
2. Le rôle « web » doit exclure du build public toute image `cc:false` tant que la permission n’est pas obtenue (ou afficher un lien vers la page source à la place).
3. Envoyer la demande §5 (par le responsable du projet).

## 4. Format d’attribution recommandé

**Sous chaque image (FR / EN)** :
> Image : EyeRounds.org, University of Iowa — [titre de la page source] — CC BY-NC-ND 3.0. Image non modifiée ; annotations : ophtalmo app.
> Image: EyeRounds.org, University of Iowa — [source page title] — CC BY-NC-ND 3.0. Unmodified; annotations: ophtalmo app.

- « titre de la page source » = `src_title`/`title` du catalogue, lié à `page_url` ; « CC BY-NC-ND 3.0 » lié à https://creativecommons.org/licenses/by-nc-nd/3.0/ .
- Si l’espace manque (vignette), crédit court « © EyeRounds.org (CC BY-NC-ND 3.0) » + lien vers la page Crédits (accepté par la FAQ CC).
- Images `restricted` (si permission obtenue) : « Image : EyeRounds.org, University of Iowa, reproduite avec permission. »
- Ne pas laisser entendre un partenariat ou un endossement de l’University of Iowa (§4(c)).

**Page « Crédits / Credits »** (route dédiée, accessible hors ligne) :
- Paragraphe : « Les photographies cliniques proviennent d’EyeRounds.org (Department of Ophthalmology and Visual Sciences, University of Iowa), sous licence Creative Commons Attribution – Pas d’utilisation commerciale – Pas de modification 3.0 Unported, sauf mention contraire. Elles sont affichées sans modification ; les annotations sont des calques séparés. Cette application est gratuite et sans publicité. »
- Tableau généré depuis les catalogues : id, titre, page source (lien), licence.
- Lien vers le texte de la licence et vers https://eyerounds.org/TOS.htm .
- Schémas : « Schémas originaux de l’application, non tirés de patients réels. »

## 5. Brouillon de demande de permission (NE PAS ENVOYER — à valider et envoyer par le responsable du projet)

> **To:** EyeRounds Editor <thomas-oetting@uiowa.edu> (cc: webmaster form, https://eyerounds.org/Contact.html)
> **Subject:** Permission request – EyeRounds images in a free, ad-free ophthalmology learning website and iOS app
>
> Dear EyeRounds Editor,
>
> I am [one-line description of the author, e.g. physician and researcher in Montreal, Canada], building a free, ad-free bilingual (French/English) learning resource for medical students and junior residents: a static website and a free iOS app with the same content.
>
> We use images from the EyeRounds Ophthalmic Atlas and case pages under the CC BY-NC-ND 3.0 licence. Each image is shown unmodified (resized only), with credit to EyeRounds.org and a link to the source page, plus a credits page. Teaching annotations are drawn as separate overlays and never alter the image files.
>
> We would be grateful for your written confirmation or permission on three points:
> 1. That this use is acceptable to you, including distribution through the Apple App Store (free app, no ads, no in-app purchases).
> 2. Permission to use about 44 images from EyeRounds tutorials and the Iowa Glaucoma Curriculum that do not carry a CC licence (list attached with source URLs), under the same conditions.
> 3. Whether you have a preferred credit line.
>
> We will not use the images in any paid product without asking you first. We would be happy to adjust anything, or remove images, at your request.
>
> Thank you for making EyeRounds available to learners worldwide.
>
> Kind regards,
> [Name, credentials]
> [Institution / contact email]
> [Link to the website]

(Pièce jointe à préparer : liste des 44 ids `cc:false` avec `page_url`, extraite par la commande de `docs/progress/visuals.md`.)

## 6. Sources libres pour combler les manques (A-scan, gonioscopie, champs visuels)

| Source | Licence | Utilité / remarques (vérifié 2026-11-21) |
|---|---|---|
| **Wikimedia Commons** (commons.wikimedia.org) | Par fichier : souvent CC BY, CC BY-SA, CC0 ou domaine public | Fichier repéré : « File:Anterior chamber angle – 3D motion parallax.gif » (angle iridocornéen) — licence **non vérifiée** (page inaccessible à l’outil aujourd’hui). Vérifier chaque fichier ; CC BY-SA impose le partage à l’identique des *adaptations* (un calque séparé n’en crée pas). Pas d’accès API depuis cet environnement. |
| **PubMed Central, sous-ensemble Open Access** / **Open-i (NLM)** (openi.nlm.nih.gov) | Par article : CC BY, CC BY-NC, etc. | Open-i indexe des figures de la littérature ouverte ; site « under maintenance » le 2026-11-21 ; la fiche data.gov indique ODbL pour la base, **pas** pour les images → vérifier la licence de chaque article. Préférer CC BY (compatible même avec un futur palier payant). |
| **Community Eye Health Journal** — Yaqub M., « Visual fields interpretation in glaucoma: a focus on static automated perimetry », Community Eye Health 2012;25(79-80):1-8, https://pmc.ncbi.nlm.nih.gov/articles/PMC3678209/ | « Creative Commons Attribution Non-Commercial License » (CC BY-NC, permet les adaptations) | Rapports Humphrey 30-2/10-2, PSD, carte de lecture d’un rapport : bon complément champs visuels. NC → même contrainte qu’EyeRounds pour un palier payant. |
| **Journaux CC BY** (ex. BMC Ophthalmology, PLOS ONE, Scientific Reports, Clinical Ophthalmology/Dove [CC BY-NC]) | CC BY (ou BY-NC selon le journal) | Rechercher « gonioscopy », « A-scan biometry », « immersion A-scan » dans PMC OA ; vérifier la licence sur l’article, citer l’article et indiquer toute modification. |
| **Schémas originaux** (ce projet) | Propriété du projet | Solution retenue pour l’A-scan (aucune image au catalogue), la lecture de rapport Humphrey et l’angle normal : `m-ascan-*`, `m-cv-7`, `m-gonio-1`. |
| À **éviter** sans permission : Moran CORE (https://morancore.utah.edu/terms-of-use/ : usage personnel non commercial, pas de dérivés, permission requise), AAO/EyeWiki images (droits des auteurs/AAO), site gonioscopy.org d’Iowa (© University of Iowa, aucune mention CC). | — | — |

## 7. Images libres (imgsrc3) — cycle 2, 2026-11-21 (mis à jour cycle 3)

**Fichiers** : `imgsrc3/sources.json` (60 images choisies : 30 PubMed Central, 30 Wikimedia Commons) → `.github/workflows/media.yml` + `imgsrc3/build_media3.py` (GitHub Actions) → `imgsrc3/web/IMG3-xxx.jpg`, `imgsrc3/catalog3.json` (licence, auteur, page source, l × h), `imgsrc3/build-log.json` (publié / rejeté et pourquoi).

**Licences admises** : CC0, domaine public (dont NEI/NIH, PD-USGov), CC BY, CC BY-SA. **Refusées** : toute clause NC ou ND, GFDL seule, « all rights reserved », licence absente. Ces images restent utilisables si un palier payant apparaît un jour (contrairement aux images EyeRounds CC BY-NC-ND).

**Contrôle des licences**
- *PMC* : licence de l’article vérifiée ici le 2026-11-21 par l’API PubMed/PMC (`get_copyright_status`) pour 27 images (26 en CC BY 4.0 : Community Eye Health Journal 2021 n° 112, Clin Pract Cases Emerg Med ; 1 en CC BY 3.0 : Cureus 2019). 3 images BMC Ophthalmology (CC BY 2.0/4.0 attendu, champ licence absent de l’API) sont marquées `licence_check: build`. Au build, le script relit la licence dans le XML JATS d’Europe PMC **et** rejette la figure si sa légende/attribution porte une mention NC/ND, « with permission » ou un © sans CC BY. Raison : certains journaux licencient l’article en CC BY mais des photos individuelles en BY-NC-SA (constaté sur le Community Eye Health Journal 2024–2025 : « © CORNEA TEAM, SCEH, NEPAL CC BY-NC-SA 4.0 » — ces photos ont été écartées).
- *Commons* : le conteneur ne peut pas lire commons.wikimedia.org (proxy et WebFetch refusés). Les noms de fichiers ont été confirmés par recherche web, mais **licence, auteur et description sont lus au build** via l’API Commons (`extmetadata`). Un fichier hors liste blanche est **sauté** et n’est jamais publié. Les légendes de ces 30 entrées se limitent à ce que dit le nom du fichier (`caption_basis`) ; la description source est copiée dans `catalog3.json` (`source_description`) : **relire et, au besoin, corriger la légende avant usage pédagogique**.

**Modifications** : redimensionnement à 1200 px max, recompression JPEG q82, suppression des métadonnées EXIF, 1ʳᵉ image d’un GIF. **Aucun recadrage.** Annotations = calques séparés (comme pour EyeRounds).

**Règles d’attribution (à afficher sous chaque image, et dans la page Crédits)**

| Licence | Obligatoire | Format court FR / EN |
|---|---|---|
| CC BY (2.0–4.0) | Auteur, titre/source (lien `page_url`), nom + lien de la licence, mention des modifications | « Image : {author}, « {article ou fichier} », {licence} (lien). Redimensionnée ; annotations : ophtalmo app. » / « Image: {author}, “{article or file}”, {licence} (link). Resized; annotations: ophtalmo app. » |
| CC BY-SA (3.0–4.0) | Idem CC BY **+** partage à l’identique : toute *adaptation* de l’image (recadrage, montage, annotations incrustées dans les pixels) doit être diffusée sous CC BY-SA compatible | Même ligne + « (CC BY-SA : toute version modifiée doit rester sous CC BY-SA) » dans la page Crédits. `catalog3.json` → `share_alike: true`. |
| CC0 / domaine public | Rien d’obligatoire ; créditer quand même (bonne pratique, exactitude) | « Image : {author} — domaine public / CC0. » NEI : « Image : National Eye Institute, National Institutes of Health (domaine public). » |

- Ne jamais laisser entendre un endossement par l’auteur, le journal ou la Wikimedia Foundation (CC BY 4.0 §2(a)(6)).
- Pour les figures PMC, citer l’article (auteurs, titre, journal, DOI) et non « PubMed » ; `doi` et `article` sont dans le catalogue.
- Les calques d’annotation (SVG/CSS) n’altèrent pas les pixels : ce n’est pas une adaptation, donc pas d’obligation SA sur le code de l’app. Ne pas « cuire » les annotations dans un nouveau JPG pour une image BY-SA.
- Si le concédant demande que son nom soit retiré, le faire (CC BY 4.0 §3(a)(3)). Une demande de retrait de l’image elle-même se traite par courtoisie : retirer l’entrée de `sources.json` ; au build suivant le fichier et l’entrée disparaissent.

### 7 bis. Résultat des builds (cycle 3, runs media.yml 44940902641 puis 44942695155)
- **Publiées : 43** (29 Commons + 14 PMC) après le run 44940902641; voir `imgsrc3/build-log.json` pour le run le plus récent.
- **Correction importante** : les 13 figures du *Community Eye Health Journal* 2021 (n° 112) sont **sous licence NC**. Le XML de l’article dit « Creative Commons Attribution Non-Commercial License », alors que l’API de copyright PubMed annonçait CC BY 4.0. Elles sont retirées de `sources.json` (`excluded`). Conclusion : **seule la mention de licence dans le texte de l’article fait foi**, pas le champ de métadonnées. Le build la relit à chaque fois.
- IMG3-037 (signe de Munson, Commons « CC BY-SA 4.0 ») est **exclue** : l’image porte le filigrane « EyeRounds.org » (EyeRounds = CC BY-NC-ND). La provenance est douteuse; ne pas réintroduire sans preuve que l’auteur a bien placé lui-même la photo sous CC BY-SA.
- IMG3-038 (hydrops) est exclue : elle ne fait que 116 × 86 px.
- IMG3-017 (figure 1 du cas CPC-EM endophtalmie) : le script la rejette, car sa légende porte une mention de copyright sans CC BY. Le contexte est affiché dans le log. Pour l’accepter, une personne doit lire la mention et la recopier dans `figure_rights_reviewed`.
- Routes de téléchargement PMC : le service OA de NCBI (`oa.fcgi`) répond 404 en 2026. Les fichiers viennent du jeu de données **PMC Article Datasets sur AWS** (`pmc-oa-opendata.s3.amazonaws.com/PMCxxxx.N/<fichier>`), d’accès public. Repli : zip Europe PMC `supplementaryFiles`.
