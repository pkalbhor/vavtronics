"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  BatteryCharging,
  CircuitBoard,
  Cpu,
  Gauge,
  Shield,
  Thermometer,
  Wrench,
  Zap,
} from "lucide-react";
import TopNavBar from "@/components/TopNavBar";
import SiteFooter from "@/components/SiteFooter";

const stats = [
  { label: "Max Pack Capacity", value: "2.88 kWh" },
  { label: "Peak Discharge", value: "100 A" },
  { label: "Operating Range", value: "−20 to +60 °C" },
  { label: "Protection Layers", value: "5+" },
];

const capabilities = [
  {
    icon: Cpu,
    title: "Battery Management Systems",
    desc: "Precision BMS electronics with cell balancing, CAN & Bluetooth telemetry, and multi-layer protection for lithium packs.",
    tags: ["14S–20S", "CAN · BLE", "Passive & Active Balancing"],
    href: "/products",
    cta: "View products",
  },
  {
    icon: BatteryCharging,
    title: "Custom Li-ion Battery Packs",
    desc: "Laser-welded LFP and NMC packs from 48 V to 72 V, engineered for LEVs, e-motorcycles, and stationary storage.",
    tags: ["LFP · NMC", "48–72 V", "IP-rated Housing"],
    href: "/products",
    cta: "Explore packs",
  },
  {
    icon: Shield,
    title: "Interlocking Systems",
    desc: "Fail-safe industrial interlocks — mechanical, electrical, and software — integrated with SCADA, PLC, and IoT platforms.",
    tags: ["SIL / ISO 13849", "SCADA · PLC", "Retrofit Ready"],
    href: "/services",
    cta: "View services",
  },
  {
    icon: Wrench,
    title: "Engineering Services",
    desc: "Cell selection, pack architecture, BMS tuning, enclosure design — turnkey delivery tailored to your requirements.",
    tags: ["Consulting", "Prototyping", "Turnkey"],
    href: "/contact",
    cta: "Discuss your project",
  },
];

