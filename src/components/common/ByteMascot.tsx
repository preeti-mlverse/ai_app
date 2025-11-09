// src/components/common/ByteMascot.tsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { theme } from '../../config/theme';

interface ByteMascotProps {
  message: string;
  pose?: 'idle' | 'cheering' | 'thinking' | 'encouraging';
}

export const ByteMascot: React.FC<ByteMascotProps> = ({
  message,
  pose = 'idle',
}) => {
  // Get emoji based on pose
  const getMascotEmoji = (pose: string) => {
    switch (pose) {
      case 'cheering':
        return '🎉';
      case 'thinking':
        return '🤔';
      case 'encouraging':
        return '💪';
      default:
        return '🤖';
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.mascotContainer}>
        <View style={styles.mascotPlaceholder}>
          <Text style={styles.mascotEmoji}>{getMascotEmoji(pose)}</Text>
        </View>
      </View>
      
      <View style={styles.speechBubble}>
        <View style={styles.speechBubbleArrow} />
        <Text style={styles.message}>{message}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginVertical: theme.spacing.md,
    paddingHorizontal: theme.spacing.sm,
  },
  mascotContainer: {
    marginRight: theme.spacing.sm,
  },
  mascotPlaceholder: {
    width: 60,
    height: 60,
    borderRadius: theme.borderRadius.full,
    backgroundColor: theme.colors.secondary,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 3,
    borderColor: theme.colors.primary,
  },
  mascotEmoji: {
    fontSize: 32,
  },
  speechBubble: {
    flex: 1,
    backgroundColor: theme.colors.card,
    borderRadius: theme.borderRadius.lg,
    padding: theme.spacing.md,
    ...theme.shadows.sm,
    borderWidth: 2,
    borderColor: theme.colors.sketchBorderLight,
    position: 'relative',
  },
  speechBubbleArrow: {
    position: 'absolute',
    left: -8,
    top: 20,
    width: 0,
    height: 0,
    borderTopWidth: 8,
    borderTopColor: 'transparent',
    borderRightWidth: 8,
    borderRightColor: theme.colors.card,
    borderBottomWidth: 8,
    borderBottomColor: 'transparent',
  },
  message: {
    ...theme.textStyles.body,
    color: theme.colors.textPrimary,
  },
});
