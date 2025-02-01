import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import { ButtonFull } from "@/components/ui/ButtonFull";
import { HeaderLogo } from "@/components/ui/HeaderLogo";
import { HeaderTitle } from "@/components/ui/HeaderTexte";
import { ProfileInput } from "@/components/ui/ProfileInput";
import { globalStyles } from "@/app/styles/styles";

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
          <ProfileInput label="Nom" placeholder="Hege" />
          <ProfileInput label="Prénom" placeholder="Timothe" />
          <ProfileInput label="Nom d'utilisateur" placeholder="Tims" />
          <ProfileInput label="Email" placeholder="hegetimothe@gmail.com" />
          <ProfileInput label="Mots de passe" placeholder="c'est caché mec" />
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
