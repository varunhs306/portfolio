import { FaEnvelope, FaLinkedin, FaGithub, FaMapMarkerAlt } from 'react-icons/fa';
import { HiArrowRight } from 'react-icons/hi';
import Reveal from './Reveal';
import { personalInfo } from '../data/resumeData';

const contactItems = [
  { icon: <FaEnvelope size={20} />, label: 'Email', value: personalInfo.email, href: `mailto:${personalInfo.email}` },
  { icon: <FaLinkedin size={20} />, label: 'LinkedIn', value: 'linkedin.com/in/varunhs306', href: personalInfo.linkedin },
  { icon: <FaGithub size={20} />, label: 'GitHub', value: 'github.com/varunhs306', href: personalInfo.github },
  { icon: <FaMapMarkerAlt size={20} />, label: 'Location', value: personalInfo.location, href: null },
];

export default function Contact() {
  return (
    <section id="contact" className="section">
      <Reveal>
        <span className="section-kicker">Contact</span>
        <h2 className="section-title">Let's talk.</h2>
      </Reveal>

      <div className="contact-grid">
        <Reveal className="info-items">
          {contactItems.map((item) => {
            const body = (
              <>
                <div className="info-icon">{item.icon}</div>
                <div className="info-details">
                  <h3>{item.label}</h3>
                  <p>{item.value}</p>
                </div>
              </>
            );
            return item.href ? (
              <a
                key={item.label}
                href={item.href}
                className="info-item"
                target={item.href.startsWith('http') ? '_blank' : undefined}
                rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              >
                {body}
              </a>
            ) : (
              <div key={item.label} className="info-item">{body}</div>
            );
          })}
        </Reveal>

        <Reveal className="contact-card" delay={0.1}>
          <h3>Hiring? Here's what you need to know.</h3>
          <dl className="contact-facts">
            <div>
              <dt>Availability</dt>
              <dd>{personalInfo.availability}, based in Munich</dd>
            </div>
            <div>
              <dt>Work authorisation</dt>
              <dd>{personalInfo.workAuthorisation}.</dd>
            </div>
            <div>
              <dt>Open to</dt>
              <dd>{personalInfo.openTo}</dd>
            </div>
          </dl>
          <a href={`mailto:${personalInfo.email}`} className="btn-primary w-100">
            Email me
            <HiArrowRight size={20} />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
