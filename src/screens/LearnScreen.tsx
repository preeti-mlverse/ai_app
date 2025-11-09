import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { theme } from '../config/theme';

export default function LearnScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Learn Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: { ...theme.textStyles.h2 },
});