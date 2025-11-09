import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../navigation/AppNavigator';
import { theme } from '../config/theme';
import { SketchCard } from '../components/common/SketchCard';
import { HandDrawnButton } from '../components/common/HandDrawnButton';
import { ByteMascot } from '../components/common/ByteMascot';
import { conceptService } from '../services/conceptService';
import { gamificationService } from '../services/gamificationService';
import { LearningConcept, UserProfile } from '../types';

type HomeScreenProp = StackNavigationProp<RootStackParamList>;

export default function HomeScreen() {
  const navigation = useNavigation<HomeScreenProp>();
  const [nextConcept, setNextConcept] = useState<LearningConcept | null>(null);
  const [userProfile, setUserProfile] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState(true);

  // Mock user ID - replace with actual auth
  const userId = 'demo-user-id';

  useEffect(() => {
    loadHomeData();
  }, []);

  const loadHomeData = async () => {
    try {
      setLoading(true);
      
      // Load user profile
      const profile = await gamificationService.getUserProfile(userId);
      setUserProfile(profile);

      // Load next concept
      const concept = await conceptService.getNextConcept(userId);
      setNextConcept(concept);
    } catch (error) {
      console.error('Error loading home data:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleStartLearning = () => {
    if (nextConcept) {
      navigation.navigate('Concept', { conceptId: nextConcept.id });
    }
  };

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      {/* Header Section */}
      <View style={styles.header}>
        <Text style={styles.greeting}>
          Hey there! 👋
        </Text>
        <Text style={styles.subGreeting}>
          Ready to learn something awesome?
        </Text>
      </View>

      {/* Streak and XP Card */}
      {userProfile && (
        <SketchCard style={styles.statsCard}>
          <View style={styles.statsRow}>
            <View style={styles.statItem}>
              <Text style={styles.statValue}>
                🔥 {userProfile.current_streak}
              </Text>
              <Text style={styles.statLabel}>Day Streak</Text>
            </View>
            
            <View style={styles.statDivider} />
            
            <View style={styles.statItem}>
              <Text style={styles.statValue}>
                ⭐ {userProfile.total_xp}
              </Text>
              <Text style={styles.statLabel}>Total XP</Text>
            </View>
            
            <View style={styles.statDivider} />
            
            <View style={styles.statItem}>
              <Text style={styles.statValue}>
                🎯 {userProfile.level}
              </Text>
              <Text style={styles.statLabel}>Level</Text>
            </View>
          </View>
        </SketchCard>
      )}

      {/* Byte Mascot Welcome */}
      <ByteMascot
        message="Let's continue where you left off! You're doing great! 🚀"
        pose="encouraging"
      />

      {/* Next Concept Card */}
      {nextConcept && (
        <SketchCard style={styles.nextConceptCard}>
          <Text style={styles.sectionTitle}>Continue Learning</Text>
          
          <View style={styles.conceptInfo}>
            <Text style={styles.conceptNumber}>
              {nextConcept.concept_number}
            </Text>
            <Text style={styles.conceptTitle}>
              {nextConcept.concept_title}
            </Text>
            <Text style={styles.conceptMeta}>
              {nextConcept.estimated_read_time / 60} min read · {nextConcept.difficulty}
            </Text>
          </View>

          <HandDrawnButton
            title="Start Learning 📚"
            onPress={handleStartLearning}
            variant="primary"
            size="large"
          />
        </SketchCard>
      )}

      {/* Today's Goal Card */}
      <SketchCard style={styles.goalCard}>
        <Text style={styles.sectionTitle}>Today's Goal</Text>
        <View style={styles.goalProgress}>
          <View style={styles.progressBar}>
            <View style={[styles.progressFill, { width: '60%' }]} />
          </View>
          <Text style={styles.goalText}>
            3 / 5 concepts completed
          </Text>
        </View>
      </SketchCard>

      {/* Quick Actions */}
      <View style={styles.quickActions}>
        <Text style={styles.sectionTitle}>Quick Actions</Text>
        <View style={styles.actionGrid}>
          <TouchableOpacity style={styles.actionButton}>
            <Text style={styles.actionEmoji}>🏆</Text>
            <Text style={styles.actionLabel}>Achievements</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.actionButton}>
            <Text style={styles.actionEmoji}>📊</Text>
            <Text style={styles.actionLabel}>Progress</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.actionButton}>
            <Text style={styles.actionEmoji}>🎮</Text>
            <Text style={styles.actionLabel}>Activities</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.actionButton}>
            <Text style={styles.actionEmoji}>👥</Text>
            <Text style={styles.actionLabel}>Friends</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
  content: {
    padding: theme.spacing.base,
  },
  header: {
    marginBottom: theme.spacing.lg,
  },
  greeting: {
    ...theme.textStyles.h1,
    marginBottom: theme.spacing.xs,
  },
  subGreeting: {
    ...theme.textStyles.body,
    color: theme.colors.textSecondary,
  },
  statsCard: {
    marginBottom: theme.spacing.base,
  },
  statsRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  statItem: {
    alignItems: 'center',
    flex: 1,
  },
  statValue: {
    ...theme.textStyles.h2,
    marginBottom: theme.spacing.xs,
  },
  statLabel: {
    ...theme.textStyles.bodySmall,
  },
  statDivider: {
    width: 1,
    height: 40,
    backgroundColor: theme.colors.sketchBorderLight,
  },
  nextConceptCard: {
    marginBottom: theme.spacing.base,
  },
  sectionTitle: {
    ...theme.textStyles.h3,
    marginBottom: theme.spacing.md,
  },
  conceptInfo: {
    marginBottom: theme.spacing.base,
  },
  conceptNumber: {
    ...theme.textStyles.bodySmall,
    color: theme.colors.primary,
    marginBottom: theme.spacing.xs,
  },
  conceptTitle: {
    ...theme.textStyles.h3,
    marginBottom: theme.spacing.xs,
  },
  conceptMeta: {
    ...theme.textStyles.bodySmall,
    color: theme.colors.textSecondary,
  },
  goalCard: {
    marginBottom: theme.spacing.base,
  },
  goalProgress: {
    gap: theme.spacing.sm,
  },
  progressBar: {
    height: 12,
    backgroundColor: theme.colors.secondary + '30',
    borderRadius: theme.borderRadius.full,
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
    backgroundColor: theme.colors.primary,
    borderRadius: theme.borderRadius.full,
  },
  goalText: {
    ...theme.textStyles.body,
    textAlign: 'center',
  },
  quickActions: {
    marginBottom: theme.spacing.xl,
  },
  actionGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: theme.spacing.md,
  },
  actionButton: {
    width: '47%',
    aspectRatio: 1,
    backgroundColor: theme.colors.card,
    borderRadius: theme.borderRadius.xl,
    borderWidth: theme.sketchStrokes.regular,
    borderColor: theme.colors.sketchBorderLight,
    alignItems: 'center',
    justifyContent: 'center',
    ...theme.shadows.sm,
  },
  actionEmoji: {
    fontSize: 40,
    marginBottom: theme.spacing.sm,
  },
  actionLabel: {
    ...theme.textStyles.body,
    fontFamily: theme.typography.handDrawn,
  },
});