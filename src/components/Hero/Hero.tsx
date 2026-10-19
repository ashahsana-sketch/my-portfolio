'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Code, Globe, Mail, ExternalLink, Layers, ArrowRight } from 'lucide-react';

const featuredProjects = [
  {
    id: 'ecommerce',
    title: 'E-Commerce Platform',
    subtitle: 'Modern Web Shop with Supabase Auth',
    tags: ['Next.js', 'Supabase', 'Shadcn UI', 'Cookies', 'TypeScript', 'Stripe'],
    liveUrl: 'https://web-shop-group-4.vercel.app/en',
    gradient: 'from-emerald-600/30 via-teal-600/10 to-slate-950/90',
  },
  {
    id: 'elderlycare-dashboard',
    title: 'ElderlyCare Dashboard',
    subtitle: 'Elderly Care & Staff Rostering',
    tags: ['Next.js', 'Prisma', 'Tailwind', 'TypeScript'],
    liveUrl: 'https://omsorg-dashboard-alpha.vercel.app/',
    gradient: 'from-blue-600/30 via-indigo-600/10 to-slate-950/90',
  },
  {
    id: 'task-tracker',
    title: 'Task Tracker',
    subtitle: 'Pure TypeScript & DOM Logic',
    tags: ['TypeScript', 'HTML5', 'CSS3'],
    liveUrl: 'https://ashahsana-sketch.github.io/task-tracker/',
    gradient: 'from-purple-600/30 via-pink-600/10 to-slate-950/90',
  },
];

export default function Hero() {
  const [activeTab, setActiveTab] = useState(0);
  const currentProject = featuredProjects[activeTab];

  return (
    <section className="pt-24 pb-12 sm:pt-28 sm:pb-16 md:pt-36 md:pb-24 bg-slate-900 text-slate-100 px-4 sm:px-6 relative overflow-hidden">
      {/* Background soft glow effect */}
      <div className="absolute top-1/2 left-1/2 lg:left-1/4 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] bg-brand/10 blur-[100px] sm:blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-12 items-center relative z-10">
        
        {/* LEFT COLUMN: Profile, Intro & CTAs */}
        <div className="lg:col-span-7 flex flex-col items-start text-left space-y-4 sm:space-y-6">
          
          {/* Header Row with Photo & Welcome Badge */}
          <div className="flex flex-wrap sm:flex-nowrap items-center gap-3 sm:gap-4">
            <div className="relative w-32 h-32 sm:w-20 sm:h-20 rounded-full overflow-hidden border-2 border-brand/50 shadow-lg shadow-brand/20 shrink-0">
             <Image 
  src="/sana-photo.jpeg" 
  alt="Sana" 
  fill 
  priority 
  sizes="(max-width: 640px) 128px, 80px"
  className="object-cover object-top" 
/>
            </div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-800 border border-brand/30 text-slate-200 text-xs sm:text-sm font-semibold">
              Welcome to my portfolio
            </div>
          </div>

          {/* Main Headline */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.15]">
            Hi, I&apos;m <span className="text-brand-light">Sana</span>
          </h1>

          {/* Subtitle */}
          <p className="text-slate-300 text-sm sm:text-base lg:text-lg max-w-xl leading-relaxed">
            I’m a Front-End Developer crafting responsive, scalable web applications with React, Next.js, and TypeScript. With a background in applied physics, embedded systems, and hardware engineering, I bring analytical thinking and problem-solving skills to building intuitive, accessible user experiences. Currently gaining hands-on industry experience at Desquare AB, I’m passionate about turning complex challenges into elegant digital solutions.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-3 sm:gap-4 items-center pt-1 sm:pt-2 w-full sm:w-auto">
            <Link
              href="/projects"
              className="w-full sm:w-auto px-5 sm:px-6 py-3 rounded-xl bg-brand hover:bg-brand-hover text-white font-medium text-sm transition shadow-lg shadow-brand/25 flex items-center justify-center gap-2"
            >
              View All Projects <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/contact"
              className="w-full sm:w-auto px-5 sm:px-6 py-3 rounded-xl border border-slate-700 hover:border-slate-500 text-slate-200 font-medium text-sm transition bg-slate-900/50 hover:bg-slate-800 text-center"
            >
              Get in Touch
            </Link>
          </div>

          {/* Social Links Icons */}
          <div className="flex items-center gap-3 pt-1 sm:pt-2 text-slate-400">
            <a 
              href="https://github.com/ashahsana-sketch" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="p-2.5 rounded-full bg-slate-900/80 border border-slate-800 hover:text-brand-light hover:border-brand/50 transition"
            >
              <Code className="w-5 h-5" />
            </a>
            <a 
              href="https://www.linkedin.com/in/ashahsana/" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="p-2.5 rounded-full bg-slate-900/80 border border-slate-800 hover:text-brand-light hover:border-brand/50 transition"
            >
              <Globe className="w-5 h-5" />
            </a>
            <a 
              href="mailto:ashahsana@gmail.com" 
              aria-label="Email Contact"
              className="p-2.5 rounded-full bg-slate-900/80 border border-slate-800 hover:text-brand-light hover:border-brand/50 transition"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* RIGHT COLUMN: Featured Project Interactive Card */}
        <div className="lg:col-span-5 w-full mt-4 lg:mt-0">
          <div className="rounded-2xl bg-slate-950/70 border border-slate-700 p-4 sm:p-6 shadow-2xl relative overflow-hidden backdrop-blur-md">
            
            {/* Top Badge */}
            <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-700">
              <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-gray-100 uppercase tracking-wider">
                <Layers className="w-3.5 h-3.5" /> Featured Highlights
              </span>
            </div>

            {/* Quick Switcher Tabs */}
            <div className="flex sm:flex-col lg:flex-row gap-2 mb-4 sm:mb-6 overflow-x-auto pb-2 scrollbar-none -mx-1 px-1">
              {featuredProjects.map((p, idx) => (
                <button
                  key={p.id}
                  onClick={() => setActiveTab(idx)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium transition whitespace-nowrap shrink-0 ${
                    activeTab === idx
                      ? 'bg-brand/20 text-gray-200 border border-brand/40'
                      : 'bg-slate-900 text-slate-400 hover:text-slate-200 border border-slate-800'
                  }`}
                >
                  {p.title}
                </button>
              ))}
            </div>

            {/* Featured Card Display with Distinct Gradient Effect */}
            <div className={`rounded-xl p-4 sm:p-5 border border-slate-800 bg-slate-950 bg-gradient-to-br ${currentProject.gradient} transition-all duration-300 w-full overflow-hidden shadow-xl`}>
              <h3 className="text-lg sm:text-xl font-bold text-slate-100 mb-1 leading-snug">{currentProject.title}</h3>
              <p className="text-slate-400 text-xs sm:text-sm mb-4 leading-normal">{currentProject.subtitle}</p>

              {/* Tag Chips */}
              <div className="flex flex-wrap gap-1.5 mb-5 sm:mb-6 max-w-full">
                {currentProject.tags.map((tag) => (
                  <span key={tag} className="text-[11px] sm:text-[12px] px-2 py-0.5 rounded bg-slate-900/90 text-slate-300 border border-slate-800 whitespace-nowrap">
                    {tag}
                  </span>
                ))}
              </div>

              {/* Direct Live Link */}
              <a
                href={currentProject.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-between w-full px-3.5 sm:px-4 py-2.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-xs sm:text-sm font-semibold text-gray-300 border border-slate-700/60 transition group"
              >
                <span>Launch Live Application</span>
                <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition shrink-0" />
              </a>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}