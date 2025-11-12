import React from 'react';
import { View, StyleSheet } from 'react-native';
import Svg, { Path, Circle, Line } from 'react-native-svg';
import { theme } from '../../config/theme';

export type CharacterPose =
  | 'waving'
  | 'bicycleRiding'
  | 'thinking'
  | 'celebrating'
  | 'reading'
  | 'confused'
  | 'pointing'
  | 'excited'
  | 'studying'
  | 'highfive';

interface LineCharacterProps {
  pose: CharacterPose;
  size?: number;
  color?: string;
  strokeWidth?: number;
}

export default function LineCharacter({
  pose,
  size = 100,
  color = theme.colors.primary,
  strokeWidth = 2,
}: LineCharacterProps) {
  
  const renderPose = () => {
    switch (pose) {
      case 'waving':
        return (
          <Svg width={size} height={size} viewBox="0 0 100 100">
            {/* Head */}
            <Circle cx="50" cy="25" r="12" stroke={color} strokeWidth={strokeWidth} fill="none" />
            {/* Body */}
            <Line x1="50" y1="37" x2="50" y2="60" stroke={color} strokeWidth={strokeWidth} />
            {/* Arms - one raised (waving) */}
            <Path d="M 50 45 L 35 35" stroke={color} strokeWidth={strokeWidth} fill="none" />
            <Path d="M 50 45 L 65 30" stroke={color} strokeWidth={strokeWidth} fill="none" />
            {/* Legs */}
            <Path d="M 50 60 L 40 85" stroke={color} strokeWidth={strokeWidth} fill="none" />
            <Path d="M 50 60 L 60 85" stroke={color} strokeWidth={strokeWidth} fill="none" />
            {/* Smile */}
            <Path d="M 45 23 Q 50 27 55 23" stroke={color} strokeWidth={strokeWidth} fill="none" />
          </Svg>
        );

      case 'bicycleRiding':
        return (
          <Svg width={size} height={size} viewBox="0 0 100 100">
            {/* Head */}
            <Circle cx="40" cy="20" r="10" stroke={color} strokeWidth={strokeWidth} fill="none" />
            {/* Body leaning forward */}
            <Path d="M 40 30 L 45 50" stroke={color} strokeWidth={strokeWidth} fill="none" />
            {/* Arms holding handlebars */}
            <Path d="M 45 40 L 55 35" stroke={color} strokeWidth={strokeWidth} fill="none" />
            {/* Legs pedaling */}
            <Path d="M 45 50 L 40 65" stroke={color} strokeWidth={strokeWidth} fill="none" />
            <Path d="M 45 50 L 50 65" stroke={color} strokeWidth={strokeWidth} fill="none" />
            
            {/* Bicycle */}
            {/* Front wheel */}
            <Circle cx="70" cy="70" r="12" stroke={color} strokeWidth={strokeWidth} fill="none" />
            {/* Back wheel */}
            <Circle cx="30" cy="70" r="12" stroke={color} strokeWidth={strokeWidth} fill="none" />
            {/* Frame */}
            <Path d="M 30 70 L 50 45 L 70 70" stroke={color} strokeWidth={strokeWidth} fill="none" />
            <Path d="M 50 45 L 55 35" stroke={color} strokeWidth={strokeWidth} fill="none" />
            {/* Seat */}
            <Path d="M 45 45 L 50 45" stroke={color} strokeWidth={strokeWidth + 1} fill="none" />
          </Svg>
        );

      case 'thinking':
        return (
          <Svg width={size} height={size} viewBox="0 0 100 100">
            {/* Head */}
            <Circle cx="50" cy="25" r="12" stroke={color} strokeWidth={strokeWidth} fill="none" />
            {/* Body */}
            <Line x1="50" y1="37" x2="50" y2="60" stroke={color} strokeWidth={strokeWidth} />
            {/* Arms - hand on chin */}
            <Path d="M 50 45 L 45 50 L 45 35" stroke={color} strokeWidth={strokeWidth} fill="none" />
            <Path d="M 50 45 L 60 50" stroke={color} strokeWidth={strokeWidth} fill="none" />
            {/* Legs */}
            <Path d="M 50 60 L 40 85" stroke={color} strokeWidth={strokeWidth} fill="none" />
            <Path d="M 50 60 L 60 85" stroke={color} strokeWidth={strokeWidth} fill="none" />
            {/* Thought bubble */}
            <Circle cx="65" cy="15" r="5" stroke={color} strokeWidth={strokeWidth} fill="none" />
            <Circle cx="60" cy="20" r="3" stroke={color} strokeWidth={strokeWidth} fill="none" />
            <Circle cx="55" cy="22" r="2" stroke={color} strokeWidth={strokeWidth} fill="none" />
          </Svg>
        );

      case 'celebrating':
        return (
          <Svg width={size} height={size} viewBox="0 0 100 100">
            {/* Head */}
            <Circle cx="50" cy="25" r="12" stroke={color} strokeWidth={strokeWidth} fill="none" />
            {/* Body */}
            <Line x1="50" y1="37" x2="50" y2="60" stroke={color} strokeWidth={strokeWidth} />
            {/* Arms raised */}
            <Path d="M 50 45 L 30 25" stroke={color} strokeWidth={strokeWidth} fill="none" />
            <Path d="M 50 45 L 70 25" stroke={color} strokeWidth={strokeWidth} fill="none" />
            {/* Legs - jumping */}
            <Path d="M 50 60 L 45 75" stroke={color} strokeWidth={strokeWidth} fill="none" />
            <Path d="M 50 60 L 55 75" stroke={color} strokeWidth={strokeWidth} fill="none" />
            {/* Big smile */}
            <Path d="M 43 23 Q 50 30 57 23" stroke={color} strokeWidth={strokeWidth} fill="none" />
            {/* Sparkles */}
            <Path d="M 20 30 L 25 30 M 23 27 L 23 33" stroke={color} strokeWidth={strokeWidth} fill="none" />
            <Path d="M 75 30 L 80 30 M 78 27 L 78 33" stroke={color} strokeWidth={strokeWidth} fill="none" />
          </Svg>
        );

      case 'reading':
        return (
          <Svg width={size} height={size} viewBox="0 0 100 100">
            {/* Head tilted down */}
            <Circle cx="50" cy="30" r="12" stroke={color} strokeWidth={strokeWidth} fill="none" />
            {/* Body */}
            <Line x1="50" y1="42" x2="50" y2="60" stroke={color} strokeWidth={strokeWidth} />
            {/* Arms holding book */}
            <Path d="M 50 45 L 35 50" stroke={color} strokeWidth={strokeWidth} fill="none" />
            <Path d="M 50 45 L 65 50" stroke={color} strokeWidth={strokeWidth} fill="none" />
            {/* Legs sitting */}
            <Path d="M 50 60 L 35 70 L 30 70" stroke={color} strokeWidth={strokeWidth} fill="none" />
            <Path d="M 50 60 L 65 70 L 70 70" stroke={color} strokeWidth={strokeWidth} fill="none" />
            {/* Book */}
            <Path d="M 35 50 L 35 60 L 65 60 L 65 50 L 35 50" stroke={color} strokeWidth={strokeWidth} fill="none" />
            <Line x1="50" y1="50" x2="50" y2="60" stroke={color} strokeWidth={strokeWidth} />
          </Svg>
        );

      case 'confused':
        return (
          <Svg width={size} height={size} viewBox="0 0 100 100">
            {/* Head */}
            <Circle cx="50" cy="25" r="12" stroke={color} strokeWidth={strokeWidth} fill="none" />
            {/* Body */}
            <Line x1="50" y1="37" x2="50" y2="60" stroke={color} strokeWidth={strokeWidth} />
            {/* Arms shrugging */}
            <Path d="M 50 45 L 35 40" stroke={color} strokeWidth={strokeWidth} fill="none" />
            <Path d="M 50 45 L 65 40" stroke={color} strokeWidth={strokeWidth} fill="none" />
            {/* Legs */}
            <Path d="M 50 60 L 40 85" stroke={color} strokeWidth={strokeWidth} fill="none" />
            <Path d="M 50 60 L 60 85" stroke={color} strokeWidth={strokeWidth} fill="none" />
            {/* Question mark */}
            <Path d="M 65 15 Q 68 10 65 5 Q 62 3 60 5 L 60 8" stroke={color} strokeWidth={strokeWidth} fill="none" />
            <Circle cx="60" cy="12" r="1" stroke={color} strokeWidth={strokeWidth} fill={color} />
          </Svg>
        );

      default:
        return renderPose();
    }
  };

  return (
    <View style={[styles.container, { width: size, height: size }]}>
      {renderPose()}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
