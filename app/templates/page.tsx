import Link from "next/link";
import { ArrowRight, LayoutTemplate } from "lucide-react";

const templates = [
  {
    title: "Next.js Starter — Dark Theme",
    description: "The Cogninoid Labs base template. Dark background, Tailwind, TypeScript, App Router, MDX ready.",
    tags: ["Next.js", "TypeScript", "Tailwind", "MDX"],
    status: "coming-soon",
  },
  {
    title: "Arduino Sensor Logger",
    description: "Reads sensor values over Serial and logs them to a CSV file. Foundation for any data collection project.",
    tags: ["Arduino", "C++", "Sensors", "Data"],
    status: "coming-soon",
  },
  {
    title: "Robotic Arm Control API",
    description: "FastAPI server that accepts joint angle commands and sends PWM signals to servo motors.",
    tags: ["Python", "FastAPI", "Robotics", "Servo"],
    status: "coming-soon",
  },
  {
    title: "AI Coding Agent Prompt Template",
    description: "Structured prompts for giving AI coding agents precise, verifiable tasks.",
    tags: ["AI", "Prompts", "Claude Code"],
    status: "coming-soon",
  },
];

export default function TemplatesPage() {
  return (
    <main className="min-h-screen pt-24 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-14">
          <p className="section-label">Templates</p>
          <h1 className="text-4xl sm:text-5xl font-bold text-white tracking-tight mb-4">
            Reusable starting points
          </h1>
          <p className="text-slate-400 text-lg leading-relaxed">
            Templates are project starters, code scaffolds, and prompt patterns from real Cogninoid Labs builds.
            Not generic boilerplate — structures we actually use and maintain.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {templates.map((t) => (
            <div
              key={t.title}
              className="flex flex-col bg-[#07070f] border border-white/[0.07] rounded-2xl p-6 opacity-70"
            >
              <div className="flex items-start justify-between mb-3">
                <h2 className="text-white font-semibold text-base leading-snug">{t.title}</h2>
                <span className="text-[10px] text-slate-700 font-mono flex-shrink-0 ml-3 mt-0.5 border border-white/[0.05] px-2 py-0.5 rounded">
                  {t.status}
                </span>
              </div>
              <p className="text-slate-500 text-sm leading-relaxed flex-1 mb-4">{t.description}</p>
              <div className="flex flex-wrap gap-1.5">
                {t.tags.map((tag) => (
                  <span key={tag} className="text-[11px] px-2 py-0.5 rounded-md bg-white/[0.03] border border-white/[0.05] text-slate-600 font-mono">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 p-6 bg-[#07070f] border border-white/[0.05] rounded-2xl flex items-center gap-4">
          <LayoutTemplate className="w-5 h-5 text-cyan-400 flex-shrink-0" />
          <p className="text-slate-500 text-sm flex-1">Templates are released when they have been used in at least one real build and verified to work from scratch.</p>
          <Link href="/contact" className="text-sm text-cyan-400 hover:text-cyan-300 transition-colors flex items-center gap-1 flex-shrink-0">
            Request a template <ArrowRight className="w-3 h-3" />
          </Link>
        </div>
      </div>
    </main>
  );
}
