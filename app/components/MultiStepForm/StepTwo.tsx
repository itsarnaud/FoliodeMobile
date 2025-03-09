import React from "react";
import { View, StyleSheet, ScrollView, Image, Text } from "react-native";
import { globalStyles } from "@/app/styles/styles";
import * as ImagePicker from "expo-image-picker";

import { Input } from "@/app/components/ui/Input";
import { InputFile } from "@/app/components/ui/InputFIle";
import { ButtonFull } from "@/app/components/ui/ButtonFull";

interface StepTwoProps {
  skillName: string;
  setSkillName: (value: string) => void;
  skillImage: string | null;
  setSkillImage: (value: string | null) => void;
}

const StepTwo = ({ skillName, setSkillName, skillImage, setSkillImage }: StepTwoProps) => {
  const handleSelectImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    if (!result.canceled) {
      setSkillImage(result.assets[0].uri);
    }
  };

  return (
    <ScrollView>
      <View style={globalStyles.formContainer}>
        <Input 
          label="Nom de la compétence" 
          value={skillName} 
          onChangeText={setSkillName} 
        />
        <InputFile onPress={handleSelectImage} />
        {skillImage ? (
          <View style={styles.imageContainer}>
            <Image source={{ uri: skillImage }} style={styles.image} />
            <Text style={styles.imageText}>Image sélectionnée</Text>
          </View>
        ) : null}
        <ButtonFull 
          text="Ajouter la compétence"
          onPress={() => {}}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
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

export default StepTwo;