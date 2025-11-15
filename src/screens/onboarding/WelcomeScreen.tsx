import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Hop from '../../components/mascot/Hop';
import Button from '../../components/common/Button';
import ProgressBar from '../../components/common/ProgressBar';
import { BRANDING } from '../../config/branding';

export default function WelcomeScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <ProgressBar current={1} total={12} />
      <View style={styles.content}>
        <Hop emotion="excited" message="Hi! I'm Hop, your AI buddy!" />
        <Text style={styles.title}>Welcome to AILO! 🐰</Text>
        <Text style={styles.tagline}>{BRANDING.tagline}</Text>
        <Text style={styles.feature}>✓ CBSE AI curriculum</Text>
        <Text style={styles.feature}>✓ Self-paced learning</Text>
        <Text style={styles.feature}>✓ Real-world projects</Text>
      </View>
      <View style={styles.footer}>
        <Button title="Start Learning" onPress={() => navigation.navigate('AgeGate')} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FFF' },
  content: { flex: 1, paddingHorizontal: 24, justifyContent: 'center' },
  title: { fontSize: 32, fontWeight: 'bold', textAlign: 'center', marginBottom: 8 },
  tagline: { fontSize: 18, color: '#6B7280', textAlign: 'center', marginBottom: 24 },
  feature: { fontSize: 16, textAlign: 'center', marginBottom: 8 },
  footer: { padding: 24 },
});