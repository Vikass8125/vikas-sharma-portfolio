# Vikas Sharma — AI & Backend Software Engineer Portfolio

[![Deploy to GitHub Pages](https://github.com/Vikass8125/vikas-sharma-portfolio/actions/workflows/deploy.yml/badge.svg)](https://github.com/Vikass8125/vikas-sharma-portfolio/actions/workflows/deploy.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![Vite](https://img.shields.io/badge/Vite-8.x-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
[![React](https://img.shields.io/badge/React-18-61DAFB?logo=react&logoColor=black)](https://react.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-38B2AC?logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)

> 🌐 **Live Website:** [https://vikass8125.github.io/vikas-sharma-portfolio/](https://vikass8125.github.io/vikas-sharma-portfolio/)

The official personal portfolio website for **Vikas Sharma** — Software Engineer specializing in Generative AI applications, RAG pipelines, LLM-powered agentic workflows, and production Python backend systems.

---

## ⚡ Tech Stack & Architecture

- **Frontend:** React 18, Vite 8, Tailwind CSS v4, Framer Motion
- **Icons:** Lucide Icons & Custom SVG Brand Icons
- **Typography:** Space Grotesk (Headings), Inter (Body), JetBrains Mono (Code/Chips)
- **Deployment:** GitHub Pages via automated GitHub Actions CI/CD pipeline
- **Architecture:** Single Page Application (SPA), fully decoupled content architecture where all text, links, and credentials reside in a single configuration file (`src/data/content.js`).

---

## 🚀 Sections & Features

1. **Hero Section:**
   - "Open to opportunities" pulsing badge
   - High-contrast gradient typography
   - Centered 3D profile avatar with gradient glow ring
   - Quick stats counter (`4+ AI Features Built`, `30+ Production APIs`, `Core AI Stack`)
   - Primary and outline action buttons + downloadable resume

2. **About Me:**
   - First-person engineering narrative & professional background
   - 4 highlight feature cards with hover lift animations

3. **Technical Skills:**
   - 5 categorized domains: *Languages & Backend*, *Generative AI*, *Vector & Data*, *APIs & Cloud*, *Development & Tools*
   - Interactive category filter pills with JetBrains Mono chips

4. **Experience & Education:**
   - Connected vertical gradient timeline
   - **Pragadas Technologies** (Feb 2025 – Present): 30+ APIs, RAG document retrieval, AI agent POCs, enterprise integrations (NetSuite, FedEx, DocuSign), Docker, AWS RDS, and AI tools (Cursor, Antigravity, Codex, Copilot).
   - **Tata Elxsi** (Jan 2023 – Feb 2024): Automated data parsing, Jenkins CI/CD pipelines, and Python C-integration (`ctypes`) for 30% compute acceleration.
   - **NIT Patna:** B.Tech in Electronics & Communication Engineering (CGPA: 8.86, Runner-up HackNITP 3.0).

5. **Projects Carousel / Slideshow:**
   - Interactive slideshow featuring:
     - **Movie Recommender System (Content-Based):** TF-IDF and cosine similarity engine across 5,000+ movie plots.
     - **Enterprise RAG Knowledge System:** *Coming Soon* preview with hybrid search and vector storage.
     - **Autonomous Agentic Workflow Engine:** *Coming Soon* preview with state-graph tool loops.
     - **Real-Time Voice Assistant:** *Coming Soon* preview with streaming LLM inference and TTS.
   - Next/Previous controls, slide indicator dots, auto-play rotation, and direct GitHub links.

6. **Freelance Services & Community:**
   - Custom RAG chatbots, AI agents, and FastAPI backend engineering cards.
   - Peer-reviewed research publication link in Springer (*Modern Physics Letters B* series).
   - HackNITP 3.0 award and professional certifications.

7. **Contact & Socials:**
   - Functional contact form with client-side validation and Web3Forms API integration.
   - Direct email card with one-click **Copy-to-Clipboard** button and "Copied!" feedback.
   - Direct phone link (`+91 8008144741`) and location metadata.

8. **SEO & Social Sharing:**
   - Complete Open Graph and Twitter Card tags.
   - High-resolution 1200x630 `og-image.png` for rich link previews on LinkedIn, WhatsApp, and Twitter.
   - Embedded Google JSON-LD `Person` schema.

---

## 🛠️ Local Development

### Prerequisites
- Node.js 20+ installed
- npm 10+ installed

### Setup Commands

```bash
# 1. Clone the repository
git clone https://github.com/Vikass8125/vikas-sharma-portfolio.git
cd vikas-sharma-portfolio

# 2. Install dependencies
npm install

# 3. Start local development server
npm run dev
# Server will start at: http://localhost:5173/vikas-sharma-portfolio/

# 4. Build for production
npm run build

# 5. Preview production build locally
npm run preview
# Preview server will start at: http://localhost:4173/vikas-sharma-portfolio/
```

---

## ✏️ How to Update Content

All site content is decoupled from components and lives in a single file:
👉 **[`src/data/content.js`](./src/data/content.js)**

To update your portfolio:
1. Open `src/data/content.js`.
2. Edit your profile info, experience bullets, skill items, project details, or contact links.
3. Save, commit, and push to `main` — GitHub Actions will automatically rebuild and deploy your changes.

---

## 📂 Project Directory Structure

```
vikas-sharma-portfolio/
├── .github/
│   └── workflows/
│       └── deploy.yml              # GitHub Actions Pages deployment
├── public/
│   ├── favicon.svg                 # Indigo "V" monogram favicon
│   ├── images/
│   │   ├── profile.jpg             # Optimized avatar photo (120 KB)
│   │   ├── Vikas-3D-Avatar.png     # Full-resolution source image (7.3 MB)
│   │   └── og-image.png            # 1200x630 social sharing preview card
│   └── resume/
│       └── Vikas_Sharma_AI_Engineer.pdf  # Downloadable PDF resume
├── src/
│   ├── components/
│   │   ├── About.jsx               # Narrative bio & feature cards
│   │   ├── Community.jsx           # Research, awards & certifications
│   │   ├── Contact.jsx             # Contact form & direct email/phone cards
│   │   ├── Experience.jsx          # Vertical connected timeline & education
│   │   ├── Footer.jsx              # Copyright, links & back-to-top button
│   │   ├── Hero.jsx                # Introduction, CTAs, avatar & stats
│   │   ├── Icons.jsx               # Brand SVG icons (GitHub, LinkedIn)
│   │   ├── Navbar.jsx              # Sticky navigation bar & mobile menu
│   │   ├── Projects.jsx            # Interactive slideshow carousel
│   │   ├── SectionHeading.jsx      # Reusable styled section headers
│   │   └── Services.jsx            # Freelance & consulting cards
│   ├── data/
│   │   └── content.js              # Single source of truth for all content
│   ├── hooks/
│   │   └── useTheme.js             # Theme utility hook
│   ├── App.jsx                     # Root application assembler
│   ├── index.css                   # Tailwind v4 & CSS design tokens
│   └── main.jsx                    # React DOM entry point
├── index.html                      # HTML5 template with SEO & JSON-LD
├── package.json
└── vite.config.js                  # Vite configuration (base: '/vikas-sharma-portfolio/')
```

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).
