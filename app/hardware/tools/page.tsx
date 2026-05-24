import Link from "next/link";
import { ArrowRight, Wrench, ArrowLeft } from "lucide-react";
import { getAllInCategory } from "@/lib/mdx";
import DifficultyBadge from "@/components/DifficultyBadge";

const allTopics = [
  { slug: "multimeter", label: "Multimeter", description: "Measure voltage, current, and resistance to debug any circuit" },
  { slug: "picoscope", label: "PicoScope", description: "PC-based oscilloscope for visualising PWM, I2C, and SPI signals" },
  { slug: "logic-analyzer", label: "Logic Analyser", description: "Decode serial protocols (I2C, SPI, UART) in real time" },
  { slug: "soldering-iron", label: "Soldering Iron", description: "Permanent connections and PCB rework fundamentals" },
];

export default function ToolsPage() {
  const pages = getAllInCategory("hardware", "tools");
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
            <Wrench className="w-4 h-4 text-amber-400" />
            <p className="text-[11px] font-semibold uppercase tracking-widest text-amber-400">Hardware Atlas · Tools</p>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-3">Measurement Tools</h1>
          <p className="text-slate-400 text-base leading-relaxed max-w-2xl">
            A builder without measurement tools is guessing. These are the instruments that let you see what is actually happening
            in your circuit — voltages, current, signal timing, protocol data — instead of relying on assumptions.
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
                className="group flex flex-col bg-[#07070f] border border-white/[0.07] rounded-2xl p-5 hover:border-amber-500/25 hover:-translate-y-0.5 transition-all relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-amber-500/0 via-amber-500/40 to-amber-500/0 opacity-0 group-hover:opacity-100 transition-opacity" />
                <h2 className="text-white font-semibold text-sm mb-1.5 group-hover:text-amber-400 transition-colors">{page.frontmatter.title}</h2>
                <p className="text-slate-600 text-[12px] leading-relaxed flex-1 line-clamp-2 mb-3">{page.frontmatter.description}</p>
                <div className="flex items-center gap-2">
                  {page.frontmatter.difficulty && <DifficultyBadge level={page.frontmatter.difficulty} />}
                  <ArrowRight className="ml-auto w-3 h-3 text-slate-700 group-hover:text-amber-400 transition-colors" />
                </div>
              </Link>
            );
          })}
        </div>

        <div className="p-5 bg-amber-500/5 border border-amber-500/15 rounded-2xl">
          <p className="text-amber-400 text-xs font-semibold uppercase tracking-widest mb-1">Measurement is understanding</p>
          <p className="text-slate-400 text-sm leading-relaxed">
            A ₹500 multimeter will solve 80% of hardware problems. A logic analyser will solve another 15%.
            Learn to use these before buying more components.
          </p>
        </div>
      </div>
    </main>
  );
}
