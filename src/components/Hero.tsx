import React, { useState } from 'react';
import { ArrowRight, Download, BarChart2, TrendingUp, Cpu, Terminal } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon } from './SocialIcons';

interface HeroProps {
  onOpenResume: () => void;
  onScrollToProjects: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume, onScrollToProjects }) => {
  const [activeKpiFilter, setActiveKpiFilter] = useState<'revenue' | 'conversion' | 'growth'>('revenue');

  const kpiData = {
    revenue: { label: 'Total Revenue', value: '₹12.4M', change: '+18.6%', color: 'text-cyan-400', path: 'M0 45 Q 40 10, 80 35 T 160 15 T 240 30 T 320 5' },
    conversion: { label: 'Avg Conversion', value: '6.8%', change: '+2.4%', color: 'text-purple-400', path: 'M0 50 Q 40 40, 80 20 T 160 35 T 240 10 T 320 22' },
    growth: { label: 'MoM Growth', value: '+24.2%', change: '+5.1%', color: 'text-emerald-400', path: 'M0 55 Q 40 30, 80 40 T 160 18 T 240 25 T 320 8' },
  };

  return (
    <section id="overview" className="relative pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden grid-background">
      {/* Background Orbs */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none -z-10 animate-pulse-glow" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-[120px] pointer-events-none -z-10 animate-pulse-glow" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Hero Typography & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6">
            
            {/* Internship Status Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-mono font-medium tracking-wide glow-cyan-sm">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
              <span>{PORTFOLIO_DATA.personal.heroBadge}</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
                Hi, I'm <span className="gradient-text-cyan-purple">{PORTFOLIO_DATA.personal.name}</span>.
              </h1>
              <p className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-200 leading-snug">
                I turn <span className="text-cyan-400">data</span> into <span className="text-purple-400">insights</span>, <span className="text-cyan-300">dashboards</span>, and <span className="text-emerald-400">decisions</span>.
              </p>
            </div>

            {/* Subtext Description */}
            <p className="text-base sm:text-lg text-slate-400 max-w-2xl leading-relaxed">
              {PORTFOLIO_DATA.personal.heroDescription}
            </p>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={onScrollToProjects}
                className="px-6 py-3.5 rounded-xl bg-cyan-500 text-[#08090D] font-bold text-sm tracking-wide flex items-center gap-2 hover:bg-cyan-400 transition-all duration-200 glow-cyan-sm transform hover:-translate-y-0.5 active:translate-y-0 focus:outline-none cursor-pointer"
              >
                <span>View My Projects</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onOpenResume}
                className="px-6 py-3.5 rounded-xl bg-[#101218] hover:bg-[#151821] text-slate-200 hover:text-white font-semibold text-sm border border-[#1F2430] hover:border-cyan-500/40 flex items-center gap-2 transition-all duration-200 focus:outline-none cursor-pointer"
              >
                <Download className="w-4 h-4 text-cyan-400" />
                <span>Download Resume</span>
              </button>

              {/* Social Links */}
              <div className="flex items-center gap-2 pl-2">
                <a
                  href={PORTFOLIO_DATA.personal.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-[#101218] hover:bg-cyan-500/10 border border-[#1F2430] hover:border-cyan-500/40 text-slate-400 hover:text-cyan-300 transition-colors"
                  aria-label="GitHub Profile"
                >
                  <GithubIcon className="w-4 h-4" />
                </a>

                <a
                  href={PORTFOLIO_DATA.personal.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-[#101218] hover:bg-purple-500/10 border border-[#1F2430] hover:border-purple-500/40 text-slate-400 hover:text-purple-300 transition-colors"
                  aria-label="LinkedIn Profile"
                >
                  <LinkedinIcon className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Core Tech Stack Badges */}
            <div className="pt-4 border-t border-[#1F2430]/60 w-full flex flex-wrap items-center gap-3 text-xs text-slate-400">
              <span className="font-mono text-slate-500 uppercase tracking-wider text-[11px]">Primary Tools:</span>
              {['SQL', 'Python', 'Power BI', 'Excel', 'Pandas', 'PostgreSQL'].map((tech) => (
                <span key={tech} className="px-2.5 py-1 rounded-md bg-[#101218] border border-[#1F2430] font-mono text-cyan-300/90 text-[11px]">
                  {tech}
                </span>
              ))}
            </div>

          </div>

          {/* Right Column: Interactive Data Dashboard Visualizer */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl bg-[#101218]/90 border border-[#1F2430] p-5 shadow-2xl glass-panel glow-cyan-sm overflow-hidden">
              
              {/* Card Header & Controls */}
              <div className="flex items-center justify-between pb-4 border-b border-[#1F2430]">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  <span className="ml-2 text-xs font-mono text-slate-400 flex items-center gap-1.5">
                    <BarChart2 className="w-3.5 h-3.5 text-cyan-400" />
                    analytics_dashboard.pbix
                  </span>
                </div>
                <div className="flex items-center gap-1 bg-[#151821] p-1 rounded-lg border border-[#1F2430]">
                  {(['revenue', 'conversion', 'growth'] as const).map((key) => (
                    <button
                      key={key}
                      onClick={() => setActiveKpiFilter(key)}
                      className={`px-2 py-0.5 text-[10px] font-mono capitalize rounded cursor-pointer ${
                        activeKpiFilter === key ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40' : 'text-slate-400 hover:text-slate-200'
                      }`}
                    >
                      {key}
                    </button>
                  ))}
                </div>
              </div>

              {/* Decorative Banner Note */}
              <div className="my-3 px-3 py-1.5 rounded-lg bg-cyan-500/10 border border-cyan-500/20 text-[10px] text-cyan-300 font-mono flex items-center justify-between">
                <span>UI Interactive Mockup</span>
                <span className="text-slate-400">Live Metric Simulation</span>
              </div>

              {/* Grid Metrics Display */}
              <div className="grid grid-cols-2 gap-3 my-4">
                
                <div className={`p-3.5 rounded-xl border transition-all duration-300 ${
                  activeKpiFilter === 'revenue' 
                    ? 'bg-cyan-500/10 border-cyan-500/40 glow-cyan-sm' 
                    : 'bg-[#151821] border-[#1F2430]'
                }`}>
                  <div className="text-[11px] text-slate-400 font-mono">Revenue KPI</div>
                  <div className="text-xl font-bold text-white mt-1">₹12.4M</div>
                  <div className="text-[10px] font-mono text-emerald-400 flex items-center gap-1 mt-0.5">
                    <TrendingUp className="w-3 h-3" /> +18.6% MoM
                  </div>
                </div>

                <div className={`p-3.5 rounded-xl border transition-all duration-300 ${
                  activeKpiFilter === 'growth' 
                    ? 'bg-emerald-500/10 border-emerald-500/40 glow-emerald-sm' 
                    : 'bg-[#151821] border-[#1F2430]'
                }`}>
                  <div className="text-[11px] text-slate-400 font-mono">Growth Index</div>
                  <div className="text-xl font-bold text-white mt-1">+24.2%</div>
                  <div className="text-[10px] font-mono text-cyan-400 flex items-center gap-1 mt-0.5">
                    <Cpu className="w-3 h-3" /> Target Met
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-[#151821] border border-[#1F2430]">
                  <div className="text-[11px] text-slate-400 font-mono">Customers</div>
                  <div className="text-xl font-bold text-white mt-1">8,421</div>
                  <div className="text-[10px] font-mono text-purple-400 mt-0.5">Active Segment</div>
                </div>

                <div className={`p-3.5 rounded-xl border transition-all duration-300 ${
                  activeKpiFilter === 'conversion' 
                    ? 'bg-purple-500/10 border-purple-500/40 glow-purple-sm' 
                    : 'bg-[#151821] border-[#1F2430]'
                }`}>
                  <div className="text-[11px] text-slate-400 font-mono">Conversion</div>
                  <div className="text-xl font-bold text-white mt-1">6.8%</div>
                  <div className="text-[10px] font-mono text-emerald-400 mt-0.5">+2.4% vs Prev</div>
                </div>

              </div>

              {/* Animated SVG Trend Line Chart */}
              <div className="relative p-3 rounded-xl bg-[#08090D]/80 border border-[#1F2430] overflow-hidden">
                <div className="flex items-center justify-between text-[11px] font-mono text-slate-400 mb-2">
                  <span className="flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
                    {kpiData[activeKpiFilter].label} Trend
                  </span>
                  <span className={kpiData[activeKpiFilter].color}>
                    {kpiData[activeKpiFilter].change}
                  </span>
                </div>

                <div className="h-20 w-full relative">
                  <svg className="w-full h-full overflow-visible" viewBox="0 0 320 60">
                    <line x1="0" y1="15" x2="320" y2="15" stroke="#1F2430" strokeDasharray="3 3" />
                    <line x1="0" y1="40" x2="320" y2="40" stroke="#1F2430" strokeDasharray="3 3" />
                    
                    <path
                      d={kpiData[activeKpiFilter].path}
                      fill="none"
                      stroke={activeKpiFilter === 'revenue' ? '#00F0FF' : activeKpiFilter === 'conversion' ? '#8B5CF6' : '#10B981'}
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      className="transition-all duration-500 ease-out"
                    />

                    <path
                      d={`${kpiData[activeKpiFilter].path} L 320 60 L 0 60 Z`}
                      fill={activeKpiFilter === 'revenue' ? 'url(#cyanGrad)' : activeKpiFilter === 'conversion' ? 'url(#purpleGrad)' : 'url(#emeraldGrad)'}
                      opacity="0.25"
                    />

                    <defs>
                      <linearGradient id="cyanGrad" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#00F0FF" />
                        <stop offset="100%" stopColor="#00F0FF" stopOpacity="0" />
                      </linearGradient>
                      <linearGradient id="purpleGrad" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#8B5CF6" />
                        <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0" />
                      </linearGradient>
                      <linearGradient id="emeraldGrad" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#10B981" />
                        <stop offset="100%" stopColor="#10B981" stopOpacity="0" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
              </div>

              {/* Live SQL Preview Widget */}
              <div className="mt-3 p-3 rounded-xl bg-[#08090D] border border-[#1F2430] font-mono text-[11px] text-slate-300 flex items-center justify-between">
                <div className="flex items-center gap-2 text-cyan-400">
                  <Terminal className="w-3.5 h-3.5" />
                  <span className="text-slate-200">SELECT</span>
                  <span className="text-cyan-300">category, SUM(sales)</span>
                  <span className="text-purple-300">GROUP BY 1</span>
                </div>
                <span className="px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-400 text-[9px]">200 OK</span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
