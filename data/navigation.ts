export interface NavSection {
  label: string;
  href: string;
  description: string;
  icon?: string;
}

export const learningHub: NavSection[] = [
  {
    label: "Start Here",
    href: "/start-here",
    description: "Foundation concepts for every builder",
  },
  {
    label: "Workflows",
    href: "/workflows",
    description: "Step-by-step engineering workflows",
  },
  {
    label: "Atlas",
    href: "/atlas",
    description: "Frontier research concepts explained",
  },
  {
    label: "Hardware",
    href: "/hardware",
    description: "Electronics and physical systems",
  },
  {
    label: "Projects",
    href: "/projects",
    description: "Real builds and experiments",
  },
  {
    label: "Templates",
    href: "/templates",
    description: "Reusable starting points",
  },
  {
    label: "Glossary",
    href: "/glossary",
    description: "Terms and definitions",
  },
  {
    label: "Roadmap",
    href: "/roadmap",
    description: "What we're building next",
  },
];

export const mainNav = [
  { href: "/start-here", label: "Start Here" },
  { href: "/workflows", label: "Workflows" },
  { href: "/atlas", label: "Atlas" },
  { href: "/hardware", label: "Hardware" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
];
