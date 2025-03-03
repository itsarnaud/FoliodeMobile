import React, { useState, useEffect } from "react";
import { StyleSheet, ScrollView, Platform, View } from "react-native";
import { globalStyles } from "@/app/styles/styles";

import { HeaderTitle } from "@/app/components/ui/HeaderTexte";
import { HeaderLogo } from "@/app/components/ui/HeaderLogo";
import { TemplateCard } from "@/app/components/ui/Template/SelectTemplate";
import { PresetCard } from "@/app/components/ui/Template/SelectPreset";
import { templates, Template } from "@/app/interface/Template";
interface StepFourProps {
  onTemplateSelect: (template: Template) => void;
  onColorSelect: (colors: Template["color"]) => void;
}

const StepFour = ({ onTemplateSelect, onColorSelect }: StepFourProps) => {
  const [selectedTemplate, setSelectedTemplate] = useState<string | null>(null);
  const [selectedPreset, setSelectedPreset] = useState<string | null>(null);

  useEffect(() => {
    if (selectedTemplate) {
      const template = templates.find((t) => t.id === selectedTemplate);
      if (template) {
        onTemplateSelect(template);
        if (!selectedPreset) {
          onColorSelect(template.color);
        }
      }
    }
  }, [selectedTemplate]);

  useEffect(() => {
    if (selectedPreset) {
      const preset = templates.find((t) => t.id === selectedPreset);
      if (preset) {
        onColorSelect(preset.color);
      }
    }
  }, [selectedPreset]);

  return (
    <ScrollView>
      <View style={styles.formContainer}>
        <TemplateCard
          title="Les templates"
          selectedTemplate={selectedTemplate}
          onTemplateSelect={setSelectedTemplate}
          templates={templates}
        />

        <PresetCard
          title="Preset de couleur"
          selectedTemplate={templates.find((t) => t.id === selectedTemplate) || null}
          templates={templates}
          selectedPreset={selectedPreset}
          onPresetSelect={setSelectedPreset}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  formContainer: {
    gap: 16,
    marginBottom: 24,
  },
});

export default StepFour;
