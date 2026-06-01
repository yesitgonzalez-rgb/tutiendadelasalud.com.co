"use client";
import { useState, useEffect, useCallback, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const videos = [
  {
    src: "/videos/personaje-lingzhi.mp4",
    title: "Lingzhi Black Coffee",
    tag: "Energía Natural",
    poster: "/images/cafe-lingzhi.png",
  },
  {
    src: "/videos/personaje-cocozhi.mp4",
    title: "Cocozhi",
    tag: "Bebidas Nutritivas",
    poster: "/images/cafe-cocozhi.png",
  },
  {
    src: "/videos/personaje-zhimocha.mp4",
    title: "Zhi Mocha",
    tag: "Café Premium",
    poster: "/images/cafe-zhimocha.png",
  },
  {
    src: "/videos/personaje-reizhigano.mp4",
    title: "Reishi Gano",
    tag: "Bienestar Integral",
    poster: "/images/producto-5.jpeg",
  },
  {
    src: "/videos/personaje-spirulina.mp4",
    title: "Spirulina",
    tag: "Nutrición Natural",
    poster: "/images/producto-12.jpeg",
  },
  {
    src: "/videos/personaje-roselle.mp4",
    title: "Roselle",
    tag: "Infusión Natural",
    poster: "",
  },
];

const INTERVAL_MS = 5000;

export default function VideoCarousel() {
  const [idx, setIdx] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const resetTimer = useCallback((newIdx: number) => {
    if (timerRef.current) clearInterval(timerRef.current);
    setIdx(newIdx);
    timerRef.current = setInterval(() => {
      setIdx((i) => (i + 1) % videos.length);
    }, INTERVAL_MS);
  }, []);

  useEffect(() => {
    timerRef.current = setInterval(() => {
      setIdx((i) => (i + 1) % videos.length);
    }, INTERVAL_MS);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  const prev = () => resetTimer((idx - 1 + videos.length) % videos.length);
  const next = () => resetTimer((idx + 1) % videos.length);

  // Visible indices: prev, current, next (3 items on desktop)
  const getVisible = () => {
    return [
      (idx - 1 + videos.length) % videos.length,
      idx,
      (idx + 1) % videos.length,
    ];
  };

  const visibleIdxs = getVisible();

  return (
    <section className="py-24 bg-[#0d2452] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="text-[#3ED9C4] font-semibold text-sm uppercase tracking-widest">
            Experiencia visual
          </span>
          <h2 className="font-display font-bold text-white text-4xl md:text-5xl mt-3 mb-4">
            Conoce cada producto.
          </h2>
          <p className="text-white/60 max-w-xl mx-auto text-lg leading-relaxed">
            Antes de comprar, míralo en detalle. Cada personaje 3D te muestra qué es y para qué sirve.
          </p>
        </div>

        {/* Carousel */}
        <div className="relative flex items-center justify-center gap-4 lg:gap-6">
          {/* Prev button */}
          <button
            onClick={prev}
            aria-label="Anterior"
            className="shrink-0 w-11 h-11 rounded-full bg-white/10 border border-white/20 text-white flex items-center justify-center hover:bg-[#3ED9C4] hover:border-[#3ED9C4] hover:text-[#1B3A7A] transition-all duration-200 z-10"
          >
            <ChevronLeft size={20} />
          </button>

          {/* Videos — 1 en mobile, 3 en desktop */}
          <div className="flex-1 overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-6">
              {visibleIdxs.map((vIdx, position) => {
                const v = videos[vIdx];
                const isCenter = position === 1;
                return (
                  <div
                    key={`${vIdx}-${position}`}
                    className={`transition-all duration-500 ${
                      position !== 1 ? "hidden lg:block" : ""
                    }`}
                  >
                    <div
                      className={`rounded-2xl overflow-hidden transition-all duration-500 ${
                        isCenter
                          ? "ring-2 ring-[#3ED9C4] shadow-2xl shadow-[#3ED9C4]/20 scale-100"
                          : "opacity-50 scale-95"
                      }`}
                    >
                      <video
                        key={v.src}
                        src={v.src}
                        poster={v.poster || undefined}
                        controls
                        preload="none"
                        className="w-full aspect-video object-cover bg-[#0d2452]"
                      />
                      <div className="bg-[#1B3A7A] px-4 py-3 flex items-center justify-between">
                        <div>
                          <span className="text-[#3ED9C4] text-[10px] font-extrabold uppercase tracking-widest block">
                            {v.tag}
                          </span>
                          <p className="text-white font-display font-bold text-sm mt-0.5">
                            {v.title}
                          </p>
                        </div>
                        {isCenter && (
                          <span className="text-[#3ED9C4]/60 text-xs">
                            {vIdx + 1} / {videos.length}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Next button */}
          <button
            onClick={next}
            aria-label="Siguiente"
            className="shrink-0 w-11 h-11 rounded-full bg-white/10 border border-white/20 text-white flex items-center justify-center hover:bg-[#3ED9C4] hover:border-[#3ED9C4] hover:text-[#1B3A7A] transition-all duration-200 z-10"
          >
            <ChevronRight size={20} />
          </button>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {videos.map((_, i) => (
            <button
              key={i}
              onClick={() => resetTimer(i)}
              aria-label={`Ir al video ${i + 1}`}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === idx
                  ? "bg-[#3ED9C4] w-8"
                  : "bg-white/20 w-2 hover:bg-white/40"
              }`}
            />
          ))}
        </div>

        {/* Barra de progreso */}
        <div className="mt-6 max-w-xs mx-auto">
          <div className="h-0.5 bg-white/10 rounded-full overflow-hidden">
            <div
              key={idx}
              className="h-full bg-[#3ED9C4] rounded-full"
              style={{
                animation: `progress ${INTERVAL_MS}ms linear forwards`,
              }}
            />
          </div>
        </div>
      </div>

      <style>{`
        @keyframes progress {
          from { width: 0%; }
          to { width: 100%; }
        }
      `}</style>
    </section>
  );
}
