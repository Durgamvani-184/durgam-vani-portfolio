import { useEffect, useState } from 'react';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import { Snapshot } from './components/Snapshot.jsx';
import Projects from './components/Projects.jsx';
import { About, Skills, Experience, Education, Certifications, Contact, Footer } from './components/Sections.jsx';

export default function App() {
  const [theme, setTheme] = useState(document.documentElement.dataset.theme || 'dark');

  const toggleTheme = () => {
    const next = theme === 'dark' ? 'light' : 'dark';
    setTheme(next);
    document.documentElement.dataset.theme = next;
    try { localStorage.setItem('theme', next); } catch (e) { /* storage unavailable */ }
  };

  useEffect(() => {
    const io = new IntersectionObserver((es) => es.forEach((e) => {
      if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
    }), { threshold: 0.12 });
    document.querySelectorAll('.reveal').forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <>
      <div className="bg" aria-hidden="true"><i /></div>
      <a className="skip" href="#about">Skip to content</a>
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <main>
        <Hero /><Snapshot /><About /><Skills /><Experience /><Projects /><Education /><Certifications /><Contact />
      </main>
      <Footer />
    </>
  );
}
