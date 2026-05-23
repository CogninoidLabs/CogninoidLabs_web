import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const BASE_URL = "https://cogninoidlabs.com";

export const viewport: Viewport = {
  themeColor: "#04040f",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),

  title: {
    default:
      "Cogninoid Labs | AI Robotics, Embodied Intelligence & Human–Machine Systems",
    template: "%s | Cogninoid Labs",
  },

  description:
    "Cogninoid Labs is a research-tech studio building embodied intelligence at the intersection of artificial intelligence, robotics, human–machine interaction, 3D printing, and autonomous experimentation. We develop AI coding agents, robotic arm systems, scientific software, and next-generation HMI devices.",

  keywords: [
    "Cogninoid Labs",
    "AI robotics",
    "embodied AI",
    "embodied intelligence",
    "human-machine interaction",
    "HMI research",
    "3D printing AI",
    "autonomous experimentation",
    "scientific software",
    "robotics lab",
    "AI research lab",
    "robotic arm",
    "neural network animation",
    "machine learning",
    "deep learning",
    "reinforcement learning",
    "AI coding agents",
    "scientific AI",
    "autonomous robots",
    "robotics startup",
    "AI startup",
    "computer vision",
    "sensor fusion",
    "control systems",
    "SLAM robotics",
    "motion planning",
    "AI hardware",
    "edge AI",
    "embedded AI",
    "MXene materials",
    "inverse design AI",
    "generative design",
    "digital fabrication",
    "open source robotics",
    "research studio",
    "embodied cognition",
    "intelligent systems",
    "robot programming",
    "AI lab",
    "robotics India",
    "AI engineering",
    "autonomous vehicles",
    "ground robot",
    "neural interface",
    "haptic feedback",
    "exoskeleton research",
    "3D printed robot",
    "robotic prototype",
    "AI agent framework",
    "closed-loop intelligence",
    "cognitive robotics",
  ],

  authors: [{ name: "Cogninoid Labs", url: BASE_URL }],
  creator: "Cogninoid Labs",
  publisher: "Cogninoid Labs",

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

  alternates: {
    canonical: BASE_URL,
    languages: {
      "en-US": BASE_URL,
    },
  },

  openGraph: {
    title: "Cogninoid Labs | AI Robotics & Embodied Intelligence",
    description:
      "Building embodied intelligence for human–machine systems. Research studio at the intersection of AI, robotics, 3D printing, and autonomous experimentation.",
    url: BASE_URL,
    siteName: "Cogninoid Labs",
    type: "website",
    locale: "en_US",
  },

  twitter: {
    card: "summary_large_image",
    title: "Cogninoid Labs | AI Robotics & Embodied Intelligence",
    description:
      "Building embodied intelligence for human–machine systems — AI, robotics, 3D printing, and autonomous experimentation.",
    site: "@CogninoidLabs",
    creator: "@CogninoidLabs",
  },

  category: "Technology",
  classification: "AI Research & Robotics",
  referrer: "origin-when-cross-origin",

  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "48x48" },
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    apple: "/apple-touch-icon.png",
  },

  manifest: "/manifest.json",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="relative min-h-full flex flex-col bg-[#04040f]">
        <JsonLd />
        <Navbar />
        <div className="relative z-10 flex-1">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
