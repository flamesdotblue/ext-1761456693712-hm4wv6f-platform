import React from 'react';

const items = [
  {
    title: 'Modern Kitchen Remodel',
    image: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=1920&auto=format&fit=crop',
    tag: 'Residential',
  },
  {
    title: 'Retail Build-out',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1920&auto=format&fit=crop',
    tag: 'Commercial',
  },
  {
    title: 'Deck & Outdoor Living',
    image: 'https://images.unsplash.com/photo-1760552268175-431696421106?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxEZWNrJTIwJTI2JTIwT3V0ZG9vciUyMExpdmluZ3xlbnwwfDB8fHwxNzYxNDU2ODg0fDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
    tag: 'Residential',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Featured Projects</h2>
          <p className="mt-3 text-slate-600">A snapshot of our recent work across residential and commercial spaces.</p>
        </div>
        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {items.map((p) => (
            <div key={p.title} className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
              <div className="aspect-[4/3] overflow-hidden">
                <img src={p.image} alt={p.title} className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-300" />
              </div>
              <div className="p-4">
                <span className="inline-flex text-xs font-medium rounded-full bg-slate-100 text-slate-700 px-2.5 py-1">{p.tag}</span>
                <h3 className="mt-2 font-semibold">{p.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
