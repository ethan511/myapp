export interface CoupleSettings {
  partner1Name: string;
  partner2Name: string;
  anniversaryDate: string; // YYYY-MM-DD
  anniversaryTime?: string; // HH:mm
  appTitle?: string;
  coverImage?: string;
  musicUrl?: string;
  passcodeEnabled?: boolean;
  passcode?: string;
}

export interface MemoryItem {
  id: string;
  title: string;
  date: string;
  category: 'firsts' | 'milestone' | 'trip' | 'cozy' | 'special';
  description: string;
  location?: string;
  imageUrl?: string;
  favorite?: boolean;
}

export interface LoveLetter {
  id: string;
  trigger: string;
  title: string;
  content: string;
  isOpen: boolean;
  unlockedAt?: string;
  sealColor?: string;
}

export interface GalleryPhoto {
  id: string;
  imageUrl: string;
  caption: string;
  date: string;
  location?: string;
  title: string;
  category: string;
}

export interface LoveReason {
  id: string;
  text: string;
  category?: 'sweet' | 'appreciation' | 'funny' | 'deep';
  addedAt: string;
}

export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

export type TabType = 'timeline' | 'envelopes' | 'gallery' | 'jar' | 'quiz' | 'ai';
