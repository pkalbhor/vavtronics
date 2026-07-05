"use client";
import React, { useState } from "react";
import Image from "next/image";
import {
  Battery,
  Zap,
  Gauge,
  Shield,
  Thermometer,
  Ruler,
  Weight,
  CircuitBoard,
  Scale,
  CheckCircle2,
} from "lucide-react";

const gallery = [
  {
    src: "/images/battery-pack-front.jpg",
    alt: "VAVTRONICS Li-ion battery pack — front view with power connectors",
    caption: "Front view · sealed steel enclosure",
  },
  {
    src: "/images/battery-pack-views.jpg",
    alt: "VAVTRONICS Li-ion battery pack — front, side, top, and rear engineering views",
    caption: "Engineering views · flange mounting points",
  },
];

const platformFeatures = [
  "Integrated BMS with multi-layer protection",
  "Laser-welded nickel interconnects",
  "Powder-coated steel enclosure with mounting flanges",
  "Keyed high-current connectors (+ / −)",
  "CAN & Bluetooth telemetry ready",
];

const models = [
  {
    id: "16S8P",
    partNo: "VT-BP52-16S8P",
    voltageClass: "52 V Class",
    tagline:
      "52 V LFP battery pack engineered for light electric vehicles and portable power applications.",
    specs: [
      { icon: Zap, label: "Nominal Voltage", value: "51.2 V" },
      { icon: Gauge, label: "Capacity", value: "40 Ah · 2 kWh" },
      { icon: Battery, label: "Configuration", value: "16S8P" },
      { icon: CircuitBoard, label: "Cell Type", value: "Li-ion (LFP)" },
      { icon: Scale, label: "Balancing", value: "Passive, per cell" },
      { icon: Shield, label: "Protections", value: "OCP · OVP · UVP · SCP · OTP" },
      { icon: Thermometer, label: "Operating Temp", value: "−20 °C to +60 °C" },
      { icon: Ruler, label: "Dimensions", value: "360 × 150 × 90 mm" },
      { icon: Weight, label: "Weight", value: "≈ 30.8 kg" },
    ],
    applications: ["E-bikes", "E-scooters", "Delivery LEVs", "Portable power"],
  },
  {
    id: "20S8P",
    partNo: "VT-BP72-20S8P",
    voltageClass: "72 V Class",
    tagline:
      "72 V high-capacity NMC pack for e-motorcycles, light EVs, and stationary energy-storage systems.",
    specs: [
      { icon: Zap, label: "Nominal Voltage", value: "72 V" },
      { icon: Gauge, label: "Capacity", value: "40 Ah · 2.88 kWh" },
      { icon: Battery, label: "Configuration", value: "20S8P" },
      { icon: CircuitBoard, label: "Cell Type", value: "21700 Li-ion (NMC)" },
      { icon: Scale, label: "Balancing", value: "Active + Passive" },
      { icon: Shield, label: "Protections", value: "OCP · OVP · UVP · SCP · OTP · Bal." },
      { icon: Thermometer, label: "Operating Temp", value: "−20 °C to +60 °C" },
      { icon: Ruler, label: "Dimensions", value: "420 × 260 × 180 mm" },
      { icon: Weight, label: "Weight", value: "≈ 45 kg" },
    ],
    applications: ["E-motorcycles", "Light EVs", "Stationary storage", "Solar hybrid"],
  },
];

function Gallery() {
  const [active, setActive] = useState(0);
  const current = gallery[active];
  return (
    <div>
      <div className="rounded-xl bg-gradient-to-b from-slate-50 to-slate-100 border border-slate-200 p-5 sm:p-7">
        <Image
          src={current.src}
          alt={current.alt}
          width={1600}
          height={1000}
          className="w-full h-auto object-contain"
        />
      </div>
      <div className="mt-2.5 text-xs text-slate-500 text-center font-medium uppercase tracking-[0.12em]">
        {current.caption}
      </div>
      <div className="mt-4 flex justify-center gap-3">
        {gallery.map((img, i) => (
          <button
            key={img.src}
            onClick={() => setActive(i)}
            aria-label={`Show ${img.caption}`}
            className={`w-24 rounded-lg border-2 bg-white p-1.5 transition-all ${
              i === active
                ? "border-red-600 shadow-sm"
                : "border-slate-200 opacity-60 hover:opacity-100 hover:border-slate-300"
            }`}
          >
            <Image
              src={img.src}
              alt=""
              width={200}
              height={125}
              className="w-full h-auto object-contain"
            />
          </button>
        ))}
      </div>
    </div>
  );
}

