"use client";
import React from "react";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  BatteryCharging,
  CircuitBoard,
  Cpu,
  Gauge,
  Layers,
  Mail,
  Phone,
  Shield,
  Wrench,
  Zap,
} from "lucide-react";
import * as motion from "framer-motion/client";
import TopNavBar from "@/components/TopNavBar";

function SectionCard({ children }) {
  return (
    <Card className="bg-white border border-slate-200 shadow-sm hover:shadow-md transition-shadow rounded-2xl">
      <CardContent className="p-6 sm:p-8">{children}</CardContent>
    </Card>
  );
}

function TileHeader({ icon: Icon, title }) {
  return (
    <div className="flex items-center gap-3 mb-3">
      <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-50 text-indigo-600 ring-1 ring-indigo-100">
        <Icon className="h-5 w-5" />
      </span>
      <h3 className="text-lg sm:text-xl font-semibold text-slate-900">{title}</h3>
    </div>
  );
}

function TagPills({ tags }) {
  return (
    <div className="flex flex-wrap gap-2 mb-5">
      {tags.map((t) => (
        <span
          key={t}
          className="inline-flex items-center rounded-full bg-indigo-50 border border-indigo-100 text-indigo-700 text-xs font-medium px-3 py-1"
        >
          {t}
        </span>
      ))}
    </div>
  );
}

function ProductsSection() {
  return (
    <SectionCard>
      <TileHeader icon={Cpu} title="Products" />
      <p className="text-sm text-slate-600 leading-relaxed mb-4">
        Advanced Battery Management Systems, custom Li-ion battery packs, and
        IoT solutions for battery fleet monitoring.
      </p>
      <TagPills tags={["BMS", "Battery Packs", "IoT"]} />
      <Link
        href="/products"
        className="inline-flex items-center gap-1.5 text-sm font-semibold text-indigo-600 hover:text-indigo-700"
      >
        View products <ArrowRight className="h-4 w-4" />
      </Link>
    </SectionCard>
  );
}

function ServicesSection() {
  return (
    <SectionCard>
      <TileHeader icon={Layers} title="Services" />
      <p className="text-sm text-slate-600 leading-relaxed mb-4">
        Software solutions and interlocking systems for battery testing and
        automotive processes — engineered for safety and scale.
      </p>
      <TagPills tags={["Software", "Interlocking", "Automation"]} />
      <Link
        href="/services"
        className="inline-flex items-center gap-1.5 text-sm font-semibold text-indigo-600 hover:text-indigo-700"
      >
        View services <ArrowRight className="h-4 w-4" />
      </Link>
    </SectionCard>
  );
}

function EngineeringServicesSection() {
  return (
    <SectionCard>
      <TileHeader icon={Wrench} title="Engineering Services" />
      <p className="text-sm text-slate-600 leading-relaxed mb-4">
        Expert engineering consultation, prototyping, and turnkey delivery
        tailored to your product and manufacturing requirements.
      </p>
      <TagPills tags={["Consulting", "Prototyping", "Turnkey"]} />
      <Link
        href="/contact"
        className="inline-flex items-center gap-1.5 text-sm font-semibold text-indigo-600 hover:text-indigo-700"
      >
        Discuss your project <ArrowRight className="h-4 w-4" />
      </Link>
    </SectionCard>
  );
}

function ContactSection() {
  return (
    <SectionCard>
      <TileHeader icon={Phone} title="Contact" />
      <ul className="space-y-2 text-sm text-slate-700 mb-5">
        <li className="flex items-center gap-2">
          <Mail className="h-4 w-4 text-slate-400" />
          <a
            href="mailto:info@vavtronics.com"
            className="text-indigo-600 hover:text-indigo-700"
          >
            info@vavtronics.com
          </a>
        </li>
        <li className="flex items-center gap-2">
          <Phone className="h-4 w-4 text-slate-400" />
          <span>+91 93557 18377</span>
        </li>
      </ul>
      <Link href="/contact">
        <Button className="bg-indigo-600 hover:bg-indigo-700 text-white rounded-full px-5 py-2 text-sm font-semibold shadow-sm">
          Get in Touch
        </Button>
      </Link>
    </SectionCard>
  );
}

