'use client';

import { useState } from 'react';
import Image from 'next/image';
import { ExternalLink, Code, Sparkles } from 'lucide-react';

interface Project {
  id: string;
  title: string;
  category: 'Next.js' | 'React' | 'Full-Stack' | 'UI/UX' | 'All';
  description: string;
  tags: string[];
  imageSrc?: string;
  liveUrl?: string;
  githubUrl?: string;
  featured?: boolean;
  gradient: string;
}

const projectsData: Project[] = [
  {
    id: 'elderly-care-dashboard',
    title: 'Elderly Care Dashboard',
    category: 'Full-Stack',
    description: 'A comprehensive care center management and employee rostering web application featuring caregiver directories, client scheduling, and weekly work-hour compliance tracking.',
    tags: ['Next.js', 'React', 'Prisma', 'Tailwind CSS', 'TypeScript'],
    imageSrc: '/elderly_care_dashboard.png',
    liveUrl: 'https://omsorg-dashboard-alpha.vercel.app/',
    githubUrl: 'https://github.com/ashahsana-sketch',
    featured: true,
    gradient: 'from-blue-600/30 via-indigo-600/10 to-slate-950/90',
  },
  {
    id: 'ecommerce-customer',
    title: 'Modern E-Commerce Web Shop',
    category: 'Next.js',
    description: 'Collaborative team e-commerce customer-facing platform implementing dynamic category introductions, breadcrumb navigation, search functionality, and Supabase authentication.',
    tags: ['Next.js', 'Supabase', 'TypeScript', 'Tailwind CSS', 'Shadcn UI'],
    imageSrc: '/E-commerce.png',
    liveUrl: 'https://web-shop-group-4.vercel.app/en',
    githubUrl: 'https://github.com/ashahsana-sketch',
    featured: true,
    gradient: 'from-emerald-600/30 via-teal-600/10 to-slate-950/90',
  },
  {
    id: 'ecommerce-admin',
    title: 'E-Commerce Admin Dashboard',
    category: 'Full-Stack',
    description: 'Administrative side of the e-commerce platform designed for product management, inventory oversight, order tracking, and secure database operations.',
    tags: ['Next.js', 'Supabase', 'TypeScript', 'Tailwind CSS'],
    imageSrc: '/E-commerce.png',
    liveUrl: 'https://web-shop-group-4.vercel.app/admin',
    githubUrl: 'https://github.com/ashahsana-sketch',
    featured: false,
    gradient: 'from-cyan-600/30 via-blue-600/10 to-slate-950/90',
  },
  {
    id: 'task-tracker',
    title: 'Task Tracker Web App',
    category: 'UI/UX',
    description: 'An interactive task management application designed to organize workloads, prioritize tasks by level, and track completion progress with clean UI design.',
    tags: ['TypeScript', 'HTML5', 'CSS3', 'Tailwind CSS'],
    imageSrc: '/task_tracker.png',
    liveUrl: 'https://ashahsana-sketch.github.io/task-tracker/',
    githubUrl: 'https://github.com/ashahsana-sketch/task-tracker',
    featured: true,
    gradient: 'from-purple-600/30 via-pink-600/10 to-slate-950/90',
  },
  {
    id: 'cleaning-company',
    title: 'Professional Cleaning Services Platform',
    category: 'Next.js',
    description: 'A responsive business web application for a modern cleaning service provider, featuring polished layouts, service showcases, and client booking inquiry flows.',
    tags: ['Next.js', 'React', 'Tailwind CSS', 'TypeScript'],
    imageSrc: '/cleaning_company.png',
    liveUrl: 'https://cleaning-company-beige.vercel.app/',
    githubUrl: 'https://github.com/ashahsana-sketch',
    featured: false,
    gradient: 'from-teal-600/30 via-cyan-600/10 to-slate-950/90',
  },
  {
    id: 'house-chores',
    title: 'House Chores Organizer',
    category: 'UI/UX',
    description: 'A practical utility web application created to simplify household chore scheduling, task assignment, and daily tracking for families and shared spaces.',
    tags: ['React', 'TypeScript', 'Tailwind CSS'],
    imageSrc: '/House-chores.png',
    liveUrl: 'https://house-chores-six.vercel.app/',
    githubUrl: 'https://github.com/ashahsana-sketch',
    featured: false,
    gradient: 'from-rose-600/30 via-amber-600/10 to-slate-950/90',
  },
  {
    id: 'temperature-converter',
    title: 'Temperature Converter Utility',
    category: 'UI/UX',
    description: 'A fast, responsive conversion tool built for seamlessly translating temperature metrics across Celsius, Fahrenheit, and Kelvin with instant calculations.',
    tags: ['TypeScript', 'JavaScript', 'HTML5', 'CSS3'],
    imageSrc: '/Temprature_convertor.png',
    liveUrl: 'https://temprature-convertor-one.vercel.app/',
    githubUrl: 'https://github.com/ashahsana-sketch',
    featured: false,
    gradient: 'from-amber-500/30 via-orange-600/10 to-slate-950/90',
  },

];

