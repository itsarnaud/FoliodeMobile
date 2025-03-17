import React, { useState, useEffect, useCallback } from "react";
import { View, StyleSheet, ScrollView, Text } from "react-native";
import { ButtonFull } from "@/app/components/ui/ButtonFull";
import { HeaderLogo } from "@/app/components/ui/HeaderLogo";
import { HeaderTitle } from "@/app/components/ui/HeaderTexte";
import { globalStyles } from "@/app/styles/styles";
import { Input } from "@/app/components/ui/Input";
import { updateUser } from "@/app/utils/api.service";
import { useUserData } from "@/app/utils/tokenData";

const Profile = () => {
  const userData = useUserData();
  const [lastname, setLastname] = useState("");
  const [firstname, setFirstname] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isInitialized, setIsInitialized] = useState(false);

  // Utiliser un useEffect avec une vérification pour n'initialiser qu'une seule fois
  useEffect(() => {
    if (userData && !isInitialized) {
      setLastname(userData.lastname || "");
      setFirstname(userData.firstname || "");
      setUsername(userData.username || "");
      setEmail(userData.email || "");
      setIsInitialized(true);
    }
  }, [userData, isInitialized]);

  const handleUpdateUser = async () => {
    if (!username.trim() || !email.trim()) {
      setError("Le nom d'utilisateur et l'email sont requis");
      return;
    }

    try {
      setSaving(true);
      setError(null);
      
      const updatedUserData = {
        lastname,
        firstname,
        username,
        email,
        ...(password.trim() !== "" && { password })
      };
      
      await updateUser(updatedUserData);
      
      setPassword("");
    } catch (err) {
      console.error("Erreur lors de la mise à jour du profil:", err);
      setError("Impossible de mettre à jour le profil");
    } finally {
      setSaving(false);
    }
  };

  if (!userData) {
    return (
      <>
        <HeaderLogo />
        <ScrollView style={globalStyles.containerPage}>
          <HeaderTitle
            title="Profil"
            description="Chargement des informations..."
          />
        </ScrollView>
      </>
    );
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
          <Input 
            label="Nom" 
            value={lastname}
            onChangeText={setLastname}
          />
          <Input 
            label="Prénom" 
            value={firstname}
            onChangeText={setFirstname}
          />
          <Input 
            label="Nom d'utilisateur" 
            value={username}
            onChangeText={setUsername}
          />
          <Input 
            label="Email" 
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
          />
          <Input 
            label="Mot de passe" 
            value={password}
            onChangeText={setPassword}
            secureTextEntry
            placeholder="Laissez vide pour ne pas modifier"
          />
          
          {error && <View style={styles.errorContainer}>
            <Text style={styles.errorText}>{error}</Text>
          </View>}
          
          <ButtonFull 
            text={saving ? "Modification en cours..." : "Modifier"} 
            onPress={handleUpdateUser}
          />
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
  errorContainer: {
    marginVertical: 8,
  },
  errorText: {
    color: "#FF6161",
    textAlign: "center",
  },
});

export default Profile;