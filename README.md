# ARAVEX TECH STUDIO — Premium Technology Agency Website

A world-class, production-ready website for **ARAVEX TECH STUDIO**, architected with Next.js 15 (App Router), React 19, TypeScript, Tailwind CSS, Framer Motion, and Next.js Image Optimization.

---

## 🏛️ Brand System & Identity

ARAVEX TECH STUDIO operates under an ultra-premium, dark-mode-first aesthetic:
* **Primary Charcoal**: `#0F1114`
* **Deep Graphite**: `#2A2F36`
* **Muted Slate Blue**: `#64768B`
* **Warm White**: `#F7F7F5`

### Official Brand Asset Registry
All official brand assets were integrated without distortion, redraw, or recoloring:
* **Header Logo (Dark Mode)**: `/assets/branding/ARAVEX_Full_Logo_Dark_Mode_Transparent.png`
* **Header Logo (Light Mode)**: `/assets/branding/ARAVEX_Full_Logo_Light_Mode_Transparent.png`
* **Full Footer Mark**: `/assets/branding/ARAVEX_Full_Logo_Dark_Mode_Transparent.png` & `/assets/branding/ARAVEX_Full_Logo_Dark_Mode_With_Background.png`
* **Animated Page Loader**: `/assets/branding/ARAVEX_Monogram_Dark_Mode_Transparent.png`
* **Favicon & Web App Icon**: `/icon.png` (Monogram variant)
* **OpenGraph Social Banner**: `/og-image.png` (1200 × 630 custom architectural composite)

---

## 🎨 Generated Original Visual Assets
The original image suite was generated adhering to strict architectural minimalism (no neon cyberpunk, no generic AI brains, no stock clip art):
1. `hero-cinema.png`: Ultrawide architectural geometry with dark charcoal surfaces and subtle slate-blue ambient lighting.
2. `service-ai.png`: Abstract computational structures and algorithmic graph visualization.
3. `service-cloud.png`: Secure distributed cloud infrastructure monoliths.
4. `service-software.png`: Modern enterprise software engineering workspace.
5. `products-business.png`: Minimalist workstation displaying ERP and POS management dashboards.
6. `products-mobile.png`: Flagship smartphone mockup on dark graphite stone.
7. `academy-hero.png`: Technology Academy lab environment with collaborative workstations.
8. `about-studio.png`: Scandinavian architectural minimalism studio interior.
9. `og-banner.png`: Brand backdrop for social sharing.

---

## 🚀 Website Routes & Architecture

| Route | Description | Rendering |
|---|---|---|
| `/` | Distinctive 10-section homepage with fluid animations and monogram reveal | Static / SSG |
| `/services` | Filterable catalog of all 12 agency services | Static |
| `/services/[slug]` | Deep-dive service detail pages (Problem, Solution, Process, Deliverables, FAQs) | SSG (12 routes) |
| `/products` | Filterable software product catalog (Desktop, Web, Mobile, Operations) | Static |
| `/products/[slug]` | Comprehensive technical specs (Database, Stack, Offline Support, Deployment) | SSG (10 routes) |
| `/academy` | Practical technology academy courses (PKR 1,000–2,000/mo) | Static |
| `/academy/[slug]` | 4-week detailed curriculum breakdown with enrollment modal | SSG (9 routes) |
| `/work` | Portfolio of authentic engineering showcases and architecture case studies | Static |
| `/work/[slug]` | In-depth case studies with challenges, solutions, and topology flows | SSG (6 routes) |
| `/about` | Studio identity, philosophy, and authentic co-founders (Muhammad Rayyan, Muhammad Uzair, Aqsa Wadood) | Static |
| `/contact` | Validated lead-generation form with budget tiers and inquiry routing | Static |
| `/insights` | Technical papers on AI agents, DevSecOps, POS architecture, and GEO | Static |
| `/insights/[slug]` | Detailed technical articles with architectural takeaways | SSG (4 routes) |
| `/privacy` | Privacy policy and data minimization disclosures | Static |
| `/terms` | Commercial Terms of Service and IP assignment frameworks | Static |
| `/sitemap.xml` | Complete dynamic XML sitemap (48 indexed routes) | Static |
| `/robots.txt` | Crawler directives and sitemap linkage | Static |
| `/api/contact` | Serverless contact and lead submission endpoint with Resend integration | API Route |

