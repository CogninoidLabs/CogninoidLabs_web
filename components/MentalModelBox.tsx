import { Brain } from "lucide-react";

interface MentalModelBoxProps {
  title?: string;
  children: React.ReactNode;
}

export default function MentalModelBox({
  title = "Mental Model",
  children,
}: MentalModelBoxProps) {
  return (
    <div className="my-6 relative bg-blue-950/30 border border-blue-500/25 rounded-2xl p-6 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-blue-500/50 via-cyan-500/50 to-transparent" />
      <div className="flex items-center gap-2.5 mb-3">
        <div className="w-7 h-7 rounded-lg bg-blue-500/15 border border-blue-500/25 flex items-center justify-center flex-shrink-0">
          <Brain className="w-3.5 h-3.5 text-blue-400" />
        </div>
        <span className="text-[11px] font-semibold uppercase tracking-widest text-blue-400">{title}</span>
      </div>
      <div className="text-slate-300 text-sm leading-relaxed [&>p]:mb-3 [&>p:last-child]:mb-0">
        {children}
      </div>
    </div>
  );
}
