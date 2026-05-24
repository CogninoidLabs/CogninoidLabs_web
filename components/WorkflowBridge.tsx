import Link from "next/link";
import { GitBranch } from "lucide-react";

interface WorkflowBridgeProps {
  title: string;
  href: string;
  description?: string;
}

export default function WorkflowBridge({ title, href, description }: WorkflowBridgeProps) {
  return (
    <div className="my-6">
      <div className="flex items-center gap-2 mb-2">
        <GitBranch className="w-3.5 h-3.5 text-cyan-400" />
        <span className="text-[11px] font-semibold uppercase tracking-widest text-cyan-400">Related Workflow</span>
      </div>
      <Link
        href={href}
        className="group flex items-center justify-between p-4 bg-[#07070f] border border-cyan-500/20 rounded-xl hover:border-cyan-500/40 hover:bg-cyan-500/[0.04] transition-all"
      >
        <div>
          <p className="text-white text-sm font-medium group-hover:text-cyan-400 transition-colors">{title}</p>
          {description && <p className="text-slate-600 text-xs mt-0.5">{description}</p>}
        </div>
        <span className="text-slate-600 group-hover:text-cyan-400 transition-colors text-sm">→</span>
      </Link>
    </div>
  );
}
