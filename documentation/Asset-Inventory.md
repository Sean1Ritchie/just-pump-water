# Asset-Inventory

Complete inventory of all media assets used across the Just Pump Water website. Use this document to audit missing assets, plan optimisation, and track what needs to be replaced or added before launch.

---

## Overview

| Category | Count | Notes |
|----------|-------|-------|
| Images (WebP) | 6 | Optimised — preferred format |
| Images (JPEG) | 6 | Some require conversion to WebP |
| Videos | 1 | .mov — requires H.264 MP4 conversion |
| **Missing assets** | **2** | See Missing Assets section below |

---

## Images

### Website Images Folder

All images live at `../Website Images/` relative to `index.html`, or `../../Website Images/` relative to `pages/*.html`.

---

#### `Centrifugal_Pumps_Range.jpeg`

| Property | Value |
|----------|-------|
| Format | JPEG |
| Dimensions | 2732 × 1626 px |
| File size | 436 KB |
| Aspect ratio | ~16:9 landscape |

**Used on:**
- `index.html` — Hero section category card background (Water Pumps)
- `index.html` — Featured products section (×2: JA100N and SEAKOO product cards)
- `pages/products.html` — Hero background; product cards (×2)
- `pages/pumps.html` — Hero background; centrifugal pump product cards (×2)
- `pages/services.html` — Installation service card

**Recommendation:** Convert to WebP. This image is used in the most places across the site and compression savings will be significant given the 2732px width.

---

#### `Submersible_Pumps_Cape_Town.jpeg`

| Property | Value |
|----------|-------|
| Format | JPEG |
| Dimensions | 2732 × 1543 px |
| File size | 716 KB |
| Aspect ratio | ~16:9 landscape |

**Used on:**
- `index.html` — Hero section category card background (Borehole) + Contact CTA parallax background
- `pages/products.html` — Submersible pump product card
- `pages/about.html` — Brand story grid image
- `pages/pumps.html` — Submersible pump product card
- `pages/services.html` — Hero background; borehole service card

**Recommendation:** Convert to WebP. Largest JPEG on the site at 716 KB. High priority for optimisation.

---

#### `Gear_Pumps_Cape_Town.jpeg`

| Property | Value |
|----------|-------|
| Format | JPEG |
| Dimensions | 2732 × 1624 px |
| File size | 648 KB |
| Aspect ratio | ~16:9 landscape |

**Used on:**
- `index.html` — Hero section category card background (Filtration/RO)
- `pages/products.html` — Gear pump product card
- `pages/pumps.html` — Gear pump product card
- `pages/about.html` — Page hero background
- `pages/industries.html` — Page hero background
- `pages/services.html` — Pump repair service card

**Recommendation:** Convert to WebP.

---

#### `Activated_Carbon_Filter_Layers.jpeg`

| Property | Value |
|----------|-------|
| Format | JPEG |
| Dimensions | 2732 × 1792 px |
| File size | 568 KB |
| Aspect ratio | ~3:2 landscape |

**Used on:**
- `index.html` — Featured products section (Activated Carbon Filter card)
- `pages/products.html` — Activated carbon product card
- `pages/filtration.html` — Hero background; product card; infographic section full-width image

**Recommendation:** Convert to WebP.

---

#### `Reverse_Osmosis_System_75GPD.jpeg`

| Property | Value |
|----------|-------|
| Format | JPEG |
| Dimensions | 2732 × 1732 px |
| File size | 380 KB |
| Aspect ratio | ~3:2 landscape |

**Used on:**
- `index.html` — Featured products section (RO System product card)
- `pages/products.html` — RO product card
- `pages/reverse-osmosis.html` — Hero background; product card

**Recommendation:** Convert to WebP.

---

#### `Carbon_Block_Filter_Elements.jpeg`

