import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { SiGooglecolab } from 'react-icons/si';
import Reveal from './Reveal';
import { projects } from '../data/resumeData';

export default function Projects() {
  return (
    <section id="projects" className="section">
      <Reveal>
        <span className="section-kicker">Projects</span>
        <h2 className="section-title">Things I've built.</h2>
      </Reveal>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <Reveal key={project.title} delay={(index % 2) * 0.1} className="project-card">
            <div className="project-info">
              <div className="project-labels">
                {project.labels.map((label) => (
                  <span key={label} className="project-label">{label}</span>
                ))}
              </div>
              <h3 className="project-title">{project.title}</h3>
              <p className="project-desc">{project.description}</p>
              <div className="tags">
                {project.tags.map((tag) => (
                  <span key={tag} className="tag">{tag}</span>
                ))}
              </div>
              <div className="project-links">
                {project.github && (
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <FaGithub size={16} /> Code
                  </a>
                )}
                {project.colab && (
                  <a href={project.colab} target="_blank" rel="noopener noreferrer">
                    <SiGooglecolab size={18} /> Notebook
                  </a>
                )}
                {project.demo && (
                  <a href={project.demo} target="_blank" rel="noopener noreferrer">
                    <FaExternalLinkAlt size={13} /> Live demo
                  </a>
                )}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
