import React, { useState } from "react";
import { View, StyleSheet, ScrollView, Image, Text } from "react-native";
import { globalStyles } from "@/app/styles/styles";
import * as ImagePicker from "expo-image-picker";

import { Input } from "@/app/components/ui/Input";
import { InputFile } from "@/app/components/ui/InputFIle";
import { ButtonFull } from "@/app/components/ui/ButtonFull";
import { InfoCard } from "@/app/components/ui/InfoCard";
import { Skill } from "@/app/interface/skill";

interface StepTwoProps {
  skillName: string;
  setSkillName: (value: string) => void;
  skillImage: string | null;
  setSkillImage: (value: string | null) => void;
}

const StepTwo = ({ skillName, setSkillName, skillImage, setSkillImage }: StepTwoProps) => {
  // Ajouter l'état pour stocker les compétences
  const [skills, setSkills] = useState<Skill[]>([]);
  
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

  // Ajouter la fonction pour gérer l'ajout d'une compétence
  const handleAddSkill = () => {
    if (skillName.trim() !== '') {
      const newSkill: Skill = {
        id: Date.now().toString(),
        name: skillName,
        image: skillImage,
      };
      
      setSkills([...skills, newSkill]);
      
      // Réinitialiser les champs
      setSkillName('');
      setSkillImage(null);
    }
  };

  // Ajouter la fonction pour supprimer une compétence
  const handleRemoveSkill = (id: string) => {
    setSkills(skills.filter(skill => skill.id !== id));
  };

  return (
    <ScrollView>
      <View style={globalStyles.formContainer}>
      {skills.map((skill) => (
        <InfoCard
          key={skill.id}
          id={skill.id}
          title={skill.name}
          image={skill.image}
          onRemove={handleRemoveSkill}
          imageStyle={styles.skillCardImage} 
        />
      ))}
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
          text="Ajouter une autre compétence"
          onPress={handleAddSkill}
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
  skillCardImage: {
    width: 50, 
    height: 50,
    borderRadius: 8,
    marginRight: 10
  }
});

export default StepTwo;