"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, MessageCircle } from "lucide-react";

const navLinks = [
  { href: "#categorias", label: "Categorías" },
  { href: "#productos", label: "Productos" },
  { href: "#asesora", label: "Tu Asesora" },
  { href: "#videos", label: "Videos" },
  { href: "#contacto", label: "Contáctenos" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-shadow duration-300 bg-white ${
        scrolled ? "shadow-md" : ""
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
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

          <button
            className="md:hidden p-2 text-[#1B3A7A]"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

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
