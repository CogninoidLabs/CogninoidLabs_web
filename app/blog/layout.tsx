import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Insights and technical writing from Cogninoid Labs on AI robotics, embodied intelligence, closed-loop learning systems, human-machine interaction, 3D printing, autonomous experimentation, and scientific software development.",
  keywords: [
    "Cogninoid Labs blog",
    "AI robotics blog",
    "embodied intelligence articles",
    "closed-loop intelligence",
    "human-machine interaction blog",
    "robotics engineering blog",
    "AI research articles",
    "autonomous systems blog",
    "3D printing articles",
    "scientific software blog",
    "machine learning articles",
    "neural network articles",
  ],
  alternates: {
    canonical: "https://cogninoidlabs.com/blog",
  },
  openGraph: {
    title: "Blog | Cogninoid Labs",
    description:
      "Technical insights on AI robotics, embodied intelligence, closed-loop learning, and autonomous systems from the Cogninoid Labs team.",
    url: "https://cogninoidlabs.com/blog",
    type: "website",
  },
  twitter: {
    title: "Blog | Cogninoid Labs",
    description:
      "Technical insights on AI robotics, embodied intelligence, closed-loop learning, and autonomous systems from the Cogninoid Labs team.",
  },
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
