import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import * as Font from 'expo-font';
import { StyleSheet, View, ActivityIndicator } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';
import Home from './screens/home';

// Preload fonts
const getFonts = () => Font.loadAsync({
  'roboto-bold': require('./assets/fonts/Roboto-Bold.ttf'),
  'roboto-light': require('./assets/fonts/Roboto-Light.ttf'),
  'roboto-Regular': require('./assets/fonts/Roboto-Regular.ttf'),
});

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        await SplashScreen.hideAsync() ; // Prevent the splash screen from auto-hiding
        await getFonts(); // Load your fonts
      } catch (e) {
        console.warn(e);
      } finally {
        setFontsLoaded(true);
      }
    }

    prepare();
  }, []);

  useEffect(() => {
    async function hideSplashScreen() {
      if (fontsLoaded) {
        await SplashScreen.hideAsync(); // Hide the splash screen once fonts are loaded
      }
    }

    hideSplashScreen();
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    // Optionally: Show some placeholder content or an activity indicator
    return <View style={styles.container}><ActivityIndicator size="large" /></View>;
  }

  return (
    <View style={styles.container}>
      <Home />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});







// alternative solution to the splash screen issue 
// Here's how I solved the custom font issue, where AppLoading module is deprecated:
// import Home from "./screens/Home";
// import { useFonts } from "expo-font";
// import * as SplashScreen from "expo-splash-screen";
// import { useCallback } from "react";
// import { View } from "react-native";

// SplashScreen.preventAutoHideAsync();
// export default function App() {
//   const [fontsLoaded] = useFonts({
//     "oswald-bold": require("./assets/fonts/Oswald-Bold.ttf"),
//     "oswald-regular": require("./assets/fonts/Oswald-Regular.ttf"),
//   });

//   const onLayoutRootView = useCallback(async () => {
//     if (fontsLoaded) {
//       await SplashScreen.hideAsync();
//     }
//   }, [fontsLoaded]);

//   if (!fontsLoaded) {
//     return null;
//   }

//   return (
//     <View style={{flex:1}} onLayout={onLayoutRootView}>
//       <Home />
//     </View>
//   );
// }