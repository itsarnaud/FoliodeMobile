import React from "react";
import { View, Text, StyleSheet } from "react-native";

interface HeaderTitleProps {
  title: string;
  description: string;
}

export function HeaderTitle({ title, description }: HeaderTitleProps) {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.titlePage}>{title}</Text>
      <Text style={styles.descText}>{description}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    marginTop: 120.3,
    marginBottom: 30.5,
  },
  titlePage: {
    color: "#FFFFFF",
    fontSize: 21,
    fontWeight: "bold",
  },
  descText: {
    color: "#7D7E83",
    fontSize: 17,
    fontWeight: "regular",
  },
});
