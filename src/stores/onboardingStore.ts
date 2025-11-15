import { create } from 'zustand';

// Types
export interface OnboardingData {
  age: number | null;
  selectedGoals: Array<'curriculum' | 'generic' | 'projects'>;
  classLevel: number | null;
  stream: 'Science' | 'Commerce' | 'Arts' | null;
  proficiencyLevel: number | null;
  email: string;
  password: string;
  fullName: string;
  dailyGoalMinutes: number;
  selectedGroups: string[];
  notificationsEnabled: boolean;
  preferredLanguage: string;
  bio: string;
  profilePublic: boolean;
}

export interface OnboardingStore {
  data: OnboardingData;
  updateData: (updates: Partial<OnboardingData>) => void;
  reset: () => void;
}

// Initial state
const initialData: OnboardingData = {
  age: null,
  selectedGoals: [],
  classLevel: null,
  stream: null,
  proficiencyLevel: null,
  email: '',
  password: '',
  fullName: '',
  dailyGoalMinutes: 10,
  selectedGroups: [],
  notificationsEnabled: false,
  preferredLanguage: 'en',
  bio: '',
  profilePublic: false,
};

// Create store
export const useOnboardingStore = create<OnboardingStore>((set) => ({
  data: initialData,
  
  updateData: (updates) => {
    set((state) => ({
      data: { ...state.data, ...updates },
    }));
  },
  
  reset: () => {
    set({ data: initialData });
  },
}));