import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import { ButtonFull } from "@/app/components/ui/ButtonFull";
import { HeaderLogo } from "@/app/components/ui/HeaderLogo";
import { HeaderTitle } from "@/app/components/ui/HeaderTexte";
import { globalStyles } from "@/app/styles/styles";
import { Input } from "@/app/components/ui/Input";
import { useUserData } from "@/app/utils/tokenData";

const Profile = () => {
  const userData = useUserData();
  
  if (!userData) {
    return null;
  }
  
  return (
    <>
      <HeaderLogo />
      <ScrollView style={globalStyles.containerPage}>
        <HeaderTitle
          title="Profil"
          description="Vous pouvez modifier les informations de votre profil ici"
        />

        <View style={styles.formContainer}>
          <Input label="Nom" defaultValue={userData.lastname} />
          <Input label="Prénom" defaultValue={userData.firstname} />
          <Input label="Nom d'utilisateur" defaultValue={userData.username} />
          <Input label="Email" defaultValue={userData.email} />
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