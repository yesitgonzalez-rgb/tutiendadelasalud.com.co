"use client";
import Image from "next/image";
import { ShoppingCart, MessageCircle } from "lucide-react";
import { useCart } from "@/context/CartContext";

// Calcula precio con 10% de descuento (formato colombiano: puntos como miles)
function applyDiscount(priceStr: string): string {
  const num = parseInt(priceStr.replace(/\./g, ""), 10);
  const discounted = Math.round(num * 0.9);
  return discounted.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

interface ProductCardProps {
  name: string;
  category: string;
  desc?: string;
  img: string;
  badge?: string;
  price?: string;
}

export default function ProductCard({
  name,
  category,
  desc,
  img,
  badge,
  price,
}: ProductCardProps) {
  const { addItem } = useCart();

  return (
    <div className="bg-white rounded-3xl overflow-hidden shadow-[0_8px_24px_rgba(0,0,0,0.07)] hover:shadow-[0_20px_48px_rgba(0,0,0,0.13)] hover:-translate-y-1.5 transition-all duration-300 group flex flex-col border border-gray-100">

      {/* Badge FUERA de la imagen — no tapa el producto */}
      {badge && (
        <div className="px-4 pt-4">
          <span className={`inline-flex items-center text-[10px] font-extrabold uppercase tracking-widest px-3 py-1.5 rounded-full ${
            badge === "Bestseller" ? "bg-amber-100 text-amber-800"
            : badge === "Premium"  ? "bg-[#1B3A7A]/10 text-[#1B3A7A]"
            : badge === "Natural"  ? "bg-green-100 text-green-700"
            : badge === "Nuevo"    ? "bg-[#3ED9C4]/20 text-[#1B3A7A]"
            : "bg-[#F0FAF7] text-[#1B3A7A]"
          }`}>
            {badge}
          </span>
        </div>
      )}

      {/* Imagen limpia sobre fondo blanco */}
      <div className="relative h-64 mx-2 mt-2 flex-shrink-0">
        <Image
          src={img}
          alt={name}
          fill
          className="object-contain group-hover:scale-105 transition-transform duration-500 ease-out"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        />
      </div>

      {/* Info */}
      <div className="p-5 flex flex-col flex-1">
        <span className="text-xs font-bold text-[#3ED9C4] uppercase tracking-wider">
          {category}
        </span>
        <h3 className="font-display font-bold text-[#1B3A7A] text-lg mt-1 mb-1 leading-snug">
          {name}
        </h3>
        {desc && (
          <p className="text-[#374151] text-xs leading-relaxed mb-3 flex-1">
            {desc}
          </p>
        )}

        {/* Precio con 10% descuento */}
        {price && (
          <div className="mb-3">
            {/* Fila: badge descuento + precio tachado */}
            <div className="flex items-center gap-2 mb-1.5">
              <span className="bg-red-500 text-white text-[9px] font-extrabold px-2 py-0.5 rounded-full tracking-wide">
                -10% DCTO
              </span>
              <span className="text-[#9CA3AF] text-xs line-through">
                ${price} COP
              </span>
            </div>
            {/* Precio final */}
            <div className="flex items-center gap-2 px-3 py-2 bg-[#F4F6F9] rounded-xl">
              <span className="text-[#3ED9C4] text-sm font-extrabold">✦</span>
              <span className="text-[#1B3A7A] font-extrabold text-sm">
                Desde ${applyDiscount(price)}
              </span>
              <span className="text-[#6B7280] text-xs">COP</span>
            </div>
          </div>
        )}

        {/* Botones */}
        <div className="flex flex-col gap-2 mt-auto">
          <button
            onClick={() => addItem({ name, category, img })}
            className="flex items-center justify-center gap-2 w-full bg-[#1B3A7A] text-white py-2.5 rounded-2xl font-semibold text-sm hover:bg-[#3ED9C4] hover:text-[#1B3A7A] hover:scale-[1.02] transition-all duration-200 shadow-sm hover:shadow-[0_6px_18px_rgba(62,217,196,0.35)]"
          >
            <ShoppingCart size={15} />
            Agregar al carrito
          </button>
          <a
            href="https://wa.me/573203358826"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full border border-[#1B3A7A]/20 text-[#1B3A7A] py-2 rounded-2xl font-medium text-xs hover:border-[#3ED9C4] hover:text-[#3ED9C4] hover:bg-[#3ED9C4]/5 transition-all duration-200"
          >
            <MessageCircle size={13} />
            Consultar por WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}
