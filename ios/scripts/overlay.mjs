#!/usr/bin/env node
// Adds the iOS-only scripts to the web assets that `npx cap sync ios` copied into the app bundle.
//   node ios/scripts/overlay.mjs ios/App/App/public            -> release/dev build (native-ios.js only)
//   node ios/scripts/overlay.mjs ios/App/App/public --selftest -> CI self-test build (+ selftest.js)
// It never touches site/ (the website), only the copy inside the iOS project. Idempotent.
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const here = path.dirname(fileURLToPath(import.meta.url));
const overlayDir = path.resolve(here, '..', 'web-overlay');
const args = process.argv.slice(2);
const selftest = args.includes('--selftest');
const pub = path.resolve(args.find((a) => !a.startsWith('--')) || 'ios/App/App/public');
const indexPath = path.join(pub, 'index.html');

if (!fs.existsSync(indexPath)) {
  console.error(`overlay: ${indexPath} not found. Run "python3 tools/build_web.py" then "npx cap sync ios" first.`);
  process.exit(1);
}

const files = ['native-ios.js', ...(selftest ? ['selftest.js'] : [])];
for (const f of files) fs.copyFileSync(path.join(overlayDir, f), path.join(pub, f));
if (!selftest && fs.existsSync(path.join(pub, 'selftest.js'))) fs.rmSync(path.join(pub, 'selftest.js'));

let html = fs.readFileSync(indexPath, 'utf8');
html = html.replace(/\n?<!-- ios-overlay:start -->[\s\S]*?<!-- ios-overlay:end -->\n?/g, '\n');
// Synchronous scripts at the very top of <head>: selftest.js must register its error listeners before the app runs;
// both only add listeners and defer their work to DOMContentLoaded.
const block = `\n<!-- ios-overlay:start -->\n${files.map((f) => `<script src="${f}"></script>`).join('\n')}\n<!-- ios-overlay:end -->\n`;
const anchor = html.match(/<meta\s+charset=[^>]*>/i) || html.match(/<head[^>]*>/i);
if (anchor) html = html.replace(anchor[0], anchor[0] + block);
else {
  const doctype = html.match(/^\s*<!doctype[^>]*>/i);
  html = doctype ? html.replace(doctype[0], doctype[0] + block) : block + html;
}
fs.writeFileSync(indexPath, html);

// Offline audit: the app must work without network (bundled assets, no remote server).
const remote = [...html.matchAll(/<(?:script|link|img|iframe|source)\b[^>]*?\s(?:src|href)=["'](https?:\/\/[^"']+)["']/gi)].map((m) => m[1]);
const hosts = [...new Set(remote.map((u) => new URL(u).host))];
let bytes = 0, count = 0;
(function walk(d) { for (const e of fs.readdirSync(d, { withFileTypes: true })) { const p = path.join(d, e.name); if (e.isDirectory()) walk(p); else { bytes += fs.statSync(p).size; count++; } } })(pub);
console.log(`overlay: ${selftest ? 'SELFTEST' : 'release'} variant -> ${files.join(', ')} injected into ${path.relative(process.cwd(), indexPath)}`);
console.log(`overlay: bundle ${count} files, ${(bytes / 1e6).toFixed(1)} MB`);
if (hosts.length) console.log(`overlay: WARNING remote resources in index.html (degrade offline): ${hosts.join(', ')}`);
if (/serviceWorker\.register/.test(html) && !/['"]serviceWorker['"]\s+in\s+navigator|navigator\.serviceWorker\s*&&|\?\.\s*register/.test(html)) {
  console.log('overlay: WARNING index.html registers a service worker without an obvious feature check (WKWebView on capacitor:// has none)');
}
