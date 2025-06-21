"use client";
import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Sparkles, Mail, Phone, User } from "lucide-react";
import TopNavBar from "@/components/TopNavBar";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend or an email service
    setSubmitted(true);
  };

  return (
    <>
      <TopNavBar />
      <div className="min-h-screen bg-gradient-to-br from-indigo-600 to-purple-700 flex flex-col items-center justify-center p-4 pt-24">
        <Card className="w-full max-w-lg bg-white/10 backdrop-blur border border-white/20 text-white shadow-lg">
          <CardContent className="p-8">
            <div className="flex flex-col items-center mb-6">
              <Sparkles className="text-yellow-400 animate-pulse h-8 w-8 mb-2" />
              <h1 className="text-3xl font-bold mb-1">Contact Us</h1>
              <p className="text-indigo-100 text-center">
                We'd love to hear from you! Fill out the form below and our team will get back to you soon.
              </p>
            </div>
            {submitted ? (
              <div className="text-center py-8">
                <div className="text-2xl font-semibold text-green-200 mb-2">Thank you!</div>
                <div className="text-indigo-100">Your message has been sent.</div>
              </div>
            ) : (
              <form className="space-y-6" onSubmit={handleSubmit} autoComplete="off">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-1">
                    Name
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-2.5 text-indigo-400 w-5 h-5" />
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={form.name}
                      onChange={handleChange}
                      className="pl-10 pr-3 py-2 w-full rounded-lg bg-white/80 text-indigo-900 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                      placeholder="Your Name"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-1">
                    Email
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-2.5 text-indigo-400 w-5 h-5" />
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      className="pl-10 pr-3 py-2 w-full rounded-lg bg-white/80 text-indigo-900 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                      placeholder="you@email.com"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium mb-1">
                    Phone Number
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-2.5 text-indigo-400 w-5 h-5" />
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      className="pl-10 pr-3 py-2 w-full rounded-lg bg-white/80 text-indigo-900 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                      placeholder="Your Phone Number"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    value={form.message}
                    onChange={handleChange}
                    rows={4}
                    className="pl-3 pr-3 py-2 w-full rounded-lg bg-white/80 text-indigo-900 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                    placeholder="Type your message here..."
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-indigo-600 hover:bg-indigo-700 text-white rounded-full px-5 py-2 text-md font-semibold shadow"
                >
                  Send Message
                </Button>
              </form>
            )}
          </CardContent>
        </Card>
      </div>
    </>
  );
}