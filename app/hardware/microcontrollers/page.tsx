import Link from "next/link";
import { ArrowRight, Cpu, ArrowLeft } from "lucide-react";
import { getAllInCategory } from "@/lib/mdx";
import DifficultyBadge from "@/components/DifficultyBadge";

const allTopics = [
  { slug: "arduino", label: "Arduino Uno R3", description: "The most accessible entry point into hardware programming" },
  { slug: "esp32", label: "ESP32 DevKit V1", description: "Wi-Fi + Bluetooth microcontroller for IoT and AI edge inference" },
  { slug: "raspberry-pi-pico", label: "Raspberry Pi Pico", description: "RP2040-based board for real-time embedded control" },
];

export default function MicrocontrollersPage() {
  const pages = getAllInCategory("hardware", "microcontrollers");
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
            <Cpu className="w-4 h-4 text-cyan-400" />
            <p className="text-[11px] font-semibold uppercase tracking-widest text-cyan-400">Hardware Atlas · Microcontrollers</p>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-3">Microcontrollers</h1>
          <p className="text-slate-400 text-base leading-relaxed max-w-2xl">
            Microcontrollers are the brains of physical AI systems. They translate high-level logic into precise electrical signals — reading sensors,
            driving actuators, and maintaining real-time control loops that no general-purpose computer can match.
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
                className="group flex flex-col bg-[#07070f] border border-white/[0.07] rounded-2xl p-5 hover:border-cyan-500/25 hover:-translate-y-0.5 transition-all relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-cyan-500/0 via-cyan-500/40 to-cyan-500/0 opacity-0 group-hover:opacity-100 transition-opacity" />
                <h2 className="text-white font-semibold text-sm mb-1.5 group-hover:text-cyan-400 transition-colors">{page.frontmatter.title}</h2>
                <p className="text-slate-600 text-[12px] leading-relaxed flex-1 line-clamp-2 mb-3">{page.frontmatter.description}</p>
                <div className="flex items-center gap-2">
                  {page.frontmatter.difficulty && <DifficultyBadge level={page.frontmatter.difficulty} />}
                  <ArrowRight className="ml-auto w-3 h-3 text-slate-700 group-hover:text-cyan-400 transition-colors" />
                </div>
              </Link>
            );
          })}
        </div>

        <div className="p-5 bg-cyan-500/5 border border-cyan-500/15 rounded-2xl">
          <p className="text-cyan-400 text-xs font-semibold uppercase tracking-widest mb-1">What you will learn</p>
          <p className="text-slate-400 text-sm leading-relaxed">
            How to choose a microcontroller for your use case, understand clock cycles and memory constraints,
            write interrupt-driven code, and connect microcontrollers to sensors and actuators in a real system.
          </p>
        </div>
      </div>
    </main>
  );
}
