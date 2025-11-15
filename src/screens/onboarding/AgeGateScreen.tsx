import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Hop from '../../components/mascot/Hop';
import Button from '../../components/common/Button';
import ProgressBar from '../../components/common/ProgressBar';
import { useOnboardingStore } from '../../stores/onboardingStore';

export default function AgeGateScreen({ navigation }) {
const [day, setDay] = useState('');
const [month, setMonth] = useState('');
const [year, setYear] = useState('');
const updateData = useOnboardingStore((state) => state.updateData);

const handleContinue = () => {
const birthYear = parseInt(year);
const currentYear = new Date().getFullYear();
const age = currentYear - birthYear;


if (age < 13) {
  Alert.alert(
    "Sorry! 😢",
    "AILO is for learners 13+. Come back when you're older!",
    [{ text: "OK" }]
  );
  return;
}

updateData({ age });
navigation.navigate('GoalSelection');
};

const isValid = day.length === 2 && month.length === 2 && year.length === 4;

return (
<SafeAreaView style={styles.container}>
<ProgressBar current={2} total={12} />
<View style={styles.content}>
<Hop emotion="thinking" message="Just a quick check!" />
<Text style={styles.title}>How old are you?</Text>
<Text style={styles.subtitle}>We need to verify you're 13 or older</Text>
    <View style={styles.dateInputs}>
      <TextInput
        style={styles.input}
        placeholder="DD"
        keyboardType="numeric"
        maxLength={2}
        value={day}
        onChangeText={setDay}
      />
      <Text style={styles.slash}>/</Text>
      <TextInput
        style={styles.input}
        placeholder="MM"
        keyboardType="numeric"
        maxLength={2}
        value={month}
        onChangeText={setMonth}
      />
      <Text style={styles.slash}>/</Text>
      <TextInput
        style={styles.inputYear}
        placeholder="YYYY"
        keyboardType="numeric"
        maxLength={4}
        value={year}
        onChangeText={setYear}
      />
    </View>
  </View>
  <View style={styles.footer}>
    <Button title="Continue" onPress={handleContinue} disabled={!isValid} />
  </View>
</SafeAreaView>
);
}

const styles = StyleSheet.create({
container: { flex: 1, backgroundColor: '#FFF' },
content: { flex: 1, paddingHorizontal: 24, justifyContent: 'center' },
title: { fontSize: 28, fontWeight: 'bold', textAlign: 'center', marginBottom: 8 },
subtitle: { fontSize: 14, color: '#6B7280', textAlign: 'center', marginBottom: 32 },
dateInputs: { flexDirection: 'row', justifyContent: 'center', alignItems: 'center' },
input: {
borderWidth: 2,
borderColor: '#E5E7EB',
borderRadius: 8,
padding: 16,
fontSize: 18,
width: 60,
textAlign: 'center',
},
inputYear: {
borderWidth: 2,
borderColor: '#E5E7EB',
borderRadius: 8,
padding: 16,
fontSize: 18,
width: 100,
textAlign: 'center',
},
slash: { fontSize: 24, marginHorizontal: 8, color: '#6B7280' },
footer: { padding: 24 },
});