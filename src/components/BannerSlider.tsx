"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";

const WA = "https://wa.me/573203358826";

type BannerSlide = {
  type: "banner";
  img: string;
  alt: string;
  badge: string;
  title: string;
  highlight: string;
  sub: string;
  cta: string;
  waMsg: string;
  overlay: string;
  textColor: string;
  highlightColor: string;
  btnClass: string;
  badgeClass: string;
};

type ProductSlide = {
  type: "product";
  bg: string;
  badge: string;
  badgeClass: string;
  title: string;
  highlight: string;
  highlightColor: string;
  sub: string;
  textColor: string;
  cta: string;
  btnClass: string;
  waMsg: string;
  productImg: string;
  productAlt: string;
  secondImg?: string;
  secondAlt?: string;
};

type Slide = BannerSlide | ProductSlide;

const slides: Slide[] = [
  /* ── Slide 1: Domicilios Gratis ── */
  {
    type: "banner",
    img: "/images/slide-domicilios.png",
    alt: "Domicilios gratis en Bogotá",
    badge: "🛵 Solo Bogotá",
    title: "DOMICILIOS",
    highlight: "GRATIS",
    sub: "en Bogotá · Por compras en combo",
    cta: "¡Pedir mi combo!",
    waMsg: "Hola Yesit! Vi la promo de domicilio gratis 🛵 Quiero armar un combo. ¿Qué me recomiendas? 🌿",
    overlay: "from-white/95 via-white/65 to-transparent",
    textColor: "text-[#1B3A7A]",
    highlightColor: "text-[#1B3A7A]",
    btnClass: "bg-[#1B3A7A] text-white hover:bg-[#0d2452]",
    badgeClass: "bg-[#3ED9C4] text-[#1B3A7A]",
  },
  /* ── Slide 2: Mundial Colombia ── */
  {
    type: "banner",
    img: "/images/slide-mundial.png",
    alt: "Promoción Mundial 2026 Colombia",
    badge: "⚽ Mundial 2026",
    title: "¡VAMOS",
    highlight: "COLOMBIA! 🇨🇴",
    sub: "Envío gratis en Bogotá · Combos especiales",
    cta: "Ver combos",
    waMsg: "Hola Yesit! Vi la promo del Mundial 🏆 Quiero un combo con envío gratis en Bogotá. ¿Cuáles hay? 🇨🇴",
    overlay: "from-[#0a1628]/90 via-[#0a1628]/50 to-transparent",
    textColor: "text-white",
    highlightColor: "text-[#FFD100]",
    btnClass: "bg-[#FFD100] text-[#1B3A7A] hover:bg-white",
    badgeClass: "bg-white/20 text-white border border-white/30",
  },
  /* ── Slide 3: NEUROcell + Colágeno Glow ── */
  {
    type: "banner",
    img: "/images/slide-celion.png",
    alt: "NEUROcell y Colágeno Glow - Línea Celion",
    badge: "⚡ Línea Celion",
    title: "Mente clara.",
    highlight: "Piel radiante.",
    sub: "NEUROcell · Colágeno Glow · Fórmulas avanzadas",
    cta: "Conocer productos",
    waMsg: "Hola Yesit! Me interesan NEUROcell y Colágeno Glow de Celion. ¿Me cuentas los beneficios? 🧠🌟",
    overlay: "from-[#071428]/85 via-[#071428]/45 to-transparent",
    textColor: "text-white",
    highlightColor: "text-[#3ED9C4]",
    btnClass: "bg-[#3ED9C4] text-[#071428] hover:bg-white font-extrabold",
    badgeClass: "bg-[#3ED9C4]/20 text-[#3ED9C4] border border-[#3ED9C4]/40",
  },
  /* ── Slide 4: StemRenu + Café Lingzhi ── */
  {
    type: "banner",
    img: "/images/slide-energia.png",
    alt: "StemRenu y Café Lingzhi - Energía Natural",
    badge: "🌿 Bienestar Natural",
    title: "Renueva tu",
    highlight: "energía vital.",
    sub: "StemRenu · Café Lingzhi · Renovación desde adentro",
    cta: "Ver productos",
    waMsg: "Hola Yesit! Me interesan StemRenu y el Café Lingzhi. ¿Me explicas los beneficios? 🌿☕",
    overlay: "from-[#071e0f]/85 via-[#071e0f]/45 to-transparent",
    textColor: "text-white",
    highlightColor: "text-[#FFD100]",
    btnClass: "bg-[#FFD100] text-[#071e0f] hover:bg-white font-extrabold",
    badgeClass: "bg-[#FFD100]/20 text-[#FFD100] border border-[#FFD100]/40",
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
    }, 280);
  }, [animating]);

  const next = useCallback(() => goTo((current + 1) % slides.length), [current, goTo]);

  useEffect(() => {
    const t = setInterval(next, 5000);
    return () => clearInterval(t);
  }, [next]);

  const slide = slides[current];

  return (
    <section className="relative w-full overflow-hidden bg-[#1B3A7A]" aria-label="Banner promocional">

      <div
        className={`relative w-full transition-opacity duration-300 ${animating ? "opacity-0" : "opacity-100"}`}
        style={{ aspectRatio: "1200/400", minHeight: "220px", maxHeight: "420px" }}
      >

        {/* ── Slide tipo BANNER (imagen de fondo) ── */}
        {slide.type === "banner" && (
          <>
            <Image
              src={slide.img}
              alt={slide.alt}
              fill
              className="object-cover object-center"
              sizes="100vw"
              priority={current === 0}
            />
            <div className={`absolute inset-0 bg-gradient-to-r ${slide.overlay}`} />
            <div className="absolute inset-0 flex items-center">
              <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 w-full">
                <div className="max-w-[280px] sm:max-w-sm lg:max-w-md">
                  <span className={`inline-block text-[10px] sm:text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-2 sm:mb-3 ${slide.badgeClass}`}>
                    {slide.badge}
                  </span>
                  <h2 className={`font-extrabold leading-none tracking-tight text-3xl sm:text-5xl lg:text-6xl ${slide.textColor}`}>
                    {slide.title}
                  </h2>
                  <h2 className={`font-extrabold leading-none tracking-tight mb-2 sm:mb-3 text-3xl sm:text-5xl lg:text-6xl ${slide.highlightColor}`}>
                    {slide.highlight}
                  </h2>
                  <p className={`text-xs sm:text-base font-semibold mb-4 ${slide.textColor} opacity-90`}>
                    {slide.sub}
                  </p>
                  <a
                    href={`${WA}?text=${encodeURIComponent(slide.waMsg)}`}
                    target="_blank" rel="noopener noreferrer"
                    className={`inline-flex items-center gap-2 px-5 py-2.5 sm:px-6 sm:py-3 rounded-full font-bold text-xs sm:text-sm shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200 ${slide.btnClass}`}
                  >
                    {slide.cta} →
                  </a>
                </div>
              </div>
            </div>
          </>
        )}

        {/* ── Slide tipo PRODUCTO (imagen nítida) ── */}
        {slide.type === "product" && (
          <div className={`absolute inset-0 flex items-center bg-gradient-to-r ${slide.bg}`}>
            <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 w-full h-full flex items-center justify-between gap-4">

              {/* Texto izquierda */}
              <div className="flex-1 min-w-0 py-6">
                <span className={`inline-block text-[10px] sm:text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-3 ${slide.badgeClass}`}>
                  {slide.badge}
                </span>
                <h2 className={`font-extrabold leading-tight tracking-tight text-2xl sm:text-4xl lg:text-5xl ${slide.textColor} mb-1`}>
                  {slide.title}
                </h2>
                <h2 className={`font-extrabold leading-tight tracking-tight text-2xl sm:text-4xl lg:text-5xl mb-3 ${slide.highlightColor}`}>
                  {slide.highlight}
                </h2>
                <p className={`text-[11px] sm:text-sm font-medium mb-5 ${slide.textColor} opacity-75 leading-relaxed`}>
                  {slide.sub}
                </p>
                <a
                  href={`${WA}?text=${encodeURIComponent(slide.waMsg)}`}
                  target="_blank" rel="noopener noreferrer"
                  className={`inline-flex items-center gap-2 px-5 py-2.5 sm:px-7 sm:py-3 rounded-full text-xs sm:text-sm shadow-xl hover:shadow-2xl hover:-translate-y-0.5 transition-all duration-200 ${slide.btnClass}`}
                >
                  {slide.cta} →
                </a>
              </div>

              {/* Productos derecha — nítidos */}
              <div className="flex items-center justify-end gap-3 flex-shrink-0 h-full py-4">
                {/* Imagen principal */}
                <div className="relative h-full" style={{ width: "clamp(120px, 22vw, 260px)" }}>
                  <Image
                    src={slide.productImg}
                    alt={slide.productAlt}
                    fill
                    className="object-contain drop-shadow-2xl"
                    sizes="(max-width:640px) 120px, (max-width:1024px) 180px, 260px"
                  />
                </div>
                {/* Imagen secundaria */}
                {slide.secondImg && (
                  <div className="relative h-full hidden sm:block" style={{ width: "clamp(100px, 18vw, 220px)" }}>
                    <Image
                      src={slide.secondImg}
                      alt={slide.secondAlt ?? ""}
                      fill
                      className="object-contain drop-shadow-2xl opacity-90"
                      sizes="(max-width:1024px) 160px, 220px"
                    />
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Dots */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-2 z-10">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            aria-label={`Slide ${i + 1}`}
            className={`transition-all duration-300 rounded-full ${
              i === current ? "w-6 h-2 bg-white shadow" : "w-2 h-2 bg-white/40 hover:bg-white/70"
            }`}
          />
        ))}
      </div>

      {/* Flechas */}
      <button onClick={() => goTo((current - 1 + slides.length) % slides.length)} aria-label="Anterior"
        className="absolute left-3 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white/15 backdrop-blur-sm text-white flex items-center justify-center hover:bg-white/35 transition-all z-10 text-xl font-light">
        ‹
      </button>
      <button onClick={() => goTo((current + 1) % slides.length)} aria-label="Siguiente"
        className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white/15 backdrop-blur-sm text-white flex items-center justify-center hover:bg-white/35 transition-all z-10 text-xl font-light">
        ›
      </button>

      {/* Borde tricolor */}
      <div className="flex h-1">
        <div className="flex-1 bg-[#FFD100]" />
        <div className="flex-1 bg-[#1B3A7A]" />
        <div className="flex-1 bg-[#CE1126]" />
      </div>
    </section>
  );
}
