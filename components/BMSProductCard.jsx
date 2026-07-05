"use client";
import React, { useEffect, useState } from "react";
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
  Layers,
} from "lucide-react";

const BMS_IMAGE_URL = "/images/bms-14s-1.png";

const specs = [
  { icon: Battery, label: "Configuration", value: "14S4P" },
  { icon: Cpu, label: "Cell Chemistry", value: "Li-ion NMC / LFP / NCA" },
  { icon: Zap, label: "Max Discharge Current", value: "100 A" },
  { icon: Scale, label: "Balancing", value: "Passive" },
  { icon: Radio, label: "Communication", value: "CAN · Bluetooth" },
  { icon: Shield, label: "Protections", value: "OCP · OVP · UVP · SCP · OTP" },
  { icon: Thermometer, label: "Operating Temperature", value: "-20 °C to +60 °C" },
  { icon: Ruler, label: "Dimensions", value: "180 × 120 × 20 mm" },
  { icon: Weight, label: "Weight", value: "350 g" },
];

export default function BMSProductCard() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
  }, []);

  return (
    <section className="w-full max-w-6xl mx-auto">
      <div className="text-center mb-10">
        <div className="inline-flex items-center gap-2 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-700 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.15em] mb-4">
          <Cpu className="h-3.5 w-3.5" /> Product Line
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">
          Battery Management Systems
        </h2>
        <p className="text-slate-600 max-w-2xl mx-auto mt-3 text-sm sm:text-base leading-relaxed">
          Precision electronics that protect, monitor, and extend the life of
          lithium battery packs across LEV and industrial applications.
        </p>
      </div>

      <div
        className={`${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        } transition-all duration-700 ease-out bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden`}
      >
        <div className="h-1 w-full bg-gradient-to-r from-indigo-500 to-purple-600" />
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="bg-gradient-to-br from-slate-50 to-indigo-50 p-8 sm:p-10 flex items-center justify-center group">
            <img
              src={BMS_IMAGE_URL}
              alt="Vavtronics 14S4P Battery Management System"
              className="w-full max-w-md object-contain transition-transform duration-500 ease-out group-hover:scale-105"
            />
          </div>
          <div className="p-6 sm:p-10 flex flex-col gap-6">
            <div>
              <div className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.15em] text-indigo-600 mb-2">
                <Layers className="h-3.5 w-3.5" /> 14S4P Configuration
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-slate-900">
                VT-BMS-14S4P
              </h3>
              <p className="text-slate-600 mt-3 leading-relaxed text-sm sm:text-base">
                Advanced BMS designed for high-performance lithium battery
                packs. Ensures safety and longevity for LEV applications with
                passive cell balancing and multi-layer protection.
              </p>
            </div>

            <div>
              <div className="text-[11px] font-semibold uppercase tracking-[0.15em] text-slate-500 mb-3">
                Key Specifications
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {specs.map((s, i) => {
                  const Icon = s.icon;
                  return (
                    <div
                      key={i}
                      className="flex items-start gap-3 bg-slate-50 rounded-lg p-3 border border-slate-100"
                    >
                      <Icon className="h-4 w-4 text-indigo-600 shrink-0 mt-0.5" />
                      <div className="min-w-0">
                        <div className="text-[10px] font-semibold uppercase tracking-[0.12em] text-slate-500">
                          {s.label}
                        </div>
                        <div className="text-sm font-medium text-slate-900">
                          {s.value}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}