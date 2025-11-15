import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Hop from '../../components/mascot/Hop';
import Button from '../../components/common/Button';
import ProgressBar from '../../components/common/ProgressBar';
import { useOnboardingStore } from '../../stores/onboardingStore';

const levels = [
  { level: 1, emoji: '🌱', title: 'Total Beginner', desc: '"What even is AI?"' },
  { level: 2, emoji: '📚', title: 'I Know Basics', desc: '"Can explain to a friend"' },
  { level: 3, emoji: '💡', title: 'Understand Concepts', desc: '"ML, algorithms, data"' },
  { level: 4, emoji: '🧠', title: 'Coded in Python/AI', desc: '"Done projects"' },
  { level: 5, emoji: '🚀', title: 'Advanced', desc: '"Just need exam prep"' },
];

export default function ProficiencyCheckScreen({ navigation }) {
  const [selected, setSelected] = useState<number | null>(null);
  const updateData = useOnboardingStore((state) => state.updateData);

  const handleContinue = () => {
    updateData({ proficiencyLevel: selected });
    navigation.navigate('Signup');
  };

  return (
    <SafeAreaView style={styles.container}>
      <ProgressBar current={5} total={12} />
      <View style={styles.content}>
        <Hop emotion="encouraging" message="No judgment! This helps me teach you better 🌟" />
        <Text style={styles.title}>How much AI do you know?</Text>
        <Text style={styles.subtitle}>Be honest - I'll match you to the right level!</Text>
        
        {levels.map(({ level, emoji, title, desc }) => (
          <TouchableOpacity
            key={level}
            style={[styles.card, selected === level && styles.cardSelected]}
            onPress={() => setSelected(level)}
          >
            <Text style={styles.emoji}>{emoji}</Text>
            <View style={styles.cardContent}>
              <Text style={styles.cardTitle}>{title}</Text>
              <Text style={styles.cardDesc}>{desc}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>
      <View style={styles.footer}>
        <Button title="Continue" onPress={handleContinue} disabled={selected === null} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FFF' },
  content: { flex: 1, paddingHorizontal: 24 },
  title: { fontSize: 24, fontWeight: 'bold', textAlign: 'center', marginBottom: 8 },
  subtitle: { fontSize: 14, color: '#6B7280', textAlign: 'center', marginBottom: 20 },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#E5E7EB',
    borderRadius: 12,
    padding: 12,
    marginBottom: 12,
  },
  cardSelected: { borderColor: '#58CC02', backgroundColor: '#F0FFF4' },
  emoji: { fontSize: 32, marginRight: 12 },
  cardContent: { flex: 1 },
  cardTitle: { fontSize: 16, fontWeight: '600', marginBottom: 2 },
  cardDesc: { fontSize: 13, color: '#6B7280' },
  footer: { padding: 24 },
});