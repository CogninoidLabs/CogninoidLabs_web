import { ArrowRight } from "lucide-react";
import React from "react";

const colorMap = {
  cyan:   { bg: "bg-cyan-500/10",   border: "border-cyan-500/30",   text: "text-cyan-400"   },
  blue:   { bg: "bg-blue-500/10",   border: "border-blue-500/30",   text: "text-blue-400"   },
  violet: { bg: "bg-violet-500/10", border: "border-violet-500/30", text: "text-violet-400" },
  green:  { bg: "bg-green-500/10",  border: "border-green-500/30",  text: "text-green-400"  },
  amber:  { bg: "bg-amber-500/10",  border: "border-amber-500/30",  text: "text-amber-400"  },
  orange: { bg: "bg-orange-500/10", border: "border-orange-500/30", text: "text-orange-400" },
  slate:  { bg: "bg-slate-500/10",  border: "border-slate-500/30",  text: "text-slate-400"  },
  red:    { bg: "bg-red-500/10",    border: "border-red-500/30",    text: "text-red-400"    },
};

export function FlowNode({ label, sublabel, color = "cyan" }: {
  label: string;
  sublabel?: string;
  color?: keyof typeof colorMap | string;
}) {
  const c = colorMap[color as keyof typeof colorMap] ?? colorMap.cyan;
  return (
    <div className={`px-3 py-2 rounded-xl ${c.bg} border ${c.border} text-center flex-shrink-0`}>
      <p className={`text-xs font-semibold ${c.text}`}>{label}</p>
      {sublabel && <p className="text-[10px] text-slate-600 mt-0.5">{sublabel}</p>}
    </div>
  );
}

export default function SignalFlowDiagram({ title = "Signal Flow", children }: {
  title?: string;
  children: React.ReactNode;
}) {
  const childArray = React.Children.toArray(children).filter(Boolean);
  if (!childArray.length) return null;
  return (
    <div className="my-6 bg-[#07070f] border border-white/[0.07] rounded-2xl p-5">
      <p className="text-[11px] font-semibold uppercase tracking-widest text-slate-500 mb-4">{title}</p>
      <div className="flex flex-wrap items-center gap-2">
        {childArray.map((child, i) => (
          <React.Fragment key={i}>
            {child}
            {i < childArray.length - 1 && (
              <ArrowRight className="w-3.5 h-3.5 text-slate-600 flex-shrink-0" />
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}
