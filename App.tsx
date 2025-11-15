// @ts-nocheck
import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { View, Text, ActivityIndicator } from 'react-native';
import OnboardingNavigator from './src/navigation/OnboardingNavigator';
import { supabase } from './src/config/supabase';

const Stack = createStackNavigator();

export default function App() {
  const [loading, setLoading] = useState(true);
  const [isOnboarded, setIsOnboarded] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    checkOnboardingStatus();
  }, []);

  const checkOnboardingStatus = async () => {
    try {
      const { data: { user } } = await supabase.auth.getUser();
      setUser(user);

      if (user) {
        const { data: profile } = await supabase
          .from('user_profiles')
          .select('onboarding_completed')
          .eq('id', user.id)
          .single();

        setIsOnboarded(profile?.onboarding_completed || false);
      }
    } catch (error) {
      console.error('Error checking onboarding:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#FFFFFF' }}>
        <ActivityIndicator size="large" color="#FF6B9D" />
        <Text style={{ marginTop: 16, color: '#6B7280' }}>Loading...</Text>
      </View>
    );
  }

  return (
    <NavigationContainer>
      {!user || !isOnboarded ? (
        <OnboardingNavigator />
      ) : (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="MainApp">
            {() => (
              <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#FFFFFF' }}>
                <Text style={{ fontSize: 24, fontWeight: 'bold' }}>🎉 Main App Coming Soon!</Text>
                <Text style={{ marginTop: 8, color: '#6B7280' }}>Onboarding completed successfully</Text>
              </View>
            )}
          </Stack.Screen>
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
}
