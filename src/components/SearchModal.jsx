import React, { useState, useEffect } from 'react';
import { X, Search, RotateCcw, MapPin, Home, Euro, SlidersHorizontal, Check } from 'lucide-react';
import { PROPERTY_TYPES } from '../data/estates';

export default function SearchModal({
  isOpen,
  onClose,
  allEstates,
  initialCity,
  onApplySearch
}) {
  const [keyword, setKeyword] = useState('');
  const [city, setCity] = useState(initialCity || 'all');
  const [propertyType, setPropertyType] = useState('Όλα τα είδη');
  const [maxPrice, setMaxPrice] = useState(3000000);
  const [bedrooms, setBedrooms] = useState('all');

  useEffect(() => {
    if (initialCity) {
      setCity(initialCity);
    }
  }, [initialCity]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const matchingEstates = allEstates.filter((item) => {
    const matchCity = city === 'all' || item.city === city;
    const matchType = propertyType === 'Όλα τα είδη' || item.type === propertyType;
    const matchPrice = item.price <= maxPrice;
    const matchBeds = bedrooms === 'all' || item.bedrooms >= parseInt(bedrooms, 10);
    const matchKeyword =
      !keyword ||
      item.title.toLowerCase().includes(keyword.toLowerCase()) ||
      item.neighborhood.toLowerCase().includes(keyword.toLowerCase()) ||
      item.city.toLowerCase().includes(keyword.toLowerCase());

    return matchCity && matchType && matchPrice && matchBeds && matchKeyword;
  });

  const handleReset = () => {
    setKeyword('');
    setCity('all');
    setPropertyType('Όλα τα είδη');
    setMaxPrice(3000000);
    setBedrooms('all');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onApplySearch({
      keyword,
      city,
      propertyType,
      maxPrice,
      bedrooms,
      results: matchingEstates
    });
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-[#ffffff] flex flex-col justify-between overflow-y-auto animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-label="Αναζήτηση Ακινήτων"
    >
      {/* Top Header - Flat, no shadow */}
      <div className="sticky top-0 z-10 bg-white border-b border-[#e6e9ed] px-4 md:px-8 py-3.5 flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-md bg-[#17211d] flex items-center justify-center text-white">
            <SlidersHorizontal className="w-4 h-4 text-[#c4975d]" />
          </div>
          <div>
            <h2 className="font-heading text-lg md:text-xl text-[#111418] tracking-tight">
              Αναζήτηση Ακινήτων
            </h2>
            <p className="text-[11px] text-[#5b6471]">
              Εντοπίστε την ιδανική κατοικία
            </p>
          </div>
        </div>

        <button
          type="button"
          onClick={onClose}
          className="touch-target w-9 h-9 rounded-md bg-white hover:bg-[#f1f3f5] text-[#111418] border border-[#e6e9ed] flex items-center justify-center transition-colors cursor-pointer"
          aria-label="Κλείσιμο αναζήτησης"
        >
          <X className="w-4 h-4" />
        </button>
      </div>

      {/* Filter Body Content - Clean, minimal inputs without heavy boxes */}
      <div className="max-w-[768px] w-full mx-auto px-4 md:px-6 py-6 flex-grow flex flex-col gap-6">
        {/* Search Keyword */}
        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-semibold text-[#111418] flex items-center gap-1.5">
            <Search className="w-3.5 h-3.5 text-[#c4975d]" />
            <span>Λέξη-κλειδί ή Περιοχή</span>
          </label>
          <div className="relative">
            <input
              type="text"
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
              placeholder="π.χ. Κολωνάκι, Πανόραμα, ρετιρέ..."
              className="w-full h-11 px-3 pl-10 rounded-md bg-white border border-[#e6e9ed] text-xs sm:text-sm text-[#111418] placeholder-[#8e98a8] focus:border-[#17211d] focus:outline-none transition-colors"
            />
            <Search className="w-4 h-4 text-[#8e98a8] absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
          </div>
        </div>

        {/* City Filter */}
        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-semibold text-[#111418] flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5 text-[#c4975d]" />
            <span>Επιλογή Πόλης</span>
          </label>
          <div className="grid grid-cols-3 gap-2">
            {[
              { id: 'all', label: 'Όλες' },
              { id: 'Αθήνα', label: 'Αθήνα' },
              { id: 'Θεσσαλονίκη', label: 'Θεσσαλονίκη' }
            ].map((option) => (
              <button
                key={option.id}
                type="button"
                onClick={() => setCity(option.id)}
                className={`min-h-[40px] px-3 rounded-md text-xs font-semibold border transition-colors cursor-pointer flex items-center justify-center gap-1 ${
                  city === option.id
                    ? 'bg-[#17211d] text-white border-[#17211d]'
                    : 'bg-white text-[#5b6471] border-[#e6e9ed] hover:text-[#111418]'
                }`}
              >
                {city === option.id && <Check className="w-3 h-3" />}
                <span>{option.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Property Type */}
        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-semibold text-[#111418] flex items-center gap-1.5">
            <Home className="w-3.5 h-3.5 text-[#c4975d]" />
            <span>Τύπος Ακινήτου</span>
          </label>
          <div className="flex flex-wrap gap-2">
            {PROPERTY_TYPES.map((type) => (
              <button
                key={type}
                type="button"
                onClick={() => setPropertyType(type)}
                className={`min-h-[38px] px-3.5 rounded-md text-xs font-medium border transition-colors cursor-pointer ${
                  propertyType === type
                    ? 'bg-[#17211d] text-white border-[#17211d]'
                    : 'bg-white text-[#5b6471] border-[#e6e9ed] hover:text-[#111418]'
                }`}
              >
                {type}
              </button>
            ))}
          </div>
        </div>

        {/* Price Slider - Flat minimal container */}
        <div className="flex flex-col gap-2 pt-2 border-t border-[#e6e9ed]">
          <div className="flex items-center justify-between">
            <label className="text-xs font-semibold text-[#111418] flex items-center gap-1.5">
              <Euro className="w-3.5 h-3.5 text-[#c4975d]" />
              <span>Μέγιστη Τιμή</span>
            </label>
            <span className="font-heading text-base text-[#17211d]">
              {maxPrice >= 3000000 ? 'Χωρίς όριο' : `έως ${maxPrice.toLocaleString('el-GR')} €`}
            </span>
          </div>
          <input
            type="range"
            min="300000"
            max="3000000"
            step="50000"
            value={maxPrice}
            onChange={(e) => setMaxPrice(parseInt(e.target.value, 10))}
            className="w-full accent-[#17211d] cursor-pointer"
          />
          <div className="flex justify-between text-[11px] text-[#8e98a8]">
            <span>300.000 €</span>
            <span>1.500.000 €</span>
            <span>3.000.000 €+</span>
          </div>
        </div>

        {/* Bedrooms selector */}
        <div className="flex flex-col gap-1.5 pt-2 border-t border-[#e6e9ed]">
          <label className="text-xs font-semibold text-[#111418]">
            Ελάχιστα Υπνοδωμάτια
          </label>
          <div className="grid grid-cols-5 gap-2">
            {[
              { id: 'all', label: 'Όλα' },
              { id: '1', label: '1+' },
              { id: '2', label: '2+' },
              { id: '3', label: '3+' },
              { id: '4', label: '4+' }
            ].map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => setBedrooms(item.id)}
                className={`min-h-[38px] rounded-md text-xs font-semibold border transition-colors cursor-pointer flex items-center justify-center ${
                  bedrooms === item.id
                    ? 'bg-[#17211d] text-white border-[#17211d]'
                    : 'bg-white text-[#5b6471] border-[#e6e9ed] hover:text-[#111418]'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Sticky Action Bar - Flat border top, no shadow-lg */}
      <div className="sticky bottom-0 z-10 bg-white border-t border-[#e6e9ed] p-4 md:px-8">
        <div className="max-w-[768px] mx-auto flex items-center gap-2.5">
          <button
            type="button"
            onClick={handleReset}
            className="btn-secondary min-h-[44px] px-3.5 rounded-md"
            title="Επαναφορά φίλτρων"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span className="text-xs">Επαναφορά</span>
          </button>

          <button
            type="button"
            onClick={handleSubmit}
            className="btn-primary min-h-[48px] flex-grow text-sm rounded-md"
          >
            <Search className="w-4 h-4" />
            <span>
              Προβολή {matchingEstates.length} {matchingEstates.length === 1 ? 'Ακινήτου' : 'Ακινήτων'}
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
