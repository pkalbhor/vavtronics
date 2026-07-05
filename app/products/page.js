"use client";
import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import TopNavBar from "@/components/TopNavBar";
import SiteFooter from "@/components/SiteFooter";
import BMSProductCard from "@/components/BMSProductCard";
import BatteryPackProductCard from "@/components/BatteryPackProductCard";

export default function ProductsPage() {
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
            <div className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-400 mb-5">
              <span className="h-1.5 w-1.5 rounded-full bg-red-600" />
              Product Portfolio
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-white max-w-2xl leading-tight">
              Battery systems, built to specification
            </h1>
            <p className="mt-5 text-slate-400 text-base sm:text-lg max-w-2xl leading-relaxed">
              Advanced Battery Management Systems, custom Li-ion battery packs,
              and IoT solutions for battery fleet monitoring — maximizing
              performance, ensuring safety, and unlocking real-time data.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#bms"
                className="inline-flex items-center rounded-lg border border-slate-700 text-slate-200 hover:bg-slate-900 hover:border-slate-600 font-semibold px-5 py-2.5 text-sm transition-colors"
              >
                Battery Management Systems
              </a>
              <a
                href="#battery-packs"
                className="inline-flex items-center rounded-lg border border-slate-700 text-slate-200 hover:bg-slate-900 hover:border-slate-600 font-semibold px-5 py-2.5 text-sm transition-colors"
              >
                Li-ion Battery Packs
              </a>
            </div>
          </div>
        </section>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-24 flex flex-col gap-20 sm:gap-28 scroll-mt-24">
          <BMSProductCard />
          <BatteryPackProductCard />
        </div>

        <section className="max-w-6xl mx-auto px-4 sm:px-6 pb-16 sm:pb-24">
          <div className="rounded-3xl bg-slate-50 border border-slate-200 p-8 sm:p-14 text-center">
            <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-950 mb-3">
              Need a custom configuration?
            </h3>
            <p className="text-slate-600 mb-8 leading-relaxed max-w-xl mx-auto">
              From cell selection and pack architecture to BMS tuning and
              enclosure design — we deliver turnkey solutions tailored to your
              voltage, capacity, and form-factor requirements.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-lg bg-red-600 hover:bg-red-500 text-white font-semibold px-6 py-3 text-sm transition-colors"
            >
              Request a Quote <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