function SpecTable({ specs }) {
  return (
    <dl className="divide-y divide-slate-100 border-y border-slate-100">
      {specs.map((s) => {
        const Icon = s.icon;
        return (
          <div key={s.label} className="flex items-center gap-3 py-2.5">
            <Icon className="h-4 w-4 text-red-600 shrink-0" />
            <dt className="text-xs font-medium uppercase tracking-[0.08em] text-slate-500 w-36 shrink-0">
              {s.label}
            </dt>
            <dd className="text-sm font-semibold text-slate-900 text-right flex-1">
              {s.value}
            </dd>
          </div>
        );
      })}
    </dl>
  );
}

function ModelCard({ model }) {
  return (
    <div className="flex flex-col rounded-2xl border border-slate-200 bg-white overflow-hidden transition-all hover:border-slate-300 hover:shadow-lg">
      <div className="p-6 sm:p-8 flex flex-col gap-6 flex-1">
        <div className="flex items-start justify-between gap-4">
          <div className="min-w-0">
            <div className="inline-flex items-center rounded-md bg-red-50 border border-red-100 text-red-700 text-[11px] font-semibold uppercase tracking-[0.12em] px-2.5 py-1 mb-3">
              {model.voltageClass}
            </div>
            <h3 className="text-3xl font-bold text-slate-950 leading-tight">
              {model.id}
            </h3>
            <p className="text-sm text-slate-500 font-mono mt-1">{model.partNo}</p>
          </div>
          <div className="h-12 w-12 rounded-xl bg-slate-950 flex items-center justify-center text-white shrink-0">
            <Battery className="h-6 w-6" />
          </div>
        </div>

        <p className="text-slate-600 text-sm leading-relaxed">{model.tagline}</p>

        <div>
          <div className="text-[11px] font-semibold uppercase tracking-[0.15em] text-slate-500 mb-3">
            Specifications
          </div>
          <SpecTable specs={model.specs} />
        </div>

        <div className="mt-auto">
          <div className="text-[11px] font-semibold uppercase tracking-[0.15em] text-slate-500 mb-2.5">
            Applications
          </div>
          <div className="flex flex-wrap gap-2">
            {model.applications.map((a) => (
              <span
                key={a}
                className="inline-flex items-center rounded-md bg-slate-100 text-slate-700 text-xs font-medium px-2.5 py-1"
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
    <section className="w-full max-w-6xl mx-auto" id="battery-packs">
      <div className="max-w-2xl mb-10">
        <div className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-500 mb-4">
          <span className="h-1.5 w-1.5 rounded-full bg-red-600" />
          Product Line · Energy Storage
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-950">
          Custom Li-ion Battery Packs
        </h2>
        <p className="text-slate-600 mt-4 leading-relaxed">
          Engineered for reliability, safety, and long service life. Every pack
          ships with an integrated BMS, laser-welded nickel interconnects, and
          an industrial-grade protective housing.
        </p>
      </div>

      <div className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-10 mb-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <Gallery />
          <div>
            <div className="text-[11px] font-semibold uppercase tracking-[0.15em] text-slate-500 mb-4">
              Pack Platform
            </div>
            <h3 className="text-2xl font-bold text-slate-950 mb-4">
              One platform, two voltage classes
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed mb-6">
              Both packs share the same validated mechanical and electrical
              platform — a sealed steel enclosure with flange mounting, keyed
              high-current connectors, and a VAVTRONICS BMS at the core.
            </p>
            <ul className="space-y-3">
              {platformFeatures.map((f) => (
                <li key={f} className="flex items-start gap-3 text-sm text-slate-700">
                  <CheckCircle2 className="h-4 w-4 text-red-600 shrink-0 mt-0.5" />
                  {f}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {models.map((m) => (
          <ModelCard key={m.id} model={m} />
        ))}
      </div>
    </section>
  );
}
