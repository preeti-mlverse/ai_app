import React, { useEffect, useRef } from 'react';
import { View, StyleSheet, Animated } from 'react-native';
import LineCharacter from '../mascot/LineCharacter';
import { theme } from '../../config/theme';

interface AnimatedCharacterProps {
  progress: number;
  size?: number;
}

export default function AnimatedCharacter({ 
  progress, 
  size = 60 
}: AnimatedCharacterProps) {
  const bounceAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.sequence([
      Animated.timing(bounceAnim, {
        toValue: -5,
        duration: 200,
        useNativeDriver: true,
      }),
      Animated.timing(bounceAnim, {
        toValue: 0,
        duration: 200,
        useNativeDriver: true,
      }),
    ]).start();
  }, [progress]);

  return (
    <Animated.View 
      style={[
        styles.container, 
        { transform: [{ translateY: bounceAnim }] }
      ]}
    >
      <LineCharacter 
        pose="bicycleRiding" 
        size={size}
        color={theme.colors.primary}
      />
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
