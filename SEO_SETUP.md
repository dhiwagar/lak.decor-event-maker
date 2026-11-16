# lak.decor & event maker — Complete Local SEO & Google Search Setup Guide

**Domain:** `https://www.lakdecor.com`  
**Brand Name:** `lak.decor & event maker`  
**Service Territory:** Pondicherry, Puducherry, Cuddalore, Villupuram, and Chennai ECR  
**Primary Studio:** 52, SH 49, Ellaitharisu, Ganapathichettikulam, Pondicherry, Tamil Nadu 605014  
**Direct Contact:** +91 95972 65450 / WhatsApp: +91 95972 65450  

---

## 1. Summary of Changes Implemented

### A. Technical Architecture & SPA Pre-rendering
- **Dynamic `<SEO />` Document Head Component (`src/components/common/SEO.tsx`):**
  - Controls document title, meta descriptions, canonical URLs, robots directives, geo tags (`IN-PY`, coordinates `12.0238; 79.8542`), Open Graph properties, and Twitter cards.
  - Automatically mounts and updates Schema.org JSON-LD scripts for each route.
- **Static Multi-Route Pre-rendering (`scripts/prerender.js`):**
  - Generates 28 independent static HTML route files (`dist/<route>/index.html`) on build.
  - Ensures search engines (Googlebot, Bingbot) and social crawlers (WhatsApp, Facebook, Twitter) immediately read page-specific metadata and semantic content before JavaScript executes.
- **Vite Performance & Bundle Splitting (`vite.config.ts`):**
  - Configured intelligent Rollup manual chunking (`vendor-react`, `vendor-motion`, `vendor-lucide`, `vendor-libs`).
  - Reduced main JavaScript bundle from `629 kB` to `~205 kB`, significantly boosting Google Core Web Vitals (LCP, INP, CLS).
  - Added font preconnection and DNS prefetching in `index.html`.

### B. Dedicated Local SEO Landing Routes
Created 5 high-converting, keyword-targeted landing pages with unique content, local venue checklists, and WhatsApp CTAs:
1. `/wedding-decoration-pondicherry` — *Wedding Decorators in Pondicherry | Royal Mandap & Stage Decoration Puducherry*
2. `/birthday-decoration-pondicherry` — *Birthday Decoration in Pondicherry | 1st Birthday & Theme Decorators Puducherry*
3. `/engagement-decoration-pondicherry` — *Engagement Decoration Pondicherry | Ring Ceremony Stage Stylists Puducherry*
4. `/reception-decoration-pondicherry` — *Reception Stage Decoration Pondicherry | Modern Floral Backdrops Puducherry*
5. `/event-decorators-pondicherry` — *Event Decorators in Pondicherry | Full-Service Event Decoration Services Puducherry*

### C. Crawlable Internal Navigation
- Integrated a dedicated **"Popular Celebrations in Pondicherry"** link hub in the website footer (`src/components/layout/Footer.tsx`).
- Connected all local routes to the main navigation and sitemap to ensure full internal page authority distribution.

### D. Schema.org JSON-LD Structured Data (`src/utils/seoSchemas.ts`)
- **`LocalBusiness` / `ProfessionalService` Schema:** Verified business name, address, telephone, opening hours (09:00–21:00), geographic coordinates, verified service area, and service catalog.
- **`Service` Schema:** Detailed specifications for all 10 core event types.
- **`BreadcrumbList` Schema:** Hierarchical breadcrumb navigation for Google Rich Results.
- **`FAQPage` Schema:** Structured frequently asked questions answering common Pondicherry client queries.

### E. Google Search Files
- **`public/robots.txt`:** Allows all search crawlers, references sitemap, and verifies Googlebot access.
- **`public/sitemap.xml`:** Full XML sitemap covering all 28 canonical URLs with priorities and update frequencies.
- **Verification files:** `public/google499fb3e8a1e16a57.html` and matching `<meta name="google-site-verification" ... />` in `index.html`.

---

## 2. How to Verify Domain Ownership in Google Search Console

When deploying your website to `https://www.lakdecor.com`:

