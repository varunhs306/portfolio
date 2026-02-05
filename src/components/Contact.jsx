import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub, FaMapMarkerAlt } from 'react-icons/fa';
import { personalInfo, languages } from '../data/resumeData';

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: '-100px' });

  const contactItems = [
    {
      icon: <FaEnvelope className="text-xl" />,
      label: 'Email',
      value: personalInfo.email,
      href: `mailto:${personalInfo.email}`,
    },
    {
      icon: <FaPhone className="text-xl" />,
      label: 'Phone',
      value: personalInfo.phone,
      href: `tel:${personalInfo.phone}`,
    },
    {
      icon: <FaLinkedin className="text-xl" />,
      label: 'LinkedIn',
      value: 'varunhs306',
      href: personalInfo.linkedin,
    },
    {
      icon: <FaGithub className="text-xl" />,
      label: 'GitHub',
      value: 'varunhs306',
      href: personalInfo.github,
    },
    {
      icon: <FaMapMarkerAlt className="text-xl" />,
      label: 'Location',
      value: personalInfo.location,
      href: null,
    },
  ];

  return (
    <section id="contact" className="py-20 px-4 bg-dark-800/50" ref={ref}>
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-100 mb-4">
            Get in <span className="text-primary-400">Touch</span>
          </h2>
          <div className="w-20 h-1 bg-primary-500 mx-auto rounded-full mb-6"></div>
          <p className="text-slate-400 max-w-xl mx-auto">
            I'm currently looking for internship opportunities in AI, Data Engineering, or MLOps.
            Feel free to reach out if you'd like to connect!
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
          {contactItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * index }}
            >
              {item.href ? (
                <a
                  href={item.href}
                  target={item.href.startsWith('http') ? '_blank' : undefined}
                  rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="flex items-center gap-4 p-4 bg-dark-800 rounded-xl border border-dark-700 hover:border-primary-500/50 transition-all group"
                >
                  <div className="p-3 bg-primary-500/10 rounded-lg text-primary-400 group-hover:bg-primary-500 group-hover:text-dark-900 transition-all">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-sm text-slate-400">{item.label}</p>
                    <p className="text-slate-200 group-hover:text-primary-400 transition-colors">
                      {item.value}
                    </p>
                  </div>
                </a>
              ) : (
                <div className="flex items-center gap-4 p-4 bg-dark-800 rounded-xl border border-dark-700">
                  <div className="p-3 bg-primary-500/10 rounded-lg text-primary-400">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-sm text-slate-400">{item.label}</p>
                    <p className="text-slate-200">{item.value}</p>
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Languages */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center"
        >
          <h3 className="text-xl font-semibold text-slate-100 mb-4">Languages</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {languages.map((lang, index) => (
              <div
                key={index}
                className="px-4 py-2 bg-dark-800 rounded-lg border border-dark-700"
              >
                <span className="text-slate-200">{lang.name}</span>
                <span className="text-slate-400 text-sm ml-2">({lang.level})</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
