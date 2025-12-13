"use client";

import { useState } from "react";
import { articles, mediumProfile } from "@/lib/data";

export default function Blog() {
    const [hoveredId, setHoveredId] = useState<string | null>(null);

    return (
        <section
            id="blog"
            className="section"
            style={{ paddingTop: "80px", paddingBottom: "80px", background: "white" }}
        >
            <div className="container">
                {/* Section Header */}
                <div className="section-header">
                    <h2 className="section-title">Blog & Articles</h2>
                    <a
                        href={mediumProfile}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="section-link"
                    >
                        View all on Medium
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M7 17L17 7M17 7H7M17 7V17" />
                        </svg>
                    </a>
                </div>

                {/* Articles Grid */}
                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
                        gap: "20px",
                    }}
                >
                    {articles.map((article, index) => (
                        <a
                            key={article.id}
                            href={article.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ textDecoration: "none", color: "inherit" }}
                            onMouseEnter={() => setHoveredId(article.id)}
                            onMouseLeave={() => setHoveredId(null)}
                        >
                            <article
                                className={`article-card animate-fade-in-up animation-delay-${Math.min((index + 1) * 100, 500)}`}
                                style={{
                                    display: "flex",
                                    flexDirection: "column",
                                    height: "100%",
                                    cursor: "pointer",
                                    borderRadius: "16px",
                                    overflow: "hidden",
                                    background: "white",
                                    border: "2px solid var(--border)",
                                    transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                                    transform: hoveredId === article.id ? "translateY(-4px)" : "translateY(0)",
                                    boxShadow: hoveredId === article.id 
                                        ? "0 15px 40px rgba(59,130,246,0.12)" 
                                        : "0 4px 20px rgba(0,0,0,0.04)",
                                }}
                            >
                                {/* Content */}
                                <div
                                    style={{
                                        padding: "28px",
                                        display: "flex",
                                        flexDirection: "column",
                                        gap: "16px",
                                        flex: 1,
                                    }}
                                >
                                    {/* Read Time Badge */}
                                    <div
                                        style={{
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "flex-end",
                                        }}
                                    >
                                        <span
                                            style={{
                                                fontSize: "12px",
                                                fontWeight: 500,
                                                color: "var(--secondary)",
                                                display: "flex",
                                                alignItems: "center",
                                                gap: "6px",
                                                padding: "6px 12px",
                                                background: "var(--muted)",
                                                borderRadius: "20px",
                                                border: "1px solid var(--border)",
                                            }}
                                        >
                                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                <circle cx="12" cy="12" r="10" />
                                                <polyline points="12 6 12 12 16 14" />
                                            </svg>
                                            {article.readTime}
                                        </span>
                                    </div>

                                    {/* Title */}
                                    <h3
                                        style={{
                                            fontSize: "18px",
                                            fontWeight: 700,
                                            color: "var(--primary)",
                                            lineHeight: 1.4,
                                            letterSpacing: "-0.03em",
                                            transition: "color 0.2s ease",
                                            minHeight: "50px",
                                            display: "-webkit-box",
                                            WebkitLineClamp: 2,
                                            WebkitBoxOrient: "vertical",
                                            overflow: "hidden",
                                        }}
                                    >
                                        {article.title}
                                    </h3>

                                    {/* Excerpt */}
                                    <p
                                        style={{
                                            fontSize: "14px",
                                            color: "var(--secondary)",
                                            lineHeight: 1.7,
                                            display: "-webkit-box",
                                            WebkitLineClamp: 2,
                                            WebkitBoxOrient: "vertical",
                                            overflow: "hidden",
                                            flex: 1,
                                            minHeight: "42px",
                                        }}
                                    >
                                        {article.excerpt}
                                    </p>

                                    {/* Tags */}
                                    <div
                                        style={{
                                            display: "flex",
                                            flexWrap: "wrap",
                                            gap: "8px",
                                        }}
                                    >
                                        {article.tags.slice(0, 3).map((tag) => (
                                            <span
                                                key={tag}
                                                style={{
                                                    fontSize: "11px",
                                                    fontWeight: 600,
                                                    padding: "6px 12px",
                                                    background: "#f1f5f9",
                                                    borderRadius: "6px",
                                                    color: "#475569",
                                                    transition: "all 0.2s ease",
                                                }}
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>

                                    {/* Footer */}
                                    <div
                                        style={{
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "space-between",
                                            paddingTop: "16px",
                                            borderTop: "1px solid var(--border)",
                                            marginTop: "auto",
                                        }}
                                    >
                                        <span
                                            style={{
                                                fontSize: "13px",
                                                color: "var(--secondary)",
                                                display: "flex",
                                                alignItems: "center",
                                                gap: "6px",
                                                fontWeight: 500,
                                            }}
                                        >
                                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                                                <line x1="16" y1="2" x2="16" y2="6" />
                                                <line x1="8" y1="2" x2="8" y2="6" />
                                                <line x1="3" y1="10" x2="21" y2="10" />
                                            </svg>
                                            {article.date}
                                        </span>

                                        {/* Read More Arrow */}
                                        <span
                                            style={{
                                                display: "flex",
                                                alignItems: "center",
                                                gap: "6px",
                                                fontSize: "13px",
                                                fontWeight: 600,
                                                color: hoveredId === article.id ? "#3b82f6" : "var(--secondary)",
                                                transition: "all 0.2s ease",
                                            }}
                                        >
                                            Read
                                            <svg 
                                                width="16" 
                                                height="16" 
                                                viewBox="0 0 24 24" 
                                                fill="none" 
                                                stroke="currentColor" 
                                                strokeWidth="2.5"
                                                style={{
                                                    transform: hoveredId === article.id ? "translateX(4px)" : "translateX(0)",
                                                    transition: "transform 0.2s ease",
                                                }}
                                            >
                                                <path d="M5 12h14M12 5l7 7-7 7" />
                                            </svg>
                                        </span>
                                    </div>
                                </div>
                            </article>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
}
