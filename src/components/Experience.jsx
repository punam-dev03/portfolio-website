import React from 'react';
import { motion } from 'framer-motion';
import { experienceData } from '../data/portfolioData';

const Experience = () => {
  return (
    <section id="experience" className="py-20 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Professional <span className="text-gradient">Experience</span></h2>
          <div className="w-20 h-1 bg-gradient-to-r from-glow to-accent mx-auto rounded-full"></div>
        </motion.div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-px bg-slate-700"></div>

          {experienceData.map((exp, index) => {
            const isEven = index % 2 === 0;
            return (
              <motion.div 
                key={exp.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className={`relative flex flex-col md:flex-row items-start mb-12 ${isEven ? 'md:flex-row-reverse' : ''}`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-[-11px] md:left-1/2 transform md:-translate-x-1/2 w-6 h-6 rounded-full bg-slate-900 border-4 border-glow z-10 box-content mt-1"></div>

                {/* Content Box */}
                <div className={`w-full md:w-1/2 pl-8 md:pl-0 ${isEven ? 'md:pr-12' : 'md:pl-12'}`}>
                  <div className="glass-card p-6 relative group overflow-hidden">
                    <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-30 transition-opacity">
                      <exp.icon size={64} className="text-glow" />
                    </div>
                    
                    <div className="relative z-10">
                      <h3 className="text-xl font-bold text-white mb-1 group-hover:text-glow transition-colors">{exp.role}</h3>
                      <h4 className="text-lg text-slate-300 mb-2">{exp.company}</h4>
                      <span className="inline-block py-1 px-3 bg-slate-800 rounded-full text-xs font-semibold text-accent mb-4 border border-slate-700">
                        {exp.duration}
                      </span>
                      
                      <ul className="space-y-2">
                        {exp.achievements.map((item, id) => (
                          <li key={id} className="text-slate-400 text-sm flex items-start">
                            <span className="text-glow mr-2 mt-1">▹</span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Experience;
