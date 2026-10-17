'use client';

import { ArrowRight, Mail } from 'lucide-react';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-slate-950 text-slate-100 pt-16 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <span className="px-3 py-1 text-sm bg-sky-500/10 text-sky-400 rounded-full border border-sky-500/20">
          Welcome to my portfolio
        </span>

        <h1 className="text-4xl md:text-6xl font-extrabold mt-6 tracking-tight">
          Hi, I&apos;m{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-indigo-500">
            Sana
          </span>
        </h1>

        <p className="mt-4 text-lg md:text-xl text-slate-400 max-w-2xl mx-auto">
          Front-End Developer creating responsive,
          high-performance web applications.
        </p>

        <div className="mt-8 flex justify-center gap-4">
          <a
            href="#projects"
            className="flex items-center gap-2 px-6 py-3 bg-sky-500 hover:bg-sky-600 font-medium rounded-xl transition shadow-lg shadow-sky-500/20"
          >
            View Projects <ArrowRight className="w-4 h-4" />
          </a>

          <a
            href="#contact"
            className="px-6 py-3 bg-slate-900 hover:bg-slate-800 font-medium rounded-xl border border-slate-700 transition"
          >
            Get in Touch
          </a>
        </div>

        <div className="mt-12 flex justify-center gap-6 text-slate-400">
          <a
            href="https://github.com/ashahsana-sketch"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub profile"
            className="hover:text-sky-400 transition"
          >
            <FaGithub className="w-6 h-6" />
          </a>

          <a
            href="https://linkedin.com/in/ashahsana"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn profile"
            className="hover:text-sky-400 transition"
          >
            <FaLinkedinIn className="w-6 h-6" />
          </a>

          <a
            href="mailto:ashahsana@gmail.com"
            aria-label="Send email"
            className="hover:text-sky-400 transition"
          >
            <Mail className="w-6 h-6" />
          </a>
        </div>
      </div>
    </section>
  );
}