"use client";

import { motion } from "framer-motion";
import { BookOpen, Rss, ArrowRight, Tag } from "lucide-react";

const posts = [
  {
    title: "Why closed-loop intelligence matters more than model size",
    date: "May 2026",
    readTime: "6 min read",
    summary:
      "A working 7B model that receives sensor feedback and updates its beliefs in real time is more useful than a 70B model that acts on stale priors. Here's why the loop is the real innovation.",
    tags: ["Embodied AI", "Philosophy", "Robotics"],
    status: "published",
  },
  {
    title: "Designing robots to be taught, not programmed",
    date: "April 2026",
    readTime: "8 min read",
    summary:
      "Traditional industrial robots are programmed via teach pendants and waypoints. AI-controllable robots need to be designed differently — from the actuator selection up. Notes from building the Adeept arm integration.",
    tags: ["Robotics", "Hardware", "Learning"],
    status: "published",
  },
  {
    title: "3D printing as a scientific instrument",
    date: "March 2026",
    readTime: "5 min read",
    summary:
      "When your lab has a 3D printer, every experiment can have a custom fixture in 4 hours. The design-to-test cycle collapses in ways that change how you think about rapid science.",
    tags: ["3D Printing", "Lab", "Science"],
    status: "published",
  },
  {
    title: "Building AI agents for materials discovery",
    date: "February 2026",
    readTime: "10 min read",
    summary:
      "Notes on running autonomous inverse design campaigns for MXene and perovskite compositions — including the dataset bias problem, balanced sampling, and what it means for an agent to 'propose an experiment'.",
    tags: ["Materials AI", "Inverse Design", "Agents"],
    status: "published",
  },
  {
    title: "On interpretability in physical AI systems",
    date: "Coming soon",
    readTime: "~7 min",
    summary:
      "When an AI drives a robot arm, you need to know not just what it's doing but why — and how to override it safely. This is harder than interpretability for pure software systems.",
    tags: ["HMI", "Interpretability", "Safety"],
    status: "upcoming",
  },
  {
    title: "Rapid prototyping as a research methodology",
    date: "Coming soon",
    readTime: "~5 min",
    summary:
      "A defense of building things fast and breaking them. Why physical prototyping speed matters for AI research, and how to set up a lab workflow that makes it the default.",
    tags: ["Methodology", "Prototyping", "Lab"],
    status: "upcoming",
  },
];

const allTags = Array.from(new Set(posts.flatMap((p) => p.tags)));

function fadeUp(delay = 0) {
  return {
    initial: { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6, delay },
  };
}

export default function BlogPage() {
  const published = posts.filter((p) => p.status === "published");
  const upcoming = posts.filter((p) => p.status === "upcoming");

  return (
    <main className="relative pt-24 pb-32">
      <div className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-violet-600/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div {...fadeUp()} className="mb-16">
          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-cyan-400 mb-3">
            Blog & Notes
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-5">
            Thinking in public
          </h1>
          <p className="text-slate-400 max-w-2xl text-lg leading-relaxed">
            Notes on AI, robotics, hardware, and the intersection of digital intelligence with physical systems.
            Written as we build, not after.
          </p>
        </motion.div>

        {/* Subscribe banner */}
        <motion.div
          {...fadeUp(0.1)}
          className="flex items-center gap-4 p-5 bg-cyan-500/5 border border-cyan-500/20 rounded-2xl mb-14"
        >
          <div className="w-10 h-10 rounded-xl bg-cyan-500/20 flex items-center justify-center flex-shrink-0">
            <Rss className="w-5 h-5 text-cyan-400" />
          </div>
          <div>
            <p className="text-white text-sm font-medium">RSS & updates coming soon</p>
            <p className="text-slate-500 text-xs">Follow the GitHub for now — research notes often ship alongside code.</p>
          </div>
          <a
            href="https://github.com/CogninoidLabs"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-auto flex items-center gap-1.5 text-xs text-cyan-400 hover:text-cyan-300 transition-colors flex-shrink-0"
          >
            GitHub <ArrowRight className="w-3 h-3" />
          </a>
        </motion.div>

        {/* Tags */}
        <motion.div {...fadeUp(0.15)} className="flex flex-wrap gap-2 mb-12">
          {allTags.map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs bg-white/[0.04] border border-white/[0.08] text-slate-500 cursor-default"
            >
              <Tag className="w-3 h-3" />
              {tag}
            </span>
          ))}
        </motion.div>

        {/* Published posts */}
        <motion.div {...fadeUp(0.2)} className="mb-6">
          <div className="flex items-center gap-3 mb-8">
            <h2 className="text-lg font-semibold text-white">Published</h2>
            <div className="flex-1 h-px bg-white/[0.06]" />
            <span className="text-xs text-slate-600">{published.length} posts</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            {published.map((post, i) => (
              <motion.div
                key={post.title}
                {...fadeUp(i * 0.08)}
                className="group bg-white/[0.04] border border-white/[0.08] rounded-2xl p-6 hover:border-cyan-500/25 hover:bg-white/[0.07] transition-all duration-300 cursor-default"
              >
                {/* Meta */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex flex-wrap gap-1.5">
                    {post.tags.slice(0, 2).map((tag) => (
                      <span key={tag} className="text-xs px-2 py-0.5 rounded-md bg-cyan-500/10 border border-cyan-500/15 text-cyan-400/80">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center gap-2 text-slate-600 text-xs flex-shrink-0">
                    <span>{post.date}</span>
                    <span>·</span>
                    <span>{post.readTime}</span>
                  </div>
                </div>

                {/* Content */}
                <BookOpen className="w-5 h-5 text-slate-700 mb-3 group-hover:text-cyan-400/50 transition-colors" />
                <h3 className="text-white font-semibold mb-3 leading-snug group-hover:text-cyan-100 transition-colors">
                  {post.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed">{post.summary}</p>

                <div className="mt-4 pt-4 border-t border-white/[0.05] flex items-center text-xs text-slate-600 group-hover:text-slate-500 transition-colors">
                  Full post <ArrowRight className="w-3 h-3 ml-1" />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Upcoming posts */}
        <motion.div {...fadeUp(0.3)} className="mt-14">
          <div className="flex items-center gap-3 mb-8">
            <h2 className="text-lg font-semibold text-white">Coming up</h2>
            <div className="flex-1 h-px bg-white/[0.06]" />
            <span className="text-xs text-slate-600">{upcoming.length} drafts</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            {upcoming.map((post, i) => (
              <motion.div
                key={post.title}
                {...fadeUp(i * 0.08)}
                className="bg-white/[0.02] border border-white/[0.05] rounded-2xl p-6 opacity-70"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs px-2.5 py-1 rounded-full bg-slate-500/10 border border-slate-500/20 text-slate-500">
                    Draft
                  </span>
                  <span className="text-xs text-slate-700">{post.readTime}</span>
                </div>
                <h3 className="text-slate-400 font-semibold mb-3 leading-snug">{post.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{post.summary}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </main>
  );
}
