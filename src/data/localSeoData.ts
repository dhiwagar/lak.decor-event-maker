export interface LocalSeoPageData {
  slug: string;
  path: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  badge: string;
  leadParagraph: string;
  heroImage: string;
  popularVenues: string[];
  keyInclusions: string[];
  features: Array<{
    title: string;
    description: string;
  }>;
  galleryImages: Array<{
    url: string;
    title: string;
    caption: string;
  }>;
  faqs: Array<{
    question: string;
    answer: string;
  }>;
}

export const localSeoPages: Record<string, LocalSeoPageData> = {
  'wedding-decoration-pondicherry': {
    slug: 'wedding-decoration-pondicherry',
    path: '/wedding-decoration-pondicherry',
    metaTitle: 'Wedding Decoration in Pondicherry | Best Wedding Decorators',
    metaDescription:
      'Best wedding decorators in Pondicherry. Grand royal mandaps, marriage stage decoration & fresh flower setups across Puducherry. Call +91 95972 65450.',
    h1: 'Wedding Decoration & Decorators in Pondicherry',
    badge: 'PONDICHERRY WEDDING SPECIALISTS',
    leadParagraph:
      'Ranked among the best wedding decorators in Pondicherry, lak.decor & event maker creates grand marriage stage decorations, traditional temple Kalyana mandaps adorned with Madurai jasmine, and luxury outdoor wedding setups across Puducherry.',
    heroImage: '/assets/images/real/signature-royal-wedding-mandap.webp',
    popularVenues: [
      'Leading Kalyana Mandapams across Pondicherry & Puducherry',
      'Beachside Lawns & Resorts along Pondicherry East Coast Road (ECR)',
      'Heritage Courtyard Villas in White Town (French Quarter)',
      'Grand Banquet Halls in Cuddalore, Villupuram, & Tindivanam',
    ],
    keyInclusions: [
      'Traditional Temple Architecture Mandap with Hand-Carved Gopuram Pillars',
      '100% Fresh Exotic Blooms (Madurai Jasmine, Marigold, Lotus, Orchids, Carnations)',
      'Grand Entrance Gateway with Fresh Banana Trees, Toran, and Brass Urlis',
      'Aisle Carpet Pathway with Elevated Floral Urns and Fairy Glass Lanterns',
      'Luxury Couple Seating (Maharaja Throne, Royal Diwan, or Modern Velvet Sofa)',
      'Full Structural Rigging, Stage Lighting, and Overnight Installation Coordination',
    ],
    features: [
      {
        title: 'Heritage & Contemporary Mandap Artistry',
        description:
          'Whether you desire an authentic South Indian temple wedding mandap with traditional brass bells and kuthu vilakku or a chic pastel floral canopy, our master florists fabricate custom setups tailored to your heritage.',
      },
      {
        title: 'Coastal Climate Freshness Guarantee',
        description:
          'Pondicherry’s coastal humidity requires specialized floral preservation. We utilize cold-chain storage and hydration micro-misting protocols so every petal remains vibrant throughout your Muhurtham.',
      },
      {
        title: 'Complete Wedding Event Planning',
        description:
          'Our production team handles structural load tests, municipal venue permits, power distributions, and strict overnight deadlines with zero stress for the bride, groom, and family.',
      },
    ],
    galleryImages: [
      {
        url: '/assets/images/real/signature-royal-wedding-mandap.webp',
        title: 'Signature Royal Kalyana Mandap',
        caption: 'Traditional carved golden pillars with fragrant jasmine garlands.',
      },
      {
        url: '/assets/images/real/wedding-royal-golden-mandap.webp',
        title: 'Grand Temple Gopuram Mandap',
        caption: 'Multi-tiered golden temple architecture mandap with auspicious brass lamps.',
      },
      {
        url: '/assets/images/real/wedding-traditional-temple-stage.webp',
        title: 'Heritage Deity Carved Stage',
        caption: 'Sacred architectural relief with fresh marigold and rose garlands.',
      },
      {
        url: '/assets/images/real/wedding-grand-floral-chandelier.webp',
        title: 'Grand Floral Chandelier Canopy',
        caption: 'Lavish overhead suspended floral ceiling with crystal drops.',
      },
    ],
    faqs: [
      {
        question: 'Who are the best wedding decorators in Pondicherry?',
        answer:
          'lak.decor & event maker is recognized among the premier wedding decorators in Pondicherry, known for authentic South Indian temple mandaps, contemporary floral stages, and turnkey marriage event execution.',
      },
      {
        question: 'How early should we book our wedding decoration in Pondicherry?',
        answer:
          'For peak Tamil wedding Muhurtham dates (especially Thai, Vaikasi, and Aavani months), we advise booking 2 to 5 months in advance to guarantee date reservation and dedicated fabrication crew.',
      },
      {
        question: 'Do you decorate beach weddings and outdoor resort venues in Pondicherry?',
        answer:
          'Yes! We frequently execute stunning open-air and beachside lawn weddings along Pondicherry ECR. We construct wind-resistant counterweighted structures and provide specialized lighting for outdoor ceremonies.',
      },
      {
        question: 'Can you customize the mandap colors to match our wedding attire?',
        answer:
          'Absolutely. We design customized 3D moodboards that seamlessly harmonize your saree, pattu veshti, and sherwani colors with our floral palettes and drapery accents.',
      },
    ],
  },

  'wedding-stage-decoration-pondicherry': {
    slug: 'wedding-stage-decoration-pondicherry',
    path: '/wedding-stage-decoration-pondicherry',
    metaTitle: 'Wedding Stage Decoration in Pondicherry | Mandap Decorators',
    metaDescription:
      'Exquisite wedding stage decoration in Pondicherry. Luxury floral mandaps, couple thrones, lighting & marriage backdrops in Puducherry. Call +91 95972 65450.',
    h1: 'Wedding Stage & Mandap Decoration in Pondicherry',
    badge: 'STAGE ARTISTRY & MANDAP SPECIALISTS',
    leadParagraph:
      'Transform your marriage ceremony with breathtaking wedding stage decoration in Pondicherry. From traditional golden gopuram mandaps to modern LED-illuminated floral arches, we build stages that leave lasting impressions.',
    heroImage: '/assets/images/real/wedding-royal-golden-mandap.webp',
    popularVenues: [
      'Pondicherry Marriage Halls & Kalyana Mandapams',
      'Luxury Hotels & Air-Conditioned Ballrooms in Puducherry',
      'Outdoor Resort Lawns on East Coast Road (ECR)',
      'Community Halls in Lawspet, Villianur, and Cuddalore',
    ],
    keyInclusions: [
      'Heavy-Duty Structural Stage Platform and Backdrop Framing',
      'Grand Royal Couple Thrones or Designer Velvet Sofas',
      'Custom Mandap Canopy with Fresh Floral Hangings and Torans',
      'Professional Warm Stage Wash & Profile Follow Spotlights',
      'Matching VIP Entrance Pathway with Red Carpet and Urn Florals',
      'Dedicated Stage Styling Crew on Site Throughout the Event',
    ],
    features: [
      {
        title: 'Custom Stage Proportions & Sizing',
        description:
          'We engineer stages customized for intimate 20-foot family gatherings up to grand 60-foot banquet stages with dynamic multi-tier levels and depth.',
      },
      {
        title: 'Photo & Video Friendly Lighting',
        description:
          'Calibrated 3000K warm illumination ensures stunning high-definition wedding photos and 4K video recording with zero glare or unsightly shadows.',
      },
      {
        title: 'Authentic Traditional & Fusion Options',
        description:
          'Choose between traditional Chettinad woodwork with brass urlis or modern geometric archways draped in imported hydrangeas and orchids.',
      },
    ],
    galleryImages: [
      {
        url: '/assets/images/real/wedding-royal-golden-mandap.webp',
        title: 'Royal Golden Stage & Mandap',
        caption: 'Gilded temple pillar mandap with cascading rose and jasmine garlands.',
      },
      {
        url: '/assets/images/real/wedding-traditional-temple-stage.webp',
        title: 'Traditional Temple Stage Setting',
        caption: 'Intricately sculpted heritage backdrop for classical wedding ceremonies.',
      },
      {
        url: '/assets/images/real/signature-royal-wedding-mandap.webp',
        title: 'Grand Kalyana Mandap Stage',
        caption: 'Complete stage setup featuring elevated couple seating and floral ceiling.',
      },
      {
        url: '/assets/images/real/wedding-grand-floral-chandelier.webp',
        title: 'Chandelier Crowned Wedding Stage',
        caption: 'Overhead floral crown with crystal chandeliers framing the main stage.',
      },
    ],
    faqs: [
      {
        question: 'What is included in your wedding stage decoration in Pondicherry?',
        answer:
          'Our packages include stage structural rigging, customized backdrop, floral draping, couple seating thrones, warm focus lighting, carpet aisle, entrance gate, and full setup/teardown.',
      },
      {
        question: 'Can you build outdoor wedding stages on beach lawns in Pondicherry?',
        answer:
          'Yes, we specialize in outdoor and beach wedding stage decorations along the ECR, featuring anchored wind-safe trusses and coastal-proof floral hydration.',
      },
    ],
  },

  'floral-wedding-decoration-pondicherry': {
    slug: 'floral-wedding-decoration-pondicherry',
    path: '/floral-wedding-decoration-pondicherry',
    metaTitle: 'Floral Wedding Decoration Pondicherry | Flower Decorators',
    metaDescription:
      'Exotic floral wedding decoration in Pondicherry. Fresh Madurai jasmine, rose arches, temple garlands & outdoor setups in Puducherry. Call +91 95972 65450.',
    h1: 'Floral Wedding Decoration in Pondicherry',
    badge: 'FRESH FLOWER & BOTANICAL ARTISTRY',
    leadParagraph:
      'Immerse your celebration in the natural fragrance and elegance of fresh flowers with premier floral wedding decoration in Pondicherry. From Madurai malli cascades to imported Dutch hydrangeas, our florists create living masterpieces.',
    heroImage: '/assets/images/real/wedding-grand-floral-chandelier.webp',
    popularVenues: [
      'Open-Air Garden Lawns and Beach Resorts along ECR Pondicherry',
      'Heritage French Quarter Courtyards in White Town',
      'Kalyana Mandapams across Pondicherry & Puducherry',
      'Boutique Farmhouses in Auroville and Kalapet',
    ],
    keyInclusions: [
      '100% Guaranteed Fresh Grade-A Blooms Sourced Daily',
      'Grand Floral Entrance Arches & Suspended Floral Chandeliers',
      'Traditional Jasmine & Lotus Garlands for Mandap Pillars',
      'Floral Petal Rangoli & Brass Urli Water Displays with Floating Candles',
      'Dining Table Floral Runners and Guest Table Centerpieces',
      'Temperature-Controlled Cold Storage Delivery to Venue',
    ],
    features: [
      {
        title: 'Direct Botanical Sourcing',
        description:
          'We source fresh blooms directly from farmers in Madurai, Bengaluru, and Ooty, ensuring vibrant color saturation and maximum fragrance longevity.',
      },
      {
        title: 'Bespoke Floral Color Harmonies',
        description:
          'We blend classic auspicious marigolds and jasmine with modern pastel peonies, baby’s breath clouds, and orchids to complement your bridal palette.',
      },
      {
        title: 'Eco-Friendly Floral Recycling',
        description:
          'After the event, we partner with local composting and temple vermiculture initiatives so every flower is returned naturally to the earth.',
      },
    ],
    galleryImages: [
      {
        url: '/assets/images/real/wedding-grand-floral-chandelier.webp',
        title: 'Grand Floral Chandelier Canopy',
        caption: 'Overhead suspended floral chandelier with crystal drops and roses.',
      },
      {
        url: '/assets/images/real/engagement-floral-halo-ring.webp',
        title: 'Blush Rose & Orchid Floral Halo',
        caption: 'Circular floral halo arch loaded with fresh imported roses and greenery.',
      },
      {
        url: '/assets/images/real/haldi-marigold-traditional-swing.webp',
        title: 'Marigold Botanical Grid Wall',
        caption: 'Vibrant yellow marigold wall with hanging brass urlis and traditional swing.',
      },
      {
        url: '/assets/images/real/signature-royal-wedding-mandap.webp',
        title: 'Jasmine Draped Mandap Pillars',
        caption: 'Fresh Madurai jasmine garlands woven around temple-carved pillars.',
      },
    ],
    faqs: [
      {
        question: 'How do you keep flowers fresh in Pondicherry coastal humidity?',
        answer:
          'We use refrigerated cold storage transport, water-tubed stems, and micro-misting hydration protocols so every petal remains crisp and radiant throughout your ceremony.',
      },
      {
        question: 'Do you provide flower decoration for outdoor and temple ceremonies?',
        answer:
          'Yes, we provide specialized flower decoration for temple ceremonies, beach lawns, outdoor receptions, and intimate home wedding rituals.',
      },
    ],
  },

  'birthday-decoration-pondicherry': {
    slug: 'birthday-decoration-pondicherry',
    path: '/birthday-decoration-pondicherry',
    metaTitle: 'Birthday Decoration in Pondicherry | 1st Birthday Decorators',
    metaDescription:
      'Creative birthday party decoration in Pondicherry. Organic pastel balloon arches, 3D marquee letters & theme styling across Puducherry. Call +91 95972 65450.',
    h1: 'Birthday Party Decoration in Pondicherry',
    badge: 'MILESTONE BIRTHDAY ARTISTRY',
    leadParagraph:
      'Celebrate your child’s 1st birthday, sweet sixteen, or golden jubilee with imaginative, vibrant thematic decor in Pondicherry. From pastel balloon clouds to retro neon signs, we craft magical wonderlands.',
    heroImage: '/assets/images/real/birthday-sarvesh-balloon-clouds.webp',
    popularVenues: [
      'Private Residences & Terraces in Pondicherry & Lawspet',
      'Hotel Banquet Halls & Roof Gardens in White Town',
      'Resorts along ECR & Kalapet for Grand Family Gatherings',
      'Community Halls in Villianur, Cuddalore, & Puducherry',
    ],
    keyInclusions: [
      'Multi-Tone Organic Biodegradable Balloon Cloud Garlands & Arches',
      'Illuminated LED Neon Signs & 4-Foot 3D Marquee Lettering / Numbers',
      'Thematic 3D Character Cutouts, Balloon Sculptures, and Backdrop Walls',
      'Dessert & Cake Table Styling with Mirrored Plinths and Cylinders',
      'Welcome Easel Signboard with Custom Name Flourish',
      'Photo Zone Setup for Instagram-Worthy Family Pictures',
    ],
    features: [
      {
        title: 'Custom Thematic Worlds',
        description:
          'From Jungle Safari, Princess Castles, and Cloud Nine themes for toddlers to chic Bohemian, Hollywood Glam, and Retro Jubilees for adults, every theme is custom fabricated.',
      },
      {
        title: 'Eco-Friendly, High-Grade Balloons',
        description:
          'We exclusively use professional-grade, double-stuffed biodegradable latex balloons that maintain full luster and tension for over 12 hours without popping.',
      },
      {
        title: 'Punctual Turnaround',
        description:
          'Our setup crew arrives 4 to 6 hours before event commencement, ensuring the entire stage and cake table are pristine and photo-ready well before guests arrive.',
      },
    ],
    galleryImages: [
      {
        url: '/assets/images/real/birthday-sarvesh-balloon-clouds.webp',
        title: 'Sarvesh Milestone Cloud Celebration',
        caption: 'Blue and white organic balloon cloud installation with illuminated 3D letters.',
      },
      {
        url: '/assets/images/real/birthday-dhisan-blue-marquee.webp',
        title: 'Dhisan 1st Birthday Marquee Stage',
        caption: 'Sky blue balloon arch with marquee name signage and matching cake plinths.',
      },
      {
        url: '/assets/images/real/baby-first-birthday-backdrop.webp',
        title: 'Milestone 1st Birthday Floral Backdrop',
        caption: 'Delicate floral frame backdrop with illuminated candle lanterns.',
      },
      {
        url: '/assets/images/real/birthday-purple-balloon-arch.webp',
        title: 'Purple Balloon Arch Entrance',
        caption: 'Whimsical spiral balloon doorway arch welcoming kids.',
      },
    ],
    faqs: [
      {
        question: 'Can you set up birthday decorations at our home in Pondicherry?',
        answer:
          'Yes, we regularly style living rooms, rooftop terraces, and garden lawns across Pondicherry with compact or grand backdrops scaled to your available space.',
      },
      {
        question: 'What is the starting budget for birthday decor in Pondicherry?',
        answer:
          'Our birthday celebration packages start from ₹35,000 for intimate setups, with lavish multi-tier milestone themes ranging up to ₹1,50,000+ depending on props, marquee lighting, and balloon volume.',
      },
    ],
  },

  'engagement-decoration-pondicherry': {
    slug: 'engagement-decoration-pondicherry',
    path: '/engagement-decoration-pondicherry',
    metaTitle: 'Engagement Decoration in Pondicherry | Ring Ceremony Stages',
    metaDescription:
      'Romantic engagement decoration in Pondicherry. Circular floral rings, couple arches, neon signs & ring ceremony stages in Puducherry. Call +91 95972 65450.',
    h1: 'Engagement Ceremony Decoration in Pondicherry',
    badge: 'ROMANTIC ENGAGEMENT DESIGNS',
    leadParagraph:
      'Begin your journey to forever with captivating, romance-infused engagement stages in Pondicherry. We craft circular floral wreaths, suspended botanical clouds, and fairy light curtains that set the perfect backdrop for your ring exchange.',
    heroImage: '/assets/images/real/engagement-floral-halo-ring.webp',
    popularVenues: [
      'Boutique Luxury Hotels in White Town & Pondicherry Boulevard',
      'Seaside Lawns overlooking the Bay of Bengal',
      'Convention Centers and Marriage Halls in Puducherry & Cuddalore',
      'Private Heritage Courtyard Mansions',
    ],
    keyInclusions: [
      '12-Foot Freestanding Circular Floral Ring (Infinity Halo) Structure',
      'Imported Blush Roses, Orchids, Hydrangeas, and Gypsophila (Baby’s Breath)',
      'Ring Ceremony Pedestal Stand with Velvet Ring Pillow',
      'Illuminated Couple Monogram or Custom Calligraphy Welcome Sign',
      'Aisle Pathway with Candlelit Glass Cylinders and Petal Borders',
      'Coordinated Luxury Couple Seating with Velvet Finishes',
    ],
    features: [
      {
        title: 'The Iconic Infinity Floral Ring',
        description:
          'Our signature circular floral halo offers a continuous, timeless symbol of eternal love that frames the couple beautifully from every photography angle.',
      },
      {
        title: 'Warm Ambient Lighting Harmony',
        description:
          'We layer golden fairy curtains, Edison filament lamps, and soft warm profile spots to accentuate the bride and groom without harsh lens flare.',
      },
      {
        title: 'Personalized Details',
        description:
          'Every stage features your personalized hashtag, love story timeline, or custom acrylic signage to make the event uniquely yours.',
      },
    ],
    galleryImages: [
      {
        url: '/assets/images/real/engagement-floral-halo-ring.webp',
        title: 'The Golden Infinity Floral Ring',
        caption: 'Circular floral ring wrapped in blush roses, orchids, and warm fairy lights.',
      },
      {
        url: '/assets/images/real/reception-floral-arches.webp',
        title: 'Triple Floral Arch Candlelit Stage',
        caption: 'Tri-circle floral ring arches decorated with imported roses and candles.',
      },
      {
        url: '/assets/images/real/wedding-welcome-easel-sign.webp',
        title: 'Custom Velvet Welcome Easel',
        caption: 'Hexagonal red velvet easel sign with golden calligraphy and floral pedestals.',
      },
      {
        url: '/assets/images/real/wedding-just-married-crimson.webp',
        title: 'Crimson Romance Stage',
        caption: 'Deep crimson rose backdrop accented with illuminated neon script.',
      },
    ],
    faqs: [
      {
        question: 'Do you provide matching photo booths for engagement ceremonies?',
        answer:
          'Yes! We provide coordinated photo booths featuring romantic floral walls, telephone booths, or neon signboards that complement your main stage design.',
      },
      {
        question: 'Can engagement setups be modified for intimate indoor family gatherings?',
        answer:
          'Absolutely. We adapt the scale and structure to fit banquet halls, private villas, or family residences perfectly.',
      },
    ],
  },

  'reception-decoration-pondicherry': {
    slug: 'reception-decoration-pondicherry',
    path: '/reception-decoration-pondicherry',
    metaTitle: 'Reception Decoration in Pondicherry | Wedding Stage Backdrops',
    metaDescription:
      'Grand wedding reception decoration in Pondicherry. Sculptural wave stages, crystal chandeliers, floral runways & couple seating. Call +91 95972 65450.',
    h1: 'Reception Stage Decoration in Pondicherry',
    badge: 'GRAND BALLROOM & RECEPTION STAGES',
    leadParagraph:
      'Make your celebratory grand finale unforgettable with dramatic reception staging in Pondicherry. We engineer sculptural 3D wave backdrops, suspended floral cloud runways, and sparkling crystal chandelier canopies.',
    heroImage: '/assets/images/real/reception-modern-petal-stage.webp',
    popularVenues: [
      'Grand Ballrooms & A/C Convention Centers across Pondicherry & Puducherry',
      'Beachside Luxury Resorts along ECR (East Coast Road)',
      'Star Hotels in Pondicherry Central & White Town',
      'Large Open-Air Party Lawns in Puducherry Suburbs',
    ],
    keyInclusions: [
      'Sculptural Wave Petal Backdrop with Integrated 3000K Warm LED Glow',
      'Crystal Chandelier Ceiling Rigging with Suspended Floral Clouds',
      'High-Gloss Mirrored Dancefloor & Illuminated Runway Ramp',
      'Luxury Tufted Couple Lounge (White Baroque Couch / Royal Sofa)',
      'Intelligent Stage Lighting (Moving Heads, Profile Spots, Dynamic Wash)',
      'Full Banquet Hall Pathway Decor with Floral Urns and Grand Drapery',
    ],
    features: [
      {
        title: 'Architectural Stage Engineering',
        description:
          'We fabricate custom CNC-cut wooden panels, curved acrylic diffusers, and modular aluminum trusses to create stages with depth, dimension, and cinematic scale.',
      },
      {
        title: '4K Videography Optimized Lighting',
        description:
          'Our lighting designers collaborate directly with your wedding photographers, balancing stage illumination to prevent harsh shadows and overexposed white gowns.',
      },
      {
        title: 'Grand Entrances & Staircase Florals',
        description:
          'From multi-arch illuminated tunnels to continuous floral garlands cascading down grand marble stairs, we ensure the celebration begins the moment guests step in.',
      },
    ],
    galleryImages: [
      {
        url: '/assets/images/real/reception-modern-petal-stage.webp',
        title: 'Sculptural Petal Wave Stage',
        caption: 'Contemporary sculptural petal backdrop with ambient neon lighting.',
      },
      {
        url: '/assets/images/real/modern-wave-glow-stage.webp',
        title: 'Illuminated Architectural Wave Stage',
        caption: 'Full perspective of the modern wave stage with crystal chandeliers.',
      },
      {
        url: '/assets/images/real/reception-suspended-cloud-runway.webp',
        title: 'Suspended Floral Cloud Runway',
        caption: 'Floating floral ceiling installation with mirror runway ramp.',
      },
      {
        url: '/assets/images/real/reception-golden-petal-luxury.webp',
        title: 'Gilded Petal Ambient Reception',
        caption: 'Golden leaf-contour backdrop with warm uplighting and bespoke seating.',
      },
    ],
    faqs: [
      {
        question: 'What width of reception stages do you build in Pondicherry?',
        answer:
          'We construct stages ranging from 20 feet for intimate ballrooms up to 60+ feet for mega convention centers and resort lawns.',
      },
      {
        question: 'Do you also handle guest table centerpieces and dining hall decor?',
        answer:
          'Yes, our comprehensive reception packages include guest table styling, floral centerpieces, charger plates, and mood lighting throughout the dining area.',
      },
    ],
  },

  'event-decorators-pondicherry': {
    slug: 'event-decorators-pondicherry',
    path: '/event-decorators-pondicherry',
    metaTitle: 'Event Decorators in Pondicherry | Wedding & Party Planners',
    metaDescription:
      'Top event decorators in Pondicherry for weddings, birthdays, baby showers & corporate galas. Full-service event planning & decor. Call +91 95972 65450.',
    h1: 'Event Decorators in Pondicherry & Puducherry',
    badge: 'FULL-SERVICE EVENT DECORATION STUDIO',
    leadParagraph:
      'From corporate gala dinners and product launches to traditional South Indian Valaikappu (baby shower) ceremonies and joyful Haldi swings, lak.decor & event maker provides end-to-end decor production across Pondicherry.',
    heroImage: '/assets/images/real/banquet-hall-red-carpet-aisle.webp',
    popularVenues: [
      'Pondicherry Heritage Hotels & Boutique Convention Centers',
      'Corporate Banquets & Auditoriums in Puducherry Industrial Hubs',
      'Beachside Lawns & Farmhouses along ECR Pondicherry',
      'Family Residences in Pondicherry, Cuddalore, & Villupuram',
    ],
    keyInclusions: [
      'Turnkey Event Decoration Management from Concept 3D Modeling to Teardown',
      'Exotic Fresh Flowers, Botanical Canopies, and Traditional Leaf Artistry',
      'Custom Carpentry, 3D Monograms, and Branded Stage Backdrops',
      'Complete Audio-Visual Truss Rigging and Ambient Profile Stage Lighting',
      'Dedicated On-Site Production Director and Quality Audit Team',
      'GST-Compliant Invoicing and Professional Event Scheduling',
    ],
    features: [
      {
        title: 'Versatile Celebration Portfolio',
        description:
          'Over 10 years of experience executing weddings, birthdays, corporate awards, baby showers, and housewarmings with equal precision and passion.',
      },
      {
        title: 'In-House Production Facility',
        description:
          'We maintain our own carpentry, floral sourcing, and lighting workshop, eliminating middlemen markups and ensuring top-tier craftsmanship.',
      },
      {
        title: 'Transparent Budgeting',
        description:
          'Detailed itemized proposals with zero hidden costs, flexible tiers tailored to your vision, and direct designer consultations.',
      },
    ],
    galleryImages: [
      {
        url: '/assets/images/real/banquet-hall-red-carpet-aisle.webp',
        title: 'Grand Banquet Red Carpet Aisle',
        caption: 'Red carpet walkway with floral pillars and banquet seating.',
      },
      {
        url: '/assets/images/real/decor-starlit-canopy-ceiling.webp',
        title: 'Enchanted Starlit Fairy Canopy',
        caption: 'Overhead fairy-light marquee tent ceiling creating a magical starry night.',
      },
      {
        url: '/assets/images/real/haldi-mehendi-floral-swing.webp',
        title: 'Garden Floral Jhula / Swing',
        caption: 'Lawn swing decorated with marigold garlands and heirloom brass urlis.',
      },
      {
        url: '/assets/images/real/entrance-illuminated-arch-tunnel.webp',
        title: 'Grand Illuminated Walkway Tunnel',
        caption: 'Successive illuminated floral walkway arches.',
      },
    ],
    faqs: [
      {
        question: 'What event types do you cater to in Pondicherry?',
        answer:
          'We cater to Weddings, Birthdays, Engagements, Receptions, Haldi & Mehendi, Baby Showers (Valaikappu), Anniversaries, Corporate Galas, and Custom Theme Celebrations.',
      },
      {
        question: 'Do you take event bookings outside Pondicherry?',
        answer:
          'Yes, we regularly execute grand celebrations in Cuddalore, Villupuram, Tindivanam, Neyveli, and along the entire Chennai ECR corridor.',
      },
    ],
  },
};
