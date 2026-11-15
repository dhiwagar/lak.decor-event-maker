export interface SiteConfig {
  name: string;
  tagline: string;
  subTagline: string;
  phone: string;
  phoneDisplay: string;
  whatsapp: string;
  whatsappDisplay: string;
  email: string;
  address: {
    line1: string;
    line2: string;
    city: string;
    state: string;
    pincode: string;
  };
  social: {
    instagram: string;
    facebook: string;
    whatsapp: string;
    pinterest: string;
  };
  workingHours: string;
  experienceYears: number;
  eventsCompleted: number;
  happyClientsPercentage: number;
  googleMapsEmbedUrl: string;
}

export interface ServiceItem {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  heroImage: string;
  galleryImages: string[];
  features: string[];
  popularThemes: {
    name: string;
    description: string;
    image: string;
  }[];
  planningTimeline: {
    phase: string;
    duration: string;
    description: string;
  }[];
  faq: {
    question: string;
    answer: string;
  }[];
  tags: string[];
}

export interface ProjectItem {
  id: string;
  slug: string;
  title: string;
  category: string;
  categoryLabel: string;
  date: string;
  location: string;
  heroImage: string;
  galleryImages: string[];
  theme: string;
  concept: string;
  guestCount: string;
  challengesAndSolution: string;
  testimonialQuote?: {
    quote: string;
    author: string;
    role: string;
  };
  tags: string[];
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'weddings' | 'birthdays' | 'engagements' | 'receptions' | 'babyshower' | 'haldi' | 'floral' | 'corporate';
  categoryLabel: string;
  image: string;
  aspect?: 'tall' | 'wide' | 'square';
  caption: string;
  location?: string;
}

export interface TestimonialItem {
  id: string;
  clientName: string;
  eventType: string;
  date: string;
  location: string;
  rating: number;
  review: string;
  clientAvatar: string;
  eventImage: string;
  verified: boolean;
}

export interface EnquiryFormData {
  fullName: string;
  phoneNumber: string;
  email: string;
  eventType: string;
  eventDate: string;
  eventLocation: string;
  guestCount: string;
  requirements: string;
}
