# ✨ Glassify

> A premium, developer-focused component library for building modern glassmorphic web user interfaces.

Glassify is a monorepo featuring **27+ glassmorphic UI components** designed with modern CSS backdrop-filters, custom saturation, glow reflection channels, and adaptive border systems. It provides three presets out of the box: **Frosted** (classic satin blur), **Liquid** (crystal clear reflections), and **Matte** (heavy blurred glass overlay).

---

## 🚀 Key Features

- **Fluid Custom CSS Variables**: Built with highly responsive animation tokens and theme variables (`frosted`, `liquid`, `matte`).
- **Interactive Split Playground**: Live code browser & preview renderer that updates usage snippets reactively as you change props.
- **Copy-to-Clipboard Direct Copy**: Copy React/TSX structures, vanilla CSS files, and CLI installation commands with one-click feedback.
- **Tailwind-Free Vanilla Styling**: Style layouts using pre-compiled CSS files, allowing full integration into any styling ecosystem.
- **Command Line Tool (CLI)**: Package setup and component acquisition tool (`init` / `add`).

---

## 🛠️ Getting Started

### 1. Interactive Explorer (Playground)
Run the local playground to test presets, customize properties, and copy component implementations:

```bash
# Install root monorepo dependencies
npm install

# Start the preview server
npm run preview
```

Open `http://localhost:5173` to explore components side-by-side with their implementation.

### 2. Command Line Interface (CLI)
*Note: CLI commands are currently mock structures under active development.*

```bash
# Initialize layout configs
npx @firojsiddiquie/glassify init

# Download specific glass-component code to your local directory
npx @firojsiddiquie/glassify add glass-button
```

---

## 🧱 Component Catalog

Glassify components are organized into 5 primary groups:

| Category | Components Included |
| :--- | :--- |
| **📐 Layout** | `glass-card`, `glass-panel`, `glass-navbar`, `glass-sidebar`, `glass-drawer` |
| **✍️ Forms & Inputs** | `glass-button`, `glass-input`, `glass-textarea`, `glass-select`, `glass-checkbox`, `glass-radio`, `glass-toggle`, `glass-slider` |
| **💡 Feedback** | `glass-modal`, `glass-tooltip`, `glass-toast`, `glass-alert`, `glass-badge`, `glass-progress` |
| **🧭 Navigation** | `glass-tabs`, `glass-breadcrumb`, `glass-pagination`, `glass-dropdown-menu` |
| **📺 Display** | `glass-avatar`, `glass-table`, `glass-accordion`, `glass-calendar` |

---

## 📦 Directory Structure

```
├── components/          # The 27 core UI component directories
│   └── glass-button/
│       ├── index.tsx    # React component logic
│       ├── styles.css   # Custom CSS variables & classes
│       └── registry.json
├── packages/
│   ├── cli/            # Commander CLI tool source code
│   └── preview/        # Vite + React Split-pane component explorer
├── lib/                 # Core layout, animation, and theme tokens
├── registry.json        # Main components configuration manifest
└── package.json
```

---

## 🤝 Contributing
Feel free to open issues or pull requests. When writing new glassmorphic components, ensure to:
1. Create a companion `styles.css` utilizing fluid variables.
2. Define a clean React template.
3. Export properties conforming to `frosted | liquid | matte` presets.
4. Update the root `registry.json` and the `.tsx` glob imports in the preview application.

---

## 👤 Author

Developed and maintained by **firojsiddiquie** ([firojsiddiquie.dev@gmail.com](mailto:firojsiddiquie.dev@gmail.com)).

---

## 📄 License
This project is licensed under the MIT License.

