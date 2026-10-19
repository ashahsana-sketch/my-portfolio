import Link from 'next/link';
import { Layers, Cpu, Wrench, ShieldCheck, ArrowRight } from 'lucide-react';
import Hero from '@/components/Hero/Hero';
import CertificationsSection from '@/components/Certifications/Certifications';

const skillHighlights = [
  {
    title: 'Frontend Architecture',
    icon: Layers,
    skills: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'],
  },
  {
    title: 'Systems & Logic',
    icon: Cpu,
    skills: ['State Management', 'API Integration', 'Analytical Problem Solving'],
  },
  {
    title: 'Engineering Tools',
    icon: Wrench,
    skills: ['Git & GitHub', 'Figma', 'Linux Environments'],
  },
  {
    title: 'Standards & Quality',
    icon: ShieldCheck,
    skills: ['WCAG Accessibility', 'Responsive Design', 'Semantic HTML5', 'Agile / Scrum'],
  },
];

export default function HomePage() {
  return (
    <main className="pt-20">
      <Hero />
      <CertificationsSection />
    </main>
  );
}