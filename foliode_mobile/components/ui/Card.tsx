import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { globalStyles } from "@/app/styles/styles";

// ...existing code...
interface CardProps {
  title: string;
  note: string;
}

export function Card({ title, note }: CardProps) {
  return (
    <View style={[globalStyles.card, styles.titreCard]}>
      <Text style={globalStyles.titreCard}>{title}</Text>
      <Text style={globalStyles.paraCard}>{note}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
    titreCard: {
        flex: 1,
    }
});
