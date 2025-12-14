"use client";

import { personalInfo } from "@/lib/data";
import {
    SiFlutter,
    SiReact,
    SiNextdotjs,
    SiPython,
    SiFirebase,
    SiTypescript,
    SiTailwindcss,
    SiGit,
    SiJavascript,
    SiGithub,
    SiDocker,
    SiFigma,
    SiVercel,
    SiGooglecloud,
    SiMongodb,
    SiPostgresql,
    SiDart,
    SiAndroid,
    SiHtml5,
    SiCss3,
    SiFastapi,
} from "react-icons/si";
import { IconType } from "react-icons";

// All tech icons with their colors
const techIcons: { icon: IconType; color: string; name: string }[] = [
    { icon: SiReact, color: "#61DAFB", name: "React" },
    { icon: SiNextdotjs, color: "#000000", name: "Next.js" },
    { icon: SiTypescript, color: "#3178C6", name: "TypeScript" },
    { icon: SiJavascript, color: "#F7DF1E", name: "JavaScript" },
    { icon: SiHtml5, color: "#E34F26", name: "HTML5" },
    { icon: SiCss3, color: "#1572B6", name: "CSS3" },
    { icon: SiTailwindcss, color: "#06B6D4", name: "Tailwind" },
    { icon: SiPython, color: "#3776AB", name: "Python" },
    { icon: SiFastapi, color: "#009688", name: "FastAPI" },
    { icon: SiFlutter, color: "#02569B", name: "Flutter" },
    { icon: SiDart, color: "#0175C2", name: "Dart" },
    { icon: SiAndroid, color: "#3DDC84", name: "Android" },
    { icon: SiFirebase, color: "#FFCA28", name: "Firebase" },
    { icon: SiGooglecloud, color: "#4285F4", name: "GCP" },
    { icon: SiMongodb, color: "#47A248", name: "MongoDB" },
    { icon: SiPostgresql, color: "#4169E1", name: "PostgreSQL" },
    { icon: SiGit, color: "#F05032", name: "Git" },
    { icon: SiGithub, color: "#181717", name: "GitHub" },
    { icon: SiDocker, color: "#2496ED", name: "Docker" },
    { icon: SiVercel, color: "#000000", name: "Vercel" },
    { icon: SiFigma, color: "#F24E1E", name: "Figma" },
];

