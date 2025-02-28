import { Stack } from 'expo-router';
import { useEffect , useState } from 'react';
import * as SplashScreen from 'expo-splash-screen';
import 'react-native-reanimated';
import * as Font from 'expo-font';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
SplashScreen.preventAutoHideAsync();




export default function RootLayout() {

  const [fontLoaded, setFontLoaded] = useState(false);

  useEffect(() => {
    async function loadFonts() {
      await Font.loadAsync({
        'Lobster-Regular': require('../assets/fonts/Lobster-Regular.ttf'),
        'Poppins-Regular': require('../assets/fonts/Poppins-Regular.ttf')
      });
      setFontLoaded(true);
    }
    loadFonts();
  }, []);

  return (
   
        <SafeAreaProvider>
             <Stack screenOptions={{ headerShown: false}} />
        </SafeAreaProvider>
    
    
  );
}
