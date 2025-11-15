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
    
    // Set timeout to prevent infinite loading
    const timeout = setTimeout(() => {
      console.log('Supabase check timed out, proceeding to onboarding');
      setLoading(false);
    }, 3000); // 3 second timeout
    
    return () => clearTimeout(timeout);
  }, []);

  const checkOnboardingStatus = async () => {
    try {
      console.log('Checking Supabase auth...');
      
      // Check if user is logged in
      const { data: { user }, error } = await supabase.auth.getUser();
      
      if (error) {
        console.log('Supabase auth error:', error.message);
        setLoading(false);
        return;
      }
      
      console.log('User:', user ? 'Found' : 'Not found');
      setUser(user);

      if (user) {
        // Check if onboarding is completed
        const { data: profile, error: profileError } = await supabase
          .from('user_profiles')
          .select('onboarding_completed')
          .eq('id', user.id)
          .single();

        if (profileError) {
          console.log('Profile check error:', profileError.message);
        }

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
        <Text style={{ marginTop: 16, color: '#6B7280', fontSize: 16 }}>Loading AILO...</Text>
        <Text style={{ marginTop: 8, color: '#9CA3AF', fontSize: 12 }}>Checking authentication</Text>
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
                <Text style={{ fontSize: 28, fontWeight: 'bold', marginBottom: 8 }}>🎉 Welcome to AILO!</Text>
                <Text style={{ fontSize: 16, color: '#6B7280' }}>Onboarding completed successfully</Text>
                <Text style={{ fontSize: 14, color: '#9CA3AF', marginTop: 16 }}>Main app coming soon...</Text>
              </View>
            )}
          </Stack.Screen>
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
}
