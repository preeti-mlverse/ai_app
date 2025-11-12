import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { theme } from '../config/theme';

export default function ClubScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>👥 Club</Text>
        <Text style={styles.description}>
          Connect with other learners and join study groups!
        </Text>
        
        <View style={styles.placeholderCard}>
          <Text style={styles.cardText}>🏆 Leaderboard</Text>
          <Text style={styles.cardSubtext}>See top learners</Text>
        </View>
        
        <View style={styles.placeholderCard}>
          <Text style={styles.cardText}>👥 Study Groups</Text>
          <Text style={styles.cardSubtext}>Join or create groups</Text>
        </View>
        
        <View style={styles.placeholderCard}>
          <Text style={styles.cardText}>🎉 Challenges</Text>
          <Text style={styles.cardSubtext}>Participate in challenges</Text>
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
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: theme.colors.primary,
    marginBottom: theme.spacing.md,
  },
  description: {
    fontSize: 16,
    color: theme.colors.textSecondary,
    marginBottom: theme.spacing.lg,
  },
  placeholderCard: {
    backgroundColor: theme.colors.card,
    padding: theme.spacing.lg,
    borderRadius: theme.borderRadius.lg,
    marginBottom: theme.spacing.md,
    borderWidth: 1,
    borderColor: theme.colors.sketchBorderLight,
  },
  cardText: {
    fontSize: 20,
    fontWeight: '600',
    color: theme.colors.textPrimary,  // ✅ CHANGED
    marginBottom: theme.spacing.xs,
  },
  cardSubtext: {
    fontSize: 14,
    color: theme.colors.textSecondary,
  },
});
