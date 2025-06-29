import React from "react";
import TopNavBar from "@/components/TopNavBar";
import BMSInterlockingServiceCard from "../../components/BMSInterlockingServiceCard";

export default function ServicesPage() {
  return (
    <>
      <TopNavBar />
    <div className="min-h-screen bg-gradient-to-br from-indigo-600 to-purple-700 flex flex-col items-center justify-center p-4 pt-24">

      <main className="flex flex-col items-center flex-1 py-16 px-4">
        <BMSInterlockingServiceCard />

        <h1 className="text-4xl font-bold text-white mb-6">Our Services</h1>
        <p className="text-lg text-white max-w-2xl text-center mb-8">
          We offer <span className="font-semibold">complete fleet management</span> solutions powered by highly efficient IoT devices integrated directly on your batteries. Our services ensure real-time monitoring, predictive maintenance, and optimal performance for your entire battery fleet.
        </p>
        <p className="text-lg text-white max-w-2xl text-center mb-10">
          Additionally, we provide an <span className="font-semibold">interlocking system for BMS testing infrastructure</span>, enabling safe, automated, and scalable testing environments for battery management systems.
        </p>
      </main>
    </div>
    </>
    
  );
}