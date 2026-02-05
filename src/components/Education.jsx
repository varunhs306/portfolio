import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaGraduationCap, FaMapMarkerAlt, FaCalendar } from 'react-icons/fa';
import { education } from '../data/resumeData';

export default function Education() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: '-100px' });

  return (
    <section id="education" className="py-20 px-4 bg-dark-800/50" ref={ref}>
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-100 mb-4">
            <span className="text-primary-400">Education</span>
          </h2>
          <div className="w-20 h-1 bg-primary-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="space-y-6">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.15 }}
              className="group bg-dark-800 rounded-xl border border-dark-700 p-6 hover:border-primary-500/50 transition-all hover:shadow-lg hover:shadow-primary-500/5"
            >
              <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                <div className="p-4 bg-primary-500/10 rounded-xl self-start">
                  <FaGraduationCap className="text-3xl text-primary-400" />
                </div>
                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
                    <h3 className="text-xl font-bold text-slate-100 group-hover:text-primary-400 transition-colors">
                      {edu.degree}
                    </h3>
                    <div className="flex items-center gap-2 text-primary-400 text-sm">
                      <FaCalendar />
                      {edu.period}
                    </div>
                  </div>
                  <p className="text-lg text-slate-300 mb-2">{edu.institution}</p>
                  <div className="flex items-center gap-2 text-slate-400 text-sm">
                    <FaMapMarkerAlt className="text-primary-500" />
                    {edu.location}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
