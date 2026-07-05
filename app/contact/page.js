"use client";
import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, User, Send } from "lucide-react";
import TopNavBar from "@/components/TopNavBar";

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
      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "Failed to send message.");
      }
      setSubmitted(true);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const inputClass =
    "pl-10 pr-3 py-2.5 w-full rounded-lg bg-white text-slate-900 border border-slate-200 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors";

  return (
    <>
      <TopNavBar />
      <main className="min-h-screen bg-slate-50 pt-20">
        <section className="border-b border-slate-200 bg-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 py-14 text-center">
            <div className="inline-flex items-center gap-2 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-700 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.15em] mb-4">
              Get in touch
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 mb-3">
              Contact Us
            </h1>
            <p className="text-slate-600 max-w-xl mx-auto leading-relaxed">
              Fill out the form and our team will get back to you shortly.
            </p>
          </div>
        </section>

        <section className="max-w-lg mx-auto px-4 sm:px-6 py-12">
          <Card className="bg-white border border-slate-200 shadow-sm rounded-2xl">
            <CardContent className="p-6 sm:p-8">
              {submitted ? (
                <div className="text-center py-6">
                  <div className="text-xl font-semibold text-slate-900 mb-2">
                    Thank you.
                  </div>
                  <div className="text-slate-600 text-sm">
                    Your message has been sent — we'll be in touch shortly.
                  </div>
                </div>
              ) : (
                <form className="space-y-5" onSubmit={handleSubmit} autoComplete="off">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1.5">
                      Name
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-3 text-slate-400 w-5 h-5" />
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
                    <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1.5">
                      Email
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-3 text-slate-400 w-5 h-5" />
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
                    <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-1.5">
                      Phone
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-3 text-slate-400 w-5 h-5" />
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
                      rows={4}
                      className="px-3 py-2.5 w-full rounded-lg bg-white text-slate-900 border border-slate-200 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
                      placeholder="How can we help?"
                    />
                  </div>
                  {error && (
                    <div className="text-red-600 text-sm">{error}</div>
                  )}
                  <Button
                    type="submit"
                    className="w-full bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg px-5 py-2.5 text-sm font-semibold shadow-sm inline-flex items-center justify-center gap-2"
                    disabled={loading}
                  >
                    {loading ? (
                      "Sending..."
                    ) : (
                      <>
                        <Send className="h-4 w-4" /> Send Message
                      </>
                    )}
                  </Button>
                </form>
              )}
            </CardContent>
          </Card>
        </section>
      </main>
    </>
  );
}