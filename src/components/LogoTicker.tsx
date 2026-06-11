import Image from "next/image";

const logos = [
  { src: "/images/logos/cert-anim.gif",   alt: "INVIMA - Instituto Nacional de Vigilancia de Medicamentos y Alimentos", w: 160, h: 60 },
  { src: "/images/logos/cert-iqnet.png",  alt: "IQNet - Certified Management System", w: 70,  h: 70 },
  { src: "/images/logos/cert-cqc.jpg",    alt: "CQC System Certification", w: 180, h: 70 },
  { src: "/images/logos/cert-kiffa.png",  alt: "KIFFA - International Certification", w: 70,  h: 70 },
  { src: "/images/logos/logo-tutienda.png", alt: "Tu Tienda de la Salud", w: 70, h: 70 },
];

// Duplicamos 4 veces para bucle continuo sin saltos
const track = [...logos, ...logos, ...logos, ...logos];

export default function LogoTicker() {
  return (
    <section className="bg-white border-y border-gray-100 py-4 overflow-hidden" aria-label="Certificaciones y respaldos">

      {/* Label */}
      <p className="text-center text-[11px] font-bold uppercase tracking-[0.2em] text-[#1B3A7A] mb-3">
        Laboratorios con certificaciones de alta calidad
      </p>

      {/* Ticker */}
      <div className="relative">
        {/* Degradados laterales para efecto fade */}
        <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        <div
          className="flex items-center gap-12 w-max"
          style={{ animation: "logoScroll 28s linear infinite" }}
        >
          {track.map((logo, i) => (
            <div key={i} className="flex-shrink-0 flex items-center justify-center opacity-80 hover:opacity-100 transition-opacity duration-300">
              <Image
                src={logo.src}
                alt={logo.alt}
                width={logo.w}
                height={logo.h}
                className="object-contain grayscale hover:grayscale-0 transition-all duration-300"
                unoptimized={logo.src.endsWith(".gif")}
              />
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes logoScroll {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-25%); }
        }
      `}</style>
    </section>
  );
}
