import Image from "next/image";
import VideoHero from "@/components/VideoHero";
import {
  Leaf,
  Zap,
  Coffee,
  Sparkles,
  Truck,
  Shield,
  Star,
  MessageCircle,
  Play,
  CheckCircle,
  FlaskConical,
} from "lucide-react";

// ─── Datos ────────────────────────────────────────────────────────────────────

const categories = [
  {
    icon: <Leaf size={32} className="text-[#3ED9C4]" />,
    title: "Suplementos",
    desc: "Cápsulas y tabletas con ingredientes de origen natural para fortalecer tu cuerpo.",
  },
  {
    icon: <Zap size={32} className="text-[#3ED9C4]" />,
    title: "Nutrición Celular",
    desc: "Formulaciones que trabajan desde adentro para una salud profunda y duradera.",
  },
  {
    icon: <Coffee size={32} className="text-[#3ED9C4]" />,
    title: "Bebidas",
    desc: "Cafés, infusiones y jugos naturales que nutren y revitalizan tu sistema.",
  },
  {
    icon: <Sparkles size={32} className="text-[#3ED9C4]" />,
    title: "Cuidado Personal",
    desc: "Línea de higiene y cuidado externo con extractos 100% naturales.",
  },
];

const destacados = [
  {
    name: "Lingzhi Black Coffee 2 en 1",
    category: "Bebida · Café",
    desc: "Café negro con extracto de Ganoderma lucidum. 20 sobres de 4.5 g.",
    img: "/images/cafe-2.png",
    badge: "Destacado",
  },
  {
    name: "Cocozhi",
    category: "Bebida · Cacao",
    desc: "Suplemento dietario a base de Ganoderma lucidum. 20 sobres de 32 g.",
    img: "/images/cafe-1.png",
    badge: "Destacado",
  },
  {
    name: "Zhi Mocha",
    category: "Bebida · Café",
    desc: "Suplemento dietario a base de Ganoderma lucidum. 20 sobres de 21 g.",
    img: "/images/cafe-3.png",
    badge: "Destacado",
  },
  {
    name: "Cream Coffee",
    category: "Bebida · Café",
    desc: "Café cremoso con extracto de Ganoderma. 20 paquetes de 14 g.",
    img: "/images/cafe-4.png",
    badge: "Nuevo",
  },
];

const ganoterapia = [
  {
    name: "Reishi Gano (RG)",
    category: "Ganoterapia · Cápsula",
    desc: "Suplemento dietario de Ganoderma lucidum. 30 cápsulas de 270 mg.",
    img: "/images/producto-5.jpeg",
  },
  {
    name: "Ganocelium (GL)",
    category: "Ganoterapia · Cápsula",
    desc: "Suplemento dietario de micelio de Ganoderma. 30 cápsulas de 450 mg.",
    img: "/images/producto-4.jpeg",
  },
  {
    name: "Spirulina",
    category: "Suplemento · Tableta",
    desc: "Suplemento dietario de spirulina de alta pureza. 120 tabletas.",
    img: "/images/producto-12.jpeg",
  },
];

const bebidasLiquidas = [
  {
    name: "Morinzhi",
    category: "Bebida · Jugo",
    desc: "Mezcla concentrada con Noni y Flor de Jamaica. 285 ml.",
    img: "/images/producto-8.jpeg",
  },
  {
    name: "Morinzyme",
    category: "Bebida · Jugo",
    desc: "Mezcla concentrada con Noni. 285 ml.",
    img: "/images/producto-9.jpeg",
  },
  {
    name: "Apple Juice Drink",
    category: "Bebida · Jugo",
    desc: "Bebida con zumo de manzana natural. 50 ml × 15 paquetes.",
    img: "/images/producto-11.jpeg",
  },
];

