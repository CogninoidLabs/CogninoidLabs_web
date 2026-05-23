import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Cogninoid Labs for research collaboration, AI robotics project partnerships, academic knowledge exchange, open-source contributions, or business inquiries. We welcome collaborators across AI, robotics, 3D printing, and human-machine interaction.",
  keywords: [
    "contact Cogninoid Labs",
    "Cogninoid Labs collaboration",
    "AI robotics collaboration",
    "research partnership",
    "academic collaboration",
    "robotics project partnership",
    "open source contribution",
    "AI research contact",
    "Cogninoid Labs email",
    "robotics lab contact",
  ],
  alternates: {
    canonical: "https://cogninoidlabs.com/contact",
  },
  openGraph: {
    title: "Contact | Cogninoid Labs",
    description:
      "Reach out to Cogninoid Labs for collaboration, research partnerships, or business inquiries in AI, robotics, and human-machine interaction.",
    url: "https://cogninoidlabs.com/contact",
  },
  twitter: {
    title: "Contact | Cogninoid Labs",
    description:
      "Reach out to Cogninoid Labs for collaboration, research partnerships, or business inquiries in AI, robotics, and human-machine interaction.",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
