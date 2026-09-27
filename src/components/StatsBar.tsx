import React, { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Code2, Layers, GitCommitHorizontal, GitPullRequest } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface StatItem {
  icon: React.ElementType;
  value: number | string;
  label: string;
  suffix?: string;
  color: string;
}

const useCountUp = (end: number, duration: number = 2000, startCounting: boolean = false) => {
  const [count, setCount] = useState(0);
  const frameRef = useRef<number | null>(null);

  useEffect(() => {
    if (!startCounting) return;
    
    const startTime = performance.now();
    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * end));
      
      if (progress < 1) {
        frameRef.current = requestAnimationFrame(animate);
      }
    };
    
    frameRef.current = requestAnimationFrame(animate);
    return () => {
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
    };
  }, [end, duration, startCounting]);

  return count;
};

export const StatsBar: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const { stats } = PORTFOLIO_DATA;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const statItems: StatItem[] = [
    { icon: Layers, value: stats.projectsBuilt, label: 'Projects Built', suffix: '+', color: 'text-cyan-400' },
    { icon: Code2, value: stats.techStack, label: 'Technologies', suffix: '+', color: 'text-purple-400' },
    { icon: GitCommitHorizontal, value: 200, label: 'Git Commits', suffix: '+', color: 'text-emerald-400' },
    { icon: GitPullRequest, value: stats.openSourcePRs, label: 'Open Source PRs', suffix: '+', color: 'text-amber-400' },
  ];

  return (
    <div ref={sectionRef} className="py-12 bg-[#08090D] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {statItems.map((stat, index) => (
            <StatCard key={stat.label} stat={stat} index={index} isVisible={isVisible} />
          ))}
        </motion.div>
      </div>
    </div>
  );
};

const StatCard: React.FC<{ stat: StatItem; index: number; isVisible: boolean }> = ({ stat, index, isVisible }) => {
  const numericValue = typeof stat.value === 'number' ? stat.value : parseInt(String(stat.value)) || 0;
  const count = useCountUp(numericValue, 2000, isVisible);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="p-5 rounded-2xl bg-[#101218] border border-[#1F2430] hover:border-cyan-500/30 glass-panel-hover text-center group transition-all"
    >
      <stat.icon className={`w-6 h-6 ${stat.color} mx-auto mb-3 group-hover:scale-110 transition-transform`} />
      <div className={`text-3xl font-extrabold ${stat.color} stat-number`}>
        {count}{stat.suffix}
      </div>
      <div className="text-xs font-mono text-slate-400 mt-1.5">{stat.label}</div>
    </motion.div>
  );
};
