import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Hop from '../../components/mascot/Hop';
import Button from '../../components/common/Button';
import ProgressBar from '../../components/common/ProgressBar';
import { useOnboardingStore } from '../../stores/onboardingStore';
import { supabase } from '../../config/supabase';

export default function CompletionScreen({ navigation }) {
  const [saving, setSaving] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const data = useOnboardingStore((state) => state.data);
  const reset = useOnboardingStore((state) => state.reset);

  useEffect(() => {
    saveToDatabase();
  }, []);

  const saveToDatabase = async () => {
    try {
      setSaving(true);
      setError(null);

      // Get current user
      const { data: { user } } = await supabase.auth.getUser();
      
      if (!user) {
        throw new Error('No user found. Please try logging in again.');
      }

      // 1. Create user profile
      const { error: profileError } = await supabase
        .from('user_profiles')
        .insert({
          id: user.id,
          full_name: data.fullName,
          age: data.age,
          class_level: data.classLevel,
          stream: data.stream,
          preferred_language: data.preferredLanguage,
          daily_goal_minutes: data.dailyGoalMinutes,
          notifications_enabled: data.notificationsEnabled,
          profile_public: data.profilePublic,
          bio: data.bio,
          onboarding_completed: true,
          onboarding_completed_at: new Date().toISOString(),
        });

      if (profileError) throw profileError;

      // 2. Create learning goals
      const goalsToInsert = data.selectedGoals.map(goalType => ({
        user_id: user.id,
        goal_type: goalType,
        ai_proficiency_level: data.proficiencyLevel,
        is_active: true,
      }));

      if (goalsToInsert.length > 0) {
        const { error: goalsError } = await supabase
          .from('user_learning_goals')
          .insert(goalsToInsert);

        if (goalsError) throw goalsError;
      }

      // 3. Join study groups
      if (data.selectedGroups.length > 0) {
        const membershipsToInsert = data.selectedGroups.map(groupId => ({
          user_id: user.id,
          group_id: groupId,
        }));

        const { error: membershipError } = await supabase
          .from('group_memberships')
          .insert(membershipsToInsert);

        if (membershipError) throw membershipError;
      }

      // Success!
      setSaving(false);
    } catch (err: any) {
      console.error('Error saving onboarding data:', err);
      setError(err.message || 'Failed to save data');
      setSaving(false);
    }
  };

  const handleContinue = () => {
    reset(); // Clear onboarding store
    // Navigate to main app (you'll implement this)
    navigation.reset({
      index: 0,
      routes: [{ name: 'MainApp' }],
    });
  };

  const handleRetry = () => {
    saveToDatabase();
  };

  if (saving) {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.loadingContent}>
          <Hop emotion="excited" message="Setting up your learning journey..." />
          <ActivityIndicator size="large" color="#FF6B9D" />
          <Text style={styles.loadingText}>Just a moment!</Text>
        </View>
      </SafeAreaView>
    );
  }

  if (error) {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.content}>
          <Hop emotion="sad" message="Oops! Something went wrong 😢" />
          <Text style={styles.errorTitle}>Error Saving Data</Text>
          <Text style={styles.errorText}>{error}</Text>
        </View>
        <View style={styles.footer}>
          <Button title="Try Again" onPress={handleRetry} />
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <ProgressBar current={12} total={12} />
      <View style={styles.content}>
        <Hop emotion="celebrating" message="Let's hop into AI together! 🐰✨" />
        <Text style={styles.title}>You're all set! 🎉</Text>
        <Text style={styles.subtitle}>Your personalized AI learning journey starts now!</Text>
        
        <View style={styles.summaryBox}>
          <Text style={styles.summaryTitle}>Your Setup:</Text>
          <Text style={styles.summaryItem}>✓ {data.selectedGoals.length} learning paths</Text>
          {data.classLevel && (
            <Text style={styles.summaryItem}>✓ Class {data.classLevel} curriculum</Text>
          )}
          <Text style={styles.summaryItem}>✓ {data.dailyGoalMinutes} min daily goal</Text>
          <Text style={styles.summaryItem}>✓ {data.selectedGroups.length} study groups</Text>
        </View>
      </View>
      <View style={styles.footer}>
        <Button title="Start Learning! 🚀" onPress={handleContinue} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FFF' },
  loadingContent: { flex: 1, justifyContent: 'center', alignItems: 'center', paddingHorizontal: 24 },
  content: { flex: 1, paddingHorizontal: 24, justifyContent: 'center' },
  title: { fontSize: 32, fontWeight: 'bold', textAlign: 'center', marginBottom: 8 },
  subtitle: { fontSize: 16, color: '#6B7280', textAlign: 'center', marginBottom: 32 },
  summaryBox: {
    backgroundColor: '#F9FAFB',
    borderRadius: 12,
    padding: 20,
    borderWidth: 1,
    borderColor: '#E5E7EB',
  },
  summaryTitle: { fontSize: 18, fontWeight: '600', marginBottom: 12 },
  summaryItem: { fontSize: 16, marginBottom: 8, color: '#1F2937' },
  loadingText: { fontSize: 16, color: '#6B7280', marginTop: 16 },
  errorTitle: { fontSize: 24, fontWeight: 'bold', textAlign: 'center', marginBottom: 12, color: '#EF4444' },
  errorText: { fontSize: 14, color: '#6B7280', textAlign: 'center', marginBottom: 24 },
  footer: { padding: 24 },
});
