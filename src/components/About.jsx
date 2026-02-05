import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaGraduationCap, FaBriefcase, FaRocket } from 'react-icons/fa';
import { personalInfo } from '../data/resumeData';

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: '-100px' });

  const highlights = [
    {
      icon: <FaGraduationCap className="text-2xl" />,
      title: 'M.Sc. Candidate',
      description: 'Currently pursuing masters at SRH University, Leipzig',
    },
    {
      icon: <FaBriefcase className="text-2xl" />,
      title: '2+ Years Experience',
      description: 'Worked at Deloitte and Atria Convergence Technologies',
    },
    {
      icon: <FaRocket className="text-2xl" />,
      title: 'Open to Opportunities',
      description: 'Seeking AI / Data / MLOps internship roles',
    },
  ];

  return (
    <section id="about" className="py-20 px-4" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-100 mb-4">
            About <span className="text-primary-400">Me</span>
          </h2>
          <div className="w-20 h-1 bg-primary-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <p className="text-lg text-slate-300 mb-6 leading-relaxed">
              {personalInfo.summary}
            </p>
            <p className="text-slate-400 mb-6 leading-relaxed">
              With hands-on experience at companies like <span className="text-primary-400 font-medium">Deloitte</span> and{' '}
              <span className="text-primary-400 font-medium">Atria Convergence Technologies</span>, I've developed
              expertise in building scalable data pipelines, implementing cloud-native solutions, and deploying
              production ML systems.
            </p>
            <p className="text-slate-400 leading-relaxed">
              I'm passionate about leveraging data to solve real-world problems and continuously learning
              new technologies in the AI and data engineering space.
            </p>
          </motion.div>

          {/* Highlight cards */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="space-y-4"
          >
            {highlights.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                className="flex items-start gap-4 p-4 bg-dark-800 rounded-xl border border-dark-700 hover:border-primary-500/50 transition-colors"
              >
                <div className="p-3 bg-primary-500/10 rounded-lg text-primary-400">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-100 mb-1">
                    {item.title}
                  </h3>
                  <p className="text-slate-400 text-sm">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
