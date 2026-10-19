import Link from 'next/link';
import { Layers, Cpu, Wrench, ShieldCheck, ArrowRight } from 'lucide-react';
import Hero from '@/components/Hero/Hero';
import FeaturedProjects from '@/components/featureproject';
import FeaturedCertifications from '@/components/featurecertification';
import FeaturedEducation from '@/components/featureEducation';

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
    <main className="bg-slate-900 mt-4 text-slate-100 min-h-screen">
      <Hero />
      <FeaturedEducation />
      <FeaturedCertifications />
      <FeaturedProjects />
    </main>
  );
}