import { motion } from 'motion/react';
import { resumeData } from '../data';
import { Mail, Github, Linkedin, Send } from 'lucide-react';

export default function Contact() {
  const { email, linkedin, github } = resumeData.personalInformation.contact;

  return (
    <section id="contact" className="py-24 px-6 max-w-4xl mx-auto text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-12"
      >
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 flex items-center justify-center gap-3">
          <Send className="text-indigo-400" />
          Reach Out
        </h2>
        <div className="h-1 w-20 bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-full mx-auto" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="p-8 sm:p-12 rounded-3xl border border-slate-800 bg-slate-900/50 backdrop-blur-sm"
      >
        <h3 className="text-2xl font-bold text-white mb-4">Let's build something amazing together.</h3>
        <p className="text-slate-400 mb-10 max-w-2xl mx-auto">
          I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <a
            href={`mailto:${email}`}
            className="flex items-center gap-3 px-8 py-4 font-semibold text-white transition-all rounded-full bg-indigo-600 hover:bg-indigo-500 hover:shadow-[0_0_20px_rgba(99,102,241,0.4)] w-full sm:w-auto justify-center"
          >
            <Mail className="w-5 h-5" />
            Say Hello
          </a>
          
          <div className="flex items-center gap-4">
            <a
              href={linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-full bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700 hover:shadow-[0_0_15px_rgba(56,189,248,0.3)] transition-all"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-full bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700 hover:shadow-[0_0_15px_rgba(56,189,248,0.3)] transition-all"
              aria-label="GitHub"
            >
              <Github className="w-6 h-6" />
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
