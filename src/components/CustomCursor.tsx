import React, { useEffect, useRef, useState } from 'react';

export const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const frameRef = useRef<number | null>(null);

  useEffect(() => {
    // Check if fine pointer device (desktop)
    const isTouchDevice = window.matchMedia('(pointer: coarse)').matches;
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (isTouchDevice || reducedMotion) return;

    setIsVisible(true);

    const onMouseMove = (e: MouseEvent) => {
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
      frameRef.current = requestAnimationFrame(() => setPosition({ x: e.clientX, y: e.clientY }));

      const target = e.target as HTMLElement;
      const isInteractive = target.closest('button, a, input, textarea, [role="button"], .cursor-pointer');
      setIsHovered(!!isInteractive);
    };

    window.addEventListener('mousemove', onMouseMove);
    return () => { window.removeEventListener('mousemove', onMouseMove); if (frameRef.current) cancelAnimationFrame(frameRef.current); };
  }, []);

  if (!isVisible) return null;

  return (
    <>
      {/* Outer Cyan Ring */}
      <div
        className={`fixed top-0 left-0 w-8 h-8 rounded-full border border-cyan-400/60 pointer-events-none z-50 transition-transform duration-100 ease-out -translate-x-1/2 -translate-y-1/2 ${
          isHovered ? 'scale-150 border-cyan-300 bg-cyan-500/10 glow-cyan-sm' : 'scale-100'
        }`}
        aria-hidden="true"
        style={{
          transform: `translate3d(${position.x}px, ${position.y}px, 0) scale(${isHovered ? 1.5 : 1})`,
        }}
      />

      {/* Inner Dot */}
      <div
        className="fixed top-0 left-0 w-1.5 h-1.5 rounded-full bg-cyan-400 pointer-events-none z-50 -translate-x-1/2 -translate-y-1/2"
        aria-hidden="true"
        style={{
          transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
        }}
      />
    </>
  );
};