const cuidadoPersonal = [
  {
    name: "Gano Massage Oil",
    category: "Cuidado Personal · Aceite",
    desc: "Aceite de masaje Ganoderma 100% Natural. 75 ml.",
    img: "/images/producto-1.jpeg",
  },
  {
    name: "Ganozhi Body Foam",
    category: "Cuidado Personal · Gel",
    desc: "Gel de baño con extracto de Ganoderma. 250 ml.",
    img: "/images/producto-6.jpeg",
  },
  {
    name: "Ganozhi Lipstick",
    category: "Cuidado Personal · Labial",
    desc: "Labial enriquecido con extracto natural. 3.5 g.",
    img: "/images/producto-7.jpeg",
  },
  {
    name: "Aceite Virgen de Coco",
    category: "Cuidado Personal · Aceite",
    desc: "Aceite virgen de coco 100% puro. 285 ml.",
    img: "/images/producto-10.jpeg",
  },
];

const saludOral = [
  {
    name: "Green World Herbs Fresh Mint",
    category: "Salud Oral · Pasta dental",
    desc: "Pasta dental natural con hierbas, xilitol y menta fresca. Fórmula suave para uso diario. 120 g.",
    img: "/images/oral-1.png",
  },
  {
    name: "HGW Tourmaline Toothpaste",
    category: "Salud Oral · Pasta dental",
    desc: "Pasta dental con turmalina para una higiene bucal completa y protección eficaz.",
    img: "/images/oral-2.png",
  },
  {
    name: "Smilife Tourmaline Toothpaste",
    category: "Salud Oral · Pasta dental",
    desc: "Pasta dental premium con turmalina. Blanqueamiento natural y aliento fresco duradero.",
    img: "/images/oral-3.png",
  },
];

const benefits = [
  {
    icon: <CheckCircle size={24} className="text-[#3ED9C4]" />,
    title: "100% Orgánicos",
    desc: "Cada producto pasa controles de calidad. Sin artificiales, sin atajos.",
  },
  {
    icon: <Truck size={24} className="text-[#3ED9C4]" />,
    title: "Envíos a todo Colombia",
    desc: "Desde Leticia hasta La Guajira. Tu pedido llega donde estés.",
  },
  {
    icon: <Shield size={24} className="text-[#3ED9C4]" />,
    title: "Sistema Inmune Fuerte",
    desc: "Formulados para fortalecer tus defensas naturales.",
  },
  {
    icon: <FlaskConical size={24} className="text-[#3ED9C4]" />,
    title: "Laboratorios Certificados",
    desc: "Producidos en instalaciones con los más altos estándares internacionales.",
  },
];

const personajeVideos = [
  { src: "/videos/personaje-lingzhi.mp4", title: "Lingzhi Black Coffee" },
  { src: "/videos/personaje-cocozhi.mp4", title: "Cocozhi" },
  { src: "/videos/personaje-zhimocha.mp4", title: "Zhi Mocha" },
  { src: "/videos/personaje-spirulina.mp4", title: "Spirulina" },
  { src: "/videos/personaje-reizhigano.mp4", title: "Reishi Gano" },
  { src: "/videos/personaje-roselle.mp4", title: "Roselle" },
];

const productVideos = [
  { src: "/videos/video-1.mp4", title: "Producto en acción" },
  { src: "/videos/video-2.mp4", title: "Testimonios reales" },
  { src: "/videos/video-3.mp4", title: "Conoce la línea" },
];

const testimonials = [
  {
    name: "María Alejandra Torres",
    city: "Bogotá",
    text: "Llevo tres meses con los productos y noto la diferencia. Más energía, menos gripas. Mi familia también los usa.",
    stars: 5,
  },
  {
    name: "Carlos Morales",
    city: "Medellín",
    text: "Yesit me asesoró muy bien. Me explicó todo sin apurarme a comprar. Eso genera confianza.",
    stars: 5,
  },
  {
    name: "Sandra Ríos",
    city: "Cali",
    text: "Los pedidos llegan rápido y bien empacados. El café con Ganoderma es lo mejor que he probado.",
    stars: 5,
  },
];

