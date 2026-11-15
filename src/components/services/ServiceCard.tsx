import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles } from 'lucide-react';
import { ServiceItem } from '../../types';
import { SpotlightCard } from '../animations/SpotlightCard';

interface ServiceCardProps {
  service: ServiceItem;
  featured?: boolean;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ service, featured = false }) => {
  return (
    <SpotlightCard className="group bg-white rounded-3xl overflow-hidden border border-stone-200/80 shadow-md hover:shadow-2xl transition-all duration-500 flex flex-col h-full">
      <Link to={`/services/${service.slug}`} className="flex flex-col h-full">
        {/* Image Container with Hover Zoom */}
        <div className="relative h-64 sm:h-72 overflow-hidden bg-stone-100">
          <img
            src={service.heroImage}
            alt={service.title}
            className="w-full h-full object-cover object-center transform transition-transform duration-700 ease-out group-hover:scale-108"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300" />

          {/* Floating Tag */}
          <div className="absolute top-4 left-4">
            <span className="px-3 py-1 rounded-full text-[11px] font-semibold tracking-wider uppercase bg-white/90 backdrop-blur-md text-[#7A245A] shadow-sm">
              {service.tags[0] || 'Exclusive'}
            </span>
          </div>

          {/* Bottom Title over Image on Mobile / Subtle Reveal */}
          <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between text-white">
            <div className="flex items-center gap-1 text-xs text-amber-200/90 font-medium">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Bespoke Styling</span>
            </div>
            <div className="w-9 h-9 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white group-hover:bg-[#7A245A] group-hover:text-white transition-all transform group-hover:translate-x-1">
              <ArrowRight className="w-4 h-4" />
            </div>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-6 flex-1 flex flex-col justify-between bg-white">
          <div>
            <h3 className="text-xl sm:text-2xl font-serif font-medium text-[#29251F] group-hover:text-[#7A245A] transition-colors leading-snug mb-2">
              {service.title}
            </h3>
            <p className="text-stone-600 text-xs sm:text-sm leading-relaxed line-clamp-3">
              {service.shortDescription}
            </p>
          </div>

          <div className="mt-5 pt-4 border-t border-stone-100 flex items-center justify-between">
            <div className="flex items-center gap-1.5 text-xs font-semibold text-[#8A685E] group-hover:text-[#7A245A] transition-colors">
              <span>Explore Themes & Details</span>
            </div>
            <span className="text-xs text-[#B18B59] font-medium group-hover:translate-x-1 transition-transform flex items-center">
              &rarr;
            </span>
          </div>
        </div>
      </Link>
    </SpotlightCard>
  );
};
