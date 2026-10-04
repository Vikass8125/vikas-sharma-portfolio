// ============================================================
// Community.jsx — Research, Achievements & Certifications
// ============================================================
import { motion } from 'framer-motion';
import { FileText, Trophy, Users, ExternalLink, Award, Sparkles } from 'lucide-react';
import SectionHeading from './SectionHeading';
import { community, certifications } from '../data/content';

export default function Community() {
  if (!community || community.length === 0) return null;

  const getCommunityIcon = (iconName) => {
    const props = { size: 24, color: 'var(--accent-2)' };
    switch (iconName) {
      case 'file-text':
        return <FileText {...props} />;
      case 'trophy':
        return <Trophy {...props} />;
      case 'users':
        return <Users {...props} />;
      default:
        return <Sparkles {...props} />;
    }
  };

  return (
    <div className="section">
      <div className="container">
        <SectionHeading
          title="Research & Achievements"
          subtitle="Peer-reviewed scientific research, hackathons, and community talks"
        />

        {/* ── Community / Publication Cards ────────────────── */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '1.75rem',
            marginBottom: '3rem',
          }}
        >
          {community.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="card"
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem',
                padding: '1.75rem',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}
              >
                <div
                  style={{
                    width: '46px',
                    height: '46px',
                    borderRadius: '12px',
                    background: 'var(--surface-2)',
                    border: '1px solid var(--border)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  {getCommunityIcon(item.icon)}
                </div>

                {item.link && (
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-outline"
                    aria-label={`View ${item.title}`}
                    style={{
                      fontSize: '0.8rem',
                      padding: '0.35rem 0.75rem',
                      textDecoration: 'none',
                    }}
                  >
                    {item.linkLabel || 'View Details'} <ExternalLink size={13} />
                  </a>
                )}
              </div>

              <h3
                style={{
                  fontSize: '1.15rem',
                  fontWeight: 700,
                  color: 'var(--text)',
                  fontFamily: 'var(--font-head)',
                }}
              >
                {item.title}
              </h3>

              <p
                style={{
                  fontSize: '0.925rem',
                  color: 'var(--text-muted)',
                  lineHeight: 1.6,
                }}
              >
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* ── Certifications Section ────────────────────────── */}
        {certifications && certifications.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            style={{
              padding: '1.75rem',
              background: 'var(--surface)',
              border: '1px solid var(--border)',
              borderRadius: 'var(--radius-card)',
            }}
          >
            <h4
              style={{
                fontSize: '1.1rem',
                fontWeight: 700,
                color: 'var(--text)',
                fontFamily: 'var(--font-head)',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                marginBottom: '1rem',
              }}
            >
              <Award size={20} color="var(--accent-2)" /> Professional Certifications
            </h4>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
                gap: '1rem',
              }}
            >
              {certifications.map((cert, cIdx) => (
                <div
                  key={cIdx}
                  style={{
                    padding: '0.9rem 1.1rem',
                    background: 'var(--surface-2)',
                    borderRadius: '10px',
                    border: '1px solid var(--border)',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.2rem',
                  }}
                >
                  <span style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--text)' }}>
                    {cert.title}
                  </span>
                  <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                    {cert.issuer}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}
