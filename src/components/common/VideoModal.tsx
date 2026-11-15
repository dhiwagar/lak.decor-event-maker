import React, { useEffect } from 'react';
import { X, Play, Sparkles } from 'lucide-react';

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
}

export const VideoModal: React.FC<VideoModalProps> = ({
  isOpen,
  onClose,
  title = 'lak.decor & event maker — Behind The Artistry',
}) => {
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-xl p-4 sm:p-6 animate-in fade-in duration-300"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl bg-stone-900 rounded-3xl overflow-hidden shadow-2xl border border-white/10"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 sm:p-5 border-b border-stone-800 text-white">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-[#B18B59]" />
            <h3 className="text-sm sm:text-base font-serif font-medium">{title}</h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
            aria-label="Close Modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Video / High-definition Showcase */}
        <div className="relative aspect-video bg-black flex items-center justify-center overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1600&q=80"
            alt="Wedding Mandap Celebration Showcase"
            className="w-full h-full object-cover opacity-80"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30 flex flex-col items-center justify-center p-6 text-center text-white">
            <div className="w-16 h-16 rounded-full bg-[#7A245A]/90 text-white flex items-center justify-center shadow-2xl mb-4 border-2 border-white/30 animate-pulse">
              <Play className="w-7 h-7 ml-1" />
            </div>
            <h4 className="text-2xl font-serif text-amber-100 font-medium max-w-md">
              A Symphony of Fragrance, Color & Celebrations
            </h4>
            <p className="text-stone-300 text-xs sm:text-sm mt-2 max-w-lg font-light leading-relaxed">
              Experience the passion, craftsmanship, and sleepless dedication that
              goes into transforming ordinary venues into timeless fairy tales.
            </p>
          </div>
        </div>

        {/* Footer info */}
        <div className="p-4 bg-stone-950 flex flex-wrap items-center justify-between gap-4 text-xs text-stone-400">
          <span>lak.decor & event maker • Chennai Studio</span>
          <span className="text-[#B18B59] font-medium">
            Contact: +91 95972 65450
          </span>
        </div>
      </div>
    </div>
  );
};
