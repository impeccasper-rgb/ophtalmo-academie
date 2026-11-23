// Offline test of server/chat-worker.js (no network, no keys): node server/test-worker.mjs
// Covers CORS, validation, rate limit, the 3 provider adapters (mocked), PubMed parsing, answer shape and that the question is never logged.
import worker, { _test } from './chat-worker.js';

let fails = 0;
const ok = (c, msg, extra) => { console.log((c ? 'ok   ' : 'FAIL ') + msg + (c || extra === undefined ? '' : ' :: ' + JSON.stringify(extra).slice(0, 300))); if (!c) fails++; };
const logs = []; const _log = console.log; console.log = (...a) => { logs.push(a.join(' ')); _log(...a); };

const QUESTION = 'Que faire devant une crise aiguë de fermeture de l’angle ? SECRET-TEXT-123';
const passages = [
  { n: 1, route: 'g-crise/decider', title: 'Crise aiguë · Décider', text: 'Timolol, brimonidine, dorzolamide ; acétazolamide 500 mg PO ou IV.', topic: 'Acute angle-closure crisis' },
  { n: 2, route: 'g-crise/comprendre', title: 'Crise aiguë · Comprendre', text: 'Pilocarpine seulement après la baisse de PIO.', topic: 'Acute angle-closure crisis' },
  { n: 3, route: 'javascript:alert(1)', title: 'bad', text: 'bad route is dropped' }
];
const PUBMED_XML = `<PubmedArticleSet><PubmedArticle><MedlineCitation><PMID Version="1">39000001</PMID><Article><Journal><JournalIssue><PubDate><Year>2024</Year></PubDate></JournalIssue><Title>Ophthalmology</Title><ISOAbbreviation>Ophthalmology</ISOAbbreviation></Journal><ArticleTitle>Primary angle-closure disease: a &lt;review&gt;</ArticleTitle><Abstract><AbstractText Label="BACKGROUND">Angle closure is common.</AbstractText><AbstractText>Laser iridotomy remains first line.</AbstractText></Abstract></Article></MedlineCitation></PubmedArticle></PubmedArticleSet>`;

const calls = [];
globalThis.fetch = async (url, init = {}) => {
  url = String(url); calls.push({ url, init });
  if (url.includes('esearch.fcgi')) return new Response(JSON.stringify({ esearchresult: { idlist: ['39000001'] } }), { status: 200 });
  if (url.includes('efetch.fcgi')) return new Response(PUBMED_XML, { status: 200 });
  if (url.includes('generativelanguage.googleapis.com')) return new Response(JSON.stringify({ candidates: [{ content: { parts: [{ text: 'Baisse la PIO [1]. Pilocarpine ensuite [2] [9]. Voir https://evil.example\nOutil éducatif : ne remplace pas l’avis d’un clinicien.' }] } }] }), { status: 200 });
  if (url.includes('api.anthropic.com')) return new Response(JSON.stringify({ content: [{ type: 'text', text: 'Baisse la PIO [1]; iridotomie [3].' }] }), { status: 200 });
  return new Response('not mocked', { status: 599 });
};
const AI = { run: async (model, input) => { calls.push({ url: 'ai:' + model, init: { body: JSON.stringify(input) } }); return { response: 'Baisse la PIO [1]. Iridotomie des deux yeux [3].' }; } };

const req = (body, { origin = 'https://ocelle.net', method = 'POST', ip = '203.0.113.7' } = {}) => new Request('https://chat.example.workers.dev/', {
  method, headers: { 'Content-Type': 'application/json', Origin: origin, 'CF-Connecting-IP': ip }, body: method === 'POST' ? JSON.stringify(body) : undefined
});
const body = { question: QUESTION, lang: 'fr', passages };

// CORS
let r = await worker.fetch(req(null, { method: 'OPTIONS' }), { AI }, {});
ok(r.status === 204 && r.headers.get('Access-Control-Allow-Origin') === 'https://ocelle.net', 'preflight from ocelle.net allowed');
r = await worker.fetch(req(body, { origin: 'https://evil.example' }), { AI }, {});
ok(r.status === 403 && !r.headers.get('Access-Control-Allow-Origin'), 'other origin refused');
r = await worker.fetch(req(null, { method: 'OPTIONS', origin: 'https://impeccasper-rgb.github.io' }), { AI }, {});
ok(r.status === 204, 'github.io origin allowed');
// validation
r = await worker.fetch(req({ question: 'x', lang: 'fr', passages: [] }, { ip: '198.51.100.1' }), { AI }, {});
ok(r.status === 400, 'too-short question → 400');
const v = _test.validate(body);
ok(v.passages.length === 2 && v.passages.every((p, i) => p.n === i + 1), 'bad routes dropped, passages renumbered', v.passages);