// ─── Componente de tarjeta de producto ───────────────────────────────────────
function ProductCard({
  name,
  category,
  desc,
  img,
  badge,
}: {
  name: string;
  category: string;
  desc?: string;
  img: string;
  badge?: string;
}) {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow group relative">
      {badge && (
        <div className="absolute top-3 left-3 z-10 bg-[#3ED9C4] text-[#1B3A7A] text-xs font-bold px-3 py-1 rounded-full">
          {badge}
        </div>
      )}
      <div className="relative h-56 bg-gray-50 overflow-hidden">
        <Image
          src={img}
          alt={name}
          fill
          className="object-contain p-4 group-hover:scale-105 transition-transform duration-300"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
      </div>
      <div className="p-5">
        <span className="text-xs font-semibold text-[#3ED9C4] uppercase tracking-wider">
          {category}
        </span>
        <h3 className="font-display font-bold text-[#1B3A7A] text-lg mt-1 mb-1">
          {name}
        </h3>
        {desc && (
          <p className="text-[#5A6478] text-xs leading-relaxed mb-4">{desc}</p>
        )}
        <a
          href="https://wa.me/573203358826"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 w-full bg-[#1B3A7A] text-white py-2.5 rounded-xl font-semibold text-sm hover:bg-[#3ED9C4] hover:text-[#1B3A7A] transition-colors"
        >
          <MessageCircle size={15} />
          Consultar precio
        </a>
      </div>
    </div>
  );
}

