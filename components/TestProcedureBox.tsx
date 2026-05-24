import React from "react";
import { FlaskConical, CheckCircle2 } from "lucide-react";

export function TestStep({ step, children }: { step: number; children: React.ReactNode }) {
  return (
    <div className="flex gap-3 items-start">
      <div className="w-6 h-6 rounded-full bg-green-500/15 border border-green-500/30 text-green-400 text-[11px] font-bold font-mono flex items-center justify-center flex-shrink-0 mt-0.5">
        {step}
      </div>
      <div className="text-slate-400 text-[14px] leading-relaxed flex-1">{children}</div>
    </div>
  );
}

export default function TestProcedureBox({ children, title = "Test Procedure" }: {
  children: React.ReactNode;
  title?: string;
}) {
  return (
    <div className="my-6 bg-[#07070f] border border-green-500/20 rounded-2xl p-6 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-green-500/40 via-teal-500/20 to-transparent" />
      <div className="flex items-center gap-2 mb-5">
        <FlaskConical className="w-4 h-4 text-green-400 flex-shrink-0" />
        <p className="text-[11px] font-semibold uppercase tracking-widest text-green-400">{title}</p>
      </div>
      <div className="flex flex-col gap-3">{children}</div>
    </div>
  );
}
