import React from 'react';

const projects = [
  {
    title: 'Modern Kitchen Renovation',
    img: 'https://images.unsplash.com/photo-1505692952047-1a78307da8f2?q=80&w=1600&auto=format&fit=crop',
    tag: 'Residential',
  },
  {
    title: 'Open-Plan Office Build-Out',
    img: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1600&auto=format&fit=crop',
    tag: 'Commercial',
  },
  {
    title: 'Home Addition & Framing',
    img: 'https://images.unsplash.com/photo-1501183638710-841dd1904471?q=80&w=1600&auto=format&fit=crop',
    tag: 'Residential',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="border-t border-neutral-200 bg-neutral-50">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="mb-10">
          <p className="text-xs font-semibold uppercase tracking-widest text-amber-700">Our work</p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl">Recent Projects</h2>
          <p className="mt-3 max-w-2xl text-neutral-700">Craftsmanship, coordination, and communication—from first demo to final walkthrough.</p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <article key={p.title} className="group overflow-hidden rounded-xl border border-neutral-200 bg-white shadow-sm transition hover:shadow-md">
              <div className="aspect-[4/3] w-full overflow-hidden bg-neutral-100">
                <img src={p.img} alt={p.title} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" loading="lazy" />
              </div>
              <div className="p-5">
                <span className="rounded-full border border-amber-200 bg-amber-50 px-2.5 py-1 text-xs font-medium text-amber-700">{p.tag}</span>
                <h3 className="mt-3 text-lg font-semibold text-neutral-900">{p.title}</h3>
                <p className="mt-1 text-sm text-neutral-700">Delivered with detailed planning and a clean, safe site.</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
