import { getAll } from "@/lib/mdx";
import Link from "next/link";
import { ArrowRight, Telescope } from "lucide-react";
import DifficultyBadge from "@/components/DifficultyBadge";

const atlasTopics = [
  { slug: "multimodal-intelligence", label: "Multimodal Intelligence", placeholder: true },
  { slug: "quantum-computing", label: "Quantum Computing", placeholder: true },
  { slug: "toward-general-intelligence", label: "Toward General Intelligence", placeholder: true },
  { slug: "embodied-ai", label: "Embodied AI", placeholder: false },
  { slug: "agentic-systems", label: "Agentic Systems", placeholder: true },
  { slug: "human-machine-interaction", label: "Human–Machine Interaction", placeholder: true },
  { slug: "ai-for-scientific-discovery", label: "AI for Scientific Discovery", placeholder: true },
];

export default function AtlasPage() {
  const pages = getAll("atlas");
  const slugSet = new Set(pages.map((p) => p.slug));
  const pageMap = Object.fromEntries(pages.map((p) => [p.slug, p]));

  return (
    <main className="min-h-screen pt-24 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="max-w-3xl mb-14">
          <p className="section-label">Cogninoid Atlas</p>
          <h1 className="text-4xl sm:text-5xl font-bold text-white tracking-tight mb-4">
            Frontier research,<br />
            <span className="bg-gradient-to-r from-violet-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
              clearly explained.
            </span>
          </h1>
          <p className="text-slate-400 text-lg leading-relaxed">
            Each Atlas page takes a frontier research topic — from embodied AI to quantum computing —
            and explains it from first principles to current open questions, with practical build directions.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {atlasTopics.map(({ slug, label, placeholder }) => {
            const page = pageMap[slug];
            const isAvailable = slugSet.has(slug);

            if (!isAvailable || placeholder) {
              return (
                <div
                  key={slug}
                  className="flex flex-col bg-[#07070f] border border-white/[0.05] rounded-2xl p-6 opacity-50"
                >
                  <p className="text-slate-400 font-semibold text-sm mb-1">{label}</p>
                  <p className="text-[11px] text-slate-700 font-mono mt-auto">In progress</p>
                </div>
              );
            }

            return (
              <Link
                key={slug}
                href={`/atlas/${slug}`}
                className="group flex flex-col bg-[#07070f] border border-white/[0.07] rounded-2xl p-6 hover:border-violet-500/25 hover:-translate-y-0.5 transition-all overflow-hidden relative"
              >
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-violet-500/0 via-violet-500/50 to-violet-500/0 opacity-0 group-hover:opacity-100 transition-opacity" />
                <h2 className="text-white font-semibold text-base mb-2 group-hover:text-violet-400 transition-colors">
                  {page.frontmatter.title}
                </h2>
                {page.frontmatter.description && (
                  <p className="text-slate-600 text-[13px] leading-relaxed flex-1 line-clamp-3">
                    {page.frontmatter.description}
                  </p>
                )}
                <div className="flex items-center gap-2 mt-4">
                  {page.frontmatter.difficulty && (
                    <DifficultyBadge level={page.frontmatter.difficulty} />
                  )}
                  <ArrowRight className="ml-auto w-3.5 h-3.5 text-slate-700 group-hover:text-violet-400 group-hover:translate-x-0.5 transition-all" />
                </div>
              </Link>
            );
          })}
        </div>

        <div className="mt-12 p-6 bg-[#07070f] border border-white/[0.05] rounded-2xl flex items-center gap-4">
          <Telescope className="w-6 h-6 text-violet-400 flex-shrink-0" />
          <p className="text-slate-500 text-sm">
            The Atlas is actively expanding. New pages are added as research areas mature in our lab.
          </p>
        </div>
      </div>
    </main>
  );
}
