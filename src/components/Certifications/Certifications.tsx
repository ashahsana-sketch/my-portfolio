'use client';

import { useState } from 'react';
import { Award, BookOpen, CheckCircle2 } from 'lucide-react';

interface Certification {
  id: string;
  title: string;
  issuer: string;
  issuedDate: string;
  category: 'Next.js & React' | 'CSS & UI Frameworks' | 'HTML & Core Web' | 'UI/UX Design' | 'IT & Systems' | 'All';
  description: string;
  skills: string[];
  gradient: string;
}

const certificationsData: Certification[] = [
  {
    id: 'nextjs-14',
    title: 'Next.js 14: Foundations',
    issuer: 'Pluralsight',
    issuedDate: 'Jul 2026',
    category: 'Next.js & React',
    description: 'Completed foundational training in Next.js 14, learning modern web development concepts including the App Router, file-based routing, layouts, Server and Client Components, data fetching, API routes, and building fast, scalable, and SEO-friendly React applications.',
    skills: ['Next.js 14', 'App Router', 'Server Components', 'SEO', 'React.js'],
    // Ocean Blue Glow
    gradient: 'from-blue-600/30 via-indigo-600/10 to-slate-950/90',
  },
  {
    id: 'nextjs-12',
    title: 'Next.js 12: The Big Picture',
    issuer: 'Pluralsight',
    issuedDate: '2026',
    category: 'Next.js & React',
    description: 'Completed training on the fundamentals of Next.js, including routing, page rendering, data fetching, API routes, and performance optimization. Gained an understanding of how Next.js extends React to build fast, scalable web applications.',
    skills: ['Next.js', 'Page Rendering', 'Data Fetching', 'API Routes'],
    // Electric Cyan Glow
    gradient: 'from-cyan-500/30 via-blue-600/10 to-slate-950/90',
  },
  {
    id: 'tailwind-css',
    title: 'Tailwind CSS Foundations',
    issuer: 'Pluralsight',
    issuedDate: '2026',
    category: 'CSS & UI Frameworks',
    description: 'Completed training on Tailwind CSS fundamentals, including utility-first styling, responsive design, layout creation, typography, spacing, colors, and building modern user interfaces efficiently.',
    skills: ['Tailwind CSS', 'Responsive Design', 'Utility-First Styling', 'UI Architecture'],
    // Mint Emerald Glow
    gradient: 'from-emerald-500/30 via-teal-600/10 to-slate-950/90',
  },
  {
    id: 'css-layouts',
    title: 'Creating Page Layouts with CSS',
    issuer: 'Pluralsight',
    issuedDate: '2026',
    category: 'CSS & UI Frameworks',
    description: 'Completed training focused on building modern, responsive web layouts using CSS. Learned how to structure web pages with Flexbox and CSS Grid, manage spacing and positioning, create responsive designs, and apply CSS best practices.',
    skills: ['CSS Grid', 'Flexbox', 'Responsive Layouts', 'CSS3'],
    // Teal-Sky Glow
    gradient: 'from-teal-500/30 via-sky-600/10 to-slate-950/90',
  },
  {
    id: 'bootstrap-responsive',
    title: 'Bootstrap: Build Interactive & Responsive Web Apps',
    issuer: 'Pluralsight',
    issuedDate: '2026',
    category: 'CSS & UI Frameworks',
    description: 'Completed training on building responsive and interactive web interfaces using Bootstrap. Learned how to use Bootstrap grid system, components, utilities, and responsive design techniques.',
    skills: ['Bootstrap', 'Grid System', 'UI Components', 'Responsive Web'],
    // Deep Indigo-Purple Glow
    gradient: 'from-indigo-600/30 via-purple-600/10 to-slate-950/90',
  },
  {
    id: 'accessible-web-design',
    title: 'Foundations of Accessible Web Design',
    issuer: 'Pluralsight',
    issuedDate: '2026',
    category: 'HTML & Core Web',
    description: 'Learned accessibility best practices, semantic HTML, inclusive design principles, and techniques for building user-friendly and accessible web applications.',
    skills: ['Web Accessibility (a11y)', 'Semantic HTML', 'Inclusive Design', 'ARIA'],
    // Velvet Purple Glow
    gradient: 'from-purple-600/30 via-pink-600/10 to-slate-950/90',
  },
  {
    id: 'html-css-js-big-picture',
    title: 'HTML, CSS, and JavaScript: The Big Picture',
    issuer: 'Pluralsight',
    issuedDate: '2026',
    category: 'HTML & Core Web',
    description: 'Gained a strong understanding of core frontend technologies, including HTML structure, CSS styling, JavaScript functionality, and the fundamentals of building interactive web experiences.',
    skills: ['HTML5', 'CSS3', 'JavaScript', 'Core Web Tech'],
    // Hot Pink Glow
    gradient: 'from-pink-600/30 via-rose-600/10 to-slate-950/90',
  },
  {
    id: 'web-dev-html-css',
    title: 'Web Development with HTML & CSS: The Big Picture',
    issuer: 'Pluralsight',
    issuedDate: '2026',
    category: 'HTML & Core Web',
    description: 'Completed foundational training in web development using HTML and CSS. Learned how websites are structured, how HTML defines content semantics, and how CSS creates responsive layouts.',
    skills: ['HTML Architecture', 'CSS Styling', 'Semantic Tags', 'Web Structure'],
    // Coral Rose Glow
    gradient: 'from-rose-600/30 via-orange-600/10 to-slate-950/90',
  },
  {
    id: 'html5-css3-interactive',
    title: 'HTML5 & CSS3: Tag, Attribute & Selector Additions',
    issuer: 'Pluralsight',
    issuedDate: '2026',
    category: 'HTML & Core Web',
    description: 'Developed knowledge of modern HTML5 tags, attributes, and CSS3 selectors to build structured, accessible, and maintainable user interfaces.',
    skills: ['HTML5 Tags', 'CSS3 Selectors', 'Modern Attributes', 'UI Structure'],
    // Warm Amber Glow
    gradient: 'from-amber-500/30 via-yellow-600/10 to-slate-950/90',
  },
  {
    id: 'figma-product-design',
    title: 'Product Design with Figma',
    issuer: 'Pluralsight',
    issuedDate: '2026',
    category: 'UI/UX Design',
    description: 'Gained practical knowledge of UI/UX design workflows, interactive prototypes, layout systems, and translating design concepts directly into frontend web applications.',
    skills: ['Figma', 'Product Design', 'UI/UX Prototyping', 'Design Systems'],
    // Violet Neon Glow
    gradient: 'from-violet-600/30 via-fuchsia-600/10 to-slate-950/90',
  },
  {
    id: 'figma-getting-started',
    title: 'Figma: Getting Started',
    issuer: 'Pluralsight',
    issuedDate: '2026',
    category: 'UI/UX Design',
    description: 'Learned the essential basics of Figma, including UI design workflows, component creation, auto-layout, and prototyping for web and app interfaces.',
    skills: ['Figma Fundamentals', 'Component Design', 'Web Layouts', 'Wireframing'],
    // Magenta Pink Glow
    gradient: 'from-fuchsia-600/30 via-pink-600/10 to-slate-950/90',
  },
  {
    id: 'cisco-it-essentials',
    title: 'IT Essentials Course',
    issuer: 'Cisco Networking Academy',
    issuedDate: 'Dec 2025',
    category: 'IT & Systems',
    description: 'Comprehensive training in hardware engineering, operating system installation, system troubleshooting, networking fundamentals, and computer architecture.',
    skills: ['Computer Hardware', 'Systems IT', 'Networking Fundamentals', 'Troubleshooting'],
    // Bright Sky Blue Glow
    gradient: 'from-sky-500/30 via-indigo-600/10 to-slate-950/90',
  },
  {
    id: 'cisco-os-basics',
    title: 'Operating System Basic Course',
    issuer: 'Cisco Networking Academy',
    issuedDate: 'Jan 2026',
    category: 'IT & Systems',
    description: 'Foundational training covering core operating system principles, process management, memory allocation, system security, and command-line interfaces.',
    skills: ['Operating Systems', 'CLI & Shell', 'System Architecture', 'Process Management'],
    gradient: 'from-blue-700/30 via-cyan-600/10 to-slate-950/90',
  },
  {
    id: 'ibm-web-dev',
    title: 'Web Development Basics',
    issuer: 'IBM',
    issuedDate: 'Nov 2025',
    category: 'HTML & Core Web',
    description: 'Completed IBM foundational training covering basic client-server architecture, core web development protocols, front-end technologies, and web application design.',
    skills: ['IBM Web Basics', 'Client-Server Architecture', 'HTTP/Web Fundamentals'],
    // Royal Sapphire Glow
    gradient: 'from-blue-600/30 via-teal-600/10 to-slate-950/90',
  },
];

