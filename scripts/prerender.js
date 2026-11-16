import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const distDir = path.resolve(__dirname, '../dist');

if (!fs.existsSync(distDir)) {
  console.error('Dist directory does not exist. Run vite build first.');
  process.exit(1);
}

const templatePath = path.join(distDir, 'index.html');
const templateHtml = fs.readFileSync(templatePath, 'utf-8');

const BASE_URL = 'https://www.lakdecor.com';

const routes = [
  // Core Routes
  {
    path: '',
    title: 'Wedding Decorators in Pondicherry | lak.decor & event maker',
    description: 'Discover beautiful wedding, birthday, engagement and reception decorations in Pondicherry. Explore our luxury event portfolio and plan your celebration with lak.decor & event maker.',
    keywords: 'Wedding Decorators in Pondicherry, Wedding Decoration in Pondicherry, Event Decorators in Pondicherry, Birthday Decoration in Pondicherry, Marriage Decoration in Puducherry',
    image: '/assets/images/real/signature-royal-wedding-mandap.webp',
  },
  {
    path: 'about',
    title: 'About Us | lak.decor & event maker | Wedding Decorators in Pondicherry',
    description: 'Learn about lak.decor & event maker, Pondicherry premier wedding and event decorators. Crafting bespoke luxury floral mandaps, reception stages, and birthday setups across Puducherry.',
    keywords: 'about lak decor, wedding decorators pondicherry, event styling puducherry, luxury stage decorators',
    image: '/assets/images/ai-hero-mandap.webp',
  },
  {
    path: 'services',
    title: 'Event & Wedding Decoration Services in Pondicherry | lak.decor & event maker',
    description: 'Comprehensive decoration services in Pondicherry: luxury wedding mandaps, engagement stages, birthday theme backdrops, reception setups, and traditional flower decor across Puducherry.',
    keywords: 'wedding decoration services pondicherry, event decorators pondicherry, reception stage decoration puducherry, birthday party decorators pondicherry',
    image: '/assets/images/ai-reception-stage.webp',
  },
  {
    path: 'gallery',
    title: 'Event Decoration Gallery Pondicherry | Mandap, Reception & Birthday Photos',
    description: 'Browse our portfolio of wedding mandaps, reception stages, birthday themes, and flower decorations crafted in Pondicherry by lak.decor & event maker.',
    keywords: 'wedding decoration photos pondicherry, reception stage gallery puducherry, birthday stage photos pondicherry',
    image: '/assets/images/real/signature-royal-wedding-mandap.webp',
  },
  {
    path: 'our-work',
    title: 'Our Work & Featured Projects | Event Decorators in Pondicherry',
    description: 'Explore real event decoration case studies in Pondicherry: royal weddings, reception stages, outdoor lawn ceremonies, and milestone celebrations by lak.decor & event maker.',
    keywords: 'event decoration projects pondicherry, wedding stage case studies puducherry, lak decor portfolio',
    image: '/assets/images/real/signature-royal-wedding-mandap.webp',
  },
  {
    path: 'testimonials',
    title: 'Client Reviews & Testimonials | lak.decor & event maker Pondicherry',
    description: 'Read real client testimonials and reviews for lak.decor & event maker. Trusted wedding and birthday party decoration specialists in Pondicherry & Puducherry.',
    keywords: 'wedding decorator reviews pondicherry, event decorator ratings puducherry, lak decor customer feedback',
    image: '/assets/images/ai-reception-stage.webp',
  },
  {
    path: 'contact',
    title: 'Contact Wedding & Event Decorators in Pondicherry | lak.decor & event maker',
    description: 'Get in touch with lak.decor & event maker for wedding, birthday, and celebration decorations in Pondicherry. Studio at Ganapathichettikulam. Call +91 95972 65450 or book via WhatsApp.',
    keywords: 'contact wedding decorator pondicherry, book event decorator puducherry, ganapathichettikulam stage decorator',
    image: '/assets/images/ai-hero-mandap.webp',
  },

  // 5 Local SEO Dedicated Routes for Pondicherry
  {
    path: 'wedding-decoration-pondicherry',
    title: 'Wedding Decorators in Pondicherry | Royal Mandap & Stage Decoration Puducherry',
    description: 'Best wedding decorators in Pondicherry & Puducherry. Grand royal temple mandaps, flower decoration, luxury couple seating & complete marriage stage setups.',
    keywords: 'Wedding Decorators in Pondicherry, Wedding Decoration in Pondicherry, Marriage Decoration in Puducherry, Wedding Stage Decoration Pondicherry, Flower Decoration Pondicherry',
    image: '/assets/images/real/signature-royal-wedding-mandap.webp',
  },
  {
    path: 'birthday-decoration-pondicherry',
    title: 'Birthday Decoration in Pondicherry | 1st Birthday & Theme Decorators Puducherry',
    description: 'Creative birthday party decoration in Pondicherry. Organic pastel balloon arches, LED marquee numbers, customized cartoon backdrops and dessert table setups.',
    keywords: 'Birthday Decoration in Pondicherry, Birthday Decorators in Puducherry, 1st Birthday stage decor, balloon decoration pondicherry',
    image: '/assets/images/real/birthday-sarvesh-balloon-clouds.webp',
  },
  {
    path: 'engagement-decoration-pondicherry',
    title: 'Engagement Decoration Pondicherry | Ring Ceremony Stage Stylists Puducherry',
    description: 'Romantic engagement stage decoration in Pondicherry. Circular floral rings, infinity couple arches, neon signs, and fresh flower photo booths.',
    keywords: 'Engagement Decoration Pondicherry, Ring Ceremony Stage Pondicherry, Engagement Decorators Puducherry, infinity floral ring stage',
    image: '/assets/images/real/engagement-infinity-floral-ring.webp',
  },
  {
    path: 'reception-decoration-pondicherry',
    title: 'Reception Stage Decoration Pondicherry | Modern Floral Backdrops Puducherry',
    description: 'Grand wedding reception stage decoration in Pondicherry. Sculptural petal backdrops, crystal chandeliers, truss lighting, and red carpet walk-ins.',
    keywords: 'Reception Stage Decoration Pondicherry, Wedding Reception Decorators Puducherry, modern wedding stage pondicherry',
    image: '/assets/images/real/reception-modern-petal-stage.webp',
  },
  {
    path: 'event-decorators-pondicherry',
    title: 'Event Decorators in Pondicherry | Full-Service Event Decoration Services Puducherry',
    description: 'Top rated event decorators in Pondicherry for weddings, corporate galas, baby showers, anniversaries, and festive celebrations. Custom 3D design & setup.',
    keywords: 'Event Decorators in Pondicherry, Event Decoration Services in Puducherry, event makers pondicherry, party decorators puducherry',
    image: '/assets/images/real/signature-royal-wedding-mandap.webp',
  },

  // Specific Service Routes
  {
    path: 'services/wedding-decorations',
    title: 'Wedding Decorations in Pondicherry | lak.decor & event maker',
    description: 'Grand royal mandaps, magnificent floral aisles, and bespoke wedding stage artistry crafted for unforgettable vows in Pondicherry.',
    keywords: 'wedding decorations pondicherry, royal wedding mandap, marriage stage puducherry',
    image: '/assets/images/real/signature-royal-wedding-mandap.webp',
  },
  {
    path: 'services/birthday-celebrations',
    title: 'Birthday Celebrations in Pondicherry | lak.decor & event maker',
    description: 'Magical organic balloon installations, whimsical neon backdrops, and customized thematic worlds for milestone birthdays in Pondicherry.',
    keywords: 'birthday decorations pondicherry, balloon decorators puducherry, kids birthday stage',
    image: '/assets/images/real/birthday-sarvesh-balloon-clouds.webp',
  },
  {
    path: 'services/engagement-ceremonies',
    title: 'Engagement Ceremonies in Pondicherry | lak.decor & event maker',
    description: 'Romantic infinity floral rings, elegant pastel backdrops, and photogenic couple stages for ring ceremonies in Pondicherry.',
    keywords: 'engagement decorations pondicherry, ring ceremony puducherry, couple backdrop pondicherry',
    image: '/assets/images/real/engagement-infinity-floral-ring.webp',
  },
  {
    path: 'services/reception-decorations',
    title: 'Reception Decorations in Pondicherry | lak.decor & event maker',
    description: 'Contemporary sculptural waves, cascading crystal chandeliers, and dynamic ambient lighting for evening wedding receptions in Pondicherry.',
    keywords: 'reception decorations pondicherry, evening reception stage puducherry, luxury stage backdrop',
    image: '/assets/images/real/reception-modern-petal-stage.webp',
  },
  {
    path: 'services/baby-shower-events',
    title: 'Baby Shower Decorations in Pondicherry | lak.decor & event maker',
    description: 'Gentle pastel palettes, traditional Valaikappu floral backdrops, cradle decor, and balloon arches celebrating new beginnings in Pondicherry.',
    keywords: 'baby shower decorations pondicherry, valaikappu stage decor puducherry, seemantham decoration pondicherry',
    image: '/assets/images/ai-baby-shower.webp',
  },
  {
    path: 'services/haldi-mehendi-decorations',
    title: 'Haldi & Mehendi Decorations in Pondicherry | lak.decor & event maker',
    description: 'Vibrant marigold yellow cascades, traditional garden swings, colorful drapery, and festive photo booths for pre-wedding rituals in Pondicherry.',
    keywords: 'haldi decoration pondicherry, mehendi stage decor puducherry, marigold yellow backdrop pondicherry',
    image: '/assets/images/ai-haldi-mehendi.webp',
  },
  {
    path: 'services/corporate-event-decorations',
    title: 'Corporate Event Decorations in Pondicherry | lak.decor & event maker',
    description: 'Sophisticated stage backdrops, branded podiums, LED video wall framing, and awards gala decor in Pondicherry.',
    keywords: 'corporate event decorators pondicherry, business conference stage puducherry, annual gala decor',
    image: '/assets/images/ai-corporate-banquet.webp',
  },
  {
    path: 'services/floral-decorations',
    title: 'Floral Decorations in Pondicherry | lak.decor & event maker',
    description: 'Fresh exotic floral arches, fragrant jasmine garlands, botanical photo walls, and hanging floral chandeliers in Pondicherry.',
    keywords: 'flower decoration pondicherry, fresh flower stage puducherry, floral wedding arch',
    image: '/assets/images/real/wedding-grand-floral-chandelier.webp',
  },
  {
    path: 'services/anniversary-decorations',
    title: 'Anniversary Decorations in Pondicherry | lak.decor & event maker',
    description: 'Intimate candlelit setups, silver and golden jubilee backdrops, and celebratory party decor in Pondicherry.',
    keywords: 'anniversary party decor pondicherry, 25th anniversary stage puducherry, 50th jubilee decor',
    image: '/assets/images/real/reception-modern-petal-stage.webp',
  },
  {
    path: 'services/custom-theme-decorations',
    title: 'Custom Theme Decorations in Pondicherry | lak.decor & event maker',
    description: 'Bespoke custom-crafted thematic installations, 3D prop fabrication, and dreamscape event production in Pondicherry.',
    keywords: 'custom theme decorators pondicherry, 3d prop design puducherry, bespoke stage design',
    image: '/assets/images/real/signature-royal-wedding-mandap.webp',
  },

  // Project Case Study Routes
  {
    path: 'our-work/signature-royal-kalyana-mandap',
    title: 'Signature Royal Kalyana Mandap Project | lak.decor & event maker Pondicherry',
    description: 'Case study: Traditional Chettinad royal wedding mandap with handcrafted wooden pillars, brass kuthu vilakku, and fresh jasmine garlands in Pondicherry.',
    keywords: 'wedding mandap project pondicherry, traditional temple decor case study puducherry',
    image: '/assets/images/real/signature-royal-wedding-mandap.webp',
  },
  {
    path: 'our-work/sculptural-petal-wave-reception',
    title: 'Sculptural Petal Wave Reception Project | lak.decor & event maker Pondicherry',
    description: 'Case study: Modern sculptural 3D wave reception stage with crystal chandeliers and ambient lighting at Accord Puducherry.',
    keywords: 'reception stage project pondicherry, luxury event decor case study puducherry',
    image: '/assets/images/real/reception-modern-petal-stage.webp',
  },
  {
    path: 'our-work/sarvesh-milestone-birthday',
    title: 'Sarvesh Milestone Birthday Celebration | lak.decor & event maker Pondicherry',
    description: 'Case study: Whimsical hot air balloon clouds, organic pastel balloon arch, and neon backdrop at Shenbaga Hotel Pondicherry.',
    keywords: 'birthday celebration project pondicherry, balloon styling case study puducherry',
    image: '/assets/images/real/birthday-sarvesh-balloon-clouds.webp',
  },
  {
    path: 'our-work/infinity-floral-ring-engagement',
    title: 'Infinity Floral Ring Engagement Ceremony | lak.decor & event maker Pondicherry',
    description: 'Case study: Contemporary circular infinity floral halo stage with fairy lights at Promenade Beach Lawn, Pondicherry.',
    keywords: 'engagement stage project pondicherry, floral halo ceremony case study puducherry',
    image: '/assets/images/real/engagement-infinity-floral-ring.webp',
  },
  {
    path: 'our-work/garden-marigold-haldi-swing',
    title: 'Garden Marigold Haldi Swing Ceremony | lak.decor & event maker Pondicherry',
    description: 'Case study: Rustic yellow marigold floral grid wall with traditional wooden jhoola swing at Auroville Heritage Villa.',
    keywords: 'haldi decor project pondicherry, marigold swing case study puducherry',
    image: '/assets/images/real/haldi-marigold-traditional-swing.webp',
  },
  {
    path: 'our-work/starlit-canopy-grand-banquet',
    title: 'Starlit Canopy Grand Banquet Gala | lak.decor & event maker Pondicherry',
    description: 'Case study: Luxury 10,000 fairy light celestial ceiling canopy and banquet decor at Sunway Manor Pondicherry.',
    keywords: 'banquet gala project pondicherry, fairy light canopy case study puducherry',
    image: '/assets/images/real/wedding-grand-floral-chandelier.webp',
  },
];

