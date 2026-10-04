// ============================================================
// SectionHeading.jsx — Reusable section heading with gradient accent
// ============================================================
import { motion } from 'framer-motion';

export default function SectionHeading({ title, subtitle, centered = false }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      style={{
        marginBottom: '3rem',
        textAlign: centered ? 'center' : 'left',
      }}
    >
      <h2
        style={{
          fontFamily: 'var(--font-head)',
          fontSize: 'clamp(1.75rem, 4vw, 2.5rem)',
          fontWeight: 700,
          color: 'var(--text)',
          marginBottom: '0.5rem',
          display: 'inline-block',
          position: 'relative',
        }}
      >
        {title}
        {/* Gradient underline accent */}
        <span
          aria-hidden="true"
          style={{
            display: 'block',
            height: '3px',
            borderRadius: '99px',
            background: 'var(--gradient)',
            marginTop: '6px',
            width: '48px',
            marginLeft: centered ? 'auto' : '0',
          }}
        />
      </h2>

      {subtitle && (
        <p
          style={{
            color: 'var(--text-muted)',
            fontSize: '1.0625rem',
            marginTop: '0.75rem',
            maxWidth: '55ch',
            marginLeft: centered ? 'auto' : '0',
            marginRight: centered ? 'auto' : '0',
          }}
        >
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
