import Link from 'next/link';
import Image from 'next/image';
import { Code, Globe, Mail } from 'lucide-react';

export default function Hero() {
  return (
    <section className="pt-24 pb-12 md:pt-28 md:pb-16 flex flex-col items-center justify-center text-center px-6 relative overflow-hidden">
      {/* Background soft glow effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-sky-500/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-3xl mx-auto space-y-6 relative z-10 flex flex-col items-center">
        
        {/* Profile Picture */}
        <div className="relative w-32 h-32 md:w-36 md:h-36 rounded-full overflow-hidden border-2 border-sky-500/50 shadow-xl shadow-sky-500/20 mb-2">
          <Image
            src="/sana-photo.jpeg" // Make sure to save your photo as sana-photo.jpg inside the public folder
            alt="Sana Islam"
            fill
            priority
            className="object-cover object-top"
          />
        </div>

        {/* Welcome Tag */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/30 text-sky-400 text-xs font-semibold">
          Welcome to my portfolio
        </div>

        {/* Main Headline */}
        <h1 className="text-4xl md:text-6xl font-extrabold text-slate-700 tracking-tight">
          Hi, I&apos;m <span className="text-sky-400">Sana</span>
        </h1>

        {/* Subtitle */}
        <p className="text-slate-700 text-base md:text-lg max-w-xl mx-auto leading-relaxed">
          Front-End Developer creating responsive, high-performance web applications with a strong analytical background.
        </p>

        {/* Call To Action Buttons */}
        <div className="flex flex-wrap gap-4 items-center justify-center pt-2">
          <Link
            href="/projects"
            className="px-6 py-3 rounded-xl bg-sky-500 hover:bg-sky-600 text-white font-medium text-sm transition shadow-lg shadow-sky-500/25"
          >
            View Projects
          </Link>
          <Link
            href="/contact"
            className="px-6 py-3 rounded-xl border border-slate-700 hover:border-slate-500 text-slate-200 font-medium text-sm transition bg-slate-900/50 hover:bg-slate-800"
          >
            Get in Touch
          </Link>
        </div>

        {/* Social Links Icons */}
        <div className="flex items-center justify-center gap-4 pt-4 text-slate-400">
          <a 
            href="https://github.com/ashahsana-sketch" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="p-2 rounded-full bg-slate-900/80 border border-slate-800 hover:text-sky-400 hover:border-sky-500/50 transition"
          >
            <Code className="w-5 h-5" />
          </a>
          <a 
            href="https://www.linkedin.com/in/ashahsana/" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            className="p-2 rounded-full bg-slate-900/80 border border-slate-800 hover:text-sky-400 hover:border-sky-500/50 transition"
          >
            <Globe className="w-5 h-5" />
          </a>
          <a 
            href="mailto:ashahsana@gmail.com" 
            aria-label="Email Contact"
            className="p-2 rounded-full bg-slate-900/80 border border-slate-800 hover:text-sky-400 hover:border-sky-500/50 transition"
          >
            <Mail className="w-5 h-5" />
          </a>
        </div>

      </div>
    </section>
  );
}