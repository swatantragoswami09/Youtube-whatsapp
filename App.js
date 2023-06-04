import { StatusBar } from "expo-status-bar";
import { LogBox, StyleSheet, Text, View } from "react-native";
import * as SplashScreen from "expo-splash-screen";
import React, { useState } from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import AppNavigation from "./navigation/AppNavigation";

LogBox.ignoreAllLogs();
// Keep the splash screen visible while we fetch resources
SplashScreen.preventAutoHideAsync();

export default function App() {
  const [appIsLoaded, setAppIsLoaded] = useState(false);

  React.useEffect(() => {
    const prepare = async () => {
      try {
        await FontFace.loadAsync({
          black: require("./assets/Roboto/Roboto-Black.ttf"),
          bold: require("./assets/fonts/RobotoSlab-Bold.ttf"),
          extraBold: require("./assets/fonts/RobotoSlab-ExtraBold.ttf"),
          extraLight: require("./assets/fonts/RobotoSlab-ExtraLight.ttf"),
          light: require("./assets/fonts/RobotoSlab-Light.ttf"),
          medium: require("./assets/fonts/RobotoSlab-Medium.ttf"),
          regular: require("./assets/fonts/RobotoSlab-Regular.ttf"),
          semiBold: require("./assets/fonts/RobotoSlab-SemiBold.ttf"),
          thin: require("./assets/fonts/RobotoSlab-Thin.ttf"),
        });
      } catch (error) {
        console.log.error();
      } finally {
        setAppIsLoaded(true);
      }
    };
    prepare();
  }, []);

  const onLayout = React.useCallback(async () => {
    if (appIsLoaded) await SplashScreen.hideAsync();
  }, [appIsLoaded]);

  if (!appIsLoaded) return null;

  return (
    <GestureHandlerRootView style={{ flex: 1 }} onLayout={onLayout}>
      <AppNavigation />
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
