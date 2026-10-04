// ============================================================
// ProjectCard.jsx — Individual project card
// ============================================================
import { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Sparkles, CheckCircle2 } from 'lucide-react';
import { GithubIcon } from './Icons';

export default function ProjectCard({ project, index }) {
  const [imgError, setImgError] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="card"
      style={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        padding: 0,
        overflow: 'hidden',
        position: 'relative',
      }}
    >
      {/* ── Card Thumbnail Area ──────────────────────────────── */}
      <div
        style={{
          width: '100%',
          height: '190px',
          position: 'relative',
          background: 'radial-gradient(ellipse at top, var(--surface-2), var(--surface))',
          overflow: 'hidden',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderBottom: '1px solid var(--border)',
        }}
      >
        {!imgError && project.image ? (
          <img
            src={project.image}
            alt={project.title}
            onError={() => setImgError(true)}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              transition: 'transform 0.4s ease',
            }}
            loading="lazy"
          />
        ) : (
          /* Rich Aesthetic Graphic Fallback */
          <div
            style={{
              width: '100%',
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '1.5rem',
              position: 'relative',
            }}
          >
            {/* Subtle glow circle */}
            <div
              aria-hidden="true"
              style={{
                position: 'absolute',
                width: '130px',
                height: '130px',
                borderRadius: '50%',
                background: 'var(--gradient)',
                opacity: 0.18,
                filter: 'blur(28px)',
              }}
            />
            <div
              style={{
                width: '54px',
                height: '54px',
                borderRadius: '14px',
                background: 'var(--surface-2)',
                border: '1px solid var(--border)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                zIndex: 1,
                boxShadow: '0 8px 24px rgba(0,0,0,0.25)',
                marginBottom: '0.6rem',
              }}
            >
              <Sparkles size={24} color="var(--accent-2)" />
            </div>
            <span
              style={{
                fontFamily: 'var(--font-head)',
                fontWeight: 700,
                fontSize: '1.1rem',
                color: 'var(--text)',
                zIndex: 1,
                textAlign: 'center',
              }}
            >
              {project.title}
            </span>
          </div>
        )}

        {/* Featured Badge */}
        {project.featured && (
          <span
            style={{
              position: 'absolute',
              top: '1rem',
              right: '1rem',
              background: 'var(--accent)',
              color: '#FFFFFF',
              fontSize: '0.75rem',
              fontWeight: 700,
              padding: '0.25rem 0.65rem',
              borderRadius: '9999px',
              boxShadow: '0 4px 12px rgba(99, 102, 241, 0.4)',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.35rem',
              zIndex: 2,
            }}
          >
            <Sparkles size={12} /> Featured
          </span>
        )}
      </div>

      {/* ── Card Content Body ────────────────────────────────── */}
      <div
        style={{
          padding: '1.75rem',
          display: 'flex',
          flexDirection: 'column',
          flex: 1,
          gap: '1rem',
        }}
      >
        <div>
          <h3
            style={{
              fontSize: '1.3rem',
              fontWeight: 700,
              color: 'var(--text)',
              fontFamily: 'var(--font-head)',
              marginBottom: '0.4rem',
            }}
          >
            {project.title}
          </h3>
          <p
            style={{
              fontSize: '0.925rem',
              color: 'var(--text-muted)',
              lineHeight: 1.55,
            }}
          >
            {project.summary}
          </p>
        </div>

        {/* Problem → Solution → Result details */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '0.5rem',
            background: 'var(--surface-2)',
            padding: '1rem',
            borderRadius: '10px',
            border: '1px solid var(--border)',
            fontSize: '0.875rem',
          }}
        >
          <div>
            <span style={{ fontWeight: 700, color: 'var(--accent-2)', marginRight: '0.4rem' }}>
              Problem:
            </span>
            <span style={{ color: 'var(--text-muted)' }}>{project.problem}</span>
          </div>
          <div>
            <span style={{ fontWeight: 700, color: 'var(--accent)', marginRight: '0.4rem' }}>
              Solution:
            </span>
            <span style={{ color: 'var(--text)' }}>{project.solution}</span>
          </div>
          <div>
            <span style={{ fontWeight: 700, color: 'var(--success)', marginRight: '0.4rem', display: 'inline-flex', alignItems: 'center', gap: '0.2rem' }}>
              <CheckCircle2 size={13} /> Impact:
            </span>
            <span style={{ color: 'var(--text)' }}>{project.result}</span>
          </div>
        </div>

        {/* Tech Chips */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '0.45rem',
            marginTop: 'auto',
          }}
        >
          {project.tech.map((t) => (
            <span key={t} className="chip" style={{ fontSize: '0.75rem' }}>
              {t}
            </span>
          ))}
        </div>

        {/* Action Buttons */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.75rem',
            paddingTop: '0.75rem',
            borderTop: '1px solid var(--border)',
          }}
        >
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline"
              aria-label={`View ${project.title} on GitHub`}
              style={{
                fontSize: '0.85rem',
                padding: '0.45rem 0.9rem',
                textDecoration: 'none',
              }}
            >
              <GithubIcon size={15} /> Source
            </a>
          )}

          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gradient"
              aria-label={`View live demo of ${project.title}`}
              style={{
                fontSize: '0.85rem',
                padding: '0.45rem 0.9rem',
                textDecoration: 'none',
              }}
            >
              <ExternalLink size={15} /> Live Demo
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}
