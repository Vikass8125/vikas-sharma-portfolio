// ============================================================
// content.js — Single source of truth for ALL portfolio content
// ============================================================
// To update any content on the site, edit ONLY this file.
// No component code needs to change for content updates.
//
// TODOs are marked with: // TODO: <instruction>
// ============================================================

// ── Profile ─────────────────────────────────────────────────
export const profile = {
  name: "Vikas Sharma",
  title: "AI Engineer & Generative AI Engineer",
  tagline: "I build GenAI systems: RAG pipelines and AI agents, backed by production-grade Python APIs.",
  supportingLine:
    "Software Developer based in Hyderabad, India — building practical LLM applications and moving toward MLOps & ML Engineering.",
  location: "Hyderabad, India",
  email: "vikass.work21@gmail.com",
  resumeUrl: "/vikas-sharma-portfolio/resume/Vikas_Resume.pdf", // TODO: Add your resume PDF to public/resume/
  photo: "/vikas-sharma-portfolio/images/profile.jpg",          // TODO: Add your photo to public/images/
  openToWork: true,
  openToWorkLabel: "Open to opportunities: GenAI · AI Engineering · Data Science",
  web3formsKey: "YOUR_WEB3FORMS_KEY",                          // TODO: Get free key at web3forms.com
  bookingUrl: "",                                               // TODO: Optional — Cal.com free booking link
  stats: [
    { value: "6+",      label: "Projects Built" },
    { value: "2+",      label: "Years Experience" },
    { value: "RAG · Agents · FastAPI", label: "Core Stack" },
  ],
};

// ── Social Links ─────────────────────────────────────────────
export const socials = [
  {
    label: "GitHub",
    url: "https://github.com/Vikass8125",
    icon: "github",
  },
  {
    label: "LinkedIn",
    url: "https://www.linkedin.com/in/vikas-sharma8125",
    icon: "linkedin",
  },
  {
    label: "Email",
    url: "mailto:vikass.work21@gmail.com",
    icon: "mail",
  },
];

// ── About Section ─────────────────────────────────────────────
export const about = {
  paragraphs: [
    "I'm a Software Developer at Pragadas Technologies, Hyderabad, where I build LLM-powered applications, RAG systems, and AI agents using Python, FastAPI, LangChain, and LangGraph. I've shipped production backends, conversational AI systems, and agentic workflows used by real clients.",
    "Before moving into AI, I worked at Tata Elxsi as an Engineer, building Jenkins CI/CD pipelines, Python automation tools, and system integrations that cut deployment time by ~40% and saved 50+ developer hours per week. I hold a B.Tech in Electronics and Communication Engineering from NIT Patna (CGPA 8.86).",
    "I'm currently deepening my ML and MLOps skills and am actively looking for AI Engineer, Generative AI Engineer, or Data Science roles — in Hyderabad or remote.",
  ],
  highlights: [
    {
      icon: "brain",
      title: "End-to-End GenAI Apps",
      description: "RAG pipelines, AI agents, and multi-turn conversational systems with LangChain & LangGraph.",
    },
    {
      icon: "zap",
      title: "Clean, Scalable APIs",
      description: "Production-grade FastAPI backends with PostgreSQL, Supabase, Redis, and Docker.",
    },
    {
      icon: "git-branch",
      title: "Automation & CI/CD Mindset",
      description: "Jenkins, GitHub Actions, Docker-based pipelines from my Tata Elxsi engineering background.",
    },
    {
      icon: "users",
      title: "Mentoring & Collaboration",
      description: "Mentored 4 junior developers through code reviews, KT sessions, and structured task guidance.",
    },
  ],
};

// ── Skills ────────────────────────────────────────────────────
export const skills = [
  {
    group: "GenAI & LLMs",
    icon: "brain",
    items: [
      "RAG",
      "AI Agents",
      "LangChain",
      "LangGraph",
      "Prompt Engineering",
      "Embeddings",
      "Semantic Search",
      "Pinecone",
      "FAISS",
      "ChromaDB",
      "Groq",
      "OpenRouter",
      "Ollama",
      "Conversational AI",
    ],
  },
  {
    group: "Backend",
    icon: "server",
    items: [
      "Python",
      "FastAPI",
      "REST APIs",
      "Pydantic",
      "PostgreSQL",
      "Supabase",
      "MySQL",
      "Redis",
      "SQLAlchemy 2.0",
      "Authentication",
      "API Integration",
    ],
  },
  {
    group: "Cloud & DevOps",
    icon: "cloud",
    items: [
      "Docker",
      "GitHub Actions",
      "Jenkins",
      "CI/CD",
      "AWS EC2",
      "AWS ECR",
      "AWS App Runner",
      "AWS RDS",
      "AWS IAM",
      "Railway",
      "Git",
    ],
  },
  {
    group: "Data & ML",
    icon: "bar-chart-2",
    items: [
      "pandas",
      "NumPy",
      "scikit-learn",
      "XGBoost",
      "NLP",
      "TF-IDF",
      "Cosine Similarity",
      "EDA",
      "Feature Engineering",
      "Model Evaluation",
    ],
  },
  {
    group: "Tools",
    icon: "wrench",
    items: [
      "GitHub",
      "Postman",
      "VS Code",
      "Cursor",
      "Antigravity",
      "GitHub Copilot",
      "Codex",
      "MinGW",
      "APScheduler",
      "ReportLab",
      "LaTeX",
    ],
  },
];

