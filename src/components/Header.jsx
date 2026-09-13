import React, { useState, useRef, useEffect } from 'react';
import { Search, Menu, MapPin, Building2, ChevronDown, Check } from 'lucide-react';

export default function Header({
  selectedCity,
  onSelectCity,
  onOpenSearch,
  onToggleSidebar,
  favoritesCount,
  onGoHome
}) {
  const [isCityDropdownOpen, setIsCityDropdownOpen] = useState(false);
  const dropdownRefMobile = useRef(null);
  const dropdownRefDesktop = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      const clickedOutsideMobile =
        !dropdownRefMobile.current || !dropdownRefMobile.current.contains(event.target);
      const clickedOutsideDesktop =
        !dropdownRefDesktop.current || !dropdownRefDesktop.current.contains(event.target);

      if (clickedOutsideMobile && clickedOutsideDesktop) {
        setIsCityDropdownOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const cities = ['Αθήνα', 'Θεσσαλονίκη'];

  const renderDropdown = (dropdownRef, alignRight = false) => (
    <div className="relative" ref={dropdownRef}>
      <button
        type="button"
        onClick={() => setIsCityDropdownOpen((prev) => !prev)}
        aria-expanded={isCityDropdownOpen}
        aria-haspopup="listbox"
        className="touch-target min-h-[44px] px-1 bg-transparent hover:text-[#c4975d] border-none text-sm md:text-base font-bold text-[#111418] flex items-center gap-1.5 transition-colors cursor-pointer"
      >
        <MapPin className="w-3.5 h-3.5 text-[#c4975d]" />
        <span>{selectedCity}</span>
        <ChevronDown
          className={`w-3.5 h-3.5 text-[#5b6471] transition-transform duration-150 ${
            isCityDropdownOpen ? 'rotate-180' : ''
          }`}
        />
      </button>

      {isCityDropdownOpen && (
        <div
          role="listbox"
          aria-label="Επιλογή πόλης"
          className={`absolute ${
            alignRight ? 'right-0' : 'left-1/2 -translate-x-1/2'
          } top-full mt-1.5 w-44 bg-white border border-[#e6e9ed] rounded-md py-1 z-50 animate-in fade-in duration-100`}
        >
          {cities.map((city) => (
            <button
              key={city}
              type="button"
              role="option"
              aria-selected={selectedCity === city}
              onClick={() => {
                onSelectCity(city);
                setIsCityDropdownOpen(false);
              }}
              className={`touch-target w-full text-left px-3.5 py-2 text-xs md:text-sm font-medium flex items-center justify-between transition-colors cursor-pointer border-none bg-transparent ${
                selectedCity === city
                  ? 'text-[#17211d] font-bold bg-[#f8f9fa]'
                  : 'text-[#5b6471] hover:text-[#111418] hover:bg-[#f8f9fa]'
              }`}
            >
              <span>{city}</span>
              {selectedCity === city && (
                <Check className="w-3.5 h-3.5 text-[#17211d]" />
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );

  return (
    <header className="sticky top-0 z-40 w-full bg-[#ffffff] border-b border-[#e6e9ed]">
      <div className="max-w-[1280px] mx-auto px-4 md:px-6 h-14 md:h-16 flex items-center justify-between gap-2">
        {/* Left: Brand Logo - Perfectly aligned and balanced */}
        <button
          type="button"
          onClick={onGoHome}
          className="flex flex-col items-start justify-center text-left bg-transparent border-none cursor-pointer p-0 group"
          aria-label="Αρχική σελίδα RealEstate"
        >
          <span className="font-heading font-black text-lg sm:text-xl md:text-2xl text-[#17211d] tracking-tight leading-none text-left">
            RealEstate
          </span>
          <div className="flex items-center gap-1 mt-0.5 text-left">
            <span className="text-[10px] sm:text-xs font-semibold text-[#5b6471] lowercase leading-none text-left">
              by
            </span>
            <img
              src="/logo3-cropped.png"
              alt="Reservia"
              className="h-3 sm:h-3.5 w-auto object-contain object-left block"
            />
          </div>
        </button>

        {/* Mobile Middle: City Selector (< md) */}
        <div className="md:hidden">
          {renderDropdown(dropdownRefMobile, false)}
        </div>

        {/* Right Section: On laptops, City Selector is next to Search */}
        <div className="flex items-center gap-2 md:gap-3">
          {/* Laptop City Selector (>= md) next to Search */}
          <div className="hidden md:block mr-1">
            {renderDropdown(dropdownRefDesktop, true)}
          </div>

          <button
            type="button"
            onClick={onOpenSearch}
            className="touch-target w-10 h-10 rounded-md bg-white hover:bg-[#f1f3f5] text-[#111418] border border-[#e6e9ed] flex items-center justify-center transition-colors cursor-pointer"
            aria-label="Άνοιγμα αναζήτησης"
            title="Αναζήτηση"
          >
            <Search className="w-4 h-4" />
          </button>

          <button
            type="button"
            onClick={onToggleSidebar}
            className="touch-target w-10 h-10 rounded-md bg-white hover:bg-[#f1f3f5] text-[#111418] border border-[#e6e9ed] flex items-center justify-center transition-colors cursor-pointer relative"
            aria-label="Μενού πλοήγησης"
            title="Μενού"
          >
            <Menu className="w-4 h-4" />
            {favoritesCount > 0 && (
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-[#c4975d] text-white text-[10px] font-bold rounded flex items-center justify-center">
                {favoritesCount}
              </span>
            )}
          </button>
        </div>
      </div>
    </header>
  );
}
