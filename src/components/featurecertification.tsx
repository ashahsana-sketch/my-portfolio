'use client';

import Link from 'next/link';
import { Award, Calendar, CheckCircle2, ExternalLink, ArrowRight } from 'lucide-react';

interface Certification {
  id: string;
  title: string;
  issuer: string;
  period: string;
  description: string;
  skills: string[];
  gradient: string;
  verifyUrl?: string;
}

const featuredCertifications: Certification[] = [
  {
    id: 'frontend-lexicon',
    title: 'Frontend Developer Training Certification',
    issuer: 'Lexicon Stockholm',
    period: '2026',
    description: 'Intensive developer qualification covering modern React, Next.js App Router, TypeScript, semantic HTML5, WCAG accessibility standards, and Tailwind CSS.',
    skills: ['React', 'Next.js', 'TypeScript', 'WCAG (a11y)'],
    gradient: 'from-emerald-600/30 via-teal-600/10 to-slate-950/90',
  },
  {
    id: 'embedded-systems',
    title: 'Embedded Electronics & FPGA Architecture',
    issuer: 'Stockholm University',
    period: '2023',
    description: 'Advanced credential in FPGA platform design, control systems, and low-level Linux kernel modifications for embedded hardware interfaces.',
    skills: ['FPGA', 'Zynq-7000', 'VHDL', 'C Programming'],
    gradient: 'from-blue-600/30 via-indigo-600/10 to-slate-950/90',
  },
];

export default function FeaturedCertifications() {
  return (
    <section 
      aria-labelledby="featured-certifications-heading" 
      className="w-full py-12 sm:py-16 px-4 sm:px-8 lg:px-16 bg-slate-900 mt-4 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <header className="mb-8 text-center md:text-left">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-800 border border-slate-700 text-slate-300 text-xs sm:text-sm font-medium mb-3 backdrop-blur-sm">
            <Award className="w-4 h-4 text-brand-light" aria-hidden="true" />
            <span>Verified Credentials</span>
          </div>
          <h2 
            id="featured-certifications-heading" 
            className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-100 tracking-tight"
          >
            Featured Certifications
          </h2>
        </header>

        {/* 2-Card Single Row Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 w-full mb-8">
          {featuredCertifications.map((cert) => (
            <article
              key={cert.id}
              tabIndex={0}
              aria-label={`${cert.title} issued by ${cert.issuer}`}
              className={`group rounded-2xl bg-slate-950 bg-gradient-to-br ${cert.gradient} border border-slate-800/90 p-5 sm:p-6 flex flex-col justify-between transition-all duration-300 hover:border-slate-600 hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-brand/60 backdrop-blur-md w-full overflow-hidden shadow-xl`}
            >
              <div>
                <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                  <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-full bg-slate-900/90 text-slate-200 border border-slate-800">
                    <Award className="w-3.5 h-3.5 text-brand-light" aria-hidden="true" /> 
                    <span>{cert.issuer}</span>
                  </span>
                  <div className="flex items-center gap-2 text-[11px] font-medium text-slate-400 bg-slate-900/80 px-2.5 py-1 rounded-md border border-slate-800">
                    <Calendar className="w-3 h-3 text-slate-500" aria-hidden="true" />
                    <span>{cert.period}</span>
                  </div>
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-slate-100 group-hover:text-brand-light transition mb-3 leading-snug">
                  {cert.title}
                </h3>

                <p className="text-slate-400 text-xs sm:text-sm leading-relaxed mb-6">
                  {cert.description}
                </p>
              </div>

              <div>
                <div 
                  role="list" 
                  aria-label="Skills certified" 
                  className="flex flex-wrap gap-1.5 mb-5 pt-4 border-t border-slate-800/80"
                >
                  {cert.skills.map((skill) => (
                    <span
                      key={skill}
                      role="listitem"
                      className="text-[11px] sm:text-[12px] px-2.5 py-1 rounded-md bg-slate-900/90 text-slate-300 border border-slate-800/80 whitespace-nowrap"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                <div className="inline-flex items-center gap-1.5 text-xs font-medium text-emerald-400 bg-emerald-500/10 px-3 py-1.5 rounded-lg border border-emerald-500/20">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" aria-hidden="true" /> 
                  <span>Verified Credential</span>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Link to view all certifications */}
        <div className="text-center md:text-left">
          <Link
            href="/Certifications"
            className="inline-flex items-center gap-2 text-sm sm:text-base font-semibold text-white hover:text-brand-light transition group focus:outline-none focus:underline"
          >
            <span>View All Certificates & Credentials</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition shrink-0" />
          </Link>
        </div>

      </div>
    </section>
  );
}