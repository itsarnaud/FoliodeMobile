import React from "react";
import { View, StyleSheet, ScrollView, Platform } from "react-native";
import { globalStyles } from "@/app/styles/styles";

import { HeaderTitle } from "@/app/components/ui/HeaderTexte";
import { HeaderLogo } from "@/app/components/ui/HeaderLogo";
import { Input } from "@/app/components/ui/Input";
import { TextArea } from "@/app/components/ui/TextArea";
import { InputFile } from "@/app/components/ui/InputFIle";
import { ButtonFull } from "@/app/components/ui/ButtonFull";

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
      <ScrollView>
        <View style={globalStyles.formContainer}>
          <Input label="Nom de la competence" />
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
