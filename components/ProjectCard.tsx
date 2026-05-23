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

const statusConfig: Record<Status, { label: string; dot: string; text: string; bg: string; border: string }> = {
  "coming-soon": {
    label: "Coming Soon",
    dot: "bg-slate-400",
    text: "text-slate-400",
    bg: "bg-slate-500/10",
    border: "border-slate-500/20",
  },
  "in-development": {
    label: "In Development",
    dot: "bg-cyan-400 animate-pulse",
    text: "text-cyan-400",
    bg: "bg-cyan-500/10",
    border: "border-cyan-500/25",
  },
  live: {
    label: "Live",
    dot: "bg-green-400 animate-pulse",
    text: "text-green-400",
    bg: "bg-green-500/10",
    border: "border-green-500/25",
  },
  archived: {
    label: "Archived",
    dot: "bg-amber-400",
    text: "text-amber-400",
    bg: "bg-amber-500/10",
    border: "border-amber-500/20",
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
      className="group relative bg-white/[0.04] backdrop-blur-sm border border-white/[0.08] rounded-2xl p-6
        hover:border-cyan-500/30 hover:bg-white/[0.07] transition-all duration-300 flex flex-col h-full"
    >
      {/* Hover gradient overlay */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-cyan-500/0 to-violet-600/0 group-hover:from-cyan-500/5 group-hover:to-violet-600/3 transition-all duration-500" />

      <div className="relative flex-1">
        {/* Header row */}
        <div className="flex items-start justify-between gap-3 mb-4">
          <div className="flex items-center gap-3">
            {Icon && (
              <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-cyan-500/20 to-blue-600/20 border border-cyan-500/20 flex items-center justify-center flex-shrink-0">
                <Icon className="w-4 h-4 text-cyan-400" strokeWidth={1.75} />
              </div>
            )}
            <h3 className="text-white font-semibold text-sm leading-snug">{title}</h3>
          </div>
          <div className="flex items-center gap-1.5 flex-shrink-0">
            <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium ${s.text} ${s.bg} border ${s.border}`}>
              <span className={`w-1.5 h-1.5 rounded-full ${s.dot}`} />
              {s.label}
            </span>
          </div>
        </div>

        <p className="text-slate-400 text-sm leading-relaxed mb-4">{description}</p>

        {/* Tags */}
        {tags.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mt-auto">
            {tags.map((tag) => (
              <span
                key={tag}
                className="text-xs px-2 py-0.5 rounded-md bg-white/[0.05] border border-white/[0.06] text-slate-500"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>

      {href && (
        <ArrowUpRight className="absolute bottom-5 right-5 w-4 h-4 text-slate-600 group-hover:text-cyan-400 transition-colors" />
      )}
    </Wrapper>
  );
}
