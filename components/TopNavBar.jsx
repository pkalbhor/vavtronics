import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function TopNavBar() {
  return (
    <nav className="w-full bg-white/80 backdrop-blur border-b border-white/30 shadow-sm fixed top-0 left-0 z-50">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-3">
        {/* Logo and Brand */}
        <div className="flex items-center gap-3">
          {/* Stylized V logo */}
          <Link href="/" >
          <span
            className="h-12 w-12 flex items-center justify-center rounded-full bg-gradient-to-br from-indigo-600 to-purple-600 text-white font-extrabold text-3xl shadow-lg"
            style={{ fontFamily: "Montserrat, Arial, sans-serif", letterSpacing: "-0.05em" }}
            aria-label="Vavtronics Logo"
          >
            V
          </span>
          </Link>
          <span className="font-bold text-2xl text-indigo-700 tracking-tight">
            VAVTRONICS
          </span>
          
        </div>
        {/* Navigation Links */}
        <div className="flex items-center gap-6">
          <Link href="/" className="text-indigo-700 hover:text-indigo-900 font-medium transition-colors">
            Home
          </Link>
          <Link href="products" className="text-indigo-700 hover:text-indigo-900 font-medium transition-colors">
            Products
          </Link>
          <Link href="services" className="text-indigo-700 hover:text-indigo-900 font-medium transition-colors">
            Services
          </Link>
        </div>
        {/* Contact Button */}
        <div>
          <Link href="contact">
            <Button className="bg-indigo-600 hover:bg-indigo-700 text-white rounded-full px-5 py-2 text-sm font-semibold shadow">
              Contact Us
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  );
}