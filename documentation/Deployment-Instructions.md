# Deployment Instructions

## Option A: Direct File Hosting (cPanel / Shared Hosting)

This site requires **no build step** — upload the files directly.

### Steps

1. **Prepare files**
   - Confirm all image paths are correct relative to each HTML file
   - Convert `Home_Page_Hero_Pump_Video.mov` to `.mp4` (H.264) if not already done
   - Minify CSS and JS for production (optional but recommended — see below)

2. **Upload via FTP / cPanel File Manager**
   - Upload all contents of `Website Code/` to your public web root (usually `public_html/`)
   - Upload images from `Website Images/` to a folder accessible from the web root
   - Upload video from `Videos/` to its accessible folder
   - Maintain the exact same relative folder structure

3. **Update asset paths**
   - If your server structure differs from the local dev structure, update image/video paths in each HTML file

4. **Set index.html as home page**
   - Most hosts auto-detect `index.html` as the root document — no config needed

5. **Test**
   - Check all pages load
   - Confirm video autoplay works (test on mobile)
   - Verify images all render
   - Test contact form submission

---

## Option B: Netlify (Recommended — Free Tier Available)

1. Log in to [netlify.com](https://netlify.com)
2. Drag and drop the `Website Code/` folder onto the Netlify dashboard
3. Netlify will detect `index.html` and deploy instantly
4. Connect a custom domain in Netlify settings → Domain management

**Netlify advantages:**
- Free SSL certificate (HTTPS)
- Global CDN
- Instant deploys
- Form handling (Netlify Forms can intercept the contact form — add `netlify` attribute to `<form>`)

**For Netlify Forms:**
```html
<form class="contact-form" data-form name="contact" netlify netlify-honeypot="bot-field">
  <input type="hidden" name="form-name" value="contact" />
  <!-- rest of form fields unchanged -->
</form>
```

---

## Option C: Shopify

See `documentation/Shopify-Migration-Guide.md` for full migration instructions.

---

## Pre-Deployment Checklist

### Content
- [ ] Replace placeholder phone `+27 21 000 0000` with real number
- [ ] Replace placeholder email `info@justpumpwater.co.za` with real email
- [ ] Update WhatsApp `wa.me/` URL with real WhatsApp Business number
- [ ] Update Schema.org JSON-LD with real phone, address, coordinates
- [ ] Confirm all product prices are current

### SEO
- [ ] Update `seo/sitemap.xml` with correct final domain
- [ ] Update `seo/robots.txt` Sitemap URL
- [ ] Update all `<link rel="canonical">` tags with real domain
- [ ] Update all `og:url` and `og:image` meta tags
- [ ] Create `assets/images/og-image.jpg` (1200×630px) for social sharing
- [ ] Create `assets/images/hero-poster.jpg` as video fallback

### Technical
- [ ] Convert hero video `.mov` → `.mp4` (H.264, max 10MB for web)
- [ ] Confirm all images are < 300KB (use WebP where possible)
- [ ] Test all pages on Chrome, Firefox, Safari
- [ ] Test contact form submission
- [ ] Test on iPhone and Android
- [ ] Verify HTTPS works (SSL certificate active)

### Performance (Optional Optimisation)
```bash
# Minify CSS
npx csso styles/design-tokens.css --output styles/design-tokens.min.css

# Minify JS
npx terser scripts/main.js -o scripts/main.min.js

# Optimise images (requires imagemin)
npx imagemin "Website Images/*.{jpg,jpeg}" --out-dir="assets/images" --plugin=imagemin-webp
```

---

## DNS Configuration

After deploying to your hosting provider, update DNS at your registrar (where justpumpwater.co.za is registered):

```
Type: A      Host: @     Points to: [your server IP]
Type: CNAME  Host: www   Points to: justpumpwater.co.za
```

Allow 24–48 hours for DNS propagation.

---

## Post-Launch

1. Submit sitemap to Google Search Console: `https://search.google.com/search-console`
2. Verify site in Google Search Console
3. Set up Google Analytics 4 — add GA4 tag to `<head>` of all pages
4. Set up Bing Webmaster Tools
5. Monitor Core Web Vitals in Search Console
6. Check mobile usability report
