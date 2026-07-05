"use client";
import React from "react";
import Link from "next/link";
import TopNavBar from "@/components/TopNavBar";
import SiteFooter from "@/components/SiteFooter";
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
  ArrowRight,
} from "lucide-react";

const features = [
  {
    icon: ShieldCheck,
    title: "Custom Interlocks",
    desc: "Mechanical, electrical, or software-based — designed around your specific workflow and failure modes.",
  },
  {
    icon: CircuitBoard,
    title: "Digital Logic",
    desc: "Smart interlocks that integrate with SCADA, PLC, IoT, and plant automation systems.",
  },
  {
    icon: Puzzle,
    title: "End-to-End Integration",
    desc: "Site assessment, installation, and commissioning — seamless with your existing systems.",
  },
  {
    icon: BellRing,
    title: "Fail-Safe & Alerts",
    desc: "Redundant, safe-by-design architecture with real-time dashboards and notifications.",
  },
  {
    icon: FileCheck,
    title: "Compliance",
    desc: "IEC, OSHA, ISO 13849, and SIL — recognized safety standards built in from day one.",
  },
  {
    icon: Wrench,
    title: "Retrofit & Support",
    desc: "Upgrade legacy equipment with modern interlock logic, backed by ongoing engineering support.",
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

function Eyebrow({ children, light = false }) {
  return (
    <div
      className={`inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.2em] ${
        light ? "text-slate-400" : "text-slate-500"
      }`}
    >
      <span className="h-1.5 w-1.5 rounded-full bg-red-600" />
      {children}
    </div>
  );
}

export default function ServicesPage() {
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
          <div className="relative max-w-6xl mx-auto px-4 sm:px-6 pt-28 pb-16 sm:pt-36 sm:pb-20">
            <Eyebrow light>Services · Industrial Safety</Eyebrow>
            <h1 className="mt-5 text-4xl sm:text-5xl font-bold tracking-tight text-white max-w-2xl leading-tight">
              Interlocking systems as a service
            </h1>
            <p className="mt-5 text-slate-400 text-base sm:text-lg max-w-2xl leading-relaxed">
              Safety, precision, and control — advanced interlocks that protect
              assets, safeguard people, and streamline operations across
              industrial environments.
            </p>
          </div>
        </section>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-24 flex flex-col gap-16 sm:gap-20">
          <section>
            <div className="max-w-2xl mb-10">
              <Eyebrow>What we offer</Eyebrow>
              <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-950">
                Engineered safety, end to end
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {features.map((f) => {
                const Icon = f.icon;
                return (
                  <div
                    key={f.title}
                    className="rounded-2xl border border-slate-200 bg-white p-7 transition-all hover:border-slate-300 hover:shadow-lg"
                  >
                    <span className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-slate-950 text-white mb-5">
                      <Icon className="h-5 w-5" />
                    </span>
                    <div className="font-semibold text-slate-950">{f.title}</div>
                    <div className="text-slate-600 text-sm mt-2 leading-relaxed">
                      {f.desc}
                    </div>
                  </div>
                );
              })}
            </div>
          </section>

          <section>
            <div className="max-w-2xl mb-10">
              <Eyebrow>Industries we serve</Eyebrow>
              <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-950">
                Trusted across critical sectors
              </h2>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-px rounded-2xl overflow-hidden border border-slate-200 bg-slate-200">
              {industries.map((ind) => {
                const Icon = ind.icon;
                return (
                  <div
                    key={ind.label}
                    className="flex flex-col items-center justify-center bg-white px-3 py-7 hover:bg-slate-50 transition-colors"
                  >
                    <Icon className="h-5 w-5 text-red-600 mb-2.5" />
                    <span className="text-slate-700 font-medium text-xs text-center">
                      {ind.label}
                    </span>
                  </div>
                );
              })}
            </div>
          </section>

          <section>
            <div className="max-w-2xl mb-8">
              <Eyebrow>Why work with us</Eyebrow>
            </div>
            <div className="flex flex-wrap gap-2.5">
              {whyUs.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.text}
                    className="inline-flex items-center gap-2 bg-white border border-slate-200 rounded-lg px-4 py-2.5 text-slate-700 text-sm font-medium"
                  >
                    <Icon className="h-4 w-4 text-red-600" />
                    <span>{item.text}</span>
                  </div>
                );
              })}
            </div>
          </section>

          <section>
            <div className="relative overflow-hidden rounded-3xl bg-slate-950 px-6 py-14 sm:px-16 text-center">
              <div
                className="absolute inset-0 opacity-[0.07]"
                style={{
                  backgroundImage:
                    "linear-gradient(to right, #64748b 1px, transparent 1px), linear-gradient(to bottom, #64748b 1px, transparent 1px)",
                  backgroundSize: "40px 40px",
                }}
              />
              <div className="relative">
                <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-white mb-3">
                  Let&apos;s make your operations safer
                </h3>
                <p className="text-slate-400 mb-8 leading-relaxed max-w-xl mx-auto">
                  We don&apos;t just install systems — we engineer trust. Book a
                  free site evaluation, safety audit, or a demo of smart
                  interlocks.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-lg bg-red-600 hover:bg-red-500 text-white font-semibold px-6 py-3 text-sm transition-colors"
                >
                  Contact Us <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </section>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
