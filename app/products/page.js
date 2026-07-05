"use client";
import React from "react";
import Link from "next/link";
import TopNavBar from "@/components/TopNavBar";
import BMSProductCard from "@/components/BMSProductCard";
import BatteryPackProductCard from "@/components/BatteryPackProductCard";

export default function ProductsPage() {
  return (
    <>
      <TopNavBar />
      <main className="min-h-screen bg-slate-50 pt-20">
        <section className="border-b border-slate-200 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 py-16 text-center">
            <div className="inline-flex items-center gap-2 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-700 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.15em] mb-4">
              Product Portfolio
            </div>
            <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-slate-900 mb-4">
              Our Products
            </h1>
            <p className="text-slate-600 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
              Advanced{" "}
              <span className="font-semibold text-slate-900">
                Battery Management Systems
              </span>
              , custom{" "}
              <span className="font-semibold text-slate-900">
                Li-ion Battery Packs
              </span>
              , and{" "}
              <span className="font-semibold text-slate-900">IoT solutions</span>{" "}
              for battery fleet monitoring — helping teams maximize performance,
              ensure safety, and unlock real-time data.
            </p>
          </div>
        </section>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-14 sm:py-20 flex flex-col gap-20">
          <BMSProductCard />
          <BatteryPackProductCard />
        </div>

        <section className="max-w-3xl mx-auto px-4 sm:px-6 pb-20">
          <div className="bg-white border border-slate-200 rounded-2xl p-8 sm:p-10 shadow-sm text-center">
            <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-3">
              Need a Custom Configuration?
            </h3>
            <p className="text-slate-600 mb-6 leading-relaxed">
              From cell selection and pack architecture to BMS tuning and
              enclosure design — we deliver turnkey solutions tailored to your
              voltage, capacity, and form-factor requirements.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center rounded-full bg-indigo-600 text-white font-semibold px-6 py-2.5 shadow-sm hover:bg-indigo-700 transition-colors"
            >
              Request a Quote
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}