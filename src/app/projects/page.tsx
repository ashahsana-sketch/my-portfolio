'use client';

import { useState } from 'react';
import { ExternalLink, Code, Layers, Sparkles } from 'lucide-react';

interface Project {
  id: string;
  title: string;
  category: 'Next.js' | 'React' | 'html' | 'Full-Stack' | 'UI/UX' | 'Bootstrap' | 'Tailwind CSS' | 'TypeScript' | 'All';
  description: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured?: boolean;
}

const projectsData: Project[] = [
  {
    id: 'omsorghub',
    title: 'OmsorgHub (Elderly Care Dashboard)',
    category: 'Full-Stack',
    description: 'A comprehensive care center management and employee rostering web application featuring caregiver directories, client scheduling, and weekly work-hour compliance tracking.',
    tags: ['Next.js', 'React', 'Prisma', 'Tailwind CSS', 'TypeScript'],
    liveUrl: 'https://omsorg-dashboard-alpha.vercel.app/',
    githubUrl: 'https://github.com/ashahsana-sketch',
    featured: true,
  },
  {
    id: 'ecommerce-customer',
    title: 'Modern E-Commerce Web Shop',
    category: 'Next.js',
    description: 'Collaborative team e-commerce customer-facing platform implementing dynamic category introductions, breadcrumb navigation, search functionality, and Supabase authentication.',
    tags: ['Next.js', 'Supabase', 'TypeScript', 'Tailwind CSS', 'Shadcn UI'],
    liveUrl: 'https://web-shop-group-4.vercel.app/en',
    githubUrl: 'https://github.com/ashahsana-sketch',
    featured: true,
  },
  {
    id: 'ecommerce-admin',
    title: 'E-Commerce Admin Dashboard',
    category: 'Full-Stack',
    description: 'Administrative side of the e-commerce platform designed for product management, inventory oversight, order tracking, and secure database operations.',
    tags: ['Next.js', 'Supabase', 'TypeScript', 'Tailwind CSS'],
    liveUrl: 'https://web-shop-group-4.vercel.app/admin',
    githubUrl: 'https://github.com/ashahsana-sketch',
    featured: false,
  },
  {
    id: 'task-tracker',
    title: 'Task Tracker Web App',
    category: 'UI/UX',
    description: 'An interactive task management application designed to organize workloads, prioritize tasks by level, and track completion progress with clean UI design.',
    tags: ['TypeScript', 'HTML5', 'CSS3', 'Tailwind CSS'],
    liveUrl: 'https://ashahsana-sketch.github.io/task-tracker/',
    githubUrl: 'https://github.com/ashahsana-sketch/task-tracker',
    featured: true,
  },
  {
    id: 'cleaning-company',
    title: 'Professional Cleaning Services Platform',
    category: 'Next.js',
    description: 'A responsive business web application for a modern cleaning service provider, featuring polished layouts, service showcases, and client booking inquiry flows.',
    tags: ['Next.js', 'React', 'Tailwind CSS', 'TypeScript'],
    liveUrl: 'https://cleaning-company-beige.vercel.app/',
    githubUrl: 'https://github.com/ashahsana-sketch',
    featured: false,
  },
  {
    id: 'house-chores',
    title: 'House Chores Organizer',
    category: 'UI/UX',
    description: 'A practical utility web application created to simplify household chore scheduling, task assignment, and daily tracking for families and shared spaces.',
    tags: ['React', 'TypeScript', 'Tailwind CSS'],
    liveUrl: 'https://house-chores-six.vercel.app/',
    githubUrl: 'https://github.com/ashahsana-sketch',
    featured: false,
  },
  {
    id: 'temperature-converter',
    title: 'Temperature Converter Utility',
    category: 'UI/UX',
    description: 'A fast, responsive conversion tool built for seamlessly translating temperature metrics across Celsius, Fahrenheit, and Kelvin with instant calculations.',
    tags: ['TypeScript', 'JavaScript', 'HTML5', 'CSS3'],
    liveUrl: 'https://temprature-convertor-one.vercel.app/',
    githubUrl: 'https://github.com/ashahsana-sketch',
    featured: false,
  },
  {
    id: 'portfolio',
    title: 'Professional Developer Portfolio',
    category: 'UI/UX',
    description: 'Clean, responsive multi-page developer portfolio built with Next.js App Router, custom SVG branding, active route highlighting, and optimized semantic layouts.',
    tags: ['Next.js', 'React', 'Tailwind CSS', 'Figma'],
    githubUrl: 'https://github.com/ashahsana-sketch',
    featured: false,
  },
];

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState<'All' | 'Next.js' | 'Full-Stack' | 'UI/UX'>('All');

  const filteredProjects = activeFilter === 'All' 
    ? projectsData 
    : projectsData.filter(p => p.category === activeFilter);

  return (
    <main className="pt-28 pb-20 px-6 max-w-7xl mx-auto relative overflow-hidden">
      {/* Background soft glow effect matching Hero */}
      <div className="absolute top-1/4 right-10 -translate-y-1/2 w-96 h-96 bg-brand/10 blur-[120px] rounded-full pointer-events-none" />

      {/* Header Section */}
      <div className="mb-12 text-center md:text-left relative z-10">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/80 border border-slate-800 text-slate-300 text-xs font-medium mb-4 backdrop-blur-sm shadow-inner">
          <Sparkles className="w-3.5 h-3.5 text-brand-light" /> Featured Work
        </div>
        <h1 className="text-3xl md:text-5xl font-extrabold text-slate-100 tracking-tight mb-3">
          Projects & Applications
        </h1>
        <p className="text-slate-400 max-w-2xl text-base leading-relaxed">
          Explore modern, component-driven web applications built with performance, scalability, and seamless user experiences in mind.
        </p>
      </div>

      {/* Filter Buttons */}
      <div className="flex flex-wrap items-center gap-3 mb-10 border-b border-slate-800/80 pb-6 relative z-10">
        {(['All', 'Next.js', 'Full-Stack', 'UI/UX'] as const).map((category) => (
          <button
            key={category}
            onClick={() => setActiveFilter(category)}
            className={`px-4 py-2 rounded-xl text-sm font-medium transition ${
              activeFilter === category
                ? 'bg-brand text-white shadow-lg shadow-brand/25'
                : 'bg-slate-900/80 text-slate-400 hover:text-slate-200 border border-slate-800'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Projects Grid matching Hero Card Style */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
        {filteredProjects.map((project) => (
          <div 
            key={project.id}
            className={`group rounded-2xl bg-slate-950/80 border ${
              project.featured ? 'border-brand/40 shadow-xl shadow-brand/10' : 'border-slate-800'
            } p-6 flex flex-col justify-between transition-all duration-300 hover:border-brand/70 hover:-translate-y-1 backdrop-blur-md`}
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full bg-brand/10 text-brand-light border border-brand/30">
                  {project.category}
                </span>
                <div className="flex items-center gap-3 text-slate-400">
                  {project.githubUrl && (
                    <a 
                      href={project.githubUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      aria-label="GitHub Repository"
                      className="hover:text-brand-light transition flex items-center gap-1.5 text-xs font-medium"
                    >
                      <Code className="w-4 h-4" /> Code
                    </a>
                  )}
                </div>
              </div>

              <h3 className="text-xl font-bold text-slate-100 group-hover:text-brand-light transition mb-2">
                {project.title}
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                {project.description}
              </p>
            </div>

            <div>
              {/* Tech Tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag) => (
                  <span key={tag} className="text-xs px-2.5 py-1 rounded-lg bg-slate-900 text-slate-300 border border-slate-800">
                    {tag}
                  </span>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-4 pt-4 border-t border-slate-800/80">
                {project.liveUrl && (
                  <a 
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-brand-light hover:text-white transition"
                  >
                    Live Demo <ExternalLink className="w-4 h-4" />
                  </a>
                )}
                {project.githubUrl && (
                  <a 
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-slate-400 hover:text-slate-200 transition"
                  >
                    Repository <Code className="w-4 h-4" />
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}