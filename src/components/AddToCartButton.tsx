"use client";
import { ShoppingCart } from "lucide-react";
import { useCart } from "@/context/CartContext";

interface Props {
  name: string;
  category: string;
  img: string;
}

export default function AddToCartButton({ name, category, img }: Props) {
  const { addItem } = useCart();
  return (
    <button
      onPointerDown={() => addItem({ name, category, img })}
      style={{ touchAction: "manipulation" }}
      className="flex items-center justify-center gap-2 w-full bg-[#1B3A7A] text-white py-2.5 rounded-2xl font-semibold text-sm hover:bg-[#3ED9C4] hover:text-[#1B3A7A] hover:scale-[1.02] transition-all duration-200 shadow-sm hover:shadow-[0_6px_18px_rgba(62,217,196,0.35)]"
    >
      <ShoppingCart size={15} />
      Agregar al carrito
    </button>
  );
}
