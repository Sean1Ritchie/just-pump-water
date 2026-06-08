# Development Guide

## Architecture Overview

This is a **vanilla HTML/CSS/JavaScript** website — no framework, no build pipeline, no package.json. Files run directly in any browser. This was a deliberate choice to:

1. Allow immediate preview without setup
2. Maximise compatibility and longevity
3. Simplify Shopify migration (no framework to strip out)
4. Keep the codebase accessible to any developer

---

## CSS Architecture

### Loading Order (in `<head>`)

```html
<link rel="stylesheet" href="styles/design-tokens.css" />  <!-- 1. Design tokens -->
<link rel="stylesheet" href="styles/base.css" />            <!-- 2. Reset + globals -->
<link rel="stylesheet" href="styles/components/navigation.css" />  <!-- 3. Shared components -->
<link rel="stylesheet" href="styles/pages/home.css" />      <!-- 4. Page-specific styles -->
```

**Never** alter this loading order — tokens must load before base, base before components.

### Design Token System

All visual decisions are CSS Custom Properties in `design-tokens.css`. **Never hard-code a colour, spacing value, or transition** outside of the tokens file. Always reference tokens:

```css
/* ✓ Correct */
color: var(--color-accent);
padding: var(--space-8);
transition: all var(--duration-base) var(--ease-out);

/* ✗ Wrong */
color: #00AAFF;
padding: 32px;
transition: all 300ms ease;
```

### Responsive Breakpoints

```css
@media (max-width: 1280px) { /* Large tablets, small desktops */ }
@media (max-width: 1024px) { /* Tablets, hide desktop nav */ }
@media (max-width: 768px)  { /* Mobile landscape */ }
@media (max-width: 480px)  { /* Small phones */ }
```

---

## JavaScript Architecture

### Module Pattern

All scripts use `'use strict'` and class-based architecture. Scripts load as ES modules (`type="module"`):

```html
<script src="scripts/scroll-animations.js" type="module"></script>
<script src="scripts/navigation.js" type="module"></script>
<script src="scripts/main.js" type="module"></script>
```

### Boot Sequence (main.js)

```javascript
document.addEventListener('DOMContentLoaded', () => {
  initHeroVideo();       // Ensures video autoplay
  initWhatsApp();        // Delayed reveal (3s)
  initAnchorScroll();    // Smooth scroll with header offset
  initLazyLoad();        // Native loading="lazy" polyfill
  initForms();           // Float labels + submit states
  initTabs();            // Generic tab system
  initAccordion();       // FAQ accordion (FAQ page)
});
```

### Animation System Boot (scroll-animations.js)

```javascript
document.addEventListener('DOMContentLoaded', () => {
  new ScrollAnimator();     // data-animate elements
  new CounterAnimator();    // data-counter elements
  new ParallaxSystem();     // data-parallax elements
  new HorizontalScroller(); // data-hscroll containers
  new MarqueeSystem();      // data-marquee elements
  new StickyHeader();       // data-header sticky behaviour
});
```

---

## Adding New Pages

1. Copy the structure from an existing inner page (e.g., `pages/about.html`)
2. Update `<title>`, `<meta name="description">`, `<link rel="canonical">`
3. Mark the correct nav link with `is-active` class
4. Add breadcrumb navigation
5. Link the correct page CSS in `<head>` (use `products.css` for most inner pages)
6. Add the page to `seo/sitemap.xml`

---

## Adding New Products

Add product cards to the relevant category page (`pages/pumps.html`, `pages/filtration.html`, etc.):

```html
<div class="product-full-card">
  <div class="product-full-media">
    <img src="../../Website Images/Your_Product_Image.webp" alt="Alt text" loading="lazy" />
  </div>
  <div class="product-full-body">
    <span class="product-full-badge">Category Name</span>
    <h3>Product Name</h3>
    <p>Product description...</p>
    <div class="product-full-price">R0,000.00</div>
    <a href="contact.html?product=product-slug" class="btn btn--primary">Enquire Now</a>
  </div>
</div>
```

**Image path note:** From `pages/` subdirectory, product images are at `../../Website Images/` (two levels up).

---

## Naming Conventions

| Type | Convention | Example |
|------|-----------|---------|
| HTML/CSS/JS files | `lowercase-kebab-case` | `scroll-animations.js` |
| CSS class names | `BEM-like kebab-case` | `.product-card-title` |
| HTML components | `PascalCase` (Shopify sections) | `HeroVideo` |
| Image files | `Title_Case_With_Underscores` | `Centrifugal_Pumps_Range.jpeg` |
| Documentation | `Title-Case.md` | `Development-Guide.md` |
| CSS variables | `--category-subcategory-modifier` | `--color-accent-bright` |
| Data attributes | `data-kebab-case` | `data-animate="fade-up"` |

---

## Image Guidelines

- **Format preference:** WebP > JPEG > PNG
- **Max file size:** 300KB for product images, 500KB for hero/full-bleed
- **Minimum resolution:** 800px wide for product cards, 1600px for hero/full-bleed
- **Always include `alt` text** with descriptive content
- **Always use `loading="lazy"`** on images below the fold
- **Aspect ratios used:**
  - Product cards (compact): `4/3`
  - Product cards (full): `16/9`
  - Hero/banner: `16/9` or wider
  - Portrait/about: `4/5`

---

## Accessibility Notes

- All images have descriptive `alt` attributes
- Decorative images use `alt=""` and `aria-hidden="true"`
- Interactive elements have ARIA labels where text isn't visible
- Navigation has `aria-label="Primary navigation"`
- Mobile menu toggle uses `aria-expanded` state
- Colour contrast: all text passes WCAG AA (4.5:1 minimum)
- Focus states: CSS `:focus-visible` styles maintained in base.css
- Skip-to-content link can be added as a future enhancement

---

## Performance Notes

- **Video:** The hero video is the largest single asset. For production, compress to < 10MB (H.264 at CRF 28)
- **Images:** Convert JPEG to WebP for ~30% file size reduction
- **Fonts:** Google Fonts are preconnected (`<link rel="preconnect">`) and loaded asynchronously
- **Scripts:** All scripts use `type="module"` which defers execution automatically
- **Critical CSS:** Design tokens + base CSS are small enough to inline into `<head>` for initial paint performance
- **Lazy loading:** All below-fold images use native `loading="lazy"`
