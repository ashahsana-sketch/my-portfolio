'use client';

import { useState } from 'react';
import { Mail, MapPin, Copy, Check, Globe, Code, Sparkles, ExternalLink, MessageSquare } from 'lucide-react';

export default function ContactPage() {
  const [copied, setCopied] = useState(false);
  const email = 'ashahsana@gmail.com';

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <main 
      aria-labelledby="contact-heading" 
      className="w-full min-h-screen py-16 sm:py-24 px-4 sm:px-8 lg:px-16 bg-slate-900 relative overflow-hidden"
    >
      {/* Background soft glow effect */}
      <div 
        aria-hidden="true" 
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[600px] lg:w-[800px] h-[350px] sm:h-[600px] lg:h-[800px] bg-brand/10 blur-[100px] sm:blur-[160px] rounded-full pointer-events-none" 
      />

      {/* Full-Screen Inner Content Container */}
      <div className="w-full max-w-[1600px] mx-auto relative z-10">

        {/* Section Header */}
        <header className="mb-10 sm:mb-14 text-center md:text-left">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs sm:text-sm font-semibold mb-4 backdrop-blur-sm shadow-inner">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" aria-hidden="true"></span>
            <span>Available for Frontend Developer Roles</span>
          </div>
          <h1 
            id="contact-heading" 
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-100 tracking-tight mb-3"
          >
            Get In Touch
          </h1>
          <p className="text-slate-300 max-w-3xl text-sm sm:text-base leading-relaxed">
            I am currently looking for new opportunities in Stockholm or remote. Let&apos;s build something exceptional together.
          </p>
        </header>

        {/* Contact Cards Grid (4 Standalone Cards matching design system) */}
        <div 
          role="region" 
          aria-label="Contact methods" 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-6 sm:gap-8 w-full"
        >
          
          {/* CARD 1: Email Direct */}
          <article 
            tabIndex={0}
            aria-label="Email Direct Contact Card"
            className="group rounded-2xl bg-slate-950 bg-gradient-to-br from-blue-600/30 via-indigo-600/10 to-slate-950/90 border border-slate-800/90 p-5 sm:p-6 flex flex-col justify-between transition-all duration-300 hover:border-slate-600 hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-brand/60 backdrop-blur-md w-full overflow-hidden shadow-xl"
          >
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 rounded-xl bg-brand/10 border border-brand/20 text-brand-light group-hover:scale-105 transition-transform">
                  <Mail className="w-6 h-6" aria-hidden="true" />
                </div>
                <div>
                  <h2 className="text-lg font-bold text-slate-100 group-hover:text-brand-light transition">Email Direct</h2>
                  <p className="text-xs text-slate-400">Primary Contact Channel</p>
                </div>
              </div>
              
              <p className="text-slate-400 text-xs sm:text-sm mb-6 leading-relaxed">
                Reach out directly for inquiries, project proposals, or developer role discussions.
              </p>
            </div>

            <div className="flex items-center gap-3 pt-4 border-t border-slate-800/80">
              <button
                onClick={handleCopyEmail}
                className="px-3.5 py-2.5 rounded-xl bg-brand/20 hover:bg-brand/30 text-brand-light border border-brand/30 text-xs sm:text-sm font-semibold transition flex items-center justify-center gap-2 focus:outline-none focus:ring-2 focus:ring-brand/50"
                aria-label="Copy Email Address to Clipboard"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-400" aria-hidden="true" /> Copied!
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4" aria-hidden="true" /> Copy
                  </>
                )}
              </button>
              <a
                href={`mailto:${email}`}
                className="flex-1 py-2.5 px-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 hover:text-white font-semibold text-xs sm:text-sm border border-slate-700/80 transition flex items-center justify-center gap-2 group-hover:border-brand/50 focus:outline-none focus:ring-2 focus:ring-brand/50"
              >
                <span>Send Email</span> 
                <ExternalLink className="w-4 h-4 shrink-0" aria-hidden="true" />
              </a>
            </div>
          </article>

          {/* CARD 2: LinkedIn Profile */}
          <article 
            tabIndex={0}
            aria-label="LinkedIn Profile Card"
            className="group rounded-2xl bg-slate-950 bg-gradient-to-br from-cyan-600/30 via-blue-600/10 to-slate-950/90 border border-slate-800/90 p-5 sm:p-6 flex flex-col justify-between transition-all duration-300 hover:border-slate-600 hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-brand/60 backdrop-blur-md w-full overflow-hidden shadow-xl"
          >
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 group-hover:scale-105 transition-transform">
                  <Globe className="w-6 h-6" aria-hidden="true" />
                </div>
                <div>
                  <h2 className="text-lg font-bold text-slate-100 group-hover:text-cyan-300 transition">LinkedIn Profile</h2>
                  <p className="text-xs text-slate-400">Professional Network</p>
                </div>
              </div>

              <p className="text-slate-400 text-xs sm:text-sm mb-6 leading-relaxed">
                Connect with me on LinkedIn to view my career experience, educational background, and recommendations.
              </p>
            </div>

            <div className="pt-4 border-t border-slate-800/80">
              <a
                href="https://www.linkedin.com/in/ashahsana/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 px-4 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 hover:text-white font-semibold text-xs sm:text-sm border border-slate-700/80 transition flex items-center justify-center gap-2 group-hover:border-cyan-500/50 focus:outline-none focus:ring-2 focus:ring-brand/50"
              >
                <span>Visit LinkedIn</span> 
                <ExternalLink className="w-4 h-4 shrink-0" aria-hidden="true" />
              </a>
            </div>
          </article>

          {/* CARD 3: GitHub Codebase */}
          <article 
            tabIndex={0}
            aria-label="GitHub Repositories Card"
            className="group rounded-2xl bg-slate-950 bg-gradient-to-br from-purple-600/30 via-pink-600/10 to-slate-950/90 border border-slate-800/90 p-5 sm:p-6 flex flex-col justify-between transition-all duration-300 hover:border-slate-600 hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-brand/60 backdrop-blur-md w-full overflow-hidden shadow-xl"
          >
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-400 group-hover:scale-105 transition-transform">
                  <Code className="w-6 h-6" aria-hidden="true" />
                </div>
                <div>
                  <h2 className="text-lg font-bold text-slate-100 group-hover:text-purple-300 transition">GitHub Codebase</h2>
                  <p className="text-xs text-slate-400">Repositories & Open Source</p>
                </div>
              </div>

              <p className="text-slate-400 text-xs sm:text-sm mb-6 leading-relaxed">
                Explore my latest front-end project repositories, commits, full-stack configurations, and code architectures.
              </p>
            </div>

            <div className="pt-4 border-t border-slate-800/80">
              <a
                href="https://github.com/ashahsana-sketch"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 px-4 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 hover:text-white font-semibold text-xs sm:text-sm border border-slate-700/80 transition flex items-center justify-center gap-2 group-hover:border-purple-500/50 focus:outline-none focus:ring-2 focus:ring-brand/50"
              >
                <span>Explore GitHub</span> 
                <ExternalLink className="w-4 h-4 shrink-0" aria-hidden="true" />
              </a>
            </div>
          </article>

          {/* CARD 4: Location & Work Status */}
          <article 
            tabIndex={0}
            aria-label="Location and Work Preferences Card"
            className="group rounded-2xl bg-slate-950 bg-gradient-to-br from-emerald-600/30 via-teal-600/10 to-slate-950/90 border border-slate-800/90 p-5 sm:p-6 flex flex-col justify-between transition-all duration-300 hover:border-slate-600 hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-brand/60 backdrop-blur-md w-full overflow-hidden shadow-xl"
          >
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 group-hover:scale-105 transition-transform">
                  <MapPin className="w-6 h-6" aria-hidden="true" />
                </div>
                <div>
                  <h2 className="text-lg font-bold text-slate-100 group-hover:text-emerald-300 transition">Location & Status</h2>
                  <p className="text-xs text-slate-400">Work Preferences</p>
                </div>
              </div>

              <p className="text-slate-200 text-xs sm:text-sm font-semibold mb-1">
                Based in <strong className="text-white">Stockholm, Sweden</strong>
              </p>
              <p className="text-slate-400 text-xs sm:text-sm leading-relaxed mb-6">
                Full Swedish citizenship. Available for hybrid, on-site in Stockholm, or remote development roles across Sweden and EU time zones.
              </p>
            </div>

            <div className="pt-4 border-t border-slate-800/80">
              <div className="w-full py-2.5 px-4 rounded-xl bg-slate-900 border border-slate-700/80 text-emerald-400 text-xs sm:text-sm font-semibold text-center flex items-center justify-center gap-2">
                <Sparkles className="w-4 h-4 text-emerald-400 shrink-0" aria-hidden="true" /> open for roles
              </div>
            </div>
          </article>

        </div>

      </div>
    </main>
  );
}