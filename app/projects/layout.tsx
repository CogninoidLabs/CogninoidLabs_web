import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Explore Cogninoid Labs' AI and robotics projects: scientific AI coding agents, autonomous robotic arms, computer vision pipelines, HMI touchpad devices, MXene inverse design models, and open-source scientific tools.",
  keywords: [
    "Cogninoid Labs projects",
    "AI robotics projects",
    "scientific AI coding agents",
    "autonomous robotic arm",
    "HMI touchpad device",
    "MXene inverse design",
    "computer vision pipeline",
    "open source robotics",
    "AI research projects",
    "embodied intelligence projects",
  ],
  alternates: {
    canonical: "https://cogninoidlabs.com/projects",
  },
  openGraph: {
    title: "Projects | Cogninoid Labs",
    description:
      "AI coding agents, robotic arms, HMI devices, computer vision systems, and scientific tools built by Cogninoid Labs.",
    url: "https://cogninoidlabs.com/projects",
  },
  twitter: {
    title: "Projects | Cogninoid Labs",
    description:
      "AI coding agents, robotic arms, HMI devices, computer vision systems, and scientific tools built by Cogninoid Labs.",
  },
};

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
