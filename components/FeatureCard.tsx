import type { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  gradient?: string;
  accentColor?: string;
}

export default function FeatureCard({
  icon: Icon,
  title,
  description,
  gradient = "from-cyan-500 to-blue-600",
  accentColor = "cyan",
}: FeatureCardProps) {
  return (
    <div
      className={`group relative bg-white/[0.04] backdrop-blur-sm border border-white/[0.08] rounded-2xl p-6
        hover:border-${accentColor}-500/30 hover:bg-white/[0.07] transition-all duration-300 overflow-hidden`}
    >
      {/* Background glow on hover */}
      <div
        className={`absolute inset-0 rounded-2xl bg-gradient-to-br from-${accentColor}-500/0 to-violet-600/0
          group-hover:from-${accentColor}-500/5 group-hover:to-violet-600/5 transition-all duration-500`}
      />

      {/* Top-right accent dot */}
      <div
        className={`absolute top-4 right-4 w-1.5 h-1.5 rounded-full bg-${accentColor}-400/40
          group-hover:bg-${accentColor}-400/80 group-hover:shadow-[0_0_6px] group-hover:shadow-${accentColor}-400/50
          transition-all duration-300`}
      />

      <div className="relative">
        {/* Icon */}
        <div
          className={`w-11 h-11 rounded-xl bg-gradient-to-br ${gradient} flex items-center justify-center mb-5
            shadow-lg group-hover:scale-110 transition-transform duration-300`}
        >
          <Icon className="w-5 h-5 text-white" strokeWidth={1.75} />
        </div>

        <h3 className="text-white font-semibold text-base mb-2.5">{title}</h3>
        <p className="text-slate-400 text-sm leading-relaxed">{description}</p>
      </div>
    </div>
  );
}
