// ============================================================
// content.js — Single source of truth for ALL portfolio content
// ============================================================
// Updated with Vikas Sharma's exact professional summary, skills,
// experience bullets, and projects.
// ============================================================

// ── Profile ─────────────────────────────────────────────────
export const profile = {
  name: "Vikas Sharma",
  title: "Software Engineer — Generative AI & Backend Development",
  tagline:
    "Building Generative AI applications, RAG pipelines, LLM-powered workflows, and production Python backend systems.",
  supportingLine:
    "Built 4+ AI features and 30+ production REST APIs using Python, FastAPI, LangChain, LangGraph, embeddings, and vector databases.",
  location: "Hyderabad, India",
  email: "vikass.work21@gmail.com",
  phone: "+91 8008144741",
  rawPhone: "8008144741",
  resumeUrl: "/vikas-sharma-portfolio/resume/Vikas_Sharma_AI_Engineer.pdf",
  photo: "/vikas-sharma-portfolio/images/profile.jpg",
  openToWork: true,
  openToWorkLabel: "Open to opportunities: Generative AI · AI Engineering · Backend",
  web3formsKey: "YOUR_WEB3FORMS_KEY",
  bookingUrl: "",
  stats: [
    { value: "4+",      label: "AI Features Built" },
    { value: "30+",     label: "Production REST APIs" },
    { value: "RAG · Agents · FastAPI", label: "Core AI Stack" },
  ],
};

// ── Social Links ─────────────────────────────────────────────
export const socials = [
  {
    label: "GitHub",
    url: "https://github.com/Vikass8125",
    icon: "github",
    display: "github.com/Vikass8125",
  },
  {
    label: "LinkedIn",
    url: "https://www.linkedin.com/in/vikas-sharma8125",
    icon: "linkedin",
    display: "in/vikas-sharma8125",
  },
  {
    label: "Email",
    url: "mailto:vikass.work21@gmail.com",
    icon: "mail",
    display: "vikass.work21@gmail.com",
  },
  {
    label: "Phone",
    url: "tel:+918008144741",
    icon: "phone",
    display: "+91 8008144741",
  },
];

// ── About Section ─────────────────────────────────────────────
export const about = {
  paragraphs: [
    "I am a Software Engineer with hands-on experience building Generative AI applications, RAG pipelines, LLM-powered workflows, and Python backend systems. I've built 4+ AI features and 30+ production REST APIs using Python, FastAPI, LangChain, LangGraph, embeddings, vector databases, and LLM APIs.",
    "At Pragadas Technologies, I design RAG workflows for document and company knowledge retrieval using embeddings and vector similarity search, develop AI agent POCs, and integrate enterprise APIs including NetSuite, FedEx, UPS/RocketShipIt, Amazon Seller API, and DocuSign with cloud-hosted backend services.",
    "Before moving into Generative AI, I worked at Tata Elxsi, engineering Jenkins CI/CD pipelines, automating data validation, and integrating Python with C (ctypes) to accelerate compute-heavy modules by 30%. I hold a B.Tech in Electronics and Communication Engineering from NIT Patna (CGPA 8.86).",
  ],
  highlights: [
    {
      icon: "brain",
      title: "Generative AI & RAG",
      description: "RAG pipelines, AI agents, semantic search, and LLM workflows with LangChain & LangGraph.",
    },
    {
      icon: "zap",
      title: "Production Backend APIs",
      description: "30+ production REST APIs with FastAPI, Pydantic, PostgreSQL, Supabase, Redis, and Docker.",
    },
    {
      icon: "cloud",
      title: "Enterprise & Cloud Integrations",
      description: "Integrated NetSuite, FedEx, UPS, Amazon Seller API, DocuSign, Groq, OpenRouter, and AWS.",
    },
    {
      icon: "git-branch",
      title: "AI-Assisted Development",
      description: "Daily hands-on use of Cursor, Antigravity, Codex, and GitHub Copilot for rapid delivery.",
    },
  ],
};

// ── Technical Skills ──────────────────────────────────────────
export const skills = [
  {
    group: "Languages & Backend",
    icon: "server",
    items: [
      "Python",
      "SQL",
      "FastAPI",
      "REST APIs",
      "Pydantic",
    ],
  },
  {
    group: "Generative AI",
    icon: "brain",
    items: [
      "Generative AI",
      "LLMs",
      "RAG",
      "LangChain",
      "LangGraph",
      "AI Agents",
      "Embeddings",
      "Semantic Search",
      "Prompt Engineering",
      "Conversational AI",
    ],
  },
  {
    group: "Vector & Data",
    icon: "database",
    items: [
      "Pinecone",
      "FAISS",
      "ChromaDB",
      "PostgreSQL",
      "Supabase",
      "MongoDB",
      "Redis",
    ],
  },
  {
    group: "APIs & Cloud",
    icon: "cloud",
    items: [
      "NetSuite",
      "FedEx",
      "UPS/RocketShipIt",
      "Amazon Seller API",
      "DocuSign",
      "Groq",
      "OpenRouter",
      "AWS",
      "Docker",
    ],
  },
  {
    group: "Development & Tools",
    icon: "wrench",
    items: [
      "Git",
      "GitHub Actions",
      "Jenkins",
      "Railway",
      "Cursor",
      "Antigravity",
      "Codex",
      "GitHub Copilot",
    ],
  },
];

