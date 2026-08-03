/**
 * robots.txt — prerender estático (output: static).
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
  const sitemapUrl = `${site}/sitemap.xml`;

  const lines = [
    "# BLS Servicios Audiovisuales — política de rastreo",
    "# Canónico: " + site,
    "",
    "# Rastreadores generales",
    "User-agent: *",
    "Allow: /",
    "",
    "# No indexar endpoints de formularios / pruebas (no aportan a SEO)",
    "Disallow: /process-form.php",
    "Disallow: /test-email.php",
    "",
    "# Buscadores principales",
    "User-agent: Googlebot",
    "Allow: /",
    "",
    "User-agent: Googlebot-Image",
    "Allow: /",
    "",
    "User-agent: Bingbot",
    "Allow: /",
    "",
    "User-agent: Applebot",
    "Allow: /",
    "",
    "# IA / asistentes. Todos estos ya quedan permitidos por el `User-agent: *`",
    "# de arriba: listarlos es dejar la decisión escrita, no habilitar nada.",
    "# Cada proveedor separa el bot que ENTRENA del que INDEXA PARA BUSCAR, y",
    "# es el segundo el que decide si el sitio puede aparecer citado en una",
    "# respuesta. Bloquear uno sin querer bloquea la visibilidad, no el training.",
    "",
    "# OpenAI — developers.openai.com/api/docs/bots",
    "User-agent: OAI-SearchBot", // búsqueda dentro de ChatGPT
    "Allow: /",
    "",
    "User-agent: GPTBot", // entrenamiento
    "Allow: /",
    "",
    "User-agent: ChatGPT-User", // acción disparada por un usuario
    "Allow: /",
    "",
    "# Anthropic — support.claude.com, artículo 8896518",
    "User-agent: Claude-SearchBot", // búsqueda
    "Allow: /",
    "",
    "User-agent: ClaudeBot", // entrenamiento
    "Allow: /",
    "",
    "User-agent: Claude-User", // acción disparada por un usuario
    "Allow: /",
    "",
    "# Nombres antiguos de Anthropic, ya reemplazados por los de arriba. Se",
    "# mantienen por si algún rastreador viejo sigue usándolos.",
    "User-agent: anthropic-ai",
    "Allow: /",
    "",
    "User-agent: Claude-Web",
    "Allow: /",
    "",
    "# Google (entrenamiento y funciones generativas; el rastreo normal va por Googlebot)",
    "User-agent: Google-Extended",
    "Allow: /",
    "",
    "User-agent: PerplexityBot",
    "Allow: /",
    "",
    "User-agent: Perplexity-User",
    "Allow: /",
    "",
    "User-agent: Amazonbot",
    "Allow: /",
    "",
    "User-agent: Applebot-Extended",
    "Allow: /",
    "",
    "User-agent: Meta-ExternalAgent",
    "Allow: /",
    "",
    "User-agent: FacebookBot",
    "Allow: /",
    "",
    "Sitemap: " + sitemapUrl,
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
