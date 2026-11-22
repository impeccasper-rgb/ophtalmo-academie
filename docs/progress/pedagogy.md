# Progrès — pédagogie clinique (Investigations + cas en images)

## Fait
### Cycle 1 (21 nov. 2026)
- `data/investigations.js` : 6 examens complets, 44 items, `invMediaRequests`.
### Cycle 2 (21 nov. 2026)
- **Droits** : 8 items qui utilisaient des images sans licence CC (OPH-189, 190, 191, 203, 205, 209, 292, 293) remplacés par des photos CC (OPH-308, 307, 136) ou des générateurs (`bscan:vh:long:85`, `gonio:nv`, `vf:arcuate`, `vf:fp`); p-bscan-2 garde le svg du rôle visuels. Vérifié par script : 0 image non CC.
- **Nouveaux items** : p-oct-9 (`oct:srf`), p-cv-8 (`vf:altitudinal`) → **46 items** (7/7/9/7/8/8).
- Médias propres sous nouveaux ids, fusionnés dans `G.OPH.invMedia` par `Object.assign` (n’écrase pas `inv-media.js`).
- Doutes corrigés : p-bscan-7 (sclère ≈ 2,4 mm selon la source, normale ≈ 1 mm), p-ascan-4 (tracés A/B comme le svg), p-fondoeil-4 (latéralité non affirmée).
- **`data/cases-images.js`** (nouveau) : `G.OPH.imageCases` = **35 cas** (cornée 12, glaucome 10, général 13; niveaux 10/14/11), `G.OPH.imageCasesMedia` = 35 photos CC distinctes (aucune déjà utilisée dans les Investigations), hotspots placés à la main sur grille. Vedette : `ic-c03` (`featured:true`).
- `docs/PEDAGOGY-REVIEW.md` : section « Corrections outils » (8 points, ligne + texte + correction), tableaux complets, lacunes, doutes.
- Validation : `node -e "…require('data/investigations.js')…"` → `6 46`; `cases-images.js` charge seul → 35 cas.

### Cycle 4 (21 nov. 2026, dépôt ophtalmo-academie)
- Indice « la bonne réponse est la plus longue » corrigé dans `investigations.js` (74 → 22 % FR, 20 % EN), `cases-images.js` (86 → 23 % / 20 %) et `cases-open.js` (69 → 20 % / 17 %); la plus courte reste ≈ 20–24 %. Commande de contrôle dans PEDAGOGY-REVIEW.md (§ Cycle 4).
- `cases-open.js` : positions de la bonne réponse réparties (8/9/9/9).
- Corrections : ic-c06 (hotspot 56/56, plus de « verticales »), p-oct-8 (« sans toucher l’œil »), m-ascan-5 (anneaux à côté des chiffres + texte qui donnait la réponse retiré du schéma), quiz C-012 FR/EN (≥ 180° = PPP AAO; ISGEO initiale ≥ 270°).
- Validation : fichiers chargés dans node; `tools/build_web.py` OK (missing: none); `tests/web/test_site.py --no-build --quick --only flows` : 32 vérifications, 0 échec.
- Note : des commits d’autres rôles (ac7a1d3, aca1488) ont inclus une partie de ces modifications en cours de route; le reste est dans l’arbre de travail, non commité, non poussé.
- À faire par un autre rôle : `docs/FACTS.md` l. 154 (même attribution ISGEO ≥ 180° à corriger).

### Cycle 8 (21 nov. 2026) — cornée
- Arbres v2 (yesGo/noGo) ×14, cartes Traitement « externe » (first/refer/pitfall/qc), définitions ≤ 45 mots en lignes courtes (\n), 7 QCM de fiche réécrits (conduite au lieu du diagnostic). Validé : chargement node, validate.js, build_web, rendu Playwright (arbre v2 + 4 cartes, 0 erreur JS). Mots visibles FR 4942 / EN 4766. Non commité, non poussé.

