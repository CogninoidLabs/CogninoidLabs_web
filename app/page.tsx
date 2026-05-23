"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { CheckCircle, Code2, Bot, Brain, Cpu, Activity, Layers } from "lucide-react";
import { GithubIcon } from "@/components/BrandIcons";
import Hero from "@/components/Hero";
import FeatureCard from "@/components/FeatureCard";
import Workflow from "@/components/Workflow";
import ProjectCard from "@/components/ProjectCard";

const pillars = [
  {
    icon: Code2,
    title: "AI Code Systems",
    description:
      "Agentic software, scientific coding tools, automation pipelines, and intelligent interfaces for research and engineering.",
    gradient: "from-cyan-500 to-blue-600",
    accentColor: "cyan",
  },
  {
    icon: Bot,
    title: "Robotics & Embodied AI",
    description:
      "Robotic platforms that combine sensing, control, learning, and interaction with the physical world.",
    gradient: "from-blue-500 to-violet-600",
    accentColor: "blue",
  },
  {
    icon: Brain,
    title: "Human–Machine Interaction",
    description:
      "Interfaces that make AI systems more understandable, controllable, and useful for humans.",
    gradient: "from-violet-500 to-purple-600",
    accentColor: "violet",
  },
  {
    icon: Layers,
    title: "3D Printing & Rapid Prototyping",
    description:
      "Designing and fabricating robotic parts, fixtures, sensors, and experimental tools through additive manufacturing.",
    gradient: "from-cyan-500 to-teal-600",
    accentColor: "cyan",
  },
  {
    icon: Activity,
    title: "Autonomous Experimentation",
    description:
      "Closed-loop systems where AI agents plan, execute, analyze, and refine experiments without human intervention.",
    gradient: "from-blue-500 to-cyan-600",
    accentColor: "blue",
  },
];

const builds = [
  {
    title: "AI-assisted robotics control",
    description:
      "Intelligent control systems that use AI models to plan and execute robotic movements in real time with adaptive feedback.",
    status: "in-development" as const,
    tags: ["Robotics", "AI", "Control", "Real-time"],
  },
  {
    title: "3D-printed robotic grippers",
    description:
      "Custom-designed grippers fabricated with FDM/SLA printing, optimized for specific grasping and manipulation tasks.",
    status: "in-development" as const,
    tags: ["3D Printing", "Hardware", "Mechanical Design"],
  },
  {
    title: "Human-interactive robotic interfaces",
    description:
      "Interfaces enabling intuitive human control and collaboration with robotic systems through gestures and natural language.",
    status: "coming-soon" as const,
    tags: ["HMI", "UX", "Robotics", "NLP"],
  },
  {
    title: "Scientific AI coding agents",
    description:
      "Agents that write, debug, and optimize scientific code across domains — from materials science to computational biology.",
    status: "in-development" as const,
    tags: ["Agents", "Science", "AI", "Automation"],
  },
  {
    title: "Sensor-driven autonomous experiments",
    description:
      "Closed-loop platforms that use sensor feedback to autonomously design, execute, and refine physical experiments.",
    status: "coming-soon" as const,
    tags: ["Sensors", "Automation", "Closed-loop"],
  },
  {
    title: "Embodied learning platforms",
    description:
      "Physical platforms where AI models learn from interaction with the real world through trial, adaptation, and continuous experience.",
    status: "coming-soon" as const,
    tags: ["Learning", "Embodied AI", "Physical AI"],
  },
];

const philosophyPoints = [
  "Build systems, not isolated demos",
  "Connect AI models with real-world feedback",
  "Keep human control and interpretability central",
  "Use rapid prototyping to shorten the idea-to-experiment cycle",
  "Prefer open, modular, reusable tools",
];

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-block text-xs font-semibold uppercase tracking-widest text-cyan-400 mb-3">
      {children}
    </span>
  );
}

function fadeUp(delay = 0) {
  return {
    initial: { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6, delay },
  };
}

