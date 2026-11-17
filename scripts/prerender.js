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
    description: 'Discover exquisite wedding, birthday, engagement & reception decorations in Pondicherry. Explore our luxury portfolio & plan your event with lak.decor.',
    keywords: 'Wedding Decoration in Pondicherry, Wedding Decorators in Pondicherry, Best Wedding Decorators in Pondicherry, Wedding Stage Decoration in Pondicherry, Marriage Decoration in Pondicherry',
    image: '/assets/images/real/signature-royal-wedding-mandap.webp',
  },
  {
    path: 'about',
    title: 'About Us | lak.decor & event maker | Wedding Decorators',
    description: 'Learn about lak.decor, Pondicherry premier wedding & event decorators crafting bespoke luxury floral mandaps, reception stages & birthday setups.',
    keywords: 'about lak decor, wedding decorators pondicherry, event styling puducherry, luxury stage decorators',
    image: '/assets/images/ai-hero-mandap.webp',
  },
  {
    path: 'services',
    title: 'Wedding & Event Decoration Services in Pondicherry | lak.decor',
    description: 'Decoration services in Pondicherry: luxury wedding mandaps, engagement stages, birthday theme backdrops, reception setups & flower decor.',
    keywords: 'wedding decoration services pondicherry, event decorators pondicherry, reception stage decoration puducherry, birthday party decorators pondicherry',
    image: '/assets/images/ai-reception-stage.webp',
  },
  {
    path: 'gallery',
    title: 'Event & Wedding Decoration Gallery Pondicherry | lak.decor',
    description: 'Browse our photo gallery of wedding mandaps, reception stages, birthday themes & flower decorations crafted in Pondicherry by lak.decor.',
    keywords: 'wedding decoration photos pondicherry, reception stage gallery puducherry, birthday stage photos pondicherry',
    image: '/assets/images/real/signature-royal-wedding-mandap.webp',
  },
  {
    path: 'our-work',
    title: 'Our Work & Featured Projects | Wedding Decorators Pondicherry',
    description: 'Explore real wedding decoration case studies in Pondicherry: royal mandaps, reception stages, lawn ceremonies & milestone celebrations.',
    keywords: 'event decoration projects pondicherry, wedding stage case studies puducherry, lak decor portfolio',
    image: '/assets/images/real/signature-royal-wedding-mandap.webp',
  },
  {
    path: 'testimonials',
    title: 'Client Reviews & Testimonials | Wedding Decorators Pondicherry',
    description: 'Read real client testimonials for lak.decor & event maker. Trusted wedding and birthday party decoration specialists in Pondicherry & Puducherry.',
    keywords: 'wedding decorator reviews pondicherry, event decorator ratings puducherry, lak decor customer feedback',
    image: '/assets/images/ai-reception-stage.webp',
  },
  {
    path: 'contact',
    title: 'Contact Wedding & Event Decorators in Pondicherry | lak.decor',
    description: 'Contact lak.decor for wedding, birthday & celebration decorations in Pondicherry. Studio at Ganapathichettikulam. Call +91 95972 65450.',
    keywords: 'contact wedding decorator pondicherry, book event decorator puducherry, ganapathichettikulam stage decorator',
    image: '/assets/images/ai-hero-mandap.webp',
  },

  // Dedicated Local SEO Routes for Pondicherry
  {
    path: 'wedding-decoration-pondicherry',
    title: 'Wedding Decorators in Pondicherry | Wedding Decoration',
    description: 'Best wedding decorators in Pondicherry. Grand royal mandaps, marriage stage decoration & fresh flower setups across Puducherry. Call +91 95972 65450.',
    keywords: 'Wedding Decoration in Pondicherry, Wedding Decorators in Pondicherry, Best Wedding Decorators in Pondicherry, Marriage Decoration in Pondicherry, Wedding Event Planner in Pondicherry',
    image: '/assets/images/real/signature-royal-wedding-mandap.webp',
  },
  {
    path: 'wedding-decorators-pondicherry',
    title: 'Wedding Decorators in Pondicherry | lak.decor & event maker',
    description: 'Best wedding decorators in Pondicherry. Grand royal mandaps, marriage stage decoration & fresh flower setups across Puducherry. Call +91 95972 65450.',
    keywords: 'Wedding Decorators in Pondicherry, Best Wedding Decorators in Pondicherry, Wedding Decoration in Pondicherry',
    image: '/assets/images/real/signature-royal-wedding-mandap.webp',
  },
  {
    path: 'wedding-stage-decoration-pondicherry',
    title: 'Wedding Stage Decorators in Pondicherry | Stage Decoration',
    description: 'Best wedding stage decorators in Pondicherry. Luxury floral mandaps, couple thrones, lighting & marriage backdrops in Puducherry. Call +91 95972 65450.',
    keywords: 'Wedding Stage Decorators in Pondicherry, Wedding Stage Decoration in Pondicherry, Mandap Decoration in Pondicherry, Marriage Decoration in Pondicherry',
    image: '/assets/images/real/wedding-royal-golden-mandap.webp',
  },
  {
    path: 'wedding-stage-decorators-pondicherry',
    title: 'Wedding Stage Decorators in Pondicherry | lak.decor',
    description: 'Best wedding stage decorators in Pondicherry. Luxury floral mandaps, couple thrones, lighting & marriage backdrops in Puducherry. Call +91 95972 65450.',
    keywords: 'Wedding Stage Decorators in Pondicherry, Wedding Stage Decoration in Pondicherry, Stage Decorators Pondicherry',
    image: '/assets/images/real/wedding-royal-golden-mandap.webp',
  },
  {
    path: 'floral-wedding-decoration-pondicherry',
    title: 'Floral Wedding Decoration Pondicherry | Flower Decorators',
    description: 'Exotic floral wedding decoration in Pondicherry. Fresh Madurai jasmine, rose arches, temple garlands & outdoor setups in Puducherry. Call +91 95972 65450.',
    keywords: 'Floral Wedding Decoration Pondicherry, Outdoor Wedding Decoration in Pondicherry, Wedding Decoration in Pondicherry, Mandap Decoration in Pondicherry',
    image: '/assets/images/real/wedding-grand-floral-chandelier.webp',
  },
  {
    path: 'birthday-decoration-pondicherry',
    title: 'Birthday Decoration in Pondicherry | 1st Birthday Decorators',
    description: 'Creative birthday party decoration in Pondicherry. Organic pastel balloon arches, 3D marquee letters & theme styling across Puducherry. Call +91 95972 65450.',
    keywords: 'Birthday Decoration in Pondicherry, Birthday Decorators in Puducherry, 1st Birthday stage decor, balloon decoration pondicherry',
    image: '/assets/images/real/birthday-sarvesh-balloon-clouds.webp',
  },
  {
    path: 'engagement-decoration-pondicherry',
    title: 'Engagement Decoration in Pondicherry | Ring Ceremony Stages',
    description: 'Romantic engagement decoration in Pondicherry. Circular floral rings, couple arches, neon signs & ring ceremony stages in Puducherry. Call +91 95972 65450.',
    keywords: 'Engagement Decoration in Pondicherry, Ring Ceremony Stage Pondicherry, Engagement Decorators Puducherry, infinity floral ring stage',
    image: '/assets/images/real/engagement-infinity-floral-ring.webp',
  },
  {
    path: 'reception-decoration-pondicherry',
    title: 'Reception Decoration in Pondicherry | Wedding Stage Backdrops',
    description: 'Grand wedding reception decoration in Pondicherry. Sculptural wave stages, crystal chandeliers, floral runways & couple seating. Call +91 95972 65450.',
    keywords: 'Reception Decoration in Pondicherry, Wedding Reception Decorators Puducherry, modern wedding stage pondicherry',
    image: '/assets/images/real/reception-modern-petal-stage.webp',
  },
  {
    path: 'event-decorators-pondicherry',
    title: 'Event Decorators in Pondicherry | Wedding & Party Planners',
    description: 'Top event decorators in Pondicherry for weddings, birthdays, baby showers & corporate galas. Full-service event planning & decor. Call +91 95972 65450.',
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

  // Canonical Tag (Ensure exact match with sitemap)
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
  html = html.replace(/<meta\s+property=["']og:image:secure_url["']\s+content=["'].*?["']\s*\/?>/i,
    `<meta property="og:image:secure_url" content="${routeImage}" />`);
  html = html.replace(/<meta\s+property=["']og:image:alt["']\s+content=["'].*?["']\s*\/?>/i,
    `<meta property="og:image:alt" content="${route.title} - lak.decor & event maker" />`);

  // Twitter Card URL, Title, Desc, Image
  html = html.replace(/<meta\s+name=["']twitter:title["']\s+content=["'].*?["']\s*\/?>/i,
    `<meta name="twitter:title" content="${route.title}" />`);
  html = html.replace(/<meta\s+name=["']twitter:description["']\s+content=["'].*?["']\s*\/?>/i,
    `<meta name="twitter:description" content="${route.description}" />`);
  html = html.replace(/<meta\s+name=["']twitter:image["']\s+content=["'].*?["']\s*\/?>/i,
    `<meta name="twitter:image" content="${routeImage}" />`);
  html = html.replace(/<meta\s+name=["']twitter:image:alt["']\s+content=["'].*?["']\s*\/?>/i,
    `<meta name="twitter:image:alt" content="${route.title} - lak.decor & event maker" />`);

  // Route-specific JSON-LD Schema Graph
  const routeSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${BASE_URL}/#website`,
        "url": `${BASE_URL}/`,
        "name": "lak.decor & event maker",
        "description": "Wedding and Event Decorators in Pondicherry",
        "publisher": { "@id": `${BASE_URL}/#organization` },
        "potentialAction": [
          {
            "@type": "SearchAction",
            "target": {
              "@type": "EntryPoint",
              "urlTemplate": `${BASE_URL}/gallery?search={search_term_string}`
            },
            "query-input": "required name=search_term_string"
          }
        ],
        "inLanguage": "en-US"
      },
      {
        "@type": ["Organization", "LocalBusiness", "ProfessionalService"],
        "@id": `${BASE_URL}/#organization`,
        "name": "lak.decor & event maker",
        "alternateName": ["LAK Decors & Events", "lakdecor", "LAK Event Maker"],
        "url": `${BASE_URL}/`,
        "logo": {
          "@type": "ImageObject",
          "@id": `${BASE_URL}/#logo`,
          "inLanguage": "en-US",
          "url": `${BASE_URL}/favicon-512.png`,
          "contentUrl": `${BASE_URL}/favicon-512.png`,
          "width": 512,
          "height": 512,
          "caption": "lak.decor & event maker"
        },
        "image": { "@id": `${BASE_URL}/#logo` },
        "telephone": "+919597265450",
        "email": "dhivakar234@gmail.com",
        "priceRange": "₹₹ - ₹₹₹",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "52, SH 49, Ellaitharisu, Ganapathichettikulam",
          "addressLocality": "Pondicherry",
          "addressRegion": "Tamil Nadu",
          "postalCode": "605014",
          "addressCountry": "IN"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": 12.0238,
          "longitude": 79.8542
        },
        "openingHoursSpecification": [
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
            "opens": "09:00",
            "closes": "21:00"
          }
        ],
        "sameAs": [
          "https://www.instagram.com/lak.decors?rpxt=OG55bXduNDNwamdv&utm_source=qr"
        ],
        "areaServed": [
          { "@type": "City", "name": "Pondicherry" },
          { "@type": "City", "name": "Puducherry" },
          { "@type": "AdministrativeArea", "name": "Cuddalore" },
          { "@type": "AdministrativeArea", "name": "Villupuram" },
          { "@type": "AdministrativeArea", "name": "Chennai ECR" }
        ]
      },
      {
        "@type": "WebPage",
        "@id": `${routeCanonical}#webpage`,
        "url": routeCanonical,
        "name": route.title,
        "isPartOf": { "@id": `${BASE_URL}/#website` },
        "about": { "@id": `${BASE_URL}/#organization` },
        "description": route.description,
        "breadcrumb": { "@id": `${routeCanonical}#breadcrumb` },
        "inLanguage": "en-US"
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${routeCanonical}#breadcrumb`,
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": `${BASE_URL}/`
          },
          ...(route.path ? [{
            "@type": "ListItem",
            "position": 2,
            "name": route.title.split('|')[0].trim(),
            "item": routeCanonical
          }] : [])
        ]
      }
    ]
  };

  const schemaScript = `<script type="application/ld+json" id="static-schema-graph">\n    ${JSON.stringify(routeSchema, null, 2)}\n    </script>`;
  html = html.replace(/<script\s+type=["']application\/ld\+json["']\s+id=["']static-schema-graph["']>[\s\S]*?<\/script>/i, schemaScript);

  // Gallery route custom preview markup
  let routeCustomSection = '';
  if (route.path === '') {
    routeCustomSection = `
      <section style="margin: 2rem 0; background: #FFFFFF; border: 1px solid #E7E5E4; border-radius: 1rem; padding: 1.5rem;">
        <h2 style="font-size: 1.5rem; color: #7A245A; font-family: serif; margin-top: 0;">Premier Wedding Decorators in Pondicherry &amp; Puducherry</h2>
        <p style="color: #57534E; font-size: 0.9375rem; line-height: 1.6;">
          Ranked among the best wedding decorators in Pondicherry, <strong>lak.decor &amp; event maker</strong> provides complete turnkey wedding decoration, marriage stage setups, royal Chettinad temple mandaps, crystal reception backdrops, and fresh flower decorations across Puducherry, Cuddalore, and Villupuram.
        </p>
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 1rem; margin-top: 1rem;">
          <div style="border: 1px solid #F5F5F4; border-radius: 0.75rem; padding: 1rem; background: #FAF8F4;">
            <h3 style="font-size: 1.05rem; margin-top: 0; color: #29251F;"><a href="${BASE_URL}/wedding-decoration-pondicherry" style="color: #7A245A; text-decoration: none;">Wedding Decoration in Pondicherry</a></h3>
            <p style="font-size: 0.8125rem; color: #78716C; margin-bottom: 0;">Authentic golden gopuram mandaps, Madurai jasmine garlands, sacred banana tree gateways &amp; couple thrones.</p>
          </div>
          <div style="border: 1px solid #F5F5F4; border-radius: 0.75rem; padding: 1rem; background: #FAF8F4;">
            <h3 style="font-size: 1.05rem; margin-top: 0; color: #29251F;"><a href="${BASE_URL}/wedding-stage-decoration-pondicherry" style="color: #7A245A; text-decoration: none;">Wedding Stage Decoration</a></h3>
            <p style="font-size: 0.8125rem; color: #78716C; margin-bottom: 0;">Grand 20ft–60ft ballroom stages, couple seating lounges, LED ambient wash &amp; photo-calibrated profile spots.</p>
          </div>
          <div style="border: 1px solid #F5F5F4; border-radius: 0.75rem; padding: 1rem; background: #FAF8F4;">
            <h3 style="font-size: 1.05rem; margin-top: 0; color: #29251F;"><a href="${BASE_URL}/floral-wedding-decoration-pondicherry" style="color: #7A245A; text-decoration: none;">Floral Wedding Decoration</a></h3>
            <p style="font-size: 0.8125rem; color: #78716C; margin-bottom: 0;">Fresh exotic blooms, suspended flower chandeliers, fragrant jasmine torans &amp; outdoor beach lawn setups.</p>
          </div>
          <div style="border: 1px solid #F5F5F4; border-radius: 0.75rem; padding: 1rem; background: #FAF8F4;">
            <h3 style="font-size: 1.05rem; margin-top: 0; color: #29251F;"><a href="${BASE_URL}/reception-decoration-pondicherry" style="color: #7A245A; text-decoration: none;">Reception Stage Decoration</a></h3>
            <p style="font-size: 0.8125rem; color: #78716C; margin-bottom: 0;">Contemporary 3D sculptural wave stages, crystal chandeliers, floral runways &amp; dynamic ambient lighting.</p>
          </div>
        </div>
        <div style="margin-top: 1.5rem; padding-top: 1rem; border-top: 1px solid #E7E5E4; font-size: 0.8125rem; color: #78716C;">
          <strong>Service Coverage:</strong> Pondicherry, Puducherry, White Town, Lawspet, Kalapet, ECR Beach Resorts, Villianur, Cuddalore, Villupuram, Tindivanam &amp; Chennai ECR Corridor.
        </div>
      </section>
    `;
  } else if (route.path === 'gallery') {
    routeCustomSection = `
      <section style="margin: 2rem 0;">
        <h2 style="font-size: 1.5rem; color: #29251F; margin-bottom: 1.5rem;">Event &amp; Wedding Decoration Portfolio Gallery</h2>
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1.5rem;">
          <div style="background: #FFF; border: 1px solid #E7E5E4; border-radius: 1rem; overflow: hidden; padding: 0.75rem;">
            <img src="${BASE_URL}/assets/images/real/signature-royal-wedding-mandap.webp" alt="Wedding Decorators in Pondicherry - Signature Royal Mandap Decoration" style="width: 100%; height: 220px; object-fit: cover; border-radius: 0.5rem;" loading="lazy" />
            <h3 style="font-size: 1rem; margin: 0.75rem 0 0.25rem; color: #29251F;">Signature Royal Kalyana Mandap</h3>
            <p style="font-size: 0.8125rem; color: #78716C; margin: 0;">Pondicherry Wedding Stage &amp; Flower Decoration</p>
          </div>
          <div style="background: #FFF; border: 1px solid #E7E5E4; border-radius: 1rem; overflow: hidden; padding: 0.75rem;">
            <img src="${BASE_URL}/assets/images/real/wedding-royal-golden-mandap.webp" alt="Wedding Decoration in Pondicherry - Grand Temple Gopuram Mandap" style="width: 100%; height: 220px; object-fit: cover; border-radius: 0.5rem;" loading="lazy" />
            <h3 style="font-size: 1rem; margin: 0.75rem 0 0.25rem; color: #29251F;">Grand Temple Gopuram Mandap</h3>
            <p style="font-size: 0.8125rem; color: #78716C; margin: 0;">Authentic Temple Architecture &amp; Fresh Jasmine Garland</p>
          </div>
          <div style="background: #FFF; border: 1px solid #E7E5E4; border-radius: 1rem; overflow: hidden; padding: 0.75rem;">
            <img src="${BASE_URL}/assets/images/real/reception-modern-petal-stage.webp" alt="Reception Stage Decoration Pondicherry - Sculptural Petal Wave" style="width: 100%; height: 220px; object-fit: cover; border-radius: 0.5rem;" loading="lazy" />
            <h3 style="font-size: 1rem; margin: 0.75rem 0 0.25rem; color: #29251F;">Sculptural Petal Wave Reception</h3>
            <p style="font-size: 0.8125rem; color: #78716C; margin: 0;">Modern 3D Petal Stage &amp; Crystal Chandeliers</p>
          </div>
          <div style="background: #FFF; border: 1px solid #E7E5E4; border-radius: 1rem; overflow: hidden; padding: 0.75rem;">
            <img src="${BASE_URL}/assets/images/real/birthday-sarvesh-balloon-clouds.webp" alt="Birthday Decoration in Pondicherry - Sarvesh Milestone Birthday" style="width: 100%; height: 220px; object-fit: cover; border-radius: 0.5rem;" loading="lazy" />
            <h3 style="font-size: 1rem; margin: 0.75rem 0 0.25rem; color: #29251F;">Sarvesh Milestone Birthday</h3>
            <p style="font-size: 0.8125rem; color: #78716C; margin: 0;">Organic Balloon Clouds &amp; Thematic Stage Setup</p>
          </div>
          <div style="background: #FFF; border: 1px solid #E7E5E4; border-radius: 1rem; overflow: hidden; padding: 0.75rem;">
            <img src="${BASE_URL}/assets/images/real/engagement-infinity-floral-ring.webp" alt="Engagement Ceremony Decorators Puducherry - Infinity Floral Ring" style="width: 100%; height: 220px; object-fit: cover; border-radius: 0.5rem;" loading="lazy" />
            <h3 style="font-size: 1rem; margin: 0.75rem 0 0.25rem; color: #29251F;">Infinity Floral Ring Engagement</h3>
            <p style="font-size: 0.8125rem; color: #78716C; margin: 0;">Circular Couple Ring Arch &amp; Fairylight Canopy</p>
          </div>
          <div style="background: #FFF; border: 1px solid #E7E5E4; border-radius: 1rem; overflow: hidden; padding: 0.75rem;">
            <img src="${BASE_URL}/assets/images/real/haldi-marigold-traditional-swing.webp" alt="Haldi and Mehendi Decorators Pondicherry - Marigold Garden Swing" style="width: 100%; height: 220px; object-fit: cover; border-radius: 0.5rem;" loading="lazy" />
            <h3 style="font-size: 1rem; margin: 0.75rem 0 0.25rem; color: #29251F;">Garden Marigold Haldi Swing</h3>
            <p style="font-size: 0.8125rem; color: #78716C; margin: 0;">Traditional Lawn Swing with Yellow Floral Grid Wall</p>
          </div>
        </div>
      </section>
    `;
  }

  // Pre-rendered crawlable DOM shell (Hydrated by React on load)
  const prerenderShell = `
    <div class="static-prerender-shell" style="min-height: 100vh; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; color: #29251F; background: #FAF8F4; line-height: 1.6;">
      <header style="padding: 1.25rem 2rem; border-bottom: 1px solid #E7E5E4; background: #FFFFFF;">
        <div style="max-width: 1280px; margin: 0 auto; display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 1rem;">
          <a href="${BASE_URL}/" style="font-size: 1.25rem; font-family: serif; font-weight: bold; color: #7A245A; text-decoration: none;">
            lak.decor &amp; event maker
          </a>
          <nav aria-label="Primary Navigation">
            <ul style="display: flex; gap: 1.25rem; list-style: none; margin: 0; padding: 0; font-size: 0.875rem; font-weight: 500; flex-wrap: wrap;">
              <li><a href="${BASE_URL}/" style="color: #29251F; text-decoration: none;">Home</a></li>
              <li><a href="${BASE_URL}/about" style="color: #29251F; text-decoration: none;">About</a></li>
              <li><a href="${BASE_URL}/services" style="color: #29251F; text-decoration: none;">Services</a></li>
              <li><a href="${BASE_URL}/gallery" style="color: #7A245A; text-decoration: underline; font-weight: 600;">Gallery</a></li>
              <li><a href="${BASE_URL}/our-work" style="color: #29251F; text-decoration: none;">Our Work</a></li>
              <li><a href="${BASE_URL}/testimonials" style="color: #29251F; text-decoration: none;">Testimonials</a></li>
              <li><a href="${BASE_URL}/contact" style="color: #29251F; text-decoration: none;">Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <main style="max-width: 1100px; margin: 3rem auto; padding: 0 1.5rem;">
        <h1 style="font-size: 2.25rem; font-family: serif; color: #29251F; margin-bottom: 1rem; line-height: 1.2;">${route.title}</h1>
        <p style="font-size: 1.125rem; color: #57534E; margin-bottom: 2rem; max-width: 850px;">${route.description}</p>
        
        <section style="background: #FFFFFF; border: 1px solid #E7E5E4; border-radius: 1rem; padding: 1.5rem; margin-bottom: 2.5rem; box-shadow: 0 1px 3px rgba(0,0,0,0.05);">
          <h2 style="font-size: 1.125rem; color: #7A245A; margin-top: 0; margin-bottom: 0.5rem; font-family: serif;">Verified Pondicherry Event Decoration Studio</h2>
          <p style="margin: 0.35rem 0;"><strong>Studio Address:</strong> 52, SH 49, Ellaitharisu, Ganapathichettikulam, Pondicherry, Tamil Nadu 605014</p>
          <p style="margin: 0.35rem 0;"><strong>Direct Hotline:</strong> <a href="tel:+919597265450" style="color: #7A245A; font-weight: 600;">+91 95972 65450</a> | <strong>WhatsApp Booking:</strong> <a href="https://wa.me/919597265450" style="color: #25D366; font-weight: 600;">+91 95972 65450</a></p>
          <p style="margin: 0.35rem 0;"><strong>Consultation Hours:</strong> Mon - Sun: 9:00 AM - 9:00 PM (IST)</p>
        </section>

        <section style="margin-bottom: 2.5rem;">
          <h2 style="font-size: 1.25rem; color: #29251F; margin-bottom: 1rem; font-family: serif;">Popular Celebration Services in Pondicherry</h2>
          <ul style="display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 0.75rem; list-style: none; padding: 0;">
            <li><a href="${BASE_URL}/wedding-decoration-pondicherry" style="color: #7A245A; font-weight: 500;">• Wedding Decorators in Pondicherry</a></li>
            <li><a href="${BASE_URL}/wedding-stage-decoration-pondicherry" style="color: #7A245A; font-weight: 500;">• Wedding Stage Decoration in Pondicherry</a></li>
            <li><a href="${BASE_URL}/floral-wedding-decoration-pondicherry" style="color: #7A245A; font-weight: 500;">• Floral Wedding Decoration Pondicherry</a></li>
            <li><a href="${BASE_URL}/birthday-decoration-pondicherry" style="color: #7A245A; font-weight: 500;">• Birthday Decoration in Pondicherry</a></li>
            <li><a href="${BASE_URL}/engagement-decoration-pondicherry" style="color: #7A245A; font-weight: 500;">• Engagement Decoration Pondicherry</a></li>
            <li><a href="${BASE_URL}/reception-decoration-pondicherry" style="color: #7A245A; font-weight: 500;">• Reception Stage Decoration Pondicherry</a></li>
            <li><a href="${BASE_URL}/event-decorators-pondicherry" style="color: #7A245A; font-weight: 500;">• Event Decorators in Puducherry</a></li>
          </ul>
        </section>

        ${routeCustomSection}
      </main>

      <footer style="background: #1C1917; color: #D6D3D1; padding: 3rem 1.5rem; margin-top: 4rem;">
        <div style="max-width: 1280px; margin: 0 auto; display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 2rem;">
          <div>
            <h3 style="color: #FFFFFF; font-size: 1.125rem; margin-top: 0; font-family: serif;">lak.decor &amp; event maker</h3>
            <p style="font-size: 0.875rem; color: #A8A29E; line-height: 1.6;">Premium wedding mandaps, reception stages, and milestone birthday decorations in Pondicherry, Puducherry, Cuddalore, and Villupuram.</p>
          </div>
          <div>
            <h4 style="color: #FFFFFF; font-size: 0.875rem; text-transform: uppercase; letter-spacing: 0.05em;">Core Navigation</h4>
            <ul style="list-style: none; padding: 0; font-size: 0.875rem; line-height: 2;">
              <li><a href="${BASE_URL}/" style="color: #D6D3D1; text-decoration: none;">Home</a></li>
              <li><a href="${BASE_URL}/services" style="color: #D6D3D1; text-decoration: none;">Services</a></li>
              <li><a href="${BASE_URL}/gallery" style="color: #D6D3D1; text-decoration: none;">Gallery</a></li>
              <li><a href="${BASE_URL}/our-work" style="color: #D6D3D1; text-decoration: none;">Our Work</a></li>
              <li><a href="${BASE_URL}/about" style="color: #D6D3D1; text-decoration: none;">About</a></li>
              <li><a href="${BASE_URL}/contact" style="color: #D6D3D1; text-decoration: none;">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 style="color: #FFFFFF; font-size: 0.875rem; text-transform: uppercase; letter-spacing: 0.05em;">Studio Contacts</h4>
            <p style="font-size: 0.875rem; margin: 0.35rem 0;">Phone: <a href="tel:+919597265450" style="color: #D6D3D1;">+91 95972 65450</a></p>
            <p style="font-size: 0.875rem; margin: 0.35rem 0;">Instagram: <a href="https://www.instagram.com/lak.decors?rpxt=OG55bXduNDNwamdv&amp;utm_source=qr" style="color: #E8C585;" target="_blank" rel="noopener">@lak.decors</a></p>
            <p style="font-size: 0.875rem; margin: 0.35rem 0;">Email: dhivakar234@gmail.com</p>
            <p style="font-size: 0.875rem; margin: 0.35rem 0; color: #A8A29E;">52, SH 49, Ganapathichettikulam, Pondicherry 605014</p>
          </div>
        </div>
        <div style="max-width: 1280px; margin: 2rem auto 0; padding-top: 1.5rem; border-top: 1px solid #292524; font-size: 0.75rem; color: #78716C; text-align: center;">
          &copy; 2026 lak.decor &amp; event maker. All rights reserved. Ganapathichettikulam, Pondicherry.
        </div>
      </footer>
    </div>
  `;

  html = html.replace('<div id="root"></div>', `<div id="root">${prerenderShell}</div>`);

  // Target directory
  if (!route.path) {
    // Root index.html
    fs.writeFileSync(path.join(distDir, 'index.html'), html, 'utf-8');
  } else {
    const routeDir = path.join(distDir, route.path);
    fs.mkdirSync(routeDir, { recursive: true });
    fs.writeFileSync(path.join(routeDir, 'index.html'), html, 'utf-8');

    // Also output flat <route>.html for Vercel/Netlify cleanUrls (prevents 308 trailing slash redirect!)
    const flatHtmlPath = path.join(distDir, `${route.path}.html`);
    fs.mkdirSync(path.dirname(flatHtmlPath), { recursive: true });
    fs.writeFileSync(flatHtmlPath, html, 'utf-8');
  }

  generatedCount++;
}

// Copy robots.txt and sitemap.xml to dist
const publicDir = path.resolve(__dirname, '../public');
if (fs.existsSync(path.join(publicDir, 'sitemap.xml'))) {
  fs.copyFileSync(path.join(publicDir, 'sitemap.xml'), path.join(distDir, 'sitemap.xml'));
}
if (fs.existsSync(path.join(publicDir, 'robots.txt'))) {
  fs.copyFileSync(path.join(publicDir, 'robots.txt'), path.join(distDir, 'robots.txt'));
}
if (fs.existsSync(path.join(publicDir, 'site.webmanifest'))) {
  fs.copyFileSync(path.join(publicDir, 'site.webmanifest'), path.join(distDir, 'site.webmanifest'));
}

console.log(`Successfully generated ${generatedCount} static prerendered HTML route files in dist/!`);
