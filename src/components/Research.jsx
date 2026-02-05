import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaFileAlt, FaDownload } from 'react-icons/fa';
import { research } from '../data/resumeData';

export default function Research() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: '-100px' });

  return (
    <section id="research" className="py-20 px-4 bg-dark-800/50" ref={ref}>
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-100 mb-4">
            <span className="text-primary-400">Research</span>
          </h2>
          <div className="w-20 h-1 bg-primary-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="space-y-6">
          {research.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              className="group bg-dark-800 rounded-xl border border-dark-700 p-6 hover:border-primary-500/50 transition-all hover:shadow-lg hover:shadow-primary-500/5"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary-500/10 rounded-xl">
                  <FaFileAlt className="text-2xl text-primary-400" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-slate-100 mb-3 group-hover:text-primary-400 transition-colors">
                    {item.title}
                  </h3>
                  {item.description && (
                    <p className="text-slate-400 mb-3">{item.description}</p>
                  )}
                  {item.keywords && item.keywords.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-4">
                      {item.keywords.map((keyword, i) => (
                        <span
                          key={i}
                          className="px-2 py-1 bg-dark-700 text-slate-300 text-xs rounded"
                        >
                          {keyword}
                        </span>
                      ))}
                    </div>
                  )}
                  <a
                    href={item.file}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-primary-500/20 text-primary-400 rounded-lg hover:bg-primary-500 hover:text-dark-900 transition-all"
                  >
                    <FaDownload size={14} />
                    Download PDF
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
