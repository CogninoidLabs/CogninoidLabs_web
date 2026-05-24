import { CheckCircle2 } from "lucide-react";

interface VerifyBoxProps {
  title?: string;
  children: React.ReactNode;
}

export default function VerifyBox({ title = "How to Verify It Works", children }: VerifyBoxProps) {
  return (
    <div className="my-6 bg-green-950/25 border border-green-500/25 rounded-2xl p-6 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-green-500/50 to-transparent" />
      <div className="flex items-center gap-2.5 mb-3">
        <div className="w-7 h-7 rounded-lg bg-green-500/15 border border-green-500/25 flex items-center justify-center flex-shrink-0">
          <CheckCircle2 className="w-3.5 h-3.5 text-green-400" />
        </div>
        <span className="text-[11px] font-semibold uppercase tracking-widest text-green-400">{title}</span>
      </div>
      <div className="text-slate-300 text-sm leading-relaxed [&>ul]:space-y-1.5 [&>ul>li]:flex [&>ul>li]:gap-2 [&>ul>li]:items-start [&>ul>li]:before:content-['✓'] [&>ul>li]:before:text-green-500 [&>ul>li]:before:flex-shrink-0 [&>ul>li]:before:font-bold">
        {children}
      </div>
    </div>
  );
}
