"use client";
import React, { useEffect, useState } from "react";
import { ShieldCheck } from "lucide-react";

export default function BMSInterlockingServiceCard() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
  }, []);

  return (
    <div
      className={`${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      } transition-all duration-700 ease-out bg-white border border-slate-200 shadow-sm rounded-2xl p-6 sm:p-8`}
    >
      <div className="flex items-center gap-3 mb-4">
        <span className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-indigo-50 text-indigo-600 ring-1 ring-indigo-100">
          <ShieldCheck className="h-6 w-6" />
        </span>
        <h2 className="text-xl sm:text-2xl font-semibold text-slate-900">
          BMS Interlocking System
        </h2>
      </div>
      <p className="text-slate-600 mb-4 text-sm sm:text-base leading-relaxed">
        Our{" "}
        <span className="font-semibold text-slate-900">
          Interlocking System for Battery Management System (BMS)
        </span>{" "}
        is designed specifically for{" "}
        <span className="font-semibold">Li-ion battery testing infrastructure</span>
        . It ensures{" "}
        <span className="font-semibold">safety, automation, and scalability</span>{" "}
        in your BMS testing environments.
      </p>
      <ul className="text-slate-700 text-sm space-y-1.5 list-disc pl-5 mb-4">
        <li>Automated interlocking for safe test operations</li>
        <li>Supports scalable, multi-battery test setups</li>
        <li>Real-time monitoring and control</li>
        <li>Seamless integration with your existing BMS infrastructure</li>
        <li>Reduces manual intervention and operational risk</li>
      </ul>
      <div className="bg-indigo-50 border border-indigo-100 text-indigo-700 px-4 py-2.5 rounded-lg text-sm font-medium">
        Empower your battery R&amp;D and production with our advanced BMS
        Interlocking System.
      </div>
    </div>
  );
}