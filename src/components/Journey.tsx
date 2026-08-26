import React from 'react';
import { Compass, CheckCircle2, Award, Target } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { Education } from './Education';

export const Journey: React.FC = () => {
  const { journey, achievements } = PORTFOLIO_DATA;

  return (
    <section id="journey" className="py-20 bg-[#08090D] relative border-t border-[#1F2430]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-300 text-xs font-mono mb-3">
            <Compass className="w-3.5 h-3.5" />
            <span>PROGRESSION TIMELINE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Learning & <span className="gradient-text-cyan-purple">Building</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-xl mt-3">
            A timeline of academic milestones, projects, open-source selections, and ongoing software development growth.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Non-employment Timeline */}
          <div className="lg:col-span-7 relative pl-6 border-l border-[#1F2430] space-y-10">
            {journey.map((item, idx) => (
              <div key={idx} className="relative group">
                
                {/* Timeline Circle Bullet */}
                <div className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full bg-[#101218] border-2 border-cyan-400 group-hover:bg-cyan-400 transition-colors glow-cyan-sm" />

                <div className="p-5 rounded-2xl bg-[#101218] border border-[#1F2430] hover:border-cyan-500/40 glass-panel-hover space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="px-2.5 py-0.5 rounded bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 font-mono text-xs font-bold">
                      {item.year}
                    </span>
                    <span className="text-[11px] font-mono text-purple-300">
                      {item.tag}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>

              </div>
            ))}
          </div>

          {/* Right Column: Education & Key Achievements */}
          <div className="lg:col-span-5 space-y-8">
            
            {/* Education Card */}
            <div>
              <h3 className="text-xs font-mono uppercase text-slate-400 tracking-wider mb-4 flex items-center gap-2">
                <Target className="w-4 h-4 text-cyan-400" /> Academic Degree
              </h3>
              <Education />
            </div>

            {/* Achievements Card */}
            <div className="p-6 rounded-2xl bg-[#101218] border border-[#1F2430] space-y-4">
              <h3 className="text-base font-bold text-white flex items-center gap-2 pb-3 border-b border-[#1F2430]">
                <Award className="w-5 h-5 text-purple-400" />
                Key Achievements
              </h3>

              <div className="space-y-3">
                {achievements.map((ach, idx) => (
                  <div key={idx} className="flex items-start gap-3 text-xs text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{ach}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
