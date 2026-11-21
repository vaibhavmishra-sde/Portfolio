import { useEffect, useMemo, useRef, useState } from 'react';
import type { CSSProperties, PointerEvent as ReactPointerEvent } from 'react';

type Motif = 'crow' | 'petal' | 'lightning' | 'ember' | 'snow' | 'sparkle';
type Props = { character: string; bg?: string; loop?: string; glow: string; eye: { x: number; y: number }; motif: Motif; alt: string };

const symbols: Record<Motif, string> = { crow: '◆', petal: '✦', lightning: 'ϟ', ember: '•', snow: '❄', sparkle: '✧' };

export default function AliveCharacter({ character, bg, loop, glow, eye, motif, alt }: Props) {
  const root = useRef<HTMLDivElement>(null);
  const video = useRef<HTMLVideoElement>(null);
  const [visible, setVisible] = useState(false);
  const [videoFailed, setVideoFailed] = useState(false);
  const [reduced, setReduced] = useState(false);
  const particles = useMemo(() => Array.from({ length: 16 }, (_, i) => ({ i, x: 6 + (i * 37) % 88, delay: (i % 7) * .37, duration: 2.5 + (i % 5) * .7, size: 8 + (i % 4) * 3 })), []);

  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)');
    const update = () => setReduced(media.matches);
    update(); media.addEventListener?.('change', update);
    const observer = new IntersectionObserver(([entry]) => setVisible(entry.isIntersecting), { rootMargin: '180px' });
    if (root.current) observer.observe(root.current);
    return () => { media.removeEventListener?.('change', update); observer.disconnect(); };
  }, []);
  useEffect(() => { if (video.current) { if (visible && !reduced) void video.current.play().catch(() => setVideoFailed(true)); else video.current.pause(); } }, [visible, reduced]);
  const pointer = (event: ReactPointerEvent<HTMLDivElement>) => {
    if (reduced || event.pointerType === 'touch' || !root.current) return;
    const rect = root.current.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - .5; const y = (event.clientY - rect.top) / rect.height - .5;
    root.current.style.setProperty('--mx', `${x * 30}px`); root.current.style.setProperty('--my', `${y * 30}px`); root.current.classList.add('is-hovered');
  };
  const reset = () => { if (root.current) { root.current.style.setProperty('--mx', '0px'); root.current.style.setProperty('--my', '0px'); root.current.classList.remove('is-hovered'); } };
  const style = { '--glow': glow, '--eye-x': `${eye.x}%`, '--eye-y': `${eye.y}%`, '--character-bg': bg ? `url(${bg})` : 'none' } as CSSProperties;
  return <div ref={root} className={'alive-character '+(visible ? 'is-visible' : '')+(reduced ? 'is-reduced' : '')} style={style} onPointerMove={pointer} onPointerLeave={reset} aria-label={alt}>
    <div className="alive-aura"/><div className="alive-bg"/>
    {loop && !videoFailed && !reduced ? <video ref={video} className="alive-image" src={loop} poster={character} muted loop playsInline onError={() => setVideoFailed(true)} aria-label={alt}/> : <img className="alive-image" src={character} alt={alt} onError={(e) => { e.currentTarget.style.opacity = '0'; }} />}
    <span className="alive-eye"/><div className="alive-particles">{particles.map(p => <i key={p.i} style={{ '--x': `${p.x}%`, '--delay': `${p.delay}s`, '--duration': `${p.duration}s`, '--size': `${p.size}px` } as CSSProperties}>{symbols[motif]}</i>)}</div><span className="alive-shockwave"/>
  </div>;
}
