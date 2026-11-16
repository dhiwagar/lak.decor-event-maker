import { siteConfig } from '../data/siteConfig';

const BASE_URL = 'https://www.lakdecor.com';

export const getLocalBusinessSchema = () => {
  return {
    '@context': 'https://schema.org',
    '@type': ['LocalBusiness', 'ProfessionalService'],
    '@id': `${BASE_URL}/#localbusiness`,
    name: siteConfig.name,
    alternateName: ['LAK Decors & Events', 'lakdecor', 'LAK Event Maker'],
    description:
      'Premier wedding and event decoration studio based in Pondicherry. Specializing in royal temple Kalyana mandaps, luxury reception stages, milestone birthdays, floral arches, and theme decorations across Puducherry and Tamil Nadu.',
    url: BASE_URL,
    telephone: `+91${siteConfig.phone}`,
    email: siteConfig.email,
    priceRange: '₹₹ - ₹₹₹',
    image: [
      `${BASE_URL}/assets/images/real/signature-royal-wedding-mandap.webp`,
      `${BASE_URL}/assets/images/real/reception-modern-petal-stage.webp`,
      `${BASE_URL}/assets/images/real/birthday-sarvesh-balloon-clouds.webp`,
    ],
    logo: `${BASE_URL}/favicon-512.png`,
    address: {
      '@type': 'PostalAddress',
      streetAddress: `${siteConfig.address.line1}, ${siteConfig.address.line2}`,
      addressLocality: siteConfig.address.city,
      addressRegion: siteConfig.address.state,
      postalCode: siteConfig.address.pincode,
      addressCountry: 'IN',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 12.0238,
      longitude: 79.8542,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: [
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday',
          'Saturday',
          'Sunday',
        ],
        opens: '09:00',
        closes: '21:00',
      },
    ],
    sameAs: [
      siteConfig.social.instagram,
      siteConfig.social.facebook,
      siteConfig.social.pinterest,
    ],
    areaServed: [
      {
        '@type': 'City',
        name: 'Pondicherry',
      },
      {
        '@type': 'City',
        name: 'Puducherry',
      },
      {
        '@type': 'AdministrativeArea',
        name: 'Cuddalore',
      },
      {
        '@type': 'AdministrativeArea',
        name: 'Villupuram',
      },
      {
        '@type': 'AdministrativeArea',
        name: 'Chennai ECR',
      },
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Event Decoration Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Wedding Decoration in Pondicherry',
            description: 'Grand royal Kalyana Mandaps, sacred temple pillars, and floral aisle decoration.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Birthday Party Decoration in Pondicherry',
            description: 'Organic balloon cloud installations, 3D character props, and illuminated marquee letters.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Reception Stage Decoration in Pondicherry',
            description: 'Sculptural wave backdrops, crystal chandeliers, and dynamic ambient wash lighting.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Engagement Ceremony Decoration in Pondicherry',
            description: 'Infinity circular floral halos and bespoke romantic couple stages.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Haldi and Mehendi Decoration in Pondicherry',
            description: 'Authentic garden lawn swings, marigold grid walls, and heirloom brass urlis.',
          },
        },
      ],
    },
  };
};

export interface ServiceSchemaOptions {
  name: string;
  description: string;
  url?: string;
  path?: string;
  image: string;
  serviceType?: string;
}

export function getServiceSchema(options: ServiceSchemaOptions): Record<string, any>;
export function getServiceSchema(serviceName: string, description: string, path: string, image: string): Record<string, any>;
export function getServiceSchema(
  arg1: string | ServiceSchemaOptions,
  arg2?: string,
  arg3?: string,
  arg4?: string
): Record<string, any> {
  let name = '';
  let description = '';
  let rawUrl = '';
  let image = '';
  let serviceType = '';

  if (typeof arg1 === 'object') {
    name = arg1.name;
    description = arg1.description;
    rawUrl = arg1.url || arg1.path || '';
    image = arg1.image;
    serviceType = arg1.serviceType || arg1.name;
  } else {
    name = arg1;
    description = arg2 || '';
    rawUrl = arg3 || '';
    image = arg4 || '';
    serviceType = arg1;
  }

  const url = rawUrl.startsWith('http') ? rawUrl : `${BASE_URL}${rawUrl.startsWith('/') ? rawUrl : `/${rawUrl}`}`;
  const fullImage = image.startsWith('http') ? image : `${BASE_URL}${image.startsWith('/') ? image : `/${image}`}`;

  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: serviceType,
    name: name,
    description: description,
    url: url,
    image: fullImage,
    provider: {
      '@type': 'LocalBusiness',
      name: siteConfig.name,
      telephone: `+91${siteConfig.phone}`,
      url: BASE_URL,
      address: {
        '@type': 'PostalAddress',
        streetAddress: `${siteConfig.address.line1}, ${siteConfig.address.line2}`,
        addressLocality: siteConfig.address.city,
        addressRegion: siteConfig.address.state,
        postalCode: siteConfig.address.pincode,
        addressCountry: 'IN',
      },
    },
    areaServed: {
      '@type': 'City',
      name: 'Pondicherry',
    },
  };
}