const categories = ['All', 'Next.js', 'Full-Stack', 'UI/UX'] as const;

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState<'All' | 'Next.js' | 'Full-Stack' | 'UI/UX'>('All');

  const filteredProjects = activeFilter === 'All' 
    ? projectsData 
    : projectsData.filter(p => p.category === activeFilter);

  return (
    <main 
      aria-labelledby="projects-heading" 
      className="w-full min-h-screen py-16 sm:py-24 bg-slate-900 relative overflow-hidden"
    >
      {/* Background soft glow effect */}
      <div 
        aria-hidden="true" 
        className="absolute top-1/4 right-10 -translate-y-1/2 w-[350px] sm:w-[600px] lg:w-[800px] h-[350px] sm:h-[600px] lg:h-[800px] bg-brand/10 blur-[100px] sm:blur-[160px] rounded-full pointer-events-none" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">

        {/* Header Section */}
        <header className="mb-10 mt-20 sm:mb-14 text-center md:text-left">
          {/* <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-800 border border-slate-700 text-slate-300 text-xs sm:text-sm font-medium mb-4 backdrop-blur-sm shadow-inner">
            <Sparkles className="w-4 h-4 text-brand-light" aria-hidden="true" />
            <span>Featured Work</span>
          </div> */}
          <h1 
            id="projects-heading" 
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-100 tracking-tight mb-3"
          >
            Projects & Applications
          </h1>
          <p className="text-slate-300 max-w-3xl text-sm sm:text-base leading-relaxed">
            Explore modern, component-driven web applications built with performance, scalability, and seamless user experiences in mind.
          </p>
        </header>

        {/* Filter Category Tabs */}
        <div 
          role="region" 
          aria-label="Filter projects by category" 
          className="flex flex-wrap items-center gap-2 sm:gap-3 mb-8 sm:mb-12 border-b border-slate-800/80 pb-5 overflow-x-auto focus:outline-none"
        >
          {categories.map((category) => {
            const isSelected = activeFilter === category;
            return (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                aria-pressed={isSelected}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-brand/50 ${
                  isSelected
                    ? 'bg-brand text-white shadow-lg shadow-brand/25 ring-2 ring-brand/40'
                    : 'bg-slate-900/80 text-slate-400 hover:text-slate-200 border border-slate-800'
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>

        {/* Projects Cards Grid */}
        <div 
          role="feed" 
          aria-busy="false"
          className="grid grid-cols-1 md:grid-cols-2  gap-6 sm:gap-8 w-full"
        >
          {filteredProjects.map((project) => (
            <article 
              key={project.id}
              tabIndex={0}
              aria-label={`${project.title} - ${project.category} project`}
              className={`group rounded-2xl bg-slate-950 bg-gradient-to-br ${project.gradient} border ${
                project.featured ? 'border-brand/40 shadow-xl shadow-brand/10' : 'border-slate-800/90'
              } p-4 sm:p-5 flex flex-col justify-between transition-all duration-300 hover:border-slate-600 hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-brand/60 backdrop-blur-md w-full overflow-hidden shadow-xl`}
            >
              <div>
                {/* Wide image preview aligned with the card content */}
                {project.imageSrc && (
                  <div className="relative w-full aspect-[2/1] overflow-hidden rounded-xl mb-5 border border-slate-800/80 bg-slate-900/90">
                    <Image
                      src={project.imageSrc}
                      alt={`${project.title} Preview`}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                      className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                )}

                {/* Category & Code Badge Row */}
                <div className="flex items-center justify-between mb-3 px-1">
                  <span className="text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full bg-slate-900/90 text-brand-light border border-brand/30">
                    {project.category}
                  </span>
                  <div className="flex items-center gap-3 text-slate-400">
                    {project.githubUrl && (
                      <a 
                        href={project.githubUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        aria-label={`GitHub repository for ${project.title}`}
                        className="hover:text-brand-light transition flex items-center gap-1.5 text-xs font-medium focus:outline-none focus:underline"
                      >
                        <Code className="w-4 h-4" aria-hidden="true" /> Code
                      </a>
                    )}
                  </div>
                </div>

                {/* Project Title */}
                <h2 className="text-lg sm:text-xl font-bold text-slate-100 group-hover:text-brand-light transition mb-2 leading-snug px-1">
                  {project.title}
                </h2>

                {/* Description */}
                <p className="text-slate-400 text-xs sm:text-sm leading-relaxed mb-6 px-1">
                  {project.description}
                </p>
              </div>

              <div className="px-1">
                {/* Tech Tag Chips */}
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

                {/* Action Links */}
                <div className="flex items-center gap-4 pt-2">
                  {project.liveUrl && (
                    <a 
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-brand-light hover:text-white transition focus:outline-none focus:underline"
                    >
                      <span>Live Demo</span>
                      <ExternalLink className="w-4 h-4 shrink-0" aria-hidden="true" />
                    </a>
                  )}
                  {project.githubUrl && (
                    <a 
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-400 hover:text-slate-200 transition focus:outline-none focus:underline"
                    >
                      <span>Repository</span>
                      <Code className="w-4 h-4 shrink-0" aria-hidden="true" />
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>

      </div>
    </main>
  );
}