1. Open [Google Search Console](https://search.google.com/search-console).
2. Choose **URL prefix** and enter:
   ```
   https://www.lakdecor.com
   ```
3. You have **two instant verification methods** already prepared:
   - **Method A — HTML file (Recommended):**
     Click **HTML file** verification. The verification file `google499fb3e8a1e16a57.html` is already located in the web root. Once deployed, it is accessible at:
     ```
     https://www.lakdecor.com/google499fb3e8a1e16a57.html
     ```
     Click **VERIFY**.
   - **Method B — HTML tag:**
     The meta verification tag is already inside the `<head>` of `index.html`:
     ```html
     <meta name="google-site-verification" content="google499fb3e8a1e16a57" />
     ```
     Click **VERIFY**.

> **Note:** If verification fails initially, ensure your latest `dist` build has been uploaded to your production web server or CDN (Netlify, Vercel, Hostinger, cPanel, etc.).

---

## 3. How to Submit `sitemap.xml` to Google

1. In Google Search Console, select `https://www.lakdecor.com` from the top-left property dropdown.
2. In the left navigation menu, click **Sitemaps** under *Indexing*.
3. Under **Add a new sitemap**, type:
   ```
   sitemap.xml
   ```
4. Click **SUBMIT**.
5. Google will fetch the sitemap within minutes and display status: **Success** with **28 Discovered URLs**.

---

## 4. How to Connect & Optimize Google Business Profile (Google Maps)

Google Business Profile is the #1 ranking factor for the **Google Maps 3-Pack** when customers search *"wedding decorators near me"* or *"event decorators in Pondicherry"*.

1. Visit [Google Business Profile](https://business.google.com/).
2. Claim or create the profile with the exact business name:
   ```
   lak.decor & event maker
   ```
3. Set Primary Category:
   - **Wedding Service** or **Event Planner** / **Party Planner**
4. Add Secondary Categories:
   - *Interior Decorator*, *Florist*, *Party Equipment Rental Service*
5. Fill out the verified physical address:
   ```
   52, SH 49, Ellaitharisu, Ganapathichettikulam,
   Pondicherry, Tamil Nadu 605014
   ```
6. Add Primary Telephone: `+91 95972 65450`
7. Add Website Link:
   ```
   https://www.lakdecor.com
   ```
8. Add Appointment / Booking Link:
   ```
   https://www.lakdecor.com/contact
   ```
9. Upload real high-resolution event photography:
   - Upload the watermarked photos from `/public/assets/images/real/` showing real mandaps, reception stages, and birthday setups.
10. Collect genuine reviews from past Pondicherry clients.

---

## 5. How to Inspect Page Indexing in Search Console

1. In Google Search Console, use the **URL Inspection** search bar at the very top.
2. Test any of the new landing pages, for example:
   ```
   https://www.lakdecor.com/wedding-decoration-pondicherry
   ```
3. Click **TEST LIVE URL**.
4. Check that:
   - Status: *URL is available to Google*
   - Page fetch: *Successful*
   - Crawled as: *Googlebot smartphone*
   - Canonical selected by Google matches `https://www.lakdecor.com/wedding-decoration-pondicherry`
   - Rich results detected: *Breadcrumbs, LocalBusiness, FAQ*
5. Click **REQUEST INDEXING** to expedite Googlebot crawling.

---

## 6. How to Monitor Search Queries and Performance

1. In Google Search Console, click **Search Results** under *Performance*.
2. Turn on all 4 metric boxes: **Total clicks**, **Total impressions**, **Average CTR**, and **Average position**.
3. Under **Queries**, monitor high-value search terms:
   - `wedding decorators in pondicherry`
   - `wedding decoration pondicherry`
   - `birthday decoration in pondicherry`
   - `reception stage decoration pondicherry`
   - `event decorators in pondicherry`
4. Under **Pages**, check which URLs drive the highest click-through rates.
5. If certain queries receive high impressions but lower clicks, review their meta titles and descriptions to make them even more compelling.

---

## 7. Business Information Checklist for Further Enhancement

The website currently uses all confirmed business data. Here are optional items you can supply in the future to further enhance local authority:

| Item | Current Value in Project | Status |
| :--- | :--- | :--- |
| **Business Name** | `lak.decor & event maker` | Configured |
| **Phone / WhatsApp** | `+91 95972 65450` | Configured |
| **Studio Address** | `52, SH 49, Ellaitharisu, Ganapathichettikulam, Pondicherry 605014` | Configured |
| **Service Area** | Pondicherry, Puducherry, Cuddalore, Villupuram | Configured |
| **Google Maps Embed** | Ganapathichettikulam Studio | Configured |
| **Instagram Profile** | `siteConfig.social.instagram` | Ensure handle is live |
| **Facebook Page** | `siteConfig.social.facebook` | Ensure handle is live |
| **GSTIN (Optional)** | Can be added to footer / invoice schema if registered | Optional |
| **Business Hours** | 09:00 AM – 09:00 PM (Monday – Sunday) | Configured |

---

## 8. Deployment Command

Every time you build the project for deployment:
```bash
npm run build
```
This automatically runs:
1. TypeScript strict type checks (`tsc -b`)
2. Vite production bundling and chunk splitting (`vite build`)
3. Static prerendering script (`node scripts/prerender.js`)

All output files are ready in the `dist/` directory for zero-configuration static hosting.
