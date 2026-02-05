import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaBriefcase } from 'react-icons/fa';
import { experience } from '../data/resumeData';

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: '-100px' });

  return (
    <section id="experience" className="py-20 px-4 bg-dark-800/50" ref={ref}>
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-100 mb-4">
            Work <span className="text-primary-400">Experience</span>
          </h2>
          <div className="w-20 h-1 bg-primary-500 mx-auto rounded-full"></div>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-px h-full w-0.5 bg-dark-700"></div>

          {experience.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.2 }}
              className={`relative flex items-center mb-12 ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              {/* Timeline dot */}
              <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary-500 rounded-full border-4 border-dark-900 z-10"></div>

              {/* Content */}
              <div className={`ml-8 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                <div className="bg-dark-800 p-6 rounded-xl border border-dark-700 hover:border-primary-500/50 transition-all hover:shadow-lg hover:shadow-primary-500/5">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 bg-primary-500/10 rounded-lg">
                      <FaBriefcase className="text-primary-400" />
                    </div>
                    <span className="text-sm text-primary-400 font-medium">{exp.period}</span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-100 mb-1">{exp.title}</h3>
                  <p className="text-slate-400 mb-4">
                    {exp.company} • {exp.location}
                  </p>
                  <ul className="space-y-2">
                    {exp.description.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-slate-300 text-sm">
                        <span className="text-primary-500 mt-1.5">▹</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
