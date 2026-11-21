/* ===== i18n: language choice, UI dictionary, content overlay (data-en/*.js) ===== */
'use strict';
var I18N = (function () {
  var G = window;
  function pickLang() {
    var ok = function (v) { v = String(v || '').toLowerCase().slice(0, 2); return v === 'fr' || v === 'en' ? v : ''; };
    var q = ''; try { q = ok(new URLSearchParams(location.search).get('lang')); } catch (e) { }
    if (q) return q;
    var s = ''; try { s = ok(localStorage.getItem('oph-lang')); } catch (e) { }
    if (s) return s;
    var navs = []; try { navs = (navigator.languages && navigator.languages.length ? navigator.languages : [navigator.language]) || []; } catch (e) { }
    for (var i = 0; i < navs.length; i++) { var n = ok(navs[i]); if (n) return n; }
    return 'fr';
  }
  return { lang: pickLang(), dict: { fr: {}, en: {} }, applied: false };
})();

/* t('key', {n: 3, x: 'abc'}) — dictionary value may be a string or [singular, plural] (chosen with vars.n) */
I18N.t = function (key, vars) {
  var d = I18N.dict, v = d[I18N.lang] && d[I18N.lang][key];
  if (v == null) v = d.fr[key];
  if (v == null) return key;
  if (Array.isArray(v)) { var n = vars && +vars.n; v = (I18N.lang === 'fr' ? n > 1 : n !== 1) ? v[1] : v[0]; }
  if (vars) v = String(v).replace(/\{(\w+)\}/g, function (m, k) { return vars[k] != null ? vars[k] : m; });
  return v;
};
var t = window.t = I18N.t;
/* bilingual field {fr, en} → string in the current language */
I18N.pick = function (v) { if (v == null) return ''; if (typeof v !== 'object' || Array.isArray(v)) return v; return v[I18N.lang] != null ? v[I18N.lang] : (v.fr != null ? v.fr : ''); };
I18N.locale = function () { return I18N.lang === 'en' ? 'en-CA' : 'fr-CA'; };
/* true when showing English but this content object has no English overlay */
I18N.untranslated = function (obj) { return I18N.lang === 'en' && !!obj && typeof obj === 'object' && !obj._en; };
I18N.badge = function (obj) { return I18N.untranslated(obj) ? '<span class="tag plain fr-badge" title="' + I18N.t('i18n.fr.title') + '" lang="fr">FR</span>' : ''; };
I18N.set = function (lang) {
  if (lang !== 'fr' && lang !== 'en') return;
  try { localStorage.setItem('oph-lang', lang); } catch (e) { }
  var url = location.href;
  try { var u = new URL(location.href); if (u.searchParams.has('lang')) { u.searchParams.set('lang', lang); url = u.toString(); } } catch (e) { }
  if (url !== location.href) location.href = url; else location.reload();
};
I18N.switchHtml = function (extraCls) {
  return '<div class="seg sm langsw' + (extraCls ? ' ' + extraCls : '') + '" role="group" aria-label="' + I18N.t('i18n.switch') + '">' + ['fr', 'en'].map(function (l) {
    return '<button type="button" data-act="lang" data-v="' + l + '" lang="' + l + '" aria-pressed="' + (I18N.lang === l) + '" title="' + (l === 'fr' ? 'Français' : 'English') + '">' + l.toUpperCase() + '</button>';
  }).join('') + '</div>';
};

/* ---------- content overlay ---------- */
I18N._isObj = function (x) { return x && typeof x === 'object' && !Array.isArray(x); };
I18N._merge = function (dst, src) {
  if (!I18N._isObj(dst) || !I18N._isObj(src)) return src;
  Object.keys(src).forEach(function (k) {
    var s = src[k], d = dst[k];
    if (Array.isArray(s) && Array.isArray(d) && s.length === d.length) {
      dst[k] = d.map(function (x, i) { return s[i] == null ? x : (I18N._isObj(x) && I18N._isObj(s[i]) ? I18N._merge(x, s[i]) : s[i]); });
    } else if (I18N._isObj(s) && I18N._isObj(d)) I18N._merge(d, s);
    else dst[k] = s;
  });
  return dst;
};
I18N._mark = function (o) { try { Object.defineProperty(o, '_en', { value: true, enumerable: false, configurable: true }); } catch (e) { } };
I18N._byId = function (arr, over) {
  if (!Array.isArray(arr) || !over) return 0;
  var n = 0;
  arr.forEach(function (it) { if (it && it.id != null && over[it.id]) { I18N._merge(it, over[it.id]); I18N._mark(it); n++; } });
  return n;
};
I18N.applyContent = function () {
  var O = G_OPH(), E = window.OPH_EN;
  I18N.stats = {};
  if (I18N.lang !== 'en' || !E || I18N.applied) return I18N.stats;
  I18N.applied = true;
  Object.keys(E).forEach(function (k) {
    var over = E[k], cur = O[k];
    if (!over) return;
    if (k === 'glossary') {
      var g = O.glossary = O.glossary || {}, n = 0;
      Object.keys(over).forEach(function (term) {
        var v = over[term];
        if (typeof v === 'string') { g[term] = v; n++; }
        else if (v && (v.def || v.term)) { var def = v.def || g[term]; if (v.term && v.term !== term) delete g[term]; g[v.term || term] = def; n++; }
      });
      I18N.stats.glossary = n; return;
    }
    if (k === 'A' && I18N._isObj(cur)) {
      var c = 0;
      Object.keys(over).forEach(function (sub) {
        if (Array.isArray(cur[sub])) c += I18N._byId(cur[sub], over[sub]);
        else if (I18N._isObj(cur[sub])) { I18N._merge(cur[sub], over[sub]); I18N._mark(cur[sub]); c++; }
      });
      I18N.stats.A = c; return;
    }
    if (Array.isArray(cur)) { I18N.stats[k] = I18N._byId(cur, over); return; }
    if (I18N._isObj(cur)) { // keyed objects: hy, photos, bonus, images…
      var m = 0;
      Object.keys(over).forEach(function (key) {
        if (cur[key] == null) return;
        if (Array.isArray(cur[key]) && !Array.isArray(over[key]) && I18N._isObj(over[key])) m += I18N._byId(cur[key], over[key]);
        else if (I18N._isObj(cur[key])) { I18N._merge(cur[key], over[key]); I18N._mark(cur[key]); m++; }
        else { var tmp = { v: cur[key] }; I18N._merge(tmp, { v: over[key] }); cur[key] = tmp.v; m++; }
      });
      I18N.stats[k] = m;
    }
  });
  return I18N.stats;
};
function G_OPH() { return (window.OPH = window.OPH || {}); }

