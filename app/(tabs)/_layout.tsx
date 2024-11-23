import { router, Tabs } from 'expo-router';
import React, { useEffect } from 'react';
import { Platform } from 'react-native';

import { useAuth } from '@/components/providers';
import { colors } from '@/constants/Colors';

export default function TabLayout() {
  const { userToken, isLoading } = useAuth();

  useEffect(() => {
    if (!userToken && !isLoading) {
      router.push('/auth');
    }
  }, [userToken, isLoading]);

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: colors.third,
        headerShown: false,

        tabBarStyle: Platform.select({
          ios: {
            // Use a transparent background on iOS to show the blur effect
            position: 'absolute',
          },
          default: {},
        }),
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',

        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: 'Explore',

        }}
      />
    </Tabs>
  );
}