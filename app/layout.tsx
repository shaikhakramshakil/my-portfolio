import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://akramshaikh.me'),
  title: {
    default: "Akram Shaikh | App Developer | Blockchain | AI | Open Source",
    template: "%s | Akram Shaikh"
  },
  description:
    "Building intelligent & decentralized applications. Full-stack developer specializing in App Development, Blockchain, AI, and Open Source. Creator of CodeYapp - privacy-first chat platform.",
  keywords: [
    "Akram Shaikh",
    "Full Stack Developer",
    "App Developer",
    "Blockchain Developer",
    "AI Developer",
    "Next.js Developer",
    "Flutter Developer",
    "Python Developer",
    "Cloud Computing",
    "Open Source",
    "CodeYapp",
    "Web3",
    "Smart Contracts",
    "Machine Learning",
    "PWA Development",
    "Firebase",
    "React Developer",
    "Aurangabad Developer",
    "India Developer",
  ],
  authors: [{ name: "Akram Shaikh", url: "https://akramshaikh.me" }],
  creator: "Akram Shaikh",
  publisher: "Akram Shaikh",
  verification: {
    google: "1KdiCaMXhqMLx8sptg_ZEWEuV3LqMZ8DI8ZYEHBS4L0",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://akramshaikh.me",
    siteName: "Akram Shaikh Portfolio",
    title: "Akram Shaikh | App Developer | Blockchain | AI | Open Source",
    description:
      "Building intelligent & decentralized applications. Specializing in App Development, Blockchain, AI, and Open Source technologies.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Akram Shaikh - Full Stack Developer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Akram Shaikh | App Developer | Blockchain | AI",
    description: "Building intelligent & decentralized applications. Creator of CodeYapp.",
    creator: "@akram_speakss",
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: "https://akramshaikh.me",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Akram Shaikh",
    "url": "https://akramshaikh.me",
    "jobTitle": "Full Stack Developer",
    "description": "Building intelligent & decentralized applications. Specializing in App Development, Blockchain, AI, and Open Source.",
    "alumniOf": "MGM's Jawaharlal Nehru Engineering College",
    "knowsAbout": [
      "App Development",
      "Blockchain",
      "Artificial Intelligence",
      "Cloud Computing",
      "Open Source",
      "Next.js",
      "Flutter",
      "Python"
    ],
    "sameAs": [
      "https://github.com/shaikhakramshakil",
      "https://linkedin.com/in/akramshakil",
      "https://x.com/akram_speakss"
    ]
  };

  return (
    <html lang="en" style={{ scrollBehavior: "smooth" }}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