| Property | Value |
|----------|-------|
| Format | JPEG |
| Dimensions | 2732 × 1197 px |
| File size | 180 KB |
| Aspect ratio | ~21:9 wide landscape |

**Used on:** Currently not referenced in any HTML file.

**Recommendation:** Either use on the filtration or products page, or remove to keep the asset folder clean.

---

#### `Iron_Removal_Filter.webp`

| Property | Value |
|----------|-------|
| Format | WebP ✓ |
| Dimensions | 1024 × 1536 px |
| File size | 124 KB |
| Aspect ratio | 2:3 portrait |

**Used on:**
- `index.html` — Featured products section (Iron Removal Filter product card)
- `pages/products.html` — Iron removal product card
- `pages/filtration.html` — Product card
- `pages/services.html` — Filtration installation service card

---

#### `Sediment_Water_Filters.webp`

| Property | Value |
|----------|-------|
| Format | WebP ✓ |
| Dimensions | 1024 × 1536 px |
| File size | 72 KB |
| Aspect ratio | 2:3 portrait |

**Used on:**
- `index.html` — Featured products section (Sediment Filter product card)
- `pages/products.html` — Sediment filter product card
- `pages/filtration.html` — Product card
- `pages/resources.html` — Page hero background

---

#### `Reverse_Osmosis_Salt_Removal.webp`

| Property | Value |
|----------|-------|
| Format | WebP ✓ |
| Dimensions | 1024 × 1536 px |
| File size | 152 KB |
| Aspect ratio | 2:3 portrait |

**Used on:**
- `index.html` — Featured products section (RO Salt Removal product card)
- `pages/products.html` — RO product card
- `pages/reverse-osmosis.html` — Product card; "How it works" diagram image

---

#### `Water_Softener_How_It_Works.webp`

| Property | Value |
|----------|-------|
| Format | WebP ✓ |
| Dimensions | 1024 × 1536 px |
| File size | 104 KB |
| Aspect ratio | 2:3 portrait |

**Used on:**
- `index.html` — Featured products section (Water Softener product card)
- `pages/products.html` — Water softener product card
- `pages/filtration.html` — Product card

---

#### `Bacteria_Removal_Filtration.webp`

| Property | Value |
|----------|-------|
| Format | WebP ✓ |
| Dimensions | 1024 × 1536 px |
| File size | 104 KB |
| Aspect ratio | 2:3 portrait |

**Used on:** Currently not referenced in any HTML file.

**Recommendation:** Consider using on `pages/filtration.html` or `pages/reverse-osmosis.html` where bacterial removal is discussed.

---

#### `Ozonator_Filter_How_It_Works.webp`

| Property | Value |
|----------|-------|
| Format | WebP ✓ |
| Dimensions | 1024 × 1536 px |
| File size | 104 KB |
| Aspect ratio | 2:3 portrait |

**Used on:** Currently not referenced in any HTML file.

**Recommendation:** Add as a product on the filtration page if JPW stocks ozonators.

---

---

## Missing Assets

The following files are referenced in HTML but do not exist in the `Website Images` folder. **These will cause broken images on the live site and must be added before launch.**

### `Booster_Pump_System.jpeg` ⚠️ MISSING

**Referenced on:**
- `pages/products.html` — Booster pump product card
- `pages/pumps.html` — Booster pump product card
- `pages/services.html` — Technical consultation service card
- `pages/contact.html` — Contact page hero background

**Action required:** Add a booster/pressure pump image to `Website Images/` with filename `Booster_Pump_System.jpeg` (or `.webp`). If using WebP, update all four `src` attributes accordingly.

---

### `Pool_Pump_Cape_Town.jpeg` ⚠️ MISSING

**Referenced on:**
- `pages/products.html` — Pool pump product card
- `pages/pumps.html` — Pool pump product card

**Action required:** Add a pool pump image to `Website Images/` with filename `Pool_Pump_Cape_Town.jpeg` (or `.webp`). If using WebP, update both `src` attributes accordingly.

