type Difficulty = "beginner" | "intermediate" | "advanced";

const config: Record<Difficulty, { label: string; color: string; bg: string; border: string }> = {
  beginner: {
    label: "Beginner",
    color: "text-green-400",
    bg: "bg-green-500/8",
    border: "border-green-500/25",
  },
  intermediate: {
    label: "Intermediate",
    color: "text-blue-400",
    bg: "bg-blue-500/8",
    border: "border-blue-500/25",
  },
  advanced: {
    label: "Advanced",
    color: "text-violet-400",
    bg: "bg-violet-500/8",
    border: "border-violet-500/25",
  },
};

export default function DifficultyBadge({ level }: { level: Difficulty }) {
  const c = config[level];
  return (
    <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-semibold ${c.color} ${c.bg} border ${c.border}`}>
      <span className={`w-1.5 h-1.5 rounded-full ${c.color.replace("text-", "bg-")}`} />
      {c.label}
    </span>
  );
}
