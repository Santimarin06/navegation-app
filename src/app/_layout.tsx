import { useFonts } from 'expo-font';
import { Slot } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';

import './global.css';

SplashScreen.preventAutoHideAsync();

const RootLayout = () => {
  const [fontsLoaded, error] = useFonts({
    'WorkSans-Black': require('../../assets/fonts/ArchivoBlack-Regular.ttf'),
    'WorkSans-Light': require('../../assets/fonts/Oswald-VariableFont_wght.ttf'),
    'WorkSans-Medium': require('../../assets/fonts/Oswald-VariableFont_wght.ttf'),
  });

  useEffect(() => {
    if (fontsLoaded || error) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded, error]);

  if (!fontsLoaded && !error) return null;

  return <Slot />;
};

export default RootLayout;