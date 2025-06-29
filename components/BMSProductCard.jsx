"use client";
import React, { useEffect, useState } from "react";

const BMS_IMAGE_URL = "/images/bms-14s-1.png"; // Place your BMS image in the public/images directory

export default function BMSProductCard() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
  }, []);

  return (
    <div
      className={`${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      } transition-all duration-700 ease-out bg-gradient-to-br from-indigo-100 via-purple-100 to-indigo-200 rounded-xl shadow-lg p-8 flex flex-col items-center mb-8`}
      style={{
        margin: "0 auto",
        maxWidth: "1000px",
      }}
    >
      <div
        className="overflow-hidden mb-8 group w-[75%] max-w-xl sm:w-[100%] sm:max-w-xl"
        style={{ height: "15rem" }}
      >
        <img
          src={BMS_IMAGE_URL}
          alt="Battery Management System 14s"
          className={`
            w-full h-full object-contain transition-transform duration-500 ease-in-out
            group-hover:scale-210 group-hover:rotate-2
            cursor-pointer
          `}
          style={{
            willChange: "transform",
          }}
        />
      </div>
      <h2 className="text-3xl font-semibold text-indigo-700 mb-3 text-center">
        Battery Management System (BMS) – 14S4P Configuration
      </h2>
      <p className="text-gray-700 mb-6 text-center text-lg">
        Advanced BMS designed for high-performance lithium battery packs. Ensures safety, longevity for LEV applications.
      </p>
      <div className="w-full">
        <h3 className="text-xl font-semibold text-indigo-600 mb-3">Specifications</h3>
        <ul className="list-disc list-inside text-gray-800 space-y-2 text-base">
          <li>
            <span className="font-medium">Configuration:</span> 14S4P
          </li>
          <li>
            <span className="font-medium">Cell Chemistry:</span> Li-ion NMC/LFP/NCA
          </li>
          <li>
            <span className="font-medium">Max Discharge Current:</span> 100A
          </li>
          <li>
            <span className="font-medium">Balance Method:</span> Passive balancing
          </li>
          <li>
            <span className="font-medium">Communication:</span> CAN, Bluetooth
          </li>
          <li>
            <span className="font-medium">Protections:</span> Overcharge, Overdischarge, Overcurrent, Short-circuit, Temperature
          </li>
          <li>
            <span className="font-medium">Operating Temperature:</span> -20°C to 60°C
          </li>
          <li>
            <span className="font-medium">Dimensions:</span> 180mm x 120mm x 20mm
          </li>
          <li>
            <span className="font-medium">Weight:</span> 350g
          </li>
        </ul>
      </div>
    </div>
  );
}