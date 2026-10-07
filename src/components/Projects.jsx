import { useRef, useState } from 'react';
import { PROJECTS } from '../data.js';
import Icon from './Icons.jsx';
import { ProjectVisual } from './Visuals.jsx';

function Details({ p, dialogRef, onClose }) {
  return (
    <dialog ref={dialogRef} className="modal" aria-labelledby="pd-title" onClose={onClose}
      onClick={(e) => e.target === e.currentTarget && dialogRef.current.close()}>
      {p && (
        <div className="modal-in">
          <button className="icon-btn modal-x" aria-label="Close details" onClick={() => dialogRef.current.close()}><Icon name="close" /></button>
          <h3 id="pd-title">{p.name}</h3>
          <h4>Problem</h4><p>{p.problem}</p>
          <h4>Solution</h4><p>{p.solution}</p>
          <h4>Key features</h4><ul>{p.features.map((f) => <li key={f}>{f}</li>)}</ul>
          <h4>Technologies</h4><div className="tags">{p.tags.map((t) => <span key={t}>{t}</span>)}</div>
          <h4>My contribution</h4><ul>{p.contribution.map((c) => <li key={c}>{c}</li>)}</ul>
          {p.extra && (<><h4>More details</h4><p>{p.extra}</p></>)}
          <a className="btn" href={p.repo} target="_blank" rel="noopener noreferrer"><Icon name="github" size={18} /> View on GitHub</a>
        </div>
      )}
    </dialog>
  );
}

export default function Projects() {
  const ref = useRef(null);
  const [sel, setSel] = useState(null);
  const open = (p) => { setSel(p); requestAnimationFrame(() => ref.current?.showModal()); };

  return (
    <section id="projects" className="section">
      <div className="wrap">
        <p className="kicker">Featured Projects</p>
        <h2>Projects</h2>
        <p className="muted sub">AI and software projects built to solve practical problems.</p>
        <div className="projects">
          {PROJECTS.map((p) => (
            <article key={p.id} className="project reveal">
              <div className="project-art"><ProjectVisual kind={p.visual} /></div>
              <div className="project-body">
                <h3>{p.name}</h3>
                <p>{p.summary}</p>
                <div className="tags">{p.tags.map((t) => <span key={t}>{t}</span>)}</div>
                <ul className="chips">{p.chips.map((c) => <li key={c}>{c}</li>)}</ul>
                <div className="row">
                  <a className="btn" href={p.repo} target="_blank" rel="noopener noreferrer"><Icon name="github" size={18} /> View on GitHub</a>
                  <button className="btn btn-ghost" onClick={() => open(p)} aria-haspopup="dialog">View Details</button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
      <Details p={sel} dialogRef={ref} onClose={() => setSel(null)} />
    </section>
  );
}
