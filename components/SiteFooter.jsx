import React from "react";
import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";

export default function SiteFooter() {
  return (
    <footer className="bg-slate-950 text-slate-400">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-14">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2.5 mb-4">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-white">
                <svg viewBox="0 0 48 24" className="w-3/4" aria-hidden="true">
                  <text
                    x="24"
                    y="18"
                    textAnchor="middle"
                    fontSize="17"
                    fontWeight="800"
                    fill="#020617"
                    fontFamily="var(--font-geist-sans), Arial, sans-serif"
                    letterSpacing="0.5"
                  >
                    VΛV
                  </text>
                </svg>
              </span>
              <span className="font-bold text-lg tracking-[0.08em] text-white">
                VAVTRONICS
              </span>
            </div>
            <p className="text-sm leading-relaxed max-w-sm">
              We design and manufacture Battery Management Systems, custom
              Li-ion battery packs, and industrial safety systems that power
              reliable electrification.
            </p>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.15em] text-slate-500 mb-4">
              Company
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-white transition-colors">
                  Products
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.15em] text-slate-500 mb-4">
              Contact
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li className="flex items-center gap-2.5">
                <Mail className="h-4 w-4 text-red-500 shrink-0" />
                <a
                  href="mailto:info@vavtronics.com"
                  className="hover:text-white transition-colors"
                >
                  info@vavtronics.com
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="h-4 w-4 text-red-500 shrink-0" />
                <span>+91 93557 18377</span>
              </li>
              <li className="flex items-center gap-2.5">
                <MapPin className="h-4 w-4 text-red-500 shrink-0" />
                <span>India</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
          <span>© {new Date().getFullYear()} VAVTRONICS Pvt Ltd. All rights reserved.</span>
          <span>Battery Management · Li-ion Packs · Industrial Safety</span>
        </div>
      </div>
    </footer>
  );
}
