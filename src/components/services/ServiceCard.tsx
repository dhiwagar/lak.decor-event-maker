import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { ServiceItem } from '../../types';
import { SpotlightCard } from '../animations/SpotlightCard';

interface ServiceCardProps {
  service: ServiceItem;
  featured?: boolean;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  return (
    <SpotlightCard className="group bg-white rounded-3xl overflow-hidden border border-stone-200/80 shadow-md hover:shadow-xl transition-all duration-500 flex flex-col h-full">
      <Link to={`/services/${service.slug}`} className="flex flex-col h-full">
        {/* Clean Image Container with Smooth Zoom Only - NO text overlay */}
        <div className="relative h-64 sm:h-72 overflow-hidden bg-stone-100">
          <img
            src={service.heroImage}
            alt={service.title}
            className="w-full h-full object-cover object-center transform transition-transform duration-700 ease-out group-hover:scale-105"
            loading="lazy"
          />
        </div>

        {/* Content Body */}
        <div className="p-6 flex-1 flex flex-col justify-between bg-white">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-[10px] font-bold tracking-wider uppercase text-[#B18B59] bg-[#FAF8F4] px-2.5 py-0.5 rounded-full border border-stone-200/60">
                {service.tags[0] || 'Exclusive'}
              </span>
            </div>
            <h3 className="text-xl sm:text-2xl font-serif font-medium text-[#29251F] group-hover:text-[#7A245A] transition-colors leading-snug mb-2">
              {service.title}
            </h3>
            <p className="text-stone-600 text-xs sm:text-sm leading-relaxed line-clamp-3">
              {service.shortDescription}
            </p>
          </div>

          <div className="mt-5 pt-4 border-t border-stone-100 flex items-center justify-between">
            <span className="text-xs font-semibold text-[#8A685E] group-hover:text-[#7A245A] transition-colors">
              Explore Themes & Details
            </span>
            <div className="w-8 h-8 rounded-full bg-[#FAF8F4] border border-stone-200 flex items-center justify-center text-[#7A245A] group-hover:bg-[#7A245A] group-hover:text-white transition-all transform group-hover:translate-x-1">
              <ArrowRight className="w-3.5 h-3.5" />
            </div>
          </div>
        </div>
      </Link>
    </SpotlightCard>
  );
};
