// ============================================================
// Skills.jsx — Skills Section
// ============================================================
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Brain, Server, Cloud, BarChart2, Wrench, Sparkles } from 'lucide-react';
import SectionHeading from './SectionHeading';
import { skills } from '../data/content';

export default function Skills() {
  const [selectedFilter, setSelectedFilter] = useState('All');

  const getGroupIcon = (iconName) => {
    const props = { size: 22, color: 'var(--accent-2)' };
    switch (iconName) {
      case 'brain':
        return <Brain {...props} />;
      case 'server':
        return <Server {...props} />;
      case 'cloud':
        return <Cloud {...props} />;
      case 'bar-chart-2':
        return <BarChart2 {...props} />;
      case 'wrench':
        return <Wrench {...props} />;
      default:
        return <Sparkles {...props} />;
    }
  };

  const categories = ['All', ...skills.map((s) => s.group)];
  const displayedSkills = selectedFilter === 'All'
    ? skills
    : skills.filter((s) => s.group === selectedFilter);

  return (
    <div className="section">
      <div className="container">
        <SectionHeading
          title="Technical Skills"
          subtitle="Core competencies, frameworks, vector databases, and engineering tools I use to build scalable systems"
        />

        {/* ── Category Filter Pills ─────────────────────────── */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '0.6rem',
            marginBottom: '2.5rem',
            justifyContent: 'flex-start',
          }}
        >
          {categories.map((cat) => {
            const isActive = selectedFilter === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedFilter(cat)}
                style={{
                  padding: '0.45rem 1.1rem',
                  borderRadius: '9999px',
                  fontSize: '0.875rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  background: isActive ? 'var(--accent)' : 'var(--surface)',
                  color: isActive ? '#FFFFFF' : 'var(--text-muted)',
                  border: isActive ? '1px solid var(--accent)' : '1px solid var(--border)',
                  boxShadow: isActive ? '0 4px 14px rgba(99, 102, 241, 0.3)' : 'none',
                }}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* ── Skills Grid ───────────────────────────────────── */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '1.75rem',
          }}
        >
          <AnimatePresence mode="popLayout">
            {displayedSkills.map((grp) => (
              <motion.div
                key={grp.group}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="card"
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1.25rem',
                  padding: '1.75rem',
                }}
              >
                {/* Group Header */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <div
                    style={{
                      width: '42px',
                      height: '42px',
                      borderRadius: '10px',
                      background: 'var(--surface-2)',
                      border: '1px solid var(--border)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    {getGroupIcon(grp.icon)}
                  </div>
                  <div>
                    <h3
                      style={{
                        fontSize: '1.15rem',
                        fontWeight: 700,
                        color: 'var(--text)',
                        fontFamily: 'var(--font-head)',
                      }}
                    >
                      {grp.group}
                    </h3>
                    <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                      {grp.items.length} skills
                    </span>
                  </div>
                </div>

                {/* Skill Chips */}
                <div
                  style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '0.5rem',
                  }}
                >
                  {grp.items.map((skill) => (
                    <span
                      key={skill}
                      className="chip"
                      style={{
                        transition: 'transform 0.15s ease, border-color 0.15s ease',
                        cursor: 'default',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'translateY(-2px)';
                        e.currentTarget.style.borderColor = 'var(--accent)';
                        e.currentTarget.style.color = '#FFFFFF';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'translateY(0)';
                        e.currentTarget.style.borderColor = 'var(--border)';
                        e.currentTarget.style.color = 'var(--accent-2)';
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
