"use client";

import { motion } from "framer-motion";
import { Brain, Bot, Code2, Cpu, Activity, RefreshCw } from "lucide-react";

const steps = [
  {
    icon: Brain,
    label: "Human Goal",
    sublabel: "Define the objective",
    color: "from-violet-500 to-violet-600",
    glow: "shadow-violet-500/30",
    ring: "ring-violet-500/20",
  },
  {
    icon: Bot,
    label: "AI Reasoning",
    sublabel: "Plan & strategize",
    color: "from-blue-500 to-blue-600",
    glow: "shadow-blue-500/30",
    ring: "ring-blue-500/20",
  },
  {
    icon: Code2,
    label: "Code / Design",
    sublabel: "Generate solutions",
    color: "from-cyan-500 to-cyan-600",
    glow: "shadow-cyan-500/30",
    ring: "ring-cyan-500/20",
  },
  {
    icon: Cpu,
    label: "Robotic Prototype",
    sublabel: "Build & execute",
    color: "from-cyan-500 to-blue-600",
    glow: "shadow-cyan-500/30",
    ring: "ring-cyan-500/20",
  },
  {
    icon: Activity,
    label: "Sensor Feedback",
    sublabel: "Measure & record",
    color: "from-blue-500 to-violet-600",
    glow: "shadow-blue-500/30",
    ring: "ring-blue-500/20",
  },
  {
    icon: RefreshCw,
    label: "Model Improvement",
    sublabel: "Learn & iterate",
    color: "from-violet-500 to-purple-600",
    glow: "shadow-violet-500/30",
    ring: "ring-violet-500/20",
  },
];

export default function Workflow() {
  return (
    <section className="py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-cyan-400 mb-3">
            Intelligence Pipeline
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            The Cogninoid{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-violet-400 bg-clip-text text-transparent">
              Workflow
            </span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-base leading-relaxed">
            Cogninoid Labs treats intelligence as a loop: ideas become code, code drives physical systems,
            physical systems generate feedback, and feedback improves the next design.
          </p>
        </motion.div>

        {/* Pipeline — desktop horizontal */}
        <div className="hidden lg:flex items-center justify-center gap-0">
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="flex items-center"
              >
                {/* Step card */}
                <div className="flex flex-col items-center text-center w-36 group">
                  <div
                    className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center mb-3
                      shadow-lg ${step.glow} ring-2 ${step.ring} group-hover:scale-110 transition-transform duration-300`}
                  >
                    <Icon className="w-6 h-6 text-white" strokeWidth={1.75} />
                  </div>
                  <p className="text-sm font-semibold text-white mb-1">{step.label}</p>
                  <p className="text-xs text-slate-500">{step.sublabel}</p>
                </div>

                {/* Connector */}
                {i < steps.length - 1 && (
                  <div className="flex items-center mx-1 mb-10">
                    <div className="w-6 h-px bg-gradient-to-r from-white/10 to-white/20" />
                    <svg width="10" height="10" viewBox="0 0 10 10" className="text-slate-600 flex-shrink-0">
                      <path d="M1 5h8M5 1l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                    </svg>
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* Pipeline — mobile vertical */}
        <div className="lg:hidden flex flex-col items-center gap-2">
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.label}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.4 }}
                className="flex flex-col items-center w-full max-w-xs"
              >
                <div className="flex items-center gap-4 w-full px-6 py-4 bg-white/[0.04] border border-white/[0.07] rounded-2xl">
                  <div
                    className={`w-12 h-12 rounded-xl bg-gradient-to-br ${step.color} flex items-center justify-center flex-shrink-0 shadow-md ${step.glow}`}
                  >
                    <Icon className="w-5 h-5 text-white" strokeWidth={1.75} />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white">{step.label}</p>
                    <p className="text-xs text-slate-500">{step.sublabel}</p>
                  </div>
                </div>
                {i < steps.length - 1 && (
                  <div className="w-px h-4 bg-gradient-to-b from-white/10 to-transparent" />
                )}
              </motion.div>
            );
          })}
        </div>

        {/* Loop note */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-14 text-center"
        >
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/[0.04] border border-white/[0.08] text-slate-400 text-sm">
            <RefreshCw className="w-4 h-4 text-cyan-400" />
            The loop never ends — each iteration improves the system.
          </div>
        </motion.div>
      </div>
    </section>
  );
}
