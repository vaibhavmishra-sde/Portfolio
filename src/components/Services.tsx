import React from 'react';
import { motion } from 'framer-motion';
import { Monitor, Server, Database, GitBranch, Zap } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

const iconMap: Record<string, React.ElementType> = {
  Monitor,
  Server,
  Database,
  GitBranch,
};

export const Services: React.FC = () => {
  const { services } = PORTFOLIO_DATA;

  return (
    <section id="services" className="py-20 bg-[#08090D] relative border-t border-[#1F2430]/60 section-glow-divider">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-mono mb-3">
            <Zap className="w-3.5 h-3.5" />
            <span>WHAT I BUILD</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Engineering <span className="gradient-text-cyan-purple">Capabilities</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-xl mt-3">
            Areas of expertise I'm actively developing and applying across real-world projects.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, index) => {
            const IconComponent = iconMap[service.icon] || Monitor;
            const accentColors = [
              { bg: 'bg-cyan-500/10', border: 'border-cyan-500/30', text: 'text-cyan-400', hoverBorder: 'hover:border-cyan-500/50' },
              { bg: 'bg-purple-500/10', border: 'border-purple-500/30', text: 'text-purple-400', hoverBorder: 'hover:border-purple-500/50' },
              { bg: 'bg-emerald-500/10', border: 'border-emerald-500/30', text: 'text-emerald-400', hoverBorder: 'hover:border-emerald-500/50' },
              { bg: 'bg-amber-500/10', border: 'border-amber-500/30', text: 'text-amber-400', hoverBorder: 'hover:border-amber-500/50' },
            ];
            const accent = accentColors[index % accentColors.length];

            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`group p-6 rounded-2xl bg-[#101218] border border-[#1F2430] ${accent.hoverBorder} glass-panel-hover hover-lift transition-all duration-300`}
              >
                {/* Icon & Number */}
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-3 rounded-xl ${accent.bg} border ${accent.border} ${accent.text}`}>
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-mono text-slate-500">0{index + 1}</span>
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-slate-400 text-sm leading-relaxed mb-4">
                  {service.description}
                </p>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-1.5">
                  {service.tags.map((tag) => (
                    <span key={tag} className="px-2.5 py-1 rounded-lg bg-[#151821] border border-[#1F2430] text-[11px] font-mono text-slate-300">
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
