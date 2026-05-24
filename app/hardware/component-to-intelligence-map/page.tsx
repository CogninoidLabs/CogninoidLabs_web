import Link from "next/link";
import { ArrowRight, ArrowLeft, Brain, Eye, Hand, Cpu, Zap, Radio, CircuitBoard, BookOpen } from "lucide-react";

const mappings = [
  {
    layer: "Perception",
    aiRole: "Sensory input to the policy",
    color: "green",
    borderColor: "border-green-500/20",
    headerColor: "text-green-400",
    badgeColor: "bg-green-500/10 text-green-400",
    icon: Eye,
    description: "Sensors convert physical phenomena into data that an AI policy can reason about. Without sensors, the robot is operating open-loop — blind to the state of the world.",
    components: [
      { name: "IMU Sensor (MPU-6050)", role: "Orientation, acceleration, angular velocity — the robot's vestibular system", href: "/hardware/imu-sensor" },
      { name: "Ultrasonic Sensor", role: "Distance measurement — obstacle detection for navigation", href: "/hardware/sensors" },
      { name: "Load Cell + HX711", role: "Force and weight — contact detection, payload measurement", href: "/hardware/sensors" },
      { name: "Rotary Encoder", role: "Motor shaft position and velocity — proprioception for closed-loop control", href: "/hardware/sensors" },
      { name: "Camera (ESP32-CAM)", role: "Visual input — object detection, visual servoing, scene understanding", href: "/hardware/microcontrollers" },
    ],
  },
  {
    layer: "Processing",
    aiRole: "Policy computation and state estimation",
    color: "cyan",
    borderColor: "border-cyan-500/20",
    headerColor: "text-cyan-400",
    badgeColor: "bg-cyan-500/10 text-cyan-400",
    icon: Brain,
    description: "Microcontrollers run the control policy — translating sensor observations into actuator commands. The more capable the MCU, the more sophisticated the policy it can execute locally.",
    components: [
      { name: "Arduino Uno R3", role: "PID control loops, sensor reading, servo PWM generation — simple deterministic policies", href: "/hardware/arduino" },
      { name: "ESP32 DevKit V1", role: "Dual-core: real-time control on Core 1, Wi-Fi comms on Core 0. TFLite Micro for edge inference.", href: "/hardware/esp32" },
      { name: "Raspberry Pi (external)", role: "Full Linux: PyTorch inference, OpenCV vision, ROS nodes — the brain of complex systems", href: "/hardware/microcontrollers" },
    ],
  },
  {
    layer: "Action",
    aiRole: "Policy output execution",
    color: "orange",
    borderColor: "border-orange-500/20",
    headerColor: "text-orange-400",
    badgeColor: "bg-orange-500/10 text-orange-400",
    icon: Hand,
    description: "Actuators translate policy outputs (target angles, velocity commands, force setpoints) into physical motion. The fidelity of the action layer determines how precisely a robot can execute a learned behaviour.",
    components: [
      { name: "Servo Motor (SG90)", role: "Joint angle execution — each DOF in a robot arm maps to one servo position command", href: "/hardware/servo-motor" },
      { name: "DC Motor + Motor Driver", role: "Wheel velocity execution — differential drive translates velocity commands to left/right PWM", href: "/hardware/dc-motor" },
      { name: "Stepper Motor", role: "Open-loop position control — linear actuators, CNC stages where encoder is unaffordable", href: "/hardware/actuators" },
      { name: "L298N Motor Driver", role: "Current amplifier — bridges MCU logic (40 mA) to motor current demand (1–3 A)", href: "/hardware/motor-driver" },
    ],
  },
  {
    layer: "Communication",
    aiRole: "Data collection, remote control, multi-agent coordination",
    color: "violet",
    borderColor: "border-violet-500/20",
    headerColor: "text-violet-400",
    badgeColor: "bg-violet-500/10 text-violet-400",
    icon: Radio,
    description: "Communication components connect the embedded system to the broader AI pipeline — streaming data for learning, receiving policy updates, and coordinating multi-robot systems.",
    components: [
      { name: "ESP32 Wi-Fi", role: "HTTP/MQTT: stream sensor data to Python training scripts; receive policy commands", href: "/hardware/esp32" },
      { name: "ESP32 BLE", role: "Bluetooth HID for wireless teleoperation; BLE beacons for indoor positioning", href: "/hardware/esp32" },
      { name: "Arduino Serial (USB)", role: "Bridge between a Python AI process on a laptop and Arduino actuator control", href: "/hardware/arduino" },
      { name: "I2C Bus", role: "Connect multiple sensors (IMU, ADC, display) to one MCU with two wires", href: "/hardware/foundations" },
    ],
  },
  {
    layer: "Power",
    aiRole: "Energy budget and system reliability",
    color: "amber",
    borderColor: "border-amber-500/20",
    headerColor: "text-amber-400",
    badgeColor: "bg-amber-500/10 text-amber-400",
    icon: Zap,
    description: "Power components determine how long a robot runs, how stable its logic operates, and whether actuators have enough current to execute the commanded actions without browning out the MCU.",
    components: [
      { name: "LiPo Battery", role: "Energy source — cell voltage, capacity (mAh), and C-rating determine robot runtime and peak current", href: "/hardware/foundations" },
      { name: "Voltage Regulator (LDO)", role: "Stable 3.3V or 5V for logic — prevents MCU resets when motor current spikes", href: "/hardware/components" },
      { name: "Capacitors (decoupling)", role: "100nF across VCC/GND absorbs high-frequency noise from motors — prevents ADC corruption", href: "/hardware/components" },
      { name: "Flyback Diodes", role: "Protect MCU from back-EMF voltage spikes when motors are switched off", href: "/hardware/components" },
    ],
  },
];

