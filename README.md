# BLS Servicios Audiovisuales

Website for BLS Servicios Audiovisuales, an audio, lighting, and video production company in Buenos Aires. Live at [blsnet.com.ar](https://blsnet.com.ar).

## Approach

**One dependency.** The project has `astro` and nothing else — no CSS framework, no component library, no animation package. Styles and behaviour are written directly, which keeps the shipped page small and keeps the project off upgrade treadmills it does not need.

**Static output.** Every page is rendered at build time. The result is a set of files an ordinary web server can hand out.

## Structure

```
src/components/   Hero, Services, Portfolio, Clients,
                  AboutUs, EducationalResources, Contact
src/layouts/      Layout.astro — head, footer, global styles
src/pages/        index.astro, 404.astro, _recursos/
src/data/         educationalResources.js
public/           Client logos, portfolio imagery, PDFs, .htaccess
```

### The educational resources section is deliberately off

`src/pages/_recursos/` is prefixed with an underscore, so Astro excludes it from routing — the section builds no pages and is unreachable. That is intentional, not an oversight: the content stays in the repository so it can be restored by renaming the directory back to `recursos`.

A production build emits two pages. If you ever see more, the section came back on.

## Getting started

```bash
npm install
npm run dev       # development server
npm run build     # production build into dist/
npm run preview   # serve the production build
```

## Deployment

This site is **not** deployed from a Git push. It runs on Apache shared hosting, so publishing means building locally and uploading the contents of `dist/`.

```bash
npm run build
# then upload dist/ over FTP or through the hosting panel
```

`public/.htaccess` is copied into `dist/` by the build and has to go up with everything else — the server rules live there, not in a platform config file.

Because the deploy is manual, **a merged commit is not a published change.** Nothing reaches visitors until someone uploads a build.

---

Built by [MateCode](https://matecode.dev) — websites and custom software.
