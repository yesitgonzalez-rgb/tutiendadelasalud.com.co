import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Tu Tienda de la Salud — Productos naturales para tu bienestar integral";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(135deg, #1B3A7A 0%, #0d2452 60%, #091a3d 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "60px 80px",
          position: "relative",
        }}
      >
        {/* Círculo decorativo fondo */}
        <div
          style={{
            position: "absolute",
            top: -120,
            right: -120,
            width: 500,
            height: 500,
            borderRadius: "50%",
            background: "rgba(62,217,196,0.08)",
            display: "flex",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: -80,
            left: -80,
            width: 300,
            height: 300,
            borderRadius: "50%",
            background: "rgba(62,217,196,0.06)",
            display: "flex",
          }}
        />

        {/* Tag superior */}
        <div
          style={{
            background: "#3ED9C4",
            color: "#1B3A7A",
            fontSize: 18,
            fontWeight: 800,
            letterSpacing: 3,
            textTransform: "uppercase",
            padding: "10px 28px",
            borderRadius: 100,
            marginBottom: 32,
            display: "flex",
          }}
        >
          🌿 Envíos a todo Colombia
        </div>

        {/* Título principal */}
        <div
          style={{
            color: "white",
            fontSize: 78,
            fontWeight: 900,
            textAlign: "center",
            lineHeight: 1.05,
            marginBottom: 20,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <span>Tu Tienda</span>
          <span style={{ color: "#3ED9C4" }}>de la Salud</span>
        </div>

        {/* Subtítulo */}
        <div
          style={{
            color: "rgba(255,255,255,0.75)",
            fontSize: 26,
            textAlign: "center",
            maxWidth: 680,
            lineHeight: 1.4,
            marginBottom: 48,
            display: "flex",
          }}
        >
          Productos orgánicos naturales para tu bienestar integral
        </div>

        {/* Bullets de categorías */}
        <div
          style={{
            display: "flex",
            gap: 16,
            flexWrap: "wrap",
            justifyContent: "center",
            marginBottom: 48,
          }}
        >
          {["🍄 Ganoderma", "🥤 Bebidas", "⚡ Celion", "🌿 Cuidado Personal", "👶 Niños"].map(
            (cat) => (
              <div
                key={cat}
                style={{
                  background: "rgba(255,255,255,0.1)",
                  border: "1px solid rgba(255,255,255,0.2)",
                  color: "white",
                  fontSize: 16,
                  padding: "8px 20px",
                  borderRadius: 100,
                  display: "flex",
                }}
              >
                {cat}
              </div>
            )
          )}
        </div>

        {/* URL del sitio */}
        <div
          style={{
            color: "#3ED9C4",
            fontSize: 22,
            fontWeight: 700,
            letterSpacing: 1,
            display: "flex",
          }}
        >
          tutiendadelasalud.com.co
        </div>
      </div>
    ),
    { ...size }
  );
}
