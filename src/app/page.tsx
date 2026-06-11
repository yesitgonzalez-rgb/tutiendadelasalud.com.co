import Image from "next/image";
import Link from "next/link";
import VideoHero from "@/components/VideoHero";
import ProductCard from "@/components/ProductCard";
import VideoCarousel from "@/components/VideoCarousel";
import WhatsAppWidget from "@/components/WhatsAppWidget";
import BannerSlider from "@/components/BannerSlider";
import LogoTicker from "@/components/LogoTicker";
import CelionCard from "@/components/CelionCard";
import {
  Leaf,
  Zap,
  Coffee,
  Sparkles,
  Truck,
  Shield,
  Star,
  MessageCircle,
  CheckCircle,
  FlaskConical,
  Users,
  Baby,
  Heart,
  Gift,
  TrendingUp,
  Award,
} from "lucide-react";

// ─── Datos ────────────────────────────────────────────────────────────────────

const categories = [
  {
    icon: <Coffee size={32} className="text-[#3ED9C4]" />,
    title: "Energía Natural",
    desc: "Vitalidad para tu día a día. Cafés funcionales y bebidas que te activan sin artificiales.",
    href: "#energia",
  },
  {
    icon: <Leaf size={32} className="text-[#3ED9C4]" />,
    title: "Bienestar Integral",
    desc: "Nutrición avanzada para revitalizar tu organismo desde el interior. Salud que se siente.",
    href: "#bienestar",
  },
  {
    icon: <Sparkles size={32} className="text-[#3ED9C4]" />,
    title: "Cuidado Personal",
    desc: "Apoya los procesos naturales de limpieza y bienestar. Piel, sonrisa y cuerpo en equilibrio.",
    href: "#cuidado",
  },
  {
    icon: <Gift size={32} className="text-[#3ED9C4]" />,
    title: "Combos Wellness",
    desc: "Rutinas completas diseñadas para un resultado mayor. Los que más se piden, juntos.",
    href: "#combos",
  },
];

const destacados = [
  {
    name: "Lingzhi Black Coffee 2 en 1",
    category: "Bebida · Café",
    desc: "Café negro con extracto de Ganoderma lucidum. 20 sobres de 4.5 g.",
    img: "/images/cafe-lingzhi.png",
    badge: "Bestseller",
    price: "115.000",
  },
  {
    name: "Cocozhi",
    category: "Bebida · Cacao",
    desc: "Suplemento dietario a base de Ganoderma lucidum. 20 sobres de 32 g.",
    img: "/images/cafe-cocozhi.png",
    badge: "Bestseller",
    price: "114.500",
  },
  {
    name: "Zhi Mocha",
    category: "Bebida · Café",
    desc: "Suplemento dietario a base de Ganoderma lucidum. 20 sobres de 21 g.",
    img: "/images/cafe-zhimocha.png",
    badge: "Premium",
    price: "113.500",
  },
  {
    name: "Cream Coffee",
    category: "Bebida · Café",
    desc: "Café cremoso con extracto de Ganoderma. 20 paquetes de 14 g.",
    img: "/images/cafe-creamcoffee.png",
    badge: "Nuevo",
    price: "112.500",
  },
];

const ganoterapia = [
  {
    name: "Reishi Gano (RG)",
    category: "🌿 Defensas & Inmunidad",
    desc: "Fortalece el sistema inmune y elimina el exceso de ácido úrico, colesterol y grasa acumulada. 30 cápsulas.",
    img: "/images/gano-reishi.png",
    badge: "Premium",
    price: "120.000",
  },
  {
    name: "Ganocelium (GL)",
    category: "🌿 Resistencia Natural",
    desc: "Incrementa la resistencia del cuerpo. Fortalece defensas y promueve el equilibrio celular. 30 cápsulas.",
    img: "/images/gano-ganocelium.png",
    badge: "Natural",
    price: "113.500",
  },
  {
    name: "Spirulina",
    category: "🌿 Nutrición Natural",
    desc: "Superalimento 100% natural. Proteína vegetal, hierro y vitaminas para nutrir tu cuerpo desde adentro. 120 tabletas.",
    img: "/images/gano-spirulina.png",
    badge: "Natural",
    price: "119.500",
  },
];

const bebidasLiquidas = [
  {
    name: "Morinzhi",
    category: "💧 Detox Natural",
    desc: "Bebida botánica con Noni y Flor de Jamaica. Sin químicos añadidos. Depura y fortalece desde adentro. 285 ml.",
    img: "/images/morinzhi-premium.png",
    badge: "Bestseller",
    price: "129.500",
  },
  {
    name: "Morinzyme",
    category: "🌿 Digestión & Bienestar",
    desc: "Bebida fermentada de Noni con enzimas naturales. Mejora tu digestión, el metabolismo y la absorción de nutrientes. 285 ml.",
    img: "/images/bebida-morinzyme.png",
    badge: "Natural",
    price: "112.000",
  },
  {
    name: "Apple Juice Drink",
    category: "🍏 Digestiva & Equilibrio",
    desc: "Zumo de manzana con enzimas activas. Sin calorías, sin gluten. Apoya la flora intestinal de toda la familia.",
    img: "/images/bebida-apple-juice.png",
    badge: "Natural",
    price: "169.000",
  },
];

const cuidadoPersonal = [
  {
    name: "Ganozhi Gel de Baño",
    category: "🧴 Limpieza & Equilibrio",
    desc: "Gel de baño con extracto de Ganoderma. Limpia profundamente, descongestiona y equilibra el pH corporal. 250 ml.",
    img: "/images/dermocosmetica-ganozhi-gel-bano.png",
    badge: "Natural",
  },
  {
    name: "Ganozhi Shampoo",
    category: "💆 Cuidado Capilar",
    desc: "Shampoo con Ganoderma y Vitamina B5. Limpia, nutre desde la raíz hasta las puntas y fortalece con queratina hidrolizada. 250 ml.",
    img: "/images/dermocosmetica-ganozhi-shampoo.png",
    badge: "Natural",
  },
  {
    name: "Smilife Shampoo Keratina & Turmalina",
    category: "💆 Cuidado Capilar Premium",
    desc: "Shampoo con keratina hidrolizada y turmalina natural. Limpia, purifica y transforma la suavidad de tu cabello. 265 ml.",
    img: "/images/dermocosmetica-smilife-shampoo-keratina.png",
    badge: "Premium",
  },
  {
    name: "Smilife Gel de Baño Turmalina",
    category: "🧴 Limpieza & Energía",
    desc: "Gel de ducha con turmalina natural. Elimina impurezas, hidrata y conecta con tu energía. Piel linda, tersa y fresca. 265 ml.",
    img: "/images/dermocosmetica-smilife-gel-turmalina.png",
    badge: "Premium",
  },
];

const saludOral = [
  {
    name: "Green World Herbs Fresh Mint",
    category: "Salud Oral · Pasta dental",
    desc: "Pasta herbal medicinal con xilitol y menta fresca. 100% natural. 120 g.",
    img: "/images/oral-herbs-mint.png",
    price: "38.000",
  },
  {
    name: "HGW Turmalina Negra",
    category: "Salud Oral · Pasta dental",
    desc: "Pasta dental de turmalina negra. Remineraliza y fortalece. Sin flúor. 120 g.",
    img: "/images/oral-tourmaline-black.png",
    price: "38.000",
  },
  {
    name: "Smilife Turmalina Blanca",
    category: "Salud Oral · Pasta dental",
    desc: "Dientes más blancos desde el primer uso. Con turmalina. Sin parabenos. 120 g.",
    img: "/images/oral-smilife.png",
    price: "22.500",
  },
  {
    name: "Ganozhi Toothpaste",
    category: "Salud Oral · Pasta dental",
    desc: "Pasta dental con extracto de Ganoderma. Protección natural contra caries. 150 g.",
    img: "/images/oral-ganozhi.png",
    badge: "Nuevo",
    price: "49.500",
  },
];

const jabones = [
  {
    name: "Jabón Ganozhi",
    category: "Jabones · Natural",
    desc: "Jabón con extracto de Ganoderma lucidum. Limpieza profunda y cuidado natural para una piel más saludable.",
    img: "/images/jabon-ganozhi.png",
    badge: "Natural",
    price: "41.000",
  },
  {
    name: "Jabón Turmalina SOAT",
    category: "Jabones · Mineral",
    desc: "Jabón de turmalina 100% natural. Antibacteriano, antiinflamatorio. Piel más saludable y protegida.",
    img: "/images/jabon-turmalina.png",
    badge: "Premium",
    price: "24.500",
  },
  {
    name: "Jabón Miel & Oliva",
    category: "Jabones · Natural",
    desc: "Con extracto de miel de abejas y aceite de olivas. Piel más hidratada, facial y corporal.",
    img: "/images/jabon-miel-oliva.png",
    badge: "Natural",
    price: "24.500",
  },
];

