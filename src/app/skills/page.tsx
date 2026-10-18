'use client';

import { Layers, Cpu, Wrench, ShieldCheck } from 'lucide-react';

const skillCategories = [
  {
    title: 'Frontend Architecture',
    icon: Layers,
    skills: ['React', 'Next.js App Router', 'TypeScript', 'Tailwind CSS', 'Shadcn UI', 'Semantic HTML5', 'CSS Grid & Flexbox'],
    description: 'Building responsive, high-performance component-driven web applications.'
  },
  {
    title: 'Systems & Logic',
    icon: Cpu,
    skills: ['State Management', 'API Integration (REST)', 'Asynchronous JS', 'Analytical Problem Solving', 'Responsive Design'],
    description: 'Translating complex data flows into clean, structured, and maintainable application logic.'
  },
  {
    title: 'Engineering & Tools',
    icon: Wrench,
    skills: ['Git & GitHub', 'Figma (UI/UX Prototyping)', 'Linux / Windows Environments', 'Vercel Deployment', 'C & VHDL'],
    description: 'Version control, collaborative workflows, wireframing, and cross-environment testing.'
  },
  {
    title: 'Quality & Standards',
    icon: ShieldCheck,
    skills: ['WCAG Accessibility', 'WAVE Tooling', 'Screen Reader Optimization', 'Agile / Scrum Methodologies'],
    description: 'Ensuring accessible, inclusive, and rigorously tested digital experiences.'
  }
];

export default function SkillsPage() {
  return (
    <main className="pt-24 pb-16 px-6 max-w-7xl mx-auto">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-16">
        <span className="text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full bg-brand/10 text-brand-light border border-brand/20">
          Expertise
        </span>
        <h1 className="text-3xl md:text-4xl font-extrabold text-slate-100 mt-4 mb-3">
          Technical Skills & Stack
        </h1>
        <p className="text-slate-400 text-base">
          A comprehensive overview of modern web technologies and engineering tools utilized to build scalable products.
        </p>
      </div>

      {/* Grid Matrix */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {skillCategories.map((category) => {
          const IconComponent = category.icon;
          return (
            <div 
              key={category.title}
              className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 transition hover:border-brand/80 hover:shadow-lg hover:shadow-brand/10 group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 rounded-xl bg-brand/10 border border-brand/20 text-brand-light group-hover:scale-110 transition">
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-100 group-hover:text-brand-light transition">
                    {category.title}
                  </h3>
                </div>
                <p className="text-slate-400 text-sm mb-6 leading-relaxed">
                  {category.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span 
                    key={skill}
                    className="text-xs font-medium px-3 py-1.5 rounded-lg bg-slate-800/80 text-slate-300 border border-slate-700/50"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </main>
  );
}