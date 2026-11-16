import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const distDir = path.resolve(__dirname, '../dist');
const rootDir = path.resolve(__dirname, '..');

console.log('=== LAK.DECOR SEO VERIFICATION SUITE ===\n');

let passCount = 0;
let failCount = 0;

function assert(condition, message) {
  if (condition) {
    console.log(`[PASS] ${message}`);
    passCount++;
  } else {
    console.error(`[FAIL] ${message}`);
    failCount++;
  }
}

// 1. Verify robots.txt
const robotsPath = path.join(distDir, 'robots.txt');
assert(fs.existsSync(robotsPath), 'dist/robots.txt exists');
if (fs.existsSync(robotsPath)) {
  const robots = fs.readFileSync(robotsPath, 'utf-8');
  assert(robots.includes('User-agent: *'), 'robots.txt specifies User-agent: *');
  assert(robots.includes('Sitemap: https://www.lakdecor.com/sitemap.xml'), 'robots.txt specifies correct sitemap URL');
  assert(robots.includes('google499fb3e8a1e16a57.html'), 'robots.txt allows Google verification file');
}

// 2. Verify sitemap.xml
const sitemapPath = path.join(distDir, 'sitemap.xml');
assert(fs.existsSync(sitemapPath), 'dist/sitemap.xml exists');
if (fs.existsSync(sitemapPath)) {
  const sitemap = fs.readFileSync(sitemapPath, 'utf-8');
  assert(sitemap.startsWith('<?xml'), 'sitemap.xml has valid XML declaration');
  assert(sitemap.includes('<loc>https://www.lakdecor.com/</loc>'), 'sitemap.xml contains homepage');
  assert(sitemap.includes('<loc>https://www.lakdecor.com/gallery</loc>'), 'sitemap.xml contains /gallery');
  assert(sitemap.includes('<loc>https://www.lakdecor.com/services</loc>'), 'sitemap.xml contains /services');
  assert(sitemap.includes('<loc>https://www.lakdecor.com/contact</loc>'), 'sitemap.xml contains /contact');
  assert(sitemap.includes('<loc>https://www.lakdecor.com/wedding-decoration-pondicherry</loc>'), 'sitemap.xml contains wedding-decoration-pondicherry');
  assert(sitemap.includes('<loc>https://www.lakdecor.com/wedding-stage-decoration-pondicherry</loc>'), 'sitemap.xml contains wedding-stage-decoration-pondicherry');
  assert(sitemap.includes('<loc>https://www.lakdecor.com/floral-wedding-decoration-pondicherry</loc>'), 'sitemap.xml contains floral-wedding-decoration-pondicherry');
  assert(sitemap.includes('<loc>https://www.lakdecor.com/birthday-decoration-pondicherry</loc>'), 'sitemap.xml contains birthday-decoration-pondicherry');
  assert(sitemap.includes('<loc>https://www.lakdecor.com/engagement-decoration-pondicherry</loc>'), 'sitemap.xml contains engagement-decoration-pondicherry');
  assert(sitemap.includes('<loc>https://www.lakdecor.com/reception-decoration-pondicherry</loc>'), 'sitemap.xml contains reception-decoration-pondicherry');
  assert(sitemap.includes('<loc>https://www.lakdecor.com/event-decorators-pondicherry</loc>'), 'sitemap.xml contains event-decorators-pondicherry');
  const urlCount = (sitemap.match(/<url>/g) || []).length;
  assert(urlCount >= 30, `sitemap.xml contains all ${urlCount} canonical URLs (>= 30 expected)`);
}

// 3. Verify vercel.json configuration
const vercelConfigPath = path.join(rootDir, 'vercel.json');
assert(fs.existsSync(vercelConfigPath), 'vercel.json exists');
if (fs.existsSync(vercelConfigPath)) {
  const vercel = JSON.parse(fs.readFileSync(vercelConfigPath, 'utf-8'));
  assert(vercel.cleanUrls === true, 'vercel.json enables cleanUrls to eliminate 308 redirects');
  assert(vercel.trailingSlash === false, 'vercel.json sets trailingSlash: false for canonical consistency');
}

// 4. Verify Google Search Console verification file
const gscPath = path.join(distDir, 'google499fb3e8a1e16a57.html');
assert(fs.existsSync(gscPath), 'dist/google499fb3e8a1e16a57.html exists in root');
if (fs.existsSync(gscPath)) {
  const content = fs.readFileSync(gscPath, 'utf-8');
  assert(content.includes('google499fb3e8a1e16a57'), 'Verification file contains correct verification code');
}

// 5. Verify /gallery is crawlable and indexed
const galleryHtmlPath = path.join(distDir, 'gallery.html');
assert(fs.existsSync(galleryHtmlPath), 'dist/gallery.html exists for cleanUrls');
if (fs.existsSync(galleryHtmlPath)) {
  const gHtml = fs.readFileSync(galleryHtmlPath, 'utf-8');
  assert(gHtml.includes('Event & Wedding Decoration Gallery Pondicherry'), 'gallery.html has optimized title');
  assert(gHtml.includes('rel="canonical" href="https://www.lakdecor.com/gallery"'), 'gallery.html has exact canonical tag');
  assert(gHtml.includes('alt="Wedding Decorators in Pondicherry'), 'gallery.html has crawlable images with local keywords');
}

