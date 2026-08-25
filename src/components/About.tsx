import React from 'react';
import { GraduationCap, MapPin, Target, CheckCircle2, UserCheck, Sparkles } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const About: React.FC = () => {
  const { quickFacts } = PORTFOLIO_DATA;

  const coreFocusAreas = [
    'SQL Querying & Optimization',
    'Python (Pandas, NumPy, Matplotlib)',
    'Interactive Power BI Dashboards',
    'Excel Advanced Analysis & Formulas',
    'Data Cleaning & Transformation',
    'Business Intelligence & KPI Tracking'
  ];

  return (
    <section id="about" className="py-20 bg-[#08090D] relative border-t border-[#1F2430]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-mono mb-3">
            <UserCheck className="w-3.5 h-3.5" />
            <span>BACKGROUND & IDENTITY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            About <span className="gradient-text-cyan-purple">Me</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-xl mt-3">
            Connecting mathematical curiosity with real-world business context.
          </p>
        </div>

        {/* Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: Narrative Intro */}
          <div className="lg:col-span-7 space-y-6">
            
            <div className="p-6 rounded-2xl bg-[#101218] border border-[#1F2430] glass-panel space-y-4">
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-cyan-400" />
                Data Analytics & Problem Solving
              </h3>
              
              <p className="text-slate-300 text-base leading-relaxed">
                I'm <strong className="text-cyan-300 font-semibold">{PORTFOLIO_DATA.personal.name}</strong>, a BCA student at <strong className="text-white">Parul University, Vadodara</strong> focused on <span className="text-cyan-400 font-medium">Data Analytics</span>, <span className="text-purple-400 font-medium">Business Intelligence</span>, and building data-driven solutions.
              </p>

              <p className="text-slate-400 text-sm leading-relaxed">
                My work centers around processing structured and unstructured datasets, writing clean optimized SQL queries, aggregating metrics with Python, and translating transactional numbers into actionable visual Power BI dashboards for strategic decision making.
              </p>
            </div>

            {/* Core Competencies Checklist */}
            <div className="p-6 rounded-2xl bg-[#101218] border border-[#1F2430]">
              <h4 className="text-xs font-mono uppercase text-slate-400 tracking-wider mb-4">
                Core Analytical Toolkit
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {coreFocusAreas.map((area, idx) => (
                  <div key={idx} className="flex items-center gap-2.5 text-sm text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                    <span>{area}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: Quick Facts Card */}
          <div className="lg:col-span-5">
            <div className="rounded-2xl bg-gradient-to-b from-[#151821] to-[#101218] border border-[#1F2430] p-6 shadow-xl relative overflow-hidden glow-cyan-sm">
              <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 rounded-full blur-2xl pointer-events-none" />

              <div className="flex items-center justify-between pb-4 mb-6 border-b border-[#1F2430]">
                <h4 className="text-base font-bold text-white flex items-center gap-2">
                  <GraduationCap className="w-5 h-5 text-cyan-400" />
                  Quick Facts
                </h4>
                <span className="px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[11px] font-mono">
                  Verified Details
                </span>
              </div>

              <div className="space-y-4 font-sans text-sm">
                
                <div className="flex items-start justify-between pb-3 border-b border-[#1F2430]/60">
                  <span className="text-slate-400 text-xs uppercase font-mono">Education</span>
                  <span className="text-white font-semibold text-right">{quickFacts.education}</span>
                </div>

                <div className="flex items-start justify-between pb-3 border-b border-[#1F2430]/60">
                  <span className="text-slate-400 text-xs uppercase font-mono">Duration</span>
                  <span className="text-cyan-300 font-mono">{quickFacts.duration}</span>
                </div>

                <div className="flex items-start justify-between pb-3 border-b border-[#1F2430]/60">
                  <span className="text-slate-400 text-xs uppercase font-mono">Academic CGPA</span>
                  <span className="px-2 py-0.5 rounded bg-cyan-500/20 border border-cyan-500/40 text-cyan-300 font-bold font-mono">
                    {quickFacts.cgpa}
                  </span>
                </div>

                <div className="flex items-start justify-between pb-3 border-b border-[#1F2430]/60">
                  <span className="text-slate-400 text-xs uppercase font-mono">Focus Area</span>
                  <span className="text-purple-300 font-medium text-right">{quickFacts.focus}</span>
                </div>

                <div className="flex items-start justify-between pb-3 border-b border-[#1F2430]/60">
                  <span className="text-slate-400 text-xs uppercase font-mono flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-rose-400" /> Location
                  </span>
                  <span className="text-slate-200">{quickFacts.location}</span>
                </div>

                <div className="flex items-start justify-between pt-1">
                  <span className="text-slate-400 text-xs uppercase font-mono flex items-center gap-1">
                    <Target className="w-3 h-3 text-emerald-400" /> Target Role
                  </span>
                  <span className="text-emerald-400 font-semibold font-mono text-xs bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/30">
                    {quickFacts.currentGoal}
                  </span>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
