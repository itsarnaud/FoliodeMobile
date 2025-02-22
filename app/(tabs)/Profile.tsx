import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import { ButtonFull } from "@/app/components/ui/ButtonFull";
import { HeaderLogo } from "@/app/components/ui/HeaderLogo";
import { HeaderTitle } from "@/app/components/ui/HeaderTexte";
import { globalStyles } from "@/app/styles/styles";
import { Input } from "@/app/components/ui/Input";
const Profile = () => {
  return (
    <>
      <HeaderLogo />

     <ScrollView style={globalStyles.containerPage}>
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
