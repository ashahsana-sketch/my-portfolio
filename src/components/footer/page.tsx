'use client';

import Link from 'next/link';
import { Code, Mail } from 'lucide-react';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 border-t border-slate-800/80 text-slate-400 py-12 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Brand / Logo */}
        <div className="flex items-center gap-2 text-lg font-bold text-sky-400">
          <Code className="w-5 h-5" />
          <span>Portfolio.</span>
        </div>

        {/* Quick Links */}
        <div className="flex flex-wrap justify-center gap-6 text-sm font-medium text-slate-300">
          <Link href="/" className="hover:text-sky-400 transition">Home</Link>
          <Link href="/about" className="hover:text-sky-400 transition">About</Link>
          <Link href="/skills" className="hover:text-sky-400 transition">Skills</Link>
          <Link href="/projects" className="hover:text-sky-400 transition">Projects</Link>
          <Link href="/contact" className="hover:text-sky-400 transition">Contact</Link>
        </div>

        {/* Social Icons */}
        <div className="flex items-center gap-4 text-slate-400">
          <a
            href="https://github.com/ashahsana-sketch"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub profile"
            className="p-2 rounded-lg border border-slate-800 hover:border-sky-500 hover:text-sky-400 transition"
          >
            <FaGithub size={18} />
          </a>
          <a
            href="https://linkedin.com/in/ashahsana"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn profile"
            className="p-2 rounded-lg border border-slate-800 hover:border-sky-500 hover:text-sky-400 transition"
          >
            <FaLinkedinIn size={18} />
          </a>
          <a
            href="mailto:ashahsana@gmail.com"
            aria-label="Send email"
            className="p-2 rounded-lg border border-slate-800 hover:border-sky-500 hover:text-sky-400 transition"
          >
            <Mail size={18} />
          </a>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-8 pt-6 border-t border-slate-900 text-center text-xs text-slate-500">
        © {currentYear} Sana. All rights reserved. Built with Next.js & Tailwind CSS.
      </div>
    </footer>
  );
}