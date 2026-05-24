import { Wrench } from "lucide-react";

interface EngineeringMindsetBoxProps {
  title?: string;
  children: React.ReactNode;
}

export default function EngineeringMindsetBox({
  title = "Engineering Mindset",
  children,
}: EngineeringMindsetBoxProps) {
  return (
    <div className="my-6 bg-cyan-950/25 border border-cyan-500/20 rounded-2xl p-6 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-cyan-500/50 to-transparent" />
      <div className="flex items-center gap-2.5 mb-3">
        <div className="w-7 h-7 rounded-lg bg-cyan-500/15 border border-cyan-500/25 flex items-center justify-center flex-shrink-0">
          <Wrench className="w-3.5 h-3.5 text-cyan-400" />
        </div>
        <span className="text-[11px] font-semibold uppercase tracking-widest text-cyan-400">{title}</span>
      </div>
      <div className="text-slate-300 text-sm leading-relaxed [&>p]:mb-3 [&>p:last-child]:mb-0">
        {children}
      </div>
    </div>
  );
}
