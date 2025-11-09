// src/services/activityService.ts
import { supabase } from '../config/supabase';
import { GamifiedActivity, ActivitySession } from '../types';

export const activityService = {
  // Fetch activities for a concept
  async getActivitiesByConcept(conceptId: string): Promise<GamifiedActivity[]> {
    const { data, error } = await supabase
      .from('gamified_activities')
      .select('*')
      .eq('concept_id', conceptId)
      .eq('is_active', true)
      .order('sequence');
    
    if (error) throw error;
    return data || [];
  },

  // Record activity start
  async startActivity(
    userId: string,
    activityId: string
  ): Promise<string> {
    const { data, error } = await supabase
      .from('activity_sessions')
      .insert({
        user_id: userId,
        activity_id: activityId,
        started_at: new Date().toISOString(),
        attempts: 0,
        score: 0,
      })
      .select('id')
      .single();
    
    if (error) throw error;
    return data.id;
  },

  // Record activity completion
  async completeActivity(
    sessionId: string,
    score: number,
    xpEarned: number,
    timeSpent: number,
    attempts: number,
    successOnFirstTry: boolean
  ): Promise<void> {
    const { error } = await supabase
      .from('activity_sessions')
      .update({
        completed_at: new Date().toISOString(),
        completed: true,
        score,
        xp_earned: xpEarned,
        time_spent: timeSpent,
        attempts,
        success_on_first_try: successOnFirstTry,
      })
      .eq('id', sessionId);
    
    if (error) throw error;
  },

  // Get user's session history for an activity
  async getActivityHistory(
    userId: string,
    activityId: string
  ): Promise<ActivitySession[]> {
    const { data, error } = await supabase
      .from('activity_sessions')
      .select('*')
      .eq('user_id', userId)
      .eq('activity_id', activityId)
      .order('started_at', { ascending: false });
    
    if (error) throw error;
    return data || [];
  },
};