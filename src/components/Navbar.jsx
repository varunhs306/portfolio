import { useEffect, useState } from 'react';
import { HiSun, HiMoon, HiMenuAlt3, HiX } from 'react-icons/hi';
import { personalInfo } from '../data/resumeData';

const navLinks = [
  { name: 'Home', id: 'home' },
  { name: 'About', id: 'about' },
  { name: 'Experience', id: 'experience' },
  { name: 'Projects', id: 'projects' },
  { name: 'Research', id: 'research' },
  { name: 'Skills', id: 'skills' },
  { name: 'Contact', id: 'contact' },
];

function getInitialTheme() {
  return document.documentElement.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [theme, setTheme] = useState(getInitialTheme);
  const [active, setActive] = useState('home');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    try {
      localStorage.setItem('theme', theme);
    } catch {
      // Storage unavailable; the theme still applies for this visit.
    }
  }, [theme]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
  }, [isOpen]);

  // Highlight the link for whichever section is in the middle of the viewport.
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: '-45% 0px -50% 0px' }
    );
    navLinks.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <nav className="navbar">
      <div className="nav-container">
        <a href="#home" className="nav-brand" aria-label={personalInfo.name}>
          {personalInfo.initials}<span>.</span>
        </a>

        <div className={`nav-links${isOpen ? ' active' : ''}`}>
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className={active === link.id ? 'active' : undefined}
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <a
            href="/Varun_H_S_CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="nav-resume"
            onClick={() => setIsOpen(false)}
          >
            Resume
          </a>
        </div>

        <div className="nav-controls">
          <button
            className="theme-toggle"
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <HiSun size={22} /> : <HiMoon size={22} />}
          </button>
          <button
            className="mobile-toggle"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            {isOpen ? <HiX size={24} /> : <HiMenuAlt3 size={24} />}
          </button>
        </div>
      </div>
    </nav>
  );
}
