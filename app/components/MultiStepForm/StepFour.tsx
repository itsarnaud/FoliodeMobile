import React, { useState } from "react";
import { StyleSheet, ScrollView, Platform } from "react-native";
import { globalStyles } from "@/app/styles/styles";

import { HeaderTitle } from "@/app/components/ui/HeaderTexte";
import { HeaderLogo } from "@/app/components/ui/HeaderLogo";
import { TemplateCard } from "@/app/components/ui/Template/SelectTemplate";
import { PresetCard } from "@/app/components/ui/Template/SelectPreset";

const StepTow = () => {
  const handleSelectImage = () => {
    Platform.OS === "web";
    const input = document.createElement("input");
    input.type = "file";
    input.accept = "image/*";
    input.onchange = () => {};
    input.click();
  };

  const [isCheckedTemplate, setIsCheckedTemplate] = useState(false);
  const [isCheckedPreset, setIsCheckedPreset] = useState(false);

  return (
    <>
      <ScrollView>
        <TemplateCard
          title="Les templates"
          isChecked={isCheckedTemplate}
          onToggle={() => setIsCheckedTemplate(!isCheckedTemplate)}
          imageUri="https://picsum.photos/500/300?random=1"
        />

        <PresetCard
          title="Preset de couleur"
          isChecked={isCheckedPreset}
          onToggle={() => setIsCheckedPreset(!isCheckedPreset)}
        />
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  formContainer: {
    gap: 16,
    marginBottom: 24,
  },
});

export default StepTow;
