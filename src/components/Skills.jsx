import Reveal from './Reveal';
import { skills } from '../data/resumeData';

export default function Skills() {
  return (
    <section id="skills" className="section">
      <Reveal>
        <span className="section-kicker">Skills</span>
        <h2 className="section-title">What I work with.</h2>
      </Reveal>

      <div className="skills-grid">
        {Object.entries(skills).map(([category, skillList], index) => (
          <Reveal key={category} delay={(index % 3) * 0.08} className="skill-group">
            <h3>{category}</h3>
            <div className="tags">
              {skillList.map((skill) => (
                <span key={skill} className="tag">{skill}</span>
              ))}
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
