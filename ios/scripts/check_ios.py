#!/usr/bin/env python3
"""Static checks of the iOS project that run anywhere (Linux included) and in CI before xcodebuild.
  python3 ios/scripts/check_ios.py            # project checks
  python3 ios/scripts/check_ios.py --release  # + the bundled web copy must not contain the self-test
Exit 1 on any error."""
import json, os, plistlib, re, sys

ROOT = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
APP = os.path.join(ROOT, 'ios', 'App', 'App')
errors, notes = [], []

def err(m): errors.append(m)
def plist(rel):
    p = os.path.join(ROOT, rel)
    try:
        return plistlib.load(open(p, 'rb'))
    except Exception as e:
        err('%s: not a valid plist (%s)' % (rel, e)); return {}

info = plist('ios/App/App/Info.plist')
if info.get('CFBundleDevelopmentRegion') != 'fr': err('Info.plist: CFBundleDevelopmentRegion must be fr')
if set(info.get('CFBundleLocalizations', [])) != {'fr', 'en'}: err('Info.plist: CFBundleLocalizations must be [fr, en]')
if info.get('ITSAppUsesNonExemptEncryption') is not False: err('Info.plist: ITSAppUsesNonExemptEncryption must be false')
if info.get('UILaunchStoryboardName') != 'LaunchScreen': err('Info.plist: UILaunchStoryboardName must be LaunchScreen')
if not info.get('CFBundleDisplayName'): err('Info.plist: CFBundleDisplayName missing')
if 'NSUserTrackingUsageDescription' in info: err('Info.plist: no tracking (remove NSUserTrackingUsageDescription)')
if info.get('NSAppTransportSecurity', {}).get('NSAllowsArbitraryLoads'): err('Info.plist: NSAllowsArbitraryLoads must not be set')
for k in ('UISupportedInterfaceOrientations', 'UISupportedInterfaceOrientations~ipad'):
    if not info.get(k): err('Info.plist: %s missing' % k)
if len(info.get('UISupportedInterfaceOrientations~ipad', [])) != 4: err('Info.plist: iPad needs all 4 orientations (multitasking)')

priv = plist('ios/App/App/PrivacyInfo.xcprivacy')
if priv.get('NSPrivacyTracking') is not False: err('PrivacyInfo: NSPrivacyTracking must be false')
if priv.get('NSPrivacyCollectedDataTypes') != []: err('PrivacyInfo: NSPrivacyCollectedDataTypes must be empty (no data collected)')
if 'NSPrivacyAccessedAPITypes' not in priv: err('PrivacyInfo: NSPrivacyAccessedAPITypes key missing')
plist('ios/ExportOptions.plist')

for lang in ('fr', 'en'):
    p = os.path.join(APP, lang + '.lproj', 'InfoPlist.strings')
    if not os.path.exists(p): err('%s.lproj/InfoPlist.strings missing' % lang); continue
    s = open(p, encoding='utf-8').read()
    body = re.sub(r'/\*.*?\*/', '', s, flags=re.S)
    pairs = re.findall(r'"((?:[^"\\]|\\.)*)"\s*=\s*"((?:[^"\\]|\\.)*)"\s*;', body)
    leftover = re.sub(r'"((?:[^"\\]|\\.)*)"\s*=\s*"((?:[^"\\]|\\.)*)"\s*;', '', body).strip()
    if leftover: err('%s InfoPlist.strings: unparsable content %r' % (lang, leftover[:60]))
    if 'CFBundleDisplayName' not in dict(pairs): err('%s InfoPlist.strings: CFBundleDisplayName missing' % lang)
    elif len(dict(pairs)['CFBundleDisplayName']) > 15: notes.append('%s display name > 15 chars: may be truncated under the icon' % lang)

cfg = json.load(open(os.path.join(ROOT, 'capacitor.config.json'), encoding='utf-8'))
if cfg.get('webDir') != 'site': err('capacitor.config.json: webDir must be "site"')
if (cfg.get('server') or {}).get('url'): err('capacitor.config.json: server.url must not be set (the app ships its web assets, offline)')
if (cfg.get('server') or {}).get('iosScheme', 'capacitor') != 'capacitor' or (cfg.get('server') or {}).get('hostname', 'localhost') != 'localhost':
    notes.append('server.iosScheme/hostname changed: the WebView origin changes and users lose their saved progress')
pbx = open(os.path.join(ROOT, 'ios', 'App', 'App.xcodeproj', 'project.pbxproj'), encoding='utf-8').read()
ids = set(re.findall(r'PRODUCT_BUNDLE_IDENTIFIER = ([^;]+);', pbx))
if ids != {cfg.get('appId')}: err('bundle id mismatch: capacitor.config.json %s vs project %s' % (cfg.get('appId'), sorted(ids)))
for needle in ('PrivacyInfo.xcprivacy in Resources', 'InfoPlist.strings in Resources', 'AppViewController.swift in Sources', 'fr.lproj/InfoPlist.strings', 'en.lproj/InfoPlist.strings'):
    if needle not in pbx: err('project.pbxproj: %s not referenced' % needle)
if not re.search(r'knownRegions = \(\s*fr,\s*en,\s*Base,\s*\);', pbx): err('project.pbxproj: knownRegions must be fr, en, Base')
if pbx.count('{') != pbx.count('}') or pbx.count('(') != pbx.count(')'): err('project.pbxproj: unbalanced braces')

try:
    from PIL import Image
    im = Image.open(os.path.join(APP, 'Assets.xcassets', 'AppIcon.appiconset', 'AppIcon-1024.png'))
    if im.size != (1024, 1024) or im.mode != 'RGB': err('AppIcon must be 1024x1024 RGB without alpha (got %s %s)' % (im.size, im.mode))
except ImportError:
    notes.append('Pillow not installed: icon not checked')
except FileNotFoundError:
    err('AppIcon-1024.png missing (run python3 ios/scripts/make_assets.py)')
for f in ('native-ios.js', 'selftest.js'):
    if not os.path.exists(os.path.join(ROOT, 'ios', 'web-overlay', f)): err('ios/web-overlay/%s missing' % f)
if '--release' in sys.argv:
    idx = os.path.join(APP, 'public', 'index.html')
    if os.path.exists(idx) and 'selftest.js' in open(idx, encoding='utf-8', errors='replace').read():
        err('release: ios/App/App/public/index.html still loads selftest.js (re-run overlay.mjs without --selftest)')
wf = os.path.join(ROOT, '.github', 'workflows', 'ios.yml')
try:
    import yaml
    y = yaml.safe_load(open(wf, encoding='utf-8'))
    if 'jobs' not in y: err('ios.yml: no jobs')
except ImportError:
    pass
except Exception as e:
    err('ios.yml: invalid YAML (%s)' % e)

for n in notes: print('note:', n)
for e in errors: print('ERROR:', e)
print('check_ios: %s (%d error(s))' % ('OK' if not errors else 'FAILED', len(errors)))
sys.exit(1 if errors else 0)
