"use client";
import React, { useState } from "react";
import { Mail, Phone, User, Send, Clock, CheckCircle2 } from "lucide-react";
import TopNavBar from "@/components/TopNavBar";
import SiteFooter from "@/components/SiteFooter";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      // Parse defensively: a misrouted request can return HTML with a 200,
      // which must not be treated as success.
      const data = await res.json().catch(() => null);
      if (!res.ok || !data?.success) {
        throw new Error(data?.error || "Failed to send message. Please email us directly.");
      }
      setSubmitted(true);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const inputClass =
    "pl-10 pr-3 py-2.5 w-full rounded-lg bg-white text-slate-900 border border-slate-300 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-950/10 focus:border-slate-950 transition-colors";

  return (
    <>
      <TopNavBar />
      <main className="min-h-screen bg-white">
        <section className="relative bg-slate-950 overflow-hidden">
          <div
            className="absolute inset-0 opacity-[0.07]"
            style={{
              backgroundImage:
                "linear-gradient(to right, #64748b 1px, transparent 1px), linear-gradient(to bottom, #64748b 1px, transparent 1px)",
              backgroundSize: "48px 48px",
            }}
          />
          <div className="relative max-w-6xl mx-auto px-4 sm:px-6 pt-28 pb-14 sm:pt-36 sm:pb-16">
            <div className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-400 mb-5">
              <span className="h-1.5 w-1.5 rounded-full bg-red-600" />
              Get in touch
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-white max-w-2xl leading-tight">
              Let&apos;s talk about your project
            </h1>
            <p className="mt-5 text-slate-400 text-base sm:text-lg max-w-2xl leading-relaxed">
              Tell us your requirements — voltage, capacity, form factor, or a
              safety challenge — and our engineers will get back to you.
            </p>
          </div>
        </section>

        <section className="max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
            <div className="lg:col-span-2">
              <h2 className="text-xl font-bold text-slate-950 mb-6">
                Contact information
              </h2>
              <ul className="space-y-5">
                <li className="flex items-start gap-4">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-slate-950 text-white shrink-0">
                    <Mail className="h-4 w-4" />
                  </span>
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-[0.12em] text-slate-500">
                      Email
                    </div>
                    <a
                      href="mailto:info@vavtronics.com"
                      className="text-sm font-semibold text-slate-900 hover:text-red-600 transition-colors"
                    >
                      info@vavtronics.com
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-slate-950 text-white shrink-0">
                    <Phone className="h-4 w-4" />
                  </span>
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-[0.12em] text-slate-500">
                      Phone
                    </div>
                    <span className="text-sm font-semibold text-slate-900">
                      +91 93557 18377
                    </span>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-slate-950 text-white shrink-0">
                    <Clock className="h-4 w-4" />
                  </span>
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-[0.12em] text-slate-500">
                      Response time
                    </div>
                    <span className="text-sm font-semibold text-slate-900">
                      Within 1 business day
                    </span>
                  </div>
                </li>
              </ul>

              <div className="mt-10 rounded-2xl bg-slate-50 border border-slate-200 p-6">
                <div className="text-sm font-semibold text-slate-950 mb-2">
                  What to include
                </div>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Target voltage and capacity, expected discharge current,
                  application environment, and any certification requirements —
                  the more detail, the faster we can quote.
                </p>
              </div>
            </div>

            <div className="lg:col-span-3">
              <div className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-10">
                {submitted ? (
                  <div className="text-center py-10">
                    <CheckCircle2 className="h-10 w-10 text-red-600 mx-auto mb-4" />
                    <div className="text-xl font-bold text-slate-950 mb-2">
                      Thank you.
                    </div>
                    <div className="text-slate-600 text-sm">
                      Your message has been sent — we&apos;ll be in touch shortly.
                    </div>
                  </div>
                ) : (
                  <form className="space-y-5" onSubmit={handleSubmit} autoComplete="off">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1.5">
                          Name
                        </label>
                        <div className="relative">
                          <User className="absolute left-3 top-3 text-slate-400 w-4 h-4" />
                          <input
                            type="text"
                            id="name"
                            name="name"
                            required
                            value={form.name}
                            onChange={handleChange}
                            className={inputClass}
                            placeholder="Your name"
                          />
                        </div>
                      </div>
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-1.5">
                          Phone
                        </label>
                        <div className="relative">
                          <Phone className="absolute left-3 top-3 text-slate-400 w-4 h-4" />
                          <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={form.phone}
                            onChange={handleChange}
                            className={inputClass}
                            placeholder="Optional"
                          />
                        </div>
                      </div>
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1.5">
                        Email
                      </label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-3 text-slate-400 w-4 h-4" />
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          value={form.email}
                          onChange={handleChange}
                          className={inputClass}
                          placeholder="you@example.com"
                        />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1.5">
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        value={form.message}
                        onChange={handleChange}
                        rows={5}
                        className="px-3 py-2.5 w-full rounded-lg bg-white text-slate-900 border border-slate-300 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-950/10 focus:border-slate-950 transition-colors"
                        placeholder="Tell us about your project or requirements…"
                      />
                    </div>
                    {error && <div className="text-red-600 text-sm">{error}</div>}
                    <button
                      type="submit"
                      className="w-full inline-flex items-center justify-center gap-2 rounded-lg bg-red-600 hover:bg-red-500 disabled:opacity-60 text-white px-5 py-3 text-sm font-semibold transition-colors"
                      disabled={loading}
                    >
                      {loading ? (
                        "Sending…"
                      ) : (
                        <>
                          <Send className="h-4 w-4" /> Send Message
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
