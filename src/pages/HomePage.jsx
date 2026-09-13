import React, { useState } from 'react';
import { Search, SlidersHorizontal, Building } from 'lucide-react';
import EstateCarousel from '../components/EstateCarousel';
import EstateCard from '../components/EstateCard';
import { PROPERTY_TYPES } from '../data/estates';

export default function HomePage({
  allEstates,
  selectedCity,
  onSelectCity,
  onSelectEstate,
  onOpenSearch,
  favorites,
  onToggleFavorite,
  searchFilter,
  onClearSearchFilter
}) {
  const [selectedType, setSelectedType] = useState('Όλα τα είδη');

  // Filter estates for currently selected city
  const cityEstates = allEstates.filter(
    (e) => !selectedCity || e.city === selectedCity
  );

  // Filter by property type
  const displayEstates = cityEstates.filter((e) => {
    if (selectedType === 'Όλα τα είδη') return true;
    return e.type === selectedType;
  });

  // Featured estates for the first carousel
  const featuredEstates = cityEstates.filter((e) => e.featured);

  // Penthouse & Villas for the second carousel
  const luxuryPenthousesAndVillas = cityEstates.filter(
    (e) => e.type === 'Βίλα' || e.type === 'Ρετιρέ' || e.type === 'Μεζονέτα'
  );

  return (
    <main className="w-full pb-16">
      {/* Hero Section with Luxury Estate Background Image & High Contrast Text */}
      <section className="relative w-full overflow-hidden bg-[#0d1311] text-white">
        {/* Background Image */}
        <img
          src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=2000&q=85"
          alt="Luxury Architecture Estate"
          className="absolute inset-0 w-full h-full object-cover object-center opacity-60 scale-105 transition-transform duration-1000"
        />

        {/* High-contrast gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0d1311] via-[#0d1311]/60 to-black/40" />

        {/* Hero Content */}
        <div className="relative max-w-[1280px] mx-auto px-4 md:px-6 pt-12 md:pt-20 pb-12 md:pb-16 flex flex-col gap-4">
          {/* Active filter alert banner */}
          {searchFilter && (
            <div className="p-3 rounded-md bg-white/10 backdrop-blur-md border border-white/20 text-white flex items-center justify-between gap-2 text-xs md:text-sm">
              <span>
                Ενεργά φίλτρα: {searchFilter.results.length} ακίνητα βρέθηκαν.
              </span>
              <button
                type="button"
                onClick={onClearSearchFilter}
                className="underline hover:text-[#c4975d] cursor-pointer bg-transparent border-none text-white font-medium"
              >
                Επαναφορά
              </button>
            </div>
          )}

          {/* Main Hero Headline in Commissioner 900 - High visibility */}
          <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white tracking-tight max-w-[860px] leading-tight">
            {selectedCity === 'Αθήνα'
              ? 'Εκλεκτές κατοικίες στην πρωτεύουσα με διαχρονική αίγλη.'
              : 'Μοναδικά ακίνητα στη Θεσσαλονίκη με ανοιχτό ορίζοντα.'}
          </h1>

          <p className="text-sm sm:text-base md:text-lg text-white/90 max-w-[640px] leading-relaxed font-normal">
            Ανακαλύψτε επιλεγμένα ρετιρέ, πολυτελείς βίλες και διαμερίσματα υψηλής αισθητικής με πιστοποιημένη αξιοπιστία.
          </p>

          {/* Search Bar trigger on Hero */}
          <div className="mt-2 w-full max-w-[560px]">
            <button
              type="button"
              onClick={onOpenSearch}
              className="touch-target w-full min-h-[50px] px-4 rounded-md bg-white text-[#111418] border border-white/30 hover:bg-[#f8f9fa] transition-colors flex items-center justify-between text-left cursor-pointer group"
            >
              <div className="flex items-center gap-2.5 text-[#5b6471]">
                <Search className="w-4 h-4 text-[#c4975d]" />
                <span className="text-xs sm:text-sm text-[#5b6471]">
                  Αναζήτηση σε {selectedCity}, τιμή, τ.μ. ή τύπο...
                </span>
              </div>
              <div className="w-7 h-7 rounded bg-[#f1f3f5] flex items-center justify-center text-[#17211d]">
                <SlidersHorizontal className="w-3.5 h-3.5" />
              </div>
            </button>
          </div>
        </div>
      </section>

      {/* Property Type Filter Chips */}
      <section className="max-w-[1280px] mx-auto px-4 md:px-6 mt-6 mb-2">
        <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
          {PROPERTY_TYPES.map((type) => (
            <button
              key={type}
              type="button"
              onClick={() => setSelectedType(type)}
              className={`min-h-[38px] px-3.5 rounded-md text-xs font-semibold border transition-colors cursor-pointer whitespace-nowrap ${
                selectedType === type
                  ? 'bg-[#17211d] text-white border-[#17211d]'
                  : 'bg-white text-[#5b6471] border-[#e6e9ed] hover:text-[#111418]'
              }`}
            >
              {type}
            </button>
          ))}
        </div>
      </section>

      {/* 1st Carousel: Featured Estates */}
      <EstateCarousel
        title="Επιλεγμένα Ακίνητα"
        subtitle={`Κορυφαίες επιλογές κατοικιών σε ${selectedCity}`}
        estates={featuredEstates}
        onSelectEstate={onSelectEstate}
        favorites={favorites}
        onToggleFavorite={onToggleFavorite}
      />

      {/* 2nd Carousel: Villas & Penthouses */}
      {luxuryPenthousesAndVillas.length > 0 && (
        <EstateCarousel
          title="Ρετιρέ & Μονοκατοικίες"
          subtitle="Κατοικίες με ευρύχωρους χώρους και ιδιωτικότητα"
          estates={luxuryPenthousesAndVillas}
          onSelectEstate={onSelectEstate}
          favorites={favorites}
          onToggleFavorite={onToggleFavorite}
        />
      )}

      {/* Full Grid of Estates */}
      <section className="max-w-[1280px] mx-auto px-4 md:px-6 my-8 md:my-12">
        <div className="mb-6 flex items-end justify-between border-t border-[#e6e9ed] pt-6">
          <div>
            <h2 className="font-heading text-2xl md:text-3xl text-[#111418] tracking-tight">
              Όλα τα Ακίνητα στην {selectedCity}
            </h2>
            <p className="text-xs sm:text-sm text-[#5b6471] mt-0.5">
              Εμφανίζονται {displayEstates.length} διαθέσιμα ακίνητα
            </p>
          </div>
        </div>

        {displayEstates.length === 0 ? (
          <div className="py-12 text-center">
            <Building className="w-10 h-10 text-[#8e98a8] mx-auto mb-2" />
            <h3 className="font-heading text-base text-[#111418] mb-1">
              Δεν βρέθηκαν ακίνητα
            </h3>
            <p className="text-xs text-[#5b6471] mb-4">
              Δεν υπάρχουν καταχωρίσεις για τον επιλεγμένο τύπο.
            </p>
            <button
              type="button"
              onClick={() => setSelectedType('Όλα τα είδη')}
              className="btn-primary min-h-[44px] text-xs px-4"
            >
              Εμφάνιση όλων
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {displayEstates.map((estate) => (
              <EstateCard
                key={estate.id}
                estate={estate}
                onSelect={onSelectEstate}
                isFavorite={favorites.includes(estate.id)}
                onToggleFavorite={onToggleFavorite}
                layout="grid"
              />
            ))}
          </div>
        )}
      </section>
    </main>
  );
}
