import { useState } from 'react';
import { AtSign, Code2, Mail, Menu, X } from 'lucide-react';
import './hero-first.css';

const email = 'vaibhavmishra9679@gmail.com';
const github = 'https://github.com/vaibhavmishra-sde';
const linkedin = 'https://www.linkedin.com/in/vaibhav-mishra-369488322/';

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  return <div className="portfolio-shell">
    <header className="portfolio-nav">
      <a className="portfolio-logo" href="#top" aria-label="Vaibhav Mishra home">VM</a>
      <nav className={menuOpen ? 'portfolio-links is-open' : 'portfolio-links'} aria-label="Primary navigation">
        {['Projects', 'Process', 'Skills', 'About', 'Contact'].map((item) => <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setMenuOpen(false)}>{item}</a>)}
      </nav>
      <button className="resume-button" type="button" disabled title="Resume will be added when provided">Resume</button>
      <button className="menu-toggle" type="button" aria-label={menuOpen ? 'Close menu' : 'Open menu'} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X size={20} /> : <Menu size={20} />}</button>
    </header>
    <main id="top"><section className="hero-first" aria-labelledby="hero-title">
      <div className="hero-copy-first"><p className="hero-kicker">Full-stack developer <span>·</span> AI &amp; Data</p><h1 id="hero-title"><span>VAIBHAV</span><span>MISHRA</span></h1><p className="hero-tagline">I build AI agents, APIs and dashboards that people actually use.</p><div className="hero-actions"><span className="availability"><i /> Open to internships and junior roles</span><div className="social-links" aria-label="Social links"><a href={github} target="_blank" rel="noreferrer" aria-label="GitHub"><Code2 size={18} /></a><a href={linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><AtSign size={18} /></a><a href={`mailto:${email}`} aria-label="Email"><Mail size={18} /></a></div></div></div>
      <div className="portrait-stage" aria-label="Portrait of Vaibhav Mishra"><div className="portrait-glow" /><div className="portrait-placeholder"><img src="/vaibhav-mishra.jpg" alt="Vaibhav Mishra" /></div><span className="portrait-label">Vadodara, India</span></div><p className="hero-scroll">Scroll to explore <span>↓</span></p>
    </section></main>
  </div>;
}
