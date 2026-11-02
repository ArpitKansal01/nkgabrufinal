export interface GalleryItem {
  id: string;
  title: string;
  category: "all" | "royal" | "pre-wedding" | "haldi-mehendi" | "candid" | "films";
  imageUrl: string;
  aspect: "portrait" | "landscape" | "square";
  couple: string;
  venue: string;
  location: string;
  lens: string;
  date: string;
  tags: string[];
}

export interface WeddingStory {
  id: string;
  slug: string;
  couple: string;
  title: string;
  tagline: string;
  coverImage: string;
  venue: string;
  city: string;
  date: string;
  summary: string;
  vowsQuote: string;
  highlights: string[];
  stats: {
    ceremonies: number;
    photosDelivered: number;
    filmMinutes: number;
  };
}

export interface PackageTier {
  id: string;
  name: string;
  subtitle: string;
  price: string;
  numericBasePrice: number;
  recommended?: boolean;
  idealFor: string;
  crew: string;
  deliverables: string[];
  equipment: string;
}

export interface Testimonial {
  id: string;
  couple: string;
  city: string;
  venue: string;
  quote: string;
  weddingDate: string;
  rating: number;
  avatar: string;
}

export const STUDIO_INFO = {
  name: "NKGABRU STUDIO",
  tagline: "Haute Couture Wedding Cinematography & Fine-Art Photography",
  location: "Faridabad, Delhi NCR, India",
  fullAddress: "Studio Suite 4, Heritage Arcade, Surajkund Road, Charmwood Village, Faridabad, Haryana 121009",
  phone: "+91 98112 45890",
  whatsapp: "919811245890",
  email: "inquiries@nkgabrustudio.com",
  coordinates: "28.4891° N, 77.2981° E",
  experienceYears: 12,
  weddingsCovered: 520,
  destinations: 44,
  awards: "Vogue Wedding Selects 2025 • WedMeGood Best Cinema Studio NCR",
};

