import React from 'react';
import { GraduationCap } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const Education: React.FC = () => {
  const { quickFacts } = PORTFOLIO_DATA;

  return (
    <div className="p-6 rounded-2xl bg-[#101218] border border-[#1F2430] glass-panel glow-cyan-sm space-y-4">
      <div className="flex items-center justify-between pb-4 border-b border-[#1F2430]">
        <div className="flex items-center gap-3">
          <div className="p-3 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400">
            <GraduationCap className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-white">
              {quickFacts.education}
            </h3>
            <span className="text-xs font-mono text-cyan-300">
              Vadodara, Gujarat, India
            </span>
          </div>
        </div>

        <span className="px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 font-mono text-xs font-bold">
          {quickFacts.duration}
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
        <div className="p-3.5 rounded-xl bg-[#151821] border border-[#1F2430]">
          <div className="text-xs font-mono text-slate-400">Cumulative CGPA</div>
          <div className="text-xl font-bold text-cyan-300 mt-1">{quickFacts.cgpa}</div>
        </div>

        <div className="p-3.5 rounded-xl bg-[#151821] border border-[#1F2430]">
          <div className="text-xs font-mono text-slate-400">Academic Specialization</div>
          <div className="text-xs font-semibold text-purple-300 mt-1.5">{quickFacts.focus}</div>
        </div>
      </div>
    </div>
  );
};
