// Portfolio Data for Akram Shaikh

export interface Experience {
  id: string;
  initial: string;
  company: string;
  role: string;
  duration: string;
  description: string;
  type: 'Part-time' | 'Internship' | 'Full-time';
  location: string;
}

export interface Project {
  id: string;
  slug: string;
  title: string;
  description: string;
  longDescription: string;
  tags: string[];
  gradient: string;
  category: 'web' | 'mobile' | 'tool';
  github?: string;
  live?: string;
  featured: boolean;
  flagship?: boolean; // Special flag for the main showcase project
  year: string;
  status: 'Completed' | 'In Progress' | 'Maintained';
  features: string[];
  challenges?: string;
  outcome?: string;
  image?: string;
}

export interface Certification {
  id: string;
  name: string;
  issuer: string;
  date: string;
  credentialId: string;
  image?: string;
}

export interface Skill {
  name: string;
  category: 'frontend' | 'backend' | 'cloud' | 'ai' | 'tools';
  icon?: string;
}

export interface Article {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  url: string;
  tags: string[];
  featured?: boolean;
}

// Personal Info
export const personalInfo = {
  name: "Akram Shaikh",
  headline: "Just a developer sharing what I know & what I learn",
  title: "BTech IT Student at MGM's JNEC",
  bio: "Passionate about Cloud Computing, AI, and Open Source.",
  location: "Aurangabad, Maharashtra, India",
  email: "shaikhakramshakil@gmail.com",
  linkedin: "https://linkedin.com/in/akramshakil",
  github: "https://github.com/shaikhakramshakil",
  twitter: "https://x.com/akram_speakss",
  followers: 984,
  connections: "500+",
};

// Experience data
export const experiences: Experience[] = [
  {
    id: "1",
    initial: "W",
    company: "Women Techmakers",
    role: "Sponsorship Manager",
    duration: "Mar 2025 - Apr 2025",
    description: "Managed sponsorships and logistics for WTM events with 300+ registrations.",
    type: "Part-time",
    location: "Aurangabad, Maharashtra",
  },
  {
    id: "2",
    initial: "G",
    company: "GDG Cloud Emirates",
    role: "Volunteer",
    duration: "Nov 2025 - Present",
    description: "Contributed to community events and cloud initiatives.",
    type: "Part-time",
    location: "Remote",
  },
  {
    id: "3",
    initial: "M",
    company: "Muskurahat Foundation",
    role: "Crowdfunding Intern",
    duration: "Jan 2025 - Mar 2025",
    description: "Supported fundraising efforts for social causes.",
    type: "Internship",
    location: "Remote",
  },
];

