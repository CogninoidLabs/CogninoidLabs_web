import { getAll } from "@/lib/mdx";
import Link from "next/link";
import { ArrowRight, Cpu } from "lucide-react";
import DifficultyBadge from "@/components/DifficultyBadge";

const hardwareTopics = [
  { slug: "voltage-current-resistance", label: "Voltage, Current, Resistance" },
  { slug: "power-and-ground", label: "Power and Ground" },
  { slug: "breadboard", label: "Breadboard" },
  { slug: "arduino", label: "Arduino" },
  { slug: "esp32", label: "ESP32" },
  { slug: "raspberry-pi-pico", label: "Raspberry Pi Pico" },
  { slug: "servo-motor", label: "Servo Motor" },
  { slug: "dc-motor", label: "DC Motor" },
  { slug: "stepper-motor", label: "Stepper Motor" },
  { slug: "solenoid", label: "Solenoid" },
  { slug: "motor-driver", label: "Motor Driver" },
  { slug: "load-cell-hx711", label: "Load Cell + HX711" },
  { slug: "piezo-sensor", label: "Piezo Sensor" },
  { slug: "imu-sensor", label: "IMU Sensor" },
  { slug: "picoscope", label: "PicoScope" },
  { slug: "multimeter", label: "Multimeter" },
  { slug: "common-ground", label: "Common Ground" },
  { slug: "component-to-intelligence-map", label: "Component-to-Intelligence Map" },
];

export default function HardwarePage() {
  const pages = getAll("hardware");
  const slugSet = new Set(pages.map((p) => p.slug));
  const pageMap = Object.fromEntries(pages.map((p) => [p.slug, p]));

  return (
    <main className="min-h-screen pt-24 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="max-w-3xl mb-14">
          <p className="section-label">Hardware Atlas</p>
          <h1 className="text-4xl sm:text-5xl font-bold text-white tracking-tight mb-4">
            Electronics, explained for<br />
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              builders and engineers.
            </span>
          </h1>
          <p className="text-slate-400 text-lg leading-relaxed">
            Every hardware page connects components to their role in physical AI and robotics systems.
            Specs, pinouts, example code, and common mistakes — all in one place.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {hardwareTopics.map(({ slug, label }) => {
            const page = pageMap[slug];
            const isAvailable = slugSet.has(slug);

            if (!isAvailable) {
              return (
                <div key={slug} className="flex flex-col bg-[#07070f] border border-white/[0.05] rounded-2xl p-5 opacity-40">
                  <p className="text-slate-500 text-sm font-medium">{label}</p>
                  <p className="text-[10px] text-slate-700 font-mono mt-2">In progress</p>
                </div>
              );
            }

            return (
              <Link
                key={slug}
                href={`/hardware/${slug}`}
                className="group flex flex-col bg-[#07070f] border border-white/[0.07] rounded-2xl p-5 hover:border-cyan-500/25 hover:-translate-y-0.5 transition-all relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-cyan-500/0 via-cyan-500/40 to-cyan-500/0 opacity-0 group-hover:opacity-100 transition-opacity" />
                <h2 className="text-white font-semibold text-sm mb-1.5 group-hover:text-cyan-400 transition-colors">
                  {page.frontmatter.title}
                </h2>
                {page.frontmatter.description && (
                  <p className="text-slate-600 text-[12px] leading-relaxed flex-1 line-clamp-2 mb-3">
                    {page.frontmatter.description}
                  </p>
                )}
                <div className="flex items-center gap-2">
                  {page.frontmatter.difficulty && <DifficultyBadge level={page.frontmatter.difficulty} />}
                  <ArrowRight className="ml-auto w-3 h-3 text-slate-700 group-hover:text-cyan-400 transition-colors" />
                </div>
              </Link>
            );
          })}
        </div>

        <div className="mt-12 p-6 bg-[#07070f] border border-white/[0.05] rounded-2xl flex items-center gap-4">
          <Cpu className="w-5 h-5 text-cyan-400 flex-shrink-0" />
          <p className="text-slate-500 text-sm">
            Hardware pages are written as each component is used in active Cogninoid Labs builds.
          </p>
        </div>
      </div>
    </main>
  );
}
