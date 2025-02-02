import React from "react";
import { View, StyleSheet, ScrollView, Platform } from "react-native";
import { globalStyles } from "@/app/styles/styles";

import { HeaderTitle } from "@/components/ui/HeaderTexte";
import { HeaderLogo } from "@/components/ui/HeaderLogo";
import { Input } from "@/components/ui/Input";
import { TextArea } from "@/components/ui/TextArea";
import { InputFile } from "@/components/ui/InputFIle";
import { ButtonFull } from "@/components/ui/ButtonFull";

const StepTow = () => {
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
          title="MultistepForm"
          description="Vous pouvez ajouter vos projets ici"
        />
        <View style={globalStyles.formContainer}>
          <Input label="Titre du projet" />
          <TextArea label="Présentation" />
          <Input label="Nom du lien" />
          <Input label="Url du lien" />
          <InputFile onPress={handleSelectImage} />
          <ButtonFull text="Ajouter la compétence" />
        </View>
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