// ── Work Experience ───────────────────────────────────────────
export const experience = [
  {
    role: "Software Developer",
    company: "Pragadas Technologies",
    location: "Hyderabad, Telangana, India",
    period: "Feb 2025 – Present",
    type: "Full-time",
    bullets: [
      "Built LLM-powered applications and AI workflows using Python, FastAPI, LangChain, LangGraph, Groq, and OpenRouter.",
      "Developed RAG applications using embeddings and vector databases (Pinecone, FAISS) for contextual document retrieval and Q&A.",
      "Built agentic workflows with LangGraph for multi-step reasoning, tool integration, and task automation.",
      "Built and maintained 30+ production-grade REST API endpoints using FastAPI; integrated NetSuite, FedEx, UPS, and DocuSign.",
      "Developed AI-powered weekly task summarizer using Groq/OpenRouter LLMs with APScheduler for automated reporting.",
      "Deployed AI applications and backend services on Railway and AWS (EC2, App Runner, ECR, RDS).",
      "Mentored 4 junior developers through knowledge-transfer sessions, code reviews, and structured task guidance.",
    ],
    tech: ["Python", "FastAPI", "LangChain", "LangGraph", "Pinecone", "Groq", "PostgreSQL", "Redis", "Docker", "AWS", "Railway"],
  },
  {
    role: "Engineer",
    company: "Tata Elxsi",
    location: "Trivandrum, Kerala, India",
    period: "Jan 2023 – Feb 2024",
    type: "Full-time (Promoted from Intern)",
    bullets: [
      "Built and managed Jenkins-based CI/CD pipelines for automated build and deployment workflows — ~40% improvement in deployment efficiency.",
      "Developed Python automation tools for repetitive engineering tasks, saving 50+ developer hours per week.",
      "Integrated Python with C modules using ctypes for system-level automation — ~30% improvement in processing performance.",
      "Automated data extraction and transformation across 100+ JSON files in engineering workflows.",
      "Built monitoring workflows that reduced system downtime by ~25% through automated alerting.",
    ],
    tech: ["Python", "Jenkins", "CI/CD", "ctypes", "Bash", "Automation"],
  },
];

// ── Education ─────────────────────────────────────────────────
export const education = [
  {
    degree: "B.Tech — Electronics and Communication Engineering",
    school: "National Institute of Technology (NIT) Patna",
    period: "2019 – 2023",
    grade: "CGPA: 8.86",
    highlight: "Runner-up, HackNITP 3.0 — Line Following Bot",
  },
];

