import React, { useState } from 'react';
import { Check, CheckCircle2, Code2, Copy, GitBranch, Rocket, Terminal } from 'lucide-react';

type Stage = 'plan' | 'build' | 'improve';

const content: Record<Stage, { label: string; title: string; text: string; code: string; checks: string[] }> = {
  plan: { label: '01. PLAN', title: 'Start with the user and the problem', text: 'I turn an idea into a small, clear scope before choosing components, data needs, and an interface.', code: `const project = {\n  problem: 'What should this solve?',\n  users: ['primary user'],\n  firstVersion: ['essential flow']\n};`, checks: ['Define the primary user flow', 'Keep the first release focused', 'Choose a maintainable stack'] },
  build: { label: '02. BUILD', title: 'Build in reusable, readable pieces', text: 'I use React components and TypeScript models to keep the interface consistent as a project grows.', code: `type ProjectCardProps = {\n  title: string;\n  technologies: string[];\n};\n\nexport function ProjectCard(props: ProjectCardProps) {\n  return <article>{props.title}</article>;\n}`, checks: ['Create reusable UI components', 'Model content with TypeScript', 'Design for mobile and desktop'] },
  improve: { label: '03. IMPROVE', title: 'Test, refine, and ship', text: 'I review interactions, fix rough edges, track work with Git, and iterate based on what the product needs.', code: `git checkout -b feature/improve-flow\ngit add src\ngit commit -m "improve project flow"\ngit push -u origin feature/improve-flow`, checks: ['Check responsive layouts', 'Use meaningful Git commits', 'Refine accessibility and feedback'] },
};

export const DataPipeline: React.FC = () => {
  const [stage, setStage] = useState<Stage>('plan');
  const [copied, setCopied] = useState(false);
  const item = content[stage];
  const copy = async () => { await navigator.clipboard.writeText(item.code); setCopied(true); window.setTimeout(() => setCopied(false), 1800); };
  const icons: Record<Stage, React.ReactNode> = { plan: <Terminal className="w-4 h-4" />, build: <Code2 className="w-4 h-4" />, improve: <GitBranch className="w-4 h-4" /> };
  return <section id="pipeline" className="py-20 bg-[#08090D] relative border-t border-[#1F2430]/60 grid-background">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col items-center text-center mb-12"><div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-mono mb-3"><Rocket className="w-3.5 h-3.5" /> HOW I BUILD</div><h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">A simple software <span className="gradient-text-cyan-purple">building loop</span></h2><p className="text-slate-400 text-sm sm:text-base max-w-xl mt-3">A repeatable approach I’m developing through projects: understand the problem, build deliberately, and improve through feedback.</p></div>
      <div className="rounded-2xl bg-[#101218] border border-[#1F2430] glass-panel overflow-hidden">
        <div className="grid grid-cols-1 sm:grid-cols-3 border-b border-[#1F2430]">{(Object.keys(content) as Stage[]).map((key) => <button key={key} onClick={() => setStage(key)} className={`px-5 py-4 text-left border-b sm:border-b-0 sm:border-r last:border-0 border-[#1F2430] transition-colors cursor-pointer ${stage === key ? 'bg-cyan-500/10 text-cyan-300' : 'text-slate-400 hover:bg-white/5 hover:text-white'}`}><span className="flex items-center gap-2 text-xs font-mono font-bold">{icons[key]} {content[key].label}</span></button>)}</div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-6 sm:p-8"><div><h3 className="text-2xl font-bold text-white">{item.title}</h3><p className="mt-3 text-sm leading-relaxed text-slate-400">{item.text}</p><ul className="mt-6 space-y-3">{item.checks.map((check) => <li key={check} className="flex gap-2 text-sm text-slate-300"><CheckCircle2 className="w-4 h-4 mt-0.5 shrink-0 text-cyan-400" />{check}</li>)}</ul></div><div className="rounded-xl bg-[#08090D] border border-[#1F2430] overflow-hidden"><div className="flex justify-between items-center px-4 py-3 border-b border-[#1F2430]"><span className="text-xs font-mono text-slate-400">{stage === 'improve' ? 'terminal' : 'implementation.tsx'}</span><button onClick={copy} className="flex items-center gap-1.5 text-xs font-mono text-slate-400 hover:text-cyan-300 cursor-pointer">{copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}{copied ? 'Copied' : 'Copy'}</button></div><pre className="p-5 overflow-x-auto text-xs leading-relaxed text-cyan-200 font-mono">{item.code}</pre></div></div>
      </div>
    </div>
  </section>;
};
