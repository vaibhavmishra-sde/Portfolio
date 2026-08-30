import React, { useState } from 'react';
import { Code2, Database, Wrench, Library, Layers, Sparkles, Info } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

const details: Record<string, { description: string; related: string[] }> = {
  React: { description: 'Building reusable, component-driven interfaces.', related: ['TypeScript', 'Vite'] },
  TypeScript: { description: 'Adding safer, clearer models to frontend applications.', related: ['React', 'JavaScript'] },
  Python: { description: 'Writing scripts and data-processing utilities for practical problems.', related: ['SQL', 'Firebase'] },
  SQL: { description: 'Working with relational data through queries, joins, and aggregation.', related: ['MySQL', 'PostgreSQL'] },
  Git: { description: 'Using version control to make iterative work traceable and collaborative.', related: ['GitHub', 'Debugging'] },
};

export const Skills: React.FC = () => {
  const [selected, setSelected] = useState('React');
  const [filter, setFilter] = useState('All');
  const categories = ['All', ...PORTFOLIO_DATA.skillCategories.map(({ category }) => category)];
  const visible = filter === 'All' ? PORTFOLIO_DATA.skillCategories : PORTFOLIO_DATA.skillCategories.filter(({ category }) => category === filter);
  const icons: Record<string, React.ReactNode> = {
    Frontend: <Code2 className="w-4 h-4 text-cyan-400" />, 'Backend & Data': <Database className="w-4 h-4 text-purple-400" />,
    'Development Practices': <Wrench className="w-4 h-4 text-emerald-400" />, Tools: <Library className="w-4 h-4 text-amber-400" />,
  };

  return <section id="skills" className="py-20 bg-[#08090D] relative border-t border-[#1F2430]/60">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col items-center text-center mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-300 text-xs font-mono mb-3"><Layers className="w-3.5 h-3.5" /> TECHNICAL TOOLKIT</div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">Skills I’m <span className="gradient-text-cyan-purple">Building With</span></h2>
        <p className="text-slate-400 text-sm sm:text-base max-w-xl mt-3">A practical stack for creating responsive interfaces, working with data, and collaborating on software.</p>
        <div className="flex flex-wrap justify-center gap-2 mt-7">{categories.map((category) => <button key={category} onClick={() => setFilter(category)} className={`px-4 py-2 text-xs rounded-full border transition-all cursor-pointer ${filter === category ? 'bg-cyan-500/20 text-cyan-300 border-cyan-500/50' : 'bg-[#101218] text-slate-400 border-[#1F2430] hover:text-white'}`}>{category}</button>)}</div>
      </div>
      <div className="mb-10 p-6 rounded-2xl bg-[#101218] border border-[#1F2430] glass-panel">
        <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-[#1F2430]"><span className="flex items-center gap-2 text-xs font-mono text-cyan-400"><Sparkles className="w-4 h-4" /> DEVELOPMENT FOCUS</span><span className="flex items-center gap-1 text-[11px] font-mono text-slate-400"><Info className="w-3.5 h-3.5" /> Select a highlighted skill</span></div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-5">{['React', 'TypeScript', 'Python', 'SQL', 'Git'].map((skill) => <button key={skill} onClick={() => setSelected(skill)} className={`p-4 text-left rounded-xl border transition-all cursor-pointer ${selected === skill ? 'bg-cyan-500/10 border-cyan-500/50' : 'bg-[#151821] border-[#1F2430] hover:border-cyan-500/30'}`}><span className="font-mono text-sm font-bold text-white">{skill}</span><span className="block text-xs text-slate-400 mt-2">{details[skill].description}</span></button>)}</div>
        <div className="mt-4 text-xs text-slate-300">Currently exploring: <span className="text-cyan-300 font-mono">{details[selected].related.join(' · ')}</span></div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">{visible.map((group) => <div key={group.category} className="p-6 rounded-2xl bg-[#101218] border border-[#1F2430] glass-panel-hover"><div className="flex items-center gap-3 pb-4 mb-4 border-b border-[#1F2430]"><div className="p-2.5 rounded-xl bg-[#151821] border border-[#1F2430]">{icons[group.category]}</div><h3 className="text-base font-bold text-white">{group.category}</h3></div><div className="flex flex-wrap gap-2">{group.skills.map((skill) => <span key={skill} className="px-3 py-1.5 rounded-lg bg-[#151821] border border-[#1F2430] text-xs text-slate-300 font-mono">{skill}</span>)}</div></div>)}</div>
    </div>
  </section>;
};
