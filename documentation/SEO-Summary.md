# SEO-Summary

Complete SEO implementation reference for the Just Pump Water website. Covers keyword strategy, on-page SEO, technical SEO, schema markup, and sitemap structure.

---

## Keyword Strategy

### Primary Keywords

| Keyword | Monthly Search Intent | Target Page |
|---------|----------------------|-------------|
| water pumps Cape Town | Commercial | `index.html` |
| water pump installation Cape Town | Commercial | `pages/services.html` |
| borehole pump Cape Town | Commercial | `pages/pumps.html`, `pages/services.html` |
| water filtration Cape Town | Commercial | `pages/filtration.html` |
| submersible pump Cape Town | Commercial | `pages/pumps.html` |
| reverse osmosis Cape Town | Commercial | `pages/reverse-osmosis.html` |
| pump repair Cape Town | Commercial | `pages/services.html` |
| centrifugal pump Cape Town | Commercial | `pages/pumps.html` |

### Secondary Keywords

| Keyword | Target Page |
|---------|-------------|
| iron removal filter Cape Town | `pages/filtration.html` |
| water softener Cape Town | `pages/filtration.html` |
| borehole solutions Western Cape | `pages/services.html` |
| just pump water | `index.html` (branded) |
| water pump supplier Brackenfell | `index.html` |
| water pumps Western Cape | `index.html` |
| pool pump Cape Town | `pages/pumps.html` |
| gear pump Cape Town | `pages/pumps.html` |
| pressure booster Cape Town | `pages/pumps.html` |
| 75 GPD reverse osmosis system | `pages/reverse-osmosis.html` |
| water pump service Cape Town | `pages/services.html` |

### Long-tail Keywords

- "what pump do I need for my borehole" → `pages/resources.html`
- "orange water from borehole Cape Town" → `pages/resources.html`
- "how often to service water pump" → `pages/resources.html`
- "difference between filtration and reverse osmosis" → `pages/resources.html`
- "water pump installation Cape Town residential" → `pages/services.html`

---

## Page-by-Page SEO

### Homepage — `index.html`

| Element | Value |
|---------|-------|
| `<title>` | Water Pumps & Filtration Cape Town \| Just Pump Water |
| `<meta name="description">` | Cape Town's leading water pump and filtration specialists. Supply, install and service water pumps, boreholes and filtration systems across the Western Cape. 20+ years experience. |
| `<link rel="canonical">` | `https://justpumpwater.co.za/` |
| H1 | PRECISION WATER SOLUTIONS (hero headline) |
| Primary keyword in H1 | No — by design (brand-first hero). Compensated by H2s and body text below. |
| Schema | LocalBusiness (see Schema Markup section) |

**On-page content signals:**
- Stats section reinforces authority: "2000+ Products", "20+ Years", "27 Brands", "10 Categories"
- Category grid surfaces three product families: Water Pumps, Borehole & Irrigation, Filtration & RO
- Featured products section creates internal linking depth
- Partner marquee reinforces brand credibility

---

### Products — `pages/products.html`

| Element | Value |
|---------|-------|
| `<title>` | Water Pumps & Filtration Products Cape Town \| Just Pump Water |
| `<meta name="description">` | Browse our full range of water pumps, filtration systems and reverse osmosis units. Centrifugal, submersible, gear and booster pumps. Cape Town's largest water pump catalogue. |
| `<link rel="canonical">` | `https://justpumpwater.co.za/pages/products` |
| H1 | Our Products |

---

### Pumps — `pages/pumps.html`

| Element | Value |
|---------|-------|
| `<title>` | Water Pumps Cape Town — Centrifugal, Submersible & Borehole Pumps |
| `<meta name="description">` | High-performance water pumps in Cape Town. Centrifugal, submersible borehole, gear and pool pumps. Supply, install and service by Just Pump Water. |
| `<link rel="canonical">` | `https://justpumpwater.co.za/pages/pumps` |
| H1 | Water Pumps |

**Keyword targeting:** "water pumps Cape Town", "submersible pump Cape Town", "centrifugal pump Cape Town", "borehole pump Cape Town"

---

### Filtration — `pages/filtration.html`

| Element | Value |
|---------|-------|
| `<title>` | Water Filtration Cape Town — Iron Removal, Sediment & Carbon Filters |
| `<meta name="description">` | Water filtration systems for Cape Town homes and businesses. Iron removal, sediment filters, activated carbon, and water softeners. Supply, install and service by Just Pump Water. |
| `<link rel="canonical">` | `https://justpumpwater.co.za/pages/filtration` |
| H1 | Water Filtration |

**Keyword targeting:** "water filtration Cape Town", "iron removal filter Cape Town", "water softener Cape Town", "sediment filter Cape Town"

---

### Reverse Osmosis — `pages/reverse-osmosis.html`

