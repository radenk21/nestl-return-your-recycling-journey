export type WasteCategory = 'ubc' | 'carton' | 'flex-plastic' | 'pet' | 'aluminium';

export interface CategoryInfo {
  id: WasteCategory;
  name: string;
  nameFull: string;
  description: string;
  icon: string;
  color: string;
  lightColor: string;
  points: number;
  correctExamples: string[];
  incorrectExamples: string[];
  instructions: string[];
}

export interface Badge {
  id: string;
  name: string;
  description: string;
  icon: string;
  unlocked: boolean;
  unlockedAt?: Date;
}

export interface RecyclingAction {
  id: string;
  category: WasteCategory;
  points: number;
  timestamp: Date;
  binLocation?: string;
}

export interface UserStats {
  totalPoints: number;
  level: number;
  levelProgress: number;
  totalRecycled: number;
  co2Saved: number;
  treesEquivalent: number;
}

export interface OnboardingSlide {
  id: number;
  title: string;
  description: string;
  illustration: 'welcome' | 'how-it-works' | 'steps' | 'first-step';
}
