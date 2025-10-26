import React from 'react';
import { Hammer, Star } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-amber-50 via-white to-white" />
        <div className="absolute -left-24 top-10 h-64 w-64 rounded-full bg-amber-200/40 blur-3xl" />
        <div className="absolute -right-24 top-40 h-64 w-64 rounded-full bg-neutral-200/40 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-amber-200 bg-white px-3 py-1 text-xs font-medium text-amber-700">
              <Hammer size={14} />
              Licensed & Insured • Trusted Since 2008
            </div>
            <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-neutral-900 sm:text-5xl md:text-6xl">
              We build spaces that stand the test of time
            </h1>
            <p className="mt-5 max-w-xl text-base text-neutral-700 sm:text-lg">
              Residential and commercial contracting—from renovations and additions to new builds—delivered on schedule and on budget.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href="#contact" className="inline-flex items-center justify-center rounded-md bg-neutral-900 px-6 py-3 text-sm font-semibold text-white hover:bg-neutral-800 focus:outline-none focus:ring-2 focus:ring-neutral-400">
                Request a Free Quote
              </a>
              <a href="#projects" className="inline-flex items-center justify-center rounded-md border border-neutral-300 bg-white px-6 py-3 text-sm font-semibold text-neutral-900 hover:bg-neutral-50 focus:outline-none focus:ring-2 focus:ring-neutral-300">
                View Recent Projects
              </a>
            </div>
            <div className="mt-8 flex items-center gap-3 text-sm text-neutral-700">
              <div className="flex items-center gap-1 text-amber-600">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" className="text-amber-500" />
                ))}
              </div>
              <span>Rated 5.0 by homeowners and businesses</span>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[4/3] w-full overflow-hidden rounded-xl border border-neutral-200 bg-neutral-100 shadow-sm">
              <img
                src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1600&auto=format&fit=crop"
                alt="Construction site with workers and scaffolding"
                className="h-full w-full object-cover"
                loading="eager"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 hidden rounded-xl border border-neutral-200 bg-white p-4 shadow-sm md:block">
              <p className="text-sm font-semibold text-neutral-900">On-time Delivery</p>
              <p className="text-xs text-neutral-600">98% of projects completed on schedule last year</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
