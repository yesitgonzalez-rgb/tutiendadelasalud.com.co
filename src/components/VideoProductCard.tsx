"use client";
import { ShoppingCart, MessageCircle } from "lucide-react";
import { useCart } from "@/context/CartContext";

interface VideoProductCardProps {
  name: string;
  category: string;
  desc?: string;
  videoSrc: string;
  /** Imagen de fallback para el carrito (thumbnail) */
  img?: string;
  /** Imagen que aparece antes de que inicie el video (poster) */
  poster?: string;
  badge?: string;
}

export default function VideoProductCard({
  name,
  category,
  desc,
  videoSrc,
  img,
  poster,
  badge,
}: VideoProductCardProps) {
  const { addItem } = useCart();

  // Para el carrito usamos una imagen placeholder si no hay img
  const cartImg = img ?? "/images/logo.png";

  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow group relative flex flex-col">
      {badge && (
        <div
          className={`absolute top-3 left-3 z-10 text-xs font-bold px-3 py-1 rounded-full ${
            badge === "Bestseller"
              ? "bg-amber-400 text-amber-900"
              : badge === "Premium"
              ? "bg-[#1B3A7A] text-white"
              : badge === "Natural"
              ? "bg-green-500 text-white"
              : "bg-[#3ED9C4] text-[#1B3A7A]"
          }`}
        >
          {badge}
        </div>
      )}

      {/* Video preview */}
      <div className="relative h-56 bg-[#F4F6F9] overflow-hidden flex-shrink-0">
        {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
        <video
          src={videoSrc}
          autoPlay
          muted
          loop
          playsInline
          poster={poster}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Info */}
      <div className="p-5 flex flex-col flex-1">
        <span className="text-xs font-semibold text-[#3ED9C4] uppercase tracking-wider">
          {category}
        </span>
        <h3 className="font-display font-bold text-[#1B3A7A] text-lg mt-1 mb-1 leading-snug">
          {name}
        </h3>
        {desc && (
          <p className="text-[#5A6478] text-xs leading-relaxed mb-4 flex-1">
            {desc}
          </p>
        )}

        {/* Botones */}
        <div className="flex flex-col gap-2 mt-auto">
          <button
            onClick={() => addItem({ name, category, img: cartImg })}
            className="flex items-center justify-center gap-2 w-full bg-[#1B3A7A] text-white py-2.5 rounded-xl font-semibold text-sm hover:bg-[#3ED9C4] hover:text-[#1B3A7A] transition-colors"
          >
            <ShoppingCart size={15} />
            Agregar al carrito
          </button>
          <a
            href="https://wa.me/573203358826"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full border border-[#1B3A7A]/20 text-[#1B3A7A] py-2 rounded-xl font-medium text-xs hover:border-[#3ED9C4] hover:text-[#3ED9C4] transition-colors"
          >
            <MessageCircle size={13} />
            Consultar por WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}
