import { ShieldAlert } from "lucide-react";

interface SafetyNoteBoxProps {
  title?: string;
  children: React.ReactNode;
}

export default function SafetyNoteBox({ title = "Safety Note", children }: SafetyNoteBoxProps) {
  return (
    <div className="my-6 bg-red-950/25 border border-red-500/30 rounded-2xl p-6 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-red-500/60 to-transparent" />
      <div className="flex items-center gap-2.5 mb-3">
        <div className="w-7 h-7 rounded-lg bg-red-500/15 border border-red-500/30 flex items-center justify-center flex-shrink-0">
          <ShieldAlert className="w-3.5 h-3.5 text-red-400" />
        </div>
        <span className="text-[11px] font-semibold uppercase tracking-widest text-red-400">{title}</span>
      </div>
      <div className="text-slate-300 text-sm leading-relaxed [&>p]:mb-3 [&>p:last-child]:mb-0 [&>ul]:list-disc [&>ul]:pl-4 [&>ul]:space-y-1">
        {children}
      </div>
    </div>
  );
}
