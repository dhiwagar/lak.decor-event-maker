import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import {
  MapPin,
  Calendar,
  MessageCircle,
  Phone,
  CheckCircle2,
  Sparkles,
  HelpCircle,
  ChevronDown,
  Maximize2,
  Building,
} from 'lucide-react';
import { localSeoPages } from '../../data/localSeoData';
import { siteConfig } from '../../data/siteConfig';
import { GalleryItem } from '../../types';
import { SEO } from '../../components/common/SEO';
import { PageBanner } from '../../components/common/PageBanner';
import { SectionHeading } from '../../components/common/SectionHeading';
import { SpotlightCard } from '../../components/animations/SpotlightCard';
import { GalleryLightbox } from '../../components/gallery/GalleryLightbox';
import { EventEnquiryForm } from '../../components/forms/EventEnquiryForm';
import {
  getLocalBusinessSchema,
  getServiceSchema,
  getBreadcrumbSchema,
  getFaqSchema,
} from '../../utils/seoSchemas';

interface LocalSeoPageProps {
  customSlug?: string;
}

export const LocalSeoPage: React.FC<LocalSeoPageProps> = ({ customSlug }) => {
  const { slug: paramSlug } = useParams<{ slug: string }>();
  const activeSlug = customSlug || paramSlug || 'wedding-decoration-pondicherry';
  const pageData = localSeoPages[activeSlug] || localSeoPages['wedding-decoration-pondicherry'];

  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [selectedGalleryImg, setSelectedGalleryImg] = useState<any | null>(null);

  // Generate Compound JSON-LD Schema
  const schemaList = [
    getLocalBusinessSchema(),
    getServiceSchema(pageData.h1, pageData.metaDescription, pageData.path, pageData.heroImage),
    getBreadcrumbSchema([
      { name: 'Home', url: '/' },
      { name: 'Services', url: '/services' },
      { name: pageData.h1, url: pageData.path },
    ]),
    getFaqSchema(pageData.faqs),
  ];

  const getCategoryFromSlug = (slug: string): GalleryItem['category'] => {
    if (slug.includes('birthday')) return 'birthdays';
    if (slug.includes('engagement')) return 'engagements';
    if (slug.includes('reception')) return 'receptions';
    return 'weddings';
  };

  const galleryItems: GalleryItem[] = pageData.galleryImages.map((img, i) => ({
    id: `loc-gal-${i}`,
    title: img.title,
    caption: img.caption,
    category: getCategoryFromSlug(activeSlug),
    categoryLabel: 'Pondicherry',
    image: img.url,
    aspect: 'wide' as const,
    location: 'Pondicherry',
  }));

  const handleNext = () => {
    if (!selectedGalleryImg) return;
    const idx = galleryItems.findIndex((g) => g.id === selectedGalleryImg.id);
    const nextIdx = (idx + 1) % galleryItems.length;
    setSelectedGalleryImg(galleryItems[nextIdx]);
  };

  const handlePrev = () => {
    if (!selectedGalleryImg) return;
    const idx = galleryItems.findIndex((g) => g.id === selectedGalleryImg.id);
    const prevIdx = idx === 0 ? galleryItems.length - 1 : idx - 1;
    setSelectedGalleryImg(galleryItems[prevIdx]);
  };

  const whatsappMessage = encodeURIComponent(
    `Hello lak.decor & event maker, I would like to enquire about ${pageData.h1}. Please share your packages and availability.`
  );

  return (
    <div className="min-h-screen bg-[#FAF8F4]">
      {/* 1. Dynamic SEO Metadata & Schema */}
      <SEO
        title={pageData.metaTitle}
        description={pageData.metaDescription}
        canonical={pageData.path}
        image={pageData.heroImage}
        schema={schemaList}
      />

      {/* 2. Hero Page Banner */}
      <PageBanner
        title={pageData.h1}
        subtitle={pageData.leadParagraph}
        badge={pageData.badge}
        image={pageData.heroImage}
        breadcrumbs={[
          { label: 'Home', path: '/' },
          { label: 'Pondicherry Services' },
        ]}
      />

      {/* 3. Quick Local Trust Bar */}
      <section className="bg-white border-b border-stone-200/80 py-6">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#FAF8F4] border border-stone-200 flex items-center justify-center text-[#B18B59] flex-shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-stone-500 block">
                  Service Area
                </span>
                <span className="text-sm font-serif font-bold text-[#29251F]">
                  Pondicherry, Puducherry & ECR Coastal Corridor
                </span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <a
                href={`tel:${siteConfig.phone}`}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-stone-300 text-xs sm:text-sm font-semibold text-[#29251F] hover:border-[#7A245A] hover:text-[#7A245A] transition-colors bg-white shadow-xs"
              >
                <Phone className="w-4 h-4 text-[#B18B59]" />
                <span>Call +91 95972 65450</span>
              </a>

              <a
                href={`https://wa.me/91${siteConfig.whatsapp}?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white text-xs sm:text-sm font-semibold shadow-sm hover:shadow-md transition-all"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp Enquiry</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Service Overview & Inclusions */}
      <section className="py-16 sm:py-24">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Left 7 cols: Features & Venue Details */}
            <div className="lg:col-span-7 space-y-10">
              <div>
                <span className="text-xs font-bold tracking-[0.25em] uppercase text-[#88245D] block mb-2">
                  TAILORED FOR PUDUCHERRY CELEBRATIONS
                </span>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#231E26] leading-tight mb-4">
                  Every Detail Considered For Your Special Day
                </h2>
                <p className="text-stone-600 text-sm sm:text-base leading-relaxed font-light">
                  {pageData.leadParagraph}
                </p>
              </div>

              {/* 3 Value Pillars */}
              <div className="grid grid-cols-1 gap-6">
                {pageData.features.map((f, i) => (
                  <SpotlightCard
                    key={i}
                    className="p-6 sm:p-7 rounded-2xl bg-white border border-stone-200/80 shadow-xs"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-xl bg-[#FAF8F4] border border-stone-200 text-[#7A245A] flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Sparkles className="w-5 h-5 text-[#B18B59]" />
                      </div>
                      <div>
                        <h3 className="text-lg font-serif font-bold text-[#29251F] mb-1.5">
                          {f.title}
                        </h3>
                        <p className="text-xs sm:text-sm text-stone-600 font-light leading-relaxed">
                          {f.description}
                        </p>
                      </div>
                    </div>
                  </SpotlightCard>
                ))}
              </div>

              {/* Popular Local Venues */}
              <div className="bg-[#FAF7F5] rounded-3xl p-6 sm:p-8 border border-stone-200/80">
                <div className="flex items-center gap-2 mb-4">
                  <Building className="w-5 h-5 text-[#88245D]" />
                  <h3 className="text-lg sm:text-xl font-serif font-bold text-[#231E26]">
                    Frequent Venues & Locations We Decorate In Pondicherry
                  </h3>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {pageData.popularVenues.map((venue, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs sm:text-sm text-stone-700">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                      <span>{venue}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* What is Included Checklist */}
              <div>
                <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#231E26] mb-4">
                  What is Included in Our Package
                </h3>
                <div className="space-y-2.5">
                  {pageData.keyInclusions.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-3 p-3.5 rounded-xl bg-white border border-stone-200/60"
                    >
                      <CheckCircle2 className="w-4 h-4 text-[#88245D] flex-shrink-0 mt-0.5" />
                      <span className="text-xs sm:text-sm text-stone-700 font-medium">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right 5 cols: Event Booking Form Card */}
            <div className="lg:col-span-5 lg:sticky lg:top-28">
              <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-xl border border-stone-200/80">
                <div className="text-center mb-6">
                  <span className="text-[10px] font-bold tracking-[0.25em] uppercase text-[#88245D] block mb-1">
                    FAST WHATSAPP QUOTE
                  </span>
                  <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#231E26]">
                    Enquire for Your Date
                  </h3>
                  <p className="text-xs text-stone-500 mt-1">
                    Fill out this form to receive a customized WhatsApp proposal directly from our designers.
                  </p>
                </div>

                <EventEnquiryForm preselectedEventType={pageData.h1} />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 5. Real Event Gallery Showcase */}
      <section className="py-16 sm:py-20 bg-white border-y border-stone-200/80">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="REAL CELEBRATIONS"
            title="Recent Setups In"
            highlightText="Pondicherry & Puducherry"
            subtitle="Authentic event photographs crafted by lak.decor & event maker with 100% verified execution."
          />

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {galleryItems.map((item) => (
              <div
                key={item.id}
                className="group rounded-3xl overflow-hidden bg-white border border-stone-200/80 shadow-xs hover:shadow-xl transition-all duration-500 cursor-pointer flex flex-col"
                onClick={() => setSelectedGalleryImg(item)}
              >
                <div className="relative h-64 overflow-hidden bg-stone-100">
                  <img
                    src={item.image}
                    alt={`${item.title} — ${pageData.h1}`}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                </div>

                <div className="p-4 flex items-center justify-between gap-3 bg-white">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#B18B59] block">
                      Pondicherry Setup
                    </span>
                    <h4 className="text-sm font-serif font-semibold text-[#29251F] group-hover:text-[#7A245A] transition-colors truncate">
                      {item.title}
                    </h4>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-[#FAF8F4] border border-stone-200 flex items-center justify-center text-stone-500 group-hover:text-[#7A245A] flex-shrink-0">
                    <Maximize2 className="w-3.5 h-3.5" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              to="/gallery"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-stone-300 text-xs sm:text-sm font-semibold text-[#29251F] hover:border-[#7A245A] hover:text-[#7A245A] transition-all bg-[#FAF8F4]"
            >
              <span>Explore Complete 42+ Event Photo Gallery &rarr;</span>
            </Link>
          </div>
        </div>
      </section>

      {/* 6. Local FAQ Accordion */}
      <section className="py-16 sm:py-24 bg-[#FAF8F4]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.25em] uppercase text-[#88245D] mb-2">
              <HelpCircle className="w-4 h-4" />
              <span>FREQUENTLY ASKED QUESTIONS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#231E26]">
              Planning Your Event in Pondicherry
            </h2>
            <p className="text-xs sm:text-sm text-stone-600 mt-2">
              Clear answers to the most common questions our clients ask before reserving their dates.
            </p>
          </div>

          <div className="space-y-4">
            {pageData.faqs.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div
                  key={idx}
                  className="rounded-2xl bg-white border border-stone-200/80 overflow-hidden shadow-xs transition-all"
                >
                  <button
                    onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                    className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 font-serif text-base sm:text-lg font-bold text-[#29251F] hover:text-[#7A245A] transition-colors"
                  >
                    <span>{faq.question}</span>
                    <ChevronDown
                      className={`w-5 h-5 text-[#B18B59] transition-transform duration-300 flex-shrink-0 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-5 pt-1 text-xs sm:text-sm text-stone-600 leading-relaxed font-light border-t border-stone-100">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Direct Assistance CTA */}
          <div className="mt-12 text-center p-6 rounded-2xl bg-white border border-stone-200/80">
            <h4 className="font-serif font-bold text-lg text-[#29251F] mb-1">
              Have a specific venue requirement or Muhurtham query?
            </h4>
            <p className="text-xs text-stone-500 mb-4">
              Speak directly with our senior event production coordinator in Pondicherry.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <a
                href={`tel:${siteConfig.phone}`}
                className="px-5 py-2.5 rounded-full bg-[#FAF8F4] border border-stone-300 text-xs font-semibold text-[#29251F] hover:border-[#7A245A] hover:text-[#7A245A] transition-colors"
              >
                Call +91 95972 65450
              </a>
              <a
                href={`https://wa.me/91${siteConfig.whatsapp}?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold transition-colors"
              >
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      <GalleryLightbox
        item={selectedGalleryImg}
        items={galleryItems}
        onClose={() => setSelectedGalleryImg(null)}
        onNext={handleNext}
        onPrev={handlePrev}
      />
    </div>
  );
};
