"use client";

import { getProjectBySlug } from "@/lib/data";
import { notFound } from "next/navigation";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useState } from "react";
import { 
    SiPython, SiFlutter, SiFirebase, SiNextdotjs, SiTypescript, 
    SiTailwindcss, SiGooglecloud, SiFastapi, SiFlask, SiDialogflow,
    SiTwilio, SiKaggle
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { FaRobot, FaCubes, FaMobile, FaChartBar } from "react-icons/fa";

// Tech icon mapping
const techIcons: { [key: string]: React.ReactNode } = {
    "Python": <SiPython size={20} />,
    "FastAPI": <SiFastapi size={20} />,
    "VS Code": <VscVscode size={20} />,
    "Kaggle": <SiKaggle size={20} />,
    "Flutter": <SiFlutter size={20} />,
    "Firebase": <SiFirebase size={20} />,
    "Blockchain": <FaCubes size={20} />,
    "Gemini AI": <FaRobot size={20} />,
    "AI": <FaRobot size={20} />,
    "Next.js": <SiNextdotjs size={20} />,
    "PWA": <FaMobile size={20} />,
    "Google Cloud": <SiGooglecloud size={20} />,
    "TypeScript": <SiTypescript size={20} />,
    "Tailwind CSS": <SiTailwindcss size={20} />,
    "Framer Motion": <FaChartBar size={20} />,
    "Recharts": <FaChartBar size={20} />,
    "Flask": <SiFlask size={20} />,
    "Dialogflow": <SiDialogflow size={20} />,
    "Twilio": <SiTwilio size={20} />,
};

export default function ProjectPage() {
    const params = useParams();
    const slug = params.slug as string;
    const project = getProjectBySlug(slug);
    const [hoveredFeature, setHoveredFeature] = useState<number | null>(null);

    if (!project) {
        notFound();
    }

    return (
        <main style={{ minHeight: "100vh", background: "#ffffff" }}>
            {/* Sleek Header */}
            <header
                style={{
                    position: "fixed",
                    top: 0,
                    left: 0,
                    right: 0,
                    zIndex: 1000,
                    padding: "20px 0",
                    background: "rgba(255, 255, 255, 0.9)",
                    backdropFilter: "blur(20px)",
                    borderBottom: "1px solid rgba(0,0,0,0.06)",
                }}
            >
                <div className="container">
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                        <Link
                            href="/"
                            style={{
                                display: "inline-flex",
                                alignItems: "center",
                                gap: "10px",
                                color: "var(--secondary)",
                                textDecoration: "none",
                                fontSize: "14px",
                                fontWeight: 500,
                                padding: "10px 18px",
                                borderRadius: "10px",
                                background: "var(--muted)",
                                border: "1px solid var(--border)",
                                transition: "all 0.2s",
                            }}
                        >
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                <path d="M19 12H5M12 19l-7-7 7-7" />
                            </svg>
                            Back
                        </Link>
                        <span style={{ fontSize: "16px", fontWeight: 700, color: "var(--primary)", letterSpacing: "-0.5px" }}>
                            AKRAM SHAIKH
                        </span>
                    </div>
                </div>
            </header>

            {/* Hero */}
            <section
                style={{
                    paddingTop: "160px",
                    paddingBottom: "80px",
                    position: "relative",
                    overflow: "hidden",
                }}
            >
                {/* Gradient Orb */}
                <div
                    style={{
                        position: "absolute",
                        width: "800px",
                        height: "800px",
                        borderRadius: "50%",
                        background: project.gradient,
                        opacity: 0.15,
                        filter: "blur(120px)",
                        top: "-400px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        pointerEvents: "none",
                    }}
                />

                <div className="container" style={{ position: "relative", zIndex: 10 }}>
                    <div style={{ maxWidth: "900px", margin: "0 auto", textAlign: "center" }}>
                        {/* Status Pill */}
                        <div
                            style={{
                                display: "inline-flex",
                                alignItems: "center",
                                gap: "8px",
                                padding: "8px 16px",
                                background: project.status === "Completed" ? "rgba(34, 197, 94, 0.15)" : "rgba(59, 130, 246, 0.15)",
                                borderRadius: "100px",
                                marginBottom: "32px",
                                border: `1px solid ${project.status === "Completed" ? "rgba(34, 197, 94, 0.3)" : "rgba(59, 130, 246, 0.3)"}`,
                            }}
                        >
                            <div
                                style={{
                                    width: "8px",
                                    height: "8px",
                                    borderRadius: "50%",
                                    background: project.status === "Completed" ? "#22c55e" : "#3b82f6",
                                    boxShadow: `0 0 12px ${project.status === "Completed" ? "#22c55e" : "#3b82f6"}`,
                                }}
                            />
                            <span style={{ fontSize: "13px", fontWeight: 600, color: project.status === "Completed" ? "#22c55e" : "#3b82f6" }}>
                                {project.status}
                            </span>
                        </div>

                        {/* Title */}
                        <h1
                            style={{
                                fontSize: "clamp(42px, 8vw, 80px)",
                                fontWeight: 700,
                                color: "var(--primary)",
                                marginBottom: "24px",
                                letterSpacing: "-0.04em",
                                lineHeight: 1.05,
                            }}
                        >
                            {project.title}
                        </h1>

                        {/* Description */}
                        <p
                            style={{
                                fontSize: "clamp(18px, 2vw, 22px)",
                                color: "var(--secondary)",
                                lineHeight: 1.6,
                                maxWidth: "650px",
                                margin: "0 auto 48px",
                            }}
                        >
                            {project.description}
                        </p>

                        {/* Action Buttons */}
                        <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
                            {project.github && (
                                <a
                                    href={project.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={{
                                        padding: "16px 32px",
                                        background: "var(--primary)",
                                        color: "white",
                                        borderRadius: "14px",
                                        fontSize: "15px",
                                        fontWeight: 600,
                                        textDecoration: "none",
                                        display: "inline-flex",
                                        alignItems: "center",
                                        gap: "10px",
                                        transition: "all 0.2s",
                                    }}
                                >
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                    </svg>
                                    Source Code
                                </a>
                            )}
                            {project.live && (
                                <a
                                    href={project.live}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={{
                                        padding: "16px 32px",
                                        background: "white",
                                        color: "var(--primary)",
                                        borderRadius: "14px",
                                        fontSize: "15px",
                                        fontWeight: 600,
                                        textDecoration: "none",
                                        display: "inline-flex",
                                        alignItems: "center",
                                        gap: "10px",
                                        border: "1px solid var(--border)",
                                        transition: "all 0.2s",
                                    }}
                                >
                                    Live Preview
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                        <path d="M7 17L17 7M17 7H7M17 7v10" />
                                    </svg>
                                </a>
                            )}
                        </div>
                    </div>

                    {/* Project Image Showcase */}
                    {project.image && (
                        <div
                            style={{
                                maxWidth: "1000px",
                                margin: "64px auto 0",
                                position: "relative",
                            }}
                        >
                            <div
                                style={{
                                    position: "relative",
                                    borderRadius: "24px",
                                    overflow: "hidden",
                                    border: "1px solid var(--border)",
                                    boxShadow: "0 25px 80px rgba(0,0,0,0.12), 0 0 0 1px rgba(0,0,0,0.02)",
                                    background: "white",
                                }}
                            >
                                {/* Browser Mock Header */}
                                <div
                                    style={{
                                        display: "flex",
                                        alignItems: "center",
                                        gap: "8px",
                                        padding: "16px 20px",
                                        background: "var(--muted)",
                                        borderBottom: "1px solid var(--border)",
                                    }}
                                >
                                    <div style={{ width: "12px", height: "12px", borderRadius: "50%", background: "#ef4444" }} />
                                    <div style={{ width: "12px", height: "12px", borderRadius: "50%", background: "#eab308" }} />
                                    <div style={{ width: "12px", height: "12px", borderRadius: "50%", background: "#22c55e" }} />
                                    <div
                                        style={{
                                            flex: 1,
                                            marginLeft: "16px",
                                            padding: "8px 16px",
                                            background: "white",
                                            borderRadius: "8px",
                                            border: "1px solid var(--border)",
                                            fontSize: "12px",
                                            color: "var(--secondary)",
                                            textAlign: "center",
                                        }}
                                    >
                                        {project.live || project.github || `${project.title.toLowerCase().replace(/\s+/g, '')}.app`}
                                    </div>
                                </div>
                                {/* Project Screenshot */}
                                <img
                                    src={project.image}
                                    alt={`${project.title} Screenshot`}
                                    style={{
                                        width: "100%",
                                        height: "auto",
                                        display: "block",
                                    }}
                                />
                            </div>
                            {/* Floating gradient accent */}
                            <div
                                style={{
                                    position: "absolute",
                                    bottom: "-20px",
                                    left: "50%",
                                    transform: "translateX(-50%)",
                                    width: "70%",
                                    height: "40px",
                                    background: project.gradient,
                                    opacity: 0.3,
                                    filter: "blur(30px)",
                                    borderRadius: "50%",
                                    pointerEvents: "none",
                                }}
                            />
                        </div>
                    )}
                </div>
            </section>

            {/* Stats Bar */}
            <section
                style={{
                    borderTop: "1px solid var(--border)",
                    borderBottom: "1px solid var(--border)",
                    padding: "32px 0",
                    background: "var(--muted)",
                }}
            >
                <div className="container">
                    <div
                        style={{
                            display: "grid",
                            gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
                            gap: "32px",
                            maxWidth: "800px",
                            margin: "0 auto",
                            textAlign: "center",
                        }}
                    >
                        <div>
                            <div style={{ fontSize: "12px", color: "var(--secondary)", fontWeight: 600, letterSpacing: "1px", textTransform: "uppercase", marginBottom: "8px" }}>
                                Category
                            </div>
                            <div style={{ fontSize: "18px", color: "var(--primary)", fontWeight: 600, textTransform: "capitalize" }}>
                                {project.category}
                            </div>
                        </div>
                        <div>
                            <div style={{ fontSize: "12px", color: "var(--secondary)", fontWeight: 600, letterSpacing: "1px", textTransform: "uppercase", marginBottom: "8px" }}>
                                Year
                            </div>
                            <div style={{ fontSize: "18px", color: "var(--primary)", fontWeight: 600 }}>
                                {project.year}
                            </div>
                        </div>
                        <div>
                            <div style={{ fontSize: "12px", color: "var(--secondary)", fontWeight: 600, letterSpacing: "1px", textTransform: "uppercase", marginBottom: "8px" }}>
                                Tech Stack
                            </div>
                            <div style={{ fontSize: "18px", color: "var(--primary)", fontWeight: 600 }}>
                                {project.tags.length} Technologies
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section style={{ padding: "100px 0" }}>
                <div className="container">
                    <div style={{ maxWidth: "800px", margin: "0 auto" }}>
                        <div style={{ marginBottom: "16px" }}>
                            <span
                                style={{
                                    fontSize: "12px",
                                    fontWeight: 700,
                                    color: "#3b82f6",
                                    letterSpacing: "2px",
                                    textTransform: "uppercase",
                                }}
                            >
                                Overview
                            </span>
                        </div>
                        <p
                            style={{
                                fontSize: "clamp(20px, 2.5vw, 28px)",
                                color: "var(--secondary)",
                                lineHeight: 1.7,
                                fontWeight: 400,
                            }}
                        >
                            {project.longDescription}
                        </p>
                    </div>
                </div>
            </section>

            {/* Features */}
            <section style={{ padding: "0 0 100px" }}>
                <div className="container">
                    <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
                        <div style={{ textAlign: "center", marginBottom: "64px" }}>
                            <span
                                style={{
                                    fontSize: "12px",
                                    fontWeight: 700,
                                    color: "#3b82f6",
                                    letterSpacing: "2px",
                                    textTransform: "uppercase",
                                }}
                            >
                                Features
                            </span>
                            <h2
                                style={{
                                    fontSize: "clamp(32px, 4vw, 48px)",
                                    fontWeight: 700,
                                    color: "var(--primary)",
                                    marginTop: "16px",
                                    letterSpacing: "-0.03em",
                                }}
                            >
                                What Makes It Special
                            </h2>
                        </div>

                        <div
                            style={{
                                display: "grid",
                                gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                                gap: "20px",
                            }}
                        >
                            {project.features.map((feature, index) => (
                                <div
                                    key={index}
                                    onMouseEnter={() => setHoveredFeature(index)}
                                    onMouseLeave={() => setHoveredFeature(null)}
                                    style={{
                                        padding: "28px",
                                        background: hoveredFeature === index ? "white" : "var(--muted)",
                                        borderRadius: "20px",
                                        border: `2px solid ${hoveredFeature === index ? "#3b82f6" : "var(--border)"}`,
                                        transition: "all 0.3s ease",
                                        transform: hoveredFeature === index ? "translateY(-4px)" : "translateY(0)",
                                        boxShadow: hoveredFeature === index ? "0 10px 40px rgba(59,130,246,0.15)" : "0 2px 12px rgba(0,0,0,0.03)",
                                    }}
                                >
                                    <div
                                        style={{
                                            width: "48px",
                                            height: "48px",
                                            borderRadius: "14px",
                                            background: "linear-gradient(135deg, rgba(59,130,246,0.2) 0%, rgba(139,92,246,0.2) 100%)",
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            marginBottom: "20px",
                                            border: "1px solid rgba(59,130,246,0.3)",
                                        }}
                                    >
                                        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="2">
                                            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                                            <polyline points="22 4 12 14.01 9 11.01" />
                                        </svg>
                                    </div>
                                    <p
                                        style={{
                                            fontSize: "15px",
                                            color: "var(--secondary)",
                                            lineHeight: 1.7,
                                            margin: 0,
                                        }}
                                    >
                                        {feature}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Tech Stack */}
            <section
                style={{
                    padding: "80px 0",
                    background: "var(--muted)",
                    borderTop: "1px solid var(--border)",
                    borderBottom: "1px solid var(--border)",
                }}
            >
                <div className="container">
                    <div style={{ maxWidth: "900px", margin: "0 auto", textAlign: "center" }}>
                        <span
                            style={{
                                fontSize: "12px",
                                fontWeight: 700,
                                color: "#3b82f6",
                                letterSpacing: "2px",
                                textTransform: "uppercase",
                            }}
                        >
                            Tech Stack
                        </span>
                        <h2
                            style={{
                                fontSize: "clamp(28px, 4vw, 40px)",
                                fontWeight: 700,
                                color: "var(--primary)",
                                marginTop: "16px",
                                marginBottom: "48px",
                                letterSpacing: "-0.03em",
                            }}
                        >
                            Built With Modern Tools
                        </h2>
                        <div style={{ display: "flex", flexWrap: "wrap", gap: "16px", justifyContent: "center" }}>
                            {project.tags.map((tag) => (
                                <div
                                    key={tag}
                                    style={{
                                        display: "flex",
                                        alignItems: "center",
                                        gap: "12px",
                                        padding: "16px 28px",
                                        background: "white",
                                        borderRadius: "16px",
                                        fontSize: "15px",
                                        fontWeight: 600,
                                        color: "var(--primary)",
                                        border: "2px solid var(--border)",
                                        boxShadow: "0 4px 20px rgba(0,0,0,0.06)",
                                        transition: "all 0.3s ease",
                                    }}
                                >
                                    {techIcons[tag] && (
                                        <span style={{ color: "#3b82f6", display: "flex", alignItems: "center" }}>
                                            {techIcons[tag]}
                                        </span>
                                    )}
                                    {tag}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Challenges & Outcome */}
            {(project.challenges || project.outcome) && (
                <section style={{ padding: "100px 0" }}>
                    <div className="container">
                        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
                            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "32px" }}>
                                {project.challenges && (
                                    <div
                                        style={{
                                            padding: "40px",
                                            background: "linear-gradient(135deg, rgba(239,68,68,0.1) 0%, rgba(239,68,68,0.02) 100%)",
                                            borderRadius: "24px",
                                            border: "1px solid rgba(239,68,68,0.2)",
                                        }}
                                    >
                                        <div
                                            style={{
                                                width: "52px",
                                                height: "52px",
                                                borderRadius: "16px",
                                                background: "rgba(239,68,68,0.15)",
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "center",
                                                marginBottom: "24px",
                                            }}
                                        >
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ef4444" strokeWidth="2">
                                                <circle cx="12" cy="12" r="10" />
                                                <line x1="12" y1="8" x2="12" y2="12" />
                                                <line x1="12" y1="16" x2="12.01" y2="16" />
                                            </svg>
                                        </div>
                                        <h3 style={{ fontSize: "20px", fontWeight: 700, color: "var(--primary)", marginBottom: "16px" }}>
                                            Challenges
                                        </h3>
                                        <p style={{ fontSize: "15px", color: "var(--secondary)", lineHeight: 1.8, margin: 0 }}>
                                            {project.challenges}
                                        </p>
                                    </div>
                                )}
                                {project.outcome && (
                                    <div
                                        style={{
                                            padding: "40px",
                                            background: "linear-gradient(135deg, rgba(34,197,94,0.1) 0%, rgba(34,197,94,0.02) 100%)",
                                            borderRadius: "24px",
                                            border: "1px solid rgba(34,197,94,0.2)",
                                        }}
                                    >
                                        <div
                                            style={{
                                                width: "52px",
                                                height: "52px",
                                                borderRadius: "16px",
                                                background: "rgba(34,197,94,0.15)",
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "center",
                                                marginBottom: "24px",
                                            }}
                                        >
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2">
                                                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                                                <polyline points="22 4 12 14.01 9 11.01" />
                                            </svg>
                                        </div>
                                        <h3 style={{ fontSize: "20px", fontWeight: 700, color: "var(--primary)", marginBottom: "16px" }}>
                                            Outcome
                                        </h3>
                                        <p style={{ fontSize: "15px", color: "var(--secondary)", lineHeight: 1.8, margin: 0 }}>
                                            {project.outcome}
                                        </p>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </section>
            )}

            {/* CTA */}
            <section
                style={{
                    padding: "100px 0",
                    background: "linear-gradient(180deg, rgba(59,130,246,0.08) 0%, transparent 100%)",
                    borderTop: "1px solid var(--border)",
                }}
            >
                <div className="container">
                    <div style={{ maxWidth: "600px", margin: "0 auto", textAlign: "center" }}>
                        <h2
                            style={{
                                fontSize: "clamp(32px, 5vw, 48px)",
                                fontWeight: 700,
                                color: "var(--primary)",
                                marginBottom: "20px",
                                letterSpacing: "-0.03em",
                            }}
                        >
                            Let&apos;s Work Together
                        </h2>
                        <p
                            style={{
                                fontSize: "18px",
                                color: "var(--secondary)",
                                marginBottom: "40px",
                                lineHeight: 1.6,
                            }}
                        >
                            Have a project in mind? I&apos;d love to hear about it.
                        </p>
                        <Link
                            href="/#contact"
                            style={{
                                display: "inline-flex",
                                alignItems: "center",
                                gap: "10px",
                                padding: "18px 40px",
                                background: "var(--primary)",
                                color: "white",
                                borderRadius: "14px",
                                fontSize: "16px",
                                fontWeight: 600,
                                textDecoration: "none",
                                transition: "all 0.2s",
                            }}
                        >
                            Get in Touch
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                <path d="M5 12h14M12 5l7 7-7 7" />
                            </svg>
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
}
