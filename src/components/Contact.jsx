import React, { useState } from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });
  const [status, setStatus] = useState('');

  function handleChange(e) {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      // Placeholder submission: mimic success
      await new Promise((r) => setTimeout(r, 600));
      setStatus('Thanks! We\'ll get back to you shortly.');
      setForm({ name: '', email: '', phone: '', message: '' });
    } catch (err) {
      setStatus('Something went wrong. Please try again.');
    }
  }

  return (
    <section id="contact" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Get in touch</h2>
            <p className="mt-3 text-slate-600">Tell us about your project and we\'ll contact you to schedule a free estimate.</p>

            <div className="mt-8 space-y-4 text-slate-700">
              <div className="flex items-center gap-3"><Phone className="h-5 w-5 text-amber-600" /><a href="tel:+15551234567" className="hover:underline">(555) 123-4567</a></div>
              <div className="flex items-center gap-3"><Mail className="h-5 w-5 text-amber-600" /><a href="mailto:hello@buildpro.com" className="hover:underline">hello@buildpro.com</a></div>
              <div className="flex items-center gap-3"><MapPin className="h-5 w-5 text-amber-600" /><span>123 Builder Ave, Suite 200, Your City</span></div>
            </div>
          </div>

          <div>
            <form onSubmit={handleSubmit} className="rounded-2xl border border-slate-200 p-6 bg-white shadow-sm">
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="text-sm font-medium">Name</label>
                  <input id="name" name="name" value={form.name} onChange={handleChange} required className="h-11 rounded-md border border-slate-300 px-3 focus:outline-none focus:ring-2 focus:ring-amber-500" />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="text-sm font-medium">Email</label>
                  <input id="email" name="email" type="email" value={form.email} onChange={handleChange} required className="h-11 rounded-md border border-slate-300 px-3 focus:outline-none focus:ring-2 focus:ring-amber-500" />
                </div>
              </div>
              <div className="mt-4 grid sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-2">
                  <label htmlFor="phone" className="text-sm font-medium">Phone</label>
                  <input id="phone" name="phone" value={form.phone} onChange={handleChange} className="h-11 rounded-md border border-slate-300 px-3 focus:outline-none focus:ring-2 focus:ring-amber-500" />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="service" className="text-sm font-medium">Service</label>
                  <select id="service" name="service" defaultValue="General Inquiry" onChange={handleChange} className="h-11 rounded-md border border-slate-300 px-3 focus:outline-none focus:ring-2 focus:ring-amber-500">
                    <option>General Inquiry</option>
                    <option>Home Renovation</option>
                    <option>Additions & Framing</option>
                    <option>Commercial Build-out</option>
                    <option>Repairs & Maintenance</option>
                  </select>
                </div>
              </div>
              <div className="mt-4 flex flex-col gap-2">
                <label htmlFor="message" className="text-sm font-medium">Message</label>
                <textarea id="message" name="message" rows={5} value={form.message} onChange={handleChange} className="rounded-md border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-500" />
              </div>
              <button type="submit" className="mt-6 inline-flex items-center rounded-md bg-amber-600 px-5 py-3 text-white font-semibold shadow hover:bg-amber-700 transition">
                Send Request
              </button>
              {status && <p className="mt-3 text-sm text-emerald-700">{status}</p>}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
