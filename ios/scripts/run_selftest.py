#!/usr/bin/env python3
"""Run the in-app self-test (ios/web-overlay/selftest.js) on an iOS simulator and collect evidence.

macOS + Xcode only (used by .github/workflows/ios.yml). Never crashes on a slow or flaky simulator:
every simctl call has a timeout and only boot/install/launch failures are fatal.

Pass 1 (verdict + screenshots, no video):
  pick the newest iPhone/iPad simulator -> boot -> install App.app -> launch in French
  -> follow the app's stdout (Capacitor console bridge) and the unified log for "SELFTEST " lines
  -> on "SELFTEST SHOT <name>": screenshot in a worker thread, then write an ack file into the installed bundle
     (public/__acks/<name>.txt; Capacitor serves bundle files from disk on each request) that the page polls, so the walk waits for the screenshot instead of guessing
  -> periodic screenshots every 20 s while idle.
Pass 2 (optional --video, evidence only, never changes the verdict):
  relaunch, record the screen with `simctl io recordVideo` while the self-test runs again (no screenshots meanwhile:
  screenshot + recordVideo together hang on GitHub's GPU-less runners).

Exit 1 if pass 1 has any "SELFTEST FAIL", no "SELFTEST PASS done", a crash, or a fatal simctl error.

Usage: python3 ios/scripts/run_selftest.py --app build/Build/Products/Debug-iphonesimulator/App.app \
           --family iphone --out artifacts/iphone [--video] [--timeout 600] [--lang fr]
"""
import argparse, glob, json, os, plistlib, queue, re, shutil, signal, subprocess, sys, threading, time

T0 = time.time()

def log(msg):
    print('[%6.1fs] %s' % (time.time() - T0, msg), flush=True)

class Result:
    def __init__(self, returncode, stdout='', stderr=''):
        self.returncode, self.stdout, self.stderr = returncode, stdout, stderr

def simctl(*a, timeout=120, quiet=False):
    """Run `xcrun simctl ...`; never raises. returncode -9 = timed out (process killed)."""
    cmd = ['xcrun', 'simctl'] + list(a)
    if not quiet:
        log('$ ' + ' '.join(cmd))
    try:
        p = subprocess.run(cmd, text=True, capture_output=True, timeout=timeout)
        if p.returncode != 0 and not quiet:
            log('  -> exit %s: %s' % (p.returncode, (p.stderr or p.stdout or '').strip()[:300]))
        return Result(p.returncode, p.stdout, p.stderr)
    except subprocess.TimeoutExpired:
        log('  -> timed out after %ss (killed)' % timeout)
        return Result(-9, '', 'timeout')
    except Exception as e:  # noqa: BLE001
        log('  -> error %r' % e)
        return Result(-1, '', str(e))

def version_key(s):
    return tuple(int(x) for x in re.findall(r'\d+', s))

def pick_device(family):
    r1 = simctl('list', '-j', 'devices', 'available', timeout=180)
    r2 = simctl('list', '-j', 'runtimes', 'available', timeout=180)
    if r1.returncode or r2.returncode:
        raise RuntimeError('simctl list failed')
    data, runtimes = json.loads(r1.stdout), json.loads(r2.stdout)['runtimes']
    ios = sorted([r for r in runtimes if r.get('platform', 'iOS') == 'iOS' and 'iOS' in r['name'] and r.get('isAvailable', True)],
                 key=lambda r: version_key(r['version']), reverse=True)
    prefix = 'iPhone' if family == 'iphone' else 'iPad'
    prefs = ['Pro Max', 'Pro', 'Air', ''] if family == 'iphone' else ['Pro 13', 'Pro (12.9', 'Air 13', 'Pro', 'Air', '']
    for rt in ios:
        devs = [d for d in data['devices'].get(rt['identifier'], []) if d['name'].startswith(prefix) and d.get('isAvailable', True)]
        devs = [d for d in devs if 'SE' not in d['name'] and 'mini' not in d['name']] or devs
        for p in prefs:
            m = [d for d in devs if p in d['name']]
            if m:
                return m[0]['udid'], m[0]['name'], rt['name']
    if not ios:
        raise RuntimeError('no iOS simulator runtime available')
    rt = ios[0]
    types = [t for t in rt.get('supportedDeviceTypes', []) if t['name'].startswith(prefix)]
    if not types:
        raise RuntimeError('no %s device type for %s' % (prefix, rt['name']))
    t = types[-1]
    r = simctl('create', 'Selftest ' + t['name'], t['identifier'], rt['identifier'])
    if r.returncode:
        raise RuntimeError('simctl create failed')
    return r.stdout.strip(), t['name'], rt['name']


