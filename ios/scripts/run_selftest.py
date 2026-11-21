#!/usr/bin/env python3
"""Run the in-app self-test (ios/web-overlay/selftest.js) on an iOS simulator and collect evidence.

macOS + Xcode only (used by .github/workflows/ios.yml). Steps:
  pick the newest available iPhone/iPad simulator -> boot -> install App.app -> launch in French
  -> follow the app's stdout (Capacitor console bridge) and the unified log for "SELFTEST " lines
  -> screenshot on every "SELFTEST SHOT <name>" and every 15 s, record a video
  -> exit 1 if any "SELFTEST FAIL", no "SELFTEST PASS done", a crash, or a timeout.

Usage: python3 ios/scripts/run_selftest.py --app build/Build/Products/Debug-iphonesimulator/App.app \
           --family iphone --out artifacts/iphone [--timeout 240] [--lang fr]
"""
import argparse, glob, json, os, plistlib, re, shutil, signal, subprocess, sys, time

def sh(cmd, check=True, timeout=None, **kw):
    print('$ ' + ' '.join(cmd), flush=True)
    return subprocess.run(cmd, check=check, timeout=timeout, text=True, capture_output=True, **kw)

def simctl(*a, check=True, timeout=120):
    return sh(['xcrun', 'simctl'] + list(a), check=check, timeout=timeout)

def version_key(s):
    return tuple(int(x) for x in re.findall(r'\d+', s))

def pick_device(family):
    data = json.loads(simctl('list', '-j', 'devices', 'available').stdout)
    runtimes = json.loads(simctl('list', '-j', 'runtimes', 'available').stdout)['runtimes']
    ios = sorted([r for r in runtimes if r.get('platform', 'iOS') == 'iOS' and 'iOS' in r['name'] and r.get('isAvailable', True)],
                 key=lambda r: version_key(r['version']), reverse=True)
    prefix = 'iPhone' if family == 'iphone' else 'iPad'
    # preference: a large modern model (good screenshots), then anything of the family
    prefs = ['Pro Max', 'Pro', 'Air', ''] if family == 'iphone' else ['Pro 13', 'Pro (12.9', 'Air 13', 'Pro', 'Air', '']
    for rt in ios:
        devs = [d for d in data['devices'].get(rt['identifier'], []) if d['name'].startswith(prefix) and d.get('isAvailable', True)]
        devs = [d for d in devs if 'SE' not in d['name'] and 'mini' not in d['name']] or devs
        for p in prefs:
            m = [d for d in devs if p in d['name']]
            if m:
                return m[0]['udid'], m[0]['name'], rt['name']
    # nothing pre-created: create one from the newest runtime's supported device types
    if not ios:
        sys.exit('no iOS simulator runtime available (xcrun simctl list runtimes)')
    rt = ios[0]
    types = [t for t in rt.get('supportedDeviceTypes', []) if t['name'].startswith(prefix)]
    if not types:
        sys.exit('no %s device type for %s' % (prefix, rt['name']))
    t = types[-1]
    udid = simctl('create', 'Selftest ' + t['name'], t['identifier'], rt['identifier']).stdout.strip()
    return udid, t['name'], rt['name']

