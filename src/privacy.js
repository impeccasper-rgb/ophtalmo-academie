/* ===== Confidentialité (#confidentialite) + mesure d'audience GoatCounter (désactivée tant que le code est vide) ===== */
'use strict';

/* ------------------------------------------------------------------
   RÉGLAGE UNIQUE — mesure d'audience GoatCounter (voir docs/PLATFORM.md)
   Vide = rien n'est chargé, aucune requête n'est faite.
   Exemple : 'ocelle' pour le tableau de bord https://ocelle.goatcounter.com
   ------------------------------------------------------------------ */
var GOATCOUNTER_CODE = '';
/* Compter aussi dans l'app iOS (coquille native Capacitor) ? Non par défaut. */
var GOATCOUNTER_IN_NATIVE_APP = false;

var PRIVACY_DATE = '2026-11-22'; // date d'entrée en vigueur de la politique (à changer à chaque modification)
var PRIVACY_OFFICER = 'Taha Amkadou, M.D. — [courriel à confirmer]'; // TODO : courriel à fournir par le responsable (docs/RAPPORT-REVEIL.md)

/* ---------- mesure d'audience ---------- */
var Stats = (function () {
  var KEY = 'oph-no-stats', loaded = false, ready = false, queue = [], last = '', first = true;
  function code() { return String(GOATCOUNTER_CODE || '').trim().toLowerCase().replace(/[^a-z0-9-]/g, ''); }
  function native() { try { return !!(window.Capacitor && window.Capacitor.isNativePlatform && window.Capacitor.isNativePlatform()); } catch (e) { return false; } }
  function dnt() {
    try { var n = navigator; return n.doNotTrack === '1' || n.doNotTrack === 'yes' || window.doNotTrack === '1' || n.msDoNotTrack === '1' || n.globalPrivacyControl === true; } catch (e) { return false; }
  }
  function optedOut() { try { return localStorage.getItem(KEY) === '1'; } catch (e) { return false; } }
  /* 'off' (pas configuré) · 'native' (app iOS, non autorisé) · 'dnt' · 'optout' · 'on' */
  function state() {
    if (!code()) return 'off';
    if (native() && !GOATCOUNTER_IN_NATIVE_APP) return 'native';
    if (dnt()) return 'dnt';
    if (optedOut()) return 'optout';
    return 'on';
  }
  /* chemin compté = la route seule (#c-herpes/voir → /c-herpes/voir), plus ?lang= s'il est dans l'URL ; rien d'autre */
  function path() {
    var r = '';
    try { r = window.Router && Router.parse ? Router.parse() : (location.hash || '').replace(/^#/, '').split('?')[0]; } catch (e) { r = ''; }
    r = String(r || 'accueil').replace(/[^A-Za-z0-9_\-\/.]/g, '').replace(/\/+$/, '').slice(0, 80) || 'accueil';
    var lang = ''; try { lang = new URLSearchParams(location.search).get('lang') || ''; } catch (e) { }
    return '/' + r + (lang === 'fr' || lang === 'en' ? '?lang=' + lang : '');
  }
  function send(p) {
    try {
      var gc = window.goatcounter; if (!gc || typeof gc.count !== 'function') return;
      gc.count({ path: p, title: p, referrer: first ? (document.referrer || '') : '', event: false });
      first = false;
    } catch (e) { }
  }
  function count() {
    if (state() !== 'on') return;
    var p = path(); if (p === last) return; last = p;
    if (ready) send(p); else queue.push(p);
  }
  function load() {
    if (loaded || state() !== 'on') return;
    if (navigator.onLine === false) return; // hors ligne : on ne tente rien (réessai au prochain retour en ligne)
    loaded = true;
    window.goatcounter = { no_onload: true, allow_local: native() };
    var s = document.createElement('script');
    s.async = true;
    s.src = 'https://gc.zgo.at/count.js'; // = //gc.zgo.at/count.js, en https explicite (l'app iOS sert la page en capacitor://)
    s.setAttribute('data-goatcounter', 'https://' + code() + '.goatcounter.com/count');
    s.setAttribute('data-goatcounter-settings', JSON.stringify({ no_onload: true, allow_local: native() }));
    s.onload = function () { ready = true; var q = queue; queue = []; q.forEach(send); };
    s.onerror = function () { loaded = false; queue = []; }; // échec silencieux (hors ligne, bloqueur)
    (document.head || document.documentElement).appendChild(s);
  }
  function start() {
    if (state() !== 'on') return;
    load(); count();
  }
  function setOptOut(off) {
    try { if (off) localStorage.setItem(KEY, '1'); else localStorage.removeItem(KEY); } catch (e) { }
    if (!off) { last = ''; start(); }
  }
  window.addEventListener('hashchange', function () { setTimeout(count, 0); });
  window.addEventListener('online', function () { if (!loaded) start(); });
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', function () { setTimeout(start, 0); });
  else setTimeout(start, 0);
  return { state: state, path: path, optedOut: optedOut, setOptOut: setOptOut, configured: function () { return !!code(); }, native: native };
})();

/* ---------- réglage (Progression → Affichage, et page Confidentialité) ---------- */
var PRIV_T = {
  'nav.privacy': ['Confidentialité', 'Privacy'],
  'stats.label': ['Mesure d’audience', 'Audience measurement'],
  'stats.on': ['Permise', 'Allowed'], 'stats.off': ['Refusée', 'Refused'],
  'stats.s.off': ['Inactive pour l’instant : aucun compteur n’est chargé.', 'Not active yet: no counter is loaded.'],
  'stats.s.native': ['Inactive dans l’app iOS.', 'Not active in the iOS app.'],
  'stats.s.dnt': ['Inactive : ton navigateur demande de ne pas être suivi (Do Not Track).', 'Off: your browser asks not to be tracked (Do Not Track).'],
  'stats.s.optout': ['Inactive : tu l’as refusée sur cet appareil.', 'Off: you refused it on this device.'],
  'stats.s.on': ['Active : visites comptées sans témoin ni renseignement personnel.', 'On: visits counted with no cookies and no personal data.'],
  'stats.saved.off': ['Mesure d’audience refusée sur cet appareil.', 'Audience measurement refused on this device.'],
  'stats.saved.on': ['Mesure d’audience permise.', 'Audience measurement allowed.']
};
(function () { if (!window.I18N) return; Object.keys(PRIV_T).forEach(function (k) { I18N.dict.fr[k] = PRIV_T[k][0]; I18N.dict.en[k] = PRIV_T[k][1]; }); })();

var Privacy = {
  statusText: function () { return t('stats.s.' + Stats.state()); },
  toggleHtml: function () {
    var off = Stats.optedOut(), b = function (v, label, on) { return '<button type="button" data-act="stats" data-v="' + v + '" aria-pressed="' + on + '">' + label + '</button>'; };
    return '<div class="seg sm" role="group" aria-label="' + U.esc(t('stats.label')) + '">' + b('on', t('stats.on'), !off) + b('off', t('stats.off'), off) + '</div>';
  },
  /* ligne prête à insérer dans la carte « Affichage » de Progression */
  settingsRow: function () {
    return '<div class="row"><span class="small" style="min-width:9rem">' + t('stats.label') + '</span>' + Privacy.toggleHtml() + '</div>' +
      '<p class="xs muted" data-stats-state>' + U.esc(Privacy.statusText()) + ' <a href="#confidentialite">' + t('nav.privacy') + '</a></p>';
  }
};
Actions.stats = function (el) {
  var off = el.getAttribute('data-v') === 'off';
  Stats.setOptOut(off);
  U.$$('[data-act="stats"]').forEach(function (b) { b.setAttribute('aria-pressed', String((b.getAttribute('data-v') === 'off') === off)); });
  U.$$('[data-stats-state]').forEach(function (p) { var a = p.querySelector('a'); p.textContent = Privacy.statusText() + ' '; if (a) p.appendChild(a); });
  U.toast(t(off ? 'stats.saved.off' : 'stats.saved.on'));
};

/* ---------- page #confidentialite ---------- */
var PRIVACY_TXT = {
  fr: {
    eyebrow: 'Loi 25 (Québec) · LPRPDE (Canada) · compatible RGPD',
    lead: 'Ocelle ne te demande aucun compte et ne garde aucun renseignement personnel sur un serveur. Voici tout ce qui se passe, en clair.',
    date: 'En vigueur le',
    s: [
      ['Ta progression reste chez toi', [
        'Tes réponses, ta série, tes réglages et tes signalements sont enregistrés <b>seulement dans ton navigateur ou ton appareil</b> (stockage local, <span class="mono">localStorage</span>).',
        'Pas de compte, pas de serveur à nous : nous ne voyons pas ces données.',
        'Pour tout effacer : <a href="#progression">Progression</a> → « Réinitialiser », ou efface les données du site dans ton navigateur. Sur iPhone, supprime l’app.'
      ]],
      ['Mesure d’audience (GoatCounter)', [
        'Pour savoir quelles pages servent, nous pouvons compter les visites avec <a href="https://www.goatcounter.com/help/privacy" target="_blank" rel="noopener">GoatCounter</a>.',
        '<b>Aucun témoin (cookie), aucun renseignement personnel</b> : seulement des totaux par page (page vue, site d’origine, navigateur, taille d’écran, langue, pays).',
        'L’adresse IP sert à déduire le pays, puis <b>n’est pas conservée</b>. Le chemin compté est la page seule (ex. <span class="mono">/cas-vedette</span>), sans autre paramètre que la langue.',
        'Rien n’est compté si ton navigateur envoie « Ne pas me pister » (Do Not Track), ni dans l’app iOS. Tu peux aussi refuser ici ou dans Progression → Affichage :'
      ]],
      ['Hébergement', [
        'Le site est hébergé par <b>GitHub Pages</b> (GitHub, Inc., États-Unis). Comme tout hébergeur, GitHub enregistre l’adresse IP des visiteurs pour la sécurité du service ; ces données peuvent être traitées hors du Québec.',
        'Voir la <a href="https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement" target="_blank" rel="noopener">déclaration de confidentialité de GitHub</a>.'
      ]],
      ['App iOS', [
        'L’app contient le même contenu, enregistré sur l’appareil : elle fonctionne hors ligne et n’envoie ta progression nulle part.',
        'L’App Store d’Apple applique ses propres règles de confidentialité.'
      ]],
      ['Images, crédits et licences', [
        'Chaque image porte son crédit et sa licence. La liste complète est dans <a href="#sources">Sources et crédits</a>.',
        'Les liens vers d’autres sites (sources, licences) mènent à des pages qui ont leurs propres politiques.'
      ]],
      ['Tes droits', [
        'Nous ne détenons aucun renseignement personnel sur toi : il n’y a rien à consulter, corriger ou supprimer de notre côté.',
        'Pour une question ou une plainte, écris au responsable ci-dessous. Tu peux aussi t’adresser à la <a href="https://www.cai.gouv.qc.ca/" target="_blank" rel="noopener">Commission d’accès à l’information du Québec</a> ou au <a href="https://www.priv.gc.ca/fr/" target="_blank" rel="noopener">Commissariat à la protection de la vie privée du Canada</a>.',
        'En Europe (RGPD) : la mesure d’audience, sans témoin ni donnée personnelle, repose sur notre intérêt légitime à améliorer le contenu, et tu peux t’y opposer en un clic.'
      ]]
    ],
    officer: 'Responsable de la protection des renseignements personnels',
    changes: 'Si cette politique change, la date ci-dessus change aussi.'
  },
  en: {
    eyebrow: 'Québec Law 25 · PIPEDA (Canada) · GDPR-compatible',
    lead: 'Ocelle asks for no account and keeps no personal data on a server. Here is everything that happens, in plain words.',
    date: 'Effective',
    s: [
      ['Your progress stays with you', [
        'Your answers, streak, settings and reports are saved <b>only in your browser or device</b> (local storage, <span class="mono">localStorage</span>).',
        'No account, no server of ours: we never see this data.',
        'To erase everything: <a href="#progression">Progress</a> → “Reset”, or clear this site’s data in your browser. On iPhone, delete the app.'
      ]],
      ['Audience measurement (GoatCounter)', [
        'To learn which pages are useful, we may count visits with <a href="https://www.goatcounter.com/help/privacy" target="_blank" rel="noopener">GoatCounter</a>.',
        '<b>No cookies, no personal data</b>: only totals per page (page viewed, referring site, browser, screen size, language, country).',
        'The IP address is used to work out the country and is <b>not stored</b>. The counted path is the page alone (e.g. <span class="mono">/cas-vedette</span>), with no parameter other than the language.',
        'Nothing is counted if your browser sends Do Not Track, nor in the iOS app. You can also refuse here or in Progress → Display:'
      ]],
      ['Hosting', [
        'The site is hosted by <b>GitHub Pages</b> (GitHub, Inc., United States). Like any host, GitHub logs visitors’ IP addresses for security; this data may be processed outside Québec.',
        'See the <a href="https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement" target="_blank" rel="noopener">GitHub General Privacy Statement</a>.'
      ]],
      ['iOS app', [
        'The app holds the same content, stored on the device: it works offline and sends your progress nowhere.',
        'Apple’s App Store applies its own privacy rules.'
      ]],
      ['Images, credits and licences', [
        'Every image carries its credit and licence. The full list is in <a href="#sources">Sources and credits</a>.',
        'Links to other sites (sources, licences) lead to pages with their own policies.'
      ]],
      ['Your rights', [
        'We hold no personal data about you, so there is nothing to access, correct or delete on our side.',
        'For a question or a complaint, write to the person named below. You can also contact the <a href="https://www.cai.gouv.qc.ca/" target="_blank" rel="noopener">Commission d’accès à l’information du Québec</a> or the <a href="https://www.priv.gc.ca/en/" target="_blank" rel="noopener">Office of the Privacy Commissioner of Canada</a>.',
        'In Europe (GDPR): audience measurement, with no cookies and no personal data, rests on our legitimate interest in improving the content, and you can object in one click.'
      ]]
    ],
    officer: 'Person responsible for the protection of personal information',
    changes: 'If this policy changes, the date above changes too.'
  }
};
Views.confidentialite = {
  title: t('nav.privacy'), render: function () {
    var L = PRIVACY_TXT[window.I18N && I18N.lang === 'en' ? 'en' : 'fr'];
    var d = new Date(PRIVACY_DATE + 'T12:00:00'), when = PRIVACY_DATE;
    try { when = d.toLocaleDateString(I18N.lang === 'en' ? 'en-CA' : 'fr-CA', { year: 'numeric', month: 'long', day: 'numeric' }); } catch (e) { }
    var secs = L.s.map(function (s, i) {
      return '<div class="sec">' + secH(String(i + 1), s[0]) + '<ul class="blist">' + s[1].map(function (x) { return '<li>' + x + '</li>'; }).join('') + '</ul>' +
        (i === 1 ? '<div class="row" style="margin-top:8px">' + Privacy.toggleHtml() + '</div><p class="xs muted" data-stats-state>' + U.esc(Privacy.statusText()) + '</p>' : '') + '</div>';
    }).join('');
    return '<div class="page read privacy" style="margin:0 auto;width:100%">' + crumbs([[t('nav.home'), 'accueil'], [t('nav.privacy'), null]]) +
      '<div class="phead"><div class="eyebrow">' + L.eyebrow + '</div><h1>' + t('nav.privacy') + '</h1><p class="muted">' + L.lead + '</p><p class="small"><b>' + L.date + ' ' + U.esc(when) + '</b></p></div>' +
      secs +
      '<div class="callout"><span class="eyebrow">' + L.officer + '</span><span><b>' + U.esc(PRIVACY_OFFICER) + '</b></span></div>' +
      '<p class="xs muted">' + L.changes + ' · <a href="#sources">' + t('nav.sources') + '</a></p></div>';
  }
};
