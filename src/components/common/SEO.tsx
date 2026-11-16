import React, { useEffect } from 'react';
import { siteConfig } from '../../data/siteConfig';

export interface SEOProps {
  title?: string;
  description?: string;
  canonical?: string;
  canonicalUrl?: string;
  keywords?: string;
  image?: string;
  type?: 'website' | 'article' | 'business.business';
  schema?: Record<string, any> | Array<Record<string, any>>;
  structuredData?: Record<string, any> | Array<Record<string, any>>;
  noindex?: boolean;
}

const DEFAULT_IMAGE = 'https://www.lakdecor.com/assets/images/real/signature-royal-wedding-mandap.webp';
const BASE_URL = 'https://www.lakdecor.com';

export const SEO: React.FC<SEOProps> = ({
  title,
  description,
  canonical,
  canonicalUrl,
  keywords,
  image = DEFAULT_IMAGE,
  type = 'website',
  schema,
  structuredData,
  noindex = false,
}) => {
  const fullTitle = title
    ? (title.includes('lak.decor') || title.includes(siteConfig.name) ? title : `${title} | ${siteConfig.name}`)
    : `Wedding Decorators in Pondicherry | ${siteConfig.name}`;

  const metaDescription =
    description ||
    'Discover exquisite wedding decorations, royal mandap designs, birthday balloon setups, and bespoke event styling in Pondicherry by lak.decor & event maker. Call +91 95972 65450.';

  const targetCanonical = canonicalUrl || canonical;
  const resolvedCanonicalUrl = targetCanonical
    ? (targetCanonical.startsWith('http') ? targetCanonical : `${BASE_URL}${targetCanonical.startsWith('/') ? targetCanonical : `/${targetCanonical}`}`)
    : `${BASE_URL}/`;

  const ogImage = image.startsWith('http') ? image : `${BASE_URL}${image.startsWith('/') ? image : `/${image}`}`;
  const activeSchema = structuredData || schema;

  useEffect(() => {
    // 1. Update Document Title
    document.title = fullTitle;

    // Helper to set or create meta tag
    const setMetaTag = (attribute: string, value: string, content: string) => {
      let element = document.querySelector(`meta[${attribute}="${value}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attribute, value);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    // 2. Standard Meta Tags
    setMetaTag('name', 'description', metaDescription);
    setMetaTag('name', 'robots', noindex ? 'noindex, nofollow' : 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1');
    setMetaTag('name', 'googlebot', noindex ? 'noindex, nofollow' : 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1');
    setMetaTag('name', 'bingbot', noindex ? 'noindex, nofollow' : 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1');
    setMetaTag('name', 'author', siteConfig.name);
    setMetaTag('name', 'referrer', 'strict-origin-when-cross-origin');
    if (keywords) {
      setMetaTag('name', 'keywords', keywords);
    }
    setMetaTag('name', 'geo.region', 'IN-PY');
    setMetaTag('name', 'geo.placename', 'Pondicherry, Puducherry');
    setMetaTag('name', 'geo.position', '12.0238;79.8542');
    setMetaTag('name', 'ICBM', '12.0238, 79.8542');

    // 3. Open Graph Tags
    setMetaTag('property', 'og:type', type);
    setMetaTag('property', 'og:title', fullTitle);
    setMetaTag('property', 'og:description', metaDescription);
    setMetaTag('property', 'og:url', resolvedCanonicalUrl);
    setMetaTag('property', 'og:image', ogImage);
    setMetaTag('property', 'og:image:secure_url', ogImage);
    setMetaTag('property', 'og:image:width', '1200');
    setMetaTag('property', 'og:image:height', '630');
    setMetaTag('property', 'og:image:type', 'image/webp');
    setMetaTag('property', 'og:image:alt', `${fullTitle} - Event Decor`);
    setMetaTag('property', 'og:site_name', siteConfig.name);
    setMetaTag('property', 'og:locale', 'en_IN');

    // 4. Twitter Card Tags
    setMetaTag('name', 'twitter:card', 'summary_large_image');
    setMetaTag('name', 'twitter:title', fullTitle);
    setMetaTag('name', 'twitter:description', metaDescription);
    setMetaTag('name', 'twitter:image', ogImage);
    setMetaTag('name', 'twitter:image:alt', `${fullTitle} - Event Decor`);
    setMetaTag('name', 'twitter:site', '@lakdecors');
    setMetaTag('name', 'twitter:creator', '@lakdecors');

    // 5. Canonical Link Tag
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', resolvedCanonicalUrl);

    // 6. JSON-LD Structured Data Script
    const existingScript = document.getElementById('json-ld-schema');
    if (existingScript) {
      existingScript.remove();
    }

    if (activeSchema) {
      const script = document.createElement('script');
      script.id = 'json-ld-schema';
      script.type = 'application/ld+json';
      script.textContent = JSON.stringify(activeSchema);
      document.head.appendChild(script);
    }

    return () => {
      // Cleanup script on unmount
      const script = document.getElementById('json-ld-schema');
      if (script) script.remove();
    };
  }, [fullTitle, metaDescription, resolvedCanonicalUrl, ogImage, type, activeSchema, noindex, keywords]);

  return null;
};
