import React from 'react';
import { motion } from 'framer-motion';
import { skillsData } from '../data/portfolioData';

const SkillCategory = ({ title, skills, delay }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="glass-card p-6"
    >
      <h3 className="text-xl font-bold text-white mb-6 border-l-4 border-glow pl-3">{title}</h3>
      <div className="space-y-6">
        {skills.map((skill, index) => (
          <div key={index}>
            <div className="flex justify-between items-center mb-2">
              <div className="flex items-center gap-2 text-slate-200 font-medium">
                <skill.icon size={18} className="text-glow" />
                {skill.name}
              </div>
              <span className="text-sm text-slate-400">{skill.level}%</span>
            </div>
            {/* Progress Bar */}
            <div className="w-full h-2 bg-slate-700 rounded-full overflow-hidden">
              <motion.div 
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.level}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: delay + 0.2 + (index * 0.1) }}
                className="h-full bg-gradient-to-r from-glow to-accent rounded-full relative"
              >
                {/* Shine effect */}
                <div className="absolute top-0 left-0 bottom-0 right-0 bg-white/20 blur-[2px] rounded-full"></div>
              </motion.div>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

const Skills = () => {
  return (
    <section id="skills" className="py-20 relative bg-slate-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Technical <span className="text-gradient">Skills</span></h2>
          <div className="w-20 h-1 bg-gradient-to-r from-glow to-accent mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <SkillCategory title="Frontend" skills={skillsData.frontend} delay={0.1} />
          <SkillCategory title="Backend" skills={skillsData.backend} delay={0.2} />
          <SkillCategory title="Database" skills={skillsData.database} delay={0.3} />
          <SkillCategory title="Tools" skills={skillsData.tools} delay={0.4} />
        </div>
      </div>
    </section>
  );
};

export default Skills;
