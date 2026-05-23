import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Cogninoid Labs — AI, Robotics & Embodied Intelligence",
  description:
    "Cogninoid Labs is a research-tech studio working at the intersection of artificial intelligence, robotics, human–machine interaction, 3D printing, and autonomous experimentation.",
  keywords: [
    "AI robotics",
    "embodied intelligence",
    "human-machine interaction",
    "3D printing",
    "autonomous experimentation",
    "Cogninoid Labs",
  ],
  authors: [{ name: "Cogninoid Labs" }],
  openGraph: {
    title: "Cogninoid Labs — AI, Robotics & Embodied Intelligence",
    description:
      "Building embodied intelligence for human–machine systems. Research studio at the intersection of AI, robotics, and autonomous experimentation.",
    type: "website",
  },
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
        <Navbar />
        <div className="relative z-10 flex-1">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
