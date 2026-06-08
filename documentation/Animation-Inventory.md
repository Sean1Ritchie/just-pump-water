# Animation Inventory

All animations are driven by `scripts/scroll-animations.js` using `IntersectionObserver`. No external animation libraries required.

---

## Scroll-Triggered Animations

Add `data-animate="<name>"` to any element. Optionally add `data-delay="<ms>"` for offset timing.

| Attribute Value | Effect |
|----------------|--------|
| `fade-up` | Fades in + rises 40px |
| `fade-down` | Fades in + drops 40px |
| `fade-left` | Fades in + slides from left 60px |
| `fade-right` | Fades in + slides from right 60px |
| `fade-in` | Simple opacity fade |
| `scale-up` | Fades in + scales from 0.9 |
| `scale-in` | Fades in + scales from 0.95 |
| `slide-up` | Fades in + rises 80px (more dramatic) |
| `clip-reveal` | Clips from right to left (good for dividers/lines) |

**Examples:**
```html
<h2 data-animate="fade-up">Heading</h2>
<p data-animate="fade-up" data-delay="200">Paragraph with 200ms delay</p>
<div class="divider" data-animate="clip-reveal" data-delay="300"></div>
```

---

## Staggered Children

Add `data-stagger="<animation>"` to a parent element to auto-apply animations to all direct children with staggered delays:

```html
<div class="cards-grid" data-stagger="fade-up" data-stagger-delay="80">
  <div class="card">...</div>  <!-- 0ms delay -->
  <div class="card">...</div>  <!-- 80ms delay -->
  <div class="card">...</div>  <!-- 160ms delay -->
</div>
```

---

## Counter Animations

Add `data-counter="<number>"` to any `<span>` or element:

```html
<span data-counter="2000" data-counter-suffix="+" data-counter-duration="2500">0</span>
```

| Attribute | Description | Example |
|-----------|-------------|---------|
| `data-counter` | Target number | `"2000"` |
| `data-counter-suffix` | Appended text | `"+"`, `" Years"` |
| `data-counter-prefix` | Prepended text | `"R"` |
| `data-counter-duration` | Duration in ms | `"2500"` |
| `data-counter-decimals` | Decimal places | `"2"` |

Triggers once when the element is 50% visible. Uses ease-out cubic bezier.

---

## Parallax

Add `data-parallax="<speed>"` to any element (typically background images):

```html
<img src="..." data-parallax="0.2" alt="" />
```

Speed values: `0.1` (subtle) → `0.5` (dramatic). Calculated via `requestAnimationFrame`.

---

## Marquee

```html
<div data-marquee data-marquee-speed="40" data-marquee-dir="left">
  <div data-marquee-inner>
    <!-- Content is cloned automatically -->
  </div>
</div>
```

| Attribute | Default | Description |
|-----------|---------|-------------|
| `data-marquee-speed` | `40` | Pixels per second |
| `data-marquee-dir` | `left` | Direction: `left` or `right` |

---

## Custom CSS Animations

### Scroll indicator pulse
```css
@keyframes scrollPulse {
  0%, 100% { opacity: 0.3; transform: scaleY(1); }
  50%       { opacity: 1;   transform: scaleY(1.2); }
}
```

### Header transition
The sticky header transitions between states using CSS:
- Transparent → `rgba(4,7,15,0.92) + backdrop-filter:blur(20px)` on `.is-scrolled`
- `transform:translateY(-100%)` on `.is-hidden`

### Mobile menu
Slide-in from right: `transform:translateX(100%)` → `translateX(0)` on `.is-open`
Menu items: `opacity:0 + translateX(20px)` → visible with staggered `transitionDelay`

### Category card hover
Image zoom: `transform:scale(1.06)` on hover (700ms cubic-bezier ease)
Label and CTA: `opacity:0 + translateY(8px)` → visible on card hover

---

## Animation Timing Constants

All timing uses CSS Custom Properties from `design-tokens.css`:

| Token | Value | Used for |
|-------|-------|---------|
| `--duration-fast` | `150ms` | Micro-interactions |
| `--duration-base` | `300ms` | Standard transitions |
| `--duration-slow` | `500ms` | Deliberate transitions |
| `--ease-out` | `cubic-bezier(0.16, 1, 0.3, 1)` | All scroll animations |
| `--ease-in-out` | `cubic-bezier(0.4, 0, 0.2, 1)` | Symmetric transitions |

Scroll animations use `700ms` duration with `--ease-out` for a cinematic feel.
