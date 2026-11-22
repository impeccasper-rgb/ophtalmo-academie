# Ocelle: pre-launch teasers (Instagram + TikTok)

**Status: drafts. Nothing has been posted or sent.** The owner posts everything himself, adds the trending sound in the app and writes the final caption. The captions below are drafts he can adapt.

- **Art direction (owner's choice): A « Lampe à fente » + E « Quiz show ».** The base is A: dark navy, a cobalt slit-beam sweep across a drawn subject, the decisive sign glowing fluo, a slow build then a snap reveal. A owns all motion and transitions. E's quiz becomes a HUD layer: question card, A/B/C buttons, an 8-s timer bar (after a calm hold on the question and options), score, and a restrained fluo burst on the right answer. The direction samples are in `directions/`.
- **No call to comment on screen.** During the timer, the screen shows an open question (« Ton diagnostic ? », « C'est quoi le signe ? », « Qu'est-ce que tu vois ? »; EN "Your diagnosis?", "What's the sign?", "What do you see?"). Any call to comment goes only in the caption or the bio.
- **Clinical review is mandatory before posting** (rule from `launch/CONTENU.md`). The medical statements come from the site's content.
- **Placeholder date: launch day = Wednesday 23 December 2026, to be confirmed.** The J-30 / J-14 / J-7 / J-1 videos are dated from it. If the date changes, the template takes any number (`countdown:N`).

## Rules applied to every file
- **Video format:** 1080×1920, 30 fps, H.264 (`-preset veryfast -crf 21`), yuv420p, `+faststart`, **no audio track**. Quizzes run 22.5–25.5 s, showcase reels 15–25 s, countdowns 14 s. All lengths are whole beats at 120 BPM.
- **Platform safe zones:** all text stays inside x 72–948 and y 140–1680, so it is clear of the top 120 px, the bottom 220 px and the right 120 px. Unlike direction C, nothing ever goes past these margins, not even during a transition.
- **End card on every reel:** FR « ocelle · Décembre 2026 · Abonne-toi »; EN « ocelle · Coming December 2026 · Follow ».
- **No URL anywhere.** Not in the videos, the carousels or the bio.
- **Reading time (owner's rule):** every text stays fully visible, after its entrance, for at least max(2.5 s, 1.5 s + 0.35 s per word). Two texts that must be read never compete: a new card enters only once the previous one has had its full reading time. Stickers, eyebrows and the timer prompt accompany a card and are exempt from that second check only. To make this fit, the answer texts were shortened (diagnosis plus one line; the mechanism sits in reel 03), and the end card lasts 4.5 s. `_src/check_reading.py` checks every reel from `videos/cuts.json` (`--live` reads the timeline directly) and fails if any text is under the rule.
- **Sync grid:** every reel is cut on a **120 BPM** grid, so every cut falls on a multiple of 0.5 s. This also works with sounds at 60 or 240 BPM. For any other tempo, slide the sound in the app so its drop lands on the **snap at 2.0 s** (on the quizzes, a second drop can land on the **reveal at 14 s**). The exact cuts are listed in `videos/cuts.json` and in the table below.
- **Rights:** see « Sources et licences » at the bottom. Everything is original SVG or our own interface. **No photos.**

## Files

### `videos/`: 14 reels × FR + EN = 28 MP4s, each with a `-poster.png`
- Posters are half resolution (540×960). The exact cuts are in `cuts.json`.
- Overview of the FR posters: `apercu-reels-fr.png`.

| # | File (`ocelle-teaser-…-{fr,en}.mp4`) | Type | Duration | Cuts (s), 120 BPM |
|---|---|---|---|---|
| 01 | `01-ocelle-arrive` | Pure A: brand reveal | 15 | 0 (« Observe. ») · 2.5 (snap, « Réponds. ») · 5 (« Révèle. », loop) · 6.5 (mark) · 7.5 (« ocelle arrive ») · 10.5 (end) · 15 |
| 02 | `02-defi-angle-ferme` | Quiz, answered in the video | 25.5 | 0 (hook) · 3.5 (snap, question) · 4 · 4.5 · 5 (A/B/C) · 6 (8-s timer, one digit per second) · 14 (reveal) · 15 (answer card) · 21 (end) · 25.5 |
| 03 | `03-mecanisme-crise-angle` | Pure A: drawn mechanism, 5 steps | 25 | 0 (hook) · 4 · 7 · 10 · 14 · 17 (one step per cut) · 20.5 (end) · 25 |
| 04 | `04-defi-dendrite-reponse-demain` | Quiz, « réponse demain » | 22.5 | 0 · 3.5 · 4 · 4.5 · 5 · 6 (8-s timer) · 14 (« Réponse demain ») · 18 (end) · 22.5 |
| 04b | `04b-defi-dendrite-reponse` | The next day's answer | 25.5 | same cuts as 02 |
| 05 | `05-touche-le-signe` | Pure A: real interface (touch the sign) | 22.5 | 0 · 2 (snap) · 4 / 4.5 (caption, then miss « pas ici ») · 7.5 / 8 (hit, loop) · 11.5 / 12 (names the sign, sticker) · 15 · 18 (end) · 22.5 |
| 06 | `06-defi-decollement-retine` | Quiz, answered in the video | 18 | same cuts as 02 |
| 07 | `07-defi-oacr-reponse-demain` | Quiz, « réponse demain » | 18 | same cuts as 04 |
| 07b | `07b-defi-oacr-reponse` | The next day's answer | 18 | same cuts as 04b |
| 08 | `08-defi-hypopion` | Quiz, answered in the video | 18 | same cuts as 02 |
| 09 | `09-compte-a-rebours-j30`, `-j14`, `-j7`, `-j1` | Countdown template | 14 | 0 · 2 (snap) · 2.5 (« avant Ocelle ») · 3 (ticks) · 5 (line) · 9.5 (end) · 14 |

The 8 reels from the brief are 01–08. 04b and 07b are the answer posts for the « réponse demain » reels. 09 is the countdown template in 4 variants.

### `carousels/`: 3 carousels × 6 slides × FR + EN = 36 PNGs (1080×1350)
- `ocelle-carrousel-1-oeil-rouge-3-signes-{fr,en}-{1..6}.png`
- `ocelle-carrousel-2-fluoresceine-lis-le-dessin-{fr,en}-{1..6}.png`
- `ocelle-carrousel-3-crise-angle-4-etapes-{fr,en}-{1..6}.png`

Slide 5 of each carousel is a quiz (A/B/C), and its answer is on slide 6, next to the end lock-up « Décembre 2026 · Abonne-toi ».

### `profil/`
- **`ocelle-avatar-1080.png`:** the fluo loop and dot on cobalt. It stays readable at 40 px (checked on a circular crop).
- **4 highlight covers (1080×1920):** `ocelle-highlight-1-defis.png`, `-2-mecanismes.png`, `-3-coulisses.png`, `-4-decembre.png`. The icon sits in the central circle that Instagram keeps.
- **Bio FR** (111 characters): `Ophtalmo en images pour externes et R1. Un signe à trouver chaque semaine. Gratuit, FR/EN. Site : décembre 2026`
- **Bio EN** (105 characters): `Ophthalmology in images for clerks and R1s. One sign to spot every week. Free, FR/EN. Site: December 2026`
- **Alternative with the tagline:** FR (125) `Apprends à voir le signe qui compte. Ophtalmo pour externes et R1, gratuit, FR/EN. Défis chaque semaine. Site : décembre 2026` · EN (121) `Learn to see the sign that matters. Ophthalmology for clerks and R1s, free, FR/EN. Weekly challenges. Site: December 2026`

### `_src/` (to regenerate)
- `harness.html` + `common.js`: a paused Web Animations timeline that can be sought frame by frame.
- `art.js`: the drawn schematics.
- `hud.js`: the A+E system.
- `reels.js`, `ui.js`, `carousels.js`, `kit.js`.
- `render.py`: `videos [filter]`, `stills`, `frames`.
- `check_reading.py`: the reading-time check (rules above).
- `ui_capture.py`: the capture of the real interface. The captured frames (`ui-frames/`, 144 MB) are not committed; to recreate them, run `python3 tools/build_web.py`, then `ROUTE='#a-retine/occlusions-retiniennes' python3 ui_capture.py fr cap` (and the same with `en`).
- `vendor/`: frozen copies of `src/figures-mech.js` and `src/motion.js`. src/ was not modified.

## Captions, hashtags and sources for each piece
Common end of every caption: FR « Outil d'apprentissage, pas un avis médical. Site : décembre 2026. » / EN « A learning tool, not medical advice. Site: December 2026. » No link.

**01 · Ocelle arrive**
- FR: « Observe. Réponds. Révèle. Ocelle, c'est l'ophtalmo en images pour externes et R1 : des cas, des mécanismes dessinés, des arbres de décision. Gratuit, en français et en anglais. Abonne-toi pour être là au lancement. »
- EN: « Observe. Answer. Reveal. Ocelle is ophthalmology in images for clerks and R1s: cases, drawn mechanisms, decision trees. Free, in French and English. Follow to be there at launch. »
- Hashtags FR: `#ophtalmologie #externat #médecine #étudiantenmédecine #EDN #Québec #ophtalmo` · EN: `#ophthalmology #meded #medstudent #medicalstudent #ophthalmologyresident #eyes`
- Visuals: drawn eye (A), Ocelle mark and wordmark.

**02 · Défi #1: angle fermé** (answered in the video)
- FR: « 8 secondes. Tu avais trouvé avant la révélation ? Dis-nous en commentaire si tu avais A, B ou C. »
- EN: « 8 seconds. Did you get it before the reveal? Tell us in the comments: A, B or C? »
- Hashtags FR: `#ophtalmologie #glaucome #externat #EDN #urgences #étudiantenmédecine` · EN: `#ophthalmology #glaucoma #meded #medstudent #emergencymedicine #CaRMS`
- Visuals: angle section from the site's mechanism kit (`g-crise`, iris bombé), original SVG.

**03 · Mécanisme: crise d'angle en 5 temps**
- FR: « Pourquoi une pupille mi-dilatée peut fermer l'angle : bloc pupillaire, iris bombé, angle fermé, PIO qui flambe, et l'iridotomie qui rouvre tout. Enregistre-le pour ta garde. »
- EN: « How a mid-dilated pupil can close the angle: pupillary block, iris bombé, closed angle, IOP spike, and the iridotomy that reopens it. Save it for your next call shift. »
- Hashtags FR: `#ophtalmologie #glaucome #physiopathologie #externat #internat #médecine` · EN: `#ophthalmology #glaucoma #pathophysiology #meded #medstudent #ophthalmologyresident`
- Visuals: the 5 steps of `g-crise` (the site's own drawings).

**04 · Défi #2: dendrite** (« réponse demain »)
- FR: « Fluorescéine, lumière bleu cobalt. Ton diagnostic en commentaire ; la réponse arrive demain. »
- EN: « Fluorescein under cobalt blue light. Your diagnosis in the comments; the answer drops tomorrow. »
- Hashtags FR: `#ophtalmologie #cornée #herpès #externat #EDN #étudiantenmédecine` · EN: `#ophthalmology #cornea #herpes #meded #medstudent #optometry`
- Visuals: front view of the eye under cobalt light with a dendrite, drawn (`art.js`).

**04b · Réponse du défi #2** (the next day, as a reel or a story)
- FR: « La réponse d'hier : une dendrite. Des branches, un bulbe au bout de chacune : kératite herpétique. Pas de corticoïde seul. »
- EN: « Yesterday's answer: a dendrite. Branches with a bulb at each tip: herpes keratitis. No steroid alone. »
- Hashtags: same as 04.

**05 · Touche le signe** (the real interface)
- FR: « Sur Ocelle, tu ne lis pas la réponse : tu touches le signe. Raté, le site te le dit. Touché, le marqueur l'entoure. Puis tu le nommes. Décembre. »
- EN: « On Ocelle you don't read the answer: you tap the sign. Miss, and it tells you. Hit, and the marker circles it. Then you name it. December. »
- Hashtags FR: `#ophtalmologie #externat #apprentissage #médecine #EDN #Québec` · EN: `#ophthalmology #meded #medstudent #edtech #medicalstudent #eyes`
- Visuals: the site's real « Voir » screen (A5, retinal occlusions), captured with Playwright. The photo slot was fed our CRAO schematic and every other raster image was blanked, so the screen shows **no photo**. The credit line reads « Schéma · Ocelle ». The sticker is the interface's real one: it draws among « Bien vu ! / Dans le mille ! / Exact ! » and shows « Exact ! » here (EN « Nailed it! »).

**06 · Défi #3: décollement de rétine** (answered in the video)
- FR: « Éclairs, corps flottants, puis une ombre. Tu l'avais ? Un rideau, c'est ophtalmo le jour même. »
- EN: « Flashes, floaters, then a shadow. Did you get it? A curtain means same-day ophthalmology. »
- Hashtags FR: `#ophtalmologie #rétine #urgences #externat #EDN #étudiantenmédecine` · EN: `#ophthalmology #retina #emergencymedicine #meded #medstudent #CaRMS`
- Visuals: drawn fundus, superotemporal detachment with a horseshoe tear.

**07 · Défi #4: tache rouge cerise** (« réponse demain »)
- FR: « Baisse de vision brutale, indolore. Quel signe décide ? Réponse demain. »
- EN: « Sudden, painless vision loss. Which sign decides? Answer tomorrow. »
- Hashtags FR: `#ophtalmologie #rétine #AVC #urgences #externat #EDN` · EN: `#ophthalmology #retina #stroke #meded #medstudent #emergencymedicine`
- Visuals: drawn CRAO fundus (pale retina, red fovea).

**07b · Réponse du défi #4**
- FR: « Tache rouge cerise : occlusion de l'artère centrale de la rétine. C'est un AVC de l'œil : centre d'AVC tout de suite. »
- EN: « Cherry-red spot: central retinal artery occlusion. An eye stroke: stroke centre now. »
- Hashtags: same as 07.

**08 · Défi #5: hypopion** (answered in the video)
- FR: « Œil rouge et douloureux après une cataracte. Le niveau blanc ne pardonne pas : ophtalmo le jour même. »
- EN: « Red, painful eye after cataract surgery. That white layer can't wait: same-day ophthalmology. »
- Hashtags FR: `#ophtalmologie #cataracte #urgences #externat #internat #médecine` · EN: `#ophthalmology #cataract #emergencymedicine #meded #medstudent #ophthalmologyresident`
- Visuals: drawn front view of the eye (ciliary flush, hypopyon).

**09 · Compte à rebours J-30 / J-14 / J-7 / J-1** (reel or story)
- FR: « J-30. Ocelle arrive en décembre : l'ophtalmo en images, gratuite, FR/EN. Abonne-toi pour le jour J. » (change the number)
- EN: « 30 days. Ocelle lands in December: ophthalmology in images, free, FR/EN. Follow for launch day. »
- Hashtags FR: `#ophtalmologie #externat #médecine #étudiantenmédecine #Québec` · EN: `#ophthalmology #meded #medstudent #medicalstudent #launch`

**Carrousel 1 · 3 signes d'urgence devant un œil rouge**
- FR: « Glisse jusqu'au bout : la diapo 5 te teste, la 6 te donne la réponse. Enregistre pour ton prochain stage. »
- EN: « Swipe to the end: slide 5 tests you, slide 6 has the answer. Save it for your next rotation. »
- Hashtags FR: `#ophtalmologie #œilrouge #externat #urgences #EDN #étudiantenmédecine` · EN: `#ophthalmology #redeye #meded #medstudent #emergencymedicine`
- Visuals: drawn eyes and acuity chart.

**Carrousel 2 · Fluorescéine : lis le dessin**
- FR: « Plage, branches ou points : trois dessins, trois prises en charge. Teste-toi à la diapo 5. »
- EN: « Patch, branches or dots: three patterns, three treatments. Test yourself on slide 5. »
- Hashtags FR: `#ophtalmologie #cornée #fluorescéine #externat #EDN #optométrie` · EN: `#ophthalmology #cornea #fluorescein #meded #optometry #medstudent`
- Visuals: drawn cornea under cobalt light.

**Carrousel 3 · Crise d'angle en 4 étapes**
- FR: « Le mécanisme en 4 dessins, puis une question : quel geste rouvre l'angle ? Réponse à la dernière diapo. »
- EN: « The mechanism in 4 drawings, then one question: which move reopens the angle? Answer on the last slide. »
- Hashtags FR: `#ophtalmologie #glaucome #physiopathologie #externat #internat` · EN: `#ophthalmology #glaucoma #pathophysiology #meded #ophthalmologyresident`
- Visuals: steps of `g-crise` (the site's drawings).

## Posting calendar (3 posts per week, until launch day)
Each week has 1 motion feature reel, 1 challenge and 1 slot « visage/voix du propriétaire (POV externe, coulisses) ». Countdowns and answers go out as Stories in addition.

| Date | Slot | Post | Extra (story) |
|---|---|---|---|
| Mon 23 Nov | Motion | **01 Ocelle arrive** | 09 J-30 |
| Wed 25 Nov | Challenge | **02 Défi angle fermé** (answered in the video) | |
| Fri 27 Nov | Face/voice | **Script 1** | |
| Mon 30 Nov | Motion | **03 Mécanisme crise d'angle** | |
| Wed 2 Dec | Challenge | **04 Défi dendrite** (« réponse demain ») | Thu 3 Dec: 04b réponse |
| Fri 4 Dec | Face/voice | **Script 2** | |
| Mon 7 Dec | Motion | **05 Touche le signe** | |
| Wed 9 Dec | Challenge | **Carrousel 1 · œil rouge** (quiz slide 5) | 09 J-14 |
| Fri 11 Dec | Face/voice | **Script 3** | |
| Mon 14 Dec | Challenge | **06 Défi décollement de rétine** (answered in the video) | |
| Wed 16 Dec | Motion | **09 J-7** as a reel | |
| Fri 18 Dec | Face/voice | **Script 4** | |
| Mon 21 Dec | Challenge | **07 Défi tache rouge cerise** (« réponse demain ») | Tue 22: 07b réponse |
| Tue 22 Dec | Motion | **09 J-1** as a reel | |
| Wed 23 Dec | Face/voice | **Script 5: launch day** | |

**Held back for launch week or January:** 08 Défi hypopion, Carrousel 2 (fluorescéine), Carrousel 3 (crise d'angle). They can replace any slot if one post underperforms.

Note: lengths follow the reading-time rule (owner's feedback), so the quizzes run about 25 s.

### Scripts for the owner slot (20–30 s, filmed on a phone)
The owner can do each one **without his face or name**: voice-over on his hands, a notebook or a screen recording. The open question can appear on screen. **Any call to comment stays in the caption.**

1. **POV externe: « Tout le monde a l'œil rouge »** (face camera or hands)
   - On-screen text: « POV : premier stage d'ophtalmo ».
   - Voice: « En stage, j'ai vite compris : tout le monde a l'œil rouge. Ce qui compte, c'est les trois signes qui ne peuvent pas attendre. La vision qui baisse. La vraie douleur. La pupille qui ne réagit pas. C'est pour apprendre à les voir que je fais Ocelle. En décembre. »
   - EN: "On my eye rotation I learned fast: everyone has a red eye. What matters are the three signs that can't wait…"
2. **Coulisses: « Comment je dessine un signe »** (screen recording)
   - A sped-up timelapse of a schematic being drawn: the dendrite, then the fluo loop.
   - Voice: « Ici, pas de photo de patient : chaque signe est redessiné, trait par trait. Une dendrite, c'est des branches et un bulbe au bout de chacune. Une fois que tu l'as dessinée, tu ne l'oublies plus. »
3. **POV externe: « L'erreur que je faisais »** (face or hands with a notebook)
   - Voice: « Externe, je voyais un œil rouge et je pensais conjonctivite. La seule question à poser d'abord : est-ce que la vision a baissé ? Si oui, ce n'est pas une conjonctivite tant qu'on n'a pas prouvé le contraire. »
4. **Coulisses: « Pourquoi gratuit, en français »** (walking, or the screen of the site with no URL visible)
   - Voice: « Je cherchais de l'ophtalmo en images, en français, interactive. Je n'ai presque rien trouvé. Alors je l'ai construit : gratuit, sans pub, en français et en anglais. Dans cinq jours. »
   - Do not show the URL bar.
5. **Launch day: « C'est en ligne »**
   - Voice: « Ocelle est en ligne. Un cas, deux minutes : tu observes, tu réponds, le signe s'allume. »
   - **That day only**, the owner decides whether to put the link in the bio in place of « Site : décembre 2026 ».

## Sources and licences
| Element | Origin | Licence |
|---|---|---|
| Angle section, the 5 steps of the angle-closure crisis, mechanisms | The site's own drawing kit (`src/figures-mech.js`, frozen copy in `_src/vendor/`) | Original Ocelle work |
| Marker loop | `src/motion.js` (`Motion.loop`) | Original Ocelle work |
| Drawn eyes (stylised, front view, cobalt), fundi (CRAO, detachment), dendrite, abrasion, punctate dots, hypopyon, acuity chart | Drawn for these teasers (`_src/art.js`), with no photo as a reference | Original Ocelle work |
| Real interface (05) | Built site (`site/`), Playwright capture; the photo slot was fed our CRAO schematic and other rasters were blanked | Our own interface + original schematic |
| Mark, wordmark | `brand/` | Ocelle brand |
| Fonts | Bricolage Grotesque, Atkinson Hyperlegible Next and Mono (`fonts/`) | SIL OFL 1.1 |
| Photos | **None.** No EyeRounds image, no Wikimedia image | — |
