"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const images = [
  "/images/matcha.png",
  "/images/smoothie.png",
  "/images/milkshake.png",
  "/images/mojito.png",
  "/images/iced-tea.png",
  "/images/tiramesu.png",
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-24 px-6 max-w-6xl mx-auto">
      <div className="text-center mb-14">
        <p className="text-gold uppercase tracking-[0.2em] text-sm mb-2">
          Take a Look
        </p>
        <h2 className="text-4xl font-bold text-coffee-dark">Gallery</h2>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {images.map((src, i) => (
          <motion.div
            key={src}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="relative w-full h-56 md:h-64 rounded-xl overflow-hidden"
          >
            <Image
              src={src}
              alt="Cafe 28 gallery"
              fill
              className="object-cover hover:scale-105 transition-transform duration-500"
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
