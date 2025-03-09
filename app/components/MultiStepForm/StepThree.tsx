import React from "react";
import { View, StyleSheet, ScrollView, Image, Text } from "react-native";
import { globalStyles } from "@/app/styles/styles";
import * as ImagePicker from "expo-image-picker";

import { Input } from "@/app/components/ui/Input";
import { TextArea } from "@/app/components/ui/TextArea";
import { InputFile } from "@/app/components/ui/InputFIle";
import { ButtonFull } from "@/app/components/ui/ButtonFull";

interface StepThreeProps {
  title: string;
  setTitle: (value: string) => void;
  description: string;
  setDescription: (value: string) => void;
  linkName: string;
  setLinkName: (value: string) => void;
  linkUrl: string;
  setLinkUrl: (value: string) => void;
  projectImage: string | null;
  setProjectImage: (value: string | null) => void;
}

const StepThree = ({
  title,
  setTitle,
  description,
  setDescription,
  linkName,
  setLinkName,
  linkUrl,
  setLinkUrl,
  projectImage,
  setProjectImage,
}: StepThreeProps) => {
  const handleSelectImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    if (!result.canceled) {
      setProjectImage(result.assets[0].uri);
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
        {projectImage ? (
          <View style={styles.imageContainer}>
            <Image source={{ uri: projectImage }} style={styles.image} />
            <Text style={styles.imageText}>Image sélectionnée</Text>
          </View>
        ) : null}
        <ButtonFull 
          text="Ajouter le projet"
          onPress={() => {}}
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
    alignItems: "center",
    marginVertical: 10,
  },
  image: {
    width: "100%",
    height: 200,
    borderRadius: 13,
    resizeMode: "cover",
  },
  imageText: {
    color: "#7D7E83",
    marginTop: 8,
    fontSize: 14,
  },
});

export default StepThree;