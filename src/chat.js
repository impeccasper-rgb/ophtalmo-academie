/* ===== « Demande à Ocelle » / "Ask Ocelle": sourced Q&A assistant (OFF while CHAT_ENDPOINT is empty) =====
   While CHAT_ENDPOINT is empty, tools/build_web.py does not ship this file, its CSS or its search index: the site is
   byte-for-byte the same as without the feature. Server: server/chat-worker.js (deploy steps in server/README.md). */
'use strict';

/* ------------------------------------------------------------------
   RÉGLAGE UNIQUE — URL du Worker de clavardage (voir server/README.md)
   Vide = fonction absente du site (aucun bouton, aucun fichier, aucune requête).
   Exemple : 'https://ocelle-chat.<compte>.workers.dev/'
   ------------------------------------------------------------------ */
var CHAT_ENDPOINT = '';
/* Fournisseur d'IA configuré dans le Worker (LLM_PROVIDER) : 'workers-ai' | 'gemini' | 'anthropic'. Nommé dans la page Confidentialité. */
var CHAT_PROVIDER = 'workers-ai';
/* Le Worker interroge-t-il PubMed (PUBMED ≠ 'off') ? Nommé dans la page Confidentialité. */
var CHAT_PUBMED = true;
/* Proposer l'assistant dans l'app iOS (coquille Capacitor) ? Non par défaut (le Worker doit alors autoriser capacitor://localhost). */
var CHAT_IN_NATIVE_APP = false;
var CHAT_DAILY_LIMIT = 15; // questions par appareil et par jour (compteur local)

