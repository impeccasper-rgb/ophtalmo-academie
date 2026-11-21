// hand-drawn marker loop: irregular ellipse, clockwise, overshooting its start (shared with src/motion.js)
function rng(seed) { let s = seed >>> 0 || 1; return () => (s = (s * 1664525 + 1013904223) >>> 0) / 4294967296; }
function loopPath(cx, cy, rx, ry, seed, o) {
  o = o || {}; const R = rng(seed), tilt = (o.tilt != null ? o.tilt : (R() - .5) * .5), over = o.over != null ? o.over : .32 + R() * .18;
  const a0 = -Math.PI * (.62 + R() * .2), n = 26, p1 = R() * 6.3, p2 = R() * 6.3, k1 = .035 + R() * .03, k2 = .02 + R() * .02, drift = o.drift != null ? o.drift : .1 + R() * .05;
  const pts = [];
  for (let i = 0; i <= n; i++) {
    const u = i / n, a = a0 + u * (Math.PI * 2 + over);
    const r = 1 + k1 * Math.sin(2 * a + p1) + k2 * Math.sin(3 * a + p2) - drift * (u - .5);
    const x = rx * r * Math.cos(a), y = ry * r * Math.sin(a);
    pts.push([cx + x * Math.cos(tilt) - y * Math.sin(tilt), cy + x * Math.sin(tilt) + y * Math.cos(tilt)]);
  }
  let d = 'M' + pts[0][0].toFixed(1) + ' ' + pts[0][1].toFixed(1);
  for (let i = 0; i < pts.length - 1; i++) {
    const p0 = pts[i - 1] || pts[i], p1_ = pts[i], p2_ = pts[i + 1], p3 = pts[i + 2] || p2_;
    const c1 = [p1_[0] + (p2_[0] - p0[0]) / 6, p1_[1] + (p2_[1] - p0[1]) / 6], c2 = [p2_[0] - (p3[0] - p1_[0]) / 6, p2_[1] - (p3[1] - p1_[1]) / 6];
    d += 'C' + c1.map(v => v.toFixed(1)).join(' ') + ' ' + c2.map(v => v.toFixed(1)).join(' ') + ' ' + p2_[0].toFixed(1) + ' ' + p2_[1].toFixed(1);
  }
  return d;
}
module.exports = { loopPath };