// Projects data with detailed information
export const projects: Project[] = [
  {
    id: "0",
    slug: "codeyapp",
    title: "Code Yapp",
    description: "Privacy-first ephemeral chat service. Secure, temporary, and anonymous chat rooms that auto-delete after 2 hours. No accounts, no tracking, no permanent footprint.",
    longDescription: "Code Yapp is a free, web-based chat service focused on privacy and efficiency. It provides secure, temporary, and anonymous chat rooms that are automatically deleted after two hours. It's designed for anyone needing a quick, 'off the record' way to have a conversation, share code, or collaborate without creating a permanent digital footprint. Built with a privacy-first philosophy where the core architecture—not just a feature—guarantees that conversations disappear.",
    tags: ["Next.js", "Redis", "SSE", "Tailwind", "PWA"],
    gradient: "linear-gradient(135deg, #0ea5e9 0%, #06b6d4 100%)",
    category: "web",
    image: "/proj img/codeyapp.jpg",
    live: "https://codeyapp.tech",
    featured: true,
    flagship: true,
    year: "2025",
    status: "Completed",
    features: [
      "Ephemeral by design - all chats auto-delete after 2 hours",
      "100% anonymous - no sign-up or personal info required",
      "Password-protected private rooms for extra security",
      "Real-time messaging with SSE (typing indicators, live user lists)",
      "Simple admin controls (first user becomes admin)",
      "Progressive Web App - installable on mobile & desktop",
      "Powered by Redis via Upstash for serverless performance",
      "Zero permanent data storage - privacy by architecture",
    ],
    challenges: "The biggest challenge was designing a system where data deletion isn't just a feature but the fundamental architecture. Every technical decision—from using Redis with TTL to implementing Server-Sent Events—was made to ensure that conversations truly disappear. Building real-time functionality without WebSockets while maintaining simplicity was another interesting technical constraint.",
    outcome: "Code Yapp stands as a direct solution to digital permanence. In a world where everything is recorded and archived, this project proves you can build a powerful collaboration tool without user accounts, endless settings, or long-term data storage. It respects user privacy by design, demonstrating that effective tools can be both simple and privacy-respecting.",
  },
  {
    id: "1",
    slug: "zerogpu",
    title: "ZeroGPU",
    description: "Free AI Code Completions Without Local GPU or Subscriptions. Built for students, freelancers, and indie devs who want free AI power.",
    longDescription: "ZeroGPU is a VS Code extension that provides free AI-powered code completions without requiring a local GPU or paid subscriptions. It leverages Kaggle's free GPU resources to run large language models, making AI-assisted coding accessible to everyone - students, freelancers, and indie developers who can't afford expensive hardware or subscriptions.",
    tags: ["Python", "FastAPI", "VS Code", "Kaggle"],
    gradient: "var(--gradient-yellow)",
    category: "tool",
    image: "/proj img/zero-gpu.png",
    github: "https://github.com/shaikhakramshakil/Zero-GPU",
    featured: true,
    year: "2025",
    status: "Maintained",
    features: [
      "Free AI code completions using Kaggle GPUs",
      "VS Code extension with seamless integration",
      "Support for multiple programming languages",
      "No local GPU required",
      "FastAPI backend for efficient processing",
    ],
    challenges: "The main challenge was creating a reliable connection between VS Code and Kaggle's infrastructure while maintaining low latency for real-time code completions.",
    outcome: "Successfully deployed and being used by developers who need AI assistance without expensive hardware.",
  },
  {
    id: "2",
    slug: "agritrace",
    title: "AgriTrace",
    description: "AI-Enabled Edible Oil Value Chain Platform with Blockchain Traceability. Solving India's 55-60% import dependency.",
    longDescription: "AgriTrace is a comprehensive platform designed to revolutionize India's edible oil supply chain. It combines AI-powered analytics with blockchain technology to ensure transparency and traceability from farm to consumer. The platform addresses India's critical 55-60% import dependency on edible oils by supporting local farmers and ensuring quality control.",
    tags: ["Flutter", "Firebase", "Blockchain", "Gemini AI"],
    gradient: "var(--gradient-green)",
    category: "mobile",
    image: "/proj img/Agritrace.png",
    github: "https://github.com/shaikhakramshakil/Agritrace",
    live: "https://github.com/shaikhakramshakil/Agritrace/releases/tag/V2.0.0",
    featured: true,
    year: "2025",
    status: "In Progress",
    features: [
      "Blockchain-based traceability for edible oils",
      "AI-powered quality prediction using Gemini",
      "Farmer registration and produce tracking",
      "Consumer verification via QR codes",
      "Real-time supply chain monitoring",
      "Multi-language support for farmers",
    ],
    challenges: "Integrating blockchain technology with a user-friendly mobile interface while ensuring farmers with limited tech literacy can easily use the platform.",
    outcome: "Selected for Smart India Hackathon nationals, recognized for addressing a critical agricultural challenge.",
  },
  {
    id: "3",
    slug: "jal-shakti",
    title: "Jal Shakti",
    description: "Groundwater Quality Calculator & Pollution Index Assessment Tool. PWA with offline support and AI-powered analysis.",
    longDescription: "Jal Shakti is a Progressive Web App that helps users assess groundwater quality and pollution levels. Built with Next.js and deployed on Google Cloud, it provides AI-powered analysis of water quality parameters and generates detailed reports. The PWA architecture ensures the tool works offline in remote areas where internet connectivity is limited.",
    tags: ["Next.js", "PWA", "Google Cloud", "AI"],
    gradient: "var(--gradient-blue)",
    category: "web",
    image: "/proj img/Jalshakti.png",
    github: "https://github.com/shaikhakramshakil/Jal-Shakti-App",
    live: "https://jal-shakti-app.vercel.app",
    featured: true,
    year: "2025",
    status: "Completed",
    features: [
      "Water quality index calculation",
      "Pollution assessment reports",
      "Offline-first PWA architecture",
      "AI-powered recommendations",
      "Location-based data storage",
      "Exportable PDF reports",
    ],
    challenges: "Ensuring accurate scientific calculations while maintaining a simple user interface that non-technical users can navigate.",
    outcome: "Deployed and being used by environmental researchers and local authorities for water quality monitoring.",
  },
  {
    id: "4",
    slug: "legalease-ai",
    title: "Legalease AI",
    description: "AI-powered legal assistant to demystify complex legal documents. Built with Google Cloud's complete AI stack.",
    longDescription: "Legalease AI is an intelligent legal assistant that uses Google Cloud's AI capabilities to simplify complex legal documents. Users can upload contracts, agreements, or legal notices, and the platform provides plain-English explanations, highlights potential concerns, and answers questions about the document's contents.",
    tags: ["Google Cloud", "AI", "PWA"],
    gradient: "var(--gradient-purple)",
    category: "web",
    image: "/proj img/LegalEase.png",
    github: "https://github.com/shaikhakramshakil/Legal_ease",
    live: "https://studio--studio-6479684969-c3da6.us-central1.hosted.app/",
    featured: true,
    year: "2025",
    status: "Completed",
    features: [
      "Document upload and AI analysis",
      "Plain-English explanations of legal terms",
      "Risk and concern highlighting",
      "Interactive Q&A about documents",
      "Support for multiple document formats",
      "Secure document handling",
    ],
    challenges: "Training the AI to accurately interpret legal terminology while avoiding liability issues from incorrect interpretations.",
    outcome: "Helps everyday users understand legal documents without expensive lawyer consultations.",
  },
  {
    id: "5",
    slug: "vidyalytics",
    title: "VidyaLytics",
    description: "Comprehensive School Management System for tracking student performance and providing actionable insights.",
    longDescription: "VidyaLytics is a full-featured school management system built with Next.js and TypeScript. It provides administrators, teachers, and parents with comprehensive tools to track student performance, attendance, and generate insightful reports using interactive charts and data visualization.",
    tags: ["Next.js", "TypeScript", "Firebase", "Recharts"],
    gradient: "var(--gradient-pink)",
    category: "web",
    image: "/proj img/Vidyalytics.png",
    github: "https://github.com/shaikhakramshakil/Vidyalytics",
    live: "https://vidyalytics.vercel.app",
    featured: false,
    year: "2025",
    status: "Completed",
    features: [
      "Student performance tracking",
      "Attendance management system",
      "Parent-teacher communication portal",
      "Interactive data visualizations",
      "Report card generation",
      "Role-based access control",
    ],
    outcome: "Implemented in local schools to improve administrative efficiency and parent engagement.",
  },
  {
    id: "6",
    slug: "healthportal-ai",
    title: "HealthPortal AI",
    description: "Personal AI-Powered Health Assistant with symptom analysis, smart appointments, and AR specialist explorer.",
    longDescription: "HealthPortal AI is a comprehensive health management platform that uses AI to provide preliminary symptom analysis, help users find specialists, and manage appointment scheduling. The platform includes an innovative AR feature that helps users explore different medical specialties.",
    tags: ["Next.js", "Gemini AI", "Firebase", "PWA"],
    gradient: "var(--gradient-teal)",
    category: "web",
    image: "/proj img/healthportal.png",
    github: "https://github.com/shaikhakramshakil/Health-Portal-AI",
    live: "https://healthportalai.netlify.app/",
    featured: false,
    year: "2025",
    status: "In Progress",
    features: [
      "AI-powered symptom checker",
      "Smart doctor recommendations",
      "Appointment scheduling system",
      "AR medical specialty explorer",
      "Health records management",
      "Prescription tracking",
    ],
    outcome: "Making healthcare information more accessible and helping users make informed health decisions.",
  },
  {
    id: "7",
    slug: "krishidhan-seeds",
    title: "Krishidhan Seeds",
    description: "Modern, professional corporate website for Krishidhan Seeds Pvt. Ltd. with dynamic product catalog.",
    longDescription: "A modern corporate website developed for Krishidhan Seeds Pvt. Ltd., featuring a dynamic product catalog, company information, research highlights, and contact functionality. Built with Next.js and styled with Tailwind CSS for a professional, responsive experience.",
    tags: ["Next.js", "Tailwind CSS", "Framer Motion"],
    gradient: "var(--gradient-orange)",
    category: "web",
    image: "/proj img/krishidhan.png",
    github: "https://github.com/shaikhakramshakil/krishidhan-website",
    live: "https://krishidhan.vercel.app",
    featured: false,
    year: "2025",
    status: "Completed",
    features: [
      "Dynamic product catalog",
      "Category-wise product filtering",
      "Responsive design for all devices",
      "Animated page transitions",
      "Contact form integration",
      "SEO optimized pages",
    ],
    outcome: "Delivered a professional web presence for an established agricultural company.",
  },
  {
    id: "8",
    slug: "healthbot-mvp",
    title: "HealthBot MVP",
    description: "WhatsApp chatbot for health information with vaccination schedules and health tips in English & Odia.",
    longDescription: "HealthBot MVP is a WhatsApp-based chatbot that provides health information, vaccination schedules, and health tips in both English and Odia languages. Built using Python, Flask, and Dialogflow, with Twilio integration for WhatsApp messaging.",
    tags: ["Python", "Flask", "Dialogflow", "Twilio"],
    gradient: "var(--gradient-red)",
    category: "tool",
    image: "/proj img/healthbot.png",
    featured: false,
    year: "2025",
    status: "Completed",
    features: [
      "WhatsApp messaging integration",
      "Multi-language support (English & Odia)",
      "Vaccination schedule reminders",
      "Health tips and information",
      "Natural language processing",
      "24/7 availability",
    ],
    outcome: "Provided accessible health information to users in regional languages.",
  },
];

