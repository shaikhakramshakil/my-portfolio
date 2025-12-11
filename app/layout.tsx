import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Akram Shaikh | Developer Portfolio",
  description:
    "Just a developer sharing what I know and what I learn. BTech IT Student at MGM's JNEC, passionate about Cloud Computing, AI, and Open Source.",
  keywords: [
    "Akram Shaikh",
    "Developer",
    "Portfolio",
    "Cloud Computing",
    "AI",
    "Open Source",
    "Python",
    "Next.js",
    "Flutter",
  ],
  authors: [{ name: "Akram Shaikh" }],
  openGraph: {
    title: "Akram Shaikh | Developer Portfolio",
    description:
      "Just a developer sharing what I know and what I learn. Passionate about Cloud Computing, AI, and Open Source.",
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Akram Shaikh | Developer Portfolio",
    description:
      "Just a developer sharing what I know and what I learn. Passionate about Cloud Computing, AI, and Open Source.",
  },
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" style={{ scrollBehavior: "smooth" }}>
      <body className={`${inter.variable} antialiased`}>{children}</body>
    </html>
  );
}
