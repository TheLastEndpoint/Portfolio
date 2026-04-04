import { motion } from 'motion/react';
import { resumeData } from '../data';
import { ArrowDown, Download } from 'lucide-react';

export default function Hero() {
  const { name, role, summary } = resumeData.personalInformation;

  const handleScrollToExperience = () => {
    document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen px-6 pt-20 text-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="max-w-4xl"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="inline-block px-4 py-1.5 mb-6 text-sm font-medium border rounded-full text-cyan-400 border-cyan-500/30 bg-cyan-500/10 backdrop-blur-sm"
        >
          Available for new opportunities
        </motion.div>
        
        <h1 className="mb-6 text-5xl font-extrabold tracking-tight text-white sm:text-7xl lg:text-8xl">
          {name}
        </h1>
        
        <h2 className="mb-8 text-2xl font-medium text-transparent sm:text-3xl bg-clip-text bg-gradient-to-r from-indigo-400 via-cyan-400 to-teal-400">
          {role}
        </h2>
        
        <p className="max-w-2xl mx-auto mb-12 text-lg leading-relaxed text-slate-400">
          {summary}
        </p>
        
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <button
            onClick={handleScrollToExperience}
            className="flex items-center gap-2 px-8 py-4 font-semibold text-white transition-all rounded-full bg-indigo-600 hover:bg-indigo-500 hover:shadow-[0_0_20px_rgba(99,102,241,0.4)]"
          >
            View Experience
            <ArrowDown className="w-5 h-5" />
          </button>
          
          
            href="/Resi.pdf"
            download="Resi.pdf"
            className="flex items-center gap-2 px-8 py-4 font-semibold text-white transition-all border rounded-full border-slate-700 bg-slate-800/50 hover:bg-slate-800 hover:border-slate-600 backdrop-blur-sm"
          >
            Download Resume
            <Download className="w-5 h-5" />
          </a>
        </div>
      </motion.div>
    </section>
  );
}