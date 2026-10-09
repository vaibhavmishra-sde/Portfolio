import { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { StatsBar } from './components/StatsBar';
import { About } from './components/About';
import { Services } from './components/Services';
import { Skills } from './components/Skills';
import { DataPipeline } from './components/DataPipeline';
import { Projects } from './components/Projects';
import { OpenSource } from './components/OpenSource';
import { Certifications } from './components/Certifications';
import { Journey } from './components/Journey';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { CustomCursor } from './components/CustomCursor';
import { FloatingParticles } from './components/FloatingParticles';
import { ResumeModal } from './components/ResumeModal';
import { Preloader } from './components/Preloader';

export function App() {
  const [activeSection, setActiveSection] = useState('overview');
  const [resumeOpen, setResumeOpen] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    let tabScrollTimer: number | undefined;
    // Handle tab query state on load e.g. /?tab=projects
    const urlParams = new URLSearchParams(window.location.search);
    const tabParam = urlParams.get('tab');
    if (tabParam) {
      const el = document.getElementById(tabParam);
      if (el) {
        tabScrollTimer = window.setTimeout(() => {
          el.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }

    // Scroll spy for active section highlight
    const sections = ['overview', 'about', 'services', 'skills', 'pipeline', 'projects', 'opensource', 'certifications', 'journey', 'contact'];
    
    let animationFrame: number | null = null;
    const handleScroll = () => {
      if (animationFrame !== null) return;
      animationFrame = requestAnimationFrame(() => {
      const scrollPos = window.scrollY + 200;
      const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(scrollableHeight > 0 ? Math.min(100, (window.scrollY / scrollableHeight) * 100) : 0);
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sectionId);
          break;
          }
        }
      }
      animationFrame = null;
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (tabScrollTimer !== undefined) window.clearTimeout(tabScrollTimer);
      if (animationFrame !== null) cancelAnimationFrame(animationFrame);
    };
  }, []);

  const scrollToProjects = () => {
    const el = document.getElementById('projects');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {!isLoaded && <Preloader onComplete={() => setIsLoaded(true)} />}
      <div className={`relative min-h-screen overflow-hidden bg-[#020308] text-[#F5F7FA] selection:bg-cyan-500/30 selection:text-cyan-200 transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
        <a href="#main-content" className="skip-link">Skip to content</a>
        <div className="fixed top-0 left-0 right-0 z-[60] h-1 bg-transparent" aria-hidden="true">
          <div className="h-full bg-gradient-to-r from-cyan-400 to-purple-500 transition-[width] duration-150" style={{ width: `${scrollProgress}%` }} />
        </div>
        <div className="site-background" aria-hidden="true" />
        <FloatingParticles />

      {/* Glow Rings & Desktop Custom Cursor */}
      <CustomCursor />

      {/* Sticky Glassmorphic Navbar */}
      <Navbar
        onOpenResume={() => setResumeOpen(true)}
        activeSection={activeSection}
      />

      {/* Main Content Sections */}
      <main id="main-content" tabIndex={-1}>
        <Hero
          onOpenResume={() => setResumeOpen(true)}
          onScrollToProjects={scrollToProjects}
        />

        <StatsBar />

        <About />

        <Services />

        <Skills />

        <DataPipeline />

        <Projects />

        <OpenSource />

        <Certifications />

        <Journey />

        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Resume Modal Preview */}
      <ResumeModal
        isOpen={resumeOpen}
        onClose={() => setResumeOpen(false)}
      />
      </div>
    </>
  );
}

export default App;
