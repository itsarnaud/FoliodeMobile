import React from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { globalStyles } from "../../../styles/styles";
import { Template } from "@/app/interface/Template";

interface PresetCardProps {
  title: string;
  selectedTemplate: Template | null;
  templates: Template[];
  selectedPreset: string | null;
  onPresetSelect: (id: string) => void;
}

export function PresetCard({
  title,
  selectedTemplate,
  templates,
  selectedPreset,
  onPresetSelect,
}: PresetCardProps) {
  return (
    <View style={globalStyles.card}>
      <Text style={globalStyles.titreCard}>{title}</Text>
      <View style={styles.containerPresetChecked}>
        {templates.map((template) => (
          <Pressable
            key={template.id}
            onPress={() => onPresetSelect(template.id)}
            style={[
              styles.containerPresetButton,
              selectedPreset === template.id && styles.checkedPreset,
            ]}
          >
            <View style={styles.containerContent}>
              <View style={styles.containerChecked}>
                <View
                  style={[
                    styles.colorPreview,
                    {
                      backgroundColor:
                        template.id === "prestige"
                          ? template.color.secondary
                          : template.color.primary,
                    },
                  ]}
                />
              </View>
              <Text style={styles.textPresetCheckbox}>{template.name}</Text>
            </View>
          </Pressable>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  containerPresetChecked: {
    marginTop: 17,
    display: "flex",
    flexDirection: "column",
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
  containerContent: {
    flexDirection: "row",
    alignItems: "center",
    gap: 16,
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
  colorPreview: {
    width: 35,
    height: 35,
    borderRadius: 100,
  },
});
