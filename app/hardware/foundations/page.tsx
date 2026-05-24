import Link from "next/link";
import { ArrowRight, BookOpen, ArrowLeft } from "lucide-react";
import { getAllInCategory } from "@/lib/mdx";
import DifficultyBadge from "@/components/DifficultyBadge";

const allTopics = [
  { slug: "voltage-current-resistance", label: "Voltage, Current & Resistance", description: "Ohm's Law and the three fundamental electrical quantities" },
  { slug: "power-and-ground", label: "Power and Ground", description: "How power rails work and why common ground is critical" },
  { slug: "digital-vs-analog", label: "Digital vs Analog Signals", description: "The difference between discrete and continuous signals" },
  { slug: "pwm", label: "PWM (Pulse-Width Modulation)", description: "How digital pins simulate analog control for motors and servos" },
  { slug: "i2c-spi-uart", label: "I2C, SPI, UART", description: "Serial communication protocols for sensor and module interfaces" },
  { slug: "common-ground", label: "Common Ground", description: "Why shared ground is essential in multi-component systems" },
];

export default function FoundationsPage() {
  const pages = getAllInCategory("hardware", "foundations");
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
            <BookOpen className="w-4 h-4 text-blue-400" />
            <p className="text-[11px] font-semibold uppercase tracking-widest text-blue-400">Hardware Atlas · Foundations</p>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-3">Electrical Foundations</h1>
          <p className="text-slate-400 text-base leading-relaxed max-w-2xl">
            Before touching any component, you need to understand the physical laws that govern electricity.
            These are not optional background knowledge — they are the foundation every debugging session starts from.
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
                className="group flex flex-col bg-[#07070f] border border-white/[0.07] rounded-2xl p-5 hover:border-blue-500/25 hover:-translate-y-0.5 transition-all relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-blue-500/0 via-blue-500/40 to-blue-500/0 opacity-0 group-hover:opacity-100 transition-opacity" />
                <h2 className="text-white font-semibold text-sm mb-1.5 group-hover:text-blue-400 transition-colors">{page.frontmatter.title}</h2>
                <p className="text-slate-600 text-[12px] leading-relaxed flex-1 line-clamp-2 mb-3">{page.frontmatter.description}</p>
                <div className="flex items-center gap-2">
                  {page.frontmatter.difficulty && <DifficultyBadge level={page.frontmatter.difficulty} />}
                  <ArrowRight className="ml-auto w-3 h-3 text-slate-700 group-hover:text-blue-400 transition-colors" />
                </div>
              </Link>
            );
          })}
        </div>

        <div className="p-5 bg-blue-500/5 border border-blue-500/15 rounded-2xl">
          <p className="text-blue-400 text-xs font-semibold uppercase tracking-widest mb-1">Start here</p>
          <p className="text-slate-400 text-sm leading-relaxed">
            If you have never picked up a multimeter, begin with Voltage, Current & Resistance.
            If you understand Ohm's Law but serial protocols confuse you, start with I2C, SPI, UART.
            These concepts appear in every hardware page that follows.
          </p>
        </div>
      </div>
    </main>
  );
}
