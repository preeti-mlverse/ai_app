import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Hop from '../../components/mascot/Hop';
import Button from '../../components/common/Button';
import ProgressBar from '../../components/common/ProgressBar';
import { useOnboardingStore } from '../../stores/onboardingStore';

const goals = [
  { minutes: 3, title: '🐰 Casual', desc: '1 microlesson/day' },
  { minutes: 10, title: '🎯 Regular', desc: '2-3 microlessons/day', recommended: true },
  { minutes: 15, title: '🔥 Serious', desc: '3-4 microlessons/day' },
  { minutes: 30, title: '⚡ Intense', desc: '6+ microlessons/day' },
];

export default function DailyGoalScreen({ navigation }) {
  const [selected, setSelected] = useState(10);
  const updateData = useOnboardingStore((state) => state.updateData);

  const handleContinue = () => {
    updateData({ dailyGoalMinutes: selected });
    navigation.navigate('CommunityIntro');
  };

  return (
    <SafeAreaView style={styles.container}>
      <ProgressBar current={7} total={12} />
      <View style={styles.content}>
        <Hop emotion="happy" message="Small hops daily beat big jumps once in a while! 🐰" />
        <Text style={styles.title}>What's your daily goal?</Text>
        <Text style={styles.subtitle}>Start small, build consistency!</Text>
        
        {goals.map(({ minutes, title, desc, recommended }) => (
          <TouchableOpacity
            key={minutes}
            style={[styles.card, selected === minutes && styles.cardSelected]}
            onPress={() => setSelected(minutes)}
          >
            <View style={styles.cardContent}>
              <Text style={styles.cardTitle}>{title}</Text>
              <Text style={styles.cardDesc}>{desc}</Text>
              {recommended && <Text style={styles.badge}>Recommended</Text>}
            </View>
            <Text style={styles.time}>{minutes} min</Text>
          </TouchableOpacity>
        ))}
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
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 2,
    borderColor: '#E5E7EB',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
  },
  cardSelected: { borderColor: '#58CC02', backgroundColor: '#F0FFF4' },
  cardContent: { flex: 1 },
  cardTitle: { fontSize: 16, fontWeight: '600', marginBottom: 2 },
  cardDesc: { fontSize: 13, color: '#6B7280' },
  badge: { fontSize: 11, color: '#58CC02', marginTop: 4, fontWeight: '600' },
  time: { fontSize: 18, fontWeight: 'bold', color: '#6B7280' },
  footer: { padding: 24 },
});
