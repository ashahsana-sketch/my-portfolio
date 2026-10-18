'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Code, Globe, Mail, ExternalLink, Sparkles, Layers, ArrowRight } from 'lucide-react';

const featuredProjects = [
  {
    id: 'omsorghub',
    title: 'OmsorgHub',
    subtitle: 'Elderly Care & Staff Rostering',
    tags: ['Next.js', 'Prisma', 'Tailwind'],
    liveUrl: 'https://omsorg-dashboard-alpha.vercel.app/',
    gradient: 'from-blue-600/20 to-indigo-600/20',
  },
  {
    id: 'ecommerce',
    title: 'E-Commerce Platform',
    subtitle: 'Modern Web Shop with Supabase Auth',
    tags: ['Next.js', 'Supabase', 'Shadcn UI'],
    liveUrl: 'https://web-shop-group-4.vercel.app/en',
    gradient: 'from-emerald-600/20 to-teal-600/20',
  },
  {
    id: 'task-tracker',
    title: 'Task Tracker App',
    subtitle: 'Pure TypeScript & DOM Logic',
    tags: ['TypeScript', 'HTML5', 'CSS3'],
    liveUrl: 'https://ashahsana-sketch.github.io/task-tracker/',
    gradient: 'from-purple-600/20 to-pink-600/20',
  },
];

export default function Hero() {
  const [activeTab, setActiveTab] = useState(0);
  const currentProject = featuredProjects[activeTab];

  return (
    <section className="pt-28 pb-16 md:pt-36 md:pb-24 bg-slate-900 text-slate-100 px-6 relative overflow-hidden">
      {/* Background soft glow effect */}
      <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand/10 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        
        {/* LEFT COLUMN: Profile, Intro & CTAs */}
        <div className="lg:col-span-7 flex flex-col items-start text-left space-y-6">
          
          {/* Header Row with Photo & Welcome Badge */}
          <div className="flex items-center gap-4">
            <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-brand/50 shadow-lg shadow-brand/20 shrink-0">
              <Image
                src="/sana-photo.jpeg"
                alt="Sana"
                fill
                priority
                className="object-cover object-top"
              />
            </div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand/10 border border-brand/30 text-brand-light text-xs font-semibold">
              <Sparkles className="w-3.5 h-3.5" /> Welcome to my portfolio
            </div>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1]">
            Hi, I&apos;m <span className="text-brand-light">Sana</span>
          </h1>

          {/* Subtitle */}
          <p className="text-slate-300 text-base sm:text-lg max-w-xl leading-relaxed">
            Front-End Developer crafting responsive, component-driven applications with React, Next.js, and TypeScript—backed by a background in hardware engineering and applied physics.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4 items-center pt-2">
            <Link
              href="/projects"
              className="px-6 py-3 rounded-xl bg-brand hover:bg-brand-hover text-white font-medium text-sm transition shadow-lg shadow-brand/25 flex items-center gap-2"
            >
              View All Projects <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/contact"
              className="px-6 py-3 rounded-xl border border-slate-700 hover:border-slate-500 text-slate-200 font-medium text-sm transition bg-slate-900/50 hover:bg-slate-800"
            >
              Get in Touch
            </Link>
          </div>

          {/* Social Links Icons */}
          <div className="flex items-center gap-3 pt-2 text-slate-400">
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
        <div className="lg:col-span-5 w-full">
          <div className="rounded-2xl bg-slate-950/80 border border-slate-800 p-6 shadow-2xl relative overflow-hidden backdrop-blur-md">
            
            {/* Top Badge */}
            <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-800">
              <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-brand-light uppercase tracking-wider">
                <Layers className="w-3.5 h-3.5" /> Featured Highlights
              </span>
              <span className="text-xs text-slate-500">Live Preview</span>
            </div>

            {/* Quick Switcher Tabs */}
            <div className="flex gap-2 mb-6 overflow-x-auto pb-1">
              {featuredProjects.map((p, idx) => (
                <button
                  key={p.id}
                  onClick={() => setActiveTab(idx)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium transition whitespace-nowrap ${
                    activeTab === idx
                      ? 'bg-brand/20 text-brand-light border border-brand/40'
                      : 'bg-slate-900 text-slate-400 hover:text-slate-200 border border-slate-800'
                  }`}
                >
                  {p.title}
                </button>
              ))}
            </div>

            {/* Featured Card Display */}
            <div className={`rounded-xl p-5 border border-slate-800 bg-gradient-to-br ${currentProject.gradient} transition-all duration-300`}>
              <h3 className="text-xl font-bold text-slate-100 mb-1">{currentProject.title}</h3>
              <p className="text-slate-400 text-xs mb-4">{currentProject.subtitle}</p>

              {/* Tag Chips */}
              <div className="flex flex-wrap gap-1.5 mb-6">
                {currentProject.tags.map((tag) => (
                  <span key={tag} className="text-[11px] px-2 py-0.5 rounded bg-slate-900/80 text-slate-300 border border-slate-800">
                    {tag}
                  </span>
                ))}
              </div>

              {/* Direct Live Link */}
              <a
                href={currentProject.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-between w-full px-4 py-2.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-xs font-semibold text-brand-light border border-slate-700/60 transition group"
              >
                <span>Launch Live Application</span>
                <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition" />
              </a>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}