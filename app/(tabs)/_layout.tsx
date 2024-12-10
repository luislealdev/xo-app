import { router, Tabs } from 'expo-router';
import React, { useEffect } from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import { Ionicons, FontAwesome } from '@expo/vector-icons';
import { useAuth } from '@/components/providers';
import { colors } from '@/constants/Colors';

export default function TabLayout() {
  const { userToken, isLoading } = useAuth();

  // useEffect(() => {
  //   if (!userToken && !isLoading) {
  //     router.push('/auth');
  //   }
  // }, [userToken, isLoading]);

  return (
    <View style={styles.safeArea} >
      <Tabs
        screenOptions={{
          headerShown: false,
          tabBarStyle: {
            backgroundColor: colors.black,
            borderTopColor: 'transparent',
            marginTop: 10,
          },
          tabBarActiveTintColor: colors.primary,
          tabBarInactiveTintColor: colors.secondary,
          tabBarLabelStyle: {
            fontSize: 12,
          },
          tabBarIconStyle: {
            color: colors.primary,
          },
        }}>
        <Tabs.Screen
          name="index"
          options={{
            title: 'Inicio',
            tabBarIcon: ({ color }) => (
              <Ionicons name="home" color={color} size={24} />
            ),
          }}
        />
        <Tabs.Screen
          name="profile"
          options={{
            title: 'Perfil',
            tabBarIcon: ({ color }) => (
              <FontAwesome name="user" color={color} size={24} />
            ),
          }}
        />
      </Tabs>
    </View>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    paddingTop: 50,
  },
});