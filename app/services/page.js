"use client";
import React from "react";
import Link from "next/link";
import TopNavBar from "@/components/TopNavBar";
import {
  ShieldCheck,
  CircuitBoard,
  Puzzle,
  BellRing,
  FileCheck,
  Factory,
  Zap,
  Train,
  Fuel,
  Warehouse,
  FlaskConical,
  Wrench,
  Globe,
  Repeat,
  BarChart3,
  Settings,
  Lock,
} from "lucide-react";

const features = [
  {
    icon: ShieldCheck,
    title: "Custom Interlocks",
    desc: "Mechanical, electrical, or software — built for your workflow.",
  },
  {
    icon: CircuitBoard,
    title: "Digital Logic",
    desc: "Smart interlocks for SCADA, PLC, IoT, and automation systems.",
  },
  {
    icon: Puzzle,
    title: "End-to-End Integration",
    desc: "Assessment, install, commissioning — seamless with your systems.",
  },
  {
    icon: BellRing,
    title: "Fail-Safe & Alerts",
    desc: "Redundant, safe by design — real-time dashboards & notifications.",
  },
  {
    icon: FileCheck,
    title: "Compliance",
    desc: "IEC, OSHA, ISO 13849, SIL — safety standards built in.",
  },
];

const industries = [
  { icon: Factory, label: "Manufacturing" },
  { icon: Zap, label: "Power & Energy" },
  { icon: Train, label: "Railways" },
  { icon: Fuel, label: "Oil & Gas" },
  { icon: Warehouse, label: "Warehouses" },
  { icon: FlaskConical, label: "Medical / Lab" },
];

const whyUs = [
  { icon: Wrench, text: "Proven engineering" },
  { icon: Globe, text: "IoT-enabled" },
  { icon: Repeat, text: "Retrofit ready" },
  { icon: BarChart3, text: "Data-driven safety" },
  { icon: Settings, text: "Custom logic" },
  { icon: Lock, text: "Zero conflict" },
];

export default function ServicesPage() {
  return (
    <>
      <TopNavBar />
      <main className="min-h-screen bg-slate-50 pt-20">
        <section className="border-b border-slate-200 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 py-16 text-center">
            <div className="inline-flex items-center gap-2 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-700 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.15em] mb-4">
              <ShieldCheck className="h-3.5 w-3.5" /> Services
            </div>
            <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-slate-900 mb-3">
              Interlocking System as a Service
            </h1>
            <p className="text-slate-600 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
              Ensuring safety, precision, and control — advanced interlocks that
              protect assets, enhance safety, and streamline operations.
            </p>
          </div>
        </section>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-14 sm:py-16 flex flex-col gap-14">
          <section>
            <h2 className="text-xs font-semibold uppercase tracking-[0.15em] text-slate-500 mb-4">
              What we offer
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {features.map((f, i) => {
                const Icon = f.icon;
                return (
                  <div
                    key={i}
                    className="flex items-start gap-4 bg-white border border-slate-200 rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow"
                  >
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-50 text-indigo-600 ring-1 ring-indigo-100 shrink-0">
                      <Icon className="h-5 w-5" />
                    </span>
                    <div>
                      <div className="font-semibold text-slate-900">
                        {f.title}
                      </div>
                      <div className="text-slate-600 text-sm mt-1 leading-relaxed">
                        {f.desc}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>

          <section>
            <h2 className="text-xs font-semibold uppercase tracking-[0.15em] text-slate-500 mb-4">
              Industries we serve
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
              {industries.map((ind, i) => {
                const Icon = ind.icon;
                return (
                  <div
                    key={i}
                    className="flex flex-col items-center bg-white border border-slate-200 rounded-xl px-3 py-4 shadow-sm hover:shadow-md transition-shadow"
                  >
                    <Icon className="h-5 w-5 text-indigo-600 mb-2" />
                    <span className="text-slate-700 font-medium text-xs text-center">
                      {ind.label}
                    </span>
                  </div>
                );
              })}
            </div>
          </section>

          <section>
            <h2 className="text-xs font-semibold uppercase tracking-[0.15em] text-slate-500 mb-4">
              Why work with us
            </h2>
            <div className="flex flex-wrap gap-2">
              {whyUs.map((item, i) => {
                const Icon = item.icon;
                return (
                  <div
                    key={i}
                    className="inline-flex items-center gap-2 bg-white border border-slate-200 rounded-full px-4 py-2 shadow-sm text-slate-700 text-sm font-medium"
                  >
                    <Icon className="h-4 w-4 text-indigo-600" />
                    <span>{item.text}</span>
                  </div>
                );
              })}
            </div>
          </section>

          <section>
            <div className="bg-white border border-slate-200 rounded-2xl p-8 sm:p-10 shadow-sm text-center max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-slate-900 mb-2">
                Let's make your operations safer
              </h3>
              <p className="text-slate-600 mb-6 text-sm sm:text-base leading-relaxed">
                We don't just install systems — we engineer trust. Free site
                evaluation, safety audit, or a demo of smart interlocks — get in
                touch.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center rounded-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-6 py-2.5 text-sm shadow-sm transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}