import React from "react";
import TopNavBar from "@/components/TopNavBar"; // Import the TopNavBar component

export default function ProductsPage() {
  return (
    <>
    <TopNavBar />
    <div className="min-h-screen bg-gradient-to-br from-indigo-600 to-purple-700 flex flex-col items-center justify-center p-4 pt-24">
      <h1 className="text-4xl font-bold text-white mb-6">Our Products</h1>
      <p className="text-lg text-white max-w-2xl text-center mb-10">
        We specialize in advanced <span className="font-semibold">Battery Management Systems (BMS)</span> and cutting-edge <span className="font-semibold">IoT Solutions</span> for battery fleet monitoring and optimization. Our technology empowers businesses to maximize battery performance, ensure safety, and enable real-time data-driven decisions for large-scale battery deployments.
      </p>
      <div className="w-full max-w-md">
        <div className="bg-white rounded-xl shadow-lg p-8 flex flex-col items-center">
          <h2 className="text-2xl font-semibold text-indigo-700 mb-2">Detailed Product Information</h2>
          <p className="text-gray-700 mb-4 text-center">
            We are working hard to bring you comprehensive details about our BMS and IoT solutions for battery fleets.
          </p>
          <div className="bg-indigo-100 text-indigo-700 px-4 py-2 rounded-lg font-medium">
            Detailed product information coming soon!
          </div>
        </div>
      </div>
    </div>
    </>
  );
}