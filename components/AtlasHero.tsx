import DifficultyBadge from "./DifficultyBadge";

interface AtlasHeroProps {
  title: string;
  description: string;
  difficulty?: "beginner" | "intermediate" | "advanced";
  tags?: string[];
  category?: string;
}

export default function AtlasHero({
  title,
  description,
  difficulty,
  tags = [],
  category,
}: AtlasHeroProps) {
  return (
    <div className="relative mb-10 pb-8 border-b border-white/[0.07]">
      <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/5 to-transparent rounded-2xl -z-10 pointer-events-none" />
      {category && (
        <p className="text-[11px] text-cyan-400 font-semibold uppercase tracking-widest mb-3">
          {category}
        </p>
      )}
      <h1 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-4 leading-tight">
        {title}
      </h1>
      <p className="text-slate-400 text-base leading-relaxed max-w-2xl mb-5">
        {description}
      </p>
      <div className="flex flex-wrap items-center gap-2">
        {difficulty && <DifficultyBadge level={difficulty} />}
        {tags.map((tag) => (
          <span
            key={tag}
            className="text-[11px] px-2.5 py-1 rounded-full bg-white/[0.04] border border-white/[0.07] text-slate-500 font-mono"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}
