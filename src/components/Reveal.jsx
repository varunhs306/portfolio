import { motion } from 'framer-motion';

// Same fade-up curve as the hero entrance, triggered as each block scrolls into view.
export default function Reveal({ children, delay = 0, className, as = 'div' }) {
  const Component = motion[as];
  return (
    <Component
      className={className}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 1, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </Component>
  );
}
