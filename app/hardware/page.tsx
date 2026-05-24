import Link from "next/link";
import { ArrowRight, Cpu, Radio, Zap, CircuitBoard, BookOpen, Wrench, Map, Route } from "lucide-react";

const categories = [
  {
    slug: "foundations",
    label: "Electrical Foundations",
    description: "Ohm's Law, power rails, digital vs analog, PWM, serial protocols. Start here if circuits are new to you.",
    color: "blue",
    icon: BookOpen,
    count: 6,
    accent: "border-blue-500/20 hover:border-blue-500/40",
    iconColor: "text-blue-400",
    badge: "bg-blue-500/10 text-blue-400",
    glow: "from-blue-500/0 via-blue-500/30 to-blue-500/0",
  },
  {
    slug: "microcontrollers",
    label: "Microcontrollers",
    description: "Arduino, ESP32, Raspberry Pi Pico — the brains that run your code and control the physical world.",
    color: "cyan",
    icon: Cpu,
    count: 3,
    accent: "border-cyan-500/20 hover:border-cyan-500/40",
    iconColor: "text-cyan-400",
    badge: "bg-cyan-500/10 text-cyan-400",
    glow: "from-cyan-500/0 via-cyan-500/30 to-cyan-500/0",
  },
  {
    slug: "sensors",
    label: "Sensors",
    description: "IMU, ultrasonic, load cell, encoder — the perceptual organs that feed data into your AI pipeline.",
    color: "green",
    icon: Radio,
    count: 6,
    accent: "border-green-500/20 hover:border-green-500/40",
    iconColor: "text-green-400",
    badge: "bg-green-500/10 text-green-400",
    glow: "from-green-500/0 via-green-500/30 to-green-500/0",
  },
  {
    slug: "actuators",
    label: "Actuators",
    description: "Servo motors, DC motors, stepper motors, solenoids — the muscles that move your robot.",
    color: "orange",
    icon: Zap,
    count: 4,
    accent: "border-orange-500/20 hover:border-orange-500/40",
    iconColor: "text-orange-400",
    badge: "bg-orange-500/10 text-orange-400",
    glow: "from-orange-500/0 via-orange-500/30 to-orange-500/0",
  },
  {
    slug: "components",
    label: "Components",
    description: "Motor drivers, level shifters, resistors, capacitors — the interface layer between logic and power.",
    color: "violet",
    icon: CircuitBoard,
    count: 6,
    accent: "border-violet-500/20 hover:border-violet-500/40",
    iconColor: "text-violet-400",
    badge: "bg-violet-500/10 text-violet-400",
    glow: "from-violet-500/0 via-violet-500/30 to-violet-500/0",
  },
  {
    slug: "tools",
    label: "Measurement Tools",
    description: "Multimeter, oscilloscope, logic analyser — the instruments that turn guessing into knowing.",
    color: "amber",
    icon: Wrench,
    count: 4,
    accent: "border-amber-500/20 hover:border-amber-500/40",
    iconColor: "text-amber-400",
    badge: "bg-amber-500/10 text-amber-400",
    glow: "from-amber-500/0 via-amber-500/30 to-amber-500/0",
  },
];

const learningPaths = [
  {
    title: "Absolute Beginner",
    subtitle: "Zero to first circuit",
    steps: ["Electrical Foundations", "Arduino", "Breadboard + LED", "Servo Motor"],
    color: "blue",
    border: "border-blue-500/20",
    badge: "bg-blue-500/10 text-blue-400",
  },
  {
    title: "Sensors for AI",
    subtitle: "Build a perception layer",
    steps: ["Voltage & Current", "Arduino", "IMU Sensor", "Sensor Fusion basics"],
    color: "green",
    border: "border-green-500/20",
    badge: "bg-green-500/10 text-green-400",
  },
  {
    title: "Robotics Actuation",
    subtitle: "Build moving systems",
    steps: ["PWM & Motor Driver", "DC Motor", "Servo Motor", "Arduino PID control"],
    color: "orange",
    border: "border-orange-500/20",
    badge: "bg-orange-500/10 text-orange-400",
  },
  {
    title: "Physical AI Testbed",
    subtitle: "Full sensor-to-action loop",
    steps: ["ESP32 Wi-Fi", "IMU + Encoder fusion", "Motor Driver + PID", "Serial bridge to Python AI"],
    color: "cyan",
    border: "border-cyan-500/20",
    badge: "bg-cyan-500/10 text-cyan-400",
  },
];

