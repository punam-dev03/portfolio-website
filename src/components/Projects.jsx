import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import { projectsData } from '../data/portfolioData';

const Projects = () => {
  return (
    <section id="projects" className="py-20 relative bg-slate-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Featured <span className="text-gradient">Projects</span></h2>
          <div className="w-20 h-1 bg-gradient-to-r from-glow to-accent mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projectsData.map((project, index) => (
            <motion.div 
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="glass p-8 rounded-2xl group hover:-translate-y-2 transition-all duration-300 hover:shadow-[0_0_30px_rgba(59,130,246,0.15)] hover:border-glow/40 flex flex-col h-full"
            >
              <div className="flex justify-between items-start mb-6">
                <div className="p-3 bg-slate-800 rounded-lg text-glow group-hover:bg-glow group-hover:text-white transition-colors duration-300">
                  <svg xmlns="http://www.w3.org/-svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-glow transition-colors">{project.title}</h3>
              <p className="text-slate-400 leading-relaxed mb-6">
                {project.description}
              </p>

              {project.problem && project.solution && (
                <div className="mb-6 space-y-3 bg-slate-900/50 p-4 rounded-xl border border-slate-700/50">
                  <div>
                    <span className="text-accent font-semibold text-sm uppercase tracking-wider block mb-1">The Problem</span>
                    <p className="text-slate-300 text-sm">{project.problem}</p>
                  </div>
                  <div>
                    <span className="text-glow font-semibold text-sm uppercase tracking-wider block mb-1">The Solution</span>
                    <p className="text-slate-300 text-sm">{project.solution}</p>
                  </div>
                </div>
              )}

              {project.keyFeatures && (
                <div className="mb-6 flex-grow">
                  <span className="text-white font-medium text-sm block mb-2">Key Features:</span>
                  <ul className="space-y-1">
                    {project.keyFeatures.map((feature, i) => (
                      <li key={i} className="text-slate-400 text-sm flex items-start">
                        <span className="text-glow mr-2 mt-0.5">▹</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="flex flex-wrap gap-2 mt-auto mb-6">
                {project.techStack.map((tech, id) => (
                  <span key={id} className="text-xs font-medium px-3 py-1 bg-slate-800 text-glow rounded-full border border-glow/20 shadow-[0_0_10px_rgba(59,130,246,0.1)]">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-4 pt-4 border-t border-slate-800">
                {project.githubUrl && (
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-medium text-slate-300 hover:text-glow transition-colors px-4 py-2 rounded-lg bg-slate-800/50 hover:bg-slate-800 border border-slate-700/50 hover:border-glow/50">
                    <FaGithub size={16} />
                    <span>View Code</span>
                  </a>
                )}
                {project.liveUrl && (
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-medium text-slate-300 hover:text-accent transition-colors px-4 py-2 rounded-lg bg-slate-800/50 hover:bg-slate-800 border border-slate-700/50 hover:border-accent/50">
                    <ExternalLink size={16} />
                    <span>Live Demo</span>
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