| Element | Value |
|---------|-------|
| `<title>` | Reverse Osmosis Systems Cape Town \| Just Pump Water |
| `<meta name="description">` | Reverse osmosis water purification systems for drinking water in Cape Town. RO removes up to 99% of dissolved solids. Supply and installation by Just Pump Water. |
| `<link rel="canonical">` | `https://justpumpwater.co.za/pages/reverse-osmosis` |
| H1 | Reverse Osmosis |

**Keyword targeting:** "reverse osmosis Cape Town", "RO system Cape Town", "drinking water purification Cape Town"

---

### Services — `pages/services.html`

| Element | Value |
|---------|-------|
| `<title>` | Services \| Just Pump Water — Pump Installation, Repair & Service Cape Town |
| `<meta name="description">` | Professional pump installation, repair and servicing in Cape Town. Borehole solutions, filtration system installation, technical consultation. 20+ years experience. |
| `<link rel="canonical">` | `https://justpumpwater.co.za/pages/services` |
| H1 | Our Services |

**Keyword targeting:** "pump installation Cape Town", "pump repair Cape Town", "pump service Cape Town", "borehole solutions Cape Town"

**Note:** Service page includes ID anchors (`#installation`, `#repair`, `#borehole`, `#filtration`, `#consultation`) enabling deep-linked structured data in future.

---

### Industries — `pages/industries.html`

| Element | Value |
|---------|-------|
| `<title>` | Industries \| Just Pump Water — Residential, Agriculture, Industrial & More |
| `<meta name="description">` | Just Pump Water serves residential, agricultural, industrial, hospitality, commercial and engineering clients across the Western Cape. |
| `<link rel="canonical">` | `https://justpumpwater.co.za/pages/industries` |
| H1 | Industries We Serve |

---

### About — `pages/about.html`

| Element | Value |
|---------|-------|
| `<title>` | About Just Pump Water — Cape Town's Water Pump Specialists |
| `<meta name="description">` | Just Pump Water (Pty) Ltd — 20+ years supplying and installing water pumps and filtration systems in Cape Town and the Western Cape. Meet our team and values. |
| `<link rel="canonical">` | `https://justpumpwater.co.za/pages/about` |
| H1 | About Just Pump Water |

---

### Contact — `pages/contact.html`

| Element | Value |
|---------|-------|
| `<title>` | Contact Just Pump Water Cape Town — Get a Quote |
| `<meta name="description">` | Get a free quote or technical consultation from Just Pump Water. Based in Brackenfell, Cape Town. Call, email, or WhatsApp our team today. |
| `<link rel="canonical">` | `https://justpumpwater.co.za/pages/contact` |
| H1 | Contact Us |

---

### Resources & FAQs — `pages/resources.html`

| Element | Value |
|---------|-------|
| `<title>` | Resources & FAQs \| Just Pump Water Cape Town |
| `<meta name="description">` | Water pump and filtration resources — FAQs, care guides, how-to articles and product information from Just Pump Water Cape Town. |
| `<link rel="canonical">` | `https://justpumpwater.co.za/pages/resources` |
| H1 | Resources |

**SEO opportunity:** This page is positioned to capture long-tail informational queries. Consider expanding with more FAQ entries and dedicated how-to guides to capture "People Also Ask" features in Google.

---

## Schema Markup

### LocalBusiness Schema (Homepage)

Implemented as JSON-LD in `<head>` of `index.html`. This powers Google Business Panel rich results and maps integration.

```json
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Just Pump Water (Pty) Ltd",
  "description": "Cape Town's premier water pump and filtration specialists...",
  "url": "https://justpumpwater.co.za",
  "telephone": "+27210000000",
  "email": "info@justpumpwater.co.za",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Brackenfell",
    "addressLocality": "Cape Town",
    "addressRegion": "Western Cape",
    "postalCode": "7560",
    "addressCountry": "ZA"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": -33.869,
    "longitude": 18.6996
  },
  "openingHoursSpecification": [...],
  "sameAs": [...],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Water Pumps & Filtration Products",
    "itemListElement": [...]
  }
}
```

**⚠️ Action required before launch:** Replace all placeholder values:
- `telephone`: Replace `+27210000000` with real number
- `email`: Replace `info@justpumpwater.co.za` with real email
- `streetAddress`: Replace `"Brackenfell"` with full street address
- `postalCode`: Verify `"7560"` is correct for the actual address
- `geo`: Update latitude/longitude to exact business location
- `openingHoursSpecification`: Update with real trading hours
- `sameAs`: Add real social media profile URLs

---

### Recommended Additional Schema (not yet implemented)

**Product schema** — add to each product page for rich results in Google Shopping:
```json
{
  "@type": "Product",
  "name": "JA100N Centrifugal Self-priming Jet Pump",
  "description": "...",
  "brand": { "@type": "Brand", "name": "Grundfos" },
  "offers": { "@type": "Offer", "availability": "https://schema.org/InStock" }
}
```

**FAQPage schema** — add to `pages/resources.html` for FAQ rich results:
```json
{
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What pump do I need for my borehole?",
      "acceptedAnswer": { "@type": "Answer", "text": "..." }
    }
  ]
}
```

