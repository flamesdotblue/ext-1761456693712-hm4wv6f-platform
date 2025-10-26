import React, { useState } from 'react';
import { Mail, Phone } from 'lucide-react';

export default function Contact() {
  const [status, setStatus] = useState('idle');

  async function onSubmit(e) {
    e.preventDefault();
    setStatus('loading');
    // Simulate request; replace with your endpoint as needed
    await new Promise((r) => setTimeout(r, 1000));
    setStatus('success');
    e.currentTarget.reset();
  }

  return (
    <section id="contact" className="border-t border-neutral-200 bg-white">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-amber-700">Contact</p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl">Request a Free Quote</h2>
            <p className="mt-3 max-w-xl text-neutral-700">Tell us about your project and timeline. We typically respond within one business day.</p>

            <div className="mt-8 space-y-3 text-sm text-neutral-800">
              <p className="flex items-center gap-2"><Phone size={18} className="text-neutral-700" /> (555) 123-4567</p>
              <p className="flex items-center gap-2"><Mail size={18} className="text-neutral-700" /> estimates@buildright.com</p>
            </div>

            <div className="mt-8 rounded-lg border border-neutral-200 bg-neutral-50 p-4 text-sm text-neutral-700">
              Fully licensed and insured. References available upon request.
            </div>
          </div>

          <form onSubmit={onSubmit} className="rounded-xl border border-neutral-200 bg-white p-6 shadow-sm">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="sm:col-span-1">
                <label className="mb-1 block text-sm font-medium text-neutral-800" htmlFor="name">Full name</label>
                <input required id="name" name="name" type="text" className="block w-full rounded-md border border-neutral-300 bg-white px-3 py-2 text-sm text-neutral-900 placeholder-neutral-500 outline-none ring-0 transition focus:border-neutral-900" placeholder="Jane Doe" />
              </div>
              <div className="sm:col-span-1">
                <label className="mb-1 block text-sm font-medium text-neutral-800" htmlFor="email">Email</label>
                <input required id="email" name="email" type="email" className="block w-full rounded-md border border-neutral-300 bg-white px-3 py-2 text-sm text-neutral-900 placeholder-neutral-500 outline-none ring-0 transition focus:border-neutral-900" placeholder="jane@example.com" />
              </div>
              <div className="sm:col-span-1">
                <label className="mb-1 block text-sm font-medium text-neutral-800" htmlFor="phone">Phone</label>
                <input id="phone" name="phone" type="tel" className="block w-full rounded-md border border-neutral-300 bg-white px-3 py-2 text-sm text-neutral-900 placeholder-neutral-500 outline-none ring-0 transition focus:border-neutral-900" placeholder="(555) 987-6543" />
              </div>
              <div className="sm:col-span-2">
                <label className="mb-1 block text-sm font-medium text-neutral-800" htmlFor="message">Project details</label>
                <textarea required id="message" name="message" rows="5" className="block w-full rounded-md border border-neutral-300 bg-white px-3 py-2 text-sm text-neutral-900 placeholder-neutral-500 outline-none ring-0 transition focus:border-neutral-900" placeholder="Tell us about your renovation, addition, or build-out." />
              </div>
            </div>
            <div className="mt-5 flex items-center gap-3">
              <button type="submit" disabled={status==='loading'} className="inline-flex items-center rounded-md bg-neutral-900 px-5 py-2.5 text-sm font-semibold text-white hover:bg-neutral-800 focus:outline-none focus:ring-2 focus:ring-neutral-400 disabled:cursor-not-allowed disabled:opacity-60">
                {status === 'loading' ? 'Sending…' : 'Send request'}
              </button>
              {status === 'success' && (
                <span className="text-sm text-emerald-700">Thanks! Well be in touch shortly.</span>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
