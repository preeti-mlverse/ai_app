import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Hop from '../../components/mascot/Hop';
import Button from '../../components/common/Button';
import ProgressBar from '../../components/common/ProgressBar';
import { useOnboardingStore } from '../../stores/onboardingStore';

export default function ClassSelectionScreen({ navigation }) {
  const [classLevel, setClassLevel] = useState<number | null>(null);
  const [stream, setStream] = useState<'Science' | 'Commerce' | 'Arts' | null>(null);
  const updateData = useOnboardingStore((state) => state.updateData);

  const handleContinue = () => {
    updateData({ classLevel, stream });
    navigation.navigate('ProficiencyCheck');
  };

  const showStreamSelection = classLevel && classLevel >= 11;

  return (
    <SafeAreaView style={styles.container}>
      <ProgressBar current={4} total={12} />
      <View style={styles.content}>
        <Hop emotion="happy" message="I'll tailor lessons to your curriculum!" />
        <Text style={styles.title}>Which class are you in?</Text>
        
        <View style={styles.classes}>
          {[7, 8, 9, 10, 11, 12].map((cls) => (
            <TouchableOpacity
              key={cls}
              style={[styles.classBtn, classLevel === cls && styles.classBtnSelected]}
              onPress={() => setClassLevel(cls)}
            >
              <Text style={[styles.classText, classLevel === cls && styles.classTextSelected]}>
                {cls}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        {showStreamSelection && (
          <>
            <Text style={styles.subtitle}>Choose your stream:</Text>
            <View style={styles.streams}>
              {(['Science', 'Commerce', 'Arts'] as const).map((s) => (
                <TouchableOpacity
                  key={s}
                  style={[styles.streamBtn, stream === s && styles.streamBtnSelected]}
                  onPress={() => setStream(s)}
                >
                  <Text style={[styles.streamText, stream === s && styles.streamTextSelected]}>
                    {s}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </>
        )}
      </View>
      <View style={styles.footer}>
        <Button 
          title="Continue" 
          onPress={handleContinue} 
          disabled={!classLevel || (showStreamSelection && !stream)}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FFF' },
  content: { flex: 1, paddingHorizontal: 24, paddingTop: 20 },
  title: { fontSize: 24, fontWeight: 'bold', textAlign: 'center', marginBottom: 24 },
  subtitle: { fontSize: 18, fontWeight: '600', textAlign: 'center', marginTop: 24, marginBottom: 16 },
  classes: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center', gap: 12 },
  classBtn: {
    width: 80,
    height: 80,
    borderWidth: 2,
    borderColor: '#E5E7EB',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  classBtnSelected: { borderColor: '#58CC02', backgroundColor: '#F0FFF4' },
  classText: { fontSize: 32, fontWeight: 'bold', color: '#6B7280' },
  classTextSelected: { color: '#58CC02' },
  streams: { gap: 12 },
  streamBtn: {
    borderWidth: 2,
    borderColor: '#E5E7EB',
    borderRadius: 12,
    padding: 16,
  },
  streamBtnSelected: { borderColor: '#58CC02', backgroundColor: '#F0FFF4' },
  streamText: { fontSize: 16, fontWeight: '600', textAlign: 'center', color: '#6B7280' },
  streamTextSelected: { color: '#58CC02' },
  footer: { padding: 24 },
});