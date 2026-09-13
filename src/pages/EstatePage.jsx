import React, { useState, useEffect } from 'react';
import {
  ArrowLeft,
  Heart,
  Share2,
  MapPin,
  Bed,
  Bath,
  Maximize,
  Calendar,
  Zap,
  Building,
  CheckCircle2,
  Phone,
  Send,
  X,
  Check
} from 'lucide-react';

export default function EstatePage({
  estate,
  onBack,
  isFavorite,
  onToggleFavorite
}) {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [isInquiryModalOpen, setIsInquiryModalOpen] = useState(false);
  const [inquirySubmitted, setInquirySubmitted] = useState(false);
  const [copiedShare, setCopiedShare] = useState(false);

  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    message: `Ενδιαφέρομαι για το ακίνητο "${estate.title}" (Κωδικός: ${estate.id}). Παρακαλώ επικοινωνήστε μαζί μου.`
  });

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [estate.id]);

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopiedShare(true);
      setTimeout(() => setCopiedShare(false), 2000);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setInquirySubmitted(true);
    setTimeout(() => {
      setInquirySubmitted(false);
      setIsInquiryModalOpen(false);
    }, 2500);
  };

  return (
    <div className="w-full bg-[#ffffff] min-h-screen pb-24">
      {/* Top Floating Navigation Bar - Flat border, no shadow */}
      <div className="sticky top-0 z-30 bg-white border-b border-[#e6e9ed]">
        <div className="max-w-[1280px] mx-auto px-4 md:px-6 h-14 flex items-center justify-between">
          <button
            type="button"
            onClick={onBack}
            className="touch-target flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#17211d] bg-transparent border-none cursor-pointer p-0 hover:text-[#c4975d] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Επιστροφή</span>
          </button>

          <div className="flex items-center gap-1.5">
            <button
              type="button"
              onClick={handleShare}
              className="touch-target w-9 h-9 rounded-md bg-white hover:bg-[#f1f3f5] text-[#17211d] border border-[#e6e9ed] flex items-center justify-center transition-colors cursor-pointer"
              aria-label="Κοινοποίηση ακινήτου"
              title="Κοινοποίηση"
            >
              {copiedShare ? (
                <Check className="w-4 h-4 text-emerald-600" />
              ) : (
                <Share2 className="w-4 h-4" />
              )}
            </button>

            <button
              type="button"
              onClick={() => onToggleFavorite(estate.id)}
              className="touch-target w-9 h-9 rounded-md bg-white hover:bg-[#f1f3f5] text-[#17211d] border border-[#e6e9ed] flex items-center justify-center transition-colors cursor-pointer"
              aria-label={isFavorite ? 'Αφαίρεση από τα αγαπημένα' : 'Προσθήκη στα αγαπημένα'}
            >
              <Heart
                className={`w-4 h-4 transition-colors ${
                  isFavorite
                    ? 'fill-[#e11d48] text-[#e11d48]'
                    : 'text-[#17211d]'
                }`}
              />
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-[1280px] mx-auto px-4 md:px-6 pt-4 md:pt-6">
        {/* Gallery Section - Minimal, small radius, no shadow */}
        <div className="flex flex-col gap-2.5">
          {/* Main Photo */}
          <div className="relative aspect-[16/10] md:aspect-[21/9] w-full rounded-lg overflow-hidden bg-[#eceef1]">
            <img
              src={estate.images[activeImageIndex]}
              alt={`${estate.title} - Φωτογραφία ${activeImageIndex + 1}`}
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-3 right-3 px-2.5 py-1 rounded bg-black/70 text-white text-[11px] font-medium">
              {activeImageIndex + 1} / {estate.images.length}
            </div>
            <div className="absolute top-3 left-3 px-2.5 py-1 rounded bg-black/70 text-white text-[11px] font-medium">
              {estate.type}
            </div>
          </div>

          {/* Thumbnail Strip */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1">
            {estate.images.map((img, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setActiveImageIndex(idx)}
                className={`relative w-18 h-12 rounded overflow-hidden shrink-0 border transition-all cursor-pointer p-0 ${
                  activeImageIndex === idx
                    ? 'border-[#17211d] ring-1 ring-[#17211d]'
                    : 'border-transparent opacity-60 hover:opacity-100'
                }`}
              >
                <img
                  src={img}
                  alt={`Μικρογραφία ${idx + 1}`}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>

        {/* Content Layout: Open, unboxed layout with hairline dividers */}
        <div className="mt-6 md:mt-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Details (8 cols) */}
          <div className="lg:col-span-8 flex flex-col gap-6">
            {/* Header info */}
            <div>
              <div className="flex items-center gap-1.5 text-xs text-[#5b6471] mb-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#c4975d]" />
                <span>{estate.neighborhood}, {estate.city}</span>
              </div>

              <h1 className="font-heading text-2xl sm:text-3xl md:text-4xl text-[#111418] tracking-tight mb-3">
                {estate.title}
              </h1>

              <div className="flex items-baseline gap-3">
                <span className="text-2xl sm:text-3xl font-bold text-[#17211d] font-ui">
                  {estate.priceFormatted}
                </span>
                <span className="text-xs text-[#5b6471]">
                  ({Math.round(estate.price / estate.area).toLocaleString('el-GR')} € / τ.μ.)
                </span>
              </div>
            </div>

            {/* Architectural Key Specs - Clean flat grid without nested heavy boxes */}
            <div className="border-t border-[#e6e9ed] pt-6">
              <h2 className="font-heading text-lg sm:text-xl text-[#111418] mb-4">
                Βασικά Χαρακτηριστικά
              </h2>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                <div className="p-3 rounded-md border border-[#e6e9ed] flex items-center gap-2.5">
                  <Maximize className="w-4 h-4 text-[#c4975d] shrink-0" />
                  <div>
                    <div className="text-[11px] text-[#5b6471]">Εμβαδόν</div>
                    <div className="text-sm font-semibold text-[#111418]">{estate.area} τ.μ.</div>
                  </div>
                </div>

                <div className="p-3 rounded-md border border-[#e6e9ed] flex items-center gap-2.5">
                  <Bed className="w-4 h-4 text-[#c4975d] shrink-0" />
                  <div>
                    <div className="text-[11px] text-[#5b6471]">Υπνοδωμάτια</div>
                    <div className="text-sm font-semibold text-[#111418]">{estate.bedrooms}</div>
                  </div>
                </div>

                <div className="p-3 rounded-md border border-[#e6e9ed] flex items-center gap-2.5">
                  <Bath className="w-4 h-4 text-[#c4975d] shrink-0" />
                  <div>
                    <div className="text-[11px] text-[#5b6471]">Μπάνια</div>
                    <div className="text-sm font-semibold text-[#111418]">{estate.bathrooms}</div>
                  </div>
                </div>

                <div className="p-3 rounded-md border border-[#e6e9ed] flex items-center gap-2.5">
                  <Building className="w-4 h-4 text-[#c4975d] shrink-0" />
                  <div>
                    <div className="text-[11px] text-[#5b6471]">Όροφος</div>
                    <div className="text-sm font-semibold text-[#111418]">{estate.floor}</div>
                  </div>
                </div>

                <div className="p-3 rounded-md border border-[#e6e9ed] flex items-center gap-2.5">
                  <Calendar className="w-4 h-4 text-[#c4975d] shrink-0" />
                  <div>
                    <div className="text-[11px] text-[#5b6471]">Έτος</div>
                    <div className="text-sm font-semibold text-[#111418]">{estate.year}</div>
                  </div>
                </div>

                <div className="p-3 rounded-md border border-[#e6e9ed] flex items-center gap-2.5">
                  <Zap className="w-4 h-4 text-[#c4975d] shrink-0" />
                  <div>
                    <div className="text-[11px] text-[#5b6471]">Ενεργειακή Κλάση</div>
                    <div className="text-sm font-semibold text-[#111418]">{estate.energyClass}</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Description Section - Clean unboxed text */}
            <div className="border-t border-[#e6e9ed] pt-6">
              <h2 className="font-heading text-lg sm:text-xl text-[#111418] mb-3">
                Περιγραφή Ακινήτου
              </h2>
              <p className="text-[#5b6471] text-sm sm:text-base leading-[1.65] font-normal whitespace-pre-line">
                {estate.description}
              </p>
            </div>

            {/* Amenities Section */}
            <div className="border-t border-[#e6e9ed] pt-6">
              <h2 className="font-heading text-lg sm:text-xl text-[#111418] mb-4">
                Παροχές & Ανέσεις
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {estate.amenities.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2 text-xs sm:text-sm font-medium text-[#111418]"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-700 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Desktop Sticky Inquiry Column (4 cols) - Minimal, no shadow */}
          <div className="hidden lg:block lg:col-span-4 sticky top-20">
            <div className="p-5 rounded-md border border-[#e6e9ed] bg-white flex flex-col gap-4">
              <div>
                <span className="text-xs text-[#5b6471]">Τιμή Πώλησης</span>
                <div className="text-2xl font-bold text-[#17211d] font-ui">
                  {estate.priceFormatted}
                </div>
              </div>

              <div className="p-3 rounded-md bg-[#f8f9fa] border border-[#e6e9ed] flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-md bg-[#17211d] text-white flex items-center justify-center font-bold text-xs">
                  RE
                </div>
                <div>
                  <div className="text-xs font-bold text-[#111418]">Reservia Advisors</div>
                  <div className="text-[10px] text-[#5b6471]">Επίσημος Σύμβουλος</div>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setIsInquiryModalOpen(true)}
                className="btn-primary w-full min-h-[48px] rounded-md text-sm"
              >
                <Send className="w-4 h-4" />
                <span>Εκδήλωση Ενδιαφέροντος</span>
              </button>

              <a
                href="tel:+302100000000"
                className="btn-secondary w-full min-h-[42px] rounded-md text-xs"
              >
                <Phone className="w-3.5 h-3.5 text-[#c4975d]" />
                <span>Τηλεφωνική Επικοινωνία</span>
              </a>

              <p className="text-[10px] text-[#8e98a8] text-center">
                Άμεση ανταπόκριση από εξειδικευμένο σύμβουλο της Reservia.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Sticky Bottom Mobile Bar - Flat border top, no shadow */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-[#e6e9ed] px-4 py-2.5 flex items-center justify-between gap-3">
        <div>
          <div className="text-[10px] text-[#5b6471]">Τιμή</div>
          <div className="text-base font-bold text-[#17211d] leading-none font-ui">
            {estate.priceFormatted}
          </div>
        </div>

        <div className="flex items-center gap-1.5">
          <a
            href="tel:+302100000000"
            className="touch-target w-10 h-10 rounded-md bg-white border border-[#e6e9ed] text-[#17211d] flex items-center justify-center cursor-pointer"
            aria-label="Κλήση στο γραφείο"
          >
            <Phone className="w-4 h-4 text-[#c4975d]" />
          </a>

          <button
            type="button"
            onClick={() => setIsInquiryModalOpen(true)}
            className="btn-primary min-h-[44px] px-4 text-xs rounded-md"
          >
            <span>Εκδήλωση Ενδιαφέροντος</span>
          </button>
        </div>
      </div>

      {/* Inquiry Form Modal - Reduced radius, flat */}
      {isInquiryModalOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/40 flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          aria-label="Φόρμα Εκδήλωσης Ενδιαφέροντος"
        >
          <div className="w-full max-w-[460px] bg-white rounded-md p-6 border border-[#e6e9ed] relative">
            <button
              type="button"
              onClick={() => setIsInquiryModalOpen(false)}
              className="touch-target w-8 h-8 rounded-md bg-white hover:bg-[#f1f3f5] text-[#111418] border border-[#e6e9ed] flex items-center justify-center transition-colors cursor-pointer absolute top-4 right-4"
              aria-label="Κλείσιμο"
            >
              <X className="w-4 h-4" />
            </button>

            {inquirySubmitted ? (
              <div className="py-6 text-center flex flex-col items-center gap-2">
                <div className="w-10 h-10 rounded-md bg-emerald-50 text-emerald-700 flex items-center justify-center">
                  <Check className="w-6 h-6" />
                </div>
                <h3 className="font-heading text-lg text-[#111418]">
                  Το αίτημά σας καταχωρήθηκε
                </h3>
                <p className="text-xs text-[#5b6471]">
                  Ένας σύμβουλος της Reservia θα επικοινωνήσει σύντομα μαζί σας.
                </p>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="flex flex-col gap-3.5">
                <div>
                  <h3 className="font-heading text-lg text-[#111418]">
                    Εκδήλωση Ενδιαφέροντος
                  </h3>
                  <p className="text-[11px] text-[#5b6471] mt-0.5">
                    {estate.title}
                  </p>
                </div>

                <div className="flex flex-col gap-1">
                  <label className="text-xs font-semibold text-[#111418]">
                    Ονοματεπώνυμο *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="π.χ. Γεώργιος Παπαδόπουλος"
                    className="w-full h-10 px-3 rounded-md border border-[#e6e9ed] text-xs text-[#111418] focus:border-[#17211d] focus:outline-none"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  <div className="flex flex-col gap-1">
                    <label className="text-xs font-semibold text-[#111418]">
                      Τηλέφωνο *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="69XXXXXXXX"
                      className="w-full h-10 px-3 rounded-md border border-[#e6e9ed] text-xs text-[#111418] focus:border-[#17211d] focus:outline-none"
                    />
                  </div>
                  <div className="flex flex-col gap-1">
                    <label className="text-xs font-semibold text-[#111418]">
                      Email *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="name@domain.gr"
                      className="w-full h-10 px-3 rounded-md border border-[#e6e9ed] text-xs text-[#111418] focus:border-[#17211d] focus:outline-none"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-1">
                  <label className="text-xs font-semibold text-[#111418]">
                    Μήνυμα
                  </label>
                  <textarea
                    rows={3}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full p-2.5 rounded-md border border-[#e6e9ed] text-xs text-[#111418] focus:border-[#17211d] focus:outline-none resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="btn-primary min-h-[46px] w-full text-xs sm:text-sm rounded-md mt-1"
                >
                  <span>Αποστολή Ενδιαφέροντος</span>
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
