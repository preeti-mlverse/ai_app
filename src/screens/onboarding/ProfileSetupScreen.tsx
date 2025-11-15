import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Switch } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Hop from '../../components/mascot/Hop';
import Button from '../../components/common/Button';
import ProgressBar from '../../components/common/ProgressBar';
import { useOnboardingStore } from '../../stores/onboardingStore';

export default function ProfileSetupScreen({ navigation }) {
  const [bio, setBio] = useState('');
  const [isPublic, setIsPublic] = useState(false);
  const updateData = useOnboardingStore((state) => state.updateData);

  const handleContinue = () => {
    updateData({ bio, profilePublic: isPublic });
    navigation.navigate('Completion');
  };

  const handleSkip = () => {
    updateData({ bio: '', profilePublic: false });
    navigation.navigate('Completion');
  };

  return (
    <SafeAreaView style={styles.container}>
      <ProgressBar current={11} total={12} />
      <View style={styles.content}>
        <Hop emotion="happy" message="Tell others a bit about yourself!" />
        <Text style={styles.title}>Create your profile</Text>
        <Text style={styles.subtitle}>Optional - you can skip this</Text>
        
        <Text style={styles.label}>Bio (100 characters)</Text>
        <TextInput
          style={styles.textarea}
          placeholder='e.g., "Class 10 • AI enthusiast • Future data scientist"'
          value={bio}
          onChangeText={setBio}
          maxLength={100}
          multiline
          numberOfLines={3}
        />
        <Text style={styles.charCount}>{bio.length}/100</Text>
        
        <View style={styles.switchRow}>
          <View>
            <Text style={styles.switchLabel}>Public Profile</Text>
            <Text style={styles.switchDesc}>Others can see your progress</Text>
          </View>
          <Switch value={isPublic} onValueChange={setIsPublic} />
        </View>
      </View>
      <View style={styles.footer}>
        <Button title="Save & Continue" onPress={handleContinue} />
        <Button title="Skip for Now" onPress={handleSkip} variant="secondary" />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FFF' },
  content: { flex: 1, paddingHorizontal: 24, paddingTop: 20 },
  title: { fontSize: 24, fontWeight: 'bold', textAlign: 'center', marginBottom: 8 },
  subtitle: { fontSize: 14, color: '#6B7280', textAlign: 'center', marginBottom: 24 },
  label: { fontSize: 14, fontWeight: '600', marginBottom: 8, color: '#1F2937' },
  textarea: {
    borderWidth: 2,
    borderColor: '#E5E7EB',
    borderRadius: 12,
    padding: 16,
    fontSize: 14,
    minHeight: 80,
    textAlignVertical: 'top',
  },
  charCount: { fontSize: 12, color: '#6B7280', textAlign: 'right', marginTop: 4, marginBottom: 20 },
  switchRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 16,
    borderTopWidth: 1,
    borderTopColor: '#E5E7EB',
  },
  switchLabel: { fontSize: 16, fontWeight: '600', marginBottom: 4 },
  switchDesc: { fontSize: 13, color: '#6B7280' },
  footer: { padding: 24, gap: 12 },
});
