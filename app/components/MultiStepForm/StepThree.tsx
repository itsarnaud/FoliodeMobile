import React, { useState } from "react";
import { View, StyleSheet, ScrollView, Image, Text } from "react-native";
import { globalStyles } from "@/app/styles/styles";
import * as ImagePicker from "expo-image-picker";

import { Input } from "@/app/components/ui/Input";
import { TextArea } from "@/app/components/ui/TextArea";
import { InputFile } from "@/app/components/ui/InputFIle";
import { ButtonFull } from "@/app/components/ui/ButtonFull";
import { InfoCard } from "@/app/components/ui/InfoCard";
import { Project } from "@/app/interface/project";

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
  // Ajouter l'état pour stocker les projets
  const [projects, setProjects] = useState<Project[]>([]);

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

  // Fonction pour ajouter un projet
  const handleAddProject = () => {
    if (title.trim() !== '') {
      const newProject: Project = {
        id: Date.now().toString(),
        title,
        description,
        linkName,
        linkUrl,
        image: projectImage
      };
      
      setProjects([...projects, newProject]);
      
      // Réinitialiser les champs
      setTitle('');
      setDescription('');
      setLinkName('');
      setLinkUrl('');
      setProjectImage(null);
    }
  };

  // Fonction pour supprimer un projet
  const handleRemoveProject = (id: string) => {
    setProjects(projects.filter(project => project.id !== id));
  };

  return (
    <ScrollView>
      <View style={globalStyles.formContainer}>
        {projects.map((project) => (
          <InfoCard
            key={project.id}
            id={project.id}
            title={project.title}
            subtitle={project.description}
            image={project.image}
            additionalText={project.linkName ? `Lien: ${project.linkName}` : undefined}
            onRemove={handleRemoveProject}
            imageStyle={styles.projectImage}
            titleStyle={styles.projectTitle}
          />
        ))}
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
          text="Ajouter un autre projet"
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
  projectImage: {
    width: 60,
    height: 60,
    borderRadius: 8,
    marginRight: 10
  },
  projectTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#3E3F92'
  }
});

export default StepThree;