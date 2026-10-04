// ============================================================
// Services.jsx — Freelance Services & Consulting Section
// ============================================================
import { motion } from 'framer-motion';
import { MessageSquare, Cpu, Code2, ArrowRight } from 'lucide-react';
import SectionHeading from './SectionHeading';
import { services } from '../data/content';

export default function Services() {
  const getServiceIcon = (iconName) => {
    const props = { size: 28, color: 'var(--accent-2)' };
    switch (iconName) {
      case 'message-square':
        return <MessageSquare {...props} />;
      case 'cpu':
        return <Cpu {...props} />;
      case 'code-2':
        return <Code2 {...props} />;
      default:
        return <Cpu {...props} />;
    }
  };

  return (
    <div className="section">
      <div className="container">
        <SectionHeading
          title="Services & Consulting"
          subtitle="How I help teams and startups build, automate, and deploy production-ready AI systems"
        />

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '1.75rem',
            marginBottom: '3rem',
          }}
        >
          {services.map((srv, idx) => (
            <motion.div
              key={srv.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="card"
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '1.25rem',
                padding: '2rem',
              }}
            >
              <div
                style={{
                  width: '56px',
                  height: '56px',
                  borderRadius: '14px',
                  background: 'var(--surface-2)',
                  border: '1px solid var(--border)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 4px 16px rgba(0,0,0,0.15)',
                }}
              >
                {getServiceIcon(srv.icon)}
              </div>

              <h3
                style={{
                  fontSize: '1.25rem',
                  fontWeight: 700,
                  color: 'var(--text)',
                  fontFamily: 'var(--font-head)',
                }}
              >
                {srv.title}
              </h3>

              <p
                style={{
                  fontSize: '0.95rem',
                  color: 'var(--text-muted)',
                  lineHeight: 1.6,
                }}
              >
                {srv.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA Banner */}
        <div
          style={{
            padding: '2rem',
            borderRadius: 'var(--radius-card)',
            background: 'radial-gradient(ellipse at center, var(--surface-2), var(--surface))',
            border: '1px solid var(--border)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '1.5rem',
          }}
        >
          <div>
            <h4
              style={{
                fontSize: '1.2rem',
                fontWeight: 700,
                color: 'var(--text)',
                fontFamily: 'var(--font-head)',
                marginBottom: '0.25rem',
              }}
            >
              Have a specific project or AI feature in mind?
            </h4>
            <p style={{ fontSize: '0.925rem', color: 'var(--text-muted)' }}>
              Let's discuss requirements, architecture, and timeline.
            </p>
          </div>

          <a
            href="#contact"
            className="btn-gradient"
            style={{ textDecoration: 'none' }}
          >
            Start a Conversation <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </div>
  );
}
