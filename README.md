# Vikas Sharma — Portfolio Website

> **Live site:** https://vikass8125.github.io/vikas-sharma-portfolio/

Personal portfolio for Vikas Sharma — AI Engineer & Generative AI Engineer.  
Built with **React 18 + Vite + Tailwind CSS v4 + Framer Motion**, deployed to GitHub Pages via GitHub Actions.

---

## Stack

| Tool | Purpose |
|---|---|
| React 18 | UI framework |
| Vite 8 | Build tool and dev server |
| Tailwind CSS v4 | Utility styling (via `@tailwindcss/vite`) |
| Framer Motion | Scroll animations and transitions |
| lucide-react | Icons |
| react-icons | Additional icons |
| GitHub Actions | CI/CD — auto-deploy on push to `main` |
| GitHub Pages | Free static hosting |

---

## Local Development

```bash
# 1. Clone the repo
git clone https://github.com/Vikass8125/vikas-sharma-portfolio.git
cd vikas-sharma-portfolio

# 2. Install dependencies (requires Node 20+)
npm install

# 3. Start the dev server
npm run dev
# → http://localhost:5173/vikas-sharma-portfolio/

# 4. Build for production (optional — CI handles this)
npm run build

# 5. Preview the production build locally
npm run preview
# → http://localhost:4173/vikas-sharma-portfolio/
```

---

## Updating Content

**All text content lives in one file:** [`src/data/content.js`](./src/data/content.js)

Edit that file to update:
- Profile info, tagline, email
- Skills groups
- Work experience bullets
- Projects (title, description, tech stack, GitHub link, demo link)
- Services / freelance offerings
- Community / learning items

No component code needs to change for content updates.

---

## Adding Assets

| Asset | Where to place it |
|---|---|
| Profile photo | `public/images/profile.jpg` (square, ≥800px) |
| Resume PDF | `public/resume/Vikas_Resume.pdf` |
| OG image | `public/images/og-image.png` (1200×630) |
| Project screenshots | `public/images/projects/<name>.webp` |

---

## GitHub Pages Deployment

The site deploys automatically when you push to `main`.

**One-time setup (do this once):**
1. Go to your repo on GitHub
2. **Settings → Pages → Build and deployment → Source: GitHub Actions**
3. Push any commit to `main`
4. Wait ~2 minutes — check the **Actions** tab for a green checkmark
5. Your site is live at `https://vikass8125.github.io/vikas-sharma-portfolio/`

---

## Project Structure

```
vikas-sharma-portfolio/
├── .github/workflows/deploy.yml   # GitHub Actions CI/CD
├── public/
│   ├── favicon.svg
│   ├── images/
│   │   ├── profile.jpg            # ← ADD YOUR PHOTO
│   │   ├── og-image.png           # ← ADD OG IMAGE
│   │   └── projects/              # ← ADD PROJECT SCREENSHOTS
│   └── resume/Vikas_Resume.pdf    # ← ADD YOUR RESUME
├── src/
│   ├── components/                # One file per section
│   ├── data/content.js            # ← ALL TEXT CONTENT HERE
│   ├── hooks/useTheme.js
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css                  # Design system
├── index.html
├── vite.config.js
└── package.json
```

---

## License

MIT — feel free to use as a template.
