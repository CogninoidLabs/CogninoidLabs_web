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
}: FeatureCardProps) {
  return (
    <div className="group relative flex flex-col bg-[#07070f] border border-white/[0.07] rounded-2xl p-7 hover:border-white/[0.15] hover:-translate-y-1 transition-all duration-300 overflow-hidden cursor-default">

      {/* Top gradient accent line — visible on hover */}
      <div className={`absolute inset-x-0 top-0 h-px bg-gradient-to-r ${gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

      {/* Ambient corner glow */}
      <div className={`absolute -top-16 -right-16 w-40 h-40 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-[0.07] rounded-full blur-3xl transition-opacity duration-700 pointer-events-none`} />

      <div className="relative">
        {/* Icon */}
        <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${gradient} flex items-center justify-center mb-5 shadow-xl shadow-black/40`}>
          <Icon className="w-[18px] h-[18px] text-white" strokeWidth={1.75} />
        </div>

        <h3 className="text-[15px] font-semibold text-white mb-2.5 tracking-tight leading-snug">
          {title}
        </h3>
        <p className="text-[13px] text-slate-500 leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
}
