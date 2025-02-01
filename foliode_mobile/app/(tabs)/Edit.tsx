import React, { useState } from "react";
import { ScrollView } from "react-native";
import { globalStyles } from "@/app/styles/styles";

import { HeaderTitle } from "@/components/ui/HeaderTexte";
import { HeaderLogo } from "@/components/ui/HeaderLogo";
import { TemplateCard } from "@/components/ui/Template/SelectTemplate";
import { PresetCard } from "@/components/ui/Template/SelectPreset";

const Edit = () => {
  const [isCheckedTemplate, setIsCheckedTemplate] = useState(false);
  const [isCheckedPreset, setIsCheckedPreset] = useState(false);

  return (
    <>
      <HeaderLogo />

      <ScrollView style={globalStyles.container}>
        <HeaderTitle
          title="Vos Projets"
          description="Vous pouvez ajouter vos projets ici"
        />
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

export default Edit;
