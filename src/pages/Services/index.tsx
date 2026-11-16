import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, Sparkles, Calendar, MessageCircle } from 'lucide-react';
import { servicesData } from '../../data/services';
import { siteConfig } from '../../data/siteConfig';
import { PageBanner } from '../../components/common/PageBanner';
import { SectionHeading } from '../../components/common/SectionHeading';
import { SpotlightCard } from '../../components/animations/SpotlightCard';
import { SEO } from '../../components/common/SEO';
import { getLocalBusinessSchema, getBreadcrumbSchema } from '../../utils/seoSchemas';

export const ServicesPage: React.FC = () => {
  const [filter, setFilter] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Celebrations' },
    { id: 'weddings', label: 'Weddings & Receptions' },
    { id: 'birthdays', label: 'Birthdays & Baby Showers' },
    { id: 'traditional', label: 'Haldi & Traditional' },
    { id: 'corporate', label: 'Corporate & Custom' },
  ];

  const filteredServices = servicesData.filter((service) => {
    if (filter === 'all') return true;
    if (filter === 'weddings')
      return (
        service.slug === 'wedding-decorations' ||
        service.slug === 'reception-decorations' ||
        service.slug === 'engagement-ceremonies' ||
        service.slug === 'anniversary-decorations'
      );
    if (filter === 'birthdays')
      return (
        service.slug === 'birthday-celebrations' ||
        service.slug === 'baby-shower-events'
      );
    if (filter === 'traditional')
      return (
        service.slug === 'haldi-mehendi-decorations' ||
        service.slug === 'floral-decorations'
      );
    if (filter === 'corporate')
      return (
        service.slug === 'corporate-event-decorations' ||
        service.slug === 'custom-theme-decorations'
      );
    return true;
  });

  return (
    <div>
      <SEO
        title="Event & Wedding Decoration Services in Pondicherry | lak.decor & event maker"
        description="Comprehensive decoration services in Pondicherry: luxury wedding mandaps, engagement stages, birthday theme backdrops, reception setups, and traditional flower decor across Puducherry."
        canonicalUrl="https://www.lakdecor.com/services"
        keywords="wedding decoration services pondicherry, event decorators pondicherry, reception stage decoration puducherry, birthday party decorators pondicherry"
        structuredData={[
          getLocalBusinessSchema(),
          getBreadcrumbSchema([
            { name: 'Home', url: 'https://www.lakdecor.com/' },
            { name: 'Services', url: 'https://www.lakdecor.com/services' },
          ]),
        ]}
      />
      {/* Banner */}
      <PageBanner
        title="Bespoke Event Decoration Services"
        subtitle="From grand traditional South Indian wedding mandaps to chic contemporary celebrations, we create unforgettable visual magic."
        badge="OUR CAPABILITIES"
        image="/assets/images/ai-reception-stage.webp"
        breadcrumbs={[{ label: 'Services' }]}
      />

      {/* Services List Section */}
      <section className="py-20 lg:py-28 bg-[#FAF8F4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="10 SIGNATURE CATEGORIES"
            title="Decor Crafted For Life’s"
            highlightText="Most Meaningful Milestones"
            subtitle="Every service is completely custom-tailored with temperature-controlled exotic flowers, structural safety, and elegant styling."
          />

          {/* Filter Tabs */}
          <div className="mt-10 flex flex-wrap justify-center gap-2 sm:gap-3">
            {categories.map((c) => (
              <button
                key={c.id}
                onClick={() => setFilter(c.id)}
                className={`px-5 py-2 rounded-full text-xs sm:text-sm font-medium transition-all ${
                  filter === c.id
                    ? 'luxury-gradient-btn shadow-md text-white'
                    : 'bg-white text-stone-600 border border-stone-200 hover:border-[#B18B59]'
                }`}
              >
                {c.label}
              </button>
            ))}
          </div>

          {/* Services Detailed Cards Grid */}
          <div className="mt-14 space-y-12">
            {filteredServices.map((service, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <SpotlightCard
                  key={service.id}
                  className="bg-white rounded-3xl border border-stone-200/80 shadow-lg overflow-hidden group"
                >
                  <div
                    className={`grid grid-cols-1 lg:grid-cols-12 items-center ${
                      !isEven ? 'lg:flex-row-reverse' : ''
                    }`}
                  >
                    {/* Image Column (5 or 6 cols) */}
                    <div
                      className={`lg:col-span-5 h-80 sm:h-96 lg:h-full relative overflow-hidden bg-stone-100 ${
                        !isEven ? 'lg:order-2' : ''
                      }`}
                    >
                      <img
                        src={service.heroImage}
                        alt={service.title}
                        className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60" />

                      <div className="absolute top-4 left-4">
                        <span className="px-3.5 py-1 rounded-full text-xs font-semibold bg-white/90 backdrop-blur-md text-[#7A245A] shadow-sm">
                          0{idx + 1} • {service.tags[0]}
                        </span>
                      </div>
                    </div>

                    {/* Content Column (7 cols) */}
                    <div
                      className={`lg:col-span-7 p-6 sm:p-10 lg:p-12 space-y-5 ${
                        !isEven ? 'lg:order-1' : ''
                      }`}
                    >
                      <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#B18B59]">
                        <Sparkles className="w-3.5 h-3.5" />
                        <span>Signature Staging</span>
                      </div>

                      <h3 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-medium text-[#29251F] group-hover:text-[#7A245A] transition-colors">
                        {service.title}
                      </h3>

                      <p className="text-sm sm:text-base text-stone-600 font-light leading-relaxed">
                        {service.fullDescription}
                      </p>

                      {/* Inclusions / Highlights */}
                      <div className="pt-2">
                        <span className="text-xs font-semibold uppercase tracking-wider text-[#4A443D] block mb-3">
                          What is Included:
                        </span>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-stone-600">
                          {service.features.slice(0, 4).map((f) => (
                            <div key={f} className="flex items-center gap-2">
                              <CheckCircle2 className="w-4 h-4 text-[#B18B59] flex-shrink-0" />
                              <span>{f}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* CTAs */}
                      <div className="pt-4 flex flex-wrap items-center gap-4">
                        <Link
                          to={`/services/${service.slug}`}
                          className="luxury-gradient-btn px-6 py-3 rounded-full text-xs sm:text-sm font-semibold tracking-wide flex items-center gap-2 shadow-md"
                        >
                          <span>Explore Themes & Photos</span>
                          <ArrowRight className="w-4 h-4" />
                        </Link>

                        <Link
                          to="/contact"
                          className="px-6 py-3 rounded-full text-xs sm:text-sm font-semibold text-[#29251F] bg-[#FAF8F4] border border-stone-200 hover:border-[#B18B59] hover:text-[#7A245A] transition-all"
                        >
                          Enquire for this Service
                        </Link>
                      </div>
                    </div>
                  </div>
                </SpotlightCard>
              );
            })}
          </div>
        </div>
      </section>

      {/* Custom Consultation CTA */}
      <section className="py-20 bg-[#1C1917] text-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <span className="text-xs font-semibold uppercase tracking-widest text-amber-200 block mb-2">
            HAVE A UNIQUE CONCEPT IN MIND?
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-medium mb-4">
            We Design Custom Dream Setups From Scratch
          </h2>
          <p className="text-stone-300 text-sm sm:text-base font-light max-w-2xl mx-auto mb-8">
            Tell us about your venue dimensions, guest expectations, and dream aesthetic. Our 3D visualization team will map out the possibilities.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="luxury-gradient-btn px-8 py-3.5 rounded-full text-sm font-semibold shadow-lg"
            >
              Get A Custom Quotation
            </Link>
            <a
              href={`https://wa.me/91${siteConfig.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3.5 rounded-full text-sm font-semibold text-white bg-white/10 hover:bg-[#25D366] border border-white/20 transition-all flex items-center gap-2"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp Us: {siteConfig.phoneDisplay}</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
