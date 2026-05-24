import React from "react";
import { BookOpen } from "lucide-react";

export default function ResourceBox({ children, title = "Key References" }: {
  children: React.ReactNode;
  title?: string;
}) {
  return (
    <div className="my-6 bg-[#07070f] border border-white/[0.07] rounded-2xl p-6">
      <div className="flex items-center gap-2 mb-5">
        <BookOpen className="w-4 h-4 text-slate-500 flex-shrink-0" />
        <p className="text-[11px] font-semibold uppercase tracking-widest text-slate-500">{title}</p>
      </div>
      <div className="text-slate-500 text-[13px] leading-loose space-y-3 [&_strong]:text-slate-300 [&_em]:text-slate-400 [&_a]:text-cyan-400 [&_a:hover]:text-cyan-300 [&_a]:transition-colors [&_p]:mb-0">
        {children}
      </div>
    </div>
  );
}
