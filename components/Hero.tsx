"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Mail, Brain, Bot, Code2, Cpu, Activity, RefreshCw } from "lucide-react";
import { GithubIcon } from "@/components/BrandIcons";
import EnhancedHeroBg from "@/components/EnhancedHeroBg";

const workflowSteps = [
  { icon: Brain,     label: "Human Idea",       color: "from-violet-500 to-violet-600" },
  { icon: Bot,       label: "AI Agent",          color: "from-blue-500 to-blue-600"   },
  { icon: Code2,     label: "Code / Design",     color: "from-cyan-500 to-cyan-600"   },
  { icon: Cpu,       label: "Robot / Prototype", color: "from-cyan-500 to-blue-600"   },
  { icon: Activity,  label: "Sensor Feedback",   color: "from-blue-500 to-violet-600" },
  { icon: RefreshCw, label: "Learning Loop",     color: "from-violet-500 to-purple-600"},
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">

      {/* Full-screen canvas animation */}
      <div className="absolute inset-0">
        <EnhancedHeroBg className="w-full h-full" />
      </div>

      {/* Gradient overlay — lighter so animation is visible */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#04040f]/80 via-[#04040f]/25 to-transparent pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#04040f]/50 via-transparent to-[#04040f]/70 pointer-events-none" />

      {/* Ambient colour blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          animate={{ scale: [1, 1.12, 1], opacity: [0.1, 0.16, 0.1] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-violet-700 rounded-full blur-[130px]"
        />
        <motion.div
          animate={{ scale: [1, 1.08, 1], opacity: [0.07, 0.13, 0.07] }}
          transition={{ duration: 11, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute top-1/3 right-0 w-[450px] h-[450px] bg-cyan-500 rounded-full blur-[120px]"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

          {/* Left: copy */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            {/* Subtle backdrop for text legibility */}
            <div className="absolute -inset-8 bg-[#04040f]/35 rounded-3xl blur-lg -z-10 pointer-events-none" />

            {/* Status pill */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-cyan-500/25 bg-cyan-500/8 text-cyan-400 text-[11px] font-medium mb-7 tracking-wide"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
              AI · Robotics · Embodied Intelligence
            </motion.div>

            {/* Headline */}
            <h1 className="text-[2.75rem] sm:text-5xl lg:text-[3.5rem] font-bold leading-[1.08] tracking-tight mb-6">
              <span className="text-white">Building </span>
              <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-violet-400 bg-clip-text text-transparent">
                embodied<br />intelligence
              </span>
              <span className="text-white">
                <br />for human–machine<br />systems.
              </span>
            </h1>

            {/* Subtext */}
            <p className="text-slate-400 text-[15px] leading-relaxed mb-9 max-w-lg">
              Cogninoid Labs explores the intersection of AI code systems, robotics,
              human–machine interaction, 3D printing, and autonomous experimentation.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3 mb-10">
              <Link
                href="/projects"
                className="group flex items-center gap-2 px-6 py-2.5 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-sm font-medium hover:opacity-90 transition-opacity shadow-lg shadow-cyan-500/20"
              >
                Explore Projects
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </Link>
              <a
                href="https://github.com/CogninoidLabs"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-2.5 rounded-full border border-white/[0.12] bg-white/[0.04] text-white text-sm hover:bg-white/[0.08] hover:border-white/20 transition-all"
              >
                <GithubIcon className="w-3.5 h-3.5" />
                GitHub
              </a>
              <Link
                href="/contact"
                className="flex items-center gap-2 px-6 py-2.5 rounded-full border border-violet-500/30 bg-violet-500/[0.06] text-violet-400 text-sm hover:bg-violet-500/12 transition-all"
              >
                <Mail className="w-3.5 h-3.5" />
                Contact
              </Link>
            </div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55, duration: 0.5 }}
              className="flex flex-wrap gap-6 pt-7 border-t border-white/[0.07]"
            >
              {[
                { label: "Research Areas", value: "5+" },
                { label: "Active Builds",  value: "8"  },
                { label: "Open Source",    value: "∞"  },
              ].map((s) => (
                <div key={s.label}>
                  <p className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent leading-none">{s.value}</p>
                  <p className="text-[11px] text-slate-600 mt-1 font-mono tracking-tight">{s.label}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right: Intelligence Loop card */}
          <motion.div
            initial={{ opacity: 0, x: 36 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.75, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-[320px]">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-violet-600/20 rounded-3xl blur-2xl scale-105 pointer-events-none" />

              <div className="relative bg-black/45 border border-white/[0.1] rounded-2xl p-7 overflow-hidden">
                {/* Top gradient line */}
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />

                <p className="text-[10px] text-slate-600 uppercase tracking-[0.18em] mb-5 font-mono">
                  Intelligence Loop
                </p>

                <div className="flex flex-col gap-2.5">
                  {workflowSteps.map((step, i) => {
                    const Icon = step.icon;
                    return (
                      <motion.div
                        key={step.label}
                        initial={{ opacity: 0, x: -14 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5 + i * 0.08, duration: 0.35 }}
                        className="flex items-center gap-3 group/step"
                      >
                        <div className={`w-8 h-8 rounded-xl bg-gradient-to-br ${step.color} flex items-center justify-center flex-shrink-0 group-hover/step:scale-110 transition-transform duration-200`}>
                          <Icon className="w-3.5 h-3.5 text-white" strokeWidth={1.75} />
                        </div>
                        <span className="text-[13px] text-slate-300 font-medium flex-1">{step.label}</span>
                        {i < workflowSteps.length - 1 && (
                          <svg width="8" height="8" viewBox="0 0 8 8" className="text-slate-700 flex-shrink-0 rotate-90">
                            <path d="M4 1v6M2 5l2 2 2-2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                          </svg>
                        )}
                        {i === workflowSteps.length - 1 && (
                          <div className="w-4 h-4 rounded-full bg-cyan-500/15 border border-cyan-500/35 flex items-center justify-center flex-shrink-0">
                            <svg width="6" height="6" viewBox="0 0 6 6" className="text-cyan-400">
                              <path d="M1 3l1.5 1.5 3-3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                            </svg>
                          </div>
                        )}
                      </motion.div>
                    );
                  })}
                </div>

                <div className="mt-5 pt-4 border-t border-white/[0.06]">
                  <p className="text-[11px] text-slate-600 leading-relaxed font-mono">
                    idea → action → feedback → learning
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5"
        >
          <span className="text-[9px] text-slate-700 tracking-widest uppercase font-mono">Scroll</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-px h-6 rounded-full bg-gradient-to-b from-cyan-500/40 to-transparent"
          />
        </motion.div>
      </div>
    </section>
  );
}
