interface SpecRow {
  parameter: string;
  value: string;
  notes?: string;
}

interface SpecTableProps {
  title?: string;
  rows: SpecRow[];
}

export default function SpecTable({ title = "Specifications", rows = [] }: SpecTableProps) {
  if (!rows.length) return null;
  return (
    <div className="my-6 bg-[#07070f] border border-white/[0.07] rounded-2xl overflow-hidden">
      <div className="px-5 py-3 border-b border-white/[0.05] flex items-center gap-2">
        <span className="text-[11px] font-semibold uppercase tracking-widest text-slate-500">{title}</span>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-white/[0.05]">
              <th className="text-left text-[11px] font-medium text-slate-600 uppercase tracking-wider px-5 py-2.5">Parameter</th>
              <th className="text-left text-[11px] font-medium text-slate-600 uppercase tracking-wider px-5 py-2.5">Value</th>
              {rows.some(r => r.notes) && (
                <th className="text-left text-[11px] font-medium text-slate-600 uppercase tracking-wider px-5 py-2.5">Notes</th>
              )}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, i) => (
              <tr key={i} className="border-b border-white/[0.03] last:border-0 hover:bg-white/[0.02] transition-colors">
                <td className="px-5 py-2.5 text-sm text-slate-400 font-mono">{row.parameter}</td>
                <td className="px-5 py-2.5 text-sm text-cyan-400 font-mono">{row.value}</td>
                {rows.some(r => r.notes) && (
                  <td className="px-5 py-2.5 text-sm text-slate-600">{row.notes ?? "—"}</td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
