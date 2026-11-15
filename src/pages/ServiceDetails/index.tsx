import React, { useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import {
  CheckCircle2,
  Sparkles,
  Calendar,
  Clock,
  ArrowRight,
  HelpCircle,
  MessageCircle,
  Phone,
  Maximize2,
} from 'lucide-react';
import { servicesData } from '../../data/services';
import { siteConfig } from '../../data/siteConfig';
import { PageBanner } from '../../components/common/PageBanner';
import { SectionHeading } from '../../components/common/SectionHeading';
import { EventEnquiryForm } from '../../components/forms/EventEnquiryForm';
import { SpotlightCard } from '../../components/animations/SpotlightCard';

export const ServiceDetailsPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const service = servicesData.find((s) => s.slug === slug);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [selectedGalleryImg, setSelectedGalleryImg] = useState<string | null>(null);

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  return (
    <div>
      {/* Page Banner */}
      <PageBanner
        title={service.title}
        subtitle={service.shortDescription}
        badge="SIGNATURE SERVICE"
        image={service.heroImage}
        breadcrumbs={[
          { label: 'Services', path: '/services' },
          { label: service.title },
        ]}
      />

      {/* Overview & Inclusions */}
      <section className="py-20 lg:py-28 bg-[#FAF8F4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-8">
              <div>
                <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#B18B59] block mb-2">
                  THE ARTISTRY & VISION
                </span>
                <h2 className="text-3xl sm:text-4xl font-serif font-medium text-[#29251F] leading-tight">
                  Crafted With Uncompromising <br />
                  <span className="font-script text-4xl sm:text-5xl text-[#7A245A] font-normal">
                    Elegance & Perfection
                  </span>
                </h2>
                <p className="text-base text-stone-600 font-light leading-relaxed mt-4">
                  {service.fullDescription}
                </p>
              </div>

              {/* What is Included Feature Grid */}
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200/80 shadow-md">
                <h3 className="text-xl font-serif font-medium text-[#29251F] mb-4 flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-[#B18B59]" />
                  What We Provide in This Service:
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  {service.features.map((feature, i) => (
                    <div key={i} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-[#7A245A] mt-1 flex-shrink-0" />
                      <span className="text-xs sm:text-sm text-stone-600 font-light leading-snug">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Popular Themes Cards */}
              {service.popularThemes && service.popularThemes.length > 0 && (
                <div>
                  <h3 className="text-2xl font-serif font-medium text-[#29251F] mb-6">
                    Popular Themes & Color Palettes:
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {service.popularThemes.map((theme, i) => (
                      <div
                        key={i}
                        className="bg-white rounded-2xl overflow-hidden border border-stone-200/80 shadow-sm hover:shadow-md transition-shadow group"
                      >
                        <div className="h-44 overflow-hidden bg-stone-100">
                          <img
                            src={theme.image}
                            alt={theme.name}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                        </div>
                        <div className="p-4">
                          <h4 className="text-base font-serif font-semibold text-[#29251F] group-hover:text-[#7A245A] transition-colors">
                            {theme.name}
                          </h4>
                          <p className="text-xs text-stone-500 font-light mt-1.5 leading-relaxed">
                            {theme.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Planning Timeline */}
              {service.planningTimeline && (
                <div className="bg-[#F6F1EA] rounded-3xl p-6 sm:p-8 border border-stone-200">
                  <h3 className="text-xl font-serif font-medium text-[#29251F] mb-5 flex items-center gap-2">
                    <Clock className="w-5 h-5 text-[#B18B59]" />
                    Planning & Execution Journey:
                  </h3>
                  <div className="space-y-4">
                    {service.planningTimeline.map((item, i) => (
                      <div
                        key={i}
                        className="flex items-start gap-4 p-3.5 bg-white/80 rounded-xl"
                      >
                        <span className="px-2.5 py-1 rounded-md bg-[#7A245A] text-white text-xs font-semibold">
                          {item.duration}
                        </span>
                        <div>
                          <h4 className="text-sm font-semibold text-[#29251F]">
                            {item.phase}
                          </h4>
                          <p className="text-xs text-stone-600 mt-0.5">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Right Sticky Column: Direct Booking Form */}
            <div className="lg:col-span-5 sticky top-28 space-y-6">
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200/80 shadow-xl">
                <div className="text-center mb-6">
                  <span className="text-xs font-semibold uppercase tracking-widest text-[#B18B59] block mb-1">
                    BOOK THIS THEME
                  </span>
                  <h3 className="text-2xl font-serif font-medium text-[#29251F]">
                    Plan Your {service.title}
                  </h3>
                  <p className="text-xs text-stone-500 mt-1">
                    Send your details for an instant WhatsApp consultation
                  </p>
                </div>

                <EventEnquiryForm preselectedEventType={service.title} />
              </div>

              {/* Quick Call Box */}
              <div className="p-5 rounded-2xl bg-[#1C1917] text-white flex items-center justify-between">
                <div>
                  <span className="text-[11px] text-amber-200 block">
                    Have questions? Call directly:
                  </span>
                  <a
                    href={`tel:${siteConfig.phone}`}
                    className="text-base font-serif font-semibold text-white hover:text-amber-200 flex items-center gap-1.5"
                  >
                    <Phone className="w-4 h-4 text-[#B18B59]" />
                    <span>{siteConfig.phoneDisplay}</span>
                  </a>
                </div>
                <a
                  href={`https://wa.me/91${siteConfig.whatsapp}?text=${encodeURIComponent(
                    `Hello lak.decor, I am interested in ${service.title}.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-[#25D366] text-white flex items-center justify-center hover:scale-110 transition-transform shadow-md"
                  aria-label="WhatsApp"
                >
                  <MessageCircle className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Showcase for this Service */}
      {service.galleryImages && service.galleryImages.length > 0 && (
        <section className="py-20 bg-[#F6F1EA]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeading
              badge="INSPIRATION & PORTFOLIO"
              title="Recent Celebrations"
              highlightText="In This Category"
              subtitle="Browse through real event setups created by our specialized team."
            />

            <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {service.galleryImages.map((img, i) => (
                <div
                  key={i}
                  className="relative h-64 rounded-2xl overflow-hidden shadow-md group cursor-pointer bg-stone-100"
                  onClick={() => setSelectedGalleryImg(img)}
                >
                  <img
                    src={img}
                    alt={`${service.title} gallery ${i + 1}`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FAQ Section */}
      {service.faq && service.faq.length > 0 && (
        <section className="py-20 bg-[#FAF8F4]">
          <div className="max-w-3xl mx-auto px-4 sm:px-6">
            <SectionHeading
              badge="FREQUENTLY ASKED"
              title="Common Questions About"
              highlightText={service.title}
            />

            <div className="mt-10 space-y-4">
              {service.faq.map((item, i) => (
                <div
                  key={i}
                  className="bg-white rounded-2xl border border-stone-200/80 overflow-hidden shadow-sm"
                >
                  <button
                    onClick={() => toggleFaq(i)}
                    className="w-full p-5 text-left flex items-center justify-between gap-4 font-serif font-medium text-lg text-[#29251F] hover:text-[#7A245A] transition-colors"
                  >
                    <span>{item.question}</span>
                    <span className="text-xl text-[#B18B59]">
                      {activeFaq === i ? '−' : '+'}
                    </span>
                  </button>
                  {activeFaq === i && (
                    <div className="px-5 pb-5 text-sm text-stone-600 font-light leading-relaxed border-t border-stone-100 pt-3">
                      {item.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Lightbox for single clicked image */}
      {selectedGalleryImg && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
          onClick={() => setSelectedGalleryImg(null)}
        >
          <img
            src={selectedGalleryImg}
            alt="Preview"
            className="max-h-[85vh] max-w-full rounded-2xl shadow-2xl object-contain"
          />
        </div>
      )}
    </div>
  );
};
