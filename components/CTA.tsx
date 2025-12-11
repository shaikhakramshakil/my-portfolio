"use client";

export default function CTA() {
    return (
        <section
            id="contact"
            className="section"
            style={{
                background: "white",
                textAlign: "center",
                position: "relative",
                overflow: "hidden",
            }}
        >
            {/* Background decoration */}
            <div
                style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    width: "600px",
                    height: "600px",
                    background: "radial-gradient(circle, rgba(59, 130, 246, 0.05) 0%, transparent 70%)",
                    pointerEvents: "none",
                }}
            />

            <div className="container" style={{ position: "relative", zIndex: 1 }}>
                {/* Emoji decoration */}
                <div
                    className="animate-fade-in-up"
                    style={{
                        fontSize: "48px",
                        marginBottom: "24px",
                    }}
                >
                    🚀
                </div>

                <h2
                    className="animate-fade-in-up animation-delay-100 text-balance"
                    style={{
                        fontSize: "clamp(28px, 4vw, 44px)",
                        fontWeight: 700,
                        color: "var(--primary)",
                        marginBottom: "16px",
                        letterSpacing: "-0.03em",
                    }}
                >
                    Let&apos;s build something amazing together.
                </h2>

                <p
                    className="animate-fade-in-up animation-delay-200"
                    style={{
                        fontSize: "16px",
                        color: "var(--secondary)",
                        marginBottom: "40px",
                        maxWidth: "480px",
                        marginLeft: "auto",
                        marginRight: "auto",
                    }}
                >
                    Have a project in mind? I&apos;m always open to discussing new opportunities and creative ideas.
                </p>

                <div
                    className="animate-fade-in-up animation-delay-300"
                    style={{
                        display: "flex",
                        gap: "16px",
                        justifyContent: "center",
                        flexWrap: "wrap",
                    }}
                >
                    <a
                        href="mailto:akramshakil@email.com"
                        className="btn btn-primary"
                        style={{
                            padding: "16px 32px",
                            fontSize: "15px",
                        }}
                    >
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                            <polyline points="22,6 12,13 2,6" />
                        </svg>
                        Get in Touch
                    </a>
                    <a
                        href="https://linkedin.com/in/akramshakil"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-outline"
                        style={{
                            padding: "16px 32px",
                            fontSize: "15px",
                        }}
                    >
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                        </svg>
                        LinkedIn
                    </a>
                </div>
            </div>
        </section>
    );
}
