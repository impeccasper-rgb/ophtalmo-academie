/* ===== Web shell (static site / Capacitor): language persistence, meta, offline cache ===== */
'use strict';
(function () {
  var I = window.I18N;
  // a campaign link (?lang=en) also becomes the remembered choice
  try { var q = new URLSearchParams(location.search).get('lang'); if (q === 'fr' || q === 'en') localStorage.setItem('oph-lang', q); } catch (e) { }
  if (I) {
    try { document.documentElement.lang = I.lang; } catch (e) { }
    var d = document.querySelector('meta[name="description"]');
    if (d && I.lang === 'en' && d.getAttribute('data-en')) d.setAttribute('content', d.getAttribute('data-en'));
  }
  var native = !!(window.Capacitor && window.Capacitor.isNativePlatform && window.Capacitor.isNativePlatform());
  if (native) document.documentElement.classList.add('is-native');
  // offline cache (web only: WKWebView under Capacitor serves files locally)
  var local = location.hostname === 'localhost' || location.hostname === '127.0.0.1';
  if (!native && 'serviceWorker' in navigator && (location.protocol === 'https:' || local)) {
    window.addEventListener('load', function () { navigator.serviceWorker.register('sw.js').catch(function () { }); });
  }
  window.addEventListener('offline', function () { if (window.U) U.toast(I ? I.t('web.offline') : 'Hors ligne'); });
  if (I) {
    I.dict.fr['web.offline'] = 'Hors ligne : les pages déjà vues restent disponibles.';
    I.dict.en['web.offline'] = 'Offline: pages you have already opened remain available.';
  }
})();
