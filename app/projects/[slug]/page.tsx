"use client";

import { getProjectBySlug } from "@/lib/data";
import { notFound } from "next/navigation";
import Link from "next/link";
import { useParams } from "next/navigation";

export default function ProjectPage() {
    const params = useParams();
    const slug = params.slug as string;
    const project = getProjectBySlug(slug);

    if (!project) {
        notFound();
    }

    return (
        <main style={{ minHeight: "100vh" }}>
            {/* Header */}
            <header
                style={{
                    padding: "20px 0",
                    borderBottom: "1px solid var(--border)",
                    background: "white",
                    position: "sticky",
                    top: 0,
                    zIndex: 100,
                    backdropFilter: "blur(20px)",
                }}
            >
                <div className="container">
                    <div
                        style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                        }}
                    >
                        <Link
                            href="/"
                            style={{
                                display: "inline-flex",
                                alignItems: "center",
                                gap: "8px",
                                color: "var(--secondary)",
                                textDecoration: "none",
                                fontSize: "14px",
                                fontWeight: 500,
                                transition: "color 0.2s",
                            }}
                        >
                            <svg
                                width="20"
                                height="20"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                            >
                                <path d="M19 12H5M12 19l-7-7 7-7" />
                            </svg>
                            Back to Home
                        </Link>
                        <Link
                            href="/"
                            style={{
                                fontSize: "20px",
                                fontWeight: 800,
                                color: "var(--primary)",
                                textDecoration: "none",
                            }}
                        >
                            AKRAM
                        </Link>
                    </div>
                </div>
            </header>

            {/* Hero Section */}
            <section
                style={{
                    padding: "80px 0 60px",
                    background: project.gradient,
                }}
            >
                <div className="container">
                    <div style={{ maxWidth: "800px" }}>
                        {/* Badges */}
                        <div
                            style={{
                                display: "flex",
                                gap: "12px",
                                marginBottom: "24px",
                                flexWrap: "wrap",
                            }}
                        >
                            <span
                                style={{
                                    padding: "6px 14px",
                                    background: "rgba(255,255,255,0.9)",
                                    borderRadius: "100px",
                                    fontSize: "13px",
                                    fontWeight: 600,
                                    color: "var(--primary)",
                                    textTransform: "capitalize",
                                }}
                            >
                                {project.category}
                            </span>
                            <span
                                style={{
                                    padding: "6px 14px",
                                    background: "rgba(255,255,255,0.9)",
                                    borderRadius: "100px",
                                    fontSize: "13px",
                                    fontWeight: 500,
                                    color: "var(--secondary)",
                                }}
                            >
                                {project.year}
                            </span>
                            <span
                                style={{
                                    padding: "6px 14px",
                                    background:
                                        project.status === "Completed"
                                            ? "rgba(34, 197, 94, 0.15)"
                                            : project.status === "In Progress"
                                                ? "rgba(59, 130, 246, 0.15)"
                                                : "rgba(168, 85, 247, 0.15)",
                                    borderRadius: "100px",
                                    fontSize: "13px",
                                    fontWeight: 500,
                                    color:
                                        project.status === "Completed"
                                            ? "#16a34a"
                                            : project.status === "In Progress"
                                                ? "#2563eb"
                                                : "#9333ea",
                                }}
                            >
                                {project.status}
                            </span>
                        </div>

                        {/* Title */}
                        <h1
                            style={{
                                fontSize: "clamp(32px, 5vw, 56px)",
                                fontWeight: 700,
                                color: "var(--primary)",
                                marginBottom: "20px",
                                letterSpacing: "-0.03em",
                                lineHeight: 1.1,
                            }}
                        >
                            {project.title}
                        </h1>

                        {/* Short Description */}
                        <p
                            style={{
                                fontSize: "18px",
                                color: "var(--secondary)",
                                lineHeight: 1.7,
                                marginBottom: "32px",
                            }}
                        >
                            {project.description}
                        </p>

                        {/* Action Buttons */}
                        <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
                            {project.github && (
                                <a
                                    href={project.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn btn-primary"
                                    style={{ padding: "14px 28px" }}
                                >
                                    <svg
                                        width="20"
                                        height="20"
                                        viewBox="0 0 24 24"
                                        fill="currentColor"
                                    >
                                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                    </svg>
                                    View on GitHub
                                </a>
                            )}
                            {project.live && (
                                <a
                                    href={project.live}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn btn-outline"
                                    style={{ padding: "14px 28px" }}
                                >
                                    <svg
                                        width="18"
                                        height="18"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                    >
                                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3" />
                                    </svg>
                                    Live Demo
                                </a>
                            )}
                        </div>
                    </div>
                </div>
            </section>

            {/* Main Content */}
            <section style={{ padding: "80px 0", background: "white" }}>
                <div className="container">
                    <div className="project-content">
                        {/* Left Column - Main Content */}
                        <div className="project-main">
                            {/* About */}
                            <div style={{ marginBottom: "48px" }}>
                                <h2
                                    style={{
                                        fontSize: "24px",
                                        fontWeight: 600,
                                        color: "var(--primary)",
                                        marginBottom: "20px",
                                    }}
                                >
                                    About the Project
                                </h2>
                                <p
                                    style={{
                                        fontSize: "16px",
                                        color: "var(--secondary)",
                                        lineHeight: 1.8,
                                    }}
                                >
                                    {project.longDescription}
                                </p>
                            </div>

                            {/* Features */}
                            <div style={{ marginBottom: "48px" }}>
                                <h2
                                    style={{
                                        fontSize: "24px",
                                        fontWeight: 600,
                                        color: "var(--primary)",
                                        marginBottom: "20px",
                                    }}
                                >
                                    Key Features
                                </h2>
                                <ul
                                    style={{
                                        listStyle: "none",
                                        padding: 0,
                                        display: "flex",
                                        flexDirection: "column",
                                        gap: "12px",
                                    }}
                                >
                                    {project.features.map((feature, index) => (
                                        <li
                                            key={index}
                                            style={{
                                                display: "flex",
                                                alignItems: "flex-start",
                                                gap: "12px",
                                                fontSize: "15px",
                                                color: "var(--secondary)",
                                                lineHeight: 1.6,
                                            }}
                                        >
                                            <svg
                                                width="20"
                                                height="20"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="#22c55e"
                                                strokeWidth="2"
                                                style={{ flexShrink: 0, marginTop: "2px" }}
                                            >
                                                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                                                <polyline points="22 4 12 14.01 9 11.01" />
                                            </svg>
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Challenges */}
                            {project.challenges && (
                                <div style={{ marginBottom: "48px" }}>
                                    <h2
                                        style={{
                                            fontSize: "24px",
                                            fontWeight: 600,
                                            color: "var(--primary)",
                                            marginBottom: "20px",
                                        }}
                                    >
                                        Challenges & Solutions
                                    </h2>
                                    <p
                                        style={{
                                            fontSize: "16px",
                                            color: "var(--secondary)",
                                            lineHeight: 1.8,
                                        }}
                                    >
                                        {project.challenges}
                                    </p>
                                </div>
                            )}

                            {/* Outcome */}
                            {project.outcome && (
                                <div>
                                    <h2
                                        style={{
                                            fontSize: "24px",
                                            fontWeight: 600,
                                            color: "var(--primary)",
                                            marginBottom: "20px",
                                        }}
                                    >
                                        Outcome
                                    </h2>
                                    <p
                                        style={{
                                            fontSize: "16px",
                                            color: "var(--secondary)",
                                            lineHeight: 1.8,
                                        }}
                                    >
                                        {project.outcome}
                                    </p>
                                </div>
                            )}
                        </div>

                        {/* Right Column - Sidebar */}
                        <aside className="project-sidebar">
                            {/* Tech Stack Card */}
                            <div
                                style={{
                                    background: "var(--muted)",
                                    borderRadius: "20px",
                                    padding: "28px",
                                    marginBottom: "24px",
                                }}
                            >
                                <h3
                                    style={{
                                        fontSize: "14px",
                                        fontWeight: 600,
                                        color: "var(--secondary)",
                                        marginBottom: "16px",
                                        textTransform: "uppercase",
                                        letterSpacing: "1px",
                                    }}
                                >
                                    Tech Stack
                                </h3>
                                <div
                                    style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}
                                >
                                    {project.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            style={{
                                                padding: "8px 14px",
                                                background: "white",
                                                borderRadius: "10px",
                                                fontSize: "13px",
                                                fontWeight: 500,
                                                color: "var(--primary)",
                                                border: "1px solid var(--border)",
                                            }}
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Project Info Card */}
                            <div
                                style={{
                                    background: "var(--muted)",
                                    borderRadius: "20px",
                                    padding: "28px",
                                }}
                            >
                                <h3
                                    style={{
                                        fontSize: "14px",
                                        fontWeight: 600,
                                        color: "var(--secondary)",
                                        marginBottom: "20px",
                                        textTransform: "uppercase",
                                        letterSpacing: "1px",
                                    }}
                                >
                                    Project Info
                                </h3>
                                <div
                                    style={{
                                        display: "flex",
                                        flexDirection: "column",
                                        gap: "16px",
                                    }}
                                >
                                    <div>
                                        <p
                                            style={{
                                                fontSize: "12px",
                                                color: "var(--secondary)",
                                                marginBottom: "4px",
                                            }}
                                        >
                                            Category
                                        </p>
                                        <p
                                            style={{
                                                fontSize: "15px",
                                                color: "var(--primary)",
                                                fontWeight: 500,
                                                textTransform: "capitalize",
                                            }}
                                        >
                                            {project.category}
                                        </p>
                                    </div>
                                    <div>
                                        <p
                                            style={{
                                                fontSize: "12px",
                                                color: "var(--secondary)",
                                                marginBottom: "4px",
                                            }}
                                        >
                                            Year
                                        </p>
                                        <p
                                            style={{
                                                fontSize: "15px",
                                                color: "var(--primary)",
                                                fontWeight: 500,
                                            }}
                                        >
                                            {project.year}
                                        </p>
                                    </div>
                                    <div>
                                        <p
                                            style={{
                                                fontSize: "12px",
                                                color: "var(--secondary)",
                                                marginBottom: "4px",
                                            }}
                                        >
                                            Status
                                        </p>
                                        <p
                                            style={{
                                                fontSize: "15px",
                                                color: "var(--primary)",
                                                fontWeight: 500,
                                            }}
                                        >
                                            {project.status}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </aside>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section
                style={{
                    padding: "60px 0",
                    background: "var(--muted)",
                    textAlign: "center",
                }}
            >
                <div className="container">
                    <h2
                        style={{
                            fontSize: "28px",
                            fontWeight: 600,
                            color: "var(--primary)",
                            marginBottom: "16px",
                        }}
                    >
                        Interested in working together?
                    </h2>
                    <p
                        style={{
                            fontSize: "16px",
                            color: "var(--secondary)",
                            marginBottom: "28px",
                        }}
                    >
                        Let&apos;s discuss how I can help with your next project.
                    </p>
                    <Link href="/#contact" className="btn btn-primary">
                        Get in Touch
                    </Link>
                </div>
            </section>

            <style jsx>{`
                .project-content {
                    display: grid;
                    grid-template-columns: 1fr 320px;
                    gap: 60px;
                    align-items: start;
                }
                @media (max-width: 900px) {
                    .project-content {
                        grid-template-columns: 1fr;
                    }
                    .project-sidebar {
                        order: -1;
                    }
                }
            `}</style>
        </main>
    );
}
