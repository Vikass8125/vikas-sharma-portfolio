// ============================================================
// Navbar.jsx — Sticky navigation bar
// ============================================================
// Features:
//   - Left: "VS" wordmark with gradient
//   - Center: smooth-scroll anchor links
//   - Right: ThemeToggle + Resume button
//   - Scroll-triggered backdrop blur (activates after 60px)
//   - Mobile: hamburger → full-screen overlay menu
//   - Keyboard accessible: Escape closes mobile menu
// ============================================================

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, FileDown } from 'lucide-react';
import { profile } from '../data/content';

const NAV_LINKS = [
  { label: 'About',      href: '#about' },
  { label: 'Skills',     href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects',   href: '#projects' },
  { label: 'Contact',    href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled]   = useState(false);
  const [menuOpen, setMenuOpen]   = useState(false);

  // ── Scroll listener for blur effect ────────────────────────
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // ── Close mobile menu on Escape ─────────────────────────────
  const handleKeyDown = useCallback((e) => {
    if (e.key === 'Escape') setMenuOpen(false);
  }, []);

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  // ── Lock body scroll when menu is open ──────────────────────
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  // ── Smooth scroll helper ─────────────────────────────────────
  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <>
      {/* ── Main Navbar ─────────────────────────────────────── */}
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        role="banner"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          borderBottom: scrolled ? '1px solid var(--border)' : '1px solid transparent',
          backdropFilter: scrolled ? 'blur(16px) saturate(1.5)' : 'none',
          WebkitBackdropFilter: scrolled ? 'blur(16px) saturate(1.5)' : 'none',
          backgroundColor: scrolled
            ? 'color-mix(in srgb, var(--surface) 85%, transparent)'
            : 'transparent',
          transition: 'background-color 0.3s, border-color 0.3s, backdrop-filter 0.3s',
        }}
      >
        <div
          className="container"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            height: '64px',
          }}
        >
          {/* ── Wordmark ──────────────────────────────────── */}
          <a
            href="#hero"
            onClick={(e) => handleNavClick(e, '#hero')}
            aria-label="Vikas Sharma — back to top"
            style={{
              fontFamily: 'var(--font-head)',
              fontSize: '1.375rem',
              fontWeight: 700,
              textDecoration: 'none',
              letterSpacing: '-0.5px',
            }}
          >
            <span className="gradient-text">VS</span>
          </a>

          {/* ── Desktop Nav Links ──────────────────────────── */}
          <nav
            aria-label="Main navigation"
            style={{
              display: 'flex',
              gap: '2rem',
              alignItems: 'center',
            }}
            className="desktop-nav"
          >
            {NAV_LINKS.map(({ label, href }) => (
              <a
                key={href}
                href={href}
                onClick={(e) => handleNavClick(e, href)}
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.9375rem',
                  fontWeight: 500,
                  color: 'var(--text-muted)',
                  textDecoration: 'none',
                  transition: 'color 0.2s',
                  padding: '0.25rem 0',
                  position: 'relative',
                }}
                onMouseEnter={(e) => (e.target.style.color = 'var(--text)')}
                onMouseLeave={(e) => (e.target.style.color = 'var(--text-muted)')}
              >
                {label}
              </a>
            ))}
          </nav>

          {/* ── Right: Resume Button ─────────────────────── */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <a
              href={profile.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline desktop-nav"
              aria-label="Download Vikas's resume"
              style={{ padding: '0.45rem 1rem', fontSize: '0.875rem' }}
            >
              <FileDown size={15} aria-hidden="true" />
              Resume
            </a>

            {/* ── Hamburger (mobile only) ──────────────────── */}
            <button
              onClick={() => setMenuOpen((o) => !o)}
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              className="mobile-menu-btn"
              style={{
                background: 'var(--surface-2)',
                border: '1px solid var(--border)',
                borderRadius: '8px',
                padding: '0.45rem',
                cursor: 'pointer',
                display: 'none',          /* shown via CSS on mobile */
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--text)',
              }}
            >
              {menuOpen ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
            </button>
          </div>
        </div>

        {/* ── Mobile Menu Overlay ──────────────────────────── */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              id="mobile-menu"
              role="dialog"
              aria-label="Mobile navigation menu"
              initial={{ opacity: 0, y: -16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.22, ease: 'easeOut' }}
              style={{
                position: 'fixed',
                inset: 0,
                top: '64px',
                backgroundColor: 'var(--bg)',
                zIndex: 99,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '2rem',
                padding: '2rem',
              }}
            >
              {NAV_LINKS.map(({ label, href }) => (
                <a
                  key={href}
                  href={href}
                  onClick={(e) => handleNavClick(e, href)}
                  style={{
                    fontFamily: 'var(--font-head)',
                    fontSize: '2rem',
                    fontWeight: 700,
                    color: 'var(--text)',
                    textDecoration: 'none',
                    transition: 'color 0.2s',
                  }}
                  onMouseEnter={(e) => (e.target.style.color = 'var(--accent)')}
                  onMouseLeave={(e) => (e.target.style.color = 'var(--text)')}
                >
                  {label}
                </a>
              ))}

              <a
                href={profile.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gradient"
                style={{ marginTop: '1rem' }}
                aria-label="Download resume"
              >
                <FileDown size={16} aria-hidden="true" />
                Download Resume
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      {/* ── Navbar height spacer (prevents content jumping under fixed bar) ── */}
      <div style={{ height: '64px' }} aria-hidden="true" />

      {/* ── Inline styles for responsive Navbar ──────────────── */}
      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: flex !important; }
        }
      `}</style>
    </>
  );
}
