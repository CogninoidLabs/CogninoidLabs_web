import { getAll } from "@/lib/mdx";
import Link from "next/link";
import { ArrowRight, Globe, Map } from "lucide-react";
import DifficultyBadge from "@/components/DifficultyBadge";

const atlasTopics = [
  {
    slug: "embodied-ai",
    label: "Embodied AI",
    tagline: "Intelligence grounded in physical reality through sensors, actuators, and feedback loops.",
  },
  {
    slug: "multimodal-intelligence",
    label: "Multimodal Intelligence",
    tagline: "Understanding and reasoning across text, images, audio, and sensor signals simultaneously.",
  },
  {
    slug: "quantum-computing",
    label: "Quantum Computing",
    tagline: "Processing information with superposition, entanglement, and quantum interference.",
  },
  {
    slug: "toward-general-intelligence",
    label: "Toward General Intelligence",
    tagline: "How systems reason, plan, adapt, and act across tasks — and how we know when they do.",
  },
  {
    slug: "agentic-systems",
    label: "Agentic Systems",
    tagline: "AI that acts through tools, plans multi-step workflows, and closes the loop with the world.",
  },
  {
    slug: "human-machine-interaction",
    label: "Human–Machine Interaction",
    tagline: "How humans and AI systems share control, give feedback, and build trustworthy collaboration.",
  },
  {
    slug: "ai-for-scientific-discovery",
    label: "AI for Scientific Discovery",
    tagline: "Machine learning applied to protein folding, materials discovery, drug design, and autonomous labs.",
  },
  {
    slug: "robotics-and-sensors",
    label: "Robotics and Sensors",
    tagline: "Kinematics, control, sensor fusion, and the physical hardware that connects AI to the world.",
  },
];

const learningPaths = [
  {
    title: "AI Coding Foundations",
    accent: "text-cyan-400",
    border: "border-cyan-500/15",
    steps: [
      { label: "What is an AI Coding Agent?", href: "/start-here/what-is-an-ai-coding-agent" },
      { label: "What is Verifiable Building?", href: "/start-here/what-is-verifiable-building" },
      { label: "Agentic Systems", href: "/atlas/agentic-systems" },
      { label: "Build your first AI website", href: "/workflows/01-first-ai-website" },
    ],
  },
  {
    title: "Embodied AI and Robotics",
    accent: "text-violet-400",
    border: "border-violet-500/15",
    steps: [
      { label: "Robotics and Sensors", href: "/atlas/robotics-and-sensors" },
      { label: "Embodied AI", href: "/atlas/embodied-ai" },
      { label: "Human–Machine Interaction", href: "/atlas/human-machine-interaction" },
      { label: "Arduino hardware guide", href: "/hardware/arduino" },
    ],
  },
  {
    title: "Scientific AI",
    accent: "text-blue-400",
    border: "border-blue-500/15",
    steps: [
      { label: "Multimodal Intelligence", href: "/atlas/multimodal-intelligence" },
      { label: "AI for Scientific Discovery", href: "/atlas/ai-for-scientific-discovery" },
      { label: "Quantum Computing", href: "/atlas/quantum-computing" },
      { label: "Toward General Intelligence", href: "/atlas/toward-general-intelligence" },
    ],
  },
];