class Shooter(threading.Thread):
    """Screenshots in a worker thread: the log follower never blocks; timeouts are retried, then screenshots are disabled."""
    def __init__(self, udid, shots_dir, ack_dir):
        super().__init__(daemon=True)
        self.udid, self.dir, self.ack_dir = udid, shots_dir, ack_dir
        self.q, self.busy, self.disabled, self.fails, self.ok, self.failed = queue.Queue(), False, False, 0, [], []

    def run(self):
        while True:
            name, ack = self.q.get()
            if name is None:
                return
            self.busy = True
            path = os.path.join(self.dir, re.sub(r'[^\w.-]+', '_', name) + '.png')
            done = False
            if not self.disabled:
                for attempt, to in enumerate((40, 30)):
                    r = simctl('io', self.udid, 'screenshot', path, timeout=to, quiet=attempt == 0 and not name.startswith('t'))
                    if r.returncode == 0 and os.path.exists(path):
                        done = True; break
                    time.sleep(2)
                    if os.path.exists(path) and os.path.getsize(path) > 0:  # the killed attempt finished writing anyway
                        done = True; break
                    log('screenshot %s attempt %d failed (%s)' % (name, attempt + 1, 'timeout' if r.returncode == -9 else r.returncode))
                if done:
                    self.fails = 0; self.ok.append(name)
                else:
                    self.fails += 1; self.failed.append(name)
                    if self.fails >= 3:
                        self.disabled = True
                        log('screenshots disabled after 3 consecutive failures; the self-test continues without them')
            if ack and self.ack_dir:
                try:
                    open(os.path.join(self.ack_dir, re.sub(r'[^\w.-]+', '_', name) + '.txt'), 'w').write('ok' if done else 'fail')
                except OSError as e:
                    log('ack write failed: %r' % e)
            self.busy = False

    def shot(self, name, ack=False):
        self.q.put((name, ack))

    def drain(self, timeout=120):
        end = time.time() + timeout
        while (not self.q.empty() or self.busy) and time.time() < end:
            time.sleep(0.3)