**BreadcrumbList schema** — add to all inner pages:
```json
{
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://justpumpwater.co.za/" },
    { "@type": "ListItem", "position": 2, "name": "Products", "item": "https://justpumpwater.co.za/pages/products" }
  ]
}
```

---

## Technical SEO

### Sitemap

**Location:** `Website Code/seo/sitemap.xml`

**Before deployment:** Copy to web root so it is accessible at `https://justpumpwater.co.za/sitemap.xml`, then verify submission via Google Search Console.

| URL | Priority | Change Frequency |
|-----|----------|-----------------|
| `https://justpumpwater.co.za/` | 1.0 | weekly |
| `https://justpumpwater.co.za/pages/products` | 0.9 | weekly |
| `https://justpumpwater.co.za/pages/pumps` | 0.85 | weekly |
| `https://justpumpwater.co.za/pages/filtration` | 0.85 | weekly |
| `https://justpumpwater.co.za/pages/reverse-osmosis` | 0.85 | weekly |
| `https://justpumpwater.co.za/pages/services` | 0.8 | monthly |
| `https://justpumpwater.co.za/pages/about` | 0.7 | monthly |
| `https://justpumpwater.co.za/pages/contact` | 0.8 | monthly |
| `https://justpumpwater.co.za/pages/industries` | 0.75 | monthly |
| `https://justpumpwater.co.za/pages/resources` | 0.7 | monthly |

### Robots.txt

**Location:** `Website Code/seo/robots.txt`

**Before deployment:** Copy to web root so it is accessible at `https://justpumpwater.co.za/robots.txt`.

Current contents allow all crawlers and reference the sitemap:
```
User-agent: *
Allow: /
Sitemap: https://justpumpwater.co.za/sitemap.xml
```

### Canonical Tags

Every page includes a `<link rel="canonical">` pointing to its canonical URL using the `justpumpwater.co.za` domain. This prevents duplicate content issues if the site is ever accessed via a www subdomain or a staging URL.

### Breadcrumb Navigation

All inner pages include visual breadcrumb navigation in the page hero (e.g., Home › Products › Water Pumps). These reinforce the site structure for both users and crawlers. Adding BreadcrumbList JSON-LD (see Schema section) will enable breadcrumb rich results in Google.

### Image Alt Text

All product images include descriptive alt text targeting relevant keywords (e.g., `alt="Submersible Borehole Pump Cape Town"`). Background/decorative images use `alt=""` with `aria-hidden="true"` per accessibility and SEO best practice.

### Page Speed Considerations

| Factor | Status |
|--------|--------|
| Images: WebP format | ✅ All 6 `.webp` assets done; 6 JPEG files remain |
| Images: lazy loading | ✅ All non-hero images use `loading="lazy"` |
| CSS: no render-blocking | ✅ CSS in `<head>`, no blocking JS |
| JS: deferred | ✅ All scripts use `type="module"` (automatically deferred) |
| Video: autoplay | ✅ Muted + loop, loads natively — no render blocking |
| Fonts: preconnect | ✅ Google Fonts preconnect in `base.css` |

**Remaining actions:**
- Convert remaining 6 JPEG images to WebP (see Asset-Inventory.md)
- Convert hero video from `.mov` to H.264 MP4
- Minify CSS and JS for production (optional — see Deployment-Instructions.md)

### Mobile-Friendliness

All pages include `<meta name="viewport" content="width=device-width, initial-scale=1.0">`. The design is fully responsive with breakpoints at 1280px, 1024px, 768px, and 480px. Google's mobile-first indexing will index the mobile layout.

---

## Google Business Profile

The LocalBusiness schema on the homepage works alongside the Google Business Profile (GBP). Ensure the following match between the website and GBP:

- Business name: exactly `Just Pump Water (Pty) Ltd`
- Phone number format: `+27 21 XXX XXXX`
- Address: identical spelling and format
- Website URL: `https://justpumpwater.co.za`
- Business categories: Water Pump Supplier, Water Treatment Supplier, Plumbing Supply Store

---

## Launch SEO Checklist

- [ ] Replace all placeholder contact details (phone, email, address) across all pages
- [ ] Update LocalBusiness schema with real data
- [ ] Copy `sitemap.xml` and `robots.txt` to web root
- [ ] Submit sitemap to Google Search Console
- [ ] Submit sitemap to Bing Webmaster Tools
- [ ] Set up Google Search Console property for `justpumpwater.co.za`
- [ ] Verify Google Business Profile is claimed and matches website data
- [ ] Convert JPEG images to WebP
- [ ] Convert hero video to H.264 MP4
- [ ] Add FAQPage schema to `pages/resources.html`
- [ ] Add BreadcrumbList schema to all inner pages
- [ ] Test structured data with Google Rich Results Test
- [ ] Check Core Web Vitals in PageSpeed Insights after deployment
- [ ] Set up 301 redirects from `www.justpumpwater.co.za` → `justpumpwater.co.za` (or reverse)
