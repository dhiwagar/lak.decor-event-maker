import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Maximize2, MapPin, Sparkles } from 'lucide-react';
import { GalleryItem } from '../../types';
import { galleryItems } from '../../data/gallery';
import { GalleryLightbox } from './GalleryLightbox';

interface GalleryGridProps {
  initialCategory?: string;
  limit?: number;
  showFilters?: boolean;
}

export const GalleryGrid: React.FC<GalleryGridProps> = ({
  initialCategory = 'all',
  limit,
  showFilters = true,
}) => {
  const [activeCategory, setActiveCategory] = useState(initialCategory);
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

  const categories = [
    { id: 'all', label: 'All Celebrations' },
    { id: 'weddings', label: 'Weddings & Mandaps' },
    { id: 'receptions', label: 'Reception Stages' },
    { id: 'engagements', label: 'Engagements' },
    { id: 'birthdays', label: 'Birthdays' },
    { id: 'haldi', label: 'Haldi & Mehendi' },
    { id: 'floral', label: 'Floral Setups' },
    { id: 'babyshower', label: 'Baby Shower' },
  ];

  const filteredItems = galleryItems.filter((item) => {
    if (activeCategory === 'all') return true;
    return item.category === activeCategory;
  });

  const displayedItems = limit ? filteredItems.slice(0, limit) : filteredItems;

  const handleNext = () => {
    if (!selectedItem) return;
    const currentIndex = displayedItems.findIndex((i) => i.id === selectedItem.id);
    const nextIndex = (currentIndex + 1) % displayedItems.length;
    setSelectedItem(displayedItems[nextIndex]);
  };

  const handlePrev = () => {
    if (!selectedItem) return;
    const currentIndex = displayedItems.findIndex((i) => i.id === selectedItem.id);
    const prevIndex =
      currentIndex === 0 ? displayedItems.length - 1 : currentIndex - 1;
    setSelectedItem(displayedItems[prevIndex]);
  };

  return (
    <div>
      {/* Category Filter Buttons */}
      {showFilters && (
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-10">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 ${
                activeCategory === cat.id
                  ? 'luxury-gradient-btn shadow-md text-white scale-105'
                  : 'bg-white text-stone-600 hover:text-[#7A245A] border border-stone-200/80 hover:border-[#B18B59]/40'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      )}

      {/* Grid with animation */}
      <motion.div
        layout
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
      >
        <AnimatePresence>
          {displayedItems.map((item) => (
            <motion.div
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4 }}
              key={item.id}
              className="group relative rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 bg-stone-100 cursor-pointer h-80 sm:h-96"
              onClick={() => setSelectedItem(item)}
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover object-center transform transition-transform duration-700 ease-out group-hover:scale-108"
                loading="lazy"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-6">
                {/* Top Badge */}
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 rounded-full text-[10px] font-semibold tracking-wider uppercase bg-white/20 backdrop-blur-md text-amber-200 border border-white/20">
                    {item.categoryLabel}
                  </span>
                  <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md text-white flex items-center justify-center transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                    <Maximize2 className="w-4 h-4" />
                  </div>
                </div>

                {/* Bottom Details */}
                <div className="transform translate-y-3 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-xl font-serif font-medium text-white mb-1">
                    {item.title}
                  </h3>
                  <p className="text-xs text-stone-300 font-light line-clamp-2 mb-2">
                    {item.caption}
                  </p>
                  {item.location && (
                    <div className="flex items-center gap-1.5 text-xs text-amber-300/90 font-medium">
                      <MapPin className="w-3.5 h-3.5" />
                      <span>{item.location}</span>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Lightbox Modal */}
      <GalleryLightbox
        item={selectedItem}
        items={displayedItems}
        onClose={() => setSelectedItem(null)}
        onNext={handleNext}
        onPrev={handlePrev}
      />
    </div>
  );
};
