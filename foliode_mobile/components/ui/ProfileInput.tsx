import React from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";

interface ProfileInputProps {
  label: string;
  placeholder?: string;
}

export function ProfileInput({ label, placeholder }: ProfileInputProps) {
  return (
    <View style={styles.card}>
      <Text style={styles.titreCard}>{label}</Text>
      <TextInput
        style={styles.textInput}
        placeholder={placeholder}
        placeholderTextColor="#7D7E83"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#141414",
    borderRadius: 8,
  },
  titreCard: {
    color: "#FFFFFF",
    fontSize: 14,
    paddingLeft: 10,
    paddingTop: 10,
  },
  textInput: {
    backgroundColor: "#141414",
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 13,
    color: "#FFFFFF",
    fontSize: 16,
  },
});