var Chat = (function () {
  var B = window.CHAT_BUILD || {}; // written by tools/build_web.py: { endpoint, index: { fr, en } }
  var KEY = 'oph-chat-v1', QKEY = 'oph-chat-quota', MAX_HIST = 12, TOPK = 5;
  var lang = function () { return window.I18N && I18N.lang === 'en' ? 'en' : 'fr'; };
  function endpoint() { return String(B.endpoint || CHAT_ENDPOINT || '').trim(); }
  function native() { try { return !!(window.Capacitor && window.Capacitor.isNativePlatform && window.Capacitor.isNativePlatform()); } catch (e) { return false; } }
  function enabled() { return !!endpoint() && (!native() || CHAT_IN_NATIVE_APP); }

  /* ---------- strings ---------- */
  var TX = {
    'chat.title': ['Demande à Ocelle', 'Ask Ocelle'],
    'chat.sub': ['Réponses sourcées · outil éducatif', 'Sourced answers · educational tool'],
    'chat.open': ['Ouvrir Demande à Ocelle', 'Open Ask Ocelle'],
    'chat.close': ['Fermer', 'Close'],
    'chat.label': ['Ta question', 'Your question'],
    'chat.ph': ['Pose une question d’ophtalmologie…', 'Ask an ophthalmology question…'],
    'chat.send': ['Envoyer la question', 'Send question'],
    'chat.intro': ['Je réponds à partir des pages d’Ocelle et d’articles de synthèse PubMed, toujours avec mes sources. Pour apprendre, pas pour décider du cas d’un patient.',
      'I answer from Ocelle’s pages and PubMed review articles, always with my sources. For learning, not for deciding a patient’s care.'],
    'chat.try': ['Essaie :', 'Try:'],
    'chat.s1': ['Que faire devant une crise aiguë de fermeture de l’angle ?', 'What do I do for acute angle-closure crisis?'],
    'chat.s2': ['Comment reconnaître une kératite herpétique ?', 'How do I recognize herpetic keratitis?'],
    'chat.s3': ['Quels signes d’alarme dans un décollement postérieur du vitré ?', 'Which warning signs in a posterior vitreous detachment?'],
    'chat.nopii': ['N’entre aucun renseignement personnel ni sur un patient.', 'Do not enter any personal or patient information.'],
    'chat.left': [['{n} question restante aujourd’hui', '{n} questions restantes aujourd’hui'], ['{n} question left today', '{n} questions left today']],
    'chat.limit': ['Tu as posé tes {n} questions du jour sur cet appareil. Reviens demain.', 'You have asked your {n} questions for today on this device. Come back tomorrow.'],
    'chat.thinking': ['Ocelle vérifie ses sources…', 'Ocelle is checking its sources…'],
    'chat.err': ['Pas de réponse pour l’instant. Réessaie dans un moment.', 'No answer right now. Try again in a moment.'],
    'chat.err.rate': ['Beaucoup de questions en peu de temps. Réessaie dans une minute.', 'Many questions in a short time. Try again in a minute.'],
    'chat.offline': ['Hors ligne : l’assistant a besoin d’Internet.', 'Offline: the assistant needs the Internet.'],
    'chat.you': ['Toi', 'You'],
    'chat.bot': ['Ocelle', 'Ocelle'],
    'chat.sources': ['Sources', 'Sources'],
    'chat.src.ocelle': ['Ocelle', 'Ocelle'],
    'chat.more': ['Pour aller plus loin', 'Further reading'],
    'chat.oe': ['OpenEvidence (cliniciens)', 'OpenEvidence (clinicians)'],
    'chat.clear': ['Effacer l’historique', 'Clear history'],
    'chat.cleared': ['Historique effacé sur cet appareil.', 'History cleared on this device.'],
    'chat.cite': ['Source {n}', 'Source {n}'],
    'chat.newtab': ['(nouvel onglet)', '(new tab)'],
    'chat.disclaimer': ['Outil éducatif : ne remplace pas l’avis d’un clinicien.', 'Educational tool: not a substitute for a clinician’s advice.']
  };
  (function () { if (!window.I18N) return; Object.keys(TX).forEach(function (k) { I18N.dict.fr[k] = TX[k][0]; I18N.dict.en[k] = TX[k][1]; }); })();
  var T = function (k, v) { return window.t ? t(k, v) : TX[k][0]; };

  /* recommended references (no partnership with any of them) */
  var REFS = [
    { t: 'Basic Ophthalmology (AAO)', u: 'https://www.aao.org/basic-ophthalmology-resources' },
    { t: 'The Wills Eye Manual', u: 'https://shop.lww.com/p/9781975160753' },
    { t: 'Kanski’s Clinical Ophthalmology', u: 'https://shop.elsevier.com/books/kanskis-clinical-ophthalmology/salmon/978-0-443-11099-3' }
  ];
  var OE = 'https://www.openevidence.com';

  /* ---------- local state (this device only) ---------- */
  function readJ(k) { try { return JSON.parse(localStorage.getItem(k) || 'null'); } catch (e) { return null; } }
  function writeJ(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) { } }
  var st = readJ(KEY) || {}; st.msgs = Array.isArray(st.msgs) ? st.msgs.slice(-MAX_HIST) : [];
  function save() { st.msgs = st.msgs.slice(-MAX_HIST); writeJ(KEY, { open: !!st.open, msgs: st.msgs }); }
  function today() { var d = new Date(); return d.getFullYear() + '-' + ('0' + (d.getMonth() + 1)).slice(-2) + '-' + ('0' + d.getDate()).slice(-2); }
  function used() { var q = readJ(QKEY); return q && q.d === today() ? +q.n || 0 : 0; }
  function left() { return Math.max(0, CHAT_DAILY_LIMIT - used()); }
  function spend() { writeJ(QKEY, { d: today(), n: used() + 1 }); }

  /* ---------- retrieval: BM25 over Ocelle's own passages (chat-index-<lang>.json, fetched on first open) ---------- */
  var STOP = {};
  ('a au aux avec ce ces cet cette d de des du elle en est et il ils je la le les leur lui ma mais me mes mon ne ni nos notre on ou par pas pour qu que quel quelle quelles quels qui sa se ses son sur ta te tes toi ton tu un une vos votre y ' +
    'faire fait quoi comment quand pourquoi quoi devant chez dois doit faut peut sont etre avoir plus moins tres bien entre sans sous dans comme si alors donc ' +
    'the of and or to in on for with what how when why which who is are be do does should can a an my your at by from as it this that these those vs about into than then there their').split(' ').forEach(function (w) { STOP[w] = 1; });
  function norm(s) { return String(s || '').toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, ''); }
  function toks(s) {
    var out = [];
    norm(s).split(/[^a-z0-9]+/).forEach(function (w) {
      if (w.length < 2 || STOP[w]) return;
      if (w.length > 4) w = w.replace(/(es|s|x)$/, '');
      out.push(w);
    });
    return out;
  }
  var IDX = null, idxP = null;
  function loadIndex() {
    if (IDX) return Promise.resolve(IDX);
    if (idxP) return idxP;
    var url = (B.index && B.index[lang()]) || ('chat-index-' + lang() + '.json');
    idxP = fetch(url).then(function (r) { if (!r.ok) throw new Error('index ' + r.status); return r.json(); }).then(function (j) {
      var docs = (j.p || []).map(function (p) {
        var tf = {}, n = 0; toks(p.t + ' ' + p.t + ' ' + p.x).forEach(function (w) { tf[w] = (tf[w] || 0) + 1; n++; });
        return { p: p, tf: tf, n: n };
      });
      var df = {}, sum = 0; docs.forEach(function (d) { sum += d.n; Object.keys(d.tf).forEach(function (w) { df[w] = (df[w] || 0) + 1; }); });
      IDX = { docs: docs, df: df, avg: sum / Math.max(1, docs.length), N: docs.length };
      return IDX;
    });
    idxP.catch(function () { idxP = null; });
    return idxP;
  }
  function search(q, k) {
    if (!IDX) return [];
    var qt = toks(q), seen = {}; qt = qt.filter(function (w) { if (seen[w]) return false; seen[w] = 1; return true; });
    if (!qt.length) return [];
    var cur = String((window.Router && (Router.base || Router.cur)) || '').split('/')[0], K1 = 1.2, Bb = 0.75, nq = norm(q);
    // intent → fiche screen: "what to do / treat / refer" → Décider; "why / mechanism" → Comprendre; "recognize / signs" → Voir
    var want = /\b(faire|trait|prise en charge|referer|refere|urgence|conduite|gerer|manage|treat|do i|refer|first.line|dose)/.test(nq) ? '/decider' :
      /\b(pourquoi|mecanisme|physiopath|cause|why|mechanism|pathophys)/.test(nq) ? '/comprendre' : /\b(reconna|signe|aspect|voir|recogni|sign|look)/.test(nq) ? '/voir' : '';
    var scored = IDX.docs.map(function (d) {
      var s = 0;
      qt.forEach(function (w) {
        var f = d.tf[w]; if (!f) return;
        var idf = Math.log(1 + (IDX.N - IDX.df[w] + 0.5) / (IDX.df[w] + 0.5));
        s += idf * (f * (K1 + 1)) / (f + K1 * (1 - Bb + Bb * d.n / IDX.avg));
      });
      if (s && cur && d.p.r.split('/')[0] === cur) s *= 1.15; // the page the learner is on
      if (s && want && d.p.r.slice(-want.length) === want) s *= 1.3;
      return [s, d.p];
    }).filter(function (x) { return x[0] > 0; }).sort(function (a, b) { return b[0] - a[0]; });
    var out = [], per = {};
    for (var i = 0; i < scored.length && out.length < k; i++) {
      var r = scored[i][1].r; if ((per[r] || 0) >= 2) continue; // at most 2 passages per page
      per[r] = (per[r] || 0) + 1; out.push(scored[i][1]);
    }
    return out;
  }

  /* ---------- rendering ---------- */
  var E = function (s) { return U.esc(s); };
  var ICON = '<svg viewBox="0 0 24 24" width="24" height="24" aria-hidden="true" focusable="false"><path d="M4.5 5.5h15a1.5 1.5 0 0 1 1.5 1.5v8.5a1.5 1.5 0 0 1-1.5 1.5H11l-4.5 3.5V17h-2A1.5 1.5 0 0 1 3 15.5V7a1.5 1.5 0 0 1 1.5-1.5z" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/><circle cx="12" cy="11.2" r="3.1" fill="none" stroke="var(--fluo)" stroke-width="1.8"/><circle cx="12" cy="11.2" r="1.1" fill="var(--fluo)"/></svg>';
  var X = '<svg viewBox="0 0 20 20" width="20" height="20" aria-hidden="true" focusable="false"><path d="M5 5l10 10M15 5 5 15" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>';
  var SEND = '<svg viewBox="0 0 20 20" width="20" height="20" aria-hidden="true" focusable="false"><path d="M3.5 10h12M11 5.2 15.8 10 11 14.8" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/></svg>';
  function safeSrc(s) {
    if (!s || typeof s !== 'object') return null;
    var n = +s.n; if (!(n >= 1 && n <= 20)) return null;
    var title = String(s.title || '').slice(0, 200);
    if (s.kind === 'ocelle' && /^[a-z0-9][a-z0-9\-\/]{0,80}$/.test(String(s.route || ''))) return { n: n, kind: 'ocelle', title: title, href: '#' + s.route };
    if (s.kind === 'pubmed' && /^https:\/\/pubmed\.ncbi\.nlm\.nih\.gov\/\d+\/?$/.test(String(s.url || ''))) return { n: n, kind: 'pubmed', title: title, href: s.url, meta: [s.journal, s.year].filter(Boolean).join(', ').slice(0, 80) };
    return null;
  }
  function answerHtml(m) {
    var srcs = (m.s || []).map(safeSrc).filter(Boolean), by = {}; srcs.forEach(function (s) { by[s.n] = s; });
    var text = String(m.a || ''), lines = text.split(/\n+/).map(function (l) { return l.trim(); }).filter(Boolean), disc = '';
    var D = [TX['chat.disclaimer'][0], TX['chat.disclaimer'][1]];
    if (lines.length && (/^(outil éducatif|educational tool)/i.test(lines[lines.length - 1]) || D.indexOf(lines[lines.length - 1]) >= 0)) disc = lines.pop();
    var cited = {};
    var body = lines.map(function (l) {
      var h = E(l).replace(/\*\*([^*]+)\*\*/g, '<b>$1</b>');
      h = h.replace(/\[(\d{1,2}(?:\s*[,–-]\s*\d{1,2})*)\]/g, function (all, grp) {
        var ns = grp.split(/\s*,\s*/).reduce(function (a, p) { var r = p.split(/\s*[–-]\s*/).map(Number); if (r.length === 2 && r[1] >= r[0] && r[1] - r[0] < 6) { for (var i = r[0]; i <= r[1]; i++) a.push(i); } else a.push(+r[0]); return a; }, []);
        var out = ns.map(function (n) { var s = by[n]; if (!s) return ''; cited[n] = 1; return '<a class="chat-cite" href="' + E(s.href) + '"' + (s.kind === 'pubmed' ? ' target="_blank" rel="noopener"' : '') + ' aria-label="' + E(T('chat.cite', { n: n }) + ' : ' + s.title) + '">' + n + '</a>'; }).join('');
        return out || '';
      });
      return /^[-•]\s/.test(l) ? '<li>' + h.replace(/^[-•]\s/, '') + '</li>' : '<p>' + h + '</p>';
    }).join('').replace(/(<li>.*?<\/li>)+/g, function (x) { return '<ul>' + x + '</ul>'; });
    var list = srcs.filter(function (s) { return cited[s.n]; }).sort(function (a, b) { return a.n - b.n; });
    var srcHtml = list.length ? '<div class="chat-srcs"><span class="chat-eyebrow">' + T('chat.sources') + '</span><ol>' + list.map(function (s) {
      return '<li><span class="chat-n" aria-hidden="true">' + s.n + '</span><a href="' + E(s.href) + '"' + (s.kind === 'pubmed' ? ' target="_blank" rel="noopener"' : '') + '>' + E(s.title) + '</a>' +
        ' <span class="chat-k">' + (s.kind === 'pubmed' ? 'PubMed' + (s.meta ? ' · ' + E(s.meta) : '') + ' <span class="sr-only">' + T('chat.newtab') + '</span>' : T('chat.src.ocelle')) + '</span></li>';
    }).join('') + '</ol></div>' : '';
    var more = '<p class="chat-more"><span class="chat-eyebrow">' + T('chat.more') + '</span> ' + REFS.map(function (r) { return '<a href="' + r.u + '" target="_blank" rel="noopener"><i>' + E(r.t) + '</i></a>'; }).join(' · ') +
      '<br><a href="' + OE + '" target="_blank" rel="noopener">' + T('chat.oe') + '</a></p>';
    return '<div class="chat-msg bot"><span class="sr-only">' + T('chat.bot') + ' :</span><div class="chat-a">' + body + '</div>' + srcHtml + more + (disc ? '<p class="chat-disc">' + E(disc) + '</p>' : '') + '</div>';
  }
  function msgHtml(m) {
    if (m.role === 'q') return '<div class="chat-msg you"><span class="sr-only">' + T('chat.you') + ' :</span><p>' + E(m.q) + '</p></div>';
    if (m.role === 'err') return '<div class="chat-msg bot err"><p>' + E(m.a) + '</p></div>';
    return answerHtml(m);
  }
  function introHtml() {
    return '<div class="chat-intro"><p>' + T('chat.intro') + '</p><p class="chat-eyebrow">' + T('chat.try') + '</p><div class="chat-sugg">' +
      ['chat.s1', 'chat.s2', 'chat.s3'].map(function (k) { return '<button type="button" data-chat="ask" data-q="' + E(T(k)) + '">' + E(T(k)) + '</button>'; }).join('') + '</div></div>';
  }

  var fab, tab, layer, sheet, log, form, input, sendB, leftEl, lastFocus = null, busy = false;
  function leftText() { var n = left(); return n ? T('chat.left', { n: n }) : T('chat.limit', { n: CHAT_DAILY_LIMIT }); }
  function renderLog() {
    log.innerHTML = (st.msgs.length ? '' : introHtml()) + st.msgs.map(msgHtml).join('') + (busy ? '<div class="chat-msg bot busy" role="status"><p>' + T('chat.thinking') + '</p></div>' : '');
    leftEl.textContent = leftText();
    var none = !left(); input.disabled = none; sendB.disabled = none || busy;
    U.$('[data-chat-clearwrap]', sheet).hidden = !st.msgs.length;
    log.scrollTop = log.scrollHeight;
  }
  function mount() {
    if (fab) return;
    document.body.insertAdjacentHTML('beforeend',
      '<button type="button" class="chat-fab" id="chat-fab" data-chat="open" aria-haspopup="dialog" aria-controls="chat-sheet" aria-expanded="false" aria-label="' + E(T('chat.open')) + '" title="' + E(T('chat.title')) + '">' + ICON + '</button>' +
      '<button type="button" class="chat-tab" id="chat-tab" data-chat="open" aria-haspopup="dialog" aria-controls="chat-sheet" aria-label="' + E(T('chat.open')) + '" title="' + E(T('chat.title')) + '" hidden></button>' +
      '<div class="chat-layer" id="chat-layer" hidden><div class="chat-scrim" data-chat="close"></div>' +
      '<section class="chat-sheet" id="chat-sheet" role="dialog" aria-modal="true" aria-labelledby="chat-h" aria-describedby="chat-sub">' +
      '<header class="chat-head"><div class="chat-ht"><h2 id="chat-h">' + T('chat.title') + '</h2><p id="chat-sub">' + T('chat.sub') + '</p></div>' +
      '<button type="button" class="chat-x" data-chat="close" aria-label="' + E(T('chat.close')) + '">' + X + '</button></header>' +
      '<div class="chat-log" id="chat-log" role="log" aria-live="polite" aria-relevant="additions text" tabindex="-1"></div>' +
      '<form class="chat-form" autocomplete="off"><label class="sr-only" for="chat-q">' + T('chat.label') + '</label>' +
      '<textarea id="chat-q" rows="1" maxlength="400" placeholder="' + E(T('chat.ph')) + '" enterkeyhint="send"></textarea>' +
      '<button type="submit" class="chat-send" aria-label="' + E(T('chat.send')) + '">' + SEND + '</button></form>' +
      '<p class="chat-foot"><span data-chat-left></span> · ' + T('chat.nopii') + ' <a href="#confidentialite" data-chat="nav">' + T('nav.privacy') + '</a>' +
      '<span data-chat-clearwrap> · <button type="button" class="chat-clear" data-chat="clear">' + T('chat.clear') + '</button></span></p></section></div>');
    fab = U.$('#chat-fab'); tab = U.$('#chat-tab'); layer = U.$('#chat-layer'); sheet = U.$('#chat-sheet'); log = U.$('#chat-log');
    form = U.$('.chat-form', sheet); input = U.$('#chat-q'); sendB = U.$('.chat-send', sheet); leftEl = U.$('[data-chat-left]', sheet);
    document.addEventListener('click', onClick);
    layer.addEventListener('keydown', onKey);
    form.addEventListener('submit', function (ev) { ev.preventDefault(); ask(input.value); });
    input.addEventListener('keydown', function (ev) { if (ev.key === 'Enter' && !ev.shiftKey && !ev.isComposing) { ev.preventDefault(); ask(input.value); } });
    input.addEventListener('input', grow);
    renderLog();
    if (st.open) open(false);
    place();
  }
  function grow() { input.style.height = 'auto'; input.style.height = Math.min(input.scrollHeight, 120) + 'px'; }
  function narrow() { return window.innerWidth < 640; }
  function open(focus) {
    if (!layer.hidden) return;
    lastFocus = document.activeElement && document.activeElement !== document.body ? document.activeElement : fab;
    layer.hidden = false; document.documentElement.classList.add('chat-open');
    fab.setAttribute('aria-expanded', 'true'); tab.setAttribute('aria-expanded', 'true');
    st.open = true; save(); renderLog(); place();
    loadIndex().catch(function () { });
    if (focus !== false) setTimeout(function () { try { input.disabled ? U.$('.chat-x', sheet).focus() : input.focus({ preventScroll: true }); } catch (e) { } }, 30);
  }
  function close() {
    if (layer.hidden) return;
    layer.hidden = true; document.documentElement.classList.remove('chat-open');
    fab.setAttribute('aria-expanded', 'false'); tab.setAttribute('aria-expanded', 'false');
    st.open = false; save(); if (raf) { cancelAnimationFrame(raf); raf = 0; } doPlace();
    var back = lastFocus && document.body.contains(lastFocus) && lastFocus.offsetParent !== null ? lastFocus : fab;
    if (back === fab && fab.classList.contains('tucked')) back = tab.hidden ? U.$('#view') : tab;
    try { back.focus({ preventScroll: true }); } catch (e) { }
  }
  function onClick(ev) {
    var el = ev.target.closest && ev.target.closest('[data-chat]');
    if (el) {
      var a = el.getAttribute('data-chat');
      if (a === 'open') { open(); return; }
      if (a === 'close') { close(); return; }
      if (a === 'ask') { ask(el.getAttribute('data-q')); return; }
      if (a === 'clear') { st.msgs = []; save(); renderLog(); U.toast(T('chat.cleared')); input.focus(); return; }
      if (a === 'nav' && narrow()) { close(); return; }
    }
    // an Ocelle source on a phone: show the page (the sheet would hide it)
    var link = ev.target.closest && ev.target.closest('.chat-log a[href^="#"]');
    if (link && narrow()) close();
    if (fab) setTimeout(place, 60);
  }
  function onKey(ev) {
    if (ev.key === 'Escape') { ev.stopPropagation(); close(); return; }
    if (ev.key !== 'Tab') return;
    var f = U.$$('a[href], button:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])', sheet).filter(function (x) { return x.offsetParent !== null; });
    if (!f.length) return;
    var first = f[0], last = f[f.length - 1];
    if (!sheet.contains(document.activeElement)) { ev.preventDefault(); first.focus(); }
    else if (ev.shiftKey && document.activeElement === first) { ev.preventDefault(); last.focus(); }
    else if (!ev.shiftKey && document.activeElement === last) { ev.preventDefault(); first.focus(); }
  }
  // Tab pressed while the sheet is open but focus is outside it (restored-open state): bring focus in
  document.addEventListener('keydown', function (ev) {
    if (!layer || layer.hidden || layer.contains(document.activeElement)) return;
    if (ev.key === 'Tab') { ev.preventDefault(); input.disabled ? U.$('.chat-x', sheet).focus() : input.focus(); }
    else if (ev.key === 'Escape') close();
  });

  function ask(q) {
    q = String(q || '').replace(/\s+/g, ' ').trim().slice(0, 400);
    if (!q || busy) return;
    if (!left()) { renderLog(); return; }
    if (navigator.onLine === false) { st.msgs.push({ role: 'err', a: T('chat.offline') }); save(); renderLog(); return; }
    st.msgs.push({ role: 'q', q: q }); busy = true; input.value = ''; grow(); save(); renderLog();
    loadIndex().catch(function () { return null; }).then(function () {
      var ps = search(q, TOPK);
      var body = { question: q, lang: lang(), passages: ps.map(function (p, i) { return { n: i + 1, route: p.r, title: p.t, text: p.x, topic: p.e || '' }; }) };
      var ctl = window.AbortController ? new AbortController() : null, to = setTimeout(function () { if (ctl) ctl.abort(); }, 30000);
      spend();
      return fetch(endpoint(), { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(body), credentials: 'omit', referrerPolicy: 'no-referrer', signal: ctl ? ctl.signal : undefined })
        .then(function (r) { clearTimeout(to); if (r.status === 429) throw new Error('rate'); if (!r.ok) throw new Error('http ' + r.status); return r.json(); })
        .then(function (j) {
          if (!j || typeof j.answer !== 'string' || !j.answer.trim()) throw new Error('empty');
          st.msgs.push({ role: 'a', a: j.answer.slice(0, 2500), s: (Array.isArray(j.sources) ? j.sources : []).slice(0, 12) });
        });
    }).catch(function (e) {
      st.msgs.push({ role: 'err', a: T(e && e.message === 'rate' ? 'chat.err.rate' : 'chat.err') });
    }).then(function () { busy = false; save(); renderLog(); });
  }

  /* ---------- placement: above the tab bar, never over a touch target ---------- */
  var HIDE_ROUTES = /^(inv-bscan-sim|quiz-run)(\/|$)/;
  var TARGETS = 'a[href], button, input, select, textarea, label, summary, [role="button"], [role="slider"], [role="tab"], [data-act], [data-voir], [data-bs3], .opts, .opt, .exam-opt, [data-tree], [tabindex]:not([tabindex="-1"])';
  var raf = 0;
  function place() { if (!fab || raf) return; raf = requestAnimationFrame(function () { raf = 0; doPlace(); }); }
  function doPlace() {
    var de = document.documentElement, tb = U.$('#tabbar');
    var tbTop = tb && tb.getClientRects().length && getComputedStyle(tb).display !== 'none' ? tb.getBoundingClientRect().top : window.innerHeight; // fixed: no offsetParent
    de.style.setProperty('--chat-above', Math.max(0, Math.round(window.innerHeight - tbTop)) + 'px');
    var route = String((window.Router && Router.cur) || '');
    var dr = U.$('#drawer'), lb = U.$('#lightbox');
    // hidden: the B-scan simulator, a quiz run, focus views, an open menu, lightbox or sheet; tucked to a tiny edge tab (in the 16 px
    // page gutter) while the full button would sit over something tappable (Voir game, quiz answers, links, buttons…)
    var hide = HIDE_ROUTES.test(route) || de.classList.contains('focus-view') || (dr && !dr.hidden) || (lb && !lb.hidden) || !layer.hidden;
    var tuck = hide || covers();
    fab.classList.toggle('tucked', tuck);
    fab.setAttribute('aria-hidden', tuck ? 'true' : 'false');
    fab.tabIndex = tuck ? -1 : 0;
    tab.hidden = !(tuck && !hide);
    if (tuck && document.activeElement === fab && !hide) tab.focus({ preventScroll: true });
  }
  /* does the button (plus an 8 px margin) sit over something the learner taps? 3 × 3 sample points through the layers.
     Game and answer zones (Voir photo, B-scan simulator, quiz options, form fields) count at the slightest overlap; any other
     button or link counts when the button would hide more than 20 % of it (a corner of a large card stays tappable). */
  var HARD = '[data-voir], [data-bs3], .opts, .opt, .exam-opt, .cloze-opts, .conf, input, select, textarea, [role="slider"], [data-tree], .fstep-nav';
  function covers() {
    var de = document.documentElement, r = fab.getBoundingClientRect(), m = 8, xs = [r.left - m, r.left + r.width / 2, r.right + m], ys = [r.top - m, r.top + r.height / 2, r.bottom + m];
    var R = { l: r.left - m, t: r.top - m, r: r.right + m, b: r.bottom + m }, seen = [];
    for (var i = 0; i < 3; i++) for (var j = 0; j < 3; j++) {
      var x = Math.min(window.innerWidth - 1, Math.max(0, xs[i])), y = Math.min(window.innerHeight - 1, Math.max(0, ys[j]));
      var els = document.elementsFromPoint ? document.elementsFromPoint(x, y) : [];
      for (var k = 0; k < els.length; k++) {
        var el = els[k]; if (el === fab || fab.contains(el) || el === tab) continue;
        if (el === document.body || el === de || el.closest('#tabbar')) break; // the tab bar is below the button by construction
        if (!el.closest('#view, .topbar')) continue;
        if (el.closest(HARD)) return true;
        var tg = el.closest(TARGETS); if (!tg || seen.indexOf(tg) >= 0) continue; seen.push(tg);
        var q = tg.getBoundingClientRect(), area = q.width * q.height; if (!area) continue;
        var ov = Math.max(0, Math.min(R.r, q.right) - Math.max(R.l, q.left)) * Math.max(0, Math.min(R.b, q.bottom) - Math.max(R.t, q.top));
        if (ov / area > 0.2) return true;
      }
    }
    return false;
  }

  function start() {
    if (!enabled() || !document.body) return;
    mount();
    window.addEventListener('scroll', place, { passive: true });
    window.addEventListener('resize', place);
    window.addEventListener('hashchange', function () { setTimeout(place, 50); setTimeout(place, 450); });
    var v = U.$('#view'); if (v && window.MutationObserver) new MutationObserver(place).observe(v, { childList: true, subtree: true, attributes: true, attributeFilter: ['hidden', 'class', 'open'] });
    var dr = U.$('#drawer'); if (dr && window.MutationObserver) new MutationObserver(place).observe(dr, { attributes: true, attributeFilter: ['hidden'] });
    var lb = U.$('#lightbox'); if (lb && window.MutationObserver) new MutationObserver(place).observe(lb, { attributes: true, attributeFilter: ['hidden'] });
    setTimeout(place, 400);
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', function () { setTimeout(start, 0); }); else setTimeout(start, 0);

  return { enabled: enabled, endpoint: endpoint, open: function () { if (layer) open(); }, close: function () { if (layer) close(); }, ask: function (q) { if (layer) { open(false); ask(q); } }, search: search, loadIndex: loadIndex, place: place, left: left };
})();

