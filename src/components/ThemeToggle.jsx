// ============================================================
// ThemeToggle.jsx — Dark / Light mode toggle button
// ============================================================
import { Sun, Moon } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ThemeToggle({ theme, toggle }) {
  const isDark = theme === 'dark';

  return (
    <motion.button
      onClick={toggle}
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
      title={`Switch to ${isDark ? 'light' : 'dark'} mode`}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.92 }}
      style={{
        background: 'var(--surface-2)',
        border: '1px solid var(--border)',
        borderRadius: '8px',
        padding: '0.45rem',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'var(--text-muted)',
        transition: 'border-color 0.2s, color 0.2s',
        flexShrink: 0,
      }}
    >
      <motion.span
        key={theme}
        initial={{ rotate: -30, opacity: 0 }}
        animate={{ rotate: 0, opacity: 1 }}
        transition={{ duration: 0.25 }}
        style={{ display: 'flex' }}
      >
        {isDark
          ? <Sun size={18} aria-hidden="true" />
          : <Moon size={18} aria-hidden="true" />}
      </motion.span>
    </motion.button>
  );
}
