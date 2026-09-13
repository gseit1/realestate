export const CITIES = [
  { id: 'athens', name: 'Αθήνα' },
  { id: 'thessaloniki', name: 'Θεσσαλονίκη' },
];

export const PROPERTY_TYPES = [
  'Όλα τα είδη',
  'Διαμέρισμα',
  'Μεζονέτα',
  'Ρετιρέ',
  'Βίλα',
];

export const estatesData = [
  // --- ΑΘΗΝΑ (5 Ακίνητα) ---
  {
    id: 'ath-01',
    city: 'Αθήνα',
    neighborhood: 'Κολωνάκι',
    title: 'Ρετιρέ με ανεμπόδιστη θέα στον Λυκαβηττό',
    type: 'Ρετιρέ',
    price: 920000,
    priceFormatted: '920.000 €',
    area: 145,
    bedrooms: 3,
    bathrooms: 2,
    floor: '5ος Όροφος',
    year: 2022,
    energyClass: 'A+',
    featured: true,
    rating: 4.9,
    description: 'Εξαιρετικό ρετιρέ πλήρως ανακαινισμένο στην καρδιά του Κολωνακίου. Διαθέτει ευρύχωρη βεράντα 40 τ.μ. με μαγευτική θέα στον Λυκαβηττό, πολυτελή δρύινα δάπεδα, κουζίνα ιταλικού σχεδιασμού και έξυπνες οικιακές λειτουργίες Smart Home.',
    amenities: [
      'Θέα Λυκαβηττός',
      'Αυτόνομη θέρμανση φυσικού αερίου',
      'Κλιματισμός VRV',
      'Υπόγειο parking',
      'Smart Home',
      'Πόρτα ασφαλείας',
      'Ασανσέρ',
      'Ηλιακός θερμοσίφωνας'
    ],
    images: [
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80'
    ]
  },
  {
    id: 'ath-02',
    city: 'Αθήνα',
    neighborhood: 'Βουλιαγμένη',
    title: 'Μινιμαλιστική παραθαλάσσια βίλα με ιδιωτική πισίνα',
    type: 'Βίλα',
    price: 2450000,
    priceFormatted: '2.450.000 €',
    area: 310,
    bedrooms: 4,
    bathrooms: 4,
    floor: 'Ισόγειο & 1ος',
    year: 2023,
    energyClass: 'A+',
    featured: true,
    rating: 5.0,
    description: 'Εκπληκτική κατοικία υψηλής αρχιτεκτονικής στη Βουλιαγμένη, λίγα μόλις λεπτά με τα πόδια από την ακτή. Προσφέρει ιδιωτικό κήπο με πισίνα υπερχείλισης, μεγάλες τζαμαρίες που προσφέρουν άπλετο φυσικό φως και ανεξάρτητο ξενώνα.',
    amenities: [
      'Ιδιωτική πισίνα υπερχείλισης',
      'Θέα θάλασσα',
      'Ιδιωτικός κήπος',
      '2 θέσεις στάθμευσης',
      'Ενδοδαπέδια θέρμανση',
      'Συναγερμός με κάμερες',
      'Αποθήκη 25 τ.μ.',
      'Ανεξάρτητος ξενώνας'
    ],
    images: [
      'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1200&q=80'
    ]
  },
  {
    id: 'ath-03',
    city: 'Αθήνα',
    neighborhood: 'Πλάκα',
    title: 'Ιστορικό ανακαινισμένο διαμέρισμα με θέα Ακρόπολη',
    type: 'Διαμέρισμα',
    price: 680000,
    priceFormatted: '680.000 €',
    area: 110,
    bedrooms: 2,
    bathrooms: 2,
    floor: '2ος Όροφος',
    year: 2021,
    energyClass: 'B+',
    featured: false,
    rating: 4.85,
    description: 'Μοναδικό διαμέρισμα που συνδυάζει την αρχοντική νεοκλασική γοητεία με σύγχρονες πολυτελείς ανέσεις. Βρίσκεται σε ήσυχο πεζόδρομο της Πλάκας, διαθέτει ψηλοτάβανους χώρους με γύψινες λεπτομέρειες και άμεση θέα στον ιερό βράχο.',
    amenities: [
      'Άμεση θέα Ακρόπολη',
      'Ψηλοτάβανο 3.8μ',
      'Ανακαινισμένο το 2021',
      'Αντλία θερμότητας',
      'Διπλά θερμομονωτικά τζάμια',
      'Πόρτα ασφαλείας'
    ],
    images: [
      'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=1200&q=80'
    ]
  },
  {
    id: 'ath-04',
    city: 'Αθήνα',
    neighborhood: 'Κηφισιά',
    title: 'Σύγχρονη μεζονέτα μέσα στο πράσινο',
    type: 'Μεζονέτα',
    price: 1150000,
    priceFormatted: '1.150.000 €',
    area: 225,
    bedrooms: 3,
    bathrooms: 3,
    floor: '1ος & 2ος Όροφος',
    year: 2023,
    energyClass: 'A+',
    featured: true,
    rating: 4.92,
    description: 'Πολυτελής μεζονέτα σε προνομιακό σημείο της Κηφισιάς, περιτριγυρισμένη από πεύκα. Προσφέρει εντυπωσιακό σαλόνι διπλού ύψους, minimal ενεργειακό τζάκι, master υπνοδωμάτιο με walk-in closet και μεγάλα μπαλκόνια.',
    amenities: [
      'Ενεργειακό τζάκι',
      'Ενδοδαπέδια θέρμανση',
      '2 κλειστές θέσεις parking',
      'Αποθήκη 18 τ.μ.',
      'Φορτιστής ηλεκτρικού αυτοκινήτου',
      'Master υπνοδωμάτιο en-suite'
    ],
    images: [
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=1200&q=80'
    ]
  },
  {
    id: 'ath-05',
    city: 'Αθήνα',
    neighborhood: 'Γλυφάδα',
    title: 'Φωτεινό διαμέρισμα με θέα στο πάρκο του Ελληνικού',
    type: 'Διαμέρισμα',
    price: 540000,
    priceFormatted: '540.000 €',
    area: 98,
    bedrooms: 2,
    bathrooms: 1,
    floor: '3ος Όροφος',
    year: 2022,
    energyClass: 'A',
    featured: false,
    rating: 4.78,
    description: 'Μοντέρνο διαμέρισμα κατασκευής 2022 στην κάτω Γλυφάδα. Βρίσκεται σε απόσταση αναπνοής από τη θάλασσα και το εμπορικό κέντρο. Διαθέτει premium υλικά, μεγάλη βεράντα 25 τ.μ. και ενεργειακά κουφώματα θερμοδιακοπής.',
    amenities: [
      'Ενεργειακά κουφώματα',
      'Αυτόνομο φυσικό αέριο',
      'Θέση στάθμευσης πυλωτής',
      'Ηλιακός θερμοσίφωνας',
      'Συναγερμός'
    ],
    images: [
      'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600607687644-c7171b42498b?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600566752229-250ed79470f8?auto=format&fit=crop&w=1200&q=80'
    ]
  },

  // --- ΘΕΣΣΑΛΟΝΙΚΗ (5 Ακίνητα) ---
  {
    id: 'skg-01',
    city: 'Θεσσαλονίκη',
    neighborhood: 'Κέντρο - Πλατεία Αριστοτέλους',
    title: 'Αρχοντικό διαμέρισμα στην Παλιά Παραλία',
    type: 'Διαμέρισμα',
    price: 780000,
    priceFormatted: '780.000 €',
    area: 160,
    bedrooms: 3,
    bathrooms: 2,
    floor: '4ος Όροφος',
    year: 2021,
    energyClass: 'A',
    featured: true,
    rating: 4.95,
    description: 'Εμβληματικό διαμέρισμα στην πρόσοψη της παραλιακής λεωφόρου Νίκης με απεριόριστη θέα στον Θερμαϊκό κόλπο και τον Όλυμπο. Ανακαινίστηκε ριζικά το 2021 με σεβασμό στην αρχιτεκτονική κληρονομιά και εξοπλίστηκε με πολυτελή ιταλικά έπιπλα.',
    amenities: [
      'Απεριόριστη θέα Θερμαϊκός',
      'Πρόσοψη στη Λεωφόρο Νίκης',
      'Αυτόνομο φυσικό αέριο',
      'Κλιματισμός inverter',
      'Επιπλωμένο με ιταλικά σχέδια',
      'Θωρακισμένη πόρτα ασφαλείας'
    ],
    images: [
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80'
    ]
  },
  {
    id: 'skg-02',
    city: 'Θεσσαλονίκη',
    neighborhood: 'Πανόραμα',
    title: 'Υπερπολυτελής βίλα με πανοραμική θέα πόλης',
    type: 'Βίλα',
    price: 1850000,
    priceFormatted: '1.850.000 €',
    area: 380,
    bedrooms: 5,
    bathrooms: 4,
    floor: '3 Επίπεδα',
    year: 2022,
    energyClass: 'A+',
    featured: true,
    rating: 4.98,
    description: 'Μοναδική βίλα 3 επιπέδων στους πρόποδες του Χορτιάτη στο Πανόραμα. Διαθέτει ιδιωτική πισίνα, θερμαινόμενο jacuzzi, σάουνα, γυμναστήριο, καθώς και διαμορφωμένο κήπο 800 τ.μ. με barbecue και χώρο δεξιώσεων.',
    amenities: [
      'Ιδιωτική πισίνα & Jacuzzi',
      'Πανοραμική θέα όλης της Θεσσαλονίκης',
      'Σάουνα & γυμναστήριο',
      'Κήπος 800 τ.μ. με BBQ',
      'Κλειστό γκαράζ 3 αυτοκινήτων',
      'Ενδοδαπέδια θέρμανση γεωθερμίας',
      'Smart Home σύστημα Control4'
    ],
    images: [
      'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1512915922686-57c11dde9b6b?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80'
    ]
  },
  {
    id: 'skg-03',
    city: 'Θεσσαλονίκη',
    neighborhood: 'Καλαμαριά',
    title: 'Παραθαλάσσια μεζονέτα στην Αρετσού',
    type: 'Μεζονέτα',
    price: 690000,
    priceFormatted: '690.000 €',
    area: 175,
    bedrooms: 3,
    bathrooms: 2,
    floor: '4ος & 5ος Όροφος',
    year: 2023,
    energyClass: 'A+',
    featured: false,
    rating: 4.86,
    description: 'Προνομιούχα μεζονέτα νεόδμητης κατασκευής σε ήσυχη γειτονιά της Καλαμαριάς. Διαθέτει μεγάλα περιμετρικά μπαλκόνια με θέα στον όρμο, εσωτερική ξύλινη σκάλα, κουζίνα με corian πάγκους και ιδιωτικό roof garden.',
    amenities: [
      'Ιδιωτικό roof garden 35 τ.μ.',
      'Θέα θάλασσα',
      'Υπόγεια αποθήκη 15 τ.μ.',
      'Θέση στάθμευσης pilotis',
      'Αντλία θερμότητας ψύξης-θέρμανσης',
      'Προεγκατάσταση συναγερμού'
    ],
    images: [
      'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=80'
    ]
  },
  {
    id: 'skg-04',
    city: 'Θεσσαλονίκη',
    neighborhood: 'Λαδάδικα',
    title: 'Industrial Loft σε ιστορικό κτίριο',
    type: 'Διαμέρισμα',
    price: 360000,
    priceFormatted: '360.000 €',
    area: 85,
    bedrooms: 1,
    bathrooms: 1,
    floor: '2ος Όροφος',
    year: 2022,
    energyClass: 'B+',
    featured: false,
    rating: 4.75,
    description: 'Μοναδικό loft industrial αισθητικής με εμφανή τούβλα και μεταλλικά στοιχεία στα ιστορικά Λαδάδικα. Ιδανικό για σύγχρονο αστικό τρόπο ζωής ή υψηλής απόδοσης επένδυση, λίγα μέτρα από το λιμάνι της πόλης.',
    amenities: [
      'Industrial σχεδιασμός',
      'Αυτόνομη θέρμανση φυσικού αερίου',
      'Κλιματισμός multi-split',
      'Εμφανής τοιχοποιία',
      'Ασανσέρ',
      'Θωρακισμένη είσοδος'
    ],
    images: [
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80'
    ]
  },
  {
    id: 'skg-05',
    city: 'Θεσσαλονίκη',
    neighborhood: 'Άνω Πόλη',
    title: 'Παραδοσιακή ανακαινισμένη κατοικία στα Κάστρα',
    type: 'Μεζονέτα',
    price: 490000,
    priceFormatted: '490.000 €',
    area: 130,
    bedrooms: 2,
    bathrooms: 2,
    floor: '2 Επίπεδα',
    year: 2021,
    energyClass: 'B+',
    featured: true,
    rating: 4.89,
    description: 'Ατμοσφαιρική διώροφη κατοικία μακεδονικής αρχιτεκτονικής μέσα στα γραφικά σοκάκια της Άνω Πόλης. Προσφέρει αυλή με πλακόστρωτο, πέτρινο τζάκι και ανεπανάληπτο ηλιοβασίλεμα πάνω από τον Θερμαϊκό.',
    amenities: [
      'Παραδοσιακή αρχιτεκτονική',
      'Πέτρινο τζάκι',
      'Ιδιωτική πλακόστρωτη αυλή',
      'Θέα στο ηλιοβασίλεμα',
      'Αυτόνομη θέρμανση αερίου',
      'Ξύλινα κουφώματα με διπλά τζάμια'
    ],
    images: [
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80'
    ]
  }
];
