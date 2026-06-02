import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Política de Privacidad | Tu Tienda de la Salud",
  description:
    "Política de privacidad y tratamiento de datos personales de Tu Tienda de la Salud. Cumplimiento Ley 1581 de 2012 — Colombia.",
};

export default function PrivacidadPage() {
  const fecha = "1 de junio de 2026";

  return (
    <main className="min-h-screen bg-[#F4F6F9] pt-28 pb-20">
      <div className="max-w-3xl mx-auto px-4">

        {/* Header */}
        <div className="mb-10">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-[#3ED9C4] text-sm font-semibold hover:underline mb-6 block"
          >
            ← Volver al inicio
          </Link>
          <h1 className="font-display font-extrabold text-[#1B3A7A] text-4xl mb-3">
            Política de Privacidad
          </h1>
          <p className="text-[#6B7280] text-sm">
            Última actualización: {fecha}
          </p>
        </div>

        {/* Contenido */}
        <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8 md:p-12 space-y-10 text-[#374151] leading-relaxed">

          {/* 1 */}
          <section>
            <h2 className="font-display font-bold text-[#1B3A7A] text-xl mb-3">
              1. Responsable del tratamiento
            </h2>
            <p>
              El responsable del tratamiento de datos personales es <strong>Yesit González</strong>,
              distribuidor independiente de productos de bienestar natural, operando bajo la marca
              <strong> Tu Tienda de la Salud</strong>.
            </p>
            <ul className="mt-3 space-y-1 text-sm">
              <li>📧 Correo: <a href="mailto:contacto@tutiendadelasalud.com.co" className="text-[#3ED9C4] hover:underline">contacto@tutiendadelasalud.com.co</a></li>
              <li>📱 WhatsApp: <a href="https://wa.me/573203358826" className="text-[#3ED9C4] hover:underline">+57 320 335 8826</a></li>
              <li>🌐 Sitio web: <a href="https://tutiendadelasalud.com.co" className="text-[#3ED9C4] hover:underline">tutiendadelasalud.com.co</a></li>
              <li>📍 Colombia</li>
            </ul>
          </section>

          {/* 2 */}
          <section>
            <h2 className="font-display font-bold text-[#1B3A7A] text-xl mb-3">
              2. Marco legal
            </h2>
            <p>
              Esta política se rige por la <strong>Ley 1581 de 2012</strong> (Protección de Datos
              Personales de Colombia), el <strong>Decreto 1377 de 2013</strong> y demás normas
              aplicables. Al navegar por este sitio web, usted acepta las condiciones aquí descritas.
            </p>
          </section>

          {/* 3 */}
          <section>
            <h2 className="font-display font-bold text-[#1B3A7A] text-xl mb-3">
              3. Datos que recopilamos
            </h2>
            <p className="mb-3">
              Recopilamos información de forma automática y, en algunos casos, de forma voluntaria:
            </p>
            <div className="space-y-4">
              <div className="bg-[#F4F6F9] rounded-2xl p-4">
                <p className="font-semibold text-[#1B3A7A] text-sm mb-1">📊 Datos de navegación (automáticos)</p>
                <p className="text-sm">Dirección IP, tipo de dispositivo, navegador, páginas visitadas, tiempo de visita, país de origen. Recopilados mediante cookies y tecnologías similares.</p>
              </div>
              <div className="bg-[#F4F6F9] rounded-2xl p-4">
                <p className="font-semibold text-[#1B3A7A] text-sm mb-1">📱 Datos de interacción (voluntarios)</p>
                <p className="text-sm">Cuando usted hace clic en nuestros botones de WhatsApp y se comunica con nosotros, puede proporcionar su nombre, número de teléfono y consultas de productos.</p>
              </div>
              <div className="bg-[#F4F6F9] rounded-2xl p-4">
                <p className="font-semibold text-[#1B3A7A] text-sm mb-1">🎯 Datos de publicidad (Meta Pixel)</p>
                <p className="text-sm">Utilizamos el <strong>Meta Pixel (ID: 337771982973731)</strong> de Meta Platforms Inc. (Facebook/Instagram) para medir la efectividad de nuestros anuncios. Este pixel recopila datos sobre visitas y acciones en el sitio para mostrarte anuncios relevantes.</p>
              </div>
            </div>
          </section>

          {/* 4 */}
          <section>
            <h2 className="font-display font-bold text-[#1B3A7A] text-xl mb-3">
              4. Finalidad del tratamiento
            </h2>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2"><span className="text-[#3ED9C4] font-bold mt-0.5">▸</span> Mejorar la experiencia de navegación en el sitio web.</li>
              <li className="flex items-start gap-2"><span className="text-[#3ED9C4] font-bold mt-0.5">▸</span> Atender consultas y solicitudes de productos enviadas por WhatsApp.</li>
              <li className="flex items-start gap-2"><span className="text-[#3ED9C4] font-bold mt-0.5">▸</span> Medir el rendimiento de campañas publicitarias en Facebook e Instagram.</li>
              <li className="flex items-start gap-2"><span className="text-[#3ED9C4] font-bold mt-0.5">▸</span> Crear audiencias personalizadas para mostrar anuncios relevantes a usuarios interesados en salud y bienestar.</li>
              <li className="flex items-start gap-2"><span className="text-[#3ED9C4] font-bold mt-0.5">▸</span> Análisis estadístico del tráfico web mediante Google Analytics (si aplica).</li>
            </ul>
          </section>

          {/* 5 */}
          <section>
            <h2 className="font-display font-bold text-[#1B3A7A] text-xl mb-3">
              5. Cookies
            </h2>
            <p className="mb-3">
              Este sitio utiliza cookies propias y de terceros. Las cookies son pequeños archivos de
              texto que se almacenan en su dispositivo para mejorar la experiencia de uso.
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-[#1B3A7A] text-white">
                    <th className="text-left px-4 py-2 rounded-tl-xl">Cookie</th>
                    <th className="text-left px-4 py-2">Proveedor</th>
                    <th className="text-left px-4 py-2 rounded-tr-xl">Finalidad</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  <tr className="bg-[#F4F6F9]">
                    <td className="px-4 py-2 font-medium">_fbp, _fbc</td>
                    <td className="px-4 py-2">Meta (Facebook)</td>
                    <td className="px-4 py-2">Seguimiento publicitario</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 font-medium">Sesión</td>
                    <td className="px-4 py-2">Vercel / Next.js</td>
                    <td className="px-4 py-2">Funcionamiento del sitio</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-sm text-[#6B7280]">
              Puede desactivar las cookies desde la configuración de su navegador. Tenga en cuenta
              que esto puede afectar el funcionamiento del sitio.
            </p>
          </section>

          {/* 6 */}
          <section>
            <h2 className="font-display font-bold text-[#1B3A7A] text-xl mb-3">
              6. Compartición de datos con terceros
            </h2>
            <p className="mb-3">
              No vendemos ni cedemos sus datos personales. Únicamente compartimos información con:
            </p>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2"><span className="text-[#3ED9C4] font-bold mt-0.5">▸</span><div><strong>Meta Platforms Inc.</strong> — para la gestión del Meta Pixel y campañas publicitarias. <a href="https://www.facebook.com/policy.php" target="_blank" rel="noopener noreferrer" className="text-[#3ED9C4] hover:underline">Ver política de privacidad de Meta</a>.</div></li>
              <li className="flex items-start gap-2"><span className="text-[#3ED9C4] font-bold mt-0.5">▸</span><div><strong>Vercel Inc.</strong> — proveedor de alojamiento web. <a href="https://vercel.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-[#3ED9C4] hover:underline">Ver política de Vercel</a>.</div></li>
              <li className="flex items-start gap-2"><span className="text-[#3ED9C4] font-bold mt-0.5">▸</span><div><strong>WhatsApp / Meta</strong> — cuando usted inicia una conversación voluntariamente.</div></li>
            </ul>
          </section>

          {/* 7 */}
          <section>
            <h2 className="font-display font-bold text-[#1B3A7A] text-xl mb-3">
              7. Derechos del titular
            </h2>
            <p className="mb-3">
              De acuerdo con la Ley 1581 de 2012, usted tiene derecho a:
            </p>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2"><span className="text-[#3ED9C4] font-bold mt-0.5">▸</span> <strong>Conocer</strong> los datos personales que tenemos sobre usted.</li>
              <li className="flex items-start gap-2"><span className="text-[#3ED9C4] font-bold mt-0.5">▸</span> <strong>Actualizar y rectificar</strong> sus datos cuando sean inexactos.</li>
              <li className="flex items-start gap-2"><span className="text-[#3ED9C4] font-bold mt-0.5">▸</span> <strong>Solicitar la supresión</strong> de sus datos cuando no sean necesarios.</li>
              <li className="flex items-start gap-2"><span className="text-[#3ED9C4] font-bold mt-0.5">▸</span> <strong>Revocar la autorización</strong> para el tratamiento de sus datos.</li>
              <li className="flex items-start gap-2"><span className="text-[#3ED9C4] font-bold mt-0.5">▸</span> <strong>Presentar quejas</strong> ante la Superintendencia de Industria y Comercio (SIC).</li>
            </ul>
            <p className="mt-3 text-sm">
              Para ejercer sus derechos, escríbanos por WhatsApp al{" "}
              <a href="https://wa.me/573203358826" className="text-[#3ED9C4] font-semibold hover:underline">
                +57 320 335 8826
              </a>{" "}
              indicando su solicitud.
            </p>
          </section>

          {/* 8 */}
          <section>
            <h2 className="font-display font-bold text-[#1B3A7A] text-xl mb-3">
              8. Seguridad de los datos
            </h2>
            <p>
              Implementamos medidas técnicas y organizativas para proteger sus datos contra acceso
              no autorizado, pérdida o divulgación. Nuestro sitio utiliza protocolo <strong>HTTPS</strong>{" "}
              y está alojado en infraestructura segura de Vercel con certificados SSL activos.
            </p>
          </section>

          {/* 9 */}
          <section>
            <h2 className="font-display font-bold text-[#1B3A7A] text-xl mb-3">
              9. Cambios en esta política
            </h2>
            <p>
              Nos reservamos el derecho de actualizar esta política cuando sea necesario. La versión
              vigente siempre estará disponible en{" "}
              <strong>tutiendadelasalud.com.co/privacidad</strong>. Le recomendamos revisarla
              periódicamente.
            </p>
          </section>

          {/* 10 */}
          <section>
            <h2 className="font-display font-bold text-[#1B3A7A] text-xl mb-3">
              10. Contacto
            </h2>
            <p>
              Para cualquier consulta relacionada con esta política o el tratamiento de sus datos:
            </p>
            <div className="mt-3 bg-[#1B3A7A] text-white rounded-2xl p-5 text-sm space-y-2">
              <p>👤 <strong>Yesit González</strong> — Asesor de Bienestar</p>
              <p>📱 <a href="https://wa.me/573203358826" className="text-[#3ED9C4] hover:underline">+57 320 335 8826</a></p>
              <p>🌐 <a href="https://tutiendadelasalud.com.co" className="text-[#3ED9C4] hover:underline">tutiendadelasalud.com.co</a></p>
              <p>📍 Colombia</p>
            </div>
          </section>

          <p className="text-xs text-[#6B7280] text-center pt-4 border-t border-gray-100">
            © {new Date().getFullYear()} Tu Tienda de la Salud · Yesit González · Todos los derechos reservados
          </p>
        </div>

      </div>
    </main>
  );
}
