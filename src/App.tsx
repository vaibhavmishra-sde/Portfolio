import { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { DataPipeline } from './components/DataPipeline';
import { Projects } from './components/Projects';
import { OpenSource } from './components/OpenSource';
import { Certifications } from './components/Certifications';
import { Journey } from './components/Journey';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { CustomCursor } from './components/CustomCursor';
import { ResumeModal } from './components/ResumeModal';

export function App() {
  const [activeSection, setActiveSection] = useState('overview');
  const [resumeOpen, setResumeOpen] = useState(false);

  useEffect(() => {
    // Handle tab query state on load e.g. /?tab=projects
    const urlParams = new URLSearchParams(window.location.search);
    const tabParam = urlParams.get('tab');
    if (tabParam) {
      const el = document.getElementById(tabParam);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }

    // Scroll spy for active section highlight
    const sections = ['overview', 'about', 'skills', 'pipeline', 'projects', 'opensource', 'certifications', 'journey', 'contact'];
    
    const handleScroll = () => {
      const scrollPos = window.scrollY + 200;
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
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToProjects = () => {
    const el = document.getElementById('projects');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen bg-[#08090D] text-[#F5F7FA] selection:bg-cyan-500/30 selection:text-cyan-200">
      {/* Glow Rings & Desktop Custom Cursor */}
      <CustomCursor />

      {/* Sticky Glassmorphic Navbar */}
      <Navbar
        onOpenResume={() => setResumeOpen(true)}
        activeSection={activeSection}
      />

      {/* Main Content Sections */}
      <main>
        <Hero
          onOpenResume={() => setResumeOpen(true)}
          onScrollToProjects={scrollToProjects}
        />

        <About />

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
  );
}

export default App;
