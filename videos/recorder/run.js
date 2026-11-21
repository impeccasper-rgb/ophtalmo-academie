const S = require('./scenes');
(async () => { const [scene, lang, fmt, card] = process.argv.slice(2); const m = await S[scene]({ scene, lang, fmt, card, name: `${scene}-${lang}-${fmt}` }); console.log(JSON.stringify({ name: m.name, d: m.duration.toFixed(2), frames: m.frames, cues: m.cues.length, errs: m.errs })); process.exit(0); })();
