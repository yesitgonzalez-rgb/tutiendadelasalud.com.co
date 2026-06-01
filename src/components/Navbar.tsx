"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, MessageCircle, ShoppingCart } from "lucide-react";
import { useCart } from "@/context/CartContext";

const navLinks = [
  { href: "#energia", label: "Energía Natural" },
  { href: "#bienestar", label: "Bienestar Integral" },
  { href: "#cuidado", label: "Cuidado Personal" },
  { href: "#combos", label: "Combos Wellness" },
  { href: "#asesora", label: "Nosotros" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { openCart, totalItems } = useCart();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-40 transition-shadow duration-300 bg-white ${
        scrolled ? "shadow-md" : ""
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <Image
              src="/images/logo.png"
              alt="Tu Tienda de la Salud"
              width={220}
              height={60}
              className="h-12 w-auto"
              priority
            />
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-[#5A6478] hover:text-[#1B3A7A] transition-colors"
              >
                {link.label}
              </Link>
            ))}

            {/* Carrito */}
            <button
              onClick={openCart}
              className="relative p-2 text-[#1B3A7A] hover:text-[#3ED9C4] transition-colors"
              aria-label="Abrir carrito"
            >
              <ShoppingCart size={22} />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-[#3ED9C4] text-[#1B3A7A] text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">
                  {totalItems > 9 ? "9+" : totalItems}
                </span>
              )}
            </button>

            <a
              href="https://wa.me/573203358826"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-[#25D366] text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-[#20b858] transition-colors"
            >
              <MessageCircle size={16} />
              Escríbenos
            </a>
          </div>

          {/* Mobile: carrito + hamburguesa */}
          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={openCart}
              className="relative p-2 text-[#1B3A7A]"
              aria-label="Abrir carrito"
            >
              <ShoppingCart size={22} />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-[#3ED9C4] text-[#1B3A7A] text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">
                  {totalItems > 9 ? "9+" : totalItems}
                </span>
              )}
            </button>
            <button
              className="p-2 text-[#1B3A7A]"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
            >
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden pb-4 border-t border-gray-100 pt-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block py-2.5 text-sm font-medium text-[#5A6478] hover:text-[#1B3A7A]"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="https://wa.me/573203358826"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-3 bg-[#25D366] text-white px-5 py-2.5 rounded-full text-sm font-semibold"
            >
              <MessageCircle size={16} />
              Escríbenos por WhatsApp
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}
