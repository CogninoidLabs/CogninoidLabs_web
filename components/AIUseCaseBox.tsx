import React from "react";
import { Bot } from "lucide-react";

export default function AIUseCaseBox({ children, title = "Robotics & AI Use Cases" }: {
  children: React.ReactNode;
  title?: string;
}) {
  return (
    <div className="my-6 bg-gradient-to-br from-cyan-500/5 to-violet-500/5 border border-cyan-500/20 rounded-2xl p-6 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-cyan-500/40 via-violet-500/20 to-transparent" />
      <div className="flex items-center gap-2 mb-4">
        <Bot className="w-4 h-4 text-cyan-400 flex-shrink-0" />
        <p className="text-[11px] font-semibold uppercase tracking-widest text-cyan-400">{title}</p>
      </div>
      <div className="text-slate-400 text-[14px] leading-relaxed [&_ul]:space-y-2 [&_ul]:list-none [&_li]:flex [&_li]:gap-2 [&_li]:before:content-['→'] [&_li]:before:text-cyan-500/60 [&_li]:before:flex-shrink-0 [&_strong]:text-white">
        {children}
      </div>
    </div>
  );
}
