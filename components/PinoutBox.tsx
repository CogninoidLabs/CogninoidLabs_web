import { Cpu } from "lucide-react";
import React from "react";

const typeColors: Record<string, { text: string; bg: string }> = {
  power:         { text: "text-red-400",    bg: "bg-red-500/10"    },
  ground:        { text: "text-slate-400",  bg: "bg-slate-500/10"  },
  digital:       { text: "text-blue-400",   bg: "bg-blue-500/10"   },
  analog:        { text: "text-green-400",  bg: "bg-green-500/10"  },
  communication: { text: "text-violet-400", bg: "bg-violet-500/10" },
  other:         { text: "text-slate-400",  bg: "bg-slate-500/10"  },
};

export function PinRow({ pin, label, type, description }: {
  pin: string | number;
  label: string;
  type: "power" | "ground" | "digital" | "analog" | "communication" | "other";
  description?: string;
}) {
  const c = typeColors[type] ?? typeColors.other;
  return (
    <tr className="border-b border-white/[0.03] last:border-0">
      <td className="px-5 py-2.5 text-sm text-slate-400 font-mono">{pin}</td>
      <td className="px-5 py-2.5 text-sm text-white font-mono">{label}</td>
      <td className="px-5 py-2.5">
        <span className={`text-[11px] px-2 py-0.5 rounded font-mono ${c.text} ${c.bg}`}>
          {type}
        </span>
      </td>
      <td className="px-5 py-2.5 text-sm text-slate-500">{description ?? "—"}</td>
    </tr>
  );
}

export default function PinoutBox({ title = "Pinout", children }: {
  title?: string;
  children: React.ReactNode;
}) {
  const rows = React.Children.toArray(children).filter(Boolean);
  if (!rows.length) return null;
  return (
    <div className="my-6 bg-[#07070f] border border-white/[0.07] rounded-2xl overflow-hidden">
      <div className="px-5 py-3 border-b border-white/[0.05] flex items-center gap-2">
        <Cpu className="w-3.5 h-3.5 text-slate-500" />
        <span className="text-[11px] font-semibold uppercase tracking-widest text-slate-500">{title}</span>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-white/[0.05]">
              <th className="text-left text-[11px] font-medium text-slate-600 uppercase px-5 py-2.5">Pin</th>
              <th className="text-left text-[11px] font-medium text-slate-600 uppercase px-5 py-2.5">Label</th>
              <th className="text-left text-[11px] font-medium text-slate-600 uppercase px-5 py-2.5">Type</th>
              <th className="text-left text-[11px] font-medium text-slate-600 uppercase px-5 py-2.5">Description</th>
            </tr>
          </thead>
          <tbody>{rows}</tbody>
        </table>
      </div>
    </div>
  );
}
