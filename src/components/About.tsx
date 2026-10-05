import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, MapPin, Target, CheckCircle2, UserCheck, Sparkles } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const About: React.FC = () => {
  const { quickFacts } = PORTFOLIO_DATA;

  const coreFocusAreas = [
    'React & TypeScript Interfaces',
    'JavaScript & Python Foundations',
    'SQL & Relational Data',
    'Responsive Web Development',
    'Git & Collaborative Workflows',
    'Problem Solving & Debugging'
  ];

  return (
    <section id="about" className="py-20 bg-[#08090D] relative border-t border-[#1F2430]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-mono mb-3">
            <UserCheck className="w-3.5 h-3.5" />
            <span>BACKGROUND & IDENTITY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            About <span className="gradient-text-cyan-purple">Me</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-xl mt-3">
            Turning curiosity into practical, user-focused software.
          </p>
        </motion.div>

        {/* Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: Narrative Intro */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-7 space-y-6"
          >
            
            <div className="p-6 rounded-2xl bg-[#101218] border border-[#1F2430] glass-panel space-y-4">
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-cyan-400" />
                Software Development & Problem Solving
              </h3>
              
              <p className="text-slate-300 text-base leading-relaxed">
                I'm <strong className="text-cyan-300 font-semibold">{PORTFOLIO_DATA.personal.name}</strong>, a BCA student at <strong className="text-white">Parul University, Vadodara</strong> focused on <span className="text-cyan-400 font-medium">software development</span>, <span className="text-purple-400 font-medium">web technologies</span>, and building useful digital products.
              </p>

              <p className="text-slate-400 text-sm leading-relaxed">
                I enjoy turning ideas into clear, maintainable interfaces, learning the systems behind them, and improving them through thoughtful iteration. My current work combines React and TypeScript on the frontend with Python, SQL, Firebase, and Git-based workflows.
              </p>
            </div>

            {/* Core Competencies Checklist */}
            <div className="p-6 rounded-2xl bg-[#101218] border border-[#1F2430]">
              <h4 className="text-xs font-mono uppercase text-slate-400 tracking-wider mb-4">
                Core Development Toolkit
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

          </motion.div>

          {/* Right Column: Quick Facts Card */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5"
          >
            <div className="quick-facts-card rounded-2xl bg-gradient-to-b from-[#151821] to-[#101218] border border-[#1F2430] p-6 sm:p-7 shadow-xl relative overflow-hidden glow-cyan-sm">
              <div className="absolute -top-16 -right-12 w-44 h-44 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-28 h-28 bg-purple-500/5 rounded-full blur-3xl pointer-events-none" />

              <div className="flex items-center justify-between gap-3 pb-5 mb-2 border-b border-[#1F2430]">
                <h4 className="text-base font-bold text-white flex items-center gap-2">
                  <GraduationCap className="w-5 h-5 text-cyan-400" />
                  Quick Facts
                </h4>
                <span className="px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[10px] font-mono whitespace-nowrap">
                  Verified Details
                </span>
              </div>

              <div className="space-y-0 font-sans text-sm">
                
                <div className="quick-fact-row">
                  <span className="quick-fact-label">Education</span>
                  <span className="quick-fact-value text-white font-semibold">{quickFacts.education}</span>
                </div>

                <div className="quick-fact-row">
                  <span className="quick-fact-label">Duration</span>
                  <span className="quick-fact-value text-cyan-300 font-mono">{quickFacts.duration}</span>
                </div>

                <div className="quick-fact-row">
                  <span className="quick-fact-label">Academic CGPA</span>
                  <span className="quick-fact-value inline-flex justify-end"><span className="px-2 py-1 rounded-md bg-cyan-500/15 border border-cyan-500/40 text-cyan-300 font-bold font-mono">
                    {quickFacts.cgpa}
                  </span></span>
                </div>

                <div className="quick-fact-row">
                  <span className="quick-fact-label">Focus Area</span>
                  <span className="quick-fact-value text-purple-300 font-medium">{quickFacts.focus}</span>
                </div>

                <div className="quick-fact-row">
                  <span className="quick-fact-label flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-rose-400" /> Location
                  </span>
                  <span className="quick-fact-value text-slate-200">{quickFacts.location}</span>
                </div>

                <div className="quick-fact-row last:border-b-0">
                  <span className="quick-fact-label flex items-center gap-1">
                    <Target className="w-3 h-3 text-emerald-400" /> Target Role
                  </span>
                  <span className="quick-fact-value"><span className="inline-block text-emerald-400 font-semibold font-mono text-xs bg-emerald-500/10 px-2 py-1 rounded border border-emerald-500/30">
                    {quickFacts.currentGoal}
                  </span></span>
                </div>

              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
