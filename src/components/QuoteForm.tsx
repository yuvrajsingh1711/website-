"use client";

import { useState } from "react";
import { CheckCircle2 } from "lucide-react";
import { categories } from "@/data/products";
import { whatsappLink, quoteEnquiryMessage } from "@/lib/whatsapp";

export default function QuoteForm({ preselectedProduct = "" }: { preselectedProduct?: string }) {
  const [form, setForm] = useState({
    name: "",
    mobile: "",
    category: "",
    productName: preselectedProduct,
    quantity: "",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [success, setSuccess] = useState(false);

  function update<K extends keyof typeof form>(key: K, value: string) {
    setForm((f) => ({ ...f, [key]: value }));
  }

  function validate() {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = "Please enter your name.";
    if (!/^[6-9]\d{9}$/.test(form.mobile.replace(/\s/g, "")))
      e.mobile = "Enter a valid 10-digit mobile number.";
    if (!form.category) e.category = "Please select a product category.";
    if (!form.quantity.trim()) e.quantity = "Please enter approximate quantity.";
    setErrors(e);
    return Object.keys(e).length === 0;
  }

  function onSubmit(ev: React.FormEvent) {
    ev.preventDefault();
    if (!validate()) return;
    setSuccess(true);
  }

  if (success) {
    const waMsg = quoteEnquiryMessage({
      name: form.name,
      category: form.category,
      productName: form.productName,
      quantity: form.quantity,
      message: form.message,
    });
    return (
      <div className="rounded-2xl border border-green-200 bg-green-50 p-8 text-center" role="status">
        <CheckCircle2 className="mx-auto text-green-600" size={44} />
        <h3 className="mt-3 font-serif text-2xl font-bold text-charcoal">Enquiry Received!</h3>
        <p className="mx-auto mt-2 max-w-md text-sm text-stone-600">
          Thank you, {form.name}. Your quote request for <strong>{form.category}</strong>
          {form.productName ? ` (${form.productName})` : ""} has been noted. We will call you
          back shortly on {form.mobile}. For a faster response, send this enquiry on WhatsApp.
        </p>
        <div className="mt-5 flex flex-col justify-center gap-3 sm:flex-row">
          <a
            href={whatsappLink(waMsg)}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary !bg-[#25D366] hover:!bg-[#1eb856]"
          >
            Send on WhatsApp
          </a>
          <button onClick={() => { setSuccess(false); setForm({ name: "", mobile: "", category: "", productName: "", quantity: "", message: "" }); }} className="btn-outline">
            New Enquiry
          </button>
        </div>
      </div>
    );
  }

  const inputCls =
    "w-full rounded-xl border border-stone-300 bg-white px-4 py-3 text-sm text-charcoal placeholder:text-stone-400 focus:border-bronze-400 focus:outline-none focus:ring-2 focus:ring-bronze-200";

  return (
    <form onSubmit={onSubmit} noValidate className="grid gap-4" aria-label="Quote request form">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="q-name" className="mb-1 block text-sm font-medium">Customer Name *</label>
          <input id="q-name" className={inputCls} placeholder="e.g. Ramesh Kumar" value={form.name} onChange={(e) => update("name", e.target.value)} />
          {errors.name && <p className="mt-1 text-xs text-red-600">{errors.name}</p>}
        </div>
        <div>
          <label htmlFor="q-mobile" className="mb-1 block text-sm font-medium">Mobile Number *</label>
          <input id="q-mobile" className={inputCls} placeholder="10-digit mobile" inputMode="numeric" value={form.mobile} onChange={(e) => update("mobile", e.target.value)} />
          {errors.mobile && <p className="mt-1 text-xs text-red-600">{errors.mobile}</p>}
        </div>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="q-cat" className="mb-1 block text-sm font-medium">Product Category *</label>
          <select id="q-cat" className={inputCls} value={form.category} onChange={(e) => update("category", e.target.value)}>
            <option value="">Select category</option>
            {categories.map((c) => (
              <option key={c} value={c}>{c}</option>
            ))}
          </select>
          {errors.category && <p className="mt-1 text-xs text-red-600">{errors.category}</p>}
        </div>
        <div>
          <label htmlFor="q-prod" className="mb-1 block text-sm font-medium">Product Name</label>
          <input id="q-prod" className={inputCls} placeholder="e.g. Carrara White Marble" value={form.productName} onChange={(e) => update("productName", e.target.value)} />
        </div>
      </div>
      <div>
        <label htmlFor="q-qty" className="mb-1 block text-sm font-medium">Approximate Quantity *</label>
        <input id="q-qty" className={inputCls} placeholder="e.g. 800 sq.ft / 20 boxes" value={form.quantity} onChange={(e) => update("quantity", e.target.value)} />
        {errors.quantity && <p className="mt-1 text-xs text-red-600">{errors.quantity}</p>}
      </div>
      <div>
        <label htmlFor="q-msg" className="mb-1 block text-sm font-medium">Message</label>
        <textarea id="q-msg" rows={4} className={inputCls} placeholder="Room size, colour preference, delivery location..." value={form.message} onChange={(e) => update("message", e.target.value)} />
      </div>
      <button type="submit" className="btn-primary w-full sm:w-auto">Send Quote Request</button>
      <p className="text-xs text-stone-500">Frontend validation only. Connect a backend / WhatsApp API later to store enquiries.</p>
    </form>
  );
}
