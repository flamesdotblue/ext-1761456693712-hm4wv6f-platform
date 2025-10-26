import React from 'react';
import { CheckCircle, Star } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-amber-50 to-white pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-20 relative">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-amber-200 bg-amber-50 px-3 py-1 text-amber-800 text-xs font-medium mb-4">
              <Star className="h-3.5 w-3.5 fill-amber-400 text-amber-500" />
              Trusted local builders since 2008
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-slate-900">
              Quality craft, built to last.
            </h1>
            <p className="mt-4 text-lg text-slate-600">
              Full-service residential and commercial contractors delivering renovations, additions, and new builds with precision and care.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <a href="#contact" className="inline-flex items-center justify-center rounded-md bg-amber-600 px-6 py-3 text-white font-semibold shadow hover:bg-amber-700 transition">
                Request a Quote
              </a>
              <a href="#projects" className="inline-flex items-center justify-center rounded-md border border-slate-300 px-6 py-3 text-slate-700 font-semibold hover:bg-slate-50 transition">
                View Projects
              </a>
            </div>
            <div className="mt-6 flex items-center gap-4 text-sm text-slate-600">
              <div className="inline-flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-emerald-600" /> Licensed & Insured
              </div>
              <div className="inline-flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-emerald-600" /> Free Estimates
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl border border-slate-200 bg-[url('https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1920&auto=format&fit=crop')] bg-cover bg-center shadow-lg" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
