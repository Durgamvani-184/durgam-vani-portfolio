import { SNAPSHOT } from '../data.js';
export function Snapshot() {
  return (
    <section className="snap" aria-label="Profile snapshot">
      <div className="wrap snap-grid">
        {SNAPSHOT.map(([a, b]) => (
          <div key={a} className="snap-card reveal"><strong>{a}</strong><span>{b}</span></div>
        ))}
      </div>
    </section>
  );
}