/* ---------- UI dictionary (FR = original text; EN) ---------- */
(function () {
  var P = {
    /* shell */
    'brand.name': ['Ocelle', 'Ocelle'],
    'brand.tagline': ['Apprends à voir le signe qui compte.', 'Learn to see the sign that matters.'],
    'brand.method': ['Observe. Réponds. Révèle.', 'Observe. Answer. Reveal.'],
    'hero.eyeAlt': ['Œil stylisé : le faisceau de la lampe à fente révèle un signe', 'Stylised eye: the slit-lamp beam reveals a sign'],
    'brand.sub': ['Ophtalmo · externat et R1', 'Ophthalmology · clerkship & R1'],
    'app.title': ['Ocelle', 'Ocelle'],
    'app.loading': ['Chargement de la classe…', 'Loading…'],
    'nav.main': ['Navigation principale', 'Main navigation'],
    'nav.quick': ['Navigation rapide', 'Quick navigation'],
    'nav.menu': ['Menu', 'Menu'], 'nav.menu.open': ['Ouvrir le menu', 'Open menu'],
    'nav.home': ['Accueil', 'Home'], 'nav.learn': ['Apprendre', 'Learn'], 'nav.cases': ['Cas', 'Cases'], 'nav.review': ['Réviser', 'Review'], 'nav.progress': ['Progression', 'Progress'],
    'nav.module': ['Module {m} · {name}', 'Module {m} · {name}'],
    'nav.locked': ['Verrouillé : réussis le quiz {p} ou entre quand même', 'Locked: pass quiz {p} or enter anyway'],
    'nav.overview': ['Vue d’ensemble', 'Overview'], 'nav.foundations': ['Fondations', 'Foundations'], 'nav.more': ['Plus', 'More'],
    'nav.atlas': ['Atlas d’images', 'Image atlas'], 'nav.search': ['Recherche', 'Search'],
    'nav.expressB': ['Révision express : cornée', 'Express review: cornea'], 'nav.expressC': ['Révision express : glaucome', 'Express review: glaucoma'],
    'nav.sources': ['Sources et crédits', 'Sources and credits'],
    'nav.inv': ['Investigations', 'Investigations'], 'nav.inv.short': ['Examens', 'Tests'],
    'disclaimer': ['Outil éducatif — ne remplace pas le jugement clinique.', 'Educational tool — does not replace clinical judgment.'],
    'disclaimer.long': ['Ocelle sert à apprendre et à réviser. Il ne pose pas de diagnostic et ne doit pas guider la prise en charge d’un patient : l’avis de ton patron, les protocoles de ton milieu et les lignes directrices l’emportent toujours. En cas d’urgence, consulte un professionnel de la santé.', 'Ocelle is for learning and review. It does not diagnose and must not guide patient care: your attending, local protocols and the guidelines always prevail. In an emergency, see a health professional.'],
    'photo.author.unknown': ['Auteur non indiqué', 'Author not stated'],
    'lic.sa': ['partage dans les mêmes conditions', 'share-alike'],
    'src.fonts': ['Polices Lexend et Atkinson Hyperlegible (Next, Mono) hébergées avec l’application, sous licence SIL Open Font License 1.1.', 'Lexend and Atkinson Hyperlegible (Next, Mono) fonts are bundled with the app under the SIL Open Font License 1.1.'],
    'atlas.title': ['Atlas d’images', 'Image atlas'], 'atlas.inv': ['Examens', 'Tests'], 'atlas.q': ['Filtrer (ex. Fuchs, rubéose, OCT)', 'Filter (e.g. Fuchs, rubeosis, OCT)'], 'atlas.none': ['Aucune image ne correspond.', 'No matching image.'],
    'atlas.eyebrow': ['{n} images authentiques · EyeRounds.org et sources sous licence libre', '{n} real images · EyeRounds.org and openly licensed sources'],
    'atlas.lead': ['Images classées par thème. Touche une image pour l’agrandir et lire sa légende d’origine. Licence, auteur et lien source sous chaque image ; images non modifiées.', 'Images grouped by topic. Tap an image to enlarge it and read its original caption. Licence, author and source link under each image; images are unmodified.'],
    'daily.title': ['Image du jour', 'Image of the day'], 'daily.cta': ['Une image, un signe : 1 minute', 'One image, one sign: 1 minute'], 'daily.done': ['Faite aujourd’hui : reviens demain', 'Done today: come back tomorrow'],
    'daily.lead': ['Une nouvelle image chaque jour. Réponds pour garder ta série.', 'A new image every day. Answer to keep your streak.'], 'daily.none': ['Aucune image disponible pour l’instant.', 'No image available yet.'],
    'daily.back': ['Reviens demain pour une nouvelle image.', 'Come back tomorrow for a new image.'], 'daily.again': ['Déjà comptée aujourd’hui. Reviens demain.', 'Already counted today. Come back tomorrow.'],
    'streak.days': [['jour de suite', 'jours de suite'], ['day in a row', 'days in a row']], 'streak.days.n': [['{n} jour de suite', '{n} jours de suite'], ['{n} day in a row', '{n} days in a row']],
    'streak.best': ['Meilleure série : {n}', 'Best streak: {n}'], 'streak.freeze1': ['1 gel disponible cette semaine (une journée manquée ne casse pas ta série)', '1 freeze left this week (one missed day won’t break your streak)'],
    'streak.freeze0': ['Gel de la semaine déjà utilisé', 'This week’s freeze is used'], 'streak.used': ['Ton gel de la semaine a sauvé ta série.', 'Your weekly freeze saved your streak.'],
    'feat.title': ['Cas vedette', 'Featured case'], 'feat.h1': ['Repère le signe qui compte', 'Spot the sign that matters'], 'feat.lead': ['Un vrai fond d’œil, une question, puis le signe décisif annoté.', 'A real fundus photo, one question, then the decisive sign annotated.'],
    'feat.more': ['Essayer d’autres cas', 'Try more cases'], 'feat.cta.d': ['Gratuit, sans pub, en français et en anglais : images, cas cliniques et jeux pour externes et R1.', 'Free, no ads, in French and English: images, clinical cases and games for clerks and R1s.'], 'feat.home': ['Découvrir Ocelle', 'Discover Ocelle'],
    'home.mod.d0': ['{n} fiches', '{n} topics'], 'home.inv.d': ['{n} images à lire : B-scan, OCT, gonioscopie, fond d’œil… →', '{n} images to read: B-scan, OCT, gonioscopy, fundus… →'],
    'learn.inv.d': ['Échographie, OCT, gonioscopie, fond d’œil, champ visuel : outils interactifs et images à interpréter.', 'Ultrasound, OCT, gonioscopy, fundus, visual fields: interactive tools and images to interpret.'],
    'src.eyebrow': ['Références, images et licences', 'References, images and licences'], 'src.about': ['À propos', 'About'],
    'src.images': ['Images', 'Images'],
    'src.images.p': ['Photographies cliniques EyeRounds.org (Department of Ophthalmology and Visual Sciences, University of Iowa) : images de l’atlas sous licence CC BY-NC-ND 3.0, tutoriels selon les <a href="https://eyerounds.org/TOS.htm" target="_blank" rel="noopener">conditions d’utilisation EyeRounds</a>. Affichées sans modification, avec crédit et lien source sur chaque image. Les schémas sont des dessins pédagogiques originaux, étiquetés « schéma ».', 'Clinical photographs from EyeRounds.org (Department of Ophthalmology and Visual Sciences, University of Iowa): atlas images under CC BY-NC-ND 3.0, tutorials under the <a href="https://eyerounds.org/TOS.htm" target="_blank" rel="noopener">EyeRounds terms of use</a>. Shown unmodified, with credit and a source link on every image. Diagrams are original teaching drawings, labelled “schematic”.'],
    'src.open.p': ['{n} images supplémentaires proviennent de sources sous licence libre (Wikimedia Commons, PubMed Central) : auteur et licence sont indiqués sur chaque image.', '{n} additional images come from openly licensed sources (Wikimedia Commons, PubMed Central): author and licence are shown on each image.'],
    'src.cc': ['Licence <a href="https://creativecommons.org/licenses/by-nc-nd/3.0/" target="_blank" rel="noopener">CC BY-NC-ND 3.0</a> : attribution, pas d’utilisation commerciale, pas de modification. Ocelle est gratuit et sans publicité. <a href="https://eyerounds.org/" target="_blank" rel="noopener">EyeRounds.org</a>', '<a href="https://creativecommons.org/licenses/by-nc-nd/3.0/" target="_blank" rel="noopener">CC BY-NC-ND 3.0</a> licence: attribution, non-commercial, no derivatives. Ocelle is free and ad-free. <a href="https://eyerounds.org/" target="_blank" rel="noopener">EyeRounds.org</a>'],
    'src.perimg': ['Crédit et licence de chaque photo ({n})', 'Credit and licence for each photo ({n})'], 'src.invmedia': ['Images des investigations', 'Investigation images'],
    'src.id': ['Image', 'Image'], 'src.title': ['Titre', 'Title'], 'src.author': ['Auteur', 'Author'], 'src.lic': ['Licence', 'Licence'], 'src.link': ['Source', 'Source'], 'src.schema': ['Schéma original', 'Original schematic'],
    'src.keep': ['À garder en tête', 'Keep in mind'], 'src.keep.p': ['Outil d’étude, pas un protocole : vérifie toujours les pratiques de ton milieu (accès à la SLT et aux MIGS, couverture RAMQ de la CXL et de certains médicaments, protocoles de gouttes fortifiées). Les doses sont des doses adultes usuelles à valider selon le patient.', 'A study tool, not a protocol: always check local practice (access to SLT and MIGS, public coverage of CXL and some drugs, fortified-drop protocols). Doses are usual adult doses to be checked for each patient.'],
    'sync.sync': ['Progression sauvegardée et synchronisée', 'Progress saved and synced'],
    'sync.local': ['Progression sauvegardée sur cet appareil', 'Progress saved on this device'],
    'sync.none': ['Progression non sauvegardée (stockage bloqué)', 'Progress not saved (storage blocked)'],
    'i18n.switch': ['Langue / Language', 'Language / Langue'],
    'i18n.fr.title': ['Pas encore traduit', 'Not translated yet: shown in French'],
    'i18n.lang': ['Langue', 'Language'],
    'view.error': ['Cette vue n’a pas pu s’afficher.', 'This view could not be displayed.'],
    'view.notfound.t': ['Page introuvable', 'Page not found'], 'view.notfound': ['Cette page n’existe pas.', 'This page does not exist or has moved.'],
    'view.backhome': ['Retour à l’accueil', 'Back to home'],
    'missing': ['{what} n’est pas encore chargé.', '{what} not loaded yet.'],
    /* labels */
    'tag.urgent': ['Urgent', 'Urgent'], 'tag.frequent': ['Fréquent', 'Common'], 'tag.highyield': ['High yield', 'High yield'], 'tag.piege': ['Piège', 'Pitfall'],
    'kind.cause': ['Cause', 'Cause'], 'kind.mecanisme': ['Mécanisme', 'Mechanism'], 'kind.lesion': ['Lésion', 'Lesion'], 'kind.signe': ['Signe', 'Sign'], 'kind.complication': ['Complication', 'Complication'],
    'phase.observation': ['Observation', 'Observation'], 'phase.medical': ['Médical', 'Medical'], 'phase.laser': ['Laser', 'Laser'], 'phase.chirurgie': ['Chirurgie', 'Surgery'], 'phase.suivi': ['Suivi', 'Follow-up'], 'phase.escalade': ['Escalade', 'Escalation'],
    'qtype.anatomie': ['Anatomie', 'Anatomy'], 'qtype.physiopathologie': ['Physiopathologie', 'Pathophysiology'], 'qtype.diagnostic': ['Diagnostic', 'Diagnosis'], 'qtype.image': ['Interprétation d’image', 'Image interpretation'], 'qtype.cat': ['Conduite à tenir', 'Management'],
    'mod.A': ['Ophtalmologie générale', 'General ophthalmology'], 'mod.B': ['Cornée', 'Cornea'], 'mod.C': ['Glaucome', 'Glaucoma'],
    'asec.a-anatomie': ['Coupe de l’œil zoomable, couches de la cornée, angle, papille, annexes.', 'Zoomable eye cross-section, corneal layers, angle, optic disc, adnexa.'],
    'asec.a-physiologie': ['Humeur aqueuse et PIO, film lacrymal, transparence cornéenne, réfraction, pupille.', 'Aqueous humour and IOP, tear film, corneal transparency, refraction, pupil.'],
    'asec.a-examen': ['AV, pupilles et RAPD, lampe à fente, fluorescéine, tonométrie, gonioscopie…', 'VA, pupils and RAPD, slit lamp, fluorescein, tonometry, gonioscopy…'],
    'asec.a-imagerie': ['Champs visuels, OCT, papille, topographie : normal vs pathologique.', 'Visual fields, OCT, optic disc, topography: normal vs abnormal.'],
    'asec.a-retine': ['Cataractes, B-scan, décollements, DMLA, rétine vasculaire, papille œdémateuse, pupilles : reconnaître et savoir quoi faire.', 'Cataracts, B-scan, detachments, AMD, retinal vascular disease, disc swelling, pupils: recognize them and know what to do.'],
    'title.bbases': ['Fondations : cornée', 'Foundations: cornea'], 'title.cbases': ['Fondations : glaucome', 'Foundations: glaucoma'],
    'dot.done': ['Terminée', 'Done'], 'dot.seen': ['Commencée', 'Started'], 'dot.none': ['Pas encore vue', 'Not seen yet'],
    'date.in': ['dans {n} jours', 'in {n} days'], 'date.tomorrow': ['demain', 'tomorrow'], 'date.today': ['aujourd’hui', 'today'], 'date.past': ['passé', 'past'],
    /* glossary, photos, lightbox */
    'gloss.foot': ['Glossaire · touche ailleurs pour fermer', 'Glossary · tap elsewhere to close'],
    'photo.lic.eyerounds': ['usage pédagogique selon les conditions EyeRounds', 'educational use under EyeRounds terms'],
    'photo.source': ['page source', 'source page'], 'photo.enlarge': ['Agrandir : {c}', 'Enlarge: {c}'],
    'photo.reveal': ['Révéler les trouvailles', 'Reveal the findings'], 'photo.hide': ['Masquer les trouvailles', 'Hide the findings'],
    'lb.close': ['Fermer', 'Close'], 'lb.hidden': ['Légende masquée pendant la question', 'Caption hidden during the question'],
    'lb.srccap': ['Légende source : ', 'Source caption: '], 'lb.srccase': ['Cas source : ', 'Source case: '],
    'lb.zoomout': ['Réduire', 'Zoom out'], 'lb.zoomin': ['Agrandir', 'Zoom in'],
    'lb.schema': ['Schéma pédagogique — pas une photographie', 'Teaching diagram — not a photograph'],
    'lb.help': ['Boutons + / − pour zoomer, glisse pour te déplacer', 'Use + / − to zoom, drag to move'],
    'lb.aria': ['Image agrandie', 'Enlarged image'],
    'car.prev': ['Image précédente', 'Previous image'], 'car.next': ['Image suivante', 'Next image'], 'car.n': ['Image {n}', 'Image {n}'],
    /* quiz engine */
    'quiz.none': ['Aucune question ne correspond à ce filtre.', 'No question matches this filter.'],
    'quiz.series': ['Série', 'Set'],
    'quiz.qn': ['Question {i} / {n}', 'Question {i} / {n}'], 'quiz.okn': ['{ok} / {n} réussies', '{ok} / {n} correct'],
    'quiz.level': ['Niveau {n}', 'Level {n}'], 'quiz.moduleA': ['Module A', 'Module A'],
    'quiz.photo.hidden': ['Photographie clinique (légende masquée)', 'Clinical photograph (caption hidden)'],
    'quiz.schema.hidden': ['Schéma — légende masquée pendant la question', 'Diagram — caption hidden during the question'],
    'quiz.conf.aria': ['Ton niveau de confiance', 'Your confidence level'], 'quiz.conf.lead': ['Je réponds :', 'I answer:'],
    'quiz.conf.sure': ['avec assurance', 'confidently'], 'quiz.conf.unsure': ['en hésitant', 'with hesitation'],
    'quiz.opts.aria': ['Choix de réponse', 'Answer choices'], 'quiz.idk': ['Je ne sais pas', 'I don’t know'],
    'quiz.right': ['Bonne réponse.', 'Correct answer.'], 'quiz.whynot': ['Pourquoi pas :', 'Why not:'],
    'quiz.v.ok': ['Exact', 'Correct'], 'quiz.v.okunsure': ['Exact, mais tu hésitais : la question reviendra dans « à consolider »', 'Correct, but you hesitated: this question will come back under “to consolidate”'],
    'quiz.v.idk': ['Bonne décision de ne pas deviner : voici la réponse', 'Good call not to guess: here is the answer'], 'quiz.v.bad': ['Pas tout à fait', 'Not quite'],
    'quiz.revfiche': ['Revoir la fiche : {t}', 'Review the topic: {t}'], 'quiz.revsection': ['Revoir la section', 'Review the section'],
    'quiz.revbonus': ['Revoir « À reconnaître aussi » (vue d’ensemble du module)', 'Review “Also recognize” (module overview)'], 'quiz.revbases': ['Revoir les fondations', 'Review the foundations'],
    'quiz.nextq': ['Question suivante', 'Next question'], 'quiz.result': ['Voir mon résultat', 'See my result'],
    'quiz.done': ['Série terminée', 'Set complete'], 'quiz.torev': ['À revoir : ', 'To review: '],
    'quiz.perfect': ['Sans faute. Passe à la suite ou augmente la difficulté.', 'Perfect score. Move on or raise the difficulty.'],
    'quiz.retry': ['Refaire mes erreurs', 'Redo my mistakes'], 'quiz.again': ['Recommencer', 'Start over'], 'common.back': ['Retour', 'Back'],
    'quiz.srcap': ['Légende source : ', 'Source caption: '],
    /* case engine */
    'case.evol': ['Évolution', 'Course'], 'case.continue': ['Continuer', 'Continue'],
    'case.v2': ['Essentiel', 'Essential'], 'case.v1': ['Utile', 'Useful'], 'case.v0': ['Peu utile', 'Low yield'], 'case.vm1': ['Retarde ou nuit', 'Delays or harms'],
    'case.notasked': [' — non demandé', ' — not ordered'],
    'case.step.exams': ['Étape {n} · Examens', 'Step {n} · Tests'], 'case.step.choice': ['Étape {n} · Décision', 'Step {n} · Decision'],
    'case.exres': ['Résultats de tes choix (et des examens essentiels oubliés).', 'Results of your choices (and of the essential tests you missed).'],
    'case.pick': ['Choisis jusqu’à {n} examens.', 'Choose up to {n} tests.'], 'case.show': ['Voir les résultats', 'See the results'],
    'case.debrief': ['Débreffage', 'Debrief'], 'case.restart': ['Recommencer le cas', 'Restart the case'], 'case.others': ['Autres cas', 'Other cases'],
    'case.intro': ['Présentation', 'Presentation'], 'case.max': ['Maximum {n} examens : retire un choix d’abord.', 'Maximum {n} tests: remove one first.'],
    'case.log.exams': ['Examens demandés : ', 'Tests ordered: '],
    /* learn layer */
    'depth.1': ['Fondamentaux', 'Fundamentals'], 'depth.2': ['Pratique clinique', 'Clinical practice'], 'depth.3': ['Début de spécialisation', 'Early residency'],
    'depth.1.en': ['Preclinical', 'Preclinical'], 'depth.2.en': ['Clinical clerkship', 'Clinical clerkship'], 'depth.3.en': ['Beginning residency', 'Beginning residency'],
    'depth.1.d': ['L’essentiel en images : définition, mécanisme clé, signes à reconnaître, drapeaux rouges.', 'The essentials in pictures: definition, key mechanism, signs to recognize, red flags.'],
    'depth.2.d': ['+ examen ciblé, diagnostic différentiel, investigations et étapes de prise en charge.', '+ focused exam, differential diagnosis, investigations and management steps.'],
    'depth.3.d': ['+ détails des traitements, particularités québécoises et tout le texte de référence.', '+ treatment details, Quebec specifics and the full reference text.'],
    'depth.aria': ['Niveau de lecture', 'Reading level'], 'mv.hide': ['Masquer les détails', 'Hide details'],
    'hy.title': ['L’essentiel', 'Key points'], 'common.next': ['Suivant', 'Next'],
    'run.done': ['{t} · terminé', '{t} · done'],
    'run.p80': ['Excellent : passe au niveau suivant ou change de module.', 'Excellent: move up a level or switch module.'],
    'run.p50': ['Bien. Refais une série : les ratés reviennent en premier.', 'Good. Play another round: misses come back first.'],
    'run.p0': ['Normal au début : relis les fiches liées puis rejoue.', 'Normal at first: reread the linked topics, then play again.'],
    'run.torev': ['À revoir :', 'To review:'], 'run.again': ['Rejouer', 'Play again'],
    'cloze.soon': ['Les mots troués de cette partie arrivent bientôt.', 'Fill-in-the-blanks for this part are coming soon.'],
    'cloze.answer': ['Réponse : {a}', 'Answer: {a}'], 'game.cloze': ['Mots troués', 'Fill in the blank'],
    'deck.patron': ['Questions du patron', 'Attending’s questions'], 'deck.images': ['Images', 'Images'], 'deck.essentiel': ['L’essentiel', 'Key points'],
    'deck.drapeaux': ['Drapeaux rouges', 'Red flags'], 'deck.mnemo': ['Mnémotechniques', 'Mnemonics'], 'deck.vocab': ['Vocabulaire', 'Vocabulary'],
    'srs.redflags': ['Drapeaux rouges : {t} ?', 'Red flags: {t}?'], 'srs.essential': ['L’essentiel : {t}', 'Key points: {t}'], 'srs.whatimg': ['Que montre cette image ?', 'What does this image show?'],
    'img.hiddencap': ['Image (légende masquée)', 'Image (caption hidden)'], 'img.clin': ['Photo clinique', 'Clinical photo'], 'img.toid': ['Photo clinique à identifier', 'Clinical photo to identify'],
    'srs.hint': ['Indice', 'Hint'], 'srs.open': ['Ouvrir : {t}', 'Open: {t}'],
    'srs.empty': ['Rien à réviser pour l’instant.', 'Nothing to review right now.'],
    'srs.empty.d': ['Toutes les cartes de cette sélection sont planifiées plus tard. Choisis un autre paquet ou un autre module.', 'All cards in this selection are scheduled for later. Pick another deck or module.'],
    'srs.session.done': ['{t} · séance terminée', '{t} · session complete'],
    'srs.session.d': ['Les cartes « pas su » reviennent dans quelques minutes, les autres selon le rappel espacé (12 h, 1, 2, 4, 8 jours).', '“Didn’t know” cards come back in a few minutes, the others on a spaced schedule (12 h, 1, 2, 4, 8 days).'],
    'srs.finish': ['Terminer', 'Finish'], 'srs.left': [['{n} restante', '{n} restantes'], ['{n} left', '{n} left']],
    'srs.rate.aria': ['Évalue ta réponse', 'Rate your answer'], 'srs.r0': ['Je ne savais pas', 'Didn’t know'], 'srs.r1': ['Hésitant', 'Unsure'], 'srs.r2': ['Je savais', 'Knew it'],
    'srs.space': ['Espace', 'Space'], 'srs.flip': ['Retourner la carte', 'Flip the card'],
    'game.img': ['Quel diagnostic ?', 'Which diagnosis?'], 'game.img.q': ['À quelle fiche appartient cette image ?', 'Which topic does this image belong to?'],
    'game.img.was': ['C’était : {t}', 'It was: {t}'], 'game.streak': [' · série de {n}', ' · streak of {n}'],
    'game.openfiche': ['Ouvrir la fiche', 'Open the topic'], 'game.best': ['Meilleure série : {n}', 'Best streak: {n}'], 'game.img.none': ['Aucune image pour ce module.', 'No images for this module.'],
    'urg.urgent': ['Urgent : le jour même', 'Urgent: same day'], 'urg.rapide': ['Rapide : jours à semaines', 'Soon: days to weeks'], 'urg.routine': ['Routine', 'Routine'],
    'game.tri': ['Urgent ou pas ?', 'Urgent or not?'], 'tri.q': ['Quel délai donnes-tu ?', 'What timeframe do you give?'], 'tri.ok': ['Bon triage', 'Good triage'],
    'tri.answer': ['Réponse : {a}', 'Answer: {a}'], 'tri.soon': ['Les mini-vignettes de triage arrivent bientôt.', 'Triage vignettes are coming soon.'],
    'game.match': ['Associe', 'Match'], 'match.h': ['Associe l’indice au diagnostic', 'Match the clue to the diagnosis'],
    'match.d': ['Touche un indice, puis le diagnostic qui lui correspond.', 'Tap a clue, then the diagnosis it belongs to.'],
    'match.few': ['Pas assez d’indices pour ce module pour l’instant.', 'Not enough clues for this module yet.'], 'match.first': ['Choisis d’abord un indice à gauche.', 'Pick a clue on the left first.'],
    'match.done': [['Bravo : {k} associations en {s} s, {n} erreur', 'Bravo : {k} associations en {s} s, {n} erreurs'], ['Well done: {k} matches in {s} s, {n} mistake', 'Well done: {k} matches in {s} s, {n} mistakes']],
    'match.new': ['Nouvelle manche', 'New round'],
    'rep.open': ['Signaler une erreur ou une imprécision', 'Report an error or inaccuracy'], 'rep.q': ['Qu’est-ce qui te semble faux ou flou ?', 'What looks wrong or unclear?'],
    'rep.save': ['Enregistrer le signalement', 'Save the report'], 'common.cancel': ['Annuler', 'Cancel'],
    'rep.empty': ['Écris d’abord ce qui te semble faux.', 'First write what looks wrong.'],
    'rep.saved': ['Signalement enregistré sur cet appareil. Tu peux copier tes signalements depuis Progression pour nous les envoyer.', 'Report saved on this device. You can copy your reports from Progress to send them to us.'],
    'rep.copy': ['Copier mes signalements', 'Copy my reports'], 'rep.copied': ['Signalements copiés dans le presse-papiers.', 'Reports copied to the clipboard.'], 'rep.copyfail': ['Copie impossible : sélectionne le texte à la main.', 'Could not copy: select the text manually.'],
    'meta.review': ['<b>Dernière révision :</b> 1er novembre 2026 · <b>Relecture :</b> contrôle indépendant par un second agent d’IA (exactitude, clés de réponse, concordance photo-légende). <b>Pas encore validé par un ophtalmologiste</b> : en cas de doute, l’avis de ton patron et les lignes directrices l’emportent.',
      '<b>Last revised:</b> November 1, 2026 · <b>Review:</b> independent check by a second AI agent (accuracy, answer keys, photo–caption match). <b>Not yet validated by an ophthalmologist</b>: when in doubt, your attending and the guidelines prevail.'],
    'modseg.all': ['Tout', 'All'], 'modseg.A': ['A · Général', 'A · General'], 'modseg.B': ['B · Cornée', 'B · Cornea'], 'modseg.C': ['C · Glaucome', 'C · Glaucoma'],
    'rev.wrong': ['Mes erreurs et hésitations', 'My mistakes and hesitations'],
    'rev.wrong.d': ['Les QCM ratés ou répondus en hésitant reviennent ici', 'MCQs you missed or answered with hesitation come back here'],
    'rev.nq': [['{n} question', '{n} questions'], ['{n} question', '{n} questions']],
    'rev.eyebrow': ['Réviser · rappel actif', 'Review · active recall'], 'rev.h1': ['Réviser en jouant', 'Learn by playing'],
    'rev.lead': ['Une idée par écran. Les erreurs reviennent en premier, les notions sues s’espacent.', 'One idea per screen. Mistakes come back first; what you know gets spaced out.'],
    'rev.today': ['Séance du jour', 'Today’s session'], 'rev.ncards': [['{n} carte', '{n} cartes'], ['{n} card', '{n} cards']],
    'rev.today.d': ['{due} à revoir · {fresh} nouvelles · {known} / {total} bien sues', '{due} due · {fresh} new · {known} / {total} known'],
    'rev.start': ['Commencer', 'Start'],
    'game.cards': ['Cartes mémoire', 'Flashcards'], 'rev.cards.d': ['Patron, images, drapeaux rouges, l’essentiel', 'Attending questions, images, red flags, key points'],
    'rev.cloze.d': ['Complète la phrase clé', 'Complete the key sentence'], 'rev.nphr': ['{n} phrases', '{n} sentences'],
    'rev.img.d': ['Reconnais l’image authentique', 'Recognize the real image'], 'rev.nimg': ['{n} images', '{n} images'],
    'rev.tri.d': ['Donne le bon délai', 'Give the right timeframe'], 'rev.nvig': ['{n} vignettes', '{n} vignettes'],
    'rev.match.d': ['Indice ↔ diagnostic, contre la montre', 'Clue ↔ diagnosis, against the clock'],
    'rev.mcq': ['QCM commentés', 'MCQs with explanations'], 'rev.mcq.d': ['Avec niveau de confiance', 'With confidence rating'],
    'rev.cases': ['Cas évolutifs', 'Evolving cases'], 'rev.cases.d': ['Choisis les examens, décide', 'Choose the tests, decide'], 'rev.ncases': ['{n} cas', '{n} cases'],
    'rev.vocab.d': ['Termes du glossaire', 'Glossary terms'], 'rev.nterms': ['{n} termes', '{n} terms'], 'rev.ncards2': ['{n} cartes', '{n} cards'],
    'train.tri': ['Urgent ou pas ?', 'Urgent or not?'], 'train.cloze': ['Mots troués', 'Fill in the blank'],
    /* progression & settings */
    'prog.h1': ['Où en es-tu ?', 'Where are you at?'],
    'prog.chart.aria': ['Maîtrise par module, présentée comme une échelle d’acuité', 'Mastery by module, shown as a visual acuity chart'],
    'prog.line': ['{a} sûres · {b} à consolider · {c} ratées', '{a} sure · {b} to consolidate · {c} missed'],
    'prog.acuity': ['Acuité de connaissances : ', 'Knowledge acuity: '], 'prog.acuity.d': ['Seules les bonnes réponses données avec assurance comptent comme maîtrisées.', 'Only correct answers given confidently count as mastered.'],
    'prog.cards.d': ['bien sues · {seen} vues · {due} à revoir', 'known · {seen} seen · {due} due'], 'prog.review': ['Réviser', 'Review'],
    'prog.cloze.d': ['phrases réussies (dernier essai)', 'sentences correct (last try)'], 'prog.continue': ['Continuer', 'Continue'],
    'prog.mcq': ['QCM', 'MCQs'], 'prog.mcq.d': ['répondues · {w} ratées · {s} à consolider', 'answered · {w} missed · {s} to consolidate'], 'prog.mcq.btn': ['Revoir mes erreurs', 'Review my mistakes'],
    'prog.plan': ['Plan jusqu’aux stages', 'Plan until rotations'], 'prog.display': ['Affichage', 'Display'],
    'prog.size': ['Taille du texte', 'Text size'], 'prog.theme': ['Thème', 'Theme'], 'prog.auto': ['Auto', 'Auto'], 'prog.light': ['Clair', 'Light'], 'prog.dark': ['Sombre', 'Dark'],
    'prog.motion': ['Animations', 'Animations'], 'prog.on': ['Activées', 'On'], 'prog.off': ['Désactivées', 'Off'],
    'prog.dates': ['Dates des stages', 'Rotation dates'], 'prog.dateC': ['Observation cornée', 'Cornea observership'], 'prog.dateG': ['Observation glaucome', 'Glaucoma observership'],
    'prog.savedates': ['Enregistrer les dates', 'Save dates'], 'prog.reset': ['Réinitialiser ma progression', 'Reset my progress'],
    'prog.reports': ['Mes signalements ({n})', 'My reports ({n})'], 'prog.reports.d': ['Tes signalements restent sur cet appareil. Copie-les pour les transmettre à l’équipe, qui corrigera le contenu.', 'Your reports stay on this device. Copy them to send to the team, who will correct the content.'],
    'prog.dates.d': ['Facultatif : entre tes dates de stage pour afficher un compte à rebours et un plan daté.', 'Optional: enter your rotation dates to show a countdown and a dated plan.'],
    'dates.invalid': ['Choisis deux dates valides.', 'Pick two valid dates.'], 'dates.saved': ['Dates enregistrées.', 'Dates saved.'],
    'reset.ask': ['Tout effacer (réponses, lectures, cas) ? ', 'Erase everything (answers, reading, cases)? '], 'reset.yes': ['Oui, effacer', 'Yes, erase'], 'reset.done': ['Progression réinitialisée.', 'Progress reset.'],
    /* apprendre hub */
    'learn.eyebrow': ['Apprendre · Voir → Comprendre → Décider', 'Learn · See → Understand → Decide'], 'learn.h1': ['Parcours', 'Pathway'],
    'learn.lead': ['Choisis ton niveau de lecture : il s’applique à toutes les fiches.', 'Choose your reading level: it applies to every topic.'],
    'learn.first': ['À lire en premier', 'Read first'], 'learn.mastered': ['{a} / {b} QCM maîtrisées', '{a} / {b} MCQs mastered'],
    /* views: shared */
    'lock.h': ['Module {m} verrouillé', 'Module {m} locked'],
    'lock.p': ['Pour avancer sans brûler d’étapes, ce module s’ouvre quand tu réussis le quiz du module {p} (au moins 15 questions, ≥ 60 % de bonnes réponses). Actuellement : {a} répondues, {pct} % de réussite.', 'To progress step by step, this module opens once you pass the module {p} quiz (at least 15 questions, ≥ 60% correct). Currently: {a} answered, {pct}% correct.'],
    'lock.quiz': ['Faire le quiz du module {p}', 'Take the module {p} quiz'], 'lock.enter': ['Entrer quand même', 'Enter anyway'], 'lock.opened': ['Module {m} ouvert.', 'Module {m} unlocked.'],
    'read.on': ['Lu — marquer comme non lu', 'Read — mark as unread'], 'read.off': ['J’ai terminé cette section', 'I’ve finished this section'],
    'mini.title': ['Mini-quiz', 'Mini-quiz'], 'mini.start': ['Commencer le mini-quiz ({n})', 'Start the mini-quiz ({n})'], 'mini.fiche': ['Mini-quiz de la fiche', 'Topic mini-quiz'],
    'range.to': ['{a} à {b}', '{a} to {b}'],
    'plan.t1': ['Module A1–A2 : anatomie et physiologie (simulations PIO, œdème)', 'Module A1–A2: anatomy and physiology (IOP and oedema simulations)'],
    'plan.t2': ['Module A3–A5 : examen, imagerie, rétine et cristallin + quiz A', 'Module A3–A5: exam, imaging, retina and lens + quiz A'],
    'plan.t3': ['Cornée : Fondations + fiches 1 à {n}', 'Cornea: Foundations + topics 1 to {n}'],
    'plan.t4': ['Cornée : fiches {a} à {b} + cas cliniques + quiz B', 'Cornea: topics {a} to {b} + clinical cases + quiz B'],
    'plan.t5': ['Glaucome : Fondations + fiches 1 à {n}', 'Glaucoma: Foundations + topics 1 to {n}'],
    'plan.t6': ['Glaucome : fiches {a} à {b}', 'Glaucoma: topics {a} to {b}'],
    'plan.t7': ['Glaucome : cas cliniques + quiz C', 'Glaucoma: clinical cases + quiz C'], 'plan.t8': ['Révision ciblée de mes erreurs (tous modules)', 'Targeted review of my mistakes (all modules)'],
    'plan.stageC': ['Journée d’observation en cornée', 'Cornea observership day'], 'plan.stageG': ['Journée d’observation en glaucome', 'Glaucoma observership day'],
    'plan.done': ['fait', 'done'], 'plan.todo': ['à faire', 'to do'], 'plan.asap': ['Dès que possible', 'As soon as possible'],
    /* home */
    'home.title': ['Accueil', 'Home'], 'home.eye': ['Œil stylisé', 'Stylized eye'],
    'home.resume': ['Reprendre : {t}', 'Resume: {t}'], 'home.start': ['Commencer : l’œil en coupe', 'Start: the eye in cross-section'],
    'home.next': ['Prochaine étape du plan', 'Next step in the plan'], 'home.open': ['Ouvrir : {t} →', 'Open: {t} →'],
    'home.plan': ['Plan', 'Plan'], 'home.plandone': ['Plan terminé : bravo. Révise tes erreurs.', 'Plan complete: well done. Review your mistakes.'],
    'home.modA.d': ['Anatomie, examen, imagerie, rétine et cristallin', 'Anatomy, exam, imaging, retina and lens'],
    'home.mod.d': ['{n} fiches · stage du {d}', '{n} topics · rotation on {d}'], 'home.tounlock': [' · à déverrouiller', ' · to unlock'],
    'home.eyebrow': ['Ocelle · ophtalmologie en images', 'Ocelle · ophthalmology you can see'], 'home.h1': ['Cornée et glaucome', 'Cornea and glaucoma'],
    'home.lead': ['Apprends à voir le signe qui compte. Voir <span aria-hidden="true">→</span> Comprendre <span aria-hidden="true">→</span> Décider, en images et en jeux.', 'Learn to see the sign that matters. See <span aria-hidden="true">→</span> Understand <span aria-hidden="true">→</span> Decide, through images and games.'],
    'home.today': ['Séance du jour · {n} cartes', 'Today’s session · {n} cards'],
    'home.level.h': ['Quel niveau souhaites-tu atteindre ?', 'What level are you aiming for?'],
    'home.level.d': ['Il règle la quantité de texte dans toutes les fiches. Tu peux en changer à tout moment, et chaque partie garde un bouton « Afficher les détails ».', 'It sets how much text every topic shows. You can change it at any time, and each part keeps a “Show details” button.'],
    'home.srs': ['Rappel espacé', 'Spaced recall'], 'home.srs.n': [['{n} carte à réviser', '{n} cartes à réviser'], ['{n} card to review', '{n} cards to review']],
    'home.srs.d': ['Questions du patron, images, drapeaux rouges →', 'Attending questions, images, red flags →'],
    'home.game': ['Jeu', 'Game'], 'home.game.d': ['Reconnais {n} images authentiques →', 'Recognize {n} real images →'],
    'home.mod.h': ['Choisis ton module', 'Choose your module'],
    /* module A / module view / capsule */
    'modA.eyebrow': ['Module A · fondations', 'Module A · foundations'],
    'modA.lead': ['Tout ce qu’il faut pour comprendre les modules cornée et glaucome : anatomie, physiologie, examen et lecture des images. Commence ici, dans l’ordre.', 'Everything you need for the cornea and glaucoma modules: anatomy, physiology, examination and image reading. Start here, in order.'],
    'modA.start': ['Commencer : A1 Anatomie', 'Start: A1 Anatomy'], 'mod.quiz': ['Quiz du module {m}', 'Module {m} quiz'], 'mod.adaptive': ['Module {m} · série adaptative', 'Module {m} · adaptive set'],
    'st.read': ['lu', 'read'], 'st.started': ['commencé', 'started'],
    'aside.reviewreport': ['Révision et signalement', 'Review and reporting'], 'a.showall': ['Tout afficher sur cette page', 'Show everything on this page'],
    'legend.urgent': ['menace la vision à court terme', 'threatens vision short-term'], 'legend.frequent': ['vu chaque semaine', 'seen every week'], 'legend.highyield': ['question classique', 'classic question'], 'legend.piege': ['piège fréquent', 'common pitfall'],
    'mod.eyebrow': ['Module {m} · observation {d} ({r})', 'Module {m} · observership {d} ({r})'],
    'mod.lead': ['Ordre conseillé : les Fondations d’abord, puis les fiches dans l’ordre (du plus simple au plus complexe). Chaque fiche se lit en {r} minutes à ton niveau de lecture (« {lvl} »).', 'Suggested order: Foundations first, then the topics in order (simple to complex). Each topic takes {r} minutes at your reading level (“{lvl}”).'],
    'mod.first': ['{m}0 · à lire en premier', '{m}0 · read first'], 'mod.caps.d': ['Familles de maladies, vocabulaire et outils thérapeutiques expliqués avant les fiches.', 'Disease families, vocabulary and treatment tools explained before the topics.'],
    'mod.fiches': ['Les fiches', 'Topics'], 'mod.bonus': ['À reconnaître aussi', 'Also recognize'], 'mod.clue': ['Indice : ', 'Clue: '], 'mod.action': ['Conduite : ', 'Action: '],
    'mod.realimg': ['Images authentiques ({n})', 'Real images ({n})'], 'mod.express': ['Révision express', 'Express review'], 'mod.cases': ['Cas cliniques', 'Clinical cases'],
    'caps.this': ['Cette capsule', 'This capsule'], 'caps.tools': ['Outils', 'Tools'], 'caps.tools.h': ['La boîte à outils thérapeutique', 'The treatment toolbox'],
    'caps.tools.d': ['Chaque outil est d’abord décrit concrètement, puis son mécanisme. Les fiches y renvoient.', 'Each tool is described concretely first, then its mechanism. Topics link back here.'],
    'caps.what': ['Ce que c’est', 'What it is'], 'caps.how': ['Comment ça agit', 'How it works'], 'caps.when': ['Quand', 'When'], 'caps.cx': ['Risques et limites', 'Risks and limits'],
    'caps.words': ['Mots', 'Words'], 'caps.vocab': ['Vocabulaire à maîtriser', 'Vocabulary to master'],
    'caps.eyebrow': ['{m}0 · Fondations · à lire avant les fiches', '{m}0 · Foundations · read before the topics'], 'caps.hy': ['L’essentiel des fondations', 'Foundations: key points'],
    'caps.see': ['Voir', 'See'], 'caps.realimg': ['Images authentiques', 'Real images'], 'caps.game': ['Jeu', 'Game'],
    /* fiche */
    'f.steps.aria': ['Étapes de la fiche', 'Topic steps'], 'f.see': ['Voir', 'See'], 'f.understand': ['Comprendre', 'Understand'], 'f.decide': ['Décider', 'Decide'], 'f.train': ['S’entraîner', 'Practice'],
    'f.min': ['≈ {n} min à ce niveau', '≈ {n} min at this level'], 'f.prereq': ['Prérequis :', 'Prerequisites:'], 'f.level': ['Niveau de lecture', 'Reading level'],
    'f.normal': ['Normal', 'Normal'], 'f.patho': ['Pathologique', 'Abnormal'], 'f.revealanom': ['Révéler les anomalies', 'Reveal the abnormalities'], 'f.hideanom': ['Masquer les anomalies', 'Hide the abnormalities'],
    'f.twosent': ['En deux phrases', 'In two sentences'],
    'f.observe': ['Observe d’abord l’image, puis touche « Révéler les trouvailles ». Les photos restent intactes : les anomalies sont décrites à côté.', 'Look at the image first, then tap “Reveal the findings”. Photos are left untouched: abnormalities are described alongside.'],
    'f.pairs': ['Normal vs pathologique (photos comparables)', 'Normal vs abnormal (comparable photos)'], 'f.anat': ['Anatomie et physiologie normales', 'Normal anatomy and physiology'],
    'f.more.see': ['Voir aussi l’anatomie et les comparaisons', 'Also show anatomy and comparisons'], 'f.hy': ['L’essentiel à retenir', 'Key points to remember'],
    'f.mech': ['Mécanisme : {t}', 'Mechanism: {t}'], 'f.play': ['Lecture animée', 'Animated walkthrough'], 'f.levers': ['Puis touche un traitement pour voir où il coupe la chaîne :', 'Then tap a treatment to see where it breaks the chain:'],
    'f.mnemo': ['Mnémotechnique · {t}', 'Mnemonic · {t}'], 'f.risk': ['Facteurs de risque', 'Risk factors'], 'f.pres': ['Présentation typique', 'Typical presentation'],
    'f.more.comp': ['Afficher le détail du mécanisme, les facteurs de risque et la présentation', 'Show mechanism details, risk factors and presentation'],
    'f.redflags': ['Drapeaux rouges', 'Red flags'], 'f.signs': ['Signes discriminants', 'Discriminating signs'], 'f.sign': ['Signe', 'Sign'], 'f.signwhy': ['Pourquoi il compte', 'Why it matters'],
    'f.tests': ['Investigations', 'Investigations'], 'f.test': ['Examen', 'Test'], 'f.when': ['Quand', 'When'], 'f.read': ['Interprétation', 'Interpretation'],
    'f.ddx': ['Diagnostic différentiel', 'Differential diagnosis'], 'f.dx': ['Diagnostic', 'Diagnosis'], 'f.clue': ['Ce qui le distingue', 'What sets it apart'],
    'f.algo': ['Algorithme', 'Algorithm'], 'f.walk': ['Parcourir pas à pas', 'Step through'], 'f.yes': ['Oui', 'Yes'], 'f.no': ['Non', 'No'],
    'f.tx': ['Traitements', 'Treatments'], 'f.tx.d': ['Touche un traitement : comment il agit et pourquoi.', 'Tap a treatment: how it works and why.'],
    'f.how': ['Comment', 'How'], 'f.why': ['Pourquoi', 'Why'], 'f.pros': ['Avantages', 'Advantages'], 'f.cons': ['Limites', 'Limits'], 'f.cx': ['Complications', 'Complications'],
    'f.phases': ['De l’observation à l’escalade', 'From observation to escalation'], 'f.local': ['Au Québec / au Canada', 'In Quebec / Canada'],
    'f.more.dec': ['Afficher l’examen, le différentiel et la prise en charge détaillée', 'Show exam, differential and detailed management'],
    'f.pearls': ['Les questions du patron', 'The attending’s questions'], 'f.asks': ['Le patron demande', 'The attending asks'], 'f.think': ['Réfléchis, puis touche pour la réponse', 'Think, then tap for the answer'],
    'f.sources': ['Sources, révision et signalement', 'Sources, review and reporting'], 'f.endmod': ['Fin du module {m} →', 'End of module {m} →'], 'f.cutat': ['agit ici : ', 'acts here: '],
    /* quiz hub */
    'qh.title': ['QCM', 'MCQs'], 'qh.okn': ['{a} / {b} réussies · {c} à revoir', '{a} / {b} correct · {c} to review'],
    'qh.set10': ['Série de 10', 'Set of 10'], 'qh.all': ['Tout le module', 'Whole module'], 'qh.topic': ['Sujet', 'Topic'], 'qh.errors': ['Erreurs', 'Mistakes'], 'qh.review': ['Réviser', 'Review'],
    'qh.noerr': ['Aucune erreur à revoir pour l’instant.', 'No mistakes to review yet.'], 'qh.eyebrow': ['Apprentissage actif · {n} questions', 'Active learning · {n} questions'], 'qh.h1': ['QCM et révision', 'MCQs and review'],
    'qh.lead': ['Rétroaction immédiate : pourquoi la bonne réponse est bonne et pourquoi chaque distracteur est faux. Les séries adaptatives commencent par tes erreurs, puis les questions jamais vues, du plus simple au plus difficile.', 'Immediate feedback: why the right answer is right and why each distractor is wrong. Adaptive sets start with your mistakes, then unseen questions, from easiest to hardest.'],
    'qh.special': ['Séries spéciales', 'Special sets'], 'qh.exam': ['Examen blanc mixte (20)', 'Mixed mock exam (20)'], 'qh.trap': ['Pièges du patron', 'Attending’s pitfalls'], 'qh.image': ['Interprétation d’images', 'Image interpretation'],
    'qh.allwrong': ['Toutes mes erreurs ({n})', 'All my mistakes ({n})'], 'qh.bytype': ['Filtrer par type :', 'Filter by type:'], 'qh.level': ['Niveau :', 'Level:'], 'qh.go': ['Lancer avec ces filtres', 'Start with these filters'],
    'qh.targeted': ['Révision ciblée : erreurs et réponses hésitantes', 'Targeted review: mistakes and hesitant answers'],
    'qs.all': ['Module {m} · toutes les questions', 'Module {m} · all questions'], 'qs.wrong': ['Module {m} · mes erreurs', 'Module {m} · my mistakes'], 'qs.exam': ['Examen blanc mixte', 'Mixed mock exam'],
    'qs.allwrong': ['Toutes mes erreurs', 'All my mistakes'], 'qs.topic': ['Révision : {t}', 'Review: {t}'], 'qs.filtered': ['Série filtrée', 'Filtered set'],
    'qr.title': ['Série de QCM', 'MCQ set'], 'qr.none': ['Aucune série en cours.', 'No set in progress.'], 'qr.choose': ['Choisir une série', 'Choose a set'],
    'qr.keys': ['Raccourcis : <span class="kbd">1</span>–<span class="kbd">5</span> pour répondre, <span class="kbd">Entrée</span> pour continuer.', 'Shortcuts: <span class="kbd">1</span>–<span class="kbd">5</span> to answer, <span class="kbd">Enter</span> to continue.'],
    /* cases hub */
    'cas.title': ['Cas cliniques', 'Clinical cases'], 'cas.done': ['Fait · {n} %', 'Done · {n}%'], 'cas.todo': ['À faire', 'To do'],
    'cas.eyebrow': ['Raisonnement clinique', 'Clinical reasoning'], 'cas.h1': ['Cas cliniques évolutifs', 'Evolving clinical cases'],
    'cas.lead': ['Tu choisis les examens, le diagnostic et le traitement ; le cas évolue selon la réalité clinique. Chaque décision est expliquée.', 'You choose the tests, the diagnosis and the treatment; the case evolves as it would clinically. Every decision is explained.'],
    'cas.the': ['Les cas', 'Cases'], 'cas.eyebrow1': ['Cas · Module {m}', 'Case · Module {m}']
  };
  Object.keys(P).forEach(function (k) { I18N.dict.fr[k] = P[k][0]; I18N.dict.en[k] = P[k][1]; });
})();

