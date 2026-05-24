import React from "react";
import { AlertOctagon } from "lucide-react";

export default function FailureSignsBox({ children, title = "Failure Signs" }: {
  children: React.ReactNode;
  title?: string;
}) {
  return (
    <div className="my-6 bg-[#07070f] border border-red-500/20 rounded-2xl p-6 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-red-500/40 via-orange-500/20 to-transparent" />
      <div className="flex items-center gap-2 mb-4">
        <AlertOctagon className="w-4 h-4 text-red-400 flex-shrink-0" />
        <p className="text-[11px] font-semibold uppercase tracking-widest text-red-400">{title}</p>
      </div>
      <div className="text-slate-400 text-[14px] leading-relaxed [&_ul]:space-y-2 [&_ul]:list-none [&_li]:flex [&_li]:gap-2 [&_li]:before:content-['!'] [&_li]:before:text-red-500 [&_li]:before:font-bold [&_li]:before:flex-shrink-0 [&_strong]:text-red-300">
        {children}
      </div>
    </div>
  );
}
