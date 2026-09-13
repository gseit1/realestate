import React, { useEffect } from 'react';
import { X, Building2, MapPin, Heart, Search, Phone, Mail, Compass, ShieldCheck } from 'lucide-react';

export default function Sidebar({
  isOpen,
  onClose,
  selectedCity,
  onSelectCity,
  onOpenSearch,
  onOpenFavorites,
  favoritesCount,
  onGoHome
}) {
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

  return (
    <div
      className="fixed inset-0 z-50 bg-black/40 flex justify-end animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-label="Μενού πλοήγησης"
    >
      {/* Drawer on the RIGHT side, with all text floating strictly on the LEFT side */}
      <div className="w-full sm:w-[380px] h-full bg-white flex flex-col justify-between overflow-y-auto border-l border-[#e6e9ed] transition-transform animate-in slide-in-from-right duration-200 text-left">
        {/* Top Header */}
        <div className="p-4 md:p-6 border-b border-[#e6e9ed] flex items-center justify-between text-left">
          <div className="flex flex-col items-start text-left">
            <span className="font-heading font-black text-lg sm:text-xl text-[#17211d] leading-none block text-left tracking-tight">
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
          </div>

          <button
            type="button"
            onClick={onClose}
            className="w-9 h-9 rounded-md bg-white hover:bg-[#f1f3f5] text-[#111418] border border-[#e6e9ed] flex items-center justify-center transition-colors cursor-pointer"
            aria-label="Κλείσιμο μενού"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Sidebar Content - All links and texts strictly aligned to the left */}
        <div className="p-4 md:p-6 flex-grow flex flex-col gap-6 text-left">
          {/* City Selector */}
          <div className="flex flex-col gap-2 text-left">
            <div className="text-xs font-medium text-[#5b6471] flex items-center gap-1.5 text-left">
              <MapPin className="w-3.5 h-3.5 text-[#c4975d]" />
              <span className="text-left">Επιλεγμένη Πόλη</span>
            </div>
            <div className="grid grid-cols-2 gap-2 text-left">
              <button
                type="button"
                onClick={() => {
                  onSelectCity('Αθήνα');
                  onClose();
                }}
                className={`min-h-[40px] px-3.5 rounded-md text-xs font-semibold border transition-colors cursor-pointer flex items-center justify-start gap-2 text-left ${
                  selectedCity === 'Αθήνα'
                    ? 'bg-[#17211d] text-white border-[#17211d]'
                    : 'bg-white text-[#5b6471] border-[#e6e9ed] hover:text-[#111418]'
                }`}
              >
                <span className={`w-1.5 h-1.5 rounded-full shrink-0 ${selectedCity === 'Αθήνα' ? 'bg-[#c4975d]' : 'bg-[#e6e9ed]'}`} />
                <span className="text-left">Αθήνα</span>
              </button>

              <button
                type="button"
                onClick={() => {
                  onSelectCity('Θεσσαλονίκη');
                  onClose();
                }}
                className={`min-h-[40px] px-3.5 rounded-md text-xs font-semibold border transition-colors cursor-pointer flex items-center justify-start gap-2 text-left ${
                  selectedCity === 'Θεσσαλονίκη'
                    ? 'bg-[#17211d] text-white border-[#17211d]'
                    : 'bg-white text-[#5b6471] border-[#e6e9ed] hover:text-[#111418]'
                }`}
              >
                <span className={`w-1.5 h-1.5 rounded-full shrink-0 ${selectedCity === 'Θεσσαλονίκη' ? 'bg-[#c4975d]' : 'bg-[#e6e9ed]'}`} />
                <span className="text-left">Θεσσαλονίκη</span>
              </button>
            </div>
          </div>

          {/* Navigation Links - Float strictly on the Left */}
          <nav className="flex flex-col gap-1 text-left w-full" aria-label="Κύρια πλοήγηση">
            <button
              type="button"
              onClick={() => {
                onGoHome();
                onClose();
              }}
              className="w-full min-h-[44px] text-left px-3 py-2 rounded-md hover:bg-[#f8f9fa] text-[#111418] font-semibold text-sm transition-colors flex items-center justify-start gap-3 cursor-pointer border-none bg-transparent"
            >
              <Compass className="w-4 h-4 text-[#c4975d] shrink-0" />
              <span className="text-left">Αρχική Σελίδα</span>
            </button>

            <button
              type="button"
              onClick={() => {
                onOpenSearch();
                onClose();
              }}
              className="w-full min-h-[44px] text-left px-3 py-2 rounded-md hover:bg-[#f8f9fa] text-[#111418] font-semibold text-sm transition-colors flex items-center justify-start gap-3 cursor-pointer border-none bg-transparent"
            >
              <Search className="w-4 h-4 text-[#c4975d] shrink-0" />
              <span className="text-left">Αναζήτηση Ακινήτων</span>
            </button>

            <button
              type="button"
              onClick={() => {
                onOpenFavorites();
                onClose();
              }}
              className="w-full min-h-[44px] text-left px-3 py-2 rounded-md hover:bg-[#f8f9fa] text-[#111418] font-semibold text-sm transition-colors flex items-center justify-start gap-3 cursor-pointer border-none bg-transparent"
            >
              <Heart className="w-4 h-4 text-[#c4975d] shrink-0" />
              <span className="text-left">Αγαπημένα</span>
              {favoritesCount > 0 && (
                <span className="px-2 py-0.5 rounded bg-[#17211d] text-white text-[11px] font-bold ml-1">
                  {favoritesCount}
                </span>
              )}
            </button>

            <button
              type="button"
              onClick={() => {
                onSelectCity('Αθήνα');
                onClose();
              }}
              className="w-full min-h-[44px] text-left px-3 py-2 rounded-md hover:bg-[#f8f9fa] text-[#5b6471] hover:text-[#111418] font-medium text-sm transition-colors flex items-center justify-start gap-3 cursor-pointer border-none bg-transparent"
            >
              <MapPin className="w-4 h-4 text-[#8e98a8] shrink-0" />
              <span className="text-left">Χαρτοφυλάκιο Αθήνας (5)</span>
            </button>

            <button
              type="button"
              onClick={() => {
                onSelectCity('Θεσσαλονίκη');
                onClose();
              }}
              className="w-full min-h-[44px] text-left px-3 py-2 rounded-md hover:bg-[#f8f9fa] text-[#5b6471] hover:text-[#111418] font-medium text-sm transition-colors flex items-center justify-start gap-3 cursor-pointer border-none bg-transparent"
            >
              <MapPin className="w-4 h-4 text-[#8e98a8] shrink-0" />
              <span className="text-left">Χαρτοφυλάκιο Θεσσαλονίκης (5)</span>
            </button>
          </nav>

          {/* Minimal Trust notice - Text Left */}
          <div className="p-3 rounded-md bg-[#f8f9fa] border border-[#e6e9ed] flex items-start gap-2.5 text-left">
            <ShieldCheck className="w-4 h-4 text-[#c4975d] shrink-0 mt-0.5" />
            <div className="text-xs text-[#5b6471] text-left">
              <span className="font-semibold text-[#111418] block text-left">Πιστοποιημένη Διαμεσολάβηση</span>
              <span className="text-left block">Πλήρης νομικός και τεχνικός έλεγχος για κάθε ακίνητο.</span>
            </div>
          </div>
        </div>

        {/* Bottom Contact Section - Text Left */}
        <div className="p-4 md:p-6 border-t border-[#e6e9ed] flex flex-col gap-2.5 text-left">
          <div className="text-xs font-semibold text-[#5b6471] text-left">
            Επικοινωνία με τους συμβούλους
          </div>
          <div className="flex items-center gap-2 text-left">
            <a
              href="tel:+302100000000"
              className="flex-1 min-h-[44px] rounded-md bg-white border border-[#e6e9ed] text-xs font-semibold text-[#111418] flex items-center justify-start px-3.5 gap-2 hover:bg-[#f8f9fa] transition-colors text-decoration-none text-left"
            >
              <Phone className="w-3.5 h-3.5 text-[#c4975d] shrink-0" />
              <span className="text-left">210 000 0000</span>
            </a>
            <a
              href="mailto:info@reservia.gr"
              className="flex-1 min-h-[44px] rounded-md bg-white border border-[#e6e9ed] text-xs font-semibold text-[#111418] flex items-center justify-start px-3.5 gap-2 hover:bg-[#f8f9fa] transition-colors text-decoration-none text-left"
            >
              <Mail className="w-3.5 h-3.5 text-[#c4975d] shrink-0" />
              <span className="text-left">Email</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