---

---

## Video

### `Videos/Home_Page_Hero_Pump_Video.mov`

| Property | Value |
|----------|-------|
| Format | QuickTime MOV |
| File size | — (0 bytes in dev environment; production file required) |
| Used on | `index.html` — full-screen hero video background |

**Path in index.html:**
```html
<source src="../Videos/Home_Page_Hero_Pump_Video.mov" type="video/mp4" />
```

**Note on format:** The file is declared as `type="video/mp4"` in the source element, which works in Safari. However, the `.mov` container is not reliably supported in Chrome or Firefox. Before deployment, convert to H.264 MP4 using HandBrake or FFmpeg:

```bash
ffmpeg -i Home_Page_Hero_Pump_Video.mov \
  -vcodec libx264 -crf 23 -preset slow \
  -acodec aac -b:a 128k \
  -movflags +faststart \
  Home_Page_Hero_Pump_Video.mp4
```

Then update `index.html`:
```html
<source src="../Videos/Home_Page_Hero_Pump_Video.mp4" type="video/mp4" />
```

**Recommended:** Also provide a WebM version for additional browser coverage:
```html
<source src="../Videos/Home_Page_Hero_Pump_Video.webm" type="video/webm" />
<source src="../Videos/Home_Page_Hero_Pump_Video.mp4" type="video/mp4" />
```

---

---

## Partner Logos

The homepage partner marquee (`index.html`, Partners section) references 10 partner logo SVGs via `src="images/partners/*.svg"`. This folder and these files are **not yet created**.

**Expected path:** `Website Code/images/partners/`

**Files referenced:**
```
grundfos.svg
ksb.svg
pedrollo.svg
lowara.svg
ebara.svg
calpeda.svg
pentax.svg
caprari.svg
franklin.svg
wilo.svg
```

**Action required:** Create SVG logo files for any partners JPW actually represents. Replace any that don't apply with real partner brands. If partner logos are not available, the marquee section can be removed from `index.html`.

---

---

## Image Optimisation Priority

| Priority | File | Current Size | Est. WebP Size | Saving |
|----------|------|-------------|----------------|--------|
| 🔴 High | `Submersible_Pumps_Cape_Town.jpeg` | 716 KB | ~200 KB | ~72% |
| 🔴 High | `Gear_Pumps_Cape_Town.jpeg` | 648 KB | ~180 KB | ~72% |
| 🔴 High | `Activated_Carbon_Filter_Layers.jpeg` | 568 KB | ~160 KB | ~72% |
| 🟡 Medium | `Centrifugal_Pumps_Range.jpeg` | 436 KB | ~130 KB | ~70% |
| 🟡 Medium | `Reverse_Osmosis_System_75GPD.jpeg` | 380 KB | ~110 KB | ~71% |
| 🟢 Low | `Carbon_Block_Filter_Elements.jpeg` | 180 KB | ~55 KB | ~69% |
| ✅ Done | All `.webp` files | 72–152 KB | Already WebP | — |

**Batch conversion command (requires ImageMagick):**
```bash
cd "Website Images"
for f in *.jpeg *.jpg; do
  convert "$f" -quality 82 "${f%.*}.webp"
done
```

After converting, update all `src` attributes from `.jpeg` to `.webp` and remove the original JPEG files.

---

---

## Asset Path Reference

| File | Path from `index.html` | Path from `pages/*.html` |
|------|------------------------|--------------------------|
| Any image | `../Website Images/filename.ext` | `../../Website Images/filename.ext` |
| Hero video | `../Videos/Home_Page_Hero_Pump_Video.mp4` | `../../Videos/filename.ext` |
| Partner logos | `images/partners/logo.svg` | `../images/partners/logo.svg` |
| CSS | `styles/filename.css` | `../styles/filename.css` |
| JS | `scripts/filename.js` | `../scripts/filename.js` |
