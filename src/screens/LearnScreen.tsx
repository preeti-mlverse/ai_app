import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { theme } from '../config/theme';

export default function LearnScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>📚 Learn</Text>
        <Text style={styles.description}>
          Your learning content will appear here soon!
        </Text>
        
        <View style={styles.placeholderCard}>
          <Text style={styles.cardText}>🎯 Topics</Text>
          <Text style={styles.cardSubtext}>Browse learning topics</Text>
        </View>
        
        <View style={styles.placeholderCard}>
          <Text style={styles.cardText}>📖 Concepts</Text>
          <Text style={styles.cardSubtext}>Learn new concepts</Text>
        </View>
        
        <View style={styles.placeholderCard}>
          <Text style={styles.cardText}>✏️ Activities</Text>
          <Text style={styles.cardSubtext}>Practice what you learned</Text>
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