/* ---------- privacy page: the chat section appears only when the chat is enabled ---------- */
var CHAT_PRIV = {
  fr: {
    h: 'Demande à Ocelle (assistant IA)',
    p: function (prov) {
      return [
        'Quand tu poses une question, son texte et quelques extraits des pages d’Ocelle sont envoyés à notre serveur de clavardage (Cloudflare Workers) puis au fournisseur d’IA <b>' + prov.fr + '</b> pour produire la réponse.' +
          (CHAT_PUBMED ? ' Des mots-clés liés à la question sont aussi envoyés à PubMed (NCBI, États-Unis) pour trouver des articles de synthèse.' : ''),
        'Les questions <b>ne sont liées à aucune identité</b> : pas de compte, pas de témoin. Notre serveur ne conserve pas le texte des questions ; l’adresse IP sert seulement, de façon passagère, à limiter le nombre de requêtes.' + (prov.note ? ' ' + prov.note.fr : ''),
        'Ces services peuvent traiter les données hors du Québec (notamment aux États-Unis).',
        '<b>N’entre aucun renseignement personnel</b> : ni ton nom, ni rien qui permette d’identifier un patient.',
        'Ton historique de questions et le compteur du jour restent sur ton appareil (stockage local) ; « Effacer l’historique », dans la fenêtre de l’assistant, les supprime.'
      ];
    }
  },
  en: {
    h: 'Ask Ocelle (AI assistant)',
    p: function (prov) {
      return [
        'When you ask a question, its text and a few excerpts from Ocelle’s pages are sent to our chat server (Cloudflare Workers) and then to the AI provider <b>' + prov.en + '</b> to generate the answer.' +
          (CHAT_PUBMED ? ' Keywords related to the question are also sent to PubMed (NCBI, United States) to find review articles.' : ''),
        'Questions are <b>not linked to any identity</b>: no account, no cookies. Our server does not keep the text of questions; the IP address is used only, transiently, to limit the number of requests.' + (prov.note ? ' ' + prov.note.en : ''),
        'These services may process data outside Québec (notably in the United States).',
        '<b>Do not enter any personal information</b>: not your name, nor anything that could identify a patient.',
        'Your question history and today’s counter stay on your device (local storage); “Clear history”, in the assistant window, deletes them.'
      ];
    }
  },
  providers: {
    'workers-ai': { fr: 'Cloudflare Workers AI', en: 'Cloudflare Workers AI' },
    gemini: { fr: 'Google (API Gemini)', en: 'Google (Gemini API)', note: { fr: 'Avec l’offre gratuite de l’API Gemini, Google peut utiliser les questions pour améliorer ses produits.', en: 'On the free tier of the Gemini API, Google may use questions to improve its products.' } },
    anthropic: { fr: 'Anthropic (API Claude)', en: 'Anthropic (Claude API)' }
  }
};
(function () {
  if (!Chat.enabled() || !window.Views || !Views.confidentialite) return;
  var orig = Views.confidentialite.render;
  Views.confidentialite.render = function () {
    var html = orig.apply(this, arguments), L = CHAT_PRIV[window.I18N && I18N.lang === 'en' ? 'en' : 'fr'];
    var prov = CHAT_PRIV.providers[CHAT_PROVIDER] || { fr: 'configuré sur le serveur', en: 'configured on the server' };
    var n = (html.match(/<div class="sec">/g) || []).length + 1;
    var sec = '<div class="sec" data-chat-privacy>' + secH(String(n), L.h) + '<ul class="blist">' + L.p(prov).map(function (x) { return '<li>' + x + '</li>'; }).join('') + '</ul></div>';
    var at = html.lastIndexOf('<div class="callout">');
    return at > 0 ? html.slice(0, at) + sec + html.slice(at) : html + sec;
  };
})();
