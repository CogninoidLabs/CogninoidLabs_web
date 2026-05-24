import type { MDXComponents } from "mdx/types";
import Link from "next/link";
import MentalModelBox from "./MentalModelBox";
import WorkflowStep from "./WorkflowStep";
import CommonMistakeBox from "./CommonMistakeBox";
import DebugBox from "./DebugBox";
import VerifyBox from "./VerifyBox";
import NextStepBox from "./NextStepBox";
import DifficultyBadge from "./DifficultyBadge";
import ChecklistBox from "./ChecklistBox";
import EngineeringMindsetBox from "./EngineeringMindsetBox";
import ScientificThinkingBox from "./ScientificThinkingBox";
import SafetyNoteBox from "./SafetyNoteBox";
import SpecTable from "./SpecTable";
import AtlasHero from "./AtlasHero";
import ResearchFrontierBlock from "./ResearchFrontierBlock";
import WorkflowBridge from "./WorkflowBridge";
import PinoutBox from "./PinoutBox";
import WiringBox from "./WiringBox";
import SignalFlowDiagram from "./SignalFlowDiagram";
import ConceptMap from "./ConceptMap";

export const mdxComponents: MDXComponents = {
  // Standard HTML elements — styled to match dark theme
  h1: ({ children }) => (
    <h1 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-6 leading-tight mt-0">
      {children}
    </h1>
  ),
  h2: ({ children }) => (
    <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight mt-12 mb-4 pb-2 border-b border-white/[0.07]">
      {children}
    </h2>
  ),
  h3: ({ children }) => (
    <h3 className="text-lg font-semibold text-white mt-8 mb-3">
      {children}
    </h3>
  ),
  h4: ({ children }) => (
    <h4 className="text-base font-semibold text-slate-200 mt-6 mb-2">
      {children}
    </h4>
  ),
  p: ({ children }) => (
    <p className="text-slate-400 text-[15px] leading-relaxed mb-4">
      {children}
    </p>
  ),
  ul: ({ children }) => (
    <ul className="space-y-1.5 my-4 ml-4">
      {children}
    </ul>
  ),
  ol: ({ children }) => (
    <ol className="space-y-1.5 my-4 ml-4 list-decimal">
      {children}
    </ol>
  ),
  li: ({ children }) => (
    <li className="text-slate-400 text-[15px] leading-relaxed flex gap-2 items-start before:content-['—'] before:text-cyan-500/60 before:flex-shrink-0 list-none">
      {children}
    </li>
  ),
  a: ({ href, children }) => (
    <Link
      href={href ?? "#"}
      className="text-cyan-400 hover:text-cyan-300 underline underline-offset-2 decoration-cyan-500/40 hover:decoration-cyan-400 transition-colors"
    >
      {children}
    </Link>
  ),
  code: ({ children }) => (
    <code className="text-cyan-300 bg-cyan-950/30 border border-cyan-500/15 px-1.5 py-0.5 rounded text-[13px] font-mono">
      {children}
    </code>
  ),
  pre: ({ children }) => (
    <pre className="my-5 p-5 bg-[#030308] border border-white/[0.07] rounded-2xl overflow-x-auto text-[13px] text-slate-300 font-mono leading-relaxed">
      {children}
    </pre>
  ),
  blockquote: ({ children }) => (
    <blockquote className="my-5 pl-5 border-l-2 border-cyan-500/40 text-slate-400 italic">
      {children}
    </blockquote>
  ),
  hr: () => <hr className="my-10 border-white/[0.07]" />,
  strong: ({ children }) => <strong className="text-white font-semibold">{children}</strong>,
  em: ({ children }) => <em className="text-slate-300">{children}</em>,
  table: ({ children }) => (
    <div className="my-5 overflow-x-auto rounded-xl border border-white/[0.07]">
      <table className="w-full text-sm">{children}</table>
    </div>
  ),
  th: ({ children }) => (
    <th className="text-left text-[11px] font-semibold text-slate-500 uppercase tracking-wider px-4 py-3 border-b border-white/[0.07] bg-white/[0.02]">
      {children}
    </th>
  ),
  td: ({ children }) => (
    <td className="px-4 py-3 text-slate-400 border-b border-white/[0.04]">{children}</td>
  ),

  // Custom components exported for MDX use
  MentalModelBox,
  WorkflowStep,
  CommonMistakeBox,
  DebugBox,
  VerifyBox,
  NextStepBox,
  DifficultyBadge,
  ChecklistBox,
  EngineeringMindsetBox,
  ScientificThinkingBox,
  SafetyNoteBox,
  SpecTable,
  AtlasHero,
  ResearchFrontierBlock,
  WorkflowBridge,
  PinoutBox,
  WiringBox,
  SignalFlowDiagram,
  ConceptMap,
};
