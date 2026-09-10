# Emon Bepari — AI Automation Portfolio

Personal portfolio for **Emon Bepari**, an expert **AI Automation Engineer (n8n)**. Interactive 3D homepage, n8n workflow scene, and a professional Inter / Tailwind-inspired UI.

**Repo:** [Emon143Nerd/automation-portfolio](https://github.com/Emon143Nerd/automation-portfolio)

## Stack

- Vite 8, React 19, TypeScript
- Tailwind CSS v4
- React Router
- Three.js via React Three Fiber + Drei
- Inter (Google Fonts)

## Pages

| Route | Purpose |
| --- | --- |
| `/` | Home — 3D hero, n8n graph, how it works, features, selected work |
| `/about` | Background and process |
| `/work` | Case-style engagements |
| `/use-cases` | Automation loops |
| `/insights` | Field notes |
| `/book` | Book a call |

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

The phone number is not shown in the UI. Use the header contact icon for Call, WhatsApp, email, and Facebook.

| | |
| --- | --- |
| WhatsApp | [Chat on WhatsApp](https://wa.me/8801630175225) |
| Email | [emon99284@gmail.com](mailto:emon99284@gmail.com) |
| Facebook | [facebook.com/share/14t48hS34wa](https://www.facebook.com/share/14t48hS34wa/) |

Profile and contact live in `src/data.ts`.

## Layout

- `src/pages/` — routes
- `src/components/HeroScene.tsx` — homepage 3D
- `src/components/N8nScene.tsx` — n8n graph
- `src/components/ContactIcons.tsx` — header contact menu
- `src/index.css` — tokens, Tailwind, layout

## Deploy

Static Vite app. Build with `npm run build` and host `dist/`.