// Helper function to get project by slug
export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find(p => p.slug === slug);
}

// Certifications and Badges
export interface Badge {
  id: string;
  name: string;
  issuer: string;
  date: string;
  category: 'skill-badge' | 'course' | 'gen-ai' | 'foundations';
  profileUrl?: string;
}

export const cloudSkillsProfile = "https://www.skills.google/public_profiles/519fe497-444c-4cc0-9f20-1b9b2fde0bfa";

export const certifications: Certification[] = [
  // Skill Badges
  {
    id: "1",
    name: "Build Infrastructure with Terraform on Google Cloud",
    issuer: "Google Cloud",
    date: "2025",
    credentialId: "skill-badge",
    image: "/badge/Build Infrastructure with Terraform on Google Cloud.png",
  },
  {
    id: "2",
    name: "Create ML Models with BigQuery ML",
    issuer: "Google Cloud",
    date: "2025",
    credentialId: "skill-badge",
    image: "/badge/Create ML Models with BigQuery ML.png",
  },
  {
    id: "3",
    name: "Prompt Design in Vertex AI",
    issuer: "Google Cloud",
    date: "2025",
    credentialId: "skill-badge",
    image: "/badge/Prompt Design in Vertex AI.png",
  },
  {
    id: "4",
    name: "Prepare Data for ML APIs on Google Cloud",
    issuer: "Google Cloud",
    date: "2025",
    credentialId: "skill-badge",
    image: "/badge/Prepare Data for ML APIs on Google Cloud.png",
  },
  {
    id: "5",
    name: "Build a Secure Google Cloud Network",
    issuer: "Google Cloud",
    date: "2025",
    credentialId: "skill-badge",
    image: "/badge/Build a Secure Google Cloud Network.png",
  },
  {
    id: "6",
    name: "Set Up an App Dev Environment on Google Cloud",
    issuer: "Google Cloud",
    date: "2025",
    credentialId: "skill-badge",
    image: "/badge/Set Up an App Dev Environment on Google Cloud.png",
  },
  {
    id: "7",
    name: "Implementing Cloud Load Balancing for Compute Engine",
    issuer: "Google Cloud",
    date: "2025",
    credentialId: "skill-badge",
    image: "/badge/Implementing Cloud Load Balancing for Compute Engine.png",
  },
  // Gen AI
  {
    id: "8",
    name: "Introduction to Generative AI",
    issuer: "Google Cloud",
    date: "2025",
    credentialId: "gen-ai",
    image: "/badge/Introduction to Generative AI.png",
  },
  {
    id: "9",
    name: "Introduction to Large Language Models",
    issuer: "Google Cloud",
    date: "2025",
    credentialId: "gen-ai",
    image: "/badge/Introduction to Large Language Models.png",
  },
  {
    id: "10",
    name: "Introduction to Responsible AI",
    issuer: "Google Cloud",
    date: "2025",
    credentialId: "gen-ai",
    image: "/badge/Introduction to Responsible AI.png",
  },
  // Cloud Foundations
  {
    id: "11",
    name: "Cloud Computing Fundamentals",
    issuer: "Google Cloud",
    date: "2025",
    credentialId: "foundations",
    image: "/badge/Cloud Computing Fundamentals.png",
  },
  {
    id: "12",
    name: "Infrastructure in Google Cloud",
    issuer: "Google Cloud",
    date: "2025",
    credentialId: "foundations",
    image: "/badge/Foundations in Google Cloud.png",
  },
  {
    id: "13",
    name: "Networking & Security in Google Cloud",
    issuer: "Google Cloud",
    date: "2025",
    credentialId: "foundations",
    image: "/badge/Networking & Security in Google Cloud.png",
  },
  {
    id: "14",
    name: "Data, ML, and AI in Google Cloud",
    issuer: "Google Cloud",
    date: "2025",
    credentialId: "foundations",
    image: "/badge/Google Cloud Computing Foundations data and ml and ai in.png",
  },
  // Digital Leader Path
  {
    id: "15",
    name: "Digital Transformation with Google Cloud",
    issuer: "Google Cloud",
    date: "2025",
    credentialId: "digital-leader",
    image: "/badge/Digital Transformation with Google Cloud.png",
  },
  {
    id: "16",
    name: "Exploring Data Transformation with Google Cloud",
    issuer: "Google Cloud",
    date: "2025",
    credentialId: "digital-leader",
    image: "/badge/Exploring Data Transformation with Google Cloud.png",
  },
  {
    id: "17",
    name: "Modernize Infrastructure and Applications with Google Cloud",
    issuer: "Google Cloud",
    date: "2025",
    credentialId: "digital-leader",
    image: "/badge/Modernize Infrastructure and Applications with Google Cloud.png",
  },
  {
    id: "18",
    name: "Scaling with Google Cloud Operations",
    issuer: "Google Cloud",
    date: "2025",
    credentialId: "digital-leader",
    image: "/badge/Scaling with Google Cloud Operations.png",
  },
];

