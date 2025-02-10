import React from "react";
import { View, Platform, ScrollView } from "react-native";
import { globalStyles } from "@/app/styles/styles";

import { Input } from "@/components/ui/Input";
import { InputFile } from "@/components/ui/InputFIle";
import { ButtonFull } from "@/components/ui/ButtonFull";
import { ProjectCard } from "@/components/ui/ProjectCardItem";
import { HeaderTitle } from "@/components/ui/HeaderTexte";
import { HeaderLogo } from "@/components/ui/HeaderLogo";

const Skills = () => {
  // va faloir utilise expo image picker a la place
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

      <ScrollView style={globalStyles.container}>
        <HeaderTitle
          title="Vos Projets"
          description="Vous pouvez ajouter vos projets ici"
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
