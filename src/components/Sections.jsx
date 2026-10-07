import { useState } from 'react';
import { LINKS, SKILLS, EXPERIENCE, EDUCATION, CERTIFICATIONS } from '../data.js';
import Icon from './Icons.jsx';

const Head = ({ title }) => <h2>{title}</h2>;

export function About() {
  return (
    <section id="about" className="section">
      <div className="wrap about reveal">
        <div>
          <h2>About Me</h2>
          <p>I am a B.Tech CSE-AIML student at Malla Reddy University, Hyderabad, with strong foundations in Java, JavaScript, Python, Data Structures and Object-Oriented Programming.</p>
          <p>I build AI-based and full-stack applications using React.js, Flask and REST APIs, and I am seeking a Software Engineering Internship to contribute to scalable and reliable software solutions.</p>
        </div>
        <div className="code" role="img" aria-label="Summary of my profile as a code snippet">
          <div className="code-bar"><i /><i /><i /><span>profile.js</span></div>
<pre>{`const durgamVani = {
  education: "B.Tech CSE-AIML",
  languages: ["Java", "JavaScript", "Python"],
  builds: ["AI-based apps", "Full-stack apps"],
  seeking: "Software Engineering Internship",
};`}</pre>
        </div>
      </div>
    </section>
  );
}

export function Skills() {
  return (
    <section id="skills" className="section">
      <div className="wrap">
        <Head title="Skills" />
        <div className="grid skills">
          {SKILLS.map((g) => (
            <div key={g.title} className="card reveal">
              <h3>{g.title}</h3>
              <div className="tags">{g.items.map((i) => <span key={i}>{i}</span>)}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Experience() {
  const e = EXPERIENCE;
  return (
    <section id="experience" className="section">
      <div className="wrap narrow">
        <Head title="Experience" />
        <div className="timeline"><article className="tl-item reveal">
          <p className="muted">{e.period}</p>
          <h3>{e.role}</h3>
          <p className="muted">{e.org}</p>
          <ul>{e.points.map((p) => <li key={p}>{p}</li>)}</ul>
        </article></div>
      </div>
    </section>
  );
}

export function Education() {
  return (
    <section id="education" className="section">
      <div className="wrap narrow">
        <Head title="Education" />
        <div className="timeline">
          {EDUCATION.map((s) => (
            <article key={s.school} className={s.current ? 'tl-item current reveal' : 'tl-item reveal'}>
              <p className="muted">{s.period}</p>
              <h3>{s.school}</h3>
              <p>{s.degree}</p>
              <p className="muted">{s.score} &middot; {s.place}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Certifications() {
  return (
    <section id="certifications" className="section">
      <div className="wrap">
        <Head title="Certifications" />
        <div className="grid certs">
          {CERTIFICATIONS.map((c) => (
            <div key={c.name} className="card reveal"><h3>{c.name}</h3><p className="muted">{c.issuer}</p></div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Contact() {
  const [f, setF] = useState({ name: '', email: '', message: '' });
  const set = (k) => (e) => setF({ ...f, [k]: e.target.value });
  const submit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio message from ${f.name}`);
    const body = encodeURIComponent(`${f.message}\n\nFrom: ${f.name} (${f.email})`);
    window.location.href = `mailto:${LINKS.email}?subject=${subject}&body=${body}`;
  };
  return (
    <section id="contact" className="section">
      <div className="wrap contact">
        <div>
          <Head title="Let's Connect" />
          <p className="lead-sm">Durgam Vani</p>
          <p><a href={`mailto:${LINKS.email}`}>{LINKS.email}</a></p>
          <p><a href={`tel:${LINKS.phone.replace(/\s/g, '')}`}>{LINKS.phone}</a></p>
          <div className="row socials">
            <a href={LINKS.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn profile"><Icon name="linkedin" /></a>
            <a href={LINKS.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub profile"><Icon name="github" /></a>
          </div>
        </div>
        <form onSubmit={submit} className="form">
          <label>Name<input required value={f.name} onChange={set('name')} autoComplete="name" /></label>
          <label>Email<input required type="email" value={f.email} onChange={set('email')} autoComplete="email" /></label>
          <label>Message<textarea required rows="5" value={f.message} onChange={set('message')} /></label>
          <button className="btn" type="submit">Send Message</button>
          <p className="muted small">This opens your email app with the message ready to send to me.</p>
        </form>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="footer">
      <div className="wrap row between">
        <p>&copy; {new Date().getFullYear()} Durgam Vani</p>
        <div className="row socials">
          <a href={LINKS.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn profile"><Icon name="linkedin" size={18} /></a>
          <a href={LINKS.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub profile"><Icon name="github" size={18} /></a>
          <a href={`mailto:${LINKS.email}`} aria-label="Send an email"><Icon name="mail" size={18} /></a>
        </div>
      </div>
    </footer>
  );
}
