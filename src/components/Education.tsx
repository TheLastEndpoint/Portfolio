import { motion } from 'motion/react';
import { resumeData } from '../data';
import { GraduationCap } from 'lucide-react';

export default function Education() {
  return (
    <section id="education" className="py-24 px-6 max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-12"
      >
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 flex items-center gap-3">
          <GraduationCap className="text-purple-400" />
          Education
        </h2>
        <div className="h-1 w-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full" />
      </motion.div>

      <div className="space-y-6">
        {resumeData.education.map((edu, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="p-6 sm:p-8 rounded-2xl border border-slate-800 bg-slate-900/40 backdrop-blur-sm flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 hover:border-purple-500/30 transition-colors"
          >
            <div>
              <h3 className="text-xl font-bold text-white mb-1">{edu.institution}</h3>
              <p className="text-purple-300 font-medium">{edu.degree}</p>
            </div>
            <div className="px-4 py-1.5 rounded-full bg-slate-800 text-slate-300 text-sm font-medium border border-slate-700">
              {edu.date}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
