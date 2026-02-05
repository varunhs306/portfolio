import { FaHeart, FaReact } from 'react-icons/fa';
import { SiTailwindcss } from 'react-icons/si';
import { personalInfo } from '../data/resumeData';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 px-4 border-t border-dark-700">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-slate-400 text-sm">
            © {currentYear} {personalInfo.shortName}. All rights reserved.
          </div>

          <div className="flex items-center gap-2 text-slate-400 text-sm">
            <span>Built with</span>
            <FaHeart className="text-red-500" />
            <span>using</span>
            <FaReact className="text-cyan-400" />
            <span>&</span>
            <SiTailwindcss className="text-cyan-400" />
          </div>
        </div>
      </div>
    </footer>
  );
}
