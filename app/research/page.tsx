"use client";

import { motion } from "framer-motion";
import { Brain, Activity, Bot, Code2, Layers, CheckCircle, BookOpen, FlaskConical, Cpu } from "lucide-react";
import FeatureCard from "@/components/FeatureCard";

const researchAreas = [
  {
    icon: Brain,
    title: "Embodied AI & Learning",
    description:
      "Studying how AI systems can learn from physical interaction with the world — through reward signals, demonstrations, and closed-loop feedback rather than purely offline data.",
    gradient: "from-violet-500 to-purple-600",
    accentColor: "violet",
  },
  {
    icon: Bot,
    title: "Robotic System Design",
    description:
      "Designing robot hardware and software architectures that are modular, reusable, and amenable to AI-driven control across a range of manipulation and locomotion tasks.",
    gradient: "from-blue-500 to-violet-600",
    accentColor: "blue",
  },
  {
    icon: Code2,
    title: "Agentic AI Systems",
    description:
      "Building AI agents that can plan, write code, call tools, and execute multi-step scientific workflows autonomously — with human oversight as needed.",
    gradient: "from-cyan-500 to-blue-600",
    accentColor: "cyan",
  },
  {
    icon: Activity,
    title: "Autonomous Experimentation",
    description:
      "Developing closed-loop platforms where AI reasons over experimental data and proposes next steps — accelerating the scientific discovery cycle.",
    gradient: "from-blue-500 to-cyan-600",
    accentColor: "blue",
  },
  {
    icon: Layers,
    title: "Materials & Scientific AI",
    description:
      "Applying machine learning to inverse design, property prediction, and synthesis planning for advanced materials — including MXenes, perovskites, and nanomaterials.",
    gradient: "from-cyan-500 to-teal-600",
    accentColor: "cyan",
  },
  {
    icon: Cpu,
    title: "Human–Machine Interfaces",
    description:
      "Researching how to design interfaces that give humans interpretable, actionable visibility into AI behavior — especially in physical robotics contexts.",
    gradient: "from-violet-500 to-blue-600",
    accentColor: "violet",
  },
];

const principles = [
  "Build systems, not isolated demos",
  "Connect AI models with real-world physical feedback",
  "Keep human control and interpretability central at all stages",
  "Use rapid prototyping to shorten the idea-to-experiment cycle",
  "Prefer open, modular, and reusable tools over closed solutions",
  "Validate ideas in hardware as early as possible",
];

const notes = [
  {
    title: "On closed-loop intelligence",
    date: "May 2026",
    summary:
      "Notes on why static training datasets are insufficient for physical AI — and why the feedback loop between sensing, reasoning, and actuation is the core problem.",
    tag: "Embodied AI",
  },
  {
    title: "Designing robotic hardware for AI control",
    date: "April 2026",
    summary:
      "Reflections on building robot arms and grippers that are explicitly designed for AI-driven control — not just traditional position-control teleoperation.",
    tag: "Robotics",
  },
  {
    title: "Agentic systems for scientific workflows",
    date: "March 2026",
    summary:
      "Early experiments with LLM-based agents that can plan and execute multi-step lab-style workflows — with tool use and error recovery.",
    tag: "AI Agents",
  },
];

function fadeUp(delay = 0) {
  return {
    initial: { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6, delay },
  };
}

export default function ResearchPage() {
  return (
    <main className="relative pt-24 pb-32">
      <div className="absolute top-0 right-0 w-[500px] h-[400px] bg-violet-600/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div {...fadeUp()} className="mb-16">
          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-cyan-400 mb-3">
            Research
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-5">
            Questions we&apos;re working on
          </h1>
          <p className="text-slate-400 max-w-2xl text-lg leading-relaxed">
            Cogninoid Labs pursues research at the frontier of physical AI — where machines must not just
            reason, but act, sense, and adapt in the real world.
          </p>
        </motion.div>

        {/* Research Areas */}
        <motion.div {...fadeUp(0.1)} className="mb-6">
          <h2 className="text-xl font-bold text-white">Research Areas</h2>
          <div className="w-12 h-0.5 bg-gradient-to-r from-cyan-400 to-violet-400 mt-2" />
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-24">
          {researchAreas.map((area, i) => (
            <motion.div key={area.title} {...fadeUp(i * 0.1)}>
              <FeatureCard {...area} />
            </motion.div>
          ))}
        </div>

        {/* Research Philosophy */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
          <motion.div {...fadeUp()}>
            <span className="inline-block text-xs font-semibold uppercase tracking-widest text-cyan-400 mb-3">
              Philosophy
            </span>
            <h2 className="text-3xl font-bold text-white mb-8">
              How we do research
            </h2>
            <div className="flex flex-col gap-4">
              {principles.map((p, i) => (
                <motion.div
                  key={p}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" strokeWidth={2} />
                  <span className="text-slate-300 leading-relaxed">{p}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div {...fadeUp(0.2)} className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/8 to-violet-600/8 rounded-3xl blur-2xl" />
            <div className="relative bg-white/[0.04] border border-white/[0.08] rounded-3xl p-8 h-full flex flex-col justify-center">
              <FlaskConical className="w-10 h-10 text-cyan-400 mb-5" strokeWidth={1.5} />
              <h3 className="text-xl font-bold text-white mb-3">Experiment-first mindset</h3>
              <p className="text-slate-400 leading-relaxed mb-5">
                We prioritize building and testing physical systems early — because real-world behavior always
                surprises what simulation or theory predicts.
              </p>
              <div className="border-t border-white/[0.06] pt-5">
                <p className="text-slate-500 text-sm">
                  Every research thread at Cogninoid Labs starts with a question and ends with
                  something you can touch, run, or measure.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Research Notes */}
        <motion.div {...fadeUp()} className="mb-8">
          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-cyan-400 mb-3">
            Notes & Thinking
          </span>
          <h2 className="text-2xl font-bold text-white">
            Recent notes
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {notes.map((note, i) => (
            <motion.div
              key={note.title}
              {...fadeUp(i * 0.1)}
              className="bg-white/[0.04] border border-white/[0.08] rounded-2xl p-6 hover:border-cyan-500/25 hover:bg-white/[0.07] transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs px-2.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400">
                  {note.tag}
                </span>
                <span className="text-xs text-slate-600">{note.date}</span>
              </div>
              <BookOpen className="w-5 h-5 text-slate-600 mb-3" />
              <h3 className="text-white font-semibold mb-2 leading-snug">{note.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{note.summary}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}
