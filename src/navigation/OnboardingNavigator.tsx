// @ts-nocheck
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

// Import all screens
import WelcomeScreen from '../screens/onboarding/WelcomeScreen';
import AgeGateScreen from '../screens/onboarding/AgeGateScreen';
import GoalSelectionScreen from '../screens/onboarding/GoalSelectionScreen';
import ClassSelectionScreen from '../screens/onboarding/ClassSelectionScreen';
import ProficiencyCheckScreen from '../screens/onboarding/ProficiencyCheckScreen';
import SignupScreen from '../screens/onboarding/SignupScreen';
import DailyGoalScreen from '../screens/onboarding/DailyGoalScreen';
import CommunityIntroScreen from '../screens/onboarding/CommunityIntroScreen';
import NotificationPermissionScreen from '../screens/onboarding/NotificationPermissionScreen';
import LanguageSelectionScreen from '../screens/onboarding/LanguageSelectionScreen';
import ProfileSetupScreen from '../screens/onboarding/ProfileSetupScreen';
import CompletionScreen from '../screens/onboarding/CompletionScreen';

const Stack = createStackNavigator();

export default function OnboardingNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="Welcome"
      screenOptions={{
        headerShown: false,
        cardStyle: { backgroundColor: '#FFFFFF' },
      }}
    >
      <Stack.Screen name="Welcome" component={WelcomeScreen} />
      <Stack.Screen name="AgeGate" component={AgeGateScreen} />
      <Stack.Screen name="GoalSelection" component={GoalSelectionScreen} />
      <Stack.Screen name="ClassSelection" component={ClassSelectionScreen} />
      <Stack.Screen name="ProficiencyCheck" component={ProficiencyCheckScreen} />
      <Stack.Screen name="Signup" component={SignupScreen} />
      <Stack.Screen name="DailyGoal" component={DailyGoalScreen} />
      <Stack.Screen name="CommunityIntro" component={CommunityIntroScreen} />
      <Stack.Screen name="NotificationPermission" component={NotificationPermissionScreen} />
      <Stack.Screen name="LanguageSelection" component={LanguageSelectionScreen} />
      <Stack.Screen name="ProfileSetup" component={ProfileSetupScreen} />
      <Stack.Screen name="Completion" component={CompletionScreen} />
    </Stack.Navigator>
  );
}
