import React from 'react';
import { ArrowUpRight, BriefcaseBusiness, FileText } from 'lucide-react';

interface RecruiterDockProps { onOpenResume: () => void; }

export const RecruiterDock: React.FC<RecruiterDockProps> = ({ onOpenResume }) => {
  const goTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <aside className="recruiter-dock" aria-label="Recruiter quick actions">
      <span className="recruiter-dock-label">Quick scan</span>
      <button type="button" onClick={onOpenResume}><FileText className="w-3.5 h-3.5" /> Resume</button>
      <button type="button" onClick={() => goTo('projects')}><BriefcaseBusiness className="w-3.5 h-3.5" /> Work</button>
      <button type="button" onClick={() => goTo('contact')}><ArrowUpRight className="w-3.5 h-3.5" /> Connect</button>
    </aside>
  );
};
