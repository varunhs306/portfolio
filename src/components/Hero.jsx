import { HiArrowRight } from 'react-icons/hi';
import { FaMapMarkerAlt, FaPassport, FaLinkedin, FaGithub } from 'react-icons/fa';
import { personalInfo, stats } from '../data/resumeData';
import profilePhoto from '../../assets/profile.jpg';

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-main fade-up">
        <div className="hero-content">
          <span className="hero-subtitle">Data | ML | AI Engineering</span>
          <h1 className="hero-title">Hi, I'm Varun.</h1>
          <p className="hero-desc">
            <strong>{personalInfo.headline}</strong> {personalInfo.summary}
          </p>

          <div className="hero-meta">
            <span className="meta-pill">
              <FaMapMarkerAlt size={13} />
              {personalInfo.location}
            </span>
            <span className="meta-pill">
              <span className="status-dot"></span>
              {personalInfo.availability}
            </span>
          </div>

          <p className="work-auth">
            <FaPassport size={16} />
            <span>
              {personalInfo.permit}.{' '}
              <strong>No sponsorship required.</strong>
            </span>
          </p>

          <div className="hero-actions">
            <a href="/Varun_H_S_CV.pdf" target="_blank" rel="noopener noreferrer" className="btn-primary">
              View Resume
              <HiArrowRight size={20} />
            </a>
            <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="btn-secondary">
              <FaLinkedin size={18} />
              LinkedIn
            </a>
            <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="btn-secondary">
              <FaGithub size={18} />
              GitHub
            </a>
          </div>
        </div>

        <div className="hero-image-wrapper">
          <img src={profilePhoto} alt={personalInfo.name} className="hero-image" />
        </div>
      </div>

      <div className="stats fade-up" style={{ animationDelay: '0.2s' }}>
        {stats.map((stat) => (
          <div key={stat.label} className="stat">
            <p className="stat-value">{stat.value}</p>
            <p className="stat-label">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
