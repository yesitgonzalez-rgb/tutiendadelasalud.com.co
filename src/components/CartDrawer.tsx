"use client";
import { useCart, CartItem } from "@/context/CartContext";
import Image from "next/image";
import { X, Trash2, Plus, Minus, ShoppingBag, MessageCircle } from "lucide-react";

function buildWhatsAppMessage(items: CartItem[]): string {
  const lines = items.map((item) => `• ${item.name} × ${item.quantity}`);
  const totalItems = items.reduce((sum, i) => sum + i.quantity, 0);
  const message = [
    "Hola Yesit! Quisiera hacer el siguiente pedido desde Tu Tienda de la Salud 🌿",
    "",
    "🛍️ *MI PEDIDO*",
    ...lines,
    "",
    `Total: ${totalItems} artículo${totalItems !== 1 ? "s" : ""}`,
    "",
    "Por favor indícame el valor y forma de pago. ¡Gracias!",
  ].join("\n");
  return encodeURIComponent(message);
}

export default function CartDrawer() {
  const {
    items,
    isOpen,
    closeCart,
    removeItem,
    updateQuantity,
    clearCart,
    totalItems,
  } = useCart();

  const whatsappUrl = `https://wa.me/573203358826?text=${buildWhatsAppMessage(items)}`;

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black/40 z-50 backdrop-blur-sm transition-opacity duration-300 ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={closeCart}
        aria-hidden="true"
      />

      {/* Drawer */}
      <div
        className={`fixed right-0 top-0 h-full w-full max-w-sm bg-white z-50 shadow-2xl flex flex-col transition-transform duration-300 ease-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
        role="dialog"
        aria-modal="true"
        aria-label="Carrito de compras"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-gray-100">
          <div className="flex items-center gap-3">
            <ShoppingBag size={20} className="text-[#1B3A7A]" />
            <h2 className="font-display font-bold text-[#1B3A7A] text-lg">
              Mi Pedido
            </h2>
            {totalItems > 0 && (
              <span className="bg-[#3ED9C4] text-[#1B3A7A] text-xs font-bold px-2.5 py-0.5 rounded-full">
                {totalItems}
              </span>
            )}
          </div>
          <button
            onClick={closeCart}
            style={{ touchAction: "manipulation" }}
            className="p-2 text-[#5A6478] hover:text-[#1B3A7A] transition-colors rounded-full hover:bg-gray-100"
            aria-label="Cerrar carrito"
          >
            <X size={20} />
          </button>
        </div>

        {/* Items list */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center py-12">
              <ShoppingBag size={52} className="text-gray-200 mb-4" />
              <p className="text-[#1B3A7A] font-semibold text-base">
                Tu carrito está vacío
              </p>
              <p className="text-[#5A6478] text-sm mt-2 leading-relaxed max-w-xs">
                Agrega productos y te enviaré el pedido directamente por WhatsApp.
              </p>
              <button
                onClick={closeCart}
                style={{ touchAction: "manipulation" }}
                className="mt-6 text-[#1B3A7A] font-semibold text-sm border border-[#1B3A7A]/30 px-5 py-2 rounded-full hover:border-[#1B3A7A] transition-colors"
              >
                Ver productos
              </button>
            </div>
          ) : (
            <ul className="space-y-3">
              {items.map((item) => (
                <li
                  key={item.name}
                  className="flex gap-3 bg-[#F4F6F9] rounded-2xl p-3"
                >
                  {/* Imagen */}
                  <div className="relative w-16 h-16 flex-shrink-0 rounded-xl overflow-hidden bg-white">
                    <Image
                      src={item.img}
                      alt={item.name}
                      fill
                      className="object-contain p-1.5"
                      sizes="64px"
                    />
                  </div>

                  {/* Info */}
                  <div className="flex-1 min-w-0">
                    <p className="font-semibold text-[#1B3A7A] text-sm leading-snug line-clamp-2">
                      {item.name}
                    </p>
                    <p className="text-[#3ED9C4] text-xs font-medium mt-0.5">
                      {item.category}
                    </p>

                    {/* Controles de cantidad */}
                    <div className="flex items-center gap-2 mt-2">
                      <button
                        onClick={() =>
                          updateQuantity(item.name, item.quantity - 1)
                        }
                        style={{ touchAction: "manipulation" }}
                        className="w-9 h-9 rounded-full bg-white border border-gray-200 flex items-center justify-center text-[#1B3A7A] hover:border-[#3ED9C4] hover:text-[#3ED9C4] transition-colors"
                        aria-label="Reducir cantidad"
                      >
                        <Minus size={12} />
                      </button>
                      <span className="text-[#1B3A7A] font-bold text-sm w-6 text-center">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() =>
                          updateQuantity(item.name, item.quantity + 1)
                        }
                        style={{ touchAction: "manipulation" }}
                        className="w-9 h-9 rounded-full bg-white border border-gray-200 flex items-center justify-center text-[#1B3A7A] hover:border-[#3ED9C4] hover:text-[#3ED9C4] transition-colors"
                        aria-label="Aumentar cantidad"
                      >
                        <Plus size={12} />
                      </button>
                    </div>
                  </div>

                  {/* Eliminar */}
                  <button
                    onClick={() => removeItem(item.name)}
                    style={{ touchAction: "manipulation" }}
                    className="text-gray-300 hover:text-red-400 transition-colors self-start pt-1 flex-shrink-0 p-1"
                    aria-label={`Eliminar ${item.name}`}
                  >
                    <Trash2 size={16} />
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Footer con checkout */}
        {items.length > 0 && (
          <div className="px-6 py-5 border-t border-gray-100 space-y-3 bg-white">
            <div className="flex justify-between text-sm text-[#5A6478] mb-1">
              <span>
                {totalItems} artículo{totalItems !== 1 ? "s" : ""} en tu pedido
              </span>
            </div>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full bg-[#25D366] text-white py-4 rounded-2xl font-bold text-base hover:bg-[#20b858] transition-colors shadow-lg"
            >
              <MessageCircle size={20} />
              Enviar pedido por WhatsApp
            </a>

            <button
              onClick={clearCart}
              style={{ touchAction: "manipulation" }}
              className="w-full text-[#5A6478] text-sm hover:text-red-400 transition-colors py-3 font-medium"
            >
              Vaciar carrito
            </button>
          </div>
        )}
      </div>
    </>
  );
}
