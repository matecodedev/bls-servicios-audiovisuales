// @ts-check
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  // The live site. `serviciosbls.com` was a staging domain that outlived its
  // purpose: it is a separate hosting account still serving a full copy, and
  // leaving it here made the generated sitemap and robots.txt advertise it as
  // canonical while every page declared blsnet.com.ar. Search engines were
  // being told two different things about the same content.
  site: "https://blsnet.com.ar",
  devToolbar: {
    enabled: false,
  },
  // Optimizaciones para mejorar el rendimiento
  vite: {
    build: {
      // Minificar JavaScript y eliminar código no utilizado
      minify: "esbuild",
      target: "es2020", // Para evitar servir polyfills de legacy a navegadores modernos
      rollupOptions: {
        output: {
          // Evitar duplicación de módulos en bundles
          manualChunks: {
            vendor: ["astro/client-image"],
          },
        },
      },
    },
    // Optimizaciones adicionales
    ssr: {
      noExternal: ["astro-seo"],
    },
  },
  // Asegurar que se use SSG para todas las páginas
  output: "static",
});
