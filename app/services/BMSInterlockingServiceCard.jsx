"use client";
import React, { useEffect, useState } from "react";

export default function BMSInterlockingServiceCard() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Trigger the fade-in animation after mount
    setVisible(true);
  }, []);

  return (
    <div
      className={`${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      } transition-all duration-700 ease-out bg-gradient-to-br from-indigo-100 via-purple-100 to-indigo-200 rounded-xl shadow-lg p-8 flex flex-col items-center mb-8`}
    >
      <div className="flex items-center mb-4">
        <span className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-gradient-to-br from-indigo-600 to-purple-600 text-white text-2xl font-bold shadow">
          <svg className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <rect x="3" y="7" width="18" height="10" rx="2" stroke="currentColor" strokeWidth="2" fill="none"/>
            <path d="M7 7V5a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v2" stroke="currentColor" strokeWidth="2" fill="none"/>
            <path d="M12 17v2" stroke="currentColor" strokeWidth="2" fill="none"/>
          </svg>
        </span>
        <h2 className="ml-4 text-2xl font-semibold text-indigo-700">BMS Interlocking System</h2>
      </div>
      <p className="text-gray-700 mb-4 text-center">
        Our <span className="font-semibold text-indigo-700">Interlocking System for Battery Management System (BMS)</span> is designed specifically for <span className="font-semibold">Li-ion battery testing infrastructure</span>. 
        It ensures <span className="font-semibold">safety, automation, and scalability</span> in your BMS testing environments.
      </p>
      <ul className="text-gray-700 text-left mb-4 list-disc pl-6">
        <li>Automated interlocking for safe test operations</li>
        <li>Supports scalable, multi-battery test setups</li>
        <li>Real-time monitoring and control</li>
        <li>Seamless integration with your existing BMS infrastructure</li>
        <li>Reduces manual intervention and operational risks</li>
      </ul>
      <div className="bg-indigo-100 text-indigo-700 px-4 py-2 rounded-lg font-medium text-center">
        Empower your battery R&amp;D and production with our advanced BMS Interlocking System.
      </div>
    </div>
  );
}