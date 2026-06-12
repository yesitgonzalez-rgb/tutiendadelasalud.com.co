"use client";
import Image from "next/image";
import { ShoppingCart, MessageCircle } from "lucide-react";
import { useCart } from "@/context/CartContext";

function applyMarkup(priceStr: string): string {
  const num = parseInt(priceStr.replace(/\./g, ""), 10);
  const increased = Math.round(num * 1.1);
  return increased.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

interface CelionCardProps {
  name: string;
  subtitle: string;
  tagline: string;
  img: string;
  bullets: string[];
  price?: string;
}

export default function CelionCard({
  name,
  subtitle,
  tagline,
  img,
  bullets,
  price,
}: CelionCardProps) {
  const { addItem } = useCart();

  return (
    <div className="bg-[#0d1f3c] rounded-3xl overflow-hidden border border-white/5 hover:border-[#F26010]/40 hover:-translate-y-1.5 hover:shadow-[0_20px_48px_rgba(242,96,16,0.18)] transition-all duration-300 group flex flex-col shadow-[0_8px_28px_rgba(0,0,0,0.35)]">
      {/* Imagen producto — alta para mostrar infografía */}
      <div className="relative h-72 bg-[#070f1a] overflow-hidden flex-shrink-0">
        <Image
          src={img}
          alt={name}
          fill
          className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        />
        {/* Gradiente inferior para legibilidad */}
        <div className="absolute bottom-0 inset-x-0 h-16 bg-gradient-to-t from-[#0d1f3c] to-transparent" />
      </div>

      {/* Contenido */}
      <div className="p-5 flex flex-col flex-1">
        <span className="text-[#F26010] text-[10px] font-extrabold uppercase tracking-widest mb-1">
          {subtitle}
        </span>
        <h3 className="font-display font-bold text-white text-lg mb-1 leading-snug">
          {name}
        </h3>
        <p className="text-white/50 text-xs leading-relaxed mb-4">
          {tagline}
        </p>

        {/* Bullets clave */}
        <ul className="space-y-1 mb-5 flex-1">
          {bullets.map((b) => (
            <li key={b} className="flex items-start gap-2 text-xs text-white/70">
              <span className="text-[#F26010] mt-0.5 flex-shrink-0">▸</span>
              {b}
            </li>
          ))}
        </ul>

        {/* Precio con incremento del 10% */}
        {price && (
          <div className="flex items-center gap-2 mb-3 px-3 py-2 bg-white/5 border border-white/10 rounded-xl">
            <span className="text-[#F26010] text-sm font-extrabold">✦</span>
            <span className="text-white font-extrabold text-sm">Desde ${applyMarkup(price)}</span>
            <span className="text-white/40 text-xs">COP</span>
          </div>
        )}

        {/* Botones */}
        <div className="flex flex-col gap-2 mt-auto">
          <button
            onClick={() =>
              addItem({ name, category: "Nutrición Celular · Celion", img })
            }
            className="flex items-center justify-center gap-2 w-full bg-[#F26010] text-white py-2.5 rounded-xl font-bold text-sm hover:bg-[#d9530d] hover:scale-[1.02] hover:shadow-[0_6px_20px_rgba(242,96,16,0.4)] transition-all duration-200"
          >
            <ShoppingCart size={15} />
            Agregar al carrito
          </button>
          <a
            href={`https://wa.me/573203358826?text=${encodeURIComponent(
              `Hola Yesit! Me interesa el ${name} de Celion. ¿Me das más información? 🌿`
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full border border-white/10 text-white/60 py-2 rounded-xl font-medium text-xs hover:border-[#F26010]/50 hover:text-[#F26010] transition-colors"
          >
            <MessageCircle size={13} />
            Consultar por WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}
