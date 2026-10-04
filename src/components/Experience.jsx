// ============================================================
// Experience.jsx — Work Experience & Education Section
// ============================================================
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, GraduationCap, Award, ChevronRight } from 'lucide-react';
import SectionHeading from './SectionHeading';
import { experience, education } from '../data/content';

export default function Experience() {
  return (
    <div className="section">
      <div className="container">
        <SectionHeading
          title="Experience & Education"
          subtitle="My professional career in AI & software systems, alongside academic background"
        />

        {/* ── Timeline Container ────────────────────────────── */}
        <div style={{ position: 'relative', marginBottom: '4rem', paddingLeft: '1rem' }}>
          {/* Vertical connecting gradient line */}
          <div
            aria-hidden="true"
            style={{
              position: 'absolute',
              top: '24px',
              bottom: '24px',
              left: '23px',
              width: '2px',
              background: 'linear-gradient(to bottom, var(--accent), var(--accent-2), transparent)',
              zIndex: 0,
            }}
          />

          <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
            {experience.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                style={{
                  position: 'relative',
                  display: 'flex',
                  gap: '1.75rem',
                  alignItems: 'flex-start',
                }}
              >
                {/* Timeline node icon */}
                <div
                  style={{
                    position: 'relative',
                    width: '32px',
                    height: '32px',
                    borderRadius: '50%',
                    background: 'var(--surface)',
                    border: '2px solid var(--accent)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                    zIndex: 1,
                    boxShadow: '0 0 16px rgba(99, 102, 241, 0.4)',
                  }}
                >
                  <Briefcase size={15} color="var(--accent-2)" />
                </div>

                {/* Experience Card */}
                <div
                  className="card"
                  style={{
                    flex: 1,
                    padding: '1.75rem 2rem',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '1rem',
                  }}
                >
                  {/* Header: Role & Company */}
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'flex-start',
                      flexWrap: 'wrap',
                      gap: '0.75rem',
                    }}
                  >
                    <div>
                      <h3
                        style={{
                          fontSize: '1.35rem',
                          fontWeight: 700,
                          color: 'var(--text)',
                          fontFamily: 'var(--font-head)',
                        }}
                      >
                        {item.role}
                      </h3>
                      <div
                        style={{
                          fontSize: '1.05rem',
                          fontWeight: 600,
                          color: 'var(--accent-2)',
                          marginTop: '0.2rem',
                        }}
                      >
                        {item.company}
                      </div>
                    </div>

                    {/* Metadata: Date & Location */}
                    <div
                      style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'flex-end',
                        gap: '0.35rem',
                      }}
                    >
                      <span
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '0.4rem',
                          fontSize: '0.875rem',
                          fontFamily: 'var(--font-mono)',
                          color: 'var(--text-muted)',
                        }}
                      >
                        <Calendar size={14} /> {item.period}
                      </span>
                      <span
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '0.35rem',
                          fontSize: '0.8125rem',
                          color: 'var(--text-muted)',
                        }}
                      >
                        <MapPin size={13} /> {item.location}
                      </span>
                    </div>
                  </div>

                  {/* Bullet points */}
                  <ul
                    style={{
                      listStyle: 'none',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '0.65rem',
                      marginTop: '0.5rem',
                      paddingLeft: '0',
                    }}
                  >
                    {item.bullets.map((bullet, bIdx) => (
                      <li
                        key={bIdx}
                        style={{
                          display: 'flex',
                          alignItems: 'flex-start',
                          gap: '0.6rem',
                          fontSize: '0.95rem',
                          color: 'var(--text)',
                          lineHeight: 1.6,
                        }}
                      >
                        <ChevronRight
                          size={16}
                          color="var(--accent)"
                          style={{ flexShrink: 0, marginTop: '4px' }}
                        />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Tech stack tags */}
                  {item.tech && item.tech.length > 0 && (
                    <div
                      style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        gap: '0.5rem',
                        marginTop: '0.75rem',
                        paddingTop: '1rem',
                        borderTop: '1px solid var(--border)',
                      }}
                    >
                      {item.tech.map((t) => (
                        <span key={t} className="chip" style={{ fontSize: '0.75rem' }}>
                          {t}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ── Education Card ───────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h3
            style={{
              fontSize: '1.25rem',
              fontWeight: 700,
              color: 'var(--text)',
              marginBottom: '1.25rem',
              fontFamily: 'var(--font-head)',
              display: 'flex',
              alignItems: 'center',
              gap: '0.6rem',
            }}
          >
            <GraduationCap size={22} color="var(--accent-2)" /> Academic Background
          </h3>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '1.5rem',
            }}
          >
            {education.map((edu, idx) => (
              <div
                key={idx}
                className="card"
                style={{
                  padding: '1.75rem',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.75rem',
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '0.5rem' }}>
                  <div>
                    <h4
                      style={{
                        fontSize: '1.15rem',
                        fontWeight: 700,
                        color: 'var(--text)',
                        fontFamily: 'var(--font-head)',
                      }}
                    >
                      {edu.degree}
                    </h4>
                    <p style={{ fontSize: '0.95rem', color: 'var(--accent-2)', marginTop: '0.2rem', fontWeight: 600 }}>
                      {edu.school}
                    </p>
                  </div>
                  <span className="chip" style={{ fontFamily: 'var(--font-mono)' }}>
                    {edu.period}
                  </span>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', flexWrap: 'wrap', marginTop: '0.25rem' }}>
                  <span style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--text)' }}>
                    {edu.grade}
                  </span>
                  {edu.highlight && (
                    <span
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.35rem',
                        fontSize: '0.85rem',
                        color: 'var(--accent-2)',
                        fontWeight: 500,
                      }}
                    >
                      <Award size={15} /> {edu.highlight}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
