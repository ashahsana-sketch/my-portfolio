'use client';

import { useState } from 'react';
import { Menu, X, Code } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-slate-950/80 backdrop-blur-md z-50 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2 text-xl font-bold text-sky-400">
          <Code className="w-6 h-6" /> Portfolio.
        </a>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-8 text-slate-300 font-medium">
          <a href="#home" className="hover:text-sky-400 transition">Home</a>
          <a href="#about" className="hover:text-sky-400 transition">About</a>
          <a href="#skills" className="hover:text-sky-400 transition">Skills</a>
          <a href="#projects" className="hover:text-sky-400 transition">Projects</a>
          <a href="#contact" className="px-4 py-2 bg-sky-500 hover:bg-sky-600 text-white rounded-lg transition">
            Contact
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-slate-300" aria-label="Toggle navigation menu">
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-slate-900 border-b border-slate-800 px-6 py-4 flex flex-col gap-4">
          <a href="#home" onClick={() => setIsOpen(false)} className="text-slate-300">Home</a>
          <a href="#about" onClick={() => setIsOpen(false)} className="text-slate-300">About</a>
          <a href="#skills" onClick={() => setIsOpen(false)} className="text-slate-300">Skills</a>
          <a href="#projects" onClick={() => setIsOpen(false)} className="text-slate-300">Projects</a>
          <a href="#contact" onClick={() => setIsOpen(false)} className="text-sky-400 font-semibold">Contact</a>
        </div>
      )}
    </nav>
  );
}