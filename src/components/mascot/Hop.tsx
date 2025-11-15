// // src/components/mascot/Hop.tsx
// import React from 'react';
// import { View, Image, StyleSheet, Text } from 'react-native';
// import Animated, {
//   useAnimatedStyle,
//   withRepeat,
//   withSpring,
//   withSequence,
//   withTiming,
// } from 'react-native-reanimated';
// import { BRANDING } from '../../config/branding';

// type HopEmotion =
//   | 'happy'
//   | 'celebrating'
//   | 'thinking'
//   | 'curious'
//   | 'excited'
//   | 'encouraging'
//   | 'confused'
//   | 'sleeping'
//   | 'teaching'
//   | 'coding'
//   | 'waving'
//   | 'listening'
//   | 'sad'
//   | 'cheering'
//   | 'loving'
//   | 'proud';

// interface HopProps {
//   emotion: HopEmotion;
//   size?: number;
//   animated?: boolean;
//   message?: string;
//   showName?: boolean;
// }

// export default function Hop({
//   emotion,
//   size = 120,
//   animated = true,
//   message,
//   showName = false,
// }: HopProps) {
//   // Map emotions to assets
//   const hopAssets = {
//     happy: require('../../../assets/mascot/hop-happy.png'),
//     celebrating: require('../../../assets/mascot/hop-celebrating.png'),
//     thinking: require('../../../assets/mascot/hop-thinking.png'),
//     curious: require('../../../assets/mascot/hop-curious.png'),
//     excited: require('../../../assets/mascot/hop-excited.png'),
//     encouraging: require('../../../assets/mascot/hop-encouraging.png'),
//     confused: require('../../../assets/mascot/hop-confused.png'),
//     sleeping: require('../../../assets/mascot/hop-sleeping.png'),
//     teaching: require('../../../assets/mascot/hop-teaching.png'),
//     coding: require('../../../assets/mascot/hop-coding.png'),
//     waving: require('../../../assets/mascot/hop-waving.png'),
//     listening: require('../../../assets/mascot/hop-listening.png'),
//     sad: require('../../../assets/mascot/hop-sad.png'),
//     cheering: require('../../../assets/mascot/hop-cheering.png'),
//     loving: require('../../../assets/mascot/hop-loving.png'),
//     proud: require('../../../assets/mascot/hop-proud.png'),
//   };

//   // Animation logic based on emotion
//   const animatedStyle = useAnimatedStyle(() => {
//     if (!animated) return {};

//     switch (emotion) {
//       case 'celebrating':
//       case 'excited':
//       case 'cheering':
//         // Bounce animation
//         return {
//           transform: [
//             {
//               translateY: withRepeat(
//                 withSequence(
//                   withSpring(-20, { damping: 3, stiffness: 120 }),
//                   withSpring(0, { damping: 3, stiffness: 120 })
//                 ),
//                 -1,
//                 false
//               ),
//             },
//           ],
//         };

//       case 'waving':
//         // Gentle sway
//         return {
//           transform: [
//             {
//               rotate: withRepeat(
//                 withSequence(
//                   withTiming('-8deg', { duration: 600 }),
//                   withTiming('8deg', { duration: 600 })
//                 ),
//                 -1,
//                 true
//               ),
//             },
//           ],
//         };

//       case 'thinking':
//         // Head tilt
//         return {
//           transform: [
//             { rotate: withSpring('-12deg') },
//           ],
//         };

//       case 'curious':
//         // Lean forward slightly
//         return {
//           transform: [
//             { scale: withSpring(1.05) },
//           ],
//         };

//       case 'sleeping':
//         // Gentle breathing
//         return {
//           transform: [
//             {
//               scale: withRepeat(
//                 withSequence(
//                   withTiming(1.0, { duration: 1500 }),
//                   withTiming(1.03, { duration: 1500 })
//                 ),
//                 -1,
//                 true
//               ),
//             },
//           ],
//         };

//       default:
//         return {};
//     }
//   });

//   return (
//     <View style={styles.container}>
//       {/* Speech bubble (optional) */}
//       {message && (
//         <View style={styles.speechBubble}>
//           <Text style={styles.speechText}>{message}</Text>
//           <View style={styles.speechTail} />
//         </View>
//       )}

//       {/* Hop character */}
//       <Animated.View style={[animatedStyle, { width: size, height: size }]}>
//         <Image
//           source={hopAssets[emotion]}
//           style={{ width: size, height: size }}
//           resizeMode="contain"
//         />
//       </Animated.View>

