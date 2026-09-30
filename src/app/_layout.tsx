import { useFonts } from "expo-font";
import { Slot } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";

import "./global.css";

SplashScreen.preventAutoHideAsync();

const RootLayout = () => {
  const [fontsLoaded, error] = useFonts({
    "WorkSans-Black": require("../../assets/fonts/ArchivoBlack-Regular.ttf"),
    "WorkSans-Light": require("../../assets/fonts/Oswald-VariableFont_wght.ttf"),
    "WorkSans-Medium": require("../../assets/fonts/PlaywriteCUGuides-Regular.ttf"),
  });

  useEffect(() => {
    if (error) throw error;

    if (fontsLoaded) {
      SplashScreen.hide();
    }
  }, [fontsLoaded, error]);

  if (!fontsLoaded && !error) return null;

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      {/* flex: 1 permite que el contenedor ocupe toda la pantalla. */}
      <Slot />
    </GestureHandlerRootView>
  );
};

export default RootLayout;
