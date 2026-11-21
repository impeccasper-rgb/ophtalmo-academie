# Ocelle — brand guide v2 « Fluorescéine »

The name stays **Ocelle** (FR *ocelle*, EN *ocellus*: an eyespot). Tagline: **Apprends à voir le signe qui compte.** / **Learn to see the sign that matters.** Method line: **Observe. Réponds. Révèle.** / **Observe. Answer. Reveal.**

v1 ("slit-lamp night") is retired. The user found it too generic.

## 1. Art direction
The exam itself provides the look. Under the **cobalt blue filter**, **fluorescein** lights up what is abnormal. The senior then circles it on the photo with a **marker** and slaps a **sticker** on it ("dendrite !").

The identity has three gestures:
1. **Cobalt field.** A saturated blue plane for the chrome, the hero, page changes and rewards.
2. **Fluorescein.** One acid yellow-green used only for what matters: the decisive sign, the main call to action, the current place in the navigation, rewards.
3. **The hand of the attending.**
   - A marker loop drawn around the sign: irregular, it overshoots its own start, and it is drawn with `stroke-dashoffset`.
   - Sticker tags that pop in at an angle.
   - A scribble under a wrong answer.

**Study comfort is a rule, not an afterthought.**
- Reading and study surfaces stay calm: paper white `#FBFBF8` in light, deep navy `#060A2A` in dark, ink text, cobalt only for links and small badges.
- Fluorescein never fills a reading surface.
- Photos are never recoloured, filtered, rotated or redrawn. EyeRounds photos are CC BY-NC-ND. Annotations are always separate overlays.
- The tilted photo card on the home page uses an openly licensed image (IMG3-035, CC BY-SA 4.0, credited with "annotation superposée").

## 2. Palette (token names unchanged; values in `src/styles.css`)
| Role | Token | Light | Dark | Contrast |
|---|---|---|---|---|
| Page / card / recessed | `--paper` `--surface` `--sunk` | `#FBFBF8` `#FFFFFF` `#F1F2F7` | `#060A2A` `#0E1440` `#151C52` | — |
| Text | `--ink` `--ink-2` `--ink-3` | `#0A0F40` `#3A406B` `#5B6188` | `#EEF0FF` `#B9BEE6` `#8E94C4` | 17.5 / 9.5 / 5.8 on paper (5.3 on sunk); dark 17.1 / 9.7 / 6.0 on surface |
| **Cobalt** (primary, links) | `--cobalt` / `--cobalt-ink` / `--cobalt-wash` | `#1F2CFF` / `#1A24D6` / `#ECEEFF` | `#4A57FF` / `#9DA5FF` / `#1A2266` | white on cobalt 7.3 (dark 5.1); cobalt on paper 7.1; cobalt-ink on wash 7.9 (dark 6.3) |
| **Fluorescein** (sign, primary CTA, rewards) | `--fluo` `--sign` / `--on-fluo` | `#D8FF3A` / `#0A0F40` | same | ink on fluo 15.8; fluo on cobalt 6.4; fluo on dark surface 15.3 |
| Fluo as text on light | `--fluo-ink` / `--fluo-wash` | `#3C5A00` / `#F4FFD1` | `#D8FF3A` / `#232B0C` | 7.6 / 12.9 |
| Chrome (top bar, rail, tab bar, drawer) | `--chrome` `--chrome-ink` `--chrome-ink-2` | `#1F2CFF` `#FFF` `#C9CEFF` | `#1A23D9` `#FFF` `#C9CEFF` | 7.3 / 4.8 (dark 9.2 / 6.0) |
| Sticker edge / hard shadow | `--edge` | `#0A0F40` | `#000` | — |
| Marker halo | `--sign-halo` | ink at 72 % | black at 70 % | keeps the fluo loop visible on light and dark media |
| Semantics | `--urgent` `--hy` `--trap` `--ok` `--frequent` | as v1 | as v1 | all ≥ 4.5 on their wash |

Rules:
- Fluo text only ever sits on cobalt, ink or navy, never on white.
- A primary button is fluo with an ink border and a 3 px hard ink shadow, so it stays visible on white.
- Colour never carries meaning alone: verdicts have words, progress dots change shape.

