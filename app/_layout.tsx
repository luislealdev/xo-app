import { DarkTheme, ThemeProvider } from '@react-navigation/native';
import { Slot} from 'expo-router';
import 'react-native-reanimated';

import { AuthProvider } from '@/components/providers';

export default function RootLayout() {

  return (
    <AuthProvider>
      <ThemeProvider value={DarkTheme}>
        <Slot />
      </ThemeProvider>
    </AuthProvider>
  );
}