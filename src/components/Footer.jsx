// ============================================================
// Footer.jsx — Footer with Back-to-Top and Social Links
// ============================================================
import { ArrowUp, Mail, Phone } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { profile, socials } from '../data/content';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const getSocialIcon = (iconName) => {
    switch (iconName.toLowerCase()) {
      case 'github':
        return <GithubIcon size={18} />;
      case 'linkedin':
        return <LinkedinIcon size={18} />;
      case 'mail':
        return <Mail size={18} />;
      case 'phone':
        return <Phone size={18} />;
      default:
        return <Mail size={18} />;
    }
  };

  return (
    <footer
      style={{
        borderTop: '1px solid var(--border)',
        background: 'var(--surface)',
        padding: '3rem 0',
        marginTop: '4rem',
      }}
    >
      <div
        className="container"
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '1.5rem',
        }}
      >
        {/* Left: Branding & Copyright */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
            <span
              style={{
                fontFamily: 'var(--font-head)',
                fontSize: '1.25rem',
                fontWeight: 700,
              }}
              className="gradient-text"
            >
              VS
            </span>
            <span style={{ fontSize: '0.925rem', fontWeight: 600, color: 'var(--text)' }}>
              {profile.name}
            </span>
          </div>

          <p style={{ fontSize: '0.825rem', color: 'var(--text-muted)' }}>
            © {new Date().getFullYear()} {profile.name}. All rights reserved.
          </p>

          <p style={{ fontSize: '0.775rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
            Built with React, Vite, Tailwind & Framer Motion
          </p>
        </div>

        {/* Center: Social Icons */}
        <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
          {socials.map((item) => (
            <a
              key={item.label}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Visit Vikas on ${item.label}`}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '36px',
                height: '36px',
                borderRadius: '8px',
                background: 'var(--surface-2)',
                border: '1px solid var(--border)',
                color: 'var(--text-muted)',
                transition: 'all 0.2s ease',
                textDecoration: 'none',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = 'var(--accent-2)';
                e.currentTarget.style.borderColor = 'var(--accent)';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = 'var(--text-muted)';
                e.currentTarget.style.borderColor = 'var(--border)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              {getSocialIcon(item.icon)}
            </a>
          ))}
        </div>

        {/* Right: Back to Top */}
        <button
          onClick={scrollToTop}
          className="btn-outline"
          aria-label="Scroll back to top"
          style={{
            padding: '0.45rem 0.9rem',
            fontSize: '0.825rem',
          }}
        >
          <ArrowUp size={15} /> Top
        </button>
      </div>
    </footer>
  );
}
