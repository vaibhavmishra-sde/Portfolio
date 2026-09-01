import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Copy, Check, Sparkles, MessageSquare } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon } from './SocialIcons';

export const Contact: React.FC = () => {
  const { personal } = PORTFOLIO_DATA;
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [name, setName] = useState('');
  const [senderEmail, setSenderEmail] = useState('');
  const [message, setMessage] = useState('');

  const copyEmail = async () => {
    await navigator.clipboard.writeText(personal.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const copyPhone = async () => {
    await navigator.clipboard.writeText(personal.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = `Portfolio enquiry from ${name.trim()}`;
    const body = `Name: ${name.trim()}\nEmail: ${senderEmail.trim()}\n\n${message.trim()}`;
    window.location.href = `mailto:${personal.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <section id="contact" className="py-20 bg-[#08090D] relative border-t border-[#1F2430]/60 grid-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-mono mb-3">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>GET IN TOUCH</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Let's build something <span className="gradient-text-cyan-purple">useful</span>.
          </h2>
          <p className="text-slate-400 text-base sm:text-lg max-w-2xl mt-4">
            I'm currently looking for opportunities to apply my software development skills, curiosity, and problem-solving mindset.
          </p>
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Direct Contact Details */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Email Card */}
            <div className="p-6 rounded-2xl bg-[#101218] border border-[#1F2430] hover:border-cyan-500/40 glass-panel-hover flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs font-mono text-slate-400">Direct Email</div>
                  <a href={`mailto:${personal.email}`} className="text-sm font-bold text-white hover:text-cyan-300 transition-colors">
                    {personal.email}
                  </a>
                </div>
              </div>

              <button
                onClick={copyEmail}
                className="p-2.5 rounded-lg bg-[#151821] text-slate-400 hover:text-cyan-300 border border-[#1F2430] hover:border-cyan-500/40 transition-colors cursor-pointer"
                title={copiedEmail ? 'Email copied' : 'Copy email'}
                aria-label={copiedEmail ? 'Email copied' : 'Copy email address'}
              >
                {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            {/* Phone Card */}
            <div className="p-6 rounded-2xl bg-[#101218] border border-[#1F2430] hover:border-purple-500/40 glass-panel-hover flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-xl bg-purple-500/10 border border-purple-500/30 text-purple-400">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs font-mono text-slate-400">Phone Number</div>
                  <a href={`tel:${personal.phone}`} className="text-sm font-bold text-white hover:text-purple-300 transition-colors">
                    {personal.phone}
                  </a>
                </div>
              </div>

              <button
                onClick={copyPhone}
                className="p-2.5 rounded-lg bg-[#151821] text-slate-400 hover:text-purple-300 border border-[#1F2430] hover:border-purple-500/40 transition-colors cursor-pointer"
                title={copiedPhone ? 'Phone number copied' : 'Copy phone number'}
                aria-label={copiedPhone ? 'Phone number copied' : 'Copy phone number'}
              >
                {copiedPhone ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            {/* Location & Social Buttons */}
            <div className="p-6 rounded-2xl bg-[#101218] border border-[#1F2430] space-y-4">
              <div className="flex items-center gap-3 text-xs font-mono text-slate-400">
                <MapPin className="w-4 h-4 text-rose-400" />
                <span>Based in {personal.location}</span>
              </div>

              <div className="flex items-center gap-3 pt-2">
                <a
                  href={personal.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-3 px-4 rounded-xl bg-[#151821] hover:bg-cyan-500/10 border border-[#1F2430] hover:border-cyan-500/40 text-xs font-bold text-slate-200 hover:text-cyan-300 flex items-center justify-center gap-2 transition-colors"
                >
                  <LinkedinIcon className="w-4 h-4" />
                  <span>LinkedIn Profile</span>
                </a>

                <a
                  href={personal.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-3 px-4 rounded-xl bg-[#151821] hover:bg-purple-500/10 border border-[#1F2430] hover:border-purple-500/40 text-xs font-bold text-slate-200 hover:text-purple-300 flex items-center justify-center gap-2 transition-colors"
                >
                  <GithubIcon className="w-4 h-4" />
                  <span>GitHub Profile</span>
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Quick Interactive Message Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl bg-[#101218] border border-[#1F2430] glass-panel glow-cyan-sm relative">
              
              <h3 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-cyan-400" />
                Send a Quick Message
              </h3>
              <p className="text-xs text-slate-400 mb-6">
                Fill this in to open a pre-filled email draft in your default mail app.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-mono text-slate-400 mb-1">
                    Your Name / Organization
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Engineering Recruiter / Hiring Manager"
                    className="w-full px-4 py-3 rounded-xl bg-[#08090D] border border-[#1F2430] focus:border-cyan-400 text-white text-sm focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-400 mb-1">
                    Your Email Address
                  </label>
                  <input
                    type="email"
                    required
                    value={senderEmail}
                    onChange={(e) => setSenderEmail(e.target.value)}
                    placeholder="recruiter@company.com"
                    className="w-full px-4 py-3 rounded-xl bg-[#08090D] border border-[#1F2430] focus:border-cyan-400 text-white text-sm focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-400 mb-1">
                    Message / Opportunity Details
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Hi Vaibhav, we reviewed your portfolio and would like to discuss a software developer opportunity..."
                    className="w-full px-4 py-3 rounded-xl bg-[#08090D] border border-[#1F2430] focus:border-cyan-400 text-white text-sm focus:outline-none transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-[#08090D] font-bold text-sm flex items-center justify-center gap-2 transition-all glow-cyan-sm cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Open Email Draft</span>
                </button>
              </form>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
