import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const LOADING_MESSAGES = [
  'INITIALIZING_INTERFACE... // SYSTEM READY',
  'INDEXING_PROJECTS... // CASE STUDIES READY',
  'LOADING_SKILLS... // STACK VERIFIED',
  "OPENING_CHANNEL... // LET'S BUILD",
];

export const Preloader: React.FC<{ onComplete: () => void }> = ({ onComplete }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [progress, setProgress] = useState(0);
  const [loadingText, setLoadingText] = useState(LOADING_MESSAGES[0]);
  const checks = ['establishing secure session', 'verifying interface modules', 'loading portfolio manifest'];

  useEffect(() => {
    let exitTimer: number | undefined;
    let messageIndex = 0;
    const messageInterval = window.setInterval(() => {
      messageIndex = (messageIndex + 1) % LOADING_MESSAGES.length;
      setLoadingText(LOADING_MESSAGES[messageIndex]);
    }, 650);

    const progressInterval = window.setInterval(() => {
      setProgress((current) => Math.min(100, current + 4));
    }, 80);

    const timer = setTimeout(() => {
      setIsVisible(false);
      exitTimer = window.setTimeout(onComplete, 1000); // Wait for exit animation
    }, 2500);

    return () => {
      clearTimeout(timer);
      if (exitTimer !== undefined) window.clearTimeout(exitTimer);
      clearInterval(messageInterval);
      clearInterval(progressInterval);
    };
  }, [onComplete]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -40, filter: 'blur(10px)' }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#020308] preloader-shell"
        >
          <div className="cyber-scanlines" aria-hidden="true" />
          <div className="preloader-vignette" aria-hidden="true" />
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="preloader-content flex flex-col items-center gap-8 w-full max-w-md px-8 relative"
          >
            {/* Animated Logo/Spinner */}
            <div className="relative flex items-center justify-center w-24 h-24 rounded-full border border-white/5 bg-white/[.02]">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-0 border-t-2 border-cyan-400/80 rounded-full"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-3 border-b-2 border-purple-500/80 rounded-full"
              />
              <motion.div
                initial={{ scale: 0.8 }}
                animate={{ scale: 1.2 }}
                transition={{ duration: 1, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' }}
                className="w-3 h-3 bg-white rounded-full shadow-[0_0_20px_rgba(255,255,255,1)]"
              />
            </div>

            <div className="text-center -mt-2">
              <div className="text-xl font-bold tracking-tight text-white">Vaibhav Mishra<span className="text-cyan-400">.</span></div>
              <div className="mt-1 text-[10px] font-mono uppercase tracking-[.28em] text-cyan-300/70">Software Engineer Portfolio</div>
            </div>

            <div className="w-full grid grid-cols-1 gap-2 font-mono text-[10px] text-slate-500 uppercase tracking-[0.16em]">
              {checks.map((check, index) => (
                <motion.div key={check} initial={{ opacity: 0, x: -8 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: index * 0.35 }} className="flex items-center gap-3">
                  <span className="text-emerald-400">{index < 2 ? '✓' : '◌'}</span>
                  <span>{check}</span>
                  <span className="ml-auto text-cyan-400/60">{index < 2 ? 'ok' : 'wait'}</span>
                </motion.div>
              ))}
            </div>

            {/* Progress Bar and Text */}
            <div className="w-full space-y-3">
              <div className="flex justify-between items-end text-xs font-mono text-slate-400">
                <span>{loadingText}<span className="animate-pulse">_</span></span>
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 2 }}
                >
                  {progress}%
                </motion.span>
              </div>

              <div className="w-full h-1 bg-[#101218] rounded-full overflow-hidden border border-[#1F2430]">
                <motion.div
                  initial={{ width: "0%" }}
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 2, ease: "easeInOut" }}
                  className="h-full bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full shadow-[0_0_10px_rgba(0,240,255,0.5)]"
                />
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
