import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Hop from '../../components/mascot/Hop';
import Button from '../../components/common/Button';
import ProgressBar from '../../components/common/ProgressBar';
import { useOnboardingStore } from '../../stores/onboardingStore';

const languages = [
  { code: 'en', name: 'English', emoji: '🇬🇧' },
  { code: 'hi', name: 'हिन्दी', emoji: '🇮🇳' },
  { code: 'mr', name: 'मराठी', emoji: '🇮🇳' },
  { code: 'ta', name: 'தமிழ்', emoji: '🇮🇳' },
  { code: 'te', name: 'తెలుగు', emoji: '🇮🇳' },
  { code: 'kn', name: 'ಕನ್ನಡ', emoji: '🇮🇳' },
  { code: 'gu', name: 'ગુજરાતી', emoji: '🇮🇳' },
  { code: 'bn', name: 'বাংলা', emoji: '🇮🇳' },
];

export default function LanguageSelectionScreen({ navigation }) {
  const [selected, setSelected] = useState('en');
  const updateData = useOnboardingStore((state) => state.updateData);

  const handleContinue = () => {
    updateData({ preferredLanguage: selected });
    navigation.navigate('ProfileSetup');
  };

  return (
    <SafeAreaView style={styles.container}>
      <ProgressBar current={10} total={12} />
      <View style={styles.content}>
        <Hop emotion="happy" message="I speak all these languages! 🌏" />
        <Text style={styles.title}>Choose your language</Text>
        <Text style={styles.subtitle}>Content will be shown in:</Text>
        
        <View style={styles.grid}>
          {languages.map(({ code, name, emoji }) => (
            <TouchableOpacity
              key={code}
              style={[styles.langCard, selected === code && styles.langCardSelected]}
              onPress={() => setSelected(code)}
            >
              <Text style={styles.emoji}>{emoji}</Text>
              <Text style={styles.langName}>{name}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
      <View style={styles.footer}>
        <Button title="Continue" onPress={handleContinue} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FFF' },
  content: { flex: 1, paddingHorizontal: 24 },
  title: { fontSize: 24, fontWeight: 'bold', textAlign: 'center', marginBottom: 8 },
  subtitle: { fontSize: 14, color: '#6B7280', textAlign: 'center', marginBottom: 20 },
  grid: { flexDirection: 'row', flexWrap: 'wrap', gap: 12, justifyContent: 'center' },
  langCard: {
    width: '30%',
    borderWidth: 2,
    borderColor: '#E5E7EB',
    borderRadius: 12,
    padding: 16,
    alignItems: 'center',
  },
  langCardSelected: { borderColor: '#58CC02', backgroundColor: '#F0FFF4' },
  emoji: { fontSize: 32, marginBottom: 8 },
  langName: { fontSize: 13, textAlign: 'center' },
  footer: { padding: 24 },
});
