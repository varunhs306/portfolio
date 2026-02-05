import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaCertificate, FaExternalLinkAlt } from 'react-icons/fa';
import { SiOracle } from 'react-icons/si';
import { certifications } from '../data/resumeData';

export default function Certifications() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: '-100px' });

  return (
    <section id="certifications" className="py-20 px-4" ref={ref}>
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-100 mb-4">
            <span className="text-primary-400">Certifications</span>
          </h2>
          <div className="w-20 h-1 bg-primary-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.15 }}
              className="group bg-dark-800 rounded-xl border border-dark-700 p-6 hover:border-primary-500/50 transition-all hover:shadow-lg hover:shadow-primary-500/5"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-red-500/10 rounded-xl">
                  <SiOracle className="text-2xl text-red-500" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-slate-100 mb-2 group-hover:text-primary-400 transition-colors">
                    {cert.title}
                  </h3>
                  <p className="text-slate-400 text-sm mb-3">Issued by {cert.issuer}</p>
                  {cert.link && (
                    <a
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-primary-400 text-sm hover:text-primary-300 transition-colors"
                    >
                      <FaExternalLinkAlt size={12} />
                      Verify Certificate
                    </a>
                  )}
                </div>
                <FaCertificate className="text-primary-500/30 text-3xl" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
