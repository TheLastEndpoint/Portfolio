import { motion } from 'motion/react';
import { resumeData } from '../data';
import { Award } from 'lucide-react';

export default function Certifications() {
  return (
    <section id="certifications" className="py-24 px-6 max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-12"
      >
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 flex items-center gap-3">
          <Award className="text-yellow-400" />
          Certifications
        </h2>
        <div className="h-1 w-20 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full" />
      </motion.div>

      <div className="grid sm:grid-cols-2 gap-4">
        {resumeData.certifications.map((cert, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: idx * 0.1 }}
            className="p-4 rounded-xl border border-slate-800 bg-slate-900/40 backdrop-blur-sm flex items-start gap-4 hover:border-yellow-500/30 transition-colors"
          >
            <div className="p-2 rounded-lg bg-yellow-500/10 text-yellow-400 shrink-0">
              <Award className="w-5 h-5" />
            </div>
            <p className="text-slate-300 font-medium leading-snug">{cert}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
