"use client";
import { useEffect, useRef } from "react";
import { MessageCircle, ChevronDown } from "lucide-react";

export default function VideoHero() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {});
    }
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover"
        src="/videos/hero-bg.mp4"
        autoPlay
        muted
        loop
        playsInline
        style={{ filter: "brightness(0.7)" }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-[#1B3A7A]/80 via-[#1B3A7A]/60 to-[#0d2a5e]/70" />

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <span className="inline-block bg-[#3ED9C4] text-[#1B3A7A] text-xs font-bold px-4 py-1.5 rounded-full mb-8 tracking-widest uppercase">
          Envíos a todo Colombia
        </span>
        <h1 className="font-display font-extrabold text-white leading-tight mb-6">
          <span className="block text-5xl md:text-7xl">Tu cuerpo sabe</span>
          <span className="block text-5xl md:text-7xl text-[#3ED9C4]">
            lo que necesita.
          </span>
          <span className="block text-3xl md:text-4xl font-semibold mt-2 text-white/90">
            Nosotros lo tenemos.
          </span>
        </h1>
        <p className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
          Productos orgánicos naturales para tu bienestar integral. Cuida tu
          salud física, mental y fortalece tu sistema inmune.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#productos"
            className="bg-white text-[#1B3A7A] px-8 py-4 rounded-full font-bold text-base hover:bg-[#3ED9C4] hover:text-white transition-all duration-300 shadow-lg"
          >
            Ver Productos
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
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/50 animate-bounce">
        <ChevronDown size={32} />
      </div>
    </section>
  );
}
