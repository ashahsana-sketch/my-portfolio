'use client';

import { useState } from 'react';
import { Mail, MapPin, Copy, Check, Globe, Code } from 'lucide-react';

export default function ContactPage() {
  const [copied, setCopied] = useState(false);
  const email = 'ashahsana@gmail.com';

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <main className="pt-24 pb-16 px-6 max-w-4xl mx-auto">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold mb-4">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
          Available for Frontend Developer Roles
        </div>
        <h1 className="text-3xl md:text-4xl font-extrabold text-slate-100 mb-3">
          Get In Touch
        </h1>
        <p className="text-slate-400 text-base">
          I am currently looking for new opportunities in Stockholm or remote. Let&apos;s build something exceptional together.
        </p>
      </div>

      {/* Contact Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
        
        {/* Email Card with Copy Action */}
        <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 rounded-xl bg-brand/10 border border-brand/20 text-brand-light">
                <Mail className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-100">Email Direct</h3>
            </div>
            <p className="text-slate-400 text-sm mb-6 font-mono bg-slate-950 p-3 rounded-lg border border-slate-800">
              {email}
            </p>
          </div>

          <button
            onClick={handleCopyEmail}
            className="w-full py-2.5 px-4 rounded-xl bg-brand hover:bg-brand-hover text-white font-medium text-sm transition flex items-center justify-center gap-2 shadow-lg shadow-brand/25"
          >
            {copied ? (
              <>
                <Check className="w-4 h-4" /> Email Copied!
              </>
            ) : (
              <>
                <Copy className="w-4 h-4" /> Copy Email Address
              </>
            )}
          </button>
        </div>

        {/* Location & Socials Card */}
        <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 rounded-xl bg-brand/10 border border-brand/20 text-brand-light">
                <MapPin className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-100">Location & Profiles</h3>
            </div>
            <p className="text-slate-400 text-sm mb-6">
              Stockholm, Sweden (Swedish Citizenship). Open to hybrid or remote collaborations.
            </p>
          </div>

          <div className="flex gap-3">
            <a
              href="https://www.linkedin.com/in/ashahsana/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 py-2.5 px-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-medium text-sm transition flex items-center justify-center gap-2 border border-slate-700 hover:border-brand/40"
            >
              <Globe className="w-4 h-4 text-brand-light" /> LinkedIn
            </a>
            <a
              href="https://github.com/ashahsana-sketch"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 py-2.5 px-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-medium text-sm transition flex items-center justify-center gap-2 border border-slate-700 hover:border-brand/40"
            >
              <Code className="w-4 h-4 text-brand-light" /> GitHub
            </a>
          </div>
        </div>

      </div>
    </main>
  );
}