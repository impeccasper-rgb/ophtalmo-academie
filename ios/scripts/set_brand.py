#!/usr/bin/env python3
"""Set the app's visible name (and optionally its bundle ID) everywhere it lives, in one command.

  python3 ios/scripts/set_brand.py --name "Ocelle"                       # same name in FR and EN
  python3 ios/scripts/set_brand.py --name "Ocelle" --name-en "Ocellus"   # different EN name
  python3 ios/scripts/set_brand.py --app-id ca.example.ocelle            # bundle ID (before the first App Store upload only!)

Touches: capacitor.config.json (appName/appId), ios/App/App/Info.plist (CFBundleDisplayName),
ios/App/App/{fr,en}.lproj/InfoPlist.strings, ios/App/App.xcodeproj/project.pbxproj (PRODUCT_BUNDLE_IDENTIFIER).
"""
import argparse, json, os, plistlib, re

ROOT = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
APP = os.path.join(ROOT, 'ios', 'App', 'App')

def strings(path, name, lang):
    note = ('/* Nom affiché sous l’icône (docs/IOS.md, set_brand.py) */' if lang == 'fr'
            else '/* Name shown under the icon (docs/IOS.md, set_brand.py) */')
    esc = name.replace('\\', '\\\\').replace('"', '\\"')
    open(path, 'w', encoding='utf-8').write('%s\n"CFBundleDisplayName" = "%s";\n"CFBundleName" = "%s";\n' % (note, esc, esc))

def main():
    ap = argparse.ArgumentParser()
    ap.add_argument('--name')
    ap.add_argument('--name-en')
    ap.add_argument('--app-id')
    a = ap.parse_args()
    cfg_path = os.path.join(ROOT, 'capacitor.config.json')
    cfg = json.load(open(cfg_path, encoding='utf-8'))
    if a.name:
        cfg['appName'] = a.name
        p = os.path.join(APP, 'Info.plist')
        d = plistlib.load(open(p, 'rb')); d['CFBundleDisplayName'] = a.name
        plistlib.dump(d, open(p, 'wb'), sort_keys=True)
        strings(os.path.join(APP, 'fr.lproj', 'InfoPlist.strings'), a.name, 'fr')
        strings(os.path.join(APP, 'en.lproj', 'InfoPlist.strings'), a.name_en or a.name, 'en')
    if a.app_id:
        if not re.fullmatch(r'[A-Za-z0-9-]+(\.[A-Za-z0-9-]+)+', a.app_id):
            raise SystemExit('invalid bundle id: ' + a.app_id)
        cfg['appId'] = a.app_id
        pp = os.path.join(ROOT, 'ios', 'App', 'App.xcodeproj', 'project.pbxproj')
        s = open(pp, encoding='utf-8').read()
        s = re.sub(r'PRODUCT_BUNDLE_IDENTIFIER = [^;]+;', 'PRODUCT_BUNDLE_IDENTIFIER = %s;' % a.app_id, s)
        open(pp, 'w', encoding='utf-8').write(s)
    json.dump(cfg, open(cfg_path, 'w', encoding='utf-8'), indent=2, ensure_ascii=False)
    open(cfg_path, 'a').write('\n')
    print('appName=%s appId=%s' % (cfg['appName'], cfg['appId']))

if __name__ == '__main__':
    main()
