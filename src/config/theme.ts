// src/config/theme.ts
// Design System: Friendly, playful, warm sketch-style for teens (13-18)

export const colors = {
  // Primary Colors
  primary: '#3F51B5',      // Main blue - trust & focus
  primaryLight: '#7986CB',
  primaryDark: '#303F9F',
  
  // Secondary Colors
  secondary: '#64B5F6',    // Sky blue - approachable
  secondaryLight: '#90CAF9',
  secondaryDark: '#42A5F5',
  
  // Accent
  accent: '#00BCD4',       // Teal - engagement
  accentLight: '#4DD0E1',
  accentDark: '#0097A7',
  
  // Background
  background: '#F9FAFB',   // Calm, focused
  card: '#FFFFFF',
  
  // Text
  textPrimary: '#212121',
  textSecondary: '#757575',
  textTertiary: '#9E9E9E',
  
  // Status Colors
  success: '#66BB6A',      // Green - achievements
  successLight: '#81C784',
  
  error: '#EF5350',        // Red - mistakes (gentle)
  errorLight: '#E57373',
  
  warning: '#FFCA28',      // Yellow - attention
  warningLight: '#FFD54F',
  
  // Special
  xpGold: '#FFC107',       // XP and rewards
  streakFire: '#FF6F00',   // Streak flame
  badgePurple: '#9C27B0',  // Achievement badges
  
  // Sketch Borders (semi-transparent for hand-drawn effect)
  sketchBorder: 'rgba(33, 33, 33, 0.6)',
  sketchBorderLight: 'rgba(33, 33, 33, 0.3)',
  
  // Shadows
  shadow: 'rgba(0, 0, 0, 0.08)',
  shadowMedium: 'rgba(0, 0, 0, 0.12)',
  shadowStrong: 'rgba(0, 0, 0, 0.16)',
};

export const typography = {
  // Font Families
  body: 'Inter',           // Clean sans for body text
  bodyAlt: 'Poppins',      // Alternative body font
  handDrawn: 'PatrickHand', // Hand-drawn for headlines, badges
  
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
  '2xl': 24,      // Primary radius for cards
  full: 9999,     // Pills, avatars
};

export const shadows = {
  // Soft shadows for cards (sketch-style)
  sm: {
    shadowColor: colors.shadow,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 1,
    shadowRadius: 2,
    elevation: 2,
  },
  md: {
    shadowColor: colors.shadowMedium,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 1,
    shadowRadius: 4,
    elevation: 4,
  },
  lg: {
    shadowColor: colors.shadowStrong,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 1,
    shadowRadius: 6,
    elevation: 6,
  },
};

// Sketch-style stroke configurations
export const sketchStrokes = {
  // Border widths for hand-drawn effect
  thin: 1.5,
  regular: 2,
  thick: 2.5,
  
  // Dash array for sketchy borders (SVG)
  dashArray: '3, 2',  // Short dashes = sketchy
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
  tabBarHeight: 70,
  
  // Content widths
  contentMaxWidth: 600,
  cardMinHeight: 120,
  
  // Grid
  gridGap: spacing.md,
};

// Character poses (for Byte mascot and student avatar)
export const characterPoses = {
  idle: 'idle',
  cheering: 'cheering',
  thinking: 'thinking',
  celebrating: 'celebrating',
  confused: 'confused',
  encouraging: 'encouraging',
};

// Sketch-style text styles (reusable)
export const textStyles = {
  // Headers (use hand-drawn font)
  h1: {
    fontFamily: typography.handDrawn,
    fontSize: typography.fontSize['3xl'],
    fontWeight: typography.fontWeight.bold,
    color: colors.textPrimary,
    lineHeight: typography.lineHeight.tight,
  },
  h2: {
    fontFamily: typography.handDrawn,
    fontSize: typography.fontSize['2xl'],
    fontWeight: typography.fontWeight.bold,
    color: colors.textPrimary,
    lineHeight: typography.lineHeight.tight,
  },
  h3: {
    fontFamily: typography.handDrawn,
    fontSize: typography.fontSize.xl,
    fontWeight: typography.fontWeight.semibold,
    color: colors.textPrimary,
    lineHeight: typography.lineHeight.tight,
  },
  
  // Body text (clean sans)
  body: {
    fontFamily: typography.body,
    fontSize: typography.fontSize.base,
    fontWeight: typography.fontWeight.regular,
    color: colors.textPrimary,
    lineHeight: typography.lineHeight.normal,
  },
  bodyLarge: {
    fontFamily: typography.body,
    fontSize: typography.fontSize.md,
    fontWeight: typography.fontWeight.regular,
    color: colors.textPrimary,
    lineHeight: typography.lineHeight.normal,
  },
  bodySmall: {
    fontFamily: typography.body,
    fontSize: typography.fontSize.sm,
    fontWeight: typography.fontWeight.regular,
    color: colors.textSecondary,
    lineHeight: typography.lineHeight.normal,
  },
  
  // Special text (badges, celebrations)
  badge: {
    fontFamily: typography.handDrawn,
    fontSize: typography.fontSize.lg,
    fontWeight: typography.fontWeight.bold,
    color: colors.primary,
    lineHeight: typography.lineHeight.tight,
  },
  celebration: {
    fontFamily: typography.handDrawn,
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
    primary: '#3F51B5',
    background: '#E8EAF6',
    accent: '#5C6BC0',
  },
  fillBlanks: {
    primary: '#00BCD4',
    background: '#E0F7FA',
    accent: '#26C6DA',
  },
  sequenceOrder: {
    primary: '#9C27B0',
    background: '#F3E5F5',
    accent: '#AB47BC',
  },
  trueFalseSwipe: {
    primary: '#4CAF50',
    background: '#E8F5E9',
    accent: '#66BB6A',
  },
  tapCorrect: {
    primary: '#FF9800',
    background: '#FFF3E0',
    accent: '#FFA726',
  },
  puzzleReveal: {
    primary: '#E91E63',
    background: '#FCE4EC',
    accent: '#EC407A',
  },
  spotDifference: {
    primary: '#F44336',
    background: '#FFEBEE',
    accent: '#EF5350',
  },
  sortingGame: {
    primary: '#607D8B',
    background: '#ECEFF1',
    accent: '#78909C',
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
