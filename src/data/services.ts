import { ServiceItem } from '../types';

export const servicesData: ServiceItem[] = [
  {
    id: 'wedding-decorations',
    slug: 'wedding-decorations',
    title: 'Wedding Decorations',
    shortDescription: 'Grand royal mandaps, magnificent floral aisles, and bespoke wedding stage artistry crafted for unforgettable vows.',
    fullDescription: 'Our signature wedding decoration service transforms traditional ceremonies and modern unions into breathtaking visual fairytales. From celestial floral mandaps and magnificent welcome arches to intimate bridal seating and mood lighting, every inch is customized to reflect your heritage, taste, and grand celebration.',
    heroImage: '/assets/images/ai-royal-mandap.webp',
    galleryImages: [
      '/assets/images/ai-hero-mandap.webp',
      '/assets/images/ai-royal-mandap.webp',
      '/assets/images/ai-reception-stage.webp',
      '/assets/images/ai-engagement-ring.webp',
    ],
    features: [
      'Custom Sacred Mandap Structure & Floral Canopy',
      'Grand Entrance Arch & Pathway Carpet Decor',
      'Bespoke Stage Backdrop with Fairy Lighting & Chandeliers',
      'Luxury Couple Seating (Royal Sofa / Diwan / Peacock Throne)',
      'Aisle Floral Pillars & Candlelit Glass Lanterns',
      'Photo Booth Installation with Personalized Monogram',
    ],
    popularThemes: [
      {
        name: 'Royal Chettinad & Temple Gold',
        description: 'Traditional brass bell structures, marigold cascades, lotus ponds, and warm temple architecture accents.',
        image: '/assets/images/ai-royal-mandap.webp',
      },
      {
        name: 'Enchanted Pastel Blossom',
        description: 'Imported hydrangeas, blush English roses, floating glass globes, and delicate ivory draping.',
        image: '/assets/images/ai-hero-mandap.webp',
      },
      {
        name: 'Mughal Courtyard & Crystal Chandelier',
        description: 'Intricate jaali backdrops, cascading wisteria, crystal candelabras, and rich velvet drapes.',
        image: '/assets/images/ai-reception-stage.webp',
      },
    ],
    planningTimeline: [
      { phase: 'Concept & 3D Moodboard', duration: 'Week 1', description: 'Consultation to understand your venue layout, guest count, and personalized color palette.' },
      { phase: 'Floral Sourcing & Structural Mockup', duration: 'Week 2-3', description: 'Curating fresh exotic blooms, testing lighting rigs, and fabricating custom backdrop accents.' },
      { phase: 'On-Site Setup & Quality Audit', duration: 'Event Eve', description: 'Flawless overnight installation led by our senior production director.' },
    ],
    faq: [
      { question: 'Do you provide fresh imported flowers or artificial silk flowers?', answer: 'We offer 100% fresh exotic flowers, premium silk botanicals, or a hybrid combination tailored to your vision and budget.' },
      { question: 'How early should we book our wedding decor?', answer: 'We recommend reserving your dates 2 to 6 months in advance during peak wedding seasons (Muhurtham dates) to guarantee crew availability.' },
    ],
    tags: ['Royal Wedding', 'Mandap', 'Floral Aisle', 'Bridal Seating'],
  },
  {
    id: 'birthday-celebrations',
    slug: 'birthday-celebrations',
    title: 'Birthday Celebrations',
    shortDescription: 'Magical organic balloon installations, whimsical neon backdrops, and customized thematic worlds for all ages.',
    fullDescription: 'From 1st birthday milestone celebrations to grand 50th jubilee bashes, we turn venues into vibrant celebratory wonderlands. We integrate organic balloon arches, marquee numbers with retro lighting, personalized acrylic cutouts, dessert table styling, and immersive entrance arches.',
    heroImage: '/assets/images/ai-birthday-party.webp',
    galleryImages: [
      '/assets/images/ai-birthday-party.webp',
      '/assets/images/ai-baby-shower.webp',
    ],
    features: [
      'Custom Multi-Tone Organic Balloon Garland & Arches',
      'Illuminated LED Neon Signage & 4ft Marquee Numbers',
      'Thematic 3D Character & Acrylic Cutout Props',
      'Dessert & Cake Table Styling with Plinths and Pedestals',
      'Children Activity & Fun Corner Decoration',
      'Welcome Signboard with Custom Floral Flourish',
    ],
    popularThemes: [
      {
        name: 'Pastel Safari & Woodland Friends',
        description: 'Earthy sage, champagne chrome balloons, plush animal props, and rustic wooden plinths.',
        image: '/assets/images/ai-birthday-party.webp',
      },
    ],
    planningTimeline: [
      { phase: 'Theme Selection', duration: 'Day 1-3', description: 'Brainstorming unique concepts that thrill the celebrant.' },
      { phase: 'Execution', duration: 'Event Morning', description: 'Punctual setup ready 4 hours prior.' },
    ],
    faq: [
      { question: 'Can balloon decor be done outdoors?', answer: 'Yes! We use high-grade double-stuffed latex balloons treated for outdoor durability.' },
    ],
    tags: ['Milestone Birthday', 'Balloon Arch', 'Neon Signs', 'Kids Themes'],
  },
  {
    id: 'engagement-ceremonies',
    slug: 'engagement-ceremonies',
    title: 'Engagement Ceremonies',
    shortDescription: 'Romantic floral ring backdrops, delicate drapery, and ethereal photo zones celebrating your official beginning.',
    fullDescription: 'An engagement marks the joyful promise of forever. We create breathtaking, romance-infused stages featuring circular floral wreaths, suspended botanical installations, warm fairy curtains, and personalized initials to make the ring exchange truly unforgettable.',
    heroImage: '/assets/images/ai-engagement-ring.webp',
    galleryImages: [
      '/assets/images/ai-engagement-ring.webp',
      '/assets/images/ai-hero-mandap.webp',
      '/assets/images/ai-royal-mandap.webp',
    ],
    features: [
      'Infinity Ring Floral Arch & Circular Backdrop Frame',
      'Custom Couple Name Calligraphy Signboard',
      'Ring Ceremony Pedestal & Velvet Cushion Setup',
      'Ambient Fairy Light Cascade & Up-Lighting',
      'Floral Aisle Walkway with Glass Candle Lanterns',
    ],
    popularThemes: [
      {
        name: 'The Golden Eternity Circle',
        description: 'Gilded brass ring smothered in cream orchids, white roses, and trailing ivy greens.',
        image: '/assets/images/ai-engagement-ring.webp',
      },
    ],
    planningTimeline: [
      { phase: 'Moodboard Design', duration: 'Week 1', description: 'Curating floral varieties and coordinating colors.' },
      { phase: 'Execution', duration: 'Day of Event', description: 'Early morning setup with peak freshness.' },
    ],
    faq: [
      { question: 'Can you match the stage colors to our outfits?', answer: 'Absolutely! Send us your lehenga or sherwani fabric swatches.' },
    ],
    tags: ['Engagement Stage', 'Floral Ring', 'Fairy Lights', 'Ring Exchange'],
  },
  {
    id: 'reception-decorations',
    slug: 'reception-decorations',
    title: 'Reception Stage Decorations',
    shortDescription: 'Cinematic grand stages with opulent flower walls, dynamic LED chandeliers, and royal theatrical grandeur.',
    fullDescription: 'The reception is your celebratory grand finale with friends and family. We engineer majestic stages featuring grand floral walls, geometric gold mirrored arches, ambient intelligent lighting, plush royal couches, and photo-ready luxury staging designed for spectacular photography.',
    heroImage: '/assets/images/ai-reception-stage.webp',
    galleryImages: [
      '/assets/images/ai-reception-stage.webp',
      '/assets/images/ai-hero-mandap.webp',
      '/assets/images/ai-corporate-banquet.webp',
    ],
    features: [
      'Grand Floral Wall or 3D Scaffolding Backdrop',
      'Crystal & Brass Chandelier Rigging with Mood Lighting',
      'High-Gloss White Dancefloor & Stage Flooring Finish',
      'Royal Velvet Tufted Couch / Maharaja Throne',
    ],
    popularThemes: [
      {
        name: 'Royal Velvet & Mirror Symphony',
        description: 'Deep plum and blush drape layering with mirrored geometric frames and crystal drops.',
        image: '/assets/images/ai-reception-stage.webp',
      },
    ],
    planningTimeline: [
      { phase: 'Venue Inspection', duration: 'Week 1', description: 'Checking ceiling load points and electrical feeds.' },
      { phase: 'Execution', duration: 'Event Day', description: 'Full turnkey delivery tested 3 hours prior.' },
    ],
    faq: [
      { question: 'Do you handle lighting rigs?', answer: 'Yes, our production team provides full ambient and profile lighting.' },
    ],
    tags: ['Grand Reception', 'Flower Wall', 'Stage Lighting', 'Luxury Couch'],
  },
  {
    id: 'baby-shower-events',
    slug: 'baby-shower-events',
    title: 'Baby Shower & Valaikappu',
    shortDescription: 'Tender pastel clouds, charming teddy bear themes, and traditional bangles and jasmine ceremonies.',
    fullDescription: 'Welcome the new bundle of joy with heartwarming warmth. We curate both traditional South Indian Valaikappu setups with fragrant jasmine garlands, brass deepams, and mango leaves, as well as chic modern pastel baby showers featuring hot air balloons and teddy bears.',
    heroImage: '/assets/images/ai-baby-shower.webp',
    galleryImages: [
      '/assets/images/ai-baby-shower.webp',
      '/assets/images/ai-birthday-party.webp',
    ],
    features: [
      'Hot Air Balloon / Moon & Star Backdrop Frame',
      'Oversized Fluffy Teddy Bears & Baby Block Cubes',
      'Traditional Valaikappu Bangle Stand & Swing Decor',
      'Organic Cloud Balloon Arches in Sky Blue, Peach, and Sage',
    ],
    popularThemes: [
      {
        name: 'Over the Moon & Cloud Nine',
        description: 'Pearly white and gold balloons with oversized plush teddy bears.',
        image: '/assets/images/ai-baby-shower.webp',
      },
    ],
    planningTimeline: [
      { phase: 'Theme Selection', duration: 'Week 1', description: 'Selecting pastel colors and balloon styling.' },
      { phase: 'Setup', duration: 'Event Morning', description: 'Gentle, punctual setup ready for family.' },
    ],
    faq: [
      { question: 'Can you provide the traditional wooden swing?', answer: 'Yes! We supply decorated brass and wooden swings adorned with fresh jasmine.' },
    ],
    tags: ['Baby Shower', 'Valaikappu', 'Pastel Balloons', 'Teddy Bear Theme'],
  },
  {
    id: 'haldi-mehendi-decorations',
    slug: 'haldi-mehendi-decorations',
    title: 'Haldi & Mehendi Decorations',
    shortDescription: 'Sun-drenched yellow marigold backdrops, playful tassel hangings, brass urlis, and bohemian seating.',
    fullDescription: 'The most joyful, spirited, and photogenic rituals! We craft vibrant Haldi setups featuring overflowing marigold waterfalls, customized flower baths in royal brass URLIs, and chic Mehendi cabanas with kaleidoscopic cushions, pom-poms, and dreamcatchers.',
    heroImage: '/assets/images/ai-haldi-mehendi.webp',
    galleryImages: [
      '/assets/images/ai-haldi-mehendi.webp',
      '/assets/images/ai-royal-mandap.webp',
    ],
    features: [
      'Giant Brass Urli with Lotus Petals for Haldi Bath',
      'Marigold Yellow and Tangerine Floral Curtain Backdrop',
      'Colorful Bohemian Mehendi Canopy with Low Floor Seating',
      'Embroidered Rajasthani Umbrellas & Wooden Wheel Props',
    ],
    popularThemes: [
      {
        name: 'Genda Phool Marigold Paradise',
        description: 'Vibrant yellow and orange marigold chains with hanging brass bells and traditional brass pots.',
        image: '/assets/images/ai-haldi-mehendi.webp',
      },
    ],
    planningTimeline: [
      { phase: 'Palette Selection', duration: 'Week 1', description: 'Selecting festive bright palettes and brass elements.' },
      { phase: 'Execution', duration: 'Event Day', description: 'Fresh floral staging completed early morning.' },
    ],
    faq: [
      { question: 'Do you supply the brass urli for Haldi?', answer: 'Yes! We have authentic heirloom brass urlis with matching stool and flower trays.' },
    ],
    tags: ['Haldi Decor', 'Mehendi Cabana', 'Marigold Waterfall', 'Brass Urli'],
  },
  {
    id: 'corporate-event-decorations',
    slug: 'corporate-event-decorations',
    title: 'Corporate Event Decorations',
    shortDescription: 'Professional gala dinners, annual conferences, brand product launches, and award night stage productions.',
    fullDescription: 'Corporate events require sleek professionalism, brand identity synergy, and immaculate time management. We deliver modern podiums, LED backdrop integrations, step-and-repeat media walls, elegant banquet table centerpieces, and keynote stage styling.',
    heroImage: '/assets/images/ai-corporate-banquet.webp',
    galleryImages: [
      '/assets/images/ai-corporate-banquet.webp',
      '/assets/images/ai-reception-stage.webp',
    ],
    features: [
      'Brand Identity Compliant Color Theming & 3D Logo Fabrication',
      'Keynote Stage Backdrops & Presentation Podiums',
      'Gala Dinner Centerpieces & VIP Table Decor',
    ],
    popularThemes: [
      {
        name: 'The Modern Executive Gala',
        description: 'Sleek geometric lines, frosted glass plinths, and understated architectural greenery.',
        image: '/assets/images/ai-corporate-banquet.webp',
      },
    ],
    planningTimeline: [
      { phase: 'Brief & Floorplans', duration: 'Week 1', description: 'Integrating company brand guidelines.' },
      { phase: 'Execution', duration: 'Event Morning', description: 'Punctual zero-disruption delivery.' },
    ],
    faq: [
      { question: 'Do you provide GST compliant corporate invoicing?', answer: 'Yes, full corporate documentation and GST billing are provided.' },
    ],
    tags: ['Corporate Gala', 'Award Night', 'Brand Launch', 'Stage Design'],
  },
  {
    id: 'floral-decorations',
    slug: 'floral-decorations',
    title: 'Exotic Floral Decorations',
    shortDescription: 'Masterful botanical arrangements, imported blooms, suspended floral chandeliers, and fragrant floral walls.',
    fullDescription: 'Flowers are the beating heart of our studio. Our master florists source seasonal blossoms from across India and internationally, sculpting botanical installations, lush table runners, ceiling waterfalls, and fragrance-rich traditional garland backdrops.',
    heroImage: '/assets/images/ai-royal-mandap.webp',
    galleryImages: [
      '/assets/images/ai-royal-mandap.webp',
      '/assets/images/ai-hero-mandap.webp',
    ],
    features: [
      'Suspended Floral Chandeliers & Overhead Canopies',
      'High-Density Fresh Bloom Flower Walls',
      'Fragrant Jasmine, Tuberoses, and Marigold Sculptures',
    ],
    popularThemes: [
      {
        name: 'The Royal Jasmine & Orchid Cascade',
        description: 'Fresh Madurai malli with orchids and English garden roses.',
        image: '/assets/images/ai-royal-mandap.webp',
      },
    ],
    planningTimeline: [
      { phase: 'Flower Selection', duration: 'Week 1', description: 'Finalizing bloom varietals.' },
      { phase: 'Arrangement', duration: 'Event Eve', description: 'Freshly arranged on site.' },
    ],
    faq: [
      { question: 'How do you keep flowers fresh?', answer: 'We use water tubes and temperature-controlled logistics.' },
    ],
    tags: ['Fresh Flowers', 'Jasmine', 'Orchids', 'Floral Canopy'],
  },
  {
    id: 'anniversary-decorations',
    slug: 'anniversary-decorations',
    title: 'Anniversary Celebrations',
    shortDescription: 'Silver, Golden, and intimate milestone anniversaries with candlelit tables, photo memory tunnels, and romance.',
    fullDescription: 'Honor decades of love with timeless sophistication. We curate intimate dining gazebos, grand 25th Silver Jubilee stages, and 50th Golden Jubilee milestones featuring photo memory corridors, romantic candle arrangements, and fine floral centerpieces.',
    heroImage: '/assets/images/ai-hero-mandap.webp',
    galleryImages: [
      '/assets/images/ai-reception-stage.webp',
      '/assets/images/ai-hero-mandap.webp',
    ],
    features: [
      'Romantic Canopy or Gazebo Setup with Silk Drapes',
      'Memory Walkway with Framed Couple Photographs',
      'Candlelit Dining Centerpieces & Ambient String Bulbs',
    ],
    popularThemes: [
      {
        name: 'The 25th Silver Twilight',
        description: 'Mirrored chargers, sterling silver accents, white orchids, and crystal votives.',
        image: '/assets/images/ai-hero-mandap.webp',
      },
    ],
    planningTimeline: [
      { phase: 'Memory Curation', duration: 'Week 1', description: 'Gathering couple photos and selecting romantic colors.' },
      { phase: 'Execution', duration: 'Event Day', description: 'Immaculate staging tailored for family banquet.' },
    ],
    faq: [
      { question: 'Can you organize an intimate home anniversary setup?', answer: 'Yes! We create bespoke indoor and garden terrace decorations.' },
    ],
    tags: ['Anniversary', 'Silver Jubilee', 'Candlelight Dinner', 'Memory Corridor'],
  },
  {
    id: 'custom-theme-decorations',
    slug: 'custom-theme-decorations',
    title: 'Custom Theme Decorations',
    shortDescription: 'Unconstrained imagination brought to life. Bespoke stage fabrication, thematic scenery, and signature concepts.',
    fullDescription: 'If you can dream it, we can build it. Whether you envision a whimsical enchanted forest with whispering trees and luminescent moss, a vintage Venetian carnival, or a futuristic neon wonderland, our team crafts custom sets and structures from sketch to reality.',
    heroImage: '/assets/images/ai-birthday-party.webp',
    galleryImages: [
      '/assets/images/ai-birthday-party.webp',
      '/assets/images/ai-royal-mandap.webp',
    ],
    features: [
      'Full 3D Concept Modeling & Color Renderings',
      'Custom Carpentry, CNC Cutting, and Metal Fabrication',
      'Theatrical Scenery Painting & Lighting Effects',
    ],
    popularThemes: [
      {
        name: 'The Bespoke Fantasy Wonderland',
        description: 'Custom lighting, personalized 3D structures, and bespoke entrance gateways.',
        image: '/assets/images/ai-birthday-party.webp',
      },
    ],
    planningTimeline: [
      { phase: 'Creative Blueprinting', duration: 'Week 1-2', description: 'Sketching bespoke elements and selecting materials.' },
      { phase: 'Workshop Fabrication', duration: 'Week 3-4', description: 'Sculpting, painting, and assembling structures.' },
      { phase: 'Staging', duration: 'Event Eve', description: 'Master assembly and styling.' },
    ],
    faq: [
      { question: 'Can you work with our event planner?', answer: 'Yes! We collaborate seamlessly with wedding planners and venue architects.' },
    ],
    tags: ['Custom Theme', '3D Fabrication', 'Immersive Decor', 'Bespoke Sets'],
  },
];
