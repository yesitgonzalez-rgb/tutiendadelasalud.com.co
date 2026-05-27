"use client";
import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/573203358826"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escríbenos por WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-[#25D366] text-white pl-4 pr-5 py-3.5 rounded-full shadow-2xl hover:scale-105 hover:bg-[#20b858] transition-all duration-200 font-semibold text-sm"
    >
      <MessageCircle size={22} />
      <span>WhatsApp</span>
    </a>
  );
}
