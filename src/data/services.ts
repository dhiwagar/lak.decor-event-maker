import { ServiceItem } from '../types';

export const servicesData: ServiceItem[] = [
  {
    id: 'wedding-decorations',
    slug: 'wedding-decorations',
    title: 'Wedding Decorations',
    shortDescription: 'Grand royal mandaps, magnificent floral aisles, and bespoke wedding stage artistry crafted for unforgettable vows.',
    fullDescription: 'Our signature wedding decoration service transforms traditional ceremonies and modern unions into breathtaking visual fairytales. From celestial floral mandaps and magnificent welcome arches to intimate bridal seating and mood lighting, every inch is customized to reflect your heritage, taste, and grand celebration.',
    heroImage: '/assets/images/real/signature-royal-wedding-mandap.jpg',
    galleryImages: [
      '/assets/images/real/signature-royal-wedding-mandap.jpg',
      '/assets/images/real/wedding-royal-golden-mandap.jpg',
      '/assets/images/real/wedding-traditional-temple-stage.jpg',
      '/assets/images/real/wedding-grand-floral-chandelier.jpg',
      '/assets/images/real/entrance-traditional-carved-door.jpg',
      '/assets/images/real/wedding-wooden-temple-pillars.jpg',
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
        description: 'Traditional brass bell structures, marigold cascades, lotus ponds, and authentic temple architecture accents.',
        image: '/assets/images/real/wedding-royal-golden-mandap.jpg',
      },
      {
        name: 'Heritage Wooden Gopuram Stage',
        description: 'Hand-carved wooden temple pillars, fresh jasmine garlands, and authentic brass kuthu vilakku oil lamps.',
        image: '/assets/images/real/wedding-wooden-temple-pillars.jpg',
      },
      {
        name: 'Sacred Lotus Motif Temple Stage',
        description: 'Intricate lotus backdrop, cascading floral borders, and warm golden architectural relief.',
        image: '/assets/images/real/wedding-lotus-motif-mandap.jpg',
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
    fullDescription: 'From 1st birthday milestone celebrations to grand jubilee bashes, we turn venues into vibrant celebratory wonderlands. We integrate organic balloon arches, marquee numbers with retro lighting, personalized acrylic cutouts, dessert table styling, and immersive entrance arches.',
    heroImage: '/assets/images/real/birthday-sarvesh-balloon-clouds.jpg',
    galleryImages: [
      '/assets/images/real/birthday-sarvesh-balloon-clouds.jpg',
      '/assets/images/real/birthday-dhisan-blue-marquee.jpg',
      '/assets/images/real/baby-first-birthday-backdrop.jpg',
      '/assets/images/real/birthday-purple-balloon-arch.jpg',
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
        name: 'Pastel Blue & Gold Cloud Wonderland',
        description: 'Multi-size balloon clouds, illuminated circular halos, marquee name lettering, and golden mirror plinths.',
        image: '/assets/images/real/birthday-sarvesh-balloon-clouds.jpg',
      },
      {
        name: 'Marquee 3D Letter Stage',
        description: 'Vibrant organic balloon arch with illuminated 3D name marquee letters and dessert plinths.',
        image: '/assets/images/real/birthday-dhisan-blue-marquee.jpg',
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
    heroImage: '/assets/images/real/engagement-floral-halo-ring.jpg',
    galleryImages: [
      '/assets/images/real/engagement-floral-halo-ring.jpg',
      '/assets/images/real/reception-floral-arches.jpg',
      '/assets/images/real/wedding-welcome-easel-sign.jpg',
      '/assets/images/real/wedding-just-married-crimson.jpg',
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
        name: 'The Golden Infinity Floral Halo',
        description: 'Circular floral ring wrapped in blush roses, orchids, and warm fairy lights with couple couch.',
        image: '/assets/images/real/engagement-floral-halo-ring.jpg',
      },
      {
        name: 'Triple Floral Arch Candlelit Stage',
        description: 'Romantic multi-arch circular rings with glowing pillar candle lanterns and rose headers.',
        image: '/assets/images/real/reception-floral-arches.jpg',
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
    fullDescription: 'The reception is your celebratory grand finale with friends and family. We engineer majestic stages featuring sculptural petal walls, geometric gold mirrored arches, ambient intelligent lighting, plush royal couches, and photo-ready luxury staging designed for spectacular photography.',
    heroImage: '/assets/images/real/reception-modern-petal-stage.jpg',
    galleryImages: [
      '/assets/images/real/reception-modern-petal-stage.jpg',
      '/assets/images/real/modern-wave-glow-stage.jpg',
      '/assets/images/real/reception-golden-petal-luxury.jpg',
      '/assets/images/real/reception-suspended-cloud-runway.jpg',
      '/assets/images/real/reception-grand-floral-dome.jpg',
      '/assets/images/real/reception-multi-arch-stage.jpg',
    ],
    features: [
      'Sculptural Wave Petal Backdrop with Ambient LED Glow',
      'Suspended Floral Cloud Ballroom Runway Installation',
      'Crystal & Brass Chandelier Rigging with Mood Lighting',
      'High-Gloss White Dancefloor & Stage Flooring Finish',
      'Royal Velvet Tufted Couch / Couple Lounge',
    ],
    popularThemes: [
      {
        name: 'Sculptural Petal Wave Glow',
        description: 'Modern curved petal contours with warm neon ambient wash and crystal pendant chandeliers.',
        image: '/assets/images/real/reception-modern-petal-stage.jpg',
      },
      {
        name: 'Suspended Floral Cloud Runway',
        description: 'Bespoke floating floral ceiling with mirror runway ramp and warm chandelier glow.',
        image: '/assets/images/real/reception-suspended-cloud-runway.jpg',
      },
      {
        name: 'Gilded Petal Ambient Stage',
        description: 'Warm golden leaf-contour backdrop with uplighting and luxury couple seating.',
        image: '/assets/images/real/reception-golden-petal-luxury.jpg',
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
    fullDescription: 'Welcome the new bundle of joy with heartwarming warmth. We curate both traditional South Indian Valaikappu setups with fragrant jasmine garlands, brass deepams, and mango leaves, as well as chic modern pastel baby showers featuring organic balloon clouds and cradle styling.',
    heroImage: '/assets/images/real/baby-first-birthday-backdrop.jpg',
    galleryImages: [
      '/assets/images/real/baby-first-birthday-backdrop.jpg',
      '/assets/images/real/birthday-sarvesh-balloon-clouds.jpg',
      '/assets/images/real/welcome-board-tropical.jpg',
      '/assets/images/real/birthday-purple-balloon-arch.jpg',
    ],
    features: [
      'Delicate Floral Backdrop Frame & Candle Lanterns',
      'Traditional Valaikappu Bangle Stand & Urli Setup',
      'Organic Cloud Balloon Arches in Sky Blue, Peach, and Sage',
      'Custom Welcome Signboard & Memory Photo Pedestals',
    ],
    popularThemes: [
      {
        name: 'Cradle & Floral Lantern Sanctuary',
        description: 'Fragrant floral frames, glass lanterns, and traditional auspicious decor.',
        image: '/assets/images/real/baby-first-birthday-backdrop.jpg',
      },
    ],
    planningTimeline: [
      { phase: 'Theme Selection', duration: 'Week 1', description: 'Selecting pastel colors and balloon styling.' },
      { phase: 'Setup', duration: 'Event Morning', description: 'Gentle, punctual setup ready for family.' },
    ],
    faq: [
      { question: 'Can you provide the traditional wooden swing?', answer: 'Yes! We supply decorated brass and wooden swings adorned with fresh jasmine.' },
    ],
    tags: ['Baby Shower', 'Valaikappu', 'Pastel Balloons', 'Cradle Decor'],
  },
  {
    id: 'haldi-mehendi-decorations',
    slug: 'haldi-mehendi-decorations',
    title: 'Haldi & Mehendi Decorations',
    shortDescription: 'Sun-drenched yellow marigold backdrops, playful swing decor, heirloom brass urlis, and festive setups.',
    fullDescription: 'The most joyful, spirited, and photogenic rituals! We craft vibrant Haldi setups featuring garden floral swings, overflowing marigold waterfalls, customized flower baths in royal brass urlis, and chic Mehendi cabanas with kaleidoscopic cushions.',
    heroImage: '/assets/images/real/haldi-mehendi-floral-swing.jpg',
    galleryImages: [
      '/assets/images/real/haldi-mehendi-floral-swing.jpg',
      '/assets/images/real/haldi-marigold-ganesha-wall.jpg',
      '/assets/images/real/tropical-green-entrance.jpg',
      '/assets/images/real/yellow-draped-pathway-arch.jpg',
    ],
    features: [
      'Authentic Garden Lawn Floral Swing (Jhula) with Marigolds',
      'Sacred Ganesha & Marigold Flower Tile Grid Wall',
      'Giant Brass Urli with Floating Lotus Petals for Haldi Bath',
      'South Indian Banana Leaf & Floral Entrance Gateway',
    ],
    popularThemes: [
      {
        name: 'Sunkissed Marigold Garden Swing',
        description: 'Traditional lawn swing draped in marigold garlands, roses, and heirloom brass urlis.',
        image: '/assets/images/real/haldi-mehendi-floral-swing.jpg',
      },
      {
        name: 'Sacred Ganesha Marigold Grid',
        description: 'Auspicious yellow and orange marigold floral wall with brass Ganesha idol and floral carpet.',
        image: '/assets/images/real/haldi-marigold-ganesha-wall.jpg',
      },
    ],
    planningTimeline: [
      { phase: 'Palette Selection', duration: 'Week 1', description: 'Selecting festive bright palettes and brass elements.' },
      { phase: 'Execution', duration: 'Event Day', description: 'Fresh floral staging completed early morning.' },
    ],
    faq: [
      { question: 'Do you supply the brass urli for Haldi?', answer: 'Yes! We have authentic heirloom brass urlis with matching stool and flower trays.' },
    ],
    tags: ['Haldi Decor', 'Floral Swing', 'Marigold Waterfall', 'Brass Urli'],
  },
  {
    id: 'corporate-event-decorations',
    slug: 'corporate-event-decorations',
    title: 'Corporate Event Decorations',
    shortDescription: 'Professional gala dinners, annual conferences, brand product launches, and award night stage productions.',
    fullDescription: 'Corporate events require sleek professionalism, brand identity synergy, and immaculate time management. We deliver modern podiums, LED backdrop integrations, step-and-repeat media walls, elegant banquet table centerpieces, and keynote stage styling.',
    heroImage: '/assets/images/real/banquet-hall-red-carpet-aisle.jpg',
    galleryImages: [
      '/assets/images/real/banquet-hall-red-carpet-aisle.jpg',
      '/assets/images/real/decor-starlit-canopy-ceiling.jpg',
      '/assets/images/real/reception-multi-arch-stage.jpg',
      '/assets/images/real/entrance-illuminated-arch-tunnel.jpg',
    ],
    features: [
      'Brand Identity Compliant Color Theming & 3D Logo Fabrication',
      'Keynote Stage Backdrops & Presentation Podiums',
      'Gala Dinner Centerpieces & VIP Table Decor',
      'Red Carpet Aisle & Multi-Arch Illuminated Tunnel',
    ],
    popularThemes: [
      {
        name: 'Grand Red Carpet Gala Ballroom',
        description: 'Red carpet walkway, grand floral pillars, banquet table styling, and ambient hall wash.',
        image: '/assets/images/real/banquet-hall-red-carpet-aisle.jpg',
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
    title: 'Exotic Floral & Grand Entrances',
    shortDescription: 'Masterful botanical arrangements, starry fairy-light canopies, illuminated walkway tunnels, and fragrant florals.',
    fullDescription: 'Flowers and lighting are the beating heart of our studio. Our master florists and lighting engineers sculpt magnificent starry fairy canopies, grand staircase garlands, illuminated walkway tunnels, and fragrance-rich traditional garland backdrops.',
    heroImage: '/assets/images/real/decor-starlit-canopy-ceiling.jpg',
    galleryImages: [
      '/assets/images/real/decor-starlit-canopy-ceiling.jpg',
      '/assets/images/real/banquet-staircase-floral-rail.jpg',
      '/assets/images/real/entrance-illuminated-arch-tunnel.jpg',
      '/assets/images/real/entrance-teal-floral-passage.jpg',
      '/assets/images/real/tropical-green-entrance.jpg',
      '/assets/images/real/emerald-lounge-foliage.jpg',
    ],
    features: [
      'Starry Night Fairy-Light Ceiling Canopy with 50,000 Micro Bulbs',
      'Grand Illuminated Walkway Tunnel with Successive Arches',
      'Marble Staircase Cascading Floral Garlands',
      'South Indian Traditional Banana Leaf & Brass Lantern Gateway',
    ],
    popularThemes: [
      {
        name: 'The Starry Night Canopy',
        description: 'Dazzling overhead fairy-light ceiling creating an immersive celestial ballroom tent.',
        image: '/assets/images/real/decor-starlit-canopy-ceiling.jpg',
      },
      {
        name: 'Illuminated Floral Tunnel',
        description: 'Multi-arch illuminated tunnel creating a grand red-carpet arrival experience.',
        image: '/assets/images/real/entrance-illuminated-arch-tunnel.jpg',
      },
    ],
    planningTimeline: [
      { phase: 'Flower Selection', duration: 'Week 1', description: 'Finalizing bloom varietals and lighting grids.' },
      { phase: 'Arrangement', duration: 'Event Eve', description: 'Freshly arranged on site.' },
    ],
    faq: [
      { question: 'How do you keep flowers fresh?', answer: 'We use water tubes and temperature-controlled logistics.' },
    ],
    tags: ['Fresh Flowers', 'Fairy Canopy', 'Entrance Tunnel', 'Staircase Decor'],
  },
  {
    id: 'anniversary-decorations',
    slug: 'anniversary-decorations',
    title: 'Anniversary Celebrations',
    shortDescription: 'Silver, Golden, and intimate milestone anniversaries with candlelit tables, photo memory tunnels, and romance.',
    fullDescription: 'Honor decades of love with timeless sophistication. We curate intimate dining gazebos, grand 25th Silver Jubilee stages, and 50th Golden Jubilee milestones featuring photo memory corridors, romantic candle arrangements, and fine floral centerpieces.',
    heroImage: '/assets/images/real/wedding-just-married-crimson.jpg',
    galleryImages: [
      '/assets/images/real/wedding-just-married-crimson.jpg',
      '/assets/images/real/reception-golden-petal-luxury.jpg',
      '/assets/images/real/engagement-floral-halo-ring.jpg',
      '/assets/images/real/reception-purple-elegance.jpg',
    ],
    features: [
      'Romantic Canopy or Gazebo Setup with Silk Drapes',
      'Memory Walkway with Framed Couple Photographs',
      'Candlelit Dining Centerpieces & Ambient String Bulbs',
    ],
    popularThemes: [
      {
        name: 'Crimson Rose & Neon Celebration',
        description: 'Deep crimson rose backdrop accented with illuminated neon script and luxury seating.',
        image: '/assets/images/real/wedding-just-married-crimson.jpg',
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
    fullDescription: 'If you can dream it, we can build it. Whether you envision a sculptural modern wave, a starlit canopy, or a whimsical balloon cloud wonderland, our team crafts custom sets and structures from sketch to reality.',
    heroImage: '/assets/images/real/reception-suspended-cloud-runway.jpg',
    galleryImages: [
      '/assets/images/real/reception-suspended-cloud-runway.jpg',
      '/assets/images/real/decor-starlit-canopy-ceiling.jpg',
      '/assets/images/real/birthday-sarvesh-balloon-clouds.jpg',
      '/assets/images/real/reception-grand-floral-dome.jpg',
    ],
    features: [
      'Full 3D Concept Modeling & Color Renderings',
      'Custom Carpentry, CNC Cutting, and Metal Fabrication',
      'Theatrical Scenery Painting & Lighting Effects',
    ],
    popularThemes: [
      {
        name: 'Suspended Floral Cloud & Runway',
        description: 'Floating floral ceiling with integrated LED runway ramp for high-impact celebrations.',
        image: '/assets/images/real/reception-suspended-cloud-runway.jpg',
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
