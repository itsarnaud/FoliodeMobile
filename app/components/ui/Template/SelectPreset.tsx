import React from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { globalStyles } from "../../../styles/styles";

interface PresetCardProps {
  title: string;
  isChecked: boolean;
  onToggle: () => void;
}

export function PresetCard({ title, isChecked, onToggle }: PresetCardProps) {
  return (
    <View style={globalStyles.card}>
      <Text style={globalStyles.titreCard}>{title}</Text>
      <View style={styles.containerPresetChecked}>
        <Pressable
          onPress={onToggle}
          style={[
            styles.containerPresetButton,
            isChecked && styles.checkedPreset,
          ]}
        >
          <View>
            <View style={styles.containerChecked}>
              <View style={styles.containerVignette}>
                <BouncyCheckbox
                  isChecked={isChecked}
                  size={15}
                  fillColor=""
                  disableText
                  unFillColor=""
                  iconImageStyle={styles.iconImageStylePreset}
                  innerIconStyle={{ borderWidth: 0 }}
                  onPress={onToggle}
                />
              </View>
            </View>
            <Text style={styles.textPresetCheckbox}>Luxury</Text>
          </View>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
    containerPresetChecked: {
        marginTop: 17,
        display: "flex",
        flexDirection: "row",
        gap: 16,
      },
      containerPresetButton: {
        paddingVertical: 14,
        paddingLeft: 16,
        backgroundColor: "#111111",
        flex: 1,
        borderRadius: 18,
      },
      checkedPreset: {
        backgroundColor: "#4E529E",
      },
      containerChecked: {
        position: "relative",
      },
      containerVignette: {
        position: "absolute",
        right: -3,
        bottom: -2,
      },
      iconImageStylePreset: {
        display: "none",
      },
      textPresetCheckbox: {
        color: "#FFFFFF",
      },
});