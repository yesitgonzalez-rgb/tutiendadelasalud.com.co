import type { Metadata } from "next";
import { Montserrat, Plus_Jakarta_Sans } from "next/font/google";
import Script from "next/script";
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
        </CartProvider>

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
