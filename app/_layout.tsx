import { Slot } from 'expo-router';
import 'react-native-reanimated';

import { AuthProvider } from '@/components/providers';
import { View } from 'react-native';

export default function RootLayout() {

  return (
    <AuthProvider>
      <View style={{ backgroundColor: 'black', flex: 1 }}>
        <Slot />
      </View>
    </AuthProvider>
  );
}