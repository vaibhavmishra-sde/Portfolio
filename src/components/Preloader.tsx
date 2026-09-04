import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const Preloader: React.FC<{ onComplete: () => void }> = ({ onComplete }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [loadingText, setLoadingText] = useState('');
  const fullText = "LOADING_ASSETS... // SYSTEM READY";

  useEffect(() => {
    // Typing effect for the text
    let i = 0;
    const typingInterval = setInterval(() => {
      if (i <= fullText.length) {
        setLoadingText(fullText.slice(0, i));
        i++;
      } else {
        clearInterval(typingInterval);
      }
    }, 40);

    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(onComplete, 1000); // Wait for exit animation
    }, 2500);

    return () => {
      clearTimeout(timer);
      clearInterval(typingInterval);
    };
  }, [onComplete]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -40, filter: 'blur(10px)' }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#020308]"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center gap-8 w-full max-w-md px-8"
          >
            {/* Animated Logo/Spinner */}
            <div className="relative flex items-center justify-center w-20 h-20">
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

            {/* Progress Bar and Text */}
            <div className="w-full space-y-3">
              <div className="flex justify-between items-end text-xs font-mono text-slate-400">
                <span>{loadingText}<span className="animate-pulse">_</span></span>
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 2 }}
                >
                  100%
                </motion.span>
              </div>

              <div className="w-full h-1 bg-[#101218] rounded-full overflow-hidden border border-[#1F2430]">
                <motion.div
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
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