export const WEDDING_STORIES: WeddingStory[] = [
  {
    id: "story-1",
    slug: "ranveer-devika-surajkund",
    couple: "Ranveer & Devika",
    title: "A Regal Symphony Under The Aravalis",
    tagline: "Royal Heritage Wedding with 10,000 Candles & Sacred Fire Vows",
    coverImage: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=1600&q=85",
    venue: "Vivanta Surajkund Palace",
    city: "Faridabad, Delhi NCR",
    date: "December 2025",
    summary:
      "Set against the rugged beauty of the Aravali range in Faridabad, Devika's custom crimson Sabyasachi lehenga reflected against thousands of floating brass diya lanterns during their midnight pheras.",
    vowsQuote:
      "When we look at NKGABRU's film, we don't just see a video—we feel the exact flutter in our hearts the moment our eyes met across the mandap fire.",
    highlights: ["Sufi Night under Mughal Arches", "Vintage Rolls Royce Baraat", "Midnight Sacred Pheras"],
    stats: {
      ceremonies: 5,
      photosDelivered: 1450,
      filmMinutes: 38,
    },
  },
  {
    id: "story-2",
    slug: "kabir-ananya-roseate",
    couple: "Kabir & Ananya",
    title: "Poetry in Motion: The Courtyard Union",
    tagline: "Intimate Architectural Elegance & Sunset Vows",
    coverImage: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1600&q=85",
    venue: "The Roseate Water Pavilion",
    city: "Delhi NCR Border",
    date: "November 2025",
    summary:
      "A serene blend of brutalist water architecture and classical Indian floral grandeur. Shot with vintage anamorphic lenses to capture the softest golden hour flares.",
    vowsQuote:
      "NKGABRU Studio captured every raw, unscripted tear and uncontrollable belly laugh without ever making us feel like we were performing.",
    highlights: ["Waterfront Sunset Vows", "Live Sarangi Recital", "Candid Monochromatic Portraits"],
    stats: {
      ceremonies: 3,
      photosDelivered: 980,
      filmMinutes: 24,
    },
  },
  {
    id: "story-3",
    slug: "arjun-simran-rajasthan",
    couple: "Arjun & Simran",
    title: "Fortress of Eternal Devotion",
    tagline: "3-Day Royal Destination Spectacle with Fireworks & Elephants",
    coverImage: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1600&q=85",
    venue: "Neemrana Fort-Palace",
    city: "Rajasthan Heritage Corridor",
    date: "January 2026",
    summary:
      "Perched on 15th-century ramparts, Arjun & Simran celebrated their vows as fireworks lit up the nocturnal desert sky. Featuring our 4-camera cinema unit and dual aerial drones.",
    vowsQuote:
      "The cinematic color grading is beyond Hollywood quality. Our families in London and Faridabad still watch the teaser every weekend.",
    highlights: ["Rooftop Sunset Haldi", "Stepwell Sangeet Musical", "Grand Skyward Fireworks"],
    stats: {
      ceremonies: 6,
      photosDelivered: 1800,
      filmMinutes: 45,
    },
  },
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "gal-1",
    title: "The Regal Veil",
    category: "royal",
    imageUrl: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=1200&q=85",
    aspect: "portrait",
    couple: "Devika & Ranveer",
    venue: "Vivanta Surajkund",
    location: "Faridabad",
    lens: "85mm f/1.2L • ISO 100",
    date: "Dec 2025",
    tags: ["Bridal Portrait", "Royal Red", "Heritage"],
  },
  {
    id: "gal-2",
    title: "The Sacred Agni Vows",
    category: "royal",
    imageUrl: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=85",
    aspect: "landscape",
    couple: "Kabir & Ananya",
    venue: "Radisson Blu Grand Ballroom",
    location: "Faridabad",
    lens: "35mm f/1.4 GM • ISO 800",
    date: "Nov 2025",
    tags: ["Pheras", "Sacred Fire", "Mandap"],
  },
  {
    id: "gal-3",
    title: "Golden Hour in Aravali",
    category: "pre-wedding",
    imageUrl: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1200&q=85",
    aspect: "portrait",
    couple: "Arjun & Simran",
    venue: "Asola-Bhatti Sanctuary Overlook",
    location: "Faridabad Border",
    lens: "50mm f/1.2 • ISO 200",
    date: "Jan 2026",
    tags: ["Pre-Wedding", "Sunset", "Silhouettes"],
  },
  {
    id: "gal-4",
    title: "Intricate Henna Narratives",
    category: "haldi-mehendi",
    imageUrl: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1200&q=85",
    aspect: "square",
    couple: "Pooja & Rohan",
    venue: "Private Garden Estate",
    location: "Sector 15, Faridabad",
    lens: "100mm Macro f/2.8 • ISO 400",
    date: "Oct 2025",
    tags: ["Mehendi", "Intricate Details", "Bridal Glow"],
  },
  {
    id: "gal-5",
    title: "Marigold Ecstasy",
    category: "haldi-mehendi",
    imageUrl: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=1200&q=85",
    aspect: "portrait",
    couple: "Karan & Tanya",
    venue: "The Heritage Village",
    location: "Faridabad",
    lens: "24-70mm f/2.8 • ISO 160",
    date: "Feb 2026",
    tags: ["Haldi Splash", "Pure Joy", "Candid Laughter"],
  },
  {
    id: "gal-6",
    title: "Unspoken Tears of Father",
    category: "candid",
    imageUrl: "https://images.unsplash.com/photo-1606800052052-a08af7148866?auto=format&fit=crop&w=1200&q=85",
    aspect: "portrait",
    couple: "Meera & Siddharth",
    venue: "Surajkund Royal Courtyard",
    location: "Faridabad",
    lens: "135mm f/1.8 GM • ISO 1250",
    date: "Dec 2025",
    tags: ["Vidai", "Emotion", "Black & Gold"],
  },
  {
    id: "gal-7",
    title: "Heritage Fort Solitude",
    category: "pre-wedding",
    imageUrl: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=1200&q=85",
    aspect: "landscape",
    couple: "Aditya & Rhea",
    venue: "Tughlaqabad Arches",
    location: "NCR Heritage Corridor",
    lens: "28mm f/1.4 • ISO 100",
    date: "Sep 2025",
    tags: ["Editorial", "Monuments", "Romance"],
  },
  {
    id: "gal-8",
    title: "Midnight Baraat Fireworks",
    category: "films",
    imageUrl: "https://images.unsplash.com/photo-1532712938310-34cb3982ef74?auto=format&fit=crop&w=1200&q=85",
    aspect: "landscape",
    couple: "Vikram & Sanjana",
    venue: "Grand Aravali Pavilions",
    location: "Faridabad",
    lens: "Anamorphic 40mm T2.1",
    date: "Jan 2026",
    tags: ["Cinema 4K", "Baraat", "Pyrotechnics"],
  },
  {
    id: "gal-9",
    title: "The Royal Polki Adornment",
    category: "royal",
    imageUrl: "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?auto=format&fit=crop&w=1200&q=85",
    aspect: "square",
    couple: "Jasleen & Zorawar",
    venue: "Crown Plaza Aravali",
    location: "Faridabad",
    lens: "90mm Macro f/2.8",
    date: "Nov 2025",
    tags: ["Jewelry", "Kundan & Emeralds", "Heirloom"],
  },
];

