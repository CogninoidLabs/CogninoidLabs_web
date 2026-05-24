import Link from "next/link";
import { ArrowRight, CircuitBoard, ArrowLeft } from "lucide-react";
import { getAllInCategory } from "@/lib/mdx";
import DifficultyBadge from "@/components/DifficultyBadge";

const allTopics = [
  { slug: "motor-driver", label: "Motor Driver (L298N)", description: "H-bridge IC that lets a microcontroller drive high-current motors" },
  { slug: "breadboard", label: "Breadboard", description: "Solderless prototyping board for rapid circuit testing" },
  { slug: "resistor", label: "Resistors", description: "Passive components that limit current and divide voltage" },
  { slug: "capacitor", label: "Capacitors", description: "Energy storage components for filtering and decoupling" },
  { slug: "transistor", label: "Transistors", description: "Semiconductor switches for signal amplification and switching" },
  { slug: "level-shifter", label: "Logic Level Shifter", description: "Bidirectional voltage translation between 3.3V and 5V systems" },
];

export default function ComponentsPage() {
  const pages = getAllInCategory("hardware", "components");
  const slugSet = new Set(pages.map((p) => p.slug));
  const pageMap = Object.fromEntries(pages.map((p) => [p.slug, p]));

  return (
    <main className="min-h-screen pt-24 pb-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link href="/hardware" className="inline-flex items-center gap-1.5 text-slate-600 hover:text-slate-400 text-sm mb-8 transition-colors">
          <ArrowLeft className="w-3.5 h-3.5" /> Hardware Atlas
        </Link>

        <div className="mb-10">
          <div className="flex items-center gap-2 mb-3">
            <CircuitBoard className="w-4 h-4 text-violet-400" />
            <p className="text-[11px] font-semibold uppercase tracking-widest text-violet-400">Hardware Atlas · Components</p>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-3">Components</h1>
          <p className="text-slate-400 text-base leading-relaxed max-w-2xl">
            Discrete and integrated components that form the interface layer between your microcontroller and the physical world.
            Understanding H-bridges, level shifters, and passive components is essential for building reliable systems.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
          {allTopics.map(({ slug, label, description }) => {
            const page = pageMap[slug];
            const isAvailable = slugSet.has(slug);

            if (!isAvailable) {
              return (
                <div key={slug} className="bg-[#07070f] border border-white/[0.05] rounded-2xl p-5 opacity-40">
                  <p className="text-slate-500 text-sm font-medium">{label}</p>
                  <p className="text-slate-600 text-xs mt-1">{description}</p>
                  <p className="text-[10px] text-slate-700 font-mono mt-3">In progress</p>
                </div>
              );
            }

            return (
              <Link
                key={slug}
                href={`/hardware/${slug}`}
                className="group flex flex-col bg-[#07070f] border border-white/[0.07] rounded-2xl p-5 hover:border-violet-500/25 hover:-translate-y-0.5 transition-all relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-violet-500/0 via-violet-500/40 to-violet-500/0 opacity-0 group-hover:opacity-100 transition-opacity" />
                <h2 className="text-white font-semibold text-sm mb-1.5 group-hover:text-violet-400 transition-colors">{page.frontmatter.title}</h2>
                <p className="text-slate-600 text-[12px] leading-relaxed flex-1 line-clamp-2 mb-3">{page.frontmatter.description}</p>
                <div className="flex items-center gap-2">
                  {page.frontmatter.difficulty && <DifficultyBadge level={page.frontmatter.difficulty} />}
                  <ArrowRight className="ml-auto w-3 h-3 text-slate-700 group-hover:text-violet-400 transition-colors" />
                </div>
              </Link>
            );
          })}
        </div>

        <div className="p-5 bg-violet-500/5 border border-violet-500/15 rounded-2xl">
          <p className="text-violet-400 text-xs font-semibold uppercase tracking-widest mb-1">What you will learn</p>
          <p className="text-slate-400 text-sm leading-relaxed">
            How to read datasheets, understand H-bridge topology for bidirectional motor control,
            select gate resistors for transistors, and design circuits that survive real operating conditions.
          </p>
        </div>
      </div>
    </main>
  );
}
