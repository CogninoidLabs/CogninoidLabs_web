"use client";

import React from "react";

// ─── Arduino Uno ────────────────────────────────────────────────────────────
function ArduinoDiagram() {
  return (
    <svg viewBox="0 0 420 280" xmlns="http://www.w3.org/2000/svg" className="w-full max-w-md mx-auto">
      {/* PCB body */}
      <rect x="30" y="40" width="320" height="200" rx="8" fill="#1a3a1a" stroke="#2a5a2a" strokeWidth="1.5" />
      {/* USB port */}
      <rect x="30" y="95" width="22" height="36" rx="3" fill="#2a2a2a" stroke="#555" strokeWidth="1" />
      <text x="41" y="117" textAnchor="middle" fill="#888" fontSize="7" fontFamily="monospace">USB</text>
      {/* Power jack */}
      <circle cx="41" cy="185" r="10" fill="#111" stroke="#555" strokeWidth="1" />
      <circle cx="41" cy="185" r="5" fill="#333" />
      {/* ATmega328P chip */}
      <rect x="140" y="110" width="80" height="60" rx="3" fill="#1a1a2e" stroke="#444" strokeWidth="1" />
      <text x="180" y="138" textAnchor="middle" fill="#aaa" fontSize="7.5" fontFamily="monospace" fontWeight="bold">ATmega</text>
      <text x="180" y="149" textAnchor="middle" fill="#aaa" fontSize="7.5" fontFamily="monospace">328P</text>
      {/* Crystal */}
      <rect x="155" y="80" width="16" height="22" rx="2" fill="#c0a000" stroke="#888" strokeWidth="0.5" />
      <text x="163" y="94" textAnchor="middle" fill="#000" fontSize="6" fontFamily="monospace">16MHz</text>
      {/* Power LED */}
      <circle cx="310" cy="60" r="4" fill="#00ff00" opacity="0.8" />
      <text x="310" y="74" textAnchor="middle" fill="#6b7280" fontSize="7">ON</text>
      {/* Pin 13 LED */}
      <circle cx="330" cy="60" r="4" fill="#ff8800" opacity="0.8" />
      <text x="330" y="74" textAnchor="middle" fill="#6b7280" fontSize="7">L</text>
      {/* Reset button */}
      <rect x="260" y="48" width="16" height="10" rx="2" fill="#e11d48" />
      <text x="268" y="57" textAnchor="middle" fill="#fff" fontSize="5.5" fontFamily="monospace">RST</text>

      {/* Digital pin header labels (top) */}
      <text x="245" y="38" textAnchor="middle" fill="#22d3ee" fontSize="7" fontFamily="monospace">Digital I/O (0–13)</text>
      {[...Array(14)].map((_, i) => (
        <g key={i}>
          <rect x={75 + i * 18} y="40" width="8" height="12" rx="1" fill="#d4a017" stroke="#a07810" strokeWidth="0.5" />
          <text x={79 + i * 18} y="33" textAnchor="middle" fill="#6b7280" fontSize="6" fontFamily="monospace">{i}</text>
        </g>
      ))}
      {/* PWM markers */}
      {[3, 5, 6, 9, 10, 11].map((i) => (
        <text key={i} x={79 + i * 18} y="26" textAnchor="middle" fill="#a78bfa" fontSize="5.5">~</text>
      ))}

      {/* Analog pin labels (bottom) */}
      <text x="155" y="258" textAnchor="middle" fill="#34d399" fontSize="7" fontFamily="monospace">Analog In (A0–A5)</text>
      {[...Array(6)].map((_, i) => (
        <g key={i}>
          <rect x={90 + i * 18} y="228" width="8" height="12" rx="1" fill="#d4a017" stroke="#a07810" strokeWidth="0.5" />
          <text x={94 + i * 18} y="248" textAnchor="middle" fill="#6b7280" fontSize="6" fontFamily="monospace">A{i}</text>
        </g>
      ))}

      {/* Power header */}
      <text x="305" y="258" textAnchor="middle" fill="#f87171" fontSize="7" fontFamily="monospace">Power</text>
      {["IOREF", "RST", "3.3V", "5V", "GND", "GND", "Vin"].map((label, i) => (
        <g key={label}>
          <rect x={248 + i * 13} y="228" width="8" height="12" rx="1" fill={label === "GND" ? "#374151" : label.includes("V") ? "#b91c1c" : "#d4a017"} stroke="#555" strokeWidth="0.5" />
          <text x={252 + i * 13} y="248" textAnchor="middle" fill="#6b7280" fontSize="5" fontFamily="monospace" transform={`rotate(-45, ${252 + i * 13}, 248)`}>{label}</text>
        </g>
      ))}

      {/* Board label */}
      <text x="350" y="120" textAnchor="middle" fill="#22d3ee" fontSize="9" fontFamily="monospace" fontWeight="bold">Arduino</text>
      <text x="350" y="132" textAnchor="middle" fill="#22d3ee" fontSize="9" fontFamily="monospace" fontWeight="bold">Uno R3</text>
      <text x="350" y="148" textAnchor="middle" fill="#4b5563" fontSize="7" fontFamily="monospace">5V / 16MHz</text>
    </svg>
  );
}

// ─── Generic pin diagram ─────────────────────────────────────────────────────
function GenericDiagram({ name }: { name: string }) {
  return (
    <div className="flex items-center justify-center h-32 bg-white/[0.02] rounded-xl border border-white/[0.06]">
      <p className="text-slate-600 text-sm font-mono">{name} diagram</p>
    </div>
  );
}

// ─── Diagram registry ─────────────────────────────────────────────────────────
const diagrams: Record<string, React.ComponentType> = {
  arduino: ArduinoDiagram,
};

interface ComponentDiagramProps {
  component: string;
  title?: string;
  caption?: string;
}

export default function ComponentDiagram({ component, title, caption }: ComponentDiagramProps) {
  const Diagram = diagrams[component.toLowerCase()] ?? (() => <GenericDiagram name={component} />);
  return (
    <div className="my-6 bg-[#07070f] border border-white/[0.07] rounded-2xl overflow-hidden">
      {title && (
        <div className="px-5 py-3 border-b border-white/[0.05]">
          <span className="text-[11px] font-semibold uppercase tracking-widest text-slate-500">{title}</span>
        </div>
      )}
      <div className="p-5 bg-[#0a0a18]">
        <Diagram />
      </div>
      {caption && (
        <div className="px-5 py-3 border-t border-white/[0.05]">
          <p className="text-slate-600 text-[12px] leading-relaxed">{caption}</p>
        </div>
      )}
    </div>
  );
}