// Workers AI (default provider) + PubMed
calls.length = 0;
r = await worker.fetch(req(body, { ip: '198.51.100.2' }), { AI }, {});
let j = await r.json();
ok(r.status === 200 && typeof j.answer === 'string' && Array.isArray(j.sources), 'workers-ai: 200 {answer, sources}', j);
ok(j.sources.length === 3 && j.sources[2].kind === 'pubmed' && j.sources[2].url === 'https://pubmed.ncbi.nlm.nih.gov/39000001/' && j.sources[2].year === '2024', 'PubMed item appended as source [3]', j.sources);
ok(j.sources[0].route === 'g-crise/decider' && j.sources[0].kind === 'ocelle', 'Ocelle source keeps its route', j.sources[0]);
ok(j.answer.trim().endsWith('Outil éducatif : ne remplace pas l’avis d’un clinicien.'), 'disclaimer line at the end', j.answer);
const es = calls.find(c => c.url.includes('esearch'));
ok(es && /review%5Bpt%5D/.test(es.url) && /last%2010%20years/.test(es.url) && /Acute%20angle-closure%20crisis/.test(es.url) && /tool=ocelle-chat/.test(es.url) && !/SECRET/.test(es.url), 'esearch: reviews/guidelines, last 10 years, English topic, tool param, no raw French question', es && es.url);
const ai = calls.find(c => c.url.startsWith('ai:'));
ok(ai && ai.url === 'ai:@cf/google/gemma-4-26b-a4b-it' && JSON.parse(ai.init.body).messages[0].content.includes('150 words'), 'workers-ai called with the system prompt');

// Gemini adapter: strips URLs and citations to unknown numbers, single disclaimer
calls.length = 0;
r = await worker.fetch(req(body, { ip: '198.51.100.3' }), { LLM_PROVIDER: 'gemini', GEMINI_API_KEY: 'k', PUBMED: 'off' }, {});
j = await r.json();
const g = calls.find(c => c.url.includes('generativelanguage'));
ok(r.status === 200 && g && g.init.headers['x-goog-api-key'] === 'k' && g.url.includes('/models/gemini-3.1-flash-lite:generateContent'), 'gemini adapter: key header, default model');
ok(!/https?:/.test(j.answer) && !/\[9\]/.test(j.answer) && (j.answer.match(/Outil éducatif/g) || []).length === 1 && j.sources.length === 2, 'gemini: URL and [9] removed, one disclaimer, PubMed off', j);
ok(!calls.some(c => c.url.includes('eutils')), 'PUBMED=off → no NCBI call');
// Anthropic adapter
calls.length = 0;
r = await worker.fetch(req({ ...body, lang: 'en' }, { ip: '198.51.100.4' }), { LLM_PROVIDER: 'anthropic', ANTHROPIC_API_KEY: 'sk', PUBMED: 'off' }, {});
j = await r.json();
const an = calls.find(c => c.url.includes('anthropic'));
ok(r.status === 200 && an && an.init.headers['x-api-key'] === 'sk' && an.init.headers['anthropic-version'] && JSON.parse(an.init.body).model === 'claude-haiku-5-5', 'anthropic adapter: key header, version, default model');
ok(j.answer.endsWith('Educational tool: not a substitute for a clinician’s advice.') && !/\[3\]/.test(j.answer), 'anthropic EN: disclaimer EN, [3] dropped (only 2 sources)', j.answer);
// missing key → 502, category-only log
logs.length = 0;
r = await worker.fetch(req(body, { ip: '198.51.100.5' }), { LLM_PROVIDER: 'gemini', PUBMED: 'off' }, {});
ok(r.status === 502 && logs.some(l => l.includes('gemini-key')), 'missing key → 502 with category log');

// rate limit: 6/min per IP by default
let codes = [];
for (let i = 0; i < 8; i++) codes.push((await worker.fetch(req(body, { ip: '192.0.2.99' }), { AI, PUBMED: 'off' }, {})).status);
ok(codes.slice(0, 6).every(c => c === 200) && codes[6] === 429 && codes[7] === 429, 'per-IP limit: 7th request in a minute → 429', codes);
ok(![..._test.hits.keys()].some(k => k.includes('192.0.2')), 'rate-limit keys are hashes, not IPs');
// RATE_LIMITER binding is used when present
r = await worker.fetch(req(body, { ip: '192.0.2.100' }), { AI, PUBMED: 'off', RATE_LIMITER: { limit: async () => ({ success: false }) } }, {});
ok(r.status === 429, 'RATE_LIMITER binding respected');
// no question text in any log line
ok(!logs.concat([]).some(l => l.includes('SECRET-TEXT-123')), 'question text never logged');
// health
r = await worker.fetch(new Request('https://chat.example.workers.dev/health'), { LLM_PROVIDER: 'gemini' }, {});
j = await r.json();
ok(r.status === 200 && j.provider === 'gemini' && !JSON.stringify(j).includes('key'), 'GET /health reports provider without secrets', j);
// no passages and nothing from PubMed → "je ne sais pas" without calling the LLM
calls.length = 0;
r = await worker.fetch(req({ question: 'Quelle est la capitale du Pérou ?', lang: 'fr', passages: [] }, { ip: '198.51.100.9' }), { AI, PUBMED: 'off' }, {});
j = await r.json();
ok(j.answer.startsWith('Je ne sais pas') && !calls.length, 'no sources → je ne sais pas, no LLM call', j);
ok(_test.parsePubmed(PUBMED_XML)[0].title === 'Primary angle-closure disease: a <review>', 'PubMed XML entities decoded');

console.log = _log;
console.log(fails ? `\n${fails} failing` : '\nall worker checks passed');
process.exit(fails ? 1 : 0);
