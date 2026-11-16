import React, { useState, useMemo, useTransition } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { siteConfig } from '../../data/siteConfig';

export const FloatingWhatsApp: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(true);
  const [, startTransition] = useTransition();

  const whatsappUrl = useMemo(
    () =>
      `https://wa.me/91${siteConfig.whatsapp}?text=${encodeURIComponent(
        'Hello lak.decor & event maker, I would like to enquire about event decoration for my upcoming celebration!'
      )}`,
    []
  );

  const handleCloseTooltip = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();
    startTransition(() => {
      setShowTooltip(false);
    });
  };

  return (
    <div
      className="fixed bottom-6 right-6 z-40 flex items-end flex-col gap-2 transform-gpu will-change-transform touch-manipulation"
      style={{ transform: 'translateZ(0)', backfaceVisibility: 'hidden' }}
    >
      {/* Friendly Tooltip Bubble */}
      {showTooltip && (
        <div
          className="bg-white text-[#29251F] text-xs px-3.5 py-2 rounded-xl shadow-xl border border-stone-200/80 flex items-center gap-2 max-w-xs transition-opacity duration-200 select-none"
        >
          <div className="flex-1 pointer-events-none">
            <span className="font-semibold block text-[#7A245A]">
              Chat with our Decor Stylist
            </span>
            <span className="text-stone-500 text-[11px]">
              Instant quotes on WhatsApp
            </span>
          </div>
          <button
            type="button"
            onClick={handleCloseTooltip}
            className="text-stone-400 hover:text-stone-700 p-1 rounded-md hover:bg-stone-100 transition-colors touch-manipulation cursor-pointer"
            aria-label="Close tooltip"
          >
            <X className="w-3.5 h-3.5 pointer-events-none" />
          </button>
        </div>
      )}

      {/* Button with animated ping */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-xl hover:shadow-2xl hover:scale-105 active:scale-95 transition-transform duration-200 touch-manipulation cursor-pointer"
        aria-label="WhatsApp Enquiries"
      >
        <span
          className="absolute -inset-1 rounded-full bg-[#25D366] opacity-30 animate-ping pointer-events-none"
          style={{ willChange: 'transform, opacity' }}
        />
        <MessageCircle className="w-7 h-7 relative z-10 transition-transform group-hover:rotate-12 pointer-events-none" />
      </a>
    </div>
  );
};
