const BASE_URL = "https://cogninoidlabs.com";

const organization = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${BASE_URL}/#organization`,
  name: "Cogninoid Labs",
  url: BASE_URL,
  description:
    "Research-tech studio building embodied intelligence at the intersection of AI, robotics, human–machine interaction, 3D printing, and autonomous experimentation.",
  email: "contact@cogninoidlabs.com",
  foundingDate: "2024",
  sameAs: [
    "https://github.com/CogninoidLabs",
    "https://linkedin.com/company/cogninoidlabs",
    "https://twitter.com/CogninoidLabs",
  ],
  knowsAbout: [
    "Artificial Intelligence",
    "Robotics",
    "Human-Machine Interaction",
    "3D Printing",
    "Embodied Intelligence",
    "Autonomous Systems",
    "Machine Learning",
    "Scientific Software",
    "Neural Networks",
    "Reinforcement Learning",
    "Computer Vision",
    "Sensor Fusion",
  ],
  areaServed: "Worldwide",
  logo: {
    "@type": "ImageObject",
    url: `${BASE_URL}/favicon.svg`,
  },
};

const website = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${BASE_URL}/#website`,
  url: BASE_URL,
  name: "Cogninoid Labs",
  description:
    "AI Robotics, Embodied Intelligence & Human–Machine Systems Research Studio",
  publisher: { "@id": `${BASE_URL}/#organization` },
  inLanguage: "en-US",
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: `${BASE_URL}/blog?q={search_term_string}`,
    },
    "query-input": "required name=search_term_string",
  },
};

export default function JsonLd() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organization) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(website) }}
      />
    </>
  );
}
