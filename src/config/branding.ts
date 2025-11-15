// src/config/branding.ts
export const BRANDING = {
  appName: 'AILO',
  tagline: 'AI Made Easy',
  fullMessage: 'Your AI Learning Companion',
  
  mascot: {
    name: 'Hop',
    species: 'Bunny',
    personality: 'curious, playful, encouraging, smart',
    catchphrase: "Let's hop into AI together!",
    traits: [
      'Quick learner (like a bunny hops fast)',
      'Loves discovering new concepts',
      'Celebrates small wins',
      'Never judges mistakes'
    ]
  },
  
  colors: {
    // Primary palette
    primary: '#FF6B9D',        // Pink (main CTA)
    secondary: '#6C63FF',      // Purple (secondary actions)
    success: '#58CC02',        // Green (achievements)
    accent: '#4ECDC4',         // Teal (highlights)
    
    // Hop's colors
    hopBody: '#FFFEF7',        // Cream white
    hopEarPink: '#FFB6D9',     // Gradient start
    hopEarBlue: '#B6E5FF',     // Gradient end
    hopNose: '#FFB6C1',        // Soft pink
    hopEyes: '#2C5F5D',        // Teal pupils
    
    // UI
    background: '#FFFFFF',
    cardBg: '#F9FAFB',
    border: '#E5E7EB',
    textPrimary: '#1F2937',
    textSecondary: '#6B7280',
  },
  
  fonts: {
    heading: 'Poppins-Bold',
    subheading: 'Poppins-SemiBold',
    body: 'Poppins-Regular',
    ui: 'Inter-Regular',
  },
};
