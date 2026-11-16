import React from 'react';
import { PageBanner } from '../../components/common/PageBanner';
import { SectionHeading } from '../../components/common/SectionHeading';
import { GalleryGrid } from '../../components/gallery/GalleryGrid';
import { Link } from 'react-router-dom';
import { Calendar, MessageCircle } from 'lucide-react';
import { siteConfig } from '../../data/siteConfig';
import { SEO } from '../../components/common/SEO';
import { getLocalBusinessSchema, getBreadcrumbSchema } from '../../utils/seoSchemas';

export const GalleryPage: React.FC = () => {
  return (
    <div>
      <SEO
        title="Event Decoration Gallery Pondicherry | Mandap, Reception & Birthday Photos"
        description="Browse our portfolio of wedding mandaps, reception stages, birthday themes, and flower decorations crafted in Pondicherry by lak.decor & event maker."
        canonicalUrl="https://www.lakdecor.com/gallery"
        keywords="wedding decoration photos pondicherry, reception stage gallery puducherry, birthday stage photos pondicherry"
        structuredData={[
          getLocalBusinessSchema(),
          getBreadcrumbSchema([
            { name: 'Home', url: 'https://www.lakdecor.com/' },
            { name: 'Gallery', url: 'https://www.lakdecor.com/gallery' },
          ]),
        ]}
      />
      {/* Banner */}
      <PageBanner
        title="Visual Symphony Portfolio"
        subtitle="Explore our gallery of mandaps, floral arches, illuminated stage backdrops, and joyous festive settings."
        badge="OUR GALLERY"
        image="/assets/images/ai-hero-mandap.webp"
        breadcrumbs={[{ label: 'Gallery' }]}
      />

      {/* Main Gallery Section */}
      <section className="py-20 lg:py-28 bg-[#FAF8F4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="MASTERFUL PHOTOGRAPHY"
            title="Every Celebration Has A"
            highlightText="Distinct Aesthetic"
            subtitle="Click on any photograph to launch the interactive full-screen visualizer with detail captions and venue locations."
          />

          <div className="mt-14">
            <GalleryGrid showFilters={true} />
          </div>
        </div>
      </section>

      {/* Booking CTA */}
      <section className="py-20 bg-[#1C1917] text-white text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl font-serif font-medium mb-4">
            Inspired by what you see?
          </h2>
          <p className="text-stone-300 text-sm sm:text-base font-light mb-8">
            Let’s recreate, adapt, or completely customize one of these styles for your own celebration.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="luxury-gradient-btn px-8 py-3.5 rounded-full text-sm font-semibold tracking-wide shadow-md flex items-center gap-2"
            >
              <Calendar className="w-4 h-4 text-pink-200" />
              <span>Book Your Event Decor</span>
            </Link>
            <a
              href={`https://wa.me/91${siteConfig.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3.5 rounded-full text-sm font-semibold text-white bg-white/10 hover:bg-[#25D366] border border-white/20 transition-all flex items-center gap-2"
            >
              <MessageCircle className="w-4 h-4 text-[#25D366]" />
              <span>Instant Chat on WhatsApp</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
