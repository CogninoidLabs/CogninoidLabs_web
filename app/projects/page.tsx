"use client";

import { motion } from "framer-motion";
import { Bot, Code2, Cpu, Activity, Layers, Brain, FlaskConical, Zap, Microscope } from "lucide-react";
import ProjectCard from "@/components/ProjectCard";

const allProjects = [
  // AI & Software
  {
    title: "Scientific AI Coding Agents",
    description:
      "Autonomous agents that write, execute, and debug scientific code across domains — materials science, computational biology, and beyond.",
    status: "in-development" as const,
    tags: ["AI Agents", "Python", "LLM", "Science"],
    icon: Code2,
    category: "AI & Software",
  },
  {
    title: "Autonomous Experiment Planner",
    description:
      "An AI system that proposes, schedules, and analyzes physical experiments in a closed-loop pipeline with minimal human input.",
    status: "in-development" as const,
    tags: ["Autonomous", "Planning", "AI", "Lab"],
    icon: FlaskConical,
    category: "AI & Software",
  },
  {
    title: "AI-Assisted Robotic Control API",
    description:
      "A Python API for commanding robotic actuators using natural language instructions translated to low-level motor signals via LLMs.",
    status: "in-development" as const,
    tags: ["API", "Robotics", "LLM", "Control"],
    icon: Zap,
    category: "AI & Software",
  },
  // Robotics
  {
    title: "Modular Robotic Arm Platform",
    description:
      "A low-cost, 3D-printable 6-DOF robotic arm designed for AI control experiments, sensor integration, and rapid hardware iteration.",
    status: "in-development" as const,
    tags: ["Robotics", "6-DOF", "Hardware", "Open-source"],
    icon: Bot,
    category: "Robotics",
  },
  {
    title: "Adaptive Gripper System",
    description:
      "Soft and rigid gripper designs produced with FDM 3D printing, featuring embedded force sensors for feedback-driven grasp control.",
    status: "in-development" as const,
    tags: ["3D Print", "Gripper", "Sensors", "Actuation"],
    icon: Cpu,
    category: "Robotics",
  },
  {
    title: "Sensor Fusion Platform",
    description:
      "A unified platform for fusing data from multiple sensor modalities — depth, force, IMU, and vision — into a real-time robot state estimate.",
    status: "coming-soon" as const,
    tags: ["Sensors", "Fusion", "ROS", "Embedded"],
    icon: Activity,
    category: "Robotics",
  },
  // HMI
  {
    title: "Natural Language Robot Interface",
    description:
      "A conversational interface for controlling robots with spoken or typed natural language, with explainable action feedback to the operator.",
    status: "coming-soon" as const,
    tags: ["NLP", "HMI", "Voice", "Robotics"],
    icon: Brain,
    category: "Human–Machine Interaction",
  },
  {
    title: "AR Workspace Overlay",
    description:
      "An augmented reality layer that visualizes robot intent, sensor data, and AI model predictions over the physical workspace in real time.",
    status: "coming-soon" as const,
    tags: ["AR", "Visualization", "HMI", "Real-time"],
    icon: Layers,
    category: "Human–Machine Interaction",
  },
  // Research Tools
  {
    title: "Materials AI Lab Toolkit",
    description:
      "Open-source tools for inverse design, property prediction, and autonomous synthesis planning in computational materials science.",
    status: "in-development" as const,
    tags: ["Materials", "ML", "Inverse Design", "DFT"],
    icon: Microscope,
    category: "Research Tools",
  },
];

const categories = ["All", "AI & Software", "Robotics", "Human–Machine Interaction", "Research Tools"];

function fadeUp(delay = 0) {
  return {
    initial: { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6, delay },
  };
}

export default function ProjectsPage() {
  return (
    <main className="relative pt-24 pb-32">
      {/* Background blob */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-cyan-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div {...fadeUp()} className="mb-16">
          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-cyan-400 mb-3">
            Projects
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-5">
            What we&apos;re building
          </h1>
          <p className="text-slate-400 max-w-2xl text-lg leading-relaxed">
            A mix of AI systems, robotic hardware, research tools, and human–machine interfaces — all connected by the same philosophy: build real things that learn.
          </p>
        </motion.div>

        {/* Category pills */}
        <motion.div {...fadeUp(0.1)} className="flex flex-wrap gap-2 mb-12">
          {categories.map((cat) => (
            <span
              key={cat}
              className={`px-4 py-1.5 rounded-full text-sm border transition-colors cursor-default ${
                cat === "All"
                  ? "bg-cyan-500/15 border-cyan-500/30 text-cyan-400"
                  : "bg-white/[0.04] border-white/[0.08] text-slate-500"
              }`}
            >
              {cat}
            </span>
          ))}
        </motion.div>

        {/* Projects grid — grouped by category */}
        {["AI & Software", "Robotics", "Human–Machine Interaction", "Research Tools"].map(
          (category, ci) => {
            const group = allProjects.filter((p) => p.category === category);
            return (
              <motion.div key={category} {...fadeUp(ci * 0.1)} className="mb-14">
                <div className="flex items-center gap-3 mb-6">
                  <h2 className="text-base font-semibold text-white">{category}</h2>
                  <div className="flex-1 h-px bg-white/[0.06]" />
                  <span className="text-xs text-slate-600">{group.length} projects</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                  {group.map((project, i) => (
                    <motion.div key={project.title} {...fadeUp(i * 0.08)} className="flex">
                      <ProjectCard {...project} />
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            );
          }
        )}
      </div>
    </main>
  );
}
