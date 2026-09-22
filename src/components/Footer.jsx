import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { personalInfo } from '../data/resumeData';

export default function Footer() {
  return (
    <footer>
      <div>&copy; {new Date().getFullYear()} {personalInfo.shortName}. All rights reserved.</div>
      <div className="socials">
        <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
          <FaGithub size={20} />
        </a>
        <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          <FaLinkedin size={20} />
        </a>
        <a href={`mailto:${personalInfo.email}`} aria-label="Email">
          <FaEnvelope size={20} />
        </a>
      </div>
    </footer>
  );
}