// Infinite Carousel Component - Icons only, bigger
function TechCarousel() {
    const duplicatedIcons = [...techIcons, ...techIcons];

    return (
        <div
            style={{
                width: "100%",
                maxWidth: "900px",
                margin: "0 auto",
                overflow: "hidden",
                maskImage: "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
                WebkitMaskImage: "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
            }}
        >
            <div
                className="carousel-track"
                style={{
                    display: "flex",
                    gap: "24px",
                    width: "fit-content",
                }}
            >
                {duplicatedIcons.map((tech, index) => {
                    const Icon = tech.icon;

                    return (
                        <div
                            key={`${tech.name}-${index}`}
                            title={tech.name}
                            style={{
                                flexShrink: 0,
                                width: "72px",
                                height: "72px",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                background: "white",
                                borderRadius: "18px",
                                border: "1px solid var(--border)",
                                boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
                                transition: "transform 0.2s, box-shadow 0.2s",
                                cursor: "pointer",
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.transform = "scale(1.1)";
                                e.currentTarget.style.boxShadow = "0 4px 16px rgba(0,0,0,0.1)";
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.transform = "scale(1)";
                                e.currentTarget.style.boxShadow = "0 2px 8px rgba(0,0,0,0.04)";
                            }}
                        >
                            <Icon size={36} color={tech.color} />
                        </div>
                    );
                })}
            </div>

            <style jsx global>{`
        .carousel-track {
          animation: scroll 50s linear infinite;
        }
        .carousel-track:hover {
          animation-play-state: paused;
        }
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
        </div>
    );
}

export default function Hero() {
    return (
        <section
            id="hero"
            style={{
                minHeight: "100vh",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
                paddingTop: "120px",
                paddingBottom: "60px",
                position: "relative",
            }}
        >
            <div className="container">
                {/* Eyebrow text */}
                <div
                    className="animate-fade-in-up"
                    style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "8px",
                        padding: "8px 16px",
                        background: "white",
                        borderRadius: "100px",
                        marginBottom: "32px",
                        border: "1px solid var(--border)",
                        boxShadow: "var(--shadow-sm)",
                    }}
                >
                    <span style={{
                        width: "8px",
                        height: "8px",
                        borderRadius: "50%",
                        background: "#22c55e",
                        animation: "pulse 2s infinite",
                    }} />
                    <span style={{ fontSize: "13px", color: "var(--secondary)", fontWeight: 500 }}>
                        Available for opportunities
                    </span>
                </div>

                {/* Main Headline */}
                <h1
                    className="animate-fade-in-up animation-delay-100 text-balance"
                    style={{
                        fontSize: "clamp(42px, 6.5vw, 72px)",
                        fontWeight: 800,
                        lineHeight: 1.15,
                        marginBottom: "28px",
                        color: "var(--primary)",
                        letterSpacing: "-0.04em",
                        maxWidth: "950px",
                        margin: "0 auto 28px",
                    }}
                >
                    Building Intelligent &{" "}
                    <span
                        style={{
                            background: "linear-gradient(135deg, var(--accent) 0%, var(--primary) 100%)",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                            backgroundClip: "text",
                        }}
                    >
                        Decentralized Applications
                    </span>
                </h1>

                {/* Subtitle */}
                <p
                    className="animate-fade-in-up animation-delay-200"
                    style={{
                        fontSize: "16px",
                        color: "var(--secondary)",
                        marginBottom: "18px",
                        fontWeight: 600,
                        letterSpacing: "0.5px",
                    }}
                >
                    App Dev | Blockchain | AI | Open Source
                </p>
                <p
                    className="animate-fade-in-up animation-delay-250"
                    style={{
                        fontSize: "16px",
                        color: "var(--secondary)",
                        marginBottom: "12px",
                        fontWeight: 400,
                        maxWidth: "600px",
                        margin: "0 auto 12px",
                        lineHeight: 1.6,
                    }}
                >
                    Creating robust digital solutions that are secure, smart, and scalable.
                </p>
                <p
                    className="animate-fade-in-up animation-delay-300"
                    style={{
                        fontSize: "17px",
                        color: "var(--accent)",
                        marginBottom: "36px",
                        fontWeight: 600,
                    }}
                >
                    Let's build the future together.
                </p>

                {/* Flagship Project Highlight */}
                <a
                    href="https://codeyapp.tech"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="animate-fade-in-up animation-delay-350"
                    style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "8px",
                        padding: "10px 20px",
                        background: "linear-gradient(135deg, rgba(14, 165, 233, 0.08) 0%, rgba(6, 182, 212, 0.08) 100%)",
                        border: "1px solid rgba(14, 165, 233, 0.2)",
                        borderRadius: "100px",
                        marginBottom: "40px",
                        textDecoration: "none",
                        transition: "all 0.3s ease",
                    }}
                    onMouseEnter={(e) => {
                        e.currentTarget.style.background = "linear-gradient(135deg, rgba(14, 165, 233, 0.15) 0%, rgba(6, 182, 212, 0.15) 100%)";
                        e.currentTarget.style.transform = "translateY(-2px)";
                        e.currentTarget.style.boxShadow = "0 8px 24px rgba(14, 165, 233, 0.15)";
                    }}
                    onMouseLeave={(e) => {
                        e.currentTarget.style.background = "linear-gradient(135deg, rgba(14, 165, 233, 0.08) 0%, rgba(6, 182, 212, 0.08) 100%)";
                        e.currentTarget.style.transform = "translateY(0)";
                        e.currentTarget.style.boxShadow = "none";
                    }}
                >
                    <span style={{ 
                        fontSize: "13px", 
                        color: "var(--secondary)", 
                        fontWeight: 500 
                    }}>
                        Creator of
                    </span>
                    <span style={{ 
                        fontSize: "14px", 
                        color: "var(--accent)", 
                        fontWeight: 700,
                        letterSpacing: "-0.02em",
                    }}>
                        @codeyapp
                    </span>
                    <span style={{
                        fontSize: "11px",
                        color: "white",
                        background: "var(--accent)",
                        padding: "3px 8px",
                        borderRadius: "50px",
                        fontWeight: 600,
                    }}>
                        LIVE
                    </span>
                    <svg 
                        width="14" 
                        height="14" 
                        viewBox="0 0 24 24" 
                        fill="none" 
                        stroke="var(--accent)" 
                        strokeWidth="2"
                        style={{ marginLeft: "2px" }}
                    >
                        <path d="M7 17L17 7M17 7H7M17 7V17" />
                    </svg>
                </a>

                {/* CTA Buttons */}
                <div
                    className="animate-fade-in-up animation-delay-400"
                    style={{
                        display: "flex",
                        gap: "16px",
                        justifyContent: "center",
                        flexWrap: "wrap",
                        marginBottom: "48px",
                    }}
                >
                    <a href="#work" className="btn btn-primary">
                        View My Work
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M7 17L17 7M17 7H7M17 7V17" />
                        </svg>
                    </a>
                    <a href="#contact" className="btn btn-outline">
                        Get in Touch
                    </a>
                </div>

                {/* Tech Stack Carousel - Icons Only */}
                <div className="animate-fade-in-up animation-delay-500">
                    <p
                        style={{
                            fontSize: "11px",
                            letterSpacing: "2px",
                            textTransform: "uppercase",
                            color: "var(--secondary)",
                            marginBottom: "20px",
                            fontWeight: 600,
                        }}
                    >
                        Tech Stack
                    </p>
                    <TechCarousel />
                </div>
            </div>

            <style jsx>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
      `}</style>
        </section>
    );
}
