import React, { useState } from "react";
import { ScrollView } from "react-native";
import { globalStyles } from "../styles/styles";

import { HeaderTitle } from "@/app/components/ui/HeaderTexte";
import { HeaderLogo } from "@/app/components/ui/HeaderLogo";
import { TemplateCard } from "@/app/components/ui/Template/SelectTemplate";
import { PresetCard } from "@/app/components/ui/Template/SelectPreset";
import { templates } from "@/app/interface/Template";

const Edit = () => {
  const [selectedTemplate, setSelectedTemplate] = useState<string | null>(null);
  const [selectedPreset, setSelectedPreset] = useState<string | null>(null);

  return (
    <>
      <HeaderLogo />
        <ScrollView style={globalStyles.containerPage}>
          <HeaderTitle
            title="Editer votre portfolio"
            description="Vous pouvez modifier le style de votre portfolio ici"
          />
          <TemplateCard
            title="Les templates"
            selectedTemplate={selectedTemplate}
            onTemplateSelect={setSelectedTemplate}
            templates={templates}
          />

          <PresetCard
            title="Preset de couleur"
            selectedTemplate={templates.find(t => t.id === selectedTemplate) || null}
            templates={templates}
            selectedPreset={selectedPreset}
            onPresetSelect={setSelectedPreset}
          />
        </ScrollView>
    </>
  );
};

export default Edit;