// 6. Verify Local SEO Routes & Pre-rendered HTML Pages
const routesToTest = [
  { path: 'index.html', title: 'Wedding Decorators in Pondicherry' },
  { path: 'gallery.html', title: 'Event & Wedding Decoration Gallery Pondicherry' },
  { path: 'services.html', title: 'Wedding & Event Decoration Services in Pondicherry' },
  { path: 'contact.html', title: 'Contact Wedding & Event Decorators in Pondicherry' },
  { path: 'wedding-decoration-pondicherry/index.html', title: 'Wedding Decoration in Pondicherry' },
  { path: 'wedding-stage-decoration-pondicherry/index.html', title: 'Wedding Stage Decoration in Pondicherry' },
  { path: 'floral-wedding-decoration-pondicherry/index.html', title: 'Floral Wedding Decoration Pondicherry' },
  { path: 'birthday-decoration-pondicherry/index.html', title: 'Birthday Decoration in Pondicherry' },
  { path: 'engagement-decoration-pondicherry/index.html', title: 'Engagement Decoration in Pondicherry' },
  { path: 'reception-decoration-pondicherry/index.html', title: 'Reception Decoration in Pondicherry' },
  { path: 'event-decorators-pondicherry/index.html', title: 'Event Decorators in Pondicherry' },
  { path: 'services/wedding-decorations/index.html', title: 'Wedding Decorations in Pondicherry' },
  { path: 'our-work/signature-royal-kalyana-mandap/index.html', title: 'Signature Royal Kalyana Mandap Project' },
  { path: 'about/index.html', title: 'About Us' },
];

for (const r of routesToTest) {
  const filePath = path.join(distDir, r.path);
  assert(fs.existsSync(filePath), `Pre-rendered file exists: ${r.path}`);
  if (fs.existsSync(filePath)) {
    const html = fs.readFileSync(filePath, 'utf-8');
    assert(html.includes(`<title>${r.title}`), `${r.path} has correct <title>`);
    assert(html.includes('<meta name="description"'), `${r.path} has <meta name="description">`);

    // Check Meta Description character length (Target: between 50 and 160 characters)
    const descMatch = html.match(/<meta\s+name=["']description["']\s+content=["'](.*?)["']/i);
    if (descMatch) {
      const descLen = descMatch[1].length;
      assert(descLen >= 50 && descLen <= 160, `${r.path} meta description length (${descLen} chars) is within recommended 50-160 range`);
    }

    assert(html.includes('rel="canonical"'), `${r.path} has canonical tag`);
    assert(html.includes('property="og:image"'), `${r.path} has og:image`);
    assert(html.includes('name="geo.region" content="IN-PY"'), `${r.path} has geo.region IN-PY`);
    assert(html.includes('name="google-site-verification" content="google499fb3e8a1e16a57"'), `${r.path} has google verification tag`);
    assert(html.includes('+91 95972 65450'), `${r.path} has verified contact phone in pre-rendered body`);
    assert(html.includes('<a href="https://www.lakdecor.com/gallery"'), `${r.path} has crawlable link to /gallery`);
  }
}

// 7. Verify Favicon Suite and Web Manifest
const favicons = [
  'favicon.ico',
  'favicon.svg',
  'favicon-32x32.png',
  'favicon-16x16.png',
  'apple-touch-icon.png',
  'favicon-512.png',
  'site.webmanifest',
];
for (const fav of favicons) {
  assert(fs.existsSync(path.join(distDir, fav)), `dist/${fav} exists`);
}

// 8. Verify Enhanced Technical SEO Signals on dist/index.html
const rootIndexHtml = path.join(distDir, 'index.html');
if (fs.existsSync(rootIndexHtml)) {
  const rootHtml = fs.readFileSync(rootIndexHtml, 'utf-8');
  assert(rootHtml.includes('property="og:image:alt"'), 'index.html has og:image:alt');
  assert(rootHtml.includes('name="twitter:site" content="@lakdecors"'), 'index.html has twitter:site');
  assert(rootHtml.includes('name="twitter:creator" content="@lakdecors"'), 'index.html has twitter:creator');
  assert(rootHtml.includes('name="twitter:image:alt"'), 'index.html has twitter:image:alt');
  assert(rootHtml.includes('name="googlebot"'), 'index.html has googlebot robots directive');
  assert(rootHtml.includes('name="referrer" content="strict-origin-when-cross-origin"'), 'index.html has strict-origin referrer policy');
  assert(rootHtml.includes('<link rel="manifest" href="/site.webmanifest" />'), 'index.html links to site.webmanifest');
  assert(rootHtml.includes('id="static-schema-graph"'), 'index.html contains comprehensive JSON-LD schema graph');
  assert(rootHtml.includes('"@type": "WebSite"'), 'JSON-LD schema contains WebSite');
  assert(rootHtml.includes('"LocalBusiness"') && rootHtml.includes('"Organization"'), 'JSON-LD schema contains LocalBusiness & Organization');
  assert(rootHtml.includes('"@type": "SearchAction"'), 'JSON-LD schema contains SearchAction');
  assert(rootHtml.includes('<h1'), 'index.html has crawlable <h1> tag');
}

console.log(`\n========================================`);
console.log(`TOTAL TESTS: ${passCount + failCount}`);
console.log(`PASSED: ${passCount}`);
console.log(`FAILED: ${failCount}`);
console.log(`========================================\n`);

if (failCount > 0) {
  process.exit(1);
}
