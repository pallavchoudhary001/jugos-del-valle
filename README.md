# Jugos Del Valle - Static SPA

A high-fidelity static Vanilla JavaScript single-page application (SPA) for the Jugos Del Valle / Santa Clara site, built with Vite for local development and modern ES modules for componentized client-side rendering.

## Description

This repository contains a modular, asset-driven static SPA implemented with plain JavaScript (ES modules), HTML and CSS. The app uses a simple hash-based router, lazy-loads some route components, and is intended to be served during development using Vite.

## Key features

- Vite-powered development server (fast local reloads)
- Modular ES module components under `components/` for a clear separation of UI pieces
- Simple client-side hash router implemented in `App.js`
- Lazy-loading of route components (dynamic `import()` for some pages)
- Responsive layout using Bootstrap 4 and custom CSS
- Slick Carousel support for sliders and jQuery-based interactions
- Static assets (images, logos) organized under `images/`

## Tech stack

- Vite (dev server, build)
- Vanilla JavaScript (ES modules)
- HTML5 & CSS3
- Bootstrap 4 (via CDN)
- jQuery (via CDN)
- Slick Carousel (via CDN)
- Font Awesome (via CDN)

## Scripts (from `package.json`)

- `npm run dev` — start Vite dev server (default port: 5173)
- `npm run build` — build for production with Vite
- `npm run preview` — locally preview the production build

## Folder structure

```
jugosdelvalle/
├─ App.js
├─ package.json
├─ package-lock.json
├─ metadata.json
├─ index.html
├─ constants.js
├─ oferta_svg_content.txt
├─ components/
│  ├─ Agua.js
│  ├─ Bienestar.js
│  ├─ Brands.js
│  ├─ Cadena.js
│  ├─ Capacitacion.js
│  ├─ Centros.js
│  ├─ Commitment.js
│  ├─ Concesionarios.js
│  ├─ Contact.js
│  ├─ Contacto.js
│  ├─ Cultura.js
│  ├─ Directorio.js
│  ├─ Diversidad.js
│  ├─ Footer.js
│  ├─ Header.js
│  ├─ Hero.js
│  ├─ History.js
│  ├─ Marcas.js
│  ├─ OfertaValor.js
│  ├─ OfertaValorSVG.js
│  ├─ ProductosSantaClara.js
│  ├─ Promociones.js
│  ├─ Proveedores.js
│  ├─ Residuos.js
│  ├─ SeParte.js
│  └─ SocialFloating.js
├─ pages/
│  ├─ GenericPage.js
│  └─ Home.js
├─ css/
│  ├─ all.min.css
│  ├─ animate.min.css
│  ├─ bootstrap.min.css
│  ├─ modern.css
│  ├─ slick-theme.css
│  ├─ slick.css
│  └─ style.css
├─ js/
│  └─ slick.min.js
├─ images/
│  ├─ (many image assets and subfolders)
│  └─ ...
└─ node_modules/
```

## How to run locally

1. Clone the repository (or ensure the project is on your machine).

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

Vite will start a dev server and — by default — serve the app at:

```
http://localhost:5173/
```

Notes:
- The project uses CDN-hosted copies of Bootstrap, jQuery, Slick and Font Awesome referenced in `index.html`.
- If you need the dev server to be reachable on your LAN, run Vite with `--host` or set `server.host` in a `vite.config.js`.

## Build & Preview

Build the project for production:

```bash
npm run build
```

Preview the built production output locally:

```bash
npm run preview
```

## GitHub repository

If you plan to publish this project on GitHub, create a repository and push the code:

```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin <your-repo-url>
git push -u origin main
```

Replace `<your-repo-url>` with your repository HTTPS/SSH URL.

## Author

- Project: Jugos Del Valle - Static SPA
- Origin: Converted static SPA assets and modular JS components

If you'd like, I can also:

- Add a minimal `vite.config.js` with `server.host` for LAN access.
- Add a basic `README` badges or deploy instructions for GitHub Pages / static hosts.
