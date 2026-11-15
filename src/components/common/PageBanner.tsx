import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';
import { BlurText } from '../animations/BlurText';
import { ScrollReveal } from '../animations/ScrollReveal';

interface PageBannerProps {
  title: string;
  subtitle: string;
  badge?: string;
  image?: string;
  breadcrumbs?: { label: string; path?: string }[];
}

export const PageBanner: React.FC<PageBannerProps> = ({
  title,
  subtitle,
  badge = 'LAK.DECOR & EVENT MAKER',
  image = 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=2000&q=80',
  breadcrumbs = [],
}) => {
  return (
    <div className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-[#1C1917]">
      {/* Background Image with Parallax feeling */}
      <div className="absolute inset-0 z-0">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover object-center opacity-30 transform scale-105 transition-transform duration-1000"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#FAF8F4] via-[#1C1917]/70 to-[#1C1917]/90" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Breadcrumbs */}
        <nav className="flex justify-center items-center gap-2 text-xs sm:text-sm text-stone-300/80 mb-6 font-medium">
          <Link
            to="/"
            className="hover:text-amber-200 transition-colors flex items-center gap-1"
          >
            <Home className="w-3.5 h-3.5" />
            <span>Home</span>
          </Link>
          {breadcrumbs.map((crumb, idx) => (
            <React.Fragment key={idx}>
              <ChevronRight className="w-3.5 h-3.5 text-stone-400" />
              {crumb.path ? (
                <Link
                  to={crumb.path}
                  className="hover:text-amber-200 transition-colors"
                >
                  {crumb.label}
                </Link>
              ) : (
                <span className="text-amber-200">{crumb.label}</span>
              )}
            </React.Fragment>
          ))}
        </nav>

        {/* Small Tag */}
        <ScrollReveal y={15}>
          <span className="inline-block px-4 py-1 rounded-full text-xs font-semibold tracking-[0.25em] uppercase text-amber-200 bg-white/10 backdrop-blur-md border border-white/15 mb-4">
            {badge}
          </span>
        </ScrollReveal>

        {/* Title */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-medium text-white tracking-tight mb-5">
          <BlurText text={title} className="justify-center" />
        </h1>

        {/* Subtitle */}
        <ScrollReveal delay={0.2} y={15}>
          <p className="max-w-2xl mx-auto text-base sm:text-lg text-stone-200 font-light leading-relaxed">
            {subtitle}
          </p>
        </ScrollReveal>

        {/* Decorative Divider */}
        <div className="flex items-center justify-center gap-3 mt-6">
          <span className="h-[1px] w-12 bg-amber-200/40"></span>
          <span className="text-amber-300 text-sm">✦</span>
          <span className="h-[1px] w-12 bg-amber-200/40"></span>
        </div>
      </div>
    </div>
  );
};
