"use client";

import { personalInfo, techStack } from "@/lib/data";
import {
    SiFlutter,
    SiReact,
    SiNextdotjs,
    SiPython,
    SiGooglecloud,
    SiFirebase,
    SiTypescript,
    SiTailwindcss
} from "react-icons/si";

// Tech icon mapping
const iconComponents: { [key: string]: React.ComponentType<{ size?: number; color?: string }> } = {
    flutter: SiFlutter,
    react: SiReact,
    nextjs: SiNextdotjs,
    python: SiPython,
    gcp: SiGooglecloud,
    firebase: SiFirebase,
    typescript: SiTypescript,
    tailwindcss: SiTailwindcss,
};

const iconColors: { [key: string]: string } = {
    flutter: "#02569B",
    react: "#61DAFB",
    nextjs: "#000000",
    python: "#3776AB",
    gcp: "#4285F4",
    firebase: "#FFCA28",
    typescript: "#3178C6",
    tailwindcss: "#06B6D4",
};

export default function Hero() {
    return (
        <section
            id="hero"
            className="grid-background"
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
                        background: "var(--muted)",
                        borderRadius: "100px",
                        marginBottom: "32px",
                        border: "1px solid var(--border)",
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
                        fontSize: "clamp(36px, 6vw, 64px)",
                        fontWeight: 700,
                        lineHeight: 1.1,
                        marginBottom: "24px",
                        color: "var(--primary)",
                        letterSpacing: "-0.03em",
                    }}
                >
                    Just a developer sharing
                    <br />
                    <span
                        style={{
                            fontStyle: "italic",
                            background: "linear-gradient(135deg, var(--secondary) 0%, var(--primary) 100%)",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                            backgroundClip: "text",
                        }}
                    >
                        what I know & what I learn.
                    </span>
                </h1>

                {/* Subtitle */}
                <p
                    className="animate-fade-in-up animation-delay-200"
                    style={{
                        fontSize: "17px",
                        color: "var(--secondary)",
                        marginBottom: "8px",
                        fontWeight: 500,
                    }}
                >
                    {personalInfo.name} • {personalInfo.title}
                </p>
                <p
                    className="animate-fade-in-up animation-delay-300"
                    style={{
                        fontSize: "15px",
                        color: "var(--secondary)",
                        marginBottom: "48px",
                        maxWidth: "500px",
                        marginLeft: "auto",
                        marginRight: "auto",
                    }}
                >
                    {personalInfo.bio}
                </p>

                {/* CTA Buttons */}
                <div
                    className="animate-fade-in-up animation-delay-400"
                    style={{
                        display: "flex",
                        gap: "16px",
                        justifyContent: "center",
                        flexWrap: "wrap",
                        marginBottom: "64px",
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

                {/* Tech Stack */}
                <div className="animate-fade-in-up animation-delay-500">
                    <p
                        style={{
                            fontSize: "11px",
                            letterSpacing: "3px",
                            textTransform: "uppercase",
                            color: "var(--secondary)",
                            marginBottom: "20px",
                            fontWeight: 600,
                        }}
                    >
                        Tech Stack & Tools
                    </p>
                    <div
                        style={{
                            display: "flex",
                            gap: "12px",
                            justifyContent: "center",
                            flexWrap: "wrap",
                        }}
                    >
                        {techStack.map((tech, index) => {
                            const IconComponent = iconComponents[tech.icon || ""];
                            const color = iconColors[tech.icon || ""] || "#64748b";

                            return (
                                <div
                                    key={tech.name}
                                    className={`tech-icon animate-fade-in animation-delay-${Math.min((index + 1) * 100, 600)}`}
                                    title={tech.name}
                                    style={{ cursor: "pointer" }}
                                >
                                    {IconComponent ? (
                                        <IconComponent size={24} color={color} />
                                    ) : (
                                        <span style={{ fontSize: "12px", fontWeight: 600 }}>{tech.name.substring(0, 2)}</span>
                                    )}
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>

            {/* Scroll indicator */}
            <div
                className="animate-fade-in animation-delay-600"
                style={{
                    position: "absolute",
                    bottom: "40px",
                    left: "50%",
                    transform: "translateX(-50%)",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: "8px",
                    color: "var(--secondary)",
                }}
            >
                <span style={{ fontSize: "12px", fontWeight: 500 }}>Scroll</span>
                <div
                    style={{
                        width: "24px",
                        height: "40px",
                        borderRadius: "12px",
                        border: "2px solid var(--border)",
                        display: "flex",
                        justifyContent: "center",
                        paddingTop: "8px",
                    }}
                >
                    <div
                        style={{
                            width: "4px",
                            height: "8px",
                            borderRadius: "2px",
                            background: "var(--secondary)",
                            animation: "scrollBounce 1.5s infinite",
                        }}
                    />
                </div>
            </div>

            <style jsx>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
        @keyframes scrollBounce {
          0%, 100% { transform: translateY(0); opacity: 1; }
          50% { transform: translateY(6px); opacity: 0.5; }
        }
      `}</style>
        </section>
    );
}
