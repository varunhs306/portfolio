import { FaExternalLinkAlt } from 'react-icons/fa';
import Reveal from './Reveal';
import { certifications, education } from '../data/resumeData';

export default function Education() {
  return (
    <section id="education" className="section">
      <Reveal>
        <span className="section-kicker">Education</span>
        <h2 className="section-title">Degrees and certifications.</h2>
      </Reveal>

      <div className="split-grid">
        <div>
          <Reveal as="h3" className="section-heading">Education</Reveal>
          <div className="experience-list">
            {education.map((edu, index) => (
              <Reveal key={edu.degree} delay={index * 0.1} className="exp-item">
                <span className="exp-year">{edu.period}</span>
                <div className="exp-details">
                  <h3>{edu.degree}</h3>
                  <p>{edu.institution}, {edu.location}</p>
                  {edu.grade && <p className="text-link">{edu.grade}</p>}
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <div>
          <Reveal as="h3" className="section-heading">Certifications</Reveal>
          <div className="experience-list">
            {certifications.map((cert, index) => (
              <Reveal key={cert.title} delay={index * 0.1} className="exp-item">
                <span className="exp-year">{cert.year}</span>
                <div className="exp-details">
                  <h3>{cert.title}</h3>
                  <p>{cert.issuer}</p>
                  {cert.link && (
                    <a href={cert.link} target="_blank" rel="noopener noreferrer" className="text-link">
                      Verify credential <FaExternalLinkAlt size={11} />
                    </a>
                  )}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