export default function HardwarePage() {
  return (
    <main className="min-h-screen pt-24 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="max-w-3xl mb-14">
          <p className="section-label">Hardware Atlas</p>
          <h1 className="text-4xl sm:text-5xl font-bold text-white tracking-tight mb-4">
            Hardware, explained for<br />
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              AI builders.
            </span>
          </h1>
          <p className="text-slate-400 text-lg leading-relaxed">
            Every page connects the physics of electronics to its role in physical AI and robotics systems.
            Realistic diagrams, proper pinouts, working code, and the failure modes that textbooks omit.
          </p>
        </div>

        {/* Category grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-16">
          {categories.map(({ slug, label, description, icon: Icon, count, accent, iconColor, badge, glow }) => (
            <Link
              key={slug}
              href={`/hardware/${slug}`}
              className={`group flex flex-col bg-[#07070f] border ${accent} rounded-2xl p-6 hover:-translate-y-0.5 transition-all relative overflow-hidden`}
            >
              <div className={`absolute top-0 left-0 right-0 h-px bg-gradient-to-r ${glow} opacity-0 group-hover:opacity-100 transition-opacity`} />
              <div className="flex items-start justify-between mb-4">
                <div className={`w-9 h-9 rounded-xl bg-white/[0.04] border border-white/[0.07] flex items-center justify-center`}>
                  <Icon className={`w-4 h-4 ${iconColor}`} />
                </div>
                <span className={`text-[10px] font-mono px-2 py-0.5 rounded-full ${badge}`}>{count} topics</span>
              </div>
              <h2 className="text-white font-semibold text-base mb-2 group-hover:text-white/90 transition-colors">{label}</h2>
              <p className="text-slate-500 text-[13px] leading-relaxed flex-1">{description}</p>
              <div className="flex items-center gap-1 mt-4">
                <span className={`text-xs ${iconColor} opacity-70 group-hover:opacity-100 transition-opacity`}>Explore</span>
                <ArrowRight className={`w-3 h-3 ${iconColor} opacity-70 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all`} />
              </div>
            </Link>
          ))}
        </div>

        {/* Special page — Component to Intelligence Map */}
        <Link
          href="/hardware/component-to-intelligence-map"
          className="group block mb-16 bg-gradient-to-r from-cyan-500/5 via-violet-500/5 to-cyan-500/5 border border-cyan-500/20 hover:border-cyan-500/40 rounded-2xl p-6 relative overflow-hidden transition-all"
        >
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-cyan-500/40 via-violet-500/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
          <div className="flex flex-col sm:flex-row sm:items-center gap-4">
            <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center flex-shrink-0">
              <Map className="w-5 h-5 text-cyan-400" />
            </div>
            <div className="flex-1">
              <h2 className="text-white font-semibold text-base mb-1 group-hover:text-cyan-400 transition-colors">Component-to-Intelligence Map</h2>
              <p className="text-slate-500 text-sm">
                How every hardware component maps to a function in an AI system — Sensors → Perception, Actuators → Action, MCU → Policy execution.
              </p>
            </div>
            <ArrowRight className="w-4 h-4 text-slate-600 group-hover:text-cyan-400 transition-colors flex-shrink-0" />
          </div>
        </Link>

        {/* Learning Paths */}
        <div className="mb-16">
          <div className="flex items-center gap-2 mb-6">
            <Route className="w-4 h-4 text-slate-500" />
            <h2 className="text-white font-bold text-xl">Learning Paths</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {learningPaths.map(({ title, subtitle, steps, border, badge }) => (
              <div key={title} className={`bg-[#07070f] border ${border} rounded-2xl p-5`}>
                <p className={`text-[10px] font-semibold uppercase tracking-widest ${badge.split(" ")[1]} mb-1`}>{subtitle}</p>
                <h3 className="text-white font-semibold text-sm mb-4">{title}</h3>
                <ol className="space-y-2">
                  {steps.map((step, i) => (
                    <li key={step} className="flex items-start gap-2.5">
                      <span className="w-4 h-4 rounded-full bg-white/[0.04] border border-white/[0.08] text-[10px] text-slate-500 font-mono flex items-center justify-center flex-shrink-0 mt-0.5">
                        {i + 1}
                      </span>
                      <span className="text-slate-400 text-[12px] leading-relaxed">{step}</span>
                    </li>
                  ))}
                </ol>
              </div>
            ))}
          </div>
        </div>

        {/* Page format strip */}
        <div className="bg-[#07070f] border border-white/[0.05] rounded-2xl p-6">
          <p className="text-[11px] font-semibold uppercase tracking-widest text-slate-600 mb-4">Every hardware page includes</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
            {[
              "What is it?",
              "Why it matters for AI",
              "Mental model",
              "Working principle",
              "Key parameters",
              "Pinout diagram",
              "Wiring schematic",
              "Working code",
              "Test procedure",
              "Common mistakes",
              "Failure signs",
              "Robotics use cases",
              "Beginner project",
              "Advanced project",
              "Next components",
            ].map((item, i) => (
              <div key={item} className="flex items-center gap-2">
                <span className="text-[10px] font-mono text-cyan-500/40 w-5 flex-shrink-0">{String(i + 1).padStart(2, "0")}</span>
                <span className="text-slate-500 text-[12px]">{item}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </main>
  );
}