### Cycle 7 (21 nov. 2026) — fiches cornée allégées
- 14 fiches du module B : définitions de 2 phrases (≤ 60 mots à l’écran Voir); arbres réécrits avec `cont`; cartes Traitement (`treatment: {first, refer, pitfall, qc}`) générées depuis les nouveaux champs par traitement `dose/refer/pitfall/qc`; ≤ 3 drapeaux rouges; 4–5 points essentiels (doublons retirés); moyens mnémotechniques raccourcis; les détails déplacés vont dans `anatomy.text` (Pour aller plus loin).
- Mots visibles par défaut : FR 6605 → 5143 (−22 %), EN 6360 → 4998 (−21 %); 0 écran au-dessus des plafonds (détail dans PEDAGOGY-REVIEW.md, Cycle 7).
- Validation : 7 fichiers chargés dans node, alignement FR/EN vérifié (longueurs, `cont`, champs des traitements), `tools/validate.js` OK, `tools/build_web.py` OK, rendu Playwright (arbre + cartes) sans erreur JS.
- Pour le web : afficher `f.treatments` (détail) dans « Pour aller plus loin » quand `f.treatment` existe.
- Non commité, non poussé (le rôle web pousse).

Script de comptage (à lancer avec `node wc.js [racine]`, `--json` pour la sortie brute) :
```js
// Default-visible word counts per cornea fiche (level 1 « Fondamentaux »), per screen, FR and EN (overlay merged).
const root=process.argv.slice(2).find(a=>!a.startsWith('-'))||'/home/claude/ophtalmo-academie';
const path=require('path'); global.window=undefined; globalThis.OPH={}; globalThis.OPH_EN={};
['fiches-cornee','fiches-cornee-2','ext-cornee-a','ext-cornee-b','hy-cornee'].forEach(f=>require(path.join(root,'data',f+'.js')));
require(path.join(root,'data-en','fiches-cornee.js')); try{ require(path.join(root,'data-en','hy.js')); }catch(e){}
const merge=(a,b)=>{ if(b===undefined) return a; if(Array.isArray(b)||typeof b!=='object'||b===null) return b; const o=Object.assign({},a); for(const k of Object.keys(b)) o[k]=merge(a?a[k]:undefined,b[k]); return o; };
const W=s=>!s?0:String(s).replace(/\*\*|\[\[|\]\]/g,'').split(/\s+/).filter(x=>/[\p{L}\p{N}]/u.test(x)).length;
const sum=a=>a.reduce((x,y)=>x+W(y),0);
const ids=OPH.fiches.filter(f=>f.module==='B').map(f=>f.id);
const rows=[]; const tot={};
for(const lg of ['fr','en']) for(const id of ids){
  let f=OPH.fiches.find(x=>x.id===id); let h=OPH.hy[id]||{};
  if(lg==='en'){ f=merge(f,OPH_EN.fiches[id]||{}); h=merge(h,(OPH_EN.hy||{})[id]||{}); }
  const r={id,lg};
  r.one=W(f.oneLiner);
  r.voir=W(f.definition)+(f.compare?W(f.compare.title)+W(f.compare.normal.caption)+W(f.compare.patho.caption):0);
  r.comp=sum(h.essentials||[])+W(f.causal.title)+sum(f.causal.levers.map(l=>l.label))+sum(f.causal.steps.map(s=>s.label))+(f.mnemonic?W(f.mnemonic.title)+W(f.mnemonic.text):0);
  r.ess=(h.essentials||[]).length;
  r.dec=sum(f.redFlags.slice(0,3))+(f.treatment?sum([].concat(f.treatment.first||[],f.treatment.refer||[],f.treatment.pitfall||[],f.treatment.qc||[])):sum(f.treatments.map(t=>[t.name,t.how,t.why].join(' '))));
  r.algo=sum(f.cat.algo.map(a=>a.q+' '+a.yes+' '+a.no)); r.algoMaxQ=Math.max(...f.cat.algo.map(a=>W(a.q))); r.algoMaxA=Math.max(...f.cat.algo.map(a=>Math.max(W(a.yes),W(a.no))));
  r.train=sum(f.pearls.map(p=>p.q));
  r.total=r.one+r.voir+r.comp+r.dec+r.algo+r.train; rows.push(r);
}
const json=process.argv.includes('--json'); if(json){ console.log(JSON.stringify(rows)); process.exit(0); }
console.log('id               lg  1line voir comp(ess) dec algo(maxQ/maxA) train total');
for(const r of rows) console.log(r.id.padEnd(16),r.lg,String(r.one).padStart(5),String(r.voir).padStart(4),(r.comp+'('+r.ess+')').padStart(9),String(r.dec).padStart(4),(r.algo+'('+r.algoMaxQ+'/'+r.algoMaxA+')').padStart(11),String(r.train).padStart(5),String(r.total).padStart(5));
for(const lg of ['fr','en']){ const R=rows.filter(r=>r.lg===lg); console.log(lg,'TOTAL', R.reduce((a,r)=>a+r.total,0), '| over budget: voir>60', R.filter(r=>r.voir>60).length, 'comp>120', R.filter(r=>r.comp>120).length, 'dec>180', R.filter(r=>r.dec>180).length, 'oneLiner>40', R.filter(r=>r.one>40).length, 'ess>5', R.filter(r=>r.ess>5).length); }
```