const mindMapLinks = [
  { from: "IMU Sensor", to: "Complementary Filter", to2: "Kalman Filter", href: "/atlas/robotics-and-sensors" },
  { from: "Encoder", to: "PID Velocity Control", to2: "Dead Reckoning", href: "/hardware/sensors" },
  { from: "Servo Motor", to: "Inverse Kinematics", to2: "Trajectory Planning", href: "/atlas/robotics-and-sensors" },
  { from: "ESP32 Wi-Fi", to: "Imitation Learning Data", to2: "MQTT Policy Commands", href: "/hardware/esp32" },
];

export default function ComponentIntelligenceMapPage() {
  return (
    <main className="min-h-screen pt-24 pb-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        <Link href="/hardware" className="inline-flex items-center gap-1.5 text-slate-600 hover:text-slate-400 text-sm mb-8 transition-colors">
          <ArrowLeft className="w-3.5 h-3.5" /> Hardware Atlas
        </Link>

        <div className="mb-12">
          <div className="flex items-center gap-2 mb-3">
            <CircuitBoard className="w-4 h-4 text-cyan-400" />
            <p className="text-[11px] font-semibold uppercase tracking-widest text-cyan-400">Hardware Atlas · Special</p>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-4">
            Component-to-Intelligence Map
          </h1>
          <p className="text-slate-400 text-base leading-relaxed max-w-2xl">
            Every hardware component plays a specific role in the AI pipeline. This map shows how electronics map to
            the perception–processing–action loop that every embodied AI system must implement.
          </p>
        </div>

        {/* Pipeline overview strip */}
        <div className="flex flex-wrap gap-0 mb-12 overflow-hidden rounded-2xl border border-white/[0.07]">
          {[
            { label: "Sense", sub: "Sensors", color: "bg-green-500/10 text-green-400", icon: Eye },
            { label: "→", sub: "", color: "bg-white/[0.02] text-slate-600", icon: null },
            { label: "Process", sub: "MCU / Edge", color: "bg-cyan-500/10 text-cyan-400", icon: Brain },
            { label: "→", sub: "", color: "bg-white/[0.02] text-slate-600", icon: null },
            { label: "Act", sub: "Actuators", color: "bg-orange-500/10 text-orange-400", icon: Hand },
            { label: "→", sub: "", color: "bg-white/[0.02] text-slate-600", icon: null },
            { label: "Communicate", sub: "Wi-Fi / Serial", color: "bg-violet-500/10 text-violet-400", icon: Radio },
            { label: "→", sub: "", color: "bg-white/[0.02] text-slate-600", icon: null },
            { label: "Power", sub: "Battery / PSU", color: "bg-amber-500/10 text-amber-400", icon: Zap },
          ].map(({ label, sub, color, icon: Icon }, i) => (
            <div key={i} className={`flex flex-col items-center justify-center px-4 py-4 flex-1 min-w-0 ${color}`}>
              {Icon && <Icon className="w-4 h-4 mb-1 opacity-80" />}
              <p className="text-xs font-semibold whitespace-nowrap">{label}</p>
              {sub && <p className="text-[10px] opacity-60 whitespace-nowrap">{sub}</p>}
            </div>
          ))}
        </div>

        {/* Layer cards */}
        <div className="space-y-8 mb-16">
          {mappings.map(({ layer, aiRole, color, borderColor, headerColor, badgeColor, icon: Icon, description, components }) => (
            <div key={layer} className={`bg-[#07070f] border ${borderColor} rounded-2xl p-6 relative overflow-hidden`}>
              <div className={`absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-current/30 to-transparent`} />
              <div className="flex flex-col sm:flex-row sm:items-start gap-4 mb-5">
                <div className={`w-10 h-10 rounded-xl bg-white/[0.03] border border-white/[0.07] flex items-center justify-center flex-shrink-0`}>
                  <Icon className={`w-5 h-5 ${headerColor}`} />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <h2 className={`text-white font-bold text-lg`}>{layer}</h2>
                    <span className={`text-[10px] px-2 py-0.5 rounded-full font-medium ${badgeColor}`}>{aiRole}</span>
                  </div>
                  <p className="text-slate-500 text-sm leading-relaxed">{description}</p>
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {components.map(({ name, role, href }) => (
                  <Link
                    key={name}
                    href={href}
                    className="group flex items-start gap-3 p-3.5 bg-white/[0.02] border border-white/[0.05] rounded-xl hover:border-white/[0.12] hover:bg-white/[0.04] transition-all"
                  >
                    <div>
                      <p className={`text-white text-sm font-medium group-hover:${headerColor} transition-colors mb-0.5`}>{name}</p>
                      <p className="text-slate-600 text-xs leading-relaxed">{role}</p>
                    </div>
                    <ArrowRight className="w-3.5 h-3.5 text-slate-700 group-hover:text-slate-400 flex-shrink-0 mt-0.5 ml-auto" />
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Full system example */}
        <div className="mb-12 p-6 bg-gradient-to-br from-cyan-500/5 to-violet-500/5 border border-cyan-500/20 rounded-2xl">
          <div className="flex items-center gap-2 mb-4">
            <Cpu className="w-4 h-4 text-cyan-400" />
            <p className="text-[11px] font-semibold uppercase tracking-widest text-cyan-400">Full System Example — 2-DOF Robotic Arm</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
            {[
              { label: "Sensors", items: ["MPU-6050 IMU (wrist)", "2× Rotary encoders (joints)"] },
              { label: "MCU", items: ["Arduino Uno R3", "Runs PID at 50 Hz"] },
              { label: "Actuators", items: ["2× SG90 servo motors", "1× DC gripper motor"] },
              { label: "Driver", items: ["L298N for gripper DC motor", "Servo library for joints"] },
              { label: "Comms", items: ["USB Serial to Python", "Streams joint states at 20 Hz"] },
            ].map(({ label, items }) => (
              <div key={label} className="bg-[#07070f] border border-white/[0.07] rounded-xl p-4">
                <p className="text-cyan-400 text-[10px] font-semibold uppercase tracking-wider mb-2">{label}</p>
                <ul className="space-y-1">
                  {items.map((item) => (
                    <li key={item} className="text-slate-500 text-xs">{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Learn more */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Link href="/atlas/robotics-and-sensors" className="group flex items-center justify-between gap-4 p-5 bg-[#07070f] border border-white/[0.07] hover:border-cyan-500/25 rounded-2xl transition-all">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-widest text-cyan-400 mb-1">Atlas</p>
              <p className="text-white text-sm font-medium group-hover:text-cyan-400 transition-colors">Robotics and Sensors</p>
              <p className="text-slate-600 text-xs mt-0.5">The science behind sensor fusion, SLAM, and control theory</p>
            </div>
            <ArrowRight className="w-4 h-4 text-slate-600 group-hover:text-cyan-400 flex-shrink-0 transition-colors" />
          </Link>
          <Link href="/atlas/embodied-ai" className="group flex items-center justify-between gap-4 p-5 bg-[#07070f] border border-white/[0.07] hover:border-cyan-500/25 rounded-2xl transition-all">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-widest text-cyan-400 mb-1">Atlas</p>
              <p className="text-white text-sm font-medium group-hover:text-cyan-400 transition-colors">Embodied AI</p>
              <p className="text-slate-600 text-xs mt-0.5">Why physical embodiment matters for intelligence</p>
            </div>
            <ArrowRight className="w-4 h-4 text-slate-600 group-hover:text-cyan-400 flex-shrink-0 transition-colors" />
          </Link>
        </div>

      </div>
    </main>
  );
}
