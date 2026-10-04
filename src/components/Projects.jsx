// ============================================================
// Projects.jsx — Clean & Elegant Projects Slideshow
// ============================================================
import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, CheckCircle2, ChevronRight as ChevronIcon, Clock } from 'lucide-react';
import { GithubIcon } from './Icons';
import SectionHeading from './SectionHeading';
import { projects } from '../data/content';

const slideVariants = {
  enter: (direction) => ({
    x: direction > 0 ? 260 : -260,
    opacity: 0,
    scale: 0.97,
  }),
  center: {
    x: 0,
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.4,
      ease: [0.16, 1, 0.3, 1],
    },
  },
  exit: (direction) => ({
    x: direction < 0 ? 260 : -260,
    opacity: 0,
    scale: 0.97,
    transition: {
      duration: 0.3,
      ease: [0.16, 1, 0.3, 1],
    },
  }),
};

export default function Projects() {
  const [page, setPage] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const total = projects.length;
  const current = projects[page];

  const paginate = useCallback(
    (newDirection) => {
      setDirection(newDirection);
      setPage((prev) => (prev + newDirection + total) % total);
    },
    [total]
  );

  // Auto-play every 8 seconds, pauses on hover
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      paginate(1);
    }, 8000);
    return () => clearInterval(timer);
  }, [isPaused, paginate]);

  return (
    <div className="section">
      <div className="container">
        {/* Section Heading — Clean, standard layout */}
        <SectionHeading
          title="Projects"
          subtitle="Featured machine learning systems, Generative AI pipelines, and upcoming production architectures"
        />

        {/* ── Slideshow Container ───────────────────────────── */}
        <div
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          style={{
            position: 'relative',
            maxWidth: '880px',
            marginInline: 'auto',
          }}
        >
          {/* Main Slide Card */}
          <div
            style={{
              position: 'relative',
              minHeight: '380px',
              overflow: 'hidden',
              borderRadius: 'var(--radius-card)',
              background: 'radial-gradient(ellipse at top left, var(--surface-2), var(--surface))',
              border: '1px solid var(--border)',
              boxShadow: '0 20px 50px rgba(0, 0, 0, 0.35)',
              padding: 'clamp(1.75rem, 4vw, 2.75rem)',
            }}
          >
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={page}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1.25rem',
                  height: '100%',
                }}
              >
                {/* Header: Category + Status Badge */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    flexWrap: 'wrap',
                    gap: '0.75rem',
                  }}
                >
                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.85rem',
                      color: 'var(--accent-2)',
                      fontWeight: 600,
                      letterSpacing: '0.5px',
                    }}
                  >
                    {current.category}
                  </span>

                  {current.isComingSoon ? (
                    <span
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.45rem',
                        background: 'rgba(99, 102, 241, 0.15)',
                        border: '1px solid var(--accent)',
                        borderRadius: '9999px',
                        padding: '0.3rem 0.85rem',
                        fontSize: '0.8rem',
                        fontWeight: 600,
                        color: 'var(--text)',
                      }}
                    >
                      <span className="pulse-dot" aria-hidden="true" />
                      Coming Soon
                    </span>
                  ) : (
                    <span
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.35rem',
                        background: 'rgba(52, 211, 153, 0.12)',
                        border: '1px solid var(--success)',
                        borderRadius: '9999px',
                        padding: '0.3rem 0.85rem',
                        fontSize: '0.8rem',
                        fontWeight: 600,
                        color: 'var(--success)',
                      }}
                    >
                      <CheckCircle2 size={13} /> {current.status}
                    </span>
                  )}
                </div>

                {/* Project Title */}
                <h3
                  style={{
                    fontFamily: 'var(--font-head)',
                    fontSize: 'clamp(1.5rem, 3.5vw, 1.95rem)',
                    fontWeight: 700,
                    color: 'var(--text)',
                    lineHeight: 1.25,
                  }}
                >
                  {current.title}
                </h3>

                {/* Tagline */}
                {current.tagline && (
                  <p
                    style={{
                      fontSize: '1rem',
                      fontWeight: 500,
                      color: 'var(--text)',
                      lineHeight: 1.55,
                    }}
                  >
                    {current.tagline}
                  </p>
                )}

                {/* Bullets List */}
                {current.bullets && current.bullets.length > 0 && (
                  <ul
                    style={{
                      listStyle: 'none',
                      padding: 0,
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '0.65rem',
                      marginTop: '0.25rem',
                    }}
                  >
                    {current.bullets.map((b, bIdx) => (
                      <li
                        key={bIdx}
                        style={{
                          display: 'flex',
                          alignItems: 'flex-start',
                          gap: '0.65rem',
                          fontSize: '0.9375rem',
                          color: 'var(--text-muted)',
                          lineHeight: 1.6,
                        }}
                      >
                        <ChevronIcon
                          size={16}
                          color="var(--accent-2)"
                          style={{ flexShrink: 0, marginTop: '4px' }}
                        />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {/* Tech Chips */}
                <div
                  style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '0.5rem',
                    marginTop: 'auto',
                    paddingTop: '1.25rem',
                    borderTop: '1px solid var(--border)',
                  }}
                >
                  {current.tech.map((t) => (
                    <span key={t} className="chip" style={{ fontSize: '0.8125rem' }}>
                      {t}
                    </span>
                  ))}
                </div>

                {/* Action Row */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    flexWrap: 'wrap',
                    gap: '1rem',
                    paddingTop: '0.25rem',
                  }}
                >
                  {current.isComingSoon ? (
                    <span
                      style={{
                        fontSize: '0.85rem',
                        color: 'var(--text-muted)',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.4rem',
                      }}
                    >
                      <Clock size={14} color="var(--accent-2)" /> In Active Development · Coming Soon
                    </span>
                  ) : (
                    <a
                      href={current.github || "https://github.com/Vikass8125"}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-outline"
                      style={{
                        padding: '0.45rem 1rem',
                        fontSize: '0.85rem',
                        textDecoration: 'none',
                      }}
                    >
                      <GithubIcon size={16} /> View on GitHub
                    </a>
                  )}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* ── Slide Navigation Controls ──────────────────────── */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginTop: '1.5rem',
              paddingInline: '0.5rem',
            }}
          >
            {/* Prev Button */}
            <button
              onClick={() => paginate(-1)}
              aria-label="Previous project slide"
              className="btn-outline"
              style={{
                width: '42px',
                height: '42px',
                padding: 0,
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <ChevronLeft size={18} />
            </button>

            {/* Indicator Dots + Counter */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <div style={{ display: 'flex', gap: '0.5rem' }}>
                {projects.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      setDirection(idx > page ? 1 : -1);
                      setPage(idx);
                    }}
                    aria-label={`Go to slide ${idx + 1}`}
                    style={{
                      width: idx === page ? '28px' : '10px',
                      height: '10px',
                      borderRadius: '9999px',
                      background: idx === page ? 'var(--accent)' : 'var(--border)',
                      border: 'none',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease',
                    }}
                  />
                ))}
              </div>

              <span
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.85rem',
                  color: 'var(--text-muted)',
                }}
              >
                0{page + 1} / 0{total}
              </span>
            </div>

            {/* Next Button */}
            <button
              onClick={() => paginate(1)}
              aria-label="Next project slide"
              className="btn-outline"
              style={{
                width: '42px',
                height: '42px',
                padding: 0,
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
