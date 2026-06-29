# ✨ Glasscn

> A premium glassmorphic React component library — like [shadcn/ui](https://ui.shadcn.com), but for glass.

[![CI](https://github.com/spideydotjs/glasscn/actions/workflows/ci.yml/badge.svg)](https://github.com/spideydotjs/glasscn/actions/workflows/ci.yml)
[![npm](https://img.shields.io/npm/v/glasscn)](https://www.npmjs.com/package/glasscn)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)

🌐 **Live Preview** → [glasscn.sonusid.in](https://glasscn.sonusid.in)

---

## What is Glasscn?

Glasscn gives you **27+ production-ready glassmorphic UI components** that you copy-paste into your project — no runtime dependency, no black-box package. Every component ships with its own CSS and works with any React setup.

Three glass presets out of the box:

| Preset | Look & Feel |
|:---|:---|
| **Frosted** | Classic satin blur with soft diffusion |
| **Liquid** | Crystal-clear reflections with sharp highlights |
| **Matte** | Heavy frosted overlay with deep saturation |

---

## 🚀 Quick Start

### Install via CLI

```bash
# Initialize glasscn in your project
npx glasscn init

# Add any component
npx glasscn add glass-button
npx glasscn add glass-modal
npx glasscn add glass-card
```

The CLI fetches the component source code directly into your project — you own every line of code. No hidden dependencies.

### What `init` does

- Creates a `glasscn.json` config file
- Downloads core style tokens (`tokens.css`, `animations.css`)
- Sets up the `cn()` utility helper
- Creates a main `glassify.css` entrypoint with all imports wired up

### What `add` does

- Fetches the component's `index.tsx` and `styles.css` from the registry
- Rewrites import paths to match your project structure
- Auto-registers the component's stylesheet in your main CSS

---

## 🧱 Component Catalog

### 📐 Layout
`glass-card` · `glass-panel` · `glass-navbar` · `glass-sidebar` · `glass-drawer`

### ✍️ Forms & Inputs
`glass-button` · `glass-input` · `glass-textarea` · `glass-select` · `glass-checkbox` · `glass-radio` · `glass-toggle` · `glass-slider`

### 💡 Feedback
`glass-modal` · `glass-tooltip` · `glass-toast` · `glass-alert` · `glass-badge` · `glass-progress`

### 🧭 Navigation
`glass-tabs` · `glass-breadcrumb` · `glass-pagination` · `glass-dropdown-menu`

### 📺 Display
`glass-avatar` · `glass-table` · `glass-accordion` · `glass-calendar`

---

## 🖥️ Interactive Playground

Run the playground locally to preview all components with a live split-pane editor:

```bash
git clone https://github.com/spideydotjs/glasscn.git
cd glasscn
npm install
npm run preview
```

Open [localhost:5173](http://localhost:5173) — toggle glass presets, tweak props, copy code snippets, all in one view.

---

## 📦 Project Structure

```
glasscn/
├── components/           # 27 glassmorphic UI components
│   └── glass-button/
│       ├── index.tsx      # React component
│       └── styles.css     # Scoped styles with CSS variables
├── packages/
│   ├── cli/               # The `glasscn` CLI tool
│   └── preview/           # Vite + React interactive playground
├── lib/
│   ├── tokens.css         # Design tokens & CSS variables
│   ├── animations.css     # Keyframe animations
│   └── utils.ts           # cn() class merger utility
├── registry.json          # Component manifest for the CLI
└── package.json
```

---

## 🤝 Contributing

Contributions are welcome! To add a new component:

1. Create `components/glass-{name}/index.tsx` with a `glass` prop accepting `'frosted' | 'liquid' | 'matte'`
2. Create `components/glass-{name}/styles.css` using the design tokens from `lib/tokens.css`
3. Add the component entry to `registry.json`
4. Add a preview case in `packages/preview/src/App.tsx`

---

## 👤 Author

Built by **firojsiddiquie** · [firojsiddiquie.dev@gmail.com](mailto:firojsiddiquie.dev@gmail.com)

---

## 📄 License

MIT © firojsiddiquie
