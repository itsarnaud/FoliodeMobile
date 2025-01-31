import { Tabs } from "expo-router";
import React from "react";
import { Platform } from "react-native";

import { HapticTab } from "@/components/HapticTab";
import { IconSymbol } from "@/components/ui/IconSymbol";
import TabBarBackground from "@/components/ui/TabBarBackground";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";
import {
  House,
  FolderCog,
  Brain,
  PenLine,
  UserRound,
} from "lucide-react-native";

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarBackground: TabBarBackground,
        tabBarActiveTintColor: "#4E529E",
        tabBarInactiveTintColor: "#8F98A4",
        tabBarLabelStyle: {
          fontSize: 12,
          marginTop: 0,
        },
        tabBarStyle: {
          position: 'absolute',
          backgroundColor: '#0E0E0E',
          paddingTop: 10,
          paddingBottom: 16,
          height: 100, 
          borderTopWidth: 1,
          shadowOffset: {
            width: 0,
            height: -2,
          },
          shadowOpacity: 0.1,
          shadowRadius: 3,
          elevation: 5, 
        },
      }}
    >
      <Tabs.Screen
        name="Dashboard"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => <House color={color} size={24} />,
        }}
      />
      <Tabs.Screen
        name="Project"
        options={{
          title: "Ajouter",
          tabBarIcon: ({ color }) => <FolderCog color={color} size={24} />,
        }}
      />
      <Tabs.Screen
        name="Skills"
        options={{
          title: "Compétence",
          tabBarIcon: ({ color }) => <Brain color={color} size={24} />,
        }}
      />
      <Tabs.Screen
        name="Edit"
        options={{
          title: "Editer",
          tabBarIcon: ({ color }) => <PenLine color={color} size={24} />,
        }}
      />

      <Tabs.Screen
        name="Profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ color }) => <UserRound color={color} size={24} />,
        }}
      />
    </Tabs>
  );
}
