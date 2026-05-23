"use client";

import { motion } from "framer-motion";
import { Cpu, Layers, Activity, Wrench, Zap, Camera, CircuitBoard, Bot } from "lucide-react";

const builds = [
  {
    name: "Adeept Modular Arm v1",
    category: "Robotic Arm",
    status: "in-progress",
    statusLabel: "In Progress",
    description:
      "A 6-axis robotic arm based on the Adeept ADA031 platform, modified for AI-driven control experiments. Firmware in C++/Arduino; Python control API in development. Integrated into the Cogninoid device ecosystem.",
    tech: ["Arduino", "Python", "Servo Control", "ROS", "6-DOF"],
    icon: Bot,
    highlight: "First hardware platform integrated into the MEIDLab AI agent system.",
  },
  {
    name: "FDM Robotic Gripper Mk1",
    category: "End Effector",
    status: "in-progress",
    statusLabel: "In Progress",
    description:
      "A 3D-printed adaptive gripper designed for the Adeept arm. Uses a rack-and-pinion mechanism driven by a servo, with a force-sensitive resistor for grasp detection. Designed parametrically in Fusion 360.",
    tech: ["FDM Printing", "Fusion 360", "Force Sensing", "Servo"],
    icon: Layers,
    highlight: "Fully parametric design — any jaw width or finger length can be regenerated in minutes.",
  },
  {
    name: "Sensor Fusion Node",
    category: "Sensing",
    status: "planned",
    statusLabel: "Planned",
    description:
      "A lightweight embedded module combining IMU, force/torque, and proximity sensors into a unified ROS node. Designed to be strapped to any robot link for real-time state monitoring.",
    tech: ["ROS 2", "IMU", "I2C", "Raspberry Pi", "C++"],
    icon: Activity,
    highlight: "Modular hardware design — swappable sensor payloads without firmware changes.",
  },
  {
    name: "3D Print Farm Controller",
    category: "Lab Infrastructure",
    status: "in-progress",
    statusLabel: "In Progress",
    description:
      "A Python-based orchestration system for managing multiple FDM 3D printers in a small lab setting — queue management, failure detection, and print job logging.",
    tech: ["Python", "OctoPrint API", "SQLite", "FastAPI"],
    icon: CircuitBoard,
    highlight: "Reduces manual monitoring overhead for long print jobs by 80%.",
  },
  {
    name: "High-Speed Vision Module",
    category: "Sensing",
    status: "planned",
    statusLabel: "Planned",
    description:
      "A compact vision module using a global-shutter camera for real-time object detection and pose estimation in robotic manipulation tasks. Designed to mount to any standard robot wrist.",
    tech: ["OpenCV", "YOLOv8", "GigE Vision", "Embedded GPU"],
    icon: Camera,
    highlight: "Global shutter eliminates motion blur artifacts during fast arm movements.",
  },
  {
    name: "Autonomous Lab Bench",
    category: "Experimental Platform",
    status: "planned",
    statusLabel: "Planned",
    description:
      "A self-contained tabletop platform where an AI agent can autonomously run small-scale physical experiments — moving samples, actuating valves, measuring properties, and logging results.",
    tech: ["Robotics", "Microfluidics", "AI Planning", "Computer Vision"],
    icon: Zap,
    highlight: "Designed to run overnight experiments without human supervision.",
  },
  {
    name: "Rapid Prototyping Jig Kit",
    category: "3D Printing",
    status: "in-progress",
    statusLabel: "In Progress",
    description:
      "A library of parametric jig and fixture designs for common lab tasks: PCB holders, sensor mounts, cable guides, and alignment tools. Generated via OpenSCAD with configurable parameters.",
    tech: ["OpenSCAD", "FDM", "PLA/PETG", "Parametric CAD"],
    icon: Wrench,
    highlight: "Reduces custom fixture design time from hours to minutes.",
  },
  {
    name: "Embedded AI Inference Node",
    category: "AI Hardware",
    status: "planned",
    statusLabel: "Planned",
    description:
      "A compact compute module based on Raspberry Pi + Hailo-8 accelerator, designed to run neural network inference at the robot edge — decision latency under 20ms.",
    tech: ["Hailo-8", "ONNX", "Raspberry Pi", "TensorRT"],
    icon: Cpu,
    highlight: "Edge inference eliminates cloud round-trip latency for real-time control tasks.",
  },
];

