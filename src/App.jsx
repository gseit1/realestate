import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import SearchModal from './components/SearchModal';
import HomePage from './pages/HomePage';
import EstatePage from './pages/EstatePage';
import EstateCard from './components/EstateCard';
import { estatesData } from './data/estates';
import { MapPin, ArrowLeft, Heart } from 'lucide-react';

export default function App() {
  const [selectedCity, setSelectedCity] = useState('Αθήνα');
  const [currentPage, setCurrentPage] = useState('home'); // 'home' | 'estate' | 'favorites'
  const [selectedEstate, setSelectedEstate] = useState(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchFilter, setSearchFilter] = useState(null);

  // Favorites state persisted in localStorage
  const [favorites, setFavorites] = useState(() => {
    try {
      const saved = localStorage.getItem('reservia_favorites');
      return saved ? JSON.parse(saved) : ['ath-01', 'skg-01'];
    } catch {
      return ['ath-01', 'skg-01'];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('reservia_favorites', JSON.stringify(favorites));
    } catch (e) {
      console.error(e);
    }
  }, [favorites]);

  const toggleFavorite = (id) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const handleSelectCity = (city) => {
    setSelectedCity(city);
    if (searchFilter && searchFilter.city !== 'all' && searchFilter.city !== city) {
      setSearchFilter(null);
    }
    if (currentPage === 'estate' || currentPage === 'favorites') {
      setCurrentPage('home');
    }
  };

  const handleSelectEstate = (estate) => {
    setSelectedEstate(estate);
    setCurrentPage('estate');
  };

  const handleGoHome = () => {
    setCurrentPage('home');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenFavorites = () => {
    setCurrentPage('favorites');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleApplySearch = (filter) => {
    setSearchFilter(filter);
    if (filter.city !== 'all') {
      setSelectedCity(filter.city);
    }
    setCurrentPage('home');
  };

  const handleClearSearchFilter = () => {
    setSearchFilter(null);
  };

  const currentPool = searchFilter ? searchFilter.results : estatesData;
  const favoriteEstatesList = estatesData.filter((e) => favorites.includes(e.id));

  return (
    <div className="min-h-screen flex flex-col bg-white text-[#111418]">
      {/* Sticky Top Header */}
      <Header
        selectedCity={selectedCity}
        onSelectCity={handleSelectCity}
        onOpenSearch={() => setIsSearchOpen(true)}
        onToggleSidebar={() => setIsSidebarOpen(true)}
        favoritesCount={favorites.length}
        onGoHome={handleGoHome}
      />

      {/* Main Page Routing */}
      <div className="flex-grow">
        {currentPage === 'estate' && selectedEstate ? (
          <EstatePage
            estate={selectedEstate}
            onBack={handleGoHome}
            isFavorite={favorites.includes(selectedEstate.id)}
            onToggleFavorite={toggleFavorite}
          />
        ) : currentPage === 'favorites' ? (
          <main className="max-w-[1280px] mx-auto px-4 md:px-6 py-6 md:py-10">
            <div className="mb-6">
              <button
                type="button"
                onClick={handleGoHome}
                className="touch-target inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#17211d] bg-transparent border-none cursor-pointer p-0 mb-3 hover:text-[#c4975d]"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Επιστροφή στην Αρχική</span>
              </button>

              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-md bg-rose-50 flex items-center justify-center text-[#e11d48]">
                  <Heart className="w-4 h-4 fill-[#e11d48]" />
                </div>
                <div>
                  <h1 className="font-heading text-xl sm:text-2xl text-[#111418] tracking-tight">
                    Αποθηκευμένα Ακίνητα
                  </h1>
                  <p className="text-xs text-[#5b6471]">
                    {favoriteEstatesList.length}{' '}
                    {favoriteEstatesList.length === 1 ? 'ακίνητο στη λίστα σας' : 'ακίνητα στη λίστα σας'}
                  </p>
                </div>
              </div>
            </div>

            {favoriteEstatesList.length === 0 ? (
              <div className="py-16 text-center border-t border-[#e6e9ed]">
                <Heart className="w-10 h-10 text-[#8e98a8] mx-auto mb-2" />
                <h3 className="font-heading text-base text-[#111418] mb-1">
                  Δεν έχετε αποθηκεύσει ακόμη ακίνητα
                </h3>
                <p className="text-xs text-[#5b6471] mb-4">
                  Πατήστε την καρδιά σε οποιοδήποτε ακίνητο για να το προσθέσετε στα αγαπημένα σας.
                </p>
                <button
                  type="button"
                  onClick={handleGoHome}
                  className="btn-primary min-h-[44px] text-xs px-4"
                >
                  Εξερεύνηση Ακινήτων
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                {favoriteEstatesList.map((estate) => (
                  <EstateCard
                    key={estate.id}
                    estate={estate}
                    onSelect={handleSelectEstate}
                    isFavorite={true}
                    onToggleFavorite={toggleFavorite}
                    layout="grid"
                  />
                ))}
              </div>
            )}
          </main>
        ) : (
          <HomePage
            allEstates={currentPool}
            selectedCity={selectedCity}
            onSelectCity={handleSelectCity}
            onSelectEstate={handleSelectEstate}
            onOpenSearch={() => setIsSearchOpen(true)}
            favorites={favorites}
            onToggleFavorite={toggleFavorite}
            searchFilter={searchFilter}
            onClearSearchFilter={handleClearSearchFilter}
          />
        )}
      </div>

      {/* Full-Screen Search Modal */}
      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        allEstates={estatesData}
        initialCity={selectedCity}
        onApplySearch={handleApplySearch}
      />

      {/* Full-Screen Sidebar */}
      <Sidebar
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
        selectedCity={selectedCity}
        onSelectCity={handleSelectCity}
        onOpenSearch={() => setIsSearchOpen(true)}
        onOpenFavorites={handleOpenFavorites}
        favoritesCount={favorites.length}
        onGoHome={handleGoHome}
      />

      {/* Footer - Clean, minimal architectural */}
      <footer className="w-full bg-[#17211d] text-white pt-10 pb-20 lg:pb-10 border-t border-[#17211d]">
        <div className="max-w-[1280px] mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 pb-6 border-b border-white/10">
            {/* Brand column */}
            <div className="md:col-span-2 flex flex-col gap-2">
              <div className="flex flex-col items-start text-left">
                <span className="brand-logo-text text-2xl sm:text-3xl text-white tracking-tight leading-none text-left">
                  RealEstate
                </span>
                <div className="flex items-center gap-1.5 mt-0.5 text-left">
                  <span className="text-xs font-semibold text-white/90 lowercase leading-none text-left">
                    by
                  </span>
                  <img
                    src="/logo3-cropped.png"
                    alt="Reservia"
                    className="h-4 sm:h-4.5 w-auto object-contain object-left brightness-200 block"
                  />
                </div>
              </div>
              <p className="text-xs text-white/70 max-w-[400px] leading-relaxed mt-2">
                Πολυτελής διαμεσολάβηση επιλεγμένων κατοικιών και επενδυτικών ακινήτων σε Αθήνα και Θεσσαλονίκη.
              </p>
            </div>

            {/* Athens Office */}
            <div className="flex flex-col gap-1 text-xs">
              <div className="font-bold text-[#c4975d] flex items-center gap-1">
                <MapPin className="w-3 h-3" />
                <span>Γραφείο Αθηνών</span>
              </div>
              <div className="text-white/80">
                Πατριάρχου Ιωακείμ 14, Κολωνάκι
              </div>
              <div className="text-white/60">
                +30 210 724 0000
              </div>
            </div>

            {/* Thessaloniki Office */}
            <div className="flex flex-col gap-1 text-xs">
              <div className="font-bold text-[#c4975d] flex items-center gap-1">
                <MapPin className="w-3 h-3" />
                <span>Γραφείο Θεσσαλονίκης</span>
              </div>
              <div className="text-white/80">
                Κομνηνών 8, Πανόραμα
              </div>
              <div className="text-white/60">
                +30 2310 340 000
              </div>
            </div>
          </div>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-[11px] text-white/50">
            <span>© {new Date().getFullYear()} Reservia Estates.</span>
            <span>Μοντέρνα, μινιμαλιστική αρχιτεκτονική εμπειρία.</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
