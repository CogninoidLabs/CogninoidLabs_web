import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Builds",
  description:
    "Hardware builds by Cogninoid Labs: modular robotic arms (Adeept), 3D-printed HMI controller devices, neural interface prototypes, autonomous ground vehicles, exoskeleton finger systems, force-feedback haptic gloves, and AI-enabled scientific instruments.",
  keywords: [
    "Cogninoid Labs builds",
    "robotic arm build",
    "Adeept robotic arm",
    "3D printed robot",
    "HMI controller device",
    "neural interface prototype",
    "autonomous ground vehicle",
    "exoskeleton finger",
    "haptic feedback glove",
    "robotic hardware",
    "AI hardware build",
    "open source robot",
    "DIY robotics",
    "3D printing project",
  ],
  alternates: {
    canonical: "https://cogninoidlabs.com/builds",
  },
  openGraph: {
    title: "Builds | Cogninoid Labs",
    description:
      "Robotic arms, HMI devices, autonomous vehicles, neural interfaces, and haptic systems built by Cogninoid Labs.",
    url: "https://cogninoidlabs.com/builds",
  },
  twitter: {
    title: "Builds | Cogninoid Labs",
    description:
      "Robotic arms, HMI devices, autonomous vehicles, neural interfaces, and haptic systems built by Cogninoid Labs.",
  },
};

export default function BuildsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
