import { AlertTriangle } from "lucide-react";

interface CommonMistakeBoxProps {
  title?: string;
  children: React.ReactNode;
}

export default function CommonMistakeBox({ title = "Common Mistakes", children }: CommonMistakeBoxProps) {
  return (
    <div className="my-6 bg-amber-950/30 border border-amber-500/25 rounded-2xl p-6 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-amber-500/50 to-transparent" />
      <div className="flex items-center gap-2.5 mb-3">
        <div className="w-7 h-7 rounded-lg bg-amber-500/15 border border-amber-500/25 flex items-center justify-center flex-shrink-0">
          <AlertTriangle className="w-3.5 h-3.5 text-amber-400" />
        </div>
        <span className="text-[11px] font-semibold uppercase tracking-widest text-amber-400">{title}</span>
      </div>
      <div className="text-slate-300 text-sm leading-relaxed [&>ul]:list-none [&>ul]:space-y-2 [&>ul>li]:flex [&>ul>li]:gap-2 [&>ul>li]:before:content-['→'] [&>ul>li]:before:text-amber-500 [&>ul>li]:before:flex-shrink-0">
        {children}
      </div>
    </div>
  );
}
