import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Sparkles,
  ArrowRight,
  Play,
  Heart,
  MessageCircle,
  Calendar,
  CheckCircle,
  Clock,
  ShieldCheck,
  Palette,
  PartyPopper,
  MessageSquare,
  Cake,
  Wine,
  Baby,
  Building2,
  Gem,
} from 'lucide-react';
import { siteConfig } from '../../data/siteConfig';
import { HeroSection } from '../../components/common/HeroSection';
import { GalleryGrid } from '../../components/gallery/GalleryGrid';
import { TestimonialSlider } from '../../components/common/TestimonialSlider';
import { VideoModal } from '../../components/common/VideoModal';

export const HomePage: React.FC = () => {
  const [videoModalOpen, setVideoModalOpen] = useState(false);

  // 6 Services with ultra-sharp crystal-clear photography
  const featuredServices = [
    {
      title: 'Wedding Decorations',
      slug: 'wedding-decorations',
      image: '/assets/images/ai-royal-mandap.webp',
      icon: (
        <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="14" r="7" />
          <path d="M12 7l1.5-2.5L12 3l-1.5 1.5L12 7z" />
          <path d="M9.5 4.5l5 0" />
        </svg>
      ),
    },
    {
      title: 'Birthday Celebrations',
      slug: 'birthday-celebrations',
      image: '/assets/images/ai-birthday-party.webp',
      icon: <Cake className="w-4 h-4 text-white" />,
    },
    {
      title: 'Engagement Ceremonies',
      slug: 'engagement-ceremonies',
      image: '/assets/images/ai-engagement-ring.webp',
      icon: (
        <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="9" cy="13" r="5" />
          <circle cx="15" cy="13" r="5" />
          <path d="M9 8l1-1.5L9 5l-1 1.5L9 8z" />
        </svg>
      ),
    },
    {
      title: 'Reception Decorations',
      slug: 'reception-decorations',
      image: '/assets/images/ai-reception-stage.webp',
      icon: <Wine className="w-4 h-4 text-white" />,
    },
    {
      title: 'Baby Shower Events',
      slug: 'baby-shower-events',
      image: '/assets/images/ai-baby-shower.webp',
      icon: <Baby className="w-4 h-4 text-white" />,
    },
    {
      title: 'Corporate Celebrations',
      slug: 'corporate-event-decorations',
      image: '/assets/images/ai-corporate-banquet.webp',
      icon: <Building2 className="w-4 h-4 text-white" />,
    },
  ];

  return (
    <div className="overflow-hidden bg-[#FAF7F5]">
      {/* 1. CINEMATIC HERO SECTION (Exact layout with arched photo, cursive script, badges & floating strip) */}
      <HeroSection onVideoClick={() => setVideoModalOpen(true)} />

      {/* 2. ABOUT & PROCESS SECTION (Side-by-side cards matching exact mockup layout) */}
      <section className="py-12 sm:py-16 lg:py-20 bg-[#FAF7F5] relative">
        {/* Subtle decorative leaf watermark */}
        <div className="absolute top-10 right-0 w-64 h-64 pointer-events-none opacity-20">
          <svg viewBox="0 0 200 200" fill="none" className="w-full h-full text-[#88245D]">
            <path
              d="M100,20 C140,50 170,100 180,150 C160,130 130,90 90,60 Z"
              fill="currentColor"
            />
          </svg>
        </div>

        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">

            {/* Left Card: About Élan Events (7 cols) */}
            <div className="lg:col-span-7 bg-white rounded-[28px] sm:rounded-[36px] p-6 sm:p-8 lg:p-9 shadow-sm border border-stone-200/60 flex flex-col justify-between">
              <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 items-center">

                {/* Video / Thumbnail preview on left */}
                <div
                  className="sm:col-span-5 relative h-56 sm:h-64 rounded-2xl sm:rounded-3xl overflow-hidden cursor-pointer group shadow-md bg-stone-900 flex-shrink-0"
                  onClick={() => setVideoModalOpen(true)}
                >
                  <img
                    src="/assets/images/ai-hero-mandap.webp"
                    alt="lak.decor & event maker celebration film preview"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-black/35 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                    <div className="w-14 h-14 rounded-full bg-white text-[#88245D] flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform">
                      <Play className="w-6 h-6 ml-1 fill-current" />
                    </div>
                  </div>
                </div>

                {/* About copy & numbers on right */}
                <div className="sm:col-span-7 space-y-4">
                  <div>
                    <span className="text-[10px] sm:text-xs font-bold tracking-[0.25em] uppercase text-[#88245D] block mb-1">
                      ABOUT LAK.DECOR & EVENT MAKER
                    </span>
                    <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#231E26] leading-tight">
                      We Create <br />
                      Beautiful Celebrations
                    </h2>
                    <p className="text-xs sm:text-sm text-[#554E58] font-normal leading-relaxed mt-2.5">
                      A passionate event decoration studio dedicated to transforming your special occasions into unforgettable experiences with creative decor, elegant themes, and flawless execution.
                    </p>
                  </div>

                  {/* 3 Metrics with vertical dividers */}
                  <div className="grid grid-cols-3 gap-2 pt-3 border-t border-stone-100">
                    <div>
                      <span className="block text-2xl sm:text-3xl font-serif font-bold text-[#88245D] leading-none">
                        10+
                      </span>
                      <span className="text-[10px] sm:text-[11px] text-[#6E6773] font-medium leading-tight mt-1 block">
                        Years of Experience
                      </span>
                    </div>

                    <div className="border-l border-stone-200 pl-3">
                      <span className="block text-2xl sm:text-3xl font-serif font-bold text-[#88245D] leading-none">
                        500+
                      </span>
                      <span className="text-[10px] sm:text-[11px] text-[#6E6773] font-medium leading-tight mt-1 block">
                        Events Decorated
                      </span>
                    </div>

                    <div className="border-l border-stone-200 pl-3">
                      <span className="block text-2xl sm:text-3xl font-serif font-bold text-[#88245D] leading-none">
                        98%
                      </span>
                      <span className="text-[10px] sm:text-[11px] text-[#6E6773] font-medium leading-tight mt-1 block">
                        Happy Clients
                      </span>
                    </div>
                  </div>

                  {/* Discover Our Story CTA */}
                  <div className="pt-2">
                    <Link
                      to="/about"
                      className="bg-[#88245D] hover:bg-[#721C4D] text-white px-5 sm:px-6 py-2.5 rounded-full text-xs font-semibold tracking-wide inline-flex items-center gap-1.5 shadow-sm transition-all"
                    >
                      <span>Discover Our Story</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>

              </div>
            </div>

            {/* Right Card: From Your Vision to a Beautiful Reality (5 cols) */}
            <div className="lg:col-span-5 bg-gradient-to-br from-[#F5EEF9] to-[#EBE2F5] rounded-[28px] sm:rounded-[36px] p-6 sm:p-8 lg:p-9 shadow-sm border border-[#E4D6ED] flex flex-col justify-center">
              <div className="text-center mb-6">
                <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#231E26] leading-tight">
                  From Your Vision <br />
                  to a Beautiful Reality
                </h3>
              </div>

              {/* 4-Step Horizontal Timeline with Dotted Line */}
              <div className="relative pt-2 pb-4">
                {/* Connecting Dotted Line */}
                <div className="absolute top-[34px] left-8 right-8 h-[2px] border-t-2 border-dashed border-[#88245D]/30 z-0 hidden sm:block" />

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 relative z-10 text-center">

                  {/* Step 1 */}
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 rounded-full bg-white border-2 border-[#88245D] flex items-center justify-center text-[#88245D] shadow-sm mb-2">
                      <MessageSquare className="w-5 h-5" />
                    </div>
                    <span className="w-5 h-5 rounded-full bg-[#88245D] text-white text-[10px] font-bold flex items-center justify-center mb-1.5 shadow-sm">
                      1
                    </span>
                    <span className="text-[11px] sm:text-xs font-bold text-[#231E26] leading-tight">
                      Share Your Vision
                    </span>
                  </div>

                  {/* Step 2 */}
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 rounded-full bg-white border-2 border-[#88245D] flex items-center justify-center text-[#88245D] shadow-sm mb-2">
                      <Palette className="w-5 h-5" />
                    </div>
                    <span className="w-5 h-5 rounded-full bg-[#88245D] text-white text-[10px] font-bold flex items-center justify-center mb-1.5 shadow-sm">
                      2
                    </span>
                    <span className="text-[11px] sm:text-xs font-bold text-[#231E26] leading-tight">
                      Design the Experience
                    </span>
                  </div>

                  {/* Step 3 */}
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 rounded-full bg-white border-2 border-[#88245D] flex items-center justify-center text-[#88245D] shadow-sm mb-2">
                      <CheckCircle className="w-5 h-5" />
                    </div>
                    <span className="w-5 h-5 rounded-full bg-[#88245D] text-white text-[10px] font-bold flex items-center justify-center mb-1.5 shadow-sm">
                      3
                    </span>
                    <span className="text-[11px] sm:text-xs font-bold text-[#231E26] leading-tight">
                      Perfect Every Detail
                    </span>
                  </div>

                  {/* Step 4 */}
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 rounded-full bg-white border-2 border-[#88245D] flex items-center justify-center text-[#88245D] shadow-sm mb-2">
                      <PartyPopper className="w-5 h-5" />
                    </div>
                    <span className="w-5 h-5 rounded-full bg-[#88245D] text-white text-[10px] font-bold flex items-center justify-center mb-1.5 shadow-sm">
                      4
                    </span>
                    <span className="text-[11px] sm:text-xs font-bold text-[#231E26] leading-tight">
                      Celebrate Your Moment
                    </span>
                  </div>

                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* 3. OUR SERVICES SECTION (Exact 6-Card Grid with Bottom Overlay Labels) */}
      <section className="py-12 sm:py-16 lg:py-20 bg-[#FAF7F5]">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">

          {/* Section Header */}
          <div className="text-center mb-10 sm:mb-12">
            <div className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.25em] uppercase text-[#88245D] mb-2">
              <span className="w-6 h-[1.5px] bg-[#88245D]" />
              <span>OUR SERVICES</span>
              <span className="w-6 h-[1.5px] bg-[#88245D]" />
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#231E26] tracking-tight">
              Beautifully Crafted Event Experiences
            </h2>
          </div>

          {/* 6 Service Cards Grid (Matching mockup layout exactly) */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4 lg:gap-5">
            {featuredServices.map((service) => (
              <Link
                key={service.slug}
                to={`/services/${service.slug}`}
                className="group relative h-64 sm:h-72 rounded-[20px] sm:rounded-[24px] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 bg-stone-900 block"
              >
                {/* Image */}
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-700 ease-out"
                />

                {/* Gradient vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent group-hover:from-black/75 transition-colors" />

                {/* Bottom Overlay Label */}
                <div className="absolute bottom-4 left-3 right-3 text-white">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center flex-shrink-0 group-hover:bg-[#88245D] transition-colors">
                      {service.icon}
                    </div>
                    <h3 className="text-xs sm:text-sm font-serif font-semibold text-white leading-tight group-hover:text-amber-200 transition-colors">
                      {service.title}
                    </h3>
                  </div>
                </div>
              </Link>
            ))}
          </div>

        </div>
      </section>

      {/* 4. FEATURED PORTFOLIO MASONRY GALLERY */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-xs font-bold tracking-[0.25em] uppercase text-[#88245D] block mb-2">
              MOMENTS WE’VE MADE MAGICAL
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#231E26]">
              Real Celebrations Portfolio
            </h2>
            <p className="text-sm sm:text-base text-[#554E58] max-w-xl mx-auto mt-3">
              Explore our recent royal mandaps, pastel birthday setups, and romantic floral aisles.
            </p>
          </div>

          <GalleryGrid limit={6} />

          <div className="mt-12 text-center">
            <Link
              to="/gallery"
              className="bg-white hover:bg-stone-50 text-[#88245D] border-2 border-[#88245D] px-8 py-3 rounded-full text-xs sm:text-sm font-bold tracking-wider uppercase inline-flex items-center gap-2 shadow-sm transition-all"
            >
              <span>Explore Full Portfolio Gallery</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 5. TESTIMONIALS SLIDER */}
      <section className="py-16 sm:py-20 bg-[#FAF7F5]">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-xs font-bold tracking-[0.25em] uppercase text-[#88245D] block mb-2">
              CLIENT TESTIMONIALS
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#231E26]">
              Stories From Our Happy Families
            </h2>
          </div>

          <TestimonialSlider />
        </div>
      </section>

      {/* 6. FULL-WIDTH CALL TO ACTION */}
      <section className="relative py-24 sm:py-28 lg:py-32 bg-stone-950 text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/assets/images/ai-hero-mandap.webp"
            alt="Celebration banquet backdrop"
            className="w-full h-full object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-stone-950 via-stone-950/85 to-[#88245D]/50" />
        </div>

        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center relative z-10 space-y-6">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold tracking-tight">
            Your Dream Celebration <br />
            <span className="font-script text-5xl sm:text-6xl lg:text-7xl text-amber-200 font-normal">
              Begins Right Here
            </span>
          </h2>
          <p className="text-base sm:text-lg text-stone-300 font-light max-w-xl mx-auto">
            Let's design something truly unforgettable together. Speak directly with our lead decor stylist today.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-[#88245D] to-[#6A1647] hover:from-[#761E51] hover:to-[#571039] text-white px-8 py-3.5 rounded-full text-sm font-semibold tracking-wide flex items-center gap-2 shadow-xl transition-all"
            >
              <Calendar className="w-4 h-4 text-pink-200" />
              <span>Let’s Plan Your Event</span>
            </Link>

            <a
              href={`https://wa.me/91${siteConfig.whatsapp}?text=${encodeURIComponent(
                'Hello lak.decor & event maker, I would like to plan my upcoming celebration!'
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/15 hover:bg-[#25D366] text-white border border-white/30 px-8 py-3.5 rounded-full text-sm font-semibold tracking-wide flex items-center gap-2 shadow-lg transition-all"
            >
              <MessageCircle className="w-4 h-4 text-[#25D366] group-hover:text-white" />
              <span>WhatsApp Us ({siteConfig.phoneDisplay})</span>
            </a>
          </div>
        </div>
      </section>

      {/* Video Modal */}
      <VideoModal
        isOpen={videoModalOpen}
        onClose={() => setVideoModalOpen(false)}
      />
    </div>
  );
};
