# Vivek Shinde — Portfolio

A Next.js 14 + TypeScript + React Three Fiber portfolio. "The AI Workshop" concept:
a digital engineering lab (glass, brushed metal, blueprint grids, holographic
diagrams) — deliberately not a space/galaxy theme.

## Stack

- Next.js 14 (App Router) + TypeScript
- Tailwind CSS
- Three.js + @react-three/fiber + @react-three/drei (procedural geometry only —
  no external 3D model files)
- Framer Motion for scroll/entrance animation

## Running locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

```bash
npm run build
npm run start
```

> **Note:** this project was written in an environment without internet access,
> so the exact commands above have not been executed end-to-end here. The code
> has been reviewed carefully for import correctness, client/server boundaries,
> and Next/Three.js compatibility, but please run `npm install && npm run build`
> yourself as a first step and let me know if anything surfaces — it's much
> faster for me to fix a real error message than to guess at one.

## Adding your photo

Your photo is already placed at `public/vivek.jpg` (resized and compressed for
web use). To replace it with a different one later, just overwrite that file
— keep the filename `vivek.jpg`, or update the two `<Image src="/vivek.jpg" />`
references in `components/sections/Hero.tsx` and `components/sections/About.tsx`.

## Adding your resume

Drop your resume PDF into the `public/` folder as `public/resume.pdf`. The
"Resume" button in the nav (`components/Nav.tsx`) already links to `/resume.pdf`
— no code changes needed. No resume file is included, since none was provided.

## Project structure

```
app/                    Next.js App Router entry (layout, page, globals.css)
components/
  Nav.tsx               Floating navigation
  Footer.tsx
  ProjectCard.tsx        Shared project card
  sections/              One file per scroll "scene"
    Hero.tsx, About.tsx, Skills.tsx, Projects.tsx,
    NexusPipeline.tsx, AgriGuard.tsx, BuildLog.tsx, Contact.tsx
  3d/                     Procedural Three.js scenes (client-only, dynamically imported)
    HeroScene.tsx, PipelineScene.tsx, FieldScene.tsx, ParticleField.tsx
lib/data/                 Content as data (projects, skills, hackathons) — edit here, not in components
hooks/useReducedMotion.ts
public/vivek.jpg
```

## Content — what's real vs. scoped

Everything in `lib/data/` reflects only what you provided: 10 projects, your
actual skill list, and Smart India Hackathon / NASA Space Apps / Hacktimus-Fynd
as challenges with no invented ranks or awards. No fake metrics, company
names, or project links were added — where you didn't give a GitHub link for
a project, the card says "Source not linked" instead of guessing one.

**Two projects get full cinematic 3D scenes**, as your brief called out as the
biggest visual moments:
- **NexusAI** — an animated RAG pipeline (document → chunks → embeddings →
  vector store → retrieval → LLM → answer), staged by scroll position.
- **AgriGuard AI** — a 3D crop field with a scanning drone, staged through
  DETECT → ASSESS → PREDICT → ADVISE as you scroll.

The other 8 projects use clean technical cards (in `components/ProjectCard.tsx`)
rather than 8 additional full WebGL scenes. Rendering that many simultaneous
3D canvases would hurt performance, especially on mobile — which conflicts
with the brief's own performance requirements. The Skills "toolbox" is built
the same way: an interactive technical grid with hover-revealed notes, on a
blueprint-grid backdrop, rather than a literal 3D table — same reasoning.
If you'd like any of the other 8 projects upgraded to a dedicated 3D scene
later, the two existing ones (`components/3d/PipelineScene.tsx` and
`components/3d/FieldScene.tsx`) are templates to copy from.

## Performance & accessibility

- All 3D scenes are dynamically imported with `ssr: false` and only mount
  client-side.
- Geometry is procedural (`torusGeometry`, `icosahedronGeometry`,
  `coneGeometry`, `InstancedMesh`, `Points`, `Line`) — no external `.glb`/`.gltf`
  model files.
- `prefers-reduced-motion` is respected globally in `app/globals.css` (disables
  CSS animation/transition durations) — the 3D canvases still render but skip
  the mouse-parallax easing.
- Keyboard focus is visible (`:focus-visible` in `globals.css`), skill chips
  are real `<button>` elements, and images have alt text.

## Deploying to Vercel

1. Push this project to a GitHub repo.
2. Go to https://vercel.com/new and import the repo.
3. Framework preset: Next.js (auto-detected). No environment variables needed.
4. Deploy. Add `public/resume.pdf` before deploying if you want the Resume
   button to work.

## Known limitation to double check yourself

Because this was built without a live `npm install`, please specifically
verify after installing: `@react-three/fiber` (8.16.8) and `@react-three/drei`
(9.108.4) resolve cleanly against `three@0.160.1` and `react@18.3.1` — these
versions were compatible as of early 2025, but if `npm install` reports a
peer-dependency conflict, bump `@react-three/drei` to the latest 9.x release
compatible with your installed `three` version.


## Update notes

- Corrected and optimized the supplied portrait orientation/crop.
- Added a 3D photo stage with depth, halo, holographic labels and hover tilt.
- Expanded descriptions for the portfolio's non-featured projects.
- Added LinkedIn: https://www.linkedin.com/in/vivekshinde13/
- Enhanced the hero Three.js scene with a rotating core, orbit rings, connection lines, floating nodes, data beams and sparkles.
