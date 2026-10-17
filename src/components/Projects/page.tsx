import { ExternalLink } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';

const projects = [
  {
    title: 'OmsorgHub',
    description: 'A comprehensive care center management and employee rostering web application built with Next.js and Tailwind CSS.',
    tags: ['Next.js', 'React', 'Tailwind CSS', 'TypeScript'],
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    title: 'E-Commerce Web Shop',
    description: 'Dynamic online store featuring product catalog navigation, search functionality, category filters, and user authentication.',
    tags: ['React', 'Next.js', 'Supabase', 'Tailwind CSS'],
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    title: 'Modern Portfolio',
    description: 'A responsive developer portfolio website designed with sleek dark-mode aesthetics, modular components, and custom form actions.',
    tags: ['React', 'Next.js', 'Tailwind CSS', 'Lucide Icons'],
    liveUrl: '#',
    githubUrl: 'https://github.com/ashahsana-sketch',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-slate-900/40 text-slate-100 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-sky-400 font-medium tracking-wider uppercase text-sm">
            Portfolio
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mt-4">
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-indigo-500">Projects</span>
          </h2>
          <p className="text-slate-400 mt-4 max-w-xl mx-auto">
            A selection of web applications and projects I have worked on.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="rounded-3xl border border-slate-800 bg-slate-900/50 p-6 flex flex-col justify-between hover:border-sky-500/50 transition duration-300"
            >
              <div>
                <h3 className="text-2xl font-semibold mb-3 text-white">{project.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-6">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex}
                      className="px-3 py-1 text-xs font-medium bg-sky-500/10 text-sky-400 rounded-full border border-sky-500/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex items-center gap-4 pt-4 border-t border-slate-800/80">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-slate-300 hover:text-sky-400 transition"
                >
                  <FaGithub size={18} /> Code
                </a>
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-slate-300 hover:text-sky-400 transition ml-auto"
                >
                  <ExternalLink size={18} /> Live Demo
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}