import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

type CharacterPose = 
  | 'celebrating' 
  | 'thinking' 
  | 'studying' 
  | 'confused' 
  | 'achievement'
  | 'reading';

interface CharacterMascotProps {
  pose?: CharacterPose;
  size?: number;
}

export default function CharacterMascot({ 
  pose = 'celebrating', 
  size = 100 
}: CharacterMascotProps) {
  // For now using emojis, but you'll replace with actual SVG/images
  const characters: Record<CharacterPose, string> = {
    celebrating: '🎉',
    thinking: '🤔',
    studying: '📚',
    confused: '😕',
    achievement: '🏆',
    reading: '📖',
  };

  return (
    <View style={[styles.container, { width: size, height: size }]}>
      <View style={styles.character}>
        <span style={{ fontSize: size * 0.6 }}>{characters[pose]}</span>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  character: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
