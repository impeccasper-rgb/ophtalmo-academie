/* Profile kit (avatar, highlight covers) + raster assets for the UI capture. Static (no timeline). */
var KIT = (function () {
  var KT = {};
  function icon(name) {
    var st = 'fill="none" stroke="#D8FF3A" stroke-width="22" stroke-linecap="round" stroke-linejoin="round" filter="url(#glowL)"';
    if (name === 'defis') return '<rect x="250" y="250" width="524" height="120" rx="34" ' + st + '/><rect x="250" y="452" width="524" height="120" rx="34" fill="#D8FF3A" filter="url(#glowL)"/><rect x="250" y="654" width="524" height="120" rx="34" ' + st + '/>' +
      '<text x="318" y="335" font-family="Bricolage Grotesque" font-weight="800" font-size="84" fill="#D8FF3A">A</text><text x="318" y="537" font-family="Bricolage Grotesque" font-weight="800" font-size="84" fill="#0A0F40">B</text><text x="318" y="739" font-family="Bricolage Grotesque" font-weight="800" font-size="84" fill="#D8FF3A">C</text>' +
      '<path d="M420,310 H690 M420,512 H690 M420,714 H690" stroke="#D8FF3A" stroke-width="18" stroke-linecap="round" opacity=".55"/><path d="M430,512 H690" stroke="#0A0F40" stroke-width="18" stroke-linecap="round"/>';
    if (name === 'mecanismes') return '<path d="M190,660 C240,300 784,300 834,660" ' + st + '/><path d="M240,690 Q380,560 500,650 M524,650 Q644,560 784,690" ' + st + '/><ellipse cx="512" cy="740" rx="170" ry="70" ' + st + ' opacity=".7"/><path d="M380,610 l0,-70 M640,610 l0,-70" ' + st + '/><path d="M360,560 l20,-26 l20,26 M620,560 l20,-26 l20,26" ' + st + '/>';
    if (name === 'coulisses') return '<path d="' + Motion.loop(470, 560, 230, 190, 21, { tilt: -.12, over: .45 }) + '" ' + st + '/><g transform="rotate(38 700 330)"><rect x="660" y="160" width="80" height="300" rx="16" ' + st + '/><path d="M660,460 L700,540 L740,460" ' + st + '/></g><circle cx="470" cy="560" r="44" fill="#D8FF3A" filter="url(#glowL)"/>';
    if (name === 'decembre') return '<rect x="220" y="260" width="584" height="540" rx="56" ' + st + '/><path d="M220,400 H804 M380,200 V310 M644,200 V310" ' + st + '/><text x="512" y="700" text-anchor="middle" font-family="Bricolage Grotesque" font-weight="800" font-size="190" fill="#D8FF3A" letter-spacing="-6" filter="url(#glowL)">DÉC</text>';
    return '';
  }
  KT.make = function (S, what) {
    var defs = '<defs><filter id="glowL" x="-50%" y="-50%" width="200%" height="200%"><feGaussianBlur stdDeviation="10" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter></defs>';
    if (what === 'avatar') {
      S.style.width = '1080px'; S.style.height = '1080px'; S.style.background = '#1F2CFF';
      K.div(S, 'inset:0;background:radial-gradient(closest-side,rgba(255,255,255,.10),rgba(255,255,255,0) 70%)');
      K.mark(S, 'left:190px;top:205px;width:700px;height:658px', { sw: 84 });
    } else if (what === 'craoasset') { // the CRAO schematic fed to the real « Voir » card (photo slot 440×400, ×2)
      S.style.width = '880px'; S.style.height = '800px'; S.style.background = '#000';
      K.div(S, 'inset:0', ART.fundus({ kind: 'crao', bg: '#000' })).querySelector('svg').setAttribute('width', '880');
    } else {
      S.style.width = '1080px'; S.style.height = '1920px';
      S.style.background = 'radial-gradient(70% 45% at 50% 50%, #151c6e 0%, #060a2a 70%, #03051a 100%)';
      K.div(S, 'left:140px;top:560px;width:800px;height:800px;border-radius:50%;border:3px solid rgba(90,104,255,.7);box-shadow:0 0 60px rgba(74,87,255,.45),inset 0 0 60px rgba(74,87,255,.25)');
      K.div(S, 'left:170px;top:590px;width:740px;height:740px', '<svg viewBox="0 0 1024 1024" width="740" height="740">' + defs + icon(what) + '</svg>');
    }
    return {};
  };
  return KT;
})();
