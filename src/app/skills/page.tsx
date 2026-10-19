'use client';

import { Layers, Cpu, Wrench, ShieldCheck, Sparkles, Code2 } from 'lucide-react';

interface SkillCategory {
  title: string;
  icon: typeof Layers;
  description: string;
  skills: string[];
  gradient: string;
  badgeColor: string;
}

const skillCategories: SkillCategory[] = [
  {
    title: 'Frontend Architecture',
    icon: Layers,
    description: 'Building responsive, high-performance component-driven web applications with modern React frameworks and utility styling.',
    skills: ['React', 'Next.js App Router', 'TypeScript', 'Tailwind CSS', 'Shadcn UI', 'Semantic HTML5', 'CSS Grid & Flexbox'],
    // Ocean Emerald Glow
    gradient: 'from-emerald-600/30 via-teal-600/10 to-slate-950/90',
    badgeColor: 'text-emerald-300 bg-emerald-500/10 border-emerald-500/20',
  },
  {
    title: 'Systems & Logic',
    icon: Cpu,
    description: 'Translating complex data flows into clean, structured, and maintainable application logic and REST API integrations.',
    skills: ['State Management', 'API Integration (REST)', 'Asynchronous JS', 'Analytical Problem Solving', 'Responsive Design'],
    // Sapphire Indigo Glow
    gradient: 'from-blue-600/30 via-indigo-600/10 to-slate-950/90',
    badgeColor: 'text-brand-light bg-brand/10 border-brand/20',
  },
  {
    title: 'Engineering & Tools',
    icon: Wrench,
    description: 'Version control, collaborative team workflows, UI/UX prototyping, deployment pipelines, and embedded low-level languages.',
    skills: ['Git & GitHub', 'Figma (UI/UX Prototyping)', 'Linux / Windows Environments', 'Vercel Deployment', 'C & VHDL'],
    // Violet Neon Glow
    gradient: 'from-violet-600/30 via-purple-600/10 to-slate-950/90',
    badgeColor: 'text-purple-300 bg-purple-500/10 border-purple-500/20',
  },
  {
    title: 'Quality & Standards',
    icon: ShieldCheck,
    description: 'Ensuring accessible, inclusive, WCAG-compliant, and rigorously tested digital user experiences for all users.',
    skills: ['WCAG Accessibility', 'WAVE Tooling', 'Screen Reader Optimization', 'Agile / Scrum Methodologies'],
    // Hot Pink / Magenta Glow
    gradient: 'from-pink-600/30 via-rose-600/10 to-slate-950/90',
    badgeColor: 'text-pink-300 bg-pink-500/10 border-pink-500/20',
  },
];

export default function SkillsPage() {
  return (
    <main 
      aria-labelledby="skills-heading" 
      className="w-full min-h-screen py-16 sm:py-24 bg-slate-900 relative overflow-hidden"
    >
      {/* Background soft glow effect */}
      <div 
        aria-hidden="true" 
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[600px] lg:w-[800px] h-[350px] sm:h-[600px] lg:h-[800px] bg-brand/10 blur-[100px] sm:blur-[160px] rounded-full pointer-events-none" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <header className="mb-10 sm:mb-14 text-center md:text-left">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-800 border border-slate-700 text-slate-300 text-xs sm:text-sm font-medium mb-4 backdrop-blur-sm shadow-inner">
            <Code2 className="w-4 h-4 text-brand-light" aria-hidden="true" /> 
            <span>Technical Expertise</span>
          </div>
          <h1 
            id="skills-heading" 
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-100 tracking-tight mb-3"
          >
            Technical Skills & Stack
          </h1>
          <p className="text-slate-300 max-w-3xl text-sm sm:text-base leading-relaxed">
            A comprehensive overview of modern web technologies, engineering workflows, and quality standards utilized to build scalable, component-driven web applications.
          </p>
        </header>

        {/* Skills Cards Grid (Responsive Grid: 1 col on mobile, 2 cols on tablet/desktop, up to 4 cols on widescreen) */}
        <div 
          role="feed" 
          aria-busy="false"
          className="grid grid-cols-1 md:grid-cols-2  gap-6 sm:gap-8 w-full"
        >
          {skillCategories.map((category) => {
            const IconComponent = category.icon;
            return (
              <article
                key={category.title}
                tabIndex={0}
                aria-label={`${category.title} skills`}
                className={`group rounded-2xl bg-slate-950 bg-gradient-to-br ${category.gradient} border border-slate-800/90 p-5 sm:p-6 flex flex-col justify-between transition-all duration-300 hover:border-slate-600 hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-brand/60 backdrop-blur-md w-full overflow-hidden shadow-xl`}
              >
                <div>
                  {/* Category Badge Row */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className={`inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-full border ${category.badgeColor}`}>
                      <IconComponent className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                      <span>{category.title}</span>
                    </span>
                  </div>

                  {/* Category Title */}
                  <h2 className="text-lg sm:text-xl font-bold text-slate-100 group-hover:text-brand-light transition mb-2 leading-snug">
                    {category.title}
                  </h2>

                  {/* Description */}
                  <p className="text-slate-400 text-xs sm:text-sm leading-relaxed mb-6">
                    {category.description}
                  </p>
                </div>

                <div>
                  {/* Skill Tag Chips */}
                  <div 
                    role="list" 
                    aria-label={`${category.title} skill set`} 
                    className="flex flex-wrap gap-1.5 pt-4 border-t border-slate-800/80"
                  >
                    {category.skills.map((skill) => (
                      <span
                        key={skill}
                        role="listitem"
                        className="text-[11px] sm:text-[12px] px-2.5 py-1 rounded-md bg-slate-900/90 text-slate-300 border border-slate-800/80 whitespace-nowrap"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            );
          })}
        </div>

      </div>
    </main>
  );
}