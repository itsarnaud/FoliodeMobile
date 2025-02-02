import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import { ButtonFull } from "@/components/ui/ButtonFull";
import { HeaderLogo } from "@/components/ui/HeaderLogo";
import { HeaderTitle } from "@/components/ui/HeaderTexte";
import { globalStyles } from "@/app/styles/styles";
import { Input } from "@/components/ui/Input";
const Profile = () => {
  return (
    <>
      <HeaderLogo />

      <ScrollView style={globalStyles.container}>
        <HeaderTitle
          title="Profil"
          description="Vous pouvez modifier les informations de votre profil ici"
        />

        <View style={styles.formContainer}>
          <Input label="Nom" />
          <Input label="Prénom" />
          <Input label="Nom d'utilisateur" />
          <Input label="Email" />
          <Input label="Mots de passe" />
          <ButtonFull text="Modifier" />
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

export default Profile;
