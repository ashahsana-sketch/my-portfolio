'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Code, Globe, Heart } from 'lucide-react';

export default function Footer() {
  const [currentYear, setCurrentYear] = useState<number | string>('2026');

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="bg-slate-950 border-t border-slate-800/80 text-slate-400 py-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 pb-8 border-b border-slate-800/60">
        
        {/* Column 1: Brand & Status */}
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <span className="font-bold text-lg text-slate-100 tracking-tight">Sana Islam</span>
            <span className="text-xs px-2 py-0.5 rounded-full bg-sky-500/10 text-sky-400 border border-sky-500/20 font-semibold">
              Frontend Dev
            </span>
          </div>
          <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
            Building responsive, component-driven web applications with modern React, Next.js, and TypeScript.
          </p>
          <div className="flex items-center gap-2 pt-1">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span className="text-xs text-emerald-400 font-medium">Open to opportunities in Stockholm & Remote</span>
          </div>
        </div>

        {/* Column 2: Quick Links */}
        <div className="space-y-3 md:justify-self-center">
          <h4 className="text-sm font-semibold text-slate-200 uppercase tracking-wider">Navigation</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/" className="hover:text-sky-400 transition">Home</Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-sky-400 transition">About</Link>
            </li>
            <li>
              <Link href="/projects" className="hover:text-sky-400 transition">Projects</Link>
            </li>
            <li>
              <Link href="/skills" className="hover:text-sky-400 transition">Skills</Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-sky-400 transition">Contact</Link>
            </li>
          </ul>
        </div>

        {/* Column 3: Accessibility & Profiles */}
        <div className="space-y-3 md:justify-self-end">
          <h4 className="text-sm font-semibold text-slate-200 uppercase tracking-wider">Connect & Standards</h4>
          <div className="flex items-center gap-3">
            <a
              href="https://github.com/ashahsana-sketch"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 hover:text-sky-400 hover:border-sky-500/50 transition"
            >
              <Code className="w-4 h-4" />
            </a>
            <a
              href="https://www.linkedin.com/in/ashahsana/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 hover:text-sky-400 hover:border-sky-500/50 transition"
            >
              <Globe className="w-4 h-4" />
            </a>
          </div>
          <div className="pt-2">
            <span className="inline-flex items-center gap-1.5 text-xs text-slate-400 bg-slate-900 px-3 py-1.5 rounded-lg border border-slate-800">
              <span className="w-1.5 h-1.5 rounded-full bg-sky-400"></span>
              WCAG & Semantic HTML Compliant
            </span>
          </div>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
        <p>&copy; {currentYear} Sana Islam. All rights reserved.</p>
        <p className="flex items-center gap-1">
          Built with Next.js, Tailwind CSS & <Heart className="w-3.5 h-3.5 text-sky-400 fill-sky-400" />
        </p>
      </div>
    </footer>
  );
}