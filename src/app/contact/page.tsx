'use client';

import { useState } from 'react';
import { Mail, MapPin, Copy, Check, Globe, Code, Sparkles, ExternalLink } from 'lucide-react';

export default function ContactPage() {
  const [copied, setCopied] = useState(false);
  const email = 'ashahsana@gmail.com';

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <main className="pt-28 pb-20 px-6 max-w-5xl mx-auto relative overflow-hidden">
      {/* Soft background glow effect */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-brand/10 blur-[140px] rounded-full pointer-events-none" />

      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-14 relative z-10">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold mb-4 backdrop-blur-sm">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
          Available for Frontend Developer Roles
        </div>
        <h1 className="text-3xl md:text-5xl font-extrabold text-slate-100 tracking-tight mb-3">
          Get In Touch
        </h1>
        <p className="text-slate-400 text-base leading-relaxed">
          I am currently looking for new opportunities in Stockholm or remote. Let&apos;s build something exceptional together.
        </p>
      </div>

      {/* 4 Standalone Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
        
        {/* CARD 1: Email Direct */}
        <div className="group rounded-2xl bg-gradient-to-br from-blue-600/20 via-indigo-600/10 to-slate-950/80 border border-slate-800 p-6 flex flex-col justify-between transition-all duration-300 hover:border-brand/70 hover:-translate-y-1 backdrop-blur-md">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 rounded-xl bg-brand/10 border border-brand/20 text-brand-light">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900">Email Direct</h3>
                <p className="text-xs text-slate-400">Primary Contact Channel</p>
              </div>
            </div>
            
            <p className="text-slate-400 text-sm mb-6 leading-relaxed">
              Reach out directly for inquiries, project proposals, or developer role discussions.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handleCopyEmail}
              className="px-4 py-3 rounded-xl bg-brand/20 hover:bg-brand/30 text-brand-light border border-brand/30 text-sm font-semibold transition flex items-center justify-center gap-2"
              aria-label="Copy Email"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4" /> Copied!
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4" /> Copy
                </>
              )}
            </button>
            <a
              href={`mailto:${email}`}
              className="flex-1 py-3 px-4 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 hover:text-white font-semibold text-sm border border-slate-700/80 transition flex items-center justify-center gap-2 group-hover:border-brand/50"
            >
              Send Email <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* CARD 2: LinkedIn Profile */}
        <div className="group rounded-2xl bg-gradient-to-br from-cyan-600/20 via-blue-600/10 to-slate-950/80 border border-slate-800 p-6 flex flex-col justify-between transition-all duration-300 hover:border-cyan-500/70 hover:-translate-y-1 backdrop-blur-md">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400">
                <Globe className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900">LinkedIn Profile</h3>
                <p className="text-xs text-slate-400">Professional Network</p>
              </div>
            </div>
            <p className="text-slate-400 text-sm mb-6 leading-relaxed">
              Connect with me on LinkedIn to view my career experience, educational background, and recommendations.
            </p>
          </div>

          <a
            href="https://www.linkedin.com/in/ashahsana/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-3 px-4 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 hover:text-white font-semibold text-sm border border-slate-700/80 transition flex items-center justify-center gap-2 group-hover:border-cyan-500/50"
          >
            Visit LinkedIn <ExternalLink className="w-4 h-4" />
          </a>
        </div>

        {/* CARD 3: GitHub Repositories */}
        <div className="group rounded-2xl bg-gradient-to-br from-purple-600/20 via-pink-600/10 to-slate-950/80 border border-slate-800 p-6 flex flex-col justify-between transition-all duration-300 hover:border-purple-500/70 hover:-translate-y-1 backdrop-blur-md">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-400">
                <Code className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900">GitHub Codebase</h3>
                <p className="text-xs text-slate-400">Repositories & Open Source</p>
              </div>
            </div>
            <p className="text-slate-400 text-sm mb-6 leading-relaxed">
              Explore my latest front-end project repositories, commits, full-stack configurations, and code architectures.
            </p>
          </div>

          <a
            href="https://github.com/ashahsana-sketch"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-3 px-4 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 hover:text-white font-semibold text-sm border border-slate-700/80 transition flex items-center justify-center gap-2 group-hover:border-purple-500/50"
          >
            Explore GitHub <ExternalLink className="w-4 h-4" />
          </a>
        </div>

        {/* CARD 4: Location & Work Status */}
        <div className="group rounded-2xl bg-gradient-to-br from-emerald-600/20 via-teal-600/10 to-slate-950/80 border border-slate-800 p-6 flex flex-col justify-between transition-all duration-300 hover:border-emerald-500/70 hover:-translate-y-1 backdrop-blur-md">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900">Location & Work Status</h3>
                <p className="text-xs text-slate-400">Work Preferences</p>
              </div>
            </div>
            <p className="text-slate-300 text-sm font-medium mb-1">
              Based in <strong className="text-white">Stockholm, Sweden</strong>
            </p>
            <p className="text-slate-400 text-xs leading-relaxed mb-6">
              Full Swedish citizenship. Available for hybrid, on-site in Stockholm, or remote development roles across Sweden and EU time zones.
            </p>
          </div>

          <div className="w-full py-3 px-4 rounded-xl bg-slate-900 border border-slate-700/80 text-emerald-400 text-xs font-semibold text-center flex items-center justify-center gap-2">
            <Sparkles className="w-3.5 h-3.5" /> Open to Immediate Opportunities
          </div>
        </div>

      </div>
    </main>
  );
}