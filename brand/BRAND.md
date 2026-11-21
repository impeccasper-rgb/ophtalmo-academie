# Ocelle — brand guide

## 1. Name

**Ocelle** (FR *ocelle*, EN *ocellus*, pl. *ocelli*): the simple eye of an insect, and the eyespot on a butterfly wing or a peacock feather.
- It is a learner's first eye, and a spot you learn to notice. The whole product is about noticing the decisive sign.
- Six letters, said the same way in both languages (o-SELL), easy to spell from hearing it. It sounds like a word, not like a drug or a device.
- The mark comes straight from the name: a ring, a pupil and one bright spot.

### Shortlist (quick checks on 2026-11-21, not a legal clearance)
| Candidate | Idea | Quick check | Verdict |
|---|---|---|---|
| **Ocelle** | eyespot / simple eye | No App Store app named Ocelle in the search results. A mark *OCELLI* is registered in Australia (class not checked) and there is a US application for *ocellus*. | **Chosen.** Run a proper CIPO + USPTO search in classes 9 and 41, and check the domain, before any filing. |
| Mydria | from mydriasis: dilate to see the whole fundus | No app found, but it is very close to Théa's *MYDRANE* and *Mydriasert*, which are ophthalmic drugs in the same field. | Rejected: people could confuse it with the drugs or think a drug company sponsors the app. |
| Placido | Placido disc (keratoscopy rings) | Generic technical term already used by corneal topographers. | Rejected: descriptive, weak and hard to protect. |
| *(Foveo/Fovea)* | fovea | The space is crowded (FoveApp, Fovea Learning on the App Store). | Dropped early. |

Sources seen: apps.apple.com searches for "Mydria", "Ocelle", "Foveo/Fovea", "Placido" (results included FoveApp id6468361899 and FOVEA LEARNING id6463009342, with no Ocelle or Mydria app); trademark aggregators: justia (MYDRANE 79065994), trademarkelite (OCELLI AU 2028384), markinton (ocellus 99835125).

## 2. Tagline
- **FR:** Apprends à voir le signe qui compte.
- **EN:** Learn to see the sign that matters.
- Method line, used wherever the exercises are explained: **Observe. Réponds. Révèle.** / **Observe. Answer. Reveal.**

## 3. Voice
- Talks like a senior resident at the slit lamp: direct and precise, warm without being cute. FR uses *tu* (as the existing content does); EN uses *you*.
- Short sentences and verbs first ("Repère l'infiltrat", "Spot the infiltrate"). No exclamation marks, no hype, no emoji.
- Errors are information: "Pas tout à fait : regarde le bord de l'ulcère." Never "Wrong!".
- Clinical words in full the first time, with the English term in italics in FR content.
- Every schematic says it is a schematic (« schéma »), as PLATFORM.md requires.

## 4. Palette
Two brand colours come from the exam itself: the **cobalt** blue filter, and **fluorescein** green, which lights up what is abnormal. Around them sit the night of the slit-lamp room and quiet paper neutrals. Token names are unchanged (code depends on them). Values live in `src/styles.css`.

| Role | Token | Light | Dark | Contrast (text on its pair) |
|---|---|---|---|---|
| Page | `--paper` | `#F4F6F9` | `#070F1C` | — |
| Card | `--surface` | `#FFFFFF` | `#0F1A2C` | — |
| Recessed | `--sunk` | `#EAEEF4` | `#16233A` | — |
| Text | `--ink` | `#0B1A30` | `#E6ECF5` | 16.1 / 16.2 on paper |
| Secondary text | `--ink-2` | `#3E4E66` | `#B0BDD1` | 7.8 / 9.2 |
| Tertiary text | `--ink-3` | `#5C6B82` | `#8A99B0` | 5.0 on paper, 4.65 on sunk / 6.0 on surface |
| Lines | `--line`, `--line-2` | `#D3DBE6`, `#E5EAF1` | `#24324A`, `#1B283D` | decorative |
| **Primary: Cobalt** | `--cobalt` | `#2340D0` | `#8199FF` | 7.7 with `--on-cobalt` (white / night) |
| Cobalt text | `--cobalt-ink` | `#1A2FA0` | `#AFC0FF` | 9.1 / 8.4 on `--cobalt-wash` |
| Text on cobalt | `--on-cobalt` (new) | `#FFFFFF` | `#070F1C` | — |
| **Accent: Fluorescein** | `--fluo` / `--fluo-ink` | `#A8E63C` / `#2E6A0C` | `#B4F04F` / `#BDF26B` | ink on wash 6.0 / 11.5 |
| Decisive sign | `--sign` (new) + `--sign-halo` | `#B6F04E` + dark halo | same | always drawn with its halo so it shows on light and dark media |
| Night (hero, icon) | `--night-1/2/3` | `#05101F`, `#0A2547`, `#16478A` | same | hero text `#CFE0F2` on night-2: 11.4 |
| Aqueous (high-yield boxes) | `--teal-ink/-wash/-line` | `#0A6F64` / `#E0F5F1` | `#5FE3D0` / `#0F2E2C` | 5.3 / 9.3 |
| Urgent / bad | `--urgent`, `--bad` | `#B42323` | `#FF7A73` | 5.6 / 6.1 on wash |
| High yield (amber) | `--hy` | `#8A5A06` | `#F0B64D` | 5.3 / 7.9 |
| Trap (violet) | `--trap` | `#6A32A3` | `#C49BF0` | 6.8 / 7.0 |
| Correct | `--ok` | `#25702C` | `#78CF7E` | 5.3 / 7.5; white on ok 6.1 |
| Frequent | `--frequent` | `#1A6E80` | `#63C3D6` | 5.0 |

