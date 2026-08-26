import React, { useState } from 'react';
import { BarChart3, Code2, PieChart, Shield, ExternalLink, ArrowRight, Layers } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import type { Project } from '../data/portfolioData';
import { ProjectModal } from './ProjectModal';

export const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const getVisualPreview = (type: Project['visualType']) => {
    switch (type) {
      case 'web_app':
        return (
          <div className="p-4 rounded-xl bg-[#08090D] border border-[#1F2430] font-mono text-xs space-y-3">
            <div className="flex items-center justify-between text-[11px] text-slate-400">
              <span className="flex items-center gap-1.5 text-cyan-400">
                <Code2 className="w-3.5 h-3.5" /> Component-driven interface
              </span>
              <span className="text-purple-300">React + TypeScript</span>
            </div>
            <div className="grid grid-cols-3 gap-2">
              {['Hero', 'Projects', 'Contact'].map((section) => (
                <div key={section} className="rounded bg-[#101218] border border-[#1F2430] px-2 py-3 text-center text-[10px] text-slate-300">
                  {section}
                </div>
              ))}
            </div>
            <div className="p-2 rounded bg-[#151821] text-[10px] text-slate-400 flex items-center justify-between">
              <span>Responsive layouts</span>
              <span className="text-cyan-300">Reusable components</span>
            </div>
          </div>
        );

      case 'data_platform':
        return (
          <div className="p-4 rounded-xl bg-[#08090D] border border-[#1F2430] font-mono text-xs space-y-3">
            <div className="flex items-center justify-between text-[11px] text-slate-400">
              <span className="flex items-center gap-1.5 text-purple-400">
                <PieChart className="w-3.5 h-3.5" /> Customer data workflow
              </span>
              <span className="text-cyan-300">Python + SQL</span>
            </div>
            <div className="flex items-center gap-2 text-[10px] text-slate-300">
              {['Raw data', 'RFM scoring', 'Segments'].map((step, index) => (
                <React.Fragment key={step}>
                  <span className="flex-1 rounded bg-[#101218] border border-[#1F2430] px-2 py-2 text-center">{step}</span>
                  {index < 2 && <ArrowRight className="w-3 h-3 shrink-0 text-cyan-400" />}
                </React.Fragment>
              ))}
            </div>
            <div className="p-2 rounded bg-[#151821] text-[10px] text-slate-400 flex items-center justify-between">
              <span>Structured summaries</span>
              <span className="text-purple-300">Actionable groups</span>
            </div>
          </div>
        );

      case 'financial_dashboard':
        return (
          <div className="p-4 rounded-xl bg-[#08090D] border border-[#1F2430] font-mono text-xs space-y-3">
            <div className="flex items-center justify-between text-[11px] text-slate-400">
              <span className="flex items-center gap-1.5 text-cyan-400">
                <BarChart3 className="w-3.5 h-3.5" /> Power BI Sales & Profit KPIs
              </span>
              <span className="text-emerald-400 font-bold">+14.8% YoY</span>
            </div>
            
            {/* Visual KPI Mockup */}
            <div className="grid grid-cols-2 gap-2">
              <div className="p-2.5 rounded bg-[#101218] border border-[#1F2430]">
                <div className="text-[10px] text-slate-500">Sales Volume</div>
                <div className="text-sm font-bold text-white mt-0.5">14,250 Units</div>
                <div className="w-full bg-[#1F2430] h-1.5 rounded-full mt-1.5 overflow-hidden">
                  <div className="bg-cyan-400 h-full w-[78%]" />
                </div>
              </div>
              <div className="p-2.5 rounded bg-[#101218] border border-[#1F2430]">
                <div className="text-[10px] text-slate-500">Net Profit</div>
                <div className="text-sm font-bold text-emerald-400 mt-0.5">₹3.82M</div>
                <div className="w-full bg-[#1F2430] h-1.5 rounded-full mt-1.5 overflow-hidden">
                  <div className="bg-emerald-400 h-full w-[64%]" />
                </div>
              </div>
            </div>

            <div className="p-2 rounded bg-[#151821] text-[10px] text-slate-400 flex items-center justify-between">
              <span>Category Slicers: Active</span>
              <span className="text-cyan-300">Data Cleansed & Transformed</span>
            </div>
          </div>
        );

      case 'customer_segmentation':
        return (
          <div className="p-4 rounded-xl bg-[#08090D] border border-[#1F2430] font-mono text-xs space-y-3">
            <div className="flex items-center justify-between text-[11px] text-slate-400">
              <span className="flex items-center gap-1.5 text-purple-400">
                <PieChart className="w-3.5 h-3.5" /> RFM Spending Distribution
              </span>
              <span className="text-purple-300">Python Analytics</span>
            </div>

            <div className="space-y-2">
              <div>
                <div className="flex justify-between text-[10px] text-slate-400 mb-1">
                  <span>High Spenders (Champions)</span>
                  <span className="text-cyan-300 font-bold">34%</span>
                </div>
                <div className="w-full bg-[#1F2430] h-2 rounded-full overflow-hidden">
                  <div className="bg-cyan-400 h-full w-[34%]" />
                </div>
              </div>

              <div>
                <div className="flex justify-between text-[10px] text-slate-400 mb-1">
                  <span>Frequent Buyers (Loyal)</span>
                  <span className="text-purple-300 font-bold">48%</span>
                </div>
                <div className="w-full bg-[#1F2430] h-2 rounded-full overflow-hidden">
                  <div className="bg-purple-400 h-full w-[48%]" />
                </div>
              </div>

              <div>
                <div className="flex justify-between text-[10px] text-slate-400 mb-1">
                  <span>At-Risk Segment</span>
                  <span className="text-rose-400 font-bold">18%</span>
                </div>
                <div className="w-full bg-[#1F2430] h-2 rounded-full overflow-hidden">
                  <div className="bg-rose-400 h-full w-[18%]" />
                </div>
              </div>
            </div>
          </div>
        );

      case 'bal_kavach':
        return (
          <div className="p-4 rounded-xl bg-[#08090D] border border-[#1F2430] font-mono text-xs space-y-3">
            <div className="flex items-center justify-between text-[11px] text-slate-400">
              <span className="flex items-center gap-1.5 text-emerald-400">
                <Shield className="w-3.5 h-3.5" /> AI Safety Architecture
              </span>
              <span className="px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-300 text-[9px]">Concept UI</span>
            </div>

            <div className="grid grid-cols-2 gap-2">
              <div className="p-2.5 rounded bg-[#101218] border border-[#1F2430]">
                <div className="text-[10px] text-slate-500">Parent Portal</div>
                <div className="text-xs font-bold text-white mt-1">Live Telemetry</div>
              </div>
              <div className="p-2.5 rounded bg-[#101218] border border-[#1F2430]">
                <div className="text-[10px] text-slate-500">Emergency Alert</div>
                <div className="text-xs font-bold text-emerald-400 mt-1">Instant Trigger</div>
              </div>
            </div>

            <div className="p-2 rounded bg-[#151821] text-[10px] text-slate-400 flex items-center justify-between">
              <span>Threat Detection Workflow</span>
              <span className="text-purple-300">Firebase Realtime</span>
            </div>
          </div>
        );
    }
  };

  return (
    <section id="projects" className="py-20 bg-[#08090D] relative border-t border-[#1F2430]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-mono mb-3">
            <Layers className="w-3.5 h-3.5" />
            <span>PORTFOLIO WORK</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Featured <span className="gradient-text-cyan-purple">Projects</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-xl mt-3">
            Practical applications of responsive web development, data processing, and mobile-first system architecture.
          </p>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PORTFOLIO_DATA.projects.map((project) => (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="group flex flex-col justify-between rounded-2xl bg-[#101218] border border-[#1F2430] hover:border-cyan-500/40 p-6 glass-panel-hover cursor-pointer transition-all duration-300 transform hover:-translate-y-1"
            >
              <div>
                
                {/* Header Badge */}
                <div className="flex items-center justify-between mb-4">
                  <span className="px-2.5 py-1 rounded bg-[#151821] border border-[#1F2430] font-mono text-cyan-400 text-xs font-bold">
                    {project.number}
                  </span>
                  <span className="text-xs text-slate-500 font-mono flex items-center gap-1 group-hover:text-cyan-300 transition-colors">
                    Click for details <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors mb-2">
                  {project.name}
                </h3>

                {/* Short Description */}
                <p className="text-slate-400 text-xs leading-relaxed mb-4 line-clamp-2">
                  {project.description}
                </p>

                {/* Tech Stack Pills */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="px-2 py-0.5 rounded bg-[#151821] border border-[#1F2430] text-[10px] font-mono text-slate-300">
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Custom Visual Preview Widget */}
                {getVisualPreview(project.visualType)}

              </div>

              {/* Bottom Footer CTA */}
              <div className="mt-6 pt-4 border-t border-[#1F2430] flex items-center justify-between">
                <span className="text-xs font-semibold text-slate-300 group-hover:text-cyan-300 flex items-center gap-1 transition-colors">
                  Explore Full Case Study
                </span>
                <div className="p-2 rounded-lg bg-[#151821] group-hover:bg-cyan-500/20 text-slate-400 group-hover:text-cyan-300 transition-colors">
                  <ExternalLink className="w-4 h-4" />
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Expandable Project Detail Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
