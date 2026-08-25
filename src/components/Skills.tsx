import React, { useState } from 'react';
import { Database, Code2, BarChart3, Library, Wrench, Sparkles, Layers, Info } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const Skills: React.FC = () => {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);
  const [activeCategoryFilter, setActiveCategoryFilter] = useState<string>('All');

  const categoryIcons: Record<string, React.ReactNode> = {
    'Programming': <Code2 className="w-4 h-4 text-cyan-400" />,
    'Databases': <Database className="w-4 h-4 text-purple-400" />,
    'Data Analytics': <BarChart3 className="w-4 h-4 text-emerald-400" />,
    'Python Libraries': <Library className="w-4 h-4 text-amber-400" />,
    'Tools & Workflow': <Wrench className="w-4 h-4 text-sky-400" />,
  };

  // Skill matrix node mapping for relational graph visualizer
  const skillRelations: Record<string, { category: string; description: string; related: string[] }> = {
    'SQL': { category: 'Programming', description: 'Relational data query formulation, window functions, and multi-table joins.', related: ['MySQL', 'PostgreSQL', 'Oracle'] },
    'Python': { category: 'Programming', description: 'Core data manipulation, scripting, feature extraction, and automated analysis.', related: ['Pandas', 'NumPy', 'Matplotlib'] },
    'Power BI': { category: 'Data Analytics', description: 'Interactive dashboard creation, DAX measures, data modeling, and reporting.', related: ['Dashboards', 'Visualization', 'Business Analytics'] },
    'Excel': { category: 'Data Analytics', description: 'Advanced formulas, pivot tables, lookup functions, and tabular reporting.', related: ['Data Cleaning', 'Data Visualization'] },
    'Pandas': { category: 'Python Libraries', description: 'DataFrame operations, data wrangling, missing value handling, and grouping.', related: ['Python', 'NumPy'] },
    'MySQL': { category: 'Databases', description: 'Relational database management, schema queries, and analytical indexing.', related: ['SQL', 'PostgreSQL'] },
  };

  const categories = ['All', ...PORTFOLIO_DATA.skillCategories.map(c => c.category)];

  const filteredCategories = activeCategoryFilter === 'All'
    ? PORTFOLIO_DATA.skillCategories
    : PORTFOLIO_DATA.skillCategories.filter(c => c.category === activeCategoryFilter);

  return (
    <section id="skills" className="py-20 bg-[#08090D] relative border-t border-[#1F2430]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-300 text-xs font-mono mb-3">
            <Layers className="w-3.5 h-3.5" />
            <span>TECHNICAL MATRIX</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Skills & <span className="gradient-text-cyan-purple">Toolkit</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-xl mt-3">
            Analytical tools, relational databases, and data processing libraries derived from hands-on academic & project experience.
          </p>

          {/* Category Filters */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategoryFilter(cat)}
                className={`px-4 py-2 text-xs font-medium rounded-full transition-all duration-200 cursor-pointer ${
                  activeCategoryFilter === cat
                    ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/50 glow-cyan-sm'
                    : 'bg-[#101218] text-slate-400 border border-[#1F2430] hover:text-white hover:bg-[#151821]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Interactive Relational Skill Flowchart Visualizer */}
        <div className="mb-14 p-6 rounded-2xl bg-[#101218]/90 border border-[#1F2430] glass-panel glow-cyan-sm relative overflow-hidden">
          <div className="flex items-center justify-between pb-4 border-b border-[#1F2430] mb-6">
            <div className="flex items-center gap-2 text-xs font-mono text-cyan-400">
              <Sparkles className="w-4 h-4 text-cyan-400" />
              <span>INTERACTIVE DATA MATRIX FLOW</span>
            </div>
            <div className="text-[11px] font-mono text-slate-400 flex items-center gap-1">
              <Info className="w-3.5 h-3.5 text-slate-500" />
              Hover over a skill node to explore tool relations
            </div>
          </div>

          {/* Flowchart Diagram Nodes */}
          <div className="flex flex-col items-center gap-8 py-4">
            
            {/* Top Root Node */}
            <div className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-emerald-500/20 border border-cyan-500/40 text-white font-bold text-xs tracking-wider uppercase font-mono shadow-lg">
              DATA ANALYTICS PIPELINE
            </div>

            {/* Connecting Vertical Line */}
            <div className="w-0.5 h-6 bg-gradient-to-b from-cyan-500/50 to-purple-500/50" />

            {/* Core Pillars (SQL, Python, Power BI) */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl">
              
              {/* Pillar 1: SQL */}
              <div 
                onMouseEnter={() => setHoveredSkill('SQL')}
                onMouseLeave={() => setHoveredSkill(null)}
                className={`p-4 rounded-xl border transition-all duration-300 cursor-pointer ${
                  hoveredSkill === 'SQL' 
                    ? 'bg-cyan-500/15 border-cyan-400 glow-cyan-sm scale-105' 
                    : 'bg-[#151821] border-[#1F2430] hover:border-cyan-500/30'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-bold text-white font-mono flex items-center gap-2">
                    <Database className="w-4 h-4 text-cyan-400" /> SQL
                  </span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-cyan-500/10 text-cyan-300 border border-cyan-500/30">Querying</span>
                </div>
                <div className="text-xs text-slate-400">MySQL • PostgreSQL • Oracle</div>
              </div>

              {/* Pillar 2: Python */}
              <div 
                onMouseEnter={() => setHoveredSkill('Python')}
                onMouseLeave={() => setHoveredSkill(null)}
                className={`p-4 rounded-xl border transition-all duration-300 cursor-pointer ${
                  hoveredSkill === 'Python' 
                    ? 'bg-purple-500/15 border-purple-400 glow-purple-sm scale-105' 
                    : 'bg-[#151821] border-[#1F2430] hover:border-purple-500/30'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-bold text-white font-mono flex items-center gap-2">
                    <Code2 className="w-4 h-4 text-purple-400" /> Python
                  </span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-purple-500/10 text-purple-300 border border-purple-500/30">Analytics</span>
                </div>
                <div className="text-xs text-slate-400">Pandas • NumPy • Matplotlib</div>
              </div>

              {/* Pillar 3: Power BI */}
              <div 
                onMouseEnter={() => setHoveredSkill('Power BI')}
                onMouseLeave={() => setHoveredSkill(null)}
                className={`p-4 rounded-xl border transition-all duration-300 cursor-pointer ${
                  hoveredSkill === 'Power BI' 
                    ? 'bg-emerald-500/15 border-emerald-400 glow-emerald-sm scale-105' 
                    : 'bg-[#151821] border-[#1F2430] hover:border-emerald-500/30'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-bold text-white font-mono flex items-center gap-2">
                    <BarChart3 className="w-4 h-4 text-emerald-400" /> Power BI
                  </span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-300 border border-emerald-500/30">Dashboards</span>
                </div>
                <div className="text-xs text-slate-400">Excel • Visualization • KPIs</div>
              </div>

            </div>

          </div>

          {/* Hover Tooltip Information Banner */}
          {hoveredSkill && skillRelations[hoveredSkill] && (
            <div className="mt-4 p-3 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-xs text-slate-200 animate-in fade-in duration-200 flex items-center justify-between">
              <div>
                <span className="font-bold text-cyan-300 font-mono">{hoveredSkill}: </span>
                <span>{skillRelations[hoveredSkill].description}</span>
              </div>
              <div className="flex gap-1.5 font-mono text-[10px]">
                {skillRelations[hoveredSkill].related.map(r => (
                  <span key={r} className="px-2 py-0.5 rounded bg-[#101218] border border-cyan-500/40 text-cyan-300">
                    {r}
                  </span>
                ))}
              </div>
            </div>
          )}

        </div>

        {/* Skill Category Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((catGroup) => (
            <div 
              key={catGroup.category} 
              className="p-6 rounded-2xl bg-[#101218] border border-[#1F2430] hover:border-cyan-500/30 transition-all duration-300 glass-panel-hover"
            >
              <div className="flex items-center gap-3 pb-4 mb-4 border-b border-[#1F2430]">
                <div className="p-2.5 rounded-xl bg-[#151821] border border-[#1F2430]">
                  {categoryIcons[catGroup.category] || <Code2 className="w-4 h-4 text-cyan-400" />}
                </div>
                <h3 className="text-base font-bold text-white tracking-wide">
                  {catGroup.category}
                </h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {catGroup.skills.map((skill) => (
                  <div
                    key={skill}
                    onMouseEnter={() => setHoveredSkill(skill)}
                    onMouseLeave={() => setHoveredSkill(null)}
                    className="px-3 py-1.5 rounded-lg bg-[#151821] hover:bg-cyan-500/10 border border-[#1F2430] hover:border-cyan-500/40 text-xs text-slate-300 hover:text-cyan-300 font-mono transition-colors cursor-default"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
