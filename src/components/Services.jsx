import React from 'react';
import { Home, Wrench, Hammer, Shield } from 'lucide-react';

const services = [
  {
    icon: Home,
    title: 'Home Renovations',
    description: 'Kitchen, bath, and whole-home remodels with premium materials and craftsmanship.'
  },
  {
    icon: Hammer,
    title: 'Additions & Framing',
    description: 'Room additions, garages, decks, and structural framing done right the first time.'
  },
  {
    icon: Wrench,
    title: 'Commercial Build-outs',
    description: 'Tenant improvements and storefront build-outs that meet code and timeline.'
  },
  {
    icon: Shield,
    title: 'Repairs & Maintenance',
    description: 'Reliable repairs, punch lists, and ongoing property maintenance services.'
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Our Services</h2>
          <p className="mt-3 text-slate-600">From concept to completion, we handle projects of every size with meticulous attention to detail.</p>
        </div>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s) => (
            <div key={s.title} className="rounded-xl border border-slate-200 p-6 hover:shadow-md transition bg-white">
              <div className="h-12 w-12 rounded-lg bg-amber-50 text-amber-700 flex items-center justify-center">
                <s.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 font-semibold text-lg">{s.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{s.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
