// ============================================================
// App.jsx — Root application shell
// ============================================================
// Assembles all sections in order. Each section is a separate
// component driven entirely from src/data/content.js.
//
// Phase 3: Full layout shell with Navbar, skip link, semantic
// HTML structure, and placeholder section mounts.
// Phase 4 will implement each section component in full.
// ============================================================

import Navbar      from './components/Navbar';
import Hero        from './components/Hero';
import About       from './components/About';
import Skills      from './components/Skills';
import Experience  from './components/Experience';
import Projects    from './components/Projects';
import Services    from './components/Services';
import Community   from './components/Community';
import Contact     from './components/Contact';
import Footer      from './components/Footer';

function App() {

  return (
    <>
      {/* ── Skip to main content (accessibility) ─────────── */}
      <a
        href="#main"
        style={{
          position: 'absolute',
          top: '-100px',
          left: '1rem',
          background: 'var(--accent)',
          color: '#fff',
          padding: '0.5rem 1rem',
          borderRadius: '8px',
          fontFamily: 'var(--font-body)',
          fontWeight: 600,
          textDecoration: 'none',
          zIndex: 9999,
          transition: 'top 0.2s',
        }}
        onFocus={(e) => (e.target.style.top = '1rem')}
        onBlur={(e)  => (e.target.style.top = '-100px')}
      >
        Skip to main content
      </a>

      {/* ── Sticky Navbar ─────────────────────────────────── */}
      <Navbar />

      {/* ── Main Content ──────────────────────────────────── */}
      <main id="main">

        {/* 1. Hero ──────────────────────────────────────── */}
        <section id="hero" aria-label="Introduction">
          <Hero />
        </section>

        {/* 2. About ─────────────────────────────────────── */}
        <section id="about" aria-labelledby="about-heading">
          <About />
        </section>

        {/* 3. Skills ────────────────────────────────────── */}
        <section id="skills" aria-labelledby="skills-heading">
          <Skills />
        </section>

        {/* 4. Experience ────────────────────────────────── */}
        <section id="experience" aria-labelledby="experience-heading">
          <Experience />
        </section>

        {/* 5. Projects ──────────────────────────────────── */}
        <section id="projects" aria-labelledby="projects-heading">
          <Projects />
        </section>

        {/* 6. Services (Freelance) ──────────────────────── */}
        <section id="services" aria-labelledby="services-heading">
          <Services />
        </section>

        {/* 7. Community & Achievements ──────────────────── */}
        <section id="community" aria-labelledby="community-heading">
          <Community />
        </section>

        {/* 8. Contact ───────────────────────────────────── */}
        <section id="contact" aria-labelledby="contact-heading">
          <Contact />
        </section>

      </main>

      {/* ── Footer ────────────────────────────────────────── */}
      <Footer />
    </>
  );
}

export default App;
