# Component Library

## Button Components

### `.btn--primary`
Accent blue fill button. Used for primary CTAs.
```html
<a href="pages/contact.html" class="btn btn--primary">Get a Quote</a>
<a href="pages/contact.html" class="btn btn--primary btn--lg">Get a Quote</a>
```

### `.btn--ghost`
Transparent button with border. Used for secondary CTAs alongside a primary.
```html
<a href="pages/products.html" class="btn btn--ghost">Explore Products</a>
```

### `.btn--brand`
JPW navy blue fill. Alternative primary for brand-coloured contexts.
```html
<a href="pages/contact.html" class="btn btn--brand">Enquire Now</a>
```

### `.btn-arrow`
Inline arrow link. Used for section-level navigation.
```html
<a href="pages/about.html" class="btn-arrow">Our Story <svg>...</svg></a>
```

---

## Label / Eyebrow

Section eyebrow text. Small-caps uppercase with letter-spacing.
```html
<span class="label">Who We Are</span>
```

---

## Cards

### Service Card
Used in the Services Trio section.
```html
<div class="service-card">
  <div class="service-card-icon"><!-- SVG --></div>
  <h3 class="service-card-title">We Supply</h3>
  <p class="service-card-body">...</p>
  <a href="..." class="btn-arrow">...</a>
</div>
```
Variant: `.service-card--featured` adds accent gradient background.

### Category Card
Full-bleed image card with hover reveal CTA.
```html
<a href="pages/pumps.html" class="category-card">
  <div class="category-card-media"><img src="..." alt="..." /></div>
  <div class="category-card-overlay"></div>
  <div class="category-card-content">
    <span class="category-card-label">Category</span>
    <h3 class="category-card-title">Water Pumps</h3>
    <p class="category-card-desc">...</p>
    <span class="category-card-cta">Explore <svg>...</svg></span>
  </div>
</a>
```

### Product Card (compact — homepage grid)
4-column product card for homepage featured products.
```html
<div class="product-card">
  <a href="..." class="product-card-media-link">
    <div class="product-card-media"><img ... /></div>
    <span class="product-card-badge">Pumps</span>
  </a>
  <div class="product-card-body">
    <h4 class="product-card-name">Product Name</h4>
    <div class="product-card-price-row">
      <span class="product-card-price">R3,067.05</span>
      <a href="..." class="product-card-cta">Enquire</a>
    </div>
  </div>
</div>
```

### Product Full Card (catalogue pages)
3-column product card for product/category pages.
```html
<div class="product-full-card">
  <div class="product-full-media"><img ... /></div>
  <div class="product-full-body">
    <span class="product-full-badge">Badge</span>
    <h3>Product Name</h3>
    <p>Description...</p>
    <div class="product-full-price">R2,392.00</div>
    <a href="..." class="btn btn--primary">Enquire Now</a>
  </div>
</div>
```

### Testimonial Card
```html
<div class="testimonial-card">
  <div class="testimonial-stars">★★★★★</div>
  <blockquote class="testimonial-quote">...</blockquote>
  <div class="testimonial-author">
    <div class="testimonial-author-name">Name</div>
    <div class="testimonial-author-location">Location</div>
  </div>
</div>
```

---

## Navigation Components

### Site Header
```html
<header class="site-header" data-header data-nav>
  <!-- Becomes .is-scrolled after 80px scroll -->
  <!-- Becomes .is-hidden on scroll-down, removed on scroll-up -->
</header>
```

### Dropdown
```html
<li class="nav-item" data-dropdown>
  <a href="..." class="nav-link" data-dropdown-trigger>
    Products <svg>chevron</svg>
  </a>
  <div class="dropdown-panel" data-dropdown-panel>
    <a href="..." class="dropdown-item">...</a>
  </div>
</li>
```
Add `.is-wide` to dropdown-panel for 2-column grid layout.

---

## Form Components

```html
<form class="contact-form" data-form>
  <div class="form-group">
    <label class="form-label" for="input-id">Label *</label>
    <input type="text" id="input-id" class="form-input" required />
  </div>
  <div class="form-group">
    <label class="form-label">Select</label>
    <select class="form-select">
      <option value="" disabled selected>Choose...</option>
    </select>
  </div>
  <div class="form-group">
    <label class="form-label">Textarea</label>
    <textarea class="form-textarea" rows="5"></textarea>
  </div>
  <button type="submit" class="btn btn--primary" data-original-text="Send">Send</button>
</form>
```

On submit: button adds `.is-loading`, then `.is-success` after completion.

---

## Layout Helpers

```html
<div class="container">...</div>           <!-- Max 1280px centred -->
<div class="container container--wide">...</div>  <!-- Max 1440px -->

<section class="section">...</section>              <!-- Default padding -->
<section class="section section--dark">...</section>  <!-- --color-bg bg -->
<section class="section section--surface">...</section>  <!-- --color-surface bg -->

<div class="grid-2">...</div>    <!-- 2-col responsive grid -->
<div class="grid-3">...</div>    <!-- 3-col responsive grid -->
<div class="grid-4">...</div>    <!-- 4-col responsive grid -->
```

---

## Custom Cursor

Auto-initialised by `navigation.js` on desktop (> 768px). Requires:
```html
<div class="cursor-dot" aria-hidden="true"></div>
<div class="cursor-ring" aria-hidden="true"></div>
```
Hover state (ring enlarges) fires automatically on all `a` and `button` elements.
Add `data-cursor-hover` to any other element to trigger hover state.

---

## WhatsApp Float Button

```html
<a href="https://wa.me/27210000000?text=..." class="whatsapp-float" data-whatsapp
   target="_blank" rel="noopener" aria-label="Chat on WhatsApp">
  <!-- WhatsApp SVG icon -->
</a>
```
Becomes visible after 3-second delay via `main.js`. Requires `.is-visible` class.

---

## Partner Marquee

```html
<div class="partners-marquee" data-marquee>
  <div class="partners-marquee-inner" data-marquee-inner>
    <div class="partner-item">GRUNDFOS</div>
    <!-- ... more items ... -->
  </div>
</div>
```
Animated by `MarqueeSystem` class in `scroll-animations.js`. Content is auto-cloned for seamless loop.
