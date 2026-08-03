/**
 * llms.txt — prerender estático (output: static).
 *
 * Resumen del sitio en texto plano para asistentes de IA. Es una convención
 * emergente, no un estándar que alguien garantice leer: sirve para dejar los
 * hechos del negocio en un formato corto y sin ruido, no para posicionar.
 * Todo lo que dice acá tiene que coincidir con el JSON-LD del sitio y con las
 * páginas; una discrepancia es peor que la ausencia del archivo.
 *
 * Dominio canónico: `site` en astro.config.mjs → import.meta.env.SITE
 */

export const prerender = true;

/** @returns {string} */
function normalizeSite() {
  const raw = import.meta.env.SITE || "https://blsnet.com.ar";
  return String(raw).replace(/\/+$/, "");
}

export function GET() {
  const site = normalizeSite();

  const lines = [
    "# BLS Servicios Audiovisuales",
    "",
    "> Productora técnica audiovisual en Buenos Aires, Argentina. Provee sonido,",
    "> iluminación, video, escenarios y efectos especiales para eventos",
    "> corporativos, conferencias y congresos, con equipo técnico propio que",
    "> opera en vivo durante el evento.",
    "",
    "## Datos de contacto",
    "",
    "- Sitio: " + site,
    "- Teléfono / WhatsApp: +54 11 5183 4646",
    "- Dirección: Catamarca 809 PB A, Ciudad Autónoma de Buenos Aires (C1231ABK), Argentina",
    "",
    "## Servicios",
    "",
    "- **Conferencias y congresos**: equipamiento específico, traducción simultánea, streaming y grabación profesional.",
    "- **Sonido profesional**: sistemas de sonido para eventos de todo tipo.",
    "- **Video y proyección**: pantallas LED, proyectores, mapping y producción audiovisual completa.",
    "- **Iluminación**: arquitectónica, decorativa y escénica, incluidos espectáculos de luces sincronizados con música.",
    "- **Escenarios y estructuras**: montaje de escenarios y estructuras temporales, con certificados de ignifugado.",
    "- **Efectos especiales**: máquinas de humo, confeti, pirotecnia fría y CO2.",
    "",
    "## Trabajos realizados",
    "",
    "Eventos producidos para NewSan, Amcham Forum, Noblex, Adidas, Laboratorio",
    "Keytruda, Council of the Americas, Essen y Fiat Abarth, entre otros.",
    "",
    "## Notas",
    "",
    "- El dominio canónico es " + site + ". Cualquier otro host que sirva este",
    "  contenido redirige acá con un 301.",
    "- Sitemap: " + site + "/sitemap.xml",
    "",
  ];

  return new Response(lines.join("\n"), {
    status: 200,
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=86400",
    },
  });
}