export default function AtlasPage() {
  const pages = getAll("atlas");
  const slugSet = new Set(pages.map((p) => p.slug));
  const pageMap = Object.fromEntries(pages.map((p) => [p.slug, p]));

  return (
    <main className="min-h-screen pt-24 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="max-w-3xl mb-10">
          <p className="section-label">Cogninoid Atlas</p>
          <h1 className="text-4xl sm:text-5xl font-bold text-white tracking-tight mb-4">
            Knowledge backbone<br />
            <span className="bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent">
              for builders and researchers.
            </span>
          </h1>
          <p className="text-slate-400 text-lg leading-relaxed">
            Each Atlas page follows the same rigorous architecture: definition → fundamentals → research frontier →
            scholarly references → build direction → beginner and advanced projects → open questions.
          </p>
        </div>

        {/* Page format strip */}
        <div className="mb-10 flex flex-wrap gap-2">
          {["1 · Definition", "2 · Why it matters", "3 · Fundamentals", "4 · Key questions", "5 · Frontier", "6 · Workflow", "7 · References", "8 · Build direction", "9 · Projects", "10 · Open questions"].map((step) => (
            <span key={step} className="text-[11px] text-slate-600 font-mono border border-white/[0.05] px-2.5 py-1 rounded-lg bg-white/[0.02]">
              {step}
            </span>
          ))}
        </div>

        {/* Topics grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-16">
          {atlasTopics.map(({ slug, label, tagline }) => {
            const page = pageMap[slug];
            const isAvailable = slugSet.has(slug);

            if (!isAvailable) {
              return (
                <div key={slug} className="flex flex-col bg-[#07070f] border border-white/[0.05] rounded-2xl p-5 opacity-40">
                  <p className="text-slate-500 text-sm font-medium">{label}</p>
                  <p className="text-[12px] text-slate-600 mt-1 leading-relaxed">{tagline}</p>
                  <p className="text-[10px] text-slate-700 font-mono mt-2">In progress</p>
                </div>
              );
            }

            return (
              <Link
                key={slug}
                href={`/atlas/${slug}`}
                className="group flex flex-col bg-[#07070f] border border-white/[0.07] rounded-2xl p-6 hover:border-cyan-500/25 hover:-translate-y-0.5 transition-all relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-cyan-500/0 via-cyan-500/40 to-cyan-500/0 opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="flex items-start justify-between gap-4 mb-2">
                  <h2 className="text-white font-semibold text-base leading-snug group-hover:text-cyan-400 transition-colors">
                    {page.frontmatter.title}
                  </h2>
                  {page.frontmatter.difficulty && (
                    <DifficultyBadge level={page.frontmatter.difficulty} />
                  )}
                </div>
                <p className="text-slate-500 text-[13px] leading-relaxed flex-1 mb-4">
                  {page.frontmatter.description ?? tagline}
                </p>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {(page.frontmatter.tags as string[] | undefined)?.slice(0, 5).map((tag) => (
                    <span key={tag} className="text-[11px] px-2 py-0.5 rounded-md bg-white/[0.03] border border-white/[0.05] text-slate-600 font-mono">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-1 text-[12px] text-slate-600 group-hover:text-cyan-400 transition-colors">
                  Read Atlas page <ArrowRight className="w-3 h-3" />
                </div>
              </Link>
            );
          })}
        </div>

        {/* Learning Paths */}
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-6">
            <Map className="w-4 h-4 text-slate-500" />
            <p className="text-[11px] font-semibold uppercase tracking-widest text-slate-500">Learning Paths</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {learningPaths.map((path) => (
              <div
                key={path.title}
                className={`bg-[#07070f] border ${path.border} rounded-2xl p-5`}
              >
                <p className={`text-[10px] font-semibold uppercase tracking-widest ${path.accent} mb-3`}>
                  {path.title}
                </p>
                <div className="flex flex-col gap-2">
                  {path.steps.map((step, i) => (
                    <Link
                      key={step.href}
                      href={step.href}
                      className="flex items-center gap-2 group"
                    >
                      <span className={`w-5 h-5 rounded-full text-[10px] font-mono flex items-center justify-center flex-shrink-0 border border-white/[0.08] text-slate-600`}>
                        {i + 1}
                      </span>
                      <span className="text-slate-500 text-[12px] group-hover:text-slate-200 transition-colors leading-snug">
                        {step.label}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer note */}
        <div className="p-6 bg-[#07070f] border border-white/[0.05] rounded-2xl flex items-center gap-4">
          <Globe className="w-5 h-5 text-cyan-400 flex-shrink-0" />
          <p className="text-slate-500 text-sm flex-1">
            Atlas pages are written to be scientifically robust: every claim is referenced with real scholarly sources, every research frontier is current, and every page closes with open questions that remain genuinely unsolved.
          </p>
          <Link href="/roadmap" className="text-sm text-cyan-400 hover:text-cyan-300 transition-colors flex items-center gap-1 flex-shrink-0">
            Full roadmap <ArrowRight className="w-3 h-3" />
          </Link>
        </div>
      </div>
    </main>
  );
}