// ── Projects ──────────────────────────────────────────────────
export const projects = [
  {
    title: "Company Knowledge RAG Chatbot",
    summary: "A production-deployed RAG chatbot answering product and service questions for Pragadas Technologies.",
    problem: "The company needed a way for visitors to get instant, accurate answers about their services without human support.",
    solution:
      "Built a RAG pipeline using LangChain + LangGraph for orchestration, Pinecone for vector storage, and OpenRouter/Groq as LLM backends. FastAPI backend with Redis for conversational memory.",
    result: "Deployed on Railway after internal testing and approval. Handles multi-turn conversations with accurate retrieval.",
    tech: ["Python", "FastAPI", "LangChain", "LangGraph", "Pinecone", "OpenRouter", "Groq", "Redis"],
    github: "https://github.com/Vikass8125", // TODO: Add specific repo URL if public
    demo: "",                                 // TODO: Add demo URL if available
    image: "/vikas-sharma-portfolio/images/projects/rag-chatbot.webp", // TODO: Add screenshot
    featured: true,
  },
  {
    title: "VocalPal — Conversational Voice Assistant",
    summary: "A stateful conversational voice assistant prototype with LLM reasoning and text-to-speech output.",
    problem: "Needed a proof-of-concept voice assistant that could handle multi-turn conversations with natural speech output.",
    solution:
      "Used LangGraph for stateful conversation management, Groq for fast LLM inference, and ElevenLabs for TTS. Next.js frontend for the UI.",
    result: "Functional prototype demonstrating end-to-end voice conversation flow with real-time TTS.",
    tech: ["Python", "LangGraph", "Groq", "ElevenLabs", "Next.js"],
    github: "https://github.com/Vikass8125", // TODO: Add specific repo URL if public
    demo: "",
    image: "/vikas-sharma-portfolio/images/projects/vocalpal.webp", // TODO: Add screenshot
    featured: true,
  },
  {
    title: "Weekly Task Summarizer",
    summary: "Automated AI-powered weekly work report generator with scheduled execution.",
    problem: "Generating weekly task summaries manually was time-consuming for employees.",
    solution:
      "Built a FastAPI API that fetches employee task data, determines the relevant work week automatically, and generates AI summaries using Groq/OpenRouter. APScheduler runs the job every Saturday.",
    result: "Fully automated weekly reporting workflow integrated into the HRMS system.",
    tech: ["Python", "FastAPI", "Groq", "OpenRouter", "APScheduler"],
    github: "https://github.com/Vikass8125", // TODO: Add specific repo URL if public
    demo: "",
    image: "/vikas-sharma-portfolio/images/projects/task-summarizer.webp", // TODO: Add screenshot
    featured: false,
  },
  {
    title: "Movie Recommendation System",
    summary: "Content-based movie recommendation engine using NLP and similarity search on 5,000+ movie plots.",
    problem: "Needed a recommendation system that matches movies by content and plot similarity rather than ratings alone.",
    solution:
      "Cleaned and tokenized movie metadata, extracted TF-IDF features, and computed cosine similarity to generate ranked recommendations.",
    result: "Accurately recommends similar movies based on plot, genre, and keyword overlap.",
    tech: ["Python", "pandas", "scikit-learn", "NLP", "TF-IDF", "Cosine Similarity"],
    github: "https://github.com/Vikass8125", // TODO: Add specific repo URL if public
    demo: "",
    image: "/vikas-sharma-portfolio/images/projects/movie-recommender.webp", // TODO: Add screenshot
    featured: false,
  },
  {
    title: "Customer Churn Prediction",
    summary: "End-to-end ML pipeline for predicting customer churn using classification models.",
    problem: "Businesses lose revenue when customers churn without advance warning.",
    solution:
      "Built a complete ML workflow: data preprocessing, feature engineering, model training with scikit-learn and XGBoost, and evaluation using precision, recall, and AUC.",
    result: "Demonstrated production-ready ML pipeline with interpretable churn probability scores.",
    tech: ["Python", "pandas", "scikit-learn", "XGBoost", "Feature Engineering"],
    github: "https://github.com/Vikass8125", // TODO: Add specific repo URL if public
    demo: "",
    image: "/vikas-sharma-portfolio/images/projects/churn-prediction.webp", // TODO: Add screenshot
    featured: false,
  },
  {
    title: "URL Shortener with Click Analytics",
    summary: "Production-style URL shortening backend with JWT authentication and Redis caching.",
    problem: "Needed a full-stack backend project demonstrating real-world API design, caching, and auth.",
    solution:
      "FastAPI backend with PostgreSQL for persistence, Redis for redirect caching, JWT for authentication, and Docker for containerization.",
    result: "Clean, documented REST API with analytics tracking for every shortened link.",
    tech: ["FastAPI", "PostgreSQL", "Redis", "Docker", "JWT", "Python"],
    github: "https://github.com/Vikass8125", // TODO: Add specific repo URL if public
    demo: "",
    image: "/vikas-sharma-portfolio/images/projects/url-shortener.webp", // TODO: Add screenshot
    featured: false,
  },
];

// ── Freelance Services ────────────────────────────────────────
export const services = [
  {
    icon: "message-square",
    title: "Custom RAG Chatbots",
    description:
      "Build intelligent chatbots over your documents, knowledge base, or website content using RAG, LangChain, and vector databases.",
  },
  {
    icon: "cpu",
    title: "AI Agents & Workflow Automation",
    description:
      "Design and implement LangGraph-based agentic workflows for multi-step automation, data processing, and decision-making tasks.",
  },
  {
    icon: "code-2",
    title: "FastAPI Backends for AI Products",
    description:
      "Production-grade Python APIs that expose your AI workflows to web apps, mobile clients, or third-party integrations.",
  },
];

// ── Community & Achievements ──────────────────────────────────
export const community = [
  {
    icon: "file-text",
    title: "Research Publication",
    description:
      "Co-authored a research paper on THz MIMO antenna systems, published in a Springer journal (Modern Physics Letters B series).",
    link: "https://link.springer.com/article/10.1007/s11082-023-04970-y",
    linkLabel: "View Paper",
  },
  {
    icon: "trophy",
    title: "HackNITP 3.0 — Runner-up",
    description:
      "Achieved runner-up position in the Line Following Bot competition at HackNITP 3.0, the annual hackathon at NIT Patna.",
    link: "",
    linkLabel: "",
  },
  {
    icon: "users",
    title: "Financial Literacy Facilitation",
    description:
      "Delivered a financial literacy facilitation session for an early-career Indian audience, covering personal finance fundamentals.",
    link: "",
    linkLabel: "",
  },
];

// ── Certifications ────────────────────────────────────────────
// TODO: Add certification links/images if available
export const certifications = [
  { title: "Introduction to Prompt Engineering for Generative AI", issuer: "LinkedIn Learning" },
  { title: "How to Research and Write Using Generative AI Tools",  issuer: "LinkedIn Learning" },
  { title: "AWS for Beginners",                                    issuer: "Online" },
];
