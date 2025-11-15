import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Hop from '../../components/mascot/Hop';
import Button from '../../components/common/Button';
import ProgressBar from '../../components/common/ProgressBar';
import { useOnboardingStore } from '../../stores/onboardingStore';
import { supabase } from '../../config/supabase';

export default function CommunityIntroScreen({ navigation }) {
  const [groups, setGroups] = useState([]);
  const [selected, setSelected] = useState<string[]>([]);
  const updateData = useOnboardingStore((state) => state.updateData);
  const data = useOnboardingStore((state) => state.data);

  useEffect(() => {
    loadGroups();
  }, []);

  const loadGroups = async () => {
    const { data: groupsData } = await supabase
      .from('study_groups')
      .select('*')
      .eq('is_public', true)
      .or(`class_level.eq.${data.classLevel},proficiency_level.eq.${data.proficiencyLevel}`)
      .limit(5);

    setGroups(groupsData || []);
  };

  const toggleGroup = (id: string) => {
    setSelected(prev => 
      prev.includes(id) ? prev.filter(g => g !== id) : [...prev, id]
    );
  };

  const handleContinue = () => {
    updateData({ selectedGroups: selected });
    navigation.navigate('NotificationPermission');
  };

  const handleSkip = () => {
    updateData({ selectedGroups: [] });
    navigation.navigate('NotificationPermission');
  };

  return (
    <SafeAreaView style={styles.container}>
      <ProgressBar current={8} total={12} />
      <View style={styles.content}>
        <Hop emotion="happy" message="Friends make learning 3x more fun! 🌟" />
        <Text style={styles.title}>Learn together, grow faster!</Text>
        <Text style={styles.subtitle}>Join study groups (optional)</Text>
        
        <FlatList
          data={groups}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={[styles.card, selected.includes(item.id) && styles.cardSelected]}
              onPress={() => toggleGroup(item.id)}
            >
              <Text style={styles.cardTitle}>📚 {item.name}</Text>
              <Text style={styles.cardDesc}>{item.description}</Text>
              <Text style={styles.members}>{item.member_count} members</Text>
            </TouchableOpacity>
          )}
        />
      </View>
      <View style={styles.footer}>
        <Button title={`Join ${selected.length} Groups`} onPress={handleContinue} />
        <TouchableOpacity onPress={handleSkip} style={styles.skipBtn}>
          <Text style={styles.skipText}>Skip for Now</Text>
        </TouchableOpacity>
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
    borderWidth: 2,
    borderColor: '#E5E7EB',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
  },
  cardSelected: { borderColor: '#58CC02', backgroundColor: '#F0FFF4' },
  cardTitle: { fontSize: 16, fontWeight: '600', marginBottom: 4 },
  cardDesc: { fontSize: 13, color: '#6B7280', marginBottom: 4 },
  members: { fontSize: 12, color: '#6B7280' },
  footer: { padding: 24 },
  skipBtn: { marginTop: 12, alignItems: 'center' },
  skipText: { color: '#6B7280', fontSize: 14 },
});