//       {/* Name badge (optional) */}
//       {showName && (
//         <View style={styles.nameBadge}>
//           <Text style={styles.nameText}>Hop 🐰</Text>
//         </View>
//       )}
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   speechBubble: {
//     backgroundColor: '#FFFFFF',
//     borderRadius: 16,
//     padding: 14,
//     marginBottom: 12,
//     borderWidth: 2.5,
//     borderColor: BRANDING.colors.hopEarPink,
//     maxWidth: 240,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.1,
//     shadowRadius: 4,
//     elevation: 3,
//   },
//   speechText: {
//     fontFamily: BRANDING.fonts.body,
//     fontSize: 14,
//     color: BRANDING.colors.textPrimary,
//     textAlign: 'center',
//     lineHeight: 20,
//   },
//   speechTail: {
//     position: 'absolute',
//     bottom: -8,
//     left: '50%',
//     marginLeft: -8,
//     width: 0,
//     height: 0,
//     borderLeftWidth: 8,
//     borderRightWidth: 8,
//     borderTopWidth: 10,
//     borderLeftColor: 'transparent',
//     borderRightColor: 'transparent',
//     borderTopColor: BRANDING.colors.hopEarPink,
//   },
//   nameBadge: {
//     marginTop: 8,
//     paddingHorizontal: 12,
//     paddingVertical: 4,
//     backgroundColor: BRANDING.colors.cardBg,
//     borderRadius: 12,
//     borderWidth: 1,
//     borderColor: BRANDING.colors.border,
//   },
//   nameText: {
//     fontFamily: BRANDING.fonts.ui,
//     fontSize: 12,
//     color: BRANDING.colors.textSecondary,
//   },
// });


import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Animated, { useAnimatedStyle, withSpring, withRepeat, withSequence } from 'react-native-reanimated';
import { BRANDING } from '../../config/branding';

type HopEmotion =
| 'happy' | 'celebrating' | 'thinking' | 'curious' | 'excited'
| 'encouraging' | 'confused' | 'sleeping' | 'teaching' | 'coding'
| 'waving' | 'listening' | 'sad' | 'cheering' | 'loving' | 'proud';

interface HopProps {
emotion: HopEmotion;
size?: number;
message?: string;
animated?: boolean;
}

export default function Hop({
emotion,
size = 120,
message,
animated = true
}: HopProps) {
// Emoji mapping (placeholder for actual illustrations)
const getEmoji = (): string => {
const emojiMap: Record<HopEmotion, string> = {
happy: '🐰😊',
celebrating: '🐰🎉',
thinking: '🐰🤔',
curious: '🐰👀',
excited: '🐰✨',
encouraging: '🐰👍',
confused: '🐰❓',
sleeping: '🐰😴',
teaching: '🐰📚',
coding: '🐰💻',
waving: '🐰👋',
listening: '🐰👂',
sad: '🐰😢',
cheering: '🐰📣',
loving: '🐰❤️',
proud: '🐰🏆',
};
return emojiMap[emotion];
};

const animatedStyle = useAnimatedStyle(() => {
if (!animated) return {};


if (emotion === 'celebrating' || emotion === 'excited') {
  return {
    transform: [
      {
        translateY: withRepeat(
          withSequence(
            withSpring(-15),
            withSpring(0)
          ),
          -1,
          false
        ),
      },
    ],
  };
}

return {};
});

return (
<View style={styles.container}>
{message && (
<View style={styles.speechBubble}>
<Text style={styles.message}>{message}</Text>
</View>
)}
<Animated.View style={animatedStyle}>
<Text style={[styles.emoji, { fontSize: size }]}>
{getEmoji()}
</Text>
</Animated.View>
</View>
);
}

const styles = StyleSheet.create({
container: {
alignItems: 'center',
marginVertical: 24,
},
speechBubble: {
backgroundColor: '#FFFFFF',
borderRadius: 16,
padding: 16,
marginBottom: 16,
borderWidth: 2,
borderColor: BRANDING.colors.primary,
maxWidth: 280,
shadowColor: '#000',
shadowOffset: { width: 0, height: 2 },
shadowOpacity: 0.1,
shadowRadius: 4,
elevation: 3,
},
message: {
fontSize: 14,
color: BRANDING.colors.textPrimary,
textAlign: 'center',
lineHeight: 20,
},
emoji: {
fontSize: 120,
},
});