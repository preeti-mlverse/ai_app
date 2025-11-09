import React from 'react';
import { View, StyleSheet, ViewStyle } from 'react-native';
import { theme } from '../../config/theme';
import Svg, { Rect } from 'react-native-svg';

interface SketchCardProps {
  children: React.ReactNode;
  style?: ViewStyle;
  sketchy?: boolean; // Show hand-drawn border
}

export const SketchCard: React.FC<SketchCardProps> = ({
  children,
  style,
  sketchy = true,
}) => {
  return (
    <View style={[styles.container, style]}>
      {sketchy && (
        <Svg
          style={StyleSheet.absoluteFill}
          width="100%"
          height="100%"
        >
          <Rect
            x="0"
            y="0"
            width="100%"
            height="100%"
            fill="none"
            stroke={theme.colors.sketchBorder}
            strokeWidth={theme.sketchStrokes.regular}
            strokeDasharray={theme.sketchStrokes.dashArray}
            rx={theme.borderRadius['2xl']}
          />
        </Svg>
      )}
      <View style={styles.content}>{children}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.card,
    borderRadius: theme.borderRadius['2xl'],
    padding: theme.spacing.base,
    ...theme.shadows.md,
  },
  content: {
    position: 'relative',
    zIndex: 1,
  },
});
