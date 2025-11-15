import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Hop from '../../components/mascot/Hop';
import Button from '../../components/common/Button';
import ProgressBar from '../../components/common/ProgressBar';
import { useOnboardingStore } from '../../stores/onboardingStore';

type GoalType = 'curriculum' | 'generic' | 'projects';

export default function GoalSelectionScreen({ navigation }) {
  const [selected, setSelected] = useState<GoalType[]>([]);
  const updateData = useOnboardingStore((state) => state.updateData);

  const toggleGoal = (goal: GoalType) => {
    setSelected(prev => 
      prev.includes(goal) ? prev.filter(g => g !== goal) : [...prev, goal]
    );
  };

  const handleContinue = () => {
    updateData({ selectedGoals: selected });
    if (selected.includes('curriculum')) {
      navigation.navigate('ClassSelection');
    } else {
      navigation.navigate('ProficiencyCheck');
    }
  };

  const GoalCard = ({ goal, title, description, locked = false }: any) => (
    <TouchableOpacity
      style={[styles.card, selected.includes(goal) && styles.cardSelected, locked && styles.cardLocked]}
      onPress={() => !locked && toggleGoal(goal)}
      disabled={locked}
    >
      <Text style={styles.cardTitle}>{title}</Text>
      <Text style={styles.cardDesc}>{description}</Text>
      {locked && <Text style={styles.comingSoon}>Coming Soon 🔒</Text>}
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <ProgressBar current={3} total={12} />
      <View style={styles.content}>
        <Hop emotion="happy" message="Choose what excites you!" />
        <Text style={styles.title}>What brings you to AILO?</Text>
        <Text style={styles.subtitle}>Pick 1-3 learning paths</Text>
        
        <GoalCard
          goal="curriculum"
          title="🎓 Curriculum-Led"
          description="Ace CBSE AI exams (Class 7-12)"
        />
        <GoalCard
          goal="generic"
          title="🌍 Generic AI Learning"
          description="Explore AI at your own pace"
        />
        <GoalCard
          goal="projects"
          title="🚀 Real-World Projects"
          description="Build AI apps & portfolio"
          locked
        />
      </View>
      <View style={styles.footer}>
        <Button title="Continue" onPress={handleContinue} disabled={selected.length === 0} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FFF' },
  content: { flex: 1, paddingHorizontal: 24 },
  title: { fontSize: 24, fontWeight: 'bold', textAlign: 'center', marginBottom: 8 },
  subtitle: { fontSize: 14, color: '#6B7280', textAlign: 'center', marginBottom: 24 },
  card: {
    borderWidth: 2,
    borderColor: '#E5E7EB',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
  },
  cardSelected: { borderColor: '#58CC02', backgroundColor: '#F0FFF4' },
  cardLocked: { opacity: 0.5 },
  cardTitle: { fontSize: 18, fontWeight: '600', marginBottom: 4 },
  cardDesc: { fontSize: 14, color: '#6B7280' },
  comingSoon: { fontSize: 12, color: '#6B7280', marginTop: 8 },
  footer: { padding: 24 },
});