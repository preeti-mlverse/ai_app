export interface UserProfile {
  id: string;
  full_name: string | null;
  age: number | null;
  class_level: number | null;
  stream: 'Science' | 'Commerce' | 'Arts' | null;
  preferred_language: string;
  daily_goal_minutes: number;
  notifications_enabled: boolean;
  profile_public: boolean;
  bio: string | null;
  avatar_url: string | null;
  total_xp: number;
  current_streak: number;
  longest_streak: number;
  level: number;
  onboarding_completed: boolean;
  onboarding_completed_at: string | null;
  created_at: string;
  updated_at: string;
}

export interface UserLearningGoal {
  id: string;
  user_id: string;
  goal_type: 'curriculum' | 'generic' | 'projects';
  ai_proficiency_level: number;
  is_active: boolean;
  progress_percent: number;
  started_at: string;
  last_accessed_at: string;
}

export interface StudyGroup {
  id: string;
  name: string;
  description: string | null;
  group_type: 'class' | 'proficiency' | 'topic' | 'language';
  class_level: number | null;
  proficiency_level: number | null;
  language: string | null;
  member_count: number;
  is_public: boolean;
  created_by: string | null;
  created_at: string;
}

export interface OnboardingData {
  age: number | null;
  selectedGoals: Array<'curriculum' | 'generic' | 'projects'>;
  classLevel: number | null;
  stream: 'Science' | 'Commerce' | 'Arts' | null;
  proficiencyLevel: number | null;
  email: string | null;
  password: string | null;
  fullName: string | null;
  dailyGoalMinutes: number;
  selectedGroups: string[];
  notificationsEnabled: boolean;
  preferredLanguage: string;
  bio: string | null;
  profilePublic: boolean;
}