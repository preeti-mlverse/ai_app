import React from 'react';
import { View, Text, StyleSheet, Platform } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import * as Notifications from 'expo-notifications';
import Hop from '../../components/mascot/Hop';
import Button from '../../components/common/Button';
import ProgressBar from '../../components/common/ProgressBar';
import { useOnboardingStore } from '../../stores/onboardingStore';

export default function NotificationPermissionScreen({ navigation }) {
  const updateData = useOnboardingStore((state) => state.updateData);

  const handleAllow = async () => {
    const { status } = await Notifications.requestPermissionsAsync();
    updateData({ notificationsEnabled: status === 'granted' });
    navigation.navigate('LanguageSelection');
  };

  const handleSkip = () => {
    updateData({ notificationsEnabled: false });
    navigation.navigate('LanguageSelection');
  };

  return (
    <SafeAreaView style={styles.container}>
      <ProgressBar current={9} total={12} />
      <View style={styles.content}>
        <Hop emotion="happy" message="I promise not to spam! Just gentle nudges 🐰" />
        <Text style={styles.title}>Stay on track with reminders 🔔</Text>
        
        <View style={styles.list}>
          <Text style={styles.item}>• Practice daily (keep streaks!)</Text>
          <Text style={styles.item}>• Answer study group questions</Text>
          <Text style={styles.item}>• Celebrate achievements</Text>
          <Text style={styles.item}>• Join friend challenges</Text>
        </View>
      </View>
      <View style={styles.footer}>
        <Button title="Allow Notifications" onPress={handleAllow} />
        <Button title="Maybe Later" onPress={handleSkip} variant="secondary" />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FFF' },
  content: { flex: 1, paddingHorizontal: 24, justifyContent: 'center' },
  title: { fontSize: 24, fontWeight: 'bold', textAlign: 'center', marginBottom: 24 },
  list: { marginTop: 20 },
  item: { fontSize: 16, marginBottom: 12, color: '#1F2937' },
  footer: { padding: 24, gap: 12 },
});
