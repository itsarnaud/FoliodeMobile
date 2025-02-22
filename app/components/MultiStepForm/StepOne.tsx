import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import { globalStyles } from "@/app/styles/styles";

import { HeaderTitle } from "@/app/components/ui/HeaderTexte";
import { HeaderLogo } from "@/app/components/ui/HeaderLogo";
import { Input } from "@/app/components/ui/Input";
import { TextArea } from "@/app/components/ui/TextArea";

const StepOne = () => {
  return (
    <>
      <ScrollView>
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
