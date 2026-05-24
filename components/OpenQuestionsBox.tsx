import React from "react";
import { HelpCircle } from "lucide-react";

export default function OpenQuestionsBox({ children, title = "Open Questions" }: {
  children: React.ReactNode;
  title?: string;
}) {
  return (
    <div className="my-8 bg-[#07070f] border border-indigo-500/20 rounded-2xl p-6 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-indigo-500/40 via-violet-500/20 to-transparent" />
      <div className="flex items-center gap-2 mb-4">
        <HelpCircle className="w-4 h-4 text-indigo-400 flex-shrink-0" />
        <p className="text-[11px] font-semibold uppercase tracking-widest text-indigo-400">{title}</p>
      </div>
      <div className="text-slate-400 text-[14px] leading-relaxed [&_ul]:space-y-2 [&_ul]:list-none [&_li]:flex [&_li]:gap-2 [&_li]:before:content-['?'] [&_li]:before:text-indigo-500/60 [&_li]:before:flex-shrink-0 [&_li]:before:font-bold">
        {children}
      </div>
    </div>
  );
}
