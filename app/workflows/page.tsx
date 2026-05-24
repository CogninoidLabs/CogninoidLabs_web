import { getAll } from "@/lib/mdx";
import Link from "next/link";
import { ArrowRight, GitBranch } from "lucide-react";
import DifficultyBadge from "@/components/DifficultyBadge";

export default function WorkflowsPage() {
  const workflows = getAll("workflows");

  return (
    <main className="min-h-screen pt-24 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="max-w-3xl mb-14">
          <p className="section-label">Workflow Library</p>
          <h1 className="text-4xl sm:text-5xl font-bold text-white tracking-tight mb-4">
            Step-by-step engineering workflows
          </h1>
          <p className="text-slate-400 text-lg leading-relaxed">
            Each workflow covers a complete, real task — from goal to verification.
            Not tutorials. Not documentation. Workflows you can follow and repeat.
          </p>
        </div>

        {/* Workflow list */}
        <div className="flex flex-col gap-4">
          {workflows.map((wf, i) => (
            <Link
              key={wf.slug}
              href={`/workflows/${wf.slug}`}
              className="group flex items-start gap-5 bg-[#07070f] border border-white/[0.07] rounded-2xl p-6 hover:border-white/[0.15] hover:-translate-y-0.5 transition-all overflow-hidden relative"
            >
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-cyan-500/0 via-cyan-500/40 to-cyan-500/0 opacity-0 group-hover:opacity-100 transition-opacity" />

              {/* Step number */}
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500/15 to-blue-600/15 border border-cyan-500/20 flex items-center justify-center flex-shrink-0 text-cyan-400 font-bold text-sm font-mono">
                {String(i + 1).padStart(2, "0")}
              </div>

              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-4">
                  <h2 className="text-white font-semibold text-base group-hover:text-cyan-400 transition-colors leading-snug">
                    {wf.frontmatter.title}
                  </h2>
                  <ArrowRight className="w-4 h-4 text-slate-700 group-hover:text-cyan-400 group-hover:translate-x-0.5 transition-all flex-shrink-0 mt-0.5" />
                </div>
                {wf.frontmatter.description && (
                  <p className="text-slate-500 text-sm mt-1.5 leading-relaxed line-clamp-2">
                    {wf.frontmatter.description}
                  </p>
                )}
                <div className="flex flex-wrap gap-2 mt-3">
                  {wf.frontmatter.difficulty && (
                    <DifficultyBadge level={wf.frontmatter.difficulty} />
                  )}
                  {wf.frontmatter.tags?.slice(0, 4).map((tag: string) => (
                    <span key={tag} className="text-[11px] px-2 py-0.5 rounded-md bg-white/[0.04] border border-white/[0.06] text-slate-600 font-mono">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>

        {workflows.length === 0 && (
          <div className="flex flex-col items-center justify-center py-24 text-center">
            <GitBranch className="w-10 h-10 text-slate-700 mb-4" />
            <p className="text-slate-500">Workflows are being written. Check back soon.</p>
          </div>
        )}
      </div>
    </main>
  );
}
