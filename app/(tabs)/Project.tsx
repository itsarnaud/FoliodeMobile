import React from "react";
import { ScrollView, View, Platform } from "react-native";
import { globalStyles } from "@/app/styles/styles";

import { Input } from "@/app/components/ui/Input";
import { TextArea } from "@/app/components/ui/TextArea";
import { InputFile } from "@/app/components/ui/InputFIle";
import { ButtonFull } from "@/app/components/ui/ButtonFull";
import { ProjectCard } from "@/app/components/ui/ProjectCardItem";
import { HeaderTitle } from "@/app/components/ui/HeaderTexte";
import { HeaderLogo } from "@/app/components/ui/HeaderLogo";

const Project = () => {
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

     <ScrollView style={globalStyles.containerPage}>
        <HeaderTitle
          title="Vos Projets"
          description="Vous pouvez ajouter vos projets ici"
        />
        <View style={globalStyles.formContainer}>
          <Input label="Email"/>
          <TextArea
            label="Description du projet"
          />

          <Input label="Email"/>

          <InputFile onPress={handleSelectImage} />

          <ButtonFull text="Ajouter le projet" />
        </View>
        <ProjectCard
          headerTitle="Vos Projets"
          data={[
            {
              title: "Foliode",
              subtitle: "12/02/03",
              image: "https://picsum.photos/500/300?random=1",
            },
            {
              title: "Site de vente de sushi",
              subtitle: "12/02/03",
              image: "https://picsum.photos/500/300?random=1",
            },
          ]}
        />
      </ScrollView>
    </>
  );
};

export default Project;
