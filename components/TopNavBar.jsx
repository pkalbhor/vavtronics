"use client";
import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/products", label: "Products" },
  { href: "/services", label: "Services" },
];

function BrandMark({ className = "h-9 w-9" }) {
  return (
    <span
      className={`${className} inline-flex items-center justify-center rounded-lg bg-slate-950 shadow-sm`}
      aria-label="VAVTRONICS logo"
    >
      <svg viewBox="0 0 48 24" className="w-3/4" role="img" aria-hidden="true">
        <text
          x="24"
          y="18"
          textAnchor="middle"
          fontSize="17"
          fontWeight="800"
          fill="#ffffff"
          fontFamily="var(--font-geist-sans), Arial, sans-serif"
          letterSpacing="0.5"
        >
          VΛV
        </text>
      </svg>
    </span>
  );
}

export default function TopNavBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const linkClass = (href) => {
    const active = pathname === href;
    return `text-sm font-medium transition-colors ${
      active ? "text-slate-950" : "text-slate-500 hover:text-slate-950"
    }`;
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/85 backdrop-blur-md border-b border-slate-200">
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-4 sm:px-6 h-16">
        <Link href="/" className="flex items-center gap-2.5 shrink-0">
          <BrandMark />
          <span className="font-bold text-lg tracking-[0.08em] text-slate-950">
            VAVTRONICS
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((l) => (
            <Link key={l.href} href={l.href} className={linkClass(l.href)}>
              {l.label}
            </Link>
          ))}
        </div>

        <div className="hidden md:block">
          <Link
            href="/contact"
            className="inline-flex items-center rounded-lg bg-slate-950 hover:bg-slate-800 text-white text-sm font-semibold px-5 py-2.5 transition-colors"
          >
            Contact Us
          </Link>
        </div>

        <button
          className="md:hidden p-2 rounded-lg text-slate-700 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-slate-400"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {menuOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 px-4 sm:px-6 py-4 flex flex-col gap-1">
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`rounded-lg px-3 py-2.5 text-sm font-medium ${
                pathname === l.href
                  ? "bg-slate-100 text-slate-950"
                  : "text-slate-600 hover:bg-slate-50 hover:text-slate-950"
              }`}
              onClick={() => setMenuOpen(false)}
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setMenuOpen(false)}
            className="mt-2 inline-flex items-center justify-center rounded-lg bg-slate-950 hover:bg-slate-800 text-white text-sm font-semibold px-5 py-2.5 transition-colors"
          >
            Contact Us
          </Link>
        </div>
      )}
    </header>
  );
}
