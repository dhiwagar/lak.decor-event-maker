import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Quote,
  Star,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  MapPin,
  CheckCircle,
} from 'lucide-react';
import { testimonialsData } from '../../data/testimonials';

export const TestimonialSlider: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prev = () => {
    setCurrentIndex((curr) =>
      curr === 0 ? testimonialsData.length - 1 : curr - 1
    );
  };

  const next = () => {
    setCurrentIndex((curr) =>
      curr === testimonialsData.length - 1 ? 0 : curr + 1
    );
  };

  useEffect(() => {
    const timer = setInterval(() => {
      next();
    }, 8000);
    return () => clearInterval(timer);
  }, [currentIndex]);

  const current = testimonialsData[currentIndex];

  return (
    <div className="relative max-w-4xl mx-auto px-4 sm:px-6">
      <div className="glass-card rounded-3xl p-8 sm:p-12 md:p-16 relative overflow-hidden shadow-2xl border border-stone-200/80">
        {/* Background watermark quote icon */}
        <Quote className="absolute right-6 bottom-6 w-32 h-32 text-[#FAF8F4]/80 pointer-events-none -rotate-12" />

        <div className="relative z-10">
          {/* Top category & rating */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold bg-[#FAF8F4] text-[#7A245A] border border-stone-200">
              <Sparkles className="w-3.5 h-3.5 text-[#B18B59]" />
              <span>{current.eventType}</span>
            </div>

            <div className="flex items-center gap-1 text-amber-400">
              {[...Array(current.rating)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-amber-400" />
              ))}
              <span className="text-xs text-stone-500 font-semibold ml-1">
                5.0 / 5.0
              </span>
            </div>
          </div>

          {/* Animate review text */}
          <div className="min-h-[140px] flex items-center">
            <AnimatePresence mode="wait">
              <motion.blockquote
                key={current.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.4 }}
                className="text-lg sm:text-2xl font-serif font-light text-[#29251F] leading-relaxed italic"
              >
                &ldquo;{current.review}&rdquo;
              </motion.blockquote>
            </AnimatePresence>
          </div>

          {/* Client Details & Event Location */}
          <div className="mt-8 pt-6 border-t border-stone-200/60 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <img
                src={current.clientAvatar}
                alt={current.clientName}
                className="w-12 h-12 rounded-full object-cover border-2 border-[#B18B59] shadow-sm"
              />
              <div>
                <h4 className="text-base font-semibold text-[#29251F] flex items-center gap-1.5">
                  {current.clientName}
                  {current.verified && (
                    <span
                      className="text-[#25D366] text-xs flex items-center gap-0.5"
                      title="Verified Client"
                    >
                      <CheckCircle className="w-3.5 h-3.5" />
                    </span>
                  )}
                </h4>
                <div className="flex items-center gap-1.5 text-xs text-stone-500 mt-0.5">
                  <MapPin className="w-3 h-3 text-[#B18B59]" />
                  <span>{current.location}</span>
                </div>
              </div>
            </div>

            {/* Slider Controls */}
            <div className="flex items-center gap-2 self-end sm:self-auto">
              <button
                onClick={prev}
                className="w-10 h-10 rounded-full bg-white border border-stone-200 hover:border-[#B18B59] text-stone-700 hover:text-[#7A245A] flex items-center justify-center transition-all shadow-sm"
                aria-label="Previous Testimonial"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <span className="text-xs text-stone-400 font-medium px-2">
                {currentIndex + 1} / {testimonialsData.length}
              </span>
              <button
                onClick={next}
                className="w-10 h-10 rounded-full bg-white border border-stone-200 hover:border-[#B18B59] text-stone-700 hover:text-[#7A245A] flex items-center justify-center transition-all shadow-sm"
                aria-label="Next Testimonial"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
