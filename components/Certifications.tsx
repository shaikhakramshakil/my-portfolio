"use client";

import Image from "next/image";
import { certifications, cloudSkillsProfile } from "@/lib/data";

// Bolder color gradients for badge backgrounds
const getGradient = (index: number) => {
    const gradients = [
        "linear-gradient(135deg, #dbeafe 0%, #93c5fd 100%)", // Bold Blue
        "linear-gradient(135deg, #dcfce7 0%, #86efac 100%)", // Bold Green  
        "linear-gradient(135deg, #fef3c7 0%, #fcd34d 100%)", // Bold Yellow
        "linear-gradient(135deg, #f3e8ff 0%, #d8b4fe 100%)", // Bold Purple
        "linear-gradient(135deg, #fce7f3 0%, #f9a8d4 100%)", // Bold Pink
        "linear-gradient(135deg, #cffafe 0%, #67e8f9 100%)", // Bold Cyan
    ];
    return gradients[index % gradients.length];
};

export default function Certifications() {
    // Duplicate for infinite scroll effect
    const duplicatedCerts = [...certifications, ...certifications];

    return (
        <section id="certifications" style={{ padding: "100px 0", background: "#f8fafc", overflow: "hidden" }}>
            <div className="container" style={{ marginBottom: "48px" }}>
                {/* Header */}
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "16px" }}>
                    <h2 style={{
                        fontSize: "clamp(32px, 5vw, 48px)",
                        fontWeight: 800,
                        color: "var(--primary)",
                        letterSpacing: "-0.03em"
                    }}>
                        Certifications
                    </h2>
                    <a
                        href={cloudSkillsProfile}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-primary"
                        style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "14px 28px", fontSize: "15px" }}
                    >
                        Verify Credentials
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M7 17L17 7M17 7H7M17 7V17" />
                        </svg>
                    </a>
                </div>
            </div>

            {/* Scrolling Badge Carousel */}
            <div
                style={{
                    width: "100%",
                    maskImage: "linear-gradient(to right, transparent, black 5%, black 95%, transparent)",
                    WebkitMaskImage: "linear-gradient(to right, transparent, black 5%, black 95%, transparent)",
                }}
            >
                <div
                    className="badge-track"
                    style={{
                        display: "flex",
                        gap: "24px",
                        width: "fit-content",
                        padding: "24px 0",
                    }}
                >
                    {duplicatedCerts.map((cert, index) => (
                        <div
                            key={`${cert.id}-${index}`}
                            style={{
                                flexShrink: 0,
                                width: "190px",
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                                padding: "28px 18px 22px",
                                background: getGradient(index),
                                borderRadius: "24px",
                                boxShadow: "0 8px 24px rgba(0,0,0,0.1)",
                                transition: "all 0.3s ease",
                                cursor: "default",
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.transform = "scale(1.08)";
                                e.currentTarget.style.boxShadow = "0 20px 50px rgba(0,0,0,0.18)";
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.transform = "scale(1)";
                                e.currentTarget.style.boxShadow = "0 8px 24px rgba(0,0,0,0.1)";
                            }}
                            title={cert.name}
                        >
                            {cert.image && (
                                <div style={{
                                    width: "130px",
                                    height: "130px",
                                    position: "relative",
                                    marginBottom: "14px",
                                    filter: "drop-shadow(0 6px 12px rgba(0,0,0,0.15))",
                                }}>
                                    <Image
                                        src={cert.image}
                                        alt={cert.name}
                                        fill
                                        style={{ objectFit: "contain" }}
                                    />
                                </div>
                            )}
                            <p style={{
                                fontSize: "13px",
                                fontWeight: 700,
                                color: "var(--primary)",
                                textAlign: "center",
                                lineHeight: 1.35,
                                display: "-webkit-box",
                                WebkitLineClamp: 2,
                                WebkitBoxOrient: "vertical",
                                overflow: "hidden",
                            }}>
                                {cert.name}
                            </p>
                        </div>
                    ))}
                </div>
            </div>

            <style jsx global>{`
                .badge-track {
                    animation: scrollBadges 50s linear infinite;
                }
                .badge-track:hover {
                    animation-play-state: paused;
                }
                @keyframes scrollBadges {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                }
            `}</style>
        </section>
    );
}
