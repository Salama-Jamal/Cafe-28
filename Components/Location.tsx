"use client";

import { MapPin, Phone, Clock, MessageCircle } from "lucide-react";

export default function Location() {
  return (
    <section id="location" className="py-24 bg-coffee/10 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-start">
        <div>
          <p className="text-gold uppercase tracking-[0.2em] text-sm mb-2">
            Visit Us
          </p>
          <h2 className="text-4xl font-bold text-coffee-dark mb-6">
            Find Cafe 28
          </h2>

          <ul className="space-y-4 text-coffee-dark">
            <li className="flex items-start gap-3">
              <MapPin className="text-gold shrink-0 mt-1" />
              <span>cafe 28, Rue Assouel, Marrakesh 40000</span>
            </li>
            <li className="flex items-start gap-3">
              <Clock className="text-gold shrink-0 mt-1" />
              <span>Open daily · 8:00 AM – 11:00 PM</span>
            </li>
            <li className="flex items-start gap-3">
              <Phone className="text-gold shrink-0 mt-1" />
              <span>+212636035661</span>
            </li>
            <li className="flex items-start gap-3">
              <MessageCircle className="text-gold shrink-0 mt-1" />
              <a
                href="https://wa.me/212636035661"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gold transition-colors"
              >
                WhatsApp us for reservations
              </a>
            </li>
          </ul>
        </div>

        <div className="w-full h-80 md:h-96 rounded-2xl overflow-hidden shadow-md">
          <iframe
            title="Cafe 28 location"
            src="https://www.google.com/maps?q=cafe%2028%2C%20Rue%20Assouel%2C%20Marrakesh%2040000&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}
