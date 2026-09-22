import Reveal from './Reveal';
import { about, languages, personalInfo } from '../data/resumeData';
import profilePhotoGray from '../../assets/profile-grayscale.jpg';

export default function About() {
  return (
    <section id="about" className="section">
      <Reveal>
        <span className="section-kicker">About</span>
        <h2 className="section-title">Pipelines that stay up, models that stay in production.</h2>
      </Reveal>

      <div className="about-grid">
        <Reveal className="about-image-col">
          <img src={profilePhotoGray} alt={personalInfo.name} className="stack-img" />
        </Reveal>

        <Reveal className="about-text-col" delay={0.1}>
          {about.map((paragraph, index) => (
            <p key={index} className="section-text">{paragraph}</p>
          ))}

          <h3 className="section-heading">Languages</h3>
          <div className="tags">
            {languages.map((lang) => (
              <span key={lang.name} className="tag">
                {lang.name} · {lang.level}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
