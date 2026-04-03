import { motion } from 'motion/react';
import { resumeData } from '../data';
import { Code2, ExternalLink, Github } from 'lucide-react';

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-16 text-center"
      >
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 flex items-center justify-center gap-3">
          <Code2 className="text-cyan-400" />
          Featured Projects
        </h2>
        <div className="h-1 w-20 bg-gradient-to-r from-cyan-500 to-teal-500 rounded-full mx-auto" />
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-8">
        {resumeData.projects.map((project, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="group relative p-8 rounded-3xl border border-slate-800 bg-slate-900/50 backdrop-blur-sm overflow-hidden hover:border-cyan-500/50 transition-colors"
          >
            {/* Spotlight gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="relative z-10">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-slate-400 text-sm">{project.date}</p>
                </div>
                <div className="flex gap-3">
                  {project.github && (
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="p-2 rounded-full bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 transition-colors"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                  )}
                  <button className="p-2 rounded-full bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 transition-colors">
                    <ExternalLink className="w-5 h-5" />
                  </button>
                </div>
              </div>

              <div className="mb-6 flex flex-wrap gap-2">
                {project.stack.split(' | ').map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 text-xs font-medium rounded-full bg-slate-950 text-slate-300 border border-slate-800"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <ul className="space-y-3">
                {project.bullets.map((bullet, i) => (
                  <li key={i} className="text-slate-300 text-sm flex items-start gap-3 leading-relaxed">
                    <span className="text-cyan-500 mt-1.5 h-1 w-1 rounded-full shrink-0" />
                    {bullet}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
