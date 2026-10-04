// ============================================================
// Projects.jsx — Slideshow / Carousel driven by content.js
// ============================================================
import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Clock, ArrowRight, CheckCircle2, ChevronRight as ChevronIcon } from 'lucide-react';
import { GithubIcon } from './Icons';
import SectionHeading from './SectionHeading';
import { projects } from '../data/content';

const slideVariants = {
  enter: (direction) => ({
    x: direction > 0 ? 280 : -280,
    opacity: 0,
    scale: 0.96,
  }),
  center: {
    x: 0,
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.45,
      ease: [0.16, 1, 0.3, 1],
    },
  },
  exit: (direction) => ({
    x: direction < 0 ? 280 : -280,
    opacity: 0,
    scale: 0.96,
    transition: {
      duration: 0.35,
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

  // Auto-play slideshow every 7 seconds when not hovered
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      paginate(1);
    }, 7000);
    return () => clearInterval(timer);
  }, [isPaused, paginate]);

  return (
    <div className="section">
      <div className="container">
        {/* Heading */}
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <SectionHeading
            title="Projects"
            subtitle="Machine Learning systems, Generative AI pipelines, and production backend architectures"
            centered={true}
          />

          {/* Central Announcement Banner */}
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.65rem',
              padding: '0.45rem 1.25rem',
              borderRadius: '9999px',
              background: 'color-mix(in srgb, var(--accent) 12%, var(--surface))',
              border: '1px solid var(--accent)',
              boxShadow: '0 4px 20px rgba(99, 102, 241, 0.25)',
              marginTop: '0.5rem',
            }}
          >
            <Clock size={16} color="var(--accent-2)" />
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.875rem',
                fontWeight: 600,
                color: 'var(--accent-2)',
                letterSpacing: '0.5px',
              }}
            >
              PORTFOLIO SHOWCASE · SLIDESHOW VIEW
            </span>
          </div>

          <p
            style={{
              fontSize: '0.95rem',
              color: 'var(--text-muted)',
              marginTop: '0.85rem',
              maxWidth: '65ch',
              marginInline: 'auto',
            }}
          >
            Featured projects and upcoming Generative AI systems currently in development and packaging for release.
          </p>
        </div>

        {/* ── Slideshow Container ───────────────────────────── */}
        <div
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          style={{
            position: 'relative',
            maxWidth: '860px',
            marginInline: 'auto',
          }}
        >
          {/* Main Slide Card */}
          <div
            style={{
              position: 'relative',
              minHeight: '420px',
              overflow: 'hidden',
              borderRadius: 'var(--radius-card)',
              background: 'radial-gradient(ellipse at top left, var(--surface-2), var(--surface))',
              border: '1px solid var(--border)',
              boxShadow: '0 20px 50px rgba(0, 0, 0, 0.3)',
              padding: '2.5rem',
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
                {/* Slide Top Metadata Bar */}
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

                  {/* Status Badge */}
                  {current.isComingSoon ? (
                    <span
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.45rem',
                        background: 'rgba(99, 102, 241, 0.18)',
                        border: '1px solid var(--accent)',
                        borderRadius: '9999px',
                        padding: '0.25rem 0.75rem',
                        fontSize: '0.785rem',
                        fontWeight: 700,
                        color: '#FFFFFF',
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
                        background: 'rgba(52, 211, 153, 0.15)',
                        border: '1px solid var(--success)',
                        borderRadius: '9999px',
                        padding: '0.25rem 0.75rem',
                        fontSize: '0.785rem',
                        fontWeight: 700,
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
                    fontSize: 'clamp(1.5rem, 3.5vw, 2rem)',
                    fontWeight: 700,
                    color: 'var(--text)',
                    lineHeight: 1.2,
                  }}
                >
                  {current.title}
                </h3>

                {/* Tagline / Value Prop */}
                {current.tagline && (
                  <p
                    style={{
                      fontSize: '1.025rem',
                      fontWeight: 500,
                      color: 'var(--text)',
                      lineHeight: 1.5,
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
                      gap: '0.6rem',
                      marginTop: '0.25rem',
                    }}
                  >
                    {current.bullets.map((b, bIdx) => (
                      <li
                        key={bIdx}
                        style={{
                          display: 'flex',
                          alignItems: 'flex-start',
                          gap: '0.6rem',
                          fontSize: '0.925rem',
                          color: 'var(--text-muted)',
                          lineHeight: 1.6,
                        }}
                      >
                        <ChevronIcon
                          size={15}
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
                    paddingTop: '1rem',
                  }}
                >
                  {current.tech.map((t) => (
                    <span key={t} className="chip" style={{ fontSize: '0.8rem' }}>
                      {t}
                    </span>
                  ))}
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
              marginTop: '1.75rem',
              paddingInline: '0.5rem',
            }}
          >
            {/* Prev Button */}
            <button
              onClick={() => paginate(-1)}
              aria-label="Previous project slide"
              className="btn-outline"
              style={{
                width: '44px',
                height: '44px',
                padding: 0,
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <ChevronLeft size={20} />
            </button>

            {/* Dots + Slide Counter */}
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
                width: '44px',
                height: '44px',
                padding: 0,
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* ── View GitHub Activity Banner ─────────────────────── */}
        <div
          style={{
            marginTop: '3.5rem',
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '1rem',
          }}
        >
          <a
            href="https://github.com/Vikass8125"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline"
            style={{
              padding: '0.75rem 1.75rem',
              fontSize: '0.95rem',
              textDecoration: 'none',
            }}
          >
            <GithubIcon size={18} /> Follow My GitHub For Live Commits <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </div>
  );
}
