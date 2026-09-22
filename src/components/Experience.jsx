import Reveal from './Reveal';
import { experience } from '../data/resumeData';

export default function Experience() {
  return (
    <section id="experience" className="section">
      <Reveal>
        <span className="section-kicker">Experience</span>
        <h2 className="section-title">Where I've worked.</h2>
      </Reveal>

      <div className="experience-list">
        {experience.map((exp, index) => (
          <Reveal key={exp.company} delay={index * 0.1} className="exp-item">
            <span className="exp-year">{exp.period}</span>
            <div className="exp-details">
              <h3>{exp.title}</h3>
              <p className="exp-company">
                {exp.company} · {exp.location}
              </p>
              <p className="exp-context">{exp.context}</p>
              <ul className="exp-bullets">
                {exp.description.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <div className="tags">
                {exp.stack.map((tech) => (
                  <span key={tech} className="tag">{tech}</span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
