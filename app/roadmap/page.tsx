import Link from "next/link";
import { ArrowRight, BookOpen, Zap, Globe, GitBranch, Cpu, Map } from "lucide-react";

const phases = [
  {
    number: "01",
    label: "Foundation",
    title: "Start Here",
    description:
      "Understand the tools every builder needs. VS Code, GitHub, Vercel, AI agents, and what it means to build verifiably.",
    href: "/start-here",
    color: "cyan",
    gradient: "from-cyan-500/20 to-blue-500/20",
    borderColor: "border-cyan-500/20",
    accentColor: "text-cyan-400",
    icon: BookOpen,
    topics: [
      "What is VS Code?",
      "What is GitHub?",
      "What is Vercel?",
      "What is an AI Coding Agent?",
      "What is Verifiable Building?",
    ],
  },
  {
    number: "02",
    label: "Workflows",
    title: "Step-by-Step Builds",
    description:
      "16-section workflows that walk you from blank slate to deployed product. Each workflow is a complete, verified build.",
    href: "/workflows",
    color: "blue",
    gradient: "from-blue-500/20 to-violet-500/20",
    borderColor: "border-blue-500/20",
    accentColor: "text-blue-400",
    icon: Zap,
    topics: [
      "Your First AI Website",
      "Push to GitHub",
      "Deploy to Vercel",
      "Connect a Domain",
      "Search Console + Sitemap",
      "Debug AI-Generated Code",
    ],
  },
  {
    number: "03",
    label: "Atlas",
    title: "Cogninoid Atlas",
    description:
      "Deep dives into the concepts powering modern AI and robotics systems. Theory grounded in real applications.",
    href: "/atlas",
    color: "violet",
    gradient: "from-violet-500/20 to-purple-500/20",
    borderColor: "border-violet-500/20",
    accentColor: "text-violet-400",
    icon: Globe,
    topics: [
      "Embodied AI",
      "Autonomous Systems",
      "Reinforcement Learning",
      "Sensor Fusion",
      "AI Agents",
    ],
  },
  {
    number: "04",
    label: "Hardware",
    title: "Hardware Atlas",
    description:
      "Every component you'll encounter in physical AI systems. Pinouts, specs, example code, and wiring diagrams.",
    href: "/hardware",
    color: "teal",
    gradient: "from-teal-500/20 to-cyan-500/20",
    borderColor: "border-teal-500/20",
    accentColor: "text-teal-400",
    icon: Cpu,
    topics: [
      "Arduino",
      "ESP32",
      "Servo Motors",
      "IMU Sensors",
      "Motor Drivers",
      "Raspberry Pi Pico",
    ],
  },
  {
    number: "05",
    label: "Projects",
    title: "Build Logs",
    description:
      "Real builds documented from concept to code. See what breaks, what works, and why we made the decisions we did.",
    href: "/projects",
    color: "orange",
    gradient: "from-orange-500/20 to-amber-500/20",
    borderColor: "border-orange-500/20",
    accentColor: "text-orange-400",
    icon: GitBranch,
    topics: [
      "Robotic Arm Control",
      "Sensor Data Logger",
      "AI-Assisted Gripper",
      "Autonomous Experiment Platform",
    ],
  },
];

export default function RoadmapPage() {
  return (
    <main className="min-h-screen pt-24 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="max-w-3xl mb-16">
          <p className="section-label">Learning Roadmap</p>
          <h1 className="text-4xl sm:text-5xl font-bold text-white tracking-tight mb-4">
            From vibe coding<br />
            <span className="bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent">
              to verifiable building.
            </span>
          </h1>
          <p className="text-slate-400 text-lg leading-relaxed">
            A structured path through everything you need to build real AI and hardware systems.
            Start at the beginning or jump to wherever you are now.
          </p>
        </div>

        <div className="relative">
          {/* Vertical connector line */}
          <div className="absolute left-6 top-8 bottom-8 w-px bg-gradient-to-b from-cyan-500/30 via-violet-500/20 to-orange-500/20 hidden sm:block" />

          <div className="flex flex-col gap-6">
            {phases.map((phase, i) => {
              const Icon = phase.icon;
              return (
                <div key={phase.number} className="relative sm:pl-16">
                  {/* Phase number circle */}
                  <div className={`absolute left-0 top-6 hidden sm:flex w-12 h-12 rounded-full items-center justify-center text-xs font-bold font-mono bg-[#07070f] border ${phase.borderColor} ${phase.accentColor}`}>
                    {phase.number}
                  </div>

                  <div className={`group bg-[#07070f] border ${phase.borderColor} rounded-2xl p-6 hover:-translate-y-0.5 transition-all duration-200 relative overflow-hidden`}>
                    <div className={`absolute inset-0 bg-gradient-to-br ${phase.gradient} opacity-0 group-hover:opacity-100 transition-opacity`} />
                    <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

                    <div className="relative flex flex-col sm:flex-row sm:items-start gap-5">
                      <div className={`flex-shrink-0 w-10 h-10 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center`}>
                        <Icon className={`w-5 h-5 ${phase.accentColor}`} />
                      </div>

                      <div className="flex-1 min-w-0">
                        <div className="flex flex-wrap items-center gap-2 mb-1.5">
                          <span className={`text-[10px] font-mono font-semibold uppercase tracking-widest ${phase.accentColor}`}>
                            Phase {phase.number}
                          </span>
                          <span className="text-[10px] text-slate-700 font-mono border border-white/[0.06] px-2 py-0.5 rounded">
                            {phase.label}
                          </span>
                        </div>
                        <h2 className={`text-lg font-semibold text-white mb-2 group-hover:${phase.accentColor} transition-colors`}>
                          {phase.title}
                        </h2>
                        <p className="text-slate-500 text-sm leading-relaxed mb-4">{phase.description}</p>

                        <div className="flex flex-wrap gap-1.5 mb-4">
                          {phase.topics.map((topic) => (
                            <span
                              key={topic}
                              className="text-[11px] px-2 py-0.5 rounded-md bg-white/[0.03] border border-white/[0.05] text-slate-600 font-mono"
                            >
                              {topic}
                            </span>
                          ))}
                        </div>

                        <Link
                          href={phase.href}
                          className={`inline-flex items-center gap-1.5 text-sm ${phase.accentColor} hover:opacity-80 transition-opacity`}
                        >
                          Go to {phase.title}
                          <ArrowRight className="w-3.5 h-3.5" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-12 p-6 bg-[#07070f] border border-white/[0.05] rounded-2xl flex items-center gap-4">
          <Map className="w-5 h-5 text-cyan-400 flex-shrink-0" />
          <p className="text-slate-500 text-sm flex-1">
            All content is written from real builds. Each page is released when it has been verified in at least one working system.
          </p>
        </div>
      </div>
    </main>
  );
}
