import React from "react";
import TopNavBar from "@/components/TopNavBar";

export default function ServicesPage() {
  return (
    <>
      <TopNavBar />
    <div className="min-h-screen bg-gradient-to-br from-indigo-600 to-purple-700 flex flex-col items-center justify-center p-4 pt-24">

    {/* <div className="min-h-screen bg-gradient-to-br from-indigo-600 to-purple-700 flex flex-col"> */}
      <main className="flex flex-col items-center flex-1 py-16 px-4">
        <h1 className="text-4xl font-bold text-white mb-6">Our Services</h1>
        <p className="text-lg text-white max-w-2xl text-center mb-8">
          We offer <span className="font-semibold">complete fleet management</span> solutions powered by highly efficient IoT devices integrated directly on your batteries. Our services ensure real-time monitoring, predictive maintenance, and optimal performance for your entire battery fleet.
        </p>
        <p className="text-lg text-white max-w-2xl text-center mb-10">
          Additionally, we provide an <span className="font-semibold">interlocking system for BMS testing infrastructure</span>, enabling safe, automated, and scalable testing environments for battery management systems.
        </p>
        <div className="w-full max-w-md">
          <div className="bg-white rounded-xl shadow-lg p-8 flex flex-col items-center">
            <h2 className="text-2xl font-semibold text-indigo-700 mb-2">Detailed Service Information</h2>
            <p className="text-gray-700 mb-4 text-center">
              We are preparing comprehensive details about our fleet management and BMS testing services.
            </p>
            <div className="bg-indigo-100 text-indigo-700 px-4 py-2 rounded-lg font-medium">
              Detailed service information coming soon!
            </div>
          </div>
        </div>
      </main>
    </div>
    </>
    
  );
}