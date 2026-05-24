import Link from "next/link";
import { ArrowRight } from "lucide-react";
import React from "react";

export function NextStep({ href, label, description }: { href: string; label: string; description?: string }) {
  return (
    <Link
      href={href}
      className="group flex items-center justify-between gap-3 p-3.5 bg-white/[0.03] border border-white/[0.06] rounded-xl hover:border-cyan-500/30 hover:bg-cyan-500/[0.04] transition-all duration-200"
    >
      <div>
        <p className="text-white text-sm font-medium group-hover:text-cyan-400 transition-colors">{label}</p>
        {description && (
          <p className="text-slate-600 text-xs mt-0.5">{description}</p>
        )}
      </div>
      <ArrowRight className="w-3.5 h-3.5 text-slate-600 group-hover:text-cyan-400 group-hover:translate-x-0.5 transition-all flex-shrink-0" />
    </Link>
  );
}

export default function NextStepBox({ title = "Next Steps", children }: { title?: string; children: React.ReactNode }) {
  return (
    <div className="my-8 bg-[#07070f] border border-cyan-500/20 rounded-2xl p-6 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-cyan-500/50 via-blue-500/30 to-transparent" />
      <p className="text-[11px] font-semibold uppercase tracking-widest text-cyan-400 mb-4">{title}</p>
      <div className="flex flex-col gap-2.5">{children}</div>
    </div>
  );
}