Rules: fluorescein green belongs to the **decisive sign** and to the single main call to action on the night hero. Never use it as plain body text on white. Colour never carries meaning alone: progress dots also change shape, and verdicts always have a word.

## 5. Typography (Google Fonts only)
- **Display: Lexend** (variable, 400–800; we use 600 for headings, 700 for the name in the app chrome, 800 for the acuity-chart optotypes). It is geometric and open, and it echoes the round strokes of the wordmark. It was designed to make reading easier.
- **Body: Atkinson Hyperlegible Next** (400–700). The Braille Institute designed it for low-vision readers, which suits an eye app, and it keeps 1/l/I and 0/O distinct, which matters in doses and measurements.
- **Numbers: Atkinson Hyperlegible Mono** (400/600), with tabular figures, for readouts, scores and counters.
- Link: `https://fonts.googleapis.com/css2?family=Lexend:wght@400..800&family=Atkinson+Hyperlegible+Next:wght@400;500;600;700&family=Atkinson+Hyperlegible+Mono:wght@400;600&display=swap`
- Scale is unchanged (`--fs-xs` … `--fs-3xl`). Headings use -0.012 em tracking (h1 -0.02 em) and `text-wrap: balance`.

## 6. Logo and icon
- `logo.svg` / `logo-dark.svg`: the mark plus the wordmark. The wordmark is drawn with geometric strokes (x-height 60, stroke 13, round caps), so it needs no font file. The **o** carries a small green dot: the sign.
- `mark.svg`: the rounded-square mark on its own (favicon, in-app logo).
- `icon.svg`: full-bleed square app icon with no text (iOS applies the mask). The night gradient holds a cobalt iris and a dark pupil. A pale crescent on the left is the **slit-lamp optical section**, and a fluorescein-green spot at upper right is **the decisive sign**. All content sits within the central 66 %, safe for maskable/PWA crops.
- PNGs: `icon-1024.png` (App Store, opaque RGB), `icon-512.png`, `icon-192.png` (PWA), `apple-touch-icon-180.png`, `favicon-32.png` (rounded, transparent corners).
- Clear space is half the mark's width. Minimum size: 16 px for the mark alone, 96 px wide for the lock-up. Do not recolour the mark. On busy photos, use the mark alone.

## 7. Iconography
- Line icons on a 20 px grid, 1.7 px stroke, round caps and joins, `currentColor` (the existing `ICO` set in core.js follows this; new icons should too).
- **Ocellus motif** for state: the current navigation entry sits in a filled cobalt circle with a small green sign dot. Section numbers sit in a cobalt ring. Phone tabs use a soft pill plus the sign dot.
- Medical drawings keep the tissue palette (`--t-*`) and the « schéma » label.

## 8. Motion principles
Motion explains something, or it does not happen.
1. **Reveal the decisive sign.** `.reveal-hotspot` scales in, then sends out three slow rings (1.5 s each), then rests as a static ring with a label. `.reveal-ring` and `.reveal-pulse` do the same for SVG figures. It is the only looping motion in learning content, and it stops after 3 cycles.
2. **Feedback.** Correct answers get `.ok-pop`, a 420 ms overshoot on the key or chip. Wrong answers get `.no-shake`, a 380 ms damped shake. The explanation (`.feedback`) rises 6 px into place. These run automatically on `.opt.correct/.wrong`, `.chip.correct/.wrong`, `.triage-btns .btn.correct/.wrong`, `.blank.ok/.bad` and `.mcard.matched/.nope`.
3. **Progress.** Bars grow from zero when a page opens (`.pbar i`, 800 ms). `.progress-pop` marks a step you just completed.
4. **Page change.** The new view rises 10 px and fades in (420 ms, `--ease-out`). Nothing slides sideways, and there is no exit animation, so navigation stays instant.
5. **Hero.** The slit beam sweeps onto the eye once, the pupil constricts (existing animation), and then the sign lights up. That is the method told in 2 seconds.
- Tokens: `--ease-out: cubic-bezier(.2,.8,.2,1)`, `--ease-pop: cubic-bezier(.34,1.56,.64,1)`, `--dur-1/2/3: 140/240/420 ms`.
- **Accessibility:** every animation sits inside `@media (prefers-reduced-motion: no-preference)`. The `.no-motion` class on `<html>` (the in-app setting) removes all of them. In both cases the final state shows straight away, so nothing is hidden. Pulses never flash (opacity fades only, below 3 per second).

## 9. App icon concept
"The sign lights up under the cobalt light." A dark slit-lamp room, an iris lit cobalt, the optical-section crescent, and one fluorescein spot: what the learner will train their eye to find. It reads at 32 px as a blue eye with a green dot, and it is distinct from the usual red-and-white or eye-chart medical icons.

## 10. Previews
`preview-*.png` (4 files) show the app with this stylesheet **plus** the HANDOFF changes simulated (new name, logo and hero mark), with fonts blocked (system fallback).
