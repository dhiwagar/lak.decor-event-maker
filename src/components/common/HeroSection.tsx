import React from 'react';
import { Link } from 'react-router-dom';
import {
  Calendar,
  Sparkles,
  ShieldCheck,
  Clock,
  ArrowRight,
  Play,
  Gem,
  Cake,
  Wine,
  Baby,
  Building2,
} from 'lucide-react';
import { siteConfig } from '../../data/siteConfig';

interface HeroSectionProps {
  onVideoClick?: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onVideoClick }) => {
  const quickCategories = [
    {
      title: 'Wedding Decorations',
      path: '/services/wedding-decorations',
      icon: (
        <svg className="w-5 h-5 text-[#88245D]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          <circle cx="12" cy="14" r="7" />
          <path d="M12 7l1.5-2.5L12 3l-1.5 1.5L12 7z" />
          <path d="M9.5 4.5l5 0" />
        </svg>
      ),
    },
    {
      title: 'Birthday Celebrations',
      path: '/services/birthday-celebrations',
      icon: <Cake className="w-5 h-5 text-[#88245D]" />,
    },
    {
      title: 'Engagement Ceremonies',
      path: '/services/engagement-ceremonies',
      icon: (
        <svg className="w-5 h-5 text-[#88245D]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          <circle cx="9" cy="13" r="5" />
          <circle cx="15" cy="13" r="5" />
          <path d="M9 8l1-1.5L9 5l-1 1.5L9 8z" />
        </svg>
      ),
    },
    {
      title: 'Reception Decorations',
      path: '/services/reception-decorations',
      icon: <Wine className="w-5 h-5 text-[#88245D]" />,
    },
    {
      title: 'Baby Shower Events',
      path: '/services/baby-shower-events',
      icon: <Baby className="w-5 h-5 text-[#88245D]" />,
    },
    {
      title: 'Corporate Celebrations',
      path: '/services/corporate-event-decorations',
      icon: <Building2 className="w-5 h-5 text-[#88245D]" />,
    },
  ];

  return (
    <div className="relative pt-20 sm:pt-24 pb-12 lg:pb-16 bg-[#FAF7F5] overflow-hidden">
      {/* Decorative Botanical Leaf Flourishes (Top Left) */}
      <div className="absolute top-12 left-0 w-48 sm:w-64 h-64 pointer-events-none opacity-40 z-0">
        <svg viewBox="0 0 200 200" fill="none" className="w-full h-full text-[#992667]">
          <path
            d="M-20,40 C30,30 80,70 100,120 C105,130 90,140 80,130 C60,110 30,90 -20,100 Z"
            fill="currentColor"
            opacity="0.3"
          />
          <path
            d="M10,10 C50,20 90,50 110,90 C115,100 100,110 90,100 C70,80 40,60 10,70 Z"
            fill="currentColor"
            opacity="0.25"
          />
          <path
            d="M40,-10 C70,10 110,30 140,70 C145,80 130,90 120,80 C100,60 70,40 40,50 Z"
            fill="currentColor"
            opacity="0.2"
          />
          <path
            d="M0,80 C30,90 60,120 70,150 C75,160 60,165 55,155 C45,140 25,120 0,130 Z"
            fill="currentColor"
            opacity="0.3"
          />
        </svg>
      </div>

      {/* Main Curved Hero Section Container */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="relative rounded-[32px] sm:rounded-[44px] overflow-hidden bg-gradient-to-r from-[#F6EEF8] via-[#FAF3FA] to-[#FAF7F5] border border-stone-200/50 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[520px] lg:min-h-[580px] items-stretch">
            
            {/* Left Content Column (5.5 cols) */}
            <div className="lg:col-span-5 xl:col-span-5 p-6 sm:p-10 lg:p-12 xl:p-14 flex flex-col justify-center space-y-6 z-10">
              
              {/* Category Tag */}
              <div>
                <span className="text-[11px] sm:text-xs font-bold tracking-[0.25em] uppercase text-[#88245D]">
                  WEDDING • BIRTHDAY • EVENTS
                </span>
              </div>

              {/* Main Headline with Romantic Script Accent */}
              <div>
                <h1 className="text-3xl sm:text-4xl lg:text-[42px] xl:text-[48px] font-serif font-bold text-[#231E26] leading-[1.14] tracking-tight">
                  Turning Your Special Moments Into
                </h1>
                <div className="flex items-center gap-2 mt-1 sm:mt-2">
                  <span className="font-script text-5xl sm:text-6xl lg:text-7xl text-[#88245D] font-normal leading-none transform -rotate-1 inline-block">
                    Timeless Memories
                  </span>
                  {/* Delicate Outline Heart */}
                  <svg
                    className="w-8 h-8 sm:w-10 sm:h-10 text-[#88245D] stroke-[1.6] fill-none inline-block flex-shrink-0 transform rotate-12"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                  </svg>
                </div>
              </div>

              {/* Subheading */}
              <p className="text-xs sm:text-sm lg:text-[15px] text-[#554E58] font-normal leading-relaxed max-w-md">
                Exquisite wedding decorations, birthday celebrations, and custom
                event setups crafted with creativity, elegance, and love.
              </p>

              {/* CTA Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-1">
                <Link
                  to="/contact"
                  className="bg-gradient-to-r from-[#88245D] to-[#6A1647] hover:from-[#761E51] hover:to-[#571039] text-white px-6 sm:px-7 py-3 rounded-full text-xs sm:text-sm font-semibold tracking-wide flex items-center gap-2 shadow-md hover:shadow-lg transition-all"
                >
                  <Calendar className="w-4 h-4 text-pink-200" />
                  <span>Plan Your Event</span>
                </Link>

                <Link
                  to="/our-work"
                  className="bg-white hover:bg-stone-50 text-[#88245D] border border-[#88245D]/40 hover:border-[#88245D] px-6 sm:px-7 py-3 rounded-full text-xs sm:text-sm font-semibold tracking-wide flex items-center gap-2 shadow-sm transition-all"
                >
                  <Play className="w-3.5 h-3.5 fill-[#88245D]" />
                  <span>View Our Work</span>
                </Link>
              </div>

              {/* Trust Badges */}
              <div className="pt-3 flex flex-wrap items-center gap-4 sm:gap-6 text-[11px] sm:text-xs font-semibold text-[#483F4C]">
                <div className="flex items-center gap-1.5">
                  <Gem className="w-3.5 h-3.5 text-[#88245D]" />
                  <span>Creative Designs</span>
                </div>

                <div className="flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#88245D]" />
                  <span>Professional Team</span>
                </div>

                <div className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-[#88245D]" />
                  <span>On-Time Execution</span>
                </div>
              </div>

            </div>

            {/* Right Photo Column with Grand Arched Shape (7 cols) */}
            <div className="lg:col-span-7 xl:col-span-7 relative min-h-[360px] sm:min-h-[440px] lg:min-h-full">
              {/* Organic Arch Frame Mask */}
              <div className="w-full h-full relative overflow-hidden lg:rounded-l-[140px] shadow-inner bg-stone-900">
                <img
                  src="/assets/images/ai-hero-mandap.jpg"
                  alt="Luxury Royal Indian Wedding Stage Mandap Decoration - lak.decor & event maker"
                  className="w-full h-full object-cover object-center transform scale-102 hover:scale-105 transition-transform duration-1000"
                />

                {/* Warm Golden Fairy Light Vignette Glow */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
                <div className="absolute inset-0 bg-gradient-to-r from-[#F6EEF8]/40 via-transparent to-transparent hidden lg:block pointer-events-none" />

                {/* Subtle Floating Interactive Video Pill */}
                {onVideoClick && (
                  <button
                    onClick={onVideoClick}
                    className="absolute bottom-6 right-6 bg-white/90 hover:bg-white text-[#88245D] px-4 py-2 rounded-full text-xs font-semibold shadow-lg backdrop-blur-md flex items-center gap-2 transition-all transform hover:scale-105"
                  >
                    <Play className="w-3.5 h-3.5 fill-[#88245D]" />
                    <span>Watch Decor Film</span>
                  </button>
                )}
              </div>
            </div>

          </div>
        </div>

        {/* 6-Category Quick Access Floating Strip (Overlapping Bottom) */}
        <div className="mt-6 lg:-mt-10 relative z-20">
          <div className="bg-white rounded-[24px] sm:rounded-[32px] p-3 sm:p-4 shadow-[0_15px_40px_-10px_rgba(136,36,93,0.12)] border border-stone-200/80">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 sm:gap-3">
              {quickCategories.map((item) => (
                <Link
                  key={item.title}
                  to={item.path}
                  className="flex items-center justify-between p-2.5 sm:p-3 rounded-2xl bg-[#FAF7F9] hover:bg-[#F3E7F2] border border-stone-100 hover:border-[#88245D]/30 transition-all duration-300 group"
                >
                  <div className="flex items-center gap-2.5 min-w-0">
                    <div className="w-9 h-9 rounded-full bg-white text-[#88245D] flex items-center justify-center flex-shrink-0 shadow-sm border border-stone-200/50 group-hover:scale-110 transition-transform">
                      {item.icon}
                    </div>
                    <span className="text-xs font-bold text-[#2A232E] group-hover:text-[#88245D] leading-tight transition-colors line-clamp-2">
                      {item.title}
                    </span>
                  </div>
                  <ArrowRight className="w-3.5 h-3.5 text-stone-400 group-hover:text-[#88245D] group-hover:translate-x-0.5 transition-all flex-shrink-0 ml-1" />
                </Link>
              ))}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