function BatteryPackVisual() {
  const cols = 8;
  const rows = 4;
  const cellR = 6;
  const gap = 18;
  const startX = 34;
  const startY = 58;
  return (
    <svg
      viewBox="0 0 240 200"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full max-w-[280px] drop-shadow-md"
      role="img"
      aria-label="Vavtronics 14S4P Li-ion battery pack"
    >
      <defs>
        <linearGradient id="bpCase" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#1e293b" />
          <stop offset="100%" stopColor="#0b1220" />
        </linearGradient>
        <linearGradient id="bpCell" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#cbd5e1" />
          <stop offset="45%" stopColor="#f1f5f9" />
          <stop offset="100%" stopColor="#64748b" />
        </linearGradient>
      </defs>
      <rect x="46" y="22" width="26" height="14" rx="3" fill="#ef4444" />
      <text x="59" y="33" textAnchor="middle" fontSize="11" fontWeight="700" fill="#fff" fontFamily="monospace">+</text>
      <rect x="168" y="22" width="26" height="14" rx="3" fill="#475569" />
      <text x="181" y="33" textAnchor="middle" fontSize="12" fontWeight="700" fill="#fff" fontFamily="monospace">−</text>
      <rect x="20" y="36" width="200" height="146" rx="12" fill="url(#bpCase)" stroke="#334155" strokeWidth="2" />
      {Array.from({ length: rows }).map((_, r) =>
        Array.from({ length: cols }).map((__, c) => {
          const cx = startX + c * gap;
          const cy = startY + r * gap;
          return (
            <g key={`${r}-${c}`}>
              <circle cx={cx} cy={cy} r={cellR} fill="url(#bpCell)" stroke="#334155" strokeWidth="0.8" />
              <circle cx={cx} cy={cy} r={cellR - 3} fill="#0f172a" opacity="0.35" />
            </g>
          );
        })
      )}
      <rect x="60" y="152" width="120" height="20" rx="4" fill="#0f172a" stroke="#1e293b" strokeWidth="1" />
      <text x="120" y="165" textAnchor="middle" fontSize="8.5" fill="#94a3b8" fontFamily="monospace" letterSpacing="2">
        VAVTRONICS · 14S4P
      </text>
    </svg>
  );
}

function TrailerStat({ icon: Icon, label, value }) {
  return (
    <div className="flex items-start gap-2.5 rounded-lg bg-slate-50 border border-slate-100 p-3">
      <Icon className="h-4 w-4 text-indigo-600 shrink-0 mt-0.5" />
      <div className="min-w-0">
        <div className="text-[10px] font-semibold uppercase tracking-[0.15em] text-slate-500">
          {label}
        </div>
        <div className="text-sm font-medium text-slate-900">{value}</div>
      </div>
    </div>
  );
}

function BatteryPackTrailer() {
  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.15 }}
      className="w-full"
    >
      <div className="overflow-hidden rounded-2xl bg-white border border-slate-200 shadow-sm">
        <div className="grid grid-cols-1 md:grid-cols-5 items-center">
          <div className="md:col-span-2 flex items-center justify-center p-6 sm:p-8 bg-gradient-to-br from-slate-50 to-indigo-50">
            <BatteryPackVisual />
          </div>
          <div className="md:col-span-3 p-6 sm:p-8 flex flex-col gap-4">
            <div className="inline-flex items-center gap-2 self-start rounded-full bg-indigo-50 border border-indigo-100 text-indigo-700 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.15em]">
              <BatteryCharging className="h-3.5 w-3.5" /> New · Battery Packs
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 leading-tight">
              Custom Li-ion Battery Packs — 14S4P &amp; 20S8P
            </h3>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Engineered for LEVs, e-motorcycles, and stationary storage — with
              integrated BMS, laser-welded interconnects, and industrial-grade
              housing.
            </p>
            <div className="grid grid-cols-2 gap-2.5 mt-1">
              <TrailerStat icon={Zap} label="Voltage" value="52 V – 72 V" />
              <TrailerStat icon={Gauge} label="Capacity" value="up to 2.88 kWh" />
              <TrailerStat icon={CircuitBoard} label="Chemistry" value="Li-ion NMC / LFP" />
              <TrailerStat icon={Shield} label="Safety" value="Multi-layer BMS" />
            </div>
            <Link
              href="/products"
              className="mt-2 inline-flex items-center gap-2 self-start rounded-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-5 py-2.5 text-sm shadow-sm transition-colors"
            >
              Explore Battery Packs <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Home() {
  return (
    <>
      <TopNavBar />
      <main className="min-h-screen bg-slate-50 pt-20">
        <section className="border-b border-slate-200 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 py-16 sm:py-20 text-center">
            <div className="inline-flex items-center gap-2 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-700 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.15em] mb-5">
              Vavtronics
            </div>
            <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-slate-900">
              Smart Solutions for a Connected World
            </h1>
            <p className="mt-4 text-slate-600 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
              We design and manufacture Battery Management Systems, Li-ion
              battery packs, and IoT platforms that power reliable
              electrification.
            </p>
            <div className="mt-8 flex flex-wrap gap-3 justify-center">
              <Link href="/products">
                <Button className="bg-indigo-600 hover:bg-indigo-700 text-white rounded-full px-6 py-2.5 text-sm font-semibold shadow-sm">
                  Explore Products
                </Button>
              </Link>
              <Link href="/contact">
                <Button className="bg-white text-slate-900 border border-slate-200 hover:bg-slate-50 rounded-full px-6 py-2.5 text-sm font-semibold shadow-sm">
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </section>

        <section className="max-w-5xl mx-auto px-4 sm:px-6 py-14 sm:py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            <ProductsSection />
            <ServicesSection />
            <EngineeringServicesSection />
            <ContactSection />
          </motion.div>
        </section>

        <section className="max-w-5xl mx-auto px-4 sm:px-6 pb-20">
          <BatteryPackTrailer />
        </section>
      </main>
    </>
  );
}