import React from 'react';
import { Home, Wrench, Tool, CheckCircle } from 'lucide-react';

const services = [
  {
    title: 'Home Renovations',
    description: 'Kitchen, bathroom, and whole-home remodels with meticulous craftsmanship.',
    icon: Home,
  },
  {
    title: 'Additions & Framing',
    description: 'Expand your living or commercial space with structurally sound additions.',
    icon: Tool,
  },
  {
    title: 'Commercial Build-Outs',
    description: 'Retail, office, and tenant improvements tailored to your business needs.',
    icon: Wrench,
  },
  {
    title: 'Repairs & Maintenance',
    description: 'Reliable service for punch lists, repairs, and preventative maintenance.',
    icon: CheckCircle,
  },
];

export default function Services() {
  return (
    <section id="services" className="border-t border-neutral-200 bg-white">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-amber-700">What we do</p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl">Contracting Services</h2>
            <p className="mt-3 max-w-2xl text-neutral-700">Full-service general contracting with transparent pricing and a client-first approach.</p>
          </div>
          <a href="#contact" className="hidden rounded-md border border-neutral-300 px-4 py-2 text-sm font-medium text-neutral-900 hover:bg-neutral-50 md:block">Get an Estimate</a>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map(({ title, description, icon: Icon }) => (
            <div key={title} className="group relative overflow-hidden rounded-xl border border-neutral-200 bg-white p-6 shadow-sm transition hover:shadow-md">
              <div className="mb-4 inline-flex rounded-lg border border-amber-200 bg-amber-50 p-3 text-amber-700">
                <Icon size={22} />
              </div>
              <h3 className="text-lg font-semibold text-neutral-900">{title}</h3>
              <p className="mt-2 text-sm text-neutral-700">{description}</p>
              <div className="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rotate-12 rounded-full bg-amber-100 opacity-0 blur-xl transition-opacity duration-300 group-hover:opacity-100" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
