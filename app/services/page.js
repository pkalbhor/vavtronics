"use client";
import React from "react";
import TopNavBar from "@/components/TopNavBar";

const features = [
  {
    icon: (
      <span className="inline-flex items-center justify-center h-10 w-10 rounded-full bg-indigo-600 text-white shadow">
        {/* Shield Check Icon */}
        <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 3l7 4v5c0 5.25-3.5 9.74-7 11-3.5-1.26-7-5.75-7-11V7l7-4z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4" />
        </svg>
      </span>
    ),
    title: "Custom Interlocks",
    desc: "Mechanical, electrical, or software — built for your workflow.",
  },
  {
    icon: (
      <span className="inline-flex items-center justify-center h-10 w-10 rounded-full bg-purple-600 text-white shadow">
        {/* Chip Icon */}
        <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
          <rect x="7" y="7" width="10" height="10" rx="2" />
          <path d="M3 9h2M3 15h2M19 9h2M19 15h2M9 3v2M15 3v2M9 19v2M15 19v2" />
        </svg>
      </span>
    ),
    title: "Digital Logic",
    desc: "Smart interlocks for SCADA, PLC, IoT, automation.",
  },
  {
    icon: (
      <span className="inline-flex items-center justify-center h-10 w-10 rounded-full bg-indigo-500 text-white shadow">
        {/* Puzzle Icon */}
        <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
          <path d="M21 13.255V7a2 2 0 0 0-2-2h-6.255a1 1 0 0 1-1-1V3a1 1 0 0 0-2 0v1a1 1 0 0 1-1 1H5a2 2 0 0 0-2 2v6.255a1 1 0 0 1-1 1H3a1 1 0 0 0 0 2h1a1 1 0 0 1 1 1V19a2 2 0 0 0 2 2h6.255a1 1 0 0 1 1 1V21a1 1 0 0 0 2 0v-1a1 1 0 0 1 1-1H19a2 2 0 0 0 2-2v-6.255a1 1 0 0 1-1-1h1a1 1 0 0 0 0-2h-1a1 1 0 0 1-1-1z" />
        </svg>
      </span>
    ),
    title: "End-to-End Integration",
    desc: "Assessment, install, commissioning — seamless with your systems.",
  },
  {
    icon: (
      <span className="inline-flex items-center justify-center h-10 w-10 rounded-full bg-purple-500 text-white shadow">
        {/* Alert Icon */}
        <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01M21 12c0 4.97-4.03 9-9 9s-9-4.03-9-9 4.03-9 9-9 9 4.03 9 9z" />
        </svg>
      </span>
    ),
    title: "Fail-Safe & Alerts",
    desc: "Redundant, safe by design. Real-time dashboards & notifications.",
  },
  {
    icon: (
      <span className="inline-flex items-center justify-center h-10 w-10 rounded-full bg-indigo-400 text-white shadow">
        {/* Document Check Icon */}
        <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
          <path d="M9 12l2 2 4-4" />
          <path d="M7 7V5a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v2" />
          <rect x="3" y="7" width="18" height="10" rx="2" />
        </svg>
      </span>
    ),
    title: "Compliance",
    desc: "IEC, OSHA, ISO 13849, SIL — safety standards built-in.",
  },
];

const industries = [
  { icon: "🏭", label: "Manufacturing" },
  { icon: "⚡", label: "Power & Energy" },
  { icon: "🚆", label: "Railways" },
  { icon: "🛢️", label: "Oil & Gas" },
  { icon: "🏬", label: "Warehouses" },
  { icon: "🧪", label: "Medical/Lab" },
];

const whyUs = [
  { icon: "🔧", text: "Proven engineering" },
  { icon: "🌐", text: "IoT-enabled" },
  { icon: "🔁", text: "Retrofit ready" },
  { icon: "📊", text: "Data-driven safety" },
  { icon: "⚙️", text: "Custom logic" },
  { icon: "🔐", text: "Zero conflict" },
];

export default function ServicesPage() {
  return (
    <>
      <TopNavBar />
      <div className="min-h-screen bg-gradient-to-br from-indigo-600 to-purple-700 flex flex-col items-center pt-24 px-4">
        <main className="w-full max-w-4xl flex flex-col items-center flex-1 py-12">
          {/* Header */}
          <div className="bg-white/90 rounded-xl shadow-lg px-8 py-8 mb-8 w-full text-center transition-all duration-700 animate-fade-in">
            <div className="flex items-center justify-center mb-2">
              <span className="text-4xl mr-2">🛡️</span>
              <h1 className="text-3xl md:text-4xl font-bold text-indigo-700">Interlocking System as a Service</h1>
            </div>
            <div className="text-indigo-800 font-medium mb-2">Ensuring Safety, Precision & Control</div>
            <div className="text-gray-700 text-base md:text-lg">
              Upgrade with <span className="font-semibold">advanced interlocks</span> — protect assets, enhance safety, streamline control.
            </div>
          </div>

          {/* What We Offer */}
          <section className="w-full mb-8">
            <h2 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
              <span className="text-green-300">✅</span> What We Offer
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {features.map((f, i) => (
                <div
                  key={i}
                  className="flex items-start gap-4 bg-white/80 rounded-lg shadow p-4 transition-transform duration-500 hover:scale-105"
                >
                  {f.icon}
                  <div>
                    <div className="font-semibold text-indigo-700">{f.title}</div>
                    <div className="text-gray-700 text-sm">{f.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Industries */}
          <section className="w-full mb-8">
            <h2 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
              <span className="text-indigo-200">🏭</span> Industries
            </h2>
            <div className="flex flex-wrap gap-4 justify-center">
              {industries.map((ind, i) => (
                <div
                  key={i}
                  className="flex flex-col items-center bg-white/80 rounded-lg px-4 py-2 shadow transition-all duration-500 hover:bg-indigo-50"
                >
                  <span className="text-2xl mb-1">{ind.icon}</span>
                  <span className="text-indigo-700 font-medium text-sm">{ind.label}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Why Choose Us */}
          <section className="w-full mb-8">
            <h2 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
              <span className="text-yellow-200">💼</span> Why Us?
            </h2>
            <div className="flex flex-wrap gap-4 justify-center">
              {whyUs.map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2 bg-white/80 rounded-full px-4 py-2 shadow text-indigo-700 font-medium transition-all duration-500 hover:bg-indigo-50"
                >
                  <span className="text-lg">{item.icon}</span>
                  <span className="text-sm">{item.text}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Call to Action */}
          <section className="w-full flex flex-col items-center mt-4">
            <div className="bg-indigo-100/90 rounded-xl px-6 py-6 shadow text-center max-w-xl transition-all duration-700 animate-fade-in">
              <div className="text-2xl mb-2">📞 Let’s Make Your Operations Safer</div>
              <div className="text-indigo-700 font-medium mb-2">
                We don’t just install systems — we engineer trust.
              </div>
              <div className="text-gray-700 mb-4 text-sm">
                Free site evaluation, safety audit, or a demo of smart interlocks — get in touch!
              </div>
              <a
                href="/contact"
                className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white rounded-full px-6 py-2 font-semibold shadow transition"
              >
                Contact Us
              </a>
            </div>
          </section>
        </main>
      </div>
      <style jsx global>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(32px);}
          to { opacity: 1; transform: translateY(0);}
        }
        .animate-fade-in {
          animation: fade-in 0.8s cubic-bezier(0.4,0,0.2,1) both;
        }
      `}</style>
    </>
  );
}