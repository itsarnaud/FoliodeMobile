import React from "react";
import {
  ScrollView,
  View,
  Platform,
} from "react-native";
import { globalStyles } from "@/app/styles/styles";

import { Input } from "@/components/ui/Input";
import { TextArea } from "@/components/ui/TextArea";
import { InputFile } from "@/components/ui/InputFIle";
import { ButtonFull } from "@/components/ui/ButtonFull";
import { ProjectCard } from "@/components/ui/ProjectCardItem";
import { HeaderTitle } from "@/components/ui/HeaderTexte";
import { HeaderLogo } from "@/components/ui/HeaderLogo";

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
      
      <ScrollView
        style={globalStyles.container}
      >
        <HeaderTitle
          title="Vos Projets"
          description="Vous pouvez ajouter vos projets ici"
        />
        <View  style={globalStyles.formContainer}>
          <Input placeholder="Nom du projet" placeholderTextColor="#7D7E83" />
          <TextArea
            placeholder="Description du projet"
            placeholderTextColor="#7D7E83"
          />

          <Input
            placeholder="Nom du lien (Github, Dribble...)"
            placeholderTextColor="#7D7E83"
          />

          <Input placeholder="Url" placeholderTextColor="#7D7E83" />

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
