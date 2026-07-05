"use client";
import React, { useEffect, useState } from "react";
import {
  Battery,
  Zap,
  Gauge,
  Shield,
  Thermometer,
  Ruler,
  Weight,
  Layers,
  CircuitBoard,
  Scale,
} from "lucide-react";

const models = [
  {
    id: "14S4P",
    partNo: "VT-BP52-14S4P",
    tagline:
      "52 V Li-ion battery pack engineered for light electric vehicles and portable power applications.",
    accent: "from-indigo-500 to-purple-600",
    badgeBg: "bg-indigo-50",
    badgeText: "text-indigo-700",
    badgeBorder: "border-indigo-100",
    highlights: [
      { icon: Zap, label: "Nominal Voltage", value: "51.8 V" },
      { icon: Gauge, label: "Capacity", value: "10.4 Ah · 540 Wh" },
      { icon: Battery, label: "Configuration", value: "14S4P" },
      { icon: CircuitBoard, label: "Cell Type", value: "18650 / 21700 Li-ion(NMC)" },
      { icon: Scale, label: "Balancing", value: "Passive, per cell" },
      { icon: Shield, label: "Protections", value: "OCP · OVP · UVP · SCP · OTP" },
      { icon: Thermometer, label: "Operating Temp", value: "-20 °C to +60 °C" },
      { icon: Ruler, label: "Dimensions", value: "360 × 150 × 90 mm" },
      { icon: Weight, label: "Weight", value: "≈ 20.8 kg" },
    ],
    applications: ["E-bikes", "E-scooters", "Delivery LEVs", "Portable power"],
  },
  {
    id: "20S8P",
    partNo: "VT-BP72-20S8P",
    tagline:
      "72 V high-capacity pack for e-motorcycles, light EVs, and stationary energy-storage systems.",
    accent: "from-slate-600 to-indigo-600",
    badgeBg: "bg-slate-50",
    badgeText: "text-slate-700",
    badgeBorder: "border-slate-200",
    highlights: [
      { icon: Zap, label: "Nominal Voltage", value: "72 V" },
      { icon: Gauge, label: "Capacity", value: "40 Ah · 2.88 kWh" },
      { icon: Battery, label: "Configuration", value: "20S8P" },
      { icon: CircuitBoard, label: "Cell Type", value: "21700 Li-ion (NMC)" },
      { icon: Scale, label: "Balancing", value: "Active + Passive" },
      { icon: Shield, label: "Protections", value: "OCP · OVP · UVP · SCP · OTP · Bal." },
      { icon: Thermometer, label: "Operating Temp", value: "-20 °C to +60 °C" },
      { icon: Ruler, label: "Dimensions", value: "420 × 260 × 180 mm" },
      { icon: Weight, label: "Weight", value: "≈ 25 kg" },
    ],
    applications: ["E-motorcycles", "Light EVs", "Stationary storage", "Solar hybrid"],
  },
];

function ModelCard({ model, delay }) {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setVisible(true), delay);
    return () => clearTimeout(t);
  }, [delay]);

  return (
    <div
      className={`${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      } transition-all duration-700 ease-out relative bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-1 flex flex-col overflow-hidden`}
    >
      <div className={`h-1 w-full bg-gradient-to-r ${model.accent}`} />
      <div className="p-6 sm:p-8 flex flex-col gap-6 flex-1">
        <div className="flex items-start justify-between gap-4">
          <div className="min-w-0">
            <div className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.15em] text-slate-500 mb-2">
              <Layers className="h-3.5 w-3.5" /> Battery Pack Model
            </div>
            <h3 className="text-3xl font-bold text-slate-900 leading-tight">
              {model.id}
            </h3>
            <p className="text-sm text-slate-500 font-mono mt-1">{model.partNo}</p>
          </div>
          <div
            className={`h-14 w-14 rounded-xl bg-gradient-to-br ${model.accent} flex items-center justify-center shadow-md text-white shrink-0`}
          >
            <Battery className="h-7 w-7" />
          </div>
        </div>

        <p className="text-slate-700 text-sm leading-relaxed">{model.tagline}</p>

        <div>
          <div className="text-[11px] font-semibold uppercase tracking-[0.15em] text-slate-500 mb-3">
            Specifications
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {model.highlights.map((h, i) => {
              const Icon = h.icon;
              return (
                <div
                  key={i}
                  className="flex items-start gap-3 bg-slate-50 rounded-lg p-3 border border-slate-100"
                >
                  <Icon className="h-4 w-4 text-indigo-600 shrink-0 mt-0.5" />
                  <div className="min-w-0">
                    <div className="text-[10px] font-semibold uppercase tracking-[0.12em] text-slate-500">
                      {h.label}
                    </div>
                    <div className="text-sm font-medium text-slate-900">
                      {h.value}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-auto">
          <div className="text-[11px] font-semibold uppercase tracking-[0.15em] text-slate-500 mb-2">
            Applications
          </div>
          <div className="flex flex-wrap gap-2">
            {model.applications.map((a, i) => (
              <span
                key={i}
                className={`inline-flex items-center rounded-full ${model.badgeBg} border ${model.badgeBorder} ${model.badgeText} text-xs font-medium px-3 py-1`}
              >
                {a}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function BatteryPackProductCard() {
  return (
    <section className="w-full max-w-6xl mx-auto">
      <div className="text-center mb-10">
        <div className="inline-flex items-center gap-2 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-700 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.15em] mb-4">
          <Battery className="h-3.5 w-3.5" /> Product Line
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">
          Custom Li-ion Battery Packs
        </h2>
        <p className="text-slate-600 max-w-2xl mx-auto mt-3 text-sm sm:text-base leading-relaxed">
          Engineered for reliability, safety, and long service life. Every pack
          ships with an integrated BMS, laser-welded nickel interconnects, and
          industrial-grade protective housing.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {models.map((m, i) => (
          <ModelCard key={m.id} model={m} delay={i * 150} />
        ))}
      </div>
    </section>
  );
}
