import React from "react";
import { View, Text, Image, Pressable, StyleSheet } from "react-native";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { globalStyles } from "../../../styles/styles";

interface TemplateCardProps {
  title: string;
  selectedTemplate: string | null;
  onTemplateSelect: (id: string) => void;
  templates: Array<{
    id: string;
    name: string;
    preview: any;
  }>;
}

export function TemplateCard({
  title,
  selectedTemplate,
  onTemplateSelect,
  templates,
}: TemplateCardProps) {
  return (
    <View style={[globalStyles.card, { marginBottom: 20 }]}>
      <Text style={styles.titreCard}>{title}</Text>
      <View style={styles.containerAllChecked}>
        {templates.map((template) => (
          <Pressable
            key={template.id}
            onPress={() => onTemplateSelect(template.id)}
          >
            <View
              style={[
                styles.containerCheckedButton,
                selectedTemplate === template.id &&
                  styles.checkedContainerStyle,
              ]}
            >
              <View>
                <View style={styles.containerChecked}>
                  <Image source={template.preview} style={styles.imageStyle} />
                  <View style={styles.containerVignette}>
                    <BouncyCheckbox
                      isChecked={selectedTemplate === template.id}
                      size={15}
                      fillColor="#4E529E"
                      disableText
                      unFillColor="transparent"
                      iconStyle={{
                        borderColor:
                          selectedTemplate === template.id
                            ? "white"
                            : "transparent",
                        borderWidth: selectedTemplate === template.id ? 1 : 0,
                      }}
                      innerIconStyle={{ borderWidth: 0 }}
                      onPress={() => onTemplateSelect(template.id)}
                    />
                  </View>
                </View>
              </View>
              <View>
                <Text style={styles.textCheckbox}>{template.name}</Text>
              </View>
            </View>
          </Pressable>
        ))}
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
