import { ArrowRight } from "lucide-react";

interface SignalNode {
  label: string;
  sublabel?: string;
  color?: "cyan" | "blue" | "violet" | "green" | "amber";
}

interface SignalFlowDiagramProps {
  title?: string;
  nodes: SignalNode[];
}

const colorMap = {
  cyan:   { bg: "bg-cyan-500/10",   border: "border-cyan-500/30",   text: "text-cyan-400"   },
  blue:   { bg: "bg-blue-500/10",   border: "border-blue-500/30",   text: "text-blue-400"   },
  violet: { bg: "bg-violet-500/10", border: "border-violet-500/30", text: "text-violet-400" },
  green:  { bg: "bg-green-500/10",  border: "border-green-500/30",  text: "text-green-400"  },
  amber:  { bg: "bg-amber-500/10",  border: "border-amber-500/30",  text: "text-amber-400"  },
};

export default function SignalFlowDiagram({ title = "Signal Flow", nodes = [] }: SignalFlowDiagramProps) {
  if (!nodes.length) return null;
  return (
    <div className="my-6 bg-[#07070f] border border-white/[0.07] rounded-2xl p-5">
      <p className="text-[11px] font-semibold uppercase tracking-widest text-slate-500 mb-4">{title}</p>
      <div className="flex flex-wrap items-center gap-2">
        {nodes.map((node, i) => {
          const c = colorMap[node.color ?? "cyan"];
          return (
            <div key={i} className="flex items-center gap-2">
              <div className={`px-3 py-2 rounded-xl ${c.bg} border ${c.border} text-center`}>
                <p className={`text-xs font-semibold ${c.text}`}>{node.label}</p>
                {node.sublabel && (
                  <p className="text-[10px] text-slate-600 mt-0.5">{node.sublabel}</p>
                )}
              </div>
              {i < nodes.length - 1 && (
                <ArrowRight className="w-3.5 h-3.5 text-slate-600 flex-shrink-0" />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
