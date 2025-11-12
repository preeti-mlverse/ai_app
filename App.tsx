// // App.tsx
// import React, { useEffect, useState } from 'react';
// import { StatusBar } from 'expo-status-bar';
// import { SafeAreaProvider } from 'react-native-safe-area-context';
// import { useFonts } from 'expo-font';
// import * as SplashScreen from 'expo-splash-screen';
// import {
//   Inter_400Regular,
//   Inter_500Medium,
//   Inter_600SemiBold,
// } from '@expo-google-fonts/inter';
// import {
//   Poppins_400Regular,
//   Poppins_600SemiBold,
// } from '@expo-google-fonts/poppins';
// import {
//   PatrickHand_400Regular,
// } from '@expo-google-fonts/patrick-hand';

// // ✅ CORRECTED IMPORTS (removed ./ai_app/)
// import AppNavigator from './src/navigation/AppNavigator';
// import { theme } from './src/config/theme';

// // Keep splash screen visible while loading
// SplashScreen.preventAutoHideAsync();

// export default function App() {
//   const [appIsReady, setAppIsReady] = useState(false);

//   const [fontsLoaded] = useFonts({
//     Inter: Inter_400Regular,
//     'Inter-Medium': Inter_500Medium,
//     'Inter-SemiBold': Inter_600SemiBold,
//     Poppins: Poppins_400Regular,
//     'Poppins-SemiBold': Poppins_600SemiBold,
//     PatrickHand: PatrickHand_400Regular,
//   });

//   useEffect(() => {
//     async function prepare() {
//       try {
//         // Pre-load any assets here
//         await new Promise(resolve => setTimeout(resolve, 1000));
//       } catch (e) {
//         console.warn(e);
//       } finally {
//         setAppIsReady(true);
//       }
//     }

//     prepare();
//   }, []);

//   useEffect(() => {
//     if (appIsReady && fontsLoaded) {
//       SplashScreen.hideAsync();
//     }
//   }, [appIsReady, fontsLoaded]);

//   if (!appIsReady || !fontsLoaded) {
//     return null;
//   }

//   return (
//     <SafeAreaProvider>
//       <StatusBar style="dark" backgroundColor={theme.colors.background} />
//       <AppNavigator />
//     </SafeAreaProvider>
//   );
// }

import React, { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import {
  Inter_400Regular,
  Inter_500Medium,
  Inter_600SemiBold,
} from '@expo-google-fonts/inter';
import {
  Poppins_400Regular,
  Poppins_600SemiBold,
} from '@expo-google-fonts/poppins';
import {
  PatrickHand_400Regular,
} from '@expo-google-fonts/patrick-hand';

import AppNavigator from './src/navigation/AppNavigator';
import { theme } from './src/config/theme';

// Keep splash screen visible while loading
SplashScreen.preventAutoHideAsync();

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);

  const [fontsLoaded] = useFonts({
    Inter: Inter_400Regular,
    'Inter-Medium': Inter_500Medium,
    'Inter-SemiBold': Inter_600SemiBold,
    Poppins: Poppins_400Regular,
    'Poppins-SemiBold': Poppins_600SemiBold,
    PatrickHand: PatrickHand_400Regular,
  });

  useEffect(() => {
    async function prepare() {
      try {
        // Pre-load any assets here
        await new Promise(resolve => setTimeout(resolve, 1000));
      } catch (e) {
        console.warn(e);
      } finally {
        setAppIsReady(true);
      }
    }

    prepare();
  }, []);

  useEffect(() => {
    if (appIsReady && fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [appIsReady, fontsLoaded]);

  if (!appIsReady || !fontsLoaded) {
    return null;
  }

  return (
    <SafeAreaProvider>
      <StatusBar style="dark" backgroundColor={theme.colors.background} />
      <AppNavigator />
    </SafeAreaProvider>
  );
}
