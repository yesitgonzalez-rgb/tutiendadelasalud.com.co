"use client";

import { useState, useEffect, useRef } from "react";
import { useCart } from "@/context/CartContext";

const WA_URL = "https://wa.me/573203358826";

function IconWhatsApp({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

const FLOWS = {
  familia: {
    label: "🌿 Productos para toda la familia",
    botReply: "¡Me alegra que cuides a tu familia! Tenemos productos para niños, adultos y adultos mayores. Cuéntame las edades y yo te recomiendo lo ideal para cada uno 💚",
    waMsg: "Hola Yesit! Estoy buscando productos para toda mi familia. ¿Qué me recomiendas según las edades? 🌿",
  },
  suplementos: {
    label: "💊 Suplementos y vitaminas",
    botReply: "¡Excelente! Tenemos Probióticos, Calcio, Omegas, BIOMEGA, MULTYDRINK y más. ¿Tienes algún objetivo específico? (digestión, huesos, energía, inmunidad…) 💪",
    waMsg: "Hola Yesit! Me interesan los suplementos y vitaminas. ¿Qué opciones tienen disponibles? 💊",
  },
  mujer: {
    label: "🌸 Bienestar para mujeres",
    botReply: "¡Con mucho gusto! Para mujeres tenemos Colágeno GLOW, protector solar, Reishi Gano para equilibrio hormonal y más. ¡Te cuento los detalles ahora! 🌸",
    waMsg: "Hola Yesit! Busco productos de bienestar y cuidado especialmente para mujeres. ¿Qué me recomiendas? 🌸",
  },
  asesoria: {
    label: "💬 Quiero asesoría personalizada",
    botReply: "¡Por supuesto! Como asesor de bienestar me encanta ayudarte a encontrar exactamente lo que tu cuerpo necesita. Cuéntame un poco sobre ti y te oriento de inmediato 🙌",
    waMsg: "Hola Yesit! Me gustaría recibir una asesoría personalizada sobre productos de bienestar y salud. 💬",
  },
} as const;

type FlowKey = keyof typeof FLOWS;

export default function WhatsAppWidget() {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState<FlowKey | null>(null);
  const [typing, setTyping] = useState(false);
  const [showReply, setShowReply] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);
  const { isOpen: cartOpen } = useCart();

  useEffect(() => {
    if (open) bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [open, showReply, typing]);

  const handleSelect = (key: FlowKey) => {
    setSelected(key);
    setTyping(true);
    setShowReply(false);
    setTimeout(() => {
      setTyping(false);
      setShowReply(true);
    }, 1600);
  };

  const handleClose = () => {
    setOpen(false);
    setTimeout(() => {
      setSelected(null);
      setTyping(false);
      setShowReply(false);
    }, 300);
  };

  const waTarget = selected
    ? `${WA_URL}?text=${encodeURIComponent(FLOWS[selected].waMsg)}`
    : `${WA_URL}?text=${encodeURIComponent("Hola Yesit! Vi tu tienda de salud y me gustaría recibir más información. 🌿")}`;

  // Ocultar widget cuando el carrito está abierto para no tapar sus botones
  if (cartOpen) return null;

  return (
    <div className="fixed bottom-24 right-4 sm:bottom-6 sm:right-6 z-50 flex flex-col items-end gap-3 pointer-events-none">

      {/* ── Popup chat ── */}
      <div
        className={`w-80 bg-white rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.18)] overflow-hidden transition-all duration-300 origin-bottom-right pointer-events-auto ${
          open
            ? "opacity-100 scale-100 translate-y-0"
            : "opacity-0 scale-90 translate-y-4 pointer-events-none"
        }`}
      >
        {/* Header — colores de Tu Tienda */}
        <div className="bg-[#1B3A7A] px-4 py-4 flex items-center gap-3">
          <div className="w-11 h-11 rounded-full bg-[#3ED9C4]/20 border-2 border-[#3ED9C4]/40 flex items-center justify-center flex-shrink-0">
            <IconWhatsApp size={22} />
          </div>
          <div className="flex-1 min-w-0">
            <p className="font-bold text-white text-sm leading-tight">Yesit González</p>
            <p className="text-white/70 text-xs">Asesor · Tu Tienda de la Salud</p>
            <div className="flex items-center gap-1 mt-0.5">
              <span className="w-2 h-2 bg-[#3ED9C4] rounded-full animate-pulse" />
              <span className="text-white/60 text-[10px]">En línea</span>
            </div>
          </div>
          <button
            onClick={handleClose}
            aria-label="Cerrar chat"
            className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors flex-shrink-0"
          >
            ✕
          </button>
        </div>

        {/* Área de conversación */}
        <div className="bg-[#ECE5DD] px-4 py-4 flex flex-col gap-3 max-h-72 overflow-y-auto">

          {/* Mensaje inicial */}
          <div className="flex items-end gap-2">
            <div className="w-7 h-7 rounded-full bg-[#1B3A7A] flex items-center justify-center flex-shrink-0">
              <span className="text-white text-[10px] font-bold">Y</span>
            </div>
            <div className="bg-white rounded-2xl rounded-tl-sm px-4 py-3 shadow-sm max-w-[85%]">
              <p className="text-[#1B3A7A] text-sm leading-relaxed font-semibold">
                👋 ¡Hola! Soy Yesit, tu asesor de bienestar.
              </p>
              <p className="text-gray-600 text-sm leading-relaxed mt-1">
                ¿En qué te puedo ayudar hoy? 🌿
              </p>
              <p className="text-gray-400 text-[10px] mt-1.5 text-right">ahora</p>
            </div>
          </div>

          {/* Opciones de respuesta rápida */}
          {!selected && (
            <div className="flex flex-col gap-2 ml-9">
              {(Object.entries(FLOWS) as [FlowKey, typeof FLOWS[FlowKey]][]).map(([key, flow]) => (
                <button
                  key={key}
                  onClick={() => handleSelect(key)}
                  className="text-left bg-white border-2 border-[#1B3A7A]/20 text-[#1B3A7A] text-xs font-semibold px-3 py-2.5 rounded-xl hover:bg-[#1B3A7A] hover:text-white hover:border-[#1B3A7A] transition-all duration-200 shadow-sm"
                >
                  {flow.label}
                </button>
              ))}
            </div>
          )}

          {/* Respuesta del usuario */}
          {selected && (
            <div className="flex justify-end">
              <div className="bg-[#DCF8C6] rounded-2xl rounded-tr-sm px-4 py-2.5 shadow-sm max-w-[80%]">
                <p className="text-[#1B3A7A] text-sm">{FLOWS[selected].label}</p>
                <p className="text-gray-400 text-[10px] mt-1 text-right">ahora ✓✓</p>
              </div>
            </div>
          )}

          {/* Indicador escribiendo */}
          {typing && (
            <div className="flex items-end gap-2">
              <div className="w-7 h-7 rounded-full bg-[#1B3A7A] flex items-center justify-center flex-shrink-0">
                <span className="text-white text-[10px] font-bold">Y</span>
              </div>
              <div className="bg-white rounded-2xl rounded-tl-sm px-4 py-3 shadow-sm">
                <div className="flex items-center gap-1">
                  <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                  <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                  <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
                </div>
              </div>
            </div>
          )}

          {/* Respuesta de Yesit */}
          {showReply && selected && (
            <div className="flex items-end gap-2">
              <div className="w-7 h-7 rounded-full bg-[#1B3A7A] flex items-center justify-center flex-shrink-0">
                <span className="text-white text-[10px] font-bold">Y</span>
              </div>
              <div className="bg-white rounded-2xl rounded-tl-sm px-4 py-3 shadow-sm max-w-[85%]">
                <p className="text-gray-700 text-sm leading-relaxed">{FLOWS[selected].botReply}</p>
                <p className="text-gray-400 text-[10px] mt-1.5 text-right">ahora</p>
              </div>
            </div>
          )}

          <div ref={bottomRef} />
        </div>

        {/* Botón abrir chat */}
        <div className="bg-white px-4 py-4">
          <a
            href={waTarget}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleClose}
            className="flex items-center justify-center gap-2 w-full bg-[#25D366] text-white font-bold text-sm py-3 rounded-xl hover:bg-[#1ebe5d] transition-colors shadow-sm"
          >
            <IconWhatsApp size={18} />
            {showReply ? "¡Continuar con Yesit!" : "Abrir chat"}
          </a>
          <p className="text-center text-gray-400 text-[10px] mt-2">
            Asesoría gratuita · <span className="text-[#1B3A7A] font-semibold">Tu Tienda de la Salud</span>
          </p>
        </div>
      </div>

      {/* ── Botón flotante ── */}
      <button
        onClick={() => setOpen(!open)}
        style={{ touchAction: "manipulation" }}
        aria-label={open ? "Cerrar chat" : "Abrir chat con Yesit"}
        className="relative flex items-center justify-center w-16 h-16 rounded-full bg-[#25D366] text-white shadow-[0_8px_32px_rgba(37,211,102,0.5)] hover:shadow-[0_12px_48px_rgba(37,211,102,0.7)] hover:scale-110 transition-all duration-300 pointer-events-auto"
      >
        {!open && (
          <>
            <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-25" />
            <span className="absolute inset-[-5px] rounded-full border-2 border-[#25D366]/30 animate-pulse" />
          </>
        )}
        <span className={`transition-all duration-200 ${open ? "rotate-90 scale-90" : "rotate-0 scale-100"}`}>
          {open
            ? <span className="text-xl font-bold leading-none">✕</span>
            : <IconWhatsApp size={30} />
          }
        </span>
      </button>
    </div>
  );
}
