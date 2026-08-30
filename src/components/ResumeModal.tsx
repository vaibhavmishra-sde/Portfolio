import React, { useEffect, useRef } from 'react';
import { X, Download, Printer, FileText, Mail, Phone, MapPin } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!isOpen) return;
    closeButtonRef.current?.focus();
    const onKeyDown = (event: KeyboardEvent) => { if (event.key === 'Escape') onClose(); };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#08090D]/85 backdrop-blur-md animate-in fade-in duration-200" onMouseDown={onClose} role="presentation">
      <div 
        role="dialog"
        aria-modal="true"
        aria-labelledby="resume-modal-title"
        className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-2xl bg-[#101218] border border-[#1F2430] p-6 sm:p-8 shadow-2xl glass-panel glow-cyan-sm"
        onMouseDown={(e) => e.stopPropagation()}
      >
        
        {/* Header Actions */}
        <div className="flex items-center justify-between pb-4 border-b border-[#1F2430] mb-6">
          <div className="flex items-center gap-2">
            <FileText className="w-5 h-5 text-cyan-400" />
            <h3 id="resume-modal-title" className="text-lg font-bold text-white">
              Vaibhav Mishra — Official Resume
            </h3>
          </div>

          <div className="flex items-center gap-2">
            <button
              ref={closeButtonRef}
              onClick={handlePrint}
              className="px-3 py-1.5 rounded-lg bg-[#151821] hover:bg-cyan-500/10 text-slate-300 hover:text-cyan-300 border border-[#1F2430] text-xs font-mono flex items-center gap-1.5 transition-colors cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5 text-cyan-400" />
              <span>Print / Save PDF</span>
            </button>

            <button
              onClick={onClose}
              className="p-2 rounded-lg bg-[#151821] text-slate-400 hover:text-white border border-[#1F2430] transition-colors cursor-pointer"
              aria-label="Close resume view"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Formatted Printable Resume View Container */}
        <div className="p-6 sm:p-8 rounded-xl bg-white text-slate-900 font-sans shadow-inner print:p-0 print:shadow-none">
          
          {/* Resume Header */}
          <div className="border-b pb-4 mb-4 flex flex-col sm:flex-row justify-between items-start sm:items-center">
            <div>
              <h1 className="text-2xl font-bold text-slate-900 tracking-tight">
                VAIBHAV MISHRA
              </h1>
              <p className="text-sm font-semibold text-cyan-700 mt-0.5">
                Software Developer | React | TypeScript | Python | SQL
              </p>
            </div>

            <div className="mt-2 sm:mt-0 text-xs text-slate-600 space-y-1 font-mono">
              <div className="flex items-center gap-1">
                <Mail className="w-3 h-3 text-cyan-600" />
                <span>vaibhavmishra9679@gmail.com</span>
              </div>
              <div className="flex items-center gap-1">
                <Phone className="w-3 h-3 text-cyan-600" />
                <span>+91 9679577062</span>
              </div>
              <div className="flex items-center gap-1">
                <MapPin className="w-3 h-3 text-cyan-600" />
                <span>Vadodara, Gujarat, India</span>
              </div>
            </div>
          </div>

          {/* Objective Statement */}
          <div className="mb-4">
            <h2 className="text-xs font-bold uppercase tracking-wider text-cyan-800 border-b border-cyan-800/30 pb-1 mb-2 font-mono">
              Professional Summary
            </h2>
            <p className="text-xs text-slate-700 leading-relaxed">
              BCA student at Parul University building user-focused web applications and practical software. Developing foundations in React, TypeScript, JavaScript, Python, SQL, Firebase, Git, and collaborative development workflows.
            </p>
          </div>

          {/* Education */}
          <div className="mb-4">
            <h2 className="text-xs font-bold uppercase tracking-wider text-cyan-800 border-b border-cyan-800/30 pb-1 mb-2 font-mono">
              Education
            </h2>
            <div className="flex justify-between items-start text-xs">
              <div>
                <span className="font-bold text-slate-900">Bachelor of Computer Applications (BCA)</span>
                <span className="text-slate-600"> — Parul University, Vadodara</span>
              </div>
              <span className="font-mono text-slate-600">2025 – 2028 | CGPA: 7.61 / 10</span>
            </div>
          </div>

          {/* Technical Skills */}
          <div className="mb-4">
            <h2 className="text-xs font-bold uppercase tracking-wider text-cyan-800 border-b border-cyan-800/30 pb-1 mb-2 font-mono">
              Technical Skills
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs text-slate-800 font-mono">
              <div><strong>Frontend:</strong> React, TypeScript, JavaScript, HTML, CSS</div>
              <div><strong>Backend & Data:</strong> Python, SQL, MySQL, PostgreSQL, Firebase</div>
              <div><strong>Practices:</strong> Git, GitHub, REST APIs, Debugging</div>
              <div><strong>Tools:</strong> Vite, npm, VS Code, Figma</div>
            </div>
          </div>

          {/* Projects */}
          <div className="mb-4">
            <h2 className="text-xs font-bold uppercase tracking-wider text-cyan-800 border-b border-cyan-800/30 pb-1 mb-2 font-mono">
              Featured Projects
            </h2>
            <div className="space-y-3 text-xs">
              {PORTFOLIO_DATA.projects.map((proj) => (
                <div key={proj.id}>
                  <div className="flex justify-between font-bold text-slate-900">
                    <span>{proj.name}</span>
                    <span className="font-mono text-cyan-700">[{proj.technologies.join(', ')}]</span>
                  </div>
                  <p className="text-slate-700 mt-0.5">{proj.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications & Open Source */}
          <div className="mb-2">
            <h2 className="text-xs font-bold uppercase tracking-wider text-cyan-800 border-b border-cyan-800/30 pb-1 mb-2 font-mono">
              Certifications & Open Source Selections
            </h2>
            <ul className="list-disc list-inside text-xs text-slate-800 space-y-1">
              <li><strong>HackerRank SQL (Advanced):</strong> Verified query formulation & window functions competency</li>
              <li><strong>IBM Statistics 101:</strong> Statistical inference fundamentals</li>
              <li><strong>GSSoC 2026 Contributor:</strong> GirlScript Summer of Code contributor selection</li>
              <li><strong>OpenSource Connect India (OSCI):</strong> Selected contributor initiative</li>
            </ul>
          </div>

        </div>

        {/* Modal Bottom Actions */}
        <div className="flex items-center justify-between pt-6 mt-6 border-t border-[#1F2430]">
          <span className="text-xs text-slate-400 font-mono">
            Format: Official Printable PDF Layout
          </span>
          <button
            onClick={handlePrint}
            className="px-5 py-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-[#08090D] font-bold text-xs flex items-center gap-2 transition-all glow-cyan-sm cursor-pointer"
          >
            <Download className="w-4 h-4" />
            <span>Download / Print Resume</span>
          </button>
        </div>

      </div>
    </div>
  );
};