const higieneBucal = [
  {
    name: "Pasta Dental Miel de Abejas · 200 g",
    category: "🦷 Protección Natural",
    desc: "Elimina caries, sarro y placa bacteriana. Aliento fresco duradero y dientes más blancos. Con propolio + té verde antioxidante + miel de abejas. Fórmula natural Atomy.",
    img: "/images/oral-pasta-propolio.png",
    badge: "Natural",
    price: "32.000",
  },
  {
    name: "Pasta Dental Miel de Abejas · 50 g",
    category: "🦷 Protección Natural",
    desc: "La misma fórmula natural en presentación mini. Ideal para viajes o para probarla. Con propolio, té verde y miel de abejas. Atomy.",
    img: "/images/oral-pasta-propolio.png",
    badge: "Natural",
    price: "13.500",
  },
  {
    name: "Cepillo Dental Antibacteriano para Adultos",
    category: "🦷 Higiene Premium",
    desc: "Cerdas antibacterianas bañadas en oro. Certificación FDA y KIFA internacional. Limpieza profunda en zonas posteriores. Protege encías y cuida tu sonrisa.",
    img: "/images/oral-cepillo-adultos.png",
    badge: "Premium",
    price: "15.500",
  },
  {
    name: "Kit Viajero Sistema de Cuidado Oral",
    category: "✈️ Kit Familiar",
    desc: "4 productos en estuche transparente de lujo: cepillo antibacteriano, mini cepillo interdental, pasta dental Propolio. Ideal para viajes. Para toda la familia.",
    img: "/images/oral-kit-viajero.png",
    badge: "Bestseller",
    price: "38.500",
  },
  {
    name: "Spray Cuidado Bucal Green Propolis",
    category: "🌿 Frescura Instantánea",
    desc: "Propólio verde de alta calidad de la selva del Brasil. Frescura instantánea, protección bucal y cuidado natural para toda la familia. Fácil de usar en cualquier lugar.",
    img: "/images/oral-spray-propolio.png",
    badge: "Natural",
    price: "145.000",
  },
];

const bloqueadores = [
  {
    name: "Atomy Sun Stick FPS 50+",
    category: "☀️ Protección Solar",
    desc: "Protección solar en barra. FPS 50+ PA++++. Ligero, sin residuo graso. Para todo tipo de piel.",
    img: "/images/bloqueador-sun-stick.png",
    badge: "Premium",
    price: "74.500",
  },
  {
    name: "Atomy Essence Sun SPF 50+",
    category: "☀️ Protección Solar",
    desc: "Protector solar esencia con ingredientes naturales. Mejora arrugas y aclara el tono. SPF 50+.",
    img: "/images/bloqueador-essence-sun.png",
    badge: "Premium",
    price: "78.500",
  },
  {
    name: "Atomy Absolute Snow",
    category: "☀️ Protección Total 360°",
    desc: "Protección total UVA/UVB. Ingredientes naturales que aclaran, hidratan y protegen tu piel. PRODUCTO PREMIUM.",
    img: "/images/bloqueador-snow.png",
    badge: "Premium",
    price: "85.000",
  },
  {
    name: "Atomy Protector Solar Beige",
    category: "☀️ Cosmética Funcional",
    desc: "Cobertura ligera que unifica el tono de piel. Protección 360° continua. Hidrata y cuida naturalmente.",
    img: "/images/bloqueador-beige.png",
    badge: "Premium",
    price: "75.500",
  },
];

const benefits = [
  {
    icon: <Zap size={28} className="text-[#3ED9C4]" />,
    title: "Energía Natural",
    desc: "Despierta cada mañana con vitalidad real. Sin estimulantes, sin efectos secundarios. Tu energía viene de adentro.",
    tag: "Vitalidad",
  },
  {
    icon: <Sparkles size={28} className="text-[#3ED9C4]" />,
    title: "Salud Oral",
    desc: "Una sonrisa saludable que comunica bienestar. Ingredientes naturales que protegen y fortalecen sin agresivos.",
    tag: "Higiene Premium",
  },
  {
    icon: <Leaf size={28} className="text-[#3ED9C4]" />,
    title: "Bienestar Integral",
    desc: "Mente, cuerpo y sistema inmune en equilibrio. Un estilo de vida que se siente, no solo se ve.",
    tag: "Estilo de vida",
  },
  {
    icon: <Shield size={28} className="text-[#3ED9C4]" />,
    title: "Belleza Natural",
    desc: "Cuida tu piel con ingredientes que la nutren de verdad. Sin tóxicos. Sin artificiales. Solo naturaleza.",
    tag: "Cuidado",
  },
];

