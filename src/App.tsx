/*
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import AnimatedBackground from './components/AnimatedBackground';
import Splash from './components/Splash';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Certifications from './components/Certifications';
import Education from './components/Education';
import Contact from './components/Contact';
import Chatbot from './components/Chatbot';
import { AnimatePresence } from 'motion/react';

export default function App() {
  const [showSplash, setShowSplash] = useState(true);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-50 font-sans selection:bg-cyan-500/30">
      <AnimatePresence>
        {showSplash && <Splash onComplete={() => setShowSplash(false)} />}
      </AnimatePresence>

      {!showSplash && (
        <>
          <AnimatedBackground />
          <Navbar />
          <main className="relative z-10">
            <Hero />

            {/* Download Resume Button */}
            <div className="flex justify-center py-6">
              
                href="/Resi.pdf"
                download="Resi"
                className="inline-flex items-center gap-2 px-8 py-3 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold rounded-full transition-all duration-300 shadow-lg shadow-cyan-500/25"
              >
                ⬇ Download Resume
              </a>
            </div>

            <Experience />
            <Projects />
            <Skills />
            <Certifications />
            <Education />
            <Contact />
          </main>

          <Chatbot />

          <footer className="relative z-10 py-8 text-center border-t border-slate-800/50 bg-slate-950/50 backdrop-blur-md">
            <p className="text-slate-500 text-sm">
              © {new Date().getFullYear()} Pratham Mishra. All rights reserved.
            </p>
          </footer>
        </>
      )}
    </div>
  );
}