export const PACKAGES: PackageTier[] = [
  {
    id: "pkg-heritage",
    name: "The Heritage Collection",
    subtitle: "Ideal for Intimate & 2-Day Celebrations",
    price: "₹1,85,000",
    numericBasePrice: 185000,
    idealFor: "Engagement, Mehendi, Sangeet & Wedding (Up to 400 Guests)",
    crew: "4 Master Visual Artists (2 Senior Candid Photographers + 2 Cinematographers)",
    deliverables: [
      "Full 2-Day Comprehensive Multi-Angle Coverage",
      "Cinematic Wedding Film Trailer (3-4 mins)",
      "Extended Feature Film (25-35 mins)",
      "400+ Hand-Retouched Color-Graded High-Res Images",
      "1 Hand-Stitched Premium Italian Leather Album (40 Pages)",
      "Private Online 4K Cloud Gallery for Family Sharing",
    ],
    equipment: "Sony FX3 / A7R V Cinema Line • Prime G-Master Lenses • Wireless Audio",
  },
  {
    id: "pkg-royale",
    name: "The Grand Royale Heirloom",
    subtitle: "Our Signature Best-Selling Royal Experience",
    price: "₹3,25,000",
    numericBasePrice: 325000,
    recommended: true,
    idealFor: "Grand 3-Day Celebrations & Palace Weddings (500+ Guests)",
    crew: "7 Elite Crew Members (3 Candid Leads + 3 Cinematographers + 1 Drone Pilot)",
    deliverables: [
      "Complete 3-Day Pre-Wedding to Reception Royal Coverage",
      "Cinematic Teaser delivered within 72 hours for Instagram",
      "Grand 4K Feature Documentary (45-60 mins) with Master Audio",
      "Aerial 4K Drone Filming of Baraat, Venue & Fireworks",
      "750+ Artistically Graded Master Photographs",
      "2 Royal Velvet Heirloom Albums (Bride & Groom Families)",
      "Pre-Wedding Cinematic Concept Shoot at Scenic Aravali Vistas",
      "Custom Engraved Walnut Wood USB Gift Box",
    ],
    equipment: "RED Digital Cinema & Sony FX6 • Anamorphic Lenses • DJI Inspire 3 Drone",
  },
  {
    id: "pkg-destination",
    name: "Imperial Destination Curated",
    subtitle: "Pan-India & International Heritage Unions",
    price: "₹5,50,000",
    numericBasePrice: 550000,
    idealFor: "Palace Destination Weddings (Udaipur, Jaipur, Goa, Dubai, Bali)",
    crew: "9 Crew Specialists (Director of Photography, 4 Master Cinematographers, 3 Photographers, 1 Colorist)",
    deliverables: [
      "Unlimited Multi-Day Destination Itinerary Coverage",
      "Same-Day Edit (SDE) Film Screened Live at Reception",
      "Cinema-Grade 70-Minute Heirloom Feature Film",
      "Dual Drone Coverage (Cinematic + FPV High-Speed Tracking)",
      "1,200+ Master Fine-Art Photographs with Lifetime Archive",
      "3 Luxury Hand-Bound Italian Leather Albums + Parent Minis",
      "Director's Cut Vignettes for Instagram Reels (6 Custom Reels)",
      "All Raw 4K 10-Bit Log Footage on 2TB Encrypted SSD",
    ],
    equipment: "ARRI Alexa Mini LF / RED V-Raptor • Cinema Primes • Full Crew Grip & Sound",
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "test-1",
    couple: "Devika & Ranveer Singhal",
    city: "Faridabad & London",
    venue: "Vivanta Surajkund",
    weddingDate: "Dec 2025",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
    quote:
      "Choosing NKGABRU Studio was without question the best decision of our wedding. Growing up in Faridabad, we wanted someone who understood the soul of our city and the grandeur of royal celebrations. The cinematic film felt like an Oscar-nominated romantic drama. Our eyes were welled up the entire time.",
  },
  {
    id: "test-2",
    couple: "Ananya & Kabir Malhotra",
    city: "Delhi NCR",
    venue: "The Roseate",
    weddingDate: "Nov 2025",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
    quote:
      "Their team was so courteous, invisible during intimate moments, yet always right there when something miraculous happened. The colors, the gold tones, and the candid laughter they preserved are now cherished family heirlooms.",
  },
  {
    id: "test-3",
    couple: "Simran & Arjun Bhasin",
    city: "Faridabad & Dubai",
    venue: "Neemrana Fort-Palace",
    weddingDate: "Jan 2026",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80",
    quote:
      "From our pre-wedding shoot in the Aravalis to our final vidai in Rajasthan, NKGABRU's vision is pure art. The velvet album is breathtaking—everyone who visits our home spends an hour flipping through it in awe.",
  },
];

