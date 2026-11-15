import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Maximize2, MapPin } from 'lucide-react';
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
    { id: 'floral', label: 'Floral & Entrances' },
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
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.35 }}
              key={item.id}
              className="group rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 bg-white border border-stone-200/80 cursor-pointer flex flex-col"
              onClick={() => setSelectedItem(item)}
            >
              {/* Image Container: Clean image with subtle smooth zoom only. NO text overlay on hover */}
              <div className="relative h-72 sm:h-80 overflow-hidden bg-stone-100">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover object-center transform transition-transform duration-700 ease-out group-hover:scale-105"
                  loading="lazy"
                />
              </div>

              {/* Clean Card Info Below Image - Never obscured by hover text */}
              <div className="p-4 sm:p-5 flex items-center justify-between gap-3 bg-white">
                <div className="min-w-0">
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#B18B59]">
                      {item.categoryLabel}
                    </span>
                    {item.location && (
                      <>
                        <span className="text-stone-300 text-xs">•</span>
                        <div className="flex items-center gap-1 text-[11px] text-stone-500 font-medium">
                          <MapPin className="w-3 h-3 text-[#B18B59]" />
                          <span>{item.location}</span>
                        </div>
                      </>
                    )}
                  </div>
                  <h3 className="text-base sm:text-lg font-serif font-semibold text-[#29251F] group-hover:text-[#7A245A] transition-colors truncate mt-0.5">
                    {item.title}
                  </h3>
                </div>

                <div className="w-9 h-9 rounded-full bg-[#FAF8F4] border border-stone-200 flex items-center justify-center text-stone-500 group-hover:text-[#7A245A] group-hover:border-[#7A245A]/40 transition-colors flex-shrink-0 shadow-xs">
                  <Maximize2 className="w-4 h-4" />
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
