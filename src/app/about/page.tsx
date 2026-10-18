'use client';

import { useState } from 'react';
import { Briefcase, GraduationCap, Cpu, Code2 } from 'lucide-react';

export default function AboutPage() {
  const [activeTab, setActiveTab] = useState<'frontend' | 'analytical'>('frontend');

  return (
    <main className="pt-24 pb-16 px-6 max-w-5xl mx-auto">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-12">
        <span className="text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full bg-sky-500/10 text-sky-400 border border-sky-500/20">
          About Me
        </span>
        <h1 className="text-3xl md:text-4xl font-extrabold text-slate-100 mt-4 mb-3">
          Bridging Systems Logic & Modern UIs
        </h1>
        <p className="text-slate-400 text-base">
          Frontend developer based in Stockholm, Sweden[cite: 1], combining rigorous analytical training in applied physics with component-driven web engineering.
        </p>
      </div>

      {/* Interactive Tabs */}
      <div className="flex justify-center gap-4 mb-10">
        <button
          onClick={() => setActiveTab('frontend')}
          className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-medium transition ${
            activeTab === 'frontend'
              ? 'bg-sky-500 text-white shadow-lg shadow-sky-500/25'
              : 'bg-slate-900 text-slate-400 hover:text-slate-200 border border-slate-800'
          }`}
        >
          <Code2 className="w-4 h-4" /> Frontend & Training
        </button>
        <button
          onClick={() => setActiveTab('analytical')}
          className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-medium transition ${
            activeTab === 'analytical'
              ? 'bg-sky-500 text-white shadow-lg shadow-sky-500/25'
              : 'bg-slate-900 text-slate-400 hover:text-slate-200 border border-slate-800'
          }`}
        >
          <Cpu className="w-4 h-4" /> Analytical Roots & Physics
        </button>
      </div>

      {/* Tab Content */}
      <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 md:p-8 shadow-xl">
        {activeTab === 'frontend' ? (
          <div className="space-y-6">
            <h2 className="text-xl font-bold text-slate-100 flex items-center gap-2">
              <Briefcase className="w-5 h-5 text-sky-400" /> Professional Experience & Advanced Training
            </h2>
            <div className="border-l-2 border-sky-500/40 pl-4 space-y-6">
              <div>
                <span className="text-xs font-semibold text-sky-400">October 2026 - January 2027[cite: 2]</span>
                <h3 className="text-lg font-bold text-slate-100">Frontend Developer Intern — Desquare AB[cite: 2]</h3>
                <p className="text-slate-400 text-sm mt-1">
                  Responsible for user interface development focusing on modern frontend technologies, implementing interactive components, and optimizing online user experience[cite: 2].
                </p>
              </div>
              <div>
                <span className="text-xs font-semibold text-sky-400">May 2026 - October 2026[cite: 3]</span>
                <h3 className="text-lg font-bold text-slate-100">Frontend Developer Training — Lexicon, Stockholm[cite: 3]</h3>
                <p className="text-slate-400 text-sm mt-1">
                  Intensive advanced training program (40 hours/week) focused on React, Next.js, TypeScript, semantic HTML5, WCAG accessibility, and Tailwind CSS[cite: 3].
                </p>
              </div>
            </div>
          </div>
        ) : (
          <div className="space-y-6">
            <h2 className="text-xl font-bold text-slate-100 flex items-center gap-2">
              <GraduationCap className="w-5 h-5 text-sky-400" /> Academic Background & Hardware Engineering
            </h2>
            <div className="border-l-2 border-sky-500/40 pl-4 space-y-6">
              <div>
                <span className="text-xs font-semibold text-sky-400">2011 - 2017[cite: 3]</span>
                <h3 className="text-lg font-bold text-slate-100">Master&apos;s in Physics (Electronics) — Stockholm University[cite: 3]</h3>
                <p className="text-slate-400 text-sm mt-1">
                  Hands-on experience in FPGA-based system design, control systems, and measurement architectures using the Zynq-7000 series platform[cite: 3].
                </p>
              </div>
              <div>
                <span className="text-xs font-semibold text-sky-400">Core Engineering & Logic[cite: 3]</span>
                <h3 className="text-lg font-bold text-slate-100">Embedded Systems & Numerical Computations</h3>
                <p className="text-slate-400 text-sm mt-1">
                  Strong foundation in C programming, VHDL, SPI/GPIO protocol configurations, and algorithmic problem-solving[cite: 1, 3].
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}