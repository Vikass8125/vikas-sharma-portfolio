// ============================================================
// About.jsx — About Me Section
// ============================================================
import { motion } from 'framer-motion';
import { Brain, Zap, GitBranch, Users, CheckCircle2 } from 'lucide-react';
import SectionHeading from './SectionHeading';
import { about } from '../data/content';

export default function About() {
  const getHighlightIcon = (iconName) => {
    const props = { size: 24, color: 'var(--accent-2)' };
    switch (iconName) {
      case 'brain':
        return <Brain {...props} />;
      case 'zap':
        return <Zap {...props} />;
      case 'git-branch':
        return <GitBranch {...props} />;
      case 'users':
        return <Users {...props} />;
      default:
        return <CheckCircle2 {...props} />;
    }
  };

  return (
    <div className="section">
      <div className="container">
        <SectionHeading
          title="About Me"
          subtitle="My background, engineering philosophy, and journey from systems automation into Generative AI"
        />

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '3rem',
            alignItems: 'start',
          }}
        >
          {/* ── Left Column: Story / Bio Paragraphs ────────────── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '1.25rem',
            }}
          >
            {about.paragraphs.map((p, index) => (
              <p
                key={index}
                style={{
                  fontSize: '1.05rem',
                  lineHeight: 1.75,
                  color: 'var(--text)',
                }}
              >
                {p}
              </p>
            ))}

            {/* Quick highlight callout box */}
            <div
              style={{
                marginTop: '1rem',
                padding: '1.25rem 1.5rem',
                background: 'color-mix(in srgb, var(--accent) 8%, var(--surface))',
                borderLeft: '4px solid var(--accent)',
                borderRadius: '0 12px 12px 0',
              }}
            >
              <p
                style={{
                  fontStyle: 'italic',
                  fontSize: '0.95rem',
                  color: 'var(--text)',
                  lineHeight: 1.6,
                }}
              >
                "I focus on building AI systems that solve real operational bottlenecks — not just proof of concepts, but reliable, observable backends deployed in production."
              </p>
            </div>
          </motion.div>

          {/* ── Right Column: 4 What I Bring Cards ──────────────── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
              gap: '1.25rem',
            }}
          >
            {about.highlights.map((item, idx) => (
              <div
                key={idx}
                className="card"
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.75rem',
                  padding: '1.5rem',
                  position: 'relative',
                  overflow: 'hidden',
                }}
              >
                <div
                  style={{
                    width: '44px',
                    height: '44px',
                    borderRadius: '10px',
                    background: 'var(--surface-2)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    border: '1px solid var(--border)',
                  }}
                >
                  {getHighlightIcon(item.icon)}
                </div>

                <h3
                  style={{
                    fontSize: '1.1rem',
                    fontWeight: 600,
                    color: 'var(--text)',
                    fontFamily: 'var(--font-head)',
                  }}
                >
                  {item.title}
                </h3>

                <p
                  style={{
                    fontSize: '0.9rem',
                    color: 'var(--text-muted)',
                    lineHeight: 1.55,
                  }}
                >
                  {item.description}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
