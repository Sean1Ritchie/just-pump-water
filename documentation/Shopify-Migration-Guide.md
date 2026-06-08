# Shopify Migration Guide

## Overview

This website is architected for direct migration to Shopify. The vanilla HTML/CSS/JS approach was chosen specifically to minimise migration friction — no framework compilation, no build pipeline dependencies.

---

## Architecture Mapping

| Current File | Shopify Equivalent |
|-------------|-------------------|
| `index.html` | `templates/index.liquid` |
| `pages/products.html` | `templates/collection.liquid` |
| `pages/pumps.html` | `templates/collection.pumps.liquid` |
| `pages/filtration.html` | `templates/collection.filtration.liquid` |
| `pages/reverse-osmosis.html` | `templates/collection.ro.liquid` |
| `pages/about.html` | `templates/page.about.liquid` |
| `pages/contact.html` | `templates/page.contact.liquid` |
| `pages/services.html` | `templates/page.services.liquid` |
| `pages/industries.html` | `templates/page.industries.liquid` |
| `pages/resources.html` | `templates/page.resources.liquid` |
| `styles/design-tokens.css` | `assets/design-tokens.css` → reference in `layout/theme.liquid` |
| `styles/base.css` | `assets/base.css` |
| `scripts/main.js` | `assets/main.js` |
| `scripts/navigation.js` | `assets/navigation.js` |
| `scripts/scroll-animations.js` | `assets/scroll-animations.js` |

---

## Step-by-Step Migration

### 1. Set Up Shopify Theme

1. Create a new Shopify store or use an existing blank theme base
2. Use **Shopify CLI** (`shopify theme dev`) for local development
3. Or work directly in **Shopify Theme Editor** → **Edit code**

### 2. Upload CSS & JS Assets

Upload all files from `styles/` and `scripts/` to the Shopify **Assets** folder:

```
assets/
  design-tokens.css
  base.css
  navigation.css   (from styles/components/)
  home.css         (from styles/pages/)
  products.css     (from styles/pages/)
  main.js
  navigation.js
  scroll-animations.js
```

### 3. Update layout/theme.liquid

Replace hard-coded `<link>` and `<script>` tags with Shopify asset URLs:

```liquid
{{ 'design-tokens.css' | asset_url | stylesheet_tag }}
{{ 'base.css' | asset_url | stylesheet_tag }}
{{ 'navigation.css' | asset_url | stylesheet_tag }}

{{ 'scroll-animations.js' | asset_url | script_tag }}
{{ 'navigation.js' | asset_url | script_tag }}
{{ 'main.js' | asset_url | script_tag }}
```

### 4. Upload Images

Upload all images from `Website Images/` to Shopify **Files** (Settings → Files) or via the theme **Assets** folder. Update all image `src` attributes to use Shopify CDN URLs:

```liquid
<!-- Replace: -->
<img src="../Website Images/Centrifugal_Pumps_Range.jpeg" />

<!-- With: -->
<img src="{{ 'centrifugal-pumps-range.jpeg' | asset_url }}" />
```

**Recommended:** Use Shopify's responsive image rendering:
```liquid
{{ 'centrifugal-pumps-range.jpeg' | image_url: width: 800 | image_tag: loading: 'lazy', alt: 'Centrifugal pumps' }}
```

### 5. Upload Hero Video

Upload `Home_Page_Hero_Pump_Video.mov` to Shopify Files. Update the video source:

```liquid
<source src="{{ 'Home_Page_Hero_Pump_Video.mp4' | asset_url }}" type="video/mp4" />
```

**Note:** Convert `.mov` to `.mp4` (H.264) before uploading — better browser compatibility and smaller file size. Use HandBrake or FFmpeg.

### 6. Convert Navigation to Liquid

Replace the static navigation HTML with Shopify's `linklist` object for dynamic menus:

```liquid
{% for link in linklists.main-menu.links %}
  <li class="nav-item">
    <a href="{{ link.url }}" class="nav-link{% if link.active %} is-active{% endif %}">
      {{ link.title }}
    </a>
    {% if link.links.size > 0 %}
      <div class="dropdown-panel" data-dropdown-panel>
        {% for child_link in link.links %}
          <a href="{{ child_link.url }}" class="dropdown-item">
            <span class="dropdown-item-text">
              <span class="dropdown-item-label">{{ child_link.title }}</span>
            </span>
          </a>
        {% endfor %}
      </div>
    {% endif %}
  </li>
{% endfor %}
```

### 7. Convert Products to Shopify Collections

The product cards on `products.html` become Shopify collection templates:

```liquid
{% for product in collection.products %}
  <div class="product-full-card">
    <div class="product-full-media">
      {{ product.featured_image | image_url: width: 600 | image_tag: loading: 'lazy', alt: product.title }}
    </div>
    <div class="product-full-body">
      <span class="product-full-badge">{{ product.type }}</span>
      <h3>{{ product.title }}</h3>
      <p>{{ product.description | strip_html | truncate: 160 }}</p>
      <div class="product-full-price">{{ product.price | money }}</div>
      <a href="{{ product.url }}" class="btn btn--primary">View Product</a>
    </div>
  </div>
{% endfor %}
```

### 8. Convert Contact Form

Replace the static HTML form with Shopify's native contact form:

```liquid
{% form 'contact' %}
  {{ form.errors | default_errors }}
  <div class="form-group">
    <label for="ContactFormEmail" class="form-label">Email *</label>
    <input type="email" id="ContactFormEmail" name="contact[email]" class="form-input" value="{{ form.email }}" required />
  </div>
  <div class="form-group">
    <label for="ContactFormMessage" class="form-label">Message *</label>
    <textarea id="ContactFormMessage" name="contact[body]" class="form-textarea" rows="5" required></textarea>
  </div>
  <button type="submit" class="btn btn--primary">Send Message</button>
{% endform %}
```

### 9. Sections Architecture

For a fully editable Shopify theme, convert each homepage section into a Shopify section file (`sections/`). This enables the visual theme editor. Example for the hero:

```liquid
<!-- sections/hero-video.liquid -->
<section class="hero" data-hero id="hero">
  <!-- hero content with {{ section.settings.headline }} etc -->
</section>

{% schema %}
{
  "name": "Hero Video",
  "settings": [
    { "type": "text", "id": "headline", "label": "Headline", "default": "PRECISION WATER SOLUTIONS" },
    { "type": "text", "id": "subtext", "label": "Subtext" },
    { "type": "video", "id": "hero_video", "label": "Hero Video" }
  ],
  "presets": [{ "name": "Hero Video" }]
}
{% endschema %}
```

---

## CSS Custom Properties in Shopify

All design tokens in `design-tokens.css` work natively in Shopify — CSS Custom Properties are supported in all Shopify themes. No changes required.

---

## Checklist

- [ ] Convert `.mov` video to `.mp4` H.264
- [ ] Upload all images to Shopify Files
- [ ] Upload all CSS/JS to Assets
- [ ] Update `layout/theme.liquid` with asset tags
- [ ] Convert navigation to use Shopify `linklist`
- [ ] Convert product cards to use Shopify collections Liquid
- [ ] Replace contact form with `{% form 'contact' %}`
- [ ] Set up Shopify collections: Water Pumps, Filtration, Reverse Osmosis
- [ ] Add all products to Shopify admin with correct types and tags
- [ ] Configure sitemap in Shopify SEO settings
- [ ] Set up redirects from old URL structure
- [ ] Test on mobile and desktop
- [ ] Set up Google Analytics 4 and Search Console
