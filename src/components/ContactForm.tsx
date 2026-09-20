"use client";

import { useState } from "react";
import { CheckCircle2 } from "lucide-react";
import { categories } from "@/data/products";

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", phone: "", email: "", interest: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [done, setDone] = useState(false);

  function validate() {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = "Please enter your name.";
    if (!/^[6-9]\d{9}$/.test(form.phone.replace(/\s/g, ""))) e.phone = "Enter a valid 10-digit phone number.";
    if (form.email && !/^\S+@\S+\.\S+$/.test(form.email)) e.email = "Enter a valid email.";
    if (!form.message.trim()) e.message = "Please write your message.";
    setErrors(e);
    return Object.keys(e).length === 0;
  }

  function onSubmit(ev: React.FormEvent) {
    ev.preventDefault();
    if (!validate()) return;
    setDone(true);
  }

  if (done) {
    return (
      <div className="rounded-2xl border border-green-200 bg-green-50 p-8 text-center" role="status">
        <CheckCircle2 className="mx-auto text-green-600" size={40} />
        <h3 className="mt-2 font-serif text-2xl font-bold">Message Sent!</h3>
        <p className="mt-2 text-sm text-stone-600">Thank you, {form.name}. We will contact you soon.</p>
        <button onClick={() => { setDone(false); setForm({ name: "", phone: "", email: "", interest: "", message: "" }); }} className="btn-outline mt-5">
          Send Another Message
        </button>
      </div>
    );
  }

  const cls = "w-full rounded-xl border border-stone-300 bg-white px-4 py-3 text-sm focus:border-bronze-400 focus:outline-none focus:ring-2 focus:ring-bronze-200";

  return (
    <form onSubmit={onSubmit} noValidate className="grid gap-4" aria-label="Contact form">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="c-name" className="mb-1 block text-sm font-medium">Name *</label>
          <input id="c-name" className={cls} value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Your name" />
          {errors.name && <p className="mt-1 text-xs text-red-600">{errors.name}</p>}
        </div>
        <div>
          <label htmlFor="c-phone" className="mb-1 block text-sm font-medium">Phone *</label>
          <input id="c-phone" className={cls} value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} placeholder="10-digit mobile" inputMode="numeric" />
          {errors.phone && <p className="mt-1 text-xs text-red-600">{errors.phone}</p>}
        </div>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="c-email" className="mb-1 block text-sm font-medium">Email</label>
          <input id="c-email" type="email" className={cls} value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="you@example.com" />
          {errors.email && <p className="mt-1 text-xs text-red-600">{errors.email}</p>}
        </div>
        <div>
          <label htmlFor="c-interest" className="mb-1 block text-sm font-medium">Product Interested In</label>
          <select id="c-interest" className={cls} value={form.interest} onChange={(e) => setForm({ ...form, interest: e.target.value })}>
            <option value="">Select (optional)</option>
            {categories.map((c) => <option key={c} value={c}>{c}</option>)}
          </select>
        </div>
      </div>
      <div>
        <label htmlFor="c-msg" className="mb-1 block text-sm font-medium">Message *</label>
        <textarea id="c-msg" rows={4} className={cls} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} placeholder="How can we help?" />
        {errors.message && <p className="mt-1 text-xs text-red-600">{errors.message}</p>}
      </div>
      <button type="submit" className="btn-primary w-full sm:w-auto">Send Enquiry</button>
    </form>
  );
}
