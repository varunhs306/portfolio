import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { SiGooglecolab } from 'react-icons/si';
import { projects } from '../data/resumeData';

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: '-100px' });

  return (
    <section id="projects" className="py-20 px-4" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-100 mb-4">
            Featured <span className="text-primary-400">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-primary-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.15 }}
              className="group bg-dark-800 rounded-xl border border-dark-700 overflow-hidden hover:border-primary-500/50 transition-all hover:shadow-xl hover:shadow-primary-500/5"
            >
              {/* Project Header */}
              <div className="p-6 border-b border-dark-700">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-bold text-slate-100 group-hover:text-primary-400 transition-colors">
                    {project.title}
                    {project.version && (
                      <span className="ml-2 text-xs bg-primary-500/20 text-primary-400 px-2 py-1 rounded-full">
                        {project.version}
                      </span>
                    )}
                  </h3>
                  <div className="flex gap-3">
                    {project.github && project.github !== "#" && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-slate-400 hover:text-primary-400 transition-colors"
                        aria-label="GitHub"
                      >
                        <FaGithub size={20} />
                      </a>
                    )}
                    {project.colab && (
                      <a
                        href={project.colab}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-slate-400 hover:text-primary-400 transition-colors"
                        aria-label="Google Colab"
                      >
                        <SiGooglecolab size={20} />
                      </a>
                    )}
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-slate-400 hover:text-primary-400 transition-colors"
                        aria-label="Live Demo"
                      >
                        <FaExternalLinkAlt size={18} />
                      </a>
                    )}
                  </div>
                </div>
                <p className="text-slate-400 text-sm">{project.description}</p>
              </div>

              {/* Project Details */}
              <div className="p-6">
                <ul className="space-y-3 mb-6">
                  {project.highlights.map((highlight, i) => (
                    <li key={i} className="flex items-start gap-2 text-slate-300 text-sm">
                      <span className="text-primary-500 mt-1">▹</span>
                      {highlight}
                    </li>
                  ))}
                </ul>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-dark-700 text-slate-300 text-xs rounded-full hover:bg-primary-500/20 hover:text-primary-400 transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