## Reste / pour les autres rôles
- **Exercices interactifs** : appliquer les corrections 1–5 de PEDAGOGY-REVIEW.md (« Corrections outils »); brancher `G.OPH.imageCases` (même schéma que `invPractice`, + `topic`, `featured`) avec `G.OPH.imageCasesMedia` (kind/photo/hotspots/alt; crédit via `Photo.credit`). Le moteur accepte un objet média direct (`mediaById(obj)`).
- **Web/build** : ajouter `data/cases-images.js` aux données chargées (FR, contenu bilingue natif); route proposée `#cas-images` ou intégration au hub Investigations.
- **Ressources visuelles** : supprimer les entrées restreintes devenues inutiles (`m-bscan-3`, `m-oct-6`, `m-gonio-1`, `m-fondoeil-3`, `m-fondoeil-4`, `m-cv-3`, `m-cv-4`); vérifier visuellement les hotspots des cas fins (voir revue §Points à vérifier).
- Lacune : aucune image de cellulite orbitaire au catalogue.

## Blocages
- Aucun. Sources web listées dans PEDAGOGY-REVIEW.md (market/SOURCES.md hors périmètre).

## Cycle 7 — glaucome (fait)
- 13 fiches C + surcouche EN : définitions en 2 phrases, arbres avec `cont`, drapeaux ≤ 3, cartes Traitement (`treatment` + `dose/refer/pitfall/qc` par traitement). Chiffres avant/après : docs/PEDAGOGY-REVIEW.md « Cycle 7 — glaucome ». Outil : tools/wordcount-fiches.js.
- 2e passe : essentiels hy-glaucome (g-*, c-bases) ≤ 14 mots FR + EN (data-en/hy.js : seules ces clés) ; Comprendre ≤ 120 partout.
- Reste : rendu des champs par traitement au niveau 2 (rôle web).

## Cycle 8 — glaucome (fait)
- 13 arbres en v2 (yesGo/noGo), 4 erreurs de logique de la critique corrigées ; bloc Traitement de fiche pour l’externe (Toi / Ophtalmologiste, délai, piège nommé) ; 6 mini-QCM de diagnostic → conduite ; validate.js contrôle v2. Détails : docs/PEDAGOGY-REVIEW.md « Cycle 8 — glaucome ».
- Reste : src/tree.js doit lire yesGo/noGo (sinon les branches apparaissent comme des fins).

## Cycle 9 (fait)
- Délais drapeaux / arbre / référence : tools/check-delays.js, 0 écart sur 27 fiches (FR, EN). « En deux phrases » ≤ 3 lignes à 390 px sur 27/27 (mesuré dans le site). Essentiels ≤ 15 mots partout ; c-pterygion et c-dystrophies sous 120 en Comprendre.