// ── Work Experience ───────────────────────────────────────────
export const experience = [
  {
    role: "Software Engineer — Generative AI & Backend Development",
    company: "Pragadas Technologies",
    location: "Hyderabad, India",
    period: "Feb. 2025 – Present",
    type: "Full-time",
    bullets: [
      "Developed and maintained 30+ production REST APIs using Python and FastAPI for a warehouse management system.",
      "Built LLM-powered and Generative AI applications using LangChain, LangGraph, RAG, embeddings, vector databases, and LLM APIs.",
      "Designed RAG workflows for document and company knowledge retrieval using embeddings and vector similarity search.",
      "Developed AI application POCs involving AI agents, semantic search, conversational AI, and LLM-powered workflows.",
      "Integrated NetSuite, FedEx, UPS/RocketShipIt, Amazon Seller API, and DocuSign with Python backend services.",
      "Worked with PostgreSQL, Supabase, Railway, AWS RDS, Docker, and GitHub Actions for backend development and deployment.",
      "Applied AI-assisted development using Cursor, Antigravity, Codex, and GitHub Copilot for implementation, debugging, refactoring, and development.",
    ],
    tech: [
      "Python",
      "FastAPI",
      "LangChain",
      "LangGraph",
      "RAG",
      "Pinecone",
      "Groq",
      "OpenRouter",
      "PostgreSQL",
      "Supabase",
      "Docker",
      "Railway",
      "AWS RDS",
    ],
  },
  {
    role: "Engineer (Promoted from Intern) — Automation & CI/CD",
    company: "Tata Elxsi",
    location: "Trivandrum, India",
    period: "Jan. 2023 – Feb. 2024",
    type: "Full-time",
    bullets: [
      "Automated data parsing and validation workflows using Python to improve processing efficiency.",
      "Maintained Jenkins CI/CD pipelines for automated deployments and testing workflows.",
      "Integrated Python with C using ctypes to accelerate compute-heavy modules by 30%.",
      "Collaborated with automation teams to streamline CI workflows, reducing build and test cycle times by 25%.",
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

// ── Projects for Slideshow ────────────────────────────────────
export const projects = [
  {
    id: 1,
    title: "Movie Recommender System (Content-Based)",
    category: "Machine Learning · NLP & Similarity Search",
    tagline: "Content-based movie recommendation engine utilizing TF-IDF and Cosine Similarity on 5,000+ movie plots.",
    bullets: [
      "Built a TF-IDF and cosine-similarity recommendation engine using 5,000+ movie plots.",
      "Performed metadata cleaning, tokenization, and feature extraction for content similarity.",
      "Optimized vectorization and similarity computation for scalable, low-latency recommendations.",
    ],
    tech: ["Python", "scikit-learn", "NLP", "TF-IDF", "Cosine Similarity", "pandas"],
    status: "Featured Project",
    isComingSoon: false,
    github: "https://github.com/Vikass8125",
  },
  {
    id: 2,
    title: "Enterprise RAG Knowledge System",
    category: "Generative AI · Retrieval-Augmented Generation",
    tagline: "High-accuracy semantic retrieval with hybrid vector search, dynamic chunking, and source attribution.",
    bullets: [
      "Production-ready RAG pipeline engineered for document and company knowledge retrieval.",
      "Integrates dense embeddings with Pinecone vector database and semantic caching.",
      "Sub-second response times with structured source verification and hallucination reduction.",
    ],
    tech: ["Python", "FastAPI", "LangChain", "Pinecone", "Groq", "Docker", "Redis"],
    status: "Coming Soon",
    isComingSoon: true,
    github: "https://github.com/Vikass8125",
  },
  {
    id: 3,
    title: "Autonomous Agentic Workflow Engine",
    category: "AI Agents · LangGraph & Tool Calling",
    tagline: "State-graph driven multi-agent workflow system designed for multi-step reasoning and automated execution.",
    bullets: [
      "Autonomous agent loops orchestrating dynamic tool invocation and parallel web retrieval.",
      "State-machine checkpoints with human-in-the-loop approvals and self-correction fallbacks.",
      "Integrated with PostgreSQL and Supabase for persistent thread memory and task tracking.",
    ],
    tech: ["LangGraph", "Python", "Pydantic", "Groq", "PostgreSQL", "Supabase"],
    status: "Coming Soon",
    isComingSoon: true,
    github: "https://github.com/Vikass8125",
  },
  {
    id: 4,
    title: "Real-Time Conversational Voice Assistant",
    category: "Conversational AI · Multimodal & Speech",
    tagline: "Ultra-low latency bidirectional conversational AI integrating streaming LLM inference and TTS.",
    bullets: [
      "Streaming audio pipeline with Voice Activity Detection (VAD) and WebSocket connectivity.",
      "Conversational memory management for multi-turn stateful dialogues.",
      "Real-time expressive speech synthesis using ElevenLabs with Groq LLM reasoning.",
    ],
    tech: ["FastAPI", "WebSockets", "ElevenLabs", "Groq", "Next.js", "Python"],
    status: "Coming Soon",
    isComingSoon: true,
    github: "https://github.com/Vikass8125",
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
export const certifications = [
  { title: "Introduction to Prompt Engineering for Generative AI", issuer: "LinkedIn Learning" },
  { title: "How to Research and Write Using Generative AI Tools",  issuer: "LinkedIn Learning" },
  { title: "AWS for Beginners",                                    issuer: "Online" },
];
