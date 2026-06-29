import type { Metadata } from "next";
import "./globals.css";
import CursorGlow from "@/components/ui/CursorGlow";

export const metadata: Metadata = {
  title: "Krishan Murari Pandey — Full Stack Developer & Problem Solver",
  description:
    "Krishan Murari Pandey is an MCA student and full-stack developer passionate about building scalable products. Explore projects, skills, and open-source contributions.",
  keywords: [
    "Krishan Murari Pandey",
    "Vaibhav Pandit",
    "Full Stack Developer",
    "Backend Developer",
    "MCA Student",
    "LPU",
    "React",
    "Next.js",
    "TypeScript",
    "Java",
    "PHP",
    "Portfolio",
  ],
  authors: [{ name: "Krishan Murari Pandey" }],
  creator: "Krishan Murari Pandey",
  metadataBase: new URL("https://vaibhavpandit.dev"),
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Krishan Murari Pandey — Full Stack Developer",
    description:
      "MCA student and full-stack developer building scalable products with precision and passion.",
    siteName: "Krishan Murari Pandey Portfolio",
    images: [
      {
        url: "/images/vaibhav.jpg",
        width: 1200,
        height: 630,
        alt: "Krishan Murari Pandey — Full Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Krishan Murari Pandey — Full Stack Developer",
    description:
      "MCA student and full-stack developer building scalable products with precision and passion.",
    images: ["/images/vaibhav.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

// JSON-LD Structured Data
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Krishan Murari Pandey",
  url: "https://vaibhavpandit.dev",
  jobTitle: "Full Stack Developer",
  description:
    "MCA Student and Full Stack Developer passionate about building scalable products.",
  sameAs: [
    "https://github.com/its-vaibhavpandit",
    "https://leetcode.com/u/VaibhavPandit08/",
    "https://www.linkedin.com/in/krishan-murari-pandey-06587536a/",
  ],
  knowsAbout: [
    "TypeScript",
    "JavaScript",
    "React",
    "Next.js",
    "Java",
    "Node.js",
    "PHP",
    "Full Stack Development",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Fontshare Premium Fonts */}
        <link
          href="https://api.fontshare.com/v2/css?f[]=clash-display@200,300,400,500,600,700&f[]=cabinet-grotesk@100,200,300,400,500,700,800&f[]=satoshi@300,400,500,700,900&f[]=general-sans@200,300,400,500,600,700&display=swap"
          rel="stylesheet"
        />
        {/* JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {/* Canonical */}
        <link rel="canonical" href="https://vaibhavpandit.dev" />
      </head>
      <body className="grain-overlay select-none antialiased">
        <a
          href="#about"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[9999] focus:bg-[var(--color-accent-cyan)] focus:text-[#09090B] focus:px-4 focus:py-2 focus:rounded"
        >
          Skip to main content
        </a>
        
        {/* Animated Radial Gradients background */}
        <div className="mesh-background" aria-hidden="true">
          <div className="mesh-glow-1" />
          <div className="mesh-glow-2" />
        </div>

        {/* Global spotlight cursor glow */}
        <CursorGlow />

        <div className="relative z-10">
          {children}
        </div>
      </body>
    </html>
  );
}
