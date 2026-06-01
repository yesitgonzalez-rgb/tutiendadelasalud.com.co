import type { Metadata } from "next";
import { Montserrat, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import WhatsAppButton from "@/components/WhatsAppButton";
import CartDrawer from "@/components/CartDrawer";
import { CartProvider } from "@/context/CartContext";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Tu Tienda de la Salud | Bienestar Integral",
  description:
    "Distribuidores de productos orgánicos naturales. Cuida tu salud física, mental e inmunológica. Envíos a todo Colombia.",
  keywords:
    "productos orgánicos, naturales, salud, bienestar integral, suplementos, nutrición celular, bebidas saludables, Colombia",
  openGraph: {
    title: "Tu Tienda de la Salud | Bienestar Integral",
    description:
      "Productos orgánicos naturales para tu bienestar integral. Envíos a todo Colombia.",
    type: "website",
    locale: "es_CO",
  },
  icons: {
    icon: "/images/favicon.png",
    apple: "/images/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${montserrat.variable} ${plusJakarta.variable} font-sans antialiased`}
      >
        <CartProvider>
          <Navbar />
          <CartDrawer />
          <main>{children}</main>
          <WhatsAppButton />
        </CartProvider>
      </body>
    </html>
  );
}
