---
title: "Getting Started with glasscn in Next.js"
date: "2026-06-29"
excerpt: "Learn how to configure glasscn inside your Next.js project to build beautiful glassmorphic layouts with vanilla CSS."
author: "Firoj Siddiquie"
tags: ["Next.js", "glasscn", "Tailwind", "CSS"]
---

# Getting Started with glasscn in Next.js

Glassmorphism is a popular design trend that mimics the look of frosted glass. In this blog post, we'll walk you through how to initialize `glasscn` in a Next.js application.

## 🛠️ Step 1: Install glasscn CLI

Run the initialization command at the root of your project:

```bash
npx glasscn init
```

This will download `tokens.css`, `animations.css` and create the configuration files.

## 🧱 Step 2: Add Components

Once initialized, download components with the CLI:

```bash
npx glasscn add glass-button
npx glasscn add glass-card
```

## 🚀 Usage in React

Import the components and use them directly in your pages:

```tsx
import { GlassButton } from '@/components/glassify/glass-button';

export default function Home() {
  return <GlassButton glass="liquid">Click Me</GlassButton>;
}
```
