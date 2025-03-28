import React, { useState, useEffect, useRef } from "react";
import { ScrollView, View, Text, StyleSheet, Image, TouchableOpacity, ActivityIndicator, Alert } from "react-native";
import { globalStyles } from "@/app/styles/styles";
import * as ImagePicker from "expo-image-picker";
import { useLocalSearchParams, useRouter, Stack } from "expo-router";
import { ArrowLeft } from "lucide-react-native";

import { Input } from "@/app/components/ui/Input";
import { TextArea } from "@/app/components/ui/TextArea";
import { InputFile } from "@/app/components/ui/InputFIle";
import { ButtonFull } from "@/app/components/ui/ButtonFull";
import { HeaderTitle } from "@/app/components/ui/HeaderTexte";
import { usePortfolio } from "@/app/context/PortfolioContext";
import { updateProject, deleteProject } from "@/app/utils/api.service";

const ProjectDetails = () => {
  const { title, id } = useLocalSearchParams<{ title: string; id: string }>();
  const { portfolio, loading, fetchPortfolioData, getCompleteImageUrl, markNeedsRefresh } = usePortfolio();
  const router = useRouter();
  
  const [projectTitle, setProjectTitle] = useState("");
  const [projectDescription, setProjectDescription] = useState("");
  const [linkName, setLinkName] = useState("");
  const [linkUrl, setLinkUrl] = useState("");
  const [projectImage, setProjectImage] = useState<string | null>(null);
  const [originalImage, setOriginalImage] = useState<string | null>(null);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const isMountedRef = useRef<boolean>(true);

  useEffect(() => {
    return () => {
      isMountedRef.current = false;
    };
  }, []);

  useEffect(() => {
    loadProjectData();
  }, [portfolio, id]);

  const loadProjectData = () => {
    if (portfolio && id) {
      const project = portfolio.projects.find((p) => p.id === id);
      if (project) {
        setProjectTitle(project.title || "");
        setProjectDescription(project.description || "");

        const linksData = (project as any).projectsLinks ?? project.links;
        if (linksData && linksData.length > 0) {
          setLinkName(linksData[0].name || "");
          setLinkUrl(linksData[0].url || "");
        } else {
          setLinkName("");
          setLinkUrl("");
        }

        if (project.projectsImages && project.projectsImages.length > 0) {
          const imageUrl = getCompleteImageUrl(project.projectsImages[0].img_src);
          setOriginalImage(imageUrl);
        } else {
          setOriginalImage(null);
        }

        setIsLoading(false);
      }
    }
  };

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

  const handleUpdateProject = async () => {
    if (!projectTitle.trim()) {
      setError("Le titre du projet est requis");
      return;
    }

    try {
      setSaving(true);
      setError(null);
      
      const links = linkName && linkUrl ? [{ name: linkName, url: linkUrl }] : [];
      
      await updateProject(
        id, 
        { 
          title: projectTitle, 
          description: projectDescription, 
          links 
        }, 
        projectImage
      );
      
      markNeedsRefresh();
      
      Alert.alert(
        "Succès",
        "Le projet a été mis à jour avec succès!",
        [
          { 
            text: "OK", 
            onPress: () => {
              router.back();
            }
          }
        ]
      );
    } catch (err) {
      console.error("Erreur détaillée:", err);
      if (isMountedRef.current) {
        setError("Erreur lors de la mise à jour du projet. Veuillez réessayer.");
      }
    } finally {
      if (isMountedRef.current) {
        setSaving(false);
      }
    }
  };

  if (isLoading || loading) {
    return (
      <View style={[globalStyles.containerPage, styles.centerContent]}>
        <ActivityIndicator size="large" color="#3E3F92" />
        <Text style={styles.loadingText}>Chargement du projet...</Text>
      </View>
    );
  }

  return (
    <>
      <Stack.Screen
        options={{
          headerShown: true,
          headerStyle: { backgroundColor: "#000" },
          headerTintColor: "#fff",
          headerTitle: "Détails du projet",
          headerLeft: () => (
            <ArrowLeft
              color="#fff"
              size={24}
              onPress={() => {
                router.back();
              }}
            />
          ),
        }}
      />
      
      <ScrollView style={globalStyles.containerPage}>
        <HeaderTitle style={{ marginTop: 10 }}
          title={title || "Détails du projet"}
          description="Vous pouvez modifier les détails de votre projet ici"
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
              <Text style={styles.imageText}>Nouvelle image sélectionnée</Text>
            </View>
          ) : originalImage ? (
            <View style={styles.imageContainer}>
              <Image source={{ uri: originalImage }} style={styles.image} />
              <Text style={styles.imageText}>Image actuelle</Text>
            </View>
          ) : null}

          {error && <Text style={styles.errorText}>{error}</Text>}

          <ButtonFull 
            text={saving ? "Mise à jour en cours..." : "Mettre à jour le projet"} 
            onPress={handleUpdateProject}
            // disabled={saving}
          />
          
          <ButtonFull 
            text="Supprimer le projet" 
            onPress={() => {
              Alert.alert(
                "Confirmation",
                "Êtes-vous sûr de vouloir supprimer ce projet ?",
                [
                  { text: "Annuler", style: "cancel" },
                  { 
                    text: "Supprimer", 
                    style: "destructive",
                    onPress: async () => {
                      try {
                        setSaving(true);
                        await deleteProject(id);
                        markNeedsRefresh();
                        Alert.alert("Succès", "Le projet a été supprimé avec succès");
                        router.back();
                      } catch (err) {
                        console.error("Erreur lors de la suppression du projet:", err);
                        setError("Erreur lors de la suppression du projet");
                      } finally {
                        if (isMountedRef.current) {
                          setSaving(false);
                        }
                      }
                    }
                  }
                ]
              );
            }}
            style={styles.deleteButton}
            // disabled={saving}
          />
          
          <TouchableOpacity 
            style={styles.cancelButton} 
            onPress={() => router.back()}
            disabled={saving}
          >
            <Text style={styles.cancelButtonText}>Annuler</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  centerContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingText: {
    color: "#FFFFFF",
    marginTop: 10,
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
  errorText: {
    color: "#FF6B6B",
    textAlign: "center",
    marginVertical: 10,
  },
  cancelButton: {
    marginTop: 10,
    padding: 15,
    borderRadius: 13,
    alignItems: 'center',
  },
  cancelButtonText: {
    color: "#7D7E83",
    fontSize: 16,
    fontWeight: '600',
  },
  deleteButton: {
    backgroundColor: "#FF6B6B",
    marginTop: 10,
  }
});

export default ProjectDetails;
