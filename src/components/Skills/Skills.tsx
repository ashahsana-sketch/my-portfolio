import { 
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaGitAlt, FaGithub 
} from 'react-icons/fa';
import { SiNextdotjs, SiTypescript, SiTailwindcss } from 'react-icons/si';

const skillsList = [
  { name: 'HTML5', icon: <FaHtml5 className="w-8 h-8 text-orange-500" /> },
  { name: 'CSS3', icon: <FaCss3Alt className="w-8 h-8 text-blue-500" /> },
  { name: 'JavaScript', icon: <FaJs className="w-8 h-8 text-yellow-400" /> },
  { name: 'TypeScript', icon: <SiTypescript className="w-8 h-8 text-blue-600" /> },
  { name: 'React', icon: <FaReact className="w-8 h-8 text-cyan-400" /> },
  { name: 'Next.js', icon: <SiNextdotjs className="w-8 h-8 text-white" /> },
  { name: 'Tailwind CSS', icon: <SiTailwindcss className="w-8 h-8 text-cyan-500" /> },
  { name: 'Git', icon: <FaGitAlt className="w-8 h-8 text-red-500" /> },
  { name: 'GitHub', icon: <FaGithub className="w-8 h-8 text-purple-400" /> },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-slate-950 text-slate-100 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <span className="text-brand-light font-medium tracking-wider uppercase text-sm">
          Expertise
        </span>
        <h2 className="text-3xl md:text-5xl font-bold mt-4 mb-16">
          My <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-light to-secondary">Skills</span>
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {skillsList.map((skill, index) => (
            <div 
              key={index}
              className="p-6 rounded-2xl border border-slate-800 bg-slate-900/50 hover:border-brand/50 flex flex-col items-center justify-center gap-4 transition group"
            >
              <div className="p-4 rounded-xl bg-slate-950 group-hover:scale-110 transition duration-300">
                {skill.icon}
              </div>
              <span className="font-medium text-slate-200">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}