console.log(`Generating prerendered HTML pages for ${routes.length} canonical routes...`);

let generatedCount = 0;

for (const route of routes) {
  const routeCanonical = route.path ? `${BASE_URL}/${route.path}` : `${BASE_URL}/`;
  const routeImage = route.image.startsWith('http') ? route.image : `${BASE_URL}${route.image}`;

  // Replace Title
  let html = templateHtml.replace(/<title>.*?<\/title>/i, `<title>${route.title}</title>`);

  // Replace Meta Description
  html = html.replace(/<meta\s+name=["']description["']\s+content=["'].*?["']\s*\/?>/i,
    `<meta name="description" content="${route.description}" />`);

  // Replace Keywords
  if (html.includes('name="keywords"')) {
    html = html.replace(/<meta\s+name=["']keywords["']\s+content=["'].*?["']\s*\/?>/i,
      `<meta name="keywords" content="${route.keywords}" />`);
  }

  // Canonical Tag (Ensure it exists in head)
  const canonicalTag = `<link rel="canonical" href="${routeCanonical}" />`;
  if (html.includes('rel="canonical"')) {
    html = html.replace(/<link\s+rel=["']canonical["']\s+href=["'].*?["']\s*\/?>/i, canonicalTag);
  } else {
    html = html.replace('</head>', `  ${canonicalTag}\n  </head>`);
  }

  // Open Graph URL, Title, Desc, Image
  html = html.replace(/<meta\s+property=["']og:url["']\s+content=["'].*?["']\s*\/?>/i,
    `<meta property="og:url" content="${routeCanonical}" />`);
  html = html.replace(/<meta\s+property=["']og:title["']\s+content=["'].*?["']\s*\/?>/i,
    `<meta property="og:title" content="${route.title}" />`);
  html = html.replace(/<meta\s+property=["']og:description["']\s+content=["'].*?["']\s*\/?>/i,
    `<meta property="og:description" content="${route.description}" />`);
  html = html.replace(/<meta\s+property=["']og:image["']\s+content=["'].*?["']\s*\/?>/i,
    `<meta property="og:image" content="${routeImage}" />`);

  // Twitter Card URL, Title, Desc, Image
  html = html.replace(/<meta\s+name=["']twitter:title["']\s+content=["'].*?["']\s*\/?>/i,
    `<meta name="twitter:title" content="${route.title}" />`);
  html = html.replace(/<meta\s+name=["']twitter:description["']\s+content=["'].*?["']\s*\/?>/i,
    `<meta name="twitter:description" content="${route.description}" />`);
  html = html.replace(/<meta\s+name=["']twitter:image["']\s+content=["'].*?["']\s*\/?>/i,
    `<meta name="twitter:image" content="${routeImage}" />`);

  // Inject crawlable fallback container into #root for no-JS crawlers
  const fallbackContent = `
    <noscript>
      <div style="font-family: sans-serif; padding: 2rem; max-width: 900px; margin: 0 auto; line-height: 1.6;">
        <h1>${route.title}</h1>
        <p>${route.description}</p>
        <p><strong>Studio Location:</strong> 52, SH 49, Ellaitharisu, Ganapathichettikulam, Pondicherry, Tamil Nadu 605014</p>
        <p><strong>Phone:</strong> <a href="tel:+919597265450">+91 95972 65450</a> | <strong>WhatsApp:</strong> <a href="https://wa.me/919597265450">+91 95972 65450</a></p>
        <nav aria-label="Quick Links">
          <ul>
            <li><a href="${BASE_URL}/wedding-decoration-pondicherry">Wedding Decoration Pondicherry</a></li>
            <li><a href="${BASE_URL}/birthday-decoration-pondicherry">Birthday Decoration Pondicherry</a></li>
            <li><a href="${BASE_URL}/engagement-decoration-pondicherry">Engagement Decoration Pondicherry</a></li>
            <li><a href="${BASE_URL}/reception-decoration-pondicherry">Reception Stage Decoration Pondicherry</a></li>
            <li><a href="${BASE_URL}/event-decorators-pondicherry">Event Decorators Pondicherry</a></li>
          </ul>
        </nav>
      </div>
    </noscript>
  `;

  html = html.replace('<div id="root"></div>', `<div id="root">${fallbackContent}</div>`);

  // Target directory
  if (!route.path) {
    // Root index.html
    fs.writeFileSync(path.join(distDir, 'index.html'), html, 'utf-8');
  } else {
    const routeDir = path.join(distDir, route.path);
    fs.mkdirSync(routeDir, { recursive: true });
    fs.writeFileSync(path.join(routeDir, 'index.html'), html, 'utf-8');
  }

  generatedCount++;
}

console.log(`Successfully generated ${generatedCount} static prerendered HTML route files in dist/!`);
