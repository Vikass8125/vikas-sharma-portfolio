// ============================================================
// Projects.jsx — Projects Section
// ============================================================
import { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { GithubIcon } from './Icons';
import SectionHeading from './SectionHeading';
import ProjectCard from './ProjectCard';
import { projects } from '../data/content';

export default function Projects() {
  const [filter, setFilter] = useState('all');

  const filteredProjects = filter === 'featured'
    ? projects.filter((p) => p.featured)
    : projects;

  return (
    <div className="section">
      <div className="container">
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            flexWrap: 'wrap',
            gap: '1.5rem',
            marginBottom: '1rem',
          }}
        >
          <SectionHeading
            title="Featured Projects"
            subtitle="Production RAG applications, conversational AI agents, and backend machine learning pipelines"
          />

          {/* Filter toggle */}
          <div
            style={{
              display: 'flex',
              gap: '0.5rem',
              marginBottom: '3rem',
              background: 'var(--surface-2)',
              padding: '0.3rem',
              borderRadius: '9999px',
              border: '1px solid var(--border)',
            }}
          >
            <button
              onClick={() => setFilter('all')}
              style={{
                padding: '0.4rem 1rem',
                borderRadius: '9999px',
                fontSize: '0.85rem',
                fontWeight: 600,
                border: 'none',
                cursor: 'pointer',
                transition: 'all 0.2s',
                background: filter === 'all' ? 'var(--accent)' : 'transparent',
                color: filter === 'all' ? '#FFFFFF' : 'var(--text-muted)',
              }}
            >
              All Projects ({projects.length})
            </button>
            <button
              onClick={() => setFilter('featured')}
              style={{
                padding: '0.4rem 1rem',
                borderRadius: '9999px',
                fontSize: '0.85rem',
                fontWeight: 600,
                border: 'none',
                cursor: 'pointer',
                transition: 'all 0.2s',
                background: filter === 'featured' ? 'var(--accent)' : 'transparent',
                color: filter === 'featured' ? '#FFFFFF' : 'var(--text-muted)',
              }}
            >
              Featured Only
            </button>
          </div>
        </div>

        {/* ── 2-Column Responsive Grid ──────────────────────── */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
            gap: '2rem',
          }}
        >
          {filteredProjects.map((proj, idx) => (
            <ProjectCard key={proj.title} project={proj} index={idx} />
          ))}
        </div>

        {/* ── View All on GitHub Banner ─────────────────────── */}
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
            <GithubIcon size={18} /> View More Repositories on GitHub <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </div>
  );
}
