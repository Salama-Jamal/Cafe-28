"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="py-24 bg-coffee-dark text-cream">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-gold uppercase tracking-[0.2em] text-sm mb-2">
            Our Story
          </p>
          <h2 className="text-4xl font-bold mb-6">About Cafe 28</h2>
          <p className="text-cream/80 leading-relaxed mb-4">
            Cafe 28 was born from a simple idea: bring a modern, relaxed coffee
            culture to Marrakech. Our space blends warm Moroccan hospitality
            with a contemporary atmosphere - a place to work, meet friends, or
            simply enjoy a great cup of coffee.
          </p>
          <p className="text-cream/80 leading-relaxed">
            Every drink is crafted with care, using quality ingredients and
            attention to detail, in a setting designed to make you feel at home.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative w-full h-80 md:h-96 rounded-2xl overflow-hidden"
        >
          <Image
            src="/images/interior.jpg"
            alt="Cafe 28 interior"
            fill
            className="object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
}
