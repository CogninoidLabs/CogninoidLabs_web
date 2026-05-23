"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Mail, Brain, Bot, Code2, Cpu, Activity, RefreshCw } from "lucide-react";
import { GithubIcon } from "@/components/BrandIcons";
import NeuralNetworkCanvas from "@/components/NeuralNetworkCanvas";

const workflowSteps = [
  { icon: Brain,     label: "Human Idea",       color: "from-violet-500 to-violet-600", glow: "shadow-violet-500/30" },
  { icon: Bot,       label: "AI Agent",          color: "from-blue-500 to-blue-600",    glow: "shadow-blue-500/30" },
  { icon: Code2,     label: "Code / Design",     color: "from-cyan-500 to-cyan-600",    glow: "shadow-cyan-500/30" },
  { icon: Cpu,       label: "Robot / Prototype", color: "from-cyan-500 to-blue-600",    glow: "shadow-cyan-500/30" },
  { icon: Activity,  label: "Sensor Feedback",   color: "from-blue-500 to-violet-600",  glow: "shadow-blue-500/30" },
  { icon: RefreshCw, label: "Learning Loop",     color: "from-violet-500 to-purple-600",glow: "shadow-violet-500/30" },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">

      {/* ── Neural-network canvas background ──────────────────────────── */}
      <div className="absolute inset-0">
        <NeuralNetworkCanvas className="w-full h-full opacity-55" />
      </div>

      {/* ── Gradient overlay — keeps left readable, fades right ───────── */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#04040f] via-[#04040f]/85 to-[#04040f]/30 pointer-events-none" />
      {/* Top & bottom vignette */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#04040f]/60 via-transparent to-[#04040f]/80 pointer-events-none" />

      {/* ── Ambient colour blobs (on top of canvas) ───────────────────── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          animate={{ scale: [1, 1.12, 1], opacity: [0.12, 0.18, 0.12] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-violet-700 rounded-full blur-[130px]"
        />
        <motion.div
          animate={{ scale: [1, 1.08, 1], opacity: [0.08, 0.14, 0.08] }}
          transition={{ duration: 11, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute top-1/3 right-0 w-[450px] h-[450px] bg-cyan-500 rounded-full blur-[120px]"
        />
        <motion.div
          animate={{ scale: [1, 1.15, 1], opacity: [0.07, 0.13, 0.07] }}
          transition={{ duration: 13, repeat: Infinity, ease: "easeInOut", delay: 4 }}
          className="absolute bottom-0 left-1/3 w-[380px] h-[380px] bg-blue-600 rounded-full blur-[110px]"
        />
      </div>

      {/* ── Content ──────────────────────────────────────────────────────── */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left: copy */}
          <motion.div
            initial={{ opacity: 0, y: 36 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Pill */}
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-cyan-500/25 bg-cyan-500/10 text-cyan-400 text-xs font-medium mb-8 backdrop-blur-sm"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
              AI · Robotics · Embodied Intelligence · Engineering Studio
            </motion.div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-[3.6rem] font-bold leading-[1.1] tracking-tight mb-6">
              <span className="text-white">Building </span>
              <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-violet-400 bg-clip-text text-transparent">
                embodied<br />intelligence
              </span>
              <span className="text-white">
                <br />for human–machine<br />systems.
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-slate-300 text-lg leading-relaxed mb-10 max-w-lg">
              Cogninoid Labs explores the intersection of AI code systems, robotics,
              human–machine interaction, 3D printing, and autonomous experimentation.
            </p>

            {/* CTA buttons */}
            <div className="flex flex-wrap gap-3">
              <Link
                href="/projects"
                className="group flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-sm font-medium hover:opacity-90 transition-opacity shadow-xl shadow-cyan-500/25"
              >
                Explore Projects
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </Link>
              <a
                href="https://github.com/CogninoidLabs"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm text-white text-sm hover:bg-white/10 transition-all"
              >
                <GithubIcon className="w-4 h-4" />
                View GitHub
              </a>
              <Link
                href="/contact"
                className="flex items-center gap-2 px-6 py-3 rounded-full border border-violet-500/35 bg-violet-500/8 backdrop-blur-sm text-violet-400 text-sm hover:bg-violet-500/15 transition-all"
              >
                <Mail className="w-4 h-4" />
                Contact
              </Link>
            </div>

            {/* Stats strip */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-6 mt-10 pt-8 border-t border-white/[0.07]"
            >
              {[
                { label: "Research Areas", value: "5+" },
                { label: "Active Builds",  value: "8" },
                { label: "Open Source",    value: "∞" },
              ].map((s) => (
                <div key={s.label}>
                  <p className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">{s.value}</p>
                  <p className="text-xs text-slate-500 mt-0.5">{s.label}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right: Workflow card */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-sm">
              {/* Glow behind card */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/30 to-violet-600/30 rounded-3xl blur-2xl scale-105" />

              {/* Card */}
              <div className="relative bg-black/40 backdrop-blur-xl border border-white/[0.12] rounded-3xl p-7 overflow-hidden">
                <div className="absolute top-0 right-0 w-28 h-28 bg-gradient-to-bl from-cyan-500/15 to-transparent rounded-3xl" />
                <div className="absolute bottom-0 left-0 w-20 h-20 bg-gradient-to-tr from-violet-600/10 to-transparent rounded-3xl" />

                <p className="text-[10px] text-slate-500 uppercase tracking-[0.2em] mb-6 font-medium">
                  Cogninoid Intelligence Loop
                </p>

                <div className="flex flex-col gap-3 relative">
                  {workflowSteps.map((step, i) => {
                    const Icon = step.icon;
                    return (
                      <motion.div
                        key={step.label}
                        initial={{ opacity: 0, x: -18 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.55 + i * 0.1, duration: 0.4 }}
                        className="flex items-center gap-3 group/step"
                      >
                        <div className={`w-9 h-9 rounded-xl bg-gradient-to-br ${step.color} flex items-center justify-center flex-shrink-0 shadow-md ${step.glow} group-hover/step:scale-110 transition-transform duration-200`}>
                          <Icon className="w-4 h-4 text-white" strokeWidth={1.75} />
                        </div>
                        <span className="text-sm text-slate-200 font-medium flex-1">{step.label}</span>
                        {i < workflowSteps.length - 1 && (
                          <svg width="10" height="10" viewBox="0 0 10 10" className="text-slate-600 flex-shrink-0 rotate-90">
                            <path d="M5 1v8M2 6l3 3 3-3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                          </svg>
                        )}
                        {i === workflowSteps.length - 1 && (
                          <div className="w-5 h-5 rounded-full bg-cyan-500/20 border border-cyan-500/40 flex items-center justify-center flex-shrink-0">
                            <svg width="8" height="8" viewBox="0 0 8 8" className="text-cyan-400">
                              <path d="M1 4l2 2 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                            </svg>
                          </div>
                        )}
                      </motion.div>
                    );
                  })}
                </div>

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
          transition={{ delay: 1.4 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-[10px] text-slate-600 tracking-widest uppercase">Scroll</span>
          <motion.div
            animate={{ y: [0, 7, 0] }}
            transition={{ repeat: Infinity, duration: 1.6 }}
            className="w-0.5 h-6 rounded-full bg-gradient-to-b from-cyan-500/50 to-transparent"
          />
        </motion.div>
      </div>
    </section>
  );
}
