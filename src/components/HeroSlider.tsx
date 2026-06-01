"use client";
import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, ChevronDown, ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    img: "/images/ganoterapia-banner.png",
    tag: "🍄 Ganoderma Orgánico",
    title: "Fortalece tu sistema inmune",
    subtitle: "El poder del hongo milenario en su forma más pura. Avalado por millones en el mundo.",
    href: "#tienda",
    cta: "Ver productos",
    accent: "#3ED9C4",
  },
  {
    img: "/images/celion-boost.jpeg",
    tag: "⚡ Celion — Nutrición Celular",
    title: "Energía desde adentro",
    subtitle: "Fórmulas premium con ingredientes de patente clínica para tu vitalidad diaria.",
    href: "#celion",
    cta: "Conocer Celion",
    accent: "#F26010",
  },
  {
    img: "/images/wa-sep-2.jpeg",
    tag: "🥤 Bebidas Saludables",
    title: "Nutrición en cada sorbo",
    subtitle: "Bebidas naturales con extractos de Ganoderma, Morinda y Spirulina. Sin artificiales.",
    href: "#tienda",
    cta: "Ver bebidas",
    accent: "#3ED9C4",
  },
  {
    img: "/images/wa-sep-4.jpeg",
    tag: "🌿 Cuidado Personal",
    title: "Belleza de adentro hacia afuera",
    subtitle: "Línea dermocosmética con ingredientes de origen orgánico para tu piel y cabello.",
    href: "#tienda",
    cta: "Ver línea personal",
    accent: "#ec4899",
  },
  {
    img: "/images/wa-sep-5.jpeg",
    tag: "👶 Para los Niños",
    title: "Cuida su crecimiento",
    subtitle: "Suplementos naturales formulados especialmente para los más pequeños de la casa.",
    href: "#ninos",
    cta: "Ver línea infantil",
    accent: "#3ED9C4",
  },
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);

  const next = useCallback(() => {
    setCurrent((c) => (c + 1) % slides.length);
  }, []);

  const prev = useCallback(() => {
    setCurrent((c) => (c - 1 + slides.length) % slides.length);
  }, []);

  useEffect(() => {
    if (paused) return;
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [paused, next]);

  const slide = slides[current];

  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Fondo: imagen con crossfade */}
      <AnimatePresence mode="sync">
        <motion.div
          key={current}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          <Image
            src={slide.img}
            alt={slide.tag}
            fill
            priority={current === 0}
            className="object-cover brightness-[0.55]"
            sizes="100vw"
          />
        </motion.div>
      </AnimatePresence>

      {/* Gradiente overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1B3A7A]/75 via-[#1B3A7A]/50 to-[#0d2a5e]/65" />

      {/* Contenido central */}
      <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <span
              className="inline-block text-xs font-bold px-4 py-1.5 rounded-full mb-6 tracking-widest uppercase"
              style={{ backgroundColor: slide.accent, color: "#1B3A7A" }}
            >
              {slide.tag}
            </span>
            <h1 className="font-display font-extrabold text-white leading-tight mb-4 text-4xl md:text-6xl">
              {slide.title}
            </h1>
            <p className="text-white/80 text-base md:text-lg max-w-xl mx-auto mb-8 leading-relaxed">
              {slide.subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={slide.href}
                className="bg-white text-[#1B3A7A] px-8 py-4 rounded-full font-bold text-base hover:bg-[#3ED9C4] hover:text-white transition-all duration-300 shadow-lg"
              >
                {slide.cta}
              </a>
              <a
                href="https://wa.me/573203358826"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-[#25D366] text-white px-8 py-4 rounded-full font-bold text-base hover:bg-[#20b858] transition-all duration-300 shadow-lg"
              >
                <MessageCircle size={20} />
                Pedir por WhatsApp
              </a>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Flecha izquierda */}
      <button
        onClick={prev}
        aria-label="Slide anterior"
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/10 backdrop-blur-sm border border-white/30 text-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-white/25 transition-all duration-200"
      >
        <ChevronLeft size={20} />
      </button>

      {/* Flecha derecha */}
      <button
        onClick={next}
        aria-label="Siguiente slide"
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/10 backdrop-blur-sm border border-white/30 text-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-white/25 transition-all duration-200"
      >
        <ChevronRight size={20} />
      </button>

      {/* Puntos de navegación */}
      <div className="absolute bottom-16 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            aria-label={`Ir al slide ${i + 1}`}
            className="transition-all duration-300"
          >
            <span
              className="block rounded-full transition-all duration-300"
              style={{
                width: i === current ? "24px" : "8px",
                height: "8px",
                backgroundColor: i === current ? slide.accent : "rgba(255,255,255,0.4)",
              }}
            />
          </button>
        ))}
      </div>

      {/* Barra de progreso */}
      {!paused && (
        <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-white/10 z-20">
          <motion.div
            key={current}
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 5, ease: "linear" }}
            className="h-full"
            style={{ backgroundColor: slide.accent }}
          />
        </div>
      )}

      {/* Flecha scroll */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/40 animate-bounce z-20">
        <ChevronDown size={28} />
      </div>
    </section>
  );
}
