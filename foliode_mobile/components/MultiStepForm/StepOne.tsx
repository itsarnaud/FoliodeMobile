import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import { globalStyles } from "@/app/styles/styles";

import { HeaderTitle } from "@/components/ui/HeaderTexte";
import { HeaderLogo } from "@/components/ui/HeaderLogo";
import { Input } from "@/components/ui/Input";
import { TextArea } from "@/components/ui/TextArea";

const StepOne = () => {
  return (
    <>
      <HeaderLogo />
      <ScrollView style={globalStyles.container}>
        <HeaderTitle
          title="MultistepForm"
          description="Vous pouvez ajouter vos projets ici"
        />
        <View style={styles.formContainer}>
          <Input label="Nom d’utilisateur" />
          <Input label="Titre de l’utilisateur" />
          <Input label="Sous titre" />
          <TextArea label="Présentation" />
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

export default StepOne;
