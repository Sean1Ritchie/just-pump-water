# Just Pump Water — Website Code

**Version:** 1.0.0  
**Built:** June 2026  
**Stack:** Vanilla HTML / CSS / JavaScript (no build step required)  
**Shopify-ready:** Modular structure maps directly to Shopify sections/templates

---

## Project Overview

Complete website rebuild for **Just Pump Water (Pty) Ltd** — Cape Town's premier water pump and filtration specialists. Designed with a premium dark aesthetic inspired by world-class motorsport and technology brands, built for performance, accessibility and SEO.

---

## Quick Start

1. Open `index.html` in any modern browser — no build step, no server required for local preview
2. All assets are referenced with relative paths — the folder structure must be preserved
3. For video to load, `../Videos/Home_Page_Hero_Pump_Video.mov` must be in place relative to `Website Code/`

---

## Folder Structure

```
Website Code/
├── index.html                  ← Homepage
├── pages/
│   ├── products.html           ← Full product catalogue
│   ├── pumps.html              ← Water pumps category
│   ├── filtration.html         ← Water filtration category
│   ├── reverse-osmosis.html    ← Reverse osmosis category
│   ├── services.html           ← Services overview
│   ├── industries.html         ← Industries served
│   ├── about.html              ← About Just Pump Water
│   ├── contact.html            ← Contact & quote form
│   └── resources.html          ← FAQs and resources
├── styles/
│   ├── base.css                ← Google Fonts, reset, typography, buttons
│   ├── design-tokens.css       ← All CSS Custom Properties (design tokens)
│   ├── components/
│   │   └── navigation.css      ← Header, nav, footer, mobile menu
│   └── pages/
│       ├── home.css            ← Homepage-specific styles
│       └── products.css        ← Products/catalogue page styles
├── scripts/
│   ├── main.js                 ← App entry, video, WhatsApp, forms, tabs
│   ├── navigation.js           ← Navigation class, custom cursor
│   └── scroll-animations.js    ← Full animation system (IntersectionObserver)
├── assets/
│   ├── images/                 ← Optimised web images (WebP preferred)
│   ├── videos/                 ← Video assets
│   ├── logos/                  ← Brand logos and partner logos
│   └── icons/                  ← SVG icons
├── seo/
│   ├── robots.txt
│   └── sitemap.xml
└── documentation/
    ├── README.md               ← This file
    ├── Development-Guide.md
    ├── Component-Library.md
    ├── Animation-Inventory.md
    ├── Shopify-Migration-Guide.md
    └── Deployment-Instructions.md
```

---

## Design System

The entire visual language lives in `styles/design-tokens.css` as CSS Custom Properties:

| Token | Value | Purpose |
|-------|-------|---------|
| `--color-bg` | `#04070F` | Page background |
| `--color-surface` | `#080E1A` | Card/panel background |
| `--color-brand` | `#0046B8` | JPW navy blue |
| `--color-accent` | `#00AAFF` | Electric water blue (CTA, highlights) |
| `--font-display` | `Barlow Condensed` | Headings, hero text |
| `--font-body` | `Inter` | Body copy, UI text |

---

## Browser Support

- Chrome 90+ ✓
- Firefox 90+ ✓
- Safari 14+ ✓
- Edge 90+ ✓
- Mobile Safari iOS 14+ ✓
- Chrome Android ✓

---

## Key Features

- Custom cursor system (dot + lagging ring) — desktop only
- Full-screen hero video with cinematic overlay
- Scroll-triggered animations via `IntersectionObserver` (no GSAP)
- Animated counter system for stats
- Infinite marquee for partner brands
- Parallax on CTA section background
- Sticky header: transparent → blurred dark on scroll, hides on scroll-down
- Mobile slide-in menu with staggered item reveals
- WhatsApp float button (3s delay)
- Fully responsive (1280, 1024, 768, 480px breakpoints)

---

## Asset Paths (from Website Code root)

| Asset | Path |
|-------|------|
| Hero video | `../Videos/Home_Page_Hero_Pump_Video.mov` |
| Product images | `../Website Images/[filename]` |
| From pages/ | `../../Website Images/[filename]` |

---

## Contact

Just Pump Water (Pty) Ltd  
Brackenfell Industrial Area, Cape Town  
info@justpumpwater.co.za
