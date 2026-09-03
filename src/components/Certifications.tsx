import React from 'react';
import { motion } from 'framer-motion';
import { Award, CheckCircle2, Clock, ShieldCheck } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const Certifications: React.FC = () => {
  const { certifications } = PORTFOLIO_DATA;

  return (
    <section id="certifications" className="py-20 bg-[#08090D] relative border-t border-[#1F2430]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-mono mb-3">
            <Award className="w-3.5 h-3.5" />
            <span>VERIFIED QUALIFICATIONS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Certifications & <span className="gradient-text-cyan-purple">Credentials</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-xl mt-3">
            Certifications that strengthen my foundations in SQL, analytics, and structured problem solving.
          </p>
        </motion.div>

        {/* Certification Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {certifications.map((cert, index) => {
            const isCompleted = cert.status === 'Completed';

            return (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="p-6 rounded-2xl bg-[#101218] border border-[#1F2430] hover:border-cyan-500/40 glass-panel-hover hover-lift flex flex-col justify-between space-y-4"
              >
                <div>
                  
                  {/* Status Badge */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-2.5 rounded-xl bg-[#151821] border border-[#1F2430] text-cyan-400">
                      <ShieldCheck className="w-5 h-5" />
                    </div>

                    <span className={`px-2.5 py-1 rounded-full border text-xs font-mono font-semibold flex items-center gap-1.5 ${
                      isCompleted 
                        ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-400' 
                        : 'bg-cyan-500/10 border-cyan-500/30 text-cyan-300'
                    }`}>
                      {isCompleted ? <CheckCircle2 className="w-3.5 h-3.5" /> : <Clock className="w-3.5 h-3.5 animate-spin" />}
                      <span>{cert.status}</span>
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-white mb-1">
                    {cert.title}
                  </h3>

                  <div className="text-xs font-mono text-slate-400 mb-3">
                    Issuer: {cert.issuer}
                  </div>

                </div>

                {/* Footer Note */}
                <div className="pt-3 border-t border-[#1F2430] flex items-center justify-between text-xs text-slate-500 font-mono">
                  <span>Verified Competency</span>
                  <span className="text-slate-400">Official Status</span>
                </div>

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
