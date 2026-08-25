"use client";

import { Clock, MapPin, Phone } from "lucide-react";

function InstagramIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-6 w-6"
      fill="currentColor"
    >
      <path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4c0 3.2-2.6 5.8-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8C2 4.6 4.6 2 7.8 2Zm-.2 2A3.6 3.6 0 0 0 4 7.6v8.8A3.6 3.6 0 0 0 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6A3.6 3.6 0 0 0 16.4 4H7.6Zm9.65 1.5a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z" />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-6 w-6"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.9"
    >
      <path d="M5.2 19.1 6.3 16A7.2 7.2 0 1 1 9 18.6l-3.8.5Z" />
      <path d="M9.2 8.6c.2-.4.4-.4.7-.4h.5c.2 0 .4 0 .5.4l.7 1.6c.1.2.1.4 0 .5l-.4.5c-.2.2-.3.4-.1.7.4.8 1.2 1.6 2.1 2.1.3.2.5.1.7-.1l.6-.7c.2-.2.4-.2.6-.1l1.6.8c.2.1.4.3.4.5 0 .8-.7 1.6-1.5 1.7-1.2.2-3-.4-4.7-1.8-1.8-1.6-2.7-3.6-2.6-4.8 0-.4.1-.7.4-1.1Z" />
    </svg>
  );
}

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

          <ul className="space-y-4 text-coffee-dark mb-8">
            <li className="flex items-start gap-3">
              <MapPin className="text-gold shrink-0 mt-1" />
              <span>cafe 28, Rue Assouel, Marrakesh 40000</span>
            </li>
            <li className="flex items-start gap-3">
              <Clock className="text-gold shrink-0 mt-1" />
              <span>Open daily - 8:00 AM to 00:00</span>
            </li>
            <li className="flex items-start gap-3">
              <Phone className="text-gold shrink-0 mt-1" />
              <span>+212636035661</span>
            </li>
          </ul>

          <div className="flex gap-4">
            <a
              href="https://www.instagram.com/coff_eshop28/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Cafe 28 Instagram"
              title="Instagram"
              className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-coffee-dark text-cream shadow-md ring-1 ring-coffee-dark/10 transition-all hover:-translate-y-0.5 hover:bg-gold hover:text-coffee-dark hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 focus:ring-offset-background"
            >
              <InstagramIcon />
            </a>
            <a
              href="https://wa.me/212636035661"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Cafe 28 WhatsApp"
              title="WhatsApp"
              className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-coffee-dark text-cream shadow-md ring-1 ring-coffee-dark/10 transition-all hover:-translate-y-0.5 hover:bg-gold hover:text-coffee-dark hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 focus:ring-offset-background"
            >
              <WhatsAppIcon />
            </a>
          </div>
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