## 3. Type system (self-hosted, SIL OFL, from npm @fontsource; files in `fonts/`)
- **Display: Bricolage Grotesque** (variable: opsz 12–96, wght 200–800, wdth 75–100). Headings use 760–800 with tight tracking (h1 −0.034 em, hero −0.045 em, line-height 0.94–1). It is quirky, editorial and social-native, and it is legible at size thanks to its optical sizes.
- **Body: Atkinson Hyperlegible Next** (variable 200–800). It was designed for low-vision readers. It keeps l/I/1 and 0/O distinct, which matters for doses and measurements, and it stays calm in long reading. Its neutral texture lets the display face carry the personality.
- **Data: Atkinson Hyperlegible Mono**: scores, counters, readouts, section numbers.
- No Google Fonts on the site. `tools/build_web.py` writes the `@font-face` rules from `fonts/*.woff2`.

## 4. Logo and icon
- **Mark** (`mark.svg`, `icon.svg`): a cobalt field with the **ocellus drawn as a marker loop** (fluorescein, round caps; the stroke overshoots its start like a real hand) and a **fluorescein dot** at its centre: the sign, circled. `mark-loop.svg` is the loop and dot alone, for use on cobalt.
- **Wordmark** (`wordmark.svg`): "ocelle" in Bricolage Grotesque 800, outlined, so it needs no font file. `logo.svg` / `logo-dark.svg` are the lock-ups.
- **App icon**: `icon-1024.png` (opaque, full bleed; iOS applies the mask), plus `icon-512.png`, `icon-192.png`, `apple-touch-icon-180.png` and `favicon-32.png`. It reads at 16 px as a yellow ring on blue.
- **OG image** (`og.png`, 1200×630): the tagline with "signe" circled by the marker, the large mark, and a "le signe !" sticker. It contains no photo, so it has no licence constraint.
- On the cobalt chrome, the square of the mark merges with the bar and only the loop and dot remain.

## 5. Iconography
- Line icons on a 20 px grid, 1.7 px stroke, round caps, `currentColor` (the `ICO` set in core.js).
- The current navigation entry sits on a **fluo tile rotated −6°** (rail) or a **fluo pill rotated −4°** (tab bar), like a sticker.
- Section numbers are small cobalt tiles rotated −5°.
- Schematics keep the tissue palette (`--t-*`) and the « schéma » label.

## 6. Motion system (`src/motion.js` + the motion section of `src/styles.css`)
1. **Marker reveal.** When an Investigations, image-case or featured-case answer is revealed, a loop is generated for the decisive hotspot (or the first one if none is flagged). Each loop has its own seeded irregular path that overshoots its start. It is drawn with `stroke-dashoffset` (0.7 s, `--ease-marker`), over a dark halo. Other landmarks keep quiet white rings, and their labels become stickers.
2. **Stickers.** Hotspot labels and numbers pop in rotated (scale 0.3 → 1.12 → 1).
3. **Correct answer.** A fluo sticker on the verdict, «&nbsp;Bien vu !&nbsp;» / "Nice catch!" (with two variants).
4. **Wrong answer.** A red scribble is drawn under the chosen option, plus a 0.38 s shake.
5. **Page change.** A cobalt wipe with a fluo trailing edge slides off the new page (0.48 s), only when the route changes. The content also rises 10 px.
6. **Rewards.** At the end of a series or a daily image, the counter counts up and a burst of fluo, cobalt and ink confetti fires. Progress bars grow. The current tab or rail tile snaps in.
7. **Hero.** The marker draws the ocellus and its fluo dot lights up. Then the marker circles the dendrite on the tilted photo card, and the «&nbsp;dendrite !&nbsp;» sticker pops.
- Only `transform`, `opacity` and `stroke-dashoffset` are animated, on absolute overlays, so nothing shifts the layout.
- **Accessibility.** Every animation sits inside `@media (prefers-reduced-motion: no-preference)`, and `html.no-motion` (the in-app setting) cancels them. Loops and stickers are information, so they still appear, fully drawn and static. Wipes, bursts and count-ups are skipped. Overlays are `aria-hidden`; the verdict and the hotspot legend carry the text.

## 7. Voice
As in v1: a senior resident at the slit lamp. FR uses *tu*, EN uses *you*. Verbs first, no hype. Stickers are the only place for exclamation marks («&nbsp;Bien vu !&nbsp;», «&nbsp;dendrite !&nbsp;»).

## 8. Previews
`preview-*.png` (4 files): home on desktop (dark) and on phone (light), the featured-case reveal on phone, and an Investigations practice reveal on desktop (dark).
