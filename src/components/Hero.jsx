// ============================================================
// Hero.jsx — Hero Section
// ============================================================
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, FileDown, ArrowRight, Sparkles, MapPin } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { profile, socials } from '../data/content';

export default function Hero() {
  const [imgError, setImgError] = useState(false);

  const getSocialIcon = (iconName) => {
    switch (iconName.toLowerCase()) {
      case 'github':
        return <GithubIcon size={20} />;
      case 'linkedin':
        return <LinkedinIcon size={20} />;
      case 'mail':
        return <Mail size={20} />;
      default:
        return <Mail size={20} />;
    }
  };

  return (
    <div className="section" style={{ paddingTop: '3rem', minHeight: 'calc(100vh - 64px)', display: 'flex', alignItems: 'center' }}>
      <div className="container" style={{ width: '100%' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '3.5rem',
            alignItems: 'center',
          }}
        >
          {/* ── Left Column: Content ────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            {/* Status Pill */}
            {profile.openToWork && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.1, duration: 0.4 }}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.6rem',
                  padding: '0.35rem 0.9rem',
                  borderRadius: '9999px',
                  background: 'color-mix(in srgb, var(--surface) 90%, transparent)',
                  border: '1px solid var(--border)',
                  boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
                  marginBottom: '1.5rem',
                }}
              >
                <span className="pulse-dot" aria-hidden="true" />
                <span
                  style={{
                    fontSize: '0.8125rem',
                    fontWeight: 600,
                    color: 'var(--text)',
                    letterSpacing: '0.2px',
                  }}
                >
                  {profile.openToWorkLabel}
                </span>
              </motion.div>
            )}

            {/* H1 Heading */}
            <h1
              style={{
                fontFamily: 'var(--font-head)',
                fontWeight: 700,
                lineHeight: 1.1,
                marginBottom: '1rem',
                letterSpacing: '-1px',
              }}
            >
              Hi, I'm <span className="gradient-text">{profile.name}</span>
            </h1>

            {/* Sub-headline / Role */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
                flexWrap: 'wrap',
                marginBottom: '1.25rem',
              }}
            >
              <span
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '1rem',
                  fontWeight: 600,
                  color: 'var(--accent-2)',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                }}
              >
                <Sparkles size={16} /> {profile.title}
              </span>
              <span style={{ color: 'var(--text-muted)' }}>•</span>
              <span
                style={{
                  fontSize: '0.9375rem',
                  color: 'var(--text-muted)',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.35rem',
                }}
              >
                <MapPin size={15} /> {profile.location}
              </span>
            </div>

            {/* Tagline */}
            <p
              style={{
                fontSize: '1.1875rem',
                fontWeight: 500,
                color: 'var(--text)',
                lineHeight: 1.6,
                marginBottom: '0.85rem',
                maxWidth: '56ch',
              }}
            >
              {profile.tagline}
            </p>

            {/* Supporting Line */}
            <p
              style={{
                fontSize: '0.975rem',
                color: 'var(--text-muted)',
                lineHeight: 1.65,
                marginBottom: '2rem',
                maxWidth: '56ch',
              }}
            >
              {profile.supportingLine}
            </p>

            {/* Action Buttons */}
            <div
              style={{
                display: 'flex',
                gap: '1rem',
                alignItems: 'center',
                flexWrap: 'wrap',
                marginBottom: '2.25rem',
              }}
            >
              <a
                href="#projects"
                className="btn-gradient"
                style={{ textDecoration: 'none' }}
              >
                Explore Projects <ArrowRight size={16} />
              </a>

              <a
                href="#contact"
                className="btn-outline"
                style={{ textDecoration: 'none' }}
              >
                Get in Touch
              </a>

              <a
                href={profile.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline"
                style={{ textDecoration: 'none' }}
              >
                <FileDown size={16} /> Resume
              </a>
            </div>

            {/* Social Links Row */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <span style={{ fontSize: '0.875rem', color: 'var(--text-muted)', fontWeight: 500 }}>
                Connect:
              </span>
              <div style={{ display: 'flex', gap: '0.75rem' }}>
                {socials.map((item) => (
                  <a
                    key={item.label}
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Visit Vikas's ${item.label}`}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: '40px',
                      height: '40px',
                      borderRadius: '10px',
                      background: 'var(--surface)',
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
            </div>
          </motion.div>

          {/* ── Right Column: Profile Avatar Card ───────────────── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <div
              style={{
                position: 'relative',
                width: 'min(360px, 90vw)',
                aspectRatio: '1 / 1',
              }}
            >
              {/* Outer Glowing Decorative Ring */}
              <div
                aria-hidden="true"
                style={{
                  position: 'absolute',
                  inset: '-10px',
                  background: 'var(--gradient)',
                  borderRadius: '32px',
                  opacity: 0.35,
                  filter: 'blur(24px)',
                  zIndex: 0,
                }}
              />

              {/* Main Avatar Container */}
              <div
                style={{
                  position: 'relative',
                  width: '100%',
                  height: '100%',
                  borderRadius: '28px',
                  overflow: 'hidden',
                  background: 'var(--surface-2)',
                  border: '2px solid var(--border)',
                  boxShadow: '0 20px 50px rgba(0, 0, 0, 0.3)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  zIndex: 1,
                }}
              >
                {!imgError ? (
                  <img
                    src={profile.photo}
                    alt={profile.name}
                    onError={() => setImgError(true)}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      display: 'block',
                    }}
                  />
                ) : (
                  /* Stylized Monogram Graphic Fallback */
                  <div
                    style={{
                      width: '100%',
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'center',
                      background: 'radial-gradient(circle at 30% 30%, var(--surface-2), var(--surface))',
                      padding: '2rem',
                      textAlign: 'center',
                    }}
                  >
                    <div
                      style={{
                        width: '110px',
                        height: '110px',
                        borderRadius: '50%',
                        background: 'var(--gradient)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '2.5rem',
                        fontWeight: 800,
                        fontFamily: 'var(--font-head)',
                        color: '#FFFFFF',
                        boxShadow: '0 12px 30px rgba(99, 102, 241, 0.4)',
                        marginBottom: '1.25rem',
                      }}
                    >
                      VS
                    </div>
                    <span
                      style={{
                        fontFamily: 'var(--font-head)',
                        fontWeight: 700,
                        fontSize: '1.35rem',
                        color: 'var(--text)',
                      }}
                    >
                      {profile.name}
                    </span>
                    <span
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.85rem',
                        color: 'var(--accent-2)',
                        marginTop: '0.25rem',
                      }}
                    >
                      AI & GenAI Engineer
                    </span>
                  </div>
                )}

                {/* Floating Quick-Badge */}
                <div
                  style={{
                    position: 'absolute',
                    bottom: '1rem',
                    left: '1rem',
                    right: '1rem',
                    padding: '0.65rem 1rem',
                    background: 'color-mix(in srgb, var(--surface) 88%, transparent)',
                    backdropFilter: 'blur(12px)',
                    WebkitBackdropFilter: 'blur(12px)',
                    border: '1px solid var(--border)',
                    borderRadius: '16px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <Sparkles size={16} color="var(--accent-2)" />
                    <span style={{ fontSize: '0.8125rem', fontWeight: 600, color: 'var(--text)' }}>
                      Full-Stack AI & LLMs
                    </span>
                  </div>
                  <span className="chip" style={{ fontSize: '0.75rem', padding: '0.15rem 0.45rem' }}>
                    Production-Ready
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* ── Stats Bar Row ────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35, ease: 'easeOut' }}
          style={{
            marginTop: '4rem',
            padding: '1.75rem 2rem',
            background: 'var(--surface)',
            border: '1px solid var(--border)',
            borderRadius: 'var(--radius-card)',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '1.5rem',
            boxShadow: '0 8px 30px rgba(0, 0, 0, 0.1)',
          }}
        >
          {profile.stats.map((stat, idx) => (
            <div
              key={idx}
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '0.25rem',
                borderLeft: idx !== 0 ? '1px solid var(--border)' : 'none',
                paddingLeft: idx !== 0 ? '1.5rem' : '0',
              }}
            >
              <span
                style={{
                  fontFamily: 'var(--font-head)',
                  fontSize: 'clamp(1.5rem, 2.5vw, 2rem)',
                  fontWeight: 700,
                  color: 'var(--text)',
                  letterSpacing: '-0.5px',
                }}
                className="gradient-text"
              >
                {stat.value}
              </span>
              <span
                style={{
                  fontSize: '0.875rem',
                  fontWeight: 500,
                  color: 'var(--text-muted)',
                }}
              >
                {stat.label}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
