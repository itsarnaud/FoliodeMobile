import { useEffect } from "react";
import { useColorScheme, StyleSheet, Button } from "react-native";
import * as NavigationBar from "expo-navigation-bar";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import { DarkTheme, DefaultTheme, ThemeProvider } from "@react-navigation/native";
import { Stack } from "expo-router";
import { AuthProvider, useAuth } from "../app/context/AuthContext";
import { ArrowLeft } from "lucide-react-native";
import { useRouter } from "expo-router";

export default function Layout() {
  const colorScheme = useColorScheme();
  const { authState, onLogout } = useAuth();
  const router = useRouter();

  useEffect(() => {
    NavigationBar.setBackgroundColorAsync("#000");
    NavigationBar.setButtonStyleAsync("light");
  }, []);

  return (
    <AuthProvider>
      <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
        <SafeAreaView style={styles.container}>
          <Stack>
          <Stack.Screen name="index" options={{ headerShown: false }} />
            {authState?.authenticated ? (
              <Stack.Screen
                name="screens/Home"
                options={{
                  title: "Home",
                  headerRight: () => (
                    <Button
                      onPress={async () => await onLogout?.()}
                      title="Log out"
                    />
                  ),
                }}
              />
            ) : (
              <Stack.Screen
              name="screens/login"
              options={{
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
    </AuthProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
});