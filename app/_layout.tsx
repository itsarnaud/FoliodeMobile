import { useEffect } from "react";
import { useColorScheme, StyleSheet } from "react-native";
import * as NavigationBar from "expo-navigation-bar";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { Stack } from "expo-router";
import { AuthProvider, useAuth } from "../app/context/AuthContext";
import { ArrowLeft } from "lucide-react-native";
import { useRouter } from "expo-router";
import { PortfolioProvider } from '@/app/context/PortfolioContext';

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const { authState, onLogout } = useAuth();
  const router = useRouter();

  useEffect(() => {
    NavigationBar.setBackgroundColorAsync("#000");
    NavigationBar.setButtonStyleAsync("light");
  }, []);

  return (
    <AuthProvider>
      <PortfolioProvider>
        <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
          <SafeAreaView style={styles.container}>
            <Stack screenOptions={{ headerShown: false }}>
              <Stack.Screen name="index" />
              <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
              <Stack.Screen name="screens/MultiStepForm" options={{ headerShown: false }} />
              <Stack.Screen name="screens/Home" />
              <Stack.Screen
                  name="screens/Register"
                  options={{
                    headerShown: true,
                    headerStyle: { backgroundColor: "#000" },
                    headerTintColor: "#fff",
                    headerTitle: "",
                    headerLeft: () => (
                      <ArrowLeft
                        color="#fff"
                        size={24}
                        onPress={() => {
                          router.push("/");
                        }}
                      />
                    ),
                  }}
                />
              <Stack.Screen name="project-details" options={{ headerShown: false }} />
              {authState?.authenticated ? (
                <Stack.Screen name="(tabs)/Dashboard" />
              ) : (
                <Stack.Screen
                  name="screens/Login"
                  options={{
                    headerShown: true,
                    headerStyle: { backgroundColor: "#000" },
                    headerTintColor: "#fff",
                    headerTitle: "",
                    headerLeft: () => (
                      <ArrowLeft
                        color="#fff"
                        size={24}
                        onPress={() => {
                          router.push("/");
                        }}
                      />
                    ),
                  }}
                />
              )}
            </Stack>
          </SafeAreaView>
          <StatusBar style="light" backgroundColor="#000" />
        </ThemeProvider>
      </PortfolioProvider>
    </AuthProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
});
