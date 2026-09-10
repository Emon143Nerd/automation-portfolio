# Salesfixr — AI Automation Portfolio

Interactive agency portfolio for **AI automation for businesses**, with workflows orchestrated in **n8n**. Cream, navy, and coral visual language; 3D hero and an n8n node graph on the homepage. Built to nest into a larger agency site later.

**Repo:** [Emon143Nerd/automation-portfolio](https://github.com/Emon143Nerd/automation-portfolio)

## Stack

- Vite 8, React 19, TypeScript
- React Router
- Three.js via React Three Fiber + Drei

## Pages

| Route | Purpose |
| --- | --- |
| `/` | Home — 3D hero, n8n workflow scene, how it works, features, selected work |
| `/about` | Studio positioning and process |
| `/work` | Case-style engagements |
| `/use-cases` | Automation loops we install |
| `/insights` | Short field notes |
| `/book` | Demo request plus direct contact |

## Run locally

Requires Node.js 20+.

```bash
npm install --legacy-peer-deps
npm run dev
```

App: [http://127.0.0.1:5173/](http://127.0.0.1:5173/)

`--legacy-peer-deps` is needed because React Three Fiber currently expects React below 19.3.

```bash
npm run build
npm run preview
```

## Contact

The phone number is not shown in the UI. Open the contact icon in the header to reach Call, WhatsApp, email, and Facebook. A WhatsApp button stays on the home hero and as a floating action.

| | |
| --- | --- |
| WhatsApp | [Chat on WhatsApp](https://wa.me/8801630175225) |
| Email | [bytestackpro@gmail.com](mailto:bytestackpro@gmail.com), [salesfixr@gmail.com](mailto:salesfixr@gmail.com) |
| Facebook | [facebook.com/share/14t48hS34wa](https://www.facebook.com/share/14t48hS34wa/) |

Copy lives in `src/data.ts`. Icons and the header menu are in `src/components/ContactIcons.tsx`.

## Layout

- `src/pages/` — routes
- `src/components/HeroScene.tsx` — homepage 3D ring and cubes
- `src/components/N8nScene.tsx` — interactive n8n graph
- `src/components/ContactIcons.tsx` — header contact menu and icon links
- `src/index.css` — design tokens and responsive layout

## Deploy

This is a static Vite app. Build with `npm run build` and host the `dist/` folder (GitHub Pages, Netlify, Vercel, or any static host). For GitHub Pages, set Vite `base` in `vite.config.ts` if the site is not served from the domain root.
