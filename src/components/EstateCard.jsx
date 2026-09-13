import React from 'react';
import { Bed, Bath, Maximize, MapPin, Heart } from 'lucide-react';

export default function EstateCard({
  estate,
  onSelect,
  isFavorite,
  onToggleFavorite,
  layout = 'carousel' // 'carousel' or 'grid'
}) {
  const isCarousel = layout === 'carousel';

  return (
    <div
      onClick={() => onSelect(estate)}
      className={`group cursor-pointer flex flex-col transition-opacity duration-200 hover:opacity-90 ${
        isCarousel
          ? 'w-[280px] sm:w-[310px] md:w-[330px] snap-item'
          : 'w-full'
      }`}
    >
      {/* Minimal Image Container with small radius (rounded-lg) and NO shadow */}
      <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg bg-[#eceef1]">
        <img
          src={estate.images[0]}
          alt={estate.title}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-103"
        />

        {/* Minimal Type Badge on top-left */}
        <div className="absolute top-2.5 left-2.5">
          <span className="px-2.5 py-0.5 bg-black/70 text-white rounded text-[11px] font-medium tracking-wide">
            {estate.type}
          </span>
        </div>

        {/* Minimal Heart Button on top-right */}
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onToggleFavorite(estate.id);
          }}
          aria-label={isFavorite ? 'Αφαίρεση από τα αγαπημένα' : 'Προσθήκη στα αγαπημένα'}
          className="touch-target absolute top-2 right-2 w-9 h-9 rounded-full bg-black/40 hover:bg-black/60 text-white flex items-center justify-center transition-colors cursor-pointer border-none"
        >
          <Heart
            className={`w-4 h-4 transition-colors ${
              isFavorite
                ? 'fill-[#e11d48] text-[#e11d48]'
                : 'text-white hover:text-white'
            }`}
          />
        </button>
      </div>

      {/* Minimal Details Container - No box, no heavy border */}
      <div className="pt-3 pb-1 flex flex-col gap-1.5">
        {/* Price & Location row */}
        <div className="flex items-baseline justify-between gap-2">
          <div className="text-lg sm:text-xl font-bold text-[#111418] font-ui">
            {estate.priceFormatted}
          </div>
          <div className="text-xs text-[#5b6471] flex items-center gap-1">
            <MapPin className="w-3 h-3 text-[#5b6471] shrink-0" />
            <span className="truncate">{estate.neighborhood}</span>
          </div>
        </div>

        {/* Title */}
        <h3 className="font-heading text-base sm:text-lg text-[#111418] line-clamp-1 group-hover:text-[#c4975d] transition-colors">
          {estate.title}
        </h3>

        {/* Minimal Specs */}
        <div className="flex items-center gap-3 text-xs text-[#5b6471] pt-0.5">
          <span>{estate.area} τ.μ.</span>
          <span className="text-[#8e98a8]">•</span>
          <span>{estate.bedrooms} Υπν.</span>
          <span className="text-[#8e98a8]">•</span>
          <span>{estate.bathrooms} Μπ.</span>
        </div>
      </div>
    </div>
  );
}
