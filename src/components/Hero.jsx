import { LINKS } from '../data.js';
import Icon from './Icons.jsx';
import { HeroVisual } from './Visuals.jsx';

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="wrap hero-grid">
        <div className="hero-copy">
          <p className="label">CSE-AIML UNDERGRADUATE</p>
          <h1>DURGAM VANI</h1>
          <p className="role">Software Engineering Intern Candidate</p>
          <p className="lead">Computer Science undergraduate building AI-based and full-stack applications, with strong foundations in Java, Python, JavaScript, Data Structures and Object-Oriented Programming.</p>
          <div className="row">
            <a className="btn" href="#projects">View Projects</a>
            <a className="btn btn-ghost" href={LINKS.resume} target="_blank" rel="noopener noreferrer">View Resume</a>
            <a className="btn btn-ghost" href={LINKS.resume} download="Vani_Resume.pdf">Download Resume</a>
          </div>
          <div className="row socials">
            <a href={LINKS.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub profile"><Icon name="github" /></a>
            <a href={LINKS.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn profile"><Icon name="linkedin" /></a>
            <a href={`mailto:${LINKS.email}`} aria-label="Send an email"><Icon name="mail" /></a>
          </div>
        </div>
        <HeroVisual />
      </div>
    </section>
  );
}
