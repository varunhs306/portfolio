import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaFileAlt, FaExternalLinkAlt, FaUsers, FaCalendar } from 'react-icons/fa';
import { publications } from '../data/resumeData';

export default function Publications() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: '-100px' });

  return (
    <section id="publications" className="py-20 px-4" ref={ref}>
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-100 mb-4">
            <span className="text-primary-400">Publications</span>
          </h2>
          <div className="w-20 h-1 bg-primary-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="space-y-6">
          {publications.map((pub, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="group bg-dark-800 rounded-xl border border-dark-700 p-6 hover:border-primary-500/50 transition-all hover:shadow-lg hover:shadow-primary-500/5"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary-500/10 rounded-xl">
                  <FaFileAlt className="text-2xl text-primary-400" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-slate-100 mb-3 group-hover:text-primary-400 transition-colors leading-relaxed">
                    "{pub.title}"
                  </h3>

                  <div className="flex flex-wrap gap-4 text-sm text-slate-400 mb-4">
                    <div className="flex items-center gap-2">
                      <FaUsers className="text-primary-500" />
                      {pub.authors}
                    </div>
                    <div className="flex items-center gap-2">
                      <FaCalendar className="text-primary-500" />
                      {pub.date}
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <p className="text-slate-300">
                      <span className="italic">{pub.journal}</span>, {pub.volume}
                    </p>
                    {pub.link && (
                      <a
                        href={pub.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-primary-400 text-sm hover:text-primary-300 transition-colors"
                      >
                        <FaExternalLinkAlt size={12} />
                        View Paper
                      </a>
                    )}
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