/* ---------- Investigations UI strings (copied from window.Inv.keys, src/investigations.js; 179 keys) ---------- */
(function () {
  var P = {
    "inv.allinv": ["Toutes les investigations", "All investigations"],
    "inv.as.c1": ["Caliper 1 (avant)", "Caliper 1 (front)"],
    "inv.as.c2": ["Caliper 2 (arrière)", "Caliper 2 (back)"],
    "inv.as.cap2": ["A-scan en immersion, œil phaque — vitesse moyenne ≈ 1 550 m/s", "Immersion A-scan, phakic eye — average velocity ≈ 1550 m/s"],
    "inv.as.check": ["Vérifier ma mesure", "Check my measurement"],
    "inv.as.err": ["1 mm d’erreur sur la longueur axiale ≈ 2,5–3 D d’erreur réfractive après chirurgie.", "1 mm axial length error ≈ 2.5–3 D postoperative refractive error."],
    "inv.as.eyel": ["Type d’œil", "Eye type"],
    "inv.as.h1": ["Le caliper avant se place sur le premier pic (cornée).", "The front caliper goes on the first spike (cornea)."],
    "inv.as.help": ["Glisse les calipers sur le tracé (ou utilise les curseurs) : de la cornée jusqu’au pic rétinien.", "Drag the calipers on the trace (or use the sliders): from the cornea to the retinal spike."],
    "inv.as.hlens": ["C’est un écho du cristallin : continue jusqu’au grand pic après le vitré silencieux.", "That is a lens echo: go on to the tall spike after the silent vitreous."],
    "inv.as.hret": ["Place le caliper arrière sur le pic rétinien (grand pic net après le vitré).", "Put the back caliper on the retinal spike (tall sharp spike after the vitreous)."],
    "inv.as.hscl": ["Tu es sur le pic scléral : la mesure s’arrête au pic rétinien, juste devant.", "You are on the scleral spike: measure to the retinal spike, just in front."],
    "inv.as.labels": ["Nommer les pics", "Label spikes"],
    "inv.as.long": ["Œil long", "Long eye"],
    "inv.as.measure": ["Mesurer", "Measure"],
    "inv.as.normal": ["Œil normal", "Normal eye"],
    "inv.as.normalv": ["Normal adulte ≈ 23–24 mm.", "Normal adult ≈ 23–24 mm."],
    "inv.as.notyet": ["Pas encore", "Not yet"],
    "inv.as.ok": ["Mesure correcte", "Correct measurement"],
    "inv.as.qnext": ["Autre pic", "Another spike"],
    "inv.as.quiz": ["Quel pic ?", "Which spike?"],
    "inv.as.qwhich": ["Quel est le pic marqué d’une flèche ?", "Which spike is marked by the arrow?"],
    "inv.as.short": ["Œil court", "Short eye"],
    "inv.ascan.aria": ["Schéma de tracé A-scan", "A-scan trace schematic"],
    "inv.back": ["Retour aux investigations", "Back to investigations"],
    "inv.bs.axial": ["Axiale", "Axial"],
    "inv.bs.cap": ["Échographie B : sonde à gauche, paroi postérieure à droite", "B-scan: probe on the left, posterior wall on the right"],
    "inv.bs.gain": ["Gain", "Gain"],
    "inv.bs.high": ["élevé", "high"],
    "inv.bs.long": ["Longitudinale", "Longitudinal"],
    "inv.bs.low": ["faible", "low"],
    "inv.bs.marker": ["repère", "marker"],
    "inv.bs.marks": ["Signe clé", "Key sign"],
    "inv.bs.mid": ["moyen", "medium"],
    "inv.bs.move": ["Faire bouger l’œil (cinétique)", "Move the eye (kinetic)"],
    "inv.bs.o.axial": ["axiale", "axial"],
    "inv.bs.o.long": ["longitudinale", "longitudinal"],
    "inv.bs.o.trans": ["transverse", "transverse"],
    "inv.bs.oril": ["Orientation de la sonde", "Probe orientation"],
    "inv.bs.pathl": ["Image", "Image"],
    "inv.bs.trans": ["Transverse", "Transverse"],
    "inv.bscan.aria": ["Schéma d’échographie B", "B-scan schematic"],
    "inv.fixture": ["Contenu de démonstration (le contenu pédagogique complet arrive bientôt).", "Demo content (full teaching content coming soon)."],
    "inv.fo.aria": ["Schéma de fond d’œil droit", "Right fundus schematic"],
    "inv.fo.cap": ["Fond d’œil droit : papille à droite (nasal), macula à gauche (temporal)", "Right fundus: disc on the right (nasal), macula on the left (temporal)"],
    "inv.fo.ehelp": ["Touche une zone du schéma, ou choisis :", "Tap an area of the schematic, or pick:"],
    "inv.fo.explore": ["Explorer", "Explore"],
    "inv.fo.find": ["Trouve-le", "Find it"],
    "inv.fo.od": ["œil droit (OD)", "right eye (OD)"],
    "inv.fo.ovl": ["Superposer une anomalie :", "Overlay an abnormality:"],
    "inv.fo.was": ["C’était ici (surligné)", "It was here (highlighted)"],
    "inv.fo.zone": ["Zone", "Zone"],
    "inv.go.cap": ["Vue de l’angle au verre de gonioscopie : cornée en haut, iris en bas", "Angle seen through a gonioscopy lens: cornea at top, iris at bottom"],
    "inv.go.case": ["Cas", "Case"],
    "inv.go.ehelp": ["Touche une bande ou choisis une structure :", "Tap a band or pick a structure:"],
    "inv.go.explore": ["Explorer", "Explore"],
    "inv.go.grade": ["Ouverture (Shaffer)", "Opening (Shaffer)"],
    "inv.go.next": ["Continuer", "Continue"],
    "inv.go.qgrade": ["2. Grade de Shaffer ?", "2. Shaffer grade?"],
    "inv.go.qpost": ["1. Structure la plus postérieure visible ?", "1. Most posterior visible structure?"],
    "inv.go.quiz": ["Défi : grader", "Challenge: grade"],
    "inv.go.qvar": ["Quelle anomalie vois-tu ?", "What abnormality do you see?"],
    "inv.go.varl": ["Variante", "Variant"],
    "inv.gonio.aria": ["Schéma de vue gonioscopique de l’angle", "Gonioscopic angle view schematic"],
    "inv.home": ["Accueil", "Home"],
    "inv.how": ["Comment faire et lire", "How to do and read it"],
    "inv.hub": ["Investigations", "Investigations"],
    "inv.hub.eye": ["Investigations · observe, réponds, révèle", "Investigations · observe, answer, reveal"],
    "inv.hub.h1": ["Lire les examens en ophtalmologie", "Reading eye investigations"],
    "inv.hub.imgs": ["images", "images"],
    "inv.hub.lead": ["Pour chaque examen : à quoi il sert, comment le lire, un outil à manipuler, puis des images où tu trouves toi-même le signe décisif.", "For each test: what it is for, how to read it, a hands-on tool, then images where you find the decisive sign yourself."],
    "inv.ic.all": ["Tous les cas en images", "All image cases"],
    "inv.ic.alllv": ["Tous niveaux", "All levels"],
    "inv.ic.backlist": ["Retour à la liste", "Back to the list"],
    "inv.ic.bad": ["À revoir", "Review"],
    "inv.ic.cardd": ["Photos cliniques : cornée, glaucome et ophtalmologie générale. Séries de 10, filtres par thème et niveau.", "Clinical photos: cornea, glaucoma and general ophthalmology. Series of 10, filters by topic and level."],
    "inv.ic.case": ["Cas", "Case"],
    "inv.ic.cases": ["cas", "cases"],
    "inv.ic.eye": ["Cas en images · observe, réponds, révèle", "Image cases · observe, answer, reveal"],
    "inv.ic.eye2": ["Nouveau · cas cliniques", "New · clinical cases"],
    "inv.ic.h1": ["Cas en images", "Image cases"],
    "inv.ic.l1": ["Niveau 1", "Level 1"],
    "inv.ic.l2": ["Niveau 2", "Level 2"],
    "inv.ic.l3": ["Niveau 3", "Level 3"],
    "inv.ic.lead": ["Une photo clinique, une courte mise en situation, une décision. La légende reste cachée jusqu’à ta réponse; le signe décisif est ensuite entouré.", "One clinical photo, a short scenario, one decision. The caption stays hidden until you answer; the decisive sign is then circled."],
    "inv.ic.missing": ["Ce cas n’existe pas.", "This case does not exist."],
    "inv.ic.new": ["Nouveau", "New"],
    "inv.ic.next": ["Cas suivant", "Next case"],
    "inv.ic.nomatch": ["Aucun cas pour ces filtres.", "No case for these filters."],
    "inv.ic.none": ["Les cas en images arrivent bientôt.", "Image cases are coming soon."],
    "inv.ic.ok": ["Réussi", "Done"],
    "inv.ic.okn": ["réussis", "done"],
    "inv.ic.open": ["Ouvrir", "Open"],
    "inv.ic.progress": ["Ta progression", "Your progress"],
    "inv.ic.seen": ["cas tentés · réussis = justes avec assurance", "cases tried · done = correct with confidence"],
    "inv.ic.series": ["Série de 10", "Series of 10"],
    "inv.ic.serieshint": ["Les cas ratés et hésitants passent en premier.", "Missed and unsure cases come first."],
    "inv.ic.shaky": ["À consolider", "Consolidate"],
    "inv.ic.title": ["Cas en images", "Image cases"],
    "inv.ic.topic": ["Thème", "Topic"],
    "inv.k.practice": ["Pratique", "Practice"],
    "inv.k.tool": ["Outil", "Tool"],
    "inv.keys": ["Signes clés", "Key signs"],
    "inv.media.caphidden": ["Légende masquée jusqu’à ta réponse", "Caption hidden until you answer"],
    "inv.media.hidden": ["Image d’examen (légende masquée)", "Investigation image (caption hidden)"],
    "inv.media.orig": ["Schéma pédagogique original — pas une image de patient", "Original teaching schematic — not a patient image"],
    "inv.media.soon": ["Image à venir", "Image coming soon"],
    "inv.media.src": ["page source", "source page"],
    "inv.media.zoom": ["Agrandir", "Enlarge"],
    "inv.missing": ["Cet examen n’existe pas.", "This test does not exist."],
    "inv.mode": ["Mode", "Mode"],
    "inv.nav": ["Autres examens", "Other tests"],
    "inv.normal": ["Repères normaux", "Normal landmarks"],
    "inv.oct.aria": ["Schéma de coupe OCT maculaire", "Macular OCT B-scan schematic"],
    "inv.oct.cap": ["Coupe OCT horizontale passant par la fovéa (œil droit), niveaux de gris", "Horizontal OCT B-scan through the fovea (right eye), greyscale"],
    "inv.oct.ehelp": ["Touche une couche sur le schéma, ou choisis-la ici :", "Tap a layer on the schematic, or pick it here:"],
    "inv.oct.endl": ["Terminer", "Finish"],
    "inv.oct.explore": ["Explorer", "Explore"],
    "inv.oct.fluid": ["Trouver le liquide", "Find the fluid"],
    "inv.oct.fnext": ["Autre coupe", "Another scan"],
    "inv.oct.fq": ["Où est le liquide ?", "Where is the fluid?"],
    "inv.oct.higher": ["La couche cherchée est plus haut (plus interne), surlignée en jaune.", "The target layer is higher (more inner), highlighted in yellow."],
    "inv.oct.label": ["Étiqueter", "Label"],
    "inv.oct.layern": ["Couche", "Layer"],
    "inv.oct.lower": ["La couche cherchée est plus bas (plus externe), surlignée en jaune.", "The target layer is lower (more outer), highlighted in yellow."],
    "inv.oct.nasal": ["nasal (papille)", "nasal (disc)"],
    "inv.oct.nextl": ["Couche suivante", "Next layer"],
    "inv.oct.tap": ["Touche :", "Tap:"],
    "inv.oct.temporal": ["temporal", "temporal"],
    "inv.oct.thisis": ["Tu as touché :", "You tapped:"],
    "inv.ok": ["Exact", "Correct"],
    "inv.page.eye": ["Investigation", "Investigation"],
    "inv.ph.ans": ["Réponds", "Answer"],
    "inv.ph.aria": ["Étapes", "Steps"],
    "inv.ph.obs": ["Observe", "Observe"],
    "inv.ph.rev": ["Révèle", "Reveal"],
    "inv.pitfalls": ["Pièges", "Pitfalls"],
    "inv.pr.again": ["Recommencer", "Start again"],
    "inv.pr.bad": ["Pas tout à fait", "Not quite"],
    "inv.pr.conf": ["Ton niveau de confiance", "Your confidence"],
    "inv.pr.confl": ["Je réponds :", "I answer:"],
    "inv.pr.decisive": ["Signe décisif :", "Decisive sign:"],
    "inv.pr.done": ["terminé", "done"],
    "inv.pr.idk": ["Je ne sais pas", "I don’t know"],
    "inv.pr.idkfb": ["Bonne décision de ne pas deviner : voici la réponse", "Good call not to guess: here is the answer"],
    "inv.pr.level": ["Niveau", "Level"],
    "inv.pr.next": ["Image suivante", "Next image"],
    "inv.pr.none": ["Les images de pratique de cet examen arrivent bientôt.", "Practice images for this test are coming soon."],
    "inv.pr.observe": ["Prends 10 secondes : nomme ce que tu vois avant de regarder les choix.", "Take 10 seconds: name what you see before looking at the choices."],
    "inv.pr.ok": ["Exact", "Correct"],
    "inv.pr.okunsure": ["Exact, mais tu hésitais : à consolider", "Correct, but you were unsure: consolidate"],
    "inv.pr.opts": ["Choix de réponse", "Answer choices"],
    "inv.pr.ready": ["Je suis prêt à répondre", "Ready to answer"],
    "inv.pr.result": ["Voir mon résultat", "See my result"],
    "inv.pr.retry": ["Refaire les ratés et hésitations", "Redo misses and unsure"],
    "inv.pr.right": ["Bonne réponse.", "Correct answer."],
    "inv.pr.sure": ["avec assurance", "confidently"],
    "inv.pr.surecount": ["justes avec assurance. Les hésitations comptent comme à revoir.", "correct with confidence. Unsure answers count as to review."],
    "inv.pr.title": ["Pratique", "Practice"],
    "inv.pr.unsure": ["en hésitant", "unsure"],
    "inv.pr.whynot": ["Pourquoi pas :", "Why not:"],
    "inv.practice.h": ["Observe, réponds, révèle", "Observe, answer, reveal"],
    "inv.practice.lead": ["Raccourcis : 1–9 pour répondre, 0 pour « Je ne sais pas ».", "Shortcuts: 1–9 to answer, 0 for “I don’t know”."],
    "inv.schema": ["schéma", "schematic"],
    "inv.tool": ["Outil interactif", "Interactive tool"],
    "inv.toolerr": ["Cet outil n’a pas pu démarrer.", "This tool could not start."],
    "inv.vf.aria": ["Schéma de champ visuel 24-2 (carte des déviations)", "24-2 visual field schematic (deviation map)"],
    "inv.vf.cap": ["Impression type Humphrey simplifiée (valeurs illustratives)", "Simplified Humphrey-style printout (illustrative values)"],
    "inv.vf.intro": ["Lis comme un examinateur : 1) fiabilité, 2) indices, 3) forme du défaut et méridien respecté. Touche un indice pour sa définition.", "Read like an examiner: 1) reliability, 2) indices, 3) defect shape and which meridian is respected. Tap an index for its definition."],
    "inv.vf.legend": ["■ plus foncé = plus déprimé · · = normal", "■ darker = more depressed · · = normal"],
    "inv.vf.next": ["Champ suivant", "Next field"],
    "inv.vf.note": ["Note : le GHT compare haut et bas; il n’aide pas pour un défaut qui respecte le méridien vertical.", "Note: the GHT compares upper and lower halves; it does not help for a defect respecting the vertical meridian."],
    "inv.vf.pd": ["déviation (schéma)", "deviation (schematic)"],
    "inv.vf.q1": ["1. L’examen est-il fiable ?", "1. Is the test reliable?"],
    "inv.vf.q2": ["2. Quel défaut ?", "2. Which defect?"],
    "inv.vf.rel": ["Fiable", "Reliable"],
    "inv.vf.sch": ["schéma", "schematic"],
    "inv.vf.unrel": ["Non fiable", "Unreliable"],
    "inv.why": ["À quoi ça sert", "What it is for"]
  };
  Object.keys(P).forEach(function (k) { if (I18N.dict.fr[k] == null) I18N.dict.fr[k] = P[k][0]; if (I18N.dict.en[k] == null) I18N.dict.en[k] = P[k][1]; });
})();

