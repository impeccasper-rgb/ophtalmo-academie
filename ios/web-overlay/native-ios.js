/* iOS-only additions. Injected into the app bundle by ios/scripts/overlay.mjs after `cap sync` — never part of the website.
   - marks <html> with .native .native-ios (web CSS may hide web-only UI such as "install the app" banners)
   - light haptic feedback on answers / card flips (native feel; App Store guideline 4.2)
   Uses only window.Capacitor injected by the native bridge, so no JS bundle or bundler is needed. */
(function () {
  'use strict';
  var C = window.Capacitor;
  if (!C || typeof C.isNativePlatform !== 'function' || !C.isNativePlatform()) return;
  var root = document.documentElement;
  root.classList.add('native', 'native-' + (C.getPlatform ? C.getPlatform() : 'ios'));
  window.OPH_NATIVE = { platform: C.getPlatform ? C.getPlatform() : 'ios' };

  function call(method, opts) {
    try { var p = C.nativePromise('Haptics', method, opts || {}); if (p && p.catch) p.catch(function () { }); } catch (e) { /* plugin absent: ignore */ }
  }
  call('selectionStart');
  var ANSWER = '.opt, .exam-opt, .opto, [data-g], [data-flip], [data-fc], [data-opt], [data-inv-opt], [data-choice]';
  var SELECT = '.chip, .seg button, [role="tab"], [data-deck], [data-act="setmod"]';
  document.addEventListener('click', function (ev) {
    var t = ev.target;
    if (!t || !t.closest) return;
    if (t.closest(ANSWER)) call('impact', { style: 'LIGHT' });
    else if (t.closest(SELECT)) call('selectionChanged');
  }, true);
})();
