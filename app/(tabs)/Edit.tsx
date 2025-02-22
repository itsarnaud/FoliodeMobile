import React, { useState } from "react";
import { ScrollView, View } from "react-native";
import { globalStyles } from "../styles/styles";

import { HeaderTitle } from "@/app/components/ui/HeaderTexte";
import { HeaderLogo } from "@/app/components/ui/HeaderLogo";
import { TemplateCard } from "@/app/components/ui/Template/SelectTemplate";
import { PresetCard } from "@/app/components/ui/Template/SelectPreset";

const Edit = () => {
  const [isCheckedTemplate, setIsCheckedTemplate] = useState(false);
  const [isCheckedPreset, setIsCheckedPreset] = useState(false);

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
