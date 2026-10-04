// ============================================================
// App.jsx — Root application shell
// Phase 1: Minimal scaffold — verifies Tailwind, fonts, and
// theme toggle work correctly before adding all sections.
// Will be replaced with full section assembly in Phase 3.
// ============================================================

import { useTheme } from './hooks/useTheme';
import { Sun, Moon } from 'lucide-react';

function App() {
  const { theme, toggle } = useTheme();

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '1.5rem' }}>
      {/* Skip to content — accessibility */}
      <a href="#main" className="sr-only focus:not-sr-only" style={{ position: 'absolute', top: 8, left: 8, background: 'var(--accent)', color: '#fff', padding: '0.5rem 1rem', borderRadius: '8px', zIndex: 1000 }}>
        Skip to content
      </a>

      <main id="main" style={{ textAlign: 'center' }}>
        <h1 style={{ fontFamily: 'var(--font-head)', marginBottom: '0.5rem' }}>
          <span className="gradient-text">Phase 1 ✓</span>
        </h1>
        <p style={{ marginBottom: '1.5rem' }}>
          Vite + React + Tailwind v4 + Framer Motion scaffold is working.
        </p>

        {/* Theme toggle test */}
        <button
          onClick={toggle}
          className="btn-outline"
          aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
          style={{ gap: '0.5rem' }}
        >
          {theme === 'dark'
            ? <Sun size={18} aria-hidden="true" />
            : <Moon size={18} aria-hidden="true" />}
          {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
        </button>

        {/* Font + chip smoke-test */}
        <div style={{ marginTop: '2rem', display: 'flex', gap: '0.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          {['Python', 'FastAPI', 'LangChain', 'RAG', 'AI Agents'].map((tag) => (
            <span key={tag} className="chip">{tag}</span>
          ))}
        </div>

        {/* Card smoke-test */}
        <div className="card" style={{ marginTop: '2rem', maxWidth: '360px', marginInline: 'auto' }}>
          <h3 style={{ marginBottom: '0.5rem', fontFamily: 'var(--font-head)' }}>Design System ✓</h3>
          <p>Cards, gradients, chips, and buttons are all working correctly.</p>
        </div>
      </main>
    </div>
  );
}

export default App;
