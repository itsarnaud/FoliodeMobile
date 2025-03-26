import React, { useState, useCallback, useRef, useEffect } from "react";
import { ScrollView, View, Text, StyleSheet, Image, RefreshControl } from "react-native";
import { globalStyles } from "@/app/styles/styles";
import * as ImagePicker from "expo-image-picker";
import { useRouter, useFocusEffect } from "expo-router";

import { Input } from "@/app/components/ui/Input";
import { InputFile } from "@/app/components/ui/InputFIle";
import { ButtonFull } from "@/app/components/ui/ButtonFull";
import { ProjectCard } from "@/app/components/ui/ProjectCardItem";
import { HeaderTitle } from "@/app/components/ui/HeaderTexte";
import { HeaderLogo } from "@/app/components/ui/HeaderLogo";
import { createSkills } from "@/app/utils/api.service";
import { usePortfolio } from "@/app/context/PortfolioContext";

const Skills = () => {
  const { portfolio, loading, fetchPortfolioData, getCompleteImageUrl, markNeedsRefresh } = usePortfolio();
  const [skillName, setSkillName] = useState("");
  const [skillImage, setSkillImage] = useState<string | null>(null);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [refreshing, setRefreshing] = useState(false);
  
  const isMountedRef = useRef(true);

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
        setSkillImage(result.assets[0].uri);
      }
    } catch (e) {
      console.error("Erreur lors de la sélection de l'image:", e);
      setError("Impossible de sélectionner l'image");
    }
  };

  const handleAddSkill = async () => {
    if (!skillName.trim()) {
      setError("Le nom de la compétence est requis");
      return;
    }
    try {
      setSaving(true);
      setError(null);
      await createSkills({ name: skillName }, skillImage);
      resetForm();
      markNeedsRefresh();
    } catch (err) {
      if (isMountedRef.current) {
        setError("Erreur lors de l'ajout de la compétence");
      }
    } finally {
      if (isMountedRef.current) {
        setSaving(false);
      }
    }
  };

  const resetForm = () => {
    setSkillName("");
    setSkillImage(null);
  };

  const skillsData = portfolio?.tools?.map(tool => ({
    id: tool.id,
    title: tool.name,
    image: tool.image ? getCompleteImageUrl(tool.image) : null
  })) || [];

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
          title="Vos Compétences"
          description="Vous pouvez ajouter vos compétences ici"
        />
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

          {error && <Text style={styles.errorText}>{error}</Text>}

          <ButtonFull 
            text={saving ? "Ajout en cours..." : "Ajouter la compétence"} 
            onPress={handleAddSkill}
          />
        </View>

        {loading ? (
          <View style={styles.loadingContainer}>
            <Text style={styles.loadingText}>Chargement des compétences...</Text>
          </View>
        ) : skillsData && skillsData.length > 0 ? (
          <ProjectCard
            headerTitle="Vos compétences"
            data={skillsData}
          />
        ) : (
          <Text style={styles.noSkillsText}>Aucune compétence disponible.</Text>
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
  noSkillsText: {
    color: "#7D7E83",
    textAlign: "center",
    padding: 20,
  }
});

export default Skills;