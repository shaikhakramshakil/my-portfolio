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
  title: string;
  description: string;
  tags: string[];
  gradient: string;
  category: 'web' | 'mobile' | 'tool';
  github?: string;
  live?: string;
  featured: boolean;
}

export interface Certification {
  id: string;
  name: string;
  issuer: string;
  date: string;
  credentialId: string;
}

export interface Skill {
  name: string;
  category: 'frontend' | 'backend' | 'cloud' | 'ai' | 'tools';
  icon?: string;
}

// Personal Info
export const personalInfo = {
  name: "Akram Shaikh",
  headline: "Just a developer sharing what I know & what I learn",
  title: "BTech IT Student at MGM's JNEC",
  bio: "Passionate about Cloud Computing, AI, and Open Source.",
  location: "Aurangabad, Maharashtra, India",
  email: "akramshakil@email.com",
  linkedin: "https://linkedin.com/in/akramshakil",
  github: "https://github.com/shaikhakramshakil",
  twitter: "#",
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
    duration: "Nov 2024 - Dec 2024",
    description: "Contributed to community events and cloud initiatives.",
    type: "Part-time",
    location: "Remote",
  },
  {
    id: "3",
    initial: "M",
    company: "Muskurahat Foundation",
    role: "Crowdfunding Intern",
    duration: "Nov 2023 - Jan 2024",
    description: "Supported fundraising efforts for social causes.",
    type: "Internship",
    location: "Remote",
  },
];

// Projects data
export const projects: Project[] = [
  {
    id: "1",
    title: "ZeroGPU",
    description: "Free AI Code Completions Without Local GPU or Subscriptions. Built for students, freelancers, and indie devs who want free AI power.",
    tags: ["Python", "FastAPI", "VS Code", "Kaggle"],
    gradient: "var(--gradient-yellow)",
    category: "tool",
    github: "https://github.com/shaikhakramshakil/Zero-GPU",
    featured: true,
  },
  {
    id: "2",
    title: "AgriTrace",
    description: "AI-Enabled Edible Oil Value Chain Platform with Blockchain Traceability. Solving India's 55-60% import dependency.",
    tags: ["Flutter", "Firebase", "Blockchain", "Gemini AI"],
    gradient: "var(--gradient-green)",
    category: "mobile",
    github: "https://github.com/shaikhakramshakil/Agritrace",
    featured: true,
  },
  {
    id: "3",
    title: "Jal Shakti",
    description: "Groundwater Quality Calculator & Pollution Index Assessment Tool. PWA with offline support and AI-powered analysis.",
    tags: ["Next.js", "PWA", "Google Cloud", "AI"],
    gradient: "var(--gradient-blue)",
    category: "web",
    featured: true,
  },
  {
    id: "4",
    title: "Legalease AI",
    description: "AI-powered legal assistant to demystify complex legal documents. Built with Google Cloud's complete AI stack.",
    tags: ["Google Cloud", "AI", "PWA"],
    gradient: "var(--gradient-purple)",
    category: "web",
    featured: true,
  },
  {
    id: "5",
    title: "VidyaLytics",
    description: "Comprehensive School Management System for tracking student performance and providing actionable insights.",
    tags: ["Next.js", "TypeScript", "Firebase", "Recharts"],
    gradient: "var(--gradient-pink)",
    category: "web",
    github: "https://github.com/shaikhakramshakil/School-ERP",
    featured: false,
  },
  {
    id: "6",
    title: "HealthPortal AI",
    description: "Personal AI-Powered Health Assistant with symptom analysis, smart appointments, and AR specialist explorer.",
    tags: ["Next.js", "Gemini AI", "Firebase", "PWA"],
    gradient: "var(--gradient-teal)",
    category: "web",
    featured: false,
  },
  {
    id: "7",
    title: "Krishidhan Seeds",
    description: "Modern, professional corporate website for Krishidhan Seeds Pvt. Ltd. with dynamic product catalog.",
    tags: ["Next.js", "Tailwind CSS", "Framer Motion"],
    gradient: "var(--gradient-orange)",
    category: "web",
    featured: false,
  },
  {
    id: "8",
    title: "HealthBot MVP",
    description: "WhatsApp chatbot for health information with vaccination schedules and health tips in English & Odia.",
    tags: ["Python", "Flask", "Dialogflow", "Twilio"],
    gradient: "var(--gradient-red)",
    category: "tool",
    featured: false,
  },
];

// Certifications
export const certifications: Certification[] = [
  {
    id: "1",
    name: "Tata Group - Data Visualisation",
    issuer: "Forage",
    date: "Dec 2024",
    credentialId: "ZNAsb6eBW2XmcThRW",
  },
  {
    id: "2",
    name: "Digital Transformation with Google Cloud",
    issuer: "Google",
    date: "Nov 2023",
    credentialId: "6108111",
  },
  {
    id: "3",
    name: "Infrastructure and Application Modernization with Google Cloud",
    issuer: "Google",
    date: "Nov 2023",
    credentialId: "6108329",
  },
  {
    id: "4",
    name: "Build and Secure Networks in Google Cloud",
    issuer: "Google",
    date: "Oct 2023",
    credentialId: "5862039",
  },
  {
    id: "5",
    name: "Google Cloud Computing Foundations",
    issuer: "Google",
    date: "Oct 2023",
    credentialId: "5771622",
  },
  {
    id: "6",
    name: "Introduction to Generative AI",
    issuer: "Google",
    date: "Oct 2023",
    credentialId: "5750036",
  },
];

// Skills/Tech Stack
export const techStack: Skill[] = [
  { name: "Flutter", category: "frontend", icon: "flutter" },
  { name: "React", category: "frontend", icon: "react" },
  { name: "Next.js", category: "frontend", icon: "nextjs" },
  { name: "Python", category: "backend", icon: "python" },
  { name: "Google Cloud", category: "cloud", icon: "gcp" },
  { name: "Firebase", category: "cloud", icon: "firebase" },
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
