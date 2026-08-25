import React from 'react';
import { Database, Mail, ArrowUp } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon } from './SocialIcons';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#08090D] border-t border-[#1F2430] py-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-[#1F2430]/60">
          
          {/* Brand */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center glow-cyan-sm">
              <Database className="w-5 h-5 text-cyan-400" />
            </div>
            <div>
              <div className="text-base font-bold text-white tracking-tight">
                {PORTFOLIO_DATA.personal.name}
              </div>
              <div className="text-xs font-mono text-cyan-400">
                Data Analyst • Business Analytics • Python • SQL
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4 text-slate-400 text-xs font-mono">
            <a
              href={PORTFOLIO_DATA.personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cyan-300 transition-colors flex items-center gap-1"
            >
              <GithubIcon className="w-4 h-4" /> GitHub
            </a>
            <a
              href={PORTFOLIO_DATA.personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-purple-300 transition-colors flex items-center gap-1"
            >
              <LinkedinIcon className="w-4 h-4" /> LinkedIn
            </a>
            <a
              href={`mailto:${PORTFOLIO_DATA.personal.email}`}
              className="hover:text-emerald-300 transition-colors flex items-center gap-1"
            >
              <Mail className="w-4 h-4" /> Email
            </a>
          </div>

          {/* Back to Top */}
          <button
            onClick={scrollToTop}
            className="p-3 rounded-xl bg-[#101218] hover:bg-cyan-500/10 border border-[#1F2430] hover:border-cyan-500/40 text-slate-400 hover:text-cyan-300 transition-colors flex items-center gap-2 text-xs font-mono cursor-pointer"
            aria-label="Back to top"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>

        </div>

        {/* Footer Subtext */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 font-mono gap-2">
          <div>
            Designed & built with curiosity, data, and code.
          </div>
          <div>
            © 2026 {PORTFOLIO_DATA.personal.name}. All rights reserved.
          </div>
        </div>

      </div>
    </footer>
  );
};
