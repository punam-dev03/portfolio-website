import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';
import { ArrowRight, Download, Mail } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { personalDetails } from '../data/portfolioData';
import { Link } from 'react-scroll';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Animated glowing background blobs */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-glow/20 rounded-full mix-blend-screen filter blur-[120px] animate-blob"></div>
      <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] bg-accent/20 rounded-full mix-blend-screen filter blur-[100px] animate-blob" style={{ animationDelay: '2s' }}></div>
      <div className="absolute bottom-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-blue-500/10 rounded-full mix-blend-screen filter blur-[130px] animate-blob" style={{ animationDelay: '4s' }}></div>

      {/* Subtle particle overlay (dots) */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wNSkiLz48L3N2Zz4=')] opacity-50 mask-image:linear-gradient(to_bottom,white,transparent)"></div>


      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-glow font-medium tracking-widest uppercase mb-4">Welcome to my portfolio</h2>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold mb-6"
          >
            Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-violet-400 to-fuchsia-400">{personalDetails.name}</span>
          </motion.h1>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl md:text-3xl text-slate-300 mb-8 h-12"
          >
            <TypeAnimation
              sequence={[
                personalDetails.tagline[0], 2000,
                personalDetails.tagline[1], 2000,
                personalDetails.tagline[2], 2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="font-light"
            />
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-12 relative z-20"
          >
            <Link to="projects" smooth={true} duration={500} offset={-70} className="btn-primary group w-full sm:w-auto cursor-pointer">
              View Projects
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
            </Link>
            <Link to="contact" smooth={true} duration={500} offset={-70} className="btn-secondary group w-full sm:w-auto cursor-pointer border-glow/50 hover:border-glow hover:text-white hover:shadow-[0_0_15px_rgba(59,130,246,0.3)]">
              Hire Me
            </Link>
            <a href="/resume.pdf" download="Punam_Patil_Resume.pdf" className="btn-secondary group w-full sm:w-auto cursor-pointer">
              <Download className="mr-2" size={20} />
              Resume
            </a>
          </motion.div>

          {/* Social Links */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex justify-center gap-6"
          >
            <a href={personalDetails.github} target="_blank" rel="noopener noreferrer" className="p-3 bg-slate-800/50 rounded-full hover:bg-glow/20 hover:text-glow transition-all duration-300 border border-slate-700/50 relative z-20 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]">
              <FaGithub size={24} />
            </a>
            <a href={personalDetails.linkedin} target="_blank" rel="noopener noreferrer" className="p-3 bg-slate-800/50 rounded-full hover:bg-glow/20 hover:text-glow transition-all duration-300 border border-slate-700/50 relative z-20 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]">
              <FaLinkedin size={24} />
            </a>
            <a href={`mailto:${personalDetails.email}`} className="p-3 bg-slate-800/50 rounded-full hover:bg-glow/20 hover:text-glow transition-all duration-300 border border-slate-700/50 relative z-20 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]">
              <Mail size={24} />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
