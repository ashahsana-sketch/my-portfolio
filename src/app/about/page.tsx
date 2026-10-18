'use client';

import { useState } from 'react';
import { Briefcase, GraduationCap, Cpu, Code2, BookOpen } from 'lucide-react';

export default function AboutPage() {
  const [activeTab, setActiveTab] = useState<'frontend' | 'analytical' | 'degrees'>('frontend');

  return (
    <main className="pt-24 pb-16 px-6 max-w-5xl mx-auto">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-12">
        <span className="text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full bg-violet-500/10 text-violet-400 border border-violet-500/20">
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
      <div className="flex flex-wrap justify-center gap-3 mb-10">
        <button
          onClick={() => setActiveTab('degrees')}
          className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-medium text-sm transition ${
            activeTab === 'degrees'
              ? 'bg-violet-500 text-white shadow-lg shadow-violet-500/25'
              : 'bg-slate-900 text-slate-400 hover:text-slate-200 border border-slate-800'
          }`}
        >
          <BookOpen className="w-4 h-4" /> Degrees & Education
        </button>
        <button
          onClick={() => setActiveTab('frontend')}
          className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-medium text-sm transition ${
            activeTab === 'frontend'
              ? 'bg-violet-500 text-white shadow-lg shadow-violet-500/25'
              : 'bg-slate-900 text-slate-400 hover:text-slate-200 border border-slate-800'
          }`}
        >
          <Code2 className="w-4 h-4" /> Frontend & Training
        </button>
        <button
          onClick={() => setActiveTab('analytical')}
          className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-medium text-sm transition ${
            activeTab === 'analytical'
              ? 'bg-violet-500 text-white shadow-lg shadow-violet-500/25'
              : 'bg-slate-900 text-slate-400 hover:text-slate-200 border border-slate-800'
          }`}
        >
          <Cpu className="w-4 h-4" /> Analytical Roots
        </button>
        
      </div>

      {/* Tab Content */}
      <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 md:p-8 shadow-xl">
        
        {activeTab === 'degrees' && (
          <div className="space-y-6">
            <h2 className="text-xl font-bold text-slate-100 flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-violet-400" /> Academic Degrees & Qualifications
            </h2>
            <div className="border-l-2 border-violet-500/40 pl-4 space-y-6">
              <div>
                <span className="text-xs font-semibold text-violet-400">2011 - 2017[cite: 3]</span>
                <h3 className="text-lg font-bold text-slate-100">Master&apos;s in Physics (Electronics) — Stockholm University[cite: 3]</h3>
                <p className="text-slate-400 text-sm mt-1">
                  Specialization in Electronics with hands-on experience in FPGA-based system design, control systems, and measurement architectures using the Zynq-7000 platform[cite: 3].
                </p>
              </div>
              <div>
                <span className="text-xs font-semibold text-violet-400">2005 - 2010[cite: 2]</span>
                <h3 className="text-lg font-bold text-slate-100">Master of Philosophy in Astronomy — Karachi, Pakistan[cite: 2]</h3>
                <p className="text-slate-400 text-sm mt-1">
                  Primary focus on numerical data analysis and recursive equations related to Earth&apos;s rotation[cite: 2].
                </p>
              </div>
              <div>
                <span className="text-xs font-semibold text-violet-400">2002 - 2004[cite: 2]</span>
                <h3 className="text-lg font-bold text-slate-100">Master&apos;s in Applied Physics (Electronics) — Karachi, Pakistan[cite: 2]</h3>
                <p className="text-slate-400 text-sm mt-1">
                  Provided a deep theoretical and practical understanding of digital logic, circuit design, and experimental engineering techniques[cite: 2].
                </p>
              </div>
              <div>
                <span className="text-xs font-semibold text-violet-400">2000 - 2002[cite: 2]</span>
                <h3 className="text-lg font-bold text-slate-100">Bachelor&apos;s in Science (B.Sc.) — Physics, Statistics & Mathematics[cite: 2]</h3>
                <p className="text-slate-400 text-sm mt-1">
                  Strong foundational curriculum in quantitative analysis, statistical methods, and applied mathematics[cite: 2].
                </p>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'frontend' && (
          <div className="space-y-6">
            <h2 className="text-xl font-bold text-slate-100 flex items-center gap-2">
              <Briefcase className="w-5 h-5 text-violet-400" /> Professional Experience & Advanced Training
            </h2>
            <div className="border-l-2 border-violet-500/40 pl-4 space-y-6">
              <div>
                <span className="text-xs font-semibold text-violet-400">October 2026 - January 2027[cite: 2]</span>
                <h3 className="text-lg font-bold text-slate-100">Frontend Developer Intern — Desquare AB[cite: 2]</h3>
                <p className="text-slate-400 text-sm mt-1">
                  Responsible for user interface development focusing on modern frontend technologies, implementing interactive components, and optimizing online user experience[cite: 2].
                </p>
              </div>
              <div>
                <span className="text-xs font-semibold text-violet-400">May 2026 - October 2026[cite: 3]</span>
                <h3 className="text-lg font-bold text-slate-100">Frontend Developer Training — Lexicon, Stockholm[cite: 3]</h3>
                <p className="text-slate-400 text-sm mt-1">
                  Intensive advanced training program (40 hours/week) focused on React, Next.js, TypeScript, semantic HTML5, WCAG accessibility, and Tailwind CSS[cite: 3].
                </p>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'analytical' && (
          <div className="space-y-6">
            <h2 className="text-xl font-bold text-slate-100 flex items-center gap-2">
              <GraduationCap className="w-5 h-5 text-violet-400" /> Research & Teaching Experience
            </h2>
            <div className="border-l-2 border-violet-500/40 pl-4 space-y-6">
              <div>
                <span className="text-xs font-semibold text-violet-400">August 2005 - June 2010[cite: 2]</span>
                <h3 className="text-lg font-bold text-slate-100">Co-operative Teacher — Karachi University[cite: 2]</h3>
                <p className="text-slate-400 text-sm mt-1">
                  Taught courses in Digital Electronics, Numerical and Computational Methods, and C Programming, alongside analog and digital electronics laboratory exercises[cite: 2].
                </p>
              </div>
              <div>
                <span className="text-xs font-semibold text-violet-400">August 2007 - November 2007[cite: 2]</span>
                <h3 className="text-lg font-bold text-slate-100">Visiting Professor — Sir Syed University of Engineering and Technology[cite: 2]</h3>
                <p className="text-slate-400 text-sm mt-1">
                  Assigned to teach undergraduate physics courses and supervise practical laboratory exercises[cite: 2].
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}