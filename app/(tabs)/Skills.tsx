import React from "react";
import { View, Platform, ScrollView } from "react-native";
import { globalStyles } from "@/app/styles/styles";

import { Input } from "@/app/components/ui/Input";
import { InputFile } from "@/app/components/ui/InputFIle";
import { ButtonFull } from "@/app/components/ui/ButtonFull";
import { ProjectCard } from "@/app/components/ui/ProjectCardItem";
import { HeaderTitle } from "@/app/components/ui/HeaderTexte";
import { HeaderLogo } from "@/app/components/ui/HeaderLogo";

const Skills = () => {
  const handleSelectImage = () => {
    Platform.OS === "web";
    const input = document.createElement("input");
    input.type = "file";
    input.accept = "image/*";
    input.onchange = () => {};
    input.click();
  };
  return (
    <>
      <HeaderLogo />

      <ScrollView style={globalStyles.containerPage}>
        <HeaderTitle
          title="Vos Compétences"
          description="Vous pouvez ajouter vos compétences ici"
        />
        <View style={globalStyles.formContainer}>
           <Input label="Nom de la competence"/>
          <InputFile onPress={handleSelectImage} />

          <ButtonFull text="Ajouter la compétence" />
        </View>
        <ProjectCard
          headerTitle="Vos compétences"
          data={[
            {
              title: "Foliode",
              image: "https://picsum.photos/500/300?random=1",
            },
            {
              title: "Site de vente de sushi",
              image: "https://picsum.photos/500/300?random=1",
            },
          ]}
        />
      </ScrollView>
    </>
  );
};

export default Skills;
