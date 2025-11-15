import React from 'react';
import { TouchableOpacity, Text, StyleSheet, ActivityIndicator } from 'react-native';
import { BRANDING } from '../../config/branding';

interface ButtonProps {
title: string;
onPress: () => void;
disabled?: boolean;
loading?: boolean;
variant?: 'primary' | 'secondary';
}

export default function Button({ title, onPress, disabled, loading, variant = 'primary' }: ButtonProps) {
return (
<TouchableOpacity
style={[
styles.button,
variant === 'primary' && styles.primary,
variant === 'secondary' && styles.secondary,
disabled && styles.disabled,
]}
onPress={onPress}
disabled={disabled || loading}
>
{loading ? (
<ActivityIndicator color="#FFF" />
) : (
<Text style={styles.text}>{title}</Text>
)}
</TouchableOpacity>
);
}

const styles = StyleSheet.create({
button: {
paddingVertical: 16,
paddingHorizontal: 32,
borderRadius: 12,
alignItems: 'center',
minHeight: 56,
},
primary: { backgroundColor: BRANDING.colors.primary },
secondary: { backgroundColor: BRANDING.colors.secondary },
disabled: { opacity: 0.5 },
text: { color: '#FFF', fontSize: 16, fontWeight: '600' },
});