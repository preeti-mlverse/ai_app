
export interface LearningConcept {
  id: string;
  subtopic_id?: string;
  topic_id: string;
  concept_number: string;
  concept_title: string;
  concept_text: string;
  concept_type: 'definition' | 'process' | 'example' | 'theory' | 'application';
  estimated_read_time: number;
  difficulty: 'easy' | 'medium' | 'hard';
  sequence: number;
  has_cbse_activity: boolean;
  has_gamified_activities: boolean;
}

export interface GamifiedActivity {
  id: string;
  concept_id: string;
  activity_name: string;
  activity_type: 
    | 'drag_drop_match'
    | 'fill_blanks'
    | 'sequence_order'
    | 'true_false_swipe'
    | 'tap_correct'
    | 'puzzle_reveal'
    | 'spot_difference'
    | 'sorting_game';
  game_config: any; // Activity-specific config
  points_possible: number;
  time_limit_seconds?: number;
  success_criteria: {
    min_score: number;
    max_attempts: number;
  };
  mascot_intro: string;
  mascot_hint: string;
  mascot_success: string;
  mascot_retry: string;
  difficulty: 'easy' | 'medium' | 'hard';
  cognitive_load: 'low' | 'medium' | 'high';
  sequence: number;
}

export interface UserProfile {
  id: string;
  display_name: string;
  avatar_url?: string;
  total_xp: number;
  level: number;
  current_streak: number;
  longest_streak: number;
  last_activity_date?: string;
}

export interface Topic {
  id: string;
  chapter_id: string;
  topic_number: string;
  topic_title: string;
}

export interface Subtopic {
  id: string;
  topic_id: string;
  subtopic_number: string;
  subtopic_title: string;
}

export interface ActivitySession {
  id: string;
  user_id: string;
  activity_id: string;
  started_at: string;
  completed_at?: string;
  time_spent: number;
  attempts: number;
  score: number;
  xp_earned: number;
  completed: boolean;
  success_on_first_try: boolean;
}