// ─── Tarjeta de producto con video ───────────────────────────────────────────
function VideoProductCard({
  name,
  category,
  desc,
  videoSrc,
  badge,
}: {
  name: string;
  category: string;
  desc?: string;
  videoSrc: string;
  badge?: string;
}) {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow group relative">
      {badge && (
        <div className="absolute top-3 left-3 z-10 bg-[#3ED9C4] text-[#1B3A7A] text-xs font-bold px-3 py-1 rounded-full">
          {badge}
        </div>
      )}
      <div className="relative h-56 bg-[#F4F6F9] overflow-hidden">
        {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
        <video
          src={videoSrc}
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-5">
        <span className="text-xs font-semibold text-[#3ED9C4] uppercase tracking-wider">
          {category}
        </span>
        <h3 className="font-display font-bold text-[#1B3A7A] text-lg mt-1 mb-1">
          {name}
        </h3>
        {desc && (
          <p className="text-[#5A6478] text-xs leading-relaxed mb-4">{desc}</p>
        )}
        <a
          href="https://wa.me/573203358826"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 w-full bg-[#1B3A7A] text-white py-2.5 rounded-xl font-semibold text-sm hover:bg-[#3ED9C4] hover:text-[#1B3A7A] transition-colors"
        >
          <MessageCircle size={15} />
          Consultar precio
        </a>
      </div>
    </div>
  );
}

// ─── Sección de productos por línea ──────────────────────────────────────────
function ProductLineSection({
  id,
  label,
  title,
  bg,
  products,
}: {
  id?: string;
  label: string;
  title: string;
  bg: string;
  products: { name: string; category: string; desc?: string; img: string }[];
}) {
  return (
    <section id={id} className={`py-20 ${bg}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <span className="text-[#3ED9C4] font-semibold text-sm uppercase tracking-widest">
            {label}
          </span>
          <h2 className="font-display font-bold text-[#1B3A7A] text-3xl md:text-4xl mt-2">
            {title}
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {products.map((p) => (
            <ProductCard key={p.name} {...p} />
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Página principal ─────────────────────────────────────────────────────────
export default function Home() {
  return (
    <>
      {/* HERO */}
      <VideoHero />

      {/* CATEGORÍAS */}
      <section id="categorias" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-[#3ED9C4] font-semibold text-sm uppercase tracking-widest">
              Lo que ofrecemos
            </span>
            <h2 className="font-display font-bold text-[#1B3A7A] text-4xl md:text-5xl mt-3">
              Nuestras categorías
            </h2>
            <p className="text-[#5A6478] mt-4 max-w-xl mx-auto text-lg">
              Cuatro líneas de productos. Un solo objetivo: que te sientas bien
              de verdad.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((cat) => (
              <a
                key={cat.title}
                href="#productos"
                className="group bg-[#F4F6F9] rounded-2xl p-8 flex flex-col items-center text-center hover:bg-[#1B3A7A] transition-colors duration-300"
              >
                <div className="mb-5 p-4 bg-white rounded-2xl shadow-sm group-hover:bg-[#3ED9C4]/20 transition-colors">
                  {cat.icon}
                </div>
                <h3 className="font-display font-bold text-[#1B3A7A] group-hover:text-white text-xl mb-3 transition-colors">
                  {cat.title}
                </h3>
                <p className="text-[#5A6478] group-hover:text-white/80 text-sm leading-relaxed transition-colors">
                  {cat.desc}
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* LABORATORIOS ALTAMENTE CONFIABLES */}
      <section id="productos" className="py-24 bg-[#1B3A7A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-[#3ED9C4] font-semibold text-sm uppercase tracking-widest">
              Respaldo científico
            </span>
            <h2 className="font-display font-bold text-white text-4xl md:text-5xl mt-3">
              Laboratorios Altamente Confiables
            </h2>
            <p className="text-white/70 mt-4 max-w-2xl mx-auto text-lg">
              Cada producto viene de laboratorios con certificación internacional.
              No es un suplemento cualquiera. Es ciencia aplicada al bienestar.
            </p>
          </div>

          {/* Destacados */}
          <div className="mb-4">
            <h3 className="font-display font-bold text-[#3ED9C4] text-2xl mb-6 flex items-center gap-3">
              <Star size={24} className="fill-[#3ED9C4]" />
              Destacados
            </h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {destacados.map((p) => (
              <ProductCard key={p.name} {...p} />
            ))}
          </div>

          {/* Ganoterapia */}
          <div className="mb-4">
            <h3 className="font-display font-bold text-[#3ED9C4] text-2xl mb-2 flex items-center gap-3">
              <FlaskConical size={24} />
              Ganoterapia
            </h3>
            <p className="text-white/60 text-sm mb-6">
              Ganoderma lucidum — el hongo más estudiado de la naturaleza.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {ganoterapia.map((p) => (
              <ProductCard key={p.name} {...p} />
            ))}
          </div>
        </div>
      </section>

      {/* BEBIDAS LÍQUIDAS */}
      <section className="py-20 bg-[#F4F6F9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <span className="text-[#3ED9C4] font-semibold text-sm uppercase tracking-widest">
              Bebidas naturales
            </span>
            <h2 className="font-display font-bold text-[#1B3A7A] text-3xl md:text-4xl mt-2">
              Jugos e infusiones
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {/* Morinzhi y Morinzyme */}
            {bebidasLiquidas.slice(0, 2).map((p) => (
              <ProductCard key={p.name} {...p} />
            ))}
            {/* Roselle — video de personaje como vista previa */}
            <VideoProductCard
              name="Roselle"
              category="Bebida · Infusión"
              desc="Bebida natural de flor de Jamaica. Rica en antioxidantes, vitamina C y propiedades depurativas."
              videoSrc="/videos/personaje-roselle.mp4"
              badge="Natural"
            />
            {/* Apple Juice Drink al final */}
            {bebidasLiquidas.slice(2).map((p) => (
              <ProductCard key={p.name} {...p} />
            ))}
          </div>
        </div>
      </section>

      {/* CUIDADO PERSONAL */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <span className="text-[#3ED9C4] font-semibold text-sm uppercase tracking-widest">
              Cuidado exterior
            </span>
            <h2 className="font-display font-bold text-[#1B3A7A] text-3xl md:text-4xl mt-2">
              Cuidado Personal
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
            {cuidadoPersonal.map((p) => (
              <ProductCard key={p.name} {...p} />
            ))}
          </div>

          {/* Salud Oral */}
          <div className="mb-8">
            <h3 className="font-display font-bold text-[#1B3A7A] text-2xl mb-2 flex items-center gap-3">
              <Sparkles size={22} className="text-[#3ED9C4]" />
              Salud Oral
            </h3>
            <p className="text-[#5A6478] text-sm mb-8 max-w-xl">
              Fórmulas naturales con ingredientes activos para una sonrisa saludable y una higiene bucal completa.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {saludOral.map((p) => (
              <ProductCard key={p.name} {...p} />
            ))}
          </div>
        </div>
      </section>

      {/* BENEFICIOS */}
      <section className="py-24 bg-[#F4F6F9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-[#3ED9C4] font-semibold text-sm uppercase tracking-widest">
                Por qué elegirnos
              </span>
              <h2 className="font-display font-bold text-[#1B3A7A] text-4xl md:text-5xl mt-3 mb-6">
                La salud no es suerte.
                <br />
                Es una decisión diaria.
              </h2>
              <p className="text-[#5A6478] text-lg leading-relaxed mb-8">
                Trabajamos con líneas de productos orgánicos que respetan tu
                cuerpo. Nada de fórmulas genéricas. Cada producto tiene un
                propósito claro y resultados que se sienten.
              </p>
              <a
                href="https://wa.me/573203358826"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#1B3A7A] text-white px-8 py-4 rounded-full font-bold hover:bg-[#3ED9C4] hover:text-[#1B3A7A] transition-colors"
              >
                <MessageCircle size={18} />
                Hablar con un Asesor
              </a>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {benefits.map((b) => (
                <div key={b.title} className="bg-white rounded-2xl p-6">
                  <div className="mb-3">{b.icon}</div>
                  <h3 className="font-display font-bold text-[#1B3A7A] text-lg mb-2">
                    {b.title}
                  </h3>
                  <p className="text-[#5A6478] text-sm leading-relaxed">
                    {b.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* YESIT GONZÁLEZ */}
      <section id="asesora" className="py-24 bg-[#1B3A7A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl max-w-md mx-auto lg:mx-0">
                <Image
                  src="/images/yesit-gonzalez.png"
                  alt="Yesit González - Asesor en Salud y Bienestar"
                  width={500}
                  height={600}
                  className="w-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#1B3A7A]/90 to-transparent p-6">
                  <p className="text-white font-display font-bold text-xl">
                    Yesit González
                  </p>
                  <p className="text-[#3ED9C4] text-sm font-medium">
                    Asesor en Salud y Bienestar
                  </p>
                </div>
              </div>
              <div className="absolute -top-6 -right-6 w-24 h-24 border-4 border-[#3ED9C4]/30 rounded-2xl hidden lg:block" />
              <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-[#3ED9C4]/20 rounded-2xl hidden lg:block" />
            </div>
            <div>
              <span className="text-[#3ED9C4] font-semibold text-sm uppercase tracking-widest">
                Tu asesor de confianza
              </span>
              <h2 className="font-display font-bold text-white text-4xl md:text-5xl mt-3 mb-6">
                Alguien que escucha
                <br />
                antes de recomendar.
              </h2>
              <p className="text-white/80 text-lg leading-relaxed mb-4">
                Llevo años acompañando a familias colombianas en su camino hacia
                una mejor salud. No empiezo por el producto. Empiezo por
                escucharte.
              </p>
              <p className="text-white/80 text-lg leading-relaxed mb-8">
                Cuéntame qué necesitas — energía, sistema inmune, un sueño
                mejor, o simplemente sentirte bien — y juntos encontramos lo
                que tu cuerpo pide.
              </p>
              <a
                href="https://wa.me/573203358826"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-[#25D366] text-white px-8 py-4 rounded-full font-bold text-base hover:bg-[#20b858] transition-colors shadow-lg"
              >
                <MessageCircle size={20} />
                Hablar con Yesit ahora
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* VIDEOS DE PERSONAJES 3D */}
      <section id="videos" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-[#3ED9C4] font-semibold text-sm uppercase tracking-widest">
              Nuestros productos hablan
            </span>
            <h2 className="font-display font-bold text-[#1B3A7A] text-4xl md:text-5xl mt-3">
              Conoce sus beneficios en 3D
            </h2>
            <p className="text-[#5A6478] mt-4 max-w-xl mx-auto text-lg">
              Cada producto tiene su propia historia. Mira cómo te la cuentan.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {personajeVideos.slice(0, 3).map((video, i) => (
              <div
                key={i}
                className="rounded-2xl overflow-hidden shadow-md bg-[#F4F6F9]"
              >
                <video
                  src={video.src}
                  controls
                  preload="none"
                  className="w-full aspect-video object-cover"
                >
                  Tu navegador no soporta video HTML5.
                </video>
                <div className="p-4 flex items-center gap-2">
                  <Play size={16} className="text-[#3ED9C4]" />
                  <span className="text-[#1B3A7A] font-semibold text-sm">
                    {video.title}
                  </span>
                </div>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {personajeVideos.slice(3).map((video, i) => (
              <div
                key={i}
                className="rounded-2xl overflow-hidden shadow-md bg-[#F4F6F9]"
              >
                <video
                  src={video.src}
                  controls
                  preload="none"
                  className="w-full aspect-video object-cover"
                >
                  Tu navegador no soporta video HTML5.
                </video>
                <div className="p-4 flex items-center gap-2">
                  <Play size={16} className="text-[#3ED9C4]" />
                  <span className="text-[#1B3A7A] font-semibold text-sm">
                    {video.title}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VIDEOS DE PRODUCTOS */}
      <section className="py-16 bg-[#F4F6F9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-display font-bold text-[#1B3A7A] text-3xl mt-3">
              Mira los productos en acción
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {productVideos.map((video, i) => (
              <div
                key={i}
                className="rounded-2xl overflow-hidden shadow-md bg-white"
              >
                <video
                  src={video.src}
                  controls
                  preload="none"
                  className="w-full aspect-video object-cover"
                >
                  Tu navegador no soporta video HTML5.
                </video>
                <div className="p-4 flex items-center gap-2">
                  <Play size={16} className="text-[#3ED9C4]" />
                  <span className="text-[#1B3A7A] font-semibold text-sm">
                    {video.title}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NUESTROS CLIENTES */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-[#3ED9C4] font-semibold text-sm uppercase tracking-widest">
              Nuestros clientes
            </span>
            <h2 className="font-display font-bold text-[#1B3A7A] text-4xl md:text-5xl mt-3">
              Una comunidad que crece
            </h2>
            <p className="text-[#5A6478] mt-4 max-w-xl mx-auto text-lg">
              Cientos de familias en Colombia ya cuidan su salud con nosotros.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { num: "500+", label: "Clientes satisfechos" },
              { num: "4", label: "Líneas de productos" },
              { num: "32", label: "Departamentos de Colombia" },
              { num: "100%", label: "Orgánicos y naturales" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="bg-[#F4F6F9] rounded-2xl p-8 text-center shadow-sm"
              >
                <p className="font-display font-extrabold text-[#1B3A7A] text-4xl mb-2">
                  {stat.num}
                </p>
                <p className="text-[#5A6478] text-sm font-medium">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIOS */}
      <section className="py-24 bg-[#F4F6F9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-[#3ED9C4] font-semibold text-sm uppercase tracking-widest">
              Testimonios
            </span>
            <h2 className="font-display font-bold text-[#1B3A7A] text-4xl md:text-5xl mt-3">
              Lo que dicen nuestros clientes
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="bg-white rounded-2xl p-8 flex flex-col"
              >
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: t.stars }).map((_, i) => (
                    <Star
                      key={i}
                      size={18}
                      className="text-[#3ED9C4] fill-[#3ED9C4]"
                    />
                  ))}
                </div>
                <p className="text-[#1A1A2E] text-base leading-relaxed flex-1 mb-6">
                  &ldquo;{t.text}&rdquo;
                </p>
                <div>
                  <p className="font-display font-bold text-[#1B3A7A]">
                    {t.name}
                  </p>
                  <p className="text-[#5A6478] text-sm">{t.city}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTÁCTENOS */}
      <section id="contacto" className="py-24 bg-[#1B3A7A]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-[#3ED9C4] font-semibold text-sm uppercase tracking-widest">
            Contáctenos
          </span>
          <h2 className="font-display font-bold text-white text-4xl md:text-5xl mt-3 mb-6">
            ¿Tienes preguntas?
            <br />
            Escríbenos ahora.
          </h2>
          <p className="text-white/70 text-lg mb-10 max-w-xl mx-auto leading-relaxed">
            Atendemos por WhatsApp de lunes a sábado. Respuesta rápida, sin
            rodeos. Solo dinos qué necesitas.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/573203358826"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 bg-[#25D366] text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-[#20b858] transition-colors shadow-xl"
            >
              <MessageCircle size={24} />
              Escribir por WhatsApp
            </a>
            <a
              href="tel:+573203358826"
              className="inline-flex items-center justify-center gap-3 border-2 border-white/40 text-white px-10 py-5 rounded-full font-bold text-lg hover:border-[#3ED9C4] hover:text-[#3ED9C4] transition-colors"
            >
              +57 320 335 8826
            </a>
          </div>
          <div className="mt-12 flex flex-wrap justify-center gap-8 text-white/60 text-sm">
            <div className="flex items-center gap-2">
              <CheckCircle size={16} className="text-[#3ED9C4]" />
              Respuesta en menos de 1 hora
            </div>
            <div className="flex items-center gap-2">
              <Truck size={16} className="text-[#3ED9C4]" />
              Envíos a todo Colombia
            </div>
            <div className="flex items-center gap-2">
              <Shield size={16} className="text-[#3ED9C4]" />
              Productos 100% orgánicos
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#0d2452] py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
            <div>
              <Image
                src="/images/logo.png"
                alt="Tu Tienda de la Salud"
                width={180}
                height={50}
                className="h-10 w-auto mb-4 brightness-0 invert"
              />
              <p className="text-white/60 text-sm leading-relaxed max-w-xs">
                Distribuidores de productos orgánicos naturales. Bienestar
                integral para ti y tu familia.
              </p>
            </div>
            <div>
              <h4 className="text-white font-display font-bold mb-4">
                Navegación
              </h4>
              <ul className="space-y-2">
                {[
                  { href: "#categorias", label: "Categorías" },
                  { href: "#productos", label: "Productos" },
                  { href: "#asesora", label: "Tu Asesor" },
                  { href: "#videos", label: "Videos" },
                  { href: "#contacto", label: "Contáctenos" },
                ].map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="text-white/60 hover:text-[#3ED9C4] text-sm transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-white font-display font-bold mb-4">
                Contáctenos
              </h4>
              <a
                href="https://wa.me/573203358826"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-[#25D366] hover:text-[#3ED9C4] transition-colors text-sm mb-2"
              >
                <MessageCircle size={16} />
                WhatsApp: +57 320 335 8826
              </a>
              <p className="text-white/60 text-sm">
                Colombia · Envíos nacionales
              </p>
              <div className="mt-4 flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse" />
                <span className="text-white/60 text-xs">
                  En línea Lun–Sáb
                </span>
              </div>
            </div>
          </div>
          <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-white/40 text-xs">
              © {new Date().getFullYear()} Tu Tienda de la Salud · Bienestar
              Integral
            </p>
            <p className="text-white/30 text-xs">
              Built with Claude Web Builder by{" "}
              <a
                href="https://tododeia.com"
                className="hover:text-white/60 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                Tododeia
              </a>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
