import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  FaPython, FaDatabase, FaAws, FaDocker
} from 'react-icons/fa';
import {
  SiGnubash, SiOracle, SiGooglecloud, SiSqlite,
  SiPostgresql, SiApacheairflow, SiTerraform, SiKubernetes,
  SiSnowflake, SiPandas, SiScikitlearn, SiGrafana, SiAmazonwebservices
} from 'react-icons/si';
import { skills } from '../data/resumeData';

const skillIcons = {
  'Python': <FaPython />,
  'SQL': <FaDatabase />,
  'Bash': <SiGnubash />,
  'PostgreSQL': <SiPostgresql />,
  'SQLite': <SiSqlite />,
  'Sqlite3': <SiSqlite />,
  'Snowflake': <SiSnowflake />,
  'Docker': <FaDocker />,
  'Kubernetes': <SiKubernetes />,
  'Terraform': <SiTerraform />,
  'Apache Airflow': <SiApacheairflow />,
  'AWS': <FaAws />,
  'Oracle Cloud Infra': <SiOracle />,
  'Oracle OCA': <SiOracle />,
  'Google Cloud Platform': <SiGooglecloud />,
  'QuickSight': <SiAmazonwebservices />,
  'Grafana': <SiGrafana />,
  'Pandas': <SiPandas />,
  'Polars': <SiPandas />,
  'Scikit-learn': <SiScikitlearn />,
};

const categoryColors = {
  'Languages': 'from-blue-500 to-cyan-500',
  'Data & ML': 'from-purple-500 to-pink-500',
  'Cloud & Infra': 'from-orange-500 to-yellow-500',
  'DevOps': 'from-green-500 to-emerald-500',
  'Databases': 'from-red-500 to-rose-500',
  'Practices': 'from-indigo-500 to-violet-500',
};

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: '-100px' });

  return (
    <section id="skills" className="py-20 px-4 bg-dark-800/50" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-100 mb-4">
            Technical <span className="text-primary-400">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-primary-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.entries(skills).map(([category, skillList], index) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="bg-dark-800 rounded-xl border border-dark-700 p-6 hover:border-primary-500/50 transition-all"
            >
              <div className={`inline-block px-3 py-1 rounded-lg bg-gradient-to-r ${categoryColors[category] || 'from-primary-500 to-primary-600'} mb-4`}>
                <h3 className="text-sm font-semibold text-white">{category}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skillList.map((skill, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.3, delay: 0.1 * index + 0.05 * i }}
                    className="flex items-center gap-2 px-3 py-2 bg-dark-700 text-slate-300 text-sm rounded-lg hover:bg-primary-500/20 hover:text-primary-400 transition-all cursor-default"
                  >
                    {skillIcons[skill] && (
                      <span className="text-primary-400">{skillIcons[skill]}</span>
                    )}
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