class Follower:
    """Reads new SELFTEST lines from the app console file and the unified-log file, deduplicated per pass."""
    def __init__(self, files):
        self.files, self.pos, self.seen = files, {k: 0 for k in files}, set()

    def skip_existing(self):
        for k, p in self.files.items():
            try: self.pos[k] = os.path.getsize(p)
            except OSError: self.pos[k] = 0
        self.seen = set()

    def poll(self):
        out = []
        for src, path in self.files.items():
            try:
                with open(path, 'r', errors='replace') as f:
                    f.seek(self.pos[src]); chunk = f.read(); self.pos[src] = f.tell()
            except FileNotFoundError:
                continue
            for raw in chunk.splitlines():
                if 'SELFTEST ' not in raw or 'eventMessage CONTAINS' in raw:
                    continue
                # one physical line can hold several messages when stdout and stderr interleave: split them,
                # and drop a trailing "2026-11-21 18:13:55.387 App[7909:29160]" prefix of the next message
                for seg in re.split(r'(?=SELFTEST )', raw)[1:]:
                    line = re.sub(r'\s*\d{4}-\d\d-\d\d[ T]\d\d:\d\d:\d\d.*$', '', seg).strip()
                    if line and line not in self.seen:
                        self.seen.add(line); out.append((src, line))
        return out


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument('--app', required=True)
    ap.add_argument('--family', choices=['iphone', 'ipad'], default='iphone')
    ap.add_argument('--out', required=True)
    ap.add_argument('--timeout', type=int, default=600, help='seconds to wait for "SELFTEST ... done" in pass 1')
    ap.add_argument('--video', action='store_true', help='pass 2: record a video of a second walk (evidence only)')
    ap.add_argument('--video-timeout', type=int, default=300)
    ap.add_argument('--lang', default='fr', help='simulator app language (the walk expects to start in FR)')
    a = ap.parse_args()

    out = os.path.abspath(a.out)
    shots = os.path.join(out, 'screenshots')
    os.makedirs(shots, exist_ok=True)
    app = os.path.abspath(a.app)
    bundle_id = plistlib.load(open(os.path.join(app, 'Info.plist'), 'rb'))['CFBundleIdentifier']
    res = {'ok': False, 'reason': '', 'family': a.family, 'bundle_id': bundle_id, 'device': None, 'runtime': None,
           'passed': [], 'failed': [], 'warnings': [], 'js_errors': [], 'notes': [], 'screenshots': [], 'video': None}
    events, procs, handles = [], {}, {}
    files = {
        'console': os.path.join(out, 'app-console.log'),      # app stdout/stderr (Capacitor "⚡️ [log] - ..." lines)
        'unified': os.path.join(out, 'selftest-unified.log'),  # unified log, SELFTEST lines (NSLog in Debug builds)
        'system': os.path.join(out, 'app-unified.log'),        # unified log of the app + WebKit (crash diagnosis)
    }
    udid, shooter, started = None, None, time.time()

    def stop(name, sig=signal.SIGTERM, wait=15):
        p = procs.get(name)
        if p and p.poll() is None:
            try:
                p.send_signal(sig); p.wait(timeout=wait)
            except Exception:  # noqa: BLE001
                try: p.kill()
                except Exception: pass  # noqa: BLE001

    def launch(console_path, env_extra):
        env = dict(os.environ, SIMCTL_CHILD_NSUnbufferedIO='YES', **env_extra)
        lang_args = ['-AppleLanguages', '(%s)' % a.lang, '-AppleLocale', {'fr': 'fr_CA', 'en': 'en_CA'}.get(a.lang, a.lang)]
        cmd = ['xcrun', 'simctl', 'launch', '--console-pty', '--terminate-running-process', udid, bundle_id] + lang_args
        log('$ ' + ' '.join(cmd))
        h = open(console_path, 'a'); handles[console_path] = h
        return subprocess.Popen(cmd, stdout=h, stderr=subprocess.STDOUT, stdin=subprocess.DEVNULL, env=env)

    def app_running():
        r = simctl('spawn', udid, 'launchctl', 'list', timeout=60, quiet=True)
        return r.returncode == 0 and bundle_id in (r.stdout or '')

    def follow(follower, timeout, on_shot):
        """Returns (done_line, crash_reason, lines)."""
        t_start, last_periodic, detached, lines = time.time(), time.time(), False, []
        last_line = time.time()
        while True:
            for src, line in follower.poll():
                lines.append(line); last_line = time.time()
                events.append({'t': round(time.time() - started, 1), 'pass': follower.name, 'src': src, 'line': line})
                log(('%s ' % follower.name) + line)
                m = re.match(r'SELFTEST SHOT ([A-Za-z0-9_.-]+?)(?=\d{4}-\d\d-\d\d|\s|$)', line)
                if m and on_shot:
                    on_shot(m.group(1))
                if re.match(r'SELFTEST (PASS|FAIL) done\b', line):
                    return line, None, lines
            now = time.time()
            # periodic screenshots only while the walk is silent (WebView boot, a stall): never compete with step shots
            if on_shot and shooter and now - last_line >= 25 and now - last_periodic >= 30 and shooter.q.empty() and not shooter.busy:
                shooter.shot('t%03d' % int(now - started)); last_periodic = now
            if procs['app'].poll() is not None and not detached:
                if app_running():
                    detached = True
                    log('note: console relay ended (exit %s) but the app is running; following the unified log' % procs['app'].returncode)
                else:
                    time.sleep(3)
                    for src, line in follower.poll():
                        lines.append(line); events.append({'t': round(time.time() - started, 1), 'pass': follower.name, 'src': src, 'line': line})
                    return None, 'app process ended before the self-test finished (simctl exit %s)' % procs['app'].returncode, lines
            if now - t_start > timeout:
                return None, None, lines
            time.sleep(0.3)

    try:
        udid, dev_name, rt_name = pick_device(a.family)
        res['device'], res['runtime'] = dev_name, rt_name
        log('device: %s (%s) %s  bundle: %s' % (dev_name, rt_name, udid, bundle_id))
        simctl('boot', udid, timeout=300)
        if simctl('bootstatus', udid, '-b', timeout=900).returncode != 0:
            raise RuntimeError('simulator did not finish booting')
        simctl('status_bar', udid, 'override', '--time', '9:41', '--batteryState', 'charged', '--batteryLevel', '100',
               '--cellularBars', '4', '--wifiBars', '3', timeout=90)
        simctl('ui', udid, 'appearance', 'light', timeout=60)
        if simctl('install', udid, app, timeout=600).returncode != 0:
            raise RuntimeError('simctl install failed')
        r = simctl('get_app_container', udid, bundle_id, 'app', timeout=60)
        ack_dir = os.path.join(r.stdout.strip(), 'public', '__acks') if r.returncode == 0 and r.stdout.strip() else None
        if ack_dir:
            shutil.rmtree(ack_dir, ignore_errors=True); os.makedirs(ack_dir, exist_ok=True)
            open(os.path.join(ack_dir, 'hello.txt'), 'w').write('runner')  # tells selftest.js to wait for screenshot acks
        else:
            res['notes'].append('no app container path: the walk uses fixed pauses instead of screenshot acks')

        for k in ('unified', 'system'):
            handles[k] = open(files[k], 'w')
        procs['unified'] = subprocess.Popen(['xcrun', 'simctl', 'spawn', udid, 'log', 'stream', '--style', 'compact', '--level', 'debug',
                                             '--predicate', 'eventMessage CONTAINS "SELFTEST"'], stdout=handles['unified'], stderr=subprocess.STDOUT)
        procs['system'] = subprocess.Popen(['xcrun', 'simctl', 'spawn', udid, 'log', 'stream', '--style', 'compact',
                                            '--predicate', 'process == "App" OR process CONTAINS "WebContent"'], stdout=handles['system'], stderr=subprocess.STDOUT)
        shooter = Shooter(udid, shots, ack_dir)
        shooter.start()

        # ---------- pass 1: verdict + screenshots ----------
        follower = Follower({'console': files['console'], 'unified': files['unified']}); follower.name = 'p1'
        procs['app'] = launch(files['console'], {})
        done, crash, lines = follow(follower, a.timeout, lambda n: shooter.shot(n, ack=True))
        shooter.drain(120)
        res['passed'] = [l for l in lines if l.startswith('SELFTEST PASS')]
        res['failed'] = [l for l in lines if l.startswith('SELFTEST FAIL')]
        res['warnings'] = [l for l in lines if l.startswith('SELFTEST WARN')]
        res['js_errors'] = [l for l in lines if l.startswith('SELFTEST JSERROR')]
        res['ok'] = bool(done) and done.startswith('SELFTEST PASS') and not res['failed'] and not crash
        res['reason'] = 'ok' if res['ok'] else (crash or ('; '.join(res['failed'][:3]) if res['failed'] else
                        ('timeout after %ss without any SELFTEST line' % a.timeout if not lines else 'timeout after %ss before "done"' % a.timeout)))

        shooter.shot('zz-final-light'); shooter.drain(90)
        if simctl('ui', udid, 'appearance', 'dark', timeout=60).returncode == 0:
            time.sleep(4); shooter.shot('zz-final-dark'); shooter.drain(90)
            simctl('ui', udid, 'appearance', 'light', timeout=60)

        # ---------- pass 2: video of a second walk (evidence only) ----------
        if a.video:
            if ack_dir:
                shutil.rmtree(ack_dir, ignore_errors=True)  # no screenshots now: the walk must not wait for acks
            simctl('terminate', udid, bundle_id, timeout=60)
            stop('app')
            video = os.path.join(out, 'run.mp4')
            procs['video'] = subprocess.Popen(['xcrun', 'simctl', 'io', udid, 'recordVideo', '--codec=h264', '--force', video],
                                              stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)
            time.sleep(3)
            follower.skip_existing(); follower.name = 'p2'
            procs['app'] = launch(os.path.join(out, 'app-console-video.log'), {})
            follower.files['console'] = os.path.join(out, 'app-console-video.log'); follower.pos['console'] = 0
            done2, crash2, _ = follow(follower, a.video_timeout, None)
            time.sleep(2)
            stop('video', signal.SIGINT, wait=60)  # SIGINT lets simctl finalise the mp4
            ok_video = os.path.exists(video) and os.path.getsize(video) > 10000
            res['video'] = os.path.basename(video) if ok_video else None
            res['notes'].append('video pass: %s%s' % (done2 or crash2 or 'timeout', '' if ok_video else ' (no usable video file)'))
    except Exception as e:  # noqa: BLE001 - a broken simulator must still produce a report
        res['ok'] = False
        res['reason'] = res['reason'] if res['reason'] and res['reason'] != 'ok' else 'runner error: %s' % e
        log('runner error: %r' % e)
    finally:
        if shooter:
            shooter.drain(30); shooter.q.put((None, False))
            res['screenshots'] = shooter.ok
            if shooter.failed:
                res['notes'].append('screenshots failed: ' + ', '.join(shooter.failed))
        stop('video', signal.SIGINT, wait=30)
        if udid:
            simctl('terminate', udid, bundle_id, timeout=60, quiet=True)
        for k in ('app', 'unified', 'system'):
            stop(k)
        for h in handles.values():
            try: h.close()
            except Exception: pass  # noqa: BLE001
        crashdir = os.path.join(out, 'crash-reports')
        for p in glob.glob(os.path.expanduser('~/Library/Logs/DiagnosticReports/*')):
            if os.path.basename(p).startswith(('App', 'com.apple.WebKit')) and os.path.getmtime(p) >= started:
                os.makedirs(crashdir, exist_ok=True); shutil.copy2(p, crashdir)
                res['notes'].append('crash report: ' + os.path.basename(p))
        if udid:
            simctl('shutdown', udid, timeout=180)

    res['seconds'] = round(time.time() - started)
    with open(os.path.join(out, 'selftest.log'), 'w') as f:
        f.write('\n'.join('[%6.1fs %s %-7s] %s' % (e['t'], e['pass'], e['src'], e['line']) for e in events) + '\n')
    json.dump(res, open(os.path.join(out, 'result.json'), 'w'), indent=2, ensure_ascii=False)

    summary = os.environ.get('GITHUB_STEP_SUMMARY')
    if summary:
        with open(summary, 'a') as f:
            f.write('### iOS self-test: %s on %s (%s): %s\n\n' % (a.family, res['device'], res['runtime'], 'PASSED' if res['ok'] else 'FAILED'))
            if not res['ok']:
                f.write('**Reason:** %s\n\n' % res['reason'])
            for l in res['passed'] + res['failed']:
                f.write('- %s %s\n' % ('✅' if l.startswith('SELFTEST PASS') else '❌', l[len('SELFTEST '):]))
            for l in res['warnings'] + res['js_errors']:
                f.write('- ⚠️ %s\n' % l[len('SELFTEST '):])
            for n in res['notes']:
                f.write('- ℹ️ %s\n' % n)
            f.write('\n%d screenshots%s. Evidence: run artifact, and branch `ios-evidence` (JPEG copies).\n\n' % (len(res['screenshots']), ', video' if res['video'] else ''))
    for l in res['warnings'] + res['js_errors']:
        print('::warning title=iOS self-test (%s)::%s' % (a.family, l[len('SELFTEST '):]))
    if not res['ok']:
        print('::error title=iOS self-test (%s)::%s' % (a.family, res['reason']))
        try:
            print('--- last app console output ---\n' + open(files['console'], errors='replace').read()[-3000:])
        except OSError:
            pass
    log('RESULT %s: %s' % (a.family, 'PASS' if res['ok'] else 'FAIL - ' + res['reason']))
    sys.exit(0 if res['ok'] else 1)


if __name__ == '__main__':
    main()
