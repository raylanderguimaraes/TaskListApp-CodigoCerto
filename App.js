import { StyleSheet, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import Home from "./src/app/home";
import {
  Roboto_400Regular,
  Roboto_700Bold,
  Roboto_900Black,
  useFonts,
} from "@expo-google-fonts/roboto";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import { LinearGradient } from "expo-linear-gradient";

export default function App() {
  const [fonstLoaded, fontsError] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
    Roboto_900Black,
  });

  if (!fonstLoaded && !fontsError) {
    return null;
  }

  return (
    <LinearGradient style={styles.container} colors={["#ffffff", "#90e2e7"]}>
      <Home />
      <StatusBar style="auto" />
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
});