export default function HomePage() {
  return (
    <main className="relative">
      {/* Hero */}
      <Hero />

      {/* Mission */}
      <section className="py-28 border-t border-white/[0.05]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp()} className="max-w-3xl mx-auto text-center">
            <SectionLabel>Mission</SectionLabel>
            <p className="text-xl sm:text-2xl text-slate-300 leading-relaxed font-light">
              &ldquo;Our mission is to connect digital reasoning with physical action. We develop AI-assisted
              tools, robotic prototypes, interactive systems, and experimental platforms that allow machines
              to{" "}
              <span className="text-cyan-400 font-normal">sense, learn, and adapt</span> — and{" "}
              <span className="text-violet-400 font-normal">collaborate with humans.</span>&rdquo;
            </p>
          </motion.div>
        </div>
      </section>

      {/* Core Pillars */}
      <section className="py-28 border-t border-white/[0.05]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp()} className="mb-14">
            <SectionLabel>Core Pillars</SectionLabel>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              Five domains we work in
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {pillars.map((pillar, i) => (
              <motion.div key={pillar.title} {...fadeUp(i * 0.1)}>
                <FeatureCard {...pillar} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Build */}
      <section className="py-28 border-t border-white/[0.05]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp()} className="mb-14">
            <SectionLabel>What We Build</SectionLabel>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              Current projects &amp; prototypes
            </h2>
            <p className="text-slate-400 mt-3 max-w-xl">
              Hardware, software, and hybrid systems — all aimed at connecting intelligence with physical action.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {builds.map((build, i) => (
              <motion.div key={build.title} {...fadeUp(i * 0.1)} className="flex">
                <ProjectCard {...build} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Workflow */}
      <div className="border-t border-white/[0.05]">
        <Workflow />
      </div>

      {/* Research Philosophy */}
      <section className="py-28 border-t border-white/[0.05]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div {...fadeUp()}>
              <SectionLabel>Research Philosophy</SectionLabel>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8">
                How we approach our work
              </h2>
              <div className="flex flex-col gap-5">
                {philosophyPoints.map((point, i) => (
                  <motion.div
                    key={point}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1, duration: 0.5 }}
                    className="flex items-start gap-3.5"
                  >
                    <CheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" strokeWidth={2} />
                    <span className="text-slate-300 leading-relaxed">{point}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-violet-600/10 rounded-3xl blur-2xl" />
              <div className="relative bg-white/[0.05] border border-white/[0.08] rounded-3xl p-8">
                <div className="grid grid-cols-2 gap-4 mb-6">
                  {[
                    { value: "AI+", label: "Code Systems", color: "text-cyan-400" },
                    { value: "5+", label: "Research Areas", color: "text-blue-400" },
                    { value: "∞", label: "Build Cycles", color: "text-violet-400" },
                    { value: "Open", label: "Source First", color: "text-cyan-400" },
                  ].map((stat) => (
                    <div
                      key={stat.label}
                      className="flex flex-col items-center justify-center p-5 bg-white/[0.04] rounded-2xl border border-white/[0.06]"
                    >
                      <div className={`text-2xl font-bold ${stat.color} mb-1`}>{stat.value}</div>
                      <div className="text-slate-500 text-xs text-center">{stat.label}</div>
                    </div>
                  ))}
                </div>
                <div className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-5">
                  <p className="text-slate-400 text-sm leading-relaxed">
                    We believe that the path from idea to working system should be as short as possible.
                    Every tool we build, we also use ourselves.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Open Source / GitHub */}
      <section className="py-28 border-t border-white/[0.05]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp()} className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/8 via-blue-600/5 to-violet-600/8 rounded-3xl blur-2xl scale-105" />
            <div className="relative bg-white/[0.04] border border-white/[0.08] rounded-3xl p-12 sm:p-16 text-center overflow-hidden">
              <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-cyan-500/10 to-transparent rounded-3xl" />
              <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-violet-600/10 to-transparent rounded-3xl" />

              <div className="relative">
                <div className="w-16 h-16 rounded-2xl bg-white/10 border border-white/15 flex items-center justify-center mx-auto mb-6">
                  <GithubIcon className="w-8 h-8 text-white" />
                </div>
                <SectionLabel>Open Source</SectionLabel>
                <h2 className="text-3xl sm:text-4xl font-bold text-white mb-5">
                  Building in the open
                </h2>
                <p className="text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
                  Cogninoid Labs will share selected tools, prototypes, and research code through open repositories.
                  The goal is to build a transparent engineering ecosystem around AI, robotics, and embodied intelligence.
                </p>
                <a
                  href="https://github.com/CogninoidLabs"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full bg-white text-black text-sm font-semibold hover:bg-slate-100 transition-colors shadow-2xl shadow-white/10"
                >
                  <GithubIcon className="w-5 h-5" />
                  View GitHub
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-28 border-t border-white/[0.05]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div {...fadeUp()}>
            <SectionLabel>Get in Touch</SectionLabel>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Let&apos;s connect
            </h2>
            <p className="text-slate-400 mb-10 max-w-xl mx-auto leading-relaxed">
              Interested in collaboration, research, prototyping, or AI robotics systems? Let&apos;s connect.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="mailto:contact@cogninoidlabs.com"
                className="flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-cyan-500 to-violet-600 text-white text-sm font-medium hover:opacity-90 transition-opacity shadow-xl shadow-violet-500/20"
              >
                contact@cogninoidlabs.com
              </a>
              <Link
                href="/contact"
                className="flex items-center gap-2 px-6 py-3 rounded-full border border-white/15 text-white text-sm hover:bg-white/5 transition-all"
              >
                Contact Page →
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
