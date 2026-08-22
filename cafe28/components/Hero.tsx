"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      <Image
        src="/images/hero-coffee.jpg"
        alt="Cafe 28 signature drinks"
        fill
        priority
        className="object-cover brightness-[0.55]"
      />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 text-center px-6"
      >
        <p className="text-gold uppercase tracking-[0.3em] mb-4 text-sm">
          Marrakech, Morocco
        </p>
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
          Cafe 28
        </h1>
        <p className="text-white/90 max-w-xl mx-auto mb-10 text-lg">
          A modern coffee experience - crafted drinks, fresh flavors, and a
          space to slow down in the heart of Marrakech.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/menu"
            className="bg-gold text-coffee-dark px-8 py-3 rounded-full font-semibold hover:bg-white transition-colors"
          >
            View Menu
          </Link>
          <Link
            href="#location"
            className="border border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-coffee-dark transition-colors"
          >
            Find Us
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
