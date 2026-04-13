import React from 'react';
import { motion } from 'framer-motion';
import { personalDetails } from '../data/portfolioData';

const About = () => {
  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">About <span className="text-gradient">Me</span></h2>
          <div className="w-20 h-1 bg-gradient-to-r from-glow to-accent mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            {/* Elegant Image Placeholder Wrapper */}
            <div className="relative w-full aspect-square max-w-md mx-auto">
              <div className="absolute inset-0 bg-gradient-to-tr from-glow to-accent rounded-3xl transform rotate-6 opacity-50 blur-lg"></div>
              <div className="absolute inset-0 bg-slate-800 rounded-3xl border border-slate-700 overflow-hidden shadow-2xl">
                <img
                  src="/profile.jpeg"
                  alt="Punam Patil"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-white mb-4">Computer Engineering Student & Developer</h3>
            <p className="text-slate-300 leading-relaxed text-lg">
              {personalDetails.aboutRaw}
            </p>

            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="glass-card p-4 text-center">
                <div className="text-3xl border-b border-slate-700/50 pb-2 mb-2 font-bold text-glow">9.11</div>
                <div className="text-sm text-slate-400">B.Tech CGPA</div>
              </div>
              <div className="glass-card p-4 text-center">
                <div className="text-3xl border-b border-slate-700/50 pb-2 mb-2 font-bold text-accent">2+</div>
                <div className="text-sm text-slate-400">Internships</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
