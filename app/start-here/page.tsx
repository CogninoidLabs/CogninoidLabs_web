import { getAll } from "@/lib/mdx";
import Link from "next/link";
import { ArrowRight, BookOpen, Code2, Rocket, Globe, Brain } from "lucide-react";

const learningPath = [
  {
    icon: Code2,
    title: "Your tools",
    items: ["what-is-vscode", "what-is-github", "what-is-vercel"],
    labels: ["VS Code", "GitHub", "Vercel"],
    color: "from-cyan-500 to-blue-600",
  },
  {
    icon: Globe,
    title: "The web",
    items: ["what-is-frontend", "what-is-backend", "what-is-an-api", "what-is-deployment", "what-is-a-domain"],
    labels: ["Frontend", "Backend", "APIs", "Deployment", "Domains"],
    color: "from-blue-500 to-violet-600",
  },
  {
    icon: Brain,
    title: "Building with AI",
    items: ["what-is-an-ai-coding-agent", "what-is-vibe-coding", "what-is-verifiable-building"],
    labels: ["AI Coding Agents", "Vibe Coding", "Verifiable Building"],
    color: "from-violet-500 to-purple-600",
  },
];

export default function StartHerePage() {
  const allPages = getAll("start-here");
  const pageMap = Object.fromEntries(allPages.map((p) => [p.slug, p]));

  return (
    <main className="min-h-screen pt-24 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="max-w-3xl mb-16">
          <p className="section-label">Start Here</p>
          <h1 className="text-4xl sm:text-5xl font-bold text-white tracking-tight mb-5 leading-tight">
            From vibe coding to<br />
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-violet-400 bg-clip-text text-transparent">
              verifiable building.
            </span>
          </h1>
          <p className="text-slate-400 text-lg leading-relaxed max-w-2xl">
            These pages teach you the foundational concepts behind every tool, workflow, and system we use at Cogninoid Labs.
            Read them in order if you are starting from scratch. Jump to what you need if you are filling specific gaps.
          </p>
        </div>

        {/* Learning path */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-16">
          {learningPath.map((section) => {
            const Icon = section.icon;
            return (
              <div key={section.title} className="bg-[#07070f] border border-white/[0.07] rounded-2xl p-6 relative overflow-hidden">
                <div className={`absolute top-0 left-0 right-0 h-px bg-gradient-to-r ${section.color} opacity-60`} />
                <div className={`w-9 h-9 rounded-xl bg-gradient-to-br ${section.color} flex items-center justify-center mb-4 shadow-lg`}>
                  <Icon className="w-4 h-4 text-white" strokeWidth={1.75} />
                </div>
                <h2 className="text-white font-semibold text-base mb-4">{section.title}</h2>
                <div className="flex flex-col gap-2">
                  {section.items.map((slug, i) => {
                    const page = pageMap[slug];
                    const label = section.labels[i];
                    if (!page) {
                      return (
                        <div key={slug} className="flex items-center gap-2 p-2.5 rounded-xl bg-white/[0.02] border border-white/[0.04]">
                          <span className="text-slate-600 text-sm">{label}</span>
                          <span className="ml-auto text-[10px] text-slate-700 font-mono">coming soon</span>
                        </div>
                      );
                    }
                    return (
                      <Link
                        key={slug}
                        href={`/start-here/${slug}`}
                        className="group flex items-center gap-2 p-2.5 rounded-xl bg-white/[0.02] border border-white/[0.04] hover:border-white/[0.12] hover:bg-white/[0.05] transition-all"
                      >
                        <span className="text-slate-300 text-sm group-hover:text-white transition-colors">{page.frontmatter.title}</span>
                        <ArrowRight className="ml-auto w-3 h-3 text-slate-700 group-hover:text-cyan-400 group-hover:translate-x-0.5 transition-all" />
                      </Link>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>

        {/* All pages list */}
        {allPages.length > 0 && (
          <div>
            <h2 className="text-white font-semibold text-xl mb-6 flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-cyan-400" />
              All foundation pages
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {allPages.map((page) => (
                <Link
                  key={page.slug}
                  href={`/start-here/${page.slug}`}
                  className="group flex flex-col bg-[#07070f] border border-white/[0.07] rounded-xl p-5 hover:border-white/[0.15] hover:-translate-y-0.5 transition-all"
                >
                  <h3 className="text-white text-sm font-semibold mb-1.5 group-hover:text-cyan-400 transition-colors">{page.frontmatter.title}</h3>
                  {page.frontmatter.description && (
                    <p className="text-slate-600 text-xs leading-relaxed flex-1">{page.frontmatter.description}</p>
                  )}
                  <div className="flex items-center gap-2 mt-3">
                    {page.frontmatter.difficulty && (
                      <span className="text-[10px] text-green-400 bg-green-500/8 border border-green-500/20 px-2 py-0.5 rounded-full font-mono">
                        {page.frontmatter.difficulty}
                      </span>
                    )}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Continue CTA */}
        <div className="mt-16 p-8 bg-[#07070f] border border-white/[0.07] rounded-2xl relative overflow-hidden">
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent" />
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
            <div className="flex-1">
              <p className="text-white font-semibold text-lg mb-1">Ready to build?</p>
              <p className="text-slate-500 text-sm">Head to the Workflow Library for step-by-step guides on real tasks.</p>
            </div>
            <Link
              href="/workflows"
              className="group flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-sm font-medium hover:opacity-90 transition-opacity shadow-lg shadow-cyan-500/20 flex-shrink-0"
            >
              Workflow Library
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
