"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const products = [
  { name: "Coffee", img: "/images/coffee.jpg" },
  { name: "Iced Coffee", img: "/images/iced-coffee.jpg" },
  { name: "Matcha", img: "/images/matcha.jpg" },
  { name: "Smoothies", img: "/images/smoothie.jpg" },
  { name: "Milkshakes", img: "/images/milkshake.jpg" },
  { name: "Mojito", img: "/images/mojito.jpg" },
  { name: "Iced Tea", img: "/images/iced-tea.jpg" },
  { name: "Fresh Juice", img: "/images/juice.jpg" },
  { name: "Toast", img: "/images/toast.jpg" },
  { name: "Desserts", img: "/images/dessert.jpg" },
];

export default function PopularProducts() {
  return (
    <section className="py-24 px-6 max-w-6xl mx-auto">
      <div className="text-center mb-14">
        <p className="text-gold uppercase tracking-[0.2em] text-sm mb-2">
          Fan Favorites
        </p>
        <h2 className="text-4xl font-bold text-coffee-dark">
          Popular Right Now
        </h2>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
        {products.map((p, i) => (
          <motion.div
            key={p.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
            className="group text-center"
          >
            <div className="relative w-full aspect-square rounded-2xl overflow-hidden shadow-md mb-3">
              <Image
                src={p.img}
                alt={p.name}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>
            <p className="font-medium text-coffee-dark">{p.name}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}