const statusConfig: Record<string, { dot: string; text: string; bg: string; border: string }> = {
  "in-progress": {
    dot: "bg-cyan-400 animate-pulse",
    text: "text-cyan-400",
    bg: "bg-cyan-500/10",
    border: "border-cyan-500/25",
  },
  planned: {
    dot: "bg-slate-400",
    text: "text-slate-400",
    bg: "bg-slate-500/10",
    border: "border-slate-500/20",
  },
  complete: {
    dot: "bg-green-400",
    text: "text-green-400",
    bg: "bg-green-500/10",
    border: "border-green-500/25",
  },
};

function fadeUp(delay = 0) {
  return {
    initial: { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6, delay },
  };
}

export default function BuildsPage() {
  return (
    <main className="relative pt-24 pb-32">
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-blue-600/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div {...fadeUp()} className="mb-16">
          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-cyan-400 mb-3">
            Builds
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-5">
            Hardware & physical systems
          </h1>
          <p className="text-slate-400 max-w-2xl text-lg leading-relaxed">
            Real machines, real sensors, real feedback. Cogninoid Labs builds hardware that can be touched,
            measured, and improved — not just simulated.
          </p>
        </motion.div>

        {/* Stats bar */}
        <motion.div
          {...fadeUp(0.1)}
          className="flex flex-wrap gap-6 mb-16 p-6 bg-white/[0.04] border border-white/[0.07] rounded-2xl"
        >
          {[
            { value: "3", label: "In progress" },
            { value: "5", label: "Planned" },
            { value: "8", label: "Total builds" },
            { value: "FDM + SLA", label: "Print methods" },
          ].map((stat) => (
            <div key={stat.label} className="flex flex-col">
              <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                {stat.value}
              </span>
              <span className="text-xs text-slate-500 mt-0.5">{stat.label}</span>
            </div>
          ))}
        </motion.div>

        {/* Builds list */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {builds.map((build, i) => {
            const Icon = build.icon;
            const s = statusConfig[build.status] || statusConfig["planned"];
            return (
              <motion.div
                key={build.name}
                {...fadeUp(i * 0.07)}
                className="group bg-white/[0.04] border border-white/[0.08] rounded-2xl p-7 hover:border-cyan-500/25 hover:bg-white/[0.06] transition-all duration-300 flex flex-col gap-4"
              >
                {/* Header */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-600/20 border border-cyan-500/20 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-5 h-5 text-cyan-400" strokeWidth={1.75} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 flex-wrap mb-1">
                      <h3 className="text-white font-semibold text-base">{build.name}</h3>
                      <span className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium ${s.text} ${s.bg} border ${s.border}`}>
                        <span className={`w-1.5 h-1.5 rounded-full ${s.dot}`} />
                        {build.statusLabel}
                      </span>
                    </div>
                    <span className="text-xs text-slate-600 uppercase tracking-wide">{build.category}</span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-slate-400 text-sm leading-relaxed">{build.description}</p>

                {/* Highlight */}
                <div className="bg-white/[0.03] border border-white/[0.05] rounded-xl p-3.5">
                  <p className="text-xs text-cyan-400/80 leading-relaxed">
                    ✦ {build.highlight}
                  </p>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5">
                  {build.tech.map((t) => (
                    <span key={t} className="text-xs px-2 py-0.5 rounded-md bg-white/[0.05] border border-white/[0.06] text-slate-500">
                      {t}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </main>
  );
}
