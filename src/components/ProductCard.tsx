"use client";
import Image from "next/image";
import { ShoppingCart, MessageCircle } from "lucide-react";
import { useCart } from "@/context/CartContext";

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
    <div className="bg-white rounded-3xl overflow-hidden shadow-[0_8px_24px_rgba(0,0,0,0.07)] hover:shadow-[0_20px_48px_rgba(0,0,0,0.13)] hover:-translate-y-1.5 transition-all duration-300 group relative flex flex-col">
      {badge && (
        <div
          className={`absolute top-3 left-3 z-10 text-xs font-bold px-3 py-1 rounded-full shadow-sm ${
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

      {/* Imagen */}
      <div className="relative h-56 bg-gray-50 overflow-hidden flex-shrink-0 rounded-t-3xl">
        <Image
          src={img}
          alt={name}
          fill
          className="object-contain p-4 group-hover:scale-108 transition-transform duration-500 ease-out"
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

        {/* Precio elegante */}
        {price && (
          <div className="flex items-center gap-2 mb-3 px-3 py-2 bg-[#F4F6F9] rounded-xl">
            <span className="text-[#3ED9C4] text-sm font-extrabold">✦</span>
            <span className="text-[#1B3A7A] font-extrabold text-sm">
              Desde ${price}
            </span>
            <span className="text-[#6B7280] text-xs">COP</span>
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
