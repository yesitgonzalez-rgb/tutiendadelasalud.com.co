"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";

const WA_BASE = "https://wa.me/573203358826";

const slides = [
  {
    img: "/images/slide-domicilios.png",
    alt: "Domicilios gratis en Bogotá - Tu Tienda de la Salud",
    badge: "🛵 Solo Bogotá",
    title: "DOMICILIOS",
    highlight: "GRATIS",
    sub: "en Bogotá · Por compras en combo",
    cta: "¡Pedir mi combo!",
    waMsg: "Hola Yesit! Vi la promo de domicilio gratis 🛵 Quiero armar un combo. ¿Qué me recomiendas? 🌿",
    textPos: "left",
    textColor: "text-[#1B3A7A]",
    highlightColor: "text-[#1B3A7A]",
    btnClass: "bg-[#1B3A7A] text-white hover:bg-[#0d2452]",
    badgeClass: "bg-[#3ED9C4] text-[#1B3A7A]",
    overlay: "from-white/95 via-white/70 to-transparent",
  },
  {
    img: "/images/slide-mundial.png",
    alt: "Promoción Mundial 2026 - Tu Tienda de la Salud",
    badge: "⚽ Mundial 2026",
    title: "¡VAMOS",
    highlight: "COLOMBIA! 🇨🇴",
    sub: "Envío gratis en Bogotá · Combos especiales",
    cta: "Ver combos",
    waMsg: "Hola Yesit! Vi la promo del Mundial 🏆 Quiero un combo con envío gratis en Bogotá. ¿Cuáles hay disponibles? 🇨🇴",
    textPos: "left",
    textColor: "text-white",
    highlightColor: "text-[#FFD100]",
    btnClass: "bg-[#FFD100] text-[#1B3A7A] hover:bg-white",
    badgeClass: "bg-white/20 text-white border border-white/30",
    overlay: "from-[#0d1f3c]/90 via-[#0d1f3c]/50 to-transparent",
  },
];

export default function BannerSlider() {
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);

  const goTo = useCallback((idx: number) => {
    if (animating) return;
    setAnimating(true);
    setTimeout(() => {
      setCurrent(idx);
      setAnimating(false);
    }, 300);
  }, [animating]);

  const next = useCallback(() => {
    goTo((current + 1) % slides.length);
  }, [current, goTo]);

  useEffect(() => {
    const t = setInterval(next, 5000);
    return () => clearInterval(t);
  }, [next]);

  const slide = slides[current];

  return (
    <section className="relative w-full overflow-hidden" aria-label="Banner promocional">

      {/* Slide */}
      <div
        className={`relative w-full transition-opacity duration-300 ${animating ? "opacity-0" : "opacity-100"}`}
        style={{ aspectRatio: "1200/420", maxHeight: "420px" }}
      >
        <Image
          src={slide.img}
          alt={slide.alt}
          fill
          className="object-cover object-center"
          sizes="100vw"
          priority
        />

        {/* Overlay degradado para texto */}
        <div className={`absolute inset-0 bg-gradient-to-r ${slide.overlay}`} />

        {/* Contenido del texto */}
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 w-full">
            <div className="max-w-xs sm:max-w-sm lg:max-w-md">

              {/* Badge */}
              <span className={`inline-block text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-3 ${slide.badgeClass}`}>
                {slide.badge}
              </span>

              {/* Título */}
              <h2 className={`font-extrabold leading-none tracking-tight mb-1 text-4xl sm:text-5xl lg:text-6xl ${slide.textColor}`}>
                {slide.title}
              </h2>
              <h2 className={`font-extrabold leading-none tracking-tight mb-3 text-4xl sm:text-5xl lg:text-6xl ${slide.highlightColor}`}>
                {slide.highlight}
              </h2>

              {/* Subtítulo */}
              <p className={`text-sm sm:text-base font-semibold mb-5 ${slide.textColor} opacity-90`}>
                {slide.sub}
              </p>

              {/* CTA */}
              <a
                href={`${WA_BASE}?text=${encodeURIComponent(slide.waMsg)}`}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-2 px-6 py-3 rounded-full font-bold text-sm shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200 ${slide.btnClass}`}
              >
                {slide.cta} →
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Dots de navegación */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-2 z-10">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            aria-label={`Ir al slide ${i + 1}`}
            className={`transition-all duration-300 rounded-full ${
              i === current
                ? "w-6 h-2 bg-white shadow-md"
                : "w-2 h-2 bg-white/50 hover:bg-white/80"
            }`}
          />
        ))}
      </div>

      {/* Flechas de navegación */}
      <button
        onClick={() => goTo((current - 1 + slides.length) % slides.length)}
        aria-label="Slide anterior"
        className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/20 backdrop-blur-sm text-white flex items-center justify-center hover:bg-white/40 transition-all z-10 text-lg"
      >
        ‹
      </button>
      <button
        onClick={() => goTo((current + 1) % slides.length)}
        aria-label="Siguiente slide"
        className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/20 backdrop-blur-sm text-white flex items-center justify-center hover:bg-white/40 transition-all z-10 text-lg"
      >
        ›
      </button>

      {/* Borde tricolor Colombia */}
      <div className="flex h-1">
        <div className="flex-1 bg-[#FFD100]" />
        <div className="flex-1 bg-[#1B3A7A]" />
        <div className="flex-1 bg-[#CE1126]" />
      </div>
    </section>
  );
}
