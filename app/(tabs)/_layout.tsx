import React from "react";
import { Tabs } from "expo-router";
import { Home, Edit, FolderCog, Brain, UserRound } from "lucide-react-native";
import * as NavigationBar from "expo-navigation-bar";
import { useEffect } from "react";
import { Platform } from "react-native";
import { PortfolioProvider } from "../context/PortfolioContext";


export default function TabLayout() {
  useEffect(() => {
    NavigationBar.setBackgroundColorAsync("#0E0E0E");
    NavigationBar.setButtonStyleAsync("light");
  }, []);

  return (
    <PortfolioProvider>
      <Tabs
        screenOptions={{
          headerShown: false,
          tabBarLabelStyle: {
            fontSize: 12,
            marginTop: 2,
          },
          tabBarStyle: {
            backgroundColor: "#0E0E0E",
            borderTopColor: "#3E3F92",
            borderTopWidth: 1,
            height: Platform.select({ ios: 100, android: 70 }),
            paddingTop: 8,
          },
          tabBarActiveTintColor: "#3E3F92",
          tabBarInactiveTintColor: "#7D7E83",
        }}
      >
        <Tabs.Screen
          name="Dashboard"
          options={{
            tabBarLabel: "Accueil",
            tabBarIcon: ({ color, size }) => <Home color={color} size={24} />,
          }}
        />
        <Tabs.Screen
          name="Project"
          options={{
            tabBarLabel: "Ajouter",
            tabBarIcon: ({ color, size }) => (
              <FolderCog color={color} size={24} />
            ),
          }}
        />
        <Tabs.Screen
          name="Skills"
          options={{
            tabBarLabel: "Competence",
            tabBarIcon: ({ color, size }) => <Brain color={color} size={24} />,
          }}
        />
        <Tabs.Screen
          name="Edit"
          options={{
            tabBarLabel: "Éditer",
            tabBarIcon: ({ color, size }) => <Edit color={color} size={24} />,
          }}
        />
        <Tabs.Screen
          name="Profile"
          options={{
            tabBarLabel: "Profile",
            tabBarIcon: ({ color, size }) => (
              <UserRound color={color} size={24} />
            ),
          }}
        />
        <Tabs.Screen
          name="MulstistepForm"
          options={{
            tabBarLabel: "Éditer",
            tabBarIcon: ({ color, size }) => <Edit color={color} size={24} />,
          }}
        />
      </Tabs>
    </PortfolioProvider>
  );
}