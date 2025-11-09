
import { supabase } from '../config/supabase';

export const gamificationService = {
  // Award XP to user
  async awardXP(
    userId: string,
    amount: number,
    transactionType: string,
    description?: string
  ): Promise<void> {
    await supabase.rpc('award_xp', {
      p_user_id: userId,
      p_amount: amount,
      p_type: transactionType,
      p_description: description || null,
    });
  },

  // Get user profile with gamification data
  async getUserProfile(userId: string) {
    const { data, error } = await supabase
      .from('user_profiles')
      .select('*')
      .eq('id', userId)
      .single();
    
    if (error) throw error;
    return data;
  },

  // Update streak (called daily)
  async updateStreak(userId: string): Promise<void> {
    // Streak is auto-updated via database trigger
    // This is a manual trigger if needed
    const today = new Date().toISOString().split('T')[0];
    
    const { error } = await supabase
      .from('user_streaks')
      .upsert({
        user_id: userId,
        activity_date: today,
        activities_completed: 1,
      });
    
    if (error) throw error;
  },

  // Get user badges
  async getUserBadges(userId: string) {
    const { data, error } = await supabase
      .from('user_badges')
      .select(`
        *,
        badges (*)
      `)
      .eq('user_id', userId)
      .order('earned_at', { ascending: false });
    
    if (error) throw error;
    return data || [];
  },

  // Get leaderboard
  async getLeaderboard(leaderboardType: string = 'global_xp', limit: number = 50) {
    const { data, error } = await supabase
      .from('leaderboard_entries')
      .select(`
        *,
        user_profiles (
          display_name,
          avatar_url
        )
      `)
      .eq('leaderboard_id', leaderboardType)
      .order('rank')
      .limit(limit);
    
    if (error) throw error;
    return data || [];
  },
};