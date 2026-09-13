import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import EstateCard from './EstateCard';

export default function EstateCarousel({
  title,
  subtitle,
  estates,
  onSelectEstate,
  favorites,
  onToggleFavorite
}) {
  const scrollContainerRef = useRef(null);

  const handleScroll = (direction) => {
    if (scrollContainerRef.current) {
      const offset = direction === 'left' ? -330 : 330;
      scrollContainerRef.current.scrollBy({ left: offset, behavior: 'smooth' });
    }
  };

  if (!estates || estates.length === 0) {
    return null;
  }

  return (
    <section className="w-full my-6 md:my-10">
      {/* Carousel Header */}
      <div className="max-w-[1280px] mx-auto px-4 md:px-6 mb-3 md:mb-5 flex items-end justify-between">
        <div>
          <h2 className="font-heading text-xl sm:text-2xl md:text-3xl text-[#111418] tracking-tight">
            {title}
          </h2>
          {subtitle && (
            <p className="text-xs sm:text-sm text-[#5b6471] mt-0.5">
              {subtitle}
            </p>
          )}
        </div>

        {/* Navigation arrows */}
        <div className="hidden sm:flex items-center gap-1.5">
          <button
            type="button"
            onClick={() => handleScroll('left')}
            className="touch-target w-9 h-9 rounded-md bg-white hover:bg-[#f1f3f5] border border-[#e6e9ed] text-[#111418] flex items-center justify-center transition-colors cursor-pointer active:scale-95"
            aria-label="Προηγούμενα ακίνητα"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            type="button"
            onClick={() => handleScroll('right')}
            className="touch-target w-9 h-9 rounded-md bg-white hover:bg-[#f1f3f5] border border-[#e6e9ed] text-[#111418] flex items-center justify-center transition-colors cursor-pointer active:scale-95"
            aria-label="Επόμενα ακίνητα"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Horizontal Carousel Track - Exactly aligned with title padding */}
      <div
        ref={scrollContainerRef}
        className="snap-carousel px-4 md:px-6 scroll-pl-4 md:scroll-pl-6 gap-4 md:gap-6 pb-2 max-w-[1280px] mx-auto"
        role="region"
        aria-label={title}
      >
        {estates.map((estate) => (
          <EstateCard
            key={estate.id}
            estate={estate}
            onSelect={onSelectEstate}
            isFavorite={favorites.includes(estate.id)}
            onToggleFavorite={onToggleFavorite}
            layout="carousel"
          />
        ))}
      </div>
    </section>
  );
}
