import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export const BackToTop: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setVisible(window.scrollY > 400);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  if (!visible) return null;

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-6 left-6 z-40 w-11 h-11 rounded-full bg-white text-[#29251F] border border-stone-200/90 shadow-lg hover:shadow-xl hover:border-[#B18B59] hover:text-[#7A245A] flex items-center justify-center transition-all duration-200 hover:-translate-y-1 touch-manipulation transform-gpu"
      style={{ transform: 'translateZ(0)' }}
      aria-label="Back to Top"
    >
      <ArrowUp className="w-5 h-5 pointer-events-none" />
    </button>
  );
};
