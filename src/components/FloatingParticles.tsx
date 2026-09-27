import React, { useState } from 'react';

interface Particle {
  id: number;
  left: string;
  animationDuration: string;
  animationDelay: string;
  size: number;
  opacity: number;
}

export const FloatingParticles: React.FC = () => {
  const [particles] = useState<Particle[]>(() => {
    return Array.from({ length: 20 }, (_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      animationDuration: `${15 + Math.random() * 25}s`,
      animationDelay: `${Math.random() * 15}s`,
      size: 1 + Math.random() * 2,
      opacity: 0.15 + Math.random() * 0.3,
    }));
  });

  return (
    <div className="particles-container" aria-hidden="true">
      {particles.map((p) => (
        <div
          key={p.id}
          className="particle"
          style={{
            left: p.left,
            width: `${p.size}px`,
            height: `${p.size}px`,
            opacity: p.opacity,
            animationDuration: p.animationDuration,
            animationDelay: p.animationDelay,
          }}
        />
      ))}
    </div>
  );
};
