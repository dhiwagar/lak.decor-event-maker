import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Star,
  Quote,
  CheckCircle,
  MapPin,
  Sparkles,
  Calendar,
  MessageCircle,
} from 'lucide-react';
import { testimonialsData } from '../../data/testimonials';
import { siteConfig } from '../../data/siteConfig';
import { PageBanner } from '../../components/common/PageBanner';
import { SectionHeading } from '../../components/common/SectionHeading';
import { TestimonialSlider } from '../../components/common/TestimonialSlider';
import { SpotlightCard } from '../../components/animations/SpotlightCard';

export const TestimonialsPage: React.FC = () => {
  const [filter, setFilter] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Reviews' },
    { id: 'weddings', label: 'Weddings & Receptions' },
    { id: 'birthdays', label: 'Birthdays' },
    { id: 'traditional', label: 'Traditional Ceremonies' },
  ];

  const filtered = testimonialsData.filter((t) => {
    if (filter === 'all') return true;
    if (filter === 'weddings')
      return t.eventType.toLowerCase().includes('wedding') || t.eventType.toLowerCase().includes('reception') || t.eventType.toLowerCase().includes('engagement');
    if (filter === 'birthdays')
      return t.eventType.toLowerCase().includes('birthday');
    if (filter === 'traditional')
      return t.eventType.toLowerCase().includes('valaikappu') || t.eventType.toLowerCase().includes('tamil');
    return true;
  });

  return (
    <div>
      {/* Banner */}
      <PageBanner
        title="Client Stories & Celebratory Love"
        subtitle="Read real words of joy from brides, grooms, and families whose milestone moments we have had the honor to elevate."
        badge="EXPERIENCE & REVIEWS"
        image="/assets/images/ai-reception-stage.jpg"
        breadcrumbs={[{ label: 'Testimonials' }]}
      />

      {/* Featured Big Editorial Quote Carousel */}
      <section className="py-20 bg-[#FAF8F4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="FEATURED MEMORY"
            title="Voices Of Our"
            highlightText="Cherished Families"
            subtitle="Demonstration client experiences reflecting the passion and dedication invested into every celebration."
          />

          <div className="mt-14">
            <TestimonialSlider />
          </div>
        </div>
      </section>

      {/* Reviews Grid */}
      <section className="py-20 lg:py-28 bg-[#F6F1EA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h3 className="text-3xl font-serif font-medium text-[#29251F]">
              Browse All Experiences
            </h3>
            <div className="mt-6 flex flex-wrap justify-center gap-2 sm:gap-3">
              {categories.map((c) => (
                <button
                  key={c.id}
                  onClick={() => setFilter(c.id)}
                  className={`px-5 py-2 rounded-full text-xs sm:text-sm font-medium transition-all ${filter === c.id
                    ? 'luxury-gradient-btn shadow-md text-white'
                    : 'bg-white text-stone-600 border border-stone-200 hover:border-[#B18B59]'
                    }`}
                >
                  {c.label}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((t) => (
              <SpotlightCard
                key={t.id}
                className="bg-white rounded-3xl p-8 border border-stone-200/80 shadow-md flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 rounded-full text-[11px] font-semibold bg-[#FAF8F4] text-[#7A245A] border border-stone-200">
                      {t.eventType}
                    </span>
                    <div className="flex text-amber-400">
                      {[...Array(t.rating)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                      ))}
                    </div>
                  </div>

                  <p className="text-sm font-serif italic text-stone-700 leading-relaxed mb-6">
                    &ldquo;{t.review}&rdquo;
                  </p>
                </div>

                <div className="pt-4 border-t border-stone-100 flex items-center gap-3">
                  <img
                    src={t.clientAvatar}
                    alt={t.clientName}
                    className="w-11 h-11 rounded-full object-cover border border-[#B18B59]"
                  />
                  <div>
                    <h4 className="text-sm font-semibold text-[#29251F] flex items-center gap-1">
                      {t.clientName}
                      <CheckCircle className="w-3 h-3 text-emerald-500" />
                    </h4>
                    <div className="flex items-center gap-1 text-[11px] text-stone-500">
                      <MapPin className="w-3 h-3 text-[#B18B59]" />
                      <span>{t.location}</span>
                    </div>
                  </div>
                </div>
              </SpotlightCard>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Bar & CTA */}
      <section className="py-20 bg-[#1C1917] text-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <span className="text-xs uppercase tracking-widest text-amber-200 block mb-2 font-semibold">
            BE OUR NEXT SUCCESS STORY
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-medium mb-4">
            Ready to experience effortless, breathtaking decor?
          </h2>
          <p className="text-stone-300 text-sm sm:text-base font-light max-w-xl mx-auto mb-8">
            Contact us today to lock in your auspicious date and begin collaborative 3D theme design.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="luxury-gradient-btn px-8 py-3.5 rounded-full text-sm font-semibold shadow-md"
            >
              Book Your Celebration Date
            </Link>
            <a
              href={`https://wa.me/91${siteConfig.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3.5 rounded-full text-sm font-semibold text-white bg-white/10 hover:bg-[#25D366] border border-white/20 transition-all flex items-center gap-2"
            >
              <MessageCircle className="w-4 h-4 text-[#25D366]" />
              <span>Direct WhatsApp ({siteConfig.phoneDisplay})</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
