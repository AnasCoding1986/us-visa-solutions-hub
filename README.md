# US Visa Solutions Hub

A modern, highly performant React & TypeScript web application representing the U.S. Visa & Immigration Support services of **M Q Zaman** based in Norcross, Georgia.

---

## 🌟 Project Overview

This website serves as a professional portal for immigration consulting services, including Visit Visas, USCIS Forms handling, NVC cases, and related documents such as passport services and notary public certifications.

It is designed with rich aesthetics, responsive layouts, hardware-accelerated animations, and highly optimized assets to deliver a premium user experience.

---

## 🚀 Key Features & Upgrades

### 1. Visual & Motion Polish (Redesign Updates)
- **Staggered Animations**: Smooth staggered page-load animations for all hero typography and CTAs using Framer Motion (respecting `prefers-reduced-motion` settings).
- **Dynamic SVGs**: "How We Work" process sections feature animated SVG line connectors that draw themselves dynamically from left to right as they enter the viewport.
- **Accordion Enhancements**: FAQs feature rotating chevrons, smooth height-and-opacity transitions, and sliding left accent bars when questions are hovered or opened.
- **Underline Slide-in Navigation**: Navbar links feature sleek, centered hover underlines powered by `scaleX()` CSS transitions.
- **Scroll Reactive Header**: The navigation header dynamically blurs and adds a shadow when scrolled past `50px`, keeping text legible over background elements.

### 2. Media Optimization
- **Corporate Headshot**: Recreated, color-graded, and cropped the professional profile image to fit the layout perfectly.
- **Size Reduction**: Compressed the profile image down to **51.1 KB** (from the original `681 KB` PNG) to maximize load speeds and mobile performance.

### 3. Smart Multi-Platform Deployment
- **Dynamic Routing**: Configured the Router base path dynamically using `import.meta.env.BASE_URL` to support seamless deployments on both **GitHub Pages** (served at `/us-visa-solutions-hub/`) and **Vercel** (served at root `/`).

---

## 🛠️ Technology Stack

- **Framework**: React 18 & Vite
- **Language**: TypeScript
- **Styling**: Tailwind CSS & CSS Custom Properties
- **Motion**: Framer Motion
- **Icons**: Lucide React
- **UI Components**: shadcn/ui (Radix Primitives)

---

## 💻 Local Development

Follow these steps to run the project locally on your machine:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/AnasCoding1986/us-visa-solutions-hub.git
   cd us-visa-solutions-hub
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the local dev server**:
   ```bash
   npm run dev
   ```
   *The project will be live at: [http://localhost:8080/us-visa-solutions-hub/](http://localhost:8080/us-visa-solutions-hub/)*

4. **Build for production**:
   ```bash
   npm run build
   ```

---

## 📦 Deployment

- **Vercel**: Automatically builds and deploys on every push to the `main` branch. Live URL: [https://us-visa-solutions-hub.vercel.app/](https://us-visa-solutions-hub.vercel.app/)
- **GitHub Pages**: Deployable using `npm run deploy` to publish static output folder `dist` onto the `gh-pages` branch.
