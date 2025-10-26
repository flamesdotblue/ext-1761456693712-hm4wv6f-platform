import React from 'react';
import Hero from './components/Hero';
import Services from './components/Services';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <header className="sticky top-0 z-40 bg-white/80 backdrop-blur border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <a href="#home" className="inline-flex items-center gap-2 font-semibold text-slate-900">
            <span className="text-amber-600">BuildPro</span> Contractors
          </a>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#services" className="hover:text-amber-600 transition">Services</a>
            <a href="#projects" className="hover:text-amber-600 transition">Projects</a>
            <a href="#contact" className="hover:text-amber-600 transition">Contact</a>
            <a href="#contact" className="inline-flex items-center rounded-md bg-amber-600 px-4 py-2 text-white font-medium shadow hover:bg-amber-700 transition">
              Get a Quote
            </a>
          </nav>
        </div>
      </header>

      <main>
        <Hero />
        <Services />
        <Projects />
        <Contact />
      </main>

      <footer className="border-t border-slate-200 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 text-sm text-slate-500 flex flex-col md:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} BuildPro Contractors. All rights reserved.</p>
          <p>Licensed • Insured • Bonded</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
