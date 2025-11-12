// src/config/theme.ts
// Design System: Friendly, playful, vibrant EdTech style for teens (13-18)

export const colors = {
  // Primary Colors - More vibrant
  primary: '#6366F1',        // Vibrant indigo (modern, energetic)
  primaryLight: '#818CF8',
  primaryDark: '#4F46E5',
  
  // Secondary Colors - Warm & inviting
  secondary: '#F59E0B',      // Warm amber/orange
  secondaryLight: '#FBBF24',
  secondaryDark: '#D97706',
  
  // Accent Colors - Playful
  accent: '#EC4899',         // Pink accent (fun, engaging)
  accentLight: '#F472B6',
  accentDark: '#DB2777',
  
  // Background
  background: '#F8FAFC',     // Soft blue-gray
  card: '#FFFFFF',
  
  // Text
  textPrimary: '#1E293B',
  textSecondary: '#64748B',
  textTertiary: '#94A3B8',
  
  // Status Colors
  success: '#10B981',        // Green - achievements
  successLight: '#34D399',
  
  error: '#EF4444',          // Red - mistakes
  errorLight: '#F87171',
  
  warning: '#F59E0B',        // Amber - attention
  warningLight: '#FBBF24',
  
  info: '#3B82F6',           // Blue - information
  infoLight: '#60A5FA',
  
  // Special
  xpGold: '#FBBF24',         // XP and rewards (gold)
  streakFire: '#F97316',     // Streak flame (orange)
  badgePurple: '#A855F7',    // Achievement badges (purple)
  celebration: '#10B981',    // Celebration green
  
  // Gradients (for hero sections)
  gradient1: '#6366F1',      // Primary gradient start
  gradient2: '#EC4899',      // Primary gradient end
  gradient3: '#F59E0B',      // Secondary gradient
  
  // Sketch Borders (semi-transparent for hand-drawn effect)
  sketchBorder: 'rgba(30, 41, 59, 0.6)',
  sketchBorderLight: 'rgba(30, 41, 59, 0.2)',
  
  // Shadows
  shadow: 'rgba(0, 0, 0, 0.08)',
  shadowMedium: 'rgba(0, 0, 0, 0.12)',
  shadowStrong: 'rgba(0, 0, 0, 0.16)',
};

export const typography = {
  // Font Families
  body: 'System',            // System default (Inter/SF Pro)
  bodyAlt: 'System',         // Alternative body font
  handDrawn: 'System',       // Will use system until custom fonts loaded
  
  // Font Sizes (scaled for mobile)
  fontSize: {
    xs: 11,
    sm: 12,
    base: 14,
    md: 16,
    lg: 18,
    xl: 20,
    '2xl': 24,
    '3xl': 28,
    '4xl': 32,
  },
  
  // Font Weights
  fontWeight: {
    regular: '400' as const,
    medium: '500' as const,
    semibold: '600' as const,
    bold: '700' as const,
  },
  
  // Line Heights
  lineHeight: {
    tight: 1.2,
    normal: 1.5,
    relaxed: 1.75,
  },
  
  // Letter Spacing
  letterSpacing: {
    tight: -0.5,
    normal: 0,
    wide: 0.5,
  },
};

export const spacing = {
  xs: 4,
  sm: 8,
  md: 12,
  base: 16,
  lg: 20,
  xl: 24,
  '2xl': 32,
  '3xl': 40,
  '4xl': 48,
  '5xl': 64,
};

export const borderRadius = {
  sm: 8,
  md: 12,
  lg: 16,
  xl: 20,
  '2xl': 24,
  '3xl': 32,
  full: 9999,
};

export const shadows = {
  // Soft shadows for cards
  sm: {
    shadowColor: colors.shadow,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 1,
    shadowRadius: 4,
    elevation: 2,
  },
  md: {
    shadowColor: colors.shadowMedium,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 1,
    shadowRadius: 8,
    elevation: 4,
  },
  lg: {
    shadowColor: colors.shadowStrong,
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 1,
    shadowRadius: 12,
    elevation: 6,
  },
};

// Sketch-style stroke configurations
export const sketchStrokes = {
  thin: 1.5,
  regular: 2,
  thick: 2.5,
  
  dashArray: '3, 2',
  dashOffset: 0,
};

