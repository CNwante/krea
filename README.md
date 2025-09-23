# Krea

A **Next.js 15 + TypeScript + Tailwind CSS** starter template with **dark/light mode**, **Framer Motion animations**, and modular components.
This project is built as part of a showcase for the **Cartolinks Solutions LTD - Software Engineering Internship Application**.

---

## ✨ Features

- ⚡ **Next.js 15 (App Router, TypeScript)**
- 🎨 **Tailwind CSS v4** with dark/light mode (`next-themes`)
- 🖼️ **Reusable UI Components** (Navbar, Hero, Gallery, Footer, etc.)
- 🌀 **Framer Motion Animations**
  - Hero fade-in + slide
  - Staggered card entrance
  - Smooth dark/light toggle transition
- 📱 **Responsive design** (mobile-first)

---

## 🚀 Getting Started

### 1. Clone the repo
```bash
git https://github.com/CNwante/krea.git
cd krea
```
### 2. Install dependencies
First, install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

### 3. Start server
Then, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.


## 🏗️ Project Structure
```bash
.
├── app/
│   ├── layout.tsx       # Root layout
│   ├── page.tsx         # Home page
│   └── globals.css      # Tailwind global styles
├── components/
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── GalleryGrid.tsx
│   ├── Card.tsx
│   ├── Footer.tsx
│   └── ThemeToggle.tsx
└── public/              # Static assets
```
## 🔀 Branching Strategy

I used **feature branches + dev branch** to keep code clean:

- `main` → production-ready branch

- `setup` → environment setup (Tailwind, Framer Motion, next-themes)

- `dev` → merge feature branches here before promoting to main

**Feature branches:**

- `feat/navbar`

- `feat/hero-carousel`

- `feat/features-section` (image generation form / playground)

- `feat/gallery`

- `feat/footer`

## 🛠️ Tech Stack

- `Next.js 15`

- `TypeScript`

- `Tailwind CSS`

- `Framer Motion`

- `next-themes`

## 📜 License

MIT License © 2025
