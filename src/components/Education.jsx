import React from 'react';
import { motion } from 'framer-motion';
import { educationData, certificationsData } from '../data/portfolioData';
import { GraduationCap, Award } from 'lucide-react';

const Education = () => {
  return (
    <section id="education" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Education Column */}
          <div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-4 mb-10"
            >
              <div className="p-3 bg-glow/10 rounded-xl text-glow">
                <GraduationCap size={28} />
              </div>
              <h2 className="text-3xl font-bold">Education</h2>
            </motion.div>

            <div className="space-y-8">
              {educationData.map((edu, index) => (
                <motion.div 
                  key={edu.id}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className="glass-card p-6 relative overflow-hidden group"
                >
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-glow to-accent scale-y-0 group-hover:scale-y-100 transition-transform origin-top duration-300"></div>
                  
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                    <h3 className="text-xl font-bold text-white leading-tight">{edu.degree}</h3>
                    <span className="text-sm px-3 py-1 bg-slate-800 text-glow rounded-full whitespace-nowrap mt-2 md:mt-0 max-w-max border border-slate-700/50">
                      {edu.duration}
                    </span>
                  </div>
                  
                  <h4 className="text-md text-slate-300 font-medium mb-3">{edu.institution}</h4>
                  <p className="text-sm text-slate-400 mb-4">{edu.description}</p>
                  
                  <div className="inline-block px-3 py-1 bg-slate-800/80 text-accent font-semibold text-sm rounded-lg border border-slate-700/50 shadow-inner">
                    {edu.score}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Certifications Column */}
          <div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-4 mb-10"
            >
              <div className="p-3 bg-accent/10 rounded-xl text-accent">
                <Award size={28} />
              </div>
              <h2 className="text-3xl font-bold">Certifications & Publications</h2>
            </motion.div>

            <div className="space-y-6">
              {certificationsData.map((cert, index) => (
                <motion.div 
                  key={cert.id}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className="glass p-6 border-l-4 border-l-accent hover:border-l-glow transition-colors duration-300 rounded-r-2xl"
                >
                  <h3 className="text-lg font-bold text-white mb-1 group-hover:text-glow transition-colors">{cert.title}</h3>
                  <h4 className="text-sm text-accent mb-3 font-medium">{cert.issuer}</h4>
                  <p className="text-sm text-slate-400 line-clamp-2">
                    {cert.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Education;
