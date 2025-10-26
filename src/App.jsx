import React from 'react';
import Hero from './components/Hero';
import Services from './components/Services';
import Projects from './components/Projects';
import Contact from './components/Contact';

export default function App() {
  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-900">
      <header className="sticky top-0 z-40 w-full border-b border-neutral-200 bg-white/80 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="#" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-md bg-amber-500" />
            <span className="font-semibold tracking-tight">BuildRight Contractors</span>
          </a>
          <nav className="hidden gap-6 text-sm font-medium md:flex">
            <a href="#services" className="text-neutral-700 hover:text-neutral-900">Services</a>
            <a href="#projects" className="text-neutral-700 hover:text-neutral-900">Projects</a>
            <a href="#contact" className="text-neutral-700 hover:text-neutral-900">Contact</a>
          </nav>
          <a href="#contact" className="ml-4 inline-flex items-center rounded-md bg-neutral-900 px-4 py-2 text-sm font-medium text-white hover:bg-neutral-800 focus:outline-none focus:ring-2 focus:ring-neutral-400 md:ml-8">Get a Quote</a>
        </div>
      </header>

      <main>
        <Hero />
        <Services />
        <Projects />
        <Contact />
      </main>

      <footer className="mt-20 border-t border-neutral-200 bg-white">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-8 text-sm text-neutral-600 md:flex-row">
          <p>© {new Date().getFullYear()} BuildRight Contractors. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#services" className="hover:text-neutral-900">Services</a>
            <a href="#projects" className="hover:text-neutral-900">Projects</a>
            <a href="#contact" className="hover:text-neutral-900">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
