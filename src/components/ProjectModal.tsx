import React, { useEffect, useRef } from 'react';
import { X, Shield, CheckCircle2, Layers } from 'lucide-react';
import type { Project } from '../data/portfolioData';
import { GithubIcon } from './SocialIcons';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!project) return;
    closeButtonRef.current?.focus();
    const onKeyDown = (event: KeyboardEvent) => { if (event.key === 'Escape') onClose(); };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#08090D]/80 backdrop-blur-md animate-in fade-in duration-200" onMouseDown={onClose} role="presentation">
      <div 
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-modal-title"
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-2xl bg-[#101218] border border-[#1F2430] p-6 shadow-2xl glass-panel glow-cyan-sm"
        onMouseDown={(e) => e.stopPropagation()}
      >
        
        {/* Close Button */}
        <button
          ref={closeButtonRef}
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl bg-[#151821] text-slate-400 hover:text-white border border-[#1F2430] hover:border-cyan-500/40 transition-colors cursor-pointer"
          aria-label="Close project modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="flex items-center gap-3 mb-2">
          <span className="px-2.5 py-1 rounded bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 font-mono text-xs font-bold">
            PROJECT {project.number}
          </span>
          <div className="flex flex-wrap gap-1.5">
            {project.technologies.map(t => (
              <span key={t} className="px-2 py-0.5 rounded bg-[#151821] border border-[#1F2430] text-[11px] font-mono text-slate-300">
                {t}
              </span>
            ))}
          </div>
        </div>

        <h3 id="project-modal-title" className="text-2xl font-bold text-white mb-4">
          {project.name}
        </h3>

        {/* Project Description */}
        <p className="text-slate-300 text-sm leading-relaxed mb-6">
          {project.description}
        </p>

        {/* Breakdown Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          
          {/* Approach & Methodology */}
          <div className="p-4 rounded-xl bg-[#151821] border border-[#1F2430]">
            <h4 className="text-xs font-mono uppercase text-cyan-400 tracking-wider mb-2 flex items-center gap-1.5">
              <Layers className="w-3.5 h-3.5" /> Approach & Methodology
            </h4>
            <p className="text-xs text-slate-300 leading-relaxed">
              {project.details}
            </p>
          </div>

          {/* Key Outcomes */}
          <div className="p-4 rounded-xl bg-[#151821] border border-[#1F2430]">
            <h4 className="text-xs font-mono uppercase text-purple-400 tracking-wider mb-2 flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5" /> Key Deliverables & Outcomes
            </h4>
            <ul className="space-y-1.5 text-xs text-slate-300">
              {project.outcomes.map((outcome, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-cyan-400 font-bold">•</span>
                  <span>{outcome}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Visual Mockup Preview Container */}
        <div className="p-4 rounded-xl bg-[#08090D] border border-[#1F2430] mb-6">
          <div className="text-[11px] font-mono text-slate-400 mb-2 flex items-center justify-between">
            <span>VISUAL PREVIEW MODEL</span>
            <span className="text-cyan-300">Interactive Project Mockup</span>
          </div>

          {project.visualType === 'financial_dashboard' && (
            <div className="space-y-3 font-mono text-xs">
              <div className="grid grid-cols-3 gap-2">
                <div className="p-2.5 rounded bg-[#101218] border border-[#1F2430]">
                  <div className="text-[10px] text-slate-500">Sales KPI</div>
                  <div className="text-base font-bold text-cyan-400">₹14.2M</div>
                </div>
                <div className="p-2.5 rounded bg-[#101218] border border-[#1F2430]">
                  <div className="text-[10px] text-slate-500">Profit KPI</div>
                  <div className="text-base font-bold text-emerald-400">₹3.8M</div>
                </div>
                <div className="p-2.5 rounded bg-[#101218] border border-[#1F2430]">
                  <div className="text-[10px] text-slate-500">Margin</div>
                  <div className="text-base font-bold text-purple-400">26.7%</div>
                </div>
              </div>
              <div className="p-3 rounded bg-[#101218] border border-[#1F2430] text-slate-400 text-[11px]">
                Regional Sales: North (42%) | West (31%) | South (27%)
              </div>
            </div>
          )}

          {project.visualType === 'customer_segmentation' && (
            <div className="space-y-3 font-mono text-xs">
              <div className="grid grid-cols-2 gap-2">
                <div className="p-2.5 rounded bg-[#101218] border border-[#1F2430]">
                  <div className="text-[10px] text-slate-500">RFM Cluster A</div>
                  <div className="text-sm font-bold text-emerald-400">High-Value Repeat</div>
                </div>
                <div className="p-2.5 rounded bg-[#101218] border border-[#1F2430]">
                  <div className="text-[10px] text-slate-500">RFM Cluster B</div>
                  <div className="text-sm font-bold text-cyan-400">Occasional Buyers</div>
                </div>
              </div>
            </div>
          )}

          {project.visualType === 'bal_kavach' && (
            <div className="space-y-3 font-mono text-xs">
              <div className="p-3 rounded bg-[#101218] border border-emerald-500/30 text-emerald-300 flex items-center justify-between">
                <span className="flex items-center gap-1.5">
                  <Shield className="w-4 h-4 text-emerald-400" /> System Status: Real-time Monitoring Active
                </span>
                <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-[10px]">NORMAL</span>
              </div>
              <div className="grid grid-cols-2 gap-2">
                <div className="p-2 rounded bg-[#101218] text-slate-400 text-[11px]">Geo-Fence: Safe Zone</div>
                <div className="p-2 rounded bg-[#101218] text-slate-400 text-[11px]">Threat Alerts: 0 Active</div>
              </div>
            </div>
          )}
        </div>

        {/* Footer CTAs */}
        <div className="flex items-center justify-between pt-4 border-t border-[#1F2430]">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-xl bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 text-xs font-semibold font-mono flex items-center gap-2 transition-colors"
            >
              <GithubIcon className="w-4 h-4" />
              <span>View Repository on GitHub</span>
            </a>
          )}

          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl bg-[#151821] hover:bg-white/5 text-slate-300 text-xs font-semibold transition-colors cursor-pointer"
          >
            Close Window
          </button>
        </div>

      </div>
    </div>
  );
};
