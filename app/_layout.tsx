import { Stack } from 'expo-router';

import * as SplashScreen from 'expo-splash-screen';
import 'react-native-reanimated';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  return (
   
        <SafeAreaProvider>
             <Stack screenOptions={{ headerShown: false}} />
        </SafeAreaProvider>
    
    
  );
}
