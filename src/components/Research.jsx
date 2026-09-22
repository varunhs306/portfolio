import Reveal from './Reveal';
import { research } from '../data/resumeData';

export default function Research() {
  return (
    <section id="research" className="section">
      <Reveal>
        <span className="section-kicker">Research</span>
        <h2 className="section-title">Published and ongoing work.</h2>
      </Reveal>

      <div className="experience-list">
        {research.map((item, index) => (
          <Reveal key={item.title} delay={index * 0.1} className="exp-item">
            <span className="exp-year">{item.status}</span>
            <div className="exp-details">
              <h3>{item.title}</h3>
              {item.citation && <p className="exp-context">{item.citation}</p>}
              <p className="exp-desc">{item.description}</p>
              <div className="tags">
                {item.keywords.map((keyword) => (
                  <span key={keyword} className="tag">{keyword}</span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