// Skills/Tech Stack - Only icons available in react-icons
export const techStack: Skill[] = [
  { name: "Flutter", category: "frontend", icon: "flutter" },
  { name: "React", category: "frontend", icon: "react" },
  { name: "Next.js", category: "frontend", icon: "nextjs" },
  { name: "TypeScript", category: "frontend", icon: "typescript" },
  { name: "Tailwind", category: "frontend", icon: "tailwindcss" },
  { name: "Python", category: "backend", icon: "python" },
  { name: "Firebase", category: "cloud", icon: "firebase" },
  { name: "Git", category: "tools", icon: "git" },
  { name: "JavaScript", category: "frontend", icon: "javascript" },
];

// Achievements
export const achievements = [
  "🏆 Won Programming Contests",
  "🚀 Team Lead for Smart India Hackathon (National level)",
  "🏅 Government recognition for startup",
  "✅ Google Study Jams success",
  "🎯 Qualified for Flipkart Grid",
  "👩‍💻 Member of Women Techmakers community",
  "💡 Member of Kotlin Community",
  "☁️ GDG Cloud Emirates member",
];

// Blog Articles
export const articles: Article[] = [
  {
    id: "1",
    title: "I Built a Side-Hustle App in 24 Hours Using No-Code vs Code",
    excerpt: "I tried building the same app twice — once using a no-code tool and once by coding it from scratch. Both worked, but in completely different ways.",
    date: "Nov 10, 2025",
    readTime: "5 min read",
    url: "https://medium.com/@akramshakil",
    tags: ["AI", "No-Code", "Development"],
    featured: true,
  },
  {
    id: "2",
    title: "How to Run Open-Source LLMs Without Melting Your GPU",
    excerpt: "Discover how to get free AI code completions in VS Code using lightweight open-source models — no subscriptions, no expensive GPUs.",
    date: "Nov 2, 2025",
    readTime: "6 min read",
    url: "https://medium.com/@akramshakil",
    tags: ["AI", "LLM", "VS Code"],
    featured: true,
  },
  {
    id: "3",
    title: "Why End-to-End Encryption Isn't the Privacy Shield You Expect",
    excerpt: "That little lock icon isn't the full story. Here's what they still see.",
    date: "Oct 21, 2025",
    readTime: "4 min read",
    url: "https://medium.com/@akramshakil",
    tags: ["Privacy", "Security", "Tech"],
  },
  {
    id: "4",
    title: "The Harsh Truth About Fake Internships in India",
    excerpt: "Many students in India are falling for fake internships that offer no real projects or learning. Here's how to identify scam internships.",
    date: "Oct 12, 2025",
    readTime: "5 min read",
    url: "https://medium.com/@akramshakil",
    tags: ["Career", "Students", "India"],
  },
  {
    id: "5",
    title: "Why Next.js is a Game-Changer for React Devs",
    excerpt: "React vs. Next.js: 5 Things You Need to Know Before You Start your next project.",
    date: "Oct 7, 2025",
    readTime: "4 min read",
    url: "https://medium.com/@akramshakil",
    tags: ["Next.js", "React", "Web Dev"],
  },
  {
    id: "6",
    title: "Can Google Gemini Replace ChatGPT?",
    excerpt: "Tried Google Gemini vs ChatGPT for a week. Here's the surprising results you didn't expect.",
    date: "Jun 8, 2025",
    readTime: "5 min read",
    url: "https://medium.com/@akramshakil",
    tags: ["AI", "Gemini", "ChatGPT"],
  },
  {
    id: "7",
    title: "Want $2 Million in Support from Google for Your Startup?",
    excerpt: "How I got accepted into Google's Startup Program and unlocked $200K+ in credits, mentorship, and global support.",
    date: "Jun 9, 2025",
    readTime: "6 min read",
    url: "https://medium.com/@akramshakil",
    tags: ["Startup", "Google", "Entrepreneurship"],
    featured: true,
  },
  {
    id: "8",
    title: "How Google's Women Techmakers is Reshaping Tech for Women",
    excerpt: "Google's Women Techmakers isn't just an event; it's a movement helping women get into tech and shape its future.",
    date: "Jun 9, 2025",
    readTime: "4 min read",
    url: "https://medium.com/@akramshakil",
    tags: ["WTM", "Google", "Diversity"],
  },
];

export const mediumProfile = "https://medium.com/@akramshakil";
