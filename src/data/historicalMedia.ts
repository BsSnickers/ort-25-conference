// Curated visual media and archive imagery for Swiss Corporate Minimal layout

export interface Speaker {
  id: string;
  name: string;
  role: string;
  org: string;
  country: string;
  topic: string;
  avatar: string;
}

export interface ArchiveArticle {
  id: string;
  year: string;
  badge: string;
  title: string;
  summary: string;
  tag: string;
  image: string;
}

// Unsplash high-resolution editorial & academic imagery tailored for ORT / academic testing
export const historicalMedia = {
  // Atmospheric exam hall under charcoal overlay
  heroExamHall: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=2070&auto=format&fit=crop",
  // CEATM 2002 founding team archival shot
  ceatmFounding: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=2070&auto=format&fit=crop",
  // Panoramic wide shot of auditorium with testing for parallax divider
  auditoriumParallax: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2070&auto=format&fit=crop",
  // Chronicle images
  chronicle2002: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=1200&auto=format&fit=crop",
  chronicleAltyn: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1200&auto=format&fit=crop",
  chronicleSubject: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?q=80&w=1200&auto=format&fit=crop",
  chroniclePandemic: "https://images.unsplash.com/photo-1584697964190-7bb9f1a0ff65?q=80&w=1200&auto=format&fit=crop",
  chroniclePsychometrics: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop",
  chronicleDigital: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop",
  // High-level speakers portraits
  speaker1: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=600&auto=format&fit=crop",
  speaker2: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=600&auto=format&fit=crop",
  speaker3: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=600&auto=format&fit=crop",
  speaker4: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=600&auto=format&fit=crop",
  speaker5: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=600&auto=format&fit=crop",
  speaker6: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=600&auto=format&fit=crop",
  speaker7: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=600&auto=format&fit=crop",
  speaker8: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=600&auto=format&fit=crop",
  speaker9: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=600&auto=format&fit=crop",
};
