"use client";
import React from "react";
import Image from "next/image";
import {
  Cpu,
  Zap,
  Shield,
  Thermometer,
  Ruler,
  Weight,
  Radio,
  Scale,
  Battery,
} from "lucide-react";

const specs = [
  { icon: Battery, label: "Configuration", value: "14S4P" },
  { icon: Cpu, label: "Cell Chemistry", value: "Li-ion NMC / LFP / NCA" },
  { icon: Zap, label: "Max Discharge", value: "100 A" },
  { icon: Scale, label: "Balancing", value: "Passive" },
  { icon: Radio, label: "Communication", value: "CAN · Bluetooth" },
  { icon: Shield, label: "Protections", value: "OCP · OVP · UVP · SCP · OTP" },
  { icon: Thermometer, label: "Operating Temp", value: "−20 °C to +60 °C" },
  { icon: Ruler, label: "Dimensions", value: "180 × 120 × 20 mm" },
  { icon: Weight, label: "Weight", value: "350 g" },
];

export default function BMSProductCard() {
  return (
    <section className="w-full max-w-6xl mx-auto" id="bms">
      <div className="max-w-2xl mb-10">
        <div className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-500 mb-4">
          <span className="h-1.5 w-1.5 rounded-full bg-red-600" />
          Product Line · Electronics
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-950">
          Battery Management Systems
        </h2>
        <p className="text-slate-600 mt-4 leading-relaxed">
          Precision electronics that protect, monitor, and extend the life of
          lithium battery packs across LEV and industrial applications.
        </p>
      </div>

      <div className="rounded-2xl border border-slate-200 bg-white overflow-hidden transition-all hover:border-slate-300 hover:shadow-lg">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="bg-gradient-to-b from-slate-50 to-slate-100 border-b lg:border-b-0 lg:border-r border-slate-200 p-8 sm:p-12 flex items-center justify-center">
            <Image
              src="/images/bms-14s-1.png"
              alt="VAVTRONICS 14S4P Battery Management System board"
              width={1200}
              height={900}
              className="w-full max-w-md h-auto object-contain"
            />
          </div>
          <div className="p-6 sm:p-10 flex flex-col gap-6">
            <div>
              <div className="inline-flex items-center rounded-md bg-red-50 border border-red-100 text-red-700 text-[11px] font-semibold uppercase tracking-[0.12em] px-2.5 py-1 mb-3">
                14S4P Configuration
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-slate-950">
                VT-BMS-14S4P
              </h3>
              <p className="text-slate-600 mt-3 leading-relaxed text-sm">
                Advanced BMS designed for high-performance lithium battery
                packs. Ensures safety and longevity for LEV applications with
                passive cell balancing and multi-layer protection.
              </p>
            </div>

            <div>
              <div className="text-[11px] font-semibold uppercase tracking-[0.15em] text-slate-500 mb-3">
                Key Specifications
              </div>
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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
