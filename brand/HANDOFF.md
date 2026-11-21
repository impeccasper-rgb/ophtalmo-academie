# Design → web / iOS / exercices hand-off (Ocelle)

`src/styles.css` already carries the new identity: tokens with the **same names**, refined components, and motion utilities. The items below live in files the design role does not own. Please apply them.

## 0. Seen during design QA (web): now fixed
During QA, `tools/build.py` was missing `src/i18n.js`, so `dist/preview.html` stopped at "Chargement de la classe…" (`t is not defined`). I injected i18n.js for the design screenshots. By the end of the pass `src_order` included `'i18n'` (and `'investigations'`), so no action is needed unless it regresses. Fonts are still Rokkitt there: see §4.

## 1. Name and copy (src/i18n.js)
| Key / place | FR | EN |
|---|---|---|
| App name (brand `<b>`, `document.title` suffix, manifest `name`/`short_name`) | Ocelle | Ocelle |
| Brand subtitle (under the name in rail/topbar) | Ophtalmo · externat et R1 | Ophthalmology · clerkship & R1 |
| Tagline (hero lead or meta description start) | Apprends à voir le signe qui compte. | Learn to see the sign that matters. |
| Method line (Investigations hub, onboarding) | Observe. Réponds. Révèle. | Observe. Answer. Reveal. |
| Hero eyebrow (replaces « Académie visuelle d’ophtalmologie ») | Ocelle · ophtalmologie en images | Ocelle · ophthalmology you can see |
| `<title>` | Ocelle · ophtalmologie pour externes et R1 | Ocelle · ophthalmology for clerks and R1s |
| Meta description | Apprends à voir le signe qui compte : cornée, glaucome et examens, en images, cas et jeux. Gratuit, sans pub. | Learn to see the sign that matters: cornea, glaucoma and eye investigations through images, cases and games. Free, no ads. |
| `hero.eyeAlt` (new key, alt text of the hero mark) | Œil stylisé : le faisceau de la lampe à fente révèle un signe | Stylised eye: the slit-lamp beam reveals a sign |

Voice: *tu* in FR, verbs first, no exclamation marks (see BRAND.md §3).

## 2. In-app logo (src/core.js `Shell.logo()` and the static topbar in tools/build.py / build_web.py)
Replace the "E" tile with this (no ids, so it is safe to repeat; size comes from `.brand .logo` = 36 px):
```js
logo: function () {
  return '<svg class="logo" viewBox="0 0 1024 1024" aria-hidden="true"><rect width="1024" height="1024" rx="236" fill="#0A2547"/>' +
    '<circle cx="512" cy="512" r="282" fill="#2F4EE6"/><circle cx="512" cy="512" r="116" fill="#050E1D"/>' +
    '<path d="M336 236A330 330 0 0 0 336 788" fill="none" stroke="#EAF3FF" stroke-opacity=".85" stroke-width="40" stroke-linecap="round"/>' +
    '<circle cx="660" cy="364" r="66" fill="#B6F04E"/></svg>';
},
```
The brand text stays `<b>Ocelle</b><span>…subtitle…</span>`. The CSS already styles it.

