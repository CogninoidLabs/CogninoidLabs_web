import type { LucideIcon } from "lucide-react";
import { ArrowUpRight } from "lucide-react";

type Status = "coming-soon" | "in-development" | "live" | "archived";

interface ProjectCardProps {
  title: string;
  description: string;
  status?: Status;
  tags?: string[];
  icon?: LucideIcon;
  href?: string;
}

const statusConfig: Record<Status, {
  label: string; dot: string; text: string; bg: string; border: string; bar: string;
}> = {
  "coming-soon": {
    label: "Coming Soon",
    dot: "bg-slate-500",
    text: "text-slate-400",
    bg: "bg-slate-500/8",
    border: "border-slate-500/20",
    bar: "bg-slate-600",
  },
  "in-development": {
    label: "In Development",
    dot: "bg-cyan-400 animate-pulse",
    text: "text-cyan-400",
    bg: "bg-cyan-500/8",
    border: "border-cyan-500/25",
    bar: "bg-cyan-500",
  },
  live: {
    label: "Live",
    dot: "bg-green-400 animate-pulse",
    text: "text-green-400",
    bg: "bg-green-500/8",
    border: "border-green-500/25",
    bar: "bg-green-500",
  },
  archived: {
    label: "Archived",
    dot: "bg-amber-400",
    text: "text-amber-400",
    bg: "bg-amber-500/8",
    border: "border-amber-500/20",
    bar: "bg-amber-500",
  },
};

export default function ProjectCard({
  title,
  description,
  status = "coming-soon",
  tags = [],
  icon: Icon,
  href,
}: ProjectCardProps) {
  const s = statusConfig[status];

  const Wrapper = href ? "a" : "div";
  const wrapperProps = href
    ? { href, target: "_blank", rel: "noopener noreferrer" }
    : {};

  return (
    <Wrapper
      {...wrapperProps}
      className="group relative flex flex-col bg-[#07070f] border border-white/[0.07] rounded-2xl overflow-hidden hover:border-white/[0.15] hover:-translate-y-0.5 transition-all duration-300 h-full"
    >
      {/* Top accent line on hover */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-cyan-500/0 via-cyan-500/60 to-cyan-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Status color bar at bottom */}
      <div className={`absolute bottom-0 left-0 right-0 h-[2px] ${s.bar} opacity-20 group-hover:opacity-60 transition-opacity duration-300`} />

      <div className="relative flex flex-col flex-1 p-6">
        {/* Header */}
        <div className="flex items-start justify-between gap-3 mb-3">
          <div className="flex items-start gap-2.5 flex-1 min-w-0">
            {Icon && (
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-500/15 to-blue-600/15 border border-cyan-500/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                <Icon className="w-3.5 h-3.5 text-cyan-400" strokeWidth={1.75} />
              </div>
            )}
            <h3 className="text-[14px] font-semibold text-white leading-snug tracking-tight">{title}</h3>
          </div>
          <span className={`inline-flex items-center gap-1.5 px-2 py-1 rounded-lg text-[11px] font-medium flex-shrink-0 ${s.text} ${s.bg} border ${s.border}`}>
            <span className={`w-1.5 h-1.5 rounded-full ${s.dot}`} />
            {s.label}
          </span>
        </div>

        <p className="text-[13px] text-slate-500 leading-relaxed flex-1 mb-4">{description}</p>

        {/* Tags */}
        {tags.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mt-auto">
            {tags.map((tag) => (
              <span
                key={tag}
                className="text-[11px] px-2 py-0.5 rounded-md bg-white/[0.04] border border-white/[0.06] text-slate-600 font-mono tracking-tight"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>

      {href && (
        <ArrowUpRight className="absolute bottom-4 right-4 w-3.5 h-3.5 text-slate-700 group-hover:text-cyan-400 transition-colors duration-200" />
      )}
    </Wrapper>
  );
}
