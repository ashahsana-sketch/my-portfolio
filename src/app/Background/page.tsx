'use client';

import { useState } from 'react';
import { Briefcase, GraduationCap, Cpu, Code2, BookOpen, Calendar, Award } from 'lucide-react';

type TabType = 'degrees' | 'frontend' | 'analytical';

export default function BackgroundPage() {
  const [activeTab, setActiveTab] = useState<TabType>('degrees');

  return (
    <main 
      aria-labelledby="background-heading" 
      className="w-full min-h-screen pt-24 pb-20 bg-slate-900 relative overflow-hidden"
    >
      {/* Background soft glow effect */}
      <div 
        aria-hidden="true" 
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[600px] lg:w-[800px] h-[350px] sm:h-[600px] lg:h-[800px] bg-brand/10 blur-[100px] sm:blur-[160px] rounded-full pointer-events-none" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Left-Aligned Header */}
        <header className="text-left max-w-3xl mt-20 mb-10 sm:mb-14">
          {/* <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-800 border border-slate-700 text-slate-300 text-xs sm:text-sm font-medium mb-4 backdrop-blur-sm shadow-inner">
            <Award className="w-3.5 h-3.5 text-brand-light" aria-hidden="true" />
            <span>Background & Qualifications</span>
          </div> */}
          <h1 
            id="background-heading" 
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-100 tracking-tight mb-4"
          >
            Bridging Systems Logic & Modern UIs
          </h1>
          <p className="text-slate-300 text-sm sm:text-base lg:text-lg leading-relaxed">
            Front-end developer based in Stockholm, Sweden, combining rigorous analytical training in applied physics with component-driven web engineering.
          </p>
        </header>

        {/* Interactive Filter / Category Tabs */}
        <div 
          role="region" 
          aria-label="Background section tabs" 
          className="flex flex-wrap items-center gap-2 sm:gap-3 mb-8 sm:mb-12 border-b border-slate-800/80 pb-5 overflow-x-auto focus:outline-none"
        >
          <button
            onClick={() => setActiveTab('degrees')}
            aria-pressed={activeTab === 'degrees'}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-medium text-xs sm:text-sm transition whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-brand/50 ${
              activeTab === 'degrees'
                ? 'bg-brand text-white shadow-lg shadow-brand/25 ring-2 ring-brand/40'
                : 'bg-slate-900/80 text-slate-400 hover:text-slate-200 border border-slate-800'
            }`}
          >
            <BookOpen className="w-4 h-4 text-brand-light" aria-hidden="true" /> Degrees & Education
          </button>

          <button
            onClick={() => setActiveTab('frontend')}
            aria-pressed={activeTab === 'frontend'}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-medium text-xs sm:text-sm transition whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-brand/50 ${
              activeTab === 'frontend'
                ? 'bg-brand text-white shadow-lg shadow-brand/25 ring-2 ring-brand/40'
                : 'bg-slate-900/80 text-slate-400 hover:text-slate-200 border border-slate-800'
            }`}
          >
            <Code2 className="w-4 h-4 text-brand-light" aria-hidden="true" /> Frontend & Training
          </button>

          <button
            onClick={() => setActiveTab('analytical')}
            aria-pressed={activeTab === 'analytical'}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-medium text-xs sm:text-sm transition whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-brand/50 ${
              activeTab === 'analytical'
                ? 'bg-brand text-white shadow-lg shadow-brand/25 ring-2 ring-brand/40'
                : 'bg-slate-900/80 text-slate-400 hover:text-slate-200 border border-slate-800'
            }`}
          >
            <Cpu className="w-4 h-4 text-brand-light" aria-hidden="true" /> Analytical Roots
          </button>
        </div>

        {/* Tab Content Box */}
        <div className="bg-slate-950/80 border border-slate-800 rounded-2xl p-5 sm:p-8 shadow-2xl backdrop-blur-md">
          
          {/* TAB 1: DEGREES */}
          {activeTab === 'degrees' && (
            <section aria-label="Academic Degrees & Qualifications" className="space-y-6">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-100 flex items-center gap-2.5 pb-4 border-b border-slate-800">
                <BookOpen className="w-5 h-5 sm:w-6 sm:h-6 text-brand-light" aria-hidden="true" /> 
                <span>Academic Degrees & Qualifications</span>
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 pt-2">
                
                {/* Degree Card 1 */}
                <article className="rounded-2xl bg-slate-950 bg-gradient-to-br from-blue-600/30 via-indigo-600/10 to-slate-950/90 border border-slate-800/90 p-5 sm:p-6 flex flex-col justify-between hover:border-slate-600 transition duration-300 shadow-xl backdrop-blur-md">
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-4">
                      <span className="text-xs font-semibold text-brand-light bg-brand/10 px-3 py-1 rounded-full border border-brand/20">
                        Master Degree
                      </span>
                      <time className="text-xs text-slate-400 flex items-center gap-1.5 font-medium bg-slate-900/80 px-2.5 py-1 rounded-md border border-slate-800">
                        <Calendar className="w-3.5 h-3.5 text-slate-500" aria-hidden="true" /> 2011 - 2017
                      </time>
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-slate-100 mb-1 leading-snug">
                      Master&apos;s in Physics (Electronics)
                    </h3>
                    <p className="text-xs font-semibold text-slate-300 mb-3">Stockholm University, Sweden</p>
                    <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                      Specialization in Electronics with hands-on experience in FPGA-based system design, control systems, and measurement architectures using the Zynq-7000 platform.
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-1.5 mt-6 pt-4 border-t border-slate-800/80">
                    <span className="text-[11px] sm:text-[12px] px-2.5 py-1 rounded-md bg-slate-900/90 text-slate-300 border border-slate-800/80">FPGA / Zynq-7000</span>
                    <span className="text-[11px] sm:text-[12px] px-2.5 py-1 rounded-md bg-slate-900/90 text-slate-300 border border-slate-800/80">Electronics</span>
                    <span className="text-[11px] sm:text-[12px] px-2.5 py-1 rounded-md bg-slate-900/90 text-slate-300 border border-slate-800/80">Signal Processing</span>
                  </div>
                </article>

                {/* Degree Card 2 */}
                <article className="rounded-2xl bg-slate-950 bg-gradient-to-br from-purple-600/30 via-pink-600/10 to-slate-950/90 border border-slate-800/90 p-5 sm:p-6 flex flex-col justify-between hover:border-slate-600 transition duration-300 shadow-xl backdrop-blur-md">
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-4">
                      <span className="text-xs font-semibold text-purple-300 bg-purple-500/10 px-3 py-1 rounded-full border border-purple-500/20">
                        Master of Philosophy
                      </span>
                      <time className="text-xs text-slate-400 flex items-center gap-1.5 font-medium bg-slate-900/80 px-2.5 py-1 rounded-md border border-slate-800">
                        <Calendar className="w-3.5 h-3.5 text-slate-500" aria-hidden="true" /> 2005 - 2010
                      </time>
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-slate-100 mb-1 leading-snug">
                      M.Phil. in Astronomy
                    </h3>
                    <p className="text-xs font-semibold text-slate-300 mb-3">Karachi, Pakistan</p>
                    <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                      Primary research focus on numerical data analysis, computational modeling, and recursive equations related to Earth&apos;s rotational mechanics.
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-1.5 mt-6 pt-4 border-t border-slate-800/80">
                    <span className="text-[11px] sm:text-[12px] px-2.5 py-1 rounded-md bg-slate-900/90 text-slate-300 border border-slate-800/80">Numerical Analysis</span>
                    <span className="text-[11px] sm:text-[12px] px-2.5 py-1 rounded-md bg-slate-900/90 text-slate-300 border border-slate-800/80">Recursive Algorithms</span>
                  </div>
                </article>

                {/* Degree Card 3 */}
                <article className="rounded-2xl bg-slate-950 bg-gradient-to-br from-indigo-600/30 via-blue-600/10 to-slate-950/90 border border-slate-800/90 p-5 sm:p-6 flex flex-col justify-between hover:border-slate-600 transition duration-300 shadow-xl backdrop-blur-md">
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-4">
                      <span className="text-xs font-semibold text-indigo-300 bg-indigo-500/10 px-3 py-1 rounded-full border border-indigo-500/20">
                        Master Degree
                      </span>
                      <time className="text-xs text-slate-400 flex items-center gap-1.5 font-medium bg-slate-900/80 px-2.5 py-1 rounded-md border border-slate-800">
                        <Calendar className="w-3.5 h-3.5 text-slate-500" aria-hidden="true" /> 2002 - 2004
                      </time>
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-slate-100 mb-1 leading-snug">
                      Master&apos;s in Applied Physics (Electronics)
                    </h3>
                    <p className="text-xs font-semibold text-slate-300 mb-3">Karachi, Pakistan</p>
                    <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                      Provided a deep theoretical and practical understanding of digital logic, circuit design, embedded microcontrollers, and experimental engineering techniques.
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-1.5 mt-6 pt-4 border-t border-slate-800/80">
                    <span className="text-[11px] sm:text-[12px] px-2.5 py-1 rounded-md bg-slate-900/90 text-slate-300 border border-slate-800/80">Digital Logic</span>
                    <span className="text-[11px] sm:text-[12px] px-2.5 py-1 rounded-md bg-slate-900/90 text-slate-300 border border-slate-800/80">Circuit Design</span>
                  </div>
                </article>

                {/* Degree Card 4 */}
                <article className="rounded-2xl bg-slate-950 bg-gradient-to-br from-emerald-600/30 via-teal-600/10 to-slate-950/90 border border-slate-800/90 p-5 sm:p-6 flex flex-col justify-between hover:border-slate-600 transition duration-300 shadow-xl backdrop-blur-md">
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-4">
                      <span className="text-xs font-semibold text-emerald-300 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
                        Bachelor Degree
                      </span>
                      <time className="text-xs text-slate-400 flex items-center gap-1.5 font-medium bg-slate-900/80 px-2.5 py-1 rounded-md border border-slate-800">
                        <Calendar className="w-3.5 h-3.5 text-slate-500" aria-hidden="true" /> 2000 - 2002
                      </time>
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-slate-100 mb-1 leading-snug">
                      Bachelor of Science (B.Sc.)
                    </h3>
                    <p className="text-xs font-semibold text-slate-300 mb-3">Physics, Statistics & Mathematics</p>
                    <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                      Strong foundational curriculum in quantitative analysis, statistical methods, physical systems, and applied mathematics.
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-1.5 mt-6 pt-4 border-t border-slate-800/80">
                    <span className="text-[11px] sm:text-[12px] px-2.5 py-1 rounded-md bg-slate-900/90 text-slate-300 border border-slate-800/80">Applied Mathematics</span>
                    <span className="text-[11px] sm:text-[12px] px-2.5 py-1 rounded-md bg-slate-900/90 text-slate-300 border border-slate-800/80">Statistics</span>
                  </div>
                </article>

              </div>
            </section>
          )}

          {/* TAB 2: FRONTEND EXPERIENCE */}
          {activeTab === 'frontend' && (
            <section aria-label="Professional Experience & Advanced Training" className="space-y-6">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-100 flex items-center gap-2.5 pb-4 border-b border-slate-800">
                <Briefcase className="w-5 h-5 sm:w-6 sm:h-6 text-brand-light" aria-hidden="true" /> 
                <span>Professional Experience & Advanced Training</span>
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 pt-2">
                
                {/* Role 1 */}
                <article className="rounded-2xl bg-slate-950 bg-gradient-to-br from-emerald-600/30 via-teal-600/10 to-slate-950/90 border border-slate-800/90 p-5 sm:p-6 flex flex-col justify-between hover:border-slate-600 transition duration-300 shadow-xl backdrop-blur-md">
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-4">
                      <span className="text-xs font-semibold text-emerald-300 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
                        Current Internship
                      </span>
                      <time className="text-xs text-slate-400 flex items-center gap-1.5 font-medium bg-slate-900/80 px-2.5 py-1 rounded-md border border-slate-800">
                        <Calendar className="w-3.5 h-3.5 text-slate-500" aria-hidden="true" /> Oct 2026 - Jan 2027
                      </time>
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-slate-100 mb-1 leading-snug">
                      Frontend Developer Intern
                    </h3>
                    <p className="text-xs font-semibold text-slate-300 mb-3">Desquare AB — Stockholm, Sweden</p>
                    <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                      Responsible for user interface development focusing on modern frontend technologies, implementing interactive components, and optimizing web user experience.
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-1.5 mt-6 pt-4 border-t border-slate-800/80">
                    <span className="text-[11px] sm:text-[12px] px-2.5 py-1 rounded-md bg-slate-900/90 text-slate-300 border border-slate-800/80">React</span>
                    <span className="text-[11px] sm:text-[12px] px-2.5 py-1 rounded-md bg-slate-900/90 text-slate-300 border border-slate-800/80">Next.js</span>
                    <span className="text-[11px] sm:text-[12px] px-2.5 py-1 rounded-md bg-slate-900/90 text-slate-300 border border-slate-800/80">TypeScript</span>
                  </div>
                </article>

                {/* Role 2 */}
                <article className="rounded-2xl bg-slate-950 bg-gradient-to-br from-blue-600/30 via-indigo-600/10 to-slate-950/90 border border-slate-800/90 p-5 sm:p-6 flex flex-col justify-between hover:border-slate-600 transition duration-300 shadow-xl backdrop-blur-md">
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-4">
                      <span className="text-xs font-semibold text-brand-light bg-brand/10 px-3 py-1 rounded-full border border-brand/20">
                        Intensive Program
                      </span>
                      <time className="text-xs text-slate-400 flex items-center gap-1.5 font-medium bg-slate-900/80 px-2.5 py-1 rounded-md border border-slate-800">
                        <Calendar className="w-3.5 h-3.5 text-slate-500" aria-hidden="true" /> May 2026 - Oct 2026
                      </time>
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-slate-100 mb-1 leading-snug">
                      Frontend Developer Training
                    </h3>
                    <p className="text-xs font-semibold text-slate-300 mb-3">Lexicon — Stockholm, Sweden</p>
                    <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                      Intensive advanced training program (40 hours/week) focused on React, Next.js, TypeScript, semantic HTML5, WCAG accessibility, and Tailwind CSS.
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-1.5 mt-6 pt-4 border-t border-slate-800/80">
                    <span className="text-[11px] sm:text-[12px] px-2.5 py-1 rounded-md bg-slate-900/90 text-slate-300 border border-slate-800/80">Tailwind CSS</span>
                    <span className="text-[11px] sm:text-[12px] px-2.5 py-1 rounded-md bg-slate-900/90 text-slate-300 border border-slate-800/80">WCAG (a11y)</span>
                    <span className="text-[11px] sm:text-[12px] px-2.5 py-1 rounded-md bg-slate-900/90 text-slate-300 border border-slate-800/80">REST APIs</span>
                  </div>
                </article>

              </div>
            </section>
          )}

          {/* TAB 3: ANALYTICAL ROOTS */}
          {activeTab === 'analytical' && (
            <section aria-label="Research & Teaching Experience" className="space-y-6">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-100 flex items-center gap-2.5 pb-4 border-b border-slate-800">
                <GraduationCap className="w-5 h-5 sm:w-6 sm:h-6 text-brand-light" aria-hidden="true" /> 
                <span>Research & Teaching Experience</span>
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 pt-2">
                
                {/* Teaching 1 */}
                <article className="rounded-2xl bg-slate-950 bg-gradient-to-br from-purple-600/30 via-indigo-600/10 to-slate-950/90 border border-slate-800/90 p-5 sm:p-6 flex flex-col justify-between hover:border-slate-600 transition duration-300 shadow-xl backdrop-blur-md">
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-4">
                      <span className="text-xs font-semibold text-purple-300 bg-purple-500/10 px-3 py-1 rounded-full border border-purple-500/20">
                        Higher Education
                      </span>
                      <time className="text-xs text-slate-400 flex items-center gap-1.5 font-medium bg-slate-900/80 px-2.5 py-1 rounded-md border border-slate-800">
                        <Calendar className="w-3.5 h-3.5 text-slate-500" aria-hidden="true" /> Aug 2005 - Jun 2010
                      </time>
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-slate-100 mb-1 leading-snug">
                      Co-operative Teacher
                    </h3>
                    <p className="text-xs font-semibold text-slate-300 mb-3">Karachi University</p>
                    <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                      Taught courses in Digital Electronics, Numerical & Computational Methods, and C Programming, alongside conducting analog and digital electronics laboratory exercises.
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-1.5 mt-6 pt-4 border-t border-slate-800/80">
                    <span className="text-[11px] sm:text-[12px] px-2.5 py-1 rounded-md bg-slate-900/90 text-slate-300 border border-slate-800/80">C Programming</span>
                    <span className="text-[11px] sm:text-[12px] px-2.5 py-1 rounded-md bg-slate-900/90 text-slate-300 border border-slate-800/80">Digital Electronics</span>
                    <span className="text-[11px] sm:text-[12px] px-2.5 py-1 rounded-md bg-slate-900/90 text-slate-300 border border-slate-800/80">Lab Instruction</span>
                  </div>
                </article>

                {/* Teaching 2 */}
                <article className="rounded-2xl bg-slate-950 bg-gradient-to-br from-cyan-600/30 via-blue-600/10 to-slate-950/90 border border-slate-800/90 p-5 sm:p-6 flex flex-col justify-between hover:border-slate-600 transition duration-300 shadow-xl backdrop-blur-md">
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-4">
                      <span className="text-xs font-semibold text-cyan-300 bg-cyan-500/10 px-3 py-1 rounded-full border border-cyan-500/20">
                        Academic Faculty
                      </span>
                      <time className="text-xs text-slate-400 flex items-center gap-1.5 font-medium bg-slate-900/80 px-2.5 py-1 rounded-md border border-slate-800">
                        <Calendar className="w-3.5 h-3.5 text-slate-500" aria-hidden="true" /> Aug 2007 - Nov 2007
                      </time>
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-slate-100 mb-1 leading-snug">
                      Visiting Professor
                    </h3>
                    <p className="text-xs font-semibold text-slate-300 mb-3">Sir Syed University of Engineering and Technology</p>
                    <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                      Assigned to teach undergraduate physics courses and supervise practical laboratory exercises for engineering students.
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-1.5 mt-6 pt-4 border-t border-slate-800/80">
                    <span className="text-[11px] sm:text-[12px] px-2.5 py-1 rounded-md bg-slate-900/90 text-slate-300 border border-slate-800/80">Undergraduate Physics</span>
                    <span className="text-[11px] sm:text-[12px] px-2.5 py-1 rounded-md bg-slate-900/90 text-slate-300 border border-slate-800/80">Engineering Labs</span>
                  </div>
                </article>

              </div>
            </section>
          )}

        </div>

      </div>
    </main>
  );
}