## 3. Hero mark (src/views.js `eyeSvg()`)
Replace the function with the code below. It keeps the `eye-anim`, `eye-fib` and `eye-pupil` classes, and adds `oc-hero`, `oc-beam`, `oc-sign` and `oc-sign-ring`, which `styles.css` animates: the beam sweeps in once, then the sign lights up and pulses 3 times. Under reduced motion or `.no-motion` it is static and fully visible.
```js
function eyeSvg() {
  var fib = ''; for (var i = 0; i < 40; i++) { var a = i * 9 * Math.PI / 180, r1 = 128, r2 = 250 + (i % 3) * 10; fib += '<line x1="' + (512 + r1 * Math.cos(a)).toFixed(1) + '" y1="' + (512 + r1 * Math.sin(a)).toFixed(1) + '" x2="' + (512 + r2 * Math.cos(a)).toFixed(1) + '" y2="' + (512 + r2 * Math.sin(a)).toFixed(1) + '"/>'; }
  return '<svg class="eye-anim oc-hero" viewBox="160 160 704 704" role="img" aria-label="' + U.esc(t('hero.eyeAlt')) + '"><defs>' +
    '<radialGradient id="oc-iris-h" cx="50%" cy="50%" r="50%"><stop offset=".38" stop-color="#5C7BFF"/><stop offset=".8" stop-color="#2340D0"/><stop offset="1" stop-color="#16289A"/></radialGradient>' +
    '<linearGradient id="oc-beam-h" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#EAF3FF" stop-opacity="0"/><stop offset=".5" stop-color="#EAF3FF" stop-opacity=".95"/><stop offset="1" stop-color="#EAF3FF" stop-opacity="0"/></linearGradient>' +
    '<radialGradient id="oc-glow-h"><stop offset="0" stop-color="#B6F04E" stop-opacity=".55"/><stop offset="1" stop-color="#B6F04E" stop-opacity="0"/></radialGradient></defs>' +
    '<circle cx="512" cy="512" r="318" fill="none" stroke="#5C7BFF" stroke-opacity=".3" stroke-width="8"/>' +
    '<circle cx="512" cy="512" r="282" fill="url(#oc-iris-h)"/>' +
    '<g class="eye-fib" stroke="#DCE5FF" stroke-opacity=".22" stroke-width="5">' + fib + '</g>' +
    '<circle class="eye-pupil" cx="512" cy="512" r="116" fill="#050E1D"/>' +
    '<g class="oc-beam"><circle cx="512" cy="512" r="340" fill="none"/><path d="M 336 236 A 330 330 0 0 0 336 788" fill="none" stroke="url(#oc-beam-h)" stroke-width="30" stroke-linecap="round"/></g>' +
    '<g class="oc-sign"><circle cx="660" cy="364" r="120" fill="url(#oc-glow-h)"/><circle cx="660" cy="364" r="58" fill="#B6F04E"/></g>' +
    '<circle class="oc-sign-ring" cx="660" cy="364" r="58" fill="none" stroke="#B6F04E" stroke-width="8"/></svg>';
}
```
(The invisible `r=340` circle in `.oc-beam` centres the group's bounding box on the pupil, so the beam rotates around the eye.)

## 4. Fonts (tools/build.py and tools/build_web.py)
Replace the Rokkitt `<link>` with Lexend. Keep the Atkinson links. One request is enough:
```html
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Lexend:wght@400..800&family=Atkinson+Hyperlegible+Next:wght@400;500;600;700&family=Atkinson+Hyperlegible+Mono:wght@400;600&display=swap">
```
For offline use (sw.js / iOS) you can self-host the same families (all SIL OFL). The CSS falls back to Atkinson, then to system-ui.

## 5. Icons, manifest, theme colour (web build → site/)
- Copy `brand/favicon-32.png`, `brand/mark.svg` (SVG favicon), `brand/apple-touch-icon-180.png`, `brand/icon-192.png` and `brand/icon-512.png`.
```html
<link rel="icon" href="img/mark.svg" type="image/svg+xml"><link rel="icon" href="img/favicon-32.png" sizes="32x32">
<link rel="apple-touch-icon" href="img/apple-touch-icon-180.png">
<meta name="theme-color" content="#ffffff" media="(prefers-color-scheme: light)">
<meta name="theme-color" content="#0f1a2c" media="(prefers-color-scheme: dark)">
```
- manifest: `"name": "Ocelle"`, `"short_name": "Ocelle"`, `"theme_color": "#0A2547"`, `"background_color": "#0A2547"`, icons 192/512 with `"purpose": "any maskable"` (the content sits inside the 80 % safe circle).

## 6. iOS (Capacitor)
- AppIcon: `brand/icon-1024.png` (1024², opaque RGB, no rounded corners). Xcode builds the other sizes.
- Splash: solid `#0A2547` with `brand/mark.svg` (or icon-512) centred, about 30 % of the short side.
- Status bar: dark content on the light theme, light content on dark.

## 7. Motion API (for src/investigations.js / .css and the quiz code)
Gate in JS with `U.reduced()` when you trigger motion from script. The CSS is already gated by `prefers-reduced-motion` and `.no-motion`.
- **Decisive sign on a photo or schematic.** The media box needs `position: relative`.
  `<span class="reveal-hotspot" style="--x:42%;--y:55%;--r:8%"><span class="reveal-label">Infiltrat</span></span>`
  `--x`/`--y` come straight from `hotspots[].x/y` (%), `--r` from `r` (% of the box width; at least 28 px). Use `class="reveal-hotspot minor"` for `decisive: false` (dashed white ring, no pulse). Insert the element only at the Révèle step, so the animation plays at the right moment.
- **SVG figures:** `<circle class="reveal-ring reveal-pulse" …>` gives a scale-in plus 3 stroke pulses. A plain `.reveal-ring` gets only the scale-in.
- **Feedback:** the `.opt.correct/.wrong` (and chip/triage/blank/mcard) state classes animate automatically. For any other element, add `ok-pop` or `no-shake` and remove it on `animationend` so it can replay.
- **Progress:** `.pbar i` grows when it is rendered. Add `progress-pop` to a dot or badge when a step has just been completed.
- **Pages:** `.main > .page` and `.main > .hero2` rise in on every router render. For a sub-view swapped in place, add `page-enter`.
