import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';
import { resumeData } from '../data';
import { ChevronDown, Briefcase, Zap } from 'lucide-react';

export default function Experience() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  // Auto-pull measurable bullets (containing numbers or '%')
  const impactHighlights = resumeData.experience
    .flatMap((exp) => exp.bullets)
    .filter((bullet) => /\d|%/.test(bullet));

  return (
    <section id="experience" className="py-24 px-6 max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-16"
      >
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 flex items-center gap-3">
          <Briefcase className="text-indigo-400" />
          Experience
        </h2>
        <div className="h-1 w-20 bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-full" />
      </motion.div>

      {impactHighlights.length > 0 && (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mb-12 p-6 rounded-2xl border border-indigo-500/20 bg-indigo-500/5 backdrop-blur-md"
        >
          <h3 className="text-lg font-semibold text-indigo-300 mb-4 flex items-center gap-2">
            <Zap className="w-5 h-5" />
            Impact Highlights
          </h3>
          <ul className="grid sm:grid-cols-2 gap-4">
            {impactHighlights.map((highlight, idx) => (
              <li key={idx} className="text-slate-300 text-sm flex items-start gap-2">
                <span className="text-cyan-400 mt-0.5">▹</span>
                {highlight}
              </li>
            ))}
          </ul>
        </motion.div>
      )}

      <div className="space-y-6">
        {resumeData.experience.map((exp, idx) => {
          const isExpanded = expandedIndex === idx;

          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={`border rounded-2xl overflow-hidden transition-colors duration-300 ${
                isExpanded
                  ? 'border-indigo-500/50 bg-slate-900/80 shadow-[0_0_30px_rgba(99,102,241,0.1)]'
                  : 'border-slate-800 bg-slate-900/40 hover:border-slate-700'
              } backdrop-blur-sm`}
            >
              <button
                onClick={() => setExpandedIndex(isExpanded ? null : idx)}
                className="w-full text-left p-6 sm:p-8 flex items-start justify-between gap-4"
              >
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                    {exp.role}
                  </h3>
                  <div className="flex flex-wrap items-center gap-3 text-sm">
                    <span className="text-indigo-400 font-medium">{exp.title}</span>
                    <span className="text-slate-600">•</span>
                    <span className="text-slate-400">{exp.date}</span>
                  </div>
                </div>
                <div
                  className={`p-2 rounded-full bg-slate-800 transition-transform duration-300 ${
                    isExpanded ? 'rotate-180' : ''
                  }`}
                >
                  <ChevronDown className="w-5 h-5 text-slate-400" />
                </div>
              </button>

              <AnimatePresence>
                {isExpanded && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                  >
                    <div className="px-6 pb-8 sm:px-8 pt-0">
                      <div className="mb-6 flex flex-wrap gap-2">
                        {exp.stack.split(', ').map((tech, i) => (
                          <span
                            key={i}
                            className="px-3 py-1 text-xs font-medium rounded-full bg-slate-800 text-cyan-300 border border-slate-700"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                      <ul className="space-y-3">
                        {exp.bullets.map((bullet, i) => (
                          <li key={i} className="text-slate-300 flex items-start gap-3 leading-relaxed">
                            <span className="text-indigo-500 mt-1.5 h-1.5 w-1.5 rounded-full shrink-0" />
                            {bullet}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
