import React, { useState } from 'react';
import { GitPullRequest, GitBranch, Award } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { GithubIcon } from './SocialIcons';

export const OpenSource: React.FC = () => {
  const { openSource } = PORTFOLIO_DATA;
  const [hoveredBlock, setHoveredBlock] = useState<number | null>(null);

  // Generate 52 sample activity blocks for visual heatmap simulation
  const heatmapBlocks = Array.from({ length: 52 }, (_, i) => ({
    id: i,
    level: (i * 7 + 3) % 4, // 0, 1, 2, 3 activity intensity
    label: `Week ${i + 1}: Collaborative Contributions`
  }));

  const getIntensityColor = (level: number) => {
    switch (level) {
      case 0: return 'bg-[#151821] border-[#1F2430]';
      case 1: return 'bg-cyan-950/80 border-cyan-800/40';
      case 2: return 'bg-cyan-600/60 border-cyan-500/60';
      case 3: return 'bg-cyan-400 border-cyan-300 shadow-[0_0_8px_rgba(0,240,255,0.4)]';
      default: return 'bg-[#151821] border-[#1F2430]';
    }
  };

  return (
    <section id="opensource" className="py-20 bg-[#08090D] relative border-t border-[#1F2430]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="flex flex-col items-center text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-mono mb-3">
            <GitPullRequest className="w-3.5 h-3.5" />
            <span>COMMUNITY & COLLABORATION</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Open Source <span className="gradient-text-emerald-cyan">Contributions</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-xl mt-3">
            Active participant in open-source ecosystems, collaborative version control with Git/GitHub, and community development.
          </p>
        </div>

        {/* Highlight Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          
          {/* Card 1: GSSoC 2026 */}
          <div className="p-6 rounded-2xl bg-[#101218] border border-[#1F2430] hover:border-cyan-500/40 glass-panel-hover space-y-4">
            <div className="flex items-center justify-between">
              <div className="p-3 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400">
                <Award className="w-6 h-6" />
              </div>
              <span className="px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 font-mono text-xs font-bold">
                PROGRAM CONTRIBUTOR
              </span>
            </div>

            <h3 className="text-xl font-bold text-white">
              {openSource.gssoc.role}
            </h3>

            <div className="text-xs font-mono text-cyan-300">
              {openSource.gssoc.organization}
            </div>

            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
              {openSource.gssoc.description}
            </p>

            <div className="pt-2 flex flex-wrap gap-2 text-[11px] font-mono">
              <span className="px-2.5 py-1 rounded bg-[#151821] border border-[#1F2430] text-slate-300">Git / GitHub</span>
              <span className="px-2.5 py-1 rounded bg-[#151821] border border-[#1F2430] text-slate-300">Issue Triage</span>
              <span className="px-2.5 py-1 rounded bg-[#151821] border border-[#1F2430] text-slate-300">Pull Requests</span>
            </div>
          </div>

          {/* Card 2: OpenSource Connect India (OSCI) */}
          <div className="p-6 rounded-2xl bg-[#101218] border border-[#1F2430] hover:border-purple-500/40 glass-panel-hover space-y-4">
            <div className="flex items-center justify-between">
              <div className="p-3 rounded-xl bg-purple-500/10 border border-purple-500/30 text-purple-400">
                <GitBranch className="w-6 h-6" />
              </div>
              <span className="px-3 py-1 rounded-full bg-purple-500/20 text-purple-300 border border-purple-500/40 font-mono text-xs font-bold">
                SELECTED CONTRIBUTOR
              </span>
            </div>

            <h3 className="text-xl font-bold text-white">
              {openSource.osci.organization}
            </h3>

            <div className="text-xs font-mono text-purple-300">
              {openSource.osci.role}
            </div>

            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
              {openSource.osci.description}
            </p>

            <div className="pt-2 flex flex-wrap gap-2 text-[11px] font-mono">
              <span className="px-2.5 py-1 rounded bg-[#151821] border border-[#1F2430] text-slate-300">Open Source India</span>
              <span className="px-2.5 py-1 rounded bg-[#151821] border border-[#1F2430] text-slate-300">Collaborative Dev</span>
            </div>
          </div>

        </div>

        {/* GitHub Activity Heatmap Panel Visualizer */}
        <div className="p-6 rounded-2xl bg-[#101218] border border-[#1F2430] glass-panel glow-cyan-sm space-y-4">
          <div className="flex items-center justify-between pb-4 border-b border-[#1F2430]">
            <div className="flex items-center gap-2 text-xs font-mono text-slate-300">
              <GithubIcon className="w-4 h-4 text-cyan-400" />
              <span>GITHUB ACTIVITY HEATMAP (Simulated UI)</span>
            </div>
            <a
              href={PORTFOLIO_DATA.personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-mono text-cyan-400 hover:underline flex items-center gap-1"
            >
              View github.com/vaibhavmishra-sde ↗
            </a>
          </div>

          {/* Grid Blocks */}
          <div className="space-y-2">
            <div className="text-[11px] font-mono text-slate-400">Activity Overview</div>
            <div className="grid grid-cols-13 sm:grid-cols-26 md:grid-cols-52 gap-1.5 py-2">
              {heatmapBlocks.map((block) => (
                <div
                  key={block.id}
                  onMouseEnter={() => setHoveredBlock(block.id)}
                  onMouseLeave={() => setHoveredBlock(null)}
                  className={`h-4 rounded-sm border transition-all duration-200 cursor-pointer ${getIntensityColor(block.level)} ${
                    hoveredBlock === block.id ? 'scale-125 z-10' : ''
                  }`}
                  title={block.label}
                />
              ))}
            </div>

            <div className="flex items-center justify-between text-[10px] font-mono text-slate-400 pt-2">
              <span>Collaborative Open-Source Workflow</span>
              <div className="flex items-center gap-1.5">
                <span>Less</span>
                <div className="w-2.5 h-2.5 rounded-sm bg-[#151821] border border-[#1F2430]" />
                <div className="w-2.5 h-2.5 rounded-sm bg-cyan-950 border border-cyan-800" />
                <div className="w-2.5 h-2.5 rounded-sm bg-cyan-600 border border-cyan-500" />
                <div className="w-2.5 h-2.5 rounded-sm bg-cyan-400 border border-cyan-300" />
                <span>More</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
