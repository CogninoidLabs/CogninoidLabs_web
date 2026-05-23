import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Research",
  description:
    "Cogninoid Labs research areas: embodied AI and learning systems, human-machine interaction design, autonomous robotics, AI for scientific computing, 3D printing intelligence, sensor fusion, and closed-loop control systems.",
  keywords: [
    "Cogninoid Labs research",
    "embodied AI research",
    "human-machine interaction research",
    "autonomous robotics research",
    "AI scientific computing",
    "3D printing intelligence",
    "sensor fusion research",
    "closed-loop control",
    "reinforcement learning robotics",
    "neural interface research",
    "cognitive robotics",
    "AI research lab",
  ],
  alternates: {
    canonical: "https://cogninoidlabs.com/research",
  },
  openGraph: {
    title: "Research | Cogninoid Labs",
    description:
      "Embodied AI, human-machine interaction, autonomous robotics, AI for scientific computing — research at Cogninoid Labs.",
    url: "https://cogninoidlabs.com/research",
  },
  twitter: {
    title: "Research | Cogninoid Labs",
    description:
      "Embodied AI, human-machine interaction, autonomous robotics, AI for scientific computing — research at Cogninoid Labs.",
  },
};

export default function ResearchLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
