import React, { useState, useCallback, useRef, useEffect } from "react";
import { ScrollView, View, Text, StyleSheet, Image, RefreshControl } from "react-native";
import { globalStyles } from "@/app/styles/styles";
import * as ImagePicker from "expo-image-picker";
import { useRouter, useFocusEffect } from "expo-router";

import { Input } from "@/app/components/ui/Input";
import { TextArea } from "@/app/components/ui/TextArea";
import { InputFile } from "@/app/components/ui/InputFIle";
import { ButtonFull } from "@/app/components/ui/ButtonFull";
import { HeaderTitle } from "@/app/components/ui/HeaderTexte";
import { HeaderLogo } from "@/app/components/ui/HeaderLogo";
import { createProject } from "@/app/utils/api.service";
import { usePortfolio } from "@/app/context/PortfolioContext";
import ProjectDisplay from '@/app/components/ui/ProjectDisplay';

const Project = () => {
  const { portfolio, loading, fetchPortfolioData, getCompleteImageUrl, markNeedsRefresh } = usePortfolio();
  const router = useRouter();
  const [projectTitle, setProjectTitle] = useState("");
  const [projectDescription, setProjectDescription] = useState("");
  const [linkName, setLinkName] = useState("");
  const [linkUrl, setLinkUrl] = useState("");
  const [projectImage, setProjectImage] = useState<string | null>(null);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [refreshing, setRefreshing] = useState(false);
  
  const isMountedRef = useRef(true);
  const dataLoadedRef = useRef(false);

  useEffect(() => {
    return () => {
      isMountedRef.current = false;
    };
  }, []);

  useFocusEffect(
    useCallback(() => {
    }, [])
  );

  const onRefresh = useCallback(async () => {
    if (!isMountedRef.current) return;
    setRefreshing(true);
    await fetchPortfolioData(true);
    if (isMountedRef.current) {
      setRefreshing(false);
    }
  }, [fetchPortfolioData]);

  const handleSelectImage = async () => {
    try {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 0.1,
      });
      
      if (!result.canceled) {
        setProjectImage(result.assets[0].uri);
      }
    } catch (e) {
      console.error("Erreur lors de la sélection de l'image:", e);
      setError("Impossible de sélectionner l'image");
    }
  };

  const handleAddProject = async () => {
    if (!projectTitle.trim()) {
      setError("Le titre du projet est requis");
      return;
    }
    try {
      setSaving(true);
      setError(null);
      const links = linkName && linkUrl ? [{ name: linkName, url: linkUrl }] : [];
      await createProject({ title: projectTitle, description: projectDescription, links }, projectImage);
      resetForm();
      markNeedsRefresh();
    } catch (err) {
      if (isMountedRef.current) {
        setError("Erreur lors de l'ajout du projet");
      }
    } finally {
      if (isMountedRef.current) {
        setSaving(false);
      }
    }
  };

  const handleProjectPress = (projectTitle: string, projectId: string) => {
    router.push({
      pathname: '/project-details',
      params: { title: projectTitle, id: projectId }
    });
  };

  const resetForm = () => {
    setProjectTitle("");
    setProjectDescription("");
    setLinkName("");
    setLinkUrl("");
    setProjectImage(null);
  };

  return (
    <>
      <HeaderLogo />

      <ScrollView 
        style={globalStyles.containerPage}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
            colors={["#3E3F92"]}
            tintColor="#3E3F92"
          />
        }
      >
        <HeaderTitle
          title="Vos Projets"
          description="Vous pouvez ajouter vos projets ici"
        />
        <View style={globalStyles.formContainer}>
          <Input 
            label="Titre du projet" 
            value={projectTitle}
            onChangeText={setProjectTitle}
          />
          <TextArea
            label="Description du projet"
            value={projectDescription}
            onChangeText={setProjectDescription}
          />

          <Input 
            label="Nom du lien" 
            value={linkName}
            onChangeText={setLinkName}
          />
          <Input 
            label="URL du lien" 
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

          {error && <Text style={styles.errorText}>{error}</Text>}

          <ButtonFull 
            text={saving ? "Ajout en cours..." : "Ajouter le projet"} 
            onPress={handleAddProject}
            // disabled={saving}
          />
        </View>

        {loading ? (
          <View style={styles.loadingContainer}>
            <Text style={styles.loadingText}>Chargement des projets...</Text>
          </View>
        ) : portfolio?.projects && portfolio.projects.length > 0 ? (
          <ProjectDisplay
            projects={portfolio.projects}
            getCompleteImageUrl={getCompleteImageUrl}
            onArrowPress={handleProjectPress}
            headerTitle="Vos Projets"
          />
        ) : (
          <Text style={styles.noProjectsText}>Aucun projet disponible.</Text>
        )}
      </ScrollView>
    </>
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
  errorText: {
    color: "#FF6161",
    textAlign: "center",
    marginVertical: 10,
  },
  loadingContainer: {
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  loadingText: {
    color: "#FFFFFF",
    marginTop: 10,
  },
  noProjectsText: {
    color: "#7D7E83",
    textAlign: "center",
    padding: 20,
  }
});

export default Project;
