import React from 'react';
import { ArrowUpRight, BriefcaseBusiness, FileText } from 'lucide-react';

interface RecruiterDockProps { onOpenResume: () => void; }

export const RecruiterDock: React.FC<RecruiterDockProps> = ({ onOpenResume }) => {
  const goTo = (id: string) => {
    const behavior = window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth';
    document.getElementById(id)?.scrollIntoView({ behavior });
  };

  return (
    <aside className="recruiter-dock" aria-label="Recruiter quick actions">
      <span className="recruiter-dock-label">Quick scan</span>
      <button type="button" onClick={onOpenResume}><FileText className="w-3.5 h-3.5" /> Resume</button>
      <button type="button" onClick={() => goTo('projects')} aria-label="Jump to featured work"><BriefcaseBusiness className="w-3.5 h-3.5" /> Work</button>
      <button type="button" onClick={() => goTo('contact')} aria-label="Jump to contact section"><ArrowUpRight className="w-3.5 h-3.5" /> Connect</button>
    </aside>
  );
};