/* ---------- apply at load (after core.js and the data files, before the other modules) ---------- */
(function () {
  try { document.documentElement.lang = I18N.lang; } catch (e) { }
  if (typeof L !== 'undefined') {
    ['urgent', 'frequent', 'highyield', 'piege'].forEach(function (k) { L.tags[k] = t('tag.' + k); });
    Object.keys(L.kinds).forEach(function (k) { L.kinds[k] = t('kind.' + k); });
    Object.keys(L.phases).forEach(function (k) { L.phases[k] = t('phase.' + k); });
    Object.keys(L.qtypes).forEach(function (k) { L.qtypes[k] = t('qtype.' + k); });
    ['A', 'B', 'C'].forEach(function (m) { L.modules[m] = t('mod.' + m); });
  }
  if (I18N.lang === 'en' && typeof A_SECTIONS !== 'undefined') A_SECTIONS.forEach(function (s) { s.fr = s.title; s.title = s.en || s.title; s.blurb = t('asec.' + s.id); });
  try { I18N.applyContent(); } catch (e) { if (window.console) console.warn('i18n overlay', e); }
  // bilingual catalogue fields (imgsrc3: {fr, en}) → current language
  ((window.OPH && OPH.catalog) || []).forEach(function (e) { ['title', 'caption'].forEach(function (k) { if (e[k] && typeof e[k] === 'object') e[k] = I18N.pick(e[k]); }); });
})();
if (typeof Actions !== 'undefined') Actions.lang = function (el) { var v = el.getAttribute('data-v'); if (v !== I18N.lang) I18N.set(v); };
