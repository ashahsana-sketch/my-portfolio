'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Sparkles, Code, ExternalLink, ArrowRight } from 'lucide-react';

interface Project {
  id: string;
  title: string;
  category: 'Next.js' | 'Full-Stack';
  description: string;
  tags: string[];
  imageSrc: string;
  liveUrl: string;
  githubUrl: string;
  gradient: string;
}

const featuredProjects: Project[] = [
  {
    id: 'ecommerce-admin',
    title: 'E-Commerce Admin Dashboard',
    category: 'Full-Stack',
    description: 'Administrative platform for team e-commerce operations, featuring product catalog management, inventory tracking, secure order oversight, and database integration.',
    tags: ['Next.js', 'Supabase', 'TypeScript', 'Tailwind CSS', 'Shadcn UI'],
    imageSrc: '/web-admin.png',
    liveUrl: 'https://web-shop-group-4.vercel.app/admin',
    githubUrl: 'https://github.com/ashahsana-sketch',
    gradient: 'from-cyan-600/30 via-blue-600/10 to-slate-950/90',
  },
  {
    id: 'elderly-care-dashboard',
    title: 'Elderly Care Dashboard',
    category: 'Full-Stack',
    description: 'A comprehensive care center management and employee rostering web application featuring caregiver directories, client scheduling, and weekly work-hour compliance tracking.',
    tags: ['Next.js', 'React', 'Prisma', 'Tailwind CSS', 'TypeScript'],
    imageSrc: '/elderly_care_dashboard.png',
    liveUrl: 'https://omsorg-dashboard-alpha.vercel.app/',
    githubUrl: 'https://github.com/ashahsana-sketch',
    gradient: 'from-blue-600/30 via-indigo-600/10 to-slate-950/90',
  },
];

export default function FeaturedProjects() {
  return (
    <section 
      aria-labelledby="featured-projects-heading" 
      className="w-full py-12 sm:py-16 px-4 sm:px-8 lg:px-16 bg-slate-900 relative overflow-hidden"
    >
      <div className=" max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <header className="mb-8 text-center md:text-left">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-800 border border-slate-700 text-slate-300 text-xs sm:text-sm font-medium mb-3 backdrop-blur-sm">
            <Sparkles className="w-4 h-4 text-brand-light" aria-hidden="true" />
            <span>Featured Works</span>
          </div>
          <h2 
            id="featured-projects-heading" 
            className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-100 tracking-tight"
          >
            Featured Applications
          </h2>
        </header>

        {/* 2-Card Single Row Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 w-full mb-8">
          {featuredProjects.map((project) => (
            <article 
              key={project.id}
              tabIndex={0}
              aria-label={`${project.title} - ${project.category} project`}
              className={`group rounded-2xl bg-slate-950 bg-gradient-to-br ${project.gradient} border border-slate-800/90 p-4 sm:p-5 flex flex-col justify-between transition-all duration-300 hover:border-slate-600 hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-brand/60 backdrop-blur-md w-full overflow-hidden shadow-xl`}
            >
              <div>
                {/* Taller Image Preview Container */}
                <div className="relative w-full h-64 sm:h-72 overflow-hidden rounded-xl mb-5 border border-slate-800/80 bg-slate-900/90">
                  <Image
                    src={project.imageSrc}
                    alt={`${project.title} Preview`}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                <div className="flex items-center justify-between mb-3 px-1">
                  <span className="text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full bg-slate-900/90 text-brand-light border border-brand/30">
                    {project.category}
                  </span>
                  <a 
                    href={project.githubUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    aria-label={`GitHub repository for ${project.title}`}
                    className="hover:text-brand-light transition flex items-center gap-1.5 text-xs font-medium text-slate-400 focus:outline-none focus:underline"
                  >
                    <Code className="w-4 h-4" aria-hidden="true" /> Code
                  </a>
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-slate-100 group-hover:text-brand-light transition mb-2 leading-snug px-1">
                  {project.title}
                </h3>

                <p className="text-slate-400 text-xs sm:text-sm leading-relaxed mb-6 px-1">
                  {project.description}
                </p>
              </div>

              <div className="px-1">
                <div 
                  role="list" 
                  aria-label="Technologies used"
                  className="flex flex-wrap gap-1.5 mb-5 pt-4 border-t border-slate-800/80"
                >
                  {project.tags.map((tag) => (
                    <span 
                      key={tag} 
                      role="listitem"
                      className="text-[11px] sm:text-[12px] px-2.5 py-1 rounded-md bg-slate-900/90 text-slate-300 border border-slate-800/80 whitespace-nowrap"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-4 pt-2">
                  <a 
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-brand-light hover:text-white transition focus:outline-none focus:underline"
                  >
                    <span>Live Demo</span>
                    <ExternalLink className="w-4 h-4 shrink-0" aria-hidden="true" />
                  </a>
                  <a 
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-400 hover:text-slate-200 transition focus:outline-none focus:underline"
                  >
                    <span>Repository</span>
                    <Code className="w-4 h-4 shrink-0" aria-hidden="true" />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Link to view all projects */}
        <div className="text-center md:text-left">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-sm sm:text-base font-semibold text-white hover:text-brand-light transition group focus:outline-none focus:underline"
          >
            <span>View All Projects & Applications</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition shrink-0" />
          </Link>
        </div>

      </div>
    </section>
  );
}