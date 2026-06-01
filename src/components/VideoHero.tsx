"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { MessageCircle, ChevronDown, Volume2, VolumeX } from "lucide-react";

export default function VideoHero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(true);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {});
    }
  }, []);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">

      {/* Móvil: imagen estática con priority → LCP ~0.5s */}
      <div className="md:hidden absolute inset-0">
        <Image
          src="/images/celion-boost.jpeg"
          alt="Tu Tienda de la Salud — Productos naturales para tu bienestar"
          fill
          priority
          className="object-cover brightness-75"
          sizes="100vw"
        />
      </div>

      {/* Escritorio: video en loop */}
      <video
        ref={videoRef}
        className="hidden md:block absolute inset-0 w-full h-full object-cover"
        src="/videos/hero-bg.mp4"
        poster="/images/celion-boost.jpeg"
        autoPlay
        muted
        loop
        playsInline
        preload="none"
        style={{ filter: "brightness(0.7)" }}
      />

      <div className="absolute inset-0 bg-gradient-to-br from-[#1B3A7A]/80 via-[#1B3A7A]/60 to-[#0d2a5e]/70" />

      {/* Contenido central */}
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
            href="#tienda"
            className="bg-white text-[#1B3A7A] px-8 py-4 rounded-full font-bold text-base hover:bg-[#3ED9C4] hover:text-white transition-all duration-300 shadow-lg"
          >
            Descubrir productos
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

      {/* Botón silenciar — solo visible en escritorio donde hay video */}
      <button
        onClick={toggleMute}
        aria-label={isMuted ? "Activar sonido" : "Silenciar"}
        className="hidden md:flex absolute bottom-8 right-6 z-20 items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/30 text-white text-xs font-semibold px-4 py-2.5 rounded-full hover:bg-white/20 transition-all duration-300"
      >
        {isMuted ? (
          <>
            <VolumeX size={15} />
            Activar sonido
          </>
        ) : (
          <>
            <Volume2 size={15} />
            Silenciar
          </>
        )}
      </button>

      {/* Flecha scroll */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/50 animate-bounce">
        <ChevronDown size={32} />
      </div>
    </section>
  );
}
