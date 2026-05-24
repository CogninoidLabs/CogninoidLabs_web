import { Zap } from "lucide-react";

interface Wire {
  from: string;
  to: string;
  color?: string;
  note?: string;
}

interface WiringBoxProps {
  title?: string;
  wires: Wire[];
}

export default function WiringBox({ title = "Wiring Diagram", wires = [] }: WiringBoxProps) {
  if (!wires.length) return null;
  return (
    <div className="my-6 bg-[#07070f] border border-white/[0.07] rounded-2xl overflow-hidden">
      <div className="px-5 py-3 border-b border-white/[0.05] flex items-center gap-2">
        <Zap className="w-3.5 h-3.5 text-yellow-500" />
        <span className="text-[11px] font-semibold uppercase tracking-widest text-slate-500">{title}</span>
      </div>
      <div className="p-5 space-y-2">
        {wires.map((wire, i) => (
          <div key={i} className="flex items-center gap-3 p-2.5 bg-white/[0.02] rounded-lg">
            <span className="text-sm font-mono text-slate-300 flex-1">{wire.from}</span>
            <div className="flex items-center gap-1">
              <div className={`w-12 h-0.5 rounded-full ${wire.color ?? "bg-cyan-500"}`} />
              <span className="text-slate-600">→</span>
              <div className={`w-12 h-0.5 rounded-full ${wire.color ?? "bg-cyan-500"}`} />
            </div>
            <span className="text-sm font-mono text-slate-300 flex-1 text-right">{wire.to}</span>
            {wire.note && (
              <span className="text-[11px] text-slate-600 pl-2 border-l border-white/[0.06]">{wire.note}</span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
