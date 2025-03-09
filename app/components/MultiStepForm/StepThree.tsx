import React, { useState } from "react";
import { View, StyleSheet, ScrollView, Platform, Image, Text, Alert } from "react-native";
import { globalStyles } from "@/app/styles/styles";
import * as ImagePicker from "expo-image-picker";

import { HeaderTitle } from "@/app/components/ui/HeaderTexte";
import { HeaderLogo } from "@/app/components/ui/HeaderLogo";
import { Input } from "@/app/components/ui/Input";
import { TextArea } from "@/app/components/ui/TextArea";
import { InputFile } from "@/app/components/ui/InputFIle";
import { ButtonFull } from "@/app/components/ui/ButtonFull";
import { createProject } from "@/app/utils/api.service";

const StepThree = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [linkName, setLinkName] = useState("");
  const [linkUrl, setLinkUrl] = useState("");
  const [image, setImage] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSelectImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  const handleAddProject = async () => {
    // Validation des champs
    if (!title || !description) {
      Alert.alert("Erreur", "Le titre et la description sont obligatoires");
      return;
    }

    setLoading(true);
    
    // Préparation des liens
    const links = [];
    if (linkName && linkUrl) {
      links.push({
        name: linkName,
        url: linkUrl
      });
    }
    
    try {
      // Appel à l'API
      const projectData = {
        title,
        description,
        links
      };
      
      const response = await createProject(projectData, image);
      
      // Réinitialisation du formulaire après succès
      setTitle("");
      setDescription("");
      setLinkName("");
      setLinkUrl("");
      setImage(null);
      
      Alert.alert("Succès", "Projet ajouté avec succès");
    } catch (error) {
      console.error("Erreur lors de l'ajout du projet:", error);
      Alert.alert("Erreur", "Impossible d'ajouter le projet");
    } finally {
      setLoading(false);
    }
  };

  return (
    <ScrollView>
      <View style={globalStyles.formContainer}>
        <Input 
          label="Titre du projet" 
          value={title}
          onChangeText={setTitle}
        />
        <TextArea 
          label="Présentation" 
          value={description}
          onChangeText={setDescription}
        />
        <Input 
          label="Nom du lien" 
          value={linkName}
          onChangeText={setLinkName}
        />
        <Input 
          label="Url du lien" 
          value={linkUrl}
          onChangeText={setLinkUrl}
        />
        <InputFile onPress={handleSelectImage} />
        
        {image ? (
          <View style={styles.imageContainer}>
            <Image source={{ uri: image }} style={styles.image} />
            <Text style={styles.imageText}>Image sélectionnée</Text>
          </View>
        ) : null}
        
        <ButtonFull 
          text={loading ? "Ajout en cours..." : "Ajouter le projet"}
          onPress={handleAddProject}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  formContainer: {
    gap: 16,
    marginBottom: 24,
  },
  imageContainer: {
    alignItems: 'center',
    marginVertical: 10,
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 13,
    resizeMode: 'cover',
  },
  imageText: {
    color: '#7D7E83',
    marginTop: 8,
    fontSize: 14,
  }
});

export default StepThree;