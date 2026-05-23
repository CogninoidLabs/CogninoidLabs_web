"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Mail, Brain, Bot, Code2, Cpu, Activity, RefreshCw } from "lucide-react";
import { GithubIcon } from "@/components/BrandIcons";

const workflowSteps = [
  { icon: Brain, label: "Human Idea", color: "from-violet-500 to-violet-600", glow: "shadow-violet-500/30" },
  { icon: Bot, label: "AI Agent", color: "from-blue-500 to-blue-600", glow: "shadow-blue-500/30" },
  { icon: Code2, label: "Code / Design", color: "from-cyan-500 to-cyan-600", glow: "shadow-cyan-500/30" },
  { icon: Cpu, label: "Robot / Prototype", color: "from-cyan-500 to-blue-600", glow: "shadow-cyan-500/30" },
  { icon: Activity, label: "Sensor Feedback", color: "from-blue-500 to-violet-600", glow: "shadow-blue-500/30" },
  { icon: RefreshCw, label: "Learning Loop", color: "from-violet-500 to-purple-600", glow: "shadow-violet-500/30" },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      {/* Ambient gradient blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-48 -left-48 w-[500px] h-[500px] bg-violet-700/15 rounded-full blur-[120px]" />
        <div className="absolute top-1/4 right-0 w-[400px] h-[400px] bg-cyan-500/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 left-1/4 w-[300px] h-[300px] bg-blue-600/10 rounded-full blur-[80px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Copy */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            {/* Pill badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-cyan-500/25 bg-cyan-500/8 text-cyan-400 text-xs font-medium mb-8"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
              AI · Robotics · Embodied Intelligence · Engineering Studio
            </motion.div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight mb-6">
              <span className="text-white">Building </span>
              <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-violet-400 bg-clip-text text-transparent">
                embodied
                <br />
                intelligence
              </span>
              <span className="text-white">
                <br />
                for human–machine
                <br />
                systems.
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-slate-400 text-lg leading-relaxed mb-10 max-w-lg">
              Cogninoid Labs explores the intersection of AI code systems, robotics, human–machine interaction, 3D printing, and autonomous experimentation.
            </p>

            {/* CTA buttons */}
            <div className="flex flex-wrap gap-3">
              <Link
                href="/projects"
                className="group flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-sm font-medium hover:opacity-90 transition-opacity shadow-xl shadow-cyan-500/20"
              >
                Explore Projects
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </Link>
              <a
                href="https://github.com/CogninoidLabs"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 rounded-full border border-white/15 text-white text-sm hover:bg-white/5 hover:border-white/25 transition-all"
              >
                <GithubIcon className="w-4 h-4" />
                View GitHub
              </a>
              <Link
                href="/contact"
                className="flex items-center gap-2 px-6 py-3 rounded-full border border-violet-500/30 text-violet-400 text-sm hover:bg-violet-500/10 hover:border-violet-500/50 transition-all"
              >
                <Mail className="w-4 h-4" />
                Contact
              </Link>
            </div>
          </motion.div>

          {/* Right: Futuristic workflow card */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.75, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-sm">
              {/* Card glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/25 to-violet-600/25 rounded-3xl blur-2xl scale-105" />

              {/* Main card */}
              <div className="relative bg-white/[0.05] backdrop-blur-xl border border-white/[0.1] rounded-3xl p-7 overflow-hidden">
                {/* Inner corner gradient */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-cyan-500/15 to-transparent rounded-3xl" />

                <p className="text-[10px] text-slate-500 uppercase tracking-[0.2em] mb-6 font-medium">
                  Cogninoid Intelligence Loop
                </p>

                <div className="flex flex-col gap-2.5">
                  {workflowSteps.map((step, i) => {
                    const Icon = step.icon;
                    return (
                      <motion.div
                        key={step.label}
                        initial={{ opacity: 0, x: -16 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5 + i * 0.1, duration: 0.4 }}
                        className="flex items-center gap-3 group/step"
                      >
                        {/* Step icon */}
                        <div
                          className={`w-9 h-9 rounded-xl bg-gradient-to-br ${step.color} flex items-center justify-center flex-shrink-0 shadow-md ${step.glow} group-hover/step:scale-110 transition-transform duration-200`}
                        >
                          <Icon className="w-4 h-4 text-white" strokeWidth={1.75} />
                        </div>

                        {/* Step label */}
                        <span className="text-sm text-slate-300 font-medium">{step.label}</span>

                        {/* Connector arrow */}
                        {i < workflowSteps.length - 1 && (
                          <div className="ml-auto flex-shrink-0">
                            <svg width="12" height="12" viewBox="0 0 12 12" className="text-slate-600">
                              <path d="M1 6h10M7 2l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                            </svg>
                          </div>
                        )}

                        {/* Completion check for last step */}
                        {i === workflowSteps.length - 1 && (
                          <div className="ml-auto flex-shrink-0 w-5 h-5 rounded-full bg-cyan-500/20 border border-cyan-500/40 flex items-center justify-center">
                            <svg width="8" height="8" viewBox="0 0 8 8" className="text-cyan-400">
                              <path d="M1 4l2 2 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                            </svg>
                          </div>
                        )}
                      </motion.div>
                    );
                  })}
                </div>

                {/* Footer text */}
                <div className="mt-6 pt-5 border-t border-white/[0.07]">
                  <p className="text-[11px] text-slate-600 leading-relaxed">
                    Intelligence as a closed loop — from human idea to physical action and back to learning.
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
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-xs text-slate-600 tracking-widest uppercase">Scroll</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-0.5 h-6 rounded-full bg-gradient-to-b from-cyan-500/50 to-transparent"
          />
        </motion.div>
      </div>
    </section>
  );
}
