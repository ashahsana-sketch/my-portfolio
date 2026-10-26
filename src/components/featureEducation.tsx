'use client';

import Link from 'next/link';
import { GraduationCap, Calendar, MapPin, CheckCircle2, ArrowRight, BookOpen } from 'lucide-react';

interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  location: string;
  period: string;
  description: string;
  highlights: string[];
  gradient: string;
}

const featuredEducation: EducationItem[] = [
  {
    id: 'stockholm-master',
    degree: "Master's Degree in Physics (Electronics)",
    institution: 'Stockholm University',
    location: 'Stockholm, Sweden',
    period: '2013 – 2017',
    description: 'Specialization in Electronics with hands-on experience in FPGA-based system design, control systems, and measurement architectures on the Zynq-7000 platform.',
    highlights: ['FPGA / Zynq-7000', 'Digital Electronics', 'Signal Processing'],
    gradient: 'from-blue-600/30 via-indigo-600/10 to-slate-950/90',
  },
  {
    id: 'karachi-master',
    degree: ' Master&apos;s in Applied Physics (Electronics)',
    institution: 'University Education',
    location: 'Karachi, Pakistan',
    period: '2003 – 2004',
    description: 'Provided a deep theoretical and practical understanding of digital logic, circuit design, embedded microcontrollers, and experimental engineering techniques.',
    highlights: ['Single board computer','C-language','Numerical Analysis', 'Computational Logic', 'Digital/Analog Electronics'],
    gradient: 'from-purple-600/30 via-pink-600/10 to-slate-950/90',
  },
];

export default function FeaturedEducation() {
  return (
    <section 
      aria-labelledby="featured-education-heading" 
      className=" py-12 sm:py-16 px-4 sm:px-8 lg:px-16 bg-slate-900 mt-4 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <header className="mb-8 text-center md:text-left">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-800 border border-slate-700 text-slate-300 text-xs sm:text-sm font-medium mb-3 backdrop-blur-sm">
            <GraduationCap className="w-4 h-4 text-brand-light" aria-hidden="true" />
            <span>Academic Qualifications</span>
          </div>
          <h2 
            id="featured-education-heading" 
            className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-100 tracking-tight"
          >
            Featured Education
          </h2>
        </header>

        {/* 2-Card Single Row Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 w-full mb-8">
          {featuredEducation.map((item) => (
            <article
              key={item.id}
              tabIndex={0}
              aria-label={`${item.degree} at ${item.institution}`}
              className={`group rounded-2xl bg-slate-950 bg-linear-to-br ${item.gradient} border border-slate-800/90 p-5 sm:p-6 flex flex-col justify-between transition-all duration-300 hover:border-slate-600 hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-brand/60 backdrop-blur-md w-full overflow-hidden shadow-xl`}
            >
              <div>
                <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                  <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-full bg-slate-900/90 text-slate-200 border border-slate-800">
                    <BookOpen className="w-3.5 h-3.5 text-brand-light" aria-hidden="true" /> 
                    <span>{item.institution}</span>
                  </span>
                  <div className="flex items-center gap-2 text-[11px] font-medium text-slate-400 bg-slate-900/80 px-2.5 py-1 rounded-md border border-slate-800">
                    <Calendar className="w-3 h-3 text-slate-500" aria-hidden="true" />
                    <span>{item.period}</span>
                  </div>
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-slate-100 group-hover:text-brand-light transition mb-1 leading-snug">
                  {item.degree}
                </h3>

                <div className="flex items-center gap-1.5 text-xs text-slate-400 mb-4">
                  <MapPin className="w-3.5 h-3.5 text-brand-light" aria-hidden="true" />
                  <span>{item.location}</span>
                </div>

                <p className="text-slate-400 text-xs sm:text-sm leading-relaxed mb-6">
                  {item.description}
                </p>
              </div>

              <div>
                <div 
                  role="list" 
                  aria-label="Key competencies" 
                  className="flex flex-wrap gap-1.5 mb-5 pt-4 border-t border-slate-800/80"
                >
                  {item.highlights.map((highlight) => (
                    <span
                      key={highlight}
                      role="listitem"
                      className="text-[11px] sm:text-[12px] px-2.5 py-1 rounded-md bg-slate-900/90 text-slate-300 border border-slate-800/80 whitespace-nowrap"
                    >
                      {highlight}
                    </span>
                  ))}
                </div>

                <div className="inline-flex items-center gap-1.5 text-xs font-medium text-emerald-400 bg-emerald-500/10 px-3 py-1.5 rounded-lg border border-emerald-500/20">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" aria-hidden="true" /> 
                  <span>Degree & Qualification</span>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Link to view all educations */}
        <div className="text-center md:text-left">
          <Link
            href="/Background"
            className="inline-flex items-center gap-2 text-sm sm:text-base font-semibold text-white hover:text-brand-light transition group focus:outline-none focus:underline"
          >
            <span>View All Qualifications & Academic Background</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition shrink-0" />
          </Link>
        </div>

      </div>
    </section>
  );
}