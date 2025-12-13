"use client";

import { useState } from "react";
import Link from "next/link";
import { projects } from "@/lib/data";

type FilterType = "all" | "web" | "mobile" | "tool";

export default function Projects() {
    const [filter, setFilter] = useState<FilterType>("all");
    const [hoveredId, setHoveredId] = useState<string | null>(null);

    const filteredProjects =
        filter === "all"
            ? projects
            : projects.filter((p) => p.category === filter);

    const filters: { label: string; value: FilterType }[] = [
        { label: "All", value: "all" },
        { label: "Mobile", value: "mobile" },
        { label: "Web", value: "web" },
    ];

    return (
        <section
            id="work"
            className="section"
            style={{ paddingTop: "100px", paddingBottom: "100px", background: "var(--muted)" }}
        >
            <div className="container">
                {/* Section Header */}
                <div className="section-header">
                    <h2 className="section-title">Experience & Projects</h2>
                    <div style={{ display: "flex", gap: "8px" }}>
                        {filters.map((f) => (
                            <button
                                key={f.value}
                                className={`filter-btn ${filter === f.value ? "active" : ""}`}
                                onClick={() => setFilter(f.value)}
                            >
                                {f.label}
                            </button>
                        ))}
                    </div>
                </div>

                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
                        gap: "20px",
                    }}
                >
                    {filteredProjects.map((project, index) => (
                        <Link
                            key={project.id}
                            href={`/projects/${project.slug}`}
                            style={{ textDecoration: "none", color: "inherit" }}
                        >
                            <article
                                className={`project-card animate-fade-in-up animation-delay-${Math.min((index + 1) * 100, 500)}`}
                                onMouseEnter={() => setHoveredId(project.id)}
                                onMouseLeave={() => setHoveredId(null)}
                                style={{
                                    cursor: "pointer",
                                }}
                            >
                                {/* Preview Area */}
                                <div
                                    className="preview"
                                    style={{
                                        position: "relative",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        overflow: "hidden",
                                        background: project.image ? "#fafafa" : project.gradient,
                                    }}
                                >
                                    {/* Project Image or Initial */}
                                    {project.image ? (
                                        <>
                                            <img
                                                src={project.image}
                                                alt={project.title}
                                                style={{
                                                    width: "100%",
                                                    height: "100%",
                                                    objectFit: "contain",
                                                    objectPosition: "center",
                                                    padding: "16px",
                                                    transform: hoveredId === project.id ? "scale(1.03)" : "scale(1)",
                                                    transition: "transform 0.4s ease",
                                                }}
                                            />
                                            {/* Subtle gradient overlay */}
                                            <div
                                                style={{
                                                    position: "absolute",
                                                    inset: 0,
                                                    background: "linear-gradient(180deg, transparent 50%, rgba(0,0,0,0.03) 100%)",
                                                    pointerEvents: "none",
                                                }}
                                            />
                                        </>
                                    ) : (
                                        <div
                                            style={{
                                                width: "56px",
                                                height: "56px",
                                                borderRadius: "16px",
                                                background: "rgba(255,255,255,0.9)",
                                                backdropFilter: "blur(10px)",
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "center",
                                                fontSize: "24px",
                                                fontWeight: 700,
                                                color: "var(--primary)",
                                                boxShadow: "0 6px 24px rgba(0,0,0,0.1)",
                                                transform: hoveredId === project.id ? "scale(1.1) rotate(-3deg)" : "scale(1)",
                                                transition: "transform var(--transition-base)",
                                            }}
                                        >
                                            {project.title.charAt(0)}
                                        </div>
                                    )}

                                    {/* GitHub Link */}
                                    {project.github && (
                                        <a
                                            href={project.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            onClick={(e) => e.stopPropagation()}
                                            style={{
                                                position: "absolute",
                                                top: "12px",
                                                right: "12px",
                                                width: "32px",
                                                height: "32px",
                                                borderRadius: "10px",
                                                background: "rgba(255,255,255,0.95)",
                                                backdropFilter: "blur(10px)",
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "center",
                                                transition: "all var(--transition-fast)",
                                                boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                                                opacity: hoveredId === project.id ? 1 : 0.8,
                                                transform: hoveredId === project.id ? "translateY(0)" : "translateY(-4px)",
                                            }}
                                            title="View on GitHub"
                                        >
                                            <svg
                                                width="20"
                                                height="20"
                                                viewBox="0 0 24 24"
                                                fill="var(--primary)"
                                            >
                                                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                            </svg>
                                        </a>
                                    )}

                                    {/* Category badge */}
                                    <div
                                        style={{
                                            position: "absolute",
                                            bottom: "12px",
                                            left: "12px",
                                            padding: "4px 10px",
                                            borderRadius: "6px",
                                            background: "rgba(255,255,255,0.95)",
                                            backdropFilter: "blur(10px)",
                                            fontSize: "10px",
                                            fontWeight: 600,
                                            textTransform: "uppercase",
                                            letterSpacing: "1px",
                                            color: "var(--primary)",
                                        }}
                                    >
                                        {project.category}
                                    </div>
                                </div>

                                {/* Content */}
                                <div style={{ padding: "20px" }}>
                                    <div style={{ marginBottom: "12px" }}>
                                        <h3
                                            style={{
                                                fontSize: "17px",
                                                fontWeight: 700,
                                                color: "var(--primary)",
                                                marginBottom: "6px",
                                                letterSpacing: "-0.02em",
                                                lineHeight: 1.3,
                                            }}
                                        >
                                            {project.title}
                                        </h3>
                                        {/* Status badge */}
                                        <span
                                            style={{
                                                display: "inline-block",
                                                fontSize: "10px",
                                                fontWeight: 600,
                                                textTransform: "uppercase",
                                                letterSpacing: "0.5px",
                                                padding: "3px 8px",
                                                borderRadius: "4px",
                                                background: project.status === "Completed" ? "rgba(34,197,94,0.1)" : "rgba(59,130,246,0.1)",
                                                color: project.status === "Completed" ? "#22c55e" : "#3b82f6",
                                                border: `1px solid ${project.status === "Completed" ? "rgba(34,197,94,0.2)" : "rgba(59,130,246,0.2)"}`,
                                            }}
                                        >
                                            {project.status}
                                        </span>
                                    </div>
                                    <p
                                        style={{
                                            fontSize: "13px",
                                            color: "var(--secondary)",
                                            lineHeight: 1.6,
                                            marginBottom: "16px",
                                            display: "-webkit-box",
                                            WebkitLineClamp: 2,
                                            WebkitBoxOrient: "vertical",
                                            overflow: "hidden",
                                            minHeight: "40px",
                                        }}
                                    >
                                        {project.description}
                                    </p>

                                    {/* Tags */}
                                    <div
                                        style={{
                                            display: "flex",
                                            flexWrap: "wrap",
                                            gap: "6px",
                                            paddingTop: "12px",
                                            borderTop: "1px solid var(--border)",
                                        }}
                                    >
                                        {project.tags.slice(0, 3).map((tag) => (
                                            <span 
                                                key={tag} 
                                                style={{
                                                    padding: "5px 10px",
                                                    fontSize: "11px",
                                                    fontWeight: 600,
                                                    background: "var(--muted)",
                                                    border: "1px solid var(--border)",
                                                    borderRadius: "6px",
                                                    color: "var(--secondary)",
                                                }}
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                        {project.tags.length > 3 && (
                                            <span
                                                style={{
                                                    padding: "5px 10px",
                                                    fontSize: "11px",
                                                    fontWeight: 600,
                                                    background: "transparent",
                                                    border: "1px dashed var(--border)",
                                                    borderRadius: "6px",
                                                    color: "var(--secondary)",
                                                }}
                                            >
                                                +{project.tags.length - 3}
                                            </span>
                                        )}
                                    </div>
                                </div>
                            </article>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
