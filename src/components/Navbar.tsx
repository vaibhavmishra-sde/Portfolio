import React, { useState, useEffect } from 'react';
import { Menu, X, FileText, Database } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface NavbarProps {
  onOpenResume: () => void;
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenResume, activeSection }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'overview', label: 'Overview' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'pipeline', label: 'Workflow' },
    { id: 'projects', label: 'Projects' },
    { id: 'opensource', label: 'Open Source' },
    { id: 'certifications', label: 'Certifications' },
    { id: 'contact', label: 'Contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -80;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'py-3 premium-glass' 
        : 'py-5 bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Identity */}
          <a 
            href="#overview" 
            onClick={(e) => { e.preventDefault(); scrollToSection('overview'); }}
            className="flex items-center gap-3 group focus:outline-none"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 flex items-center justify-center group-hover:border-cyan-400/60 transition-all glow-cyan-sm">
              <Database className="w-5 h-5 text-cyan-400 group-hover:rotate-12 transition-transform duration-300" />
            </div>
            <div className="flex flex-col">
              <span className="text-base font-bold tracking-tight text-white flex items-center gap-1.5">
                {PORTFOLIO_DATA.personal.name}
              </span>
              <span className="text-[11px] font-mono text-cyan-400/90 tracking-wide">
                Software Developer
              </span>
            </div>
          </a>

          {/* Desktop Links */}
          <nav className="hidden lg:flex items-center gap-1 bg-[#101218]/80 p-1.5 rounded-full border border-[#1F2430]">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`relative px-3.5 py-1.5 text-xs font-medium rounded-full transition-all duration-300 cursor-pointer overflow-hidden ${
                    isActive 
                      ? 'text-cyan-200 shadow-[0_0_15px_rgba(0,240,255,0.25)]' 
                      : 'text-slate-400 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {isActive && (
                    <span className="absolute inset-0 bg-cyan-500/20 border border-cyan-400/50 rounded-full animate-pulse-glow"></span>
                  )}
                  <span className="relative z-10">{item.label}</span>
                </button>
              );
            })}
          </nav>

          {/* Right Status + Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Internship Status Badge */}
            <div className="hidden xl:flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[11px] font-medium">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>Open to Developer Internships</span>
            </div>

            {/* Resume Button */}
            <button
              onClick={onOpenResume}
              className="flex items-center gap-2 px-4 py-2 text-xs font-semibold text-slate-200 bg-[#151821] hover:bg-cyan-500/10 hover:text-cyan-300 border border-[#1F2430] hover:border-cyan-500/40 rounded-lg transition-all duration-200 focus:outline-none cursor-pointer"
            >
              <FileText className="w-3.5 h-3.5 text-cyan-400" />
              <span>Resume</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={onOpenResume}
              className="p-2 text-slate-300 hover:text-cyan-400 bg-[#101218] border border-[#1F2430] rounded-lg cursor-pointer"
              title="Download Resume"
            >
              <FileText className="w-4 h-4" />
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-lg bg-[#101218] border border-[#1F2430] text-slate-300 hover:text-white focus:outline-none cursor-pointer"
              aria-label="Toggle mobile menu"
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-navigation"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#08090D]/95 backdrop-blur-2xl border-b border-[#1F2430] px-4 pt-3 pb-6 animate-in slide-in-from-top duration-200">
          <div className="mb-3 px-3 py-2 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span>Open to Developer Internships</span>
          </div>

          <nav id="mobile-navigation" className="flex flex-col gap-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`text-left px-4 py-2.5 text-sm font-medium rounded-lg transition-colors cursor-pointer ${
                  activeSection === item.id 
                    ? 'bg-cyan-500/15 text-cyan-300 border border-cyan-500/30' 
                    : 'text-slate-300 hover:bg-white/5'
                }`}
              >
                {item.label}
              </button>
            ))}

            <button
              onClick={() => { setMobileMenuOpen(false); onOpenResume(); }}
              className="mt-2 flex items-center justify-center gap-2 w-full py-3 text-xs font-semibold text-cyan-300 bg-cyan-500/10 border border-cyan-500/30 rounded-lg cursor-pointer"
            >
              <FileText className="w-4 h-4" />
              <span>Download Full Resume (PDF)</span>
            </button>
          </nav>
        </div>
      )}
    </header>
  );
};
