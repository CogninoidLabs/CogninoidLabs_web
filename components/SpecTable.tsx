import React from "react";

export function SpecRow({ parameter, value, notes }: { parameter: string; value: string; notes?: string }) {
  return (
    <tr className="border-b border-white/[0.03] last:border-0 hover:bg-white/[0.02] transition-colors">
      <td className="px-5 py-2.5 text-sm text-slate-400 font-mono">{parameter}</td>
      <td className="px-5 py-2.5 text-sm text-cyan-400 font-mono">{value}</td>
      <td className="px-5 py-2.5 text-sm text-slate-600">{notes ?? "—"}</td>
    </tr>
  );
}

export default function SpecTable({ title = "Specifications", children }: {
  title?: string;
  children: React.ReactNode;
}) {
  const rows = React.Children.toArray(children).filter(Boolean);
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
              <th className="text-left text-[11px] font-medium text-slate-600 uppercase tracking-wider px-5 py-2.5">Notes</th>
            </tr>
          </thead>
          <tbody>{rows}</tbody>
        </table>
      </div>
    </div>
  );
}
