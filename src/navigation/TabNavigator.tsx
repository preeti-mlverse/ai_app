import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import HomeScreen from '../screens/HomeScreen';
import LearnScreen from '../screens/LearnScreen';
import ClubScreen from '../screens/ClubScreen';
import ProfileScreen from '../screens/ProfileScreen';
import { theme } from '../config/theme';
import { View, StyleSheet } from 'react-native';

export type TabParamList = {
  Home: undefined;
  Learn: undefined;
  Club: undefined;
  Profile: undefined;
};

const Tab = createBottomTabNavigator<TabParamList>();

// Custom tab bar icon with sketch effect
const TabIcon = ({ name, color, focused }: any) => (
  <View style={[styles.iconContainer, focused && styles.iconFocused]}>
    <Ionicons name={name} size={24} color={color} />
  </View>
);

export default function TabNavigator() {
  return (
    <Tab.Navigator
      id="TabNavigator"  // ✅ ADD THIS LINE
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color }) => {
          let iconName: keyof typeof Ionicons.glyphMap;

          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Learn') {
            iconName = focused ? 'book' : 'book-outline';
          } else if (route.name === 'Club') {
            iconName = focused ? 'people' : 'people-outline';
          } else {
            iconName = focused ? 'person' : 'person-outline';
          }

          return <TabIcon name={iconName} color={color} focused={focused} />;
        },
        tabBarActiveTintColor: theme.colors.primary,
        tabBarInactiveTintColor: theme.colors.textSecondary,
        tabBarStyle: {
          backgroundColor: theme.colors.card,
          borderTopWidth: 2,
          borderTopColor: theme.colors.sketchBorderLight,
          height: theme.layout.tabBarHeight,
          paddingBottom: 10,
          paddingTop: 10,
        },
        tabBarLabelStyle: {
          fontFamily: theme.typography.handDrawn,
          fontSize: theme.typography.fontSize.xs,
          fontWeight: theme.typography.fontWeight.semibold,
        },
        headerStyle: {
          backgroundColor: theme.colors.background,
          elevation: 0,
          shadowOpacity: 0,
        },
        headerTitleStyle: {
          fontFamily: theme.typography.handDrawn,
          fontSize: theme.typography.fontSize['2xl'],
          fontWeight: theme.typography.fontWeight.bold,
          color: theme.colors.primary,
        },
      })}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{ title: 'Home' }}
      />
      <Tab.Screen
        name="Learn"
        component={LearnScreen}
        options={{ title: 'Learn' }}
      />
      <Tab.Screen
        name="Club"
        component={ClubScreen}
        options={{ title: 'Club' }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{ title: 'Profile' }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  iconContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconFocused: {
    transform: [{ scale: 1.1 }],
  },
});
