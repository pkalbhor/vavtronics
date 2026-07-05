import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: {
    default: "VAVTRONICS — Battery Management Systems & Li-ion Battery Packs",
    template: "%s | VAVTRONICS",
  },
  description:
    "VAVTRONICS designs and manufactures Battery Management Systems, custom Li-ion battery packs, and industrial interlocking systems for electric mobility and energy storage.",
  keywords: [
    "BMS",
    "Battery Management System",
    "Li-ion battery pack",
    "LFP",
    "NMC",
    "electric vehicles",
    "energy storage",
    "interlocking systems",
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
