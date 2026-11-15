import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { siteConfig } from '../../data/siteConfig';

export const FloatingWhatsApp: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(true);

  const whatsappUrl = `https://wa.me/91${siteConfig.whatsapp}?text=${encodeURIComponent(
    'Hello lak.decor & event maker, I would like to enquire about event decoration for my upcoming celebration!'
  )}`;

  return (
    <div className="fixed bottom-6 right-6 z-40 flex items-end flex-col gap-2">
      {/* Friendly Tooltip Bubble */}
      {showTooltip && (
        <div className="bg-white text-[#29251F] text-xs px-3.5 py-2 rounded-xl shadow-xl border border-stone-200/80 flex items-center gap-2 max-w-xs animate-in fade-in slide-in-from-bottom-2 duration-300">
          <div className="flex-1">
            <span className="font-semibold block text-[#7A245A]">
              Chat with our Decor Stylist
            </span>
            <span className="text-stone-500 text-[11px]">
              Instant quotes on WhatsApp
            </span>
          </div>
          <button
            onClick={(e) => {
              e.stopPropagation();
              setShowTooltip(false);
            }}
            className="text-stone-400 hover:text-stone-700 p-0.5"
            aria-label="Close tooltip"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Button with animated ping */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-xl hover:shadow-2xl hover:scale-105 active:scale-95 transition-all duration-300"
        aria-label="WhatsApp Enquiries"
      >
        <span className="absolute -inset-1 rounded-full bg-[#25D366] opacity-30 animate-ping pointer-events-none" />
        <MessageCircle className="w-7 h-7 relative z-10 transition-transform group-hover:rotate-12" />
      </a>
    </div>
  );
};
