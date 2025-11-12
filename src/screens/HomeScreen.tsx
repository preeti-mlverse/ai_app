import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { theme } from '../config/theme';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import ProgressPath from '../components/illustrations/ProgressPath';

export default function HomeScreen() {
  const insets = useSafeAreaInsets();
  const [userProfile] = useState({
    name: 'Alex',
    current_streak: 5,
    total_xp: 1250,
    level: 8,
  });

  // Journey progress data
  const journeyCheckpoints = [
    { id: '1', title: 'Intro', completed: true, current: false },
    { id: '2', title: 'Basics', completed: true, current: false },
    { id: '3', title: 'AI Types', completed: false, current: true },
    { id: '4', title: 'ML', completed: false, current: false },
    { id: '5', title: 'Expert', completed: false, current: false },
  ];

  const overallProgress = 45; // Calculate based on completed lessons

  return (
    <View style={styles.container}>
      <ScrollView 
        contentContainerStyle={[
          styles.content,
          { paddingBottom: 80 } // Space for tab bar
        ]}
        showsVerticalScrollIndicator={false}
      >
        {/* Hero Section */}
        <LinearGradient
          colors={[theme.colors.primary, theme.colors.secondary]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={styles.heroSection}
        >
          <View style={styles.heroContent}>
            <Text style={styles.welcomeText}>Hey {userProfile.name}! 👋</Text>
            <Text style={styles.motivationText}>
              You're {overallProgress}% through your learning journey!
            </Text>
          </View>
          
          <View style={styles.characterContainer}>
            <Text style={{ fontSize: 80 }}>🎓</Text>
            <Text style={styles.characterLabel}>Let's Learn!</Text>
          </View>
        </LinearGradient>

        {/* Journey Progress - NEW SECTION */}
        <View style={styles.journeySection}>
          <Text style={styles.sectionTitle}>Your Learning Journey</Text>
          <ProgressPath 
            checkpoints={journeyCheckpoints}
            currentProgress={overallProgress}
          />
        </View>

        {/* Stats Cards */}
        <View style={styles.statsContainer}>
          <View style={styles.statCard}>
            <View style={styles.statIcon}>
              <Text style={{ fontSize: 32 }}>🔥</Text>
            </View>
            <Text style={styles.statValue}>{userProfile.current_streak}</Text>
            <Text style={styles.statLabel}>Day Streak</Text>
          </View>

          <View style={styles.statCard}>
            <View style={styles.statIcon}>
              <Text style={{ fontSize: 32 }}>⭐</Text>
            </View>
            <Text style={styles.statValue}>{userProfile.total_xp}</Text>
            <Text style={styles.statLabel}>Total XP</Text>
          </View>

          <View style={styles.statCard}>
            <View style={styles.statIcon}>
              <Text style={{ fontSize: 32 }}>🎯</Text>
            </View>
            <Text style={styles.statValue}>{userProfile.level}</Text>
            <Text style={styles.statLabel}>Level</Text>
          </View>
        </View>

        {/* Continue Learning */}
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>Continue Learning</Text>
          
          <TouchableOpacity style={styles.learningCard}>
            <View style={styles.learningCardContent}>
              <View style={styles.learningInfo}>
                <Text style={styles.conceptNumber}>Lesson 3.1</Text>
                <Text style={styles.conceptTitle}>Types of AI</Text>
                <Text style={styles.conceptMeta}>7 min • Medium</Text>
              </View>
              
              <View style={styles.learningIllustration}>
                <Text style={{ fontSize: 60 }}>🤖</Text>
              </View>
            </View>
            
            <View style={styles.progressContainer}>
              <View style={styles.progressBar}>
                <View style={[styles.progressFill, { width: '20%' }]} />
              </View>
              <Text style={styles.progressText}>20% Complete</Text>
            </View>
          </TouchableOpacity>
        </View>

        {/* Quick Actions */}
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>Quick Actions</Text>
          
          <View style={styles.actionGrid}>
            {[
              { icon: '🏆', label: 'Achievements', color: '#F59E0B' },
              { icon: '📊', label: 'Progress', color: '#6366F1' },
              { icon: '🎮', label: 'Activities', color: '#EC4899' },
              { icon: '👥', label: 'Community', color: '#10B981' },
            ].map((action, index) => (
              <TouchableOpacity 
                key={index} 
                style={[styles.actionCard, { borderColor: action.color }]}
              >
                <View style={[styles.actionIcon, { backgroundColor: action.color + '20' }]}>
                  <Text style={{ fontSize: 40 }}>{action.icon}</Text>
                </View>
                <Text style={styles.actionLabel}>{action.label}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8FAFC',
  },
  content: {
    flexGrow: 1,
  },
  heroSection: {
    padding: 24,
    paddingTop: 60,
    borderBottomLeftRadius: 32,
    borderBottomRightRadius: 32,
    marginBottom: 16,
  },
  heroContent: {
    marginBottom: 16,
  },
  welcomeText: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 8,
  },
  motivationText: {
    fontSize: 16,
    color: '#FFFFFF',
    opacity: 0.9,
  },
  characterContainer: {
    alignItems: 'center',
    marginTop: 8,
  },
  characterLabel: {
    fontSize: 14,
    color: '#FFFFFF',
    fontWeight: '600',
    marginTop: 8,
  },
  // NEW STYLE for journey section
  journeySection: {
    marginVertical: 16,
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    padding: 16,
    marginHorizontal: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingHorizontal: 16,
    marginBottom: 24,
  },
  statCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 16,
    alignItems: 'center',
    flex: 1,
    marginHorizontal: 6,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  statIcon: {
    marginBottom: 8,
  },
  statValue: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1E293B',
    marginBottom: 4,
  },
  statLabel: {
    fontSize: 12,
    color: '#64748B',
  },
  sectionContainer: {
    paddingHorizontal: 16,
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1E293B',
    marginBottom: 16,
  },
  learningCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 12,
    elevation: 4,
  },
  learningCardContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  learningInfo: {
    flex: 1,
  },
  conceptNumber: {
    fontSize: 12,
    color: '#6366F1',
    fontWeight: '600',
    marginBottom: 4,
  },
  conceptTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1E293B',
    marginBottom: 4,
  },
  conceptMeta: {
    fontSize: 14,
    color: '#64748B',
  },
  learningIllustration: {
    marginLeft: 16,
  },
  progressContainer: {
    marginTop: 12,
  },
  progressBar: {
    height: 8,
    backgroundColor: '#6366F1' + '20',
    borderRadius: 8,
    overflow: 'hidden',
    marginBottom: 8,
  },
  progressFill: {
    height: '100%',
    backgroundColor: '#6366F1',
    borderRadius: 8,
  },
  progressText: {
    fontSize: 12,
    color: '#64748B',
    textAlign: 'right',
  },
  actionGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  actionCard: {
    width: '48%',
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 20,
    alignItems: 'center',
    marginBottom: 12,
    borderWidth: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 2,
  },
  actionIcon: {
    width: 70,
    height: 70,
    borderRadius: 35,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
  },
  actionLabel: {
    fontSize: 14,
    fontWeight: '600',
    color: '#1E293B',
  },
});
