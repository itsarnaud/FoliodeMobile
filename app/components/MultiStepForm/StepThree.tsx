import React, { useState } from "react";
import { View, StyleSheet, ScrollView, Platform, Image, Text } from "react-native";
import { globalStyles } from "@/app/styles/styles";

import { HeaderTitle } from "@/app/components/ui/HeaderTexte";
import { HeaderLogo } from "@/app/components/ui/HeaderLogo";
import { Input } from "@/app/components/ui/Input";
import { TextArea } from "@/app/components/ui/TextArea";
import { InputFile } from "@/app/components/ui/InputFIle";
import { ButtonFull } from "@/app/components/ui/ButtonFull";
import * as ImagePicker from "expo-image-picker";


const StepThree = () => {
  const [image, setImage] = useState<string | null>(null);

  const handleSelectImage = async() => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ['images', 'videos'],
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };


  return (
    <>
      <ScrollView>
        <View style={globalStyles.formContainer}>
          <Input label="Titre du projet" />
          <TextArea label="Présentation" />
          <Input label="Nom du lien" />
          <Input label="Url du lien" />
          <InputFile onPress={handleSelectImage} />
          
          {image ? (
            <View style={styles.imageContainer}>
              <Image source={{ uri: image }} style={styles.image} />
              <Text style={styles.imageText}>Image sélectionnée</Text>
            </View>
          ) : null}
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
