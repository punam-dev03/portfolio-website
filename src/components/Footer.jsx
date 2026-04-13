import React from 'react';
import { Link } from 'react-scroll';
import { Mail, ArrowUp } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { personalDetails } from '../data/portfolioData';

const Footer = () => {
  return (
    <footer className="bg-slate-950 pt-16 pb-8 border-t border-slate-800/50 relative overflow-hidden">
      {/* Background subtle glow effect */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-px bg-gradient-to-r from-transparent via-glow/50 to-transparent"></div>
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[20%] h-[100px] bg-glow/10 blur-[80px] rounded-full point-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center mb-10 gap-6">
          <div className="flex-shrink-0">
            <Link to="home" smooth={true} duration={500} className="text-2xl font-display font-bold text-white tracking-wider cursor-pointer">
              <span className="text-glow">&lt;</span>
              Punam.dev
              <span className="text-accent">/&gt;</span>
            </Link>
          </div>

          <div className="flex gap-4">
            <a href={personalDetails.github} target="_blank" rel="noopener noreferrer" className="p-3 bg-slate-900 rounded-full text-slate-400 hover:text-white hover:bg-slate-800 transition-all focus:outline-none focus:ring-2 focus:ring-glow focus:ring-offset-2 focus:ring-offset-slate-950">
              <FaGithub size={20} />
            </a>
            <a href={personalDetails.linkedin} target="_blank" rel="noopener noreferrer" className="p-3 bg-slate-900 rounded-full text-slate-400 hover:text-white hover:bg-slate-800 transition-all focus:outline-none focus:ring-2 focus:ring-glow focus:ring-offset-2 focus:ring-offset-slate-950">
              <FaLinkedin size={20} />
            </a>
            <a href={`mailto:${personalDetails.email}`} className="p-3 bg-slate-900 rounded-full text-slate-400 hover:text-white hover:bg-slate-800 transition-all focus:outline-none focus:ring-2 focus:ring-glow focus:ring-offset-2 focus:ring-offset-slate-950">
              <Mail size={20} />
            </a>
          </div>
          
          <div>
            <Link to="home" smooth={true} duration={500} className="p-3 bg-gradient-to-tr from-glow/20 to-accent/20 rounded-full text-slate-300 hover:text-white hover:from-glow/40 hover:to-accent/40 transition-all cursor-pointer inline-flex items-center justify-center border border-slate-700/50 hover:border-glow/50">
              <ArrowUp size={20} className="mr-2" />
              <span className="text-sm font-medium">Back to Top</span>
            </Link>
          </div>
        </div>

        <div className="text-center border-t border-slate-800/80 pt-8 mt-4">
          <p className="text-slate-500 text-sm">
            &copy; {new Date().getFullYear()} Punam Patil. Built with React & Tailwind CSS. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