export const getBreadcrumbSchema = (items: Array<{ name: string; url: string }>) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url.startsWith('http') ? item.url : `${BASE_URL}${item.url}`,
    })),
  };
};

export const getFullSiteGraphSchema = (options?: {
  pageTitle?: string;
  pageDescription?: string;
  pageUrl?: string;
  breadcrumbs?: Array<{ name: string; url: string }>;
}) => {
  const pageUrl = options?.pageUrl || `${BASE_URL}/`;
  const pageTitle = options?.pageTitle || `Wedding Decorators in Pondicherry | ${siteConfig.name}`;
  const pageDescription =
    options?.pageDescription ||
    'Discover exquisite wedding, birthday, engagement & reception decorations in Pondicherry. Explore our luxury portfolio & plan your event with lak.decor.';
  const breadcrumbs = options?.breadcrumbs || [{ name: 'Home', url: `${BASE_URL}/` }];

  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebSite',
        '@id': `${BASE_URL}/#website`,
        url: `${BASE_URL}/`,
        name: siteConfig.name,
        description: 'Wedding and Event Decorators in Pondicherry',
        publisher: {
          '@id': `${BASE_URL}/#organization`,
        },
        potentialAction: [
          {
            '@type': 'SearchAction',
            target: {
              '@type': 'EntryPoint',
              urlTemplate: `${BASE_URL}/gallery?search={search_term_string}`,
            },
            'query-input': 'required name=search_term_string',
          },
        ],
        inLanguage: 'en-US',
      },
      {
        '@type': ['Organization', 'LocalBusiness', 'ProfessionalService'],
        '@id': `${BASE_URL}/#organization`,
        name: siteConfig.name,
        alternateName: ['LAK Decors & Events', 'lakdecor', 'LAK Event Maker'],
        url: `${BASE_URL}/`,
        logo: {
          '@type': 'ImageObject',
          '@id': `${BASE_URL}/#logo`,
          inLanguage: 'en-US',
          url: `${BASE_URL}/favicon-512.png`,
          contentUrl: `${BASE_URL}/favicon-512.png`,
          width: 512,
          height: 512,
          caption: siteConfig.name,
        },
        image: {
          '@id': `${BASE_URL}/#logo`,
        },
        telephone: `+91${siteConfig.phone}`,
        email: siteConfig.email,
        priceRange: '₹₹ - ₹₹₹',
        address: {
          '@type': 'PostalAddress',
          streetAddress: `${siteConfig.address.line1}, ${siteConfig.address.line2}`,
          addressLocality: siteConfig.address.city,
          addressRegion: siteConfig.address.state,
          postalCode: siteConfig.address.pincode,
          addressCountry: 'IN',
        },
        geo: {
          '@type': 'GeoCoordinates',
          latitude: 12.0238,
          longitude: 79.8542,
        },
        openingHoursSpecification: [
          {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: [
              'Monday',
              'Tuesday',
              'Wednesday',
              'Thursday',
              'Friday',
              'Saturday',
              'Sunday',
            ],
            opens: '09:00',
            closes: '21:00',
          },
        ],
        sameAs: [
          siteConfig.social.instagram,
          siteConfig.social.facebook,
          siteConfig.social.pinterest,
        ].filter(Boolean),
        areaServed: [
          { '@type': 'City', name: 'Pondicherry' },
          { '@type': 'City', name: 'Puducherry' },
          { '@type': 'AdministrativeArea', name: 'Cuddalore' },
          { '@type': 'AdministrativeArea', name: 'Villupuram' },
          { '@type': 'AdministrativeArea', name: 'Chennai ECR' },
        ],
      },
      {
        '@type': 'WebPage',
        '@id': `${pageUrl}#webpage`,
        url: pageUrl,
        name: pageTitle,
        isPartOf: {
          '@id': `${BASE_URL}/#website`,
        },
        about: {
          '@id': `${BASE_URL}/#organization`,
        },
        description: pageDescription,
        breadcrumb: {
          '@id': `${pageUrl}#breadcrumb`,
        },
        inLanguage: 'en-US',
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `${pageUrl}#breadcrumb`,
        itemListElement: breadcrumbs.map((b, idx) => ({
          '@type': 'ListItem',
          position: idx + 1,
          name: b.name,
          item: b.url.startsWith('http') ? b.url : `${BASE_URL}${b.url.startsWith('/') ? b.url : `/${b.url}`}`,
        })),
      },
    ],
  };
};

export const getFaqSchema = (faqs: Array<{ question: string; answer: string }>) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
};
