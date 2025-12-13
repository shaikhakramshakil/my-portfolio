"use client";

import { personalInfo } from "@/lib/data";
import { FaLinkedinIn, FaGithub, FaTwitter, FaMedium } from "react-icons/fa";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    const socialLinks = [
        { name: "LinkedIn", href: personalInfo.linkedin, icon: FaLinkedinIn },
        { name: "GitHub", href: personalInfo.github, icon: FaGithub },
        { name: "Twitter", href: personalInfo.twitter, icon: FaTwitter },
        { name: "Medium", href: "https://medium.com/@akramshakil", icon: FaMedium },
    ];

    return (
        <footer
            style={{
                borderTop: "1px solid var(--border)",
                padding: "48px 0",
                background: "var(--background)",
            }}
        >
            <div className="container">
                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        gap: "24px",
                    }}
                >
                    {/* Logo */}
                    <a
                        href="#"
                        style={{
                            fontSize: "20px",
                            fontWeight: 800,
                            color: "var(--primary)",
                            textDecoration: "none",
                            letterSpacing: "-0.5px",
                        }}
                    >
                        AKRAM SHAIKH                    </a>

                    {/* Social Icons */}
                    <div
                        style={{
                            display: "flex",
                            gap: "12px",
                        }}
                    >
                        {socialLinks.map((link) => {
                            const IconComponent = link.icon;
                            return (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    title={link.name}
                                    style={{
                                        width: "44px",
                                        height: "44px",
                                        borderRadius: "12px",
                                        border: "1px solid var(--border)",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        color: "var(--secondary)",
                                        transition: "all 0.2s",
                                        background: "white",
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.borderColor = "var(--primary)";
                                        e.currentTarget.style.color = "var(--primary)";
                                        e.currentTarget.style.transform = "translateY(-2px)";
                                        e.currentTarget.style.boxShadow = "0 4px 12px rgba(0,0,0,0.08)";
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.borderColor = "var(--border)";
                                        e.currentTarget.style.color = "var(--secondary)";
                                        e.currentTarget.style.transform = "translateY(0)";
                                        e.currentTarget.style.boxShadow = "none";
                                    }}
                                >
                                    <IconComponent size={18} />
                                </a>
                            );
                        })}
                    </div>

                    {/* Copyright */}
                    <p
                        style={{
                            fontSize: "13px",
                            color: "var(--secondary)",
                        }}
                    >
                        © {currentYear}{" "}
                        <a
                            href={personalInfo.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                                color: "var(--primary)",
                                textDecoration: "none",
                                fontWeight: 500,
                            }}
                        >
                            {personalInfo.name}
                        </a>
                        . All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}
