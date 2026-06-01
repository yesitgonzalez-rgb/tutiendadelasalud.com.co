"use client";
import { MessageCircle } from "lucide-react";
import { useState } from "react";

export default function WhatsAppButton() {
  const [hovered, setHovered] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-40 flex items-center gap-3">
      {/* Tooltip — aparece al hover */}
      <div
        className={`bg-white text-[#1B3A7A] text-sm font-semibold px-4 py-2 rounded-full shadow-lg whitespace-nowrap transition-all duration-300 ${
          hovered
            ? "opacity-100 translate-x-0"
            : "opacity-0 translate-x-4 pointer-events-none"
        }`}
      >
        ¿Dudas? Escríbeme 👋
      </div>

      {/* Botón circular premium */}
      <a
        href="https://wa.me/573203358826"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contactar por WhatsApp"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="relative flex items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-full shadow-xl hover:shadow-2xl hover:scale-110 transition-all duration-300"
      >
        {/* Pulso sutil — no invasivo */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20" />
        <MessageCircle size={26} className="relative z-10" />
      </a>
    </div>
  );
}
