import { useState, useEffect } from 'react';
import { HiMenu, HiX } from 'react-icons/hi';
import { personalInfo } from '../data/resumeData';

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Skills', href: '#skills' },
  { name: 'Education', href: '#education' },
  { name: 'Research', href: '#research' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-dark-900/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a
            href="#"
            className="text-xl font-bold text-primary-400 hover:text-primary-300 transition-colors"
          >
            {personalInfo.shortName}
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-slate-300 hover:text-primary-400 transition-colors text-sm font-medium"
              >
                {link.name}
              </a>
            ))}
            <a
              href="/Varun_H_S_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-primary-500 text-dark-900 rounded-lg font-medium hover:bg-primary-400 transition-colors text-sm"
            >
              Resume
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-slate-300 hover:text-primary-400 transition-colors"
          >
            {isOpen ? <HiX size={24} /> : <HiMenu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden bg-dark-800 rounded-lg mt-2 py-4 px-4 shadow-xl">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block py-2 text-slate-300 hover:text-primary-400 transition-colors"
              >
                {link.name}
              </a>
            ))}
            <a
              href="/Varun_H_S_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="block mt-4 px-4 py-2 bg-primary-500 text-dark-900 rounded-lg font-medium hover:bg-primary-400 transition-colors text-center"
            >
              Resume
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}