// Animation durations
export const animations = {
  fast: 150,
  normal: 250,
  slow: 350,
  xpGain: 600,
  celebration: 1000,
};

// Layout constants
export const layout = {
  screenPadding: spacing.base,
  cardPadding: spacing.base,
  headerHeight: 60,
  tabBarHeight: 65,
  
  contentMaxWidth: 600,
  cardMinHeight: 120,
  
  gridGap: spacing.md,
};

// Character poses (for mascot and avatars)
export const characterPoses = {
  idle: 'idle',
  cheering: 'cheering',
  thinking: 'thinking',
  celebrating: 'celebrating',
  confused: 'confused',
  encouraging: 'encouraging',
  reading: 'reading',
  studying: 'studying',
  achievement: 'achievement',
};

// Text styles (reusable)
export const textStyles = {
  // Headers
  h1: {
    fontSize: typography.fontSize['3xl'],
    fontWeight: typography.fontWeight.bold,
    color: colors.textPrimary,
    lineHeight: typography.lineHeight.tight,
  },
  h2: {
    fontSize: typography.fontSize['2xl'],
    fontWeight: typography.fontWeight.bold,
    color: colors.textPrimary,
    lineHeight: typography.lineHeight.tight,
  },
  h3: {
    fontSize: typography.fontSize.xl,
    fontWeight: typography.fontWeight.semibold,
    color: colors.textPrimary,
    lineHeight: typography.lineHeight.tight,
  },
  
  // Body text
  body: {
    fontSize: typography.fontSize.base,
    fontWeight: typography.fontWeight.regular,
    color: colors.textPrimary,
    lineHeight: typography.lineHeight.normal,
  },
  bodyLarge: {
    fontSize: typography.fontSize.md,
    fontWeight: typography.fontWeight.regular,
    color: colors.textPrimary,
    lineHeight: typography.lineHeight.normal,
  },
  bodySmall: {
    fontSize: typography.fontSize.sm,
    fontWeight: typography.fontWeight.regular,
    color: colors.textSecondary,
    lineHeight: typography.lineHeight.normal,
  },
  
  // Special text
  badge: {
    fontSize: typography.fontSize.lg,
    fontWeight: typography.fontWeight.bold,
    color: colors.primary,
    lineHeight: typography.lineHeight.tight,
  },
  celebration: {
    fontSize: typography.fontSize['2xl'],
    fontWeight: typography.fontWeight.bold,
    color: colors.success,
    lineHeight: typography.lineHeight.tight,
  },
};

// Icon sizes
export const iconSizes = {
  xs: 16,
  sm: 20,
  md: 24,
  lg: 32,
  xl: 40,
  '2xl': 48,
};

// Activity-specific colors (8 gamified activities)
export const activityColors = {
  dragDropMatch: {
    primary: '#6366F1',
    background: '#EEF2FF',
    accent: '#818CF8',
  },
  fillBlanks: {
    primary: '#06B6D4',
    background: '#ECFEFF',
    accent: '#22D3EE',
  },
  sequenceOrder: {
    primary: '#A855F7',
    background: '#FAF5FF',
    accent: '#C084FC',
  },
  trueFalseSwipe: {
    primary: '#10B981',
    background: '#ECFDF5',
    accent: '#34D399',
  },
  tapCorrect: {
    primary: '#F59E0B',
    background: '#FFFBEB',
    accent: '#FBBF24',
  },
  puzzleReveal: {
    primary: '#EC4899',
    background: '#FDF2F8',
    accent: '#F472B6',
  },
  spotDifference: {
    primary: '#EF4444',
    background: '#FEF2F2',
    accent: '#F87171',
  },
  sortingGame: {
    primary: '#6366F1',
    background: '#EEF2FF',
    accent: '#818CF8',
  },
};

// Export comprehensive theme object
export const theme = {
  colors,
  typography,
  spacing,
  borderRadius,
  shadows,
  sketchStrokes,
  animations,
  layout,
  characterPoses,
  textStyles,
  iconSizes,
  activityColors,
};

export type Theme = typeof theme;

export default theme;
