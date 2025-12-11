"use client";

import { experiences } from "@/lib/data";

export default function Experience() {
    return (
        <section id="experience" className="section" style={{ background: "white" }}>
            <div className="container">
                {/* Section Header */}
                <div className="section-header">
                    <h2 className="section-title">Experience</h2>
                    <a
                        href="#"
                        className="section-link"
                        onClick={(e) => {
                            e.preventDefault();
                        }}
                    >
                        View Resume
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M7 17L17 7M17 7H7M17 7V17" />
                        </svg>
                    </a>
                </div>

                {/* Experience Cards Grid */}
                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
                        gap: "24px",
                    }}
                >
                    {experiences.map((exp, index) => (
                        <div
                            key={exp.id}
                            className={`card experience-card animate-fade-in-up animation-delay-${Math.min((index + 1) * 100, 300)}`}
                            style={{
                                display: "flex",
                                flexDirection: "column",
                                gap: "20px",
                            }}
                        >
                            {/* Card Header */}
                            <div
                                style={{
                                    display: "flex",
                                    alignItems: "flex-start",
                                    justifyContent: "space-between",
                                    gap: "16px",
                                }}
                            >
                                {/* Company Initial */}
                                <div className="company-initial">
                                    {exp.initial}
                                </div>

                                {/* Duration Badge */}
                                <span
                                    style={{
                                        fontSize: "12px",
                                        color: "var(--accent)",
                                        fontWeight: 600,
                                        padding: "6px 12px",
                                        background: "rgba(59, 130, 246, 0.08)",
                                        borderRadius: "8px",
                                        whiteSpace: "nowrap",
                                    }}
                                >
                                    {exp.duration}
                                </span>
                            </div>

                            {/* Role & Company */}
                            <div>
                                <h3
                                    style={{
                                        fontSize: "18px",
                                        fontWeight: 600,
                                        color: "var(--primary)",
                                        marginBottom: "6px",
                                        letterSpacing: "-0.02em",
                                    }}
                                >
                                    {exp.role}
                                </h3>
                                <p
                                    style={{
                                        fontSize: "14px",
                                        color: "var(--accent)",
                                        fontWeight: 500,
                                    }}
                                >
                                    {exp.company}
                                </p>
                            </div>

                            {/* Description */}
                            <p
                                style={{
                                    fontSize: "14px",
                                    color: "var(--secondary)",
                                    lineHeight: 1.7,
                                }}
                            >
                                {exp.description}
                            </p>

                            {/* Location tag */}
                            <div
                                style={{
                                    marginTop: "auto",
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "6px",
                                    color: "var(--secondary)",
                                    fontSize: "13px",
                                }}
                            >
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                                    <circle cx="12" cy="10" r="3" />
                                </svg>
                                {exp.location}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