// Celion — organizados por BENEFICIO PRINCIPAL
// Grupo A: Energía y Vitalidad
// Grupo B: Bienestar Integral & Detox
const celionProducts = [
  // ── GRUPO A: Energía y Vitalidad ──────────────────
  {
    name: "Cellergy BOOST®",
    subtitle: "⚡ Energía y Vitalidad",
    tagline: "Energía celular avanzada para cuerpo y mente. Actívate sin estimulantes artificiales.",
    img: "/images/celion-boost.jpeg",
    bullets: [
      "Activa tu energía desde la célula",
      "Mejora el enfoque y el rendimiento mental",
      "Antioxidantes de alta biodisponibilidad",
    ],
    price: "270.000",
  },
  {
    name: "NEUROcell®",
    subtitle: "🧠 Enfoque y Claridad Mental",
    tagline: "Tu cerebro al máximo. Más concentración, menos estrés, mejor rendimiento.",
    img: "/images/celion-neurocell.jpeg",
    bullets: [
      "Potencia memoria y concentración",
      "Reduce la fatiga y el estrés mental",
      "Mejora el biorritmo y el estado de ánimo",
    ],
  },
  // ── GRUPO B: Bienestar Integral & Detox ───────────
  {
    name: "Celion POWER®",
    subtitle: "💚 Bienestar Integral",
    tagline: "Nutrición celular avanzada para revitalizar tu organismo desde el interior.",
    img: "/images/celion-power.jpeg",
    bullets: [
      "Regeneración celular profunda",
      "Fortalece y activa el sistema inmune",
      "Fórmula única con +240 compuestos naturales",
    ],
    price: "600.000",
  },
  {
    name: "MUNO T®",
    subtitle: "🍃 Detox y Equilibrio Natural",
    tagline: "Infusión herbal que apoya la limpieza natural de tu organismo día a día.",
    img: "/images/celion-munot.jpeg",
    bullets: [
      "Apoya la desintoxicación de colon e hígado",
      "Estimula la digestión y el equilibrio",
      "Ingredientes herbales 100% naturales",
    ],
    price: "80.000",
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

// Productos Estrella — organizados por BENEFICIO PRINCIPAL
const productosEstrella = [
  // ☕ ENERGÍA NATURAL
  {
    name: "Lingzhi Black Coffee 2 en 1",
    category: "☕ Energía Natural",
    desc: "Café negro con extracto de Ganoderma lucidum. El ritual de cada mañana con un propósito real.",
    img: "/images/cafe-lingzhi.png",
    badge: "Bestseller",
  },
  {
    name: "Zhi Mocha",
    category: "☕ Energía Natural",
    desc: "Café moca con Ganoderma Lucidum. Sabor cremoso e irresistible con el poder del Reishi. Ideal para toda la familia.",
    img: "/images/cafe-zhimocha-poster.png",
    badge: "Natural",
  },
  // 🌿 INMUNIDAD & BIENESTAR
  {
    name: "Línea Ganoterapia",
    category: "🌿 Inmunidad & Bienestar",
    desc: "Reishlgano (RG) + Ganocelium (GL) + Spirulina. El trío que fortalece tu sistema inmune y tu vitalidad celular.",
    img: "/images/ganoterapia-banner.png",
    badge: "Premium",
  },
  // 🌟 BELLEZA & PIEL
  {
    name: "Colágeno Glow",
    category: "🌟 Belleza & Piel",
    desc: "Tu piel no necesita filtros, necesita ciencia. Colágeno Glow de Celion: luminosidad, firmeza y juventud real.",
    img: "/images/celion-colageno-glow.png",
    badge: "Nuevo",
  },
  // 🌱 RENOVACIÓN CELULAR
  {
    name: "StemRenu",
    category: "🌱 Renovación Celular",
    desc: "Rejuvenecer y renovar desde adentro. Bioactivos supercargados que apoyan la señalización celular saludable.",
    img: "/images/stemrenu-poster.png",
    badge: "Premium",
  },
  // 🧠 COGNITIVO & CELULAR
  {
    name: "NEUROcell",
    category: "🧠 Rendimiento Cognitivo",
    desc: "Potencia tu cerebro con claridad mental, concentración y memoria. Fórmula avanzada Celion.",
    img: "/images/celion-neurocell-nuevo.png",
    badge: "Premium",
  },
];

const ninosProducts = [
  {
    name: "Calcio Nutritivo Infantil",
    badge: "🟡 Crecimiento fuerte",
    badgeClass: "bg-amber-100 text-amber-700",
    desc: "Crecen fuertes, sanos y felices. Calcio + Zinc + Vitamina D para huesos, dientes y sistema nervioso. 10 sobres.",
    img: "/images/ninos-calcio.png",
    price: "130.500",
    waMsg: "Hola Yesit! Me interesa el Calcio Nutritivo Infantil para mi hijo/a. ¿Cómo lo consigo? 🧒🌿",
  },
  {
    name: "Spirulina",
    badge: "🟢 Defensas naturales",
    badgeClass: "bg-green-100 text-green-700",
    desc: "Un superalimento 100% natural. Combate la desnutrición, previene la anemia y fortalece el sistema inmunológico. 120 tabletas.",
    img: "/images/ninos-spirulina.png",
    price: "119.500",
    waMsg: "Hola Yesit! Me interesa la Spirulina para niños. ¿Me cuentas más? 🌿",
  },
  {
    name: "Cocozhi",
    badge: "🟣 Rutina diaria",
    badgeClass: "bg-purple-100 text-purple-700",
    desc: "Desayuno nutritivo que los niños aman. Chocolate con Ganoderma: antioxidante, fortalece defensas y apoya el crecimiento balanceado. 20 sobres.",
    img: "/images/ninos-cocozhi.png",
    price: "114.500",
    waMsg: "Hola Yesit! Me interesa el Cocozhi para niños. ¿Cómo lo pido? 🍫🌿",
  },
  {
    name: "Cepillo Dental para Niños",
    badge: "🔵 Higiene saludable",
    badgeClass: "bg-sky-100 text-sky-700",
    desc: "Cerdas antibacterianas bañadas en polvo de oro. Certificación KIFA. Diseñado para manitas pequeñas y bocas en crecimiento.",
    img: "/images/ninos-cepillo.png",
    price: "17.500",
    waMsg: "Hola Yesit! Me interesa el Cepillo Dental Antibacteriano para niños. ¿Cuánto vale? 🦷🌿",
  },
];

const kits = [
  {
    name: "Kit Salud Oral Natural",
    tag: "Más pedido",
    icon: <Sparkles size={24} className="text-[#3ED9C4]" />,
    desc: "Protección completa para tu sonrisa. Tres fórmulas naturales que se complementan.",
    items: [
      "Ganozhi Toothpaste — Ganoderma",
      "HGW Turmalina Negra — Remineraliza",
      "Green World Herbs Fresh Mint — Herbal",
    ],
    accentColor: "bg-[#3ED9C4]",
    textColor: "text-[#1B3A7A]",
  },
  {
    name: "Kit Energía & Bienestar",
    tag: "Premium",
    icon: <Zap size={24} className="text-[#3ED9C4]" />,
    desc: "Tu rutina de bienestar completa. Energía real por la mañana, defensas activas todo el día.",
    items: [
      "Lingzhi Black Coffee — Energía",
      "Reishi Gano RG — Inmunidad",
      "Spirulina — Nutrición celular",
    ],
    accentColor: "bg-[#1B3A7A]",
    textColor: "text-white",
  },
  {
    name: "Kit Cuidado de la Piel",
    tag: "Natural",
    icon: <Leaf size={24} className="text-[#3ED9C4]" />,
    desc: "Rutina completa para piel limpia y protegida. Del baño a la protección solar.",
    items: [
      "Jabón Turmalina SOAT — Antibacteriano",
      "Jabón Ganozhi — Limpieza natural",
      "Atomy Sun Stick FPS 50+ — Protección UV",
    ],
    accentColor: "bg-green-600",
    textColor: "text-white",
  },
];

const familiaItems = [
  {
    icon: <Baby size={32} className="text-[#3ED9C4]" />,
    title: "Niños",
    badge: "Crecimiento & Defensas",
    desc: "Crecimiento saludable, defensas fuertes y hábitos diarios para los más pequeños.",
    img: "/images/ninos-calcio.png",
    gradient: "from-sky-50 to-blue-100",
    accent: "#0ea5e9",
    products: [
      { name: "Calcio Nutritivo", benefit: "Desarrollo y crecimiento · $135.000" },
      { name: "Cepillo Antibacteriano", benefit: "Dientes más sanos y fuertes" },
      { name: "Spirulina", benefit: "Más defensas naturales" },
      { name: "Cocozhi", benefit: "Desayuno nutritivo" },
    ],
    waMsg: "Hola Yesit! Busco productos para niños. ¿Qué me recomiendas? 👶🌿",
  },
  {
    icon: <TrendingUp size={32} className="text-[#3ED9C4]" />,
    title: "Adultos activos",
    badge: "Energía & Rendimiento",
    desc: "Energía natural y bienestar diario para mantener el ritmo de vida moderno.",
    img: "/images/familia-adultos-activos.png",
    gradient: "from-amber-50 to-orange-100",
    accent: "#f97316",
    products: [
      { name: "Lingzhi Black Coffee", benefit: "Energía natural sin artificiales" },
      { name: "NEUROcell®", benefit: "Enfoque y claridad mental" },
      { name: "Cellergy BOOST®", benefit: "Vitalidad celular avanzada" },
      { name: "Morinzhi", benefit: "Detox y equilibrio diario" },
    ],
    waMsg: "Hola Yesit! Soy una persona activa y busco productos para energía y rendimiento. ¿Qué me recomiendas? 💪🌿",
  },
  {
    icon: <Heart size={32} className="text-[#3ED9C4]" />,
    title: "Mujeres",
    badge: "Equilibrio & Bienestar",
    desc: "Equilibrio, vitalidad y cuidado integral para sentirte bien por dentro y por fuera.",
    img: "/images/adultos-colageno.png",
    gradient: "from-rose-50 to-pink-100",
    accent: "#ec4899",
    products: [
      { name: "Cellagen GLOW", benefit: "Colágeno premium para piel y articulaciones" },
      { name: "Atomy Sun Stick FPS 50+", benefit: "Protección solar diaria" },
      { name: "Reishi Gano (RG)", benefit: "Inmunidad y equilibrio hormonal" },
      { name: "Ganozhi Shampoo", benefit: "Cuidado capilar natural" },
    ],
    waMsg: "Hola Yesit! Busco productos de bienestar y cuidado para mujeres. ¿Qué me recomiendas? 🌸🌿",
  },
  {
    icon: <Users size={32} className="text-[#3ED9C4]" />,
    title: "Adultos mayores",
    badge: "Movilidad & Salud",
    desc: "Bienestar, movilidad y nutrición pensada para una vida activa y saludable.",
    img: "/images/adultos-calcio.png",
    gradient: "from-emerald-50 to-teal-100",
    accent: "#14b8a6",
    products: [
      { name: "Calcio", benefit: "Huesos y articulaciones fuertes · $135.000" },
      { name: "Probióticos", benefit: "Flora intestinal · Caja x30 · $95.000" },
    ],
    waMsg: "Hola Yesit! Busco productos de bienestar para adultos mayores. ¿Qué me recomiendas? 🌱",
  },
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

// Los componentes ProductCard y VideoProductCard están en src/components/

// ─── Página principal ─────────────────────────────────────────────────────────
export default function Home() {
  return (
    <>
      {/* HERO */}
      <VideoHero />

      {/* ── SLIDER PROMOCIONAL ── */}
      <BannerSlider />

      {/* ── TICKER DE CERTIFICACIONES ── */}
      <LogoTicker />

      {/* ── BANNER MUNDIAL 2026 — LEGACY (oculto) ── */}
      <section className="relative overflow-hidden bg-[#1B3A7A] hidden" aria-label="Promoción Mundial 2026">
        {/* Ticker superior */}
        <div className="bg-[#FFD100] py-1.5 overflow-hidden">
          <div className="flex animate-[marquee_18s_linear_infinite] whitespace-nowrap w-max">
            {Array.from({ length: 6 }).map((_, i) => (
              <span key={i} className="text-[#1B3A7A] font-extrabold text-xs uppercase tracking-widest px-8">
                ⚽ ¡VAMOS COLOMBIA! &nbsp;·&nbsp; MUNDIAL 2026 &nbsp;·&nbsp; 🇨🇴 ¡ARRIBA LA TRI! &nbsp;·&nbsp; 🏆 FIFA WORLD CUP USA·CANADA·MÉXICO &nbsp;·&nbsp;
              </span>
            ))}
          </div>
        </div>

        {/* Franjas diagonales decorativas */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute -right-20 top-0 bottom-0 w-64 bg-[#FFD100]/10 skew-x-[-8deg]" />
          <div className="absolute -right-4 top-0 bottom-0 w-32 bg-[#CE1126]/10 skew-x-[-8deg]" />
          <div className="absolute right-48 top-0 bottom-0 w-16 bg-[#FFD100]/8 skew-x-[-8deg]" />
        </div>

        {/* Contenido principal */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">

            {/* Izquierda — Pelota + Bandera */}
            <div className="flex items-center gap-4 flex-shrink-0">
              <div className="relative">
                <span className="text-7xl sm:text-8xl leading-none select-none" role="img" aria-label="balón de fútbol">⚽</span>
                <span className="absolute -top-2 -right-2 text-3xl animate-bounce" role="img" aria-label="bandera de Colombia">🇨🇴</span>
              </div>
              <div className="hidden sm:block">
                <p className="text-[#FFD100] font-extrabold text-sm uppercase tracking-widest leading-tight">Mundial 2026</p>
                <p className="text-white font-bold text-lg leading-tight">¡Celebra con salud!</p>
              </div>
            </div>

            {/* Centro — Oferta */}
            <div className="text-center flex-1">
              <p className="text-[#3ED9C4] font-bold text-xs sm:text-sm uppercase tracking-[0.2em] mb-1">
                🌿 Promoción especial Mundial
              </p>
              <h2 className="text-white font-extrabold text-4xl sm:text-5xl leading-tight tracking-tight">
                ENVÍO <span className="text-[#FFD100]">GRATIS</span>
              </h2>
              <p className="text-white/90 font-bold text-lg sm:text-xl mt-1">
                en Bogotá 🛵 por compras en combo
              </p>
              <p className="text-white/60 text-xs mt-2">
                NEUROcell · Colágeno Glow · StemRenu · Probióticos · Cafés Lingzhi
              </p>
            </div>

            {/* Derecha — CTA */}
            <div className="flex flex-col items-center gap-3 flex-shrink-0">
              <div className="flex items-center gap-1">
                {["🟡","🔵","🔴"].map((c,i) => (
                  <span key={i} className="text-xl">{c}</span>
                ))}
              </div>
              <a
                href="https://wa.me/573203358826?text=Hola%20Yesit!%20Vi%20la%20promo%20del%20Mundial%20%F0%9F%8F%86%20Quiero%20armar%20un%20combo%20con%20env%C3%ADo%20gratis%20en%20Bogot%C3%A1%20%F0%9F%87%A8%F0%9F%87%B4"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-[#FFD100] text-[#1B3A7A] font-extrabold text-sm px-6 py-3 rounded-full hover:bg-white transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5 whitespace-nowrap"
              >
                ⚽ Pedir mi combo
              </a>
              <p className="text-white/50 text-[10px] text-center">
                Solo Bogotá · Válido durante el Mundial
              </p>
            </div>
          </div>
        </div>

        {/* Borde inferior en colores Colombia */}
        <div className="flex h-1">
          <div className="flex-1 bg-[#FFD100]" />
          <div className="flex-1 bg-[#1B3A7A]" />
          <div className="flex-1 bg-[#CE1126]" />
        </div>
      </section>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>

      {/* CATEGORÍAS */}
      <section id="tienda" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-[#3ED9C4] font-semibold text-sm uppercase tracking-widest">
              Bienestar natural para todos
            </span>
            <h2 className="font-display font-bold text-[#1B3A7A] text-4xl md:text-5xl mt-3">
              ¿Cómo quieres sentirte?
            </h2>
            <p className="text-[#5A6478] mt-4 max-w-xl mx-auto text-lg">
              Cada categoría conecta con un resultado real. Elige el beneficio que tu cuerpo necesita hoy.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((cat) => (
              <a
                key={cat.title}
                href={cat.href}
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

      {/* ══════════════════════════════════════════════════ */}
      {/* PRODUCTOS ESTRELLA — TOP VENTAS                */}
      {/* ══════════════════════════════════════════════════ */}
      <section className="py-24 bg-[#F4F6F9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
            <div>
              <div className="inline-flex items-center gap-2 bg-amber-400/20 border border-amber-400/40 text-amber-700 text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-4">
                <Award size={14} />
                Top Ventas
              </div>
              <h2 className="font-display font-bold text-[#1B3A7A] text-4xl md:text-5xl leading-tight">
                Lo que más eligen
                <br />
                <span className="text-[#3ED9C4]">nuestros clientes.</span>
              </h2>
              <p className="text-[#5A6478] mt-4 max-w-lg text-base leading-relaxed">
                Productos probados. Resultados reales. Estos son los favoritos de las familias que ya cuidan su salud con nosotros.
              </p>
            </div>
            <a
              href="https://wa.me/573203358826"
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 inline-flex items-center gap-2 border-2 border-[#1B3A7A] text-[#1B3A7A] px-6 py-3 rounded-full font-bold text-sm hover:bg-[#1B3A7A] hover:text-white transition-colors whitespace-nowrap"
            >
              <MessageCircle size={16} />
              Asesoría gratis
            </a>
          </div>

          {/* Grid de productos estrella */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {productosEstrella.map((p, i) => (
              <div key={p.name} className="relative">
                {i === 0 && (
                  <div className="absolute -top-3 -right-3 z-20 bg-amber-400 text-amber-900 text-[10px] font-extrabold uppercase tracking-widest px-3 py-1 rounded-full shadow-md">
                    #1 más vendido
                  </div>
                )}
                <ProductCard {...p} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════ */}
      {/* CELION — NUTRICIÓN CELULAR PREMIUM              */}
      {/* ══════════════════════════════════════════════════ */}
      <section className="py-24 bg-[#070f1a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Brand header */}
          <div className="text-center mb-14">
            {/* Logo Celion en CSS */}
            <div className="inline-flex items-center gap-2.5 mb-6">
              <div className="relative w-9 h-9 rounded-full border-2 border-[#F26010] flex items-center justify-center">
                <div className="w-3.5 h-3.5 rounded-full bg-[#F26010]" />
                <div className="absolute -right-1 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-[#F26010]" />
              </div>
              <span className="text-white font-display font-extrabold text-3xl tracking-widest">
                celion
              </span>
            </div>

            <div className="flex justify-center mb-5">
              <span className="bg-[#F26010]/15 border border-[#F26010]/30 text-[#F26010] text-xs font-bold uppercase tracking-widest px-5 py-2 rounded-full">
                Línea Premium · Nutrición Celular de Nueva Generación
              </span>
            </div>

            <h2 className="font-display font-bold text-white text-4xl md:text-5xl mb-5 leading-tight">
              Cuatro productos.
              <br />
              <span className="text-[#F26010]">Un solo objetivo: que te sientas bien.</span>
            </h2>
            <p className="text-white/50 max-w-xl mx-auto text-lg leading-relaxed">
              Energía, enfoque, bienestar profundo y detox natural. Elige el que tu cuerpo necesita hoy.
            </p>
          </div>

          {/* Grid productos Celion */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {celionProducts.map((p) => (
              <CelionCard key={p.name} {...p} />
            ))}
          </div>

          {/* Banner Cellagen GLOW */}
          <div className="mt-10 rounded-3xl overflow-hidden border border-[#F26010]/20 shadow-2xl shadow-[#F26010]/5">
            <div className="relative">
              <Image
                src="/images/celion-logo.png"
                alt="Cellagen GLOW — Colágeno Celion con 3 péptidos bioactivos"
                width={1400}
                height={500}
                className="w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#070f1a]/70 via-transparent to-transparent flex items-center">
                <div className="px-10 max-w-md">
                  <span className="text-[#F26010] text-xs font-bold uppercase tracking-widest block mb-2">
                    También disponible
                  </span>
                  <h3 className="font-display font-bold text-white text-2xl md:text-3xl mb-3">
                    Cellagen GLOW
                  </h3>
                  <p className="text-white/70 text-sm leading-relaxed mb-4">
                    Colágeno premium con 3 péptidos bioactivos de patente clínica. Piel, articulaciones y vitalidad.
                  </p>
                  <div className="flex items-center gap-2 mb-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 w-fit">
                    <span className="text-[#F26010] font-extrabold text-sm">✦</span>
                    <span className="text-white font-extrabold text-sm">Desde $280.000</span>
                    <span className="text-white/60 text-xs">COP</span>
                  </div>
                  <a
                    href={`https://wa.me/573203358826?text=${encodeURIComponent("Hola Yesit! Me interesa el Cellagen GLOW de Celion. ¿Lo puedo pedir? 🌿")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-[#F26010] text-white px-6 py-3 rounded-full font-bold text-sm hover:bg-[#d9530d] transition-colors"
                  >
                    <MessageCircle size={15} />
                    Lo quiero
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* CTA general Celion */}
          <div className="mt-12 text-center">
            <a
              href={`https://wa.me/573203358826?text=${encodeURIComponent("Hola Yesit! Quiero conocer la línea Celion completa. ¿Qué combo me recomiendas? 🌿")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border-2 border-[#F26010] text-[#F26010] px-10 py-4 rounded-full font-bold text-base hover:bg-[#F26010] hover:text-white transition-colors"
            >
              <MessageCircle size={18} />
              Conocer la línea Celion completa
            </a>
          </div>

        </div>
      </section>

      {/* ══════════════════════════════════════════════════ */}
      {/* INTRO LABORATORIOS                              */}
      {/* ══════════════════════════════════════════════════ */}
      <section id="productos" className="py-16 bg-[#1B3A7A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-[#3ED9C4] font-semibold text-sm uppercase tracking-widest">
            Respaldo científico
          </span>
          <h2 className="font-display font-bold text-white text-4xl md:text-5xl mt-3 mb-4">
            Laboratorios Altamente Confiables
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto text-lg leading-relaxed">
            Cada producto viene de laboratorios con certificación internacional.
            No es un suplemento cualquiera. Es ciencia aplicada al bienestar.
          </p>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════ */}
      {/* BENEFICIO 1: ENERGÍA Y VITALIDAD               */}
      {/* ══════════════════════════════════════════════════ */}
      <div id="energia" className="bg-gradient-to-r from-[#08245c] to-[#123a8f] py-8 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <div className="flex items-center gap-4">
            <div className="bg-[#3ED9C4]/20 p-3 rounded-2xl">
              <Coffee size={28} className="text-[#3ED9C4]" />
            </div>
            <div>
              <p className="text-[#3ED9C4] text-xs font-bold uppercase tracking-widest">Beneficio</p>
              <h2 className="font-display font-bold text-white text-2xl md:text-3xl">Energía y Vitalidad</h2>
            </div>
          </div>
          <p className="text-white/50 text-sm max-w-sm">
            Vitalidad para tu día a día. Productos diseñados para impulsar tu energía física y mental de forma natural.
          </p>
        </div>
      </div>

      {/* Subcategoría: Cafés Destacados */}
      <section className="py-10 bg-[#F4F6F9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-3">
            <Star size={18} className="text-[#3ED9C4] fill-[#3ED9C4]" />
            <span className="text-[#3ED9C4] font-bold text-xs uppercase tracking-widest">
              Subcategoría
            </span>
          </div>
          <h3 className="font-display font-bold text-[#1B3A7A] text-2xl md:text-3xl mb-2">
            Cafés Destacados
          </h3>
          <p className="text-[#374151] text-sm mb-10 max-w-xl">
            Café con Ganoderma lucidum. El mismo ritual de siempre, con un propósito nuevo.
          </p>

          {/* Productos cafés */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {destacados.map((p) => (
              <ProductCard key={p.name} {...p} />
            ))}
          </div>
        </div>
      </section>

      {/* Subcategoría: Jugos & Infusiones */}
      <section className="py-10 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-3">
            <Leaf size={18} className="text-[#3ED9C4]" />
            <span className="text-[#3ED9C4] font-bold text-xs uppercase tracking-widest">
              Subcategoría
            </span>
          </div>
          <h3 className="font-display font-bold text-[#1B3A7A] text-2xl md:text-3xl mb-2">
            Jugos & Infusiones
          </h3>
          <p className="text-[#374151] text-sm mb-10 max-w-xl">
            Bebidas naturales concentradas para limpiar, nutrir y fortalecer tu sistema desde adentro.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {bebidasLiquidas.slice(0, 2).map((p) => (
              <ProductCard key={p.name} {...p} />
            ))}
            <ProductCard
              name="Roselle"
              category="🌺 Antioxidante Natural"
              desc="Bebida premium de flor de Jamaica. Rica en antioxidantes, vitamina C y propiedades depurativas. Fría o caliente."
              img="/images/bebida-roselle.png"
              badge="Natural"
              price="118.000"
            />
            {bebidasLiquidas.slice(2).map((p) => (
              <ProductCard key={p.name} {...p} />
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════ */}
      {/* NIÑOS — CRECIMIENTO Y BIENESTAR INFANTIL        */}
      {/* ══════════════════════════════════════════════════ */}
      <section className="py-20 bg-gradient-to-b from-sky-50 via-white to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 bg-sky-100 text-sky-700 text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-4">
              <Baby size={14} />
              Zona Infantil
            </div>
            <h2 className="font-display font-bold text-[#1B3A7A] text-4xl md:text-5xl mt-2 mb-4">
              Crecimiento y bienestar infantil.
            </h2>
            <p className="text-[#374151] max-w-xl mx-auto text-lg leading-relaxed">
              Nutrición y hábitos diarios pensados para apoyar su crecimiento,
              energía y defensas naturales. Seguros, naturales, para toda edad.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {ninosProducts.map((p) => (
              <div
                key={p.name}
                className="bg-white rounded-3xl overflow-hidden flex flex-col shadow-[0_8px_24px_rgba(0,0,0,0.07)] hover:shadow-[0_20px_48px_rgba(0,0,0,0.12)] hover:-translate-y-1.5 transition-all duration-300 border border-gray-100 group"
              >
                <div className="px-4 pt-4">
                  <span className={`inline-flex items-center text-[10px] font-extrabold uppercase tracking-widest px-3 py-1.5 rounded-full ${p.badgeClass}`}>
                    {p.badge}
                  </span>
                </div>
                <div className="relative h-64 mx-2 mt-2 flex-shrink-0">
                  <Image
                    src={p.img}
                    alt={p.name}
                    fill
                    className="object-contain group-hover:scale-105 transition-transform duration-500 ease-out"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <h3 className="font-display font-bold text-[#1B3A7A] text-base mb-2 leading-snug">
                    {p.name}
                  </h3>
                  <p className="text-[#374151] text-xs leading-relaxed mb-3 flex-1">
                    {p.desc}
                  </p>
                  {p.price && (
                    <div className="flex items-center gap-2 mb-3 px-3 py-2 bg-[#F4F6F9] rounded-xl">
                      <span className="text-[#3ED9C4] text-sm font-extrabold">✦</span>
                      <span className="text-[#1B3A7A] font-extrabold text-sm">Desde ${p.price}</span>
                      <span className="text-[#6B7280] text-xs">COP</span>
                    </div>
                  )}
                  <a
                    href={`https://wa.me/573203358826?text=${encodeURIComponent(p.waMsg)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full bg-[#25D366] text-white py-2.5 rounded-2xl font-bold text-xs hover:bg-[#20b858] hover:scale-[1.02] transition-all duration-200 shadow-sm hover:shadow-[0_6px_18px_rgba(37,211,102,0.35)]"
                  >
                    <MessageCircle size={13} />
                    Consultar por WhatsApp
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-[#374151] text-sm mb-4">
              ¿No sabes cuál es el ideal para tu hijo/a? Yesit te asesora sin compromiso.
            </p>
            <a
              href={`https://wa.me/573203358826?text=${encodeURIComponent("Hola Yesit! Busco productos para el bienestar de mis hijos. ¿Qué me recomiendas según su edad? 👶🌿")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#1B3A7A] text-white px-8 py-4 rounded-full font-bold text-sm hover:bg-[#3ED9C4] hover:text-[#1B3A7A] transition-all duration-200 shadow-md"
            >
              <MessageCircle size={16} />
              Asesoría gratuita para padres
            </a>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════ */}
      {/* BENEFICIO 2: BIENESTAR INTEGRAL                 */}
      {/* ══════════════════════════════════════════════════ */}
      <div id="bienestar" className="bg-gradient-to-r from-[#08245c] to-[#123a8f] py-8 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <div className="flex items-center gap-4">
            <div className="bg-[#3ED9C4]/20 p-3 rounded-2xl">
              <FlaskConical size={28} className="text-[#3ED9C4]" />
            </div>
            <div>
              <p className="text-[#3ED9C4] text-xs font-bold uppercase tracking-widest">Beneficio</p>
              <h2 className="font-display font-bold text-white text-2xl md:text-3xl">
                Bienestar Integral
              </h2>
            </div>
          </div>
          <p className="text-white/50 text-sm max-w-sm">
            Nutrición avanzada para revitalizar tu organismo desde el interior. Salud profunda que se siente, no solo se ve.
          </p>
        </div>
      </div>

      {/* Subcategoría: Ganoterapia */}
      <section className="py-10 bg-[#F4F6F9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-3">
            <FlaskConical size={18} className="text-[#3ED9C4]" />
            <span className="text-[#3ED9C4] font-bold text-xs uppercase tracking-widest">
              Subcategoría
            </span>
          </div>
          <h3 className="font-display font-bold text-[#1B3A7A] text-2xl md:text-3xl mb-2">
            Ganoterapia & Defensas
          </h3>
          <p className="text-[#374151] text-sm mb-10 max-w-xl">
            Ganoderma lucidum — el hongo más estudiado de la naturaleza. 4,000 años de uso medicinal, respaldado por ciencia moderna. Sistema inmune fuerte, vitalidad real.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {ganoterapia.map((p) => (
              <ProductCard key={p.name} {...p} />
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════ */}
      {/* BENEFICIO 3: CUIDADO NATURAL                    */}
      {/* ══════════════════════════════════════════════════ */}
      <div id="cuidado" className="bg-gradient-to-r from-[#08245c] to-[#123a8f] py-8 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <div className="flex items-center gap-4">
            <div className="bg-[#3ED9C4]/20 p-3 rounded-2xl">
              <Sparkles size={28} className="text-[#3ED9C4]" />
            </div>
            <div>
              <p className="text-[#3ED9C4] text-xs font-bold uppercase tracking-widest">Beneficio</p>
              <h2 className="font-display font-bold text-white text-2xl md:text-3xl">
                Cuidado Natural Premium
              </h2>
            </div>
          </div>
          <p className="text-white/50 text-sm max-w-sm">
            Apoya los procesos naturales de limpieza y bienestar. Piel, sonrisa y cuerpo en equilibrio real.
          </p>
        </div>
      </div>

      {/* Subcategoría: Línea Dermocosmética */}
      <section className="py-10 bg-[#F4F6F9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-3">
            <Sparkles size={18} className="text-[#3ED9C4]" />
            <span className="text-[#3ED9C4] font-bold text-xs uppercase tracking-widest">
              Subcategoría
            </span>
          </div>
          <h3 className="font-display font-bold text-[#1B3A7A] text-2xl md:text-3xl mb-2">
            Línea Dermocosmética
          </h3>
          <p className="text-[#374151] text-sm mb-10 max-w-xl">
            Aceites, geles y labiales con extracto de Ganoderma. Cuidado que se siente diferente.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {cuidadoPersonal.map((p) => (
              <ProductCard key={p.name} {...p} />
            ))}
          </div>
        </div>
      </section>

      {/* Subcategoría: Jabones */}
      <section className="py-10 bg-[#F4F6F9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-3">
            <Zap size={18} className="text-[#3ED9C4]" />
            <span className="text-[#3ED9C4] font-bold text-xs uppercase tracking-widest">
              Subcategoría
            </span>
          </div>
          <h3 className="font-display font-bold text-[#1B3A7A] text-2xl md:text-3xl mb-2">
            Jabones Naturales
          </h3>
          <p className="text-[#374151] text-sm mb-10 max-w-xl">
            Jabones artesanales con minerales, extractos naturales y Ganoderma. Limpieza profunda que cuida tu piel sin agresivos químicos.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {jabones.map((p) => (
              <ProductCard key={p.name} {...p} />
            ))}
          </div>
        </div>
      </section>

      {/* Subcategoría: Bloqueadores Solares */}
      <section className="py-10 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-3">
            <Shield size={18} className="text-[#3ED9C4]" />
            <span className="text-[#3ED9C4] font-bold text-xs uppercase tracking-widest">
              Subcategoría
            </span>
          </div>
          <h3 className="font-display font-bold text-[#1B3A7A] text-2xl md:text-3xl mb-2">
            Bloqueadores Solares
          </h3>
          <p className="text-[#374151] text-sm mb-10 max-w-xl">
            Protección UV de alta eficacia con ingredientes naturales. Cuida tu piel del sol sin residuos, sin grasa.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {bloqueadores.map((p) => (
              <ProductCard key={p.name} {...p} />
            ))}
          </div>
        </div>
      </section>

      {/* Subcategoría: Salud Oral */}
      <section className="py-10 bg-[#F4F6F9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-3">
            <Shield size={18} className="text-[#3ED9C4]" />
            <span className="text-[#3ED9C4] font-bold text-xs uppercase tracking-widest">
              Subcategoría
            </span>
          </div>
          <h3 className="font-display font-bold text-[#1B3A7A] text-2xl md:text-3xl mb-2">
            Salud Oral
          </h3>
          <p className="text-[#374151] text-sm mb-10 max-w-xl">
            Pastas dentales con turmalina, Ganoderma e ingredientes naturales. Blanqueamiento, remineralización y protección sin flúor.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {saludOral.map((p) => (
              <ProductCard key={p.name} {...p} />
            ))}
          </div>
        </div>
      </section>

      {/* Subcategoría: Higiene Bucal Completa */}
      <section className="py-10 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-3">
            <Sparkles size={18} className="text-[#3ED9C4]" />
            <span className="text-[#3ED9C4] font-bold text-xs uppercase tracking-widest">
              Subcategoría
            </span>
          </div>
          <h3 className="font-display font-bold text-[#1B3A7A] text-2xl md:text-3xl mb-2">
            Higiene Bucal Completa
          </h3>
          <p className="text-[#374151] text-sm mb-10 max-w-xl">
            Más allá de la pasta dental. Un sistema completo de cuidado oral natural para toda la familia — en casa y donde vayas.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {higieneBucal.map((p) => (
              <ProductCard key={p.name} {...p} />
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════ */}
      {/* PARA TODA LA FAMILIA                            */}
      {/* ══════════════════════════════════════════════════ */}
      <section className="py-24 bg-[#F4F6F9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-[#3ED9C4] font-semibold text-sm uppercase tracking-widest">
              Un producto para cada quien
            </span>
            <h2 className="font-display font-bold text-[#1B3A7A] text-4xl md:text-5xl mt-3 mb-4">
              Para toda la familia.
            </h2>
            <p className="text-[#5A6478] max-w-xl mx-auto text-lg leading-relaxed">
              No importa la edad. Hay un producto pensado para cada etapa de la vida. Así cuida una familia de verdad.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {familiaItems.map((item) => (
              <div
                key={item.title}
                className="bg-white rounded-3xl overflow-hidden flex flex-col shadow-[0_8px_24px_rgba(0,0,0,0.07)] hover:shadow-[0_20px_48px_rgba(0,0,0,0.12)] hover:-translate-y-1.5 transition-all duration-300 border border-gray-100 group"
              >
                {/* Badge fuera de la imagen — igual que niños */}
                <div className="px-4 pt-4">
                  <span className="inline-flex items-center text-[10px] font-extrabold uppercase tracking-widest px-3 py-1.5 rounded-full bg-[#F0FAF7] text-[#1B3A7A]">
                    {item.badge}
                  </span>
                </div>
                {/* Imagen limpia sin gradiente ni overlay */}
                <div className="relative h-64 mx-2 mt-2 flex-shrink-0">
                  <Image
                    src={item.img}
                    alt={item.title}
                    fill
                    className="object-contain group-hover:scale-105 transition-transform duration-500 ease-out"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                </div>
                {/* Contenido */}
                <div className="p-5 flex flex-col flex-1">
                  <h3 className="font-display font-bold text-[#1B3A7A] text-base mb-2 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-[#374151] text-xs leading-relaxed mb-4 flex-1">
                    {item.desc}
                  </p>
                  <a
                    href={`https://wa.me/573203358826?text=${encodeURIComponent(item.waMsg)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full bg-[#25D366] text-white py-2.5 rounded-2xl font-bold text-xs hover:bg-[#20b858] hover:scale-[1.02] transition-all duration-200 shadow-sm hover:shadow-[0_6px_18px_rgba(37,211,102,0.35)]"
                  >
                    <MessageCircle size={13} />
                    Consultar por WhatsApp
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <a
              href="https://wa.me/573203358826"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border-2 border-[#1B3A7A] text-[#1B3A7A] px-8 py-3.5 rounded-full font-bold text-sm hover:bg-[#1B3A7A] hover:text-white transition-all duration-200"
            >
              <MessageCircle size={16} />
              ¿No sabes cuál es el tuyo? Escríbeme y te ayudo
            </a>
          </div>

          {/* ── FORTALECER ── */}
          <div className="mt-24">
            {/* Header */}
            <div className="text-center mb-14">
              <span className="inline-flex items-center gap-2 bg-[#1B3A7A]/8 text-[#1B3A7A] font-bold text-xs uppercase tracking-widest px-5 py-2 rounded-full mb-4">
                <Shield size={13} /> Nutrición esencial
              </span>
              <h2 className="font-display font-bold text-[#1B3A7A] text-4xl md:text-5xl mt-2 mb-4">
                Fortalece tu cuerpo.
              </h2>
              <p className="text-[#5A6478] max-w-lg mx-auto text-base leading-relaxed">
                Suplementos clave para la salud ósea, digestiva y cardiovascular. Para toda la familia, en cada etapa de la vida.
              </p>
            </div>

            {/* Grid 6 productos */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 max-w-6xl mx-auto">

              {/* 1 — USANA Probióticos */}
              <div className="group flex flex-col bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-[0_2px_16px_rgba(27,58,122,0.08)] hover:shadow-[0_12px_40px_rgba(27,58,122,0.16)] hover:-translate-y-2 transition-all duration-300">
                <div className="relative w-full aspect-square overflow-hidden bg-gray-50">
                  <Image src="/images/adultos-usana-probiotico.png" alt="USANA Probióticos" fill className="object-cover group-hover:scale-105 transition-transform duration-500" sizes="(max-width:640px) 50vw, 20vw" />
                  <div className="absolute top-2.5 left-2.5">
                    <span className="bg-[#14b8a6] text-white text-[9px] font-extrabold uppercase tracking-wide px-2.5 py-1 rounded-full shadow">Flora intestinal</span>
                  </div>
                </div>
                <div className="p-3 flex flex-col flex-1">
                  <h3 className="font-display font-bold text-[#1B3A7A] text-sm leading-tight mb-1.5">USANA Probióticos</h3>
                  <p className="text-[#6B7280] text-[11px] leading-relaxed flex-1">Normaliza la flora intestinal. 12 mil millones de bacterias por dosis. Bienestar digestivo real.</p>
                  <div className="mt-3 mb-3 flex items-center gap-2">
                    <span className="text-[#1B3A7A] font-extrabold text-base">$145.000</span>
                    <span className="text-[10px] text-[#94a3b8] font-medium">COP</span>
                  </div>
                  <a href={`https://wa.me/573203358826?text=${encodeURIComponent("Hola Yesit! Me interesan los Probióticos USANA. ¿Está disponible? 🌿")}`} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-1.5 w-full bg-[#1B3A7A] text-white py-2.5 rounded-xl font-bold text-xs hover:bg-[#3ED9C4] hover:text-[#1B3A7A] transition-all duration-200 shadow-sm">
                    <MessageCircle size={12} /> Pedir ahora
                  </a>
                </div>
              </div>

              {/* 2 — Calcio Adultos */}
              <div className="group flex flex-col bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-[0_2px_16px_rgba(27,58,122,0.08)] hover:shadow-[0_12px_40px_rgba(27,58,122,0.16)] hover:-translate-y-2 transition-all duration-300">
                <div className="relative w-full aspect-square overflow-hidden bg-gray-50">
                  <Image src="/images/adultos-calcio.png" alt="Calcio para Adultos" fill className="object-cover group-hover:scale-105 transition-transform duration-500" sizes="(max-width:640px) 50vw, 20vw" />
                  <div className="absolute top-2.5 left-2.5">
                    <span className="bg-[#1B3A7A] text-white text-[9px] font-extrabold uppercase tracking-wide px-2.5 py-1 rounded-full shadow">Salud ósea</span>
                  </div>
                </div>
                <div className="p-3 flex flex-col flex-1">
                  <h3 className="font-display font-bold text-[#1B3A7A] text-sm leading-tight mb-1.5">Calcio para Adultos</h3>
                  <p className="text-[#6B7280] text-[11px] leading-relaxed flex-1">Fortaleza ósea y dental. Vitaminas y minerales esenciales. Alta absorción. Articulaciones activas.</p>
                  <div className="mt-3 mb-3 flex items-center gap-2">
                    <span className="text-[#1B3A7A] font-extrabold text-base">$135.000</span>
                    <span className="text-[10px] text-[#94a3b8] font-medium">COP</span>
                  </div>
                  <a href={`https://wa.me/573203358826?text=${encodeURIComponent("Hola Yesit! Me interesa el Calcio para Adultos. ¿Está disponible? 🦴")}`} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-1.5 w-full bg-[#1B3A7A] text-white py-2.5 rounded-xl font-bold text-xs hover:bg-[#3ED9C4] hover:text-[#1B3A7A] transition-all duration-200 shadow-sm">
                    <MessageCircle size={12} /> Pedir ahora
                  </a>
                </div>
              </div>

              {/* 3 — BIOMEGA */}
              <div className="group flex flex-col bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-[0_2px_16px_rgba(27,58,122,0.08)] hover:shadow-[0_12px_40px_rgba(27,58,122,0.16)] hover:-translate-y-2 transition-all duration-300">
                <div className="relative w-full aspect-square overflow-hidden bg-gray-50">
                  <Image src="/images/adultos-biomega.png" alt="BIOMEGA Omega-3" fill className="object-cover group-hover:scale-105 transition-transform duration-500" sizes="(max-width:640px) 50vw, 20vw" />
                  <div className="absolute top-2.5 left-2.5">
                    <span className="bg-[#f97316] text-white text-[9px] font-extrabold uppercase tracking-wide px-2.5 py-1 rounded-full shadow">Omega-3</span>
                  </div>
                </div>
                <div className="p-3 flex flex-col flex-1">
                  <h3 className="font-display font-bold text-[#1B3A7A] text-sm leading-tight mb-1.5">BIOMEGA</h3>
                  <p className="text-[#6B7280] text-[11px] leading-relaxed flex-1">DHA 500 mg · EPA 600 mg · Vitamina D. Corazón, cerebro e inmunidad. 56 cápsulas.</p>
                  <div className="mt-3 mb-3 flex items-center gap-2">
                    <span className="text-[#1B3A7A] font-extrabold text-base">$134.000</span>
                    <span className="text-[10px] text-[#94a3b8] font-medium">COP</span>
                  </div>
                  <a href={`https://wa.me/573203358826?text=${encodeURIComponent("Hola Yesit! Me interesa el BIOMEGA Omega-3. ¿Disponibilidad? 🐟")}`} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-1.5 w-full bg-[#1B3A7A] text-white py-2.5 rounded-xl font-bold text-xs hover:bg-[#3ED9C4] hover:text-[#1B3A7A] transition-all duration-200 shadow-sm">
                    <MessageCircle size={12} /> Pedir ahora
                  </a>
                </div>
              </div>

              {/* 4 — E-Omega 3 Atomy */}
              <div className="group flex flex-col bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-[0_2px_16px_rgba(27,58,122,0.08)] hover:shadow-[0_12px_40px_rgba(27,58,122,0.16)] hover:-translate-y-2 transition-all duration-300">
                <div className="relative w-full aspect-square overflow-hidden bg-gray-50">
                  <Image src="/images/adultos-eomega.png" alt="E-Omega 3 Atomy" fill className="object-cover group-hover:scale-105 transition-transform duration-500" sizes="(max-width:640px) 50vw, 20vw" />
                  <div className="absolute top-2.5 left-2.5">
                    <span className="bg-[#f97316] text-white text-[9px] font-extrabold uppercase tracking-wide px-2.5 py-1 rounded-full shadow">Omega-3 Premium</span>
                  </div>
                </div>
                <div className="p-3 flex flex-col flex-1">
                  <h3 className="font-display font-bold text-[#1B3A7A] text-sm leading-tight mb-1.5">E-Omega 3 Atomy</h3>
                  <p className="text-[#6B7280] text-[11px] leading-relaxed flex-1">Alaska EPA y DHA + Vitamina E. Cardiovascular, cerebro y circulación. 180 cápsulas.</p>
                  <div className="mt-3 mb-3 flex items-center gap-2">
                    <span className="text-[#1B3A7A] font-extrabold text-base">$135.000</span>
                    <span className="text-[10px] text-[#94a3b8] font-medium">COP</span>
                  </div>
                  <a href={`https://wa.me/573203358826?text=${encodeURIComponent("Hola Yesit! Me interesa el E-Omega 3 de Atomy. ¿Disponibilidad? 🐟")}`} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-1.5 w-full bg-[#1B3A7A] text-white py-2.5 rounded-xl font-bold text-xs hover:bg-[#3ED9C4] hover:text-[#1B3A7A] transition-all duration-200 shadow-sm">
                    <MessageCircle size={12} /> Pedir ahora
                  </a>
                </div>
              </div>

              {/* 5 — MULTYDRINK */}
              <div className="group flex flex-col bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-[0_2px_16px_rgba(27,58,122,0.08)] hover:shadow-[0_12px_40px_rgba(27,58,122,0.16)] hover:-translate-y-2 transition-all duration-300">
                <div className="relative w-full aspect-square overflow-hidden bg-gray-50">
                  <Image src="/images/adultos-multydrink.png" alt="MULTYDRINK bebida antioxidante" fill className="object-cover group-hover:scale-105 transition-transform duration-500" sizes="(max-width:640px) 50vw, 17vw" />
                  <div className="absolute top-2.5 left-2.5">
                    <span className="bg-[#3ED9C4] text-[#1B3A7A] text-[9px] font-extrabold uppercase tracking-wide px-2.5 py-1 rounded-full shadow">Antioxidante</span>
                  </div>
                </div>
                <div className="p-3 flex flex-col flex-1">
                  <h3 className="font-display font-bold text-[#1B3A7A] text-sm leading-tight mb-1.5">MULTYDRINK</h3>
                  <p className="text-[#6B7280] text-[11px] leading-relaxed flex-1">Bebida antioxidante premium. Energía natural y vitalidad. Caja x 21 sobres.</p>
                  <div className="mt-3 mb-3 flex items-center gap-2">
                    <span className="text-[#1B3A7A] font-extrabold text-base">$125.000</span>
                    <span className="text-[10px] text-[#94a3b8] font-medium">caja x 21</span>
                  </div>
                  <a href={`https://wa.me/573203358826?text=${encodeURIComponent("Hola Yesit! Me interesa el MULTYDRINK (caja x 21 sobres). ¿Disponibilidad? 🌿")}`} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-1.5 w-full bg-[#3ED9C4] text-[#1B3A7A] py-2.5 rounded-xl font-bold text-xs hover:bg-[#1B3A7A] hover:text-white transition-all duration-200 shadow-sm">
                    <MessageCircle size={12} /> Pedir ahora
                  </a>
                </div>
              </div>

              {/* 6 — Probióticos caja azul */}
              <div className="group flex flex-col bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-[0_2px_16px_rgba(27,58,122,0.08)] hover:shadow-[0_12px_40px_rgba(27,58,122,0.16)] hover:-translate-y-2 transition-all duration-300">
                <div className="relative w-full aspect-square overflow-hidden bg-gray-50">
                  <Image src="/images/adultos-probioticos.png" alt="Probióticos caja azul" fill className="object-cover group-hover:scale-105 transition-transform duration-500" sizes="(max-width:640px) 50vw, 20vw" />
                  <div className="absolute top-2.5 left-2.5">
                    <span className="bg-[#14b8a6] text-white text-[9px] font-extrabold uppercase tracking-wide px-2.5 py-1 rounded-full shadow">Flora intestinal</span>
                  </div>
                </div>
                <div className="p-3 flex flex-col flex-1">
                  <h3 className="font-display font-bold text-[#1B3A7A] text-sm leading-tight mb-1.5">Probióticos</h3>
                  <p className="text-[#6B7280] text-[11px] leading-relaxed flex-1">Equilibrio intestinal y defensas activas. Caja x 30 sobres. Un sobre al día, para toda la familia.</p>
                  <div className="mt-3 mb-3 flex items-center gap-2">
                    <span className="text-[#1B3A7A] font-extrabold text-base">$100.000</span>
                    <span className="text-[10px] text-[#94a3b8] font-medium">caja x 30</span>
                  </div>
                  <a href={`https://wa.me/573203358826?text=${encodeURIComponent("Hola Yesit! Me interesan los Probióticos (caja azul x30 sobres). ¿Está disponible? 🌿")}`} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-1.5 w-full bg-[#1B3A7A] text-white py-2.5 rounded-xl font-bold text-xs hover:bg-[#3ED9C4] hover:text-[#1B3A7A] transition-all duration-200 shadow-sm">
                    <MessageCircle size={12} /> Pedir ahora
                  </a>
                </div>
              </div>

            </div>

            {/* CTA inferior */}
            <div className="mt-10 text-center">
              <p className="text-[#5A6478] text-sm mb-4">¿Necesitas orientación sobre cuál es el ideal para ti?</p>
              <a href={`https://wa.me/573203358826?text=${encodeURIComponent("Hola Yesit! Quiero saber cuáles suplementos son mejores para mi caso. ¿Me ayudas? 🌿")}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#25D366] text-white px-8 py-3.5 rounded-full font-bold text-sm hover:bg-[#1fb855] transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5">
                <MessageCircle size={16} /> Habla con Yesit · Te asesoro gratis
              </a>
            </div>
          </div>
          {/* ── FIN FORTALECER ── */}

        </div>
      </section>

      {/* ══════════════════════════════════════════════════ */}
      {/* CARRUSEL 3D — PERSONAJES                       */}
      {/* ══════════════════════════════════════════════════ */}
      <VideoCarousel />

      {/* ══════════════════════════════════════════════════ */}
      {/* BENEFICIOS — ESTILO DE VIDA                     */}
      {/* ══════════════════════════════════════════════════ */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-[#3ED9C4] font-semibold text-base uppercase tracking-widest">
              Un estilo de vida
            </span>
            <h2 className="font-display font-bold text-[#1B3A7A] text-5xl md:text-6xl mt-3 mb-4 leading-tight">
              Hoy no eliges solo productos.
              <br />
              <span className="text-[#3ED9C4]">Eliges cómo quieres sentirte.</span>
            </h2>
            <p className="text-[#5A6478] max-w-xl mx-auto text-lg leading-relaxed">
              Cada producto que ofrecemos tiene un propósito claro. No vendemos
              cajas. Vendemos resultados que se sienten.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((b) => (
              <div
                key={b.title}
                className="group bg-[#F4F6F9] rounded-3xl p-8 flex flex-col hover:bg-[#1B3A7A] transition-all duration-300 cursor-default"
              >
                <div className="mb-2">
                  <span className="text-[#3ED9C4] text-xs font-bold uppercase tracking-widest group-hover:text-[#3ED9C4]">
                    {b.tag}
                  </span>
                </div>
                <div className="mb-4 p-3 bg-white rounded-2xl w-fit shadow-sm group-hover:bg-[#3ED9C4]/20 transition-colors">
                  {b.icon}
                </div>
                <h3 className="font-display font-bold text-[#1B3A7A] group-hover:text-white text-xl mb-3 transition-colors">
                  {b.title}
                </h3>
                <p className="text-[#5A6478] group-hover:text-white/75 text-sm leading-relaxed transition-colors flex-1">
                  {b.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ══════════════════════════════════════════════════ */}
      {/* KITS & COMBOS                                   */}
      {/* ══════════════════════════════════════════════════ */}
      <section id="combos" className="py-24 bg-white scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-[#3ED9C4]/10 border border-[#3ED9C4]/30 text-[#1B3A7A] text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-4">
              <Gift size={14} />
              Combos especiales
            </div>
            <h2 className="font-display font-bold text-[#1B3A7A] text-4xl md:text-5xl mt-2 mb-4">
              Combos que transforman.
            </h2>
            <p className="text-[#5A6478] max-w-xl mx-auto text-lg leading-relaxed">
              Los mejores resultados se logran con rutinas completas. Estos combos son los que más se piden — y los que más funcionan.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {kits.map((kit) => (
              <div
                key={kit.name}
                className="bg-[#F4F6F9] rounded-3xl overflow-hidden flex flex-col shadow-sm hover:shadow-lg transition-shadow"
              >
                {/* Cabecera */}
                <div className={`${kit.accentColor} px-7 pt-7 pb-5`}>
                  <div className="flex items-center justify-between mb-3">
                    <div className="bg-white/20 p-2.5 rounded-xl">
                      {kit.icon}
                    </div>
                    <span className={`text-xs font-bold uppercase tracking-widest ${kit.textColor} opacity-80`}>
                      {kit.tag}
                    </span>
                  </div>
                  <h3 className={`font-display font-bold text-xl ${kit.textColor}`}>
                    {kit.name}
                  </h3>
                </div>

                {/* Cuerpo */}
                <div className="p-7 flex flex-col flex-1">
                  <p className="text-[#5A6478] text-sm leading-relaxed mb-5">
                    {kit.desc}
                  </p>

                  {/* Lista de productos */}
                  <ul className="space-y-2 mb-6 flex-1">
                    {kit.items.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-[#1B3A7A]">
                        <CheckCircle size={15} className="text-[#3ED9C4] flex-shrink-0 mt-0.5" />
                        {item}
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <a
                    href={`https://wa.me/573203358826?text=${encodeURIComponent(`Hola Yesit! Me interesa el ${kit.name}. ¿Cuál es el precio del combo? 🛍️`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full bg-[#1B3A7A] text-white py-3 rounded-xl font-bold text-sm hover:bg-[#3ED9C4] hover:text-[#1B3A7A] transition-colors"
                  >
                    <MessageCircle size={15} />
                    Consultar precio del kit
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════ */}
      {/* CÓMO COMPRAR                                     */}
      {/* ══════════════════════════════════════════════════ */}
      <section className="py-24 bg-[#1B3A7A]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-[#3ED9C4] font-semibold text-sm uppercase tracking-widest">
              Proceso de compra
            </span>
            <h2 className="font-display font-bold text-white text-4xl md:text-5xl mt-3">
              Así de sencillo.
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                step: "01",
                icon: <Coffee size={28} className="text-[#3ED9C4]" />,
                title: "Elige tu producto",
                desc: "Explora nuestras categorías y encuentra lo que tu cuerpo necesita.",
              },
              {
                step: "02",
                icon: <CheckCircle size={28} className="text-[#3ED9C4]" />,
                title: "Agrégalo al carrito",
                desc: "Un clic y queda en tu pedido. Puedes agregar varios productos.",
              },
              {
                step: "03",
                icon: <MessageCircle size={28} className="text-[#3ED9C4]" />,
                title: "Envía por WhatsApp",
                desc: "Tu pedido llega a Yesit listo y ordenado. Él te confirma el total.",
              },
              {
                step: "04",
                icon: <Truck size={28} className="text-[#3ED9C4]" />,
                title: "Recibe en casa",
                desc: "Envíos a toda Colombia. Rápido, seguro y bien empacado.",
              },
            ].map((item) => (
              <div key={item.step} className="relative">
                <div className="bg-white/5 rounded-3xl p-7 h-full border border-white/10 hover:border-[#3ED9C4]/40 transition-colors">
                  <div className="text-[#3ED9C4]/30 font-display font-extrabold text-5xl leading-none mb-4">
                    {item.step}
                  </div>
                  <div className="mb-4">{item.icon}</div>
                  <h3 className="font-display font-bold text-white text-lg mb-2">
                    {item.title}
                  </h3>
                  <p className="text-white/60 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <a
              href="#productos"
              className="inline-flex items-center gap-2 bg-[#3ED9C4] text-[#1B3A7A] px-8 py-4 rounded-full font-bold text-base hover:bg-white transition-colors shadow-lg"
            >
              Ver productos →
            </a>
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
                className="inline-flex items-center gap-3 bg-[#25D366] text-white px-8 py-4 rounded-full font-bold text-base hover:bg-[#20b858] hover:scale-[1.03] transition-all duration-200 shadow-[0_8px_20px_rgba(37,211,102,0.35)] hover:shadow-[0_12px_28px_rgba(37,211,102,0.5)]"
              >
                <MessageCircle size={20} />
                Hablar con Yesit ahora
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Videos de personajes integrados dentro de cada categoría — sección eliminada */}

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
      <section className="py-24 bg-[#1B3A7A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-6">
            <span className="text-[#3ED9C4] font-semibold text-sm uppercase tracking-widest">
              Testimonios reales
            </span>
            <h2 className="font-display font-bold text-white text-4xl md:text-5xl mt-3 mb-4">
              Lo que dicen quienes ya lo viven.
            </h2>
          </div>

          {/* Rating general */}
          <div className="flex items-center justify-center gap-3 mb-14">
            <div className="flex gap-1">
              {[1,2,3,4,5].map((i) => (
                <Star key={i} size={22} className="text-amber-400 fill-amber-400" />
              ))}
            </div>
            <span className="text-white font-display font-bold text-2xl">5.0</span>
            <span className="text-white/50 text-sm">· Valoración de clientes</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, idx) => (
              <div
                key={t.name}
                className={`rounded-3xl p-8 flex flex-col ${
                  idx === 1
                    ? "bg-[#3ED9C4] text-[#1B3A7A]"
                    : "bg-white/5 border border-white/10"
                }`}
              >
                {/* Comillas decorativas */}
                <div className={`font-display text-6xl leading-none mb-2 ${idx === 1 ? "text-[#1B3A7A]/20" : "text-[#3ED9C4]/30"}`}>
                  &ldquo;
                </div>

                <p className={`text-base leading-relaxed flex-1 mb-6 ${idx === 1 ? "text-[#1B3A7A]" : "text-white/85"}`}>
                  {t.text}
                </p>

                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: t.stars }).map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      className={idx === 1 ? "text-[#1B3A7A] fill-[#1B3A7A]" : "text-amber-400 fill-amber-400"}
                    />
                  ))}
                </div>

                {/* Autor */}
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center font-display font-bold text-sm ${idx === 1 ? "bg-[#1B3A7A] text-white" : "bg-[#3ED9C4]/20 text-[#3ED9C4]"}`}>
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <p className={`font-display font-bold text-sm ${idx === 1 ? "text-[#1B3A7A]" : "text-white"}`}>
                      {t.name}
                    </p>
                    <p className={`text-xs ${idx === 1 ? "text-[#1B3A7A]/60" : "text-white/50"}`}>{t.city}, Colombia</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA debajo */}
          <div className="mt-12 text-center">
            <a
              href="https://wa.me/573203358826"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#25D366] text-white px-8 py-4 rounded-full font-bold hover:bg-[#20b858] transition-colors shadow-lg"
            >
              <MessageCircle size={18} />
              Quiero empezar mi cambio
            </a>
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
              className="inline-flex items-center justify-center gap-3 bg-[#25D366] text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-[#20b858] hover:scale-[1.03] transition-all duration-200 shadow-[0_8px_24px_rgba(37,211,102,0.4)] hover:shadow-[0_14px_36px_rgba(37,211,102,0.55)]"
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
                  { href: "#energia", label: "Energía Natural" },
                  { href: "#bienestar", label: "Bienestar Integral" },
                  { href: "#cuidado", label: "Cuidado Personal" },
                  { href: "#combos", label: "Combos Wellness" },
                  { href: "#asesora", label: "Nosotros" },
                  { href: "#contacto", label: "Contacto" },
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
          {/* Redes Sociales */}
          <div className="border-t border-white/10 pt-8 pb-6 flex flex-col items-center gap-4">
            <p className="text-white/40 text-xs uppercase tracking-widest font-semibold">Síguenos</p>
            <div className="flex items-center gap-3">
              {/* Facebook */}
              <a
                href="https://www.facebook.com/profile.php?id=61590177674657"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook de Tu Tienda de la Salud"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white/60 hover:bg-[#1877F2] hover:text-white transition-all duration-200"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              {/* Instagram */}
              <a
                href="https://www.instagram.com/tutiendadelasalud.co/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram de Tu Tienda de la Salud"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white/60 hover:bg-gradient-to-br hover:from-[#f09433] hover:via-[#e6683c] hover:to-[#bc1888] hover:text-white transition-all duration-200"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                </svg>
              </a>
              {/* TikTok */}
              <a
                href="https://www.tiktok.com/tiktokstudio"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok de Tu Tienda de la Salud"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white/60 hover:bg-black hover:text-white transition-all duration-200"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.76a4.85 4.85 0 0 1-1.01-.07z"/>
                </svg>
              </a>
              {/* YouTube */}
              <a
                href="https://www.youtube.com/@tutiendadelasalud-p2h"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube de Tu Tienda de la Salud"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white/60 hover:bg-[#FF0000] hover:text-white transition-all duration-200"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M23.495 6.205a3.007 3.007 0 00-2.088-2.088c-1.87-.501-9.396-.501-9.396-.501s-7.507-.01-9.396.501A3.007 3.007 0 00.527 6.205a31.247 31.247 0 00-.522 5.805 31.247 31.247 0 00.522 5.783 3.007 3.007 0 002.088 2.088c1.868.502 9.396.502 9.396.502s7.506 0 9.396-.502a3.007 3.007 0 002.088-2.088 31.247 31.247 0 00.5-5.783 31.247 31.247 0 00-.5-5.805zM9.609 15.601V8.408l6.264 3.602z"/>
                </svg>
              </a>
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
            <div className="mt-4 flex justify-center gap-6">
              <Link href="/privacidad" className="text-white/40 hover:text-white/70 text-xs transition-colors">
                Política de Privacidad
              </Link>
            </div>
          </div>
        </div>
      </footer>

      {/* ── WIDGET WHATSAPP FLOTANTE ── */}
      <WhatsAppWidget />
    </>
  );
}