export const FAQ_ITEMS = [
  {
    question: "Where is NKGABRU Studio located, and do you travel?",
    answer:
      "Our flagship creative studio is located on Surajkund Road, Charmwood Village, Faridabad. While we love shooting in Delhi NCR and our home city of Faridabad, over 40% of our weddings are destination celebrations across Rajasthan (Udaipur, Jaipur, Jodhpur), Goa, Kerala, Dubai, and beyond.",
  },
  {
    question: "How far in advance should we reserve our wedding dates?",
    answer:
      "Because we dedicate a full creative director and senior team to each wedding, we only accept a limited number of weddings each season (approx. 25-30 couples per year). We recommend booking 6 to 9 months in advance, especially for peak winter wedding dates (October to March).",
  },
  {
    question: "What is your photography & cinematography style?",
    answer:
      "Our signature aesthetic is Haute Couture Fine-Art meets Raw Emotional Storytelling. We steer away from artificial, awkward posing. Instead, we gently guide you in flattering natural light while preserving unscripted moments, rich warm royal color grading, and timeless cinematic compositions.",
  },
  {
    question: "When and how do we receive our photos and films?",
    answer:
      "You receive a 25-30 image 'Sneak Peek' within 72 hours of your wedding for sharing with loved ones. The complete curated high-resolution photo gallery is delivered within 4-5 weeks, followed by your cinematic films and handcrafted leather heirloom albums within 8-10 weeks.",
  },
  {
    question: "Can we customize our package according to our events?",
    answer:
      "Absolutely. Every Indian wedding is unique. Whether you need an intimate Roka ceremony, a multi-day farmhouse extravaganza in Faridabad, or an aerial drone shoot over an ancient palace, we tailor each quote specifically to your vision.",
  },
];

