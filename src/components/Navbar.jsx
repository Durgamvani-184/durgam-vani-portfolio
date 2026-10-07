import { useEffect, useState } from 'react';
import { NAV, LINKS } from '../data.js';
import Icon from './Icons.jsx';

const id = (n) => n.toLowerCase();

export default function Navbar({ theme, toggleTheme }) {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const f = () => setScrolled(window.scrollY > 24);
    f(); window.addEventListener('scroll', f, { passive: true });
    return () => window.removeEventListener('scroll', f);
  }, []);

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: '-45% 0px -50% 0px' }
    );
    NAV.forEach((n) => { const el = document.getElementById(id(n)); if (el) io.observe(el); });
    return () => io.disconnect();
  }, []);

  return (
    <header className={scrolled ? 'nav scrolled' : 'nav'}>
      <div className="wrap nav-in">
        <a href="#home" className="brand" aria-label="Durgam Vani, home">DURGAM VANI</a>
        <nav id="menu" className={open ? 'links open' : 'links'} aria-label="Primary">
          {NAV.map((n) => (
            <a key={n} href={`#${id(n)}`} onClick={() => setOpen(false)} aria-current={active === id(n) ? 'true' : undefined}>{n}</a>
          ))}
          <a className="m-only" href={LINKS.resume} download="Vani_Resume.pdf">Download Resume</a>
        </nav>
        <div className="nav-actions">
          <a className="icon-btn" href={LINKS.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub profile"><Icon name="github" /></a>
          <a className="icon-btn" href={LINKS.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn profile"><Icon name="linkedin" /></a>
          <button className="icon-btn" onClick={toggleTheme} aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}>
            <Icon name={theme === 'dark' ? 'sun' : 'moon'} />
          </button>
          <a className="btn btn-sm resume-nav" href={LINKS.resume} download="Vani_Resume.pdf">Download Resume</a>
          <button className="icon-btn burger" aria-expanded={open} aria-controls="menu" aria-label="Toggle menu" onClick={() => setOpen(!open)}>
            <Icon name={open ? 'close' : 'menu'} />
          </button>
        </div>
      </div>
    </header>
  );
}
