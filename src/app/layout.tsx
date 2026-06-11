import type { Metadata } from "next";
import { Montserrat, Plus_Jakarta_Sans } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Navbar from "@/components/Navbar";
import WhatsAppButton from "@/components/WhatsAppButton";
import CartDrawer from "@/components/CartDrawer";
import { CartProvider } from "@/context/CartContext";
import PixelEvents from "@/components/PixelEvents";

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
  metadataBase: new URL("https://tutiendadelasalud.com.co"),
  title: "Tu Tienda de la Salud | Productos Naturales Colombia",
  description:
    "Tienda de productos premium de bienestar integral en Colombia. Ganoderma, colágeno, suplementos y nutrición celular con certificaciones internacionales. Cuida tu salud física, mental e inmunológica. Envíos a todo Colombia.",
  keywords:
    "productos naturales Colombia, tienda premium bienestar Colombia, tienda de la salud Colombia, ganoderma Colombia, ganoderma Bogotá, suplementos naturales Colombia, colágeno hidrolizado Colombia, colágeno Bogotá, bebidas saludables Colombia, bienestar integral, nutrición celular, productos orgánicos Colombia, NEUROcell Colombia, Colágeno Glow Colombia, StemRenu Colombia, celion Colombia, café con ganoderma Colombia, suplementos bienestar Bogotá, probióticos Colombia, productos de bienestar natural, donde comprar suplementos naturales en Colombia",
  alternates: {
    canonical: "https://tutiendadelasalud.com.co",
  },
  openGraph: {
    title: "Tu Tienda de la Salud | Productos Naturales Colombia",
    description:
      "Productos premium de bienestar integral en Colombia. Ganoderma, colágeno y suplementos con certificaciones internacionales. Envíos a todo Colombia.",
    url: "https://tutiendadelasalud.com.co",
    siteName: "Tu Tienda de la Salud",
    type: "website",
    locale: "es_CO",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tu Tienda de la Salud | Productos Naturales Colombia",
    description:
      "Productos premium de bienestar integral en Colombia. Ganoderma, colágeno y suplementos con certificaciones internacionales. Envíos a todo Colombia.",
  },
  icons: {
    icon: "/images/favicon.png",
    apple: "/images/favicon.png",
  },
  verification: {
    google: [
      "XzfzPjbfjd2APoRF56WltqFiGHYDC0epith3bKF0IPk",
      "yPhT_zMxa6-X7sQgg4wGdq6DVWdvm2WxpLi-ypzEXuA",
    ],
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
          <PixelEvents />
        </CartProvider>

        {/* JSON-LD — Datos estructurados para Google */}
        <Script
          id="json-ld-local-business"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Store",
              name: "Tu Tienda de la Salud",
              url: "https://tutiendadelasalud.com.co",
              logo: "https://tutiendadelasalud.com.co/images/favicon.png",
              description:
                "Productos premium de bienestar integral en Colombia. Ganoderma, colágeno y suplementos con certificaciones internacionales. Envíos a todo Colombia.",
              telephone: "+573203358826",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Bogotá",
                addressRegion: "Cundinamarca",
                addressCountry: "CO",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 4.711,
                longitude: -74.0721,
              },
              openingHoursSpecification: {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: [
                  "Monday","Tuesday","Wednesday","Thursday","Friday","Saturday",
                ],
                opens: "08:00",
                closes: "18:00",
              },
              sameAs: [
                "https://www.facebook.com/profile.php?id=61586467695359",
              ],
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Productos Naturales y Suplementos",
                itemListElement: [
                  { "@type": "Offer", itemOffered: { "@type": "Product", name: "NEUROcell", description: "Suplemento para rendimiento cognitivo, claridad mental y concentración." } },
                  { "@type": "Offer", itemOffered: { "@type": "Product", name: "Colágeno Glow", description: "Colágeno hidrolizado de Celion para piel luminosa y firme." } },
                  { "@type": "Offer", itemOffered: { "@type": "Product", name: "StemRenu", description: "Suplemento de renovación celular con bioactivos supercargados." } },
                  { "@type": "Offer", itemOffered: { "@type": "Product", name: "Lingzhi Black Coffee", description: "Café negro con Ganoderma Lucidum para energía y bienestar." } },
                  { "@type": "Offer", itemOffered: { "@type": "Product", name: "Línea Ganoterapia", description: "Reishi Gano y Ganocelium para inmunidad y vitalidad celular." } },
                ],
              },
            }),
          }}
        />

        {/* Meta Pixel — Tu Tienda de la Salud */}
        <Script id="meta-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window,document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '337771982973731');
            fbq('track', 'PageView');
          `}
        </Script>
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=337771982973731&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
      </body>
    </html>
  );
}