const categories = ['All', 'Next.js & React', 'CSS & UI Frameworks', 'HTML & Core Web', 'UI/UX Design', 'IT & Systems'] as const;

export default function CertificationsSection() {
  const [activeFilter, setActiveFilter] = useState<Certification['category']>('All');

  const filteredCerts = activeFilter === 'All'
    ? certificationsData
    : certificationsData.filter((cert) => cert.category === activeFilter);

  return (
    <section 
      aria-labelledby="certifications-heading" 
      className="w-full min-h-screen py-16 sm:py-24 px-4 sm:px-8 lg:px-16 bg-slate-900 relative overflow-hidden"
    >
      {/* Soft background glow */}
      <div 
        aria-hidden="true" 
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[600px] lg:w-[800px] h-[350px] sm:h-[600px] lg:h-[800px] bg-brand/10 blur-[100px] sm:blur-[160px] rounded-full pointer-events-none" 
      />

      <div className="w-full max-w-[1600px] mx-auto relative z-10">
        
        {/* Header */}
        <header className="mb-10 sm:mb-14 text-center md:text-left">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-800 border border-slate-700 text-slate-300 text-xs sm:text-sm font-medium mb-4 backdrop-blur-sm shadow-inner">
            <Award className="w-3.5 h-3.5 text-brand-light" aria-hidden="true" /> 
            <span>Professional Learning & Credentials</span>
          </div>
          <h2 
            id="certifications-heading" 
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-100 tracking-tight mb-3"
          >
            Certifications & Courses
          </h2>
          <p className="text-slate-300 max-w-3xl text-sm sm:text-base leading-relaxed">
            A continuous learning record across modern web frameworks, UI engineering, accessibility standards, and IT system fundamentals.
          </p>
        </header>

        {/* Filter Navigation */}
        <div 
          role="region" 
          aria-label="Filter certifications by category" 
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

        {/* Dynamic Card Grid */}
        <div 
          role="feed" 
          aria-busy="false"
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8 w-full"
        >
          {filteredCerts.map((cert) => (
            <article
              key={cert.id}
              tabIndex={0}
              aria-label={`${cert.title} certified by ${cert.issuer}`}
              className={`group rounded-2xl bg-slate-950 bg-gradient-to-br ${cert.gradient} border border-slate-800/90 p-5 sm:p-6 flex flex-col justify-between transition-all duration-300 hover:border-slate-600 hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-brand/60 backdrop-blur-md w-full overflow-hidden shadow-xl`}
            >
              <div>
                {/* Header Badge Row */}
                <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                  <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-full bg-slate-900/90 text-slate-200 border border-slate-800">
                    <BookOpen className="w-3.5 h-3.5 text-brand-light" aria-hidden="true" /> 
                    <span>{cert.issuer}</span>
                  </span>
                  <time 
                    dateTime={cert.issuedDate} 
                    className="text-[11px] font-medium text-slate-400 bg-slate-900/80 px-2.5 py-1 rounded-md border border-slate-800"
                  >
                    Issued: {cert.issuedDate}
                  </time>
                </div>

                {/* Course Title */}
                <h3 className="text-lg sm:text-xl font-bold text-slate-100 group-hover:text-brand-light transition mb-2 leading-snug">
                  {cert.title}
                </h3>

                {/* Course Description */}
                <p className="text-slate-400 text-xs sm:text-sm leading-relaxed mb-6">
                  {cert.description}
                </p>
              </div>

              <div>
                {/* Skill Tag Chips */}
                <div 
                  role="list" 
                  aria-label="Associated skills" 
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

                {/* Status Indicator */}
                <div className="inline-flex items-center gap-1.5 text-xs font-medium text-emerald-400 bg-emerald-500/10 px-3 py-1.5 rounded-lg border border-emerald-500/20">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" aria-hidden="true" /> 
                  <span>Verified Training Completed</span>
                </div>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}