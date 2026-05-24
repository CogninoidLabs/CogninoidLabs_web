import Link from "next/link";

interface Concept {
  label: string;
  href?: string;
  description?: string;
  color?: "cyan" | "blue" | "violet" | "green";
}

interface ConceptMapProps {
  title?: string;
  concepts: Concept[];
}

const colorMap = {
  cyan:   "border-cyan-500/30 bg-cyan-500/5 text-cyan-400",
  blue:   "border-blue-500/30 bg-blue-500/5 text-blue-400",
  violet: "border-violet-500/30 bg-violet-500/5 text-violet-400",
  green:  "border-green-500/30 bg-green-500/5 text-green-400",
};

export default function ConceptMap({ title = "Related Concepts", concepts = [] }: ConceptMapProps) {
  if (!concepts.length) return null;
  return (
    <div className="my-6 bg-[#07070f] border border-white/[0.07] rounded-2xl p-5">
      <p className="text-[11px] font-semibold uppercase tracking-widest text-slate-500 mb-4">{title}</p>
      <div className="flex flex-wrap gap-2">
        {concepts.map((concept) => {
          const cls = `${colorMap[concept.color ?? "cyan"]} border px-3 py-1.5 rounded-xl text-xs font-medium transition-all`;
          if (concept.href) {
            return (
              <Link key={concept.label} href={concept.href} className={`${cls} hover:opacity-80`} title={concept.description}>
                {concept.label}
              </Link>
            );
          }
          return (
            <span key={concept.label} className={cls} title={concept.description}>
              {concept.label}
            </span>
          );
        })}
      </div>
    </div>
  );
}