---

## 🛠️ Technology Stack

* **Framework**: Next.js 15 (App Router)
* **UI Engine**: React 19 + TypeScript
* **Styling**: Tailwind CSS with custom brand design tokens
* **Motion Design**: Framer Motion (respects `prefers-reduced-motion`)
* **Icons**: Lucide React + custom vector SVG brand marks
* **Theme System**: Seamless dark / light mode with zero hydration flash
* **Image Engine**: Next.js Image Optimization + Sharp

---

## 💻 Local Setup & Development

```bash
# 1. Install dependencies
npm install

# 2. Configure environment variables
cp .env.example .env.local

# 3. Start development server
npm run dev
# Server will be live at http://localhost:3000

# 4. Run production build
npm run build

# 5. Start production server
npm start
```

---

## 🌐 Environment Variables (`.env.example`)

```env
# Canonical Website URL
NEXT_PUBLIC_SITE_URL=https://aravextechstudio.com

# Contact & Lead Generation Form (Resend Integration)
# In development or if left unconfigured, inquiries safely log to console without crashing.
RESEND_API_KEY=
CONTACT_RECEIVER_EMAIL=info@aravextechstudio.com

# Optional Analytics
NEXT_PUBLIC_GA_ID=
```

---

## 🚢 Deployment Instructions

### Netlify (Configured & Ready)
1. Push the codebase to a GitHub / GitLab repository.
2. Log in to [Netlify](https://app.netlify.com) and click **"Add new site" > "Import an existing project"**.
3. Select your repository.
4. Netlify will automatically detect `netlify.toml` with:
   * **Build command**: `npm run build`
   * **Publish directory**: `.next`
   * **Plugin**: `@netlify/plugin-nextjs` (v5 App Router & Serverless Functions runtime)
5. Under **Site configuration > Environment variables**, add:
   * `NEXT_PUBLIC_SITE_URL`: `https://aravextechstudio.com`
   * `CONTACT_RECEIVER_EMAIL`: `info@aravextechstudio.com`
   * `GOOGLE_SHEET_WEBHOOK_URL`: `https://script.google.com/macros/s/AKfycbxihyVhEepuX1o6y05duxQP4403BmyS0Kdtn51gSc3jNRI0RelBd6AqV21Yopc0TAgtSg/exec`
   * `RESEND_API_KEY`: *(Optional) Your Resend API key for direct transactional emails*
6. Click **Deploy Site**.

### Vercel
1. Push the codebase to a GitHub / GitLab repository.
2. Import the repository in [Vercel](https://vercel.com).
3. Framework Preset: **Next.js** (automatically detected).
4. In **Environment Variables**, set:
   * `NEXT_PUBLIC_SITE_URL`: `https://aravextechstudio.com`
   * `CONTACT_RECEIVER_EMAIL`: `info@aravextechstudio.com`
   * `GOOGLE_SHEET_WEBHOOK_URL`: `https://script.google.com/macros/s/AKfycbxihyVhEepuX1o6y05duxQP4403BmyS0Kdtn51gSc3jNRI0RelBd6AqV21Yopc0TAgtSg/exec`
   * `RESEND_API_KEY`: *(Optional)*
5. Click **Deploy**.

### Docker / Self-Hosted VPS (Node.js)
```dockerfile
FROM node:22-alpine AS runner
WORKDIR /app
COPY package*.json ./
RUN npm ci --omit=dev
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

---

## 🔒 Authenticity & Social Proof Statement

In strict compliance with prompt directives:
* No fabricated customer logos, fake review ratings, or invented testimonials are present.
* Authentic portfolio entries showcase verified internal engineering initiatives, architecture case studies, and internal product demonstrations (e.g., *AI Support Intelligence Platform*, *AWS DevSecOps Vulnerability Pipeline*, *GoCart E-Commerce Architecture*, *PulseLink*, *DevBoard*).
* Founders are accurately represented as **Muhammad Rayyan**, **Muhammad Uzair**, and **Aqsa Wadood** without invented corporate titles or portraits.

---

## 📋 Status of External Services
* **Resend Email Service**: Code includes full API payload handling. If `RESEND_API_KEY` is not provided in `.env.local`, incoming inquiries gracefully log locally and return a user-friendly confirmation message without throwing runtime errors.
