import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { name: 'Home', id: 'home' },
  { name: 'About', id: 'about' },
  { name: 'Skills', id: 'skills' },
  { name: 'Experience', id: 'experience' },
  { name: 'Projects', id: 'projects' },
  { name: 'Education', id: 'education' },
  { name: 'Contact', id: 'contact' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState('home');

  // Scroll tracking for glass effect and progress bar
  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scroll = `${totalScroll / windowHeight}`;

      setScrollProgress(Number(scroll) || 0);
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Intersection Observer for Highly Accurate Active Links
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.6, // Fire when 60% of the section is visible
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    const sections = navLinks.map(link => document.getElementById(link.id));
    sections.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  const scrollToSection = (id) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      // Mathematically calculating precise offset factoring in sticky nav height
      const yOffset = -70; 
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({top: y, behavior: 'smooth'});
    }
  };

  return (
    <>
      <div 
        className="fixed top-0 left-0 h-1 bg-gradient-to-r from-glow to-accent z-50 transition-all duration-300"
        style={{ width: `${scrollProgress * 100}%` }}
      />
      <nav 
        className={`fixed w-full z-40 transition-all duration-300 ${
          scrolled ? 'glass py-3' : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <div className="flex-shrink-0 cursor-pointer" onClick={() => scrollToSection('home')}>
              <div className="text-2xl font-display font-bold text-white tracking-wider flex items-center gap-2">
                <span className="text-glow">&lt;</span>
                Punam.dev
                <span className="text-accent">/&gt;</span>
              </div>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.id)}
                  className={`relative cursor-pointer text-sm font-medium tracking-wide uppercase transition-all duration-300 pb-1 ${
                    activeSection === link.id
                      ? 'text-glow after:absolute after:-bottom-2 after:left-0 after:w-full after:h-[2px] after:bg-glow after:shadow-[0_0_10px_rgba(59,130,246,0.8)]'
                      : 'text-slate-300 hover:text-white hover:text-glow'
                  }`}
                >
                  {link.name}
                </button>
              ))}
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-slate-300 hover:text-white focus:outline-none transition-colors"
              >
                {isOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden glass absolute top-full left-0 w-full flex flex-col items-center py-4 space-y-4 border-t border-slate-700/50 shadow-2xl">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.id)}
                className={`cursor-pointer text-sm font-medium tracking-wide w-full text-center py-3 block transition-all duration-300 ${
                  activeSection === link.id
                    ? 'text-glow bg-slate-800/80 border-r-4 border-glow'
                    : 'text-slate-300 hover:text-white hover:bg-slate-800/50'
                }`}
              >
                {link.name}
              </button>
            ))}
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
