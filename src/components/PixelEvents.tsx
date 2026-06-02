"use client";
import { useEffect } from "react";

// Declara fbq como función global (inyectada por Meta Pixel)
declare function fbq(type: string, event: string, params?: Record<string, unknown>): void;

/**
 * PixelEvents — escucha clics en links de WhatsApp y dispara eventos Meta Pixel.
 * No renderiza nada visible. Se agrega una sola vez en layout.tsx.
 */
export default function PixelEvents() {
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest("a");
      if (!target) return;

      const href = target.getAttribute("href") ?? "";

      // Clic en WhatsApp → evento Contact
      if (href.includes("wa.me") && typeof fbq !== "undefined") {
        fbq("track", "Contact");
      }
    };

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  return null;
}
