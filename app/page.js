import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Sparkles, Rocket, Wrench, Phone, Layers, Cpu } from "lucide-react";
import * as motion from "framer-motion/client";

// Placeholder AI photo URLs (replace with your own AI-generated images if desired)
const aiPhotos = {
  product: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=facearea&w=400&h=400",
  service: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=facearea&w=400&h=400",
  engineer: "https://images.generated.photos/5e6b7e7e7e7e7e7e7e7e7e7e/face.jpg",
  contact: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=facearea&w=400&h=400",
};

function ProductsSection() {
  return (
    <Card className="bg-white/10 backdrop-blur border border-white/20 text-white">
      <CardContent className="space-y-4 text-center">
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center"
        >
          <img src={aiPhotos.product} alt="AI Product" className="w-24 h-24 rounded-full object-cover mb-2 border-4 border-indigo-400 shadow-lg" />
          <div className="text-2xl font-bold flex items-center gap-2">
            <Cpu className="text-indigo-300" /> Products
          </div>
          <div className="text-lg mt-2">
            <span className="font-semibold text-pink-300">IoT</span> &nbsp;|&nbsp; <span className="font-semibold text-yellow-300">BMS</span>
          </div>
        </motion.div>
      </CardContent>
    </Card>
  );
}

function ServicesSection() {
  return (
    <Card className="bg-white/10 backdrop-blur border border-white/20 text-white">
      <CardContent className="space-y-4 text-center">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col items-center"
        >
          <img src={aiPhotos.service} alt="AI Service" className="w-24 h-24 rounded-full object-cover mb-2 border-4 border-purple-400 shadow-lg" />
          <div className="text-2xl font-bold flex items-center gap-2">
            <Layers className="text-purple-300" /> Services
          </div>
          <div className="text-lg mt-2">
            Software &nbsp;|&nbsp; Interlocking Automotive Process
          </div>
        </motion.div>
      </CardContent>
    </Card>
  );
}

function EngineeringServicesSection() {
  return (
    <Card className="bg-white/10 backdrop-blur border border-white/20 text-white">
      <CardContent className="space-y-4 text-center">
        <motion.div
          initial={{ x: -20, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col items-center"
        >
          <img src={aiPhotos.engineer} alt="AI Engineer" className="w-24 h-24 rounded-full object-cover mb-2 border-4 border-green-400 shadow-lg" />
          <div className="text-2xl font-bold flex items-center gap-2">
            <Wrench className="text-green-300" /> Engineering Services
          </div>
          <div className="text-lg mt-2">
            Expert engineering solutions for your business needs.
          </div>
        </motion.div>
      </CardContent>
    </Card>
  );
}

function ContactSection() {
  return (
    <Card className="bg-white/10 backdrop-blur border border-white/20 text-white">
      <CardContent className="space-y-4 text-center">
        <motion.div
          initial={{ x: 20, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-col items-center"
        >
          <img src={aiPhotos.contact} alt="AI Contact" className="w-24 h-24 rounded-full object-cover mb-2 border-4 border-pink-400 shadow-lg" />
          <div className="text-2xl font-bold flex items-center gap-2">
            <Phone className="text-pink-300" /> Contact
          </div>
          <div className="text-lg mt-2">
            Email: <a href="mailto:info@example.com" className="underline text-pink-200">info@example.com</a><br />
            Phone: <span className="text-pink-200">+1 234 567 890</span>
          </div>
          <Button className="bg-pink-500 hover:bg-pink-600 rounded-full px-6 py-2 text-white text-md mt-2">
            <Rocket className="mr-2 h-4 w-4" /> Get in Touch
          </Button>
        </motion.div>
      </CardContent>
    </Card>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-600 to-purple-700 flex flex-col items-center justify-center p-4 gap-8">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full max-w-4xl flex flex-col gap-8"
      >
        <motion.div
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
          className="text-4xl font-bold tracking-tight flex items-center justify-center gap-2 text-white mb-4"
        >
          <Sparkles className="text-yellow-400 animate-pulse" />
          Welcome!
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <ProductsSection />
          <ServicesSection />
          <EngineeringServicesSection />
          <ContactSection />
        </div>
      </motion.div>
    </div>
  );
}