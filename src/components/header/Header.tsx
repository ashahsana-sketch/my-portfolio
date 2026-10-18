'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Skills', href: '/skills' },
    { name: 'Projects', href: '/projects' },
  ];

  return (
    <header className="fixed top-0 left-0 w-full bg-slate-950/80 backdrop-blur-md z-50 border-b border-slate-800">
      <nav className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        
        {/* Logo Integration with auto aspect-ratio styling */}
        <Link href="/" className="flex items-center gap-3 group">
          <Image 
            src="/portfolio.svg" 
            alt="Portfolio Logo" 
            width={36} 
            height={36} 
            className="w-auto h-9 transition-transform group-hover:scale-105"
            priority
          />
          <span className="text-xl font-bold text-slate-100 group-hover:text-brand-light transition">
            Portfolio
          </span>
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-8 text-slate-300 font-medium">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`transition hover:text-brand-light ${
                  isActive ? 'text-brand-light font-semibold' : ''
                }`}
              >
                {link.name}
              </Link>
            );
          })}
          <Link
            href="/contact"
            className={`px-4 py-2 rounded-lg transition font-medium ${
              pathname === '/contact'
                ? 'bg-brand-hover text-white shadow-md shadow-brand/25'
                : 'bg-brand hover:bg-brand-hover text-white'
            }`}
          >
            Contact
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-slate-300"
          aria-label="Toggle navigation menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-slate-900 border-b border-slate-800 px-6 py-4 flex flex-col gap-4">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`transition ${
                  isActive ? 'text-brand-light font-semibold' : 'text-slate-300 hover:text-brand-light'
                }`}
              >
                {link.name}
              </Link>
            );
          })}
          <Link
            href="/contact"
            onClick={() => setIsOpen(false)}
            className={`transition font-semibold ${
              pathname === '/contact' ? 'text-brand-light font-bold' : 'text-slate-300 hover:text-brand-light'
            }`}
          >
            Contact
          </Link>
        </div>
      )}
    </header>
  );
}