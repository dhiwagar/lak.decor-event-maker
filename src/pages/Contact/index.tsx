import React from 'react';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageCircle,
  Sparkles,
  ShieldCheck,
  Flower2,
  Calendar,
} from 'lucide-react';
import { siteConfig } from '../../data/siteConfig';
import { PageBanner } from '../../components/common/PageBanner';
import { SectionHeading } from '../../components/common/SectionHeading';
import { EventEnquiryForm } from '../../components/forms/EventEnquiryForm';
import { SEO } from '../../components/common/SEO';
import { getLocalBusinessSchema, getBreadcrumbSchema } from '../../utils/seoSchemas';

export const ContactPage: React.FC = () => {
  return (
    <div>
      <SEO
        title="Contact Wedding & Event Decorators in Pondicherry | lak.decor & event maker"
        description="Get in touch with lak.decor & event maker for wedding, birthday, and celebration decorations in Pondicherry. Studio at Ganapathichettikulam. Call +91 95972 65450 or book via WhatsApp."
        canonicalUrl="https://www.lakdecor.com/contact"
        keywords="contact wedding decorator pondicherry, book event decorator puducherry, ganapathichettikulam stage decorator"
        structuredData={[
          getLocalBusinessSchema(),
          getBreadcrumbSchema([
            { name: 'Home', url: 'https://www.lakdecor.com/' },
            { name: 'Contact', url: 'https://www.lakdecor.com/contact' },
          ]),
        ]}
      />
      {/* Banner */}
      <PageBanner
        title="Let’s Create Something Beautiful Together"
        subtitle="Reserve your date and explore custom themes for your celebration."
        badge="GET IN TOUCH"
        image="/assets/images/ai-hero-mandap.webp"
        breadcrumbs={[{ label: 'Contact & Bookings' }]}
      />

      {/* Main Contact & Form Section */}
      <section className="py-20 lg:py-28 bg-[#FAF8F4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="EVENT RESERVATIONS"
            title="Book Your Celebration"
            highlightText="Directly With Our Stylist"
            subtitle="Fill out the brief below to generate a preformatted WhatsApp proposal instantly sent to our design desk."
          />

          <div className="mt-14 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left: Contact Info & Studio Details (5 cols) */}
            <div className="lg:col-span-5 space-y-8">
              {/* Studio Info Card */}
              <div className="bg-white rounded-3xl p-8 border border-stone-200/80 shadow-lg space-y-6">
                <div>
                  <span className="text-xs font-semibold uppercase tracking-widest text-[#B18B59] block mb-1">
                    GANAPATHICHETTIKULAM STUDIO
                  </span>
                  <h3 className="text-2xl font-serif font-medium text-[#29251F]">
                    lak.decor & event maker
                  </h3>
                  <p className="text-xs text-stone-500 mt-1">
                    Bespoke Wedding & Event Decoration Studio
                  </p>
                </div>

                <div className="space-y-4 pt-2 border-t border-stone-100 text-sm">
                  {/* Phone */}
                  <a
                    href={`tel:${siteConfig.phone}`}
                    className="flex items-start gap-3 text-stone-700 hover:text-[#7A245A] transition-colors group"
                  >
                    <div className="w-9 h-9 rounded-xl bg-[#FAF8F4] border border-stone-200 text-[#7A245A] flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-xs text-stone-400 block">Direct Hotline</span>
                      <span className="font-semibold text-base text-[#29251F]">
                        {siteConfig.phoneDisplay}
                      </span>
                    </div>
                  </a>

                  {/* WhatsApp */}
                  <a
                    href={`https://wa.me/91${siteConfig.whatsapp}?text=${encodeURIComponent(
                      'Hello lak.decor & event maker, I would like to enquire about decor services.'
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-3 text-stone-700 hover:text-[#25D366] transition-colors group"
                  >
                    <div className="w-9 h-9 rounded-xl bg-emerald-50 border border-emerald-200 text-[#25D366] flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                      <MessageCircle className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-xs text-stone-400 block">WhatsApp Chat</span>
                      <span className="font-semibold text-base text-[#29251F]">
                        {siteConfig.whatsappDisplay}
                      </span>
                    </div>
                  </a>

                  {/* Email */}
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="flex items-start gap-3 text-stone-700 hover:text-[#7A245A] transition-colors group"
                  >
                    <div className="w-9 h-9 rounded-xl bg-[#FAF8F4] border border-stone-200 text-[#B18B59] flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-xs text-stone-400 block">Email Us</span>
                      <span className="font-medium text-stone-800">
                        {siteConfig.email}
                      </span>
                    </div>
                  </a>

                  {/* Address */}
                  <div className="flex items-start gap-3 text-stone-700">
                    <div className="w-9 h-9 rounded-xl bg-[#FAF8F4] border border-stone-200 text-[#7A245A] flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-xs text-stone-400 block">Studio Address</span>
                      <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">
                        {siteConfig.address.line1}, {siteConfig.address.line2},{' '}
                        {siteConfig.address.city}, {siteConfig.address.state} -{' '}
                        {siteConfig.address.pincode}
                      </p>
                    </div>
                  </div>

                  {/* Operating Hours */}
                  <div className="flex items-start gap-3 text-stone-700">
                    <div className="w-9 h-9 rounded-xl bg-[#FAF8F4] border border-stone-200 text-[#B18B59] flex items-center justify-center flex-shrink-0">
                      <Clock className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-xs text-stone-400 block">Consultation Hours</span>
                      <p className="text-xs sm:text-sm font-medium text-stone-800">
                        {siteConfig.workingHours}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-[#FAF8F4] rounded-2xl border border-stone-200/80 text-xs text-stone-600 flex items-center gap-2.5">
                  <ShieldCheck className="w-5 h-5 text-[#7A245A] flex-shrink-0" />
                  <span>
                    Direct WhatsApp response within 15 minutes during studio hours.
                  </span>
                </div>
              </div>

              {/* Quick Map Embed Container */}
              <div className="rounded-3xl overflow-hidden shadow-lg border border-stone-200/80 h-64 bg-stone-100">
                <iframe
                  title="lak.decor Studio Location"
                  src={siteConfig.googleMapsEmbedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="filter grayscale contrast-125"
                />
              </div>
            </div>

            {/* Right: Interactive Enquiry Form (7 cols) */}
            <div className="lg:col-span-7">
              <EventEnquiryForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
