import { Zap } from "lucide-react";
import React from "react";

export function WireRow({ from, to, color, note }: {
  from: string;
  to: string;
  color?: string;
  note?: string;
}) {
  return (
    <div className="flex items-center gap-3 p-2.5 bg-white/[0.02] rounded-lg">
      <span className="text-sm font-mono text-slate-300 flex-1">{from}</span>
      <div className="flex items-center gap-1">
        <div className={`w-12 h-0.5 rounded-full ${color ?? "bg-cyan-500"}`} />
        <span className="text-slate-600">→</span>
        <div className={`w-12 h-0.5 rounded-full ${color ?? "bg-cyan-500"}`} />
      </div>
      <span className="text-sm font-mono text-slate-300 flex-1 text-right">{to}</span>
      {note && (
        <span className="text-[11px] text-slate-600 pl-2 border-l border-white/[0.06]">{note}</span>
      )}
    </div>
  );
}

export default function WiringBox({ title = "Wiring Diagram", children }: {
  title?: string;
  children: React.ReactNode;
}) {
  const rows = React.Children.toArray(children).filter(Boolean);
  if (!rows.length) return null;
  return (
    <div className="my-6 bg-[#07070f] border border-white/[0.07] rounded-2xl overflow-hidden">
      <div className="px-5 py-3 border-b border-white/[0.05] flex items-center gap-2">
        <Zap className="w-3.5 h-3.5 text-yellow-500" />
        <span className="text-[11px] font-semibold uppercase tracking-widest text-slate-500">{title}</span>
      </div>
      <div className="p-5 space-y-2">{rows}</div>
    </div>
  );
}
