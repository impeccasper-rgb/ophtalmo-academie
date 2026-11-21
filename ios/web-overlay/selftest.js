/* In-app self-test for the iOS simulator run (CI). Injected ONLY into the "selftest" variant by
   `node ios/scripts/overlay.mjs <public dir> --selftest`; release builds never contain it.

   Walk: boot -> home (FR) -> switch to EN -> open a fiche -> #investigations -> answer one practice item -> flashcards.
   Every line it prints starts with "SELFTEST ":
     SELFTEST PASS <step> [detail]   SELFTEST FAIL <step> <reason>   SELFTEST WARN <step> <detail>
     SELFTEST NOTE <detail>          SELFTEST SHOT <name>  (the runner takes a screenshot)
     SELFTEST JSERROR <message>      SELFTEST SUMMARY {json}   and finally  SELFTEST PASS done | SELFTEST FAIL done
   Output goes to console.log (Capacitor forwards it to the app's stdout) and, in Debug builds, to the unified log
   through the native "selftestLog" handler (AppViewController.swift).
   State survives the page reload done by the language switch (sessionStorage), and restarts on each app launch. */
(function () {
  'use strict';
  var KEY = 'oph-selftest', STEP_TIMEOUT = 20000;
  var t0 = Date.now();

  function out(line) {
    line = 'SELFTEST ' + line;
    try { console.log(line); } catch (e) { }
    try { window.webkit.messageHandlers.selftestLog.postMessage(line); } catch (e) { }
  }
  function load() { try { return JSON.parse(sessionStorage.getItem(KEY)) || null; } catch (e) { return null; } }
  function save(st) { try { sessionStorage.setItem(KEY, JSON.stringify(st)); } catch (e) { } }

  window.addEventListener('error', function (e) {
    out('JSERROR ' + (e.message || 'error') + ' @ ' + String(e.filename || '').split('/').pop() + ':' + (e.lineno || 0));
  });
  window.addEventListener('unhandledrejection', function (e) {
    var r = e.reason; out('JSERROR unhandledrejection ' + (r && r.message ? r.message : String(r)).slice(0, 300));
  });

  /* ---------- helpers ---------- */
  function sleep(ms) { return new Promise(function (r) { setTimeout(r, ms); }); }
  function waitFor(pred, timeout, what) {
    var end = Date.now() + (timeout || 8000);
    return new Promise(function (resolve, reject) {
      (function tick() {
        var v; try { v = pred(); } catch (e) { v = null; }
        if (v) return resolve(v);
        if (Date.now() > end) return reject(new Error('timeout waiting for ' + (what || 'condition')));
        setTimeout(tick, 150);
      })();
    });
  }
  function $(sel, root) { return (root || document).querySelector(sel); }
  function $$(sel, root) { return Array.prototype.slice.call((root || document).querySelectorAll(sel)); }
  function view() { return $('#view') || document.body; }
  function text(el) { return ((el || view()).innerText || '').replace(/\s+/g, ' ').trim(); }
  function viewError() {
    var bad = $$('.callout.red', view()).filter(function (c) { return /pas pu s.afficher|could not be displayed|could not render/i.test(c.textContent); });
    return bad.length ? text(bad[0]).slice(0, 200) : '';
  }
  function settle(ms) { // wait until #view stops changing for `ms`
    ms = ms || 500;
    var last = null, since = Date.now();
    return waitFor(function () {
      var h = view().innerHTML.length + ':' + view().childElementCount;
      if (h !== last) { last = h; since = Date.now(); return false; }
      return Date.now() - since >= ms;
    }, 10000, 'view to settle');
  }
  function go(route) {
    if (location.hash === '#' + route && window.Router && Router.refresh) Router.refresh();
    else location.hash = route;
    return waitFor(function () { return !window.Router || Router.cur === route || location.hash === '#' + route; }, 6000, 'route ' + route)
      .then(function () { return settle(); })
      .then(function () { var err = viewError(); if (err) throw new Error('view error: ' + err); });
  }
  function shot(name) { out('SHOT ' + name); return sleep(1600); }
  function lang() { return window.I18N && I18N.lang; }
  function visible(el) { return !!(el && (el.offsetWidth || el.offsetHeight || el.getClientRects().length)); }
  function clickEl(el) { try { el.scrollIntoView({ block: 'center' }); } catch (e) { } el.click(); }
  function byText(re, root, sel) {
    return $$(sel || 'button, a, [role="button"]', root).filter(function (b) {
      return re.test((b.textContent || '').trim()) || re.test(b.getAttribute('aria-label') || '');
    });
  }

  /* ---------- steps ---------- */
  var STEPS = [
    ['boot', function (st) {
      return waitFor(function () { return $('#view') && text().length > 40 && !/^(Chargement|Loading)/i.test(text()); }, 45000, 'app to render')
        .then(function () {
          var err = viewError(); if (err) throw new Error('view error: ' + err);
          st.firstLang = lang() || '(no I18N)';
          out('NOTE ua=' + navigator.userAgent);
          out('NOTE navigator.language=' + navigator.language + ' app lang=' + st.firstLang + ' url=' + location.href.replace(/^capacitor:\/\/localhost/, ''));
          out('NOTE capacitor=' + !!window.Capacitor + ' native=' + !!(window.Capacitor && Capacitor.isNativePlatform && Capacitor.isNativePlatform()) + ' nativeOverlay=' + !!window.OPH_NATIVE);
          if (!window.I18N) throw new Error('window.I18N missing (site built without src/i18n.js?)');
          return shot('01-boot');
        });
    }],
    ['home-fr', function (st) {
      if (lang() !== 'fr') {
        if (st.forcedFr) throw new Error('could not start in FR (I18N.lang=' + lang() + ')');
        out('WARN home-fr app started in ' + lang() + ' although the simulator was launched in French; forcing FR');
        st.forcedFr = 1; save(st);
        try { localStorage.setItem('oph-lang', 'fr'); } catch (e) { }
        location.reload();
        return 'reload';
      }
      if (!st.forcedFr) out('PASS locale-autodetect navigator.language=' + navigator.language + ' -> fr');
      return go('accueil').then(function () {
        var t = text();
        if (t.length < 150) throw new Error('home too short (' + t.length + ' chars)');
        if (!/^fr/i.test(document.documentElement.lang || '')) out('WARN home-fr <html lang> is "' + document.documentElement.lang + '"');
        st.homeFr = t.slice(0, 400);
        return shot('02-home-fr');
      });
    }],
    ['lang-en', function (st) {
      if (st.langSwitch) { // second pass, after the reload triggered by the switch
        if (lang() !== 'en') throw new Error('after switching, I18N.lang=' + lang() + ' (via ' + st.langSwitch + ')');
        return go('accueil').then(function () {
          if (text().slice(0, 400) === st.homeFr) throw new Error('home text identical in FR and EN');
          if (!/^en/i.test(document.documentElement.lang || '')) out('WARN lang-en <html lang> is "' + document.documentElement.lang + '"');
          if (!/^ui/.test(st.langSwitch)) out('WARN lang-en language toggle not found by the self-test selectors; switched with localStorage (check the screenshots)');
          return shot('03-home-en').then(function () { return 'via ' + st.langSwitch; });
        });
      }
      var specific = $$('[data-act="lang"][data-v="en"], [data-v="en"][data-act], [data-lang="en"], [data-set-lang="en"], [data-act="lang-en"], a[hreflang="en"], a[href*="lang=en"], button[lang="en"]');
      var generic = $$('[data-act="lang"], [data-act="set-lang"], [data-act="toggle-lang"], [data-act="langue"]')
        .concat(byText(/^(EN|English|Anglais)$/i))
        .concat(byText(/english|anglais/i, document, '[aria-label]'))
        .filter(function (b) { return !/^fr/i.test(b.getAttribute('data-v') || b.getAttribute('lang') || ''); });
      var cands = specific.filter(visible).concat(specific, generic.filter(visible), generic);
      var btn = cands[0];
      var sel = btn ? null : $$('select').filter(function (x) { return Array.prototype.some.call(x.options, function (o) { return /^en/i.test(o.value); }); })[0];
      st.langSwitch = (btn || sel) ? 'ui' : 'localStorage'; save(st);
      if (sel) {
        out('NOTE lang toggle: <select>');
        sel.value = Array.prototype.filter.call(sel.options, function (o) { return /^en/i.test(o.value); })[0].value;
        sel.dispatchEvent(new Event('input', { bubbles: true })); sel.dispatchEvent(new Event('change', { bubbles: true }));
      } else if (btn) {
        out('NOTE lang toggle: <' + btn.tagName.toLowerCase() + ' ' + Array.prototype.map.call(btn.attributes, function (a) { return a.name + '="' + a.value + '"'; }).join(' ').slice(0, 160) + '>');
        clickEl(btn);
      } else { try { localStorage.setItem('oph-lang', 'en'); } catch (e) { } location.reload(); return 'reload'; }
      // the contract says switching = save + reload; if the page is still here after 6 s, check in place, then fall back
      return sleep(6000).then(function () {
        if (lang() === 'en') { st.langSwitch = 'ui-no-reload'; save(st); return STEPS[2][1](st); }
        st.langSwitch = 'localStorage'; save(st);
        try { localStorage.setItem('oph-lang', 'en'); } catch (e) { }
        location.reload(); return 'reload';
      });
    }],
    ['fiche', function (st) {
      var fiches = (window.OPH && OPH.fiches) || [], en = (window.OPH_EN && OPH_EN.fiches) || {};
      var f = fiches.filter(function (x) { return en[x.id]; })[0] || fiches[0];
      if (!f) throw new Error('OPH.fiches is empty');
      return go(f.id).then(function () {
        var h1 = $('h1', view());
        if (!h1) throw new Error('fiche ' + f.id + ' has no <h1>');
        if (text().length < 400) throw new Error('fiche ' + f.id + ' too short');
        if (!en[f.id]) out('WARN fiche no EN translation found for ' + f.id);
        return sleep(1500).then(function () {
          var broken = $$('img', view()).filter(function (i) { return i.complete && i.naturalWidth === 0 && i.getAttribute('src'); });
          var local = broken.filter(function (i) { return !/^https?:/i.test(i.getAttribute('src')); });
          if (broken.length) out('WARN fiche broken images: ' + broken.slice(0, 5).map(function (i) { return i.getAttribute('src'); }).join(', '));
          if (local.length) throw new Error(local.length + ' bundled image(s) missing, e.g. ' + local[0].getAttribute('src'));
          return shot('04-fiche-top');
        }).then(function () { window.scrollTo(0, Math.round(document.body.scrollHeight * 0.35)); return sleep(400); })
          .then(function () { return shot('05-fiche-mid'); })
          .then(function () { window.scrollTo(0, 0); return f.id + ' "' + text(h1).slice(0, 60) + '"'; });
      });
    }],
    ['investigations', function (st) {
      return go('investigations').then(function () {
        var links = $$('a[href^="#inv-"], [data-href^="inv-"], [data-route^="inv-"]', view());
        if (!links.length) throw new Error('no link to #inv-<id> on the hub (route missing?) text="' + text().slice(0, 120) + '"');
        return shot('06-investigations').then(function () { return links.length + ' exercise links'; });
      });
    }],
    ['practice', function (st) {
      var inv = (window.OPH && OPH.inv) || [];
      var pick = inv.filter(function (x) { return x.practice && x.practice.length; })[0] || inv[0];
      if (!pick) throw new Error('OPH.inv is empty');
      var OPT = '[data-inv-opt], [data-opt], [data-choice], .opts button:not(.idk), button.opt:not(.idk), [role="radio"]';
      var IDK = /je ne sais pas|i don.?t know|not sure/i;
      function options(root) { return $$(OPT, root).filter(function (b) { return !IDK.test(b.textContent || '') && !b.disabled; }); }
      return go('inv-' + pick.id).then(function () {
        var host = $('[data-practice], [data-inv-practice], .inv-practice, .practice', view()) || view();
        var opts = options(host);
        var start = opts.length ? Promise.resolve() : (function () {
          var b = byText(/commencer|start|pratiquer|practi[cs]e|s.exercer|exercise|essayer|try/i, host)[0];
          if (!b) return Promise.resolve();
          clickEl(b); return settle(400);
        })();
        return start.then(function () {
          host = $('[data-practice], [data-inv-practice], .inv-practice, .practice', view()) || view();
          opts = options(host);
          if (!opts.length) throw new Error('no practice answer option found on #inv-' + pick.id);
          return shot('07-practice-question').then(function () {
            var before = host.innerHTML, opt = opts[0];
            out('NOTE practice answering "' + text(opt).slice(0, 60) + '" on #inv-' + pick.id);
            clickEl(opt);
            return sleep(700).then(function () {
              var confirm = byText(/^(valider|vérifier|check|submit|confirm|révéler|reveal)/i, host).filter(visible)[0];
              if (confirm) { clickEl(confirm); return sleep(700); }
            }).then(function () {
              return waitFor(function () { return host.innerHTML !== before; }, 4000, 'practice feedback');
            }).then(function () { return settle(400); }).then(function () {
              var rev = $('[data-reveal]:not([hidden]), .reveal, .revealed, .is-revealed, .feedback, [class*="reveal"]', host);
              if (!rev) out('WARN practice no reveal element detected (DOM changed though)');
              var stored = window.Store && Store.p && Store.p.inv && Object.keys(Store.p.inv).length;
              if (!stored) out('WARN practice nothing recorded in Store.p.inv');
              return shot('08-practice-revealed').then(function () { return '#inv-' + pick.id + (stored ? ' recorded' : ''); });
            });
          });
        });
      });
    }],
    ['flashcards', function (st) {
      return go('cartes').then(function () {
        return waitFor(function () { return $('[data-flip]', view()) || (/Rien à réviser|Nothing to review/i.test(text()) && 'empty'); }, 8000, 'flashcard');
      }).then(function (r) {
        if (r === 'empty') throw new Error('no flashcard due');
        return shot('09-card-front').then(function () {
          clickEl($('[data-flip]', view()));
          return waitFor(function () { return $('[data-g]', view()); }, 4000, 'card back / rating buttons');
        }).then(function () { return shot('10-card-back'); }).then(function () {
          var before = view().innerHTML;
          clickEl($('[data-g="2"]', view()) || $('[data-g]', view()));
          return waitFor(function () { return view().innerHTML !== before; }, 4000, 'next card');
        }).then(function () { return shot('11-card-next'); });
      });
    }],
    ['offline', function (st) {
      var res = (performance.getEntriesByType ? performance.getEntriesByType('resource') : []).map(function (e) { return e.name; });
      var remote = res.filter(function (n) { return /^https?:/i.test(n) && n.indexOf(location.origin) !== 0; }).map(function (n) { return n.split('/').slice(0, 3).join('/'); });
      var hosts = remote.filter(function (h, i) { return remote.indexOf(h) === i; });
      if (hosts.length) out('WARN offline remote resources requested (need network): ' + hosts.join(', '));
      return Promise.resolve(res.length + ' resources, ' + hosts.length + ' remote host(s)');
    }]
  ];

  function run() {
    var st = load();
    if (!st || st.done) { st = { i: 0, results: [], started: Date.now() }; save(st); out('NOTE start (' + STEPS.length + ' steps)'); }
    else out('NOTE resume at step ' + (STEPS[st.i] ? STEPS[st.i][0] : st.i) + ' after reload');
    (function next() {
      if (st.i >= STEPS.length) return finish(st);
      var name = STEPS[st.i][0], fn = STEPS[st.i][1];
      var timer, timeout = new Promise(function (_, rej) { timer = setTimeout(function () { rej(new Error('step timed out after ' + STEP_TIMEOUT / 1000 + ' s')); }, STEP_TIMEOUT + (name === 'boot' ? 30000 : 0)); });
      Promise.race([Promise.resolve().then(function () { return fn(st); }), timeout]).then(function (detail) {
        clearTimeout(timer);
        if (detail === 'reload') return; // page is reloading; the step resumes from sessionStorage
        st.results.push([name, 'PASS']); out('PASS ' + name + (detail ? ' ' + detail : ''));
        st.i++; save(st); next();
      }, function (err) {
        clearTimeout(timer);
        st.results.push([name, 'FAIL', String(err && err.message || err)]);
        out('FAIL ' + name + ' ' + String(err && err.message || err));
        st.i++; save(st);
        if (name === 'boot') return finish(st); // nothing else can work
        next();
      });
    })();
  }
  function finish(st) {
    st.done = true; save(st);
    var fails = st.results.filter(function (r) { return r[1] !== 'PASS'; });
    out('SUMMARY ' + JSON.stringify({ pass: st.results.length - fails.length, fail: fails.length, results: st.results, seconds: Math.round((Date.now() - st.started) / 1000) }));
    out((fails.length ? 'FAIL' : 'PASS') + ' done ' + (st.results.length - fails.length) + '/' + STEPS.length);
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', function () { setTimeout(run, 300); });
  else setTimeout(run, 300);
})();
