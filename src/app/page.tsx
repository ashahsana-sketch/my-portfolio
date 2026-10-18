import Link from 'next/link';
import { Layers, Cpu, Wrench, ShieldCheck, ArrowRight } from 'lucide-react';
import Hero from '@/components/Hero/Hero';

const skillHighlights = [
  {
    title: 'Frontend Architecture',
    icon: Layers,
    skills: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'],
  },
  {
    title: 'Systems & Logic',
    icon: Cpu,
    skills: ['State Management', 'API Integration', 'Analytical Problem Solving'],
  },
  {
    title: 'Engineering Tools',
    icon: Wrench,
    skills: ['Git & GitHub', 'Figma', 'Linux Environments'],
  },
  {
    title: 'Standards & Quality',
    icon: ShieldCheck,
    skills: ['WCAG Accessibility', 'Semantic HTML5', 'Agile / Scrum'],
  },
];

export default function HomePage() {
  return (
    <main className="pt-20">
      <Hero />

      {/* Skills Snapshot Section */}
      <section className="py-20 px-6 max-w-7xl mx-auto border-t border-slate-800/80">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full bg-sky-500/10 text-sky-400 border border-sky-500/20">
              Core Stack
            </span>
            <h2 className="text-2xl md:text-3xl font-extrabold text-slate-600 mt-4">
              Engineered for Performance & Scale
            </h2>
          </div>
          <Link
            href="/skills"
            className="inline-flex items-center gap-2 text-sky-400 hover:text-sky-300 font-semibold mt-4 md:mt-0 transition group"
          >
            Explore Full Skills Matrix <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" />
          </Link>
        </div>

        {/* Grid Snapshot */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillHighlights.map((category) => {
            const IconComponent = category.icon;
            return (
              <div 
                key={category.title}
                className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 transition hover:border-sky-500/80 hover:shadow-lg hover:shadow-sky-500/10 group"
              >
                <div className="p-3 rounded-xl bg-sky-500/10 border border-sky-500/20 text-sky-400 w-fit mb-4 group-hover:scale-110 transition">
                  <IconComponent className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-slate-700 mb-3 group-hover:text-sky-400 transition">
                  {category.title}
                </h3>
                <ul className="space-y-1.5">
                  {category.skills.map((skill) => (
                    <li key={skill} className="text-sm text-slate-200 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-sky-500/60"></span>
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </section>
    </main>
  );
}