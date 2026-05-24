interface WorkflowStepProps {
  step: number;
  title: string;
  children: React.ReactNode;
}

export default function WorkflowStep({ step, title, children }: WorkflowStepProps) {
  return (
    <div className="my-5 flex gap-4">
      <div className="flex-shrink-0 flex flex-col items-center">
        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-white text-sm font-bold shadow-lg shadow-cyan-500/20">
          {step}
        </div>
        <div className="flex-1 w-px bg-white/[0.07] mt-2" />
      </div>
      <div className="flex-1 pb-6">
        <h4 className="text-white font-semibold text-[15px] mb-2 mt-1">{title}</h4>
        <div className="text-slate-400 text-sm leading-relaxed [&>p]:mb-2 [&>p:last-child]:mb-0 [&>pre]:my-3 [&>ul]:my-2 [&>ul]:list-disc [&>ul]:pl-4">
          {children}
        </div>
      </div>
    </div>
  );
}