const packHighlights = [
  { icon: Zap, label: "Voltage", value: "51.2 V / 72 V" },
  { icon: Gauge, label: "Capacity", value: "up to 2.88 kWh" },
  { icon: CircuitBoard, label: "Chemistry", value: "LFP / NMC" },
  { icon: Thermometer, label: "Operating Temp", value: "−20 to +60 °C" },
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

function Hero() {
  return (
    <section className="relative bg-slate-950 overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #64748b 1px, transparent 1px), linear-gradient(to bottom, #64748b 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 pt-24 pb-16 sm:pt-32 sm:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="fade-up">
            <Eyebrow light>Battery Technology · Made in India</Eyebrow>
            <h1 className="mt-5 text-4xl sm:text-5xl lg:text-[3.4rem] font-bold tracking-tight text-white leading-[1.08]">
              Power systems engineered for{" "}
              <span className="text-red-500">reliability</span>
            </h1>
            <p className="mt-6 text-slate-400 text-base sm:text-lg leading-relaxed max-w-xl">
              VAVTRONICS designs and manufactures Battery Management Systems,
              custom Li-ion battery packs, and industrial safety systems that
              power dependable electrification — from light EVs to stationary
              storage.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/products"
                className="inline-flex items-center gap-2 rounded-lg bg-red-600 hover:bg-red-500 text-white font-semibold px-6 py-3 text-sm transition-colors"
              >
                Explore Products <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center rounded-lg border border-slate-700 text-slate-200 hover:bg-slate-900 hover:border-slate-600 font-semibold px-6 py-3 text-sm transition-colors"
              >
                Talk to an Engineer
              </Link>
            </div>
          </div>

          <div className="fade-up-delay relative">
            <div className="rounded-2xl bg-white p-6 sm:p-8 shadow-2xl ring-1 ring-white/10">
              <Image
                src="/images/battery-pack-front.jpg"
                alt="VAVTRONICS Li-ion battery pack with integrated BMS"
                width={1600}
                height={935}
                priority
                className="w-full h-auto object-contain"
              />
              <div className="mt-4 flex items-center justify-between border-t border-slate-100 pt-4">
                <div>
                  <div className="text-[10px] font-semibold uppercase tracking-[0.15em] text-slate-500">
                    Featured Product
                  </div>
                  <div className="text-sm font-semibold text-slate-900">
                    Li-ion Battery Pack · Integrated BMS
                  </div>
                </div>
                <Link
                  href="/products"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-red-600 hover:text-red-700"
                >
                  Details <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-px rounded-2xl overflow-hidden border border-slate-800 bg-slate-800">
          {stats.map((s) => (
            <div key={s.label} className="bg-slate-950 px-6 py-5">
              <div className="text-2xl font-bold text-white">{s.value}</div>
              <div className="mt-1 text-xs uppercase tracking-[0.12em] text-slate-500 font-medium">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Capabilities() {
  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
      <div className="max-w-2xl mb-12">
        <Eyebrow>What we do</Eyebrow>
        <h2 className="mt-4 text-3xl sm:text-4xl font-bold tracking-tight text-slate-950">
          From cell to system, under one roof
        </h2>
        <p className="mt-4 text-slate-600 leading-relaxed">
          Electronics, energy storage, and safety engineering — designed,
          built, and validated in-house.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {capabilities.map((c) => {
          const Icon = c.icon;
          return (
            <div
              key={c.title}
              className="group flex flex-col rounded-2xl border border-slate-200 bg-white p-7 sm:p-8 transition-all hover:border-slate-300 hover:shadow-lg"
            >
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-slate-950 text-white mb-5">
                <Icon className="h-5 w-5" />
              </span>
              <h3 className="text-lg font-semibold text-slate-950">{c.title}</h3>
              <p className="mt-2.5 text-sm text-slate-600 leading-relaxed">
                {c.desc}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {c.tags.map((t) => (
                  <span
                    key={t}
                    className="inline-flex items-center rounded-md bg-slate-100 text-slate-600 text-xs font-medium px-2.5 py-1"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <Link
                href={c.href}
                className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-red-600 group-hover:gap-2.5 transition-all"
              >
                {c.cta} <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          );
        })}
      </div>
    </section>
  );
}

function FeaturedPack() {
  return (
    <section className="bg-slate-50 border-y border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <Eyebrow>New · Battery Packs</Eyebrow>
            <h2 className="mt-4 text-3xl sm:text-4xl font-bold tracking-tight text-slate-950 leading-tight">
              Custom Li-ion battery packs — 16S8P &amp; 20S8P
            </h2>
            <p className="mt-5 text-slate-600 leading-relaxed">
              Engineered for LEVs, e-motorcycles, and stationary storage — with
              integrated BMS, laser-welded interconnects, and industrial-grade
              powder-coated steel housing.
            </p>
            <div className="mt-7 grid grid-cols-2 gap-3">
              {packHighlights.map((h) => {
                const Icon = h.icon;
                return (
                  <div
                    key={h.label}
                    className="flex items-start gap-3 rounded-xl bg-white border border-slate-200 p-4"
                  >
                    <Icon className="h-4 w-4 text-red-600 shrink-0 mt-0.5" />
                    <div className="min-w-0">
                      <div className="text-[10px] font-semibold uppercase tracking-[0.14em] text-slate-500">
                        {h.label}
                      </div>
                      <div className="text-sm font-semibold text-slate-900 mt-0.5">
                        {h.value}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            <Link
              href="/products"
              className="mt-8 inline-flex items-center gap-2 rounded-lg bg-slate-950 hover:bg-slate-800 text-white font-semibold px-6 py-3 text-sm transition-colors"
            >
              Explore Battery Packs <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="rounded-2xl bg-white border border-slate-200 p-6 sm:p-8 shadow-sm">
            <Image
              src="/images/battery-pack-views.jpg"
              alt="VAVTRONICS battery pack — front, side, top, and rear views"
              width={1536}
              height={1024}
              className="w-full h-auto object-contain"
            />
            <div className="mt-4 border-t border-slate-100 pt-4 text-xs text-slate-500 text-center uppercase tracking-[0.14em] font-medium">
              Engineering views · steel enclosure · flange mounting
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactBand() {
  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
      <div className="relative overflow-hidden rounded-3xl bg-slate-950 px-6 py-14 sm:px-16 sm:py-16 text-center">
        <div
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage:
              "linear-gradient(to right, #64748b 1px, transparent 1px), linear-gradient(to bottom, #64748b 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
        <div className="relative">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Have a project in mind?
          </h2>
          <p className="mt-4 text-slate-400 max-w-xl mx-auto leading-relaxed">
            From a single BMS board to a complete battery system — tell us your
            voltage, capacity, and form-factor requirements and we&apos;ll take
            it from there.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-lg bg-red-600 hover:bg-red-500 text-white font-semibold px-6 py-3 text-sm transition-colors"
            >
              Get in Touch <ArrowRight className="h-4 w-4" />
            </Link>
            <a
              href="mailto:info@vavtronics.com"
              className="inline-flex items-center rounded-lg border border-slate-700 text-slate-200 hover:bg-slate-900 font-semibold px-6 py-3 text-sm transition-colors"
            >
              info@vavtronics.com
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <>
      <TopNavBar />
      <main className="min-h-screen bg-white">
        <Hero />
        <Capabilities />
        <FeaturedPack />
        <ContactBand />
      </main>
      <SiteFooter />
    </>
  );
}
