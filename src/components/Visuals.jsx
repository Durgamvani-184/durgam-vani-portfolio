const L = [[70, [70, 150, 230, 310]], [170, [40, 110, 190, 270, 340]], [270, [70, 150, 230, 310]], [370, [130, 230]]];
export function HeroVisual() {
  const lines = [];
  L.slice(0, -1).forEach(([x, ys], i) => ys.forEach((y) => L[i + 1][1].forEach((y2) => lines.push([x, y, L[i + 1][0], y2]))));
  return (
    <div className="hv" role="img" aria-label="Abstract neural network illustration">
      <svg viewBox="0 0 440 380">
        <g className="hv-lines">{lines.map((l, i) => <line key={i} x1={l[0]} y1={l[1]} x2={l[2]} y2={l[3]} />)}</g>
        {L.flatMap(([x, ys]) => ys.map((y) => <circle key={x + '-' + y} cx={x} cy={y} r="6" className="node" />))}
        <path className="br" d="M10 40V10h30M400 10h30v30M430 340v30h-30M40 370H10v-30" />
      </svg>
      {['Java', 'Python', 'React.js', 'Flask'].map((t, i) => <span key={t} className={`fc fc${i}`}>{t}</span>)}
    </div>
  );
}
export function ProjectVisual({ kind }) {
  if (kind === 'vision') return (
    <svg viewBox="0 0 320 220" className="pvis" role="img" aria-label="Abstract face detection and gaze tracking illustration">
      <path className="br" d="M30 60V30h30M260 30h30v30M290 160v30h-30M60 190H30v-30" />
      <ellipse cx="160" cy="108" rx="42" ry="52" className="face" />
      <circle cx="144" cy="98" r="4" className="dot" /><circle cx="176" cy="98" r="4" className="dot" />
      <path className="gaze" d="M144 98 108 84M176 98 212 84" />
      <rect x="112" y="52" width="96" height="112" rx="6" className="box" />
      <rect x="40" y="40" width="240" height="2" className="scan" />
    </svg>
  );
  return (
    <svg viewBox="0 0 320 220" className="pvis" role="img" aria-label="Abstract sound wave and emotion illustration">
      <g className="bars">{Array.from({ length: 21 }, (_, i) => {
        const h = 20 + Math.abs(Math.sin(i * 0.7)) * 90;
        return <rect key={i} x={30 + i * 13} y={110 - h / 2} width="7" height={h} rx="3" style={{ animationDelay: `${i * 0.08}s` }} />;
      })}</g>
      <path className="gaze" d="M60 180q100 30 200 0" />
      <circle cx="110" cy="188" r="3" className="dot" /><circle cx="210" cy="188" r="3" className="dot" />
    </svg>
  );
}