def main():
    ap = argparse.ArgumentParser()
    ap.add_argument('--app', required=True)
    ap.add_argument('--family', choices=['iphone', 'ipad'], default='iphone')
    ap.add_argument('--out', required=True)
    ap.add_argument('--timeout', type=int, default=240, help='seconds to wait for "SELFTEST ... done" after launch')
    ap.add_argument('--lang', default='fr', help='simulator app language (the walk expects to start in FR)')
    a = ap.parse_args()

    out = os.path.abspath(a.out)
    shots = os.path.join(out, 'screenshots')
    os.makedirs(shots, exist_ok=True)
    app = os.path.abspath(a.app)
    info = plistlib.load(open(os.path.join(app, 'Info.plist'), 'rb'))
    bundle_id = info['CFBundleIdentifier']

    udid, dev_name, rt_name = pick_device(a.family)
    print('device: %s (%s) %s  bundle: %s' % (dev_name, rt_name, udid, bundle_id), flush=True)
    simctl('boot', udid, check=False)
    simctl('bootstatus', udid, '-b', timeout=600)
    simctl('status_bar', udid, 'override', '--time', '9:41', '--batteryState', 'charged', '--batteryLevel', '100',
           '--cellularBars', '4', '--wifiBars', '3', check=False)
    simctl('ui', udid, 'appearance', 'light', check=False)
    simctl('install', udid, app, timeout=300)

    started = time.time()
    procs = {}
    files = {
        'console': os.path.join(out, 'app-console.log'),     # app stdout/stderr (Capacitor "⚡️ [log] - ..." lines)
        'unified': os.path.join(out, 'selftest-unified.log'),  # unified log, SELFTEST lines (NSLog from AppViewController)
        'system': os.path.join(out, 'app-unified.log'),        # unified log of the app + WebKit processes (crash diagnosis)
    }
    handles = {k: open(v, 'w') for k, v in files.items()}
    procs['unified'] = subprocess.Popen(['xcrun', 'simctl', 'spawn', udid, 'log', 'stream', '--style', 'compact', '--level', 'debug',
                                         '--predicate', 'eventMessage CONTAINS "SELFTEST"'], stdout=handles['unified'], stderr=subprocess.STDOUT)
    procs['system'] = subprocess.Popen(['xcrun', 'simctl', 'spawn', udid, 'log', 'stream', '--style', 'compact',
                                        '--predicate', 'process == "App" OR process CONTAINS "WebContent"'], stdout=handles['system'], stderr=subprocess.STDOUT)
    procs['video'] = subprocess.Popen(['xcrun', 'simctl', 'io', udid, 'recordVideo', '--codec=h264', '--force', os.path.join(out, 'run.mp4')],
                                      stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)
    time.sleep(2)
    env = dict(os.environ, SIMCTL_CHILD_NSUnbufferedIO='YES')
    lang_args = ['-AppleLanguages', '(%s)' % a.lang, '-AppleLocale', {'fr': 'fr_CA', 'en': 'en_CA'}.get(a.lang, a.lang)]
    launch = ['xcrun', 'simctl', 'launch', '--console-pty', '--terminate-running-process', udid, bundle_id] + lang_args
    print('$ ' + ' '.join(launch), flush=True)
    procs['app'] = subprocess.Popen(launch, stdout=handles['console'], stderr=subprocess.STDOUT, stdin=subprocess.DEVNULL, env=env)

    seen, events, pos = set(), [], {'console': 0, 'unified': 0}
    done, last_periodic, crash, detached = None, time.time(), None, False

    def screenshot(name):
        path = os.path.join(shots, re.sub(r'[^\w.-]+', '_', name) + '.png')
        r = simctl('io', udid, 'screenshot', path, check=False, timeout=60)
        if r.returncode != 0:
            print('screenshot failed: ' + (r.stderr or '').strip(), flush=True)

    while True:
        for src in ('console', 'unified'):
            try:
                with open(files[src], 'r', errors='replace') as f:
                    f.seek(pos[src]); chunk = f.read(); pos[src] = f.tell()
            except FileNotFoundError:
                chunk = ''
            for raw in chunk.splitlines():
                i = raw.find('SELFTEST ')
                if i < 0 or 'eventMessage CONTAINS' in raw:
                    continue
                line = raw[i:].strip()
                if line in seen:
                    continue
                seen.add(line)
                events.append({'t': round(time.time() - started, 1), 'src': src, 'line': line})
                print('[%5.1fs] %s' % (time.time() - started, line), flush=True)
                m = re.match(r'SELFTEST SHOT (\S+)', line)
                if m:
                    screenshot(m.group(1))
                if re.match(r'SELFTEST (PASS|FAIL) done\b', line):
                    done = line
        now = time.time()
        if now - last_periodic >= 15:
            screenshot('t%03d' % int(now - started)); last_periodic = now
        if done:
            time.sleep(2); break
        if procs['app'].poll() is not None and not detached:
            # simctl's console relay ended: either the app died, or simctl detached (then keep going on the unified log)
            r = simctl('spawn', udid, 'launchctl', 'list', check=False, timeout=30)
            if bundle_id in (r.stdout or ''):
                detached = True
                print('note: console relay ended (exit %s) but the app is running; following the unified log only' % procs['app'].returncode, flush=True)
            else:
                crash = 'app process ended before the self-test finished (simctl exit %s)' % procs['app'].returncode
                time.sleep(2); break
        if now - started > a.timeout:
            break
        time.sleep(0.3)

    screenshot('zz-final-light')
    simctl('ui', udid, 'appearance', 'dark', check=False)
    time.sleep(3)
    screenshot('zz-final-dark')
    simctl('ui', udid, 'appearance', 'light', check=False)

    procs['video'].send_signal(signal.SIGINT)  # SIGINT lets simctl finalise the mp4
    try:
        procs['video'].wait(timeout=30)
    except subprocess.TimeoutExpired:
        procs['video'].kill()
    simctl('terminate', udid, bundle_id, check=False)
    for k in ('app', 'unified', 'system'):
        if procs[k].poll() is None:
            procs[k].terminate()
            try: procs[k].wait(timeout=10)
            except subprocess.TimeoutExpired: procs[k].kill()
    for h in handles.values():
        h.close()
    # crash reports written during the run
    crashdir = os.path.join(out, 'crash-reports')
    for p in glob.glob(os.path.expanduser('~/Library/Logs/DiagnosticReports/*')):
        if os.path.basename(p).startswith(('App', 'com.apple.WebKit')) and os.path.getmtime(p) >= started:
            os.makedirs(crashdir, exist_ok=True); shutil.copy2(p, crashdir)
            crash = crash or 'crash report found: ' + os.path.basename(p)
    simctl('shutdown', udid, check=False)

    lines = [e['line'] for e in events]
    fails = [l for l in lines if l.startswith('SELFTEST FAIL')]
    warns = [l for l in lines if l.startswith('SELFTEST WARN')]
    jserr = [l for l in lines if l.startswith('SELFTEST JSERROR')]
    passed = [l for l in lines if l.startswith('SELFTEST PASS')]
    ok = bool(done) and done.startswith('SELFTEST PASS') and not fails and not crash
    reason = 'ok' if ok else (crash or ('; '.join(fails[:3]) if fails else ('timeout after %ss without "SELFTEST ... done" (no SELFTEST output at all?)' % a.timeout if not lines else 'timeout before "done"')))
    with open(os.path.join(out, 'selftest.log'), 'w') as f:
        f.write('\n'.join('[%5.1fs %-7s] %s' % (e['t'], e['src'], e['line']) for e in events) + '\n')
    result = {'ok': ok, 'reason': reason, 'family': a.family, 'device': dev_name, 'runtime': rt_name, 'bundle_id': bundle_id,
              'passed': passed, 'failed': fails, 'warnings': warns, 'js_errors': jserr, 'seconds': round(time.time() - started)}
    json.dump(result, open(os.path.join(out, 'result.json'), 'w'), indent=2, ensure_ascii=False)

    summary = os.environ.get('GITHUB_STEP_SUMMARY')
    if summary:
        with open(summary, 'a') as f:
            f.write('### iOS self-test: %s on %s (%s) %s\n\n' % (a.family, dev_name, rt_name, 'PASSED' if ok else 'FAILED'))
            if not ok:
                f.write('**Reason:** %s\n\n' % reason)
            for l in passed + fails:
                f.write('- %s %s\n' % ('✅' if l.startswith('SELFTEST PASS') else '❌', l[len('SELFTEST '):]))
            for l in warns + jserr:
                f.write('- ⚠️ %s\n' % l[len('SELFTEST '):])
            f.write('\nScreenshots, video and logs: artifact of this run.\n\n')
    for l in warns + jserr:
        print('::warning title=iOS self-test (%s)::%s' % (a.family, l[len('SELFTEST '):]))
    if not ok:
        print('::error title=iOS self-test (%s)::%s' % (a.family, reason))
        tail = open(files['console'], errors='replace').read()[-3000:]
        print('--- last app console output ---\n' + tail)
    print('RESULT %s: %s' % (a.family, 'PASS' if ok else 'FAIL - ' + reason), flush=True)
    sys.exit(0 if ok else 1)

if __name__ == '__main__':
    main()
