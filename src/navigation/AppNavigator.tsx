import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import TabNavigator from './TabNavigator';
import ConceptScreen from '../screens/ConceptScreen';
import ActivityScreen from '../screens/ActivityScreen';
import { theme } from '../config/theme';

export type RootStackParamList = {
  Main: undefined;
  Concept: { conceptId: string };
  Activity: { activityId: string; conceptId: string };
};

const Stack = createStackNavigator<RootStackParamList>();

function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        id="root-stack"
        screenOptions={{
          headerStyle: {
            backgroundColor: theme.colors.background || '#F8FAFC',
            elevation: 0,
            shadowOpacity: 0,
            borderBottomWidth: 0,
          },
          headerTintColor: theme.colors.primary,
          headerTitleStyle: {
            fontSize: 24,
            fontWeight: 'bold' as const,
          },
          cardStyle: {
            backgroundColor: theme.colors.background || '#F8FAFC',
          },
        }}
      >
        <Stack.Screen
          name="Main"
          component={TabNavigator}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Concept"
          component={ConceptScreen}
          options={{ title: 'Learn' }}
        />
        <Stack.Screen
          name="Activity"
          component={ActivityScreen}
          options={{ title: 'Activity' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;
