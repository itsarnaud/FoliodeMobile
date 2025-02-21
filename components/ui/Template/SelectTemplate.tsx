import React from "react";
import { View, Text, Image, Pressable, StyleSheet } from "react-native";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { globalStyles } from "@/app/styles/styles";

interface TemplateCardProps {
  title: string;
  isChecked: boolean;
  imageUri: string;
  onToggle: () => void;
}

export function TemplateCard({ title, isChecked, onToggle, imageUri }: TemplateCardProps) {
  return (
    <View style={[globalStyles.card, { marginBottom: 20 }]}>
      <Text style={styles.titreCard}>{title}</Text>
      <View style={styles.containerAllChecked}>
        <Pressable onPress={onToggle}>
          <View
            style={[
              styles.containerCheckedButton,
              isChecked && styles.checkedContainerStyle,
            ]}
          >
            <View>
              <View style={styles.containerChecked}>
              <Image
                 source={{ uri: imageUri }}
                  style={styles.imageStyle}
                />
                <View style={styles.containerVignette}>
                  <BouncyCheckbox
                    isChecked={isChecked}
                    size={15}
                    fillColor="#4E529E"
                    disableText
                    unFillColor="transparent"
                    iconStyle={{
                      borderColor: isChecked ? "white" : "transparent",
                      borderWidth: isChecked ? 1 : 0,
                    }}
                    innerIconStyle={{ borderWidth: 0 }}
                    onPress={onToggle}
                  />
                </View>
              </View>
            </View>
            <View>
              <Text style={styles.textCheckbox}>Prestige</Text>
            </View>
          </View>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  titreCard: {
    color: "#FFFFFF",
    fontSize: 14,
  },
  containerAllChecked: {
    marginTop: 17,
    display: "flex",
    flexDirection: "column",
    gap: 10,
  },

  containerCheckedButton: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 16,
    paddingHorizontal: 8,
    paddingVertical: 8.5,
    borderRadius: 8,
  },
  checkedContainerStyle: {
    backgroundColor: "#252525",
  },
  containerChecked: {
    position: "relative",
  },
  imageStyle: {
    width: 35,
    height: 35,
    borderRadius: 100,
  },
  containerVignette: {
    position: "absolute",
    right: -3,
    bottom: -2,
  },
  textCheckbox: {
    color: "#A1A1A3",
    fontSize: 14,
  },
});